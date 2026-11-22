// Educación Física 3º de Primaria: juegos cooperativos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, ciclo, vid, vgen, RD, PROF, nino, suelo, pelota, corazon, tick, equis, estrella } = require("./_pri3b");

// Paracaídas visto en perspectiva con gajos de colores.
const paracaidas = (cx, cy, rx = 100, ry = 26) => {
  const cols = [COL.rojo, COL.azul, COL.sol, COL.verde, COL.morado, COL.naranja];
  return [...Array(12)].map((_, i) => {
    const a1 = (i * Math.PI) / 6, a2 = ((i + 1) * Math.PI) / 6;
    return `<path d="M${cx} ${cy} L${(cx + Math.cos(a1) * rx).toFixed(1)} ${(cy + Math.sin(a1) * ry).toFixed(1)} A${rx} ${ry} 0 0 1 ${(cx + Math.cos(a2) * rx).toFixed(1)} ${(cy + Math.sin(a2) * ry).toFixed(1)}z" fill="${cols[i % 6]}" fill-opacity=".75"/>`;
  }).join("");
};

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Juegos cooperativos",
  minutos: 50,
  objetivos: ["Distinguir juegos cooperativos, competitivos y de cooperación-oposición", "Colaborar con los compañeros para conseguir un objetivo común", "Comunicarse, escuchar y ponerse de acuerdo en el grupo", "Practicar juegos cooperativos con y sin material, como el paracaídas", "Valorar la participación de todos y resolver conflictos dialogando"],
  claves: ["cooperar", "juego cooperativo", "objetivo común", "competición", "equipo", "comunicación", "confianza", "estrategia", "ayuda", "inclusión", "paracaídas", "conflicto"],
  pregunta: {
    texto: "Imagina un juego en el que nadie pierde: o ganamos todos juntos, o no gana nadie. ¿Crees que sería aburrido o más divertido que un juego normal?",
    respuesta: "¡Puede ser muy divertido! Son los <mark>juegos cooperativos</mark>: en ellos no hay rivales, sino un <b>reto común</b> que solo se consigue si todo el grupo colabora. Nadie queda eliminado, todos participan y, cuando se logra el objetivo, la alegría es de todos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es cooperar?</h3><p><mark>Cooperar</mark> es trabajar <b>junto con otros</b> para conseguir algo que solos no podríamos lograr, o que nos costaría mucho más. Cooperamos cuando hacemos un mural entre toda la clase, cuando una familia recoge la casa o cuando unos amigos montan una tienda de campaña.</p><p>En los juegos podemos relacionarnos con los demás de varias formas:</p><p>• <b>Juegos individuales</b>: juego solo, como saltar a la comba yo solo.<br>• <mark>Juegos competitivos</mark>: juego contra otros, y uno gana y otros pierden, como una carrera.<br>• <b>Juegos de cooperación-oposición</b>: mi equipo coopera y compite contra otro equipo, como el fútbol o el balón tiro.<br>• <mark>Juegos cooperativos</mark>: todos juegan juntos para conseguir un <b>objetivo común</b>. No hay equipo rival: el reto es el propio juego.</p><p>Los juegos cooperativos nos enseñan a escuchar, a ayudar, a confiar en los demás y a darnos cuenta de que <b>todos somos necesarios</b>. ¡Cada persona aporta algo al grupo!</p>`,
      svg: svg("Tipos de juego: individual, competitivo, de equipo contra equipo y cooperativo", `${tit("Tipos de juego")}${filas([["individual", "juego yo solo", COL.gris], ["competitivo", "uno gana, otros pierden", COL.rojo], ["por equipos", "cooperar y competir", COL.naranja], ["cooperativo", "todos juntos, un reto", COL.verde]], 52, 28, { x: 24, wa: 88, wb: 130 })}`),
    },
    {
      html: `<h3>Características de los juegos cooperativos</h3><p>Los juegos cooperativos tienen unas características especiales:</p><p>• Hay un <b>objetivo común</b> para todo el grupo: por ejemplo, que el globo no toque el suelo o cruzar todos al otro lado.<br>• <b>Nadie es eliminado</b>: todos juegan de principio a fin. Si alguien falla, el grupo le ayuda y se vuelve a intentar.<br>• <b>Todos son necesarios</b>: el juego solo sale bien si participa todo el mundo.<br>• No hay perdedores: o lo conseguimos juntos, o lo volvemos a intentar juntos.<br>• Se valora el <b>esfuerzo</b> y la <b>ayuda</b>, no quién es el mejor.<br>• Hay que <b>comunicarse</b>: hablar, escuchar, proponer ideas y ponerse de acuerdo.<br>• Muchas veces hay que pensar una <mark>estrategia</mark>: un plan para resolver el reto.</p><p>Estos juegos son muy buenos para que todos se sientan <b>parte del grupo</b>, también quienes tienen menos habilidad, son nuevos en clase o tienen alguna dificultad. En un juego cooperativo nadie se queda mirando desde fuera.</p>`,
      svg: svg("Corro de niños cogidos de la mano: todos juegan, nadie queda eliminado", `${tit("Todos juntos")}${[...Array(8)].map((_, i) => { const a = (i * Math.PI) / 4 - Math.PI / 2; return [130 + Math.cos(a) * 92, 118 + Math.sin(a) * 36, i]; }).sort((p, q) => p[1] - q[1]).map(([x, y, i]) => nino(x, y, { pose: "brazos", s: 0.55, nina: i % 2 === 1, c: [COL.rojo, COL.azul, COL.verde, COL.naranja, COL.morado, COL.sol, COL.agua, COL.marron][i] })).join("")}${tx(130, 172, "nadie eliminado · todos necesarios", 220)}`),
    },
    {
      html: `<h3>Juegos sin material</h3><p>Para jugar cooperando no hace falta nada más que el grupo. Algunos ejemplos:</p><p>• <b>El nudo humano</b>: en círculo, cada uno coge la mano de dos compañeros que no tenga al lado. Se forma un nudo de brazos. Sin soltarse, el grupo tiene que desenredarse hasta formar de nuevo un círculo.</p><p>• <b>Levantarse juntos</b>: por parejas, sentados espalda con espalda y con los brazos entrelazados, hay que ponerse de pie a la vez sin apoyar las manos. Después, de tres en tres, de cuatro en cuatro…</p><p>• <b>El ciempiés</b>: en fila, cada uno con las manos en los hombros del de delante. El grupo se desplaza, gira y esquiva obstáculos sin romperse.</p><p>• <b>El espejo de grupo</b>: todos imitan a la vez los movimientos de un compañero, que va cambiando.</p><p>• <b>Contar hasta veinte</b>: con los ojos cerrados, el grupo cuenta en voz alta del 1 al 20, diciendo cada número una sola persona. Si dos hablan a la vez, se vuelve a empezar. ¡Hay que estar muy atentos!</p><p>• <b>La ola</b>: en círculo, nos levantamos y agachamos uno detrás de otro formando una ola que da la vuelta.</p>`,
      svg: svg("Dos niños sentados espalda con espalda se levantan juntos", `${tit("Levantarse juntos")}${suelo(150)}${nino(110, 150, { pose: "sentado", s: 1.2 })}${nino(150, 150, { pose: "sentado", s: 1.2, nina: true })}${fl(130, 60, 130, 36, COL.verde, 2)}${tx(130, 172, "espalda con espalda, ¡arriba a la vez!", 230)}`),
    },
    {
      html: `<h3>El paracaídas</h3><p>El <mark>paracaídas</mark> es una gran tela circular de colores, con asas en el borde. Es uno de los materiales más divertidos para jugar en grupo, porque <b>solo funciona si todos colaboran</b>.</p><p>Nos colocamos alrededor, cada uno sujetando un asa, y seguimos las órdenes:</p><p>• <b>Las olas</b>: movemos los brazos arriba y abajo, suave o fuerte, para hacer olas pequeñas o grandes.<br>• <b>La seta</b>: todos a la vez subimos los brazos y el paracaídas se infla como una seta gigante.<br>• <b>La casita</b>: hacemos la seta, damos un paso adelante, nos metemos debajo y nos sentamos sobre el borde. ¡Estamos dentro de una casa de colores!<br>• <b>Cambio de sitio</b>: hacemos la seta y el profesor dice un color o una característica («los que lleven zapatillas blancas»); esos alumnos cruzan por debajo al otro lado antes de que baje.<br>• <b>Las palomitas</b>: ponemos varias pelotas encima y movemos el paracaídas para que salten sin caerse.<br>• <b>El tiburón</b>: unos alumnos debajo del paracaídas «tiran» de los pies de los que están sentados alrededor, que se cambian de rol.</p>`,
      svg: svg("Niños alrededor del paracaídas de colores haciendo olas", `${tit("El paracaídas")}${paracaidas(130, 106, 96, 28)}${[...Array(6)].map((_, i) => { const a = Math.PI * (0.1 + i * 0.16); return nino(130 + Math.cos(a) * 110, 158, { pose: "brazos", s: 0.6, nina: i % 2 === 0 }); }).join("")}${pelota(110, 92, 5)}${pelota(150, 98, 5, COL.azul)}${tx(130, 52, "olas · seta · casita · palomitas", 220)}`),
      video: vid("6Qgq1bPD9RA"),
    },
    {
      html: `<h3>Juegos con material</h3><p>Con globos, aros, pelotas o telas podemos inventar muchos retos cooperativos:</p><p>• <b>El globo que no cae</b>: todo el grupo tiene que mantener un globo (o varios) en el aire sin que toque el suelo. Variante: nadie puede tocarlo dos veces seguidas; o solo se puede golpear con la cabeza o los codos.</p><p>• <b>El aro viajero</b>: en círculo y cogidos de la mano, hay que pasar un aro por el cuerpo de todos sin soltarse las manos, hasta que dé la vuelta completa.</p><p>• <b>Transportar sin manos</b>: por parejas, llevar una pelota sujeta entre las frentes, las espaldas o las barrigas hasta una caja.</p><p>• <b>La isla</b>: todo el grupo tiene que caber encima de unas colchonetas (la isla). Poco a poco se quitan colchonetas y hay que buscar la forma de que todos sigan dentro, ayudándose y abrazándose.</p><p>• <b>Cruzar el río</b>: el grupo debe llegar a la otra orilla pisando solo unos aros (piedras) que tienen que ir moviendo entre todos. Si alguien pisa fuera, todo el grupo vuelve a empezar.</p><p>• <b>Las sillas cooperativas</b>: como el juego de las sillas, pero cuando se quita una silla nadie se elimina: todos tienen que caber en las que quedan.</p>`,
      svg: svg("El aro viajero: en círculo y de la mano, el aro pasa por el cuerpo de todos", `${tit("El aro viajero")}${suelo(150)}${[30, 80, 130, 180, 230].map((x, i) => nino(x, 150, { pose: "brazos", s: 0.9, nina: i % 2 === 1 })).join("")}<ellipse cx="80" cy="110" rx="10" ry="28" fill="none" stroke="${COL.rojo}" stroke-width="3"/>${fl(96, 70, 160, 70, COL.rojo, 2)}${tx(130, 172, "sin soltarse las manos", 200)}`),
    },
    {
      html: `<h3>Nos comunicamos</h3><p>En los juegos cooperativos, la <mark>comunicación</mark> es la clave del éxito. Antes de empezar un reto difícil, el grupo se reúne para pensar una <b>estrategia</b>:</p><p>1. <b>Entender el reto</b>: ¿qué hay que conseguir? ¿Qué normas hay?<br>2. <b>Proponer ideas</b>: cada uno puede decir cómo lo haría.<br>3. <b>Escuchar</b> a todos, sin interrumpir y sin reírse de ninguna idea.<br>4. <b>Elegir</b> una idea entre todos, o mezclar varias.<br>5. <b>Probar</b>. Si no sale, no se busca un culpable: se piensa qué ha fallado y se prueba otra vez.<br>6. <b>Celebrar</b> juntos cuando se consigue.</p><p>Hay que aprender a hablar en el <b>momento adecuado</b>, con un tono amable, y a <b>animar</b>: «¡Muy bien!», «¡Tú puedes!», «¡Casi lo tenemos!».</p><p>También hay juegos de <b>confianza</b>, en los que dependemos de los demás: por ejemplo, el <b>lazarillo</b>, en el que un compañero con los ojos tapados es guiado por otro con la voz o tocándole el hombro. Para ser un buen guía hay que ser responsable y cuidadoso.</p>`,
      svg: svg("Pasos para resolver un reto en grupo: entender, proponer, elegir, probar y celebrar", `${tit("Pensar juntos")}${ciclo([["entender", COL.azul], ["proponer", COL.naranja], ["elegir", COL.morado], ["probar", COL.verde], ["celebrar", COL.rojo]], 130, 104, 56, 74)}`),
    },
    {
      html: `<h3>Cuando hay un conflicto</h3><p>A veces, cuando jugamos, surgen <mark>conflictos</mark>: no nos ponemos de acuerdo, alguien no respeta las normas, otro se enfada porque no le pasan o porque ha perdido. Es normal; lo importante es <b>solucionarlos bien</b>.</p><p>Para resolver un conflicto:</p><p>• <b>Parar</b> y respirar hondo para calmarse. Nunca se resuelve nada gritando, empujando o insultando.<br>• <b>Hablar</b> por turnos: cada uno explica qué ha pasado y cómo se siente, usando frases como «Yo me he sentido…».<br>• <b>Escuchar</b> al otro intentando ponerse en su lugar.<br>• <b>Buscar soluciones</b> juntos y elegir la que sea justa para todos.<br>• Si no se ponen de acuerdo, pedir ayuda al profesor.<br>• Pedir <b>perdón</b> si nos hemos equivocado, y aceptar las disculpas de los demás.</p><p>En clase de Educación Física también ayuda el <b>juego limpio</b>: respetar las normas, aceptar los resultados, ayudar a quien se cae, felicitar al otro equipo y no hacer trampas. ¡Un buen jugador es, ante todo, un buen compañero!</p>`,
      svg: svg("Semáforo para resolver conflictos: parar, hablar y escuchar, buscar soluciones", `${tit("Semáforo del conflicto")}<rect x="40" y="36" width="50" height="130" rx="10" fill="#334155"/>${[[COL.rojo, 60], [COL.sol, 100], [COL.verde, 140]].map(([c, y]) => `<circle cx="65" cy="${y}" r="15" fill="${c}"/>`).join("")}${filas([["rojo", "paro y me calmo", COL.rojo], ["amarillo", "hablo y escucho", COL.sol], ["verde", "buscamos solución", COL.verde]], 64, 40, { x: 110, wa: 70, wb: 130, dos: true })}`),
    },
    {
      html: `<h3>Todos cabemos en el juego</h3><p>Los juegos cooperativos son ideales para que <b>todos participen</b>, sean como sean. Esto se llama <mark>inclusión</mark>: que nadie quede fuera.</p><p>A veces hay que <b>adaptar</b> el juego para que alguien pueda participar. Por ejemplo:</p><p>• Si un compañero va en <b>silla de ruedas</b>, todos podemos jugar sentados, o cambiar los desplazamientos por pases.<br>• Si a alguien le cuesta <b>oír</b>, usamos señales con las manos o con colores además de la voz.<br>• Si alguien no ve bien, usamos balones con cascabel o le guiamos con la voz.<br>• Si un compañero es nuevo o tímido, le invitamos a jugar y le explicamos las normas.<br>• Si a alguien le da miedo una actividad, le ofrecemos una versión más fácil o le acompañamos.</p><p>Inventar adaptaciones es también un reto cooperativo para todo el grupo. ¿Se os ocurre cómo cambiar un juego para que pueda jugar alguien con una pierna escayolada?</p><p>Cuando todos juegan, el juego es más rico: cada persona aporta ideas, habilidades y formas de ver las cosas diferentes.</p>`,
      svg: svg("Niños jugando juntos con un compañero en silla de ruedas, pasándose un globo", `${tit("Todos cabemos")}${suelo(150)}${nino(50, 150, { pose: "arriba", s: 1, nina: true })}<g transform="translate(130 150)"><circle cx="0" cy="-12" r="14" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M-6 -30 H10 V-12" stroke="var(--ink)" stroke-width="3" fill="none"/></g>${nino(126, 128, { pose: "arriba", s: 0.8 })}${nino(210, 150, { pose: "arriba", s: 1 })}<circle cx="130" cy="38" r="10" fill="${COL.rojo}"/>${tx(130, 172, "adaptamos el juego para que todos jueguen", 236)}`),
    },
    {
      html: `<h3>¡Reto cooperativo de la clase!</h3><p>Para terminar, un gran reto para toda la clase. Lo llamamos <b>«La gran travesía»</b>:</p><p>1. Toda la clase tiene que ir de un lado del gimnasio al otro.<br>2. Solo se puede pisar sobre unas «balsas» (colchonetas pequeñas, aros o papeles de periódico). Hay menos balsas que alumnos.<br>3. Las balsas se pueden mover, pero si una se queda vacía, «se la lleva el río» y desaparece.<br>4. Si alguien pisa el suelo, todo el grupo vuelve al principio.<br>5. Antes de empezar, el grupo tiene <b>tres minutos</b> para planificar la estrategia.</p><p>Al terminar, nos sentamos en círculo para hablar: ¿cómo nos hemos organizado? ¿Hemos escuchado a todos? ¿Qué ha funcionado y qué no? ¿Cómo nos hemos sentido? Este momento de <b>reflexión</b> es tan importante como el juego.</p><p>Podemos darnos un <b>aplauso colectivo</b>: todos a la vez, cada vez más rápido, hasta terminar con un gran «¡Bien!».</p><p><b>Repaso:</b> ¿qué diferencia hay entre un juego cooperativo y uno competitivo? → En el cooperativo todos juegan juntos por un objetivo común; en el competitivo unos ganan y otros pierden.</p>`,
      svg: svg("La gran travesía: niños cruzan el gimnasio sobre balsas sin pisar el suelo", `${tit("La gran travesía")}<rect x="10" y="110" width="240" height="44" fill="var(--water)" fill-opacity=".35"/>${[40, 90, 140, 190].map((x) => `<rect x="${x - 18}" y="128" width="36" height="12" rx="3" fill="#d6a77a" stroke="var(--ink)"/>`).join("")}${nino(40, 130, { pose: "brazos", s: 0.75 })}${nino(90, 130, { pose: "equilibrio", s: 0.75, nina: true })}${nino(140, 130, { pose: "brazos", s: 0.75 })}${estrella(226, 70, 12)}${tx(130, 170, "planificar · cooperar · reflexionar", 220)}`),
      video: vid("KWKG8wU1rZs"),
    },
  ],
  figura: {
    titulo: "Los juegos cooperativos en ocho ideas",
    svg: rejilla([
      ["Cooperar", "trabajar juntos", COL.verde],
      ["Objetivo común", "un reto para todos", COL.azul],
      ["Sin eliminados", "todos juegan", COL.naranja],
      ["Comunicación", "hablar y escuchar", COL.morado],
      ["Estrategia", "un plan del grupo", COL.agua],
      ["Paracaídas", "olas, seta, casita", COL.rojo],
      ["Conflictos", "parar y hablar", COL.sol],
      ["Inclusión", "nadie fuera", COL.marron],
    ], 4, 86, "Resumen de los juegos cooperativos"),
  },
  video: vgen("gmFrWDcYfsQ", "juegos cooperativos educación física primaria"),
  ejemplos: [
    { enunciado: "¿Es cooperativo el juego de las sillas normal, en el que se elimina a quien se queda sin silla?",
      pasos: ["En ese juego hay eliminados.", "Cada uno juega para conseguir silla él solo, contra los demás.", "Es competitivo."],
      resultado: "No; es competitivo. La versión cooperativa es que todos quepan en las sillas que quedan." },
    { enunciado: "En el reto del globo, el grupo da 15 toques seguidos el primer día y 27 el segundo. ¿Cuánto ha mejorado?",
      pasos: ["Restamos: 27 − 15.", "27 − 15 = 12."],
      resultado: "12 toques más, gracias a la estrategia del grupo." },
    { enunciado: "Durante un juego, dos compañeros discuten porque los dos quieren ser el guía. ¿Qué hacéis?",
      pasos: ["Paramos y nos calmamos.", "Cada uno dice lo que quiere sin gritar.", "Buscamos una solución justa: turnarse."],
      resultado: "Se turnan: primero uno y luego el otro." },
  ],
  errores: [
    "Pensar que en un juego cooperativo hay que ganar a alguien.",
    "Culpar al compañero que falla en vez de ayudarle.",
    "Empezar un reto difícil sin ponerse de acuerdo en una estrategia.",
    "Dejar fuera a quien tiene menos habilidad.",
  ],
  ejercicios: [
    { q: "¿Qué es cooperar?", sol: "Trabajar junto con otros para conseguir algo." },
    { q: "¿Qué es un juego cooperativo?", sol: "Un juego en el que todos juegan juntos para conseguir un objetivo común, sin rivales." },
    { q: "¿Qué diferencia hay entre un juego cooperativo y uno competitivo?", sol: "En el cooperativo ganamos todos juntos; en el competitivo unos ganan y otros pierden." },
    { q: "Escribe tres características de los juegos cooperativos.", sol: "Objetivo común, nadie es eliminado y todos son necesarios." },
    { q: "Explica el juego del nudo humano.", sol: "En círculo, cada uno coge las manos de dos compañeros no contiguos y el grupo se desenreda sin soltarse." },
    { q: "Escribe dos juegos con el paracaídas.", sol: "Por ejemplo: la seta y las palomitas." },
    { q: "¿Qué es una estrategia?", sol: "Un plan que hace el grupo para resolver un reto." },
    { q: "¿Qué pasos sigues para resolver un conflicto?", sol: "Parar y calmarse, hablar por turnos, escuchar, buscar soluciones y pedir perdón si hace falta." },
    { q: "¿Qué es la inclusión?", sol: "Que todos puedan participar y nadie se quede fuera." },
    { q: "¿Por qué es importante hablar al terminar el juego?", sol: "Para reflexionar sobre cómo nos hemos organizado y cómo nos hemos sentido, y mejorar." },
  ],
  quiz: [
    { q: "En los juegos cooperativos…", o: ["todos juegan juntos", "uno gana", "se elimina a los peores"], a: 0, e: "Todos juegan juntos por un objetivo común." },
    { q: "Una carrera en la que uno gana es un juego…", o: ["competitivo", "cooperativo", "de relajación"], a: 0, e: "Competitivo." },
    { q: "El fútbol es un juego de…", o: ["cooperación-oposición", "solo cooperación", "relajación"], a: 0, e: "Cooperación con el equipo y oposición al rival." },
    { q: "En un juego cooperativo, si alguien falla…", o: ["le ayudamos", "lo eliminamos", "nos enfadamos"], a: 0, e: "Le ayudamos y se vuelve a intentar." },
    { q: "Inflar el paracaídas hacia arriba es hacer la…", o: ["seta", "ola", "croqueta"], a: 0, e: "La seta." },
    { q: "Un plan del grupo para un reto es una…", o: ["estrategia", "trampa", "multa"], a: 0, e: "Una estrategia." },
    { q: "En el lazarillo, el guía debe ser…", o: ["responsable y cuidadoso", "rápido y brusco", "silencioso siempre"], a: 0, e: "Responsable y cuidadoso." },
    { q: "Ante un conflicto, lo primero es…", o: ["parar y calmarse", "gritar", "empujar"], a: 0, e: "Parar y calmarse." },
    { q: "Que nadie quede fuera del juego se llama…", o: ["inclusión", "eliminación", "competición"], a: 0, e: "Inclusión." },
    { q: "Al acabar el reto, el grupo…", o: ["reflexiona junto", "busca culpables", "se va sin hablar"], a: 0, e: "Reflexiona junto." },
  ],
  examen: [
    { q: "En el juego de la isla, cuando se quitan colchonetas…", o: ["todos deben seguir cabiendo", "se elimina a uno", "se acaba el juego"], a: 0, e: "Todos deben seguir cabiendo, ayudándose." },
    { q: "Felicitar al otro equipo forma parte del…", o: ["juego limpio", "calentamiento", "reglamento de fútbol"], a: 0, e: "Del juego limpio." },
    { q: "Si un compañero va en silla de ruedas, el juego…", o: ["se adapta", "se suspende", "se juega sin él"], a: 0, e: "Se adapta para que juegue." },
    { q: "Para comunicarnos bien en el grupo debemos…", o: ["escuchar sin interrumpir", "hablar todos a la vez", "reírnos de las ideas"], a: 0, e: "Escuchar sin interrumpir." },
  ],
  feynman: ["Qué es un juego cooperativo y en qué se diferencia de uno competitivo", "Cómo se piensa una estrategia en grupo", "Cómo resolver un conflicto en el juego"],
  mapa: mapa("COOPERAR", "var(--pri)", [
    ["Juegos", "objetivo común", COL.verde],
    ["Material", "paracaídas · globos", COL.rojo],
    ["Comunicar", "estrategia · escuchar", COL.azul],
    ["Convivir", "conflictos · inclusión", COL.naranja],
  ], 250),
  tarjetas: [
    ["Cooperar", "Trabajar juntos para conseguir algo."],
    ["Juego cooperativo", "Todos juntos, un objetivo común."],
    ["Juego competitivo", "Unos ganan y otros pierden."],
    ["Objetivo común", "Meta que comparte todo el grupo."],
    ["Estrategia", "Plan del grupo para un reto."],
    ["Paracaídas", "Tela grande para jugar en grupo."],
    ["Conflicto", "Desacuerdo que hay que resolver hablando."],
    ["Inclusión", "Que nadie quede fuera."],
  ],
  familias: ["Jugad en familia al globo que no cae, contando los toques.", "Proponed retos cooperativos en casa: recoger juntos en un tiempo, hacer un puzle.", "Practicad el semáforo para resolver discusiones.", "Inventad juntos una versión cooperativa de un juego conocido."],
  profesores: PROF("Educación Física: juegos cooperativos, competitivos y de cooperación-oposición; objetivo común y ausencia de eliminación; comunicación y estrategia de grupo; juegos de confianza; paracaídas; resolución dialogada de conflictos; juego limpio e inclusión", ["Reto de la gran travesía con reflexión final.", "Sesión de paracaídas.", "Adaptación de juegos para incluir a todos."]),
  fuentes: [RD, wiki("Juego cooperativo", "Juego cooperativo"), wiki("Cooperación", "Cooperación"), wiki("Inclusión educativa", "Educación inclusiva")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir juegos competitivos y cooperativos", "Participar en juegos de confianza con responsabilidad", "Repartir y rotar roles dentro de un equipo", "Reconocer la cooperación en la naturaleza y en la vida diaria"],
  lectura: { titulo: "El río de lava", html: `<p>El maestro de Educación Física ha puesto en el suelo del gimnasio dos cuerdas separadas por varios metros. —Entre las cuerdas hay un río de lava —anuncia—. Tenéis que cruzarlo todos, pero solo podéis pisar estas piedras mágicas.</p><p>Las «piedras» son cinco aros. Y en el grupo hay doce niños.</p><p>Leo coge un aro y salta dentro. —¡Yo primero! —grita, y avanza solo. Pero cuando llega a la mitad, se da cuenta de que no puede seguir: no le quedan más aros.</p><p>—Así no funciona —dice Carla—. Tenemos que pasarnos los aros de uno a otro.</p><p>El grupo se reúne. Ahmed propone ponerse en fila. Lucía dice que los últimos pasen los aros hacia delante. Leo vuelve atrás y escucha.</p><p>Lo intentan. Se tambalean, se agarran de las manos y se ríen cuando alguien está a punto de caerse. Lucas se queda atrás porque le cuesta saltar, y Leo le da la mano para ayudarle.</p><p>Por fin, el último niño llega a la otra orilla. Todos gritan de alegría.</p><p>—¿Quién ha ganado? —pregunta el maestro.</p><p>—¡Todos! —responden a la vez.</p>` },
  tras: {
    "Características de los juegos cooperativos": [
      ["Competir o cooperar", `<p>Hay juegos en los que <mark>competimos</mark> y juegos en los que <mark>cooperamos</mark>. Los dos tipos son valiosos, pero son diferentes:</p><ul><li>En un juego <b>competitivo</b>, unos ganan y otros pierden. Por ejemplo, una carrera o un partido de fútbol.</li><li>En un juego <b>cooperativo</b>, todos trabajan por el mismo objetivo y ganan o pierden juntos. Por ejemplo, el paracaídas o cruzar el río de lava.</li></ul><p>Hay también juegos <b>mixtos</b>: dentro de un equipo cooperamos y contra el otro equipo competimos, como en el baloncesto.</p><p>¿Qué aprendemos en cada uno?</p><ul><li>Compitiendo: esforzarnos, aceptar la derrota, felicitar al que gana.</li><li>Cooperando: escuchar, ponernos de acuerdo, ayudar al que le cuesta más.</li></ul><p>Lo importante es que, en los dos casos, juguemos con <b>respeto</b> y que nadie se quede fuera. Una competición sana no consiste en humillar al otro, sino en dar lo mejor de uno mismo.</p><p><b>Actividad</b>: clasifica estos juegos: el pañuelo, el paracaídas, la carrera de sacos, mantener un globo en el aire entre todos.</p>`,
        H6.dos("Juegos", ["COMPETIR", ["unos ganan", "otros pierden", "carrera"], cRO], ["COOPERAR", ["todos juntos", "un objetivo", "paracaídas"], cVE])],
    ],
    "Juegos con material": [
      ["Juegos de confianza", `<p>En los <mark>juegos de confianza</mark> ponemos nuestra seguridad en manos de los compañeros. Por eso hay que jugarlos con mucho cuidado y seriedad.</p><p>Algunos juegos:</p><ul><li><b>El lazarillo</b>: uno lleva los ojos tapados y su pareja lo guía con la voz por un recorrido.</li><li><b>El péndulo</b>: en grupos de tres, el del medio se deja caer suavemente hacia delante y hacia atrás, con el cuerpo recto como una tabla, y los otros dos lo sujetan por los hombros. ¡Solo unos centímetros!</li><li><b>El robot</b>: uno es un robot con los ojos cerrados y su compañero lo dirige tocándole el hombro derecho, el izquierdo o la espalda.</li><li><b>La alfombra mágica</b>: todo el grupo está encima de una colchoneta o una tela y tiene que darle la vuelta sin bajarse.</li></ul><p>Normas para jugar seguros:</p><ul><li>Nada de bromas que asusten al compañero.</li><li>Ir despacio y avisar de los obstáculos.</li><li>Si alguien no quiere, no se le obliga: puede empezar observando.</li><li>Después, hablamos: ¿cómo te has sentido?, ¿te has fiado de tu compañero?</li></ul><p><b>Actividad</b>: juega al robot y después cambia el papel con tu pareja.</p>`,
        L6.filas("Confianza", [["lazarillo", "guiar con la voz", cAZ], ["péndulo", "en grupos de tres", cNA], ["robot", "tocar el hombro", cMO], ["alfombra", "todos encima", cVE]])],
    ],
    "Todos cabemos en el juego": [
      ["Los papeles en el equipo", `<p>Un equipo funciona mejor si cada miembro tiene una <mark>tarea</mark>. Estos son algunos papeles que podemos repartir:</p><ul><li><b>Portavoz</b>: explica al resto de la clase lo que ha decidido el equipo.</li><li><b>Guardián del tiempo</b>: vigila el reloj y avisa cuando queda poco.</li><li><b>Guardián del material</b>: recoge y cuida el material.</li><li><b>Animador</b>: anima a todos y se asegura de que nadie se quede sin participar.</li><li><b>Moderador</b>: da la palabra para que todos puedan opinar por turnos.</li></ul><p>Lo más importante es <b>rotar</b> los papeles: cada día o cada juego, cambiamos. Así todos aprendemos a hacer de todo y nadie manda siempre.</p><p>Para tomar decisiones en equipo:</p><ul><li>Escuchar todas las ideas antes de elegir.</li><li>Probar una idea y, si no funciona, probar otra.</li><li>Si no hay acuerdo, votar o hacer un sorteo.</li></ul><p>Un equipo no es mejor por tener al más rápido o al más fuerte, sino por saber trabajar juntos.</p><p><b>Actividad</b>: en tu grupo, repartid los cinco papeles para el próximo juego y apuntadlo en una tarjeta.</p>`,
        H6.rueda("Equipo", "EQUIPO", [["portavoz", cAZ], ["tiempo", cNA], ["material", cVE], ["animador", cRO]])],
    ],
  },
  final: [
    ["Cooperar fuera del gimnasio", `<p>La <mark>cooperación</mark> no es solo cosa de juegos. Está en todas partes.</p><p><b>En la naturaleza</b>:</p><ul><li>Las <b>hormigas</b> trabajan juntas para llevar comida al hormiguero; a veces forman cadenas o puentes con sus cuerpos.</li><li>Las <b>abejas</b> se reparten las tareas de la colmena: unas buscan néctar, otras cuidan a las larvas.</li><li>Los <b>lobos</b> cazan en manada y cuidan juntos a las crías.</li><li>Las <b>aves</b> que migran vuelan en forma de V y se turnan para ir delante, que es el sitio más cansado.</li></ul><p><b>En los deportes</b>: en el remo, todos tienen que remar al mismo ritmo; en una cordada de montaña, los alpinistas van atados y se protegen entre ellos.</p><p><b>En la vida diaria</b>:</p><ul><li>En casa, cuando ayudamos a poner la mesa o a recoger.</li><li>En clase, cuando hacemos trabajos en grupo.</li><li>En el barrio, cuando hay voluntarios que ayudan a otras personas.</li></ul><p>Cooperar nos hace más fuertes: juntos llegamos más lejos que solos.</p><p><b>Actividad</b>: busca otro ejemplo de animales que cooperan y explícalo a la clase.</p>`,
      L6.filas("Cooperan", [["hormigas", "cadenas y puentes", cNA], ["abejas", "se reparten tareas", cAZ], ["aves", "vuelo en V", cVE], ["remo", "mismo ritmo", cRO]])],
  ],
  ejemplos: [
    ["¿El paracaídas es un juego competitivo o cooperativo?", ["Todos trabajan por el mismo objetivo.", "Nadie gana a nadie."], "Cooperativo."],
    ["En el grupo siempre manda el mismo niño. ¿Qué podemos hacer?", ["Todos deben aprender todas las tareas.", "Los papeles se pueden cambiar."], "Rotar los papeles para que cada día haga una tarea distinta."],
  ],
  errores: ["Hacer bromas o soltar al compañero en los juegos de confianza.", "Pensar que un equipo es mejor solo por tener al más rápido o al más fuerte."],
  ejercicios: [
    ["b", "¿Qué pasa en un juego cooperativo?", "Todos trabajan por el mismo objetivo y ganan o pierden juntos."],
    ["b", "¿Qué hace el portavoz del equipo?", "Explica a la clase lo que ha decidido el equipo."],
    ["b", "Nombra un juego de confianza.", "El lazarillo, el péndulo, el robot o la alfombra mágica."],
    ["b", "¿En qué forma vuelan algunas aves que migran?", "En forma de V."],
    ["b", "En la lectura, ¿cuántos aros hay para cruzar el río?", "Cinco."],
    ["m", "Explica qué es un juego mixto y pon un ejemplo.", "Se coopera dentro del equipo y se compite contra otro; por ejemplo, el baloncesto."],
    ["m", "Di dos normas para jugar seguros a los juegos de confianza.", "No hacer bromas, ir despacio, avisar de los obstáculos, no obligar."],
    ["m", "¿Por qué es bueno rotar los papeles en el equipo?", "Para que todos aprendan todas las tareas y nadie mande siempre."],
    ["m", "¿Cómo cooperan las abejas?", "Se reparten las tareas de la colmena."],
    ["m", "¿Qué hacemos si en el equipo no hay acuerdo?", "Escuchar todas las ideas, probarlas, votar o sortear."],
    ["a", "¿Qué error comete Leo al principio y qué aprende?", "Intenta cruzar solo; aprende que hay que cooperar y ayudar a los demás."],
    ["a", "Inventa un juego cooperativo con un aro por cada dos niños.", "Respuesta abierta."],
    ["a", "Compara lo que aprendemos compitiendo y cooperando.", "Compitiendo, esfuerzo y aceptar la derrota; cooperando, escuchar, acordar y ayudar."],
    ["a", "Escribe tres ejemplos de cooperación en tu casa o tu barrio.", "Respuesta abierta."],
  ],
  quiz: [
    ["En un juego competitivo…", ["unos ganan y otros pierden", "todos ganan siempre", "nadie se esfuerza"], "Competir."],
    ["En el péndulo, el compañero del medio se deja caer…", ["solo unos centímetros", "desde muy alto", "corriendo"], "Confianza."],
    ["El guardián del tiempo…", ["vigila el reloj", "recoge el material", "explica las decisiones"], "Papeles."],
    ["Las hormigas cooperan…", ["formando cadenas para llevar comida", "compitiendo entre ellas", "volando en V"], "Naturaleza."],
    ["Rotar los papeles significa…", ["cambiarlos cada vez", "que siempre haga lo mismo", "quitarlos"], "Equipo."],
  ],
  examen: [
    ["En la lectura, ¿qué responde la clase cuando el maestro pregunta quién ha ganado?", ["¡Todos!", "Leo", "Carla"], "Lectura."],
    ["¿Cuál de estos es un juego cooperativo?", ["mantener un globo en el aire entre todos", "una carrera de velocidad", "el pañuelo"], "Juegos."],
  ],
  tarjetas: [
    ["Competir y cooperar", "Competir: unos ganan. Cooperar: todos juntos. Mixto: las dos cosas."],
    ["Confianza", "Lazarillo, péndulo, robot; despacio, sin bromas, sin obligar."],
    ["Papeles", "Portavoz, tiempo, material, animador, moderador; rotarlos."],
    ["Cooperación", "Hormigas, abejas, lobos, aves en V; remo y cordada."],
  ],
  glosario: [
    ["Cooperar", "Trabajar juntos por un mismo objetivo."],
    ["Competir", "Intentar ganar a otros."],
    ["Juego mixto", "Juego en el que se coopera y se compite."],
    ["Confianza", "Seguridad en que los demás nos cuidarán."],
    ["Péndulo", "Juego de confianza de dejarse caer y ser sujetado."],
    ["Portavoz", "Persona que habla en nombre del grupo."],
    ["Moderador", "Persona que da la palabra por turnos."],
    ["Rotar", "Ir cambiando por turnos."],
    ["Consenso", "Acuerdo al que llega todo el grupo."],
    ["Manada", "Grupo de animales que viven juntos."],
    ["Cordada", "Grupo de alpinistas atados con una cuerda."],
    ["Voluntario", "Persona que ayuda a otros sin cobrar."],
  ],
  situacion: {
    titulo: "La gran misión de la clase",
    reto: "La clase supera una serie de retos cooperativos en los que solo se gana si todos los grupos lo consiguen.",
    pasos: ["Formar equipos y repartir los papeles de portavoz, tiempo, material y animador.", "Superar tres retos: el río de lava, la alfombra mágica y el globo que no cae.", "Jugar al lazarillo y al robot cuidando a la pareja.", "Hacer una asamblea final: qué funcionó, qué cambiaríamos y cómo nos hemos sentido."],
    producto: "Un diploma de la clase por superar la misión juntos.",
    evaluacion: ["Coopera y ayuda a los compañeros.", "Cumple su papel en el equipo.", "Juega con responsabilidad en los juegos de confianza.", "Expresa cómo se ha sentido y escucha a los demás."],
  },
});
