// Infantil 3 años · Primeros pasos en inglés: My family. Frases en inglés con una ayuda en español para el adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { vocab, charla, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Primeros pasos en inglés",
  curso: "3-anos",
  titulo: "My family",
  minutos: 10,
  objetivos: ["Say Mummy, Daddy, baby, Grandma and Grandpa", "Point to each person in a family picture", "Say: I love my family"],
  claves: ["family", "Mummy", "Daddy", "baby", "Grandma", "Grandpa", "brother", "sister"],
  pregunta: {
    texto: "¿Quién vive contigo en casa? ¿Sabes decir «mamá» en inglés?",
    respuesta: "Mamá es <mark>Mummy</mark> y papá es <mark>Daddy</mark>. Todos juntos son tu <b>family</b>.",
  },
  bloques: [
    {
      html: `<h3>Mummy and Daddy</h3><p>This is <mark>Mummy</mark>. This is <mark>Daddy</mark>.</p><p>Hello, Mummy! Hello, Daddy! (Mamá se dice <b>Mummy</b> y papá <b>Daddy</b>.)</p><p>I love you, Mummy! I love you, Daddy! (Les decimos que los queremos con un abrazo.)</p>`,
      svg: vocab("Mummy mamá y Daddy papá", [["mama", "Mummy", "mamá", R], ["papa", "Daddy", "papá", A]]),
    },
    {
      html: `<h3>The baby</h3><p>This is the <mark>baby</mark>. The baby is small.</p><p>Shhh! The baby is sleeping. (El bebé es <b>baby</b>, «béibi». ¡Hablamos bajito!)</p><p>Sleep, baby, sleep! (Cantamos bajito para que el bebé duerma.)</p>`,
      svg: escena("El bebé duerme en la cuna", [["cuna", 130, 96, 2.6], ["bebe", 130, 80, 1.3], ["t", 130, 160, "baby", V, 28], ["t", 210, 50, "Shhh!", N, 22]]),
    },
    {
      html: `<h3>Grandma and Grandpa</h3><p>This is <mark>Grandma</mark>. This is <mark>Grandpa</mark>.</p><p>I love my Grandma! (La abuela es <b>Grandma</b> y el abuelo <b>Grandpa</b>.)</p><p>Hello, Grandma! Hello, Grandpa! (Los saludamos con un beso cuando vienen a casa.)</p>`,
      svg: vocab("Grandma abuela y Grandpa abuelo", [["abuela", "Grandma", "abuela", N], ["abuelo", "Grandpa", "abuelo", V]]),
    },
    {
      html: `<h3>Brother and sister</h3><p>A boy is a <mark>brother</mark>. A girl is a <mark>sister</mark>.</p><p>This is my brother. This is my sister. (Hermano es <b>brother</b>; hermana, <b>sister</b>.)</p><p>We play together! (Los hermanos juegan juntos y comparten.)</p>`,
      svg: vocab("Brother hermano y sister hermana", [["nino", "brother", "hermano", A], ["nina", "sister", "hermana", R]]),
    },
    {
      html: `<h3>What is it for?</h3><p>Now you can <mark>talk about your family</mark>.</p><p>This is my Mummy. I love my family! (Así presentamos a nuestra familia en inglés.)</p><p>This is my Daddy! (Podemos presentar a cada persona de la familia.)</p>`,
      svg: charla("Un niño presenta a su familia: This is my Mummy. I love my family", [["nino", "This is my Mummy!", A], ["mama", "Hello!", R], ["nino", "I love my family!", A]]),
    },
    {
      html: `<h3>Let's play!</h3><p>Hold up one hand. Each finger is a <mark>family</mark> person.</p><p>Daddy finger, Mummy finger, baby finger! (Jugamos a la familia de los dedos, como en la canción.)</p>`,
      svg: escena("La familia de los dedos: Daddy, Mummy y baby finger", [["mano", 70, 96, 3], ["papa", 168, 56, 0.9], ["t", 214, 62, "Daddy", A, 16], ["mama", 168, 98, 0.9], ["t", 214, 104, "Mummy", R, 16], ["bebe", 168, 140, 0.9], ["t", 214, 146, "baby", V, 16]], { titulo: "Finger family" }),
    },
  ],
  figura: {
    titulo: "My family",
    svg: mural("My family: Mummy, Daddy, baby, Grandma, Grandpa, brother, sister", [["mama", "Mummy", "mamá", R], ["papa", "Daddy", "papá", A], ["bebe", "baby", "bebé", V], ["abuela", "Grandma", "abuela", N], ["abuelo", "Grandpa", "abuelo", V], ["nino", "brother", "hermano", A], ["nina", "sister", "hermana", R], ["corazon", "family", "familia", N]], "My family"),
  },
  video: { ...vid("G6k7dChBaJ8", "Finger Family Song · Children Song with Lyrics", "Kids Academy", 31993972), busqueda: "family song for kids" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Look at a family photo. Who is it?",
      pasos: ["Point to a person.", "Is it Mummy or Daddy?", "Say it in English."],
      resultado: "«This is Daddy!»" },
    { enunciado: "Say something nice to your family.",
      pasos: ["Give a hug.", "Say: I love you!"],
      resultado: "«I love my family!»" },
  ],
  errores: [
    "Decir «Mummy» al abuelo: el abuelo es Grandpa.",
    "Pensar que todas las familias son iguales: cada familia es distinta y todas valen.",
    "Leer baby como se escribe: se dice «béibi».",
  ],
  ejercicios: [
    { q: "Point to Mummy in a photo.", sol: "Para la familia: usad fotos reales de casa." },
    { q: "Say Hello, Grandma! on the phone.", sol: "En la próxima llamada a los abuelos." },
    { q: "Draw your family.", sol: "Nombrad en inglés a cada persona que dibuje." },
    { q: "Play finger family.", sol: "Cada dedo es una persona de la familia." },
    { q: "Say: This is my brother / sister.", sol: "Si no tiene hermanos, con un primo o un amigo." },
    { q: "Say I love my family! with a hug.", sol: "Un abrazo grande y la frase en inglés." },
  ],
  quiz: [
    { q: "«Mummy» es…", o: ["mamá", "papá", "bebé"], a: 0, e: "Mummy = mamá." },
    { q: "«Daddy» es…", o: ["abuelo", "papá", "hermano"], a: 1, e: "Daddy = papá." },
    { q: "«Baby» es…", o: ["bebé", "abuela", "perro"], a: 0, e: "Baby = bebé." },
    { q: "La abuela es…", o: ["Grandma", "Grandpa", "sister"], a: 0, e: "Grandma = abuela." },
    { q: "«Brother» es…", o: ["hermano", "hermana", "mamá"], a: 0, e: "Brother = hermano." },
    { q: "«Family» es…", o: ["familia", "fiesta", "fruta"], a: 0, e: "Family = familia." },
  ],
  examen: [
    { q: "El abuelo es…", o: ["Grandpa", "Grandma", "baby"], a: 0, e: "Grandpa = abuelo." },
    { q: "«Sister» es…", o: ["hermana", "hermano", "papá"], a: 0, e: "Sister = hermana." },
    { q: "«I love my family» significa…", o: ["quiero a mi familia", "tengo hambre", "adiós"], a: 0, e: "Quiero a mi familia." },
  ],
  feynman: ["Mummy and Daddy", "Grandma and Grandpa", "I love my family"],
  mapa: mapa("MY FAMILY", "var(--pri)", [
    ["Mummy · Daddy", "mamá · papá", R],
    ["Baby", "bebé", V],
    ["Grandma · Grandpa", "abuela · abuelo", N],
    ["Brother · Sister", "hermano · hermana", A],
  ], 240),
  tarjetas: [
    ["mamá", "Mummy"],
    ["papá", "Daddy"],
    ["bebé", "baby"],
    ["abuela / abuelo", "Grandma / Grandpa"],
    ["hermano / hermana", "brother / sister"],
    ["Quiero a mi familia", "I love my family!"],
  ],
  familias: [
    "Mirad fotos de familia y nombrad a cada persona en inglés.",
    "Saludad a los abuelos en inglés en la próxima visita o llamada.",
    "Cantad la Finger Family con la mano.",
    "Recordad que todas las familias son distintas: la vuestra es perfecta tal como es.",
  ],
  profesores: PROF("Primer acercamiento a la lengua extranjera: léxico de la familia, presentarse y presentar (This is my…), respeto a la diversidad familiar", ["Mural con fotos de las familias de la clase.", "Finger family con marionetas de dedo.", "This is my… en la asamblea."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
