// Infantil 3 años · Descubrimiento y exploración del entorno: Arriba y abajo, dentro y fuera. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { I, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)";

// Mesa grande dibujada a mano (sobre ella y debajo caben cosas).
const mesa = (x) => `<rect x="${x - 50}" y="80" width="100" height="10" rx="3" fill="#a0703c"/><path d="M${x - 42} 90 V150 M${x + 42} 90 V150" stroke="#a0703c" stroke-width="7"/>`;
// Caja abierta grande.
const caja = (x) => `<g transform="translate(${x} 112) scale(2.4)">${I.caja}</g>`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "Arriba y abajo, dentro y fuera",
  minutos: 10,
  objetivos: ["Entender y usar arriba y abajo", "Entender y usar dentro y fuera", "Colocar objetos y el propio cuerpo siguiendo una orden"],
  claves: ["arriba", "abajo", "dentro", "fuera", "encima", "debajo"],
  pregunta: {
    texto: "¿Dónde está el sol: arriba en el cielo o abajo en el suelo?",
    respuesta: "El sol está <mark>arriba</mark>, en el cielo. Nuestros pies están <mark>abajo</mark>, en el suelo.",
  },
  bloques: [
    {
      html: `<h3>Arriba y abajo</h3><p>El gato está <mark>arriba</mark>, encima de la mesa. El perro está <mark>abajo</mark>, debajo de la mesa.</p><p>Arriba está el cielo, con el sol y los pájaros. Abajo está el suelo, que pisamos.</p>`,
      svg: escena("Un gato arriba, encima de la mesa, y un perro abajo, debajo de la mesa", `${mesa(130)}${ic("gato", 130, 60, 1.3)}${ic("perro", 130, 130, 1.2)}${t(46, 64, "arriba", 20, A, 80)}${t(214, 138, "abajo", 20, R, 80)}`, ""),
      video: vid("gc5bFNZl9mw", "Arriba y abajo: aprendemos cantando", "Balloon and Ben", 2623173),
    },
    {
      html: `<h3>Con mi cuerpo</h3><p>Levanta las manos muy <mark>arriba</mark>, hacia el techo. ¡Estírate!</p><p>Ahora toca el suelo, <mark>abajo</mark>. ¡Agáchate!</p><p>Arriba, abajo, arriba, abajo… ¡cada vez más rápido!</p>`,
      svg: escena("Un niño con las manos arriba y otro tocando el suelo abajo", `${ic("nino", 70, 74, 1.4)}<path d="M70 94 V138 M70 102 L50 66 M70 102 L90 66 M70 138 L58 164 M70 138 L82 164" stroke="var(--pen)" stroke-width="7" stroke-linecap="round" fill="none"/>
        ${ic("nina", 190, 112, 1.3)}<path d="M190 132 Q176 150 168 164 M190 132 Q204 150 212 164" stroke="var(--red)" stroke-width="7" stroke-linecap="round" fill="none"/>
        ${t(118, 40, "¡arriba!", 19, A, 90)}${t(232, 80, "¡abajo!", 17, R, 60)}`, ""),
    },
    {
      html: `<h3>Dentro y fuera</h3><p>La pelota roja está <mark>dentro</mark> de la caja. La pelota azul está <mark>fuera</mark>, en el suelo.</p><p>Si cierro la caja, la de dentro no se ve. ¡Está guardada!</p>`,
      svg: escena("Una pelota dentro de la caja y otra fuera", `${ic("pelota", 92, 98, 1)}${caja(92)}${ic("pelota", 200, 136, 1.1)}${t(92, 172, "dentro", 20, A, 90)}${t(200, 172, "fuera", 20, R, 90)}`, ""),
    },
    {
      html: `<h3>Dentro y fuera de casa</h3><p>Cuando llueve, jugamos <mark>dentro</mark> de casa. Cuando hace sol, salimos <mark>fuera</mark>, al parque.</p><p>El pez vive dentro del agua. El pájaro vuela fuera de la jaula, ¡libre!</p>`,
      svg: escena("Un pez dentro de la pecera y un pájaro fuera", `<rect x="40" y="70" width="100" height="80" rx="16" fill="#bfe3ff" stroke="var(--water)" stroke-width="3"/>${ic("pez", 90, 112, 1.5)}${ic("pajaro", 208, 72, 1.4)}${t(90, 172, "dentro", 20, A, 90)}${t(208, 130, "fuera", 20, R, 90)}`, ""),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Estas palabras nos ayudan a <mark>encontrar las cosas</mark>.</p><p>«Tus zapatos están debajo de la cama». «Los juguetes van dentro de la caja».</p><p>Así entendemos dónde está todo y recogemos mejor.</p>`,
      svg: lista("Las palabras de posición ayudan: los zapatos debajo de la cama, los juguetes dentro de la caja", [["Zapatos debajo de la cama", A], ["Juguetes dentro de la caja", N], ["El libro encima de la mesa", V]], { titulo: "¿Dónde está?" }),
    },
    {
      html: `<h3>Jugamos al aro</h3><p>Pon un aro o una cuerda en círculo en el suelo.</p><p>Un adulto dice: «<mark>¡Dentro!</mark>», y saltas dentro del aro. «<mark>¡Fuera!</mark>», y saltas fuera.</p><p>Si se equivoca el adulto, ¡te ríes!</p>`,
      svg: escena("Un aro en el suelo: un niño salta dentro y una niña está fuera", `<ellipse cx="96" cy="140" rx="64" ry="22" fill="none" stroke="var(--inf)" stroke-width="6"/>${ic("nino", 96, 104, 1.4)}${ic("nina", 212, 112, 1.3)}${t(96, 56, "¡dentro!", 20, A, 100)}${t(212, 64, "¡fuera!", 20, R, 90)}`, ""),
    },
  ],
  figura: {
    titulo: "Arriba y abajo, dentro y fuera",
    svg: mural("Posiciones: arriba como el sol, abajo como el suelo, dentro de la caja y fuera en el parque", [["sol", "arriba", "en el cielo", A], ["pie", "abajo", "en el suelo", R], ["caja", "dentro", "de la caja", N], ["arbol", "fuera", "en el parque", V]], "¿Dónde está?"),
  },
  video: { ...vid("WciEese8lAo", "Conceptos espaciales: arriba, abajo, dentro, fuera", "Peques Aprenden Jugando", 320189), busqueda: "arriba abajo dentro fuera niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Dónde está el osito?",
      pasos: ["Ponemos el osito encima de la silla.", "Preguntamos: ¿arriba o abajo de la silla?"],
      resultado: "el osito está arriba, encima de la silla." },
    { enunciado: "Guardamos las pinturas.",
      pasos: ["Abrimos el estuche.", "Metemos las pinturas una a una y cerramos."],
      resultado: "las pinturas están dentro del estuche." },
  ],
  errores: [
    "Enseñar las cuatro palabras a la vez: primero arriba y abajo; después dentro y fuera.",
    "Quedarse en la ficha: estas nociones se aprenden con el cuerpo y con objetos de verdad.",
    "Usar palabras distintas cada vez: mantened «dentro» y «fuera» hasta que las domine.",
  ],
  ejercicios: [
    { q: "Pon tu peluche encima de la cama. Ahora debajo.", sol: "Para la familia: decid «arriba» y «abajo» con cada movimiento." },
    { q: "Mete tres bloques dentro de una caja y saca uno fuera.", sol: "Para la familia: preguntad cuántos quedan dentro." },
    { q: "Juega a «arriba, abajo» con las manos.", sol: "Para la familia: id cada vez más rápido." },
    { q: "Salta dentro y fuera de un aro o de un círculo de tiza.", sol: "Para la familia: un juego perfecto para el parque." },
    { q: "Esconde un juguete y da pistas: «está debajo de…».", sol: "Para la familia: después cambiad los papeles." },
    { q: "Dibuja una pelota dentro de una caja.", sol: "Para la familia: dibujad vosotros la caja y que él dibuje la pelota." },
  ],
  quiz: [
    { q: "El sol está…", o: ["arriba", "abajo", "dentro de la caja"], a: 0, e: "Arriba, en el cielo." },
    { q: "Los pies pisan…", o: ["abajo, el suelo", "arriba, el techo", "dentro del armario"], a: 0, e: "El suelo, abajo." },
    { q: "Si guardo la pelota en la caja, está…", o: ["dentro", "fuera", "arriba del cielo"], a: 0, e: "Dentro." },
    { q: "El pez de la pecera vive…", o: ["dentro del agua", "fuera del agua", "en un árbol"], a: 0, e: "Dentro del agua." },
    { q: "Para tocar el techo estiro las manos hacia…", o: ["arriba", "abajo", "dentro"], a: 0, e: "Arriba." },
    { q: "El parque está…", o: ["fuera de casa", "dentro de la nevera", "debajo de la cama"], a: 0, e: "Fuera de casa." },
  ],
  examen: [
    { q: "Debajo de la mesa es…", o: ["abajo", "arriba", "fuera"], a: 0, e: "Abajo." },
    { q: "Lo contrario de «dentro» es…", o: ["fuera", "arriba", "grande"], a: 0, e: "Fuera." },
    { q: "Lo contrario de «arriba» es…", o: ["abajo", "dentro", "pequeño"], a: 0, e: "Abajo." },
  ],
  feynman: ["Qué está arriba y qué abajo", "Qué es estar dentro o fuera", "Cómo coloco las cosas"],
  mapa: mapa("¿DÓNDE ESTÁ?", "var(--pri)", [
    ["Arriba", "el sol, el techo", A],
    ["Abajo", "el suelo, debajo", R],
    ["Dentro", "en la caja", N],
    ["Fuera", "en el parque", V],
  ], 220),
  tarjetas: [
    ["¿Dónde está el cielo?", "Arriba"],
    ["¿Dónde está el suelo?", "Abajo"],
    ["Pelota en la caja", "Dentro"],
    ["Jugar en el parque", "Fuera"],
    ["Lo contrario de arriba", "Abajo"],
    ["Lo contrario de dentro", "Fuera"],
  ],
  familias: [
    "Al recoger, dad órdenes con posición: «mete los coches dentro de la caja».",
    "Jugad al escondite de objetos dando pistas: debajo, encima, dentro.",
    "En el parque, usad el tobogán y los túneles para decir arriba, abajo, dentro y fuera.",
    "Leed cuentos con solapas y preguntad dónde está cada personaje.",
  ],
  profesores: PROF("Diálogo corporal con el entorno: nociones espaciales básicas (arriba/abajo, dentro/fuera, encima/debajo) con el propio cuerpo y con objetos", [
    "Circuito psicomotor con aros, túneles y bancos para vivir cada noción.",
    "Juego de órdenes con un peluche y una caja.",
    "Canción con gestos de arriba y abajo en la asamblea.",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
