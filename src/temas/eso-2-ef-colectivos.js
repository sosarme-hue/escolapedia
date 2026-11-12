// Educación Física 2º ESO: deportes colectivos, baloncesto y voleibol. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Deportes colectivos: baloncesto y voleibol",
  minutos: 50,
  objetivos: ["Conocer el reglamento básico del baloncesto y del voleibol", "Ejecutar los gestos técnicos básicos de cada deporte", "Comprender la diferencia entre deportes de invasión y de red", "Aplicar principios tácticos sencillos en el juego"],
  claves: ["baloncesto", "voleibol", "bote", "pase", "tiro", "toque de dedos", "toque de antebrazos", "saque", "rotación"],
  pregunta: {
    texto: "En baloncesto los jugadores se mezclan con los rivales en todo el campo, pero en voleibol cada equipo se queda en su lado de la red. ¿Por qué?",
    respuesta: "Porque son dos tipos distintos de deporte colectivo. El baloncesto es un deporte de <b>invasión</b>: hay que entrar en el campo rival para anotar. El voleibol es un deporte de <b>red</b> (o de campo dividido): cada equipo defiende su espacio y <mark>no hay contacto</mark> con el rival.",
  },
  bloques: [
    {
      html: `<h3>Dos familias de deportes colectivos</h3>${tabla(["", "Baloncesto", "Voleibol"], [["Tipo", "invasión", "red (campo dividido)"], ["Jugadores en pista", "5 por equipo", "6 por equipo"], ["Objetivo", "meter el balón en la canasta rival", "que el balón toque el suelo del campo rival"], ["Contacto", "limitado (faltas)", "ninguno"], ["Tiempo", "4 periodos de 10 min (FIBA)", "por sets a 25 puntos"]])}<p>Ambos se inventaron en Estados Unidos a finales del siglo XIX: el baloncesto en <b>1891</b> (James Naismith) y el voleibol en <b>1895</b> (William Morgan).</p>`,
    },
    {
      html: `<h3>Baloncesto: reglas básicas</h3><ul><li><b>Puntos</b>: 1 por tiro libre, 2 por canasta dentro de la línea de 6,75 m y 3 desde fuera de ella.</li><li><b>Pasos</b>: no se puede caminar con el balón sin botar (como mucho dos apoyos tras recogerlo).</li><li><b>Dobles</b>: no se puede botar, coger el balón con las dos manos y volver a botar.</li><li><b>Campo atrás</b>: tras pasar al campo rival, no se puede volver con el balón al propio.</li><li><b>Faltas personales</b>: contacto ilegal (empujar, agarrar). Con 5 faltas el jugador queda eliminado.</li><li><b>3 segundos</b>: un atacante no puede estar más de 3 s en la zona rival.</li></ul>`,
      video: { id: "5F_HNvP0nZY", titulo: "¿Cómo se juega? Reglas básicas de baloncesto", canal: "SIKANA Español", vistas: 3292873 },
    },
    {
      html: `<h3>Baloncesto: técnica básica</h3><ul><li><b>Bote</b>: con la yema de los dedos, no con la palma; el balón a la altura de la cintura y la vista arriba, no en el balón. Protegerlo con el cuerpo.</li><li><b>Pase de pecho</b>: con dos manos desde el pecho, extendiendo los brazos y girando las muñecas hacia fuera. También pase picado (bota antes de llegar) y por encima de la cabeza.</li><li><b>Tiro</b>: pies apuntando a canasta, codo bajo el balón, extender el brazo y terminar con la muñeca «hacia abajo».</li><li><b>Entrada a canasta</b>: bote, dos pasos (derecha-izquierda si se tira con la derecha) y dejar el balón contra el tablero.</li></ul>`,
      svg: svg("Media pista de baloncesto con canasta, zona, línea de tiros libres y línea de tres puntos", `<rect x="20" y="10" width="220" height="160" fill="var(--sun)" fill-opacity=".08" stroke="var(--ink)" stroke-width="2"/><rect x="100" y="10" width="60" height="70" fill="var(--red)" fill-opacity=".12" stroke="var(--ink)" stroke-width="2"/><circle cx="130" cy="80" r="22" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M40 10 V 40 A 92 92 0 0 0 220 40 V 10" fill="none" stroke="var(--pen)" stroke-width="2.5"/><path d="M118 18 H 142" stroke="var(--ink)" stroke-width="3"/><circle cx="130" cy="25" r="6" fill="none" stroke="var(--red)" stroke-width="2"/>
        ${t(130, 50, "zona (3 s)", { c: "var(--red)", s: 10 })}${t(104, 84, "tiro libre", { s: 10, a: "end" })}${t(130, 150, "línea de 3 (6,75 m)", { c: "var(--pen)", s: 11 })}`),
    },
    {
      html: `<h3>Baloncesto: posiciones y táctica</h3><p>Hay tres posiciones básicas: <b>base</b> (organiza el juego), <b>aleros</b> (juegan por los laterales y tiran) y <b>pívots</b> (juegan cerca de la canasta, rebotean y taponan).</p><p>Ideas tácticas sencillas:</p><ul><li><b>Pasar y cortar</b>: tras pasar, moverse hacia canasta para recibir.</li><li><b>Defensa individual</b>: cada defensor sigue a un atacante, colocándose entre él y la canasta.</li><li><b>Contraataque</b>: tras recuperar, correr rápido para atacar antes de que el rival se organice.</li><li><b>Rebote</b>: ganar la posición (bloqueo) para atrapar el balón tras un tiro fallado.</li></ul>`,
      video: { id: "t6wBtpytfIM", titulo: "Posiciones y roles de cada jugador en baloncesto", canal: "SIKANA Español", vistas: 1515365 },
    },
    {
      html: `<h3>Voleibol: reglas básicas</h3><ul><li>Cada equipo puede tocar el balón un <b>máximo de 3 veces</b> antes de pasarlo (el bloqueo no cuenta).</li><li>Un jugador no puede tocar el balón <b>dos veces seguidas</b>.</li><li>No se puede <b>retener</b> ni acompañar el balón: se golpea.</li><li>No se puede tocar la <b>red</b> ni pisar el campo contrario.</li><li>Se juega a <b>sets de 25 puntos</b> (con 2 de diferencia); gana quien gana 3 sets (2 en categorías escolares, a veces).</li><li>Cada jugada da un punto (<b>punto directo</b>). El equipo que gana el punto saca.</li></ul>`,
      video: { id: "v_zYuFeA79M", titulo: "Reglas del voleibol", canal: "SIKANA Español", vistas: 1501537 },
    },
    {
      html: `<h3>Voleibol: técnica básica</h3><ul><li><b>Toque de dedos</b>: para balones altos. Manos sobre la frente formando un triángulo con pulgares e índices; flexionar piernas y extender todo el cuerpo al golpear. Se usa para colocar.</li><li><b>Toque de antebrazos</b> (o mancheta): para balones bajos y para recibir el saque. Brazos extendidos y juntos, manos unidas, golpear con los antebrazos y empujar con las piernas, no con los brazos.</li><li><b>Saque de abajo</b>: el más sencillo. Pie contrario adelantado, soltar el balón y golpearlo con la mano abierta o el puño por debajo.</li><li><b>Remate</b>: golpear fuerte por encima de la red tras un salto (se aprende más adelante).</li></ul>`,
      svg: svg("Dos muñecos: uno con toque de dedos sobre la frente y otro con toque de antebrazos", `${persona(70, 50, "var(--pen)", { brazos: [[-8, -22], [8, -22]], piernas: [[-12, 24], [12, 24]] })}<circle cx="70" cy="22" r="10" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)"/>${persona(190, 40, "var(--leaf)", { brazos: [[4, 24], [8, 24]], piernas: [[-14, 22], [14, 22]] })}<circle cx="200" cy="96" r="10" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)"/>${t(70, 150, "toque de dedos", { c: "var(--pen)", s: 12 })}${t(190, 150, "toque de antebrazos", { c: "var(--leaf)", s: 12 })}${t(70, 166, "balón alto", { c: "var(--muted)", s: 10 })}${t(190, 166, "balón bajo y recepción", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Voleibol: posiciones y rotación</h3><p>El campo mide 18 × 9 m, dividido por la red. Cada mitad tiene 6 zonas numeradas: <b>1</b> (saque, atrás derecha), 2, 3 y 4 delante, 5 y 6 atrás. Cuando un equipo recupera el saque, <mark>rota</mark> en el sentido de las agujas del reloj, así todos pasan por todas las posiciones.</p><p>Jugada ideal: <b>recepción</b> con antebrazos → <b>colocación</b> con dedos → <b>ataque</b> (remate o toque al espacio libre). Así se usan los tres toques.</p>`,
      svg: svg("Media pista de voleibol con las seis zonas numeradas y flechas de rotación", `<rect x="40" y="20" width="180" height="140" fill="var(--pen)" fill-opacity=".06" stroke="var(--ink)" stroke-width="2"/><path d="M40 20 H 220" stroke="var(--ink)" stroke-width="5"/><path d="M40 70 H 220 M100 20 V 160 M160 20 V 160" stroke="var(--line)" stroke-width="1.5"/>
        ${[["4", 70, 48], ["3", 130, 48], ["2", 190, 48], ["5", 70, 118], ["6", 130, 118], ["1", 190, 118]].map(([n, x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>${t(x, y + 5, n, { c: "var(--pen)", s: 13 })}`).join("")}
        ${t(130, 14, "red", { s: 10 })}<path d="M190 100 V 66 M174 48 H 146 M114 48 H 86 M70 66 V 100 M86 118 H 114 M146 118 H 174" stroke="var(--red)" stroke-width="1.6" opacity=".7"/>${t(130, 176, "rotación en sentido horario", { c: "var(--red)", s: 10 })}`),
      video: { id: "T08dXv9vZqI", titulo: "Zonas y posiciones en voleibol", canal: "SIKANA Español", vistas: 3551381 },
    },
    {
      html: `<h3>Valores en el deporte colectivo</h3><p>Los deportes de equipo enseñan mucho más que técnica:</p><ul><li><b>Cooperación</b>: en voleibol es imposible ganar un punto solo; hacen falta varios toques.</li><li><b>Comunicación</b>: pedir el balón («¡mía!»), avisar de un rival libre.</li><li><b>Responsabilidad</b>: cumplir tu papel en defensa aunque no se luzca.</li><li><b>Respeto</b>: al árbitro, al rival y a las reglas.</li><li><b>Inclusión</b>: que todos jueguen, también quien tiene menos experiencia.</li></ul>`,
    },
  ],
  figura: {
    titulo: "Baloncesto y voleibol",
    svg: filas("Comparación del baloncesto y el voleibol: tipo, reglas, técnica y táctica", [["Baloncesto", "invasión · 5 jugadores · 1, 2 o 3 puntos", "var(--sun)"], ["Reglas", "pasos · dobles · campo atrás · 5 faltas", "var(--red)"], ["Técnica", "bote · pase · tiro · entrada", "var(--sun)"], ["Voleibol", "red · 6 jugadores · sets a 25", "var(--pen)"], ["Reglas", "3 toques · no repetir · no tocar la red", "var(--inf)"], ["Técnica", "dedos · antebrazos · saque · rotación", "var(--pen)"]], 200),
  },
  video: { id: "5F_HNvP0nZY", titulo: "¿Cómo se juega? Reglas básicas de baloncesto", canal: "SIKANA Español", vistas: 3292873, megusta: 0, busqueda: "reglas básicas baloncesto voleibol" },
  quiz: mezcla([
    { q: "El baloncesto es un deporte de…", o: ["invasión", "red", "adversario individual"], a: 0, e: "Se entra en campo rival." },
    { q: "¿Cuántos jugadores hay en pista por equipo en voleibol?", o: ["6", "5", "7"], a: 0, e: "Tres delante y tres detrás." },
    { q: "Una canasta desde fuera de la línea de 6,75 m vale…", o: ["3 puntos", "2 puntos", "1 punto"], a: 0, e: "Triple." },
    { q: "Botar, coger el balón y volver a botar es…", o: ["dobles", "pasos", "campo atrás"], a: 0, e: "Infracción." },
    { q: "En baloncesto el bote se hace con…", o: ["la yema de los dedos", "la palma", "el puño"], a: 0, e: "Mejor control." },
    { q: "En voleibol cada equipo puede tocar el balón como máximo…", o: ["3 veces", "2 veces", "5 veces"], a: 0, e: "El bloqueo no cuenta." },
    { q: "Para recibir el saque se usa el toque de…", o: ["antebrazos", "dedos", "cabeza"], a: 0, e: "Balones bajos." },
    { q: "El toque de dedos sirve sobre todo para…", o: ["colocar", "sacar", "bloquear"], a: 0, e: "Balones altos." },
    { q: "En voleibol se rota en sentido…", o: ["de las agujas del reloj", "antihorario", "no se rota"], a: 0, e: "Al recuperar el saque." },
    { q: "Un set de voleibol se gana al llegar a…", o: ["25 puntos con 2 de diferencia", "21 puntos", "10 puntos"], a: 0, e: "Sistema de punto directo." },
  ]),
  examen: mezcla([
    { q: "Un atacante de baloncesto no puede estar en la zona rival más de…", o: ["3 segundos", "5 segundos", "10 segundos"], a: 0, e: "Regla de 3 s." },
    { q: "¿En qué zona se saca en voleibol?", o: ["zona 1", "zona 3", "zona 6"], a: 0, e: "Atrás a la derecha." },
    { q: "Secuencia ideal de tres toques en voleibol:", o: ["recepción, colocación, ataque", "ataque, recepción, saque", "saque, bloqueo, saque"], a: 0, e: "Antebrazos, dedos, remate." },
  ]),
  feynman: ["Deportes de invasión y de red", "Reglas básicas del baloncesto", "Bote, pase y tiro", "Reglas básicas del voleibol", "Toque de dedos, de antebrazos y rotación"],
  mapa: mapa("COLECTIVOS", "var(--eso)", [
    ["Baloncesto", "invasión · 5 jugadores", "var(--sun)"],
    ["Técnica", "bote · pase · tiro", "var(--red)"],
    ["Voleibol", "red · 6 jugadores", "var(--pen)"],
    ["Técnica", "dedos · antebrazos · saque", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Deporte de invasión", "Se entra en el campo rival para anotar."],
    ["Deporte de red", "Cada equipo en su campo, separados por una red."],
    ["Pasos", "Caminar con el balón sin botar."],
    ["Dobles", "Botar, coger con dos manos y volver a botar."],
    ["Entrada a canasta", "Bote, dos pasos y tiro contra el tablero."],
    ["Toque de dedos", "Golpeo alto con las yemas para colocar."],
    ["Toque de antebrazos", "Golpeo bajo para recibir."],
    ["Rotación", "Girar en sentido horario al recuperar el saque."],
  ],
  familias: ["Ved juntos un partido y contad cuántas veces un equipo usa los tres toques.", "Jugad a pases de pecho y picados en el parque.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Deportes de invasión y de red: reglamento básico, técnica individual (bote, pase, tiro; toque de dedos y antebrazos, saque) y principios tácticos; juego limpio (RD 217/2022, Educación Física, resolución de problemas en situaciones motrices).",
    ideas: ["Minibasket 3 × 3 y minivoley 2 × 2 o 3 × 3.", "Estaciones técnicas con fichas de autoevaluación.", "Arbitraje por el alumnado con tarjeta de juego limpio."],
  },
  fuentes: [RD, { t: "Federación Española de Baloncesto", url: "https://www.feb.es/" }, { t: "Real Federación Española de Voleibol", url: "https://www.rfevb.com/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Un equipo de baloncesto anota 6 tiros de 2, 3 triples y 4 tiros libres. ¿Cuántos puntos tiene?", pasos: ["6 × 2 = 12.", "3 × 3 = 9.", "4 × 1 = 4."], resultado: "12 + 9 + 4 = 25 puntos." },
    { enunciado: "En voleibol, la jugadora de la zona 2 toca el balón, luego la de la zona 3 y otra vez la de la zona 2, que lo pasa. ¿Es legal?", pasos: ["Son 3 toques: no supera el máximo.", "La de zona 2 no toca dos veces seguidas."], resultado: "Sí, es legal." },
    { enunciado: "Tu equipo de voleibol recupera el saque. La jugadora de la zona 2 ¿a qué zona pasa?", pasos: ["La rotación es en sentido horario.", "De la 2 se pasa a la 1."], resultado: "A la zona 1: le toca sacar." },
  ],
  errores: [
    "Botar mirando el balón en lugar de mirar el juego.",
    "Recoger el balón y dar tres pasos (pasos).",
    "En voleibol, golpear con las palmas o retener el balón.",
    "Hacer el toque de antebrazos balanceando los brazos en vez de empujar con las piernas.",
    "Olvidar rotar al recuperar el saque.",
    "Quedarse quieto sin pedir el balón.",
  ],
  ejercicios: [
    { q: "Compara el baloncesto y el voleibol en tres aspectos.", sol: "Tipo (invasión/red), jugadores (5/6), contacto (limitado/ninguno)." },
    { q: "Explica las reglas de pasos y dobles.", sol: "Pasos: avanzar con el balón sin botar. Dobles: botar, coger con dos manos y volver a botar." },
    { q: "¿Cuánto vale un tiro libre, una canasta normal y un triple?", sol: "1, 2 y 3 puntos." },
    { q: "Describe la técnica del pase de pecho.", sol: "Dos manos al pecho, extender los brazos y girar las muñecas hacia fuera." },
    { q: "Describe los pasos de la entrada a canasta para un diestro.", sol: "Bote, paso con la derecha, paso con la izquierda, salto y tiro contra el tablero." },
    { q: "¿Cuántos toques puede dar un equipo de voleibol? ¿Puede tocar dos veces el mismo jugador?", sol: "Tres; no dos veces seguidas." },
    { q: "¿Cuándo se usa el toque de dedos y cuándo el de antebrazos?", sol: "Dedos: balones altos y colocar. Antebrazos: balones bajos y recibir." },
    { q: "Dibuja las 6 zonas del campo de voleibol.", sol: "Delante 4-3-2, detrás 5-6-1." },
    { q: "Escribe dos principios tácticos del baloncesto.", sol: "Pasar y cortar, defensa individual, contraataque o rebote." },
    { q: "Explica qué valores se aprenden en los deportes colectivos.", sol: "Cooperación, comunicación, responsabilidad, respeto, inclusión." },
  ],
};
