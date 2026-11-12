// Música 2º ESO: la textura musical. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

// Líneas melódicas esquemáticas: cada voz es [puntos y], color.
const voz = (pts, y0, c, x0 = 24, dx = 26) => `<path d="${pts.map((v, i) => `${i ? "L" : "M"}${x0 + i * dx} ${y0 - v * 5}`).join(" ")}" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La textura musical",
  minutos: 45,
  objetivos: ["Entender la textura como la forma en que se combinan las voces de una obra", "Distinguir monodia, melodía acompañada, homofonía y polifonía", "Reconocer el canon, el bordón y el ostinato", "Identificar texturas en audiciones de distintas épocas y estilos"],
  claves: ["textura", "monodia", "homofonía", "polifonía", "melodía acompañada", "contrapunto"],
  pregunta: {
    texto: "Si cantáis «Frère Jacques» en clase empezando cada grupo un poco más tarde, ¿por qué sigue sonando bien aunque cada uno cante una cosa distinta?",
    respuesta: "Porque es un <b>canon</b>: todas las voces cantan la <mark>misma melodía</mark>, pero entran una después de otra, y la melodía está pensada para que encaje consigo misma. Es un tipo de <b>textura polifónica</b>: varias líneas independientes que suenan a la vez.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la textura?</h3><p>En un tejido, la textura depende de cómo se cruzan los hilos. En música, la <b>textura</b> es la <mark>forma en que se combinan las distintas líneas sonoras</mark> (voces o instrumentos) que suenan a la vez.</p><p>Para describirla hay que fijarse en:</p><ul><li><b>Cuántas</b> líneas suenan: una o varias.</li><li><b>Qué papel</b> tiene cada una: si todas son igual de importantes o si hay una principal y otras que acompañan.</li><li>Si se mueven <b>con el mismo ritmo</b> o de forma independiente.</li></ul><p>Las cuatro texturas básicas son la <b>monodia</b>, la <b>homofonía</b>, la <b>melodía acompañada</b> y la <b>polifonía</b>. Una misma obra puede cambiar de textura de una sección a otra.</p>`,
      video: { id: "meFA9nm1Nto", titulo: "La textura musical", canal: "Tu teacher de musica", vistas: 108480 },
    },
    {
      html: `<h3>La monodia</h3><p>La <b>monodia</b> es la textura más sencilla: <mark>una sola melodía</mark>, sin acompañamiento. Puede cantarla o tocarla una persona o muchas a la vez, pero todas hacen exactamente lo mismo (al <b>unísono</b>) o a distancia de octava.</p><p>Ejemplos: el <b>canto gregoriano</b> medieval, una persona silbando, un grupo de amigos cantando una canción en un viaje sin instrumentos, o una nana.</p>`,
      svg: svg("Monodia: una sola línea melódica", `${voz([2, 4, 5, 3, 6, 8, 7, 5, 4, 2], 96, "var(--pen)", 14)}${t(130, 150, "una sola melodía", { c: "var(--pen)", s: 13 })}${t(130, 30, "MONODIA", { s: 14, d: true })}`),
    },
    {
      html: `<h3>La melodía acompañada</h3><p>Hay una <b>melodía principal</b> que destaca y un <b>acompañamiento</b> de acordes o de un ritmo que la sostiene, en segundo plano.</p><p>Es la textura más habitual en la música actual: un cantante con una guitarra, una canción pop con banda, un violinista acompañado por el piano. El acompañamiento puede ser de <b>acordes plaqué</b> (notas a la vez), <b>arpegiados</b> (las notas del acorde una tras otra) o rítmicos.</p><p>Fue muy importante a partir del <b>Barroco</b> (siglo XVII), con el bajo continuo, y en las canciones románticas para voz y piano (<i>lieder</i>).</p>`,
      svg: svg("Melodía acompañada: una línea principal gruesa arriba y acordes en bloques debajo", `${voz([4, 6, 7, 5, 8, 10, 9, 7, 6, 4], 74, "var(--red)", 14)}${[0, 1, 2, 3, 4].map((i) => `<rect x="${16 + i * 46}" y="112" width="38" height="24" rx="4" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)" stroke-width="1.5"/>`).join("")}${t(130, 30, "MELODÍA ACOMPAÑADA", { s: 13, d: true })}${t(130, 160, "melodía principal + acordes", { s: 12 })}`),
    },
    {
      html: `<h3>La homofonía</h3><p>En la <b>homofonía</b> suenan <b>varias voces</b> que se mueven <mark>con el mismo ritmo</mark>, formando acordes. Todas pronuncian las mismas sílabas a la vez, como un bloque, aunque cada una canta notas distintas.</p><p>Se reconoce porque el texto se entiende muy bien. Ejemplos: los <b>corales</b> de las iglesias luteranas que armonizaba Bach, muchos himnos y canciones de coro, o un cuarteto de cuerda tocando acordes.</p><p>La diferencia con la melodía acompañada es que aquí todas las voces tienen el mismo ritmo y una importancia parecida.</p>`,
      svg: svg("Homofonía: cuatro líneas paralelas con el mismo ritmo", `${[0, 1, 2, 3].map((k) => voz([3, 5, 4, 6, 5, 7, 6, 4, 5, 3], 60 + k * 26, ["var(--red)", "var(--sun)", "var(--leaf)", "var(--pen)"][k], 14)).join("")}${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `<path d="M${14 + i * 26} 36 V 150" stroke="var(--line)" stroke-width="1" stroke-dasharray="2 4"/>`).join("")}${t(130, 26, "HOMOFONÍA: mismo ritmo", { s: 13, d: true })}`),
    },
    {
      html: `<h3>La polifonía</h3><p>En la <b>polifonía</b> suenan <b>varias melodías independientes</b> a la vez, cada una con su propio ritmo y su propio dibujo, y todas son igual de importantes. Las voces se «persiguen», se cruzan y se imitan.</p><p>El arte de combinar melodías se llama <b>contrapunto</b>. La polifonía nació en la Edad Media y alcanzó su esplendor en el <b>Renacimiento</b> (Josquin des Prez, Palestrina, Tomás Luis de Victoria) y en las <b>fugas</b> de Bach. Al escuchar polifonía cuesta seguir el texto, porque cada voz dice las palabras en un momento distinto.</p>`,
      svg: svg("Polifonía: tres líneas independientes que se cruzan", `${voz([6, 8, 7, 9, 10, 8, 6, 5, 7, 9], 100, "var(--red)", 14)}${voz([2, 1, 4, 6, 5, 3, 5, 8, 7, 4], 100, "var(--leaf)", 14)}${voz([-3, -1, 0, -2, 1, 3, 2, 0, -2, -1], 100, "var(--pen)", 14)}${t(130, 26, "POLIFONÍA: voces independientes", { s: 13, d: true })}${t(130, 166, "contrapunto", { c: "var(--muted)", s: 11 })}`),
      video: { id: "efq5haBhSHc", titulo: "Textura musical", canal: "Leandro Romero", vistas: 122937 },
    },
    {
      html: `<h3>El canon y la imitación</h3><p>El <b>canon</b> es la forma más estricta de polifonía: todas las voces cantan <mark>la misma melodía</mark>, pero entran de forma escalonada. Cuando la primera voz llega a un punto, empieza la segunda, y así sucesivamente.</p><p>Ejemplos: «Frère Jacques», «Vamos a contar mentiras», el «Canon en re» de Pachelbel (aquí los violines se imitan sobre un bajo que se repite).</p><p>Cuando una voz repite un fragmento de otra, aunque no sea toda la melodía, se habla de <b>imitación</b>. Es la técnica básica de la polifonía del Renacimiento y de la <b>fuga</b>.</p>`,
      svg: svg("Canon: la misma melodía empieza en tres voces con un desfase", `${[0, 1, 2].map((k) => `<rect x="${20 + k * 50}" y="${40 + k * 36}" width="130" height="24" rx="6" fill="${["var(--red)", "var(--leaf)", "var(--pen)"][k]}" fill-opacity=".3" stroke="${["var(--red)", "var(--leaf)", "var(--pen)"][k]}" stroke-width="2"/>${t(85 + k * 50, 57 + k * 36, "Frère Jacques…", { s: 11 })}${t(14 + k * 50, 57 + k * 36, String(k + 1), { s: 11, a: "end", c: "var(--muted)" })}`).join("")}${t(130, 26, "CANON", { s: 13, d: true })}${t(130, 166, "misma melodía, entradas escalonadas", { s: 11 })}`),
    },
    {
      html: `<h3>Bordón y ostinato</h3><p>Hay recursos de acompañamiento que se combinan con cualquier textura:</p><ul><li><b>Bordón</b>: una nota (o dos, a distancia de 5.ª) que se mantiene <b>fija</b> durante mucho tiempo, normalmente grave, por debajo de la melodía. Lo hacen la <b>gaita</b> gallega o asturiana con su roncón, la zanfoña o el sitar de la India.</li><li><b>Ostinato</b>: un pequeño diseño rítmico o melódico que se <b>repite</b> una y otra vez. Es la base del «Bolero» de Ravel (el ritmo de la caja), de muchos riffs de rock y de las bases de la música electrónica.</li></ul><p>Con xilófonos y percusión es muy fácil crear ostinatos en clase para acompañar una canción.</p>`,
    },
    {
      html: `<h3>Reconocer la textura al escuchar</h3>${tabla(["Pregunta", "Si la respuesta es…", "Textura"], [["¿Cuántas líneas oigo?", "solo una (aunque cante mucha gente)", "monodia"], ["¿Hay una melodía que destaca sobre un acompañamiento?", "sí", "melodía acompañada"], ["¿Todas las voces dicen las sílabas a la vez, en bloque?", "sí", "homofonía"], ["¿Las voces entran en momentos distintos y se persiguen?", "sí", "polifonía (canon si repiten la misma melodía)"]])}<p>Ejemplos para escuchar: canto gregoriano «Puer natus est» (monodia), «Ave verum corpus» de Mozart (homofonía), una canción de un cantautor con guitarra (melodía acompañada) y el «Kyrie» de una misa de Victoria (polifonía).</p>`,
    },
  ],
  figura: {
    titulo: "Las texturas musicales",
    svg: filas("Resumen: monodia una melodía; melodía acompañada; homofonía mismo ritmo; polifonía voces independientes; canon; bordón y ostinato", [["Monodia", "una sola melodía, sin acompañamiento", "var(--pen)"], ["Melodía acompañada", "melodía principal + acordes", "var(--red)"], ["Homofonía", "varias voces con el mismo ritmo", "var(--sun)"], ["Polifonía", "varias melodías independientes", "var(--leaf)"], ["Canon", "misma melodía con entradas escalonadas", "var(--inf)"], ["Bordón · ostinato", "nota fija · diseño que se repite", "var(--ink)"]], 230),
  },
  video: { id: "HBNhmnoBecA", titulo: "La textura musical: explicación y ejemplos", canal: "Juan Martinez", vistas: 41005, megusta: 0, busqueda: "textura musical monodia polifonía homofonía" },
  quiz: mezcla([
    { q: "La textura musical describe…", o: ["cómo se combinan las líneas sonoras", "la velocidad", "la intensidad"], a: 0, e: "Como los hilos de un tejido." },
    { q: "El canto gregoriano es…", o: ["monodia", "polifonía", "homofonía"], a: 0, e: "Una sola melodía." },
    { q: "Un coro que canta en bloque, con el mismo ritmo en todas las voces, hace…", o: ["homofonía", "monodia", "canon"], a: 0, e: "Acordes en bloque." },
    { q: "Varias melodías independientes a la vez es…", o: ["polifonía", "monodia", "unísono"], a: 0, e: "Contrapunto." },
    { q: "Un cantante con guitarra suele hacer…", o: ["melodía acompañada", "polifonía", "monodia"], a: 0, e: "Melodía + acordes." },
    { q: "En un canon todas las voces…", o: ["cantan la misma melodía con desfase", "cantan melodías distintas", "cantan a la vez lo mismo"], a: 0, e: "Entradas escalonadas." },
    { q: "Una nota grave mantenida bajo la melodía es un…", o: ["bordón", "ostinato", "acorde"], a: 0, e: "Como la gaita." },
    { q: "Un diseño breve que se repite sin parar es un…", o: ["ostinato", "bordón", "canon"], a: 0, e: "Bolero de Ravel." },
    { q: "El arte de combinar melodías se llama…", o: ["contrapunto", "armonía", "solfeo"], a: 0, e: "Base de la polifonía." },
    { q: "Cantar todos la misma melodía a la vez es cantar al…", o: ["unísono", "canon", "contrapunto"], a: 0, e: "Monodia." },
  ]),
  examen: mezcla([
    { q: "¿En qué textura se entiende peor el texto?", o: ["polifonía", "homofonía", "monodia"], a: 0, e: "Cada voz canta las sílabas en un momento distinto." },
    { q: "La polifonía alcanzó su esplendor en…", o: ["el Renacimiento", "el siglo XX", "la Prehistoria"], a: 0, e: "Palestrina, Victoria." },
    { q: "El «Canon en re» de Pachelbel combina imitación con…", o: ["un bajo ostinato", "una monodia", "un bordón de gaita"], a: 0, e: "El bajo se repite." },
  ]),
  feynman: ["Qué es la textura y en qué hay que fijarse", "Diferencia entre homofonía y melodía acompañada", "Qué es la polifonía y por qué se entiende peor el texto", "Cómo funciona un canon", "Diferencia entre bordón y ostinato"],
  mapa: mapa("TEXTURA", "var(--eso)", [
    ["Monodia", "una melodía", "var(--pen)"],
    ["Melodía acompañada", "principal + acordes", "var(--red)"],
    ["Homofonía", "voces en bloque", "var(--sun)"],
    ["Polifonía", "voces independientes", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Textura", "Forma de combinar las líneas sonoras simultáneas."],
    ["Monodia", "Una sola melodía sin acompañamiento."],
    ["Unísono", "Varias personas cantan lo mismo a la vez."],
    ["Melodía acompañada", "Melodía principal con acompañamiento."],
    ["Homofonía", "Varias voces con el mismo ritmo, en bloque."],
    ["Polifonía", "Varias melodías independientes a la vez."],
    ["Canon", "Misma melodía con entradas escalonadas."],
    ["Ostinato", "Diseño breve que se repite continuamente."],
  ],
  familias: ["Cantad en canon una canción conocida («Frère Jacques», «Martinillo»).", "Al escuchar la radio, intentad decir si la textura es melodía acompañada u otra.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Textura musical: monodia, homofonía, melodía acompañada y polifonía; canon, imitación, bordón y ostinato; reconocimiento auditivo en obras de distintas épocas (RD 217/2022, Música, escucha y percepción).",
    ideas: ["Cantar el mismo fragmento en las cuatro texturas.", "Musicograma por colores de una fuga sencilla.", "Crear ostinatos con instrumental Orff para acompañar una canción."],
  },
  fuentes: [RD, { t: "Biblioteca Nacional de España: música en la Biblioteca Digital Hispánica", url: "https://www.bne.es/es/colecciones/musica" }],
  revisado: REV,
  ejemplosTitulo: "Audiciones analizadas",
  ejemplos: [
    { enunciado: "Escuchas un coro de monjes que canta en latín, todos la misma melodía, sin instrumentos. ¿Qué textura es?", pasos: ["Hay una sola línea melódica.", "Aunque cantan muchos, hacen lo mismo (unísono).", "No hay acompañamiento."], resultado: "Monodia (canto gregoriano)." },
    { enunciado: "Un coro canta un himno: soprano, contralto, tenor y bajo pronuncian cada sílaba a la vez con notas distintas.", pasos: ["Varias voces.", "Mismo ritmo, en bloque.", "El texto se entiende bien."], resultado: "Homofonía." },
    { enunciado: "En una obra, el bajo repite cuatro notas sin parar mientras los violines tocan melodías que se imitan. Describe la textura.", pasos: ["Varias líneas independientes que se imitan: polifonía.", "El bajo repetido es un ostinato.", "Ejemplo real: «Canon en re» de Pachelbel."], resultado: "Polifonía imitativa sobre un bajo ostinato." },
  ],
  errores: [
    "Pensar que si canta mucha gente ya no es monodia.",
    "Confundir homofonía (todas las voces con el mismo ritmo) con melodía acompañada (una voz destaca).",
    "Creer que en la polifonía cada voz canta una canción distinta sin relación.",
    "Confundir el bordón (nota fija) con el ostinato (diseño que se repite).",
    "Pensar que una obra tiene siempre una única textura de principio a fin.",
  ],
  ejercicios: [
    { q: "Define textura musical con tus palabras.", sol: "La manera en que se combinan las voces o instrumentos que suenan a la vez." },
    { q: "Indica la textura: un grupo de amigos canta «Cumpleaños feliz» sin instrumentos.", sol: "Monodia (al unísono)." },
    { q: "Indica la textura: una cantante con un piano que toca acordes.", sol: "Melodía acompañada." },
    { q: "¿Por qué en la homofonía el texto se entiende bien?", sol: "Porque todas las voces pronuncian las mismas sílabas a la vez." },
    { q: "Nombra dos compositores de polifonía renacentista.", sol: "Palestrina, Tomás Luis de Victoria, Josquin des Prez…" },
    { q: "Explica qué es un canon y pon un ejemplo.", sol: "Varias voces cantan la misma melodía con entradas escalonadas; «Frère Jacques»." },
    { q: "¿Qué instrumento tradicional español hace bordón?", sol: "La gaita (con el roncón) o la zanfoña." },
    { q: "Inventa un ostinato rítmico de un compás de 4/4 para acompañar una canción.", sol: "Ejemplo: negra, dos corcheas, negra, silencio de negra, repetido." },
    { q: "Diferencia entre contrapunto y armonía.", sol: "El contrapunto combina melodías independientes; la armonía estudia los acordes y sus enlaces." },
    { q: "Escucha una canción actual y describe cómo cambia la textura entre la estrofa y el estribillo.", sol: "Respuesta abierta (suele añadirse coro o más instrumentos en el estribillo)." },
  ],
};
