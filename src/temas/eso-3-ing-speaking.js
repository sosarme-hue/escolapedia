// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Speaking: giving opinions",
  minutos: 35,
  objetivos: ["Dar tu opinión con expresiones variadas", "Mostrar acuerdo y desacuerdo de forma educada", "Justificar una opinión con razones y ejemplos"],
  claves: ["I think / In my opinion", "I agree / I disagree", "because / for example", "What do you think?", "Sorry, could you repeat that?", "fillers"],
  pregunta: {
    texto: "Tu profesora pregunta: «Should students wear a uniform?». ¿Basta con contestar «Yes»?",
    respuesta: "No. En una conversación en inglés se espera que <mark>des tu opinión</mark>, la <b>justifiques</b> y, si puedes, pongas un <b>ejemplo</b>: «I think students should wear a uniform <i>because</i> it's cheaper for families. <i>For example</i>, you don't need to buy lots of clothes». Y después, devolver la pregunta: «What do you think?».",
  },
  bloques: [
    {
      html: `<h3>Expresiones para dar tu opinión</h3><p>No te quedes solo en <i>I think</i>. Tienes muchas opciones: <mark>I think / I believe</mark> (creo), <mark>In my opinion / For me</mark> (en mi opinión), <mark>I'm sure that</mark> (estoy seguro), <mark>I don't think…</mark> (no creo). Ojo con dos errores típicos: se dice «<b>In my opinion</b>», no *«In my opinión» ni *«For my opinion»; y la negación va en <i>think</i>: «I <b>don't think</b> it's a good idea», mejor que «I think it isn't a good idea».</p>`,
      svg: L.filas("Expresiones para opinar", [
        ["Neutra", "I think… / I believe…", "var(--pen)"], ["Formal", "In my opinion,…", "var(--inf)"], ["Segura", "I'm sure that…", "var(--leaf)"], ["Negativa", "I don't think…", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Estar de acuerdo</h3><p>Para mostrar acuerdo: <mark>I agree (with you)</mark>, <mark>That's true</mark>, <mark>Exactly!</mark>, <mark>You're right</mark>, <mark>Me too / Me neither</mark>. Recuerda: se dice «<b>I agree</b>», nunca *«I'm agree», porque <i>agree</i> ya es un verbo. Si estás de acuerdo solo en parte: «<i>I partly agree</i>» o «<i>That's true, but…</i>». Es una forma educada de matizar sin llevar la contraria del todo.</p>`,
      svg: L.tabla("Mostrar acuerdo", ["Grado", "Expresión"], [
        ["total", "I totally agree."], ["normal", "That's true."], ["parcial", "I partly agree."], ["también", "Me too."],
      ], "var(--leaf)"),
    },
    {
      html: `<h3>Estar en desacuerdo con educación</h3><p>En inglés, llevar la contraria de forma directa («No, you're wrong») suena <b>brusco</b>. Lo natural es suavizar: <mark>I'm not sure about that</mark>, <mark>I see your point, but…</mark>, <mark>I don't really agree</mark>, <mark>I'm afraid I disagree</mark>. Después, da tu razón: «I see your point, but I think homework is useful <i>because</i> it helps us practise». Un desacuerdo educado y razonado es señal de buen nivel.</p>`,
      svg: L.dialogo("Un desacuerdo educado", [
        ["Leo", "Video games are a waste of time.", "var(--red)"], ["Ana", "I see your point, but…", "var(--pen)"], ["Ana", "…some help you think fast.", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Justificar: razones y ejemplos</h3><p>Una opinión vale más con <b>razones</b>. Usa <mark>because</mark> («because it's healthy»), <mark>The main reason is that…</mark>, <mark>Also, … / Another reason is…</mark>. Y apóyala con un <b>ejemplo</b>: <mark>For example, … / For instance, …</mark>, <i>like</i> + nombre. Fórmula sencilla para cualquier pregunta: <b>opinión + porque + ejemplo</b>. «I think cycling to school is great <i>because</i> it's good for the environment. <i>For example</i>, in my town lots of students cycle and there's less traffic».</p>`,
      svg: L.filas("La fórmula de una buena respuesta", [
        ["1", "Opinion: I think…", "var(--pen)"], ["2", "Reason: because…", "var(--red)"], ["3", "Example: For example,…", "var(--leaf)"],
      ], "O + R + E"),
    },
    {
      html: `<h3>Mantener la conversación</h3><p>Hablar es un intercambio. Para <b>preguntar la opinión</b> del otro: <mark>What do you think?</mark>, <mark>Do you agree?</mark>, <mark>What about you?</mark>. Para <b>ganar tiempo</b> mientras piensas: <i>Well…, Let me think…, That's a good question</i>. Y si no has entendido algo, pide ayuda: <mark>Sorry, could you repeat that, please?</mark>, <i>What do you mean?</i>. Mejor eso que quedarse callado.</p>`,
      svg: L.filas("Expresiones para conversar", [
        ["Preguntar", "What do you think?", "var(--pen)"], ["Pensar", "Well… Let me think.", "var(--sun)"], ["Aclarar", "Could you repeat that?", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Cómo responder a una pregunta de opinión",
    svg: L.pasos("Pasos para responder a una pregunta de opinión", [
      ["Opina", ["I think…", "In my opinion,…"], "var(--pen)"],
      ["Razona", ["because…", "Also,…"], "var(--red)"],
      ["Ejemplo", ["For example,…"], "var(--leaf)"],
      ["Pregunta", ["What do", "you think?"], "var(--inf)"],
    ]),
  },
  video: { id: "TbggqzYQhdA", titulo: "Cómo dar tu opinión en inglés", canal: "Nmodel", vistas: 220140, megusta: 0, busqueda: "giving opinions in English expresiones" },
  quiz: [
    { q: "¿Cuál es correcta?", o: ["I'm agree.", "I agree.", "I am agree with you."], a: 1, e: "Agree es un verbo: I agree." },
    { q: "Forma educada de no estar de acuerdo:", o: ["You're wrong!", "I see your point, but…", "No."], a: 1, e: "Suaviza y luego da tu razón." },
    { q: "«___ my opinion, school should start later.»", o: ["For", "In", "On"], a: 1, e: "In my opinion." },
    { q: "Para dar un ejemplo dices…", o: ["For example,…", "However,…", "Exactly!"], a: 0, e: "For example / For instance." },
    { q: "No has entendido. Dices…", o: ["What?", "Sorry, could you repeat that, please?", "Nothing."], a: 1, e: "Forma educada de pedir repetición." },
  ],
  examen: [
    { q: "«I don't like horror films.» — «Me ___.»", o: ["too", "neither", "either"], a: 1, e: "Acuerdo con una negativa: me neither." },
    { q: "¿Qué forma es más natural?", o: ["I don't think it's fair.", "I think it isn't fair.", "I think no it's fair."], a: 0, e: "La negación va en think." },
    { q: "La fórmula O + R + E significa…", o: ["Opinión, razón, ejemplo", "Oración, regla, error", "Orden, ritmo, entonación"], a: 0, e: "Opinion + reason + example." },
  ],
  feynman: ["Qué expresiones sirven para dar tu opinión", "Cómo se muestra acuerdo y desacuerdo con educación", "Por qué conviene justificar con razones y ejemplos", "Qué decir para mantener viva la conversación"],
  mapa: mapa("GIVING OPINIONS", "var(--eso)", [
    ["Opinion", "I think / In my opinion", "var(--pen)"],
    ["Agree", "I agree / That's true", "var(--leaf)"],
    ["Disagree", "I see your point, but…", "var(--red)"],
    ["Reasons", "because / for example", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Dar opinión", "I think…, In my opinion,…, I don't think…"],
    ["Acuerdo", "I agree, That's true, Exactly, Me too / Me neither."],
    ["Desacuerdo educado", "I see your point, but… / I'm not sure about that."],
    ["Justificar", "because…, For example,…"],
    ["Seguir hablando", "What do you think? / Could you repeat that?"],
  ],
  familias: ["Durante la cena, lanzad una pregunta sencilla en inglés («Cats or dogs?») y que cada uno opine con una razón.", "Ved un tráiler en inglés y opinad: «I think it looks… because…».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Producción e interacción oral: expresión de opiniones, acuerdo y desacuerdo; estrategias de cooperación y de compensación en la conversación (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["Línea de opinión: el alumnado se coloca según su grado de acuerdo y justifica.", "Tarjetas de temas polémicos suaves con la fórmula O + R + E.", "Mini debate por parejas con una lista de expresiones que hay que usar."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: speaking", url: "https://learnenglishteens.britishcouncil.org/skills/speaking" },
    { t: "Cambridge English: B1 Preliminary for Schools, speaking", url: "https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comparar opciones y llegar a un acuerdo", "Cuidar la pronunciación y la entonación al opinar"],
  bloques: [
    { tras: "Estar en desacuerdo con educación", html: `<h3>Comparar opciones y decidir juntos</h3><p>En muchos exámenes orales hay que <b>hablar con un compañero</b> para elegir entre varias opciones (un regalo, una actividad, un lugar). Las expresiones clave son: <mark>Let's…</mark> / <mark>Why don't we…?</mark> / <mark>How about…?</mark> para proponer; <i>…is better than… because…</i> para comparar; y <mark>So, shall we choose…?</mark> / <mark>OK, let's go for…</mark> para cerrar. Ejemplo: «How about a museum? — I'm not sure. I think the beach is better because it's sunny. — OK, let's go for the beach then!».</p>`, video: L.vid("AGYPb0eeIs8", "Let's Learn English Lesson 37: Let's agree to disagree", "VOA Learning English", 5642820) },
    { tras: "Expresiones para dar tu opinión", html: `<h3>Opiniones con más o menos fuerza</h3><p>Puedes <b>graduar</b> tu opinión. Para sonar muy seguro: <mark>I'm absolutely sure that…</mark>, <mark>Definitely!</mark>, <mark>There's no doubt that…</mark>. Para sonar prudente: <mark>I'm not sure, but…</mark>, <mark>Maybe… / Perhaps…</mark>, <mark>It depends</mark>. «It depends» es muy útil cuando la respuesta tiene matices: «Is it better to live in the city? — <i>It depends</i>. For young people, yes, because there are more things to do. But for families, maybe the countryside is better». Así demuestras que ves <b>los dos lados</b> del tema.</p>` },
    { tras: "Justificar: razones y ejemplos", html: `<h3>Ventajas e inconvenientes</h3><p>Para temas más amplios, organiza la respuesta en <b>pros y contras</b>: <mark>On the one hand, …</mark> (por un lado), <mark>On the other hand, …</mark> (por otro), <mark>The good thing is that… / The problem is that…</mark>, y termina con tu conclusión: <mark>All in all, I think…</mark>. «Should phones be allowed at school? <i>On the one hand</i>, they're useful to look things up. <i>On the other hand</i>, they distract us in class. <i>All in all</i>, I think they should only be used when the teacher says so». Es la misma estructura de una redacción de opinión.</p>` },
    { tras: "Mantener la conversación", html: `<h3>Pronunciación y entonación</h3><p>Cómo lo dices importa tanto como lo que dices. La <b>entonación</b> sube en las preguntas de sí o no («Do you <i>agree</i>? ↗») y baja en las preguntas con <i>wh-</i> y en las afirmaciones («What do you <i>think</i>? ↘»). Una entonación plana puede sonar aburrida o borde, así que <mark>marca las palabras importantes</mark>: «I <b>totally</b> agree», «I <b>really</b> don't think so». Cuida también sonidos difíciles para hispanohablantes: la <i>th</i> de <i>think</i> (no «tink»), y la <i>s</i> inicial sin «e» delante: <i>Spain</i>, no «Espain»; <i>school</i>, no «eschool».</p>` },
    { tras: "Estar de acuerdo", html: `<h3>Modelo de conversación</h3><p>Lee este intercambio y fíjate en las expresiones: «<b>A:</b> What do you think about school uniforms? <b>B:</b> Well, <i>in my opinion</i>, they're a good idea <i>because</i> everybody looks the same, so nobody feels different. <b>A:</b> <i>I see your point, but</i> I don't really agree. I think we should express our personality. <i>For example</i>, I love choosing my clothes. <b>B:</b> <i>That's true</i>, but uniforms are cheaper. <b>A:</b> Maybe. <i>It depends</i> on the school. <b>B:</b> OK, <i>let's agree to disagree</i>!». Hay opinión, razón, ejemplo, acuerdo parcial y desacuerdo educado: justo lo que se pide en un examen oral.</p>` },
  ],
  ejemplos: [
    ["Responde con O + R + E: «Is it a good idea to have a pet?»", ["Opinión: In my opinion, yes.", "Razón: because pets make you more responsible.", "Ejemplo: For example, I walk my dog every morning."], "In my opinion, it's a good idea because pets make you more responsible. For example, I walk my dog every morning."],
    ["Muestra desacuerdo educado con: «Summer is the best season.»", ["Reconoce la idea del otro: I see your point.", "Matiza: but…", "Da tu razón."], "I see your point, but I prefer autumn because it isn't so hot."],
    ["Propón una actividad y llega a un acuerdo.", ["Propón: How about going to the cinema?", "Compara: I think the park is better because it's free.", "Cierra: OK, let's go to the park."], "How about the cinema? — I think the park is better because it's free. — OK, let's go for the park!"],
  ],
  errores: [
    "Decir *I'm agree en vez de I agree.",
    "Decir *In my opinión o *For my opinion en vez de In my opinion.",
    "Contestar solo «yes» o «no» sin razones.",
    "Llevar la contraria de forma brusca: *You're wrong!",
    "Pronunciar «Espain» o «tink» en vez de Spain y think.",
  ],
  ejercicios: [
    ["Escribe tres formas de empezar una opinión.", "I think…, In my opinion,…, For me,…"],
    ["Corrige: «I'm agree with you.»", "I agree with you."],
    ["Responde mostrando acuerdo con «I don't like Mondays.»", "Me neither. / I agree, Mondays are awful."],
    ["Transforma en desacuerdo educado: «No, you're wrong.»", "I see your point, but I don't really agree."],
    ["Completa: «I think reading is important ___ it helps you learn new words.»", "because."],
    ["Añade un ejemplo: «Sport is good for you.»", "For example, playing football helps you stay fit and make friends."],
    ["Escribe una pregunta para pedir la opinión de tu compañero.", "What do you think? / Do you agree? / What about you?"],
    ["Pide que te repitan algo de forma educada.", "Sorry, could you repeat that, please?"],
    ["Da tu opinión con pros y contras sobre «Homework at weekends».", "On the one hand, it helps us practise. On the other hand, we need time to rest. All in all, I think it should be short."],
    ["Prepara una respuesta de 30 segundos a «Is it better to live in a city or a village?».", "Opinión, dos razones y un ejemplo, por ejemplo: «It depends. I think a city is better for teenagers because there are more activities…»."],
  ],
  quiz: [
    ["«How about going to the beach?» sirve para…", ["proponer", "discrepar", "pedir repetición"], 0, "How about…? = ¿qué tal si…?"],
    ["«On the one hand… On the other hand…» sirve para…", ["dar pros y contras", "pedir algo", "despedirse"], 0, "Dos lados del tema."],
    ["Respuesta prudente:", ["It depends.", "Definitely!", "Of course not!"], 0, "Ves matices."],
    ["La entonación de «What do you think?» suele…", ["bajar al final", "subir al final", "ser plana"], 0, "Preguntas con wh-: entonación descendente."],
    ["«Let's agree to disagree» significa…", ["aceptar que pensamos distinto", "estar de acuerdo en todo", "dejar de hablar enfadados"], 0, "Cerrar con respeto un desacuerdo."],
  ],
  tarjetas: [
    ["Proponer", "Let's… / Why don't we…? / How about…?"],
    ["Pros y contras", "On the one hand… On the other hand… All in all,…"],
    ["Graduar", "Definitely! / It depends. / I'm not sure, but…"],
  ],
});
