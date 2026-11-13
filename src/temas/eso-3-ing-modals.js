// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Modal verbs: can, must, should",
  minutos: 35,
  objetivos: ["Conocer las reglas comunes de los verbos modales", "Expresar capacidad, permiso, obligación, prohibición y consejo", "Distinguir must, have to, mustn't y don't have to"],
  claves: ["can / could", "must / mustn't", "have to / don't have to", "should / shouldn't", "be able to", "permission"],
  pregunta: {
    texto: "En una piscina ves dos carteles: «You mustn't run» y «You don't have to wear a cap». Si los dos llevan «not», ¿significan lo mismo?",
    respuesta: "¡Para nada! <b>Mustn't</b> es una <mark>prohibición</mark>: no puedes correr. <b>Don't have to</b> significa que <mark>no es obligatorio</mark>: puedes ponerte gorro o no, como quieras. Confundirlos es uno de los errores más comunes en inglés.",
  },
  bloques: [
    {
      html: `<h3>Las reglas de los modales</h3><p>Los verbos modales (<i>can, could, must, should, may, might, will, would</i>) son especiales: 1) <b>no cambian</b> con la persona: «she <b>can</b>», nunca «she cans»; 2) van seguidos de la <mark>forma base sin to</mark>: «I must <b>go</b>», no «must to go»; 3) forman la negativa con <b>not</b> y la pregunta invirtiendo el orden, sin do: «You <b>shouldn't</b> eat that», «<b>Can</b> you swim?».</p>`,
      svg: L.filas("Tres reglas de los verbos modales", [
        ["1", "no cambian: she can", "var(--pen)"], ["2", "+ forma base: can swim", "var(--red)"], ["3", "sin do: Can you…?", "var(--leaf)"],
      ], "modal verbs"),
    },
    {
      html: `<h3>Can y could: capacidad y permiso</h3><p><mark>Can</mark> expresa <b>capacidad</b> en el presente («I <b>can</b> speak three languages») y <b>permiso</b> («You <b>can</b> use my laptop»). <mark>Could</mark> es su pasado para la capacidad («When I was four, I <b>could</b> ride a bike») y también sirve para pedir algo con <b>más educación</b>: «<b>Could</b> you help me, please?». Para pedir permiso de forma muy formal se usa <b>may</b>: «<b>May</b> I come in?».</p>`,
      svg: L.dialogo("Pedir permiso con can, could y may", [
        ["Alumno", "Can I open the window?", "var(--pen)"], ["Profesora", "Yes, of course you can.", "var(--leaf)"], ["Alumno", "Could you repeat that, please?", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Must y have to: obligación</h3><p><mark>Must</mark> expresa una obligación que siente el <b>hablante</b> o una norma escrita: «I <b>must</b> study harder», «Passengers <b>must</b> wear seat belts». <mark>Have to</mark> expresa una obligación que viene de <b>fuera</b> (normas, horarios): «I <b>have to</b> wear a uniform at school». <i>Have to</i> sí cambia: <b>she has to</b>, y tiene pasado y futuro: «I <b>had to</b> wait», «You'<b>ll have to</b> hurry».</p>`,
      svg: L.frase("Have to: She has to get up at seven", [
        ["She", "", "var(--ink)"], ["has to", "obligación", "var(--red)"], ["get up", "forma base", "var(--pen)"], ["at 7.", "", "var(--line)"],
      ], "have to cambia: has to, had to"),
    },
    {
      html: `<h3>Mustn't y don't have to</h3><p>En negativa, el significado cambia por completo. <mark>Mustn't</mark> = <b>prohibición</b>, está prohibido: «You <b>mustn't</b> use your phone in the exam». <mark>Don't have to</mark> = <b>no es necesario</b>, hay libertad: «You <b>don't have to</b> come if you don't want to». Compara: «You mustn't eat in class» (prohibido) / «It's Sunday, so I don't have to get up early» (no hace falta).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos señales: una de prohibido para mustn't y otra con una marca de opcional para don't have to">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="70" cy="74" r="40" fill="var(--card)" stroke="var(--red)" stroke-width="7"/><path d="M42 102 L 98 46" stroke="var(--red)" stroke-width="7"/>
        <circle cx="190" cy="74" r="40" fill="var(--card)" stroke="var(--leaf)" stroke-width="7"/>
        <g ${F} font-weight="700" text-anchor="middle"><text x="70" y="80" font-size="14" fill="var(--ink)">NO</text><text x="190" y="72" font-size="13" fill="var(--leaf)">you</text><text x="190" y="88" font-size="13" fill="var(--leaf)">choose</text><text x="70" y="140" font-size="13" fill="var(--red)">mustn't</text><text x="70" y="158" font-size="11" fill="var(--muted)">prohibido</text><text x="190" y="140" font-size="13" fill="var(--leaf)">don't have to</text><text x="190" y="158" font-size="11" fill="var(--muted)">no es necesario</text></g></svg>`,
    },
    {
      html: `<h3>Should: consejos</h3><p><mark>Should / shouldn't</mark> sirve para dar <b>consejos</b> y opiniones sobre lo que está bien o mal: «You <b>should</b> drink more water», «You <b>shouldn't</b> stay up so late». Es más suave que must. Para pedir consejo: «What <b>should</b> I do?», «<b>Should</b> I tell her?». También se usan <b>ought to</b> (igual que should, más formal) y <b>had better</b> (más fuerte, como advertencia): «You'<b>d better</b> hurry or you'll miss the bus».</p>`,
      svg: L.filas("De más fuerte a más suave", [
        ["must", "obligación fuerte", "var(--red)"], ["had better", "advertencia", "var(--sun)"], ["should", "consejo", "var(--pen)"], ["could", "sugerencia", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Los modales y su función",
    svg: L.columnas("Funciones de los verbos modales con ejemplos", [
      ["capacidad · permiso", "CAN", ["I can swim.", "Can I go?"], "var(--leaf)"],
      ["obligación", "MUST", ["I must go.", "I have to go."], "var(--red)"],
      ["prohibido · no hace falta", "MUSTN'T", ["You mustn't.", "You don't have to."], "var(--sun)"],
      ["consejo", "SHOULD", ["You should rest.", "You shouldn't."], "var(--pen)"],
    ]),
  },
  video: { id: "Xhd1bEVXoZk", titulo: "Modal verbs: must, have to, should, ought to, had better, need", canal: "Inglés Para Perezosos", vistas: 1015156, megusta: 0, busqueda: "modal verbs can must should" },
  quiz: [
    { q: "«She ___ play the piano very well.»", o: ["cans", "can", "can to"], a: 1, e: "Los modales no cambian ni llevan to." },
    { q: "«You ___ smoke in the hospital.»", o: ["mustn't", "don't have to", "shouldn't to"], a: 0, e: "Prohibición: mustn't." },
    { q: "«Tomorrow is a holiday, so we ___ go to school.»", o: ["mustn't", "don't have to", "can't"], a: 1, e: "No es necesario: don't have to." },
    { q: "«You look tired. You ___ go to bed.»", o: ["should", "must to", "can't"], a: 0, e: "Consejo: should." },
    { q: "«___ you lend me your pen, please?» (educado)", o: ["Could", "Must", "Should"], a: 0, e: "Could para pedir con educación." },
  ],
  examen: [
    { q: "«Yesterday I ___ wait for an hour.»", o: ["must", "had to", "have to"], a: 1, e: "Must no tiene pasado: had to." },
    { q: "«My brother ___ wear glasses.» (obligación)", o: ["have to", "has to", "must to"], a: 1, e: "Tercera persona: has to." },
    { q: "«When I was five, I ___ read.»", o: ["can", "could", "must"], a: 1, e: "Capacidad en el pasado: could." },
  ],
  feynman: ["Qué reglas comparten todos los modales", "Para qué sirven can y could", "La diferencia entre must y have to", "La diferencia entre mustn't y don't have to"],
  mapa: mapa("MODAL VERBS", "var(--eso)", [
    ["Ability", "can · could · be able to", "var(--leaf)"],
    ["Permission", "can · could · may", "var(--pen)"],
    ["Obligation", "must · have to · mustn't", "var(--red)"],
    ["Advice", "should · ought to", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Reglas de los modales", "No cambian, van con forma base sin to y no usan do."],
    ["Could", "Capacidad en el pasado o petición educada."],
    ["Mustn't", "Prohibición: está prohibido."],
    ["Don't have to", "No es necesario, no es obligatorio."],
    ["Should", "Consejo: You should…"],
  ],
  familias: ["Escribid juntos en inglés cinco normas de casa con must, mustn't y don't have to.", "Pedidle consejos en inglés para un problema inventado y que responda con should.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: verbos modales para expresar capacidad, permiso, obligación, prohibición y consejo; normas y señales (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["Crear el reglamento de una clase ideal o de un campamento.", "Consultorio sentimental en parejas con should.", "Interpretar señales y carteles reales en inglés."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: modal verbs", url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/modal-verbs-obligation" },
    { t: "Cambridge Dictionary: modal verbs and modality", url: "https://dictionary.cambridge.org/grammar/british-grammar/modals-and-modality" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Usar be able to en los tiempos en los que no existe can", "Expresar deducciones con must y can't, y posibilidad con may y might"],
  bloques: [
    { tras: "Can y could: capacidad y permiso", html: `<h3>Be able to</h3><p><i>Can</i> solo tiene presente y <i>could</i>, pasado. Para los demás tiempos usamos <mark>be able to</mark> (ser capaz de): futuro («I'<b>ll be able to</b> drive next year»), present perfect («I'<b>ve</b> never <b>been able to</b> whistle»), después de otro modal («You <b>should be able to</b> do it») o tras un verbo con to («I'd like <b>to be able to</b> play the drums»). En pasado, para algo concreto que <b>conseguiste</b> hacer en una ocasión con esfuerzo, se prefiere <b>was / were able to</b> o <i>managed to</i>: «The fire was big, but everybody <b>was able to</b> escape».</p>` },
    { tras: "Mustn't y don't have to", html: `<h3>Normas y señales</h3><p>Los modales son la forma habitual de escribir normas. Fíjate en estos carteles y en su significado:</p>${L.tb(["Cartel", "Significado"], [["You <b>must</b> show your ticket.", "Es obligatorio enseñar la entrada."], ["Visitors <b>mustn't</b> touch the paintings.", "Está prohibido tocar los cuadros."], ["You <b>can</b> take photos without flash.", "Está permitido hacer fotos sin flash."], ["You <b>can't</b> bring food inside.", "No se permite entrar comida."], ["Children <b>don't have to</b> pay.", "Los niños no tienen que pagar (gratis)."], ["You <b>should</b> book in advance.", "Se recomienda reservar."]])}<p>Observa que <b>can't</b> también sirve para prohibir, sobre todo en normas: «You <b>can't</b> park here».</p>`, video: L.vid("w5vVaWgUcZ0", "Cuándo usar must y have to en inglés", "Alejo Lopera Inglés", 608604) },
    { tras: "Should: consejos", html: `<h3>Deducciones: must, can't, might</h3><p>Los modales también sirven para <b>deducir</b> a partir de pruebas. <mark>Must</mark> = estoy seguro de que sí: «She's been running for an hour. She <b>must be</b> tired». <mark>Can't</mark> = estoy seguro de que no: «That <b>can't be</b> Tom. He's in London». <mark>May / might / could</mark> = es posible: «Where's Ana? — She <b>might be</b> in the library». Fíjate en que aquí <i>must</i> no expresa obligación, y que lo contrario de <i>must</i> en las deducciones no es <i>mustn't</i>, sino <b>can't</b>.</p>` },
    { tras: "Should: consejos", html: `<h3>Pedir, ofrecer y sugerir</h3><p>En la conversación diaria los modales suavizan lo que decimos. Para <b>pedir</b>, de más informal a más formal: «<b>Can</b> you pass me the salt?», «<b>Could</b> you pass me the salt?», «<b>Would</b> you mind passing me the salt?». Para <b>ofrecer</b>: «<b>Can</b> I help you?», «<b>Shall</b> I carry your bag?», «<b>Would</b> you like some tea?». Para <b>sugerir</b>: «We <b>could</b> go to the beach», «<b>Shall</b> we go to the beach?», «Why don't we go to the beach?». Responder con naturalidad también importa: <i>Sure! / Of course. / I'm afraid I can't. / That's a great idea!</i></p>` },
    { tras: "Must y have to: obligación", html: `<h3>Need to y needn't</h3><p>Otra forma de hablar de necesidad es <mark>need to</mark>, que funciona como un verbo normal: «I <b>need to</b> buy a new charger», «Do you <b>need to</b> go now?», «She <b>doesn't need to</b> come». La negativa <b>don't need to</b> significa lo mismo que <i>don't have to</i>: no es necesario. En inglés británico también existe la forma modal <b>needn't</b>: «You <b>needn't</b> worry» (no hace falta que te preocupes). En pasado: «I <b>didn't need to</b> study much; the exam was easy». Recuerda que, para la prohibición, se usa siempre <i>mustn't</i> o <i>can't</i>, nunca <i>needn't</i>.</p>` },
  ],
  ejemplos: [
    ["Elige mustn't o don't have to: «You ___ shout in the library.» / «You ___ bring a dictionary; we have lots.»", ["Gritar en la biblioteca está prohibido: mustn't.", "Traer diccionario no es necesario porque ya hay: don't have to."], "You mustn't shout in the library. / You don't have to bring a dictionary."],
    ["Pasa al pasado y al futuro: «I have to do my homework.»", ["Must no tiene pasado ni futuro: usamos have to.", "Pasado: had to.", "Futuro: will have to."], "I had to do my homework. / I'll have to do my homework."],
    ["Deduce con must, can't o might: «The lights are off and nobody answers the phone.»", ["Hay pruebas claras de que no hay nadie.", "Deducción afirmativa con mucha seguridad: must.", "También: They can't be at home."], "They must be out. / They can't be at home."],
  ],
  errores: [
    "Poner to después de un modal: *I can to swim → I can swim.",
    "Añadir -s a un modal: *She musts → She must.",
    "Confundir mustn't (prohibido) con don't have to (no necesario).",
    "Usar must en pasado: *Yesterday I must study → Yesterday I had to study.",
    "Usar do con modales: *Do you can…? → Can you…?",
  ],
  ejercicios: [
    ["Corrige: «He can to speak Chinese.»", "He can speak Chinese."],
    ["Completa con can o could en afirmativa o negativa: «When I was three, I ___ swim, but now I ___ swim very well.»", "couldn't, can: «When I was three, I couldn't swim, but now I can swim very well.»"],
    ["Escribe una petición educada para pedir a alguien que cierre la puerta.", "Could you close the door, please?"],
    ["Completa con have to en la forma correcta: «My dad ___ work on Saturdays.»", "has to."],
    ["Completa con mustn't o don't have to: «It's free. You ___ pay.»", "don't have to."],
    ["Completa con mustn't o don't have to: «It's dangerous. You ___ swim here.»", "mustn't."],
    ["Da dos consejos con should y shouldn't a alguien que duerme poco.", "You should go to bed earlier. You shouldn't use your phone in bed."],
    ["Pasa al futuro con be able to: «I can't come to the party.»", "I won't be able to come to the party."],
    ["Deduce: «He's got a Real Madrid scarf and shirt.» (must)", "He must be a Real Madrid fan."],
    ["Escribe cuatro normas para el laboratorio de ciencias con must, mustn't, can y don't have to.", "Por ejemplo: «You must wear goggles. You mustn't eat or drink. You can ask the teacher for help. You don't have to bring your own materials.»"],
  ],
  quiz: [
    ["«I'll ___ help you tomorrow.»", ["can", "be able to", "could"], 1, "Futuro de can: will be able to."],
    ["«She's been working all day. She ___ be exhausted.»", ["must", "mustn't", "can't"], 0, "Deducción afirmativa."],
    ["«That ___ be John. He's on holiday.»", ["can't", "mustn't", "doesn't have to"], 0, "Deducción negativa: can't."],
    ["«___ we go to the cinema?» (sugerencia)", ["Shall", "Must", "Do"], 0, "Shall we…? para sugerir."],
    ["«You ___ to bring anything. I've got everything.»", ["don't need", "mustn't", "needn't to"], 0, "Don't need to = no hace falta."],
  ],
  tarjetas: [
    ["Be able to", "Sustituye a can en otros tiempos: I'll be able to."],
    ["Must / can't (deducción)", "Seguro que sí / seguro que no: She must be tired / It can't be true."],
    ["Shall we…?", "Para sugerir: Shall we go?"],
  ],
});

// Nivel libro (3º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso3L6").libro(module.exports, {
  lectura: ["Las normas del campamento", `<p>El primer día del campamento de verano en Gales, la monitora reúne al grupo y explica las normas: <i>«You must wear a helmet on the climbing wall. You mustn't leave the camp without a monitor. You don't have to bring your own sleeping bag; we've got plenty. You can use your phones after dinner, and if you feel homesick, you should talk to us.»</i></p><p>En un solo minuto ha usado seis verbos que el inglés llama <b>modales</b>, y cada uno tiene un matiz distinto. <i>Must</i> expresa una obligación fuerte; <i>mustn't</i>, una prohibición; <i>don't have to</i>, que algo no es necesario (¡no que esté prohibido!); <i>can</i>, un permiso; y <i>should</i>, un consejo. Si confundes <i>mustn't</i> con <i>don't have to</i>, entenderás justo lo contrario de lo que te dicen.</p><p>Los modales son verbos pequeños pero muy poderosos: sirven para expresar capacidad, permiso, obligación, prohibición, consejo, posibilidad y deducción, y aparecen en las señales, los reglamentos, las recetas, los consejos de salud y en casi cualquier conversación. En este tema aprenderás sus reglas especiales (no llevan -s, ni to, ni do), sus significados y sus formas en pasado y en futuro. Al final podrás redactar tus propias normas para un espacio del instituto.</p>`],
  mas: [
    ["<h3>Need to y needn't</h3>", `<p><b>Need to</b> se comporta como un verbo normal: lleva -s en tercera persona y forma preguntas y negativas con do: «She <b>needs to</b> rest», «<b>Do</b> I <b>need to</b> bring anything?». En cambio, <b>needn't</b> funciona como un modal (sin to y sin do) y es más propio del inglés británico: «You <b>needn't</b> come». Las dos formas negativas significan lo mismo que <i>don't have to</i>: no es necesario.</p>`],
    ["<h3>Mustn't y don't have to</h3>", `<p>Un buen truco para no confundirlos es pensar en la consecuencia: con <i>mustn't</i>, si lo haces, te metes en un problema; con <i>don't have to</i>, si lo haces no pasa nada, simplemente no es necesario.</p>`],
    ["<h3>Las reglas de los modales</h3>", `<p>Estas reglas tienen una consecuencia práctica: los modales <b>no tienen infinitivo ni participio</b>, así que no pueden ir detrás de otro modal ni en tiempos compuestos. No se puede decir «will can» ni «have could». Para esos casos usamos un verbo equivalente: <b>be able to</b> en lugar de can, y <b>have to</b> en lugar de must: «I<b>'ll be able to</b> come», «I<b>'ve had to</b> wait». Además, las preguntas se forman simplemente invirtiendo el orden: «<b>Can</b> you swim?», «<b>Should</b> I call her?», y las respuestas cortas repiten el modal: «Yes, I <b>can</b>. / No, you <b>shouldn't</b>.»</p>`],
    ["<h3>Can y could: capacidad y permiso</h3>", `<p>Para pedir permiso hay tres grados de formalidad: <b>Can I…?</b> (normal, entre amigos y en casa), <b>Could I…?</b> (más educado, con profesores o desconocidos) y <b>May I…?</b> (muy formal). Para dar permiso respondemos «Yes, of course you can» o «Sure, go ahead»; para negarlo, con suavidad: «I'm sorry, you can't». Con los verbos de percepción (<i>see, hear, smell</i>) es muy frecuente usar can: «I <b>can hear</b> music» (oigo música).</p>`],
    ["<h3>Be able to</h3>", `<p>En pasado, <b>could</b> expresa una capacidad general («I could swim when I was five»), mientras que <b>was / were able to</b> (o <i>managed to</i>) expresa que alguien <mark>consiguió</mark> hacer algo concreto en una situación difícil: «The exam was hard, but I <b>was able to</b> finish it». En negativa, las dos formas son posibles: «I <b>couldn't</b> / <b>wasn't able to</b> open the door».</p>`],
    ["<h3>Must y have to: obligación</h3>", `<p>Must solo existe en presente; para el pasado y el futuro se usa <b>have to</b>: «Yesterday I <b>had to</b> get up at six», «Tomorrow we<b>'ll have to</b> take a taxi». Las preguntas con have to llevan <b>do / does / did</b>: «<b>Do</b> you <b>have to</b> wear a uniform?», «<b>Did</b> she <b>have to</b> pay?». En los textos escritos formales (normas, carteles) aparece <i>must</i>; al hablar de nuestras obligaciones diarias, los nativos usan mucho más <i>have to</i>.</p>`],
    ["<h3>Should: consejos</h3>", `<p>Should es más suave que must: es una recomendación, no una orden. Para pedir consejo se usa en pregunta: «What <b>should</b> I do?», «<b>Should</b> I tell my parents?». Para dar una opinión con educación se combina con <i>I think</i> o <i>I don't think</i>: «<b>I think</b> you should apologise», «<b>I don't think</b> you should go» (más natural que «I think you shouldn't go»). Otra forma muy común de aconsejar es <b>If I were you, I'd…</b>: «If I were you, I'd study a bit every day».</p>`],
    ["<h3>Deducciones: must, can't, might</h3>", `<p>Para deducir hay que mirar las <b>pruebas</b>: cuanto más seguras sean, más fuerte es el modal. «The lights are on. Someone <b>must</b> be at home» (casi seguro). «She <b>might</b> be at the gym, or she <b>could</b> be at her friend's» (posible). «He <b>can't</b> be hungry. He's just eaten» (imposible). Atención: lo contrario de <i>must</i> en las deducciones es <b>can't</b>, no <i>mustn't</i>.</p>`],
    ["<h3>Pedir, ofrecer y sugerir</h3>", `<p>Para responder a las sugerencias: aceptar con «Good idea!», «Why not?», «That sounds great»; rechazar con educación con «I'd rather not», «I'm not sure, actually» o «Sorry, I can't. I have to…». Otras fórmulas de sugerencia muy usadas son <b>Let's…</b> («Let's go to the beach!»), <b>Why don't we…?</b> y <b>How about + -ing?</b> («How about going to the cinema?»).</p>`],
  ],
  svgs: [
    ["<h3>Be able to</h3>", "Can y be able to en distintos tiempos", [["presente", "I can / I'm able to swim."], ["pasado", "I could / I was able to."], ["futuro", "I'll be able to come."]], "can solo tiene presente y pasado"],
    ["<h3>Need to y needn't</h3>", "Necesidad y ausencia de necesidad", [["need to", "I need to study."], ["don't need to", "You don't need to come."], ["needn't", "You needn't worry."]]],
    ["<h3>Normas y señales</h3>", "Los modales en las normas", [["obligación", "You must wear a helmet."], ["prohibición", "You mustn't run."], ["permiso", "You can sit here."]], "señales y reglamentos"],
    ["<h3>Deducciones: must, can't, might</h3>", "Grados de certeza en las deducciones", [["casi seguro", "He must be tired."], ["posible", "She might be at home."], ["imposible", "It can't be true."]]],
    ["<h3>Pedir, ofrecer y sugerir</h3>", "Pedir, ofrecer y sugerir con modales", [["pedir", "Could you help me?"], ["ofrecer", "Shall I open the door?"], ["sugerir", "Shall we go? · Let's go!"]]],
  ],
  bloques: [
    { tras: "<h3>Mustn't y don't have to</h3>", html: `<h3>Los modales en pasado</h3><p>Como los modales no tienen todas las formas, para hablar del pasado cada uno tiene su propio recurso:</p><ul><li><b>can</b> → <b>could / couldn't</b>: «I <b>couldn't</b> sleep last night because of the storm».</li><li><b>must / have to</b> → <b>had to</b>: «We <b>had to</b> walk home because there were no buses». No existe «musted».</li><li><b>don't have to</b> → <b>didn't have to</b>: «It was Sunday, so I <b>didn't have to</b> get up early».</li><li><b>mustn't</b> → <b>wasn't / weren't allowed to</b> o <b>couldn't</b>: «When I was little, I <b>wasn't allowed to</b> watch TV after nine».</li><li><b>need to</b> → <b>needed to / didn't need to</b>: «I <b>didn't need to</b> buy a ticket; my friend had one for me».</li></ul><p>Las preguntas en pasado con <i>had to</i> se hacen con <b>did</b>: «<b>Did</b> you <b>have to</b> wait long?» «Yes, I <b>did</b>.» Este bloque es muy útil para contar cómo eran las normas antes: en casa de tus abuelos, en tu antiguo colegio o en otra época histórica: «In the past, students <b>had to</b> stand up when the teacher came in».</p>`, svg: ["Los modales en pasado", [["can", "→ could / couldn't"], ["must · have to", "→ had to"], ["don't have to", "→ didn't have to"], ["mustn't", "→ wasn't allowed to"]], "presente → pasado"] },
    { tras: "<h3>Should: consejos</h3>", html: `<h3>Ought to y had better</h3><p>Además de <i>should</i>, el inglés tiene otras dos formas de aconsejar:</p><ul><li><b>ought to</b> significa casi lo mismo que should, pero es menos frecuente y algo más formal. Es el único «modal» que lleva <b>to</b>: «You <b>ought to</b> see a doctor». En negativa y en pregunta se prefiere should.</li><li><b>had better</b> (contraído <b>'d better</b>) da un consejo <mark>más fuerte y urgente</mark>, casi una advertencia: si no lo haces, habrá un problema. «You<b>'d better</b> hurry or you'll miss the bus», «We<b>'d better not</b> make noise; the baby is sleeping». Aunque lleva <i>had</i>, se refiere al presente o al futuro, y va seguido del verbo base sin to.</li></ul><p>Compara la fuerza de los consejos y obligaciones: «You <b>could</b> try the green one» (sugerencia suave) → «You <b>should</b> wear a coat» (consejo) → «You<b>'d better</b> wear a coat; it's freezing» (advertencia) → «You <b>must</b> wear a coat» (obligación). Elegir bien el modal te permite sonar amable o firme según la situación.</p>`, svg: ["Escala de consejo a obligación", [["sugerencia", "You could try…"], ["consejo", "You should…"], ["advertencia", "You'd better…"], ["obligación", "You must…"]], "de suave a fuerte"] },
    { html: `<h3>Los modales en inglés y en español</h3><p>En español expresamos estas ideas con verbos normales («poder», «deber», «tener que») que se conjugan en todos los tiempos. En inglés hay que elegir el modal adecuado y, a veces, cambiar de estructura:</p><ul><li>«<b>Puedo</b> nadar» (capacidad) → «I <b>can</b> swim»; «<b>¿Puedo</b> salir?» (permiso) → «<b>Can / May</b> I go out?»; «<b>Puede</b> que llueva» (posibilidad) → «It <b>might</b> rain».</li><li>«<b>Debes</b> estudiar» puede ser obligación (<b>must</b>) o consejo (<b>should</b>): depende de la fuerza que quieras dar.</li><li>«<b>Debe de</b> estar cansado» (deducción) → «He <b>must</b> be tired».</li><li>«<b>No tienes que</b> venir» (no es necesario) → «You <b>don't have to</b> come». «<b>No debes</b> venir» (prohibido) → «You <b>mustn't</b> come».</li><li>«<b>Podré</b> ir» → «I'<b>ll be able to</b> go»; «<b>Tuve que</b> esperar» → «I <b>had to</b> wait».</li><li>«<b>Deberías</b> haberme llamado» → se usa <i>should have</i> + participio, una estructura que verás en 4.º.</li></ul><p>El error más grave para un hispanohablante es traducir «no tienes que» por «you mustn't». Recuerda: <i>mustn't</i> = está prohibido; <i>don't have to</i> = no hace falta.</p>`, svg: ["Del español al inglés con modales", [["puedo nadar", "I can swim."], ["puede que llueva", "It might rain."], ["debe de estar…", "He must be…"], ["no tienes que", "You don't have to."]], "elegir el modal"] },
  ],
  videos: [["<h3>Las reglas de los modales</h3>", "modalsA"], ["<h3>Must y have to: obligación</h3>", "modalsB"]],
  grupos: [3, 5, 2, 3],
  ejemplos: [
    ["Pasa al pasado: «I must finish this today and I can't go out.»", ["Must no tiene pasado: se usa had to.", "Can't en pasado es couldn't."], "I <b>had to</b> finish it that day and I <b>couldn't</b> go out."],
    ["Elige y explica: «It's cold and you've got a temperature. You (should / 'd better) stay in bed or you'll get worse.»", ["Hay una advertencia sobre una consecuencia negativa («or you'll get worse»).", "Had better expresa un consejo urgente con advertencia."], "You<b>'d better</b> stay in bed. (Should también sería correcto, pero más suave.)"],
    ["Traduce: «No tienes que traer comida, pero no debes llegar tarde.»", ["No tienes que = no es necesario → don't have to.", "No debes = prohibición → mustn't."], "You <b>don't have to</b> bring food, but you <b>mustn't</b> be late."],
  ],
  errores: ["Inventar un pasado para must: *I musted go → I had to go."],
  niveles: "bbbbbbmmma",
  ejercicios: [
    ["b", "Corrige: «She cans dance.» / «Do you can swim?»", "She <b>can</b> dance. / <b>Can</b> you swim? Los modales no llevan -s ni do."],
    ["b", "Escribe la pregunta y la respuesta corta afirmativa: (you / can / ride a horse).", "<b>Can</b> you ride a horse? — Yes, I <b>can</b>."],
    ["b", "Completa con had to o didn't have to: «The test was easy. We ___ study much.»", "<b>didn't have to</b>."],
    ["b", "Escribe una sugerencia con Let's y otra con Shall we…? para el fin de semana.", "Ejemplo: «Let's go to the beach!» «Shall we watch a film?»"],
    ["b", "Completa con could o couldn't: «It was very foggy and we ___ see the road.»", "<b>couldn't</b>."],
    ["b", "Escribe un ofrecimiento con Shall I…? a un compañero que lleva muchos libros.", "«<b>Shall I</b> carry some of your books?»"],
    ["m", "Completa con must o have to en la forma correcta: «Did you ___ wear a uniform at your old school?»", "Did you <b>have to</b> wear… Must no tiene pasado ni forma con did."],
    ["m", "Completa con 'd better o 'd better not: «It's late. We ___ go home now.» / «You ___ eat that; it's old.»", "We<b>'d better</b> go home · You<b>'d better not</b> eat that."],
    ["m", "Deduce con must, might o can't: «The phone is ringing but she isn't answering. She ___ be asleep.»", "She <b>might</b> be asleep (es posible; no tenemos pruebas seguras). Must también podría usarse si estamos casi seguros."],
    ["m", "Deduce: «That man ___ be a teacher. He's only 12!»", "He <b>can't</b> be a teacher. Imposibilidad: can't."],
    ["m", "Escribe tres normas de casa de tus abuelos cuando eran niños con had to y weren't allowed to.", "Ejemplo: «They had to help on the farm. They weren't allowed to talk at dinner. They had to go to bed at nine.»"],
    ["m", "Pasa al futuro: «I can't see you on Monday.»", "I <b>won't be able to</b> see you on Monday."],
    ["m", "Ordena los consejos de más suave a más fuerte: You must… / You could… / You'd better… / You should…", "You could… → You should… → You'd better… → You must…"],
    ["m", "Escribe una petición muy educada al director para usar el gimnasio en el recreo.", "Ejemplo: «<b>Could</b> we use the gym during the break, please?» o «<b>May</b> we use…?»"],
    ["m", "Completa con needn't o mustn't: «You ___ shout. I can hear you perfectly.» / «You ___ touch the cables. It's dangerous.»", "needn't shout (no hace falta) · mustn't touch (prohibido)."],
    ["m", "Responde con una frase con If I were you…: «I've had an argument with my best friend.»", "Ejemplo: «If I were you, I'd talk to her and say sorry.»"],
    ["m", "Completa con was able to o could: «The water was cold, but I ___ swim to the island.»", "<b>was able to</b>: lo consiguió en una situación concreta."],
    ["a", "Corrige los cuatro errores: «You must to wear a helmet. Yesterday I must stay at home. You don't have to touch the fire, it's dangerous! I will can help you tomorrow.»", "You must wear (sin to) · I <b>had to</b> stay · You <b>mustn't</b> touch the fire (prohibición) · I <b>will be able to</b> help you."],
    ["a", "Explica la diferencia: «You mustn't wear trainers.» / «You don't have to wear trainers.»", "Mustn't: está prohibido llevar zapatillas. Don't have to: no es obligatorio, puedes llevarlas o no."],
    ["a", "Escribe un póster de 6 normas para la biblioteca del instituto con must, mustn't, can, don't have to, should y 'd better.", "Ejemplo: «You must be quiet. You mustn't eat or drink. You can borrow three books. You don't have to pay. You should return books on time. You'd better ask for help if you can't find a book.»"],
    ["a", "Traduce: «Puede que no venga. Debe de estar enfermo, porque ayer no pudo jugar.»", "He <b>might not</b> come. He <b>must</b> be ill, because yesterday he <b>couldn't</b> play."],
    ["a", "Escribe un correo de 60 palabras a un amigo que va a visitar tu ciudad dándole consejos y normas útiles.", "Modelo: «Hi Max! You'll love Valencia. You should try the paella, and you must visit the City of Arts and Sciences. You don't have to take a taxi; the metro is cheap. You'd better bring sun cream because it's very hot. You can stay at my house if you want!»"],
    ["a", "Compara las normas de tu instituto con las de un instituto británico usando have to, don't have to y aren't allowed to.", "Ejemplo: «British students have to wear a uniform, but we don't have to. They aren't allowed to use their phones at school, and we aren't allowed either. They have to stay for lunch.»"],
    ["a", "Explica por qué es incorrecto «He mustn't be at home; the lights are off» y corrígelo.", "Para una deducción negativa se usa can't, no mustn't (que es prohibición): <b>He can't be at home</b>."],
    ["a", "Escribe un diálogo de 6 líneas en una tienda: pide permiso, haz una petición educada y responde a un ofrecimiento.", "Ejemplo: «A: Can I help you? B: Yes, could I try on this jacket? A: Of course. Shall I bring a bigger size? B: Yes, please. Could you also show me the blue one? A: Sure.»"],
    ["a", "Reescribe sin cambiar el sentido: «It isn't necessary for you to bring a towel.»", "You <b>don't have to</b> / <b>don't need to</b> / <b>needn't</b> bring a towel."],
  ],
  cuartas: ["is can", "not must", "haven't to", "ought", "Do", "must", "has to", "isn't", "Will", "haven't to", "musted", "haves to", "was can"],
  quiz: [
    ["«I ___ swim when I was four.»", ["can", "could", "must", "should"], 1, "Capacidad en el pasado: could."],
    ["«We ___ walk because the car broke down.»", ["must", "had to", "musted", "have"], 1, "Obligación en pasado: had to."],
    ["«___ I help you with that box?» (ofrecimiento)", ["Shall", "Must", "Do", "Am"], 0, "Ofrecimiento: Shall I…?"],
    ["«You ___ hurry or you'll miss the train.»", ["'d better", "'d better to", "better", "had better to"], 0, "Had better + verbo base: advertencia."],
    ["«It's optional. You ___ do it.»", ["mustn't", "don't have to", "can't", "shouldn't to"], 1, "No es necesario: don't have to."],
    ["«She ___ be at school. It's Sunday!»", ["must", "can't", "mustn't", "should"], 1, "Deducción de imposibilidad: can't."],
    ["«Next year I ___ drive.»", ["can", "'ll be able to", "'ll can", "could"], 1, "Futuro de can: will be able to."],
    ["«___ you have to wear a uniform?»", ["Must", "Do", "Are", "Have"], 1, "Have to forma preguntas con do."],
    ["«You ought ___ see a doctor.»", ["—", "to", "for", "at"], 1, "Ought to lleva to."],
    ["«When I was little, I ___ stay up late.»", ["mustn't", "wasn't allowed to", "don't have to", "musn't"], 1, "Prohibición en pasado: wasn't allowed to."],
  ],
  examen: [
    ["«Look at his face. He ___ be very angry.»", ["must", "can't", "mustn't", "needs"], 0, "Deducción casi segura: must."],
    ["«No tienes que venir» en inglés es…", ["You mustn't come.", "You don't have to come.", "You can't come.", "You haven't come."], 1, "No es necesario: don't have to."],
    ["«Did you ___ pay for the tickets?»", ["must", "have to", "had to", "has to"], 1, "Did + have to."],
    ["¿Cuál es el consejo más fuerte?", ["You could rest.", "You should rest.", "You'd better rest.", "You might rest."], 2, "Had better: consejo urgente."],
    ["«It ___ rain later. Take an umbrella just in case.»", ["must", "might", "can't", "has to"], 1, "Posibilidad: might."],
  ],
  tarjetas: [
    ["Modales en pasado", "can → could · must → had to · mustn't → wasn't allowed to."],
    ["Had better", "Consejo urgente: You'd better go. Negativa: 'd better not."],
    ["Mustn't / can't", "Mustn't = prohibición. Can't (deducción) = imposible."],
    ["Escala de consejo", "could → should → 'd better → must."],
  ],
  glosario: [
    ["modal verb", "Verbo modal: no lleva -s, ni to, ni do (can, must, should…)."],
    ["ability", "Capacidad: can, could, be able to."],
    ["permission", "Permiso: can, could, may."],
    ["obligation", "Obligación: must, have to."],
    ["prohibition", "Prohibición: mustn't, can't, not allowed to."],
    ["lack of necessity", "Ausencia de necesidad: don't have to, needn't."],
    ["advice", "Consejo: should, ought to, had better."],
    ["deduction", "Deducción: must (casi seguro), might (posible), can't (imposible)."],
    ["be able to", "Equivalente de can en los tiempos que can no tiene."],
    ["had to", "Pasado de must y have to."],
    ["had better", "Consejo urgente con advertencia: You'd better go."],
    ["shall", "Modal para ofrecimientos y sugerencias: Shall I…? Shall we…?"],
    ["be allowed to", "Tener permiso para; en negativa, prohibición."],
    ["request", "Petición: Can / Could you…?"],
  ],
  situacion: {
    titulo: "Normas para un espacio del instituto",
    reto: "El instituto va a abrir un nuevo espacio (huerto, sala de juegos, biblioteca del patio o laboratorio de robótica) y necesita carteles con las normas en inglés para el programa de bilingüismo y para los alumnos de intercambio.",
    pasos: ["En grupos, elegid el espacio y haced una lluvia de ideas de lo que es obligatorio, prohibido, opcional y recomendable.", "Escribid de 8 a 10 normas usando must, mustn't, have to, don't have to, can, should y 'd better.", "Comparad con las normas de hace 50 años (preguntad a familiares) y escribid 3 frases con had to y weren't allowed to.", "Diseñad el cartel con iconos claros y revisad las formas de los modales.", "Presentad el cartel a la clase y explicad por qué habéis elegido cada modal."],
    producto: "Un cartel de normas en inglés con iconos y una breve comparación con las normas del pasado.",
    evaluacion: ["Usa cada modal con el significado correcto (obligación, prohibición, consejo, permiso).", "Distingue mustn't de don't have to.", "Usa correctamente las formas de pasado (had to, couldn't, wasn't allowed to).", "El cartel es claro, útil y está bien presentado oralmente."],
  },
  familias: ["Pedidle que escriba en inglés cinco normas de vuestra casa con must, mustn't y don't have to y comentadlas juntos."],
  saberes: "expressió de capacitat, permís, obligació, prohibició, consell i deducció amb els verbs modals.",
  minutos: 100,
});
