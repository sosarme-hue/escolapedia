// Infantil 3 años · Comunicación y representación: Sonidos de casa y de la calle. Para escuchar con un adulto. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos, mural, vid } = require("./_peque");
const { R, A, V, N, escena, suenan, PROF, FUENTES } = require("./_inf3b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "3-anos",
  titulo: "Sonidos de casa y de la calle",
  minutos: 10,
  objetivos: ["Escuchar con atención los sonidos de alrededor", "Decir qué cosa hace cada sonido", "Notar si un sonido es fuerte o suave"],
  claves: ["sonido", "oír", "fuerte", "suave", "silencio", "ring ring"],
  pregunta: {
    texto: "Cierra los ojos. ¿Qué oyes ahora mismo?",
    respuesta: "Siempre hay <mark>sonidos</mark>: una voz, un coche, el reloj… Si escuchamos con calma, los descubrimos.",
  },
  bloques: [
    {
      html: `<h3>Las orejas oyen</h3><p>Con las <mark>orejas</mark> oímos los sonidos.</p><p>Si cerramos los ojos y estamos callados, oímos mejor. ¡Shhh! ¿Qué suena? ¿Un pájaro? ¿Una puerta?</p><p>Escuchar con calma es como jugar a ser detectives de sonidos.</p>`,
      svg: escena("Un niño con los ojos cerrados escucha un pájaro", [["nino", 80, 96, 2.2], ["oido", 136, 96, 1], ["pajaro", 210, 70, 1.4], ["t", 130, 160, "¡Shhh! Escucha…", A, 22]]),
    },
    {
      html: `<h3>Sonidos de casa</h3><p>En casa hay muchos <mark>sonidos</mark>.</p><p>El timbre hace «ring ring». El grifo hace «chof, chof». El reloj hace «tic tac». ¿Y la lavadora?</p><p>¿Qué más suena en tu casa? ¿La puerta? ¿La tele?</p>`,
      svg: suenan("Sonidos de casa: el timbre ring ring, el agua chof y el reloj tic tac", [["campana", "ring", R], ["agua", "chof", A], ["reloj", "tic tac", V]], { titulo: "En casa" }),
    },
    {
      html: `<h3>Sonidos de la calle</h3><p>En la calle también hay <mark>sonidos</mark>.</p><p>El coche hace «pi pi». El tren hace «chu chu». El perro hace «guau». ¡La calle es muy ruidosa!</p><p>Cuando oímos un coche, nos paramos y damos la mano.</p>`,
      svg: suenan("Sonidos de la calle: el coche pi pi, el tren chu chu y el perro guau", [["coche", "pi pi", R], ["tren", "chu chu", A], ["perro", "guau", V]], { titulo: "En la calle" }),
    },
    {
      html: `<h3>Fuerte y suave</h3><p>Hay sonidos <mark>fuertes</mark>, como un trueno o un tambor.</p><p>Y hay sonidos <mark>suaves</mark>, como un susurro o la lluvia fina. ¿Cómo suena tu voz al dormir a un bebé?</p>`,
      svg: dibujos("Fuerte: el rayo. Suave: el bebé que duerme", [["rayo", "¡FUERTE!", R], ["bebe", "suave", A]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los sonidos nos <mark>avisan</mark>.</p><p>El timbre dice que alguien llega. La sirena dice «¡apártate!». El despertador dice «¡arriba!». Escuchar nos cuida.</p><p>Si oímos una sirena, nos apartamos y dejamos pasar.</p>`,
      svg: dibujos("Los sonidos avisan: el timbre, el coche y el despertador", [["campana", "alguien llega", R], ["coche", "¡cuidado!", A], ["reloj", "¡arriba!", V]]),
    },
    {
      html: `<h3>Jugamos a adivinar</h3><p>Cierra los ojos. El adulto hace un <mark>sonido</mark>: llama a la puerta, abre el grifo o arruga un papel.</p><p>¿Qué es? ¡Dilo en voz alta! Después te toca a ti.</p>`,
      svg: escena("Juego: con los ojos cerrados, adivina el sonido", [["nina", 70, 90, 2], ["interrogacion", 150, 70, 1.4], ["agua", 214, 100, 1.3], ["t", 130, 162, "¿Qué suena?", R, 22]]),
    },
  ],
  figura: {
    titulo: "Sonidos de casa y de la calle",
    svg: mural("Sonidos: timbre ring, reloj tic tac, coche pi pi, perro guau", [["campana", "ring ring", "el timbre", R], ["reloj", "tic tac", "el reloj", A], ["coche", "pi pi", "el coche", V], ["perro", "guau", "el perro", N]], "Sonidos de casa y de la calle"),
  },
  video: { ...vid("ZF29rHlRLZk", "Adivinamos los sonidos de los animales, la casa y la ciudad", "Eugenia Romero", 4155018), busqueda: "sonidos de la casa para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Suena «ring ring». ¿Qué es?",
      pasos: ["Escuchamos con calma.", "Pensamos qué cosas hacen ring.", "¡Es el timbre o el teléfono!"],
      resultado: "Alguien llama." },
    { enunciado: "¿El tambor suena fuerte o suave?",
      pasos: ["Damos un golpe al tambor.", "Escuchamos: ¡BUM!"],
      resultado: "Fuerte." },
  ],
  errores: [
    "Hablar mientras escuchamos: así no oímos nada.",
    "Taparse los ojos y abrirlos enseguida: hay que esperar.",
    "Pensar que todos los sonidos son iguales: unos son fuertes y otros suaves.",
  ],
  ejercicios: [
    { q: "Cierra los ojos un minuto y escucha.", sol: "Para la familia: después, que os diga tres cosas que ha oído." },
    { q: "Imita el sonido del reloj.", sol: "Tic tac, tic tac." },
    { q: "Imita el sonido del coche.", sol: "Pi pi, o brum brum." },
    { q: "Adivina sonidos con los ojos cerrados.", sol: "Llamad a la puerta, abrid el grifo, arrugad papel." },
    { q: "Da una palmada fuerte y otra suave.", sol: "Notad juntos la diferencia." },
    { q: "Escucha los sonidos de la calle en un paseo.", sol: "Pájaros, coches, campanas: nombradlos al oírlos." },
  ],
  quiz: [
    { q: "Oímos con…", o: ["las orejas", "las rodillas", "el pelo"], a: 0, e: "Con las orejas." },
    { q: "El reloj hace…", o: ["tic tac", "guau", "muuu"], a: 0, e: "Tic tac." },
    { q: "El timbre hace…", o: ["ring ring", "miau", "cua cua"], a: 0, e: "Ring ring." },
    { q: "El tren hace…", o: ["chu chu", "pío pío", "tic tac"], a: 0, e: "Chu chu." },
    { q: "Un trueno suena…", o: ["fuerte", "suave", "callado"], a: 0, e: "Muy fuerte." },
    { q: "Para oír mejor estoy…", o: ["callado", "gritando", "cantando"], a: 0, e: "Callados oímos mejor." },
  ],
  examen: [
    { q: "El perro hace…", o: ["guau", "pi pi", "ring"], a: 0, e: "Guau." },
    { q: "Al dormir al bebé hablamos…", o: ["suave", "fuerte", "gritando"], a: 0, e: "Suave." },
    { q: "Los sonidos nos…", o: ["avisan", "pintan", "visten"], a: 0, e: "Nos avisan." },
  ],
  feynman: ["Oímos con las orejas", "Cada cosa hace su sonido", "Hay sonidos fuertes y suaves"],
  mapa: mapa("SONIDOS", "var(--inf)", [
    ["En casa", "ring, tic tac", R],
    ["En la calle", "pi pi, chu chu", A],
    ["Fuerte", "trueno, tambor", V],
    ["Suave", "susurro, lluvia", N],
  ], 230),
  tarjetas: [
    ["Oímos con…", "Las orejas"],
    ["Tic tac", "El reloj"],
    ["Ring ring", "El timbre"],
    ["Pi pi", "El coche"],
    ["Un trueno suena…", "Fuerte"],
    ["Un susurro suena…", "Suave"],
  ],
  familias: [
    "En un paseo, parad un momento a escuchar en silencio.",
    "Grabad sonidos de casa con el móvil y jugad a adivinarlos.",
    "Hablad suave cuando hay que estar tranquilos y explicad por qué.",
    "Cuidad sus oídos: la tele y la música, a volumen bajo.",
  ],
  profesores: PROF("Discriminación auditiva: sonidos del entorno próximo, identificación de la fuente, contraste fuerte y suave, silencio", ["Paseo sonoro por el colegio.", "Lotería de sonidos.", "Juego del silencio con los ojos cerrados."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
