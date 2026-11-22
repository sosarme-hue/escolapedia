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
    { q: "Un cambio que el cuerpo detecta se llama…", o: ["estímulo", "nervio", "respuesta"], a: 0, e: "Estímulo." },
    { q: "La parte del ojo donde se forma la imagen es…", o: ["la retina", "el iris", "la córnea"], a: 0, e: "La retina." },
    { q: "El tímpano está en el oído…", o: ["externo", "medio", "interno"], a: 1, e: "Separa el externo del medio y vibra." },
    { q: "El equilibrio lo controlan el oído interno y…", o: ["el cerebelo", "el estómago", "la lengua"], a: 0, e: "El cerebelo." },
    { q: "La prolongación larga de la neurona es…", o: ["el núcleo", "la dendrita", "el axón"], a: 2, e: "El axón." },
    { q: "¿Quién descubrió que las neuronas son células independientes?", o: ["Ramón y Cajal", "Colón", "Newton"], a: 0, e: "Santiago Ramón y Cajal, Nobel en 1906." },
    { q: "La médula espinal está dentro de…", o: ["el cráneo", "la columna vertebral", "el corazón"], a: 1, e: "Dentro de la columna." },
    { q: "Los nervios que llevan órdenes a los músculos son…", o: ["ópticos", "motores", "sensitivos"], a: 1, e: "Motores." },
    { q: "Estornudar es un acto…", o: ["aprendido", "voluntario", "reflejo"], a: 2, e: "Reflejo." },
    { q: "Para doblar el brazo se contrae…", o: ["el bíceps", "el tendón", "el tríceps"], a: 0, e: "El bíceps." },
  ],
  examen: [
    { q: "Las papilas gustativas están en…", o: ["la nariz", "la piel", "la lengua"], a: 2, e: "La lengua." },
    { q: "Pensar y recordar lo hace…", o: ["el cerebelo", "la médula", "el cerebro"], a: 2, e: "El cerebro." },
    { q: "Los músculos se unen a los huesos por…", o: ["venas", "nervios", "tendones"], a: 2, e: "Tendones." },
    { q: "Los efectores son…", o: ["ojos y oídos", "músculos y glándulas", "neuronas"], a: 1, e: "Músculos y glándulas." },
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

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Comprender que el cerebro interpreta lo que captan los sentidos", "Describir cómo viaja un mensaje nervioso", "Medir el tiempo de reacción con un experimento", "Valorar el sueño y otros hábitos para cuidar el sistema nervioso"],
  lectura: { titulo: "Agua en la mano", html: `<p>Helen Keller nació en 1880 en Estados Unidos. Cuando tenía un año y medio, una grave enfermedad la dejó <b>ciega y sorda</b>. Sin ver ni oír, no podía aprender a hablar, y vivía encerrada en un mundo silencioso y oscuro. Se enfadaba y daba golpes, porque no sabía cómo expresar lo que quería.</p><p>Cuando Helen tenía casi siete años, llegó a su casa una joven maestra, <b>Anne Sullivan</b>. Anne le escribía palabras en la palma de la mano con los dedos, letra a letra. Helen repetía los movimientos, pero no entendía que eran nombres de cosas.</p><p>Un día, Anne llevó a Helen junto a una bomba de agua. Le puso una mano bajo el chorro frío y, en la otra, le escribió despacio: a-g-u-a. De repente, Helen lo comprendió: ¡aquello que corría por su mano se llamaba «agua»! Ese mismo día aprendió muchas palabras más.</p><p>Usando el <b>tacto</b>, Helen aprendió a leer en braille, a escribir e incluso a hablar. Fue a la universidad, escribió libros y dedicó su vida a defender los derechos de las personas con discapacidad. Su historia demuestra lo extraordinario que es nuestro cerebro.</p>` },
  tras: {
    "La vista y el oído": [
      ["El cerebro también ve: ilusiones ópticas", `<p>Los ojos captan la luz, pero quien realmente «ve» es el <b>cerebro</b>. Los ojos envían señales por el nervio óptico, y el cerebro las interpreta usando lo que ya sabe del mundo. Casi siempre acierta, pero a veces se equivoca: son las <b>ilusiones ópticas</b>.</p><ul><li>En algunas ilusiones, dos líneas exactamente iguales parecen de distinta longitud según hacia dónde apunten las flechas de sus extremos.</li><li>Un mismo color gris parece más claro sobre un fondo oscuro y más oscuro sobre un fondo claro.</li><li>Algunos dibujos se pueden ver de dos formas, por ejemplo un jarrón o dos caras de perfil, pero el cerebro no puede ver las dos a la vez.</li></ul><p>Además, cada ojo tiene un <b>punto ciego</b>: el lugar donde el nervio óptico sale del ojo y donde no hay células que capten la luz. No lo notamos porque el cerebro «rellena» el hueco con lo que hay alrededor.</p><p>Con el oído pasa algo parecido: en un lugar ruidoso, el cerebro es capaz de concentrarse en la voz de un amigo y dejar en segundo plano el resto de sonidos.</p>`,
        H6.flujo("Cómo vemos", ["Ojo|capta luz", "Nervio|óptico", "Cerebro|interpreta"], cAZ), ["DAKZ_ipqc6A", "11 Ilusiones ópticas que engañarán a tus ojos", "GENIAL", 19685145]],
    ],
    "Las neuronas": [
      ["Cómo viaja un mensaje nervioso", `<p>Las neuronas se comunican mediante <b>impulsos nerviosos</b>, que son pequeñas señales eléctricas. Así viaja un mensaje:</p><ol><li>Las <b>dendritas</b>, las ramitas de la neurona, reciben el mensaje.</li><li>El impulso recorre el cuerpo de la neurona y avanza por el <b>axón</b>, una prolongación larga como un cable.</li><li>Al final del axón, el mensaje tiene que saltar a la siguiente neurona. Pero las neuronas no se tocan: entre ellas hay un espacio diminuto. Esta zona de comunicación se llama <b>sinapsis</b>.</li><li>En la sinapsis, la neurona libera unas sustancias químicas que llegan a la siguiente neurona y hacen que el impulso continúe.</li></ol><p>Los impulsos nerviosos son muy rápidos: en algunos nervios viajan a más de 100 metros por segundo, más deprisa que un coche de carreras.</p><p>El cerebro humano tiene unos <b>86 000 millones de neuronas</b>, y cada una puede conectarse con miles de otras. Cada vez que aprendes algo nuevo, se crean o se refuerzan conexiones. Por eso, cuanto más practicas algo, como tocar un instrumento o resolver problemas, más fácil te resulta: el camino entre tus neuronas se va haciendo más fuerte.</p>`,
        L6.filas("Partes del viaje", [["dendritas", "reciben", cVE], ["axón", "conduce", cAZ], ["sinapsis", "pasa a otra neurona", cNA], ["velocidad", "más de 100 m/s", cRO]]), ["-_GXk4HZML4", "El Sistema Nervioso - El cuerpo humano para niños", "Smile and Learn - Español", 2037037]],
    ],
    "Actos voluntarios y actos reflejos": [
      ["Mide tu tiempo de reacción", `<p>El <b>tiempo de reacción</b> es lo que tardamos en responder a un estímulo: desde que vemos, oímos o sentimos algo hasta que nos movemos. Lo puedes medir con una simple <b>regla</b>:</p><ol><li>Un compañero sujeta una regla de 30 cm por el extremo de arriba, en vertical.</li><li>Tú colocas el pulgar y el índice abiertos a la altura del cero, sin tocar la regla.</li><li>Sin avisar, tu compañero suelta la regla. Tú debes atraparla lo antes posible.</li><li>Mira en qué centímetro la has atrapado.</li></ol><p>Cuanto menos haya caído la regla, más rápida es tu reacción. Si la atrapas hacia los <b>20 cm</b>, tu tiempo de reacción es de unos <b>0,2 segundos</b>, que es lo habitual. Si la atrapas a los 10 cm, unos 0,14 segundos: ¡muy rápido!</p><p>Repite la prueba varias veces y calcula la media. Verás que con la práctica mejoras un poco, y que si estás cansado o distraído, empeoras.</p><p>Por eso es tan peligroso usar el móvil mientras se cruza la calle o conducir con sueño: el tiempo de reacción aumenta, y en ese tiempo un coche puede recorrer muchos metros.</p>`,
        H6.barras("Atrapar la regla", [["10 cm", 14, cVE, "0,14 s"], ["20 cm", 20, cNA, "0,20 s"], ["30 cm", 25, cRO, "0,25 s"]], 25)],
    ],
  },
  final: [
    ["Dormir: el cerebro también trabaja", `<p>Pasamos aproximadamente un tercio de la vida durmiendo. ¿Es tiempo perdido? ¡Al contrario! Mientras dormimos, el cerebro hace trabajos muy importantes:</p><ul><li><b>Ordena y guarda lo aprendido</b> durante el día. Por eso, después de dormir bien, recordamos mejor lo que estudiamos.</li><li><b>Limpia los desechos</b> que se acumulan en el cerebro mientras estamos despiertos.</li><li>Durante el sueño profundo se fabrica la <b>hormona del crecimiento</b>.</li><li>Recupera la energía y ayuda a controlar las <b>emociones</b>: con sueño estamos más irritables.</li></ul><p>Los especialistas recomiendan que los niños y niñas de entre 6 y 12 años duerman entre <b>9 y 12 horas</b> cada noche.</p><p>Algunos consejos para dormir bien:</p><ul><li>Acostarse y levantarse siempre más o menos a la misma hora.</li><li>Apagar las <b>pantallas</b> al menos una hora antes de dormir, porque su luz engaña al cerebro y le hace creer que todavía es de día.</li><li>Cenar ligero y no demasiado tarde.</li><li>Dormir en una habitación a oscuras, tranquila y fresca.</li></ul>`,
      L6.filas("Mientras duermes", [["memoria", "guarda lo aprendido", cAZ], ["limpieza", "retira desechos", cVE], ["crecimiento", "se fabrica la hormona", cNA], ["recomendado", "9 a 12 horas", cMO]]), ["czCphrEerwg", "¿Cuáles podrían ser las consecuencias de no dormir? - Claudia Aguirre", "Sé Curioso — TED-Ed", 7318395]],
    ["Cuidar el sistema nervioso y los sentidos", `<p>El sistema nervioso dirige todo nuestro cuerpo y, si se daña, a menudo no se puede reparar. Por eso hay que cuidarlo:</p><ul><li><b>Proteger la cabeza y la espalda</b>: usar casco en la bici, el patinete o los patines, y llevar siempre el cinturón de seguridad en el coche. El cráneo y la columna protegen el encéfalo y la médula, pero un golpe fuerte puede dañarlos.</li><li><b>Cuidar los oídos</b>: con auriculares, no subir el volumen por encima de más o menos la mitad y descansar a menudo. El ruido muy fuerte destruye células del oído que no se recuperan.</li><li><b>Cuidar la vista</b>: leer con buena luz, descansar de las pantallas mirando a lo lejos de vez en cuando y usar gafas de sol homologadas en la playa o en la nieve.</li><li><b>Alejarse del alcohol, el tabaco y otras drogas</b>, que alteran el funcionamiento de las neuronas, sobre todo en un cerebro que todavía se está desarrollando.</li><li><b>Mantener el cerebro activo</b>: leer, jugar, aprender cosas nuevas, hacer deporte y relacionarse con otras personas.</li></ul>`,
      H6.rueda("Cuida tu sistema nervioso", "CEREBRO", [["Casco", cRO], ["Volumen bajo", cAZ], ["Dormir", cMO], ["Aprender", cVE]])],
  ],
  ejemplos: [
    ["Atrapas la regla a los 20 cm. ¿Cuál es tu tiempo de reacción aproximado?", ["Una caída de 20 cm corresponde a unos 0,2 segundos."], "Unos 0,2 segundos."],
    ["Si te acuestas a las 21:30 y te levantas a las 7:30, ¿duermes las horas recomendadas?", ["De 21:30 a 7:30 hay 10 horas.", "Lo recomendado son de 9 a 12 horas."], "Sí: 10 horas."],
  ],
  errores: ["Creer que vemos con los ojos solamente: quien interpreta las imágenes es el cerebro.", "Pensar que las neuronas están pegadas unas a otras: se comunican a través de la sinapsis."],
  ejercicios: [
    ["b", "¿Cómo se llama la zona donde una neurona pasa el mensaje a otra?", "Sinapsis."],
    ["b", "¿Cuántas horas deben dormir los niños de 6 a 12 años?", "Entre 9 y 12 horas."],
    ["b", "¿Qué es el punto ciego?", "La zona del ojo donde sale el nervio óptico y no se capta luz."],
    ["b", "¿Con qué sentido aprendió Helen Keller a comunicarse?", "Con el tacto."],
    ["b", "¿Por qué hay que llevar casco en la bici?", "Para proteger el encéfalo de los golpes."],
    ["m", "¿Qué es una ilusión óptica?", "Un error del cerebro al interpretar lo que ven los ojos."],
    ["m", "Ordena el recorrido del impulso: axón, dendritas, sinapsis.", "Dendritas, axón, sinapsis."],
    ["m", "¿Por qué no hay que usar pantallas antes de dormir?", "Su luz engaña al cerebro y retrasa el sueño."],
    ["m", "Atrapas la regla a los 10 cm y tu compañero a los 25 cm. ¿Quién reacciona antes?", "Tú, porque la regla cayó menos."],
    ["m", "Di tres cosas que hace el cerebro mientras dormimos.", "Guarda lo aprendido, limpia desechos y fabrica la hormona del crecimiento."],
    ["a", "¿Por qué aprender algo se hace más fácil con la práctica?", "Porque se refuerzan las conexiones entre neuronas."],
    ["a", "¿Por qué es peligroso cruzar la calle mirando el móvil?", "Aumenta el tiempo de reacción y no percibimos el peligro a tiempo."],
    ["a", "Has hecho la prueba de la regla 5 veces: 18, 22, 20, 16 y 24 cm. ¿Cuál es la media?", "20 cm."],
    ["a", "¿Por qué los daños en el sistema nervioso son tan graves?", "Porque las neuronas casi no se regeneran."],
  ],
  quiz: [
    ["Quien interpreta las imágenes que captan los ojos es…", ["el cerebro", "la retina", "el cristalino"], "Ilusiones."],
    ["La prolongación larga de la neurona es el…", ["axón", "dendrita", "núcleo"], "Viaje."],
    ["Un tiempo de reacción normal es de unos…", ["0,2 segundos", "2 segundos", "20 segundos"], "Regla."],
    ["El cerebro humano tiene unas…", ["86 000 millones de neuronas", "86 neuronas", "8 600 neuronas"], "Neuronas."],
    ["Mientras dormimos, el cerebro…", ["guarda lo aprendido", "se apaga del todo", "deja de recibir sangre"], "Sueño."],
  ],
  examen: [
    ["Las neuronas se comunican por…", ["la sinapsis", "los alvéolos", "las vellosidades"], "Sinapsis."],
    ["Helen Keller era…", ["ciega y sorda", "solo ciega", "solo sorda"], "Lectura."],
  ],
  tarjetas: [
    ["El cerebro ve", "Los ojos captan la luz y el cerebro interpreta; a veces se engaña (ilusiones)."],
    ["Impulso nervioso", "Dendritas → axón → sinapsis → siguiente neurona."],
    ["Tiempo de reacción", "Unos 0,2 segundos; empeora con cansancio y distracciones."],
    ["Dormir", "De 9 a 12 horas: memoria, limpieza y crecimiento."],
  ],
  glosario: [
    ["Ilusión óptica", "Imagen que el cerebro interpreta de forma equivocada."],
    ["Punto ciego", "Zona de la retina sin células sensibles a la luz."],
    ["Nervio óptico", "Nervio que lleva la información del ojo al cerebro."],
    ["Impulso nervioso", "Señal eléctrica que recorre las neuronas."],
    ["Dendrita", "Prolongación corta de la neurona que recibe mensajes."],
    ["Axón", "Prolongación larga de la neurona que conduce el impulso."],
    ["Sinapsis", "Zona de comunicación entre dos neuronas."],
    ["Tiempo de reacción", "Tiempo que tardamos en responder a un estímulo."],
    ["Hormona del crecimiento", "Sustancia que hace crecer el cuerpo, sobre todo al dormir."],
    ["Braille", "Sistema de lectura con puntos en relieve para personas ciegas."],
    ["Estímulo", "Cambio que perciben los sentidos."],
    ["Homologado", "Que cumple las normas de seguridad."],
  ],
  situacion: {
    titulo: "Científicos de los reflejos",
    reto: "La clase investiga de qué depende el tiempo de reacción con el experimento de la regla.",
    pasos: ["Formulad preguntas: ¿reaccionamos mejor con la mano con la que escribimos?, ¿mejora con la práctica?, ¿empeora con distracciones?", "Haced la prueba de la regla varias veces en cada situación y anotad los resultados.", "Calculad medias y representadlas en gráficos de barras.", "Sacad conclusiones y relacionadlas con la seguridad vial y el uso del móvil."],
    producto: "Un informe científico con datos, gráficos y conclusiones.",
    evaluacion: ["Plantea hipótesis.", "Mide y registra datos con cuidado.", "Calcula medias y hace gráficos.", "Relaciona los resultados con la vida diaria."],
  },
});
