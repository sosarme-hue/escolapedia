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
