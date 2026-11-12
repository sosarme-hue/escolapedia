// Religión 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { barras, dos, filas, figCols } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "4-eso",
  titulo: "Las religiones del mundo",
  minutos: 40,
  objetivos: ["Identificar las grandes religiones del mundo, sus fundadores, libros y símbolos", "Distinguir religiones monoteístas y orientales", "Valorar el diálogo interreligioso y la libertad religiosa"],
  claves: ["monoteísmo", "judaísmo", "islam", "hinduismo", "budismo", "diálogo interreligioso"],
  pregunta: {
    texto: "En una misma clase de un instituto español puede haber alumnado cristiano, musulmán, judío, budista, sij o sin religión. ¿Qué tienen en común las religiones y qué las diferencia?",
    respuesta: "Todas las <mark>religiones</mark> responden a las grandes preguntas sobre el sentido de la vida y proponen una relación con lo sagrado, ritos, una comunidad y una moral. Se diferencian en cómo entienden a Dios o lo divino, en sus textos sagrados y en sus prácticas. Conocerlas es la base del <b>respeto</b> y la convivencia.",
  },
  bloques: [
    {
      html: `<h3>Los elementos de una religión</h3><p>Casi todas las religiones comparten unos elementos: <b>creencias</b> sobre lo divino y el ser humano, <b>textos sagrados</b>, <b>ritos</b> y oraciones, <b>lugares</b> y <b>tiempos sagrados</b> (templos, fiestas), una <b>comunidad</b> y una <b>moral</b>. Según cómo entienden lo divino, hay religiones <mark>monoteístas</mark> (un solo Dios), politeístas (muchos dioses) y otras sin un dios personal, como el budismo.</p>`,
      svg: filas("Elementos comunes de las religiones", [["Creencias", "qué es lo divino", "var(--bac)"], ["Textos", "libros sagrados", "var(--pen)"], ["Ritos", "oración, fiestas", "var(--sun)"], ["Comunidad", "fieles y lugares", "var(--leaf)"], ["Moral", "cómo vivir bien", "var(--red)"]]),
    },
    {
      html: `<h3>Las tres religiones abrahámicas</h3><p>El <b>judaísmo</b>, el <b>cristianismo</b> y el <b>islam</b> son <mark>monoteístas</mark> y se consideran herederos de la fe de <b>Abraham</b>. El judaísmo se basa en la Torá y la alianza de Dios con Israel; su lugar de culto es la sinagoga. El cristianismo cree que Jesús es el Hijo de Dios; su libro es la Biblia. El islam, fundado por <b>Mahoma</b> en el siglo VII en Arabia, tiene como libro el <b>Corán</b>; sus fieles rezan en la mezquita y cumplen los cinco pilares (fe, oración, limosna, ayuno en Ramadán y peregrinación a La Meca).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres religiones abrahámicas: judaísmo, cristianismo e islam, con un símbolo de cada una">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-size="12" font-weight="700">
          <circle cx="46" cy="70" r="30" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
          <path d="M46 50 L 63 80 H 29 Z M46 90 L 29 60 H 63 Z" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
          <circle cx="130" cy="70" r="30" fill="var(--card)" stroke="var(--bac)" stroke-width="2.5"/>
          <path d="M130 48 V 94 M114 62 H 146" stroke="var(--bac)" stroke-width="5"/>
          <circle cx="214" cy="70" r="30" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
          <path d="M222 52 A 20 20 0 1 0 222 88 A 16 16 0 1 1 222 52 Z" fill="var(--leaf)"/>
          <text x="46" y="124" fill="var(--pen)">judaísmo</text><text x="130" y="124" fill="var(--bac)">cristianismo</text><text x="214" y="124" fill="var(--leaf)">islam</text>
          <text x="46" y="142" fill="var(--muted)" font-weight="400" font-size="11">Torá</text><text x="130" y="142" fill="var(--muted)" font-weight="400" font-size="11">Biblia</text><text x="214" y="142" fill="var(--muted)" font-weight="400" font-size="11">Corán</text>
          <text x="130" y="166" fill="var(--ink)">un solo Dios · Abraham</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Religiones de la India y de Asia</h3><p>El <mark>hinduismo</mark>, nacido en la India hace más de 3 000 años, no tiene un fundador; sus textos son los Vedas, cree en muchas manifestaciones de lo divino, en la <b>reencarnación</b> (ciclo de nacimientos) y en el <b>karma</b> (las acciones tienen consecuencias). El <mark>budismo</mark> lo fundó <b>Siddhartha Gautama</b>, el Buda, en el siglo VI a. C.: enseña que el sufrimiento nace del deseo y que se supera siguiendo el Óctuple Sendero hasta el <b>nirvana</b>.</p>`,
      svg: dos("Hinduismo y budismo", ["Hinduismo", ["India, sin fundador", "Vedas", "muchos dioses", "reencarnación", "karma"], "var(--inf)"], ["Budismo", ["Buda, s. VI a. C.", "4 nobles verdades", "sin dios creador", "meditación", "nirvana"], "var(--sun)"]),
    },
    {
      html: `<h3>Diálogo y libertad religiosa</h3><p>La <b>Constitución española</b> (art. 16) garantiza la <mark>libertad religiosa</mark>: cada persona puede tener la religión que quiera o ninguna, y nadie puede ser discriminado por ello. La Declaración Universal de los Derechos Humanos (art. 18) también la protege. El <b>diálogo interreligioso</b> busca conocerse, colaborar por la paz y la justicia y rechazar cualquier violencia en nombre de Dios. El Concilio Vaticano II pidió mirar con respeto lo que hay de «verdadero y santo» en otras religiones.</p>`,
      svg: barras("Fieles aproximados de las grandes religiones en millones", [["cristianismo", 2400, "var(--bac)", "≈ 2 400 M"], ["islam", 1900, "var(--leaf)", "≈ 1 900 M"], ["hinduismo", 1200, "var(--inf)", "≈ 1 200 M"], ["budismo", 500, "var(--sun)", "≈ 500 M"], ["judaísmo", 15, "var(--pen)", "≈ 15 M"]], 3200),
    },
  ],
  figura: {
    titulo: "Cinco religiones de un vistazo",
    svg: `<svg viewBox="0 0 680 250" role="img" aria-label="Tabla de cinco religiones con fundador u origen, libro sagrado, lugar de culto y fiesta principal">
      <rect width="680" height="250" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="12.5" text-anchor="middle">
        ${["", "origen", "libro", "lugar de culto", "una fiesta"].map((t, i) => `<text x="${[70, 210, 340, 470, 600][i]}" y="32" font-weight="700" fill="var(--muted)">${t}</text>`).join("")}
        ${[["judaísmo", "Abraham, Moisés", "Torá", "sinagoga", "Pésaj", "var(--pen)"], ["cristianismo", "Jesús, s. I", "Biblia", "iglesia", "Pascua", "var(--bac)"], ["islam", "Mahoma, s. VII", "Corán", "mezquita", "fin del Ramadán", "var(--leaf)"], ["hinduismo", "India, sin fundador", "Vedas", "templo (mandir)", "Diwali", "var(--inf)"], ["budismo", "Buda, s. VI a. C.", "Tripitaka", "templo, estupa", "Vesak", "var(--sun)"]].map(([r, o, l, c, f, col], i) => { const y = 66 + i * 38; return `<rect x="20" y="${y - 22}" width="640" height="32" rx="8" fill="var(--card)" stroke="${col}" stroke-width="1.5"/><text x="70" y="${y - 2}" font-weight="700" fill="${col}">${r}</text><text x="210" y="${y - 2}" fill="var(--ink)">${o}</text><text x="340" y="${y - 2}" fill="var(--ink)">${l}</text><text x="470" y="${y - 2}" fill="var(--ink)">${c}</text><text x="600" y="${y - 2}" fill="var(--ink)">${f}</text>`; }).join("")}
      </g>
    </svg>`,
  },
  video: { id: "zdLQodlJmsg", titulo: "Las principales cinco religiones del mundo", canal: "Sé Curioso — TED-Ed", vistas: 882748, megusta: 18874, busqueda: "religiones del mundo explicación" },
  quiz: [
    { q: "¿Qué tienen en común judaísmo, cristianismo e islam?", o: ["Son monoteístas y remiten a Abraham", "Creen en la reencarnación", "Nacieron en la India"], a: 0, e: "Por eso se llaman religiones abrahámicas." },
    { q: "¿Cuál es el libro sagrado del islam?", o: ["La Torá", "El Corán", "Los Vedas"], a: 1, e: "Los musulmanes creen que fue revelado a Mahoma." },
    { q: "¿Quién fundó el budismo?", o: ["Mahoma", "Siddhartha Gautama, el Buda", "Moisés"], a: 1, e: "Vivió en el norte de la India en el siglo VI a. C." },
    { q: "El karma, en el hinduismo, significa que…", o: ["hay un solo Dios", "nuestras acciones tienen consecuencias en esta vida y las siguientes", "hay que peregrinar a La Meca"], a: 1, e: "Está unido a la creencia en la reencarnación." },
    { q: "¿Qué artículo de la Constitución española garantiza la libertad religiosa?", o: ["Artículo 1", "Artículo 16", "Artículo 155"], a: 1, e: "También protege a quien no tiene religión." },
  ],
  examen: [
    { q: "El ayuno del mes de Ramadán es uno de los cinco pilares del…", o: ["judaísmo", "islam", "budismo"], a: 1, e: "Los cinco pilares: fe, oración, limosna, ayuno y peregrinación." },
    { q: "La sinagoga es el lugar de culto del…", o: ["judaísmo", "hinduismo", "islam"], a: 0, e: "La mezquita es la del islam y la iglesia, la del cristianismo." },
    { q: "El diálogo interreligioso busca…", o: ["que todas las religiones se fusionen", "conocerse, respetarse y colaborar por la paz", "imponer una religión"], a: 1, e: "Cada religión mantiene su identidad, pero coopera con las demás." },
  ],
  feynman: ["Los elementos que comparten las religiones", "Semejanzas y diferencias entre judaísmo, cristianismo e islam", "Las ideas básicas del hinduismo y del budismo", "Qué es la libertad religiosa y para qué sirve el diálogo"],
  mapa: mapa("RELIGIONES DEL MUNDO", "var(--bac)", [
    ["Elementos", "creencias · ritos · moral", "var(--muted)"],
    ["Abrahámicas", "judaísmo · cristianismo · islam", "var(--pen)"],
    ["Orientales", "hinduismo · budismo", "var(--sun)"],
    ["Convivencia", "libertad religiosa · diálogo", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Religiones abrahámicas", "Judaísmo, cristianismo e islam."],
    ["Cinco pilares del islam", "Fe, oración, limosna, ayuno en Ramadán y peregrinación a La Meca."],
    ["Reencarnación y karma", "Creencias centrales del hinduismo."],
    ["Fundador del budismo", "Siddhartha Gautama, el Buda (s. VI a. C.)."],
    ["Libertad religiosa en España", "Artículo 16 de la Constitución."],
  ],
  familias: ["Averiguad juntos qué lugares de culto de distintas religiones hay en vuestra ciudad.", "Si tenéis amistades de otra religión, preguntadles con respeto por su fiesta más importante.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El hecho religioso: grandes religiones, diálogo interreligioso y libertad religiosa (RD 217/2022; enseñanzas de Religión católica de la ESO; art. 16 CE).",
    ideas: ["Fichas por grupos sobre cada religión y exposición cruzada.", "Calendario de fiestas religiosas del curso.", "Lectura de la declaración «Nostra aetate» del Vaticano II."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Constitución Española, artículo 16 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Comparar las creencias, textos, lugares y fiestas de las grandes religiones", "Valorar la libertad religiosa y el diálogo interreligioso"],
  bloques: [
    { tras: "Las tres religiones abrahámicas", html: `<h3>Judaísmo, cristianismo e islam</h3>${tabla(["", "Judaísmo", "Cristianismo", "Islam"], [["Fundador o figura central", "Abraham y Moisés", "Jesucristo", "Mahoma (s. VII)"], ["Libro sagrado", "Tanaj (Torá)", "Biblia", "Corán"], ["Lugar de culto", "sinagoga", "iglesia", "mezquita"], ["Día sagrado", "sábado (shabat)", "domingo", "viernes"], ["Fiestas", "Pésaj, Yom Kipur, Janucá", "Navidad, Pascua", "fin del Ramadán, Fiesta del Sacrificio"], ["Seguidores aprox.", "≈ 15 millones", "≈ 2.400 millones", "≈ 2.000 millones"]])}<p>Las tres creen en <mark>un solo Dios</mark> y se consideran herederas de la fe de Abraham.</p>` },
    { tras: "Las tres religiones abrahámicas", html: `<h3>Los cinco pilares del islam</h3><p>El islam («sumisión a Dios») se basa en cinco obligaciones: la <b>profesión de fe</b> (<i>shahada</i>: «no hay más dios que Dios y Mahoma es su profeta»), la <b>oración</b> cinco veces al día mirando hacia La Meca, la <b>limosna</b> obligatoria para los pobres, el <b>ayuno</b> del mes de <mark>Ramadán</mark> desde el amanecer hasta la puesta del sol y la <b>peregrinación</b> a La Meca al menos una vez en la vida, si se puede. Sus dos grandes ramas son los <b>suníes</b> (la gran mayoría) y los <b>chiíes</b>, que se separaron por la sucesión de Mahoma.</p>`, video: { id: "nRy4AbwPmsY", titulo: "La historia del islam y sus ramas en 13 minutos", canal: "Memorias de Pez", vistas: 4087132, megusta: 0 } },
    { tras: "Religiones de la India", html: `<h3>Hinduismo y budismo</h3><p>El <b>hinduismo</b>, la religión mayoritaria de la India (≈ 1.200 millones de fieles), no tiene un fundador. Cree en muchos dioses, que muchos entienden como manifestaciones de un único principio, <b>Brahman</b>; en la <mark>reencarnación</mark> (<i>samsara</i>) y en el <b>karma</b>: las acciones determinan la vida siguiente. Sus libros son los Vedas y la Bhagavad Gita, y el Ganges es su río sagrado. El <b>budismo</b> lo fundó Siddharta Gautama, <b>Buda</b> («el iluminado», s. VI-V a. C.). Enseña que el sufrimiento nace del deseo y que se supera con el <b>Óctuple Sendero</b>, hasta alcanzar el <mark>nirvana</mark>. No cree en un Dios creador.</p>` },
    { tras: "Religiones de la India", html: `<h3>Otras tradiciones de Asia</h3><p>En China, el <b>confucianismo</b> (Confucio, s. VI-V a. C.) es más una ética que una religión: valora el respeto a los mayores, la familia, el estudio y el buen gobierno. El <b>taoísmo</b> (Lao Tse) busca vivir en armonía con el <i>Tao</i>, el orden de la naturaleza, representado por el <mark>yin y el yang</mark>. En Japón está el <b>sintoísmo</b>, que venera a los <i>kami</i>, espíritus de la naturaleza y de los antepasados. En la India nació también el <b>sijismo</b> (s. XV), que cree en un solo Dios y en la igualdad de todas las personas.</p>` },
    { tras: "Diálogo y libertad religiosa", html: `<h3>Religiones en España</h3><p>La Constitución de 1978 declara que <b>ninguna confesión tendrá carácter estatal</b> (art. 16): España es un Estado <mark>aconfesional</mark>, que garantiza la libertad religiosa y coopera con las confesiones. Además de la Iglesia católica, mayoritaria, el Estado tiene acuerdos de cooperación desde 1992 con las comunidades <b>evangélicas</b>, <b>judías</b> y <b>musulmanas</b>. En España hay también ortodoxos, budistas, testigos de Jehová, Iglesia de Jesucristo de los Santos de los Últimos Días y un número creciente de personas sin religión. El diálogo se basa en conocerse, respetarse y colaborar por el bien común.</p>` },
  ],
  ejemplos: [
    { enunciado: "Identifica la religión: oran en la sinagoga, guardan el sábado y celebran Pésaj.", pasos: ["La sinagoga es el lugar de culto judío.", "El sábado (shabat) es su día sagrado.", "Pésaj es la Pascua judía, que recuerda la salida de Egipto."], resultado: "Judaísmo." },
    { enunciado: "Compara la idea de lo que ocurre tras la muerte en el cristianismo y en el hinduismo.", pasos: ["Cristianismo: una sola vida; resurrección y vida eterna con Dios.", "Hinduismo: reencarnación según el karma, hasta liberarse del ciclo (moksha)."], resultado: "Una vida y resurrección frente a muchas vidas y liberación del ciclo." },
    { enunciado: "Explica qué significa que España es un Estado aconfesional.", pasos: ["No hay religión oficial (art. 16 de la Constitución).", "Se garantiza la libertad religiosa de todos.", "El Estado coopera con las confesiones, en especial con la católica, y con acuerdos con evangélicos, judíos y musulmanes."], resultado: "Neutral ante las religiones, pero no hostil: protege la libertad y coopera." },
  ],
  errores: [
    "Confundir musulmán (fiel del islam) con árabe (pueblo y lengua): la mayoría de los musulmanes no son árabes.",
    "Pensar que el budismo cree en un Dios creador.",
    "Creer que todas las religiones son iguales o que son totalmente opuestas: tienen semejanzas y diferencias.",
    "Confundir Estado aconfesional con Estado ateo.",
    "Pensar que el Ramadán es una fiesta de un día: es un mes de ayuno.",
  ],
  ejercicios: [
    { q: "¿Por qué judaísmo, cristianismo e islam se llaman religiones abrahámicas?", sol: "Porque las tres se consideran herederas de la fe de Abraham en un único Dios." },
    { q: "Escribe el libro sagrado y el lugar de culto de cada religión abrahámica.", sol: "Judaísmo: Tanaj, sinagoga. Cristianismo: Biblia, iglesia. Islam: Corán, mezquita." },
    { q: "Cita los cinco pilares del islam.", sol: "Profesión de fe, oración, limosna, ayuno en Ramadán y peregrinación a La Meca." },
    { q: "Diferencia suníes y chiíes.", sol: "Son las dos grandes ramas del islam, separadas por quién debía suceder a Mahoma; los suníes son la gran mayoría." },
    { q: "¿Qué son el karma y la reencarnación?", sol: "La reencarnación es renacer en otra vida; el karma, la ley por la que las acciones determinan esa vida." },
    { q: "¿Qué enseña el budismo sobre el sufrimiento?", sol: "Que nace del deseo y se supera siguiendo el Óctuple Sendero hasta el nirvana." },
    { q: "¿Qué representa el yin y el yang?", sol: "Las fuerzas opuestas y complementarias que mantienen el equilibrio del universo en el taoísmo." },
    { q: "¿Qué es el sintoísmo?", sol: "La religión tradicional de Japón, que venera a los kami, espíritus de la naturaleza y los antepasados." },
    { q: "¿Qué dice el artículo 16 de la Constitución?", sol: "Garantiza la libertad religiosa y establece que ninguna confesión tendrá carácter estatal." },
    { q: "Propón dos acciones para el diálogo interreligioso en tu centro.", sol: "Por ejemplo: invitar a personas de distintas religiones a explicar sus fiestas y organizar un proyecto solidario conjunto." },
  ],
  quiz: [
    { q: "El día sagrado del islam es el…", o: ["viernes", "sábado", "domingo"], a: 0, e: "Oración comunitaria en la mezquita." },
    { q: "El Ramadán es un mes de…", o: ["ayuno", "peregrinación", "vacaciones"], a: 0, e: "Desde el amanecer hasta la puesta del sol." },
    { q: "Buda significa…", o: ["el iluminado", "el profeta", "el rey"], a: 0, e: "Siddharta Gautama." },
    { q: "El confucianismo nació en…", o: ["China", "India", "Japón"], a: 0, e: "Siglos VI-V a. C." },
    { q: "España es un Estado…", o: ["aconfesional", "confesional católico", "ateo"], a: 0, e: "Art. 16 de la Constitución." },
  ],
  tarjetas: [
    ["Cinco pilares", "Fe, oración, limosna, ayuno y peregrinación (islam)."],
    ["Nirvana", "Estado de liberación del sufrimiento en el budismo."],
    ["Estado aconfesional", "Sin religión oficial y con libertad religiosa."],
  ],
});
