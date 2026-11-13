// Infantil 3 años · Religión: Jesús y los niños. Para leer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, charla, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Religión",
  curso: "3-anos",
  titulo: "Jesús y los niños",
  minutos: 10,
  objetivos: ["Escuchar la historia de Jesús y los niños", "Saber que Jesús quería mucho a los niños", "Acoger a todos, como hacía Jesús"],
  claves: ["Jesús", "niños", "acoger", "amigo", "dejad que los niños vengan"],
  pregunta: {
    texto: "¿Te gusta que un mayor juegue contigo y te escuche?",
    respuesta: "¡Claro! A Jesús le gustaba mucho <mark>estar con los niños</mark>. Los escuchaba y los abrazaba.",
  },
  bloques: [
    {
      html: `<h3>Jesús creció</h3><p>El niño Jesús de Belén se hizo <mark>mayor</mark>.</p><p>Iba de pueblo en pueblo con sus amigos. Hablaba a la gente de Dios y ayudaba a todos.</p>`,
      svg: dibujos("Jesús creció: de bebé a mayor", [["bebe", "bebé", N], ["nino", "niño", A], ["papa", "mayor", V]], { titulo: "Jesús crece" }),
    },
    {
      html: `<h3>Llegan los niños</h3><p>Un día, unas mamás <mark>llevaron a sus niños</mark> a ver a Jesús.</p><p>Querían que Jesús los abrazara y los bendijera. ¡Los niños estaban muy contentos!</p>`,
      svg: escena("Mamás y niños van a ver a Jesús", [["mama", 50, 86, 1.6], ["nino", 104, 110, 1.2], ["nina", 150, 110, 1.2], ["papa", 214, 80, 1.8], ["t", 214, 140, "Jesús", R, 18], ["corazon", 214, 30, 0.8]]),
    },
    {
      html: `<h3>«¡Que se vayan!»</h3><p>Los amigos de Jesús dijeron: <mark>«¡Fuera, que molestan!»</mark></p><p>Pensaban que Jesús estaba cansado. Los niños se pusieron tristes.</p><p>Pensaban que Jesús no tenía tiempo para los pequeños.</p>`,
      svg: charla("Los amigos de Jesús dicen que los niños molestan y la niña se pone triste", [["abuelo", "¡Fuera, que molestan!", A], ["triste", "Oh…", R]]),
    },
    {
      html: `<h3>«¡Dejad que vengan!»</h3><p>Jesús dijo: <mark>«Dejad que los niños vengan a mí»</mark>.</p><p>Los abrazó uno a uno. Les dijo que los quería mucho. ¡Y todos sonrieron!</p><p>Jesús tenía tiempo para todos, ¡y sobre todo para los niños!</p>`,
      svg: escena("Jesús abraza a los niños y todos sonríen", [["papa", 130, 70, 2], ["nino", 70, 120, 1.3], ["nina", 190, 120, 1.3], ["corazon", 130, 130, 1.2], ["t", 130, 168, "¡Dejad que vengan!", R, 18]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Jesús nos enseña a <mark>acoger a todos</mark>.</p><p>Si un niño quiere jugar, le decimos: «¡Ven!». Nadie se queda fuera. Así somos amigos de Jesús.</p><p>¡Jugar todos juntos es más divertido!</p>`,
      svg: charla("Un niño invita a otro a jugar: ¡Ven a jugar!", [["nino", "¿Puedo jugar?", A], ["nina", "¡Claro! ¡Ven!", R]]),
    },
    {
      html: `<h3>Jugamos a abrir el corro</h3><p>Hacemos un corro. Un niño está <mark>fuera</mark>.</p><p>Todos decimos: «¡Ven con nosotros!». Abrimos las manos y entra. ¡Ya somos todos!</p><p>En nuestro corro siempre cabe uno más.</p>`,
      svg: escena("El corro se abre para que entre un niño", [["svg", `<path d="M80 60 A 56 56 0 1 0 180 60" fill="none" stroke="var(--line)" stroke-width="4" stroke-dasharray="8 8"/>`], ["nina", 76, 96, 1], ["nino", 130, 150, 1], ["nina", 184, 96, 1], ["nino", 130, 40, 1.2], ["t", 220, 40, "¡Ven!", R, 22]]),
    },
  ],
  figura: {
    titulo: "Jesús y los niños",
    svg: mural("Jesús y los niños: llegan, los apartan, Jesús los llama, acogemos a todos", [["nino", "llegan", "quieren verle", A], ["triste", "¡fuera!", "los apartan", N], ["corazon", "¡venid!", "Jesús los abraza", R], ["feliz", "acoger", "nadie fuera", V]], "Jesús y los niños"),
  },
  video: { ...vid("l6ys5hjYK4s", "Dejen Que Los Niños Vengan A Mí | Canción Cristiana Infantil", "La Banda De Noé", 166851), busqueda: "jesús y los niños dejad que los niños vengan a mí" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué dijo Jesús a sus amigos?",
      pasos: ["Recordamos la historia.", "Los amigos querían apartar a los niños.", "Jesús los llamó."],
      resultado: "«Dejad que los niños vengan a mí.»" },
    { enunciado: "Un niño nuevo está solo en el patio.",
      pasos: ["Nos acercamos.", "Le decimos hola.", "Le invitamos a jugar."],
      resultado: "«¡Ven a jugar con nosotros!»" },
  ],
  errores: [
    "Pensar que los niños molestaban a Jesús: él quería estar con ellos.",
    "Dejar a alguien fuera del juego.",
    "Pensar que solo los mayores son importantes.",
  ],
  ejercicios: [
    { q: "Cuenta la historia con tus palabras.", sol: "Para la familia: ayudadle con preguntas: ¿quién vino?, ¿qué dijo Jesús?" },
    { q: "Dibuja a Jesús con los niños.", sol: "Que se dibuje él también en el grupo." },
    { q: "Invita a alguien a jugar.", sol: "En el parque o con un primo." },
    { q: "Da un abrazo a quien esté triste.", sol: "Hablad de cómo se sentían los niños apartados." },
    { q: "Juega a abrir el corro.", sol: "Con la familia o con peluches." },
    { q: "Canta la canción del vídeo.", sol: "Con gestos de abrazo." },
  ],
  quiz: [
    { q: "A Jesús le gustaba estar con…", o: ["los niños", "nadie", "solo los mayores"], a: 0, e: "Con los niños." },
    { q: "Los amigos de Jesús dijeron…", o: ["¡fuera!", "¡venid!", "¡a comer!"], a: 0, e: "Querían apartarlos." },
    { q: "Jesús dijo…", o: ["dejad que vengan", "que se vayan", "silencio"], a: 0, e: "Dejad que los niños vengan a mí." },
    { q: "Jesús a los niños los…", o: ["abrazó", "riñó", "echó"], a: 0, e: "Los abrazó." },
    { q: "Si un niño quiere jugar le digo…", o: ["¡ven!", "¡vete!", "nada"], a: 0, e: "¡Ven!" },
    { q: "Al final los niños estaban…", o: ["contentos", "enfadados", "dormidos"], a: 0, e: "Contentos." },
  ],
  examen: [
    { q: "Llevaron a los niños…", o: ["sus mamás", "un tren", "un perro"], a: 0, e: "Sus mamás." },
    { q: "Acoger es…", o: ["dejar entrar a todos", "dejar fuera", "esconderse"], a: 0, e: "Que nadie se quede fuera." },
    { q: "Jesús de mayor iba…", o: ["de pueblo en pueblo", "en avión", "solo en casa"], a: 0, e: "De pueblo en pueblo." },
  ],
  feynman: ["Las mamás llevaron a los niños a Jesús", "Jesús dijo: dejad que vengan", "Acogemos a todos"],
  mapa: mapa("JESÚS Y LOS NIÑOS", "var(--inf)", [
    ["Llegan", "quieren ver a Jesús", A],
    ["¡Fuera!", "los apartan", N],
    ["¡Venid!", "Jesús los abraza", R],
    ["Acoger", "nadie fuera", V],
  ], 230),
  tarjetas: [
    ["¿A quién quería Jesús?", "A los niños"],
    ["¿Qué dijo Jesús?", "Dejad que vengan"],
    ["¿Qué hizo con ellos?", "Los abrazó"],
    ["¿Quién los llevó?", "Sus mamás"],
    ["Acoger es…", "Que nadie se quede fuera"],
    ["Si alguien quiere jugar…", "¡Ven!"],
  ],
  familias: [
    "Leed o contad la historia con muñecos o peluches.",
    "Hablad de cómo se siente alguien cuando lo dejan fuera.",
    "Animadle a invitar a jugar a otros niños en el parque.",
    "Valorad cuando acoge a otro: «¡Como Jesús!».",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: Jesús acoge y bendice a los niños (Mc 10, 13-16), valor de la acogida y la amistad", ["Dramatizar la escena con disfraces sencillos.", "Juego del corro que se abre.", "Mural: todos cabemos en el corazón de Jesús."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
