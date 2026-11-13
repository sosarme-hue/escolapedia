// Comunicación y representación, Infantil 4 años: contamos lo que pasó (primero, después, al final).
const { mapa } = require("./_util");
const { svg, rot, nino, sol, luna, estrella, suelo, bocadillo, secuencia, dibujos, charla, mural, vid, MARRON, R, A, V, N, M, G, PROF, FUENTES } = require("./_inf4b");

module.exports = {
  materia: "Comunicación y representación de la realidad",
  curso: "4-anos",
  titulo: "Contamos lo que pasó",
  minutos: 15,
  objetivos: ["Contar en voz alta algo que nos ha pasado", "Ordenar lo que pasó: primero, después y al final", "Escuchar a los demás cuando cuentan"],
  claves: ["contar", "primero", "después", "al final", "escuchar"],
  pregunta: {
    texto: "¿Qué has hecho hoy al levantarte? ¿Y después?",
    respuesta: "Seguro que <mark>primero</mark> te has despertado, <b>después</b> has desayunado y <b>al final</b> has venido al cole. ¡Ya sabes contar lo que pasó!",
  },
  bloques: [
    {
      html: `<h3>¡Te lo cuento!</h3><p>Cuando algo nos pasa, nos gusta <mark>contarlo</mark>.</p><p>Contamos a mamá lo que hicimos en el cole. Contamos a la maestra lo que vimos en el parque.</p><p>¡Contar es compartir lo que vivimos!</p>`,
      svg: svg("Una niña le cuenta a un niño que ha visto un perro en el parque", `${nino(70, 150, { pose: "canta", nina: true, c: R, boca: "abierta" })}${nino(190, 150, { c: A })}${bocadillo(110, 40, 150, "¡He visto un perro!", 13)}${suelo(150)}${rot(130, 172, "Contamos lo que nos pasa", { color: A })}`),
    },
    {
      html: `<h3>Primero, después, al final</h3><p>Las cosas pasan <mark>en orden</mark>.</p><p><b>Primero</b> me despierto. <b>Después</b> desayuno. <b>Al final</b> voy al cole.</p><p>Estas tres palabras nos ayudan a contar bien, sin liarnos.</p>`,
      svg: secuencia("Tres viñetas en orden: primero la cama, después la leche del desayuno y al final la escuela", [["cama", "primero", R], ["leche", "después", A], ["escuela", "al final", V]], { titulo: "Mi mañana" }),
    },
    {
      html: `<h3>Mira los dibujos</h3><p>Aquí hay una semilla, una planta pequeña y una flor.</p><p>¿Qué pasó primero? La <mark>semilla</mark>. Después creció la planta. Al final salió la <mark>flor</mark>.</p><p>Señala cada dibujo con el dedo.</p>`,
      svg: secuencia("Una semilla en la tierra, una planta pequeña y al final una flor", [["", "semilla", MARRON, `<ellipse rx="9" ry="6" fill="#8a5a2b"/><path d="M-30 14 H30" stroke="var(--line)" stroke-width="3"/>`], ["", "planta", V, `<path d="M0 18 V-6" stroke="var(--leaf)" stroke-width="4"/><ellipse cx="-8" cy="-4" rx="9" ry="5" fill="var(--leaf)"/><ellipse cx="8" cy="-10" rx="9" ry="5" fill="var(--leaf)"/><path d="M-30 18 H30" stroke="var(--line)" stroke-width="3"/>`], ["flor", "flor", R]], { titulo: "¿Qué pasó primero?" }),
    },
    {
      html: `<h3>¿Cuándo pasó?</h3><p>También decimos <mark>cuándo</mark> pasó algo.</p><p><b>Ayer</b> fui al parque. <b>Hoy</b> estoy en el cole. Por la <b>mañana</b> sale el sol. Por la <b>noche</b> salen la luna y las estrellas.</p>`,
      svg: svg("A un lado la mañana con el sol y al otro la noche con la luna y estrellas", `<rect x="14" y="14" width="112" height="124" rx="10" fill="#bfe3ff"/><rect x="134" y="14" width="112" height="124" rx="10" fill="#1c2550"/>${sol(70, 66, 20)}${luna(188, 54, 18)}${estrella(222, 96, 7, "#ffe9a0")}${estrella(160, 110, 6, "#ffe9a0")}${rot(70, 160, "por la mañana", { color: A })}${rot(190, 160, "por la noche", { color: N })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si contamos bien, <mark>nos entienden</mark>.</p><p>Así podemos decir qué nos duele, qué nos ha gustado o qué necesitamos.</p><p>Y los demás también nos cuentan sus cosas. Por eso hay que <b>escuchar</b> con atención.</p>`,
      svg: dibujos("Una boca para contar, una oreja para escuchar y un corazón para compartir", [["boca", "contar", R], ["oreja", "escuchar", A], ["corazon", "compartir", V]], { titulo: "Hablar y escuchar" }),
    },
    {
      html: `<h3>Juego: la ronda de las noticias</h3><p>Nos sentamos en <mark>corro</mark>. Cada uno cuenta algo que le ha pasado.</p><p>Usamos las palabras mágicas: primero, después y al final.</p><p>Los demás escuchan sin interrumpir. ¡Luego aplaudimos!</p>`,
      svg: charla("En el corro, un niño cuenta lo que hizo y una niña le pregunta", [["nino", "Primero fui a la playa…", A], ["nina", "¿Y después qué pasó?", R], ["nino", "¡Al final hice un castillo!", A]]),
    },
  ],
  figura: {
    titulo: "Las palabras para contar en orden",
    svg: mural("Tres tarjetas: primero, la cama; después, el desayuno; al final, el cole", [["cama", "primero", "me despierto", R], ["leche", "después", "desayuno", A], ["escuela", "al final", "voy al cole", V]], "Contamos lo que pasó en orden"),
  },
  video: { ...vid("sd-osWO4gLU", "¿Qué es primero? Secuencia temporal", "García Editorial Infantil", 179497), busqueda: "secuencias temporales para niños infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Cuenta cómo te lavas las manos.", pasos: ["Primero abro el grifo y me mojo las manos.", "Después me pongo jabón y froto.", "Al final me aclaro y me seco."], resultado: "¡ya lo has contado en orden!" },
    { enunciado: "¿Qué pasó primero: el huevo o el pollito?", pasos: ["Miramos los dos dibujos.", "El pollito sale del huevo.", "Así que primero está el huevo y después el pollito."], resultado: "primero el huevo, después el pollito." },
  ],
  errores: [
    "Contarlo todo de golpe y desordenado: mejor paso a paso, con primero, después y al final.",
    "Hablar todos a la vez: en el corro se espera el turno.",
    "Confundir ayer y mañana: ayer ya pasó; mañana todavía no ha llegado.",
  ],
  ejercicios: [
    { q: "Cuenta qué has hecho hoy antes de venir al cole.", sol: "Para la familia: ayudadle con preguntas: «¿Y qué hiciste primero? ¿Y después?»." },
    { q: "Ordena con el dedo: plato lleno, comer, plato vacío.", sol: "Primero el plato lleno, después comer y al final el plato vacío." },
    { q: "Dibuja lo que hiciste el fin de semana.", sol: "Para la familia: pedidle que os cuente el dibujo con «primero» y «al final»." },
    { q: "Escucha a un amigo y repite lo que te ha contado.", sol: "Para la familia: valorad que escuche y recuerde una o dos cosas." },
    { q: "Muévete: primero salta, después da una vuelta y al final siéntate.", sol: "Para la familia: id cambiando el orden para que esté atento." },
    { q: "Mira por la ventana: ¿es por la mañana o por la noche?", sol: "Depende de la hora: con sol, mañana o tarde; con luna, noche." },
  ],
  quiz: [
    { q: "Me despierto, desayuno y voy al cole. ¿Qué hago primero?", o: ["Desayuno", "Me despierto", "Voy al cole"], a: 1, e: "Primero nos despertamos." },
    { q: "¿Qué palabra usamos para lo último?", o: ["Al final", "Primero", "Ayer"], a: 0, e: "«Al final» es lo último que pasa." },
    { q: "Cuando un amigo cuenta algo, yo…", o: ["Grito", "Escucho", "Me voy"], a: 1, e: "Escuchamos con atención." },
    { q: "Primero la semilla, después la planta y al final…", o: ["La flor", "La piedra", "El agua"], a: 0, e: "La planta crece y sale la flor." },
    { q: "¿Cuándo salen la luna y las estrellas?", o: ["Por la mañana", "Por la noche", "Al mediodía"], a: 1, e: "De noche vemos la luna." },
    { q: "Para contar algo usamos…", o: ["Los pies", "La boca", "Las rodillas"], a: 1, e: "Contamos hablando." },
  ],
  examen: [
    { q: "¿Qué va antes?", o: ["Comer", "Lavarse las manos", "Recoger el plato"], a: 1, e: "Antes de comer nos lavamos las manos." },
    { q: "El huevo y el pollito. ¿Qué va primero?", o: ["El huevo", "El pollito", "Los dos a la vez"], a: 0, e: "El pollito sale del huevo." },
    { q: "En el corro, ¿cuándo hablo?", o: ["Cuando me toca", "Siempre", "Nunca"], a: 0, e: "Esperamos nuestro turno." },
  ],
  feynman: ["Cuéntale a alguien de casa qué hiciste hoy", "Usa primero, después y al final"],
  mapa: mapa("CONTAR", "var(--inf)", [
    ["Primero", "lo que pasa al principio", R],
    ["Después", "lo que pasa luego", A],
    ["Al final", "lo último", V],
    ["Escuchar", "esperar mi turno", N],
  ], 220),
  tarjetas: [
    ["¿Qué palabra usamos para empezar?", "Primero"],
    ["¿Y para lo que pasa luego?", "Después"],
    ["¿Y para lo último?", "Al final"],
    ["¿Qué hacemos cuando otro habla?", "Escuchar"],
    ["¿Qué pasó antes: ayer u hoy?", "Ayer"],
    ["¿Qué sale de noche?", "La luna y las estrellas"],
  ],
  familias: [
    "A la hora de cenar, preguntad: «¿Qué ha sido lo primero que has hecho en el cole?».",
    "Haced fotos de una receta sencilla y ordenadlas juntos.",
    "Al leer un cuento, parad y preguntad: «¿Y después qué pasará?».",
    "Escuchadle sin prisa y sin acabarle las frases: así gana confianza.",
  ],
  profesores: PROF("Comunicación y representación de la realidad: intención comunicativa, lenguaje oral para relatar vivencias, nociones temporales básicas (antes, después, ayer, hoy) y normas del intercambio oral", ["Asamblea diaria de noticias con un objeto que da el turno de palabra.", "Secuencias de 3 viñetas con fotos de la rutina de clase.", "Rincón del calendario con «ayer, hoy y mañana»."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

