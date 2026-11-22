// Educación Física 3º de Primaria: manejo de balones. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, vid, vgen, RD, PROF, nino, suelo, pelota, tick, equis } = require("./_pri3b");

// Trayectoria punteada de un balón.
const tray = (d, c = COL.azul) => `<path d="${d}" stroke="${c}" stroke-width="2" stroke-dasharray="4 4" fill="none"/>`;
const cono = (x, y, c = COL.naranja) => `<path d="M${x - 8} ${y} L${x} ${y - 20} L${x + 8} ${y}z" fill="${c}"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Manejo de balones",
  minutos: 50,
  objetivos: ["Conocer las principales habilidades con balón: lanzar, recibir, botar, conducir y golpear", "Lanzar con una y dos manos ajustando la fuerza y la dirección", "Recibir el balón amortiguando con las manos", "Botar y conducir el balón con las dos manos y los dos pies", "Participar en juegos con balón respetando a los compañeros y el material"],
  claves: ["balón", "lanzar", "recibir", "pase", "botar", "conducir", "golpear", "trayectoria", "precisión", "puntería", "mano dominante", "coordinación óculo-manual"],
  pregunta: {
    texto: "Un jugador de baloncesto bota el balón sin mirarlo, mientras busca con los ojos a un compañero libre. ¿Cómo puede controlar el balón sin verlo?",
    respuesta: "Porque lo ha <b>practicado</b> muchísimo. Al principio todos miramos el balón, pero con la práctica la mano «aprende» a botar sola, y los ojos quedan libres para ver el juego. Esa unión entre lo que ven los ojos y lo que hacen las manos se llama <mark>coordinación óculo-manual</mark>, y se entrena jugando con balones.",
  },
  bloques: [
    {
      html: `<h3>Jugamos con balones</h3><p>El <b>balón</b> es el material estrella de Educación Física. Con él practicamos las <mark>habilidades de manejo de objetos</mark>, que son:</p><p>• <b>Lanzar</b>: enviar el balón lejos con las manos.<br>• <b>Recibir</b>: atrapar el balón que nos llega.<br>• <b>Pasar</b>: lanzar el balón a un compañero para que lo reciba.<br>• <b>Botar</b>: empujar el balón contra el suelo con la mano para que rebote, mientras estamos parados o nos desplazamos.<br>• <b>Conducir</b>: llevar el balón con el pie, pegado a nosotros, mientras corremos.<br>• <b>Golpear</b>: dar al balón con el pie (chutar), con la mano, con la cabeza o con una pala o raqueta.</p><p>Hay balones de muchos tipos: de <b>gomaespuma</b>, blandos para empezar; de <b>baloncesto</b>, que botan muy bien; de <b>fútbol</b>; de <b>balonmano</b>, pequeños para cogerlos con una mano; de <b>voleibol</b>, ligeros; y pelotas pequeñas de tenis.</p><p>Para manejar bien el balón necesitamos <b>coordinación óculo-manual</b> (ojos y manos) y <b>óculo-pédica</b> (ojos y pies).</p>`,
      svg: svg("Habilidades con balón: lanzar, recibir, botar y conducir", `${tit("Habilidades con balón")}${fichas([["Lanzar", "enviar con la mano", COL.rojo], ["Recibir", "atrapar el balón", COL.azul], ["Botar", "contra el suelo", COL.naranja], ["Conducir", "con el pie", COL.verde], ["Golpear", "chutar o raqueta", COL.morado], ["Pasar", "a un compañero", COL.agua]], 2, 34, 0)}`),
    },
    {
      html: `<h3>Lanzar</h3><p><mark>Lanzar</mark> es enviar un objeto con fuerza a través del aire. Podemos lanzar buscando <b>distancia</b> (lo más lejos posible) o <b>precisión</b> (dar en un blanco, tener puntería).</p><p><b>Lanzamiento con una mano</b> (por encima del hombro, como al lanzar una pelota de tenis):</p><p>1. Colócate de lado, con el pie <b>contrario</b> a la mano que lanza adelantado. Si lanzas con la derecha, adelanta el pie izquierdo.<br>2. Lleva el brazo hacia atrás, con el codo a la altura del hombro.<br>3. Gira el tronco y lanza el brazo hacia delante y arriba, soltando el balón en el punto más alto.<br>4. Termina con el brazo estirado señalando el objetivo.</p><p><b>Lanzamiento con dos manos</b>: de pecho (para pases cortos), por encima de la cabeza (como en el saque de banda del fútbol) o desde abajo (como al lanzar un saco).</p><p>Para tener <b>puntería</b>, mira el blanco, no el balón, y ajusta la fuerza según la distancia: poca fuerza si está cerca, mucha si está lejos.</p>`,
      svg: svg("Niña lanzando con una mano y pie contrario adelantado hacia una diana", `${tit("Lanzar con una mano")}${suelo(150)}${nino(60, 150, { pose: "lanza", s: 1.3, nina: true })}${tray("M50 60 Q130 20 200 80")}${pelota(200, 80, 7)}<circle cx="220" cy="100" r="22" fill="none" stroke="${COL.rojo}" stroke-width="3"/><circle cx="220" cy="100" r="12" fill="none" stroke="${COL.rojo}" stroke-width="3"/><circle cx="220" cy="100" r="4" fill="${COL.rojo}"/>${tx(130, 172, "pie contrario delante · mira el blanco", 230)}`),
      video: vid("9gwlktJaa9k"),
    },
    {
      html: `<h3>Recibir</h3><p><mark>Recibir</mark> es atrapar el balón que nos lanzan y controlarlo para que no se escape. Es tan importante como lanzar: un buen pase no sirve de nada si nadie lo recoge.</p><p>Para recibir bien:</p><p>1. <b>Mira el balón</b> desde que sale de las manos del compañero hasta que llega a las tuyas.<br>2. Colócate <b>de frente</b> a la trayectoria del balón, con las piernas un poco separadas y las rodillas algo dobladas.<br>3. Pon las <b>manos delante</b>, abiertas, con los dedos relajados, formando una especie de cesta. Si el balón viene alto, los pulgares se juntan formando una W; si viene bajo, se juntan los meñiques.<br>4. Cuando el balón toque las manos, <b>acompaña</b> su movimiento llevando los brazos hacia el pecho: así lo <b>amortiguas</b> y no rebota.</p><p>Nunca pongas los dedos rígidos y apuntando al balón, porque te puedes hacer daño.</p><p>Para empezar se usan balones blandos y lanzamientos suaves desde cerca. Poco a poco, aumentamos la distancia y la velocidad. ¡Y no pasa nada si se cae! Recógelo y vuelve a intentarlo.</p>`,
      svg: svg("Recibir: mirar el balón, manos en cesta y amortiguar hacia el pecho", `${tit("Recibir")}${suelo(150)}${nino(216, 150, { pose: "palmas", s: 1.3 })}${tray("M30 80 Q120 40 202 86")}${pelota(198, 84, 8, COL.naranja)}${filas([["mira", "el balón", COL.azul], ["manos", "en cesta", COL.verde], ["amortigua", "hacia el pecho", COL.rojo]], 112, 18, { x: 20, wa: 66, wb: 80 })}`),
    },
    {
      html: `<h3>El pase</h3><p>El <mark>pase</mark> es lanzar el balón a un <b>compañero</b> para que lo reciba. Es la base de los deportes de equipo, porque permite que el balón avance más rápido que corriendo.</p><p>Tipos de pase con las manos:</p><p>• <b>Pase de pecho</b>: el balón sale desde el pecho con las dos manos, estirando los brazos y girando las muñecas hacia fuera. Es rápido y preciso, para distancias cortas.<br>• <b>Pase picado</b>: igual que el de pecho, pero el balón bota una vez en el suelo antes de llegar al compañero. Sirve para que no lo intercepte un rival.<br>• <b>Pase por encima de la cabeza</b>: con dos manos, para pasar por encima de un rival o a mayor distancia.<br>• <b>Pase con una mano</b>: más largo, como en balonmano.</p><p>Para que un pase sea bueno:</p><p>• Mira al compañero antes de pasar.<br>• Pasa al compañero que está <b>libre</b>, sin rivales cerca.<br>• Ajusta la fuerza: ni tan flojo que no llegue, ni tan fuerte que no lo pueda coger.<br>• Pasa a la altura del pecho del compañero, o un poco por delante si está corriendo.</p>`,
      svg: svg("Dos niños pasándose el balón: pase de pecho y pase picado", `${tit("Pase de pecho y picado")}${suelo(150)}${nino(40, 150, { pose: "brazos", s: 1.1 })}${nino(220, 150, { pose: "palmas", s: 1.1, nina: true })}${fl(62, 92, 196, 92, COL.azul, 2)}${pelota(130, 92, 7, COL.naranja)}${tray("M62 104 L130 150 L196 104", COL.rojo)}${et(130, 80, "de pecho", 70, { size: 10.5, color: COL.azul })}${et(130, 168, "picado", 60, { size: 10.5, color: COL.rojo })}`),
    },
    {
      html: `<h3>Botar el balón</h3><p><mark>Botar</mark> es empujar el balón contra el suelo con la mano para que rebote y vuelva a ella. Es la forma de desplazarse con el balón en baloncesto y en balonmano.</p><p>Para botar bien:</p><p>• Empuja el balón con los <b>dedos</b> y la yema, no con la palma ni dando golpes.<br>• El balón debe subir más o menos hasta la <b>cintura</b>.<br>• Bota a un lado del cuerpo, un poco adelantado, no justo delante de los pies.<br>• Flexiona un poco las piernas y mantén la espalda recta.<br>• Intenta <b>levantar la mirada</b> poco a poco, para ver lo que pasa a tu alrededor.<br>• Practica con las <b>dos manos</b>, la derecha y la izquierda.</p><p>Progresión de ejercicios:</p><p>1. Botar parado con una mano, luego con la otra.<br>2. Botar caminando, después corriendo.<br>3. Botar cambiando de mano.<br>4. Botar alto y bajo, despacio y rápido.<br>5. Botar en zigzag entre conos.<br>6. Botar mirando al profesor, que levanta los dedos: ¡di cuántos ves!</p>`,
      svg: svg("Niño botando el balón a un lado, a la altura de la cintura, en zigzag entre conos", `${tit("Botar")}${suelo(150)}${nino(70, 150, { pose: "brazos", s: 1.3 })}${pelota(98, 136, 8, COL.naranja)}<path d="M98 100 V128" stroke="${COL.naranja}" stroke-width="2" stroke-dasharray="3 3"/>${[150, 190, 230].map((x) => cono(x, 150)).join("")}${tray("M130 140 q20 -24 40 0 t40 0 t40 0")}${tx(130, 172, "con los dedos, a la cintura, con las dos manos", 236)}`),
      video: vid("pyBahhoU4EA"),
    },
    {
      html: `<h3>Conducir y golpear con el pie</h3><p>Con los pies también manejamos el balón:</p><p>• <mark>Conducir</mark> es llevar el balón con el pie mientras corremos, dándole <b>toques suaves</b> para que no se aleje demasiado. Se usa sobre todo el <b>interior</b> del pie y el <b>exterior</b>. Hay que mirar el balón, pero también levantar la vista de vez en cuando.</p><p>• <mark>Golpear</mark> o chutar es dar un golpe fuerte al balón con el pie. El pie de apoyo se coloca al <b>lado</b> del balón, y se golpea con el <b>interior</b> del pie (para pases precisos) o con el <b>empeine</b>, la parte de arriba del pie donde están los cordones (para tiros fuertes). ¡Nunca con la punta, que es poco preciso y puede doler!</p><p>• <b>Parar</b> o controlar el balón que nos llega: con la planta del pie encima del balón o con el interior del pie, amortiguando.</p><p>También podemos golpear con otras partes: con la <b>cabeza</b>, con la <b>mano</b> (como en el voleibol) o con una <b>pala</b> o raqueta.</p><p>Practica con los <b>dos pies</b>: aunque tengas uno dominante, un buen jugador usa los dos.</p>`,
      svg: svg("Conducción con el interior del pie y golpeo con el empeine", `${tit("Con el pie")}${suelo(150)}${nino(70, 150, { pose: "corre", s: 1.2 })}${pelota(98, 142, 8, "#fff")}<circle cx="98" cy="142" r="8" fill="none" stroke="var(--ink)"/>${tray("M110 140 h40")}${et(196, 70, "interior: pases", 100, { size: 10.5, color: COL.verde })}${et(196, 92, "empeine: tiros", 100, { size: 10.5, color: COL.azul })}${et(196, 114, "punta: ¡nunca!", 100, { size: 10.5, color: COL.rojo })}`),
    },
    {
      html: `<h3>Juegos con balón</h3><p>Ahora, a jugar. Estos juegos sirven para practicar todas las habilidades:</p><p>• <b>Los diez pases</b>: dos equipos. Uno intenta darse diez pases seguidos sin que el otro lo intercepte. No se puede correr con el balón en las manos ni quitarlo de las manos del rival.</p><p>• <b>Balón tiro</b> o «matar»: dos equipos en campos separados se lanzan un balón blando por debajo de la cintura. El que es tocado pasa al «cementerio», detrás del campo rival, desde donde puede seguir lanzando.</p><p>• <b>Bolos</b>: se colocan botellas de plástico y se lanzan balones rodando para derribarlas.</p><p>• <b>Pasa la patata</b>: en círculo, se pasa el balón rápidamente mientras suena la música. Cuando para, quien lo tiene hace una prueba.</p><p>• <b>El rey del bote</b>: todos botando dentro de un círculo intentan tocar el balón de los demás sin perder el suyo.</p><p>• <b>Puntería</b>: lanzar a dianas, aros colgados o cajas a distintas distancias.</p><p>• <b>Fútbol de parejas</b>: conducir el balón en pareja dándose pases hasta una portería de conos.</p>`,
      svg: svg("Juego de los diez pases: un equipo se pasa el balón y otro intenta interceptarlo", `${tit("Los diez pases")}<rect x="20" y="40" width="220" height="120" rx="6" fill="${COL.verde}" fill-opacity=".1" stroke="${COL.verde}" stroke-width="2"/>${[[60, 70], [190, 70], [130, 140], [60, 130]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${COL.azul}"/>`).join("")}${[[120, 80], [170, 120], [90, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${COL.rojo}"/>`).join("")}${tray("M60 70 L190 70 L130 140 L60 130")}${pelota(126, 70, 5, COL.naranja)}${et(130, 174, "azules pasan · rojos interceptan", 220, { size: 10 })}`),
    },
    {
      html: `<h3>Cuidamos el material y a los compañeros</h3><p>El material de Educación Física es de <b>todos</b>, y si lo cuidamos durará muchos años. Normas importantes:</p><p>• Cuando el profesor está explicando, el balón se queda <b>quieto</b>: entre los pies o debajo del brazo. ¡No se bota mientras se escucha!<br>• No se dan patadas a los balones de mano, ni se sientan encima de ellos.<br>• Al terminar, se recogen <b>todos los balones</b> y se guardan en su sitio.<br>• Se avisa si un balón está pinchado o roto.</p><p>Y para cuidar a los compañeros:</p><p>• No se lanza nunca a la <b>cabeza</b> de nadie.<br>• En los juegos de lanzar al cuerpo, se usan balones blandos y se lanza por debajo de la cintura.<br>• Antes de chutar o lanzar fuerte, se comprueba que no hay nadie delante.<br>• Si un balón se va a otro grupo, se pide por favor y se espera, sin invadir su juego.</p><p>En los juegos de equipo, lo más importante es que <b>todos toquen el balón</b>: pasa también a los compañeros a los que les cuesta más. Un equipo es mejor cuando juegan todos.</p>`,
      svg: svg("Normas: balón quieto al escuchar, no lanzar a la cabeza y recoger el material", `${tit("Normas con balón")}${columna([["balón quieto al escuchar", COL.azul], ["nunca a la cabeza", COL.rojo], ["pasa a todos", COL.verde], ["recoge el material", COL.naranja]], 130, 210, 36, 24, 10)}`),
    },
    {
      html: `<h3>Retos de malabares</h3><p>Para terminar, unos <b>retos</b> individuales para mejorar la coordinación. Cada uno con su balón, intentad superarlos poco a poco:</p><p>1. Lanzar el balón hacia arriba y recogerlo con las dos manos. Después, dar <b>una palmada</b> antes de recogerlo. ¿Y dos palmadas? ¿Y tres?<br>2. Lanzarlo hacia arriba, dejar que bote y recogerlo.<br>3. Lanzarlo, dar <b>una vuelta</b> sobre ti mismo y recogerlo.<br>4. Lanzarlo, tocar el suelo con las manos y recogerlo.<br>5. Pasar el balón alrededor de la <b>cintura</b>, del cuello y de las rodillas sin que se caiga.<br>6. Botar sentado en el suelo, luego tumbado.<br>7. Botar dos balones a la vez, uno con cada mano.<br>8. Lanzar el balón contra la pared y recogerlo, cada vez desde más lejos.<br>9. Dar toques con el pie al balón sin que caiga al suelo.</p><p>Apunta cuántas repeticiones consigues de cada reto y vuelve a intentarlo la semana siguiente. ¡Verás cómo mejoras!</p><p><b>Repaso:</b> ¿con qué parte de la mano se bota? → Con los dedos. ¿Qué pie se adelanta al lanzar con la derecha? → El izquierdo.</p>`,
      svg: svg("Niño lanza el balón hacia arriba y da una palmada antes de recogerlo", `${tit("Lanzo y palmada")}${suelo(150)}${nino(80, 150, { pose: "palmas", s: 1.1 })}${pelota(80, 38, 8, COL.naranja)}<path d="M80 50 V64" stroke="${COL.naranja}" stroke-width="2" stroke-dasharray="3 3"/>${filas([["1 palmada", "", COL.verde], ["2 palmadas", "", COL.sol], ["una vuelta", "", COL.rojo]], 70, 30, { x: 160, wa: 80, wb: 10 })}`),
    },
  ],
  figura: {
    titulo: "El balón en ocho ideas",
    svg: rejilla([
      ["Lanzar", "pie contrario delante", COL.rojo],
      ["Puntería", "mira el blanco", COL.morado],
      ["Recibir", "manos en cesta", COL.azul],
      ["Pase", "al compañero libre", COL.agua],
      ["Botar", "con los dedos", COL.naranja],
      ["Conducir", "toques suaves", COL.verde],
      ["Golpear", "interior o empeine", COL.marron],
      ["Normas", "nunca a la cabeza", COL.gris],
    ], 4, 86, "Resumen del manejo de balones"),
  },
  video: vgen("xG7nyNvnR1M", "juegos con balón educación física primaria"),
  ejemplos: [
    { enunciado: "Eres zurda y vas a lanzar una pelota lejos con una mano. ¿Qué pie adelantas?",
      pasos: ["Lanzo con la mano izquierda.", "Se adelanta el pie contrario a la mano que lanza.", "El contrario de la izquierda es el derecho."],
      resultado: "Adelanto el pie derecho." },
    { enunciado: "Tienes el balón y hay un compañero libre y otro con dos rivales cerca. ¿A quién pasas?",
      pasos: ["El compañero con rivales cerca puede perder el balón.", "El compañero libre puede recibir sin problemas."],
      resultado: "Al compañero libre." },
    { enunciado: "El lunes das 12 botes seguidos con la mano izquierda y el viernes, 20. ¿Cuántos más?",
      pasos: ["Restamos: 20 − 12.", "20 − 12 = 8."],
      resultado: "8 botes más: ¡la práctica funciona!" },
  ],
  errores: [
    "Botar dando golpes con la palma de la mano.",
    "Recibir con los dedos rígidos apuntando al balón.",
    "Chutar con la punta del pie.",
    "Lanzar adelantando el pie del mismo lado que la mano.",
  ],
  ejercicios: [
    { q: "Escribe cuatro habilidades de manejo de balón.", sol: "Lanzar, recibir, botar y conducir (también golpear y pasar)." },
    { q: "¿Qué es la coordinación óculo-manual?", sol: "La unión entre lo que ven los ojos y lo que hacen las manos." },
    { q: "¿Qué pie adelantas al lanzar con la mano derecha?", sol: "El pie izquierdo." },
    { q: "¿Qué debes mirar para tener puntería?", sol: "El blanco, no el balón." },
    { q: "¿Cómo se colocan las manos para recibir?", sol: "Delante, abiertas y relajadas, formando una cesta." },
    { q: "¿Qué es un pase picado?", sol: "Un pase en el que el balón bota una vez en el suelo antes de llegar al compañero." },
    { q: "¿Hasta dónde debe subir el balón al botar?", sol: "Más o menos hasta la cintura." },
    { q: "¿Qué es conducir el balón?", sol: "Llevarlo con el pie dándole toques suaves mientras corremos." },
    { q: "¿Con qué parte del pie se dan los pases precisos?", sol: "Con el interior del pie." },
    { q: "Escribe dos normas para jugar con balón.", sol: "No lanzar nunca a la cabeza y dejar el balón quieto cuando el profesor explica." },
  ],
  quiz: [
    { q: "Atrapar el balón que nos llega es…", o: ["recibir", "botar", "conducir"], a: 0, e: "Recibir." },
    { q: "Empujar el balón contra el suelo es…", o: ["botar", "chutar", "pasar"], a: 0, e: "Botar." },
    { q: "Llevar el balón con el pie es…", o: ["conducir", "lanzar", "recibir"], a: 0, e: "Conducir." },
    { q: "Al lanzar con la derecha adelantamos el pie…", o: ["izquierdo", "derecho", "ninguno"], a: 0, e: "El izquierdo." },
    { q: "Al recibir, los brazos van hacia…", o: ["el pecho", "arriba", "atrás de la espalda"], a: 0, e: "Hacia el pecho, amortiguando." },
    { q: "El pase que bota antes de llegar es el…", o: ["picado", "de pecho", "de cabeza"], a: 0, e: "El pase picado." },
    { q: "Se bota con…", o: ["los dedos", "el puño", "el codo"], a: 0, e: "Con los dedos." },
    { q: "Los tiros fuertes con el pie se hacen con el…", o: ["empeine", "talón", "tobillo"], a: 0, e: "Con el empeine." },
    { q: "Cuando el profesor explica, el balón…", o: ["se queda quieto", "se bota", "se lanza"], a: 0, e: "Se queda quieto." },
    { q: "En un buen equipo, el balón lo tocan…", o: ["todos", "solo los mejores", "solo uno"], a: 0, e: "Todos." },
  ],
  examen: [
    { q: "La unión de ojos y pies se llama coordinación…", o: ["óculo-pédica", "óculo-manual", "respiratoria"], a: 0, e: "Óculo-pédica." },
    { q: "Para pasar a un compañero que corre, pasamos…", o: ["un poco por delante", "detrás de él", "a sus pies siempre"], a: 0, e: "Un poco por delante." },
    { q: "En el juego de balón tiro se lanza…", o: ["por debajo de la cintura", "a la cabeza", "muy fuerte a la cara"], a: 0, e: "Por debajo de la cintura, con balón blando." },
    { q: "Para mejorar el bote hay que practicar con…", o: ["las dos manos", "solo la mano dominante", "los pies"], a: 0, e: "Con las dos manos." },
  ],
  feynman: ["Cómo se lanza con una mano", "Cómo se recibe un balón sin que rebote", "Cómo se bota correctamente"],
  mapa: mapa("EL BALÓN", "var(--pri)", [
    ["Lanzar", "pie contrario · puntería", COL.rojo],
    ["Recibir", "cesta · amortiguar", COL.azul],
    ["Botar", "dedos · cintura", COL.naranja],
    ["Con el pie", "conducir · golpear", COL.verde],
  ], 250),
  tarjetas: [
    ["Lanzar", "Enviar el balón con fuerza por el aire."],
    ["Puntería", "Precisión para dar en un blanco."],
    ["Recibir", "Atrapar y controlar el balón."],
    ["Pase", "Lanzar el balón a un compañero."],
    ["Botar", "Empujar el balón contra el suelo con los dedos."],
    ["Conducir", "Llevar el balón con el pie."],
    ["Empeine", "Parte de arriba del pie, para tiros fuertes."],
    ["Coordinación óculo-manual", "Ojos y manos trabajando juntos."],
  ],
  familias: ["Jugad a pasaros un balón en el parque, cada vez desde más lejos.", "Haced bolos con botellas de plástico en casa o en el patio.", "Proponed el reto de botar con la mano no dominante.", "Jugad a los retos de malabares y apuntad los récords."],
  profesores: PROF("Educación Física: habilidades de manipulación de objetos; lanzamientos de distancia y precisión; recepciones y amortiguación; pases; bote con ambas manos; conducción y golpeo con el pie; coordinación óculo-manual y óculo-pédica; juegos con balón y cuidado del material", ["Juego de los diez pases.", "Estaciones de puntería con aros y dianas.", "Fichas de retos individuales con registro semanal."]),
  fuentes: [RD, wiki("Balón", "Balón"), wiki("Coordinación motriz", "Coordinación motriz"), wiki("Pase", "Pase (deporte)")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Pasar en movimiento y desmarcarse para recibir", "Golpear con raquetas, palas y sticks", "Clasificar los deportes de balón", "Fabricar pelotas con materiales reciclados"],
  lectura: { titulo: "El balón de Fátima", html: `<p>Fátima ha llegado nueva al colegio a mitad de curso. En el recreo, los chicos de su clase juegan al fútbol y nunca le pasan el balón.</p><p>—Es que no sabes —le dice Daniel.</p><p>Fátima no dice nada. Al día siguiente, en Educación Física, la maestra propone el juego de los diez pases. Fátima se mueve sin parar: cuando su equipo tiene el balón, busca un hueco libre, levanta la mano y grita: «¡Aquí!».</p><p>Lucía le pasa el balón. Fátima lo para con el pie, mira y pasa rápido a Marcos. Vuelve a moverse, recibe otra vez y pasa con la mano. ¡Diez pases! Su equipo gana el punto.</p><p>—¿Dónde has aprendido eso? —pregunta Daniel, sorprendido.</p><p>—En mi antiguo colegio jugaba a balonmano —responde Fátima—. Lo importante no es correr con el balón, sino moverse cuando no lo tienes.</p><p>Ese día, en el recreo, Daniel se acerca a Fátima. —¿Quieres jugar con nosotros?</p><p>Fátima sonríe. —Vale. Pero con una condición: el balón lo tocamos todos.</p><p>Y desde entonces, en el patio, juegan chicos y chicas juntos.</p>` },
  tras: {
    "El pase": [
      ["Pasar en movimiento y desmarcarse", `<p>En los juegos de equipo, el balón no se queda quieto, y nosotros tampoco. Hay dos ideas muy importantes:</p><p><b>1. El desmarque</b>: cuando mi equipo tiene el balón y yo no, me muevo a un <mark>espacio libre</mark>, lejos de los contrarios, para que me puedan pasar. ¡Quedarse quieto detrás de un rival no sirve!</p><p><b>2. Pedir el balón</b>: cuando estoy libre, aviso a mi compañero levantando la mano, diciendo su nombre o «¡aquí!».</p><p>Y cuando tengo el balón:</p><ul><li><b>Levanto la cabeza</b> para ver dónde están mis compañeros.</li><li>Paso al compañero que está <b>libre</b>, no al que está rodeado de rivales.</li><li>Si mi compañero está corriendo, paso un poco <b>por delante</b> de él, al hueco, para que no tenga que pararse.</li><li>Después de pasar, <b>me vuelvo a mover</b>: es el «pasa y va».</li></ul><p>Así el balón corre más que nadie, y el equipo funciona mejor. Un buen jugador no es el que lleva siempre el balón, sino el que ayuda a que el equipo lo mueva bien.</p><p><b>Actividad</b>: en grupos de tres, pasaos el balón caminando y, después de cada pase, moveos a un sitio nuevo.</p>`,
        H6.flujo("Pasa y va", ["veo|libre", "paso|al hueco", "me muevo|otra vez", "pido|¡aquí!"], cAZ)],
    ],
    "Conducir y golpear con el pie": [
      ["Golpear con raquetas, palas y sticks", `<p>A veces no golpeamos la pelota con el cuerpo, sino con un <mark>implemento</mark>: un objeto que sujetamos con la mano. Así funcionan muchos deportes:</p><ul><li><b>Raqueta</b>: tenis, bádminton (con un volante de plumas) y tenis de mesa.</li><li><b>Pala</b>: pádel y las palas de playa.</li><li><b>Stick</b>: el hockey, un palo con la punta curvada.</li><li><b>Bate</b>: el béisbol.</li></ul><p>Consejos para golpear bien:</p><ul><li><b>Agarre</b>: sujeta el mango como si dieras la mano, sin apretar demasiado.</li><li><b>No pierdas de vista la pelota</b> hasta el momento del golpe.</li><li>Colócate <b>de lado</b>, no de frente, para tener más fuerza y control.</li><li>Lleva la raqueta hacia atrás antes de golpear y acompaña el golpe hacia delante.</li></ul><p>Para empezar, lo mejor es usar pelotas grandes y blandas o <b>globos</b>, que van más despacio. Primero, toques hacia arriba con la pala; después, pases con un compañero.</p><p>Seguridad: deja espacio alrededor para no golpear a nadie, y nunca levantes el stick por encima de la cintura en el hockey.</p><p><b>Actividad</b>: da toques a un globo con una pala sin que caiga. ¿Cuántos consigues?</p>`,
        L6.filas("Implementos", [["raqueta", "tenis, bádminton", cVE], ["pala", "pádel, playa", cNA], ["stick", "hockey", cAZ], ["bate", "béisbol", cRO]])],
    ],
    "Juegos con balón": [
      ["Los deportes de balón", `<p>Hay muchísimos deportes con pelota. Podemos clasificarlos según cómo se juegan:</p><ul><li><b>Deportes de invasión</b>: dos equipos comparten el campo y cada uno intenta llevar el balón a la portería o canasta del otro. Por ejemplo, <b>fútbol</b>, <b>baloncesto</b>, <b>balonmano</b>, <b>rugby</b> y <b>hockey</b>.</li><li><b>Deportes de red</b>: los equipos o jugadores están separados por una <b>red</b> y no se tocan. Hay que enviar la pelota al campo contrario. Por ejemplo, <b>voleibol</b>, <b>tenis</b>, <b>bádminton</b> y <b>pádel</b>.</li><li><b>Deportes de bateo</b>: un equipo lanza y el otro golpea con un bate y corre. Por ejemplo, el <b>béisbol</b>.</li><li><b>Deportes de precisión</b>: hay que acercar una bola a un objetivo. Por ejemplo, la <b>petanca</b>, los <b>bolos</b> o el <b>golf</b>.</li></ul><p>Los balones también son diferentes: el de rugby es <b>ovalado</b>; el de baloncesto es grande y rugoso para botar bien; el de voleibol es ligero y blando para golpearlo con las manos; el de balonmano es pequeño para cogerlo con una mano.</p><p><b>Actividad</b>: dibuja cuatro balones distintos y escribe a qué deporte pertenecen.</p>`,
        L6.filas("Deportes", [["invasión", "fútbol, baloncesto", cRO], ["red", "voleibol, tenis", cAZ], ["bateo", "béisbol", cNA], ["precisión", "petanca, golf", cVE]])],
    ],
  },
  final: [
    ["Fabricamos nuestras pelotas", `<p>No hace falta comprar una pelota para jugar. Podemos <mark>fabricarlas</mark> con materiales reciclados, como hacían muchos niños hace años.</p><p><b>Pelota de papel</b>:</p><ul><li>Haz una bola apretada con hojas de periódico.</li><li>Rodéala con cinta adhesiva hasta que quede redonda y firme.</li><li>Es perfecta para lanzar y atrapar, y no hace daño.</li></ul><p><b>Pelota de calcetín</b>:</p><ul><li>Mete varios calcetines viejos dentro de otro calcetín.</li><li>Haz un nudo o cóselo.</li><li>Sirve para jugar en casa sin romper nada.</li></ul><p><b>Pelota de malabares</b>:</p><ul><li>Llena un globo pequeño con arroz o harina usando un embudo.</li><li>Corta la boquilla y pon otro globo encima, por el otro lado.</li><li>Se queda blandita y no rebota: ¡ideal para empezar con los malabares!</li></ul><p>Fabricar nuestro material tiene muchas ventajas: <b>reciclamos</b>, ahorramos dinero, cada pelota es única y, además, aprendemos que se puede jugar con muy poco.</p><p>En muchos lugares del mundo, los niños juegan al fútbol con pelotas hechas de bolsas de plástico atadas con cuerdas.</p><p><b>Actividad</b>: fabrica una pelota de malabares y aprende a lanzarla de una mano a otra.</p>`,
      H6.rueda("Pelotas", "RECICLO", [["papel", cAZ], ["calcetín", cRO], ["globo y arroz", cNA], ["bolsas", cVE]])],
  ],
  ejemplos: [
    ["Tu equipo tiene el balón y estás detrás de un rival. ¿Qué haces?", ["Así no te pueden pasar.", "Hay que buscar un espacio libre."], "Moverte a un hueco libre y pedir el balón."],
    ["¿A qué tipo de deporte pertenece el voleibol?", ["Los equipos están separados.", "Hay una red en medio."], "Es un deporte de red."],
  ],
  errores: ["Quedarse quieto cuando el equipo tiene el balón en lugar de desmarcarse.", "Golpear con la raqueta sin mirar la pelota."],
  ejercicios: [
    ["b", "¿Qué es desmarcarse?", "Moverse a un espacio libre para recibir el balón."],
    ["b", "¿Qué implemento se usa en el hockey?", "El stick."],
    ["b", "¿Qué forma tiene el balón de rugby?", "Ovalada."],
    ["b", "Nombra un deporte de red.", "Voleibol, tenis, bádminton o pádel."],
    ["b", "En la lectura, ¿a qué jugaba Fátima en su antiguo colegio?", "A balonmano."],
    ["m", "Explica qué es el «pasa y va».", "Después de pasar, volver a moverse para recibir otra vez."],
    ["m", "¿Por qué es mejor empezar a usar raquetas con globos?", "Porque van más despacio y es más fácil golpearlos."],
    ["m", "¿Qué es un deporte de invasión? Pon dos ejemplos.", "Los equipos comparten campo e intentan llegar a la portería del otro: fútbol y baloncesto."],
    ["m", "¿Cómo se fabrica una pelota de papel?", "Haciendo una bola de periódico y rodeándola con cinta adhesiva."],
    ["m", "Da dos consejos para golpear bien con una raqueta.", "Mirar la pelota y colocarse de lado."],
    ["a", "¿Qué enseña Fátima a sus compañeros sobre el juego?", "Que lo importante es moverse sin balón y que todos toquen el balón."],
    ["a", "Clasifica: tenis, rugby, golf, béisbol, balonmano, pádel.", "Red: tenis, pádel. Invasión: rugby, balonmano. Precisión: golf. Bateo: béisbol."],
    ["a", "Inventa un juego con pelotas recicladas para el recreo.", "Respuesta abierta."],
    ["a", "Explica por qué un buen jugador no es el que lleva siempre el balón.", "Porque el equipo funciona mejor si el balón se mueve entre todos."],
  ],
  quiz: [
    ["Para recibir un pase debo…", ["moverme a un espacio libre", "esconderme detrás de un rival", "sentarme"], "Desmarque."],
    ["El bádminton se juega con…", ["raqueta y volante", "pala y pelota", "stick y bola"], "Implementos."],
    ["El baloncesto es un deporte de…", ["invasión", "red", "precisión"], "Clasificación."],
    ["Al golpear con raqueta conviene colocarse…", ["de lado", "de espaldas", "de rodillas"], "Golpeo."],
    ["La pelota de malabares se rellena de…", ["arroz o harina", "agua", "aire"], "Reciclar."],
  ],
  examen: [
    ["En la lectura, ¿qué condición pone Fátima para jugar en el recreo?", ["que todos toquen el balón", "ser la capitana", "jugar con su balón"], "Lectura."],
    ["¿En qué deporte el balón es ovalado?", ["rugby", "voleibol", "baloncesto"], "Balones."],
  ],
  tarjetas: [
    ["Desmarque", "Me muevo al hueco, pido el balón, paso y vuelvo a moverme."],
    ["Implementos", "Raqueta, pala, stick, bate; mirar la pelota, de lado."],
    ["Deportes", "Invasión, red, bateo y precisión."],
    ["Pelotas recicladas", "Papel con cinta, calcetín, globo con arroz."],
  ],
  glosario: [
    ["Desmarque", "Moverse a un espacio libre para recibir."],
    ["Hueco", "Espacio libre en el campo."],
    ["Pasa y va", "Pasar y volver a moverse enseguida."],
    ["Implemento", "Objeto con el que se golpea la pelota."],
    ["Raqueta", "Implemento con cuerdas para golpear."],
    ["Stick", "Palo curvado del hockey."],
    ["Volante", "Objeto con plumas que se usa en bádminton."],
    ["Deporte de invasión", "Deporte en el que se comparte el campo con el rival."],
    ["Deporte de red", "Deporte con una red que separa a los rivales."],
    ["Ovalado", "Con forma de huevo alargado."],
    ["Reciclar", "Volver a usar un material para otra cosa."],
    ["Malabares", "Lanzar y atrapar objetos seguidos."],
  ],
  situacion: {
    titulo: "La liga de los pases",
    reto: "La clase organiza una liga de juegos de pases y golpeos con pelotas fabricadas por los propios alumnos.",
    pasos: ["Fabricar pelotas de papel, calcetín y malabares en clase.", "Practicar el desmarque y el «pasa y va» en grupos de tres.", "Jugar a los diez pases, donde cada jugador debe tocar el balón al menos una vez.", "Terminar con una estación de golpeos con palas y globos y un diploma al mejor compañero."],
    producto: "Una liga de juegos de pases con material reciclado.",
    evaluacion: ["Se desmarca y pide el balón.", "Pasa al compañero libre.", "Golpea con implementos con control.", "Hace que todos participen."],
  },
});
