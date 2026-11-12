// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, rueda, flujo, filas } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "¿Qué es la filosofía?",
  minutos: 60,
  objetivos: ["Explicar qué es la filosofía y en qué se diferencia del mito, la ciencia y la religión", "Conocer el paso del mito al logos en la Grecia antigua", "Distinguir las grandes ramas de la filosofía y sus preguntas", "Aplicar la actitud filosófica: asombro, duda y argumentación"],
  claves: ["filosofía", "asombro", "mito", "logos", "presocráticos", "argumentar"],
  pregunta: {
    texto: "Un niño de cinco años pregunta sin parar «¿por qué?». Un científico también. ¿Puede una pregunta no tener nunca una respuesta definitiva y aun así merecer la pena?",
    respuesta: "Sí. La <mark>filosofía</mark> se ocupa justamente de preguntas así: qué es la verdad, qué es justo, si somos libres. No tienen una respuesta de laboratorio, pero pensarlas con <b>razones</b> nos ayuda a vivir mejor y a no dejarnos engañar.",
  },
  bloques: [
    {
      html: `<h3>Amor a la sabiduría</h3><p>La palabra <b>filosofía</b> viene del griego <i>philos</i> (amigo, amante) y <i>sophía</i> (sabiduría): es el <mark>amor a la sabiduría</mark>. El filósofo no es alguien que ya lo sabe todo, sino alguien que busca saber. Según la tradición, Pitágoras dijo que solo los dioses son sabios; los humanos, como mucho, pueden ser «amantes del saber».</p><p>La filosofía es un <b>saber racional</b>: intenta comprender la realidad, el conocimiento y la acción humana usando argumentos, no autoridad ni tradición. Por eso se dice que es un saber <b>crítico</b> (lo revisa todo), <b>radical</b> (va a la raíz de las cosas) y <b>global</b> (busca una visión de conjunto).</p>`,
      svg: rueda("Rasgos del saber filosófico alrededor de la palabra filosofía", "FILO|SOFÍA", [["racional", "var(--pen)"], ["crítico", "var(--red)"], ["radical", "var(--sun)"], ["global", "var(--leaf)"], ["sin dogmas", "var(--inf)"], ["abierto", "var(--bac)"]], "var(--ink)"),
    },
    {
      html: `<h3>El origen: el asombro</h3><p>Platón y Aristóteles coincidían en que la filosofía nace del <mark>asombro</mark> (<i>thaumázein</i>): quedarse sorprendido ante algo que parecía normal. ¿Por qué hay algo en lugar de nada? ¿Por qué el agua se convierte en hielo? Al asombro se suman la <b>duda</b> (¿y si estoy equivocado?) y las <b>situaciones límite</b>, como la muerte o el sufrimiento, que nos obligan a preguntarnos por el sentido de la vida.</p>`,
      svg: flujo("Del asombro a la filosofía", ["asombro", "pregunta", "duda", "razones", "respuesta|provisional"], "var(--sun)"),
    },
    {
      html: `<h3>Del mito al logos</h3><p>Antes de la filosofía, los pueblos explicaban el mundo con <b>mitos</b>: relatos sobre dioses y héroes que se transmitían por tradición y no se discutían. Un trueno era la ira de Zeus. Hacia el siglo VI a. C., en las colonias griegas de Jonia (en la actual Turquía), algunos pensadores empezaron a buscar explicaciones basadas en el <mark>logos</mark>: la razón, el argumento que se puede comprobar y criticar.</p><p>Influyeron varias causas: el contacto comercial con otros pueblos (que tenían otros mitos), el uso de la escritura alfabética, la existencia de tiempo libre en las ciudades y la <b>polis</b>, donde los ciudadanos estaban acostumbrados a debatir en público.</p>`,
      svg: dos("Diferencias entre mito y logos", ["Mito", ["relato", "dioses y héroes", "tradición", "no se discute", "fantasía"], "var(--red)"], ["Logos", ["argumento", "causas naturales", "razón", "se critica", "se comprueba"], "var(--pen)"]),
      video: { id: "flOJubw6SG0", titulo: "El Origen de la Filosofía", canal: "Unboxing Philosophy", vistas: 1939321, megusta: 24061 },
    },
    {
      html: `<h3>Los primeros filósofos</h3><p>Los <b>presocráticos</b> (anteriores a Sócrates) se preguntaron por el <mark>arjé</mark>, el principio del que está hecho todo. Tales de Mileto dijo que era el agua; Anaxímenes, el aire; Heráclito vio el fuego y el cambio constante («no te bañas dos veces en el mismo río»); Parménides defendió que el cambio es una ilusión; Demócrito imaginó que todo está formado por <b>átomos</b> invisibles. Sus respuestas eran discutibles, pero la novedad era el método: dar razones.</p>`,
      svg: filas("Primeros filósofos y su principio", [["Tales", "el agua", "var(--water)"], ["Anaxímenes", "el aire", "var(--inf)"], ["Heráclito", "el fuego y el cambio", "var(--red)"], ["Parménides", "el ser no cambia", "var(--muted)"], ["Demócrito", "los átomos", "var(--leaf)"]]),
    },
    {
      html: `<h3>Sócrates y el diálogo</h3><p>En Atenas, en el siglo V a. C., <b>Sócrates</b> llevó la filosofía de la naturaleza a las cuestiones humanas: qué es la justicia, la valentía o la virtud. No escribió nada; hablaba en la plaza con quien quisiera. Su método tenía dos fases: la <b>ironía</b> (fingía no saber y con preguntas mostraba las contradicciones del otro) y la <b>mayéutica</b> (ayudaba a «dar a luz» ideas verdaderas). Su lema era <mark>«Solo sé que no sé nada»</mark>: reconocer la propia ignorancia es el primer paso para aprender.</p>`,
    },
    {
      html: `<h3>Las ramas de la filosofía</h3><p>Con el tiempo, la filosofía se organizó en <b>disciplinas</b>, cada una con sus preguntas. Kant las resumió en cuatro: ¿qué puedo saber?, ¿qué debo hacer?, ¿qué me cabe esperar? y ¿qué es el ser humano?</p>${tabla(["Rama", "Pregunta principal"], [["Metafísica", "¿Qué es lo real? ¿Existe Dios? ¿Qué es el tiempo?"], ["Teoría del conocimiento", "¿Qué puedo saber? ¿Qué es la verdad?"], ["Lógica", "¿Cuándo un razonamiento es correcto?"], ["Antropología filosófica", "¿Qué es el ser humano?"], ["Ética", "¿Qué debo hacer? ¿Qué es el bien?"], ["Filosofía política", "¿Qué es un Estado justo?"], ["Estética", "¿Qué es la belleza? ¿Qué es el arte?"]])}`,
      video: { id: "_RLNhpBMN0k", titulo: "¿Cuáles son las ramas de la filosofía?", canal: "TICMAS Educación", vistas: 80603, megusta: 0 },
    },
    {
      html: `<h3>Filosofía, ciencia y religión</h3><p>Las tres intentan explicar el mundo, pero de forma distinta. La <b>ciencia</b> estudia hechos observables con experimentos y medidas, y sus respuestas se pueden comprobar. La <b>religión</b> se basa en la fe y en una revelación que se acepta. La <b>filosofía</b> usa solo la razón y se ocupa de preguntas que la ciencia no puede medir: ¿es bueno clonar seres humanos?, ¿qué es la conciencia? Al principio, filosofía y ciencia eran lo mismo; la física, la biología o la psicología se separaron de ella poco a poco.</p>`,
      svg: filas("Tres formas de explicar el mundo", [["Ciencia", "hechos, experimentos, medida", "var(--leaf)"], ["Religión", "fe, revelación, creencia", "var(--sun)"], ["Filosofía", "razón, argumentos, crítica", "var(--pen)"], ["Mito", "relatos, tradición", "var(--red)"]]),
    },
    {
      html: `<h3>¿Para qué sirve la filosofía?</h3><p>Se dice a veces que la filosofía «no sirve para nada», porque no fabrica objetos. Pero sirve para algo muy valioso: <mark>pensar por uno mismo</mark>. Enseña a detectar argumentos tramposos, a ponerse en el lugar del otro, a defender ideas con respeto y a decidir qué vida queremos llevar. Kant lo resumió así: <i>Sapere aude</i>, «atrévete a servirte de tu propia razón».</p>`,
    },
    {
      html: `<h3>Cómo se hace filosofía</h3><p>Hacer filosofía no es memorizar nombres, sino seguir unos pasos: <b>1)</b> plantear bien la pregunta; <b>2)</b> aclarar los conceptos («¿qué entiendo por libertad?»); <b>3)</b> dar <b>argumentos</b> y no solo opiniones; <b>4)</b> buscar contraejemplos y objeciones; <b>5)</b> llegar a una conclusión provisional, que puede revisarse. El <mark>diálogo</mark> es la herramienta básica: se piensa mejor con otros que solo.</p>`,
    },
  ],
  figura: {
    titulo: "La filosofía en un vistazo",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Origen en el asombro, método racional, primeros filósofos en Grecia y ramas principales">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      ${[["Origen", "asombro · duda · límites", "var(--sun)"], ["Método", "logos: razones y crítica", "var(--pen)"], ["Inicio", "Grecia, siglo VI a. C.", "var(--red)"], ["Ramas", "metafísica · ética · lógica…", "var(--leaf)"]].map(([t, d, c], i) => `<rect x="20" y="${14 + i * 50}" width="640" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${41 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${t}</text><text x="190" y="${41 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "RDrTtZwQ0k4", titulo: "¿Qué es la FILOSOFÍA y qué tiene que ver con la ciencia?", canal: "CuriosaMente", vistas: 1582072, megusta: 0, busqueda: "qué es la filosofía" },
  ejemplos: [
    { enunciado: "Clasifica esta explicación: «Las estaciones existen porque Perséfone pasa seis meses en el inframundo y su madre Deméter, triste, deja secar los campos».", pasos: ["Explica un fenómeno natural (las estaciones).", "Lo hace con dioses y un relato tradicional, sin pruebas.", "No se puede comprobar ni discutir con razones."], resultado: "Es una explicación mítica, no racional." },
    { enunciado: "¿A qué rama de la filosofía pertenece cada pregunta? a) ¿Es lícito mentir para salvar una vida? b) ¿Puedo estar seguro de que no estoy soñando? c) ¿Por qué nos parece bella una puesta de sol?", pasos: ["a) Pregunta por lo que debemos hacer: ética.", "b) Pregunta por los límites del saber: teoría del conocimiento.", "c) Pregunta por la belleza: estética."], resultado: "a) Ética; b) teoría del conocimiento; c) estética." },
    { enunciado: "Aplica el método socrático a la afirmación «Ser valiente es no tener miedo».", pasos: ["Ironía: buscamos un contraejemplo. Un bombero entra en un edificio en llamas con miedo. ¿No es valiente?", "La definición no funciona: quien no siente miedo puede ser solo imprudente.", "Mayéutica: proponemos otra. «Ser valiente es actuar bien a pesar del miedo»."], resultado: "La definición inicial se corrige gracias al diálogo." },
  ],
  errores: [
    "Creer que la filosofía es dar opiniones: hay que dar argumentos que otros puedan revisar.",
    "Pensar que los mitos eran tonterías: cumplían una función social y fueron el primer intento de explicar el mundo.",
    "Confundir filosofía y religión: la filosofía se apoya solo en la razón, no en la fe.",
    "Decir que «solo sé que no sé nada» significa no saber nada: es reconocer los límites del propio saber.",
    "Pensar que como no hay respuesta definitiva, todas las respuestas valen lo mismo: unas están mejor argumentadas que otras.",
  ],
  ejercicios: [
    { q: "Explica el origen de la palabra «filosofía».", sol: "Viene del griego philos (amigo, amante) y sophía (sabiduría): amor a la sabiduría." },
    { q: "Escribe tres diferencias entre el mito y el logos.", sol: "El mito es un relato con dioses, se transmite por tradición y no se discute; el logos da razones naturales, se basa en la razón y se puede criticar y comprobar." },
    { q: "Nombra tres causas del paso del mito al logos en Grecia.", sol: "El comercio con otros pueblos, la escritura alfabética, el tiempo libre y la vida política de la polis, donde se debatía en público." },
    { q: "¿Qué es el arjé? Pon dos ejemplos de respuestas presocráticas.", sol: "El principio del que está hecho todo. Tales dijo el agua; Anaxímenes, el aire; Demócrito, los átomos." },
    { q: "Explica las dos fases del método de Sócrates.", sol: "La ironía: con preguntas muestra las contradicciones del otro. La mayéutica: le ayuda a encontrar por sí mismo una idea más verdadera." },
    { q: "¿Qué tres experiencias suelen dar origen a la filosofía?", sol: "El asombro, la duda y las situaciones límite (muerte, sufrimiento)." },
    { q: "Escribe una pregunta propia para la ética, otra para la metafísica y otra para la estética.", sol: "Respuesta abierta. Ejemplos: ¿está bien comer animales? (ética); ¿existe el alma? (metafísica); ¿un urinario en un museo es arte? (estética)." },
    { q: "¿En qué se diferencian la ciencia y la filosofía?", sol: "La ciencia estudia hechos observables con experimentos y medidas; la filosofía trata con la razón preguntas generales o de valor que no se pueden medir." },
    { q: "Explica la frase de Kant «Sapere aude».", sol: "«Atrévete a saber»: usa tu propia razón sin depender de lo que otros te digan." },
    { q: "Escribe un breve diálogo de cuatro líneas en el que alguien revise su definición de «amistad» gracias a un contraejemplo.", sol: "Respuesta abierta. Ejemplo: A: «Un amigo es alguien con quien lo pasas bien». B: «¿Y alguien con quien te diviertes una tarde ya es tu amigo?». A: «No… Un amigo es alguien con quien compartes confianza a lo largo del tiempo»." },
  ],
  quiz: [
    { q: "«Filosofía» significa…", o: ["amor a la sabiduría", "ciencia de los dioses", "arte de hablar"], a: 0, e: "Del griego philos y sophía." },
    { q: "Según Platón y Aristóteles, la filosofía nace del…", o: ["miedo", "asombro", "dinero"], a: 1, e: "Thaumázein: quedarse sorprendido." },
    { q: "El paso del mito al logos ocurrió en…", o: ["Egipto, siglo XX a. C.", "Grecia, siglo VI a. C.", "Roma, siglo I"], a: 1, e: "En las colonias griegas de Jonia." },
    { q: "Para Tales de Mileto, el principio de todo era…", o: ["el fuego", "el agua", "los átomos"], a: 1, e: "El agua está en todos los seres vivos." },
    { q: "La mayéutica es…", o: ["ayudar a otro a encontrar la verdad con preguntas", "un tipo de mito", "una rama de la lógica"], a: 0, e: "Sócrates la comparaba con el oficio de su madre, comadrona." },
    { q: "¿Qué rama estudia qué debemos hacer?", o: ["Estética", "Ética", "Lógica"], a: 1, e: "La ética trata del bien y del deber." },
    { q: "Los presocráticos se preguntaron sobre todo por…", o: ["la naturaleza y el arjé", "la política de Roma", "el arte"], a: 0, e: "Buscaban el principio de todas las cosas." },
    { q: "Lo propio de la filosofía es…", o: ["obedecer a la tradición", "dar razones", "medir en el laboratorio"], a: 1, e: "Es un saber racional y crítico." },
    { q: "«Solo sé que no sé nada» se atribuye a…", o: ["Sócrates", "Kant", "Tales"], a: 0, e: "Reconocer la ignorancia es el inicio del saber." },
    { q: "¿Quién habló de los átomos?", o: ["Heráclito", "Demócrito", "Parménides"], a: 1, e: "Partículas invisibles e indivisibles." },
  ],
  examen: [
    { q: "Una explicación racional se caracteriza por…", o: ["poder discutirse y comprobarse", "venir de los antepasados", "hablar de dioses"], a: 0, e: "Es la esencia del logos." },
    { q: "Heráclito destacó…", o: ["el cambio constante", "que nada cambia", "el agua"], a: 0, e: "«Todo fluye»." },
    { q: "¿Qué pregunta NO es filosófica en sentido estricto?", o: ["¿A qué temperatura hierve el agua?", "¿Qué es la justicia?", "¿Somos libres?"], a: 0, e: "Se responde midiendo: es científica." },
  ],
  feynman: ["Qué significa filosofía y qué rasgos tiene", "Cómo y por qué se pasó del mito al logos", "Qué hacía Sócrates y qué eran la ironía y la mayéutica", "Las ramas de la filosofía y sus preguntas"],
  mapa: mapa("FILOSOFÍA", "var(--pen)", [
    ["Qué es", "amor a la sabiduría · razón", "var(--ink)"],
    ["Origen", "asombro · mito → logos", "var(--sun)"],
    ["Primeros", "presocráticos · Sócrates", "var(--red)"],
    ["Ramas", "metafísica · ética · lógica", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Filosofía", "Amor a la sabiduría: saber racional, crítico, radical y global."],
    ["Mito", "Relato tradicional con dioses y héroes que explica el mundo."],
    ["Logos", "Razón, explicación con argumentos que se pueden criticar."],
    ["Arjé", "Principio del que está hecho todo, según los presocráticos."],
    ["Mayéutica", "Método socrático para ayudar a descubrir la verdad con preguntas."],
    ["Thaumázein", "El asombro, origen de la filosofía."],
    ["Las cuatro preguntas de Kant", "¿Qué puedo saber? ¿Qué debo hacer? ¿Qué me cabe esperar? ¿Qué es el ser humano?"],
    ["Sapere aude", "«Atrévete a saber»: piensa por ti mismo."],
  ],
  familias: ["Durante la cena, elegid una «gran pregunta» (¿qué es un buen amigo?) y que cada uno dé una razón.", "Ved un mito griego en una película o cómic y comentad qué explicaba.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): naturaleza del saber filosófico, paso del mito al logos, disciplinas filosóficas y diálogo como método (marco del RD 217/2022).",
    ideas: ["Comunidad de indagación: la clase elige una pregunta y dialoga con reglas.", "Comparar un mito de origen y una explicación científica del mismo fenómeno.", "Cada alumno escribe su propia «pregunta filosófica» y la clasifica por ramas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Filosofía, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Filosof%C3%ADa" },
  ],
  revisado: "2026-11-12",
};
