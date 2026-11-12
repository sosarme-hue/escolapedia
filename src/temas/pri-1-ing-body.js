// Inglés 1º de Primaria: My body. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "My body",
  minutos: 20,
  objetivos: ["Nombrar las partes de la cara en inglés: eyes, ears, nose, mouth", "Nombrar partes del cuerpo: head, hands, legs, feet", "Seguir órdenes con el cuerpo: touch your nose, clap your hands"],
  claves: ["body", "head", "eyes", "ears", "nose", "mouth", "hands", "feet", "touch your…"],
  pregunta: {
    texto: "¿Con qué parte del cuerpo ves? ¿Y con cuál escuchas? ¿Sabes decirlo en inglés?",
    respuesta: "Vemos con los <mark>eyes</mark> (ojos) y escuchamos con las <mark>ears</mark> (orejas). ¡Tu cuerpo es tu <b>body</b>!",
  },
  bloques: [
    {
      html: `<h3>My body</h3><p>El cuerpo en inglés se dice <mark>body</mark>. Se pronuncia «bódi».</p><p>Arriba está la cabeza, que se dice <b>head</b>. Se dice «jed», con una h suave.</p><p>Debajo están los hombros, <b>shoulders</b>, y la barriga, <b>tummy</b>. Toca cada parte mientras dices su nombre: <b>head, shoulders, tummy!</b> ¡Así se aprende mejor!</p>`,
      svg: vocab("El cuerpo: head es cabeza, hand es mano, foot es pie", [["nino", "head", "cabeza", A], ["mano", "hand", "mano", R], ["pie", "foot", "pie", V]], { titulo: "My body" }),
    },
    {
      html: `<h3>My face</h3><p>La cara se dice <mark>face</mark>. En la cara hay muchas partes.</p><p>Los ojos son <b>eyes</b> («áis»). La nariz es <b>nose</b> («nóus»). La boca es <b>mouth</b> («máuz»).</p><p>Las orejas son <b>ears</b> («íars»). Mírate en un espejo y señala cada parte. Di en voz alta: <b>eyes, nose, mouth, ears!</b></p>`,
      svg: vocab("La cara: eyes ojos, ears orejas, nose nariz, mouth boca", [["ojo", "eyes", "ojos", A], ["oreja", "ears", "orejas", R], ["nariz", "nose", "nariz", V], ["boca", "mouth", "boca", N]], { titulo: "My face" }),
    },
    {
      html: `<h3>Arms and legs</h3><p>Los brazos son <mark>arms</mark>. Las piernas son <mark>legs</mark>.</p><p>Al final de los brazos están las manos: <b>hands</b>. Al final de las piernas están los pies: <b>feet</b>.</p><p>Fíjate: un pie es <b>foot</b>, pero dos pies son <b>feet</b>. ¡Es una palabra especial! Con las manos aplaudimos. Con los pies saltamos.</p>`,
      svg: vocab("Brazos y piernas: hands manos, feet pies", [["mano", "hands", "manos", R, 2], ["pie", "feet", "pies", A, 2]], { titulo: "Arms and legs" }),
      video: vid("SUt8q0EKbms", "Body [Kids Vocab] My Body Parts: Head to Toes", "English Singsing", 39274112),
    },
    {
      html: `<h3>I have two eyes</h3><p>Podemos contar las partes del cuerpo en inglés.</p><p>Decimos <mark>I have two eyes</mark> (Tengo dos ojos). <b>I have one nose</b> (Tengo una nariz).</p><p>Recuerda: si hay más de uno, añadimos <b>s</b>. Un ojo es <b>one eye</b>. Dos ojos son <b>two eyes</b>. ¿Cuántos dedos tienes? <b>I have ten fingers!</b></p>`,
      svg: charla("Un niño dice I have two eyes y una niña dice I have ten fingers", [["nino", "I have two eyes.", A], ["nina", "I have one nose.", R], ["mano", "Ten fingers!", V]]),
    },
    {
      html: `<h3>Touch your nose!</h3><p>La teacher puede decir <mark>Touch your nose!</mark> (¡Tócate la nariz!). Tú te tocas la nariz.</p><p><b>Touch your head</b> es «tócate la cabeza». <b>Touch your ears</b> es «tócate las orejas».</p><p>Hay más órdenes. <b>Clap your hands</b> es «da palmas». <b>Stamp your feet</b> es «da pisotones». ¡A moverse!</p>`,
      svg: lista("Órdenes con el cuerpo: touch your nose, clap your hands, stamp your feet", [["touch your nose", A], ["clap your hands", R], ["stamp your feet", V], ["shake your head", N]], { titulo: "Move your body!" }),
    },
    {
      html: `<h3>Los cinco sentidos</h3><p>Con el cuerpo sentimos el mundo. Son los <mark>cinco sentidos</mark>.</p><p>Con los ojos vemos: <b>I see</b>. Con las orejas oímos: <b>I hear</b>. Con la nariz olemos: <b>I smell</b>.</p><p>Con la boca saboreamos: <b>I taste</b>. Con las manos tocamos: <b>I touch</b>. ¡Cada parte del cuerpo tiene su trabajo! ¿Cuál es tu sentido favorito?</p>`,
      svg: vocab("Los sentidos: see, hear, smell, taste, touch", [["ojo", "see", "ver", A], ["oreja", "hear", "oír", R], ["nariz", "smell", "oler", V], ["boca", "taste", "saborear", N], ["mano", "touch", "tocar", A]], { titulo: "The five senses" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas palabras del cuerpo tienen <mark>sonidos curiosos</mark>.</p><p><b>Mouth</b> termina en «th». Se dice «máuz», con la lengua entre los dientes.</p><p><b>Eyes</b> se dice «áis», aunque se escribe con e. <b>Knees</b> (rodillas) se dice «nís». ¡La k no suena! Escucha la canción y repite.</p>`,
      svg: lista("Cómo suenan: mouth máuz, eyes áis, knees nís", [["mouth → «máuz»", A], ["eyes → «áis»", R], ["knees → «nís»", V]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber las partes del cuerpo <mark>sirve en muchos momentos</mark>.</p><p>Si te duele algo en un viaje, podrás decir dónde: <b>My tummy hurts</b> (Me duele la barriga).</p><p>También entenderás juegos y bailes en inglés. Y en clase de Educación Física, quizá la profe diga: <b>Touch your toes!</b></p>`,
      svg: vocab("Para qué sirve: decir qué te duele, bailar y jugar", [["triste", "It hurts", "me duele", R], ["guitarra", "dance", "bailar", A], ["pelota", "play", "jugar", V]], { titulo: "Body words are for…" }),
    },
    {
      html: `<h3>Cantamos Head, shoulders, knees and toes</h3><p>Es la canción del cuerpo <mark>más famosa</mark> en inglés.</p><p>Dice: <b>Head, shoulders, knees and toes. Eyes and ears and mouth and nose.</b></p><p>Mientras cantas, tócate cada parte. Primero despacio, luego más rápido. Es como un juego: ¿podrás seguir el ritmo sin equivocarte? ¡Ponte de pie y canta!</p>`,
      svg: lista("Canción: head, shoulders, knees and toes, eyes and ears and mouth and nose", [["head, shoulders", A], ["knees and toes", R], ["eyes and ears", V], ["mouth and nose", N]], { titulo: "Let's sing!" }),
    },
  ],
  figura: {
    titulo: "My body: mi cuerpo en inglés",
    svg: mural("Partes del cuerpo: eyes ojos, ears orejas, hands manos, feet pies", [["ojo", "eyes", "ojos", A], ["oreja", "ears", "orejas", R], ["mano", "hands", "manos", V], ["pie", "feet", "pies", N]], "This is my body!"),
  },
  video: { ...vid("WX8HmogNyCY", "Head Shoulders Knees & Toes (Speeding Up)", "Super Simple Songs - Kids Songs", 75604960, 116331), busqueda: "head shoulders knees and toes song" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Señala tu nariz y dilo en inglés.",
      pasos: ["Nariz en inglés es nose.", "Se pronuncia «nóus».", "Señala y di: This is my nose."],
      resultado: "«This is my nose.»" },
    { enunciado: "¿Cuántas orejas tienes? Contesta en inglés.",
      pasos: ["Cuenta: tienes dos orejas, two.", "Oreja es ear; dos son ears.", "Empieza con I have…"],
      resultado: "«I have two ears.»" },
    { enunciado: "La teacher dice Clap your hands! ¿Qué haces?",
      pasos: ["Hands son las manos.", "Clap es dar palmas.", "Juntas las manos varias veces."],
      resultado: "Das palmas: ¡clap, clap, clap!" },
  ],
  errores: [
    "Decir two foots: el plural de foot es feet.",
    "Leer eyes como «eies»: se dice «áis».",
    "Pronunciar la k de knees: se dice «nís».",
    "Olvidar la s del plural: two hand → two hands.",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «cuerpo» en inglés?", sol: "Body." },
    { q: "¿Cómo se dice «cabeza»?", sol: "Head." },
    { q: "Di en inglés: ojos, nariz y boca.", sol: "Eyes, nose and mouth." },
    { q: "¿Qué son las ears?", sol: "Las orejas." },
    { q: "¿Cómo se dice «manos»?", sol: "Hands." },
    { q: "¿Cómo se dice «pies»?", sol: "Feet." },
    { q: "Di en inglés: «Tengo dos ojos».", sol: "I have two eyes." },
    { q: "¿Qué haces si te dicen Touch your head?", sol: "Te tocas la cabeza." },
    { q: "¿Qué significa clap your hands?", sol: "Da palmas." },
    { q: "Canta Head, shoulders, knees and toes tocando cada parte.", sol: "Head, shoulders, knees and toes, eyes and ears and mouth and nose." },
  ],
  quiz: [
    { q: "«Head» es…", o: ["cabeza", "mano", "pie"], a: 0, e: "Head = cabeza." },
    { q: "«Eyes» son…", o: ["orejas", "ojos", "dientes"], a: 1, e: "Eyes = ojos." },
    { q: "«Nariz» en inglés es…", o: ["nose", "mouth", "ear"], a: 0, e: "Nose = nariz." },
    { q: "«Mouth» es…", o: ["boca", "mano", "barriga"], a: 0, e: "Mouth = boca." },
    { q: "«Hands» son…", o: ["pies", "manos", "piernas"], a: 1, e: "Hands = manos." },
    { q: "Dos pies se dice…", o: ["two foots", "two feet", "two foot"], a: 1, e: "El plural de foot es feet." },
    { q: "«Legs» son…", o: ["brazos", "piernas", "ojos"], a: 1, e: "Legs = piernas." },
    { q: "«Touch your nose» significa…", o: ["tócate la nariz", "mira la nariz", "cierra la boca"], a: 0, e: "Touch = tocar." },
    { q: "Con los ojos…", o: ["I see", "I hear", "I taste"], a: 0, e: "I see = veo." },
    { q: "«Clap your hands» significa…", o: ["da palmas", "salta", "siéntate"], a: 0, e: "Clap = dar palmas." },
  ],
  examen: [
    { q: "Las orejas son…", o: ["ears", "eyes", "arms"], a: 0, e: "Ears = orejas." },
    { q: "«I have ten fingers» significa…", o: ["Tengo diez dedos", "Tengo dos manos", "Tengo diez años"], a: 0, e: "Fingers = dedos." },
    { q: "Con las orejas…", o: ["I hear", "I smell", "I see"], a: 0, e: "I hear = oigo." },
    { q: "«Stamp your feet» significa…", o: ["da pisotones", "toca tu cabeza", "abre la boca"], a: 0, e: "Stamp = pisar fuerte." },
  ],
  feynman: ["Cómo se llaman en inglés las partes de la cara", "Por qué decimos one foot pero two feet", "Qué hacer si te dicen touch your… o clap your hands"],
  mapa: mapa("MY BODY", "var(--pri)", [
    ["My face", "eyes, ears, nose, mouth", A],
    ["My body", "head, arms, legs", R],
    ["Hands and feet", "one foot → two feet", V],
    ["Orders", "touch your nose!", N],
  ], 230),
  tarjetas: [
    ["cuerpo", "body"],
    ["cabeza", "head"],
    ["ojos / orejas", "eyes / ears"],
    ["nariz / boca", "nose / mouth"],
    ["manos", "hands"],
    ["pies", "feet (un pie: foot)"],
    ["Tengo dos ojos", "I have two eyes"],
    ["¡Tócate la nariz!", "Touch your nose!"],
  ],
  familias: [
    "Al bañarse o vestirse, nombrad las partes del cuerpo en inglés.",
    "Jugad a Touch your…: uno da la orden y los demás se tocan esa parte.",
    "Cantad Head, shoulders, knees and toes cada vez más rápido.",
    "Mirad juntos el vídeo del tema y pausadlo para repetir las palabras.",
  ],
  profesores: PROF("Lengua extranjera: léxico del cuerpo y la cara; órdenes de respuesta física (TPR); I have…", ["Respuesta física total con Touch your…", "Canción Head, shoulders, knees and toes con gestos.", "Dibujar un monstruo con número de partes dictado: three eyes, two noses…"]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
