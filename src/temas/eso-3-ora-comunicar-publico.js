// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "Comunicar: el emisor y el público",
  minutos: 45,
  objetivos: ["Explicar qué es la oratoria y para qué sirve", "Analizar al público antes de hablar", "Conocer los tres pilares de la persuasión: ethos, pathos y logos"],
  claves: ["oratoria", "retórica", "orador", "público", "propósito", "ethos", "pathos", "logos", "adecuación"],
  pregunta: {
    texto: "Tienes que convencer de lo mismo (que el patio necesita más sombra) a tus compañeros, al consejo escolar y a la alcaldesa. ¿Les hablarías igual?",
    respuesta: "No. El mensaje es el mismo, pero <mark>el público cambia</mark>: lo que sabe, lo que le preocupa y el tono que espera. Un buen orador piensa primero en quién le escucha y después en qué decir y cómo. Esa es la base de la <b>oratoria</b>.",
  },
  bloques: [
    {
      html: `<h3>Qué es la oratoria</h3><p>La <b>oratoria</b> es el arte de <mark>hablar en público</mark> de forma clara, ordenada y convincente. Nació en la antigua Grecia, donde los ciudadanos debatían en la asamblea y se defendían ante los tribunales, y la estudió la <b>retórica</b>. Hoy la usamos al exponer un trabajo, presentarnos a delegado, defender una idea en una reunión o hacer una entrevista de trabajo.</p>`,
      svg: L.filas("Situaciones en las que usamos la oratoria", [
        ["En clase", "exposiciones y debates", "var(--pen)"],
        ["En el instituto", "elecciones a delegado", "var(--leaf)"],
        ["En la vida", "entrevistas, reuniones", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El orador y su propósito</h3><p>Antes de hablar, el orador debe tener claro su <b>propósito</b>. Puede querer <b>informar</b> (explicar cómo funciona algo), <b>persuadir</b> (convencer de una idea o de una acción), <b>entretener</b> (contar una anécdota) o <b>emocionar</b> (un discurso de despedida). Resumir el propósito en una frase ayuda a no perderse: «Quiero que, al acabar, mis compañeros <mark>voten</mark> por instalar toldos».</p>`,
      svg: L.tabla("Propósitos de un discurso", ["Propósito", "Ejemplo"], [
        ["Informar", "cómo reciclar"], ["Persuadir", "vota por los toldos"], ["Entretener", "una anécdota"], ["Emocionar", "una despedida"],
      ]),
    },
    {
      html: `<h3>Conocer al público</h3><p>El público no es un simple receptor: es la razón de ser del discurso. Antes de preparar nada, hazte estas preguntas: <b>¿quiénes son?</b> (edad, intereses), <b>¿qué saben ya</b> del tema?, <b>¿qué piensan</b> (están a favor, en contra o les da igual)?, <b>¿qué necesitan</b> oír para cambiar de opinión? y <b>¿cuánto tiempo</b> y en qué lugar me escucharán? Las respuestas deciden el vocabulario, los ejemplos y la duración.</p>`,
      svg: L.filas("Preguntas para analizar al público", [
        ["¿Quiénes son?", "edad, intereses", "var(--pen)"],
        ["¿Qué saben?", "nivel del tema", "var(--leaf)"],
        ["¿Qué piensan?", "a favor, en contra", "var(--red)"],
        ["¿Cuánto tiempo?", "y en qué lugar", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Ethos, pathos y logos</h3><p>Aristóteles explicó que se convence con tres herramientas. El <b>ethos</b> es la <mark>credibilidad</mark> del orador: que el público confíe en él porque sabe del tema y parece honesto. El <b>pathos</b> son las <mark>emociones</mark> que despierta en el público. El <b>logos</b> son los <mark>argumentos racionales</mark>: datos, ejemplos y razonamientos. Un buen discurso equilibra las tres.</p>`,
      svg: L.filas("Los tres pilares de la persuasión según Aristóteles", [
        ["Ethos", "credibilidad del orador", "var(--pen)"],
        ["Pathos", "emociones del público", "var(--red)"],
        ["Logos", "argumentos y datos", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Adecuar el mensaje</h3><p>Con lo que sabes del público, <b>adecúa</b> el mensaje. Elige el <b>registro</b>: formal ante un tribunal o la dirección; más cercano ante tus compañeros, pero sin vulgarismos. Escoge <b>ejemplos</b> de su mundo: a los alumnos les convence que el patio sea más agradable; a la dirección, que sea seguro y barato. Y ajusta la <b>duración</b>: un discurso que se pasa de tiempo pierde al público.</p>`,
      svg: L.frase("Adecuar el mensaje al público", [
        ["Mismo tema", "", "var(--ink)"], ["registro", "formal o cercano", "var(--pen)"], ["ejemplos", "de su mundo", "var(--leaf)"], ["duración", "la justa", "var(--red)"],
      ], "el público decide cómo se dice"),
    },
  ],
  figura: {
    titulo: "Antes de hablar: tres preguntas",
    svg: L.pasos("Preguntas previas a cualquier discurso", [
      ["¿Para qué hablo?", ["informar, persuadir,", "entretener, emocionar"], "var(--pen)"],
      ["¿A quién hablo?", ["qué saben,", "qué piensan"], "var(--leaf)"],
      ["¿Cómo convenzo?", ["ethos, pathos", "y logos"], "var(--red)"],
    ]),
  },
  video: { id: "dhQHPjmk0-k", titulo: "10 consejos para mejorar tu oratoria al hablar en público", canal: "Fernando Miralles", vistas: 1194676, megusta: 0, busqueda: "cómo hablar en público" },
  quiz: [
    { q: "La oratoria es…", o: ["el arte de hablar en público", "el estudio de la ortografía", "un tipo de poesía"], a: 0, e: "Hablar de forma clara y convincente." },
    { q: "Si quieres que el público haga algo, tu propósito es…", o: ["persuadir", "entretener", "informar"], a: 0, e: "Buscas convencer." },
    { q: "El ethos se refiere a…", o: ["la credibilidad del orador", "las emociones", "los datos"], a: 0, e: "Confianza que inspira." },
    { q: "Contar la historia de una persona afectada para conmover usa el…", o: ["pathos", "logos", "ethos"], a: 0, e: "Apela a las emociones." },
    { q: "Lo primero que debe analizar un orador es…", o: ["a su público", "el color de las diapositivas", "la ropa"], a: 0, e: "Todo se adapta al público." },
  ],
  examen: [
    { q: "Dar estadísticas y razonamientos es usar el…", o: ["logos", "pathos", "ethos"], a: 0, e: "Argumentos racionales." },
    { q: "La retórica nació en…", o: ["la antigua Grecia", "la Edad Media", "el siglo XX"], a: 0, e: "Para la asamblea y los tribunales." },
    { q: "Adecuar un discurso significa…", o: ["adaptarlo al público y la situación", "hacerlo más largo", "leerlo en voz alta"], a: 0, e: "Registro, ejemplos y duración." },
  ],
  feynman: ["Qué es la oratoria y dónde la usamos", "Los cuatro propósitos de un discurso", "Qué preguntas hay que hacerse sobre el público", "Qué son el ethos, el pathos y el logos"],
  mapa: mapa("COMUNICAR", "var(--eso)", [
    ["Oratoria", "hablar en público", "var(--pen)"],
    ["Propósito", "informar · persuadir…", "var(--leaf)"],
    ["Público", "quién · qué sabe · qué piensa", "var(--red)"],
    ["Persuasión", "ethos · pathos · logos", "var(--inf)"],
  ]),
  tarjetas: [
    ["Oratoria", "Arte de hablar en público de forma clara, ordenada y convincente."],
    ["Ethos", "Credibilidad y confianza que transmite el orador."],
    ["Pathos", "Emociones que el discurso despierta en el público."],
    ["Logos", "Argumentos racionales: datos, ejemplos y razonamientos."],
    ["Adecuación", "Adaptar registro, ejemplos y duración al público y la situación."],
  ],
  familias: ["Pedidle que os explique un tema en dos minutos como si fuerais niños de 8 años y luego como si fuerais expertos.", "Ved juntos un discurso conocido y buscad ethos, pathos y logos.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación oral: producción oral formal; adecuación a la situación comunicativa y al interlocutor; estrategias de persuasión (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Discurso de 1 minuto sobre el mismo tema para tres públicos distintos.", "Análisis de un discurso de un concurso de oratoria juvenil.", "Rueda de ethos, pathos y logos con anuncios publicitarios."],
  },
  fuentes: [
    L.BOE,
    { t: "Retórica (Aristóteles), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ret%C3%B3rica_(Arist%C3%B3teles)" },
    { t: "Liga de Debate Escolar de la Fundación Activa-t", url: "https://www.fundacionactivat.org/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Reconocer las cualidades de un buen orador", "Practicar la escucha activa como público"],
  bloques: [
    { tras: "Qué es la oratoria", html: `<h3>Por qué merece la pena aprender oratoria</h3><p>Hablar bien en público no es un don con el que se nace: es una <mark>habilidad que se entrena</mark>, como un deporte. Los grandes oradores de la historia practicaron mucho; el griego Demóstenes, según la tradición, se ponía piedras en la boca para mejorar su dicción y hablaba frente al mar para hacerse oír por encima de las olas.</p><p>Aprender oratoria tiene ventajas en muchos ámbitos: mejora las notas en las exposiciones y exámenes orales, da <b>seguridad</b> y autoestima, ayuda a ordenar las ideas, permite defender tus derechos y los de otros, y es una de las competencias que más valoran las empresas. Además, quien sabe cómo funciona la persuasión es más difícil de manipular.</p>` },
    { tras: "El orador y su propósito", html: `<h3>Las cualidades de un buen orador</h3><ul><li><b>Claridad</b>: dice las cosas de forma sencilla y ordenada, sin rodeos.</li><li><b>Preparación</b>: domina el tema y ha ensayado el discurso.</li><li><b>Naturalidad</b>: no recita como un robot; habla como si conversara con el público.</li><li><b>Coherencia</b>: lo que dice con palabras coincide con su voz, sus gestos y su actitud.</li><li><b>Respeto</b>: no ridiculiza al público ni a quienes piensan distinto.</li><li><b>Brevedad</b>: dice lo necesario y termina a tiempo.</li></ul><p>Fíjate en que ninguna depende de tener una voz bonita o de ser extrovertido: todas se pueden aprender con práctica y con la opinión sincera de otras personas.</p>` },
    { tras: "Conocer al público", html: `<h3>Tipos de público</h3><p>Según su actitud ante tu mensaje, el público puede ser <b>favorable</b> (ya está de acuerdo: conviene animarlo a actuar), <b>contrario</b> (no está de acuerdo: conviene empezar por lo que compartís, reconocer sus razones y aportar datos sólidos), <b>indiferente</b> (no le interesa: hay que despertar su curiosidad con una pregunta, una historia o un dato sorprendente) o <b>desinformado</b> (no sabe del tema: hay que explicar lo básico sin tecnicismos).</p><p>En la mayoría de los casos, el público es <mark>mixto</mark>. Por eso es útil preparar argumentos para cada grupo y fijarse durante el discurso en las caras de quienes escuchan: si se aburren, hay que cambiar de ritmo; si parecen confusos, poner un ejemplo.</p>` },
    { tras: "Ethos, pathos y logos", html: `<h3>Cómo ganar credibilidad (ethos)</h3><p>El público decide en pocos segundos si confía en quien habla. Para ganar credibilidad:</p><ol><li><b>Demuestra que conoces el tema</b>: cita fuentes fiables («según la Agencia Estatal de Meteorología…»), da datos concretos.</li><li><b>Cuenta tu relación con el tema</b>: «Llevo tres años en el equipo de baloncesto y sé lo que es entrenar con 35 grados».</li><li><b>Sé honesto</b>: reconoce lo que no sabes y los puntos débiles de tu propuesta.</li><li><b>Cuida la imagen</b>: puntualidad, postura y ropa adecuada a la situación.</li></ol><p>Un error grave es exagerar o inventarse datos: si el público lo descubre, el ethos se hunde y ya no creerá nada de lo que digas.</p>` },
    { tras: "Adecuar el mensaje", html: `<h3>El público también trabaja: la escucha activa</h3><p>Cuando te toca ser público, también tienes una responsabilidad. La <b>escucha activa</b> consiste en prestar atención de verdad: mirar a quien habla, no interrumpir, no usar el móvil y mostrar con gestos que sigues el discurso (asentir, sonreír). Ayuda también <mark>tomar notas</mark> de las ideas principales y de las preguntas que te surjan.</p><p>Al final, puedes hacer una <b>pregunta</b> o dar una <b>valoración constructiva</b>: empieza por algo positivo, señala un aspecto concreto que se puede mejorar y termina con un ánimo. Así todos aprenden y el aula se convierte en un lugar seguro para hablar en público.</p>` },
  ],
  videos: [
    ["Qué es la oratoria", L.vid("FIwdDFht7FE", "Pablo Sánchez. Discurso ganador junior del VII Concurso de Oratoria 2019", "Fundación Educativa Activa-t", 575525)],
    ["Las cualidades de un buen orador", L.vid("qaR-oq0ntJE", "5 hábitos para comunicar mejor", "Fernando Miralles", 558765)],
  ],
  ejemplos: [
    ["Analiza al público: vas a pedir al AMPA dinero para un viaje de fin de curso.", ["¿Quiénes son? Madres y padres del centro, adultos.", "¿Qué saben? Poco del viaje; ¿qué piensan? Les preocupa el coste y la seguridad.", "¿Qué necesitan oír? El presupuesto detallado, el programa educativo y las medidas de seguridad."], "discurso formal, con datos (logos) y garantías (ethos)."],
    ["Identifica ethos, pathos y logos: «Soy enfermera desde hace veinte años. Cada invierno veo a niños con gripe que podrían haberse vacunado. Las vacunas reducen los ingresos hospitalarios un 40 %».", ["«Soy enfermera desde hace veinte años»: credibilidad → ethos.", "«Veo a niños con gripe»: emoción → pathos.", "«Reducen los ingresos un 40 %»: dato → logos."], "las tres herramientas, en ese orden."],
    ["Escribe el propósito de un discurso para presentarte a delegado.", ["Propósito principal: persuadir.", "Acción concreta que buscas: que te voten.", "Una frase: «Quiero que, al terminar, mis compañeros me voten como delegado porque sé escuchar y tengo propuestas concretas»."], "persuadir para conseguir votos."],
  ],
  errores: [
    "Preparar el discurso sin pensar en quién lo va a escuchar.",
    "Usar solo emociones (pathos) sin argumentos (logos), o solo datos sin conectar con el público.",
    "Hablar en un registro demasiado coloquial en situaciones formales.",
    "Inventar o exagerar datos: destruye la credibilidad.",
    "Como público, mirar el móvil o interrumpir a quien habla.",
  ],
  ejercicios: [
    ["Escribe tres situaciones de tu vida en las que necesites hablar en público.", "Respuesta abierta. Por ejemplo: exponer un trabajo, presentarte a delegado, explicar un problema en una reunión de tutoría."],
    ["¿Qué propósito tiene un discurso de despedida a un profesor que se jubila?", "Emocionar (y también agradecer)."],
    ["Escribe dos preguntas que harías para conocer a tu público antes de hablar de ciberacoso a alumnos de 1.º de ESO.", "Por ejemplo: ¿Qué redes usan? ¿Saben qué hacer si ven un caso?"],
    ["Define ethos, pathos y logos con tus palabras.", "Ethos: que confíen en ti. Pathos: hacer sentir. Logos: dar razones y datos."],
    ["Escribe una frase de pathos para defender la adopción de animales.", "Por ejemplo: «Imagina pasar tu vida en una jaula esperando a alguien que nunca llega»."],
    ["Escribe una frase de logos para el mismo tema.", "Por ejemplo: «Cada año se abandonan en España miles de perros y gatos, según los informes de las protectoras»."],
    ["¿Cómo empezarías ante un público indiferente?", "Con algo que despierte su interés: una pregunta, un dato sorprendente o una historia breve."],
    ["Adapta esta frase para la directora: «Tía, el patio es un horno, hay que poner toldos ya».", "«Directora, en junio el patio alcanza temperaturas muy altas; proponemos instalar toldos para proteger a los alumnos»."],
    ["Escribe una valoración constructiva para un compañero que ha hablado muy deprisa.", "Por ejemplo: «Has explicado muy bien los datos; si hablas un poco más despacio, se te entenderá todavía mejor. ¡Buen trabajo!»."],
    ["¿Por qué crees que aprender oratoria protege contra la manipulación?", "Porque quien conoce las técnicas de persuasión las reconoce cuando otros las usan y puede analizarlas con espíritu crítico."],
  ],
  quiz: [
    ["Un público que ya está de acuerdo contigo es…", ["favorable", "contrario", "indiferente"], 0, "Hay que animarlo a actuar."],
    ["Citar una fuente fiable refuerza el…", ["ethos", "pathos", "registro"], 0, "Credibilidad."],
    ["La escucha activa incluye…", ["no interrumpir y tomar notas", "mirar el móvil", "hablar a la vez"], 0, "Atención real a quien habla."],
    ["Una valoración constructiva empieza por…", ["algo positivo", "el peor error", "una burla"], 0, "Después, una mejora concreta."],
    ["¿Cuál es una cualidad del buen orador?", ["La claridad", "Hablar muy deprisa", "Leer sin mirar al público"], 0, "Decir las cosas de forma sencilla y ordenada."],
  ],
  tarjetas: [
    ["Público indiferente", "No le interesa el tema: hay que despertar su curiosidad."],
    ["Escucha activa", "Prestar atención real: mirar, no interrumpir, tomar notas y preguntar."],
    ["Valoración constructiva", "Algo positivo + una mejora concreta + un ánimo."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["El chico de los guijarros", `<p>Hace unos 2.400 años, en Atenas, un joven llamado <b>Demóstenes</b> quería ser orador, pero tenía todo en contra: tartamudeaba, tenía la voz débil y se quedaba sin aire al hablar. La primera vez que intervino en la asamblea, el público se rio de él. Según cuentan los historiadores antiguos, en lugar de rendirse se encerró a entrenar: hablaba con <b>guijarros en la boca</b> para mejorar la pronunciación, recitaba versos mientras subía cuestas corriendo para ganar fuerza en los pulmones y ensayaba frente al mar, intentando que su voz se oyera por encima del ruido de las olas.</p><p>Años después, Demóstenes era el orador más admirado de Grecia. Sus discursos para defender la libertad de Atenas se estudiaron durante siglos. Su historia demuestra algo que vas a comprobar en este tema: hablar bien en público no es un don con el que unos nacen y otros no, sino una <b>habilidad que se aprende</b>. Para lograrlo hay que entender cómo funciona la comunicación, conocer al público, tener claro el propósito y saber combinar credibilidad, emoción y razones. Y, sobre todo, hay que practicar.</p>`],
  mas: [
    ["<h3>El orador y su propósito</h3>", `<p>El propósito condiciona todo lo demás. Si quieres <b>informar</b>, lo importante es la claridad y el orden; si quieres <b>persuadir</b>, las razones y la llamada a la acción; si quieres <b>entretener</b>, el ritmo, el humor y las historias; y si quieres <b>emocionar</b> (en una despedida o un homenaje), los recuerdos y las palabras sinceras. Muchos discursos combinan varios propósitos, pero siempre hay uno principal.</p>`],
    ["<h3>Conocer al público</h3>", `<p>Hay datos que puedes conocer de antemano: la <b>edad</b>, el número de personas, qué saben ya del tema, qué les interesa y qué esperan de ti. Si no lo sabes, pregunta a quien organiza el acto o, en clase, haz una pequeña encuesta. Y al empezar a hablar, observa las caras: el público te da pistas constantes de si te sigue o se aburre.</p>`],
    ["<h3>Adecuar el mensaje</h3>", `<p>Adecuar no significa cambiar de opinión según quién escuche, sino elegir la <b>forma</b> que mejor llega a cada público: el vocabulario, los ejemplos, la duración, el tono y el nivel de detalle. El contenido y la verdad de lo que dices se mantienen; lo que cambia es el camino para que llegue.</p>`],
    ["<h3>Ethos, pathos y logos</h3>", `<p>Los tres recursos funcionan mejor juntos. Un discurso solo con logos puede ser correcto pero frío; solo con pathos, emocionante pero poco fiable; y sin ethos, nadie se lo cree aunque sea verdad. Imagina que pides al ayuntamiento un carril bici: tu experiencia como ciclista diario te da ethos, el caso de un compañero atropellado aporta pathos y los datos de tráfico del barrio son tu logos.</p>`],
    ["<h3>Tipos de público</h3>", `<p>Ante un público <b>contrario</b>, el error más común es atacarlo de frente. Funciona mejor empezar por lo que compartís («Todos queremos un instituto limpio»), reconocer sus preocupaciones y avanzar poco a poco. No esperes convencer a todos: a veces el éxito consiste en que el público contrario te escuche y dude.</p>`],
  ],
  svgs: [
    ["<h3>Por qué merece la pena aprender oratoria</h3>", "Para qué sirve la oratoria", [["Estudios", "exposiciones y exámenes orales"], ["Trabajo", "entrevistas y reuniones"], ["Ciudadanía", "defender tus ideas"]], "una habilidad para la vida"],
    ["<h3>Las cualidades de un buen orador</h3>", "Cualidades del buen orador", [["Claridad", "sencillo y ordenado"], ["Preparación", "domina el tema"], ["Naturalidad", "se muestra como es"]], "se pueden entrenar"],
    ["<h3>Tipos de público</h3>", "Tres tipos de público", [["Favorable", "animarlo a actuar"], ["Indiferente", "despertar su interés"], ["Contrario", "puntos comunes primero"]], "según su actitud"],
    ["<h3>Cómo ganar credibilidad (ethos)</h3>", "Cómo ganar credibilidad", [["Conocimiento", "datos y fuentes"], ["Honestidad", "reconoce límites"], ["Coherencia", "lo que dices y haces"]], "el ethos"],
    ["<h3>El público también trabaja: la escucha activa</h3>", "La escucha activa", [["Atención", "mirar y no interrumpir"], ["Notas", "apuntar ideas clave"], ["Respuesta", "preguntas y valoración"]], "el público también trabaja"],
  ],
  bloques: [
    { tras: "<h3>Qué es la oratoria</h3>", html: `<h3>Breve historia de la oratoria</h3><p>La oratoria nació en la Grecia del siglo V a. C., cuando la democracia ateniense convirtió la palabra en poder: en la asamblea y en los tribunales, los ciudadanos tenían que hablar en persona para defender sus propuestas o a sí mismos. Aparecieron los <b>sofistas</b>, maestros que enseñaban a hablar bien a cambio de dinero, y <b>Aristóteles</b> escribió la <i>Retórica</i>, el primer gran tratado sobre el arte de persuadir. El orador más famoso fue <mark>Demóstenes</mark>.</p><p>En Roma, la oratoria era imprescindible para hacer carrera política. <mark>Cicerón</mark> fue el gran orador de la República, y <b>Quintiliano</b>, un hispano de Calagurris (Calahorra), escribió un manual de educación del orador que definía al ideal como <i>vir bonus dicendi peritus</i>: «una buena persona experta en hablar». Durante siglos, la retórica fue una asignatura básica en escuelas y universidades. Hoy la oratoria vive en los parlamentos, los juicios, las charlas TED, las presentaciones de empresas, los vídeos de divulgación y las exposiciones de clase.</p>`, svg: ["Historia de la oratoria", [["Grecia", "Aristóteles, Demóstenes"], ["Roma", "Cicerón, Quintiliano"], ["Hoy", "parlamentos, charlas TED"]], "de Atenas a hoy"] },
    { tras: "<h3>El orador y su propósito</h3>", html: `<h3>El proceso de la comunicación</h3><p>Cuando hablamos en público se pone en marcha el <mark>proceso de la comunicación</mark>. El <b>emisor</b> (el orador) transmite un <b>mensaje</b> a unos <b>receptores</b> (el público) usando un <b>código</b> (la lengua, pero también los gestos y las imágenes) a través de un <b>canal</b> (el aire que transmite la voz, una pantalla, un micrófono). Todo ocurre en un <b>contexto</b>: un lugar, un momento y una situación concreta que dan sentido a lo que se dice.</p><p>Dos elementos son especialmente importantes en la oratoria. El <mark>ruido</mark> es todo lo que dificulta la comunicación: un ruido real (obras, conversaciones), pero también un vocabulario demasiado difícil, una letra minúscula en una diapositiva o un público cansado. Y la <mark>retroalimentación</mark> (o <i>feedback</i>) son las señales que el público devuelve al orador: caras de interés o de aburrimiento, risas, silencio, preguntas. Un buen orador reduce el ruido y está atento a la retroalimentación para ajustar su discurso sobre la marcha.</p>`, svg: ["Elementos de la comunicación", [["Emisor y receptor", "orador y público"], ["Ruido", "lo que dificulta"], ["Retroalimentación", "señales del público"]], "el proceso de comunicación"], video: "hablar" },
    { tras: "<h3>Ethos, pathos y logos</h3>", html: `<h3>Las emociones con responsabilidad</h3><p>Las personas no decidimos solo con la cabeza: las <mark>emociones</mark> influyen mucho en lo que pensamos y hacemos. Por eso el <b>pathos</b> es tan poderoso. Un orador puede despertar emociones contando una <b>historia</b> real con nombre y detalles, mostrando una <b>imagen</b> impactante, usando palabras con carga emocional o mostrando su propia emoción sincera. Una cifra como «miles de personas sin hogar» informa; la historia de una familia concreta que duerme en su coche conmueve.</p><p>Pero el pathos tiene límites éticos. Usar el <b>miedo</b> o la <b>rabia</b> para que el público deje de pensar es manipulación, y es la base de muchos discursos peligrosos de la historia. La emoción debe acompañar a las razones, no sustituirlas: un buen discurso emociona y, a la vez, da al público argumentos que puede comprobar. Una regla útil es preguntarse: «Si el público supiera exactamente lo que estoy haciendo, ¿le parecería bien?». Si la respuesta es no, es manipulación.</p>`, svg: ["Pathos responsable", [["Historia", "un caso real conmueve"], ["Límite", "no al miedo ni a la rabia"], ["Equilibrio", "emoción + razones"]], "emocionar sin manipular"] },
    { tras: "<h3>Adecuar el mensaje</h3>", html: `<h3>Un mensaje, tres públicos</h3><p>Imagina que tienes que explicar por qué es importante dormir bien. Ante <b>niños de primaria</b>, usarías frases cortas, una comparación sencilla («El cerebro es como un móvil: por la noche se carga») y quizá una pregunta para que participen: «¿Quién se ha dormido alguna vez en el coche?». Ante <b>tus compañeros de clase</b>, hablarías de cosas que les afectan directamente: el rendimiento en los exámenes, el mal humor, el uso del móvil por la noche, con algún dato llamativo.</p><p>Ante <b>familias en una reunión del instituto</b>, usarías un registro más formal, datos de fuentes médicas, consecuencias para la salud y consejos prácticos para casa. Ante un <b>público experto</b>, por ejemplo en un congreso de médicos, podrías usar términos técnicos y centrarte en lo novedoso. El mensaje central es el mismo en todos los casos; cambian el vocabulario, los ejemplos, la duración y el tono. Esta capacidad de adaptarse es una de las señales más claras de un orador maduro.</p>`, svg: ["Un mensaje, varios públicos", [["Niños", "frases cortas, comparaciones"], ["Compañeros", "lo que les afecta"], ["Adultos", "registro formal, datos"]], "adaptar sin cambiar el mensaje"] },
    { html: `<h3>La ética del orador</h3><p>Saber hablar en público da poder, y todo poder implica <b>responsabilidad</b>. Los maestros romanos ya decían que el orador ideal debía ser, ante todo, una buena persona. Hoy esa idea se concreta en unos principios sencillos. <b>Decir la verdad</b>: no inventar datos ni exagerarlos. <b>Citar las fuentes</b>: reconocer de dónde salen las ideas y las cifras, y no presentar como propio el trabajo de otros. <b>No manipular</b>: no ocultar información importante ni jugar con los miedos del público.</p><p>Además, el orador ético <b>respeta</b> a quienes piensan distinto, no humilla ni ridiculiza a nadie y piensa en las <b>consecuencias</b> de sus palabras, sobre todo cuando habla ante muchas personas o en redes sociales, donde un mensaje puede difundirse sin control. Hablar bien no consiste solo en convencer, sino en convencer con honestidad. A largo plazo, además, es lo más eficaz: el público olvida pronto un buen truco, pero recuerda siempre a quien le mintió.</p>`, svg: ["Principios del orador ético", [["Verdad", "no inventar datos"], ["Fuentes", "citar de dónde sale"], ["Respeto", "sin humillar a nadie"]]] },
  ],
  ejemplos: [
    ["Identifica los elementos de la comunicación en una exposición de clase sobre los volcanes.", ["Emisor: el alumno que expone. Receptores: la clase y el profesor.", "Mensaje: cómo se forman los volcanes. Código: el castellano, los gestos y las imágenes.", "Canal: la voz y la pantalla. Contexto: el aula, en horario de clase.", "Ruido posible: un ventilador o letra pequeña en las diapositivas."], "Todos los elementos están presentes; el orador debe reducir el ruido y atender a la retroalimentación."],
    ["Convierte este dato en pathos responsable: «El 30 % de los alumnos llega sin desayunar».", ["Conserva el dato, que aporta logos.", "Añade un caso concreto y verosímil: «Lucía llega a las ocho sin haber comido nada y a las once no puede concentrarse».", "Une ambos: el caso hace sentir el dato, y el dato demuestra que no es un caso aislado."], "«Como Lucía, que llega sin desayunar y a las once no puede concentrarse, el 30 % de los alumnos empieza el día con el estómago vacío»."],
    ["Adapta la frase «La biodiversidad está disminuyendo» para niños de seis años.", ["Elige palabras sencillas: animales y plantas en lugar de biodiversidad.", "Usa una imagen cercana: un jardín que se queda sin mariposas.", "Termina con una acción posible."], "«Cada año hay menos tipos de animales y plantas. Es como si nuestro jardín se quedara sin mariposas. ¡Podemos ayudar plantando flores!»."],
  ],
  errores: ["Usar las emociones para que el público deje de pensar, en lugar de acompañar con ellas a las razones."],
  niveles: "bbmbmmmmma",
  ejercicios: [
    ["b", "¿Quién fue Demóstenes y cómo superó sus dificultades?", "Un orador ateniense que tartamudeaba y tenía la voz débil; entrenó con guijarros en la boca, corriendo cuesta arriba mientras recitaba y hablando frente al mar."],
    ["b", "Escribe los elementos del proceso de la comunicación.", "Emisor, receptor, mensaje, código, canal y contexto; además, el ruido y la retroalimentación."],
    ["b", "¿Qué significa «vir bonus dicendi peritus» y quién lo dijo?", "«Una buena persona experta en hablar»; es la definición del orador ideal de Quintiliano, nacido en Calagurris (Calahorra)."],
    ["b", "Cita tres principios de la ética del orador.", "Decir la verdad, citar las fuentes y no manipular (también respetar a los demás y pensar en las consecuencias)."],
    ["b", "¿Qué es la retroalimentación?", "Las señales que el público devuelve al orador: caras, gestos, risas, silencios o preguntas."],
    ["b", "¿Cuáles son los cuatro propósitos principales de un discurso?", "Informar, persuadir, entretener y emocionar."],
    ["b", "Escribe dos ejemplos de ruido en una exposición.", "Obras en la calle y diapositivas con letra demasiado pequeña (también vocabulario muy difícil o un público cansado)."],
    ["m", "¿Qué diferencia hay entre adecuar el mensaje y cambiar de opinión según el público?", "Adecuar es cambiar la forma (vocabulario, ejemplos, tono) manteniendo el contenido y la verdad; cambiar de opinión según quién escuche sería incoherente y deshonesto."],
    ["m", "Escribe una frase de pathos responsable sobre el acoso escolar.", "Respuesta abierta. Ejemplo: «Imagina entrar cada mañana en clase sabiendo que nadie se sentará contigo. Para uno de cada diez alumnos, esto no es imaginación»."],
    ["m", "Explica por qué el miedo puede convertir un discurso en manipulación.", "Porque el miedo bloquea el pensamiento crítico: el público reacciona sin analizar las razones y acepta lo que se le propone para sentirse seguro."],
    ["m", "Adapta para tus compañeros: «Es imprescindible una ingesta hídrica adecuada durante la actividad física».", "«Cuando hagas deporte, bebe agua: si no, te cansarás antes y rendirás menos»."],
    ["m", "¿Por qué la oratoria era tan importante en la democracia ateniense?", "Porque los ciudadanos debían hablar en persona en la asamblea y en los tribunales para defender propuestas o defenderse; quien hablaba bien tenía poder."],
    ["m", "Explica cómo puede un orador aprovechar la retroalimentación durante el discurso.", "Si ve caras de confusión, repite o pone un ejemplo; si nota aburrimiento, cambia el ritmo, hace una pregunta o acorta; si percibe interés, puede profundizar."],
    ["m", "Aplica la regla «¿Le parecería bien al público si supiera lo que hago?» a un anuncio que use una imagen de un bebé para vender neumáticos.", "Probablemente no: el anuncio usa la ternura y el miedo por la seguridad del bebé para vender, sin dar datos del producto. Sería pathos manipulador si no aporta razones comprobables."],
    ["a", "Prepara la introducción de un mismo discurso sobre el reciclaje para niños, compañeros y familias.", "Respuesta abierta. Debe mostrar tres versiones con el mismo mensaje y distinto vocabulario, ejemplos y tono."],
    ["a", "Compara la oratoria de la antigua Atenas con una charla TED actual.", "Semejanzas: hablar en persona ante un público para convencer o enseñar, uso de ethos, pathos y logos. Diferencias: en Atenas era una obligación política y judicial, sin apoyos visuales ni micrófonos; hoy se graba y difunde por internet, con límite de tiempo y diapositivas."],
    ["a", "Analiza un discurso famoso (de un político, un deportista o una charla) identificando ethos, pathos y logos.", "Respuesta abierta. Debe señalar ejemplos concretos de credibilidad, emoción y razonamiento en el discurso elegido."],
    ["a", "¿Por qué crees que Quintiliano exigía que el orador fuera una buena persona?", "Porque la palabra es una herramienta poderosa que puede usarse para el bien o para engañar; un orador hábil pero deshonesto sería peligroso para la comunidad."],
    ["a", "Escribe un código ético de cinco normas para los oradores de tu clase.", "Respuesta abierta. Ejemplo: decir solo datos comprobados, citar fuentes, no burlarse de nadie, respetar el tiempo de los demás y reconocer los errores."],
    ["a", "Una influencer recomienda un suplemento sin decir que le pagan por ello. Valóralo desde la ética del orador.", "No es ético: oculta un interés económico que el público necesita conocer para valorar su recomendación; además, puede afectar a la salud. Debería indicar que es publicidad y aportar información verificada."],
    ["a", "Diseña un plan de entrenamiento de un mes para mejorar como orador, inspirándote en Demóstenes.", "Respuesta abierta. Ejemplo: semana 1, ejercicios de respiración y lectura en voz alta; semana 2, hablar dos minutos ante la familia; semana 3, grabarse y corregir; semana 4, exponer en clase con fichas."],
  ],
  cuartas: ["el arte de escribir novelas", "describir", "la ortografía", "registro", "el título", "aburrido", "volumen", "responder al móvil", "una crítica a la persona", "Usar palabras muy difíciles", "registro", "Japón", "decirlo más rápido"],
  quiz: [
    ["¿Quién entrenó con guijarros en la boca?", ["Demóstenes", "Cicerón", "Sócrates", "Quintiliano"], 0, "Para mejorar su pronunciación."],
    ["El primer gran tratado de retórica lo escribió…", ["Aristóteles", "Platón", "Homero", "Séneca"], 0, "La Retórica."],
    ["Quintiliano nació en…", ["Calagurris (Calahorra)", "Atenas", "Roma", "Cartago"], 0, "Era hispano."],
    ["Todo lo que dificulta la comunicación se llama…", ["ruido", "canal", "código", "contexto"], 0, "Puede ser real o no."],
    ["Las caras de aburrimiento del público son…", ["retroalimentación", "ruido", "código", "mensaje"], 0, "Señales para el orador."],
    ["Usar el miedo para que el público no piense es…", ["manipulación", "logos", "ethos", "adecuación"], 0, "Pathos sin ética."],
    ["Adecuar el mensaje significa cambiar…", ["la forma, no la verdad", "la opinión", "los datos", "el tema"], 0, "Vocabulario, ejemplos, tono."],
    ["Una historia real con nombre y detalle refuerza el…", ["pathos", "logos", "código", "canal"], 0, "Hace sentir el dato."],
    ["Citar las fuentes es un principio de…", ["la ética del orador", "la proxémica", "la entonación", "el ruido"], 0, "Reconocer el trabajo ajeno."],
    ["Los sofistas eran…", ["maestros que enseñaban a hablar", "dioses", "jueces", "soldados"], 0, "Cobraban por enseñar."],
  ],
  examen: [
    ["En una exposición, la lengua, los gestos y las imágenes son el…", ["código", "canal", "contexto", "ruido"], 0, "Sistema de signos."],
    ["Ante niños pequeños conviene usar…", ["frases cortas y comparaciones", "tecnicismos", "muchos datos", "un registro muy formal"], 0, "Adecuación al público."],
    ["Cicerón fue un gran orador de…", ["la República romana", "Atenas", "la Edad Media", "Esparta"], 0, "Siglo I a. C."],
    ["El pathos debe…", ["acompañar a las razones", "sustituir a las razones", "evitarse siempre", "usar el miedo"], 0, "Emocionar sin manipular."],
    ["Si notas que el público no te entiende, lo mejor es…", ["poner un ejemplo o repetir", "hablar más rápido", "ignorarlo", "terminar ya"], 0, "Aprovecha la retroalimentación."],
  ],
  tarjetas: [["Demóstenes", "Orador ateniense que venció su tartamudez entrenando."], ["Ruido", "Todo lo que dificulta la comunicación."], ["Retroalimentación", "Señales que el público devuelve al orador."], ["Vir bonus dicendi peritus", "Ideal de Quintiliano: buena persona experta en hablar."]],
  glosario: [["Oratoria", "Arte de hablar en público con claridad y eficacia."], ["Retórica", "Disciplina que estudia cómo persuadir con el lenguaje."], ["Emisor", "Quien transmite el mensaje."], ["Receptor", "Quien recibe el mensaje."], ["Código", "Sistema de signos que se usa para comunicar."], ["Canal", "Medio físico por el que viaja el mensaje."], ["Contexto", "Situación en la que se produce la comunicación."], ["Ruido", "Interferencia que dificulta la comunicación."], ["Retroalimentación", "Respuesta del receptor al emisor."], ["Propósito", "Finalidad del discurso."], ["Ethos", "Credibilidad del orador."], ["Pathos", "Recurso a las emociones."], ["Logos", "Recurso a las razones y los datos."], ["Adecuación", "Adaptación del mensaje al público y la situación."]],
  situacion: { titulo: "Embajadores de una causa", reto: "Presentar una causa solidaria ante tres públicos distintos adaptando el mensaje.", pasos: ["Elegir en grupo una causa real (banco de alimentos, protectora de animales, donación de sangre).", "Investigar datos fiables y una historia real que la represente.", "Preparar tres versiones de un minuto: para alumnos de primaria, para compañeros y para familias.", "Combinar ethos, pathos y logos de forma ética en cada versión.", "Presentar las tres versiones y pedir retroalimentación a la clase."], producto: "Tres microdiscursos adaptados y una ficha que explique las diferencias.", evaluacion: ["Cada versión se adapta bien a su público.", "Se usan ethos, pathos y logos de manera equilibrada y ética.", "Los datos son verificables y se citan las fuentes.", "Se aprovecha la retroalimentación para mejorar."] },
  familias: ["Ved juntos una charla breve en vídeo y comentad cómo se gana el orador al público y qué emociones despierta."],
  saberes: "la situación comunicativa, el propósito, el análisis del público, ethos, pathos y logos y la ética de la comunicación oral.",
  minutos: 100,
});
