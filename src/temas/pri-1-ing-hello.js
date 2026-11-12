// Inglés 1º de Primaria: Hello! Greetings and names. Inglés sencillo con ayuda en español. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Inglés",
  curso: "1-primaria",
  titulo: "Hello! Greetings and names",
  minutos: 20,
  objetivos: ["Saludar y despedirse en inglés: hello, goodbye", "Decir tu nombre: My name is…", "Preguntar y responder How are you?"],
  claves: ["hello", "goodbye", "good morning", "What's your name?", "My name is…", "How are you?"],
  pregunta: {
    texto: "Si llega a clase una niña de Inglaterra, ¿cómo la saludarías? ¿Sabes alguna palabra en inglés?",
    respuesta: "Le dirías <mark>Hello!</mark>, que significa «¡Hola!». Y para saber su nombre: <b>What's your name?</b> (¿Cómo te llamas?).",
  },
  bloques: [
    {
      html: `<h3>Hello! Hi!</h3><p>En inglés, para decir «¡Hola!» decimos <mark>Hello!</mark> Se pronuncia más o menos «jelóu».</p><p>También podemos decir <mark>Hi!</mark>, que es más corto. Se dice «jái».</p><p>Los dos sirven para saludar a todos. Puedes saludar a un amigo o a tu familia. Saluda con la mano y una sonrisa: <b>Hello!</b></p>`,
      svg: charla("Un niño dice Hello y una niña contesta Hi", [["nino", "Hello!", A], ["nina", "Hi!", R]]),
      video: vid("gghDRJVxFxU", "Hello Song for Kids: greeting song", "The Singing Walrus - Canciones Inglesas para niños", 194194854, 631263),
    },
    {
      html: `<h3>Good morning! Good night!</h3><p>Según la hora del día, saludamos de forma distinta.</p><p>Por la mañana decimos <mark>Good morning!</mark> (¡Buenos días!). Por la tarde, <mark>Good afternoon!</mark> (¡Buenas tardes!).</p><p>Antes de ir a dormir decimos <mark>Good night!</mark> (¡Buenas noches!). En clase de inglés, cada día empezamos con <b>Good morning, teacher!</b></p>`,
      svg: vocab("Good morning con el sol, good afternoon y good night con la luna", [["sol", "Good morning", "buenos días", N], ["nube", "Good afternoon", "buenas tardes", A], ["luna", "Good night", "buenas noches", R]]),
    },
    {
      html: `<h3>What's your name?</h3><p>Para preguntar el nombre decimos <mark>What's your name?</mark> Significa «¿Cómo te llamas?».</p><p>Contestamos <mark>My name is…</mark> y decimos nuestro nombre: <b>My name is Lucía</b>.</p><p>También podemos decir <b>I'm Lucía</b> (Soy Lucía). Es más corto y se usa mucho. ¡Practica con tu nombre delante del espejo!</p>`,
      svg: charla("Una niña pregunta What's your name y un niño responde My name is Leo", [["nina", "What's your name?", R], ["nino", "My name is Leo.", A]]),
      video: vid("BM7Cg905Wo8", "What's Your Name? (Sesame Street & Super Simple Songs)", "Super Simple Songs - Kids Songs y Sesame Street", 91012835, 41833),
    },
    {
      html: `<h3>How are you?</h3><p>Para preguntar «¿Cómo estás?» decimos <mark>How are you?</mark></p><p>Si estamos bien, contestamos <b>I'm fine, thank you!</b> (Estoy bien, ¡gracias!). Si estamos muy contentos, <b>I'm happy!</b></p><p>Si estamos cansados, <b>I'm tired</b>. Si estamos tristes, <b>I'm sad</b>. Así los demás saben cómo nos sentimos. Y tú, <b>how are you</b> hoy?</p>`,
      svg: vocab("Tres caras: fine, happy y sad", [["nino", "I'm fine", "estoy bien", V], ["feliz", "I'm happy", "estoy contento", N], ["triste", "I'm sad", "estoy triste", A]], { titulo: "How are you?" }),
    },
    {
      html: `<h3>Goodbye! Bye-bye!</h3><p>Para despedirnos decimos <mark>Goodbye!</mark> (¡Adiós!). Se pronuncia «gudbái».</p><p>Con los amigos decimos <mark>Bye-bye!</mark> o solo <b>Bye!</b></p><p>¿Vas a ver pronto a alguien? Entonces decimos <b>See you!</b> (¡Hasta luego!). Es como decir «nos vemos». Al final de la clase de inglés decimos: <b>Goodbye, teacher! See you tomorrow!</b></p>`,
      svg: vocab("Despedidas: goodbye, bye-bye y see you", [["mano", "Goodbye!", "¡adiós!", R], ["nina", "Bye-bye!", "¡chao!", A], ["sol", "See you!", "¡hasta luego!", V]]),
    },
    {
      html: `<h3>Palabras amables</h3><p>En inglés también hay <mark>palabras mágicas</mark>.</p><p><b>Please</b> significa «por favor». <b>Thank you</b> significa «gracias». <b>Sorry</b> significa «perdón».</p><p>Cuando alguien nos da las gracias, contestamos <b>You're welcome!</b> (¡De nada!). Úsalas en clase de inglés y también en casa. Si pides algo, di siempre <b>please</b>. ¡A tu teacher le encantará!</p>`,
      svg: lista("Palabras amables en inglés: please, thank you y sorry", [["please = por favor", A], ["thank you = gracias", V], ["sorry = perdón", R]], { titulo: "Magic words" }),
    },
    {
      html: `<h3>Cómo suenan</h3><p>En inglés, las palabras <mark>no siempre se leen como se escriben</mark>.</p><p><b>Hello</b> se dice «jelóu». La h suena suave, como un soplido. <b>Name</b> se dice «néim». <b>Bye</b> se dice «bái».</p><p>Por eso es importante escuchar mucho: canciones, vídeos y a la maestra. ¡Imita los sonidos!</p>`,
      svg: lista("Cómo suenan: hello se dice jelóu, name se dice néim, bye se dice bái", [["Hello → «jelóu»", A], ["Name → «néim»", R], ["Bye → «bái»", V]], { titulo: "Say it! ¡Dilo!" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El inglés se habla en <mark>muchos países</mark> del mundo.</p><p>Con un simple <b>Hello!</b> puedes saludar a niños de Inglaterra, de Estados Unidos o de Australia.</p><p>Puedes ir de viaje a otro país. O puede llegar un compañero nuevo. ¡Ya sabrás presentarte! ¡Saludar es el primer paso para hacer amigos!</p>`,
      svg: vocab("Un avión, dos niños y un corazón: el inglés sirve para viajar y hacer amigos", [["avion", "travel", "viajar", A], ["nina", "friends", "amigos", R], ["corazon", "smile", "sonreír", V]], { titulo: "English is for…" }),
    },
    {
      html: `<h3>Jugamos a la pelota de los nombres</h3><p>Os ponéis en círculo. Quien tiene la pelota dice <mark>Hello! My name is…</mark> y su nombre.</p><p>Luego lanza la pelota a otro y pregunta: <b>What's your name?</b></p><p>El que la recibe contesta y la lanza otra vez. Cuando todos hayan hablado, decid juntos: <b>Goodbye!</b> ¡Es muy divertido! Podéis jugar también en casa con la familia.</p>`,
      svg: charla("Juego de la pelota: Hello, my name is Ana. What's your name? My name is Hugo", [["nina", "Hello! I'm Ana.", R], ["nino", "Hi! I'm Hugo.", A], ["nina", "Goodbye, Hugo!", R]]),
    },
  ],
  figura: {
    titulo: "Greetings: saludos en inglés",
    svg: mural("Cuatro saludos: hello es hola, good morning es buenos días, how are you es cómo estás, goodbye es adiós", [["nino", "Hello!", "¡Hola!", A], ["sol", "Good morning!", "¡Buenos días!", N], ["nina", "How are you?", "¿Cómo estás?", V], ["mano", "Goodbye!", "¡Adiós!", R]], "Saludar y despedirse en inglés"),
  },
  video: { ...vid("fxVMqaViVaA", "Hello Song", "Cocomelon - Nursery Rhymes", 389127253, 487937), busqueda: "hello song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Preséntate en inglés.",
      pasos: ["Saluda: Hello!", "Di tu nombre: My name is… (tu nombre).", "Termina con una sonrisa: Nice to meet you! (¡Encantado!)."],
      resultado: "«Hello! My name is Marta. Nice to meet you!»" },
    { enunciado: "Tu maestra te dice How are you? ¿Qué contestas?",
      pasos: ["Piensa cómo estás: bien, contento, cansado…", "Si estás bien: I'm fine.", "Añade las gracias: thank you."],
      resultado: "«I'm fine, thank you!»" },
    { enunciado: "Son las 9 de la mañana y entras en clase. ¿Qué dices?",
      pasos: ["Es por la mañana: morning.", "Saludamos con good: Good morning!", "Añade a quién saludas: teacher."],
      resultado: "«Good morning, teacher!»" },
  ],
  errores: [
    "Leer hello tal como se escribe, «e-l-l-o»: se dice «jelóu».",
    "Decir good night al llegar por la tarde: good night es para ir a dormir.",
    "Contestar a What's your name? solo con «yes»: hay que decir My name is…",
    "Olvidar thank you después de I'm fine.",
  ],
  ejercicios: [
    { q: "Di «¡Hola!» en inglés de dos formas.", sol: "Hello! y Hi!" },
    { q: "¿Cómo se dice «¡Adiós!»?", sol: "Goodbye! o Bye-bye!" },
    { q: "¿Qué decimos por la mañana?", sol: "Good morning!" },
    { q: "¿Qué decimos antes de ir a dormir?", sol: "Good night!" },
    { q: "Pregunta el nombre a alguien en inglés.", sol: "What's your name?" },
    { q: "Di tu nombre en inglés.", sol: "My name is… (su nombre)." },
    { q: "¿Qué significa How are you?", sol: "¿Cómo estás?" },
    { q: "Contesta a How are you? si estás bien.", sol: "I'm fine, thank you!" },
    { q: "¿Cómo se dice «gracias» en inglés?", sol: "Thank you." },
    { q: "Juega a la pelota de los nombres con tu familia.", sol: "Cada uno dice Hello! My name is… y lanza la pelota." },
  ],
  quiz: [
    { q: "«Hello» significa…", o: ["¡Hola!", "¡Adiós!", "Gracias"], a: 0, e: "Hello = ¡Hola!" },
    { q: "«Goodbye» significa…", o: ["¡Buenos días!", "¡Adiós!", "Por favor"], a: 1, e: "Goodbye = ¡Adiós!" },
    { q: "Por la mañana decimos…", o: ["Good night", "Good morning", "Bye"], a: 1, e: "Good morning = buenos días." },
    { q: "Para preguntar el nombre decimos…", o: ["How are you?", "What's your name?", "Thank you"], a: 1, e: "What's your name?" },
    { q: "«My name is Leo» significa…", o: ["Me llamo Leo", "Leo está bien", "Adiós, Leo"], a: 0, e: "Me llamo Leo." },
    { q: "«How are you?» significa…", o: ["¿Cómo te llamas?", "¿Cómo estás?", "¿Dónde estás?"], a: 1, e: "¿Cómo estás?" },
    { q: "Si estás bien, dices…", o: ["I'm fine", "I'm sad", "Good night"], a: 0, e: "I'm fine = estoy bien." },
    { q: "«Thank you» significa…", o: ["perdón", "gracias", "hola"], a: 1, e: "Thank you = gracias." },
    { q: "«Please» significa…", o: ["por favor", "adiós", "nombre"], a: 0, e: "Please = por favor." },
    { q: "Antes de dormir decimos…", o: ["Good morning", "Good night", "Hello"], a: 1, e: "Good night = buenas noches." },
  ],
  examen: [
    { q: "¿Cómo saludas en inglés?", o: ["Hello!", "Goodbye!", "Sorry!"], a: 0, e: "Hello!" },
    { q: "Contesta: What's your name?", o: ["I'm fine.", "My name is Ana.", "Good night."], a: 1, e: "My name is…" },
    { q: "«Sorry» significa…", o: ["gracias", "perdón", "hola"], a: 1, e: "Sorry = perdón." },
    { q: "Al salir de clase decimos…", o: ["Goodbye!", "Good morning!", "Hello!"], a: 0, e: "Goodbye!" },
  ],
  feynman: ["Cómo se saluda y se despide en inglés", "Cómo se pregunta y se dice el nombre", "Qué contestar a How are you?"],
  mapa: mapa("GREETINGS", "var(--pri)", [
    ["Hello! Hi!", "¡Hola!", A],
    ["Goodbye! Bye!", "¡Adiós!", R],
    ["What's your name?", "My name is…", V],
    ["How are you?", "I'm fine, thank you!", N],
  ], 230),
  tarjetas: [
    ["¡Hola! en inglés", "Hello! / Hi!"],
    ["¡Adiós! en inglés", "Goodbye! / Bye!"],
    ["¡Buenos días!", "Good morning!"],
    ["¡Buenas noches!", "Good night!"],
    ["¿Cómo te llamas?", "What's your name?"],
    ["Me llamo…", "My name is…"],
    ["¿Cómo estás?", "How are you?"],
    ["Estoy bien, gracias", "I'm fine, thank you!"],
  ],
  familias: [
    "Saludad en inglés por la mañana y por la noche: Good morning! Good night!",
    "Cantad juntos una canción de saludo en inglés (en el vídeo del tema hay una).",
    "Jugad a presentaros con muñecos: Hello! My name is…",
    "No os preocupéis por la pronunciación perfecta: lo importante es escuchar mucho y animarse a hablar.",
  ],
  profesores: PROF("Lengua extranjera: comprensión y producción oral de saludos, despedidas y presentaciones; fórmulas de cortesía básicas", ["Rutina diaria de saludo con canción (Hello song).", "Pelota de los nombres en círculo.", "Títeres que se presentan y preguntan How are you?"]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
