// Infantil 4 años · Crecimiento en armonía: compartir y ayudar.
const { marco, dibujos, lista, ic, nino, t, corazon, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Compartir y ayudar",
  minutos: 15,
  objetivos: ["Compartir juguetes y esperar el turno", "Ofrecer ayuda a los demás", "Usar «por favor» y «gracias»"],
  claves: ["compartir", "turno", "ayudar", "gracias"],
  pregunta: {
    texto: "Tienes tres galletas y tu amigo no tiene ninguna. ¿Qué puedes hacer?",
    respuesta: "Puedo <mark>compartir</mark>: darle una o dos. Así los dos comemos y estamos contentos.",
  },
  bloques: [
    {
      html: `<h3>Compartir</h3><p><mark>Compartir</mark> es dejar mis cosas a otros para usarlas juntos.</p><p>Si tengo muchos colores, presto algunos. Si tengo galletas, reparto. ¡Jugar juntos es más divertido! Luego mis cosas vuelven conmigo.</p>`,
      svg: marco("Dos niños con una pelota entre los dos y un corazón", `${nino(70, 165, { s: 1.6, pose: "brazos", c: "var(--pen)" })}${nino(190, 165, { s: 1.6, pose: "brazos", c: "var(--red)", nina: true })}${ic("pelota", 130, 92, 1.3)}${corazon(130, 40, 1.6)}`),
    },
    {
      html: `<h3>Esperar mi turno</h3><p>En el tobogán, primero sube uno y luego otro. Es el <mark>turno</mark>.</p><p>Esperar cuesta un poco, pero así todos jugamos. «Ahora tú, luego yo». Si espero tranquilo, mi turno llega pronto.</p>`,
      svg: marco("Tres niños en fila esperando para subir al tobogán", `<path d="M200 50 L240 150" stroke="var(--inf)" stroke-width="8" stroke-linecap="round"/><path d="M200 50 V150 M186 50 H210" stroke="var(--muted)" stroke-width="4"/>${nino(178, 160, { s: 1.2, c: "var(--red)" })}${nino(128, 160, { s: 1.2, c: "var(--pen)", nina: true })}${nino(78, 160, { s: 1.2, c: "var(--leaf)" })}${t(178, 30, "1", { color: "var(--red)", size: 22 })}${t(128, 30, "2", { color: "var(--pen)", size: 22 })}${t(78, 30, "3", { color: "var(--leaf)", size: 22 })}`),
    },
    {
      html: `<h3>Ayudar</h3><p><mark>Ayudar</mark> es echar una mano a quien lo necesita.</p><p>Puedo recoger los juguetes, poner la mesa, levantar a un amigo que se ha caído o dar agua a las plantas. A todos nos gusta que nos ayuden.</p>`,
      svg: dibujos("Recoger juguetes, poner la mesa, regar plantas", [["juguete", "recoger", "var(--pen)"], ["cuchara", "poner la mesa", "var(--inf)"], ["regadera", "regar", "var(--water)"]], { titulo: "Yo ayudo en casa" }),
    },
    {
      html: `<h3>Palabras mágicas</h3><p>Hay palabras que abren puertas: <mark>por favor</mark>, <mark>gracias</mark> y <mark>perdón</mark>.</p><p>«¿Me dejas el rojo, por favor?» «¡Gracias!» Y si hago daño sin querer: «perdón». ¡Son mágicas porque hacen sonreír!</p>`,
      svg: lista("Palabras mágicas: por favor, gracias, perdón", [["Por favor", "var(--pen)"], ["Gracias", "var(--leaf)"], ["Perdón", "var(--red)"]], { titulo: "Palabras mágicas", marca: "★" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Cuando compartimos y ayudamos, <mark>hacemos amigos</mark> y todos estamos más contentos.</p><p>En clase, en el parque y en casa, la vida es más fácil si nos echamos una mano. Y yo también recibo ayuda cuando la necesito.</p>`,
      svg: dibujos("Amigos contentos en el cole, en el parque y en casa", [["escuela", "en el cole", "var(--pen)"], ["arbol", "en el parque", "var(--leaf)"], ["casa", "en casa", "var(--red)"]], { nota: "¡Todos contentos!" }),
    },
    {
      html: `<h3>Juego: el tesoro compartido</h3><p>Ponemos en una caja muchos juguetes. Cada uno coge uno y, al oír una palmada, <mark>lo pasa</mark> al de su derecha.</p><p>¡Todos prueban todos los juguetes! Al final, cada uno cuenta cuál le ha gustado más.</p>`,
      svg: marco("Niños en corro pasándose juguetes con flechas", `${[[130, 70], [200, 120], [130, 170], [60, 120]].map(([x, y], i) => nino(x, y, { s: 0.85, c: ["var(--red)", "var(--pen)", "var(--leaf)", "var(--inf)"][i], nina: i % 2 === 1 })).join("")}<circle cx="130" cy="95" r="40" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-dasharray="6 5"/>${ic("pelota", 130, 98, 0.8)}`),
    },
  ],
  figura: figura("Compartir y ayudar", "Pelota compartida, corazón, juguetes y regadera", [["pelota", "compartir", "var(--red)"], ["juguete", "turnos", "var(--pen)"], ["regadera", "ayudar", "var(--water)"], ["corazon", "gracias", "var(--red)"]]),
  video: vid("fbWWalfJ7Sg", "La niña que no quería compartir", "Marie Leiner", 24223746, "compartir y ayudar cuento infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Hay un solo columpio y dos niños.", pasos: ["Contamos hasta 20 para cada turno.", "Primero se columpia Marta.", "Al llegar a 20, le toca a Hugo."], resultado: "los dos se columpian y nadie se enfada." },
    { enunciado: "Se le caen los lápices a un compañero.", pasos: ["Me agacho y le ayudo a recogerlos.", "Él me dice «gracias».", "Yo le digo «de nada»."], resultado: "ayudar hace amigos." },
  ],
  errores: [
    "Pensar que compartir es perder el juguete: luego vuelve a ti.",
    "Quitar las cosas sin pedirlas: hay que decir «¿me lo dejas, por favor?».",
    "Ayudar solo si me dan algo: ayudamos porque nos gusta que otros estén bien.",
  ],
  ejercicios: [
    { q: "Reparte 6 galletas entre 2 personas.", sol: "3 para cada una. Nota: usad galletas de verdad o fichas." },
    { q: "Juega a un juego de mesa esperando tu turno.", sol: "Un juego corto de dados o de memoria va muy bien." },
    { q: "Ayuda a poner la mesa: servilletas y cucharas.", sol: "Contad juntos cuántas hacen falta." },
    { q: "Di «por favor» y «gracias» en la comida de hoy.", sol: "Felicitadle cada vez que las use." },
    { q: "Dibuja algo que hayas compartido con un amigo.", sol: "Preguntadle cómo se sintió." },
    { q: "Recoge tus juguetes antes de cenar.", sol: "Una canción de recoger lo hace más fácil." },
  ],
  quiz: [
    { q: "Compartir es…", o: ["esconder mis cosas", "dejar mis cosas a otros", "romper cosas"], a: 1, e: "Compartir es usar juntos." },
    { q: "En el tobogán, ¿qué hacemos?", o: ["Empujar", "Subir todos a la vez", "Esperar el turno"], a: 2, e: "Primero uno y luego otro." },
    { q: "Si quiero algo, digo…", o: ["por favor", "¡dámelo!", "nada"], a: 0, e: "«Por favor» es una palabra mágica." },
    { q: "Si me ayudan, digo…", o: ["no", "vete", "gracias"], a: 2, e: "Damos las gracias." },
    { q: "Un amigo se cae. ¿Qué hago?", o: ["Le ayudo a levantarse", "Me río", "Me voy"], a: 0, e: "Ayudar es echar una mano." },
    { q: "Si hago daño sin querer, digo…", o: ["gracias", "perdón", "adiós"], a: 1, e: "Pedir perdón arregla las cosas." },
  ],
  examen: [
    { q: "Ayudar en casa es…", o: ["tirar los juguetes", "recoger mis juguetes", "esconderme"], a: 1, e: "Recoger es una buena ayuda." },
    { q: "Esperar el turno sirve para que…", o: ["todos juguemos", "nadie juegue", "solo juegue yo"], a: 0, e: "Así todos pueden jugar." },
    { q: "Cuando compartimos, estamos…", o: ["más tristes", "solos", "más contentos"], a: 2, e: "Compartir hace amigos." },
  ],
  feynman: ["Qué es compartir", "Por qué esperamos el turno", "Las palabras mágicas"],
  mapa: mapa("CONVIVIR", "var(--inf)", [
    ["Compartir", "usar juntos", "var(--red)"],
    ["Turno", "ahora tú, luego yo", "var(--pen)"],
    ["Ayudar", "echar una mano", "var(--leaf)"],
    ["Palabras", "por favor, gracias", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Qué es compartir?", "Usar juntos las cosas"],
    ["¿Qué es el turno?", "Ahora tú, luego yo"],
    ["¿Qué digo si quiero algo?", "Por favor"],
    ["¿Qué digo si me ayudan?", "Gracias"],
    ["¿Qué digo si hago daño?", "Perdón"],
    ["Di una forma de ayudar en casa", "Recoger los juguetes"],
  ],
  familias: [
    "Dadle pequeñas tareas en casa y agradecedle la ayuda.",
    "Jugad a juegos de mesa sencillos para practicar los turnos.",
    "Usad vosotros «por favor» y «gracias»: aprenden imitando.",
    "Antes de que vengan amigos, elegid juntos qué juguetes compartirá.",
  ],
  profesores: PROF("Crecimiento en armonía: interacción socioemocional, habilidades para la convivencia, respeto de turnos y conductas de ayuda", ["Encargados de clase rotativos.", "Juegos cooperativos con un objetivo común.", "Mural de «palabras mágicas» con fotos de la clase."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
