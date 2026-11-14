// Educación Física 1º ESO: juegos y deportes alternativos. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Juegos y deportes alternativos",
  minutos: 45,
  objetivos: ["Conocer qué son los deportes alternativos y sus ventajas", "Aprender las reglas básicas de ultimate, colpbol, datchball y otros", "Practicar la cooperación, la inclusión y el juego limpio", "Crear y adaptar juegos nuevos con materiales sencillos"],
  claves: ["deporte alternativo", "ultimate", "colpbol", "datchball", "coeducación", "autoarbitraje"],
  pregunta: {
    texto: "¿Te imaginas un deporte de equipo en el que no hay árbitro y los propios jugadores pitan sus faltas?",
    respuesta: "Existe y se juega en todo el mundo: el <b>ultimate</b>, que se practica con un disco volador. Se basa en el <b>espíritu del juego</b>: <mark>los jugadores se arbitran a sí mismos</mark> y resuelven sus desacuerdos hablando. Es un buen ejemplo de los <b>deportes alternativos</b>, que buscan que todos participen y disfruten por igual.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los deportes alternativos?</h3><p>Los <b>deportes alternativos</b> son juegos y deportes poco conocidos o de reciente creación, distintos de los deportes tradicionales (fútbol, baloncesto…). Muchos nacieron en el ámbito escolar.</p><p>Sus características:</p><ul><li>Usan <b>materiales novedosos</b> o sencillos: discos, pelotas de espuma, indiacas, palas.</li><li>Tienen <b>reglas fáciles</b> que se aprenden rápido.</li><li>Nadie parte con ventaja: son nuevos para todos.</li><li>Favorecen la <b>participación</b> de todo el grupo y los <b>equipos mixtos</b>.</li><li>Dan más importancia a la <b>diversión</b> y la <b>cooperación</b> que a ganar.</li></ul>`,
    },
    {
      html: `<h3>El ultimate</h3><p>El <b>ultimate</b> es un deporte de equipo con un <b>disco volador</b>. Se juega en un campo rectangular con una <b>zona de anotación</b> en cada extremo.</p><ul><li>Equipos de 7 (5 en pista reducida), habitualmente <b>mixtos</b>.</li><li>Se anota un punto al <b>recibir el disco</b> dentro de la zona de anotación contraria.</li><li>El jugador con el disco <b>no puede correr</b>: solo pivotar sobre un pie y tiene 10 segundos para pasar.</li><li>Si el disco cae al suelo, sale fuera o es interceptado, la posesión cambia.</li><li><b>No hay contacto</b> físico.</li><li>No hay árbitro: <b>autoarbitraje</b> y «espíritu del juego».</li></ul><p>El lanzamiento básico es el <b>revés</b>: disco plano, agarrado con el pulgar arriba, y soltarlo con un golpe de muñeca.</p>`,
      svg: svg("Campo de ultimate con dos zonas de anotación en los extremos y un disco pasando entre dos jugadores hacia la zona", `<rect x="14" y="30" width="232" height="110" rx="4" fill="var(--leaf)" fill-opacity=".12" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="30" width="40" height="110" fill="var(--sun)" fill-opacity=".3"/><rect x="206" y="30" width="40" height="110" fill="var(--sun)" fill-opacity=".3"/>${t(34, 88, "zona", { s: 9 })}${t(226, 88, "zona", { s: 9 })}${persona(110, 66, "var(--pen)", { brazos: [[-16, 6], [18, 0]] })}${persona(190, 52, "var(--pen)", { brazos: [[-16, -12], [16, -12]] })}<ellipse cx="160" cy="48" rx="10" ry="4" fill="var(--red)"/><path d="M128 76 Q 150 40 186 44" fill="none" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/>${t(130, 162, "punto: recibir el disco en la zona", { s: 10, c: "var(--muted)" })}${t(130, 22, "ultimate: sin contacto y sin árbitro", { s: 11 })}`, 176),
      video: vb("altB"),
    },
    {
      html: `<h3>El colpbol</h3><p>El <b>colpbol</b> (del valenciano «colp», golpe) es un deporte creado en 1997 por un profesor de Educación Física de Valencia, Juan Antonio Ferrer. Se juega en una pista de balonmano.</p><ul><li>El balón se <b>golpea</b> con cualquier parte de la mano o el brazo, nunca se agarra.</li><li>Se marca gol en la portería contraria.</li><li>Un jugador <b>no puede golpear el balón dos veces seguidas</b>: siempre necesita a un compañero.</li><li>Los equipos son <b>mixtos</b> y no hay portero fijo.</li><li>Está prohibido el contacto físico.</li></ul><p>La regla de no repetir golpe hace que nadie pueda «chupar» el balón: todos participan.</p>`,
    },
    {
      html: `<h3>El datchball</h3><p>El <b>datchball</b> es un deporte nacido en España a partir de los juegos de «balón prisionero». Se juega con <b>pelotas blandas</b> de espuma.</p><ul><li>Dos equipos en un campo dividido por la mitad, cada uno con una zona de <b>«cementerio»</b> detrás del campo contrario.</li><li>Se intenta <b>eliminar</b> a los rivales golpeándolos con la pelota por debajo de los hombros.</li><li>Si un rival <b>atrapa</b> la pelota sin que caiga, queda eliminado quien la lanzó.</li><li>Los eliminados pasan al cementerio y pueden <b>salvarse</b> eliminando desde allí.</li><li>Se puede usar la pelota como escudo para <b>bloquear</b>.</li></ul><p>Desarrolla la velocidad de reacción, el lanzamiento, la recepción y la estrategia de equipo.</p>`,
      svg: svg("Campo de datchball dividido por la mitad con los cementerios detrás de cada campo y jugadores de dos colores", `<rect x="40" y="36" width="180" height="96" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M130 36 V 132" stroke="var(--ink)" stroke-width="2"/><rect x="14" y="36" width="24" height="96" fill="var(--red)" fill-opacity=".25" stroke="var(--red)" stroke-width="1.5"/><rect x="222" y="36" width="24" height="96" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="1.5"/>${[[70, 60], [92, 100], [110, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--pen)"/>`).join("")}${[[150, 64], [170, 104], [196, 76]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="var(--red)"/>`).join("")}<circle cx="234" cy="84" r="6" fill="var(--pen)" opacity=".7"/><circle cx="26" cy="70" r="6" fill="var(--red)" opacity=".7"/>${t(26, 152, "cementerio", { s: 9, c: "var(--red)" })}${t(234, 152, "cementerio", { s: 9, c: "var(--pen)", a: "end" })}${t(130, 24, "datchball: eliminar y salvar", { s: 11 })}`, 166),
      video: vb("altB2"),
    },
    {
      html: `<h3>Otros deportes alternativos</h3>${tabla(["Deporte", "Material", "En qué consiste"], [["Indiaca", "volante grande con plumas", "pasar la indiaca por encima de una red golpeándola con la mano"], ["Kin-ball", "balón gigante de 1,22 m", "tres equipos; hay que nombrar a un equipo y golpear para que no lo atrape"], ["Floorball", "stick y bola con agujeros", "hockey en pista sin contacto"], ["Palas", "pala de madera y pelota", "pasarse la pelota sin que caiga, o competir en una pista"], ["Shuttleball", "raqueta de mano y volante", "parecido al bádminton, más fácil"], ["Rugby cinta", "cintas en la cintura", "rugby sin placajes: se arranca la cinta"]])}<p>Muchos centros educativos tienen material para practicarlos en clase y en los recreos.</p>`,
    },
    {
      html: `<h3>Valores de los deportes alternativos</h3><ul><li><b>Inclusión</b>: las reglas buscan que participen personas con distintos niveles y capacidades.</li><li><b>Coeducación</b>: los equipos mixtos y la ausencia de contacto permiten jugar juntos a chicos y chicas en igualdad.</li><li><b>Juego limpio</b>: muchos usan el <b>autoarbitraje</b>, que exige honestidad y respeto.</li><li><b>Cooperación</b>: reglas como no repetir golpe obligan a contar con los compañeros.</li><li><b>Creatividad</b>: invitan a inventar estrategias y a adaptar las normas.</li></ul><p>Por eso son una herramienta muy útil en Educación Física: lo importante no es quién gana, sino que todos aprendan y disfruten.</p>`,
    },
    {
      html: `<h3>Materiales reciclados y autoconstruidos</h3><p>No hace falta comprar material para jugar. Con objetos reciclados se pueden fabricar:</p><ul><li><b>Indiacas</b> con una bolsa de plástico rellena de papel y tiras de colores.</li><li><b>Palas</b> con cartón duro o con una percha y unas medias.</li><li><b>Pelotas de malabares</b> con globos rellenos de arroz.</li><li><b>Bolos</b> con botellas de plástico con un poco de arena.</li><li><b>Discos</b> con platos de cartón pegados por el borde.</li></ul><p>Fabricar tu propio material enseña a reutilizar y a cuidar el medio ambiente, y luego da más ganas de usarlo.</p>`,
    },
    {
      html: `<h3>Inventa tu propio juego</h3><p>Proyecto en grupo: cread un <b>deporte alternativo</b> nuevo.</p><ol><li>Elegid el <b>material</b> (uno o dos objetos) y el <b>espacio</b>.</li><li>Definid el <b>objetivo</b>: ¿cómo se gana un punto?</li><li>Escribid <b>cinco reglas</b> como máximo, claras y sencillas.</li><li>Añadid al menos una regla que obligue a <b>participar a todos</b> (por ejemplo, que todos toquen el móvil antes de anotar).</li><li>Ponedle un <b>nombre</b> y probadlo con otro grupo.</li><li>Tras jugar, <b>ajustad</b> las reglas que no funcionen.</li></ol><p>Así descubriréis que las reglas de cualquier deporte también se inventaron un día y se fueron cambiando con la práctica.</p>`,
    },
  ],
  figura: {
    titulo: "Deportes alternativos en un vistazo",
    svg: filas("Resumen: deportes alternativos con material novedoso, reglas sencillas y participación de todos; ultimate con disco y autoarbitraje; colpbol sin repetir golpe; datchball con cementerio; indiaca, kin-ball, floorball; inclusión y coeducación", [["Qué son", "nuevos · sencillos · para todos", "var(--pen)"], ["Ultimate", "disco · sin contacto · sin árbitro", "var(--red)"], ["Colpbol", "golpear · nunca dos veces", "var(--leaf)"], ["Datchball", "eliminar · cementerio · salvar", "var(--sun)"], ["Otros", "indiaca · kin-ball · floorball", "var(--inf)"], ["Valores", "inclusión · coeducación · juego limpio", "var(--ink)"]], 200),
  },
  video: vg("altV"),
  quiz: mezcla([
    { q: "El ultimate se juega con…", o: ["un disco volador", "una pelota de tenis", "un volante"], a: 0, e: "Frisbee." },
    { q: "En ultimate, el jugador con el disco…", o: ["no puede correr", "puede correr 3 pasos", "debe botarlo"], a: 0, e: "Solo pivota." },
    { q: "El autoarbitraje significa que…", o: ["los jugadores pitan sus propias faltas", "no hay reglas", "arbitra el público"], a: 0, e: "Espíritu del juego." },
    { q: "En colpbol el balón se…", o: ["golpea, nunca se agarra", "agarra y se lanza", "conduce con el pie"], a: 0, e: "Colp = golpe." },
    { q: "En colpbol no se puede…", o: ["golpear dos veces seguidas", "marcar gol", "jugar en equipos mixtos"], a: 0, e: "Fomenta la participación." },
    { q: "El colpbol se inventó en…", o: ["Valencia", "Estados Unidos", "Japón"], a: 0, e: "1997." },
    { q: "En datchball, si un rival atrapa tu lanzamiento…", o: ["quedas eliminado tú", "queda eliminado él", "no pasa nada"], a: 0, e: "Recepción." },
    { q: "La zona de los eliminados en datchball es el…", o: ["cementerio", "área", "banquillo"], a: 0, e: "Desde allí pueden salvarse." },
    { q: "El kin-ball usa…", o: ["un balón gigante", "un stick", "un disco"], a: 0, e: "1,22 m." },
    { q: "Una ventaja de los deportes alternativos es que…", o: ["nadie parte con ventaja", "solo juegan los mejores", "exigen material caro"], a: 0, e: "Son nuevos para todos." },
  ]),
  examen: mezcla([
    { q: "¿Qué regla del colpbol favorece la cooperación?", o: ["no golpear dos veces seguidas", "no tener portero", "jugar en pista de balonmano"], a: 0, e: "Siempre hace falta un compañero." },
    { q: "En ultimate se anota punto al…", o: ["recibir el disco en la zona contraria", "lanzar el disco fuera", "tocar al rival"], a: 0, e: "Zona de anotación." },
    { q: "La coeducación en los deportes alternativos se favorece con…", o: ["equipos mixtos y sin contacto", "equipos separados por sexo", "más contacto físico"], a: 0, e: "Igualdad." },
  ]),
  feynman: ["Qué son los deportes alternativos y sus ventajas", "Reglas básicas del ultimate", "Por qué el colpbol favorece la participación", "Cómo se juega al datchball", "Cómo inventar un deporte nuevo"],
  mapa: mapa("DEPORTES ALTERNATIVOS", "var(--eso)", [
    ["Ultimate", "disco · autoarbitraje", "var(--red)"],
    ["Colpbol", "golpear · cooperar", "var(--leaf)"],
    ["Datchball", "eliminar · salvar", "var(--sun)"],
    ["Valores", "inclusión · coeducación", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Deporte alternativo", "Juego o deporte nuevo, sencillo y para todos."],
    ["Ultimate", "Deporte de disco volador sin contacto ni árbitro."],
    ["Espíritu del juego", "Respeto y honestidad en el autoarbitraje."],
    ["Colpbol", "Se golpea el balón; nadie puede tocarlo dos veces seguidas."],
    ["Datchball", "Eliminar rivales con pelotas blandas; cementerio para salvarse."],
    ["Indiaca", "Volante grande que se golpea con la mano."],
    ["Kin-ball", "Tres equipos y un balón gigante."],
    ["Coeducación", "Educar en igualdad a chicos y chicas, jugando juntos."],
  ],
  familias: ["Fabricad juntos una indiaca o unas palas con material reciclado.", "Jugad en el parque a lanzaros un disco volador.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Juegos y deportes alternativos: reglas básicas, cooperación y oposición, autoarbitraje, inclusión y coeducación; construcción de material con objetos reciclados (RD 217/2022, Educación Física, resolución de problemas en situaciones motrices; autorregulación emocional e interacción social).",
    ideas: ["Liga de recreo de colpbol con equipos mixtos.", "Taller de fabricación de indiacas.", "Proyecto «inventa un deporte» con exposición de reglamentos."],
  },
  fuentes: [RD, { t: "Federación Española de Disco Volador", url: "https://www.fedv.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "En un partido de ultimate, dos jugadores no se ponen de acuerdo sobre si hubo contacto. ¿Qué hacen?", pasos: ["No hay árbitro que decida.", "Hablan con respeto y explican lo que vieron.", "Si no llegan a acuerdo, el disco vuelve al último pase y se repite la jugada."], resultado: "Lo resuelven dialogando, según el espíritu del juego." },
    { enunciado: "En colpbol, Ana golpea el balón, rebota en la pared y vuelve a ella. ¿Puede golpearlo otra vez?", pasos: ["La regla prohíbe dos golpes seguidos del mismo jugador.", "La pared no es un compañero."], resultado: "No: necesita que antes lo toque un compañero." },
    { enunciado: "Diseña una regla para un juego nuevo que obligue a participar a todos.", pasos: ["Identifica el riesgo: que solo jueguen los más hábiles.", "Propón: antes de anotar, el balón debe haber pasado por todos los jugadores del equipo.", "Pruébala y ajusta si el juego se hace demasiado lento."], resultado: "«Todos tocan antes de anotar»." },
  ],
  errores: [
    "Pensar que los deportes alternativos son solo para quien no sabe jugar a los tradicionales.",
    "Correr con el disco en el ultimate.",
    "Agarrar el balón en el colpbol.",
    "Lanzar a la cabeza en el datchball.",
    "Creer que sin árbitro no hay reglas.",
  ],
  ejercicios: [
    { q: "Escribe cuatro características de los deportes alternativos.", sol: "Material novedoso, reglas sencillas, nadie parte con ventaja, favorecen la participación." },
    { q: "Explica cinco reglas del ultimate.", sol: "No se corre con el disco, 10 segundos para pasar, sin contacto, punto en la zona, cambio de posesión si cae." },
    { q: "¿Qué es el autoarbitraje?", sol: "Que los propios jugadores pitan y resuelven las faltas." },
    { q: "¿Qué significa colpbol y quién lo inventó?", sol: "«Balón golpeado» en valenciano; Juan Antonio Ferrer, profesor de EF." },
    { q: "Explica la regla principal del colpbol y su objetivo.", sol: "No golpear dos veces seguidas; que todos participen." },
    { q: "¿Qué ocurre en el datchball si un rival atrapa tu pelota?", sol: "Quedas eliminado tú." },
    { q: "Nombra tres deportes alternativos más con su material.", sol: "Indiaca (volante), kin-ball (balón gigante), floorball (stick y bola)." },
    { q: "¿Por qué favorecen la coeducación?", sol: "Equipos mixtos, sin contacto, todos empiezan desde cero." },
    { q: "Explica cómo fabricar una indiaca reciclada.", sol: "Bolsa rellena de papel atada, con tiras de colores." },
    { q: "Inventa un deporte alternativo con nombre, material, objetivo y cinco reglas.", sol: "Respuesta abierta." },
  ],
};
