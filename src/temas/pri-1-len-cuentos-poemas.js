// Lengua Castellana 1º de Primaria: cuentos, poemas y adivinanzas. Dibujos y textos propios.
const { mapa } = require("./_util");
const { dibujos, frase, charla, lista, mural, silabas: s, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Cuentos, poemas y adivinanzas",
  minutos: 20,
  objetivos: ["Reconocer un cuento, un poema y una adivinanza", "Conocer las partes de un cuento y sus personajes", "Encontrar palabras que riman y resolver adivinanzas"],
  claves: ["cuento", "personaje", "poema", "verso", "rima", "adivinanza"],
  pregunta: {
    texto: "¿Cuál es tu cuento favorito? ¿Quién sale en él? ¿Cómo empieza?",
    respuesta: "Muchos cuentos empiezan con «<mark>Érase una vez</mark>». En ellos salen <b>personajes</b> y pasa una <b>aventura</b>. Hoy conocemos los cuentos, los poemas y las adivinanzas.",
  },
  bloques: [
    {
      html: `<h3>Textos para disfrutar</h3><p>Hay textos que leemos para <mark>disfrutar e imaginar</mark>. Son la literatura.</p><p>Hoy conocemos tres: los <b>cuentos</b>, los <b>poemas</b> y las <b>adivinanzas</b>.</p><p>Los cuentos cuentan historias. Los poemas juegan con el sonido de las palabras. Las adivinanzas son preguntas con trampa. ¡Los tres son muy divertidos! Vamos a conocerlos uno a uno.</p>`,
      svg: dibujos("Un libro de cuentos, un corazón para los poemas y una interrogación para las adivinanzas", [["libro", "cuento", A], ["corazon", "poema", R], ["interrogacion", "adivinanza", V]], { titulo: "Tres textos para disfrutar" }),
    },
    {
      html: `<h3>Las partes del cuento</h3><p>Un cuento tiene <mark>tres partes</mark>.</p><p>El <b>principio</b> presenta a los personajes: «Érase una vez tres cerditos».</p><p>En el <b>nudo</b> aparece un problema: llega el lobo y sopla. En el <b>final</b> se resuelve: la casa de ladrillo aguanta y los cerditos están a salvo. ¡Y colorín colorado!</p>`,
      svg: lista("Las tres partes del cuento: principio, nudo y final", [["Principio: quién es", A], ["Nudo: el problema", R], ["Final: se resuelve", V]], { titulo: "Un cuento tiene tres partes", marca: "n" }),
      video: vid("ViRUaVU9Fzc", "Los tres cerditos", "toycantando", 282537705),
    },
    {
      html: `<h3>Los personajes</h3><p>Los <mark>personajes</mark> son quienes viven la historia.</p><p>Pueden ser personas, animales o incluso objetos que hablan. En «Los tres cerditos» son los cerditos y el lobo.</p><p>Hay personajes buenos y personajes que crean problemas. Cuando leas un cuento, pregúntate: ¿quién sale?, ¿cómo es?, ¿qué quiere?</p>`,
      svg: dibujos("Los personajes de Los tres cerditos: tres cerditos y un lobo", [["cerdo", "cerdito", R], ["cerdo", "cerdito", R], ["cerdo", "cerdito", R], ["lobo", "lobo", K]], { titulo: "Los tres cerditos" }),
    },
    {
      html: `<h3>Los poemas</h3><p>Un <mark>poema</mark> es un texto escrito en líneas cortas. Cada línea se llama <b>verso</b>.</p><p>Escucha este poema: «Tengo un gato / que duerme en mi plato. / Tengo un pez / que nada al revés».</p><p>Los poemas se leen despacio y con mucho ritmo. ¡Algunos parecen canciones! Puedes aprenderte uno de memoria.</p>`,
      svg: frase("Un poema de cuatro versos: Tengo un gato que duerme en mi plato. Tengo un pez que nada al revés.", [[`Tengo un ga<tspan fill="var(--red)">to</tspan>`, A], ["/"], [`que duerme en mi pla<tspan fill="var(--red)">to</tspan>.`, A], ["/"], [`Tengo un p<tspan fill="var(--leaf)">ez</tspan>`, A], ["/"], [`que nada al rev<tspan fill="var(--leaf)">és</tspan>.`, A]], { fs: 18 }),
    },
    {
      html: `<h3>La rima</h3><p>Dos palabras <mark>riman</mark> cuando terminan con el mismo sonido.</p><p><i>Gato</i> rima con <i>pato</i> y con <i>plato</i>. <i>Luna</i> rima con <i>cuna</i>. <i>Sol</i> rima con <i>col</i>.</p><p>La rima hace que los poemas suenen bonitos y se recuerden mejor. Juega a buscar rimas: ¿qué rima con <i>mesa</i>? ¡Fresa!</p>`,
      svg: dibujos("Gato rima con pato; luna rima con cuna", [["gato", s("ga|to", R, 1), K], ["pato", s("pa|to", R, 1), K], ["luna", s("lu|na", V, 1), K], ["cuna", s("cu|na", V, 1), K]], { titulo: "Palabras que riman", nota: "gato y pato · luna y cuna" }),
      video: vid("FFm4iyFZ6v0", "Poemas de Gloria Fuertes para niños: poesía animada", "guiainfantil", 1002166),
    },
    {
      html: `<h3>Las adivinanzas</h3><p>Una <mark>adivinanza</mark> describe algo sin decir su nombre. Hay que adivinarlo.</p><p>Escucha: «Soy redonda y brillante. Salgo de noche y vivo en el cielo». ¿Qué es?</p><p>¡La <b>luna</b>! Las adivinanzas dan <b>pistas</b>: cómo es, dónde está y qué hace. Hay que escuchar bien cada pista hasta el final.</p>`,
      svg: dibujos("Adivinanza: redonda, sale de noche y vive en el cielo; es la luna", [["interrogacion", "¿Qué es?", A], ["luna", "¡la luna!", N]], { titulo: "Redonda, de noche, en el cielo…", nota: "Las pistas ayudan a adivinar" }),
    },
    {
      html: `<h3>Más adivinanzas</h3><p>Prueba con estas:</p><p>«Tengo cuatro patas, muevo la cola y digo guau». <mark>¡El perro!</mark></p><p>«Soy amarilla por fuera, blanca por dentro, y los monos me comen contentos». <mark>¡El plátano!</mark></p><p>Ahora inventa tú una. Piensa en un animal y da tres pistas sin decir su nombre.</p>`,
      svg: dibujos("Soluciones de dos adivinanzas: el perro y el plátano", [["perro", "¡guau!", A], ["platano", "¡amarillo!", N]], { titulo: "¿Adivinas?", nota: "el perro · el plátano" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Leer cuentos, poemas y adivinanzas nos ayuda a <mark>imaginar</mark> y a <b>pensar</b>.</p><p>Aprendemos palabras nuevas y entrenamos la memoria.</p><p>También nos hacen reír y nos emocionan. Nos enseñan a ser valientes y a ayudar a los demás. Y son perfectos para compartir con la familia antes de dormir.</p>`,
      svg: lista("Leer literatura sirve para imaginar, aprender palabras y compartir", [["Imagino y pienso", A], ["Aprendo palabras", R], ["Comparto y me río", V]], { titulo: "Leer me ayuda a…" }),
    },
    {
      html: `<h3>Jugamos a inventar un cuento</h3><p>Elige <mark>tres dibujos</mark>: un oso, una casa y una estrella.</p><p>Ahora inventa un cuento con ellos. Empieza con «Érase una vez un oso…».</p><p>Piensa en un problema y en un final. ¿Qué le pasa al oso? ¿Cómo lo resuelve? Cuéntalo en voz alta a tu familia. ¡Tú eres el autor!</p>`,
      svg: dibujos("Un oso, una casa y una estrella para inventar un cuento", [["oso", "oso", A], ["casa", "casa", R], ["estrella", "estrella", V]], { titulo: "Érase una vez un oso…", nota: "¿Qué pasa? ¿Cómo acaba?" }),
    },
  ],
  figura: {
    titulo: "Cuentos, poemas y adivinanzas",
    svg: mural("Tres textos: el cuento cuenta una historia, el poema tiene versos que riman y la adivinanza da pistas", [["libro", "cuento", "principio, nudo y final", A], ["corazon", "poema", "versos y rima", R], ["interrogacion", "adivinanza", "pistas para adivinar", V]], "Tres textos para disfrutar"),
  },
  video: { ...vid("yAjyY9ff_kc", "Adivinanzas para niños con El Mono Sílabo: adivina adivinador", "lunacreciente", 6262224), busqueda: "adivinanzas para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué rima con «ratón»?",
      pasos: ["Mira cómo termina: ra-tón. Acaba en «ón».", "Busca palabras que acaben igual.", "Por ejemplo: camión, balón, melón."],
      resultado: "«ratón» rima con «camión», «balón» y «melón»." },
    { enunciado: "Adivina: «Tengo agujas y no sé coser. Doy la hora y no sé leer».",
      pasos: ["Piensa en algo con agujas que no cose.", "Ese objeto da la hora.", "Las agujas marcan las horas."],
      resultado: "es el reloj." },
    { enunciado: "Di las partes de «Caperucita Roja».",
      pasos: ["Principio: Caperucita lleva comida a su abuelita.", "Nudo: el lobo la engaña y se disfraza de abuelita.", "Final: un cazador las salva."],
      resultado: "principio, nudo y final." },
  ],
  errores: [
    "Pensar que un poema tiene que rimar siempre: muchos riman, pero no todos.",
    "Decir la solución de una adivinanza sin escuchar todas las pistas.",
    "Contar un cuento sin problema ni final: un cuento necesita las tres partes.",
    "Creer que riman palabras que solo empiezan igual: riman por el final.",
  ],
  ejercicios: [
    { q: "¿Cómo empiezan muchos cuentos?", sol: "«Érase una vez…»." },
    { q: "Di las tres partes de un cuento.", sol: "Principio, nudo y final." },
    { q: "¿Quiénes son los personajes de «Los tres cerditos»?", sol: "Los tres cerditos y el lobo." },
    { q: "¿Qué rima con «luna»?", sol: "Por ejemplo: cuna, una, aceituna." },
    { q: "¿Qué rima con «sol»?", sol: "Por ejemplo: col, caracol, farol." },
    { q: "Adivina: «Salta y salta, y la colita le falta». ¿Qué es?", sol: "La rana (adivinanza popular)." },
    { q: "Inventa una adivinanza de un gato.", sol: "Por ejemplo: «Tengo bigotes, digo miau y me gusta dormir al sol»." },
    { q: "¿Cómo se llama cada línea de un poema?", sol: "Verso." },
    { q: "Inventa un final nuevo para «Los tres cerditos».", sol: "Respuesta libre." },
    { q: "Recita un poema corto a tu familia.", sol: "Respuesta libre: con ritmo y voz clara." },
  ],
  quiz: [
    { q: "«Érase una vez» es el principio de un…", o: ["cuento", "poema", "cartel"], a: 0, e: "Así empiezan muchos cuentos." },
    { q: "Las líneas de un poema se llaman…", o: ["versos", "párrafos", "cuentos"], a: 0, e: "Versos." },
    { q: "¿Qué rima con «gato»?", o: ["perro", "pato", "sol"], a: 1, e: "ga-to, pa-to." },
    { q: "Una adivinanza…", o: ["da pistas", "cuenta un viaje largo", "es una receta"], a: 0, e: "Describe sin decir el nombre." },
    { q: "En el nudo del cuento…", o: ["aparece un problema", "termina todo", "se dice el título"], a: 0, e: "El nudo es el problema." },
    { q: "Los personajes son…", o: ["quienes viven la historia", "las páginas", "los dibujos"], a: 0, e: "Personas, animales u objetos." },
    { q: "«Soy redonda y salgo de noche»: es…", o: ["el sol", "la luna", "la nube"], a: 1, e: "La luna." },
    { q: "¿Qué rima con «cuna»?", o: ["luna", "casa", "mesa"], a: 0, e: "Acaban en «una»." },
    { q: "En «Los tres cerditos», ¿quién sopla?", o: ["el lobo", "el gato", "la abuela"], a: 0, e: "El lobo." },
    { q: "¿Cuántas partes tiene un cuento?", o: ["2", "3", "5"], a: 1, e: "Principio, nudo y final." },
  ],
  examen: [
    { q: "¿Qué texto juega con rimas y versos?", o: ["el poema", "la lista de la compra", "el cartel"], a: 0, e: "El poema." },
    { q: "¿Qué rima con «mesa»?", o: ["fresa", "silla", "vaso"], a: 0, e: "Acaban en «esa»." },
    { q: "La parte donde se resuelve el problema es…", o: ["el final", "el principio", "el título"], a: 0, e: "El final." },
    { q: "«Cuatro patas y digo guau»: es…", o: ["el gato", "el perro", "el pato"], a: 1, e: "El perro." },
  ],
  feynman: ["Qué partes tiene un cuento", "Qué es un verso y qué es la rima", "Cómo funciona una adivinanza"],
  mapa: mapa("TEXTOS PARA DISFRUTAR", "var(--pri)", [
    ["Cuento", "principio, nudo y final", A],
    ["Personajes", "quién vive la historia", N],
    ["Poema", "versos y rima", R],
    ["Adivinanza", "pistas para adivinar", V],
  ], 220),
  tarjetas: [
    ["¿Cómo empiezan muchos cuentos?", "Érase una vez…"],
    ["Partes del cuento", "Principio, nudo y final"],
    ["¿Qué son los personajes?", "Quienes viven la historia"],
    ["¿Qué es un verso?", "Cada línea de un poema"],
    ["¿Qué es la rima?", "Palabras que acaban con el mismo sonido"],
    ["¿Qué rima con «pato»?", "Gato, plato, zapato"],
    ["¿Qué es una adivinanza?", "Un juego que da pistas sin decir el nombre"],
    ["Redonda, de noche, en el cielo…", "La luna"],
  ],
  familias: [
    "Leed un cuento cada noche y preguntad: ¿quién sale?, ¿qué problema hay?, ¿cómo acaba?",
    "Jugad a buscar rimas mientras cocináis o vais en el coche.",
    "Decid adivinanzas por turnos; dejad que también invente las suyas.",
    "Aprended juntos un poema corto y recitadlo en una reunión familiar.",
  ],
  profesores: PROF("Educación literaria: lectura y escucha de cuentos, poemas y adivinanzas; estructura del cuento, personajes, verso y rima", ["Cuentacuentos con tarjetas de principio, nudo y final.", "Caja de rimas: sacar un objeto y buscar palabras que rimen.", "Concurso de adivinanzas inventadas por el alumnado."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
