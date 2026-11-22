// Inglés 2º de Primaria: Hello again! My name is… Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, fichas } = require("./_peque");
const { V, PROF, FUENTES } = require("./_pri2d");

const R = "var(--red)", A = "var(--pen)", Ve = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "2-primaria",
  titulo: "Hello again! My name is",
  minutos: 20,
  objetivos: ["Saludar y despedirse en inglés según la hora del día", "Decir tu nombre y tu edad: My name is… I'm seven", "Preguntar a otro niño cómo se llama y cómo está"],
  claves: ["hello", "goodbye", "good morning", "My name is…", "What's your name?", "How old are you?", "I'm seven", "How are you?"],
  pregunta: {
    texto: "Vuelves al cole después del verano y ves a un niño nuevo de Inglaterra. ¿Qué le dices?",
    respuesta: "Le saludas con <mark>Hello!</mark> y le dices tu nombre: <b>My name is Lucía</b>. Después le preguntas: <b>What's your name?</b>",
  },
  bloques: [
    {
      html: `<h3>Hello again!</h3><p>¡Empieza 2º! Volvemos a ver a los amigos y decimos <mark>Hello again!</mark>, que significa «¡Hola otra vez!».</p><p>Para saludar usamos <b>Hello</b> o <b>Hi</b>. Para despedirnos decimos <b>Goodbye</b> o <b>Bye!</b></p><p>Cuando saludas, mira a la otra persona y sonríe. Puedes decir adiós con la mano. Así todos se sienten bien.</p>`,
      svg: charla("Dos niños se saludan: Hello again! y Hi! Nice to see you", [["nina", "Hello again!", R], ["nino", "Hi! Nice to see you!", A]]),
    },
    {
      html: `<h3>Good morning!</h3><p>En inglés el saludo <mark>cambia con la hora</mark> del día.</p><p>Por la mañana decimos <b>Good morning</b>. Por la tarde, <b>Good afternoon</b>. Al anochecer, <b>Good evening</b>.</p><p>Y antes de irte a dormir dices <b>Good night</b>. ¡Ojo! <b>Good night</b> no es para saludar: es para despedirse por la noche.</p>`,
      svg: vocab("Saludos según la hora: good morning, good afternoon, good night", [["sol", "morning", "mañana", A], ["nube", "afternoon", "tarde", Ve], ["luna", "night", "noche", N]], { titulo: "Good…" }),
    },
    {
      html: `<h3>My name is…</h3><p>Para decir cómo te llamas usas <mark>My name is…</mark></p><p>Por ejemplo: <b>My name is Pablo</b>. También puedes decir <b>I'm Pablo</b>, que es más corto.</p><p>¿Quieres saber el nombre de otra persona? Dices <b>What's your name?</b> (¿Cómo te llamas?). Ella contesta: <b>My name is Sara</b>. ¡Y ya os conocéis!</p>`,
      svg: charla("Un niño pregunta What's your name? y una niña responde My name is Sara", [["nino", "What's your name?", A], ["nina", "My name is Sara.", R], ["nino", "I'm Pablo!", A]]),
      video: V("in1b"),
    },
    {
      html: `<h3>How old are you?</h3><p>En 2º muchos niños tienen <mark>siete años</mark>.</p><p>Para preguntar la edad decimos <b>How old are you?</b> Significa «¿Cuántos años tienes?».</p><p>Se contesta con <b>I'm</b> y el número: <b>I'm seven</b> (tengo siete) o <b>I'm eight</b> (tengo ocho). En inglés no decimos «tengo años»: decimos «soy siete». ¡Es curioso!</p>`,
      svg: fichas("Números de la edad: six seis, seven siete, eight ocho", [["6", A], ["7", R], ["8", Ve]], { titulo: "six · seven · eight", nota: "I'm seven!" }),
    },
    {
      html: `<h3>How are you?</h3><p>Después de saludar, preguntamos <mark>How are you?</mark>, que es «¿Cómo estás?».</p><p>Si estás bien, contestas <b>I'm fine, thank you</b> o <b>I'm happy!</b></p><p>Si no estás tan bien, puedes decir <b>I'm sad</b> (triste) o <b>I'm tired</b> (cansado). Luego preguntas tú a tu amigo: <b>And you?</b> (¿Y tú?).</p>`,
      svg: vocab("Cómo estás: happy contento, sad triste, tired cansado", [["feliz", "happy", "contento", A], ["triste", "sad", "triste", N], ["cansado", "tired", "cansado", R]], { titulo: "How are you?" }),
    },
    {
      html: `<h3>Palabras de cortesía</h3><p>En clase de inglés usamos <mark>palabras amables</mark> todo el día.</p><p><b>Please</b> es «por favor». <b>Thank you</b> es «gracias». <b>Sorry</b> es «perdón».</p><p>Cuando alguien te da las gracias, contestas <b>You're welcome</b> (de nada). Usar estas palabras es de buena educación en todos los idiomas. ¡Practícalas en casa también!</p>`,
      svg: lista("Palabras amables: please por favor, thank you gracias, sorry perdón", [["please → por favor", A], ["thank you → gracias", Ve], ["sorry → perdón", R]], { titulo: "Magic words" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>Algunas palabras <mark>no se leen como se escriben</mark>.</p><p><b>Hello</b> se dice «jelóu», con la h suave como un suspiro. <b>Name</b> se dice «néim».</p><p><b>Seven</b> se dice «séven». <b>Goodbye</b> se dice «gudbái». Repite cada palabra tres veces: bajito, normal y fuerte. ¡Así se te queda!</p>`,
      svg: lista("Cómo suenan: hello jelóu, name néim, goodbye gudbái", [["hello → «jelóu»", A], ["name → «néim»", R], ["goodbye → «gudbái»", Ve]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saludar y presentarse es lo <mark>primero que hacemos</mark> con alguien nuevo.</p><p>Te servirá si viene un niño de otro país a tu clase. También en un viaje, en el parque o jugando en línea con tus padres.</p><p>Con solo tres frases ya puedes hacer un amigo: <b>Hello! My name is… What's your name?</b></p>`,
      svg: vocab("Para qué sirve: hacer amigos, viajar y jugar", [["nino", "friends", "amigos", A], ["avion", "travel", "viajar", N], ["pelota", "play", "jugar", R]], { titulo: "Hello is for…" }),
    },
    {
      html: `<h3>Jugamos a la pelota de los nombres</h3><p>Nos ponemos en <mark>círculo</mark>. Uno tiene una pelota.</p><p>Dice <b>Hello! My name is Leo</b> y lanza la pelota a un compañero. Este la atrapa y dice <b>Hello, Leo! My name is Ana</b>.</p><p>Luego Ana lanza a otro. Al final, intentamos recordar todos los nombres. ¿Quién se acuerda de más?</p>`,
      svg: charla("Juego de la pelota: Hello! My name is Leo. Hello, Leo! My name is Ana", [["nino", "My name is Leo!", A], ["nina", "Hello, Leo! I'm Ana.", R], ["pelota", "Your turn!", Ve]]),
    },
  ],
  figura: {
    titulo: "Hello again! Saludos y presentaciones",
    svg: mural("Saludos en inglés: hello hola, my name is me llamo, I'm seven tengo siete, goodbye adiós", [["nina", "Hello!", "¡Hola!", R], ["nino", "My name is…", "Me llamo…", A], ["feliz", "I'm seven", "Tengo siete años", Ve], ["mano", "Goodbye!", "¡Adiós!", N]], "Hello again!"),
  },
  video: V("in1v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Preséntate en inglés con tu nombre y tu edad.",
      pasos: ["Primero saludas: Hello!", "Dices tu nombre: My name is Marta.", "Dices tu edad: I'm seven."],
      resultado: "«Hello! My name is Marta. I'm seven.»" },
    { enunciado: "Son las nueve de la mañana. ¿Cómo saludas a la profe?",
      pasos: ["Por la mañana se usa morning.", "Delante va good.", "Añade el nombre de la profe si quieres."],
      resultado: "«Good morning, teacher!»" },
    { enunciado: "Un amigo te pregunta How are you? y estás contento.",
      pasos: ["How are you? es ¿cómo estás?", "Contento es happy.", "Contesta con I'm y pregunta tú."],
      resultado: "«I'm happy! And you?»" },
  ],
  errores: [
    "Decir «Good night» al llegar por la noche: good night es para despedirse.",
    "Decir «I have seven years»: en inglés se dice I'm seven.",
    "Leer hello con jota fuerte: la h suena muy suave, como un suspiro.",
    "Contestar «My name is» sin decir el nombre: hay que terminar la frase.",
  ],
  ejercicios: [
    { q: "¿Cómo se dice «hola» en inglés?", sol: "Hello o Hi." },
    { q: "¿Cómo se dice «adiós»?", sol: "Goodbye o Bye." },
    { q: "Di en inglés: «Me llamo…» y tu nombre.", sol: "My name is… (por ejemplo, My name is Hugo)." },
    { q: "¿Qué pregunta significa «¿Cómo te llamas?»?", sol: "What's your name?" },
    { q: "¿Cómo saludas por la mañana?", sol: "Good morning." },
    { q: "Di en inglés: «Tengo siete años».", sol: "I'm seven." },
    { q: "¿Qué significa How are you?", sol: "¿Cómo estás?" },
    { q: "¿Cómo se dice «gracias»?", sol: "Thank you." },
    { q: "Une: happy, sad, tired con contento, triste, cansado.", sol: "Happy = contento, sad = triste, tired = cansado." },
    { q: "Preséntate a alguien de casa en inglés con tres frases.", sol: "Por ejemplo: Hello! My name is Eva. I'm seven." },
  ],
  quiz: [
    { q: "«Hello» significa…", o: ["hola", "adiós", "gracias"], a: 0, e: "Hello = hola." },
    { q: "«Goodbye» significa…", o: ["buenos días", "adiós", "por favor"], a: 1, e: "Goodbye = adiós." },
    { q: "Por la mañana decimos…", o: ["Good night", "Good morning", "Good evening"], a: 1, e: "Morning = mañana." },
    { q: "«What's your name?» significa…", o: ["¿Cuántos años tienes?", "¿Cómo te llamas?", "¿Cómo estás?"], a: 1, e: "Name = nombre." },
    { q: "Para decir tu nombre dices…", o: ["My name is…", "How old…", "Thank you"], a: 0, e: "My name is… = Me llamo…" },
    { q: "«I'm seven» significa…", o: ["Soy el siete", "Tengo siete años", "Son las siete"], a: 1, e: "La edad se dice con I'm." },
    { q: "«How are you?» significa…", o: ["¿Cómo estás?", "¿Dónde vives?", "¿Qué es?"], a: 0, e: "How are you? = ¿Cómo estás?" },
    { q: "«Thank you» significa…", o: ["perdón", "gracias", "hola"], a: 1, e: "Thank you = gracias." },
    { q: "Antes de dormir dices…", o: ["Good morning", "Good afternoon", "Good night"], a: 2, e: "Good night = buenas noches (despedida)." },
    { q: "«Please» significa…", o: ["por favor", "de nada", "adiós"], a: 0, e: "Please = por favor." },
  ],
  examen: [
    { q: "Contesta: How old are you?", o: ["I'm seven.", "I'm fine.", "My name is Ana."], a: 0, e: "Pregunta por la edad: I'm seven." },
    { q: "Contesta: What's your name?", o: ["I'm happy.", "My name is Leo.", "Goodbye!"], a: 1, e: "Pregunta por el nombre." },
    { q: "«Sad» significa…", o: ["contento", "triste", "cansado"], a: 1, e: "Sad = triste." },
    { q: "Por la tarde saludamos con…", o: ["Good afternoon", "Good night", "Bye"], a: 0, e: "Afternoon = tarde." },
  ],
  feynman: ["Cómo saludar en inglés por la mañana, por la tarde y por la noche", "Cómo decir tu nombre y tu edad", "Por qué en inglés decimos I'm seven"],
  mapa: mapa("HELLO AGAIN!", "var(--pri)", [
    ["Saludar", "hello, good morning", A],
    ["Despedirse", "goodbye, good night", N],
    ["Presentarse", "My name is… I'm seven", R],
    ["Preguntar", "What's your name? How are you?", Ve],
  ], 230),
  tarjetas: [
    ["hola / adiós", "hello / goodbye"],
    ["buenos días", "good morning"],
    ["buenas noches (al irse)", "good night"],
    ["Me llamo…", "My name is…"],
    ["¿Cómo te llamas?", "What's your name?"],
    ["Tengo siete años", "I'm seven"],
    ["¿Cómo estás?", "How are you?"],
    ["por favor / gracias", "please / thank you"],
  ],
  familias: [
    "Saludad en inglés al levantaros: Good morning! Y al acostaros: Good night!",
    "Jugad a presentaros como personajes: My name is Batman. I'm eight.",
    "Preguntad How are you? en la merienda y que conteste con happy, sad o tired.",
    "Usad please y thank you en inglés durante una comida entera.",
  ],
  profesores: PROF("Lengua extranjera: saludos y despedidas según el momento del día; presentarse (nombre y edad); preguntar y responder How are you?; fórmulas de cortesía", ["Rutina diaria de saludo en inglés al empezar la clase.", "Juego de la pelota de los nombres en círculo.", "Tarjetas de emociones para responder How are you?"]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Contar del 1 al 20 en inglés", "Presentar a otra persona: This is my friend", "Preguntar Where are you from? y decir países", "Deletrear el nombre con el abecedario"],
  lectura: { titulo: "The new girl", html: `<p>It's the first day of school. There is a new girl in class 2B. She is standing at the door. She looks shy.</p><p>The teacher, Miss Brown, says: "Good morning, class! This is Aiko. She's our new friend."</p><p>"Hello, Aiko!" say all the children.</p><p>"Hello," says Aiko in a small voice.</p><p>Pablo sits next to her. "Hi! I'm Pablo. How old are you?"</p><p>"I'm seven," says Aiko.</p><p>"Me too! Where are you from?"</p><p>"I'm from Japan," says Aiko, and she smiles.</p><p>"Wow! Japan is very far! Can you write your name in Japanese?"</p><p>Aiko writes her name in beautiful Japanese letters. Everybody says: "Ooooh!"</p><p>At break time, Pablo and Aiko play together. Aiko teaches Pablo to say "hello" in Japanese: <i>konnichiwa</i>.</p><p>"Konnichiwa, Aiko!"</p><p>"Hello, Pablo!"</p><p>Now Aiko isn't shy. She has got a new friend.</p><p><i>(shy: tímida · far: lejos · break time: recreo)</i></p>` },
  tras: {
    "Good morning!": [
      ["Hello, goodbye", `<p>Hay muchas formas de <mark>saludar</mark> y <mark>despedirse</mark> en inglés:</p><p><b>Para saludar</b>:</p><ul><li><b>Hello!</b> / <b>Hi!</b>: ¡Hola!</li><li><b>Good morning!</b>: ¡Buenos días! (por la mañana)</li><li><b>Good afternoon!</b>: ¡Buenas tardes! (después de comer)</li><li><b>Good evening!</b>: ¡Buenas tardes/noches! (al llegar la noche)</li></ul><p><b>Para despedirse</b>:</p><ul><li><b>Goodbye!</b> / <b>Bye!</b>: ¡Adiós!</li><li><b>See you later!</b>: ¡Hasta luego!</li><li><b>See you tomorrow!</b>: ¡Hasta mañana!</li><li><b>Good night!</b>: ¡Buenas noches! (al ir a dormir)</li></ul><p>¡Ojo! <i>Good night</i> solo se dice para despedirse por la noche o al ir a la cama, no para saludar.</p><p><b>Actividad</b>: al salir de clase, despídete de tu maestro o maestra con «See you tomorrow!».</p>`,
        H6.dos("Say", ["HELLO", ["Hi!", "Good morning", "afternoon"], cVE], ["BYE", ["Goodbye", "See you!", "Good night"], cAZ]),
        ["pqDEwPi7vxg", "Hello Song for Children", "Miss Linky", 31867498]],
    ],
    "How old are you?": [
      ["Numbers 1 to 20", `<p>Para decir la edad y contar cosas necesitamos los <mark>numbers</mark>:</p><ul><li>1 <b>one</b>, 2 <b>two</b>, 3 <b>three</b>, 4 <b>four</b>, 5 <b>five</b></li><li>6 <b>six</b>, 7 <b>seven</b>, 8 <b>eight</b>, 9 <b>nine</b>, 10 <b>ten</b></li><li>11 <b>eleven</b>, 12 <b>twelve</b>, 13 <b>thirteen</b>, 14 <b>fourteen</b>, 15 <b>fifteen</b></li><li>16 <b>sixteen</b>, 17 <b>seventeen</b>, 18 <b>eighteen</b>, 19 <b>nineteen</b>, 20 <b>twenty</b></li></ul><p>Fíjate: del 13 al 19 todos terminan en <b>-teen</b>. ¡Por eso a los chicos de 13 a 19 años los llaman <i>teenagers</i>!</p><p>Para preguntar cuántos hay: «<b>How many</b> pencils?» — «<b>Twelve</b> pencils.»</p><p>Cuidado con la pronunciación: <i>thirteen</i> (13) y <i>thirty</i> (30) se parecen mucho. En <i>thirteen</i> la fuerza va al final: «thir-<b>TEEN</b>».</p><p><b>Actividad</b>: cuenta en inglés los alumnos de tu clase, las ventanas y las sillas.</p>`,
        L6.filas("Numbers", [["1-10", "one…ten", cAZ], ["11-12", "eleven, twelve", cVE], ["13-19", "-teen", cNA], ["20", "twenty", cRO]])],
    ],
    "How are you?": [
      ["This is my friend", `<p>Para <mark>presentar</mark> a otra persona decimos <b>This is…</b> (Este es / Esta es):</p><ul><li>«<b>This is</b> my friend Tom.»</li><li>«<b>This is</b> my sister Ana.»</li><li>«<b>This is</b> my teacher, Miss Brown.»</li></ul><p>La otra persona contesta: «<b>Nice to meet you!</b>» (¡Encantado de conocerte!). Y respondemos: «<b>Nice to meet you too!</b>» (¡Igualmente!)</p><p>También podemos dar información sobre esa persona:</p><ul><li>«<b>He's</b> seven.» (Él tiene siete años.)</li><li>«<b>She's</b> my best friend.» (Ella es mi mejor amiga.)</li><li>«<b>His name is</b> Leo.» / «<b>Her name is</b> Ana.»</li></ul><p>Cuidado: <i>his</i> es «de él» y <i>her</i> es «de ella».</p><p><b>Actividad</b>: en grupos de tres, presenta a un compañero a otro.</p>`,
        L6.dialogo("Meet", [["Ana", "This is my friend Tom.", cAZ], ["Leo", "Nice to meet you, Tom!", cRO], ["Tom", "Nice to meet you too!", cVE], ["Leo", "How old are you?", cRO]])],
    ],
    "Palabras de cortesía": [
      ["Where are you from?", `<p>Para preguntar de dónde es alguien: <mark>Where are you from?</mark> (¿De dónde eres?)</p><p>Contestamos: <b>I'm from…</b> + país:</p><ul><li>«I'm from <b>Spain</b>.» (España)</li><li>«I'm from <b>England</b>.» (Inglaterra)</li><li>«I'm from <b>France</b>.» (Francia)</li><li>«I'm from <b>Italy</b>.» (Italia)</li><li>«I'm from <b>Morocco</b>.» (Marruecos)</li><li>«I'm from <b>China</b>.»</li><li>«I'm from <b>Japan</b>.» (Japón)</li><li>«I'm from <b>the USA</b>.» (Estados Unidos)</li></ul><p>Los nombres de los países siempre empiezan con <b>mayúscula</b>.</p><p>En muchas clases hay niños de distintos países. ¡Es una suerte! Podemos aprender palabras de otros idiomas y conocer otras costumbres.</p><p><b>Actividad</b>: busca en un mapa los países de la lista y pon una pegatina en cada uno.</p>`,
        H6.rueda("From", "I'M FROM", [["Spain", cRO], ["England", cAZ], ["Japan", cMO], ["Italy", cVE]])],
    ],
  },
  final: [
    ["Spell your name", `<p>En inglés es muy común <mark>deletrear</mark> el nombre (decir letra a letra). Preguntamos: «<b>How do you spell your name?</b>» (¿Cómo se escribe tu nombre?)</p><p>Las letras en inglés suenan distinto. Algunas importantes:</p><ul><li><b>A</b> suena «ei», <b>E</b> suena «i», <b>I</b> suena «ai».</li><li><b>O</b> suena «ou», <b>U</b> suena «iu».</li><li><b>G</b> suena «yi» y <b>J</b> suena «yei».</li><li><b>H</b> suena «eich», <b>W</b> suena «dábliu», <b>Y</b> suena «uai».</li></ul><p>Example: «How do you spell your name?» — «<b>A-N-A</b>: ei, en, ei.»</p><p>«My name is Tom. <b>T-O-M</b>: ti, ou, em.»</p><p>Esto es muy útil en el teléfono, en un hotel o cuando alguien no entiende nuestro nombre.</p><p><b>Actividad</b>: deletrea tu nombre en inglés a un compañero y que él lo escriba.</p>`,
      H6.flujo("Spell", ["T|ti", "O|ou", "M|em", "Tom|!"], cNA)],
    ["Repaso: the new girl", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>The teacher says: «<b>This is</b> Aiko. She's our new friend.»</li><li>The children say: «<b>Hello</b>, Aiko!»</li><li>Pablo asks: «<b>How old are you?</b>» — «I'm <b>seven</b>.»</li><li>Pablo asks: «<b>Where are you from?</b>» — «I'm from <b>Japan</b>.»</li><li>At first Aiko is <b>shy</b>; at the end she is <b>happy</b>.</li><li><i>Konnichiwa</i> means <b>hello</b> in Japanese.</li></ul><p>Pablo es un buen compañero: se sienta con Aiko, le hace preguntas y juega con ella en el recreo. Cuando llega alguien nuevo a clase, podemos ayudarle a sentirse bien.</p><p>Remember: «Hello» in French is «bonjour», in Italian «ciao», and in Japanese «konnichiwa».</p><p><b>Actividad</b>: aprende a decir «hola» en tres idiomas distintos.</p>`,
      L6.filas("Aiko", [["age", "seven", cAZ], ["from", "Japan", cRO], ["first", "shy", cMO], ["friend", "Pablo", cVE]])],
  ],
  ejemplos: [
    ["Presenta a tu amigo Leo, que tiene ocho años.", ["This is…", "He's…"], "This is my friend Leo. He's eight."],
    ["¿Cómo se dice 15?", ["Termina en -teen."], "Fifteen."],
  ],
  errores: ["Saludar con «Good night» al llegar.", "Confundir his (de él) y her (de ella)."],
  ejercicios: [
    ["b", "How do you say «¡Hasta mañana!»?", "See you tomorrow!"],
    ["b", "Write 12 in English.", "Twelve."],
    ["b", "What is «Nice to meet you»?", "Encantado de conocerte."],
    ["b", "Answer: Where are you from?", "I'm from Spain."],
    ["b", "Say «buenos días».", "Good morning."],
    ["m", "Write 13 to 15 in English.", "Thirteen, fourteen, fifteen."],
    ["m", "Complete: «___ is my sister. ___ name is Ana.»", "This / Her."],
    ["m", "How do you spell «cat»?", "C-A-T: si, ei, ti."],
    ["m", "Translate: Él es de Italia.", "He's from Italy."],
    ["m", "How many? ●●●●●●●●●●●", "Eleven."],
    ["a", "In the reading, where is Aiko from?", "Japan."],
    ["a", "How does Pablo help Aiko?", "He sits with her, asks questions and plays with her."],
    ["a", "Write a dialogue to introduce a new friend.", "Open answer."],
    ["a", "Spell your name and your surname.", "Open answer."],
  ],
  quiz: [
    ["Al irte a dormir dices…", ["Good night", "Good morning", "Hello"], "Greetings."],
    ["Nineteen is…", ["19", "90", "9"], "Numbers."],
    ["Presentar a alguien:", ["This is…", "Where is…", "How is…"], "Introductions."],
    ["I'm from ___.", ["Spain", "spain", "spanish"], "Countries."],
    ["How do you ___ your name?", ["spell", "speak", "sing"], "Spelling."],
  ],
  examen: [
    ["In the reading, how old is Aiko?", ["seven", "eight", "six"], "Reading."],
    ["What does «konnichiwa» mean?", ["hello", "goodbye", "thank you"], "Repaso."],
  ],
  tarjetas: [
    ["Numbers", "1-12 + thirteen…nineteen (-teen) + twenty."],
    ["Introduce", "This is… Nice to meet you! Where are you from?"],
  ],
  glosario: [
    ["See you later", "Hasta luego."],
    ["Good night", "Buenas noches (al despedirse)."],
    ["Twenty", "Veinte."],
    ["This is", "Este es / Esta es."],
    ["Nice to meet you", "Encantado de conocerte."],
    ["His", "De él."],
    ["Her", "De ella."],
    ["Where are you from?", "¿De dónde eres?"],
    ["Spell", "Deletrear."],
    ["Shy", "Tímido."],
  ],
  situacion: {
    titulo: "Welcome to our class",
    reto: "La clase prepara un vídeo o mural de bienvenida en inglés para un alumno nuevo, con presentaciones de todos.",
    pasos: ["Cada alumno escribe su presentación: nombre, edad, país.", "Practicar presentar a un compañero con This is…", "Deletrear los nombres para la lista de clase.", "Grabar o presentar la bienvenida."],
    producto: "Un mural o vídeo de bienvenida en inglés.",
    evaluacion: ["Saluda y se despide adecuadamente.", "Cuenta hasta 20.", "Presenta a otra persona.", "Dice de dónde es y deletrea su nombre."],
  },
});
