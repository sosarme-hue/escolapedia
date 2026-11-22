// Educación Física 2º de Primaria: juegos populares. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, flechaR, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const saco = (x, y, c = P.marron) => `<path d="M${x - 14} ${y} L${x - 12} ${y - 34} L${x + 12} ${y - 34} L${x + 14} ${y}z" fill="${c}" stroke="var(--ink)"/>`;
const zapatilla = (x, y, c = P.azul) => `<path d="M${x - 14} ${y} q0 -10 10 -10 l6 -6 q8 0 10 8 l2 8z" fill="${c}" stroke="var(--ink)"/><path d="M${x - 14} ${y} H${x + 14}" stroke="#fff" stroke-width="2"/>`;
const canica = (x, y, c) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="var(--ink)"/><circle cx="${x - 2}" cy="${y - 2}" r="2" fill="#fff" opacity=".8"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "Juegos populares",
  minutos: 20,
  objetivos: ["Conocer y jugar juegos populares y tradicionales nuevos", "Respetar las normas de cada juego y los turnos", "Valorar los juegos como parte de nuestra cultura"],
  claves: ["juego popular", "tradición", "normas", "turno", "escondite inglés", "goma", "canicas", "soga"],
  pregunta: {
    texto: "¿A qué jugaban tus abuelos cuando eran pequeños, sin pantallas?",
    respuesta: "A <mark>juegos populares</mark>: la goma, las canicas, la zapatilla por detrás… Se jugaban en la calle, con muy pocas cosas, y han pasado de generación en generación. ¡Hoy los jugamos nosotros!",
  },
  bloques: [
    {
      html: `<h3>Juegos de siempre</h3><p>Los <mark>juegos populares</mark> son juegos que los niños aprenden unos de otros, sin libros ni instrucciones escritas.</p><p>Casi no necesitan material: una cuerda, una pelota, unas piedras o nada. Cada pueblo tiene sus versiones y sus canciones.</p><p>El año pasado conociste algunos, como el pañuelo o el escondite. Hoy aprendemos otros nuevos.</p>`,
      svg: svg("Un abuelo enseña a jugar a la peonza y a las canicas a sus nietos", `${nino(50, 156, { c: P.marron, s: 1.5, pelo: P.gris, pose: "palmas" })}${nino(140, 156, { c: P.azul, s: 1.1, pose: "agacha" })}${nino(200, 156, { c: P.rojo, s: 1.1, nina: true, pose: "agacha" })}<path d="M100 140 l10 -14 l10 14 l-10 6z" fill="${P.naranja}" stroke="var(--ink)"/>${canica(176, 150, P.azul)}${canica(226, 152, P.verde)}${suelo(158)}`),
      video: V("ef6b"),
    },
    {
      html: `<h3>El escondite inglés</h3><p>Un jugador se pone de cara a la pared y dice: <mark>«Un, dos, tres, ¡pollito inglés!»</mark>.</p><p>Mientras lo dice, los demás avanzan hacia él. Al terminar la frase, se gira: todos deben estar quietos como estatuas. Si ve a alguien moverse, ese vuelve al principio.</p><p>Gana quien llega primero y toca la pared.</p>`,
      svg: svg("Un niño de cara a la pared y otros niños quietos como estatuas detrás de él", `<rect x="214" y="20" width="40" height="140" fill="${P.gris}" opacity=".5"/>${nino(200, 156, { c: P.verde, s: 1.2 })}<circle cx="200" cy="82" r="12" fill="var(--ink)"/>${etq(150, 30, "«¡pollito inglés!»", P.verde, 12)}${nino(40, 156, { c: P.azul, pose: "corre", s: 1 })}${nino(90, 156, { c: P.rojo, pose: "equilibrio", s: 1, nina: true })}${nino(140, 156, { c: P.naranja, pose: "arriba", s: 1 })}${suelo(158)}`),
    },
    {
      html: `<h3>La zapatilla por detrás</h3><p>Nos sentamos en <mark>corro</mark>, mirando hacia el centro y con los ojos cerrados. Uno da vueltas por fuera con una zapatilla.</p><p>Cantamos: «A la zapatilla por detrás, tris, tras». El que da vueltas deja la zapatilla detrás de alguien y sigue andando.</p><p>Quien la encuentra, la coge y le persigue alrededor del corro. ¡Hay que llegar al hueco antes de que te pille!</p>`,
      svg: svg("Un corro de niños sentados y uno que corre por fuera tras dejar una zapatilla detrás de otro", `${[0, 1, 2, 3, 4, 5].map((i) => { const a = (i * 60 - 90) * Math.PI / 180; return `<circle cx="${(110 + Math.cos(a) * 46).toFixed(1)}" cy="${(96 + Math.sin(a) * 46).toFixed(1)}" r="12" fill="${[P.rojo, P.azul, P.verde, P.naranja, P.morado, P.rosa][i]}" stroke="var(--ink)"/>`; }).join("")}<circle cx="110" cy="96" r="72" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="6 5"/>${zapatilla(170, 136)}${nino(220, 160, { c: P.amarillo, pose: "corre", s: 0.9 })}${etq(220, 176, "tris, tras", P.naranja, 11)}`),
    },
    {
      html: `<h3>La goma</h3><p>Para jugar a <mark>la goma</mark> hacen falta tres personas y una goma elástica larga.</p><p>Dos se ponen dentro de la goma, separados, y la sujetan con los tobillos. El tercero salta siguiendo una canción: dentro, fuera, encima, pisando.</p><p>Si lo hace bien, la goma sube a las rodillas y luego a la cintura. ¡Cada vez más alto y más difícil!</p>`,
      svg: svg("Dos niñas sujetan una goma con los tobillos y una tercera salta dentro de ella", `${nino(40, 156, { c: P.morado, s: 1.3, nina: true })}${nino(220, 156, { c: P.verde, s: 1.3, nina: true })}<path d="M30 146 H230 M50 152 H210" stroke="${P.rojo}" stroke-width="2.5"/>${nino(130, 132, { c: P.rosa, pose: "salta", s: 1.2, nina: true })}${etq(130, 30, "dentro · fuera · encima", P.rojo, 12)}${etq(130, 174, "tobillos → rodillas → cintura", "var(--muted)", 11)}${suelo(158)}`),
    },
    {
      html: `<h3>Las canicas y las chapas</h3><p>Las <mark>canicas</mark> son bolitas de cristal. Se juega empujándolas con el dedo pulgar para meterlas en un agujero o para golpear las de los demás.</p><p>Las <mark>chapas</mark> son tapones de botella. Se dibuja un circuito en el suelo y se avanza dándoles golpecitos con el dedo.</p><p>Son juegos de puntería y de paciencia. ¡No hace falta correr!</p>`,
      svg: svg("Un dedo empuja una canica hacia un agujero, y un circuito de chapas dibujado con tiza", `<ellipse cx="60" cy="140" rx="16" ry="6" fill="#5d4037"/>${canica(140, 136, P.azul)}${canica(110, 120, P.verde)}${canica(30, 112, P.rojo)}<path d="M170 132 q10 -10 22 -6 l14 4" stroke="${P.piel}" stroke-width="10" stroke-linecap="round" fill="none"/>${flechaR(130, 140, 80, 140, P.rojo)}${etq(90, 170, "canicas", P.azul, 12)}<path d="M150 30 q60 -10 90 20 q10 30 -30 40" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 4"/>${[[160, 32, P.rojo], [210, 34, P.amarillo], [236, 60, P.verde]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="7" fill="${c}" stroke="var(--ink)"/>`).join("")}${etq(200, 100, "chapas", P.rojo, 12)}`),
    },
    {
      html: `<h3>La carrera de sacos</h3><p>En la <mark>carrera de sacos</mark>, cada jugador se mete dentro de un saco. Lo sujeta con las manos a la altura de la cintura.</p><p>Hay que llegar a la meta saltando con los pies juntos, sin salirse del saco. Si te caes, te levantas y sigues.</p><p>Es un juego típico de las fiestas de los pueblos. ¡Las caídas dan mucha risa!</p>`,
      svg: svg("Tres niños saltan metidos en sacos hacia una meta", `${[0, 1, 2].map((i) => `${nino(46 + i * 64, 150 - (i % 2) * 10, { c: [P.rojo, P.azul, P.verde][i], pose: "palmas", s: 1 })}${saco(46 + i * 64, 152 - (i % 2) * 10, ["#a1887f", "#bcaaa4", "#8d6e63"][i])}`).join("")}<path d="M236 60 V158" stroke="var(--ink)" stroke-width="3"/><path d="M236 60 h20 v12 h-20z" fill="${P.rojo}"/>${etq(236, 174, "meta", P.rojo, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Tirar de la soga</h3><p>Dos equipos se colocan a cada lado de una <mark>cuerda larga</mark>. En el centro hay una marca y una línea en el suelo.</p><p>Al oír la señal, cada equipo tira hacia su lado. Gana el que consigue que la marca pase su línea.</p><p>Hay que tirar todos a la vez, con los pies bien apoyados y el cuerpo hacia atrás. ¡La fuerza del equipo es más que la de uno solo!</p>`,
      svg: svg("Dos equipos tiran de una cuerda con un pañuelo en el centro sobre una línea", `<path d="M14 110 H246" stroke="#a1887f" stroke-width="5"/><path d="M130 100 l6 14 h-12z" fill="${P.rojo}"/><path d="M130 70 V160" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4"/>${[0, 1].map((i) => nino(36 + i * 36, 156, { c: P.azul, pose: "brazos", s: 1 })).join("")}${[0, 1].map((i) => nino(188 + i * 36, 156, { c: P.naranja, pose: "brazos", s: 1 })).join("")}${flechaR(60, 50, 20, 50, P.azul)}${flechaR(200, 50, 240, 50, P.naranja)}${etq(130, 40, "¡tirad!", "var(--pen)", 13)}${suelo(158)}`),
    },
    {
      html: `<h3>Juegos de todo el mundo</h3><p>En todos los países se juega a <mark>juegos parecidos</mark>, con otros nombres.</p><p>El escondite inglés se llama «luz roja, luz verde» en otros lugares. La rayuela se juega desde hace cientos de años en muchos países. Las canicas son tan antiguas que se han encontrado en ruinas muy viejas.</p><p>Jugar es algo que une a todos los niños del mundo.</p>`,
      svg: svg("Un globo terráqueo rodeado de niños de la mano", `<circle cx="130" cy="72" r="44" fill="${P.celeste}" stroke="var(--ink)"/><path d="M100 54 q14 -14 30 -4 q6 14 -10 18 q-16 6 -20 -14z M140 82 q20 -10 26 6 q-4 20 -22 16z M110 100 q10 -4 14 6" fill="${P.verde}"/>${[0, 1, 2, 3, 4].map((i) => nino(30 + i * 50, 170, { c: [P.rojo, P.azul, P.naranja, P.morado, P.verde][i], pose: "brazos", s: 0.7, nina: i % 2 === 1 })).join("")}`),
    },
    {
      html: `<h3>Jugamos al museo de los juegos</h3><p>Cada uno pregunta en casa a sus padres o abuelos. ¿A qué <mark>jugaban de pequeños</mark>?</p><p>Apuntamos su nombre, cómo se juega y qué material hace falta. Lo traemos a clase y lo explicamos a los compañeros.</p><p>Después, ¡lo probamos todos en el patio! Así hacemos un museo de juegos vivos que no se olvidarán.</p>`,
      svg: svg("Una ficha del museo de juegos con nombre, cómo se juega y material, y un niño que la explica", `<rect x="16" y="24" width="140" height="130" rx="10" fill="var(--card)" stroke="${P.azul}" stroke-width="2.5"/>${etq(86, 48, "Mi juego", P.azul, 14)}${["nombre: …", "cómo se juega: …", "material: …", "me lo enseñó: …"].map((t, i) => `<path d="M28 ${72 + i * 22} H144" stroke="var(--line)"/>${rot(30, 68 + i * 22, t, { size: 10, anchor: "start" })}`).join("")}${nino(210, 156, { c: P.naranja, pose: "canta", s: 1.4, boca: "abierta" })}${suelo(158)}`),
    },
  ],
  figura: {
    titulo: "Juegos populares",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Juegos populares: la goma, las canicas, la carrera de sacos y tirar de la soga"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Juegos de siempre, para jugar hoy", { size: 22, color: "var(--pen)" })}${nino(60, 170, { c: P.morado, s: 1.2, nina: true })}${nino(180, 170, { c: P.verde, s: 1.2, nina: true })}<path d="M50 160 H190" stroke="${P.rojo}" stroke-width="2.5"/>${nino(120, 150, { c: P.rosa, pose: "salta", s: 1.1, nina: true })}${rot(120, 200, "la goma", { size: 16 })}${canica(270, 160, P.azul)}${canica(300, 150, P.verde)}${canica(320, 168, P.rojo)}${rot(296, 200, "canicas", { size: 16 })}${nino(420, 172, { c: P.azul, pose: "palmas", s: 1.2 })}${saco(420, 174, "#a1887f")}${rot(420, 200, "sacos", { size: 16 })}<path d="M480 150 H620" stroke="#a1887f" stroke-width="4"/>${nino(500, 172, { c: P.naranja, pose: "brazos", s: 1 })}${nino(600, 172, { c: P.azul, pose: "brazos", s: 1 })}${rot(550, 200, "la soga", { size: 16 })}${rot(320, 260, "Pocas cosas, muchas risas y normas que todos respetan", { size: 16 })}</svg>`,
  },
  video: V("ef6v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Juega al escondite inglés.",
      pasos: ["Uno de cara a la pared dice «un, dos, tres, ¡pollito inglés!».", "Los demás avanzan y, al girarse él, se quedan quietos.", "Quien se mueve vuelve al principio."],
      resultado: "Gana quien toca la pared primero." },
    { enunciado: "Prepara una partida de la goma.",
      pasos: ["Hacen falta tres personas y una goma larga.", "Dos la sujetan con los tobillos.", "La tercera salta: dentro, fuera, encima."],
      resultado: "Si sale bien, la goma sube a las rodillas." },
    { enunciado: "Organiza tirar de la soga.",
      pasos: ["Dos equipos iguales, uno a cada lado.", "Una marca en el centro y una línea en el suelo.", "A la señal, todos tiran a la vez."],
      resultado: "Gana el equipo que pasa la marca a su lado." },
  ],
  errores: [
    "Moverse cuando el del escondite inglés se gira y decir que no.",
    "Soltar la soga de golpe: los del otro equipo pueden caerse.",
    "Abrir los ojos en la zapatilla por detrás para ver dónde la deja.",
    "Pensar que los juegos de antes son aburridos sin probarlos.",
  ],
  ejercicios: [
    { q: "¿Qué es un juego popular?", sol: "Un juego que los niños aprenden unos de otros y pasa de generación en generación." },
    { q: "¿Qué se dice en el escondite inglés?", sol: "«Un, dos, tres, ¡pollito inglés!»." },
    { q: "Explica la zapatilla por detrás.", sol: "En corro; uno deja la zapatilla detrás de alguien y este le persigue." },
    { q: "¿Cuántas personas hacen falta para la goma?", sol: "Tres como mínimo." },
    { q: "¿Con qué dedo se empujan las canicas?", sol: "Con el pulgar." },
    { q: "¿Cómo se avanza en la carrera de sacos?", sol: "Saltando con los pies juntos dentro del saco." },
    { q: "¿Cómo gana un equipo al tirar de la soga?", sol: "Cuando la marca del centro pasa su línea." },
    { q: "¿Por qué los juegos populares son parte de nuestra cultura?", sol: "Porque los han jugado nuestros padres y abuelos y los seguimos jugando." },
    { q: "Pregunta en casa por un juego popular y explícalo.", sol: "Respuesta libre." },
    { q: "Inventa una canción para saltar a la goma.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "Los juegos populares necesitan…", o: ["poco material", "una consola", "mucho dinero"], a: 0, e: "Poco material." },
    { q: "En el escondite inglés, al girarse…", o: ["todos quietos", "todos corren", "todos gritan"], a: 0, e: "Estatuas." },
    { q: "La zapatilla por detrás se juega en…", o: ["corro", "fila", "parejas"], a: 0, e: "Corro." },
    { q: "La goma se sujeta primero con…", o: ["los tobillos", "las orejas", "las manos"], a: 0, e: "Tobillos." },
    { q: "Las canicas son de…", o: ["cristal", "papel", "goma"], a: 0, e: "Cristal." },
    { q: "Las chapas son…", o: ["tapones de botella", "piedras grandes", "cuerdas"], a: 0, e: "Tapones." },
    { q: "En la carrera de sacos saltamos con…", o: ["los pies juntos", "un pie", "las manos"], a: 0, e: "Pies juntos." },
    { q: "Para tirar de la soga hay que tirar…", o: ["todos a la vez", "cada uno cuando quiera", "con un dedo"], a: 0, e: "A la vez." },
    { q: "El escondite inglés en otros países se llama…", o: ["luz roja, luz verde", "pañuelo", "canicas"], a: 0, e: "Luz roja, luz verde." },
    { q: "Los juegos populares pasan…", o: ["de generación en generación", "solo en la tele", "nunca"], a: 0, e: "De abuelos a nietos." },
  ],
  examen: [
    { q: "La carrera de sacos es típica de…", o: ["las fiestas de los pueblos", "las piscinas", "los aviones"], a: 0, e: "Fiestas." },
    { q: "En la goma, si sale bien, la goma…", o: ["sube", "baja", "se rompe"], a: 0, e: "Sube." },
    { q: "Las canicas son un juego de…", o: ["puntería", "velocidad", "fuerza"], a: 0, e: "Puntería y paciencia." },
    { q: "Al tirar de la soga, el cuerpo va…", o: ["hacia atrás", "hacia delante", "tumbado"], a: 0, e: "Hacia atrás." },
  ],
  feynman: ["Qué son los juegos populares", "Cómo se juega al escondite inglés y a la goma", "Por qué es importante conservar estos juegos"],
  mapa: mapa("JUEGOS POPULARES", "var(--pri)", [
    ["Correr", "escondite inglés, zapatilla", "#e53935"],
    ["Saltar", "la goma, sacos", "#1e88e5"],
    ["Puntería", "canicas, chapas", "#43a047"],
    ["Fuerza", "tirar de la soga", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Juego popular", "Se aprende de otros niños"],
    ["Escondite inglés", "«Un, dos, tres, ¡pollito inglés!»"],
    ["Zapatilla por detrás", "Corro con ojos cerrados"],
    ["La goma", "Saltar dentro, fuera, encima"],
    ["Canicas", "Bolitas de cristal con el pulgar"],
    ["Chapas", "Tapones por un circuito"],
    ["Sacos", "Carrera saltando dentro"],
    ["Soga", "Dos equipos tiran de la cuerda"],
  ],
  familias: [
    "Contad a vuestros hijos a qué jugabais de pequeños y jugad juntos.",
    "Dibujad un circuito de chapas con tiza en la calle.",
    "Jugad al escondite inglés en el pasillo de casa.",
    "Preparad una ficha del juego para el museo de juegos de la clase.",
  ],
  profesores: PROF("Educación Física: juegos populares y tradicionales como patrimonio cultural; habilidades motrices en contexto lúdico (desplazamientos, saltos, puntería, fuerza); normas, turnos y cooperación; transmisión intergeneracional", ["Escondite inglés y zapatilla por detrás.", "Estaciones de goma, chapas, canicas y sacos.", "Museo de juegos con aportaciones de las familias."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Jugar a la rayuela, la comba y los juegos de corro", "Conocer canciones de juegos tradicionales", "Echar a suertes de forma justa", "Construir juguetes tradicionales sencillos"],
  lectura: { titulo: "El patio del abuelo Antonio", html: `<p>Un día de lluvia, la clase de segundo no pudo salir al recreo. Estaban aburridos mirando por la ventana.</p><p>Entonces llegó el abuelo Antonio, que venía a recoger a su nieta Sara.</p><p>—¿Sabéis a qué jugaba yo en el patio cuando tenía vuestra edad? —preguntó.</p><p>—¿A la consola? —dijo Pablo. Todos se rieron.</p><p>—¡No había consolas! Jugábamos a la <b>rayuela</b>, a la <b>comba</b>, al <b>pañuelo</b>, a las <b>canicas</b> y al <b>corro de la patata</b>.</p><p>El abuelo sacó una tiza del bolsillo y dibujó una rayuela en el suelo del pasillo. Después, les enseñó a lanzar una piedrecita y a saltar a la pata coja sin pisar las rayas.</p><p>Luego formaron un corro y cantaron «<i>Al corro de la patata, comeremos ensalada…</i>». Al llegar a «<i>¡achupé, achupé, sentadita me quedé!</i>», todos se sentaron en el suelo muertos de risa.</p><p>Cuando sonó el timbre, nadie quería volver a clase.</p><p>—Abuelo, ¿vendrás mañana? —preguntó Sara.</p><p>—¡Y traeré mis canicas! —respondió él, guiñando un ojo.</p>` },
  tras: {
    "El escondite inglés": [
      ["La rayuela", `<p>La <mark>rayuela</mark> (también llamada truquemé, charranca o tejo) es uno de los juegos tradicionales más conocidos.</p><p>Cómo se juega:</p><ul><li>Se dibuja en el suelo con <b>tiza</b> un camino de casillas numeradas del 1 al 10.</li><li>Se lanza una <b>piedra</b> plana o una ficha a la casilla 1.</li><li>Se salta a la <b>pata coja</b> por todas las casillas, sin pisar la que tiene la piedra ni las rayas. En las casillas dobles se apoyan los dos pies.</li><li>Al volver, se recoge la piedra sin apoyar el otro pie.</li><li>Luego se lanza a la casilla 2, y así sucesivamente.</li></ul><p>Si pisas la raya, te caes o la piedra cae fuera, pierdes el turno.</p><p>La rayuela se juega en muchos países del mundo, ¡desde hace cientos de años!</p><p><b>Actividad</b>: dibuja una rayuela en el patio y juega con tus compañeros.</p>`,
        L6.filas("Rayuela", [["tiza", "casillas", cAZ], ["piedra", "lanzar", cNA], ["pata coja", "saltar", cVE], ["raya", "no pisar", cRO]]),
        ["oGOSzWwXl3I", "La rayuela - Juegos tradicionales", "Mundo Lanugo", 272248]],
    ],
    "La goma": [
      ["Juegos de corro", `<p>En los <mark>juegos de corro</mark> nos damos la mano formando un círculo y cantamos mientras giramos:</p><ul><li><b>El corro de la patata</b>: «Al corro de la patata, comeremos ensalada, como comen los señores, naranjitas y limones. ¡Achupé, achupé, sentadita me quedé!» Al final, todos se sientan.</li><li><b>Al pasar la barca</b>: dos hacen un puente con los brazos y los demás pasan por debajo. Al terminar la canción, el puente atrapa a uno.</li><li><b>El patio de mi casa</b>: «…que llueva, que llueva…» y nos agachamos.</li><li><b>Antón Pirulero</b>: cada uno imita un instrumento y hay que estar muy atentos.</li></ul><p>Los juegos de corro unen música, movimiento y amistad. Se han cantado durante generaciones y los abuelos todavía se los saben.</p><p><b>Actividad</b>: pregunta en casa por una canción de corro y enséñala en clase.</p>`,
        H6.rueda("Corro", "CORRO", [["patata", cNA], ["barca", cAZ], ["patio", cVE], ["Pirulero", cRO]])],
    ],
    "La carrera de sacos": [
      ["Echar a suertes", `<p>Antes de empezar un juego, a veces hay que decidir <b>quién empieza</b> o quién «se la queda». Para que sea justo, echamos a <mark>suertes</mark>:</p><ul><li><b>Pito, pito, gorgorito</b>: uno va señalando a cada jugador mientras dice la retahíla: «Pito, pito, gorgorito, dónde vas tú tan bonito…». Al que le toca la última palabra, ¡se la queda!</li><li><b>Piedra, papel o tijera</b>: la piedra rompe la tijera, la tijera corta el papel y el papel envuelve la piedra.</li><li><b>Pares o nones</b>: cada uno saca dedos de una mano y se suman.</li><li><b>Los pies</b>: dos capitanes van poniendo un pie delante del otro hasta que se encuentran. El que pisa al otro, elige primero.</li><li><b>La moneda</b>: cara o cruz.</li></ul><p>Echar a suertes evita discusiones: todos aceptan el resultado.</p><p><b>Actividad</b>: aprende de memoria «Pito, pito, gorgorito» y úsalo para empezar un juego.</p>`,
        H6.dos("Suertes", ["DECIR", ["pito, pito", "pares o nones", "cara o cruz"], cMO], ["MANOS", ["piedra", "papel", "tijera"], cAZ])],
    ],
    "Juegos de todo el mundo": [
      ["Juguetes que hacemos nosotros", `<p>Antes, muchos niños fabricaban sus propios <mark>juguetes</mark> con cosas sencillas:</p><ul><li><b>Zancos de lata</b>: dos latas con dos cuerdas para caminar más altos.</li><li><b>Boliche</b>: un vaso de yogur atado con un hilo a una bolita; hay que meter la bola en el vaso.</li><li><b>Peonza de tapón</b>: un tapón con un palillo que gira como una peonza.</li><li><b>Pelota de calcetín</b>: un calcetín viejo relleno de trapos.</li><li><b>Diábolo de botellas</b>: dos mitades de botella unidas.</li><li><b>Cometa</b>: con cañas, papel y cuerda.</li></ul><p>Construir tus propios juguetes es divertido, desarrolla la imaginación y ayuda a <b>reciclar</b>.</p><p>Y además ¡un juguete hecho por ti es único!</p><p><b>Actividad</b>: fabrica un boliche con un vaso de yogur, un hilo y una bolita de papel de aluminio.</p>`,
        H6.flujo("Boliche", ["vaso|yogur", "hilo|atar", "bola|aluminio", "¡a jugar!|meter"], cVE)],
    ],
  },
  final: [
    ["Las canicas", `<p>Las <mark>canicas</mark> son bolitas de cristal de colores. Se juega con ellas desde hace miles de años: ¡se han encontrado canicas en tumbas del antiguo Egipto!</p><p>Algunos juegos de canicas:</p><ul><li><b>El guá</b>: se hace un agujerito en la tierra (el guá) y hay que meter la canica empujándola con el dedo.</li><li><b>El triángulo</b>: se ponen canicas dentro de un triángulo dibujado y hay que sacarlas golpeándolas con la propia.</li><li><b>La carrera</b>: se dibuja un circuito en la arena y cada uno avanza su canica por turnos.</li></ul><p>Para lanzar, se apoya la canica en el dedo índice doblado y se empuja con el <b>pulgar</b>.</p><p>Las canicas se llaman de muchas formas según el lugar: bolas, boliches, pitos, cicas…</p><p><b>Actividad</b>: haz un circuito de canicas en el arenero o con cartón y cinta adhesiva.</p>`,
      L6.filas("Canicas", [["guá", "agujero", cAZ], ["triángulo", "sacar", cRO], ["carrera", "circuito", cVE], ["pulgar", "empuja", cNA]])],
    ["Repaso: el patio del abuelo Antonio", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Es un día de <b>lluvia</b> y no pueden salir al recreo.</li><li>El abuelo Antonio jugaba a la <b>rayuela</b>, la <b>comba</b>, el <b>pañuelo</b>, las <b>canicas</b> y el <b>corro de la patata</b>.</li><li>Dibuja la rayuela con <b>tiza</b>.</li><li>Les enseña a saltar a la <b>pata coja</b> sin pisar las rayas.</li><li>Cantan «<b>Al corro de la patata</b>» y se sientan al final.</li><li>Al día siguiente traerá sus <b>canicas</b>.</li></ul><p>Los juegos tradicionales pasan de abuelos a nietos. No necesitan pilas ni pantallas: solo amigos, imaginación y ganas de jugar.</p><p><b>Actividad</b>: entrevista a una persona mayor sobre sus juegos favoritos de niño.</p>`,
      H6.flujo("Abuelo", ["lluvia|aburridos", "tiza|rayuela", "corro|patata", "mañana|canicas"], cNA)],
  ],
  ejemplos: [
    ["En piedra, papel o tijera, ¿qué gana a la piedra?", ["El papel la envuelve."], "El papel."],
    ["¿Qué pasa en la rayuela si pisas una raya?", ["Es una norma del juego."], "Pierdes el turno."],
  ],
  errores: ["Saltar la rayuela con los dos pies en las casillas simples.", "Discutir quién empieza en vez de echar a suertes."],
  ejercicios: [
    ["b", "¿Con qué se dibuja la rayuela?", "Con tiza."],
    ["b", "¿Cómo se salta en la rayuela?", "A la pata coja."],
    ["b", "Di un juego de corro.", "El corro de la patata, Al pasar la barca."],
    ["b", "¿Qué gana a la tijera?", "La piedra."],
    ["b", "¿De qué son las canicas?", "De cristal."],
    ["m", "¿Cómo acaba el corro de la patata?", "Achupé, achupé, sentadita me quedé."],
    ["m", "¿Para qué sirve echar a suertes?", "Para decidir de forma justa."],
    ["m", "¿Cómo se lanza una canica?", "Empujándola con el pulgar."],
    ["m", "¿Qué necesitas para un boliche?", "Un vaso de yogur, un hilo y una bolita."],
    ["m", "Explica el juego de los pies para elegir.", "Los capitanes avanzan pie con pie; quien pisa al otro elige."],
    ["a", "En la lectura, ¿por qué no salen al recreo?", "Porque llueve."],
    ["a", "¿Qué juegos dice el abuelo?", "Rayuela, comba, pañuelo, canicas y corro de la patata."],
    ["a", "Inventa un juguete con material reciclado.", "Respuesta libre."],
    ["a", "¿Por qué crees que los juegos tradicionales han durado tanto?", "Porque son divertidos, sencillos y se enseñan de abuelos a nietos."],
  ],
  quiz: [
    ["En la rayuela se lanza una…", ["piedra", "pelota", "cuerda"], "Rayuela."],
    ["«Achupé» es del…", ["corro de la patata", "escondite", "pañuelo"], "Corro."],
    ["La tijera gana al…", ["papel", "piedra", "nadie"], "Suertes."],
    ["Un boliche se hace con…", ["vaso de yogur", "una rueda", "un balón"], "Juguetes."],
    ["El agujerito de las canicas es el…", ["guá", "gol", "pito"], "Canicas."],
  ],
  examen: [
    ["En la lectura, ¿cómo se llama la nieta?", ["Sara", "Marta", "Lucía"], "Lectura."],
    ["¿Qué traerá el abuelo mañana?", ["canicas", "una consola", "un balón"], "Repaso."],
  ],
  tarjetas: [
    ["Rayuela", "Tiza, piedra, pata coja, sin pisar las rayas."],
    ["Echar a suertes", "Pito pito, piedra-papel-tijera, pares o nones."],
  ],
  glosario: [
    ["Rayuela", "Juego de saltar casillas a la pata coja."],
    ["Pata coja", "Saltar con un solo pie."],
    ["Corro", "Círculo de personas de la mano."],
    ["Retahíla", "Serie de palabras que se dicen seguidas."],
    ["Echar a suertes", "Decidir al azar."],
    ["Canica", "Bolita de cristal para jugar."],
    ["Guá", "Agujero del juego de canicas."],
    ["Boliche", "Juguete de vaso y bola atada."],
    ["Tradicional", "Que viene de antiguo."],
    ["Generación", "Personas nacidas en la misma época."],
  ],
  situacion: {
    titulo: "Feria de juegos tradicionales",
    reto: "La clase organiza una feria de juegos tradicionales en el patio, con puestos de rayuela, corro, canicas y juguetes fabricados.",
    pasos: ["Preguntar en casa por juegos y canciones antiguas.", "Fabricar juguetes con material reciclado.", "Preparar un puesto por grupo con las normas escritas.", "Invitar a las familias y jugar juntos."],
    producto: "Una feria de juegos tradicionales.",
    evaluacion: ["Juega a la rayuela respetando normas.", "Canta y juega juegos de corro.", "Echa a suertes de forma justa.", "Construye un juguete tradicional."],
  },
});
