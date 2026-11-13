// Educación Física 3º de Primaria: ritmo y danza. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, vid, vgen, RD, PROF, nino, suelo, corazon, estrella, tick } = require("./_pri3b");

// Nota musical y tambor.
const nota = (x, y, c = COL.morado) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="4.5" fill="${c}" transform="rotate(-20 ${x} ${y})"/><path d="M${x + 5} ${y - 1} V${y - 26} l10 4" stroke="${c}" stroke-width="2" fill="none"/>`;
const tambor = (x, y) => `<ellipse cx="${x}" cy="${y - 24}" rx="20" ry="6" fill="#fde68a" stroke="var(--ink)" stroke-width="1.2"/><path d="M${x - 20} ${y - 24} V${y} a20 6 0 0 0 40 0 V${y - 24}" fill="${COL.rojo}" stroke="var(--ink)" stroke-width="1.2"/><path d="M${x - 20} ${y - 18} l10 16 l10 -16 l10 16 l10 -16" stroke="#fff" stroke-width="1.5" fill="none"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Ritmo y danza",
  minutos: 50,
  objetivos: ["Percibir y seguir el pulso y el ritmo de una música con el cuerpo", "Practicar la percusión corporal con palmas, chasquidos, pies y muslos", "Expresar emociones, personajes y objetos con el cuerpo y el gesto", "Aprender pasos básicos y bailes sencillos, populares y del mundo", "Crear y representar una coreografía en grupo con respeto y sin vergüenza"],
  claves: ["ritmo", "pulso", "tempo", "compás", "percusión corporal", "expresión corporal", "gesto", "mímica", "danza", "coreografía", "baile popular", "desinhibición"],
  pregunta: {
    texto: "Cuando suena una canción que te gusta, casi sin darte cuenta empiezas a mover el pie o la cabeza. ¿Por qué el cuerpo se mueve solo con la música?",
    respuesta: "Porque la música tiene <mark>ritmo</mark>: unos golpes que se repiten de forma ordenada, como los latidos del corazón. Nuestro cuerpo los siente y tiende a seguirlos. Cuando movemos el cuerpo siguiendo ese ritmo, estamos <b>bailando</b>. La danza es una de las formas más antiguas que tenemos de expresarnos y de divertirnos juntos.",
  },
  bloques: [
    {
      html: `<h3>El ritmo está en todas partes</h3><p>El <mark>ritmo</mark> es la repetición ordenada de sonidos, movimientos o silencios. Lo encontramos en todas partes:</p><p>• En nuestro <b>cuerpo</b>: los latidos del corazón, la respiración, los pasos al andar.<br>• En la <b>naturaleza</b>: las olas del mar, el día y la noche, las estaciones, el canto de algunos pájaros.<br>• En las <b>máquinas</b>: el tictac del reloj, el traqueteo del tren, el intermitente del coche.<br>• Y, sobre todo, en la <b>música</b>.</p><p>En la música distinguimos:</p><p>• El <mark>pulso</mark>: el latido regular de la música, el golpe que se repite siempre igual. Es lo que seguimos cuando damos palmas a la vez que una canción.<br>• El <mark>tempo</mark> o velocidad: la música puede ser <b>lenta</b>, como una nana, o <b>rápida</b>, como una música de fiesta.<br>• El <mark>compás</mark>: la forma en que se agrupan los pulsos, con uno más fuerte. Por ejemplo, en el vals se cuenta «UN-dos-tres, UN-dos-tres», y en una marcha, «UN-dos, UN-dos».</p><p>Para bailar bien, lo primero es <b>escuchar</b> la música y encontrar su pulso.</p>`,
      svg: svg("El pulso como latidos regulares y el compás de vals contado un-dos-tres", `${tit("Pulso y compás")}${[0, 1, 2, 3, 4, 5].map((i) => corazon(36 + i * 38, 70, i % 3 === 0 ? 1.1 : 0.75)).join("")}${["UN", "dos", "tres", "UN", "dos", "tres"].map((s, i) => et(36 + i * 38, 100, s, 34, { size: i % 3 === 0 ? 12 : 10, color: i % 3 === 0 ? COL.rojo : "var(--ink)" })).join("")}${nota(70, 150)}${nota(110, 144, COL.azul)}${nota(150, 150, COL.verde)}${tx(200, 140, "vals: 3 tiempos", 100)}`),
    },
    {
      html: `<h3>Percusión corporal</h3><p>Nuestro cuerpo es un <b>instrumento musical</b>. Con él podemos hacer muchos sonidos distintos: es la <mark>percusión corporal</mark>.</p><p>Los cuatro sonidos básicos, de más agudo a más grave, son:</p><p>• <b>Chasquidos</b> de dedos: el sonido más agudo y suave.<br>• <b>Palmas</b>: con las manos abiertas suenan fuerte; con las manos en cuenco, más grave.<br>• <b>Muslos</b>: golpes con las manos en las piernas.<br>• <b>Pies</b>: pisotones contra el suelo, el sonido más grave.</p><p>También podemos dar golpecitos en el pecho, frotar las manos, hacer sonidos con la boca o con la lengua…</p><p>Ejercicios de percusión corporal:</p><p>1. <b>El eco</b>: el profesor hace un ritmo corto y la clase lo repite exactamente igual.<br>2. <b>Seguir el pulso</b>: damos palmas al ritmo de una canción. Luego, pies. Luego, alternamos.<br>3. <b>Secuencias</b>: «pie, pie, palma», «muslo, palma, chasquido», cada vez más largas.<br>4. <b>La rueda</b>: en círculo, cada uno inventa un ritmo y los demás lo copian.<br>5. <b>Canon</b>: la mitad de la clase empieza un ritmo y la otra mitad entra un poco después.</p>`,
      svg: svg("Los cuatro sonidos de la percusión corporal: chasquidos, palmas, muslos y pies", `${tit("Percusión corporal")}${suelo(150)}${nino(70, 150, { pose: "palmas", s: 1.3, nina: true })}${columna([["chasquidos: agudo", COL.morado], ["palmas", COL.rojo], ["muslos", COL.naranja], ["pies: grave", COL.marron]], 180, 120, 38, 22, 8)}`),
      video: vid("Sd0hdP4giYI"),
    },
    {
      html: `<h3>Moverse con la música</h3><p>Cuando ya sentimos el ritmo, podemos movernos siguiendo la música. Hay muchos juegos para practicarlo:</p><p>• <b>Andar al pulso</b>: caminamos por el espacio dando un paso en cada pulso. Si la música va rápido, andamos rápido; si va lento, despacio; si para, nos paramos.</p><p>• <b>Las estatuas musicales</b>: bailamos libremente y, cuando la música se para, nos quedamos quietos como estatuas.</p><p>• <b>Los animales musicales</b>: según la música, nos movemos como un animal distinto: un elefante con música grave y lenta, un pájaro con música aguda y rápida, una serpiente con música suave.</p><p>• <b>Fuerte y suave</b>: con la música fuerte, movimientos grandes; con la suave, movimientos pequeños.</p><p>• <b>El espejo musical</b>: por parejas, uno inventa movimientos al ritmo de la música y el otro los copia.</p><p>• <b>Los globos</b>: cada uno con un globo, lo golpeamos siguiendo el pulso de la música, sin que caiga.</p><p>Al principio puede dar un poco de <b>vergüenza</b> moverse delante de los demás. Es normal. Poco a poco, jugando, se pierde la vergüenza: es lo que llamamos <mark>desinhibición</mark>. ¡Aquí nadie se ríe de nadie!</p>`,
      svg: svg("Música rápida y lenta: pasos cortos y rápidos o largos y lentos", `${tit("Rápido y lento")}${suelo(150)}${nino(60, 150, { pose: "corre", s: 1 })}${[0, 1, 2].map((i) => nota(30 + i * 22, 70, COL.rojo)).join("")}${nino(196, 150, { pose: "pie", s: 1, nina: true })}${nota(196, 70, COL.azul)}${et(60, 170, "música rápida", 90, { size: 10.5, color: COL.rojo })}${et(196, 170, "música lenta", 90, { size: 10.5, color: COL.azul })}`),
      video: vid("pnc3MJLNqc8"),
    },
    {
      html: `<h3>La expresión corporal</h3><p>Con el cuerpo no solo bailamos: también <b>comunicamos</b>. La <mark>expresión corporal</mark> es usar el cuerpo, la cara y los gestos para expresar ideas, sentimientos y emociones, sin palabras.</p><p>Podemos expresar:</p><p>• <b>Emociones</b>: alegría (saltando, con los brazos arriba y una gran sonrisa), tristeza (con la cabeza baja y los hombros caídos), miedo, enfado, sorpresa…<br>• <b>Personajes</b>: un robot (movimientos rígidos), un anciano, un superhéroe, una bailarina…<br>• <b>Animales</b>: un gato que se estira, un mono, una mariposa…<br>• <b>Objetos</b>: una lavadora que da vueltas, un árbol movido por el viento, un helado que se derrite…<br>• <b>Acciones</b>: lavarse los dientes, conducir, pescar, tocar un instrumento.</p><p>Cuando contamos algo solo con gestos, sin hablar, hacemos <mark>mímica</mark>. Es la base de juegos como <b>las películas</b>: un equipo representa con gestos el título de una película o un cuento y el otro equipo tiene que adivinarlo.</p><p>En la expresión corporal es muy importante la <b>cara</b>, que expresa muchísimo, y también la postura, la velocidad y la energía de los movimientos.</p>`,
      svg: svg("Emociones con el cuerpo: alegría, tristeza y sorpresa", `${tit("Emociones con el cuerpo")}${suelo(150)}${nino(50, 150, { pose: "arriba", s: 1.1 })}${nino(130, 150, { pose: "pie", s: 1.1, nina: true, boca: "cerrada" })}${nino(210, 150, { pose: "brazos", s: 1.1, boca: "abierta" })}${et(50, 170, "alegría", 60, { size: 10.5, color: COL.sol })}${et(130, 170, "tristeza", 60, { size: 10.5, color: COL.azul })}${et(210, 170, "sorpresa", 60, { size: 10.5, color: COL.morado })}`),
    },
    {
      html: `<h3>La danza</h3><p>La <mark>danza</mark> o baile es mover el cuerpo de forma rítmica siguiendo una música. Las personas han bailado desde siempre y en todas las culturas: para celebrar fiestas, para divertirse, para contar historias, para relacionarse con los demás o como arte.</p><p>Bailar tiene muchos beneficios:</p><p>• Mejora la <b>coordinación</b>, el <b>equilibrio</b> y el sentido del ritmo.<br>• Es un ejercicio que fortalece el <b>corazón</b> y los músculos.<br>• Nos ayuda a <b>expresar</b> lo que sentimos.<br>• Nos <b>relaciona</b> con los demás y nos hace sentir parte del grupo.<br>• ¡Nos pone de buen humor!</p><p>Hay muchos tipos de danza:</p><p>• <b>Bailes populares y tradicionales</b>: los de cada región o país, que se transmiten de generación en generación.<br>• <b>Danza clásica</b> o ballet, con puntas y saltos.<br>• <b>Danza moderna</b> y contemporánea.<br>• <b>Bailes urbanos</b>, como el hip hop o el breakdance.<br>• <b>Bailes de salón</b>, por parejas, como el vals o el pasodoble.</p><p>En la escuela aprendemos bailes sencillos y también inventamos los nuestros.</p>`,
      svg: svg("Tipos de danza: popular, clásica, urbana y de salón", `${tit("Tipos de danza")}${fichas([["Popular", "de cada región", COL.rojo], ["Clásica", "ballet", COL.morado], ["Urbana", "hip hop", COL.azul], ["De salón", "vals, pasodoble", COL.naranja]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Bailes populares de España y del mundo</h3><p>Cada región de España tiene sus <b>bailes tradicionales</b>, con su música, sus pasos y, a veces, sus trajes:</p><p>• La <mark>jota</mark>: se baila en Aragón, Navarra, Valencia, Castilla y otras regiones, con saltos y vueltas y acompañada de castañuelas.<br>• El <mark>flamenco</mark> y las <b>sevillanas</b>, en Andalucía. El flamenco es Patrimonio Cultural Inmaterial de la Humanidad.<br>• La <b>muiñeira</b>, en Galicia, al son de la gaita.<br>• La <b>sardana</b>, en Cataluña: se baila en corro, cogidos de la mano, con pasos cortos y largos.<br>• El <b>aurresku</b>, en el País Vasco.<br>• La <b>isa</b>, en Canarias.<br>• El <b>chotis</b>, en Madrid.</p><p>Y en el mundo hay bailes de todo tipo: la <b>tarantela</b> italiana, la <b>samba</b> de Brasil, los bailes en corro de Grecia, las danzas africanas con tambores, la <b>danza del león</b> china…</p><p>Muchos bailes tradicionales se bailan en <b>grupo</b>, en corro o en filas, y sirven para celebrar fiestas y estar juntos. Si hay compañeros de otros países en clase, pueden enseñarnos bailes de su tierra.</p>`,
      svg: svg("Sardana: un corro de niños cogidos de la mano con los brazos en alto", `${tit("Bailamos en corro")}${suelo(150)}${[30, 80, 130, 180, 230].map((x, i) => nino(x, 150, { pose: "arriba", s: 0.95, nina: i % 2 === 0, c: [COL.rojo, COL.azul, COL.verde, COL.naranja, COL.morado][i] })).join("")}${tambor(130, 56)}${tx(130, 172, "sardana, jota, muiñeira, sevillanas…", 230)}`),
    },
    {
      html: `<h3>Pasos básicos</h3><p>Muchos bailes se construyen con unos pocos <b>pasos básicos</b> que se combinan. Vamos a aprender algunos:</p><p>• <b>Paso marcha</b>: caminar en el sitio o avanzando, siguiendo el pulso.<br>• <b>Paso lateral</b> (o paso cruzado): un paso a un lado, juntamos el otro pie; y al otro lado.<br>• <b>Paso cruzado</b>: un pie pasa por delante del otro hacia un lado.<br>• <b>Punta-talón</b>: tocar el suelo con la punta del pie y luego con el talón, delante.<br>• <b>Galope</b>: avanzar de lado, deslizando un pie y juntando el otro, como un caballito.<br>• <b>Saltito</b> o <b>paso saltado</b>: un pequeño salto en cada paso.<br>• <b>Giro</b>: dar una vuelta completa en cuatro pasos.<br>• <b>Palmas</b>: añadir palmas en los pulsos fuertes.</p><p>Para aprender un baile se trabaja por <b>partes</b>: primero cada paso por separado y despacio, contando en voz alta («uno, dos, tres, cuatro»). Luego se unen los pasos. Por último, se hace con la música, primero lenta y luego a su velocidad.</p><p>Los bailes suelen contarse en series de <b>ocho tiempos</b>: «uno, dos, tres, cuatro, cinco, seis, siete y ocho».</p>`,
      svg: svg("Pasos básicos contados en ocho tiempos", `${tit("Cuento hasta ocho")}${[...Array(8)].map((_, i) => `<circle cx="${30 + i * 28.5}" cy="64" r="11" fill="${i % 2 ? "var(--card)" : COL.morado}" fill-opacity="${i % 2 ? 1 : 0.25}" stroke="${COL.morado}" stroke-width="1.5"/>${et(30 + i * 28.5, 68, String(i + 1), 18, { size: 11 })}`).join("")}${filas([["1-4", "paso lateral a la derecha", COL.azul], ["5-8", "paso lateral a la izquierda", COL.verde], ["y otra vez", "punta-talón y giro", COL.rojo]], 104, 22, { x: 22, wa: 70, wb: 150 })}`),
    },
    {
      html: `<h3>Creamos una coreografía</h3><p>Una <mark>coreografía</mark> es una serie de pasos y movimientos <b>organizados</b> para bailar una música concreta. Las personas que las inventan se llaman coreógrafos.</p><p>¡Vamos a crear nuestra propia coreografía en grupos de cuatro o cinco!</p><p>1. <b>Elegid la música</b>: una canción alegre con un pulso claro. El profesor puede proponer varias.<br>2. <b>Escuchadla</b> varias veces y buscad sus partes: la introducción, las estrofas y el estribillo que se repite.<br>3. <b>Inventad los pasos</b>: usad los pasos básicos aprendidos, gestos, percusión corporal, giros y saltos. Pensad un movimiento especial para el estribillo.<br>4. <b>Decidid la formación</b>: en fila, en círculo, en dos filas una frente a otra, en forma de V…<br>5. <b>Pensad el principio y el final</b>: una postura inicial y una postura final de estatua.<br>6. <b>Ensayad</b>: primero sin música y contando, luego con la música. Todos deben ir a la vez.<br>7. <b>Representad</b> la coreografía delante de la clase.</p><p>Mientras un grupo baila, el resto es un <b>público respetuoso</b>: mira en silencio, no se ríe y aplaude al final. Después podemos decir lo que más nos ha gustado de cada grupo.</p>`,
      svg: svg("Pasos para crear una coreografía: música, pasos, formación, ensayo y actuación", `${tit("Nuestra coreografía")}${columna([["1 · elegir la música", COL.morado], ["2 · inventar pasos", COL.azul], ["3 · formación", COL.verde], ["4 · ensayar", COL.naranja], ["5 · ¡actuar!", COL.rojo]], 130, 180, 34, 22, 6)}`),
    },
    {
      html: `<h3>¡Festival de baile!</h3><p>Para terminar, organizamos un pequeño <b>festival</b> en el gimnasio o en el patio. Cada grupo presenta su coreografía, y además bailamos todos juntos un <b>baile colectivo</b>, como una danza en corro o una canción con coreografía sencilla.</p><p>Ideas para que el festival salga bien:</p><p>• Cada grupo puede llevar algún <b>complemento</b> sencillo: un pañuelo, un sombrero, unas cintas de colores.<br>• Antes de actuar, <b>respirad</b> hondo para relajar los nervios.<br>• Si alguien se equivoca, ¡no pasa nada! Se sigue bailando con una sonrisa: el público casi nunca se da cuenta.<br>• Al final, todos los grupos saludan juntos.<br>• Podéis invitar a las familias o a otra clase.</p><p>Lo importante no es bailar perfecto, sino <b>disfrutar</b>, expresarse y colaborar con los compañeros. ¡Cada uno baila a su manera y todas las maneras valen!</p><p><b>Repaso:</b> ¿qué es el pulso? → El latido regular de la música. ¿Cuáles son los cuatro sonidos básicos de la percusión corporal? → Chasquidos, palmas, muslos y pies. ¿Qué es una coreografía? → Una serie organizada de pasos para bailar una música.</p>`,
      svg: svg("Festival de baile: niños saludando al público al final", `${tit("¡Festival!")}${suelo(146)}${[44, 102, 160, 218].map((x, i) => nino(x, 146, { pose: i % 2 ? "baila" : "arriba", s: 1, nina: i % 2 === 0, c: [COL.rojo, COL.azul, COL.verde, COL.morado][i] })).join("")}${[30, 230].map((x) => estrella(x, 44, 8)).join("")}${tx(130, 168, "disfrutar y expresarse: ¡todas las maneras valen!", 236)}`),
    },
  ],
  figura: {
    titulo: "Ritmo y danza en ocho ideas",
    svg: rejilla([
      ["Ritmo", "repetición ordenada", COL.morado],
      ["Pulso", "el latido de la música", COL.rojo],
      ["Tempo", "rápido o lento", COL.naranja],
      ["Percusión corporal", "palmas, pies…", COL.marron],
      ["Expresión", "emociones sin palabras", COL.azul],
      ["Danza", "moverse con música", COL.verde],
      ["Bailes populares", "jota, sardana…", COL.sol],
      ["Coreografía", "pasos organizados", COL.agua],
    ], 4, 86, "Resumen de ritmo y danza"),
  },
  video: vgen("whvpNSgzPmk", "percusión corporal y baile para niños"),
  ejemplos: [
    { enunciado: "Una canción tiene compás de tres tiempos. ¿Cómo la contarías?",
      pasos: ["Los pulsos se agrupan de tres en tres.", "El primero de cada grupo es más fuerte."],
      resultado: "«UN-dos-tres, UN-dos-tres», como un vals." },
    { enunciado: "Inventa una secuencia de percusión corporal de cuatro tiempos.",
      pasos: ["Elijo sonidos: pie, muslo, palma, chasquido.", "Pongo uno en cada tiempo.", "Lo repito varias veces seguidas."],
      resultado: "Pie · muslo · palma · chasquido (y otra vez)." },
    { enunciado: "Una coreografía tiene 4 series de 8 tiempos. ¿Cuántos tiempos son en total?",
      pasos: ["Multiplicamos 4 × 8.", "4 × 8 = 32."],
      resultado: "32 tiempos." },
  ],
  errores: [
    "Moverse sin escuchar la música y sin seguir su pulso.",
    "Querer aprender todo el baile de golpe en vez de paso a paso.",
    "Reírse de cómo bailan los compañeros.",
    "Pararse del todo al equivocarse en una actuación.",
  ],
  ejercicios: [
    { q: "¿Qué es el ritmo? Pon un ejemplo fuera de la música.", sol: "La repetición ordenada de sonidos o movimientos. Ejemplo: los latidos del corazón." },
    { q: "¿Qué es el pulso de una canción?", sol: "El latido regular de la música, el golpe que se repite siempre igual." },
    { q: "¿Qué es el tempo?", sol: "La velocidad de la música: lenta o rápida." },
    { q: "Escribe los cuatro sonidos básicos de la percusión corporal.", sol: "Chasquidos, palmas, muslos y pies." },
    { q: "¿Qué es la expresión corporal?", sol: "Usar el cuerpo y los gestos para expresar ideas y emociones sin palabras." },
    { q: "¿Qué es la mímica?", sol: "Contar algo solo con gestos, sin hablar." },
    { q: "Escribe tres beneficios de bailar.", sol: "Mejora la coordinación, fortalece el corazón y nos pone de buen humor." },
    { q: "Escribe tres bailes populares de España y su región.", sol: "La jota (Aragón), las sevillanas (Andalucía) y la sardana (Cataluña)." },
    { q: "¿Qué es una coreografía?", sol: "Una serie organizada de pasos y movimientos para bailar una música." },
    { q: "¿Cómo debe comportarse el público cuando baila un grupo?", sol: "Mirar en silencio, no reírse y aplaudir al final." },
  ],
  quiz: [
    { q: "La repetición ordenada de sonidos es el…", o: ["ritmo", "silencio", "volumen"], a: 0, e: "El ritmo." },
    { q: "El latido regular de la música es el…", o: ["pulso", "tono", "timbre"], a: 0, e: "El pulso." },
    { q: "Una nana tiene un tempo…", o: ["lento", "muy rápido", "de marcha"], a: 0, e: "Lento." },
    { q: "El vals se cuenta…", o: ["un-dos-tres", "un-dos", "un-dos-tres-cuatro-cinco"], a: 0, e: "En tres tiempos." },
    { q: "El sonido más grave de la percusión corporal es…", o: ["el pie", "el chasquido", "la palma"], a: 0, e: "El pie." },
    { q: "Contar algo solo con gestos es…", o: ["mímica", "canto", "lectura"], a: 0, e: "Mímica." },
    { q: "La jota se baila con…", o: ["castañuelas", "raquetas", "patines"], a: 0, e: "Con castañuelas." },
    { q: "La sardana es típica de…", o: ["Cataluña", "Galicia", "Canarias"], a: 0, e: "De Cataluña." },
    { q: "Los pasos organizados para una música forman una…", o: ["coreografía", "receta", "partitura de piano"], a: 0, e: "Una coreografía." },
    { q: "Si te equivocas bailando en público…", o: ["sigues con una sonrisa", "te vas corriendo", "paras la música"], a: 0, e: "Sigues bailando con una sonrisa." },
  ],
  examen: [
    { q: "El flamenco es…", o: ["Patrimonio de la Humanidad", "un deporte olímpico", "un instrumento"], a: 0, e: "Patrimonio Cultural Inmaterial de la Humanidad." },
    { q: "Perder la vergüenza al expresarse se llama…", o: ["desinhibición", "coordinación", "resistencia"], a: 0, e: "Desinhibición." },
    { q: "Los bailes suelen contarse en series de…", o: ["ocho tiempos", "cien tiempos", "un tiempo"], a: 0, e: "De ocho tiempos." },
    { q: "La muiñeira se baila al son de la…", o: ["gaita", "guitarra eléctrica", "batería"], a: 0, e: "La gaita gallega." },
  ],
  feynman: ["Qué son el ritmo, el pulso y el tempo", "Cómo hacer percusión corporal", "Cómo se crea una coreografía en grupo"],
  mapa: mapa("RITMO Y DANZA", "var(--pri)", [
    ["Ritmo", "pulso · tempo · compás", COL.morado],
    ["Cuerpo", "percusión · expresión", COL.marron],
    ["Danza", "popular · del mundo", COL.verde],
    ["Crear", "pasos · coreografía", COL.azul],
  ], 250),
  tarjetas: [
    ["Ritmo", "Repetición ordenada de sonidos o movimientos."],
    ["Pulso", "Latido regular de la música."],
    ["Tempo", "Velocidad de la música."],
    ["Percusión corporal", "Hacer música con el cuerpo."],
    ["Expresión corporal", "Comunicar con el cuerpo sin palabras."],
    ["Mímica", "Contar algo solo con gestos."],
    ["Danza", "Mover el cuerpo al ritmo de la música."],
    ["Coreografía", "Pasos organizados para una música."],
  ],
  familias: ["Bailad juntos en casa vuestras canciones favoritas.", "Enseñad a vuestro hijo o hija un baile de vuestra tierra o de vuestra juventud.", "Jugad a las películas con mímica.", "Inventad ritmos con palmas y pies y que el otro los repita."],
  profesores: PROF("Educación Física: ritmo, pulso, tempo y compás; percusión corporal; adaptación del movimiento a la música; expresión corporal de emociones, personajes y objetos; mímica; danza y bailes populares de España y del mundo; pasos básicos; creación y representación de coreografías; desinhibición", ["Ecos y cánones de percusión corporal.", "Juego de las películas con mímica.", "Creación de coreografías por grupos y festival final."]),
  fuentes: [RD, wiki("Ritmo", "Ritmo"), wiki("Danza", "Danza"), wiki("Percusión corporal", "Percusión corporal")],
  revisado: REV,
};
