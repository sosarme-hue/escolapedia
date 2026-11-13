// Infantil 5 años · Crecimiento en armonía: mi cuerpo por dentro.
const { mapa } = require("./_util");
const { nino, ic, vin, dibujos, mural, t, flecha, FUENTES, PROF, CA, vid, nota, PIEL, MARRON } = require("./_inf5a");

// Silueta de niño con los órganos dentro.
const silueta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <circle cy="-62" r="17" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"/>
  <path d="M-22 -40 Q0 -46 22 -40 L26 18 H-26z" fill="${PIEL}" stroke="${MARRON}" stroke-width="1.5"/>
  <path d="M-22 -38 L-34 6 M22 -38 L34 6" stroke="${PIEL}" stroke-width="10" stroke-linecap="round"/>
  <path d="M-12 18 V58 M12 18 V58" stroke="${PIEL}" stroke-width="12" stroke-linecap="round"/>
</g>`;

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "5-anos",
  titulo: "Mi cuerpo por dentro",
  minutos: 15,
  objetivos: ["Saber que dentro del cuerpo hay partes que trabajan sin parar", "Conocer el corazón, los pulmones, el estómago, el cerebro y los huesos", "Cuidar el cuerpo por dentro con comida, agua, juego y descanso"],
  claves: ["corazón", "pulmones", "estómago", "cerebro", "huesos", "músculos"],
  pregunta: { texto: "Pon la mano en el pecho y quédate quieto. ¿Notas algo que hace «pum, pum»?", respuesta: "Es tu <mark>corazón</mark>. Late todo el día, también cuando duermes." },
  bloques: [
    {
      html: `<h3>Dentro de mí</h3><p>Por fuera vemos la piel, el pelo y las uñas.</p><p>Por <mark>dentro</mark> hay partes que no vemos. Trabajan todo el día, ¡también cuando duermes! Cada una tiene un trabajo.</p>`,
      svg: vin("Silueta de un niño con el corazón, los pulmones, el estómago y el cerebro dibujados dentro", `${silueta(130, 102, 1)}${ic("cerebro", 130, 40, 0.6)}${ic("pulmones", 130, 74, 0.75)}${ic("corazon", 136, 80, 0.35)}${ic("estomago", 126, 104, 0.55)}${t(40, 100, "fuera", { color: "var(--pen)" })}${t(220, 100, "dentro", { color: "var(--red)" })}`),
    },
    {
      html: `<h3>El corazón</h3><p>El <mark>corazón</mark> es como una bomba. Hace «pum, pum» y mueve la sangre por todo el cuerpo.</p><p>Si corres, late más deprisa. Si descansas, late más despacio.</p>`,
      svg: vin("Un corazón grande con la palabra pum pum y un niño corriendo", `${ic("corazon", 80, 92, 2.4)}${t(80, 160, "pum, pum", { size: 20, color: "var(--red)" })}${nino(196, 128, { pose: "corre", c: "var(--pen)" })}${t(196, 160, "corro: más rápido", { size: 14, max: 120 })}`),
    },
    {
      html: `<h3>Los pulmones</h3><p>Los <mark>pulmones</mark> se llenan de aire cuando respiramos, como dos globos.</p><p>Coge aire por la nariz: se hinchan. Suelta el aire: se deshinchan. Así el cuerpo recibe el aire que necesita.</p>`,
      svg: vin("Dos pulmones que se hinchan al coger aire y se deshinchan al soltarlo", `${ic("pulmones", 70, 86, 1.9)}${ic("pulmones", 190, 92, 1.3)}${t(70, 160, "cojo aire", { color: "var(--water)" })}${t(190, 160, "suelto aire", { color: "var(--muted)" })}`, "Respira conmigo"),
    },
    {
      html: `<h3>El estómago</h3><p>Cuando comemos, la comida baja hasta el <mark>estómago</mark>. Allí se deshace en trocitos muy pequeños.</p><p>Así el cuerpo saca la fuerza para jugar y crecer. Por eso hay que <b>masticar bien</b>.</p>`,
      svg: vin("Una manzana entra por la boca y baja al estómago", `${ic("manzana", 46, 90, 1.3)}${flecha(72, 90, 104)}${ic("boca", 130, 90, 1.2)}${flecha(156, 90, 186)}${ic("estomago", 216, 90, 1.5)}${t(130, 150, "mastico y trago", { size: 18 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Cerebro, huesos y músculos</h3><p>El <mark>cerebro</mark> está en la cabeza: piensa y manda.</p><p>Los <b>huesos</b> nos sostienen, como el palo de una tienda de campaña. Los <b>músculos</b> tiran de los huesos para movernos.</p>`,
      svg: dibujos("El cerebro piensa, los huesos sostienen y los músculos mueven", [["cerebro", "piensa", "var(--pen)"], ["hueso", "sostiene", "var(--muted)"], ["musculo", "mueve", "var(--red)"]]),
    },
    {
      html: `<h3>Juego: ¡escucha tu corazón!</h3><p>Pon la mano en el pecho y cuenta los latidos. Ahora da <mark>diez saltos</mark>.</p><p>Vuelve a poner la mano. ¿Late más fuerte y más rápido? ¡Tu corazón está trabajando!</p>`,
      svg: vin("Un niño salta y después se toca el pecho para notar el corazón", `${nino(70, 136, { pose: "salta", c: "var(--leaf)", nina: true })}${t(70, 160, "salto 10 veces", { size: 15, max: 120 })}${flecha(110, 90, 150)}${ic("corazon", 196, 88, 1.8)}${t(196, 160, "¡pum, pum, pum!", { size: 15, color: "var(--red)", max: 120 })}`),
    },
  ],
  figura: {
    titulo: "Lo que hay dentro de mí",
    svg: mural("Mural: corazón, pulmones, estómago, cerebro, huesos y músculos con lo que hace cada uno", [["corazon", "corazón", "mueve la sangre", "var(--red)"], ["pulmones", "pulmones", "cogen aire", "var(--water)"], ["estomago", "estómago", "deshace la comida", "var(--inf)"], ["cerebro", "cerebro", "piensa y manda", "var(--pen)"], ["hueso", "huesos", "nos sostienen", "var(--muted)"], ["musculo", "músculos", "nos mueven", "var(--leaf)"]]),
  },
  video: vid("c_G15RXKUbk", "Órganos del cuerpo humano", "Academia Play", 3232931, "órganos del cuerpo humano para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Dónde está el corazón?", pasos: ["Ponemos la mano en el centro del pecho, un poco a la izquierda.", "Nos quedamos muy quietos.", "Notamos el «pum, pum»."], resultado: "el corazón está en el pecho." },
    { enunciado: "¿Qué pasa cuando cogemos aire?", pasos: ["Ponemos las manos en la tripa y el pecho.", "Cogemos aire por la nariz despacio.", "Notamos que el pecho se hincha."], resultado: "los pulmones se llenan de aire como globos." },
  ],
  errores: [
    "Pensar que el corazón tiene forma de corazón de dibujo: el de verdad parece más bien un puño.",
    "Creer que la comida va a las piernas: primero va al estómago.",
    "Pensar que los huesos son blandos: son duros y nos sostienen.",
  ],
  ejercicios: [
    { q: "Pon la mano en el pecho y escucha tu corazón.", sol: nota("después de correr un poco, que vuelva a escucharlo y compare.") },
    { q: "Coge aire como un globo y suéltalo despacio, cinco veces.", sol: nota("es un buen ejercicio para calmarse antes de dormir.") },
    { q: "Señala dónde está tu cabeza, tu pecho y tu tripa.", sol: nota("nombrad lo que hay dentro: cerebro, corazón y pulmones, estómago.") },
    { q: "Dibuja una silueta tuya y pinta dentro un corazón rojo.", sol: nota("podéis dibujar la silueta en papel grande con el niño tumbado encima.") },
    { q: "Toca tu brazo: ¿notas algo duro dentro?", sol: nota("es el hueso. Mirad juntos una radiografía o un esqueleto de juguete si tenéis.") },
    { q: "Muestra tu músculo del brazo, como un forzudo.", sol: nota("explicad que el músculo tira del hueso para doblar el brazo.") },
  ],
  quiz: [
    { q: "¿Qué hace «pum, pum» en el pecho?", o: ["el estómago", "el corazón", "la nariz"], a: 1, e: "El corazón late." },
    { q: "Se llenan de aire como globos…", o: ["los pulmones", "los huesos", "los dientes"], a: 0, e: "Los pulmones." },
    { q: "¿Adónde va la comida?", o: ["a la cabeza", "al estómago", "a los pies"], a: 1, e: "Al estómago." },
    { q: "¿Qué piensa y manda?", o: ["el cerebro", "el codo", "la rodilla"], a: 0, e: "El cerebro, en la cabeza." },
    { q: "Nos sostienen como palos…", o: ["los pelos", "las uñas", "los huesos"], a: 2, e: "Los huesos." },
    { q: "Si corro, el corazón late…", o: ["más rápido", "más despacio", "nada"], a: 0, e: "Más rápido." },
  ],
  examen: [
    { q: "¿Dónde está el cerebro?", o: ["en la cabeza", "en la tripa", "en la mano"], a: 0, e: "En la cabeza." },
    { q: "Para respirar usamos…", o: ["los pulmones", "el estómago", "los huesos"], a: 0, e: "Los pulmones." },
    { q: "Para movernos, los músculos tiran de…", o: ["los huesos", "el pelo", "la ropa"], a: 0, e: "De los huesos." },
  ],
  feynman: ["Qué hace el corazón", "Para qué sirven los pulmones", "Adónde va la comida"],
  mapa: mapa("MI CUERPO POR DENTRO", "var(--inf)", [
    ["Corazón", "late: pum, pum", "var(--red)"],
    ["Pulmones", "cogen aire", "var(--water)"],
    ["Estómago", "deshace la comida", "var(--inf)"],
    ["Cerebro y huesos", "piensa · sostiene", "var(--pen)"],
  ], 220),
  tarjetas: [
    ["¿Qué hace pum, pum?", "El corazón"],
    ["¿Qué se llena de aire?", "Los pulmones"],
    ["¿Dónde va la comida?", "Al estómago"],
    ["¿Qué piensa?", "El cerebro"],
    ["¿Qué nos sostiene?", "Los huesos"],
    ["¿Qué nos mueve?", "Los músculos"],
  ],
  familias: [
    "Escuchad juntos el corazón con la oreja en el pecho del otro.",
    "Respirad como globos antes de dormir: coger aire, soltar despacio.",
    "Al comer, recordad que la comida baja al estómago y que hay que masticar bien.",
    "Buscad en un libro o un puzle del cuerpo humano dónde está cada parte.",
  ],
  profesores: PROF(CA, "Progresivo autoconocimiento: el cuerpo, sus partes internas principales y sus funciones básicas; hábitos de cuidado y vida saludable", ["Silueta a tamaño real en papel continuo con los órganos recortados y pegados.", "Escuchar el corazón en reposo y después de saltar, y comparar.", "Respiración del globo como rutina de calma tras el patio."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
