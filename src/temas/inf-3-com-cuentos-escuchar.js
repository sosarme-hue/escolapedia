// Infantil 3 años · Comunicación y representación: Cuentos para escuchar. Para leer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, lista, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Cuentos para escuchar",
  minutos: 10,
  objetivos: ["Escuchar un cuento corto con atención", "Mirar los dibujos del libro", "Decir quién sale en el cuento"],
  claves: ["cuento", "libro", "dibujos", "érase una vez", "colorín colorado"],
  pregunta: {
    texto: "¿Cuál es tu cuento favorito? ¿Quién sale en él?",
    respuesta: "Los cuentos tienen <mark>personajes</mark>: un lobo, una niña, tres cerditos… ¡y siempre pasa algo!",
  },
  bloques: [
    {
      html: `<h3>Un libro de cuentos</h3><p>Los cuentos viven en los <mark>libros</mark>.</p><p>Un libro tiene tapas y hojas. En las hojas hay dibujos y letras. Pasamos las hojas despacio, una a una.</p><p>Coge tu libro favorito y enséñanos la tapa.</p>`,
      svg: escena("Un libro de cuentos abierto con un dibujo de un sol", [["libro", 130, 92, 3.4], ["sol", 104, 86, 0.8], ["t", 130, 160, "un libro", A, 22]]),
    },
    {
      html: `<h3>Érase una vez…</h3><p>Muchos cuentos empiezan así: <mark>«Érase una vez…»</mark>.</p><p>Cuando lo oímos, nos sentamos cómodos. Estamos quietos y escuchamos. ¡Va a empezar la historia!</p><p>El adulto lee despacio y enseña los dibujos de cada hoja.</p>`,
      svg: escena("Una mamá lee un cuento a un niño", [["mama", 70, 80, 2], ["libro", 130, 112, 1.6], ["nino", 192, 92, 1.8], ["t", 130, 160, "Érase una vez…", R, 22]]),
    },
    {
      html: `<h3>Quién sale en el cuento</h3><p>En los cuentos salen <mark>personajes</mark>.</p><p>Hay niños y niñas. Hay animales que hablan: un lobo, un cerdito, un pato. ¿Quién es el bueno? ¿Quién hace travesuras?</p><p>Señala con el dedo a tu personaje favorito.</p>`,
      svg: dibujos("Personajes de cuento: lobo, cerdito, niña y pato", [["lobo", "lobo", R], ["cerdo", "cerdito", A], ["nina", "niña", V], ["pato", "pato", N]], { titulo: "Personajes" }),
    },
    {
      html: `<h3>Colorín colorado</h3><p>Los cuentos también <mark>se acaban</mark>.</p><p>Muchos terminan así: «Y colorín colorado, este cuento se ha acabado». ¡Entonces aplaudimos y pensamos qué nos ha gustado más!</p><p>Cerramos el libro con cuidado y lo guardamos en su sitio.</p>`,
      svg: escena("Fin del cuento: colorín colorado", [["t", 130, 56, "Colorín colorado,", R, 24], ["t", 130, 92, "este cuento", A, 24], ["t", 130, 128, "se ha acabado.", V, 24], ["estrella", 30, 150, 0.8], ["estrella", 232, 140, 0.8]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los cuentos nos <mark>enseñan palabras</mark> nuevas.</p><p>Nos hacen reír y pensar. Nos ayudan a dormir tranquilos. ¡Y son un rato muy bonito con la familia!</p><p>¿Cuál es el cuento que más te gusta escuchar?</p>`,
      svg: dibujos("Los cuentos sirven para aprender palabras, reír y dormir", [["libro", "palabras", A], ["feliz", "reír", R], ["cama", "dormir", N]]),
    },
    {
      html: `<h3>Jugamos a contar</h3><p>Miramos un dibujo del cuento. El adulto pregunta: <mark>«¿Qué pasa aquí?»</mark>.</p><p>Tú lo cuentas con tus palabras. «El lobo sopla». «La casa se cae». ¡Ya eres un cuentacuentos!</p>`,
      svg: lista("Preguntas para contar: quién sale, qué pasa, cómo acaba", [["¿Quién sale?", R], ["¿Qué pasa?", A], ["¿Cómo acaba?", V]], { titulo: "Contamos el cuento", marca: "?" }),
    },
  ],
  figura: {
    titulo: "Cuentos para escuchar",
    svg: mural("El cuento: libro, empieza con érase una vez, personajes, acaba con colorín colorado", [["libro", "libro", "pasamos hojas", A], ["estrella", "empieza", "érase una vez", R], ["lobo", "personajes", "quién sale", V], ["corazon", "se acaba", "colorín colorado", N]], "Cuentos para escuchar"),
  },
  video: { ...vid("9SiNFya55Fo", "El erizo y el globo · Audio cuento para niños", "Apploide Educa", 48405808), busqueda: "cuentos infantiles cortos para niños de 3 años" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Leemos «Los tres cerditos». ¿Quién sale?",
      pasos: ["Miramos los dibujos.", "Señalamos los cerditos.", "Buscamos al lobo."],
      resultado: "Salen tres cerditos y un lobo." },
    { enunciado: "¿Cómo empieza el cuento?",
      pasos: ["Escuchamos la primera frase.", "La repetimos juntos."],
      resultado: "«Érase una vez…»" },
  ],
  errores: [
    "Pasar muchas hojas a la vez: se pasan de una en una.",
    "Hablar mientras se lee: primero escuchamos.",
    "Tratar mal los libros: se cuidan para leerlos otra vez.",
  ],
  ejercicios: [
    { q: "Elige un cuento y pide que te lo lean.", sol: "Para la familia: dejad que elija; repetir el mismo cuento también ayuda." },
    { q: "Señala a un personaje del dibujo.", sol: "Preguntad: ¿quién es?, ¿qué hace?" },
    { q: "Pasa las hojas del libro una a una.", sol: "Mostradle cómo coger la esquina con cuidado." },
    { q: "Di cómo empieza el cuento.", sol: "Érase una vez…" },
    { q: "Dibuja a tu personaje favorito.", sol: "Vale cualquier garabato: pedidle que os lo explique." },
    { q: "Termina el cuento con «colorín colorado».", sol: "Decidlo juntos al cerrar el libro." },
  ],
  quiz: [
    { q: "Los cuentos están en…", o: ["los libros", "la nevera", "los zapatos"], a: 0, e: "Los cuentos están en los libros." },
    { q: "Muchos cuentos empiezan…", o: ["érase una vez", "buenas noches", "adiós"], a: 0, e: "Érase una vez…" },
    { q: "Al escuchar un cuento estoy…", o: ["gritando", "quieto y atento", "corriendo"], a: 1, e: "Escuchamos quietos." },
    { q: "En los cuentos salen…", o: ["personajes", "coches de verdad", "nada"], a: 0, e: "Salen personajes." },
    { q: "Las hojas se pasan…", o: ["de una en una", "todas a la vez", "rompiéndolas"], a: 0, e: "De una en una, con cuidado." },
    { q: "Colorín colorado…", o: ["el cuento empieza", "el cuento se ha acabado", "vamos al parque"], a: 1, e: "Así se acaba el cuento." },
  ],
  examen: [
    { q: "¿Quién sale en «Los tres cerditos»?", o: ["un lobo", "un león", "un pez"], a: 0, e: "Sale el lobo." },
    { q: "Los libros los…", o: ["cuidamos", "pisamos", "mojamos"], a: 0, e: "Cuidamos los libros." },
    { q: "Los cuentos nos ayudan a…", o: ["aprender palabras", "no dormir", "pelear"], a: 0, e: "Aprendemos palabras nuevas." },
  ],
  feynman: ["Los cuentos están en los libros", "Empiezan con érase una vez", "Acaban con colorín colorado"],
  mapa: mapa("CUENTOS", "var(--inf)", [
    ["Libro", "tapas y hojas", A],
    ["Empieza", "érase una vez", R],
    ["Personajes", "quién sale", V],
    ["Se acaba", "colorín colorado", N],
  ], 230),
  tarjetas: [
    ["¿Dónde están los cuentos?", "En los libros"],
    ["¿Cómo empiezan?", "Érase una vez…"],
    ["¿Cómo acaban?", "Colorín colorado"],
    ["¿Quién sale?", "Los personajes"],
    ["Las hojas se pasan…", "De una en una"],
    ["Al escuchar estoy…", "Quieto y atento"],
  ],
  familias: [
    "Leed un cuento corto cada noche, aunque sea siempre el mismo.",
    "Cambiad la voz para cada personaje: les encanta.",
    "Parad a mitad y preguntad: ¿qué pasará ahora?",
    "Visitad la biblioteca del barrio y dejad que elija un libro.",
  ],
  profesores: PROF("Literatura infantil: escucha de cuentos, fórmulas de inicio y final, identificación de personajes y cuidado de los libros", ["Rincón de la biblioteca de aula.", "Cuentacuentos con títeres.", "Secuenciar 3 imágenes de un cuento conocido."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
