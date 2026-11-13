// Infantil 3 años · Crecimiento en armonía: Me lavo y me cuido. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", W = "var(--water)";
const manchas = (x, y) => `<g fill="#8a5a2b">${[[-6, -2], [4, 6], [-2, 10], [6, -8], [-9, 8]].map(([a, b]) => `<circle cx="${x + a}" cy="${y + b}" r="3.2"/>`).join("")}</g>`;
const brillos = (x, y) => `<g fill="var(--sun)">${[[-22, -26], [24, -20], [20, 22]].map(([a, b]) => `<path d="M${x + a} ${y + b - 6} l2 4 l4 2 l-4 2 l-2 4 l-2 -4 l-4 -2 l4 -2z"/>`).join("")}</g>`;

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "Me lavo y me cuido",
  minutos: 10,
  objetivos: ["Saber cuándo y cómo lavarse las manos", "Conocer los pasos del baño y del cepillado de dientes", "Taparse al toser y usar el pañuelo"],
  claves: ["agua", "jabón", "manos", "dientes", "toalla", "limpio"],
  pregunta: {
    texto: "Acabas de jugar en el parque y vas a comer. ¿Qué haces primero?",
    respuesta: "¡Me <mark>lavo las manos</mark> con agua y jabón! Así quito la suciedad antes de comer.",
  },
  bloques: [
    {
      html: `<h3>Agua y jabón</h3><p>Para estar limpio y sano uso <mark>agua y jabón</mark>.</p><p>El jabón hace espuma y se lleva la suciedad y los microbios. ¡Los microbios no se ven, pero están!</p><p>Después me seco bien con la toalla.</p>`,
      svg: dibujos("Para lavarme uso jabón, agua en la bañera y la toalla", [["jabon", "jabón", R], ["banera", "agua", W], ["toalla", "toalla", A]], { titulo: "Para lavarme" }),
    },
    {
      html: `<h3>Me lavo las manos</h3><p>Me lavo las manos <mark>antes de comer</mark>, después de ir al váter y al volver del parque.</p><p>Mojo, pongo jabón y froto, froto, froto… ¡mientras canto una canción! Aclaro y seco.</p>`,
      svg: lista("Tres pasos para lavarse las manos: mojar, jabón y frotar, aclarar y secar", [["Mojo las manos", W], ["Jabón y froto", R], ["Aclaro y seco", V]], { titulo: "Así me lavo las manos", marca: "n" }),
    },
    {
      html: `<h3>El baño</h3><p>En el <mark>baño</mark> me lavo todo el cuerpo: la cabeza, la barriga, los brazos y los pies.</p><p>Un adulto me ayuda con el champú. ¡Las burbujas son muy divertidas! Luego me seco y me pongo el pijama limpio.</p>`,
      svg: dibujos("Me baño, me seco con la toalla y me pongo el pijama", [["banera", "baño", W], ["toalla", "secar", A], ["pijama", "pijama", N]], { titulo: "La hora del baño" }),
      video: vid("okKiWXi7Hsg", "La canción del baño", "Little Baby Bum en Español", 1145505959),
    },
    {
      html: `<h3>Los dientes</h3><p>Me cepillo los <mark>dientes</mark> después de comer y antes de dormir.</p><p>Arriba y abajo, por delante y por detrás. Un adulto me ayuda a repasar.</p><p>Así mis dientes están fuertes y blancos. ¡Qué sonrisa!</p>`,
      svg: dibujos("Con el cepillo limpio los dientes y sonrío", [["cepillo", "cepillo", W], ["boca", "dientes", R], ["feliz", "¡sonrío!", V]], { titulo: "Cepillo mis dientes" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Lavarme me ayuda a estar <mark>sano</mark> y a no ponerme malito. Además, me siento fresco y huelo bien.</p><p>Cuando toso o estornudo, me tapo con el codo. Y uso un pañuelo para los mocos.</p>`,
      svg: lista("Lavarme sirve para estar sano y oler bien; al toser me tapo con el codo", [["Estoy sano", V], ["Huelo bien", W], ["Me tapo al toser", R]], { titulo: "Me cuido" }),
    },
    {
      html: `<h3>Jugamos: ¿limpio o sucio?</h3><p>Mira tus manos después de jugar con tierra. ¿Están <mark>limpias o sucias</mark>? ¡A lavarlas!</p><p>Ahora lava a un muñeco: agua, jabón y toalla. ¡Qué limpio está ahora!</p>`,
      svg: escena("Una mano sucia, el jabón y la mano ya limpia", `${ic("mano", 50, 84, 2)}${manchas(48, 84)}${t(50, 148, "sucia", 20, N)}
        <text x="80" y="96" font-size="24" font-weight="800" fill="var(--muted)">→</text>${ic("jabon", 130, 90, 1.4)}<text x="158" y="96" font-size="24" font-weight="800" fill="var(--muted)">→</text>
        ${ic("mano", 210, 84, 2)}${brillos(210, 84)}${t(210, 148, "limpia", 20, V)}`, "¿Limpia o sucia?"),
    },
  ],
  figura: {
    titulo: "Me lavo y me cuido",
    svg: mural("Me cuido: me lavo las manos, me baño, me cepillo los dientes y me tapo al toser", [["jabon", "manos", "antes de comer", R], ["banera", "baño", "todo el cuerpo", W], ["cepillo", "dientes", "después de comer", A], ["mano", "al toser", "me tapo con el codo", V]], "Me lavo y me cuido"),
  },
  video: { ...vid("ULBa1_og9W0", "Lávate las manos: canción infantil", "Hurra Canciones Infantiles", 81239644), busqueda: "lavarse las manos canción niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Lavamos las manos paso a paso.",
      pasos: ["Abrimos el grifo y mojamos las manos.", "Ponemos jabón y frotamos: palmas, dorso y dedos.", "Aclaramos, cerramos el grifo y secamos."],
      resultado: "¡manos limpias!" },
    { enunciado: "¡Achís! ¿Qué hago al estornudar?",
      pasos: ["Me tapo con el codo, no con la mano.", "Si tengo mocos, uso un pañuelo y lo tiro a la papelera."],
      resultado: "así no paso los microbios a los demás." },
  ],
  errores: [
    "Mojarse solo los dedos medio segundo: hay que frotar con jabón mientras dura una canción corta.",
    "Taparse el estornudo con la mano y luego tocarlo todo: mejor con el codo.",
    "Dejar que se cepille solo: a esta edad un adulto siempre repasa los dientes.",
  ],
  ejercicios: [
    { q: "Lávate las manos cantando «Cumpleaños feliz» dos veces.", sol: "Para la familia: es el tiempo justo de frotar; hacedlo juntos frente al espejo." },
    { q: "Ponte crema o un poco de pintura de dedos y busca los rincones: ¿entre los dedos también?", sol: "Para la familia: la pintura enseña dónde cuesta llegar al lavarse." },
    { q: "Señala en el dibujo: ¿qué usamos para secarnos?", sol: "Para la familia: la toalla. Nombrad también el jabón y el cepillo." },
    { q: "Lava a tu muñeco en un barreño con agua y jabón.", sol: "Para la familia: aprovechad para repetir el orden: mojar, jabón, aclarar, secar." },
    { q: "Practica: ¡achís! Tápate con el codo.", sol: "Para la familia: haced el gesto juntos varias veces, como un juego." },
    { q: "Cepíllate los dientes y después enséñame tu sonrisa.", sol: "Para la familia: dejadle empezar solo y repasad vosotros al final." },
  ],
  quiz: [
    { q: "¿Qué usamos para lavarnos las manos?", o: ["agua y jabón", "arena", "pintura"], a: 0, e: "Agua y jabón." },
    { q: "¿Cuándo nos lavamos las manos?", o: ["antes de comer", "nunca", "solo en verano"], a: 0, e: "Antes de comer y al volver del parque." },
    { q: "¿Con qué nos secamos?", o: ["con la toalla", "con la camiseta", "con el pelo"], a: 0, e: "Con la toalla." },
    { q: "¿Con qué limpiamos los dientes?", o: ["con el peine", "con el cepillo", "con la cuchara"], a: 1, e: "Con el cepillo de dientes." },
    { q: "Al estornudar me tapo con…", o: ["el codo", "nada", "el pie"], a: 0, e: "Con el codo." },
    { q: "Después del baño me pongo…", o: ["las botas de agua", "el pijama limpio", "el abrigo"], a: 1, e: "El pijama limpio." },
  ],
  examen: [
    { q: "¿Qué hace espuma?", o: ["el jabón", "el agua sola", "la toalla"], a: 0, e: "El jabón." },
    { q: "¿Cuándo nos cepillamos los dientes?", o: ["después de comer", "al ponernos los zapatos", "en el parque"], a: 0, e: "Después de comer y antes de dormir." },
    { q: "Para los mocos uso…", o: ["un pañuelo", "la manga", "la mano"], a: 0, e: "Un pañuelo." },
  ],
  feynman: ["Cuándo me lavo las manos", "Los pasos para lavarlas", "Cómo me tapo al toser"],
  mapa: mapa("ME CUIDO", "var(--inf)", [
    ["Manos", "agua, jabón y frotar", R],
    ["Baño", "todo el cuerpo", W],
    ["Dientes", "después de comer", A],
    ["Al toser", "me tapo con el codo", V],
  ], 220),
  tarjetas: [
    ["¿Con qué me lavo las manos?", "Con agua y jabón"],
    ["¿Cuándo me lavo las manos?", "Antes de comer y después del váter"],
    ["¿Con qué me seco?", "Con la toalla"],
    ["¿Cuándo me cepillo los dientes?", "Después de comer y antes de dormir"],
    ["¡Achís! ¿Con qué me tapo?", "Con el codo"],
    ["¿Qué uso para los mocos?", "Un pañuelo"],
  ],
  familias: [
    "Poned un taburete en el lavabo para que llegue solo al grifo y al jabón.",
    "Usad siempre la misma canción para lavarse las manos o los dientes: marca el tiempo.",
    "Dejad que se enjabone solo en el baño y nombrad cada parte que lava.",
    "Tened pañuelos a su alcance y una papelera cerca para que los use sin pedirlos.",
  ],
  profesores: PROF("Hábitos de vida saludable para el autocuidado: higiene personal, lavado de manos, cuidado de los dientes y prevención de contagios", [
    "Experimento de la pimienta: pimienta en un plato con agua; al tocar con un dedo con jabón, «los microbios huyen».",
    "Pictogramas de los pasos del lavado de manos junto al lavabo del aula.",
    "Rincón de juego simbólico: bañar y peinar a los muñecos con toallas y cepillos.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
