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

// Nivel libro (3º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso3L6").libro(module.exports, {
  lectura: ["Una semana en casa de los Turner", `<p>Lucía tiene 14 años y este mes está de intercambio en Leeds, en casa de la familia Turner. El primer día escribe a su clase: <i>«The Turners live in a big old house. Mr Turner works in a hospital and Mrs Turner teaches maths. They always have dinner at six!»</i>. Todo eso es lo que hacen siempre, la vida normal de la familia: <b>present simple</b>.</p><p>Pero Lucía también cuenta lo que le está pasando a ella estos días: <i>«I'm staying in Emma's room and I'm learning a lot of new words. Right now it's raining and we're watching a film.»</i> Son cosas temporales o que ocurren mientras escribe: <b>present continuous</b>.</p><p>A Lucía le cuesta una cosa: en español decimos «¿qué haces?» para las dos situaciones, y en inglés hay que elegir entre <i>What do you do?</i> (¿a qué te dedicas?) y <i>What are you doing?</i> (¿qué estás haciendo ahora?). Además, hay verbos como <i>like, want</i> o <i>know</i> que casi nunca van en continuous.</p><p>En este tema aprenderás a formar los dos presentes sin errores, a elegir el adecuado gracias a las palabras pista y a usarlos para hablar de tu vida, de tus rutinas y de lo que estás haciendo ahora, igual que Lucía en sus mensajes desde Inglaterra.</p>`],
  mas: [
    ["<h3>Dónde van los adverbios de frecuencia</h3>", `<p>Los adverbios también tienen matices de significado que conviene conocer: <i>usually</i> y <i>normally</i> significan casi lo mismo (lo habitual); <i>often</i> es «a menudo»; <i>sometimes</i>, «a veces»; <i>hardly ever</i> y <i>rarely</i>, «casi nunca». Como <i>never</i> y <i>hardly ever</i> ya tienen sentido negativo, el verbo va en afirmativa: «She <b>hardly ever</b> watches TV». Y en una respuesta corta el adverbio puede ir solo: «Do you cook?» «<b>Sometimes</b>.»</p>`],
    ["<h3>Present simple: usos</h3>", `<p>En las conversaciones, el present simple aparece en muchas preguntas útiles para conocer a alguien: «Where <b>do</b> you <b>come</b> from?», «What music <b>do</b> you <b>like</b>?», «What <b>does</b> your sister <b>do</b>?». Y en los textos informativos describe cómo funcionan las cosas: «Bees <b>make</b> honey», «The heart <b>pumps</b> blood around the body». Por eso es el presente de las ciencias y de las explicaciones.</p>`],
    ["<h3>Respuestas cortas</h3>", `<p>Las respuestas cortas también sirven para reaccionar en una conversación sin repetir la información. Con <b>So do I / Neither do I</b> muestras que coincides: «I love pizza.» «<b>So do I</b>.» «I don't like spiders.» «<b>Neither do I</b>.» Y con una pregunta corta muestras interés: «I live in a castle.» «<b>Do you?</b> Really?» El auxiliar siempre corresponde al tiempo de la frase anterior: con el continuous, «I'm learning Chinese.» «<b>Are you?</b>».</p>`],
    ["<h3>El present continuous para planes</h3>", `<p>Para quedar con alguien se combinan pregunta y respuesta en continuous: «<b>Are</b> you <b>doing</b> anything on Friday?» «No, I'm free.» «Great! We<b>'re having</b> a party. Do you want to come?». Fíjate en que la invitación (<i>Do you want…?</i>) va en simple, porque want es un verbo de estado.</p>`],
    ["<h3>Verbos que cambian de significado</h3>", `<p>Lo mismo ocurre con <b>look</b> y <b>smell</b>: «You <b>look</b> tired» (pareces cansado: estado) frente a «I<b>'m looking</b> at the photos» (estoy mirando: acción); «This room <b>smells</b> of paint» (huele a pintura) frente a «The dog<b>'s smelling</b> the food» (está oliendo). Si dudas, pregúntate si el sujeto está <i>haciendo</i> algo de forma voluntaria: si la respuesta es sí, el continuous es posible.</p>`],
    ["<h3>Present simple: forma</h3>", `<p>Fíjate en que solo la tercera persona del singular cambia: <i>I play, you play, we play, they play</i>, pero <i>he / she / it <b>plays</b></i>. El verbo <b>have</b> es irregular: <i>she <b>has</b></i>, nunca «she haves». En la negativa lo normal al hablar es la forma contraída: <i>don't</i> (do not) y <i>doesn't</i> (does not). En las preguntas el orden es fijo: <b>(palabra interrogativa) + do / does + sujeto + verbo base</b>: «Where <b>does</b> your father <b>work</b>?».</p>`],
    ["<h3>Present simple: usos</h3>", `<p>Un uso que a veces se olvida es el de los <b>estados permanentes</b> y las <b>descripciones</b>: «My sister <i>has</i> long hair», «Our school <i>is</i> near the river». También lo usamos para expresar <b>gustos y opiniones</b> («I <i>love</i> animated films», «I <i>think</i> it's a good idea») y en los <b>titulares</b> de prensa, que cuentan noticias recientes con un presente muy breve: «Spain <i>wins</i> the final».</p>`],
    ["<h3>Present continuous: forma</h3>", `<p>En la lengua hablada casi siempre se usan las contracciones: <i>I'm, you're, he's, she's, it's, we're, they're</i>, y en negativa <i>isn't, aren't</i> (pero <i>I'm not</i>, porque «amn't» no existe). En las preguntas con palabra interrogativa el orden es <b>Wh- + am / is / are + sujeto + -ing</b>: «What <b>are</b> you <b>reading</b>?», «Why <b>is</b> she <b>crying</b>?».</p>`],
    ["<h3>Present continuous: usos</h3>", `<p>Ojo: «ahora» no significa solo «en este segundo». «I'm reading a fantastic book» puede decirse aunque ahora estés comiendo, porque la lectura está en marcha estos días. Por eso el continuous también encaja con <i>these days, this month, this term</i>: «We<b>'re learning</b> about volcanoes this term».</p>`],
    ["<h3>Verbos de estado</h3>", `<p>Un truco para reconocerlos: si no puedes imaginar la acción con un principio y un final claros, seguramente es un estado. «Saber» o «querer» no se hacen durante un rato y se terminan; simplemente son así. Por eso decimos «I <b>know</b> the answer» aunque lo sepamos justo ahora. Con <i>need, want</i> y <i>like</i> pasa lo mismo: «I <b>need</b> help now», no «I'm needing help».</p>`],
    ["<h3>Los dos presentes en un texto</h3>", `<p>Cuando escribas tu propio texto, sigue un orden sencillo: primero presenta los hechos estables (dónde vives, qué haces normalmente) en simple; después cuenta las novedades o lo que pasa estos días en continuous; y termina con una pregunta al lector («What about you? What are you doing this summer?»). Al revisar, busca todas las terceras personas y comprueba que llevan -s.</p>`],
  ],
  svgs: [
    ["<h3>Dónde van los adverbios de frecuencia</h3>", "Posición de los adverbios de frecuencia", [["delante del verbo", "I often play tennis."], ["detrás de be", "He is always late."], ["al final", "twice a week · every day"]], "always · often · never"],
    ["<h3>Respuestas cortas</h3>", "Respuestas cortas con los dos presentes", [["Do you…?", "Yes, I do. / No, I don't."], ["Does he…?", "Yes, he does. / No, he doesn't."], ["Are you…ing?", "Yes, I am. / No, I'm not."]], "se repite el auxiliar"],
    ["<h3>El present continuous para planes</h3>", "Present continuous para planes de futuro", [["Plan fijado", "I'm meeting Sara at 5."], ["Pregunta", "What are you doing tonight?"], ["Horario", "The train leaves at 7:15."]], "planes organizados"],
    ["<h3>Verbos que cambian de significado</h3>", "Verbos de estado que también pueden ser de acción", [["think", "opinar / pensar en"], ["have", "tener / comer, tomar"], ["see", "entender / quedar con"], ["taste", "saber a / probar"]]],
    ["<h3>Los dos presentes en un texto</h3>", "Qué presente usar en un correo", [["Hechos y rutinas", "I live… I usually walk…"], ["Esta temporada", "I'm taking the bus."], ["Ahora mismo", "I'm sitting in the library."], ["Estados", "I don't like… I prefer…"]]],
  ],
  bloques: [
    { tras: "<h3>Present simple: forma</h3>", html: `<h3>La pronunciación de la -s</h3><p>La -s de la tercera persona no siempre suena igual. Hay <b>tres sonidos</b>, y pronunciarlos bien ayuda a que te entiendan y a no olvidar la -s al escribir:</p><ul><li><b>/s/</b> después de sonidos sordos como /p/, /t/, /k/, /f/: <i>stops, gets, likes, laughs</i>.</li><li><b>/z/</b> después de vocales y de sonidos sonoros: <i>plays, lives, runs, goes</i>. Es el caso más frecuente.</li><li><b>/ɪz/</b>, una sílaba más, después de /s/, /z/, /ʃ/, /tʃ/, /dʒ/: <i>watches, washes, kisses, changes</i>.</li></ul><p>Dos verbos muy usados cambian la vocal al añadir la -s: <i>does</i> se pronuncia /dʌz/ (no «dous») y <i>says</i> se pronuncia /sez/ (no «seis»). Las mismas reglas sirven para los plurales de los sustantivos: <i>cats</i> /s/, <i>dogs</i> /z/, <i>buses</i> /ɪz/.</p>`, svg: ["Los tres sonidos de la -s final", [["/s/", "stops · gets · likes"], ["/z/", "plays · lives · goes"], ["/ɪz/", "watches · washes · changes"]], "he / she / it"] },
    { tras: "<h3>Dónde van los adverbios de frecuencia</h3>", html: `<h3>Preguntas con wh- y preguntas de sujeto</h3><p>Las preguntas abiertas empiezan con una <b>palabra interrogativa</b>: <i>what</i> (qué), <i>where</i> (dónde), <i>when</i> (cuándo), <i>who</i> (quién), <i>why</i> (por qué), <i>how</i> (cómo), <i>which</i> (cuál) y combinaciones como <i>what time, how often, how much, how many</i>. Después viene el mismo orden que en las preguntas de sí o no: «<b>What time do</b> you get up?», «<b>Where is</b> Tom <b>going</b>?».</p><p>Hay una excepción importante: cuando la palabra interrogativa es el <b>sujeto</b> de la frase (preguntamos <i>quién</i> hace la acción o <i>qué</i> ocurre), no se usa <i>do / does</i> y el verbo lleva la -s normal: «<b>Who lives</b> in that house?», «<b>What happens</b> at the end of the film?». Compara con una pregunta de objeto, que sí lleva auxiliar: «Who <b>do</b> you live with?» (yo vivo con alguien; preguntamos por ese alguien).</p><p>Para responder no hace falta repetir toda la frase: a «What time do you get up?» basta con «At half past seven».</p>`, svg: ["Pregunta de objeto frente a pregunta de sujeto", [["Objeto (con do)", "Who do you live with?"], ["Sujeto (sin do)", "Who lives here?"], ["Wh- + continuous", "What are you doing?"]], "orden de la pregunta"] },
    { html: `<h3>Simple o continuous: pensar desde el español</h3><p>El español también tiene dos presentes («como» y «estoy comiendo»), pero los usamos de forma más libre. Decimos «¿Qué haces?» tanto para preguntar por la profesión como por lo que alguien hace en este momento, y «Esta semana duermo en casa de mi abuela» con el presente simple. En inglés hay que decidir siempre, y estas son las trampas más habituales:</p><ul><li>«Ahora vivo en Valencia» (temporal) → «I<b>'m living</b> in Valencia now», y «Vivo en Valencia» (permanente) → «I <b>live</b> in Valencia».</li><li>«¿Vienes?» (ahora mismo) → «<b>Are</b> you <b>coming</b>?», no «Do you come?».</li><li>«No entiendo» → «I <b>don't understand</b>», nunca «I'm not understanding».</li><li>«Mañana juego un partido» → «I<b>'m playing</b> a match tomorrow» (plan acordado).</li></ul><p>Un método en tres preguntas te ayudará a decidir: ¿es un estado (like, know, want…)? → simple. ¿Es una rutina, un hecho permanente o un horario? → simple. ¿Pasa ahora, es temporal o es un plan acordado? → continuous. Las <b>palabras pista</b> (every day, usually / now, at the moment, this week) suelen darte la respuesta.</p>`, svg: ["Tres preguntas para elegir el presente", [["¿Es un estado?", "→ simple (I know)"], ["¿Rutina u horario?", "→ simple (I walk)"], ["¿Ahora o temporal?", "→ continuous"]], "método para decidir"] },
  ],
  videos: [["<h3>Dónde van los adverbios de frecuencia</h3>", "presentA"], ["<h3>Present continuous: forma</h3>", "presentB"]],
  grupos: [5, 4, 4],
  ejemplos: [
    ["Escribe la pregunta para la parte que falta: «Emma ___ (go) to school by bike.» → pregunta con How", ["Se pregunta por el medio de transporte: How.", "Present simple con she: auxiliar does.", "El verbo vuelve a la forma base: go."], "How <b>does</b> Emma <b>go</b> to school? — By bike."],
    ["Elige y justifica: «Listen! Somebody (sings / is singing) in the garden.»", ["Listen! indica que la acción ocurre en este momento.", "Sing es un verbo de acción, no de estado.", "Por tanto: is + singing."], "Somebody <b>is singing</b> in the garden."],
    ["Corrige el texto: «My brother study medicine. This year he live in Madrid and he is loving it.»", ["Study y live van en tercera persona: studies, lives (y la -y tras consonante cambia a -ies).", "This year es temporal: is living encaja mejor que lives.", "Love es un verbo de estado: loves, no is loving."], "My brother <b>studies</b> medicine. This year he<b>'s living</b> in Madrid and he <b>loves</b> it."],
  ],
  errores: ["Usar do / does en las preguntas de sujeto: *Who does live here? → Who lives here?"],
  niveles: "bbbbmbmmma",
  ejercicios: [
    ["b", "Escribe la tercera persona de: have, do, say, try, push.", "has, does, says, tries, pushes. Have es irregular; try cambia -y por -ies; push añade -es porque acaba en -sh."],
    ["b", "Clasifica según el sonido de la -s (/s/, /z/, /ɪz/): works, plays, watches, laughs, goes, dances.", "/s/: works, laughs. /z/: plays, goes. /ɪz/: watches, dances."],
    ["b", "Completa con am, is o are: «We ___ waiting for the bus.» / «I ___ not listening.» / «Carla ___ cooking.»", "We <b>are</b> waiting · I <b>am</b> not listening · Carla <b>is</b> cooking."],
    ["b", "Escribe en negativa: «They're playing football.»", "They <b>aren't playing</b> football. (They're not playing también es correcto.)"],
    ["b", "Ordena: «do / often / how / you / cinema / go / the / to»", "How often do you go to the cinema?"],
    ["b", "Completa con una respuesta corta: «Is your mum working today?» «Yes, ___.»", "Yes, she <b>is</b>. Se repite el auxiliar de la pregunta y no se contrae."],
    ["b", "Subraya la palabra pista y elige: «I (read / am reading) a comic at the moment.»", "Pista: at the moment. Respuesta: <b>am reading</b>."],
    ["m", "Completa con el presente correcto: «Tom usually (wear) ___ jeans, but today he (wear) ___ a suit.»", "Tom usually <b>wears</b> jeans (rutina), but today he <b>is wearing</b> a suit (hoy, excepción)."],
    ["m", "Haz la pregunta para la parte en negrita: «<b>Sara</b> plays the drums.»", "<b>Who plays</b> the drums? Pregunta de sujeto: sin does y con la -s en el verbo."],
    ["m", "Haz la pregunta para la parte en negrita: «Sara plays <b>the drums</b>.»", "<b>What does</b> Sara <b>play</b>? Pregunta de objeto: con does y verbo base."],
    ["m", "Elige: «I (have / am having) a shower. Can you call back later?»", "<b>am having</b>. Aquí have significa ducharse (acción), no poseer."],
    ["m", "Elige: «This bag (belongs / is belonging) to my sister.»", "<b>belongs</b>. Belong es un verbo de estado."],
    ["m", "Escribe dos planes para el fin de semana con el present continuous.", "Ejemplo: «I'm visiting my grandparents on Saturday.» «We're having a barbecue on Sunday.»"],
    ["m", "Corrige: «Where you are going?»", "Where <b>are you</b> going? En la pregunta, be va delante del sujeto."],
    ["m", "Completa: «The film (start) ___ at 8:30, so we (leave) ___ home at 8.»", "The film <b>starts</b> (horario: simple), so we<b>'re leaving</b> home at 8 (plan: continuous)."],
    ["m", "Traduce: «¿Qué estás haciendo? — Estoy buscando mis llaves. Siempre las pierdo.»", "What are you doing? — I'm looking for my keys. I always lose them."],
    ["m", "Escribe la forma -ing de: travel, come, stop, die, open.", "travelling (inglés británico), coming, stopping, dying, opening (open no dobla: el acento no está al final)."],
    ["a", "Corrige los cuatro errores: «My cousin Paul live in Dublin. He is having a dog called Max. Every morning he walk him in the park, but this week Paul visit us in Spain.»", "Paul <b>lives</b> in Dublin. He <b>has</b> a dog (posesión: estado). Every morning he <b>walks</b> him (rutina, tercera persona), but this week Paul <b>is visiting</b> us (temporal)."],
    ["a", "Explica la diferencia: «What do you do?» / «What are you doing?»", "La primera pregunta por la ocupación habitual (soy estudiante); la segunda, por lo que la persona hace en este momento (estoy cenando)."],
    ["a", "Escribe un párrafo de 50-60 palabras sobre tu mejor amigo o amiga: cómo es, qué hace normalmente y qué está haciendo estas semanas.", "Modelo: «My best friend is Nora. She's funny and she loves music. She plays the violin and she usually practises every afternoon. She doesn't like football, but she often comes to my matches. At the moment she's preparing for a concert, so she's practising a lot and she's getting up early.»"],
    ["a", "Explica por qué es correcto «You're always interrupting me!» aunque sea algo que se repite.", "Always con continuous no describe una rutina neutra: expresa queja o fastidio. Si fuera una simple descripción se diría «You always interrupt me»."],
    ["a", "Transforma en preguntas de sujeto: a) Somebody is knocking at the door. b) Something smells strange.", "a) <b>Who is knocking</b> at the door? b) <b>What smells</b> strange?"],
    ["a", "Traduce: «Este trimestre estamos estudiando los volcanes. Mi profesora sabe mucho y siempre trae fotos.»", "This term we're studying volcanoes. My teacher knows a lot and she always brings photos. (Temporal en continuous; know es de estado; rutina con always en simple.)"],
    ["a", "Elige y justifica: «I (think / am thinking) your plan is great, but I (think / am thinking) about the cost.»", "I <b>think</b> your plan is great (opinión: estado), but I<b>'m thinking</b> about the cost (pensar en algo: proceso)."],
    ["a", "Escribe un mensaje de 4 frases a un amigo inglés desde un campamento: dos cosas que haces cada día y dos que estás haciendo esta semana.", "Ejemplo: «Hi Ben! We get up at 7 every day and we always swim before lunch. This week I'm learning to climb and we're sleeping in tents. See you soon!»"],
    ["a", "Completa la entrevista con el presente correcto: «A: What (you / usually / do) ___ on Saturdays? B: I (play) ___ basketball. A: And (you / play) ___ this Saturday? B: No, I (go) ___ to a wedding.»", "What <b>do you usually do</b> · I <b>play</b> · <b>are you playing</b> this Saturday · I<b>'m going</b> to a wedding. Rutina en simple; planes concretos en continuous."],
  ],
  cuartas: ["working", "Are", "snowed", "swimed", "understands", "is", "never was", "am I", "has tasting", "are", "usually going", "staying", "not watching"],
  quiz: [
    ["La tercera persona de «try» es…", ["trys", "tries", "tryes", "triing"], 1, "Consonante + y: la y cambia a -ies."],
    ["¿Cómo suena la -s de «watches»?", ["/s/", "/z/", "/ɪz/", "no suena"], 2, "Después de /tʃ/ se añade una sílaba: /ɪz/."],
    ["«___ lives in that house?»", ["Who does", "Who", "Who do", "Who is"], 1, "Pregunta de sujeto: sin auxiliar do / does."],
    ["«Where ___ your brother work?»", ["do", "is", "does", "are"], 2, "Present simple con he: does."],
    ["«I ___ a new phone. Mine is broken.»", ["need", "am needing", "needs", "needing"], 0, "Need es un verbo de estado."],
    ["«We ___ to Paris next Friday. We've got the tickets.»", ["fly", "are flying", "flies", "flying"], 1, "Plan acordado: present continuous."],
    ["«She's ___ lunch at the moment.»", ["have", "has", "having", "haves"], 2, "Have = comer (acción): admite continuous."],
    ["«The museum ___ at 10 every day.»", ["is opening", "opens", "open", "opening"], 1, "Horario fijo: present simple."],
    ["Respuesta corta a «Does Lucy like jazz?»", ["Yes, she likes.", "Yes, she does.", "Yes, she is.", "Yes, she do."], 1, "Se repite el auxiliar does."],
    ["«Hurry up! Everybody ___ for you.»", ["waits", "is waiting", "wait", "are wait"], 1, "Ocurre ahora: present continuous (everybody va en singular)."],
  ],
  examen: [
    ["«How often ___ she ___ her grandmother?»", ["does / visit", "does / visits", "is / visiting", "do / visit"], 0, "Frecuencia: present simple con does y verbo base."],
    ["¿Cuál es correcta?", ["I'm not understanding.", "I don't understand.", "I doesn't understand.", "I not understand."], 1, "Understand es de estado: present simple."],
    ["«What ___ ? — I'm a nurse.»", ["are you doing", "do you do", "you do", "does you do"], 1, "Pregunta por la profesión: present simple."],
    ["«This term we ___ about the Romans.»", ["learn", "are learning", "learns", "learning"], 1, "This term: situación temporal."],
    ["La forma -ing de «lie» es…", ["lieing", "lying", "liing", "lyeing"], 1, "-ie cambia a -y: lying."],
  ],
  tarjetas: [
    ["Los tres sonidos de la -s", "/s/ works · /z/ plays · /ɪz/ watches."],
    ["Pregunta de sujeto", "Sin do / does: Who lives here? What happens next?"],
    ["Presente en horarios", "Present simple: The train leaves at 7."],
    ["Pistas del continuous", "now, at the moment, today, this week, Look!, Listen!"],
  ],
  glosario: [
    ["present simple", "Presente para rutinas, hechos permanentes, verdades generales y horarios: I walk, she walks."],
    ["present continuous", "am / is / are + -ing: lo que pasa ahora, lo temporal y los planes acordados."],
    ["third person singular", "Tercera persona del singular (he, she, it): en present simple añade -s, -es o -ies."],
    ["auxiliary verb", "Verbo auxiliar (do, does, am, is, are) que ayuda a formar negativas y preguntas."],
    ["base form", "Forma base del verbo, sin terminaciones: play, go, watch."],
    ["-ing form", "Forma del verbo con -ing que se usa en los tiempos continuos: playing, writing."],
    ["adverb of frequency", "Adverbio que indica cada cuánto ocurre algo: always, usually, often, sometimes, hardly ever, never."],
    ["stative verb", "Verbo de estado (like, know, want, belong) que casi nunca va en continuous."],
    ["action verb", "Verbo que expresa una acción con principio y fin (run, eat, write); admite continuous."],
    ["short answer", "Respuesta corta con el auxiliar: Yes, I do. No, she isn't."],
    ["wh- question", "Pregunta abierta con what, where, when, who, why, how…"],
    ["subject question", "Pregunta por el sujeto, sin do / does: Who called? What happens?"],
    ["time expression", "Expresión de tiempo que ayuda a elegir el tiempo verbal: every day, now, at the moment."],
    ["contraction", "Forma abreviada: I'm, she's, doesn't, aren't."],
  ],
  situacion: {
    titulo: "Un día en nuestro instituto",
    reto: "Un centro escolar de Escocia quiere conocer cómo es un día normal en vuestro instituto. Vuestra clase va a preparar un pequeño reportaje en inglés con fotos o vídeo: qué hacéis siempre y qué está pasando estas semanas en el centro.",
    pasos: ["En grupos, haced una lista de rutinas del instituto (horarios, clases, recreo) y de novedades de este trimestre (proyectos, obras, competiciones).", "Escribid entre todos 10 frases en present simple y 6 en present continuous, con adverbios de frecuencia y palabras pista.", "Haced fotos o grabad escenas cortas (con permiso) y escribid un pie de foto para cada una: «Here we're doing an experiment».", "Revisad el texto con la lista: -s de la tercera persona, verbos de estado, orden de las preguntas.", "Montad el reportaje y presentadlo a otra clase, respondiendo a sus preguntas en inglés."],
    producto: "Un reportaje fotográfico o vídeo corto con textos en inglés sobre la vida del instituto.",
    evaluacion: ["Elige bien entre present simple y continuous según el significado.", "Forma correctamente afirmativas, negativas y preguntas (con la -s y los auxiliares).", "Coloca bien los adverbios de frecuencia y usa palabras pista.", "Presenta el trabajo con pronunciación comprensible y responde a preguntas sencillas."],
  },
  familias: ["Jugad a «¿Qué estoy haciendo?»: uno hace mímica y el otro lo adivina con una frase en present continuous."],
  saberes: "comprensió i producció de textos orals i escrits breus sobre la vida quotidiana, les rutines i les activitats en curs.",
  minutos: 95,
});
