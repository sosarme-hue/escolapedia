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
      svg: svg("Comunicación verbal con palabras y no verbal con el cuerpo", `${tit("Comunicar")}${cj2(12, 40, 112, 120, "Verbal", "con palabras: hablar y escribir", COL.azul)}${cj2(136, 40, 112, 120, "No verbal", "con el cuerpo: gesto, postura, mirada", COL.naranja)}`),
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
      svg: svg("Representar una escena como una foto fija en grupo", `${tit("Foto fija")}<rect x="20" y="36" width="220" height="118" rx="6" fill="none" stroke="var(--ink)" stroke-width="3"/>${suelo(148)}${nino(70, 148, { pose: "arriba", s: 0.95, c: COL.rojo })}${nino(120, 148, { pose: "palmas", s: 0.95, c: COL.verde, nina: true })}${nino(170, 148, { pose: "baila", s: 0.95, c: COL.azul })}${nino(210, 148, { pose: "canta", s: 0.95, c: COL.morado, nina: true })}${tx(130, 172, "«¡Un cumpleaños!»", 180, { weight: 700 })}`),
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
