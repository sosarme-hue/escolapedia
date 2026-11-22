// Educación Física 4º de Primaria: expresión corporal. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, nino, suelo, corazon, estrella } = require("./_pri4b");

// Cara sencilla con una emoción.
const cara = (x, y, emo, c) => {
  const boca = { alegria: `<path d="M${x - 9} ${y + 5} q9 9 18 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/>`, tristeza: `<path d="M${x - 9} ${y + 10} q9 -8 18 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/>`, enfado: `<path d="M${x - 8} ${y + 8} h16" stroke="var(--ink)" stroke-width="2.5"/>`, miedo: `<ellipse cx="${x}" cy="${y + 8}" rx="4" ry="6" fill="var(--ink)"/>`, sorpresa: `<circle cx="${x}" cy="${y + 8}" r="5" fill="var(--ink)"/>` }[emo];
  const cejas = emo === "enfado" ? `<path d="M${x - 12} ${y - 12} l8 4 M${x + 12} ${y - 12} l-8 4" stroke="var(--ink)" stroke-width="2.5"/>` : emo === "tristeza" || emo === "miedo" ? `<path d="M${x - 12} ${y - 8} l8 -4 M${x + 12} ${y - 8} l-8 -4" stroke="var(--ink)" stroke-width="2.5"/>` : "";
  return `<circle cx="${x}" cy="${y}" r="20" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/><circle cx="${x - 7}" cy="${y - 3}" r="2.5" fill="var(--ink)"/><circle cx="${x + 7}" cy="${y - 3}" r="2.5" fill="var(--ink)"/>${cejas}${boca}`;
};

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Expresión corporal",
  minutos: 50,
  objetivos: ["Comprender que el cuerpo es un medio para comunicar ideas, emociones y sentimientos", "Expresar emociones con el gesto, la postura y la mirada", "Usar el espacio, el tiempo y la intensidad del movimiento para expresar", "Moverse al ritmo de la música y crear pequeñas coreografías", "Representar personajes y situaciones con mimo y dramatización, respetando a los demás"],
  claves: ["expresión corporal", "comunicación no verbal", "gesto", "postura", "mirada", "emociones", "mimo", "dramatización", "ritmo", "danza", "coreografía", "espacio", "desinhibición"],
  pregunta: {
    texto: "Sin decir ni una palabra, ¿podrías hacer que tus compañeros adivinen que tienes frío, que estás muy contento o que llevas una mochila muy pesada?",
    respuesta: "¡Claro que sí! Nuestro cuerpo <mark>comunica</mark> todo el rato, aunque no hablemos. Con los <b>gestos</b> de la cara, la <b>postura</b>, la forma de movernos y la mirada podemos expresar emociones, ideas y situaciones. Eso es la <b>expresión corporal</b>: usar el cuerpo como un lenguaje.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la expresión corporal?</h3><p>La <mark>expresión corporal</mark> es la capacidad de usar el <b>cuerpo</b> para comunicar ideas, emociones y sentimientos, sin usar palabras o acompañándolas.</p><p>Los seres humanos nos comunicamos de muchas formas. Hablamos y escribimos, que es la comunicación <b>verbal</b>. Pero también nos comunicamos con el cuerpo: es la <mark>comunicación no verbal</mark>. Muchas veces el cuerpo dice más que las palabras. Si alguien dice «estoy bien» con la cabeza baja, los hombros caídos y la mirada triste, ¿le crees?</p><p>Con la expresión corporal:</p><p>• Conocemos mejor nuestro cuerpo y nuestras <b>emociones</b>.<br>• Aprendemos a <b>comunicarnos</b> y a entender lo que sienten los demás.<br>• Desarrollamos la <b>creatividad</b> y la imaginación.<br>• Perdemos la vergüenza, ganamos <b>confianza</b> y nos relacionamos mejor con los compañeros.<br>• Nos divertimos jugando a ser otros personajes.</p><p>En la expresión corporal no hay movimientos correctos ni incorrectos. Lo importante es expresarse con libertad, crear y disfrutar. Por eso es fundamental <b>respetar</b> a los compañeros: nadie se ríe de nadie.</p>`,
      svg: svg("Comunicación verbal con palabras y no verbal con el cuerpo", `${tit("Comunicar")}${[[12, "Verbal", COL.azul, ["con palabras:", "hablar", "escribir"]], [136, "No verbal", COL.naranja, ["con el cuerpo:", "gesto, mirada", "postura"]]].map(([x, n, c, l]) => `<rect x="${x}" y="40" width="112" height="120" rx="10" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-width="2"/>${et(x + 56, 66, n, 96, { size: 13, color: c })}${l.map((s, i) => tx(x + 56, 96 + i * 22, s, 100)).join("")}`).join("")}`),
    },
    {
      html: `<h3>El cuerpo comunica</h3><p>Hay varios elementos del cuerpo que usamos para comunicar:</p><p>• El <mark>gesto</mark> de la <b>cara</b>: es lo más expresivo. Con las cejas, los ojos, la boca y la frente mostramos alegría, tristeza, enfado, sorpresa o asco. La cara tiene más de cuarenta músculos.</p><p>• La <mark>mirada</mark>: mirar a los ojos muestra atención y confianza; bajar la mirada puede indicar vergüenza o tristeza; mirar hacia otro lado, desinterés.</p><p>• La <mark>postura</mark>: la posición de todo el cuerpo. Erguido y con el pecho abierto transmite seguridad; encogido, miedo o frío; con los brazos cruzados, enfado o que no queremos escuchar.</p><p>• Los <b>gestos de las manos</b>: saludar, decir que no con el dedo, pedir silencio, señalar, aplaudir, el pulgar hacia arriba… Algunos gestos significan cosas distintas en otros países.</p><p>• El <b>contacto</b>: un abrazo, una palmada en la espalda o darse la mano.</p><p>• La <b>distancia</b>: nos acercamos más a las personas de confianza y guardamos más distancia con los desconocidos.</p><p>Juego: un compañero dice una frase neutra, como «¿Qué hora es?», con distintas posturas y gestos. ¿Cambia lo que transmite?</p>`,
      svg: svg("Posturas que comunican: seguridad y tristeza", `${tit("La postura habla")}${suelo(150)}${nino(70, 150, { pose: "arriba", s: 1.3, c: COL.verde })}<g transform="rotate(12 190 150)">${nino(190, 150, { pose: "pie", s: 1.15, c: COL.azul, boca: "cerrada" })}</g>${et(70, 168, "seguridad, alegría", 120, { size: 10.5, color: "#15803d" })}${et(190, 168, "tristeza, cansancio", 120, { size: 10.5, color: COL.azul })}`),
    },
    {
      html: `<h3>Expresar emociones</h3><p>Las <mark>emociones</mark> son lo que sentimos ante lo que nos pasa. Hay seis emociones básicas que todas las personas del mundo expresamos con gestos parecidos:</p><p>• <b>Alegría</b>: sonrisa, ojos brillantes, movimientos ligeros y rápidos, ganas de saltar.<br>• <b>Tristeza</b>: comisuras de la boca hacia abajo, mirada baja, hombros caídos, movimientos lentos y pesados.<br>• <b>Enfado</b> o ira: ceño fruncido, puños y mandíbula apretados, movimientos bruscos y fuertes.<br>• <b>Miedo</b>: ojos muy abiertos, cuerpo encogido, retroceder, temblar.<br>• <b>Sorpresa</b>: cejas levantadas, boca abierta, un pequeño salto hacia atrás.<br>• <b>Asco</b>: arrugar la nariz, apartar la cara.</p><p>Expresar las emociones es <b>sano</b>. No hay emociones buenas ni malas: todas son normales. Lo importante es reconocerlas y expresarlas sin hacer daño a nadie.</p><p>Juego del <b>dado de las emociones</b>: se lanza un dado gigante con una emoción en cada cara, y hay que caminar por el espacio expresando esa emoción con todo el cuerpo. Después se puede cambiar: «camina como si estuvieras triste… y de repente te dan una buena noticia».</p>`,
      svg: svg("Caras con cinco emociones: alegría, tristeza, enfado, miedo y sorpresa", `${tit("Emociones básicas")}${[["alegria", "alegría", COL.sol], ["tristeza", "tristeza", COL.azul], ["enfado", "enfado", COL.rojo], ["miedo", "miedo", COL.morado], ["sorpresa", "sorpresa", COL.verde]].map(([e, n, c], i) => { const x = 32 + i * 49; return `${cara(x, 92, e, c)}${et(x, 130, n, 48, { size: 10, color: c })}`; }).join("")}`),
      video: vid("qBZSlGo4N1k"),
    },
    {
      html: `<h3>El mimo</h3><p>El <mark>mimo</mark> es una forma de expresión en la que se cuenta algo usando <b>solo el cuerpo</b>, sin palabras y normalmente sin objetos reales. El mimo hace que el público «vea» cosas que no existen.</p><p>Algunas técnicas de mimo:</p><p>• <b>La pared invisible</b>: apoya las palmas de las manos en el aire como si hubiera un cristal, y muévelas sin atravesarlo.<br>• <b>La cuerda</b>: tira de una cuerda imaginaria, mano sobre mano, inclinando el cuerpo hacia atrás por el esfuerzo.<br>• <b>Los objetos imaginarios</b>: coger una taza caliente, comer un helado que gotea, ponerse unos zapatos que aprietan. Fíjate en el tamaño, el peso y la forma de cada objeto.<br>• <b>El peso</b>: levantar una maleta muy pesada o una pluma muy ligera. El cuerpo entero debe mostrar la diferencia.</p><p>Los mimos clásicos llevan la cara pintada de blanco para que se vean mejor los gestos.</p><p>Juego de las <b>adivinanzas mímicas</b>: cada uno representa con mimo una profesión, un deporte, un animal o una acción de la vida diaria (lavarse los dientes, cocinar, pescar…) y los demás tienen que adivinarla. Quien acierta, sale a representar la siguiente.</p>`,
      svg: svg("Un mimo empuja una pared invisible", `${tit("El mimo")}${suelo(150)}${nino(110, 150, { pose: "brazos", s: 1.4, c: "var(--ink)" })}<path d="M148 50 V150" stroke="${COL.agua}" stroke-width="3" stroke-dasharray="6 5"/>${tx(200, 90, "pared invisible", 90, { color: COL.azul, weight: 700 })}${tx(130, 170, "sin palabras, sin objetos", 200)}`),
    },
    {
      html: `<h3>El espacio, el tiempo y la intensidad</h3><p>Un mismo movimiento puede expresar cosas muy distintas según cómo lo hagamos. Hay tres elementos que podemos cambiar:</p><p>• El <mark>espacio</mark>: podemos movernos en un <b>nivel alto</b> (de puntillas, con los brazos arriba), <b>medio</b> (de pie normal) o <b>bajo</b> (agachados, tumbados, a ras del suelo). Podemos ir hacia delante, hacia atrás, de lado, en línea recta, en curva o en zigzag. Y ocupar mucho espacio, con movimientos amplios, o poco, con movimientos pequeños.</p><p>• El <mark>tiempo</mark>: movimientos <b>rápidos</b> o <b>lentos</b>, continuos o con pausas. Un movimiento a cámara lenta puede expresar tristeza, cansancio o misterio; uno rápido, alegría, nervios o prisa.</p><p>• La <mark>intensidad</mark> o energía: movimientos <b>fuertes</b> y enérgicos, como dar un pisotón, o <b>suaves</b> y delicados, como acariciar a un gatito.</p><p>Juego de los <b>contrastes</b>: anda por el espacio como si fueras un gigante (alto, lento, fuerte), luego como un ratón (bajo, rápido, suave), luego como un robot (movimientos cortados) y, por último, como si flotaras en el espacio. ¡Combina los elementos para crear tus propios personajes!</p>`,
      svg: svg("Niveles del espacio: alto, medio y bajo", `${tit("Niveles")}${suelo(150)}${nino(50, 150, { pose: "arriba", s: 1.2, c: COL.azul })}${nino(130, 150, { pose: "brazos", s: 1.1, c: COL.verde })}${nino(210, 150, { pose: "agacha", s: 1.1, c: COL.naranja })}${["alto", "medio", "bajo"].map((s, i) => et(50 + i * 80, 168, s, 60, { size: 11, color: [COL.azul, COL.verde, COL.naranja][i] })).join("")}`),
    },
    {
      html: `<h3>El ritmo y la música</h3><p>El <mark>ritmo</mark> es la repetición ordenada de sonidos y silencios, o de movimientos, en el tiempo. Todos tenemos ritmos en el cuerpo: los latidos del corazón, la respiración, los pasos al andar.</p><p>Para moverse con música hay que <b>escuchar</b> bien y encontrar el <b>pulso</b>: el latido regular de la música, ese que seguimos sin darnos cuenta dando golpecitos con el pie. Una vez que encuentras el pulso, es más fácil moverse a su ritmo.</p><p>Actividades con ritmo:</p><p>• <b>Percusión corporal</b>: hacer ritmos con el propio cuerpo, con palmas, chasquidos de dedos, golpes en los muslos y en el pecho, y pisotones. Por ejemplo: pie, pie, palma; pie, pie, palma.<br>• <b>Andar al pulso</b>: caminar por el espacio dando un paso con cada pulso. Si la música va rápida, andamos deprisa; si va lenta, despacio.<br>• <b>Los ecos</b>: uno hace un ritmo con palmas y los demás lo repiten.<br>• <b>Las estatuas musicales</b>: bailar libremente mientras suena la música y quedarse quietos como estatuas cuando para.</p><p>Moverse con ritmo mejora la coordinación, la atención y la memoria, ¡y además es muy divertido!</p>`,
      svg: svg("Percusión corporal: pie, pie, palma", `${tit("Percusión corporal")}${flujo([["pie", COL.azul], ["pie", COL.azul], ["palma", COL.rojo], ["pausa", COL.gris]], 46, 36, 10, 240)}${suelo(160)}${nino(130, 160, { pose: "palmas", s: 1, c: COL.rojo })}${tx(206, 120, "repite y acelera", 90, { weight: 700 })}`),
    },
    {
      html: `<h3>La danza</h3><p>La <mark>danza</mark> es una forma de expresión en la que el cuerpo se mueve siguiendo el ritmo de la música. Existe en todas las culturas del mundo desde la Prehistoria, y se baila para celebrar, para contar historias o simplemente para divertirse.</p><p>Hay muchos tipos de danza:</p><p>• <b>Danzas populares y tradicionales</b>: las que se bailan en las fiestas de cada lugar. En España tenemos muchísimas: la jota (Aragón y otras zonas), la muiñeira (Galicia), la sardana (Cataluña), la sevillana y el flamenco (Andalucía), el aurresku (País Vasco), la isa (Canarias) o el chotis (Madrid).<br>• <b>Danzas del mundo</b>: de otros países, como la danza del vientre, el tango argentino o las danzas africanas.<br>• <b>Danza clásica</b> o ballet, con pasos muy precisos.<br>• <b>Bailes modernos</b>: hip hop, funky, zumba…</p><p>Una <mark>coreografía</mark> es una secuencia de pasos y movimientos ordenados para bailar con una música concreta. Para crear una con tu grupo:</p><p>1. Elegid una música y escuchadla varias veces.<br>2. Inventad unos pasos sencillos para cada parte.<br>3. Practicad hasta hacerlos a la vez.<br>4. ¡Presentadla al resto de la clase!</p>`,
      svg: svg("Danzas tradicionales de España", `${tit("Danzas de España")}${filas([["Jota", "Aragón y otras", COL.rojo], ["Muiñeira", "Galicia", COL.azul], ["Sardana", "Cataluña", COL.sol], ["Sevillanas", "Andalucía", COL.verde], ["Isa", "Canarias", COL.morado]], 46, 26, { wa: 80, wb: 130 })}`),
    },
    {
      html: `<h3>La dramatización</h3><p>La <mark>dramatización</mark> consiste en representar una historia o una situación como si fuéramos actores, usando el cuerpo, la voz y a veces objetos y disfraces. Es como el teatro.</p><p>Para dramatizar hay que:</p><p>• <b>Meterse en el personaje</b>: pensar cómo es, cómo se mueve, cómo habla y qué siente. No anda igual un anciano que un bebé, un superhéroe que un ladrón despistado.<br>• Usar todo el cuerpo: la cara, la postura, la forma de caminar.<br>• Hablar alto y claro, mirando al público.<br>• Respetar los turnos y escuchar a los compañeros de escena.</p><p>Actividades de dramatización:</p><p>• <b>Las fotos fijas</b>: por grupos, representar con el cuerpo quieto una escena, como si fuera una fotografía: «un cumpleaños», «una tormenta en el barco», «el primer día de colegio».<br>• <b>Cuentos motores</b>: el profesor lee un cuento inventado y todos van representando lo que pasa: subimos una montaña, cruzamos un río saltando piedras, nos escondemos de un oso…<br>• <b>Los personajes</b>: cada grupo inventa una pequeña escena con un principio, un problema y un final, y la representa.</p><p>La dramatización ayuda a ponerse en el lugar de otra persona: se llama <b>empatía</b>.</p>`,
      svg: svg("Representar una escena como una foto fija en grupo", `${tit("Foto fija")}<rect x="20" y="34" width="220" height="114" rx="6" fill="none" stroke="var(--ink)" stroke-width="3"/>${suelo(142)}${nino(70, 142, { pose: "arriba", s: 0.95, c: COL.rojo })}${nino(120, 142, { pose: "palmas", s: 0.95, c: COL.verde, nina: true })}${nino(170, 142, { pose: "baila", s: 0.95, c: COL.azul })}${nino(210, 142, { pose: "canta", s: 0.95, c: COL.morado, nina: true })}${tx(130, 166, "«¡Un cumpleaños!»", 180, { weight: 700 })}`),
      video: vid("dKfbBVEDM7A"),
    },
    {
      html: `<h3>Crear y respetar</h3><p>Para disfrutar de la expresión corporal hace falta un ambiente de <b>confianza</b>. Al principio, a muchas personas les da vergüenza bailar o actuar delante de los demás. ¡Es normal! Poco a poco, con juegos y en un grupo donde nadie se burla, la vergüenza desaparece. Esto se llama <mark>desinhibición</mark>.</p><p>Normas para un buen clima en clase:</p><p>• <b>Nadie se ríe de nadie</b>. Nos reímos con los demás, no de los demás.<br>• Todas las ideas son válidas. No hay movimientos feos ni bonitos, sino distintos.<br>• Cuando un grupo actúa, el resto es un <b>público respetuoso</b>: mira en silencio y aplaude al final.<br>• Se trabaja en <b>equipo</b>: todos aportan ideas y se escucha a todos.<br>• Se respeta el espacio de los compañeros para no chocar.</p><p>Consejos para ser más creativo:</p><p>• Observa cómo se mueven las personas, los animales y las cosas a tu alrededor: el viento en los árboles, una hoja que cae, un gato que se despereza.<br>• No copies siempre lo primero que se te ocurre: busca otra forma de hacerlo.<br>• Combina los elementos: rápido y bajo, lento y alto, fuerte y en zigzag…</p><p>La expresión corporal es un espacio para ser tú mismo y descubrir todo lo que puedes contar con tu cuerpo.</p>`,
      svg: svg("Normas de respeto en la expresión corporal", `${tit("Clima de confianza", COL.verde)}${filas([["Respeto", "nadie se ríe de nadie", COL.rojo], ["Ideas", "todas valen", COL.sol], ["Público", "mira y aplaude", COL.azul], ["Equipo", "todos aportan", COL.verde]], 52, 32, { wa: 70, wb: 150 })}`),
    },
  ],
  figura: {
    titulo: "La expresión corporal en ocho ideas",
    svg: rejilla([
      ["Expresión", "comunicar con el cuerpo", COL.naranja],
      ["Gesto", "cara, manos, mirada", COL.azul],
      ["Emociones", "alegría, miedo, enfado…", COL.rojo],
      ["Mimo", "sin palabras ni objetos", COL.gris],
      ["Espacio", "alto, medio, bajo", COL.verde],
      ["Ritmo", "pulso y palmas", COL.morado],
      ["Danza", "jota, muiñeira…", COL.sol],
      ["Respeto", "nadie se ríe de nadie", COL.agua],
    ], 4, 86, "Resumen de la expresión corporal"),
  },
  video: vgen("dLRF-C7MCl0", "expresión corporal para niños"),
  ejemplos: [
    { enunciado: "¿Qué emoción expresa alguien con el ceño fruncido y los puños apretados?",
      pasos: ["Ceño fruncido y tensión son señales de enfado."],
      resultado: "Enfado." },
    { enunciado: "Quieres representar a un gigante. ¿Qué nivel, velocidad e intensidad usas?",
      pasos: ["Un gigante es grande: nivel alto.", "Se mueve con calma: lento.", "Pisa con fuerza: fuerte."],
      resultado: "Alto, lento y fuerte." },
    { enunciado: "Haces el ritmo «pie, pie, palma» cuatro veces. ¿Cuántas palmas das?",
      pasos: ["Hay una palma en cada serie.", "4 × 1 = 4."],
      resultado: "4 palmas (y 8 pisotones)." },
  ],
  errores: [
    "Pensar que solo comunicamos cuando hablamos.",
    "Reírse de un compañero que actúa o baila.",
    "Creer que hay movimientos correctos e incorrectos en la expresión libre.",
    "En el mimo, olvidar el peso y el tamaño de los objetos imaginarios.",
    "Bailar sin escuchar la música ni buscar el pulso.",
  ],
  ejercicios: [
    { q: "¿Qué es la expresión corporal?", sol: "Usar el cuerpo para comunicar ideas, emociones y sentimientos." },
    { q: "¿Qué diferencia hay entre comunicación verbal y no verbal?", sol: "La verbal usa palabras; la no verbal, el cuerpo: gestos, postura, mirada." },
    { q: "Escribe cuatro elementos del cuerpo que comunican.", sol: "Gesto de la cara, mirada, postura, manos, contacto, distancia (cuatro)." },
    { q: "Nombra las seis emociones básicas.", sol: "Alegría, tristeza, enfado, miedo, sorpresa y asco." },
    { q: "Describe cómo se expresa el miedo con el cuerpo.", sol: "Ojos muy abiertos, cuerpo encogido, retroceder, temblar." },
    { q: "¿Qué es el mimo? Escribe una técnica.", sol: "Contar algo solo con el cuerpo, sin palabras ni objetos; por ejemplo, la pared invisible." },
    { q: "Explica los tres niveles del espacio.", sol: "Alto (de puntillas), medio (de pie) y bajo (agachado o tumbado)." },
    { q: "¿Qué es el pulso de la música?", sol: "El latido regular que se sigue con el pie." },
    { q: "Escribe tres danzas tradicionales de España y su lugar.", sol: "Jota (Aragón), muiñeira (Galicia), sardana (Cataluña), sevillanas (Andalucía), isa (Canarias)." },
    { q: "Escribe tres normas para un buen clima en expresión corporal.", sol: "Nadie se ríe de nadie, todas las ideas valen, ser público respetuoso, trabajar en equipo." },
  ],
  quiz: [
    { q: "Comunicar con el cuerpo es comunicación…", o: ["verbal", "no verbal", "escrita"], a: 1, e: "No verbal." },
    { q: "Lo más expresivo del cuerpo es…", o: ["la cara", "el codo", "la rodilla"], a: 0, e: "La cara." },
    { q: "Hombros caídos y mirada baja indican…", o: ["alegría", "tristeza", "sorpresa"], a: 1, e: "Tristeza." },
    { q: "Cejas levantadas y boca abierta indican…", o: ["sorpresa", "enfado", "asco"], a: 0, e: "Sorpresa." },
    { q: "Contar algo sin palabras ni objetos es el…", o: ["mimo", "canto", "deporte"], a: 0, e: "El mimo." },
    { q: "Agachado o tumbado es el nivel…", o: ["alto", "medio", "bajo"], a: 2, e: "Bajo." },
    { q: "El latido regular de la música es el…", o: ["pulso", "volumen", "silencio"], a: 0, e: "El pulso." },
    { q: "La muiñeira es de…", o: ["Galicia", "Aragón", "Canarias"], a: 0, e: "Galicia." },
    { q: "Una secuencia de pasos para una música es una…", o: ["coreografía", "retahíla", "jugada"], a: 0, e: "Coreografía." },
    { q: "Ponerse en el lugar del otro es…", o: ["empatía", "ritmo", "postura"], a: 0, e: "Empatía." },
  ],
  examen: [
    { q: "Perder la vergüenza poco a poco se llama…", o: ["desinhibición", "relajación", "lateralidad"], a: 0, e: "Desinhibición." },
    { q: "La sardana es de…", o: ["Cataluña", "Andalucía", "Galicia"], a: 0, e: "Cataluña." },
    { q: "Representar una escena quietos como en una foto es una…", o: ["foto fija", "carrera", "estatua de sal"], a: 0, e: "Foto fija." },
    { q: "Un movimiento a cámara lenta puede expresar…", o: ["cansancio o misterio", "prisa", "nervios"], a: 0, e: "Cansancio, tristeza o misterio." },
  ],
  feynman: ["Cómo comunica el cuerpo con el gesto, la mirada y la postura", "Cómo se expresan las emociones y cómo se hace mimo", "Cómo usar el espacio, el tiempo, el ritmo y la danza para expresar"],
  mapa: mapa("EXPRESIÓN CORPORAL", "var(--pri)", [
    ["Comunicar", "gesto · postura · mirada", COL.azul],
    ["Emociones", "alegría · miedo · enfado", COL.rojo],
    ["Mimo y teatro", "pared invisible · foto fija", COL.gris],
    ["Ritmo y danza", "pulso · coreografía", COL.morado],
  ], 250),
  tarjetas: [
    ["Expresión corporal", "Comunicar con el cuerpo."],
    ["Comunicación no verbal", "La que se hace sin palabras."],
    ["Postura", "Posición del cuerpo que también comunica."],
    ["Emociones básicas", "Alegría, tristeza, enfado, miedo, sorpresa y asco."],
    ["Mimo", "Representar sin palabras ni objetos reales."],
    ["Pulso", "Latido regular de la música."],
    ["Coreografía", "Secuencia de pasos para una música."],
    ["Dramatización", "Representar una historia como actores."],
  ],
  familias: ["Jugad en casa a las adivinanzas mímicas de películas o profesiones.", "Bailad juntos una canción e inventad una coreografía corta.", "Buscad un vídeo de una danza tradicional de vuestra comunidad.", "Probad a contar cómo os ha ido el día solo con gestos."],
  profesores: PROF("Educación Física: expresión corporal y comunicación no verbal; emociones; mimo y dramatización; ritmo, danza y coreografías sencillas; desinhibición y respeto", ["Dado de las emociones para desplazamientos expresivos.", "Cuento motor inventado por la clase.", "Coreografías por grupos con presentación final."]),
  fuentes: [RD, wiki("Expresión corporal", "Expresión_corporal"), wiki("Comunicación no verbal", "Comunicación_no_verbal")],
  revisado: REV,
};

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Descubrir que los gestos cambian según la cultura", "Conocer a grandes artistas del mimo y del cine mudo", "Bailar y reconocer danzas tradicionales de España", "Crear historias con sombras y juegos de expresión"],
  lectura: { titulo: "El mimo de la plaza", html: `<p>La plaza estaba llena de gente. Lía y su hermano Pablo paseaban con su madre cuando vieron un corro de personas que se reían.</p><p>En el centro había un hombre con la cara pintada de blanco, una camiseta de rayas y unos guantes blancos. No decía ni una palabra.</p><p>De pronto, el mimo hizo como si se encontrara con una pared invisible. Puso las manos planas delante y las fue moviendo arriba, abajo, a un lado… ¡No había salida! Luego descubrió una puerta imaginaria, giró un pomo que no existía y salió por ella con cara de alivio.</p><p>Después eligió a Pablo entre el público. Le dio una cuerda invisible y empezaron a tirar cada uno de un lado. Pablo se lo tomó muy en serio: echaba el cuerpo hacia atrás y apretaba los dientes. Cuando el mimo «soltó» la cuerda, Pablo se dejó caer sentado al suelo y todo el mundo aplaudió.</p><p>—¿Cómo puede ser que veamos cosas que no están? —preguntó Lía de camino a casa.</p><p>—Porque el mimo mueve el cuerpo con tanta <b>precisión</b> que nuestra imaginación pone el resto —le explicó su madre—. Es como leer un libro: tú imaginas lo que las palabras te cuentan. El mimo cuenta con el cuerpo.</p><p>Esa tarde, Lía y Pablo se pasaron horas en el salón inventando paredes invisibles, escaleras imaginarias y globos que se los llevaban volando.</p>` },
  tras: {
    "El cuerpo comunica": [
      ["Los gestos en el mundo", `<p>Muchos <mark>gestos</mark> parecen universales, pero no lo son: su significado cambia de un país a otro. Por eso hay que tener cuidado cuando viajamos o hablamos con personas de otras culturas. Algunos ejemplos curiosos:</p><ul><li><b>Decir que sí con la cabeza</b>: en España movemos la cabeza de arriba abajo. En <b>Bulgaria</b>, ese gesto puede significar «no», y el movimiento de lado a lado, «sí».</li><li><b>El pulgar hacia arriba</b>: en la mayoría de los países significa «bien» o «de acuerdo», pero en algunos lugares puede ser ofensivo.</li><li><b>Saludar</b>: en España damos dos besos o la mano; en <b>Japón</b> se hace una <b>reverencia</b> inclinando el cuerpo; en la India se juntan las manos delante del pecho; los maoríes de Nueva Zelanda juntan la nariz y la frente (el <i>hongi</i>).</li><li><b>Contar con los dedos</b>: en España solemos empezar por el pulgar, mientras que en otros países se empieza por el índice.</li><li><b>La distancia</b>: en algunos países la gente se acerca mucho al hablar; en otros, prefieren mantener más espacio.</li></ul><p>Lo que sí entendemos en todo el mundo son las <b>expresiones de la cara</b> de las emociones básicas: una sonrisa de alegría o una cara de miedo se reconocen en todas partes.</p>`,
        L6.filas("Saludos", [["España", "dos besos o la mano", cRO], ["Japón", "reverencia", cAZ], ["India", "manos juntas", cNA], ["Nueva Zelanda", "nariz y frente", cVE]])],
    ],
    "El mimo": [
      ["Grandes mimos y el cine mudo", `<p>El arte de contar sin palabras tiene grandes <mark>maestros</mark>:</p><ul><li><b>Marcel Marceau</b> (1923-2007) fue el mimo más famoso del mundo. Era francés y creó un personaje llamado <b>Bip</b>, con la cara blanca, una camiseta de rayas y un sombrero con una flor roja. Sus números más conocidos son «caminar contra el viento» y «la jaula», en la que va descubriendo paredes invisibles que se cierran a su alrededor.</li><li><b>Charlie Chaplin</b> (1889-1977) fue una estrella del <b>cine mudo</b>, cuando las películas no tenían sonido. Su personaje, <b>Charlot</b>, llevaba bombín, bastón, bigote y unos zapatos enormes. Hacía reír solo con sus gestos y su forma de andar.</li><li><b>Buster Keaton</b> era conocido como «el cara de palo» porque nunca sonreía, aunque le pasaran las cosas más disparatadas.</li></ul><p>En el cine mudo, los actores tenían que <b>exagerar los gestos</b> para que el público entendiera la historia. A veces aparecían carteles con un poco de texto, y en la sala tocaba un pianista en directo.</p><p>Hoy, el mimo sigue vivo en los artistas callejeros, en el circo y en los payasos. Prueba a contar en clase una pequeña historia como si fuera una película muda.</p>`,
        H6.dos("Sin palabras", ["MARCEAU", ["mimo francés", "personaje Bip", "la jaula"], cAZ], ["CHAPLIN", ["cine mudo", "personaje Charlot", "bombín y bastón"], cNA]), ["XEsfpRrfXf4", "Le Mime Marceau", "Capuseen", 1812287]],
    ],
    "La danza": [
      ["Danzas tradicionales de España", `<p>Cada región de España tiene sus <mark>danzas tradicionales</mark>, que se bailan en fiestas y celebraciones desde hace siglos. Algunas de las más conocidas son:</p><ul><li>La <b>jota</b>: se baila en Aragón, Navarra, Castilla, Valencia y otras zonas. Es alegre y saltarina, con castañuelas.</li><li>La <b>sardana</b>: típica de Cataluña. Se baila en <b>corro</b>, cogidos de las manos, con pasos cortos y largos. Cualquiera puede unirse al círculo.</li><li>Las <b>sevillanas</b>: de Andalucía. Se bailan por parejas y tienen cuatro partes, llamadas «coplas».</li><li>La <b>muiñeira</b>: de Galicia, al son de la <b>gaita</b> y la pandereta.</li><li>El <b>aurresku</b>: danza vasca de honor, con saltos y patadas muy altas, al son del txistu.</li><li>Las <b>isas</b>: de Canarias, alegres y en grupo.</li><li>El <b>fandango</b> y la <b>seguidilla</b>, que se bailan en muchos lugares.</li></ul><p>Las danzas tradicionales tienen <b>trajes</b> típicos, <b>instrumentos</b> propios y suelen bailarse en grupo, así que unen a la gente del pueblo o del barrio.</p><p>Pregunta en casa qué danzas son típicas de tu comunidad y aprende algún paso.</p>`,
        L6.filas("Danzas", [["jota", "Aragón", cRO], ["sardana", "Cataluña", cAZ], ["sevillanas", "Andalucía", cNA], ["muiñeira", "Galicia", cVE]]), ["v_3EiFA37Zw", "Aprenda a bailar sevillanas", "AndaluciaTube", 5672944]],
    ],
  },
  final: [
    ["El teatro de sombras", `<p>El <mark>teatro de sombras</mark> es una forma muy antigua de contar historias. Nació en <b>Asia</b>, en países como China, Indonesia o Turquía, hace más de mil años. Por eso en España se conocen como <b>sombras chinescas</b>.</p><p>Solo hacen falta tres cosas:</p><ul><li>Una <b>fuente de luz</b>: una lámpara, una linterna o un proyector.</li><li>Una <b>pantalla</b>: una sábana blanca tensada o la pared.</li><li>Algo que haga sombra: las <b>manos</b>, el <b>cuerpo</b> o figuras recortadas en cartulina.</li></ul><p>Con las manos puedes hacer muchos animales: un <b>perro</b> (mano de lado con el pulgar hacia arriba como oreja), un <b>pájaro</b> (pulgares cruzados y dedos como alas), un <b>conejo</b> (índice y corazón como orejas)…</p><p>Con el cuerpo entero se pueden representar escenas completas. Algunos trucos:</p><ul><li>Cuanto más <b>cerca de la luz</b> te pones, más <b>grande</b> es la sombra; cuanto más cerca de la pantalla, más pequeña y nítida.</li><li>Ponte de <b>perfil</b>: así la sombra se entiende mejor.</li><li>Exagera los movimientos, como en el mimo.</li></ul><p>Con unos compañeros, preparad una pequeña obra de sombras con música de fondo.</p>`,
      H6.flujo("Sombras", ["luz|lámpara", "cuerpo|o manos", "pantalla|sábana", "historia|con música"], cMO), ["CysUYEI7I34", "Sombras chinas para niños", "unComo", 1747309]],
    ["Juegos de expresión", `<p>Hay muchos <mark>juegos</mark> que nos ayudan a perder la vergüenza y a expresarnos con el cuerpo:</p><ul><li><b>Las estatuas</b>: todos bailan mientras suena la música. Cuando se para, cada uno se queda quieto como una estatua. Se puede indicar un tema: estatuas de animales, de deportistas, de emociones…</li><li><b>El espejo</b>: por parejas, frente a frente. Uno se mueve muy despacio y el otro le imita como si fuera su reflejo. Luego se cambian los papeles.</li><li><b>La máquina humana</b>: un alumno empieza con un movimiento repetitivo y un sonido. Otro se une con un movimiento que encaje, y otro más… hasta formar una gran máquina que funciona en equipo.</li><li><b>¿Quién soy?</b>: alguien representa una profesión o un personaje sin hablar, y los demás adivinan.</li><li><b>Las películas</b>: como el juego de mímica, se representa el título de una película o un cuento.</li><li><b>El escultor</b>: uno hace de escultor y «modela» a su compañero, que es de barro, colocándole los brazos, las piernas y la cara.</li></ul><p>Recuerda las normas: <b>respetar</b> a todos, no reírse de nadie y <b>animar</b> a los compañeros. Lo importante es participar y disfrutar.</p>`,
      H6.rueda("Juegos", "EXPRESIÓN", [["estatuas", cAZ], ["espejo", cVE], ["máquina", cRO], ["escultor", cNA]])],
  ],
  ejemplos: [
    ["Un amigo búlgaro mueve la cabeza de arriba abajo cuando le ofreces un caramelo. ¿Qué puede querer decir?", ["En Bulgaria ese gesto puede significar lo contrario que en España.", "Mejor preguntarle con palabras."], "Que puede estar diciendo que no."],
    ["Quieres que la sombra de tu mano sea más grande. ¿Qué haces?", ["La sombra crece al acercarse a la luz.", "Acerco la mano a la lámpara."], "Acercar la mano a la luz."],
  ],
  errores: ["Pensar que todos los gestos significan lo mismo en todo el mundo.", "Hacer los movimientos pequeños en el mimo o las sombras: hay que exagerarlos para que se entiendan."],
  ejercicios: [
    ["b", "¿Cómo se saluda en Japón?", "Con una reverencia."],
    ["b", "¿Cómo se llamaba el personaje de Marcel Marceau?", "Bip."],
    ["b", "¿De dónde es típica la sardana?", "De Cataluña."],
    ["b", "¿Qué tres cosas necesitas para el teatro de sombras?", "Luz, pantalla y algo que haga sombra."],
    ["b", "Explica el juego del espejo.", "Uno se mueve despacio y el otro le imita como un reflejo."],
    ["m", "¿Por qué los actores del cine mudo exageraban los gestos?", "Porque no había sonido y tenían que hacerse entender."],
    ["m", "¿Qué instrumento acompaña a la muiñeira?", "La gaita (y la pandereta)."],
    ["m", "¿Qué expresiones se entienden en todo el mundo?", "Las de las emociones básicas en la cara."],
    ["m", "¿Por qué se llaman sombras chinescas?", "Porque el teatro de sombras nació en Asia."],
    ["m", "¿En qué consiste la máquina humana?", "Cada uno añade un movimiento y un sonido que encajan."],
    ["a", "Representa una película muda de un minuto con dos compañeros.", "Respuesta abierta."],
    ["a", "Aprende un paso de una danza tradicional de tu comunidad.", "Respuesta abierta."],
    ["a", "Prepara una obra de sombras de un cuento conocido.", "Respuesta abierta."],
    ["a", "Investiga un gesto que signifique algo distinto en otro país.", "Respuesta abierta."],
  ],
  quiz: [
    ["Charlie Chaplin fue estrella del…", ["cine mudo", "teatro de sombras", "ballet"], "Cine mudo."],
    ["La sardana se baila…", ["en corro", "por parejas separadas", "sentados"], "Danzas."],
    ["En el teatro de sombras, cerca de la luz la sombra es…", ["más grande", "más pequeña", "invisible"], "Sombras."],
    ["En Japón se saluda con…", ["una reverencia", "dos besos", "el hongi"], "Gestos."],
    ["En el juego de las estatuas, cuando para la música…", ["te quedas quieto", "corres", "cantas"], "Juegos."],
  ],
  examen: [
    ["En la lectura, ¿qué objeto invisible le dio el mimo a Pablo?", ["una cuerda", "una pared", "un globo"], "Lectura."],
    ["¿Qué danza vasca de honor tiene saltos y patadas altas?", ["el aurresku", "la jota", "las isas"], "Danzas."],
  ],
  tarjetas: [
    ["Gestos del mundo", "Reverencia en Japón, hongi maorí; el sí búlgaro."],
    ["Mimo y cine mudo", "Marceau y Bip; Chaplin y Charlot; exagerar gestos."],
    ["Danzas de España", "Jota, sardana, sevillanas, muiñeira, aurresku, isas."],
    ["Sombras y juegos", "Luz, pantalla y cuerpo; estatuas, espejo, máquina, escultor."],
  ],
  glosario: [
    ["Gesto", "Movimiento del cuerpo o la cara que comunica algo."],
    ["Reverencia", "Saludo inclinando el cuerpo."],
    ["Mimo", "Artista que cuenta historias sin palabras."],
    ["Cine mudo", "Películas antiguas sin sonido."],
    ["Danza tradicional", "Baile típico de un lugar transmitido durante siglos."],
    ["Jota", "Danza alegre y saltarina con castañuelas."],
    ["Sardana", "Danza catalana que se baila en corro."],
    ["Muiñeira", "Danza gallega al son de la gaita."],
    ["Sombras chinescas", "Figuras de sombra hechas con las manos."],
    ["Pantalla", "Superficie donde se proyecta la sombra."],
    ["Perfil", "Vista de lado del cuerpo o la cara."],
    ["Improvisar", "Hacer algo sin haberlo preparado."],
  ],
  situacion: {
    titulo: "Festival sin palabras",
    reto: "La clase organiza un festival en el que todo se cuenta sin decir ni una palabra.",
    pasos: ["Preparar un número de mimo inspirado en Marceau o Chaplin.", "Ensayar una danza tradicional de España en grupo.", "Montar una obra de teatro de sombras con una sábana y una lámpara.", "Presentar el festival a otra clase y recoger sus opiniones."],
    producto: "Un festival con mimo, danza y sombras.",
    evaluacion: ["Comunica ideas y emociones solo con el cuerpo.", "Sigue el ritmo de una danza.", "Usa la luz y el cuerpo para crear sombras.", "Participa con respeto y sin vergüenza."],
  },
});
