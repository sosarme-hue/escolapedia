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
