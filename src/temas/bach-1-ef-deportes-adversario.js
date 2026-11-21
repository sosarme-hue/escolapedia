// Educación Física, 1º de Bachillerato. Tema 5, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Pista de bádminton vista desde arriba: mover al rival con clear y dejada.
const pista = B.lienzo("Pista de bádminton: un clear al fondo y una dejada junto a la red obligan al rival a recorrer toda la pista", `
  <rect x="20" y="20" width="220" height="140" fill="var(--leaf)" fill-opacity=".12" stroke="var(--ink)" stroke-width="2"/>
  <path d="M130 14 V166" stroke="var(--ink)" stroke-width="3.5"/>
  <path d="M100 20 V160 M160 20 V160 M20 90 H100 M160 90 H240" stroke="var(--line)" stroke-width="1.5"/>
  <circle cx="64" cy="90" r="8" fill="var(--pen)"/>${B.tx(64, 110, "yo", { fs: 10, maxW: 30, bold: true, color: "var(--pen)" })}
  <circle cx="196" cy="90" r="8" fill="var(--red)"/>
  <path d="M72 86 C 130 30, 200 30, 226 40" fill="none" stroke="var(--sun)" stroke-width="2.5" stroke-dasharray="5 3"/>${B.tx(214, 32, "clear", { fs: 10.5, maxW: 40, bold: true, color: "var(--sun)" })}
  <path d="M72 96 C 110 140, 128 140, 140 138" fill="none" stroke="var(--leaf)" stroke-width="2.5" stroke-dasharray="5 3"/>${B.tx(152, 154, "dejada", { fs: 10.5, maxW: 44, bold: true, color: "var(--leaf)" })}
  <path d="M196 98 L 150 132 M196 82 L 222 48" stroke="var(--red)" stroke-width="1.6" stroke-dasharray="3 3"/>`, "");

// Distancias en el combate: larga, media y corta.
const distancias = B.rejilla("Distancias de combate: larga (fuera de alcance), media (alcance de ataque) y corta (cuerpo a cuerpo)", ["Distancia", "Situación", "Qué hacer"], [["Larga", "fuera de alcance", "estudiar y fintar"], ["Media", "alcance de ataque", "atacar o parar"], ["Corta", "cuerpo a cuerpo", "agarre o salir"]], { t: "La distancia en el combate" });

module.exports = B.tema({
  titulo: "Deportes de adversario",
  minutos: 100,
  objetivos: [
    "Comprender la lógica interna de los deportes de raqueta y de lucha y sus principios tácticos comunes",
    "Ejecutar los golpes básicos del bádminton y del tenis de mesa y aplicarlos con intención táctica",
    "Conocer los fundamentos del judo y de la esgrima con normas estrictas de seguridad",
    "Gestionar las emociones en el duelo y mostrar respeto, autocontrol y juego limpio",
  ],
  claves: ["adversario", "duelo", "raqueta", "bádminton", "tenis de mesa", "pádel", "judo", "esgrima", "ukemi", "posición base", "anticipación", "autocontrol"],
  pregunta: {
    texto: "En un partido de bádminton, ¿qué es más eficaz: pegar siempre lo más fuerte posible o mover al rival de un lado a otro?",
    respuesta: "Casi siempre, <mark>mover al rival</mark>. En los deportes de adversario se gana quitándole tiempo y espacio al otro: obligarle a correr al fondo y a la red, hacerle golpear en malas condiciones y aprovechar el hueco que deja. Un golpe fuerte enviado al centro de la pista se devuelve con facilidad; un golpe suave pero bien colocado puede ser imposible de alcanzar.",
  },
  lectura: {
    titulo: "Carolina Marín y el arte de leer al rival",
    html: `<p>Cuando Carolina Marín empezó a jugar al bádminton en Huelva, era casi un deporte desconocido en España. Nadie imaginaba que una chica andaluza pudiera ganar a las grandes potencias asiáticas, donde el bádminton es un deporte de masas. En 2016 ganó el oro olímpico en Río de Janeiro y sumó varios títulos mundiales y europeos.</p>
    <p>Su secreto no era solo la potencia física. Sus entrenadores destacan su capacidad para <b>leer</b> al rival: anticipar hacia dónde iba a ir el volante, detectar cuándo la otra jugadora estaba cansada o desequilibrada y cambiar el ritmo en el momento justo. Y, sobre todo, su <b>fortaleza mental</b>: volvió a la competición tras dos graves lesiones de rodilla.</p>
    <p>Los deportes de adversario, de raqueta o de lucha, son un duelo entre dos personas (o dos parejas) en el que cada acción provoca una reacción. En este tema aprenderás sus principios comunes, practicarás varios de ellos y descubrirás que, en el duelo, el respeto al rival es tan importante como la técnica.</p>`,
  },
  secciones: [3, 5, 4],
  bloques: [
    {
      h: "Qué son los deportes de adversario",
      html: `<p>Los <b>deportes de adversario</b> son aquellos en los que una persona (o una pareja) se enfrenta directamente a otra. Se dividen en dos grandes grupos:</p>
      <ul><li><b>Deportes de raqueta o de red/muro</b>: los adversarios están separados por una red o comparten una pared, y se disputan un móvil (bádminton, tenis, tenis de mesa, pádel, frontón, squash). No hay contacto físico.</li>
      <li><b>Deportes de lucha o combate</b>: hay contacto directo con el adversario, con o sin implemento (judo, lucha, kárate, taekwondo, boxeo, esgrima). El objetivo es dominar, proyectar, inmovilizar o tocar al rival respetando reglas estrictas.</li></ul>
      <p>Algunos se juegan también por parejas (dobles en bádminton, tenis o pádel), lo que añade cooperación entre compañeros.</p>
      <p>Estos deportes desarrollan la velocidad de reacción, la coordinación ojo-mano, la agilidad, la fuerza y, sobre todo, capacidades psicológicas como la concentración, la toma de decisiones rápida y la gestión de la presión. Muchos de ellos, como el pádel o el bádminton, son muy adecuados para practicar <mark>toda la vida</mark>, porque se pueden adaptar a cualquier nivel.</p>`,
      svg: B.comparar("Deportes de raqueta frente a deportes de lucha", ["Raqueta", ["sin contacto", "móvil e implemento", "red o pared", "bádminton, pádel"]], ["Lucha", ["contacto directo", "agarre o toque", "tapiz o pista", "judo, esgrima"]]),
    },
    {
      h: "La lógica interna del duelo",
      html: `<p>Lo que define a estos deportes es el <b>duelo</b>: cada acción de un jugador es a la vez un problema para el otro. Por eso la táctica gira en torno a tres variables:</p>
      <ul><li><b>Espacio</b>: enviar el móvil (o atacar) donde el rival no está, y cubrir bien el propio espacio. En raqueta, el campo propio debe defenderse solo o en pareja; en lucha, se juega con la distancia.</li>
      <li><b>Tiempo</b>: quitarle tiempo al rival (golpes rápidos, ataques sorpresivos) y ganarlo para uno mismo (golpes altos que dan tiempo a recolocarse).</li>
      <li><b>Información</b>: ocultar la propia intención (fintas, golpes con el mismo gesto) y leer la del rival (anticipación).</li></ul>
      <p>En raqueta, el tanto termina cuando el móvil bota o cae en el campo rival, sale fuera o toca la red. En lucha, cuando se consigue un punto por proyección, inmovilización o toque. El reglamento, de nuevo, define la lógica: el volante del bádminton no puede botar; la pelota del tenis de mesa debe botar una vez; en el pádel se juega con las paredes.</p>`,
      svg: B.cajas("Variables del duelo", [["Espacio", "enviar donde|no está"], ["Tiempo", "quitárselo al rival|y ganarlo tú"], ["Información", "ocultar y|anticipar"], ["Riesgo", "seguridad frente a|golpe ganador"]], { t: "Lógica del duelo" }),
    },
    {
      h: "Principios tácticos comunes",
      html: `<p>Aunque cada deporte tiene sus particularidades, hay principios que se repiten:</p>
      <ul><li><b>Posición base</b>: tras cada acción, volver a una posición central y equilibrada (rodillas flexionadas, peso en la parte delantera de los pies) desde la que llegar a cualquier punto.</li>
      <li><b>Mover al rival</b>: alternar golpes largos y cortos, a un lado y a otro, para desequilibrarle y abrir huecos.</li>
      <li><b>Atacar el punto débil</b>: el revés suele ser más flojo que el derecho; en lucha, un apoyo mal colocado.</li>
      <li><b>Variar el ritmo</b>: alternar golpes lentos y rápidos rompe la anticipación del rival.</li>
      <li><b>Construir el punto</b>: no buscar el golpe ganador desde una mala posición; preparar primero la ocasión.</li>
      <li><b>Gestionar el riesgo</b>: el error no forzado regala puntos. Golpes seguros cuando estás en apuros; riesgo cuando tienes ventaja.</li></ul>
      <p>Un buen ejercicio de observación es contar cuántos puntos se ganan por golpe ganador y cuántos por error del rival: en niveles de iniciación, <mark>la mayoría de puntos son errores</mark>, así que lo primero es ser constante.</p>`,
      svg: B.estrella("Principios tácticos de los deportes de adversario", "Duelo", ["Posición base", "Mover", "Punto débil", "Ritmo", "Construir", "Riesgo"]),
    },
    {
      h: "Bádminton: técnica básica",
      html: `<p>El <b>bádminton</b> se juega con raqueta y volante en una pista dividida por una red a 1,55 m de altura. Es el deporte de raqueta más rápido del mundo: un remate puede superar los 400 km/h.</p>
      <p>Fundamentos técnicos:</p>
      <ul><li><b>Empuñadura universal</b>: se coge la raqueta «como si se diera la mano», sin apretar, con la cara perpendicular al suelo. Para el revés se apoya el pulgar en el mango.</li>
      <li><b>Saque</b>: se golpea por debajo de la cintura. El saque corto (junto a la red) es habitual en dobles; el largo y alto, en individuales.</li>
      <li><b>Clear</b>: golpe alto y profundo al fondo de la pista rival. Da tiempo para recolocarse.</li>
      <li><b>Dejada</b>: golpe suave que cae justo detrás de la red.</li>
      <li><b>Remate</b> (<i>smash</i>): golpe descendente y potente desde arriba, para finalizar.</li>
      <li><b>Drive</b>: golpe tenso y horizontal a la altura de la red.</li></ul>
      <p>Los desplazamientos se hacen con pasos cortos y una <b>zancada</b> final hacia el volante, volviendo siempre al centro. La clave técnica es golpear el volante <mark>lo más alto y lo antes posible</mark>.</p>`,
      svg: B.rejilla("Golpes básicos del bádminton", ["Golpe", "Trayectoria", "Uso"], [["Clear", "alta y profunda", "ganar tiempo"], ["Dejada", "corta tras la red", "mover al rival"], ["Remate", "descendente", "finalizar"], ["Drive", "tensa y plana", "acelerar"], ["Saque corto", "rasante", "dobles"]], { t: "Bádminton" }),
      video: { id: "m3LJqIO2G1k", titulo: "Golpes básicos de bádminton", canal: "binorkasult", vistas: 71703 },
    },
    {
      h: "Bádminton: táctica",
      html: `<p>En <b>individuales</b>, el objetivo es mover al rival por las cuatro esquinas de la pista. La combinación clásica es <b>clear-dejada</b>: un clear profundo le obliga a ir al fondo y, si responde flojo, una dejada junto a la red le obliga a correr hacia delante. Cuando el volante llega alto y corto, es el momento del <b>remate</b>.</p>
      <p>Otras ideas tácticas:</p>
      <ul><li>Sacar largo y alto al fondo para alejar al rival de la red.</li>
      <li>Jugar hacia el revés del contrario, sobre todo al fondo, donde le cuesta más.</li>
      <li>Usar el mismo gesto de preparación para el clear y la dejada, para que el rival no sepa cuál viene (<b>engaño</b>).</li>
      <li>Si estás en apuros, un clear alto te da tiempo para volver al centro.</li></ul>
      <p>En <b>dobles</b>, las parejas se colocan en <b>ataque</b> (uno delante y otro detrás, cuando la pareja puede rematar) o en <b>defensa</b> (uno al lado del otro, cuando el rival ataca). Se gana sobre todo con saques cortos, drives y remates, y con buena comunicación entre compañeros.</p>`,
      svg: pista,
    },
    {
      h: "Tenis de mesa",
      html: `<p>El <b>tenis de mesa</b> es uno de los deportes más practicados del mundo. La pelota, de 40 mm y menos de 3 g, puede alcanzar grandes velocidades y, sobre todo, grandes <b>efectos</b>.</p>
      <p>Reglas básicas: el saque se hace con la pelota en la palma abierta, lanzándola al menos 16 cm hacia arriba y golpeándola por detrás de la mesa, de modo que bote primero en el propio campo y después en el del rival. Durante el punto, la pelota debe botar una vez en el campo contrario. Los juegos son a 11 puntos, con dos de diferencia, y el saque cambia cada dos puntos.</p>
      <p>Golpes básicos: el <b>empuje</b> (golpe sencillo y plano), el <b>corte</b> (con efecto hacia atrás) y el <b>top spin</b> (efecto hacia delante, que hace que la pelota caiga y acelere al botar). Se juega con la <b>derecha</b> y con el <b>revés</b>.</p>
      <p>Tácticamente, es fundamental <b>leer el efecto</b> del rival por el movimiento de su pala, variar efectos y colocaciones, y atacar las zonas difíciles: los ángulos y el codo del rival, donde duda entre derecha y revés.</p>`,
      svg: B.cajas("Efectos en el tenis de mesa", [["Top spin", "efecto hacia delante|cae y acelera"], ["Corte", "efecto hacia atrás|se frena"], ["Lateral", "se desvía|a un lado"], ["Plano", "sin efecto|empuje"]], { t: "Leer el efecto" }),
    },
    {
      h: "Tenis y pádel",
      html: `<p>El <b>tenis</b> y el <b>pádel</b> comparten sistema de puntuación (15, 30, 40, juego; sets a 6 juegos) y muchos golpes: derecha, revés, volea, globo y remate.</p>
      <p>El <b>pádel</b>, nacido en México y muy popular en España, se juega siempre <b>por parejas</b> en una pista cerrada con paredes de cristal. La pelota puede rebotar en las paredes tras botar en el suelo, lo que alarga los puntos y facilita el aprendizaje. El saque es por abajo, con bote previo.</p>
      <p>La táctica del pádel tiene una idea central: <mark>ganar la red</mark>. La pareja que está junto a la red ataca con voleas y remates; la que está al fondo defiende y busca recuperar la red con un buen <b>globo</b> por encima de los rivales. Los compañeros se mueven juntos, como unidos por una cuerda, y se comunican constantemente.</p>
      <p>En el tenis, en cambio, el juego desde el fondo de la pista (golpes profundos y cruzados) es lo más habitual en iniciación. Ambos deportes exigen una buena posición base, preparar pronto la raqueta y colocarse de lado al golpear.</p>`,
      svg: B.comparar("Tenis frente a pádel", ["Tenis", ["individual o dobles", "pista abierta", "juego de fondo", "saque por arriba"]], ["Pádel", ["siempre dobles", "paredes de cristal", "ganar la red", "saque por abajo"]]),
    },
    {
      h: "El juego por parejas",
      html: `<p>En los dobles de bádminton, tenis o pádel aparece un elemento nuevo: la <b>cooperación</b> con el compañero dentro del duelo. Para que una pareja funcione hace falta:</p>
      <ul><li><b>Comunicación</b>: avisar «¡mía!», «¡tuya!», «¡cambio!» y acordar antes del punto el saque o la jugada.</li>
      <li><b>Reparto del espacio</b>: delante-detrás o lado-lado, según el momento (ataque o defensa).</li>
      <li><b>Movimiento coordinado</b>: si uno se desplaza, el otro compensa para no dejar huecos.</li>
      <li><b>Pelotas al centro</b>: en caso de duda, decide quien tiene la derecha o quien está en mejor posición; hay que acordarlo.</li>
      <li><b>Apoyo emocional</b>: animar tras un error y celebrar juntos. Los reproches desestabilizan a la pareja.</li></ul>
      <p>Tácticamente, contra una pareja es eficaz jugar <b>al centro</b> (generando dudas entre ellos) y atacar al jugador más débil o más cansado, siempre con respeto. El juego por parejas es una excelente escuela de trabajo en equipo en pequeño formato.</p>`,
      svg: B.flujo("Claves del juego por parejas", ["Acordar el saque y la jugada", "Comunicarse en cada bola", "Repartir el espacio según la fase", "Moverse como unidos por una cuerda", "Animarse tras cada error"], { t: "Dobles" }),
    },
    {
      h: "Deportes de lucha: el judo",
      html: `<p>El <b>judo</b> («camino de la suavidad») fue creado en Japón por Jigoro Kano en 1882 a partir de antiguas técnicas de combate. Su principio es usar la fuerza del adversario: <mark>ceder para vencer</mark>. Es deporte olímpico y se practica sobre un tapiz llamado <b>tatami</b>, con un traje llamado <b>judogi</b>.</p>
      <p>Lo primero que se aprende en judo son las <b>caídas</b> (<i>ukemi</i>): saber caer sin hacerse daño hacia atrás, de lado y hacia delante, golpeando el tatami con el brazo para repartir el impacto y protegiendo la cabeza (barbilla al pecho). Es una habilidad útil también fuera del deporte.</p>
      <p>Las técnicas se dividen en:</p>
      <ul><li><b>Nage waza</b>: proyecciones, para derribar al rival desequilibrándolo (<i>kuzushi</i>).</li>
      <li><b>Katame waza</b>: técnicas de control en el suelo, como las inmovilizaciones (<i>osaekomi</i>).</li></ul>
      <p>En la escuela se trabaja de forma adaptada: juegos de lucha de oposición (sacar al compañero de un círculo, darle la vuelta en el suelo), caídas y alguna inmovilización, siempre con normas estrictas y respeto.</p>`,
      svg: B.flujo("Progresión de aprendizaje en judo escolar", ["Saludo y normas del tatami", "Caídas: atrás, lado, delante", "Juegos de oposición en el suelo", "Inmovilizaciones básicas", "Desequilibrios y proyecciones simples"], { t: "Judo en clase" }),
      video: { id: "-lQOI-rBMhg", titulo: "Técnicas de judo: caídas, inmovilizaciones, proyecciones y estrangulaciones", canal: "Marcos Asensio Hernández", vistas: 136648 },
    },
    {
      h: "La esgrima",
      html: `<p>La <b>esgrima</b> es un deporte de combate con armas que consiste en tocar al adversario con el arma sin ser tocado. Es uno de los pocos deportes presentes en todos los Juegos Olímpicos modernos. Hay tres armas:</p>
      <ul><li><b>Florete</b>: se toca solo con la punta y en el tronco. Tiene reglas de <b>prioridad</b> (quien inicia el ataque tiene derecho al toque).</li>
      <li><b>Espada</b>: se toca con la punta en todo el cuerpo y sin prioridad; si los dos tocan a la vez, puntúan ambos.</li>
      <li><b>Sable</b>: se toca con la punta o con el filo, de cintura para arriba, con prioridad.</li></ul>
      <p>Los combates se disputan en una pista estrecha (pista de 14 m) y los toques se registran con un sistema eléctrico. Los fundamentos son la <b>posición de guardia</b>, los desplazamientos (marcha y retirada), el <b>fondo</b> (estirarse hacia delante para atacar) y la <b>parada</b> (desviar el arma rival) seguida de <b>respuesta</b>.</p>
      <p>La clave táctica es la <b>distancia</b>: estar lo bastante lejos para no ser tocado y lo bastante cerca para atacar. En clase se puede practicar con armas de espuma y caretas, con normas de seguridad muy claras.</p>`,
      svg: distancias,
      video: { id: "XCiSLM04gE8", titulo: "Cómo atacar y defender en esgrima", canal: "DeportesUncomo", vistas: 373267 },
    },
    {
      h: "Seguridad y normas en el combate",
      html: `<p>Los deportes de lucha son muy seguros cuando se practican con normas. En clase son imprescindibles:</p>
      <ul><li><b>Saludo</b> antes y después de cada combate: expresa respeto y marca el inicio y el final.</li>
      <li><b>Señal de abandono</b>: dar dos palmadas al compañero o al suelo significa «para». Se debe soltar de inmediato.</li>
      <li><b>Zonas prohibidas</b>: no se tocan la cabeza, el cuello ni las articulaciones; no se tira del pelo ni de la ropa en zonas peligrosas.</li>
      <li><b>Higiene</b>: uñas cortas, sin anillos, pendientes ni relojes; pelo recogido; pies limpios en el tatami.</li>
      <li><b>Espacio</b>: superficie blanda y amplia, separación entre parejas y parejas de tamaño y nivel parecidos.</li>
      <li><b>Progresión</b>: primero caídas y juegos de oposición, después técnicas, siempre controlando la fuerza.</li></ul>
      <p>El objetivo no es hacer daño, sino <mark>dominar sin lesionar</mark>. Quien no controla su fuerza o pierde los nervios queda fuera del combate. Así, estos deportes enseñan autocontrol, algo que los maestros de artes marciales consideran más importante que cualquier técnica.</p>`,
      svg: B.cajas("Normas de seguridad en el combate", [["Saludo", "inicio y final"], ["Dos palmadas", "«para» y se suelta"], ["Zonas prohibidas", "cabeza, cuello"], ["Higiene", "sin anillos,|uñas cortas"]], { t: "Combatir seguros" }),
    },
    {
      h: "La mente en el duelo",
      html: `<p>En los deportes de adversario, la parte psicológica pesa mucho, porque no hay compañeros que compensen un mal momento. Algunas herramientas útiles:</p>
      <ul><li><b>Concentración en el presente</b>: jugar punto a punto, sin pensar en el error anterior ni en el marcador final.</li>
      <li><b>Rutinas</b>: los tenistas botan la pelota el mismo número de veces antes de sacar; una rutina breve entre puntos ayuda a calmarse y enfocarse.</li>
      <li><b>Respiración</b>: una respiración lenta, inspirando por la nariz y soltando el aire despacio, baja la activación cuando hay nervios.</li>
      <li><b>Diálogo interno</b> positivo: sustituir «soy un desastre» por «siguiente punto, juega al revés».</li>
      <li><b>Gestión de la frustración</b>: aceptar que se pierden puntos y partidos, analizar después con calma y aprender.</li></ul>
      <p>El duelo también pone a prueba los valores: cantar honestamente si una bola fue fuera cuando no hay árbitro, felicitar al rival, no celebrar sus errores y respetar la derrota. En los deportes de raqueta escolares, <mark>el autoarbitraje honesto</mark> es la base del juego.</p>`,
      svg: B.ciclo("Rutina mental entre puntos", "Punto", ["Soltar", "Respirar", "Planear", "Jugar"]),
    },
  ],
  figura: {
    titulo: "Deportes de adversario en cuatro ideas",
    items: [["Duelo", "espacio · tiempo", "quitar tiempo", "al rival"], ["Raqueta", "clear + dejada", "mover al rival", "y volver al centro"], ["Lucha", "ukemi", "caer seguro", "antes de proyectar"], ["Mente", "punto a punto", "rutina, respirar", "y respetar"]],
  },
  video: { id: "zSKpxB3rOB8", titulo: "Las reglas del tenis de mesa (ping pong) explicadas", canal: "Ninh Ly", vistas: 790390 },
  quiz: [
    ["Los deportes de adversario se dividen en…", ["colectivos e individuales", "de raqueta y de lucha", "de invasión y de red", "aéreos y acuáticos"], 1, "Con o sin contacto."],
    ["¿Cuál es un deporte de lucha con implemento?", ["judo", "esgrima", "bádminton", "lucha libre"], 1, "Arma: florete, espada o sable."],
    ["Mover al rival por la pista sirve para…", ["cansarte tú", "quitarle tiempo y abrir huecos", "perder puntos", "cumplir el reglamento"], 1, "Principio táctico clave."],
    ["La posición base es…", ["quedarse en la red", "una posición central y equilibrada a la que se vuelve tras golpear", "sentarse", "estar de espaldas"], 1, "Permite llegar a cualquier punto."],
    ["En iniciación, la mayoría de puntos se deciden por…", ["golpes ganadores", "errores", "el árbitro", "el saque"], 1, "Primero, constancia."],
    ["La red de bádminton está a…", ["0,9 m", "1,55 m", "2,43 m", "1 m"], 1, "Más alta que la de tenis."],
    ["El clear es un golpe…", ["corto junto a la red", "alto y profundo al fondo", "descendente", "por debajo"], 1, "Da tiempo."],
    ["La dejada cae…", ["al fondo", "justo detrás de la red", "fuera", "en el centro"], 1, "Obliga a correr adelante."],
    ["En bádminton el saque se golpea…", ["por encima de la cabeza", "por debajo de la cintura", "con bote", "con la mano"], 1, "Regla del saque."],
    ["La empuñadura universal es como…", ["agarrar un martillo", "dar la mano", "un puño cerrado", "una pinza"], 1, "Sin apretar."],
    ["En individuales de bádminton, contra el revés al fondo…", ["no hay que jugar", "suele ser una zona débil", "es una falta", "se pierde el punto"], 1, "Atacar el punto débil."],
    ["En tenis de mesa los juegos son a…", ["21", "11 con dos de diferencia", "15", "6"], 1, "Saque cada dos puntos."],
    ["El top spin da a la pelota efecto…", ["hacia atrás", "hacia delante", "nulo", "lateral siempre"], 1, "Cae y acelera."],
    ["La idea central de la táctica del pádel es…", ["jugar siempre al fondo", "ganar la red", "no usar las paredes", "sacar fuerte"], 1, "Atacar con volea y remate."],
    ["En dobles, una bola al centro genera…", ["siempre punto para ellos", "dudas entre los rivales", "falta", "nada"], 1, "Buena opción táctica."],
    ["El judo fue creado por…", ["Bruce Lee", "Jigoro Kano", "Carolina Marín", "Pierre de Coubertin"], 1, "Japón, 1882."],
    ["Ukemi significa…", ["proyección", "caída", "saludo", "inmovilización"], 1, "Lo primero que se aprende."],
    ["En florete se toca…", ["con el filo en todo el cuerpo", "con la punta en el tronco", "en la cabeza", "en las piernas"], 1, "Con prioridad."],
    ["En un combate escolar, dos palmadas significan…", ["punto", "para, suelta", "empieza", "cambio"], 1, "Señal de abandono."],
    ["Entre punto y punto, una rutina sirve para…", ["perder tiempo", "calmarse y enfocarse", "molestar al rival", "nada"], 1, "Concentración en el presente."],
  ],
  examen: [
    ["Tu rival en bádminton está pegado a la red tras una dejada. ¿Qué golpe es más eficaz?", ["otra dejada", "un clear o lob al fondo", "un saque", "un drive al cuerpo flojo"], 1, "Mueves al rival al espacio libre."],
    ["Estás en apuros, fuera de la pista. ¿Qué haces en bádminton?", ["remate", "clear alto para ganar tiempo", "dejada arriesgada", "nada"], 1, "Gestionar el riesgo."],
    ["En pádel, los rivales están en la red. Tu pareja y tú, al fondo, deberíais…", ["rematar", "jugar un globo para recuperar la red", "sacar", "salir de la pista"], 1, "Ganar la red."],
    ["Usar el mismo gesto para el clear y la dejada busca…", ["más potencia", "ocultar la intención", "ahorrar energía", "cumplir la regla"], 1, "Engaño."],
    ["Durante un juego de lucha, tu compañero da dos palmadas. Debes…", ["apretar más", "soltar inmediatamente", "esperar al profesor", "contar hasta diez"], 1, "Señal de abandono."],
    ["En espada, los dos tiradores tocan a la vez. Resultado:", ["nadie puntúa", "puntúan ambos", "puntúa quien atacó", "se repite"], 1, "Sin prioridad."],
    ["Un jugador falla un punto fácil y se lamenta durante tres puntos más. Le aconsejarías…", ["mirar el marcador", "una rutina breve y jugar punto a punto", "pegar más fuerte", "retirarse"], 1, "Concentración en el presente."],
    ["En tenis de mesa, ¿dónde es eficaz dirigir la pelota?", ["siempre al centro de la mesa", "a los ángulos y al codo del rival", "fuera", "a la red"], 1, "Zonas de duda."],
  ],
  feynman: ["Qué diferencia hay entre deportes de raqueta y de lucha", "Qué variables definen el duelo", "Cuáles son los principios tácticos comunes de los deportes de adversario", "Cómo se combinan el clear y la dejada en bádminton", "Por qué en el pádel se dice que hay que ganar la red", "Qué normas de seguridad hacen posible la lucha en clase"],
  mapa: ["DEPORTES DE ADVERSARIO", [["Duelo", "espacio · tiempo · información"], ["Raqueta", "bádminton · tenis de mesa · pádel"], ["Lucha", "judo · esgrima · normas"], ["Mente y valores", "rutinas · respeto · autoarbitraje"]]],
  tarjetas: [
    ["Deporte de adversario", "Duelo directo entre dos personas o parejas."],
    ["Raqueta", "Sin contacto; red o pared; móvil e implemento."],
    ["Lucha", "Contacto directo con reglas estrictas."],
    ["Posición base", "Central y equilibrada; volver tras cada golpe."],
    ["Clear", "Golpe alto y profundo para ganar tiempo."],
    ["Dejada", "Golpe suave que cae tras la red."],
    ["Top spin", "Efecto hacia delante: cae y acelera."],
    ["Ganar la red", "Idea táctica central del pádel."],
    ["Ukemi", "Técnica de caída segura en judo."],
    ["Florete, espada, sable", "Las tres armas de la esgrima."],
    ["Dos palmadas", "Señal para parar y soltar en lucha."],
    ["Autoarbitraje", "Cantar con honestidad las propias bolas."],
  ],
  ejemplos: [
    ["Construye un punto de bádminton individual contra un rival lento.", ["Saque largo al fondo.", "Clear profundo al revés y, tras su devolución corta, dejada junto a la red.", "Si devuelve alto, remate al lado contrario de donde está."], "Mover fondo-red y finalizar en el hueco."],
    ["Organiza una pareja de dobles de bádminton en ataque y en defensa.", ["Ataque: uno delante (red) y otro detrás (remata).", "Defensa: uno al lado del otro cubriendo cada mitad.", "Cambiar de formación según quién tenga el volante alto."], "Delante-detrás para atacar, lado-lado para defender."],
    ["Analiza un saque reglamentario de tenis de mesa.", ["Pelota en la palma abierta, por detrás de la mesa.", "Lanzarla al menos 16 cm hacia arriba sin efecto.", "Golpearla al caer de forma que bote en tu campo y después en el del rival."], "Saque válido."],
    ["Propón un juego de oposición seguro para iniciar la lucha.", ["Por parejas de tamaño similar, de rodillas en un tatami.", "Objetivo: poner al compañero boca arriba en 20 s, sin tocar cabeza ni cuello.", "Saludo al inicio y final; dos palmadas para parar."], "Juego de volteo con normas claras."],
    ["Resuelve una situación de pádel: los rivales están en la red y tú al fondo.", ["Evitar golpear fuerte al cuerpo de los voleadores.", "Jugar un globo alto y profundo por encima de ellos.", "Avanzar con tu compañero hacia la red mientras ellos retroceden."], "Globo y subir juntos a la red."],
    ["Diseña una rutina mental entre puntos.", ["Soltar: dar la espalda a la red y respirar hondo (5 s).", "Planear: decidir el saque o la primera bola (3 s).", "Jugar: mirar al rival y centrarse en el volante o la pelota."], "Rutina de soltar, respirar, planear y jugar."],
  ],
  errores: [
    "Pegar siempre fuerte y al centro en vez de mover al rival.",
    "Quedarse quieto tras golpear y no volver a la posición base.",
    "Buscar el golpe ganador desde una mala posición.",
    "Apretar demasiado la raqueta, lo que resta control y muñeca.",
    "Practicar lucha sin saber caer o sin respetar la señal de abandono.",
    "Perder los nervios tras un error o hacer trampas en el autoarbitraje.",
  ],
  ejercicios: {
    b: [
      ["Clasifica: judo, pádel, esgrima, bádminton, taekwondo, squash.", "Raqueta: pádel, bádminton, squash. Lucha: judo, esgrima, taekwondo."],
      ["Nombra las tres variables del duelo.", "Espacio, tiempo e información (y gestión del riesgo)."],
      ["Describe la posición base.", "Posición central, rodillas flexionadas, peso en la parte delantera de los pies y raqueta preparada."],
      ["¿Qué es un clear en bádminton?", "Un golpe alto y profundo al fondo de la pista rival."],
      ["¿Cuándo se usa el remate?", "Cuando el volante llega alto y corto, para finalizar el punto."],
      ["Explica cómo es la empuñadura universal.", "Coger la raqueta como si se diera la mano, sin apretar y con la cara perpendicular al suelo."],
      ["¿A cuántos puntos es un juego de tenis de mesa?", "A 11, con dos puntos de diferencia."],
      ["¿Qué efecto tiene el corte en tenis de mesa?", "Efecto hacia atrás: la pelota se frena al botar."],
      ["¿Cómo es el saque en pádel?", "Por debajo de la cintura, con un bote previo y en diagonal."],
      ["¿Qué son los ukemi?", "Las caídas del judo, para caer sin hacerse daño."],
      ["Nombra las tres armas de la esgrima.", "Florete, espada y sable."],
      ["Cita tres normas de seguridad en los juegos de lucha.", "Saludo, señal de dos palmadas para parar, no tocar cabeza ni cuello, sin anillos y uñas cortas."],
    ],
    m: [
      ["Explica por qué mover al rival es más eficaz que pegar fuerte.", "Porque le quita tiempo, le desequilibra y abre huecos; un golpe fuerte al centro se devuelve fácilmente."],
      ["Describe la combinación clear-dejada.", "Un clear profundo lleva al rival al fondo; si devuelve flojo o tarde, una dejada junto a la red le obliga a correr hacia delante."],
      ["Diferencia las formaciones de ataque y defensa en dobles de bádminton.", "Ataque: delante-detrás (uno en la red, otro remata). Defensa: lado-lado (cada uno cubre su mitad)."],
      ["¿Por qué es importante leer el efecto en tenis de mesa?", "Porque el efecto cambia el bote y la salida de la pelota; si no se lee, la devolución se va a la red o fuera."],
      ["Explica la importancia del globo en pádel.", "Permite superar a los rivales que están en la red y obligarles a retroceder, para que la pareja propia recupere la red."],
      ["¿Qué significa en judo «ceder para vencer»?", "Aprovechar la fuerza y el movimiento del adversario en lugar de oponerse a ellos frontalmente."],
      ["Explica la regla de prioridad en florete.", "Quien inicia correctamente el ataque tiene derecho al toque; el rival debe parar antes de responder."],
      ["¿Por qué la distancia es la clave de la esgrima?", "Porque permite atacar sin ser tocado: demasiado lejos no llegas; demasiado cerca te tocan."],
      ["Propón cuatro mensajes de diálogo interno positivo para un partido.", "«Siguiente punto», «juega al revés», «respira y mueve los pies», «buena decisión aunque haya fallado»."],
      ["¿Qué ventajas tiene el pádel para practicar toda la vida?", "Por parejas, socializa; las paredes alargan los puntos; se aprende rápido; se adapta a cualquier edad y nivel."],
      ["Explica por qué en dobles jugar al centro es eficaz.", "Genera dudas sobre quién debe golpear, provoca choques o huecos y fuerza errores de comunicación."],
    ],
    a: [
      ["Compara la táctica del bádminton y la de la esgrima con las variables del duelo.", "Bádminton: espacio (mover al rival), tiempo (clear para ganar, remate para quitar), información (mismo gesto). Esgrima: espacio como distancia, tiempo en la iniciativa y el contraataque, información con fintas y amagos. Ambas buscan desequilibrar al rival."],
      ["Diseña una sesión de iniciación al bádminton de 50 minutos.", "Calentamiento con juegos de volante (10'); empuñadura y golpe alto por parejas (10'); juego de clear-dejada en media pista (15'); partidos cortos con puntuación doble si se gana con dejada (10'); vuelta a la calma y reflexión (5')."],
      ["Propón adaptaciones para que un compañero en silla de ruedas juegue al bádminton en clase.", "Para-bádminton: media pista, saque desde la silla, volante más lento, compañero de dobles de pie o en silla, puntos adaptados; valorar la técnica y la táctica."],
      ["Analiza los riesgos de la lucha en la escuela y cómo minimizarlos.", "Riesgos: golpes en la cabeza, lesiones articulares, caídas mal hechas, falta de control. Medidas: tatami, caídas previas, parejas equilibradas, zonas prohibidas, señal de abandono, supervisión y progresión."],
      ["Elabora una hoja de observación de un partido de tenis de mesa.", "Registrar por punto: quién saca, golpe final, ganador o error, zona; al final, porcentaje de errores no forzados y zona más eficaz; conclusiones tácticas."],
      ["Debate: ¿debe haber árbitro en los partidos de raqueta de clase?", "A favor del autoarbitraje: honestidad, responsabilidad, autonomía. En contra: conflictos. Propuesta: autoarbitraje con un observador que media solo en dudas y valora el juego limpio."],
      ["Explica cómo influye la ansiedad en el rendimiento en un duelo y cómo regularla.", "Mucha activación tensa los músculos, empeora la técnica y la toma de decisiones; poca activación reduce la intensidad. Se regula con respiración, rutinas, diálogo interno y foco en el proceso."],
      ["Plantea la estrategia para un partido de pádel contra una pareja con un jugador mucho más fuerte.", "Jugar más bolas al jugador menos fuerte (con respeto), usar el centro, globos al fuerte para alejarlo, ganar la red y mantener la comunicación."],
    ],
  },
  glosario: [
    ["Deporte de adversario", "Deporte de duelo directo entre dos personas o parejas."],
    ["Duelo", "Enfrentamiento en que cada acción condiciona la del rival."],
    ["Posición base", "Posición central y equilibrada de espera."],
    ["Anticipación", "Prever la acción del rival antes de que ocurra."],
    ["Error no forzado", "Fallo sin presión del rival."],
    ["Volante", "Móvil del bádminton."],
    ["Clear", "Golpe alto y profundo."],
    ["Dejada", "Golpe corto junto a la red."],
    ["Remate", "Golpe descendente y potente."],
    ["Top spin", "Efecto hacia delante."],
    ["Globo", "Golpe alto por encima de los rivales."],
    ["Tatami", "Tapiz de los deportes de lucha."],
    ["Ukemi", "Técnica de caída."],
    ["Kuzushi", "Desequilibrio del rival en judo."],
    ["Fondo", "Ataque de esgrima estirándose hacia delante."],
    ["Parada", "Acción que desvía el arma rival."],
    ["Autoarbitraje", "Arbitraje honesto de los propios jugadores."],
  ],
  situacion: {
    titulo: "Torneo de raqueta con autoarbitraje",
    reto: "La clase organizará un torneo de bádminton (o pádel o tenis de mesa) individual y por parejas con autoarbitraje, en el que cada jugador analizará su juego y aplicará una mejora táctica entre rondas.",
    pasos: [
      "Acordad el reglamento adaptado, el sistema de competición y las normas de autoarbitraje y juego limpio.",
      "Practicad los golpes básicos y las combinaciones tácticas en sesiones previas.",
      "Jugad la primera ronda mientras un compañero observa y registra golpes ganadores y errores.",
      "Analiza tu hoja de observación y elige un objetivo táctico para la siguiente ronda.",
      "Terminad con una final, una valoración del juego limpio y la entrega de un premio a la deportividad.",
    ],
    producto: "Un cuadro del torneo, las hojas de observación de cada jugador con su objetivo táctico y una reflexión sobre el autoarbitraje.",
    evaluacion: [
      "Los golpes básicos se ejecutan con técnica adecuada.",
      "Se aplican principios tácticos de forma intencionada y se nota la mejora entre rondas.",
      "El análisis de la hoja de observación es correcto.",
      "Se muestra honestidad en el autoarbitraje y respeto al rival.",
    ],
  },
  familias: [
    "Jugad juntos a un deporte de raqueta (pádel, bádminton, ping-pong) en el parque o el polideportivo.",
    "Valorad la deportividad y la honestidad más que la victoria.",
    "Si practica un deporte de lucha, interesaos por las normas de seguridad del club.",
    "Ayudadle a gestionar la frustración tras una derrota hablando con calma.",
  ],
  saberes: B.SAB("Deportes de adversario: clasificación y lógica interna del duelo, principios tácticos comunes, fundamentos técnicos y tácticos del bádminton, el tenis de mesa, el tenis y el pádel, juego por parejas, iniciación al judo y la esgrima con normas de seguridad, y gestión emocional, autocontrol y juego limpio"),
  ideas: [
    "Organizar un torneo de bádminton con autoarbitraje y premio a la deportividad.",
    "Invitar a un club local de judo o esgrima a una sesión de iniciación.",
    "Grabar a cámara lenta los golpes y analizar la técnica con aplicaciones de vídeo.",
    "Usar el para-bádminton para sensibilizar sobre el deporte adaptado.",
  ],
  fuentes: [
    { t: "Federación Española de Bádminton", url: "https://www.badminton.es/" },
    B.FUENTES.WIKI("Judo", "Judo"),
    B.FUENTES.WIKI("Esgrima", "Esgrima"),
  ],
});
