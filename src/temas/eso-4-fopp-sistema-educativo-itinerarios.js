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
