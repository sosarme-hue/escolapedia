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
