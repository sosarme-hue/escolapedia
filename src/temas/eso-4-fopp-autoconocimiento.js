// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, filas, dos, figCols } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "Autoconocimiento",
  minutos: 30,
  objetivos: ["Identificar los propios intereses, aptitudes, valores y rasgos de personalidad", "Elaborar un análisis DAFO personal", "Relacionar el autoconocimiento con la autoestima y las decisiones de futuro"],
  claves: ["autoconocimiento", "intereses", "aptitudes", "valores", "autoestima", "DAFO personal"],
  pregunta: {
    texto: "Te preguntan «¿qué quieres estudiar?» y no sabes qué contestar. ¿Cómo vas a elegir un camino si no tienes claro qué se te da bien ni qué te gusta?",
    respuesta: "Es normal no saberlo a los 15 años. El primer paso es el <mark>autoconocimiento</mark>: descubrir tus <b>intereses</b> (lo que te gusta), tus <b>aptitudes</b> (lo que se te da bien), tus <b>valores</b> (lo que te importa) y tu forma de ser. Con esa información, las decisiones son mucho más fáciles.",
  },
  bloques: [
    {
      html: `<h3>Las cuatro piezas de quién eres</h3><p>Para conocerte, observa cuatro aspectos. Los <mark>intereses</mark>: actividades que te atraen (ayudar a personas, crear, investigar, organizar, trabajar con las manos). Las <b>aptitudes</b>: capacidades que tienes o puedes desarrollar (razonamiento, idiomas, habilidad manual, comunicación). Los <b>valores</b>: lo que consideras importante (estabilidad, creatividad, ayudar, ganar dinero, libertad). Y la <b>personalidad</b>: si eres más extrovertido o reservado, organizado o espontáneo.</p>`,
      svg: rueda("Piezas del autoconocimiento", "YO", [["intereses", "var(--sun)"], ["aptitudes", "var(--pen)"], ["valores", "var(--red)"], ["personalidad", "var(--leaf)"]], "var(--pri)"),
    },
    {
      html: `<h3>Cómo conocerte mejor</h3><p>Hay varias herramientas: <b>reflexionar</b> sobre las actividades en las que pierdes la noción del tiempo; preguntar a personas de confianza cómo te ven (la ventana de <mark>Johari</mark> muestra que hay partes de nosotros que otros ven y nosotros no); hacer <b>cuestionarios de intereses</b> en el departamento de orientación; y probar cosas nuevas: voluntariado, talleres, deportes, prácticas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ventana de Johari: área abierta, ciega, oculta y desconocida">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-size="12" font-weight="700">
          <rect x="30" y="30" width="100" height="66" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/><text x="80" y="60" fill="var(--leaf)">abierta</text><text x="80" y="76" fill="var(--muted)" font-weight="400" font-size="10">yo sí · otros sí</text>
          <rect x="130" y="30" width="100" height="66" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/><text x="180" y="60" fill="var(--red)">ciega</text><text x="180" y="76" fill="var(--muted)" font-weight="400" font-size="10">yo no · otros sí</text>
          <rect x="30" y="96" width="100" height="66" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><text x="80" y="126" fill="var(--pen)">oculta</text><text x="80" y="142" fill="var(--muted)" font-weight="400" font-size="10">yo sí · otros no</text>
          <rect x="130" y="96" width="100" height="66" fill="var(--card)" stroke="var(--muted)" stroke-width="2.5"/><text x="180" y="126" fill="var(--muted)">desconocida</text><text x="180" y="142" fill="var(--muted)" font-weight="400" font-size="10">nadie lo sabe aún</text>
          <text x="130" y="20" fill="var(--ink)">ventana de Johari</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>El DAFO personal</h3><p>Las empresas usan el análisis DAFO y tú también puedes hacerlo. <b>Debilidades</b> (internas, por mejorar: «me cuesta hablar en público»), <b>Amenazas</b> (externas: «hay mucha competencia en esa carrera»), <b>Fortalezas</b> (internas: «soy constante, se me dan bien los idiomas») y <b>Oportunidades</b> (externas: «hay becas Erasmus», «se necesitan técnicos»). Te ayuda a ver dónde estás y qué puedes trabajar.</p>`,
      svg: dos("DAFO personal: lo interno y lo externo", ["Interno (tú)", ["Fortalezas:", "lo que haces bien", "Debilidades:", "lo que puedes", "mejorar"], "var(--leaf)"], ["Externo", ["Oportunidades:", "becas, demanda", "Amenazas:", "competencia,", "cambios"], "var(--pen)"]),
    },
    {
      html: `<h3>Autoestima e inteligencias</h3><p>La <mark>autoestima</mark> es cómo te valoras. Una autoestima sana no significa creerse perfecto, sino aceptarse con fortalezas y límites y saber que se puede mejorar. Ayuda recordar que hay muchas formas de ser inteligente: el psicólogo Howard Gardner propuso varias <b>inteligencias</b> (lingüística, lógico-matemática, espacial, musical, corporal, interpersonal, intrapersonal y naturalista). Las notas no lo miden todo.</p>`,
      svg: filas("Algunas inteligencias según Gardner", [["Lingüística", "leer, escribir, hablar", "var(--pen)"], ["Lógica", "números, razonar", "var(--red)"], ["Espacial", "dibujo, diseño", "var(--sun)"], ["Corporal", "deporte, manualidades", "var(--leaf)"], ["Social", "entender a otros", "var(--bac)"]]),
    },
  ],
  figura: {
    titulo: "De conocerte a orientarte",
    svg: figCols("Tres preguntas para orientarte: qué me gusta, qué se me da bien y qué me importa", [
      ["¿Qué me gusta?", ["intereses", "ej.: ayudar,", "crear, investigar,", "organizar,", "construir"], "var(--sun)"],
      ["¿Qué se me da bien?", ["aptitudes", "ej.: idiomas,", "matemáticas,", "habilidad manual,", "comunicación"], "var(--pen)"],
      ["¿Qué me importa?", ["valores", "ej.: estabilidad,", "creatividad,", "servicio,", "libertad"], "var(--red)"],
    ]),
  },
  video: { id: "mT8qVzEhiEA", titulo: "Cuatro pilares para una buena autoestima. A mi yo adolescente", canal: "AprendemosJuntos", vistas: 1334998, megusta: 18406, busqueda: "autoconocimiento adolescentes" },
  quiz: [
    { q: "Las aptitudes son…", o: ["lo que te gusta", "lo que se te da bien o puedes desarrollar", "lo que te importa"], a: 1, e: "Los intereses son lo que te gusta; los valores, lo que consideras importante." },
    { q: "En la ventana de Johari, el área «ciega» es…", o: ["lo que tú sabes y los demás no", "lo que los demás ven de ti y tú no", "lo que nadie sabe"], a: 1, e: "Por eso pedir opinión a personas de confianza ayuda a conocerse." },
    { q: "En un DAFO personal, «hay becas para estudiar fuera» es una…", o: ["fortaleza", "oportunidad", "debilidad"], a: 1, e: "Es algo externo y favorable." },
    { q: "Una autoestima sana significa…", o: ["creerse perfecto", "aceptarse con fortalezas y límites", "compararse siempre con los demás"], a: 1, e: "Permite reconocer errores sin hundirse." },
    { q: "¿Quién propuso la teoría de las inteligencias múltiples?", o: ["Howard Gardner", "Viktor Frankl", "Albert Einstein"], a: 0, e: "Plantea que hay distintas formas de ser inteligente." },
  ],
  examen: [
    { q: "«Me cuesta organizarme» es, en un DAFO personal, una…", o: ["fortaleza", "debilidad", "amenaza"], a: 1, e: "Es interna y mejorable." },
    { q: "¿Cuál es un valor profesional?", o: ["Saber inglés", "Dar importancia a ayudar a los demás", "Tener buena memoria"], a: 1, e: "Saber inglés y tener memoria son aptitudes." },
    { q: "¿Qué recurso del instituto ayuda a explorar intereses?", o: ["El departamento de orientación", "La cafetería", "El gimnasio"], a: 0, e: "Ofrece cuestionarios, entrevistas e información." },
  ],
  feynman: ["Las cuatro piezas del autoconocimiento con un ejemplo tuyo", "Qué enseña la ventana de Johari", "Cómo se hace un DAFO personal", "Qué es la autoestima y por qué las notas no lo miden todo"],
  mapa: mapa("AUTOCONOCIMIENTO", "var(--pri)", [
    ["Piezas", "intereses · aptitudes · valores", "var(--sun)"],
    ["Herramientas", "reflexión · Johari · test", "var(--pen)"],
    ["DAFO", "fortalezas · oportunidades", "var(--leaf)"],
    ["Autoestima", "aceptarse · inteligencias", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Intereses", "Actividades que te gustan y te atraen."],
    ["Aptitudes", "Capacidades que tienes o puedes desarrollar."],
    ["Valores", "Lo que consideras importante en la vida y el trabajo."],
    ["DAFO personal", "Debilidades, Amenazas, Fortalezas y Oportunidades."],
    ["Autoestima sana", "Aceptarse con fortalezas y límites, con ganas de mejorar."],
  ],
  familias: ["Decidle tres fortalezas que veis en él o ella y pedidle que diga tres que ve en vosotros.", "Hablad de qué actividades le hacen perder la noción del tiempo.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Autoconocimiento y desarrollo personal: intereses, aptitudes, valores, autoestima y proyecto de vida (RD 217/2022, Formación y Orientación Personal y Profesional 4º).",
    ideas: ["DAFO personal en una cartulina y puesta en común voluntaria.", "Dinámica de la ventana de Johari por parejas de confianza.", "Cuestionario de intereses profesionales con el departamento de orientación."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ventana de Johari, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ventana_de_Johari" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Identificar tus intereses, valores y competencias con herramientas concretas", "Relacionar tu perfil con familias de estudios y profesiones"],
  bloques: [
    { tras: "Las cuatro piezas", html: `<h3>Intereses profesionales: el modelo RIASEC</h3><p>El psicólogo John Holland propuso que hay seis grandes tipos de intereses, el <mark>modelo RIASEC</mark>. Casi todo el mundo combina dos o tres.</p>${tabla(["Tipo", "Le gusta…", "Profesiones afines"], [["Realista", "trabajar con las manos, máquinas, aire libre", "mecánica, agricultura, electricidad"], ["Investigador", "analizar, investigar, resolver problemas", "ciencias, medicina, ingeniería"], ["Artístico", "crear, expresarse, imaginar", "diseño, música, comunicación"], ["Social", "ayudar, enseñar, cuidar", "educación, enfermería, trabajo social"], ["Emprendedor", "liderar, convencer, organizar", "comercio, empresa, derecho"], ["Convencional", "ordenar, planificar, datos precisos", "administración, contabilidad"]])}` },
    { tras: "Cómo conocerte mejor", html: `<h3>Valores y competencias</h3><p>Los <b>valores</b> son lo que consideras importante en la vida y en el trabajo: estabilidad, creatividad, ayudar a los demás, ganar dinero, tener tiempo libre, aprender siempre. Las <mark>competencias</mark> combinan conocimientos, habilidades y actitudes. Hay <b>competencias técnicas</b> (saber programar, cocinar, hablar inglés) y <b>competencias transversales</b> o <i>soft skills</i>, útiles en cualquier trabajo: comunicación, trabajo en equipo, responsabilidad, adaptabilidad, pensamiento crítico. Muchas se desarrollan fuera de clase: en el deporte, la música, el voluntariado o cuidando de la familia.</p>` },
    { tras: "El DAFO personal", html: `<h3>La ventana de Johari</h3><p>Lo que sabemos de nosotros mismos no siempre coincide con lo que ven los demás. La <mark>ventana de Johari</mark> distingue cuatro zonas: el <b>área abierta</b> (lo que sabes de ti y también saben los demás), el <b>área ciega</b> (lo que los demás ven y tú no), el <b>área oculta</b> (lo que sabes y no muestras) y el <b>área desconocida</b> (lo que nadie sabe todavía). Pedir opinión sincera a personas de confianza reduce el área ciega, y probar actividades nuevas te ayuda a descubrir el área desconocida.</p>` },
    { tras: "Autoestima e inteligencias", html: `<h3>Las inteligencias múltiples</h3><p>Howard Gardner defendió que no hay una sola inteligencia, sino varias: <b>lingüística</b>, <b>lógico-matemática</b>, <b>espacial</b>, <b>musical</b>, <b>corporal-cinestésica</b>, <b>interpersonal</b> (entender a los demás), <b>intrapersonal</b> (entenderse a uno mismo) y <b>naturalista</b>. Todos tenemos todas, en distinta medida, y se pueden entrenar. Por eso, sacar peores notas en una materia no significa «no ser listo»: quizá tus <mark>puntos fuertes</mark> están en otra parte.</p>`, video: { id: "jjotIhtn1AU", titulo: "Inteligencias múltiples (Howard Gardner): resumen animado", canal: "Visual Ananda", vistas: 545404, megusta: 0 } },
    { tras: "Autoestima e inteligencias", html: `<h3>Mentalidad de crecimiento</h3><p>La psicóloga Carol Dweck distingue dos formas de ver las propias capacidades. Con <b>mentalidad fija</b> se cree que el talento es innato e inmutable: «soy malo en mates». Con <mark>mentalidad de crecimiento</mark> se cree que las capacidades mejoran con esfuerzo, estrategias y ayuda: «aún no domino las ecuaciones». Esta segunda mentalidad lleva a aceptar retos, aprender de los errores y no rendirse ante el primer fracaso. Una pequeña palabra ayuda mucho: «<b>todavía</b>».</p>` },
  ],
  ejemplos: [
    { enunciado: "Lucía disfruta en el laboratorio, le encanta resolver acertijos y es ordenada. ¿Qué tipos RIASEC predominan?", pasos: ["Laboratorio y acertijos: Investigador.", "Orden y precisión: Convencional.", "Combinación I + C."], resultado: "Perfil Investigador-Convencional: puede encajar en análisis clínicos, química, programación o farmacia." },
    { enunciado: "Haz un DAFO de Marcos, que quiere estudiar un grado de Animación 3D.", pasos: ["Fortalezas: dibuja muy bien y es constante.", "Debilidades: le cuesta el inglés.", "Oportunidades: el sector de videojuegos crece; hay FP de Animaciones 3D, Juegos y Entornos Interactivos.", "Amenazas: mucha competencia."], resultado: "Plan: reforzar el inglés y crear un portfolio de trabajos." },
    { enunciado: "Transforma en mentalidad de crecimiento: «No sirvo para hablar en público».", pasos: ["Cambiar el «no sirvo» por «todavía no».", "Añadir una estrategia concreta.", "Pedir ayuda o practicar."], resultado: "«Todavía me pongo nervioso al hablar en público; voy a ensayar en casa y pedir consejos a mi profesora»." },
  ],
  errores: [
    "Elegir estudios solo por lo que hacen tus amigos.",
    "Confundir intereses (lo que te gusta) con aptitudes (lo que se te da bien): conviene mirar ambos.",
    "Pensar que la inteligencia es solo la que miden los exámenes de matemáticas o lengua.",
    "Creer que la personalidad y las capacidades no cambian nunca.",
    "Hacer un test vocacional y tomarlo como una sentencia: es una pista, no un destino.",
  ],
  ejercicios: [
    { q: "¿Qué cuatro piezas te ayudan a conocerte?", sol: "Intereses, aptitudes, valores y personalidad." },
    { q: "¿Qué significan las letras RIASEC?", sol: "Realista, Investigador, Artístico, Social, Emprendedor y Convencional." },
    { q: "Pon tres ejemplos de competencias transversales.", sol: "Comunicación, trabajo en equipo y responsabilidad." },
    { q: "¿Dónde puedes desarrollar competencias fuera del instituto?", sol: "En el deporte, la música, el voluntariado, cuidando de la familia o en un trabajo de verano." },
    { q: "Explica el área ciega de la ventana de Johari.", sol: "Lo que los demás ven de ti y tú no ves." },
    { q: "Cita las ocho inteligencias de Gardner.", sol: "Lingüística, lógico-matemática, espacial, musical, corporal-cinestésica, interpersonal, intrapersonal y naturalista." },
    { q: "¿Qué es la mentalidad de crecimiento?", sol: "Creer que las capacidades se pueden desarrollar con esfuerzo, estrategias y ayuda." },
    { q: "Haz tu propio DAFO con un elemento en cada casilla.", sol: "Respuesta personal. Ejemplo: F: creativa; D: impaciente; O: curso gratis de diseño; A: poco tiempo libre." },
    { q: "¿Qué valores son importantes para ti en un trabajo? Ordena tres.", sol: "Respuesta personal; por ejemplo: ayudar a los demás, estabilidad y tiempo libre." },
    { q: "¿Por qué conviene preguntar a otros cómo te ven?", sol: "Porque reduce el área ciega y descubres fortalezas o debilidades que no percibías." },
  ],
  quiz: [
    { q: "Al tipo «Social» le gusta…", o: ["ayudar y enseñar", "reparar motores", "ordenar datos"], a: 0, e: "Educación, sanidad, trabajo social." },
    { q: "Las soft skills son competencias…", o: ["transversales", "técnicas", "deportivas"], a: 0, e: "Útiles en cualquier trabajo." },
    { q: "La ventana de Johari tiene…", o: ["cuatro áreas", "dos áreas", "ocho áreas"], a: 0, e: "Abierta, ciega, oculta y desconocida." },
    { q: "La teoría de las inteligencias múltiples es de…", o: ["Howard Gardner", "Viktor Frankl", "John Holland"], a: 0, e: "1983." },
    { q: "La palabra clave de la mentalidad de crecimiento es…", o: ["todavía", "nunca", "imposible"], a: 0, e: "«Aún no lo sé hacer»." },
  ],
  tarjetas: [
    ["RIASEC", "Seis tipos de intereses profesionales de Holland."],
    ["Ventana de Johari", "Lo que sabes de ti frente a lo que ven los demás."],
    ["Mentalidad de crecimiento", "Las capacidades mejoran con esfuerzo y estrategia."],
  ],
});
