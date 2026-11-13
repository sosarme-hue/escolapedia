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

// Nivel libro (3º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso3L6").libro(module.exports, {
  lectura: ["El viaje de una camiseta", `<p>Mira la etiqueta de tu camiseta: <i>«Made in Bangladesh»</i>. Esas tres palabras esconden una historia larguísima. El algodón <b>is grown</b> in India. Then it <b>is picked</b>, <b>cleaned</b> and <b>sent</b> to a factory, where it <b>is spun</b> into thread. The fabric <b>is dyed</b> and <b>cut</b>, and finally the T-shirt <b>is sewn</b> and <b>shipped</b> to Europe. Antes de llegar a tu armario ha viajado miles de kilómetros.</p><p>¿Te has fijado en que en todo el texto no aparece casi nadie? No sabemos quién recogió el algodón ni quién cosió la camiseta. Lo importante es el <b>producto</b> y lo que le pasa, no las personas que lo hacen. Para eso el inglés usa la <b>voz pasiva</b>: el protagonista de la frase es lo que recibe la acción (<i>the cotton, the T-shirt</i>), y quién la realiza queda en segundo plano o desaparece.</p><p>La pasiva es muy frecuente en los textos de ciencias, de historia, en las noticias y en las explicaciones de procesos: cómo se fabrica el chocolate, cuándo se construyó un monumento, quién inventó el teléfono. En este tema aprenderás a formarla en presente y en pasado, a decidir cuándo conviene usarla y cuándo añadir <i>by</i>, y a describir un proceso paso a paso. Al final, podrás contar tú mismo el viaje de un producto que uses cada día.</p>`],
  mas: [
    ["<h3>De activa a pasiva, paso a paso</h3>", `<p>Mantén siempre el <b>mismo tiempo verbal</b> que en la activa: si la activa está en present simple, la pasiva lleva is / are; si está en past simple, was / were. «They <b>repair</b> cars» → «Cars <b>are repaired</b>»; «They <b>repaired</b> my car» → «My car <b>was repaired</b>». Y recuerda cambiar los pronombres: el objeto <i>me, him, us, them</i> pasa a sujeto <i>I, he, we, they</i>: «They invited <b>us</b>» → «<b>We</b> were invited».</p>`],
    ["<h3>Participios que aparecen mucho en pasiva</h3>", `<p>Muchos de estos participios son irregulares y conviene repasarlos por grupos. Algunos acaban en <b>-en</b>: <i>written, eaten, stolen, taken, given, chosen, broken, spoken, driven</i>. Otros cambian la vocal: <i>sung, drunk, begun, won</i>. Y otros coinciden con el pasado: <i>made, built, sold, told, found, bought, caught, taught, sent, kept</i>. Un error muy frecuente es usar el pasado en lugar del participio: «was <b>sang</b>» o «was <b>wrote</b>» son incorrectos; lo correcto es «was <b>sung</b>», «was <b>written</b>».</p>`],
    ["<h3>¿By o no by?</h3>", `<p>Cuando el agente es un pronombre o una palabra general como <i>people, someone, they</i>, casi siempre se omite: «People speak English here» → «English is spoken here» (no «by people»). En cambio, se mantiene cuando aporta <b>información nueva o importante</b>, como el autor de una obra, el inventor de algo o el responsable de un hecho: «The film was directed <b>by Pedro Almodóvar</b>». No confundas <b>by</b> (agente) con <b>with</b> (instrumento): «The cake was cut <b>with</b> a knife <b>by</b> my brother».</p>`],
    ["<h3>Negativas y preguntas</h3>", `<p>Las respuestas cortas siguen la misma lógica: «Was the window broken?» «Yes, it <b>was</b>. / No, it <b>wasn't</b>.» «Are the tickets included?» «Yes, they <b>are</b>.» En las preguntas con palabra interrogativa, el orden es <b>Wh- + be + sujeto + participio</b>: «Where <b>was</b> the film <b>shot</b>?», «How many people <b>were</b> <b>invited</b>?».</p>`],
    ["<h3>Activa y pasiva</h3>", `<p>Solo pueden pasar a pasiva los verbos que llevan <b>complemento directo</b> (verbos transitivos): «Someone <b>opened</b> the door» → «The door <b>was opened</b>». Los verbos sin complemento directo, como <i>arrive, sleep, happen, die</i> o <i>go</i>, no tienen pasiva: no se puede decir «was happened» ni «was arrived». Esto evita errores frecuentes como «The accident was happened yesterday» (correcto: «The accident <b>happened</b> yesterday»).</p>`],
    ["<h3>Cómo reconocer una pasiva</h3>", `<p>No confundas la pasiva con el <b>continuous</b>: «The boys <b>were taken</b> home» (pasiva: alguien los llevó) frente a «The boys <b>were taking</b> photos» (activa: ellos hacían fotos). La clave está en la forma que sigue a be: si es un <b>participio</b>, es pasiva; si es una forma en <b>-ing</b>, es continuous.</p>`],
    ["<h3>La fórmula</h3>", `<p>El verbo <b>be</b> concuerda con el nuevo sujeto, así que hay que fijarse en si es singular o plural: «The bridge <b>is</b> painted every year» / «The bridges <b>are</b> painted every year»; «The cake <b>was</b> eaten» / «The cakes <b>were</b> eaten». Un truco: localiza primero el sujeto de la pasiva (lo que recibe la acción) y elige después is / are o was / were. El participio no cambia nunca.</p>`],
    ["<h3>Para qué sirve la pasiva</h3>", `<p>También usamos la pasiva para mantener el <b>tema</b> de un texto. Si hablamos de un cuadro, es más natural seguir con el cuadro como sujeto: «Guernica is one of Picasso's most famous works. It <b>was painted</b> in 1937 and it <b>is kept</b> in the Reina Sofía Museum». Y en los textos formales y científicos suena más objetiva: «The samples <b>were analysed</b> in the laboratory».</p>`],
    ["<h3>Describir un proceso</h3>", `<p>Para ordenar los pasos usa conectores de secuencia: <i>first, then, next, after that, finally</i>, y también <i>once</i> (una vez que) y <i>when</i>: «<b>Once</b> the cocoa beans are dried, they <b>are sent</b> to the factory». Fíjate en que si el sujeto es el mismo puedes omitir <i>be</i> en la segunda acción: «The fruit is washed, <b>cut</b> and <b>packed</b>».</p>`],
    ["<h3>La pasiva en la historia y la cultura</h3>", `<p>Las preguntas de cultura general suelen hacerse en pasiva: «When <b>was</b> the Alhambra <b>built</b>?», «Who <b>was</b> <i>Don Quixote</i> <b>written</b> by?», «Where <b>is</b> paella <b>cooked</b> in the traditional way?». Fíjate en que en la pregunta con <i>who</i> la preposición <b>by</b> se queda al final.</p>`],
  ],
  svgs: [
    ["<h3>Cómo reconocer una pasiva</h3>", "Pasiva frente a continuous", [["be + participio", "They were taken home. (pasiva)"], ["be + -ing", "They were taking photos. (activa)"]], "¿participio o -ing?"],
    ["<h3>Participios que aparecen mucho en pasiva</h3>", "Participios frecuentes en pasiva", [["made · built", "It was built in 1900."], ["written · sung", "It was written by Lorca."], ["found · stolen", "My bike was stolen."], ["grown · eaten", "Rice is grown here."]]],
    ["<h3>¿By o no by?</h3>", "Cuándo se pone el agente con by", [["importa quién", "painted by Picasso"], ["se sabe por lógica", "arrested (by the police)"], ["no se sabe", "My bike was stolen."]], "el agente"],
    ["<h3>Describir un proceso</h3>", "Los pasos de un proceso en pasiva", [["First", "the beans are picked."], ["Then", "they are dried."], ["After that", "they are roasted."], ["Finally", "the chocolate is packed."]]],
    ["<h3>La pasiva en la historia y la cultura</h3>", "Preguntas de cultura en pasiva", [["When was…?", "When was it built?"], ["Who… by?", "Who was it written by?"], ["Where is…?", "Where is it made?"]]],
  ],
  bloques: [
    { tras: "<h3>Participios que aparecen mucho en pasiva</h3>", html: `<h3>Pasivas muy frecuentes: be born, be made of y be called</h3><p>Algunas expresiones del inglés cotidiano son pasivas aunque no lo parezcan, y conviene aprenderlas como bloques:</p><ul><li><b>be born</b> (nacer): en inglés «nacer» se dice en pasiva. «I <b>was born</b> in 2011», «Where <b>were</b> you <b>born</b>?». Un error típico es decir «I born» o «I am born in 2011».</li><li><b>be made of</b> (estar hecho de un material que se ve): «This table <b>is made of</b> wood». <b>Be made from</b> (hecho a partir de algo que se transforma): «Paper <b>is made from</b> trees». <b>Be made in</b> (fabricado en un lugar): «It <b>was made in</b> China». <b>Be made by</b> (por alguien): «It <b>was made by</b> my grandmother».</li><li><b>be called</b> (llamarse, en el caso de cosas y lugares): «The film <b>is called</b> <i>Wonder</i>».</li><li><b>be used for</b> + -ing (servir para): «This tool <b>is used for</b> cutting metal».</li><li><b>be located / situated</b> (estar situado): «The museum <b>is located</b> in the old town».</li></ul><p>Estas expresiones son muy útiles para describir objetos, lugares y personas, y aparecen en casi todos los exámenes de comprensión lectora.</p>`, svg: ["Expresiones pasivas cotidianas", [["be born", "I was born in 2011."], ["made of / from", "wood · trees"], ["be called", "It's called Wonder."], ["be used for", "used for cutting"]], "aprender como bloques"] },
    { tras: "<h3>Negativas y preguntas</h3>", html: `<h3>La pasiva con modales y con will</h3><p>La pasiva no solo existe en presente y pasado. Con los modales y con <i>will</i> la fórmula es muy sencilla: <b>modal + be + participio</b>. El verbo <i>be</i> va siempre en su forma base, sin cambios:</p><ul><li><b>will be</b> + participio: «The results <b>will be published</b> tomorrow», «The new stadium <b>will be finished</b> in 2028».</li><li><b>can be</b> + participio: «This app <b>can be downloaded</b> for free», «Glass <b>can be recycled</b> many times».</li><li><b>must be</b> + participio: «Mobile phones <b>must be switched off</b> during the exam».</li><li><b>should be</b> + participio: «Plastic <b>should be put</b> in the yellow bin».</li></ul><p>Esta forma es muy habitual en <b>normas, carteles e instrucciones</b>, porque lo que importa es lo que hay que hacer, no quién debe hacerlo: «Bikes <b>must not be left</b> here», «Tickets <b>can be bought</b> online». En negativa, <i>not</i> va detrás del modal: «It <b>can't be repaired</b>», «It <b>won't be sold</b>». Y en la pregunta, el modal se coloca delante del sujeto: «<b>Can</b> this <b>be done</b> today?».</p>`, svg: ["Pasiva con modales y will", [["will be + part.", "It will be finished."], ["can be + part.", "It can be recycled."], ["must be + part.", "It must be done."], ["should be + part.", "It should be put here."]], "modal + be + participio"] },
    { html: `<h3>La pasiva en inglés y en español</h3><p>El español también tiene voz pasiva («La casa fue construida en 1900»), pero la usamos mucho menos que el inglés. En su lugar solemos usar la <b>pasiva refleja con «se»</b> o una oración impersonal. Por eso muchas traducciones correctas al inglés no se parecen a la frase española:</p><ul><li>«<b>Se habla</b> inglés en muchos países» → «English <b>is spoken</b> in many countries».</li><li>«<b>Se vende</b> piso» → «Flat <b>for sale</b>» o «This flat <b>is being sold</b>».</li><li>«<b>Me robaron</b> la bici» → «My bike <b>was stolen</b>».</li><li>«<b>Construyeron</b> el puente en 1990» (no se dice quién) → «The bridge <b>was built</b> in 1990».</li><li>«<b>Nací</b> en Zaragoza» → «I <b>was born</b> in Zaragoza».</li></ul><p>Al revés, no traduzcas «se» siempre con una pasiva: «Se levantó temprano» es reflexivo («He <b>got up</b> early») y no tiene nada de pasivo. Pregúntate si hay alguien que hace la acción sobre algo: si lo hay, pero no importa quién, la pasiva inglesa será probablemente la mejor opción.</p>`, svg: ["Del español al inglés con la pasiva", [["Se habla inglés", "English is spoken."], ["Me robaron la bici", "My bike was stolen."], ["Nací en…", "I was born in…"]], "«se» y oraciones impersonales"] },
  ],
  videos: [["<h3>La fórmula</h3>", "passiveA"], ["<h3>De activa a pasiva, paso a paso</h3>", "passiveB"]],
  grupos: [5, 4, 4],
  ejemplos: [
    ["Pasa a pasiva y decide si hace falta el agente: «The police arrested two men last night.»", ["Objeto de la activa: two men → nuevo sujeto (plural).", "Pasado: were + participio (arrested).", "El agente (the police) se sobrentiende: se omite."], "Two men <b>were arrested</b> last night."],
    ["Completa con made of, made from o made in: «This ring is ___ gold.» / «Cheese is ___ milk.» / «My phone was ___ Korea.»", ["El oro se ve en el anillo: material → made of.", "La leche se transforma en queso → made from.", "Lugar de fabricación → made in."], "made <b>of</b> gold · made <b>from</b> milk · made <b>in</b> Korea"],
    ["Escribe una norma en pasiva con must para un cartel de biblioteca: (switch off / phones).", ["Modal + be + participio.", "Sujeto plural (phones), pero be no cambia tras un modal."], "Phones <b>must be switched off</b>."],
  ],
  errores: ["Poner en pasiva verbos que no tienen complemento directo: *It was happened → It happened."],
  niveles: "bbbbmmbmmm",
  ejercicios: [
    ["b", "Escribe el participio de: write, take, sell, give, send, cut.", "written, taken, sold, given, sent, cut."],
    ["b", "Completa: «I ___ (born) in 2012.»", "I <b>was born</b> in 2012."],
    ["b", "Completa con is o are: «Spanish ___ spoken in 20 countries.» / «These shoes ___ made by hand.»", "is · are."],
    ["b", "¿Pasiva o continuous? a) The cake was eaten. b) The children were eating.", "a) Pasiva (was + participio). b) Past continuous (were + -ing)."],
    ["b", "Completa con made of o made from: «This bag is ___ leather.» / «Wine is ___ grapes.»", "made of leather · made from grapes."],
    ["b", "Completa con will be: «The winners (announce) ___ next week.»", "The winners <b>will be announced</b> next week."],
    ["m", "Pasa a pasiva: «They make these phones in Taiwan.»", "These phones <b>are made</b> in Taiwan."],
    ["m", "Pasa a pasiva con can: «You can recycle this bottle.»", "This bottle <b>can be recycled</b>."],
    ["m", "Escribe la pregunta en pasiva: (when / the telephone / invent)?", "When <b>was</b> the telephone <b>invented</b>?"],
    ["m", "Escribe la pregunta con who… by: «Guernica was painted by Picasso.»", "Who was Guernica painted <b>by</b>?"],
    ["m", "Corrige: «The accident was happened at 6 pm.»", "The accident <b>happened</b> at 6 pm. Happen no tiene complemento directo."],
    ["m", "Describe en pasiva tres pasos para hacer un zumo de naranja.", "Ejemplo: «First, the oranges are washed. Then they are cut in half. Finally, the juice is squeezed and served.»"],
    ["m", "Traduce: «Se venden muchos libros en Navidad.»", "A lot of books <b>are sold</b> at Christmas."],
    ["m", "Escribe dos normas para la piscina con must be o mustn't be.", "Ejemplo: «Swimming caps must be worn.» «Glass bottles mustn't be brought into the pool area.»"],
    ["m", "Pon en negativa: «The tickets will be sent by email.»", "The tickets <b>won't be sent</b> by email."],
    ["m", "Completa con by o with: «The letter was written ___ a pencil.» / «It was written ___ my sister.»", "with a pencil (instrumento) · by my sister (agente)."],
    ["a", "Corrige los cuatro errores: «The Sagrada Família was design by Gaudí. The works was started in 1882 and it will finished in the future. Every year it is visit by millions of tourists.»", "was <b>designed</b> · The works <b>were</b> started · it will <b>be</b> finished · it is <b>visited</b>."],
    ["a", "Pasa a pasiva y explica por qué se quita o se deja el agente: «Somebody has to clean the classroom every day.»", "The classroom <b>has to be cleaned</b> every day. Se quita el agente porque es somebody (no se sabe ni importa)."],
    ["a", "Escribe un texto de 60 palabras sobre un monumento de tu región usando al menos cuatro pasivas.", "Modelo: «The Aqueduct of Segovia was built by the Romans in the first century. It is made of granite blocks, and no cement was used. It was used to carry water to the city until the 20th century. Today it is visited by thousands of tourists and it was declared a World Heritage Site in 1985.»"],
    ["a", "Traduce: «Me robaron el móvil en el metro, pero lo encontraron dos días después.»", "My phone <b>was stolen</b> on the underground, but it <b>was found</b> two days later."],
    ["a", "Explica por qué «He was got up early» es incorrecto y corrígelo.", "Get up no tiene complemento directo y aquí «se levantó» es reflexivo, no pasivo: <b>He got up early</b>."],
    ["a", "Describe el viaje de un producto que uses (chocolate, papel, un móvil) en 5 pasos en pasiva con conectores.", "Ejemplo (papel): «First, the trees are cut down. Then the wood is taken to a mill, where it is turned into pulp. After that, the pulp is pressed and dried. Finally, the paper is cut and sent to shops.»"],
    ["a", "Escribe un cartel de 4 normas para el comedor del instituto con pasivas con modales (must be, can be, should be, mustn't be).", "Ejemplo: «Hands must be washed before lunch. Trays should be returned to the kitchen. Food mustn't be thrown away. Extra bread can be asked for at the counter.»"],
    ["a", "Explica la diferencia: «The bridge was built by the Romans.» / «The Romans built the bridge.»", "Dicen lo mismo, pero la pasiva pone el foco en el puente (el tema del texto) y la activa en los romanos. Se elige una u otra según de qué estemos hablando."],
    ["a", "Reescribe en activa: «The match was won by the youngest team.»", "<b>The youngest team won the match.</b>"],
    ["a", "Prepara un quiz de 4 preguntas de cultura general en pasiva con sus respuestas.", "Ejemplo: «Who was the light bulb invented by? — Edison.» «Where are Toledo swords made? — In Toledo.» «When was the euro introduced? — In 2002.» «What is tortilla made from? — Eggs and potatoes.»"],
  ],
  cuartas: ["be + -ing", "grown", "has built", "is making", "with", "finded", "is discovering", "roasting", "by people", "The boys have taken the bus.", "The streets cleaned every day.", "Do", "Solo con personas"],
  quiz: [
    ["«I ___ in Valencia in 2011.»", ["born", "was born", "am born", "have born"], 1, "Nacer = be born."],
    ["«This chair is made ___ plastic.»", ["from", "of", "by", "in"], 1, "Material visible: made of."],
    ["«The results ___ tomorrow.»", ["will publish", "will be published", "will published", "are publish"], 1, "Futuro pasivo: will be + participio."],
    ["«This app can ___ for free.»", ["download", "be downloaded", "downloaded", "being downloaded"], 1, "Modal + be + participio."],
    ["¿Cuál es incorrecta?", ["It happened at night.", "It was happened at night.", "It was found at night.", "It was stolen at night."], 1, "Happen no tiene pasiva."],
    ["«Where ___ these shoes made?»", ["was", "were", "did", "are being"], 1, "Plural en pasado: were."],
    ["«The letter was written ___ a pen.»", ["by", "with", "of", "from"], 1, "Instrumento: with."],
    ["«Paper is made ___ wood.»", ["of", "from", "in", "by"], 1, "Material transformado: made from."],
    ["«Phones must ___ off.»", ["switch", "be switched", "switched", "be switch"], 1, "Must be + participio."],
    ["«Se habla inglés aquí» es…", ["English speaks here.", "English is spoken here.", "It speaks English here.", "English is speaking here."], 1, "Pasiva refleja → present simple pasivo."],
  ],
  examen: [
    ["«The bridge ___ in 2030.»", ["will finish", "will be finished", "is finishing", "finished"], 1, "Futuro pasivo."],
    ["«Who was the song written ___?»", ["by", "of", "with", "from"], 0, "Pregunta con who: by al final."],
    ["¿Cuál es pasiva?", ["She was singing.", "She was told the news.", "She told the news.", "She has sung."], 1, "Was + participio."],
    ["«The thieves ___ yet.»", ["haven't caught", "haven't been caught", "hasn't been caught", "weren't catch"], 1, "Present perfect pasivo: have been + participio."],
    ["«My bike ___ last night.»", ["stole", "was stolen", "is stolen", "was stealing"], 1, "Pasado pasivo: was + participio."],
  ],
  tarjetas: [
    ["Be born", "Nacer: I was born in 2011 (nunca «I born»)."],
    ["Made of / from / in / by", "of: material · from: se transforma · in: lugar · by: persona."],
    ["Pasiva con modales", "modal + be + participio: can be recycled, must be worn."],
    ["Verbos sin pasiva", "happen, arrive, die, go: no tienen pasiva."],
  ],
  glosario: [
    ["active voice", "Voz activa: el sujeto hace la acción."],
    ["passive voice", "Voz pasiva: el sujeto recibe la acción."],
    ["past participle", "Participio: forma que se usa en la pasiva (built, written)."],
    ["agent", "Agente: quien hace la acción, introducido por by."],
    ["object", "Complemento directo de la activa, que pasa a ser sujeto en la pasiva."],
    ["transitive verb", "Verbo con complemento directo; puede tener pasiva."],
    ["intransitive verb", "Verbo sin complemento directo (happen, arrive); no tiene pasiva."],
    ["be born", "Nacer."],
    ["be made of", "Estar hecho de (material visible)."],
    ["be made from", "Estar hecho a partir de (material transformado)."],
    ["process", "Proceso: serie de pasos que se describen en pasiva."],
    ["sequence connector", "Conector de orden: first, then, after that, finally."],
    ["modal passive", "Pasiva con modal: can be done, must be worn."],
    ["by", "Preposición que introduce el agente."],
  ],
  situacion: {
    titulo: "El viaje de un producto",
    reto: "Para la semana del consumo responsable, cada grupo prepara una infografía en inglés que cuenta cómo se fabrica y llega hasta nosotros un producto cotidiano (chocolate, vaqueros, móvil, papel, aceite de oliva) y qué impacto tiene.",
    pasos: ["Elegid el producto e investigad sus etapas: materia prima, fabricación, transporte y venta.", "Escribid de 8 a 10 frases en pasiva (present simple, past simple y can / should be) con conectores de secuencia.", "Añadid 3 datos con be made of / from / in y una pregunta de cultura en pasiva.", "Revisad: be concuerda con el sujeto, participios irregulares, agente solo cuando importa.", "Presentad la infografía y proponed una frase final con should be para consumir mejor."],
    producto: "Una infografía en inglés sobre el proceso de fabricación de un producto y su impacto.",
    evaluacion: ["Forma correctamente la pasiva en presente, pasado y con modales.", "Decide con criterio cuándo incluir el agente con by.", "Describe el proceso en orden con conectores de secuencia.", "La infografía es clara y la presentación oral es comprensible."],
  },
  familias: ["Leed juntos las etiquetas de productos de casa y decid en inglés dónde se fabricaron y de qué están hechos («It was made in…», «It's made of…»)."],
  saberes: "veu passiva per descriure processos, fets històrics i informació objectiva en textos expositius.",
  minutos: 95,
});
