// Lengua Castellana 1º de Primaria: sinónimos y antónimos. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { parejas, frase, charla, lista, mural, vid } = require("./_peque");
const { PROF, FUENTES } = require("./_pri1");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "1-primaria",
  titulo: "Sinónimos y antónimos",
  minutos: 20,
  objetivos: ["Saber que hay palabras que significan casi lo mismo", "Encontrar la palabra contraria de otra", "Usar sinónimos y antónimos para hablar y escribir mejor"],
  claves: ["sinónimo", "antónimo", "contrario", "significado"],
  pregunta: {
    texto: "Si un amigo está «contento», ¿qué otra palabra podrías decir? ¿Y lo contrario de «contento»?",
    respuesta: "Podrías decir <b>alegre</b>: significa casi lo mismo. Es un <mark>sinónimo</mark>. Lo contrario es <b>triste</b>: es un <mark>antónimo</mark>.",
  },
  bloques: [
    {
      html: `<h3>Palabras amigas</h3><p>Algunas palabras significan <mark>casi lo mismo</mark>. Se llaman <b>sinónimos</b>.</p><p><i>Contento</i> y <i>alegre</i> son sinónimos. <i>Bonito</i> y <i>precioso</i>, también.</p><p>Son como dos amigos que se parecen mucho. Si cambias una por la otra, la frase dice lo mismo: «Estoy contento» o «Estoy alegre». ¿Notas alguna diferencia? ¡Casi ninguna!</p>`,
      svg: parejas("Contento es igual que alegre; bonito es igual que precioso; empezar es igual que comenzar", [[null, "contento", null, "alegre"], [null, "bonito", null, "precioso"], [null, "empezar", null, "comenzar"]], { izq: "palabra", der: "sinónimo", color: A, color2: V, flecha: "=" }),
      video: vid("jWeVsB5n7qQ", "Los sinónimos para niños: palabras con el mismo significado", "Smile and Learn - Español", 976327, 8696),
    },
    {
      html: `<h3>Más sinónimos</h3><p>Hay muchos sinónimos que ya usas sin darte cuenta.</p><p><i>Andar</i> y <i>caminar</i>. <i>Mirar</i> y <i>observar</i>. <i>Coche</i> y <i>automóvil</i>. <i>Cara</i> y <i>rostro</i>.</p><p>Algunos son más fáciles y otros más difíciles. Cuantos más sinónimos conoces, <mark>más rico es tu vocabulario</mark>. ¡Es como tener más colores para pintar! Pide a un adulto que te enseñe uno nuevo cada día.</p>`,
      svg: parejas("Andar es caminar; coche es automóvil; cara es rostro", [["nino", "andar", "nino", "caminar"], ["coche", "coche", "coche", "automóvil"], ["nina", "cara", "nina", "rostro"]], { izq: "palabra", der: "sinónimo", color: A, color2: V, flecha: "=" }),
    },
    {
      html: `<h3>Sinónimos para no repetir</h3><p>Al escribir, a veces repetimos mucho una palabra: «El perro es <b>bonito</b>. Su collar es <b>bonito</b>».</p><p>Con un sinónimo, el texto <mark>suena mejor</mark>: «El perro es bonito. Su collar es <b>precioso</b>».</p><p>Los buenos escritores buscan palabras amigas para no aburrir al lector. ¡Tú también puedes hacerlo! Lee lo que escribes y busca palabras repetidas.</p>`,
      svg: frase("Bonito repetido dos veces se cambia por bonito y precioso", [["bonito", R], ["…", "var(--muted)"], ["bonito", R], ["/"], ["bonito", V], ["…", "var(--muted)"], ["precioso", V]], { titulo: "Para no repetir", nota: "Un sinónimo y suena mejor", fs: 22 }),
    },
    {
      html: `<h3>Palabras contrarias</h3><p>Otras palabras dicen <mark>lo contrario</mark>. Se llaman <b>antónimos</b>.</p><p><i>Grande</i> es lo contrario de <i>pequeño</i>. <i>Alto</i> es lo contrario de <i>bajo</i>.</p><p>Un elefante es grande y una hormiga es pequeña. Los antónimos nos ayudan a <b>comparar</b> cosas muy distintas. Son como dos puntas de una cuerda: cada una en un lado.</p>`,
      svg: parejas("Grande es lo contrario de pequeño: un elefante y una hormiga", [["elefante", "grande", "hormiga", "pequeño"]], { izq: "palabra", der: "antónimo", color: A, color2: R, flecha: "↔" }),
      video: vid("148UXakrNpA", "Los sinónimos y los antónimos", "Happy Learning Español", 4418088, 54978),
    },
    {
      html: `<h3>Muchos contrarios</h3><p>Los antónimos están por todas partes.</p><p>El <i>día</i> y la <i>noche</i>. El <i>frío</i> y el <i>calor</i>. <i>Rápido</i> y <i>lento</i>.</p><p>El coche va rápido y la tortuga va lenta. En invierno hace frío y en verano hace calor. Busca contrarios en tu día: <i>despierto</i> y <i>dormido</i>, <i>lleno</i> y <i>vacío</i>.</p>`,
      svg: parejas("Día y noche, frío y calor, rápido y lento", [["sol", "día", "luna", "noche"], ["nieve", "frío", "sol", "calor"], ["coche", "rápido", "tortuga", "lento"]], { izq: "palabra", der: "antónimo", color: A, color2: R, flecha: "↔" }),
    },
    {
      html: `<h3>Contrarios de lo que hacemos</h3><p>También hay acciones contrarias.</p><p><i>Abrir</i> y <i>cerrar</i>. <i>Subir</i> y <i>bajar</i>. <i>Entrar</i> y <i>salir</i>. <i>Reír</i> y <i>llorar</i>.</p><p>Algunas se forman con un trocito delante: <i>hacer</i> y <i>deshacer</i>, <i>atar</i> y <i>desatar</i>. Ese trocito, <mark>des-</mark>, da la vuelta a la palabra. Prueba con <i>vestir</i>: ¡desvestir!</p>`,
      svg: parejas("Abrir y cerrar, subir y bajar, atar y desatar", [[null, "abrir", null, "cerrar"], [null, "subir", null, "bajar"], [null, "atar", null, "desatar"]], { izq: "acción", der: "contraria", color: A, color2: R, flecha: "↔" }),
    },
    {
      html: `<h3>¿Sinónimo o antónimo?</h3><p>Para saberlo, haz una pregunta: <mark>¿dicen lo mismo o lo contrario?</mark></p><p><i>Feliz</i> y <i>contento</i> dicen lo mismo: son <b>sinónimos</b>. <i>Feliz</i> y <i>triste</i> dicen lo contrario: son <b>antónimos</b>.</p><p>Un truco: los sinónimos son <b>amigos</b> que se parecen. Los antónimos son <b>opuestos</b>, como el blanco y el negro.</p>`,
      svg: lista("Sinónimos dicen lo mismo, como feliz y contento; antónimos dicen lo contrario, como feliz y triste", [["Sinónimos: = lo mismo", V], ["feliz = contento", V], ["Antónimos: ↔ lo contrario", R], ["feliz ↔ triste", R]], { titulo: "¿Lo mismo o lo contrario?", marca: "n" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con sinónimos y antónimos <mark>explicamos mejor</mark> las cosas.</p><p>Si alguien no entiende una palabra, le damos un sinónimo: «<i>enorme</i> quiere decir muy grande».</p><p>Con antónimos describimos diferencias: «Mi hermano es alto y yo soy bajo». También sirven para inventar adivinanzas y juegos de palabras.</p>`,
      svg: charla("Una niña pregunta qué significa enorme y un niño responde: muy grande, lo contrario de diminuto", [["nina", "¿Qué es «enorme»?", R], ["nino", "Muy, muy grande.", A], ["nina", "¿Y lo contrario?", R], ["nino", "¡Diminuto!", A]]),
    },
    {
      html: `<h3>Jugamos a los contrarios</h3><p>Un jugador dice una palabra y hace un gesto: «¡<b>Grande</b>!», con los brazos abiertos.</p><p>El otro dice <mark>el contrario</mark> con otro gesto: «¡<b>Pequeño</b>!», agachado.</p><p>Seguid con <i>alto</i>, <i>rápido</i>, <i>arriba</i> o <i>abierto</i>. Quien tarda mucho en contestar, cambia de papel. ¡Os reiréis un montón!</p>`,
      svg: charla("Juego de contrarios: grande y pequeño, arriba y abajo", [["nino", "¡Grande!", A], ["nina", "¡Pequeño!", R], ["nino", "¡Arriba!", A], ["nina", "¡Abajo!", R]]),
    },
  ],
  figura: {
    titulo: "Palabras amigas y palabras contrarias",
    svg: mural("Sinónimos: contento y alegre, andar y caminar. Antónimos: grande y pequeño, día y noche", [["nina", "contento", "sinónimo: alegre", V], ["nino", "andar", "sinónimo: caminar", V], ["elefante", "grande", "antónimo: pequeño", R], ["sol", "día", "antónimo: noche", R]], "Sinónimos (=) dicen lo mismo; antónimos (↔) dicen lo contrario"),
  },
  video: { ...vid("mOB0T6_ayo8", "Los sinónimos y los antónimos: ¿cuál es la diferencia?", "Smile and Learn - Español", 1079262, 12712), busqueda: "sinónimos y antónimos para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Busca un sinónimo de «hablar».",
      pasos: ["Piensa qué hacemos al hablar: decimos cosas con la voz.", "Busca otra palabra que diga lo mismo.", "Prueba en una frase: «Mis amigos charlan en el patio»."],
      resultado: "un sinónimo de «hablar» es «charlar»." },
    { enunciado: "Busca el antónimo de «lleno».",
      pasos: ["Imagina un vaso lleno de agua.", "Ahora imagina que nos lo bebemos todo.", "¿Cómo queda el vaso? Vacío."],
      resultado: "el antónimo de «lleno» es «vacío»." },
    { enunciado: "¿«Alto» y «bajo» son sinónimos o antónimos?",
      pasos: ["Pregunta: ¿dicen lo mismo o lo contrario?", "Alto es mucha altura; bajo es poca altura.", "Dicen lo contrario."],
      resultado: "son antónimos." },
  ],
  errores: [
    "Confundir sinónimos y antónimos: sinónimo = lo mismo; antónimo = lo contrario.",
    "Creer que todo sinónimo sirve en cualquier frase: elige el que encaja mejor.",
    "Dar como contrario una palabra que solo es distinta: el contrario de «perro» no es «gato».",
    "Olvidar que des- también forma contrarios: atar y desatar.",
  ],
  ejercicios: [
    { q: "Sinónimo de «contento».", sol: "Alegre o feliz." },
    { q: "Sinónimo de «andar».", sol: "Caminar." },
    { q: "Antónimo de «grande».", sol: "Pequeño." },
    { q: "Antónimo de «día».", sol: "Noche." },
    { q: "Antónimo de «abrir».", sol: "Cerrar." },
    { q: "Antónimo de «rápido».", sol: "Lento." },
    { q: "¿Sinónimos o antónimos? «frío» y «calor».", sol: "Antónimos." },
    { q: "¿Sinónimos o antónimos? «bonito» y «precioso».", sol: "Sinónimos." },
    { q: "Forma el contrario con des-: «hacer».", sol: "Deshacer." },
    { q: "Haz el gesto de «arriba» y de su contrario.", sol: "Brazos hacia arriba y luego hacia abajo: arriba y abajo." },
  ],
  quiz: [
    { q: "Los sinónimos dicen…", o: ["lo mismo", "lo contrario", "un número"], a: 0, e: "Casi lo mismo." },
    { q: "Los antónimos dicen…", o: ["lo mismo", "lo contrario", "un color"], a: 1, e: "Lo contrario." },
    { q: "Sinónimo de «alegre»:", o: ["triste", "contento", "lento"], a: 1, e: "contento." },
    { q: "Antónimo de «alto»:", o: ["bajo", "grande", "largo"], a: 0, e: "bajo." },
    { q: "Antónimo de «noche»:", o: ["luna", "día", "estrella"], a: 1, e: "día." },
    { q: "«Coche» y «automóvil» son…", o: ["sinónimos", "antónimos", "contrarios"], a: 0, e: "Dicen lo mismo." },
    { q: "Antónimo de «subir»:", o: ["saltar", "bajar", "correr"], a: 1, e: "bajar." },
    { q: "Antónimo de «atar»:", o: ["desatar", "anudar", "coser"], a: 0, e: "des- + atar." },
    { q: "«Reír» y «llorar» son…", o: ["sinónimos", "antónimos", "iguales"], a: 1, e: "Son contrarios." },
    { q: "Sinónimo de «empezar»:", o: ["terminar", "comenzar", "parar"], a: 1, e: "comenzar." },
  ],
  examen: [
    { q: "Antónimo de «lleno»:", o: ["vacío", "grande", "rico"], a: 0, e: "vacío." },
    { q: "Sinónimo de «bonito»:", o: ["feo", "precioso", "pequeño"], a: 1, e: "precioso." },
    { q: "«Frío» y «calor» son…", o: ["sinónimos", "antónimos", "nombres de persona"], a: 1, e: "Contrarios." },
    { q: "Antónimo de «entrar»:", o: ["salir", "pasar", "correr"], a: 0, e: "salir." },
  ],
  feynman: ["Qué es un sinónimo", "Qué es un antónimo", "Cómo saber si dos palabras son sinónimas o antónimas"],
  mapa: mapa("SINÓNIMOS Y ANTÓNIMOS", "var(--pri)", [
    ["Sinónimos", "lo mismo: contento = alegre", V],
    ["Antónimos", "lo contrario: día ↔ noche", R],
    ["Con des-", "atar ↔ desatar", A],
    ["Sirven para", "no repetir y comparar", N],
  ], 230),
  tarjetas: [
    ["¿Qué es un sinónimo?", "Una palabra que dice casi lo mismo"],
    ["¿Qué es un antónimo?", "Una palabra que dice lo contrario"],
    ["Sinónimo de «caminar»", "Andar"],
    ["Antónimo de «grande»", "Pequeño"],
    ["Antónimo de «frío»", "Calor"],
    ["Antónimo de «abrir»", "Cerrar"],
    ["Sinónimo de «contento»", "Alegre"],
    ["Antónimo de «hacer»", "Deshacer"],
  ],
  familias: [
    "Jugad a los contrarios con gestos: grande, pequeño, arriba, abajo.",
    "Cuando use mucho una palabra, buscad juntos una palabra amiga para cambiarla.",
    "Al mirar fotos o la calle, buscad contrarios: alto y bajo, lleno y vacío.",
    "Leed cuentos y preguntad: «¿Cómo lo dirías con otra palabra?».",
  ],
  profesores: PROF("Vocabulario: relaciones de significado entre palabras, sinónimos y antónimos, y su uso para enriquecer la expresión oral y escrita", ["Dominó de contrarios con dibujos.", "Juego de mímica: el alumnado representa el antónimo.", "Rincón de palabras amigas para no repetir en los textos."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
