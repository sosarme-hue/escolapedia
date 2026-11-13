// Infantil 3 años · Religión: La Navidad. Para leer con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, mural, vid } = require("./_peque");
const { R, A, V, N, S, escena, belen, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Religión",
  curso: "3-anos",
  titulo: "La Navidad",
  minutos: 10,
  objetivos: ["Saber que en Navidad celebramos que nace Jesús", "Conocer a María, José y el niño Jesús", "Montar un belén sencillo en familia"],
  claves: ["Navidad", "Jesús", "María", "José", "Belén", "estrella", "belén"],
  pregunta: {
    texto: "¿Qué fiesta llega en invierno, con luces, villancicos y regalos?",
    respuesta: "¡La <mark>Navidad</mark>! Los cristianos celebran que nace el <mark>niño Jesús</mark>.",
  },
  bloques: [
    {
      html: `<h3>Llega la Navidad</h3><p>En invierno llega la <mark>Navidad</mark>.</p><p>Las calles se llenan de luces. Cantamos villancicos. Las familias se juntan. ¡Es una gran fiesta!</p><p>En casa ponemos el árbol y el belén.</p>`,
      svg: dibujos("Navidad: luces, villancicos y la familia junta", [["estrella", "luces", S], ["campana", "villancicos", R], ["corazon", "familia", A]], { titulo: "¡Navidad!" }),
    },
    {
      html: `<h3>María y José</h3><p><mark>María</mark> y <mark>José</mark> iban de viaje a Belén.</p><p>María esperaba un bebé. Buscaron sitio para dormir, pero todo estaba lleno. Encontraron un establo.</p><p>Iban despacio, con un burrito, por un camino largo.</p>`,
      svg: dibujos("María y José van de viaje con un burro", [["mama", "María", A], ["papa", "José", V], ["burro", "burro", N]], { titulo: "De viaje a Belén" }),
    },
    {
      html: `<h3>Nace Jesús</h3><p>En el establo nació el <mark>niño Jesús</mark>.</p><p>María lo envolvió en pañales y lo acostó en un pesebre. Una mula y un buey le daban calor.</p>`,
      svg: belen("El portal de Belén: José, María y el niño Jesús en el pesebre", { nota: "Nace Jesús" }),
    },
    {
      html: `<h3>La estrella</h3><p>En el cielo brillaba una <mark>estrella</mark> muy grande.</p><p>Los pastores y los Reyes Magos la siguieron. Llegaron al portal y saludaron a Jesús con alegría.</p>`,
      svg: escena("Una estrella grande guía a los pastores", [["estrella", 130, 56, 2.6], ["svg", `<path d="M130 82 L 70 150 M130 82 L 190 150" stroke="var(--sun)" stroke-width="3" stroke-dasharray="4 6"/>`], ["abuelo", 62, 140, 1.2], ["nino", 198, 140, 1.2], ["t", 130, 168, "la estrella", S, 18]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>La Navidad nos recuerda que hay que <mark>querer y compartir</mark>.</p><p>Visitamos a los abuelos. Regalamos. Pensamos en los que están solos. ¡Así es la Navidad!</p>`,
      svg: dibujos("En Navidad queremos y compartimos: abuelos, regalos y amigos", [["abuela", "abuelos", R], ["juguete", "regalos", A], ["corazon", "compartir", V]]),
    },
    {
      html: `<h3>Montamos el belén</h3><p>En casa o en el cole montamos un <mark>belén</mark>.</p><p>Ponemos a María, José y el niño Jesús. Luego la mula, el buey y la estrella. ¿Quién falta?</p>`,
      svg: belen("Montamos el belén en casa", { nota: "Nuestro belén" }),
    },
  ],
  figura: {
    titulo: "La Navidad",
    svg: mural("La Navidad: María, José, el niño Jesús y la estrella", [["mama", "María", "la madre", A], ["papa", "José", "el padre", V], ["bebe", "Jesús", "nace en Belén", R], ["estrella", "estrella", "guía a todos", S]], "La Navidad"),
  },
  video: { ...vid("VBIEGiokXTQ", "La Historia de la Navidad - El Nacimiento de Jesús", "Saddleback Kids", 244698), busqueda: "la navidad para niños nacimiento de jesús dibujos" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Quién nace en Navidad?",
      pasos: ["Miramos el belén.", "Buscamos al bebé en el pesebre."],
      resultado: "El niño Jesús." },
    { enunciado: "¿Quiénes son los papás de Jesús?",
      pasos: ["Miramos a los lados del pesebre.", "Decimos sus nombres."],
      resultado: "María y José." },
  ],
  errores: [
    "Pensar que la Navidad es solo regalos: es la fiesta del nacimiento de Jesús.",
    "Pensar que Jesús nació en un palacio: nació en un establo, muy pobre.",
    "Olvidar a quienes están solos en estas fiestas.",
  ],
  ejercicios: [
    { q: "Señala a Jesús, María y José en un belén.", sol: "Para la familia: usad el belén de casa o un dibujo." },
    { q: "Canta un villancico.", sol: "Por ejemplo, Campana sobre campana o Los peces en el río." },
    { q: "Dibuja la estrella de Belén.", sol: "Grande y amarilla, con una cola." },
    { q: "Ayuda a montar el belén.", sol: "Que coloque él las figuras grandes." },
    { q: "Haz un dibujo para los abuelos.", sol: "Un regalo hecho con cariño." },
    { q: "Mira el vídeo del nacimiento de Jesús.", sol: "Después, que os cuente qué ha visto." },
  ],
  quiz: [
    { q: "En Navidad celebramos que nace…", o: ["Jesús", "un perro", "el sol"], a: 0, e: "El niño Jesús." },
    { q: "La mamá de Jesús es…", o: ["María", "Lucía", "Ana"], a: 0, e: "María." },
    { q: "El papá de Jesús es…", o: ["José", "Pedro", "Juan"], a: 0, e: "José." },
    { q: "Jesús nació en…", o: ["un establo", "un castillo", "un barco"], a: 0, e: "En un establo de Belén." },
    { q: "En el cielo brillaba…", o: ["una estrella", "un arcoíris", "una nube"], a: 0, e: "Una estrella." },
    { q: "La Navidad llega en…", o: ["invierno", "verano", "la playa"], a: 0, e: "En invierno." },
  ],
  examen: [
    { q: "Jesús dormía en…", o: ["un pesebre", "una cama grande", "un coche"], a: 0, e: "En un pesebre." },
    { q: "Siguieron la estrella…", o: ["los pastores y los Reyes", "los peces", "los coches"], a: 0, e: "Pastores y Reyes Magos." },
    { q: "En Navidad…", o: ["compartimos", "nos peleamos", "estamos solos"], a: 0, e: "Queremos y compartimos." },
  ],
  feynman: ["En Navidad nace Jesús", "Sus papás son María y José", "Nació en un establo de Belén"],
  mapa: mapa("NAVIDAD", "var(--inf)", [
    ["María y José", "van a Belén", A],
    ["Jesús", "nace en un establo", R],
    ["La estrella", "guía a todos", S],
    ["Compartir", "querer a todos", V],
  ], 230),
  tarjetas: [
    ["¿Quién nace en Navidad?", "Jesús"],
    ["La mamá de Jesús", "María"],
    ["El papá de Jesús", "José"],
    ["¿Dónde nace?", "En Belén, en un establo"],
    ["¿Qué brilla en el cielo?", "Una estrella"],
    ["En Navidad…", "Compartimos"],
  ],
  familias: [
    "Montad juntos un belén sencillo y nombrad cada figura.",
    "Cantad villancicos en casa o en el coche.",
    "Haced un regalo hecho a mano para alguien de la familia.",
    "Hablad de los que están solos y pensad cómo ayudar.",
  ],
  profesores: PROF("Religión Católica en Educación Infantil: el nacimiento de Jesús en Belén, la Sagrada Familia, tradiciones navideñas y el valor de compartir", ["Belén de aula con figuras grandes.", "Villancico con gestos.", "Estrella con las huellas de la clase."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
