// Infantil 5 años · Religión: amar y perdonar.
const { tema, mapa, svg, rot, big, ic, nino, corazon, suelo, casa, dibujos, charla, mural, lista, vid, PROF, R, A, V, N, M, W, K, MADERA } = require("./_inf5b");

module.exports = tema({
  materia: "Religión",
  titulo: "Amar y perdonar",
  objetivos: ["Saber que Jesús nos enseña a querernos", "Pedir perdón y perdonar después de un enfado", "Conocer la historia del hijo que vuelve a casa"],
  claves: ["amar", "perdonar", "pedir perdón", "hijo pródigo", "abrazo"],
  pregunta: {
    texto: "Si un amigo te quita un juguete y luego te dice «lo siento», ¿qué haces?",
    respuesta: "Puedes <mark>perdonarle</mark> y seguir jugando. Jesús nos enseña que perdonar nos hace felices a los dos.",
  },
  bloques: [
    {
      html: `<h3>Jesús nos enseña a amar</h3><p>Jesús dijo: «<mark>Amaos unos a otros</mark> como yo os he amado».</p><p>Amar es querer, cuidar y ayudar a los demás.</p><p>¡A todos, no solo a los amigos!</p>`,
      svg: svg("Dos niños se abrazan bajo un corazón grande", `${ic("abrazo", 130, 116, 2.4)}${corazon(130, 36, 1.6)}${rot(130, 174, "Amaos unos a otros", { color: R })}`),
    },
    {
      html: `<h3>A veces nos enfadamos</h3><p>Todos nos <mark>enfadamos</mark> a veces o hacemos daño sin querer.</p><p>Un empujón, un grito o romper un dibujo pone triste a otro.</p><p>¿Qué podemos hacer?</p><p>Nos pasa a todos.</p>`,
      svg: dibujos("Un niño enfadado y otro triste", [["triste", "triste", A], ["boca_abierta", "¡grrr!", R]], { titulo: "Nos hemos enfadado" }),
    },
    {
      html: `<h3>Pedir perdón</h3><p>Si hacemos daño, decimos <mark>«lo siento, perdóname»</mark>.</p><p>Miramos a la cara y lo decimos de verdad.</p><p>Si podemos, lo <b>arreglamos</b>: devolvemos el juguete o ayudamos.</p>`,
      svg: charla("Diálogo: Lo siento, perdóname. Te perdono.", [["nino", "Lo siento, perdóname.", A], ["nina", "¡Te perdono!", V]]),
    },
    {
      html: `<h3>El padre que perdona</h3><p>Jesús contó que un hijo se fue de casa y gastó todo.</p><p>Triste, <mark>volvió</mark> a pedir perdón.</p><p>Su padre corrió a abrazarlo y ¡hizo una fiesta! Así perdona Dios.</p>`,
      svg: svg("Un padre corre a abrazar a su hijo que vuelve a casa", `${casa(210, 150, R)}${nino(160, 156, { c: MADERA, pose: "brazos", pelo: "#9aa3b5" })}${nino(90, 156, { c: A, pose: "brazos" })}${corazon(125, 60, 1.4)}${suelo(158)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Perdonar sirve para <mark>volver a ser amigos</mark> y estar en paz.</p><p>Si guardamos el enfado, estamos tristes. Si perdonamos, ¡el corazón se pone contento!</p><p>¡Haz las paces hoy!</p>`,
      svg: lista("Tres pasos para hacer las paces", [["Digo: lo siento", A], ["Lo arreglo", M], ["Nos damos un abrazo", R]], { titulo: "Hacemos las paces", marca: "n" }),
    },
    {
      html: `<h3>Juego: el rincón de la paz</h3><p>Prepara un rincón con un cojín y un <mark>corazón de papel</mark>.</p><p>Cuando dos se enfadan, van allí, se cuentan qué pasó y se piden perdón.</p><p>¡Y salen con un abrazo!</p>`,
      svg: svg("Dos niños sentados en un cojín con un corazón de papel", `<ellipse cx="130" cy="150" rx="90" ry="14" fill="${N}" opacity=".5"/>${nino(96, 152, { c: A, pose: "sentado" })}${nino(164, 152, { c: R, pose: "sentado", nina: true })}${corazon(130, 74, 1.5)}${rot(130, 24, "Rincón de la paz", { color: K, size: 15 })}`),
    },
  ],
  figura: {
    titulo: "Amar y perdonar",
    svg: mural("Amar, pedir perdón, perdonar y abrazar", [["corazon", "Amo", "quiero y ayudo", R], ["boca_abierta", "Lo siento", "pido perdón", A], ["manos", "Te perdono", "olvido el enfado", V], ["abrazo", "Abrazo", "volvemos a ser amigos", M]], "Como Jesús nos enseña"),
  },
  video: { ...vid("7tABypFAx4A", "La parábola del hijo pródigo: una lección sobre el amor", "Mi Iglesia en Casa Kids", 199262), busqueda: "amar y perdonar para niños jesús" },
  ejemplos: [
    { enunciado: "Sin querer, Leo rompe la torre de Sara. ¿Qué hace?", pasos: ["Leo ve que Sara está triste.", "Le dice: «Lo siento, perdóname».", "La ayuda a construirla otra vez."], resultado: "pide perdón y lo arregla." },
    { enunciado: "Sara está enfadada. ¿Qué puede hacer?", pasos: ["Escucha a Leo.", "Le dice: «Te perdono».", "Siguen jugando juntos."], resultado: "perdona y vuelven a ser amigos." },
  ],
  errores: [
    "Decir «lo siento» sin mirar ni sentirlo: se dice de verdad.",
    "Pensar que perdonar es de débiles: perdonar es de valientes.",
    "Creer que solo hay que querer a los amigos: Jesús nos pide querer a todos.",
  ],
  ejercicios: [
    { q: "Practica con un peluche cómo pedir perdón.", sol: "Lo siento, perdóname. Nota para la familia: haced turnos." },
    { q: "Haz un corazón de papel para el rincón de la paz.", sol: "Nota: decoradlo juntos." },
    { q: "Cuenta la historia del padre que perdona.", sol: "Un hijo se va, vuelve arrepentido y su padre lo abraza." },
    { q: "Dibuja dos amigos haciendo las paces.", sol: "Respuesta libre." },
    { q: "Di una cosa buena de alguien con quien te enfadaste.", sol: "Ayuda a perdonar." },
    { q: "Da un abrazo de paz a alguien de tu familia.", sol: "Nota: celebrad cuando haga las paces solo." },
  ],
  quiz: [
    { q: "Jesús nos enseña a…", o: ["amarnos", "pelearnos", "no hablar"], a: 0, e: "Amaos unos a otros." },
    { q: "Si hago daño digo…", o: ["lo siento", "me da igual", "nada"], a: 0, e: "Pedimos perdón." },
    { q: "Si me piden perdón, puedo…", o: ["perdonar", "gritar", "irme"], a: 0, e: "Perdonar nos hace felices." },
    { q: "En la historia, el padre…", o: ["abraza a su hijo", "cierra la puerta", "se enfada"], a: 0, e: "Y hace una fiesta." },
    { q: "Perdonar sirve para…", o: ["volver a ser amigos", "estar más enfadados", "nada"], a: 0, e: "Estamos en paz." },
    { q: "Amar es…", o: ["querer y ayudar", "quitar juguetes", "empujar"], a: 0, e: "Cuidar a los demás." },
  ],
  examen: [
    { q: "¿A quién nos pide Jesús que queramos?", o: ["a todos", "solo a mi mejor amigo", "a nadie"], a: 0, e: "A todos." },
    { q: "Después de pedir perdón, si puedo…", o: ["lo arreglo", "lo rompo más", "me escondo"], a: 0, e: "Ayudamos a arreglarlo." },
    { q: "Así perdona Dios, como…", o: ["el padre que abraza", "un rey enfadado", "un lobo"], a: 0, e: "Siempre nos espera." },
  ],
  feynman: ["Qué nos enseña Jesús sobre amar", "Cómo pido perdón", "Qué hizo el padre cuando volvió su hijo"],
  mapa: mapa("AMAR Y PERDONAR", "var(--pri)", [
    ["Amar", "querer y ayudar a todos", R],
    ["Pedir perdón", "lo siento, perdóname", A],
    ["Perdonar", "te perdono", V],
    ["El padre bueno", "abraza a su hijo", M],
  ], 220),
  tarjetas: [
    ["¿Qué nos dijo Jesús?", "Amaos unos a otros"],
    ["¿Qué digo si hago daño?", "Lo siento, perdóname"],
    ["¿Qué digo si me piden perdón?", "Te perdono"],
    ["¿Qué hizo el padre del hijo que volvió?", "Lo abrazó e hizo una fiesta"],
    ["¿Para qué sirve perdonar?", "Para volver a ser amigos"],
    ["¿Qué es el rincón de la paz?", "Un lugar para hacer las paces"],
  ],
  familias: [
    "Pedid perdón vosotros también cuando os equivoquéis: es el mejor ejemplo.",
    "Haced un rincón de la paz en casa para resolver enfados.",
    "Al acostarse, hablad de si hoy hubo algo que perdonar.",
    "Leed juntos la parábola del hijo pródigo en una Biblia infantil.",
  ],
  profesores: PROF("Religión Católica (oferta voluntaria): el mandamiento del amor, el perdón como expresión del amor de Dios y la parábola del padre misericordioso", ["Rincón de la paz en el aula.", "Dramatización de la parábola del hijo pródigo.", "Rutina de pedir perdón y perdonar tras los conflictos."]),
});
