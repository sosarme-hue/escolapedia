// Educación Física 2º ESO: habilidades y juegos deportivos. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Habilidades y juegos deportivos",
  minutos: 45,
  objetivos: ["Distinguir habilidades motrices básicas y específicas", "Reconocer las cualidades coordinativas: coordinación y equilibrio", "Conocer los juegos predeportivos y su utilidad", "Practicar el juego limpio y la cooperación"],
  claves: ["habilidades motrices", "desplazamientos", "saltos", "giros", "lanzamientos y recepciones", "juegos predeportivos", "juego limpio"],
  pregunta: {
    texto: "¿Qué tienen en común un salto de longitud, un mate de baloncesto y saltar a la comba?",
    respuesta: "Todos se basan en una <b>habilidad motriz básica</b>: el <b>salto</b>. Las habilidades básicas (desplazarse, saltar, girar, lanzar y recibir) se aprenden de pequeños y, al combinarlas y especializarlas, se convierten en las <mark>habilidades específicas</mark> de cada deporte.",
  },
  bloques: [
    {
      html: `<h3>Habilidades motrices básicas</h3><p>Son los movimientos fundamentales que todos aprendemos en la infancia y que están en la base de cualquier deporte:</p>${tabla(["Habilidad", "Ejemplos"], [["Desplazamientos", "andar, correr, cuadrupedia, reptar, trepar, nadar"], ["Saltos", "a pies juntos, a una pierna, en altura, en longitud"], ["Giros", "sobre el eje longitudinal (pirueta), transversal (voltereta) y anteroposterior (rueda lateral)"], ["Lanzamientos", "con una o dos manos, con el pie, de precisión o de distancia"], ["Recepciones", "atrapar, controlar, parar un objeto"]])}<p>Cuantas más experiencias motrices variadas tengas, más fácil te resultará aprender cualquier deporte.</p>`,
      video: { id: "OI62iNg7H14", titulo: "Qué son las habilidades motrices básicas", canal: "Educación Física Internacional", vistas: 582212 },
    },
    {
      html: `<h3>De básicas a específicas</h3><p>Las <b>habilidades específicas</b> son las propias de cada deporte. Nacen de las básicas, pero con una técnica concreta y un reglamento:</p><ul><li>Correr + botar el balón → <b>bote</b> en baloncesto.</li><li>Saltar + lanzar → <b>tiro en suspensión</b>.</li><li>Recepción con el antebrazo → <b>toque de antebrazos</b> en voleibol.</li><li>Lanzamiento con raqueta → <b>clear</b> en bádminton.</li><li>Giro sobre el eje transversal → <b>voltereta</b> en gimnasia.</li></ul><p>Por eso en 2.º de ESO se trabaja primero la base y después la técnica de cada deporte.</p>`,
      svg: svg("Esquema de habilidades básicas que se combinan para formar habilidades específicas de cada deporte", `${[["correr", 30], ["saltar", 70], ["lanzar", 110], ["recibir", 150]].map(([n, y]) => `<rect x="14" y="${y - 14}" width="74" height="24" rx="6" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)"/>${t(51, y + 2, n, { c: "var(--pen)", s: 11 })}`).join("")}
        ${[["bote", 40], ["tiro en salto", 90], ["antebrazos", 140]].map(([n, y]) => `<rect x="146" y="${y - 16}" width="104" height="28" rx="6" fill="var(--leaf)" fill-opacity=".14" stroke="var(--leaf)"/>${t(198, y + 2, n, { c: "var(--leaf)", s: 11 })}`).join("")}
        <path d="M88 26 L 146 38 M88 66 L 146 86 M88 106 L 146 92 M88 146 L 146 138 M88 26 L 146 42" stroke="var(--muted)" stroke-width="1.5"/>${t(51, 176, "básicas", { s: 11 })}${t(198, 176, "específicas", { s: 11 })}`),
    },
    {
      html: `<h3>Las cualidades coordinativas</h3><p>Para que una habilidad salga bien no basta con fuerza o velocidad: hace falta <b>control</b> del movimiento.</p><ul><li><b>Coordinación</b>: capacidad de mover varias partes del cuerpo a la vez de forma ordenada y eficaz. Puede ser <b>dinámica general</b> (todo el cuerpo, como saltar a la comba) u <b>óculo-manual / óculo-pédica</b> (ojo con mano o pie, como botar o conducir un balón).</li><li><b>Equilibrio</b>: mantener el cuerpo en la posición deseada. Puede ser <b>estático</b> (quieto, como una pose de yoga) o <b>dinámico</b> (en movimiento, como andar sobre un banco).</li></ul><p>Se mejoran con práctica variada: malabares, circuitos de obstáculos, juegos con móviles distintos.</p>`,
      svg: svg("Muñeco en equilibrio estático a una pierna y otro botando un balón como ejemplo de coordinación óculo-manual", `${persona(70, 40, "var(--inf)", { brazos: [[-22, -2], [22, -2]], piernas: [[0, 26], [18, 6]] })}<path d="M40 128 H 100" stroke="var(--line)" stroke-width="3"/>${persona(185, 40, "var(--sun)", { brazos: [[-14, 12], [16, 22]] })}<circle cx="205" cy="104" r="9" fill="var(--sun)" fill-opacity=".5" stroke="var(--sun)"/><path d="M205 80 V 92" stroke="var(--sun)" stroke-dasharray="3 3"/>${t(70, 150, "equilibrio", { c: "var(--inf)", s: 11 })}${t(70, 166, "estático", { c: "var(--inf)", s: 11 })}${t(190, 150, "coordinación", { c: "var(--sun)", s: 11 })}${t(190, 166, "óculo-manual", { c: "var(--sun)", s: 11 })}`),
    },
    {
      html: `<h3>Los juegos predeportivos</h3><p>Son juegos con <b>reglas sencillas</b> que preparan para un deporte. Usan sus habilidades pero con menos exigencia técnica, campos más pequeños y menos jugadores.</p>${tabla(["Juego predeportivo", "Prepara para…"], [["Los diez pases", "baloncesto, balonmano: pase y desmarque"], ["Balón tiro", "balonmano, voleibol: lanzar y esquivar"], ["Voleibol con recepción (atrapar y lanzar)", "voleibol"], ["Pies quietos / la bomba", "lanzamientos y recepciones"], ["Ultimate con disco", "deportes colectivos sin contacto"]])}<p>Su gran ventaja: <mark>todo el mundo participa</mark> desde el primer día, se aprende jugando y se entiende la táctica (atacar, defender, ocupar espacios).</p>`,
      video: { id: "hKuiqdjG5UE", titulo: "Juegos predeportivos", canal: "Educación Física, Deporte y Recreación", vistas: 97425 },
    },
    {
      html: `<h3>Ejemplo: los diez pases</h3><p>Dos equipos de 5 en media pista. El equipo con balón intenta dar <b>10 pases seguidos</b> sin que el balón caiga ni lo intercepte el rival. Reglas:</p><ul><li>No se puede botar ni correr con el balón.</li><li>No se puede devolver el pase a quien te lo dio.</li><li>Sin contacto: se defiende interceptando, no quitando de las manos.</li><li>Si se consigue, 1 punto y el balón pasa al otro equipo.</li></ul><p>Trabaja el <b>pase</b>, la <b>recepción</b>, el <b>desmarque</b> (moverse a un espacio libre) y la defensa del espacio: lo mismo que en baloncesto o balonmano.</p>`,
      svg: svg("Campo con cinco atacantes que se pasan el balón y defensores intentando interceptar", `<rect x="16" y="16" width="228" height="140" rx="6" fill="var(--leaf)" fill-opacity=".08" stroke="var(--leaf)"/>${[[50, 50], [110, 36], [180, 60], [80, 120], [200, 128]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="var(--pen)"/>`).join("")}${[[90, 72], [150, 96], [140, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="none" stroke="var(--red)" stroke-width="3"/>`).join("")}<path d="M50 50 L 110 36 L 180 60 L 200 128" fill="none" stroke="var(--sun)" stroke-width="2" stroke-dasharray="5 4"/>${t(130, 172, "azul: atacan · rojo: defienden", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Principios tácticos básicos</h3><p>En los juegos de equipo hay ideas que valen para casi todos los deportes:</p><ul><li><b>En ataque</b>: conservar el balón, avanzar hacia la meta, ocupar espacios libres y desmarcarse, apoyar al compañero con balón.</li><li><b>En defensa</b>: recuperar el balón, impedir el avance, proteger la propia meta, marcar a un rival o defender una zona.</li></ul><p>Pensar «¿dónde está el espacio libre?» es tan importante como saber pasar bien.</p>`,
    },
    {
      html: `<h3>Juego limpio y cooperación</h3><p>El <b>juego limpio</b> (fair play) significa competir respetando las reglas, a los compañeros, a los rivales y al árbitro. Algunos comportamientos:</p><ul><li>Reconocer una falta propia sin que la pite el árbitro.</li><li>Saludar al rival al empezar y al acabar.</li><li>Animar a los compañeros, también cuando se equivocan.</li><li>Aceptar la derrota y ganar sin burlarse.</li><li>Integrar a todos: que todo el equipo toque balón.</li></ul><p>En clase, además, existen <b>juegos cooperativos</b> en los que no hay rivales: todo el grupo colabora para lograr un reto común (por ejemplo, mantener un globo en el aire sin que caiga).</p>`,
    },
    {
      html: `<h3>Progresión de aprendizaje</h3><p>Para aprender una habilidad deportiva conviene seguir un orden:</p><ol><li><b>Exploración</b>: probar libremente con el móvil (balón, raqueta).</li><li><b>Técnica analítica</b>: practicar el gesto por partes, sin oposición.</li><li><b>Situaciones reducidas</b>: 2 contra 1, 3 contra 2, juegos predeportivos.</li><li><b>Juego real</b> adaptado: el deporte con reglas sencillas.</li></ol><p>Equivocarse forma parte del aprendizaje: cada error da información para corregir.</p>`,
      svg: svg("Cuatro pasos de aprendizaje de menos a más complejo: exploración, técnica, situaciones reducidas y juego real", chips([["1. Exploración", "probar libremente con el móvil", "var(--pen)"], ["2. Técnica", "el gesto por partes, sin rival", "var(--leaf)"], ["3. Situaciones reducidas", "2 contra 1 · 3 contra 2", "var(--sun)"], ["4. Juego real", "el deporte con reglas sencillas", "var(--red)"]], 8, 36), 180),
    },
  ],
  figura: {
    titulo: "Habilidades y juegos deportivos",
    svg: filas("Resumen: habilidades básicas, específicas, coordinación, equilibrio, juegos predeportivos y juego limpio", [["Básicas", "desplazar · saltar · girar · lanzar · recibir", "var(--pen)"], ["Específicas", "técnica de cada deporte", "var(--leaf)"], ["Coordinación", "general · óculo-manual · óculo-pédica", "var(--sun)"], ["Equilibrio", "estático · dinámico", "var(--inf)"], ["Predeportivos", "reglas sencillas · todos participan", "var(--red)"], ["Juego limpio", "respetar reglas, rivales y árbitro", "var(--ink)"]], 200),
  },
  video: { id: "OI62iNg7H14", titulo: "Qué son las habilidades motrices básicas", canal: "Educación Física Internacional", vistas: 582212, megusta: 0, busqueda: "habilidades motrices básicas educación física" },
  quiz: mezcla([
    { q: "¿Cuál NO es una habilidad motriz básica?", o: ["el mate", "el salto", "el giro"], a: 0, e: "El mate es específica." },
    { q: "Una voltereta es un giro sobre el eje…", o: ["transversal", "longitudinal", "vertical"], a: 0, e: "Rodar hacia delante." },
    { q: "Botar un balón exige coordinación…", o: ["óculo-manual", "óculo-pédica", "estática"], a: 0, e: "Ojo y mano." },
    { q: "Andar sobre un banco sueco es equilibrio…", o: ["dinámico", "estático", "nulo"], a: 0, e: "En movimiento." },
    { q: "Los juegos predeportivos tienen…", o: ["reglas sencillas", "reglas oficiales", "ninguna regla"], a: 0, e: "Preparan para un deporte." },
    { q: "Moverse a un espacio libre para recibir es…", o: ["desmarcarse", "marcar", "botar"], a: 0, e: "Principio de ataque." },
    { q: "Reconocer una falta propia es un ejemplo de…", o: ["juego limpio", "táctica", "técnica"], a: 0, e: "Fair play." },
    { q: "En un juego cooperativo…", o: ["todos colaboran para un reto común", "hay un ganador", "se elimina"], a: 0, e: "Sin rivales." },
    { q: "Las habilidades específicas nacen de las…", o: ["básicas", "de la flexibilidad", "de la nada"], a: 0, e: "Se especializan." },
    { q: "En los diez pases no se puede…", o: ["devolver el pase a quien te lo dio", "pasar", "desmarcarse"], a: 0, e: "Regla del juego." },
  ]),
  examen: mezcla([
    { q: "Una rueda lateral es un giro sobre el eje…", o: ["anteroposterior", "transversal", "longitudinal"], a: 0, e: "De delante atrás." },
    { q: "Conducir un balón con el pie exige coordinación…", o: ["óculo-pédica", "óculo-manual", "estática"], a: 0, e: "Ojo y pie." },
    { q: "El paso entre técnica analítica y juego real son…", o: ["las situaciones reducidas", "los estiramientos", "el calentamiento"], a: 0, e: "2 × 1, 3 × 2…" },
  ]),
  feynman: ["Las cinco habilidades motrices básicas", "Diferencia entre habilidad básica y específica", "Coordinación y equilibrio", "Qué es un juego predeportivo", "Qué significa juego limpio"],
  mapa: mapa("HABILIDADES", "var(--eso)", [
    ["Básicas", "desplazar · saltar · girar", "var(--pen)"],
    ["Específicas", "técnica deportiva", "var(--leaf)"],
    ["Coordinativas", "coordinación · equilibrio", "var(--sun)"],
    ["Juegos", "predeportivos · cooperativos", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Habilidad básica", "Movimiento fundamental: desplazar, saltar, girar, lanzar, recibir."],
    ["Habilidad específica", "Gesto técnico propio de un deporte."],
    ["Coordinación", "Mover varias partes del cuerpo de forma ordenada."],
    ["Equilibrio estático", "Mantener una postura quieto."],
    ["Equilibrio dinámico", "Mantener el control en movimiento."],
    ["Juego predeportivo", "Juego con reglas sencillas que prepara para un deporte."],
    ["Desmarque", "Moverse a un espacio libre para recibir."],
    ["Juego limpio", "Competir respetando reglas y personas."],
  ],
  familias: ["Jugad a lanzar y atrapar con distintos objetos (pelota, cojín, frisbi).", "Probad juntos el equilibrio a una pierna con ojos cerrados.", "Hablad de un ejemplo de juego limpio visto en el deporte profesional."],
  profesores: {
    saberes: "Habilidades motrices básicas y específicas; capacidades coordinativas; juegos predeportivos y principios tácticos comunes; juego limpio y cooperación (RD 217/2022, Educación Física, resolución de problemas en situaciones motrices; autorregulación emocional e interacción social).",
    ideas: ["Circuito de habilidades básicas por estaciones.", "Torneo de juegos predeportivos con puntos de juego limpio.", "Retos cooperativos en pequeños grupos."],
  },
  fuentes: [RD, { t: "Consejo Superior de Deportes: juego limpio", url: "https://www.csd.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Analiza qué habilidades básicas forman una entrada a canasta.", pasos: ["Desplazamiento (carrera) con bote.", "Salto a una pierna.", "Lanzamiento a canasta."], resultado: "Desplazamiento + salto + lanzamiento." },
    { enunciado: "En los diez pases tu equipo pierde siempre el balón. ¿Qué principio táctico mejorarías?", pasos: ["Los compañeros están quietos o tapados.", "Hay que ocupar espacios libres y ofrecer apoyos."], resultado: "Desmarcarse y apoyar al poseedor." },
    { enunciado: "Propón un juego cooperativo para 6 personas.", pasos: ["Material: un globo.", "Reto: 30 toques sin que caiga y sin repetir persona dos veces seguidas."], resultado: "«El globo que no cae»." },
  ],
  errores: [
    "Pensar que las habilidades básicas «ya no hacen falta» en secundaria.",
    "Confundir equilibrio estático y dinámico.",
    "Querer jugar el deporte oficial sin pasar por situaciones más sencillas.",
    "Quedarse quieto esperando el balón en lugar de desmarcarse.",
    "Ganar a cualquier precio olvidando el juego limpio.",
  ],
  ejercicios: [
    { q: "Escribe las cinco habilidades motrices básicas con un ejemplo de cada una.", sol: "Desplazamiento (correr), salto (comba), giro (voltereta), lanzamiento (tiro), recepción (atrapar)." },
    { q: "Indica de qué habilidad básica procede el remate de voleibol.", sol: "Salto y golpeo/lanzamiento." },
    { q: "¿Qué es la coordinación óculo-pédica? Ejemplo.", sol: "Coordinar ojo y pie: conducir un balón de fútbol." },
    { q: "Pon un ejemplo de equilibrio estático y otro de dinámico.", sol: "Estático: pino o pose a una pierna. Dinámico: andar por un bordillo." },
    { q: "¿Qué ventajas tienen los juegos predeportivos?", sol: "Todos participan, reglas sencillas, se aprende táctica jugando." },
    { q: "Nombra dos principios de ataque y dos de defensa.", sol: "Ataque: conservar, avanzar. Defensa: recuperar, proteger la meta." },
    { q: "Explica las reglas de los diez pases.", sol: "10 pases seguidos sin botar, sin devolver al pasador y sin contacto." },
    { q: "Escribe tres conductas de juego limpio.", sol: "Saludar al rival, reconocer faltas, aceptar la derrota." },
    { q: "Ordena: juego real, exploración, situaciones reducidas, técnica.", sol: "Exploración, técnica, situaciones reducidas, juego real." },
    { q: "Inventa un juego predeportivo y explica sus reglas.", sol: "Respuesta abierta." },
  ],
};
