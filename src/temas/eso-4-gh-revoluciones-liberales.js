// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, dos, filas, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "Las revoluciones liberales",
  minutos: 40,
  objetivos: ["Explicar las causas y fases de la Revolución francesa", "Relacionar la independencia de Estados Unidos y el Imperio napoleónico con el liberalismo", "Describir las oleadas revolucionarias de 1820, 1830 y 1848 y el nacionalismo"],
  claves: ["liberalismo", "constitución", "soberanía nacional", "Revolución francesa", "Napoleón", "nacionalismo"],
  pregunta: {
    texto: "Hoy votamos, tenemos una Constitución y nadie puede ser detenido sin motivo. Hace 250 años nada de eso existía en Europa. ¿Cuándo empezó a cambiar?",
    respuesta: "Con las <mark>revoluciones liberales</mark> (1776-1848). Primero en las colonias británicas de América, después en Francia en 1789 y luego en casi toda Europa, la burguesía acabó con el Antiguo Régimen e impuso el <b>liberalismo</b>: constitución, división de poderes, derechos individuales y soberanía nacional.",
  },
  bloques: [
    {
      html: `<h3>Qué es el liberalismo</h3><p>El <mark>liberalismo</mark> recoge las ideas ilustradas y las convierte en un sistema político. Defiende una <b>constitución</b> que limite el poder, la <b>división de poderes</b>, la <b>soberanía nacional</b> (el poder reside en el pueblo, que elige representantes), la <b>igualdad ante la ley</b> y derechos como la libertad de expresión y la propiedad. Al principio el voto era <b>censitario</b>: solo votaban los hombres con cierta riqueza.</p>`,
      svg: filas("Principios del liberalismo", [["Constitución", "ley que limita el poder", "var(--pen)"], ["Poderes", "tres poderes separados", "var(--leaf)"], ["Soberanía", "el poder reside en la nación", "var(--red)"], ["Derechos", "libertad, igualdad, propiedad", "var(--sun)"]]),
    },
    {
      html: `<h3>La independencia de Estados Unidos (1776)</h3><p>Las trece colonias británicas de América protestaron por los impuestos decididos en Londres sin su participación («no hay impuestos sin representación»). El 4 de julio de 1776 proclamaron la <mark>Declaración de Independencia</mark> y, tras la guerra, aprobaron la <b>Constitución de 1787</b>: la primera constitución escrita, con república federal, división de poderes y un presidente elegido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bandera de trece franjas y la fecha de 1776">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${Array.from({ length: 13 }, (_, i) => `<rect x="40" y="${24 + i * 8}" width="180" height="8" fill="${i % 2 ? "var(--card)" : "var(--red)"}"/>`).join("")}
        <rect x="40" y="24" width="76" height="56" fill="var(--pen)"/>
        ${Array.from({ length: 13 }, (_, i) => { const a = (i / 13) * 2 * Math.PI; return `<circle cx="${78 + 18 * Math.cos(a)}" cy="${52 + 18 * Math.sin(a)}" r="2.4" fill="#fff"/>`; }).join("")}
        <rect x="40" y="24" width="180" height="104" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="158" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${D}>1776: trece colonias</text>
      </svg>`,
    },
    {
      html: `<h3>La Revolución francesa (1789-1799)</h3><p>Francia estaba en quiebra y el rey Luis XVI convocó los Estados Generales. El tercer estado se proclamó <b>Asamblea Nacional</b> y el 14 de julio de 1789 el pueblo de París tomó la <mark>Bastilla</mark>. Se abolieron los privilegios y se aprobó la <b>Declaración de los Derechos del Hombre y del Ciudadano</b>. Tuvo tres fases: <b>monarquía constitucional</b> (1789-1792), <b>república democrática</b> o Convención, con el Terror de Robespierre y la ejecución del rey (1792-1794), y <b>república moderada</b> o Directorio (1795-1799).</p>`,
      svg: linea("Fases de la Revolución francesa de 1789 a 1799", [["1789", "Bastilla|Derechos"], ["1791", "monarquía|constitucional"], ["1793", "Convención|y Terror"], ["1799", "golpe de|Napoleón"]]),
    },
    {
      html: `<h3>Napoleón: de cónsul a emperador</h3><p>En 1799 el general <mark>Napoleón Bonaparte</mark> dio un golpe de Estado, y en 1804 se coronó emperador. Gobernó de forma autoritaria, pero extendió por Europa ideas revolucionarias como el <b>Código Civil</b> (igualdad ante la ley). Sus ejércitos conquistaron gran parte del continente, incluida España (1808), hasta su derrota en <b>Waterloo</b> (1815). Ese año el <b>Congreso de Viena</b> restauró a los reyes absolutos.</p>`,
      svg: dos("Legado de Napoleón: lo que extendió y lo que restauró el Congreso de Viena", ["Napoleón", ["Código Civil", "igualdad legal", "fin del feudalismo", "imperio europeo", "1799-1815"], "var(--pen)"], ["Viena 1815", ["vuelven los reyes", "absolutos", "Santa Alianza", "fronteras nuevas", "Restauración"], "var(--muted)"]),
    },
    {
      html: `<h3>1820, 1830, 1848 y el nacionalismo</h3><p>Contra la Restauración estallaron tres <mark>oleadas revolucionarias</mark>. En <b>1820</b> (España, Italia, Grecia), en <b>1830</b> (Francia, independencia de Bélgica) y en <b>1848</b>, la «primavera de los pueblos», que pidió además <b>sufragio universal masculino</b>. Junto al liberalismo creció el <mark>nacionalismo</mark>: la idea de que cada nación debe tener su propio Estado. Así se unificaron <b>Italia</b> (1861-1870) y <b>Alemania</b> (1871).</p>`,
      svg: linea("Oleadas revolucionarias y unificaciones", [["1820", "España,|Italia"], ["1830", "Francia,|Bélgica"], ["1848", "primavera de|los pueblos"], ["1871", "Alemania|unificada"]], "var(--pen)"),
    },
  ],
  figura: {
    titulo: "El ciclo de las revoluciones liberales",
    svg: figLinea("Línea del tiempo de 1776 a 1871 con las revoluciones liberales", [[50, "1776", "independencia EE. UU.", 1], [140, "1789", "Revolución francesa", 0], [230, "1804", "Napoleón emperador", 1], [320, "1815", "Waterloo y Viena", 0], [410, "1830", "Francia y Bélgica", 1], [500, "1848", "primavera de los pueblos", 0], [610, "1871", "unificación alemana", 1]], [[50, 140, "", "var(--pen)"], [140, 320, "", "var(--red)"], [320, 610, "", "var(--sun)"]]),
  },
  video: { id: "ttdq818TGD0", titulo: "La Revolución francesa en 14 minutos", canal: "Academia Play", vistas: 13089420, megusta: 0, busqueda: "revoluciones liberales resumen" },
  quiz: [
    { q: "¿Qué significa «soberanía nacional»?", o: ["Que el poder reside en el rey", "Que el poder reside en la nación, que elige a sus representantes", "Que cada región es independiente"], a: 1, e: "Frente al derecho divino del rey, el liberalismo sitúa el origen del poder en el conjunto de los ciudadanos." },
    { q: "¿Qué hecho se considera el inicio de la Revolución francesa?", o: ["La toma de la Bastilla (1789)", "La batalla de Waterloo", "La coronación de Napoleón"], a: 0, e: "El 14 de julio de 1789 el pueblo de París asaltó la Bastilla, símbolo del absolutismo." },
    { q: "El sufragio censitario permitía votar…", o: ["a todos los hombres", "a todos los adultos", "solo a los hombres con cierto nivel de riqueza"], a: 2, e: "En el liberalismo inicial solo votaban los propietarios o quienes pagaban cierta cantidad de impuestos." },
    { q: "¿Qué hizo el Congreso de Viena (1815)?", o: ["Proclamar la república en Francia", "Restaurar las monarquías absolutas tras Napoleón", "Unificar Italia"], a: 1, e: "Las potencias vencedoras devolvieron el trono a los reyes absolutos y redibujaron el mapa de Europa." },
    { q: "¿Qué país fue el primero en tener una constitución escrita?", o: ["Estados Unidos", "Francia", "España"], a: 0, e: "La Constitución de Estados Unidos de 1787 sigue vigente hoy, con enmiendas." },
  ],
  examen: [
    { q: "El nacionalismo del siglo XIX defendía que…", o: ["cada nación debe tener su propio Estado", "Europa debía ser un solo imperio", "los reyes debían elegir sus fronteras"], a: 0, e: "Por eso impulsó la unificación de Italia y Alemania y la independencia de pueblos como Grecia o Bélgica." },
    { q: "La revolución de 1848 se diferenció de las anteriores porque…", o: ["fue solo en España", "pidió sufragio universal masculino y tuvo participación obrera", "restauró el absolutismo"], a: 1, e: "La «primavera de los pueblos» unió liberalismo, democracia y nacionalismo, y los obreros participaron por primera vez." },
    { q: "La fase más radical de la Revolución francesa fue…", o: ["la monarquía constitucional", "la Convención y el Terror (1792-1794)", "el Directorio"], a: 1, e: "Con Robespierre se ejecutó al rey y a miles de opositores." },
  ],
  feynman: ["Los principios del liberalismo y en qué se oponen al Antiguo Régimen", "Las tres fases de la Revolución francesa", "Qué conservó Napoleón de la Revolución y qué no", "Qué pedían las revoluciones de 1820, 1830 y 1848 y qué es el nacionalismo"],
  mapa: mapa("REVOL. LIBERALES", "var(--soc, #c2410c)", [
    ["Liberalismo", "constitución · soberanía · derechos", "var(--pen)"],
    ["EE. UU. 1776", "independencia · Constitución 1787", "var(--leaf)"],
    ["Francia 1789", "Bastilla · Derechos · Napoleón", "var(--red)"],
    ["1820-1848", "oleadas · nacionalismo", "var(--sun)"],
  ], 270),
  tarjetas: [
    ["¿Qué es una constitución?", "La ley fundamental que organiza el Estado, limita el poder y reconoce los derechos."],
    ["14 de julio de 1789", "Toma de la Bastilla, inicio de la Revolución francesa."],
    ["Sufragio censitario", "Solo votan los hombres con cierta riqueza."],
    ["¿Qué restauró el Congreso de Viena (1815)?", "Las monarquías absolutas tras la caída de Napoleón."],
    ["Unificaciones del siglo XIX", "Italia (1861-1870) y Alemania (1871)."],
  ],
  familias: ["Leed juntos el artículo 1 de la Declaración de Derechos de 1789 y comparadlo con el artículo 14 de la Constitución española.", "Preguntad qué derechos habrían tenido vuestros antepasados en 1830 según su sexo y riqueza.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: las revoluciones liberales, el constitucionalismo y los nacionalismos del siglo XIX (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Comparar la Declaración de Independencia (1776) y la Declaración de Derechos (1789).", "Mapa de Europa en 1815 frente a 1871 para ver las unificaciones.", "Debate: ¿era democrático el liberalismo con sufragio censitario?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Revolución francesa, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_francesa" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar las fases de la Revolución francesa y sus logros", "Distinguir nacionalismo unificador y disgregador"],
  bloques: [
    { tras: "La independencia de Estados Unidos", html: `<h3>Las causas de la independencia</h3><p>Las <b>trece colonias</b> británicas de América del Norte pagaban nuevos impuestos (sobre el papel, el té…) sin tener representantes en el Parlamento de Londres: «<mark>no hay impuestos sin representación</mark>». Tras el <b>motín del té de Boston</b> (1773) estalló la guerra. La <b>Declaración de Independencia</b> (4 de julio de 1776), redactada por Thomas Jefferson, proclamó que todos los hombres nacen iguales y tienen derecho a la vida, la libertad y la búsqueda de la felicidad. Con ayuda de Francia y España, los colonos vencieron en 1783. La <b>Constitución de 1787</b> creó una república federal con división de poderes, la primera constitución escrita que sigue vigente.</p>`, video: { id: "nMA5ykesU0I", titulo: "La Independencia de Estados Unidos en 11 minutos", canal: "Academia Play", vistas: 5497087, megusta: 0 } },
    { tras: "La Revolución francesa (1789", html: `<h3>Las causas de la Revolución francesa</h3><p>A finales del siglo XVIII Francia vivía una <b>crisis financiera</b> (la deuda por las guerras, incluida la ayuda a Estados Unidos), una <b>crisis de subsistencia</b> (malas cosechas y pan carísimo en 1788-1789) y una <b>crisis social y política</b>: la burguesía, influida por la Ilustración, no aceptaba los privilegios. Luis XVI convocó los <mark>Estados Generales</mark> para aprobar nuevos impuestos, pero el tercer estado exigió votar por persona y no por estamento. Al negarse el rey, sus diputados se proclamaron <b>Asamblea Nacional</b> y juraron dar una constitución a Francia (juramento del Juego de Pelota).</p>` },
    { tras: "La Revolución francesa (1789", html: `<h3>Las fases de la Revolución</h3>${tabla(["Fase", "Fechas", "Hechos clave"], [["Monarquía constitucional", "1789-1792", "toma de la Bastilla, Declaración de Derechos del Hombre, Constitución de 1791"], ["República jacobina", "1792-1794", "ejecución de Luis XVI, Terror de Robespierre, sufragio universal masculino"], ["Directorio", "1795-1799", "vuelve la burguesía moderada; golpe de Napoleón"]])}<p>La Revolución acabó con el feudalismo y los privilegios, y proclamó la <mark>soberanía nacional</mark>, la igualdad ante la ley y los derechos individuales.</p>` },
    { tras: "Napoleón: de cónsul", html: `<h3>La obra de Napoleón y la Restauración</h3><p>Napoleón extendió por Europa muchas ideas de la Revolución con el <mark>Código Civil</mark> (1804): igualdad ante la ley, propiedad privada, matrimonio civil. También creó los liceos y un Estado centralizado. Sus conquistas despertaron el <b>nacionalismo</b> de los pueblos ocupados, como en España (1808). Tras su derrota en <b>Waterloo</b> (1815), el <b>Congreso de Viena</b> restauró las monarquías absolutas y redibujó el mapa de Europa. La <b>Santa Alianza</b> (Rusia, Austria y Prusia) se comprometió a intervenir contra cualquier revolución liberal.</p>` },
    { tras: "1820, 1830, 1848", html: `<h3>Las unificaciones de Italia y Alemania</h3><p>El <b>nacionalismo</b> defiende que cada nación (un pueblo con lengua, historia y cultura comunes) debe tener su propio Estado. Hubo nacionalismos <mark>disgregadores</mark>, que querían separarse de un imperio (Grecia frente al Imperio otomano, 1830), y <mark>unificadores</mark>, que querían reunir territorios divididos. Italia se unificó en torno al reino de Piamonte, con <b>Cavour</b> y <b>Garibaldi</b> (1861-1870). Alemania lo hizo bajo Prusia, guiada por <b>Bismarck</b>, tras ganar tres guerras: el <b>II Reich</b> se proclamó en 1871 en Versalles.</p>` },
  ],
  ejemplos: [
    { enunciado: "Analiza el lema «Libertad, igualdad, fraternidad» y relaciónalo con el Antiguo Régimen.", pasos: ["Libertad: frente al poder absoluto del rey, derechos individuales.", "Igualdad: frente a los privilegios de los estamentos, todos iguales ante la ley.", "Fraternidad: la nación como comunidad de ciudadanos y no de súbditos."], resultado: "Cada palabra niega un rasgo del Antiguo Régimen: absolutismo, privilegios y sociedad estamental." },
    { enunciado: "Explica por qué el voto por estamento perjudicaba al tercer estado.", pasos: ["En los Estados Generales cada estamento tenía un voto.", "Nobleza y clero sumaban 2 votos frente a 1.", "Aunque el tercer estado representaba al 95 % de la población, perdía siempre."], resultado: "El voto por estamento daba la mayoría a los privilegiados; votar por cabeza daba ventaja al tercer estado, que tenía tantos diputados como los otros dos juntos." },
    { enunciado: "Clasifica estos nacionalismos: Grecia (1830), Italia (1861), Bélgica (1830), Alemania (1871).", pasos: ["Grecia se separa del Imperio otomano: disgregador.", "Bélgica se separa de los Países Bajos: disgregador.", "Italia y Alemania reúnen estados pequeños: unificadores."], resultado: "Disgregadores: Grecia y Bélgica. Unificadores: Italia y Alemania." },
  ],
  errores: [
    "Creer que la Revolución francesa empezó con la ejecución del rey: empezó en 1789; Luis XVI murió en 1793.",
    "Confundir soberanía nacional (el poder reside en la nación) con sufragio universal (votan todos).",
    "Pensar que el liberalismo del siglo XIX dejaba votar a todos: solía haber sufragio censitario.",
    "Situar la independencia de EE. UU. después de la Revolución francesa: fue antes (1776).",
    "Atribuir la unificación alemana a Garibaldi: fue Bismarck; Garibaldi participó en la italiana.",
  ],
  ejercicios: [
    { q: "¿Qué significa «no hay impuestos sin representación»?", sol: "Que no es legítimo cobrar impuestos a quien no tiene representantes que los aprueben." },
    { q: "Cita las tres crisis que llevaron a la Revolución francesa.", sol: "Financiera (deuda del Estado), de subsistencia (pan caro) y social y política (la burguesía rechaza los privilegios)." },
    { q: "¿Qué fue el juramento del Juego de Pelota?", sol: "El compromiso de los diputados del tercer estado, en 1789, de no separarse hasta dar una constitución a Francia." },
    { q: "¿Por qué la toma de la Bastilla es un símbolo?", sol: "Era una prisión que representaba el poder absoluto del rey; su asalto el 14 de julio de 1789 marcó el inicio de la revolución popular." },
    { q: "Explica qué fue el Terror.", sol: "El periodo (1793-1794) en que los jacobinos de Robespierre persiguieron y ejecutaron a miles de sospechosos de ser enemigos de la Revolución." },
    { q: "¿Qué recogía el Código Civil de Napoleón?", sol: "La igualdad ante la ley, la propiedad privada, la libertad de trabajo y el matrimonio civil." },
    { q: "¿Qué decidió el Congreso de Viena?", sol: "Restaurar las monarquías absolutas, redibujar las fronteras de Europa y crear un sistema para frenar las revoluciones liberales." },
    { q: "Define sufragio censitario.", sol: "Sistema en el que solo votan los hombres con cierto nivel de riqueza o de estudios." },
    { q: "¿Qué papel tuvo Bismarck?", sol: "Canciller de Prusia que unificó Alemania tras tres guerras y proclamó el II Reich en 1871." },
    { q: "¿Qué tienen en común la Declaración de Independencia de EE. UU. y la Declaración de Derechos del Hombre?", sol: "Ambas afirman que las personas nacen libres e iguales y tienen derechos naturales que el gobierno debe respetar." },
  ],
  quiz: [
    { q: "La Declaración de Independencia de EE. UU. se firmó en…", o: ["1776", "1789", "1812"], a: 0, e: "El 4 de julio de 1776." },
    { q: "En los Estados Generales el tercer estado exigía votar…", o: ["por estamento", "por persona", "a mano alzada del rey"], a: 1, e: "Así aprovechaba su mayor número de diputados." },
    { q: "El Terror lo dirigió…", o: ["Napoleón", "Robespierre", "Luis XVI"], a: 1, e: "Desde el Comité de Salvación Pública." },
    { q: "Napoleón fue derrotado definitivamente en…", o: ["Austerlitz", "Waterloo", "Trafalgar"], a: 1, e: "En 1815." },
    { q: "El II Reich alemán se proclamó en…", o: ["Berlín, 1848", "Versalles, 1871", "Viena, 1815"], a: 1, e: "Tras vencer a Francia." },
  ],
  tarjetas: [
    ["Estados Generales", "Asamblea de los tres estamentos convocada por el rey de Francia en 1789."],
    ["Código Civil (1804)", "Ley de Napoleón que extendió la igualdad ante la ley."],
    ["Congreso de Viena", "Reunión de 1815 que restauró el absolutismo en Europa."],
  ],
});
