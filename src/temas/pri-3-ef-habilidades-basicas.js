// Educación Física 3º de Primaria: habilidades básicas, correr, saltar y girar. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, vid, vgen, RD, PROF, nino, suelo, pelota, tick, equis } = require("./_pri3b");

// Cono de entrenamiento y aro en el suelo.
const cono = (x, y, c = COL.naranja) => `<path d="M${x - 8} ${y} L${x} ${y - 20} L${x + 8} ${y}z" fill="${c}"/><rect x="${x - 10}" y="${y - 2}" width="20" height="3" fill="${c}"/>`;
const aro = (x, y, c = COL.rojo) => `<ellipse cx="${x}" cy="${y}" rx="16" ry="5" fill="none" stroke="${c}" stroke-width="3"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Habilidades básicas: correr, saltar y girar",
  minutos: 50,
  objetivos: ["Conocer qué son las habilidades motrices básicas", "Mejorar la técnica de la carrera: postura, brazos y apoyo de los pies", "Saltar de distintas formas y caer amortiguando", "Realizar giros sobre distintos ejes de forma segura", "Combinar desplazamientos, saltos y giros en circuitos y juegos"],
  claves: ["habilidades motrices", "desplazamiento", "carrera", "zancada", "velocidad", "resistencia", "salto", "impulso", "batida", "caída", "giro", "voltereta"],
  pregunta: {
    texto: "Un bebé primero se arrastra, luego gatea, después camina, y un día empieza a correr y a saltar. Tú ya haces todo eso sin pensar. ¿Se puede aprender a correr y a saltar mejor?",
    respuesta: "¡Sí! Correr, saltar y girar son <mark>habilidades motrices básicas</mark>: movimientos que todos hacemos, pero que se pueden <b>mejorar</b> con práctica. Si colocas bien los brazos, apoyas bien los pies y caes con las rodillas dobladas, serás más rápido, saltarás más y te harás menos daño.",
  },
  bloques: [
    {
      html: `<h3>Las habilidades motrices básicas</h3><p>Las <mark>habilidades motrices básicas</mark> son los movimientos fundamentales que usamos en la vida diaria, en los juegos y en todos los deportes. Son la base para aprender después movimientos más difíciles.</p><p>Se agrupan en cuatro tipos:</p><p>• <b>Desplazamientos</b>: moverse de un sitio a otro. Por ejemplo, andar, correr, cuadrupedias (a cuatro patas), reptar, trepar, deslizarse o nadar.<br>• <b>Saltos</b>: despegar del suelo y volver a caer.<br>• <b>Giros</b>: dar vueltas sobre uno mismo.<br>• <b>Manejo de objetos</b>: lanzar, recibir, botar, golpear o conducir un balón u otro objeto.</p><p>En este tema practicaremos las tres primeras: <b>desplazamientos</b> (sobre todo la carrera), <b>saltos</b> y <b>giros</b>. En el tema siguiente trabajaremos el manejo de balones.</p><p>Para hacer bien estas habilidades necesitamos <b>coordinación</b> (que las partes del cuerpo se muevan a la vez y en orden), <b>equilibrio</b>, <b>fuerza</b> y <b>velocidad</b>. Y la mejor forma de mejorarlas es jugar mucho y variado.</p>`,
      svg: svg("Habilidades básicas: desplazamientos, saltos, giros y manejo de objetos", `${tit("Habilidades básicas")}${suelo(146)}${nino(40, 146, { pose: "corre", s: 0.85 })}${nino(100, 146, { pose: "salta", s: 0.85, nina: true })}${nino(160, 146, { pose: "arriba", s: 0.85 })}<path d="M146 76 a14 6 0 1 0 28 0" stroke="${COL.morado}" stroke-width="2" fill="none"/>${nino(220, 146, { pose: "lanza", s: 0.85, nina: true })}${pelota(206, 70, 6)}${[["correr", 40], ["saltar", 100], ["girar", 160], ["lanzar", 220]].map(([s, x]) => et(x, 168, s, 50, { size: 10.5, color: COL.azul })).join("")}`),
    },
    {
      html: `<h3>Desplazamientos</h3><p>Nos podemos desplazar de muchísimas formas. Probarlas todas mejora la coordinación y la fuerza:</p><p>• <b>Andar</b>: siempre hay un pie apoyado en el suelo.<br>• <b>Correr</b>: hay un momento en que <b>ningún pie toca el suelo</b>: es la fase de vuelo.<br>• <b>Cuadrupedias</b>: con manos y pies, como animales: el oso (boca abajo, culo arriba), el cangrejo (boca arriba) o la foca (arrastrando las piernas).<br>• <b>Reptar</b>: tumbado, como una serpiente o un soldado.<br>• <b>Trepar</b>: subir por una espaldera, una cuerda o un rocódromo.<br>• <b>Deslizarse</b>: sobre un patinete, una tela o un tobogán.<br>• <b>Saltar a la pata coja</b>, a pies juntos, dando saltitos.</p><p>Además, podemos cambiar la <b>dirección</b> (hacia delante, hacia atrás, de lado), la <b>velocidad</b> (despacio, rápido, con cambios de ritmo) y la <b>trayectoria</b> (en línea recta, en zigzag, en curva, en círculo).</p><p><b>Juego:</b> «Los animales». El profesor dice un animal y todos se desplazan como él: canguro, cangrejo, oso, serpiente, flamenco…</p>`,
      svg: svg("Desplazamientos: andar, correr en zigzag entre conos y cuadrupedia de oso", `${tit("Desplazamientos")}${suelo(150)}${[60, 110, 160, 210].map((x) => cono(x, 150)).join("")}<path d="M30 140 q30 -30 55 0 t50 0 t50 0 t50 0" stroke="${COL.azul}" stroke-width="2" stroke-dasharray="4 4" fill="none"/>${nino(28, 150, { pose: "corre", s: 0.7 })}${tx(130, 172, "zigzag entre conos", 160)}${tx(130, 52, "andar · correr · reptar · trepar", 220)}`),
    },
    {
      html: `<h3>La carrera</h3><p><mark>Correr</mark> es desplazarse rápido, con un momento en el aire entre paso y paso. Cada paso largo se llama <b>zancada</b>. Para correr bien:</p><p>• <b>Cuerpo</b> un poco inclinado hacia delante, espalda recta y mirada al frente, no al suelo.<br>• <b>Brazos</b> doblados en ángulo recto, como una L, moviéndose hacia delante y hacia atrás, nunca cruzados delante del cuerpo. El brazo contrario acompaña a la pierna: cuando adelantas la pierna derecha, adelantas el brazo izquierdo.<br>• <b>Rodillas</b> que suben hacia delante.<br>• <b>Pies</b>: apoya primero la parte delantera del pie, no el talón, sobre todo si vas rápido.<br>• <b>Respiración</b> rítmica y relajada.</p><p>Hay dos tipos de carrera:</p><p>• La <mark>carrera de velocidad</mark>: muy rápida, durante poco tiempo, por ejemplo 30 metros. Hay que salir con fuerza y dar zancadas rápidas.<br>• La <mark>carrera de resistencia</mark>: a ritmo suave, durante mucho tiempo, por ejemplo 5 minutos. Hay que regular el esfuerzo para no cansarse al principio. Un truco: si puedes hablar mientras corres, vas a buen ritmo.</p>`,
      svg: svg("Técnica de la carrera: cuerpo inclinado, brazos en L, rodilla arriba, apoyo en la punta del pie", `${tit("Correr bien")}${suelo(150)}${nino(80, 150, { pose: "corre", s: 1.5 })}${filas([["mirada", "al frente", COL.azul], ["brazos", "en L, sin cruzar", COL.rojo], ["rodillas", "hacia arriba", COL.verde], ["pies", "apoya la punta", COL.naranja]], 54, 26, { x: 150, wa: 60, wb: 90, dos: true })}`),
      video: vid("0mqORNMFaXM"),
    },
    {
      html: `<h3>Los saltos</h3><p><mark>Saltar</mark> es despegar del suelo, mantenerse un momento en el aire y volver a caer. Todo salto tiene tres fases:</p><p>1. <mark>Impulso</mark> o batida: flexionamos las piernas y las estiramos con fuerza para despegar. Los brazos ayudan: se balancean de atrás hacia delante y arriba. La <b>batida</b> puede ser con un pie o con los dos.<br>2. <b>Vuelo</b>: el momento en el aire. Hay que mantener el cuerpo controlado.<br>3. <mark>Caída</mark>: volvemos al suelo. Es la fase más importante para no hacerse daño: caemos sobre la parte delantera de los pies y <b>doblamos las rodillas</b> para amortiguar, como un muelle.</p><p>Hay muchos tipos de saltos:</p><p>• Según la dirección: <b>de longitud</b> (lo más lejos posible), <b>de altura</b> (lo más alto posible) o <b>hacia abajo</b> (desde un banco o un plinto).<br>• Según los pies: con <b>pies juntos</b>, a la <b>pata coja</b>, alternando pies.<br>• Con o sin carrera previa.<br>• Con materiales: a la <b>comba</b>, sobre aros, vallas bajas, bancos…</p>`,
      svg: svg("Tres fases del salto: impulso con piernas dobladas, vuelo y caída con rodillas flexionadas", `${tit("Fases del salto")}${suelo(150)}${nino(50, 150, { pose: "agacha", s: 1 })}${nino(130, 120, { pose: "salta", s: 1 })}${nino(210, 150, { pose: "agacha", s: 1 })}<path d="M60 96 q70 -70 140 0" stroke="${COL.azul}" stroke-width="2" stroke-dasharray="4 4" fill="none"/>${et(50, 168, "1 · impulso", 70, { size: 10.5, color: COL.rojo })}${et(130, 168, "2 · vuelo", 70, { size: 10.5, color: COL.azul })}${et(210, 168, "3 · caída", 70, { size: 10.5, color: COL.verde })}`),
    },
    {
      html: `<h3>Caer bien</h3><p>Muchas lesiones en los juegos se producen por <b>caer mal</b>. Por eso es muy importante aprender a <b>amortiguar</b> la caída:</p><p>• Cae sobre las <b>puntas de los pies</b> y luego apoya el resto del pie.<br>• <b>Dobla las rodillas</b> al tocar el suelo, sin que choquen entre sí.<br>• Mantén los <b>brazos</b> delante para equilibrarte.<br>• Las rodillas no deben ir hacia dentro.<br>• Nunca caigas con las piernas rígidas, porque el golpe llega a las rodillas y a la espalda.</p><p>Si pierdes el equilibrio y te caes al suelo, intenta <b>rodar</b> en lugar de poner los brazos estirados de golpe, para no hacerte daño en las muñecas.</p><p>Normas de seguridad en los saltos:</p><p>• Salta sobre <b>superficies blandas</b> o colchonetas cuando la altura es mayor.<br>• Espera a que el compañero anterior se haya apartado.<br>• Comprueba que no hay nadie en la zona de caída.<br>• No empujes nunca a quien está saltando.</p><p><b>Juego:</b> «El muelle». Saltamos desde un banco bajo a una colchoneta y nos quedamos «congelados» al caer, con las rodillas dobladas. ¡El que no se mueve, gana!</p>`,
      svg: svg("Caída correcta con rodillas dobladas frente a caída con piernas rígidas", `${tit("Caer amortiguando")}${suelo(150)}${nino(70, 150, { pose: "agacha", s: 1.2 })}${tick(70, 52)}${nino(190, 150, { pose: "pie", s: 1.2 })}${equis(190, 52)}${et(70, 170, "rodillas dobladas", 110, { size: 10.5, color: COL.verde })}${et(190, 170, "piernas rígidas", 100, { size: 10.5, color: COL.rojo })}`),
    },
    {
      html: `<h3>Los giros</h3><p><mark>Girar</mark> es dar vueltas sobre uno mismo. Los giros nos ayudan a orientarnos, a cambiar de dirección rápidamente en los juegos y mejoran el equilibrio. Podemos girar alrededor de tres <b>ejes</b>:</p><p>• <b>Eje vertical</b> (de la cabeza a los pies): girar de pie como una peonza o una bailarina, dar media vuelta o una vuelta completa saltando.</p><p>• <b>Eje horizontal de lado a lado</b>: las <mark>volteretas</mark>, hacia delante y hacia atrás, como una rueda.</p><p>• <b>Eje horizontal de delante a atrás</b>: la <b>rueda lateral</b> o rodar tumbado como un tronco o una croqueta.</p><p>Cómo hacer la <b>voltereta hacia delante</b> en una colchoneta:</p><p>1. En cuclillas, apoya las manos en la colchoneta, separadas como los hombros.<br>2. <b>Mete la barbilla en el pecho</b>, mirándote la barriga. ¡Esto es lo más importante para proteger el cuello!<br>3. Empuja con los pies, apoya la nuca y la espalda redondeada, como una pelota.<br>4. Rueda y levántate sin apoyar las manos.</p><p>Si te mareas al girar, para, fija la mirada en un punto y respira.</p>`,
      svg: svg("Tres giros: peonza en el eje vertical, voltereta y croqueta", `${tit("Los giros")}${fichas([["Peonza", "eje vertical", COL.morado], ["Voltereta", "delante y atrás", COL.rojo], ["Croqueta", "rodar tumbado", COL.verde]], 1, 36, 36)}`),
      video: vid("JZyhM-vdzY0"),
    },
    {
      html: `<h3>Juegos de carrera</h3><p>Los mejores entrenamientos son los <b>juegos</b>. Aquí tienes algunos para correr:</p><p>• <b>Pilla-pilla</b>: uno la «liga» y persigue a los demás. Al que toca, pasa a ligarla. Variantes: con casa (un aro donde no te pueden pillar), en parejas cogidos de la mano, o «pilla-pilla congelado», en el que los pillados se quedan quietos hasta que otro les pasa por debajo de las piernas.</p><p>• <b>Policías y ladrones</b>: un equipo persigue y otro escapa. Los ladrones atrapados van a la cárcel, y un compañero libre puede rescatarlos tocándoles la mano.</p><p>• <b>Relevos</b>: por equipos en fila, cada uno corre hasta un cono, lo rodea y vuelve a dar el relevo con una palmada al siguiente.</p><p>• <b>Las cuatro esquinas</b>: cuatro jugadores en las esquinas cambian de sitio y el del centro intenta ocupar una esquina libre.</p><p>• <b>Carrera de resistencia</b>: correr 3 o 4 minutos a ritmo suave por parejas, hablando, sin parar.</p><p>En los juegos de persecución hay que mirar bien para no chocar, pillar sin empujar y respetar los límites del campo.</p>`,
      svg: svg("Relevos: niños en fila corren a un cono y vuelven", `${tit("Relevos")}${suelo(150)}${nino(30, 150, { pose: "pie", s: 0.75 })}${nino(52, 150, { pose: "pie", s: 0.75, nina: true })}${nino(110, 150, { pose: "corre", s: 0.9 })}${cono(220, 150)}${fl(140, 108, 210, 108, COL.azul, 2)}${fl(210, 124, 140, 124, COL.rojo, 2)}${tx(130, 172, "rodea el cono y da el relevo con una palmada", 236)}`),
    },
    {
      html: `<h3>Juegos de saltos y giros</h3><p>Ahora, juegos para saltar y girar:</p><p>• <b>La rayuela</b>: dibujada en el suelo, se salta a la pata coja y con dos pies sin pisar las líneas.</p><p>• <b>La comba</b>: dos compañeros dan a la cuerda y los demás entran a saltar, cantando una canción. Se puede saltar también la comba individual.</p><p>• <b>Saltar el río</b>: dos cuerdas en el suelo son las orillas de un río que cada vez es más ancho. ¡Salta sin mojarte!</p><p>• <b>Los aros</b>: se colocan aros en el suelo y se salta de uno a otro con pies juntos, a la pata coja, o siguiendo un patrón: dos pies, un pie, dos pies.</p><p>• <b>La peonza humana</b>: al oír una palmada, damos un salto con media vuelta; con dos palmadas, una vuelta entera.</p><p>• <b>Las croquetas</b>: en fila tumbados en las colchonetas, rodamos hasta el otro lado.</p><p>• <b>Saltar el foso</b>: saltamos sobre una colchoneta pequeña (el foso), con carrera, cayendo con las rodillas dobladas.</p><p>¡Recuerda calentar antes de saltar y caer siempre amortiguando!</p>`,
      svg: svg("Camino de aros en el suelo para saltar con uno y dos pies", `${tit("Camino de aros")}${suelo(150)}${[[30, 150], [70, 150], [110, 140], [110, 160], [150, 150], [190, 140], [190, 160], [230, 150]].map(([x, y]) => aro(x, y - 10)).join("")}${nino(30, 136, { pose: "salta", s: 0.75, nina: true })}${tx(130, 64, "un pie · dos pies · un pie…", 200)}`),
    },
    {
      html: `<h3>¡Circuito de habilidades!</h3><p>Para terminar, montamos un <b>circuito</b> con estaciones que combinan todo lo aprendido. Se hace en grupos pequeños que pasan por todas las estaciones:</p><p>1. <b>Zigzag</b>: correr entre conos sin tocarlos.<br>2. <b>Reptar</b>: pasar por debajo de una cuerda tendida entre dos sillas, sin tocarla.<br>3. <b>Aros</b>: saltar a pies juntos dentro de cinco aros seguidos.<br>4. <b>Banco</b>: subir a un banco sueco, caminar por encima y saltar a la colchoneta, cayendo bien.<br>5. <b>Voltereta</b>: hacer una voltereta hacia delante en la colchoneta.<br>6. <b>Giro</b>: saltar dando media vuelta y volver al principio en carrera suave.</p><p>Al principio lo hacemos despacio, cuidando la técnica. Después, podemos medir cuánto tardamos y ver si mejoramos de una semana a otra. ¡La meta es superarse a uno mismo!</p><p><b>Repaso:</b> ¿cuáles son las tres fases del salto? → Impulso, vuelo y caída. ¿Qué es lo más importante en la voltereta? → Meter la barbilla en el pecho.</p>`,
      svg: svg("Circuito: zigzag, reptar, aros, banco, voltereta y giro", `${tit("El circuito")}${flujo([["zigzag", COL.naranja], ["reptar", COL.verde], ["aros", COL.rojo]], 48, 28)}${flujo([["banco", COL.marron], ["voltereta", COL.morado], ["giro", COL.azul]], 108, 28)}${fl(222, 78, 40, 104, "var(--muted)", 1.5)}${tx(130, 166, "despacio primero, luego mide tu tiempo", 230)}`),
    },
  ],
  figura: {
    titulo: "Correr, saltar y girar en ocho ideas",
    svg: rejilla([
      ["Habilidades", "la base de todo", COL.azul],
      ["Desplazarse", "andar, reptar, trepar", COL.verde],
      ["Correr", "brazos en L", COL.rojo],
      ["Velocidad", "rápido y corto", COL.naranja],
      ["Resistencia", "suave y largo", COL.agua],
      ["Salto", "impulso, vuelo, caída", COL.morado],
      ["Caída", "rodillas dobladas", COL.verde],
      ["Voltereta", "barbilla al pecho", COL.marron],
    ], 4, 86, "Resumen de habilidades básicas"),
  },
  video: vgen("ZvB5QiH9Mdc", "habilidades motrices básicas educación física primaria"),
  ejemplos: [
    { enunciado: "Vas a correr 4 minutos sin parar. ¿Cómo debes empezar?",
      pasos: ["Es una carrera de resistencia, no de velocidad.", "Empiezo a ritmo suave para no cansarme pronto.", "Compruebo que puedo hablar mientras corro."],
      resultado: "A ritmo suave y constante, regulando el esfuerzo." },
    { enunciado: "Saltas desde un banco a la colchoneta. ¿Cómo caes?",
      pasos: ["Caigo sobre las puntas de los pies.", "Doblo las rodillas para amortiguar.", "Pongo los brazos delante para equilibrarme."],
      resultado: "Con las rodillas dobladas, como un muelle." },
    { enunciado: "En el circuito tardas 50 segundos la primera semana y 42 la segunda. ¿Cuánto has mejorado?",
      pasos: ["Restamos: 50 − 42.", "50 − 42 = 8."],
      resultado: "Has mejorado 8 segundos." },
  ],
  errores: [
    "Correr con los brazos cruzados delante del cuerpo.",
    "Empezar una carrera larga demasiado rápido.",
    "Caer de un salto con las piernas rígidas.",
    "Hacer la voltereta sin meter la barbilla en el pecho.",
  ],
  ejercicios: [
    { q: "¿Qué son las habilidades motrices básicas?", sol: "Los movimientos fundamentales que usamos en la vida y en los juegos: desplazamientos, saltos, giros y manejo de objetos." },
    { q: "Escribe cuatro formas de desplazarse.", sol: "Por ejemplo: andar, correr, reptar y trepar." },
    { q: "¿Qué diferencia hay entre andar y correr?", sol: "Al correr hay un momento en que ningún pie toca el suelo." },
    { q: "¿Cómo se colocan los brazos al correr?", sol: "Doblados en forma de L, moviéndose hacia delante y hacia atrás sin cruzarse." },
    { q: "¿Qué diferencia hay entre carrera de velocidad y de resistencia?", sol: "La de velocidad es muy rápida y corta; la de resistencia es suave y larga." },
    { q: "Escribe las tres fases del salto.", sol: "Impulso o batida, vuelo y caída." },
    { q: "¿Cómo se cae bien de un salto?", sol: "Sobre las puntas de los pies y doblando las rodillas para amortiguar." },
    { q: "¿Qué es un giro? Pon dos ejemplos.", sol: "Dar vueltas sobre uno mismo. Ejemplos: la peonza y la voltereta." },
    { q: "¿Qué es lo más importante en la voltereta hacia delante?", sol: "Meter la barbilla en el pecho para proteger el cuello." },
    { q: "Escribe dos normas de seguridad en los saltos.", sol: "Comprobar que no hay nadie en la zona de caída y saltar sobre colchonetas cuando la altura es mayor." },
  ],
  quiz: [
    { q: "Moverse de un sitio a otro es un…", o: ["desplazamiento", "giro", "lanzamiento"], a: 0, e: "Un desplazamiento." },
    { q: "Moverse tumbado como una serpiente es…", o: ["reptar", "trepar", "girar"], a: 0, e: "Reptar." },
    { q: "Cada paso largo de la carrera es una…", o: ["zancada", "batida", "voltereta"], a: 0, e: "Una zancada." },
    { q: "Al correr, los brazos van…", o: ["en L, sin cruzar", "estirados arriba", "quietos"], a: 0, e: "En L, sin cruzar." },
    { q: "Correr 5 minutos a ritmo suave es una carrera de…", o: ["resistencia", "velocidad", "relevos"], a: 0, e: "De resistencia." },
    { q: "La primera fase del salto es el…", o: ["impulso", "vuelo", "aterrizaje"], a: 0, e: "El impulso o batida." },
    { q: "Al caer de un salto, las rodillas…", o: ["se doblan", "se quedan rígidas", "se cruzan"], a: 0, e: "Se doblan para amortiguar." },
    { q: "Girar como una peonza es girar sobre el eje…", o: ["vertical", "horizontal", "de la mesa"], a: 0, e: "Vertical." },
    { q: "En la voltereta, la barbilla va…", o: ["al pecho", "hacia arriba", "al suelo"], a: 0, e: "Al pecho." },
    { q: "En los juegos de pillar hay que…", o: ["tocar sin empujar", "empujar fuerte", "salir del campo"], a: 0, e: "Tocar sin empujar." },
  ],
  examen: [
    { q: "Andar como un cangrejo es una…", o: ["cuadrupedia", "carrera", "voltereta"], a: 0, e: "Una cuadrupedia." },
    { q: "Rodar tumbado como una croqueta es un…", o: ["giro", "salto", "lanzamiento"], a: 0, e: "Un giro." },
    { q: "En la carrera, el brazo contrario acompaña a la…", o: ["pierna", "cabeza", "espalda"], a: 0, e: "A la pierna." },
    { q: "Si puedes hablar mientras corres, vas a ritmo…", o: ["adecuado de resistencia", "de velocidad máxima", "demasiado lento siempre"], a: 0, e: "Adecuado para resistencia." },
  ],
  feynman: ["Cómo se corre bien", "Las fases del salto y cómo caer", "Cómo se hace una voltereta segura"],
  mapa: mapa("HABILIDADES", "var(--pri)", [
    ["Desplazarse", "correr · reptar", COL.verde],
    ["Saltar", "impulso · caída", COL.morado],
    ["Girar", "peonza · voltereta", COL.rojo],
    ["Jugar", "pilla-pilla · circuito", COL.azul],
  ], 250),
  tarjetas: [
    ["Habilidades básicas", "Desplazarse, saltar, girar y manejar objetos."],
    ["Cuadrupedia", "Desplazarse con manos y pies."],
    ["Zancada", "Cada paso largo de la carrera."],
    ["Resistencia", "Aguantar un esfuerzo largo."],
    ["Batida", "Impulso para despegar del suelo."],
    ["Amortiguar", "Doblar las rodillas al caer."],
    ["Giro", "Dar vueltas sobre uno mismo."],
    ["Voltereta", "Giro rodando hacia delante o atrás."],
  ],
  familias: ["Jugad en el parque al pilla-pilla o a la rayuela.", "Saltad juntos a la comba y contad cuántos saltos seguidos hacéis.", "Salid a caminar y a correr suave en familia.", "Practicad a caer bien saltando desde un escalón bajo."],
  profesores: PROF("Educación Física: habilidades motrices básicas; desplazamientos variados; técnica de la carrera; carreras de velocidad y resistencia; saltos y sus fases; caídas y amortiguación; giros sobre los tres ejes; voltereta adelante; juegos de persecución y circuitos", ["Juego de los animales con cuadrupedias.", "Circuito de seis estaciones con cronometraje personal.", "Saltos desde banco con caída congelada."]),
  fuentes: [RD, wiki("Habilidades motrices", "Habilidad motriz"), wiki("Carrera", "Carrera (deporte)"), wiki("Salto", "Salto")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Desplazarse en cuadrupedia y reptando", "Trepar y suspenderse con seguridad", "Hacer una voltereta adelante con la técnica correcta", "Reconocer las habilidades básicas en los deportes"],
  lectura: { titulo: "La carrera de relevos", html: `<p>Es el día de la carrera de relevos del colegio. El equipo de Marta tiene cuatro corredores: Marta, Iker, Sofía y Ahmed. Cada uno correrá una parte de la pista y le pasará el testigo, un palito de colores, al siguiente.</p><p>Iker es el más rápido de la clase, así que todos quieren que corra el último. Pero Iker está nervioso: el año pasado se le cayó el testigo y su equipo perdió.</p><p>—No pasa nada —le dice Sofía—. Esta vez lo hemos practicado mucho. Tú solo mira la mano de Ahmed y cierra bien los dedos.</p><p>Suena el silbato. Marta sale disparada y entrega el testigo a Sofía sin problemas. Sofía corre con fuerza y se lo pasa a Ahmed. Ahmed se acerca a Iker y grita: «¡Ya!». Iker empieza a correr, estira la mano hacia atrás sin girarse y… ¡lo atrapa!</p><p>Corre como el viento y cruza la meta. ¡Segundo puesto!</p><p>No han ganado, pero todos se abrazan. Iker sonríe: —Lo importante es que lo hicimos juntos… ¡y que no se me cayó!</p>` },
  tras: {
    "Desplazamientos": [
      ["Cuadrupedias y reptaciones", `<p>No solo nos desplazamos andando o corriendo. También podemos movernos apoyando <mark>manos y pies</mark> en el suelo: son las <b>cuadrupedias</b>. Y arrastrándonos con el cuerpo pegado al suelo: son las <b>reptaciones</b>.</p><p>Cuadrupedias de animales:</p><ul><li><b>El oso</b>: manos y pies en el suelo, con las piernas estiradas y el culete arriba.</li><li><b>El cangrejo</b>: boca arriba, apoyando manos y pies, avanzando hacia atrás o de lado.</li><li><b>El perrito</b>: manos y rodillas en el suelo, como al gatear.</li><li><b>La rana</b>: en cuclillas, se apoyan las manos y se salta con las dos piernas a la vez.</li></ul><p>Reptaciones:</p><ul><li><b>La serpiente</b>: boca abajo, avanzando con los brazos y empujando con las piernas.</li><li><b>El soldado</b>: pasando por debajo de una cuerda o un túnel sin tocarlo.</li></ul><p>Estos movimientos fortalecen los <b>brazos</b>, los <b>hombros</b> y el <b>abdomen</b>, y mejoran la coordinación. ¡Los bebés gatean antes de andar por algo!</p><p><b>Actividad</b>: haz una carrera de animales: cada tramo con un desplazamiento diferente.</p>`,
        L6.filas("Animales", [["el oso", "piernas estiradas", cNA], ["el cangrejo", "boca arriba", cRO], ["la rana", "salto con dos pies", cVE], ["la serpiente", "reptar", cAZ]])],
    ],
    "Caer bien": [
      ["Trepar y suspenderse", `<p><mark>Trepar</mark> es subir agarrándose con las manos y apoyando los pies. <mark>Suspenderse</mark> es quedarse colgado de las manos. Son habilidades que usamos en el parque, en el gimnasio y en la naturaleza.</p><p>Dónde trepamos en el colegio:</p><ul><li>En las <b>espalderas</b>, la escalera de madera pegada a la pared del gimnasio.</li><li>En la <b>cuerda</b> o en el <b>rocódromo</b>, si lo hay.</li><li>En las estructuras del patio y del parque.</li></ul><p>Cómo agarrarse bien:</p><ul><li>Cierra la mano rodeando la barra con todos los dedos, con el <b>pulgar por debajo</b>.</li><li>Mantén siempre <b>tres apoyos</b>: dos manos y un pie, o dos pies y una mano. Mueve solo uno cada vez.</li><li>Mira dónde vas a poner la mano o el pie antes de moverlo.</li></ul><p>Seguridad:</p><ul><li>Siempre con <b>colchonetas</b> debajo.</li><li>Sube solo hasta donde el profesor diga.</li><li>Nunca empujes ni tires de un compañero que está trepando.</li><li>Para bajar, hazlo despacio, igual que subiste. ¡No saltes desde arriba!</li></ul><p><b>Actividad</b>: cuelga de una barra y cuenta cuántos segundos aguantas. Repite dentro de un mes y compara.</p>`,
        H6.flujo("Trepar", ["agarre|con pulgar", "tres|apoyos", "mirar|antes", "bajar|despacio"], cAZ)],
    ],
    "Los giros": [
      ["La voltereta adelante", `<p>La <mark>voltereta</mark> es un giro del cuerpo hacia delante, rodando por la espalda. Es un movimiento de la gimnasia que hay que aprender con buena técnica para hacerlo sin hacerse daño.</p><p>Paso a paso:</p><ul><li><b>1.</b> Ponte en <b>cuclillas</b> al principio de la colchoneta.</li><li><b>2.</b> Apoya las <b>manos</b> en la colchoneta, separadas a la anchura de los hombros.</li><li><b>3.</b> Mete la <b>barbilla al pecho</b>, como si quisieras mirarte la tripa. ¡Este es el paso más importante!</li><li><b>4.</b> Empuja con las piernas y rueda apoyando la <b>nuca</b> y la espalda, redonda como una pelota. Nunca te apoyes en la parte de arriba de la cabeza.</li><li><b>5.</b> Abraza las rodillas y termina en cuclillas o de pie.</li></ul><p>Seguridad:</p><ul><li>Solo sobre <b>colchoneta</b> y con el profesor delante.</li><li>Uno detrás de otro, esperando a que el compañero termine.</li><li>Si te da miedo, empieza rodando por un plano inclinado, como una colchoneta sobre un trampolín.</li></ul><p><b>Actividad</b>: practica la «croqueta» (rodar de lado) y la «mecedora» (rodar hacia atrás y delante en bola) antes de la voltereta.</p>`,
        L6.filas("Voltereta", [["1", "cuclillas, manos", cAZ], ["2", "barbilla al pecho", cRO], ["3", "rodar por la espalda", cVE], ["4", "terminar en cuclillas", cNA]])],
    ],
  },
  final: [
    ["Las habilidades en los deportes", `<p>Las habilidades básicas que aprendemos ahora son la base de <mark>todos los deportes</mark>. Fíjate:</p><ul><li>En el <b>fútbol</b>: correr, cambiar de dirección, saltar para cabecear, girar para regatear.</li><li>En el <b>baloncesto</b>: correr, frenar, saltar para encestar, girar sobre un pie (el «pívot»).</li><li>En la <b>gimnasia</b>: saltos, giros, volteretas, equilibrios.</li><li>En el <b>balonmano</b>: correr, saltar y lanzar.</li><li>En la <b>natación</b>: desplazarse en el agua y girar en la pared.</li></ul><p>El <b>atletismo</b> es el deporte de las habilidades básicas en estado puro. Tiene tres tipos de pruebas:</p><ul><li><b>Carreras</b>: de velocidad, de fondo, de vallas y de relevos.</li><li><b>Saltos</b>: de longitud, de altura, triple salto y salto con pértiga.</li><li><b>Lanzamientos</b>: de peso, de disco, de jabalina y de martillo.</li></ul><p>Por eso es tan importante practicar ahora estas habilidades de muchas formas: cuantas más experiencias tengas, más fácil te será aprender cualquier deporte después.</p><p><b>Actividad</b>: elige tu deporte favorito y escribe qué habilidades básicas se usan en él.</p>`,
      H6.rueda("Atletismo", "ATLETISMO", [["carreras", cRO], ["saltos", cAZ], ["lanzamientos", cVE], ["relevos", cNA]])],
  ],
  ejemplos: [
    ["¿Cuál es el paso más importante de la voltereta?", ["Hay que proteger el cuello.", "La cabeza no debe apoyarse arriba."], "Meter la barbilla al pecho."],
    ["¿Qué es la regla de los tres apoyos al trepar?", ["Nunca soltamos dos apoyos a la vez.", "Movemos solo una mano o un pie."], "Mantener siempre tres apoyos y mover solo uno cada vez."],
  ],
  errores: ["Apoyar la parte de arriba de la cabeza en la voltereta en lugar de la nuca.", "Saltar desde lo alto de las espalderas en lugar de bajar despacio."],
  ejercicios: [
    ["b", "¿Qué es una cuadrupedia?", "Desplazarse apoyando manos y pies."],
    ["b", "¿Cómo se desplaza el cangrejo?", "Boca arriba, apoyando manos y pies."],
    ["b", "¿Qué son las espalderas?", "La escalera de madera pegada a la pared del gimnasio."],
    ["b", "¿Dónde se hace siempre la voltereta?", "Sobre una colchoneta."],
    ["b", "En la lectura, ¿qué se pasan los corredores?", "El testigo."],
    ["m", "¿Qué partes del cuerpo fortalecen las cuadrupedias?", "Los brazos, los hombros y el abdomen."],
    ["m", "¿Cómo se agarra bien una barra?", "Rodeándola con todos los dedos y el pulgar por debajo."],
    ["m", "Ordena: rodar, barbilla al pecho, cuclillas, manos en la colchoneta.", "Cuclillas, manos en la colchoneta, barbilla al pecho, rodar."],
    ["m", "Nombra los tres tipos de pruebas del atletismo.", "Carreras, saltos y lanzamientos."],
    ["m", "¿Qué habilidades básicas se usan en el baloncesto?", "Correr, frenar, saltar y girar."],
    ["a", "¿Qué consejo da Sofía a Iker y por qué funciona?", "Mirar la mano de Ahmed y cerrar bien los dedos; así no se le cae el testigo."],
    ["a", "Diseña una carrera de animales con cuatro tramos.", "Respuesta abierta."],
    ["a", "Explica tres normas de seguridad para trepar.", "Colchonetas, subir solo hasta donde diga el profesor, no empujar, bajar despacio."],
    ["a", "Explica por qué es útil practicar muchas habilidades básicas distintas.", "Porque son la base de todos los deportes y así es más fácil aprenderlos."],
  ],
  quiz: [
    ["En la voltereta hay que apoyar…", ["la nuca y la espalda", "la parte de arriba de la cabeza", "la frente"], "Voltereta."],
    ["Reptar es desplazarse…", ["con el cuerpo pegado al suelo", "a la pata coja", "de puntillas"], "Desplazamientos."],
    ["Al trepar mantenemos siempre…", ["tres apoyos", "un apoyo", "los ojos cerrados"], "Trepar."],
    ["El salto con pértiga es una prueba de…", ["atletismo", "natación", "fútbol"], "Atletismo."],
    ["La «rana» se hace…", ["en cuclillas, saltando con los dos pies", "boca arriba", "reptando"], "Animales."],
  ],
  examen: [
    ["En la lectura, ¿en qué puesto queda el equipo de Marta?", ["segundo", "primero", "último"], "Lectura."],
    ["¿Qué ejercicio ayuda a preparar la voltereta?", ["la mecedora en bola", "el salto de longitud", "el lanzamiento de peso"], "Voltereta."],
  ],
  tarjetas: [
    ["Cuadrupedias", "Oso, cangrejo, perrito, rana. Reptar: serpiente, soldado."],
    ["Trepar", "Agarre con pulgar, tres apoyos, colchoneta, bajar despacio."],
    ["Voltereta", "Cuclillas, manos, barbilla al pecho, rodar por la espalda."],
    ["Atletismo", "Carreras, saltos y lanzamientos."],
  ],
  glosario: [
    ["Cuadrupedia", "Desplazamiento apoyando manos y pies."],
    ["Reptar", "Desplazarse arrastrándose por el suelo."],
    ["Trepar", "Subir agarrándose con manos y pies."],
    ["Suspenderse", "Quedarse colgado de las manos."],
    ["Espaldera", "Escalera de madera fija a la pared del gimnasio."],
    ["Colchoneta", "Superficie blanda para caer sin hacerse daño."],
    ["Cuclillas", "Posición agachada con las rodillas dobladas."],
    ["Voltereta", "Giro del cuerpo rodando por la espalda."],
    ["Nuca", "Parte de atrás del cuello."],
    ["Testigo", "Palito que se pasan los corredores en los relevos."],
    ["Atletismo", "Deporte de carreras, saltos y lanzamientos."],
    ["Pértiga", "Vara larga que se usa para saltar muy alto."],
  ],
  situacion: {
    titulo: "Las miniolimpiadas de la clase",
    reto: "La clase organiza unas miniolimpiadas con pruebas de carreras, saltos, cuadrupedias y volteretas, en equipos mixtos.",
    pasos: ["Formar equipos mixtos y elegir un nombre y un color.", "Preparar cinco estaciones: relevos, carrera de animales, saltos, espalderas y volteretas.", "Pasar por todas las estaciones cuidando la seguridad.", "Hacer una entrega de diplomas al esfuerzo, al juego limpio y a la mejora."],
    producto: "Unas miniolimpiadas de clase con diplomas.",
    evaluacion: ["Realiza desplazamientos variados con control.", "Trepa y se suspende respetando las normas de seguridad.", "Hace la voltereta con la barbilla al pecho.", "Coopera con su equipo y respeta a los demás."],
  },
});
