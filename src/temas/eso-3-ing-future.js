// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Future: will, going to and present continuous",
  minutos: 35,
  objetivos: ["Formar el futuro con will, be going to y present continuous", "Elegir la forma adecuada según sea una predicción, una intención o un plan fijado", "Usar will para decisiones del momento, ofrecimientos y promesas"],
  claves: ["will / won't", "be going to", "present continuous", "predictions", "intentions", "arrangements"],
  pregunta: {
    texto: "En español decimos «mañana voy al dentista», «voy a estudiar Medicina» y «creo que lloverá». En inglés, cada una de esas frases usa una forma de futuro distinta. ¿Por qué tantas?",
    respuesta: "Porque el inglés distingue <b>cómo de seguro y de organizado</b> está lo que dices. «I'm seeing the dentist tomorrow» es una <mark>cita fijada</mark>; «I'm going to study Medicine» es una <mark>intención</mark>; «I think it will rain» es una <mark>predicción</mark>. Elegir bien la forma suena mucho más natural.",
  },
  bloques: [
    {
      html: `<h3>Will</h3><p><mark>will / won't + forma base</mark>, igual para todas las personas: «She <b>will</b> love it», «They <b>won't</b> come». Pregunta: «<b>Will</b> you help me?». Lo usamos para <b>predicciones</b> basadas en opiniones o creencias, a menudo con <i>I think, I'm sure, probably, maybe</i>: «I think Spain <b>will win</b>». Y para <b>decisiones espontáneas</b>, tomadas en el momento de hablar: «It's cold. I'<b>ll close</b> the window».</p>`,
      svg: L.filas("Will: afirmativa, negativa e interrogativa", [
        ["+", "It will be sunny tomorrow.", "var(--leaf)"], ["−", "It won't be sunny tomorrow.", "var(--red)"], ["?", "Will it be sunny tomorrow?", "var(--pen)"],
      ], "will / won't + forma base"),
    },
    {
      html: `<h3>Be going to</h3><p><mark>am / is / are + going to + forma base</mark>: «I'<b>m going to</b> learn to drive». Lo usamos para <b>intenciones y planes</b> que ya habíamos decidido antes de hablar: «We'<b>re going to</b> paint the kitchen this weekend». También para <b>predicciones con pruebas</b> que vemos ahora: «Look at those black clouds! It'<b>s going to</b> rain». Negativa: «He isn't going to come»; pregunta: «Are you going to…?».</p>`,
      svg: L.frase("Be going to: Look at the clouds, it is going to rain", [
        ["It", "", "var(--ink)"], ["is", "be", "var(--pen)"], ["going to", "", "var(--red)"], ["rain.", "forma base", "var(--leaf)"],
      ], "hay pruebas: nubes negras"),
    },
    {
      html: `<h3>Present continuous con valor de futuro</h3><p>Para <b>planes ya organizados</b>, con fecha, hora o lugar, y casi siempre con otra persona (citas, viajes reservados, quedadas), usamos el <mark>present continuous</mark> con una expresión de futuro: «I'<b>m meeting</b> Ana at 6», «We'<b>re flying</b> to Rome on Monday». Es la forma típica para preguntar por los planes: «What <b>are</b> you <b>doing</b> on Saturday?».</p>`,
      svg: L.dialogo("Diálogo sobre planes con present continuous", [
        ["Sam", "What are you doing on Saturday?", "var(--pen)"], ["Eva", "I'm playing a match at 11.", "var(--leaf)"], ["Sam", "And in the evening?", "var(--pen)"], ["Eva", "I'm having dinner with Leo.", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Ofrecimientos, promesas y peticiones</h3><p>Will también sirve para <mark>ofrecer ayuda</mark> («That bag looks heavy. I'<b>ll carry</b> it for you»), <mark>prometer</mark> («I promise I'<b>ll be</b> on time»; «I <b>won't tell</b> anyone») y <b>pedir</b> algo con educación («<b>Will</b> you open the door, please?»). Para ofrecerse en forma de pregunta se usa <b>Shall I…?</b>: «<b>Shall I</b> help you with your homework?».</p>`,
      svg: L.filas("Usos de will en la conversación", [
        ["Oferta", "I'll carry it for you.", "var(--leaf)"], ["Promesa", "I'll call you tonight.", "var(--pen)"], ["Decisión", "I'll have the pizza.", "var(--sun)"], ["Petición", "Will you help me?", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Expresiones de tiempo futuro</h3><p>El futuro suele ir con <i>tomorrow, tonight, next week, next year, in two days, soon, later, one day</i> o <i>in the future</i>. Fíjate: se dice <mark>next week</mark> (no «the next week») y <b>in + periodo</b> significa «dentro de»: «I'll be back <b>in ten minutes</b>». Con <i>probably</i>, el adverbio va <b>detrás de will</b> y <b>delante de won't</b>: «She'll <b>probably</b> be late» / «She <b>probably</b> won't come».</p>`,
      svg: L.tabla("Expresiones de futuro y su significado", ["English", "Español"], [
        ["tonight", "esta noche"], ["next month", "el mes que viene"], ["in 2 hours", "dentro de 2 horas"], ["soon", "pronto"],
      ], "var(--pen)"),
    },
  ],
  figura: {
    titulo: "¿Qué futuro uso?",
    svg: L.columnas("Comparación de will, be going to y present continuous", [
      ["predicción · decisión ahora", "WILL", ["I think it'll rain.", "I'll answer it!"], "var(--leaf)"],
      ["intención · hay pruebas", "GOING TO", ["I'm going to study.", "It's going to fall!"], "var(--red)"],
      ["plan fijado (día y hora)", "PRES. CONT.", ["I'm meeting Ana", "at 6 tomorrow."], "var(--pen)"],
    ]),
  },
  video: { id: "gT6fqzJL6mM", titulo: "La diferencia entre will y going to en inglés", canal: "Amigos Ingleses", vistas: 1190873, megusta: 0, busqueda: "will going to inglés diferencia" },
  quiz: [
    { q: "«I think robots ___ do most jobs in the future.»", o: ["will", "are going", "are doing"], a: 0, e: "Predicción con opinión (I think): will." },
    { q: "«Look out! You ___ fall!»", o: ["will", "are going to", "fall"], a: 1, e: "Predicción con pruebas que vemos: going to." },
    { q: "«We ___ a party on Saturday. We've sent the invitations.»", o: ["are having", "will have", "have"], a: 0, e: "Plan organizado: present continuous." },
    { q: "«The phone's ringing.» «I ___ get it!»", o: ["'m going to", "'ll", "'m getting"], a: 1, e: "Decisión espontánea: will." },
    { q: "La negativa de «will» es…", o: ["willn't", "won't", "don't will"], a: 1, e: "Will not = won't." },
  ],
  examen: [
    { q: "«This year I ___ eat more fruit.» (intención)", o: ["'m going to", "'ll", "'m eating"], a: 0, e: "Intención decidida: going to." },
    { q: "«___ I open the window?» (ofrecimiento)", o: ["Will", "Shall", "Am"], a: 1, e: "Shall I…? para ofrecerse." },
    { q: "«She ___ probably ___ late.»", o: ["will / be", "is / be", "will / is"], a: 0, e: "Will + probably + forma base." },
  ],
  feynman: ["Cuándo uso will", "Cuándo uso be going to", "Para qué sirve el present continuous con valor de futuro", "Cómo se hacen ofrecimientos y promesas"],
  mapa: mapa("FUTURE FORMS", "var(--eso)", [
    ["Will", "predictions · decisions", "var(--leaf)"],
    ["Going to", "plans · evidence", "var(--red)"],
    ["Present cont.", "arrangements", "var(--pen)"],
    ["Offers", "I'll… · Shall I…?", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Will", "Predicciones (I think…) y decisiones tomadas en el momento."],
    ["Be going to", "Intenciones y predicciones con pruebas."],
    ["Present continuous de futuro", "Planes organizados con fecha y hora."],
    ["Shall I…?", "Para ofrecer ayuda: Shall I carry it?"],
    ["Won't", "Will not: I won't tell anyone."],
  ],
  familias: ["Pedidle que os cuente en inglés sus planes para el fin de semana (present continuous).", "Haced predicciones juntos sobre el año 2050 con will y comentadlas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: expresión del futuro (will, be going to, present continuous), planes, predicciones, ofrecimientos y promesas (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["Agenda compartida: quedar con compañeros usando present continuous.", "Vidente de clase: predicciones con will sobre el futuro de la ciudad.", "Resoluciones de Año Nuevo con going to."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: talking about the future", url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/talking-about-future" },
    { t: "Cambridge Dictionary: future", url: "https://dictionary.cambridge.org/grammar/british-grammar/future-be-going-to-i-am-going-to-work" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar el present simple para horarios futuros y el futuro con when / as soon as", "Expresar grados de certeza: will, might, may"],
  bloques: [
    { tras: "Present continuous con valor de futuro", html: `<h3>El present simple para horarios</h3><p>Cuando hablamos de <b>horarios y programas fijos</b>, que no dependen de nosotros (transportes, clases, espectáculos, calendarios), usamos el <mark>present simple</mark> aunque sea futuro: «The train <b>leaves</b> at 7:45 tomorrow», «The film <b>starts</b> at 9», «Term <b>ends</b> on 20th June». Compara: «My train <b>leaves</b> at 8» (horario de la empresa) / «I'<b>m taking</b> the 8 o'clock train» (mi plan personal).</p><p>Además, después de <b>when, as soon as, before, after, until</b> e <b>if</b> se usa el presente para hablar del futuro: «I'll call you <b>when</b> I <b>get</b> home» (no «when I will get»), «We'll start <b>as soon as</b> everybody <b>arrives</b>».</p>` },
    { tras: "Ofrecimientos, promesas y peticiones", html: `<h3>Grados de certeza</h3><p>Para predecir con más o menos seguridad podemos graduar la frase:</p>${L.tb(["Seguridad", "Ejemplo"], [["100 %", "It <b>will</b> rain. / I'm sure it'll rain."], ["80 %", "It'll <b>probably</b> rain. / It's likely to rain."], ["50 %", "It <b>might</b> rain. / It <b>may</b> rain."], ["20 %", "It <b>probably won't</b> rain."], ["0 %", "It <b>won't</b> rain. / I'm sure it won't rain."]])}<p><b>Might</b> y <b>may</b> van seguidos de la forma base, como will, y no cambian: «She might come later». Son muy útiles para no sonar demasiado tajante.</p>`, video: L.vid("W0e3dbx0r7M", "Tiempos verbales en inglés: ¿futuro o presente continuo?", "English with Ronnie · engVid", 1220975) },
    { tras: "Expresiones de tiempo futuro", html: `<h3>El futuro en una conversación real</h3><p>En una charla se mezclan varias formas de futuro. Lee: «— Are you <b>doing</b> anything on Friday? — Yes, I'<b>m going</b> to the cinema with Marta. The film <b>starts</b> at 8. — Oh, nice. I think I'<b>ll stay</b> at home. I'<b>m going to</b> finish my project. — It <b>might</b> rain, so take an umbrella if you go out! — OK, I'<b>ll</b> take one. I'<b>ll</b> text you later». Fíjate: el plan con Marta, en <mark>present continuous</mark>; el horario de la película, en <mark>present simple</mark>; la intención de acabar el proyecto, con <mark>going to</mark>; la decisión del momento, la promesa y la predicción insegura, con <mark>will</mark> y <mark>might</mark>.</p>` },
    { tras: "Be going to", html: `<h3>Otras formas de hablar de planes</h3><p>Además de las tres formas principales, hay verbos que expresan el futuro con distintos matices. <mark>Plan to</mark> y <b>intend to</b> (tener pensado): «I <b>plan to</b> travel around Europe». <mark>Hope to</mark> (esperar, con deseo): «We <b>hope to</b> see you soon». <b>Would like to</b> (me gustaría): «I'<b>d like to</b> be a vet». <b>Be about to</b> (estar a punto de): «Hurry up! The film <b>is about to</b> start». Y <b>be thinking of + -ing</b> para planes aún no decididos: «I'<b>m thinking of joining</b> the drama club». Son muy útiles para hablar de tus estudios y tu futuro profesional: «When I finish school, I <b>hope to</b> study Engineering, and one day I'<b>d like to</b> work abroad».</p>` },
    { tras: "Expresiones de tiempo futuro", html: `<h3>Preguntar por el futuro</h3><p>Fíjate en el orden de las preguntas en cada forma de futuro. Con <b>will</b>, el auxiliar va delante del sujeto: «<b>Will</b> you be at home tonight?», «What time <b>will</b> the shop open?». Con <b>going to</b>, se adelanta el verbo be: «<b>Are</b> you <b>going to</b> study tonight?», «What <b>are</b> you <b>going to</b> wear?». Con el <b>present continuous</b>: «Where <b>are</b> you <b>going</b> on holiday?», «Who <b>is</b> she <b>meeting</b>?». Las respuestas cortas siguen la misma lógica: <i>Yes, I will / No, I won't</i>; <i>Yes, I am / No, I'm not</i>. Para hacer predicciones en grupo, pregunta: <mark>What do you think will happen?</mark></p>` },
  ],
  ejemplos: [
    ["Elige el futuro adecuado: «I've decided. I (buy) ___ a new laptop next month.»", ["«I've decided» indica que la decisión es anterior al momento de hablar.", "Es una intención: be going to."], "I'm going to buy a new laptop next month."],
    ["Elige el futuro adecuado: «I'm thirsty.» «Wait, I (get) ___ you a glass of water.»", ["La decisión se toma en el momento de hablar, como reacción.", "Además es un ofrecimiento: will."], "I'll get you a glass of water."],
    ["Corrige: «I'll phone you when I will arrive at the airport.»", ["Después de when se usa el presente aunque hablemos del futuro.", "La oración principal sí va con will."], "I'll phone you when I arrive at the airport."],
  ],
  errores: [
    "Poner to después de will: *I will to go → I will go.",
    "Olvidar el verbo be en going to: *I going to study → I'm going to study.",
    "Usar will después de when o as soon as: *when I will finish → when I finish.",
    "Usar will para un plan ya organizado: *I'll meet the dentist at 5 tomorrow → I'm seeing the dentist at 5 tomorrow.",
    "Decir *the next week → next week.",
  ],
  ejercicios: [
    ["Pon en negativa y pregunta: «They will win the match.»", "They won't win the match. / Will they win the match?"],
    ["Completa con going to: «Look at that man! He (fall) ___ into the river!»", "He's going to fall. Hay pruebas visibles."],
    ["Completa: «I'm sure you (love) ___ this book.»", "will love. Predicción con opinión."],
    ["Completa con present continuous: «We (have) ___ a barbecue on Sunday. Do you want to come?»", "We're having a barbecue on Sunday."],
    ["Completa: «The concert (start) ___ at 9 pm.»", "starts. Es un horario fijo."],
    ["Escribe un ofrecimiento con Shall I…? para alguien que no encuentra su móvil.", "Shall I call your phone so you can hear it?"],
    ["Escribe una promesa con won't.", "Por ejemplo: «I promise I won't be late again.»"],
    ["Ordena según la seguridad: It might snow / It will snow / It probably won't snow.", "It will snow (100 %) > It might snow (50 %) > It probably won't snow (20 %)."],
    ["Corrige: «We will go to see my grandma tomorrow. We have already bought the tickets.»", "We're going to see / We're seeing my grandma tomorrow. Es un plan decidido y organizado."],
    ["Escribe tres frases sobre tu futuro: un plan para este fin de semana, una intención para el verano y una predicción para dentro de diez años.", "Por ejemplo: «I'm playing tennis on Saturday.» / «I'm going to learn to surf this summer.» / «In ten years I think I'll live in another country.»"],
  ],
  quiz: [
    ["«I'll text you as soon as I ___ home.»", ["get", "will get", "am going to get"], 0, "Tras as soon as: presente."],
    ["«It ___ snow tonight, but I'm not sure.»", ["might", "will", "is going to"], 0, "Posibilidad del 50 %."],
    ["«My plane ___ at 6:30 tomorrow.»", ["leaves", "will leave", "is going"], 0, "Horario: present simple."],
    ["«She ___ come.» (probablemente no)", ["probably won't", "won't probably", "will probably not to"], 0, "Probably delante de won't."],
    ["«I'll be back ___ ten minutes.»", ["in", "after", "for"], 0, "In + periodo = dentro de."],
  ],
  tarjetas: [
    ["Horarios", "Present simple: The bus leaves at 8."],
    ["When / as soon as + futuro", "Van con presente: when I get home."],
    ["Might / may", "Quizá, posibilidad del 50 %: It might rain."],
  ],
});
