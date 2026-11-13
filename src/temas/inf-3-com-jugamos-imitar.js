// Infantil 3 años · Comunicación y representación: Jugamos a imitar. Para hacer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Jugamos a imitar",
  minutos: 10,
  objetivos: ["Imitar animales con el cuerpo y la voz", "Poner caras de alegre, triste o enfadado", "Hacer como si fuéramos otra persona"],
  claves: ["imitar", "gestos", "caras", "hacer como si", "disfraz"],
  pregunta: {
    texto: "¿Sabes andar como un pato? ¿Y saltar como una rana?",
    respuesta: "¡Seguro que sí! Eso es <mark>imitar</mark>: hacer lo mismo que otro con nuestro cuerpo.",
  },
  bloques: [
    {
      html: `<h3>Imitar es copiar</h3><p>Imitar es hacer <mark>lo mismo</mark> que otro.</p><p>Yo levanto los brazos y tú levantas los brazos. Yo salto y tú saltas. ¡Somos como un espejo!</p><p>¿Te atreves? Toca tu nariz, ahora tu oreja, ahora tu tripa.</p>`,
      svg: escena("Un niño y una niña levantan los brazos a la vez, como un espejo", [["nino", 70, 90, 2], ["nina", 190, 90, 2], ["mano", 24, 40, 0.85], ["mano", 236, 40, 0.85], ["t", 130, 160, "¡como un espejo!", A, 20]]),
    },
    {
      html: `<h3>Imitamos animales</h3><p>Con el cuerpo y la voz <mark>imitamos animales</mark>.</p><p>La rana salta: ¡croac! El pato anda moviendo la cola: ¡cuac! El gato se estira: ¡miau!</p><p>¿Qué otro animal sabes imitar? ¿Un perro? ¿Un elefante?</p>`,
      svg: dibujos("Imitamos animales: la rana croac, el pato cuac, el gato miau", [["rana", "¡croac!", V], ["pato", "¡cuac!", N], ["gato", "¡miau!", A]], { titulo: "¿Qué animal soy?" }),
    },
    {
      html: `<h3>Imitamos caras</h3><p>Con la cara contamos <mark>cómo estamos</mark>.</p><p>Pon cara de alegre: ¡una sonrisa! Ahora de triste. Ahora de cansado. ¿Quién adivina cómo estás?</p><p>Mírate en un espejo y pon tu cara más divertida.</p>`,
      svg: dibujos("Caras: alegre, triste y cansado", [["feliz", "alegre", N], ["triste", "triste", A], ["cansado", "cansado", R]], { titulo: "¿Cómo estoy?" }),
    },
    {
      html: `<h3>Hacemos como si…</h3><p>Podemos <mark>hacer como si</mark> fuéramos otra persona.</p><p>Como si fuéramos papá cocinando. O el médico curando. O un piloto llevando un avión. ¡Vale todo!</p><p>Con un trapo o una gorra, el juego es todavía mejor.</p>`,
      svg: dibujos("Hacer como si: cocinar, conducir el tren, pilotar un avión", [["sopa", "cocinar", R], ["tren", "conducir", A], ["avion", "volar", V]], { titulo: "Hacemos como si…" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Imitando <mark>aprendemos</mark> a hacer cosas nuevas.</p><p>También entendemos cómo se sienten los demás. Y nos reímos mucho jugando juntos. ¡Imitar es aprender!</p><p>Los niños aprenden mucho imitando a los mayores de casa.</p>`,
      svg: dibujos("Imitar sirve para aprender, entender a los demás y reír", [["libro", "aprender", A], ["corazon", "entender", R], ["feliz", "reír", V]]),
    },
    {
      html: `<h3>Jugamos al espejo</h3><p>Nos ponemos uno frente a otro. Uno <mark>hace gestos</mark> despacio.</p><p>El otro es el espejo y lo copia todo. Después cambiamos. ¡No vale reírse!</p><p>Primero gestos fáciles: subir un brazo, guiñar un ojo, sonreír.</p>`,
      svg: escena("Juego del espejo: dos niños uno frente a otro hacen el mismo gesto", [["svg", `<path d="M130 30 V 150" stroke="var(--water)" stroke-width="4" stroke-dasharray="6 6"/>`], ["nina", 76, 96, 2], ["nina", 184, 96, 2], ["mano", 24, 44, 0.8], ["mano", 236, 44, 0.8], ["t", 130, 168, "el espejo", R, 20]]),
    },
  ],
  figura: {
    titulo: "Jugamos a imitar",
    svg: mural("Imitar: copiar gestos, animales, caras y hacer como si", [["mano", "copiar", "como un espejo", A], ["rana", "animales", "¡croac!", V], ["feliz", "caras", "alegre, triste", R], ["avion", "como si", "soy piloto", N]], "Jugamos a imitar"),
  },
  video: { ...vid("HRs7Dfxl2-c", "El Baile de los Animales · Las Canciones del Zoo 3", "El Reino Infantil", 932156183), busqueda: "canción imitar animales niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Imitamos a un elefante.",
      pasos: ["Un brazo hace de trompa.", "Andamos despacio y pesado.", "Hacemos su sonido."],
      resultado: "¡Somos elefantes!" },
    { enunciado: "Pon cara de enfadado.",
      pasos: ["Arrugamos la frente.", "Cerramos la boca fuerte.", "Nos miramos y nos reímos."],
      resultado: "¡Qué cara de enfado!" },
  ],
  errores: [
    "Imitar para burlarse de alguien: imitamos para jugar, no para reír de otros.",
    "Ir demasiado rápido en el espejo: así no se puede copiar.",
    "Hacer gestos bruscos que pueden hacer daño.",
  ],
  ejercicios: [
    { q: "Salta como una rana.", sol: "Para la familia: agachaos y saltad juntos diciendo croac." },
    { q: "Anda como un pato.", sol: "Con las manos en las axilas, moviendo los codos." },
    { q: "Pon cara de alegre y de triste.", sol: "Preguntad: ¿cuándo estás alegre?, ¿cuándo triste?" },
    { q: "Juega al espejo con un adulto.", sol: "Gestos lentos y sencillos; luego cambiad los papeles." },
    { q: "Haz como si cocinaras.", sol: "Una cuchara y una olla de juguete bastan." },
    { q: "Baila la canción de los animales.", sol: "Imitad cada animal que salga en el vídeo." },
  ],
  quiz: [
    { q: "Imitar es…", o: ["hacer lo mismo", "dormir", "esconderse"], a: 0, e: "Hacer lo mismo que otro." },
    { q: "La rana…", o: ["salta", "vuela", "nada en el cielo"], a: 0, e: "La rana salta." },
    { q: "El pato dice…", o: ["cuac", "guau", "muuu"], a: 0, e: "Cuac." },
    { q: "Una sonrisa es cara de…", o: ["alegre", "triste", "enfadado"], a: 0, e: "Alegre." },
    { q: "En el espejo yo…", o: ["copio", "me voy", "grito"], a: 0, e: "Copio los gestos." },
    { q: "Imitamos para…", o: ["jugar", "burlarnos", "pegar"], a: 0, e: "Para jugar y aprender." },
  ],
  examen: [
    { q: "El gato dice…", o: ["miau", "croac", "pío"], a: 0, e: "Miau." },
    { q: "«Hacer como si» es…", o: ["jugar a ser otro", "dormir", "comer"], a: 0, e: "Jugar a ser otra persona." },
    { q: "En el espejo los gestos van…", o: ["despacio", "muy rápido", "a escondidas"], a: 0, e: "Despacio para poder copiar." },
  ],
  feynman: ["Imitar es hacer lo mismo que otro", "Imitamos animales y caras", "Podemos hacer como si fuéramos otra persona"],
  mapa: mapa("IMITAR", "var(--inf)", [
    ["Copiar", "como un espejo", A],
    ["Animales", "rana, pato, gato", V],
    ["Caras", "alegre, triste", R],
    ["Hacer como si", "cocinero, piloto", N],
  ], 230),
  tarjetas: [
    ["Imitar es…", "Hacer lo mismo"],
    ["La rana dice…", "Croac"],
    ["El pato dice…", "Cuac"],
    ["Una sonrisa es…", "Cara de alegre"],
    ["En el espejo…", "Copio los gestos"],
    ["Imitamos para…", "Jugar y aprender"],
  ],
  familias: [
    "Jugad a «Simón dice»: Simón dice que toques tu nariz.",
    "Imitad animales en un paseo o viendo un cuento.",
    "Dejad que os imite en tareas de casa: poner la mesa, regar.",
    "Guardad una caja de disfraces con ropa vieja.",
  ],
  profesores: PROF("Lenguaje corporal y dramático: imitación de gestos, animales y emociones; juego simbólico", ["Juego del espejo por parejas.", "Rincón de juego simbólico (cocinita, médico).", "Dramatizar una canción de animales."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
