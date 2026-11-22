// Inglés 2º de Primaria: My body and my face. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, cuantos } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "My body and my face",
  minutos: 20,
  objetivos: ["Nombrar las partes de la cara y del cuerpo en inglés", "Describirte: I've got blue eyes and short hair", "Seguir órdenes con el cuerpo: Touch your nose!"],
  claves: ["face", "eyes", "nose", "mouth", "ears", "hair", "head", "arms", "legs", "hands", "feet", "I've got…"],
  pregunta: {
    texto: "Toca tu nariz. Ahora tus orejas. ¿Sabes decirlo en inglés?",
    respuesta: "La nariz es <mark>nose</mark> y las orejas son <mark>ears</mark>. La cara entera es <b>face</b>.",
  },
  bloques: [
    {
      html: `<h3>My face: la cara</h3><p>La cara en inglés es <mark>face</mark>.</p><p>Los ojos son <b>eyes</b>. La nariz es <b>nose</b>. La boca es <b>mouth</b>. Las orejas son <b>ears</b>.</p><p>Tenemos dos ojos y dos orejas, por eso decimos <b>eyes</b> y <b>ears</b> con <b>s</b>. Pero solo una nariz y una boca: <b>nose</b> y <b>mouth</b>. ¡Señala cada parte!</p>`,
      svg: vocab("La cara: eyes ojos, nose nariz, mouth boca, ears orejas", [["ojo", "eyes", "ojos", A], ["nariz", "nose", "nariz", R], ["boca", "mouth", "boca", Ve], ["oreja", "ears", "orejas", N]], { titulo: "My face" }),
      video: V("in7b"),
    },
    {
      html: `<h3>Hair, teeth and more</h3><p>En la cabeza tenemos <mark>más cosas</mark>.</p><p>El pelo es <b>hair</b>. Los dientes son <b>teeth</b>. La cabeza es <b>head</b>.</p><p>El pelo puede ser largo, <b>long</b>, o corto, <b>short</b>. También puede ser rubio, <b>blond</b>, o castaño, <b>brown</b>. Cepíllate los dientes, <b>teeth</b>, después de comer. ¡Una sonrisa limpia!</p>`,
      svg: lista("Más partes: hair pelo, teeth dientes, head cabeza", [["hair → pelo", A], ["teeth → dientes", R], ["head → cabeza", Ve]], { titulo: "Head" }),
    },
    {
      html: `<h3>My body: el cuerpo</h3><p>El cuerpo es <mark>body</mark>.</p><p>Los brazos son <b>arms</b>. Las piernas son <b>legs</b>. Las manos son <b>hands</b>. Los pies son <b>feet</b>.</p><p>¡Atención! Un pie es <b>foot</b>, pero dos pies son <b>feet</b>. Es una palabra especial. En cada mano tenemos cinco dedos, <b>fingers</b>. Cuéntalos en inglés: one, two, three, four, five!</p>`,
      svg: vocab("El cuerpo: hands manos, feet pies, arms brazos, legs piernas", [["mano", "hands", "manos", A], ["pie", "feet", "pies", R], ["nino", "arms", "brazos", Ve], ["nina", "legs", "piernas", N]], { titulo: "My body" }),
    },
    {
      html: `<h3>Head, shoulders, knees and toes</h3><p>Hay una canción muy famosa para <mark>aprender el cuerpo</mark>.</p><p>Dice <b>Head, shoulders, knees and toes</b>: cabeza, hombros, rodillas y dedos de los pies.</p><p>Mientras cantas, tocas cada parte. Primero despacio y luego cada vez más rápido. ¡Es muy divertido y se aprende sin darte cuenta! Prueba a cantarla en clase.</p>`,
      svg: lista("Canción: head cabeza, shoulders hombros, knees rodillas, toes dedos de los pies", [["head → cabeza", A], ["shoulders → hombros", R], ["knees → rodillas", Ve], ["toes → dedos del pie", N]], { titulo: "Sing and touch!" }),
    },
    {
      html: `<h3>I've got blue eyes</h3><p>Para describirte usas <mark>I've got</mark> (tengo).</p><p><b>I've got brown eyes</b> es «tengo los ojos marrones». <b>I've got long hair</b> es «tengo el pelo largo».</p><p>Recuerda que en inglés el color va antes: <b>blue eyes</b>, ojos azules. Mírate en un espejo y descríbete con dos frases. ¿Cómo son tus ojos y tu pelo?</p>`,
      svg: charla("Descripción: I've got brown eyes. I've got short hair", [["nino", "I've got brown eyes.", A], ["nina", "I've got long hair!", R]]),
    },
    {
      html: `<h3>Touch your nose!</h3><p>En clase jugamos a <mark>seguir órdenes</mark> con el cuerpo.</p><p><b>Touch your nose</b> es «tócate la nariz». <b>Clap your hands</b> es «da palmas». <b>Stamp your feet</b> es «da pisotones».</p><p><b>Shake your head</b> es «mueve la cabeza». <b>Wave your arms</b> es «mueve los brazos». ¡Escucha bien y muévete rápido!</p>`,
      svg: lista("Órdenes: touch your nose, clap your hands, stamp your feet", [["Touch your nose!", A], ["Clap your hands!", R], ["Stamp your feet!", Ve]], { titulo: "Simon says…" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas partes del cuerpo <mark>suenan diferente</mark> de como se escriben.</p><p><b>Eyes</b> se dice «áis». <b>Mouth</b> se dice «máuz». <b>Hair</b> se dice «jéar».</p><p><b>Feet</b> se dice «fiit», con una i larga. <b>Ears</b> se dice «íars». Toca cada parte mientras la dices. Así tu cuerpo te ayuda a recordar.</p>`,
      svg: lista("Cómo suenan: eyes áis, mouth máuz, hair jéar, feet fiit", [["eyes → «áis»", A], ["mouth → «máuz»", R], ["hair → «jéar»", Ve], ["feet → «fiit»", N]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si te duele algo en un viaje, podrás <mark>decirlo en inglés</mark>.</p><p>Por ejemplo: <b>My head hurts</b> (me duele la cabeza) o <b>My leg hurts</b> (me duele la pierna).</p><p>También sirve para describir a un amigo o a un personaje de un cuento. Y para jugar a muchos juegos de baile y movimiento.</p>`,
      svg: charla("Si te duele algo: My head hurts! Oh, sorry!", [["nina", "My head hurts!", R], ["mama", "Oh! Sit down, please.", A]]),
    },
    {
      html: `<h3>Jugamos a Simon says</h3><p><mark>Simon says</mark> es el juego de «Simón dice».</p><p>El que manda dice: <b>Simon says touch your ears!</b> y todos se tocan las orejas.</p><p>Pero si dice solo <b>Touch your ears!</b> sin <b>Simon says</b>, ¡no hay que moverse! Quien se mueve, queda eliminado. Gana el último que queda. ¡Hay que escuchar muy bien!</p>`,
      svg: charla("Juego Simon says: Simon says touch your ears! Touch your nose!", [["papa", "Simon says touch your ears!", A], ["nino", "OK!", R], ["papa", "Touch your nose!", A], ["nina", "Ha! No Simon says!", Ve]]),
    },
  ],
  figura: {
    titulo: "My body and my face",
    svg: mural("Partes del cuerpo en inglés: eyes ojos, nose nariz, hands manos, feet pies", [["ojo", "eyes", "ojos", A], ["nariz", "nose", "nariz", R], ["mano", "hands", "manos", Ve], ["pie", "feet", "pies", N]], "My body and my face"),
  },
  video: V("in7v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Di en inglés que tienes los ojos verdes.",
      pasos: ["Tengo se dice I've got.", "Verde es green; ojos es eyes.", "El color va antes: green eyes."],
      resultado: "«I've got green eyes.»" },
    { enunciado: "¿Qué haces si oyes Clap your hands?",
      pasos: ["Clap es dar palmas.", "Hands son las manos.", "Hay que dar palmas."],
      resultado: "Das palmas: ¡clap, clap!" },
    { enunciado: "Te duele la pierna. Dilo en inglés.",
      pasos: ["Pierna es leg.", "Me duele se dice … hurts.", "Empieza con My."],
      resultado: "«My leg hurts.»" },
  ],
  errores: [
    "Decir «foots»: el plural de foot es feet.",
    "Decir «eyes blue»: el color va antes, blue eyes.",
    "Confundir hair (pelo) con head (cabeza).",
    "Leer mouth con «t»: se dice «máuz».",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «cara» en inglés?", sol: "Face." },
    { q: "¿Qué son los eyes?", sol: "Los ojos." },
    { q: "¿Cómo se dice «nariz»?", sol: "Nose." },
    { q: "¿Qué es mouth?", sol: "La boca." },
    { q: "Di cuatro partes del cuerpo en inglés.", sol: "Por ejemplo: arms, legs, hands, feet." },
    { q: "¿Cuál es el plural de foot?", sol: "Feet." },
    { q: "Descríbete con dos frases en inglés.", sol: "Por ejemplo: I've got brown eyes. I've got short hair." },
    { q: "¿Qué significa Touch your ears?", sol: "Tócate las orejas." },
    { q: "Canta Head, shoulders, knees and toes tocando cada parte.", sol: "Cabeza, hombros, rodillas y dedos de los pies." },
    { q: "Juega a Simon says con alguien de casa.", sol: "Por ejemplo: Simon says clap your hands!" },
  ],
  quiz: [
    { q: "«Nose» es…", o: ["nariz", "boca", "oreja"], a: 0, e: "Nose = nariz." },
    { q: "«Ears» son…", o: ["ojos", "orejas", "dientes"], a: 1, e: "Ears = orejas." },
    { q: "«Boca» en inglés es…", o: ["mouth", "teeth", "face"], a: 0, e: "Mouth = boca." },
    { q: "«Hair» es…", o: ["cabeza", "pelo", "mano"], a: 1, e: "Hair = pelo." },
    { q: "«Legs» son…", o: ["brazos", "piernas", "pies"], a: 1, e: "Legs = piernas." },
    { q: "Dos pies se dice…", o: ["two foots", "two feet", "two feets"], a: 1, e: "Foot → feet." },
    { q: "«I've got blue eyes» significa…", o: ["Tengo los ojos azules", "Veo ojos azules", "Me gustan los ojos azules"], a: 0, e: "I've got = tengo." },
    { q: "«Clap your hands» es…", o: ["mueve los pies", "da palmas", "toca la nariz"], a: 1, e: "Clap = dar palmas." },
    { q: "«Knees» son…", o: ["rodillas", "hombros", "codos"], a: 0, e: "Knees = rodillas." },
    { q: "«Teeth» son…", o: ["dientes", "dedos", "labios"], a: 0, e: "Teeth = dientes." },
  ],
  examen: [
    { q: "«Arms» son…", o: ["brazos", "piernas", "manos"], a: 0, e: "Arms = brazos." },
    { q: "Pelo largo es…", o: ["long hair", "hair long", "short hair"], a: 0, e: "Long = largo, delante." },
    { q: "Si no dicen Simon says, tú…", o: ["te mueves", "no te mueves", "cantas"], a: 1, e: "Solo te mueves con Simon says." },
    { q: "«My head hurts» significa…", o: ["Me duele la cabeza", "Toco mi cabeza", "Mi cabeza es grande"], a: 0, e: "Hurts = duele." },
  ],
  feynman: ["Cómo se llaman las partes de la cara y del cuerpo en inglés", "Cómo describirte con I've got", "Por qué decimos feet y no foots"],
  mapa: mapa("MY BODY", "var(--pri)", [
    ["Face", "eyes, nose, mouth, ears", A],
    ["Body", "arms, legs, hands, feet", R],
    ["Describir", "I've got blue eyes", Ve],
    ["Órdenes", "Touch your nose! Clap!", N],
  ], 230),
  tarjetas: [
    ["cara / cabeza", "face / head"],
    ["ojos / nariz", "eyes / nose"],
    ["boca / orejas", "mouth / ears"],
    ["pelo / dientes", "hair / teeth"],
    ["brazos / piernas", "arms / legs"],
    ["mano / manos", "hand / hands"],
    ["pie / pies", "foot / feet"],
    ["Tengo los ojos azules", "I've got blue eyes"],
  ],
  familias: [
    "Jugad a Simon says con las partes del cuerpo.",
    "Cantad Head, shoulders, knees and toes cada vez más rápido.",
    "Describid a alguien de la familia: She's got long hair.",
    "Al lavaros, nombrad en inglés cada parte: hands, face, teeth…",
  ],
  profesores: PROF("Lengua extranjera: léxico de la cara y del cuerpo; plural irregular foot / feet y tooth / teeth; descripción física con have got; instrucciones con verbos de acción (TPR)", ["Simon says como rutina de movimiento.", "Canción Head, shoulders, knees and toes.", "Dibujar un monstruo al dictado: It's got three eyes."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Describir a una persona: long hair, big eyes", "Usar He's got / She's got", "Decir cómo nos sentimos: I'm happy, I'm sad", "Nombrar los cinco sentidos en inglés"],
  lectura: { titulo: "The friendly monster", html: `<p>In a big green forest there is a friendly monster. His name is Bobo.</p><p>Bobo has got <b>three eyes</b>: two blue eyes and one green eye. He has got <b>two big ears</b> and a very <b>long nose</b>.</p><p>Bobo has got <b>four arms</b> and <b>two short legs</b>. His hair is <b>purple</b> and very curly.</p><p>"Hello!" says Bobo to a little girl. Her name is Lily.</p><p>Lily is scared. "Oh no! A monster!"</p><p>"Don't be scared," says Bobo. "I'm a friendly monster. I can clap with my four hands!" Clap, clap, clap, clap!</p><p>Lily laughs. "You're funny, Bobo!"</p><p>Now Lily and Bobo are friends. They play together every day. Bobo touches his toes, and Lily touches her nose.</p><p>"I'm happy!" says Bobo.</p><p>"Me too!" says Lily.</p><p><i>(friendly: simpático · scared: asustada · curly: rizado · clap: aplaudir)</i></p>` },
  tras: {
    "Hair, teeth and more": [
      ["Long hair, short hair", `<p>Para describir el pelo (<mark>hair</mark>) usamos estas palabras:</p><ul><li><b>long hair</b>: pelo largo.</li><li><b>short hair</b>: pelo corto.</li><li><b>curly hair</b>: pelo rizado.</li><li><b>straight hair</b>: pelo liso.</li></ul><p>Y los colores del pelo:</p><ul><li><b>blond</b> (rubio), <b>brown</b> (castaño), <b>black</b> (negro), <b>red</b> (pelirrojo), <b>grey</b> (canoso).</li></ul><p>¡Atención! En inglés, la palabra que describe va <b>antes</b>: decimos <b>long hair</b> (largo pelo), no «hair long».</p><p>Examples:</p><ul><li>«I've got <b>short brown</b> hair.»</li><li>«Grandma has got <b>grey curly</b> hair.»</li></ul><p><b>Actividad</b>: mira a tu compañero y di cómo es su pelo en inglés.</p>`,
        H6.dos("Hair", ["LONG", ["long hair", "curly", "blond"], cMO], ["SHORT", ["short hair", "straight", "black"], cAZ])],
    ],
    "I've got blue eyes": [
      ["He's got, she's got", `<p>Para hablar de <b>otra persona</b> cambiamos <i>I've got</i>:</p><ul><li><mark>He's got</mark> (él tiene): «<b>He's got</b> blue eyes.»</li><li><mark>She's got</mark> (ella tiene): «<b>She's got</b> long hair.»</li><li><b>It's got</b> (tiene, para un animal o cosa): «The dog <b>has got</b> big ears.»</li></ul><p>Look and listen:</p><ul><li>«This is my brother. <b>He's got</b> short black hair and brown eyes.»</li><li>«This is my mum. <b>She's got</b> long blond hair and green eyes.»</li><li>«This is my cat. <b>It's got</b> a small nose and long whiskers.»</li></ul><p><i>He's</i> = <i>he has</i> y <i>she's</i> = <i>she has</i>.</p><p><b>Actividad</b>: dibuja a una persona de tu familia y descríbela con He's got o She's got.</p>`,
        L6.filas("Got", [["I've got", "yo tengo", cAZ], ["He's got", "él tiene", cVE], ["She's got", "ella tiene", cRO], ["It's got", "tiene", cNA]])],
    ],
    "Touch your nose!": [
      ["How do you feel?", `<p>Nuestra cara muestra cómo nos <mark>sentimos</mark>. En inglés decimos <b>I'm…</b> (Estoy…):</p><ul><li><b>happy</b>: contento 😊</li><li><b>sad</b>: triste 😢</li><li><b>angry</b>: enfadado 😠</li><li><b>scared</b>: asustado 😨</li><li><b>tired</b>: cansado 😴</li><li><b>hungry</b>: con hambre.</li></ul><p>Para preguntar: <b>How do you feel?</b> (¿Cómo te sientes?)</p><ul><li>«How do you feel?» — «<b>I'm happy</b>, thank you!»</li><li>«Are you tired?» — «Yes, I am.» / «No, I'm not.»</li></ul><p>Cuando estamos contentos, sonreímos con la <b>mouth</b>. Cuando estamos tristes, salen lágrimas de los <b>eyes</b>.</p><p><b>Actividad</b>: haz una cara con plastilina que muestre un sentimiento y di su nombre en inglés.</p>`,
        H6.rueda("Feel", "I'M", [["happy", cNA], ["sad", cAZ], ["angry", cRO], ["tired", cMO]])],
    ],
    "¿Para qué sirve?": [
      ["The five senses", `<p>Tenemos cinco <mark>senses</mark> (sentidos). Cada uno usa una parte del cuerpo:</p><ul><li><b>I see</b> with my <b>eyes</b>. (Veo con los ojos.)</li><li><b>I hear</b> with my <b>ears</b>. (Oigo con las orejas.)</li><li><b>I smell</b> with my <b>nose</b>. (Huelo con la nariz.)</li><li><b>I taste</b> with my <b>tongue</b>. (Saboreo con la lengua.)</li><li><b>I touch</b> with my <b>hands</b>. (Toco con las manos.)</li></ul><p>Little game:</p><ul><li>«I can see a red apple.»</li><li>«I can hear a dog: woof!»</li><li>«I can smell a flower.»</li><li>«I can taste chocolate. Yummy!»</li><li>«I can touch a soft cat.»</li></ul><p><b>Actividad</b>: con los ojos tapados, adivina objetos tocándolos y di «I can touch a…».</p>`,
        L6.filas("Senses", [["see", "eyes", cAZ], ["hear", "ears", cVE], ["smell", "nose", cNA], ["touch", "hands", cRO]]),
        ["vXXiyIGqliE", "Five Senses - Body Parts Song", "The Kiboomers", 15141098]],
    ],
  },
  final: [
    ["Wash your hands!", `<p>Para cuidar nuestro cuerpo hay que tener buenos hábitos de <mark>higiene</mark>. En inglés:</p><ul><li><b>Wash your hands</b>: lávate las manos (antes de comer y después del baño).</li><li><b>Brush your teeth</b>: cepíllate los dientes (después de cada comida).</li><li><b>Brush your hair</b>: péinate.</li><li><b>Wash your face</b>: lávate la cara.</li><li><b>Have a shower</b>: dúchate.</li></ul><p>Una canción para lavarse las manos: «Wash, wash, wash your hands, wash them every day. Soap and water, rub, rub, rub, the germs all go away!»</p><p><i>(soap: jabón · water: agua · germs: microbios)</i></p><p>Hay que frotar las manos mientras cantas la canción dos veces. ¡Así quedan bien limpias!</p><p><b>Actividad</b>: canta la canción mientras te lavas las manos antes de comer.</p>`,
      H6.flujo("Clean", ["water|hands", "soap|rub", "rinse|agua", "dry|towel"], cAZ)],
    ["Repaso: the friendly monster", `<p>Repasamos con la <mark>lectura</mark> de Bobo:</p><ul><li>Bobo has got <b>three eyes</b>: tres ojos.</li><li>He has got <b>two big ears</b>: dos orejas grandes.</li><li>He has got a <b>long nose</b>: una nariz larga.</li><li>He has got <b>four arms</b> and <b>two short legs</b>.</li><li>His hair is <b>purple</b> and <b>curly</b>: morado y rizado.</li><li>Lily is <b>scared</b> at first, then <b>happy</b>.</li><li>Bobo <b>claps</b> with his four hands.</li></ul><p>Bobo looks different, but he is friendly. Lo importante no es cómo somos por fuera, sino cómo tratamos a los demás.</p><p>Bobo y Lily nos enseñan que todos somos diferentes: unos tienen el pelo largo y otros corto, unos tienen los ojos azules y otros marrones. ¡Y eso es lo bonito! Everybody is different, and everybody is special.</p><p><b>Actividad</b>: dibuja tu propio monstruo y descríbelo: «My monster has got…».</p>`,
      L6.filas("Bobo", [["eyes", "three", cVE], ["arms", "four", cAZ], ["legs", "two short", cNA], ["hair", "purple", cMO]])],
  ],
  ejemplos: [
    ["Describe: pelo largo y rubio.", ["Primero long, luego el color, al final hair."], "Long blond hair."],
    ["Mi hermana tiene ojos verdes.", ["Ella: She's got.", "green eyes."], "She's got green eyes."],
  ],
  errores: ["Decir «hair long» en lugar de «long hair».", "Usar «I've got» para hablar de otra persona: «My mum I've got…»."],
  ejercicios: [
    ["b", "How do you say «pelo corto»?", "Short hair."],
    ["b", "How do you say «ella tiene»?", "She's got."],
    ["b", "What is «happy» in Spanish?", "Contento."],
    ["b", "I see with my…", "Eyes."],
    ["b", "Translate: Lávate las manos.", "Wash your hands."],
    ["m", "Complete: «My dad ___ got short black hair.»", "Has (He's got)."],
    ["m", "Answer: How do you feel?", "I'm happy / I'm tired…"],
    ["m", "I smell with my…", "Nose."],
    ["m", "Order: hair / curly / I've got / red", "I've got curly red hair."],
    ["m", "What is «brush your teeth»?", "Cepíllate los dientes."],
    ["a", "In the reading, how many eyes has Bobo got?", "Three."],
    ["a", "Describe Bobo's hair.", "Purple and curly."],
    ["a", "Describe a friend: hair, eyes, feeling.", "Open answer."],
    ["a", "Draw a monster and write three sentences with «It's got».", "Open answer."],
  ],
  quiz: [
    ["Pelo rizado is…", ["curly hair", "long hair", "short hair"], "Hair."],
    ["Ella tiene is…", ["She's got", "He's got", "I've got"], "Got."],
    ["Triste is…", ["sad", "happy", "angry"], "Feelings."],
    ["I hear with my…", ["ears", "nose", "hands"], "Senses."],
    ["Brush your…", ["teeth", "shoes", "chair"], "Hygiene."],
  ],
  examen: [
    ["In the reading, Bobo's hair is…", ["purple", "blond", "black"], "Reading."],
    ["How many arms has Bobo got?", ["four", "two", "three"], "Repaso."],
  ],
  tarjetas: [
    ["He's got / She's got", "Él tiene / Ella tiene."],
    ["Five senses", "see, hear, smell, taste, touch."],
  ],
  glosario: [
    ["Long", "Largo."],
    ["Short", "Corto."],
    ["Curly", "Rizado."],
    ["Straight", "Liso."],
    ["Blond", "Rubio."],
    ["Happy", "Contento."],
    ["Sad", "Triste."],
    ["Tongue", "Lengua."],
    ["Wash", "Lavar."],
    ["Friendly", "Simpático."],
  ],
  situacion: {
    titulo: "Monster party",
    reto: "Cada alumno crea un monstruo, lo describe en inglés y la clase juega a adivinar de quién es cada monstruo.",
    pasos: ["Dibujar un monstruo con muchas partes del cuerpo.", "Escribir tres frases: «It's got…».", "Decir cómo se siente el monstruo: «It's happy».", "Jugar a adivinar el monstruo por su descripción."],
    producto: "Un mural de monstruos con descripciones en inglés.",
    evaluacion: ["Nombra partes del cuerpo.", "Usa He's got / She's got / It's got.", "Dice sentimientos.", "Nombra los cinco sentidos."],
  },
});
