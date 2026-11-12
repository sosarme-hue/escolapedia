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
