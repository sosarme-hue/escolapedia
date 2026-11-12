// Lengua Castellana 1º de Primaria: ca, co, cu, que, qui. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, fichas, frase, charla, trozos, mural, silabas: s, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", M = "var(--sun)", G = "var(--muted)", K = "var(--ink)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Ca, co, cu, que, qui",
  minutos: 20,
  objetivos: ["Leer y escribir las sílabas ca, co, cu, que y qui", "Saber que con e e i el sonido /k/ se escribe qu", "Saber que en que y qui la u no suena"],
  claves: ["ca", "co", "cu", "que", "qui", "u muda"],
  pregunta: {
    texto: "Di «casa» y «queso». ¿Empiezan por el mismo sonido? ¿Se escriben con la misma letra?",
    respuesta: "Empiezan por el <mark>mismo sonido</mark>, /k/. Pero «casa» se escribe con <b>c</b> y «queso» con <b>qu</b>. Hoy aprendemos cuándo se usa cada una.",
  },
  bloques: [
    {
      html: `<h3>El sonido /k/</h3><p>Escucha el principio de estas palabras: <i>casa</i>, <i>coche</i>, <i>cuna</i>.</p><p>Todas empiezan con el mismo sonido: <mark>/k/</mark>. Es un sonido corto y fuerte.</p><p>Lo hacemos con la parte de atrás de la lengua. Pon la mano en el cuello y di muchas veces «ca, ca, ca». ¿Notas cómo se mueve? ¡Ese es el sonido /k/!</p>`,
      svg: dibujos("Una casa, un coche y una cuna: todas empiezan por el sonido k", [["casa", s("ca|sa"), K], ["coche", s("co|che"), K], ["cuna", s("cu|na"), K]], { titulo: "Empiezan igual: /k/" }),
    },
    {
      html: `<h3>Ca, co, cu</h3><p>Con las vocales <b>a</b>, <b>o</b> y <b>u</b>, el sonido /k/ se escribe con <mark>c</mark>.</p><p>Así salen tres sílabas: <b>ca</b>, <b>co</b>, <b>cu</b>.</p><p>Con ellas leemos <i>cama</i>, <i>copa</i>, <i>cubo</i>, <i>cuchara</i> y <i>conejo</i>. Repite despacio: ca-ma, co-pa, cu-bo. ¡Ya lees palabras con c! Busca más en tu cuento favorito.</p>`,
      svg: fichas("Las sílabas ca, co y cu", [["ca", R], ["co", A], ["cu", V]], { titulo: "c + a, o, u", nota: "cama · copa · cubo", grande: true }),
      video: vid("TyOWmMUsJYU", "Sílabas ca co cu: El Mono Sílabo", "lunacreciente", 18489102, 101113),
    },
    {
      html: `<h3>Que, qui</h3><p>Con las vocales <b>e</b> e <b>i</b>, el sonido /k/ se escribe distinto. Usamos <mark>qu</mark>.</p><p>Así salen dos sílabas: <b>que</b> y <b>qui</b>.</p><p>Leemos <i>queso</i>, <i>mosquito</i> y <i>pequeño</i>. Nunca escribimos «keso» ni «ceso». Con la e y con la i, el sonido /k/ siempre lleva <b>qu</b>.</p>`,
      svg: dibujos("Un queso, un mosquito y una hormiga pequeña", [["queso", s("que|so"), K], ["mosquito", s("mos|qui|to", R, 1), K], ["hormiga", s("pe|que|ño", R, 1), K]], { titulo: "q + u + e, i" }),
      video: vid("lUiy958qqrU", "Sílabas que qui: El Mono Sílabo", "lunacreciente", 8528181, 35457),
    },
    {
      html: `<h3>Una u que no suena</h3><p>En <b>que</b> y <b>qui</b> hay una <b>u</b>, pero <mark>no suena</mark>. Es una u muda.</p><p>Decimos «keso», aunque escribimos <i>queso</i>.</p><p>La u está ahí para acompañar a la q. La q nunca va sola: siempre lleva su u detrás. Al leer, saltamos la u y decimos solo «ke» o «ki».</p>`,
      svg: frase("En que, la q y la u van juntas y la u no suena: se dice ke", [["q", A], ["u", G], ["e", R], ["→", G], ["que", V], ["/"], ["q", A], ["u", G], ["i", R], ["→", G], ["qui", V]], { titulo: "La u va, pero no suena", nota: "que se lee «ke» · qui se lee «ki»", fs: 24 }),
    },
    {
      html: `<h3>La tabla del sonido /k/</h3><p>Ya tenemos las <mark>cinco sílabas</mark> del sonido /k/: <b>ca</b>, <b>que</b>, <b>qui</b>, <b>co</b>, <b>cu</b>.</p><p>Fíjate en el orden de las vocales: a, e, i, o, u. Tres van con <b>c</b> y dos con <b>qu</b>.</p><p>Puedes cantarlas así: «ca, que, qui, co, cu». ¡Suena como una canción!</p>`,
      svg: fichas("Las cinco sílabas del sonido k en orden: ca, que, qui, co, cu", [["ca", R], ["que", A], ["qui", A], ["co", R], ["cu", R]], { titulo: "Con c y con qu", nota: "rojo con c · azul con qu" }),
    },
    {
      html: `<h3>En medio de la palabra</h3><p>Estas sílabas no solo están al principio. También aparecen <mark>en medio</mark> o <mark>al final</mark>.</p><p><i>va-<b>ca</b></i>, <i>bar-<b>co</b></i>, <i>es-<b>cue</b>-la</i>, <i>pe-<b>que</b>-ño</i>.</p><p>Para encontrarlas, separa la palabra en sílabas con palmadas. Luego busca el sonido /k/ en cada trozo.</p>`,
      svg: trozos("Vaca, barco y escuela separadas en sílabas", [["vaca", ["va", "ca"], R], ["barco", ["bar", "co"], A], ["escuela", ["es", "cue", "la"], V]]),
    },
    {
      html: `<h3>Cuidado con ce y ci</h3><p>¿Y si ponemos la <b>c</b> delante de la <b>e</b> o de la <b>i</b>? Entonces <mark>suena distinto</mark>.</p><p><b>ce</b> y <b>ci</b> suenan como la <b>z</b>: <i>cebra</i>, <i>cine</i>, <i>cielo</i>.</p><p>Por eso, para decir /k/ con e e i, necesitamos la <b>qu</b>. Si escribes «cine», no dices «kine». ¡Cada letra en su sitio!</p>`,
      svg: fichas("Ce y ci suenan como zeta; que y qui suenan como k", [["ce", N], ["ci", N], ["que", A], ["qui", A]], { titulo: "ce, ci ≠ que, qui", nota: "cebra, cine · queso, quince", grande: true }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber estas reglas nos ayuda a <mark>escribir sin faltas</mark>.</p><p>Así escribimos bien <i>queso</i>, <i>casa</i> y <i>parque</i>.</p><p>También nombres de personas: <b>Carlos</b>, <b>Raquel</b>, <b>Quique</b>, <b>Paco</b>. Si escribimos mal, quien lo lee se confunde. Imagina un cartel que diga «keso». ¡Qué risa! Mejor escribirlo bien a la primera.</p>`,
      svg: dibujos("Nombres de personas con el sonido k: Carlos, Raquel y Paco", [["nino", s("Car|los"), K], ["nina", s("Ra|quel", R, 1), K], ["papa", s("Pa|co", R, 1), K]], { titulo: "Nombres con /k/" }),
    },
    {
      html: `<h3>Jugamos al bingo de sílabas</h3><p>Cada jugador tiene un cartón con <b>ca, que, qui, co, cu</b>.</p><p>Un adulto dice una palabra: «<i>mosquito</i>». ¿Qué sílaba lleva? <mark>¡qui!</mark> La tachamos.</p><p>Gana quien tacha primero todas sus sílabas. Usad palabras como <i>cubo</i>, <i>queso</i>, <i>coco</i> o <i>caracol</i>. Después, cambiad de papel. ¡Bingo!</p>`,
      svg: charla("Bingo de sílabas: un adulto dice mosquito y la niña responde qui", [["papa", "¡Mosquito!", A], ["nina", "¡Lleva qui! La tacho.", R], ["papa", "¡Caracol!", A], ["nina", "¡Ca y co! ¡Bingo!", R]]),
    },
  ],
  figura: {
    titulo: "Las cinco sílabas del sonido /k/",
    svg: mural("Ca de casa, que de queso, qui de mosquito, co de coche y cu de cuna", [["casa", "ca", "casa", R], ["queso", "que", "queso", A], ["mosquito", "qui", "mosquito", A], ["coche", "co", "coche", R], ["cuna", "cu", "cuna", R]], "Con a, o, u va c; con e, i va qu"),
  },
  video: { ...vid("9-B3C9tUzQ0", "Ca, que, qui, co, cu", "Los primeros de la pandilla", 388039, 2142), busqueda: "ca co cu que qui para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Se escribe «kasa», «qasa» o «casa»?",
      pasos: ["Separa la palabra: ca-sa.", "La sílaba con /k/ lleva la vocal a.", "Con la a, el sonido /k/ se escribe con c."],
      resultado: "se escribe «casa»." },
    { enunciado: "¿Cómo se escribe la palabra que suena «kemar»?",
      pasos: ["Separa: ke-mar.", "La sílaba con /k/ lleva la vocal e.", "Con la e usamos qu: que."],
      resultado: "se escribe «quemar»." },
    { enunciado: "Busca la sílaba con /k/ en «paquete».",
      pasos: ["Da palmadas: pa-que-te.", "Escucha cada trozo: pa, que, te.", "El sonido /k/ está en «que»."],
      resultado: "la sílaba es «que»: pa-que-te." },
  ],
  errores: [
    "Escribir «keso» o «ceso» en vez de «queso»: con e e i se usa qu.",
    "Leer la u de que y qui: es muda, decimos «ke» y «ki».",
    "Escribir la q sin la u, como «qeso»: la q siempre va con su u.",
    "Pensar que ce y ci suenan /k/: suenan como z, como en cebra y cine.",
  ],
  ejercicios: [
    { q: "Lee: ca, co, cu, que, qui.", sol: "Debe leer «ka, ko, ku, ke, ki»." },
    { q: "Completa: __sa (ca o que).", sol: "Casa." },
    { q: "Completa: __so (co o que).", sol: "Queso." },
    { q: "Completa: mos__to (qui o ci).", sol: "Mosquito." },
    { q: "Completa: __na (cu o qui).", sol: "Cuna." },
    { q: "¿Suena la u de «queso»?", sol: "No: es una u muda." },
    { q: "Di tres palabras con «co».", sol: "Por ejemplo: coche, conejo, coco." },
    { q: "Di una palabra con «qui».", sol: "Por ejemplo: mosquito, quince, esquí." },
    { q: "Separa en sílabas «vaca» y rodea la sílaba con /k/.", sol: "va-ca: la sílaba es ca." },
    { q: "Escribe tu nombre o el de un amigo con /k/.", sol: "Por ejemplo: Carlos, Raquel, Paco, Quique." },
  ],
  quiz: [
    { q: "¿Cómo se escribe?", o: ["keso", "queso", "ceso"], a: 1, e: "Con e va qu." },
    { q: "¿Cómo se escribe?", o: ["casa", "qasa", "kasa"], a: 0, e: "Con a va c." },
    { q: "¿Qué sílaba lleva «mosquito»?", o: ["qui", "ci", "ca"], a: 0, e: "mos-qui-to." },
    { q: "En «queso», la u…", o: ["suena", "no suena", "es una mayúscula"], a: 1, e: "Es muda." },
    { q: "¿Cuál suena /k/?", o: ["ce", "ci", "co"], a: 2, e: "co suena /k/." },
    { q: "La cama del bebé se escribe…", o: ["cuna", "quna", "kuna"], a: 0, e: "cuna." },
    { q: "¿Qué sílaba falta? ca, que, __, co, cu", o: ["ci", "qui", "ki"], a: 1, e: "ca, que, qui, co, cu." },
    { q: "La q siempre va con…", o: ["la u", "la a", "la z"], a: 0, e: "q + u." },
    { q: "¿Cuál está bien?", o: ["parqe", "parque", "parke"], a: 1, e: "par-que." },
    { q: "«Cine» empieza por un sonido como…", o: ["la k", "la z", "la m"], a: 1, e: "ci suena como zi." },
  ],
  examen: [
    { q: "¿Cómo se escribe?", o: ["conejo", "quonejo", "konejo"], a: 0, e: "Con o va c." },
    { q: "¿Cómo se escribe?", o: ["pequeño", "peceño", "pekeño"], a: 0, e: "Con e va qu." },
    { q: "¿Cuántas sílabas tiene el sonido /k/ en la tabla?", o: ["3", "5", "2"], a: 1, e: "ca, que, qui, co, cu." },
    { q: "En «qui», ¿qué letra no suena?", o: ["la q", "la u", "la i"], a: 1, e: "La u es muda." },
  ],
  feynman: ["Cuándo escribimos c para el sonido /k/", "Cuándo escribimos qu", "Por qué la u de que y qui no suena"],
  mapa: mapa("SONIDO /K/", "var(--pri)", [
    ["ca, co, cu", "casa, coche, cuna", R],
    ["que, qui", "queso, mosquito", A],
    ["u muda", "que = «ke»", V],
    ["¡Ojo!", "ce, ci suenan como z", N],
  ], 220),
  tarjetas: [
    ["¿Con qué letra va /k/ con a, o, u?", "Con c: ca, co, cu"],
    ["¿Y con e, i?", "Con qu: que, qui"],
    ["¿Suena la u de «queso»?", "No, es muda"],
    ["Escribe «keso» bien", "Queso"],
    ["Una palabra con «cu»", "Cuna, cubo, cuchara"],
    ["Una palabra con «qui»", "Mosquito, quince"],
    ["¿Cómo suena «ce»?", "Como «ze»: cebra"],
    ["La tabla del sonido /k/", "ca, que, qui, co, cu"],
  ],
  familias: [
    "Jugad al bingo de sílabas con palabras de la casa: cuchara, queso, cama.",
    "En el súper, buscad productos con ca, co, cu, que, qui en el envase.",
    "Si escribe «keso», pedidle que mire la tabla: con e va qu.",
    "Leed juntos y exagerad que la u de que y qui no suena.",
  ],
  profesores: PROF("Ortografía natural: correspondencia del fonema /k/ con las grafías c y qu; sílabas directas ca, co, cu, que, qui y la u muda", ["Tabla de doble entrada con vocales y grafías c/qu.", "Bingo de sílabas con palabras dictadas.", "Clasificar tarjetas con dibujos en dos cajas: c y qu."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
