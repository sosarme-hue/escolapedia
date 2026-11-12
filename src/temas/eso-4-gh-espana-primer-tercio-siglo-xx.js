// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, dos, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "España en el primer tercio del siglo XX",
  minutos: 40,
  objetivos: ["Explicar la crisis de la Restauración durante el reinado de Alfonso XIII", "Describir la dictadura de Primo de Rivera", "Analizar las reformas y los problemas de la Segunda República"],
  claves: ["Alfonso XIII", "crisis de 1917", "Primo de Rivera", "Segunda República", "Constitución de 1931", "voto femenino"],
  pregunta: {
    texto: "El 14 de abril de 1931, tras unas elecciones municipales, el rey Alfonso XIII se marchó de España sin abdicar y miles de personas salieron a la calle con banderas tricolores. ¿Cómo se llegó a eso?",
    respuesta: "El sistema de la <b>Restauración</b> llevaba años en crisis: conflictos sociales, la guerra de Marruecos y una dictadura militar apoyada por el rey. Cuando cayó el dictador, la monarquía quedó sin apoyos y se proclamó la <mark>Segunda República</mark>, que intentó modernizar el país con grandes reformas.",
  },
  bloques: [
    {
      html: `<h3>Alfonso XIII y la crisis de la Restauración</h3><p>Desde 1902 reinó <mark>Alfonso XIII</mark>. El turnismo se desgastaba y crecían los problemas: el <b>movimiento obrero</b> (CNT anarquista y UGT socialista), los <b>nacionalismos</b> catalán y vasco, y la impopular <b>guerra de Marruecos</b>. En la Semana Trágica de Barcelona (1909) hubo protestas contra el envío de soldados. La <b>crisis de 1917</b> juntó una protesta militar, una asamblea de parlamentarios y una huelga general. En 1921 el desastre de <b>Annual</b> en Marruecos costó miles de vidas.</p>`,
      svg: filas("Problemas de la Restauración a principios del siglo XX", [["Obreros", "huelgas, CNT y UGT", "var(--red)"], ["Regiones", "nacionalismo catalán y vasco", "var(--sun)"], ["Marruecos", "guerra impopular, Annual", "var(--leaf)"], ["Política", "turnismo y caciquismo", "var(--muted)"]]),
    },
    {
      html: `<h3>La dictadura de Primo de Rivera (1923-1930)</h3><p>En 1923 el general <mark>Miguel Primo de Rivera</mark> dio un golpe de Estado con el apoyo del rey. Suspendió la Constitución, prohibió partidos y censuró la prensa. Logró acabar con la guerra de Marruecos (desembarco de Alhucemas, 1925) e hizo obras públicas: carreteras, pantanos y la red telefónica. Pero la crisis económica de 1929 y la oposición de estudiantes, intelectuales y políticos le obligaron a dimitir en 1930.</p>`,
      svg: dos("Luces y sombras de la dictadura de Primo de Rivera", ["Logros", ["fin de la guerra", "de Marruecos", "obras públicas", "carreteras,", "pantanos"], "var(--leaf)"], ["Problemas", ["sin Constitución", "ni partidos", "censura", "deuda pública", "dimite en 1930"], "var(--red)"]),
    },
    {
      html: `<h3>La Segunda República y su Constitución</h3><p>El <b>14 de abril de 1931</b> se proclamó la <mark>Segunda República</mark>. La <b>Constitución de 1931</b> fue la más democrática hasta entonces: Estado laico, divorcio, autonomía para las regiones y <mark>voto femenino</mark>, defendido por Clara Campoamor. Las mujeres votaron por primera vez en las elecciones generales de 1933.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Urna con papeletas y el texto 1933: votan las mujeres">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="80" y="70" width="100" height="80" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="110" y="66" width="40" height="8" rx="3" fill="var(--ink)"/>
        <rect x="116" y="30" width="28" height="40" rx="3" fill="var(--card)" stroke="var(--bac)" stroke-width="2.5" transform="rotate(-8 130 50)"/>
        <path d="M122 46 l 6 6 l 10 -12" fill="none" stroke="var(--bac)" stroke-width="3" transform="rotate(-8 130 50)"/>
        <text x="130" y="116" text-anchor="middle" font-size="22" font-weight="700" fill="var(--bac)" ${D}>1933</text>
        <text x="130" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>primer voto de las mujeres</text>
      </svg>`,
    },
    {
      html: `<h3>Tres etapas de reformas y tensiones</h3><p>En el <b>bienio reformista</b> (1931-1933), con Azaña, se hicieron reformas agraria, educativa (miles de escuelas), militar y religiosa, y Cataluña tuvo Estatuto de autonomía. En el <b>bienio conservador</b> (1933-1935), con la CEDA y el Partido Radical, se frenaron esas reformas y estalló la revolución de Asturias (1934). En febrero de 1936 ganó el <mark>Frente Popular</mark>, una coalición de izquierdas. La polarización y la violencia crecieron hasta el golpe militar de julio de 1936.</p>`,
      svg: linea("Etapas de la Segunda República", [["1931", "proclamación|Constitución"], ["1933", "gana la|derecha"], ["1934", "revolución|de Asturias"], ["1936", "Frente Popular|y golpe"]], "var(--bac)"),
    },
  ],
  figura: {
    titulo: "De Alfonso XIII a la Guerra Civil",
    svg: figLinea("Línea del tiempo de 1902 a 1936", [[40, "1902", "reina Alfonso XIII", 1], [120, "1909", "Semana Trágica", 0], [200, "1917", "crisis de 1917", 1], [260, "1921", "Annual", 0], [320, "1923", "golpe de Primo de Rivera", 1], [460, "1931", "II República", 0], [560, "1933", "votan las mujeres", 1], [640, "1936", "Frente Popular", 0]], [[40, 320, "crisis de la Restauración", "var(--muted)"], [320, 450, "dictadura", "var(--ink)"], [460, 640, "", "var(--bac)"]]),
  },
  video: { id: "OZirgERQ2qc", titulo: "La Segunda República en 10 minutos", canal: "Memorias de Pez", vistas: 2042804, megusta: 48481, busqueda: "España primer tercio siglo XX segunda república resumen" },
  quiz: [
    { q: "¿Qué fue el desastre de Annual (1921)?", o: ["Una huelga general", "Una gran derrota del ejército español en Marruecos", "Unas elecciones fraudulentas"], a: 1, e: "Murieron miles de soldados y el escándalo debilitó al rey y al gobierno." },
    { q: "¿Quién dio el golpe de Estado de 1923?", o: ["Francisco Franco", "Miguel Primo de Rivera", "Manuel Azaña"], a: 1, e: "Primo de Rivera gobernó como dictador con el apoyo de Alfonso XIII hasta 1930." },
    { q: "¿Cuándo se proclamó la Segunda República?", o: ["14 de abril de 1931", "18 de julio de 1936", "6 de diciembre de 1978"], a: 0, e: "Tras las elecciones municipales del 12 de abril, en las que ganaron los republicanos en las ciudades." },
    { q: "¿Quién defendió el voto femenino en las Cortes?", o: ["Clara Campoamor", "Dolores Ibárruri", "Victoria Kent"], a: 0, e: "Clara Campoamor logró que la Constitución de 1931 reconociera el sufragio femenino." },
    { q: "El bienio reformista se caracterizó por…", o: ["frenar las reformas", "reformas agraria, educativa, militar y religiosa", "una dictadura militar"], a: 1, e: "El gobierno de Azaña quiso modernizar España con reformas profundas." },
  ],
  examen: [
    { q: "La crisis de 1917 juntó…", o: ["una protesta militar, una asamblea de parlamentarios y una huelga general", "una guerra con Francia y una epidemia", "la abdicación del rey y un golpe"], a: 0, e: "Tres desafíos simultáneos mostraron que el sistema de la Restauración estaba agotado." },
    { q: "¿Qué coalición ganó las elecciones de febrero de 1936?", o: ["La CEDA", "El Frente Popular", "La Unión Patriótica"], a: 1, e: "Fue una alianza de partidos de izquierda republicana, socialistas y comunistas." },
    { q: "La Constitución de 1931 definía el Estado como…", o: ["confesional católico", "laico", "monárquico"], a: 1, e: "Separó la Iglesia y el Estado, aprobó el divorcio y el matrimonio civil." },
  ],
  feynman: ["Los cuatro grandes problemas de la Restauración", "Qué hizo Primo de Rivera y por qué cayó", "Las principales novedades de la Constitución de 1931", "Las tres etapas de la Segunda República"],
  mapa: mapa("ESPAÑA 1902-1936", "var(--soc, #c2410c)", [
    ["Alfonso XIII", "1909 · 1917 · Annual", "var(--muted)"],
    ["Primo de Rivera", "dictadura 1923-1930", "var(--ink)"],
    ["II República", "Constitución 1931 · voto mujer", "var(--bac)"],
    ["Etapas", "reformas · conservador · F. Popular", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Semana Trágica", "1909, Barcelona: protesta contra el envío de reservistas a Marruecos."],
    ["Dictadura de Primo de Rivera", "1923-1930, con el apoyo de Alfonso XIII."],
    ["14 de abril de 1931", "Proclamación de la Segunda República."],
    ["Primeras elecciones generales con voto femenino", "Noviembre de 1933."],
    ["Frente Popular", "Coalición de izquierdas que ganó en febrero de 1936."],
  ],
  familias: ["Preguntad a los mayores si en la familia se recuerda alguna escuela construida en los años 30.", "Buscad juntos quién fue Clara Campoamor y si hay una calle con su nombre cerca.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: crisis de la Restauración, dictadura y Segunda República; conquista de derechos y memoria democrática (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Leer el debate Campoamor-Kent sobre el voto femenino (1931).", "Comparar artículos de la Constitución de 1876 y de 1931.", "Mapa de las misiones pedagógicas y escuelas creadas en 1931-1933."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Segunda República española, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Segunda_Rep%C3%BAblica_espa%C3%B1ola" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Relacionar la crisis de 1917 y la guerra de Marruecos con el fin de la Restauración", "Explicar las reformas y los conflictos de la Segunda República"],
  bloques: [
    { tras: "Alfonso XIII y la crisis", html: `<h3>La guerra de Marruecos y la Semana Trágica</h3><p>Tras perder las últimas colonias, España obtuvo un <b>protectorado en el norte de Marruecos</b> (1912). La guerra contra las tribus del Rif fue impopular porque los ricos podían librarse del servicio militar pagando una cuota. En <b>1909</b>, el embarque de reservistas, muchos padres de familia, provocó en Barcelona la <mark>Semana Trágica</mark>: huelga, barricadas y quema de conventos, duramente reprimidas. En <b>1921</b>, en el <mark>desastre de Annual</mark>, murieron unos 10.000 soldados españoles. Las críticas al ejército y al rey fueron enormes.</p>` },
    { tras: "Alfonso XIII y la crisis", html: `<h3>La crisis de 1917</h3><p>España fue neutral en la Primera Guerra Mundial y vendió mucho a los países en guerra, pero los precios subieron más que los salarios. En <b>1917</b> estalló una triple crisis: <b>militar</b> (las Juntas de Defensa de los oficiales protestaban por sueldos y ascensos), <b>política</b> (la Asamblea de Parlamentarios en Barcelona pedía cortes constituyentes) y <b>social</b> (huelga general de UGT y CNT). Después llegó el <mark>pistolerismo</mark> en Barcelona (1918-1923): pistoleros pagados por la patronal y por grupos anarquistas se mataban en la calle.</p>` },
    { tras: "La dictadura de Primo de Rivera", html: `<h3>Qué hizo la dictadura</h3><p>Con el apoyo de Alfonso XIII, el general <b>Miguel Primo de Rivera</b> suspendió la Constitución, disolvió las Cortes y prohibió los partidos. Logró acabar con la guerra de Marruecos tras el <b>desembarco de Alhucemas</b> (1925), en colaboración con Francia. Impulsó grandes <b>obras públicas</b> (carreteras, pantanos, las Confederaciones Hidrográficas) y creó monopolios como CAMPSA y Telefónica. La crisis económica de 1929 y la oposición de estudiantes, intelectuales y republicanos le hicieron dimitir en <mark>1930</mark>. El rey quedó desprestigiado por haberle apoyado.</p>`, video: { id: "D21pudizOm0", titulo: "Dictadura de Primo de Rivera (1923-1930)", canal: "Probando probando", vistas: 303131, megusta: 0 } },
    { tras: "La Segunda República y su Constitución", html: `<h3>La Constitución de 1931</h3>${tabla(["Aspecto", "Qué establecía"], [["Estado", "república democrática «de trabajadores de toda clase»"], ["Sufragio", "universal: por primera vez votan las mujeres (desde 1933)"], ["Religión", "Estado laico; separación Iglesia-Estado; matrimonio civil y divorcio"], ["Territorio", "Estado integral que permitía autonomías (Cataluña, 1932)"], ["Derechos", "amplios derechos y libertades; posibilidad de expropiar tierras con indemnización"]])}<p>El voto femenino se aprobó gracias a la defensa de la diputada <mark>Clara Campoamor</mark>.</p>` },
    { tras: "Tres etapas de reformas", html: `<h3>Las grandes reformas</h3><p>El primer gobierno, de republicanos de izquierda y socialistas con <b>Manuel Azaña</b>, aprobó una <mark>reforma agraria</mark> (1932) para dar tierra a los jornaleros de los latifundios del sur, aunque avanzó muy despacio. La <b>reforma militar</b> redujo el número de oficiales. La <b>reforma educativa</b> construyó miles de escuelas y llevó la cultura a los pueblos con las Misiones Pedagógicas. El <b>Estatuto de Cataluña</b> (1932) dio autonomía a esa región. Estas reformas ilusionaron a muchos y enfadaron a terratenientes, militares y parte de la Iglesia.</p>` },
    { tras: "Tres etapas de reformas", html: `<h3>Un país dividido</h3><p>Entre 1933 y 1935 gobernaron los partidos de centro y derecha (Partido Radical y <b>CEDA</b>), que frenaron las reformas. En <b>octubre de 1934</b> la entrada de la CEDA en el Gobierno provocó una huelga revolucionaria que en <mark>Asturias</mark> fue una insurrección obrera, aplastada por el ejército. En febrero de <b>1936</b> ganó el <b>Frente Popular</b>, una coalición de izquierdas. La violencia política creció en las calles, con asesinatos por ambos lados, y un grupo de militares preparó un golpe de Estado.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica por qué la dictadura de Primo de Rivera arrastró a la monarquía.", pasos: ["Alfonso XIII aceptó el golpe de 1923 y la dictadura.", "Cuando la dictadura fracasó, muchos culparon también al rey.", "En las elecciones municipales de abril de 1931 ganaron los republicanos en las ciudades.", "El rey se marchó y se proclamó la República el 14 de abril."], resultado: "Al apoyar una dictadura, el rey perdió la legitimidad de la monarquía constitucional." },
    { enunciado: "Ordena: Annual, Semana Trágica, proclamación de la República, golpe de Primo de Rivera, revolución de Asturias.", pasos: ["Semana Trágica: 1909.", "Annual: 1921.", "Golpe de Primo de Rivera: 1923.", "República: 1931.", "Asturias: 1934."], resultado: "1909 → 1921 → 1923 → 1931 → 1934." },
    { enunciado: "¿Por qué la reforma agraria creó tantos enemigos y tantas frustraciones?", pasos: ["Los terratenientes se oponían a perder tierras.", "Los jornaleros esperaban tierra rápido, pero el reparto fue lento y escaso.", "Había poco dinero para indemnizar."], resultado: "Molestó a los propietarios y decepcionó a los campesinos, lo que aumentó la tensión social." },
  ],
  errores: [
    "Pensar que la Segunda República llegó por una revolución violenta: llegó tras unas elecciones municipales.",
    "Creer que las mujeres votaron en España antes de 1933.",
    "Confundir la Semana Trágica (1909) con el desastre de Annual (1921).",
    "Pensar que Primo de Rivera gobernó contra el rey: Alfonso XIII lo apoyó.",
    "Decir que la República solo tuvo gobiernos de izquierdas: entre 1933 y 1935 gobernó el centro-derecha.",
  ],
  ejercicios: [
    { q: "¿Qué fue la Semana Trágica?", sol: "La revuelta de Barcelona en 1909 contra el embarque de reservistas a Marruecos, duramente reprimida." },
    { q: "¿Qué ocurrió en Annual en 1921?", sol: "Una gran derrota del ejército español en Marruecos en la que murieron unos 10.000 soldados." },
    { q: "Cita los tres aspectos de la crisis de 1917.", sol: "Militar (Juntas de Defensa), política (Asamblea de Parlamentarios) y social (huelga general)." },
    { q: "¿Cómo terminó la guerra de Marruecos?", sol: "Con el desembarco de Alhucemas (1925), en colaboración con Francia, y la rendición de Abd el-Krim." },
    { q: "¿Por qué cayó Primo de Rivera?", sol: "Por la crisis económica de 1929, la oposición de estudiantes, intelectuales y políticos, y la pérdida del apoyo del rey y del ejército." },
    { q: "¿Cómo se proclamó la Segunda República?", sol: "Tras ganar los republicanos las elecciones municipales en las ciudades el 12 de abril de 1931; el 14 se proclamó la República y el rey se exilió." },
    { q: "Cita tres novedades de la Constitución de 1931.", sol: "Voto de la mujer, Estado laico y posibilidad de autonomías regionales." },
    { q: "¿Quién fue Clara Campoamor?", sol: "Diputada que defendió en las Cortes el voto femenino, aprobado en 1931." },
    { q: "¿Qué fueron las Misiones Pedagógicas?", sol: "Un proyecto de la República que llevaba bibliotecas, cine, teatro y música a los pueblos." },
    { q: "¿Qué era el Frente Popular?", sol: "La coalición de partidos de izquierda que ganó las elecciones de febrero de 1936." },
  ],
  quiz: [
    { q: "La Semana Trágica ocurrió en…", o: ["Barcelona, 1909", "Madrid, 1917", "Asturias, 1934"], a: 0, e: "Por el embarque de reservistas a Marruecos." },
    { q: "El desembarco de Alhucemas fue en…", o: ["1921", "1925", "1931"], a: 1, e: "Puso fin a la guerra del Rif." },
    { q: "La Segunda República se proclamó el…", o: ["14 de abril de 1931", "18 de julio de 1936", "6 de diciembre de 1978"], a: 0, e: "Tras las elecciones municipales." },
    { q: "La CEDA era un partido…", o: ["de derechas", "anarquista", "comunista"], a: 0, e: "Su líder era Gil Robles." },
    { q: "La revolución de 1934 fue más fuerte en…", o: ["Asturias", "Valencia", "Galicia"], a: 0, e: "Los mineros se levantaron y el ejército la aplastó." },
  ],
  tarjetas: [
    ["Annual (1921)", "Gran derrota española en Marruecos."],
    ["Constitución de 1931", "Voto femenino, Estado laico y autonomías."],
    ["Frente Popular", "Coalición de izquierdas ganadora en febrero de 1936."],
  ],
});
