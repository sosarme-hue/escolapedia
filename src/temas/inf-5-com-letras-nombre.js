// Infantil 5 años · Comunicación y representación: las letras de mi nombre.
const { tema, letras, mapa, svg, rot, big, nino, fichas, dibujos, mural, frase, vid, PROF, R, A, V, N, M, W, K } = require("./_inf5b");

module.exports = tema({
  materia: "Comunicación y representación de la realidad",
  titulo: "Las letras de mi nombre",
  objetivos: ["Reconocer su nombre escrito entre otros", "Nombrar las letras de su nombre", "Saber que el nombre empieza con letra mayúscula"],
  claves: ["nombre", "letra", "primera letra", "mayúscula"],
  pregunta: {
    texto: "Mira la puerta de tu clase o tu percha. ¿Cómo sabes cuál es la tuya?",
    respuesta: "Porque allí está <mark>tu nombre</mark> escrito. Tu nombre tiene sus <b>letras</b>, y nadie más tiene exactamente las mismas.",
  },
  bloques: [
    {
      html: `<h3>Mi nombre se escribe</h3><p>Todos tenemos un <mark>nombre</mark>.</p><p>Tu nombre se puede decir y también se puede <b>escribir</b>.</p><p>Para escribirlo usamos <b>letras</b>, una detrás de otra.</p><p>¡Es solo tuyo!</p>`,
      svg: svg("Un niño señala su nombre, PABLO, escrito en un cartel", `${nino(52, 158, { c: A, pose: "brazos" })}<rect x="96" y="56" width="148" height="56" rx="10" fill="var(--card)" stroke="${A}" stroke-width="3"/>${big(170, 97, "PABLO", A, 34)}${rot(170, 140, "Este es mi nombre", { color: K })}`),
    },
    {
      html: `<h3>Cada nombre tiene sus letras</h3><p>El nombre <b>ANA</b> tiene <mark>3 letras</mark>.</p><p>El nombre <b>LUCÍA</b> tiene <mark>5 letras</mark>.</p><p>Hay nombres cortos y nombres largos. ¿Cuántas letras tiene el tuyo?</p><p>Cuéntalas con el dedo.</p>`,
      svg: letras("El nombre ANA en tres fichas y el nombre LUCÍA en cinco fichas", [["ANA", R], ["LUCÍA", A]], { titulo: "Nombres cortos y largos", nota: "ANA: 3 letras · LUCÍA: 5 letras" }),
    },
    {
      html: `<h3>La primera letra</h3><p>La letra del principio es <mark>la primera letra</mark>.</p><p>PABLO empieza por <b>P</b>. MARTA empieza por <b>M</b>.</p><p>La primera letra se escribe <b>grande</b>: es una mayúscula.</p>`,
      svg: svg("PABLO con la P en rojo y MARTA con la M en rojo", `<rect x="20" y="30" width="220" height="58" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${big(130, 72, `<tspan fill="${R}">P</tspan>ABLO`, A, 36)}<rect x="20" y="100" width="220" height="58" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${big(130, 142, `<tspan fill="${R}">M</tspan>ARTA`, V, 36)}`),
    },
    {
      html: `<h3>Buscamos letras amigas</h3><p>Algunas letras de tu nombre están en otros nombres.</p><p>La <b>A</b> está en ANA, en MARTA y en PABLO.</p><p>Cuando veas tu letra en un cartel, ¡<mark>salúdala</mark>!</p>`,
      svg: svg("La letra A rodeada en tres nombres: ANA, MARTA y PABLO", `${["ANA", "MARTA", "PABLO"].map((n, i) => big(130, 50 + i * 46, n.replace(/A/g, `<tspan fill="${R}">A</tspan>`), K, 30)).join("")}${rot(130, 172, "La A está en los tres", { color: R })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Tu nombre escrito sirve para saber <mark>qué es tuyo</mark>: tu percha, tu dibujo o tu mochila.</p><p>También firmas tus trabajos con tu nombre. ¡Así todos saben quién lo ha hecho!</p>`,
      svg: dibujos("Una mochila, un dibujo y un libro con un nombre escrito", [["mochila", "mochila", V], ["cuadro", "dibujo", N], ["libro", "libro", A]], { titulo: "Lo marco con mi nombre", nota: "¡Es mío!" }),
    },
    {
      html: `<h3>Juego: el nombre escondido</h3><p>Escribe tu nombre en un papel. Recorta las letras.</p><p>Mézclalas y <mark>vuelve a ordenarlas</mark>. ¿Ya está tu nombre bien?</p><p>¡Ahora juega con el nombre de un amigo!</p>`,
      svg: frase("Las letras de SOL desordenadas y luego ordenadas", [["L", R], ["S", A], ["O", V], ["/"], ["S", A], ["O", V], ["L", R]], { titulo: "Ordena las letras", nota: "L S O → S O L" }),
    },
  ],
  figura: {
    titulo: "Mi nombre, letra a letra",
    svg: mural("Nombres de niños con su primera letra: Ana, Pablo, Marta y Lucía", [["nina", "ANA", "empieza por A", R], ["nino", "PABLO", "empieza por P", A], ["nina", "MARTA", "empieza por M", V], ["nina", "LUCÍA", "empieza por L", N]], "Cada nombre empieza con su letra mayúscula"),
  },
  video: { ...vid("3i7jpN7WwDQ", "El abecedario", "Luli Pampín", 37045279), busqueda: "aprender las letras del abecedario para niños canción" },
  ejemplos: [
    { enunciado: "¿Por qué letra empieza SARA?", pasos: ["Decimos el nombre despacio: «Sssara».", "El primer sonido es «sss».", "Miramos la primera letra escrita: es la S."], resultado: "SARA empieza por S." },
    { enunciado: "¿Cuántas letras tiene LEO?", pasos: ["Señalamos cada letra con el dedo: L, E, O.", "Contamos: 1, 2, 3."], resultado: "LEO tiene 3 letras." },
  ],
  errores: [
    "Escribir las letras del nombre en otro orden: cada letra va en su sitio.",
    "Hacer la primera letra pequeña: el nombre empieza con mayúscula.",
    "Confundir la letra con su sonido: la letra M suena «mmm».",
  ],
  ejercicios: [
    { q: "Busca tu nombre entre los de tus amigos.", sol: "Nota para la familia: escribid 3 o 4 nombres y que señale el suyo." },
    { q: "Señala la primera letra de tu nombre.", sol: "Nota para la familia: dadle un rotulador para rodearla." },
    { q: "Cuenta las letras de tu nombre con palmadas.", sol: "Una palmada por letra. Contadlas juntos." },
    { q: "Haz tu primera letra con plastilina.", sol: "Nota para la familia: modelad churros y formad la letra encima de una escrita." },
    { q: "Busca tu primera letra en un cuento o un cartel.", sol: "Nota para la familia: celebrad cada vez que la encuentre." },
    { q: "Firma tu dibujo con tu nombre.", sol: "Nota para la familia: puede copiarlo de un modelo escrito por un adulto." },
  ],
  quiz: [
    { q: "¿Con qué escribimos un nombre?", o: ["Con letras", "Con números", "Con colores"], a: 0, e: "Los nombres se escriben con letras." },
    { q: "¿Por qué letra empieza PABLO?", o: ["A", "P", "O"], a: 1, e: "P-ABLO: la primera es la P." },
    { q: "¿Cuántas letras tiene ANA?", o: ["2", "3", "5"], a: 1, e: "A, N, A: 3 letras." },
    { q: "La primera letra del nombre es…", o: ["pequeña", "mayúscula", "un número"], a: 1, e: "Los nombres empiezan con mayúscula." },
    { q: "¿Qué letra tienen ANA y MARTA?", o: ["la A", "la P", "la L"], a: 0, e: "Las dos tienen la A." },
    { q: "Tu nombre en un dibujo sirve para…", o: ["saber que es tuyo", "pintar más", "nada"], a: 0, e: "Así todos saben quién lo hizo." },
  ],
  examen: [
    { q: "¿Por qué letra empieza MARTA?", o: ["M", "T", "A"], a: 0, e: "M-ARTA." },
    { q: "¿Cuántas letras tiene SOL?", o: ["3", "4", "2"], a: 0, e: "S, O, L." },
    { q: "Las letras de un nombre van…", o: ["en cualquier orden", "siempre en su orden", "al revés"], a: 1, e: "Si cambian de sitio, ya no es tu nombre." },
  ],
  feynman: ["Que el nombre se escribe con letras", "Cuál es la primera letra de mi nombre", "Que el nombre empieza con mayúscula"],
  mapa: mapa("MI NOMBRE", "var(--pri)", [
    ["Letras", "mi nombre tiene letras", A],
    ["Primera letra", "es mayúscula", R],
    ["Orden", "cada letra en su sitio", V],
    ["Para qué", "marcar lo que es mío", N],
  ], 220),
  tarjetas: [
    ["¿Con qué se escribe tu nombre?", "Con letras"],
    ["¿Cómo es la primera letra?", "Mayúscula, grande"],
    ["¿Por qué letra empieza ANA?", "Por la A"],
    ["¿Cuántas letras tiene LEO?", "3"],
    ["¿Para qué firmo mi dibujo?", "Para saber que es mío"],
    ["Si cambio el orden de las letras…", "Ya no es mi nombre"],
  ],
  familias: [
    "Escribid su nombre en grande y pegadlo en su cuarto o en su taza.",
    "Buscad juntos su primera letra en carteles, matrículas y envases.",
    "Haced su nombre con letras de imán, pasta o plastilina.",
    "Escribid los nombres de la familia y comparad cuáles son largos y cortos.",
  ],
  profesores: PROF("Aproximación al lenguaje escrito: el nombre propio como primer texto significativo, identificación de letras y direccionalidad", ["Tarjetas con los nombres de la clase para pasar lista.", "Mural de nombres ordenados por la primera letra.", "Letras móviles para componer y descomponer el nombre."]),
});
