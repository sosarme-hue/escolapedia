// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "El conocimiento y la verdad",
  minutos: 60,
  objetivos: ["Distinguir creencia, opinión y conocimiento", "Explicar las fuentes del conocimiento según racionalistas y empiristas", "Comparar las principales teorías de la verdad", "Aplicar criterios para valorar información y detectar desinformación"],
  claves: ["conocimiento", "creencia", "verdad", "razón", "experiencia", "escepticismo"],
  pregunta: {
    texto: "Ves un vídeo en el que un político dice algo escandaloso. Parece real, pero existen las imágenes creadas con inteligencia artificial. ¿Cómo puedes saber si es verdad?",
    respuesta: "No basta con <b>creerlo</b>: para <mark>saber</mark> algo necesitas razones o pruebas que lo justifiquen. La teoría del conocimiento estudia de dónde vienen esas razones, qué es la verdad y hasta dónde podemos estar seguros.",
  },
  bloques: [
    {
      html: `<h3>Creer, opinar y saber</h3><p>No todo lo que pensamos tiene el mismo valor. Una <b>creencia</b> es algo que aceptamos como verdadero, aunque no tengamos pruebas. Una <b>opinión</b> es una creencia que reconocemos insegura («creo que mañana lloverá»). El <mark>conocimiento</mark> exige más: según una definición clásica que viene de Platón, conocer es tener una <b>creencia verdadera y justificada</b>. Si acierto el resultado de un partido por pura suerte, mi creencia era verdadera, pero no lo <i>sabía</i>: me faltaba justificación.</p>`,
      svg: filas("Grados de seguridad: de la ignorancia al conocimiento", [["Saber", "creencia verdadera y justificada", "var(--leaf)"], ["Creencia", "la acepto, sin pruebas", "var(--water)"], ["Opinión", "la reconozco insegura", "var(--sun)"], ["Ignorancia", "no sé nada del tema", "var(--muted)"]]),
    },
    {
      html: `<h3>Tipos de conocimiento</h3><p>Hay distintas formas de saber. El <b>saber qué</b> (que Madrid es la capital de España) es teórico; el <b>saber cómo</b> (montar en bici) es práctico. También se distingue el <mark>conocimiento vulgar</mark>, que aprendemos de la experiencia diaria sin método, del <mark>conocimiento científico</mark>, que es sistemático, se apoya en pruebas y se puede comprobar, y del <b>filosófico</b>, que reflexiona sobre los fundamentos de todos los demás.</p>`,
    },
    {
      html: `<h3>Razón o experiencia: ¿de dónde viene el conocimiento?</h3><p>En la Edad Moderna hubo un gran debate. Los <b>racionalistas</b>, como <b>Descartes</b>, pensaban que la fuente segura es la <mark>razón</mark>: hay ideas innatas y verdades que se descubren pensando, como las de las matemáticas. Los <b>empiristas</b>, como <b>Locke</b> y <b>Hume</b>, defendían que la mente al nacer es una «hoja en blanco» y que todo conocimiento procede de la <mark>experiencia</mark> de los sentidos. <b>Kant</b> intentó unir ambas posturas: el conocimiento empieza con la experiencia, pero la razón pone el orden (espacio, tiempo, causa).</p>`,
      svg: dos("Racionalismo frente a empirismo", ["Racionalismo", ["Descartes", "la razón", "ideas innatas", "matemáticas", "deducción"], "var(--pen)"], ["Empirismo", ["Locke, Hume", "los sentidos", "hoja en blanco", "ciencias", "inducción"], "var(--leaf)"]),
      video: { id: "49b0jhosP08", titulo: "Filosofía moderna (Racionalismo y Empirismo)", canal: "El Nictálope", vistas: 443272, megusta: 0 },
    },
    {
      html: `<h3>La duda de Descartes</h3><p>Descartes quería encontrar una verdad absolutamente segura. Para ello aplicó la <mark>duda metódica</mark>: dudar de todo lo que pudiera ser falso. Los sentidos a veces engañan (un palo parece torcido en el agua); podría estar soñando; incluso un «genio maligno» podría engañarme en las matemáticas. Pero hay algo de lo que no puedo dudar: si dudo, estoy pensando, y si pienso, existo. De ahí su famosa frase: <b>«Pienso, luego existo»</b> (<i>cogito, ergo sum</i>).</p>`,
      svg: flujo("Pasos de la duda de Descartes", ["sentidos|engañan", "¿estoy|soñando?", "¿genio|maligno?", "dudo =|pienso", "pienso:|existo"], "var(--pen)"),
    },
    {
      html: `<h3>¿Qué es la verdad?</h3><p>Decimos que una afirmación es verdadera, pero ¿qué significa eso? Hay varias teorías:</p>${tabla(["Teoría", "Una afirmación es verdadera si…", "Ejemplo"], [["Correspondencia", "coincide con los hechos", "«Llueve» es verdad si de verdad llueve"], ["Coherencia", "encaja sin contradicción con lo que ya sabemos", "un teorema que se deduce de otros"], ["Pragmatista", "funciona y resulta útil", "una teoría médica que cura"], ["Consenso", "la aceptarían todos tras un diálogo libre", "un acuerdo científico"]])}<p>La teoría más intuitiva es la de la <mark>correspondencia</mark>, que ya defendía Aristóteles: decir de lo que es que es, y de lo que no es que no es.</p>`,
    },
    {
      html: `<h3>Escépticos y dogmáticos</h3><p>Ante la pregunta «¿podemos conocer la verdad?» hay varias actitudes. El <b>dogmatismo</b> cree que sí y sin problemas, y a veces no admite crítica. El <b>escepticismo</b> radical piensa que no podemos estar seguros de nada (pero ¿está seguro de eso?). El <b>relativismo</b> afirma que la verdad depende de cada persona o cultura. Entre ellos está el <mark>criticismo</mark>: sí podemos conocer, pero revisando siempre nuestras razones. Es la actitud de la ciencia, que acepta sus teorías mientras no aparezcan pruebas en contra.</p>`,
      svg: filas("Actitudes ante la verdad", [["Dogmatismo", "seguro y sin crítica", "var(--red)"], ["Escepticismo", "no podemos saber nada", "var(--muted)"], ["Relativismo", "depende de cada uno", "var(--sun)"], ["Criticismo", "sí, pero revisando", "var(--leaf)"]]),
    },
    {
      html: `<h3>Los límites del conocimiento</h3><p>Conocemos con los <b>sentidos</b>, que tienen límites (no vemos los rayos ultravioleta) y pueden engañarse (ilusiones ópticas). También influyen los <b>sesgos</b>: el <mark>sesgo de confirmación</mark> nos hace buscar solo lo que da la razón a lo que ya creemos. Y existe lo que Platón llamaba la <b>doxa</b>, la opinión basada en apariencias, frente a la <b>episteme</b>, el saber fundado. Ser consciente de estos límites no nos hace ignorantes: nos hace más prudentes.</p>`,
    },
    {
      html: `<h3>Verdad en la era digital</h3><p>Hoy la información circula muy deprisa y no toda es fiable. Los <b>bulos</b> o <i>fake news</i> se difunden porque emocionan y confirman prejuicios. Algunos criterios para no caer: <mark>comprobar la fuente</mark> (¿quién lo dice?, ¿tiene interés?), buscar si otros medios fiables lo confirman, mirar la fecha, distinguir hechos de opiniones y desconfiar de titulares exagerados. Los verificadores de datos, como Maldita o Newtral en España, hacen este trabajo de forma profesional.</p>`,
      video: { id: "DCxry5TPO1U", titulo: "¿Qué es la verdad? Todo tiene un porqué", canal: "Canal Siete", vistas: 194061, megusta: 0 },
    },
  ],
  figura: {
    titulo: "Del dato a la verdad: cómo comprobar una información",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Cuatro preguntas para comprobar una información: quién lo dice, qué pruebas aporta, quién más lo confirma y si es un hecho o una opinión">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["¿Quién lo dice?", "fuente e intereses", "var(--pen)"], ["¿Qué pruebas?", "datos, documentos", "var(--leaf)"], ["¿Quién más?", "otras fuentes fiables", "var(--sun)"], ["¿Es un hecho?", "¿o es opinión?", "var(--red)"]].map(([t, d, c], i) => `<rect x="${20 + i * 162}" y="40" width="150" height="120" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><circle cx="${95 + i * 162}" cy="40" r="16" fill="${c}"/><text x="${95 + i * 162}" y="46" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" ${D}>${i + 1}</text><text x="${95 + i * 162}" y="92" text-anchor="middle" font-size="15" font-weight="700" fill="${c}" ${F}>${t}</text><text x="${95 + i * 162}" y="122" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "wnpGmg8a760", titulo: "David Hume: aproximación a su teoría del conocimiento", canal: "Educatina", vistas: 383229, megusta: 0, busqueda: "teoría del conocimiento racionalismo empirismo" },
  ejemplos: [
    { enunciado: "Lucía dice: «Sé que el autobús llega a las 8:10 porque lo pone en el horario y llevo un mes cogiéndolo a esa hora». ¿Es conocimiento según la definición clásica?", pasos: ["¿Lo cree? Sí.", "¿Está justificado? Sí: el horario y la experiencia de un mes.", "¿Es verdad? Si el autobús llega a esa hora, sí."], resultado: "Es una creencia verdadera y justificada: es conocimiento." },
    { enunciado: "¿Qué diría un racionalista y qué diría un empirista sobre cómo sabemos que «el todo es mayor que la parte»?", pasos: ["Racionalista: lo sabemos por la razón, sin necesidad de comprobarlo; es evidente al pensarlo.", "Empirista: lo aprendimos al ver objetos y sus partes muchas veces.", "Kant: la experiencia lo despierta, pero la razón le da su carácter necesario."], resultado: "Se apoyan en fuentes distintas: razón frente a experiencia." },
    { enunciado: "Un mensaje de WhatsApp dice: «¡Urgente! Beber agua caliente cada 15 minutos mata el virus». Aplica los criterios de verificación.", pasos: ["Fuente: anónima, sin nombre de médico ni institución.", "Pruebas: ninguna; no cita estudios.", "Confirmación: ningún organismo sanitario lo dice.", "Tono: alarmista y con prisa por reenviar."], resultado: "Es muy probablemente un bulo; no debe difundirse." },
  ],
  errores: [
    "Confundir creer con saber: el conocimiento necesita justificación.",
    "Pensar que, si algo lo dice mucha gente, es verdad (eso no lo justifica).",
    "Creer que los racionalistas rechazaban toda experiencia: decían que la razón es la fuente más segura.",
    "Entender el «pienso, luego existo» como un razonamiento sobre el cuerpo: Descartes solo asegura la existencia del yo que piensa.",
    "Pensar que el relativismo es tolerancia: decir que todo es verdad para alguien impide corregir errores.",
  ],
  ejercicios: [
    { q: "Explica la definición clásica de conocimiento con un ejemplo propio.", sol: "Creencia verdadera y justificada. Ejemplo: sé que el agua hierve a 100 °C a nivel del mar porque lo he comprobado y lo dicen los libros de física." },
    { q: "¿Qué diferencia hay entre doxa y episteme?", sol: "Doxa es la opinión basada en apariencias; episteme es el conocimiento fundado en razones." },
    { q: "Resume la postura racionalista y la empirista.", sol: "Racionalismo: la razón es la fuente principal del conocimiento y existen ideas innatas. Empirismo: todo conocimiento procede de la experiencia de los sentidos." },
    { q: "¿Por qué Descartes empezó dudando de todo?", sol: "Para encontrar una verdad de la que fuera imposible dudar y construir sobre ella el conocimiento." },
    { q: "¿Qué significa «pienso, luego existo»?", sol: "Aunque dude de todo, no puedo dudar de que estoy pensando, y para pensar tengo que existir." },
    { q: "Explica la teoría de la verdad como correspondencia.", sol: "Una afirmación es verdadera si coincide con los hechos. «La nieve es blanca» es verdad si la nieve es blanca." },
    { q: "Pon un ejemplo de sesgo de confirmación.", sol: "Un aficionado que solo recuerda los errores del árbitro contra su equipo y olvida los que le favorecen." },
    { q: "Distingue escepticismo, dogmatismo y criticismo.", sol: "Escepticismo: no podemos conocer con seguridad. Dogmatismo: conocemos sin necesidad de revisar. Criticismo: podemos conocer, pero revisando nuestras razones." },
    { q: "Escribe cuatro preguntas para comprobar una noticia antes de compartirla.", sol: "¿Quién lo dice? ¿Qué pruebas aporta? ¿Lo confirman otros medios fiables? ¿Es un hecho o una opinión? (también: ¿de qué fecha es?)." },
    { q: "¿Por qué la ciencia es una forma de criticismo?", sol: "Porque acepta sus teorías mientras resisten las pruebas y está dispuesta a corregirlas si aparecen datos en contra." },
  ],
  quiz: [
    { q: "Conocer es tener una creencia…", o: ["verdadera y justificada", "muy firme", "compartida por todos"], a: 0, e: "Definición clásica que viene de Platón." },
    { q: "«Pienso, luego existo» es de…", o: ["Hume", "Descartes", "Platón"], a: 1, e: "Cogito, ergo sum." },
    { q: "Para los empiristas, la mente al nacer es…", o: ["una hoja en blanco", "llena de ideas innatas", "inútil"], a: 0, e: "Todo viene de la experiencia." },
    { q: "La teoría de la verdad como correspondencia dice que es verdad lo que…", o: ["coincide con los hechos", "es útil", "dice la mayoría"], a: 0, e: "La defendió ya Aristóteles." },
    { q: "Quien piensa que no podemos estar seguros de nada es…", o: ["dogmático", "escéptico", "racionalista"], a: 1, e: "Del griego sképsis, examen." },
    { q: "La doxa es…", o: ["la opinión", "la ciencia", "la lógica"], a: 0, e: "Saber basado en apariencias." },
    { q: "Kant pensaba que el conocimiento…", o: ["solo viene de la razón", "empieza con la experiencia pero lo ordena la razón", "es imposible"], a: 1, e: "Intentó unir racionalismo y empirismo." },
    { q: "Buscar solo datos que nos dan la razón es…", o: ["sesgo de confirmación", "duda metódica", "empirismo"], a: 0, e: "Un límite habitual del conocimiento." },
    { q: "Saber montar en bici es un saber…", o: ["teórico", "práctico", "metafísico"], a: 1, e: "Es un «saber cómo»." },
    { q: "El primer paso para verificar una noticia es…", o: ["reenviarla", "comprobar la fuente", "leer solo el titular"], a: 1, e: "¿Quién lo dice y con qué interés?" },
  ],
  examen: [
    { q: "Si acierto algo por casualidad, ¿lo sabía?", o: ["Sí", "No, me faltaba justificación", "Solo si es importante"], a: 1, e: "Creencia verdadera pero sin justificar." },
    { q: "El «genio maligno» de Descartes sirve para…", o: ["dudar incluso de las matemáticas", "demostrar que existe Dios", "explicar los sueños"], a: 0, e: "Lleva la duda al extremo." },
    { q: "La teoría pragmatista de la verdad dice que es verdad lo que…", o: ["funciona", "coincide con los hechos", "es coherente"], a: 0, e: "La verdad se mide por sus resultados." },
  ],
  feynman: ["La diferencia entre creer, opinar y saber", "Qué defendían racionalistas, empiristas y Kant", "Las teorías de la verdad con un ejemplo", "Cómo comprobar si una información es fiable"],
  mapa: mapa("CONOCIMIENTO", "var(--pen)", [
    ["Qué es", "creencia verdadera y justificada", "var(--ink)"],
    ["Fuentes", "razón · experiencia", "var(--leaf)"],
    ["Verdad", "correspondencia · coherencia", "var(--sun)"],
    ["Límites", "sentidos · sesgos · bulos", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Conocimiento", "Creencia verdadera y justificada."],
    ["Racionalismo", "La razón es la fuente segura del conocimiento (Descartes)."],
    ["Empirismo", "Todo conocimiento procede de la experiencia (Locke, Hume)."],
    ["Duda metódica", "Dudar de todo para encontrar una verdad indudable."],
    ["Verdad como correspondencia", "Una afirmación es verdadera si coincide con los hechos."],
    ["Escepticismo", "Postura que niega que podamos conocer con seguridad."],
    ["Sesgo de confirmación", "Tendencia a buscar solo lo que confirma lo que ya creemos."],
    ["Doxa / episteme", "Opinión basada en apariencias / conocimiento fundado."],
  ],
  familias: ["Elegid una noticia viral y comprobad juntos su fuente y si otros medios la confirman.", "Buscad ilusiones ópticas y hablad de por qué los sentidos pueden engañar.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): el problema del conocimiento, racionalismo y empirismo, teorías de la verdad y análisis crítico de la información (marco del RD 217/2022).",
    ideas: ["Taller de verificación de bulos con noticias reales.", "Debate por equipos: Descartes contra Hume.", "Galería de ilusiones ópticas para discutir los límites de los sentidos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Epistemología, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Epistemolog%C3%ADa" },
  ],
  revisado: "2026-11-12",
};
