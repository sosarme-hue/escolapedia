// Educación Física 1º ESO: habilidades motrices básicas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, persona, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Habilidades motrices básicas",
  minutos: 45,
  objetivos: ["Identificar las habilidades motrices básicas: desplazamientos, saltos, giros, lanzamientos y recepciones", "Conocer las capacidades coordinativas: coordinación y equilibrio", "Ejecutar las habilidades con una técnica correcta", "Aplicarlas en juegos y situaciones variadas"],
  claves: ["habilidad motriz", "desplazamiento", "salto", "giro", "lanzamiento", "coordinación"],
  pregunta: {
    texto: "¿Qué tienen en común un portero de balonmano, una bailarina y un niño jugando a la rayuela?",
    respuesta: "Todos usan las <b>habilidades motrices básicas</b>: desplazarse, saltar, girar, lanzar y recibir. Son los «ladrillos» del movimiento humano. <mark>Cualquier deporte o danza es una combinación de estas habilidades</mark>, ajustadas con coordinación y equilibrio. Cuanto mejor las domines, más fácil te resultará aprender cualquier deporte.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son las habilidades motrices básicas?</h3><p>Las <b>habilidades motrices básicas</b> son los movimientos fundamentales que aprendemos de niños y que sirven de base para todas las actividades físicas y deportivas. Se clasifican en cuatro grupos:</p>${tabla(["Grupo", "Ejemplos"], [["Desplazamientos", "andar, correr, cuadrupedia, reptar, trepar, deslizarse"], ["Saltos", "a pies juntos, a una pierna, en longitud, en altura"], ["Giros", "sobre el eje longitudinal, transversal y anteroposterior"], ["Manipulaciones", "lanzar, recibir, golpear, botar, conducir"]])}<p>En la ESO se trata de <b>perfeccionarlas</b>, combinarlas y aplicarlas a situaciones cada vez más complejas, que es lo que se llama <b>habilidades específicas</b> de cada deporte.</p>`,
      video: vb("habB"),
    },
    {
      html: `<h3>Los desplazamientos</h3><p>Un <b>desplazamiento</b> es todo movimiento que nos lleva de un lugar a otro. Pueden ser:</p><ul><li><b>Habituales</b>: andar y correr. En la carrera hay una fase de vuelo en la que ningún pie toca el suelo.</li><li><b>No habituales</b>: cuadrupedia (a cuatro apoyos), reptar (tumbado), trepar (con brazos y piernas), deslizarse, desplazarse de espaldas o lateralmente.</li></ul><p>Aspectos técnicos de la carrera: tronco ligeramente inclinado hacia delante, brazos flexionados a 90° moviéndose en sentido contrario a las piernas, apoyo con la parte delantera del pie y mirada al frente.</p><p>En los deportes son muy importantes los <b>cambios de dirección</b> y de <b>ritmo</b>: frenar, arrancar, fintar.</p>`,
    },
    {
      html: `<h3>Los saltos</h3><p>Un <b>salto</b> es un desplazamiento en el que el cuerpo se separa del suelo por el impulso de una o dos piernas. Tiene cuatro fases:</p><ol><li><b>Carrera o preparación</b>: flexionar las piernas.</li><li><b>Impulso o batida</b>: extender con fuerza piernas y brazos.</li><li><b>Vuelo</b>: el cuerpo está en el aire.</li><li><b>Caída</b>: aterrizar <b>flexionando las rodillas</b> y apoyando primero la punta de los pies para amortiguar.</li></ol><p>La caída es la fase más importante para evitar lesiones: nunca se cae con las piernas rígidas.</p>`,
      svg: svg("Cuatro fases del salto: preparación con piernas flexionadas, impulso, vuelo y caída amortiguada", `${persona(36, 72, "var(--leaf)", { brazos: [[-14, 14], [14, 14]], piernas: [[-14, 18], [14, 18]] })}${persona(96, 56, "var(--sun)", { brazos: [[-10, -20], [10, -20]], piernas: [[-4, 28], [4, 28]] })}${persona(160, 30, "var(--pen)", { brazos: [[-18, -12], [18, -12]], piernas: [[-14, 22], [14, 22]] })}${persona(224, 72, "var(--red)", { brazos: [[-18, 4], [18, 4]], piernas: [[-14, 18], [14, 18]] })}<path d="M16 122 H 248" stroke="var(--line)" stroke-width="3"/><path d="M110 50 Q 160 0 212 60" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 3"/>${[["preparación", 36, "var(--leaf)"], ["impulso", 96, "var(--sun)"], ["vuelo", 160, "var(--pen)"], ["caída", 224, "var(--red)"]].map(([n, x, c]) => t(x, 142, n, { s: 10, c })).join("")}${t(130, 164, "caer con las rodillas flexionadas", { s: 10, c: "var(--muted)" })}`, 176),
    },
    {
      html: `<h3>Los giros</h3><p>Un <b>giro</b> es una rotación del cuerpo alrededor de un <b>eje</b> imaginario. Hay tres ejes:</p>${tabla(["Eje", "Dirección", "Ejemplos"], [["Longitudinal", "de la cabeza a los pies", "pirueta, giro en el sitio, croqueta"], ["Transversal", "de un lado a otro (de cadera a cadera)", "voltereta adelante y atrás"], ["Anteroposterior", "de delante atrás (del ombligo a la espalda)", "rueda lateral"]])}<p>Los giros desarrollan el <b>control del cuerpo</b> en el espacio y la orientación. En la voltereta hacia delante: barbilla al pecho, apoyo de manos a la anchura de los hombros, espalda redondeada como una pelota y rodar sin apoyar la cabeza.</p>`,
    },
    {
      html: `<h3>Lanzamientos y recepciones</h3><p>Las <b>manipulaciones</b> implican el control de un objeto, normalmente un móvil (balón, pelota, disco, aro).</p><ul><li><b>Lanzar</b>: impulsar un objeto con las manos o los pies. Claves: mirar al objetivo, adelantar la pierna contraria al brazo que lanza, transmitir la fuerza desde las piernas al tronco y al brazo, y acompañar el movimiento al final.</li><li><b>Recibir</b>: controlar un objeto que llega. Claves: seguir el móvil con la vista, colocar las manos formando un «cuenco» o una «W» con los pulgares, y <b>amortiguar</b> llevando las manos hacia el cuerpo.</li><li><b>Golpear</b>, <b>botar</b> y <b>conducir</b> son otras manipulaciones muy usadas en los deportes.</li></ul>`,
      svg: svg("Muñeco lanzando con la pierna contraria adelantada y otro recibiendo con las manos delante, con la trayectoria de la pelota entre ambos", `${persona(56, 50, "var(--pen)", { brazos: [[-18, 4], [16, -22]], piernas: [[18, 26], [-14, 26]] })}${persona(204, 50, "var(--leaf)", { brazos: [[-20, 2], [-20, 10]], piernas: [[-12, 26], [12, 26]] })}<path d="M74 36 Q 130 0 182 60" fill="none" stroke="var(--sun)" stroke-width="2" stroke-dasharray="5 4"/><circle cx="182" cy="62" r="6" fill="var(--sun)"/>${t(56, 130, "lanzar", { s: 11, c: "var(--pen)" })}${t(204, 130, "recibir y amortiguar", { s: 11, c: "var(--leaf)" })}${t(56, 150, "pierna contraria delante", { s: 9, c: "var(--muted)" })}`, 166),
      video: vb("habB2"),
    },
    {
      html: `<h3>La coordinación</h3><p>La <b>coordinación</b> es la capacidad de mover distintas partes del cuerpo de forma <b>ordenada y eficaz</b> para conseguir un objetivo. Es la base de cualquier habilidad.</p><ul><li><b>Coordinación dinámica general</b>: mover todo el cuerpo de forma armónica (saltar a la comba, bailar, nadar).</li><li><b>Coordinación óculo-manual</b>: ajustar las manos a lo que ven los ojos (atrapar un balón, botar).</li><li><b>Coordinación óculo-pie</b>: ajustar los pies a lo que ven los ojos (conducir un balón, chutar).</li></ul><p>Se mejora con <b>práctica variada</b>: malabares con pañuelos, botar con la mano no dominante, saltar a la comba, juegos con distintos tipos de pelotas.</p>`,
    },
    {
      html: `<h3>El equilibrio</h3><p>El <b>equilibrio</b> es la capacidad de mantener el cuerpo en la postura deseada, sin caerse, tanto quieto como en movimiento.</p><ul><li><b>Estático</b>: sin desplazarse. Mantenerse a la pata coja, hacer el pino, posturas de yoga.</li><li><b>Dinámico</b>: en movimiento. Caminar por un banco sueco, patinar, montar en bici.</li></ul><p>Factores que ayudan: base de apoyo <b>amplia</b>, centro de gravedad <b>bajo</b> (flexionar las rodillas), <b>mirada fija</b> en un punto y brazos que compensan. Por eso un portero espera con las piernas separadas y semiflexionadas: es más difícil desequilibrarlo.</p>`,
    },
    {
      html: `<h3>Aplicar las habilidades en el juego</h3><p>Las habilidades básicas se combinan en los juegos y deportes. Ejemplos:</p>${tabla(["Situación", "Habilidades que intervienen"], [["Entrada a canasta", "carrera + bote + salto + lanzamiento"], ["Parada de un portero", "desplazamiento lateral + salto + recepción + caída"], ["Rueda lateral en una coreografía", "giro anteroposterior + equilibrio"], ["Juego del pañuelo", "velocidad de reacción + carrera + cambio de dirección"]])}<p>Propuesta: diseñad en grupo un <b>circuito</b> con cinco estaciones (reptar bajo una cuerda, saltar aros, voltereta, botar en zigzag y lanzar a una diana) y cronometrad cuánto tardáis en completarlo con técnica correcta.</p>`,
    },
  ],
  figura: {
    titulo: "Habilidades motrices básicas en un vistazo",
    svg: filas("Resumen: desplazamientos, saltos con cuatro fases, giros en tres ejes, lanzamientos y recepciones, coordinación y equilibrio estático y dinámico", [["Desplazamientos", "correr · reptar · trepar", "var(--leaf)"], ["Saltos", "preparar · impulsar · volar · caer", "var(--sun)"], ["Giros", "longitudinal · transversal · antpost.", "var(--pen)"], ["Manipulaciones", "lanzar · recibir · botar", "var(--red)"], ["Coordinación", "general · óculo-manual · óculo-pie", "var(--inf)"], ["Equilibrio", "estático · dinámico", "var(--ink)"]], 200),
  },
  video: vg("habV"),
  quiz: mezcla([
    { q: "Reptar es un tipo de…", o: ["desplazamiento", "giro", "lanzamiento"], a: 0, e: "Tumbado." },
    { q: "La fase del salto en la que el cuerpo está en el aire es el…", o: ["vuelo", "impulso", "caída"], a: 0, e: "Sin apoyo." },
    { q: "Al caer de un salto hay que…", o: ["flexionar las rodillas", "tener las piernas rígidas", "caer de talones"], a: 0, e: "Amortiguar." },
    { q: "La voltereta hacia delante es un giro sobre el eje…", o: ["transversal", "longitudinal", "anteroposterior"], a: 0, e: "De cadera a cadera." },
    { q: "La rueda lateral es un giro sobre el eje…", o: ["anteroposterior", "transversal", "longitudinal"], a: 0, e: "Del ombligo a la espalda." },
    { q: "Al lanzar con la mano derecha conviene adelantar…", o: ["la pierna izquierda", "la pierna derecha", "las dos piernas"], a: 0, e: "Pierna contraria." },
    { q: "Atrapar un balón exige coordinación…", o: ["óculo-manual", "óculo-pie", "estática"], a: 0, e: "Ojos y manos." },
    { q: "Caminar por un banco sueco es equilibrio…", o: ["dinámico", "estático", "invertido"], a: 0, e: "En movimiento." },
    { q: "Para tener más equilibrio conviene…", o: ["ampliar la base y bajar el centro de gravedad", "juntar los pies", "mirar al suelo moviendo la cabeza"], a: 0, e: "Posición de portero." },
    { q: "Botar, golpear y conducir son…", o: ["manipulaciones", "giros", "saltos"], a: 0, e: "Control de un móvil." },
  ]),
  examen: mezcla([
    { q: "¿Qué habilidades intervienen en una entrada a canasta?", o: ["carrera, bote, salto y lanzamiento", "solo salto", "giro y reptación"], a: 0, e: "Combinación." },
    { q: "Una pirueta de patinaje es un giro sobre el eje…", o: ["longitudinal", "transversal", "anteroposterior"], a: 0, e: "De cabeza a pies." },
    { q: "Al recibir un balón fuerte hay que…", o: ["llevar las manos hacia el cuerpo para amortiguar", "estirar los brazos rígidos", "cerrar los ojos"], a: 0, e: "Amortiguar." },
  ]),
  feynman: ["Qué son las habilidades motrices básicas", "Cuáles son las fases de un salto", "Cuáles son los tres ejes de giro", "Cómo se lanza y se recibe correctamente", "Diferencia entre equilibrio estático y dinámico"],
  mapa: mapa("HABILIDADES", "var(--eso)", [
    ["Desplazamientos", "correr · reptar · trepar", "var(--leaf)"],
    ["Saltos y giros", "4 fases · 3 ejes", "var(--sun)"],
    ["Manipulaciones", "lanzar · recibir · botar", "var(--red)"],
    ["Coordinativas", "coordinación · equilibrio", "var(--pen)"],
  ], 230),
  tarjetas: [
    ["Habilidad motriz básica", "Movimiento fundamental base de todos los deportes."],
    ["Desplazamiento", "Movimiento de un lugar a otro."],
    ["Fases del salto", "Preparación, impulso, vuelo y caída."],
    ["Eje transversal", "De cadera a cadera; voltereta."],
    ["Eje anteroposterior", "De delante atrás; rueda lateral."],
    ["Recepción", "Controlar un móvil que llega, amortiguando."],
    ["Coordinación óculo-manual", "Ajustar las manos a lo que ven los ojos."],
    ["Equilibrio dinámico", "Mantener la postura en movimiento."],
  ],
  familias: ["Jugad a la rayuela o a la comba y comentad qué habilidades usáis.", "Probad a botar una pelota con la mano no dominante.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Habilidades motrices básicas y su aplicación: desplazamientos, saltos, giros, manipulaciones; capacidades coordinativas (coordinación y equilibrio) en contextos de juego (RD 217/2022, Educación Física, resolución de problemas en situaciones motrices).",
    ideas: ["Circuito de habilidades cronometrado por parejas.", "Malabares con pañuelos para la coordinación óculo-manual.", "Retos de equilibrio en bancos suecos invertidos."],
  },
  fuentes: [RD, { t: "Consejo Superior de Deportes", url: "https://www.csd.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Analiza el salto de longitud por fases.", pasos: ["Preparación: carrera de aproximación.", "Impulso: batida con una pierna en la tabla.", "Vuelo: piernas adelante.", "Caída: en el foso, flexionando rodillas y llevando el cuerpo adelante."], resultado: "Las cuatro fases del salto aplicadas al atletismo." },
    { enunciado: "Pablo siempre se cae al recibir pases fuertes. ¿Qué le aconsejas?", pasos: ["Colocarse con las piernas separadas y semiflexionadas (más equilibrio).", "Seguir el balón con la vista.", "Amortiguar llevando las manos hacia el pecho."], resultado: "Mejorar la base de apoyo y la amortiguación." },
    { enunciado: "Clasifica: trepar por una cuerda, voltereta atrás, chutar, mantenerse a la pata coja.", pasos: ["Trepar: desplazamiento.", "Voltereta atrás: giro transversal.", "Chutar: manipulación (golpeo con el pie).", "Pata coja: equilibrio estático."], resultado: "Desplazamiento, giro, manipulación y equilibrio." },
  ],
  errores: [
    "Caer de los saltos con las piernas rígidas.",
    "Apoyar la cabeza en la voltereta.",
    "Lanzar con la pierna del mismo lado que el brazo adelantada.",
    "Recibir con los brazos rígidos sin amortiguar.",
    "Pensar que las habilidades básicas solo son cosa de niños pequeños.",
  ],
  ejercicios: [
    { q: "Escribe los cuatro grupos de habilidades motrices básicas con dos ejemplos.", sol: "Desplazamientos (correr, reptar), saltos (longitud, altura), giros (voltereta, pirueta), manipulaciones (lanzar, botar)." },
    { q: "¿Qué diferencia hay entre andar y correr?", sol: "Al correr hay una fase de vuelo sin apoyo." },
    { q: "Describe las fases del salto.", sol: "Preparación, impulso, vuelo y caída." },
    { q: "Nombra los tres ejes de giro con un ejemplo de cada uno.", sol: "Longitudinal (pirueta), transversal (voltereta), anteroposterior (rueda lateral)." },
    { q: "Explica la técnica de la voltereta hacia delante.", sol: "Manos a la anchura de hombros, barbilla al pecho, espalda redonda, rodar sin apoyar la cabeza." },
    { q: "Escribe tres claves para lanzar bien.", sol: "Mirar al objetivo, pierna contraria delante, acompañar el movimiento." },
    { q: "¿Qué es la coordinación óculo-pie? Pon un ejemplo.", sol: "Ajustar los pies a lo que ven los ojos; conducir un balón." },
    { q: "Diferencia equilibrio estático y dinámico.", sol: "Estático: sin desplazarse; dinámico: en movimiento." },
    { q: "¿Qué habilidades usa un portero al hacer una parada?", sol: "Desplazamiento lateral, salto, recepción y caída." },
    { q: "Diseña un circuito de cinco estaciones con una habilidad diferente en cada una.", sol: "Respuesta abierta." },
  ],
};
