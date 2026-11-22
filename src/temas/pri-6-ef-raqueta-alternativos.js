// Educación Física 6º de Primaria: deportes de raqueta y alternativos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, ciclo, vid, vgen, RD, PROF, nino, suelo, pelota } = require("./_pri6b");

// Raqueta (tipo bádminton o tenis) dibujada en diagonal.
function raqueta(x, y, s = 1, c = "var(--pen)") {
  return `<g transform="translate(${x} ${y}) scale(${s}) rotate(-35)"><ellipse cx="0" cy="-30" rx="16" ry="22" fill="none" stroke="${c}" stroke-width="3.5"/>${[-8, 0, 8].map((d) => `<path d="M${d} -50 V-10" stroke="${c}" stroke-opacity=".4"/>`).join("")}${[-38, -30, -22].map((d) => `<path d="M-14 ${d} H14" stroke="${c}" stroke-opacity=".4"/>`).join("")}<path d="M0 -8 V24" stroke="${c}" stroke-width="5" stroke-linecap="round"/></g>`;
}
// Volante de bádminton.
function volante(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-9 -16 L9 -16 L4 0 L-4 0 Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M-5 -16 L-2 0 M0 -16 V0 M5 -16 L2 0" stroke="var(--line)"/><circle cx="0" cy="4" r="5" fill="var(--red)"/></g>`;
}

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Deportes de raqueta y alternativos",
  minutos: 50,
  objetivos: ["Conocer los deportes de raqueta y sus características comunes", "Aprender la empuñadura, la posición básica y los golpes principales", "Conocer las reglas básicas del bádminton y otros deportes de raqueta", "Practicar deportes alternativos e inclusivos", "Construir material deportivo con objetos reciclados"],
  claves: ["deporte de raqueta", "bádminton", "tenis", "pádel", "tenis de mesa", "empuñadura", "posición de espera", "derecha", "revés", "saque", "deportes alternativos", "indiaca", "colpbol", "material reciclado"],
  pregunta: {
    texto: "¿Por qué en el colegio se juega más a bádminton que a tenis, y qué tienen de especial deportes como el colpbol o el ultimate que quizá nunca has visto en la tele?",
    respuesta: "El <b>bádminton</b> necesita poco espacio, un material barato y el volante va despacio, así que es fácil empezar a jugar y tener peloteos largos. Los <mark>deportes alternativos</mark>, como el colpbol, la indiaca o el ultimate, son nuevos o poco conocidos: todos empiezan desde el mismo nivel, son muy <b>inclusivos</b>, fomentan la cooperación y muchos se pueden jugar con material reciclado.",
  },
  bloques: [
    {
      html: `<h3>Los deportes de raqueta</h3><p>Los <mark>deportes de raqueta</mark> son aquellos en los que se golpea un móvil (pelota o volante) con un instrumento llamado <b>raqueta</b> o <b>pala</b>, para enviarlo al campo del adversario de forma que no pueda devolverlo.</p><p>Los más conocidos son:</p><p>• El <b>tenis</b>: se juega en una pista grande dividida por una red, con raqueta de cuerdas y pelota de fieltro. España ha tenido grandes campeones como Rafa Nadal, Arantxa Sánchez Vicario o Carlos Alcaraz.<br>• El <b>bádminton</b>: con raqueta ligera y un <b>volante</b>, que no puede botar. Carolina Marín, de Huelva, ha sido campeona olímpica y del mundo.<br>• El <b>tenis de mesa</b> o ping-pong: sobre una mesa con una pequeña red, con palas y una pelota ligera.<br>• El <b>pádel</b>: inventado en México y muy popular en España; se juega por parejas en una pista cerrada con paredes, y la pelota puede rebotar en ellas.<br>• El <b>squash</b>, la <b>pelota vasca</b> o el <b>frontenis</b>, en los que se golpea contra una pared.</p><p>Son deportes de <b>adversario</b>: uno contra uno (individuales) o dos contra dos (dobles). En ellos no hay contacto físico con el rival.</p>`,
      svg: svg("Deportes de raqueta: tenis, bádminton, tenis de mesa y pádel", `${tit("Deportes de raqueta")}${fichas([["Tenis", "raqueta y pelota", COL.verde], ["Bádminton", "raqueta y volante", COL.azul], ["Tenis de mesa", "pala y mesa", COL.rojo], ["Pádel", "pala y paredes", COL.naranja]])}`),
    },
    {
      html: `<h3>Empuñadura y posición de espera</h3><p>Antes de golpear hay que saber coger la raqueta y colocarse bien.</p><p>La <mark>empuñadura</mark> básica, llamada «empuñadura universal» o de «apretón de manos», consiste en coger la raqueta como si fueras a dar la mano a alguien: la palma de la mano junto al mango, los dedos rodeándolo sin apretar demasiado y el pulgar y el índice formando una «V». La raqueta debe quedar como una prolongación del brazo. Se sujeta cerca del final del mango, no junto a la cabeza de la raqueta.</p><p>La <mark>posición de espera</mark> o preparada es la que adoptas mientras esperas el golpe del rival:</p><p>• Pies separados a la anchura de los hombros.<br>• Rodillas ligeramente flexionadas.<br>• Peso del cuerpo sobre la parte delantera de los pies, listo para salir hacia cualquier lado.<br>• Raqueta delante del cuerpo, a la altura del pecho.<br>• Mirada atenta al móvil.</p><p>En el centro de tu campo hay un punto clave al que debes intentar volver después de cada golpe: así llegarás mejor a cualquier lugar. Para moverte, usa pasos cortos y rápidos, desplazamientos laterales y nunca cruces las piernas.</p>`,
      svg: svg("Posición de espera con las piernas flexionadas y la raqueta delante del cuerpo", `${tit("Posición de espera")}${nino(70, 156, { pose: "agacha", s: 1.3 })}${raqueta(96, 130, 0.7)}${filas([["pies", "separados", COL.azul], ["rodillas", "flexionadas", COL.verde], ["raqueta", "delante", COL.naranja], ["mirada", "al móvil", COL.morado]], 52, 30, { x: 146, wa: 64, wb: 80, dos: true })}`),
      video: vid("WJSz0c8v4nI"),
    },
    {
      html: `<h3>Los golpes básicos</h3><p>Los <mark>golpes</mark> fundamentales en casi todos los deportes de raqueta son:</p><p>• El <b>saque</b> o servicio: el golpe con el que empieza cada punto. En bádminton se hace por debajo de la cintura; en tenis, normalmente por encima de la cabeza.</p><p>• El golpe de <b>derecha</b> (o drive): se golpea por el lado del brazo que sujeta la raqueta. Por ejemplo, si eres diestro, por tu derecha.</p><p>• El golpe de <b>revés</b>: se golpea por el lado contrario, cruzando la raqueta por delante del cuerpo y enseñando el dorso de la mano hacia la red.</p><p>• Los golpes <b>altos</b>: el <b>clear</b> del bádminton (golpe alto y profundo al fondo del campo) o el <b>remate</b> o smash (golpe fuerte de arriba abajo).</p><p>• La <b>dejada</b>: un golpe suave que deja el móvil justo detrás de la red.</p><p>Las claves para golpear bien:</p><p>• Prepara la raqueta <b>pronto</b>, antes de que llegue el móvil.<br>• Colócate de <b>lado</b> respecto a la red.<br>• Golpea por delante del cuerpo, con el brazo casi extendido.<br>• <b>Acompaña</b> el golpe hacia la dirección donde quieres enviarlo.<br>• Vuelve a la posición de espera.</p>`,
      svg: svg("Golpes básicos: saque, derecha, revés, clear, remate y dejada", `${tit("Golpes básicos")}${fichas([["Saque", "empieza el punto", COL.azul], ["Derecha", "lado de la raqueta", COL.verde], ["Revés", "lado contrario", COL.morado], ["Clear", "alto y al fondo", COL.sol], ["Remate", "fuerte hacia abajo", COL.rojo], ["Dejada", "suave, junto a la red", COL.naranja]], 2, 34)}`),
    },
    {
      html: `<h3>El bádminton</h3><p>El <mark>bádminton</mark> es uno de los deportes más rápidos del mundo: en un remate, el volante puede superar los 400 km/h. Sin embargo, al principio el volante va despacio y es fácil aprender.</p><p>Reglas básicas:</p><p>• Se juega en una pista de 13,40 × 6,10 metros, dividida por una red de 1,55 m de altura. En individuales, la pista es un poco más estrecha.<br>• El <b>volante no puede tocar el suelo</b>: si cae dentro del campo del rival, ganas el punto; si cae fuera o en la red, pierdes el punto.<br>• Cada jugador solo puede golpear el volante <b>una vez</b> antes de pasarlo.<br>• El <b>saque</b> se hace en diagonal, desde la zona de servicio, por debajo de la cintura.<br>• Cada error del rival te da un punto (sistema de punto directo). Gana el juego quien llega antes a <b>21 puntos</b> con dos de ventaja. Los partidos son al mejor de tres juegos.</p><p>En el colegio se suele jugar con reglas adaptadas: campos más pequeños, con una cuerda como red, partidas a 11 puntos o en modo cooperativo: ¿cuántos golpes seguidos conseguís dar entre dos sin que caiga el volante?</p>`,
      svg: svg("Pista de bádminton con red y volante: el volante no puede tocar el suelo", `${tit("Bádminton")}${suelo(150)}<path d="M130 92 V150" stroke="var(--ink)" stroke-width="3"/><path d="M126 92 H134 M130 92 V108" stroke="var(--ink)"/><rect x="128" y="92" width="4" height="16" fill="#e2e8f0"/>${nino(60, 150, { pose: "arriba", s: 1 })}${raqueta(76, 76, 0.6)}${nino(204, 150, { pose: "pie", s: 1 })}${volante(150, 62, 1)}<path d="M84 62 Q130 30 196 66" stroke="var(--muted)" stroke-dasharray="4 3" fill="none"/>${tx(130, 172, "a 21 puntos · un golpe por jugador", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>Otros deportes de raqueta y de pala</h3><p>Además del bádminton, en el colegio se pueden practicar muchos juegos con <mark>raquetas y palas</mark>:</p><p>• <b>Tenis de mesa</b>: muy bueno para la coordinación y los reflejos. La pelota debe botar una vez en tu campo antes de devolverla, y una vez en el del rival. Se juega a 11 puntos.</p><p>• <b>Palas de playa</b>: con palas de madera y una pelota de goma. Puede ser cooperativo (contar golpes seguidos) o competitivo.</p><p>• <b>Minitenis</b>: tenis en un campo pequeño, con raquetas cortas y pelotas más blandas y lentas.</p><p>• <b>Frontenis</b> o <b>frontón</b>: se golpea contra una pared, de forma alterna con el compañero. Es un deporte con mucha tradición en el País Vasco, Navarra y otras zonas de España.</p><p>Cuando juegas con raquetas, la <b>seguridad</b> es muy importante:</p><p>• Deja suficiente distancia con los compañeros que tienes alrededor.<br>• No lances la raqueta ni la uses para golpear otra cosa que no sea el móvil.<br>• Mira antes de hacer un movimiento amplio con el brazo.<br>• En dobles, poneos de acuerdo para no chocar: «¡mía!».</p>`,
      svg: svg("Normas de seguridad con raquetas", `${tit("Seguridad con raquetas")}${raqueta(50, 120, 1.2, COL.azul)}${filas([["distancia", "con los demás", COL.azul], ["nunca", "lanzar la raqueta", COL.rojo], ["mira", "antes", COL.verde], ["en dobles", "di «¡mía!»", COL.naranja]], 54, 30, { x: 104, wa: 70, wb: 80 })}`),
    },
    {
      html: `<h3>¿Qué son los deportes alternativos?</h3><p>Los <mark>deportes alternativos</mark> son deportes nuevos o poco conocidos, que se diferencian de los deportes tradicionales (fútbol, baloncesto…) en varias cosas:</p><p>• Usan <b>material novedoso</b> o fácil de conseguir: discos voladores, indiacas, pelotas gigantes, palas…<br>• Tienen <b>reglas sencillas</b> y fáciles de adaptar.<br>• Como casi nadie los ha practicado antes, todos parten de un <b>nivel parecido</b>.<br>• Muchos son <b>mixtos</b> e <b>inclusivos</b>: chicos y chicas juegan juntos, y se adaptan a personas con distintas capacidades.<br>• Dan más importancia a la <b>cooperación</b> y la diversión que a ganar.<br>• Algunos incluyen el <b>autoarbitraje</b>: los propios jugadores deciden las faltas, de forma honesta.</p><p>Por todo esto, son muy apropiados para la Educación Física: todos participan, todos tocan el móvil y nadie queda excluido por no haber jugado antes.</p>`,
      svg: svg("Rasgos de los deportes alternativos", `${tit("Deportes alternativos")}${filas([["material", "novedoso o reciclado", COL.naranja], ["reglas", "sencillas", COL.azul], ["nivel", "todos parecido", COL.verde], ["mixtos", "e inclusivos", COL.morado], ["cooperar", "más que ganar", COL.rojo]], 50, 25, { wa: 76, wb: 140 })}`),
    },
    {
      html: `<h3>Algunos deportes alternativos</h3><p>Estos son algunos <mark>deportes alternativos</mark> que se juegan en muchos colegios:</p><p>• <b>Ultimate</b>: se juega con un <b>disco volador</b> (frisbi) entre dos equipos de 5 a 7 jugadores. Hay que pasar el disco hasta recibirlo dentro de la zona de marca contraria. Quien tiene el disco no puede correr. No hay contacto y se juega con <b>autoarbitraje</b>, basado en el «espíritu del juego».</p><p>• <b>Indiaca</b>: se golpea con la palma de la mano un volante grande con plumas por encima de una red, como en el voleibol. Tiene origen en un juego de los pueblos indígenas de Brasil.</p><p>• <b>Colpbol</b>: inventado en Valencia por un profesor de Educación Física. Se juega con una pelota blanda que solo se puede <b>golpear</b> con cualquier parte del cuerpo, nunca coger. El objetivo es meter gol en una portería. Ningún jugador puede golpear dos veces seguidas.</p><p>• <b>Kinball</b>: se juega con una pelota gigante de más de un metro de diámetro, con tres equipos a la vez.</p><p>• <b>Twincon</b>: deporte coeducativo creado en España, en el que se marca encestando en canastas especiales y está diseñado para que chicos y chicas participen por igual.</p><p>• <b>Floorball</b>: un tipo de hockey en sala con sticks ligeros y una bola agujereada.</p>`,
      svg: svg("Ejemplos de deportes alternativos: ultimate, indiaca, colpbol y kinball", `${tit("Algunos ejemplos")}${fichas([["Ultimate", "disco volador", COL.azul], ["Indiaca", "volante y mano", COL.rojo], ["Colpbol", "golpear, nunca coger", COL.verde], ["Kinball", "pelota gigante", COL.morado], ["Twincon", "coeducativo", COL.naranja], ["Floorball", "hockey en sala", COL.gris]], 2, 34)}`),
      video: vid("34s189-OvnI"),
    },
    {
      html: `<h3>Material deportivo reciclado</h3><p>Muchos juegos y deportes alternativos se pueden practicar con <mark>material construido</mark> por vosotros mismos a partir de objetos reciclados. Así aprendéis a reutilizar, ahorráis dinero y cuidáis el planeta. Algunas ideas:</p><p>• <b>Palas</b>: con cartón duro o con dos platos de cartón unidos y un palo de helado como mango, o con perchas de alambre forradas con una media.<br>• <b>Pelotas</b>: con bolsas de plástico o papel de periódico apretados y envueltos con cinta adhesiva.<br>• <b>Indiacas</b>: con un trozo de tela relleno de arena o arroz y unas tiras de papel o plástico como plumas.<br>• <b>Raquetas de dedos</b> o recogedores: con botellas de plástico cortadas, para lanzar y recoger pelotas.<br>• <b>Bolos</b>: con botellas de plástico con un poco de agua o arena.<br>• <b>Conos</b> y <b>marcas</b>: con briks o botellas cortadas.<br>• <b>Malabares</b>: con globos rellenos de harina o arroz.</p><p>Antes de usar el material, comprobad que es <b>seguro</b>: sin bordes cortantes, sin piezas que se suelten y con un peso adecuado. Al acabar, guardadlo ordenado para la próxima vez.</p>`,
      svg: svg("Material deportivo con objetos reciclados: palas de cartón, pelotas de papel y bolos de botellas", `${tit("¡Fabrica tu material!")}${flujo([["botellas", COL.agua], ["cartón", COL.marron], ["papel", COL.gris]], 36, 36)}${filas([["bolos", "botellas con arena", COL.azul], ["palas", "cartón y palo", COL.marron], ["pelotas", "papel y cinta", COL.gris]], 102, 24, { wa: 60, wb: 150 })}`),
      video: vid("k2gqmPGRXfg"),
    },
    {
      html: `<h3>Valores en los deportes de raqueta y alternativos</h3><p>Los deportes de raqueta y los alternativos también transmiten <mark>valores</mark> importantes:</p><p>• <b>Respeto al adversario</b>: en tenis y bádminton es tradición saludarse en la red al acabar el partido.<br>• <b>Honestidad</b>: en muchos partidos escolares y en algunos deportes, como el ultimate, los propios jugadores cantan si el móvil ha entrado o ha salido. Hay que decir la verdad aunque perjudique.<br>• <b>Autocontrol</b>: no tirar la raqueta ni enfadarse con uno mismo tras un error.<br>• <b>Cooperación</b>: en dobles hay que comunicarse y repartir el campo; en los juegos cooperativos, el objetivo es mantener el peloteo entre todos.<br>• <b>Inclusión</b>: adaptar las reglas para que todos puedan jugar, por ejemplo, permitiendo un bote más a quien empieza o usando un móvil más grande y lento.<br>• <b>Cuidado del material</b> y del medio ambiente.</p><p>Un buen reto para la clase: organizar una pequeña liga de bádminton o de un deporte alternativo en la que los equipos sean mixtos, se roten los rivales, se arbitren los propios jugadores y se premie, además del resultado, el <b>juego limpio</b>.</p>`,
      svg: svg("Valores: respeto, honestidad, autocontrol, cooperación e inclusión", `${tit("Valores en juego")}${columna([["respeto: saludar en la red", COL.azul], ["honestidad: cantar fuera", COL.verde], ["autocontrol: calma tras un error", COL.morado], ["inclusión: adaptar reglas", COL.naranja]], 130, 224, 34, 24, 12)}`),
    },
  ],
  figura: {
    titulo: "Raqueta y alternativos en ocho ideas",
    svg: rejilla([
      ["Raqueta", "tenis, bádminton…", COL.azul],
      ["Empuñadura", "como dar la mano", COL.marron],
      ["Espera", "rodillas flexionadas", COL.verde],
      ["Golpes", "derecha y revés", COL.morado],
      ["Bádminton", "a 21 · sin botar", "#0e7490"],
      ["Alternativos", "inclusivos y mixtos", COL.naranja],
      ["Ultimate", "autoarbitraje", COL.rojo],
      ["Reciclado", "fabrica tu material", COL.gris],
    ], 4, 86, "Resumen de deportes de raqueta y alternativos"),
  },
  video: vgen("AH3kighSjxY", "raquetas y palas educación física primaria"),
  ejemplos: [
    { enunciado: "En bádminton, el volante cae justo sobre la línea del campo rival. ¿De quién es el punto?",
      pasos: ["En bádminton, la línea forma parte del campo.", "Si cae sobre la línea, ha caído dentro."],
      resultado: "El punto es de quien golpeó el volante." },
    { enunciado: "Eres diestro y el volante viene por tu izquierda. ¿Qué golpe usas?",
      pasos: ["El lado de la mano que sujeta la raqueta es el de la derecha.", "El lado contrario es el revés."],
      resultado: "Un golpe de revés." },
    { enunciado: "Clasifica: ultimate, tenis de mesa, colpbol, pádel, indiaca.",
      pasos: ["Con raqueta o pala: tenis de mesa, pádel.", "Alternativos: ultimate, colpbol, indiaca."],
      resultado: "Raqueta: tenis de mesa, pádel. Alternativos: ultimate, colpbol, indiaca." },
  ],
  errores: [
    "Agarrar la raqueta muy cerca de la cabeza o apretarla con fuerza.",
    "Esperar el golpe del rival con las piernas rectas.",
    "Golpear de frente a la red en lugar de colocarse de lado.",
    "En colpbol, coger la pelota con las manos: solo se puede golpear.",
    "Cantar «fuera» a propósito cuando ha entrado: va contra el juego limpio.",
  ],
  ejercicios: [
    { q: "¿Qué tienen en común los deportes de raqueta?", sol: "Se golpea un móvil con una raqueta o pala para enviarlo al campo rival sin que pueda devolverlo." },
    { q: "Escribe cuatro deportes de raqueta y un deportista español de uno de ellos.", sol: "Tenis, bádminton, tenis de mesa, pádel; Carolina Marín (bádminton) o Rafa Nadal (tenis)." },
    { q: "Explica la empuñadura universal.", sol: "Coger la raqueta como si dieras la mano, con el pulgar y el índice en «V», sin apretar." },
    { q: "Describe la posición de espera.", sol: "Pies separados, rodillas flexionadas, peso delante, raqueta delante del pecho y mirada al móvil." },
    { q: "¿Qué diferencia hay entre derecha y revés?", sol: "La derecha se golpea por el lado de la raqueta; el revés, por el lado contrario." },
    { q: "Escribe tres reglas del bádminton.", sol: "El volante no puede tocar el suelo, un golpe por jugador, se gana a 21 puntos (saque en diagonal)." },
    { q: "Escribe cuatro rasgos de los deportes alternativos.", sol: "Material novedoso, reglas sencillas, mismo nivel inicial, mixtos e inclusivos." },
    { q: "Explica cómo se juega al colpbol.", sol: "Con una pelota blanda que solo se golpea, nunca se coge; se busca meter gol y nadie golpea dos veces seguidas." },
    { q: "¿Qué es el autoarbitraje y en qué deporte se usa?", sol: "Los jugadores deciden las faltas de forma honesta; en el ultimate." },
    { q: "Propón cómo fabricar una pala y una pelota con material reciclado.", sol: "Pala: cartón duro con un palo; pelota: papel de periódico apretado con cinta adhesiva." },
  ],
  quiz: [
    { q: "En bádminton se golpea un…", o: ["balón", "disco", "volante"], a: 2, e: "Un volante." },
    { q: "Carolina Marín es campeona de…", o: ["tenis", "pádel", "bádminton"], a: 2, e: "Bádminton." },
    { q: "La empuñadura universal es como…", o: ["coger un lápiz", "dar la mano", "cerrar el puño"], a: 1, e: "Como dar la mano." },
    { q: "En la posición de espera las rodillas están…", o: ["rectas", "en el suelo", "flexionadas"], a: 2, e: "Ligeramente flexionadas." },
    { q: "Un golpe fuerte de arriba abajo es el…", o: ["revés", "saque", "remate"], a: 2, e: "Remate o smash." },
    { q: "En bádminton se gana el juego a…", o: ["21 puntos", "11 puntos", "50 puntos"], a: 0, e: "A 21 puntos." },
    { q: "El ultimate se juega con un…", o: ["balón gigante", "disco volador", "volante"], a: 1, e: "Disco volador." },
    { q: "En colpbol la pelota…", o: ["se coge", "solo se golpea", "se patea siempre"], a: 1, e: "Solo se golpea." },
    { q: "El kinball usa una pelota…", o: ["de tenis", "gigante", "de golf"], a: 1, e: "Gigante." },
    { q: "Los deportes alternativos suelen ser…", o: ["solo para chicos", "mixtos e inclusivos", "muy caros"], a: 1, e: "Mixtos e inclusivos." },
  ],
  examen: [
    { q: "El pádel se juega…", o: ["en el agua", "por parejas con paredes", "uno contra uno sin red"], a: 1, e: "Por parejas, en pista cerrada." },
    { q: "La dejada es un golpe…", o: ["de saque", "suave junto a la red", "muy fuerte"], a: 1, e: "Suave junto a la red." },
    { q: "El colpbol se inventó en…", o: ["Brasil", "Japón", "Valencia"], a: 2, e: "En Valencia." },
    { q: "Al acabar un partido de bádminton es tradición…", o: ["tirar la raqueta", "saludarse en la red", "irse sin hablar"], a: 1, e: "Saludarse." },
  ],
  feynman: ["Cómo se coge la raqueta y cómo se espera el golpe", "Cuáles son las reglas básicas del bádminton", "Por qué los deportes alternativos son tan inclusivos"],
  mapa: mapa("RAQUETA Y ALTERNATIVOS", "var(--pri)", [
    ["Raqueta", "tenis · bádminton · pádel", COL.azul],
    ["Técnica", "empuñadura · espera · golpes", COL.verde],
    ["Alternativos", "ultimate · colpbol · indiaca", COL.naranja],
    ["Valores", "honestidad · inclusión", COL.morado],
  ], 260),
  tarjetas: [
    ["Deporte de raqueta", "Se golpea un móvil con raqueta o pala."],
    ["Empuñadura", "Forma de coger la raqueta."],
    ["Posición de espera", "Colocación preparada para golpear."],
    ["Revés", "Golpe por el lado contrario a la raqueta."],
    ["Bádminton", "Raqueta y volante que no puede tocar el suelo."],
    ["Deporte alternativo", "Deporte nuevo, inclusivo y con material novedoso."],
    ["Ultimate", "Disco volador y autoarbitraje."],
    ["Colpbol", "Pelota que solo se golpea, nunca se coge."],
  ],
  familias: ["Jugad a palas en la playa o el parque contando golpes seguidos.", "Fabricad juntos unas palas con cartón y una pelota de papel.", "Buscad un vídeo de Carolina Marín y fijaos en sus desplazamientos.", "Probad a jugar con un frisbi y practicad pases cortos."],
  profesores: PROF("Educación Física: deportes de adversario con implemento (raqueta y pala); técnica básica de empuñadura, posición y golpeos; reglamento adaptado de bádminton; deportes alternativos, mixtos e inclusivos; construcción de material con objetos reciclados; autoarbitraje y juego limpio", ["Liga de bádminton adaptado con parejas mixtas rotatorias.", "Taller de construcción de palas e indiacas con material reciclado.", "Unidad de ultimate con autoarbitraje y reflexión sobre el espíritu del juego."]),
  fuentes: [RD, { t: "Federación Española de Bádminton", url: "https://www.badminton.es/" }, wiki("Deportes alternativos", "Deporte_alternativo"), wiki("Ultimate (deporte)", "Ultimate_(deporte)")],
  revisado: REV,
};

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Aplicar principios tácticos sencillos en los deportes de red", "Conocer la pelota vasca y el pickleball", "Entender cómo se puntúa en tenis, bádminton y tenis de mesa", "Inventar un deporte alternativo con sus propias reglas"],
  lectura: { titulo: "El volante de Carolina", html: `<p>Lucía tenía nueve años cuando vio por la tele la final de bádminton de los Juegos Olímpicos de Río 2016. Una chica de Huelva, Carolina Marín, ganó la medalla de oro y se tiró al suelo llorando de alegría. Lucía nunca había oído hablar del bádminton.</p><p>Al día siguiente, buscó raquetas en el trastero. Encontró dos viejas y un volante medio desplumado. Colgó una cuerda entre dos árboles del patio y obligó a su hermano a jugar con ella toda la tarde.</p><p>En el colegio, cuando el profesor sacó las raquetas de bádminton, Lucía ya sabía hacer el saque por debajo de la cintura y el clear, el golpe alto y profundo que manda el volante al fondo del campo.</p><p>—¿Dónde has aprendido? —le preguntó el profesor.</p><p>—Viendo a Carolina —contestó—. Ella dice que hay que mover al rival de un lado a otro y atacar el hueco.</p><p>Hoy Lucía tiene doce años y entrena dos tardes a la semana en un club. Aún no ha ganado ningún campeonato, pero en su habitación tiene un póster con una frase de su ídola: «Puedo porque pienso que puedo».</p>` },
  tras: {
    "Los golpes básicos": [
      ["La táctica en los deportes de red", `<p>En los deportes de raqueta y de red no gana quien golpea más fuerte, sino quien <b>piensa mejor</b>. Estos son los principios tácticos básicos:</p><ul><li><b>Enviar el móvil donde no está el rival</b>: busca los espacios vacíos de su campo.</li><li><b>Mover al rival</b>: alterna golpes largos (al fondo) y cortos (junto a la red), y a la derecha y a la izquierda, para cansarlo y desequilibrarlo.</li><li><b>Volver al centro</b> después de cada golpe: desde el centro de tu campo llegas antes a cualquier sitio. Es la <b>posición base</b>.</li><li><b>Atacar cuando puedas</b>: si el rival te devuelve un volante o una pelota alta y fácil, es el momento de rematar.</li><li><b>Defender con paciencia</b>: si estás en apuros, envía el móvil alto y profundo para tener tiempo de recolocarte.</li></ul><p>En <b>dobles</b>, además, hay que coordinarse con el compañero: en bádminton, en ataque se suele jugar uno delante y otro detrás; en defensa, uno al lado del otro. Y comunicarse siempre: «¡mía!», «¡tuya!».</p>`,
        H6.flujo("Cada golpe", ["mirar|el hueco", "golpear|lejos del rival", "volver|al centro", "esperar|preparado"], cAZ)],
    ],
    "Otros deportes de raqueta y de pala": [
      ["La pelota vasca", `<p>La <b>pelota vasca</b> es un conjunto de deportes en los que se golpea una pelota contra una pared, llamada <b>frontis</b>, en una cancha llamada <b>frontón</b>. Es muy popular en el País Vasco y Navarra, y también en otras zonas de España, Francia y América Latina (como México, Argentina o Cuba). Tiene varias modalidades:</p><ul><li><b>A mano</b>: se golpea la pelota con la mano desnuda, protegida solo con unos tacos. ¡La pelota es muy dura!</li><li><b>Pala</b> y <b>paleta</b>: con una pala de madera más o menos grande.</li><li><b>Cesta punta</b> o <b>jai alai</b>: con una cesta de mimbre curvada atada a la mano, con la que se recoge y se lanza la pelota a gran velocidad. Es una de las pelotas más rápidas de cualquier deporte.</li><li><b>Frontenis</b>: con raqueta de tenis y una pelota de goma; muy practicado en México y en España.</li></ul><p>Las reglas básicas son parecidas en todas: se juega contra la pared, la pelota debe dar en el frontis por encima de una línea y botar dentro de la cancha, y se puede jugar individual o por parejas. En muchos pueblos, el frontón es el centro de la vida social.</p>`,
        L6.filas("Pelota vasca", [["a mano", "con tacos", cRO], ["pala", "de madera", cNA], ["cesta punta", "cesta de mimbre", cVE], ["frontenis", "con raqueta", cAZ]]), ["MVdX1AoyjlQ", "⚾⚾¿Qué es la PELOTA VASCA? ⚾⚾", "Oberena Pelota", 21833]],
    ],
    "Algunos deportes alternativos": [
      ["El pickleball", `<p>El <b>pickleball</b> es uno de los deportes que más está creciendo en el mundo. Nació en 1965 en una isla cerca de Seattle (Estados Unidos), cuando tres padres quisieron inventar un juego para que sus familias se divirtieran en verano. Mezcla elementos del <b>tenis</b>, el <b>bádminton</b> y el <b>tenis de mesa</b>:</p><ul><li>Se juega en una pista pequeña, del tamaño de una de bádminton, con una red algo más baja que la de tenis.</li><li>Se usa una <b>pala</b> lisa y una <b>pelota de plástico con agujeros</b>, que va bastante lenta.</li><li>El saque se hace <b>por debajo</b> de la cintura y en diagonal.</li><li>Cerca de la red hay una zona llamada <b>«la cocina»</b> (<i>kitchen</i>), donde no se puede golpear la pelota sin dejarla botar antes. Así se evita que el juego sea solo rematar junto a la red.</li><li>Se juega sobre todo por <b>parejas</b>.</li></ul><p>Su éxito se debe a que es <b>fácil de aprender</b>, poco exigente físicamente y muy social: pueden jugar juntos niños, adultos y abuelos. Por eso es un deporte ideal para el colegio y para jugar en familia.</p>`,
        H6.rueda("Pickleball", "MEZCLA", [["tenis", cAZ], ["bádminton", cVE], ["ping-pong", cRO], ["en familia", cMO]]), ["fTvPYdKZqO0", "Reglas del Pickleball | El recurso definitivo para principiantes sobre cómo jugar al Pickleball", "PlayPickleball.com", 7002096]],
    ],
  },
  final: [
    ["¿Cómo se cuentan los puntos?", `<p>Cada deporte de raqueta tiene su propia forma de puntuar:</p><ul><li><b>Tenis</b>: tiene un sistema muy curioso. Los puntos de cada <b>juego</b> se cuentan 0 (se dice «nada»), <b>15</b>, <b>30</b>, <b>40</b> y juego. Si los dos jugadores llegan a 40, hay <b>iguales</b> y hay que ganar dos puntos seguidos (ventaja y juego). Seis juegos (con al menos dos de diferencia) forman un <b>set</b>, y los partidos se juegan al mejor de tres o de cinco sets.</li><li><b>Bádminton</b>: cada set (o juego) se gana al llegar a <b>21 puntos</b> con dos de diferencia (con un máximo de 30). Los partidos se juegan al mejor de tres juegos. Se gana punto en cada jugada, saque quien saque.</li><li><b>Tenis de mesa</b>: cada juego se gana al llegar a <b>11 puntos</b> con dos de diferencia. Los saques se alternan cada dos puntos.</li><li><b>Pádel</b>: cuenta igual que el tenis.</li></ul><p>Saber llevar el marcador es parte del juego. En clase, podéis turnaros para hacer de <b>anotador</b>: es una buena forma de aprender las reglas y de practicar el cálculo mental.</p>`,
      L6.filas("Puntuación", [["tenis", "15, 30, 40, juego", cAZ], ["bádminton", "21 puntos", cVE], ["tenis de mesa", "11 puntos", cNA], ["pádel", "como el tenis", cMO]])],
    ["Inventa tu propio deporte", `<p>Muchos deportes alternativos nacieron porque alguien tuvo una idea, como el colpbol, inventado por un profesor. ¡Ahora te toca a ti! Para inventar un deporte, piensa en:</p><ol><li><b>El objetivo</b>: ¿qué hay que conseguir? ¿Meter un gol, derribar un objeto, que el móvil caiga en el campo contrario, pasar un número de veces seguidas?</li><li><b>El material</b>: puedes usar material deportivo o reciclado: botellas, aros, pelotas de papel, discos de cartón.</li><li><b>El espacio</b>: ¿una pista con red, un campo con porterías, un círculo?</li><li><b>Los jugadores</b>: ¿cuántos por equipo? ¿Equipos mixtos?</li><li><b>Las reglas</b>: cómo se mueve el móvil (con las manos, con los pies, con una pala), qué está prohibido y cómo se puntúa.</li><li><b>Los valores</b>: ¿cómo conseguir que participen todos? Por ejemplo, que no se pueda marcar hasta que todos hayan tocado el móvil.</li></ol><p>Después, <b>probadlo</b> en clase. Seguramente habrá que cambiar algunas reglas: eso es normal. Al final, escribid el <b>reglamento</b> y ponedle un nombre original.</p>`,
      H6.flujo("Inventar un deporte", ["objetivo|y material", "espacio|y jugadores", "reglas|y puntos", "probar|y mejorar"], cMO)],
  ],
  ejemplos: [
    ["En tenis, vas 40-30 y ganas el punto. ¿Qué pasa?", ["Desde 40, el siguiente punto gana el juego.", "Salvo que el rival esté también en 40."], "Ganas el juego."],
    ["El rival está en la red. ¿Dónde envías el volante?", ["Busca el espacio vacío.", "El fondo está libre."], "Alto y profundo, al fondo de su campo."],
  ],
  errores: ["Quedarse donde has golpeado en lugar de volver al centro.", "Golpear siempre fuerte en lugar de buscar el espacio libre."],
  ejercicios: [
    ["b", "¿Qué es la posición base?", "La posición en el centro del campo a la que se vuelve tras cada golpe."],
    ["b", "Nombra tres modalidades de pelota vasca.", "A mano, pala, cesta punta (frontenis)."],
    ["b", "¿Cómo se llama la zona junto a la red en pickleball?", "La cocina (kitchen)."],
    ["b", "¿A cuántos puntos se gana un juego de bádminton?", "A 21."],
    ["b", "¿Quién es Carolina Marín?", "Una jugadora de bádminton de Huelva, campeona olímpica en Río 2016."],
    ["m", "Explica cómo se cuentan los puntos en un juego de tenis.", "15, 30, 40 y juego; con iguales hay que ganar dos seguidos."],
    ["m", "Escribe dos principios tácticos de los deportes de red.", "Enviar el móvil al espacio vacío; mover al rival; volver al centro."],
    ["m", "¿Por qué el pickleball es bueno para jugar en familia?", "Porque es fácil de aprender, poco exigente y lo pueden jugar todas las edades."],
    ["m", "¿Qué es el frontis?", "La pared contra la que se golpea en la pelota vasca."],
    ["m", "¿Cómo aprendió Lucía el bádminton?", "Viendo a Carolina Marín y practicando con su hermano."],
    ["a", "Inventa un deporte alternativo y escribe su reglamento.", "Respuesta abierta."],
    ["a", "Haz de anotador en un partido de tenis de mesa y explica el marcador final.", "Respuesta abierta."],
    ["a", "Investiga sobre un deportista español de raqueta y presenta su trayectoria.", "Respuesta abierta."],
    ["a", "Diseña una sesión de pickleball adaptado para el patio.", "Respuesta abierta."],
  ],
  quiz: [
    ["Tras cada golpe conviene…", ["volver al centro", "quedarse en la red", "sentarse"], "Táctica."],
    ["La cesta punta usa…", ["una cesta de mimbre", "una raqueta", "la mano desnuda"], "Pelota vasca."],
    ["El pickleball nació en…", ["Estados Unidos", "España", "Japón"], "Pickleball."],
    ["En tenis, 40-40 se llama…", ["iguales", "empate total", "juego"], "Puntuación."],
    ["Un juego de tenis de mesa se gana a…", ["11 puntos", "21 puntos", "15 puntos"], "Puntuación."],
  ],
  examen: [
    ["¿En qué Juegos ganó Carolina Marín el oro?", ["Río 2016", "Londres 2012", "Tokio 2020"], "Lectura."],
    ["Si el rival te devuelve una bola alta y fácil…", ["es momento de rematar", "hay que dejarla pasar", "hay que tirarla fuera"], "Táctica."],
  ],
  tarjetas: [
    ["Táctica de red", "Espacio vacío, mover al rival, volver al centro, atacar bolas fáciles."],
    ["Pelota vasca", "Frontón y frontis; a mano, pala, cesta punta, frontenis."],
    ["Pickleball", "Pala, pelota con agujeros, saque por abajo y zona de la cocina."],
    ["Puntuación", "Tenis 15-30-40; bádminton 21; tenis de mesa 11."],
  ],
  glosario: [
    ["Posición base", "Lugar del campo al que se vuelve tras cada golpe."],
    ["Remate", "Golpe fuerte y descendente para ganar el punto."],
    ["Dobles", "Modalidad de dos contra dos."],
    ["Frontón", "Cancha con pared para jugar a pelota vasca."],
    ["Frontis", "Pared principal del frontón."],
    ["Cesta punta", "Modalidad de pelota vasca con cesta de mimbre."],
    ["Pickleball", "Deporte de pala que mezcla tenis, bádminton y ping-pong."],
    ["Juego", "En tenis, conjunto de puntos (15, 30, 40)."],
    ["Set", "Parte de un partido formada por varios juegos."],
    ["Iguales", "Empate a 40 en un juego de tenis."],
    ["Anotador", "Persona que lleva el marcador."],
    ["Reglamento", "Normas escritas de un deporte."],
  ],
  situacion: {
    titulo: "Las olimpiadas de raqueta",
    reto: "La clase organiza unas olimpiadas con deportes de raqueta, pelota y un deporte inventado por vosotros.",
    pasos: ["Preparad estaciones de bádminton, tenis de mesa, pickleball y frontón contra la pared.", "Practicad los principios tácticos y aprended a llevar el marcador de cada deporte.", "Por grupos, inventad un deporte alternativo y escribid su reglamento.", "Celebrad las olimpiadas con rotaciones, anotadores y una final del deporte inventado."],
    producto: "Unas olimpiadas de raqueta con un reglamento de un deporte inventado.",
    evaluacion: ["Aplica principios tácticos de red.", "Conoce la puntuación de varios deportes.", "Crea reglas justas e inclusivas.", "Respeta al adversario y las normas de seguridad."],
  },
});
