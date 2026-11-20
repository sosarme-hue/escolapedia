// Educación Física, 1º de Bachillerato. Tema 7, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Figuras de acrosport: base, ágil y ayudante.
const acro = B.lienzo("Figura de acrosport: dos bases en cuadrupedia, un ágil de pie sobre sus caderas y un ayudante que protege", `
  <path d="M30 150 H 230" stroke="var(--line)" stroke-width="2"/>
  <path d="M44 150 L 52 120 L 96 120 L 104 150 M52 120 L 46 150" fill="none" stroke="var(--pen)" stroke-width="4" stroke-linecap="round"/><circle cx="44" cy="114" r="8" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <path d="M120 150 L 128 120 L 172 120 L 180 150 M172 120 L 176 150" fill="none" stroke="var(--pen)" stroke-width="4" stroke-linecap="round"/><circle cx="182" cy="114" r="8" fill="none" stroke="var(--pen)" stroke-width="3"/>
  <path d="M96 120 L 104 82 M128 120 L 116 82 M110 82 V 52 M110 64 L 84 46 M110 64 L 136 46" fill="none" stroke="var(--red)" stroke-width="4" stroke-linecap="round"/><circle cx="110" cy="42" r="9" fill="none" stroke="var(--red)" stroke-width="3"/>
  <path d="M220 150 V 110 M220 120 L 200 100 M220 120 L 204 128" fill="none" stroke="var(--leaf)" stroke-width="4" stroke-linecap="round"/><circle cx="220" cy="100" r="8" fill="none" stroke="var(--leaf)" stroke-width="3"/>
  ${B.tx(74, 170, "base", { fs: 11, maxW: 40, bold: true, color: "var(--pen)" })}${B.tx(150, 170, "base", { fs: 11, maxW: 40, bold: true, color: "var(--pen)" })}${B.tx(150, 40, "ágil", { fs: 11, maxW: 40, bold: true, color: "var(--red)" })}${B.tx(222, 170, "ayudante", { fs: 11, maxW: 60, bold: true, color: "var(--leaf)" })}`, "");

// Frase musical: 8 tiempos agrupados.
const tiempos = B.lienzo("Una frase musical de ocho tiempos: el primero es el más fuerte; las coreografías se cuentan de ocho en ocho", `
  ${[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => { const x = 24 + i * 29, fuerte = n === 1 || n === 5; return `<circle cx="${x + 10}" cy="80" r="${fuerte ? 12 : 8}" fill="${n === 1 ? "var(--red)" : fuerte ? "var(--sun)" : "var(--pen)"}" fill-opacity="${fuerte ? 1 : 0.6}"/>${B.tx(x + 10, 112, n, { fs: 12, maxW: 16, bold: true })}`; }).join("")}
  <path d="M24 130 H 248" stroke="var(--muted)" stroke-width="1.5"/>
  ${B.tx(136, 34, "«5, 6, 7, 8... ¡y!» para empezar", { fs: 11, maxW: 220, bold: true })}
  ${B.tx(136, 152, "4 frases de 8 = un bloque de 32 tiempos", { fs: 10.5, maxW: 230, color: "var(--muted)" })}`, "");

module.exports = B.tema({
  titulo: "Expresión corporal y montajes artísticos",
  minutos: 100,
  objetivos: [
    "Comprender el cuerpo como medio de comunicación y conocer los elementos del movimiento expresivo",
    "Utilizar técnicas de expresión (mimo, dramatización, improvisación) y adaptar el movimiento a la música",
    "Diseñar y ejecutar en grupo una coreografía o un montaje de acrosport con seguridad",
    "Gestionar las emociones y la desinhibición, y valorar el trabajo creativo propio y ajeno con respeto",
  ],
  claves: ["expresión corporal", "comunicación no verbal", "espacio", "tiempo", "energía", "mimo", "improvisación", "ritmo", "danza", "coreografía", "acrosport", "montaje artístico"],
  pregunta: {
    texto: "Sin decir una palabra, ¿podrías contar una historia completa solo con tu cuerpo?",
    respuesta: "Sí. El cuerpo comunica constantemente: la postura, los gestos, la mirada, la distancia o la forma de moverse transmiten emociones e intenciones. El mimo, la danza o el teatro físico <mark>cuentan historias sin palabras</mark>, y el público las entiende. Aprender a usar el cuerpo con intención te sirve en el escenario, pero también en una entrevista, una exposición oral o una conversación difícil.",
  },
  lectura: {
    titulo: "Lo que dice un cuerpo",
    html: `<p>Charles Chaplin rodó la mayoría de sus películas sin sonido y, sin embargo, millones de personas de todo el mundo se reían y se emocionaban con su vagabundo. Sus andares, su forma de ladear el sombrero o de esconderse tras una farola lo decían todo. Un siglo después, coreógrafos, actores y bailarines siguen estudiando cómo un simple gesto puede llenar un escenario.</p>
    <p>No hace falta ser artista para comunicar con el cuerpo. Todos lo hacemos sin darnos cuenta: cruzamos los brazos cuando algo no nos convence, nos acercamos a quien nos cae bien, bajamos la mirada cuando tenemos vergüenza. Las personas que nos escuchan perciben todo eso, a veces más que nuestras palabras.</p>
    <p>En este tema vas a explorar el cuerpo como herramienta expresiva y creativa. Trabajarás la improvisación, el ritmo, la danza y el acrosport, y terminarás creando con tu grupo un montaje artístico. Al principio quizá cueste soltarse; es normal. El objetivo no es hacerlo perfecto, sino <b>atreverse, crear y disfrutar</b> en un ambiente de respeto.</p>`,
  },
  secciones: [3, 5, 4],
  bloques: [
    {
      h: "Qué es la expresión corporal",
      html: `<p>La <b>expresión corporal</b> es la capacidad de comunicar ideas, emociones y sensaciones a través del cuerpo y del movimiento. En Educación Física se entiende como un conjunto de actividades que buscan:</p>
      <ul><li><b>Conocer el propio cuerpo</b> y sus posibilidades de movimiento.</li>
      <li><b>Expresar</b> lo que sentimos y pensamos de forma auténtica.</li>
      <li><b>Comunicar</b> a otras personas un mensaje que entiendan.</li>
      <li><b>Crear</b>: inventar movimientos, personajes, coreografías o montajes.</li></ul>
      <p>Se diferencia del deporte en que no busca la eficacia ni ganar, sino la <b>intención expresiva</b> y la creatividad. No hay un único movimiento correcto: hay muchas respuestas posibles a un mismo estímulo.</p>
      <p>Abarca muchas manifestaciones: juegos de expresión, mimo, dramatización, improvisación teatral, danza (tradicional, moderna, urbana), acrosport, circo o performance. Todas ellas forman parte de la <b>cultura motriz artística</b> y son una forma de actividad física que se puede practicar toda la vida y que desarrolla la coordinación, el ritmo, la flexibilidad y la condición física.</p>`,
      svg: B.cajas("Finalidades de la expresión corporal", [["Conocer", "el propio cuerpo"], ["Expresar", "emociones e ideas"], ["Comunicar", "a los demás"], ["Crear", "movimientos nuevos"]], { t: "Expresión corporal" }),
    },
    {
      h: "La comunicación no verbal",
      html: `<p>La <b>comunicación no verbal</b> es todo lo que transmitimos sin palabras. Sus principales canales son:</p>
      <ul><li><b>Expresión facial</b>: las emociones básicas (alegría, tristeza, miedo, ira, sorpresa, asco) se reconocen en todas las culturas.</li>
      <li><b>Mirada</b>: mantenerla muestra interés y seguridad; evitarla puede indicar timidez o incomodidad.</li>
      <li><b>Gestos</b>: con manos, brazos y cabeza, que ilustran, sustituyen o contradicen las palabras.</li>
      <li><b>Postura</b>: abierta (brazos sueltos, pecho abierto) o cerrada (brazos cruzados, encogido).</li>
      <li><b>Proxémica</b>: el uso de la distancia con los demás (íntima, personal, social y pública), que varía según la cultura.</li>
      <li><b>Paralenguaje</b>: el tono, el volumen y el ritmo de la voz.</li></ul>
      <p>Cuando lo que decimos con palabras y lo que dice el cuerpo no coinciden, los demás suelen creer más al cuerpo. Por eso es útil ser consciente de la propia comunicación no verbal, por ejemplo en una exposición oral: postura erguida, mirada al público, gestos que acompañan, voz clara. Pero cuidado con las «lecturas» simplistas del lenguaje corporal: <mark>un gesto aislado no significa nada seguro</mark>; hay que interpretar el conjunto y el contexto.</p>`,
      svg: B.estrella("Canales de la comunicación no verbal", "Sin palabras", ["Cara", "Mirada", "Gestos", "Postura", "Distancia", "Voz"]),
      video: { id: "M4wm910gsQs", titulo: "19 cosas que tu lenguaje corporal dice de ti", canal: "Sapiencia práctica", vistas: 3692543 },
    },
    {
      h: "Los elementos del movimiento expresivo",
      html: `<p>El coreógrafo Rudolf Laban analizó el movimiento humano y propuso una forma de describirlo que hoy se usa en danza, teatro y Educación Física. Todo movimiento expresivo combina cuatro elementos:</p>
      <ul><li><b>Cuerpo</b>: qué partes se mueven (aisladas o el cuerpo entero), qué formas se crean (curvas, rectas, abiertas, cerradas).</li>
      <li><b>Espacio</b>: dónde se mueve. El espacio personal (la «burbuja» que alcanzamos sin desplazarnos) y el total; los <b>niveles</b> (alto, medio, bajo), las <b>direcciones</b> (adelante, atrás, lados, diagonal) y las <b>trayectorias</b> (rectas, curvas, en zigzag).</li>
      <li><b>Tiempo</b>: la velocidad (rápido, lento, súbito, sostenido), el ritmo y las pausas.</li>
      <li><b>Energía</b> o calidad del movimiento: fuerte o suave, directo o indirecto, libre o contenido. Laban combinó estos factores en acciones básicas como <i>golpear, flotar, deslizar, retorcer, presionar o sacudir</i>.</li></ul>
      <p>Variar estos elementos transforma el significado. Un mismo gesto de saludo puede ser alegre (rápido, ligero, hacia arriba), tímido (lento, pequeño, hacia abajo) o amenazante (fuerte, directo). Manipular conscientemente los elementos es la base de la creación de personajes y coreografías.</p>`,
      svg: B.rejilla("Elementos del movimiento según Laban", ["Elemento", "Preguntas", "Ejemplo"], [["Cuerpo", "¿qué se mueve?", "brazos, tronco"], ["Espacio", "¿dónde?", "nivel bajo, diagonal"], ["Tiempo", "¿cuándo, cómo de rápido?", "súbito, lento"], ["Energía", "¿con qué fuerza?", "flotar, golpear"]], { t: "Cuerpo, espacio, tiempo y energía" }),
    },
    {
      h: "Mimo, dramatización e improvisación",
      html: `<p>Algunas técnicas básicas de expresión son:</p>
      <ul><li><b>Mimo</b>: representar acciones, objetos y situaciones solo con el cuerpo, sin palabras ni objetos reales. Exige precisión: el objeto imaginario debe mantener su tamaño y su peso. Técnicas típicas son la pared invisible, la cuerda o subir una escalera.</li>
      <li><b>Dramatización</b>: representar una historia con personajes, con o sin texto. Se construye un personaje a partir de cómo camina, su postura, su ritmo y su energía.</li>
      <li><b>Improvisación</b>: crear en el momento, sin preparación, a partir de una consigna («estáis en un ascensor que se para»). Sus reglas básicas son <b>aceptar</b> lo que propone el compañero («sí, y además...») en lugar de bloquearlo, escuchar y dejarse llevar.</li>
      <li><b>Juegos de expresión</b>: estatuas, espejos (imitar a un compañero en simetría), máquinas humanas, emociones encadenadas.</li></ul>
      <p>La improvisación desarrolla la espontaneidad, la escucha y la capacidad de adaptarse, competencias muy útiles fuera del escenario. Lo más importante es crear un clima en el que <mark>equivocarse no sea un problema</mark>: en improvisación no existen los errores, solo propuestas.</p>`,
      svg: B.comparar("Mimo frente a improvisación", ["Mimo", ["sin palabras", "objetos imaginarios", "precisión", "se prepara"]], ["Improvisación", ["con o sin palabras", "consigna", "«sí, y además»", "en el momento"]]),
      video: { id: "IadUFq9zRzE", titulo: "Ejercicios teatrales para una primera clase de actuación", canal: "Pau Farías - Improvisación Teatral y Creatividad", vistas: 120735 },
    },
    {
      h: "El ritmo y la música",
      html: `<p>El <b>ritmo</b> es la organización del movimiento en el tiempo. La música ayuda a estructurarlo. Para moverse con ella hay que reconocer:</p>
      <ul><li><b>Pulso</b>: el latido regular de la música, el que marcamos sin pensar con el pie.</li>
      <li><b>Acento</b>: los pulsos que suenan más fuertes, normalmente el primero de cada grupo.</li>
      <li><b>Compás</b>: la agrupación de pulsos (de 2, 3 o 4 tiempos). La mayoría de la música actual va en compases de 4.</li>
      <li><b>Frase musical</b>: en danza se cuenta de <b>ocho en ocho</b> tiempos. Cuatro frases de ocho forman un bloque de 32 tiempos, que suele coincidir con una parte de la canción (estrofa, estribillo).</li>
      <li><b>Tempo</b>: la velocidad, medida en pulsaciones por minuto (bpm). Una canción de 120 bpm tiene dos pulsos por segundo.</li></ul>
      <p>Contar en voz alta («5, 6, 7, 8... ¡y!») permite que todo el grupo empiece a la vez. Un buen ejercicio es caminar marcando el pulso, después cambiar de dirección en cada acento y, por último, inventar un movimiento distinto para cada frase.</p>`,
      svg: tiempos,
    },
    {
      h: "La danza",
      html: `<p>La <b>danza</b> es la forma más antigua de expresión corporal: todas las culturas han bailado para celebrar, rezar, cortejar o contar su historia. Se pueden distinguir varios tipos:</p>
      <ul><li><b>Danzas tradicionales o folclóricas</b>: propias de un territorio (jota, sardana, muñeira, sevillanas, bailes de otras culturas). Transmiten patrimonio cultural.</li>
      <li><b>Danzas de salón o sociales</b>: en pareja (vals, salsa, bachata, swing).</li>
      <li><b>Danza clásica</b> (ballet), con una técnica muy codificada.</li>
      <li><b>Danza moderna y contemporánea</b>: más libre, explora el suelo, la gravedad y las emociones.</li>
      <li><b>Danzas urbanas</b>: hip hop, breaking (olímpico en París 2024), popping, locking, dancehall o commercial, nacidas en la calle y muy presentes en redes sociales.</li>
      <li><b>Actividades dirigidas con música</b>: aeróbic, zumba o step, que mezclan baile y condición física.</li></ul>
      <p>Bailar mejora la coordinación, el equilibrio, la resistencia y la memoria, y tiene un gran componente social. Todas las danzas son valiosas y conviene <mark>romper estereotipos</mark>: no hay bailes «de chicas» o «de chicos».</p>`,
      svg: B.cajas("Tipos de danza", [["Tradicional", "jota, sardana"], ["Social", "salsa, swing"], ["Clásica", "ballet"], ["Contemporánea", "libre, suelo"], ["Urbana", "hip hop, breaking"], ["Fitness", "zumba, aeróbic"]], { t: "Bailar el mundo", cols: 3 }),
    },
    {
      h: "Crear una coreografía",
      html: `<p>Una <b>coreografía</b> es una composición organizada de movimientos con música. Para crearla en grupo se puede seguir este proceso:</p>
      <ol><li><b>Elegir la música</b> y escucharla varias veces, identificando sus partes y su tempo. Recortar a 1-2 minutos.</li>
      <li><b>Decidir la idea o el estilo</b>: una historia, una emoción, un estilo de baile.</li>
      <li><b>Crear los pasos</b> por bloques de 8 tiempos. Cada miembro puede aportar uno.</li>
      <li><b>Diseñar las formaciones</b>: filas, círculos, cuñas, diagonales, y los desplazamientos entre ellas.</li>
      <li><b>Usar recursos coreográficos</b>: <b>unísono</b> (todos a la vez), <b>canon</b> (el mismo movimiento con desfase, en cascada), <b>pregunta-respuesta</b> (un grupo hace y otro responde), <b>contraste</b> (rápido y lento, alto y bajo).</li>
      <li><b>Ensayar</b> por partes, primero sin música y contando, después con ella, y grabar para corregir.</li></ol>
      <p>Una buena coreografía tiene un <b>inicio</b> claro (posición de partida), un desarrollo con variedad y un <b>final</b> marcado (pose final mantenida). El objetivo no es la dificultad, sino la sincronización, la expresividad y la <mark>utilización del espacio</mark>.</p>`,
      svg: B.flujo("Proceso de creación de una coreografía", ["Elegir y analizar la música", "Definir idea y estilo", "Crear pasos en bloques de 8", "Formaciones y recursos (canon, unísono)", "Ensayar, grabar y corregir"], { t: "De la idea al baile" }),
      video: { id: "-mc5aLuvfrM", titulo: "Aprende a bailar «Madre Tierra (Oye)» de Chayanne", canal: "Zumo Animaciones", vistas: 14384479 },
    },
    {
      h: "El acrosport",
      html: `<p>El <b>acrosport</b> es una actividad gimnástica en la que varios compañeros forman <b>figuras humanas</b> (pirámides) combinadas con elementos acrobáticos y coreográficos, con música. Hay tres roles:</p>
      <ul><li><b>Portor o base</b>: sostiene al compañero. Debe tener una posición estable, con la espalda recta y el peso sobre las zonas fuertes (hombros, caderas, apoyos sobre rodillas o manos alineados).</li>
      <li><b>Ágil</b>: sube a la figura. Debe apoyarse siempre sobre <b>zonas firmes</b> de la base (caderas, hombros, muslos cerca de la cadera), nunca sobre la zona lumbar o el centro de la espalda.</li>
      <li><b>Ayudante</b> o protector: guía y asegura la subida y la bajada, atento a posibles caídas.</li></ul>
      <p>Las normas de seguridad son estrictas: practicar sobre colchonetas, quitarse joyas, empezar con figuras de dos y a poca altura, subir y bajar de forma controlada (nunca saltando), mantener la figura al menos tres segundos y deshacerla en orden inverso al montaje. La comunicación es clave: el ágil no sube hasta que la base dice «listo».</p>
      <p>Un montaje de acrosport combina 4-6 figuras con <b>transiciones</b> coreografiadas entre ellas, de manera que el conjunto sea fluido.</p>`,
      svg: acro,
      video: { id: "lg5-xGUPFsc", titulo: "XI muestra de acrosport del Colegio Filipense Blanca de Castilla", canal: "Colegio Filipense Blanca de Castilla", vistas: 244284 },
    },
    {
      h: "El montaje artístico",
      html: `<p>Un <b>montaje artístico</b> es una obra escénica breve que integra varios lenguajes: movimiento, música, teatro, acrosport, imagen. En Bachillerato se puede crear un montaje de 3 a 5 minutos en grupo. Sus fases son:</p>
      <ol><li><b>Idea</b>: tema o mensaje (una historia, una crítica social, una emoción, un homenaje).</li>
      <li><b>Guion</b>: escenas y su orden, con un esquema temporal ligado a la música.</li>
      <li><b>Creación</b>: movimientos, figuras, coreografías e interpretaciones de cada escena.</li>
      <li><b>Producción</b>: música editada, vestuario, objetos, luces, proyecciones.</li>
      <li><b>Ensayos</b>: por escenas y completos, con ensayo general.</li>
      <li><b>Representación</b> ante un público.</li>
      <li><b>Evaluación</b>: autoevaluación, coevaluación y opinión del público.</li></ol>
      <p>La organización del grupo es tan importante como la creación: repartir funciones (dirección, música, vestuario, coreografía), fijar un calendario y tomar decisiones de forma democrática. Un buen montaje es aquel en que <mark>todos los miembros tienen su momento</mark> y se nota la colaboración.</p>`,
      svg: B.ciclo("Fases del montaje artístico", "Montaje", ["Idea", "Guion", "Crear", "Producir", "Ensayar", "Mostrar"]),
    },
    {
      h: "Recursos escénicos",
      html: `<p>Los recursos escénicos ayudan a reforzar el mensaje del montaje sin necesidad de grandes medios:</p>
      <ul><li><b>Música y sonido</b>: se puede editar con programas gratuitos (cortar, fundir, añadir efectos). Conviene usar música libre de derechos si el vídeo se va a publicar.</li>
      <li><b>Vestuario</b>: unificar colores (por ejemplo, todo negro con un elemento de color) da coherencia y destaca a personajes.</li>
      <li><b>Objetos</b>: telas, sillas, paraguas o pelotas pueden transformarse en muchas cosas.</li>
      <li><b>Iluminación</b>: aunque sea con linternas o la luz del móvil, cambia el ambiente; un contraluz crea siluetas.</li>
      <li><b>Espacio escénico</b>: decidir dónde se sitúa el público (frontal, en círculo) y aprovechar la profundidad del escenario. El centro y la parte delantera son las zonas de más fuerza.</li>
      <li><b>Proyecciones</b> de imágenes o vídeo detrás de los intérpretes.</li></ul>
      <p>Menos es más: un recurso bien usado vale más que muchos mal aprovechados. Lo esencial sigue siendo el cuerpo en movimiento con <b>intención</b>.</p>`,
      svg: B.cajas("Recursos escénicos", [["Música", "editada y libre"], ["Vestuario", "colores unificados"], ["Objetos", "que se transforman"], ["Luz", "ambiente y siluetas"]], { t: "Menos es más" }),
    },
    {
      h: "Emociones, desinhibición y respeto",
      html: `<p>Expresarse con el cuerpo delante de otros puede dar <b>vergüenza</b>, sobre todo en la adolescencia, cuando preocupa mucho la mirada ajena. Es una reacción normal que se va superando con un clima adecuado:</p>
      <ul><li><b>Progresión</b>: empezar con actividades en grupo, en las que nadie destaca; después en parejas; al final, mostrar ante los demás.</li>
      <li><b>Normas de respeto</b>: nadie se ríe de nadie, solo con nadie; no se graba ni se difunde sin permiso; se aplaude el esfuerzo.</li>
      <li><b>Feedback constructivo</b>: señalar primero lo que funciona y después una propuesta de mejora concreta.</li>
      <li><b>Libertad de elección</b>: poder elegir el papel o la forma de participar.</li></ul>
      <p>Superar la vergüenza aumenta la <b>autoestima</b> y la <b>confianza</b>, y ayuda en otras situaciones: hablar en público, una entrevista, conocer gente. La expresión corporal también permite reconocer y canalizar emociones: la danza y el movimiento libre se usan incluso en terapias.</p>
      <p>Por último, cuidado con la <b>imagen</b>: el vídeo de una actuación es un dato personal. Solo se publica con el consentimiento de todas las personas que aparecen (y de sus familias si son menores de 14 años).</p>`,
      svg: B.flujo("Progresión para perder la vergüenza", ["Actividades en gran grupo", "Pequeños grupos y parejas", "Mostrar al grupo propio", "Feedback positivo y concreto", "Mostrar al público"], { t: "Paso a paso" }),
    },
    {
      h: "Evaluar y valorar el trabajo artístico",
      html: `<p>Evaluar un trabajo artístico no consiste en decir «me gusta» o «no me gusta». Conviene usar <b>criterios</b> compartidos desde el principio, por ejemplo:</p>
      <ul><li><b>Idea y mensaje</b>: ¿se entiende lo que quiere transmitir?</li>
      <li><b>Uso de los elementos</b>: variedad de niveles, direcciones, velocidades y energías.</li>
      <li><b>Ajuste a la música</b>: sincronización, inicio y final claros.</li>
      <li><b>Ejecución</b>: seguridad en las figuras, limpieza de los movimientos, memoria.</li>
      <li><b>Expresividad</b>: intención, mirada, compromiso con el personaje.</li>
      <li><b>Trabajo en equipo</b>: participación equilibrada y colaboración.</li></ul>
      <p>Se combinan la <b>autoevaluación</b> (cada grupo valora su trabajo viendo la grabación), la <b>coevaluación</b> (los compañeros con una rúbrica) y la del profesor. Ser buen espectador también se aprende: mirar con atención, respetar el silencio, aplaudir y comentar con argumentos.</p>
      <p>Ver espectáculos de danza, teatro o circo, en directo o grabados, ayuda a desarrollar el gusto y el <mark>sentido crítico</mark>, y a valorar el trabajo de los artistas.</p>`,
      svg: B.rejilla("Rúbrica sencilla para un montaje", ["Criterio", "Pregunta clave"], [["Mensaje", "¿se entiende?"], ["Elementos", "¿hay variedad?"], ["Música", "¿hay sincronía?"], ["Ejecución", "¿es segura y limpia?"], ["Equipo", "¿participan todos?"]], { t: "Valorar con criterios" }),
    },
  ],
  figura: {
    titulo: "Expresión corporal y montajes en cuatro ideas",
    items: [["Comunicar", "sin palabras", "cara, postura,", "gestos y distancia"], ["Elementos", "C · E · T · E", "cuerpo, espacio,", "tiempo y energía"], ["Música", "8 tiempos", "contar «5, 6, 7, 8»", "y empezar juntos"], ["Crear", "montaje", "idea, guion, ensayo", "y respeto"]],
  },
  video: { id: "3gCJHRbglfk", titulo: "Expresión corporal: trabajo de un grupo de licenciatura en actuación", canal: "Chema Gadzky", vistas: 321744 },
  quiz: [
    ["La expresión corporal busca sobre todo…", ["ganar", "comunicar y crear con el cuerpo", "levantar peso", "correr más"], 1, "Intención expresiva."],
    ["Las emociones básicas en la cara…", ["solo se reconocen en tu país", "se reconocen en todas las culturas", "no existen", "son aprendidas en el colegio"], 1, "Alegría, tristeza, miedo..."],
    ["La proxémica estudia…", ["la voz", "el uso de la distancia", "los colores", "la música"], 1, "Íntima, personal, social y pública."],
    ["Si palabras y cuerpo se contradicen, el receptor suele creer más…", ["las palabras", "al cuerpo", "a ninguno", "al volumen"], 1, "Por eso importa ser coherente."],
    ["Los cuatro elementos del movimiento según Laban son…", ["fuerza, velocidad, resistencia y flexibilidad", "cuerpo, espacio, tiempo y energía", "música, luz, vestuario y texto", "inicio, nudo, desenlace y final"], 1, "Base del análisis del movimiento."],
    ["Los niveles en el espacio son…", ["rápido, medio y lento", "alto, medio y bajo", "fuerte y suave", "solo y en grupo"], 1, "Elemento espacio."],
    ["Flotar o golpear son ejemplos de…", ["trayectorias", "calidades de la energía", "niveles", "compases"], 1, "Acciones de Laban."],
    ["En el mimo, los objetos son…", ["reales", "imaginarios", "de plástico", "proyectados"], 1, "Precisión en tamaño y peso."],
    ["La regla básica de la improvisación es…", ["bloquear las propuestas", "aceptar y añadir: «sí, y además»", "hablar el primero", "no moverse"], 1, "Escuchar y construir juntos."],
    ["El pulso de la música es…", ["el volumen", "el latido regular", "la letra", "el estilo"], 1, "Lo que se marca con el pie."],
    ["En danza se suele contar de…", ["3 en 3", "8 en 8", "10 en 10", "5 en 5"], 1, "Frases de 8 tiempos."],
    ["Una canción de 120 bpm tiene…", ["1 pulso por segundo", "2 pulsos por segundo", "120 por segundo", "12 por minuto"], 1, "120/60 = 2."],
    ["El breaking fue deporte olímpico en…", ["Tokio 2020", "París 2024", "Londres 2012", "Barcelona 1992"], 1, "Danza urbana."],
    ["El canon en una coreografía es…", ["todos a la vez", "el mismo movimiento con desfase", "bailar solo", "una pausa"], 1, "Efecto cascada."],
    ["En acrosport, quien sostiene es…", ["el ágil", "el portor o base", "el ayudante", "el público"], 1, "Posición estable."],
    ["El ágil debe apoyarse sobre…", ["la zona lumbar", "zonas firmes como caderas y hombros", "el cuello", "el centro de la espalda"], 1, "Nunca sobre la lumbar."],
    ["Las figuras de acrosport se deshacen…", ["saltando", "en orden inverso al montaje", "de golpe", "sin ayudante"], 1, "De forma controlada."],
    ["En un montaje, la fase de guion consiste en…", ["elegir el tema", "ordenar las escenas ligadas a la música", "comprar el vestuario", "aplaudir"], 1, "Esquema temporal."],
    ["El feedback constructivo empieza por…", ["los errores", "lo que funciona", "la nota", "las risas"], 1, "Después una propuesta concreta."],
    ["Para publicar el vídeo de una actuación hace falta…", ["nada", "el consentimiento de quienes aparecen", "que sea gracioso", "que tenga música"], 1, "La imagen es un dato personal."],
  ],
  examen: [
    ["Un alumno expone con los brazos cruzados y la mirada en el suelo. Le aconsejarías…", ["gritar", "postura abierta y mirada al público", "esconderse", "hablar más deprisa"], 1, "Comunicación no verbal coherente."],
    ["Para que un saludo parezca tímido, ¿qué cambio de elementos es adecuado?", ["rápido, grande, alto", "lento, pequeño, nivel bajo", "fuerte y directo", "con un salto"], 1, "Tiempo, espacio y energía."],
    ["Un compañero en una improvisación dice: «¡Mira, un dragón!». La mejor respuesta es…", ["«No hay dragones»", "«¡Sí, y viene hacia nosotros!»", "salirse de la escena", "reírse"], 1, "Aceptar y añadir."],
    ["Una coreografía de 4 bloques de 32 tiempos a 128 bpm dura aproximadamente…", ["30 s", "1 minuto", "5 minutos", "10 s"], 1, "128 tiempos / 128 bpm = 1 min."],
    ["Si todo el grupo hace el mismo movimiento a la vez, el recurso es…", ["canon", "unísono", "contraste", "pregunta-respuesta"], 1, "Todos sincronizados."],
    ["En una figura, el ágil sube antes de que la base diga «listo». El error es de…", ["música", "comunicación y seguridad", "vestuario", "estilo"], 1, "Se espera la señal."],
    ["Un grupo quiere usar una canción comercial en un vídeo para redes. Deben…", ["usarla sin más", "comprobar los derechos o usar música libre", "cambiarle el nombre", "subirla en privado y luego pública"], 1, "Derechos de autor."],
    ["¿Qué medida favorece perder la vergüenza en clase?", ["actuar solo delante de todos el primer día", "progresar de gran grupo a parejas y después mostrar", "grabar sin permiso", "puntuar en público"], 1, "Progresión y clima de respeto."],
  ],
  feynman: ["Qué es la expresión corporal y en qué se diferencia del deporte", "Qué canales tiene la comunicación no verbal", "Cuáles son los elementos del movimiento según Laban", "Qué reglas tiene la improvisación", "Cómo se construye una coreografía contando de ocho en ocho", "Qué normas de seguridad tiene el acrosport"],
  mapa: ["EXPRESIÓN CORPORAL", [["Comunicar", "no verbal · cara · postura · distancia"], ["Elementos", "cuerpo · espacio · tiempo · energía"], ["Técnicas", "mimo · improvisación · danza"], ["Crear", "coreografía · acrosport · montaje"]]],
  tarjetas: [
    ["Expresión corporal", "Comunicar ideas y emociones con el cuerpo."],
    ["Comunicación no verbal", "Cara, mirada, gestos, postura, distancia y voz."],
    ["Proxémica", "Uso de la distancia en la comunicación."],
    ["Laban", "Cuerpo, espacio, tiempo y energía."],
    ["Niveles", "Alto, medio y bajo."],
    ["Mimo", "Representar sin palabras con objetos imaginarios."],
    ["Improvisación", "Crear en el momento: «sí, y además»."],
    ["Pulso y frase", "Latido regular; en danza, frases de 8 tiempos."],
    ["Canon", "Mismo movimiento con desfase."],
    ["Acrosport", "Figuras humanas con base, ágil y ayudante."],
    ["Montaje artístico", "Idea, guion, creación, producción, ensayo y muestra."],
    ["Feedback constructivo", "Primero lo que funciona; luego una mejora concreta."],
  ],
  ejemplos: [
    ["Transforma un gesto de «llamar a alguien» en tres emociones.", ["Alegría: brazo arriba, rápido, saltando, nivel alto.", "Miedo: gesto pequeño, súbito, cuerpo encogido, nivel bajo.", "Enfado: movimiento fuerte, directo, con golpe de pie."], "Mismo gesto, tres significados variando tiempo, espacio y energía."],
    ["Organiza una improvisación por parejas.", ["Consigna: «un ascensor se ha parado entre dos pisos».", "Reglas: aceptar las propuestas, escuchar, no bloquear.", "1 minuto de escena y comentario: ¿qué propuesta hizo avanzar la historia?"], "Escena improvisada con escucha y aceptación."],
    ["Calcula la duración de una coreografía de 6 frases de 8 tiempos a 96 bpm.", ["Total de tiempos: 6 × 8 = 48.", "Duración = 48 / 96 minutos = 0,5 min.", "Dura 30 segundos."], "30 segundos."],
    ["Diseña los primeros 32 tiempos de una coreografía grupal.", ["Tiempos 1-8: posición inicial en cuña; entrada con paso lateral.", "9-16: brazos en canon de delante hacia atrás.", "17-24: cambio a dos filas; 25-32: unísono con giro y pose."], "Bloque con formaciones, canon y unísono."],
    ["Monta una figura de acrosport de tres personas con seguridad.", ["Bases en cuadrupedia con la espalda recta, separadas a la anchura de las caderas del ágil.", "El ágil sube apoyando los pies sobre las caderas de las bases, con el ayudante sujetándole por la cintura.", "Se mantiene 3 s y se deshace en orden inverso, bajando el ágil con ayuda."], "Figura estable de dos bases, ágil y ayudante."],
    ["Planifica un montaje de 3 minutos sobre el acoso escolar.", ["Idea: del aislamiento a la ayuda del grupo; guion en tres escenas.", "Escena 1: mimo del aislamiento; escena 2: coreografía de contraste; escena 3: figura de acrosport como símbolo de apoyo.", "Producción: vestuario negro con un elemento de color para la protagonista; música en tres partes."], "Montaje con mensaje, técnicas variadas y estructura clara."],
  ],
  errores: [
    "Pensar que la expresión corporal es solo para quien «sabe bailar».",
    "Interpretar un gesto aislado como si tuviera un significado seguro.",
    "Bloquear las propuestas del compañero en una improvisación.",
    "Empezar a crear una coreografía sin escuchar ni contar la música.",
    "Subir a una figura de acrosport apoyándose en la zona lumbar o sin la señal de la base.",
    "Reírse de los compañeros o difundir vídeos sin su permiso.",
  ],
  ejercicios: {
    b: [
      ["Define expresión corporal.", "La capacidad de comunicar ideas, emociones y sensaciones a través del cuerpo y del movimiento."],
      ["Nombra cuatro canales de la comunicación no verbal.", "Expresión facial, mirada, gestos, postura, proxémica y paralenguaje."],
      ["¿Qué es la proxémica?", "El estudio del uso de la distancia entre las personas en la comunicación."],
      ["Enumera los elementos del movimiento según Laban.", "Cuerpo, espacio, tiempo y energía."],
      ["Nombra los tres niveles del espacio.", "Alto, medio y bajo."],
      ["¿Qué es el mimo?", "Representar acciones y objetos solo con el cuerpo, sin palabras ni objetos reales."],
      ["¿Qué significa «sí, y además»?", "Aceptar la propuesta del compañero y añadir algo que la desarrolle."],
      ["Diferencia pulso y acento.", "Pulso: latido regular; acento: los pulsos que suenan más fuertes."],
      ["¿De cuántos tiempos son las frases en danza?", "De 8 tiempos."],
      ["Nombra tres tipos de danza.", "Tradicional, social, clásica, contemporánea, urbana."],
      ["¿Cuáles son los tres roles del acrosport?", "Portor o base, ágil y ayudante."],
      ["Cita dos recursos escénicos.", "Música, vestuario, objetos, iluminación, espacio escénico, proyecciones."],
    ],
    m: [
      ["Explica por qué un gesto aislado no permite saber qué siente alguien.", "Porque el significado depende del conjunto de señales, del contexto y de la cultura; un brazo cruzado puede indicar frío o comodidad."],
      ["Describe un desplazamiento usando los cuatro elementos de Laban.", "Ejemplo: caminar con todo el cuerpo (cuerpo), en diagonal y en nivel bajo (espacio), lento y con pausa final (tiempo), suave y flotante (energía)."],
      ["Calcula la duración de 8 frases de 8 tiempos a 120 bpm.", "64 tiempos / 120 bpm = 0,53 min ≈ 32 segundos."],
      ["Explica la diferencia entre canon y unísono con un ejemplo.", "Unísono: todos levantan el brazo a la vez. Canon: cada fila lo levanta un tiempo después de la anterior, creando una ola."],
      ["¿Por qué es importante contar «5, 6, 7, 8» antes de empezar?", "Para que todo el grupo coja el pulso y empiece a la vez en el tiempo 1 de la frase."],
      ["Indica cinco normas de seguridad del acrosport.", "Colchonetas, sin joyas, empezar por figuras sencillas, apoyos en zonas firmes, subir y bajar controlado, ayudante atento, esperar la señal de la base."],
      ["Explica las fases de un montaje artístico.", "Idea, guion, creación, producción, ensayos, representación y evaluación."],
      ["¿Qué ventajas tiene la improvisación fuera del teatro?", "Desarrolla la escucha, la adaptación, la creatividad y la seguridad para hablar en público o resolver situaciones imprevistas."],
      ["Propón tres normas de clase para crear un clima de respeto en expresión.", "Nadie se ríe de nadie, no se graba sin permiso, se aplaude el esfuerzo y el feedback es constructivo."],
      ["¿Qué valor cultural tienen las danzas tradicionales?", "Transmiten el patrimonio, la historia y la identidad de un territorio y unen generaciones."],
      ["Explica la técnica del espejo.", "Por parejas, uno guía con movimientos lentos y el otro los imita en simetría, como un reflejo; desarrolla la atención y la coordinación."],
    ],
    a: [
      ["Diseña una secuencia de 64 tiempos para un grupo de 6 con al menos tres recursos coreográficos.", "1-16: entrada en dos filas con paso lateral (unísono); 17-32: canon de brazos fila a fila; 33-48: pregunta-respuesta entre dos grupos de 3; 49-64: cambio a círculo, contraste rápido-lento y pose final."],
      ["Analiza un vídeo de danza urbana y otro de danza contemporánea con los elementos de Laban.", "Urbana: movimientos rápidos, súbitos y fuertes, aislamientos y niveles bajos en el breaking. Contemporánea: uso del suelo, energía sostenida y fluida, trayectorias curvas. Ambas usan el espacio de forma distinta."],
      ["Debate sobre los estereotipos de género en la danza.", "Históricamente se asoció danza y feminidad; hoy hay referentes masculinos y femeninos en todos los estilos; el estereotipo limita la práctica y debe superarse con modelos diversos y respeto."],
      ["Propón una progresión de cuatro sesiones para perder la vergüenza en un grupo nuevo.", "Sesión 1: juegos en gran grupo con música; 2: espejos y estatuas en parejas; 3: pequeñas improvisaciones en grupos sin público; 4: muestra breve al grupo con feedback positivo."],
      ["Elabora una rúbrica de coevaluación para un montaje con cuatro niveles.", "Criterios: mensaje, elementos del movimiento, ajuste musical, ejecución y seguridad, expresividad y trabajo en equipo; niveles: inicial, en desarrollo, logrado, excelente, con descriptores breves."],
      ["Explica cómo la expresión corporal ayuda a gestionar las emociones.", "Permite reconocer las emociones en el cuerpo, canalizarlas con el movimiento, liberar tensión y comunicar lo que cuesta decir; aumenta la autoestima al superar retos."],
      ["Planifica la producción de un montaje con un presupuesto de 0 €.", "Música libre de derechos editada gratis, vestuario de colores comunes de casa, objetos reutilizados (telas, sillas), luz con linternas o móviles, espacio del gimnasio y difusión con consentimiento."],
      ["Relaciona comunicación no verbal y exposición oral con cinco consejos.", "Postura erguida y abierta, mirada repartida al público, gestos que acompañan, desplazamientos con intención, voz clara con pausas; ensayar grabándose."],
    ],
  },
  glosario: [
    ["Expresión corporal", "Comunicación de ideas y emociones con el cuerpo."],
    ["Comunicación no verbal", "Mensajes transmitidos sin palabras."],
    ["Proxémica", "Uso de la distancia en la comunicación."],
    ["Paralenguaje", "Tono, volumen y ritmo de la voz."],
    ["Nivel", "Altura del movimiento: alto, medio o bajo."],
    ["Trayectoria", "Camino que dibuja un movimiento en el espacio."],
    ["Energía", "Calidad del movimiento: fuerte o suave, directo o indirecto."],
    ["Mimo", "Representación sin palabras con objetos imaginarios."],
    ["Improvisación", "Creación en el momento a partir de una consigna."],
    ["Pulso", "Latido regular de la música."],
    ["Frase musical", "Grupo de 8 tiempos en danza."],
    ["Coreografía", "Composición organizada de movimientos con música."],
    ["Canon", "Repetición de un movimiento con desfase."],
    ["Unísono", "Todos hacen el mismo movimiento a la vez."],
    ["Acrosport", "Figuras humanas acrobáticas en grupo."],
    ["Portor", "Base que sostiene al ágil."],
    ["Montaje artístico", "Obra escénica breve que integra varios lenguajes."],
  ],
  situacion: {
    titulo: "Gala de fin de curso",
    reto: "Cada grupo creará un montaje artístico de 3 a 4 minutos que combine coreografía, acrosport e interpretación sobre un tema de su elección, y lo representará en una gala abierta a otros cursos y a las familias.",
    pasos: [
      "Formad grupos, elegid el tema y repartid funciones (dirección, música, coreografía, vestuario).",
      "Escribid el guion de escenas ligado a la música editada.",
      "Cread las coreografías por bloques de 8 y las figuras de acrosport con sus transiciones.",
      "Ensayad por escenas, grabad, aplicad la coevaluación y corregid.",
      "Representad el montaje en la gala y evaluad la experiencia con la rúbrica y la opinión del público.",
    ],
    producto: "El montaje representado en la gala, el guion con la música y las funciones, y una autoevaluación del grupo.",
    evaluacion: [
      "El montaje transmite una idea clara y usa con variedad los elementos del movimiento.",
      "La coreografía está ajustada a la música y las figuras se ejecutan con seguridad.",
      "Todos los miembros participan y se reparten las funciones.",
      "El grupo muestra respeto, apoyo mutuo y capacidad de autoevaluación.",
    ],
  },
  familias: [
    "Asistid a la gala o a una muestra del centro y valorad el esfuerzo creativo.",
    "Id juntos a ver un espectáculo de danza, teatro o circo.",
    "Bailad en casa con músicas de distintas culturas y épocas.",
    "Respetad su imagen: no publiquéis vídeos de otros alumnos sin permiso.",
  ],
  saberes: B.SAB("Expresión corporal y montajes artísticos: comunicación no verbal, elementos del movimiento expresivo, mimo, dramatización e improvisación, ritmo y música, tipos de danza, creación de coreografías, acrosport con seguridad, montaje artístico y recursos escénicos, gestión emocional y respeto, y evaluación del trabajo creativo"),
  ideas: [
    "Iniciar las sesiones con juegos de gran grupo para crear clima antes de trabajar en parejas.",
    "Usar tablets para grabar los ensayos y que los grupos se autoevalúen.",
    "Coordinar con Música la edición de las bandas sonoras de los montajes.",
    "Organizar una gala o muestra abierta al centro con un protocolo de derechos de imagen.",
  ],
  fuentes: [
    B.FUENTES.WIKI("Expresión_corporal", "Expresión corporal"),
    B.FUENTES.WIKI("Rudolf_von_Laban", "Rudolf von Laban"),
    B.FUENTES.WIKI("Acrosport", "Acrosport"),
  ],
});
