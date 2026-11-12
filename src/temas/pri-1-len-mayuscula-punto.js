// Lengua Castellana 1º de Primaria: la mayúscula y el punto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, lista, mural, silabas: s, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", K = "var(--ink)";
const may = (w, c = R) => s(`${w[0]}|${w.slice(1)}`, c);

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "La mayúscula y el punto",
  minutos: 20,
  objetivos: ["Empezar a escribir con mayúscula", "Escribir con mayúscula los nombres de personas, animales y lugares", "Poner punto al final de la frase y mayúscula después"],
  claves: ["mayúscula", "minúscula", "nombre propio", "punto", "frase"],
  pregunta: {
    texto: "Mira este cartel: «ana y leo van a madrid». ¿Qué letras deberían ser más grandes?",
    respuesta: "La <b>a</b> de Ana, la <b>l</b> de Leo y la <b>m</b> de Madrid. Son <mark>nombres</mark> y van con <b>mayúscula</b>. Y al final, un <b>punto</b>: «Ana y Leo van a Madrid.»",
  },
  bloques: [
    {
      html: `<h3>Mayúsculas y minúsculas</h3><p>Cada letra tiene dos formas: la <mark>mayúscula</mark> y la <mark>minúscula</mark>.</p><p>La mayúscula es <b>más grande</b>: A, B, M. La minúscula es <b>más pequeña</b>: a, b, m.</p><p>Las dos suenan igual. Lo que cambia es el tamaño y, a veces, la forma. Mira la B y la b: ¡se parecen poco!</p>`,
      svg: fichas("Parejas de mayúscula y minúscula: Aa, Bb, Mm, Ee, Pp, Ss", [["Aa", R], ["Bb", A], ["Mm", V], ["Ee", N], ["Pp", R], ["Ss", A]], { titulo: "Grande y pequeña", nota: "Suenan igual" }),
      video: vid("52uXCBYHwBg", "Las mayúsculas", "Happy Learning Español", 473702),
    },
    {
      html: `<h3>Al empezar a escribir</h3><p>La <b>primera palabra</b> de lo que escribimos empieza con <mark>mayúscula</mark>.</p><p>«<b>H</b>oy hace sol.» «<b>M</b>i perro es marrón.»</p><p>La mayúscula es como una puerta grande. Avisa de que <b>empieza algo nuevo</b>. Por eso, cuando escribes en tu cuaderno, la primera letra siempre va en grande.</p>`,
      svg: frase("La frase Hoy hace sol con la H en mayúscula", [[may("Hoy"), K], ["hace", K], ["sol.", K]], { titulo: "La primera letra, en grande", nota: "La mayúscula avisa: ¡empieza!", fs: 26 }),
    },
    {
      html: `<h3>Los nombres de personas</h3><p>Los nombres de las personas se escriben con <mark>mayúscula</mark>.</p><p><b>A</b>na, <b>L</b>eo, <b>M</b>arta, <b>H</b>ugo. También los apellidos: <b>G</b>arcía, <b>P</b>érez.</p><p>Tu nombre es muy importante, ¡por eso lleva mayúscula! Practica escribirlo bien grande en la portada de tu cuaderno. ¿Sabes escribir también tu apellido?</p>`,
      svg: dibujos("Tres personas con su nombre: Ana, Leo y Marta, con la primera letra en rojo", [["nina", may("Ana"), K], ["nino", may("Leo"), K], ["abuela", may("Marta"), K]], { titulo: "Nombres de personas" }),
    },
    {
      html: `<h3>Nombres de mascotas y lugares</h3><p>Las <b>mascotas</b> también tienen nombre propio: el perro <b>T</b>oby, la gata <b>M</b>isi.</p><p>Los <b>pueblos</b>, las <b>ciudades</b> y los <b>países</b> también llevan <mark>mayúscula</mark>: <b>S</b>evilla, <b>M</b>adrid, <b>E</b>spaña.</p><p>Pero si decimos solo «perro» o «ciudad», va en minúscula. No es un nombre propio.</p>`,
      svg: dibujos("Un perro llamado Toby, una gata llamada Misi y una ciudad, Sevilla", [["perro", may("Toby"), K], ["gato", may("Misi"), K], ["torre", may("Sevilla"), K]], { titulo: "Mascotas y lugares", nota: "perro, gata y ciudad van en minúscula" }),
    },
    {
      html: `<h3>El punto</h3><p>El <mark>punto</mark> es un puntito que ponemos <b>al final de la frase</b>.</p><p>Dice: «Aquí termina». «Mi gato es negro<b>.</b>»</p><p>Cuando leemos y vemos un punto, hacemos una <b>pequeña parada</b>. Respiramos y seguimos. Sin puntos, leeríamos todo seguido y nos quedaríamos sin aire. ¡Prueba a leer sin parar y verás!</p>`,
      svg: frase("La frase Mi gato es negro con un punto grande al final", [["Mi", K], ["gato", K], ["es", K], ["negro", K], [".", R]], { titulo: "El punto dice: aquí termina", nota: "Al ver el punto, paramos y respiramos", fs: 22 }),
      video: vid("wVD9I3IZXHk", "Los signos de puntuación: el punto", "Happy Learning Español", 2490363),
    },
    {
      html: `<h3>Después del punto, mayúscula</h3><p>Cuando una frase termina, empieza otra nueva.</p><p>Por eso, <b>después del punto</b> escribimos con <mark>mayúscula</mark>.</p><p>«Tengo un perro<b>.</b> <b>S</b>e llama Toby<b>.</b>»</p><p>El punto cierra la puerta y la mayúscula abre la siguiente. Siempre van juntos, como dos buenos amigos. Uno termina y el otro empieza.</p>`,
      svg: frase("Dos frases: Tengo un perro. Se llama Toby. Después del punto va mayúscula", [["Tengo", K], ["un", K], ["perro", K], [".", R], ["/"], [may("Se"), K], ["llama", K], [may("Toby", A), K], [".", R]], { titulo: "Punto y luego mayúscula", fs: 22 }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>La mayúscula y el punto nos ayudan a <mark>leer mejor</mark>.</p><p>Sabemos dónde empieza y dónde acaba cada frase.</p><p>También sirven para saber qué es un <b>nombre</b>. Si leemos «Rosa», sabemos que es una persona. Si leemos «rosa», es una flor. ¡Una letra grande cambia mucho!</p>`,
      svg: dibujos("Rosa con mayúscula es una niña; rosa con minúscula es una flor", [["nina", may("Rosa"), K], ["rosa", "rosa", V]], { titulo: "¿Persona o flor?", nota: "La mayúscula cambia el significado" }),
    },
    {
      html: `<h3>Repasamos las reglas</h3><p>Antes de terminar de escribir, revisa estas <mark>tres cosas</mark>:</p><p>Uno: ¿empiezo con <b>mayúscula</b>? Dos: ¿los <b>nombres</b> llevan mayúscula? Tres: ¿he puesto <b>punto</b> al final?</p><p>Si las tres están bien, ¡tu frase está lista! Puedes marcar cada una con un tic en el margen.</p>`,
      svg: lista("Tres reglas para revisar: empiezo con mayúscula, los nombres con mayúscula y punto al final", [["Empiezo con mayúscula", R], ["Nombres con mayúscula", A], ["Punto al final", V]], { titulo: "Antes de entregar, reviso" }),
    },
    {
      html: `<h3>Jugamos a detectives</h3><p>Un detective busca <mark>errores</mark> escondidos.</p><p>Mira esta frase: «ana tiene un gato» ¿Qué falta?</p><p>¡Muy bien! Falta la mayúscula de <b>Ana</b> y el <b>punto</b> final: «Ana tiene un gato.» Inventad frases con errores y buscadlos por turnos. Gana quien encuentra más. ¡Los buenos detectives miran cada letra con lupa!</p>`,
      svg: frase("Frase con errores: ana tiene un gato. Frase corregida: Ana tiene un gato.", [["ana", R], ["tiene", R], ["un", R], ["gato", R], ["/"], [may("Ana", V), K], ["tiene", K], ["un", K], ["gato", K], [".", V]], { titulo: "¡Detectives de errores!", nota: "Faltaban la mayúscula y el punto", fs: 22 }),
    },
  ],
  figura: {
    titulo: "Cuándo usamos mayúscula y punto",
    svg: mural("Cuatro reglas: mayúscula al empezar, en nombres de personas, en nombres de lugares, y punto al final de la frase", [["libro", "Hoy…", "al empezar", R], ["nina", "Ana", "nombres de personas", A], ["torre", "Madrid", "nombres de lugares", V], ["estrella", "fin.", "punto al final", N]], "Mayúscula para empezar y para los nombres; punto para acabar"),
  },
  video: { ...vid("G4pN21Y-Nuc", "El punto: signos de puntuación para niños", "Smile and Learn - Español", 877175, 5041), busqueda: "la mayúscula y el punto para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Corrige: «mi perro se llama toby»",
      pasos: ["La primera palabra empieza con mayúscula: Mi.", "Toby es un nombre de mascota: Toby.", "Al final de la frase ponemos un punto."],
      resultado: "«Mi perro se llama Toby.»" },
    { enunciado: "¿Cuántas frases hay en «Hace frío. Me pongo el gorro.»?",
      pasos: ["Busca los puntos: hay dos.", "Cada punto cierra una frase.", "Mira las mayúsculas: Hace y Me abren cada frase."],
      resultado: "hay 2 frases." },
    { enunciado: "Escribe una frase sobre tu ciudad o tu pueblo.",
      pasos: ["Piensa qué quieres contar: Vivo en Toledo.", "Empieza con mayúscula: Vivo.", "Toledo es un lugar: mayúscula. Acaba con punto."],
      resultado: "«Vivo en Toledo.»" },
  ],
  errores: [
    "Escribir el propio nombre con minúscula: los nombres llevan siempre mayúscula.",
    "Olvidar el punto al final de la frase.",
    "Poner mayúscula en medio de una palabra, como «gAto»: solo va al principio.",
    "Poner mayúscula a cosas que no son nombres propios, como «Perro» en medio de una frase.",
  ],
  ejercicios: [
    { q: "Escribe tu nombre con mayúscula.", sol: "Respuesta libre: la primera letra, en mayúscula." },
    { q: "Escribe la mayúscula de: a, m, p.", sol: "A, M, P." },
    { q: "Corrige: «luis come pan»", sol: "«Luis come pan.»" },
    { q: "¿Lleva mayúscula «madrid»?", sol: "Sí: Madrid es una ciudad." },
    { q: "¿Lleva mayúscula «mesa»?", sol: "No, salvo si es la primera palabra de la frase." },
    { q: "Rodea los puntos de: «Llueve. Cojo el paraguas.»", sol: "Hay dos puntos: después de «Llueve» y de «paraguas»." },
    { q: "Pon el punto: «Me gusta el chocolate»", sol: "«Me gusta el chocolate.»" },
    { q: "Escribe el nombre de una mascota inventada.", sol: "Por ejemplo: Coco, Nube, Bigotes (con mayúscula)." },
    { q: "Escribe dos frases sobre tu casa.", sol: "Por ejemplo: «Mi casa es pequeña. Tiene un balcón.»" },
    { q: "Lee en voz alta y para en el punto: «Salta. Corre. Ríe.»", sol: "Hay que hacer tres paradas cortas, una en cada punto." },
  ],
  quiz: [
    { q: "¿Cuál es una letra mayúscula?", o: ["m", "M", "n"], a: 1, e: "M es grande." },
    { q: "¿Cómo empieza una frase?", o: ["Con mayúscula", "Con punto", "Con minúscula"], a: 0, e: "Siempre con mayúscula." },
    { q: "¿Qué palabra lleva mayúscula?", o: ["pera", "Lucía", "silla"], a: 1, e: "Lucía es un nombre de persona." },
    { q: "¿Dónde va el punto?", o: ["Al principio", "Al final de la frase", "En medio de una palabra"], a: 1, e: "El punto dice: aquí termina." },
    { q: "Después de un punto escribimos…", o: ["mayúscula", "minúscula", "un número"], a: 0, e: "Empieza otra frase." },
    { q: "¿Qué está bien escrito?", o: ["mi gata es Blanca", "Mi gata es blanca.", "mi Gata es blanca"], a: 1, e: "Mayúscula al principio y punto al final." },
    { q: "¿Lleva mayúscula «españa»?", o: ["Sí", "No", "Solo a veces"], a: 0, e: "España es un país." },
    { q: "Al leer y ver un punto…", o: ["paramos un poco", "gritamos", "saltamos la frase"], a: 0, e: "Hacemos una pequeña parada." },
    { q: "«rosa» con minúscula es…", o: ["una niña", "una flor", "una ciudad"], a: 1, e: "Con minúscula es la flor." },
    { q: "¿Cuántas frases hay en «Hola. Soy Leo.»?", o: ["1", "2", "3"], a: 1, e: "Dos puntos, dos frases." },
  ],
  examen: [
    { q: "¿Qué lleva mayúscula?", o: ["el nombre de una persona", "cualquier palabra", "la última letra"], a: 0, e: "Los nombres propios." },
    { q: "Corrige «hoy es lunes»:", o: ["Hoy es lunes.", "hoy es lunes.", "Hoy Es Lunes"], a: 0, e: "Mayúscula y punto." },
    { q: "El punto se pone…", o: ["al acabar la frase", "al empezar", "entre sílabas"], a: 0, e: "Al final." },
    { q: "¿Qué es correcto?", o: ["Vivo en sevilla.", "Vivo en Sevilla.", "vivo en Sevilla"], a: 1, e: "Sevilla es un lugar y la frase acaba en punto." },
  ],
  feynman: ["Cuándo se escribe con mayúscula", "Para qué sirve el punto", "Por qué va mayúscula después del punto"],
  mapa: mapa("MAYÚSCULA Y PUNTO", "var(--pri)", [
    ["Al empezar", "Hoy hace sol.", R],
    ["Nombres", "Ana, Toby, Madrid", A],
    ["Punto", "al final de la frase", V],
    ["Después del punto", "otra vez mayúscula", N],
  ], 220),
  tarjetas: [
    ["¿Cómo empieza una frase?", "Con mayúscula"],
    ["¿Cómo acaba una frase?", "Con punto"],
    ["¿Llevan mayúscula los nombres de personas?", "Sí: Ana, Leo"],
    ["¿Y los nombres de ciudades?", "Sí: Madrid, Sevilla"],
    ["¿Qué hago después de un punto?", "Escribo con mayúscula"],
    ["¿Qué hago al leer un punto?", "Paro un poco y respiro"],
    ["Mayúscula de «b»", "B"],
    ["Corrige: «leo ríe»", "Leo ríe."],
  ],
  familias: [
    "Al hacer la lista de la compra, pedidle que empiece con mayúscula y ponga punto.",
    "Buscad nombres propios en carteles de la calle: calles, tiendas, pueblos.",
    "Leed juntos y haced una pausa exagerada en cada punto, como un juego.",
    "Jugad a detectives: escribid una frase con un error y que lo encuentre.",
  ],
  profesores: PROF("Ortografía básica: uso de la mayúscula al inicio de texto, tras punto y en nombres propios; el punto como marca de final de oración", ["Semáforo de escritura: verde la mayúscula inicial, rojo el punto final.", "Detectives de errores con frases en la pizarra.", "Murales con los nombres propios de la clase, de mascotas y de la localidad."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
