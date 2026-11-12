// Formación y Orientación Personal y Profesional 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, linea } = require("./_hum");

module.exports = {
  materia: "Formación y Orientación Personal y Profesional",
  curso: "4-eso",
  titulo: "El sistema educativo y sus itinerarios",
  minutos: 35,
  objetivos: ["Describir la estructura del sistema educativo español según la LOMLOE", "Identificar las opciones al terminar 4.º de ESO, con y sin título", "Reconocer las pasarelas entre itinerarios a lo largo de la vida"],
  claves: ["LOMLOE", "título de Graduado en ESO", "Bachillerato", "Formación Profesional", "pasarelas", "aprendizaje a lo largo de la vida"],
  pregunta: {
    texto: "Dentro de unos meses terminas la enseñanza obligatoria. Por primera vez, nadie te obliga a seguir estudiando. ¿Qué caminos tienes y cuáles se cierran si eliges uno?",
    respuesta: "Tienes varios <mark>itinerarios</mark>: Bachillerato, Formación Profesional de grado medio, enseñanzas artísticas o deportivas, o el mundo laboral. Y casi ninguno se cierra para siempre: el sistema educativo español tiene <b>pasarelas</b> para cambiar de camino.",
  },
  bloques: [
    {
      html: `<h3>La estructura del sistema</h3><p>La ley educativa actual es la <mark>LOMLOE</mark> (Ley Orgánica 3/2020). Organiza las enseñanzas en etapas: <b>Educación Infantil</b> (0-6 años), <b>Primaria</b> (6-12), <b>ESO</b> (12-16) y, después, <b>Bachillerato</b> o <b>Formación Profesional</b>, y la <b>educación superior</b> (universidad, FP de grado superior, enseñanzas artísticas superiores). La enseñanza es <b>obligatoria y gratuita de 6 a 16 años</b>.</p>`,
      svg: linea("Etapas del sistema educativo español", [["0-6", "Infantil"], ["6-12", "Primaria"], ["12-16", "ESO|(obligatoria)"], ["16+", "Bachillerato|o FP"]], "var(--pri)"),
    },
    {
      html: `<h3>Con el título de Graduado en ESO</h3><p>Si obtienes el <mark>título de Graduado en ESO</mark> puedes acceder a: <b>Bachillerato</b> (2 cursos, en cualquier modalidad), <b>FP de grado medio</b> (2 cursos), <b>enseñanzas artísticas</b> profesionales (música, danza, artes plásticas y diseño), <b>enseñanzas deportivas</b> de grado medio, o incorporarte al <b>mundo laboral</b> a partir de los 16 años.</p>`,
      svg: rueda("Opciones con el título de Graduado en ESO", "TÍTULO|ESO", [["Bachillerato", "var(--pen)"], ["FP grado medio", "var(--leaf)"], ["artísticas", "var(--bac)"], ["deportivas", "var(--sun)"], ["empleo", "var(--muted)"], ["idiomas (EOI)", "var(--inf)"]], "var(--pri)"),
    },
    {
      html: `<h3>Sin el título</h3><p>Si no obtienes el título, también hay caminos. Los <mark>ciclos formativos de grado básico</mark> (2 cursos, desde los 15 años con propuesta del equipo docente) dan una cualificación profesional y, al superarlos, el título de Graduado en ESO. También existen las <b>pruebas libres</b> para mayores de 18 años, la <b>educación de personas adultas</b> y las <b>pruebas de acceso</b> a grado medio (desde los 17).</p>`,
      svg: filas("Caminos sin el título de ESO", [["Grado básico", "FP + título de ESO", "var(--leaf)"], ["Prueba acceso", "a grado medio, desde 17", "var(--pen)"], ["Adultos", "ESO para adultos (EPA)", "var(--sun)"], ["Prueba libre", "título ESO, desde 18", "var(--muted)"]]),
    },
    {
      html: `<h3>Las pasarelas</h3><p>El sistema está diseñado para que ninguna decisión sea definitiva. Desde <b>FP de grado medio</b> se puede pasar a <b>grado superior</b> y, desde ahí, a la <b>universidad</b> (con convalidación de créditos). Desde <b>Bachillerato</b> se puede ir a la universidad o a FP de grado superior. Y en cualquier momento de la vida se puede volver a estudiar: es el <mark>aprendizaje a lo largo de la vida</mark>.</p>`,
      svg: dos("Dos caminos que se cruzan", ["Vía académica", ["ESO", "↓", "Bachillerato", "↓", "universidad"], "var(--pen)"], ["Vía profesional", ["ESO", "↓", "FP grado medio", "↓", "FP grado superior"], "var(--leaf)"]),
    },
  ],
  figura: {
    titulo: "Mapa de itinerarios después de 4.º de ESO",
    svg: `<svg viewBox="0 0 680 260" role="img" aria-label="Esquema de itinerarios: de la ESO a Bachillerato, FP de grado medio y empleo; de Bachillerato a universidad y FP superior; de grado medio a grado superior; de grado superior a universidad">
      <rect width="680" height="260" rx="16" fill="var(--paper)"/>
      <defs><marker id="it-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
      <g stroke="var(--ink)" stroke-width="2" fill="none" marker-end="url(#it-a)">
        <path d="M130 130 L 236 62"/><path d="M130 130 L 236 130"/><path d="M130 130 L 236 200"/>
        <path d="M356 62 L 470 62"/><path d="M356 70 L 470 122"/><path d="M356 130 L 470 130"/><path d="M590 120 L 590 76"/>
      </g>
      <g ${F} text-anchor="middle" font-weight="700" font-size="14">
        ${[[70, 130, "4.º ESO", "var(--pri)"], [296, 62, "Bachillerato", "var(--pen)"], [296, 130, "FP grado medio", "var(--leaf)"], [296, 200, "empleo (16+)", "var(--muted)"], [560, 62, "universidad", "var(--bac)"], [560, 130, "FP grado superior", "var(--sun)"]].map(([x, y, t, c]) => `<rect x="${x - 60}" y="${y - 20}" width="120" height="40" rx="20" fill="${c}"/><text x="${x}" y="${y + 5}" fill="#fff" font-size="${t.length > 14 ? 12 : 14}">${t}</text>`).join("")}
      </g>
      <text x="610" y="100" font-size="11" fill="var(--muted)" ${F}>con</text><text x="610" y="113" font-size="11" fill="var(--muted)" ${F}>convalidación</text>
      <text x="340" y="244" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>sin título: grado básico, pruebas de acceso o educación de adultos</text>
    </svg>`,
  },
  video: { id: "716rG1Br38A", titulo: "Sistema educativo en España: ¿cómo funciona? ¿Cuáles son los niveles?", canal: "Burbuja del Español", vistas: 49223, megusta: 984, busqueda: "sistema educativo español itinerarios después de la ESO" },
  quiz: [
    { q: "¿Hasta qué edad es obligatoria la enseñanza en España?", o: ["14 años", "16 años", "18 años"], a: 1, e: "Es obligatoria y gratuita de 6 a 16 años." },
    { q: "¿Cómo se llama la ley educativa actual?", o: ["LOGSE", "LOMLOE", "LOMCE"], a: 1, e: "Ley Orgánica 3/2020, que modifica la LOE." },
    { q: "Con el título de ESO puedes acceder a…", o: ["solo Bachillerato", "Bachillerato o FP de grado medio, entre otras opciones", "directamente a la universidad"], a: 1, e: "También a enseñanzas artísticas, deportivas o al empleo." },
    { q: "Los ciclos de grado básico permiten obtener…", o: ["el título de Bachillerato", "el título de Graduado en ESO", "un grado universitario"], a: 1, e: "Además de una cualificación profesional." },
    { q: "Desde FP de grado superior se puede…", o: ["acceder a la universidad", "volver solo a la ESO", "nada más"], a: 0, e: "Con posibles convalidaciones de créditos." },
  ],
  examen: [
    { q: "¿Cuántos cursos dura el Bachillerato?", o: ["1", "2", "4"], a: 1, e: "Primero y segundo de Bachillerato." },
    { q: "Las pasarelas del sistema educativo sirven para…", o: ["cambiar de itinerario sin empezar de cero", "repetir curso", "evitar exámenes"], a: 0, e: "Permiten pasar de la vía profesional a la académica y viceversa." },
    { q: "¿Desde qué edad se puede trabajar legalmente en España?", o: ["14", "16", "18"], a: 1, e: "Con limitaciones hasta los 18 (ni horario nocturno ni horas extra)." },
  ],
  feynman: ["Las etapas del sistema educativo y cuáles son obligatorias", "Qué opciones abre el título de ESO", "Qué caminos hay si no se obtiene el título", "Qué son las pasarelas y un ejemplo"],
  mapa: mapa("ITINERARIOS", "var(--pri)", [
    ["Sistema", "LOMLOE · obligatoria 6-16", "var(--ink)"],
    ["Con título", "Bachillerato · FP medio", "var(--pen)"],
    ["Sin título", "grado básico · pruebas", "var(--sun)"],
    ["Pasarelas", "medio → superior → univ.", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Enseñanza obligatoria en España", "De 6 a 16 años."],
    ["LOMLOE", "Ley Orgánica 3/2020 de educación."],
    ["Opciones con el título de ESO", "Bachillerato, FP de grado medio, enseñanzas artísticas y deportivas, empleo."],
    ["Grado básico", "FP de dos cursos que da el título de Graduado en ESO."],
    ["Pasarela", "Vía para pasar de un itinerario a otro sin empezar de cero."],
  ],
  familias: ["Mirad juntos la oferta de Bachillerato y FP de vuestra zona en la web de la consejería de educación.", "Contadle qué estudios hizo cada miembro de la familia y si cambió de camino alguna vez.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Itinerarios formativos: estructura del sistema educativo, opciones tras la ESO y pasarelas (RD 217/2022, Formación y Orientación Personal y Profesional 4º; LOMLOE).",
    ideas: ["Dibujar el mapa de itinerarios en gran formato con la oferta real de la zona.", "Entrevista a estudiantes de Bachillerato y FP del propio centro.", "Búsqueda guiada en el portal TodoFP y en la web de la consejería."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ley Orgánica 3/2020 (LOMLOE), BOE", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2020-17264" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Describir todas las enseñanzas posobligatorias, incluidas las artísticas, deportivas y de idiomas", "Planificar tu propio itinerario con fechas y requisitos"],
  bloques: [
    { tras: "La estructura del sistema", html: `<h3>El sistema educativo de un vistazo</h3>${tabla(["Etapa", "Edades", "¿Obligatoria?", "Título"], [["Educación Infantil", "0-6", "no (gratuita de 3 a 6)", "—"], ["Educación Primaria", "6-12", "sí", "—"], ["ESO", "12-16", "sí", "Graduado en ESO"], ["Bachillerato", "16-18", "no", "Bachiller"], ["FP de grado medio", "desde 16", "no", "Técnico"], ["FP de grado superior", "desde 18", "no", "Técnico Superior"], ["Universidad", "desde 18", "no", "Grado, Máster, Doctorado"]])}<p>La enseñanza es <mark>obligatoria y gratuita</mark> de los 6 a los 16 años. La ley educativa vigente es la <b>LOMLOE</b> (2020).</p>` },
    { tras: "Con el título de Graduado", html: `<h3>Otras enseñanzas tras la ESO</h3><p>Además de Bachillerato y FP, con el título de ESO hay otras opciones. Las <b>enseñanzas artísticas profesionales</b> de <b>música y danza</b> (se suelen empezar antes, en conservatorios) y las de <b>Artes Plásticas y Diseño</b> (ciclos de grado medio y superior: cerámica, joyería, ilustración, gráfica publicitaria…), con una prueba de acceso específica. Las <mark>enseñanzas deportivas</mark> forman técnicos de fútbol, baloncesto, deportes de montaña o salvamento. Las <b>Escuelas Oficiales de Idiomas</b> permiten obtener certificados de nivel (A2, B1, B2, C1) desde los 16 años, o desde los 14 para un idioma distinto del estudiado en la ESO.</p>`, video: { id: "AreYouNmPrI", titulo: "¿FP o bachillerato? Mi experiencia", canal: "Koi", vistas: 32455, megusta: 0 } },
    { tras: "Sin el título", html: `<h3>La educación de personas adultas</h3><p>Quien no termina la ESO a tiempo no pierde la oportunidad. En los <mark>centros de educación de personas adultas</mark> (CEPA o EPA) se puede obtener el título de ESO desde los 18 años (o desde los 16 con contrato de trabajo o si se es deportista de alto rendimiento), en modalidad presencial o a distancia. También existen <b>pruebas libres</b> para el título de ESO y de Bachillerato para mayores de 18 y 20 años respectivamente, y el <b>Bachillerato para adultos</b> nocturno o a distancia. Aprender no tiene edad: es el principio del <b>aprendizaje a lo largo de la vida</b>.</p>` },
    { tras: "Las pasarelas", html: `<h3>Calendario de tu decisión en 4.º</h3>${tabla(["Cuándo", "Qué hacer"], [["1.er trimestre", "conocerte: tests de intereses, hablar con el orientador"], ["2.º trimestre", "informarte: jornadas de puertas abiertas, webs de FP y universidades, hablar con estudiantes mayores"], ["Febrero-abril", "consejo orientador del centro; decidir con tu familia"], ["Mayo-julio", "solicitar plaza en Bachillerato o FP (plazos de cada comunidad)"], ["Junio-septiembre", "matrícula; tener un plan B por si no hay plaza"]])}<p>El <mark>consejo orientador</mark> que entrega el centro al final de 4.º recomienda un itinerario, pero no es obligatorio seguirlo.</p>` },
  ],
  ejemplos: [
    { enunciado: "Andrea tiene 16 años, el título de ESO y le encanta dibujar. ¿Qué opciones tiene?", pasos: ["Bachillerato de Artes, vía de Artes Plásticas, Imagen y Diseño.", "Ciclo de grado medio de Artes Plásticas y Diseño (prueba de acceso específica).", "FP de grado medio relacionada, como Preimpresión digital."], resultado: "Tiene al menos tres caminos; después podrá seguir a estudios superiores de diseño o Bellas Artes." },
    { enunciado: "Javier, de 19 años, dejó la ESO en 3.º. ¿Cómo puede obtener el título?", pasos: ["Matricularse en un CEPA (presencial o a distancia).", "O presentarse a las pruebas libres para mayores de 18.", "Con el título podrá acceder a FP de grado medio o Bachillerato."], resultado: "Por la educación de adultos o las pruebas libres." },
    { enunciado: "Ordena el calendario de decisiones de 4.º: matrícula, conocerte, solicitar plaza, informarte.", pasos: ["Primero conocerte.", "Después informarte.", "Luego solicitar plaza.", "Por último, matricularte."], resultado: "Conocerte → informarte → solicitar plaza → matrícula." },
  ],
  errores: [
    "Pensar que la ESO es gratuita pero el Bachillerato público no: el Bachillerato en centros públicos también es gratuito, aunque no obligatorio.",
    "Creer que sin el título de ESO a los 16 ya no hay opciones.",
    "Pensar que el consejo orientador es obligatorio.",
    "Olvidar los plazos de solicitud de plaza, que varían en cada comunidad.",
    "Desconocer las enseñanzas artísticas, deportivas y de idiomas.",
  ],
  ejercicios: [
    { q: "¿Entre qué edades es obligatoria la enseñanza en España?", sol: "Entre los 6 y los 16 años." },
    { q: "¿Qué título da la FP de grado medio y cuál la de grado superior?", sol: "Técnico y Técnico Superior." },
    { q: "¿Qué ley educativa está vigente?", sol: "La LOMLOE, de 2020." },
    { q: "Cita tres enseñanzas posobligatorias distintas de Bachillerato y FP.", sol: "Enseñanzas artísticas, enseñanzas deportivas y Escuelas Oficiales de Idiomas." },
    { q: "¿Desde qué edad se puede estudiar en una Escuela Oficial de Idiomas?", sol: "Desde los 16, o desde los 14 para un idioma distinto del cursado en la ESO." },
    { q: "¿Qué es un CEPA?", sol: "Un centro de educación de personas adultas donde se puede obtener el título de ESO y otras titulaciones." },
    { q: "¿Qué es el consejo orientador?", sol: "Una recomendación del centro sobre el itinerario más adecuado para cada alumno al final de la etapa." },
    { q: "¿Qué hacer en el segundo trimestre de 4.º?", sol: "Informarse: puertas abiertas, webs, charlas con estudiantes y con el orientador." },
    { q: "¿Por qué conviene tener un plan B al solicitar plaza?", sol: "Porque en algunos centros o ciclos hay más solicitudes que plazas." },
    { q: "Dibuja tu itinerario ideal desde 4.º hasta tu primer trabajo.", sol: "Respuesta personal. Ejemplo: 4.º ESO → Bachillerato de Ciencias → Grado en Enfermería → trabajo en un hospital." },
  ],
  quiz: [
    { q: "La ESO va de los…", o: ["12 a los 16 años", "6 a los 12", "16 a los 18"], a: 0, e: "Cuatro cursos." },
    { q: "El título de la FP de grado superior es…", o: ["Técnico Superior", "Bachiller", "Graduado"], a: 0, e: "Permite acceder a la universidad." },
    { q: "En un CEPA se puede…", o: ["obtener el título de ESO siendo adulto", "hacer el doctorado", "sacar el carné de conducir"], a: 0, e: "Educación de adultos." },
    { q: "Las enseñanzas deportivas forman…", o: ["técnicos deportivos", "médicos", "periodistas"], a: 0, e: "De fútbol, montaña, etc." },
    { q: "El consejo orientador es…", o: ["una recomendación", "obligatorio", "un examen"], a: 0, e: "La familia y el alumno deciden." },
  ],
  tarjetas: [
    ["LOMLOE", "Ley educativa vigente desde 2020."],
    ["CEPA", "Centro de educación de personas adultas."],
    ["Consejo orientador", "Recomendación de itinerario al final de la ESO."],
  ],
});
