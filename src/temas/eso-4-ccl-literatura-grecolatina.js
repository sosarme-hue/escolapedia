// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, arbol } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "La literatura grecolatina",
  minutos: 60,
  objetivos: ["Identificar los grandes géneros literarios creados por griegos y romanos", "Explicar el origen y las características del teatro griego: tragedia y comedia", "Conocer a los autores y obras principales de la literatura griega y latina", "Reconocer su influencia en la literatura posterior"],
  claves: ["épica", "lírica", "tragedia", "comedia", "historiografía", "fábula"],
  pregunta: {
    texto: "Las series tienen dramas, comedias, documentales históricos y discursos; las canciones hablan de amor y de desamor. ¿Sabías que casi todos esos géneros los inventaron los griegos?",
    respuesta: "Griegos y romanos crearon los <mark>géneros literarios</mark> que seguimos usando: la épica, la lírica, el teatro (tragedia y comedia), la historia, la oratoria, la fábula y hasta la novela. Shakespeare, Lope de Vega o Cervantes aprendieron leyendo a los clásicos.",
  },
  bloques: [
    {
      html: `<h3>Los géneros literarios</h3><p>Los griegos distinguieron tres grandes formas de crear literatura, y Aristóteles las estudió en su <i>Poética</i>: la <b>épica</b> (narra hechos de héroes: la Ilíada), la <b>lírica</b> (expresa sentimientos del poeta, normalmente acompañada de la lira, de ahí su nombre) y la <b>dramática</b> (personajes que dialogan ante el público: el teatro). A ellas se sumaron géneros en <mark>prosa</mark>: la historia, la filosofía, la oratoria, la fábula y la novela.</p>`,
      svg: rueda("Géneros literarios creados en Grecia y Roma", "GÉNEROS", [["épica", "var(--sun)"], ["lírica", "var(--inf)"], ["teatro", "var(--red)"], ["historia", "var(--pen)"], ["oratoria", "var(--leaf)"], ["fábula", "var(--bac)"]], "var(--ink)"),
    },
    {
      html: `<h3>La lírica</h3><p>La <b>lírica</b> griega floreció en los siglos VII y VI a. C. Destaca <mark>Safo de Lesbos</mark>, la primera gran poeta de la que conservamos versos, que escribió sobre el amor y el deseo; Platón la llamó «la décima musa». <b>Píndaro</b> compuso odas para los vencedores de los Juegos Olímpicos y <b>Anacreonte</b>, poemas sobre el vino y la alegría. En Roma, <b>Catulo</b> escribió poemas de amor a Lesbia; <b>Horacio</b> acuñó el tópico <i>carpe diem</i> («aprovecha el día»), y <b>Ovidio</b> escribió <i>El arte de amar</i>.</p>`,
    },
    {
      html: `<h3>El origen del teatro</h3><p>El teatro nació en Atenas en el siglo VI a. C. a partir de los cantos y danzas en honor de <b>Dioniso</b>, dios del vino. En las fiestas llamadas <b>Grandes Dionisias</b> se celebraban concursos: varios autores presentaban sus obras y un jurado elegía la mejor. Los actores eran solo <b>hombres</b> (dos o tres, que interpretaban varios papeles), llevaban <mark>máscaras</mark> y coturnos (calzado alto). El <b>coro</b> cantaba y comentaba la acción. El edificio tenía tres partes: la <b>orchestra</b> (círculo donde actuaba el coro), la <b>skené</b> (escenario y decorado) y el <b>théatron</b> (gradas, a menudo en una ladera).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Planta de un teatro griego: gradas semicirculares (théatron), orchestra circular en el centro y skené rectangular detrás">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[96, 80, 64].map((r, i) => `<path d="M${130 - r} 92 A ${r} ${r} 0 0 0 ${130 + r} 92" fill="none" stroke="var(--line)" stroke-width="${i === 0 ? 14 : 10}"/>`).join("")}
        <circle cx="130" cy="92" r="34" fill="var(--hl)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="70" y="40" width="120" height="18" rx="3" fill="var(--pen)"/>
        <g ${F} font-size="11.5" font-weight="700" text-anchor="middle"><text x="130" y="53" fill="#fff">skené</text><text x="130" y="96" fill="var(--hl-ink)">orchestra</text><text x="130" y="168" fill="var(--ink)">théatron (gradas)</text><text x="130" y="26" fill="var(--muted)" font-weight="400">decorado y actores</text></g></svg>`,
      video: { id: "hx640mxyfRM", titulo: "El teatro griego", canal: "Wayraeduca", vistas: 443378, megusta: 0 },
    },
    {
      html: `<h3>La tragedia</h3><p>La <b>tragedia</b> presenta a héroes y reyes enfrentados a un <mark>destino</mark> que no pueden evitar, y termina en desgracia. Según Aristóteles, provoca en el público compasión y temor, y así produce la <b>catarsis</b>: una purificación de las emociones. Los tres grandes trágicos fueron <b>Esquilo</b> (<i>La Orestíada</i>), <b>Sófocles</b> (<i>Edipo rey</i>, <i>Antígona</i>) y <b>Eurípides</b> (<i>Medea</i>). En <i>Edipo rey</i>, Edipo descubre que, sin saberlo, ha matado a su padre y se ha casado con su madre, tal como anunciaba el oráculo. Antígona desobedece al rey para enterrar a su hermano: ¿ley humana o ley moral?</p>`,
    },
    {
      html: `<h3>La comedia</h3><p>La <b>comedia</b> trata temas de la vida cotidiana y la política con <mark>humor</mark> y final feliz. <b>Aristófanes</b> se burlaba de los políticos y filósofos de Atenas: en <i>Las nubes</i> ridiculiza a Sócrates, y en <i>Lisístrata</i> las mujeres hacen una huelga para obligar a los hombres a firmar la paz. Más tarde, <b>Menandro</b> creó la comedia de enredo, con personajes tipo. En Roma, <b>Plauto</b> y <b>Terencio</b> la imitaron: de Plauto viene <i>La olla</i> (<i>Aulularia</i>), sobre un avaro, que inspiró a Molière.</p>`,
      svg: dos("Tragedia frente a comedia", ["Tragedia", ["héroes y reyes", "destino", "final desgraciado", "catarsis", "Sófocles"], "var(--red)"], ["Comedia", ["gente común", "vida y política", "final feliz", "risa y crítica", "Aristófanes"], "var(--sun)"]),
    },
    {
      html: `<h3>La prosa: historia, oratoria y fábula</h3><p><b>Heródoto</b>, «padre de la historia», narró las Guerras Médicas; <b>Tucídides</b> escribió la guerra del Peloponeso buscando causas y pruebas. En Roma, <b>Julio César</b> contó sus campañas en <i>La guerra de las Galias</i>, y <b>Tito Livio</b>, la historia de Roma desde su fundación. La <b>oratoria</b>, el arte de hablar en público, tuvo como maestros a <b>Demóstenes</b> en Grecia y a <mark>Cicerón</mark> en Roma. La <b>fábula</b>, relato breve con animales y una moraleja, la creó <b>Esopo</b> («La cigarra y la hormiga», «La liebre y la tortuga») y la continuó en latín <b>Fedro</b>.</p>`,
      svg: filas("Grandes autores en prosa", [["Heródoto", "historia: Guerras Médicas", "var(--pen)"], ["Tucídides", "historia con pruebas", "var(--inf)"], ["César", "La guerra de las Galias", "var(--red)"], ["Cicerón", "oratoria y política", "var(--sun)"], ["Esopo", "fábulas con moraleja", "var(--leaf)"]]),
    },
    {
      html: `<h3>La literatura latina</h3><p>Roma imitó a Grecia, pero creó su propio estilo. El momento de mayor esplendor fue el <b>siglo de Augusto</b> (siglo I a. C.): <b>Virgilio</b> escribió la <i>Eneida</i>; <b>Horacio</b>, odas y sátiras; <b>Ovidio</b>, las <i>Metamorfosis</i>, un gran depósito de mitos; y <b>Tito Livio</b>, su historia. Varios autores eran de <mark>Hispania</mark>: el filósofo <b>Séneca</b> (de Córdoba), su sobrino el poeta <b>Lucano</b>, el epigramista <b>Marcial</b> (de Bílbilis, cerca de Calatayud) y el maestro de oratoria <b>Quintiliano</b> (de Calahorra).</p>${tabla(["Género", "Griego", "Latino"], [["Épica", "Homero", "Virgilio"], ["Lírica", "Safo, Píndaro", "Catulo, Horacio"], ["Tragedia", "Sófocles, Eurípides", "Séneca"], ["Comedia", "Aristófanes", "Plauto"], ["Historia", "Heródoto", "Tito Livio"], ["Fábula", "Esopo", "Fedro"]])}`,
    },
    {
      html: `<h3>La pervivencia de los clásicos</h3><p>Los textos clásicos se conservaron gracias a los copistas de los monasterios medievales y de Bizancio, y a los traductores árabes. En el <b>Renacimiento</b> se redescubrieron y se imitaron: Garcilaso usó el <i>carpe diem</i> de Horacio; Shakespeare y Lope tomaron argumentos de Plauto; La Fontaine y Samaniego reescribieron a Esopo. Hoy siguen inspirando: <i>Antígona</i> se representa como símbolo de rebeldía, y la estructura en cinco actos o los <mark>tópicos literarios</mark> (<i>carpe diem</i>, <i>beatus ille</i>, <i>tempus fugit</i>) siguen vivos en canciones y poemas.</p>`,
    },
  ],
  figura: {
    titulo: "Árbol de los géneros clásicos",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Géneros en verso: épica, lírica, tragedia y comedia; géneros en prosa: historia, oratoria, filosofía y fábula">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      ${[["VERSO", 170, "var(--pen)", [["Épica", "Homero"], ["Lírica", "Safo"], ["Tragedia", "Sófocles"], ["Comedia", "Aristófanes"]]], ["PROSA", 510, "var(--red)", [["Historia", "Heródoto"], ["Oratoria", "Cicerón"], ["Filosofía", "Platón"], ["Fábula", "Esopo"]]]].map(([t, cx, c, hs]) => `<rect x="${cx - 60}" y="18" width="120" height="36" rx="18" fill="${c}"/><text x="${cx}" y="42" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" ${D}>${t}</text>${hs.map(([g, a], i) => { const x = cx - 120 + i * 80; return `<path d="M${cx} 54 L ${x} 104" stroke="var(--line)" stroke-width="2.5"/><rect x="${x - 38}" y="104" width="76" height="78" rx="12" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="${x}" y="134" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${g}</text><text x="${x}" y="160" text-anchor="middle" font-size="11.5" fill="var(--muted)" ${F}>${a}</text>`; }).join("")}`).join("")}
    </svg>`,
  },
  video: { id: "D8-RC66KHcc", titulo: "Literatura clásica griega: características, autores, géneros", canal: "Lenguaje, literatura y libertad", vistas: 145986, megusta: 0, busqueda: "literatura griega géneros teatro griego" },
  ejemplos: [
    { enunciado: "Clasifica por género: a) Edipo rey; b) La cigarra y la hormiga; c) Las Catilinarias de Cicerón; d) un poema de Safo.", pasos: ["a) Obra teatral con final trágico: tragedia.", "b) Relato breve con animales y moraleja: fábula.", "c) Discursos pronunciados en el Senado: oratoria.", "d) Expresión de sentimientos: lírica."], resultado: "a) Tragedia; b) fábula; c) oratoria; d) lírica." },
    { enunciado: "Explica qué es la catarsis con el ejemplo de Edipo rey.", pasos: ["El público siente compasión por Edipo, que sufre sin haber querido hacer el mal.", "También siente temor, porque piensa que podría pasarle algo parecido.", "Al terminar, esas emociones se liberan y el espectador sale «purificado»."], resultado: "La catarsis es la purificación de las emociones mediante la compasión y el temor." },
    { enunciado: "Analiza el tópico carpe diem en estos versos de Garcilaso: «coged de vuestra alegre primavera / el dulce fruto antes que el tiempo airado / cubra de nieve la hermosa cumbre».", pasos: ["«Alegre primavera»: metáfora de la juventud.", "«Coged el dulce fruto»: disfrutad del presente.", "«Nieve en la cumbre»: canas, la vejez que llegará."], resultado: "Invita a disfrutar la juventud antes de que pase: carpe diem, tomado de Horacio." },
  ],
  errores: [
    "Pensar que en el teatro griego actuaban mujeres: todos los papeles los hacían hombres con máscaras.",
    "Confundir tragedia con «drama triste» actual: la tragedia griega trata del destino de héroes.",
    "Creer que la literatura latina es solo una copia: imitó modelos griegos pero creó obras originales.",
    "Atribuir las fábulas solo a Samaniego: el creador del género fue Esopo.",
    "Confundir a Séneca (filósofo y trágico cordobés) con Cicerón (orador romano).",
  ],
  ejercicios: [
    { q: "¿Cuáles son los tres grandes géneros que distinguió Aristóteles?", sol: "Épica, lírica y dramática." },
    { q: "¿Por qué se llama «lírica» la poesía de sentimientos?", sol: "Porque en Grecia se recitaba acompañada de la lira." },
    { q: "Explica el origen religioso del teatro.", sol: "Nació de los cantos y danzas en honor de Dioniso en las fiestas de Atenas, donde se organizaban concursos teatrales." },
    { q: "Nombra y describe las tres partes de un teatro griego.", sol: "Orchestra: círculo donde actuaba el coro. Skené: escenario y decorado. Théatron: gradas para el público." },
    { q: "¿Qué temas y personajes tiene la tragedia? Nombra a sus tres grandes autores.", sol: "Héroes y reyes enfrentados al destino, con final desgraciado. Esquilo, Sófocles y Eurípides." },
    { q: "Resume el argumento de Lisístrata.", sol: "Las mujeres de Atenas y Esparta hacen una huelga para obligar a los hombres a terminar la guerra." },
    { q: "¿Por qué se llama a Heródoto «padre de la historia»?", sol: "Porque fue el primero en investigar y narrar hechos del pasado en prosa, con el objetivo de que no se olvidaran (las Guerras Médicas)." },
    { q: "Escribe una fábula de Esopo y su moraleja.", sol: "La liebre y la tortuga: la liebre, confiada, se duerme y la tortuga gana la carrera. Moraleja: la constancia vence a la presunción." },
    { q: "Nombra tres autores latinos nacidos en Hispania y una obra o género de cada uno.", sol: "Séneca (filosofía y tragedias), Marcial (epigramas), Quintiliano (oratoria), Lucano (la Farsalia)." },
    { q: "Explica los tópicos carpe diem y tempus fugit.", sol: "Carpe diem: aprovecha el momento presente. Tempus fugit: el tiempo huye, pasa deprisa." },
  ],
  quiz: [
    { q: "La épica…", o: ["narra hazañas de héroes", "expresa sentimientos", "se representa en un escenario"], a: 0, e: "Como la Ilíada." },
    { q: "Safo fue una poeta…", o: ["lírica", "épica", "trágica"], a: 0, e: "De la isla de Lesbos." },
    { q: "El teatro nació en honor de…", o: ["Dioniso", "Zeus", "Atenea"], a: 0, e: "Dios del vino." },
    { q: "La parte del teatro donde actuaba el coro era la…", o: ["orchestra", "skené", "cávea"], a: 0, e: "Un espacio circular." },
    { q: "Edipo rey es de…", o: ["Sófocles", "Aristófanes", "Plauto"], a: 0, e: "Tragedia." },
    { q: "Aristófanes escribía…", o: ["comedias", "tragedias", "historia"], a: 0, e: "Se burlaba de los políticos." },
    { q: "El padre de la historia es…", o: ["Heródoto", "Homero", "Esopo"], a: 0, e: "Narró las Guerras Médicas." },
    { q: "El gran orador romano fue…", o: ["Cicerón", "Virgilio", "César"], a: 0, e: "Las Catilinarias." },
    { q: "Las fábulas las creó…", o: ["Esopo", "Ovidio", "Safo"], a: 0, e: "Fedro las escribió en latín." },
    { q: "Marcial nació en…", o: ["Hispania", "Grecia", "Egipto"], a: 0, e: "En Bílbilis (Calatayud)." },
  ],
  examen: [
    { q: "La catarsis es…", o: ["la purificación de las emociones", "un tipo de máscara", "el final feliz"], a: 0, e: "Según Aristóteles." },
    { q: "Carpe diem es un tópico de…", o: ["Horacio", "Homero", "Cicerón"], a: 0, e: "«Aprovecha el día»." },
    { q: "Los actores griegos eran…", o: ["solo hombres", "solo mujeres", "esclavos"], a: 0, e: "Con máscaras." },
  ],
  feynman: ["Los géneros literarios que crearon griegos y romanos", "Cómo era el teatro griego y sus partes", "Diferencias entre tragedia y comedia, con autores", "Autores latinos de Hispania y tópicos que siguen vivos"],
  mapa: mapa("LITERATURA CLÁSICA", "var(--sun)", [
    ["Verso", "épica · lírica", "var(--pen)"],
    ["Teatro", "tragedia · comedia · catarsis", "var(--red)"],
    ["Prosa", "historia · oratoria · fábula", "var(--leaf)"],
    ["Pervivencia", "carpe diem · Renacimiento", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Lírica", "Poesía que expresa sentimientos; se acompañaba de la lira."],
    ["Tragedia", "Teatro sobre héroes enfrentados al destino, con final desgraciado."],
    ["Comedia", "Teatro sobre la vida cotidiana y la política, con humor."],
    ["Catarsis", "Purificación de las emociones que produce la tragedia."],
    ["Orchestra", "Espacio circular del teatro griego donde actuaba el coro."],
    ["Heródoto", "Padre de la historia; narró las Guerras Médicas."],
    ["Esopo", "Creador de la fábula con moraleja."],
    ["Carpe diem", "Tópico de Horacio: aprovecha el momento presente."],
  ],
  familias: ["Leed juntos tres fábulas de Esopo y escribid una moderna con su moraleja.", "Si hay ocasión, id a ver una obra clásica en el Festival de Teatro de Mérida o en un teatro romano.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): géneros literarios grecolatinos, teatro griego y romano, autores principales e influencia en la literatura posterior.",
    ideas: ["Representar una escena de Lisístrata con máscaras hechas en clase.", "Buscar el carpe diem en canciones actuales.", "Itinerario de autores hispanorromanos en un mapa."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Festival Internacional de Teatro Clásico de Mérida", url: "https://www.festivaldemerida.es/" },
  ],
  revisado: "2026-11-12",
};
