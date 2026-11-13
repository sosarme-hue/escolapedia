// Educación Física 5º de Primaria: deportes de equipo. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, nino, pelota, tick, equis } = require("./_pri5b");

// Campo esquemático con dos metas.
const campo = (meta = "port") => `<rect x="20" y="40" width="220" height="110" rx="4" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><path d="M130 40 V150" stroke="#fff" stroke-width="2"/><circle cx="130" cy="95" r="16" fill="none" stroke="#fff" stroke-width="2"/>${meta === "port" ? `<rect x="14" y="80" width="6" height="30" fill="var(--card)" stroke="var(--ink)"/><rect x="240" y="80" width="6" height="30" fill="var(--card)" stroke="var(--ink)"/>` : `<circle cx="32" cy="95" r="7" fill="none" stroke="var(--red)" stroke-width="2.5"/><circle cx="228" cy="95" r="7" fill="none" stroke="var(--red)" stroke-width="2.5"/>`}`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Deportes de equipo",
  minutos: 50,
  objetivos: ["Explicar qué es un deporte y qué lo diferencia de un juego", "Identificar los elementos comunes de los deportes de equipo", "Conocer las reglas básicas del fútbol, el baloncesto, el balonmano y el voleibol", "Distinguir deportes de invasión y de red", "Conocer deportes alternativos y adaptados que favorecen la inclusión", "Practicar los deportes con juego limpio y como buen espectador"],
  claves: ["deporte", "reglamento", "federación", "árbitro", "deporte de invasión", "deporte de red", "fútbol", "baloncesto", "balonmano", "voleibol", "falta", "fuera de banda", "rotación", "deporte adaptado", "deporte alternativo"],
  pregunta: {
    texto: "En el recreo jugáis al fútbol con una pelota de tenis, dos mochilas como portería y sin árbitro. ¿Es eso un deporte o un juego?",
    respuesta: "Es un <b>juego</b> basado en un deporte. Un <mark>deporte</mark> tiene un <b>reglamento</b> oficial igual en todo el mundo, competiciones organizadas por <b>federaciones</b>, unas medidas de campo y de balón concretas y árbitros. En el recreo adaptáis las reglas a lo que tenéis, ¡y eso también está muy bien!",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un deporte de equipo?</h3><p>Un <mark>deporte</mark> es una actividad física en la que se compite siguiendo unas <b>reglas fijas</b>, recogidas en un <b>reglamento</b>. Se diferencia de un juego en que:</p><p>• Sus reglas son <b>oficiales</b> y las mismas en todo el mundo.<br>• Está organizado por <b>federaciones</b> (la Federación Española de Baloncesto, la de Fútbol...) que organizan competiciones y ligas.<br>• Se compite para ganar, con resultados registrados y árbitros que hacen cumplir las reglas.</p><p>Los <mark>deportes de equipo</mark> son aquellos en los que varios jugadores colaboran para superar a otro equipo. Todos tienen unos <b>elementos comunes</b>:</p><p>• Un <b>reglamento</b>: lo que se puede y no se puede hacer.<br>• Un <b>terreno de juego</b> con unas medidas y unas líneas.<br>• Un <b>móvil</b>: normalmente un balón, aunque también puede ser un disco, una pelota pequeña...<br>• Una <b>meta</b> u objetivo: la portería, la canasta, el suelo del campo contrario...<br>• <b>Compañeros</b> y <b>adversarios</b>.<br>• Un <b>tiempo</b> de juego o un número de puntos para ganar.<br>• Un <b>árbitro</b> o jueces.</p><p>Cuando adaptamos un deporte (menos jugadores, campo más pequeño, balón más blando) para aprender, hablamos de <b>minideporte</b> o deporte adaptado a la edad, como el minibasket.</p>`,
      svg: svg("Elementos comunes de los deportes de equipo: reglamento, terreno, móvil, meta, jugadores, tiempo y árbitro", `${tit("Elementos comunes")}${fichas([["Reglamento", "reglas oficiales", COL.rojo], ["Terreno", "medidas y líneas", COL.verde], ["Móvil", "balón, disco…", COL.naranja], ["Meta", "portería, canasta", COL.azul], ["Jugadores", "compañeros y rivales", COL.morado], ["Árbitro", "hace cumplir", COL.gris]], 2, 34)}`),
      video: vid("a9xygFavguo"),
    },
    {
      html: `<h3>Deportes de invasión y de red</h3><p>Los deportes de equipo se pueden agrupar según cómo se enfrentan los equipos:</p><p>• <mark>Deportes de invasión</mark>: los dos equipos comparten el mismo espacio y se mezclan. Para conseguir el objetivo hay que «invadir» el campo contrario y llegar a su meta, mientras el otro equipo defiende. Hay contacto (limitado por las reglas) y un continuo cambio entre ataque y defensa. Ejemplos: fútbol, baloncesto, balonmano, hockey, rugby, waterpolo, ultimate.</p><p>• <mark>Deportes de red</mark> (o de cancha dividida): cada equipo está en su mitad del campo, separados por una red, y no hay contacto con los rivales. El objetivo es enviar el móvil al campo contrario de forma que el otro equipo no pueda devolverlo. Ejemplos: voleibol, bádminton por parejas, tenis de dobles, pádel.</p><p>• Hay otros, como los <b>deportes de bate y campo</b> (béisbol, sófbol), en los que los equipos se turnan para batear y para defender el campo.</p><p>En los deportes de invasión son muy importantes el <b>desmarque</b>, el <b>marcaje</b> y el pase. En los de red, la <b>colocación</b> en el campo, la <b>anticipación</b> y la precisión para enviar el móvil a los huecos.</p>`,
      svg: svg("Deportes de invasión, con equipos mezclados en el mismo campo, y deportes de red, con campos separados", `${tit("Invasión o red")}${cj2(14, 40, 112, 80, "Invasión", "campo compartido", COL.rojo)}${cj2(134, 40, 112, 80, "Red", "campos separados", COL.azul)}${tx(70, 140, "fútbol, baloncesto", 112)}${tx(70, 156, "balonmano, hockey", 112)}${tx(190, 140, "voleibol, bádminton", 112)}${tx(190, 156, "pádel, tenis dobles", 112)}`),
    },
    {
      html: `<h3>El fútbol</h3><p>El <mark>fútbol</mark> es el deporte más practicado del mundo. Se juega con los <b>pies</b> (y también con la cabeza, el pecho o el muslo), pero no con las manos ni los brazos, salvo el portero dentro de su área.</p><p>Reglas básicas del fútbol 11:</p><p>• <b>Jugadores</b>: 11 por equipo, uno de ellos portero. En categorías infantiles se juega al <b>fútbol 7</b> o al <b>fútbol sala</b> (5 jugadores).<br>• <b>Objetivo</b>: meter el balón en la portería contraria. Gana quien marca más goles.<br>• <b>Duración</b>: dos partes de 45 minutos.<br>• <b>Fuera de banda</b>: cuando el balón sale por la línea lateral, se saca con las dos manos, por encima de la cabeza y con los dos pies en el suelo.<br>• <b>Saque de puerta</b> y <b>córner</b>: si el balón sale por la línea de fondo, saca de puerta el portero si lo tocó por último un atacante, y se saca de esquina (córner) si lo tocó un defensor.<br>• <b>Faltas</b>: empujar, zancadillear, agarrar, golpear o tocar el balón con la mano. Se sanciona con <b>tiro libre</b>; si es dentro del área, con <b>penalti</b>.<br>• <b>Tarjetas</b>: amarilla (advertencia) y roja (expulsión).<br>• El <b>fuera de juego</b> es una regla más compleja que evita que un atacante espere el balón junto a la portería sin defensores delante.</p>`,
      svg: svg("Campo de fútbol con dos porterías y reglas básicas", `${tit("Fútbol")}${campo("port")}${pelota(150, 110, 7)}${tx(130, 166, "11 jugadores · 2 × 45 min · sin manos", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>El baloncesto</h3><p>El <mark>baloncesto</mark> se juega con las <b>manos</b>. Lo inventó en 1891 un profesor de Educación Física, James Naismith, para que sus alumnos pudieran hacer deporte en un gimnasio durante el invierno. Al principio usaba cestas de melocotones como canastas.</p><p>Reglas básicas:</p><p>• <b>Jugadores</b>: 5 por equipo en el campo. En categorías infantiles se juega al <b>minibasket</b>, con canastas más bajas y balón más pequeño.<br>• <b>Objetivo</b>: encestar en la canasta del rival.<br>• <b>Puntuación</b>: una canasta vale <b>2 puntos</b>; si se lanza desde detrás de la línea de triple, <b>3 puntos</b>; y cada tiro libre, <b>1 punto</b>.<br>• <b>Duración</b>: cuatro periodos de 10 minutos.<br>• Para avanzar con el balón hay que <b>botarlo</b>. No se puede:<br>– Andar o correr con el balón en las manos sin botar (<b>pasos</b>).<br>– Botar con las dos manos a la vez o volver a botar después de haber cogido el balón (<b>dobles</b>).<br>– Golpear el balón con el pie a propósito.<br>• <b>Faltas personales</b>: tocar, empujar o sujetar al rival. Cuando un jugador comete 5 faltas, queda eliminado del partido.<br>• Hay también reglas de tiempo, como no estar más de 3 segundos dentro de la zona del rival.</p>`,
      svg: svg("Puntuación en baloncesto: canasta normal 2 puntos, triple 3 puntos, tiro libre 1 punto", `${tit("Baloncesto: puntos")}${filas([["1 punto", "tiro libre", COL.verde], ["2 puntos", "canasta normal", COL.azul], ["3 puntos", "desde la línea de triple", COL.rojo]], 56, 32, { x: 22, wa: 70, wb: 150 })}${tx(130, 152, "5 jugadores · 4 × 10 min", 236, { weight: 700 })}${tx(130, 170, "prohibido: pasos y dobles", 236, { color: COL.rojo })}`),
      video: vid("7fR9uoFMEtg"),
    },
    {
      html: `<h3>El balonmano</h3><p>El <mark>balonmano</mark> se juega con las <b>manos</b>, pasando y lanzando un balón pequeño para meterlo en la portería contraria. Es un deporte muy rápido y con muchos goles. España tiene una gran tradición en este deporte, tanto en equipos masculinos como femeninos.</p><p>Reglas básicas:</p><p>• <b>Jugadores</b>: 7 por equipo (6 jugadores de campo y un portero).<br>• <b>Duración</b>: dos partes de 30 minutos.<br>• <b>Área de portería</b>: delimitada por una línea a 6 metros. Solo el portero puede estar dentro. Los demás pueden lanzar <b>saltando</b> desde fuera y caer dentro después de soltar el balón.<br>• Con el balón en las manos se pueden dar como máximo <b>3 pasos</b> y tenerlo como máximo <b>3 segundos</b>. Después hay que pasar, lanzar o botar.<br>• No se puede tocar el balón con las piernas por debajo de la rodilla (salvo el portero).<br>• No se puede arrancar el balón de las manos del rival, ni empujarlo o agarrarlo.<br>• Las faltas graves se sancionan con <b>exclusión</b> de 2 minutos; y cerca de la portería, con <b>penalti</b> desde 7 metros.</p><p>En el colegio se puede jugar con balones blandos y porterías pequeñas, adaptando las reglas.</p>`,
      svg: svg("Campo de balonmano con área de 6 metros y reglas de 3 pasos y 3 segundos", `${tit("Balonmano")}${campo("port")}<path d="M20 62 Q66 95 20 128" fill="#fecaca" fill-opacity=".6" stroke="var(--red)" stroke-width="2"/><path d="M240 62 Q194 95 240 128" fill="#fecaca" fill-opacity=".6" stroke="var(--red)" stroke-width="2"/>${tx(130, 166, "7 jugadores · 3 pasos · 3 segundos", 236, { weight: 700 })}`),
      video: vid("0ZDTOFFxmUY"),
    },
    {
      html: `<h3>El voleibol</h3><p>El <mark>voleibol</mark> es un deporte de <b>red</b>: los dos equipos están separados y nunca se tocan. El objetivo es que el balón toque el suelo del campo contrario, o que el rival no pueda devolverlo correctamente.</p><p>Reglas básicas:</p><p>• <b>Jugadores</b>: 6 por equipo en la pista. En categorías infantiles se juega al <b>minivoley</b>, con menos jugadores (3 o 4), campo más pequeño y red más baja.<br>• El balón se <b>golpea</b>, nunca se agarra ni se lanza.<br>• Cada equipo puede dar como máximo <b>3 toques</b> antes de pasar el balón al otro campo, y un mismo jugador no puede tocarlo dos veces seguidas.<br>• Hay dos golpeos básicos: el <b>toque de dedos</b>, por encima de la frente con las yemas de los dedos, y el <b>toque de antebrazos</b> (o «mancheta»), con los brazos estirados y juntos, para balones bajos.<br>• Cada jugada empieza con un <b>saque</b> desde detrás de la línea de fondo.<br>• Cada vez que un equipo recupera el saque, sus jugadores hacen una <b>rotación</b>: avanzan un puesto en el sentido de las agujas del reloj. Así, todos pasan por todas las posiciones.<br>• Los partidos se juegan a sets de 25 puntos; gana quien consigue antes 3 sets.</p>`,
      svg: svg("Voleibol: campos separados por una red, máximo tres toques, rotación", `${tit("Voleibol")}<rect x="20" y="60" width="220" height="90" rx="4" fill="#fde68a" stroke="var(--marron, #8a5a2b)" stroke-width="2"/><path d="M130 50 V150" stroke="var(--ink)" stroke-width="4"/><path d="M130 50 V80" stroke="var(--ink)" stroke-width="8" stroke-dasharray="2 2"/>${pelota(176, 46, 8)}${et(75, 105, "equipo A", 80, { size: 11, color: COL.azul })}${et(185, 105, "equipo B", 80, { size: 11, color: COL.rojo })}${tx(130, 168, "6 jugadores · 3 toques · rotación", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>Comparamos los deportes de equipo</h3><p>Veamos en una tabla las principales características de estos cuatro deportes:</p>${tabla(["", "Fútbol", "Baloncesto", "Balonmano", "Voleibol"], [["Tipo", "invasión", "invasión", "invasión", "red"], ["Jugadores", "11", "5", "7", "6"], ["Se juega con", "pies", "manos (bote)", "manos (pase)", "golpeos"], ["Meta", "portería", "canasta", "portería", "suelo rival"], ["Duración", "2 × 45 min", "4 × 10 min", "2 × 30 min", "a sets de 25"], ["Regla clave", "no tocar con la mano", "pasos y dobles", "3 pasos, 3 segundos", "máximo 3 toques"], ["Versión infantil", "fútbol 7, fútbol sala", "minibasket", "minibalonmano", "minivoley"]])}<p>Aunque sean muy diferentes, todos comparten los <b>principios tácticos</b> que ya conoces: en ataque, conservar el balón, avanzar y conseguir el objetivo; en defensa, recuperar el balón, impedir el avance y proteger la meta.</p><p>También comparten valores: <b>trabajo en equipo</b>, <b>respeto</b> a compañeros, rivales y árbitros, <b>esfuerzo</b> y <b>juego limpio</b>.</p><p>Y en todos se puede jugar en equipos <b>mixtos</b>: chicas y chicos pueden practicar cualquier deporte. Hoy hay grandes deportistas españolas en el fútbol, el baloncesto, el balonmano y el voleibol que son ejemplo para muchos niños y niñas.</p>`,
      svg: svg("Número de jugadores por equipo en fútbol, baloncesto, balonmano y voleibol", `${tit("Jugadores por equipo")}${[["fútbol", 11, COL.verde], ["baloncesto", 5, COL.naranja], ["balonmano", 7, COL.azul], ["voleibol", 6, COL.morado]].map(([s, n, c], i) => `${et(52, 52 + i * 30, s, 80, { size: 11, color: c, anchor: "start" })}${[...Array(n)].map((_, k) => `<circle cx="${130 + k * 8}" cy="${48 + i * 30}" r="3.5" fill="${c}"/>`).join("")}${t(244, 52 + i * 30, String(n), { size: 12, color: c })}`).join("")}${tx(130, 172, "¡y todos pueden ser mixtos!", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>Deportes alternativos y deportes adaptados</h3><p>Además de los deportes más conocidos, existen otros que son muy interesantes en el colegio:</p><p><b>Deportes alternativos</b>: deportes nuevos o poco conocidos, con material sencillo y reglas que favorecen la participación de todos, sin importar el nivel:</p><p>• <b>Ultimate</b>: se juega con un disco volador. No se puede correr con el disco y no hay contacto. ¡Ni siquiera hay árbitro! Los propios jugadores resuelven las dudas: es el «espíritu del juego».<br>• <b>Colpbol</b>: inventado en Valencia por un profesor de Educación Física; se golpea el balón con las manos, nunca se agarra, y los equipos son mixtos.<br>• <b>Korfbal</b>: de origen neerlandés, con equipos obligatoriamente mixtos y una canasta alta sin tablero.<br>• <b>Floorball</b> (hockey con stick de plástico y pelota agujereada).</p><p><b>Deportes adaptados</b>: deportes modificados para que puedan practicarlos personas con discapacidad. Algunos se juegan en los <b>Juegos Paralímpicos</b>:</p><p>• <b>Baloncesto en silla de ruedas</b>.<br>• <b>Goalball</b>: para personas con discapacidad visual. Se juega con los ojos tapados y un balón con cascabeles dentro; hay que lanzarlo rodando a la portería rival.<br>• <b>Fútbol para ciegos</b> y <b>voleibol sentado</b>.</p><p>Practicar estos deportes en clase, por ejemplo jugando al goalball con antifaces, nos ayuda a ponernos en el lugar de los demás.</p>`,
      svg: svg("Deportes alternativos (ultimate, colpbol, korfbal) y adaptados (baloncesto en silla, goalball)", `${tit("Más deportes")}<rect x="14" y="36" width="112" height="104" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><rect x="134" y="36" width="112" height="104" rx="10" fill="#dbeafe" stroke="var(--pen)" stroke-width="2"/>${et(70, 60, "Alternativos", 100, { size: 12, color: COL.verde })}${et(190, 60, "Adaptados", 100, { size: 12, color: COL.azul })}${["ultimate", "colpbol", "korfbal"].map((s, i) => tx(70, 84 + i * 16, s, 100)).join("")}${["silla de ruedas", "goalball", "voleibol sentado"].map((s, i) => tx(190, 84 + i * 16, s, 100)).join("")}${tx(130, 160, "deporte para todas las personas", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>Jugadores, árbitros y espectadores</h3><p>En el deporte participan muchas personas, y todas deben comportarse con <b>respeto</b>:</p><p>• Los <b>jugadores</b>: esforzarse, respetar las reglas, aceptar las decisiones del árbitro, animar a los compañeros y saludar al rival al final, gane quien gane.</p><p>• Los <b>árbitros</b>: hacen cumplir el reglamento de forma imparcial. También se equivocan, como todos, y su trabajo es difícil. Sin árbitros no habría partidos. En el colegio, ser árbitro por turnos ayuda a conocer bien las reglas y a entender lo complicado que es.</p><p>• Los <b>entrenadores</b>: enseñan, organizan y animan. Un buen entrenador valora el esfuerzo, el progreso y el compañerismo, no solo la victoria.</p><p>• Los <b>espectadores</b> y la afición: animan a su equipo sin insultar al contrario ni al árbitro. Aplaudir una buena jugada del rival es señal de deportividad.</p><p>• Las <b>familias</b>: apoyan y animan, sin presionar ni dar instrucciones desde la grada.</p><p>Por desgracia, a veces en el deporte se ven insultos, gritos o violencia, incluso en partidos de niños. Eso no es deporte. Recuerda que el deporte es, sobre todo, una forma de <b>disfrutar</b>, de cuidar la salud y de hacer amigos. Ganar es bonito, pero no a cualquier precio.</p>`,
      svg: svg("Buen comportamiento de jugadores, árbitros, entrenadores y espectadores", `${tit("Todos con respeto")}${filas([["jugadores", "reglas y saludo final", COL.azul], ["árbitros", "imparciales", COL.gris], ["entrenadores", "valoran el esfuerzo", COL.verde], ["afición", "anima sin insultar", COL.naranja]], 52, 30, { x: 22, wa: 90, wb: 136 })}${tx(130, 172, "ganar, pero no a cualquier precio", 236, { weight: 700 })}`),
    },
  ],
  figura: {
    titulo: "Los deportes de equipo en ocho ideas",
    svg: rejilla([
      ["Deporte", "reglamento y federación", COL.rojo],
      ["Invasión", "campo compartido", COL.naranja],
      ["Red", "campos separados", COL.azul],
      ["Fútbol", "11 jugadores, pies", COL.verde],
      ["Baloncesto", "5 jugadores, botar", COL.sol],
      ["Balonmano", "7 jugadores, 3 pasos", COL.agua],
      ["Voleibol", "6 jugadores, 3 toques", COL.morado],
      ["Inclusión", "alternativos y adaptados", COL.gris],
    ], 4, 86, "Resumen de los deportes de equipo"),
  },
  video: vgen("a9xygFavguo", "reglas básicas deportes de equipo para niños"),
  ejemplos: [
    { enunciado: "En baloncesto, un equipo mete 3 canastas normales, 2 triples y 4 tiros libres. ¿Cuántos puntos tiene?",
      pasos: ["Canastas normales: 3 × 2 = 6.", "Triples: 2 × 3 = 6.", "Tiros libres: 4 × 1 = 4.", "Total: 6 + 6 + 4."],
      resultado: "16 puntos." },
    { enunciado: "En balonmano, un jugador recibe el balón, da 4 pasos y lanza. ¿Es correcto?",
      pasos: ["El máximo son 3 pasos con el balón en las manos.", "Ha dado 4."],
      resultado: "No: es una infracción (pasos) y el balón pasa al otro equipo." },
    { enunciado: "Clasifica como invasión o red: hockey, pádel, rugby, bádminton por parejas.",
      pasos: ["Hockey y rugby: los equipos se mezclan en el mismo campo.", "Pádel y bádminton: campos separados por una red."],
      resultado: "Invasión: hockey y rugby. Red: pádel y bádminton." },
  ],
  errores: [
    "Pensar que juego y deporte son lo mismo: el deporte tiene reglamento oficial y federaciones.",
    "Creer que en voleibol se puede agarrar el balón: solo se golpea.",
    "Confundir pasos (andar sin botar) con dobles (botar con dos manos o volver a botar).",
    "Insultar al árbitro cuando se equivoca: hay que respetar sus decisiones.",
    "Pensar que hay deportes de chicos y de chicas: todos pueden practicar cualquier deporte.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia un deporte de un juego?", sol: "El deporte tiene reglas oficiales iguales en todo el mundo, federaciones, competiciones y árbitros." },
    { q: "Escribe cinco elementos comunes de los deportes de equipo.", sol: "Reglamento, terreno de juego, móvil, meta, jugadores (compañeros y rivales), tiempo y árbitro." },
    { q: "¿Qué diferencia hay entre deportes de invasión y de red? Pon dos ejemplos de cada.", sol: "En los de invasión los equipos comparten el campo (fútbol, baloncesto); en los de red están separados (voleibol, bádminton)." },
    { q: "¿Cómo se saca un fuera de banda en fútbol?", sol: "Con las dos manos, por encima de la cabeza y con los dos pies en el suelo." },
    { q: "¿Cuántos puntos vale cada tipo de canasta en baloncesto?", sol: "Tiro libre 1, canasta normal 2 y triple 3." },
    { q: "Explica la regla de los 3 pasos y los 3 segundos del balonmano.", sol: "Con el balón en las manos solo se pueden dar 3 pasos y tenerlo 3 segundos." },
    { q: "¿Qué dos toques básicos hay en voleibol?", sol: "El toque de dedos y el toque de antebrazos." },
    { q: "¿Qué es la rotación en voleibol y para qué sirve?", sol: "Avanzar un puesto cada vez que se recupera el saque; así todos pasan por todas las posiciones." },
    { q: "¿Qué es un deporte alternativo? ¿Y uno adaptado? Pon un ejemplo de cada.", sol: "Alternativo: nuevo o poco conocido que favorece la participación (ultimate). Adaptado: modificado para personas con discapacidad (goalball)." },
    { q: "Escribe tres comportamientos de un buen espectador.", sol: "Animar sin insultar, respetar al árbitro, aplaudir las buenas jugadas del rival." },
  ],
  quiz: [
    { q: "Un equipo de fútbol 11 tiene…", o: ["11 jugadores", "7 jugadores", "5 jugadores"], a: 0, e: "11, uno de ellos portero." },
    { q: "Un triple en baloncesto vale…", o: ["2 puntos", "3 puntos", "1 punto"], a: 1, e: "3 puntos." },
    { q: "En balonmano, dentro del área solo puede estar…", o: ["el capitán", "el árbitro", "el portero"], a: 2, e: "El portero." },
    { q: "El voleibol es un deporte de…", o: ["red", "invasión", "bate"], a: 0, e: "De red." },
    { q: "En voleibol, cada equipo puede dar como máximo…", o: ["1 toque", "3 toques", "5 toques"], a: 1, e: "3 toques." },
    { q: "Andar con el balón en las manos sin botar en baloncesto es…", o: ["dobles", "falta personal", "pasos"], a: 2, e: "Pasos." },
    { q: "El baloncesto lo inventó…", o: ["un profesor de Educación Física", "un futbolista", "un rey"], a: 0, e: "James Naismith, profesor." },
    { q: "El goalball es un deporte para personas con discapacidad…", o: ["auditiva", "visual", "ninguna"], a: 1, e: "Visual." },
    { q: "En el ultimate se juega con…", o: ["un balón", "un stick", "un disco"], a: 2, e: "Un disco volador." },
    { q: "La tarjeta roja significa…", o: ["expulsión", "advertencia", "gol"], a: 0, e: "Expulsión." },
  ],
  examen: [
    { q: "La versión infantil del baloncesto es el…", o: ["minivoley", "minibasket", "fútbol 7"], a: 1, e: "Minibasket." },
    { q: "Un partido de balonmano dura…", o: ["2 × 45 min", "4 × 10 min", "2 × 30 min"], a: 2, e: "Dos partes de 30 minutos." },
    { q: "Las competiciones oficiales las organizan las…", o: ["federaciones", "familias", "aficiones"], a: 0, e: "Las federaciones." },
    { q: "Un deporte con equipos obligatoriamente mixtos es el…", o: ["rugby", "korfbal", "waterpolo"], a: 1, e: "El korfbal." },
  ],
  feynman: ["Qué diferencia un deporte de un juego", "Las reglas básicas de un deporte de equipo que conozcas", "Por qué es importante respetar al árbitro"],
  mapa: mapa("DEPORTES DE EQUIPO", "var(--pri)", [
    ["Invasión", "fútbol · baloncesto · balonmano", COL.rojo],
    ["Red", "voleibol · minivoley", COL.azul],
    ["Inclusión", "alternativos · adaptados", COL.verde],
    ["Valores", "respeto · juego limpio", COL.naranja],
  ], 250),
  tarjetas: [
    ["Deporte", "Actividad física reglada y competitiva."],
    ["Reglamento", "Conjunto de reglas oficiales de un deporte."],
    ["Deporte de invasión", "Equipos en el mismo campo buscando la meta rival."],
    ["Deporte de red", "Equipos separados por una red."],
    ["Dobles", "Botar con dos manos o volver a botar tras coger el balón."],
    ["Rotación", "Cambio de posición de los jugadores en voleibol."],
    ["Goalball", "Deporte adaptado con balón sonoro y ojos tapados."],
    ["Ultimate", "Deporte con disco, sin contacto ni árbitro."],
  ],
  familias: ["Ved juntos un partido y explicad las reglas que vayan apareciendo.", "Jugad en el parque a un minideporte con reglas adaptadas.", "Probad a jugar al goalball en casa con un antifaz y una pelota con cascabel.", "Comentad ejemplos de buen y mal comportamiento en el deporte."],
  profesores: PROF("Educación Física: el deporte y sus elementos; deportes de invasión y de red; reglas básicas de fútbol, baloncesto, balonmano y voleibol; deportes alternativos y adaptados; valores en el deporte", ["Minideportes con reglas adaptadas y arbitraje rotatorio del alumnado.", "Sesión de deportes adaptados (goalball, voleibol sentado).", "Mural comparativo de reglas de distintos deportes."]),
  fuentes: [RD, wiki("Deporte de equipo", "Deporte_de_equipo"), wiki("Goalball", "Goalball"), wiki("Ultimate (deporte)", "Ultimate_(deporte)")],
  revisado: REV,
};
