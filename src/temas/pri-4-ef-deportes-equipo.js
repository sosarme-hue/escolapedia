// Educación Física 4º de Primaria: deportes de equipo, iniciación. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, nino, suelo, pelota, tick, equis } = require("./_pri4b");

// Campo rectangular con línea central y dos porterías o canastas.
const campo = (c = COL.verde) => `<rect x="20" y="40" width="220" height="120" rx="4" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2"/><path d="M130 40 V160" stroke="${c}" stroke-width="2"/><circle cx="130" cy="100" r="16" fill="none" stroke="${c}" stroke-width="2"/>`;
const punto = (x, y, c) => `<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Deportes de equipo: iniciación",
  minutos: 50,
  objetivos: ["Saber qué es un deporte de equipo y qué elementos comparte", "Comprender los papeles de ataque y defensa y algunos principios de juego", "Conocer las reglas básicas del baloncesto, el fútbol, el balonmano y el voleibol", "Practicar minideportes adaptados", "Valorar la cooperación, el respeto y el juego limpio"],
  claves: ["deporte de equipo", "reglamento", "compañeros", "adversarios", "ataque", "defensa", "desmarque", "pase", "espacio", "árbitro", "baloncesto", "fútbol", "balonmano", "voleibol", "juego limpio"],
  pregunta: {
    texto: "En un partido de fútbol entre niños pequeños, todos corren detrás del balón formando un racimo. ¿Por qué eso no funciona, y qué hacen los equipos que juegan mejor?",
    respuesta: "Porque si todos van al balón, nadie está libre para recibir un pase y el campo queda vacío. Los buenos equipos <b>ocupan el espacio</b>: se separan, se <mark>desmarcan</mark> para quedar libres y se pasan el balón. En un deporte de equipo, lo importante no es correr más, sino <b>cooperar</b> con los compañeros.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un deporte de equipo?</h3><p>Un <mark>deporte</mark> es un juego con unas <b>reglas</b> fijas, recogidas en un reglamento, que se practica de forma organizada y en el que normalmente se compite. Un <mark>deporte de equipo</mark> es aquel en el que varios jugadores colaboran para conseguir un objetivo común frente a otro equipo.</p><p>En los deportes de equipo hay dos tipos de relación:</p><p>• La <b>cooperación</b>, con los <b>compañeros</b>: nos ayudamos, nos pasamos el balón, nos cubrimos.<br>• La <b>oposición</b>, con los <b>adversarios</b>: intentamos superarlos y que no nos superen.</p><p>Todos los deportes de equipo tienen elementos en común:</p><p>• Un <b>móvil</b>, normalmente un balón.<br>• Un <b>espacio</b> de juego, el campo o la pista, con unas líneas.<br>• Una <b>meta</b> o portería: canasta, portería, campo contrario…<br>• Un <b>reglamento</b>, con normas sobre cómo tocar el balón, qué está permitido y cómo se marcan los puntos.<br>• <b>Jugadores</b> con distintas funciones.<br>• Un <b>árbitro</b> que hace cumplir las reglas.</p><p>Algunos deportes de equipo muy populares en España son el fútbol, el baloncesto, el balonmano, el voleibol, el hockey y el waterpolo.</p>`,
      svg: svg("Elementos de los deportes de equipo", `${tit("Elementos comunes")}${fichas([["Balón", "el móvil", COL.naranja], ["Campo", "espacio y líneas", COL.verde], ["Meta", "portería o canasta", COL.rojo], ["Reglas", "el reglamento", COL.azul], ["Jugadores", "compañeros y rivales", COL.morado], ["Árbitro", "hace cumplir", COL.gris]], 2, 34)}`),
    },
    {
      html: `<h3>Atacar y defender</h3><p>En los deportes de equipo con invasión del campo (fútbol, baloncesto, balonmano, hockey) los jugadores van cambiando entre dos papeles:</p><p>• El equipo que tiene el balón está en <mark>ataque</mark>. Su objetivo es <b>conservar</b> el balón, <b>avanzar</b> hacia la meta contraria y <b>marcar</b> un tanto.<br>• El equipo que no tiene el balón está en <mark>defensa</mark>. Su objetivo es <b>recuperar</b> el balón, <b>impedir</b> que el rival avance y <b>proteger</b> su meta.</p><p>Cuando un equipo pierde el balón, pasa de atacar a defender en un instante. Ese cambio se llama <b>transición</b>, y los buenos equipos lo hacen muy rápido.</p><p>Hay dos formas principales de defender:</p><p>• <b>Defensa individual</b>: cada jugador se encarga de vigilar a un rival concreto, siguiéndole por todo el campo.<br>• <b>Defensa en zona</b>: cada jugador se encarga de un espacio del campo y defiende a quien entre en él.</p><p>En iniciación se suele empezar con la defensa individual, porque es más fácil de entender: «tú marcas a esa jugadora y no la dejas recibir».</p>`,
      svg: svg("Ataque y defensa en el campo: un equipo avanza y otro protege su meta", `${tit("Ataque y defensa")}${campo()}${[[60, 70], [80, 120], [110, 90]].map(([x, y]) => punto(x, y, COL.azul)).join("")}${[[160, 80], [180, 120], [210, 100]].map(([x, y]) => punto(x, y, COL.rojo)).join("")}${pelota(118, 90, 4, COL.naranja)}${fl(124, 90, 150, 90, COL.azul, 2)}${et(70, 172, "ataque →", 90, { size: 10.5, color: COL.azul })}${et(190, 172, "defensa", 90, { size: 10.5, color: COL.rojo })}`),
    },
    {
      html: `<h3>Principios para jugar en equipo</h3><p>Hay unas ideas básicas que sirven para casi todos los deportes de equipo. Si las aplicas, tu equipo jugará mucho mejor:</p><p>• <mark>Ocupar el espacio</mark>: no os amontonéis todos alrededor del balón. Repartíos por el campo, a lo ancho y a lo largo, para tener opciones de pase.</p><p>• <mark>Desmarcarse</mark>: cuando un compañero tiene el balón, muévete para quedar <b>libre</b>, lejos de tu defensor, en un sitio donde te puedan pasar. Pide el balón con la voz o con la mano.</p><p>• <b>Pasar al compañero libre</b>: un pase es más rápido que cualquier jugador corriendo. Mira antes de pasar y elige al compañero mejor situado.</p><p>• <b>Avanzar</b>: si tienes espacio delante, avanza con el balón hacia la meta.</p><p>• <b>Marcar al rival</b>: en defensa, colócate entre tu rival y tu portería o canasta, para que no reciba o no pueda avanzar.</p><p>• <b>Comunicarse</b>: hablad durante el juego: «¡estoy libre!», «¡cuidado por detrás!», «¡yo la cojo!».</p><p>• <b>Todos participan</b>: un equipo es más fuerte cuando todos tocan el balón, no solo los que mejor juegan.</p>`,
      svg: svg("Desmarque: un jugador se mueve a un espacio libre para recibir el pase", `${tit("El desmarque")}${campo(COL.azul)}${punto(70, 100, COL.azul)}${pelota(78, 100, 4, COL.naranja)}${punto(150, 80, COL.azul)}${punto(140, 90, COL.rojo)}<path d="M150 80 Q170 60 190 60" stroke="${COL.azul}" stroke-width="2" stroke-dasharray="4 3" fill="none"/>${punto(190, 60, COL.azul)}<path d="M84 98 L184 62" stroke="${COL.naranja}" stroke-width="2" stroke-dasharray="6 4"/>${et(196, 52, "¡libre!", 50, { size: 11, color: COL.azul })}${tx(130, 176, "muévete a un espacio libre", 200, { weight: 700 })}`),
    },
    {
      html: `<h3>El baloncesto</h3><p>El <mark>baloncesto</mark> se juega en una pista rectangular con una <b>canasta</b> en cada extremo, a 3,05 metros de altura (en minibasket, a 2,60 m). Cada equipo tiene <b>cinco</b> jugadores en la pista.</p><p><b>Objetivo</b>: meter el balón en la canasta del equipo contrario.</p><p><b>Puntos</b>: una canasta normal vale <b>2 puntos</b>; si se lanza desde detrás de la línea de triple, <b>3 puntos</b>; y cada tiro libre, <b>1 punto</b>.</p><p><b>Reglas básicas</b>:</p><p>• El balón se juega <b>con las manos</b>. Para avanzar con él hay que <b>botarlo</b>.<br>• No se puede dar más de dos pasos con el balón en las manos sin botar: eso es <b>pasos</b>.<br>• Si dejas de botar y vuelves a botar, es <b>dobles</b>.<br>• No se puede empujar, agarrar ni golpear al rival: eso es <b>falta personal</b>. Si la falta es al tirar, el jugador lanza tiros libres.<br>• No se puede dar una patada al balón a propósito.</p><p>El baloncesto lo inventó en 1891 un profesor de educación física de Estados Unidos, James Naismith, para que sus alumnos pudieran hacer deporte en un gimnasio durante el invierno. ¡Las primeras canastas eran cestos de melocotones!</p>`,
      svg: svg("Puntuación en baloncesto: tiro libre, canasta de dos y triple", `${tit("Puntos en baloncesto")}<rect x="14" y="36" width="232" height="132" rx="4" fill="${COL.naranja}" fill-opacity=".08" stroke="${COL.naranja}" stroke-width="2"/><path d="M240 76 V124" stroke="var(--ink)" stroke-width="4"/><circle cx="230" cy="100" r="7" fill="none" stroke="${COL.naranja}" stroke-width="3"/><path d="M246 40 A62 62 0 0 0 246 160" stroke="${COL.azul}" stroke-width="2" fill="none" stroke-dasharray="5 4"/><path d="M196 84 V116" stroke="${COL.morado}" stroke-width="2"/>${punto(196, 100, COL.morado)}${punto(214, 136, COL.verde)}${punto(110, 100, COL.azul)}${et(170, 74, "libre: 1", 56, { size: 10.5, color: COL.morado })}${et(206, 156, "2 puntos", 56, { size: 10.5, color: "#15803d" })}${et(96, 126, "triple: 3", 70, { size: 11, color: COL.azul })}${tx(70, 60, "fuera del arco = 3", 110)}`),
    },
    {
      html: `<h3>El fútbol</h3><p>El <mark>fútbol</mark> es el deporte más popular de España y del mundo. Se juega en un campo de césped con una <b>portería</b> en cada extremo. Cada equipo tiene <b>once</b> jugadores; en el fútbol 7 de las categorías infantiles, siete, y en el fútbol sala, cinco.</p><p><b>Objetivo</b>: meter el balón en la portería contraria. Cada gol vale un punto.</p><p><b>Reglas básicas</b>:</p><p>• El balón se juega con los <b>pies</b>, el cuerpo y la cabeza, pero <b>no con las manos ni los brazos</b>. Si un jugador toca el balón con la mano a propósito, es <b>falta</b>.<br>• Solo el <b>portero</b> puede coger el balón con las manos, y solo dentro de su área.<br>• Si el balón sale por la banda, se saca con las manos desde fuera, con los dos pies en el suelo y el balón por encima de la cabeza: es el <b>saque de banda</b>.<br>• Si sale por la línea de fondo tras tocar a un defensor, es <b>córner</b>; si lo tocó un atacante, saque de puerta.<br>• Las faltas graves se castigan con <b>tarjeta amarilla</b> o <b>roja</b>. Una falta dentro del área es <b>penalti</b>.</p><p>En fútbol es clave la <b>conducción</b> del balón, el <b>pase</b> con el interior del pie y el control.</p>`,
      svg: svg("Campo de fútbol con porterías, área y línea central", `${tit("El fútbol")}${campo(COL.verde)}<rect x="20" y="76" width="30" height="48" fill="none" stroke="${COL.verde}" stroke-width="2"/><rect x="210" y="76" width="30" height="48" fill="none" stroke="${COL.verde}" stroke-width="2"/><rect x="12" y="90" width="8" height="20" fill="var(--ink)"/><rect x="240" y="90" width="8" height="20" fill="var(--ink)"/>${pelota(130, 100, 6, "var(--ink)")}${et(35, 70, "área", 40, { size: 10, color: "#15803d" })}${tx(130, 176, "sin manos, salvo el portero en su área", 236, { weight: 700 })}`),
      video: vid("9K5k2TwgL3A"),
    },
    {
      html: `<h3>El balonmano</h3><p>El <mark>balonmano</mark> se juega en una pista con una <b>portería</b> en cada extremo, rodeada por un <b>área</b> en forma de semicírculo de seis metros. Cada equipo tiene <b>siete</b> jugadores: seis de campo y un portero.</p><p><b>Objetivo</b>: lanzar el balón con la mano y meterlo en la portería contraria.</p><p><b>Reglas básicas</b>:</p><p>• El balón se juega con las <b>manos</b>. No se puede tocar con las piernas ni con los pies (salvo el portero, dentro de su área).<br>• Con el balón en la mano se pueden dar como máximo <b>tres pasos</b>. Para avanzar más, hay que botar.<br>• No se puede tener el balón más de <b>tres segundos</b> sin pasarlo, botarlo o lanzar.<br>• <b>Nadie</b>, salvo el portero, puede pisar el área. Pero sí se puede saltar desde fuera y lanzar en el aire antes de caer dentro: es el lanzamiento en suspensión.<br>• No se puede empujar, agarrar ni golpear al rival.</p><p>La selección española de balonmano ha ganado campeonatos del mundo y de Europa, y es uno de los deportes de equipo con más tradición en nuestro país, sobre todo en los colegios.</p>`,
      svg: svg("Reglas del balonmano: tres pasos, tres segundos y área del portero", `${tit("El balonmano")}<rect x="20" y="40" width="220" height="120" rx="4" fill="${COL.azul}" fill-opacity=".1" stroke="${COL.azul}" stroke-width="2"/><path d="M20 60 A40 40 0 0 1 20 140" fill="${COL.azul}" fill-opacity=".25" stroke="${COL.azul}" stroke-width="2"/><rect x="12" y="88" width="8" height="24" fill="var(--ink)"/>${filas([["3 pasos", "con el balón", COL.rojo], ["3 segundos", "como máximo", COL.naranja], ["Área", "solo el portero", COL.azul]], 72, 32, { x: 104, wa: 70, wb: 70, dos: true })}`),
      video: vid("HLHihihEegc"),
    },
    {
      html: `<h3>El voleibol</h3><p>El <mark>voleibol</mark> es diferente de los anteriores, porque no hay invasión del campo: los dos equipos están separados por una <b>red</b> y cada uno juega en su mitad. Cada equipo tiene <b>seis</b> jugadores; en minivoley, cuatro.</p><p><b>Objetivo</b>: hacer que el balón toque el suelo en el campo contrario, pasándolo por encima de la red, y evitar que toque el suelo en el propio.</p><p><b>Reglas básicas</b>:</p><p>• El balón se <b>golpea</b>, no se puede coger ni lanzar.<br>• Cada equipo puede dar como máximo <b>tres toques</b> antes de pasar el balón al otro campo, y un mismo jugador no puede dar dos toques seguidos.<br>• No se puede tocar la red.<br>• El partido empieza con el <b>saque</b>, desde detrás de la línea de fondo.<br>• Cada vez que un equipo gana un punto, saca; y si recupera el saque, sus jugadores <b>rotan</b> una posición.</p><p>Los golpes básicos son el <b>toque de dedos</b>, con las manos por encima de la frente formando un triángulo, y el <b>toque de antebrazos</b>, con los brazos juntos y estirados, para balones bajos. Lo ideal es hacer los tres toques: recibir, colocar y atacar.</p>`,
      svg: svg("Campo de voleibol separado por una red con los tres toques", `${tit("El voleibol")}${suelo(156)}<path d="M130 156 V64" stroke="var(--ink)" stroke-width="3"/><rect x="126" y="64" width="8" height="36" fill="var(--muted)" fill-opacity=".45"/>${nino(40, 156, { pose: "brazos", s: 0.8, c: COL.verde })}${nino(80, 156, { pose: "arriba", s: 0.8, c: COL.verde, nina: true })}${nino(110, 140, { pose: "salta", s: 0.8, c: COL.verde })}<path d="M46 110 Q60 60 80 92 Q96 50 112 70 Q150 30 190 120" stroke="${COL.naranja}" stroke-width="2" stroke-dasharray="4 3" fill="none"/>${["1", "2", "3"].map((n, i) => et([50, 86, 118][i], [96, 80, 60][i], n, 14, { size: 11, color: COL.rojo })).join("")}${tx(196, 160, "campo rival", 80)}`),
    },
    {
      html: `<h3>Minideportes y juegos predeportivos</h3><p>Antes de jugar un deporte con todas sus reglas, se aprende con <mark>juegos predeportivos</mark> y <mark>minideportes</mark>: versiones <b>adaptadas</b> a la edad, más sencillas y donde todos participan más.</p><p>Los minideportes cambian algunas cosas:</p><p>• <b>Menos jugadores</b> por equipo, para que todos toquen más el balón: 3 contra 3 en baloncesto, 4 contra 4 en fútbol.<br>• <b>Campos más pequeños</b> y canastas más bajas.<br>• <b>Balones</b> más ligeros, blandos o pequeños.<br>• <b>Reglas</b> más sencillas o especiales: por ejemplo, que no se pueda marcar hasta que todos los del equipo hayan tocado el balón, o que los goles de las niñas y los niños valgan lo mismo y todos deban marcar.</p><p>Algunos juegos predeportivos muy usados son:</p><p>• <b>Los diez pases</b>, para practicar el pase y el desmarque.<br>• <b>El balón torre</b>: un jugador de cada equipo se sube a un banco o un aro y su equipo tiene que pasarle el balón para marcar.<br>• <b>Las cuatro esquinas</b> o el <b>rondo</b>: varios jugadores en círculo se pasan el balón y uno en el centro intenta robarlo.<br>• <b>El balón tiro</b> o <b>balón prisionero</b>, para lanzar y recibir.</p>`,
      svg: svg("Juego del rondo: varios jugadores se pasan el balón y uno en el centro intenta robarlo", `${tit("El rondo")}${[0, 1, 2, 3, 4].map((i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5; return punto(+(130 + 60 * Math.cos(a)).toFixed(1), +(102 + 52 * Math.sin(a)).toFixed(1), COL.azul); }).join("")}${punto(130, 102, COL.rojo)}<path d="M130 50 L187 86 L165 144 L95 144 L73 86 Z" fill="none" stroke="${COL.naranja}" stroke-dasharray="5 4"/>${tx(130, 168, "pásala antes de que la roben", 220, { weight: 700 })}`),
    },
    {
      html: `<h3>Juego limpio en el deporte</h3><p>El <mark>juego limpio</mark> (también llamado <i>fair play</i>) es la forma correcta de comportarse en el deporte. Es tan importante como saber jugar bien. Un buen deportista:</p><p>• <b>Respeta las reglas</b>, aunque nadie le esté mirando.<br>• <b>Respeta al árbitro</b> y acepta sus decisiones, aunque no esté de acuerdo. El árbitro también puede equivocarse, como cualquiera.<br>• <b>Respeta a los rivales</b>: sin ellos no habría partido. Les da la mano al empezar y al terminar.<br>• <b>Respeta a sus compañeros</b>: les pasa el balón, les anima cuando fallan y no les echa la culpa.<br>• Sabe <b>ganar</b> sin burlarse de nadie, y sabe <b>perder</b> sin enfadarse ni poner excusas.<br>• Ayuda a un rival que se ha caído o se ha hecho daño.<br>• Reconoce sus faltas.</p><p>También es importante el comportamiento del público y de las familias: animar al propio equipo está bien, pero nunca se debe insultar ni gritar a los jugadores, al árbitro o al entrenador.</p><p>Recuerda: el objetivo principal del deporte en la escuela es <b>aprender, divertirse y hacer amigos</b>. Ganar es bonito, pero no es lo más importante.</p>`,
      svg: svg("Actitudes de juego limpio en el deporte", `${tit("Juego limpio", COL.verde)}${filas([["Reglas", "cúmplelas siempre", COL.azul], ["Árbitro", "acepta sus decisiones", COL.gris], ["Rivales", "dales la mano", COL.rojo], ["Compañeros", "anima y pasa", COL.verde], ["Ganar y perder", "con respeto", COL.morado]], 46, 26, { wa: 90, wb: 130 })}`),
    },
  ],
  figura: {
    titulo: "Deportes de equipo en ocho ideas",
    svg: rejilla([
      ["Equipo", "cooperar y oponerse", COL.azul],
      ["Ataque", "avanzar y marcar", COL.rojo],
      ["Defensa", "recuperar y proteger", COL.gris],
      ["Desmarque", "quedar libre", COL.naranja],
      ["Baloncesto", "5 jugadores, botar", COL.sol],
      ["Fútbol", "sin manos", COL.verde],
      ["Balonmano", "3 pasos, área", COL.morado],
      ["Voleibol", "red, 3 toques", COL.agua],
    ], 4, 86, "Resumen de los deportes de equipo"),
  },
  video: vgen("JSovHosnxOM", "cómo se juega al baloncesto para niños"),
  ejemplos: [
    { enunciado: "En baloncesto, un equipo mete 3 canastas de 2, 1 triple y 2 tiros libres. ¿Cuántos puntos suma?",
      pasos: ["3 × 2 = 6.", "1 × 3 = 3.", "2 × 1 = 2.", "6 + 3 + 2 = 11."],
      resultado: "11 puntos." },
    { enunciado: "En balonmano das cuatro pasos con el balón en la mano. ¿Qué pasa?",
      pasos: ["El máximo son tres pasos."],
      resultado: "Es falta: el balón pasa al otro equipo." },
    { enunciado: "Tu equipo tiene el balón y tu defensor te sigue de cerca. ¿Qué haces?",
      pasos: ["Te mueves a un espacio vacío.", "Pides el balón con la voz o la mano."],
      resultado: "Te desmarcas para quedar libre." },
  ],
  errores: [
    "Ir todos detrás del balón en vez de ocupar el espacio.",
    "Pasar solo a los amigos o a los que mejor juegan.",
    "En baloncesto, dejar de botar y volver a botar (dobles).",
    "En balonmano, pisar el área para lanzar.",
    "Protestar al árbitro o burlarse del rival al ganar.",
  ],
  ejercicios: [
    { q: "¿Qué es un deporte de equipo?", sol: "Un deporte en el que varios jugadores cooperan frente a otro equipo para conseguir un objetivo." },
    { q: "Escribe cuatro elementos comunes de los deportes de equipo.", sol: "Balón, campo, meta, reglamento, jugadores, árbitro (cuatro)." },
    { q: "¿Qué objetivos tiene el equipo que ataca? ¿Y el que defiende?", sol: "Ataque: conservar, avanzar y marcar. Defensa: recuperar, impedir avanzar y proteger la meta." },
    { q: "Explica qué es desmarcarse.", sol: "Moverse para quedar libre del defensor y poder recibir un pase." },
    { q: "¿Cuántos puntos vale una canasta normal, un triple y un tiro libre?", sol: "2, 3 y 1." },
    { q: "¿Quién puede tocar el balón con las manos en fútbol?", sol: "Solo el portero, dentro de su área (y en el saque de banda)." },
    { q: "Escribe tres reglas del balonmano.", sol: "Máximo tres pasos, máximo tres segundos con el balón, nadie salvo el portero pisa el área." },
    { q: "¿Cuántos toques puede dar un equipo de voleibol antes de pasar el balón?", sol: "Tres." },
    { q: "¿Qué es un minideporte? Pon un ejemplo de adaptación.", sol: "Un deporte adaptado a la edad: menos jugadores, campo más pequeño, balón más ligero." },
    { q: "Escribe cuatro actitudes de juego limpio.", sol: "Respetar reglas, árbitro, rivales y compañeros; saber ganar y perder (cuatro)." },
  ],
  quiz: [
    { q: "Con los compañeros hay…", o: ["cooperación", "oposición", "nada"], a: 0, e: "Cooperación." },
    { q: "El equipo con el balón está en…", o: ["ataque", "defensa", "descanso"], a: 0, e: "Ataque." },
    { q: "Moverse para quedar libre es…", o: ["desmarcarse", "marcar", "botar"], a: 0, e: "Desmarcarse." },
    { q: "En baloncesto juegan por equipo…", o: ["5", "7", "11"], a: 0, e: "Cinco." },
    { q: "Un triple vale…", o: ["2 puntos", "3 puntos", "1 punto"], a: 1, e: "3 puntos." },
    { q: "En fútbol no se puede tocar el balón con…", o: ["la cabeza", "las manos", "el pecho"], a: 1, e: "Las manos." },
    { q: "Una falta dentro del área en fútbol es…", o: ["córner", "penalti", "saque de banda"], a: 1, e: "Penalti." },
    { q: "En balonmano, el máximo de pasos con el balón es…", o: ["2", "3", "5"], a: 1, e: "Tres." },
    { q: "En voleibol el balón…", o: ["se golpea", "se coge", "se bota"], a: 0, e: "Se golpea." },
    { q: "Aceptar las decisiones del árbitro es…", o: ["juego limpio", "hacer trampa", "perder"], a: 0, e: "Juego limpio." },
  ],
  examen: [
    { q: "Cada jugador vigila a un rival en la defensa…", o: ["individual", "en zona", "libre"], a: 0, e: "Individual." },
    { q: "En baloncesto, dar más de dos pasos sin botar es…", o: ["pasos", "dobles", "falta técnica"], a: 0, e: "Pasos." },
    { q: "El baloncesto lo inventó…", o: ["James Naismith", "un futbolista", "un árbitro"], a: 0, e: "James Naismith, en 1891." },
    { q: "En voleibol, al recuperar el saque los jugadores…", o: ["rotan", "se sientan", "cambian de campo"], a: 0, e: "Rotan una posición." },
  ],
  feynman: ["Qué tienen en común los deportes de equipo y qué se hace en ataque y en defensa", "Cómo desmarcarse y ocupar el espacio para jugar mejor en equipo", "Cuáles son las reglas básicas del baloncesto, el fútbol, el balonmano y el voleibol"],
  mapa: mapa("DEPORTES DE EQUIPO", "var(--pri)", [
    ["Elementos", "balón · campo · reglas", COL.azul],
    ["Principios", "espacio · desmarque · pase", COL.naranja],
    ["Deportes", "baloncesto · fútbol · balonmano · voley", COL.verde],
    ["Juego limpio", "respeto · ganar y perder", COL.morado],
  ], 250),
  tarjetas: [
    ["Deporte de equipo", "Varios jugadores cooperan frente a otro equipo."],
    ["Ataque", "Fase en la que se tiene el balón."],
    ["Defensa", "Fase en la que se intenta recuperar el balón."],
    ["Desmarque", "Moverse para quedar libre y recibir."],
    ["Pasos", "Falta en baloncesto por andar sin botar."],
    ["Saque de banda", "Sacar con las manos cuando el balón sale por la banda en fútbol."],
    ["Área de balonmano", "Zona de seis metros solo para el portero."],
    ["Juego limpio", "Respetar reglas, árbitro, rivales y compañeros."],
  ],
  familias: ["Ved juntos un partido y fijaos en cómo se desmarcan los jugadores.", "Jugad un 2 contra 2 en el parque con regla de que todos deben tocar el balón.", "Comentad un gesto de juego limpio que hayáis visto en el deporte.", "Probad a jugar con un globo como si fuera voleibol."],
  profesores: PROF("Educación Física: iniciación deportiva; deportes de equipo de invasión y de red; principios tácticos de ataque y defensa; reglamentos básicos; juego limpio", ["Minideportes 3×3 con reglas inclusivas.", "Juego de los diez pases para el desmarque.", "Arbitraje por turnos de los propios alumnos."]),
  fuentes: [RD, wiki("Deporte de equipo", "Deporte_de_equipo"), wiki("Juego limpio", "Juego_limpio")],
  revisado: REV,
};

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Distinguir los puestos y las funciones de un equipo", "Aplicar el pase y el desmarque para ayudar al equipo", "Conocer otros deportes de equipo y el deporte adaptado", "Respetar al árbitro y entender sus señales"],
  lectura: { titulo: "El equipo de los once pases", html: `<p>El equipo de Nora llevaba tres partidos de minibasket perdidos. Siempre pasaba lo mismo: en cuanto alguno cogía el balón, botaba y botaba hasta tirar a canasta él solo. Y casi siempre fallaba.</p><p>Un martes, el entrenador, Héctor, les propuso un juego nuevo.</p><p>—Hoy no vale tirar a canasta hasta que el equipo haya dado <b>cinco pases</b> seguidos sin que el balón caiga al suelo.</p><p>—¡Cinco pases es muchísimo! —protestó Bruno.</p><p>Al principio fue un desastre. Los defensores interceptaban el balón una y otra vez. Pero poco a poco descubrieron el truco: cuando un compañero tenía el balón, los demás tenían que <b>moverse a un espacio libre</b> y levantar la mano para pedirla. Eso se llama <b>desmarcarse</b>.</p><p>Al final del entrenamiento, Nora contó once pases seguidos antes de que Aya encestara sin que nadie la defendiera.</p><p>—¿Lo veis? —dijo Héctor—. Un buen pase corre más que cualquier jugador. Cuando todos participáis, el rival no sabe a quién defender.</p><p>El sábado siguiente ganaron su primer partido. Lo mejor no fue el resultado: fue que los cinco jugadores de la pista habían metido canasta.</p>` },
  tras: {
    "Atacar y defender": [
      ["Los puestos del equipo", `<p>En los deportes de equipo cada jugador tiene un <mark>puesto</mark> o posición, con unas funciones concretas. Pero, en las edades de Primaria, lo mejor es <b>probar todos los puestos</b> para aprender de todo.</p><p>En el <b>fútbol</b> hay:</p><ul><li>El <b>portero</b>: el único que puede tocar el balón con las manos, dentro de su área.</li><li>Los <b>defensas</b>: protegen su portería y quitan el balón al rival.</li><li>Los <b>centrocampistas</b>: unen la defensa con el ataque; recuperan y reparten el juego.</li><li>Los <b>delanteros</b>: buscan el gol.</li></ul><p>En el <b>baloncesto</b> se habla de <b>base</b> (organiza el juego), <b>aleros</b> (tiran y penetran) y <b>pívots</b> (juegan cerca de la canasta y cogen rebotes).</p><p>En el <b>balonmano</b>, además del portero, hay <b>extremos</b>, <b>laterales</b>, <b>central</b> y <b>pivote</b>.</p><p>La colocación del equipo en el campo se llama <b>sistema de juego</b>. Por ejemplo, en fútbol 7 un sistema muy usado es el <b>2-3-1</b>: dos defensas, tres centrocampistas y un delantero, más el portero.</p><p>Aunque cada uno tenga su puesto, todos atacan cuando su equipo tiene el balón y todos defienden cuando lo pierde.</p>`,
        L6.filas("Fútbol", [["portero", "para con las manos", cAZ], ["defensas", "protegen", cVE], ["centrocampistas", "reparten", cNA], ["delanteros", "buscan el gol", cRO]])],
    ],
    "Principios para jugar en equipo": [
      ["El pase y el desmarque", `<p>Las dos acciones más importantes para que el equipo funcione son el <mark>pase</mark> y el <mark>desmarque</mark>.</p><p>El <b>pase</b> es enviar el balón a un compañero. Para pasar bien:</p><ul><li>Mira antes de pasar: busca al compañero que está <b>libre</b>.</li><li>Pasa con la fuerza justa: ni tan flojo que lo intercepten, ni tan fuerte que no lo pueda controlar.</li><li>Pasa al <b>espacio</b> hacia donde va tu compañero, no adonde estaba.</li><li>En baloncesto y balonmano hay varios pases: de <b>pecho</b>, <b>picado</b> (botando en el suelo) y <b>por encima de la cabeza</b>.</li></ul><p>El <b>desmarque</b> es moverse para librarse del defensor y poder recibir el balón. Para desmarcarte:</p><ul><li>Busca un <b>espacio libre</b>, lejos de los defensores.</li><li>Haz un <b>cambio de ritmo</b> o de dirección para despistar a quien te marca.</li><li>Ponte en una línea de pase limpia y <b>pide el balón</b> con la mano o la voz.</li></ul><p>Recuerda: si tu compañero tiene el balón, tú no te quedas quieto mirando. ¡El jugador sin balón también juega!</p><p>Y en defensa ocurre lo contrario: hay que <b>marcar</b> al rival, colocarse entre él y la portería o la canasta y estar atento para <b>interceptar</b> los pases.</p>`,
        H6.flujo("Jugada", ["veo|libre", "paso|al espacio", "me muevo|desmarque", "recibo|y sigo"], cAZ)],
    ],
    "El voleibol": [
      ["Otros deportes de equipo", `<p>Además del fútbol, el baloncesto, el balonmano y el voleibol, hay muchos otros <mark>deportes de equipo</mark> que puedes practicar:</p><ul><li><b>Hockey</b>: se juega con un stick (palo) y una bola o pastilla. Hay hockey sobre hierba, sobre patines y sobre hielo. España ha ganado muchos campeonatos de hockey sobre patines.</li><li><b>Rugby</b>: se juega con un balón ovalado. El balón solo se puede pasar con la mano <b>hacia atrás</b>. Para marcar un <b>ensayo</b> hay que apoyar el balón detrás de la línea del rival.</li><li><b>Waterpolo</b>: se juega en una piscina, con siete jugadores por equipo, y se marca gol en una portería flotante.</li><li><b>Béisbol y softbol</b>: un equipo batea y el otro intenta eliminar a los corredores.</li><li><b>Ultimate</b>: se juega con un disco volador (frisbi). Es muy especial porque <b>no hay árbitro</b>: los propios jugadores resuelven las faltas con deportividad.</li><li><b>Korfbal</b>: un deporte holandés en el que juegan chicos y chicas en el mismo equipo, lanzando a una cesta sin tablero.</li></ul><p>Todos comparten las mismas ideas: cooperar con los compañeros, oponerse a los rivales y respetar las reglas.</p>`,
        L6.filas("Deportes", [["hockey", "stick y bola", cAZ], ["rugby", "pase hacia atrás", cVE], ["waterpolo", "en la piscina", cNA], ["ultimate", "sin árbitro", cMO]])],
    ],
  },
  final: [
    ["El árbitro y sus señales", `<p>El <mark>árbitro</mark> es la persona que hace cumplir las reglas durante el partido. Su trabajo es muy difícil, porque tiene que decidir en un segundo. Por eso merece <b>respeto</b>, aunque a veces se equivoque.</p><p>Los árbitros usan el <b>silbato</b> y unas <b>señales con los brazos</b> para comunicarse con los jugadores. Algunas de las más conocidas son:</p><ul><li>En fútbol: la <b>tarjeta amarilla</b> es una amonestación; la <b>roja</b> significa expulsión. El brazo extendido hacia una portería indica falta a favor de un equipo.</li><li>En baloncesto: el árbitro hace girar los brazos para señalar <b>pasos</b> (andar con el balón sin botar). Los dedos levantados indican los puntos de una canasta: dos o tres.</li><li>En balonmano: se indica <b>dobles</b> (botar, coger el balón y volver a botar) y se puede excluir a un jugador <b>dos minutos</b>.</li></ul><p>Las <b>faltas personales</b> se pitan cuando un jugador empuja, agarra, golpea o hace la zancadilla a otro.</p><p>En clase, podéis turnaros para hacer de árbitro. Así descubriréis lo complicado que es y aprenderéis mejor las reglas.</p>`,
      H6.dos("Tarjetas", ["AMARILLA", ["aviso", "amonestación", "cuidado"], cNA], ["ROJA", ["expulsión", "fuera del", "partido"], cRO]), ["HIzFblDsJ-w", "Los tipos de faltas en baloncesto", "SIKANA Español", 1886213]],
    ["Deporte para todos", `<p>El deporte es para <mark>todas las personas</mark>, sin importar si son chicos o chicas, ni si tienen alguna discapacidad.</p><p>El <b>deporte femenino</b> ha crecido muchísimo. La selección española de fútbol femenino ganó el Mundial en 2023, y hay grandes jugadoras de baloncesto, balonmano, waterpolo o hockey. En clase, los equipos deben ser <b>mixtos</b>.</p><p>El <b>deporte adaptado</b> cambia algunas reglas o materiales para que puedan jugar personas con discapacidad:</p><ul><li><b>Baloncesto en silla de ruedas</b>: se juega con la misma canasta y la misma pista; los jugadores deben botar el balón cada dos impulsos de la silla.</li><li><b>Goalball</b>: lo juegan personas con discapacidad visual. Todos llevan los ojos tapados y el balón lleva <b>cascabeles</b> dentro para oírlo.</li><li><b>Fútbol para ciegos</b>: también con balón sonoro, y con un guía detrás de la portería.</li><li><b>Boccia</b>: un juego de precisión con bolas, parecido a la petanca.</li></ul><p>Los deportistas con discapacidad compiten en los <b>Juegos Paralímpicos</b>, que se celebran justo después de los Juegos Olímpicos.</p><p>Probar estos deportes en clase, por ejemplo jugar al goalball con los ojos tapados, nos ayuda a ponernos en el lugar de los demás.</p>`,
      H6.rueda("Deporte para todos", "TODOS", [["mixto", cMO], ["silla", cAZ], ["goalball", cVE], ["boccia", cNA]]), ["2VgtcfA7Mvs", "Así es el baloncesto paralímpico", "Paralímpicos TV", 24901]],
  ],
  ejemplos: [
    ["Tu compañero tiene el balón y tú estás detrás de un defensor. ¿Qué haces?", ["Así no te puede pasar: el defensor tapa la línea.", "Me muevo a un espacio libre y pido el balón."], "Desmarcarme a un espacio libre y pedir el balón."],
    ["En fútbol 7 usáis un 2-3-1. ¿Cuántos jugadores hay en total?", ["2 + 3 + 1 = 6 jugadores de campo.", "Hay que sumar el portero."], "Siete jugadores."],
  ],
  errores: ["Botar o conducir el balón sin pasar nunca: el pase es más rápido que el jugador.", "Quedarse quieto cuando un compañero tiene el balón: hay que desmarcarse."],
  ejercicios: [
    ["b", "¿Qué jugador de fútbol puede tocar el balón con las manos?", "El portero, dentro de su área."],
    ["b", "¿Qué es desmarcarse?", "Moverse para librarse del defensor y recibir el balón."],
    ["b", "Nombra tres tipos de pase de baloncesto.", "De pecho, picado y por encima de la cabeza."],
    ["b", "¿Qué significa la tarjeta roja?", "Expulsión."],
    ["b", "¿Qué deporte se juega en una piscina?", "El waterpolo."],
    ["m", "¿Por qué el balón del goalball lleva cascabeles?", "Porque los jugadores no ven y tienen que oírlo."],
    ["m", "¿Hacia dónde se pasa el balón con la mano en rugby?", "Hacia atrás."],
    ["m", "Explica qué es un sistema de juego 2-3-1.", "Dos defensas, tres centrocampistas y un delantero."],
    ["m", "¿Por qué hay que pasar al espacio y no adonde está el compañero?", "Porque se está moviendo y así recibe en carrera."],
    ["m", "¿Qué tiene de especial el ultimate?", "No hay árbitro; los jugadores resuelven las faltas."],
    ["a", "Inventa un juego de pases con una regla que obligue a cooperar.", "Respuesta abierta."],
    ["a", "Haz de árbitro en un partido y anota las faltas que pitas.", "Respuesta abierta."],
    ["a", "Busca información sobre un deportista paralímpico español.", "Respuesta abierta."],
    ["a", "Dibuja un campo y coloca a tu equipo en un sistema de juego.", "Respuesta abierta."],
  ],
  quiz: [
    ["El jugador que organiza el juego en baloncesto es el…", ["base", "pívot", "portero"], "Puestos."],
    ["Moverse para recibir el balón es…", ["desmarcarse", "marcar", "interceptar"], "Desmarque."],
    ["En rugby el pase con la mano va…", ["hacia atrás", "hacia delante", "hacia arriba"], "Rugby."],
    ["La tarjeta amarilla es…", ["una amonestación", "una expulsión", "un gol"], "Árbitro."],
    ["El goalball lo juegan personas con…", ["discapacidad visual", "patines", "raqueta"], "Deporte adaptado."],
  ],
  examen: [
    ["En la lectura, ¿cuántos pases tenían que dar antes de tirar?", ["cinco", "once", "tres"], "Lectura."],
    ["¿Dónde compiten los deportistas con discapacidad?", ["en los Juegos Paralímpicos", "solo en su ciudad", "en ningún sitio"], "Deporte adaptado."],
  ],
  tarjetas: [
    ["Puestos", "Portero, defensas, centrocampistas y delanteros; base, alero y pívot."],
    ["Pase y desmarque", "Pasar al compañero libre y moverse a un espacio libre."],
    ["Otros deportes", "Hockey, rugby, waterpolo, ultimate, korfbal."],
    ["Árbitro y deporte para todos", "Tarjetas y señales; deporte mixto y adaptado."],
  ],
  glosario: [
    ["Puesto", "Posición y función de un jugador en el equipo."],
    ["Sistema de juego", "Forma de colocar al equipo en el campo."],
    ["Pase", "Envío del balón a un compañero."],
    ["Desmarque", "Movimiento para librarse del defensor."],
    ["Marcar", "Vigilar de cerca a un rival."],
    ["Interceptar", "Cortar un pase del equipo contrario."],
    ["Ensayo", "Forma de puntuar en rugby apoyando el balón."],
    ["Pasos", "Falta de andar con el balón sin botarlo."],
    ["Dobles", "Falta de volver a botar tras coger el balón."],
    ["Deporte adaptado", "Deporte modificado para personas con discapacidad."],
    ["Goalball", "Deporte con balón sonoro y ojos tapados."],
    ["Juegos Paralímpicos", "Competición mundial de deporte adaptado."],
  ],
  situacion: {
    titulo: "La liga de los pases",
    reto: "La clase organiza una pequeña liga en la que se premia la cooperación tanto como los goles.",
    pasos: ["Formar equipos mixtos y elegir un sistema de juego.", "Jugar partidos en los que cada gol vale doble si antes ha habido cinco pases.", "Turnarse para hacer de árbitro con las señales aprendidas.", "Jugar una jornada de deporte adaptado: goalball con los ojos tapados."],
    producto: "Una clasificación de la liga con puntos por goles y por juego limpio.",
    evaluacion: ["Ocupa su puesto y ayuda en ataque y defensa.", "Pasa y se desmarca.", "Respeta al árbitro y conoce sus señales.", "Valora el deporte adaptado y mixto."],
  },
});
