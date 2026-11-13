// Infantil 3 años · Comunicación y representación: Mi nombre. Para hacer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, charla, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Mi nombre",
  minutos: 10,
  objetivos: ["Decir mi nombre claro y en voz alta", "Reconocer mi nombre escrito", "Saber que el nombre se escribe con letras"],
  claves: ["nombre", "letras", "primera letra", "me llamo", "¿cómo te llamas?"],
  pregunta: {
    texto: "¿Cómo te llamas? ¿Sabes cómo se escribe tu nombre?",
    respuesta: "Tu nombre es solo tuyo y se escribe con <mark>letras</mark>. ¡Pronto lo reconocerás en todas partes!",
  },
  bloques: [
    {
      html: `<h3>Todos tenemos nombre</h3><p>Cada persona tiene un <mark>nombre</mark>.</p><p>Tú tienes nombre. Tu mamá y tu papá también. ¡Y tu perro o tu gato! El nombre sirve para llamarnos.</p><p>Pregunta a tu familia por qué te pusieron tu nombre.</p>`,
      svg: dibujos("Todos tenemos nombre: Lucía, Mario y Toby el perro", [["nina", "Lucía", R], ["nino", "Mario", A], ["perro", "Toby", V]]),
    },
    {
      html: `<h3>Me llamo…</h3><p>Para decir tu nombre dices: <mark>«Me llamo…»</mark>.</p><p>Por ejemplo: «Me llamo Mario». Y si quieres saber el nombre de otro niño, preguntas: «¿Cómo te llamas?».</p><p>Decimos el nombre claro y en voz alta, para que nos oigan.</p>`,
      svg: charla("Conversación: cómo te llamas; me llamo Lucía", [["nino", "¿Cómo te llamas?", A], ["nina", "Me llamo Lucía.", R]]),
    },
    {
      html: `<h3>Mi nombre tiene letras</h3><p>Los nombres se escriben con <mark>letras</mark>.</p><p>Mira: <b>LUCÍA</b> tiene cinco letras. <b>ANA</b> tiene tres. ¿Tu nombre es largo o corto?</p><p>Cuenta con el dedo las letras de tu nombre: ¿cuántas tiene?</p>`,
      svg: fichas("El nombre LUCÍA con sus letras", [["L", R], ["U", A], ["C", V], ["Í", N], ["A", R]], { titulo: "LUCÍA", nota: "cinco letras" }),
    },
    {
      html: `<h3>La primera letra</h3><p>La <mark>primera letra</mark> de tu nombre es muy importante.</p><p>Mario empieza por <b>M</b>. Lucía empieza por <b>L</b>. Busca tu letra en los carteles y en los cuentos.</p><p>¿Conoces a alguien que empiece por la misma letra que tú?</p>`,
      svg: escena("Mario empieza por M y Lucía por L", [["nino", 64, 70, 1.6], ["nina", 196, 70, 1.6], ["t", 64, 140, "M", A, 52], ["t", 196, 140, "L", R, 52]], { titulo: "¿Por qué letra empieza?" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con tu nombre escrito sabes <mark>qué es tuyo</mark>.</p><p>Lo ves en tu percha del cole, en tu mochila y en tus dibujos. ¡Así nada se pierde!</p><p>Busca tu nombre en la percha y en la bandeja.</p>`,
      svg: dibujos("Mi nombre está en la mochila, el dibujo y el vaso", [["mochila", "mochila", A], ["lapiz", "dibujo", R], ["agua", "vaso", V]], { titulo: "Pone mi nombre" }),
    },
    {
      html: `<h3>Jugamos con mi nombre</h3><p>Escribimos tu nombre en un papel grande. Tú lo <mark>decoras</mark> con pegatinas o huellas.</p><p>Luego damos una palma por cada trozo: «Ma-ri-o». ¡Tres palmas!</p><p>Ahora el nombre de mamá o de tu mejor amigo.</p>`,
      svg: fichas("Mario con palmas: Ma-ri-o, tres palmas", [["Ma", R], ["ri", A], ["o", V]], { titulo: "Palmas con mi nombre", nota: "¡tres palmas!", grande: true }),
    },
  ],
  figura: {
    titulo: "Mi nombre",
    svg: mural("Mi nombre: me llamo, tiene letras, primera letra, pone lo que es mío", [["nina", "me llamo", "Lucía", R], ["libro", "letras", "L U C Í A", A], ["estrella", "primera", "la L", V], ["mochila", "es mío", "pone mi nombre", N]], "Mi nombre"),
  },
  video: { ...vid("QhnoUhu6MZ4", "¿Cómo Te Llamas? (Noodle & Amigos) | Canciones Infantiles", "Super Simple Español - Canciones Infantiles Y Más", 4478420), busqueda: "canción de los nombres para niños infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Saluda a un niño nuevo.",
      pasos: ["Le miramos y decimos hola.", "Decimos: «Me llamo…».", "Preguntamos: «¿Cómo te llamas?»."],
      resultado: "«Hola, me llamo Ana. ¿Cómo te llamas?»" },
    { enunciado: "¿Por qué letra empieza «Pablo»?",
      pasos: ["Decimos Pablo despacio.", "Miramos la primera letra escrita."],
      resultado: "Empieza por P." },
  ],
  errores: [
    "Decir el nombre muy bajito: se dice claro y en voz alta.",
    "Pensar que todas las letras del nombre son iguales.",
    "Coger las cosas que tienen otro nombre: no son nuestras.",
  ],
  ejercicios: [
    { q: "Di tu nombre en voz alta.", sol: "Para la familia: aplaudid cuando lo diga claro." },
    { q: "Busca tu nombre entre otros papeles.", sol: "Escribid su nombre y dos más; que encuentre el suyo." },
    { q: "Decora tu nombre con pegatinas.", sol: "Escribidlo en mayúsculas grandes." },
    { q: "Di por qué letra empieza tu nombre.", sol: "Señalad la primera letra mientras la nombra." },
    { q: "Da palmas con tu nombre.", sol: "Una palma por trozo: Lu-cí-a." },
    { q: "Pregunta el nombre a un amigo.", sol: "«¿Cómo te llamas?»" },
  ],
  quiz: [
    { q: "Para decir mi nombre digo…", o: ["me llamo…", "adiós", "tengo hambre"], a: 0, e: "Me llamo…" },
    { q: "Los nombres se escriben con…", o: ["letras", "flores", "piedras"], a: 0, e: "Con letras." },
    { q: "«Mario» empieza por…", o: ["M", "L", "A"], a: 0, e: "M de Mario." },
    { q: "«Lucía» empieza por…", o: ["L", "S", "P"], a: 0, e: "L de Lucía." },
    { q: "Para saber el nombre de otro pregunto…", o: ["¿cómo te llamas?", "¿qué hora es?", "¿dónde vives?"], a: 0, e: "¿Cómo te llamas?" },
    { q: "Si algo pone mi nombre…", o: ["es mío", "es del perro", "no es de nadie"], a: 0, e: "Es mío." },
  ],
  examen: [
    { q: "¿Quién tiene nombre?", o: ["todas las personas", "nadie", "solo los mayores"], a: 0, e: "Todas las personas." },
    { q: "«Ana» tiene…", o: ["tres letras", "diez letras", "una letra"], a: 0, e: "A-N-A: tres." },
    { q: "Mi nombre se dice…", o: ["claro", "muy bajito", "gritando"], a: 0, e: "Claro y en voz alta." },
  ],
  feynman: ["Todos tenemos un nombre", "Se dice «me llamo…»", "Mi nombre tiene letras y una primera letra"],
  mapa: mapa("MI NOMBRE", "var(--inf)", [
    ["Me llamo…", "digo mi nombre", R],
    ["Letras", "se escribe así", A],
    ["Primera letra", "la M de Mario", V],
    ["Es mío", "pone mi nombre", N],
  ], 230),
  tarjetas: [
    ["¿Cómo digo mi nombre?", "Me llamo…"],
    ["¿Cómo pregunto el nombre?", "¿Cómo te llamas?"],
    ["Los nombres tienen…", "Letras"],
    ["Mario empieza por…", "M"],
    ["Lucía empieza por…", "L"],
    ["Si pone mi nombre…", "Es mío"],
  ],
  familias: [
    "Escribid su nombre en mayúsculas en su cuarto, su vaso o su mochila.",
    "Buscad la primera letra de su nombre en carteles y cuentos.",
    "Contadle por qué le pusisteis ese nombre.",
    "Practicad presentarse: «Hola, me llamo…».",
  ],
  profesores: PROF("Lenguaje oral y escrito: identidad y nombre propio, reconocimiento global del nombre escrito, letra inicial", ["Cartel de asistencia con los nombres.", "Buscar su nombre en perchas y bandejas.", "Canción de presentación en la asamblea."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
