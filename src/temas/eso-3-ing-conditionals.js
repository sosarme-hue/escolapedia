// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "First and second conditionals",
  minutos: 35,
  objetivos: ["Formar el zero, first y second conditional", "Distinguir situaciones reales o probables de situaciones imaginarias", "Usar unless, when y la coma correctamente en las condicionales"],
  claves: ["if", "zero conditional", "first conditional", "second conditional", "unless", "If I were you"],
  pregunta: {
    texto: "«If I win the match, I'll be happy» y «If I won the lottery, I'd buy a house». Las dos empiezan por «if». ¿Qué diferencia hay entre ganar un partido y ganar la lotería?",
    respuesta: "Ganar el partido es algo <mark>real y posible</mark>: usamos el <b>first conditional</b> (presente + will). Ganar la lotería es <mark>improbable o imaginario</mark>: usamos el <b>second conditional</b> (pasado + would). El tiempo verbal muestra cómo de real vemos la situación.",
  },
  bloques: [
    {
      html: `<h3>Cómo es una oración condicional</h3><p>Tiene dos partes: la <b>condición</b>, que empieza por <mark>if</mark>, y el <b>resultado</b>. El orden puede cambiar: «If it rains, we'll stay at home» = «We'll stay at home if it rains». Cuando la parte con <i>if</i> va <b>primero</b>, ponemos una <mark>coma</mark>; cuando va segunda, no. Hay varios tipos según lo probable que sea la condición.</p>`,
      svg: L.frase("Partes de una condicional: If it rains, we will stay at home", [
        ["If it rains,", "condición", "var(--pen)"], ["we'll stay", "resultado", "var(--red)"], ["at home.", "", "var(--line)"],
      ], "coma si if va primero"),
    },
    {
      html: `<h3>Zero conditional</h3><p>Para <b>verdades generales</b>, hechos científicos y cosas que siempre pasan: <mark>if + present simple, present simple</mark>. «If you heat ice, it melts», «If I drink coffee at night, I can't sleep». Aquí <i>if</i> significa casi lo mismo que <b>when</b> («siempre que»): «When you mix blue and yellow, you get green».</p>`,
      svg: L.filas("Zero conditional: verdades generales", [
        ["Ciencia", "If you heat ice, it melts.", "var(--inf)"], ["Hábito", "If I'm tired, I sleep.", "var(--pen)"], ["Color", "If you mix them, you get…", "var(--leaf)"],
      ], "if + present, present"),
    },
    {
      html: `<h3>First conditional</h3><p>Para situaciones <b>reales o probables</b> en el futuro y sus consecuencias: <mark>if + present simple, will + forma base</mark>. «If you study, you'<b>ll pass</b> the exam», «If it doesn't rain, we'<b>ll go</b> to the beach». Ojo: después de <i>if</i> va el <b>presente</b>, nunca will: «If I <b>see</b> him» (no «if I will see»). En el resultado también pueden ir <i>can, may, might</i> o un imperativo: «If you're cold, <b>close</b> the window».</p>`,
      svg: L.tabla("First conditional: if + presente, will + forma base", ["If…", "Result"], [
        ["you hurry,", "you'll catch it."], ["it's sunny,", "we'll go out."], ["I'm late,", "she'll be angry."],
      ], "var(--red)"),
    },
    {
      html: `<h3>Second conditional</h3><p>Para situaciones <b>imaginarias, improbables o imposibles</b> en el presente o el futuro: <mark>if + past simple, would + forma base</mark>. «If I <b>had</b> wings, I <b>would fly</b> to Japan», «If I <b>knew</b> the answer, I'<b>d tell</b> you» (pero no la sé). El pasado no indica tiempo pasado, sino <b>irrealidad</b>. Con el verbo be se usa <b>were</b> para todas las personas: «If she <b>were</b> here…».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una nube de pensamiento con alas: si tuviera alas volaría, una situación imaginaria">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="130" cy="70" rx="100" ry="46" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
        <circle cx="70" cy="132" r="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="56" cy="152" r="5" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="130" y="62" font-size="14" fill="var(--pen)">If I had wings,</text><text x="130" y="84" font-size="14" fill="var(--red)">I would fly.</text><text x="170" y="150" font-size="12" fill="var(--muted)">imaginario: no tengo alas</text></g></svg>`,
    },
    {
      html: `<h3>If I were you: dar consejos</h3><p>El second conditional se usa mucho para <b>dar consejos</b> poniéndose en el lugar del otro: <mark>If I were you, I would…</mark> «If I were you, I'<b>d talk</b> to the teacher», «If I were you, I <b>wouldn't buy</b> that phone». Es más suave que <i>You should</i>. También para <b>imaginar</b> y hacer preguntas hipotéticas: «What <b>would</b> you do if you <b>found</b> a wallet in the street?».</p>`,
      svg: L.dialogo("Pedir y dar consejo con If I were you", [
        ["Leo", "I've lost my phone. What should I do?", "var(--pen)"], ["Ana", "If I were you, I'd call it.", "var(--leaf)"], ["Ana", "I wouldn't panic!", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Los tres condicionales",
    svg: L.columnas("Zero, first y second conditional con su forma y su uso", [
      ["siempre · ciencia", "ZERO", ["if + present,", "present"], "var(--inf)"],
      ["real · probable", "FIRST", ["if + present,", "will + verb"], "var(--red)"],
      ["imaginario", "SECOND", ["if + past,", "would + verb"], "var(--pen)"],
    ]),
  },
  video: { id: "Nql1Y_TuIEM", titulo: "Condicionales en inglés: explicación con ejemplos fácil", canal: "Inglés Para Perezosos", vistas: 2853949, megusta: 0, busqueda: "first conditional second conditional" },
  quiz: [
    { q: "«If you heat water to 100 °C, it ___.»", o: ["boils", "will boil", "would boil"], a: 0, e: "Verdad general: zero conditional." },
    { q: "«If it ___ tomorrow, we'll stay home.»", o: ["will rain", "rains", "rained"], a: 1, e: "Tras if, present simple." },
    { q: "«If I ___ rich, I would travel the world.»", o: ["am", "were", "will be"], a: 1, e: "Second conditional: were." },
    { q: "«If you don't hurry, you ___ the bus.»", o: ["miss", "'ll miss", "'d miss"], a: 1, e: "First conditional: will." },
    { q: "«If I were you, I ___ apologise.»", o: ["will", "would", "am"], a: 1, e: "Consejo: If I were you, I'd…" },
  ],
  examen: [
    { q: "¿Qué condicional usamos para algo imaginario?", o: ["Zero", "First", "Second"], a: 2, e: "If + past, would." },
    { q: "«We'll go out ___ it stops raining.»", o: ["if", "unless", "would"], a: 0, e: "Condición: if." },
    { q: "«What ___ you do if you saw a ghost?»", o: ["will", "would", "do"], a: 1, e: "Pregunta hipotética: would." },
  ],
  feynman: ["Qué partes tiene una oración condicional", "Para qué sirve cada tipo de condicional", "Por qué después de if no va will", "Cómo se da un consejo con If I were you"],
  mapa: mapa("CONDITIONALS", "var(--eso)", [
    ["Zero", "always true", "var(--inf)"],
    ["First", "real · possible", "var(--red)"],
    ["Second", "imaginary · unlikely", "var(--pen)"],
    ["Advice", "If I were you…", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Zero conditional", "if + present, present: If you heat ice, it melts."],
    ["First conditional", "if + present, will: If it rains, I'll stay home."],
    ["Second conditional", "if + past, would: If I had money, I'd buy it."],
    ["If I were you", "Para dar consejos: If I were you, I'd…"],
    ["La coma", "Si if va primero, coma entre las dos partes."],
  ],
  familias: ["Jugad a «What would you do if…?» durante la cena con situaciones divertidas.", "Pedidle que haga cinco promesas con first conditional («If you…, I'll…»).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: oraciones condicionales de tipo 0, 1 y 2 para expresar hechos, hipótesis y consejos (RD 217/2022, Lengua Extranjera 3º; nivel B1 del MCER).",
    ideas: ["Cadena de condicionales: «If I go out, I'll…; if I…, I'll…».", "Encuesta «What would you do if…?» y presentación de resultados.", "Consultorio de problemas con If I were you."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: first and second conditionals", url: "https://learnenglishteens.britishcouncil.org/grammar/b1-grammar/first-conditional-and-second-conditional" },
    { t: "Cambridge Dictionary: conditionals", url: "https://dictionary.cambridge.org/grammar/british-grammar/conditionals-and-wishes" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar unless, when y as long as", "Elegir entre first y second conditional según el punto de vista"],
  bloques: [
    { tras: "Zero conditional", html: `<h3>If o when</h3><p>En el zero conditional, <i>if</i> y <i>when</i> son casi iguales. Pero con el futuro su significado cambia. <mark>If</mark> indica que algo <b>puede o no pasar</b>: «<b>If</b> I see Tom, I'll give him your message» (quizá no lo vea). <mark>When</mark> indica que algo <b>pasará seguro</b>: «<b>When</b> I see Tom, I'll give him your message» (lo voy a ver). Por eso decimos «<b>When</b> I finish school, I'll go to university» (acabaré seguro) y no «If I finish school». Las dos van seguidas de presente, nunca de will.</p>` },
    { tras: "First conditional", html: `<h3>Unless y as long as</h3><p><mark>Unless</mark> significa «a menos que» o «si no»: equivale a <b>if… not</b>. «You'll fail <b>unless</b> you study» = «You'll fail <b>if</b> you <b>don't</b> study». Como unless ya es negativo, el verbo que lo sigue va en <b>afirmativa</b>: «unless it rains» (no «unless it doesn't rain»). <mark>As long as</mark> y <b>provided that</b> significan «siempre que, con tal de que»: «You can borrow my bike <b>as long as</b> you're careful». Son muy útiles en negociaciones y normas: «You can go out <b>as long as</b> you're back by ten».</p>`, video: L.vid("PDtUTAwMGDQ", "Condicional cero en inglés: explicación fácil y ejemplos", "Francisco Ochoa Inglés Fácil", 2195034) },
    { tras: "Second conditional", html: `<h3>¿First o second?</h3><p>A veces la misma situación admite los dos condicionales; la elección depende de cómo de <b>probable</b> la ve el hablante:</p>${L.tb(["First (probable)", "Second (improbable)"], [["If I <b>get</b> a good mark, I'<b>ll</b> celebrate. (suelo sacar buenas notas)", "If I <b>got</b> a 10 in Physics, I'<b>d</b> be amazed. (es muy difícil)"], ["If it <b>snows</b> tomorrow, we'<b>ll</b> build a snowman. (lo dice el pronóstico)", "If it <b>snowed</b> in Seville, everybody <b>would</b> go out. (casi nunca nieva)"], ["If they <b>invite</b> me, I'<b>ll</b> go. (es posible)", "If they <b>invited</b> me to the Oscars, I'<b>d</b> go. (imposible)"]])}` },
    { tras: "If I were you: dar consejos", html: `<h3>Condicionales en un texto</h3><p>Las condicionales son perfectas para argumentar y escribir sobre <b>problemas y soluciones</b>. Por ejemplo, en un texto sobre el medio ambiente: «<b>If</b> we <b>don't</b> reduce plastic, the oceans <b>will</b> become even more polluted. <b>Unless</b> governments <b>act</b> now, many species <b>will</b> disappear. <b>If</b> everybody <b>used</b> public transport, cities <b>would</b> be much cleaner. <b>If</b> I <b>were</b> the mayor, I <b>would</b> create more bike lanes». Observa cómo el escritor usa el <mark>first conditional</mark> para consecuencias reales y probables, y el <mark>second</mark> para imaginar situaciones ideales.</p>` },
    { tras: "Cómo es una oración condicional", html: `<h3>Otros elementos del resultado</h3><p>En la parte del resultado no siempre va <i>will</i> o <i>would</i>. En el <b>first conditional</b> pueden aparecer otros modales: <mark>can, may, might, must, should</mark>: «If you finish early, you <b>can</b> go home», «If it's foggy, the plane <b>might</b> be late», «If you feel ill, you <b>should</b> see a doctor». También un <b>imperativo</b>: «If you see Ana, <b>tell</b> her to call me». En el <b>second conditional</b> puede ir <b>could</b> o <b>might</b> en lugar de would: «If I had more time, I <b>could</b> learn the guitar» (podría), «If you asked her, she <b>might</b> say yes» (quizá diría). Así se matiza la seguridad del resultado.</p>` },
  ],
  ejemplos: [
    ["Completa con el condicional adecuado: «If you (not / water) ___ plants, they (die) ___.»", ["Es una verdad general que siempre ocurre.", "Zero conditional: present + present."], "If you don't water plants, they die."],
    ["Completa: «If I (find) ___ a wallet in the street, I (take) ___ it to the police.» (situación imaginaria)", ["Es una situación hipotética: second conditional.", "Condición en past simple: found.", "Resultado con would: would take."], "If I found a wallet in the street, I would take it to the police."],
    ["Reescribe con unless: «If you don't hurry, you'll be late.»", ["Unless = if… not.", "El verbo tras unless va en afirmativa: hurry.", "El resultado no cambia."], "Unless you hurry, you'll be late."],
  ],
  errores: [
    "Poner will después de if: *If it will rain → If it rains.",
    "Poner would en las dos partes: *If I would have money, I would… → If I had money, I would…",
    "Olvidar la coma cuando if va al principio.",
    "Usar negativa después de unless: *unless you don't study → unless you study.",
    "Usar was en vez de were en If I were you (en registro cuidado).",
  ],
  ejercicios: [
    ["Completa (zero): «If you (press) ___ this button, the machine (stop) ___.»", "press, stops."],
    ["Completa (first): «If we (leave) ___ now, we (arrive) ___ on time.»", "leave, will arrive."],
    ["Completa (first): «If she (not / call) ___ me, I (call) ___ her.»", "doesn't call, will call."],
    ["Completa (second): «If I (be) ___ taller, I (play) ___ basketball.»", "were, would play."],
    ["Completa (second): «What (you / do) ___ if you (meet) ___ a famous singer?»", "would you do, met."],
    ["Corrige: «If I will see her, I will tell her.»", "If I see her, I will tell her."],
    ["Reescribe con unless: «If you don't wear a coat, you'll get cold.»", "Unless you wear a coat, you'll get cold."],
    ["Elige if o when: «___ I'm eighteen, I'll learn to drive.»", "When. Cumplir dieciocho es seguro."],
    ["Da un consejo con If I were you a alguien que quiere aprobar inglés.", "If I were you, I'd watch series in English with subtitles."],
    ["Escribe dos frases sobre el medio ambiente: una con first conditional y otra con second.", "Por ejemplo: «If we recycle more, we'll reduce waste.» / «If all cars were electric, the air would be cleaner.»"],
  ],
  quiz: [
    ["«You can't go ___ you finish your homework.»", ["unless", "if", "when"], 0, "Unless = si no."],
    ["«___ I finish school, I'll travel.» (es seguro)", ["When", "If", "Unless"], 0, "Algo seguro: when."],
    ["«If I had more time, I ___ read more.»", ["would", "will", "am"], 0, "Second conditional."],
    ["«You can stay ___ you're quiet.»", ["as long as", "unless", "would"], 0, "Con tal de que."],
    ["«If you see Ana, ___ her I'm here.»", ["tell", "you would tell", "told"], 0, "Imperativo en el resultado."],
  ],
  tarjetas: [
    ["Unless", "A menos que = if… not: unless you hurry."],
    ["When / if + futuro", "When = seguro; if = posible. Las dos van con presente."],
    ["As long as", "Siempre que, con tal de que."],
  ],
});

// Nivel libro (3º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso3L6").libro(module.exports, {
  lectura: ["Si yo fuera alcalde", `<p>Un instituto de Girona participa en un proyecto europeo sobre ciudades sostenibles. Cada alumno graba un vídeo en inglés titulado <i>«If I were the mayor…»</i>. Martí empieza así: <i>«If I were the mayor, I would close the city centre to cars and I would plant thousands of trees. People would walk more and the air would be cleaner.»</i> Su compañera Aina es más práctica: <i>«If we use public transport this week, we'll save a lot of CO₂. And if you turn off the lights when you leave a room, you save energy.»</i></p><p>Los dos usan <b>if</b>, pero no hablan del mismo tipo de situación. Martí <b>imagina</b>: no es alcalde y seguramente no lo será pronto, así que usa el <b>second conditional</b> (<i>were… would</i>). Aina habla de algo <b>real y posible</b> para esta semana, con el <b>first conditional</b> (<i>use… will save</i>), y de una verdad general, con el <b>zero conditional</b> (<i>turn off… save</i>).</p><p>Las oraciones condicionales sirven para hacer planes, avisar, amenazar, prometer, dar consejos, soñar y razonar sobre consecuencias. En este tema aprenderás a construir los tres tipos, a elegir entre ellos según lo probable que sea la situación y a usar <i>unless, when, as long as</i> e <i>If I were you</i>. Al final, tú también podrás grabar tu propuesta para mejorar tu ciudad.</p>`],
  mas: [
    ["<h3>Otros elementos del resultado</h3>", `<p>En el zero conditional la parte del resultado también puede ser un imperativo cuando damos instrucciones generales: «If the alarm rings, <b>leave</b> the building», «If you feel sick, <b>tell</b> a teacher». Es muy típico de los carteles y de los manuales.</p>`],
    ["<h3>Unless y as long as</h3>", `<p>Como <b>unless</b> ya contiene la negación, el verbo que lo sigue va en afirmativa: «I'll go <b>unless</b> it <b>rains</b>» (= if it doesn't rain), no «unless it doesn't rain». Otras expresiones parecidas a <i>as long as</i> son <b>provided that</b> y <b>on condition that</b>, más formales, que aparecen en contratos y normas: «You can use the lab <b>provided that</b> a teacher is present». Con todas ellas, igual que con <i>if</i>, el verbo va en presente aunque hablemos del futuro.</p>`],
    ["<h3>If o when</h3>", `<p>La diferencia es de <b>seguridad</b>: <i>when</i> presenta algo que ocurrirá con certeza («<b>When</b> I finish school, I'll go to university»: terminaré el instituto), mientras que <i>if</i> presenta algo que puede ocurrir o no («<b>If</b> I pass all my exams, I'll go to university»). En las dos, el verbo que sigue al conector va en present simple.</p>`],
    ["<h3>¿First o second?</h3>", `<p>A veces la misma situación puede expresarse con los dos, y la elección muestra lo que piensa el hablante. Un alumno que se ha preparado bien dirá «If I pass, I'll celebrate»; uno que no ha estudiado nada dirá «If I passed, I'd be amazed». Pregúntate siempre: ¿lo veo posible o lo estoy imaginando?</p>`],
    ["<h3>Cómo es una oración condicional</h3>", `<p>El orden de las dos partes puede cambiar sin que cambie el significado: «If it rains, we'll stay home» = «We'll stay home if it rains». Lo único que cambia es la <b>coma</b>: se pone cuando la oración con <i>if</i> va primero y no se pone cuando va segunda. En la conversación también se responde a menudo solo con la parte de <i>if</i>: «When will you come?» «<b>If I finish early.</b>»</p>`],
    ["<h3>Zero conditional</h3>", `<p>Es el condicional de las <b>ciencias</b>, las <b>instrucciones</b> y las <b>costumbres</b>: «If you mix blue and yellow, you get green», «If you click here, a new window opens», «If I'm tired, I go to bed early». Las dos partes van en presente porque el resultado <mark>siempre</mark> se cumple. Si puedes cambiar <i>if</i> por <i>when</i> o <i>whenever</i> (cada vez que) sin cambiar el sentido, es un zero conditional.</p>`],
    ["<h3>First conditional</h3>", `<p>En la parte del resultado no siempre aparece <i>will</i>: también podemos usar un modal o un imperativo. «If you finish early, you <b>can</b> go», «If it's sunny, we <b>might</b> go to the beach», «If you see Leo, <b>tell</b> him to call me». Lo que no cambia es la parte de <i>if</i>, que va siempre en <b>present simple</b>, aunque hable del futuro: «If it <b>rains</b> tomorrow», nunca «if it will rain».</p>`],
    ["<h3>Second conditional</h3>", `<p>Aunque la parte de <i>if</i> va en pasado, el second conditional <b>no habla del pasado</b>, sino de situaciones irreales o poco probables en el presente o el futuro. «If I <b>had</b> a car, I <b>would drive</b> to school» significa que ahora no tengo coche. La contracción de <i>would</i> es <b>'d</b> («I'd travel») y la negativa, <b>wouldn't</b>. En las preguntas, <i>would</i> va delante del sujeto: «What <b>would</b> you <b>do</b> if you won the lottery?».</p>`],
    ["<h3>If I were you: dar consejos</h3>", `<p>Otras fórmulas parecidas para aconsejar: «<b>If I were in your shoes</b>, I'd…» (si estuviera en tu lugar) y «<b>I wouldn't</b> worry if I were you». También puedes responder a un problema con una pregunta: «Why don't you talk to her?». Recuerda que en esta expresión se usa <i>were</i> también con I.</p>`],
    ["<h3>Condicionales en un texto</h3>", `<p>En un ensayo de opinión, el second conditional sirve para proponer soluciones imaginarias («If schools started later, students would sleep better») y el first conditional, para advertir de consecuencias reales («If we don't act now, the problem will get worse»). Combinarlos da fuerza a los argumentos.</p>`],
  ],
  svgs: [
    ["<h3>Unless y as long as</h3>", "Unless y as long as", [["unless = if… not", "Unless you hurry, you'll be late."], ["as long as", "You can go as long as you're back."]], "a menos que · siempre que"],
    ["<h3>Otros elementos del resultado</h3>", "Qué puede ir en el resultado de una condicional", [["will", "If it rains, we'll stay."], ["modal", "If you finish, you can go."], ["imperativo", "If you see her, call me."]]],
    ["<h3>If o when</h3>", "If frente a when", [["if: quizá ocurra", "If I see her, I'll tell her."], ["when: ocurrirá seguro", "When I see her, I'll tell her."]], "posible o seguro"],
    ["<h3>¿First o second?</h3>", "First o second conditional según la probabilidad", [["first: posible", "If I pass, I'll celebrate."], ["second: improbable", "If I won, I'd buy a house."], ["second: irreal", "If I were a bird, I'd fly."]]],
    ["<h3>Condicionales en un texto</h3>", "Condicionales para argumentar", [["advertir", "If we don't act, it'll get worse."], ["proponer", "If schools…, students would…"], ["aconsejar", "If I were you, I'd…"]]],
  ],
  bloques: [
    { tras: "<h3>First conditional</h3>", html: `<h3>Avisos, amenazas y promesas</h3><p>El first conditional es la estructura natural para hablar de las <b>consecuencias</b> de nuestras acciones en situaciones reales, por eso aparece constantemente en la vida diaria:</p><ul><li><b>Avisos</b>: «If you touch that, you<b>'ll burn</b> yourself», «Be careful! If you run, you'll fall».</li><li><b>Amenazas</b> (a menudo de padres y profesores): «If you don't tidy your room, you <b>won't go</b> out on Saturday».</li><li><b>Promesas</b>: «If you help me with maths, I<b>'ll help</b> you with English».</li><li><b>Negociaciones y ofertas</b>: «If you buy two, you'll get one free».</li><li><b>Planes que dependen de algo</b>: «If the weather is good, we'll have a picnic».</li></ul><p>Las preguntas se forman en la parte del resultado: «What <b>will</b> you <b>do</b> if you don't pass?», «<b>Will</b> you <b>come</b> if I invite you?». Fíjate en que la parte de <i>if</i> sigue en presente aunque toda la frase sea pregunta. Y en negativa, puedes poner la negación en cualquiera de las dos partes: «If you <b>don't</b> study, you<b>'ll fail</b>» / «If you study, you <b>won't fail</b>».</p>`, svg: ["Usos del first conditional", [["aviso", "If you run, you'll fall."], ["amenaza", "If you don't…, you won't…"], ["promesa", "If you help me, I'll help you."], ["pregunta", "What will you do if…?"]], "consecuencias reales"] },
    { tras: "<h3>Second conditional</h3>", html: `<h3>Were, could y might en el second conditional</h3><p>En el second conditional el verbo <b>be</b> suele ir en la forma <b>were</b> para todas las personas: «If I <b>were</b> rich…», «If she <b>were</b> here…». En la conversación informal muchos nativos dicen «If I <b>was</b>…», y es aceptable, pero en los exámenes y en la expresión fija <i>If I were you</i> conviene usar <i>were</i>.</p><p>En la parte del resultado, además de <i>would</i>, podemos usar <b>could</b> (podría, tendría la posibilidad) y <b>might</b> (quizá, menos seguro):</p><ul><li>«If I had more money, I <b>would</b> buy a new bike» (lo haría seguro).</li><li>«If I had more money, I <b>could</b> buy a new bike» (tendría la posibilidad).</li><li>«If I had more money, I <b>might</b> buy a new bike» (quizá lo haría).</li></ul><p><i>Could</i> también puede aparecer en la parte de <i>if</i> con el sentido de «si pudiera»: «If I <b>could</b> fly, I'd visit every country in the world», «If I <b>could</b> speak Chinese, I'd work in Beijing». Con estas formas puedes expresar sueños, deseos y planes imaginarios con muchos matices distintos.</p>`, svg: ["Variantes del second conditional", [["were con todos", "If I were rich…"], ["would", "I would buy it. (seguro)"], ["could", "I could buy it. (podría)"], ["might", "I might buy it. (quizá)"]]] },
    { html: `<h3>Las condicionales en inglés y en español</h3><p>Las condicionales del inglés tienen equivalentes claros en español, pero los tiempos verbales no coinciden y eso provoca muchos errores:</p><ul><li><b>First conditional</b>: «Si llueve, nos quedaremos en casa» → «If it <b>rains</b>, we<b>'ll stay</b> home». Igual que en español, después de «si» va el presente, nunca el futuro: «si lloverá» es tan incorrecto como «if it will rain».</li><li><b>Second conditional</b>: «Si tuviera dinero, viajaría» → «If I <b>had</b> money, I <b>would travel</b>». Donde el español usa el <b>imperfecto de subjuntivo</b> (tuviera, fuera, pudiera), el inglés usa el <b>past simple</b> (had, were, could). Donde el español usa el <b>condicional</b> (viajaría), el inglés usa <b>would</b> + verbo.</li><li>Un error típico es poner <i>would</i> en las dos partes, como en el español coloquial («si tendría…»): «If I would have money» es incorrecto.</li><li>«A menos que» o «si no» es <b>unless</b>: «No iré a menos que vengas» → «I won't go <b>unless</b> you come».</li><li>«Siempre que» o «con tal de que» es <b>as long as</b>: «Puedes salir siempre que vuelvas a las diez» → «You can go out <b>as long as</b> you're back by ten».</li></ul><p>Antes de traducir, decide primero si la situación es real y posible (first) o imaginaria (second); después aplica los tiempos del inglés.</p>`, svg: ["Del español al inglés con condicionales", [["si llueve…", "If it rains, I'll stay."], ["si tuviera…", "If I had, I'd travel."], ["a menos que", "unless"], ["siempre que", "as long as"]], "tiempos de cada parte"] },
  ],
  videos: [["<h3>Second conditional</h3>", "condA"], ["<h3>If o when</h3>", "condB"]],
  grupos: [4, 3, 4, 2],
  ejemplos: [
    ["Escribe una amenaza y una promesa con first conditional: una madre a su hijo que no quiere ordenar su cuarto.", ["Amenaza: if + negativa en presente, resultado negativo con won't.", "Promesa: if + presente, resultado positivo con will."], "«If you <b>don't tidy</b> your room, you <b>won't go</b> to the party.» / «If you <b>tidy</b> it now, I<b>'ll take</b> you for an ice cream.»"],
    ["Completa con would, could o might según el sentido: «If I had a dog, I ___ take it for walks every day (seguro).» / «If I won a prize, I ___ go to Disneyland (quizá).»", ["Seguro → would.", "Posibilidad menos segura → might."], "I <b>would</b> take it for walks · I <b>might</b> go to Disneyland."],
    ["Traduce: «Si pudiera vivir en cualquier país, viviría en Nueva Zelanda.»", ["Situación imaginaria: second conditional.", "«Si pudiera» → If I could.", "«Viviría» → I would live."], "If I <b>could</b> live in any country, I<b>'d live</b> in New Zealand."],
  ],
  errores: ["Poner would en la parte de if: *If I would have money, I would travel → If I had money, I would travel."],
  niveles: "bbbbbmmbmm",
  ejercicios: [
    ["b", "Escribe en forma contraída: I would, she would not, they will, we will not.", "I'd, she wouldn't, they'll, we won't."],
    ["b", "Completa (zero): «Ice (melt) ___ if you (leave) ___ it in the sun.»", "Ice <b>melts</b> if you <b>leave</b> it in the sun."],
    ["b", "Completa (first): «If you (study) ___, you (pass) ___.»", "If you <b>study</b>, you<b>'ll pass</b>."],
    ["b", "Completa (second): «If I (have) ___ wings, I (fly) ___ to school.»", "If I <b>had</b> wings, I<b>'d fly</b> to school."],
    ["b", "Añade la coma donde haga falta: «If you're hungry you can eat a sandwich.» / «You can eat a sandwich if you're hungry.»", "If you're hungry<b>,</b> you can eat a sandwich. / La segunda no lleva coma."],
    ["b", "Completa con unless o if: «I'll be angry ___ you're late again.»", "<b>if</b> (me enfadaré si llegas tarde)."],
    ["m", "Escribe la pregunta del first conditional: (what / you / do / if / the bus / not come)?", "What <b>will</b> you <b>do</b> if the bus <b>doesn't come</b>?"],
    ["m", "Escribe la pregunta del second conditional: (where / you / live / if / you / can / choose)?", "Where <b>would</b> you <b>live</b> if you <b>could</b> choose?"],
    ["m", "Elige first o second: «If I (see / saw) a shark, I (will / would) swim away as fast as possible.» (estás de vacaciones en un lugar sin tiburones)", "If I <b>saw</b> a shark, I <b>would</b> swim away. Es una situación improbable: second."],
    ["m", "Reescribe con unless: «If he doesn't apologise, I won't speak to him.»", "I won't speak to him <b>unless</b> he apologises."],
    ["m", "Escribe dos avisos con first conditional para un cartel de piscina.", "Ejemplo: «If you run, you'll slip.» «If you dive in the shallow end, you'll hurt yourself.»"],
    ["m", "Completa con could o might: «If I had more time, I ___ learn to play the guitar.» (tendría la posibilidad)", "<b>could</b>."],
    ["m", "Elige if o when: «___ the film finishes, we'll have dinner.» (la película terminará seguro)", "<b>When</b>."],
    ["m", "Completa con as long as o unless: «You can borrow my bike ___ you look after it.»", "<b>as long as</b> (con tal de que)."],
    ["m", "Da un consejo con If I were you a alguien que se aburre los fines de semana.", "Ejemplo: «If I were you, I'd join a sports club.»"],
    ["m", "Transforma en second conditional: «I don't have a phone, so I can't call you.»", "If I <b>had</b> a phone, I <b>could</b> call you."],
    ["a", "Corrige los cuatro errores: «If I will finish early, I call you. If I would be rich, I will buy a big house. Unless you don't hurry, you'll be late.»", "If I <b>finish</b> early, I<b>'ll call</b> you · If I <b>were</b> rich, I <b>would buy</b> a big house · <b>Unless you hurry</b> (unless ya es negativo)."],
    ["a", "Explica la diferencia: «If I get the job, I'll move to London.» / «If I got the job, I'd move to London.»", "La primera ve la situación como posible y real (first). La segunda la ve como improbable o imaginaria (second)."],
    ["a", "Traduce: «Si fuera tú, no le diría nada. A menos que te pregunte, claro.»", "If I were you, I wouldn't tell him anything. Unless he asks you, of course."],
    ["a", "Escribe una cadena de 4 frases encadenadas con first conditional que empiece con «If I wake up late tomorrow…».", "Ejemplo: «If I wake up late tomorrow, I'll miss the bus. If I miss the bus, I'll be late for school. If I'm late, I'll miss the test. If I miss the test, I'll have to do it on Friday.»"],
    ["a", "Escribe un párrafo de 60 palabras: «If I were the head of my school…».", "Modelo: «If I were the head of my school, I would start classes at nine, because students would sleep better. I would build a bigger library and I would organise more trips. If students behaved well, they could choose music for the breaks. I wouldn't give homework at weekends, so families could spend more time together.»"],
    ["a", "Clasifica y justifica: a) If you heat ice, it melts. b) If you heat the soup, I'll set the table. c) If I lived in Iceland, I'd see the northern lights.", "a) Zero: verdad general. b) First: situación real del futuro inmediato. c) Second: situación imaginaria."],
    ["a", "Escribe tres preguntas imaginarias para entrevistar a un compañero (What would you do if…?) y respóndelas.", "Ejemplo: «What would you do if you found a wallet? — I'd take it to the police.» «Where would you go if you could travel in time? — I'd go to Ancient Egypt.» «Who would you invite if you could have dinner with anyone? — I'd invite Rosalía.»"],
    ["a", "Explica por qué se dice «If I were you» y no «If I was you» en un examen.", "Porque en el second conditional be adopta la forma were con todas las personas, y la expresión fija para aconsejar es If I were you; was es informal."],
    ["a", "Escribe un diálogo de 4 líneas en el que dos amigos negocian con first conditional (si tú haces esto, yo haré aquello).", "Ejemplo: «A: If you lend me your bike, I'll lend you my console. B: OK, but only if you bring it back on Sunday. A: If I don't, you can keep my console for a week! B: Deal!»"],
    ["a", "Reescribe sin cambiar el sentido: «You won't get fit if you don't exercise.» → «Unless…»", "<b>Unless you exercise</b>, you won't get fit."],
  ],
  cuartas: ["boiled", "rain", "be", "missed", "do", "while", "Would", "did", "if not", "telling", "Ninguno", "will", "did"],
  quiz: [
    ["«If you mix red and white, you ___ pink.»", ["get", "will got", "would get", "got"], 0, "Verdad general: zero conditional."],
    ["«If you ___ me, I'll help you.»", ["will help", "help", "helped", "would help"], 1, "Tras if, en first conditional: present simple."],
    ["«What ___ you do if you lost your phone?»", ["will", "would", "do", "did"], 1, "Situación imaginaria: would."],
    ["«If I ___ you, I'd tell the truth.»", ["am", "was being", "were", "would be"], 2, "If I were you."],
    ["«I won't go ___ you come with me.»", ["if", "unless", "when", "as long as"], 1, "Unless = a menos que."],
    ["«If I had more time, I ___ learn French.» (podría)", ["can", "could", "will", "must"], 1, "Posibilidad en el second: could."],
    ["«If it's sunny tomorrow, we ___ go to the beach.» (quizá)", ["might", "would", "did", "are"], 0, "Posibilidad en el first: might."],
    ["¿Dónde va la coma? «If you're cold ___ close the window.»", ["después de If", "después de cold", "después de close", "no lleva"], 1, "La oración con if va primero: coma tras ella."],
    ["«___ you see Tom, give him this.»", ["If", "Unless", "Would", "Will"], 0, "Condición posible con imperativo en el resultado."],
    ["«If I ___ fly, I'd go to Australia.»", ["can", "could", "would", "will"], 1, "Si pudiera: if I could."],
  ],
  examen: [
    ["«If you don't stop, I ___ tell the teacher!» (amenaza)", ["will", "would", "am", "did"], 0, "Amenaza real: first conditional."],
    ["«Si tuviera tiempo, te ayudaría» es…", ["If I have time, I'll help you.", "If I had time, I would help you.", "If I would have time, I helped you.", "If I had time, I will help you."], 1, "Second conditional: past + would."],
    ["«You can come ___ you bring a present.»", ["unless", "as long as", "would", "if not"], 1, "As long as = siempre que."],
    ["¿Cuál es correcta?", ["If it will snow, we'll ski.", "If it snows, we'll ski.", "If it snowed, we'll ski.", "If it snows, we'd ski."], 1, "First conditional: present + will."],
    ["«If she ___ harder, she would pass.»", ["studies", "studied", "would study", "will study"], 1, "Second conditional: past simple tras if."],
  ],
  tarjetas: [
    ["First: usos", "Avisos, amenazas, promesas y planes que dependen de algo."],
    ["Second: could / might", "could = podría; might = quizá: If I had time, I could…"],
    ["Si tuviera…, …-ría", "If + past simple, would + verbo: If I had…, I'd…"],
    ["Nunca would tras if", "*If I would have → If I had."],
  ],
  glosario: [
    ["conditional sentence", "Oración condicional: una condición (if) y un resultado."],
    ["if clause", "Parte de la condición, introducida por if."],
    ["main clause", "Parte del resultado."],
    ["zero conditional", "If + presente, presente: verdades generales."],
    ["first conditional", "If + presente, will + verbo: situaciones reales y posibles."],
    ["second conditional", "If + pasado, would + verbo: situaciones imaginarias o improbables."],
    ["unless", "A menos que, si no."],
    ["as long as", "Siempre que, con tal de que."],
    ["when", "Cuando: para algo que ocurrirá seguro."],
    ["would / 'd", "Auxiliar del condicional: I would go, I'd go."],
    ["were", "Forma de be en el second conditional para todas las personas."],
    ["warning", "Aviso de una consecuencia: If you touch it, you'll burn yourself."],
    ["promise", "Promesa: If you help me, I'll help you."],
    ["imaginary situation", "Situación irreal o poco probable."],
  ],
  situacion: {
    titulo: "Si yo gobernara mi ciudad",
    reto: "Vuestra clase participa en un proyecto europeo de ciudades sostenibles. Cada grupo graba un vídeo de dos minutos en inglés con propuestas imaginarias para mejorar la ciudad y consejos reales para los vecinos.",
    pasos: ["En grupos, elegid un problema de la ciudad (tráfico, basura, ruido, zonas verdes) y buscad datos.", "Escribid 4 propuestas imaginarias con second conditional («If we were the council, we would…»).", "Escribid 4 consejos y avisos reales con first y zero conditional («If you recycle, you save…»).", "Revisad los guiones: tiempos de cada parte, comas, unless y as long as.", "Grabad el vídeo y presentadlo; la clase vota la propuesta más original."],
    producto: "Un vídeo de dos minutos con propuestas imaginarias y consejos reales para la ciudad.",
    evaluacion: ["Usa los tres tipos de condicional con los tiempos correctos.", "Elige el tipo de condicional según lo probable que sea la situación.", "Usa unless, when y as long as con sentido.", "Habla con fluidez y pronunciación comprensible."],
  },
  familias: ["Jugad a «What would you do if…?»: cada uno inventa una situación imaginaria y los demás responden."],
  saberes: "expressió de condicions, hipòtesis, advertiments i consells amb oracions condicionals (tipus 0, 1 i 2).",
  minutos: 95,
});
