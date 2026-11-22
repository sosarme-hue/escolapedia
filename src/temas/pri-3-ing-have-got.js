// Inglés 3º de Primaria: have got / has got. En inglés con apoyo en castellano. Monstruos inventados y dibujos propios en SVG.
const { tema, L, svg, tx, t, persona, AZ, RO, VE, NA, AM, MO } = require("./_pri3d");

// Monstruo inventado: n ojos, color, brazos y antenas.
const monstruo = (x, y, ojos, c, o = {}) => {
  let s = `<ellipse cx="${x}" cy="${y}" rx="30" ry="36" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2.5"/>`;
  for (let i = 0; i < ojos; i++) { const ox = x + (i - (ojos - 1) / 2) * 13; s += `<circle cx="${ox}" cy="${y - 12}" r="5.5" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.2"/><circle cx="${ox}" cy="${y - 12}" r="2.2" fill="var(--ink)"/>`; }
  s += `<path d="M${x - 10} ${y + 10} q 10 8 20 0" fill="none" stroke="var(--ink)" stroke-width="2"/>`;
  if (o.antenas) s += `<path d="M${x - 10} ${y - 34} l -8 -16 M${x + 10} ${y - 34} l 8 -16" stroke="${c}" stroke-width="2.5"/><circle cx="${x - 18}" cy="${y - 50}" r="4" fill="${c}"/><circle cx="${x + 18}" cy="${y - 50}" r="4" fill="${c}"/>`;
  if (o.brazos) for (let i = 0; i < o.brazos; i++) { const lado = i % 2 ? 1 : -1, dy = Math.floor(i / 2) * 14; s += `<path d="M${x + lado * 28} ${y + dy} l ${lado * 18} ${-6 + dy / 3}" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`; }
  if (o.dientes) s += `<path d="M${x - 6} ${y + 13} l 3 6 l 3 -5 l 3 5 l 3 -6" fill="var(--paper)" stroke="var(--ink)" stroke-width="1"/>`;
  return s;
};

module.exports = tema({
  materia: "Inglés",
  titulo: "Have got / has got",
  objetivos: ["Use have got and has got to talk about possessions and appearance", "Make negative sentences with haven't got and hasn't got", "Ask questions with Have you got…? / Has she got…? and give short answers", "Describe people and monsters: hair, eyes and body parts"],
  claves: ["have got", "has got", "haven't got", "hasn't got", "Have you got…?", "Yes, I have", "No, he hasn't", "hair", "eyes", "body"],
  pregunta: [
    "Tu amigo dice «I've got a dog» y su hermana dice «She's got a cat». ¿Por qué una vez es «have» y otra «has»?",
    "Porque <mark>have got</mark> se usa con <b>I, you, we, they</b>, y <mark>has got</mark> con <b>he, she, it</b> (él, ella, ello). Las dos formas significan «tener». En las frases cortas se juntan: <b>I've got</b>, <b>she's got</b>.",
  ],
  bloques: [
    ["What does have got mean?", `<p>We use <mark>have got</mark> to say what we <b>have</b>: things («I've got a new bike»), family and pets («I've got two cats») and parts of our body or appearance («I've got brown eyes»).</p><p><b>En castellano:</b> <i>have got</i> significa «tener». Ojo: no sirve para la edad. En español «tengo ocho años», pero en inglés es «I <b>am</b> eight». Tampoco se usa para el hambre o el frío: «I'm hungry», «I'm cold».</p>`,
      svg("Un niño con una bici y un perro: I've got a bike and a dog", `${persona(60, 52, AZ)}<circle cx="128" cy="124" r="16" fill="none" stroke="${RO}" stroke-width="3"/><circle cx="176" cy="124" r="16" fill="none" stroke="${RO}" stroke-width="3"/><path d="M128 124 L 148 100 L 176 124 M148 100 L 168 100" stroke="${RO}" stroke-width="3" fill="none"/><ellipse cx="226" cy="122" rx="18" ry="10" fill="${NA}" fill-opacity=".6"/><circle cx="240" cy="108" r="8" fill="${NA}" fill-opacity=".6"/>${tx(130, 26, "I've got a bike and a dog.", { s: 13, c: AZ })}${tx(130, 164, "have got = tener", { s: 11, c: "var(--muted)" })}`)],
    ["Have got or has got?", `<p>The verb changes with the person. With <b>I, you, we, they</b> we use <mark>have got</mark>: «I have got», «They have got». With <b>he, she, it</b> we use <mark>has got</mark>: «He has got», «My sister has got», «The dog has got».</p><p>In speaking we use <b>short forms</b>: I've got, you've got, we've got, they've got; he's got, she's got, it's got. <b>Truco:</b> si puedes cambiar el sujeto por <i>he</i>, <i>she</i> o <i>it</i>, usa <b>has</b>: «Pablo (he) has got a ball».</p>`,
      L.tabla("Have got y has got con todas las personas", ["persona", "forma", "corta"], [["I / you", "have got", "I've got"], ["we / they", "have got", "they've got"], ["he / she", "has got", "she's got"], ["it", "has got", "it's got"]], AZ)],
    ["The negative: haven't got, hasn't got", `<p>To say that you do <b>not</b> have something, add <b>not</b>: <mark>haven't got</mark> (have not got) and <mark>hasn't got</mark> (has not got). «I <b>haven't got</b> a sister.» «My cat <b>hasn't got</b> a long tail.»</p><p>We often join a positive and a negative sentence with <b>but</b>: «I've got a brother, <b>but</b> I haven't got a sister.» «She's got a scooter, <b>but</b> she hasn't got a bike.» <b>En castellano:</b> en español basta con «no tengo»; en inglés el <i>not</i> va pegado a <i>have</i> o <i>has</i>.</p>`,
      L.filas("Afirmativa y negativa", [["I've got a pet.", "✓ tengo", VE], ["I haven't got a pet.", "✗ no tengo", RO], ["She's got a bike.", "✓ tiene", VE], ["She hasn't got a bike.", "✗ no tiene", RO]], "Yes or no?")],
    ["Questions: Have you got…?", `<p>To ask, put <mark>Have</mark> or <mark>Has</mark> at the beginning: «<b>Have</b> you got a pet?», «<b>Has</b> your dad got a car?», «<b>Have</b> they got a garden?». <i>Got</i> stays in the middle.</p><p>Short answers repeat <i>have</i> or <i>has</i>, without <i>got</i>: «Yes, I <b>have</b>.» / «No, I <b>haven't</b>.» «Yes, he <b>has</b>.» / «No, he <b>hasn't</b>.» <b>Ojo:</b> no contestes «Yes, I have got»: es demasiado largo y suena raro.</p>`,
      L.dialogo("Preguntas con have got", [["Mia", "Have you got a pet?", AZ], ["Leo", "Yes, I have. A rabbit.", RO], ["Mia", "Has it got long ears?", AZ], ["Leo", "Yes, it has!", RO]])],
    ["Describing people: hair and eyes", `<p>We use <i>have got</i> to <mark>describe people</mark>. Hair can be <b>long</b> or <b>short</b>, <b>straight</b> (liso), <b>curly</b> (rizado) or <b>wavy</b> (ondulado), and <b>blond</b> (rubio), <b>brown</b> (castaño), <b>black</b>, <b>red</b> (pelirrojo) or <b>grey</b>. Eyes can be <b>blue</b>, <b>green</b>, <b>brown</b> or <b>black</b>.</p><p>«She's got <b>long curly red</b> hair and green eyes.» <b>Ojo al orden:</b> en inglés el adjetivo va <i>delante</i>: «long hair», no «hair long». Y <i>hair</i> no lleva -s: «He's got short hair».</p>`,
      svg("Dos caras: pelo largo rizado y pelo corto liso", `<circle cx="70" cy="80" r="30" fill="${AM}" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.5"/>${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${42 + i * 11}" cy="${54 + (i % 2) * 4}" r="9" fill="${RO}" fill-opacity=".75"/>`).join("")}<circle cx="34" cy="86" r="9" fill="${RO}" fill-opacity=".75"/><circle cx="106" cy="86" r="9" fill="${RO}" fill-opacity=".75"/><circle cx="60" cy="82" r="3.5" fill="${VE}"/><circle cx="80" cy="82" r="3.5" fill="${VE}"/><path d="M62 96 q 8 6 16 0" fill="none" stroke="var(--ink)" stroke-width="1.6"/><circle cx="190" cy="80" r="30" fill="${AM}" fill-opacity=".25" stroke="var(--ink)" stroke-width="1.5"/><path d="M160 74 q 30 -36 60 0 q -30 -14 -60 0" fill="var(--ink)"/><circle cx="180" cy="82" r="3.5" fill="${AZ}"/><circle cx="200" cy="82" r="3.5" fill="${AZ}"/><path d="M182 96 q 8 6 16 0" fill="none" stroke="var(--ink)" stroke-width="1.6"/>${tx(70, 134, "long curly red hair", { s: 10.5, c: RO })}${tx(70, 150, "green eyes", { s: 10.5, c: VE })}${tx(190, 134, "short straight hair", { s: 10.5 })}${tx(190, 150, "blue eyes", { s: 10.5, c: AZ })}`)],
    ["Body parts", `<p>To describe animals and monsters, we need the <mark>parts of the body</mark>: <b>head</b> (cabeza), <b>eyes</b> (ojos), <b>ears</b> (orejas), <b>nose</b> (nariz), <b>mouth</b> (boca), <b>teeth</b> (dientes), <b>arms</b> (brazos), <b>hands</b> (manos), <b>legs</b> (piernas), <b>feet</b> (pies) and, for animals, <b>tail</b> (cola), <b>wings</b> (alas) and <b>fur</b> (pelo de animal).</p><p><b>Plurales especiales:</b> one foot → two <b>feet</b>; one tooth → many <b>teeth</b>. «An elephant has got big ears and a long nose (trunk).»</p>`,
      svg("Un monstruo con las partes del cuerpo señaladas", `${monstruo(130, 96, 3, VE, { antenas: true, brazos: 4, dientes: true })}${tx(40, 40, "antennae", { s: 10.5, c: VE })}${tx(214, 72, "three eyes", { s: 10.5 })}${tx(214, 118, "four arms", { s: 10.5 })}${tx(130, 158, "sharp teeth", { s: 10.5, c: RO })}`), "in3b"],
    ["Meet the monsters!", `<p>Read about two monsters. «<b>Blip</b> is green. It's got <b>three eyes</b>, four arms and two long antennae. It hasn't got any hair. It's got sharp teeth, but it's very friendly!» «<b>Zuzu</b> is purple. It's got <b>one big eye</b>, two short legs and a long tail. It hasn't got any arms.»</p><p>Answer: Has Blip got any hair? How many eyes has Zuzu got? <b>En castellano:</b> para animales y cosas usamos <i>it</i>, por eso es <i>it's got</i>.</p>`,
      svg("Dos monstruos inventados: Blip y Zuzu", `${monstruo(70, 92, 3, VE, { antenas: true, brazos: 4, dientes: true })}${monstruo(190, 92, 1, MO)}<path d="M216 112 q 30 10 26 -24" fill="none" stroke="${MO}" stroke-width="4" stroke-linecap="round"/><path d="M180 126 v 18 M200 126 v 18" stroke="${MO}" stroke-width="4" stroke-linecap="round"/>${tx(70, 162, "Blip", { s: 13, c: VE })}${tx(190, 162, "Zuzu", { s: 13, c: MO })}`)],
    ["Possessions: my favourite things", `<p>We also use <i>have got</i> for our <mark>possessions</mark> (things we own): toys, clothes, school things. «I've got a skateboard, a tablet and lots of books.» «My best friend has got a big collection of stickers.»</p><p>Use <b>a</b> before a consonant sound (a ball, a kite) and <b>an</b> before a vowel sound (an apple, an umbrella, an orange T-shirt). For plurals, use a number or <b>some</b>: «I've got <b>three</b> balls», «She's got <b>some</b> crayons».</p>`,
      L.filas("A, an y plurales", [["a", "a ball, a kite", AZ], ["an", "an apple, an umbrella", VE], ["three…", "three balls", NA], ["some…", "some crayons", AM]], "What have you got?")],
    ["Let's practise: draw a monster", `<p>Play <b>Monster dictation</b> in pairs. Draw a secret monster. Don't show it! Describe it to your partner: «My monster has got <b>two heads</b>. It's got four eyes on each head. It hasn't got any legs, but it's got wings.» Your partner draws it.</p><p>Then compare the drawings. Are they similar? Now swap. Your partner can ask questions: «<b>Has it got</b> a tail?» — «Yes, it has. A long blue tail.» ¡Gana la pareja cuyo dibujo se parezca más!</p>`,
      svg("Dictado de monstruos: dos dibujos para comparar", `<rect x="16" y="20" width="104" height="120" rx="8" fill="var(--card)" stroke="${AZ}" stroke-width="2"/><rect x="140" y="20" width="104" height="120" rx="8" fill="var(--card)" stroke="${RO}" stroke-width="2"/>${monstruo(68, 84, 2, AZ, { brazos: 2 })}${monstruo(192, 84, 2, RO, { brazos: 2, antenas: true })}${tx(68, 158, "my monster", { s: 11, c: AZ })}${tx(192, 158, "my partner's drawing", { s: 11, c: RO })}`)],
  ],
  ejemplos: [
    ["Completa: «My brother ___ got a guitar.»", ["My brother = he.", "Con he se usa has."], "My brother has got a guitar."],
    ["Pregunta si tu amiga tiene hermanos.", ["Para preguntar, have delante.", "You → have."], "Have you got any brothers or sisters?"],
    ["Corrige: «She has got eyes blue.»", ["El adjetivo va delante del nombre.", "eyes blue → blue eyes."], "She's got blue eyes."],
  ],
  errores: [
    "Usar have con he o she: «He have got» → «He has got».",
    "Decir la edad con have: «I have got eight years» → «I'm eight».",
    "Contestar con got: «Yes, I have got» → «Yes, I have».",
    "Poner el color detrás: «hair black» → «black hair».",
    "Decir «hairs» para el pelo de la cabeza: «He's got short hair».",
  ],
  ejercicios: [
    ["Completa: «I ___ got a cat.»", "have (I've got)."],
    ["Completa: «She ___ got curly hair.»", "has (she's got)."],
    ["Escribe en negativa: «We've got a garden.»", "We haven't got a garden."],
    ["Escribe en negativa: «He's got a bike.»", "He hasn't got a bike."],
    ["Pregunta: «they / a dog»", "Have they got a dog?"],
    ["Respuesta corta: «Has your mum got a car?» (no)", "No, she hasn't."],
    ["Traduce: pelo rizado, ojos verdes.", "curly hair, green eyes."],
    ["¿Cuál es el plural de foot y de tooth?", "feet y teeth."],
    ["¿A o an? «___ umbrella», «___ kite».", "an umbrella, a kite."],
    ["Describe a un compañero con dos frases.", "Model answer: Marta has got long brown hair. She's got brown eyes."],
  ],
  figura: ["Have got y has got", L.columnas("Have got y has got", [["I, you, we, they", "HAVE GOT", ["I've got a cat.", "They've got a car."], AZ], ["he, she, it", "HAS GOT", ["She's got a dog.", "It's got a tail."], VE], ["negativa", "HAVEN'T", ["I haven't got…", "He hasn't got…"], RO], ["pregunta", "HAVE…?", ["Have you got…?", "Yes, I have."], AM]])],
  video: "in3v",
  quiz: [
    ["«Tener» in English is…", ["have got", "be", "do"], "Have got."],
    ["My sister ___ got a scooter.", ["has", "have", "is"], "She → has."],
    ["We ___ got a big garden.", ["have", "has", "are"], "We → have."],
    ["«He's got» means…", ["he has got", "he is got", "he was got"], "'s = has."],
    ["I ___ got a brother.", ["haven't", "hasn't", "don't"], "I → haven't."],
    ["«Have you got a pet?» — «Yes, …»", ["I have.", "I have got.", "I am."], "Respuesta corta."],
    ["___ your dad got a car?", ["Has", "Have", "Is"], "Your dad → has."],
    ["«Pelo rizado» is…", ["curly hair", "hair curly", "curly hairs"], "Adjetivo delante."],
    ["One foot, two…", ["feet", "foots", "feets"], "Plural irregular."],
    ["I've got ___ apple.", ["an", "a", "two"], "Vocal: an."],
  ],
  examen: [
    ["The monster ___ got three eyes.", ["has", "have", "are"], "It → has."],
    ["«Has Zuzu got arms?» — «No, …»", ["it hasn't.", "it haven't.", "it isn't."], "It hasn't."],
    ["«Tengo ocho años» is…", ["I'm eight.", "I've got eight years.", "I have eight."], "Edad con be."],
    ["«Ojos azules» is…", ["blue eyes", "eyes blue", "blues eyes"], "Adjetivo sin -s, delante."],
  ],
  feynman: ["Para qué sirve have got", "Cuándo se usa have y cuándo has", "Cómo se hacen la negativa y la pregunta", "Cómo describo a una persona o a un monstruo"],
  mapa: ["HAVE GOT", AZ, [["Have got", "I · you · we · they", AZ], ["Has got", "he · she · it", VE], ["Negative", "haven't · hasn't got", RO], ["Questions", "Have you got…? Yes, I have.", AM]], 240],
  tarjetas: [
    ["have got", "Tener (I, you, we, they)."],
    ["has got", "Tener (he, she, it)."],
    ["I've got / she's got", "Formas cortas."],
    ["haven't got / hasn't got", "No tener."],
    ["Have you got…?", "¿Tienes…? → Yes, I have. / No, I haven't."],
    ["curly / straight", "Rizado / liso."],
    ["feet / teeth", "Pies / dientes (plurales especiales)."],
    ["a / an", "an delante de vocal: an apple."],
  ],
  familias: ["Jugad a «¿Quién es quién?» en inglés: «Has he got glasses?», «Has she got long hair?».", "Dibujad un monstruo a partir de una descripción en inglés y comparad el resultado."],
  saberes: "Have got / has got en afirmativa, negativa e interrogativa, respuestas cortas, descripción física y partes del cuerpo (Lengua Extranjera: Inglés)",
  ideas: ["Dictado de monstruos por parejas.", "Juego de adivinar personajes con preguntas de sí o no.", "Mural de la clase con descripciones físicas."],
  fuentes: [["British Council LearnEnglish Kids: grammar", "https://learnenglishkids.britishcouncil.org/"], ["Cambridge Dictionary: have got", "https://dictionary.cambridge.org/grammar/british-grammar/have-got-and-have"]],
});

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  videos: {
    "Body parts": ["h4eueDYPTIg", "Head, Shoulders, Knees & Toes - Exercise Song For Kids", "ChuChu TV Nursery Rhymes & Kids Songs", 1387446212],
  },
  objetivos: ["Use the short forms I've got and she's got", "Use a, an and any with have got", "Describe people and animals in detail", "Use irregular plurals: feet, teeth, children"],
  lectura: { titulo: "The lost dog", html: `<p>Sam is very sad. His dog, Biscuit, is lost. Sam and his sister Mia make a poster to find him.</p><p><i>LOST DOG! Have you seen Biscuit? He's small and very friendly. He's got short brown fur and a white spot on his back. He's got long floppy ears and a short tail. He's got big black eyes and a pink nose. He hasn't got a collar, but he's got a red scarf around his neck. If you find him, please call Sam.</i></p><p>They put the poster on the trees in the park and on the door of the supermarket.</p><p>The next morning, Mrs Brown from number 12 knocks at the door. She's got grey hair and glasses, and she's got a basket in her hands.</p><p>"Hello, Sam. Have you got a small brown dog with a red scarf?" she asks.</p><p>"Yes, I have!" says Sam.</p><p>Mrs Brown opens the basket. Biscuit jumps out and licks Sam's face.</p><p>"Thank you, Mrs Brown!" says Sam.</p><p>"Thank you for your poster," she smiles. "Your description was perfect!"</p>` },
  tras: {
    "Have got or has got?": [
      ["Short forms: I've got, she's got", `<p>When we speak, and in informal writing, we usually use <mark>short forms</mark> (formas cortas). We join the subject and the verb with an <b>apostrophe</b> ('):</p><ul><li>I have got → <b>I've got</b></li><li>you have got → <b>you've got</b></li><li>he has got → <b>he's got</b></li><li>she has got → <b>she's got</b></li><li>it has got → <b>it's got</b></li><li>we have got → <b>we've got</b></li><li>they have got → <b>they've got</b></li></ul><p>And in the negative:</p><ul><li>have not → <b>haven't</b>: «I <b>haven't</b> got a bike.»</li><li>has not → <b>hasn't</b>: «She <b>hasn't</b> got a cat.»</li></ul><p>Be careful! <b>He's</b> can mean two things:</p><ul><li>«He<b>'s</b> got a dog» = he <b>has</b> got.</li><li>«He<b>'s</b> eight» = he <b>is</b> eight.</li></ul><p>How do you know? Look for the word <b>got</b>. If <i>got</i> is there, 's means <i>has</i>.</p><p><b>Activity</b>: rewrite these sentences with short forms: «We have got a garden. She has got long hair. They have not got a car.»</p>`,
        L6.filas("Short", [["I have", "I've", cAZ], ["she has", "she's", cVE], ["they have", "they've", cNA], ["has not", "hasn't", cRO]])],
    ],
    "Questions: Have you got…?": [
      ["A, an or any?", `<p>With <b>have got</b> we often use <b>a</b>, <b>an</b> or <b>any</b> before the noun:</p><ul><li><b>a</b> + one thing that starts with a consonant sound: «I've got <b>a</b> bike.»</li><li><b>an</b> + one thing that starts with a vowel sound: «She's got <b>an</b> umbrella.» «I've got <b>an</b> orange.»</li><li>a number or <b>some</b> for more than one: «I've got <b>two</b> cats.» «We've got <b>some</b> books.»</li></ul><p>In <mark>questions</mark> and <mark>negatives</mark> with plurals, we use <b>any</b>:</p><ul><li>«Have you got <b>any</b> pets?» (¿Tienes mascotas?)</li><li>«I haven't got <b>any</b> brothers.» (No tengo hermanos.)</li><li>«Has she got <b>any</b> sweets?»</li></ul><p>In Spanish we often say <i>No tengo hermanos</i>, without any word before the noun. In English, we need <b>any</b>: «I haven't got <b>any</b> brothers».</p><p>With one thing in negatives and questions, we use <b>a</b> or <b>an</b>: «I haven't got <b>a</b> dog.» «Have you got <b>an</b> eraser?»</p><p><b>Activity</b>: ask a partner five questions with «Have you got any…?»: pets, cousins, brothers, posters, books.</p>`,
        L6.filas("Article", [["a", "a bike", cAZ], ["an", "an orange", cVE], ["some", "some books", cNA], ["any", "any pets?", cRO]])],
    ],
    "Describing people: hair and eyes": [
      ["Tall or short? Glasses and freckles", `<p>To describe people, we use <b>be</b> for size and shape, and <b>have got</b> for things on their body:</p><p><b>With be</b>:</p><ul><li>«She's <b>tall</b>.» (alta) / «He's <b>short</b>.» (bajo)</li><li>«He's <b>thin</b>.» (delgado) / «She's <b>strong</b>.» (fuerte)</li><li>«My grandpa is <b>old</b>.» / «My cousin is <b>young</b>.»</li></ul><p><b>With have got</b>:</p><ul><li><b>glasses</b> (gafas): «Mrs Brown has got glasses.»</li><li><b>freckles</b> (pecas): «The twins have got freckles.»</li><li><b>a beard</b> (barba) and <b>a moustache</b> (bigote): «My uncle has got a black beard.»</li><li><b>a fringe</b> (flequillo), <b>a ponytail</b> (coleta), <b>plaits</b> (trenzas).</li></ul><p>Remember the order of adjectives: size first, then colour: «She's got <b>long brown</b> hair.» Not <i>brown long hair</i>.</p><p>And remember: <b>hair</b> is singular in English. «Her hair <b>is</b> long» (not <i>are</i>). Never say <i>hairs</i> for the hair on your head.</p><p>To ask: «<b>What does she look like?</b>» (¿Cómo es físicamente?) – «She's tall and she's got curly hair.»</p><p><b>Activity</b>: describe a person in your family with three sentences with <i>be</i> and three with <i>have got</i>.</p>`,
        H6.dos("Describe", ["BE", ["tall", "thin", "young"], cAZ], ["HAVE GOT", ["glasses", "freckles", "a beard"], cVE]),
        ["7zCNjzTEOeI", "What Does He Look Like? Song | Describing People", "English Tree", 1831128]],
    ],
    "Body parts": [
      ["Animal bodies", `<p>Animals have got some <mark>body parts</mark> that people haven't got. Learn their names:</p><ul><li><b>tail</b> (cola): «A monkey has got a long tail.»</li><li><b>wings</b> (alas): «Birds and butterflies have got wings.»</li><li><b>fur</b> (pelaje): «A bear has got thick fur.»</li><li><b>feathers</b> (plumas): «A parrot has got colourful feathers.»</li><li><b>beak</b> (pico): «An eagle has got a strong beak.»</li><li><b>paws</b> (patas con almohadillas) and <b>claws</b> (garras): «A cat has got soft paws and sharp claws.»</li><li><b>horns</b> (cuernos): «A goat has got two horns.»</li><li><b>scales</b> (escamas) and <b>fins</b> (aletas): «A fish has got scales and fins.»</li><li><b>a trunk</b> (trompa): «An elephant has got a long trunk.»</li></ul><p>To talk about one animal, we use <b>it</b> and <b>has got</b>: «<b>It's got</b> four legs and a tail.»</p><p>To talk about a group of animals, we use <b>they</b> and <b>have got</b>: «Elephants <b>have got</b> big ears.»</p><p>Animal riddles are fun: «It's grey. It's got big ears and a long trunk. What is it?» – «It's an elephant!»</p><p><b>Activity</b>: write a riddle about your favourite animal with three sentences with <i>has got</i>.</p>`,
        L6.filas("Animals", [["tail", "cola", cAZ], ["wings", "alas", cVE], ["beak", "pico", cNA], ["claws", "garras", cRO]])],
    ],
    "Possessions: my favourite things": [
      ["One foot, two feet", `<p>Most English nouns make the plural with <b>-s</b>: <i>one eye, two eyes; one arm, two arms</i>. But some nouns are <mark>irregular</mark>: they change completely.</p><ul><li>one <b>foot</b> → two <b>feet</b> (pie, pies)</li><li>one <b>tooth</b> → two <b>teeth</b> (diente, dientes)</li><li>one <b>child</b> → two <b>children</b> (niño, niños)</li><li>one <b>man</b> → two <b>men</b>; one <b>woman</b> → two <b>women</b></li><li>one <b>mouse</b> → two <b>mice</b> (ratón, ratones)</li><li>one <b>person</b> → two <b>people</b> (persona, personas)</li><li>one <b>fish</b> → two <b>fish</b> (no change!)</li><li>one <b>sheep</b> → two <b>sheep</b> (no change!)</li></ul><p>Some plurals add <b>-es</b>: <i>one box, two boxes; one watch, two watches; one bus, two buses</i>.</p><p>And words ending in consonant + <b>y</b> change to <b>-ies</b>: <i>one baby, two babies; one puppy, two puppies</i>.</p><p>These irregular plurals are very common when we describe people and animals: «The monster has got three <b>feet</b> and a hundred <b>teeth</b>!» «There are twenty <b>children</b> in my class.»</p><p><b>Activity</b>: draw a funny monster and write how many feet, teeth and eyes it has got.</p>`,
        L6.filas("Plurals", [["foot", "feet", cAZ], ["tooth", "teeth", cVE], ["child", "children", cNA], ["mouse", "mice", cRO]])],
    ],
  },
  final: [
    ["Game: Guess who?", `<p><mark>Guess who?</mark> (¿Quién es quién?) is a great game to practise <i>have got</i> and descriptions.</p><p><b>How to play</b>:</p><ul><li><b>1.</b> Each player has got a board with lots of faces. Every face is different: long or short hair, glasses, hats, beards…</li><li><b>2.</b> Each player chooses a secret person.</li><li><b>3.</b> Players take turns to ask <b>yes/no questions</b>: «<b>Has your person got</b> glasses?» «<b>Is your person</b> a man?» «<b>Has she got</b> curly hair?»</li><li><b>4.</b> The other player answers with short answers: «Yes, she has.» / «No, he hasn't.» / «Yes, he is.»</li><li><b>5.</b> Close the faces that are not possible.</li><li><b>6.</b> When you know, say: «<b>Is it</b> Anna?» The first player to find the secret person wins.</li></ul><p>You can also play with your classmates. One pupil thinks of a classmate, and the others ask: «Has he got brown eyes? Is he tall? Has he got a blue jumper?»</p><p>Remember the short answers:</p><ul><li>«Has he got…?» – «Yes, he <b>has</b>.» / «No, he <b>hasn't</b>.»</li><li>«Is she…?» – «Yes, she <b>is</b>.» / «No, she <b>isn't</b>.»</li></ul><p><b>Activity</b>: make your own Guess who? cards with drawings of eight people.</p>`,
      H6.flujo("Guess who?", ["choose|a person", "ask|questions", "close|the faces", "Is it…?|you win!"], cNA)],
  ],
  ejemplos: [
    ["Write the short form: «She has got a red bike».", ["She has = she's.", "Got stays after the short form."], "She's got a red bike."],
    ["Correct: «I haven't got brothers».", ["Negative sentence with a plural.", "We need any before the noun."], "I haven't got any brothers."],
  ],
  errores: ["Saying «Her hairs are long» instead of «Her hair is long».", "Saying «two foots» or «three tooths» instead of «two feet» and «three teeth»."],
  ejercicios: [
    ["b", "Write the short form of «they have got».", "They've got."],
    ["b", "Complete: «I've got ___ orange».", "An."],
    ["b", "How do you say «gafas» in English?", "Glasses."],
    ["b", "What's the plural of «foot»?", "Feet."],
    ["b", "In the reading, what's the name of the dog?", "Biscuit."],
    ["m", "Make a question: you / any pets.", "Have you got any pets?"],
    ["m", "Answer: Has a bird got fur?", "No, it hasn't. It's got feathers."],
    ["m", "Order the words: hair / long / brown / she's got.", "She's got long brown hair."],
    ["m", "Write the plural of child, mouse and person.", "Children, mice, people."],
    ["m", "Describe Mrs Brown from the reading.", "She's got grey hair and glasses."],
    ["a", "Write a «Lost pet» poster with six sentences.", "Open answer."],
    ["a", "Write an animal riddle with has got.", "Example: It's got a long neck and four legs. It's yellow and brown. It's a giraffe."],
    ["a", "Explain the two meanings of «He's» in «He's got a dog» and «He's eight».", "He has got a dog; he is eight."],
    ["a", "Play Guess who? and write five questions you asked.", "Open answer."],
  ],
  quiz: [
    ["The short form of «she has got» is…", ["she's got", "she've got", "she got"], "Short."],
    ["«Have you got ___ sisters?»", ["any", "a", "an"], "Any."],
    ["«Pecas» in English is…", ["freckles", "plaits", "glasses"], "Describe."],
    ["A bird has got…", ["feathers and a beak", "fur and a trunk", "scales and fins"], "Animals."],
    ["The plural of «tooth» is…", ["teeth", "tooths", "teeths"], "Plurals."],
  ],
  examen: [
    ["In the reading, who finds the dog?", ["Mrs Brown", "Mia", "a police officer"], "Reading."],
    ["«Has your person got glasses?» – «No, she ___.»", ["hasn't", "isn't", "haven't"], "Guess who."],
  ],
  tarjetas: [
    ["Short forms", "I've got, she's got, they've got; haven't, hasn't."],
    ["A, an, any", "a bike, an orange; Have you got any pets?"],
    ["Describe", "Be: tall, thin. Have got: glasses, freckles, a beard."],
    ["Bodies and plurals", "tail, wings, beak, claws; feet, teeth, children, mice."],
  ],
  glosario: [
    ["Short form", "Forma contraída: I've, she's."],
    ["Any", "Algún, ningún (en preguntas y negativas)."],
    ["Tall / short", "Alto / bajo."],
    ["Glasses", "Gafas."],
    ["Freckles", "Pecas."],
    ["Beard", "Barba."],
    ["Tail", "Cola."],
    ["Wings", "Alas."],
    ["Fur", "Pelaje."],
    ["Feathers", "Plumas."],
    ["Feet", "Pies (plural de foot)."],
    ["Poster", "Cartel."],
  ],
  situacion: {
    titulo: "Lost and found",
    reto: "The class makes «Lost» posters for imaginary pets and people, and plays a game to find them with descriptions.",
    pasos: ["Invent and draw a lost pet or a lost toy.", "Write a poster with be and have got.", "Read the posters and ask questions with «Has it got…?».", "Play Guess who? with drawings of the class."],
    producto: "A wall of «Lost» posters and a class Guess who? game.",
    evaluacion: ["Uses have got and has got correctly.", "Uses short forms and short answers.", "Describes people and animals in detail.", "Uses irregular plurals."],
  },
});
