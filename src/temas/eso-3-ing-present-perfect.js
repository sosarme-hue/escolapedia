// Inglés 3º ESO. Explicaciones en español con ejemplos en inglés. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Inglés",
  curso: "3-eso",
  titulo: "Present perfect",
  minutos: 35,
  objetivos: ["Formar el present perfect con have / has + participio", "Usarlo para experiencias, acciones recientes y situaciones que continúan", "Usar ever, never, just, already, yet, for y since, y distinguirlo del past simple"],
  claves: ["have / has", "past participle", "ever / never", "just / already / yet", "for / since", "past simple"],
  pregunta: {
    texto: "«Have you ever been to London?» — «Yes, I went there in 2023.» ¿Por qué la pregunta va en un tiempo y la respuesta en otro?",
    respuesta: "La pregunta habla de tu <mark>experiencia en la vida</mark>, sin decir cuándo: present perfect. En cuanto das un momento concreto (<b>in 2023</b>), pasas al <b>past simple</b>. Esa es la gran diferencia entre los dos tiempos.",
  },
  bloques: [
    {
      html: `<h3>La forma</h3><p>El present perfect se forma con <mark>have / has + participio pasado</mark>. Con los verbos regulares, el participio es igual que el pasado (-ed): played, visited. Con los irregulares hay que aprender la tercera columna: go → went → <b>gone</b>, see → saw → <b>seen</b>, eat → ate → <b>eaten</b>. Contracciones: I've, she's, they've; negativa: haven't / hasn't; pregunta: «<b>Have</b> you <b>finished</b>?».</p>`,
      svg: L.filas("Present perfect: afirmativa, negativa e interrogativa", [
        ["+", "She has seen the film.", "var(--leaf)"], ["−", "She hasn't seen the film.", "var(--red)"], ["?", "Has she seen the film?", "var(--pen)"],
      ], "have / has + participio"),
    },
    {
      html: `<h3>Experiencias: ever y never</h3><p>Lo usamos para hablar de <b>experiencias de la vida</b> cuando <mark>no importa cuándo</mark> ocurrieron. Para preguntar usamos <b>ever</b> («alguna vez»): «Have you <b>ever</b> eaten sushi?». Para negar, <b>never</b> («nunca»), sin otra negación: «I've <b>never</b> flown in a plane». Fíjate: <i>been</i> significa ir y volver; <i>gone</i>, ir y seguir allí: «She has <b>been</b> to Paris» / «She has <b>gone</b> to Paris» (y aún no ha vuelto).</p>`,
      svg: L.dialogo("Diálogo sobre experiencias con ever y never", [
        ["Ana", "Have you ever climbed a mountain?", "var(--pen)"], ["Leo", "Yes, I've climbed Mulhacén!", "var(--leaf)"], ["Ana", "I've never climbed one.", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Just, already y yet</h3><p>También sirve para acciones <b>recientes</b> que tienen relación con el presente. <mark>Just</mark> = acabar de: «I've <b>just</b> had lunch». <mark>Already</mark> = ya (antes de lo esperado): «She's <b>already</b> finished her homework». <mark>Yet</mark> = ya (en preguntas) o todavía (en negativas), y va al <b>final</b>: «Have you finished <b>yet</b>?» / «I haven't finished <b>yet</b>». Just y already van entre have y el participio.</p>`,
      svg: L.tabla("Posición y uso de just, already y yet", ["Adverbio", "Ejemplo"], [
        ["just", "I've just eaten."], ["already", "He's already left."], ["yet ?", "Have you done it yet?"], ["yet −", "I haven't done it yet."],
      ], "var(--pen)"),
    },
    {
      html: `<h3>For y since</h3><p>Para situaciones que <b>empezaron en el pasado y continúan</b> ahora: «I've lived here for five years» (y sigo viviendo aquí). <mark>For</mark> va con un <b>periodo</b> de tiempo (for two hours, for a week, for ages) y <mark>since</mark> con el <b>momento en que empezó</b> (since Monday, since 2020, since I was six). Se pregunta con <b>How long…?</b>: «How long have you known her?».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: since 2021 marca el inicio y for 5 years la duración hasta ahora">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <path d="M16 100 H 244" stroke="var(--line)" stroke-width="3"/>
          <circle cx="50" cy="100" r="7" fill="var(--pen)"/><text x="50" y="128" font-size="13" fill="var(--pen)">2021</text><text x="50" y="146" font-size="12" fill="var(--pen)">since</text>
          <circle cx="214" cy="100" r="7" fill="var(--red)"/><text x="214" y="128" font-size="13" fill="var(--red)">now</text>
          <path d="M56 84 H 204" stroke="var(--leaf)" stroke-width="5"/><path d="M200 76 l 10 8 l -10 8" fill="none" stroke="var(--leaf)" stroke-width="4"/>
          <text x="130" y="72" font-size="13" fill="var(--leaf)">for 5 years</text>
          <text x="130" y="32" font-size="14" fill="var(--ink)">I've played the piano…</text>
        </g></svg>`,
    },
    {
      html: `<h3>Present perfect o past simple</h3><p>El <mark>past simple</mark> habla de un momento <b>terminado y concreto</b> (yesterday, last year, in 2019, ago): «I <i>saw</i> that film <b>last week</b>». El <mark>present perfect</mark> no dice cuándo, o habla de un periodo que <b>no ha terminado</b> (today, this week, this year, ever, never, so far): «I'<i>ve seen</i> three films <b>this week</b>». Si aparece una fecha o una expresión con <i>ago</i>, siempre past simple.</p>`,
      svg: L.filas("Pistas para elegir el tiempo", [
        ["Past simple", "yesterday · last year · ago", "var(--red)"], ["Pres. perfect", "ever · never · yet · this week", "var(--pen)"],
      ], "¿hay un momento terminado?"),
    },
  ],
  figura: {
    titulo: "Los tres usos del present perfect",
    svg: L.columnas("Usos del present perfect: experiencias, acciones recientes y situaciones que continúan", [
      ["experiencias", "EVER / NEVER", ["Have you ever", "been to Rome?"], "var(--leaf)"],
      ["acciones recientes", "JUST / YET", ["I've just", "finished."], "var(--red)"],
      ["siguen ahora", "FOR / SINCE", ["I've lived here", "since 2020."], "var(--pen)"],
    ]),
  },
  video: { id: "6ATj9Do_RL8", titulo: "Cómo formar el presente perfecto en inglés: afirmativo, negativo e interrogativo", canal: "Francisco Ochoa Inglés Fácil", vistas: 7423173, megusta: 0, busqueda: "present perfect inglés" },
  quiz: [
    { q: "El participio de «write» es…", o: ["wrote", "written", "writed"], a: 1, e: "write – wrote – written." },
    { q: "«___ you ever ridden a horse?»", o: ["Did", "Have", "Has"], a: 1, e: "Experiencia: Have you ever…?" },
    { q: "«I've lived in Murcia ___ 2018.»", o: ["for", "since", "ago"], a: 1, e: "Since + momento de inicio." },
    { q: "«They haven't arrived ___.»", o: ["already", "yet", "just"], a: 1, e: "Yet en negativas, al final." },
    { q: "«I ___ my homework yesterday.»", o: ["have done", "did", "have did"], a: 1, e: "Yesterday: past simple." },
  ],
  examen: [
    { q: "«She ___ to the supermarket.» (está allí ahora)", o: ["has been", "has gone", "went"], a: 1, e: "Gone: fue y sigue allí." },
    { q: "«We've known each other ___ ten years.»", o: ["for", "since", "during"], a: 0, e: "For + periodo." },
    { q: "«He ___ just ___ a text.»", o: ["has / sent", "is / sending", "did / send"], a: 0, e: "Has just + participio." },
  ],
  feynman: ["Cómo se forma el present perfect", "Cuándo uso ever, never, just, already y yet", "Qué diferencia hay entre for y since", "Por qué con yesterday no puedo usar present perfect"],
  mapa: mapa("PRESENT PERFECT", "var(--eso)", [
    ["Form", "have / has + participle", "var(--ink)"],
    ["Experience", "ever · never · been / gone", "var(--leaf)"],
    ["Recent", "just · already · yet", "var(--red)"],
    ["Duration", "for · since · How long?", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["Present perfect", "have / has + participio: I've seen, she's eaten."],
    ["Ever / never", "Alguna vez / nunca, para experiencias."],
    ["Just", "Acabar de: I've just arrived."],
    ["For / since", "For + periodo (for 3 days); since + inicio (since Monday)."],
    ["Been / gone", "Been: fue y volvió. Gone: fue y sigue allí."],
  ],
  familias: ["Jugad a «Have you ever…?»: cada uno pregunta por una experiencia y el resto responde.", "Pedidle que diga tres cosas que ya ha hecho hoy y tres que aún no (yet).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación y reflexión sobre la lengua: present perfect para experiencias, acciones recientes y duración; contraste con el past simple (RD 217/2022, Lengua Extranjera 3º; nivel A2+ / B1 del MCER).",
    ideas: ["«Find someone who has…»: encuesta de experiencias por la clase.", "Lista de tareas de un viaje con already / yet.", "Biografía de un personaje: qué ha hecho (perfect) y cuándo (past)."],
  },
  fuentes: [
    L.BOE,
    { t: "British Council LearnEnglish Teens: present perfect", url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/present-perfect" },
    { t: "Cambridge Dictionary: present perfect simple", url: "https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-simple-i-have-worked" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Aprender los participios irregulares más frecuentes", "Hacer preguntas con How long y responder con for y since"],
  bloques: [
    { tras: "La forma", html: `<h3>Participios irregulares frecuentes</h3>${L.tb(["Base", "Past simple", "Participle", "Significado"], [["be", "was / were", "<b>been</b>", "ser, estar"], ["do", "did", "<b>done</b>", "hacer"], ["eat", "ate", "<b>eaten</b>", "comer"], ["forget", "forgot", "<b>forgotten</b>", "olvidar"], ["give", "gave", "<b>given</b>", "dar"], ["lose", "lost", "<b>lost</b>", "perder"], ["meet", "met", "<b>met</b>", "conocer, quedar"], ["speak", "spoke", "<b>spoken</b>", "hablar"], ["take", "took", "<b>taken</b>", "coger, llevar"], ["win", "won", "<b>won</b>", "ganar"]])}<p>Algunos tienen las tres formas distintas (speak, spoke, spoken) y otros, iguales en pasado y participio (lose, lost, lost). Aprenderlos en grupos que suenan parecido ayuda: <i>drink–drank–drunk, swim–swam–swum, sing–sang–sung</i>.</p>` },
    { tras: "Just, already y yet", html: `<h3>Still y so far</h3><p>Otros dos adverbios frecuentes. <mark>Still</mark> («todavía») se usa en negativa para subrayar que algo esperado no ha ocurrido, y va <b>delante de haven't</b>: «I <b>still</b> haven't received your email» (¡y debería haber llegado!). <mark>So far</mark> («hasta ahora») va al final y presenta un balance: «I've read 200 pages <b>so far</b>». También son típicas las expresiones con superlativo: «It's <b>the best</b> film I'<b>ve ever seen</b>» (la mejor que he visto nunca), y las que cuentan cuántas veces: «I've been to Italy <b>twice</b>».</p>` },
    { tras: "For y since", html: `<h3>How long…? con for y since</h3><p>Para preguntar por la duración de algo que todavía continúa, usamos <b>How long + have / has + sujeto + participio?</b>:</p>${L.tb(["Pregunta", "Respuesta con for", "Respuesta con since"], [["How long have you lived here?", "For six years.", "Since 2020."], ["How long has she had that phone?", "For a month.", "Since her birthday."], ["How long have they been friends?", "For ages.", "Since primary school."]])}<p>Cuidado con la traducción: «Vivo aquí desde hace seis años» se dice <mark>I've lived here for six years</mark>, nunca «I live here since six years».</p>`, video: L.vid("vmj5AHRT410", "Presente perfecto vs pasado simple: domina sus diferencias", "Francisco Ochoa Inglés Fácil", 1441053) },
    { tras: "Present perfect o past simple", html: `<h3>De la noticia al detalle</h3><p>En las conversaciones y las noticias es muy habitual empezar con el present perfect para dar la <b>novedad</b> y pasar al past simple para contar los <b>detalles</b> (cuándo, dónde, cómo): «I'<b>ve broken</b> my arm! — Oh no! How <b>did</b> it <b>happen</b>? — I <b>fell</b> off my bike yesterday». O en un titular: «A Spanish team <b>has won</b> the championship. They <b>beat</b> the favourites 3–1 in the final last night». La primera frase no dice cuándo; en cuanto aparece el momento concreto, cambiamos a past simple.</p>` },
    { tras: "Present perfect o past simple", html: `<h3>El present perfect en un email</h3><p>Lee este correo: «Hi Emma! Guess what? I'<b>ve passed</b> all my exams! I'<b>ve</b> also <b>joined</b> a basketball team. We'<b>ve played</b> three matches so far and we <b>haven't lost</b> any of them. Last Saturday we <b>won</b> 54–40. I <b>scored</b> twelve points! <b>Have</b> you <b>started</b> your summer job <b>yet</b>?» Fíjate en cómo se reparten los tiempos: las novedades y los balances, sin fecha, en <mark>present perfect</mark> (I've passed, so far); el partido del sábado, con un momento concreto, en <mark>past simple</mark> (won, scored). La pregunta final con <i>yet</i> vuelve al present perfect porque pregunta por algo que se esperaba hasta ahora.</p>` },
  ],
  ejemplos: [
    ["Completa: «I (never / see) ___ the sea. — Really? I (see) ___ it last summer.»", ["La primera es una experiencia de la vida sin momento concreto: present perfect con never.", "La segunda tiene un momento terminado (last summer): past simple."], "I've never seen the sea. — Really? I saw it last summer."],
    ["Reescribe con for y con since (hoy es viernes): «I bought this book on Monday and I still have it.»", ["La situación empezó en el pasado y continúa: present perfect de have → I've had.", "Inicio: el lunes → since Monday.", "Duración: del lunes al viernes → for four days."], "I've had this book since Monday. / I've had this book for four days."],
    ["Pregunta con yet y responde con already o not yet: (you / do / the project).", ["Pregunta: Have you done the project yet?", "Afirmativa: Yes, I've already done it.", "Negativa: No, not yet / No, I haven't done it yet."], "Have you done the project yet? — Yes, I've already done it. / No, I haven't done it yet."],
  ],
  errores: [
    "Usar present perfect con un momento terminado: *I have seen him yesterday → I saw him yesterday.",
    "Confundir for y since: *since three days → for three days.",
    "Usar el pasado en vez del participio: *I have went → I have gone.",
    "Poner yet en medio de la frase: *Have you yet finished? → Have you finished yet?",
    "Traducir «desde hace» con el presente: *I live here for two years → I've lived here for two years.",
  ],
  ejercicios: [
    ["Escribe el participio de: drink, take, write, buy, be, do.", "drunk, taken, written, bought, been, done."],
    ["Completa con for o since: ___ 9 o'clock, ___ a long time, ___ last summer, ___ two weeks.", "since 9 o'clock, for a long time, since last summer, for two weeks."],
    ["Escribe la pregunta: (you / ever / try / Indian food)?", "Have you ever tried Indian food?"],
    ["Completa con just, already o yet: «Hurry up! The film has ___ started.»", "just (acaba de empezar)."],
    ["Completa: «I haven't decided ___.»", "yet."],
    ["Corrige: «She has gone to Paris last year.»", "She went to Paris last year. Last year exige past simple."],
    ["Elige been o gone: «Where's Tom? — He's ___ to the shop.»", "gone. No está aquí: fue y sigue allí."],
    ["Traduce: «Conozco a Laura desde hace cinco años.»", "I've known Laura for five years."],
    ["Escribe la pregunta con How long: (she / have / her dog)?", "How long has she had her dog?"],
    ["Escribe tres frases sobre ti: una experiencia, algo que acabas de hacer y algo que dura desde hace tiempo.", "Por ejemplo: «I've visited Portugal.» / «I've just finished my homework.» / «I've played football since I was seven.»"],
  ],
  quiz: [
    ["«It's the best book I've ___ read.»", ["ever", "never", "yet"], 0, "Superlativo + ever."],
    ["«I ___ haven't found my keys.»", ["still", "yet", "already"], 0, "Still delante de haven't."],
    ["«How long ___ you known him?»", ["have", "did", "do"], 0, "Present perfect: have."],
    ["El participio de «swim» es…", ["swam", "swum", "swimmed"], 1, "swim – swam – swum."],
    ["«I've broken my leg! I ___ off a ladder.»", ["fell", "have fallen", "fall"], 0, "Detalle de lo que pasó: past simple."],
  ],
  tarjetas: [
    ["Yet", "Ya (preguntas) / todavía (negativas); al final de la frase."],
    ["Still", "Todavía, en negativas, delante de haven't: I still haven't…"],
    ["How long…?", "Pregunta por la duración: How long have you…?"],
  ],
});
