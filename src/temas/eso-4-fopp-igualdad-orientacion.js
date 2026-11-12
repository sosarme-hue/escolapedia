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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Distinguir brecha salarial, segregación y techo de cristal", "Identificar situaciones de acoso y discriminación en el trabajo y cómo actuar"],
  bloques: [
    { tras: "Los estereotipos de género", html: `<h3>De dónde vienen los estereotipos</h3><p>Los estereotipos se aprenden desde la infancia por la <mark>socialización</mark>: la familia, la escuela, los amigos, los juguetes, los libros, la publicidad, los videojuegos y las redes. Estudios internacionales han observado que hacia los 6 años muchas niñas ya empiezan a pensar que la «brillantez» es más cosa de chicos, y que dejan de elegir actividades presentadas como para «muy listos». Por eso importan los <b>referentes</b>: ver a mujeres ingenieras o científicas y a hombres enfermeros o educadores amplía lo que cada persona se imagina capaz de ser.</p>` },
    { tras: "La brecha de género en el trabajo", html: `<h3>Segregación horizontal y vertical</h3>${tabla(["Concepto", "Qué es", "Ejemplo"], [["Segregación horizontal", "mujeres y hombres se concentran en sectores distintos", "más mujeres en educación y cuidados; más hombres en construcción e informática"], ["Segregación vertical (techo de cristal)", "las mujeres llegan menos a los puestos altos", "pocas presidentas de grandes empresas"], ["Suelo pegajoso", "dificultades para salir de los empleos peor pagados y precarios", "trabajos a tiempo parcial no deseados"], ["Brecha salarial", "diferencia de ganancia media", "las mujeres ganan de media menos al año"]])}<p>La <mark>brecha salarial</mark> no significa siempre que se pague distinto por el mismo trabajo (eso es ilegal), sino que suma todas estas diferencias.</p>`, video: { id: "4XogaxzHEEA", titulo: "¿Por qué los hombres ganan más que las mujeres?", canal: "CuriosaMente", vistas: 231674, megusta: 0 } },
    { tras: "Leyes e igualdad de oportunidades", html: `<h3>Acoso y discriminación: cómo actuar</h3><p>La ley prohíbe el <b>acoso sexual</b> (cualquier comportamiento de naturaleza sexual no deseado) y el <b>acoso por razón de sexo</b> en el trabajo, así como discriminar por embarazo, origen, religión, discapacidad u orientación sexual. Todas las empresas deben tener un <mark>protocolo contra el acoso</mark>. Si alguien lo sufre puede comunicarlo a la empresa o a los representantes de los trabajadores, acudir a la Inspección de Trabajo o denunciarlo. El número <b>016</b> atiende a víctimas de violencia machista, es gratuito y no deja rastro en la factura del teléfono.</p>` },
    { tras: "Orientarse sin sesgos", html: `<h3>Mujeres STEM y hombres cuidadores: referentes</h3><p>Hay muchos referentes para elegir sin estereotipos. En ciencia: <b>Marie Curie</b>, dos premios Nobel (Física y Química); <b>Ada Lovelace</b>, pionera de la programación; la bioquímica española <b>Margarita Salas</b>; o la matemática estadounidense <b>Katherine Johnson</b>, que calculó trayectorias para la NASA. En profesiones de cuidado, cada vez más hombres son <b>enfermeros</b>, <b>maestros de Infantil</b> o <b>técnicos de atención a la dependencia</b>. El <mark>11 de febrero</mark> es el Día Internacional de la Mujer y la Niña en la Ciencia, y el 8 de marzo, el Día Internacional de la Mujer.</p>` },
  ],
  ejemplos: [
    { enunciado: "En una empresa trabajan 100 personas: 60 mujeres y 40 hombres. De los 10 directivos, 2 son mujeres. ¿Qué fenómeno se observa?", pasos: ["Las mujeres son el 60 % de la plantilla.", "Solo son el 20 % de la dirección (2 de 10).", "Llegan a los puestos altos en menor proporción de la que están."], resultado: "Segregación vertical o techo de cristal." },
    { enunciado: "Analiza un anuncio de juguetes: cocinitas en rosa con niñas y robots en azul con niños.", pasos: ["Asocia colores y actividades a un sexo.", "Transmite que cuidar es «de niñas» y la tecnología «de niños».", "Puede limitar los intereses de unos y otros."], resultado: "Refuerza estereotipos de género; una alternativa es mostrar a niños y niñas con todo tipo de juguetes." },
    { enunciado: "Una compañera recibe comentarios sexuales no deseados de un superior. ¿Qué puede hacer?", pasos: ["Guardar pruebas (mensajes, testigos).", "Comunicarlo según el protocolo de la empresa o a los representantes de los trabajadores.", "Acudir a la Inspección de Trabajo o denunciar.", "Buscar apoyo; si hay violencia, llamar al 016."], resultado: "Es acoso sexual: la empresa debe actuar y la víctima tiene vías de protección." },
  ],
  errores: [
    "Pensar que la brecha salarial solo existe si se paga distinto por el mismo puesto.",
    "Creer que los estereotipos son naturales: se aprenden y se pueden cambiar.",
    "Pensar que la igualdad solo beneficia a las mujeres: también libera a los hombres de expectativas rígidas.",
    "Confundir segregación horizontal (sectores) con vertical (puestos altos).",
    "Creer que el acoso es solo físico: también son acoso los comentarios o mensajes no deseados.",
  ],
  ejercicios: [
    { q: "¿Qué es la socialización de género?", sol: "El aprendizaje de lo que se considera propio de cada sexo a través de la familia, la escuela, los medios, etc." },
    { q: "¿Por qué son importantes los referentes?", sol: "Porque muestran que es posible dedicarse a cualquier profesión y amplían las opciones que cada persona se imagina." },
    { q: "Diferencia segregación horizontal y vertical.", sol: "Horizontal: hombres y mujeres en sectores distintos. Vertical: las mujeres llegan menos a los puestos altos." },
    { q: "¿Qué es el suelo pegajoso?", sol: "La dificultad de salir de los empleos peor pagados y más precarios." },
    { q: "¿Qué ley protege la igualdad entre mujeres y hombres?", sol: "La Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres." },
    { q: "¿Qué es el acoso sexual en el trabajo?", sol: "Cualquier comportamiento verbal o físico de naturaleza sexual no deseado que atenta contra la dignidad." },
    { q: "¿Qué es el 016?", sol: "El teléfono gratuito de atención a víctimas de violencia machista, que no deja rastro en la factura." },
    { q: "Cita dos mujeres científicas y su aportación.", sol: "Marie Curie (radiactividad, dos Nobel) y Margarita Salas (biología molecular)." },
    { q: "¿Qué se celebra el 11 de febrero?", sol: "El Día Internacional de la Mujer y la Niña en la Ciencia." },
    { q: "Propón dos medidas para que tu centro oriente sin estereotipos.", sol: "Invitar a profesionales que rompan estereotipos y revisar que los materiales muestren a chicos y chicas en todo tipo de profesiones." },
  ],
  quiz: [
    { q: "El techo de cristal es segregación…", o: ["vertical", "horizontal", "geográfica"], a: 0, e: "Afecta a los puestos altos." },
    { q: "Pagar distinto por el mismo trabajo a un hombre y a una mujer es…", o: ["ilegal", "legal", "obligatorio"], a: 0, e: "Lo prohíbe la ley." },
    { q: "El 016 atiende a…", o: ["víctimas de violencia machista", "emergencias médicas", "consultas de Hacienda"], a: 0, e: "Gratuito y confidencial." },
    { q: "Ada Lovelace es pionera de…", o: ["la programación", "la medicina", "la aviación"], a: 0, e: "Siglo XIX." },
    { q: "Las empresas deben tener un protocolo contra…", o: ["el acoso", "las vacaciones", "los ascensos"], a: 0, e: "Todas, sea cual sea su tamaño." },
  ],
  tarjetas: [
    ["Segregación horizontal", "Mujeres y hombres concentrados en sectores distintos."],
    ["Suelo pegajoso", "Dificultad para salir de los empleos precarios."],
    ["016", "Teléfono de atención a víctimas de violencia machista."],
  ],
});
