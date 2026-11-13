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
