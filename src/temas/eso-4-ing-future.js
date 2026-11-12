// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Future forms",
  minutos: 35,
  objetivos: ["Elegir entre will, be going to y present continuous", "Usar el present simple para horarios", "Reconocer el future continuous y el future perfect"],
  claves: ["will", "be going to", "present continuous for future", "timetables", "future continuous", "future perfect"],
  pregunta: {
    texto: "Ves nubes negras y dices: «It's going to rain». Tu app dice: «It will rain tomorrow». Tu amigo dice: «I'm meeting Ana at six». ¿Por qué tres formas distintas para hablar del futuro?",
    respuesta: "Porque en inglés el futuro depende de <mark>cómo de seguro y planeado</mark> esté. «Going to» = prueba que ves ahora (nubes). «Will» = predicción u opinión. Present continuous = cita ya organizada. Elegir bien suena mucho más natural.",
  },
  bloques: [
    {
      html: `<h3>Will</h3><p><b>will + infinitivo</b> (negativa <i>won't</i>). Para <b>predicciones</b> basadas en opinión («I think Spain <i>will</i> win»), <mark>decisiones espontáneas</mark> («It's cold. I'll close the window»), promesas, ofrecimientos y hechos futuros («I'll be 16 in May»).</p>`,
      svg: L.filas("Usos de will", [
        ["Predicción", "I think it'll be fun.", "var(--pen)"], ["Decisión ya", "I'll get it!", "var(--red)"],
        ["Promesa", "I won't tell anyone.", "var(--leaf)"], ["Oferta", "I'll help you.", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Be going to</h3><p><b>am / is / are going to + infinitivo</b>. Para <mark>intenciones</mark> decididas antes de hablar («I'm going to study medicine») y para <b>predicciones con pruebas</b> visibles: «Look at that car! It's going to crash».</p>`,
      svg: L.frase("Be going to: I am going to study medicine", [
        ["I", "", "var(--line)"], ["am going to", "be going to", "var(--pen)"], ["study", "infinitivo", "var(--red)"], ["medicine.", "", "var(--line)"],
      ], "intención decidida antes"),
    },
    {
      html: `<h3>Present continuous y present simple</h3><p>El <b>present continuous</b> expresa <mark>planes fijados</mark> con hora o lugar: «We're having a party on Saturday». El <b>present simple</b> se usa para <mark>horarios</mark> oficiales: «The train leaves at 8:15», «School starts on 8 September».</p>`,
      svg: L.filas("Futuro con presentes: planes y horarios", [
        ["Plan fijado", "I'm seeing the dentist at 5.", "var(--leaf)"],
        ["Horario", "The film starts at 9.", "var(--inf)"],
      ], "también hablan del futuro"),
    },
    {
      html: `<h3>Future continuous</h3><p><b>will be + verbo-ing</b>. Acción <mark>en progreso</mark> en un momento del futuro: «This time tomorrow I <b>will be flying</b> to New York». Es como una foto del futuro.</p>`,
      svg: L.linea("Future continuous: acción en progreso en el futuro", [
        ["now", "I'm at home", "var(--muted)"],
        ["10 am", "I'll be sitting my exam", "var(--pen)"],
        ["11 am", "I'll be doing the last question", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Future perfect</h3><p><b>will have + participio</b>. Acción que <mark>habrá terminado</mark> antes de un momento futuro: «By 2030 I <b>will have finished</b> university». Va mucho con <i>by</i> (para, antes de).</p>`,
      svg: L.filas("Future perfect con by", [
        ["By Friday", "I'll have read the book.", "var(--pen)"],
        ["By 2030", "they'll have built it.", "var(--leaf)"],
      ], "habrá terminado antes de…"),
    },
  ],
  figura: {
    titulo: "¿Qué futuro uso?",
    svg: L.columnas("Guía para elegir la forma de futuro", [
      ["opinión · decisión ahora", "WILL", ["I think it'll rain.", "I'll call you."], "var(--pen)"],
      ["intención · prueba", "GOING TO", ["I'm going to travel.", "It's going to fall!"], "var(--red)"],
      ["cita organizada", "PRESENT CONT.", ["I'm meeting Ana", "at six."], "var(--leaf)"],
      ["horario oficial", "PRESENT SIMPLE", ["The bus leaves", "at 7:40."], "var(--inf)"],
    ]),
  },
  video: { id: "a8JvugZqg08", titulo: "Futuro con will y going to: diferencias, usos y ejemplos", canal: "Francisco Ochoa Inglés Fácil", vistas: 1325429, megusta: 0, busqueda: "will going to present continuous future explicación" },
  quiz: [
    { q: "«The phone is ringing.» «I ___ answer it!»", o: ["will", "am going to", "am answering"], a: 0, e: "Decisión espontánea en el momento: will." },
    { q: "«Look at those clouds! It ___ rain.»", o: ["will", "is going to", "rains"], a: 1, e: "Predicción con pruebas visibles: going to." },
    { q: "«The plane ___ at 10:45.» (horario)", o: ["leaves", "is going to leave", "will leaving"], a: 0, e: "Horarios oficiales: present simple." },
    { q: "«This time next week I ___ on the beach.»", o: ["will lie", "will be lying", "will have lain"], a: 1, e: "Acción en progreso en un momento futuro: future continuous." },
    { q: "«By June we ___ all the exams.»", o: ["will finish", "will have finished", "are finishing"], a: 1, e: "Terminado antes de un momento futuro: future perfect." },
  ],
  examen: [
    { q: "«We ___ a barbecue on Sunday. Everyone's invited.»", o: ["are having", "will have had", "have"], a: 0, e: "Plan organizado: present continuous." },
    { q: "La negativa de «will» es…", o: ["willn't", "won't", "don't will"], a: 1, e: "Will not = won't." },
    { q: "«I ___ be a vet when I grow up. I've decided.»", o: ["am going to", "will be", "am being"], a: 0, e: "Intención decidida antes: going to." },
  ],
  feynman: ["La diferencia entre will y going to", "Cuándo uso el present continuous para el futuro", "Por qué los horarios van en present simple", "Qué expresan el future continuous y el future perfect"],
  mapa: mapa("FUTURE FORMS", "var(--eso)", [
    ["Will", "prediction · decision", "var(--pen)"],
    ["Going to", "intention · evidence", "var(--red)"],
    ["Present tenses", "plans · timetables", "var(--leaf)"],
    ["Advanced", "will be -ing · will have", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Will: usos", "Predicciones de opinión, decisiones espontáneas, promesas y ofertas."],
    ["Be going to: usos", "Intenciones decididas antes y predicciones con pruebas."],
    ["Present continuous de futuro", "Planes ya organizados: «I'm meeting Tom tonight»."],
    ["Future continuous", "will be + -ing: acción en progreso en un momento futuro."],
    ["Future perfect", "will have + participio: acción terminada antes de un momento futuro."],
  ],
  familias: ["Pedidle que os cuente sus planes del fin de semana en inglés con present continuous.", "Jugad a hacer predicciones del próximo partido o de la próxima película con will.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación: expresión de planes, intenciones, predicciones y horarios (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Agenda de la semana por parejas para quedar («Are you doing anything on…?»).", "Bola de cristal: predicciones sobre compañeros para dentro de 20 años con future perfect.", "Analizar horarios reales de trenes y autobuses."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: future forms", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: future", url: "https://dictionary.cambridge.org/grammar/british-grammar/future" },
  ],
  revisado: "2026-11-12",
};
