// Educación Física 3º ESO: deportes de red y pared. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Deportes de red y pared",
  minutos: 50,
  objetivos: ["Conocer la lógica de los deportes de red y de pared", "Aplicar principios tácticos: mover al rival y recuperar la posición base", "Practicar los golpes básicos del voleibol y del bádminton", "Conocer el reglamento básico y el sistema de puntuación"],
  claves: ["red", "pared", "espacio separado", "posición base", "toque de dedos", "clear"],
  pregunta: {
    texto: "En bádminton o tenis, ¿es mejor pegar siempre lo más fuerte posible?",
    respuesta: "No. En los deportes de red se gana <mark>enviando el móvil donde el rival no está</mark> y obligándole a moverse. Un golpe suave y bien colocado junto a la red puede ser más eficaz que un remate potente al centro. La clave es la <b>precisión</b> y volver siempre a la <b>posición base</b>.",
  },
  bloques: [
    {
      html: `<h3>Deportes de red y de pared</h3><p>En los <b>deportes de red</b> cada equipo o jugador ocupa <mark>su propio campo</mark>, separado por una red. No hay contacto con el rival. El objetivo es enviar el móvil (balón, volante, pelota) al campo contrario de forma que no pueda devolverlo.</p><p>En los <b>deportes de pared</b> (o muro), los jugadores comparten el espacio y golpean la pelota contra una pared por turnos: frontón, pádel (que combina red y paredes), squash o pelota vasca.</p>${tabla(["Tipo", "Ejemplos"], [["Red, individual o dobles", "bádminton, tenis, tenis de mesa"], ["Red, equipo", "voleibol, vóley playa, sepak takraw"], ["Pared", "frontón, squash, pelota vasca"], ["Red y pared", "pádel"]])}`,
    },
    {
      html: `<h3>Principios tácticos</h3><p>Aunque los gestos cambian, la táctica es común:</p><ul><li><b>Atacar el espacio libre</b>: enviar el móvil lejos del rival, a las esquinas, al fondo o junto a la red.</li><li><b>Mover al rival</b>: alternar golpes largos y cortos, a un lado y a otro, para desequilibrarlo.</li><li><b>Recuperar la posición base</b>: tras cada golpe, volver al centro del propio campo, desde donde se llega a cualquier zona.</li><li><b>Variar</b> ritmo, dirección y altura para que el rival no adivine.</li><li><b>Defender</b> el propio campo: anticipar mirando al rival y su raqueta.</li></ul>`,
      svg: svg("Campo de bádminton dividido por la red: el jugador vuelve a la posición base y envía el volante a la esquina libre del rival", `<rect x="20" y="30" width="220" height="110" rx="3" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"/><path d="M130 22 V 148" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="74" cy="85" r="9" fill="var(--pen)"/><circle cx="74" cy="85" r="18" fill="none" stroke="var(--pen)" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="166" cy="112" r="9" fill="var(--red)"/>
        <path d="M82 80 Q 160 -6 220 46" fill="none" stroke="var(--sun)" stroke-width="2.5" stroke-dasharray="6 4"/><path d="M212 40 L 225 50 L 210 52 Z" fill="var(--sun)"/>
        ${t(74, 124, "posición base", { c: "var(--pen)", s: 10 })}${t(194, 74, "espacio libre", { c: "var(--sun)", s: 11 })}${t(130, 16, "red", { c: "var(--ink)", s: 10 })}`),
    },
    {
      html: `<h3>Voleibol: reglas básicas</h3><ul><li>Equipos de <b>6 jugadores</b>; red a 2,24 m (femenino) o 2,43 m (masculino) en categoría absoluta, más baja en categorías escolares.</li><li>Cada equipo tiene como máximo <b>3 toques</b> para devolver el balón; un mismo jugador no puede tocar dos veces seguidas (salvo tras el bloqueo).</li><li>El balón no se puede <b>retener</b> ni acompañar.</li><li>Se juega a <b>sets de 25 puntos</b> (con 2 de diferencia); gana quien consigue 3 sets. El quinto set, a 15.</li><li><b>Punto directo</b>: cada jugada da un punto a quien la gana, saque quien saque.</li><li>Al recuperar el saque, el equipo <b>rota</b> una posición en el sentido de las agujas del reloj.</li></ul>`,
      video: { id: "v_zYuFeA79M", titulo: "Reglas del voleibol", canal: "SIKANA Español", vistas: 1501464, megusta: 0 },
    },
    {
      html: `<h3>Los toques del voleibol</h3>${tabla(["Golpe", "Cómo se hace", "Para qué"], [["<b>Toque de dedos</b>", "manos sobre la frente formando un triángulo con pulgares e índices; extender brazos y piernas a la vez", "colocar balones altos y precisos"], ["<b>Toque de antebrazos</b> (mano baja)", "brazos extendidos y juntos, golpear con los antebrazos, el impulso sale de las piernas", "recibir el saque y balones bajos"], ["<b>Saque</b>", "de abajo (para empezar) o de arriba; golpear con la mano firme", "poner el balón en juego"], ["<b>Remate</b>", "salto y golpe de arriba abajo", "atacar"], ["<b>Bloqueo</b>", "saltar junto a la red con los brazos arriba", "frenar el remate rival"]])}<p>La secuencia ideal de un equipo es <mark>recepción → colocación → remate</mark>, usando los tres toques.</p>`,
    },
    {
      html: `<h3>Bádminton: reglas básicas</h3><ul><li>Se juega con <b>raqueta</b> y <b>volante</b>, individual o por parejas; red a 1,55 m.</li><li>Partidos al mejor de <b>3 juegos de 21 puntos</b> (con 2 de diferencia, máximo 30).</li><li>Cada jugada da punto a quien la gana.</li><li>El <b>saque</b> se hace desde abajo, por debajo de la cintura, en <b>diagonal</b> al cuadro contrario. Con puntuación par se saca desde la derecha; con impar, desde la izquierda.</li><li>El volante solo se puede golpear <b>una vez</b> por lado y no puede tocar el suelo.</li><li>No se puede tocar la red ni invadir el campo rival.</li></ul>`,
      video: { id: "UyLIi-TbcFc", titulo: "Las reglas del bádminton explicadas", canal: "Ninh Ly", vistas: 2647601, megusta: 0 },
    },
    {
      html: `<h3>Los golpes del bádminton</h3><ul><li><b>Presa</b>: se coge la raqueta «como si dieras la mano», sin apretar.</li><li><b>Clear</b>: golpe alto y profundo al fondo del campo rival. Sirve para ganar tiempo y alejar al rival de la red.</li><li><b>Dejada</b>: golpe suave que cae justo detrás de la red. Obliga al rival a correr hacia delante.</li><li><b>Remate</b> (<i>smash</i>): golpe fuerte de arriba abajo para terminar el punto.</li><li><b>Drive</b>: golpe tenso y paralelo a la red, a la altura de los hombros.</li><li>Golpes de <b>derecha</b> y de <b>revés</b> según el lado del cuerpo.</li></ul><p>Combinando <b>clear</b> y <b>dejada</b> se aplica el principio de mover al rival: fondo, red, fondo…</p>`,
    },
    {
      html: `<h3>Deportes de pared: frontón y pádel</h3><p>En el <b>frontón</b> (y la pelota vasca, deporte tradicional muy arraigado en el País Vasco y Navarra), los jugadores golpean por turnos la pelota contra el frontis. Se puede jugar con la mano, pala, raqueta o cesta.</p><p>El <b>pádel</b>, inventado en México en 1969 y muy popular en España, se juega por parejas en una pista cerrada con paredes. La pelota puede rebotar en las paredes después de botar en el suelo. Su táctica clave es <mark>ganar la red</mark>: la pareja que está junto a la red ataca y la que está al fondo defiende con globos.</p><p>En todos ellos se aplica la misma idea: colocar la pelota donde el rival tenga más difícil devolverla.</p>`,
    },
    {
      html: `<h3>Juego limpio y seguridad</h3><ul><li>En bádminton y tenis de mesa se <b>cantan</b> las propias faltas y se da el punto al rival si hay duda en una bola propia.</li><li>Antes de golpear, comprueba que nadie está en tu <b>radio de acción</b> con la raqueta.</li><li>En dobles, avisa con la voz («¡mía!») para no chocar con tu pareja.</li><li><b>Saluda</b> al rival al terminar, por encima de la red.</li></ul><p>Para empezar, se juega con material adaptado (volantes de plástico, balones más ligeros, red más baja) y en <b>cooperación</b>: contar cuántos golpes seguidos aguantáis los dos, antes de competir.</p>`,
    },
    {
      html: `<h3>Juegos para aprender</h3><ul><li><b>Golpes encadenados en cooperación</b>: por parejas, mantener el volante o el balón en el aire el mayor número de veces.</li><li><b>Diana</b>: colocar aros en el campo rival y sumar puntos al acertar; entrena la precisión.</li><li><b>Rey de la pista</b>: partidos cortos a 3 puntos; el ganador se queda.</li><li><b>Voleibol con recepción</b>: el balón puede cogerse y lanzarse en el primer toque para facilitar la secuencia de tres toques.</li><li><b>Minifrontón</b> contra una pared del patio con palas.</li></ul><p>Estos juegos permiten muchas repeticiones y que todo el mundo participe.</p>`,
    },
  ],
  figura: {
    titulo: "Deportes de red y pared",
    svg: filas("Red: espacio separado sin contacto; pared: espacio compartido por turnos; táctica: espacio libre y posición base; voleibol: tres toques, sets a 25; bádminton: clear, dejada, sets a 21", [["Red", "campos separados · sin contacto", "var(--pen)"], ["Pared", "frontón · squash · pádel (red + pared)", "var(--inf)"], ["Táctica", "espacio libre · mover al rival · posición base", "var(--red)"], ["Voleibol", "6 jugadores · 3 toques · sets a 25 · rotación", "var(--leaf)"], ["Bádminton", "clear · dejada · remate · juegos a 21", "var(--ink)"]], 200),
  },
  video: { id: "ZhtNcHrhcvo", titulo: "Reglas básicas del saque en bádminton", canal: "SIKANA Español", vistas: 150536, megusta: 0, busqueda: "bádminton reglas" },
  quiz: mezcla([
    { q: "En los deportes de red, los jugadores…", o: ["tienen campos separados", "comparten el espacio", "se empujan"], a: 0, e: "No hay contacto." },
    { q: "El pádel combina…", o: ["red y pared", "solo pared", "invasión y red"], a: 0, e: "Pista cerrada con red." },
    { q: "Tras cada golpe conviene volver a la…", o: ["posición base", "red", "línea de fondo"], a: 0, e: "Centro del campo." },
    { q: "En voleibol, cada equipo tiene como máximo…", o: ["3 toques", "2 toques", "5 toques"], a: 0, e: "Recepción, colocación, remate." },
    { q: "Un set de voleibol (salvo el quinto) se juega a…", o: ["25 puntos", "21 puntos", "11 puntos"], a: 0, e: "Con 2 de diferencia." },
    { q: "Para recibir el saque en voleibol se usa el toque de…", o: ["antebrazos", "dedos", "puño cerrado"], a: 0, e: "Mano baja." },
    { q: "Un juego de bádminton se gana a…", o: ["21 puntos", "15 puntos", "25 puntos"], a: 0, e: "Al mejor de 3." },
    { q: "El saque de bádminton se realiza…", o: ["en diagonal y por debajo de la cintura", "en línea recta y por encima de la cabeza", "desde cualquier lugar"], a: 0, e: "Al cuadro contrario." },
    { q: "Un golpe alto y profundo al fondo del rival es un…", o: ["clear", "drive", "remate"], a: 0, e: "Gana tiempo." },
    { q: "El golpe suave que cae junto a la red es la…", o: ["dejada", "clear", "volea"], a: 0, e: "Obliga a correr adelante." },
  ]),
  examen: mezcla([
    { q: "Con 7 puntos, el jugador que saca en bádminton lo hace desde el lado…", o: ["izquierdo", "derecho", "central"], a: 0, e: "Impar: izquierda." },
    { q: "Al recuperar el saque en voleibol, el equipo…", o: ["rota una posición", "cambia de campo", "pierde un punto"], a: 0, e: "Sentido horario." },
    { q: "En pádel, la pareja que está junto a la red suele…", o: ["atacar", "defender con globos", "sacar"], a: 0, e: "Ganar la red." },
  ]),
  feynman: ["Diferencia entre deportes de red y de pared", "Por qué es tan importante la posición base", "La secuencia de tres toques del voleibol", "Para qué sirven el clear y la dejada"],
  mapa: mapa("RED Y PARED", "var(--eso)", [
    ["Táctica", "espacio libre", "var(--red)"],
    ["Voleibol", "3 toques · 25", "var(--leaf)"],
    ["Bádminton", "clear · dejada", "var(--pen)"],
    ["Pared", "frontón · pádel", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Deporte de red", "Campos separados por una red, sin contacto."],
    ["Deporte de pared", "Se golpea por turnos contra una pared."],
    ["Posición base", "Centro del campo al que se vuelve tras cada golpe."],
    ["Toque de dedos", "Golpe de voleibol con las manos sobre la frente para colocar."],
    ["Toque de antebrazos", "Golpe de voleibol con brazos extendidos para recibir."],
    ["Clear", "Golpe alto y profundo al fondo del campo rival."],
    ["Dejada", "Golpe suave que cae justo detrás de la red."],
    ["Rotación", "Cambio de posiciones en voleibol al recuperar el saque."],
  ],
  familias: ["Jugad juntos a mantener un globo o un volante en el aire el mayor número de toques.", "Ved un partido de voleibol y contad cuántas veces se usan los tres toques.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Deportes de red y pared: lógica interna, principios tácticos, posición base, golpes básicos de voleibol y bádminton, reglamento y puntuación, frontón y pádel, juego limpio y seguridad (RD 217/2022, Educación Física).",
    ideas: ["Progresión cooperación → competición con contadores de golpes.", "Dianas en el campo rival para trabajar la precisión.", "Minitorneo de bádminton con autoarbitraje."],
  },
  fuentes: [RD, { t: "Real Federación Española de Voleibol", url: "https://www.rfevb.com/" }, { t: "Federación Española de Bádminton", url: "https://www.badminton.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Situaciones de juego",
  ejemplos: [
    { enunciado: "En bádminton, tu rival está pegado a la red tras una dejada. ¿Qué golpe eliges?",
      pasos: ["El espacio libre está en el fondo de su campo.", "Un clear alto y profundo le obliga a retroceder.", "Tú vuelves a la posición base mientras tanto."],
      resultado: "Clear al fondo para moverlo." },
    { enunciado: "En voleibol, el saque rival llega bajo y fuerte. Organiza la jugada de tu equipo.",
      pasos: ["1.er toque: recepción de antebrazos hacia la zona del colocador.", "2.º toque: colocación de dedos alta junto a la red.", "3.er toque: remate o envío a un hueco del campo rival."],
      resultado: "Secuencia recepción → colocación → remate." },
    { enunciado: "En un partido de bádminton vas 14-12 y sacas. ¿Desde dónde y hacia dónde?",
      pasos: ["Tu puntuación es 14, par.", "Con puntuación par se saca desde el cuadro derecho.", "El saque va en diagonal al cuadro derecho del rival (su derecha, tu izquierda vista de frente)."],
      resultado: "Saque desde la derecha, en diagonal." },
  ],
  errores: [
    "Golpear siempre fuerte y al centro, donde está el rival.",
    "Quedarse quieto tras golpear en lugar de volver a la posición base.",
    "En voleibol, golpear con las manos separadas en el toque de antebrazos.",
    "Retener o acompañar el balón en el toque de dedos.",
    "Sacar en bádminton por encima de la cintura.",
    "En dobles, no avisar y chocar con la pareja.",
  ],
  ejercicios: [
    { q: "Clasifica: voleibol, squash, pádel, tenis de mesa, frontón.", sol: "Red: voleibol, tenis de mesa. Pared: squash, frontón. Red y pared: pádel." },
    { q: "Explica tres principios tácticos de los deportes de red.", sol: "Atacar el espacio libre, mover al rival y recuperar la posición base." },
    { q: "¿Qué diferencia hay entre el toque de dedos y el de antebrazos?", sol: "Dedos: manos sobre la frente, para colocar balones altos. Antebrazos: brazos extendidos y juntos, para recibir balones bajos." },
    { q: "Un equipo de voleibol gana un set 25-23. ¿Es válido? ¿Y 25-24?", sol: "25-23 sí (2 de diferencia). 25-24 no: se sigue hasta que haya 2 de diferencia." },
    { q: "Describe la presa de la raqueta de bádminton.", sol: "Como si dieras la mano, sin apretar, con los dedos relajados." },
    { q: "¿Cuándo usarías una dejada?", sol: "Cuando el rival está al fondo de su campo, para que tenga que correr hacia la red." },
    { q: "¿Qué ocurre si el volante toca la red y cae en el campo rival durante el juego?", sol: "Es válido y el juego continúa (salvo en el saque, que en bádminton también es válido si cae en el cuadro correcto)." },
    { q: "Explica por qué en pádel es importante ganar la red.", sol: "Porque desde la red se ataca con voleas y remates, mientras que desde el fondo solo se puede defender." },
    { q: "Diseña un juego cooperativo de bádminton por parejas.", sol: "Respuesta abierta; por ejemplo, contar golpes seguidos sin que caiga y batir el récord de la pareja." },
    { q: "Organiza un minitorneo de clase de bádminton con autoarbitraje: formato, puntuación y normas de juego limpio.", sol: "Respuesta abierta; debe incluir grupos o eliminatoria, juegos cortos, cantar las propias faltas y saludo final." },
  ],
};
