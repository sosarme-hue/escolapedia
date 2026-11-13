// Música 2º de Primaria: sonidos del entorno. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { dibujos } = require("./_peque");
const { svg, rot, nino, casa, arbol, pajaro, nube, sol, altavoz, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const oreja = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-8 -26 q24 -8 28 16 q2 16 -12 24 q-6 4 -6 12 q0 10 -10 8" stroke="var(--ink)" stroke-width="3" fill="${P.piel}"/><path d="M0 -12 q10 -2 10 8 q0 6 -6 8" stroke="var(--ink)" stroke-width="2" fill="none"/></g>`;
const ondas = (x, y, c = "var(--pen)", n = 3) => [...Array(n)].map((_, i) => `<path d="M${x + i * 8} ${y - 8 - i * 4} q${6 + i * 2} ${8 + i * 4} 0 ${16 + i * 8}" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`).join("");

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "Sonidos del entorno",
  minutos: 20,
  objetivos: ["Escuchar con atención y reconocer sonidos de casa, de la calle y de la naturaleza", "Clasificar sonidos según su origen: naturales, de máquinas, del cuerpo y de la voz", "Describir y reproducir sonidos, y valorar el silencio y el cuidado del oído"],
  claves: ["sonido", "silencio", "entorno", "escuchar", "naturales", "artificiales", "ruido", "paisaje sonoro"],
  pregunta: {
    texto: "Cierra los ojos un minuto y escucha. ¿Cuántos sonidos distintos oyes?",
    respuesta: "Seguro que más de los que pensabas: pasos, una puerta, un pájaro, un coche… Todo lo que nos rodea es el <mark>entorno</mark>, y está lleno de <b>sonidos</b>.",
  },
  bloques: [
    {
      html: `<h3>Oír y escuchar</h3><p><mark>Oír</mark> es notar un sonido, aunque no prestemos atención. <mark>Escuchar</mark> es oír con atención, queriendo.</p><p>Muchas veces oímos cosas sin darnos cuenta: el reloj, la nevera o el viento.</p><p>Para escuchar bien hay que estar en silencio y quietos. A veces ayuda cerrar los ojos. ¡Los músicos son grandes escuchadores!</p>`,
      svg: svg("Una oreja grande que recibe ondas de sonido y una niña que escucha con los ojos cerrados", `${oreja(60, 84, 1.5)}${ondas(100, 82, P.azul, 3)}<circle cx="196" cy="62" r="20" fill="${P.piel}" stroke="var(--ink)" stroke-width="1.5"/><path d="M176 58 q0 -24 20 -24 q20 0 20 24 q-6 -12 -20 -12 q-14 0 -20 12z" fill="${P.marron}"/><path d="M186 62 q4 3 8 0 M198 62 q4 3 8 0" stroke="var(--ink)" stroke-width="2" fill="none"/><path d="M190 72 q6 4 12 0" stroke="var(--ink)" stroke-width="2" fill="none"/>${etq(196, 110, "escucho", "var(--pen)", 14)}${etq(60, 166, "oír ≠ escuchar", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Sonidos de casa</h3><p>Nuestra casa está llena de <mark>sonidos</mark>.</p><p>Suena el timbre, el grifo del agua, la lavadora, el microondas y el teléfono. También las puertas que se cierran y los pasos en el pasillo.</p><p>Algunos sonidos nos avisan: el pitido del microondas dice que la comida está lista. El despertador dice que hay que levantarse. ¿Cuál suena primero en tu casa cada mañana?</p>`,
      svg: dibujos("Sonidos de casa: reloj despertador, campana del timbre, agua del grifo y teléfono", [["reloj", "reloj", P.rojo], ["campana", "timbre", P.azul], ["agua", "grifo", P.verde], ["cuchara", "cocina", P.naranja]], { titulo: "Sonidos de casa" }),
    },
    {
      html: `<h3>Sonidos de la calle</h3><p>Cuando salimos a la calle, los sonidos <mark>cambian</mark>.</p><p>Oímos coches, motos, autobuses y bocinas. Las campanas de la iglesia, la sirena de una ambulancia y a la gente hablando.</p><p>En una ciudad grande hay mucho ruido. En un pueblo pequeño suele haber más calma. Las sirenas suenan fuerte para que todos se aparten. ¡Es un sonido importante!</p>`,
      svg: dibujos("Sonidos de la calle: coche, tren, avión y campana", [["coche", "coche", P.rojo], ["tren", "tren", P.azul], ["avion", "avión", P.verde], ["campana", "campanas", P.naranja]], { titulo: "Sonidos de la calle" }),
    },
    {
      html: `<h3>Sonidos de la naturaleza</h3><p>En el campo, en la playa o en el bosque escuchamos <mark>sonidos naturales</mark>.</p><p>El viento entre los árboles, la lluvia, los truenos, las olas del mar y el agua de un río.</p><p>Y los animales: pájaros que cantan, grillos por la noche, perros que ladran. Los sonidos de la naturaleza suelen ser tranquilos. Mucha gente los escucha para relajarse.</p>`,
      svg: svg("Paisaje de naturaleza con un pájaro cantando, lluvia en una nube y olas", `<rect x="14" y="120" width="232" height="46" fill="${P.azul}" opacity=".5"/><path d="M14 124 q14 -10 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0" stroke="${P.azul}" stroke-width="3" fill="none"/>${arbol(50, 120, 1.2)}<g transform="translate(90 54)"><ellipse rx="10" ry="7" fill="${P.amarillo}"/><circle cx="8" cy="-6" r="5" fill="${P.amarillo}"/><path d="M13 -6 l6 1 l-6 2z" fill="${P.naranja}"/></g>${ondas(112, 46, P.naranja, 2)}${nube(196, 42, 1)}${[0, 1, 2].map((i) => `<path d="M${184 + i * 12} 60 l-4 12" stroke="${P.azul}" stroke-width="2.5"/>`).join("")}${etq(196, 100, "lluvia", "var(--ink)", 11)}${etq(100, 100, "pájaro", "var(--ink)", 11)}${etq(130, 160, "olas", "#fff", 12)}`),
      video: V("mu1b"),
    },
    {
      html: `<h3>Naturales y artificiales</h3><p>Podemos <mark>clasificar</mark> los sonidos según quién o qué los hace.</p><p>Los <b>naturales</b> los hace la naturaleza: animales, viento, agua. Los <b>artificiales</b> los hacen las máquinas y los objetos que fabricamos: coches, timbres, aspiradoras.</p><p>También hay sonidos del <b>cuerpo</b> (palmas, pasos) y de la <b>voz</b> (hablar, cantar, reír). ¿De qué tipo es el ladrido de un perro?</p>`,
      svg: svg("Clasificación de sonidos en dos cajas: naturales con pájaro y lluvia, artificiales con coche y timbre", `<rect x="14" y="30" width="112" height="120" rx="10" fill="${P.verde}" opacity=".15" stroke="${P.verde}" stroke-width="2.5"/><rect x="134" y="30" width="112" height="120" rx="10" fill="${P.azul}" opacity=".15" stroke="${P.azul}" stroke-width="2.5"/>${etq(70, 50, "naturales", P.verde, 14)}${etq(190, 50, "artificiales", P.azul, 14)}${["viento", "lluvia", "pájaros", "olas"].map((t, i) => etq(70, 76 + i * 20, t)).join("")}${["coche", "timbre", "aspiradora", "sirena"].map((t, i) => etq(190, 76 + i * 20, t)).join("")}`),
    },
    {
      html: `<h3>¿Cómo es el sonido?</h3><p>Para describir un sonido nos fijamos en <mark>cómo suena</mark>.</p><p>Puede ser <b>fuerte</b> o <b>suave</b>, como un trueno o un susurro. <b>Largo</b> o <b>corto</b>, como una sirena o una palmada.</p><p><b>Agudo</b> o <b>grave</b>, como un pito o un tambor. Y puede estar <b>cerca</b> o <b>lejos</b>. Cuando escuches un sonido, intenta decir al menos dos cosas de cómo es.</p>`,
      svg: svg("Cómo describir un sonido: fuerte o suave, largo o corto", `${altavoz(46, 52, 3, P.rojo)}${etq(46, 92, "fuerte")}${altavoz(126, 52, 1, P.azul)}${etq(126, 92, "suave")}<path d="M176 52 H244" stroke="${P.verde}" stroke-width="6" stroke-linecap="round"/>${etq(210, 92, "largo")}<path d="M60 130 h12" stroke="${P.morado}" stroke-width="6" stroke-linecap="round"/>${etq(66, 160, "corto")}${etq(176, 136, "agudo o grave", "var(--ink)", 13)}${etq(176, 156, "cerca o lejos", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>El silencio y el ruido</h3><p>El <mark>silencio</mark> es cuando no oímos nada. También es parte de la música: sin silencios, las canciones serían un lío.</p><p>El <mark>ruido</mark> es un sonido molesto o demasiado fuerte. Mucho ruido cansa y puede dañar los oídos.</p><p>Por eso no ponemos los cascos muy altos y no gritamos en clase. ¡Cuidar el oído es cuidar la música!</p>`,
      svg: svg("Un dedo pide silencio a la izquierda; a la derecha un niño se tapa los oídos ante mucho ruido", `<circle cx="64" cy="76" r="30" fill="${P.piel}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="54" cy="70" r="3" fill="var(--ink)"/><circle cx="74" cy="70" r="3" fill="var(--ink)"/><rect x="60" y="74" width="8" height="30" rx="4" fill="${P.piel}" stroke="var(--ink)"/>${etq(64, 134, "¡Shhh! Silencio", P.verde, 13)}${nino(196, 132, { c: P.rojo, pose: "palmas", s: 1.2, boca: "abierta" })}${altavoz(140, 50, 3, P.rojo)}${etq(196, 160, "¡Demasiado ruido!", P.rojo, 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Escuchar bien el entorno nos ayuda a <mark>estar seguros</mark>.</p><p>Oímos si viene un coche antes de cruzar, si suena una alarma o si alguien nos llama.</p><p>Además, los músicos usan sonidos del entorno en sus obras: hay piezas que imitan pájaros, tormentas o trenes. Escuchar bien es el primer paso para hacer música.</p>`,
      svg: svg("Un niño en la acera escucha un coche que se acerca antes de cruzar", `<rect x="14" y="120" width="232" height="46" fill="var(--line)" opacity=".5"/>${[0, 1, 2, 3].map((i) => `<rect x="${120 + i * 30}" y="128" width="16" height="32" fill="#fff" stroke="var(--line)"/>`).join("")}${nino(50, 124, { c: P.azul, s: 1.3 })}${oreja(78, 54, 0.6)}<g transform="translate(220 104)"><rect x="-26" y="-14" width="52" height="18" rx="6" fill="${P.rojo}"/><rect x="-14" y="-26" width="28" height="14" rx="4" fill="${P.rojo}"/><circle cx="-14" cy="6" r="6" fill="var(--ink)"/><circle cx="14" cy="6" r="6" fill="var(--ink)"/></g>${ondas(180, 92, P.rojo, 2)}${etq(168, 30, "Antes de cruzar, escucho", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Jugamos al paisaje sonoro</h3><p>Un <mark>paisaje sonoro</mark> es una historia contada solo con sonidos.</p><p>Elegimos un lugar, por ejemplo, un bosque de noche. Cada grupo hace un sonido con la voz o el cuerpo: el viento «fuuu», los grillos «cri cri», un búho «uh uh», pasos en las hojas…</p><p>El director señala a cada grupo cuándo suena. Los demás cierran los ojos y adivinan el lugar.</p>`,
      svg: svg("Paisaje sonoro de un bosque de noche: luna, árboles, un búho y bocadillos con uh uh y cri cri", `<rect x="14" y="14" width="232" height="152" rx="10" fill="#1a237e" opacity=".85"/><circle cx="210" cy="40" r="14" fill="${P.amarillo}"/>${arbol(50, 150, 1.3)}${arbol(110, 150, 1)}<g transform="translate(50 82)"><ellipse rx="10" ry="12" fill="#8d6e63"/><circle cx="-4" cy="-4" r="3.5" fill="#fff"/><circle cx="4" cy="-4" r="3.5" fill="#fff"/><circle cx="-4" cy="-4" r="1.5" fill="var(--ink)"/><circle cx="4" cy="-4" r="1.5" fill="var(--ink)"/></g>${etq(92, 70, "uh, uh", "#fff", 13)}${etq(190, 130, "cri, cri", "#fff", 13)}${etq(176, 90, "fuuu…", "#fff", 13)}`),
    },
  ],
  figura: {
    titulo: "Los sonidos del entorno",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Sonidos del entorno: de casa, de la calle, de la naturaleza y del cuerpo y la voz"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 34, "¿De dónde viene el sonido?", { size: 20, color: "var(--pen)" })}${[["Casa", "timbre, grifo, reloj", P.naranja], ["Calle", "coches, sirenas, campanas", P.azul], ["Naturaleza", "viento, lluvia, pájaros", P.verde], ["Cuerpo y voz", "palmas, pasos, cantar", P.morado]].map(([t, d, c], i) => `<rect x="${28 + i * 150}" y="70" width="134" height="170" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${altavoz(95 + i * 150, 126, 3, c)}${rot(95 + i * 150, 190, t, { size: 18, color: c })}${rot(95 + i * 150, 216, d, { size: 11 })}`).join("")}${rot(320, 280, "Escuchar con atención es el primer paso de la música", { size: 15 })}</svg>`,
  },
  video: V("mu1v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Oyes «guau, guau». ¿Qué sonido es y de qué tipo?",
      pasos: ["Es el ladrido de un perro.", "Lo hace un animal.", "Los animales son parte de la naturaleza."],
      resultado: "Es un sonido natural." },
    { enunciado: "Describe el sonido de una ambulancia.",
      pasos: ["¿Fuerte o suave? Fuerte.", "¿Largo o corto? Largo, sube y baja.", "¿Quién lo hace? Una máquina."],
      resultado: "Es fuerte, largo y artificial." },
    { enunciado: "Haz con la voz el sonido de la lluvia que empieza y termina.",
      pasos: ["Empieza muy suave: «tip… tip…».", "Hazlo más rápido y más fuerte.", "Termina otra vez suave hasta el silencio."],
      resultado: "Un pequeño paisaje sonoro de lluvia." },
  ],
  errores: [
    "Pensar que oír y escuchar es lo mismo: escuchar es oír con atención.",
    "Creer que el silencio no es música: los silencios también forman parte de ella.",
    "Poner los cascos muy altos: el ruido fuerte daña el oído.",
    "Llamar natural al sonido de un coche: lo hace una máquina, es artificial.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia hay entre oír y escuchar?", sol: "Oír es notar un sonido; escuchar es oírlo con atención." },
    { q: "Di tres sonidos de tu casa.", sol: "Por ejemplo: el timbre, el grifo y la lavadora." },
    { q: "Di tres sonidos de la calle.", sol: "Por ejemplo: coches, sirenas y campanas." },
    { q: "Di tres sonidos de la naturaleza.", sol: "Por ejemplo: el viento, la lluvia y los pájaros." },
    { q: "¿El sonido de la aspiradora es natural o artificial?", sol: "Artificial: lo hace una máquina." },
    { q: "¿Qué es el ruido?", sol: "Un sonido molesto o demasiado fuerte." },
    { q: "¿Qué es el silencio?", sol: "Cuando no se oye ningún sonido." },
    { q: "Describe el sonido de una palmada.", sol: "Por ejemplo: corto, fuerte y hecho con el cuerpo." },
    { q: "Cierra los ojos un minuto y apunta todos los sonidos que oyes.", sol: "Respuesta libre." },
    { q: "Inventa un paisaje sonoro de la playa con la voz y el cuerpo.", sol: "Respuesta libre: por ejemplo, olas «shhh», gaviotas, risas y pasos en la arena." },
  ],
  quiz: [
    { q: "Escuchar es…", o: ["oír con atención", "hablar alto", "dormir"], a: 0, e: "Oír queriendo." },
    { q: "El canto de un pájaro es un sonido…", o: ["natural", "artificial", "de máquina"], a: 0, e: "Natural." },
    { q: "El timbre de casa es un sonido…", o: ["natural", "artificial", "del cuerpo"], a: 1, e: "Artificial." },
    { q: "Una palmada es un sonido…", o: ["del cuerpo", "de la naturaleza", "de un coche"], a: 0, e: "Del cuerpo." },
    { q: "Un susurro es…", o: ["fuerte", "suave", "agudo siempre"], a: 1, e: "Suave." },
    { q: "La sirena de una ambulancia sirve para…", o: ["avisar", "dormir", "cantar"], a: 0, e: "Para que se aparten." },
    { q: "El ruido es…", o: ["un sonido molesto o muy fuerte", "el silencio", "una nota"], a: 0, e: "Molesta y cansa." },
    { q: "Para escuchar bien necesitamos…", o: ["silencio", "gritar", "correr"], a: 0, e: "Silencio y calma." },
    { q: "Un paisaje sonoro es…", o: ["una historia contada con sonidos", "un dibujo", "una foto"], a: 0, e: "Solo con sonidos." },
    { q: "El silencio en la música…", o: ["es importante", "no existe", "está prohibido"], a: 0, e: "También es música." },
  ],
  examen: [
    { q: "El sonido de las olas es…", o: ["natural", "artificial", "de la voz"], a: 0, e: "Lo hace el mar." },
    { q: "Antes de cruzar la calle, escuchamos si viene…", o: ["un coche", "un pájaro", "una canción"], a: 0, e: "Por seguridad." },
    { q: "Los cascos deben ir…", o: ["con volumen moderado", "a tope", "en los ojos"], a: 0, e: "Para cuidar el oído." },
    { q: "Un trueno es un sonido…", o: ["fuerte", "suave", "silencioso"], a: 0, e: "Muy fuerte." },
  ],
  feynman: ["Qué diferencia hay entre oír y escuchar", "Cómo se clasifican los sonidos del entorno", "Por qué hay que cuidar el oído del ruido"],
  mapa: mapa("SONIDOS DEL ENTORNO", "var(--pri)", [
    ["Dónde", "casa, calle, naturaleza", "#f08a24"],
    ["Tipos", "naturales y artificiales", "#1f9d55"],
    ["Cómo es", "fuerte, suave, largo, corto", "#1f4fd1"],
    ["Cuidar", "silencio y poco ruido", "#7b3fc4"],
  ], 230),
  tarjetas: [
    ["Oír", "Notar un sonido"],
    ["Escuchar", "Oír con atención"],
    ["Sonidos naturales", "Los hace la naturaleza: viento, agua, animales"],
    ["Sonidos artificiales", "Los hacen las máquinas y objetos"],
    ["Sonidos del cuerpo", "Palmas, pasos, chasquidos"],
    ["Ruido", "Sonido molesto o demasiado fuerte"],
    ["Silencio", "Cuando no se oye nada; también es música"],
    ["Paisaje sonoro", "Historia contada solo con sonidos"],
  ],
  familias: [
    "Haced un minuto de silencio en casa y apuntad todos los sonidos que oís.",
    "Jugad a adivinar sonidos con los ojos cerrados (llaves, papel, agua…).",
    "En un paseo, contad cuántos sonidos naturales y artificiales escucháis.",
    "Revisad el volumen de los cascos y la tele para cuidar el oído.",
  ],
  profesores: PROF("Música: escucha activa; discriminación auditiva de sonidos del entorno; clasificación (naturales, artificiales, corporales, vocales); cualidades básicas del sonido; silencio y contaminación acústica", ["Minuto de escucha con registro de sonidos.", "Adivinanzas sonoras con objetos ocultos.", "Paisaje sonoro dirigido por grupos."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
