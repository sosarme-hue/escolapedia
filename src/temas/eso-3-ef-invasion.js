// Educación Física 3º ESO: deportes colectivos de invasión. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Educación Física";
const jug = (x, y, c, n = "") => `<circle cx="${x}" cy="${y}" r="8" fill="${c}"/>${n ? t(x, y + 4, n, { c: "#fff", s: 9 }) : ""}`;
const pista = `<rect x="14" y="20" width="232" height="130" rx="4" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"/><path d="M130 20 V 150" stroke="var(--leaf)" stroke-width="1.5"/><circle cx="130" cy="85" r="16" fill="none" stroke="var(--leaf)" stroke-width="1.5"/><rect x="14" y="65" width="8" height="40" fill="var(--muted)"/><rect x="238" y="65" width="8" height="40" fill="var(--muted)"/>`;

module.exports = {
  materia: M,
  curso: C,
  titulo: "Deportes colectivos de invasión",
  minutos: 50,
  objetivos: ["Conocer las características comunes de los deportes de invasión", "Aplicar los principios tácticos de ataque y defensa", "Conocer el reglamento básico del baloncesto, el balonmano y el fútbol sala", "Practicar el juego limpio, la cooperación y la resolución de conflictos"],
  claves: ["invasión", "ataque", "defensa", "desmarque", "espacio libre", "juego limpio"],
  pregunta: {
    texto: "¿Qué tienen en común el baloncesto, el balonmano, el fútbol y el rugby, si cada uno tiene reglas tan distintas?",
    respuesta: "Que en todos hay que <mark>invadir el campo rival</mark> para marcar mientras se defiende el propio, compartiendo el espacio con el adversario. Por eso comparten los mismos <b>principios tácticos</b>: conservar el balón, avanzar, buscar espacios libres para atacar, y presionar y proteger la portería al defender.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un deporte de invasión?</h3><p>Los <b>deportes de invasión</b> son deportes colectivos en los que dos equipos <mark>comparten el mismo espacio</mark> y luchan por el balón (o un móvil) para llevarlo a una meta: una canasta, una portería o una zona de marca.</p><p>Características comunes:</p><ul><li>Hay <b>colaboración</b> con los compañeros y <b>oposición</b> de los rivales al mismo tiempo.</li><li>Se alternan dos fases: <b>ataque</b> (con balón) y <b>defensa</b> (sin balón).</li><li>Hay contacto o proximidad con el rival, regulados por el reglamento.</li></ul><p>Ejemplos: baloncesto, balonmano, fútbol, fútbol sala, hockey, rugby, waterpolo, <i>ultimate</i> (con disco).</p>`,
    },
    {
      html: `<h3>Los principios del ataque</h3><p>Cuando mi equipo tiene el balón, los objetivos son, por orden:</p><ol><li><b>Conservar</b> el balón: pases seguros, protegerlo con el cuerpo.</li><li><b>Progresar</b> hacia la meta rival: pasar hacia delante, conducir, botar.</li><li><b>Marcar</b>: tirar en buena posición.</li></ol><p>Para conseguirlo, los jugadores sin balón son clave:</p><ul><li><b>Desmarcarse</b>: moverse para escapar del defensor y ofrecer una línea de pase.</li><li><b>Ocupar espacios libres</b> y dar <b>amplitud</b>: abrirse a las bandas para separar a los defensores.</li><li><b>Apoyar</b>: estar cerca del compañero con balón para ayudarle.</li></ul>`,
      svg: svg("Ataque: el jugador con balón tiene dos compañeros desmarcados en espacios libres con líneas de pase abiertas", `${pista}${jug(80, 85, "var(--pen)", "B")}${jug(150, 40, "var(--pen)")}${jug(160, 128, "var(--pen)")}${jug(112, 86, "var(--red)")}${jug(196, 96, "var(--red)")}
        <path d="M86 80 L 142 44 M86 90 L 152 124" stroke="var(--pen)" stroke-width="2" stroke-dasharray="5 4"/>${t(196, 36, "desmarque", { c: "var(--pen)", s: 10 })}${t(80, 112, "con balón", { c: "var(--pen)", s: 10 })}${t(130, 166, "atacantes azul · defensores rojo", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Los principios de la defensa</h3><p>Cuando el rival tiene el balón, los objetivos son:</p><ol><li><b>Recuperar</b> el balón: interceptar pases, robar sin falta.</li><li><b>Impedir el avance</b>: colocarse entre el atacante y la meta propia.</li><li><b>Proteger la meta</b>: evitar que tiren en buena posición.</li></ol><p>Hay dos sistemas básicos:</p><ul><li><b>Defensa individual</b>: cada defensor marca a un atacante concreto y lo sigue.</li><li><b>Defensa en zona</b>: cada defensor se encarga de un espacio y marca a quien entra en él.</li></ul><p>En los dos, la <b>ayuda</b> entre compañeros es fundamental: si un atacante supera a su defensor, otro sale a cerrarle el paso.</p>`,
    },
    {
      html: `<h3>Baloncesto: reglas básicas</h3><ul><li><b>Equipos</b> de 5 jugadores en pista; 4 cuartos de 10 minutos (FIBA).</li><li><b>Puntuación</b>: 2 puntos dentro de la línea de 6,75 m, 3 puntos fuera y 1 por tiro libre.</li><li><b>Pasos</b> (<i>caminar</i>): no se puede andar con el balón en las manos sin botarlo; se permiten dos apoyos tras recibir o al acabar el bote.</li><li><b>Dobles</b>: no se puede volver a botar tras coger el balón con las dos manos.</li><li><b>Reglas de tiempo</b>: 24 s para tirar, 8 s para pasar al campo rival, 3 s máximo en la zona rival.</li><li><b>Faltas</b> personales por contacto ilegal; a la quinta, el jugador queda eliminado.</li></ul>`,
      video: { id: "5F_HNvP0nZY", titulo: "¿Cómo se juega? Reglas básicas del baloncesto", canal: "SIKANA Español", vistas: 3292833, megusta: 0 },
    },
    {
      html: `<h3>Balonmano: reglas básicas</h3><ul><li><b>Equipos</b> de 7 (6 de campo y un portero); 2 partes de 30 minutos.</li><li>El balón se juega con las <b>manos</b>; no se puede tocar con la pierna por debajo de la rodilla.</li><li><b>Tres pasos</b> como máximo con el balón en la mano y <b>tres segundos</b> para retenerlo sin botar.</li><li>Se puede botar, pero no volver a botar tras coger el balón (dobles).</li><li><b>Área</b> de 6 m: solo el portero puede pisarla; los atacantes pueden tirar saltando sobre ella si despegan fuera.</li><li>Sanciones: golpe franco, <b>penalti</b> (7 m), exclusión de 2 minutos y tarjetas.</li></ul>`,
      video: { id: "JLPGP4Cp3Z4", titulo: "Las reglas del balonmano", canal: "DeportesUncomo", vistas: 454029, megusta: 0 },
    },
    {
      html: `<h3>Fútbol sala y otros deportes</h3>${tabla(["Deporte", "Jugadores", "Rasgo característico"], [["<b>Fútbol sala</b>", "5 (con portero)", "balón más pequeño y con menos bote, cambios ilimitados, 5 faltas acumuladas por parte"], ["<b>Fútbol</b>", "11", "fuera de juego; el portero usa las manos en su área"], ["<b>Hockey</b>", "11 (hierba) o 5 (sala)", "stick; solo se golpea con la parte plana"], ["<b>Rugby</b>", "15 o 7", "pase solo hacia atrás; se marca apoyando el balón (ensayo)"], ["<b>Ultimate</b>", "7", "disco volador; sin contacto y sin árbitro: autoarbitraje"]])}<p>El <b>ultimate</b> es un gran ejemplo de <b>espíritu del juego</b>: los propios jugadores señalan sus faltas.</p>`,
    },
    {
      html: `<h3>Fundamentos técnicos comunes</h3><ul><li><b>Pase y recepción</b>: mirar al compañero, pasar al espacio hacia donde se mueve y recibir con las manos (o el pie) preparadas, amortiguando.</li><li><b>Conducción o bote</b>: proteger el balón con el cuerpo, levantar la vista para ver el juego.</li><li><b>Lanzamiento o tiro</b>: buscar buena posición y precisión antes que fuerza.</li><li><b>Fintas</b>: engañar al defensor amagando una acción para hacer otra.</li><li><b>Posición defensiva</b>: piernas flexionadas, peso en la parte delantera de los pies, brazos activos y desplazamientos laterales sin cruzar las piernas.</li></ul><p>La técnica sirve a la táctica: un buen pase no es el más bonito, sino el que llega a un compañero libre.</p>`,
    },
    {
      html: `<h3>Juego limpio y convivencia</h3><p>El deporte colectivo educa en valores tanto como en habilidades. El <b>juego limpio</b> (<i>fair play</i>) significa:</p><ul><li>Respetar las <b>reglas</b> y al <b>árbitro</b>, aunque te equivoques o se equivoque.</li><li>Respetar a los <b>rivales</b>: sin ellos no hay partido.</li><li><b>Incluir</b> a todos los compañeros, también a quien tiene menos habilidad: pasar a todos hace al equipo más difícil de defender.</li><li>Saber <b>ganar sin humillar</b> y <b>perder sin enfadarse</b>.</li><li>Resolver los conflictos <b>hablando</b>, no con gritos ni empujones.</li></ul><p>En clase se usan reglas adaptadas (todos deben tocar el balón antes de tirar, puntos extra por pase) para que jueguen todos.</p>`,
    },
    {
      html: `<h3>Juegos para aprender a jugar</h3><p>Antes del deporte reglado, se practican <b>juegos modificados</b> que entrenan los principios tácticos:</p><ul><li><b>Los diez pases</b>: un equipo intenta dar diez pases seguidos sin que el otro intercepte. Entrena conservar, desmarcarse y defender.</li><li><b>Balón torre</b>: se marca pasando el balón a un compañero subido a un banco o dentro de un aro.</li><li><b>Captura la bandera</b>: dos equipos defienden su bandera e invaden el campo rival para robar la otra.</li><li><b>Partidos en superioridad</b> (3 contra 2): facilitan el ataque y la toma de decisiones.</li></ul><p>Así se aprende a <b>leer el juego</b>: dónde están los espacios y qué decisión es la mejor.</p>`,
    },
  ],
  figura: {
    titulo: "Deportes de invasión",
    svg: filas("Espacio compartido con colaboración y oposición; ataque: conservar, progresar, marcar; defensa: recuperar, impedir, proteger; reglas de baloncesto y balonmano; juego limpio", [["Invasión", "espacio compartido · colaboración + oposición", "var(--ink)"], ["Ataque", "conservar → progresar → marcar · desmarque", "var(--pen)"], ["Defensa", "recuperar · impedir avance · proteger meta", "var(--red)"], ["Reglas", "pasos · dobles · 24 s · 3 pasos y 3 s · área", "var(--leaf)"], ["Juego limpio", "respeto · inclusión · resolver hablando", "var(--inf)"]], 200),
  },
  video: { id: "UJP_mnUvOvY", titulo: "Captura la bandera: juegos de Educación Física", canal: "JuegosEF", vistas: 289941, megusta: 0, busqueda: "deportes de invasión educación física" },
  quiz: mezcla([
    { q: "En los deportes de invasión los equipos…", o: ["comparten el mismo espacio", "están separados por una red", "juegan por turnos"], a: 0, e: "Colaboración y oposición." },
    { q: "El primer objetivo del ataque es…", o: ["conservar el balón", "tirar siempre", "defender"], a: 0, e: "Luego progresar y marcar." },
    { q: "Moverse para escapar del defensor y ofrecer un pase es…", o: ["desmarcarse", "fintar", "botar"], a: 0, e: "Clave sin balón." },
    { q: "En la defensa en zona, cada defensor se encarga de…", o: ["un espacio", "un atacante concreto", "el árbitro"], a: 0, e: "En individual, de un jugador." },
    { q: "Un tiro desde fuera de la línea de 6,75 m vale en baloncesto…", o: ["3 puntos", "2 puntos", "1 punto"], a: 0, e: "Triple." },
    { q: "En baloncesto, el equipo atacante tiene para tirar…", o: ["24 segundos", "60 segundos", "3 segundos"], a: 0, e: "Posesión." },
    { q: "En balonmano, con el balón en la mano se pueden dar como máximo…", o: ["3 pasos", "5 pasos", "ninguno"], a: 0, e: "Y retenerlo 3 s." },
    { q: "En balonmano, el área de 6 m solo puede pisarla…", o: ["el portero", "cualquier jugador", "el capitán"], a: 0, e: "Zona del portero." },
    { q: "En rugby, el pase con la mano solo puede ir…", o: ["hacia atrás", "hacia delante", "en vertical"], a: 0, e: "Rasgo característico." },
    { q: "El deporte de invasión que se juega con autoarbitraje es el…", o: ["ultimate", "baloncesto", "hockey"], a: 0, e: "Espíritu del juego." },
  ]),
  examen: mezcla([
    { q: "Abrirse a las bandas para separar a los defensores es dar…", o: ["amplitud", "profundidad defensiva", "falta"], a: 0, e: "Ocupar espacios." },
    { q: "Coger el balón con dos manos y volver a botar en baloncesto es…", o: ["dobles", "pasos", "falta técnica"], a: 0, e: "Infracción." },
    { q: "El juego de los diez pases entrena sobre todo…", o: ["conservar el balón", "el tiro a portería", "la flexibilidad"], a: 0, e: "Y desmarcarse." },
  ]),
  feynman: ["Qué define a un deporte de invasión", "Los principios de ataque y de defensa", "Dos reglas básicas del baloncesto y del balonmano", "Qué es el juego limpio con ejemplos"],
  mapa: mapa("INVASIÓN", "var(--eso)", [
    ["Ataque", "conservar · progresar", "var(--pen)"],
    ["Defensa", "recuperar · proteger", "var(--red)"],
    ["Reglas", "baloncesto · balonmano", "var(--leaf)"],
    ["Valores", "juego limpio", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Deporte de invasión", "Dos equipos comparten espacio para llevar un móvil a la meta rival."],
    ["Desmarque", "Moverse para escapar del defensor y ofrecer pase."],
    ["Amplitud", "Ocupar las bandas para separar a los defensores."],
    ["Defensa individual", "Cada defensor marca a un atacante."],
    ["Defensa en zona", "Cada defensor protege un espacio."],
    ["Pasos (baloncesto)", "Andar con el balón sin botar: infracción."],
    ["Tres pasos y tres segundos", "Límites con el balón en la mano en balonmano."],
    ["Juego limpio", "Respetar reglas, árbitro, rivales y compañeros."],
  ],
  familias: ["Ved juntos un partido y fijaos en los desmarques de los jugadores sin balón.", "Comentad una jugada de juego limpio que hayáis visto en el deporte profesional.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Deportes colectivos de invasión: lógica interna, principios tácticos de ataque y defensa, sistemas defensivos, fundamentos técnicos, reglamento básico de baloncesto, balonmano y fútbol sala, juego limpio y resolución de conflictos (RD 217/2022, Educación Física).",
    ideas: ["Juegos modificados (diez pases, balón torre) con reflexión táctica posterior.", "Torneo con puntos de juego limpio que suman a la clasificación.", "Ultimate con autoarbitraje y círculo final de valoración."],
  },
  fuentes: [RD, { t: "Federación Española de Baloncesto: reglamento", url: "https://www.feb.es/" }, { t: "Real Federación Española de Balonmano: reglamento", url: "https://www.rfebm.com/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Situaciones de juego",
  ejemplos: [
    { enunciado: "Tu equipo ataca en 3 contra 2 y tú tienes el balón. Un defensor sale a por ti. ¿Qué haces?",
      pasos: ["El defensor que sale te deja un compañero libre.", "Fija al defensor avanzando hacia él.", "Pasa al compañero desmarcado justo antes del contacto."],
      resultado: "Superioridad aprovechada: pase al jugador libre." },
    { enunciado: "Defendéis en individual y un rival supera a su defensor por la banda. ¿Qué hace el resto del equipo?",
      pasos: ["El defensor más cercano sale a cerrarle el paso (ayuda).", "Los demás reajustan para cubrir al atacante que ha quedado libre.", "El defensor superado se recupera hacia su meta."],
      resultado: "Ayuda y cobertura entre compañeros." },
    { enunciado: "En balonmano, un jugador recibe, da cuatro pasos y tira. ¿Qué pasa?",
      pasos: ["Máximo permitido: tres pasos sin botar.", "Cuatro pasos: infracción de pasos.", "Sanción: golpe franco para el rival."],
      resultado: "El balón pasa al equipo contrario." },
  ],
  errores: [
    "Ir todos hacia el balón (juego en «racimo») en lugar de ocupar espacios.",
    "Quedarse quieto sin balón esperando a que te lo pasen.",
    "Defender mirando solo el balón y perder al atacante.",
    "Botar sin levantar la vista.",
    "Pasar siempre a los mismos compañeros.",
    "Protestar al árbitro o al rival en lugar de seguir jugando.",
  ],
  ejercicios: [
    { q: "Nombra cinco deportes de invasión y su meta.", sol: "Baloncesto (canasta), balonmano (portería), fútbol (portería), rugby (zona de marca), hockey (portería)." },
    { q: "Ordena los objetivos del ataque y de la defensa.", sol: "Ataque: conservar, progresar, marcar. Defensa: recuperar, impedir el avance, proteger la meta." },
    { q: "¿Qué ventajas e inconvenientes tiene la defensa individual?", sol: "Ventaja: responsabilidad clara y presión. Inconveniente: si te superan, queda un atacante libre y exige mucho esfuerzo físico." },
    { q: "Explica tres reglas de tiempo del baloncesto.", sol: "24 s para tirar, 8 s para pasar a campo rival, 3 s máximo en la zona rival." },
    { q: "¿Cuántos puntos suman 4 canastas de 2, 2 triples y 3 tiros libres?", sol: "8 + 6 + 3 = 17 puntos." },
    { q: "¿Qué diferencia hay entre los pasos del baloncesto y los del balonmano?", sol: "En baloncesto, dos apoyos sin botar; en balonmano, hasta tres pasos con el balón en la mano." },
    { q: "Describe la posición defensiva básica.", sol: "Piernas flexionadas y separadas, peso adelante, brazos activos, desplazamientos laterales sin cruzar las piernas." },
    { q: "¿Qué es una finta? Pon un ejemplo.", sol: "Un engaño al defensor: amagar un tiro para luego pasar o penetrar." },
    { q: "Propón dos reglas adaptadas para que participen todos en un partido de clase.", sol: "Todos deben tocar el balón antes de tirar; un gol vale doble si lo marca quien aún no ha marcado." },
    { q: "Diseña un juego modificado para practicar el desmarque.", sol: "Respuesta abierta; por ejemplo, diez pases sin bote en un espacio reducido con 4 contra 3." },
  ],
};
