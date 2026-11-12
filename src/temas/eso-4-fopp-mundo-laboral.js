// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "El mundo laboral",
  minutos: 35,
  objetivos: ["Conocer los derechos y deberes básicos de las personas trabajadoras", "Distinguir los principales tipos de contrato y las condiciones para trabajar siendo menor", "Valorar la prevención de riesgos y los cambios del trabajo del futuro"],
  claves: ["Estatuto de los Trabajadores", "contrato", "convenio colectivo", "sindicato", "prevención de riesgos", "competencias"],
  pregunta: {
    texto: "Tienes 16 años y te ofrecen trabajar este verano en una heladería: 10 horas al día, de 6 de la tarde a 4 de la madrugada, sin contrato. ¿Es legal?",
    respuesta: "No. En España los menores de 18 años <mark>no pueden trabajar de noche</mark> (de 22 a 6 h), ni hacer horas extra, ni superar 8 horas de trabajo efectivo al día, y todo trabajo debe tener <b>contrato</b> y alta en la Seguridad Social. Conocer tus derechos laborales te protege.",
  },
  bloques: [
    {
      html: `<h3>Derechos y deberes</h3><p>La ley básica es el <mark>Estatuto de los Trabajadores</mark>. Entre los <b>derechos</b>: salario (al menos el salario mínimo), descanso semanal de día y medio, 30 días naturales de <b>vacaciones</b>, jornada máxima de 40 horas semanales de media, igualdad y no discriminación, seguridad e higiene, y libertad sindical. Entre los <b>deberes</b>: cumplir con diligencia, seguir las normas de seguridad, obedecer las órdenes razonables y no competir deslealmente con la empresa.</p>`,
      svg: dos("Derechos y deberes de la persona trabajadora", ["Derechos", ["salario digno", "vacaciones (30 d)", "descanso", "seguridad", "igualdad"], "var(--leaf)"], ["Deberes", ["cumplir el trabajo", "puntualidad", "normas seguridad", "buena fe", "confidencialidad"], "var(--pen)"]),
    },
    {
      html: `<h3>Trabajar siendo menor</h3><p>La edad mínima para trabajar es <mark>16 años</mark> (con permiso de los padres o tutores hasta los 18 si no estás emancipado). Los menores de 18 tienen protecciones especiales: <b>no</b> pueden trabajar de noche, ni hacer horas extraordinarias, ni realizar trabajos peligrosos o insalubres, y deben descansar al menos 30 minutos si la jornada supera 4 horas y media.</p>`,
      svg: filas("Límites del trabajo de menores de 18 años", [["Edad", "16 años como mínimo", "var(--pen)"], ["Noche", "prohibido de 22 a 6 h", "var(--red)"], ["Horas extra", "prohibidas", "var(--red)"], ["Jornada", "máx. 8 h efectivas al día", "var(--sun)"], ["Peligro", "sin trabajos peligrosos", "var(--muted)"]]),
    },
    {
      html: `<h3>Contratos, convenios y sindicatos</h3><p>Tras la reforma laboral de 2021, el contrato habitual es el <mark>indefinido</mark>. Los contratos <b>temporales</b> solo se permiten por circunstancias de la producción o para sustituir a alguien. Para jóvenes que estudian hay <b>contratos formativos</b>: de formación en alternancia (trabajar y estudiar a la vez) y de práctica profesional (tras terminar los estudios). Los <b>convenios colectivos</b>, negociados por <b>sindicatos</b> y empresas, mejoran las condiciones de cada sector.</p>`,
      svg: rueda("Tipos de contrato tras la reforma de 2021", "CONTRATO", [["indefinido", "var(--leaf)"], ["fijo discontinuo", "var(--sun)"], ["temporal", "var(--red)"], ["formativo", "var(--pen)"]], "var(--pri)"),
    },
    {
      html: `<h3>Prevención y trabajo del futuro</h3><p>La <mark>prevención de riesgos laborales</mark> obliga a la empresa a evaluar los peligros, formar a la plantilla y entregar equipos de protección; el trabajador debe usarlos. El trabajo cambia rápido: digitalización, inteligencia artificial, teletrabajo y empleos verdes. Por eso se valoran las <b>competencias transversales</b>: aprender a aprender, trabajo en equipo, comunicación, creatividad y competencia digital.</p>`,
      svg: filas("Competencias transversales para el empleo", [["Equipo", "colaborar con otras personas", "var(--leaf)"], ["Comunicar", "explicar y escuchar", "var(--pen)"], ["Digital", "usar la tecnología con criterio", "var(--bac)"], ["Adaptarse", "aprender cosas nuevas", "var(--sun)"], ["Crear", "proponer soluciones", "var(--inf)"]]),
    },
  ],
  figura: {
    titulo: "Tus derechos laborales en cifras",
    svg: figCols("Cifras básicas del Estatuto de los Trabajadores", [
      ["16 años", ["edad mínima", "para trabajar", "", "menores: sin noche", "ni horas extra"], "var(--pen)"],
      ["40 horas", ["jornada máxima", "semanal de media", "", "descanso: día y medio", "a la semana"], "var(--leaf)"],
      ["30 días", ["de vacaciones", "naturales al año", "", "pagadas", "y no sustituibles"], "var(--sun)"],
    ]),
  },
  video: { id: "ExjUXz8O9vc", titulo: "Derechos y obligaciones de los trabajadores", canal: "Economia Desde Casa", vistas: 117193, megusta: 1303, busqueda: "derechos laborales jóvenes contrato" },
  quiz: [
    { q: "¿Cuál es la edad mínima para trabajar en España?", o: ["14 años", "16 años", "18 años"], a: 1, e: "Con permiso de padres o tutores hasta los 18 si no se está emancipado." },
    { q: "¿Puede un menor de 18 años hacer horas extra?", o: ["Sí, sin límite", "No", "Solo en verano"], a: 1, e: "Están prohibidas, igual que el trabajo nocturno." },
    { q: "¿Cuántos días de vacaciones al año establece el Estatuto?", o: ["15 laborables", "30 naturales", "60 naturales"], a: 1, e: "Treinta días naturales como mínimo." },
    { q: "Tras la reforma laboral de 2021, el contrato habitual es…", o: ["el temporal", "el indefinido", "el de obra"], a: 1, e: "El contrato por obra y servicio desapareció." },
    { q: "Un convenio colectivo es…", o: ["un acuerdo entre sindicatos y empresas que fija condiciones de trabajo", "una multa", "un tipo de despido"], a: 0, e: "Puede mejorar lo que dice la ley, nunca empeorarlo." },
  ],
  examen: [
    { q: "El contrato de formación en alternancia permite…", o: ["trabajar y estudiar a la vez", "trabajar sin cobrar", "trabajar de noche siendo menor"], a: 0, e: "Combina el trabajo en la empresa con la formación." },
    { q: "En prevención de riesgos, el trabajador debe…", o: ["usar los equipos de protección", "comprarlos él mismo", "ignorar las normas"], a: 0, e: "La empresa los entrega y forma; el trabajador debe usarlos." },
    { q: "¿Qué es una competencia transversal?", o: ["Una habilidad útil en muchos trabajos, como trabajar en equipo", "Un título universitario", "Un tipo de contrato"], a: 0, e: "Comunicación, creatividad o competencia digital son otras." },
  ],
  feynman: ["Cinco derechos y cinco deberes laborales", "Qué protecciones especiales tienen los menores de 18", "Tipos de contrato y para qué sirven los convenios", "Por qué importan la prevención y las competencias transversales"],
  mapa: mapa("MUNDO LABORAL", "var(--pri)", [
    ["Derechos", "salario · vacaciones · igualdad", "var(--leaf)"],
    ["Menores", "16 años · sin noche ni extras", "var(--red)"],
    ["Contratos", "indefinido · formativo · convenio", "var(--pen)"],
    ["Futuro", "prevención · competencias", "var(--sun)"],
  ], 270),
  tarjetas: [
    ["Edad mínima para trabajar", "16 años."],
    ["Jornada máxima", "40 horas semanales de media."],
    ["Vacaciones anuales", "30 días naturales."],
    ["Menores de 18", "Sin trabajo nocturno, horas extra ni tareas peligrosas."],
    ["Convenio colectivo", "Acuerdo entre sindicatos y empresas que fija condiciones de trabajo de un sector."],
  ],
  familias: ["Leed juntos un contrato o una oferta de trabajo y comprobad si respeta los derechos del tema.", "Si alguien de la familia trabaja, que explique qué convenio colectivo le aplica.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El mundo laboral: derechos y deberes, contratación, trabajo de menores, prevención de riesgos y competencias para el empleo (RD 217/2022, Formación y Orientación Personal y Profesional 4º).",
    ideas: ["Analizar ofertas de empleo reales y detectar ilegalidades.", "Simulación de una negociación de convenio colectivo.", "Inspección de riesgos en el taller o laboratorio del centro."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Estatuto de los Trabajadores, Real Decreto Legislativo 2/2015 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430" },
  ],
  revisado: "2026-11-12",
};
