// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "El texto dramático y la puesta en escena",
  minutos: 60,
  objetivos: ["Reconocer las partes y rasgos del texto dramático: diálogo, acotaciones, actos y escenas", "Analizar la estructura de una obra y sus personajes", "Explicar qué es la puesta en escena y las funciones del director", "Pasar de un texto escrito a su representación con un cuaderno de dirección"],
  claves: ["texto dramático", "acotación", "acto", "escena", "puesta en escena", "dirección"],
  pregunta: {
    texto: "<i>Romeo y Julieta</i> se ha representado en un palacio renacentista, en un barrio de Nueva York (<i>West Side Story</i>), con trajes actuales y hasta con danza sin palabras. ¿Cómo puede el mismo texto dar espectáculos tan distintos?",
    respuesta: "Porque el <b>texto dramático</b> es solo el punto de partida: está escrito para ser representado. La <mark>puesta en escena</mark> es la interpretación que cada director y equipo hacen de ese texto: decide el espacio, la época, el ritmo, el vestuario, la luz… Por eso cada montaje es una obra nueva.",
  },
  bloques: [
    {
      html: `<h3>Un texto escrito para ser representado</h3><p>El <b>texto dramático</b> es el que escribe el dramaturgo para que se represente ante un público. A diferencia de una novela, no tiene narrador: la historia avanza mediante lo que <mark>dicen y hacen los personajes</mark>. Tiene dos tipos de texto: el <b>texto principal</b>, formado por los diálogos y monólogos que pronuncian los personajes, y el <b>texto secundario</b>, las acotaciones, que no se dicen en voz alta. Por eso se dice que el teatro tiene una doble naturaleza: <b>literaria</b> (se puede leer) y <b>espectacular</b> (se puede ver).</p>`,
      svg: dos("Texto principal y texto secundario", ["Principal", ["diálogo", "monólogo", "aparte", "se dice", "en voz alta"], "var(--pen)"], ["Secundario", ["acotaciones", "lugar y tiempo", "gestos, tono", "entradas y salidas", "no se dice"], "var(--muted)"]),
    },
    {
      html: `<h3>Formas de expresión de los personajes</h3><p>Los personajes se expresan de varias maneras. El <b>diálogo</b> es la conversación entre dos o más personajes y es la forma principal. El <b>monólogo</b> es un personaje que habla solo, expresando en voz alta lo que piensa («Ser o no ser…» de Hamlet; «¡Ay, mísero de mí!» de Segismundo). El <mark>aparte</mark> es lo que un personaje dice para sí mismo o para el público, y que, por convención, los demás personajes no oyen. En el teatro antiguo, el <b>coro</b> comentaba la acción.</p>`,
    },
    {
      html: `<h3>Las acotaciones</h3><p>Las <b>acotaciones</b> son las indicaciones del autor para la representación. Suelen ir en cursiva y entre paréntesis. Indican el <mark>lugar y el tiempo</mark> («Una habitación pobre. Es de noche»), los movimientos y entradas de los personajes («Entra Laura, empapada»), sus gestos y tono de voz («furioso», «en voz baja»), y efectos de luz o sonido («Se oye un trueno. Oscuro»). Algunos autores, como Valle-Inclán, escribieron acotaciones tan literarias que casi son imposibles de llevar a escena.</p><p><i>Ejemplo:</i> LUISA.— (<i>Mirando por la ventana, nerviosa.</i>) Ya vienen. (<i>Apaga la lámpara.</i>) No hagas ruido.</p>`,
      video: { id: "28dnYOF-GJo", titulo: "Elementos del teatro: acto, escena, acotación y diálogo", canal: "Luis Miguel López", vistas: 237658, megusta: 0 },
    },
    {
      html: `<h3>La estructura: actos y escenas</h3><p>La obra se divide en <b>actos</b>, grandes partes separadas normalmente por una bajada de telón o un oscuro (en el Siglo de Oro se llamaban <i>jornadas</i>). Cada acto se divide en <b>escenas</b>, que cambian cuando entra o sale un personaje. Un <b>cuadro</b> es una parte con un mismo decorado. La estructura interna suele seguir tres momentos: <mark>planteamiento</mark> (se presentan personajes y conflicto), <mark>nudo</mark> (el conflicto se complica) y <mark>desenlace</mark> (se resuelve).</p>`,
      svg: flujo("Estructura interna de una obra", ["plantea-|miento", "nudo", "clímax", "desenlace"], "var(--red)"),
    },
    {
      html: `<h3>Personajes y conflicto</h3><p>El motor del drama es el <mark>conflicto</mark>: un personaje quiere algo y algo o alguien se lo impide. El <b>protagonista</b> lucha por su objetivo; el <b>antagonista</b> se opone. Hay también personajes secundarios que ayudan o estorban. Los personajes pueden ser <b>planos</b> (un solo rasgo, como los tipos de la comedia) o <b>redondos</b> (complejos, cambian a lo largo de la obra). Para analizarlos, el actor y el director se preguntan: ¿qué quiere?, ¿qué se lo impide?, ¿qué hace para conseguirlo?, ¿cómo cambia?</p>`,
      svg: filas("Funciones de los personajes", [["Protagonista", "persigue un objetivo", "var(--pen)"], ["Antagonista", "se opone", "var(--red)"], ["Ayudante", "colabora con el protagonista", "var(--leaf)"], ["Oponente", "estorba", "var(--sun)"], ["Confidente", "escucha sus secretos", "var(--bac)"]]),
    },
    {
      html: `<h3>Qué es la puesta en escena</h3><p>La <b>puesta en escena</b> es el proceso de <mark>convertir un texto en espectáculo</mark>: todas las decisiones sobre cómo se va a representar. Incluye la interpretación de los actores, el espacio, la escenografía, el vestuario, la iluminación, el sonido y la música, y el ritmo de la función. Un mismo texto puede ponerse en escena de forma realista, simbólica, cómica o trasladado a otra época. La figura del <b>director</b> como creador nació a finales del siglo XIX; antes, solía ser el primer actor de la compañía quien organizaba los ensayos.</p>`,
      video: { id: "7vLmcVe9X4o", titulo: "Cómo dirigir a actores o actrices en teatro", canal: "Fernando Tébar", vistas: 11040, megusta: 0 },
    },
    {
      html: `<h3>El trabajo del director</h3><p>El director tiene una <b>idea</b> o concepto del montaje (qué quiere contar y cómo) y coordina a todo el equipo para conseguirlo. Sus tareas:</p>${tabla(["Fase", "Qué hace el director"], [["Análisis", "lee y estudia el texto, su autor y su época; decide qué quiere contar"], ["Adaptación", "puede recortar, actualizar o cambiar el texto (dramaturgia)"], ["Reparto (casting)", "elige a los actores para cada personaje"], ["Diseño", "acuerda con escenógrafo, figurinista e iluminador la estética"], ["Ensayos", "trabaja con los actores intención, movimientos y ritmo"], ["Técnicos y general", "une interpretación, luz y sonido; ensayo con todo como si fuera el estreno"]])}`,
    },
    {
      html: `<h3>Del texto a la escena: el cuaderno de dirección</h3><p>El director anota todas sus decisiones en el <mark>cuaderno de dirección</mark> (o libreto de dirección): el texto con márgenes amplios donde se apuntan los <b>movimientos</b> de los actores (el <i>blocking</i>, a menudo con dibujos del escenario visto desde arriba), las intenciones de cada frase, los cambios de luz y sonido y los tiempos. Para los movimientos se usan las zonas del escenario: <b>derecha e izquierda</b> (vistas desde el actor), <b>proscenio</b> (delante) y <b>foro</b> (al fondo). Así, cualquier miembro del equipo sabe qué ocurre en cada momento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Zonas del escenario vistas desde arriba: foro al fondo, proscenio delante, derecha e izquierda desde el punto de vista del actor, y el público abajo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="30" y="18" width="200" height="118" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        ${[0, 1, 2].map((r) => [0, 1, 2].map((c) => `<rect x="${34 + c * 64.6}" y="${22 + r * 37.3}" width="61" height="34" rx="4" fill="${r === 0 ? "var(--bac)" : r === 2 ? "var(--sun)" : "var(--line)"}" opacity=".35"/>`).join("")).join("")}
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="130" y="44" fill="var(--ink)">foro</text><text x="130" y="82" fill="var(--ink)">centro</text><text x="130" y="120" fill="var(--ink)">proscenio</text><text x="64" y="82" fill="var(--red)">derecha</text><text x="196" y="82" fill="var(--pen)">izquierda</text><text x="130" y="158" fill="var(--muted)">▲ público ▲</text><text x="130" y="174" fill="var(--muted)" font-weight="400">derecha e izquierda del actor</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Del texto al espectáculo",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Proceso: texto del dramaturgo, análisis y concepto del director, diseño del equipo, ensayos y función ante el público">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Texto", "dramaturgo", "var(--pen)"], ["Concepto", "director", "var(--red)"], ["Diseño", "escenografía, luz", "var(--sun)"], ["Ensayos", "actores", "var(--leaf)"], ["Función", "público", "var(--bac)"]].map(([t, d, c], i) => `<rect x="${16 + i * 132}" y="50" width="120" height="96" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${76 + i * 132}" y="94" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${76 + i * 132}" y="120" text-anchor="middle" font-size="12.5" fill="var(--ink)" ${F}>${d}</text>${i < 4 ? `<path d="M${136 + i * 132} 98 h 12" stroke="var(--ink)" stroke-width="3"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "29_gqMar7AM", titulo: "Qué es un texto dramático: obra dramática y sus características", canal: "Profe Teatro", vistas: 360228, megusta: 0, busqueda: "partes del texto dramático acotaciones" },
  ejemplos: [
    { enunciado: "Señala texto principal y acotaciones: «PEDRO.— (Cerrando la puerta de golpe.) ¡Se acabó! (Pausa. Se sienta.) No pienso volver».", pasos: ["Texto principal (lo que dice Pedro): «¡Se acabó!» y «No pienso volver».", "Acotaciones: «Cerrando la puerta de golpe», «Pausa. Se sienta».", "Las acotaciones indican acción, ritmo (pausa) y estado de ánimo."], resultado: "Dos réplicas de texto principal y tres indicaciones escénicas." },
    { enunciado: "Divide en planteamiento, nudo y desenlace la historia de Caperucita contada como obra de teatro.", pasos: ["Planteamiento: la madre manda a Caperucita a casa de la abuela y le advierte del bosque.", "Nudo: el lobo la engaña, se adelanta y se come a la abuela; clímax en el «¡qué boca tan grande tienes!».", "Desenlace: el cazador salva a ambas."], resultado: "Estructura clásica en tres partes con clímax antes del desenlace." },
    { enunciado: "Propón dos puestas en escena distintas para el comienzo de La casa de Bernarda Alba.", pasos: ["Realista: casa andaluza de 1936, paredes blancas, trajes negros de luto, luz de tarde.", "Simbólica: espacio vacío con una jaula gigante, actrices con ropa actual negra, luz blanca y fría.", "Ambas respetan el texto, pero la segunda subraya la idea de encierro."], resultado: "El mismo texto admite montajes muy diferentes según el concepto del director." },
  ],
  errores: [
    "Leer las acotaciones en voz alta como si fueran parte del diálogo.",
    "Confundir acto y escena: el acto es la gran división; la escena cambia con las entradas y salidas.",
    "Pensar que la derecha del escenario es la del público: se toma desde el punto de vista del actor.",
    "Creer que el director solo dice dónde ponerse: define el concepto de todo el montaje.",
    "Pensar que una puesta en escena «fiel» debe ser siempre de época: se puede actualizar respetando el sentido.",
  ],
  ejercicios: [
    { q: "Explica la doble naturaleza del texto dramático.", sol: "Es literaria, porque se puede leer como un texto, y espectacular, porque está pensada para ser representada." },
    { q: "Diferencia texto principal y texto secundario.", sol: "Principal: lo que dicen los personajes (diálogos, monólogos, apartes). Secundario: las acotaciones, que no se pronuncian." },
    { q: "Define diálogo, monólogo y aparte.", sol: "Diálogo: conversación entre personajes. Monólogo: un personaje habla solo. Aparte: comentario que los demás personajes, por convención, no oyen." },
    { q: "¿Qué información pueden dar las acotaciones? Pon cuatro tipos.", sol: "Lugar y tiempo, entradas y salidas, gestos y tono de los personajes, y efectos de luz y sonido." },
    { q: "Escribe un diálogo de cuatro réplicas con al menos tres acotaciones.", sol: "Respuesta abierta. Debe tener nombres de personaje, réplicas y acotaciones en cursiva y entre paréntesis." },
    { q: "¿Cuándo cambia una escena?", sol: "Cuando entra o sale algún personaje." },
    { q: "Explica la estructura interna de una obra.", sol: "Planteamiento (presentación y conflicto), nudo (complicación hasta el clímax) y desenlace (resolución)." },
    { q: "Diferencia personaje plano y redondo.", sol: "Plano: un solo rasgo, no evoluciona. Redondo: complejo, con contradicciones, cambia a lo largo de la obra." },
    { q: "Escribe cinco tareas del director.", sol: "Analizar el texto, adaptarlo, elegir el reparto, acordar el diseño con el equipo y dirigir los ensayos." },
    { q: "¿Qué es el cuaderno de dirección y qué se anota en él?", sol: "El texto de la obra con las decisiones del director: movimientos de los actores, intenciones, cambios de luz y sonido y tiempos." },
  ],
  quiz: [
    { q: "El texto dramático no tiene…", o: ["narrador", "personajes", "diálogo"], a: 0, e: "Hablan los personajes." },
    { q: "Las acotaciones…", o: ["no se dicen en voz alta", "son el diálogo", "las dice el narrador"], a: 0, e: "Son texto secundario." },
    { q: "Un personaje que habla solo hace un…", o: ["monólogo", "diálogo", "coro"], a: 0, e: "Como Hamlet." },
    { q: "Lo que los demás personajes no oyen es un…", o: ["aparte", "acto", "cuadro"], a: 0, e: "Convención teatral." },
    { q: "La escena cambia cuando…", o: ["entra o sale un personaje", "cae el telón", "cambia el actor"], a: 0, e: "El acto es la gran división." },
    { q: "En el Siglo de Oro, los actos se llamaban…", o: ["jornadas", "cuadros", "capítulos"], a: 0, e: "Tres jornadas." },
    { q: "El personaje que se opone al protagonista es el…", o: ["antagonista", "confidente", "coro"], a: 0, e: "Genera conflicto." },
    { q: "La puesta en escena es…", o: ["convertir el texto en espectáculo", "escribir el texto", "vender entradas"], a: 0, e: "Todas las decisiones escénicas." },
    { q: "Elegir los actores se llama…", o: ["reparto", "acotación", "proscenio"], a: 0, e: "Casting." },
    { q: "La parte delantera del escenario es el…", o: ["proscenio", "foro", "telar"], a: 0, e: "El foro es el fondo." },
  ],
  examen: [
    { q: "La derecha del escenario se define desde…", o: ["el actor mirando al público", "el público", "el director"], a: 0, e: "Convención escénica." },
    { q: "El ensayo general es…", o: ["el último ensayo, como si fuera el estreno", "el primero", "una lectura"], a: 0, e: "Con todos los elementos." },
    { q: "Un personaje redondo…", o: ["evoluciona y es complejo", "tiene un solo rasgo", "no habla"], a: 0, e: "Frente al plano." },
  ],
  feynman: ["Las partes del texto dramático: diálogo, monólogo, aparte y acotaciones", "Actos, escenas y estructura interna", "Qué es la puesta en escena", "Qué hace un director y qué es el cuaderno de dirección"],
  mapa: mapa("TEXTO Y ESCENA", "var(--pen)", [
    ["Texto", "diálogo · acotaciones", "var(--pen)"],
    ["Estructura", "actos · escenas · nudo", "var(--red)"],
    ["Personajes", "protagonista · conflicto", "var(--sun)"],
    ["Puesta en escena", "director · cuaderno", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Texto dramático", "Texto escrito para ser representado; sin narrador."],
    ["Acotación", "Indicación del autor para la representación; no se dice."],
    ["Aparte", "Frase que los demás personajes, por convención, no oyen."],
    ["Acto / escena", "Gran división de la obra / parte que cambia con entradas y salidas."],
    ["Conflicto", "Un personaje quiere algo y algo se lo impide."],
    ["Puesta en escena", "Conjunto de decisiones para convertir el texto en espectáculo."],
    ["Cuaderno de dirección", "Texto con las anotaciones de movimientos, luz y sonido."],
    ["Proscenio y foro", "Parte delantera y fondo del escenario."],
  ],
  familias: ["Leed en voz alta una escena corta repartiendo personajes; uno lee solo las acotaciones.", "Ved dos versiones de la misma obra o película y comparad las decisiones de dirección.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): análisis del texto dramático, dramaturgia y puesta en escena.",
    ideas: ["Cada grupo monta la misma escena breve con un concepto distinto.", "Elaborar un cuaderno de dirección de una página con blocking dibujado.", "Lectura dramatizada con un alumno dedicado a las acotaciones."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Centro de Documentación de las Artes Escénicas y de la Música (INAEM)", url: "https://www.teatro.es/" },
  ],
  revisado: "2026-11-12",
};
