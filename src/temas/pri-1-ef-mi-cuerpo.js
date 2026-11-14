// Educación Física 1º de Primaria: conozco mi cuerpo.
const { mapa } = require("./_util");
const { svg, rot, big, nino, corazon, suelo, bocadillo, flechaR, PROF, FUENTES } = require("./_pri1-dib");
const L3 = require("./_pri1L3");

const PIEL = "#f3c9a1";
// Niño grande para señalar partes. (x, y) = pies; s = escala.
const grande = (x, y, s = 1.6, pose = "brazos", c = "var(--pen)") => nino(x, y, { c, s, pose });
const etq = (x, y, t, c = "var(--ink)", anchor = "middle") => rot(x, y, t, { size: 12, color: c, anchor });
const punto = (x, y, c = "var(--red)") => `<circle cx="${x}" cy="${y}" r="4.5" fill="${c}" stroke="var(--card)" stroke-width="1.5"/>`;
const tumbado = (x, y, c = "var(--pen)") => `<g transform="rotate(-90 ${x} ${y})">${nino(x, y, { c, pose: "pie", s: 0.9, boca: "cerrada" })}</g>`;

module.exports = {
  materia: "Educación Física",
  curso: "1-primaria",
  titulo: "Conozco mi cuerpo",
  minutos: 50,
  objetivos: ["Nombrar las partes del cuerpo que usamos al movernos", "Distinguir derecha e izquierda en uno mismo", "Notar el corazón y la respiración al moverse y al descansar"],
  claves: ["cabeza", "tronco", "brazos", "piernas", "articulaciones", "derecha", "izquierda"],
  pregunta: {
    texto: "Salta tres veces. ¿Qué partes de tu cuerpo se han movido?",
    respuesta: "¡Casi todas! Se mueven las <mark>piernas</mark>, los <mark>brazos</mark>, el tronco y hasta la cabeza. Y el corazón late más deprisa.",
  },
  lectura: L3.lect("El espejo mágico", `<p>En el gimnasio del cole, la maestra Rocío trae un juego nuevo: el espejo mágico.</p><p>Los niños se ponen por parejas, uno frente al otro. Uno se mueve y el otro lo copia, como un espejo.</p><p>Mateo levanta un brazo. Lucía levanta el suyo. Mateo dobla una rodilla. Lucía también.</p><p>Después Mateo se toca la nariz y saca la lengua. Lucía se ríe tanto que se cae al suelo.</p><p>«¡El espejo se ha roto!», dice Mateo, y los dos se ríen.</p><p>Al final, se tumban y notan el corazón: ¡pum, pum, pum!</p><p>¿Cómo es tu cuerpo y cómo se mueve? En este tema lo vas a descubrir.</p>`),
  bloques: [
    {
      html: `<h3>1. Las partes de mi cuerpo</h3><p>Mi cuerpo tiene <mark>cuatro partes</mark> grandes.</p><p>Arriba está la <b>cabeza</b>. En el centro está el <b>tronco</b>: el pecho, la barriga y la espalda.</p><p>Del tronco salen los dos <b>brazos</b> y las dos <b>piernas</b>. Con todas ellas corremos, saltamos y jugamos. ¡Cada parte tiene su trabajo!</p><p>Vamos a conocerlas bien.</p><p>Toca cada parte mientras dices su nombre. ¡Así tu cerebro aprende dónde está todo!</p>`,
      svg: svg("Un niño grande con flechas que señalan la cabeza, el tronco, los brazos y las piernas", `${grande(130, 160)}${etq(190, 40, "cabeza", "var(--red)", "start")}${flechaR(186, 37, 150, 52, "var(--red)")}${etq(196, 100, "tronco", "var(--leaf)", "start")}${flechaR(192, 97, 138, 92, "var(--leaf)")}${etq(40, 70, "brazo", "var(--inf)")}${flechaR(52, 76, 92, 84, "var(--inf)")}${etq(48, 150, "pierna", "var(--water)")}${flechaR(68, 146, 116, 140, "var(--water)")}`),
      video: { id: "SzC6MxWXoTo", titulo: "Aprendiendo las partes del cuerpo (canción infantil)", canal: "Little Angel Español", vistas: 46347390 },
    },
    {
      html: `<h3>2. Mi cuerpo se dobla</h3><p>Mi cuerpo se puede <mark>doblar</mark> por algunos sitios. Se llaman <b>articulaciones</b>.</p><p>El <b>cuello</b> mueve la cabeza. Los <b>hombros</b>, los <b>codos</b> y las <b>muñecas</b> mueven los brazos.</p><p>Las <b>rodillas</b> y los <b>tobillos</b> mueven las piernas. Prueba: dobla el codo y la rodilla. ¿Notas cómo se mueven?</p><p>Sin articulaciones seríamos como un palo.</p><p>Mueve el cuello despacio, como un búho. Mira a un lado y al otro.</p>`,
      svg: svg("Un niño con puntos rojos en el cuello, los hombros, los codos, las rodillas y los tobillos", `${nino(130, 160, { c: "var(--pen)", s: 1.6, pose: "corre" })}${punto(130, 77)}${punto(130, 86)}${punto(108, 102)}${punto(149, 99)}${punto(107, 154)}${punto(146, 141)}${punto(98, 157)}${etq(40, 70, "cuello", "var(--red)")}${etq(40, 104, "codo", "var(--red)")}${etq(214, 130, "rodilla", "var(--red)")}${etq(214, 156, "tobillo", "var(--red)")}${suelo(162)}`),
    },
    {
      html: `<h3>3. Derecha e izquierda</h3><p>Tengo dos lados: el <mark>derecho</mark> y el <mark>izquierdo</mark>.</p><p>Casi todos usamos más una mano para escribir o comer. Muchos usan la derecha. Otros usan la izquierda, ¡y está muy bien!</p><p>Truco: levanta la mano con la que escribes. Ahora di su nombre. Así aprendes cuál es cuál.</p><p>En el juego, a veces hay que girar a un lado.</p><p>Pon una pegatina en tu mano derecha. Así no te confundes en los juegos.</p>`,
      svg: svg("Dos manos abiertas: la izquierda en color naranja y la derecha en azul", `${[[80, "var(--inf)", "izquierda", -1], [180, "var(--pen)", "derecha", 1]].map(([x, c, t, d]) => `<g transform="translate(${x} 110)"><rect x="-22" y="-20" width="44" height="44" rx="14" fill="${PIEL}" stroke="${c}" stroke-width="3"/>${[-15, -5, 5, 15].map((dx) => `<rect x="${dx - 4}" y="-52" width="8" height="36" rx="4" fill="${PIEL}" stroke="${c}" stroke-width="2"/>`).join("")}<rect x="${d < 0 ? 16 : -36}" y="-8" width="20" height="9" rx="4.5" fill="${PIEL}" stroke="${c}" stroke-width="2" transform="rotate(${d < 0 ? -30 : 30} ${d < 0 ? 16 : -16} -4)"/></g>${rot(x, 160, t, { color: c, size: 16 })}`).join("")}`),
    },
    {
      html: `<h3>4. El corazón y la respiración</h3><p>Dentro del pecho está el <mark>corazón</mark>. Late siempre: ¡pum, pum!</p><p>Cuando corremos, late <b>más deprisa</b>. También respiramos más rápido para coger aire.</p><p>Cuando paramos, poco a poco el corazón se calma. Pon la mano en el pecho después de saltar. ¿Lo notas latir?</p><p>El corazón lleva la sangre a todo el cuerpo.</p><p>Cuenta los latidos después de correr y después de descansar. ¿Cuándo hay más?</p>`,
      svg: svg("Un corazón grande con la palabra pum, una niña con la mano en el pecho y una flecha que va de despacio a rápido", `${nino(60, 150, { c: "var(--inf)", nina: true, pose: "palmas", s: 1.1 })}${corazon(150, 96, 3)}${rot(150, 34, "¡pum, pum!", { color: "var(--red)", size: 16 })}${rot(215, 70, "corro:", { size: 12, color: "var(--muted)" })}${rot(215, 88, "rápido", { size: 13, color: "var(--red)" })}${rot(215, 112, "paro:", { size: 12, color: "var(--muted)" })}${rot(215, 130, "despacio", { size: 13, color: "var(--leaf)" })}${suelo(150)}${rot(130, 172, "El corazón late", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>5. Huesos y músculos</h3><p>Dentro del cuerpo tenemos <mark>huesos</mark>. Son duros y nos sostienen. Son como los palos de una tienda de campaña.</p><p>Encima de los huesos están los <mark>músculos</mark>. Los músculos tiran de los huesos y así nos movemos.</p><p>Cuando hacemos ejercicio, los músculos se ponen <b>más fuertes</b>.</p><p>¡Por eso hay que moverse cada día!</p><p>Los músculos también necesitan descansar y comer bien para crecer fuertes.</p>`,
      svg: svg("Un brazo doblado con el hueso dibujado por dentro y el músculo marcado", `<path d="M40 120 Q60 100 110 110 L150 112 Q170 70 180 40" stroke="${PIEL}" stroke-width="30" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 116 L148 112 L176 46" stroke="var(--card)" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="148" cy="112" r="6" fill="var(--card)"/><ellipse cx="100" cy="96" rx="26" ry="12" fill="var(--red)" opacity=".55"/>${etq(100, 74, "músculo", "var(--red)")}${etq(210, 120, "hueso", "var(--muted)")}${flechaR(196, 116, 156, 110, "var(--muted)")}${rot(130, 168, "Los músculos mueven los huesos", { color: "var(--pen)", size: 13 })}`),
      video: { id: "qBNb8FwOlzQ", titulo: "Los huesos para niños: el sistema óseo", canal: "Smile and Learn - Español", vistas: 10088982 },
    },
    {
      html: `<h3>6. Posturas de mi cuerpo</h3><p>Mi cuerpo puede ponerse de muchas <mark>formas</mark>.</p><p>Puedo estar <b>de pie</b>, <b>sentado</b>, <b>tumbado</b> o <b>en cuclillas</b>.</p><p>Para estar bien sentado, apoyo la espalda. Y pongo los pies en el suelo. Para levantar algo del suelo, doblo las rodillas. Así cuido mi espalda.</p><p>¿Cómo estás sentado ahora?</p><p>Juega a las posturas: tu familia dice una y tú la haces muy rápido.</p>`,
      svg: svg("Cuatro posturas: de pie, sentado, en cuclillas y tumbado", `${nino(30, 140, { c: "var(--pen)", s: 0.9 })}${nino(85, 140, { c: "var(--inf)", pose: "sentado", s: 0.9 })}<rect x="68" y="118" width="28" height="22" fill="#c99a5b" opacity=".6"/>${nino(140, 140, { c: "var(--leaf)", pose: "agacha", s: 0.9 })}${tumbado(240, 132, "var(--red)")}${suelo(140)}${[["de pie", 30], ["sentado", 85], ["cuclillas", 140], ["tumbado", 210]].map(([t, x]) => etq(x, 162, t, "var(--muted)")).join("")}`),
    },
    {
      html: `<h3>7. Moverse y relajarse</h3><p>Después de jugar mucho, el cuerpo necesita <mark>descansar</mark>.</p><p>Nos tumbamos boca arriba y cerramos los ojos.</p><p>Respiramos <b>despacio</b>: cogemos aire por la nariz y lo soltamos por la boca. Notamos cómo la barriga sube y baja. Así el cuerpo y la mente se quedan <b>tranquilos</b>.</p><p>Es la <mark>vuelta a la calma</mark>.</p><p>Imagina que eres un globo que se hincha y se deshincha despacio.</p>`,
      svg: svg("Un niño tumbado sobre una colchoneta con los ojos cerrados y aire que entra y sale", `<rect x="20" y="118" width="220" height="16" rx="6" fill="var(--water)" opacity=".4"/>${tumbado(196, 112, "var(--pen)")}<path d="M128 98 q-10 -10 -4 -24 M118 102 q-16 -6 -14 -26" stroke="var(--water)" stroke-width="2.5" fill="none" stroke-linecap="round"/>${rot(130, 40, "Inspira… espira…", { color: "var(--water)", size: 15 })}${rot(130, 168, "Respiro despacio", { color: "var(--pen)" })}`),
    },
    L3.B("8. Mi cuerpo habla", `<p>Con el cuerpo también <mark>decimos cosas</mark>, sin hablar. Es la <b>expresión corporal</b>.</p><p>Si saltamos y aplaudimos, estamos contentos. Si bajamos la cabeza, quizá estamos tristes.</p><p>Con gestos podemos imitar animales, oficios o personajes de un cuento.</p><p>Prueba a ser un robot, una mariposa o un gigante. ¿Lo adivinan tus amigos?</p>`, "Tres niños hacen gestos distintos: contento con los brazos arriba, triste y bailando", `${L3.nino(50, 150, { c: "var(--leaf)", pose: "arriba", s: 1.1 })}${L3.nino(130, 150, { c: "var(--pen)", pose: "pie", s: 1.1, boca: "cerrada" })}${L3.nino(210, 150, { c: "var(--red)", pose: "baila", s: 1.1, nina: true })}${L3.suelo(152)}${L3.t(50, 172, "contento", "var(--leaf)", 12)}${L3.t(130, 172, "serio", "var(--pen)", 12)}${L3.t(210, 172, "bailo", "var(--red)", 12)}`),
    {
      html: `<h3>9. ¿Para qué sirve? Moverme sin hacerme daño</h3><p>Si conozco mi cuerpo, me muevo <mark>mejor</mark>.</p><p>Antes de jugar, hacemos un <b>calentamiento</b>: movemos el cuello, los hombros, las rodillas y los tobillos.</p><p>Así los músculos se preparan. Si algo nos duele, paramos y avisamos a un adulto. Escuchar al cuerpo es muy importante.</p><p>Y al terminar, estiramos despacio.</p><p>Bebe agua antes y después de hacer ejercicio. ¡Tu cuerpo la necesita!</p>`,
      svg: svg("Tres niños calentando: girando los brazos, estirando hacia arriba y doblando las rodillas", `${nino(50, 150, { c: "var(--pen)", pose: "brazos" })}<path d="M24 92 a26 26 0 0 1 52 0" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="4 3"/>${nino(130, 150, { c: "var(--inf)", nina: true, pose: "arriba" })}${nino(210, 150, { c: "var(--leaf)", pose: "agacha" })}${suelo(150)}${rot(130, 172, "Calentamos antes de jugar", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>10. Juego: Simón dice</h3><p>Un jugador es <mark>Simón</mark>. Da órdenes y los demás las hacen.</p><p>«Simón dice: tócate las <b>rodillas</b>». «Simón dice: levanta el brazo <b>derecho</b>».</p><p>Solo se obedece si empieza por «Simón dice». Si dice solo «¡salta!», ¡no hay que saltar! Quien se equivoca, pasa a ser Simón.</p><p>¡Escucha con atención!</p><p>Cambiad también: «Simón dice: tócate el codo izquierdo». ¡Es más difícil!</p>`,
      svg: svg("Un niño da órdenes en un bocadillo y una niña se toca la cabeza", `${bocadillo(130, 30, 220, "Simón dice: ¡tócate la cabeza!", 13)}${nino(70, 150, { c: "var(--pen)", pose: "canta", boca: "abierta" })}${nino(180, 150, { c: "var(--inf)", nina: true, pose: "arriba" })}${suelo(150)}${rot(130, 172, "Escucha bien y muévete", { color: "var(--pen)" })}`),
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Mi cuerpo tiene <mark>cabeza, tronco, brazos y piernas</mark>. Se dobla por las <b>articulaciones</b>.</p><p>Tengo un lado derecho y otro izquierdo.</p><p>Los huesos me sostienen y los músculos me mueven. Al correr, el corazón late más deprisa.</p><p>Antes de jugar, calentamos. Después, estiramos y respiramos despacio para volver a la calma.</p>`, "Lista de repaso: partes, articulaciones, derecha e izquierda, corazón y calma", `${L3.lista(["Partes del cuerpo", "Articulaciones", "Derecha e izquierda", "Corazón y respiración", "Calentar y relajarse"], 50, 34, 28)}${L3.corazon(225, 150, 1.5)}`),
  ],
  figura: {
    titulo: "Mi cuerpo en movimiento",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un niño grande con las partes del cuerpo y las articulaciones señaladas">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${nino(320, 280, { c: "var(--pen)", s: 3, pose: "brazos" })}
      ${[["cabeza", 470, 60, 340, 80, "var(--red)"], ["cuello", 470, 110, 322, 124, "var(--red)"], ["tronco", 470, 160, 326, 170, "var(--leaf)"], ["rodilla", 470, 240, 302, 244, "var(--red)"], ["hombro", 170, 110, 312, 140, "var(--inf)"], ["brazo", 170, 160, 270, 142, "var(--inf)"], ["mano", 170, 210, 262, 142, "var(--inf)"], ["pie", 170, 270, 300, 280, "var(--water)"]].map(([t, x, y, px, py, c]) => `<path d="M${x < 320 ? x + 40 : x - 40} ${y - 5} L${px} ${py}" stroke="${c}" stroke-width="2" stroke-dasharray="5 4"/>${rot(x, y, t, { color: c, size: 18 })}`).join("")}
    </svg>`,
  },
  video: { id: "ppUnmAvLhwE", titulo: "Las partes del cuerpo humano para niños", canal: "Smile and Learn - Español", vistas: 9550632, megusta: 0, busqueda: "partes del cuerpo humano para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué partes del cuerpo usamos para saltar?",
      pasos: ["Doblamos las rodillas y los tobillos.", "Las piernas empujan contra el suelo.", "Los brazos suben para ayudar."],
      resultado: "usamos sobre todo las piernas, y también los brazos." },
    { enunciado: "¿Cuál es tu mano derecha?",
      pasos: ["Piensa con qué mano escribes.", "Si escribes con la derecha, esa es tu mano derecha.", "Si escribes con la izquierda, la otra es la derecha."],
      resultado: "levanto la mano derecha y digo «derecha»." },
    { enunciado: "Después de correr, ¿cómo late el corazón?",
      pasos: ["Corremos un minuto por el patio.", "Ponemos la mano en el pecho.", "Notamos que late muy rápido; al descansar, va más despacio."],
      resultado: "late más deprisa al correr y se calma al parar." },
    { enunciado: "¿Cómo levanto una caja del suelo sin hacerme daño?", pasos: ["Me pongo cerca de la caja.", "Doblo las rodillas y bajo con la espalda recta.", "Cojo la caja y me levanto empujando con las piernas."], resultado: "doblo las rodillas y cuido la espalda." },
  ],
  errores: [
    "Confundir la derecha y la izquierda: usa la mano con la que escribes para acordarte.",
    "Levantar cosas del suelo sin doblar las rodillas: hay que agacharse para cuidar la espalda.",
    "Empezar a jugar sin calentar: primero movemos las articulaciones.",
    "Pensar que el corazón solo late cuando corremos: late siempre, pero al correr va más rápido.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Señala tu cabeza, tu tronco, tus brazos y tus piernas.", sol: "Debe tocar cada parte al oír su nombre." },
    { nivel: "básico", q: "Dobla el codo y después la rodilla.", sol: "Comprobad que dobla bien cada articulación." },
    { nivel: "básico", q: "Levanta la mano derecha.", sol: "La mano con la que escribe (si es diestro o diestra)." },
    { nivel: "básico", q: "Toca tu pie izquierdo con la mano derecha.", sol: "Debe cruzar la mano derecha hasta el pie izquierdo." },
    { nivel: "medio", q: "Salta 10 veces y pon la mano en el pecho. ¿Qué notas?", sol: "El corazón late muy rápido." },
    { nivel: "básico", q: "¿Qué sostiene nuestro cuerpo por dentro?", sol: "Los huesos." },
    { nivel: "básico", q: "¿Qué tira de los huesos para movernos?", sol: "Los músculos." },
    { nivel: "básico", q: "Ponte de pie, sentado, en cuclillas y tumbado.", sol: "Cuatro posturas seguidas; se puede jugar a cambiar rápido." },
    { nivel: "básico", q: "Di tres articulaciones.", sol: "Por ejemplo: codo, rodilla y tobillo (también cuello, hombro y muñeca)." },
    { nivel: "medio", q: "Respira despacio 5 veces tumbado. ¿Cómo te sientes?", sol: "Tranquilo o tranquila: la respiración lenta relaja." },
    L3.b("Toca tus dos tobillos.", "Debe tocar los dos tobillos."),
    L3.m("Imita a un animal sin hablar. Tu familia lo adivina.", "Juego libre de expresión corporal."),
    L3.m("Siéntate bien en una silla. ¿Cómo pones la espalda y los pies?", "La espalda apoyada y los pies en el suelo."),
    L3.m("Haz el calentamiento: mueve cuello, hombros, rodillas y tobillos.", "Movimientos suaves de cada articulación."),
    L3.m("Toca tu oreja derecha con la mano izquierda.", "Cruza el brazo por delante de la cara."),
    L3.m("Pon cara de contento, de triste y de sorpresa.", "Tres gestos distintos con la cara."),
    L3.m("Corre un minuto y cuenta lo que notas en el cuerpo.", "Late más el corazón, respiro más rápido y tengo calor."),
    L3.a("Haz de espejo con un adulto: copia sus movimientos.", "Copia los gestos a la vez, como en un espejo."),
    L3.a("Explica por qué calentamos antes de jugar.", "Para preparar los músculos y no hacernos daño."),
    L3.a("Inventa una orden de «Simón dice» con derecha o izquierda.", "Por ejemplo: «Simón dice: levanta la pierna izquierda»."),
    L3.a("Haz la vuelta a la calma: tumbado, cinco respiraciones lentas.", "Respiración por la nariz y salida por la boca, notando la barriga."),
    L3.a("Di tres cosas que haces para cuidar tu cuerpo.", "Moverme, comer bien, beber agua, dormir y sentarme bien."),
  ],
  quiz: [
    { q: "¿Qué parte está arriba del todo?", o: ["La cabeza", "El pie", "La rodilla"], a: 0, e: "La cabeza está arriba." },
    { q: "El pecho, la barriga y la espalda forman…", o: ["el tronco", "el brazo", "la pierna"], a: 0, e: "Son el tronco." },
    { q: "¿Por dónde se dobla el brazo?", o: ["Por el codo", "Por la rodilla", "Por el tobillo"], a: 0, e: "El codo dobla el brazo." },
    { q: "¿Por dónde se dobla la pierna?", o: ["Por la muñeca", "Por la rodilla", "Por el cuello"], a: 1, e: "La rodilla dobla la pierna." },
    { q: "¿Cuántas piernas tenemos?", o: ["Una", "Dos", "Cuatro"], a: 1, e: "Tenemos dos piernas." },
    { q: "Al correr, el corazón late…", o: ["más deprisa", "más despacio", "nada"], a: 0, e: "Late más deprisa." },
    { q: "Los huesos son…", o: ["blandos", "duros", "de aire"], a: 1, e: "Son duros y nos sostienen." },
    { q: "Con el ejercicio, los músculos…", o: ["se hacen más fuertes", "desaparecen", "se vuelven huesos"], a: 0, e: "Se fortalecen." },
    { q: "Para coger algo del suelo…", o: ["doblo las rodillas", "doblo solo la espalda", "salto"], a: 0, e: "Doblar las rodillas cuida la espalda." },
    { q: "Antes de jugar hacemos…", o: ["el calentamiento", "la siesta", "la merienda"], a: 0, e: "Calentar prepara los músculos." },
    L3.Q("La expresión corporal es…", ["hablar con el cuerpo", "comer deprisa", "dormir"], 0, "Gestos y movimientos que dicen cosas."),
    L3.Q("Antes y después del ejercicio bebemos…", ["agua", "refrescos", "nada"], 0, "El cuerpo la necesita."),
  ],
  examen: [
    { q: "¿Cuántas partes grandes tiene el cuerpo?", o: ["Cuatro: cabeza, tronco, brazos y piernas", "Dos", "Diez"], a: 0, e: "Cabeza, tronco, brazos y piernas." },
    { q: "Las partes por donde se dobla el cuerpo son…", o: ["articulaciones", "orejas", "uñas"], a: 0, e: "Se llaman articulaciones." },
    { q: "¿Qué se mueve más rápido al correr?", o: ["El corazón y la respiración", "El pelo", "Los dientes"], a: 0, e: "Late más el corazón y respiramos más rápido." },
    { q: "Para relajarnos respiramos…", o: ["despacio", "muy rápido", "sin parar de hablar"], a: 0, e: "La respiración lenta nos calma." },
    L3.Q("¿Qué hacen los músculos?", ["Mueven los huesos", "Ven", "Oyen"], 0, "Tiran de los huesos."),
    L3.Q("Al terminar el ejercicio…", ["estiramos y respiramos despacio", "corremos más", "gritamos"], 0, "Es la vuelta a la calma."),
  ],
  feynman: ["Cuáles son las partes del cuerpo", "Qué son las articulaciones", "Qué le pasa al corazón cuando corremos"],
  mapa: mapa("MI CUERPO", "var(--pri)", [
    ["Partes", "cabeza · tronco · brazos · piernas", "var(--pen)"],
    ["Articulaciones", "cuello · codo · rodilla · tobillo", "var(--red)"],
    ["Por dentro", "huesos · músculos · corazón", "var(--leaf)"],
    ["Lados", "derecha · izquierda", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["¿Cuáles son las 4 partes del cuerpo?", "Cabeza, tronco, brazos y piernas."],
    ["¿Qué es una articulación?", "Un sitio por donde el cuerpo se dobla."],
    ["Di una articulación del brazo.", "El codo (o el hombro, o la muñeca)."],
    ["Di una articulación de la pierna.", "La rodilla (o el tobillo)."],
    ["¿Qué hace el corazón al correr?", "Late más deprisa."],
    ["¿Para qué sirven los huesos?", "Para sostener el cuerpo."],
    ["¿Para qué sirven los músculos?", "Para mover los huesos."],
    ["¿Qué hacemos antes de jugar?", "Calentar."],
    ["¿Qué es la expresión corporal?", "Decir cosas con el cuerpo, sin hablar"],
    ["¿Qué es la vuelta a la calma?", "Relajarse y respirar despacio después de jugar"],
  ],
  glosario: [
    ["Tronco", "La parte del medio del cuerpo."],
    ["Articulación", "Sitio por donde se dobla el cuerpo."],
    ["Derecha e izquierda", "Los dos lados del cuerpo."],
    ["Músculo", "Lo que tira de los huesos para movernos."],
    ["Hueso", "Parte dura que nos sostiene."],
    ["Postura", "La forma en que ponemos el cuerpo."],
    ["Calentamiento", "Movimientos suaves para preparar el cuerpo antes de jugar."],
    ["Relajación", "Descansar el cuerpo y respirar despacio."],
    ["Expresión corporal", "Hablar con gestos y movimientos."],
  ],
  situacion: L3.sit("El circuito del cuerpo", "Vamos a preparar un circuito en el gimnasio para mover cada parte del cuerpo.", ["Por grupos, inventamos una prueba para una parte: cabeza, brazos, tronco o piernas.", "Hacemos un cartel con un dibujo de la prueba.", "Recorremos todas las pruebas después de calentar.", "Terminamos con la vuelta a la calma y contamos qué parte hemos movido más."], "Un circuito con cuatro pruebas, una para cada parte del cuerpo.", ["Nombra las partes y articulaciones que usa.", "Distingue derecha e izquierda.", "Calienta antes y se relaja al final."]),
  familias: [
    "Jugad a «Simón dice» en casa nombrando partes del cuerpo y lados (derecha, izquierda).",
    "Después de una carrera en el parque, poned juntos la mano en el pecho y comparad cómo late.",
    "Practicad a coger del suelo una mochila doblando las rodillas.",
    "Antes de dormir, haced juntos cinco respiraciones lentas tumbados.",
  ],
  profesores: PROF("Educación Física: conciencia corporal, esquema corporal (segmentos y articulaciones), lateralidad y percepción de cambios fisiológicos con la actividad física; respiración y relajación", ["Juego del espejo por parejas: uno mueve una parte y el otro la imita.", "Pulseras de color en la mano derecha para trabajar la lateralidad.", "Vuelta a la calma con respiración en colchonetas al final de cada sesión."]),
  fuentes: FUENTES,
  revisado: "2026-11-14",
};
