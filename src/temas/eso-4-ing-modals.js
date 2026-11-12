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
