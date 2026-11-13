// Inglés 4º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "4-eso",
  titulo: "The passive voice",
  minutos: 35,
  objetivos: ["Formar la pasiva con be + participio en distintos tiempos", "Pasar oraciones de activa a pasiva", "Saber cuándo es mejor usar la pasiva"],
  claves: ["active voice", "passive voice", "be + past participle", "by + agent", "have something done"],
  pregunta: {
    texto: "«Somebody stole my bike» y «My bike was stolen». Si no sabes quién la robó, ¿qué frase te sale más natural?",
    respuesta: "La segunda. La <mark>voz pasiva</mark> pone en primer plano <b>lo que le pasa a algo</b> (mi bici) y permite no decir quién lo hizo cuando no se sabe o no importa. Por eso es tan común en noticias, ciencia e instrucciones.",
  },
  bloques: [
    {
      html: `<h3>Activa y pasiva</h3><p>En la <b>activa</b>, el sujeto hace la acción: «Shakespeare <i>wrote</i> Hamlet». En la <b>pasiva</b>, el objeto pasa a ser sujeto y el que hace la acción (el <mark>agente</mark>) va con <b>by</b> o desaparece: «Hamlet <i>was written</i> by Shakespeare».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paso de activa a pasiva: el objeto Hamlet pasa a sujeto y Shakespeare pasa a agente con by">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle" font-size="13">
          <text x="130" y="22" fill="var(--muted)">ACTIVE</text>
          <rect x="8" y="30" width="94" height="28" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="55" y="49" font-size="12" fill="var(--pen)">Shakespeare</text>
          <rect x="104" y="30" width="56" height="28" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><text x="132" y="49" fill="var(--ink)">wrote</text>
          <rect x="166" y="30" width="80" height="28" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="206" y="49" fill="var(--red)">Hamlet.</text>
          <path d="M206 62 C 206 90, 60 80, 50 108" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
          <path d="M55 62 C 60 100, 200 90, 206 108" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="5 4"/>
          
          <rect x="12" y="112" width="70" height="28" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="47" y="131" fill="var(--red)">Hamlet</text>
          <rect x="88" y="112" width="86" height="28" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="131" y="131" fill="var(--leaf)">was written</text>
          <rect x="180" y="112" width="68" height="28" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="214" y="131" fill="var(--pen)">by Sh.</text>
          <text x="130" y="164" font-size="12" fill="var(--muted)">PASSIVE: be + participio</text>
        </g></svg>`,
    },
    {
      html: `<h3>La fórmula: be + participio</h3><p>La pasiva siempre se forma con el verbo <mark>be</mark> en el tiempo de la activa + el <mark>participio</mark> del verbo principal. Solo cambia <i>be</i>; el participio queda igual.</p>`,
      svg: L.tabla("La pasiva en distintos tiempos", ["Tense", "Passive"], [
        ["present", "is made"], ["past", "was made"], ["pres. perfect", "has been made"], ["future", "will be made"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Pasar de activa a pasiva</h3><p>1) El <b>objeto</b> de la activa pasa a ser <b>sujeto</b>. 2) Pon <b>be</b> en el mismo tiempo que el verbo activo. 3) Añade el <b>participio</b>. 4) Si importa, añade el agente con <b>by</b>. «They <i>are building</i> a new school» → «A new school <i>is being built</i>».</p>`,
      svg: L.filas("Cuatro pasos para pasar a pasiva", [
        ["1", "objeto → sujeto", "var(--red)"], ["2", "be en el mismo tiempo", "var(--pen)"],
        ["3", "+ participio", "var(--leaf)"], ["4", "by + agente (opcional)", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>¿Cuándo usar la pasiva?</h3><p>Cuando <mark>no sabemos</mark> quién hizo la acción («My phone has been stolen»), cuando <mark>no importa</mark> o es obvio («Rice is grown in Asia») o cuando el foco está en el resultado: noticias, textos científicos, procesos («The mixture is heated to 80 °C»).</p>`,
      svg: L.filas("Contextos típicos de la pasiva", [
        ["Noticias", "Two men were arrested.", "var(--red)"], ["Ciencia", "Water is heated.", "var(--inf)"],
        ["Historia", "It was built in 1889.", "var(--pen)"],
      ]),
    },
    {
      html: `<h3>Have something done</h3><p>Para decir que <b>otra persona</b> hace algo por nosotros (normalmente un servicio): <mark>have + objeto + participio</mark>. «I <b>had my hair cut</b> yesterday» (me corté el pelo en la peluquería, no yo mismo). «We're having the kitchen painted».</p>`,
      svg: L.frase("Have something done: I had my hair cut", [
        ["I", "", "var(--line)"], ["had", "have", "var(--pen)"], ["my hair", "objeto", "var(--red)"], ["cut.", "participio", "var(--leaf)"],
      ], "lo hizo otra persona por mí"),
    },
  ],
  figura: {
    titulo: "De activa a pasiva en un vistazo",
    svg: L.pasos("Pasos para pasar de activa a pasiva con un ejemplo", [
      ["Activa", ["They make cars", "in Valencia."], "var(--muted)"],
      ["Objeto → sujeto", ["Cars…"], "var(--red)"],
      ["be + participio", ["…are made…"], "var(--pen)"],
      ["Pasiva", ["Cars are made", "in Valencia."], "var(--leaf)"],
    ]),
  },
  video: { id: "r3mBFztJCeU", titulo: "Cómo pasar a pasiva en inglés: tutorial fácil con ejercicios", canal: "Inglés Para Perezosos", vistas: 2670106, megusta: 112385, busqueda: "voz pasiva en inglés passive voice" },
  quiz: [
    { q: "La pasiva se forma con…", o: ["have + participio", "be + participio", "do + infinitivo"], a: 1, e: "Be en el tiempo correspondiente + participio." },
    { q: "«The Mona Lisa ___ by Leonardo da Vinci.»", o: ["painted", "was painted", "is painting"], a: 1, e: "Pasiva en pasado: was + painted." },
    { q: "Pasa a pasiva: «They speak English here.»", o: ["English is spoken here.", "English was spoken here.", "English speaks here."], a: 0, e: "Presente: is + spoken." },
    { q: "«The new bridge ___ next year.»", o: ["will be built", "will build", "is built"], a: 0, e: "Pasiva en futuro: will be + participio." },
    { q: "«I ___ my car repaired last week.» (lo hizo el taller)", o: ["had", "was", "did"], a: 0, e: "Have something done: had my car repaired." },
  ],
  examen: [
    { q: "«My wallet ___!» (acaban de robarlo)", o: ["has been stolen", "has stolen", "is stealing"], a: 0, e: "Present perfect pasivo: has been + participio." },
    { q: "¿Cuándo omitimos el agente (by…)?", o: ["Cuando no se sabe o no importa", "Siempre", "Nunca"], a: 0, e: "«Rice is grown in Asia»: no importa quién." },
    { q: "«Dinner ___ when we arrived.» (en progreso)", o: ["was being cooked", "was cooking", "is cooked"], a: 0, e: "Past continuous pasivo: was being + participio." },
  ],
  feynman: ["Qué cambia entre activa y pasiva", "La fórmula de la pasiva en cuatro tiempos", "Cuándo es mejor usar la pasiva", "Qué significa have something done"],
  mapa: mapa("PASSIVE VOICE", "var(--eso)", [
    ["Form", "be + past participle", "var(--pen)"],
    ["Agent", "by + who did it", "var(--red)"],
    ["Use", "news · science · history", "var(--leaf)"],
    ["Causative", "have something done", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Fórmula de la pasiva", "be (en el tiempo que toque) + participio."],
    ["El agente", "Quien hace la acción; va con by y se omite si no importa."],
    ["Pasiva en present perfect", "has / have been + participio: «It has been sold»."],
    ["¿Cuándo usar la pasiva?", "Cuando no sabemos quién lo hizo, no importa o interesa el resultado."],
    ["Have something done", "have + objeto + participio: otra persona lo hace por nosotros."],
  ],
  familias: ["Mirad etiquetas de productos («Made in…», «Designed in…») y explicad por qué usan pasiva.", "Pedidle que cuente tres cosas que «have done» la familia (cortarse el pelo, revisar el coche…).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: voz pasiva y construcción causativa; textos informativos y científicos (RD 217/2022, Lengua Extranjera 4º; nivel B1 del MCER).",
    ideas: ["Quiz cultural en pasiva («Who was the Guernica painted by?»).", "Describir un proceso (fabricar chocolate, reciclar) en pasiva.", "Titulares de prensa: localizar pasivas y reescribirlas en activa."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: passive forms", url: "https://learnenglishteens.britishcouncil.org/grammar" },
    { t: "Cambridge Dictionary: passive", url: "https://dictionary.cambridge.org/grammar/british-grammar/passive" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Formar la pasiva en todos los tiempos y con modales", "Pasar a pasiva oraciones con dos objetos", "Usar la pasiva impersonal: It is said that…"],
  bloques: [
    { tras: "La fórmula: be + participio", html: `<h3>La pasiva en todos los tiempos</h3>${L.tb(["Tiempo", "Activa", "Pasiva"], [["present simple", "They <b>make</b> cars here.", "Cars <b>are made</b> here."], ["present continuous", "They <b>are painting</b> the room.", "The room <b>is being painted</b>."], ["past simple", "They <b>built</b> it in 1900.", "It <b>was built</b> in 1900."], ["past continuous", "They <b>were repairing</b> the road.", "The road <b>was being repaired</b>."], ["present perfect", "They <b>have sold</b> the house.", "The house <b>has been sold</b>."], ["past perfect", "They <b>had cleaned</b> it.", "It <b>had been cleaned</b>."], ["future (will)", "They <b>will open</b> a shop.", "A shop <b>will be opened</b>."], ["going to", "They <b>are going to build</b> a bridge.", "A bridge <b>is going to be built</b>."]])}<p>Fíjate en que <i>being</i> aparece en los continuos y <i>been</i> en los perfectos. La negativa y la pregunta se forman con el auxiliar <i>be</i>: «It <b>wasn't</b> built», «<b>Was</b> it built…?»</p>` },
    { tras: "Pasar de activa a pasiva", html: `<h3>Pasiva con modales</h3><p>Con los modales, la pasiva es <b>modal + be + participio</b>: «You <b>must wear</b> a helmet» → «A helmet <b>must be worn</b>»; «We <b>can recycle</b> plastic» → «Plastic <b>can be recycled</b>»; «They <b>should finish</b> the work» → «The work <b>should be finished</b>».</p><p>Para el pasado: <b>modal + have been + participio</b>: «The letter <b>should have been sent</b> yesterday». Esta estructura aparece mucho en normas, carteles e instrucciones: <i>Phones must be switched off</i>, <i>Tickets can be bought online</i>.</p>` },
    { tras: "Pasar de activa a pasiva", html: `<h3>Verbos con dos objetos</h3><p>Verbos como <i>give, send, show, tell, offer, lend</i> tienen dos objetos: una persona y una cosa. Cualquiera de los dos puede ser sujeto de la pasiva, pero es más frecuente empezar por la <b>persona</b>:</p><ul><li>Activa: «They gave <b>Ana</b> <b>a prize</b>».</li><li>Pasiva 1 (más natural): «<b>Ana was given</b> a prize».</li><li>Pasiva 2: «<b>A prize was given</b> to Ana».</li></ul><p>En español no existe la primera forma (*Ana fue dada un premio), por eso cuesta tanto. Recuerda también que el agente con <b>by</b> solo se añade si aporta información: «The book was written <b>by</b> J. K. Rowling», pero no «The thief was arrested <b>by the police</b>» (es obvio).</p>` },
    { tras: "¿Cuándo usar la pasiva?", html: `<h3>Pasiva impersonal: It is said that…</h3><p>Con verbos de opinión o de comunicación (<i>say, believe, think, know, report, expect</i>) hay dos formas de pasiva muy usadas en las noticias:</p><ul><li><b>It + is said / believed + that…</b>: «<b>It is said that</b> the castle is haunted».</li><li><b>Sujeto + is said / believed + to + infinitivo</b>: «The castle <b>is said to be</b> haunted». Para el pasado: «He <b>is believed to have escaped</b> through the window».</li></ul><p>Sirven para dar una información sin decir exactamente quién la afirma, y por eso son típicas del lenguaje periodístico y científico.</p>` },
    { tras: "Have something done", html: `<h3>Get en lugar de be</h3><p>En el inglés hablado, <b>get</b> puede sustituir a <i>be</i> en la pasiva, sobre todo para cosas que pasan de forma inesperada o negativa: «My bike <b>got stolen</b>», «He <b>got injured</b> in the match», «They <b>got married</b> last year». Es menos formal; en un <i>writing</i> académico es mejor usar <i>be</i>.</p><p>También en <b>have something done</b> se puede usar <b>get</b>: «I need to <b>get my hair cut</b>». Y <i>have something done</i> sirve además para cosas malas que nos hacen otros: «She <b>had her bag stolen</b>» (le robaron el bolso).</p>` },
    { tras: "¿Cuándo usar la pasiva?", html: `<h3>La pasiva en textos reales</h3><p>La pasiva es muy frecuente en tres tipos de texto. En las <b>noticias</b>, porque importa lo que pasó y a quién le pasó: «Three people <b>were injured</b> in the accident». En los <b>textos científicos y técnicos</b>, porque el proceso importa más que quien lo hace: «The water <b>is heated</b> to 100 °C and then it <b>is filtered</b>». En los <b>textos de historia y cultura</b>: «The Alhambra <b>was built</b> in the 13th and 14th centuries».</p><p>En cambio, en una conversación o en un email informal abusar de la pasiva suena frío. Una buena estrategia en tus <i>writings</i> es usar dos o tres pasivas bien elegidas, por ejemplo para describir un proceso o un monumento.</p>` },
  ],
  videos: [
    ["La fórmula: be + participio", L.vid("r3mBFztJCeU", "Cómo pasar a pasiva en inglés: tutorial fácil con ejercicios", "Inglés Para Perezosos", 2670106)],
    ["¿Cuándo usar la pasiva?", L.vid("080leytixWE", "Cómo entender la voz pasiva en inglés fácilmente", "Alejo Lopera Inglés", 1616574)],
  ],
  ejemplos: [
    ["Pasa a pasiva: «Someone has broken the window.»", ["Objeto de la activa: the window → nuevo sujeto.", "Tiempo: present perfect → has been.", "Participio de break: broken.", "Agente: someone (no aporta) → se omite."], "The window has been broken."],
    ["Pasa a pasiva empezando por la persona: «The school will send the parents a letter.»", ["Los dos objetos: the parents (persona) y a letter (cosa).", "Empezamos por la persona: The parents.", "Futuro con will → will be + participio: will be sent."], "The parents will be sent a letter (by the school)."],
    ["Transforma: «People say that chocolate makes you happy.» (dos formas)", ["Forma impersonal: It is said that + oración.", "Forma personal: el sujeto de la oración subordinada pasa delante: Chocolate is said to…", "El verbo pasa a infinitivo con to: to make."], "It is said that chocolate makes you happy. / Chocolate is said to make you happy."],
  ],
  errores: [
    "Cambiar el tiempo del participio: el participio no cambia; cambia el verbo be.",
    "Olvidar being en los continuos: *the room is painted now → the room is being painted.",
    "Poner el agente con by cuando es obvio o no importa (by people, by someone).",
    "Usar el pasado en lugar del participio: *it was wrote → it was written.",
    "Confundir have something done (me lo hacen) con have done (lo he hecho yo).",
  ],
  ejercicios: [
    ["Pasa a pasiva: «They clean the classrooms every day.»", "The classrooms are cleaned every day."],
    ["Pasa a pasiva: «They are building a new hospital.»", "A new hospital is being built."],
    ["Pasa a pasiva: «Picasso painted Guernica in 1937.»", "Guernica was painted by Picasso in 1937."],
    ["Pasa a pasiva: «They have cancelled the concert.»", "The concert has been cancelled."],
    ["Pasa a pasiva: «You must not touch the paintings.»", "The paintings must not be touched."],
    ["Pasa a pasiva empezando por la persona: «They offered me a job.»", "I was offered a job."],
    ["Reescribe: «People believe that the house is 300 years old.» (The house…)", "The house is believed to be 300 years old."],
    ["Completa con have something done: «I'm going to the optician to ___ (my eyes / test).»", "to have my eyes tested."],
    ["Corrige: «The letter was sent by someone yesterday.»", "The letter was sent yesterday. «By someone» no aporta información."],
    ["Escribe un cartel de normas con tres pasivas con modales para la biblioteca.", "Por ejemplo: «Phones must be switched off. Food cannot be eaten here. Books should be returned within two weeks.»"],
  ],
  quiz: [
    ["«The room ___ painted right now.»", ["is being", "is been", "has being"], 0, "Continuo: being."],
    ["«She ___ a scholarship.» (le dieron)", ["was given", "was gave", "gave"], 0, "Persona como sujeto."],
    ["«Helmets ___ worn.» (obligatorio)", ["must be", "must", "must been"], 0, "Modal + be + participio."],
    ["«He is said ___ very rich.»", ["to be", "being", "be"], 0, "Sujeto + is said + to + infinitivo."],
    ["«My bike got ___.»", ["stolen", "stole", "steal"], 0, "Get + participio."],
  ],
  tarjetas: [
    ["Pasiva con modales", "Modal + be + participio: It must be done."],
    ["It is said that…", "Pasiva impersonal: It is said that / He is said to be…"],
    ["Being / been", "Being en continuos (is being made); been en perfectos (has been made)."],
  ],
});

// Nivel libro (4º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso4L7").libro(module.exports, {
  lectura: ["¿Quién lo hizo? No importa", `<p>Lee esta etiqueta de una tableta de chocolate: «<i>Made in Belgium. The cocoa beans are grown in Ghana and are harvested by hand. They are then shipped to Europe, where they are roasted and ground.</i>» ¿Quién cultiva, recoge, transporta y tuesta el cacao? No se dice, y no hace falta: lo importante es el producto y el proceso.</p><p>Ahora mira este titular: «<i>Ancient Roman coins found by teenager in Wales</i>». Aquí sí aparece quién las encontró, pero al final, porque la noticia son las monedas. Y en el museo del instituto, un cartel avisa: «<i>Photos must not be taken</i>».</p><p>En todos estos casos el inglés usa la <b>voz pasiva</b>: pone en primer lugar aquello de lo que se habla y deja en segundo plano, o hace desaparecer, a quien realiza la acción. En español solemos resolverlo con «se» («se cultiva», «se encontraron», «no se permiten fotos»), y precisamente por eso la pasiva inglesa es mucho más frecuente que la española. En este tema aprenderás a formarla en todos los tiempos, a decidir cuándo conviene usarla y a describir procesos, escribir noticias y entender textos científicos y técnicos, donde aparece en casi todas las frases.</p>`],
  mas: [
    ["<h3>Activa y pasiva</h3>", `<p>Solo los verbos <b>transitivos</b> (los que llevan objeto directo) pueden ir en pasiva. «Somebody stole my bike» → «My bike was stolen». En cambio, verbos como <i>happen, arrive, die, sleep</i> no tienen objeto y no admiten pasiva: se dice «The accident happened at night», nunca «was happened». Es un error muy frecuente en los textos de los alumnos hispanohablantes, que traducen «el accidente fue ocurrido» sin darse cuenta.</p>`],
    ["<h3>La fórmula: be + participio</h3>", `<p>El verbo <b>be</b> es el que cambia de tiempo y concuerda con el sujeto; el participio no cambia nunca: «The house <b>is</b> cleaned», «The houses <b>are</b> cleaned», «The house <b>was</b> cleaned». Las preguntas se forman moviendo be (o el primer auxiliar) delante del sujeto: «<b>Was</b> the house cleaned?», «<b>Has</b> the letter been sent?». En negativa, not va tras el primer auxiliar: «The letter <b>hasn't</b> been sent».</p>`],
    ["<h3>¿Cuándo usar la pasiva?</h3>", `<p>También se usa para sonar <b>más objetivo o más diplomático</b>: «Mistakes were made» evita decir quién se equivocó, algo típico de políticos y empresas. Y para mantener el <b>tema</b> de un texto: si estamos hablando de la Alhambra, es más natural seguir con «It was built in the 13th century» que cambiar de sujeto con «The Nasrids built it». La pasiva ayuda a que el texto fluya.</p>`],
    ["<h3>Have something done</h3>", `<p>Esta estructura también expresa algo <b>desagradable que nos ha pasado</b>: «I <b>had my phone stolen</b> on the train» (me robaron el móvil), «She <b>had her bag searched</b> at the airport». Y funciona en todos los tiempos, cambiando solo have: «I'm <b>having</b> my hair cut tomorrow», «I've just <b>had</b> my eyes tested», «You should <b>have</b> your bike repaired». En preguntas: «Where do you <b>have</b> your hair cut?».</p>`],
    ["<h3>Pasar de activa a pasiva</h3>", `<p>Si el sujeto activo es un <b>pronombre</b>, al pasar a agente cambia a forma de objeto: «She wrote the letter» → «The letter was written <b>by her</b>». Y el objeto activo, si es un pronombre, pasa a forma de sujeto: «They invited <b>us</b>» → «<b>We</b> were invited». Comprueba siempre que el verbo be concuerde con el nuevo sujeto: «They sell <b>cars</b>» → «Cars <b>are</b> sold».</p>`],
    ["<h3>Pasiva con modales</h3>", `<p>Para el pasado se usa <b>modal + have been + participio</b>: «The letter <b>should have been sent</b> yesterday» (debería haberse enviado), «The window <b>must have been broken</b> by the wind» (deducción). Esta forma es muy útil para quejarse en un email formal: «The problem <b>could have been avoided</b> if…». Recuerda que tras el modal siempre va <i>be</i> o <i>have been</i> en forma base, nunca «is» ni «was».</p>`],
  ],
  svgs: [
    ["<h3>La pasiva en todos los tiempos</h3>", "La pasiva en distintos tiempos", [["Present", "It is made."], ["Past", "It was made."], ["Present perfect", "It has been made."], ["Future", "It will be made."]]],
    ["<h3>Pasiva con modales</h3>", "Pasiva con modales: modal + be + participio", [["must be", "Helmets must be worn."], ["can be", "It can be recycled."], ["should be", "It should be done today."]]],
    ["<h3>Verbos con dos objetos</h3>", "Verbos con dos objetos en pasiva", [["Activa", "They gave her a prize."], ["Persona sujeto", "She was given a prize."], ["Cosa sujeto", "A prize was given to her."]]],
    ["<h3>Pasiva impersonal: It is said that…</h3>", "Pasiva impersonal con say, believe, know", [["It is said that…", "It is said that he's rich."], ["He is said to…", "He is said to be rich."], ["Verbos", "say · believe · think · know"]]],
    ["<h3>La pasiva en textos reales</h3>", "Dónde aparece la pasiva", [["Noticias", "Two men were arrested."], ["Ciencia", "The liquid is heated."], ["Normas", "Photos must not be taken."]]],
    ["<h3>Get en lugar de be</h3>", "Get + participio en lenguaje informal", [["get hurt", "hacerse daño"], ["get stolen", "ser robado"], ["get married", "casarse"]], "informal"],
  ],
  bloques: [
    { tras: "<h3>Pasar de activa a pasiva</h3>", html: `<h3>El agente: by, with o nada</h3><p>El <b>agente</b> es quien realiza la acción en una oración pasiva y se introduce con <b>by</b>: «Hamlet was written <b>by Shakespeare</b>». Pero en la mayoría de las pasivas el agente <mark>no aparece</mark>, y es mejor así. Lo omitimos cuando:</p><ul><li>No sabemos quién fue: «My bike was stolen».</li><li>Es evidente o no importa: «The thief was arrested» (por la policía, claro).</li><li>Es gente en general: «English is spoken all over the world» (no «by people»).</li></ul><p>Solo ponemos el agente cuando es <b>información nueva o importante</b>: «The telephone was invented by Alexander Graham Bell», «This song was written by my cousin». Un truco: si al quitar el agente la frase no pierde información útil, quítalo. Frases como «The window was broken by someone» suenan torpes.</p><p>Con el <b>instrumento</b> o el material se usa <b>with</b>, no by: «The door was opened <b>with</b> a key», «The cake was decorated <b>with</b> strawberries». Y con algunos participios que expresan estados se usan otras preposiciones: <i>be known <b>for</b>, be made <b>of / from</b>, be covered <b>in / with</b>, be interested <b>in</b></i>.</p>`, svg: ["El agente en la pasiva", [["by + agente", "written by Shakespeare"], ["sin agente", "My bike was stolen."], ["with + instrumento", "opened with a key"]]] },
    { tras: "<h3>Verbos con dos objetos</h3>", html: `<h3>Pasiva con preposiciones, gerundio e infinitivo</h3><p>Cuando un verbo va con <b>preposición</b> (<i>look after, talk about, laugh at, listen to</i>), la preposición se queda pegada al verbo en la pasiva: «They looked after the children» → «The children were <b>looked after</b>». «Everybody laughed at him» → «He was <b>laughed at</b>». En español esto es imposible, así que suena raro al principio, pero es muy frecuente: «This problem must be <b>dealt with</b>», «She hates being <b>talked about</b>».</p><p>La pasiva también puede ir detrás de verbos que piden <b>infinitivo</b> o <b>gerundio</b>. Infinitivo pasivo: <b>to be + participio</b>. «I want <b>to be invited</b> to the party», «The work needs <b>to be finished</b> today». Gerundio pasivo: <b>being + participio</b>. «I don't like <b>being told</b> what to do», «She's afraid of <b>being left</b> alone».</p><p>Con <b>need</b> hay además una forma muy británica: need + -ing con sentido pasivo. «My hair <b>needs cutting</b>» = My hair needs to be cut. «The car <b>needs washing</b>». Es corta y natural, ideal para la conversación.</p>`, svg: ["Pasiva con preposición, infinitivo y gerundio", [["Preposición", "The kids were looked after."], ["to be + part.", "I want to be invited."], ["being + part.", "I hate being told off."], ["need + -ing", "My hair needs cutting."]]] },
    { html: `<h3>Del «se» español a la pasiva inglesa</h3><p>El español usa mucho la construcción con <b>se</b> («se vende», «se habla inglés», «se dice que…»), y el inglés la traduce casi siempre con pasiva o con un sujeto general:</p><ul><li>«Se habla inglés» → «English <b>is spoken</b> here».</li><li>«Se construyó en 1920» → «It <b>was built</b> in 1920».</li><li>«Se dice que…» → «<b>It is said</b> that…» o «<b>People say</b> that…».</li><li>«Se vende piso» → «Flat <b>for sale</b>» (en los carteles se usan fórmulas fijas).</li></ul><p>Otro caso típico: «Me robaron la cartera». No se puede decir «I was stolen» (no te robaron a ti, robaron la cartera). Las opciones correctas son «<b>My wallet was stolen</b>», «<b>I had my wallet stolen</b>» o «<b>I was robbed</b>». Recuerda la diferencia: <i>steal</i> se refiere a la cosa robada (steal a wallet) y <i>rob</i> a la persona o el lugar (rob a bank, rob someone).</p><p>Del mismo modo, «Me dijeron que…» se traduce muy bien con pasiva: «<b>I was told</b> that the exam was on Monday». Y «Nos invitaron» → «<b>We were invited</b>». Practica estas equivalencias, porque aparecen constantemente en traducciones y exámenes.</p>`, svg: ["Del se español a la pasiva inglesa", [["Se habla inglés", "English is spoken here."], ["Me robaron la cartera", "My wallet was stolen."], ["Me dijeron…", "I was told…"]]] },
    { html: `<h3>Describir un proceso con la pasiva</h3><p>Una de las tareas más típicas de 4º y de los exámenes oficiales es describir un <b>proceso</b>: cómo se hace el papel, cómo se recicla el plástico, cómo se produce el aceite de oliva. Como lo importante son los pasos y no las personas, la pasiva es la protagonista. Ejemplo: «First, the olives <b>are picked</b> in autumn. Then they <b>are taken</b> to the mill, where they <b>are washed</b> and <b>crushed</b>. After that, the paste <b>is pressed</b> and the oil <b>is separated</b> from the water. Finally, it <b>is stored</b> in bottles».</p><p>Para que el texto quede claro, combina la pasiva con <b>conectores de secuencia</b>: <i>first, then, next, after that, once…, when…, finally</i>. Usa el present simple pasivo, porque el proceso se repite siempre igual. Si describes cómo se hizo algo una vez (por ejemplo, la construcción de un monumento), usa el past simple pasivo: «The stones <b>were transported</b> on boats».</p><p>Un último consejo: no pongas todas las frases en pasiva. Alterna con alguna activa para dar variedad: «Machines do most of the work today».</p>`, svg: ["Describir un proceso: aceite de oliva", [["First", "the olives are picked"], ["Then", "they are washed and crushed"], ["After that", "the oil is separated"], ["Finally", "it is stored in bottles"]]] },
  ],
  grupos: [3, 5, 3, 2, 2],
  ejemplos: [
    ["Pasa a pasiva con la preposición: «Nobody has ever spoken to me like that.»", ["El objeto de la preposición (me) pasa a sujeto: I.", "Present perfect pasivo: have been + participio.", "La preposición se queda tras el verbo."], "I <b>have never been spoken to</b> like that."],
    ["Traduce: «Me robaron el móvil en el metro.»", ["No se puede decir «I was stolen».", "Opciones: la cosa como sujeto o have something done."], "My phone <b>was stolen</b> on the underground. / I <b>had my phone stolen</b> on the underground."],
    ["Describe en pasiva dos pasos del reciclaje de botellas: recogerlas y fundirlas.", ["Proceso que se repite: present simple pasivo.", "Conectores de secuencia."], "First, the bottles <b>are collected</b>. Then they <b>are melted</b> down."],
  ],
  errores: ["Poner en pasiva verbos sin objeto: «It was happened» ✗ → «It happened» ✓."],
  niveles: "bbbbmmamma",
  ejercicios: [
    ["b", "Completa en present simple pasivo: «Spanish (speak) ___ in many countries.»", "Spanish <b>is spoken</b> in many countries."],
    ["b", "Completa en past simple pasivo: «The pyramids (build) ___ thousands of years ago.»", "The pyramids <b>were built</b>."],
    ["b", "Escribe la pregunta: «The letter was sent yesterday.»", "<b>Was the letter sent</b> yesterday?"],
    ["b", "Escribe la negativa: «The tickets have been sold.»", "The tickets <b>haven't been sold</b>."],
    ["b", "Completa con by o with: «The cake was cut ___ a knife. It was made ___ my grandmother.»", "<b>with</b> a knife (instrumento) · <b>by</b> my grandmother (agente)."],
    ["b", "Completa en futuro pasivo: «The results (announce) ___ tomorrow.»", "The results <b>will be announced</b> tomorrow."],
    ["b", "Escribe el participio de: build, choose, steal, write, send.", "built, chosen, stolen, written, sent."],
    ["b", "Completa: «I'm going to have my hair (cut) ___.»", "have my hair <b>cut</b>. Have something done."],
    ["m", "Pasa a pasiva: «Somebody is following us.»", "We <b>are being followed</b>."],
    ["m", "Pasa a pasiva: «They will look after the dogs.»", "The dogs <b>will be looked after</b>."],
    ["m", "Completa con el infinitivo pasivo: «This homework needs (finish) ___ by Friday.»", "needs <b>to be finished</b> (o needs finishing)."],
    ["m", "Completa con el gerundio pasivo: «I hate (wake up) ___ early at weekends.»", "I hate <b>being woken up</b> early."],
    ["m", "Corrige: «The accident was happened at 5 pm.»", "The accident <b>happened</b> at 5 pm. Happen no admite pasiva."],
    ["m", "Elige rob o steal: «Two men ___ the bank.» / «They ___ 10,000 euros.»", "Two men <b>robbed</b> the bank (lugar). They <b>stole</b> 10,000 euros (cosa)."],
    ["m", "Traduce: «Se dice que este castillo tiene un fantasma.»", "<b>It is said that</b> this castle has a ghost. / This castle <b>is said to have</b> a ghost."],
    ["m", "Quita el agente si no es necesario: «My car was repaired by a mechanic yesterday.»", "My car was repaired yesterday. (Un mecánico es evidente.)"],
    ["m", "Reescribe con have something done en present perfect: «A photographer has taken our photo.»", "We <b>have had our photo taken</b>."],
    ["m", "Traduce: «Me dijeron que el examen era el lunes.»", "<b>I was told</b> that the exam was on Monday."],
    ["a", "Describe en cinco frases en pasiva cómo se produce el papel (árboles, cortar, transportar, triturar, secar).", "Modelo: «First, trees are cut down. Then they are transported to the factory. There the wood is chopped into small pieces and mixed with water. The pulp is pressed into thin sheets. Finally, the sheets are dried and rolled.»"],
    ["a", "Pasa a pasiva de dos formas: «They have offered my sister a job in Berlin.»", "My sister <b>has been offered</b> a job in Berlin. / A job in Berlin <b>has been offered</b> to my sister."],
    ["a", "Reescribe la noticia en pasiva: «Police arrested three people yesterday. They are questioning them now.»", "Three people <b>were arrested</b> yesterday. They <b>are being questioned</b> now."],
    ["a", "Explica la diferencia: «I cut my hair» / «I had my hair cut».", "«I cut my hair»: me lo corté yo mismo. «I had my hair cut»: me lo cortó otra persona (un peluquero)."],
    ["a", "Pasa a pasiva: «People believe that the painting is a fake.» (dos formas)", "<b>It is believed that</b> the painting is a fake. / The painting <b>is believed to be</b> a fake."],
    ["a", "Corrige: «I was stolen my bag and I didn't like be laughed.»", "<b>My bag was stolen</b> (o I had my bag stolen) and I didn't like <b>being laughed at</b>."],
    ["a", "Escribe un titular y dos frases de noticia sobre un descubrimiento inventado usando la pasiva.", "Ejemplo: «Dinosaur footprints discovered near Teruel.» «The footprints were found by a group of students. They are believed to be 150 million years old.»"],
    ["a", "Reescribe el texto con pasivas donde suene mejor: «Someone built our school in 1965. People renovated it in 2010. Now teachers use it every day.»", "Our school <b>was built</b> in 1965. It <b>was renovated</b> in 2010 and now it <b>is used</b> every day."],
  ],
  cuartas: ["get + -ing", "has painting", "English is speak here.", "will built", "made", "has been being", "has gave", "must to be", "to being", "stealed", "was stealing", "Solo en presente", "has cooked"],
  quiz: [
    ["«The children were ___.» (cuidados)", ["looked after", "looked", "after looked", "looking after"], 0, "La preposición se queda tras el verbo."],
    ["«I don't like ___ what to do.»", ["being told", "be told", "telling", "to tell"], 0, "Gerundio pasivo: being + participio."],
    ["«The door was opened ___ a key.»", ["with", "by", "of", "from"], 0, "Instrumento: with."],
    ["«The accident ___ at night.»", ["happened", "was happened", "has been happened", "was happen"], 0, "Happen no admite pasiva."],
    ["«My car needs ___.»", ["washing", "wash", "to washing", "washed"], 0, "Need + -ing = necesita ser lavado."],
    ["«Me robaron la bici» →", ["I was stolen my bike.", "My bike was stolen.", "My bike stole.", "I stole my bike."], 1, "La cosa robada es el sujeto."],
    ["«The bank ___ last night.»", ["was robbed", "was stolen", "robbed", "stole"], 0, "Rob + lugar o persona."],
    ["«Hamlet was written ___ Shakespeare.»", ["by", "with", "for", "of"], 0, "Agente: by."],
    ["«I want ___ to the party.»", ["to be invited", "being invited", "invite", "to invite"], 0, "Infinitivo pasivo."],
    ["En un proceso, «First, the grapes ___.»", ["are picked", "pick", "picked", "are picking"], 0, "Proceso: present simple pasivo."],
  ],
  examen: [
    ["«A new hospital ___ at the moment.»", ["is being built", "is built", "has built", "builds"], 0, "Acción en curso: present continuous pasivo."],
    ["«This problem must be dealt ___ immediately.»", ["with", "by", "for", "of"], 0, "Deal with: la preposición se mantiene."],
    ["«She ___ a prize at the ceremony.»", ["was given", "was gave", "gave to", "has giving"], 0, "Persona como sujeto con dos objetos."],
    ["«I ___ that the shop was closed.»", ["was told", "told", "was said", "said to"], 0, "Me dijeron: I was told."],
    ["«He is believed ___ abroad.»", ["to live", "living", "live", "to living"], 0, "Pasiva impersonal: be believed to + infinitivo."],
  ],
  tarjetas: [
    ["By o with", "By + agente; with + instrumento."],
    ["Being + participio", "Gerundio pasivo: «I hate being told off»."],
    ["Rob / steal", "Rob a person or place; steal a thing."],
    ["Me dijeron…", "I was told…"],
  ],
  glosario: [
    ["passive voice", "Voz pasiva: el sujeto recibe la acción (be + participio)."],
    ["active voice", "Voz activa: el sujeto realiza la acción."],
    ["agent", "Quien realiza la acción en una pasiva, introducido por by."],
    ["past participle", "Participio: done, written, built."],
    ["transitive verb", "Verbo con objeto directo; solo estos admiten pasiva."],
    ["have something done", "Encargar que otra persona haga algo: «I had my car repaired»."],
    ["get + participle", "Pasiva informal: «He got hurt»."],
    ["impersonal passive", "It is said / believed / known that…"],
    ["passive infinitive", "to be + participio: «It needs to be done»."],
    ["passive gerund", "being + participio: «I hate being interrupted»."],
    ["rob", "Robar a una persona o un lugar."],
    ["steal", "Robar una cosa."],
    ["process", "Serie de pasos para hacer algo; se describe con pasiva."],
    ["headline", "Titular de prensa; a menudo usa pasivas sin be: «Coins found»."],
  ],
  situacion: {
    titulo: "¿Cómo se hace? Vídeo de un proceso local",
    reto: "Un canal educativo británico busca vídeos breves de jóvenes que expliquen cómo se elabora un producto típico de su región (aceite, turrón, queso, cava, cerámica…). Vuestro grupo prepara el guion y la grabación en inglés.",
    pasos: ["Elegid un producto de vuestra zona e investigad su proceso de elaboración.", "Haced un esquema con los pasos y el vocabulario técnico necesario.", "Redactad el guion (150-200 palabras) con present simple pasivo y conectores de secuencia.", "Añadid un párrafo de historia con past simple pasivo (When was it first made? Where?).", "Grabad un vídeo de dos minutos con imágenes o dibujos de cada paso.", "Presentadlo en clase y responded a dos preguntas de los compañeros."],
    producto: "Un guion escrito y un vídeo de dos minutos que explica un proceso de elaboración.",
    evaluacion: ["Usa la pasiva en presente y pasado con corrección.", "Omite o incluye el agente de forma adecuada.", "Ordena el proceso con conectores claros.", "Pronuncia con claridad los participios y el vocabulario técnico."],
  },
  saberes: "Decret 175/2022 de Catalunya (Llengua estrangera, 4t d'ESO): textos expositius i descripció de processos; la veu passiva.",
  minutos: 100,
});
