// Infantil 3 años · Crecimiento en armonía: Mis amigos del cole. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, charla, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

// Corro: seis niños en círculo dados de la mano.
const corro = (() => {
  const pts = [...Array(6)].map((_, i) => { const a = (i / 6) * 2 * Math.PI - Math.PI / 2; return [130 + Math.cos(a) * 70, 104 + Math.sin(a) * 52]; });
  return `<ellipse cx="130" cy="104" rx="70" ry="52" fill="none" stroke="var(--inf)" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/>${pts.map(([x, y], i) => ic(i % 2 ? "nina" : "nino", x.toFixed(1), y.toFixed(1), 0.95)).join("")}`;
})();

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "Mis amigos del cole",
  minutos: 10,
  objetivos: ["Saludar y presentarme para hacer amigos", "Compartir y esperar el turno", "Usar las palabras mágicas: por favor, gracias y perdón"],
  claves: ["amigos", "cole", "compartir", "turno", "por favor", "gracias"],
  pregunta: {
    texto: "¿Cómo se llama un amigo o una amiga del cole? ¿A qué jugáis?",
    respuesta: "Los <mark>amigos</mark> son niños con los que juego y me lo paso bien. En el cole hacemos muchos amigos.",
  },
  bloques: [
    {
      html: `<h3>Mi cole</h3><p>En el <mark>cole</mark> tengo una maestra o un maestro y muchos compañeros.</p><p>Jugamos, cantamos, pintamos y aprendemos juntos. Cada mañana decimos: «¡Buenos días!».</p><p>¡Qué bien lo pasamos en clase con los amigos!</p>`,
      svg: dibujos("Mi cole y mis compañeros: un amigo y una amiga", [["escuela", "mi cole", R], ["nino", "amigo", A], ["nina", "amiga", V]], { titulo: "Mi cole" }),
    },
    {
      html: `<h3>Hacer amigos</h3><p>Para hacer un amigo, me acerco y le digo: «<mark>Hola</mark>, ¿cómo te llamas? ¿Jugamos?».</p><p>Sonrío y le dejo mis juguetes. Si dice que sí, ¡a jugar! Así empieza una amistad.</p>`,
      svg: charla("Un niño dice: hola, ¿jugamos?; una niña responde: ¡sí! Me llamo Ana", [["nino", "¡Hola! ¿Jugamos?", A], ["nina", "¡Sí! Me llamo Ana", R]]),
      video: vid("zfHqg0bLeLA", "Canción de los amigos", "Bichikids, El Reino Infantil", 11486418),
    },
    {
      html: `<h3>Compartir y esperar</h3><p>Con los amigos <mark>compartimos</mark> los juguetes.</p><p>Si los dos queremos el tobogán, esperamos el turno: primero tú y después yo.</p><p>Así todos juegan y nadie se enfada. ¡Esperar también es jugar!</p>`,
      svg: dibujos("Esperamos el turno en el tobogán: primero tú, después yo", [["tobogan", "tobogán", N], ["nino", "primero tú", A], ["nina", "después yo", R]], { titulo: "Por turnos" }),
    },
    {
      html: `<h3>Las palabras mágicas</h3><p>Hay palabras que hacen <mark>felices</mark> a los demás.</p><p>«Por favor», cuando pido algo. «Gracias», cuando me dan algo. «Perdón», si hago daño sin querer.</p><p>¿Las dices tú? ¡Son mágicas!</p>`,
      svg: lista("Las palabras mágicas: por favor, gracias y perdón", [["Por favor", A], ["Gracias", V], ["Perdón", R]], { titulo: "Palabras mágicas" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Con los amigos <mark>juego más</mark> y me divierto más.</p><p>Aprendo a compartir, a esperar y a ayudar. Si un amigo se cae, le ayudo a levantarse.</p><p>¡Los amigos se cuidan y se quieren mucho!</p>`,
      svg: dibujos("Con los amigos jugamos, nos ayudamos y nos cuidamos", [["pelota", "jugar", A], ["mano", "ayudar", N], ["corazon", "cuidar", R]], { titulo: "Los amigos…" }),
    },
    {
      html: `<h3>Jugamos al corro</h3><p>Nos damos la mano y hacemos un <mark>corro</mark> grande.</p><p>Damos vueltas cantando y, cuando para la música, nos sentamos.</p><p>Luego cada uno dice su nombre. ¡Así nos conocemos todos!</p>`,
      svg: escena("Seis niños y niñas en corro, dados de la mano", corro, ""),
    },
  ],
  figura: {
    titulo: "Mis amigos del cole",
    svg: mural("Con los amigos: saludo, comparto por turnos, uso las palabras mágicas y nos cuidamos", [["bocadillo", "saludo", "¡hola! ¿jugamos?", A], ["tobogan", "turnos", "primero tú, después yo", N], ["libro", "por favor", "gracias y perdón", V], ["corazon", "nos cuidamos", "si te caes, te ayudo", R]], "Mis amigos del cole"),
  },
  video: { ...vid("iPHcm6gZ1X4", "De esta forma hacemos amigos", "Super Simple Español", 6636479), busqueda: "amigos canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Quiero el cubo que tiene Hugo.",
      pasos: ["No se lo quito.", "Le digo: «¿Me dejas el cubo, por favor?».", "Si dice «ahora no», espero mi turno."],
      resultado: "Hugo me lo deja después. ¡Gracias!" },
    { enunciado: "Sin querer, piso a Lucía.",
      pasos: ["Miro si está bien.", "Le digo: «Perdón, ¿te he hecho daño?»."],
      resultado: "Lucía sonríe y seguimos jugando." },
  ],
  errores: [
    "Obligar a prestar un juguete al instante: mejor enseñar a esperar el turno con un tiempo corto.",
    "Forzar a pedir perdón sin entender: primero mirar cómo está el otro.",
    "Preocuparse si a los 3 años juega solo al lado de otros: es normal y la amistad llega poco a poco.",
  ],
  ejercicios: [
    { q: "Di el nombre de tres niños de tu clase.", sol: "Para la familia: preguntad cada día con quién ha jugado." },
    { q: "Juega con un adulto a «primero tú, después yo» con un coche.", sol: "Para la familia: usad un reloj de arena o contad hasta diez para los turnos." },
    { q: "Pide algo de la mesa diciendo «por favor».", sol: "Para la familia: dad ejemplo usando vosotros las palabras mágicas." },
    { q: "Haz un dibujo para regalar a un amigo.", sol: "Para la familia: ayudadle a escribir su nombre y que lo entregue él." },
    { q: "Canta y baila «el corro de la patata» con la familia.", sol: "Para la familia: los juegos de corro enseñan a esperar y a seguir normas." },
    { q: "Practica con un peluche: «Hola, me llamo… ¿Jugamos?».", sol: "Para la familia: ensayar en casa da seguridad para hacerlo en el parque." },
  ],
  quiz: [
    { q: "Para hacer un amigo le digo…", o: ["¡Hola! ¿Jugamos?", "¡Vete!", "nada"], a: 0, e: "Saludo y le invito a jugar." },
    { q: "Si los dos queremos el tobogán…", o: ["empujo", "esperamos el turno", "lloro"], a: 1, e: "Esperamos el turno." },
    { q: "Cuando me dan algo digo…", o: ["gracias", "dame más", "no"], a: 0, e: "Gracias." },
    { q: "Si hago daño sin querer digo…", o: ["perdón", "bien hecho", "adiós"], a: 0, e: "Perdón." },
    { q: "Si un amigo se cae…", o: ["me río", "le ayudo", "me voy"], a: 1, e: "Le ayudo a levantarse." },
    { q: "Para pedir algo digo…", o: ["por favor", "ya", "rápido"], a: 0, e: "Por favor." },
  ],
  examen: [
    { q: "Con los amigos los juguetes se…", o: ["comparten", "esconden", "rompen"], a: 0, e: "Se comparten." },
    { q: "«Primero tú y después yo» es…", o: ["esperar el turno", "pelear", "gritar"], a: 0, e: "Esperar el turno." },
    { q: "Las palabras mágicas son…", o: ["por favor, gracias y perdón", "sí y no", "hola y adiós"], a: 0, e: "Por favor, gracias y perdón." },
  ],
  feynman: ["Cómo hago un amigo", "Qué es esperar el turno", "Las palabras mágicas"],
  mapa: mapa("MIS AMIGOS", "var(--inf)", [
    ["Saludo", "¡hola! ¿jugamos?", A],
    ["Turnos", "primero tú, después yo", N],
    ["Palabras mágicas", "por favor, gracias, perdón", V],
    ["Nos cuidamos", "si te caes, te ayudo", R],
  ], 230),
  tarjetas: [
    ["¿Qué digo para hacer un amigo?", "¡Hola! ¿Jugamos?"],
    ["¿Qué es esperar el turno?", "Primero tú, después yo"],
    ["¿Qué digo al pedir algo?", "Por favor"],
    ["¿Qué digo si me dan algo?", "Gracias"],
    ["¿Qué digo si hago daño sin querer?", "Perdón"],
    ["¿Qué hago si un amigo se cae?", "Le ayudo"],
  ],
  familias: [
    "Preguntad cada día: «¿con quién has jugado hoy?, ¿a qué?».",
    "Invitad a un compañero a jugar al parque o a casa para reforzar la amistad.",
    "Usad juegos de mesa sencillos para practicar los turnos y saber perder.",
    "Sed modelo: saludad, dad las gracias y pedid perdón delante de él.",
  ],
  profesores: PROF("Interacción socioemocional en el entorno: relaciones con los iguales, normas de convivencia, respeto de turnos, fórmulas de cortesía y ayuda mutua", [
    "Asamblea de buenos días con una canción de saludo y el nombre de cada niño.",
    "Juegos de corro y de turnos con reloj de arena.",
    "Mural de «las palabras mágicas» con pictogramas y la foto de quien las usa.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
