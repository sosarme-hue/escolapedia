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
