// Lengua Castellana 1º de Primaria: hablar y escuchar. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Hablar y escuchar",
  minutos: 20,
  objetivos: ["Escuchar con atención a quien habla", "Respetar el turno de palabra", "Hablar claro, en orden y con amabilidad"],
  claves: ["escuchar", "turno de palabra", "voz", "por favor", "gracias", "preguntar"],
  pregunta: {
    texto: "¿Qué pasa en clase si todos hablan a la vez? ¿Se entiende algo?",
    respuesta: "¡No se entiende nada! Para conversar hay que <mark>escuchar</mark> y <mark>esperar el turno</mark>. Así todos podemos hablar y entendernos.",
  },
  bloques: [
    {
      html: `<h3>Hablamos para comunicarnos</h3><p>Hablamos para <mark>contar</mark> lo que pensamos, lo que sentimos y lo que necesitamos.</p><p>Cuando hablamos con alguien, tenemos una <b>conversación</b>. Uno habla y el otro escucha. Luego cambian.</p><p>Es como un juego de pelota: la palabra va de uno a otro. Si nadie la pasa, el juego se para.</p>`,
      svg: charla("Una conversación: un niño pregunta qué tal y una niña responde que muy bien", [["nino", "¡Hola! ¿Qué tal estás?", A], ["nina", "¡Muy bien! ¿Y tú?", R]]),
    },
    {
      html: `<h3>Escuchar con atención</h3><p>Escuchar no es solo oír. Es <mark>prestar atención</mark>.</p><p>Para escuchar bien, <b>miramos</b> a quien habla. Estamos <b>callados</b> y pensamos en lo que dice.</p><p>Si nos distraemos, nos perdemos cosas importantes. Cuando alguien te habla, deja lo que estás haciendo. ¡Así le demuestras que te importa!</p>`,
      svg: dibujos("Para escuchar: mirar con los ojos, oír con atención y estar callado", [["ojo", "miro", A], ["oido", "escucho", R], ["boca", "me callo", V]], { titulo: "Para escuchar bien…" }),
      video: vid("oAHDJwDJnw0", "Saber escuchar", "Aprendemos juntos KIDS", 847525, 408),
    },
    {
      html: `<h3>El turno de palabra</h3><p>En clase somos muchos. Para que todos podamos hablar, usamos el <mark>turno de palabra</mark>.</p><p>Si queremos decir algo, <b>levantamos la mano</b> y esperamos.</p><p>Cuando nos toca, hablamos. Mientras tanto, escuchamos a los demás. No interrumpimos. Así nadie se queda sin decir lo que piensa.</p>`,
      svg: lista("El turno de palabra: levanto la mano, espero y hablo cuando me toca", [["Levanto la mano", A], ["Espero mi turno", R], ["Hablo cuando me toca", V]], { titulo: "Pido la palabra", marca: "n" }),
    },
    {
      html: `<h3>Una voz clara</h3><p>Para que nos entiendan, hablamos <mark>claro y despacio</mark>.</p><p>La voz no debe ser muy baja, como una hormiguita. Tampoco muy alta, como un león.</p><p>En clase usamos una voz <b>tranquila</b>. En el patio podemos hablar más alto. Y en la biblioteca hablamos muy bajito. ¡Cada sitio tiene su voz!</p>`,
      svg: dibujos("Voz muy baja como una hormiga, voz clara como un niño y voz muy alta como un león", [["hormiga", "muy baja", R], ["nino", "¡clara!", V], ["leon", "muy alta", R]], { titulo: "¿Qué voz usamos en clase?" }),
    },
    {
      html: `<h3>Palabras amables</h3><p>Hay palabras que hacen que todos nos sintamos bien. Son las <mark>palabras amables</mark>.</p><p><b>Hola</b> y <b>adiós</b> al llegar y al irnos. <b>Por favor</b> al pedir algo. <b>Gracias</b> cuando nos ayudan. <b>Perdón</b> si nos equivocamos.</p><p>Son pequeñas, pero muy poderosas. ¡Úsalas todos los días!</p>`,
      svg: frase("Palabras amables: hola, por favor, gracias, perdón y adiós", [["hola", A], ["por favor", R], ["/"], ["gracias", V], ["perdón", N], ["/"], ["adiós", A]], { titulo: "Palabras amables", fs: 22 }),
    },
    {
      html: `<h3>Contar algo en orden</h3><p>Cuando contamos lo que nos ha pasado, lo hacemos <mark>en orden</mark>.</p><p>Usamos palabras que ayudan: <b>primero</b>, <b>después</b> y <b>al final</b>.</p><p>«Primero fui al parque. Después jugué con la pelota. Al final volví a casa». Así quien escucha entiende bien la historia. Sin orden, ¡todo se lía!</p>`,
      svg: lista("Contar en orden: primero fui al parque, después jugué, al final volví a casa", [["Primero: fui al parque", A], ["Después: jugué", R], ["Al final: volví a casa", V]], { titulo: "Para contar en orden", marca: "n" }),
    },
    {
      html: `<h3>Preguntar para saber más</h3><p>Si no entendemos algo, <mark>preguntamos</mark>. ¡Preguntar es de listos!</p><p>Las preguntas empiezan por palabras como <b>¿qué?</b>, <b>¿quién?</b>, <b>¿dónde?</b>, <b>¿cuándo?</b> y <b>¿por qué?</b></p><p>Al escribirlas, ponemos un signo al principio (¿) y otro al final (?). Al decirlas, la voz sube un poco al final.</p>`,
      svg: frase("Palabras para preguntar: qué, quién, dónde, cuándo y por qué", [["¿Qué?", A], ["¿Quién?", R], ["/"], ["¿Dónde?", V], ["¿Cuándo?", N], ["/"], ["¿Por qué?", A]], { titulo: "Palabras para preguntar", fs: 22 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Hablar y escuchar bien nos ayuda a <mark>hacer amigos</mark> y a <b>aprender</b>.</p><p>También sirve para resolver problemas sin enfadarnos. Si alguien tiene la pelota, se la pedimos con amabilidad.</p><p>Cuando hablamos con respeto y escuchamos, todos estamos mejor. La clase es un sitio más feliz para todos. ¡Y en casa también!</p>`,
      svg: charla("Una niña pide la pelota por favor; el niño se la da y ella da las gracias", [["nina", "¿Me dejas la pelota?", R], ["nino", "¡Claro! Toma.", A], ["nina", "¡Muchas gracias!", R]]),
    },
    {
      html: `<h3>Jugamos al teléfono</h3><p>Os sentáis en fila o en círculo. El primero dice una frase <mark>al oído</mark> del segundo, muy bajito.</p><p>Cada uno la pasa al siguiente. El último la dice en voz alta.</p><p>¿Ha llegado igual? Muchas veces cambia y nos reímos mucho. Este juego nos enseña lo importante que es escuchar con atención. ¿Jugamos otra vez?</p>`,
      svg: dibujos("Juego del teléfono: una frase pasa de oreja en oreja", [["nino", "1", A], ["nina", "2", R], ["abuelo", "3", V], ["mama", "4", N]], { titulo: "La frase pasa de oreja en oreja", nota: "¿Llega igual al final?" }),
    },
  ],
  figura: {
    titulo: "Para hablar y escuchar bien",
    svg: mural("Cuatro normas: escuchar con atención, levantar la mano, hablar con voz clara y usar palabras amables", [["oido", "escucho", "miro a quien habla", A], ["mano", "levanto la mano", "espero mi turno", R], ["bocadillo", "hablo claro", "ni muy alto ni muy bajo", V], ["corazon", "soy amable", "por favor y gracias", N]], "Normas para conversar"),
  },
  video: { ...vid("5IftqtOPrPs", "Normas de cortesía para niños: hola, adiós, gracias, por favor, lo siento", "Smile and Learn - Español", 343929), busqueda: "normas para hablar y escuchar niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Quieres decir algo en clase y la maestra está hablando. ¿Qué haces?",
      pasos: ["Espero a que termine de hablar.", "Levanto la mano en silencio.", "Cuando me da la palabra, hablo con voz clara."],
      resultado: "levanto la mano y espero mi turno." },
    { enunciado: "Cuenta en orden cómo te lavas los dientes.",
      pasos: ["Primero pongo pasta en el cepillo.", "Después cepillo todos los dientes.", "Al final me enjuago la boca."],
      resultado: "primero, después y al final." },
    { enunciado: "Un compañero te presta un lápiz. ¿Qué le dices?",
      pasos: ["Antes, para pedirlo, digo «por favor».", "Cuando me lo da, digo «gracias».", "Al devolverlo, también puedo decir «gracias»."],
      resultado: "«¿Me prestas un lápiz, por favor?» y «¡Gracias!»." },
  ],
  errores: [
    "Interrumpir a quien habla: espera a que termine.",
    "Hablar todos a la vez: levanta la mano y espera tu turno.",
    "Gritar en clase: usa una voz clara y tranquila.",
    "Contar las cosas desordenadas: usa primero, después y al final.",
  ],
  ejercicios: [
    { q: "Di tres cosas que hacemos para escuchar bien.", sol: "Mirar a quien habla, estar callados y prestar atención." },
    { q: "¿Qué hacemos para pedir la palabra en clase?", sol: "Levantar la mano y esperar." },
    { q: "Di dos palabras amables.", sol: "Por ejemplo: por favor y gracias." },
    { q: "¿Qué dices si sin querer pisas a alguien?", sol: "«Perdón» o «lo siento»." },
    { q: "Cuenta en orden lo que hiciste esta mañana.", sol: "Respuesta libre con primero, después y al final." },
    { q: "Haz una pregunta que empiece por «¿Dónde…?».", sol: "Por ejemplo: «¿Dónde está mi mochila?»." },
    { q: "¿Qué voz usamos en la biblioteca?", sol: "Muy bajita." },
    { q: "Escucha a un adulto decir tres palabras y repítelas en orden.", sol: "Debe repetirlas en el mismo orden." },
    { q: "Saluda a alguien de tu familia y pregúntale cómo está.", sol: "Por ejemplo: «¡Hola! ¿Cómo estás?»." },
    { q: "Juega al teléfono con tu familia.", sol: "Comprobad si la frase llega igual al final." },
  ],
  quiz: [
    { q: "Para escuchar bien…", o: ["miro a quien habla", "juego con el lápiz", "hablo a la vez"], a: 0, e: "Miramos y prestamos atención." },
    { q: "Para pedir la palabra…", o: ["grito", "levanto la mano", "me levanto"], a: 1, e: "Levantamos la mano." },
    { q: "Cuando alguien me ayuda, digo…", o: ["gracias", "adiós", "¿qué?"], a: 0, e: "Gracias." },
    { q: "Para pedir algo, digo…", o: ["por favor", "perdón", "hola"], a: 0, e: "Por favor." },
    { q: "En clase hablamos con voz…", o: ["muy alta", "clara y tranquila", "de león"], a: 1, e: "Clara y tranquila." },
    { q: "Para contar en orden, empiezo con…", o: ["al final", "primero", "después"], a: 1, e: "Primero." },
    { q: "Una pregunta lleva…", o: ["¿ y ?", "solo punto", "nada"], a: 0, e: "Signo al principio y al final." },
    { q: "Si no entiendo algo…", o: ["me callo siempre", "pregunto", "me enfado"], a: 1, e: "¡Preguntar es de listos!" },
    { q: "Interrumpir a quien habla está…", o: ["bien", "mal", "muy bien"], a: 1, e: "Hay que esperar el turno." },
    { q: "Si me equivoco con alguien, digo…", o: ["perdón", "toma", "ya está"], a: 0, e: "Perdón o lo siento." },
  ],
  examen: [
    { q: "¿Qué es el turno de palabra?", o: ["Hablar cuando me toca", "Hablar todos a la vez", "No hablar nunca"], a: 0, e: "Cada uno habla cuando le toca." },
    { q: "¿Qué palabra usamos al despedirnos?", o: ["adiós", "gracias", "por favor"], a: 0, e: "Adiós." },
    { q: "¿Qué palabra sirve para preguntar?", o: ["¿dónde?", "después", "gracias"], a: 0, e: "¿Dónde?" },
    { q: "¿Qué voz usamos en la biblioteca?", o: ["muy alta", "muy bajita", "de gigante"], a: 1, e: "Muy bajita." },
  ],
  feynman: ["Qué hacemos para escuchar bien", "Para qué sirve el turno de palabra", "Cómo contamos algo en orden"],
  mapa: mapa("HABLAR Y ESCUCHAR", "var(--pri)", [
    ["Escucho", "miro y presto atención", A],
    ["Turno", "levanto la mano", R],
    ["Hablo claro", "voz tranquila y en orden", V],
    ["Soy amable", "por favor, gracias, perdón", N],
  ], 230),
  tarjetas: [
    ["¿Qué hago para escuchar bien?", "Miro a quien habla y presto atención"],
    ["¿Cómo pido la palabra?", "Levanto la mano"],
    ["Palabra para pedir algo", "Por favor"],
    ["Palabra cuando me ayudan", "Gracias"],
    ["Palabra si me equivoco", "Perdón"],
    ["Para contar en orden…", "Primero, después y al final"],
    ["Palabras para preguntar", "¿Qué? ¿Quién? ¿Dónde? ¿Cuándo? ¿Por qué?"],
    ["¿Qué voz uso en clase?", "Clara y tranquila"],
  ],
  familias: [
    "En la cena, haced turnos para contar qué tal ha ido el día, sin interrumpir.",
    "Pedidle que os cuente algo usando primero, después y al final.",
    "Dad ejemplo con las palabras amables: por favor, gracias y perdón.",
    "Jugad al teléfono o a repetir listas de palabras para entrenar la escucha.",
  ],
  profesores: PROF("Comunicación oral: escucha activa, turnos de palabra, normas de cortesía, expresión clara y ordenada y formulación de preguntas", ["Objeto de la palabra (pelota o micrófono) para respetar turnos.", "Asamblea diaria con «primero, después y al final».", "Juego del teléfono y de órdenes encadenadas."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
