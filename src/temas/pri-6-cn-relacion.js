// Ciencias de la Naturaleza 6º de Primaria: la función de relación (sistema nervioso y sentidos). Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF } = require("./_pri6b");

// Neurona dibujada en horizontal desde (x, y).
const neurona = (x, y, c = "#6d28d9") => `<g transform="translate(${x} ${y})"><circle r="14" fill="#ddd6fe" stroke="${c}" stroke-width="2"/><circle r="5" fill="${c}"/>${[110, 150, 200, 240, 290].map((a) => `<path d="M${(14 * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(14 * Math.sin(a * Math.PI / 180)).toFixed(1)} l${(18 * Math.cos(a * Math.PI / 180)).toFixed(1)} ${(18 * Math.sin(a * Math.PI / 180)).toFixed(1)}" stroke="${c}" stroke-width="2"/>`).join("")}<path d="M14 0 H120" stroke="${c}" stroke-width="3"/><path d="M120 0 l12 -10 M120 0 l14 0 M120 0 l12 10" stroke="${c}" stroke-width="2"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La función de relación: sistema nervioso y sentidos",
  minutos: 50,
  objetivos: ["Explicar en qué consiste la función de relación", "Conocer los cinco sentidos y sus órganos", "Describir las partes del sistema nervioso y las neuronas", "Distinguir actos voluntarios y actos reflejos", "Relacionar el aparato locomotor con la respuesta"],
  claves: ["estímulo", "receptor", "respuesta", "neurona", "encéfalo", "cerebro", "médula espinal", "nervios", "acto reflejo", "retina", "efector"],
  pregunta: {
    texto: "Tocas sin querer una sartén caliente y retiras la mano antes de sentir el dolor. ¿Cómo puede ser?",
    respuesta: "Es un <mark>acto reflejo</mark>. El mensaje de «¡quema!» viaja por un nervio hasta la <b>médula espinal</b>, y la médula ordena directamente a los músculos del brazo que se aparten, sin esperar al cerebro. Así se gana tiempo. Un instante después el mensaje llega al cerebro y entonces <b>notas</b> el dolor.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la función de relación?</h3><p>La <mark>función de relación</mark> permite a los seres vivos <b>darse cuenta</b> de lo que pasa a su alrededor y dentro de su cuerpo, y <b>reaccionar</b>. Gracias a ella esquivas un balón, te pones una chaqueta si tienes frío o bebes cuando tienes sed.</p><p>Siempre sigue tres pasos:</p><p>1. Un <b>estímulo</b>: cualquier cambio que se puede detectar (una luz, un sonido, el frío, un olor).</p><p>2. Los <b>receptores</b> lo captan y el <b>sistema nervioso</b> lo interpreta y decide qué hacer.</p><p>3. Los <b>efectores</b> realizan la <mark>respuesta</mark>. Son los músculos (que producen movimiento) y las glándulas (que fabrican sustancias, como el sudor o las lágrimas).</p><p>Por ejemplo: suena el timbre (estímulo), el oído lo capta (receptor), el cerebro piensa «¡recreo!» (coordinación) y las piernas te llevan al patio (respuesta).</p>`,
      svg: svg("Los tres pasos de la función de relación: estímulo, receptores y sistema nervioso, respuesta", `${tit("Estímulo → respuesta")}${columna([["1. Estímulo: suena el timbre", COL.sol], ["2. Receptor: el oído lo capta", COL.agua], ["3. Sistema nervioso: «¡recreo!»", COL.morado], ["4. Efector: las piernas te llevan", COL.verde]], 130, 220, 36, 26, 10)}`),
    },
    {
      html: `<h3>Los órganos de los sentidos</h3><p>Los <mark>receptores</mark> de los estímulos externos están en los <b>órganos de los sentidos</b>. Tenemos cinco:</p>${tabla(["Sentido", "Órgano", "Qué capta"], [["Vista", "ojos", "la luz, los colores y las formas"], ["Oído", "oídos", "los sonidos y el equilibrio"], ["Olfato", "nariz (pituitaria)", "los olores"], ["Gusto", "lengua (papilas gustativas)", "los sabores"], ["Tacto", "piel", "la presión, el calor, el frío y el dolor"]])}<p>Los sentidos trabajan juntos. Cuando estás resfriado y tienes la nariz tapada, la comida «no sabe a nada», porque gran parte de lo que llamamos sabor es en realidad <b>olor</b>.</p><p>Además de estos cinco, el cuerpo tiene receptores internos que nos avisan del hambre, la sed, el cansancio o la posición de brazos y piernas.</p>`,
      svg: svg("Los cinco sentidos con su órgano: ojo, oído, nariz, lengua y piel", `${tit("Cinco sentidos")}${fichas([["Vista", "ojos: la luz", COL.azul], ["Oído", "oídos: sonidos", COL.morado], ["Olfato", "nariz: olores", COL.verde], ["Gusto", "lengua: sabores", COL.rojo], ["Tacto", "piel: calor, presión…", COL.naranja], ["¡Juntos!", "olor + gusto = sabor", COL.gris]], 2, 34)}`),
    },
    {
      html: `<h3>La vista y el oído</h3><p>El <mark>ojo</mark> funciona como una cámara. La luz entra por la <b>córnea</b>, una capa transparente, y pasa por la <b>pupila</b>, el agujero negro del centro. El <b>iris</b>, la parte de color, hace que la pupila se abra con poca luz y se cierre con mucha. Después, el <b>cristalino</b>, una lente, enfoca la imagen sobre la <mark>retina</mark>, al fondo del ojo. La retina tiene células sensibles a la luz que mandan la información al cerebro por el <b>nervio óptico</b>. ¡La imagen llega al revés y el cerebro la pone derecha!</p><p>El <mark>oído</mark> tiene tres partes. El <b>oído externo</b> (oreja y conducto auditivo) recoge el sonido. En el <b>oído medio</b>, el <b>tímpano</b> vibra y mueve tres huesecillos diminutos: martillo, yunque y estribo. En el <b>oído interno</b>, el <b>caracol</b> convierte las vibraciones en mensajes nerviosos, y otra parte nos ayuda a mantener el <b>equilibrio</b>.</p>`,
      svg: svg("Ojo en corte: córnea, iris, pupila, cristalino, retina y nervio óptico", `${tit("El ojo por dentro")}<circle cx="120" cy="96" r="54" fill="#fff" stroke="var(--ink)" stroke-width="2"/><path d="M120 42 a54 54 0 0 1 0 108" fill="none" stroke="var(--red)" stroke-width="5"/><path d="M70 74 q-12 22 0 44" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><path d="M76 66 V84 M76 108 V126" stroke="#7c4a1e" stroke-width="6"/><ellipse cx="88" cy="96" rx="8" ry="16" fill="#e0f2fe" stroke="var(--pen)" stroke-width="2"/><path d="M174 96 H214" stroke="#d97706" stroke-width="6"/><path d="M40 82 L160 110 M40 110 L160 82" stroke="var(--sun)" stroke-width="1.5" stroke-dasharray="3 3"/>
        ${et(38, 64, "córnea", 60, { size: 10, color: COL.agua })}${et(48, 146, "iris", 50, { size: 10, color: COL.marron })}<path d="M90 112 L104 156" stroke="var(--muted)"/>${et(112, 168, "cristalino", 70, { size: 10, color: COL.azul })}${et(184, 60, "retina", 60, { size: 10, color: COL.rojo })}${et(220, 116, "nervio óptico", 72, { size: 10, color: COL.naranja })}`),
      video: vid("uvCZMWt1m0U"),
    },
    {
      html: `<h3>El olfato, el gusto y el tacto</h3><p>En la parte alta de las fosas nasales está la <b>pituitaria amarilla</b>, con células que detectan las sustancias del aire. Podemos distinguir miles de <mark>olores</mark>, y el olfato nos avisa de peligros como el humo o la comida en mal estado.</p><p>La <mark>lengua</mark> está cubierta de <b>papilas gustativas</b>, unos bultitos que captan cinco sabores básicos: <b>dulce, salado, ácido, amargo</b> y <b>umami</b> (el sabor «sabroso» del caldo o del queso). Todos se pueden notar en cualquier zona de la lengua.</p><p>La <mark>piel</mark> es el órgano más grande del cuerpo. Tiene receptores repartidos de forma desigual: hay muchísimos en las yemas de los dedos y en los labios, y pocos en la espalda. Por eso las personas ciegas pueden leer en <b>braille</b> con los dedos. La piel detecta la presión, la temperatura y el dolor, que es una señal de alarma muy útil.</p>`,
      svg: svg("Lengua con los cinco sabores básicos y una mano con muchos receptores en las yemas de los dedos", `${tit("Gusto y tacto")}<path d="M30 60 q40 -14 80 0 q8 50 -40 92 q-48 -42 -40 -92z" fill="#f9a8b8" stroke="#be185d" stroke-width="2"/>${[[50, 76], [70, 70], [90, 76], [60, 96], [80, 96], [70, 118]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#be185d"/>`).join("")}${tx(70, 168, "5 sabores básicos", 120, { weight: 700 })}
        <path d="M160 160 V96 q0 -8 8 -8 q8 0 8 8 V70 q0 -8 8 -8 q8 0 8 8 V64 q0 -8 8 -8 q8 0 8 8 V76 q0 -8 8 -8 q8 0 8 8 V140 q0 20 -20 20z" fill="#f3c9a1" stroke="var(--ink)" stroke-width="1.5"/>${[[168, 94], [184, 68], [200, 62], [216, 74]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--red)"/><circle cx="${x - 3}" cy="${y + 5}" r="2" fill="var(--red)"/><circle cx="${x + 3}" cy="${y + 5}" r="2" fill="var(--red)"/>`).join("")}${tx(196, 172, "yemas: muchos receptores", 120)}`),
    },
    {
      html: `<h3>Las neuronas</h3><p>El sistema nervioso está formado por unas células especiales: las <mark>neuronas</mark>. Su trabajo es <b>transmitir mensajes</b> en forma de pequeños impulsos eléctricos, a toda velocidad: algunos viajan a más de 100 metros por segundo.</p><p>Una neurona tiene tres partes:</p><p>• El <b>cuerpo celular</b>, con el núcleo.<br>• Las <b>dendritas</b>, prolongaciones cortas y ramificadas que <b>reciben</b> los mensajes.<br>• El <b>axón</b>, una prolongación larga que <b>envía</b> el mensaje a la siguiente neurona o a un músculo. Algunos axones miden más de un metro.</p><p>Las neuronas no se tocan: entre una y otra queda un espacio diminuto, la <b>sinapsis</b>, por donde el mensaje salta con ayuda de unas sustancias químicas. El científico español <b>Santiago Ramón y Cajal</b> fue quien descubrió que las neuronas son células independientes. Por ello recibió el Premio Nobel en 1906.</p>`,
      svg: svg("Neurona con dendritas, cuerpo celular y axón, y el sentido del mensaje", `${tit("Una neurona")}${neurona(70, 96)}${et(46, 60, "dendritas", 70, { size: 11, color: COL.morado })}${et(70, 130, "cuerpo celular", 90, { size: 11, color: COL.morado })}${et(150, 84, "axón", 50, { size: 11, color: COL.morado })}${fl(60, 150, 200, 150, "var(--sun)", 3)}${tx(130, 170, "el mensaje viaja en este sentido", 200)}`),
    },
    {
      html: `<h3>El sistema nervioso central</h3><p>El sistema nervioso tiene dos partes. La primera es el <mark>sistema nervioso central</mark>, el «centro de control», que recibe la información, la interpreta y da las órdenes. Está muy protegido por huesos.</p><p>El <b>encéfalo</b> está dentro del cráneo y tiene tres órganos:</p><p>• El <mark>cerebro</mark>, el más grande. Controla los movimientos voluntarios, interpreta lo que captan los sentidos y es donde pensamos, recordamos, aprendemos y sentimos emociones. Está dividido en dos mitades o hemisferios.<br>• El <b>cerebelo</b>, detrás y debajo del cerebro. Coordina los movimientos y el equilibrio: gracias a él puedes ir en bici sin pensar en cada pedalada.<br>• El <b>tronco del encéfalo</b>, que lo une con la médula. Controla funciones automáticas como el latido del corazón y la respiración.</p><p>La <mark>médula espinal</mark> es un cordón largo que baja por dentro de la columna vertebral. Lleva mensajes entre el encéfalo y el cuerpo y controla los actos reflejos.</p>`,
      svg: svg("Encéfalo y médula: cerebro, cerebelo, tronco del encéfalo y médula espinal dentro de la columna", `${tit("El centro de control")}<path d="M50 96 q-6 -50 50 -58 q60 -6 70 40 q4 24 -20 30 h-70 q-26 0 -30 -12z" fill="#fbcfe8" stroke="#be185d" stroke-width="2"/><path d="M70 60 q10 10 0 20 M96 50 q8 14 -4 24 M124 52 q-4 16 10 22 M146 66 q-10 10 4 18" stroke="#be185d" stroke-width="1.5" fill="none"/><ellipse cx="146" cy="116" rx="22" ry="12" fill="#f9a8d4" stroke="#9d174d" stroke-width="1.5"/><path d="M122 108 q4 14 2 30" stroke="#9d174d" stroke-width="8" fill="none"/><path d="M124 138 V174" stroke="var(--sun)" stroke-width="6"/>
        ${et(210, 52, "cerebro", 80, { size: 11, color: "#be185d" })}<path d="M176 56 L156 66" stroke="var(--muted)"/>${et(212, 118, "cerebelo", 80, { size: 11, color: "#9d174d" })}${et(74, 140, "tronco", 70, { size: 11, color: "#9d174d" })}<path d="M94 138 L118 126" stroke="var(--muted)"/>${et(196, 160, "médula espinal", 100, { size: 11, color: COL.sol })}<path d="M150 158 L128 156" stroke="var(--muted)"/>`),
      video: vid("X4rsSlMcjXY"),
    },
    {
      html: `<h3>El sistema nervioso periférico</h3><p>La segunda parte es el <mark>sistema nervioso periférico</mark>: los <b>nervios</b>, que son como cables formados por muchos axones juntos. Recorren todo el cuerpo y conectan el sistema nervioso central con los órganos de los sentidos, los músculos y las glándulas.</p><p>Hay dos tipos de nervios según el sentido en que viaja el mensaje:</p><p>• Los <b>nervios sensitivos</b> llevan la información <b>desde los receptores</b> hasta el sistema nervioso central. Por ejemplo, el nervio óptico lleva lo que ve el ojo hasta el cerebro.<br>• Los <b>nervios motores</b> llevan las órdenes <b>desde el sistema nervioso central</b> hasta los músculos y las glándulas.</p><p>Además, una parte del sistema nervioso funciona de forma <b>automática</b>, sin que lo decidamos: controla la digestión, el ritmo del corazón, el sudor o el tamaño de la pupila.</p>`,
      svg: svg("Nervios sensitivos llevan información al sistema nervioso central y nervios motores llevan órdenes a los músculos", `${tit("Dos tipos de nervios")}${cj(80, 76, 100, 36, "SN central", COL.morado)}${cj(6, 76, 58, 36, "receptor", COL.agua)}${cj(196, 76, 58, 36, "músculo", COL.verde)}${fl(64, 94, 78, 94, COL.agua, 3)}${fl(182, 94, 194, 94, COL.verde, 3)}${et(40, 136, "nervio sensitivo", 90, { size: 11, color: COL.agua })}${tx(40, 150, "trae información", 90)}${et(220, 136, "nervio motor", 80, { size: 11, color: COL.verde })}${tx(220, 150, "lleva órdenes", 80)}`),
    },
    {
      html: `<h3>Actos voluntarios y actos reflejos</h3><p>Nuestras respuestas pueden ser de dos tipos:</p><p>Los <mark>actos voluntarios</mark> son los que <b>decidimos</b> hacer: escribir, chutar un balón o levantar la mano para preguntar. Los dirige el <b>cerebro</b>. Son más lentos porque hay que pensarlos, pero los podemos controlar y aprender.</p><p>Los <mark>actos reflejos</mark> son respuestas <b>automáticas, rápidas e involuntarias</b>. Muchas las controla la <b>médula espinal</b> sin pasar por el cerebro. Sirven para protegernos: retirar la mano de algo que quema, cerrar los ojos si algo se acerca, toser, estornudar o que la pierna salte cuando el médico te da un golpecito bajo la rodilla.</p><p>Algunos movimientos empiezan siendo voluntarios y, a fuerza de practicar, se vuelven casi automáticos, como montar en bici o escribir con el teclado. El cerebelo se encarga de que salgan solos.</p>`,
      svg: svg("Comparación de acto voluntario dirigido por el cerebro y acto reflejo dirigido por la médula", `${tit("Voluntario o reflejo")}${cj(10, 36, 115, 30, "VOLUNTARIO", COL.azul)}${cj(135, 36, 115, 30, "REFLEJO", COL.rojo)}${filas([["manda", "cerebro", COL.azul], ["rapidez", "más lento", COL.azul], ["¿lo decido?", "sí", COL.azul], ["ejemplo", "escribir", COL.azul]], 90, 22, { x: 14, wa: 50, wb: 46 })}${filas([["manda", "médula", COL.rojo], ["rapidez", "muy rápido", COL.rojo], ["¿lo decido?", "no", COL.rojo], ["ejemplo", "toser", COL.rojo]], 90, 22, { x: 138, wa: 50, wb: 46 })}`),
    },
    {
      html: `<h3>El aparato locomotor responde</h3><p>Muchas respuestas son <b>movimientos</b>, y los hace el <mark>aparato locomotor</mark>, formado por los huesos y los músculos.</p><p>Los <b>huesos</b> forman el <b>esqueleto</b> (más de 200 huesos en un adulto). Sostienen el cuerpo, protegen órganos delicados (el cráneo protege el encéfalo y las costillas, los pulmones y el corazón) y sirven de palanca para el movimiento. Se unen en las <b>articulaciones</b>, como la rodilla o el codo.</p><p>Los <b>músculos</b> (unos 650) están unidos a los huesos por los <b>tendones</b>. Cuando reciben una orden por un nervio motor, se <b>contraen</b> (se acortan) y tiran del hueso. Como solo pueden tirar, no empujar, suelen trabajar por <b>parejas</b>: para doblar el brazo se contrae el bíceps y se relaja el tríceps; para estirarlo, al revés.</p><p>Cuidar postura, hacer ejercicio y tomar calcio mantiene fuerte este aparato.</p>`,
      svg: svg("Brazo doblado: el bíceps se contrae y el tríceps se relaja", `${tit("Músculos por parejas")}<path d="M60 60 L120 120 L190 70" stroke="#e5e7eb" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M60 60 L120 120 L190 70" stroke="var(--muted)" stroke-width="2" fill="none"/><path d="M72 58 q30 10 44 52" stroke="var(--red)" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M60 74 q24 32 50 54" stroke="#fca5a5" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="120" cy="120" r="7" fill="var(--sun)"/><path d="M104 88 L168 148" stroke="var(--muted)"/>${et(196, 160, "bíceps: se contrae", 110, { size: 11, color: COL.rojo })}${et(56, 160, "tríceps: se relaja", 100, { size: 11, color: "#e07a7a" })}${et(132, 136, "codo", 40, { size: 10, color: COL.sol, anchor: "start" })}`),
      video: vid("5SytABu6lKY"),
    },
  ],
  figura: {
    titulo: "La relación en ocho ideas",
    svg: rejilla([
      ["Estímulo", "cambio que se detecta", COL.sol],
      ["Receptores", "órganos de los sentidos", COL.agua],
      ["Neurona", "dendritas, cuerpo, axón", COL.morado],
      ["Cerebro", "piensa y decide", "#be185d"],
      ["Cerebelo", "coordina y equilibra", "#9d174d"],
      ["Médula", "reflejos y mensajes", COL.naranja],
      ["Nervios", "sensitivos y motores", COL.azul],
      ["Efectores", "músculos y glándulas", COL.verde],
    ], 4, 86, "Resumen de la función de relación"),
  },
  video: vgen("lXoLoeSwivI", "sistema nervioso para niños"),
  ejemplos: [
    { enunciado: "Huele a bizcocho recién hecho y vas a la cocina. Identifica estímulo, receptor, coordinación y respuesta.",
      pasos: ["Estímulo: el olor del bizcocho.", "Receptor: la pituitaria de la nariz.", "Coordinación: el cerebro reconoce el olor y decide ir.", "Respuesta: los músculos de las piernas te llevan a la cocina (y la boca se te hace agua: glándulas salivales)."],
      resultado: "olor → nariz → cerebro → músculos y glándulas." },
    { enunciado: "¿Es voluntario o reflejo? Parpadear cuando una mosca se acerca al ojo; levantar la mano en clase.",
      pasos: ["Parpadear ante la mosca es automático, rápido y no lo decides: reflejo.", "Levantar la mano lo decides tú y lo dirige el cerebro: voluntario."],
      resultado: "El parpadeo es reflejo; levantar la mano es voluntario." },
    { enunciado: "Una persona se golpea la parte de atrás de la cabeza y después pierde el equilibrio al andar. ¿Qué órgano puede estar afectado?",
      pasos: ["El equilibrio y la coordinación de los movimientos dependen del cerebelo.", "El cerebelo está detrás y debajo del cerebro, en la nuca."],
      resultado: "Probablemente el cerebelo." },
  ],
  errores: [
    "Decir que el cerebro y el encéfalo son lo mismo: el cerebro es una parte del encéfalo.",
    "Pensar que la médula espinal es la columna: la médula va por dentro de la columna.",
    "Creer que la lengua tiene una zona para cada sabor: todos se captan en cualquier zona.",
    "Confundir nervios sensitivos y motores: los sensitivos traen información y los motores llevan órdenes.",
    "Pensar que los músculos empujan: solo tiran, por eso trabajan por parejas.",
  ],
  ejercicios: [
    { q: "Define estímulo y pon tres ejemplos.", sol: "Un cambio que podemos detectar: una luz, un ruido, el frío (también un olor o un pinchazo)." },
    { q: "Completa: la vista está en los ___, el olfato en la ___ y el tacto en la ___.", sol: "Ojos, nariz (pituitaria), piel." },
    { q: "¿Qué hace el iris? ¿Y la retina?", sol: "El iris regula el tamaño de la pupila según la luz; la retina capta la imagen y la envía al cerebro." },
    { q: "Nombra las tres partes del oído y una estructura de cada una.", sol: "Externo (oreja), medio (tímpano o huesecillos) e interno (caracol)." },
    { q: "Escribe los cinco sabores básicos.", sol: "Dulce, salado, ácido, amargo y umami." },
    { q: "Dibuja una neurona y señala dendritas, cuerpo y axón.", sol: "Cuerpo con núcleo; dendritas cortas y ramificadas; axón largo con ramitas al final." },
    { q: "¿Qué órganos forman el encéfalo y qué hace cada uno?", sol: "Cerebro (pensar, movimientos voluntarios), cerebelo (coordinación y equilibrio) y tronco del encéfalo (latido, respiración)." },
    { q: "¿Qué diferencia hay entre el sistema nervioso central y el periférico?", sol: "El central (encéfalo y médula) interpreta y ordena; el periférico (nervios) lleva los mensajes." },
    { q: "Pon dos ejemplos de actos reflejos y dos de voluntarios.", sol: "Reflejos: estornudar, retirar la mano del fuego. Voluntarios: escribir, saltar a la comba." },
    { q: "Explica por qué los músculos trabajan por parejas.", sol: "Porque solo pueden tirar al contraerse; uno dobla la articulación y el otro la estira." },
  ],
  quiz: [
    { q: "Un cambio que el cuerpo detecta se llama…", o: ["respuesta", "estímulo", "nervio"], a: 1, e: "Estímulo." },
    { q: "La parte del ojo donde se forma la imagen es…", o: ["la retina", "el iris", "la córnea"], a: 0, e: "La retina." },
    { q: "El tímpano está en el oído…", o: ["externo", "medio", "interno"], a: 1, e: "Separa el externo del medio y vibra." },
    { q: "El equilibrio lo controlan el oído interno y…", o: ["el cerebelo", "el estómago", "la lengua"], a: 0, e: "El cerebelo." },
    { q: "La prolongación larga de la neurona es…", o: ["la dendrita", "el axón", "el núcleo"], a: 1, e: "El axón." },
    { q: "¿Quién descubrió que las neuronas son células independientes?", o: ["Ramón y Cajal", "Newton", "Colón"], a: 0, e: "Santiago Ramón y Cajal, Nobel en 1906." },
    { q: "La médula espinal está dentro de…", o: ["el cráneo", "la columna vertebral", "el corazón"], a: 1, e: "Dentro de la columna." },
    { q: "Los nervios que llevan órdenes a los músculos son…", o: ["sensitivos", "motores", "ópticos"], a: 1, e: "Motores." },
    { q: "Estornudar es un acto…", o: ["voluntario", "reflejo", "aprendido"], a: 1, e: "Reflejo." },
    { q: "Para doblar el brazo se contrae…", o: ["el tríceps", "el bíceps", "el tendón"], a: 1, e: "El bíceps." },
  ],
  examen: [
    { q: "Las papilas gustativas están en…", o: ["la lengua", "la nariz", "la piel"], a: 0, e: "La lengua." },
    { q: "Pensar y recordar lo hace…", o: ["el cerebro", "el cerebelo", "la médula"], a: 0, e: "El cerebro." },
    { q: "Los músculos se unen a los huesos por…", o: ["tendones", "nervios", "venas"], a: 0, e: "Tendones." },
    { q: "Los efectores son…", o: ["músculos y glándulas", "ojos y oídos", "neuronas"], a: 0, e: "Músculos y glándulas." },
  ],
  feynman: ["Qué pasos sigue la función de relación, con un ejemplo", "Qué partes tiene el sistema nervioso y qué hace cada una", "Por qué un acto reflejo es más rápido que uno voluntario"],
  mapa: mapa("RELACIÓN", "var(--pri)", [
    ["Receptores", "vista · oído · olfato · gusto · tacto", COL.agua],
    ["SN central", "encéfalo · médula", COL.morado],
    ["SN periférico", "nervios sensitivos y motores", COL.azul],
    ["Efectores", "músculos · glándulas", COL.verde],
  ], 260),
  tarjetas: [
    ["Estímulo", "Cambio del entorno o del cuerpo que podemos detectar."],
    ["Retina", "Capa del fondo del ojo que capta la luz."],
    ["Papilas gustativas", "Bultitos de la lengua que captan los sabores."],
    ["Neurona", "Célula que transmite mensajes: dendritas, cuerpo y axón."],
    ["Cerebelo", "Coordina los movimientos y el equilibrio."],
    ["Médula espinal", "Cordón dentro de la columna; controla los reflejos."],
    ["Acto reflejo", "Respuesta rápida, automática e involuntaria."],
    ["Tendón", "Une el músculo al hueso."],
  ],
  familias: ["Jugad a adivinar alimentos con los ojos tapados y la nariz pinzada, y luego sin pinzar.", "Medid el tiempo de reacción: dejad caer una regla y que la atrape entre los dedos.", "Buscad juntos un texto en braille (en ascensores o envases de medicinas) y tocadlo.", "Notad el bíceps con la mano mientras dobláis y estiráis el brazo."],
  profesores: PROF("Ciencias de la Naturaleza: la función de relación; órganos de los sentidos; sistema nervioso central y periférico; neurona; actos voluntarios y reflejos; aparato locomotor como efector", ["Prueba de la regla para medir tiempo de reacción y representar los resultados de la clase.", "Mapa de sensibilidad táctil con dos puntas de lápiz en distintas zonas de la piel.", "Biografía de Ramón y Cajal y sus dibujos de neuronas."]),
  fuentes: [RD, wiki("Sistema nervioso", "Sistema_nervioso"), wiki("Santiago Ramón y Cajal", "Santiago_Ramón_y_Cajal"), { t: "Instituto Cajal (CSIC)", url: "https://www.cajal.csic.es/" }],
  revisado: REV,
};
