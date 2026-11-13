// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "Modal verbs",
  minutos: 40,
  objetivos: ["Conocer las características de los verbos modales", "Expresar capacidad, permiso, obligación, consejo y prohibición", "Expresar grados de certeza con must, might y can't"],
  claves: ["can", "could", "must", "have to", "should", "may / might", "mustn't vs don't have to"],
  pregunta: {
    texto: "«You mustn't wear a uniform» y «You don't have to wear a uniform». En español las dos parecen «no tienes que llevar uniforme». ¿Significan lo mismo?",
    respuesta: "¡No! «Mustn't» es una <mark>prohibición</mark>: está prohibido llevarlo. «Don't have to» es <mark>ausencia de obligación</mark>: puedes llevarlo o no, como quieras. Es uno de los errores más típicos en inglés.",
  },
  bloques: [
    {
      html: `<h3>Cómo funcionan los modales</h3><p><b>Can, could, may, might, must, should, will, would</b> tienen reglas especiales: <mark>no llevan -s</mark> en tercera persona («she can»), van seguidos de <b>infinitivo sin to</b> («I must go») y forman negativa e interrogativa <b>sin do</b> («Can you swim?», «You shouldn't»).</p>`,
      svg: L.filas("Tres reglas de los verbos modales", [
        ["Sin -s", "She can swim.", "var(--pen)"], ["Sin to", "You must go.", "var(--leaf)"],
        ["Sin do", "Can you help me?", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Capacidad y permiso</h3><p><b>Can</b> = capacidad en presente («I can speak French») y permiso informal («Can I go out?»). <b>Could</b> = capacidad en el pasado («I could swim at 5») y petición educada («Could you help me?»). <b>May</b> = permiso formal («May I come in?»). Para otros tiempos usamos <mark>be able to</mark>: «I'll be able to drive next year».</p>`,
      svg: L.tabla("Capacidad y permiso", ["Modal", "Ejemplo"], [
        ["can", "I can dance."], ["could", "Could you repeat?"], ["may", "May I sit here?"], ["be able to", "I'll be able to…"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Obligación y prohibición</h3><p><b>Must</b> = obligación que siente el hablante o norma escrita («I must study more»). <b>Have to</b> = obligación externa («I have to wear glasses»). <b>Mustn't</b> = <mark>prohibido</mark>. <b>Don't have to</b> = <mark>no es necesario</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Señales: mustn't es prohibido, don't have to es opcional">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <circle cx="68" cy="70" r="40" fill="var(--card)" stroke="var(--red)" stroke-width="8"/><path d="M40 42 L 96 98" stroke="var(--red)" stroke-width="8"/>
          <text x="68" y="76" font-size="13" fill="var(--ink)">phone</text>
          <text x="68" y="134" font-size="15" fill="var(--red)">mustn't</text><text x="68" y="154" font-size="12" fill="var(--muted)">prohibido</text>
          <rect x="150" y="30" width="80" height="80" rx="14" fill="var(--card)" stroke="var(--leaf)" stroke-width="6"/>
          <text x="190" y="76" font-size="20" fill="var(--leaf)">✓ / ✗</text>
          <text x="190" y="134" font-size="15" fill="var(--leaf)">don't have to</text><text x="190" y="154" font-size="12" fill="var(--muted)">opcional</text>
        </g></svg>`,
    },
    {
      html: `<h3>Consejo</h3><p><b>Should / shouldn't</b> (y <i>ought to</i>) sirven para dar <mark>consejos y opiniones</mark>: «You should sleep more», «You shouldn't eat so much sugar». Para un consejo sobre el pasado: <b>should have + participio</b>: «You should have told me!» (deberías habérmelo dicho).</p>`,
      svg: L.dialogo("Pedir y dar consejo con should", [
        ["Tom", "I'm always tired.", "var(--inf)"],
        ["Ana", "You should go to bed earlier.", "var(--leaf)"],
        ["Ana", "You shouldn't use your phone in bed.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Certeza y posibilidad</h3><p>Los modales también dicen <mark>cuánto de seguro</mark> estamos. <b>Must</b> = casi seguro que sí («He must be tired, he's run 20 km»). <b>May / might / could</b> = quizá («It might rain»). <b>Can't</b> = casi seguro que no («That can't be Ana, she's in London»).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de certeza: must casi seguro, may y might quizá, can't casi imposible">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <defs><linearGradient id="gm" x1="0" x2="1"><stop offset="0" stop-color="var(--red)"/><stop offset=".5" stop-color="var(--sun)"/><stop offset="1" stop-color="var(--leaf)"/></linearGradient></defs>
        <rect x="20" y="70" width="220" height="16" rx="8" fill="url(#gm)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="34" y="56" font-size="15" fill="var(--red)">can't</text><text x="34" y="110" font-size="12" fill="var(--muted)">0 %</text>
          <text x="130" y="56" font-size="15" fill="var(--ink)">may · might</text><text x="130" y="110" font-size="12" fill="var(--muted)">50 %</text>
          <text x="226" y="56" font-size="15" fill="var(--leaf)">must</text><text x="226" y="110" font-size="12" fill="var(--muted)">95 %</text>
          <text x="130" y="150" font-size="13" fill="var(--ink)">How sure are you?</text>
        </g></svg>`,
    },
  ],
  figura: {
    titulo: "Para qué sirve cada modal",
    svg: L.columnas("Usos de los modales: capacidad, obligación, consejo y posibilidad", [
      ["capacidad · permiso", "CAN / COULD", ["I can ski.", "Could I…?"], "var(--pen)"],
      ["obligación", "MUST / HAVE TO", ["mustn't = prohibido", "don't have to = libre"], "var(--red)"],
      ["consejo", "SHOULD", ["You should", "rest."], "var(--leaf)"],
      ["posibilidad", "MAY / MIGHT", ["It might", "snow."], "var(--inf)"],
    ]),
  },
  video: { id: "36wG9pSYu7Q", titulo: "Modal verbs: all you need to know", canal: "English with Lucy", vistas: 1074320, megusta: 0, busqueda: "modal verbs explicación en español inglés" },
  quiz: [
    { q: "¿Qué frase es correcta?", o: ["She cans swim.", "She can swim.", "She can to swim."], a: 1, e: "Los modales no llevan -s ni van seguidos de «to»." },
    { q: "«You ___ smoke here. It's a hospital.»", o: ["mustn't", "don't have to", "might"], a: 0, e: "Está prohibido: mustn't." },
    { q: "«Tomorrow is Sunday, so I ___ get up early.»", o: ["mustn't", "don't have to", "can't"], a: 1, e: "No es necesario: don't have to." },
    { q: "«You look ill. You ___ see a doctor.»", o: ["should", "may", "could have"], a: 0, e: "Es un consejo: should." },
    { q: "«He's been working for 12 hours. He ___ be exhausted.»", o: ["can't", "must", "should"], a: 1, e: "Deducción casi segura: must." },
  ],
  examen: [
    { q: "«When I was six, I ___ ride a bike.»", o: ["can", "could", "must"], a: 1, e: "Capacidad en el pasado: could." },
    { q: "«That ___ be Peter at the door. He's on holiday in Peru.»", o: ["must", "might", "can't"], a: 2, e: "Casi seguro que no: can't." },
    { q: "«I'll ___ come to your party.» (futuro de can)", o: ["can", "be able to", "could"], a: 1, e: "Can no tiene futuro: will be able to." },
  ],
  feynman: ["Las tres reglas gramaticales de los modales", "La diferencia entre mustn't y don't have to", "Cómo doy consejos con should", "La escala de certeza must, might, can't"],
  mapa: mapa("MODAL VERBS", "var(--eso)", [
    ["Ability", "can · could · be able to", "var(--pen)"],
    ["Obligation", "must · have to · mustn't", "var(--red)"],
    ["Advice", "should · ought to", "var(--leaf)"],
    ["Possibility", "must · might · can't", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Reglas de los modales", "Sin -s, seguidos de infinitivo sin to y sin do en negativas y preguntas."],
    ["Mustn't", "Prohibición: «You mustn't use your phone in the exam»."],
    ["Don't have to", "No es necesario: «You don't have to come if you're busy»."],
    ["Should", "Consejo u opinión: «You should drink more water»."],
    ["Must / might / can't (deducción)", "Casi seguro que sí / quizá / casi seguro que no."],
  ],
  familias: ["Escribid juntos en inglés las normas de casa con must, mustn't y don't have to.", "Pedidle que dé tres consejos en inglés a alguien que empieza el instituto.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: modalidad (capacidad, permiso, obligación, consejo, posibilidad) (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Redactar las normas de un campamento imaginario.", "Detectives: deducciones con must / might / can't a partir de objetos misteriosos.", "Consultorio sentimental con should y shouldn't."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: modal verbs", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: modality", url: "https://dictionary.cambridge.org/grammar/british-grammar/modals-and-modality" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Distinguir must not y don't have to", "Expresar deducciones sobre el pasado con modal + have + participio", "Sustituir los modales en tiempos donde no existen"],
  bloques: [
    { tras: "Capacidad y permiso", html: `<h3>Could y be able to</h3><p><b>Can</b> solo tiene presente, y <b>could</b> es su pasado o su forma condicional. Para los demás tiempos usamos <b>be able to</b>: «I'<b>ll be able to</b> drive next year», «I'<b>ve</b> never <b>been able to</b> whistle».</p><p>En pasado hay un matiz importante: <i>could</i> expresa una capacidad general («I <b>could</b> read when I was four»), pero para una acción concreta que se consiguió con esfuerzo se usa <b>was / were able to</b> o <i>managed to</i>: «The fire was big, but everybody <b>was able to</b> escape» (no *could escape). En negativa, en cambio, <i>couldn't</i> sirve siempre: «I <b>couldn't</b> open the door».</p>` },
    { tras: "Obligación y prohibición", html: `<h3>Mustn't o don't have to</h3><p>En afirmativa, <i>must</i> y <i>have to</i> se parecen mucho. En negativa significan cosas <b>muy distintas</b>:</p>${L.tb(["Forma", "Significado", "Ejemplo"], [["mustn't", "prohibido: no debes", "You <b>mustn't</b> use your phone in the exam."], ["don't have to", "no es necesario, no hace falta", "You <b>don't have to</b> wear a uniform. (puedes, si quieres)"], ["needn't / don't need to", "no hace falta", "You <b>needn't</b> bring food. There's a café."]])}<p><i>Must</i> no tiene pasado ni futuro: se usa <b>had to</b> y <b>will have to</b>. «Yesterday I <b>had to</b> get up at six», «You'<b>ll have to</b> wait».</p>` },
    { tras: "Consejo", html: `<h3>Should have, could have</h3><p>Para hablar del pasado, los modales van con <b>have + participio</b>:</p><ul><li><b>Should have</b> + participio: crítica o arrepentimiento. «You <b>should have studied</b> more» (pero no lo hiciste). «I <b>shouldn't have eaten</b> so much» (pero comí).</li><li><b>Could have</b> + participio: posibilidad que no se realizó. «You <b>could have called</b> me! I would have helped you».</li><li><b>Needn't have</b> + participio: hiciste algo que no era necesario. «You <b>needn't have brought</b> a present».</li></ul><p>En la lengua hablada, <i>should have</i> suena «should've» /ʃʊdəv/; por eso muchos nativos escriben mal *should of.</p>` },
    { tras: "Certeza y posibilidad", html: `<h3>Deducciones sobre el pasado</h3><p>Con la misma estructura, modal + <b>have + participio</b>, hacemos deducciones sobre lo que pasó:</p>${L.tb(["Grado de certeza", "Modal", "Ejemplo"], [["casi seguro que sí", "must have", "The streets are wet. It <b>must have rained</b>."], ["quizá", "may / might / could have", "She's late. She <b>might have missed</b> the bus."], ["casi seguro que no", "can't / couldn't have", "He <b>can't have seen</b> me. He didn't say hello."]])}<p>Ojo: lo contrario de <i>must</i> en deducciones no es <i>mustn't</i>, sino <b>can't</b>: «It <b>can't</b> be true» (no puede ser verdad).</p>` },
    { tras: "Certeza y posibilidad", html: `<h3>Pedir, ofrecer y sugerir con cortesía</h3><p>Los modales son la base de la cortesía en inglés. De más informal a más formal:</p><ul><li>Pedir: <i>Can you…? → Could you…? → Would you mind + -ing…?</i> «<b>Would you mind closing</b> the door?»</li><li>Pedir permiso: <i>Can I…? → Could I…? → May I…?</i> «<b>May I</b> come in?»</li><li>Ofrecer: <i>Shall I…? / Would you like…?</i> «<b>Would you like</b> some tea?»</li><li>Sugerir: <i>We could… / Shall we…? / Why don't we…?</i></li></ul><p>Usar <i>could</i> o <i>would</i> en vez de <i>can</i> o <i>will</i> suaviza la petición. En una tienda, un hotel o un email formal, marca la diferencia.</p>` },
    { tras: "Consejo", html: `<h3>Ought to y had better</h3><p><b>Ought to</b> significa lo mismo que <i>should</i>, pero es más formal y menos frecuente: «You <b>ought to</b> apologise». Es de los pocos modales que llevan <i>to</i>. Su negativa es <i>ought not to</i>, aunque en la práctica casi todos dicen <i>shouldn't</i>.</p><p><b>Had better</b> (contraído <i>'d better</i>) da un consejo más fuerte, casi una advertencia: si no lo haces, habrá problemas. Se refiere al presente o al futuro, aunque lleve <i>had</i>, y va con infinitivo sin <i>to</i>: «You<b>'d better</b> hurry or you'll miss the bus», «We<b>'d better not</b> be late again». Compara: «You should see a doctor» (te lo recomiendo) / «You'd better see a doctor» (es urgente).</p>` },
  ],
  videos: [
    ["Obligación y prohibición", L.vid("IT_V4wPx5Wo", "Truco para dominar todos los modales en inglés", "Inglés Kike Rodríguez", 1239528)],
    ["Deducciones sobre el pasado", L.vid("rrzjOeh_9TI", "Verbos modales de deducción en inglés: must, can't, could, may", "Inglés Para Perezosos", 1450081)],
  ],
  ejemplos: [
    ["Elige: «In Spain, you (mustn't / don't have to) vote if you don't want to.»", ["Votar no está prohibido, pero tampoco es obligatorio.", "Expresamos que no es necesario, no una prohibición.", "Por tanto, don't have to."], "In Spain, you don't have to vote if you don't want to."],
    ["Haz una deducción: «Laura's eyes are red and she's holding a tissue.» (cry)", ["Hay pruebas claras: estamos casi seguros.", "Hablamos de algo que pasó antes del momento actual.", "Must + have + participio: must have cried (o must have been crying)."], "She must have cried / She must have been crying."],
    ["Expresa arrepentimiento: «I didn't bring an umbrella and now I'm wet.»", ["Lamentamos algo que no hicimos en el pasado.", "Should have + participio.", "Bring → brought."], "I should have brought an umbrella."],
  ],
  errores: [
    "Poner to después de un modal: *I must to go → I must go (excepto have to, ought to, be able to).",
    "Añadir -s en tercera persona: *she cans → she can.",
    "Confundir mustn't (prohibido) con don't have to (no hace falta).",
    "Usar mustn't para deducciones negativas: *it mustn't be him → it can't be him.",
    "Escribir *should of en lugar de should have.",
  ],
  ejercicios: [
    ["Completa: «When I was six, I ___ ride a bike.» (capacidad general)", "could."],
    ["Completa: «The exam was hard, but I ___ finish it on time.» (lo conseguí)", "was able to (o managed to)."],
    ["Completa con mustn't o don't have to: «You ___ shout. The baby is sleeping.»", "mustn't: está prohibido / no debes."],
    ["Completa con mustn't o don't have to: «Tomorrow is a holiday, so we ___ go to school.»", "don't have to: no es necesario."],
    ["Pon en pasado: «I must clean my room.»", "I had to clean my room."],
    ["Haz una deducción: «He isn't answering the phone.» (quizá: leave it at home)", "He might / may / could have left it at home."],
    ["Haz una deducción: «She can't have finished already» — explica el significado.", "Significa que es casi seguro que no ha terminado todavía (lo ve imposible)."],
    ["Critica con should have: «You didn't tell me about the party.»", "You should have told me about the party."],
    ["Haz más formal: «Can you send me the information?»", "Could you send me the information, please? / Would you mind sending me the information?"],
    ["Traduce: «No hacía falta que trajeras comida» (pero la trajiste).", "You needn't have brought food."],
  ],
  quiz: [
    ["«You ___ wear a tie. It's optional.»", ["don't have to", "mustn't", "can't"], 0, "No es necesario."],
    ["«The ground is wet. It ___ rained.»", ["must have", "can't have", "should"], 0, "Deducción segura del pasado."],
    ["Futuro de «can»:", ["will be able to", "will can", "will could"], 0, "Can no tiene futuro."],
    ["«___ you mind opening the door?»", ["Would", "Should", "Must"], 0, "Petición cortés."],
    ["«You ___ told me!» (crítica)", ["should have", "should", "must"], 0, "Should have + participio."],
  ],
  tarjetas: [
    ["Mustn't / don't have to", "Mustn't: prohibido. Don't have to: no es necesario."],
    ["Modal + have + participio", "Deducción o crítica sobre el pasado: must have, can't have, should have."],
    ["Be able to", "Sustituye a can en los tiempos que no tiene: will be able to."],
  ],
});

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["Las normas del campamento", `<p>Leo va a pasar dos semanas en un campamento de verano en Escocia. El primer día, el monitor les lee las normas: «<i>You must wear a life jacket on the boats. You mustn't swim in the lake without an instructor. You don't have to bring your own towels, we've got plenty. You can use your phones after dinner, and you should call your families at least twice a week.</i>»</p><p>Esa misma noche, una tienda de campaña aparece vacía. «<i>They might be in the kitchen</i>», dice alguien. «<i>No, they can't be there, it's locked.</i>» «<i>They must have gone to see the stars!</i>» Efectivamente, dos chicos habían salido a mirar el cielo. Al día siguiente el monitor les dice: «<i>You should have told us. We could have come with you.</i>»</p><p>En una sola historia aparecen casi todos los verbos modales: obligación, prohibición, ausencia de obligación, permiso, consejo, posibilidad, deducción y crítica del pasado. Los modales son palabras pequeñas, pero cambian por completo el sentido de una frase: no es lo mismo «you mustn't» que «you don't have to». En este tema aprenderás a distinguirlos y a usarlos para dar normas, consejos y opiniones con el tono adecuado.</p>`],
  mas: [
    ["<h3>Cómo funcionan los modales</h3>", `<p>Los modales no tienen infinitivo, ni participio, ni forma -ing: no se puede decir «to can» ni «canning». Por eso, cuando necesitamos esos tiempos usamos un <b>sustituto</b>: <i>be able to</i> para can, <i>have to</i> para must, <i>be allowed to</i> para el permiso. «I'd like <b>to be able to</b> speak Chinese», «I've <b>had to</b> work hard this year». En las preguntas el modal va delante del sujeto y en las negativas lleva <i>not</i> directamente: «<b>Can</b> you…?», «You <b>shouldn't</b>…».</p>`],
    ["<h3>Obligación y prohibición</h3>", `<p>Hay un matiz entre <b>must</b> y <b>have to</b>: <i>must</i> suele expresar una obligación que impone quien habla («I must call my grandma, I miss her»), mientras que <i>have to</i> expresa una obligación externa, impuesta por normas o circunstancias («I have to wear a uniform at school»). En los carteles y normas escritas se usa mucho <i>must</i>: «Passengers must show their tickets». En pasado solo existe <b>had to</b>: «I had to wait for an hour».</p>`],
    ["<h3>Consejo</h3>", `<p>Para dar consejos con más suavidad se puede usar <b>could</b> («You could try talking to her») o una pregunta: «Why don't you…?», «Have you thought about…?». Y para recomendar con más fuerza, <b>you'd better</b> (es mejor que…, si no, habrá problemas). Al pedir consejo se dice «What <b>should</b> I do?» o «Do you think I <b>should</b>…?». En las cartas de consejo de las revistas juveniles, <i>should</i> e <i>If I were you</i> son las estructuras estrella.</p>`],
    ["<h3>Certeza y posibilidad</h3>", `<p>Piensa en una escala de seguridad: <b>must</b> (estoy casi seguro de que sí), <b>may / might / could</b> (es posible), <b>can't</b> (estoy casi seguro de que no). Ojo: lo contrario de <i>must</i> en las deducciones no es «mustn't», sino <b>can't</b>: «He <b>must</b> be at home, the lights are on» / «He <b>can't</b> be at home, the lights are off». <i>Might</i> es un poco menos seguro que <i>may</i>, y <i>could</i> se usa mucho en la conversación: «It <b>could</b> be true».</p>`],
    ["<h3>Should have, could have</h3>", `<p>En la pronunciación rápida, <i>should have</i> suena «shoulda» y <i>could have</i>, «coulda», y muchos nativos llegan a escribir por error «should of». Tú escribe siempre <b>have</b>. Fíjate también en <b>needn't have</b> + participio: «You <b>needn't have</b> bought a present» (lo compraste, pero no hacía falta), distinto de «You <b>didn't need to</b> buy a present» (no hacía falta y probablemente no lo compraste).</p>`],
    ["<h3>Capacidad y permiso</h3>", `<p>Para pedir permiso hay tres grados de formalidad: <b>Can I</b>…? (con amigos y familia), <b>Could I</b>…? (educado, el más útil en general) y <b>May I</b>…? (formal: con profesores, en una tienda, en un email). Para responder: «Yes, of course», «Sure, go ahead» o, para negar con educación, «I'm afraid you can't». Fíjate en que en la respuesta no se usa could: «Could I open the window?» «Yes, you <b>can</b>».</p>`],
    ["<h3>Ought to y had better</h3>", `<p><b>Ought to</b> es bastante formal y poco frecuente en preguntas y negativas; en su lugar se usa should: «Should we tell her?». <b>Had better</b> se refiere a una situación concreta y presente, no a consejos generales: «You'd better take an umbrella» (hoy, porque va a llover), pero no «People had better eat vegetables». A pesar de llevar <i>had</i>, se refiere al presente o al futuro, nunca al pasado.</p>`],
  ],
  svgs: [
    ["<h3>Could y be able to</h3>", "Could frente a was able to", [["could", "capacidad general pasada"], ["was able to", "logro concreto, una vez"], ["will be able to", "futuro de can"]]],
    ["<h3>Mustn't o don't have to</h3>", "Mustn't frente a don't have to", [["mustn't", "prohibido: no lo hagas"], ["don't have to", "no es necesario"]], "You mustn't… / You don't have to…"],
    ["<h3>Should have, could have</h3>", "Modales perfectos para el pasado", [["should have", "crítica o arrepentimiento"], ["could have", "posibilidad no aprovechada"], ["needn't have", "lo hiciste sin necesidad"]], "modal + have + participio"],
    ["<h3>Ought to y had better</h3>", "Ought to y had better", [["ought to", "= should, más formal"], ["had better", "consejo con aviso"], ["Negativa", "you'd better not"]]],
    ["<h3>Deducciones sobre el pasado</h3>", "Deducciones sobre el pasado", [["must have", "seguro que sí"], ["might have", "quizá"], ["can't have", "seguro que no"]], "modal + have + participio"],
    ["<h3>Pedir, ofrecer y sugerir con cortesía</h3>", "Pedir, ofrecer y sugerir", [["Pedir", "Could you…? · Would you mind…?"], ["Ofrecer", "Shall I…? · Can I help?"], ["Sugerir", "We could… · Shall we…?"]]],
  ],
  bloques: [
    { tras: "<h3>Mustn't o don't have to</h3>", html: `<h3>Need, needn't y be allowed to</h3><p>Para hablar de <b>necesidad</b> se usa <b>need to</b> como un verbo normal: «I <b>need to</b> buy some bread», «Do you <b>need to</b> go now?», «You <b>don't need to</b> come». En inglés británico existe también <b>needn't</b> como modal, con el mismo sentido que <i>don't have to</i>: «You <b>needn't</b> worry» (no hace falta que te preocupes).</p><p>Para el <b>permiso</b> en otros tiempos verbales usamos <b>be allowed to</b>, porque <i>can</i> solo tiene presente y <i>could</i>: «Were you <b>allowed to</b> go out late when you were 14?», «We <b>won't be allowed to</b> use dictionaries in the exam», «Students <b>are not allowed to</b> leave the school at break». La forma negativa es una manera muy frecuente de expresar prohibición en las normas.</p><p>Resumen de la familia de la obligación: <b>must / have to</b> (es obligatorio), <b>mustn't / not be allowed to</b> (está prohibido), <b>don't have to / don't need to / needn't</b> (no es obligatorio, puedes elegir). Muchos errores de los exámenes vienen de confundir la segunda y la tercera fila, así que piensa siempre: ¿está prohibido o simplemente no hace falta?</p>`, svg: ["Obligación, prohibición y ausencia de obligación", [["Obligatorio", "must · have to · need to"], ["Prohibido", "mustn't · not allowed to"], ["No hace falta", "don't have to · needn't"]]] },
    { tras: "<h3>Ought to y had better</h3>", html: `<h3>Would like, would rather y would prefer</h3><p><b>Would</b> sirve también para expresar deseos y preferencias de forma educada. <b>Would like</b> + to + infinitivo equivale a «me gustaría»: «I'<b>d like to</b> visit Iceland». Es más cortés que <i>want</i>, sobre todo al pedir: «I'd like a glass of water, please». No lo confundas con <b>like</b> sin would, que expresa un gusto general: «I like swimming» (me gusta nadar) / «I'd like to swim» (me apetece nadar ahora).</p><p><b>Would rather</b> + infinitivo sin to significa «preferiría»: «I'<b>d rather stay</b> at home tonight», «I'd rather <b>not</b> talk about it». Para comparar se añade <b>than</b>: «I'd rather walk <b>than</b> take the bus». <b>Would prefer</b> lleva to: «I'<b>d prefer to</b> go by train».</p><p>Con otra persona, <i>would rather</i> va seguido de sujeto + pasado: «I'd rather <b>you didn't</b> tell anyone» (preferiría que no se lo contaras a nadie). Es una estructura avanzada, pero muy natural en la conversación.</p>`, svg: ["Deseos y preferencias con would", [["would like to", "I'd like to visit Iceland."], ["would rather + inf.", "I'd rather stay home."], ["would prefer to", "I'd prefer to go by train."]]] },
    { tras: "<h3>Pedir, ofrecer y sugerir con cortesía</h3>", html: `<h3>Modales en normas y avisos</h3><p>Los textos de normas (reglamentos, carteles, instrucciones de un examen, condiciones de uso de una web) tienen un estilo propio que conviene reconocer. Suelen usar <b>must</b> y <b>must not</b> en lugar de <i>have to</i>: «All visitors <b>must</b> sign in at reception», «Food and drink <b>must not</b> be taken into the library». A menudo van en <b>pasiva</b>, porque lo importante es la norma y no quién la impone: «Mobile phones <b>must be switched off</b>».</p><p>Para dar permiso en tono formal se usa <b>may</b>: «Candidates <b>may</b> use a calculator», «You <b>may</b> leave when you have finished». Y para prohibir sin modales, expresiones como <i>is not permitted</i>, <i>is forbidden</i> o <i>No + -ing</i>: «Smoking is not permitted», «No parking».</p><p>Cuando escribas las normas de un club o de la clase, combina las tres funciones: lo obligatorio (must), lo prohibido (mustn't, not allowed) y lo que es opcional (don't have to, may). Así las normas quedan completas y claras.</p>`, svg: ["Lenguaje de las normas escritas", [["Obligación", "Visitors must sign in."], ["Pasiva", "Phones must be switched off."], ["Permiso formal", "You may use a calculator."], ["Prohibido", "Smoking is not permitted."]]] },
    { html: `<h3>Modales para matizar opiniones</h3><p>En un ensayo o en un debate, las afirmaciones demasiado rotundas suenan poco convincentes. Los modales ayudan a <b>matizar</b> (en inglés se llama <i>hedging</i>): en lugar de «Social media destroys friendships», escribe «Social media <b>can</b> damage friendships» o «<b>may</b> have a negative effect on…». Así muestras que piensas con cuidado.</p><p>Para proponer soluciones se usan <b>should</b> y <b>could</b>: «The government <b>should</b> invest more in public transport», «Schools <b>could</b> offer more sports activities». Con <b>might</b> presentas una idea con prudencia: «This <b>might</b> be the best option». Y con <b>must</b> subrayas una obligación moral: «We <b>must</b> act now to protect the oceans».</p><p>Una buena conclusión combina varios modales: «Although technology <b>can</b> cause problems, I believe that we <b>should</b> use it wisely, because it <b>could</b> improve our lives in many ways». Fíjate en cómo el texto suena equilibrado y razonado. Este uso enlaza directamente con el tema de los <i>opinion essays</i>.</p>`, svg: ["Modales para matizar en un ensayo", [["can / may", "puede afectar (no siempre)"], ["might", "idea presentada con prudencia"], ["should / could", "propuestas y soluciones"], ["must", "obligación moral"]]] },
  ],
  grupos: [3, 3, 4, 2, 3],
  ejemplos: [
    ["Completa con el modal adecuado: «You ___ bring food; there's a café at the museum.»", ["La idea es que no es necesario, no que esté prohibido.", "Ausencia de obligación: don't have to / needn't."], "You <b>don't have to</b> (o <b>needn't</b>) bring food."],
    ["Expresa una preferencia comparando: ir en bici / ir en coche.", ["Would rather + infinitivo sin to.", "Than para comparar."], "I<b>'d rather go</b> by bike <b>than</b> by car."],
    ["Matiza esta afirmación para un ensayo: «Video games make children violent.»", ["Es una afirmación tajante y difícil de demostrar.", "Usamos may o can y un verbo más prudente."], "Some violent video games <b>may</b> make children more aggressive."],
  ],
  errores: ["Usar mustn't como contrario de must en deducciones: «He mustn't be at home» ✗ → «He can't be at home» ✓."],
  niveles: "bbbbmmmmma",
  ejercicios: [
    ["b", "Corrige: «She can to speak three languages.»", "She <b>can speak</b> three languages. Tras un modal, infinitivo sin to."],
    ["b", "Completa con should o shouldn't: «You ___ eat so many sweets. They're bad for your teeth.»", "You <b>shouldn't</b> eat so many sweets."],
    ["b", "Escribe la pregunta: «I can use your pen.» (pide permiso)", "<b>Can I</b> use your pen? (Más educado: Could I…? / May I…?)"],
    ["b", "Completa con had to: «Yesterday I (go) ___ to the doctor.»", "Yesterday I <b>had to go</b> to the doctor. Pasado de must / have to."],
    ["b", "Completa con would like o like: «I ___ chocolate.» (en general) / «I ___ a hot chocolate now, please.»", "I <b>like</b> chocolate. / I<b>'d like</b> a hot chocolate now, please."],
    ["b", "Escribe una norma de la biblioteca con mustn't.", "Ejemplo: «You <b>mustn't</b> eat in the library.»"],
    ["b", "Completa con be able to: «I hope I (speak) ___ English fluently one day.»", "I hope I <b>will be able to speak</b> English fluently one day."],
    ["b", "Ofrécete a ayudar con Shall I.", "<b>Shall I</b> help you with your bags?"],
    ["m", "Completa con mustn't, don't have to o can't: «You ___ pay, the museum is free.» / «You ___ touch the paintings.»", "You <b>don't have to</b> pay. / You <b>mustn't</b> touch the paintings."],
    ["m", "Completa con would rather: «I (not / go) ___ out tonight. I'm tired.»", "I<b>'d rather not go</b> out tonight."],
    ["m", "Pasa la norma a pasiva: «You must switch off your phones.»", "Phones <b>must be switched off</b>."],
    ["m", "Haz una deducción: «The windows are broken and the TV is missing.»", "Somebody <b>must have broken</b> in. / There <b>must have been</b> a burglary."],
    ["m", "Completa con was able to o could: «The fire was huge, but everybody ___ escape.»", "everybody <b>was able to</b> escape. Logro concreto en una ocasión."],
    ["m", "Da un consejo con had better: tu amigo tiene examen mañana y no ha estudiado.", "You<b>'d better</b> start studying now, or you'll fail."],
    ["m", "Completa con needn't have o didn't need to: «I ___ cooked so much food. Only three people came.»", "I <b>needn't have</b> cooked so much food. Lo hice, pero no hacía falta."],
    ["m", "Elige: «When I was little I (wasn't allowed to / mustn't) stay up late.»", "<b>wasn't allowed to</b>: en pasado no existe mustn't."],
    ["m", "Haz más educada la petición: «Give me your notes.»", "<b>Could you</b> lend me your notes, please? / <b>Would you mind</b> lending me your notes?"],
    ["a", "Escribe cinco normas para un club de lectura usando must, mustn't, don't have to, may y be allowed to.", "Ejemplo: «Members must read the book before the meeting. You mustn't tell the end of the book. You don't have to buy the books: you can borrow them. Members may bring a friend. You are allowed to bring snacks.»"],
    ["a", "Traduce: «Deberías habérmelo dicho antes.»", "You <b>should have told</b> me before."],
    ["a", "Traduce: «Preferiría que no usaras mi móvil.»", "I<b>'d rather you didn't use</b> my phone."],
    ["a", "Explica la diferencia: «He must have left» / «He had to leave».", "«He must have left»: deducción (estoy casi seguro de que se ha ido). «He had to leave»: obligación en el pasado (tuvo que irse)."],
    ["a", "Reescribe la frase de un ensayo matizándola con dos modales: «Homework is useless and teachers must stop giving it.»", "Ejemplo: «Too much homework <b>can</b> be counterproductive, so teachers <b>should</b> perhaps give less of it.»"],
    ["a", "Corrige los errores: «You mustn't to come if you don't want. When I was child I can swim very good.»", "You <b>don't have to</b> come if you don't want. When I was <b>a</b> child I <b>could</b> swim very <b>well</b>."],
    ["a", "Haz tres deducciones sobre esta situación: tu vecino ha llegado con una medalla y la ropa mojada.", "Ejemplos: «He must have won a race.» «He might have been swimming.» «He can't have been at home all day.»"],
    ["a", "Escribe una respuesta de 50 palabras a un amigo que te pide consejo porque quiere dejar el fútbol.", "Modelo: «If I were you, I wouldn't decide too quickly. You should talk to your coach first. You could also try a different position. Maybe you'd rather do another sport, like basketball. You don't have to stay if you're not happy, but you'd better think about it carefully.»"],
    ["a", "Explica la diferencia entre «You needn't have come» y «You didn't need to come».", "«Needn't have come»: viniste, pero no hacía falta. «Didn't need to come»: no era necesario venir (normalmente no viniste)."],
  ],
  cuartas: ["She is can swim.", "doesn't have to", "haven't to", "must to", "mustn't", "needn't to", "must", "is can to", "Can", "should had", "cans", "has to", "been able"],
  quiz: [
    ["«Visitors ___ sign in at reception.» (norma)", ["must", "mustn't", "needn't", "may not"], 0, "Obligación formal en una norma."],
    ["«I'd rather ___ at home tonight.»", ["stay", "to stay", "staying", "stayed"], 0, "Would rather + infinitivo sin to."],
    ["«You ___ worry. Everything is fine.»", ["needn't", "mustn't", "can't", "shouldn't to"], 0, "Needn't = no hace falta."],
    ["«When I was 12, I ___ go out alone at night.»", ["wasn't allowed to", "mustn't", "can't", "don't have to"], 0, "Prohibición en pasado: wasn't allowed to."],
    ["«I'd like ___ Iceland one day.»", ["visit", "to visit", "visiting", "visited"], 1, "Would like + to + infinitivo."],
    ["«The lights are off. They ___ be at home.»", ["must", "can't", "mustn't", "should"], 1, "Deducción negativa: can't."],
    ["«You ___ bought a cake. We already have one!»", ["needn't have", "mustn't have", "can't have", "had to"], 0, "Lo hiciste sin necesidad: needn't have."],
    ["«Candidates ___ use a calculator.» (permiso formal)", ["may", "must to", "ought", "would"], 0, "May = permiso formal."],
    ["«You'd better ___ late again.»", ["not be", "don't be", "not to be", "no be"], 0, "Had better not + infinitivo sin to."],
    ["En un ensayo, ¿qué frase suena más matizada?", ["Phones destroy concentration.", "Phones can affect concentration.", "Phones always destroy everything.", "Phones must destroy concentration."], 1, "Can presenta la idea como posibilidad."],
  ],
  examen: [
    ["«I ___ finish my project yesterday because the computer broke.»", ["couldn't", "mustn't", "needn't", "shouldn't"], 0, "Imposibilidad en el pasado: couldn't."],
    ["«She ___ have taken the bus; her bike is here.»", ["must", "can't", "mustn't", "should"], 0, "Deducción sobre el pasado: must have."],
    ["«You ___ come with us if you don't want to.»", ["don't have to", "mustn't", "can't", "had better"], 0, "Ausencia de obligación."],
    ["«I'd rather walk ___ take the bus.»", ["than", "that", "to", "then"], 0, "Would rather… than…"],
    ["«Mobile phones must ___ off during the exam.»", ["be switched", "switch", "switched", "to be switched"], 0, "Modal + be + participio (pasiva)."],
  ],
  tarjetas: [
    ["Needn't", "No hace falta: «You needn't come»."],
    ["Be allowed to", "Permiso en cualquier tiempo: «We weren't allowed to…»."],
    ["Would rather", "Preferiría + infinitivo sin to: «I'd rather stay»."],
    ["Hedging", "Matizar con can, may, might en ensayos."],
  ],
  glosario: [
    ["modal verb", "Verbo auxiliar (can, must, should…) que añade capacidad, obligación, consejo o probabilidad."],
    ["can / could", "Capacidad y permiso; could es su pasado y forma educada."],
    ["be able to", "Sustituto de can en otros tiempos: will be able to, have been able to."],
    ["must", "Obligación (a menudo impuesta por quien habla) o deducción segura."],
    ["have to", "Obligación externa; en pasado, had to."],
    ["mustn't", "Prohibición."],
    ["don't have to / needn't", "Ausencia de obligación: no hace falta."],
    ["should / ought to", "Consejo o lo correcto."],
    ["had better", "Consejo con advertencia: es mejor que…"],
    ["may / might", "Posibilidad; may también da permiso formal."],
    ["can't (deducción)", "Seguro que no: «It can't be true»."],
    ["perfect modal", "Modal + have + participio: should have, must have, could have."],
    ["would rather", "Preferiría: «I'd rather stay»."],
    ["be allowed to", "Tener permiso para."],
    ["hedging", "Matizar una afirmación para que suene prudente."],
  ],
  situacion: {
    titulo: "Normas y consejos para los alumnos de intercambio",
    reto: "Vuestro instituto recibe a un grupo de estudiantes británicos durante dos semanas. Tenéis que preparar una guía de bienvenida en inglés con las normas del centro, consejos para moverse por la ciudad y respuestas a las dudas más frecuentes.",
    pasos: ["Recoged las normas reales del instituto y clasificadlas: obligatorio, prohibido y opcional.", "Redactad la sección de normas con must, mustn't, don't have to, may y be allowed to.", "Escribid una sección de consejos para la ciudad con should, could, had better e If I were you.", "Preparad unas FAQ con preguntas educadas (Can I…? Do I have to…?) y sus respuestas.", "Revisad el tono: que las normas sean claras y los consejos, amables.", "Maquetad la guía en un folleto o en una página web sencilla."],
    producto: "Una guía de bienvenida en inglés con normas, consejos y preguntas frecuentes.",
    evaluacion: ["Distingue con precisión obligación, prohibición y ausencia de obligación.", "Da consejos con variedad de estructuras y tono adecuado.", "Formula preguntas educadas correctamente.", "La guía está bien organizada y es útil para el lector."],
  },
  saberes: "Decret 175/2022 de Catalunya (Llengua estrangera, 4t d'ESO): expressió de l'obligació, el permís, el consell i la probabilitat.",
  minutos: 100,
});
