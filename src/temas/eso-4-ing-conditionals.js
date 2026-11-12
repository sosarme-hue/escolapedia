// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Conditionals: zero, first, second and third",
  minutos: 40,
  objetivos: ["Formar los cuatro condicionales", "Distinguir situaciones reales, probables, imaginarias e imposibles", "Usar unless, as long as y I wish"],
  claves: ["if clause", "zero conditional", "first conditional", "second conditional", "third conditional", "unless", "I wish"],
  pregunta: {
    texto: "«If I win the lottery, I'll buy a house» y «If I won the lottery, I'd buy a house». ¿Quién cree más que va a ganar?",
    respuesta: "El primero. El <b>first conditional</b> (present + will) habla de algo <mark>posible y real</mark>: ha comprado un boleto. El <b>second conditional</b> (past + would) habla de algo <mark>imaginario o poco probable</mark>: está soñando despierto.",
  },
  bloques: [
    {
      html: `<h3>Zero conditional</h3><p><b>If + present simple, present simple</b>. Para <mark>verdades generales</mark> y hechos científicos: siempre que pasa A, pasa B. «If you heat ice, it melts». Aquí <i>if</i> equivale casi a <i>when</i>.</p>`,
      svg: L.frase("Zero conditional: If you heat ice, it melts", [
        ["If you heat ice,", "if + present", "var(--pen)"], ["it melts.", "present", "var(--leaf)"],
      ], "siempre es verdad"),
    },
    {
      html: `<h3>First conditional</h3><p><b>If + present simple, will + infinitivo</b>. Para situaciones <mark>reales y probables</mark> en el futuro: «If it rains tomorrow, we'll stay at home». Ojo: después de <i>if</i> nunca va <i>will</i>. También puede llevar modales: «If you finish early, you can go».</p>`,
      svg: L.frase("First conditional: If it rains, we will stay at home", [
        ["If it rains,", "if + present", "var(--pen)"], ["we'll stay home.", "will + inf.", "var(--red)"],
      ], "posible y real"),
    },
    {
      html: `<h3>Second conditional</h3><p><b>If + past simple, would + infinitivo</b>. Para situaciones <mark>imaginarias o poco probables</mark> en el presente o el futuro: «If I had wings, I would fly». Con <i>be</i> se puede usar <b>were</b> para todas las personas: «If I were you, I'd study more» (consejo).</p>`,
      svg: L.frase("Second conditional: If I had wings, I would fly", [
        ["If I had wings,", "if + past", "var(--pen)"], ["I would fly.", "would + inf.", "var(--inf)"],
      ], "imaginario"),
    },
    {
      html: `<h3>Third conditional</h3><p><b>If + past perfect, would have + participio</b>. Para situaciones <mark>imposibles</mark>: imaginamos un pasado distinto que ya no se puede cambiar. Sirve para lamentos y críticas: «If I had studied, I would have passed» (pero no estudié y suspendí).</p>`,
      svg: L.frase("Third conditional: If I had studied, I would have passed", [
        ["If I had studied,", "had + participle", "var(--pen)"], ["I would have passed.", "would have + part.", "var(--muted)"],
      ], "pasado imposible de cambiar"),
    },
    {
      html: `<h3>Unless, as long as y I wish</h3><p><b>Unless</b> = if… not: «You won't pass <i>unless</i> you study». <b>As long as / provided that</b> = siempre que. Para deseos usamos <mark>I wish + past</mark> (presente: «I wish I were taller») y <mark>I wish + past perfect</mark> (lamento del pasado: «I wish I hadn't said that»).</p>`,
      svg: L.filas("Unless, as long as e I wish", [
        ["unless", "= if not", "var(--red)"], ["as long as", "= siempre que", "var(--leaf)"],
        ["I wish + past", "deseo ahora", "var(--pen)"], ["I wish + had", "lamento pasado", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Los cuatro condicionales, de real a imposible",
    svg: L.columnas("Zero, first, second y third conditional con su estructura", [
      ["siempre verdad", "ZERO", ["if + present,", "present"], "var(--leaf)"],
      ["probable", "FIRST", ["if + present,", "will + inf."], "var(--pen)"],
      ["imaginario", "SECOND", ["if + past,", "would + inf."], "var(--inf)"],
      ["imposible (pasado)", "THIRD", ["if + had + part.,", "would have + part."], "var(--muted)"],
    ]),
  },
  video: { id: "zZfx5oM3BQU", titulo: "Todos los condicionales en inglés con ejemplos y ejercicios", canal: "Amigos Ingleses", vistas: 682417, megusta: 26500, busqueda: "condicionales en inglés zero first second third" },
  quiz: [
    { q: "«If you mix blue and yellow, you ___ green.»", o: ["get", "will get", "would get"], a: 0, e: "Verdad general: zero conditional." },
    { q: "«If it ___ sunny tomorrow, we'll go to the beach.»", o: ["will be", "is", "were"], a: 1, e: "Después de if, present simple (nunca will)." },
    { q: "«If I ___ a million euros, I'd travel the world.»", o: ["have", "had", "will have"], a: 1, e: "Situación imaginaria: second conditional (if + past)." },
    { q: "«If she had left earlier, she ___ the train.»", o: ["will catch", "would catch", "would have caught"], a: 2, e: "Pasado imposible: third conditional." },
    { q: "«You can't go out ___ you finish your homework.»", o: ["if", "unless", "as long"], a: 1, e: "Unless = if… not." },
  ],
  examen: [
    { q: "«If I ___ you, I'd apologise.»", o: ["am", "were", "will be"], a: 1, e: "Consejo con second conditional: If I were you…" },
    { q: "«I wish I ___ more free time.» (ahora)", o: ["have", "had", "will have"], a: 1, e: "Deseo sobre el presente: I wish + past." },
    { q: "¿Qué condicional habla de situaciones probables en el futuro?", o: ["Zero", "First", "Third"], a: 1, e: "First conditional: if + present, will." },
  ],
  feynman: ["La estructura de cada condicional", "La diferencia entre first y second conditional", "Por qué el third conditional habla de lo imposible", "Qué significa unless"],
  mapa: mapa("CONDITIONALS", "var(--eso)", [
    ["Zero", "facts: present + present", "var(--leaf)"],
    ["First", "real: present + will", "var(--pen)"],
    ["Second", "unreal: past + would", "var(--inf)"],
    ["Third", "past: had + would have", "var(--muted)"],
  ], 240),
  tarjetas: [
    ["Zero conditional", "If + present, present: verdades generales."],
    ["First conditional", "If + present, will + inf.: situaciones probables."],
    ["Second conditional", "If + past, would + inf.: situaciones imaginarias."],
    ["Third conditional", "If + past perfect, would have + participio: pasado imposible."],
    ["Unless", "Significa «if… not»: «Unless you hurry, you'll miss the bus»."],
  ],
  familias: ["Jugad a «What would you do if…?» durante la cena con situaciones divertidas.", "Pedidle una frase con third conditional sobre algo que cambiaría de la semana pasada.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: oraciones condicionales y expresión de hipótesis y deseos (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Cadena de condicionales: cada consecuencia es la condición del siguiente alumno.", "Encuesta «What would you do if…?» y presentación de resultados.", "Historias alternativas de personajes históricos con third conditional."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: conditionals", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: conditionals", url: "https://dictionary.cambridge.org/grammar/british-grammar/conditionals-and-wishes" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Puntuar bien las condicionales y cambiar el orden de las partes", "Usar los condicionales mixtos", "Expresar deseos y lamentos con I wish e If only"],
  bloques: [
    { tras: "Zero conditional", html: `<h3>La estructura: dos partes y una coma</h3><p>Toda condicional tiene una <b>condición</b> (la parte con <i>if</i>) y un <b>resultado</b> (la oración principal). Las dos pueden ir en cualquier orden, pero cambia la puntuación:</p><ul><li><b>If</b> + condición <b>, (coma)</b> resultado: «If you study, you'll pass».</li><li>Resultado <b>sin coma</b> <b>if</b> + condición: «You'll pass if you study».</li></ul><p>Recuerda la regla de oro: <mark>nunca will ni would en la parte del if</mark> (salvo usos especiales de cortesía como «If you would follow me…»).</p>${L.tb(["Tipo", "If…", "Resultado", "Situación"], [["0", "present simple", "present simple", "siempre verdad"], ["1", "present simple", "will + inf.", "real, probable"], ["2", "past simple", "would + inf.", "imaginaria, presente/futuro"], ["3", "past perfect", "would have + participio", "imposible, pasado"]])}` },
    { tras: "First conditional", html: `<h3>Variantes del first conditional</h3><p>En el resultado no siempre va <i>will</i>. También puede ir:</p><ul><li>Un <b>imperativo</b>: «If you see Tom, <b>tell</b> him to call me».</li><li>Un <b>modal</b>: «If it stops raining, we <b>can</b> go out», «If you feel ill, you <b>should</b> stay at home».</li><li><b>Going to</b>: «If they win, they're <b>going to</b> celebrate all night».</li></ul><p>Y en la condición puede ir el present continuous o el present perfect: «If you'<b>re looking</b> for Sam, he's in the library», «If you'<b>ve finished</b>, you can leave».</p>` },
    { tras: "Second conditional", html: `<h3>Were para todos y el consejo «If I were you»</h3><p>En el second conditional, el verbo <b>be</b> suele ir en <b>were</b> con todas las personas, sobre todo en inglés formal y en los exámenes: «If I <b>were</b> rich…», «If she <b>were</b> here…». En el habla informal también se oye <i>was</i>, pero en la expresión para dar consejos solo vale <i>were</i>: <mark>«If I were you, I would talk to her»</mark> (yo que tú, hablaría con ella).</p><p>Compara el first y el second: «If I <b>win</b> the match, I'll be happy» (es posible, juego mañana) / «If I <b>won</b> the lottery, I'd buy a house» (es muy improbable). La diferencia no es de tiempo, sino de <b>probabilidad</b> según el hablante.</p>` },
    { tras: "Third conditional", html: `<h3>Condicionales mixtos</h3><p>A veces la condición está en el pasado y el resultado en el presente (o al revés). Entonces se mezclan el tercer y el segundo tipo:</p><ul><li>Pasado → presente: «If I <b>had studied</b> Medicine, I <b>would be</b> a doctor now». (If + past perfect, would + infinitivo)</li><li>Presente → pasado: «If I <b>weren't</b> so shy, I <b>would have spoken</b> to her at the party». (If + past simple, would have + participio)</li></ul><p>Pista: fíjate en las <b>palabras de tiempo</b> como <i>now, today, yesterday, last night</i>; te dicen a qué momento pertenece cada parte.</p>` },
    { tras: "Unless, as long as y I wish", html: `<h3>Wish e If only, a fondo</h3>${L.tb(["Deseo sobre…", "Estructura", "Ejemplo"], [["el presente (no es así)", "wish + past simple", "I wish I <b>had</b> a dog. (no lo tengo)"], ["el pasado (lamento)", "wish + past perfect", "I wish I <b>hadn't said</b> that."], ["algo molesto que otro hace", "wish + would", "I wish you <b>would stop</b> shouting."], ["capacidad", "wish + could", "I wish I <b>could</b> fly."]])}<p><b>If only</b> funciona igual, pero es más intenso: «<b>If only</b> I had more time!» Otros nexos condicionales: <i>in case</i> (por si acaso: «Take an umbrella <b>in case</b> it rains»), <i>provided that</i>, <i>on condition that</i>, <i>suppose / supposing</i>.</p>` },
  ],
  videos: [
    ["Zero conditional", L.vid("Nql1Y_TuIEM", "Condicionales en inglés: explicación con ejemplos fácil", "Inglés Para Perezosos", 2853644)],
    ["Third conditional", L.vid("OyxF4grou0Y", "Los condicionales en inglés", "Alejo Lopera Inglés", 1583702)],
  ],
  ejemplos: [
    ["Completa: «If I (have) ___ more free time, I (learn) ___ to play the guitar.» (no tengo tiempo)", ["Es una situación imaginaria en el presente: second conditional.", "Condición: past simple → had.", "Resultado: would + infinitivo → would learn."], "If I had more free time, I would learn to play the guitar."],
    ["Escribe una oración del tercer tipo: «I didn't set the alarm. I was late.»", ["Imaginamos el pasado al revés: sí puse la alarma, no llegué tarde.", "Condición: past perfect → had set.", "Resultado: would have + participio, en negativa → wouldn't have been."], "If I had set the alarm, I wouldn't have been late."],
    ["Escribe un condicional mixto: «I didn't have breakfast this morning. Now I'm hungry.»", ["La condición está en el pasado: past perfect → had had.", "El resultado está en el presente (now): would + infinitivo.", "Negativa en el resultado: wouldn't be."], "If I had had breakfast, I wouldn't be hungry now."],
  ],
  errores: [
    "Poner will o would detrás de if: *if it will rain → if it rains.",
    "Olvidar la coma cuando el if va al principio.",
    "Usar *If I was you para dar consejos: se dice If I were you.",
    "Confundir unless (a menos que) con if… not y poner otra negación: *unless you don't study → unless you study.",
    "Mezclar mal el tercer tipo: *If I would have known → If I had known.",
  ],
  ejercicios: [
    ["Completa (zero): «If you (not water) ___ plants, they (die) ___.»", "If you don't water plants, they die."],
    ["Completa (first): «If you (not hurry) ___, you (miss) ___ the bus.»", "If you don't hurry, you'll miss the bus."],
    ["Reescribe con unless: «If you don't apologise, she won't talk to you.»", "Unless you apologise, she won't talk to you."],
    ["Completa (second): «What (you / do) ___ if you (find) ___ a wallet in the street?»", "What would you do if you found a wallet in the street?"],
    ["Da un consejo con If I were you: tu amigo está siempre cansado.", "If I were you, I would go to bed earlier."],
    ["Completa (third): «If we (leave) ___ earlier, we (not miss) ___ the train.»", "If we had left earlier, we wouldn't have missed the train."],
    ["Escribe un deseo: no sabes nadar y te gustaría.", "I wish I could swim. (También: I wish I knew how to swim.)"],
    ["Escribe un lamento: le gritaste a tu hermano.", "I wish I hadn't shouted at my brother. / If only I hadn't shouted at him."],
    ["Completa (mixto): «If she (take) ___ the job in London last year, she (live) ___ there now.»", "If she had taken the job in London last year, she would be living (would live) there now."],
    ["Completa con in case o if: «Take some money ___ you need a taxi.»", "in case: por si acaso lo necesitas."],
  ],
  quiz: [
    ["«If I ___ you, I'd tell the truth.»", ["were", "am", "will be"], 0, "If I were you…"],
    ["«I wish I ___ taller.» (presente)", ["were", "am", "will be"], 0, "Wish + pasado."],
    ["«If I had studied Law, I ___ a lawyer now.»", ["would be", "would have been", "will be"], 0, "Mixto: pasado → presente."],
    ["«Take a jacket ___ it gets cold.»", ["in case", "unless", "as long as"], 0, "Por si acaso."],
    ["«You'll pass ___ you study.» (sin coma)", ["if", "unless", "wish"], 0, "Si va detrás, sin coma."],
  ],
  tarjetas: [
    ["If I were you", "Para dar consejos: If I were you, I'd…"],
    ["Condicional mixto", "If + past perfect, would + infinitivo: If I had studied, I'd be a doctor now."],
    ["In case", "Por si acaso: Take an umbrella in case it rains."],
  ],
});
