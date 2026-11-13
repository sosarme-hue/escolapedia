// Infantil 5 años · Crecimiento en armonía: normas de clase y de juego.
const { mapa } = require("./_util");
const { nino, ic, vin, dibujos, lista, mural, t, FUENTES, PROF, CA, vid, nota } = require("./_inf5a");

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "Normas de clase y de juego",
  minutos: 15,
  objetivos: ["Saber para qué sirven las normas", "Conocer las normas de la clase y del juego", "Respetar los turnos y saber ganar y perder"],
  claves: ["normas", "turno", "levantar la mano", "compartir", "recoger", "ganar y perder"],
  pregunta: { texto: "¿Qué pasaría si en clase todos habláramos a la vez?", respuesta: "¡No se entendería nada! Por eso hay <mark>normas</mark>: levantamos la mano y esperamos el turno." },
  bloques: [
    {
      html: `<h3>¿Qué son las normas?</h3><p>Las <mark>normas</mark> nos dicen cómo hacer las cosas para estar bien juntos.</p><p>Hay normas en casa, en el cole, en el parque y en los juegos. ¡Las cumplimos todos, también los mayores!</p>`,
      svg: dibujos("Hay normas en casa, en el cole, en el parque y en los juegos", [["casa", "casa", "var(--red)"], ["escuela", "cole", "var(--pen)"], ["arbol", "parque", "var(--leaf)"], ["pelota", "juego", "var(--inf)"]], { titulo: "Normas en todas partes" }),
    },
    {
      html: `<h3>Normas de clase</h3><p>Para hablar, <mark>levanto la mano</mark> y espero mi turno.</p><p>Escucho cuando otro habla. Ando despacio, sin correr. Hablo bajito. Y cuido el material de todos.</p>`,
      svg: lista("Normas de clase: levanto la mano, escucho, ando despacio y cuido el material", [["levanto la mano", "var(--pen)"], ["escucho", "var(--leaf)"], ["ando, no corro", "var(--inf)"], ["cuido las cosas", "var(--red)"]], { titulo: "En clase" }),
    },
    {
      html: `<h3>Recoger y compartir</h3><p>Cuando terminamos de jugar, <mark>recogemos</mark>: cada cosa en su sitio.</p><p>Los juguetes de clase son de todos. Los <b>compartimos</b> y los pedimos con «por favor».</p>`,
      svg: vin("Juguetes guardados en una caja y dos niños compartiendo una pelota", `<rect x="22" y="92" width="96" height="58" rx="6" fill="var(--sun)" opacity=".7" stroke="var(--ink)" stroke-width="2"/>${ic("juguete", 50, 82, 0.8)}${ic("libro", 90, 82, 0.8)}${t(70, 172, "recojo", { size: 17, color: "var(--inf)" })}${nino(168, 150, { c: "var(--pen)", pose: "brazos", s: 0.9 })}${ic("pelota", 196, 100, 0.6)}${nino(224, 150, { c: "var(--leaf)", nina: true, s: 0.9 })}${t(196, 172, "comparto", { size: 17, color: "var(--leaf)" })}`),
    },
    {
      html: `<h3>Normas de juego</h3><p>Cada juego tiene sus <mark>normas</mark>. Hay que conocerlas antes de empezar.</p><p>Esperamos el <b>turno</b>, no hacemos trampas y dejamos jugar a todos los que quieran.</p>`,
      svg: vin("Niños en fila esperando su turno para el tobogán", `<path d="M190 60 H222 V150 M190 60 L120 150" stroke="var(--red)" stroke-width="6" fill="none" stroke-linecap="round"/>${[0, 1, 2].map((i) => nino(44 + i * 30, 150, { c: ["var(--pen)", "var(--leaf)", "var(--inf)"][i], nina: i === 1, s: 0.8 })).join("")}${nino(206, 62, { c: "var(--red)", s: 0.6, pose: "arriba" })}${t(74, 172, "espero mi turno", { size: 15, max: 140 })}`),
    },
    {
      html: `<h3>¿Para qué sirven? Jugar a gusto</h3><p>Las normas sirven para que <mark>todos estemos bien</mark> y para que nadie se haga daño.</p><p>Al terminar, unas veces ganamos y otras perdemos. Si gano, no me burlo. Si pierdo, felicito.</p>`,
      svg: vin("Un niño con medalla da la mano a otro: saber ganar y perder", `${ic("medalla", 130, 50, 1.4)}${nino(90, 150, { c: "var(--pen)", pose: "brazos" })}${nino(170, 150, { c: "var(--leaf)", nina: true, pose: "brazos" })}${t(130, 172, "¡bien jugado!", { size: 17, color: "var(--leaf)" })}`),
    },
    {
      html: `<h3>Juego: las normas de mi juego</h3><p>Inventa un juego con tu familia. Decid <mark>tres normas</mark>: cómo se empieza, qué no se puede hacer y quién gana.</p><p>¡Ahora jugad cumpliendo las normas!</p>`,
      svg: lista("Mi juego tiene tres normas: cómo empiezo, qué no se hace y quién gana", [["¿cómo empiezo?", "var(--pen)"], ["¿qué no se hace?", "var(--red)"], ["¿quién gana?", "var(--leaf)"]], { marca: "n", titulo: "Mis tres normas" }),
    },
  ],
  figura: {
    titulo: "Normas para estar bien juntos",
    svg: mural("Mural: levanto la mano, espero mi turno, comparto y recojo, sé ganar y perder", [["mano", "levanto la mano", "para hablar", "var(--pen)"], ["reloj", "espero", "mi turno", "var(--inf)"], ["juguete", "comparto", "y recojo", "var(--leaf)"], ["medalla", "gano o pierdo", "sin enfadarme", "var(--red)"]]),
  },
  video: vid("AnmmtzxWyZ4", "Normas de clase", "Escuela de Aprendices", 494694, "normas de clase infantil"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "La maestra pregunta y yo sé la respuesta.", pasos: ["No grito la respuesta.", "Levanto la mano.", "Espero a que me den la palabra y entonces hablo."], resultado: "todos me oyen y nadie se queda sin turno." },
    { enunciado: "Jugamos al parchís y voy perdiendo.", pasos: ["Respiro: perder también es parte del juego.", "Sigo jugando sin hacer trampas.", "Al final felicito al que gana."], resultado: "me lo paso bien aunque no gane." },
  ],
  errores: [
    "Pensar que las normas son solo para los niños: los mayores también las cumplen.",
    "Cambiar las normas del juego a mitad para ganar.",
    "Enfadarse y dejar de jugar al perder.",
  ],
  ejercicios: [
    { q: "Di tres normas de tu clase.", sol: nota("preguntad para qué sirve cada una.") },
    { q: "Escribid juntos tres normas de casa y colgadlas.", sol: nota("con dibujos, que el niño pueda «leerlas» solo.") },
    { q: "Juega a un juego de mesa respetando los turnos.", sol: nota("dejad que a veces gane y a veces pierda.") },
    { q: "Recoge tus juguetes antes de cenar.", sol: nota("una canción de recoger lo hace más fácil.") },
    { q: "Practica pedir un juguete: «¿Me lo dejas, por favor?».", sol: nota("practicad también decir «cuando termine te lo dejo».") },
    { q: "Dibuja a un niño cumpliendo una norma.", sol: nota("pedid que os cuente qué norma es.") },
  ],
  quiz: [
    { q: "Para hablar en clase…", o: ["grito", "levanto la mano", "me levanto"], a: 1, e: "Levanto la mano." },
    { q: "En clase andamos…", o: ["corriendo", "despacio", "saltando"], a: 1, e: "Despacio." },
    { q: "Al terminar de jugar…", o: ["recogemos", "lo dejamos todo", "nos vamos"], a: 0, e: "Recogemos." },
    { q: "En los juegos, esperamos el…", o: ["turno", "autobús", "tren"], a: 0, e: "El turno." },
    { q: "Si pierdo…", o: ["me enfado", "felicito al que gana", "rompo el juego"], a: 1, e: "Felicito." },
    { q: "Las normas sirven para…", o: ["estar bien juntos", "aburrirnos", "nada"], a: 0, e: "Para estar bien juntos." },
  ],
  examen: [
    { q: "Hacer trampas en un juego está…", o: ["bien", "mal", "da igual"], a: 1, e: "No se hacen trampas." },
    { q: "Para pedir un juguete digo…", o: ["«¡Dámelo!»", "«¿Me lo dejas, por favor?»", "nada, lo cojo"], a: 1, e: "Por favor." },
    { q: "Cuando otro habla, yo…", o: ["escucho", "hablo más alto", "canto"], a: 0, e: "Escucho." },
  ],
  feynman: ["Qué son las normas", "Normas de clase", "Cómo ganar y perder bien"],
  mapa: mapa("NORMAS", "var(--inf)", [
    ["En clase", "mano · escuchar · andar", "var(--pen)"],
    ["Compartir", "por favor · recoger", "var(--leaf)"],
    ["En el juego", "turnos · sin trampas", "var(--inf)"],
    ["Ganar y perder", "sin burlas · felicitar", "var(--red)"],
  ], 220),
  tarjetas: [
    ["Para hablar en clase…", "Levanto la mano"],
    ["En clase, ¿corro?", "No, ando"],
    ["Después de jugar…", "Recojo"],
    ["Para pedir algo digo…", "Por favor"],
    ["En el juego espero mi…", "Turno"],
    ["Si pierdo…", "Felicito al que gana"],
  ],
  familias: [
    "Poned pocas normas en casa, claras y con dibujos.",
    "Jugad a juegos de mesa en familia para practicar turnos y saber perder.",
    "Cumplid vosotros también las normas: aprenden de lo que ven.",
    "Elogiad cuando recoja o comparta sin que se lo pidáis.",
  ],
  profesores: PROF(CA, "Interacción socioemocional en el entorno: normas de convivencia del aula y del juego, respeto de turnos y aceptación de ganar y perder", ["Asamblea para elaborar las normas de clase con pictogramas.", "Juegos de mesa cooperativos y de turnos en pequeño grupo.", "Encargado del día que recuerda una norma."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
