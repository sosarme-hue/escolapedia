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
