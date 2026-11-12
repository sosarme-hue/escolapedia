// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { piramide, filas, dos, rueda, figCols } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "Formación Profesional",
  minutos: 35,
  objetivos: ["Conocer los grados de la Formación Profesional y sus títulos", "Explicar el carácter dual de la FP y la formación en empresa", "Explorar las familias profesionales y su demanda laboral"],
  claves: ["FP de grado medio", "FP de grado superior", "FP dual", "familia profesional", "Técnico", "Técnico Superior"],
  pregunta: {
    texto: "Durante años se dijo que la FP era «para los que no valen para estudiar». Hoy muchas empresas no encuentran técnicos y algunos ciclos tienen más del 80 % de inserción laboral. ¿Qué es realmente la Formación Profesional?",
    respuesta: "Es una vía de estudios <mark>práctica</mark> que prepara para una profesión concreta, combina el centro educativo y la <b>empresa</b> y permite seguir estudiando después, incluso en la universidad. Hay más de 170 títulos en 26 <b>familias profesionales</b>.",
  },
  bloques: [
    {
      html: `<h3>Los grados de la FP</h3><p>La <b>Ley Orgánica 3/2022</b> de Formación Profesional organiza un sistema único. Los <mark>ciclos formativos</mark> son de tres niveles: <b>grado básico</b> (da el título de ESO), <b>grado medio</b> (título de <b>Técnico</b>, acceso con la ESO) y <b>grado superior</b> (título de <b>Técnico Superior</b>, acceso con Bachillerato o grado medio). Duran dos cursos. Después existen <b>cursos de especialización</b> y también se puede acceder a la universidad.</p>`,
      svg: piramide("Niveles de la FP: grado básico, medio y superior", [["cursos de especialización", "var(--sun)"], ["grado superior: Téc. Superior", "var(--card)"], ["grado medio: Técnico", "var(--line)"], ["grado básico: título ESO", "var(--muted)"]]),
    },
    {
      html: `<h3>Una FP dual</h3><p>Desde la nueva ley, <mark>toda la FP es dual</mark>: parte de la formación se hace en una <b>empresa</b>. Puede ser <b>general</b> (entre el 25 % y el 35 % del tiempo en la empresa, sin contrato) o <b>intensiva</b> (más del 35 %, normalmente con contrato de formación y salario). Así el alumnado aprende con máquinas, clientes y problemas reales.</p>`,
      svg: dos("FP dual general frente a intensiva", ["General", ["25-35 % en", "la empresa", "sin contrato", "laboral", "beca opcional"], "var(--leaf)"], ["Intensiva", ["más del 35 %", "en la empresa", "con contrato", "de formación", "con salario"], "var(--pen)"]),
    },
    {
      html: `<h3>Las familias profesionales</h3><p>Los títulos se agrupan en 26 <mark>familias profesionales</mark>: Sanidad, Informática y Comunicaciones, Electricidad y Electrónica, Administración y Gestión, Comercio y Marketing, Hostelería y Turismo, Servicios Socioculturales (Educación Infantil), Imagen y Sonido, Transporte y Mantenimiento de Vehículos, Energía y Agua, Actividades Físicas y Deportivas, entre otras. Algunos ejemplos: Técnico en Cuidados Auxiliares de Enfermería, Técnico Superior en Desarrollo de Aplicaciones Web…</p>`,
      svg: rueda("Algunas familias profesionales", "26|FAMILIAS", [["Sanidad", "var(--red)"], ["Informática", "var(--pen)"], ["Electricidad", "var(--sun)"], ["Hostelería", "var(--inf)"], ["Sociocultural", "var(--bac)"], ["Vehículos", "var(--muted)"]], "var(--pri)"),
    },
    {
      html: `<h3>Ventajas y cómo informarse</h3><p>La FP ofrece una <b>preparación práctica</b>, contacto directo con empresas y, en muchos ciclos, una <mark>alta inserción laboral</mark>. Antes de elegir, consulta el portal oficial <b>TodoFP</b>, la oferta de tu comunidad autónoma, los centros de tu zona y las jornadas de puertas abiertas. Fíjate en el perfil profesional, los módulos y las salidas de cada título.</p>`,
      svg: filas("Qué mirar al elegir un ciclo", [["Perfil", "qué hace ese profesional", "var(--pen)"], ["Módulos", "asignaturas del ciclo", "var(--leaf)"], ["Empresa", "dónde harás la formación", "var(--sun)"], ["Salidas", "empleos y estudios después", "var(--red)"]]),
    },
  ],
  figura: {
    titulo: "Tres ejemplos de ciclos y sus salidas",
    svg: figCols("Ejemplos de ciclo de grado medio y superior con salidas profesionales", [
      ["Cuidados Aux. Enfermería", ["grado medio", "familia: Sanidad", "hospitales,", "residencias,", "centros de salud"], "var(--red)"],
      ["Aplicaciones Web", ["grado superior", "familia: Informática", "programador/a web,", "apps, empresas", "tecnológicas"], "var(--pen)"],
      ["Instal. Eléctricas", ["grado medio", "familia: Electricidad", "electricista,", "renovables,", "mantenimiento"], "var(--sun)"],
    ]),
  },
  video: { id: "c5BHTieKOuw", titulo: "Ciclos de FP de grado medio con más salidas en España 2025-26", canal: "Portaldefp", vistas: 144584, megusta: 0, busqueda: "formación profesional qué es grado medio" },
  quiz: [
    { q: "¿Qué título se obtiene al superar un ciclo de grado medio?", o: ["Técnico", "Técnico Superior", "Graduado universitario"], a: 0, e: "El grado superior da el título de Técnico Superior." },
    { q: "¿Qué ley regula hoy la Formación Profesional?", o: ["Ley Orgánica 3/2022", "Ley del Deporte", "Estatuto de los Trabajadores"], a: 0, e: "La Ley Orgánica 3/2022 de ordenación e integración de la FP." },
    { q: "En la FP dual intensiva…", o: ["no se va nunca a la empresa", "se pasa más del 35 % del tiempo en la empresa, normalmente con contrato", "solo hay clases online"], a: 1, e: "La general está entre el 25 % y el 35 %." },
    { q: "¿Cuántas familias profesionales hay?", o: ["6", "26", "100"], a: 1, e: "Agrupan más de 170 títulos." },
    { q: "¿Cuál es el portal oficial de información sobre FP?", o: ["TodoFP", "Erasmus", "SEPE"], a: 0, e: "Lo gestiona el Ministerio de Educación." },
  ],
  examen: [
    { q: "Con el título de Técnico de grado medio puedes…", o: ["acceder directamente a grado superior", "solo trabajar", "volver a la ESO"], a: 0, e: "La ley permite el acceso directo de grado medio a grado superior." },
    { q: "Los cursos de especialización…", o: ["se hacen tras un ciclo para profundizar en un campo", "sustituyen a la ESO", "son universitarios"], a: 0, e: "Por ejemplo, ciberseguridad o fabricación inteligente." },
    { q: "La formación en empresa de la FP sirve para…", o: ["aprender en un entorno de trabajo real", "evitar los exámenes", "cobrar sin trabajar"], a: 0, e: "Conecta lo aprendido en el centro con la práctica profesional." },
  ],
  feynman: ["Los niveles de FP y el título de cada uno", "Qué significa que toda la FP sea dual", "Qué es una familia profesional, con tres ejemplos", "Qué mirar antes de elegir un ciclo"],
  mapa: mapa("LA FP", "var(--pri)", [
    ["Grados", "básico · medio · superior", "var(--ink)"],
    ["Dual", "general · intensiva", "var(--pen)"],
    ["Familias", "26 · más de 170 títulos", "var(--sun)"],
    ["Elegir", "TodoFP · perfil · salidas", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Título de grado medio", "Técnico."],
    ["Título de grado superior", "Técnico Superior."],
    ["FP dual general", "Entre el 25 % y el 35 % de la formación en la empresa."],
    ["Familias profesionales", "26 grupos que reúnen más de 170 títulos de FP."],
    ["Portal oficial de FP", "TodoFP, del Ministerio de Educación."],
  ],
  familias: ["Visitad juntos la jornada de puertas abiertas de un centro de FP de la zona.", "Hablad con alguien que trabaje en un oficio técnico sobre cómo aprendió su profesión.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Itinerarios formativos y profesionales: la Formación Profesional, su organización y su relación con el empleo (RD 217/2022, Formación y Orientación Personal y Profesional 4º; LO 3/2022).",
    ideas: ["Investigar por parejas un ciclo de la zona con el portal TodoFP.", "Visita a un centro de FP o a una empresa colaboradora.", "Charla de exalumnos que estudian o trabajan en FP."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "TodoFP, portal oficial de Formación Profesional (Ministerio de Educación)", url: "https://www.todofp.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar la organización de un ciclo formativo y las prácticas en empresa", "Buscar ciclos en una familia profesional y sus salidas"],
  bloques: [
    { tras: "Los grados de la FP", html: `<h3>Cómo se accede</h3>${tabla(["Grado", "Requisitos de acceso"], [["Grado Básico", "15 a 17 años, haber cursado 3.º de ESO (o 2.º excepcionalmente) y propuesta del equipo docente"], ["Grado Medio", "título de ESO, de Grado Básico, o prueba de acceso (17 años)"], ["Grado Superior", "título de Bachiller, de Técnico (grado medio) o prueba de acceso (19 años, o 18 con título de Técnico relacionado)"], ["Curso de especialización", "título de Técnico o de Técnico Superior según el curso"]])}<p>Cuando hay más solicitudes que plazas, se ordenan por la <mark>nota media</mark> del título con el que se accede, por eso los resultados de 4.º importan.</p>` },
    { tras: "Una FP dual", html: `<h3>Cómo es un ciclo por dentro</h3><p>Un ciclo de grado medio o superior dura normalmente <b>2 cursos</b> (unas 2.000 horas). Se organiza en <mark>módulos profesionales</mark>, como asignaturas muy prácticas: por ejemplo, en Cuidados Auxiliares de Enfermería hay módulos de higiene, primeros auxilios o técnicas de ayuda psicológica. Todos los ciclos incluyen <b>inglés profesional</b>, itinerario para la empleabilidad, digitalización y un <b>proyecto intermodular</b>. Las clases se dan en talleres y laboratorios que imitan el entorno de trabajo, y la formación en la empresa es parte obligatoria del ciclo.</p>`, video: { id: "wBccGch5zS4", titulo: "¿Qué es la FP Dual?", canal: "Fundación Bertelsmann", vistas: 53643, megusta: 0 } },
    { tras: "Las familias profesionales", html: `<h3>Ejemplos de ciclos y salidas</h3>${tabla(["Familia", "Grado medio", "Grado superior"], [["Sanidad", "Cuidados Auxiliares de Enfermería; Emergencias Sanitarias", "Laboratorio Clínico; Higiene Bucodental; Imagen para el Diagnóstico"], ["Informática y Comunicaciones", "Sistemas Microinformáticos y Redes", "Desarrollo de Aplicaciones Web (DAW) y Multiplataforma (DAM); Administración de Sistemas"], ["Electricidad y Electrónica", "Instalaciones Eléctricas y Automáticas", "Automatización y Robótica Industrial"], ["Hostelería y Turismo", "Cocina y Gastronomía", "Dirección de Cocina; Gestión de Alojamientos Turísticos"], ["Servicios Socioculturales", "Atención a Personas en Situación de Dependencia", "Educación Infantil; Integración Social"], ["Imagen y Sonido", "Vídeo Disc-jockey y Sonido", "Animaciones 3D, Juegos y Entornos Interactivos"]])}` },
    { tras: "Ventajas y cómo informarse", html: `<h3>FP, empleo y acreditación de competencias</h3><p>La FP tiene altas tasas de inserción laboral, sobre todo en sectores como la industria, la informática, la electricidad o la sanidad, donde las empresas buscan técnicos que no encuentran. Además, la nueva ley de FP (2022) permite que quien ya tiene experiencia laboral sin titulación consiga un <mark>reconocimiento oficial de sus competencias</mark>, y organiza la oferta en grados (A, B, C, D y E) para que cualquier persona pueda formarse a lo largo de su vida, desde una microformación hasta un ciclo completo. Las webs oficiales <b>TodoFP</b> y las de cada comunidad recogen todos los ciclos y centros.</p>` },
  ],
  ejemplos: [
    { enunciado: "Pablo, de 16 años, tiene el título de ESO y quiere trabajar con ordenadores. Diseña su itinerario por FP.", pasos: ["Grado medio: Sistemas Microinformáticos y Redes (2 cursos).", "Con el título de Técnico puede acceder a un grado superior: Desarrollo de Aplicaciones Web.", "Después puede trabajar o seguir a un grado universitario de Ingeniería Informática."], resultado: "ESO → SMR → DAW → trabajo o universidad." },
    { enunciado: "Sara no tiene el título de ESO y tiene 17 años. ¿Puede estudiar un grado medio?", pasos: ["Sin título de ESO no puede acceder directamente.", "Con 17 años puede presentarse a la prueba de acceso a grado medio.", "También podría hacer un Grado Básico si cumple los requisitos de edad."], resultado: "Sí, mediante la prueba de acceso a grado medio." },
    { enunciado: "Compara un ciclo de grado superior y un grado universitario para trabajar en un laboratorio.", pasos: ["Grado superior de Laboratorio Clínico: 2 años, muy práctico, técnico de laboratorio.", "Grado universitario (Biología, Bioquímica): 4 años, más teórico, investigación y dirección."], resultado: "Ambos llevan al laboratorio, con papeles y duración distintos." },
  ],
  errores: [
    "Pensar que la FP es para quien «no vale para estudiar».",
    "Creer que la FP de grado medio no permite seguir estudiando.",
    "Olvidar que la nota media influye en la admisión cuando hay muchas solicitudes.",
    "Pensar que la formación en empresa es opcional: forma parte de todos los ciclos.",
    "Desconocer los cursos de especialización tras el ciclo.",
  ],
  ejercicios: [
    { q: "¿Qué requisitos tiene el Grado Básico?", sol: "Tener entre 15 y 17 años, haber cursado 3.º de ESO (o 2.º excepcionalmente) y la propuesta del equipo docente." },
    { q: "¿Cómo se accede a un grado superior?", sol: "Con el título de Bachiller, el de Técnico o una prueba de acceso." },
    { q: "¿Cuánto dura normalmente un ciclo de grado medio?", sol: "Dos cursos, unas 2.000 horas." },
    { q: "¿Qué son los módulos profesionales?", sol: "Las asignaturas prácticas en que se organiza un ciclo." },
    { q: "Cita tres módulos comunes a todos los ciclos.", sol: "Inglés profesional, itinerario para la empleabilidad y digitalización (también el proyecto intermodular)." },
    { q: "Nombra un ciclo de grado superior de la familia de Sanidad.", sol: "Laboratorio Clínico y Biomédico, Higiene Bucodental o Imagen para el Diagnóstico." },
    { q: "Nombra dos ciclos de Informática.", sol: "Sistemas Microinformáticos y Redes (medio) y Desarrollo de Aplicaciones Web (superior)." },
    { q: "¿Qué es la acreditación de competencias?", sol: "El reconocimiento oficial de lo aprendido con la experiencia laboral, sin haber estudiado un ciclo." },
    { q: "¿Dónde puedes consultar la oferta de FP?", sol: "En la web TodoFP del Ministerio y en las de cada comunidad autónoma." },
    { q: "Elige una familia profesional que te interese y busca un ciclo y una salida.", sol: "Respuesta personal. Ejemplo: Hostelería → Cocina y Gastronomía → cocinero en un restaurante." },
  ],
  quiz: [
    { q: "Con el título de Técnico de grado medio se puede acceder…", o: ["a grado superior", "solo a trabajar", "a la ESO"], a: 0, e: "Es una pasarela directa." },
    { q: "La prueba de acceso a grado medio se puede hacer desde los…", o: ["17 años", "14 años", "21 años"], a: 0, e: "Sin título de ESO." },
    { q: "DAW significa…", o: ["Desarrollo de Aplicaciones Web", "Diseño Artístico Web", "Datos y Archivos Web"], a: 0, e: "Ciclo de grado superior." },
    { q: "La formación en empresa en la FP actual es…", o: ["obligatoria", "opcional", "inexistente"], a: 0, e: "Toda la FP es dual." },
    { q: "Si hay más solicitudes que plazas, cuenta…", o: ["la nota media", "el orden de llegada", "un sorteo siempre"], a: 0, e: "Del título de acceso." },
  ],
  tarjetas: [
    ["Módulo profesional", "Asignatura práctica de un ciclo formativo."],
    ["Prueba de acceso", "Examen para entrar en FP sin el título requerido."],
    ["TodoFP", "Web oficial con toda la oferta de FP."],
  ],
});
