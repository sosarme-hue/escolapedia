// Inglés 6º de Primaria: modal verbs can, must, should. En inglés con apoyo en castellano. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM } = require("./_pri6d");

// Tres señales: obligación, prohibición y consejo.
const senales = svg("Tres señales: must wear a helmet, mustn't swim, should drink water", `
  <circle cx="50" cy="70" r="32" fill="${AZ}"/><path d="M34 76 q 16 -26 32 0 z" fill="#fff"/><path d="M32 78 h 36" stroke="#fff" stroke-width="3"/>
  <circle cx="130" cy="70" r="32" fill="#fff" stroke="${RO}" stroke-width="7"/><path d="M110 78 q 5 -6 10 0 t 10 0 t 10 0 t 10 0" fill="none" stroke="var(--water)" stroke-width="3"/><circle cx="126" cy="62" r="5" fill="var(--ink)"/><path d="M107 92 L 153 48" stroke="${RO}" stroke-width="6"/>
  <rect x="180" y="38" width="64" height="64" rx="10" fill="${VE}" fill-opacity=".2" stroke="${VE}" stroke-width="3"/><path d="M200 50 h 24 l -4 42 h -16 z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/><path d="M202 66 h 20 l -2.5 26 h -15 z" fill="var(--water)" fill-opacity=".6"/>
  ${tx(50, 122, "must", { s: 13, c: AZ })}${tx(130, 122, "mustn't", { s: 13, c: RO })}${tx(212, 122, "should", { s: 13, c: VE })}
  ${tx(50, 140, "obligación", { s: 10, c: "var(--muted)" })}${tx(130, 140, "prohibición", { s: 10, c: "var(--muted)" })}${tx(212, 140, "consejo", { s: 10, c: "var(--muted)" })}`);

module.exports = tema({
  materia: "Inglés",
  titulo: "Modal verbs: can, must, should",
  objetivos: ["Use can and can't for ability, permission and possibility", "Use must and mustn't for rules and obligation", "Use should and shouldn't to give advice (consejos)", "Remember the grammar of modal verbs: no -s, no to, no do"],
  claves: ["modal verbs", "can / can't", "could", "must / mustn't", "have to", "should / shouldn't", "ability", "permission", "obligation", "advice"],
  pregunta: [
    "Tres frases: «Puedo nadar», «Debes llevar casco» y «Deberías beber agua». ¿Qué diferencia hay entre «debes» y «deberías»?",
    "«Debes» es una <mark>obligación</mark> (una norma): en inglés, <b>You must wear a helmet</b>. «Deberías» es un <mark>consejo</mark>: <b>You should drink water</b>. Y «puedo» es una <mark>capacidad</mark>: <b>I can swim</b>. Los tres son verbos modales.",
  ],
  bloques: [
    ["What are modal verbs?", `<p><mark>Modal verbs</mark> are special verbs that go before another verb to add a meaning: ability, permission, obligation or advice. The most common are <b>can</b>, <b>must</b> and <b>should</b>.</p><p>They have three golden rules: <b>1)</b> the same form for all persons: «he <b>can</b>», not «he cans»; <b>2)</b> the next verb has no <i>to</i>: «I can swim», not «I can to swim»; <b>3)</b> no <i>do/does</i> in negatives and questions: «I <b>can't</b>», «<b>Can</b> you…?». <b>En castellano:</b> son como «poder» y «deber», pero sin conjugar.</p>`,
      L.filas("Tres reglas de los verbos modales", [["Same form", "he can · she must (no -s)", AZ], ["No to", "I can swim (not can to swim)", VE], ["No do", "Can you…? · I can't", RO]], "Golden rules")],
    ["Can: ability", `<p>We use <mark>can</mark> to talk about <b>ability</b> (capacidad, saber hacer algo): «I <b>can</b> ride a bike», «My sister <b>can</b> speak three languages», «Penguins <b>can't</b> fly, but they <b>can</b> swim very well».</p><p>For the <b>past</b> we use <mark>could / couldn't</mark>: «When I was five I <b>could</b> swim, but I <b>couldn't</b> read». Questions and short answers: «<b>Can</b> you play the guitar?» – «Yes, I can. / No, I can't». <b>En castellano:</b> «can» traduce «sé» o «puedo»: «I can swim» = «sé nadar».</p>`,
      L.tabla("Can para capacidades", ["", "Example"], [["+", "I can swim."], ["−", "Penguins can't fly."], ["?", "Can you skate?"], ["past", "I could read at 6."]], AZ)],
    ["Can: permission and requests", `<p>We also use <mark>can</mark> to ask for and give <b>permission</b> (permiso): «<b>Can</b> I go to the toilet, please?» – «Yes, you can». «You <b>can't</b> use your phone in class». And to make <b>requests</b> (pedir cosas): «<b>Can</b> you help me, please?».</p><p>A more polite way is <mark>could</mark>: «<b>Could</b> I open the window?», «<b>Could</b> you pass me the salt, please?». <b>Consejo:</b> en clase, pedir las cosas con <i>Can I…, please?</i> o <i>Could I…?</i> es muy educado.</p>`,
      L.dialogo("Pedir permiso en clase", [["Ana", "Can I open the window, please?", AZ], ["Teacher", "Yes, of course you can.", RO], ["Leo", "Could you help me, please?", AZ], ["Teacher", "Sure!", RO]])],
    ["Must and mustn't: rules", `<p>We use <mark>must</mark> for <b>obligation</b> and strong rules: «You <b>must</b> wear a seat belt», «Students <b>must</b> be on time». We use <mark>mustn't</mark> (must not) for <b>prohibition</b> (prohibido): «You <b>mustn't</b> run in the corridor», «You <b>mustn't</b> feed the animals».</p><p><b>Careful:</b> <i>mustn't</i> means «it is forbidden», not «it isn't necessary». <b>En castellano:</b> «you must» = «debes / tienes que»; «you mustn't» = «no debes / está prohibido».</p>`,
      senales, "in9b"],
    ["Have to and don't have to", `<p><mark>Have to</mark> also means obligation, often rules from other people: «I <b>have to</b> do my homework every day», «She <b>has to</b> wear a uniform». It changes with the person (has to) and uses do/does: «<b>Do</b> you <b>have to</b> get up early?».</p><p><mark>Don't have to</mark> means it is <b>not necessary</b>: «Tomorrow is Saturday, so I <b>don't have to</b> go to school». Compare: «You <b>mustn't</b> touch it» (prohibido) and «You <b>don't have to</b> come» (no hace falta). <b>En castellano:</b> «no tienes que» no es lo mismo que «no debes».</p>`,
      L.filas("Mustn't y don't have to no significan lo mismo", [["must / have to", "it's necessary", AZ], ["mustn't", "it's forbidden", RO], ["don't have to", "it isn't necessary", VE]])],
    ["Should: advice", `<p>We use <mark>should</mark> to give <b>advice</b> (consejos) and say what is a good idea: «You <b>should</b> go to bed early», «You look tired. You <b>should</b> rest». <mark>Shouldn't</mark> says it's a bad idea: «You <b>shouldn't</b> eat so many sweets».</p><p>To ask for advice: «What <b>should</b> I do?», «<b>Should</b> I tell the teacher?». <b>En castellano:</b> «should» es «deberías». Es más suave que <i>must</i>: no es una norma, es una recomendación.</p>`,
      L.filas("Consejos con should", [["I've got a cold.", "You should drink water.", VE], ["I'm always tired.", "You should sleep more.", AZ], ["My tooth hurts.", "You shouldn't eat sweets.", RO]], "Giving advice")],
    ["Choosing the right modal", `<p>Ask yourself: is it an <b>ability</b>? → <b>can</b>. Is it <b>permission</b>? → <b>can / could</b>. Is it a <b>rule</b> or <b>obligation</b>? → <b>must / have to</b>. Is it <b>forbidden</b>? → <b>mustn't</b>. Is it <b>advice</b>? → <b>should</b>.</p><p>Examples: «You <b>must</b> stop at a red light» (rule). «You <b>should</b> wear a coat, it's cold» (advice). «I <b>can</b> touch my toes» (ability). «You <b>mustn't</b> use the lift in a fire» (forbidden).</p>`,
      L.tabla("¿Qué modal elijo?", ["Meaning", "Modal"], [["ability", "can / can't"], ["permission", "can / could"], ["obligation", "must / have to"], ["advice", "should"]], NA)],
    ["Reading: rules at the swimming pool", `<p>Read the poster: «<b>SWIMMING POOL RULES.</b> You <b>must</b> have a shower before you swim. You <b>must</b> wear a swimming cap. You <b>mustn't</b> run around the pool. You <b>mustn't</b> eat in the water. Children under eight <b>must</b> be with an adult. You <b>can</b> use the slide from 11 to 1. <b>Advice:</b> you <b>should</b> wear flip-flops and you <b>should</b> drink water after swimming.»</p><p>Find two obligations, two prohibitions, one permission and one piece of advice.</p>`,
      L.filas("Normas de la piscina", [["must", "have a shower · wear a cap", AZ], ["mustn't", "run · eat in the water", RO], ["can", "use the slide from 11 to 1", VE], ["should", "wear flip-flops", AM]], "Pool rules")],
    ["Let's practise: class rules and advice", `<p>In groups, write the <b>rules</b> for your classroom: «We <b>must</b> listen when someone is speaking», «We <b>mustn't</b> shout», «We <b>can</b> read a book when we finish». Make a poster.</p><p>Then play «Problem and advice»: one student says a problem and the others give advice. «I can't sleep.» – «You <b>should</b> read a book», «You <b>shouldn't</b> use your tablet at night». <b>Consejo:</b> recuerda la regla de oro: después de un modal, el verbo va sin <i>to</i> y sin -s.</p>`,
      L.filas("Normas de clase", [["We must", "listen to others.", AZ], ["We mustn't", "shout.", RO], ["We can", "read when we finish.", VE], ["We should", "help each other.", AM]], "Our class rules")],
  ],
  ejemplos: [
    ["Complete: «Dogs ___ climb trees.» (ability, negative)", ["Capacidad → can.", "Negativa → can't."], "Dogs can't climb trees."],
    ["Give advice: «I'm hungry.»", ["Consejo → should + verbo.", "Sin to."], "You should eat a sandwich."],
    ["Choose: «You (mustn't / don't have to) cross the road when the light is red.»", ["Es una prohibición, no algo opcional."], "You mustn't cross the road when the light is red."],
  ],
  errores: [
    "Poner to tras el modal: «I can to swim» → «I can swim».",
    "Poner -s: «she cans», «he musts» → «she can», «he must».",
    "Usar do con modales: «Do you can…?» → «Can you…?».",
    "Confundir mustn't (prohibido) con don't have to (no hace falta).",
    "Usar must para un simple consejo: «You must try this cake» (mejor «You should try»).",
  ],
  ejercicios: [
    ["Write two things you can do and one you can't.", "Model answer: I can swim. I can draw. I can't play the piano."],
    ["Make a question: «You can speak French.»", "Can you speak French?"],
    ["Past: «I can read.» (when I was six)", "I could read when I was six."],
    ["Ask for permission to go out.", "Can I go out, please? / Could I go out, please?"],
    ["Complete: «You ___ smoke in hospitals.»", "mustn't."],
    ["Complete: «It's Sunday. I ___ get up early.» (no hace falta)", "don't have to."],
    ["Give advice: «I've got a headache.»", "You should rest / You should take a break."],
    ["Correct: «She musts do her homework.»", "She must do her homework."],
    ["Translate: «No deberías ver tanta tele.»", "You shouldn't watch so much TV."],
    ["Write three rules for a library.", "Model answer: You must be quiet. You mustn't eat. You can borrow three books."],
  ],
  figura: ["Modal verbs", L.columnas("Los verbos modales can, must y should", [["ability, permission", "CAN", ["I can swim.", "Can I go out?"], AZ], ["obligation", "MUST", ["You must stop.", "= have to"], VE], ["prohibition", "MUSTN'T", ["You mustn't run.", "(forbidden)"], RO], ["advice", "SHOULD", ["You should rest.", "shouldn't"], AM]])],
  video: "in9v",
  quiz: [
    ["«I ___ swim.» (sé nadar)", ["can", "must", "should"], "Capacidad."],
    ["«She ___ play the piano.»", ["can", "cans", "can to"], "Sin -s."],
    ["«___ you ride a horse?»", ["Can", "Do you can", "Does"], "Sin do."],
    ["Past of «can» is…", ["could", "canned", "did can"], "Could."],
    ["«You ___ run in the corridor.» (prohibido)", ["mustn't", "don't have to", "should"], "Prohibición."],
    ["«You look tired. You ___ go to bed.»", ["should", "mustn't", "can't"], "Consejo."],
    ["«don't have to» means…", ["no hace falta", "está prohibido", "no sabes"], "No es necesario."],
    ["«___ I go to the toilet, please?»", ["Can", "Must", "Should"], "Permiso."],
    ["«He ___ wear a uniform.» (obligación, he)", ["has to", "have to", "must to"], "He + has to."],
    ["Which is correct?", ["You should eat fruit.", "You should to eat fruit.", "You shoulds eat fruit."], "Sin to, sin -s."],
  ],
  examen: [
    ["«Could you help me?» is…", ["a polite request", "an obligation", "advice"], "Petición educada."],
    ["«You ___ eat so much sugar.»", ["shouldn't", "can", "have"], "Mal consejo."],
    ["«Penguins ___ fly.»", ["can't", "mustn't", "shouldn't"], "No pueden: capacidad."],
    ["«Should» means…", ["deberías", "puedes", "tienes que"], "Consejo."],
  ],
  feynman: ["Qué son los verbos modales y sus tres reglas", "Para qué sirve can y su pasado could", "Diferencia entre must, mustn't y don't have to", "Cómo se da un consejo con should"],
  mapa: ["MODAL VERBS", AZ, [["Can / could", "ability · permission", AZ], ["Must / have to", "obligation · rules", VE], ["Mustn't", "prohibition", RO], ["Should", "advice", AM]], 230],
  tarjetas: [
    ["can", "Capacidad o permiso: I can swim."],
    ["could", "Pasado de can o petición educada."],
    ["must", "Obligación: You must stop."],
    ["mustn't", "Prohibición: You mustn't run."],
    ["have to", "Obligación (cambia: has to)."],
    ["don't have to", "No hace falta."],
    ["should", "Consejo: You should rest."],
    ["Golden rules", "Sin -s, sin to, sin do."],
  ],
  familias: ["Escribid en inglés tres normas de casa con must / mustn't y pegadlas en la nevera.", "Jugad a «problema y consejo»: uno cuenta un problema y el otro responde con should."],
  saberes: "Expresión de capacidad, permiso, obligación, prohibición y consejo; verbos modales (Lengua Extranjera)",
  ideas: ["Cartel de normas de clase en inglés.", "Juego «problema y consejo» por parejas.", "Encuesta de habilidades «Can you…?» con gráfico."],
  fuentes: [["British Council LearnEnglish Kids: can / can't", "https://learnenglishkids.britishcouncil.org/grammar-practice/can-cant"], ["Cambridge Dictionary: modal verbs", "https://dictionary.cambridge.org/grammar/british-grammar/modals-and-modality"]],
});

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Use may and might for possibility and polite permission", "Talk about past obligations with had to", "Give advice in different ways", "Understand signs, notices and rules in other countries"],
  lectura: { titulo: "Rules for Biscuit", html: `<p>Last month our family adopted a puppy. His name is Biscuit, and he is brown, fluffy and VERY naughty. On the first day, he ate my slipper, and on the second day he chewed Dad's homework folder. So we had a family meeting and wrote some rules.</p><p><b>Rules for Biscuit (and for us!)</b></p><ul><li>Biscuit <b>mustn't</b> sleep on the sofa. He <b>has to</b> sleep in his basket.</li><li>We <b>have to</b> take him for a walk three times a day. My brother and I <b>have to</b> take turns.</li><li>We <b>mustn't</b> give him chocolate. It's dangerous for dogs.</li><li>Biscuit <b>can</b> play in the garden, but he <b>can't</b> go in the vegetable patch.</li><li>We <b>should</b> give him lots of love and patience.</li><li>Visitors <b>don't have to</b> be afraid. Biscuit only licks people!</li></ul><p>Yesterday Grandma visited us. «<b>May</b> I give him a biscuit?» she asked. We laughed. «Yes, you <b>can</b>, but only a dog biscuit!»</p><p>Biscuit still isn't perfect. He <b>might</b> eat another slipper one day. But he is learning, and so are we.</p>` },
  tras: {
    "Can: permission and requests": [
      ["May and might", `<p><mark>May</mark> is a modal verb with two uses:</p><ul><li><b>Very polite permission</b>, especially when we speak to adults we don't know well or in formal situations: «<b>May</b> I come in?» «<b>May</b> I use your phone, please?» Answers: «Yes, of course you <b>may</b>.» / «I'm sorry, you <b>may not</b>.»</li><li><b>Possibility</b>, like <i>might</i>: «It <b>may</b> rain later.» «She <b>may</b> be at home.» (puede que)</li></ul><p><mark>Might</mark> is used for possibility, and it shows we are even less sure: «I <b>might</b> go to the beach tomorrow, I don't know yet.»</p><p>From less polite to more polite, we can ask permission like this:</p><ul><li>«<b>Can</b> I go to the toilet?» (normal, friendly)</li><li>«<b>Could</b> I go to the toilet, please?» (more polite)</li><li>«<b>May</b> I go to the toilet, please?» (very polite)</li></ul><p>Like all modal verbs, <i>may</i> and <i>might</i> don't add <i>-s</i> and are followed by a verb without <i>to</i>: «He <b>may know</b> the answer.»</p>`,
        L6.filas("Asking permission", [["Can I…?", "friendly", cVE], ["Could I…, please?", "polite", cAZ], ["May I…, please?", "very polite", cMO], ["It may / might rain", "possibility", cNA]])],
    ],
    "Have to and don't have to": [
      ["Had to: obligation in the past", `<p><i>Must</i> has no past form. To talk about obligations in the <b>past</b>, we use <mark>had to</mark> for all persons:</p><ul><li>«Yesterday I <b>had to</b> get up at six because we went on a trip.»</li><li>«My grandparents <b>had to</b> walk five kilometres to school.»</li><li>«We <b>had to</b> wear a uniform at my old school.»</li></ul><p><b>Negative</b>: <mark>didn't have to</mark> means it wasn't necessary: «It was Sunday, so I <b>didn't have to</b> go to school.» (No tuve que…)</p><p><b>Questions</b>: «<b>Did</b> you <b>have to</b> study a lot for the exam?» – «Yes, I did.»</p><p>And for <b>prohibitions</b> in the past we use <b>couldn't</b> or <b>wasn't / weren't allowed to</b>: «When my dad was a child, he <b>couldn't</b> watch TV after nine o'clock.» «We <b>weren't allowed to</b> use mobile phones in class.»</p><p>Ask an older person: what did they have to do when they were your age? What weren't they allowed to do? You may be surprised!</p><p>Here is an example from a grandmother born in 1955: «When I was eleven, I <b>had to</b> help my mother every day: I <b>had to</b> make the beds and buy the bread. We <b>didn't have to</b> do much homework, but we <b>had to</b> learn lots of things by heart. Girls <b>weren't allowed to</b> wear trousers at my school, and we <b>couldn't</b> talk in the corridors.» How different is your life?</p>`,
        H6.dos("In the past", ["Obligation", ["I had to…", "I didn't have to…", "Did you have to…?"], cAZ], ["Prohibition", ["I couldn't…", "not allowed to…", "No phones!"], cRO]), ["km3xMfQSmAU", "Must, Have to, and Should for Obligation and Advice in English", "Learn English with EnglishClass101.com", 342182]],
    ],
    "Should: advice": [
      ["More ways to give advice", `<p><i>Should</i> is the most common way to give advice, but there are other friendly and polite ways to help a friend:</p><ul><li><b>You'd better</b> (= you had better) + verb: strong advice, often a warning. «You'<b>d better</b> take an umbrella. It's going to rain.» Negative: «You'<b>d better not</b> be late.»</li><li><b>Why don't you…?</b> a friendly suggestion: «<b>Why don't you</b> ask the teacher?»</li><li><b>If I were you, I'd…</b>: imagine you are the other person. «<b>If I were you, I'd</b> say sorry.»</li><li><b>How about / What about + -ing?</b>: «<b>How about</b> studying together?»</li><li><b>Ought to</b>: similar to <i>should</i>, a bit more formal. «You <b>ought to</b> drink more water.»</li></ul><p>And when you need advice, you can ask: «What <b>should</b> I do?» «Do you think I <b>should</b>…?» «What would you do?»</p><p>Good advice is <b>kind</b> and <b>respectful</b>. Listen first, then give your advice, and remember the other person decides in the end.</p>`,
        L6.filas("Giving advice", [["You should…", "normal advice", cAZ], ["You'd better…", "strong / warning", cRO], ["Why don't you…?", "friendly idea", cVE], ["If I were you, I'd…", "imagine", cNA]])],
    ],
  },
  final: [
    ["Signs and notices", `<p>When you travel to an English-speaking country, you will see lots of <b>signs</b> and <b>notices</b>. Many of them express obligation, prohibition or advice, but in a very short way, without modal verbs:</p><ul><li><b>Prohibition</b> (you mustn't): «No entry», «No smoking», «Do not touch», «Keep off the grass», «No parking», «Do not feed the animals».</li><li><b>Obligation</b> (you must / you have to): «Keep left», «Please queue here», «Seat belts must be worn», «Dogs must be kept on a lead».</li><li><b>Warning</b> (be careful): «Caution: wet floor», «Danger: high voltage», «Mind the gap» (on the London Underground: be careful with the space between the train and the platform).</li><li><b>Information</b>: «Exit», «Toilets», «Push / Pull», «Open 9–5», «Out of order» (it doesn't work).</li></ul><p>To explain a sign, we can use modal verbs: «Keep off the grass» means «You <b>mustn't</b> walk on the grass». «Please queue here» means «You <b>have to</b> wait in a line here».</p><p>Signs often use <b>pictures</b> too, so people who don't speak the language can understand them. A red circle with a line usually means «No», a red triangle means «Warning» and a blue circle usually means something you must do.</p>`,
      L6.filas("Signs", [["Keep off the grass", "you mustn't walk on it", cRO], ["Mind the gap", "be careful!", cNA], ["Please queue here", "you have to wait", cAZ], ["Out of order", "it doesn't work", cMO]]), ["YQuJTA9Z-Eo", "Signs and Symbols | Traffic Signs", "Teacher Lis TV", 665742]],
    ["Rules around the world", `<p>Every country has its own rules and customs. Here are some that may surprise you:</p><ul><li>In the <b>United Kingdom</b>, Ireland, Japan and Australia, you <b>have to</b> drive on the <b>left</b>.</li><li>In <b>Singapore</b>, shops <b>can't</b> sell normal chewing gum. The government banned it in 1992 to keep the streets clean.</li><li>In <b>Japan</b>, you <b>have to</b> take off your shoes when you enter a house, and also in some schools and temples. You <b>shouldn't</b> blow your nose at the table or talk loudly on the phone on trains.</li><li>In the <b>United States</b>, in most places, you <b>should</b> leave a tip in restaurants: it's part of the waiter's pay.</li><li>In many countries in <b>Europe</b>, including Spain, children <b>have to</b> use a special car seat until they are tall enough.</li><li>In <b>Venice</b>, Italy, tourists <b>mustn't</b> feed the pigeons in St Mark's Square.</li></ul><p>When you travel, it's a good idea to learn the local rules before you arrive. As people say, «When in Rome, do as the Romans do»: when you are in a new place, you <b>should</b> follow its customs.</p>`,
      H6.rueda("Rules abroad", "RULES", [["UK: drive left", cAZ], ["Singapore: gum", cRO], ["Japan: shoes", cVE], ["USA: tips", cNA]])],
  ],
  ejemplos: [
    ["Make it more polite: «Can I open the window?»", ["Could I…, please? is more polite.", "May I…, please? is very polite."], "May I open the window, please?"],
    ["Past: «I have to wear a uniform.» (last year)", ["Must and have to change to had to.", "Same for all persons."], "Last year I had to wear a uniform."],
  ],
  errores: ["Decir «I musted» o «I must yesterday»: en pasado se usa had to.", "Escribir «He mays» o «may to»: los modales no llevan -s ni to."],
  ejercicios: [
    ["b", "Make it very polite: «Can I use your pencil?»", "May I use your pencil, please?"],
    ["b", "Complete in the past: «Yesterday I ___ (have to) clean my room.»", "had to."],
    ["b", "What does «Out of order» mean?", "It doesn't work."],
    ["b", "Complete: «You'd ___ take a coat. It's cold.»", "better."],
    ["b", "In which country can't shops sell normal chewing gum?", "In Singapore."],
    ["m", "Write the negative: «I had to go to school on Saturday.»", "I didn't have to go to school on Saturday."],
    ["m", "Explain the sign «Keep off the grass» with a modal verb.", "You mustn't walk on the grass."],
    ["m", "Give advice with «Why don't you…?»: your friend is bored.", "Why don't you read a book / play outside?"],
    ["m", "Write a sentence with «may» for possibility.", "Open answer. Example: It may rain this afternoon."],
    ["m", "What must Biscuit not do?", "He mustn't sleep on the sofa (or eat chocolate)."],
    ["a", "Interview an older person: write three things they had to do and two things they weren't allowed to do.", "Open answer."],
    ["a", "Your friend wants to stay up all night playing video games before an exam. Give advice in three different ways.", "Open answer."],
    ["a", "Design three signs for your school and explain each one with a modal verb.", "Open answer."],
    ["a", "Explain the saying «When in Rome, do as the Romans do».", "When you are in a new place, you should follow its customs."],
  ],
  quiz: [
    ["The most polite way to ask permission is…", ["May I…?", "Can I…?", "I want to…"], "Polite."],
    ["The past of «must» (obligation) is…", ["had to", "musted", "must have"], "Past."],
    ["«You'd better» means…", ["strong advice", "permission", "ability"], "Advice."],
    ["«Mind the gap» is a…", ["warning", "prohibition", "invitation"], "Signs."],
    ["In Japan you have to take off your…", ["shoes", "hat", "coat"], "Rules abroad."],
  ],
  examen: [
    ["Biscuit is…", ["a puppy", "a cat", "a biscuit"], "Reading."],
    ["«It was a holiday, so we ___ go to school.»", ["didn't have to", "mustn't", "hadn't to"], "Past."],
  ],
  tarjetas: [
    ["May / might", "May I…? (very polite). It may / might rain (possibility)."],
    ["Had to", "Past obligation: I had to… / I didn't have to… / Did you have to…?"],
    ["Advice", "should, you'd better, why don't you…?, if I were you, I'd…"],
    ["Signs", "No entry, Keep off the grass, Mind the gap, Out of order."],
  ],
  glosario: [
    ["May", "Poder (permiso educado) o puede que."],
    ["Had to", "Tuve que, tenía que."],
    ["Be allowed to", "Tener permiso para."],
    ["You'd better", "Más vale que, será mejor que."],
    ["Advice", "Consejo (incontable)."],
    ["Sign", "Señal, cartel."],
    ["Notice", "Aviso."],
    ["Queue", "Hacer cola; cola."],
    ["Warning", "Advertencia."],
    ["Out of order", "Averiado, no funciona."],
    ["Ban", "Prohibir."],
    ["Custom", "Costumbre."],
  ],
  situacion: {
    titulo: "A guide for visitors",
    reto: "La clase prepara una guía en inglés con normas y consejos para alumnos de intercambio que visitarán el colegio y la localidad.",
    pasos: ["Haced una lista de normas del colegio con must, mustn't, have to y don't have to.", "Diseñad carteles en inglés para lugares del colegio (biblioteca, comedor, patio).", "Escribid consejos para visitar vuestra localidad con should, you'd better y why don't you.", "Montad la guía y presentadla con un juego de rol de alumno nuevo y anfitrión."],
    producto: "Una guía bilingüe de normas y consejos con carteles para el colegio.",
    evaluacion: ["Uses modal verbs correctly.", "Talks about past obligations with had to.", "Gives advice in different ways.", "Writes clear signs and notices."],
  },
});
