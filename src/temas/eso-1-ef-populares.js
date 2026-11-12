// Educación Física 1º ESO: juegos populares y tradicionales. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Juegos populares y tradicionales",
  minutos: 45,
  objetivos: ["Distinguir juego popular, juego tradicional y deporte autóctono", "Conocer y practicar juegos tradicionales de España y del mundo", "Valorar los juegos como patrimonio cultural", "Recuperar juegos de la propia familia y localidad"],
  claves: ["juego popular", "juego tradicional", "deporte autóctono", "retahíla", "patrimonio", "variantes"],
  pregunta: {
    texto: "Tus abuelos jugaban a la comba, al escondite y al pañuelo sin videojuegos ni balones caros. ¿Por qué esos juegos siguen vivos?",
    respuesta: "Porque son <b>sencillos</b>, se juegan con casi nada, caben en cualquier patio y, sobre todo, <b>divierten</b>. Se han transmitido de mayores a pequeños durante generaciones, <mark>cambiando un poco en cada lugar</mark>. Son parte de nuestra cultura, igual que las canciones o las fiestas de cada pueblo.",
  },
  bloques: [
    {
      html: `<h3>Popular, tradicional y autóctono</h3><ul><li><b>Juego popular</b>: el que se juega de forma <b>espontánea</b> por mucha gente en un momento dado, sin reglas oficiales. Las reglas se pactan antes de empezar.</li><li><b>Juego tradicional</b>: el que se ha transmitido de <b>generación en generación</b>, a menudo de forma oral, y forma parte de la cultura de un lugar. Suele tener muchas <b>variantes</b>.</li><li><b>Deporte autóctono</b>: juego tradicional de una zona concreta que se ha <b>reglamentado</b> y tiene competiciones y federaciones (la pelota vasca, la lucha canaria, los bolos).</li></ul><p>Muchos juegos son a la vez populares y tradicionales: la comba o el escondite se juegan hoy en todos los patios y se jugaban hace siglos.</p>`,
    },
    {
      html: `<h3>Características de los juegos tradicionales</h3><ul><li><b>Material sencillo</b> o ninguno: una cuerda, una tiza, piedras, un pañuelo, chapas.</li><li><b>Reglas flexibles</b> que los jugadores pueden adaptar.</li><li>Se juegan en la <b>calle</b>, la plaza o el patio.</li><li>Se transmiten <b>de forma oral</b>, a veces con <b>retahílas</b> o canciones para elegir quién «se la queda» o para marcar el ritmo.</li><li>Tienen <b>nombres distintos</b> según la región (el «pilla-pilla» es «tula», «la mancha» o «el corre que te pillo»).</li><li>Desarrollan habilidades físicas y, sobre todo, <b>relaciones sociales</b>.</li></ul>`,
      video: vb("popB"),
    },
    {
      html: `<h3>Clasificación de los juegos</h3>${tabla(["Tipo", "Ejemplos"], [["De persecución", "pilla-pilla, el pañuelo, polis y cacos"], ["De saltos", "comba, goma, rayuela (truque, avión, tejo)"], ["De lanzamiento y puntería", "canicas, chapas, petanca, bolos, la peonza"], ["De fuerza", "la soga (sogatira), pulsos"], ["De habilidad", "tabas, malabares, diábolo, el aro"], ["De esconderse", "el escondite, la gallinita ciega"], ["De corro y canto", "corros, juegos de palmas"]])}<p>Cada tipo trabaja capacidades distintas: velocidad, coordinación, precisión, fuerza o atención.</p>`,
      svg: svg("Rayuela dibujada en el suelo con casillas numeradas del 1 al 8 alternando casillas simples y dobles, y un muñeco a la pata coja", `${[[110, 140, "1"], [110, 116, "2"], [96, 92, "3"], [124, 92, "4"], [110, 68, "5"], [96, 44, "6"], [124, 44, "7"], [110, 20, "8"]].map(([x, y, n]) => `<rect x="${x - 14}" y="${y - 12}" width="28" height="24" fill="var(--sun)" fill-opacity=".2" stroke="var(--ink)" stroke-width="1.6"/>${t(x, y + 5, n, { s: 11 })}`).join("")}${persona(200, 70, "var(--pen)", { brazos: [[-18, 4], [18, 4]], piernas: [[0, 30], [12, 14]] })}<rect x="128" y="82" width="8" height="7" rx="2" fill="var(--red)"/>${t(200, 152, "a la pata coja", { s: 10, c: "var(--pen)" })}${t(150, 30, "piedra", { s: 10, c: "var(--red)", a: "start" })}<path d="M156 34 L 136 80" stroke="var(--red)" stroke-width="1.2" stroke-dasharray="3 2"/>`, 166),
    },
    {
      html: `<h3>Algunos juegos para practicar</h3><ul><li><b>El pañuelo</b>: dos equipos numerados en filas enfrentadas. Quien sujeta el pañuelo en el centro dice un número; los dos jugadores con ese número corren a cogerlo y volver a su campo sin ser tocados.</li><li><b>La comba</b>: saltar una cuerda que dan dos compañeros, entrando y saliendo al ritmo. Se combina con retahílas inventadas.</li><li><b>La sogatira</b>: dos equipos tiran de una cuerda para arrastrar al otro más allá de una línea.</li><li><b>Polis y cacos</b>: un equipo persigue al otro; los atrapados van a la «cárcel» y pueden ser liberados por un compañero.</li><li><b>Las chapas</b>: carreras de chapas impulsadas con un toque de dedos por un circuito dibujado con tiza.</li></ul>`,
      video: vb("popB2"),
    },
    {
      html: `<h3>Deportes autóctonos de España</h3>${tabla(["Deporte", "Zona", "En qué consiste"], [["Pelota vasca", "País Vasco, Navarra y otras", "golpear una pelota contra un frontón con la mano o una herramienta"], ["Lucha canaria", "Canarias", "derribar al rival agarrándolo por el pantalón enrollado"], ["Bolos", "Cantabria, Asturias, León, Castilla…", "derribar bolos lanzando una bola; muchas modalidades"], ["Herri kirolak", "País Vasco", "aizkolaris (cortar troncos), levantar piedras, sokatira"], ["Calva", "Castilla y León", "lanzar un hierro para golpear un tronco"], ["Pelota valenciana", "Comunidad Valenciana", "golpear la pelota con la mano, en la calle o en trinquete"], ["Salto del pastor", "Canarias", "desplazarse por barrancos con una vara larga"]])}`,
    },
    {
      html: `<h3>Juegos del mundo</h3><p>En todas las culturas los niños juegan, y muchos juegos se parecen aunque estén a miles de kilómetros:</p><ul><li>La <b>rayuela</b> existe en casi toda Europa y América con distintos dibujos.</li><li>El <b>mancala</b>, de África, consiste en mover semillas entre agujeros; es uno de los juegos de tablero más antiguos.</li><li>El <b>kabaddi</b>, de la India, es un juego de persecución por equipos aguantando la respiración mientras se repite una palabra.</li><li>El <b>sepak takraw</b>, del sudeste asiático, es como un voleibol jugado con los pies y una pelota de ratán.</li><li>Las <b>tabas</b> se jugaban ya en la antigua Grecia y Roma con huesos de cordero.</li></ul><p>Jugar a juegos de otros pueblos es una forma de conocer sus culturas.</p>`,
    },
    {
      html: `<h3>El valor de los juegos tradicionales</h3><ul><li><b>Patrimonio cultural</b>: forman parte de la historia y la identidad de cada lugar. Algunos, como la pelota o los bolos, están protegidos.</li><li><b>Relación entre generaciones</b>: abuelos, padres e hijos pueden jugar juntos.</li><li><b>Inclusión</b>: casi todos pueden jugar, con reglas adaptables.</li><li><b>Salud</b>: mueven el cuerpo al aire libre sin necesitar instalaciones.</li><li><b>Sostenibilidad</b>: usan material reciclado o natural.</li><li><b>Convivencia</b>: obligan a negociar reglas, respetar turnos y resolver conflictos.</li></ul><p>Con la llegada de las pantallas, muchos juegos se están perdiendo en la calle, y la escuela ayuda a mantenerlos vivos.</p>`,
    },
    {
      html: `<h3>Investiga y recupera</h3><p>Proyecto: el <b>fichero de juegos</b> de la clase.</p><ol><li>Pregunta a tus familiares mayores a qué jugaban de pequeños.</li><li>Rellena una <b>ficha</b> por juego: nombre (y otros nombres), lugar y época, número de jugadores, material, espacio, reglas y variantes.</li><li>Si había alguna <b>retahíla</b> o canción, anótala.</li><li>Enseñad los juegos al resto de la clase en una sesión práctica.</li><li>Elegid entre todos los favoritos para jugarlos en el recreo.</li></ol><p>Así os convertís en <b>guardianes</b> de un patrimonio que, si no se juega, desaparece.</p>`,
    },
  ],
  figura: {
    titulo: "Juegos populares y tradicionales en un vistazo",
    svg: filas("Resumen: juego popular espontáneo; tradicional de generación en generación con variantes; deporte autóctono reglamentado; tipos de persecución, saltos, puntería, fuerza y habilidad; patrimonio y convivencia", [["Popular", "espontáneo · reglas pactadas", "var(--pen)"], ["Tradicional", "generaciones · variantes", "var(--sun)"], ["Autóctono", "reglamentado: pelota, bolos", "var(--red)"], ["Tipos", "persecución · saltos · puntería", "var(--leaf)"], ["Material", "cuerda · tiza · chapas", "var(--inf)"], ["Valor", "patrimonio · convivencia", "var(--ink)"]], 200),
  },
  video: vg("popV"),
  quiz: mezcla([
    { q: "Un juego transmitido de generación en generación es…", o: ["tradicional", "olímpico", "electrónico"], a: 0, e: "Forma parte de la cultura." },
    { q: "Un juego tradicional reglamentado con federación es un…", o: ["deporte autóctono", "juego popular", "juego de mesa"], a: 0, e: "Pelota vasca, bolos." },
    { q: "La lucha canaria es típica de…", o: ["Canarias", "Galicia", "Murcia"], a: 0, e: "Deporte autóctono." },
    { q: "La rayuela es un juego de…", o: ["saltos", "fuerza", "esconderse"], a: 0, e: "A la pata coja." },
    { q: "La sogatira es un juego de…", o: ["fuerza", "puntería", "velocidad"], a: 0, e: "Tirar de una cuerda." },
    { q: "Una retahíla sirve para…", o: ["elegir quién se la queda o marcar el ritmo", "arbitrar", "calentar"], a: 0, e: "Tradición oral." },
    { q: "Los aizkolaris…", o: ["cortan troncos con hacha", "lanzan bolos", "juegan a la pelota"], a: 0, e: "Herri kirolak." },
    { q: "Las tabas se jugaban con…", o: ["huesos de cordero", "piedras de río", "monedas"], a: 0, e: "Ya en Grecia y Roma." },
    { q: "Una característica de los juegos tradicionales es que…", o: ["tienen variantes según el lugar", "tienen reglas oficiales iguales en todo el mundo", "necesitan material caro"], a: 0, e: "Variantes." },
    { q: "El kabaddi es originario de…", o: ["la India", "Noruega", "Perú"], a: 0, e: "Persecución por equipos." },
  ]),
  examen: mezcla([
    { q: "¿Qué diferencia un deporte autóctono de un juego tradicional?", o: ["que está reglamentado y tiene competiciones", "que es más antiguo", "que se juega solo en la escuela"], a: 0, e: "Reglamento y federación." },
    { q: "El pilla-pilla tiene nombres distintos según la región porque…", o: ["se transmite oralmente y cambia", "lo inventaron en cada pueblo a la vez", "tiene federación"], a: 0, e: "Variantes." },
    { q: "¿Qué juego NO es de puntería?", o: ["la comba", "la petanca", "las canicas"], a: 0, e: "Es de saltos." },
  ]),
  feynman: ["Diferencia entre juego popular, tradicional y deporte autóctono", "Características de los juegos tradicionales", "Tipos de juegos con ejemplos", "Deportes autóctonos de España", "Por qué conviene recuperar los juegos tradicionales"],
  mapa: mapa("JUEGOS TRADICIONALES", "var(--eso)", [
    ["Conceptos", "popular · tradicional · autóctono", "var(--pen)"],
    ["Tipos", "persecución · saltos · puntería", "var(--leaf)"],
    ["España", "pelota · lucha canaria · bolos", "var(--red)"],
    ["Valor", "patrimonio · convivencia", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Juego popular", "Juego espontáneo de mucha gente, con reglas pactadas."],
    ["Juego tradicional", "Juego transmitido de generación en generación."],
    ["Deporte autóctono", "Juego tradicional de una zona, reglamentado."],
    ["Retahíla", "Texto rimado para echar a suertes o marcar el ritmo."],
    ["Rayuela", "Juego de saltos sobre casillas dibujadas."],
    ["Sogatira", "Dos equipos tiran de una cuerda."],
    ["Lucha canaria", "Lucha tradicional canaria agarrando el pantalón."],
    ["Pelota vasca", "Golpear una pelota contra un frontón."],
  ],
  familias: ["Contad a vuestro hijo o hija a qué jugabais en la calle y jugad juntos.", "Dibujad una rayuela con tiza y jugad con las reglas de vuestra infancia.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Juegos populares y tradicionales y deportes autóctonos: características, clasificación y práctica; valor patrimonial e intergeneracional; juegos de otras culturas (RD 217/2022, Educación Física, manifestaciones de la cultura motriz).",
    ideas: ["Fichero de juegos recogidos en las familias.", "Jornada de juegos tradicionales con alumnado de Primaria.", "Taller de construcción de peonzas, chapas y combas."],
  },
  fuentes: [RD, { t: "Consejo Superior de Deportes", url: "https://www.csd.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Clasifica: escondite, canicas, sogatira, comba, pañuelo.", pasos: ["Escondite: de esconderse.", "Canicas: de puntería.", "Sogatira: de fuerza.", "Comba: de saltos.", "Pañuelo: de persecución y velocidad."], resultado: "Uno de cada tipo." },
    { enunciado: "Dos grupos discuten porque en un barrio la rayuela tiene 8 casillas y en otro 10. ¿Quién tiene razón?", pasos: ["Los juegos tradicionales tienen variantes.", "No hay un reglamento oficial único.", "Lo correcto es pactar las reglas antes de empezar."], resultado: "Los dos: se elige una versión y se juega." },
    { enunciado: "Inventa una retahíla propia para elegir quién se la queda.", pasos: ["Versos cortos con rima.", "Una sílaba por persona señalada.", "Ejemplo: «Pito, pato, sale el gato, / cuenta cuatro, uno, dos, / fuera tú»."], resultado: "Una retahíla original para echar a suertes." },
  ],
  errores: [
    "Confundir juego popular con juego tradicional y deporte autóctono.",
    "Pensar que solo hay una versión correcta de cada juego tradicional.",
    "Creer que los juegos tradicionales son solo para niños pequeños.",
    "Empezar a jugar sin pactar las reglas.",
    "Pensar que los juegos tradicionales no hacen ejercicio.",
  ],
  ejercicios: [
    { q: "Define juego popular, juego tradicional y deporte autóctono.", sol: "Popular: espontáneo de mucha gente; tradicional: transmitido por generaciones; autóctono: tradicional reglamentado." },
    { q: "Escribe cinco características de los juegos tradicionales.", sol: "Material sencillo, reglas flexibles, en la calle, transmisión oral, variantes." },
    { q: "Pon dos ejemplos de juegos de persecución, saltos y puntería.", sol: "Pañuelo, pilla-pilla; comba, rayuela; canicas, bolos." },
    { q: "Explica cómo se juega al pañuelo.", sol: "Dos equipos numerados; se dice un número y esos jugadores corren a por el pañuelo y vuelven sin ser tocados." },
    { q: "Nombra cuatro deportes autóctonos españoles y su zona.", sol: "Pelota vasca (País Vasco), lucha canaria (Canarias), bolos (Cantabria), pelota valenciana (Valencia)." },
    { q: "¿Qué es una retahíla?", sol: "Un texto rimado para echar a suertes o acompañar un juego." },
    { q: "Cita dos juegos tradicionales de otros países.", sol: "Mancala (África), kabaddi (India), sepak takraw (Asia)." },
    { q: "Escribe tres razones para recuperar los juegos tradicionales.", sol: "Patrimonio, relación entre generaciones, inclusión, salud, convivencia." },
    { q: "Rellena la ficha de un juego que te haya enseñado un familiar.", sol: "Respuesta personal." },
    { q: "Inventa una variante de un juego tradicional y explica sus reglas.", sol: "Respuesta abierta." },
  ],
};
