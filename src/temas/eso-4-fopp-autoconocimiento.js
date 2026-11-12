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
