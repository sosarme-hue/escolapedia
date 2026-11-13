// Educación Física 2º de Primaria: mi cuerpo en movimiento. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, corazon, flechaR, cono, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const punto = (x, y, c = P.rojo) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}" stroke="#fff" stroke-width="1.5"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "Mi cuerpo en movimiento",
  minutos: 20,
  objetivos: ["Reconocer las articulaciones y mover cada parte del cuerpo por separado", "Distinguir derecha e izquierda en uno mismo y en los demás", "Notar los cambios del cuerpo al moverse: corazón, respiración y músculos"],
  claves: ["esquema corporal", "articulación", "lateralidad", "derecha", "izquierda", "tenso", "relajado", "calentamiento"],
  pregunta: {
    texto: "¿Puedes mover solo un dedo sin mover la mano? ¿Y solo un hombro?",
    respuesta: "¡Seguro que sí! Nuestro cuerpo puede mover <mark>cada parte por separado</mark>. Cuanto mejor conocemos nuestro cuerpo, mejor lo controlamos al correr, saltar y jugar.",
  },
  bloques: [
    {
      html: `<h3>Conozco mi cuerpo</h3><p>Ya sabes que el cuerpo tiene <mark>cabeza, tronco, brazos y piernas</mark>.</p><p>Este año damos un paso más: aprendemos a mover cada parte por separado y a saber dónde está cada una sin mirar.</p><p>Prueba con los ojos cerrados: tócate la nariz, la rodilla izquierda y el codo derecho. ¡Tu cerebro sabe dónde está todo!</p>`,
      svg: svg("Un niño con puntos en las partes que sabe encontrar", `${nino(80, 160, { c: P.azul, s: 2, pose: "pie" })}${punto(80, 56)}${punto(70, 140)}${punto(98, 98)}${etq(190, 60, "nariz", P.rojo)}${etq(190, 96, "codo derecho", P.rojo)}${etq(190, 132, "rodilla izquierda", P.rojo)}`),
      video: V("ef1b"),
    },
    {
      html: `<h3>Las articulaciones</h3><p>Las <mark>articulaciones</mark> son los sitios donde el cuerpo se dobla o gira.</p><p>De arriba abajo: <b>cuello</b>, <b>hombros</b>, <b>codos</b>, <b>muñecas</b>, <b>cadera</b>, <b>rodillas</b> y <b>tobillos</b>.</p><p>Algunas solo se doblan, como la rodilla. Otras giran en círculo, como el hombro. ¡Prueba a hacer círculos con cada una!</p>`,
      svg: svg("Un cuerpo con puntos rojos en las articulaciones: cuello, hombros, codos, muñecas, cadera, rodillas y tobillos", `${nino(90, 166, { c: P.verde, s: 2.2, pose: "brazos" })}${[[90, 54], [72, 70], [108, 70], [50, 72], [130, 72], [90, 112], [80, 138], [100, 138]].map(([x, y]) => punto(x, y)).join("")}${["cuello", "hombros", "codos", "cadera", "rodillas", "tobillos"].map((t, i) => etq(206, 34 + i * 24, t, i % 2 ? P.azul : P.rojo, 12)).join("")}`),
    },
    {
      html: `<h3>Mover una parte sola</h3><p>Mover una sola parte del cuerpo y dejar el resto quieto se llama <mark>disociar</mark>.</p><p>Es difícil al principio. Prueba: levanta solo un hombro. Gira solo la cabeza. Mueve solo el pie derecho mientras el izquierdo se queda quieto.</p><p>Los bailarines y los deportistas lo practican mucho. Así sus movimientos son precisos y elegantes.</p>`,
      svg: svg("Una niña levanta solo un brazo mientras el resto del cuerpo queda quieto", `${nino(80, 160, { c: P.morado, s: 1.8, nina: true, pose: "pie" })}<path d="M94 82 L120 40" stroke="${P.morado}" stroke-width="7" stroke-linecap="round"/><circle cx="121" cy="38" r="5" fill="${P.piel}"/>${etq(186, 64, "se mueve", P.rojo, 13)}${flechaR(150, 66, 128, 52, P.rojo)}${etq(186, 130, "quieto", P.azul, 13)}`),
    },
    {
      html: `<h3>Derecha e izquierda</h3><p>Ya sabes cuál es tu <mark>mano derecha</mark>. Ahora usamos la derecha y la izquierda en todo el cuerpo: ojo, oreja, pierna y pie.</p><p>Prueba: tócate la oreja izquierda con la mano derecha. ¡Cruzar es más difícil!</p><p>Cuando caminamos, también giramos a la derecha o a la izquierda. Es muy útil para seguir un camino.</p>`,
      svg: svg("Un niño de espaldas con flechas: a su derecha y a su izquierda", `${nino(130, 160, { c: P.azul, s: 1.8, pose: "brazos" })}<circle cx="130" cy="48" r="19" fill="var(--ink)"/>${flechaR(90, 90, 30, 90, P.rojo)}${etq(54, 72, "izquierda", P.rojo, 13)}${flechaR(170, 90, 230, 90, P.verde)}${etq(206, 72, "derecha", P.verde, 13)}${etq(130, 176, "visto de espaldas", "var(--muted)", 11)}`),
    },
    {
      html: `<h3>El espejo</h3><p>Cuando un compañero está <mark>de frente</mark>, su derecha está en nuestra izquierda.</p><p>Por eso, si él levanta la mano derecha, en el espejo parece la izquierda.</p><p>Jugamos al <b>espejo</b>: por parejas, uno hace movimientos despacio y el otro los copia como si fuera su reflejo. ¡Hay que estar muy atentos!</p>`,
      svg: svg("Dos niños frente a frente como en un espejo, levantando el brazo del mismo lado", `${nino(70, 156, { c: P.rojo, s: 1.6, pose: "pie" })}<path d="M82 92 L104 54" stroke="${P.rojo}" stroke-width="6" stroke-linecap="round"/>${nino(190, 156, { c: P.azul, s: 1.6, pose: "pie" })}<path d="M178 92 L156 54" stroke="${P.azul}" stroke-width="6" stroke-linecap="round"/><path d="M130 30 V160" stroke="${P.celeste}" stroke-width="4" stroke-dasharray="8 6"/>${etq(130, 176, "espejo", P.celeste, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Tenso y relajado</h3><p>Los músculos pueden estar <mark>tensos</mark> o <mark>relajados</mark>.</p><p><b>Tenso</b> es apretar fuerte, como un robot o una estatua de piedra. <b>Relajado</b> es blando y suelto, como un muñeco de trapo o un espagueti cocido.</p><p>Prueba: aprieta el puño muy fuerte, cuenta hasta cinco y suéltalo. ¿Notas la diferencia?</p>`,
      svg: svg("Un robot tenso y rígido y un muñeco de trapo blando y relajado", `<rect x="44" y="40" width="40" height="34" rx="4" fill="${P.gris}" stroke="var(--ink)"/><rect x="38" y="80" width="52" height="46" rx="4" fill="${P.gris}" stroke="var(--ink)"/><path d="M38 90 H18 M90 90 H110 M52 126 V156 M76 126 V156" stroke="${P.gris}" stroke-width="8"/><circle cx="56" cy="56" r="4" fill="var(--ink)"/><circle cx="72" cy="56" r="4" fill="var(--ink)"/>${etq(64, 172, "tenso: robot", P.azul, 12)}<g transform="translate(190 0)"><circle cx="0" cy="54" r="16" fill="${P.piel}" stroke="var(--ink)"/><path d="M0 70 Q6 100 0 124 M0 80 Q-22 96 -30 120 M0 80 Q22 96 30 118 M0 124 Q-16 140 -14 158 M0 124 Q18 140 12 158" stroke="${P.naranja}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M-6 58 q6 4 12 0" stroke="var(--ink)" stroke-width="2" fill="none"/></g>${etq(190, 172, "relajado: trapo", P.naranja, 12)}`),
    },
    {
      html: `<h3>El corazón se acelera</h3><p>Cuando nos movemos mucho, el cuerpo <mark>cambia</mark>.</p><p>El <b>corazón</b> late más deprisa, respiramos más rápido, sudamos y nos ponemos rojos. Es normal: el cuerpo trabaja más y necesita más aire.</p><p>Pon la mano en el pecho antes y después de correr. ¿Cuántos latidos notas? Después de descansar, el corazón vuelve a ir despacio.</p>`,
      svg: svg("Un corazón pequeño y tranquilo en reposo y un corazón grande que late rápido al correr", `${corazon(66, 84, 2.6, P.rojo)}${etq(66, 128, "en reposo:", "var(--ink)", 12)}${etq(66, 146, "pum… pum…", P.rojo, 12)}${corazon(190, 84, 4, P.rojo)}${etq(190, 128, "al correr:", "var(--ink)", 12)}${etq(190, 146, "¡pum-pum-pum!", P.rojo, 12)}`),
    },
    {
      html: `<h3>Calentar en orden</h3><p>Antes de jugar hacemos un <mark>calentamiento</mark>. Prepara los músculos y evita lesiones.</p><p>Un truco para no olvidar nada: ir <b>de arriba abajo</b>. Primero el cuello, después los hombros, los brazos, la cintura, las rodillas y los tobillos.</p><p>Luego trotamos un poco. Al terminar la clase, estiramos despacio y respiramos tranquilos.</p>`,
      svg: svg("Orden del calentamiento de arriba abajo: cuello, hombros, cintura, rodillas, tobillos, y después trotar", `${nino(64, 164, { c: P.verde, s: 2, pose: "brazos" })}${["1 cuello", "2 hombros", "3 cintura", "4 rodillas", "5 tobillos"].map((t, i) => etq(170, 34 + i * 24, t, "var(--ink)", 12)).join("")}${flechaR(124, 30, 124, 140, P.rojo)}${etq(196, 160, "6 ¡a trotar!", P.rojo, 13)}`),
    },
    {
      html: `<h3>Jugamos al director de orquesta</h3><p>Nos ponemos en <mark>corro</mark>. Un niño sale fuera y no mira. Otro es el director.</p><p>El director hace movimientos: mueve un hombro, gira la muñeca, dobla una rodilla. Todos le copian sin mirarle directamente.</p><p>El que estaba fuera entra y debe descubrir quién es el director. ¡Hay que cambiar de movimiento sin que te pillen!</p>`,
      svg: svg("Un corro de niños que copian los movimientos del director mientras otro niño en el centro intenta adivinar quién es", `${[[130, 62], [40, 100], [220, 100], [62, 152], [198, 152]].map(([x, y], i) => nino(x, y, { c: [P.rojo, P.azul, P.verde, P.naranja, P.morado][i], pose: "arriba", s: 0.7 })).join("")}${nino(130, 132, { c: P.gris, pose: "pie", s: 0.7 })}${etq(130, 176, "¿quién es el director?", "var(--pen)", 12)}`),
    },
  ],
  figura: {
    titulo: "Mi cuerpo en movimiento",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un cuerpo con sus articulaciones, la derecha y la izquierda, y un corazón que late más rápido al moverse"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${nino(160, 280, { c: P.azul, s: 3.4, pose: "brazos" })}${[[160, 104], [130, 132], [190, 132], [160, 200], [143, 238], [177, 238]].map(([x, y]) => punto(x, y)).join("")}${rot(40, 150, "izq.", { size: 16, color: P.rojo })}${rot(280, 150, "dcha.", { size: 16, color: P.verde })}${rot(460, 60, "Articulaciones: se doblan y giran", { size: 16 })}${rot(460, 110, "Tenso ↔ relajado", { size: 16 })}${corazon(460, 190, 4, P.rojo)}${rot(460, 250, "Al moverme, el corazón va más rápido", { size: 15, color: P.rojo })}</svg>`,
  },
  video: V("ef1v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Haz círculos con cada articulación, de arriba abajo.",
      pasos: ["Cuello: despacio, a un lado y a otro.", "Hombros, muñecas y cadera: círculos.", "Rodillas y tobillos: círculos pequeños."],
      resultado: "Ya has calentado todo el cuerpo." },
    { enunciado: "Tu compañero, de frente, levanta su mano derecha. ¿Qué lado ves?",
      pasos: ["Está de frente: su derecha queda en tu izquierda.", "La ves en tu lado izquierdo.", "Pero sigue siendo su mano derecha."],
      resultado: "Es su derecha, aunque la veas a tu izquierda." },
    { enunciado: "Nota tu corazón antes y después de saltar.",
      pasos: ["Mano en el pecho: late despacio.", "Salta 20 veces.", "Vuelve a poner la mano: late más rápido."],
      resultado: "Al moverte, el corazón se acelera." },
  ],
  errores: [
    "Mover todo el cuerpo cuando solo hay que mover una parte.",
    "Pensar que la derecha del compañero de frente está en nuestra derecha.",
    "Saltarse el calentamiento: los músculos fríos se lesionan.",
    "Asustarse porque el corazón late rápido: es normal al hacer ejercicio.",
  ],
  ejercicios: [
    { q: "¿Qué es una articulación?", sol: "Un sitio donde el cuerpo se dobla o gira." },
    { q: "Nombra cinco articulaciones.", sol: "Cuello, hombros, codos, muñecas, cadera, rodillas, tobillos." },
    { q: "¿Qué es disociar?", sol: "Mover una parte del cuerpo dejando quieto el resto." },
    { q: "Tócate la oreja izquierda con la mano derecha.", sol: "Respuesta práctica." },
    { q: "Si tu compañero está de frente, ¿dónde ves su mano derecha?", sol: "A tu izquierda." },
    { q: "¿Qué es estar tenso? ¿Y relajado?", sol: "Tenso: músculos apretados. Relajado: músculos blandos y sueltos." },
    { q: "¿Qué le pasa al corazón cuando corres?", sol: "Late más deprisa." },
    { q: "¿En qué orden hacemos el calentamiento?", sol: "De arriba abajo: cuello, hombros, brazos, cintura, rodillas, tobillos." },
    { q: "Juega al espejo con alguien de casa.", sol: "Respuesta libre." },
    { q: "Inventa un movimiento moviendo solo una parte del cuerpo.", sol: "Por ejemplo: girar solo la muñeca." },
  ],
  quiz: [
    { q: "La rodilla es una…", o: ["articulación", "músculo de la cara", "hueso de la mano"], a: 0, e: "Articulación." },
    { q: "El hombro puede…", o: ["girar en círculo", "no moverse", "solo estirarse"], a: 0, e: "Gira." },
    { q: "Disociar es mover…", o: ["una parte sola", "todo a la vez", "nada"], a: 0, e: "Una parte sola." },
    { q: "Un compañero de frente tiene su derecha en mi…", o: ["izquierda", "derecha", "espalda"], a: 0, e: "Izquierda." },
    { q: "Un robot está…", o: ["tenso", "relajado", "dormido"], a: 0, e: "Tenso." },
    { q: "Un muñeco de trapo está…", o: ["relajado", "tenso", "de piedra"], a: 0, e: "Relajado." },
    { q: "Al correr, el corazón…", o: ["late más rápido", "se para", "late más lento"], a: 0, e: "Se acelera." },
    { q: "El calentamiento sirve para…", o: ["evitar lesiones", "cansarse", "terminar la clase"], a: 0, e: "Prepara los músculos." },
    { q: "Calentamos en orden de…", o: ["arriba abajo", "nada", "solo los pies"], a: 0, e: "De arriba abajo." },
    { q: "Al terminar la clase…", o: ["estiramos despacio", "corremos más", "gritamos"], a: 0, e: "Vuelta a la calma." },
  ],
  examen: [
    { q: "¿Cuál es una articulación de la pierna?", o: ["el tobillo", "el codo", "la muñeca"], a: 0, e: "Tobillo." },
    { q: "Al hacer ejercicio respiramos…", o: ["más rápido", "más lento", "nada"], a: 0, e: "Más rápido." },
    { q: "En el juego del espejo…", o: ["copiamos al compañero", "corremos", "nos escondemos"], a: 0, e: "Copiamos." },
    { q: "Después de descansar, el corazón…", o: ["vuelve a ir despacio", "sigue rápido siempre", "se para"], a: 0, e: "Se calma." },
  ],
  feynman: ["Qué son las articulaciones y cómo se mueven", "Cómo distinguir derecha e izquierda en mí y en los demás", "Qué le pasa al cuerpo cuando hacemos ejercicio"],
  mapa: mapa("MI CUERPO", "var(--pri)", [
    ["Articulaciones", "se doblan y giran", "#e53935"],
    ["Lateralidad", "derecha, izquierda, espejo", "#1e88e5"],
    ["Músculos", "tensos, relajados", "#43a047"],
    ["Corazón", "se acelera al moverme", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Articulación", "Sitio donde el cuerpo se dobla o gira"],
    ["Disociar", "Mover una parte sola"],
    ["Derecha", "Lado de la mano que más usan muchos"],
    ["Espejo", "De frente, la derecha del otro está a mi izquierda"],
    ["Tenso", "Músculo apretado, como un robot"],
    ["Relajado", "Músculo suelto, como un trapo"],
    ["Corazón", "Late más rápido al hacer ejercicio"],
    ["Calentamiento", "De arriba abajo, antes de jugar"],
  ],
  familias: [
    "Jugad al espejo en casa, por turnos.",
    "Haced juntos un calentamiento de arriba abajo antes de salir a jugar.",
    "Tomad las pulsaciones antes y después de bailar una canción.",
    "Jugad a «Simón dice» usando derecha e izquierda.",
  ],
  profesores: PROF("Educación Física: esquema corporal (articulaciones, segmentos, disociación); lateralidad propia y en el otro; tono muscular (tensión-relajación); respuestas fisiológicas al ejercicio; calentamiento y vuelta a la calma", ["Juego del espejo por parejas.", "Contraste tensión-relajación.", "Toma de pulsaciones antes y después de la actividad."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
