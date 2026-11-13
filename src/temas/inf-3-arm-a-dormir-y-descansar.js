// Infantil 3 años · Crecimiento en armonía: A dormir y descansar. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", S = "var(--sun)", W = "var(--water)";

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "A dormir y descansar",
  minutos: 10,
  objetivos: ["Saber que de noche dormimos y de día jugamos", "Seguir los pasos tranquilos antes de dormir", "Descansar cuando el cuerpo está cansado"],
  claves: ["noche", "dormir", "pijama", "cuento", "siesta", "descansar"],
  pregunta: {
    texto: "¿Qué haces antes de meterte en la cama?",
    respuesta: "Me baño, me pongo el <mark>pijama</mark>, me lavo los dientes y escucho un cuento. ¡A dormir!",
  },
  bloques: [
    {
      html: `<h3>Llega la noche</h3><p>Cuando llega la <mark>noche</mark>, el sol se va y sale la luna.</p><p>Estoy cansado y tengo sueño. Es la hora de ir a la cama a dormir.</p><p>¡Mañana será otro día para jugar!</p>`,
      svg: dibujos("De día sale el sol; de noche, la luna, y vamos a la cama", [["sol", "día", S], ["luna", "noche", A], ["cama", "a dormir", W]], { titulo: "Día y noche" }),
    },
    {
      html: `<h3>Antes de dormir</h3><p>Antes de dormir hay unos <mark>pasos tranquilos</mark>.</p><p>Me baño y me pongo el pijama. Ceno algo ligero y me lavo los dientes. En la cama, escucho un cuento.</p><p>¡Siempre en el mismo orden!</p>`,
      svg: dibujos("Antes de dormir: baño, pijama, dientes y cuento", [["banera", "baño", W], ["pijama", "pijama", A], ["cepillo", "dientes", V], ["libro", "cuento", R]], { titulo: "Paso a paso" }),
    },
    {
      html: `<h3>Un cuento y una nana</h3><p>En la cama, un adulto me lee un <mark>cuento</mark> o me canta una nana.</p><p>Su voz suave me ayuda a cerrar los ojos. Apagamos la luz y hay silencio.</p><p>¡Shhh! Buenas noches.</p>`,
      svg: dibujos("Un cuento, el bebé dormido y una estrella para la nana", [["libro", "cuento", A], ["dormido", "shhh…", N], ["estrella", "nana", S]], { titulo: "Buenas noches" }),
      video: vid("VrtMiYI5dFY", "Canción de cuna para dormir", "Bichikids", 24665224),
    },
    {
      html: `<h3>Descansar de día</h3><p>De día también <mark>descanso</mark>. Después de comer, a veces duermo la siesta.</p><p>Si estoy muy cansado de correr, me siento un ratito y bebo agua.</p><p>¡Descansar también es importante!</p>`,
      svg: dibujos("De día descanso: la siesta y un vaso de agua", [["sol", "de día", S], ["cama", "siesta", W], ["agua", "bebo agua", A]], { titulo: "Un ratito de descanso" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Mientras duermo, mi cuerpo <mark>crece</mark> y descansa.</p><p>Al día siguiente me levanto con fuerza, alegre y con ganas de jugar.</p><p>Si duermo poco, estoy cansado y me enfado más.</p>`,
      svg: lista("Dormir me ayuda a crecer, a descansar y a levantarme alegre", [["Crezco", V], ["Descanso", W], ["Me levanto alegre", S]], { titulo: "Dormir me ayuda a…" }),
    },
    {
      html: `<h3>Jugamos: el osito dormilón</h3><p>Acuesta a tu peluche. Ponle una manta, cántale una nana y apaga la luz.</p><p>Ahora tú: cierra los ojos, respira despacio y quédate muy quieto, como un <mark>osito dormido</mark>.</p>`,
      svg: escena("Un osito dormido en su cama, con la luna", `${ic("cama", 130, 120, 3)}${ic("oso", 104, 92, 0.9)}${ic("luna", 214, 54, 1.1)}${t(160, 72, "Z z z", 24, A, 80)}`, "El osito dormilón"),
    },
  ],
  figura: {
    titulo: "A dormir y descansar",
    svg: mural("Dormir y descansar: de noche a la cama, pijama y dientes, un cuento, y siesta de día", [["luna", "noche", "hora de dormir", A], ["pijama", "pijama", "y dientes limpios", W], ["libro", "cuento", "voz suave, luz apagada", R], ["cama", "siesta", "descanso de día", V]], "A dormir y descansar"),
  },
  video: { ...vid("VGSyNnsSLSs", "Buenas noches, dulces sueños", "Bebefinn en español", 19532900), busqueda: "hora de dormir canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Ordenamos la noche.",
      pasos: ["Primero, el baño.", "Después, pijama y dientes.", "Al final, cuento y luz apagada."],
      resultado: "¡a dormir!" },
    { enunciado: "He corrido mucho y estoy cansado.",
      pasos: ["Me siento en un sitio tranquilo.", "Bebo agua y respiro despacio."],
      resultado: "descanso un poco y después sigo jugando." },
  ],
  errores: [
    "Usar pantallas justo antes de dormir: la luz y el ruido quitan el sueño.",
    "Cambiar cada noche la rutina: el mismo orden le da seguridad y le ayuda a dormir.",
    "Acostarle muy tarde: a los 3 años se necesitan unas 10 a 13 horas de sueño contando la siesta.",
  ],
  ejercicios: [
    { q: "Ordena con dibujos: baño, pijama, dientes y cuento.", sol: "Para la familia: haced cuatro tarjetas y colgadlas en su cuarto." },
    { q: "Acuesta a tu peluche y cántale una nana.", sol: "Para la familia: el juego simbólico le ayuda a aceptar la hora de dormir." },
    { q: "¿Es de día o de noche? Mira por la ventana.", sol: "Para la familia: buscad el sol o la luna juntos." },
    { q: "Juega a las estatuas dormidas: cuando para la música, ¡a dormir quietos!", sol: "Para la familia: enseña a pasar del movimiento a la calma." },
    { q: "Elige tú el cuento de esta noche.", sol: "Para la familia: dejar elegir el cuento hace que la rutina le guste." },
    { q: "Respira como un osito: tomo aire… y lo suelto despacio.", sol: "Para la familia: tres respiraciones lentas antes de apagar la luz." },
  ],
  quiz: [
    { q: "¿Cuándo dormimos?", o: ["de noche", "en el recreo", "en la comida"], a: 0, e: "De noche." },
    { q: "Para dormir me pongo…", o: ["el pijama", "el abrigo", "las botas"], a: 0, e: "El pijama." },
    { q: "Antes de dormir me lavo…", o: ["los dientes", "el coche", "los zapatos"], a: 0, e: "Los dientes." },
    { q: "En la cama escucho…", o: ["un cuento", "la tele alta", "un tambor"], a: 0, e: "Un cuento." },
    { q: "La siesta es dormir…", o: ["de día", "en la bañera", "nunca"], a: 0, e: "De día, después de comer." },
    { q: "Si duermo bien, me levanto…", o: ["alegre", "enfadado", "cansado"], a: 0, e: "Alegre y con fuerza." },
  ],
  examen: [
    { q: "De noche en el cielo vemos…", o: ["la luna", "el arcoíris", "el sol"], a: 0, e: "La luna." },
    { q: "Una canción para dormir es…", o: ["una nana", "una sirena", "un grito"], a: 0, e: "Una nana." },
    { q: "Mientras duermo, mi cuerpo…", o: ["crece", "corre", "come"], a: 0, e: "Crece y descansa." },
  ],
  feynman: ["Por qué dormimos", "Los pasos antes de dormir", "Cuándo descanso de día"],
  mapa: mapa("A DORMIR", "var(--inf)", [
    ["Noche", "sale la luna", A],
    ["Pijama", "baño y dientes", W],
    ["Cuento", "voz suave, luz apagada", R],
    ["Siesta", "descanso de día", V],
  ], 220),
  tarjetas: [
    ["¿Cuándo dormimos?", "De noche"],
    ["¿Qué me pongo para dormir?", "El pijama"],
    ["¿Qué hago antes de dormir?", "Baño, dientes y cuento"],
    ["¿Qué es una nana?", "Una canción para dormir"],
    ["¿Qué es la siesta?", "Dormir un rato de día"],
    ["¿Qué hace mi cuerpo al dormir?", "Crece y descansa"],
  ],
  familias: [
    "Mantened la misma hora y el mismo orden cada noche, también el fin de semana.",
    "Apagad pantallas al menos una hora antes de dormir.",
    "Haced un tablero con dibujos de la rutina de la noche.",
    "Terminad el día hablando de algo bonito que ha pasado.",
  ],
  profesores: PROF("Hábitos de vida saludable: descanso y sueño, alternancia entre actividad y reposo, rutinas que dan seguridad", [
    "Momento de relajación después del recreo con música suave y luz baja.",
    "Secuencia ilustrada de la rutina de la noche para ordenar en asamblea.",
    "Juego de las estatuas dormidas para pasar del movimiento a la calma.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
