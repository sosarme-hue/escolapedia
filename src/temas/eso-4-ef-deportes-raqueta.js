// Educación Física 4º ESO. Tema nivel libro. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda, flujo, figCols, piramide, barras } = require("./_hum");
const { escalon, B, QS, EJ, EX, pista, rejilla, RD } = require("./_eso4L13");

module.exports = {
  materia: "Educación Física",
  curso: "4-eso",
  titulo: "Deportes de raqueta",
  minutos: 110,
  objetivos: [
    "Clasificar los deportes de raqueta y comprender su lógica interna de red y muro",
    "Dominar la empuñadura, la posición básica y los desplazamientos en bádminton",
    "Ejecutar los golpes fundamentales del bádminton y conocer su reglamento",
    "Conocer la técnica y las reglas básicas del tenis de mesa, el pádel y el tenis",
    "Aplicar principios tácticos de individuales y dobles y valorar el juego limpio",
  ],
  claves: ["raqueta", "red", "muro", "empuñadura", "clear", "dejada", "remate", "saque", "posición base"],
  pregunta: {
    texto: "En un partido de bádminton, ¿qué es más importante: golpear muy fuerte o mandar el volante lejos de tu rival?",
    respuesta: "Casi siempre, mandarlo <mark>donde el rival no está</mark>. En los deportes de raqueta se gana moviendo al adversario de un lado a otro, de delante atrás, hasta que llega tarde o deja un hueco. La potencia ayuda, pero la precisión, la variedad y la anticipación ganan más puntos.",
  },
  lectura: {
    titulo: "Una campeona de Huelva",
    html: `<p>Carolina Marín empezó a jugar al bádminton a los ocho años en Huelva, casi por casualidad, después de acompañar a una amiga a un entrenamiento. En España era un deporte poco conocido, con pocas instalaciones y casi sin tradición. Mientras tanto, el bádminton mundial estaba dominado por jugadoras asiáticas, que crecían en países donde es uno de los deportes más populares. Muchos pensaban que una europea nunca podría ganarles. Con catorce años, Carolina se fue a vivir a Madrid para entrenar en el Centro de Alto Rendimiento.</p><p>Su trabajo dio resultado: fue tres veces campeona del mundo y, en los Juegos Olímpicos de Río de Janeiro 2016, ganó la medalla de oro. Su estilo se basa en una enorme intensidad, una preparación física excepcional, desplazamientos explosivos y una gran fortaleza mental. Tras sufrir graves lesiones de rodilla, ha vuelto a competir al máximo nivel, convirtiéndose en ejemplo de constancia. Su historia demuestra que un deporte de raqueta puede practicarse con poco material y en cualquier lugar, y que la técnica, la táctica y la cabeza se entrenan. En este tema aprenderás los fundamentos que comparten el bádminton, el tenis de mesa, el pádel y el tenis.</p>`,
  },
  bloques: [
    B("1.1 Los deportes de raqueta y su lógica interna", `<p>Los <b>deportes de raqueta</b> son deportes de <mark>oposición</mark> (individuales) o de <b>cooperación-oposición</b> (dobles) en los que se golpea un móvil (pelota o volante) con un implemento para enviarlo al campo contrario de forma que el rival no pueda devolverlo. Se clasifican según el espacio de juego:</p>${tabla(["Tipo", "Espacio", "Ejemplos"], [["De red", "cada jugador en su campo, separados por una red; participación alterna", "bádminton, tenis, tenis de mesa"], ["De muro", "espacio compartido; se golpea contra una pared", "frontón, squash"], ["Mixtos (red y muro)", "campos separados por una red y rodeados de paredes que forman parte del juego", "pádel"]])}<p>Su <b>lógica interna</b> es muy clara: como no hay contacto con el rival, la clave está en el <b>espacio y el tiempo</b>. Ganar un punto supone enviar el móvil a una zona donde el rival no llegue, o hacerlo tan rápido que no tenga tiempo de reaccionar. Para ello hay que combinar <b>precisión</b> (dirección y profundidad), <b>velocidad</b> del golpe y <b>variedad</b> de trayectorias. Además, después de cada golpe hay que volver a una posición desde la que se pueda llegar a cualquier zona. Estas ideas son comunes a todos los deportes de raqueta y se transfieren de uno a otro.</p>`,
      rejilla("Deportes de raqueta", [["Bádminton", "red · volante"], ["Tenis de mesa", "red · pelota ligera"], ["Pádel", "red y paredes"], ["Tenis", "red · pista grande"]])),
    B("1.2 Empuñadura, posición básica y desplazamientos", `<p>Todo empieza por la <b>empuñadura</b>. En bádminton se usa la <mark>empuñadura universal</mark>: se coge la raqueta como si se diera la mano, con la «V» que forman el pulgar y el índice sobre el canto del mango, sin apretar demasiado (el agarre debe ser relajado y firme solo en el momento del golpe). Para los golpes de revés se apoya el pulgar sobre la cara ancha del mango. En pádel y tenis se usa la empuñadura <b>continental</b>, muy parecida.</p><p>La <b>posición básica de espera</b> permite reaccionar en cualquier dirección: pies separados a la anchura de los hombros, rodillas ligeramente flexionadas, peso en la parte delantera de los pies, raqueta delante del cuerpo a la altura del pecho y mirada atenta al rival. Justo cuando el rival golpea, se da un pequeño salto o <b>split step</b> que activa las piernas.</p><p>Los <b>desplazamientos</b> se realizan con pasos cortos y rápidos: pasos laterales, cruzados o de persecución, y una <b>zancada final</b> (lunge) hacia el móvil con la pierna del lado de la raqueta delante. Tras cada golpe, hay que <b>volver a la posición base</b>, normalmente en el centro del propio campo. Muchos puntos no se pierden por un mal golpe, sino por llegar tarde.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Posición base en el centro de la pista y desplazamientos hacia las seis esquinas">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="50" y="18" width="160" height="128" rx="4" fill="var(--leaf)" fill-opacity=".16" stroke="var(--leaf)" stroke-width="2.5"/>
        <path d="M50 18 H 210" stroke="var(--ink)" stroke-width="4" stroke-dasharray="3 3"/>
        ${[[70, 34], [190, 34], [70, 82], [190, 82], [70, 130], [190, 130]].map(([x, y]) => `<path d="M130 84 L ${x} ${y}" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3"/><circle cx="${x}" cy="${y}" r="6" fill="var(--sun)"/>`).join("")}
        <circle cx="130" cy="84" r="11" fill="var(--red)"/>
        <g ${F} font-size="10.5" font-weight="700" text-anchor="middle"><text x="130" y="12" fill="var(--ink)">red</text><text x="130" y="108" fill="var(--red)">posición base</text><text x="130" y="166" fill="var(--muted)">golpear y volver al centro</text></g>
      </svg>`),
    B("1.3 Los golpes del bádminton", `<p>El bádminton tiene una gran variedad de <mark>golpes</mark>, que se diferencian por la altura del punto de impacto y la trayectoria del volante:</p>${tabla(["Golpe", "Cómo es", "Para qué sirve"], [["Clear (despeje)", "golpe alto por encima de la cabeza que envía el volante alto y al fondo del campo rival", "ganar tiempo y desplazar al rival atrás"], ["Dejada (drop)", "golpe suave que hace caer el volante justo detrás de la red", "obligar al rival a subir a la red"], ["Remate (smash)", "golpe potente de arriba abajo hacia el suelo rival", "terminar el punto"], ["Drive", "golpe rápido y tenso a la altura del pecho, paralelo al suelo", "atacar en dobles y acelerar"], ["Lob (globo)", "golpe de abajo arriba desde la red hacia el fondo", "defenderse de una dejada"], ["Golpes de red", "toques suaves junto a la red (net shot)", "dejar el volante muerto pegado a la red"]])}<p>Los golpes altos (clear, dejada y remate) se preparan igual: cuerpo de lado, brazo de la raqueta flexionado detrás de la cabeza, brazo libre señalando el volante; el impacto se hace en el punto más alto, delante del cuerpo, con un giro rápido del antebrazo y la muñeca. Al prepararlos igual, el rival no sabe hasta el último momento qué golpe vas a hacer: es el <b>engaño</b>, un arma táctica fundamental.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Trayectorias de los golpes de bádminton vistas de lado: clear, dejada, remate y drive">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M14 150 H 246" stroke="var(--muted)" stroke-width="2.5"/><path d="M130 150 V 104" stroke="var(--ink)" stroke-width="4"/>
        <path d="M30 70 Q 130 -30 236 146" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <path d="M30 70 Q 110 50 150 146" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        <path d="M30 60 L 196 146" fill="none" stroke="var(--red)" stroke-width="3"/>
        <path d="M30 112 L 236 112" fill="none" stroke="var(--sun)" stroke-width="3" stroke-dasharray="7 4"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="168" y="36" fill="var(--pen)">clear</text><text x="142" y="134" fill="var(--leaf)" text-anchor="end">dejada</text><text x="206" y="134" fill="var(--red)">remate</text><text x="200" y="106" fill="var(--sun)">drive</text><text x="18" y="172" fill="var(--muted)">jugador</text><text x="214" y="172" fill="var(--muted)">rival</text></g>
      </svg>`),
    B("1.4 El saque en bádminton", `<p>El <b>saque</b> inicia cada punto y tiene normas estrictas. Se realiza desde el área de saque, en <mark>diagonal</mark> hacia el área contraria, golpeando el volante por <b>debajo de la cintura</b> (en competición, por debajo de 1,15 m del suelo), con la cabeza de la raqueta por debajo de la mano y sin levantar ni arrastrar los pies hasta golpear. El volante debe golpearse primero en la base de corcho, no en las plumas.</p><p>Hay dos tipos principales de saque. El <b>saque corto</b>, de revés o de derecha, empuja suavemente el volante para que pase rozando la red y caiga en la parte delantera del área de saque rival; es el más usado en dobles y en alto nivel, porque impide que el rival ataque. El <b>saque largo</b>, de derecha, envía el volante alto y al fondo del área; se usa sobre todo en individuales para alejar al rival de la red. El jugador que recibe debe estar en el área diagonal y no puede moverse hasta que el volante sea golpeado.</p><p>El lado desde el que se saca depende de la puntuación del que saca: si tiene un número <b>par</b> de puntos, saca desde el área <b>derecha</b>; si es <b>impar</b>, desde la <b>izquierda</b>. Es una regla sencilla que ayuda a no equivocarse durante el partido.</p>`,
      dos("Tipos de saque", ["Corto", ["rasante a la red", "cae delante", "evita el ataque", "dobles"], "var(--leaf)"], ["Largo", ["alto", "cae al fondo", "aleja al rival", "individuales"], "var(--pen)"])),
    B("1.5 Reglamento del bádminton", `<p>El bádminton se juega en una pista de <b>13,40 × 6,10 m</b> (en individuales se usa un pasillo más estrecho: 5,18 m), con una red de 1,55 m de altura en los postes y 1,524 m en el centro. Se juega con un <b>volante</b> de plumas o de plástico y raquetas muy ligeras (unos 85 gramos).</p>${tabla(["Aspecto", "Regla"], [["Puntuación", "todos los puntos cuentan, saque quien saque (sistema de «punto directo»)"], ["Set", "a 21 puntos; con 20 iguales, hay que ganar por 2 (máximo 30)"], ["Partido", "al mejor de 3 sets"], ["Saque", "lo hace quien gana el punto anterior"], ["Falta", "volante fuera, en la red, que no pasa, tocar la red con la raqueta o el cuerpo, golpear dos veces, invadir el campo rival"], ["Volante en la línea", "es bueno (dentro)"]])}<p>En las modalidades de <b>dobles</b> (masculino, femenino y mixto), la pista es más ancha, pero el área de saque es más corta en el fondo. Los compañeros se organizan en dos posiciones: en <b>ataque</b>, uno delante y otro detrás (para rematar y cerrar la red); en <b>defensa</b>, uno al lado del otro (lado a lado) para cubrir los remates. La rotación entre ambas formaciones exige comunicación constante. En la modalidad mixta, normalmente la jugadora controla la red y el jugador remata desde el fondo, aunque cada pareja se adapta a sus puntos fuertes.</p>`,
      pista("Dobles: ataque (delante-detrás)", "red", [[100, 81, "var(--red)"], [56, 81, "var(--red)"], [176, 50, "var(--pen)"], [176, 112, "var(--pen)"]], "rivales azules: defensa lado a lado"),
      { id: "7DombrMeRv4", titulo: "Reglas de bádminton en dobles: cómo puntuar e intercambiar posiciones", canal: "RacketSports", vistas: 496797, megusta: 0 }),
    B("1.6 Principios tácticos de los deportes de raqueta", `<p>Aunque cada deporte tiene sus particularidades, todos los de red comparten unos <mark>principios tácticos</mark>:</p><p><b>1. Mover al rival.</b> Enviar el móvil lejos de él, alternando zonas: delante-detrás y derecha-izquierda. Cuanto más se desplace, más se cansa y más probable es que deje un hueco o llegue tarde.</p><p><b>2. Recuperar la posición base.</b> Tras cada golpe, volver al centro para cubrir todo el campo. Quien se queda mirando su golpe pierde el siguiente.</p><p><b>3. Variar los golpes.</b> Cambiar la altura, la velocidad, la dirección y el efecto para que el rival no se adapte. Preparar distintos golpes de la misma manera (engaño).</p><p><b>4. Atacar los espacios libres y los puntos débiles</b> del rival, normalmente el revés o la zona detrás de su cuerpo.</p><p><b>5. Elegir entre atacar y defender</b> según la situación: si el móvil llega alto y cerca, atacar (remate); si llega bajo o lejos, defender con un golpe que dé tiempo (clear, lob). Arriesgar en mala posición produce errores no forzados.</p><p>En <b>dobles</b>, se añade la <b>cooperación</b>: cubrir el espacio del compañero, comunicarse («¡mía!», «¡tuya!»), y enviar el móvil entre los dos rivales para provocar dudas.</p>`,
      rejilla("Principios tácticos", [["Mover al rival", "delante-detrás"], ["Volver al centro", "tras cada golpe"], ["Variar", "altura y velocidad"], ["Huecos", "y punto débil"], ["Atacar o defender", "según el móvil"], ["En dobles", "comunicarse"]])),
    B("1.7 El tenis de mesa", `<p>El <b>tenis de mesa</b> o <i>ping-pong</i> se juega sobre una mesa de <b>2,74 × 1,525 m</b> a 76 cm de altura, con una red de 15,25 cm y una pelota de 40 mm y solo 2,7 gramos. Es uno de los deportes más rápidos: la pelota puede superar los 100 km/h y el tiempo de reacción es mínimo.</p><p>Hay dos empuñaduras: la <b>clásica o europea</b> (como un apretón de manos, con el índice en el reverso de la pala), la más usada, y la <b>de lapicero o asiática</b>. Los golpes básicos son el <b>empuje</b> (golpe sencillo, de revés o de derecha, para devolver con seguridad), el <b>corte</b> (golpe de arriba abajo que da efecto hacia atrás), el <b>top spin</b> o liftado (de abajo arriba, con efecto hacia delante, el golpe de ataque por excelencia) y el <b>remate</b> (golpe fuerte a pelotas altas).</p>${tabla(["Regla", "Contenido"], [["Puntuación", "juegos a 11 puntos, con diferencia de 2; partido al mejor de 3, 5 o 7 juegos"], ["Saque", "la pelota se lanza al menos 16 cm desde la palma abierta y debe botar primero en el propio campo y luego en el rival"], ["Turno de saque", "cada jugador saca dos veces seguidas (una a una con 10 iguales)"], ["Dobles", "el saque es en diagonal y los compañeros golpean de forma alterna"]])}`,
      dos("Golpes del tenis de mesa", ["Defensivos", ["empuje", "corte (efecto atrás)", "bloqueo", "devolver seguro"], "var(--bac)"], ["De ataque", ["top spin", "remate", "golpe rápido", "terminar el punto"], "var(--red)"]),
      { id: "wR0xRiRcBrs", titulo: "Tenis de mesa: golpes básicos", canal: "Iniciasport", vistas: 312346, megusta: 0 }),
    B("1.8 El pádel", `<p>El <b>pádel</b> nació en México en 1969 y se ha convertido en uno de los deportes más practicados en España. Se juega siempre <mark>por parejas</mark> en una pista cerrada de <b>20 × 10 m</b>, rodeada de paredes de cristal y malla metálica que forman parte del juego, con una pala sin cuerdas y una pelota similar a la de tenis pero con menos presión.</p><p>Reglas básicas: el <b>saque</b> se hace por debajo de la cintura, tras dejar botar la pelota detrás de la línea de saque, en diagonal hacia el cuadro de saque contrario; hay dos oportunidades. La pelota puede tocar las paredes del propio campo después de botar, y se puede devolver tras rebotar en ellas, pero debe pasar al campo rival <b>sin tocar antes la pared contraria</b> y debe botar en el suelo antes de tocar las paredes rivales. Se puede golpear de volea (sin bote), excepto al resto del saque. La puntuación es igual que la del tenis.</p><p>La táctica del pádel se basa en <b>ganar la red</b>: la pareja que está junto a la red, en posición de volea, domina el punto. Para echar a los rivales de la red se usa el <b>globo</b>, el golpe más importante del pádel. Desde el fondo se juega con paciencia, usando las paredes, hasta encontrar el momento de subir. Las paredes dan una segunda oportunidad: muchas pelotas que parecen perdidas se recuperan tras el rebote.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Pista de pádel vista desde arriba con paredes, red y parejas: una en la red y otra en el fondo; un globo pasa por encima">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="24" y="22" width="212" height="118" rx="4" fill="var(--bac)" fill-opacity=".14" stroke="var(--ink)" stroke-width="4"/>
        <path d="M130 16 V 146" stroke="var(--ink)" stroke-width="4" stroke-dasharray="3 3"/>
        <path d="M58 22 V 140 M 202 22 V 140 M 58 81 H 202" stroke="var(--bac)" stroke-width="1.5"/>
        ${[[110, 52, "var(--red)"], [110, 110, "var(--red)"], [218, 52, "var(--pen)"], [218, 110, "var(--pen)"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="#fff" stroke-width="1.5"/>`).join("")}
        <path d="M200 70 Q 130 -6 52 64" fill="none" stroke="var(--sun)" stroke-width="2.5" stroke-dasharray="5 4"/>
        <g ${F} font-size="10.5" font-weight="700"><text x="66" y="162" fill="var(--red)">pareja en la red</text><text x="170" y="162" fill="var(--pen)">pareja al fondo</text><text x="30" y="44" fill="var(--sun)">globo</text></g>
      </svg>`,
      { id: "B5uIBSTf7Rc", titulo: "Aprende pádel: normas básicas", canal: "Mundo Deportivo", vistas: 1311217, megusta: 0 }),
    B("1.9 El tenis", `<p>El <b>tenis</b> se juega en una pista de <b>23,77 × 8,23 m</b> en individuales (10,97 m de ancho en dobles) sobre distintas superficies: tierra batida, hierba o pista dura, cada una con un bote y una velocidad diferentes. Su <mark>puntuación</mark> es peculiar y se comparte con el pádel:</p>${tabla(["Unidad", "Cómo se gana"], [["Punto", "0 («nada»), 15, 30, 40 y juego"], ["Iguales y ventaja", "con 40 iguales, hay que ganar dos puntos seguidos: el primero da «ventaja»"], ["Juego", "ganar 4 puntos con diferencia de 2"], ["Set", "ganar 6 juegos con diferencia de 2; con 6 iguales, se juega un «tie-break» a 7 puntos"], ["Partido", "al mejor de 3 sets (5 en algunos torneos masculinos)"]])}<p>Los golpes fundamentales son la <b>derecha</b> y el <b>revés</b> (a una o dos manos) desde el fondo de la pista, la <b>volea</b> (golpe sin bote junto a la red), el <b>saque</b> (por encima de la cabeza, con dos oportunidades, al cuadro de saque en diagonal), el <b>globo</b> y el <b>remate</b>. En el tenis la pelota solo puede botar una vez. España tiene una gran tradición en este deporte, con figuras como Rafael Nadal, Arantxa Sánchez Vicario, Garbiñe Muguruza o Carlos Alcaraz. Para iniciarse, existen pelotas más blandas y pistas reducidas (minitenis) que facilitan el aprendizaje.</p>`,
      barras("Tamaño de pista (largo en metros)", [["tenis de mesa", 2.74, "var(--bac)"], ["bádminton", 13.4, "var(--pen)"], ["pádel", 20, "var(--sun)"], ["tenis", 23.77, "var(--leaf)"]], 25)),
    B("1.10 Otros deportes de raqueta y juegos con implemento", `<p>Además de los deportes más conocidos, existen muchas modalidades que se pueden practicar en el instituto, en la playa o en el parque con poco material:</p>${tabla(["Modalidad", "Características"], [["Palas", "juego de playa cooperativo: mantener la pelota en el aire el máximo tiempo"], ["Frontón y pelota vasca", "deporte de muro tradicional del norte de España, con pala, mano o cesta"], ["Squash", "se juega en una sala cerrada golpeando la pelota contra la pared frontal por turnos"], ["Speedminton o crossminton", "mezcla de bádminton y squash sin red, con un volante más pesado, al aire libre"], ["Pickleball", "con pala y pelota de plástico perforada en pista pequeña; muy popular en EE. UU."], ["Shuttleball", "bádminton adaptado con raquetas cortas y volante grande, para iniciación"]])}<p>Estas modalidades son útiles porque desarrollan las mismas <b>habilidades</b>: coordinación óculo-manual, cálculo de trayectorias, anticipación, velocidad de reacción y desplazamientos. Las <b>palas</b> y otros juegos cooperativos (contar cuántos golpes seguidos aguanta la pareja) son ideales para iniciarse sin presión. Muchos se pueden practicar con material reciclado o fabricado en clase: raquetas de cartón, volantes con tapones o pelotas de papel. También existen versiones adaptadas para personas con discapacidad, como el tenis en silla de ruedas o el para-bádminton, ambos paralímpicos.</p>`,
      rejilla("Más deportes con raqueta", [["Palas", "cooperativo"], ["Frontón", "de muro"], ["Squash", "sala cerrada"], ["Speedminton", "sin red"], ["Pickleball", "pista pequeña"], ["Para-bádminton", "adaptado"]])),
    B("1.11 Seguridad, calentamiento y prevención", `<p>Los deportes de raqueta exigen <mark>movimientos explosivos</mark>, cambios de dirección y golpes repetidos con el mismo brazo, por lo que tienen riesgos específicos. Las lesiones más frecuentes son los <b>esguinces de tobillo</b> (por apoyos bruscos y cambios de dirección), las lesiones de <b>rodilla</b> en la zancada, la <b>epicondilitis</b> o «codo de tenista» (inflamación de los tendones del codo por golpes repetidos con mala técnica o material inadecuado) y las molestias de <b>hombro</b> en saques y remates.</p><p>Para prevenirlas: realizar un <b>calentamiento</b> que incluya movilidad de muñeca, codo y hombro, desplazamientos laterales y golpes suaves progresivos; usar <b>calzado</b> adecuado con buena sujeción lateral (las zapatillas de correr no sirven para los cambios de dirección); elegir una raqueta con el peso y el grosor de mango apropiados; aprender bien la <b>técnica</b> (el golpe nace de las piernas y el tronco, no solo del brazo); y fortalecer la musculatura de hombro y antebrazo. En clase hay que respetar las <b>normas de seguridad</b>: mantener distancia entre parejas, no cruzar por pistas en juego, no lanzar la raqueta y avisar antes de golpear si hay alguien cerca. En pádel, cuidado con las paredes y con los golpes de un compañero junto a ti.</p>`,
      filas("Prevenir lesiones", [["Calentar", "muñeca, codo, hombro", "var(--sun)"], ["Calzado", "con sujeción lateral", "var(--pen)"], ["Técnica", "piernas y tronco", "var(--leaf)"], ["Material", "peso y mango adecuados", "var(--bac)"], ["Normas", "distancia y aviso", "var(--red)"]])),
    B("1.12 Valores, deporte para toda la vida y competición", `<p>Los deportes de raqueta son <mark>deportes para toda la vida</mark>: se pueden practicar a cualquier edad, con pocas personas, en instalaciones públicas y adaptando la intensidad. Son una excelente opción para mantener un estilo de vida activo después del instituto, y el pádel y el tenis de mesa son muy populares entre personas adultas e incluso mayores.</p><p>También transmiten <b>valores</b> importantes. En muchos de ellos, especialmente en categorías de iniciación y en el bádminton o el tenis aficionado, son los propios jugadores quienes cantan las bolas dudosas, lo que exige honestidad: si no estás seguro de que la pelota ha salido, se da por buena. El saludo a la pareja rival y al árbitro antes y después del partido, el respeto a los turnos y la aceptación del resultado forman parte de la cultura de estos deportes. En dobles se aprende a animar al compañero tras un error, en lugar de reprocharle.</p><p>Si te interesa la <b>competición</b>, existen ligas escolares, clubes y federaciones de bádminton, tenis de mesa, pádel y tenis en casi todas las comunidades. Y si prefieres el ocio, basta con un par de raquetas y un espacio para disfrutar. Lo importante es encontrar una actividad que te guste y te mantenga activo.</p>`,
      escalon("Valores en la pista", [["honestidad", "var(--pen)"], ["respeto al rival", "var(--leaf)"], ["apoyo al compañero", "var(--sun)"], ["deporte para toda la vida", "var(--red)"]])),
  ],
  figura: {
    titulo: "Los deportes de raqueta",
    svg: figCols("Los deportes de raqueta", [["Bádminton", ["clear", "dejada", "remate"], "var(--pen)"], ["Tenis de mesa", ["empuje", "corte", "top spin"], "var(--red)"], ["Pádel", ["globo", "volea", "paredes"], "var(--sun)"], ["Táctica", ["mover al rival", "volver al centro", "variar"], "var(--leaf)"]]),
  },
  video: { id: "SF8G--iZN4U", titulo: "Bádminton para principiantes: introducción a los golpes básicos", canal: "KC Badminton", vistas: 3016771, megusta: 25230, busqueda: "bádminton golpes básicos" },
  ejemplos: [
    EX("En bádminton, el que saca tiene 7 puntos. ¿Desde qué lado saca?", ["7 es impar.", "Con número impar se saca desde el área izquierda.", "El saque va en diagonal al área derecha del rival."], "Desde la izquierda."),
    EX("Tu rival está pegado a la red tras una dejada. ¿Qué golpe eliges?", ["El rival está adelantado.", "El espacio libre está al fondo de su campo.", "Un clear o un lob profundo lo obliga a retroceder."], "Golpe alto y profundo al fondo."),
    EX("El volante te llega alto y cerca de la red. ¿Atacas o defiendes?", ["Está alto y en buena posición.", "Es momento de atacar.", "Remate hacia el suelo, lejos del rival."], "Remate."),
    EX("Un partido de tenis va 40-40. ¿Cómo se gana el juego?", ["Es «iguales».", "Hay que ganar dos puntos seguidos.", "El primero da ventaja; si se gana el siguiente, juego; si se pierde, vuelta a iguales."], "Ventaja y juego."),
    EX("En tenis de mesa, ¿es válido este saque? Lanzo la pelota desde la palma 5 cm y la golpeo directamente al campo rival.", ["La pelota debe lanzarse al menos 16 cm.", "Debe botar primero en el propio campo y luego en el rival.", "Este saque incumple ambas reglas."], "No es válido: es falta."),
    EX("En pádel, la pareja rival está en la red. ¿Cómo los sacas de ahí?", ["Desde el fondo es difícil atacar.", "El golpe adecuado es el globo.", "Si es profundo, deben retroceder y podemos subir a la red."], "Con un globo profundo."),
  ],
  errores: [
    "Agarrar la raqueta como una sartén o apretarla demasiado.",
    "Quedarse mirando el golpe en lugar de volver a la posición base.",
    "Intentar ganar todos los puntos con golpes fuertes desde mala posición.",
    "Golpear el volante con el brazo estirado por detrás del cuerpo.",
    "En pádel, golpear para que la pelota toque la pared rival antes del suelo.",
    "Cantar «fuera» una bola dudosa para ganar el punto.",
  ],
  ejercicios: EJ([
    ["Clasifica bádminton, frontón y pádel según el espacio de juego.", "Bádminton: red. Frontón: muro. Pádel: mixto (red y paredes)."],
    ["¿Qué empuñadura se usa en bádminton?", "La universal, como si se diera la mano."],
    ["Describe la posición básica de espera.", "Pies separados, rodillas flexionadas, peso delante, raqueta delante del cuerpo y mirada al rival."],
    ["¿Qué es el clear?", "Golpe alto que envía el volante al fondo del campo rival."],
    ["¿Qué es la dejada?", "Golpe suave que hace caer el volante justo detrás de la red."],
    ["¿Cómo debe golpearse el volante en el saque?", "Por debajo de la cintura, en diagonal y sin levantar los pies."],
    ["¿A cuántos puntos es un set de bádminton?", "A 21 puntos, con diferencia de 2 (máximo 30)."],
    ["¿A cuántos puntos es un juego de tenis de mesa?", "A 11 puntos, con diferencia de 2."],
    ["¿Cuántos jugadores hay en una pista de pádel?", "Cuatro: se juega por parejas."],
    ["Escribe la secuencia de puntos del tenis.", "0, 15, 30, 40 y juego."],
    ["¿Qué es la epicondilitis?", "La inflamación de los tendones del codo, el «codo de tenista»."],
    ["Escribe dos deportes de raqueta practicables en la playa o el parque.", "Palas y speedminton."],
  ], [
    ["Explica la lógica interna de los deportes de raqueta de red.", "Sin contacto, cada uno en su campo, participación alterna: se gana enviando el móvil donde el rival no llega o tan rápido que no reacciona."],
    ["¿Para qué sirve el split step?", "Es un pequeño salto justo cuando el rival golpea que activa las piernas para reaccionar más rápido en cualquier dirección."],
    ["¿Por qué conviene preparar igual el clear, la dejada y el remate?", "Para engañar al rival: no sabe qué golpe vamos a hacer hasta el último momento."],
    ["Compara el saque corto y el largo en bádminton.", "Corto: rasante, cae delante, evita el ataque, típico de dobles. Largo: alto al fondo, aleja al rival de la red, típico de individuales."],
    ["Explica la regla de par e impar en el saque del bádminton.", "Con puntuación par se saca desde la derecha; con impar, desde la izquierda."],
    ["Explica las formaciones de ataque y defensa en dobles de bádminton.", "Ataque: uno delante y otro detrás. Defensa: lado a lado para cubrir los remates."],
    ["Explica tres principios tácticos de los deportes de red.", "Mover al rival, recuperar la posición base y variar los golpes (también atacar espacios libres y elegir entre atacar y defender)."],
    ["Diferencia el corte y el top spin en tenis de mesa.", "Corte: de arriba abajo, efecto hacia atrás, defensivo. Top spin: de abajo arriba, efecto hacia delante, de ataque."],
    ["Explica cómo se saca en tenis de mesa.", "Se lanza la pelota al menos 16 cm desde la palma abierta, se golpea al caer y debe botar en el propio campo y después en el rival."],
    ["¿Qué papel tienen las paredes en el pádel?", "Forman parte del juego: la pelota puede rebotar en las propias paredes tras botar y devolverse, pero no puede tocar la pared rival sin botar antes."],
    ["¿Por qué el globo es tan importante en pádel?", "Porque permite echar a los rivales de la red, que es la posición dominante, y recuperar la iniciativa."],
    ["Explica qué ocurre con 6 juegos iguales en un set de tenis.", "Se juega un tie-break a 7 puntos con diferencia de 2."],
    ["Escribe tres medidas para prevenir lesiones en deportes de raqueta.", "Calentar muñeca, codo y hombro; calzado con sujeción lateral; buena técnica que use piernas y tronco."],
    ["¿Por qué son «deportes para toda la vida»?", "Porque se pueden practicar a cualquier edad, con pocas personas, con poco material y adaptando la intensidad."],
  ], [
    ["Diseña una secuencia de cuatro golpes en bádminton para ganar un punto moviendo al rival, y explícala.", "Ejemplo: saque largo (rival atrás), dejada (rival adelante), clear a la otra esquina (rival atrás y al lado) y remate al hueco libre."],
    ["Compara la lógica interna del bádminton y del pádel: espacio, participación y uso de paredes.", "Ambos de red con participación alterna; bádminton sin paredes y el volante no puede botar; pádel con paredes, por parejas, la pelota bota y puede rebotar en las paredes."],
    ["Explica por qué la técnica correcta del golpe previene la epicondilitis.", "Si el golpe nace de piernas y tronco y la empuñadura es relajada, el antebrazo y el codo soportan menos tensión repetida."],
    ["Diseña un juego modificado de bádminton para iniciarse en el que todos participen mucho.", "Respuesta abierta: campos reducidos, parejas cooperativas contando golpes, puntos dobles por dejada, rotación de rivales cada 3 minutos."],
    ["Analiza las ventajas tácticas de enviar el volante entre los dos rivales en dobles.", "Genera dudas sobre quién debe golpear, puede provocar choques o que ninguno golpee, y reduce el ángulo de devolución."],
    ["Elabora un plan de calentamiento específico de 10 minutos para una clase de tenis de mesa.", "Respuesta abierta: movilidad articular (muñeca, codo, hombro, tobillo), desplazamientos laterales, golpes suaves de empuje, aumento progresivo de ritmo y saques."],
    ["Debate: ¿qué hacer si no estás seguro de que una bola ha salido? Relaciónalo con el juego limpio.", "Se da por buena; cantar fuera sin estar seguro es deshonesto y va contra el juego limpio y la confianza entre rivales."],
    ["Propón cómo adaptar un partido de pádel a una compañera en silla de ruedas.", "Permitir dos botes para ella (como en el tenis en silla), parejas mixtas equilibradas y espacios accesibles."],
    ["Construye una raqueta y un volante con material reciclado y explica qué cualidades debe tener.", "Respuesta abierta: ligera, mango cómodo, superficie de golpeo firme; volante con base pesada y estabilizador ligero para que caiga con la base delante."],
    ["Analiza la carrera de Carolina Marín: ¿qué factores, además de la técnica, explican su éxito?", "Constancia, preparación física, fortaleza mental, apoyo del entorno y del alto rendimiento, y capacidad de superar lesiones."],
  ]),
  quiz: QS([
    ["El bádminton es un deporte de…", ["red", "muro", "invasión", "bate y campo"], "Campos separados."],
    ["El frontón es un deporte de…", ["muro", "red", "invasión", "lucha"], "Se golpea contra una pared."],
    ["La empuñadura del bádminton se llama…", ["universal", "de lapicero", "de martillo", "occidental"], "Como dar la mano."],
    ["El pequeño salto al golpear el rival es el…", ["split step", "lunge", "drive", "clear"], "Activa las piernas."],
    ["El golpe alto al fondo del campo rival es…", ["el clear", "la dejada", "el drive", "el remate"], "Gana tiempo."],
    ["El golpe potente hacia abajo es…", ["el remate", "el lob", "el clear", "el saque corto"], "Termina el punto."],
    ["La dejada cae…", ["justo detrás de la red", "al fondo", "fuera", "en la línea lateral"], "Golpe suave."],
    ["En el saque de bádminton el volante se golpea…", ["por debajo de la cintura", "por encima de la cabeza", "de volea alta", "con salto"], "Y en diagonal."],
    ["Un set de bádminton es a…", ["21 puntos", "11 puntos", "15 puntos", "6 juegos"], "Con diferencia de 2."],
    ["Un volante que cae en la línea es…", ["bueno", "fuera", "repetición", "falta"], "La línea es campo."],
    ["En dobles de bádminton, la formación de ataque es…", ["delante-detrás", "lado a lado", "los dos en la red", "los dos al fondo"], "Para rematar."],
    ["Tras cada golpe hay que…", ["volver a la posición base", "quedarse quieto", "acercarse a la red siempre", "mirar el golpe"], "Cubrir todo el campo."],
    ["Un juego de tenis de mesa es a…", ["11 puntos", "21 puntos", "15 puntos", "7 puntos"], "Diferencia de 2."],
    ["En el saque de tenis de mesa la pelota bota primero…", ["en el propio campo", "en el campo rival", "en la red", "en el suelo"], "Y luego en el rival."],
    ["El top spin da a la pelota efecto…", ["hacia delante", "hacia atrás", "lateral", "ninguno"], "Golpe de ataque."],
    ["El pádel se juega…", ["por parejas", "individualmente", "por tríos", "en equipos de 6"], "Siempre dobles."],
    ["El golpe clave para echar a los rivales de la red en pádel es…", ["el globo", "el remate", "la dejada", "el corte"], "Profundo."],
    ["En tenis, tras 30 viene…", ["40", "45", "35", "juego"], "0, 15, 30, 40."],
    ["El «codo de tenista» se llama…", ["epicondilitis", "esguince", "fractura", "contractura"], "Tendones del codo."],
    ["Si dudas de si una bola ha salido…", ["se da por buena", "se canta fuera", "se repite siempre", "gana el que saca"], "Juego limpio."],
  ]),
  examen: QS([
    ["El pádel nació en…", ["México", "Inglaterra", "China", "Argentina"], "1969."],
    ["En bádminton, con 20 iguales…", ["hay que ganar por 2 (máximo 30)", "gana el siguiente punto", "se repite el set", "acaba el partido"], "Diferencia de 2."],
    ["El saque corto es típico de…", ["dobles", "individuales", "tenis", "pádel"], "Evita el ataque."],
    ["Con 40 iguales y un punto ganado se dice…", ["ventaja", "juego", "tie-break", "set"], "Hacen falta dos."],
    ["El squash se juega…", ["en una sala cerrada contra la pared", "en la playa", "con red alta", "con volante"], "Muro."],
    ["La empuñadura de lapicero es típica del…", ["tenis de mesa asiático", "bádminton", "pádel", "tenis"], "Asiática."],
    ["Una pelota de pádel que toca la pared rival sin botar es…", ["falta", "buena", "repetición", "punto doble"], "Debe botar antes."],
    ["Para cambiar de dirección se necesita calzado con…", ["sujeción lateral", "mucha amortiguación de correr", "tacos", "suela lisa"], "Previene esguinces."],
  ]),
  feynman: ["Cómo se clasifican los deportes de raqueta y cuál es su lógica interna", "Cómo se coge la raqueta, cómo se espera y cómo se desplaza", "Cuáles son los golpes del bádminton y sus reglas", "Qué caracteriza al tenis de mesa, el pádel y el tenis", "Qué principios tácticos ganan puntos en los deportes de red"],
  mapa: mapa("DEPORTES DE RAQUETA", "var(--pen)", [
    ["Tipos", "red · muro · mixtos", "var(--bac)"],
    ["Técnica", "empuñadura · posición · golpes", "var(--red)"],
    ["Reglas", "saque · puntuación · faltas", "var(--sun)"],
    ["Táctica", "mover al rival · volver al centro", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Deporte de red", "Campos separados por una red; participación alterna."],
    ["Empuñadura universal", "Agarre del bádminton, como dar la mano."],
    ["Posición base", "Lugar central al que se vuelve tras cada golpe."],
    ["Clear", "Golpe alto al fondo del campo rival."],
    ["Dejada", "Golpe suave que cae junto a la red."],
    ["Remate", "Golpe potente hacia abajo."],
    ["Saque de bádminton", "Por debajo de la cintura y en diagonal."],
    ["Set de bádminton", "21 puntos, diferencia de 2."],
    ["Top spin", "Golpe con efecto hacia delante en tenis de mesa."],
    ["Pádel", "Por parejas, en pista con paredes."],
    ["Puntuación del tenis", "15, 30, 40, juego; iguales y ventaja."],
    ["Mover al rival", "Principio táctico básico de los deportes de red."],
  ],
  glosario: [
    ["Deporte de raqueta", "Deporte en el que se golpea un móvil con un implemento."],
    ["Deporte de red", "Deporte con campos separados por una red."],
    ["Deporte de muro", "Deporte en el que se golpea contra una pared en un espacio compartido."],
    ["Empuñadura", "Forma de agarrar la raqueta o la pala."],
    ["Split step", "Pequeño salto de preparación cuando golpea el rival."],
    ["Lunge", "Zancada final para llegar al móvil."],
    ["Clear", "Golpe alto y profundo del bádminton."],
    ["Dejada", "Golpe suave que cae cerca de la red."],
    ["Remate", "Golpe potente de arriba abajo."],
    ["Drive", "Golpe rápido y tenso paralelo al suelo."],
    ["Volea", "Golpe a la pelota antes de que bote."],
    ["Globo", "Golpe alto que pasa por encima del rival."],
    ["Top spin", "Golpe con efecto liftado hacia delante."],
    ["Tie-break", "Juego de desempate a 7 puntos en el tenis y el pádel."],
    ["Epicondilitis", "Inflamación de los tendones del codo."],
    ["Volante", "Móvil del bádminton, con base de corcho y plumas o plástico."],
  ],
  situacion: {
    titulo: "Torneo de bádminton por parejas cambiantes",
    reto: "El departamento organiza un torneo de bádminton en el que las parejas de dobles cambian en cada ronda y la puntuación individual suma los puntos de todas las parejas en las que has jugado. Debes prepararte, jugar y analizar tu juego.",
    pasos: [
      "Practica en estaciones la empuñadura, la posición base, el saque corto y largo, el clear, la dejada y el remate.",
      "Aprende el reglamento de dobles y practica las formaciones de ataque y defensa con distintos compañeros.",
      "Juega las rondas del torneo actuando también como árbitro y anotador en algunos partidos.",
      "Graba o pide a un compañero que observe un partido tuyo con una ficha de golpes y decisiones.",
      "Analiza tus puntos fuertes y débiles y propón dos objetivos de mejora.",
    ],
    producto: "Ficha de autoevaluación técnico-táctica y hoja de arbitraje de un partido.",
    evaluacion: [
      "Ejecuta los golpes básicos con una técnica adecuada.",
      "Aplica principios tácticos: mover al rival, volver a la posición base, coordinarse en dobles.",
      "Arbitra y anota correctamente aplicando el reglamento.",
      "Coopera con compañeros diversos y muestra juego limpio.",
    ],
  },
  familias: ["Jugad juntos a palas o bádminton en el parque o la playa.", "Informaos de las instalaciones públicas de tenis de mesa, pádel o bádminton cercanas.", "Valorad la honestidad al cantar las bolas dudosas.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Resolución de problemas en situaciones motrices (RD 217/2022, Educación Física 4º ESO): deportes de red y muro, lógica interna, técnica básica (empuñaduras, desplazamientos, golpes), principios tácticos de individuales y dobles, reglamento, prevención de lesiones, juego limpio y práctica deportiva para toda la vida.",
    ideas: ["Estaciones técnicas con retos por niveles (dianas en la pista).", "Torneo de dobles con parejas cambiantes y autoarbitraje.", "Construcción de material alternativo con reciclaje.", "Coordinación con Física (trayectorias y efecto Magnus del top spin)."],
  },
  fuentes: [
    RD,
    { t: "Federación Española de Bádminton: reglamento", url: "https://www.badminton.es/" },
    { t: "Real Federación Española de Tenis de Mesa", url: "https://www.rfetm.es/" },
    { t: "Federación Española de Pádel: reglamento de juego", url: "https://www.padelfederacion.es/" },
  ],
  revisado: "2026-11-13",
};
