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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Conocer tiempos de trabajo, vacaciones, permisos y fin del contrato", "Identificar riesgos laborales y las profesiones con futuro"],
  bloques: [
    { tras: "Derechos y deberes", html: `<h3>Tiempo de trabajo y descanso</h3>${tabla(["Aspecto", "Qué dice la ley"], [["Jornada máxima", "40 horas semanales de media"], ["Jornada diaria", "máximo 9 horas ordinarias (8 para menores de 18)"], ["Descanso entre jornadas", "al menos 12 horas"], ["Descanso semanal", "día y medio seguido (dos días para menores)"], ["Pausa", "15 minutos si la jornada supera 6 horas (30 minutos para menores, si supera 4,5 horas)"], ["Vacaciones", "30 días naturales al año, pagados"], ["Horas extra", "voluntarias y con límite; prohibidas a menores"]])}<p>El registro diario de la jornada es <mark>obligatorio</mark> para las empresas desde 2019.</p>`, video: { id: "ulJRmbFy0j0", titulo: "Derechos laborales que todos tenemos y podemos exigir desde el primer día", canal: "Rafa Hurtado - Seguridad Social e Impuestos", vistas: 379230, megusta: 0 } },
    { tras: "Contratos, convenios", html: `<h3>Permisos y fin del contrato</h3><p>Los trabajadores tienen <b>permisos retribuidos</b>: por ejemplo, 15 días por matrimonio, 5 días por accidente o enfermedad grave de un familiar cercano o el tiempo necesario para exámenes oficiales. El <mark>permiso por nacimiento</mark> es igual para ambos progenitores: 19 semanas desde 2025. Un contrato puede terminar por fin del plazo, por <b>dimisión</b> del trabajador (con preaviso), por <b>despido</b> (disciplinario, si hay una falta grave; u objetivo, por causas económicas o técnicas, con indemnización) o por jubilación. Al terminar se recibe el <b>finiquito</b>: lo que se debe hasta ese día, como vacaciones no disfrutadas.</p>` },
    { tras: "Prevención y trabajo del futuro", html: `<h3>Riesgos laborales y cómo prevenirlos</h3><p>La <b>Ley de Prevención de Riesgos Laborales</b> (1995) obliga a la empresa a evaluar los riesgos y protegerlos, y al trabajador a cumplir las medidas. Los riesgos pueden ser de <b>seguridad</b> (caídas, cortes), <b>físicos</b> (ruido, temperatura), <b>químicos</b>, <b>biológicos</b>, <b>ergonómicos</b> (malas posturas, cargas) y <b>psicosociales</b> (estrés, acoso). Se combaten con medidas colectivas (barandillas, ventilación) y con <mark>equipos de protección individual</mark> (EPI): casco, guantes, gafas, calzado de seguridad. Un accidente de trabajo debe comunicarse siempre.</p>` },
    { tras: "Prevención y trabajo del futuro", html: `<h3>Las nuevas formas de trabajar</h3><p>El mercado laboral está cambiando. Crece el <b>teletrabajo</b>, regulado por la ley de trabajo a distancia (2021), que exige un acuerdo escrito y que la empresa pague los medios. Aumentan los <b>autónomos</b> y los trabajos en <b>plataformas digitales</b>; la «ley rider» (2021) considera trabajadores asalariados a los repartidores. La <b>inteligencia artificial</b> y la automatización eliminan unas tareas y crean otras. Por eso son clave la <mark>formación continua</mark>, la competencia digital y las habilidades que las máquinas hacen peor: creatividad, empatía, pensamiento crítico.</p>` },
  ],
  ejemplos: [
    { enunciado: "Marta, de 17 años, trabaja en verano en una heladería de 10:00 a 15:00. ¿Debe tener una pausa?", pasos: ["Es menor de 18.", "Su jornada es de 5 horas, más de 4,5.", "Los menores tienen derecho a 30 minutos de pausa si superan 4,5 horas seguidas."], resultado: "Sí: 30 minutos de descanso." },
    { enunciado: "Identifica riesgos y EPI en un taller mecánico.", pasos: ["Riesgos: cortes, golpes, ruido, productos químicos (aceites), cargas pesadas.", "EPI: guantes, gafas, calzado de seguridad, protectores auditivos.", "Medidas colectivas: elevadores seguros, ventilación, señalización."], resultado: "Combinar medidas colectivas y EPI." },
    { enunciado: "Pedro trabajó hasta el 20 de junio y le quedaban 6 días de vacaciones sin disfrutar. ¿Qué incluye su finiquito?", pasos: ["El salario de los días trabajados de junio.", "La parte proporcional de las pagas extra.", "Los 6 días de vacaciones no disfrutadas."], resultado: "Salario pendiente, pagas extra proporcionales y vacaciones no disfrutadas." },
  ],
  errores: [
    "Pensar que las vacaciones se pueden cambiar por dinero sin terminar el contrato: solo se pagan si no se disfrutaron al finalizar.",
    "Creer que un menor puede hacer horas extra si quiere: está prohibido.",
    "Confundir dimisión (la decide el trabajador) con despido (lo decide la empresa).",
    "Pensar que la prevención es solo responsabilidad de la empresa: el trabajador también debe cumplirla.",
    "Creer que el teletrabajo puede imponerse sin acuerdo: debe ser voluntario y por escrito.",
  ],
  ejercicios: [
    { q: "¿Cuántos días de vacaciones pagadas hay al año?", sol: "30 días naturales." },
    { q: "¿Cuál es la jornada diaria máxima de un menor de 18?", sol: "8 horas, incluido el tiempo de formación." },
    { q: "¿Qué descanso mínimo debe haber entre dos jornadas?", sol: "12 horas." },
    { q: "Cita dos permisos retribuidos.", sol: "Por matrimonio (15 días) y por enfermedad grave de un familiar (5 días)." },
    { q: "¿Cuánto dura el permiso por nacimiento desde 2025?", sol: "19 semanas para cada progenitor." },
    { q: "Diferencia despido disciplinario y objetivo.", sol: "El disciplinario se debe a una falta grave del trabajador; el objetivo, a causas económicas, técnicas u organizativas, con indemnización." },
    { q: "¿Qué es el finiquito?", sol: "El documento con las cantidades que se deben al trabajador al terminar el contrato." },
    { q: "Clasifica: estrés, ruido, cortes, malas posturas.", sol: "Estrés: psicosocial. Ruido: físico. Cortes: de seguridad. Malas posturas: ergonómico." },
    { q: "¿Qué son los EPI? Pon tres ejemplos.", sol: "Equipos de protección individual: casco, guantes y gafas." },
    { q: "¿Qué habilidades serán más valiosas ante la inteligencia artificial?", sol: "Creatividad, empatía, pensamiento crítico, competencia digital y aprender continuamente." },
  ],
  quiz: [
    { q: "Las vacaciones anuales son de…", o: ["30 días naturales", "15 días", "60 días"], a: 0, e: "Pagadas." },
    { q: "Las horas extra para menores…", o: ["están prohibidas", "son obligatorias", "se pagan doble"], a: 0, e: "Protección del menor." },
    { q: "El registro de jornada es obligatorio desde…", o: ["2019", "1980", "2030"], a: 0, e: "Para controlar las horas." },
    { q: "Un casco es un…", o: ["EPI", "permiso", "contrato"], a: 0, e: "Equipo de protección individual." },
    { q: "La «ley rider» trata de…", o: ["los repartidores de plataformas", "los ciclistas profesionales", "los conductores de autobús"], a: 0, e: "Son trabajadores asalariados." },
  ],
  tarjetas: [
    ["Finiquito", "Liquidación de lo que se debe al terminar el contrato."],
    ["EPI", "Equipo de protección individual."],
    ["Teletrabajo", "Trabajo a distancia, voluntario y con acuerdo escrito."],
  ],
});
