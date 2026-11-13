// Infantil 3 años · Comunicación y representación: Hablamos y escuchamos. Para leer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, charla, lista, mural, vid } = require("./_peque");
const { R, A, V, N, escena, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Hablamos y escuchamos",
  minutos: 10,
  objetivos: ["Mirar a quien nos habla y escuchar", "Esperar el turno para hablar", "Decir lo que queremos con palabras"],
  claves: ["hablar", "escuchar", "mi turno", "por favor", "gracias"],
  pregunta: {
    texto: "¿Qué pasa si todos hablamos a la vez?",
    respuesta: "¡No se entiende nada! Primero <mark>escucho</mark> y después <mark>hablo yo</mark>.",
  },
  bloques: [
    {
      html: `<h3>Hablamos con palabras</h3><p>Con la <mark>boca</mark> decimos palabras.</p><p>Decimos lo que queremos. Decimos lo que nos pasa. «Tengo sed». «Me duele aquí». ¡Hablando nos entendemos!</p><p>Prueba ahora: di en voz alta qué te apetece comer hoy.</p>`,
      svg: escena("Un niño habla y dice tengo sed", [["nino", 70, 96, 2.2], ["t", 180, 70, "¡Tengo sed!", A, 24], ["agua", 180, 118, 1.6]]),
    },
    {
      html: `<h3>Escuchamos con las orejas</h3><p>Con las <mark>orejas</mark> oímos.</p><p>Para escuchar bien, miramos a quien habla. Estamos quietos y callados. ¡Así entendemos lo que nos dice!</p><p>Si no oímos bien, podemos decir: «¿Me lo repites, por favor?».</p>`,
      svg: escena("Una niña escucha con atención a su mamá", [["mama", 70, 90, 2], ["t", 70, 152, "habla", R, 20], ["nina", 190, 90, 2], ["oido", 246, 92, 0.7], ["t", 190, 152, "escucha", A, 20]]),
    },
    {
      html: `<h3>Uno habla, otro escucha</h3><p>Hablar es como pasar una <mark>pelota</mark>.</p><p>Ahora hablas tú y yo escucho. Después hablo yo y tú escuchas. ¡Esperamos nuestro turno!</p><p>Si todos hablan a la vez, nadie se entiende. ¡Probadlo y veréis!</p>`,
      svg: charla("Conversación: hola, cómo estás; muy bien, y tú", [["nino", "¡Hola! ¿Cómo estás?", A], ["nina", "¡Muy bien! ¿Y tú?", R]]),
    },
    {
      html: `<h3>Palabras mágicas</h3><p>Hay palabras que ponen <mark>contentos</mark> a todos.</p><p><b>Hola</b> y <b>adiós</b>. <b>Por favor</b> cuando pedimos algo. <b>Gracias</b> cuando nos dan algo. ¡Dilas cada día!</p><p>Las palabras mágicas hacen sonreír a los mayores y a los niños.</p>`,
      svg: lista("Palabras mágicas: hola, por favor, gracias", [["¡Hola!", A], ["Por favor", R], ["Gracias", V]], { titulo: "Palabras mágicas", marca: "★" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Hablando podemos <mark>pedir ayuda</mark>.</p><p>Podemos contar qué hemos hecho en el cole. Podemos decir si estamos tristes o contentos. ¡Y hacer amigos nuevos!</p><p>Cuando hablamos y escuchamos, todos nos sentimos importantes y queridos.</p>`,
      svg: dibujos("Para qué sirve hablar: pedir ayuda, contar y hacer amigos", [["mano", "ayuda", R], ["escuela", "contar", A], ["feliz", "amigos", V]]),
    },
    {
      html: `<h3>Jugamos al teléfono</h3><p>Nos sentamos en <mark>corro</mark>.</p><p>Uno dice una palabra al oído del de al lado: «gato». Este la pasa al siguiente. El último la dice en voz alta. ¿Ha llegado igual?</p>`,
      svg: escena("Juego del teléfono: la palabra gato pasa de oreja en oreja", [["nino", 40, 100, 1.5], ["nina", 103, 100, 1.5], ["nino", 166, 100, 1.5], ["nina", 226, 100, 1.5], ["t", 72, 62, "gato", N, 18], ["t", 135, 62, "gato", N, 18], ["t", 196, 62, "¿gato?", N, 18], ["gato", 130, 152, 1]], { titulo: "El teléfono" }),
    },
  ],
  figura: {
    titulo: "Hablamos y escuchamos",
    svg: mural("Hablar y escuchar: boca para hablar, orejas para escuchar, esperar el turno, palabras mágicas", [["boca", "hablo", "digo palabras", R], ["oido", "escucho", "miro y callo", A], ["reloj", "mi turno", "espero", V], ["corazon", "gracias", "por favor", N]], "Hablamos y escuchamos"),
  },
  video: { ...vid("NqHufCHS9Ak", "Shh, ¡Guarda Silencio! | Canción Infantil | Buenos Modales Para Niños", "BabyBus - Canciones Infantiles & Videos para Niños", 2171557), busqueda: "canción para escuchar y guardar silencio niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Quieres agua. ¿Cómo la pides?",
      pasos: ["Miramos al adulto.", "Decimos qué queremos.", "Añadimos la palabra mágica."],
      resultado: "«Agua, por favor.»" },
    { enunciado: "Mamá te cuenta algo. ¿Qué haces?",
      pasos: ["La miro.", "Estoy quieto y callado.", "Cuando termina, hablo yo."],
      resultado: "Escucho y después contesto." },
  ],
  errores: [
    "Hablar todos a la vez: así nadie se entiende.",
    "Gritar para pedir algo: se pide con voz tranquila.",
    "Mirar a otro sitio cuando nos hablan.",
  ],
  ejercicios: [
    { q: "Di tu nombre en voz alta.", sol: "Para la familia: ayudadle a decirlo despacio y claro." },
    { q: "Señala la boca y las orejas.", sol: "La boca sirve para hablar y las orejas para oír." },
    { q: "Pide un juguete con «por favor».", sol: "Por ejemplo: «La pelota, por favor»." },
    { q: "Escucha una palabra y repítela.", sol: "El adulto dice «casa», «sol» o «perro» y el niño la repite." },
    { q: "Cuenta qué has comido hoy.", sol: "Basta una frase corta. Escuchad sin interrumpir." },
    { q: "Juega al teléfono con la familia.", sol: "Pasad una palabra al oído y comprobad si llega igual." },
  ],
  quiz: [
    { q: "¿Con qué hablamos?", o: ["con la boca", "con los pies", "con el pelo"], a: 0, e: "Hablamos con la boca." },
    { q: "¿Con qué escuchamos?", o: ["con las manos", "con las orejas", "con la nariz"], a: 1, e: "Oímos con las orejas." },
    { q: "Si alguien habla, yo…", o: ["grito", "escucho", "me voy"], a: 1, e: "Escucho y espero mi turno." },
    { q: "Para pedir algo digo…", o: ["por favor", "¡dame!", "nada"], a: 0, e: "Por favor es una palabra mágica." },
    { q: "Si me dan un regalo digo…", o: ["adiós", "gracias", "no"], a: 1, e: "Decimos gracias." },
    { q: "Al escuchar miro…", o: ["al techo", "a quien habla", "al suelo"], a: 1, e: "Miramos a quien nos habla." },
  ],
  examen: [
    { q: "¿Hablamos todos a la vez?", o: ["sí", "no, por turnos", "solo gritando"], a: 1, e: "Uno habla y los demás escuchan." },
    { q: "Al llegar al cole digo…", o: ["hola", "adiós", "gracias"], a: 0, e: "Al llegar saludamos: hola." },
    { q: "Para escuchar bien estoy…", o: ["saltando", "quieto y callado", "cantando"], a: 1, e: "Quietos y callados oímos mejor." },
  ],
  feynman: ["Hablo con la boca y escucho con las orejas", "Uno habla y el otro espera su turno", "Hola, por favor y gracias"],
  mapa: mapa("HABLAMOS", "var(--inf)", [
    ["Hablo", "con la boca", R],
    ["Escucho", "con las orejas", A],
    ["Mi turno", "espero y hablo", V],
    ["Palabras mágicas", "por favor, gracias", N],
  ], 230),
  tarjetas: [
    ["¿Con qué hablamos?", "Con la boca"],
    ["¿Con qué escuchamos?", "Con las orejas"],
    ["Para pedir algo…", "Por favor"],
    ["Cuando nos dan algo…", "Gracias"],
    ["Al escuchar, miro…", "A quien habla"],
    ["¿Todos a la vez?", "No: por turnos"],
  ],
  familias: [
    "Hablad con el niño mirándole a los ojos y a su altura.",
    "Dejad que termine sus frases, aunque tarde un poco.",
    "Usad vosotros también por favor y gracias: aprende imitando.",
    "En la cena, que cada uno cuente una cosa de su día por turnos.",
  ],
  profesores: PROF("Comunicación verbal: intención comunicativa, escucha atenta, turnos de palabra y normas de cortesía", ["Asamblea con un objeto que marca quién habla.", "Juego del teléfono en corro.", "Rutina de saludo y despedida con palabras mágicas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
