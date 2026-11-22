// Educación Física 6º de Primaria: juegos y deportes colectivos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, ciclo, vid, vgen, RD, PROF, nino, suelo, pelota } = require("./_pri6b");

// Campo visto desde arriba con dos porterías o canastas.
function campo(x = 20, y = 40, w = 220, h = 110) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/><path d="M${x + w / 2} ${y} V${y + h}" stroke="var(--leaf)" stroke-width="2"/><circle cx="${x + w / 2}" cy="${y + h / 2}" r="16" fill="none" stroke="var(--leaf)" stroke-width="2"/><rect x="${x}" y="${y + h / 2 - 22}" width="20" height="44" fill="none" stroke="var(--leaf)" stroke-width="2"/><rect x="${x + w - 20}" y="${y + h / 2 - 22}" width="20" height="44" fill="none" stroke="var(--leaf)" stroke-width="2"/>`;
}
const ficha = (x, y, c, s = "") => `<circle cx="${x}" cy="${y}" r="8" fill="${c}"/>${s ? t(x, y + 3.5, s, { size: 9, color: "#fff" }) : ""}`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Juegos y deportes colectivos",
  minutos: 50,
  objetivos: ["Distinguir juegos y deportes y clasificar los deportes colectivos", "Conocer los elementos comunes de los deportes colectivos", "Aplicar principios de ataque y defensa", "Conocer las reglas básicas de varios deportes", "Valorar la cooperación y el trabajo en equipo"],
  claves: ["juego", "deporte", "reglamento", "cooperación", "oposición", "ataque", "defensa", "táctica", "pase", "desmarque", "espacio libre", "balonmano", "baloncesto", "voleibol", "fútbol"],
  pregunta: {
    texto: "¿Por qué un equipo con jugadores menos rápidos o menos altos puede ganar a otro con jugadores mejores individualmente?",
    respuesta: "Porque en los deportes colectivos lo más importante es <mark>jugar en equipo</mark>: pasarse el balón, moverse para buscar huecos libres, ayudarse en defensa y seguir un plan común (la <b>táctica</b>). Un equipo bien organizado, en el que todos colaboran, suele ser más fuerte que un grupo de buenos jugadores que juegan cada uno por su cuenta.",
  },
  bloques: [
    {
      html: `<h3>Juego y deporte</h3><p>Un <mark>juego</mark> es una actividad libre y divertida, con unas normas que los jugadores pueden acordar y cambiar. Por ejemplo, el pilla-pilla, el balón prisionero o el pañuelo. Existen juegos de todo tipo: populares, tradicionales, cooperativos, de persecución, de puntería…</p><p>Un <mark>deporte</mark> es un juego que se ha <b>institucionalizado</b>, es decir:</p><p>• Tiene un <b>reglamento</b> oficial, escrito y igual en todo el mundo.<br>• Lo organiza una <b>federación</b>, que convoca competiciones.<br>• Tiene un componente de <b>competición</b>: se trata de ganar respetando las reglas.<br>• Requiere una <b>técnica</b> y un entrenamiento.</p><p>Muchos deportes nacieron como juegos populares. Con el tiempo, alguien escribió sus reglas y se fueron extendiendo. El baloncesto, por ejemplo, lo inventó en 1891 un profesor de Educación Física, James Naismith, para que sus alumnos hicieran ejercicio en invierno en el gimnasio.</p><p>En el colegio, lo importante no es ganar, sino <b>aprender</b>, divertirse, cooperar y mejorar. Por eso a menudo se adaptan las reglas: campos más pequeños, menos jugadores o balones más blandos.</p>`,
      svg: svg("Diferencias entre juego y deporte", `${tit("¿Juego o deporte?")}${cj(10, 34, 115, 28, "JUEGO", COL.verde)}${cj(135, 34, 115, 28, "DEPORTE", COL.azul)}${["libre y divertido", "normas pactadas", "se pueden cambiar", "ej.: pañuelo"].map((w, i) => tx(67, 84 + i * 20, w, 112)).join("")}${["reglamento oficial", "federación", "competición", "ej.: baloncesto"].map((w, i) => tx(192, 84 + i * 20, w, 112)).join("")}<path d="M130 70 V160" stroke="var(--line)" stroke-width="1.5"/>`),
    },
    {
      html: `<h3>Tipos de deportes</h3><p>Los deportes se pueden clasificar según con quién y contra quién se juega:</p><p>• <b>Deportes individuales</b>: el deportista compite solo, sin compañeros ni adversarios que le molesten directamente. Por ejemplo, el atletismo, la natación o la gimnasia.</p><p>• <b>Deportes de adversario</b>: un jugador contra otro. Por ejemplo, el tenis, el bádminton o el judo.</p><p>• <b>Deportes colectivos</b> o de equipo: un equipo contra otro. Hay que <mark>cooperar</mark> con los compañeros y <mark>oponerse</mark> a los rivales. Por ejemplo, el fútbol, el baloncesto, el balonmano, el voleibol o el hockey.</p><p>Los deportes colectivos se pueden dividir a su vez en:</p><p>• De <b>invasión</b>: los dos equipos comparten el mismo espacio y se mezclan. Hay que invadir el campo contrario para marcar. Fútbol, baloncesto, balonmano, rugby, hockey.</p><p>• De <b>red o muro</b>: cada equipo está en su campo, separado por una red. No hay contacto. Voleibol.</p><p>• De <b>bate y campo</b>: un equipo batea y el otro defiende el campo. Béisbol, sóftbol.</p>`,
      svg: svg("Clasificación de los deportes: individuales, de adversario y colectivos de invasión o de red", `${tit("Tipos de deportes")}${fichas([["Individual", "atletismo, natación", COL.azul], ["Adversario", "tenis, judo", COL.morado], ["Invasión", "fútbol, baloncesto", COL.verde], ["Red", "voleibol", COL.naranja]])}`),
    },
    {
      html: `<h3>Elementos comunes de los deportes colectivos</h3><p>Aunque cada deporte colectivo tiene sus propias reglas, todos comparten unos <mark>elementos comunes</mark>:</p><p>• Un <b>móvil</b>: el objeto con el que se juega. Normalmente es un balón, pero puede ser una pelota, un disco o un frisbi.</p><p>• Un <b>espacio de juego</b> delimitado: campo, pista o cancha, con sus líneas y zonas.</p><p>• Una <b>meta</b> u objetivo: portería, canasta o el suelo del campo contrario. Hay que conseguir puntos o goles y evitar que los consiga el rival.</p><p>• <b>Compañeros</b> con los que cooperar.</p><p>• <b>Adversarios</b> a los que oponerse.</p><p>• Un <b>reglamento</b>, que dice cuántos jugadores hay, cómo se puede tocar el móvil, cuánto dura el partido o qué se considera falta.</p><p>Entender estos elementos te ayuda a aprender cualquier deporte nuevo, porque muchas ideas se repiten: buscar el espacio libre, pasar al compañero mejor situado, defender la propia meta… Por eso se dice que lo que aprendes en un deporte se <b>transfiere</b> a los demás.</p>`,
      svg: svg("Elementos comunes: móvil, espacio, meta, compañeros, adversarios y reglamento", `${tit("Elementos comunes")}${campo(20, 40, 220, 110)}${ficha(80, 70, "var(--pen)")}${ficha(100, 120, "var(--pen)")}${ficha(160, 80, "var(--red)")}${ficha(170, 120, "var(--red)")}${pelota(118, 92, 6, "var(--sun)")}${tx(130, 168, "móvil · espacio · meta · compañeros · rivales · reglas", 240)}`),
    },
    {
      html: `<h3>Atacar: cuando mi equipo tiene el balón</h3><p>En los deportes colectivos de invasión hay dos situaciones: tener el balón (<b>ataque</b>) o no tenerlo (<b>defensa</b>). Cuando tu equipo tiene el balón, los <mark>principios del ataque</mark> son:</p><p>1. <b>Conservar el balón</b>: no perderlo. Pasar con seguridad, protegerlo con el cuerpo.</p><p>2. <b>Avanzar</b> hacia la meta contraria: con pases, botes o conducciones.</p><p>3. <b>Conseguir el objetivo</b>: lanzar a portería, a canasta, o colocar el balón en el campo rival.</p><p>Para conseguirlo, los jugadores que no tienen el balón son muy importantes. Deben:</p><p>• <b>Desmarcarse</b>: moverse para librarse del defensor y quedar en un <b>espacio libre</b> donde puedan recibir.<br>• <b>Ofrecer líneas de pase</b>: que no haya ningún rival entre el que tiene el balón y tú.<br>• <b>Abrirse</b> y ocupar todo el ancho del campo, para que la defensa tenga que separarse.</p><p>El que tiene el balón debe <b>levantar la cabeza</b> para ver a sus compañeros y elegir la mejor opción: pasar, avanzar o tirar.</p>`,
      svg: svg("Desmarque: el atacante se mueve a un espacio libre para recibir el pase", `${tit("Desmarcarse y pasar")}${campo(20, 40, 220, 110)}${ficha(70, 96, "var(--pen)", "A")}${ficha(180, 104, "var(--pen)", "B")}${ficha(120, 104, "var(--red)")}${ficha(172, 124, "var(--red)")}<path d="M184 96 Q198 80 196 68" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3" fill="none"/>${ficha(196, 58, "var(--pen)", "B")}${fl(78, 92, 186, 60, "var(--sun)", 2.5)}${tx(130, 168, "B busca el espacio libre y recibe", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>Defender: cuando el rival tiene el balón</h3><p>Cuando el equipo contrario tiene el balón, los <mark>principios de la defensa</mark> son los contrarios a los del ataque:</p><p>1. <b>Recuperar el balón</b>: interceptar pases, robar en el bote, presionar.</p><p>2. <b>Impedir el avance</b> del rival hacia nuestra meta.</p><p>3. <b>Proteger la meta</b>: evitar que nos marquen.</p><p>Hay dos formas básicas de organizar la defensa:</p><p>• <b>Defensa individual</b>: cada jugador se encarga de vigilar a un rival concreto y lo sigue por todo el campo. Es buena para aprender a defender, pero cansa mucho.</p><p>• <b>Defensa en zona</b>: cada jugador defiende una parte del campo y se ocupa del rival que entre en ella.</p><p>Consejos para defender bien:</p><p>• Colócate entre tu rival y tu meta.<br>• Mira a la vez el balón y a tu rival.<br>• Mantén las piernas flexionadas para reaccionar rápido.<br>• Ayuda a un compañero si su rival lo ha superado.<br>• Defiende <b>sin hacer falta</b>: respetando el reglamento y sin golpes.</p><p>Cuando se recupera el balón, rápidamente se pasa al ataque. A ese momento se le llama <b>transición</b> o contraataque.</p>`,
      svg: svg("Principios de ataque y de defensa", `${tit("Ataque y defensa")}${cj(10, 34, 115, 28, "ATAQUE", COL.azul)}${cj(135, 34, 115, 28, "DEFENSA", COL.rojo)}${["conservar", "avanzar", "marcar"].map((w, i) => tx(67, 84 + i * 22, `${i + 1}. ${w}`, 112, { weight: 700 })).join("")}${["recuperar", "frenar", "proteger"].map((w, i) => tx(192, 84 + i * 22, `${i + 1}. ${w}`, 112, { weight: 700 })).join("")}<path d="M130 70 V140" stroke="var(--line)" stroke-width="1.5"/>${tx(130, 166, "individual o en zona", 220)}`),
    },
    {
      html: `<h3>Baloncesto y balonmano</h3><p>El <mark>baloncesto</mark> se juega en una pista de 28 × 15 metros, con <b>5 jugadores</b> en cada equipo. El objetivo es encestar el balón en la canasta contraria, que está a 3,05 m de altura. Una canasta vale 2 puntos, 3 si se lanza desde detrás de la línea de triple y 1 cada tiro libre. Reglas básicas:</p><p>• El balón se juega con las manos. Para desplazarse con él hay que <b>botarlo</b>.<br>• No se pueden dar más de dos pasos con el balón en las manos (sería <b>pasos</b>).<br>• No se puede botar, coger el balón y volver a botar (sería <b>dobles</b>).<br>• No se puede empujar ni golpear al rival.</p><p>El <mark>balonmano</mark> se juega en una pista de 40 × 20 metros, con <b>7 jugadores</b> por equipo, uno de ellos portero. El objetivo es meter gol en la portería contraria. Reglas básicas:</p><p>• Se juega con las manos. Se pueden dar tres pasos con el balón y botar.<br>• No se puede tener el balón más de tres segundos parado.<br>• Solo el portero puede estar dentro del <b>área</b> de 6 metros.<br>• No se puede tocar el balón con las piernas por debajo de la rodilla (salvo el portero).</p>`,
      svg: svg("Comparación de baloncesto y balonmano", `${tit("Baloncesto y balonmano")}${cj(92, 34, 76, 26, "Baloncesto", COL.naranja)}${cj(176, 34, 76, 26, "Balonmano", COL.azul)}${[["jugadores", "5", "7"], ["pista", "28 × 15 m", "40 × 20 m"], ["meta", "canasta", "portería"], ["pasos", "2", "3"]].map(([a, b, c], i) => `${et(48, 84 + i * 24, a, 78, { size: 11, color: COL.gris })}${tx(130, 84 + i * 24, b, 76, { weight: 700 })}${tx(214, 84 + i * 24, c, 76, { weight: 700 })}<path d="M12 ${92 + i * 24} H250" stroke="var(--line)"/>`).join("")}`),
    },
    {
      html: `<h3>Voleibol y fútbol</h3><p>El <mark>voleibol</mark> es un deporte de red. Se juega con <b>6 jugadores</b> por equipo en una pista de 18 × 9 metros dividida por una red. El objetivo es que el balón toque el suelo del campo contrario. Reglas básicas:</p><p>• El balón no se puede coger ni lanzar: se <b>golpea</b>. Los golpes principales son el <b>toque de dedos</b> (por encima de la cabeza) y el <b>toque de antebrazos</b> o «mancheta».<br>• Cada equipo puede dar como máximo <b>tres toques</b> antes de pasar el balón al otro lado.<br>• Un jugador no puede tocar el balón dos veces seguidas.<br>• Cuando un equipo gana el saque, sus jugadores <b>rotan</b> una posición en el sentido de las agujas del reloj.</p><p>En el colegio se juega a menudo una versión adaptada, el <b>minivoley</b>, con menos jugadores y una red más baja.</p><p>El <mark>fútbol</mark> se juega con <b>11 jugadores</b> por equipo (en el colegio suele jugarse fútbol sala o fútbol 7). El balón se juega con los pies, la cabeza y el cuerpo, pero no con los brazos ni las manos, salvo el portero dentro de su área. Las faltas se castigan con tiros libres o penaltis, y el árbitro puede mostrar tarjetas amarillas o rojas.</p>`,
      svg: svg("Voleibol: tres toques como máximo y los dos golpes básicos", `${tit("Voleibol: máximo 3 toques")}<path d="M130 60 V150" stroke="var(--ink)" stroke-width="3"/>${suelo(150)}${nino(40, 150, { pose: "arriba", s: 0.8 })}${nino(76, 150, { pose: "brazos", s: 0.8 })}${nino(110, 150, { pose: "salta", s: 0.8 })}${pelota(40, 74, 6, "var(--sun)")}<path d="M40 74 Q58 40 76 74 Q93 40 110 64 Q140 30 200 120" stroke="var(--muted)" stroke-dasharray="3 3" fill="none"/>${et(40, 168, "1", 30, { size: 12, color: COL.azul })}${et(76, 168, "2", 30, { size: 12, color: COL.azul })}${et(110, 168, "3", 30, { size: 12, color: COL.azul })}${et(200, 168, "¡punto!", 60, { size: 11, color: COL.verde })}`),
      video: vid("xsFOnhEXM0w"),
    },
    {
      html: `<h3>Juegos cooperativos</h3><p>No todos los juegos colectivos tienen ganadores y perdedores. En los <mark>juegos cooperativos</mark>, todos los participantes colaboran para conseguir un <b>objetivo común</b>. Nadie queda eliminado y nadie gana a costa de otro: o gana todo el grupo, o nadie.</p><p>Algunos ejemplos:</p><p>• <b>El paracaídas</b>: todos sujetan una gran tela de colores y la mueven a la vez para lanzar pelotas, hacer olas o meterse dentro.<br>• <b>Las sillas cooperativas</b>: cada vez hay menos sillas, pero nadie se elimina: hay que conseguir que todos quepan.<br>• <b>Cruzar el río</b>: el grupo tiene que pasar de un lado a otro pisando solo unos aros o colchonetas.<br>• <b>Mantener el globo en el aire</b> sin que toque el suelo, contando los toques de todo el grupo.<br>• <b>Retos de acrosport</b>: construir figuras humanas entre todos.</p><p>Los juegos cooperativos enseñan a <b>comunicarse</b>, a escuchar las ideas de los demás, a tomar decisiones en grupo, a confiar y a <b>incluir</b> a todos, sea cual sea su nivel. Son una buena preparación para los deportes de equipo y para la vida.</p>`,
      svg: svg("Juego cooperativo del paracaídas: todo el grupo colabora para un objetivo común", `${tit("Todos ganamos juntos")}<ellipse cx="130" cy="96" rx="100" ry="26" fill="var(--sun)" fill-opacity=".35" stroke="${COL.sol}" stroke-width="2"/>${nino(40, 150, { pose: "arriba", s: 0.75 })}${nino(96, 150, { pose: "arriba", s: 0.75, nina: true })}${nino(164, 150, { pose: "arriba", s: 0.75 })}${nino(220, 150, { pose: "arriba", s: 0.75, nina: true })}${pelota(130, 52, 7)}${tx(130, 172, "nadie queda eliminado", 220, { weight: 700, color: COL.verde })}`),
      video: vid("7WoC5ku5Z9E"),
    },
    {
      html: `<h3>Trabajo en equipo y deportividad</h3><p>Jugar en equipo es mucho más que pasar el balón. Un buen <mark>compañero de equipo</mark>:</p><p>• <b>Comunica</b>: pide el balón, avisa si viene un rival, anima.<br>• <b>Colabora</b>: pasa al compañero mejor situado aunque él mismo pudiera tirar.<br>• <b>Acepta su papel</b>: defensor, atacante, portero, banquillo… Todos los papeles son importantes.<br>• <b>Incluye a todos</b>: pasa también a quien tiene menos nivel.<br>• <b>No culpa</b> a nadie de los errores: «tranquilo, la próxima».<br>• <b>Celebra</b> los logros del grupo, no solo los suyos.</p><p>Además, todo deportista debe tener <b>deportividad</b> o juego limpio: respetar las reglas, al árbitro, a los rivales y al material; saber ganar sin burlarse y saber perder sin enfadarse; dar la mano al final del partido.</p><p>Para que un equipo funcione, antes de jugar puede ser útil hablar de una pequeña <b>estrategia</b>: quién defiende, quién ataca, cómo sacamos de banda. Y después del partido, comentar juntos qué ha salido bien y qué se puede mejorar.</p>`,
      svg: svg("Cualidades de un buen compañero de equipo", `${tit("Un buen compañero…")}${filas([["comunica", "pide, avisa, anima", COL.azul], ["colabora", "pasa al mejor situado", COL.verde], ["incluye", "a todos", COL.morado], ["no culpa", "«tranquilo, la próxima»", COL.naranja], ["respeta", "reglas, árbitro, rivales", COL.rojo]], 50, 25, { wa: 70, wb: 150 })}`),
    },
  ],
  figura: {
    titulo: "Juegos y deportes colectivos en ocho ideas",
    svg: rejilla([
      ["Juego", "normas pactadas", COL.verde],
      ["Deporte", "reglamento oficial", COL.azul],
      ["Invasión", "fútbol, balonmano", COL.rojo],
      ["Red", "voleibol", COL.naranja],
      ["Atacar", "conservar, avanzar", "#0e7490"],
      ["Defender", "recuperar, proteger", COL.morado],
      ["Desmarque", "busca el hueco", COL.sol],
      ["Cooperar", "todos ganamos", COL.marron],
    ], 4, 86, "Resumen de juegos y deportes colectivos"),
  },
  video: vgen("VMJyS4XNqXI", "deportes colectivos educación física primaria"),
  ejemplos: [
    { enunciado: "Clasifica: tenis, baloncesto, natación, voleibol, judo, hockey.",
      pasos: ["Individuales: natación.", "De adversario: tenis, judo.", "Colectivos de invasión: baloncesto, hockey.", "Colectivo de red: voleibol."],
      resultado: "Natación (individual); tenis y judo (adversario); baloncesto y hockey (invasión); voleibol (red)." },
    { enunciado: "Tienes el balón y un rival tapa a tu compañero. ¿Qué debería hacer tu compañero?",
      pasos: ["Desmarcarse: moverse para separarse del rival.", "Buscar un espacio libre con una línea de pase limpia.", "Pedir el balón."],
      resultado: "Desmarcarse a un hueco libre y pedir el balón." },
    { enunciado: "En voleibol, un jugador recibe con mancheta, otro coloca de dedos y un tercero remata. ¿Es correcto?",
      pasos: ["Se han dado tres toques de tres jugadores distintos.", "El máximo es tres toques y ningún jugador repite seguido."],
      resultado: "Sí, es correcto." },
  ],
  errores: [
    "Ir todos detrás del balón como un enjambre en vez de ocupar espacios.",
    "Quedarse quieto detrás de un rival esperando el pase.",
    "Botar, parar y volver a botar en baloncesto (dobles).",
    "Coger el balón con las manos en voleibol en lugar de golpearlo.",
    "Culpar a un compañero cuando se pierde.",
  ],
  ejercicios: [
    { q: "Escribe tres diferencias entre juego y deporte.", sol: "El deporte tiene reglamento oficial, federación y competición; el juego tiene normas pactadas y flexibles." },
    { q: "¿Qué es un deporte colectivo de invasión? Pon dos ejemplos.", sol: "Los dos equipos comparten espacio y hay que invadir el campo rival; fútbol y balonmano." },
    { q: "Escribe los elementos comunes de los deportes colectivos.", sol: "Móvil, espacio, meta, compañeros, adversarios y reglamento." },
    { q: "Escribe los tres principios del ataque.", sol: "Conservar el balón, avanzar y conseguir el objetivo." },
    { q: "¿Qué es desmarcarse?", sol: "Moverse para librarse del defensor y quedar en un espacio libre para recibir." },
    { q: "Diferencia entre defensa individual y en zona.", sol: "Individual: cada uno vigila a un rival. Zona: cada uno defiende una parte del campo." },
    { q: "Escribe tres reglas del baloncesto.", sol: "Botar para desplazarse, no hacer pasos, no hacer dobles (y no empujar)." },
    { q: "¿Cuántos toques puede dar un equipo de voleibol? ¿Qué son los toques de dedos y de antebrazos?", sol: "Tres como máximo; golpes por encima de la cabeza con los dedos y con los antebrazos juntos." },
    { q: "¿Qué es un juego cooperativo? Pon un ejemplo.", sol: "Un juego en el que todos colaboran para un objetivo común sin eliminados; el paracaídas." },
    { q: "Escribe cuatro cualidades de un buen compañero de equipo.", sol: "Comunica, colabora, incluye a todos y no culpa a nadie (también respeta)." },
  ],
  quiz: [
    { q: "Un juego con reglamento oficial y federación es un…", o: ["deporte", "circuito", "juego libre"], a: 0, e: "Un deporte." },
    { q: "El voleibol es un deporte de…", o: ["invasión", "red", "bate y campo"], a: 1, e: "De red." },
    { q: "El baloncesto lo inventó…", o: ["un profesor de Educación Física", "un rey", "un futbolista"], a: 0, e: "James Naismith, en 1891." },
    { q: "En baloncesto juegan por equipo…", o: ["7", "11", "5"], a: 2, e: "Cinco." },
    { q: "En balonmano juegan por equipo…", o: ["7", "5", "6"], a: 0, e: "Siete." },
    { q: "Moverse para quedar libre y recibir es…", o: ["desmarcarse", "rotar", "hacer dobles"], a: 0, e: "Desmarcarse." },
    { q: "Un principio de la defensa es…", o: ["conservar el balón", "tirar a puerta", "recuperar el balón"], a: 2, e: "Recuperar el balón." },
    { q: "En voleibol, como máximo se dan…", o: ["3 toques", "5 toques", "2 toques"], a: 0, e: "Tres toques." },
    { q: "En un juego cooperativo…", o: ["gana uno solo", "todos colaboran", "se elimina al más lento"], a: 1, e: "Todos colaboran." },
    { q: "Al acabar un partido conviene…", o: ["burlarse del rival", "dar la mano", "irse sin saludar"], a: 1, e: "Dar la mano." },
  ],
  examen: [
    { q: "En balonmano, dentro del área solo puede estar el…", o: ["capitán", "árbitro", "portero"], a: 2, e: "El portero." },
    { q: "Pasar rápido de defensa a ataque al recuperar el balón es la…", o: ["transición", "rotación", "mancheta"], a: 0, e: "Transición o contraataque." },
    { q: "El objeto con el que se juega se llama…", o: ["meta", "móvil", "área"], a: 1, e: "Móvil." },
    { q: "Botar, parar y volver a botar en baloncesto es…", o: ["dobles", "falta personal", "pasos"], a: 0, e: "Dobles." },
  ],
  feynman: ["En qué se diferencian un juego y un deporte", "Qué hay que hacer al atacar y al defender en un deporte de invasión", "Por qué el trabajo en equipo es más importante que el talento individual"],
  mapa: mapa("DEPORTES COLECTIVOS", "var(--pri)", [
    ["Tipos", "invasión · red · bate y campo", COL.azul],
    ["Ataque", "conservar · avanzar · marcar", COL.verde],
    ["Defensa", "recuperar · frenar · proteger", COL.rojo],
    ["Equipo", "cooperar · comunicar · respetar", COL.naranja],
  ], 260),
  tarjetas: [
    ["Deporte", "Juego con reglamento oficial, federación y competición."],
    ["Deporte de invasión", "Los equipos comparten el espacio de juego."],
    ["Deporte de red", "Cada equipo en su campo, separados por una red."],
    ["Desmarque", "Moverse para quedar libre de defensores."],
    ["Defensa individual", "Cada jugador vigila a un rival."],
    ["Defensa en zona", "Cada jugador defiende una parte del campo."],
    ["Juego cooperativo", "Todos colaboran por un objetivo común."],
    ["Deportividad", "Respetar reglas, rivales y árbitro; saber ganar y perder."],
  ],
  familias: ["Ved juntos un partido y fijaos en cómo se desmarcan los jugadores.", "Jugad en familia a mantener un globo en el aire sin que caiga.", "Inventad un juego nuevo con un balón y escribid sus reglas.", "Comentad un ejemplo de deportividad que hayáis visto en televisión."],
  profesores: PROF("Educación Física: juegos y deportes colectivos de cooperación-oposición; principios tácticos de ataque y defensa; reglas básicas de deportes de invasión y de red; juegos cooperativos; trabajo en equipo y deportividad", ["Juegos modificados de invasión con reglas adaptadas (pase obligado, todos tocan antes de tirar).", "Minivoley en espacios reducidos con progresión de toques.", "Diseño por grupos de un juego cooperativo nuevo y su reglamento."]),
  fuentes: [RD, wiki("Deporte de equipo", "Deporte_de_equipo"), wiki("Baloncesto", "Baloncesto"), wiki("Voleibol", "Voleibol")],
  revisado: REV,
};

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer los deportes adaptados y el valor de la inclusión", "Tomar decisiones tácticas sencillas en el juego", "Entender el papel del reglamento y del árbitro", "Organizar un torneo y recuperar juegos tradicionales"],
  lectura: { titulo: "El partido de Nico", html: `<p>Nico llegó nuevo al colegio en octubre. Desde pequeño veía muy poco: solo distinguía luces y sombras. Los primeros días, en Educación Física, se quedaba en un lado, escuchando cómo los demás jugaban al balonmano.</p><p>Un día, el profesor apareció con un balón extraño: pesado, de color azul y con cascabeles dentro.</p><p>—Hoy vamos a jugar a goalball —anunció—. Es un deporte paralímpico creado para personas ciegas. Pero hoy jugaremos todos con antifaz.</p><p>Al principio fue un caos. Nadie sabía dónde estaba el balón, todos se chocaban y se reían. Pero Nico se movía con una seguridad increíble: escuchaba el cascabel, se tiraba al suelo y paraba todos los lanzamientos.</p><p>—¡Nico, dinos cómo lo haces! —le pidió Marta.</p><p>—Hay que estar en silencio y escuchar —explicó él—. Y tocar las líneas del campo con las manos para orientarte.</p><p>Aquel día, el equipo de Nico ganó 7 a 2. Pero lo mejor no fue el resultado. A partir de entonces, en el recreo, sus compañeros inventaron un juego con un balón que sonaba para que todos pudieran jugar juntos.</p>` },
  tras: {
    "Elementos comunes de los deportes colectivos": [
      ["Deportes adaptados e inclusivos", `<p>El deporte es para todas las personas. Los <b>deportes adaptados</b> modifican las reglas, el material o el espacio para que puedan practicarlos personas con discapacidad. Muchos forman parte de los <b>Juegos Paralímpicos</b>, que se celebran justo después de los Juegos Olímpicos:</p><ul><li><b>Goalball</b>: para personas con discapacidad visual. Tres jugadores por equipo, con antifaz, lanzan rodando un balón con cascabeles para marcar en la portería contraria, que ocupa todo el ancho del campo. El público debe estar en <b>silencio</b>.</li><li><b>Baloncesto en silla de ruedas</b>: con reglas muy parecidas al baloncesto, pero en sillas especiales.</li><li><b>Boccia</b>: parecido a la petanca, para personas con grandes dificultades de movimiento.</li><li><b>Fútbol para ciegos</b>: con un balón sonoro, y el portero puede ver.</li></ul><p>En el colegio podemos practicar <b>deportes inclusivos</b>: adaptar los juegos para que participe todo el mundo, con independencia de su capacidad. Jugar con los ojos tapados o sentados también nos ayuda a <b>ponernos en el lugar</b> de los demás.</p><p>España ha logrado numerosas medallas en los Juegos Paralímpicos, en deportes como la natación, el atletismo o el ciclismo.</p>`,
        L6.filas("Deportes adaptados", [["goalball", "balón sonoro", cAZ], ["baloncesto", "en silla", cVE], ["boccia", "precisión", cNA], ["fútbol para ciegos", "balón sonoro", cMO]]), ["cbmV7ZhZeSA", "¿Cómo se juega? Goalball (versión completa)", "Paradeportes", 196613]],
    ],
    "Defender: cuando el rival tiene el balón": [
      ["Tomar decisiones: la táctica", `<p>En los deportes colectivos no gana solo el que corre más o tira más fuerte: gana el equipo que <b>toma mejores decisiones</b>. Eso es la <b>táctica</b>.</p><p>Cuando tienes el balón, en cada momento debes elegir entre tres opciones:</p><ul><li><b>Tirar</b>: si estás cerca de la meta y libre de marca.</li><li><b>Pasar</b>: si un compañero está mejor situado que tú (más cerca de la meta o sin defensor).</li><li><b>Avanzar</b> (botar, conducir): si tienes espacio libre delante.</li></ul><p>Cuando <b>no</b> tienes el balón y tu equipo ataca, tu trabajo es <b>desmarcarte</b>: moverte a un espacio libre donde puedan pasarte, lejos de tu defensor.</p><p>Una situación muy importante es el <b>2 contra 1</b>: dos atacantes contra un solo defensor. Si el defensor va hacia el que tiene el balón, este debe pasar al compañero libre; si no va, debe avanzar o tirar. ¡Fijar al defensor y pasar es la clave!</p><p>Antes de cada partido, el equipo puede hacer un pequeño <b>plan</b>: quién defiende a quién, cómo sacamos el balón, qué hacemos si vamos perdiendo. Y en los descansos, ¡se ajusta el plan!</p>`,
        H6.flujo("Con el balón", ["¿estoy|cerca?", "sí, libre:|tiro", "otro mejor:|paso", "espacio libre:|avanzo"], cRO)],
    ],
    "Baloncesto y balonmano": [
      ["El reglamento y el árbitro", `<p>Todo deporte tiene un <b>reglamento</b>: el conjunto de normas que dicen cómo se juega, qué está permitido y qué no, y qué pasa cuando alguien no las cumple. Sin reglas, no habría juego posible.</p><p>El <b>árbitro</b> es la persona encargada de hacer cumplir el reglamento. Su trabajo es muy difícil: tiene que decidir en un segundo, sin repetición, y a veces con mucha gente gritando. Por eso merece <b>respeto</b> siempre, incluso cuando se equivoca.</p><p>Los árbitros se comunican con <b>gestos</b> que todos entienden:</p><ul><li>Brazo en alto con la mano abierta: <b>falta</b> (en baloncesto) o <b>tiro libre</b> (en fútbol).</li><li>Girar los antebrazos uno sobre otro: <b>pasos</b> en baloncesto.</li><li>Señalar el punto de penalti: <b>penalti</b>.</li><li>Tarjeta amarilla: <b>amonestación</b>; tarjeta roja: <b>expulsión</b>.</li></ul><p>En clase de Educación Física, hacer de árbitro es una gran experiencia: te obliga a conocer bien las reglas, a ser justo y a entender lo difícil que es. Prueba a arbitrar un partido de tus compañeros y verás que cambia tu forma de ver el deporte.</p>`,
        L6.filas("El árbitro", [["silbato", "para el juego", cAZ], ["gestos", "explica la falta", cVE], ["amarilla", "aviso", cNA], ["roja", "expulsión", cRO]])],
    ],
  },
  final: [
    ["Juegos tradicionales", `<p>Antes de que existieran los videojuegos, los niños jugaban en la calle y en las plazas a <b>juegos tradicionales</b> que pasaban de generación en generación. Muchos se siguen jugando hoy y son estupendos para el recreo:</p><ul><li><b>El pañuelo</b>: dos equipos numerados; cuando dicen tu número, corres a coger el pañuelo y volver sin que te pillen.</li><li><b>El rescate</b>: un equipo persigue al otro y los atrapados pueden ser rescatados por sus compañeros.</li><li><b>Bote-bote</b>: uno busca a los demás, que pueden salvarse dando una patada a un bote.</li><li><b>La soga</b> (tira y afloja): dos equipos tiran de una cuerda.</li><li><b>La rayuela</b> (o tejo, charranca): saltar a la pata coja por unas casillas dibujadas en el suelo.</li><li><b>Las canicas</b>, <b>la peonza</b>, <b>la comba</b> con sus canciones.</li></ul><p>Cada región tiene sus propios juegos y deportes tradicionales: la <b>pelota vasca</b>, la <b>lucha canaria</b>, los <b>bolos</b> en Cantabria o Asturias, la <b>calva</b> en Castilla… Pregunta a tus abuelos a qué jugaban de pequeños: ¡seguro que te enseñan alguno!</p>`,
      H6.rueda("Juegos de siempre", "TRADICIÓN", [["pañuelo", cAZ], ["rescate", cRO], ["comba", cVE], ["rayuela", cMO]])],
    ["Organizar un torneo", `<p>Organizar un torneo en clase o en el recreo es una forma de aprender mucho más que jugar. Hay que pensar en:</p><ul><li><b>El sistema de competición</b>:<ul><li><b>Liga</b>: todos los equipos juegan contra todos. Se dan puntos (por ejemplo, 3 por ganar, 1 por empatar). Es más justo, pero necesita más partidos.</li><li><b>Eliminatoria</b>: el que pierde queda eliminado. Es rápido, pero algunos equipos juegan muy poco.</li><li><b>Mixto</b>: una fase de grupos en liga y después eliminatorias, como en los mundiales.</li></ul></li><li><b>Los equipos</b>: equilibrados y mixtos, para que todos tengan opciones.</li><li><b>El calendario</b>: qué partidos se juegan cada día y en qué campo.</li><li><b>Los roles</b>: además de jugadores, hacen falta árbitros, anotadores, periodistas que cuenten los partidos y un comité de deportividad.</li></ul><p>Una idea muy buena es dar puntos extra por <b>juego limpio</b>: por saludar al rival, respetar al árbitro y animar a los compañeros. Así el torneo premia también los valores.</p>`,
      H6.dos("Sistemas", ["LIGA", ["todos contra todos", "más partidos", "más justo"], cVE], ["ELIMINATORIA", ["quien pierde sale", "más rápido", "menos partidos"], cRO])],
  ],
  ejemplos: [
    ["Tienes el balón, estás lejos de la portería y un compañero está solo cerca. ¿Qué haces?", ["Lejos: el tiro es difícil.", "El compañero está mejor situado."], "Pasar al compañero."],
    ["Con 4 equipos en liga, ¿cuántos partidos hay?", ["Cada equipo juega 3 partidos.", "4 × 3 = 12, pero cada partido cuenta dos veces."], "6 partidos."],
  ],
  errores: ["Protestar al árbitro en cada decisión.", "Quedarse quieto cuando el equipo ataca en lugar de desmarcarse."],
  ejercicios: [
    ["b", "¿Qué es el goalball?", "Un deporte paralímpico para personas ciegas con un balón con cascabeles."],
    ["b", "¿Qué tres opciones tienes con el balón?", "Tirar, pasar o avanzar."],
    ["b", "¿Qué significa la tarjeta roja?", "Expulsión."],
    ["b", "Escribe tres juegos tradicionales.", "Pañuelo, rescate, rayuela (bote-bote, soga…)."],
    ["b", "¿Qué es una liga?", "Un sistema en el que todos juegan contra todos."],
    ["m", "Explica qué es desmarcarse.", "Moverse a un espacio libre para poder recibir un pase."],
    ["m", "¿Cómo se resuelve un 2 contra 1?", "Fijar al defensor y pasar al compañero libre."],
    ["m", "¿Por qué el público debe estar en silencio en el goalball?", "Porque los jugadores se orientan por el sonido del balón."],
    ["m", "Ventajas e inconvenientes de la eliminatoria.", "Es rápida, pero algunos equipos juegan poco."],
    ["m", "¿Qué enseñó Nico a sus compañeros?", "A escuchar en silencio y orientarse tocando las líneas."],
    ["a", "Adapta un juego del recreo para que pueda jugar un compañero en silla de ruedas.", "Respuesta abierta."],
    ["a", "Organiza el calendario de una liga de 6 equipos.", "Respuesta abierta (15 partidos)."],
    ["a", "Arbitra un partido y escribe qué te resultó difícil.", "Respuesta abierta."],
    ["a", "Entrevista a un familiar mayor sobre los juegos de su infancia.", "Respuesta abierta."],
  ],
  quiz: [
    ["Los Juegos Paralímpicos se celebran…", ["después de los Olímpicos", "cada diez años", "solo en invierno"], "Deporte adaptado."],
    ["Desmarcarse es…", ["buscar un espacio libre", "quitar el balón", "salir del campo"], "Táctica."],
    ["El árbitro merece respeto…", ["siempre", "solo si acierta", "nunca"], "Reglamento."],
    ["La pelota vasca es un juego tradicional de…", ["el País Vasco y Navarra", "Canarias", "Galicia"], "Tradición."],
    ["En una liga…", ["todos juegan contra todos", "quien pierde se va", "solo juegan dos equipos"], "Torneo."],
  ],
  examen: [
    ["¿Qué balón llevó el profesor?", ["uno con cascabeles", "uno de rugby", "uno de playa"], "Lectura."],
    ["En un 2 contra 1, si el defensor va al que tiene el balón…", ["se pasa al compañero libre", "se tira siempre", "se para el juego"], "Táctica."],
  ],
  tarjetas: [
    ["Deporte adaptado", "Goalball, baloncesto en silla, boccia, fútbol para ciegos."],
    ["Táctica", "Tirar, pasar o avanzar; desmarcarse; 2 contra 1."],
    ["Árbitro", "Hace cumplir el reglamento con gestos; merece respeto."],
    ["Torneos", "Liga, eliminatoria o mixto; puntos por juego limpio."],
  ],
  glosario: [
    ["Deporte adaptado", "Deporte modificado para personas con discapacidad."],
    ["Juegos Paralímpicos", "Gran competición de deporte adaptado."],
    ["Goalball", "Deporte para personas ciegas con balón sonoro."],
    ["Inclusión", "Que todas las personas puedan participar."],
    ["Táctica", "Decisiones para conseguir ventaja en el juego."],
    ["Desmarque", "Movimiento para librarse del defensor."],
    ["Reglamento", "Conjunto de normas de un deporte."],
    ["Amonestación", "Aviso del árbitro por una falta."],
    ["Juego tradicional", "Juego transmitido de generación en generación."],
    ["Liga", "Competición en la que todos juegan contra todos."],
    ["Eliminatoria", "Competición en la que el perdedor queda fuera."],
    ["Calendario", "Orden y fechas de los partidos."],
  ],
  situacion: {
    titulo: "El torneo inclusivo",
    reto: "La clase organiza un torneo de deportes colectivos en el que pueda participar todo el mundo.",
    pasos: ["Elegid los deportes, incluyendo uno adaptado como el goalball.", "Formad equipos mixtos y equilibrados y decidid el sistema de competición.", "Repartid roles: jugadores, árbitros, anotadores, periodistas y comité de deportividad.", "Celebrad el torneo y entregad un premio especial al juego limpio."],
    producto: "Un torneo inclusivo con calendario, clasificación y crónicas de los partidos.",
    evaluacion: ["Toma decisiones tácticas sencillas.", "Respeta el reglamento y al árbitro.", "Colabora en la organización.", "Valora la inclusión y la deportividad."],
  },
});
