// Infantil 4 años · Crecimiento en armonía: hábitos de higiene.
const { marco, dibujos, lista, parejas, ic, nino, t, tick, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Hábitos de higiene",
  minutos: 15,
  objetivos: ["Lavarse las manos en los momentos clave", "Cepillarse los dientes con ayuda", "Conocer los útiles de aseo"],
  claves: ["jabón", "agua", "cepillo", "toalla"],
  pregunta: {
    texto: "Has jugado en el arenero y vas a comer. ¿Qué haces primero?",
    respuesta: "Primero me <mark>lavo las manos con agua y jabón</mark>. Así quito la suciedad y los bichitos que no se ven.",
  },
  bloques: [
    {
      html: `<h3>Limpio y sano</h3><p>La higiene es <mark>estar limpios</mark>. Cuando estamos limpios, nos sentimos bien y nos ponemos menos malitos.</p><p>Hay pequeños bichitos, los <b>gérmenes</b>, que no se ven. El agua y el jabón los quitan. ¡Vamos a aprender a cuidarnos!</p>`,
      svg: dibujos("Jabón, agua, cepillo y toalla", [["jabon", "jabón", "var(--red)"], ["gota", "agua", "var(--water)"], ["cepillo", "cepillo", "var(--pen)"], ["toalla", "toalla", "var(--leaf)"]], { titulo: "Mis útiles de aseo" }),
    },
    {
      html: `<h3>Las manos</h3><p>Me lavo las manos <mark>antes de comer</mark>, después de ir al baño y al volver del parque.</p><p>Mojo, pongo jabón, froto las palmas, los dedos y las uñas, aclaro y seco con la toalla. Cuento hasta veinte mientras froto.</p>`,
      svg: lista("Pasos para lavarse las manos: mojar, jabón, frotar, aclarar y secar", [["Mojo y pongo jabón", "var(--water)"], ["Froto, froto, froto", "var(--red)"], ["Aclaro con agua", "var(--pen)"], ["Seco con la toalla", "var(--leaf)"]], { marca: "n" }),
    },
    {
      html: `<h3>Los dientes</h3><p>Me cepillo los dientes <mark>después de comer</mark> y antes de dormir.</p><p>Arriba, abajo, delante y detrás. Con un poquito de pasta. Un adulto me ayuda a repasar.</p>`,
      svg: marco("Un niño sonriente con su cepillo de dientes y la palabra arriba y abajo", `${ic("feliz", 80, 84, 2.6)}${ic("cepillo", 180, 70, 2)}${t(180, 140, "arriba y abajo", { color: "var(--pen)", size: 18, max: 130 })}`),
    },
    {
      html: `<h3>El baño y el pelo</h3><p>Me baño o me ducho para limpiar <mark>todo el cuerpo</mark>.</p><p>Después me seco bien con la toalla y me peino. También nos cortamos las uñas cuando crecen. Así huelo bien y me siento a gusto.</p>`,
      svg: dibujos("Ducha, toalla y peine", [["ducha", "ducha", "var(--water)"], ["toalla", "secar", "var(--leaf)"], ["peine", "peinar", "var(--inf)"]]),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Lavarnos nos ayuda a <mark>no ponernos enfermos</mark> y a no pasar gérmenes a los demás.</p><p>Al toser o estornudar, me tapo con el codo. Así cuido de mis amigos. Y después, me lavo las manos.</p>`,
      svg: marco("Un niño tose tapándose con el codo, con un visto bueno", `${nino(100, 165, { s: 1.6, pose: "reza", c: "var(--pen)" })}${t(100, 40, "¡achís!", { color: "var(--muted)", size: 18 })}${tick(190, 80)}${t(190, 130, "con el codo", { color: "var(--ok)", size: 17, max: 120 })}`),
    },
    {
      html: `<h3>Juego: ¿limpio o sucio?</h3><p>Mira estas cosas. ¿Para qué parte del cuerpo es cada una?</p><p>El <mark>cepillo</mark>, para los dientes. El <mark>peine</mark>, para el pelo. El <mark>jabón</mark>, para las manos. ¡Muy bien! Ahora busca tu cepillo y tu toalla en casa.</p>`,
      svg: parejas("El cepillo para los dientes, el peine para el pelo y el jabón para las manos", [["cepillo", "cepillo", "boca", "dientes"], ["peine", "peine", "nino", "pelo"], ["jabon", "jabón", "mano", "manos"]], { color: "var(--pen)", color2: "var(--leaf)" }),
    },
  ],
  figura: figura("Mi rutina de aseo", "Jabón para las manos, cepillo para los dientes, ducha y peine", [["jabon", "manos", "var(--red)"], ["cepillo", "dientes", "var(--pen)"], ["ducha", "ducha", "var(--water)"], ["peine", "pelo", "var(--inf)"]]),
  video: vid("OOfJItOYIrw", "Lávate las manos (agua y jabón)", "Luli Pampín", 403425406, "lavarse las manos canción niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Nos lavamos las manos cantando.", pasos: ["Mojamos las manos y ponemos jabón.", "Frotamos mientras cantamos «Cumpleaños feliz» dos veces.", "Aclaramos y secamos."], resultado: "unas manos bien limpias en el tiempo de una canción." },
    { enunciado: "Preparamos la mochila del baño.", pasos: ["Cogemos la toalla.", "Buscamos el jabón y el champú.", "Ponemos el peine y el cepillo de dientes."], resultado: "todo listo para el aseo." },
  ],
  errores: [
    "Lavarse solo con agua: sin jabón, los gérmenes se quedan.",
    "Frotar muy poco: hay que frotar palmas, dedos y uñas un buen rato.",
    "Toser hacia los demás: hay que taparse con el codo.",
  ],
  ejercicios: [
    { q: "Lávate las manos solo y enséñale a un adulto cómo lo haces.", sol: "Nota para la familia: comprobad que frota entre los dedos." },
    { q: "Cepíllate los dientes contando hasta 20 arriba y hasta 20 abajo.", sol: "Repasad vosotros al final." },
    { q: "Señala para qué sirve el jabón, el peine y la toalla.", sol: "Lavar, peinar y secar." },
    { q: "Dibuja tu cepillo de dientes.", sol: "Preguntadle de qué color es el suyo." },
    { q: "Haz como que estornudas y tápate con el codo.", sol: "Repetidlo como juego hasta que salga solo." },
    { q: "Di tres momentos en los que hay que lavarse las manos.", sol: "Antes de comer, después del baño y al volver del parque." },
  ],
  quiz: [
    { q: "¿Con qué me lavo las manos?", o: ["Con arena", "Con agua y jabón", "Con pintura"], a: 1, e: "El agua y el jabón quitan los gérmenes." },
    { q: "¿Cuándo me cepillo los dientes?", o: ["Nunca", "Solo en verano", "Después de comer"], a: 2, e: "Después de comer y antes de dormir." },
    { q: "Para secarme uso…", o: ["la toalla", "el peine", "el cepillo"], a: 0, e: "La toalla seca el cuerpo." },
    { q: "Al estornudar me tapo con…", o: ["nada", "la mano de un amigo", "el codo"], a: 2, e: "El codo frena los gérmenes." },
    { q: "El peine sirve para…", o: ["el pelo", "los dientes", "los pies"], a: 0, e: "Con el peine me peino." },
    { q: "Antes de comer, ¿qué hago?", o: ["Me pongo el pijama", "Me lavo las manos", "Salto"], a: 1, e: "Las manos limpias antes de comer." },
  ],
  examen: [
    { q: "Los gérmenes…", o: ["son grandes", "no se ven", "son de colores"], a: 1, e: "Son tan pequeños que no se ven." },
    { q: "¿Qué uso para los dientes?", o: ["El cepillo", "La toalla", "El jabón de manos"], a: 0, e: "Cepillo y un poquito de pasta." },
    { q: "Estar limpios nos ayuda a…", o: ["crecer más rápido", "no dormir", "no ponernos malitos"], a: 2, e: "La higiene cuida la salud." },
  ],
  feynman: ["Cuándo me lavo las manos", "Cómo me cepillo los dientes", "Por qué hay que estar limpios"],
  mapa: mapa("ME CUIDO", "var(--inf)", [
    ["Manos", "agua y jabón", "var(--red)"],
    ["Dientes", "cepillo y pasta", "var(--pen)"],
    ["Cuerpo", "ducha o baño", "var(--water)"],
    ["Al toser", "tapo con el codo", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Con qué me lavo las manos?", "Agua y jabón"],
    ["¿Cuándo me lavo las manos?", "Antes de comer"],
    ["¿Con qué me cepillo los dientes?", "Con el cepillo"],
    ["¿Para qué es la toalla?", "Para secarme"],
    ["¿Con qué me tapo al toser?", "Con el codo"],
    ["¿Qué quita el jabón?", "Los gérmenes"],
  ],
  familias: [
    "Poned un taburete en el lavabo para que llegue solo al grifo.",
    "Usad un reloj de arena o una canción para cepillarse dos minutos.",
    "Dejad que elija su toalla y su cepillo: lo cuidará más.",
    "Haced un cartel con dibujos de los pasos del lavado de manos.",
  ],
  profesores: PROF("Crecimiento en armonía: hábitos de higiene, cuidado personal y autonomía progresiva en la vida cotidiana", ["Secuencia ilustrada del lavado de manos junto al lavabo.", "Purpurina como «gérmenes» para ver cómo se van con jabón.", "Rutina de cepillado tras el almuerzo."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
