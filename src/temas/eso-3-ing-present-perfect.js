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

// Nivel libro (3º ESO): lectura, apartados numerados, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso3L6").libro(module.exports, {
  lectura: ["La lista de deseos de Noa", `<p>Noa tiene 15 años y una libreta donde apunta todo lo que quiere hacer antes de cumplir los 18: ver el mar del Norte, aprender a tocar la guitarra, subir a un globo… Su amiga irlandesa Ciara le pregunta por videollamada: <i>«How many things have you done so far?»</i>. Noa repasa la lista: <i>«I've learned to play three songs on the guitar, I've visited Lisbon and I've run a 10K race. But I haven't been in a hot-air balloon yet!»</i></p><p>Noa no dice <b>cuándo</b> hizo cada cosa, porque no importa: lo importante es el resultado, lo que ha conseguido hasta hoy. Para eso el inglés tiene el <b>present perfect</b>, un tiempo que une el pasado con el presente. En cambio, si Ciara le pregunta por un detalle concreto, la respuesta cambia de tiempo: <i>«When did you go to Lisbon?» «I went there last April.»</i></p><p>El present perfect se parece a nuestro «he hecho», pero no siempre coincide con él, y por eso es uno de los tiempos que más cuesta a los hispanohablantes. En este tema aprenderás a formarlo, a usarlo con <i>ever, never, just, already, yet, for</i> y <i>since</i>, y a saber cuándo hay que pasar al past simple. Al final, podrás escribir tu propia lista de logros y de deseos.</p>`],
  mas: [
    ["<h3>La forma</h3>", `<p>El participio de los verbos regulares es igual que su pasado y sigue las mismas reglas de ortografía: <i>work → worked, live → lived, study → studied, stop → stopped</i>. Así que, para los verbos regulares, ya conoces todas las formas que necesitas.</p>`],
    ["<h3>Just, already y yet</h3>", `<p>Recuerda su posición: <b>just</b> y <b>already</b> van entre <i>have / has</i> y el participio («She's <b>just</b> left», «We've <b>already</b> eaten»), mientras que <b>yet</b> va al <b>final</b> de la frase («Have you finished <b>yet</b>?», «I haven't decided <b>yet</b>»). Con <i>yet</i> en una pregunta mostramos que esperamos que la acción ocurra pronto; en una negativa, que aún no ha ocurrido pero ocurrirá. Una respuesta muy natural es simplemente «<b>Not yet</b>» (todavía no). <i>Already</i> en una pregunta muestra sorpresa: «Have you <b>already</b> finished? That was fast!».</p>`],
    ["<h3>Still y so far</h3>", `<p><b>Still</b> en negativa expresa algo más de impaciencia o sorpresa que <i>yet</i>: «I've waited an hour and he <b>still</b> hasn't arrived!». Va delante de <i>haven't / hasn't</i>. <b>So far</b> (hasta ahora) suele ir al final y es muy útil para dar resultados parciales: «We've collected 200 euros <b>so far</b>», «<b>So far</b>, the trip has been great». También se usan con el mismo sentido <i>up to now</i> y <i>until now</i>.</p>`],
    ["<h3>How long…? con for y since</h3>", `<p>La pregunta <b>How long…?</b> con present perfect pregunta por la duración de algo que <b>sigue</b> ocurriendo: «How long <b>have</b> you <b>had</b> your dog?» (todavía lo tienes). Si la situación ya terminó, se usa past simple: «How long <b>did</b> you <b>live</b> in Paris?» (ya no vives allí). Compara las respuestas: «I've had it for two years» / «I lived there for two years».</p>`],
    ["<h3>Present perfect o past simple</h3>", `<p>Las palabras pista te ayudan mucho. Llevan a <b>present perfect</b>: <i>ever, never, just, already, yet, still, so far, for, since, today, this week, recently, lately</i>. Llevan a <b>past simple</b>: <i>yesterday, last…, …ago, in 2015, when I was…, on Monday, at 5 o'clock</i> y las preguntas con <i>When…?</i> y <i>What time…?</i>.</p>`],
    ["<h3>La forma</h3>", `<p>En la lengua hablada casi siempre se contrae: <i>I've, you've, we've, they've</i> (have) y <i>he's, she's, it's</i> (has). Cuidado: <i>she's</i> puede ser <i>she is</i> o <i>she has</i>. Lo sabes por lo que viene después: «She<b>'s</b> working» (is + -ing) frente a «She<b>'s</b> worked» (has + participio).</p>`],
    ["<h3>Participios irregulares frecuentes</h3>", `<p>Los participios irregulares son la <b>tercera columna</b> de la lista de verbos. Algunos coinciden con el pasado (<i>buy – bought – bought, make – made – made, find – found – found</i>) y otros son distintos (<i>go – went – gone, see – saw – seen, eat – ate – eaten, speak – spoke – spoken</i>). Muchos de los distintos acaban en <b>-en</b> o <b>-n</b> (<i>taken, given, written, known, flown</i>) o cambian la vocal a <b>u</b> (<i>begin – began – begun, drink – drank – drunk, swim – swam – swum</i>). Aprenderlos en grupos con sonido parecido es más eficaz que memorizarlos sueltos.</p>`],
    ["<h3>Experiencias: ever y never</h3>", `<p>Con el present perfect también decimos <b>cuántas veces</b> hemos hecho algo: «I've been to Madrid <b>twice</b>», «She's seen that film <b>three times</b>». Y con un superlativo expresamos lo mejor o peor de nuestra vida: «It's the <b>best</b> pizza I've <b>ever</b> eaten», «That was the <b>scariest</b> film I've <b>ever</b> seen».</p>`],
    ["<h3>For y since</h3>", `<p>Un truco: si puedes poner «durante» delante del tiempo, es <b>for</b> (for two hours = durante dos horas); si puedes poner «desde», es <b>since</b> (since Monday = desde el lunes). Since también puede ir con una oración en pasado: «I've known her <b>since we were six</b>».</p>`],
    ["<h3>Present perfect o past simple</h3>", `<p>Otra pista es si el periodo de tiempo <b>sigue abierto</b>. «I've drunk three glasses of water <i>today</i>» (el día no ha terminado) frente a «I drank three glasses <i>yesterday</i>». Lo mismo pasa con <i>this week, this month, this year</i>: si todavía estamos dentro de ese periodo, se usa el present perfect.</p>`],
    ["<h3>De la noticia al detalle</h3>", `<p>Fíjate en este ejemplo de conversación: «Guess what! I<b>'ve won</b> a prize!» «Really? What <b>did</b> you <b>win</b>?» «A tablet. They <b>gave</b> it to me this morning.» La primera frase da la noticia; las siguientes, los detalles con su momento concreto.</p>`],
    ["<h3>El present perfect en un email</h3>", `<p>En los correos informales también es muy útil para pedir perdón por no escribir y para preguntar por las novedades del otro: «Sorry I <b>haven't written</b> for so long», «<b>Have</b> you <b>started</b> your new course yet?», «What <b>have</b> you <b>been</b> up to?».</p>`],
  ],
  svgs: [
    ["<h3>Participios irregulares frecuentes</h3>", "Grupos de participios irregulares", [["igual que el pasado", "bought · made · found"], ["acaban en -en / -n", "taken · written · known"], ["cambian a u", "begun · drunk · swum"]], "tercera columna"],
    ["<h3>Still y so far</h3>", "Still y so far con el present perfect", [["still", "I still haven't finished."], ["so far", "I've read 3 books so far."]], "todavía · hasta ahora"],
    ["<h3>How long…? con for y since</h3>", "Preguntar y responder con How long", [["How long…?", "How long have you lived here?"], ["for + periodo", "For three years."], ["since + inicio", "Since 2022."]]],
    ["<h3>De la noticia al detalle</h3>", "De la noticia en present perfect al detalle en past simple", [["Noticia", "I've won a prize!"], ["Pregunta", "What did you win?"], ["Detalle", "They gave it to me today."]]],
    ["<h3>El present perfect en un email</h3>", "El present perfect en un correo informal", [["Novedades", "I've started a new course."], ["Disculpa", "Sorry I haven't written."], ["Preguntas", "Have you finished yet?"]]],
  ],
  bloques: [
    { tras: "<h3>La forma</h3>", html: `<h3>Negativas, preguntas y respuestas cortas</h3><p>El present perfect no necesita <i>do</i>: el propio <b>have / has</b> hace de auxiliar. En la negativa se añade <b>not</b> y casi siempre se contrae: <i>haven't, hasn't</i>. «I <b>haven't seen</b> the new series», «My brother <b>hasn't finished</b> his project».</p><p>En la pregunta, <b>have / has</b> se coloca delante del sujeto: «<b>Have</b> you <b>tidied</b> your room?», «<b>Has</b> the film <b>started</b>?». Con palabras interrogativas el orden es el mismo: «What <b>have</b> you <b>done</b>?», «Where <b>has</b> she <b>put</b> the keys?». Y si preguntamos por el sujeto, la palabra interrogativa ocupa su lugar: «Who <b>has eaten</b> my sandwich?».</p><p>Las respuestas cortas repiten el auxiliar: «Have you finished?» «Yes, I <b>have</b>. / No, I <b>haven't</b>.» «Has Tom called?» «No, he <b>hasn't</b>.» Igual que en otros tiempos, en la respuesta afirmativa corta no se contrae: «Yes, I have», nunca «Yes, I've».</p>`, svg: ["Present perfect: afirmativa, negativa e interrogativa", [["+", "She has finished."], ["−", "She hasn't finished."], ["?", "Has she finished?"], ["respuesta", "Yes, she has. / No, she hasn't."]], "have / has + participio"] },
    { tras: "<h3>Experiencias: ever y never</h3>", html: `<h3>Been y gone</h3><p>El verbo <b>go</b> tiene dos participios con significados distintos, y es una pregunta clásica de examen:</p><ul><li><b>been</b>: la persona <mark>fue y ya ha vuelto</mark>. «I<b>'ve been</b> to London three times» (fui y estoy aquí). Por eso se usa para hablar de experiencias: «Have you ever <b>been</b> to Japan?».</li><li><b>gone</b>: la persona <mark>se fue y todavía está allí</mark> (o de camino). «Where's Mum?» «She<b>'s gone</b> to the supermarket» (ahora está en el supermercado).</li></ul><p>Fíjate en la preposición: con <i>been</i> y <i>gone</i> para lugares se usa <b>to</b> («been to Paris»), aunque con <i>home</i> no hace falta: «He's gone home». Un error típico es decir «I've gone to Paris» para hablar de una experiencia: si lo dices estando en España, ¡es imposible! Tienes que decir «I've <b>been</b> to Paris».</p><p>Una forma fácil de recordarlo: <i>gone</i> se parece a «se ha ido»; <i>been</i>, a «ha estado».</p>`, svg: ["Been frente a gone", [["been", "fue y ha vuelto: I've been to Rome."], ["gone", "se fue, sigue allí: She's gone out."], ["experiencia", "Have you ever been to…?"]], "participios de go"] },
    { html: `<h3>Present perfect y «he hecho» en español</h3><p>El present perfect se forma igual que nuestro pretérito perfecto compuesto («he comido»): auxiliar + participio. Por eso muchas veces la traducción es directa: «¿Has visto mis gafas?» → «<b>Have</b> you <b>seen</b> my glasses?». Pero hay tres diferencias importantes:</p><ul><li>En muchas zonas de España se dice «Esta mañana <b>he ido</b> al médico» con una hora ya terminada. En inglés, si la mañana ya acabó o se da un momento concreto, se usa past simple: «I <b>went</b> to the doctor this morning» (dicho por la tarde).</li><li>Para lo que <b>dura hasta ahora</b>, el español usa el presente («Vivo aquí desde 2020», «Hace dos años que estudio piano») y el inglés usa el present perfect: «I<b>'ve lived</b> here since 2020», «I<b>'ve studied</b> piano for two years». Decir «I live here since 2020» es un error muy frecuente.</li><li>«Acabo de…» se traduce con <b>just</b>: «Acabo de llegar» → «I<b>'ve just arrived</b>».</li></ul><p>Por tanto, no traduzcas palabra por palabra: piensa si la acción tiene un momento terminado (past simple) o si conecta con el presente (present perfect).</p>`, svg: ["Del español al inglés con el present perfect", [["Vivo aquí desde 2020", "I've lived here since 2020."], ["Acabo de llegar", "I've just arrived."], ["Ayer he ido…", "I went… (past simple)"]], "no traducir palabra por palabra"] },
  ],
  videos: [["<h3>Just, already y yet</h3>", "ppA"], ["<h3>Present perfect o past simple</h3>", "ppB"]],
  grupos: [3, 4, 2, 4],
  ejemplos: [
    ["Escribe la pregunta y las dos respuestas cortas: (Lucas / finish / his homework).", ["Present perfect con he: has + participio.", "En la pregunta has va delante del sujeto.", "Respuestas cortas con has / hasn't."], "<b>Has</b> Lucas <b>finished</b> his homework? — Yes, he <b>has</b>. / No, he <b>hasn't</b>."],
    ["Elige been o gone: «Jake isn't here. He's ___ to the dentist.» / «I've ___ to the dentist twice this month.»", ["Jake no está: se fue y sigue allí → gone.", "Yo estoy aquí, fui y volví (experiencia que se cuenta) → been."], "He's <b>gone</b> to the dentist. / I've <b>been</b> to the dentist twice this month."],
    ["Traduce: «Hace tres años que juego al baloncesto, pero nunca he ganado un torneo.»", ["Hace tres años que juego: algo que dura hasta hoy → present perfect + for.", "Nunca he ganado: experiencia negativa → never + present perfect."], "I<b>'ve played</b> basketball <b>for</b> three years, but I<b>'ve never won</b> a tournament."],
  ],
  errores: ["Usar el presente para lo que dura hasta ahora: *I live here since 2020 → I've lived here since 2020."],
  niveles: "bbbbbmmmma",
  ejercicios: [
    ["b", "Escribe el participio de: go, see, eat, give, begin, make.", "gone, seen, eaten, given, begun, made."],
    ["b", "Escribe en negativa: «She has cleaned her room.»", "She <b>hasn't cleaned</b> her room."],
    ["b", "Escribe la pregunta: «They have arrived.»", "<b>Have they arrived</b>?"],
    ["b", "Responde con una respuesta corta: «Have you seen my phone?» (no)", "No, I <b>haven't</b>."],
    ["b", "Completa con has o have: «My parents ___ bought a new car.» / «It ___ stopped raining.»", "have · has."],
    ["b", "Completa con ever o never: «Have you ___ eaten sushi?» «No, I've ___ tried it.»", "ever · never."],
    ["b", "Completa con been o gone: «I've ___ to Seville twice.»", "<b>been</b>: es una experiencia (fui y volví)."],
    ["m", "Completa con for o since: a) ___ Christmas b) ___ ten minutes c) ___ I was born d) ___ ages", "a) since b) for c) since d) for."],
    ["m", "Ordena: «just / I've / the / bus / missed»", "I've just missed the bus."],
    ["m", "Completa con already o yet: «Have you done the shopping ___?» «Yes, I've ___ done it.»", "yet · already."],
    ["m", "Elige: «I (have seen / saw) that film last weekend.»", "<b>saw</b>: last weekend es un momento terminado."],
    ["m", "Elige: «We (have had / had) three exams this week.»", "<b>have had</b>: this week sigue abierta."],
    ["m", "Corrige: «I know her since primary school.»", "I<b>'ve known</b> her since primary school. Know es de estado y lo que dura hasta ahora va en present perfect."],
    ["m", "Escribe una pregunta con How long y respóndela: Pablo tiene su bici desde su cumpleaños.", "How long <b>has</b> Pablo <b>had</b> his bike? — <b>Since</b> his birthday."],
    ["m", "Escribe tres cosas que has hecho y una que todavía no has hecho este curso (yet / still).", "Ejemplo: «I've joined the choir. I've made new friends. I've read two novels. I still haven't been to the school library.»"],
    ["m", "Completa con still, yet o so far: «I've visited five countries ___.» / «She ___ hasn't replied.»", "so far · still."],
    ["m", "Transforma: «My last visit to the cinema was in May.» → «I haven't…»", "I <b>haven't been</b> to the cinema <b>since May</b>."],
    ["a", "Corrige los cuatro errores: «I have went to Italy two times. The first time I have gone with my school in 2022. I didn't visit Venice yet, but I want to go. Have you ever went there?»", "I have <b>been</b> to Italy twice · The first time I <b>went</b> (fecha: past simple) · I <b>haven't visited</b> Venice yet · Have you ever <b>been</b> there?"],
    ["a", "Explica la diferencia: «Sam has gone to Brazil.» / «Sam has been to Brazil.»", "Gone: Sam se fue y ahora está en Brasil. Been: Sam estuvo en Brasil alguna vez y ya ha vuelto."],
    ["a", "Completa el diálogo con present perfect o past simple: «A: ___ you ever (meet) ___ a famous person? B: Yes, I ___. I (meet) ___ a footballer at the airport last year. A: What ___ he (say) ___?»", "Have you ever met · Yes, I have · I met a footballer (last year) · What did he say? Experiencia en present perfect; detalles en past simple."],
    ["a", "Traduce: «Acabo de terminar el libro. Es el mejor libro que he leído nunca.»", "I've just finished the book. It's the best book I've ever read."],
    ["a", "Escribe un email de 60 palabras a un amigo con tus novedades del último mes: al menos dos frases con present perfect y dos con past simple.", "Modelo: «Hi Sam! Sorry I haven't written for a while. I've started karate classes and I've made some new friends there. Last Saturday we had a competition and I won a medal! I've also joined the school band. Have you finished your exams yet? Write soon!»"],
    ["a", "Reescribe con for y después con since: «I started this course three months ago, in September, and I'm still doing it.»", "I've done this course <b>for</b> three months. / I've done this course <b>since</b> September. For con el periodo; since con el inicio. Nunca «since three months ago»."],
    ["a", "Escribe 5 preguntas con Have you ever…? para una encuesta de clase sobre experiencias.", "Ejemplos: Have you ever flown in a plane? Have you ever seen snow? Have you ever cooked dinner for your family? Have you ever broken a bone? Have you ever won a prize?"],
    ["a", "Explica por qué es incorrecto «When have you arrived?» y corrígelo.", "Con when preguntamos por un momento concreto, que pide past simple: <b>When did you arrive?</b>"],
    ["a", "Escribe la lista de logros y deseos de alguien famoso que te guste: 3 cosas que ha hecho y 2 que no ha hecho todavía.", "Ejemplo: «Rosalía has recorded four albums. She has won several Grammys. She has sung in many countries. She hasn't acted in a big film yet. She still hasn't sung in my town.»"],
  ],
  cuartas: ["writen", "Do", "during", "still", "do", "already", "ever", "are", "swammed", "was falling", "is gone", "ago", "have / send"],
  quiz: [
    ["El participio de «eat» es…", ["ate", "eaten", "eated", "eat"], 1, "Eat – ate – eaten."],
    ["«___ she finished the project?»", ["Did", "Has", "Have", "Is"], 1, "Present perfect con she: has delante del sujeto."],
    ["«Have you seen my bag?» «No, I ___.»", ["didn't", "haven't", "don't", "hasn't"], 1, "Respuesta corta con el auxiliar have."],
    ["«I've ___ to Portugal twice.»", ["gone", "been", "went", "go"], 1, "Experiencia: fui y volví → been."],
    ["«We've lived in this flat ___ six years.»", ["since", "for", "ago", "from"], 1, "For + periodo."],
    ["«I ___ her since we were children.»", ["know", "knew", "have known", "am knowing"], 2, "Algo que dura hasta hoy: present perfect."],
    ["«When ___ you buy those trainers?»", ["have", "did", "has", "do"], 1, "When pide past simple."],
    ["«I've ___ finished. Look, the paint is still wet!»", ["yet", "just", "ever", "since"], 1, "Just = acabar de."],
    ["«I've read three chapters ___.»", ["so far", "still", "ago", "already yet"], 0, "So far = hasta ahora."],
    ["«This is the most beautiful place I've ___ seen.»", ["never", "ever", "yet", "just"], 1, "Superlativo + ever."],
  ],
  examen: [
    ["«Who ___ my chocolate?»", ["has eaten", "have eaten", "has ate", "did eaten"], 0, "Pregunta de sujeto: has + participio, sin cambiar el orden."],
    ["¿Cuál es correcta?", ["I've seen him yesterday.", "I saw him yesterday.", "I've saw him yesterday.", "I seen him yesterday."], 1, "Yesterday: past simple."],
    ["«Dad isn't here. He's ___ to work.»", ["been", "gone", "went", "go"], 1, "Se fue y sigue allí: gone."],
    ["«We ___ any homework this week.»", ["didn't have", "haven't had", "don't have had", "hasn't had"], 1, "This week sigue abierta: present perfect."],
    ["«Acabo de llegar» en inglés es…", ["I just arrive.", "I've just arrived.", "I finish to arrive.", "I'm just arrived."], 1, "Acabar de = have just + participio."],
  ],
  tarjetas: [
    ["Been / gone", "Been: fue y volvió. Gone: se fue y sigue allí."],
    ["Present perfect: preguntas", "Have / has + sujeto + participio: Have you finished?"],
    ["«Vivo aquí desde…»", "I've lived here since… (no «I live here since»)."],
    ["¿Periodo abierto?", "today, this week → present perfect; yesterday, last week → past simple."],
  ],
  glosario: [
    ["present perfect", "have / has + participio: conecta el pasado con el presente."],
    ["past participle", "Participio, tercera forma del verbo: worked, gone, written."],
    ["experience", "Experiencia vital sin fecha concreta: Have you ever…?"],
    ["ever", "Alguna vez, en preguntas y con superlativos."],
    ["never", "Nunca; el verbo va en afirmativa: I've never…"],
    ["just", "Acabar de: I've just seen it."],
    ["already", "Ya, antes de lo esperado: I've already done it."],
    ["yet", "Ya (en preguntas) o todavía (en negativas), al final de la frase."],
    ["still", "Todavía, delante de haven't / hasn't."],
    ["so far", "Hasta ahora: I've read two books so far."],
    ["for", "Durante: indica la duración (for two years)."],
    ["since", "Desde: indica el punto de inicio (since 2020)."],
    ["been / gone", "Participios de go: been (fue y volvió), gone (se fue)."],
    ["unfinished time", "Periodo que no ha terminado (today, this week) y que pide present perfect."],
  ],
  situacion: {
    titulo: "El muro de nuestros logros",
    reto: "Para el final del trimestre, la clase va a crear un mural en inglés para el pasillo del instituto con los logros de cada alumno hasta ahora y los retos que todavía no ha cumplido.",
    pasos: ["Haz una lluvia de ideas: cosas de las que estás orgulloso (deporte, estudios, ayudar a otros, viajes, aficiones).", "Escribe una tarjeta con 4 logros en present perfect (con ever, already, just, for o since) y 2 retos con yet o still.", "Haz una encuesta en parejas con Have you ever…? y apunta las respuestas con detalles en past simple.", "Revisa tu tarjeta: participios irregulares, been / gone y ninguna fecha terminada con present perfect.", "Decorad las tarjetas y montad el mural; cada uno presenta oralmente un logro de un compañero."],
    producto: "Una tarjeta personal de logros y retos para un mural de clase y una breve presentación oral.",
    evaluacion: ["Forma correctamente el present perfect con participios regulares e irregulares.", "Usa bien ever, never, just, already, yet, for y since.", "Distingue el present perfect del past simple al dar detalles.", "Presenta oralmente con claridad y pronunciación comprensible."],
  },
  familias: ["Preguntadle en inglés «Have you ever…?» sobre cosas de la familia y pedidle que dé un detalle en pasado."],
  saberes: "expressió d'experiències i fets recents; contrast entre present perfect i past simple en textos breus.",
  minutos: 100,
});
