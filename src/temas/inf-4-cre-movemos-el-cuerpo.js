// Infantil 4 años · Crecimiento en armonía: movemos el cuerpo.
const { marco, dibujos, lista, ic, nino, t, suelo, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Movemos el cuerpo",
  minutos: 15,
  objetivos: ["Correr, saltar, girar y mantener el equilibrio", "Moverse rápido y despacio", "Descansar y beber agua tras el ejercicio"],
  claves: ["correr", "saltar", "equilibrio", "descansar"],
  pregunta: {
    texto: "¿Qué cosas puedes hacer con tu cuerpo en el parque?",
    respuesta: "Puedo <mark>correr</mark>, <mark>saltar</mark>, trepar, columpiarme, girar y lanzar la pelota. ¡Mi cuerpo se mueve de muchas formas!",
  },
  bloques: [
    {
      html: `<h3>Mi cuerpo se mueve</h3><p>Mi cuerpo puede hacer muchas cosas: <mark>andar</mark>, <mark>correr</mark>, <mark>saltar</mark> y girar.</p><p>Moverse es divertido y me hace más fuerte. ¡Vamos a probar! Pon tu música favorita y empieza a moverte por la sala.</p>`,
      svg: marco("Tres niños: uno corre, otro salta y otro baila", `${suelo(160)}${nino(55, 158, { s: 1.3, pose: "corre", c: "var(--red)" })}${nino(130, 158, { s: 1.3, pose: "salta", c: "var(--pen)", nina: true })}${nino(205, 158, { s: 1.3, pose: "baila", c: "var(--leaf)" })}${t(55, 30, "corro", { color: "var(--red)", size: 16 })}${t(130, 30, "salto", { color: "var(--pen)", size: 16 })}${t(205, 30, "giro", { color: "var(--leaf)", size: 16 })}`),
    },
    {
      html: `<h3>Rápido y despacio</h3><p>Puedo moverme <mark>rápido</mark>, como un guepardo, o <mark>despacio</mark>, como una tortuga.</p><p>Cuando suena la música, me muevo. Cuando para… ¡me quedo quieto como una estatua! Juega con un adulto: él pone la música y tú bailas.</p>`,
      svg: dibujos("Una liebre rápida y una tortuga despacio", [["conejo", "rápido", "var(--red)"], ["tortuga", "despacio", "var(--leaf)"]]),
    },
    {
      html: `<h3>El equilibrio</h3><p>Tener <mark>equilibrio</mark> es no caerse.</p><p>Prueba a estar sobre un pie, como una cigüeña. Camina por una línea del suelo con los brazos abiertos. ¡Despacito! Luego, prueba con el otro pie.</p>`,
      svg: marco("Una niña a la pata coja con los brazos abiertos sobre una línea", `<path d="M30 160 H230" stroke="var(--inf)" stroke-width="6" stroke-dasharray="14 8"/>${nino(130, 158, { s: 1.6, pose: "equilibrio", c: "var(--pen)", nina: true })}`),
    },
    {
      html: `<h3>Con la pelota</h3><p>Con una <mark>pelota</mark> puedo lanzar, botar, rodar y chutar.</p><p>Primero con las dos manos y luego con una. Y con los pies, ¡a meter gol! ¡Cuidado con las ventanas!</p>`,
      svg: marco("Un niño lanza una pelota", `${suelo(160)}${nino(80, 158, { s: 1.6, pose: "lanza", c: "var(--red)" })}<path d="M100 50 Q150 20 190 60" stroke="var(--muted)" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/>${ic("pelota", 200, 76, 1.1)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Moverse hace que mis <mark>músculos</mark> y mis huesos crezcan fuertes. También me pone contento.</p><p>Después de jugar mucho, <b>descanso</b> y <b>bebo agua</b>. Dormir bien también nos ayuda a crecer.</p>`,
      svg: lista("Moverse: me pone fuerte y contento; después descanso y bebo agua", [["Me pongo fuerte", "var(--red)"], ["Estoy contento", "var(--sun)"], ["Descanso y bebo agua", "var(--water)"]]),
    },
    {
      html: `<h3>Juego: los animales</h3><p>El adulto dice un animal y tú <mark>te mueves como él</mark>.</p><p>Rana: ¡salta! Serpiente: ¡arrástrate! Elefante: ¡pasos grandes y lentos! Pájaro: ¡vuela con los brazos! Ahora inventa tú un animal nuevo.</p>`,
      svg: dibujos("Rana salta, serpiente se arrastra, elefante pisa fuerte, pájaro vuela", [["rana", "salto", "var(--leaf)"], ["serpiente", "repto", "var(--leaf)"], ["elefante", "piso", "var(--muted)"], ["pajaro", "vuelo", "var(--pen)"]]),
    },
  ],
  figura: figura("Me muevo de muchas formas", "Correr, saltar, lanzar la pelota y descansar", [["conejo", "corro", "var(--red)"], ["rana", "salto", "var(--leaf)"], ["pelota", "lanzo", "var(--pen)"], ["cama", "descanso", "var(--water)"]]),
  video: vid("1zP0Vnhd95E", "Me muevo. Canción para despertar el cuerpo", "Pequeño Pez", 33712892, "canción mover el cuerpo niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Jugamos a las estatuas.", pasos: ["Ponemos música y bailamos.", "Cuando la música para, nos quedamos quietos.", "¡Quien se mueve, hace una voltereta!"], resultado: "practicamos moverse y pararse." },
    { enunciado: "Hacemos un circuito en el pasillo.", pasos: ["Saltamos sobre dos cojines.", "Pasamos por debajo de una silla.", "Andamos por una cuerda en el suelo."], resultado: "saltar, gatear y equilibrio en un solo juego." },
  ],
  errores: [
    "Correr sin mirar: hay que ver dónde están los demás para no chocar.",
    "No descansar: después de correr mucho, paramos y bebemos agua.",
    "Pensar que solo se hace deporte en el gimnasio: también bailando y jugando en el parque.",
  ],
  ejercicios: [
    { q: "Salta con los dos pies juntos cinco veces.", sol: "Nota para la familia: contad en voz alta los saltos." },
    { q: "Aguanta sobre un pie mientras cuentas hasta 5.", sol: "Luego con el otro pie." },
    { q: "Lanza una pelota y atrápala.", sol: "Usad una pelota blanda y grande." },
    { q: "Baila una canción moviendo los brazos y las piernas.", sol: "Cualquier canción animada vale." },
    { q: "Camina despacio como una tortuga y rápido como un conejo.", sol: "Alternad las dos velocidades." },
    { q: "Después de jugar, bebe agua y respira tranquilo.", sol: "Que note cómo el corazón va más despacio." },
  ],
  quiz: [
    { q: "La rana…", o: ["vuela", "salta", "nada solo"], a: 1, e: "La rana salta." },
    { q: "La tortuga va…", o: ["rápido", "volando", "despacio"], a: 2, e: "La tortuga va despacio." },
    { q: "Sobre un pie sin caerme es…", o: ["equilibrio", "dormir", "comer"], a: 0, e: "Es el equilibrio." },
    { q: "Después de correr mucho…", o: ["como chuches", "sigo sin parar", "descanso y bebo agua"], a: 2, e: "Descansar y beber agua." },
    { q: "Moverse me hace…", o: ["más fuerte", "más pequeño", "más triste"], a: 0, e: "Los músculos crecen fuertes." },
    { q: "Con la pelota puedo…", o: ["beber", "lanzar", "leer"], a: 1, e: "Lanzar, botar y chutar." },
  ],
  examen: [
    { q: "En las estatuas, cuando para la música…", o: ["corro", "me quedo quieto", "grito"], a: 1, e: "Quietos como estatuas." },
    { q: "El elefante da pasos…", o: ["grandes y lentos", "pequeños y rápidos", "en el aire"], a: 0, e: "Pesados y lentos." },
    { q: "Para no chocar al correr…", o: ["cierro los ojos", "corro hacia atrás", "miro adelante"], a: 2, e: "Mirar dónde están los demás." },
  ],
  feynman: ["Formas de moverse", "Qué es el equilibrio", "Por qué descansamos y bebemos agua"],
  mapa: mapa("ME MUEVO", "var(--inf)", [
    ["Correr y saltar", "rápido o despacio", "var(--red)"],
    ["Equilibrio", "sobre un pie", "var(--pen)"],
    ["Pelota", "lanzar y chutar", "var(--leaf)"],
    ["Descansar", "y beber agua", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Cómo se mueve la rana?", "Saltando"],
    ["¿Cómo va la tortuga?", "Despacio"],
    ["¿Qué es el equilibrio?", "No caerse"],
    ["¿Qué hago con la pelota?", "Lanzar, botar, chutar"],
    ["¿Qué hago después de correr?", "Descansar y beber agua"],
    ["¿Qué me da moverme?", "Fuerza y alegría"],
  ],
  familias: [
    "Id al parque cada día un rato: columpios, tobogán y correr.",
    "Bailad juntos en casa con su música favorita.",
    "Haced un circuito con cojines y sillas en el pasillo.",
    "Subid escaleras a pie cuando sea posible, contando los escalones.",
  ],
  profesores: PROF("Crecimiento en armonía: el cuerpo en movimiento; habilidades motrices básicas, equilibrio y coordinación; hábitos de actividad física y descanso", ["Circuitos de psicomotricidad con aros y bancos.", "Juegos de imitación de animales.", "Juego de las estatuas con música."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
