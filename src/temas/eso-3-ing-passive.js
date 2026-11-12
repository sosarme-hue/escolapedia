// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "The passive voice: introduction",
  minutos: 35,
  objetivos: ["Reconocer la voz pasiva y entender para qué sirve", "Formar la pasiva en present simple y past simple", "Pasar oraciones sencillas de activa a pasiva y usar by"],
  claves: ["active / passive", "be + past participle", "is / are made", "was / were built", "by", "Made in…"],
  pregunta: {
    texto: "En la etiqueta de tu camiseta pone «Made in Portugal». ¿Por qué no dice quién la fabricó?",
    respuesta: "Porque lo importante es <b>la camiseta</b> y <b>dónde</b> se hizo, no la persona concreta que la cosió. Para eso el inglés usa la <mark>voz pasiva</mark>: pone en primer plano la cosa y deja en segundo plano, o borra, a quien hizo la acción.",
  },
  bloques: [
    {
      html: `<h3>Activa y pasiva</h3><p>En una oración <b>activa</b>, el sujeto <b>hace</b> la acción: «Picasso <i>painted</i> Guernica». En una oración <b>pasiva</b>, el sujeto <b>recibe</b> la acción: «Guernica <i>was painted</i> by Picasso». La información es la misma, pero cambia el <mark>protagonista</mark>: en la activa, Picasso; en la pasiva, el cuadro. Quien hace la acción en la pasiva se llama <b>agente</b> y va con <b>by</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paso de activa a pasiva: Guernica pasa a ser sujeto y Picasso pasa a agente con by">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle" font-size="13">
          <text x="130" y="22" fill="var(--muted)">ACTIVE</text>
          <rect x="10" y="30" width="70" height="28" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="45" y="49" fill="var(--pen)">Picasso</text>
          <rect x="88" y="30" width="70" height="28" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><text x="123" y="49" fill="var(--ink)">painted</text>
          <rect x="166" y="30" width="84" height="28" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="208" y="49" fill="var(--red)">Guernica.</text>
          <path d="M208 62 C 208 90, 60 80, 48 108" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
          <path d="M45 62 C 60 100, 200 90, 212 108" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="5 4"/>
          <rect x="10" y="112" width="76" height="28" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="48" y="131" fill="var(--red)">Guernica</text>
          <rect x="92" y="112" width="88" height="28" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="136" y="131" fill="var(--leaf)">was painted</text>
          <rect x="186" y="112" width="64" height="28" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="218" y="131" font-size="12" fill="var(--pen)">by Picasso</text>
          <text x="130" y="164" font-size="12" fill="var(--muted)">PASSIVE: be + participio</text>
        </g></svg>`,
    },
    {
      html: `<h3>La fórmula</h3><p>La pasiva se forma con el verbo <mark>be</mark> en el tiempo que corresponda + el <mark>participio pasado</mark> del verbo principal. En <b>present simple</b>: <b>am / is / are</b> + participio («English <b>is spoken</b> here»). En <b>past simple</b>: <b>was / were</b> + participio («The tickets <b>were sold</b> in an hour»). El participio no cambia; lo que cambia es <i>be</i>, que concuerda con el nuevo sujeto.</p>`,
      svg: L.tabla("Pasiva en present simple y past simple", ["Tiempo", "Pasiva"], [
        ["present (sing.)", "is made"], ["present (pl.)", "are made"], ["past (sing.)", "was made"], ["past (pl.)", "were made"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Para qué sirve la pasiva</h3><p>La usamos cuando <b>no sabemos</b> quién hizo la acción («My bike <i>was stolen</i> last night»), cuando <b>no importa</b> o es obvio («Rice <i>is grown</i> in Valencia», «The thief <i>was arrested</i>», está claro que por la policía), y cuando nos interesa más <mark>lo que pasó</mark> o el <mark>resultado</mark> que quién lo hizo: en noticias, textos de historia, ciencia, procesos y etiquetas.</p>`,
      svg: L.filas("Contextos típicos de la pasiva", [
        ["Etiquetas", "Made in Spain.", "var(--sun)"], ["Noticias", "A man was arrested.", "var(--red)"], ["Historia", "It was built in 1889.", "var(--pen)"], ["Procesos", "The milk is heated.", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>De activa a pasiva, paso a paso</h3><p>1) El <b>objeto</b> de la activa pasa a ser el <b>sujeto</b>. 2) Pon <b>be</b> en el <b>mismo tiempo</b> que el verbo activo y concuérdalo con el nuevo sujeto. 3) Añade el <b>participio</b>. 4) Si es importante, añade el agente con <b>by</b>. «They <i>make</i> these phones in China» → «These phones <i>are made</i> in China». Fíjate: el agente «they» no aporta información y se omite.</p>`,
      svg: L.filas("Cuatro pasos para pasar a pasiva", [
        ["1", "objeto → sujeto", "var(--red)"], ["2", "be en el mismo tiempo", "var(--pen)"], ["3", "+ participio", "var(--leaf)"], ["4", "by + agente (opcional)", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Negativas y preguntas</h3><p>Como en cualquier oración con <i>be</i>, la negativa añade <b>not</b> después de be y la pregunta pone <b>be</b> delante del sujeto: «The museum <mark>isn't opened</mark> on Mondays», «The letters <b>weren't sent</b>»; «<mark>Is</mark> Spanish <b>spoken</b> in Brazil?» — «No, it isn't. Portuguese is spoken there». Para preguntar por el autor: «<b>Who was</b> Don Quixote <b>written by</b>?» — «By Cervantes».</p>`,
      svg: L.filas("Pasiva: afirmativa, negativa e interrogativa", [
        ["+", "It was built in 1900.", "var(--leaf)"], ["−", "It wasn't built in 1900.", "var(--red)"], ["?", "Was it built in 1900?", "var(--pen)"],
      ], "past simple passive"),
    },
  ],
  figura: {
    titulo: "De activa a pasiva en un vistazo",
    svg: L.pasos("Pasos para pasar de activa a pasiva con un ejemplo", [
      ["Activa", ["People eat paella", "in Valencia."], "var(--muted)"],
      ["Objeto → sujeto", ["Paella…"], "var(--red)"],
      ["be + participio", ["…is eaten…"], "var(--pen)"],
      ["Pasiva", ["Paella is eaten", "in Valencia."], "var(--leaf)"],
    ]),
  },
  video: { id: "xIXjgPUMfao", titulo: "Active to passive voice: de voz activa a voz pasiva en inglés", canal: "Clases de inglés en español. Gramática fácil.", vistas: 500415, megusta: 0, busqueda: "voz pasiva en inglés passive voice" },
  quiz: [
    { q: "La pasiva se forma con…", o: ["have + participio", "be + participio", "do + infinitivo"], a: 1, e: "Be en el tiempo que toque + participio." },
    { q: "«Coffee ___ in Colombia.»", o: ["grows", "is grown", "was grow"], a: 1, e: "Present simple pasivo: is grown." },
    { q: "«The Eiffel Tower ___ in 1889.»", o: ["built", "was built", "is built"], a: 1, e: "Pasado: was built." },
    { q: "«These cars ___ in Germany.»", o: ["is made", "are made", "made"], a: 1, e: "Sujeto plural: are." },
    { q: "El agente de la pasiva se introduce con…", o: ["for", "by", "from"], a: 1, e: "Painted by Picasso." },
  ],
  examen: [
    { q: "Pasa a pasiva: «They clean the streets every day.»", o: ["The streets are cleaned every day.", "The streets were cleaned every day.", "The streets clean every day."], a: 0, e: "Present simple: are + cleaned." },
    { q: "«___ the windows broken by the storm?»", o: ["Was", "Were", "Did"], a: 1, e: "Windows es plural: were." },
    { q: "¿Cuándo omitimos el agente?", o: ["Cuando no se sabe o no importa", "Siempre", "Nunca"], a: 0, e: "«My phone was stolen»." },
  ],
  feynman: ["Qué diferencia hay entre activa y pasiva", "Cómo se forma la pasiva en presente y en pasado", "Para qué sirve la pasiva", "Cuándo se pone by y cuándo no"],
  mapa: mapa("PASSIVE VOICE", "var(--eso)", [
    ["Form", "be + past participle", "var(--pen)"],
    ["Present", "is / are made", "var(--leaf)"],
    ["Past", "was / were built", "var(--red)"],
    ["Agent", "by + who did it", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Voz pasiva", "El sujeto recibe la acción: The cake was made by Ana."],
    ["Pasiva en presente", "am / is / are + participio: It is made."],
    ["Pasiva en pasado", "was / were + participio: They were sold."],
    ["El agente", "Quien hace la acción, con by; se omite si no importa."],
    ["Made in…", "Pasiva típica de las etiquetas."],
  ],
  familias: ["Buscad etiquetas en casa («Made in…», «Designed in…») y decid en inglés de dónde viene cada cosa.", "Haced un quiz cultural: «Who was … written / painted / invented by?».", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: introducción a la voz pasiva en presente y pasado; textos informativos, etiquetas y noticias (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["Quiz de inventos y obras de arte en pasiva («The telephone was invented by…»).", "Describir el proceso de fabricación del chocolate en pasiva.", "Rastrear pasivas en titulares de prensa juvenil en inglés."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: passive forms", url: "https://learnenglishteens.britishcouncil.org/grammar/b1-grammar/passive-forms" },
    { t: "Cambridge Dictionary: passive", url: "https://dictionary.cambridge.org/grammar/british-grammar/passive" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Conocer los participios irregulares más usados en pasiva", "Describir procesos y hechos históricos con la pasiva"],
  bloques: [
    { tras: "La fórmula", html: `<h3>Participios que aparecen mucho en pasiva</h3>${L.tb(["Verbo", "Participio", "Ejemplo"], [["build", "built", "The bridge <b>was built</b> in 2005."], ["make", "made", "Cheese <b>is made</b> from milk."], ["write", "written", "Harry Potter <b>was written</b> by J. K. Rowling."], ["speak", "spoken", "Spanish <b>is spoken</b> in 20 countries."], ["find", "found", "The keys <b>were found</b> under the sofa."], ["give", "given", "Prizes <b>are given</b> to the winners."], ["steal", "stolen", "My bike <b>was stolen</b>."], ["grow", "grown", "Oranges <b>are grown</b> in Valencia."]])}<p>Los verbos regulares forman el participio con <b>-ed</b>: <i>invented, discovered, painted, designed, used</i>.</p>` },
    { tras: "Para qué sirve la pasiva", html: `<h3>¿By o no by?</h3><p>Solo añadimos el agente con <b>by</b> cuando <mark>aporta información nueva</mark> o importante: «The Alhambra was built <b>by the Nasrids</b>», «This song was written <b>by a 15-year-old girl</b>». Lo omitimos cuando es desconocido (<i>someone, somebody</i>), obvio (<i>the police</i> en un arresto) o general (<i>people, they</i>): «English is spoken all over the world» (no «by people»). Fíjate también en el orden: el agente suele ir al final, después del lugar o del tiempo si no son lo importante: «The film was made in 2010 <b>by Pedro Almodóvar</b>».</p>`, video: L.vid("Y0ZbGVZLvKw", "Passive voice in English: present and past passive", "Espresso English", 335422) },
    { tras: "De activa a pasiva, paso a paso", html: `<h3>Describir un proceso</h3><p>La pasiva en presente es ideal para explicar <b>cómo se hace algo</b>. Lee cómo se fabrica el chocolate: «First, the cocoa beans <b>are picked</b> and <b>are left</b> to dry in the sun. Then they <b>are sent</b> to factories, where they <b>are roasted</b>. After that, the beans <b>are ground</b> into a paste. Sugar and milk <b>are added</b>, and the mixture <b>is heated</b> and stirred. Finally, the chocolate <b>is poured</b> into moulds and <b>is cooled</b>». Fíjate en que no importa quién hace cada paso, sino <mark>qué se hace</mark> y <mark>en qué orden</mark>, marcado con <i>first, then, after that, finally</i>.</p>` },
    { tras: "Negativas y preguntas", html: `<h3>La pasiva en la historia y la cultura</h3><p>En los textos de historia y arte, la pasiva en <b>past simple</b> aparece constantemente, porque el protagonista suele ser la obra o el descubrimiento: «America <b>was reached</b> by Columbus in 1492», «Penicillin <b>was discovered</b> by Alexander Fleming in 1928», «The first iPhone <b>was launched</b> in 2007», «The Sagrada Familia <b>was designed</b> by Gaudí, and it still <b>is</b>n't finished». Es la estructura perfecta para un quiz de cultura general: «When <b>was</b> the Statue of Liberty <b>built</b>?», «Who <b>was</b> «Las Meninas» <b>painted by</b>?».</p>` },
    { tras: "Activa y pasiva", html: `<h3>Cómo reconocer una pasiva</h3><p>Para saber si una frase está en pasiva, busca dos cosas juntas: una forma de <b>be</b> (<i>am, is, are, was, were</i>) y un <b>participio</b> (-ed o irregular). Además, el sujeto <mark>no hace</mark> la acción, la recibe. Compara: «The children <b>were playing</b>» (activa: be + -ing; los niños juegan) / «The children <b>were taken</b> to the zoo» (pasiva: be + participio; a los niños los llevaron). También hay que distinguir la pasiva de <b>be + adjetivo</b>: «I'm tired» o «The shop is closed» describen un estado, mientras que «The shop is closed <b>at 8 every day</b>» describe una acción que alguien hace.</p>` },
  ],
  ejemplos: [
    ["Pasa a pasiva: «Shakespeare wrote Romeo and Juliet.»", ["Objeto de la activa: Romeo and Juliet → sujeto.", "Wrote es past simple; el sujeto es singular → was.", "Participio de write: written.", "El agente es importante: by Shakespeare."], "Romeo and Juliet was written by Shakespeare."],
    ["Pasa a pasiva: «They sell newspapers in that shop.»", ["Objeto: newspapers (plural) → sujeto.", "Sell es present simple, plural → are.", "Participio: sold.", "They no aporta información: se omite."], "Newspapers are sold in that shop."],
    ["Escribe la pregunta en pasiva: (when / the telephone / invent)?", ["Tiempo: pasado; sujeto singular → was.", "Orden de la pregunta: When + was + sujeto + participio.", "Participio regular: invented."], "When was the telephone invented?"],
  ],
  errores: [
    "Olvidar el verbo be: *The house built in 1900 → The house was built in 1900.",
    "Usar el pasado en vez del participio: *It was wrote → It was written.",
    "No concordar be con el sujeto: *The cars was made → The cars were made.",
    "Añadir by people o by someone: no aporta información.",
    "Confundir be + -ing (activa) con be + participio (pasiva).",
  ],
  ejercicios: [
    ["Escribe el participio de: build, make, speak, steal, discover.", "built, made, spoken, stolen, discovered."],
    ["Completa con is o are: «Tea ___ drunk all over the world.» / «Bananas ___ grown in Canarias.»", "is, are."],
    ["Completa con was o were: «The pyramids ___ built by the Egyptians.»", "were."],
    ["Pasa a pasiva: «They speak French in Quebec.»", "French is spoken in Quebec."],
    ["Pasa a pasiva: «Leonardo da Vinci painted the Mona Lisa.»", "The Mona Lisa was painted by Leonardo da Vinci."],
    ["Pasa a pasiva: «Someone stole my wallet.»", "My wallet was stolen."],
    ["Pon en negativa: «The letters were delivered yesterday.»", "The letters weren't delivered yesterday."],
    ["Escribe la pregunta: (where / these trainers / make)?", "Where are these trainers made?"],
    ["Corrige: «This song was sang by Rosalía.»", "This song was sung by Rosalía. El participio de sing es sung."],
    ["Escribe tres frases en pasiva sobre tu ciudad o tu región.", "Por ejemplo: «Oranges are grown in my region.» / «The cathedral was built in the 13th century.» / «A big festival is celebrated in August.»"],
  ],
  quiz: [
    ["«The keys ___ under the bed.»", ["were found", "was found", "found"], 0, "Keys es plural: were."],
    ["«Penicillin ___ by Fleming.»", ["was discovered", "discovered", "is discover"], 0, "Pasado pasivo."],
    ["«First, the beans ___.»", ["are roasted", "roast", "were roasting"], 0, "Proceso: present simple pasivo."],
    ["«The thief was arrested ___.»", ["(sin agente)", "by the police", "by someone"], 0, "Es obvio: se omite."],
    ["¿Cuál es pasiva?", ["The boys were taken home.", "The boys were playing.", "The boys took the bus."], 0, "be + participio."],
  ],
  tarjetas: [
    ["Pregunta en pasiva", "Be + sujeto + participio: Was it built…?"],
    ["Who… by?", "Para preguntar por el autor: Who was it written by?"],
    ["Pasiva en procesos", "First, the beans are picked. Then they are roasted…"],
  ],
});
