// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { barras, filas, dos, rueda, figCols } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "Igualdad y orientación profesional",
  minutos: 35,
  objetivos: ["Identificar estereotipos de género en la elección de estudios y profesiones", "Conocer la brecha de género y las leyes de igualdad en el trabajo", "Elegir itinerarios sin sesgos y valorar la diversidad"],
  claves: ["estereotipo de género", "brecha salarial", "techo de cristal", "corresponsabilidad", "STEM", "inclusión"],
  pregunta: {
    texto: "En las aulas de Ingeniería Informática de España las chicas son alrededor de 1 de cada 7 estudiantes; en Enfermería, los chicos son menos de 2 de cada 10. ¿Eligen solo por sus gustos o hay algo más?",
    respuesta: "Influyen los gustos, pero también los <mark>estereotipos de género</mark>: ideas aprendidas desde la infancia sobre lo que «es de chicos» o «de chicas». Reconocerlos permite elegir con más libertad y aprovechar todo el talento, sea cual sea el sexo de cada persona.",
  },
  bloques: [
    {
      html: `<h3>Los estereotipos de género</h3><p>Un <mark>estereotipo</mark> es una idea simplificada sobre un grupo. Juguetes, películas, publicidad y comentarios transmiten que las chicas son más cuidadoras y los chicos más técnicos. Así, las chicas eligen menos carreras <b>STEM</b> (ciencia, tecnología, ingeniería y matemáticas) y los chicos, menos profesiones de cuidados y educación. No es una cuestión de capacidad: las diferencias se explican sobre todo por expectativas y modelos.</p>`,
      svg: barras("Porcentaje aproximado de mujeres entre el alumnado de algunos estudios en España", [["Ed. Infantil", 92, "var(--bac)", "≈ 92 %"], ["Enfermería", 83, "var(--red)", "≈ 83 %"], ["Medicina", 70, "var(--pen)", "≈ 70 %"], ["Ing. industrial", 28, "var(--sun)", "≈ 28 %"], ["Informática", 15, "var(--leaf)", "≈ 15 %"]], 110),
    },
    {
      html: `<h3>La brecha de género en el trabajo</h3><p>De media, las mujeres ganan menos al año que los hombres: es la <mark>brecha salarial</mark>. Se debe a que trabajan más a tiempo parcial, ocupan más los sectores peor pagados, asumen más el cuidado de hijos y mayores y, a veces, a la discriminación. Además existe el <b>techo de cristal</b>: barreras invisibles que dificultan que lleguen a puestos de dirección.</p>`,
      svg: filas("Causas de la brecha de género en el empleo", [["Parcialidad", "más jornadas parciales", "var(--pen)"], ["Sectores", "trabajos peor pagados", "var(--sun)"], ["Cuidados", "más tiempo cuidando", "var(--leaf)"], ["Techo", "pocas directivas", "var(--red)"]]),
    },
    {
      html: `<h3>Leyes e igualdad de oportunidades</h3><p>La <b>Constitución</b> (art. 14) prohíbe la discriminación por sexo. La <mark>Ley Orgánica 3/2007</mark> para la igualdad efectiva de mujeres y hombres obliga a las empresas de 50 o más personas a tener un <b>plan de igualdad</b> y a llevar un registro salarial. Los permisos por nacimiento son iguales para ambos progenitores, lo que favorece la <b>corresponsabilidad</b>: repartir de forma justa las tareas de casa y los cuidados.</p>`,
      svg: dos("Medidas de igualdad en el trabajo", ["Empresas", ["plan de igualdad", "(50 o más)", "registro salarial", "protocolo contra", "el acoso"], "var(--bac)"], ["Familias", ["permisos iguales", "cuidar a medias", "conciliación", "reparto de", "tareas"], "var(--leaf)"]),
    },
    {
      html: `<h3>Orientarse sin sesgos y con diversidad</h3><p>Para elegir con libertad: pregúntate si descartas una opción por lo que «se espera» de ti, busca <b>referentes</b> diversos (científicas, enfermeros, ingenieras, educadores infantiles) y prueba actividades nuevas. La igualdad incluye también a las personas con <mark>discapacidad</mark>, de distintos orígenes o de cualquier orientación sexual: la ley exige igualdad de trato y ajustes razonables para que todos puedan formarse y trabajar.</p>`,
      svg: rueda("Claves para una orientación sin sesgos", "ELEGIR|LIBRE", [["referentes", "var(--bac)"], ["probar", "var(--sun)"], ["informarse", "var(--pen)"], ["cuestionar", "var(--red)"], ["diversidad", "var(--leaf)"], ["apoyo", "var(--muted)"]], "var(--pri)"),
    },
  ],
  figura: {
    titulo: "Referentes que rompieron estereotipos",
    svg: figCols("Tres referentes: Margarita Salas, Clara Campoamor y un enfermero de referencia", [
      ["Margarita Salas", ["1938-2019", "bioquímica española", "patente muy", "rentable del CSIC", "pionera en ciencia"], "var(--leaf)"],
      ["Clara Campoamor", ["1888-1972", "abogada y diputada", "logró el voto", "femenino en 1931", "pionera en derecho"], "var(--bac)"],
      ["Hombres cuidadores", ["enfermeros,", "educadores infantiles,", "auxiliares", "cada vez más", "presentes"], "var(--pen)"],
    ]),
  },
  video: { id: "iyCHxB7wdeQ", titulo: "¿Por qué existe aún desigualdad entre hombres y mujeres?", canal: "AprendemosJuntos", vistas: 1240791, megusta: 0, busqueda: "brecha de género profesiones estereotipos" },
  quiz: [
    { q: "¿Qué es un estereotipo de género?", o: ["Una ley de igualdad", "Una idea simplificada sobre lo que corresponde a cada sexo", "Un tipo de contrato"], a: 1, e: "Por ejemplo, «la tecnología es de chicos»." },
    { q: "STEM se refiere a…", o: ["ciencia, tecnología, ingeniería y matemáticas", "deportes", "humanidades"], a: 0, e: "Son áreas donde las mujeres están todavía infrarrepresentadas." },
    { q: "El techo de cristal es…", o: ["una barrera invisible que dificulta a las mujeres llegar a puestos de dirección", "un tipo de edificio", "una ley"], a: 0, e: "No está escrito en ninguna norma, pero se nota en los datos." },
    { q: "¿Qué empresas deben tener un plan de igualdad?", o: ["Todas", "Las de 50 o más personas", "Solo las públicas"], a: 1, e: "Lo exige la normativa que desarrolla la Ley Orgánica 3/2007." },
    { q: "La corresponsabilidad significa…", o: ["que una sola persona se ocupe de casa", "repartir de forma justa las tareas domésticas y los cuidados", "trabajar más horas"], a: 1, e: "Es clave para reducir la brecha de género." },
  ],
  examen: [
    { q: "¿Qué artículo de la Constitución prohíbe la discriminación por sexo?", o: ["Artículo 14", "Artículo 1", "Artículo 27"], a: 0, e: "Establece la igualdad de todos los españoles ante la ley." },
    { q: "Una causa de la brecha salarial es…", o: ["que las mujeres estudian menos", "que trabajan más a tiempo parcial y en sectores peor pagados", "que no existen leyes"], a: 1, e: "Hoy las mujeres son mayoría entre los titulados universitarios." },
    { q: "Los ajustes razonables sirven para…", o: ["que las personas con discapacidad puedan estudiar y trabajar en igualdad", "pagar menos", "elegir modalidad"], a: 0, e: "Por ejemplo, adaptar un puesto o un examen." },
  ],
  feynman: ["Qué es un estereotipo de género y cómo influye en lo que estudiamos", "Causas de la brecha salarial y del techo de cristal", "Qué leyes protegen la igualdad en el trabajo", "Cómo orientarse sin sesgos"],
  mapa: mapa("IGUALDAD", "var(--pri)", [
    ["Estereotipos", "STEM · cuidados · expectativas", "var(--bac)"],
    ["Brecha", "salarial · techo de cristal", "var(--red)"],
    ["Leyes", "art. 14 CE · LO 3/2007", "var(--pen)"],
    ["Elegir libre", "referentes · diversidad", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Estereotipo de género", "Idea simplificada sobre lo que corresponde a hombres o mujeres."],
    ["Brecha salarial", "Diferencia entre lo que ganan de media hombres y mujeres."],
    ["Techo de cristal", "Barrera invisible para llegar a puestos de dirección."],
    ["Ley Orgánica 3/2007", "Ley para la igualdad efectiva de mujeres y hombres."],
    ["Corresponsabilidad", "Reparto justo de tareas domésticas y cuidados."],
  ],
  familias: ["Revisad juntos quién hace cada tarea en casa y si el reparto es justo.", "Buscad referentes de profesiones poco habituales para su sexo y comentadlas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Igualdad de oportunidades en la orientación académica y profesional: estereotipos, brecha de género, diversidad e inclusión (RD 217/2022, Formación y Orientación Personal y Profesional 4º).",
    ideas: ["Análisis de datos de matrícula por sexo del propio centro.", "Charlas de referentes que rompen estereotipos (11 de febrero, Día de la Mujer y la Niña en la Ciencia).", "Revisión de anuncios de juguetes y su mensaje de género."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ley Orgánica 3/2007 para la igualdad efectiva de mujeres y hombres (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115" },
  ],
  revisado: "2026-11-12",
};
