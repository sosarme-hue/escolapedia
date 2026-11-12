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
