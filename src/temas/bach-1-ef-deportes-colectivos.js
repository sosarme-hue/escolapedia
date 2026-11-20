// Educación Física, 1º de Bachillerato. Tema 4, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1-ef");

// Campo visto desde arriba: superioridad 2 contra 1 y espacio libre.
const dosContraUno = B.lienzo("Situación de dos contra uno: el poseedor fija al defensor y pasa al compañero libre", `
  <rect x="16" y="16" width="228" height="148" rx="8" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"/>
  <path d="M130 16 V164" stroke="var(--leaf)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <rect x="226" y="66" width="18" height="48" fill="none" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="120" cy="66" r="9" fill="var(--pen)"/><circle cx="120" cy="124" r="9" fill="var(--pen)"/><circle cx="176" cy="80" r="9" fill="var(--red)"/>
  <path d="M128 70 L164 78" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="5 3"/>
  <path d="M126 72 L 122 116" stroke="var(--sun)" stroke-width="3"/>
  <path d="M128 124 C 160 124, 190 112, 214 96" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
  ${B.tx(120, 46, "fija", { fs: 10.5, maxW: 40, bold: true, color: "var(--pen)" })}${B.tx(96, 144, "pase", { fs: 10.5, maxW: 40, bold: true, color: "var(--sun)" })}${B.tx(184, 132, "finaliza", { fs: 10.5, maxW: 50, bold: true, color: "var(--pen)" })}${B.tx(176, 62, "defensor", { fs: 10, maxW: 54, color: "var(--red)" })}`, "");

// Defensa individual frente a zonal.
const defensas = B.lienzo("Defensa individual (cada defensor sigue a un atacante) frente a defensa zonal (cada defensor protege un espacio)", `
  <rect x="8" y="14" width="118" height="152" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
  <rect x="134" y="14" width="118" height="152" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
  ${[[30, 60], [70, 50], [100, 90], [50, 120]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--sun)"/><circle cx="${x + 10}" cy="${y + 12}" r="6" fill="var(--pen)"/><path d="M${x + 4} ${y + 4} L${x + 7} ${y + 8}" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}
  ${[[160, 50], [226, 50], [160, 120], [226, 120]].map(([x, y]) => `<rect x="${x - 20}" y="${y - 22}" width="40" height="44" rx="6" fill="var(--red)" fill-opacity=".14"/><circle cx="${x}" cy="${y}" r="6" fill="var(--red)"/>`).join("")}
  ${[[180, 70], [208, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="var(--sun)"/>`).join("")}
  ${B.tx(67, 160, "individual", { fs: 11, maxW: 100, bold: true, color: "var(--pen)" })}${B.tx(193, 160, "zonal", { fs: 11, maxW: 100, bold: true, color: "var(--red)" })}`, "");

module.exports = B.tema({
  titulo: "Deportes colectivos: táctica y estrategia",
  minutos: 110,
  objetivos: [
    "Comprender la estructura común de los deportes colectivos y su lógica interna",
    "Distinguir técnica, táctica, estrategia y sistema de juego",
    "Aplicar principios tácticos de ataque y defensa en situaciones reales de juego",
    "Analizar partidos, tomar decisiones en equipo y valorar el juego limpio y la inclusión",
  ],
  claves: ["deporte colectivo", "lógica interna", "táctica", "estrategia", "sistema de juego", "ataque", "defensa", "transición", "superioridad", "desmarque", "toma de decisiones", "juego limpio"],
  pregunta: {
    texto: "¿Por qué un equipo de jugadores normales puede ganar a otro lleno de estrellas?",
    respuesta: "Porque en los deportes colectivos no gana quien tiene a los mejores individuos, sino quien <mark>juega mejor como equipo</mark>. Ocupar bien los espacios, crear superioridades, ayudarse en defensa y tomar buenas decisiones en el momento justo vale más que el talento aislado. Eso es la táctica: la inteligencia colectiva del juego, y se puede aprender y entrenar.",
  },
  lectura: {
    titulo: "Dinamarca, 1992",
    html: `<p>En junio de 1992, la selección de fútbol de Dinamarca ni siquiera se había clasificado para la Eurocopa. Diez días antes del torneo, la expulsión de Yugoslavia le abrió la puerta. Muchos jugadores estaban de vacaciones. No tenían grandes estrellas, salvo un joven portero, y nadie apostaba por ellos.</p>
    <p>Su entrenador, Richard Møller Nielsen, no intentó copiar a las grandes potencias. Organizó un equipo compacto, solidario en defensa, que sabía exactamente qué hacer al recuperar el balón y que aprovechaba cada error del rival. Ganaron a Francia, a Países Bajos en la semifinal y a Alemania en la final.</p>
    <p>Historias parecidas se repiten en el baloncesto, el balonmano o el voleibol: equipos con un plan claro y jugadores que se entienden superan a otros con más talento individual. En este tema aprenderás a «leer» el juego como un entrenador: qué es la táctica, cómo se ataca y se defiende en cualquier deporte de equipo y cómo se toman decisiones en un segundo.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Qué tienen en común los deportes colectivos",
      html: `<p>Fútbol, baloncesto, balonmano, voleibol, hockey, rugby o ultimate son muy distintos, pero comparten una <b>estructura común</b>:</p>
      <ul><li>Un <b>móvil</b> (balón, disco, pelota) que se disputa.</li>
      <li>Un <b>espacio</b> de juego, a veces compartido con el rival (invasión) y a veces separado por una red.</li>
      <li>Una <b>meta</b> u objetivo (portería, canasta, zona de marca, suelo rival).</li>
      <li><b>Compañeros</b> con los que cooperar y <b>adversarios</b> a los que oponerse.</li>
      <li><b>Reglas</b> que limitan las acciones y un <b>tiempo</b> de juego.</li></ul>
      <p>Se clasifican en dos grandes familias: los deportes de <b>invasión</b> (fútbol, baloncesto, balonmano, hockey, rugby), donde los equipos comparten espacio y se puede invadir el campo rival, y los de <b>red y muro</b> (voleibol), con espacios separados y sin contacto.</p>
      <p>Esta estructura común permite aprender principios que se <mark>transfieren</mark> de un deporte a otro: quien entiende el desmarque en balonmano lo entiende en fútbol o en baloncesto.</p>`,
      svg: B.cajas("Elementos estructurales de los deportes colectivos", [["Móvil", "balón, disco"], ["Espacio", "compartido o separado"], ["Meta", "portería, canasta"], ["Compañeros", "cooperación"], ["Adversarios", "oposición"], ["Reglas y tiempo", "límites"]], { t: "Estructura común", cols: 3 }),
    },
    {
      h: "La lógica interna y las fases del juego",
      html: `<p>La <b>lógica interna</b> de un deporte es lo que obliga a hacer su reglamento: por ejemplo, en baloncesto no se puede andar con el balón en las manos, así que hay que botar o pasar. Entender esa lógica ayuda a decidir mejor.</p>
      <p>En los deportes de invasión, el juego pasa continuamente por cuatro <b>fases</b>:</p>
      <ul><li><b>Ataque organizado</b>: el equipo tiene el balón y el rival está colocado.</li>
      <li><b>Transición defensiva</b>: se acaba de perder el balón; hay que evitar el contraataque, presionando o replegando.</li>
      <li><b>Defensa organizada</b>: el rival ataca y nuestro equipo está colocado.</li>
      <li><b>Transición ofensiva</b> o contraataque: se acaba de recuperar el balón; hay que aprovechar el desorden del rival.</li></ul>
      <p>Las transiciones suelen decidir los partidos, porque es cuando los equipos están desordenados. Por eso los buenos equipos tienen claro qué hacer en los primeros segundos tras ganar o perder el balón. Esta idea, llamada «juego de fases», se puede aplicar a casi todos los deportes de equipo.</p>`,
      svg: B.ciclo("Las cuatro fases del juego en los deportes de invasión", "Juego", ["Ataque", "Transición defensiva", "Defensa", "Contraataque"]),
    },
    {
      h: "Técnica, táctica, estrategia y sistema",
      html: `<p>Cuatro conceptos que se confunden a menudo:</p>
      <ul><li><b>Técnica</b>: el gesto motor eficaz (un pase, un bote, un remate). Responde a «¿cómo lo hago?».</li>
      <li><b>Táctica</b>: la decisión que se toma en el momento, durante el juego, ante una situación concreta (pasar o tirar, a quién, cuándo). Responde a «¿qué hago ahora?».</li>
      <li><b>Estrategia</b>: el plan previo, antes del partido o en una situación de balón parado, para aprovechar puntos débiles del rival (jugadas ensayadas, a quién defender, cómo administrar el tiempo).</li>
      <li><b>Sistema de juego</b>: la organización de los jugadores en el campo (en fútbol, 1-4-3-3; en balonmano, defensa 6:0; en baloncesto, ataque 1-3-1).</li></ul>
      <p>La técnica sin táctica sirve de poco: un jugador que bota muy bien pero no ve el pase libre perjudica al equipo. Por eso hoy la enseñanza de los deportes se plantea desde el <b>juego</b> y la comprensión táctica, con situaciones reducidas, y la técnica se perfecciona al servicio de las decisiones.</p>`,
      svg: B.rejilla("Diferencias entre técnica, táctica, estrategia y sistema", ["Concepto", "Pregunta", "Cuándo"], [["Técnica", "¿cómo?", "en el gesto"], ["Táctica", "¿qué hago?", "durante el juego"], ["Estrategia", "¿qué plan?", "antes"], ["Sistema", "¿dónde estoy?", "siempre"]], { t: "Cuatro conceptos" }),
      video: { id: "c3zzDOYvtJc", titulo: "Todas las tácticas del fútbol explicadas en 8 minutos", canal: "football explained", vistas: 214825 },
    },
    {
      h: "La toma de decisiones",
      html: `<p>Cada acción táctica es un pequeño proceso en tres pasos, que en los mejores jugadores dura décimas de segundo:</p>
      <ol><li><b>Percepción</b>: mirar y captar la información relevante: dónde están compañeros, rivales, espacios libres, el balón, el tiempo.</li>
      <li><b>Decisión</b>: elegir la mejor opción entre las posibles (pasar, botar, tirar, fintar, esperar).</li>
      <li><b>Ejecución</b>: realizar la acción con la técnica adecuada.</li></ol>
      <p>Muchos errores no son de técnica sino de <b>percepción</b>: el jugador no levantó la cabeza. Los estudios con jugadores de élite muestran que miran a su alrededor (lo que se llama <b>escaneo</b>) muchas más veces antes de recibir el balón que los jugadores de menor nivel.</p>
      <p>Se mejora la toma de decisiones jugando en <b>situaciones reducidas</b> (2 contra 1, 3 contra 2, 4 contra 4) con reglas que obligan a pensar, y después reflexionando: «¿qué viste?, ¿qué otras opciones había?». Equivocarse forma parte del aprendizaje: <mark>un error de decisión bien analizado enseña más que un acierto por casualidad</mark>.</p>`,
      svg: B.flujo("Proceso de la acción táctica", ["Percibir: escanear el campo", "Interpretar la situación", "Decidir la mejor opción", "Ejecutar con buena técnica", "Valorar el resultado"], { t: "Decidir en un segundo" }),
    },
    {
      h: "Principios del ataque",
      html: `<p>Cualquier deporte de invasión comparte unos <b>principios ofensivos</b>:</p>
      <ul><li><b>Conservar el balón</b>: no perderlo es la primera condición para poder marcar.</li>
      <li><b>Progresar hacia la meta</b>: avanzar con pases, conducciones o botes.</li>
      <li><b>Finalizar</b>: conseguir el tanto en las mejores condiciones.</li></ul>
      <p>Para lograrlos se usan medios tácticos:</p>
      <ul><li><b>Desmarque</b>: el jugador sin balón se mueve para librarse de su defensor y ofrecer una línea de pase. Los jugadores sin balón son los que más deciden el ataque.</li>
      <li><b>Amplitud y profundidad</b>: ocupar el ancho y el largo del campo para separar a los defensores.</li>
      <li><b>Apoyos</b>: ofrecerse cerca del poseedor para dar una opción segura.</li>
      <li><b>Paredes</b>, cruces y bloqueos: acciones entre dos o tres jugadores.</li>
      <li><b>Cambios de ritmo y de orientación</b>: atacar el lado débil del rival.</li></ul>
      <p>La regla básica del ataque: <mark>pasar y moverse</mark>. Un equipo en el que todos se quedan quietos mirando al poseedor es fácil de defender.</p>`,
      svg: B.estrella("Medios tácticos ofensivos", "Atacar", ["Desmarque", "Amplitud", "Apoyo", "Pared", "Cambio ritmo", "Fijar"]),
    },
    {
      h: "Crear y aprovechar superioridades",
      html: `<p>El gran objetivo táctico del ataque es crear <b>superioridad numérica</b> (más atacantes que defensores en una zona), <b>posicional</b> (un jugador mejor situado) o <b>cualitativa</b> (un duelo favorable).</p>
      <p>La situación más básica es el <b>2 contra 1</b>: el poseedor del balón avanza hacia el defensor para <b>fijarlo</b> (obligarle a decidir) y, cuando el defensor se compromete, pasa a su compañero libre, que finaliza. Si el defensor no sale, el poseedor sigue avanzando y finaliza él. La clave está en el momento del pase: ni muy pronto (el defensor llega a los dos) ni muy tarde (el defensor roba).</p>
      <p>Otras formas de crear superioridad son el <b>contraataque</b> rápido antes de que el rival se organice, los <b>bloqueos</b> en baloncesto, la incorporación de un jugador desde atrás o, en balonmano y fútbol sala, el uso del portero-jugador.</p>
      <p>Lo mismo ocurre en el 3 contra 2 o en el 4 contra 3: el principio es siempre atacar los espacios entre defensores para que tengan que elegir, mantener la amplitud para que no puedan cubrir a dos atacantes a la vez y pasar al jugador que queda libre. Cuanto más rápido circula el balón, menos tiempo tiene la defensa para reorganizarse.</p>
      <p>Defensivamente, la respuesta es la <b>ayuda</b>: un compañero deja a su par para frenar al atacante con ventaja, y los demás <b>basculan</b> para cubrir el hueco.</p>`,
      svg: dosContraUno,
    },
    {
      h: "Principios de la defensa",
      html: `<p>Los <b>principios defensivos</b> son el reflejo de los ofensivos:</p>
      <ul><li><b>Recuperar el balón</b> lo antes posible.</li>
      <li><b>Impedir la progresión</b> del rival hacia nuestra meta.</li>
      <li><b>Proteger la meta</b> y evitar el tanto.</li></ul>
      <p>Los medios tácticos defensivos son el <b>marcaje</b> (vigilar a un atacante), la <b>ayuda</b> (apoyar a un compañero superado), la <b>cobertura</b> (situarse detrás de un compañero para corregir si es superado), el <b>repliegue</b> (volver rápido tras perder el balón), la <b>basculación</b> (desplazarse en bloque hacia el lado del balón) y la <b>presión</b> (reducir tiempo y espacio al poseedor).</p>
      <p>Hay dos grandes tipos de defensa:</p>
      <ul><li><b>Individual</b>: cada defensor se encarga de un atacante. Exige buena condición física y responsabilidad personal.</li>
      <li><b>Zonal</b>: cada defensor protege un espacio. Exige comunicación y coordinación.</li>
      <li><b>Mixta</b>: combina las dos (por ejemplo, una zona con un jugador marcando al mejor atacante rival).</li></ul>`,
      svg: defensas,
    },
    {
      h: "Los sistemas de juego",
      html: `<p>El <b>sistema de juego</b> es la distribución básica de los jugadores en el espacio y sus funciones. Se expresa con números que indican cuántos jugadores hay en cada línea, de atrás hacia delante:</p>
      <ul><li><b>Fútbol</b>: 1-4-4-2, 1-4-3-3 o 1-3-5-2 (el 1 es el portero). Cada sistema busca un equilibrio entre ataque y defensa.</li>
      <li><b>Baloncesto</b>: se habla de posiciones (base, escolta, alero, ala-pívot, pívot), de ataques (por ejemplo, 1-3-1 o 2-1-2) y de defensas individuales o en zona (2-3, 3-2).</li>
      <li><b>Balonmano</b>: en defensa, 6:0 (todos en línea junto al área), 5:1 o 3:2:1, más abiertos y agresivos.</li>
      <li><b>Voleibol</b>: sistemas de recepción y de juego como el 4-2 o el 5-1, según el número de colocadores.</li></ul>
      <p>El sistema no es una jaula: es un punto de partida que se adapta al rival, al marcador y a los jugadores disponibles. Lo importante no es el dibujo, sino que <mark>los jugadores entiendan sus funciones</mark> y las relaciones entre ellos.</p>`,
      svg: B.rejilla("Ejemplos de sistemas de juego", ["Deporte", "Ataque", "Defensa"], [["Fútbol", "1-4-3-3", "bloque bajo"], ["Baloncesto", "1-3-1", "zona 2-3"], ["Balonmano", "3:3", "6:0 o 5:1"], ["Voleibol", "5-1", "bloqueo y defensa"]], { t: "Sistemas" }),
      video: { id: "WCCCkosVTa0", titulo: "Posiciones y roles en el baloncesto para principiantes", canal: "Tony Basketball", vistas: 345449 },
    },
    {
      h: "Los deportes de red: el voleibol",
      html: `<p>En los deportes de <b>red</b>, los equipos no comparten espacio y no hay contacto. La táctica consiste en <b>enviar el balón donde el rival no puede devolverlo</b> y en organizar la propia defensa del campo.</p>
      <p>En voleibol, cada equipo tiene seis jugadores y tres toques para devolver el balón. La secuencia ideal de ataque es:</p>
      <ol><li><b>Recepción</b> (normalmente de antebrazos) dirigida a la zona del colocador.</li>
      <li><b>Colocación</b> (de dedos) para dejar el balón en condiciones de atacar.</li>
      <li><b>Remate</b> o ataque al campo contrario.</li></ol>
      <p>En defensa, el equipo organiza el <b>bloqueo</b> en la red y la <b>defensa de campo</b> detrás. Los jugadores <b>rotan</b> en el sentido de las agujas del reloj cada vez que recuperan el saque, por lo que todos deben saber jugar en varias posiciones, salvo el líbero, especialista defensivo.</p>
      <p>Principios tácticos clave: sacar con intención (a zonas débiles o a un receptor flojo), comunicarse («¡mía!»), cubrir al rematador y buscar los huecos del rival con remates o fintas.</p>`,
      svg: B.flujo("Secuencia de juego en voleibol", ["Saque con intención", "Recepción de antebrazos", "Colocación de dedos", "Remate o finta", "Bloqueo y defensa de campo"], { t: "Tres toques" }),
      video: { id: "caSpHeKErPI", titulo: "¿Cómo jugar voleibol? Te lo explico en 10 minutos", canal: "Mauro Isaac", vistas: 749439 },
    },
    {
      h: "La estrategia y el balón parado",
      html: `<p>La <b>estrategia</b> se prepara antes del partido. Incluye:</p>
      <ul><li><b>Analizar al rival</b>: sus puntos fuertes y débiles, sus jugadores clave y sus sistemas.</li>
      <li><b>Plan de partido</b>: cómo atacar y defender, qué ritmo imponer, cómo administrar los tiempos muertos y los cambios.</li>
      <li><b>Jugadas ensayadas</b> en situaciones de <b>balón parado</b> (saques de esquina, faltas, saques de banda, saques de fondo en baloncesto, saques en voleibol). En el fútbol profesional, alrededor de un tercio de los goles llegan a balón parado.</li>
      <li><b>Gestión del marcador y del tiempo</b>: no es igual atacar ganando de 10 que perdiendo de 2 a falta de un minuto.</li></ul>
      <p>Hoy los equipos usan el <b>análisis de datos y de vídeo</b> para preparar la estrategia: mapas de calor, estadísticas de tiros, porcentajes por zonas. En clase podéis hacer algo parecido con una tablet y una hoja de observación.</p>
      <p>Una buena estrategia se basa en las fortalezas propias: copiar el sistema de un equipo profesional sin tener sus jugadores suele fracasar.</p>`,
      svg: B.cajas("Elementos de la estrategia", [["Analizar al rival", "fuertes y débiles"], ["Plan de partido", "ritmo, cambios"], ["Balón parado", "jugadas ensayadas"], ["Gestión", "marcador y tiempo"]], { t: "Antes del partido" }),
    },
    {
      h: "Aprender jugando: juegos modificados",
      html: `<p>Los deportes colectivos se aprenden mejor mediante <b>juegos modificados</b>: versiones simplificadas del deporte que conservan su lógica táctica pero cambian alguna regla para provocar un aprendizaje. Es el enfoque llamado de <b>comprensión</b> (TGfU, <i>Teaching Games for Understanding</i>).</p>
      <p>Algunas modificaciones habituales:</p>
      <ul><li><b>Reducir el número</b> de jugadores (3 contra 3) para que todos toquen mucho el balón y decidan más.</li>
      <li><b>Cambiar el espacio</b>: campo estrecho para trabajar el juego interior o ancho para la amplitud.</li>
      <li><b>Condicionar las reglas</b>: un tanto vale doble si llega tras cinco pases; no se puede botar; obligatorio que toquen todos antes de tirar.</li>
      <li><b>Crear superioridades</b>: un comodín que siempre ataca.</li></ul>
      <p>Tras cada juego, el profesor plantea <b>preguntas</b>: «¿cuándo era mejor pasar?», «¿qué hacíais al perder el balón?». Así se construye la comprensión táctica, que luego se transfiere al deporte reglado. Este enfoque también aumenta la participación de quienes tienen menos experiencia.</p>`,
      svg: B.comparar("Enseñanza tradicional frente a enseñanza comprensiva", ["Tradicional", ["técnica aislada", "filas y repeticiones", "partido al final", "pocos deciden"]], ["Comprensiva", ["juego desde el inicio", "reglas modificadas", "preguntas", "todos deciden"]]),
    },
    {
      h: "Juego limpio, roles e inclusión",
      html: `<p>Los deportes colectivos son una escuela de <b>convivencia</b>. En ellos se aprende a cooperar, a aceptar las decisiones del árbitro, a perder y a ganar con respeto. El <b>juego limpio</b> (<i>fair play</i>) va más allá de cumplir el reglamento: incluye respetar al rival, no fingir faltas, ayudar a quien se lesiona y reconocer los propios errores.</p>
      <p>En un equipo, además del rol en el campo, hay <b>roles sociales</b>: capitán, animador, quien media en los conflictos. Un buen equipo reparte el protagonismo: el éxito depende de que <mark>cada persona se sienta parte</mark>.</p>
      <p>En clase de Educación Física hay que garantizar la <b>inclusión</b>: equipos mixtos y equilibrados (sin que los capitanes elijan en público), reglas que obliguen a que toquen todos, roles rotativos (árbitro, anotador, entrenador) y adaptaciones para compañeros con discapacidad. El deporte femenino, que ha crecido enormemente en la última década, demuestra que los estereotipos sobre «deportes de chicos» no tienen fundamento.</p>
      <p>También hay que rechazar cualquier violencia, insulto o discriminación en el deporte, dentro y fuera del campo, incluidas las redes sociales.</p>`,
      svg: B.estrella("Valores en los deportes colectivos", "Juego limpio", ["Respeto", "Cooperación", "Inclusión", "Autocontrol", "Esfuerzo", "Igualdad"]),
    },
  ],
  figura: {
    titulo: "Táctica en los deportes colectivos en cuatro ideas",
    items: [["Fases", "4", "ataque, defensa", "y transiciones"], ["Decidir", "ver → elegir", "percibir antes", "de recibir"], ["Atacar", "2 × 1", "fijar, pasar", "y moverse"], ["Defender", "ayuda", "cobertura, repliegue", "y basculación"]],
  },
  video: { id: "I8MCekb1B9I", titulo: "Táctica, estrategia y sistemas de juego en el fútbol amateur", canal: "HoySeJuega Futbol", vistas: 635014 },
  quiz: [
    ["Los deportes de invasión se caracterizan por…", ["espacios separados por red", "compartir espacio y poder invadir el campo rival", "no tener balón", "ser individuales"], 1, "Fútbol, baloncesto, balonmano..."],
    ["El voleibol es un deporte de…", ["invasión", "red", "combate", "precisión"], 1, "Espacios separados."],
    ["La lógica interna de un deporte depende de…", ["los jugadores", "su reglamento", "el público", "el entrenador"], 1, "Lo que las reglas obligan a hacer."],
    ["Justo después de perder el balón, el equipo está en…", ["ataque organizado", "transición defensiva", "contraataque", "defensa organizada"], 1, "Hay que evitar el contraataque."],
    ["La táctica es…", ["el gesto técnico", "la decisión durante el juego", "el plan previo", "la colocación inicial"], 1, "¿Qué hago ahora?"],
    ["La estrategia es…", ["la decisión en un segundo", "el plan previo al partido o a una jugada", "un gesto técnico", "el reglamento"], 1, "Se prepara antes."],
    ["El primer paso de la acción táctica es…", ["ejecutar", "percibir", "decidir", "valorar"], 1, "Mirar antes de recibir."],
    ["El escaneo consiste en…", ["mirar el balón", "mirar alrededor antes de recibir", "mirar al árbitro", "cerrar los ojos"], 1, "Más frecuente en la élite."],
    ["El desmarque lo realiza…", ["el poseedor", "un jugador sin balón para ofrecer línea de pase", "el defensor", "el árbitro"], 1, "Liberarse del marcaje."],
    ["La amplitud sirve para…", ["juntar a los atacantes", "separar a los defensores", "perder tiempo", "defender"], 1, "Ocupar el ancho."],
    ["En un 2 contra 1, el poseedor primero debe…", ["pasar enseguida", "fijar al defensor", "tirar desde lejos", "parar"], 1, "Obligarle a decidir."],
    ["La cobertura consiste en…", ["marcar al mejor", "situarse detrás de un compañero para corregir si le superan", "atacar", "lanzar"], 1, "Medio defensivo."],
    ["La basculación es…", ["un tipo de pase", "el desplazamiento en bloque hacia el lado del balón", "un tiro", "un cambio"], 1, "Cerrar espacios."],
    ["En la defensa zonal cada defensor…", ["sigue a un atacante", "protege un espacio", "no se mueve", "ataca"], 1, "Exige comunicación."],
    ["En el sistema 1-4-3-3 de fútbol, el 1 es…", ["el delantero", "el portero", "el capitán", "el líbero"], 1, "Se cuenta desde atrás."],
    ["La defensa 6:0 es propia de…", ["baloncesto", "balonmano", "voleibol", "rugby"], 1, "Seis defensores en línea."],
    ["La secuencia ideal de ataque en voleibol es…", ["saque, remate, bloqueo", "recepción, colocación, remate", "remate, recepción, colocación", "colocación, saque, remate"], 1, "Tres toques."],
    ["En el fútbol profesional, a balón parado llegan aproximadamente…", ["el 1 % de los goles", "un tercio de los goles", "todos", "ninguno"], 1, "Importancia de la estrategia."],
    ["Un juego modificado…", ["cambia la lógica del deporte", "simplifica reglas manteniendo la lógica táctica", "elimina el balón", "solo es para niños"], 1, "Enfoque comprensivo."],
    ["El juego limpio incluye…", ["fingir faltas si no te ven", "respetar al rival y reconocer los errores", "ganar como sea", "insultar al árbitro"], 1, "Va más allá del reglamento."],
  ],
  examen: [
    ["Un base de baloncesto bota muy bien pero nunca ve al compañero libre. Su problema es sobre todo…", ["técnico", "de percepción y decisión", "físico", "reglamentario"], 1, "Táctica individual."],
    ["Tras robar el balón con el rival desordenado, lo mejor es…", ["parar y organizarse siempre", "atacar rápido en contraataque", "pasar atrás", "perder tiempo"], 1, "Aprovechar la transición."],
    ["En un 2 contra 1, el defensor sale a por el poseedor. El poseedor debe…", ["tirar", "pasar al compañero libre", "botar hacia atrás", "esperar"], 1, "Ha fijado al defensor."],
    ["Un equipo pierde de 2 puntos a falta de 20 s y tiene el balón. Es una decisión de…", ["técnica", "gestión del marcador y del tiempo", "condición física", "reglamento"], 1, "Estrategia."],
    ["Un juego en el que el gol vale doble tras cinco pases busca mejorar…", ["el tiro lejano", "la conservación del balón", "la velocidad", "la defensa individual"], 1, "Condiciona la táctica."],
    ["Un defensor deja a su par para frenar a un atacante que ha superado a su compañero. Es una…", ["cobertura", "ayuda", "basculación", "presión"], 1, "Y otro debe cubrir el hueco."],
    ["En voleibol, sacar a la zona de un receptor que falla mucho es…", ["técnica", "táctica o estrategia", "reglamento", "azar"], 1, "Saque con intención."],
    ["¿Qué medida favorece la inclusión en clase?", ["que los capitanes elijan en público", "equipos equilibrados y reglas que obliguen a participar a todos", "jugar siempre los mismos", "eliminar a los que fallan"], 1, "Todos deben participar."],
  ],
  feynman: ["Qué estructura comparten los deportes colectivos", "Cuáles son las cuatro fases del juego y por qué importan las transiciones", "Qué diferencia hay entre técnica, táctica, estrategia y sistema", "Cómo se resuelve un 2 contra 1", "Qué diferencia hay entre defensa individual y zonal", "Por qué los juegos modificados ayudan a aprender táctica"],
  mapa: ["DEPORTES COLECTIVOS", [["Estructura", "invasión · red · lógica interna"], ["Decidir", "percibir · decidir · ejecutar"], ["Atacar y defender", "desmarque · 2×1 · ayuda · zona"], ["Plan y valores", "sistemas · estrategia · juego limpio"]]],
  tarjetas: [
    ["Deporte de invasión", "Espacio compartido; se invade el campo rival."],
    ["Lógica interna", "Lo que el reglamento obliga a hacer."],
    ["Fases del juego", "Ataque, transición defensiva, defensa y contraataque."],
    ["Táctica", "Decisión durante el juego."],
    ["Estrategia", "Plan previo al partido o a una jugada."],
    ["Sistema de juego", "Distribución de jugadores y funciones."],
    ["Percepción", "Escanear el entorno antes de recibir."],
    ["Desmarque", "Moverse sin balón para ofrecer línea de pase."],
    ["2 contra 1", "Fijar al defensor y pasar al libre."],
    ["Cobertura", "Situarse detrás del compañero para corregir."],
    ["Defensa zonal", "Cada defensor protege un espacio."],
    ["Juego modificado", "Reglas simplificadas que mantienen la lógica táctica."],
  ],
  ejemplos: [
    ["Resuelve un 3 contra 2 en balonmano.", ["El central avanza hacia el hueco entre los dos defensores para fijarlos.", "Si un defensor sale, pasa al extremo de ese lado, que queda libre.", "Si ninguno sale, el central lanza; los extremos mantienen la amplitud."], "Fijar, mantener amplitud y pasar al jugador libre."],
    ["Diseña un juego modificado para mejorar el desmarque en fútbol sala.", ["4 contra 4 en medio campo, sin porterías: punto al dar 6 pases seguidos.", "Regla: no se puede devolver el pase a quien te lo dio.", "Preguntas al final: ¿dónde había espacio?, ¿cuándo moverse?"], "Juego de posesión que obliga a moverse sin balón."],
    ["Analiza qué hacer en una transición defensiva en baloncesto.", ["El jugador más cercano presiona al poseedor para frenar el primer pase.", "El resto corre hacia su campo (repliegue) mirando el balón.", "Se protege primero la canasta y después se emparejan los marcajes."], "Frenar, replegar y proteger la canasta."],
    ["Elige defensa para un partido contra un equipo con un único gran tirador.", ["Analizar al rival: un jugador anota la mitad de los puntos.", "Opción: defensa mixta (cuatro en zona y uno marcando al tirador).", "Plan: negarle el balón y ayudar desde la zona."], "Defensa mixta tipo «caja y uno»."],
    ["Diseña una jugada de estrategia para un saque de esquina.", ["Dos jugadores amagan al primer palo para arrastrar marcadores.", "Un tercero ataca el segundo palo con carrera desde fuera.", "Un cuarto queda en la frontal para el rechace; el resto vigila el contraataque."], "Jugada ensayada con bloqueo de espacio y cobertura defensiva."],
    ["Observa un partido de voleibol y propón un saque táctico.", ["Registrar en qué zona falla más la recepción rival.", "Detectar al receptor con menos precisión.", "Sacar con seguridad y dirigido a esa zona o jugador."], "Saque dirigido al punto débil del rival."],
  ],
  errores: [
    "Confundir táctica y estrategia, o técnica y táctica.",
    "Mirar solo al balón y no escanear el campo antes de recibir.",
    "Quedarse quieto sin balón esperando que te la pasen.",
    "Pasar demasiado pronto o demasiado tarde en una superioridad.",
    "Abandonar la defensa tras perder el balón (no hacer transición defensiva).",
    "Aceptar insultos, discriminación o exclusión como algo «normal» del deporte.",
  ],
  ejercicios: {
    b: [
      ["Nombra los elementos estructurales de los deportes colectivos.", "Móvil, espacio, meta, compañeros, adversarios, reglas y tiempo."],
      ["Clasifica: fútbol, voleibol, balonmano, hockey.", "Invasión: fútbol, balonmano, hockey. Red: voleibol."],
      ["Enumera las cuatro fases del juego.", "Ataque organizado, transición defensiva, defensa organizada y transición ofensiva o contraataque."],
      ["Define táctica.", "Decisión que se toma durante el juego ante una situación concreta."],
      ["Define estrategia.", "Plan previo al partido o a una situación de balón parado para aprovechar debilidades del rival."],
      ["¿Cuáles son las tres fases de la acción táctica?", "Percepción, decisión y ejecución."],
      ["Enumera los tres principios del ataque.", "Conservar el balón, progresar hacia la meta y finalizar."],
      ["¿Qué es un desmarque?", "Movimiento de un jugador sin balón para librarse del defensor y ofrecer una línea de pase."],
      ["Enumera tres medios tácticos defensivos.", "Marcaje, ayuda, cobertura, repliegue, basculación, presión."],
      ["Diferencia defensa individual y zonal.", "Individual: cada defensor sigue a un atacante. Zonal: cada defensor protege un espacio."],
      ["¿Qué significa 1-4-4-2 en fútbol?", "Portero, cuatro defensas, cuatro centrocampistas y dos delanteros."],
      ["¿Qué es el juego limpio?", "Respetar reglas, rivales, árbitros y compañeros más allá de lo que obliga el reglamento."],
    ],
    m: [
      ["Explica por qué las transiciones deciden muchos partidos.", "Porque los equipos están desordenados: el que reacciona antes encuentra superioridades o evita las del rival."],
      ["Explica cómo se fija a un defensor en un 2 contra 1.", "El poseedor avanza directamente hacia él (o hacia la meta) para obligarle a decidir; cuando se compromete, pasa al libre."],
      ["Pon un ejemplo de técnica, táctica y estrategia en balonmano.", "Técnica: lanzamiento en suspensión. Táctica: decidir lanzar o pasar al pivote. Estrategia: jugar con 7 atacantes en los últimos minutos."],
      ["¿Por qué el escaneo mejora la toma de decisiones?", "Porque el jugador conoce de antemano la posición de compañeros y rivales y puede decidir antes y mejor al recibir."],
      ["Describe la secuencia recepción-colocación-remate en voleibol.", "Recepción de antebrazos a la zona del colocador, colocación de dedos en buenas condiciones y remate al campo rival."],
      ["Diseña un juego modificado para trabajar la defensa en ayuda.", "3 contra 3 en baloncesto con un atacante extra siempre en ataque (4×3): obliga a ayudar y rotar; punto extra por robo."],
      ["¿Qué ventajas e inconvenientes tiene la defensa individual?", "Ventajas: responsabilidad clara, presión. Inconvenientes: desgaste físico, vulnerable a desmarques y bloqueos si no hay ayudas."],
      ["Explica qué es la basculación y cuándo se usa.", "Desplazamiento conjunto de la defensa hacia el lado del balón para reducir espacios; se usa sobre todo en defensas zonales."],
      ["¿Por qué un sistema de juego no debe ser rígido?", "Porque debe adaptarse al rival, al marcador y a los jugadores; lo importante son las funciones y relaciones, no el dibujo."],
      ["Propón tres reglas para que todos participen en un partido de clase.", "Todos deben tocar el balón antes de tirar; un tanto vale doble si lo marca quien aún no ha marcado; roles rotativos."],
      ["Explica el papel de los roles sociales en un equipo.", "Capitán, mediador o animador ayudan a cohesionar al grupo, resolver conflictos y mantener la motivación."],
    ],
    a: [
      ["Compara la táctica de un deporte de invasión con la de un deporte de red.", "Invasión: espacio compartido, conservar, progresar y finalizar; defensa con contacto. Red: espacio separado, enviar el móvil donde el rival no llega, organizar la defensa del propio campo; sin contacto."],
      ["Diseña una sesión de 50 min para enseñar el 2 contra 1 en tres deportes distintos.", "Calentamiento con juego de pases; 2×1 en balonmano (15 min), en baloncesto (10 min) y en fútbol (10 min) con preguntas comunes; partido 4×4 con superioridad; reflexión sobre la transferencia."],
      ["Elabora una hoja de observación para analizar un partido y explica cómo la usarías.", "Registro de pérdidas, recuperaciones, tipo de ataque (organizado o contraataque), finalizaciones por zonas y balón parado; dos observadores por equipo; conclusiones en gráfico para el descanso."],
      ["Debate: ¿debe enseñarse primero la técnica o el juego?", "Enfoque comprensivo: jugar desde el inicio con reglas modificadas aumenta la motivación y la comprensión; la técnica se perfecciona según las necesidades del juego. Requiere equilibrio: algunos gestos necesitan práctica específica."],
      ["Plantea la estrategia contra un equipo muy alto en voleibol.", "Sacar tenso y a zonas para dificultar su recepción; atacar rápido y por los extremos para evitar su bloqueo; usar fintas y balones a la zona de defensa; cubrir los bloqueos."],
      ["Analiza cómo influye el reglamento en la táctica con dos ejemplos.", "Regla de 24 s en baloncesto: obliga a atacar rápido. Fuera de juego en fútbol: define la altura de la línea defensiva y los desmarques en profundidad."],
      ["Propón un protocolo de clase ante un insulto o conducta discriminatoria durante un partido.", "Parar el juego, intervención inmediata del profesor, reparación del daño, reflexión con el grupo, consecuencias acordadas en normas de aula y seguimiento."],
      ["Explica cómo usar el vídeo y los datos para mejorar la táctica de un equipo escolar.", "Grabar partidos con tablet; analizar fases y transiciones; contar pérdidas y recuperaciones; mostrar clips cortos; fijar un objetivo táctico para el siguiente partido y medirlo."],
    ],
  },
  glosario: [
    ["Deporte colectivo", "Deporte con compañeros y adversarios que disputan un móvil."],
    ["Invasión", "Familia de deportes con espacio compartido."],
    ["Lógica interna", "Comportamientos que impone el reglamento."],
    ["Transición", "Paso de defensa a ataque o al revés."],
    ["Técnica", "Gesto motor eficaz."],
    ["Táctica", "Decisión durante el juego."],
    ["Estrategia", "Plan previo para aprovechar las debilidades rivales."],
    ["Sistema de juego", "Distribución de jugadores y funciones."],
    ["Escaneo", "Mirar alrededor antes de recibir."],
    ["Desmarque", "Movimiento para liberarse del defensor."],
    ["Superioridad", "Ventaja numérica, posicional o cualitativa."],
    ["Fijar", "Atraer al defensor para liberar a un compañero."],
    ["Cobertura", "Posición detrás del compañero para corregir errores."],
    ["Basculación", "Desplazamiento defensivo en bloque."],
    ["Balón parado", "Reanudación del juego tras una interrupción."],
    ["Juego modificado", "Versión simplificada con la misma lógica táctica."],
    ["Juego limpio", "Respeto a reglas, rivales y compañeros."],
  ],
  situacion: {
    titulo: "Liga de clase con análisis táctico",
    reto: "La clase organizará una liga de un deporte colectivo en la que cada equipo, además de jugar, preparará la estrategia, analizará sus partidos y mejorará un aspecto táctico concreto de una jornada a otra.",
    pasos: [
      "Formad equipos mixtos equilibrados con roles rotativos: capitán, analista, árbitro y anotador.",
      "Elegid un sistema de juego y unos principios de ataque y defensa sencillos.",
      "Jugad la jornada mientras el analista registra pérdidas, recuperaciones y finalizaciones.",
      "Analizad los datos y el vídeo, y fijad un objetivo táctico para la siguiente jornada.",
      "Evaluad al final de la liga la mejora táctica y el juego limpio de cada equipo.",
    ],
    producto: "Un dosier de equipo con el plan estratégico, las hojas de análisis de cada jornada, los objetivos tácticos y una valoración del juego limpio.",
    evaluacion: [
      "Se aplican principios tácticos de ataque y defensa con criterio.",
      "El análisis de los partidos es riguroso y lleva a decisiones concretas.",
      "Todos los miembros participan y asumen distintos roles.",
      "El equipo muestra juego limpio, respeto y autocontrol.",
    ],
  },
  familias: [
    "Ved juntos un partido y comentad las decisiones de los jugadores, no solo los goles.",
    "Valorad el esfuerzo y el juego limpio por encima del resultado.",
    "Apoyad el deporte femenino y mixto como algo normal.",
    "Rechazad cualquier insulto al árbitro o al rival también desde la grada.",
  ],
  saberes: B.SAB("Deportes colectivos: estructura y lógica interna, fases del juego, técnica, táctica, estrategia y sistemas, toma de decisiones, principios y medios tácticos de ataque y defensa, superioridades, deportes de red, juegos modificados, juego limpio e inclusión"),
  ideas: [
    "Grabar situaciones de 2×1 y 3×2 y analizarlas con preguntas en clase.",
    "Usar el modelo de Educación Deportiva (temporada, equipos estables, roles).",
    "Organizar torneos mixtos de deportes alternativos (ultimate, korfball) para igualar la experiencia previa.",
    "Coordinar con Matemáticas el análisis estadístico de los partidos de la liga.",
  ],
  fuentes: [
    B.FUENTES.WIKI("Deporte_de_equipo", "Deporte de equipo"),
    B.FUENTES.WIKI("Táctica_(fútbol)", "Táctica en el fútbol"),
    { t: "Consejo Superior de Deportes: juego limpio", url: "https://www.csd.gob.es/" },
  ],
});
