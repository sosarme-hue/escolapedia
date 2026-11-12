// Educación Física 6º de Primaria: expresión corporal y danza. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, ciclo, vid, vgen, RD, PROF, nino, suelo, corazon, estrella } = require("./_pri6b");

// Cara sencilla con una emoción: alegría, tristeza, sorpresa o enfado.
function cara(x, y, emo, c) {
  const boca = { alegria: `<path d="M${x - 9} ${y + 5} q9 9 18 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/>`, tristeza: `<path d="M${x - 9} ${y + 10} q9 -8 18 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/>`, sorpresa: `<ellipse cx="${x}" cy="${y + 8}" rx="5" ry="6" fill="var(--ink)"/>`, enfado: `<path d="M${x - 8} ${y + 9} h16" stroke="var(--ink)" stroke-width="2.5"/>` }[emo];
  const cejas = emo === "enfado" ? `<path d="M${x - 12} ${y - 10} l8 4 M${x + 12} ${y - 10} l-8 4" stroke="var(--ink)" stroke-width="2.5"/>` : emo === "tristeza" ? `<path d="M${x - 12} ${y - 6} l8 -4 M${x + 12} ${y - 6} l-8 -4" stroke="var(--ink)" stroke-width="2.5"/>` : emo === "sorpresa" ? `<path d="M${x - 12} ${y - 12} q4 -4 8 0 M${x + 4} ${y - 12} q4 -4 8 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/>` : "";
  return `<circle cx="${x}" cy="${y}" r="22" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="2.5"/><circle cx="${x - 7}" cy="${y - 3}" r="2.6" fill="var(--ink)"/><circle cx="${x + 7}" cy="${y - 3}" r="2.6" fill="var(--ink)"/>${boca}${cejas}`;
}

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Expresión corporal y danza",
  minutos: 50,
  objetivos: ["Comprender qué es la expresión corporal y el lenguaje no verbal", "Usar el gesto, la postura y la mirada para comunicar emociones", "Explorar el espacio, el tiempo y la intensidad del movimiento", "Practicar el mimo, la dramatización y las sombras", "Crear y representar una coreografía en grupo", "Conocer danzas tradicionales de España y del mundo"],
  claves: ["expresión corporal", "lenguaje no verbal", "gesto", "postura", "mímica", "dramatización", "ritmo", "pulso", "danza", "coreografía", "folclore", "desinhibición"],
  pregunta: {
    texto: "Sin decir ni una palabra, ¿puedes contar a tus compañeros que tienes mucho frío, que estás nervioso o que te ha tocado la lotería?",
    respuesta: "¡Claro! Con los <mark>gestos</mark>, la cara, la postura y la forma de moverte, el cuerpo comunica muchísimo. Frotarse los brazos y encogerse expresa frío; mover los pies sin parar y morderse las uñas, nervios; saltar con los brazos arriba, alegría. Eso es la <b>expresión corporal</b>: usar el cuerpo como lenguaje.",
  },
  bloques: [
    {
      html: `<h3>El cuerpo también habla</h3><p>La <mark>expresión corporal</mark> es la capacidad de comunicar ideas, sentimientos y emociones a través del <b>cuerpo</b> y el <b>movimiento</b>, sin necesidad de palabras.</p><p>Cuando hablamos con alguien, no solo nos comunicamos con las palabras (lenguaje verbal). También usamos el <b>lenguaje no verbal</b>:</p><p>• Los <b>gestos</b> de la cara y de las manos: sonreír, fruncir el ceño, señalar, decir adiós.<br>• La <b>mirada</b>: mirar a los ojos, apartar la vista.<br>• La <b>postura</b>: erguida y abierta transmite seguridad; encogida, timidez o tristeza.<br>• La <b>distancia</b> con los demás: no nos acercamos igual a un amigo que a un desconocido.<br>• El <b>contacto</b>: un abrazo, una palmada en el hombro, chocar la mano.</p><p>Muchas veces el lenguaje no verbal dice más que las palabras. Por ejemplo, si alguien dice «estoy bien» con la cabeza agachada y la voz baja, probablemente no lo está.</p><p>Aprender expresión corporal te ayuda a <b>conocerte</b>, a <b>expresar</b> lo que sientes, a <b>entender</b> mejor a los demás, a ganar <b>confianza</b> y a perder la vergüenza.</p>`,
      svg: svg("Elementos del lenguaje no verbal: gestos, mirada, postura, distancia y contacto", `${tit("Lenguaje no verbal")}${fichas([["Gestos", "cara y manos", COL.naranja], ["Mirada", "a los ojos", COL.azul], ["Postura", "abierta o cerrada", COL.verde], ["Distancia", "cerca o lejos", COL.morado], ["Contacto", "abrazo, chocar", COL.rojo], ["Sin palabras", "¡el cuerpo habla!", COL.gris]], 2, 34)}`),
      video: vid("nrhV6EwwC-g"),
    },
    {
      html: `<h3>Expresar emociones con el cuerpo</h3><p>Cada <mark>emoción</mark> se refleja en el cuerpo de una manera que todos reconocemos, en cualquier lugar del mundo:</p><p>• <b>Alegría</b>: sonrisa, ojos brillantes, movimientos amplios, rápidos y hacia arriba, saltos.<br>• <b>Tristeza</b>: mirada baja, hombros caídos, movimientos lentos y pesados, hacia abajo.<br>• <b>Miedo</b>: ojos muy abiertos, cuerpo encogido, movimientos rápidos de huida o quedarse paralizado.<br>• <b>Enfado</b>: ceño fruncido, mandíbula apretada, puños cerrados, movimientos fuertes y bruscos.<br>• <b>Sorpresa</b>: cejas levantadas, boca abierta, un pequeño salto hacia atrás.<br>• <b>Calma</b>: respiración lenta, cuerpo relajado, movimientos suaves y fluidos.</p><p>Un buen ejercicio es el <b>espejo</b>: por parejas, uno hace movimientos lentos expresando una emoción y el otro lo imita a la vez, como si fuera su reflejo. Después se cambian los papeles. Requiere mucha atención y coordinación.</p><p>Otro es el de las <b>estatuas</b>: cuando para la música, todos quedan inmóviles representando la emoción que diga el profesor o profesora, y los demás la adivinan.</p>`,
      svg: svg("Caras que expresan alegría, tristeza, sorpresa y enfado", `${tit("Emociones en la cara")}${cara(40, 82, "alegria", COL.sol)}${cara(100, 82, "tristeza", COL.azul)}${cara(160, 82, "sorpresa", COL.morado)}${cara(220, 82, "enfado", COL.rojo)}${["alegría", "tristeza", "sorpresa", "enfado"].map((w, i) => et(40 + i * 60, 126, w, 60, { size: 10.5, color: [COL.sol, COL.azul, COL.morado, COL.rojo][i] })).join("")}${tx(130, 160, "juego del espejo y de las estatuas", 230, { weight: 700 })}`),
    },
    {
      html: `<h3>Los elementos del movimiento expresivo</h3><p>Un mismo movimiento puede expresar cosas muy diferentes según cómo lo hagamos. Para crear con el cuerpo, se juega con tres <mark>elementos</mark>:</p><p>• El <b>espacio</b>: ¿dónde me muevo?<br>– Espacio personal (alrededor de mi cuerpo, sin desplazarme) o espacio total (desplazándome por la sala).<br>– Niveles: <b>alto</b> (de puntillas, saltando), <b>medio</b> (de pie) y <b>bajo</b> (en el suelo).<br>– Direcciones y trayectorias: adelante, atrás, en línea recta, en círculo, en zigzag.</p><p>• El <b>tiempo</b>: ¿a qué velocidad y con qué ritmo?<br>– Movimientos rápidos o lentos, acelerando o frenando, con pausas, siguiendo un ritmo.</p><p>• La <b>intensidad</b> o energía: ¿con cuánta fuerza?<br>– Movimientos fuertes y enérgicos o suaves y delicados; tensos o relajados; pesados como un elefante o ligeros como una pluma.</p><p>Si combinas estos elementos, un simple paseo puede convertirse en el de un robot (rápido, cortado, tenso), el de un astronauta en la Luna (lento, ligero, a saltos) o el de alguien que camina por un río helado (con cuidado, en nivel medio, con los brazos abiertos).</p>`,
      svg: svg("Elementos del movimiento expresivo: espacio con niveles, tiempo e intensidad", `${tit("Espacio, tiempo, intensidad")}${suelo(150)}${nino(40, 150, { pose: "salta", s: 0.8 })}${nino(96, 150, { pose: "pie", s: 0.8 })}${nino(152, 150, { pose: "agacha", s: 0.6 })}${et(40, 168, "alto", 50, { size: 10.5, color: COL.azul })}${et(96, 168, "medio", 50, { size: 10.5, color: COL.verde })}${et(152, 168, "bajo", 50, { size: 10.5, color: COL.naranja })}${filas([["tiempo", "rápido / lento", COL.morado], ["fuerza", "fuerte / suave", COL.rojo]], 66, 36, { x: 188, wa: 60, wb: 64, dos: true })}`),
    },
    {
      html: `<h3>El mimo y la mímica</h3><p>La <mark>mímica</mark> es el arte de expresarse solo con gestos y movimientos, sin palabras ni sonidos. El <b>mimo</b> es el artista que la practica. Suele llevar la cara pintada de blanco para que se vean mejor sus expresiones y ropa sencilla, a menudo una camiseta de rayas.</p><p>Las técnicas básicas del mimo son:</p><p>• La <b>pared invisible</b>: apoyar las manos abiertas en un muro imaginario, moverlas por su superficie sin atravesarla.<br>• La <b>cuerda</b>: tirar de una cuerda imaginaria que nadie ve, con todo el cuerpo haciendo fuerza.<br>• El <b>caminar en el sitio</b>: parecer que andas sin desplazarte.<br>• La <b>escalera</b>, la <b>caja</b>, el <b>viento</b> fuerte…</p><p>La clave del mimo es la <b>precisión</b>: los objetos imaginarios deben tener siempre el mismo tamaño, peso y forma. Si coges un vaso imaginario, tus dedos deben mantener la distancia de su grosor; si levantas una caja pesada, todo tu cuerpo debe notar el esfuerzo.</p><p>Un juego clásico es el de las <b>películas</b>: un equipo representa con mímica el título de una película, un libro o un oficio, y el resto tiene que adivinarlo.</p>`,
      svg: svg("El mimo empuja una pared invisible con las manos abiertas", `${tit("La pared invisible")}<path d="M150 40 V156" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 5"/>${nino(110, 156, { pose: "brazos", s: 1.3 })}${[60, 76, 92].map((y) => `<rect x="138" y="${y}" width="10" height="12" rx="3" fill="#fcd9b6" stroke="var(--ink)"/>`).join("")}${filas([["precisión", "mismo tamaño", COL.azul], ["exagera", "el gesto", COL.verde], ["silencio", "sin palabras", COL.morado]], 60, 34, { x: 170, wa: 70, wb: 70, dos: true })}`),
      video: vid("Pl8U7TYyvt0"),
    },
    {
      html: `<h3>Dramatizaciones y teatro de sombras</h3><p>Una <mark>dramatización</mark> es la representación de una pequeña historia en la que los participantes interpretan personajes. Puede hacerse con palabras o solo con gestos. Para preparar una:</p><p>1. Elegid o inventad una <b>historia</b> sencilla, con planteamiento, nudo y desenlace.<br>2. Repartid los <b>personajes</b> y pensad cómo se mueve cada uno: un anciano, un superhéroe, un animal, una máquina…<br>3. Decidid el <b>espacio</b>: dónde empieza cada uno, por dónde entra y sale.<br>4. <b>Ensayad</b>, corrigiendo entre todos.<br>5. <b>Representad</b> ante el público con respeto y concentración.</p><p>El <b>teatro de sombras</b> es otra técnica muy divertida. Se coloca una sábana blanca tensa y una luz potente detrás. Los actores se mueven entre la luz y la sábana, y el público, al otro lado, solo ve sus siluetas. Como no se ven las caras, todo se expresa con la forma del cuerpo. Se pueden crear efectos sorprendentes: si te acercas a la luz, tu sombra se hace gigante; si te alejas, pequeña.</p><p>También se pueden hacer <b>sombras chinescas</b> con las manos: un perro, un pájaro, un conejo.</p>`,
      svg: svg("Teatro de sombras: luz, actor, sábana y público", `${tit("Teatro de sombras")}<circle cx="30" cy="90" r="12" fill="var(--sun)"/>${[54, 96, 138].map((y) => `<path d="M42 90 L168 ${y}" stroke="var(--sun)" stroke-opacity=".4" stroke-width="2"/>`).join("")}${nino(110, 150, { pose: "baila", s: 0.9 })}<rect x="168" y="40" width="8" height="112" fill="#e2e8f0" stroke="var(--line)"/><g fill="var(--ink)" stroke="var(--ink)" opacity=".8" stroke-linecap="round"><circle cx="222" cy="62" r="13" stroke="none"/><path d="M222 74 V118 M222 84 L200 62 M222 84 L246 92 M222 118 L206 150 M222 118 L240 140 L246 150" stroke-width="7" fill="none"/></g>${et(30, 120, "luz", 40, { size: 10.5, color: COL.sol })}${et(110, 168, "actor", 50, { size: 10.5, color: COL.azul })}${et(172, 168, "sábana", 60, { size: 10.5, color: COL.gris })}${et(226, 168, "sombra", 50, { size: 10.5 })}`),
    },
    {
      html: `<h3>Ritmo y música</h3><p>El <mark>ritmo</mark> es la repetición ordenada de sonidos y silencios, o de movimientos y pausas. Está en todas partes: en el latido del corazón, en la respiración, en los pasos al caminar y, por supuesto, en la música.</p><p>Para moverse con la música hay que aprender a reconocer:</p><p>• El <b>pulso</b>: el latido regular de la música, lo que marcas con el pie sin darte cuenta.<br>• El <b>acento</b>: el pulso que suena más fuerte, normalmente el primero de cada grupo.<br>• El <b>compás</b>: los grupos de pulsos. Muchas canciones se cuentan de 4 en 4 («1, 2, 3, 4»), otras de 3 en 3, como el vals.<br>• La <b>frase musical</b>: en muchas danzas se cuentan frases de 8 tiempos («5, 6, 7, 8… ¡y empezamos!»).</p><p>Ejercicios para trabajar el ritmo:</p><p>• Caminar al pulso de la música y cambiar de dirección en el acento.<br>• <b>Percusión corporal</b>: crear ritmos con palmas, chasquidos de dedos, golpes en el pecho y en los muslos, y pisadas.<br>• Hacer un eco: uno inventa un ritmo y el grupo lo repite.</p>`,
      svg: svg("Percusión corporal con palmas, chasquidos, muslos y pies contando ocho tiempos", `${tit("Percusión corporal: 8 tiempos")}${["palma", "palma", "muslos", "pie", "palma", "chasq.", "muslos", "pie"].map((w, i) => `<rect x="${12 + i * 30}" y="60" width="26" height="40" rx="5" fill="${[COL.rojo, COL.rojo, COL.azul, COL.verde, COL.rojo, COL.morado, COL.azul, COL.verde][i]}" fill-opacity="${i % 4 === 0 ? 0.55 : 0.25}"/>${t(25 + i * 30, 86, String(i + 1), { size: 14 })}${t(25 + i * 30, 116, w, { size: 8.5, weight: 400 })}`).join("")}${tx(130, 150, "los tiempos 1 y 5 son los acentos", 220, { weight: 700 })}`),
    },
    {
      html: `<h3>La danza y la coreografía</h3><p>La <mark>danza</mark> es una forma de expresión artística en la que el cuerpo se mueve siguiendo un ritmo, normalmente con música. Es una de las artes más antiguas: los seres humanos han bailado siempre, para celebrar, para rezar, para contar historias o para divertirse.</p><p>Una <mark>coreografía</mark> es una danza creada y organizada de antemano: una serie de pasos y movimientos enlazados que se repiten igual cada vez. Para crear una coreografía en grupo:</p><p>1. Elegid una <b>música</b> que os guste y escuchadla bien. Contad sus frases de 8 tiempos.<br>2. Inventad <b>pasos sencillos</b> para cada frase: pasos laterales, giros, palmas, saltos, movimientos de brazos.<br>3. Pensad la <b>formación</b>: en fila, en círculo, en dos grupos enfrentados, en «V».<br>4. Incluid <b>cambios</b>: de nivel, de dirección, de formación, un canon (cada uno empieza un poco después que el anterior).<br>5. Preparad un <b>inicio</b> y un <b>final</b> claros, con una posición quieta.<br>6. <b>Ensayad</b> sin música contando en voz alta, y luego con música.</p><p>Lo más importante no es hacerlo perfecto, sino <b>disfrutar</b>, cooperar y atreverse. ¡Nadie nace sabiendo bailar!</p>`,
      svg: svg("Pasos para crear una coreografía en grupo", `${tit("Crear una coreografía")}${ciclo([["música", COL.morado], ["pasos", COL.azul], ["formación", COL.verde], ["cambios", COL.naranja], ["ensayo", COL.rojo]], 130, 100, 54, 76)}`),
    },
    {
      html: `<h3>Danzas tradicionales</h3><p>Cada región y cada pueblo tienen sus <mark>danzas tradicionales</mark> o folclóricas, que forman parte de su cultura y se transmiten de generación en generación. En España hay una enorme variedad:</p><p>• La <b>jota</b>: se baila en Aragón, Navarra, La Rioja, Valencia, Castilla y otros lugares, con saltos y castañuelas.<br>• La <b>sardana</b>: danza en corro de Cataluña, con las manos cogidas y pasos cortos y largos.<br>• La <b>muiñeira</b>: de Galicia, alegre y rápida, al son de la gaita.<br>• Las <b>sevillanas</b>: de Andalucía, se bailan en pareja y tienen cuatro partes. El <b>flamenco</b>, también andaluz, es Patrimonio Cultural Inmaterial de la Humanidad desde 2010.<br>• El <b>aurresku</b>: danza de honor del País Vasco.<br>• La <b>isa</b>: de Canarias.<br>• El <b>chotis</b>: típico de Madrid, se baila en pareja dando vueltas sobre un ladrillo.</p><p>También podemos aprender danzas de <b>otros países</b>, como el sirtaki griego, la tarantela italiana, danzas africanas o bailes latinos como la salsa. Bailarlas es una forma de conocer y respetar otras culturas.</p>`,
      svg: svg("Danzas tradicionales de España y su región", `${tit("Danzas de España")}${filas([["jota", "Aragón y otras", COL.rojo], ["sardana", "Cataluña", COL.azul], ["muiñeira", "Galicia", COL.verde], ["sevillanas", "Andalucía", COL.naranja], ["aurresku", "País Vasco", COL.morado]], 50, 25, { wa: 80, wb: 120 })}`),
    },
    {
      html: `<h3>Perder la vergüenza y respetar</h3><p>En las actividades de expresión es normal sentir <b>vergüenza</b> al principio: tenemos miedo de hacer el ridículo o de que se rían de nosotros. Para que todos se sientan cómodos, el grupo debe crear un <mark>clima de confianza</mark>:</p><p>• <b>Nadie se ríe de nadie</b>. Nos reímos con los demás, nunca de los demás.<br>• Se <b>valora el esfuerzo</b> y la originalidad, no la perfección.<br>• Se <b>escucha</b> y se respetan las ideas de todos al crear en grupo.<br>• Como público, se mira con <b>atención</b> y se aplaude al terminar.<br>• Se dan opiniones <b>constructivas</b>: primero lo que te ha gustado, luego una sugerencia.</p><p>Trucos para soltarse:</p><p>• Empieza con ejercicios en grupo, donde nadie te mira a ti solo.<br>• Concéntrate en lo que haces, no en quién te mira.<br>• Exagera los movimientos: en expresión, más es mejor.<br>• Recuerda que todos están en la misma situación.</p><p>La expresión corporal también ayuda a <b>relajarse</b>: al final de la sesión, unos minutos tumbados escuchando música tranquila y respirando despacio sientan de maravilla.</p>`,
      svg: svg("Normas del grupo para crear un clima de confianza", `${tit("Clima de confianza")}${corazon(130, 70, 2.2)}${filas([["nadie se ríe", "de nadie", COL.rojo], ["valoramos", "el esfuerzo", COL.verde], ["aplaudimos", "al terminar", COL.azul]], 108, 22, { x: 40, wa: 90, wb: 100 })}`),
    },
  ],
  figura: {
    titulo: "Expresión corporal y danza en ocho ideas",
    svg: rejilla([
      ["No verbal", "gestos y postura", COL.naranja],
      ["Emociones", "alegría, tristeza…", COL.sol],
      ["Espacio", "niveles alto-bajo", COL.verde],
      ["Tiempo", "rápido o lento", COL.morado],
      ["Mimo", "sin palabras", COL.gris],
      ["Ritmo", "pulso y acento", COL.azul],
      ["Coreografía", "pasos en orden", COL.rojo],
      ["Folclore", "jota, sardana…", COL.marron],
    ], 4, 86, "Resumen de expresión corporal y danza"),
  },
  video: vgen("INo1pQLskVA", "danza fácil para niños en clase"),
  ejemplos: [
    { enunciado: "Representa a un robot y a una medusa. ¿Cómo cambian el tiempo y la intensidad?",
      pasos: ["Robot: movimientos rápidos, cortados, tensos y rectos.", "Medusa: movimientos lentos, continuos, suaves y ondulados."],
      resultado: "Robot: rápido y fuerte. Medusa: lento y suave." },
    { enunciado: "Una canción tiene 4 frases de 8 tiempos. ¿Cuántos tiempos hay que contar en total?",
      pasos: ["4 × 8 = 32."],
      resultado: "32 tiempos." },
    { enunciado: "Un compañero dice «¡qué bien!» con los brazos cruzados y mirando al suelo. ¿Qué crees que siente?",
      pasos: ["Las palabras dicen alegría.", "Su cuerpo dice lo contrario: brazos cerrados y mirada baja.", "El lenguaje no verbal suele ser más sincero."],
      resultado: "Probablemente no está contento: quizá esté molesto o triste." },
  ],
  errores: [
    "Pensar que la expresión corporal es «hacer el payaso»: es un lenguaje con técnica.",
    "Reírse de los compañeros cuando actúan.",
    "Hacer gestos tan pequeños que el público no los entiende.",
    "Cambiar el tamaño de los objetos imaginarios en el mimo.",
    "Bailar sin escuchar la música: hay que encontrar el pulso primero.",
  ],
  ejercicios: [
    { q: "¿Qué es la expresión corporal?", sol: "La capacidad de comunicar ideas y emociones con el cuerpo y el movimiento, sin palabras." },
    { q: "Escribe cuatro elementos del lenguaje no verbal.", sol: "Gestos, mirada, postura y distancia (también contacto)." },
    { q: "Describe cómo expresarías con el cuerpo el miedo y la alegría.", sol: "Miedo: cuerpo encogido, ojos abiertos. Alegría: movimientos amplios hacia arriba, sonrisa, saltos." },
    { q: "¿Cuáles son los tres niveles del espacio?", sol: "Alto, medio y bajo." },
    { q: "Explica el juego del espejo.", sol: "Por parejas, uno hace movimientos lentos y el otro los imita a la vez como su reflejo." },
    { q: "Escribe dos técnicas de mimo.", sol: "La pared invisible y la cuerda (también caminar en el sitio)." },
    { q: "¿Cómo funciona el teatro de sombras?", sol: "Una luz detrás de una sábana proyecta las siluetas de los actores que se mueven entre ambas." },
    { q: "¿Qué diferencia hay entre pulso y acento?", sol: "El pulso es el latido regular de la música; el acento, el pulso que suena más fuerte." },
    { q: "Escribe los pasos para crear una coreografía.", sol: "Elegir música, inventar pasos, decidir formación, añadir cambios, inicio y final, y ensayar." },
    { q: "Escribe tres danzas tradicionales de España y de dónde son.", sol: "Jota (Aragón), sardana (Cataluña), muiñeira (Galicia)." },
  ],
  quiz: [
    { q: "Comunicar con gestos y postura es lenguaje…", o: ["verbal", "escrito", "no verbal"], a: 2, e: "No verbal." },
    { q: "La tristeza se expresa con…", o: ["brazos arriba", "saltos", "hombros caídos"], a: 2, e: "Hombros caídos y movimientos lentos." },
    { q: "Moverse tumbado en el suelo es el nivel…", o: ["alto", "medio", "bajo"], a: 2, e: "Bajo." },
    { q: "Fuerte o suave se refiere a la…", o: ["intensidad", "distancia", "dirección"], a: 0, e: "Intensidad." },
    { q: "El artista que se expresa sin palabras es el…", o: ["cantante", "mimo", "locutor"], a: 1, e: "El mimo." },
    { q: "En el teatro de sombras el público ve…", o: ["las caras", "el escenario vacío", "las siluetas"], a: 2, e: "Las siluetas." },
    { q: "El latido regular de la música es el…", o: ["silencio", "volumen", "pulso"], a: 2, e: "El pulso." },
    { q: "Una danza con pasos organizados de antemano es una…", o: ["estatua", "coreografía", "improvisación"], a: 1, e: "Coreografía." },
    { q: "La sardana es de…", o: ["Canarias", "Cataluña", "Galicia"], a: 1, e: "Cataluña." },
    { q: "En expresión corporal, cuando un compañero actúa…", o: ["lo miramos con respeto", "nos reímos de él", "hablamos"], a: 0, e: "Con respeto y aplauso." },
  ],
  examen: [
    { q: "Es Patrimonio de la Humanidad desde 2010 el…", o: ["vals", "flamenco", "chotis"], a: 1, e: "El flamenco." },
    { q: "La muiñeira se baila al son de la…", o: ["batería", "gaita", "guitarra eléctrica"], a: 1, e: "La gaita." },
    { q: "Crear ritmos con palmas y pies es…", o: ["mimo", "percusión corporal", "estiramiento"], a: 1, e: "Percusión corporal." },
    { q: "Empezar cada uno un poco después que el anterior es un…", o: ["acento", "nivel", "canon"], a: 2, e: "Un canon." },
  ],
  feynman: ["Cómo comunica el cuerpo sin palabras", "Cómo cambian el espacio, el tiempo y la intensidad un movimiento", "Cómo se crea una coreografía en grupo"],
  mapa: mapa("EXPRESIÓN", "var(--pri)", [
    ["Comunicar", "gesto · mirada · postura", COL.naranja],
    ["Elementos", "espacio · tiempo · intensidad", COL.verde],
    ["Técnicas", "mimo · dramatización · sombras", COL.gris],
    ["Danza", "ritmo · coreografía · folclore", COL.morado],
  ], 260),
  tarjetas: [
    ["Expresión corporal", "Comunicar con el cuerpo y el movimiento."],
    ["Lenguaje no verbal", "Gestos, mirada, postura, distancia y contacto."],
    ["Niveles del espacio", "Alto, medio y bajo."],
    ["Mimo", "Artista que se expresa solo con gestos."],
    ["Dramatización", "Representación de una historia con personajes."],
    ["Pulso", "Latido regular de la música."],
    ["Coreografía", "Serie de pasos de danza organizados."],
    ["Folclore", "Danzas y tradiciones populares de un lugar."],
  ],
  familias: ["Jugad a las películas con mímica después de cenar.", "Preguntad a los abuelos qué bailes tradicionales conocen y aprended uno.", "Inventad un ritmo de percusión corporal y grabadlo.", "Haced sombras chinescas con las manos y una linterna."],
  profesores: PROF("Educación Física: el cuerpo expresivo; lenguaje corporal y comunicación no verbal; elementos del movimiento (espacio, tiempo, intensidad); mimo, dramatización y sombras; ritmo y percusión corporal; creación de coreografías grupales; danzas del patrimonio cultural", ["Teatro de sombras con historias inventadas por los grupos.", "Coreografía grupal de 32 tiempos con cambios de formación y nivel.", "Taller de danzas tradicionales con la colaboración de las familias."]),
  fuentes: [RD, wiki("Expresión corporal", "Expresión_corporal"), wiki("Coreografía", "Coreografía"), { t: "UNESCO: el flamenco, patrimonio inmaterial", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" }],
  revisado: REV,
};
