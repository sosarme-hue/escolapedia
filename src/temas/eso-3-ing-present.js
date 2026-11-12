// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Present simple and continuous",
  minutos: 35,
  objetivos: ["Formar el present simple y el present continuous en afirmativa, negativa e interrogativa", "Elegir entre los dos según hablemos de rutinas o de lo que pasa ahora", "Reconocer los verbos de estado y los adverbios de frecuencia"],
  claves: ["present simple", "present continuous", "-s / -es", "do / does", "adverbs of frequency", "stative verbs"],
  pregunta: {
    texto: "Tu amiga te escribe: «What do you do?» y luego «What are you doing?». ¿Te está preguntando lo mismo dos veces?",
    respuesta: "No. «What <b>do</b> you do?» pregunta a qué te dedicas habitualmente (soy estudiante). «What <b>are</b> you <b>doing</b>?» pregunta qué haces <mark>ahora mismo</mark> (estoy viendo una serie). En inglés el tiempo verbal distingue lo habitual de lo que está pasando.",
  },
  bloques: [
    {
      html: `<h3>Present simple: forma</h3><p>Se usa el verbo en su forma base, pero en tercera persona del singular (<i>he, she, it</i>) se añade <mark>-s</mark>: «She <b>plays</b> the guitar». Se añade <b>-es</b> a los verbos que acaban en -o, -s, -sh, -ch, -x (goes, watches) y la -y tras consonante cambia a <b>-ies</b> (study → studies). Para la negativa y la pregunta usamos el auxiliar <b>do / does</b>, y el verbo vuelve a su forma base.</p>`,
      svg: L.filas("Present simple en tercera persona: afirmativa, negativa e interrogativa", [
        ["+", "He watches TV.", "var(--leaf)"], ["−", "He doesn't watch TV.", "var(--red)"], ["?", "Does he watch TV?", "var(--pen)"],
      ], "present simple · he / she / it"),
    },
    {
      html: `<h3>Present simple: usos</h3><p>Lo usamos para <b>rutinas y hábitos</b> («I <i>get up</i> at 7:30»), <b>hechos permanentes</b> («My cousin <i>lives</i> in Bristol»), <b>verdades generales</b> («The sun <i>rises</i> in the east») y <b>horarios</b> («The bus <i>leaves</i> at 8»). Suele ir con <mark>adverbios de frecuencia</mark> y expresiones como <i>every day, on Mondays, twice a week</i>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de los adverbios de frecuencia: always 100 %, usually, often, sometimes, hardly ever y never 0 %">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700">
        ${[["always", 100, "var(--leaf)"], ["usually", 85, "var(--leaf)"], ["often", 65, "var(--pen)"], ["sometimes", 45, "var(--pen)"], ["hardly ever", 15, "var(--red)"], ["never", 0, "var(--red)"]].map(([w, p, c], i) => `<text x="16" y="${30 + i * 25}" font-size="13" fill="var(--ink)">${w}</text><rect x="104" y="${19 + i * 25}" width="${Math.max(p * 1.1, 3)}" height="14" rx="4" fill="${c}"/><text x="${110 + Math.max(p * 1.1, 3)}" y="${30 + i * 25}" font-size="11" fill="var(--muted)">${p} %</text>`).join("")}
        </g></svg>`,
    },
    {
      html: `<h3>Present continuous: forma</h3><p>Se forma con <mark>am / is / are + verbo-ing</mark>: «I'm reading», «They're playing». La negativa añade <b>not</b> («She isn't sleeping») y en la pregunta el verbo <i>be</i> va delante del sujeto («Are you listening?»). Ortografía: si el verbo acaba en -e muda, se quita (make → making); si acaba en consonante-vocal-consonante con el acento al final, se dobla la consonante (run → running, swim → swimming); -ie cambia a -y (lie → lying).</p>`,
      svg: L.frase("Present continuous: They are playing football now", [
        ["They", "sujeto", "var(--ink)"], ["are", "be", "var(--pen)"], ["playing", "verbo-ing", "var(--red)"], ["football", "", "var(--line)"], ["now.", "ahora", "var(--leaf)"],
      ], "am / is / are + -ing"),
    },
    {
      html: `<h3>Present continuous: usos</h3><p>Lo usamos para acciones que están ocurriendo <mark>en este momento</mark> («Shh! The baby <i>is sleeping</i>»), situaciones <b>temporales</b> («I'<i>m staying</i> with my grandparents this week»), cambios en curso («The climate <i>is getting</i> warmer») y quejas con <i>always</i> («You're <i>always losing</i> your keys!»). Expresiones típicas: <i>now, right now, at the moment, today, this week, Look!, Listen!</i></p>`,
      svg: L.filas("Expresiones que acompañan a cada presente", [
        ["Simple", "every day · usually · on Fridays", "var(--leaf)"], ["Continuous", "now · at the moment · Look!", "var(--red)"],
      ], "¿qué expresión de tiempo hay?"),
    },
    {
      html: `<h3>Verbos de estado</h3><p>Algunos verbos no expresan acciones, sino <b>estados</b>: sentimientos, pensamientos, posesión o percepciones. Normalmente <mark>no van en continuous</mark> aunque hablemos de ahora: «I <b>want</b> a sandwich» (no «I'm wanting»), «Do you <b>understand</b>?». Los más comunes: <i>like, love, hate, prefer, want, need, know, understand, believe, remember, mean, own, belong, seem</i>.</p>`,
      svg: L.filas("Verbos de estado agrupados", [
        ["Gustos", "like · love · hate · prefer", "var(--red)"], ["Mente", "know · think · remember", "var(--pen)"],
        ["Deseo", "want · need · wish", "var(--leaf)"], ["Posesión", "have · own · belong", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "¿Simple o continuous?",
    svg: L.columnas("Comparación del present simple y el present continuous", [
      ["rutinas · hechos · horarios", "SIMPLE", ["She walks to school", "every day."], "var(--leaf)"],
      ["ahora · temporal · cambios", "CONTINUOUS", ["She's taking the bus", "today."], "var(--red)"],
      ["estados (casi siempre simple)", "STATIVE", ["I know her.", "I like it."], "var(--pen)"],
    ]),
  },
  video: { id: "VP8MRGAjgAs", titulo: "Presente simple vs. presente continuo", canal: "AMES836", vistas: 2325525, megusta: 0, busqueda: "present simple vs present continuous" },
  quiz: [
    { q: "«My brother ___ in a bank.»", o: ["work", "works", "is work"], a: 1, e: "Tercera persona del singular: -s." },
    { q: "«___ your sister speak French?»", o: ["Do", "Does", "Is"], a: 1, e: "Pregunta en present simple con she: does." },
    { q: "«Look! It ___.»", o: ["snows", "is snowing", "snowing"], a: 1, e: "Ocurre ahora: present continuous." },
    { q: "La forma -ing de «swim» es…", o: ["swiming", "swimming", "swimmming"], a: 1, e: "Consonante-vocal-consonante: se dobla la m." },
    { q: "«I ___ what you mean.»", o: ["understand", "am understanding", "understanding"], a: 0, e: "Understand es un verbo de estado." },
  ],
  examen: [
    { q: "«We ___ to the cinema on Saturdays.» (siempre)", o: ["usually go", "are usually going", "go usually"], a: 0, e: "Rutina: present simple; el adverbio va delante del verbo." },
    { q: "«This week I ___ at my aunt's house.»", o: ["stay", "am staying", "stays"], a: 1, e: "Situación temporal." },
    { q: "«She ___ TV right now.»", o: ["doesn't watch", "isn't watching", "don't watch"], a: 1, e: "Right now: continuous negativo." },
  ],
  feynman: ["Cuándo se añade -s, -es o -ies en present simple", "Para qué sirve cada presente", "Dónde se colocan los adverbios de frecuencia", "Qué son los verbos de estado"],
  mapa: mapa("PRESENT TENSES", "var(--eso)", [
    ["Simple", "routines · facts · timetables", "var(--leaf)"],
    ["Continuous", "now · temporary · changes", "var(--red)"],
    ["Frequency", "always · often · never", "var(--pen)"],
    ["Stative", "like · know · want", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["Tercera persona en present simple", "Se añade -s, -es o -ies: plays, watches, studies."],
    ["Auxiliar del present simple", "do / does en negativas y preguntas: Does she like it?"],
    ["Present continuous", "am / is / are + verbo-ing: I'm reading."],
    ["Uso del present continuous", "Lo que pasa ahora y situaciones temporales."],
    ["Verbos de estado", "like, want, know, need… casi nunca van en continuous."],
  ],
  familias: ["Pedidle que os describa en inglés lo que hace cada miembro de la familia en este momento.", "Que escriba cinco rutinas de su semana con adverbios de frecuencia y las lea en voz alta.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: presente simple y continuo, adverbios de frecuencia y verbos de estado para describir rutinas y acciones en curso (RD 217/2022, Lengua Extranjera 3º; nivel A2+ del MCER).",
    ideas: ["«Freeze frame»: un alumno representa una acción y la clase la describe en continuous.", "Encuesta de hábitos con adverbios de frecuencia y gráfico de la clase.", "Describir fotos de un día normal frente a un día especial."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: present simple and present continuous", url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/present-simple-and-present-continuous" },
    { t: "Cambridge Dictionary: present continuous", url: "https://dictionary.cambridge.org/grammar/british-grammar/present-continuous" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Colocar bien los adverbios de frecuencia y formar respuestas cortas", "Distinguir verbos que cambian de significado en continuous"],
  bloques: [
    { tras: "Present simple: usos", html: `<h3>Dónde van los adverbios de frecuencia</h3><p>Los adverbios de frecuencia (<i>always, usually, often, sometimes, hardly ever, never</i>) van <mark>delante del verbo principal</mark>: «I <b>often</b> play tennis», «She <b>never</b> eats meat». Pero van <b>detrás del verbo be</b>: «He is <b>always</b> late», «We're <b>never</b> bored». En preguntas van tras el sujeto: «Do you <b>usually</b> walk to school?». <i>Sometimes</i> también puede ir al principio de la frase: «<b>Sometimes</b> I cook dinner». Las expresiones más largas, como <i>every day, once a week, twice a month</i>, suelen ir al final: «I go swimming <b>twice a week</b>». Para preguntar por la frecuencia usamos <b>How often…?</b>: «How often do you go to the gym?» — «Three times a week».</p>` },
    { tras: "Present continuous: forma", html: `<h3>Respuestas cortas</h3><p>En inglés es muy natural contestar a las preguntas de sí o no con una <b>respuesta corta</b> que repite el auxiliar, no solo con <i>yes</i> o <i>no</i>:</p>${L.tb(["Pregunta", "Sí", "No"], [["Do you like pizza?", "Yes, I <b>do</b>.", "No, I <b>don't</b>."], ["Does he play chess?", "Yes, he <b>does</b>.", "No, he <b>doesn't</b>."], ["Are you studying?", "Yes, I <b>am</b>.", "No, I'<b>m not</b>."], ["Is it raining?", "Yes, it <b>is</b>.", "No, it <b>isn't</b>."]])}<p>Fíjate: en la respuesta afirmativa corta no se contrae (<i>Yes, I am</i>, nunca «Yes, I'm»).</p>` },
    { tras: "Verbos de estado", html: `<h3>Verbos que cambian de significado</h3><p>Algunos verbos pueden ser de estado o de acción según su significado. Con significado de estado van en simple; con significado de acción pueden ir en continuous:</p>${L.tb(["Verbo", "Estado (simple)", "Acción (continuous)"], [["think", "I <b>think</b> it's a good idea. (opinión)", "I'<b>m thinking</b> about the exam. (pensar en)"], ["have", "She <b>has</b> two cats. (poseer)", "She'<b>s having</b> lunch. (comer, tomar)"], ["see", "I <b>see</b> what you mean. (entender)", "I'<b>m seeing</b> the dentist today. (quedar con)"], ["taste", "This soup <b>tastes</b> great. (saber a)", "He'<b>s tasting</b> the soup. (probar)"]])}` },
    { tras: "Verbos de estado", html: `<h3>Los dos presentes en un texto</h3><p>En las descripciones, los correos y los <i>blogs</i> se mezclan los dos presentes. Lee este ejemplo: «Hi Sam! I <b>live</b> in a small town near Valencia and I <b>go</b> to a big secondary school. I usually <b>walk</b> to school, but this month I'<b>m taking</b> the bus because my leg <b>hurts</b>. Right now I'<b>m sitting</b> in the library and I'<b>m writing</b> to you. My friends <b>are playing</b> basketball outside. I <b>don't like</b> basketball much; I <b>prefer</b> swimming». Observa que los hechos permanentes y las rutinas van en <mark>simple</mark>; lo que ocurre ahora o esta temporada, en <mark>continuous</mark>; y los verbos de estado (<i>like, prefer</i>), en simple.</p>` },
    { tras: "Present continuous: usos", html: `<h3>El present continuous para planes</h3><p>El present continuous también sirve para hablar del <b>futuro</b> cuando se trata de <mark>planes ya organizados</mark>, con fecha y hora: «I'<b>m meeting</b> Sara at 5 tomorrow», «We'<b>re flying</b> to Dublin on Friday». Suele ir con una expresión de futuro (<i>tomorrow, tonight, next week, on Saturday</i>) para que no se confunda con el presente. Es la forma más natural de preguntar por los planes de alguien: «What <b>are</b> you <b>doing</b> this weekend?» — «I'<b>m going</b> to my cousin's birthday party». En cambio, el present simple con significado de futuro se reserva para <b>horarios</b> fijos: «The train <b>leaves</b> at 7:15».</p>` },
  ],
  videos: [
    ["Verbos de estado", L.vid("4UsLG9_dd9w", "Verbos estativos: ¿entiendo o estoy entendiendo?", "Arnel's Everyday English", 854774)],
  ],
  ejemplos: [
    ["Completa: «My dad (cook) ___ dinner every evening, but tonight my mum (cook) ___.»", ["Every evening es una rutina: present simple, tercera persona → cooks.", "Tonight es una excepción temporal, ahora: present continuous → is cooking."], "My dad cooks dinner every evening, but tonight my mum is cooking."],
    ["Pon en negativa y en pregunta: «Lucy goes to the gym on Mondays.»", ["Negativa: auxiliar doesn't + verbo en forma base (go, no goes).", "Pregunta: Does + sujeto + verbo en forma base.", "Respuesta corta: Yes, she does / No, she doesn't."], "Lucy doesn't go to the gym on Mondays. / Does Lucy go to the gym on Mondays?"],
    ["Ordena la frase: «late / is / always / Tom / for class».", ["Sujeto: Tom.", "El verbo es be (is), así que el adverbio va detrás: is always.", "Después el resto: late for class."], "Tom is always late for class."],
  ],
  errores: [
    "Olvidar la -s de la tercera persona: *She play → She plays.",
    "Poner -s después de does: *Does he plays? → Does he play?",
    "Usar continuous con verbos de estado: *I'm knowing → I know.",
    "Colocar el adverbio detrás del verbo principal: *I play often → I often play.",
    "Olvidar el verbo be en continuous: *She reading → She is reading.",
  ],
  ejercicios: [
    ["Escribe la tercera persona del singular de: watch, fly, go, play, fix.", "watches, flies, goes, plays, fixes."],
    ["Escribe la forma -ing de: make, sit, lie, study, begin.", "making, sitting, lying, studying, beginning."],
    ["Completa: «Water (boil) ___ at 100 °C.»", "boils. Es una verdad general: present simple."],
    ["Completa: «Be quiet! The teacher (talk) ___.»", "is talking. Está pasando ahora: present continuous."],
    ["Pregunta por la frecuencia y responde: (you / go swimming) – twice a week.", "How often do you go swimming? – Twice a week."],
    ["Corrige: «Do she like music?»", "Does she like music? Con he / she / it se usa does."],
    ["Corrige: «I'm wanting a new phone.»", "I want a new phone. Want es un verbo de estado."],
    ["Elige: «I (think / am thinking) of going to the party.»", "am thinking. Aquí think significa «considerar», una acción en curso."],
    ["Escribe dos frases sobre ti: una rutina y algo que haces esta semana pero no siempre.", "Por ejemplo: «I usually have breakfast at home.» / «This week I'm getting up earlier because I have exams.»"],
    ["Traduce: «Normalmente cena a las nueve, pero hoy está cenando en casa de un amigo.»", "He usually has dinner at nine, but today he's having dinner at a friend's house."],
  ],
  quiz: [
    ["«How often ___ you visit your grandparents?»", ["do", "are", "does"], 0, "Present simple con you: do."],
    ["«She ___ late.» (nunca)", ["never is", "is never", "never"], 1, "Con be, el adverbio va detrás."],
    ["«Are you hungry?» «Yes, ___.»", ["I am", "I'm", "I do"], 0, "Respuesta corta afirmativa sin contraer."],
    ["«This cake ___ delicious.»", ["tastes", "is tasting", "taste"], 0, "Taste = saber a: verbo de estado."],
    ["«What ___ she doing?»", ["is", "does", "do"], 0, "Present continuous: be + -ing."],
  ],
  tarjetas: [
    ["How often…?", "Pregunta por la frecuencia: How often do you…?"],
    ["Posición del adverbio", "Delante del verbo principal y detrás de be: I often go / I'm often late."],
    ["Respuestas cortas", "Yes, I do / No, she doesn't / Yes, I am / No, it isn't."],
  ],
});
