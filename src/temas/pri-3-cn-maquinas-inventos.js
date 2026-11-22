// Ciencias de la Naturaleza 3º de Primaria: las máquinas y los inventos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, linea, vid, vgen, RD, PROF, suelo, bombi, tick, equis } = require("./_pri3b");

// Rueda con radios.
const rueda = (x, y, r = 16, c = "var(--ink)") => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="none" stroke="${c}" stroke-width="3"/>${[0, 45, 90, 135].map((a) => `<path d="M${(Math.cos((a * Math.PI) / 180) * r).toFixed(1)} ${(Math.sin((a * Math.PI) / 180) * r).toFixed(1)} L${(-Math.cos((a * Math.PI) / 180) * r).toFixed(1)} ${(-Math.sin((a * Math.PI) / 180) * r).toFixed(1)}" stroke="${c}" stroke-width="1.5"/>`).join("")}<circle r="3" fill="${c}"/></g>`;
// Engranaje sencillo.
const engranaje = (x, y, r = 18, c = COL.gris) => `<g transform="translate(${x} ${y})">${[...Array(8)].map((_, i) => `<rect x="-4" y="${-r - 6}" width="8" height="10" fill="${c}" transform="rotate(${i * 45})"/>`).join("")}<circle r="${r}" fill="${c}"/><circle r="${r * 0.35}" fill="var(--card)"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Las máquinas y los inventos",
  minutos: 45,
  objetivos: ["Saber qué es una máquina y para qué sirve", "Distinguir máquinas simples y compuestas", "Conocer la palanca, la rueda, la polea y el plano inclinado", "Identificar algunas piezas y fuentes de energía de las máquinas", "Conocer grandes inventos y usar las máquinas con seguridad"],
  claves: ["máquina", "máquina simple", "máquina compuesta", "palanca", "rueda", "polea", "plano inclinado", "engranaje", "energía", "inventor", "invento", "seguridad"],
  pregunta: {
    texto: "Para subir un piano pesadísimo al camión de mudanzas, los transportistas no lo levantan a pulso: lo empujan por una rampa. ¿Por qué es más fácil así?",
    respuesta: "Porque la rampa es una <mark>máquina simple</mark>: el <b>plano inclinado</b>. Al subir por la rampa recorremos un camino más largo, pero necesitamos <b>mucha menos fuerza</b> que para levantar el piano en vertical. Las máquinas sirven precisamente para eso: para hacer los trabajos con <b>menos esfuerzo</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una máquina?</h3><p>Una <mark>máquina</mark> es un objeto inventado por las personas para hacer un trabajo con <b>menos esfuerzo</b>, más <b>rápido</b> o mejor. Las usamos a diario sin darnos cuenta.</p><p>Gracias a las máquinas podemos:</p><p>• <b>Movernos</b> más deprisa: la bicicleta, el coche, el tren o el avión.<br>• <b>Levantar</b> y mover objetos pesados: la grúa o la carretilla.<br>• <b>Cortar</b> y dar forma: las tijeras, el cuchillo o el sacapuntas.<br>• <b>Comunicarnos</b>: el teléfono o el ordenador.<br>• Hacer las <b>tareas de casa</b>: la lavadora, el frigorífico o el microondas.<br>• <b>Divertirnos</b>: el columpio, el balancín o la videoconsola.</p><p>Hay máquinas muy sencillas, de una sola pieza, como un cascanueces o una rampa, y otras muy complicadas, con miles de piezas, como un avión o un robot.</p><p>Las máquinas no se inventaron de golpe: a lo largo de la historia, muchas personas fueron teniendo ideas y mejorando las de otros. ¡Por eso hoy tenemos máquinas tan increíbles!</p>`,
      svg: svg("Máquinas para movernos, levantar, cortar y comunicarnos", `${tit("Las máquinas nos ayudan")}${fichas([["Movernos", "bici, tren, avión", COL.azul], ["Levantar", "grúa, carretilla", COL.naranja], ["Cortar", "tijeras, sacapuntas", COL.rojo], ["Comunicarnos", "teléfono, ordenador", COL.verde]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Máquinas simples y compuestas</h3><p>Las máquinas se clasifican en dos grupos:</p><p>• Las <mark>máquinas simples</mark> tienen <b>muy pocas piezas</b>, a veces solo una, y funcionan con la fuerza de nuestro cuerpo. Las más importantes son la <b>palanca</b>, la <b>rueda</b>, la <b>polea</b>, el <b>plano inclinado</b> y la <b>cuña</b>. Por ejemplo, unas pinzas, un abrebotellas, una rampa o un hacha.</p><p>• Las <mark>máquinas compuestas</mark> están formadas por <b>muchas piezas</b>, y muchas veces por varias máquinas simples juntas. Por ejemplo, la <b>bicicleta</b> tiene ruedas, palancas (los pedales y el freno) y engranajes con una cadena. Las tijeras son dos palancas unidas con dos cuñas que cortan. La grúa usa poleas, palancas y un motor.</p><p>Muchas máquinas compuestas necesitan <b>energía</b> para funcionar, además de nuestra fuerza: electricidad, gasolina, el viento…</p><p>Fíjate en las máquinas de tu casa y del colegio. ¿Son simples o compuestas? ¿Qué piezas reconoces?</p>`,
      svg: svg("Máquinas simples: palanca, rueda, polea y rampa; máquina compuesta: bicicleta", `${tit("Simples y compuestas")}${filas([["simples", "palanca, rueda, polea, rampa", COL.verde], ["compuestas", "bicicleta, grúa, lavadora", COL.morado]], 54, 30, { x: 20, wa: 82, wb: 140 })}${suelo(160)}${rueda(90, 140, 18)}${rueda(170, 140, 18)}<path d="M90 140 L120 112 L170 140 M120 112 L150 112 L170 140 M120 112 L110 102 M150 112 L154 100 h10" stroke="${COL.morado}" stroke-width="3" fill="none"/><circle cx="130" cy="140" r="5" fill="${COL.gris}"/>`),
      video: vid("ixH0OqAPanY"),
    },
    {
      html: `<h3>La palanca</h3><p>La <mark>palanca</mark> es una barra rígida que gira sobre un punto de apoyo. Sirve para <b>mover o levantar</b> cosas pesadas con poca fuerza. Tiene tres partes:</p><p>• El <b>punto de apoyo</b>: donde se apoya la barra y sobre el que gira.<br>• La <b>resistencia</b>: el peso o el objeto que queremos mover.<br>• La <b>potencia</b>: la fuerza que hacemos nosotros.</p><p>Cuanto más lejos del punto de apoyo hacemos la fuerza, <b>menos esfuerzo</b> necesitamos. Por eso es más fácil abrir una puerta empujando cerca del picaporte que cerca de las bisagras.</p><p>Hay palancas en muchos objetos: el <b>balancín</b> del parque, la <b>carretilla</b>, el <b>abrebotellas</b>, el <b>cascanueces</b>, las <b>pinzas</b> de la ropa, las <b>tijeras</b> o la <b>escoba</b>. ¡Incluso tu brazo funciona como una palanca, con el codo como punto de apoyo!</p><p>Un sabio griego llamado <b>Arquímedes</b> estudió las palancas hace más de dos mil años y dijo: «Dadme un punto de apoyo y moveré el mundo».</p>`,
      svg: svg("Palanca: barra sobre un punto de apoyo, con la resistencia y la potencia", `${tit("La palanca")}${suelo(150)}<path d="M100 150 l-14 0 l14 -26 l14 26z" fill="${COL.gris}"/><path d="M30 132 L230 116" stroke="${COL.marron}" stroke-width="6" stroke-linecap="round"/><rect x="34" y="100" width="34" height="30" fill="${COL.rojo}" fill-opacity=".7"/>${fl(214, 80, 214, 112, COL.azul, 3)}${et(51, 92, "resistencia", 80, { size: 10.5, color: COL.rojo })}${et(214, 72, "potencia", 70, { size: 10.5, color: COL.azul })}${et(100, 166, "punto de apoyo", 100, { size: 10.5 })}`),
    },
    {
      html: `<h3>La rueda y el eje</h3><p>La <mark>rueda</mark> es una pieza redonda que gira alrededor de una barra, el <b>eje</b>. Es uno de los inventos más importantes de la historia. Se inventó hace unos cinco mil quinientos años.</p><p>¿Por qué es tan útil? Porque arrastrar un objeto por el suelo cuesta mucho, ya que roza todo el rato. En cambio, si lo ponemos sobre ruedas, se desliza fácilmente. Por eso los primeros carros y las carretillas facilitaron muchísimo el trabajo de las personas.</p><p>Encontramos ruedas en las bicicletas, los coches, los trenes, los patinetes, las maletas, los carros de la compra y las sillas de oficina.</p><p>Pero las ruedas no solo sirven para desplazarse. También se usan en:</p><p>• Los <b>molinos</b> de agua y de viento, cuyas ruedas giran con la fuerza del agua o del aire.<br>• El <b>torno</b> del alfarero, para hacer vasijas de barro.<br>• El <b>volante</b> de un coche o el pomo redondo de una puerta.<br>• La <b>noria</b>, que sacaba agua de los pozos o de los ríos.</p>`,
      svg: svg("Arrastrar una caja cuesta más que llevarla sobre ruedas", `${tit("La rueda")}${suelo(150)}<rect x="24" y="110" width="56" height="40" fill="${COL.marron}" fill-opacity=".7"/>${fl(108, 130, 84, 130, COL.rojo, 3)}<path d="M20 152 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0 q4 4 8 0" stroke="${COL.rojo}" stroke-width="1.4" fill="none"/><rect x="150" y="96" width="70" height="34" fill="${COL.marron}" fill-opacity=".7"/>${rueda(164, 136, 12)}${rueda(206, 136, 12)}${fl(250, 112, 224, 112, COL.verde, 3)}${et(52, 172, "mucho esfuerzo", 100, { size: 10.5, color: COL.rojo })}${et(186, 172, "poco esfuerzo", 100, { size: 10.5, color: COL.verde })}`),
    },
    {
      html: `<h3>La polea y el plano inclinado</h3><p>La <mark>polea</mark> es una rueda con un canal por el que pasa una <b>cuerda</b>. Al tirar de un extremo de la cuerda hacia abajo, el objeto atado al otro extremo <b>sube</b>. Es más cómodo tirar hacia abajo, porque nos ayuda nuestro propio peso. Las poleas se usan en los pozos para sacar el cubo de agua, en las grúas, en los ascensores, para izar la bandera y en las persianas. Si se combinan varias poleas, se puede levantar algo muy pesado con poca fuerza.</p><p>El <mark>plano inclinado</mark> es una superficie en cuesta, como una <b>rampa</b>. Sirve para subir objetos pesados empujándolos o arrastrándolos, en lugar de levantarlos. El camino es más largo, pero se hace mucha menos fuerza. Hay rampas en las entradas de los edificios para sillas de ruedas y carritos, en los camiones de mudanza y en los aparcamientos. Las carreteras de montaña hacen curvas para que la cuesta sea más suave.</p><p>La <b>cuña</b> es un plano inclinado que sirve para cortar o separar: el hacha, el cuchillo, el filo de las tijeras o la cuña que sujeta una puerta. ¡Y el <b>tornillo</b> es un plano inclinado enrollado!</p>`,
      svg: svg("Polea en un pozo y rampa para subir una caja", `${tit("Polea y plano inclinado")}<path d="M30 160 V64 M90 160 V64 M26 64 H94" stroke="${COL.marron}" stroke-width="4"/><circle cx="60" cy="72" r="10" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M50 72 V130 M70 72 V112" stroke="var(--ink)" stroke-width="1.5"/><rect x="42" y="130" width="16" height="16" fill="${COL.agua}" stroke="var(--ink)" stroke-width="1"/>${fl(70, 112, 70, 140, COL.azul, 2)}${suelo(160)}<path d="M130 160 L246 160 L246 104z" fill="${COL.gris}" fill-opacity=".4" stroke="var(--ink)" stroke-width="1.5"/><rect x="186" y="112" width="22" height="22" fill="${COL.marron}" fill-opacity=".8" transform="rotate(-26 197 123)"/>${fl(160, 150, 186, 136, COL.verde, 2.5)}${et(60, 56, "polea", 60, { size: 11 })}${et(196, 176, "plano inclinado", 110, { size: 11 })}`),
    },
    {
      html: `<h3>Piezas y energía de las máquinas</h3><p>Las máquinas compuestas tienen <b>piezas</b> que transmiten el movimiento de unas partes a otras:</p><p>• Los <mark>engranajes</mark>: ruedas con dientes que encajan entre sí. Cuando una gira, hace girar a la otra. Están en los relojes, las batidoras y las bicicletas.<br>• Las <b>cadenas</b> y las <b>correas</b>: unen ruedas que están separadas, como la cadena de la bici.<br>• Los <b>muelles</b>: se estiran y se encogen, como en un bolígrafo o un colchón.<br>• Los <b>tornillos</b> y las <b>tuercas</b>: unen unas piezas con otras.</p><p>Para funcionar, las máquinas necesitan <mark>energía</mark>. Según la energía que usan:</p><p>• Algunas funcionan con la <b>fuerza de las personas</b> o de los animales: la bici, las tijeras, el carro de caballos.<br>• Otras, con <b>electricidad</b>: la lavadora, el ordenador, el tren eléctrico. Se enchufan o llevan <b>pilas</b> o baterías.<br>• Otras, con <b>combustibles</b> como la gasolina o el gasóleo: los coches, los aviones o los barcos.<br>• Y otras, con el <b>viento</b>, el <b>agua</b> o el <b>sol</b>: los molinos, los barcos de vela o las placas solares.</p>`,
      svg: svg("Dos engranajes que encajan y fuentes de energía de las máquinas", `${tit("Engranajes y energía")}${engranaje(56, 82, 18, COL.gris)}${engranaje(96, 108, 14, COL.naranja)}${et(76, 146, "engranajes", 90, { size: 11 })}${filas([["personas", "bici, tijeras", COL.marron], ["electricidad", "lavadora, tren", COL.sol], ["combustible", "coche, avión", COL.rojo], ["viento y sol", "molino, placa", COL.verde]], 56, 30, { x: 146, wa: 90, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>Grandes inventos de la historia</h3><p>Un <mark>invento</mark> es algo nuevo que crea una persona para resolver un problema o mejorar la vida. Quien lo crea es un <b>inventor</b> o una <b>inventora</b>. Estos son algunos inventos que cambiaron el mundo:</p><p>• El <b>fuego</b> controlado y las primeras herramientas de piedra, en la Prehistoria.<br>• La <b>rueda</b>, hace unos 5.500 años.<br>• La <b>imprenta</b>, inventada por <b>Gutenberg</b> hace unos 600 años. Gracias a ella, los libros se pudieron copiar rápido y mucha más gente aprendió a leer.<br>• La <b>máquina de vapor</b>, hace unos 250 años, que movió los primeros trenes y fábricas.<br>• La <b>bombilla</b> eléctrica, perfeccionada por <b>Thomas Edison</b> hace unos 150 años.<br>• El <b>teléfono</b>, el <b>avión</b> de los hermanos Wright, el <b>ordenador</b> e <b>internet</b>.</p><p>En España también ha habido grandes inventores: <b>Isaac Peral</b> inventó un submarino; <b>Juan de la Cierva</b>, el autogiro, antepasado del helicóptero; y <b>Manuel Jalón</b>, la fregona moderna. <b>Ángela Ruiz Robles</b> imaginó un libro mecánico que algunos ven como precursor del libro electrónico.</p>`,
      svg: svg("Línea del tiempo de inventos: rueda, imprenta, máquina de vapor, bombilla e internet", `${tit("Inventos en el tiempo")}${linea([["rueda", "hace 5.500 años", COL.marron], ["imprenta", "hace 600", COL.morado], ["vapor", "hace 250", COL.gris], ["bombilla", "hace 150", COL.sol], ["internet", "hace 50", COL.azul]], { y: 104 })}`),
      video: vid("Ob_Tnu66_Gs"),
    },
    {
      html: `<h3>Usamos las máquinas con seguridad</h3><p>Las máquinas son muy útiles, pero si no las usamos bien pueden ser <b>peligrosas</b>. Sigue estas normas:</p><p>• Usa solo las máquinas adecuadas para tu edad y pide ayuda a un adulto para las demás.<br>• Lee las <b>instrucciones</b> antes de usar una máquina nueva.<br>• No toques los <b>enchufes</b> ni los aparatos eléctricos con las manos mojadas, y nunca metas objetos en los enchufes.<br>• Corta y pasa las tijeras siempre con las <b>puntas hacia abajo</b>.<br>• No te acerques a máquinas que estén funcionando, como una cortadora de césped o una batidora.<br>• Usa <b>casco</b> y protecciones al montar en bicicleta o patinete.<br>• Desenchufa los aparatos cuando no los uses y apágalos para <b>ahorrar energía</b>.</p><p>Fíjate en las <b>señales</b> que llevan algunas máquinas: un rayo amarillo avisa de peligro eléctrico, y una llama indica que algo puede arder o quemar.</p><p>Y recuerda: las máquinas viejas o rotas no se tiran a la basura normal. Se llevan al <b>punto limpio</b> para reciclarlas.</p>`,
      svg: svg("Normas de seguridad: enchufes, tijeras, casco y punto limpio", `${tit("Seguridad con las máquinas")}<path d="M34 76 L58 34 L82 76z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><path d="M60 46 l-6 12 h6 l-4 12 l10 -16 h-6 l4 -8z" fill="var(--ink)"/>${filas([["enchufes", "nunca con manos mojadas", COL.sol], ["tijeras", "puntas hacia abajo", COL.rojo], ["bici", "siempre con casco", COL.azul], ["rotas", "al punto limpio", COL.verde]], 100, 22, { x: 20, wa: 70, wb: 150 })}${et(170, 56, "¡peligro eléctrico!", 130, { size: 11, color: COL.rojo })}`),
    },
    {
      html: `<h3>¡Somos inventores!</h3><p>Para inventar algo, los inventores siguen unos pasos. ¡Tú también puedes hacerlo!</p><p>1. <b>Pensar en un problema</b>: por ejemplo, «los lápices se caen siempre de mi mesa».<br>2. <b>Buscar ideas</b>: dibuja varias soluciones posibles. No importa si parecen raras.<br>3. <b>Elegir</b> la mejor idea y <b>dibujar un plano</b> con sus partes y medidas.<br>4. <b>Construirlo</b> con materiales sencillos y reciclados: cartón, rollos de papel, tapones, gomas, palillos, cuerdas…<br>5. <b>Probarlo</b> y <b>mejorarlo</b>: si algo no funciona, no pasa nada. ¡Los inventores fallan muchas veces antes de conseguirlo!<br>6. <b>Presentarlo</b> a los demás y explicar cómo funciona.</p><p><b>Reto:</b> construye una polea con un carrete de hilo vacío, un lápiz y una cuerda, y úsala para subir un estuche hasta tu mesa. O fabrica un coche con un brik, cuatro tapones como ruedas y dos pajitas como ejes.</p><p>Thomas Edison hizo cientos de pruebas antes de que su bombilla funcionara. Cuando le preguntaban, decía que no había fracasado: había encontrado muchas maneras que no funcionaban.</p>`,
      svg: svg("Pasos para inventar: problema, ideas, plano, construir, probar y presentar", `${tit("Pasos para inventar")}${flujo([["problema", COL.rojo], ["ideas", COL.sol], ["plano", COL.azul]], 46, 32)}${flujo([["construir", COL.marron], ["probar", COL.verde], ["presentar", COL.morado]], 104, 32)}${fl(218, 80, 50, 102, "var(--muted)", 1.5)}${bombi(130, 172, 0.9)}`),
    },
  ],
  figura: {
    titulo: "Las máquinas en ocho ideas",
    svg: rejilla([
      ["Máquina", "trabajo con menos esfuerzo", COL.azul],
      ["Simples", "pocas piezas", COL.verde],
      ["Compuestas", "muchas piezas", COL.morado],
      ["Palanca", "barra y punto de apoyo", COL.marron],
      ["Rueda", "gira sobre un eje", COL.gris],
      ["Polea y rampa", "subir con poca fuerza", COL.naranja],
      ["Energía", "fuerza, electricidad…", COL.sol],
      ["Inventos", "imprenta, bombilla", COL.rojo],
    ], 4, 86, "Resumen de las máquinas y los inventos"),
  },
  video: vgen("3FHuwGzCPHE", "las máquinas simples para niños"),
  ejemplos: [
    { enunciado: "¿Qué máquina simple es cada objeto: balancín, rampa, pozo con cuerda, hacha?",
      pasos: ["El balancín gira sobre un punto de apoyo: palanca.", "La rampa es una cuesta: plano inclinado.", "La cuerda pasa por una rueda: polea.", "El hacha corta con su filo: cuña."],
      resultado: "Palanca, plano inclinado, polea y cuña." },
    { enunciado: "¿La bicicleta es una máquina simple o compuesta? ¿Por qué?",
      pasos: ["Tiene muchas piezas.", "Tiene ruedas, pedales y frenos (palancas) y engranajes con cadena."],
      resultado: "Compuesta: está formada por varias máquinas simples." },
    { enunciado: "La imprenta se inventó hace unos 600 años y la bombilla hace unos 150. ¿Cuántos años pasaron entre los dos inventos?",
      pasos: ["Restamos: 600 − 150 = 450."],
      resultado: "Unos 450 años." },
  ],
  errores: [
    "Pensar que solo son máquinas las que tienen motor o enchufe: las tijeras también lo son.",
    "Creer que una máquina nos ahorra todo el trabajo: nos ahorra esfuerzo.",
    "Confundir la polea (rueda con cuerda) con la palanca (barra y apoyo).",
    "Tocar los aparatos eléctricos con las manos mojadas.",
  ],
  ejercicios: [
    { q: "¿Qué es una máquina? Escribe tres ejemplos.", sol: "Un objeto inventado para hacer un trabajo con menos esfuerzo. Por ejemplo, las tijeras, la bicicleta y la lavadora." },
    { q: "¿Qué diferencia hay entre una máquina simple y una compuesta?", sol: "La simple tiene muy pocas piezas; la compuesta tiene muchas y a menudo varias máquinas simples juntas." },
    { q: "Escribe las tres partes de una palanca.", sol: "Punto de apoyo, resistencia y potencia." },
    { q: "Escribe tres objetos que funcionan como una palanca.", sol: "Por ejemplo, el balancín, el abrebotellas y la carretilla." },
    { q: "¿Por qué es más fácil mover una caja sobre ruedas?", sol: "Porque la rueda gira y la caja no roza todo el rato con el suelo." },
    { q: "¿Para qué sirve una polea? Pon un ejemplo.", sol: "Para subir objetos tirando de una cuerda hacia abajo. Por ejemplo, en un pozo o al izar una bandera." },
    { q: "¿Qué es un plano inclinado? ¿Dónde lo encontramos?", sol: "Una superficie en cuesta, como una rampa. En la entrada de edificios, en los camiones de mudanza." },
    { q: "Escribe dos máquinas que funcionan con electricidad y dos con combustible.", sol: "Electricidad: lavadora y ordenador. Combustible: coche y avión." },
    { q: "¿Quién inventó la imprenta y por qué fue tan importante?", sol: "Gutenberg. Permitió copiar libros rápido y que mucha más gente aprendiera a leer." },
    { q: "Escribe tres normas de seguridad con las máquinas.", sol: "No tocar enchufes con las manos mojadas, pasar las tijeras con las puntas hacia abajo y usar casco en la bici." },
  ],
  quiz: [
    { q: "Las máquinas sirven para…", o: ["hacer trabajos con menos esfuerzo", "aburrirse", "gastar más fuerza"], a: 0, e: "Con menos esfuerzo." },
    { q: "Una rampa es un…", o: ["plano inclinado", "engranaje", "muelle"], a: 0, e: "Plano inclinado." },
    { q: "El balancín es una…", o: ["polea", "palanca", "rueda"], a: 1, e: "Una palanca." },
    { q: "La bicicleta es una máquina…", o: ["simple", "compuesta", "de vapor"], a: 1, e: "Compuesta." },
    { q: "Las ruedas con dientes son…", o: ["engranajes", "poleas", "cuñas"], a: 0, e: "Engranajes." },
    { q: "Para sacar agua de un pozo usamos una…", o: ["polea", "cuña", "palanca"], a: 0, e: "Una polea." },
    { q: "El hacha funciona como una…", o: ["cuña", "rueda", "polea"], a: 0, e: "Una cuña." },
    { q: "La imprenta la inventó…", o: ["Gutenberg", "Edison", "Arquímedes"], a: 0, e: "Gutenberg." },
    { q: "La lavadora funciona con…", o: ["electricidad", "viento", "gasolina"], a: 0, e: "Electricidad." },
    { q: "Las tijeras se pasan con las puntas…", o: ["hacia abajo", "hacia arriba", "hacia la cara"], a: 0, e: "Hacia abajo." },
  ],
  examen: [
    { q: "El punto sobre el que gira una palanca es el…", o: ["punto de apoyo", "eje", "muelle"], a: 0, e: "Punto de apoyo." },
    { q: "Isaac Peral inventó un…", o: ["submarino", "teléfono", "avión"], a: 0, e: "Un submarino." },
    { q: "Las máquinas rotas se llevan al…", o: ["punto limpio", "contenedor azul", "río"], a: 0, e: "Al punto limpio." },
    { q: "Un tornillo es un plano inclinado…", o: ["enrollado", "redondo", "recto"], a: 0, e: "Enrollado." },
  ],
  feynman: ["Qué es una máquina y para qué sirve", "Cómo funcionan la palanca, la rueda y la polea", "Un invento que cambió el mundo"],
  mapa: mapa("MÁQUINAS", "var(--pri)", [
    ["Simples", "palanca · rueda · polea", COL.verde],
    ["Compuestas", "bici · grúa · lavadora", COL.morado],
    ["Energía", "fuerza · electricidad · viento", COL.sol],
    ["Inventos", "imprenta · bombilla · internet", COL.rojo],
  ], 250),
  tarjetas: [
    ["Máquina", "Objeto para trabajar con menos esfuerzo."],
    ["Máquina simple", "Muy pocas piezas: palanca, rueda, polea."],
    ["Máquina compuesta", "Muchas piezas: bicicleta, grúa."],
    ["Palanca", "Barra que gira sobre un punto de apoyo."],
    ["Polea", "Rueda con una cuerda para subir pesos."],
    ["Plano inclinado", "Rampa para subir cosas con menos fuerza."],
    ["Engranaje", "Ruedas con dientes que se mueven juntas."],
    ["Invento", "Algo nuevo creado para resolver un problema."],
  ],
  familias: ["Buscad en casa palancas escondidas: abrebotellas, pinzas, cascanueces, tijeras.", "Construid juntos un coche con un brik, tapones y pajitas.", "Hablad de qué máquinas no existían cuando los abuelos eran pequeños.", "Revisad juntos las normas de seguridad con los enchufes y la cocina."],
  profesores: PROF("Ciencias de la Naturaleza: máquinas simples y compuestas; palanca, rueda y eje, polea, plano inclinado y cuña; operadores mecánicos; fuentes de energía de las máquinas; inventos e inventores; seguridad en el uso de máquinas", ["Taller de máquinas simples con materiales reciclados.", "Línea del tiempo de inventos en el pasillo del aula.", "Proyecto de inventores siguiendo las fases del diseño."]),
  fuentes: [RD, wiki("Máquina simple", "Máquina simple"), wiki("Palanca", "Palanca"), wiki("Invento", "Invento")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Explorar cómo funcionan los imanes", "Conocer a mujeres inventoras", "Entender qué es un robot", "Descubrir los molinos de viento y de agua"],
  lectura: { titulo: "El robot de cartón", html: `<p>Para la feria de ciencias, el grupo de Elsa decidió construir un robot. No tenían piezas caras, así que usaron lo que encontraron en casa: cajas de cartón, tapones, una pila, un pequeño motor de un juguete roto y cuatro ruedas de un coche viejo.</p><p>—Un robot tiene que moverse solo —dijo Elsa—. Si no, es solo un muñeco.</p><p>Pegaron el motor a un eje con dos ruedas y lo conectaron a la pila con unos cables. Cuando cerraron el interruptor, ¡el robot avanzó por la mesa!</p><p>—Pero se va a caer por el borde —avisó Jaime.</p><p>Tenía razón. El robot llegó al final de la mesa y cayó al suelo con un ruido de cartón.</p><p>La profesora les explicó que los robots de verdad tienen <b>sensores</b>, como ojos o bigotes, que les avisan de los obstáculos. Y un pequeño ordenador que decide qué hacer.</p><p>El grupo no tenía sensores, pero inventó una solución: pusieron un palito delante del robot que, al tocar la pared, apagaba el interruptor.</p><p>El día de la feria, el robot avanzó, tocó la pared con su bigote de palito y se paró. Todo el mundo aplaudió.</p>` },
  tras: {
    "Piezas y energía de las máquinas": [
      ["Los imanes", `<p>Los <mark>imanes</mark> son objetos que <b>atraen</b> a algunos metales, como el hierro y el acero, sin tocarlos.</p><ul><li>Todo imán tiene dos <b>polos</b>: el polo norte y el polo sur.</li><li>Dos polos <b>distintos</b> se atraen; dos polos <b>iguales</b> se repelen, es decir, se empujan.</li><li>Los imanes atraen el hierro, pero no la madera, el plástico, el papel ni el aluminio de las latas.</li><li>La fuerza del imán atraviesa el papel, el cartón y hasta el agua.</li></ul><p>Usamos imanes en muchas máquinas y objetos: las puertas de las neveras, los altavoces, los motores eléctricos, las pizarras magnéticas y los trenes muy rápidos que flotan sobre las vías.</p><p>La <b>brújula</b> tiene una aguja imantada que siempre señala hacia el norte, porque la Tierra funciona como un enorme imán. Los marineros la usan desde hace cientos de años para orientarse.</p><p><b>Experimento</b>: acerca un imán a una caja con clips, monedas, gomas y papel. ¿Cuáles atrae?</p>`,
        H6.dos("Imanes", ["ATRAE", ["hierro", "acero", "clips"], cRO], ["NO ATRAE", ["madera", "plástico", "papel"], cAZ]), ["bxE357HuQ8k", "Aprende sobre imanes y magnetismo para niños  Video educativo con el mundo de Ryan", "Ryan's World Español", 1073396]],
    ],
    "Grandes inventos de la historia": [
      ["Mujeres inventoras", `<p>Muchos inventos que usamos cada día los crearon <mark>mujeres</mark>, aunque durante mucho tiempo se habló poco de ellas.</p><ul><li><b>Mary Anderson</b> inventó el <b>limpiaparabrisas</b> en 1903, después de ver a un conductor bajar del tranvía una y otra vez para limpiar la nieve del cristal.</li><li><b>Josephine Cochrane</b> inventó el <b>lavavajillas</b>, porque sus criados rompían los platos al fregarlos.</li><li><b>Margaret Knight</b> creó una máquina para fabricar las <b>bolsas de papel</b> con el fondo plano, como las de las panaderías.</li><li><b>Hedy Lamarr</b>, actriz de cine, inventó un sistema de comunicación que hoy ayuda a que funcionen el wifi y el bluetooth.</li><li><b>Ángela Ruiz Robles</b>, maestra española, diseñó un libro mecánico que muchos consideran un antepasado del libro electrónico.</li></ul><p>Todas ellas se fijaron en un problema y buscaron una solución. ¡Cualquier persona puede ser inventora!</p>`,
        L6.filas("Inventoras", [["Anderson", "limpiaparabrisas", cAZ], ["Cochrane", "lavavajillas", cVE], ["Lamarr", "wifi", cMO], ["Ruiz Robles", "libro mecánico", cNA]])],
    ],
  },
  final: [
    ["Los robots", `<p>Un <mark>robot</mark> es una máquina que puede hacer tareas por sí sola, siguiendo las órdenes de un programa de ordenador.</p><p>Un robot tiene tres partes principales:</p><ul><li><b>Sensores</b>: son como sus sentidos. Detectan luz, sonidos, obstáculos o temperatura.</li><li><b>Un cerebro electrónico</b>: un pequeño ordenador que decide qué hacer con la información.</li><li><b>Motores</b>: mueven sus ruedas, brazos o pinzas.</li></ul><p>Hay robots de muchos tipos:</p><ul><li>Los <b>robots aspiradores</b> limpian la casa y esquivan los muebles.</li><li>En las <b>fábricas</b>, los brazos robóticos montan coches.</li><li>Los <b>robots exploradores</b>, como los que van a Marte, estudian lugares donde las personas no pueden ir.</li><li>Algunos robots ayudan a los médicos en operaciones muy delicadas.</li></ul><p>Las personas programan los robots: les dicen paso a paso lo que deben hacer. ¡En el colegio puedes aprender a programar robots sencillos!</p>`,
      H6.flujo("Robot", ["sensor|detecta", "cerebro|decide", "motor|se mueve", "tarea|hecha"], cAZ), ["aqLVM7mSy-8", "Blippi y los Robots Sobre Ruedas | Aprende a Construir Robots para niños |  Videos Educativos", "Blippi en Español", 10803718]],
    ["Molinos de viento y de agua", `<p>Hace cientos de años, antes de la electricidad, las personas ya usaban la fuerza del <b>viento</b> y del <b>agua</b> para mover máquinas: los <mark>molinos</mark>.</p><ul><li>En los <b>molinos de viento</b>, el viento empuja unas aspas grandes que giran. El giro mueve unas piedras pesadas que muelen el trigo para hacer harina.</li><li>En los <b>molinos de agua</b>, la corriente de un río hace girar una rueda, que también mueve las piedras de moler.</li></ul><p>En <b>La Mancha</b> se conservan molinos de viento blancos muy famosos, como los de Campo de Criptana y Consuegra. Aparecen en el <i>Quijote</i>, donde Don Quijote los confunde con gigantes.</p><p>Hoy usamos la misma idea en los <b>aerogeneradores</b>: molinos modernos que producen electricidad con el viento sin contaminar. Y en las centrales hidroeléctricas, el agua de los embalses mueve turbinas para producir electricidad.</p>`,
      H6.dos("Molinos", ["ANTES", ["viento o agua", "muelen trigo", "harina"], cNA], ["AHORA", ["aerogeneradores", "turbinas", "electricidad"], cVE])],
  ],
  ejemplos: [
    ["¿Atraerá un imán una lata de aluminio?", ["Los imanes atraen hierro y acero.", "El aluminio no es hierro."], "No."],
    ["¿Qué sensor necesita un robot aspirador para no chocar?", ["Tiene que detectar los obstáculos.", "Usa sensores de choque o de distancia."], "Un sensor de obstáculos."],
  ],
  errores: ["Pensar que los imanes atraen todos los metales.", "Creer que un robot piensa solo: sigue un programa que hacen las personas."],
  ejercicios: [
    ["b", "¿Qué metal atraen los imanes?", "El hierro y el acero."],
    ["b", "¿Qué inventó Mary Anderson?", "El limpiaparabrisas."],
    ["b", "Di las tres partes de un robot.", "Sensores, cerebro electrónico y motores."],
    ["b", "¿Qué muelen los molinos?", "El trigo."],
    ["b", "¿Hacia dónde señala la brújula?", "Hacia el norte."],
    ["m", "¿Qué pasa si acercas dos polos iguales?", "Se repelen."],
    ["m", "¿Por qué inventó Josephine Cochrane el lavavajillas?", "Porque se rompían los platos al fregarlos."],
    ["m", "Di dos tipos de robots.", "Aspirador, de fábrica, explorador o médico."],
    ["m", "¿Con qué confundió Don Quijote los molinos?", "Con gigantes."],
    ["m", "¿Qué son los aerogeneradores?", "Molinos que producen electricidad con el viento."],
    ["a", "Clasifica diez objetos según si los atrae un imán.", "Respuesta abierta."],
    ["a", "Inventa una máquina que resuelva un problema de tu casa.", "Respuesta abierta."],
    ["a", "Escribe las órdenes para que un robot salga de clase.", "Respuesta abierta."],
    ["a", "En la lectura, ¿cómo consiguieron que el robot se parara?", "Con un palito que apagaba el interruptor."],
  ],
  quiz: [
    ["Dos polos distintos…", ["se atraen", "se repelen", "se rompen"], "Imanes."],
    ["Hedy Lamarr ayudó a inventar lo que hoy permite…", ["el wifi", "la rueda", "el fuego"], "Inventoras."],
    ["Los sensores de un robot son como sus…", ["sentidos", "ruedas", "pilas"], "Robots."],
    ["Los molinos de Consuegra están en…", ["La Mancha", "Galicia", "Canarias"], "Molinos."],
    ["Un aerogenerador produce…", ["electricidad", "harina", "agua"], "Molinos."],
  ],
  examen: [
    ["En la lectura, ¿qué le faltaba al robot?", ["sensores", "ruedas", "motor"], "Lectura."],
    ["La maestra española que diseñó un libro mecánico fue…", ["Ángela Ruiz Robles", "Mary Anderson", "Hedy Lamarr"], "Inventoras."],
  ],
  tarjetas: [
    ["Imanes", "Atraen hierro y acero; polos iguales se repelen."],
    ["Inventoras", "Limpiaparabrisas, lavavajillas, bolsa de papel, wifi."],
    ["Robots", "Sensores, cerebro electrónico y motores."],
    ["Molinos", "Viento y agua para moler; hoy, electricidad."],
  ],
  glosario: [
    ["Imán", "Objeto que atrae el hierro."],
    ["Polo", "Extremo de un imán."],
    ["Repeler", "Empujar para separar."],
    ["Brújula", "Instrumento con aguja imantada que señala el norte."],
    ["Inventor", "Persona que crea algo nuevo."],
    ["Limpiaparabrisas", "Brazo que limpia el cristal del coche."],
    ["Robot", "Máquina que hace tareas sola siguiendo un programa."],
    ["Sensor", "Pieza que detecta lo que pasa alrededor."],
    ["Programar", "Dar órdenes paso a paso a una máquina."],
    ["Molino", "Máquina que muele con fuerza del viento o del agua."],
    ["Aspa", "Brazo del molino que mueve el viento."],
    ["Aerogenerador", "Molino moderno que produce electricidad."],
  ],
  situacion: {
    titulo: "Taller de inventores",
    reto: "La clase monta un taller para construir máquinas sencillas e inventos propios.",
    pasos: ["Experimentar con imanes y clasificar objetos.", "Investigar a una inventora y presentarla.", "Construir un robot o vehículo con material reciclado.", "Fabricar un molinillo de papel y probarlo con el viento."],
    producto: "Una exposición de inventos de la clase.",
    evaluacion: ["Explica cómo funcionan los imanes.", "Conoce a inventoras.", "Describe las partes de un robot.", "Explica los molinos."],
  },
});
