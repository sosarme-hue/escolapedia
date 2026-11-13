// Infantil 3 años · Descubrimiento y exploración del entorno: Contamos hasta 3. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, contar, PROF, FUENTES } = require("./_inf3a");
const { lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

// Mano levantando 1, 2 o 3 dedos.
const dedos = (x, y, n, c) => `<g transform="translate(${x} ${y})"><rect x="-16" y="0" width="32" height="30" rx="10" fill="#f2c79e"/>${[...Array(n)].map((_, i) => `<rect x="${-(n * 10 - 2) / 2 + i * 10}" y="-30" width="8" height="34" rx="4" fill="#f2c79e"/>`).join("")}</g>${t(x, y + 58, String(n), 26, c, 40)}`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "Contamos hasta 3",
  minutos: 10,
  objetivos: ["Contar 1, 2 y 3 señalando cada cosa", "Reconocer grupos de uno, dos y tres", "Mostrar con los dedos cuántos hay"],
  claves: ["uno", "dos", "tres", "contar", "cuántos"],
  pregunta: {
    texto: "¿Cuántos años tienes? ¡Enséñalo con los dedos!",
    respuesta: "¡<mark>Tres</mark>! Uno, dos, tres: tres dedos levantados.",
  },
  bloques: [
    {
      html: `<h3>Uno</h3><p>Aquí hay <mark>una</mark> manzana. Solo una.</p><p>Uno es el primer número. Tengo una nariz, una boca y una barriga.</p><p>Levanta un dedo y di: «¡uno!». ¿Qué más tienes que sea solo uno?</p>`,
      svg: contar("Una manzana: uno", [["manzana", 1, R]], "Uno"),
    },
    {
      html: `<h3>Dos</h3><p>Aquí hay <mark>dos</mark> pelotas: una y otra más.</p><p>Tengo dos ojos, dos orejas, dos manos y dos pies.</p><p>Levanta dos dedos y cuenta: «uno, dos». ¡Muy bien!</p>`,
      svg: contar("Dos pelotas: dos", [["pelota", 2, A]], "Dos"),
    },
    {
      html: `<h3>Tres</h3><p>Aquí hay <mark>tres</mark> patitos: uno, dos y tres.</p><p>Tres son los años que tienes ahora. ¡Y tres son las ruedas de un triciclo!</p><p>Levanta tres dedos y cuenta despacio: uno, dos, tres.</p>`,
      svg: contar("Tres patos: tres", [["pato", 3, V]], "Tres"),
      video: vid("VM1enUfi0BI", "¿Cuántos dedos?", "Super Simple Español", 14019177),
    },
    {
      html: `<h3>Contamos señalando</h3><p>Para contar bien, <mark>señalo cada cosa</mark> una sola vez y digo un número.</p><p>Uno, dos, tres. El último número que digo es cuántos hay.</p><p>¿Cuántas estrellas? ¡Tres!</p>`,
      svg: escena("Tres estrellas, cada una con su número: 1, 2 y 3", `${[56, 130, 204].map((x, i) => `${ic("estrella", x, 86, 1.8)}${t(x, 148, String(i + 1), 28, [R, A, V][i], 40)}`).join("")}`, "Uno, dos, tres"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Contar nos sirve <mark>todos los días</mark>.</p><p>Cuántos platos ponemos en la mesa, cuántas galletas hay o cuántos amigos vienen a jugar.</p><p>¡Y para empezar una carrera: un, dos, tres… ya!</p>`,
      svg: lista("Contar sirve para poner los platos, repartir galletas y empezar una carrera", [["Platos de la mesa", A], ["Galletas para todos", N], ["Un, dos, tres… ¡ya!", R]], { titulo: "Contar me sirve para…" }),
    },
    {
      html: `<h3>Jugamos con los dedos</h3><p>Un adulto dice un número y tú levantas <mark>esos dedos</mark>.</p><p>«¡Dos!»: dos dedos arriba. «¡Uno!»: un dedo. «¡Tres!»: tres dedos.</p><p>Ahora cambiamos: tú dices el número y el adulto levanta los dedos.</p>`,
      svg: escena("Tres manos que muestran uno, dos y tres dedos", `${dedos(50, 76, 1, R)}${dedos(130, 76, 2, A)}${dedos(210, 76, 3, V)}`, "¿Cuántos dedos?"),
    },
  ],
  figura: {
    titulo: "Contamos hasta 3",
    svg: mural("Uno, dos y tres: una manzana, dos pelotas y tres patos, contados señalando", [["manzana", "1", "uno", R], ["pelota", "2", "dos", A], ["pato", "3", "tres", V], ["mano", "cuento", "señalo cada uno", N]], "Contamos hasta 3"),
  },
  video: { ...vid("Y11tfT0OTDU", "Mariana cuenta 1, 2, 3", "Chiki Toonz", 27664547), busqueda: "contar hasta 3 niños canción" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántas galletas hay en el plato?",
      pasos: ["Tocamos la primera: uno.", "La segunda: dos.", "La tercera: tres."],
      resultado: "hay tres galletas." },
    { enunciado: "Ponemos platos para papá, mamá y yo.",
      pasos: ["Un plato para papá: uno.", "Otro para mamá: dos. Y el mío: tres."],
      resultado: "ponemos tres platos." },
  ],
  errores: [
    "Recitar los números sin señalar: hay que tocar cada cosa una sola vez.",
    "Contar dos veces el mismo objeto: apartad lo ya contado.",
    "Pasar a números grandes demasiado pronto: a los 3 años, con el 1, 2 y 3 bien entendidos basta.",
  ],
  ejercicios: [
    { q: "Pon tres cucharas en la mesa.", sol: "Para la familia: que las cuente tocándolas una a una." },
    { q: "Da dos saltos y tres palmadas.", sol: "Para la familia: contad en voz alta con cada movimiento." },
    { q: "¿Cuántos ojos tienes? ¿Y narices?", sol: "Para la familia: dos ojos y una nariz." },
    { q: "Muestra con los dedos cuántos años tienes.", sol: "Para la familia: tres dedos; practicadlo con calma." },
    { q: "Mete tres bolitas en un vaso, una a una.", sol: "Para la familia: decid el número con cada bolita." },
    { q: "Canta «Mariana cuenta 1, 2, 3».", sol: "Para la familia: las canciones fijan el orden de los números." },
  ],
  quiz: [
    { q: "¿Cuántas narices tienes?", o: ["una", "dos", "tres"], a: 0, e: "Una." },
    { q: "¿Cuántas manos tienes?", o: ["una", "dos", "tres"], a: 1, e: "Dos." },
    { q: "Uno, dos y…", o: ["tres", "cinco", "diez"], a: 0, e: "Tres." },
    { q: "Para contar bien, señalo cada cosa…", o: ["una vez", "dos veces", "nunca"], a: 0, e: "Una sola vez." },
    { q: "¿Cuántas ruedas tiene un triciclo?", o: ["tres", "una", "dos"], a: 0, e: "Tres." },
    { q: "¿Cuántos ojos tienes?", o: ["dos", "tres", "uno"], a: 0, e: "Dos." },
  ],
  examen: [
    { q: "Si cuento «uno, dos», ¿cuántos hay?", o: ["dos", "uno", "tres"], a: 0, e: "El último número: dos." },
    { q: "¿Qué número va después del uno?", o: ["dos", "tres", "cero"], a: 0, e: "El dos." },
    { q: "¿Cuántas bocas tienes?", o: ["una", "dos", "tres"], a: 0, e: "Una." },
  ],
  feynman: ["Los números 1, 2 y 3", "Cómo cuento señalando", "Mostrar cuántos con los dedos"],
  mapa: mapa("HASTA 3", "var(--pri)", [
    ["Uno", "una nariz", R],
    ["Dos", "dos ojos, dos manos", A],
    ["Tres", "los años que tengo", V],
    ["Cuento", "señalo cada cosa", N],
  ], 220),
  tarjetas: [
    ["¿Cuántas narices tengo?", "Una"],
    ["¿Cuántos pies tengo?", "Dos"],
    ["¿Cuántos años tengo?", "Tres"],
    ["Uno, dos…", "¡Tres!"],
    ["¿Cómo cuento bien?", "Señalo cada cosa una vez"],
    ["¿Cuántas ruedas tiene un triciclo?", "Tres"],
  ],
  familias: [
    "Contad cosas reales: escalones, galletas, cucharas, siempre señalando.",
    "Usad los dedos para mostrar cantidades del 1 al 3.",
    "Jugad a «un, dos, tres… ¡ya!» antes de una carrera.",
    "Al poner la mesa, pedid «trae dos vasos».",
  ],
  profesores: PROF("Diálogo corporal con el entorno: cuantificadores básicos y primeros números (1, 2, 3), correspondencia uno a uno y conteo con objetos manipulables", [
    "Cajas del 1, 2 y 3: los niños meten esa cantidad de piezas.",
    "Contar a los compañeros en pequeños grupos de tres.",
    "Canciones de contar con los dedos en la asamblea.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
