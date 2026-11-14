// Educación Física 1º ESO: deportes colectivos, fútbol sala y balonmano. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Deportes colectivos: fútbol sala y balonmano",
  minutos: 45,
  objetivos: ["Conocer los elementos comunes de los deportes colectivos de invasión", "Aprender el reglamento básico del fútbol sala y del balonmano", "Practicar los gestos técnicos básicos de ambos deportes", "Aplicar principios tácticos sencillos de ataque y defensa"],
  claves: ["deporte de invasión", "fútbol sala", "balonmano", "pase", "desmarque", "área"],
  pregunta: {
    texto: "El fútbol sala y el balonmano se juegan en la misma pista. ¿En qué se parecen además del campo?",
    respuesta: "Los dos son <b>deportes colectivos de invasión</b>: dos equipos comparten el espacio y luchan por un balón para llevarlo a la portería rival. <mark>Comparten principios tácticos</mark> como pasar al compañero libre, desmarcarse, ocupar los espacios y defender juntos. Cambia sobre todo el reglamento: en uno se juega con los pies y en el otro con las manos.",
  },
  bloques: [
    {
      html: `<h3>Los deportes colectivos de invasión</h3><p>En los <b>deportes de invasión</b> dos equipos comparten el mismo espacio, juegan a la vez y luchan por un móvil para conseguir un objetivo en el campo contrario. Ejemplos: fútbol, baloncesto, balonmano, hockey, rugby.</p><p>Todos tienen elementos comunes:</p><ul><li>Un <b>móvil</b> (balón, disco).</li><li>Un <b>espacio</b> de juego con zonas delimitadas.</li><li>Una <b>meta</b> (portería, canasta).</li><li><b>Compañeros</b> con los que cooperar y <b>adversarios</b> a los que oponerse.</li><li>Un <b>reglamento</b> que regula todo lo anterior.</li></ul><p>Y dos situaciones: <b>ataque</b> (cuando tenemos el balón) y <b>defensa</b> (cuando lo tiene el rival).</p>`,
    },
    {
      html: `<h3>El fútbol sala: reglamento básico</h3>${tabla(["Aspecto", "Regla"], [["Jugadores", "5 por equipo (4 de campo y 1 portero); cambios ilimitados"], ["Duración", "2 partes de 20 minutos a reloj parado"], ["Balón", "más pequeño y con menos bote que el de fútbol"], ["Saque de banda", "con el pie, balón parado sobre la línea, en 4 segundos"], ["Portero", "no puede tener el balón más de 4 segundos en su campo"], ["Faltas acumuladas", "a partir de la 6.ª falta de un equipo en cada parte, tiro libre directo desde 10 m sin barrera"], ["Penalti", "desde 6 m"]])}<p>No hay fuera de juego y las <b>entradas por el suelo</b> para quitar el balón a un rival están prohibidas. Es un deporte muy rápido, con muchos toques de balón para cada jugador.</p>`,
      video: vb("dcoB2"),
    },
    {
      html: `<h3>La técnica del fútbol sala</h3><ul><li><b>Conducción</b>: llevar el balón con toques suaves, sobre todo con el interior y la <b>planta</b> del pie, mirando al frente y no solo al balón.</li><li><b>Pase</b>: con el <b>interior</b> del pie para pases cortos y precisos; pie de apoyo al lado del balón y mirando al compañero.</li><li><b>Control</b>: con la <b>planta</b> (pisando el balón) o con el interior, amortiguando.</li><li><b>Tiro</b>: con el empeine o la puntera, buscando las esquinas de la portería.</li></ul><p>En una pista pequeña el uso de la <b>planta</b> es muy característico: permite proteger el balón y cambiar de dirección rápidamente.</p>`,
      svg: svg("Pie visto desde arriba con las superficies de contacto: interior, empeine, exterior y planta", `<path d="M110 160 C 82 160 80 120 86 90 C 92 54 100 30 128 26 C 156 30 166 60 166 96 C 166 128 152 160 124 160 Z" fill="var(--sun)" fill-opacity=".2" stroke="var(--sun)" stroke-width="2.5"/><path d="M90 70 C 86 90 86 120 96 146" stroke="var(--pen)" stroke-width="7" stroke-opacity=".5" fill="none"/><path d="M162 70 C 166 96 162 124 152 146" stroke="var(--red)" stroke-width="7" stroke-opacity=".5" fill="none"/><ellipse cx="126" cy="66" rx="20" ry="16" fill="var(--leaf)" fill-opacity=".4"/>${t(54, 104, "interior", { s: 11, c: "var(--pen)" })}${t(206, 104, "exterior", { s: 11, c: "var(--red)" })}${t(126, 70, "empeine", { s: 10, c: "var(--leaf)" })}${t(126, 128, "planta", { s: 10, c: "var(--muted)" })}${t(130, 18, "pie derecho visto desde arriba", { s: 10, c: "var(--muted)" })}`),
    },
    {
      html: `<h3>El balonmano: reglamento básico</h3>${tabla(["Aspecto", "Regla"], [["Jugadores", "7 por equipo (6 de campo y 1 portero); cambios ilimitados"], ["Duración", "2 partes de 30 minutos (más cortas en categorías jóvenes)"], ["Área", "zona de 6 m en la que solo puede estar el portero"], ["Pasos", "como máximo 3 pasos con el balón en la mano"], ["Tiempo", "como máximo 3 segundos con el balón sin botar ni pasar"], ["Dobles", "no se puede botar, agarrar y volver a botar"], ["Penalti", "desde 7 m"], ["Sanciones", "amonestación, exclusión de 2 minutos y descalificación"]])}<p>El golpe franco se lanza desde la línea discontinua de <b>9 m</b>. El jugador puede lanzar desde el aire <b>saltando hacia el área</b>, siempre que suelte el balón antes de tocar el suelo dentro de ella.</p>`,
      svg: svg("Media pista de balonmano con la portería, el área de 6 metros, la línea discontinua de 9 metros y el punto de penalti a 7 metros", `<path d="M20 160 H 240" stroke="var(--ink)" stroke-width="2"/><rect x="112" y="160" width="36" height="8" fill="var(--ink)"/><path d="M40 160 A 90 74 0 0 1 220 160" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/><path d="M14 160 A 116 112 0 0 1 246 160" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="6 5"/><path d="M124 66 H 136" stroke="var(--ink)" stroke-width="3"/>${t(130, 128, "área 6 m (solo portero)", { s: 10, c: "var(--pen)" })}${t(130, 60, "7 m", { s: 10 })}${t(130, 38, "9 m: golpe franco", { s: 10, c: "var(--red)" })}`, 176),
      video: vb("dcoB"),
    },
    {
      html: `<h3>La técnica del balonmano</h3><ul><li><b>Pase</b>: el más usado es el pase <b>en apoyo</b> por encima del hombro, con el codo alto y la pierna contraria adelantada. Para distancias cortas, el pase de pecho.</li><li><b>Recepción</b>: brazos extendidos hacia el balón, manos formando un «embudo» con los pulgares juntos y amortiguando hacia el pecho.</li><li><b>Bote</b>: con la yema de los dedos, a la altura de la cintura y protegiendo el balón con el cuerpo.</li><li><b>Lanzamiento en salto</b>: batida con la pierna contraria al brazo de lanzamiento, elevar el brazo con el codo alto y lanzar en el punto más alto.</li></ul><p>Recuerda la regla de los <b>3 pasos</b>: puedes dar 3 pasos, botar y dar otros 3 antes de pasar o lanzar.</p>`,
    },
    {
      html: `<h3>Principios tácticos de ataque</h3><p>Cuando tu equipo tiene el balón, todos atacan:</p><ul><li><b>Conservar el balón</b>: pases seguros al compañero libre.</li><li><b>Desmarcarse</b>: moverse a un espacio libre para ofrecer una línea de pase. Un jugador quieto es fácil de defender.</li><li><b>Ocupar el espacio</b> de forma amplia: abrirse a las bandas para separar a los defensores.</li><li><b>Avanzar</b> hacia la portería rival y buscar el lanzamiento en buena posición.</li><li><b>Pasa y va</b>: después de pasar, moverse para recibir de nuevo (la pared).</li></ul>`,
      svg: svg("Esquema de un desmarque: el atacante con balón pasa a un compañero que se mueve a un espacio libre alejándose de su defensor", `<rect x="14" y="20" width="232" height="140" rx="6" fill="var(--leaf)" fill-opacity=".08" stroke="var(--line)" stroke-width="2"/>${persona(60, 80, "var(--pen)", { brazos: [[-14, 8], [16, 2]] })}<circle cx="78" cy="96" r="5" fill="var(--sun)"/>${persona(150, 46, "var(--red)")}${persona(198, 76, "var(--pen)", { brazos: [[-16, -6], [16, -6]] })}<path d="M156 62 Q 176 60 188 70" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#col1)"/><path d="M84 96 L 182 92" stroke="var(--sun)" stroke-width="2" marker-end="url(#col2)"/><defs><marker id="col1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker><marker id="col2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--sun)"/></marker></defs>${t(150, 34, "defensor", { s: 9, c: "var(--red)" })}${t(198, 154, "se desmarca", { s: 9, c: "var(--pen)" })}${t(60, 154, "pasa", { s: 9, c: "var(--pen)" })}`, 176),
    },
    {
      html: `<h3>Principios tácticos de defensa</h3><p>Cuando el rival tiene el balón, todos defienden:</p><ul><li><b>Replegarse</b> rápidamente hacia la propia portería.</li><li><b>Marcar</b>: colocarse entre el atacante y la portería, un poco de lado, con las piernas flexionadas.</li><li><b>Ayudar</b> al compañero que ha sido superado (cobertura).</li><li><b>Interceptar</b> pases cortando las líneas de pase.</li><li><b>Recuperar</b> el balón sin cometer falta.</li></ul><p>Hay dos sistemas básicos: la defensa <b>individual</b> (cada uno marca a un rival) y la defensa <b>en zona</b> (cada uno defiende un espacio). En balonmano es muy habitual la defensa en línea delante del área, llamada <b>6:0</b>.</p>`,
    },
    {
      html: `<h3>Juego limpio y trabajo en equipo</h3><p>En un deporte colectivo nadie gana solo. Actitudes que hacen mejor a un equipo:</p><ul><li><b>Pasar</b> a quien está mejor colocado, aunque no sea tu amigo.</li><li><b>Animar</b> a los compañeros, sobre todo cuando se equivocan.</li><li><b>Respetar</b> al árbitro, a los rivales y las reglas.</li><li><b>Saludar</b> al rival al terminar, ganes o pierdas.</li><li>Pedir perdón si haces daño a alguien sin querer.</li></ul><p>En clase se juega con <b>reglas adaptadas</b> (todos deben tocar el balón antes de tirar, el gol de una chica o de quien aún no ha marcado vale doble) para que todo el mundo participe y aprenda.</p>`,
    },
  ],
  figura: {
    titulo: "Fútbol sala y balonmano en un vistazo",
    svg: filas("Resumen: deportes de invasión; fútbol sala con 5 jugadores, 2 partes de 20 minutos y faltas acumuladas; balonmano con 7 jugadores, área de 6 metros, 3 pasos y 3 segundos; ataque con desmarque; defensa con repliegue y marcaje", [["Invasión", "móvil · meta · compañeros · rivales", "var(--pen)"], ["Fútbol sala", "5 jugadores · 2 × 20 min", "var(--leaf)"], ["F. sala técnica", "planta · interior · conducción", "var(--leaf)"], ["Balonmano", "7 jugadores · área 6 m · 7 m", "var(--sun)"], ["Ataque", "desmarque · pasa y va", "var(--red)"], ["Defensa", "repliegue · marcaje · ayuda", "var(--ink)"]], 200),
  },
  video: vg("dcoV"),
  quiz: mezcla([
    { q: "En fútbol sala juegan por equipo…", o: ["5", "7", "11"], a: 0, e: "4 + portero." },
    { q: "El saque de banda en fútbol sala se hace…", o: ["con el pie", "con las manos", "botando"], a: 0, e: "Balón parado en la línea." },
    { q: "En fútbol sala, la parte del pie muy usada para controlar es la…", o: ["planta", "rodilla", "puntera"], a: 0, e: "Pisar el balón." },
    { q: "En balonmano juegan por equipo…", o: ["7", "5", "6"], a: 0, e: "6 + portero." },
    { q: "El área de balonmano mide…", o: ["6 m", "9 m", "11 m"], a: 0, e: "Solo el portero." },
    { q: "En balonmano puedes dar como máximo…", o: ["3 pasos con el balón", "5 pasos", "pasos ilimitados"], a: 0, e: "Regla de los 3 pasos." },
    { q: "El penalti en balonmano se lanza desde…", o: ["7 m", "6 m", "9 m"], a: 0, e: "7 metros." },
    { q: "Moverse a un espacio libre para recibir es…", o: ["desmarcarse", "replegarse", "marcar"], a: 0, e: "Ataque." },
    { q: "Volver rápido hacia tu portería al perder el balón es…", o: ["replegarse", "desmarcarse", "fintar"], a: 0, e: "Defensa." },
    { q: "En fútbol sala, a partir de la 6.ª falta acumulada se lanza…", o: ["tiro libre directo desde 10 m sin barrera", "un penalti a 6 m", "un saque de banda"], a: 0, e: "Faltas acumuladas." },
  ]),
  examen: mezcla([
    { q: "Botar, agarrar el balón y volver a botar en balonmano es…", o: ["dobles", "pasos", "falta personal"], a: 0, e: "Infracción." },
    { q: "Un jugador de balonmano salta desde fuera y lanza antes de caer en el área. ¿Es válido?", o: ["sí", "no, nunca", "solo si es el portero"], a: 0, e: "Suelta el balón en el aire." },
    { q: "Cada jugador defiende un espacio en la defensa…", o: ["en zona", "individual", "mixta al hombre"], a: 0, e: "Sistemas defensivos." },
  ]),
  feynman: ["Qué tienen en común los deportes de invasión", "Reglas básicas del fútbol sala", "Reglas básicas del balonmano", "Qué es desmarcarse y por qué es importante", "Cómo se defiende en equipo"],
  mapa: mapa("DEPORTES COLECTIVOS", "var(--eso)", [
    ["Fútbol sala", "5 · planta · faltas acumuladas", "var(--leaf)"],
    ["Balonmano", "7 · área 6 m · 3 pasos", "var(--sun)"],
    ["Ataque", "conservar · desmarcarse", "var(--red)"],
    ["Defensa", "replegar · marcar · ayudar", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Deporte de invasión", "Dos equipos comparten espacio y luchan por un móvil."],
    ["Faltas acumuladas", "En fútbol sala, desde la 6.ª, tiro libre desde 10 m sin barrera."],
    ["Área de balonmano", "Zona de 6 m reservada al portero."],
    ["Regla de los 3 pasos", "Máximo de pasos con el balón en la mano en balonmano."],
    ["Dobles", "Botar, agarrar y volver a botar."],
    ["Desmarque", "Moverse a un espacio libre para recibir."],
    ["Repliegue", "Volver rápido a defender la propia portería."],
    ["Defensa en zona", "Cada jugador defiende un espacio."],
  ],
  familias: ["Ved juntos un partido de fútbol sala o balonmano y buscad desmarques.", "Jugad a pasaros el balón con el interior del pie en el parque.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Deportes colectivos de invasión: reglamento básico, técnica y principios tácticos de ataque y defensa en fútbol sala y balonmano; juego limpio y cooperación (RD 217/2022, Educación Física, resolución de problemas en situaciones motrices).",
    ideas: ["Juegos reducidos 3 contra 3 con reglas adaptadas.", "Liga mixta con puntos extra por juego limpio.", "Fichas de autoevaluación de la técnica de pase."],
  },
  fuentes: [RD, { t: "Real Federación Española de Balonmano", url: "https://www.rfebm.com/" }, { t: "Real Federación Española de Fútbol: fútbol sala", url: "https://rfef.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "En un partido de balonmano, un jugador da 4 pasos con el balón. ¿Qué se pita?", pasos: ["El máximo son 3 pasos.", "Es una infracción de pasos.", "Se pita golpe franco para el rival."], resultado: "Pasos: el balón pasa al otro equipo." },
    { enunciado: "Tu equipo de fútbol sala ha cometido 5 faltas en la primera parte y cometéis otra. ¿Qué ocurre?", pasos: ["Es la 6.ª falta acumulada.", "El rival lanza un tiro libre directo desde 10 m.", "Sin barrera."], resultado: "Doble penalti para el rival." },
    { enunciado: "Tienes el balón y tu compañero está marcado. ¿Qué haces?", pasos: ["No pasar a un compañero marcado.", "Proteger el balón (planta o bote).", "Esperar a que un compañero se desmarque o buscar otro libre."], resultado: "Conservar y pasar al compañero libre." },
  ],
  errores: [
    "Mirar solo al balón al conducir y no ver a los compañeros.",
    "Quedarse quieto esperando el pase.",
    "Entrar en el área de balonmano siendo jugador de campo.",
    "Hacer entradas por el suelo en fútbol sala.",
    "Pensar que defender es solo cosa del portero.",
  ],
  ejercicios: [
    { q: "Escribe cinco elementos comunes de los deportes de invasión.", sol: "Móvil, espacio, meta, compañeros, adversarios (y reglamento)." },
    { q: "Cita cinco reglas del fútbol sala.", sol: "5 jugadores, 2 × 20 min, saque de banda con el pie, 4 s del portero, faltas acumuladas." },
    { q: "¿Qué superficies del pie se usan en fútbol sala y para qué?", sol: "Interior (pase), planta (control y protección), empeine (tiro), exterior (pases y regates)." },
    { q: "Cita cinco reglas del balonmano.", sol: "7 jugadores, área de 6 m, 3 pasos, 3 segundos, penalti de 7 m." },
    { q: "¿Qué son los dobles en balonmano?", sol: "Botar, agarrar y volver a botar." },
    { q: "Explica la técnica del lanzamiento en salto.", sol: "Batida con la pierna contraria, codo alto, lanzar en el punto más alto." },
    { q: "¿Qué es desmarcarse?", sol: "Moverse a un espacio libre para ofrecer una línea de pase." },
    { q: "Escribe tres principios de defensa.", sol: "Replegarse, marcar, ayudar (también interceptar)." },
    { q: "Diferencia defensa individual y en zona.", sol: "Individual: cada uno a un rival; zona: cada uno un espacio." },
    { q: "Propón una regla adaptada para que todos participen en un partido de clase.", sol: "Respuesta abierta: todos tocan el balón antes de tirar." },
  ],
};
