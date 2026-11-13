// Infantil 3 años · Crecimiento en armonía: Así me siento: alegre, triste, enfadado. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", S = "var(--sun)", W = "var(--water)";

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "3-anos",
  titulo: "Así me siento: alegre, triste, enfadado",
  minutos: 10,
  objetivos: ["Reconocer la alegría, la tristeza y el enfado en una cara", "Decir con palabras cómo me siento", "Aprender a calmarme respirando despacio"],
  claves: ["emociones", "alegre", "triste", "enfadado", "calma"],
  pregunta: {
    texto: "Mira la cara de un amigo. ¿Cómo sabes si está contento o triste?",
    respuesta: "Por su <mark>cara</mark>: si sonríe, está alegre; si llora o mira hacia abajo, está triste; si frunce las cejas, está enfadado.",
  },
  bloques: [
    {
      html: `<h3>Tengo emociones</h3><p>Por dentro siento cosas: son las <mark>emociones</mark>.</p><p>A veces estoy <b>alegre</b>, a veces <b>triste</b> y a veces <b>enfadado</b>.</p><p>Todas las emociones están bien. Todos las sentimos, también los mayores. ¿Cómo te sientes hoy?</p>`,
      svg: dibujos("Tres caras: alegre, triste y enfadado", [["feliz", "alegre", S], ["triste", "triste", W], ["enfadado", "enfadado", R]], { titulo: "¿Cómo me siento?" }),
    },
    {
      html: `<h3>Alegre</h3><p>Estoy <mark>alegre</mark> cuando juego con mis amigos, cuando me abrazan o en mi cumpleaños.</p><p>Cuando estoy alegre, sonrío, me río y tengo ganas de saltar y bailar.</p><p>¿Qué te pone alegre a ti?</p>`,
      svg: dibujos("Estoy alegre: sonrío, hay una fiesta con globos y juego", [["feliz", "sonrío", S], ["globo", "fiesta", R], ["pelota", "juego", A]], { titulo: "Estoy alegre" }),
      video: vid("lU8zZjBV53M", "Si estás feliz", "Super Simple Español", 60000050),
    },
    {
      html: `<h3>Triste</h3><p>Estoy <mark>triste</mark> si se rompe mi juguete o si echo de menos a alguien.</p><p>A veces lloro y no tengo ganas de jugar. Llorar está bien.</p><p>Un abrazo me ayuda a sentirme mejor.</p>`,
      svg: dibujos("Estoy triste y lloro; un abrazo me ayuda", [["triste", "lloro", W], ["corazon", "un abrazo", R]], { titulo: "Estoy triste" }),
    },
    {
      html: `<h3>Enfadado</h3><p>Me <mark>enfado</mark> cuando algo no sale como quiero o si alguien me quita un juguete.</p><p>Siento calor y ganas de gritar. Pero no pego ni rompo cosas.</p><p>Lo digo: «¡Estoy enfadado!».</p>`,
      svg: dibujos("Estoy enfadado y lo digo con palabras", [["enfadado", "me enfado", R], ["bocadillo", "lo digo", A]], { titulo: "Estoy enfadado" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber cómo me siento me ayuda a <mark>pedir lo que necesito</mark>.</p><p>Si estoy triste, pido un abrazo. Si estoy enfadado, respiro despacio.</p><p>Y si veo a un amigo triste, puedo consolarlo.</p>`,
      svg: lista("Si estoy triste pido un abrazo, si estoy enfadado respiro y si estoy alegre lo comparto", [["Triste: un abrazo", W], ["Enfadado: respiro", R], ["Alegre: lo comparto", S]], { titulo: "¿Qué hago?" }),
    },
    {
      html: `<h3>Jugamos: el globo</h3><p>Así me calmo. Tomo aire por la nariz, despacio: mi barriga se hincha como un <mark>globo</mark>.</p><p>Luego suelto el aire por la boca, muy despacito. ¡Fuuu! Lo hacemos otra vez, tres veces.</p>`,
      svg: escena("Un globo que se hincha al tomar aire y se deshincha al soltarlo", `${ic("globo", 46, 104, 1)}${ic("globo", 130, 98, 1.6)}${ic("globo", 214, 104, 1)}
        <text x="78" y="104" font-size="22" font-weight="800" fill="var(--muted)">→</text><text x="164" y="104" font-size="22" font-weight="800" fill="var(--muted)">→</text>
        ${t(46, 150, "tomo aire", 17, A, 80)}${t(130, 150, "¡grande!", 17, R, 80)}${t(214, 150, "lo suelto", 17, V, 80)}`, "Respiro como un globo"),
    },
  ],
  figura: {
    titulo: "Así me siento",
    svg: mural("Tres emociones y la calma: alegre sonrío, triste lloro, enfadado lo digo, y respiro para calmarme", [["feliz", "alegre", "sonrío y río", S], ["triste", "triste", "lloro y pido un abrazo", W], ["enfadado", "enfadado", "lo digo sin pegar", R], ["globo", "calma", "respiro despacio", V]], "Así me siento"),
  },
  video: { ...vid("RGqSPLSOFwU", "Mis emociones: canción infantil", "Pinkfong en español", 26437332), busqueda: "emociones para niños infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "A Leo se le cae el helado al suelo. ¿Cómo se siente?",
      pasos: ["Miramos su cara: llora y mira el helado.", "Pensamos qué ha pasado: ha perdido algo que le gustaba."],
      resultado: "Leo está triste. Le damos un abrazo." },
    { enunciado: "Le quitan la pelota a Sara y grita. ¿Qué puede hacer?",
      pasos: ["Sara está enfadada.", "Respira como un globo.", "Dice: «Estoy enfadada, devuélveme la pelota»."],
      resultado: "habla en vez de pegar." },
  ],
  errores: [
    "Decir «no llores» o «no pasa nada»: mejor nombrar la emoción, «estás triste porque…».",
    "Castigar la emoción en vez de la conducta: enfadarse está bien; pegar, no.",
    "Intentar razonar en plena rabieta: primero calma y cercanía, después palabras.",
  ],
  ejercicios: [
    { q: "Pon cara de alegre delante del espejo. Ahora de triste. Ahora de enfadado.", sol: "Para la familia: haced las caras juntos y nombrad cada emoción." },
    { q: "Dibuja una cara alegre en un plato de papel y una triste por detrás.", sol: "Para la familia: usadlo para que señale cómo se siente cada día." },
    { q: "Escucha: «¡Es mi cumpleaños!». ¿Cómo me siento?", sol: "Para la familia: alegre. Inventad más situaciones sencillas." },
    { q: "Haz la respiración del globo tres veces.", sol: "Para la familia: practicadla cuando está tranquilo; así le saldrá cuando se enfade." },
    { q: "Busca en un cuento a alguien triste y a alguien alegre.", sol: "Para la familia: preguntad «¿por qué crees que está así?»." },
    { q: "Cuenta algo que hoy te ha puesto alegre.", sol: "Para la familia: compartid también lo vuestro; es un buen ritual antes de dormir." },
  ],
  quiz: [
    { q: "Si sonrío y río, estoy…", o: ["alegre", "triste", "enfadado"], a: 0, e: "Alegre." },
    { q: "Si lloro porque se ha roto mi juguete, estoy…", o: ["alegre", "triste", "dormido"], a: 1, e: "Triste." },
    { q: "Si estoy enfadado, puedo…", o: ["pegar", "respirar despacio", "romper cosas"], a: 1, e: "Respirar y decirlo." },
    { q: "Si un amigo está triste, le doy…", o: ["un empujón", "un abrazo", "la espalda"], a: 1, e: "Un abrazo le consuela." },
    { q: "¿Las emociones están bien?", o: ["sí, todas", "solo la alegría", "no"], a: 0, e: "Todas están bien." },
    { q: "En mi cumpleaños me siento…", o: ["alegre", "enfadado", "triste"], a: 0, e: "¡Alegre!" },
  ],
  examen: [
    { q: "¿Qué cara tiene un niño enfadado?", o: ["cejas fruncidas", "una gran sonrisa", "ojos cerrados dormido"], a: 0, e: "Frunce las cejas." },
    { q: "Para calmarme respiro como…", o: ["un globo", "un tren", "un león"], a: 0, e: "Despacio, como un globo." },
    { q: "Si estoy triste, puedo pedir…", o: ["un abrazo", "un grito", "un castigo"], a: 0, e: "Un abrazo." },
  ],
  feynman: ["Cómo se ve la alegría, la tristeza y el enfado", "Qué hago cuando me enfado", "Cómo ayudo a un amigo triste"],
  mapa: mapa("ASÍ ME SIENTO", "var(--inf)", [
    ["Alegre", "sonrío y río", S],
    ["Triste", "lloro, pido un abrazo", W],
    ["Enfadado", "lo digo sin pegar", R],
    ["Calma", "respiro como un globo", V],
  ], 220),
  tarjetas: [
    ["Sonrío y salto", "Estoy alegre"],
    ["Lloro y no quiero jugar", "Estoy triste"],
    ["Frunzo las cejas", "Estoy enfadado"],
    ["¿Qué hago si estoy enfadado?", "Respiro y lo digo"],
    ["¿Qué ayuda si estoy triste?", "Un abrazo"],
    ["¿Están bien todas las emociones?", "Sí"],
  ],
  familias: [
    "Poned nombre a lo que siente: «Estás enfadado porque querías seguir jugando».",
    "Hablad también de vuestras emociones: «Hoy estoy un poco cansada y triste».",
    "Practicad la respiración del globo en momentos tranquilos, como un juego.",
    "Leed cuentos de emociones y preguntad cómo se siente cada personaje.",
  ],
  profesores: PROF("Desarrollo y equilibrio afectivos: identificación y expresión de emociones básicas, estrategias de autorregulación y empatía", [
    "Termómetro o semáforo de emociones en la asamblea: cada niño coloca su foto en una cara.",
    "Rincón de la calma con cojines, un peluche y tarjetas de respiración.",
    "Lectura de cuentos de emociones y juego de imitar caras con espejos.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
