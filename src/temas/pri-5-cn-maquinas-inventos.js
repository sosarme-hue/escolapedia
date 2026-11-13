// Ciencias de la Naturaleza 5º de Primaria: las máquinas y los inventos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, linea, fichas, vid, vgen, RD, PROF } = require("./_pri5b");

// Palanca: barra, punto de apoyo (triángulo), carga y fuerza.
const palanca = (xa, carga = "carga", fuerza = "fuerza") => `<path d="M24 110 L236 98" stroke="#a16207" stroke-width="7" stroke-linecap="round"/><path d="M${xa - 14} 140 L${xa} 106 L${xa + 14} 140z" fill="var(--muted)"/><rect x="26" y="78" width="30" height="26" rx="3" fill="var(--red)"/>${et(41, 70, carga, 70, { size: 11, color: COL.rojo })}${fl(226, 60, 226, 92, COL.azul, 3)}${et(226, 52, fuerza, 70, { size: 11, color: COL.azul })}${et(xa, 156, "apoyo", 70, { size: 11, color: COL.gris })}`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Las máquinas y los inventos",
  minutos: 50,
  objetivos: ["Explicar qué es una máquina y para qué sirve", "Diferenciar máquinas simples y compuestas", "Conocer la palanca, la polea, la rueda, el plano inclinado, la cuña y el tornillo", "Identificar las partes y los operadores de una máquina compuesta", "Conocer grandes inventos y su influencia en la vida de las personas", "Usar las máquinas con seguridad"],
  claves: ["máquina", "fuerza", "máquina simple", "máquina compuesta", "palanca", "punto de apoyo", "polea", "rueda", "eje", "plano inclinado", "cuña", "tornillo", "engranaje", "motor", "invento", "inventor", "patente"],
  pregunta: {
    texto: "¿Cómo pudieron los antiguos egipcios levantar bloques de piedra de varias toneladas para construir las pirámides, sin grúas ni camiones?",
    respuesta: "Usaron <mark>máquinas simples</mark>: <b>rampas</b> (planos inclinados) para subir los bloques poco a poco, <b>palancas</b> para moverlos y colocarlos, y probablemente rodillos y trineos para arrastrarlos. Las máquinas no hacen magia, pero permiten hacer trabajos muy grandes con menos esfuerzo.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una máquina?</h3><p>Una <mark>máquina</mark> es un objeto o un conjunto de piezas que fabricamos para hacer un trabajo con <b>menos esfuerzo</b>, más <b>rápido</b> o de forma más <b>cómoda</b> y segura. Las máquinas aprovechan una <b>fuerza</b> o una fuente de <b>energía</b> para producir un efecto: levantar, cortar, unir, mover, transportar o transformar.</p><p>Usamos máquinas continuamente sin darnos cuenta: unas tijeras, un abrebotellas, una bicicleta, un ascensor, una lavadora o un ordenador.</p><p>Las máquinas se clasifican en dos grandes grupos:</p><p>• <mark>Máquinas simples</mark>: tienen <b>una sola pieza</b> o muy pocas y funcionan de forma muy sencilla. Necesitan la fuerza de una persona. Son la palanca, la polea, la rueda, el plano inclinado, la cuña y el tornillo.</p><p>• <mark>Máquinas compuestas</mark>: están formadas por <b>muchas piezas</b>, a menudo combinando varias máquinas simples. Muchas funcionan con un motor y una fuente de energía, como la electricidad o la gasolina. Por ejemplo, la bicicleta, la grúa, el coche o la batidora.</p><p>Las máquinas simples se conocen desde la Antigüedad. El sabio griego <b>Arquímedes</b>, hace más de 2.000 años, estudió la palanca y dijo: «Dadme un punto de apoyo y moveré el mundo».</p>`,
      svg: svg("Máquinas simples (palanca, rueda, rampa) y compuestas (bicicleta, grúa)", `${tit("Simples y compuestas")}${cj2(14, 44, 112, 72, "Simples", "palanca, rueda, rampa", COL.verde)}${cj2(134, 44, 112, 72, "Compuestas", "bici, grúa, batidora", COL.azul)}${tx(70, 136, "pocas piezas", 110, { weight: 700, color: COL.verde })}${tx(190, 136, "muchas piezas", 110, { weight: 700, color: COL.azul })}${tx(130, 164, "Hacen el trabajo con menos esfuerzo", 236)}`),
      video: vid("MlHLI0A2KaM"),
    },
    {
      html: `<h3>La palanca</h3><p>La <mark>palanca</mark> es una barra rígida que puede girar sobre un <b>punto de apoyo</b>. En ella intervienen dos fuerzas: la <b>carga</b> o resistencia (el peso que queremos mover) y la <b>fuerza</b> que hacemos nosotros (la potencia).</p><p>El secreto de la palanca es que, cuanto <b>más lejos</b> del punto de apoyo aplicamos la fuerza, <b>menos esfuerzo</b> necesitamos. Por eso es más fácil abrir una puerta empujando junto al pomo que cerca de las bisagras.</p><p>Según dónde esté el punto de apoyo, hay tres tipos de palancas:</p><p>• <b>Primer grado</b>: el apoyo está <b>en medio</b>, entre la carga y la fuerza. Ejemplos: el balancín del parque, las tijeras, los alicates, una balanza antigua.<br>• <b>Segundo grado</b>: la <b>carga está en medio</b>, entre el apoyo y la fuerza. Ejemplos: la carretilla, el cascanueces, el abrebotellas.<br>• <b>Tercer grado</b>: la <b>fuerza está en medio</b>, entre el apoyo y la carga. Ejemplos: las pinzas de depilar, la caña de pescar, la escoba o tu propio antebrazo, que se mueve gracias al bíceps.</p><p>Las palancas de tercer grado no ahorran esfuerzo, pero permiten hacer movimientos más precisos o más amplios.</p>`,
      svg: svg("Palanca de primer grado: carga a un lado, apoyo en medio y fuerza al otro lado", `${tit("La palanca")}${palanca(100)}${tx(130, 176, "más lejos del apoyo = menos esfuerzo", 236, { weight: 700, color: COL.verde })}`),
      video: vid("lsWuFiDUMso"),
    },
    {
      html: `<h3>La rueda y la polea</h3><p>La <mark>rueda</mark> es un disco que gira alrededor de un <b>eje</b>. Es una de las máquinas más importantes de la historia. Al girar, reduce mucho el <b>rozamiento</b> con el suelo: es mucho más fácil empujar un carro con ruedas que arrastrar una caja. La rueda se inventó hace unos 5.500 años en Mesopotamia; al principio se usó para hacer vasijas de barro (el torno del alfarero) y después para los carros.</p><p>Hoy hay ruedas en casi todas las máquinas: en coches, bicicletas, trenes, relojes, carros de la compra, maletas o sillas de oficina.</p><p>La <mark>polea</mark> es una rueda con un <b>canal</b> o surco en el borde por el que pasa una <b>cuerda</b> o una cadena. Sirve para <b>levantar pesos</b>.</p><p>• La <b>polea fija</b> está sujeta a un techo o una viga. No reduce el esfuerzo, pero lo hace más cómodo, porque podemos tirar hacia abajo, aprovechando nuestro propio peso. Se usa en los pozos, en los mástiles de las banderas o en las persianas.</p><p>• Si combinamos varias poleas, unas fijas y otras que se mueven con la carga, formamos un <b>polipasto</b>, que sí reduce mucho el esfuerzo. Lo usan las grúas de construcción y los talleres para levantar motores.</p>`,
      svg: svg("Rueda con eje y polea fija que sube un cubo tirando hacia abajo", `${tit("Rueda y polea")}<circle cx="64" cy="100" r="36" fill="none" stroke="var(--ink)" stroke-width="6"/><circle cx="64" cy="100" r="5" fill="var(--ink)"/>${[0, 60, 120].map((a) => `<path d="M${(64 + 34 * Math.cos((a * Math.PI) / 180)).toFixed(1)} ${(100 + 34 * Math.sin((a * Math.PI) / 180)).toFixed(1)} L${(64 - 34 * Math.cos((a * Math.PI) / 180)).toFixed(1)} ${(100 - 34 * Math.sin((a * Math.PI) / 180)).toFixed(1)}" stroke="var(--ink)" stroke-width="2"/>`).join("")}${et(64, 156, "rueda y eje", 90, { size: 11, color: COL.azul })}<path d="M150 40 H230" stroke="#a16207" stroke-width="6"/><path d="M190 40 V52" stroke="var(--ink)" stroke-width="3"/><circle cx="190" cy="64" r="14" fill="none" stroke="var(--ink)" stroke-width="4"/><path d="M176 64 V120 M204 64 V140" stroke="#c98a00" stroke-width="2"/><path d="M164 120 h24 l-4 22 h-16z" fill="var(--pen)"/>${fl(204, 120, 204, 150, COL.rojo, 2.5)}${et(190, 168, "polea fija", 90, { size: 11, color: COL.azul })}`),
      video: vid("DML24R1x3W0"),
    },
    {
      html: `<h3>El plano inclinado, la cuña y el tornillo</h3><p>El <mark>plano inclinado</mark> es una superficie plana colocada en <b>pendiente</b>, como una rampa. Sirve para subir objetos pesados a una altura con menos esfuerzo que levantándolos en vertical. A cambio, hay que recorrer más distancia: cuanto más larga y suave es la rampa, menos fuerza necesitas. Ejemplos: las rampas para sillas de ruedas, las rampas de carga de los camiones, las carreteras de montaña que suben haciendo curvas.</p><p>La <mark>cuña</mark> está formada por dos planos inclinados unidos por su parte más estrecha, formando un filo. Sirve para <b>cortar</b>, <b>separar</b> o <b>partir</b> objetos, y también para <b>sujetar</b> (como la cuña que mantiene abierta una puerta). Son cuñas: el hacha, el cuchillo, el cincel, la punta de un clavo, los dientes incisivos e incluso la proa de un barco, que abre el agua.</p><p>El <mark>tornillo</mark> es, en realidad, un plano inclinado enrollado alrededor de un cilindro, formando una <b>rosca</b>. Al girarlo, avanza y se clava en la madera o la pared, y une piezas con mucha fuerza. También funcionan como tornillos las tapas de rosca de los botes, los sacacorchos o los taburetes que suben y bajan girando.</p>`,
      svg: svg("Plano inclinado (rampa), cuña (hacha) y tornillo (rampa enrollada)", `${tit("Rampa, cuña y tornillo")}<path d="M14 150 H90 V100z" fill="#fde68a" stroke="#a16207" stroke-width="2"/><rect x="48" y="112" width="18" height="14" fill="var(--red)" transform="rotate(-33 57 119)"/>${et(52, 170, "plano inclinado", 90, { size: 11, color: COL.sol })}<path d="M116 70 L146 70 L131 140z" fill="var(--muted)" stroke="var(--ink)" stroke-width="2"/>${et(131, 170, "cuña", 60, { size: 11, color: COL.gris })}<rect x="198" y="60" width="16" height="78" fill="#d6d3d1" stroke="var(--ink)" stroke-width="1.5"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M196 ${68 + i * 12} L216 ${62 + i * 12}" stroke="var(--ink)" stroke-width="2"/>`).join("")}<path d="M198 138 L206 152 L214 138" fill="#d6d3d1" stroke="var(--ink)" stroke-width="1.5"/>${et(206, 170, "tornillo", 60, { size: 11, color: COL.azul })}`),
    },
    {
      html: `<h3>Las máquinas compuestas</h3><p>Las <mark>máquinas compuestas</mark> están formadas por muchas piezas que trabajan juntas. Fíjate en la <b>bicicleta</b>: los pedales son palancas, las ruedas giran sobre ejes, los frenos son palancas, los tornillos sujetan las piezas y la cadena une dos ruedas dentadas para transmitir el movimiento.</p><p>En una máquina compuesta encontramos varias partes:</p><p>• La <b>fuente de energía</b>: la fuerza de una persona, la electricidad, la gasolina, el viento…<br>• El <mark>motor</mark>: transforma esa energía en movimiento. Hay motores eléctricos (batidora, lavadora, patinete) y de combustión (coche, moto).<br>• Los <mark>operadores</mark> o mecanismos: piezas que transmiten y transforman el movimiento. Por ejemplo, los <b>engranajes</b> (ruedas dentadas que encajan entre sí, como en los relojes), la <b>cadena y los piñones</b> de la bici, las <b>correas</b> o las <b>bielas</b>.<br>• La <b>estructura</b> o carcasa: sujeta y protege las piezas.<br>• Los <b>elementos de control</b>: botones, interruptores, palancas o pantallas para manejar la máquina.</p><p>Muchas máquinas actuales tienen además <b>circuitos electrónicos</b> y <b>sensores</b>, e incluso se pueden <b>programar</b>, como los robots o las lavadoras modernas.</p>`,
      svg: svg("Bicicleta: pedales (palanca), ruedas y ejes, cadena y engranajes, frenos", `${tit("La bicicleta")}<circle cx="60" cy="122" r="32" fill="none" stroke="var(--ink)" stroke-width="4"/><circle cx="200" cy="122" r="32" fill="none" stroke="var(--ink)" stroke-width="4"/><path d="M60 122 L104 122 L150 76 L200 122 M104 122 L90 76 M150 76 L104 122 M82 70 H100 M150 76 L146 62 H164" stroke="var(--red)" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="104" cy="122" r="9" fill="none" stroke="var(--pen)" stroke-width="3"/><path d="M104 122 l10 14" stroke="var(--ink)" stroke-width="4"/>${et(60, 172, "ruedas y ejes", 90, { size: 10.5, color: COL.azul })}${et(130, 150, "pedal: palanca", 90, { size: 10.5, color: COL.verde })}${et(204, 172, "cadena: engranajes", 100, { size: 10.5, color: COL.sol })}`),
    },
    {
      html: `<h3>Grandes inventos de la historia</h3><p>Un <mark>invento</mark> es algo nuevo que crea una persona para resolver un problema o satisfacer una necesidad. Algunos inventos han cambiado por completo la vida de la humanidad:</p>${tabla(["Invento", "Cuándo", "Qué cambió"], [["El fuego controlado", "hace más de 400.000 años", "calor, luz, cocinar, defenderse"], ["La rueda", "hace unos 5.500 años", "transporte y alfarería"], ["La escritura", "hace unos 5.000 años", "guardar información y leyes"], ["La imprenta", "hacia 1450 (Gutenberg)", "libros para mucha gente"], ["La máquina de vapor", "siglo XVIII", "fábricas y trenes: Revolución Industrial"], ["La bombilla", "1879", "luz eléctrica en casas y calles"], ["El teléfono, la radio y la televisión", "finales del XIX y siglo XX", "comunicación a distancia"], ["Las vacunas y los antibióticos", "1796 y 1928", "curar y prevenir enfermedades"], ["El ordenador e internet", "siglo XX", "información y comunicación al instante"]])}<p>Hay inventos que nacieron por casualidad, como la penicilina, y otros tras años de pruebas y errores. Thomas Edison probó más de mil materiales distintos antes de encontrar el filamento adecuado para su bombilla.</p>`,
      svg: svg("Línea del tiempo de inventos: rueda, imprenta, máquina de vapor, bombilla, internet", `${tit("Inventos en el tiempo")}${linea([["−3500", "rueda", COL.marron], ["1450", "imprenta", COL.rojo], ["1769", "vapor", COL.gris], ["1879", "bombilla", COL.sol], ["1990", "internet", COL.azul]])}`),
      video: vid("i53aXjnPRig"),
    },
    {
      html: `<h3>Inventos e inventores españoles</h3><p>En España también ha habido muchos inventores y científicos cuyos trabajos se usan en todo el mundo:</p><p>• <b>Isaac Peral</b> (1888) diseñó uno de los primeros <b>submarinos</b> que funcionaban con electricidad.<br>• <b>Leonardo Torres Quevedo</b> inventó el <b>telekino</b> (1903), uno de los primeros mandos a distancia por radio, una máquina que jugaba sola al ajedrez y el <b>transbordador</b> que todavía cruza las cataratas del Niágara.<br>• <b>Juan de la Cierva</b> inventó el <b>autogiro</b> (1923), antecesor del helicóptero.<br>• <b>Narciso Monturiol</b> construyó el <b>Ictíneo</b>, otro submarino pionero, en 1859.<br>• <b>Ángela Ruiz Robles</b>, maestra gallega, diseñó en 1949 la <b>enciclopedia mecánica</b>, considerada un precedente del libro electrónico.<br>• <b>Manuel Jalón</b> popularizó la <b>fregona</b> moderna con escurridor en 1956.<br>• <b>Enric Bernat</b> creó el <b>caramelo con palo</b> (el chupachups) en 1958.<br>• <b>Alejandro Finisterre</b> patentó el <b>futbolín</b> en 1937.</p><p>Cuando alguien inventa algo, puede registrarlo en una <b>patente</b>: un documento oficial que le reconoce como autor y le da derecho a fabricarlo y venderlo durante unos años.</p>`,
      svg: svg("Inventores españoles: Isaac Peral, Torres Quevedo, Juan de la Cierva y Ángela Ruiz Robles", `${tit("Inventores españoles")}${fichas([["Isaac Peral", "submarino", COL.azul], ["Torres Quevedo", "telekino", COL.rojo], ["Juan de la Cierva", "autogiro", COL.verde], ["Ángela Ruiz Robles", "enciclopedia mecánica", COL.morado]])}`),
    },
    {
      html: `<h3>Ventajas e inconvenientes de las máquinas</h3><p>Las máquinas han mejorado mucho nuestra vida:</p><p>• Reducen el <b>esfuerzo</b> y hacen el trabajo más rápido.<br>• Permiten hacer cosas imposibles con las manos: volar, viajar al espacio, operar dentro del cuerpo o ver células.<br>• Producen más <b>alimentos</b> y objetos con menos trabajo.<br>• Mejoran la <b>salud</b> (máquinas de diagnóstico como las radiografías) y la <b>comunicación</b>.<br>• Nos dan más <b>tiempo libre</b>.</p><p>Pero también tienen <b>inconvenientes</b> que debemos tener en cuenta:</p><p>• Muchas consumen energía y <b>contaminan</b> el aire, el agua o el suelo.<br>• Producen <b>residuos</b> difíciles de eliminar cuando se estropean, como la basura electrónica.<br>• Pueden causar <b>accidentes</b> si no se usan bien.<br>• Algunas sustituyen el trabajo de personas.<br>• El uso excesivo de pantallas y máquinas puede hacernos más <b>sedentarios</b>.</p><p>Por eso hay que usar las máquinas de manera <b>responsable</b>: elegir las que gastan menos, repararlas en lugar de tirarlas, reciclarlas en puntos limpios y no abusar de ellas.</p>`,
      svg: svg("Ventajas de las máquinas (menos esfuerzo, rapidez, salud) e inconvenientes (contaminación, residuos, accidentes)", `${tit("Ventajas e inconvenientes")}<rect x="14" y="40" width="112" height="132" rx="8" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"/><rect x="134" y="40" width="112" height="132" rx="8" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2"/>${et(70, 64, "Ventajas", 100, { size: 13, color: COL.verde })}${et(190, 64, "Inconvenientes", 100, { size: 13, color: COL.rojo })}${["menos esfuerzo", "más rapidez", "salud", "comunicación"].map((s, i) => tx(70, 96 + i * 18, s, 104)).join("")}${["contaminan", "residuos", "accidentes", "sedentarismo"].map((s, i) => tx(190, 96 + i * 18, s, 104)).join("")}`),
    },
    {
      html: `<h3>Seguridad y el método del inventor</h3><p>Para usar las máquinas sin peligro, sigue estas <b>normas de seguridad</b>:</p><p>• Lee las <b>instrucciones</b> y pide ayuda a un adulto la primera vez.<br>• No toques los enchufes ni los aparatos eléctricos con las <b>manos mojadas</b>.<br>• Desenchufa tirando de la clavija, no del cable.<br>• Usa las herramientas que cortan (tijeras, cúter) con cuidado, cortando siempre hacia fuera del cuerpo.<br>• No metas los dedos en piezas que se mueven, como ventiladores o engranajes.<br>• Usa la <b>protección</b> adecuada: casco en la bici, gafas en el taller.<br>• No abras ni intentes arreglar aparatos eléctricos.</p><p>¿Quieres ser inventor o inventora? Puedes seguir los pasos de un proyecto tecnológico:</p><p>1. <b>Detectar un problema</b> o una necesidad.<br>2. <b>Pensar ideas</b> y dibujar bocetos.<br>3. <b>Planificar</b>: materiales, herramientas y pasos.<br>4. <b>Construir</b> un prototipo con materiales reciclados.<br>5. <b>Probar</b> y <b>mejorar</b>: si no funciona, se cambia algo y se prueba otra vez.<br>6. <b>Presentar</b> el invento a los demás.</p><p>Recuerda que equivocarse forma parte de inventar.</p>`,
      svg: svg("Pasos para inventar: problema, ideas, planificar, construir, probar y presentar", `${tit("Los pasos del inventor")}${columna([["1. problema", COL.rojo], ["2. ideas y bocetos", COL.naranja], ["3. planificar", COL.sol], ["4. construir", COL.verde], ["5. probar y mejorar", COL.azul], ["6. presentar", COL.morado]], 130, 180, 32, 16, 7)}`),
    },
  ],
  figura: {
    titulo: "Las máquinas y los inventos en ocho ideas",
    svg: rejilla([
      ["Máquina", "trabajo con menos esfuerzo", COL.azul],
      ["Palanca", "barra + punto de apoyo", COL.marron],
      ["Rueda y polea", "girar y levantar", COL.gris],
      ["Plano inclinado", "rampa: cuña y tornillo", COL.sol],
      ["Compuesta", "motor y operadores", COL.rojo],
      ["Engranajes", "ruedas dentadas", COL.naranja],
      ["Inventos", "rueda, imprenta, internet", COL.verde],
      ["Seguridad", "manos secas, instrucciones", COL.morado],
    ], 4, 86, "Resumen de las máquinas simples, compuestas y los inventos"),
  },
  video: vgen("MlHLI0A2KaM", "máquinas simples para niños"),
  ejemplos: [
    { enunciado: "¿Qué tipo de palanca es una carretilla? Explica dónde están el apoyo, la carga y la fuerza.",
      pasos: ["El apoyo es la rueda, delante.", "La carga va en el cajón, en medio.", "La fuerza la hacemos en los mangos, detrás."],
      resultado: "Es una palanca de segundo grado: la carga está entre el apoyo y la fuerza." },
    { enunciado: "Hay que subir un piano a un camión. ¿Qué máquina simple usarías y por qué?",
      pasos: ["Levantarlo en vertical exigiría muchísima fuerza.", "Una rampa (plano inclinado) permite subirlo poco a poco.", "Cuanto más larga sea la rampa, menos fuerza hará falta."],
      resultado: "Un plano inclinado, porque reduce el esfuerzo a cambio de recorrer más distancia." },
    { enunciado: "Di qué máquina simple hay en: un hacha, la tapa de un bote, el balancín del parque, el mástil de una bandera.",
      pasos: ["El hacha corta con un filo: cuña.", "La tapa de rosca: tornillo.", "El balancín gira sobre un apoyo central: palanca de primer grado.", "La cuerda de la bandera pasa por una rueda arriba: polea."],
      resultado: "Cuña, tornillo, palanca y polea." },
  ],
  errores: [
    "Pensar que las máquinas tienen que tener motor: las simples funcionan con nuestra fuerza.",
    "Creer que la polea fija reduce el esfuerzo: solo lo hace más cómodo; el polipasto sí lo reduce.",
    "Confundir los tipos de palanca: hay que fijarse en qué elemento está en medio.",
    "Pensar que el plano inclinado ahorra trabajo «gratis»: se hace menos fuerza, pero se recorre más distancia.",
    "Creer que los inventos aparecen de golpe: casi siempre llevan muchas pruebas y mejoras.",
  ],
  ejercicios: [
    { q: "¿Qué es una máquina? Escribe tres ejemplos de tu casa.", sol: "Un objeto que nos ayuda a hacer un trabajo con menos esfuerzo o más rápido. Ejemplos: tijeras, abrelatas y lavadora." },
    { q: "Escribe la diferencia entre máquina simple y compuesta.", sol: "La simple tiene una o muy pocas piezas y funciona con nuestra fuerza; la compuesta tiene muchas piezas y suele tener motor." },
    { q: "Nombra las seis máquinas simples.", sol: "Palanca, polea, rueda, plano inclinado, cuña y tornillo." },
    { q: "¿Por qué es más fácil abrir una puerta empujando cerca del pomo?", sol: "Porque está más lejos del punto de apoyo (las bisagras) y la palanca necesita menos fuerza." },
    { q: "Clasifica las palancas: tijeras, cascanueces, pinzas de depilar.", sol: "Tijeras: primer grado. Cascanueces: segundo grado. Pinzas: tercer grado." },
    { q: "¿Para qué sirve una polea? Escribe dos usos.", sol: "Para levantar pesos con una cuerda. Usos: sacar agua de un pozo e izar una bandera." },
    { q: "¿Por qué decimos que el tornillo es un plano inclinado?", sol: "Porque su rosca es un plano inclinado enrollado alrededor de un cilindro." },
    { q: "Escribe tres máquinas simples que haya en una bicicleta.", sol: "Palancas (pedales y frenos), ruedas con ejes y tornillos." },
    { q: "Elige un gran invento y explica cómo cambió la vida de las personas.", sol: "Respuesta libre. Ejemplo: la imprenta permitió hacer muchos libros baratos, y más personas pudieron leer y aprender." },
    { q: "Escribe cuatro normas de seguridad al usar máquinas.", sol: "Leer las instrucciones, no tocar aparatos eléctricos con las manos mojadas, desenchufar tirando de la clavija y no meter los dedos en piezas que se mueven." },
  ],
  quiz: [
    { q: "Una máquina sirve para…", o: ["hacer trabajos con menos esfuerzo", "gastar más energía", "decorar"], a: 0, e: "Ahorra esfuerzo o tiempo." },
    { q: "La palanca gira sobre…", o: ["un engranaje", "el punto de apoyo", "un tornillo"], a: 1, e: "El punto de apoyo." },
    { q: "El balancín del parque es una palanca de…", o: ["segundo grado", "tercer grado", "primer grado"], a: 2, e: "Apoyo en medio." },
    { q: "La carretilla es una palanca de…", o: ["segundo grado", "primer grado", "tercer grado"], a: 0, e: "La carga en medio." },
    { q: "Una rampa es un…", o: ["tornillo", "plano inclinado", "engranaje"], a: 1, e: "Plano inclinado." },
    { q: "El filo de un hacha es una…", o: ["polea", "rueda", "cuña"], a: 2, e: "Una cuña." },
    { q: "Las ruedas dentadas que encajan entre sí son…", o: ["engranajes", "poleas", "cuñas"], a: 0, e: "Engranajes." },
    { q: "La imprenta de Gutenberg es de hacia…", o: ["1879", "1450", "el año 0"], a: 1, e: "Hacia 1450." },
    { q: "Isaac Peral diseñó un…", o: ["autogiro", "futbolín", "submarino"], a: 2, e: "Un submarino eléctrico." },
    { q: "El documento que reconoce a un inventor es la…", o: ["patente", "factura", "receta"], a: 0, e: "La patente." },
  ],
  examen: [
    { q: "El motor transforma la energía en…", o: ["luz", "movimiento", "sonido"], a: 1, e: "En movimiento." },
    { q: "El autogiro lo inventó…", o: ["Juan de la Cierva", "Edison", "Arquímedes"], a: 0, e: "En 1923." },
    { q: "La máquina de vapor impulsó…", o: ["la Prehistoria", "internet", "la Revolución Industrial"], a: 2, e: "Fábricas y trenes." },
    { q: "Un conjunto de poleas que reduce mucho el esfuerzo es un…", o: ["torno", "polipasto", "tornillo"], a: 1, e: "Polipasto." },
  ],
  feynman: ["Qué es una palanca y cuáles son sus tres tipos, con ejemplos", "Cómo nos ayudan la rueda, la polea y el plano inclinado", "Qué partes tiene una máquina compuesta, con el ejemplo de la bicicleta"],
  mapa: mapa("MÁQUINAS", "var(--pri)", [
    ["Simples", "palanca · polea · rueda", COL.verde],
    ["Más simples", "plano inclinado · cuña · tornillo", COL.sol],
    ["Compuestas", "motor · engranajes · control", COL.azul],
    ["Inventos", "rueda · imprenta · internet", COL.rojo],
  ], 250),
  tarjetas: [
    ["Máquina", "Objeto que ayuda a hacer un trabajo con menos esfuerzo."],
    ["Palanca", "Barra rígida que gira sobre un punto de apoyo."],
    ["Polea", "Rueda con canal por el que pasa una cuerda para levantar pesos."],
    ["Plano inclinado", "Rampa que permite subir pesos con menos fuerza."],
    ["Cuña", "Dos planos inclinados unidos que cortan o separan."],
    ["Engranaje", "Ruedas dentadas que transmiten el movimiento."],
    ["Motor", "Pieza que transforma la energía en movimiento."],
    ["Patente", "Documento que reconoce al autor de un invento."],
  ],
  familias: ["Buscad en la cocina máquinas simples: palancas, cuñas, tornillos y ruedas.", "Construid una polea con un carrete de hilo, una percha y un cubo pequeño.", "Investigad juntos un invento de un abuelo o abuela: ¿cómo era la vida sin él?", "Diseñad un invento con material reciclado para resolver un problema de casa."],
  profesores: PROF("Ciencias de la Naturaleza: máquinas simples y compuestas, operadores mecánicos, grandes inventos e inventores, uso seguro y responsable de las máquinas, proyecto tecnológico", ["Taller de palancas con una regla, un lápiz como apoyo y monedas como carga.", "Proyecto por equipos: construir un vehículo con ruedas y ejes con material reciclado.", "Línea del tiempo de inventos en el pasillo con aportaciones de las familias."]),
  fuentes: [RD, wiki("Máquina simple", "Máquina_simple"), wiki("Palanca", "Palanca"), wiki("Leonardo Torres Quevedo", "Leonardo_Torres_Quevedo")],
  revisado: REV,
};
