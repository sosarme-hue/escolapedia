// Infantil 4 años · Crecimiento en armonía: las partes del cuerpo.
const { marco, dibujos, lista, nino, bocadillo, t, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

const raya = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>`;

module.exports = {
  materia: "Crecimiento en armonía",
  curso: "4-anos",
  titulo: "Las partes del cuerpo",
  minutos: 15,
  objetivos: ["Nombrar la cabeza, el tronco, los brazos y las piernas", "Señalar las partes de la cara", "Decir dónde le duele o qué parte mueve"],
  claves: ["cabeza", "tronco", "brazos", "piernas"],
  pregunta: {
    texto: "¿Con qué parte del cuerpo das una patada a la pelota? ¿Y con cuál la coges?",
    respuesta: "La patada se da con el <mark>pie</mark>, al final de la pierna. La pelota se coge con las <mark>manos</mark>, al final de los brazos.",
  },
  bloques: [
    {
      html: `<h3>Mi cuerpo</h3><p>Tengo un cuerpo que se mueve, juega y crece.</p><p>Tiene partes grandes: la <mark>cabeza</mark>, el <mark>tronco</mark>, los <b>brazos</b> y las <b>piernas</b>. ¡Vamos a tocarlas una a una! Empezamos por arriba.</p>`,
      svg: marco("Un niño grande con flechas a la cabeza, el tronco, los brazos y las piernas", `${nino(130, 168, { s: 2, c: "var(--pen)" })}${raya(118, 40, 70, 30)}${t(42, 34, "cabeza", { color: "var(--red)", size: 17 })}${raya(136, 100, 196, 88)}${t(222, 92, "tronco", { color: "var(--pen)", size: 17 })}${raya(108, 92, 60, 110)}${t(40, 124, "brazo", { color: "var(--leaf)", size: 17 })}${raya(144, 150, 196, 150)}${t(222, 156, "pierna", { color: "var(--inf)", size: 17 })}`),
    },
    {
      html: `<h3>La cabeza y la cara</h3><p>En la cabeza tenemos el pelo y la cara.</p><p>En la cara están los <mark>ojos</mark>, la <mark>nariz</mark>, la <mark>boca</mark> y, a los lados, las <b>orejas</b>. El <b>cuello</b> une la cabeza con el tronco.</p>`,
      svg: dibujos("Ojo, nariz, boca y oreja", [["ojo", "ojo", "var(--water)"], ["nariz", "nariz", "var(--red)"], ["boca", "boca", "var(--red)"], ["oreja", "oreja", "var(--pen)"]], { titulo: "En la cara" }),
    },
    {
      html: `<h3>El tronco</h3><p>El tronco es la parte del medio del cuerpo.</p><p>Delante están el <mark>pecho</mark> y la <mark>barriga</mark>, con el ombligo. Detrás está la <b>espalda</b>. Dentro del pecho late el corazón: pum, pum. Pon la mano en el pecho y escúchalo.</p>`,
      svg: marco("Un niño con el pecho, la barriga y la espalda señalados", `${nino(70, 168, { s: 2, c: "var(--water)" })}${raya(80, 74, 140, 50)}${t(196, 54, "pecho", { color: "var(--pen)", size: 20 })}${raya(80, 106, 140, 96)}${t(196, 100, "barriga", { color: "var(--inf)", size: 20 })}${t(196, 146, "detrás: espalda", { color: "var(--muted)", size: 16, max: 110 })}`),
    },
    {
      html: `<h3>Brazos y piernas</h3><p>Los <mark>brazos</mark> terminan en las <b>manos</b>, con cinco dedos. Las <mark>piernas</mark> terminan en los <b>pies</b>.</p><p>Con las manos cogemos y pintamos. Con los pies andamos, saltamos y corremos. ¡Mueve los dedos de las manos y de los pies!</p>`,
      svg: dibujos("Una mano y un pie", [["mano", "mano", "var(--leaf)"], ["pie", "pie", "var(--inf)"]], { nota: "5 dedos en cada mano y en cada pie" }),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Si sé cómo se llama cada parte, puedo decir <mark>dónde me duele</mark>: «me duele la barriga».</p><p>También me ayuda a vestirme solo: los calcetines van en los pies y el gorro en la cabeza.</p>`,
      svg: lista("Tres frases: me duele la barriga, el gorro en la cabeza, los zapatos en los pies", [["Me duele la barriga", "var(--red)"], ["El gorro, en la cabeza", "var(--pen)"], ["Los zapatos, en los pies", "var(--leaf)"]]),
    },
    {
      html: `<h3>Juego: Simón dice</h3><p>El adulto manda: «Simón dice: <mark>tócate la nariz</mark>». ¡Tócala rápido!</p><p>Si no dice «Simón dice», no te muevas. Después cambiamos y mandas tú. ¡Gana quien no se equivoca ni una vez!</p>`,
      svg: marco("Dos niños juegan: uno dice tócate la nariz y el otro se la toca", `${bocadillo(130, 34, 170, "¡Tócate la nariz!", 16)}${nino(80, 160, { s: 1.5, pose: "canta", c: "var(--red)" })}${nino(180, 160, { s: 1.5, pose: "palmas", c: "var(--leaf)", nina: true })}`),
    },
  ],
  figura: figura("Las partes de mi cuerpo", "Cabeza, ojo, mano y pie", [["nino", "cabeza", "var(--red)"], ["ojo", "cara", "var(--water)"], ["mano", "brazos", "var(--leaf)"], ["pie", "piernas", "var(--inf)"]]),
  video: vid("71hiB8Z-03k", "Cabeza, hombros, rodillas y pies", "ChuChuTV Español", 58205759, "cabeza hombros rodillas y pies canción"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Delante del espejo, buscamos la cara.", pasos: ["Toca tus ojos y ciérralos.", "Toca tu nariz y huele.", "Toca tu boca y sonríe."], resultado: "ojos, nariz y boca están en la cara." },
    { enunciado: "¿Dónde va cada prenda?", pasos: ["El gorro: lo pongo en la cabeza.", "Los guantes: en las manos.", "Los zapatos: en los pies."], resultado: "cada prenda tapa una parte del cuerpo." },
  ],
  errores: [
    "Decir «brazo» por «pierna»: el brazo va arriba y termina en la mano; la pierna va abajo y termina en el pie.",
    "Pensar que la espalda está delante: la espalda está detrás, no la vemos sin espejo.",
    "Olvidar el cuello y el tronco al dibujar: la cabeza no va pegada a las piernas.",
  ],
  ejercicios: [
    { q: "Toca tu cabeza, tu barriga y tus pies.", sol: "Nota para la familia: id despacio y nombrad cada parte en voz alta." },
    { q: "Señala en un muñeco los ojos, la nariz y la boca.", sol: "Si duda, que se toque primero su propia cara." },
    { q: "Cuenta los dedos de una mano.", sol: "Son 5. Contadlos tocándolos uno a uno." },
    { q: "Dibuja una persona con cabeza, tronco, brazos y piernas.", sol: "Basta con un círculo, un óvalo y cuatro palitos. Revisad que no falte ninguna parte." },
    { q: "Juega a Simón dice con tres partes del cuerpo.", sol: "Por ejemplo: orejas, rodillas y codos." },
    { q: "Di qué parte usas para escuchar música.", sol: "Las orejas." },
  ],
  quiz: [
    { q: "¿Dónde están los ojos?", o: ["En la barriga", "En la cara", "En el pie"], a: 1, e: "Los ojos están en la cara, en la cabeza." },
    { q: "Las manos están al final de…", o: ["las piernas", "el cuello", "los brazos"], a: 2, e: "Los brazos terminan en las manos." },
    { q: "¿Con qué das una patada?", o: ["Con el pie", "Con la mano", "Con la oreja"], a: 0, e: "La patada se da con el pie." },
    { q: "La barriga está en…", o: ["la cabeza", "el brazo", "el tronco"], a: 2, e: "Pecho, barriga y espalda forman el tronco." },
    { q: "¿Cuántos dedos tiene una mano?", o: ["5", "3", "10"], a: 0, e: "Cada mano tiene 5 dedos." },
    { q: "¿Qué une la cabeza con el tronco?", o: ["La rodilla", "El cuello", "El codo"], a: 1, e: "El cuello sostiene la cabeza." },
  ],
  examen: [
    { q: "¿Con qué olemos?", o: ["Con la mano", "Con la nariz", "Con la espalda"], a: 1, e: "La nariz está en la cara." },
    { q: "Los pies están al final de…", o: ["las piernas", "los brazos", "el cuello"], a: 0, e: "Las piernas terminan en los pies." },
    { q: "La espalda está…", o: ["delante", "en la cara", "detrás"], a: 2, e: "La espalda es la parte de atrás del tronco." },
  ],
  feynman: ["Las partes grandes del cuerpo", "Qué hay en la cara", "Para qué sirven manos y pies"],
  mapa: mapa("MI CUERPO", "var(--inf)", [
    ["Cabeza", "pelo, cara y orejas", "var(--red)"],
    ["Tronco", "pecho, barriga, espalda", "var(--pen)"],
    ["Brazos", "terminan en las manos", "var(--leaf)"],
    ["Piernas", "terminan en los pies", "var(--water)"],
  ], 220),
  tarjetas: [
    ["¿Dónde está la nariz?", "En la cara"],
    ["¿En qué terminan los brazos?", "En las manos"],
    ["¿En qué terminan las piernas?", "En los pies"],
    ["¿Qué hay detrás del tronco?", "La espalda"],
    ["¿Con qué escuchamos?", "Con las orejas"],
    ["¿Cuántos dedos tiene una mano?", "5"],
  ],
  familias: [
    "En el baño, nombrad cada parte que se enjabona: «ahora los codos, ahora las rodillas».",
    "Cantad una canción de mover partes del cuerpo y paraos en una cada vez.",
    "Dibujad su silueta en un papel grande y que pegue pegatinas en la cabeza, las manos y los pies.",
    "Cuando se vista, preguntadle: «¿dónde va el calcetín?».",
  ],
  profesores: PROF("Crecimiento en armonía: progresivo autoconocimiento, imagen global y segmentaria del cuerpo e identificación de sus partes", ["Siluetas a tamaño real en papel continuo.", "Puzle de la figura humana en 6 piezas.", "Juegos de imitación frente al espejo."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
