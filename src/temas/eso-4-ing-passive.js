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
