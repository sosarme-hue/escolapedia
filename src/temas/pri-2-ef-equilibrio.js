// Educación Física 2º de Primaria: el equilibrio. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, flechaR, aro, cono, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const banco = (x1, x2, y) => `<rect x="${x1}" y="${y}" width="${x2 - x1}" height="10" rx="3" fill="#cd853f" stroke="var(--ink)"/><path d="M${x1 + 10} ${y + 10} V${y + 26} M${x2 - 10} ${y + 10} V${y + 26}" stroke="#8b4513" stroke-width="5"/>`;
const apoyo = (x, y) => `<circle cx="${x}" cy="${y}" r="5" fill="${P.rojo}" stroke="#fff" stroke-width="1.5"/>`;

module.exports = {
  materia: "Educación Física",
  curso: "2-primaria",
  titulo: "El equilibrio",
  minutos: 20,
  objetivos: ["Mantener el equilibrio quietos y en movimiento con menos apoyos", "Caminar sobre líneas y bancos bajos llevando objetos", "Recuperar el equilibrio después de girar o saltar"],
  claves: ["equilibrio", "apoyos", "estático", "dinámico", "banco", "punto fijo", "postura", "control"],
  pregunta: {
    texto: "¿Por qué es más fácil estar a cuatro patas que sobre un solo pie?",
    respuesta: "Porque con <mark>más apoyos</mark> en el suelo, el cuerpo está más seguro. Con menos apoyos, necesitamos más <b>equilibrio</b>. ¡Hoy ponemos a prueba el nuestro!",
  },
  bloques: [
    {
      html: `<h3>Más apoyos, más fácil</h3><p>Los <mark>apoyos</mark> son las partes del cuerpo que tocan el suelo.</p><p>A cuatro patas tenemos cuatro apoyos: es muy fácil no caerse. De pie, dos. Sobre un pie, solo uno: ¡es más difícil!</p><p>Prueba: ¿puedes sostenerte con tres apoyos? ¿Y con una mano y un pie? Cuantos menos apoyos, más equilibrio necesitas.</p>`,
      svg: svg("Tres posturas con cuatro, dos y un apoyo, marcados con puntos rojos", `<path d="M30 108 H66 M30 108 L26 140 M30 108 L38 140 M66 108 L62 140 M66 108 L74 140" stroke="${P.azul}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="20" cy="100" r="10" fill="${P.piel}"/>${apoyo(26, 140)}${apoyo(38, 140)}${apoyo(62, 140)}${apoyo(74, 140)}${etq(46, 166, "4 apoyos", P.azul, 12)}${nino(130, 140, { c: P.verde, s: 1.2 })}${apoyo(120, 140)}${apoyo(140, 140)}${etq(130, 166, "2 apoyos", P.verde, 12)}${nino(214, 140, { c: P.rojo, pose: "equilibrio", s: 1.2 })}${apoyo(214, 140)}${etq(214, 166, "1 apoyo", P.rojo, 12)}${suelo(142)}`),
    },
    {
      html: `<h3>Equilibrio quieto</h3><p>El <mark>equilibrio estático</mark> es aguantar una postura sin moverse.</p><p>Probamos figuras. El <b>flamenco</b>: sobre un pie, con el otro doblado. El <b>avión</b>: sobre un pie, con el cuerpo inclinado y los brazos abiertos. La <b>estatua</b>: quietos como de piedra.</p><p>Contamos hasta cinco sin movernos. ¡Luego hasta diez!</p>`,
      svg: svg("Tres figuras de equilibrio: flamenco, avión y estatua", `${nino(46, 150, { c: P.rosa, pose: "equilibrio", s: 1.3, nina: true })}${etq(46, 170, "flamenco", P.rosa, 12)}<g transform="translate(144 150)" stroke-linecap="round"><path d="M0 0 V-32 M0 -32 L-34 -40 M0 -32 L36 -44 M-18 -36 L-12 -54 M-18 -36 L-26 -18" stroke="${P.azul}" stroke-width="5" fill="none"/><circle cx="-44" cy="-42" r="10" fill="${P.piel}"/></g>${etq(130, 170, "avión", P.azul, 12)}${nino(214, 150, { c: P.gris, pose: "arriba", s: 1.3 })}${etq(214, 170, "estatua", "var(--ink)", 12)}${suelo(152)}`),
    },
    {
      html: `<h3>Trucos para no caerse</h3><p>Hay <mark>tres trucos</mark> que ayudan mucho.</p><p><b>Mirar un punto fijo</b> delante, a la altura de los ojos. <b>Abrir los brazos</b>, como un equilibrista con su barra. <b>Apretar la barriga</b>, para que el cuerpo esté firme.</p><p>Prueba a cerrar los ojos sobre un pie: es mucho más difícil, porque los ojos nos ayudan a mantenernos.</p>`,
      svg: svg("Un niño en equilibrio mira una estrella en la pared, con los brazos abiertos y la barriga firme", `${nino(80, 156, { c: P.verde, pose: "equilibrio", s: 1.8 })}<path d="M210 50 l5 12 h13 l-10 8 4 13 -12 -8 -12 8 4 -13 -10 -8 h13z" fill="${P.amarillo}" stroke="#c49000"/><path d="M96 46 L196 64" stroke="var(--pen)" stroke-dasharray="5 5" stroke-width="2"/>${etq(210, 104, "punto fijo", "var(--pen)", 12)}${etq(200, 130, "brazos abiertos", P.verde, 12)}${etq(200, 152, "barriga firme", P.rojo, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Equilibrio en movimiento</h3><p>El <mark>equilibrio dinámico</mark> es no caerse mientras nos movemos.</p><p>Caminamos sobre una línea pintada, poniendo un pie justo delante del otro, como un funambulista en la cuerda. Luego, hacia atrás. Luego, de puntillas.</p><p>Si nos salimos, no pasa nada: volvemos a la línea y seguimos. ¡Despacio se llega más lejos!</p>`,
      svg: svg("Una niña camina sobre una línea con los brazos abiertos como un funambulista", `<path d="M10 150 H250" stroke="${P.azul}" stroke-width="6"/>${nino(130, 148, { c: P.morado, pose: "brazos", s: 1.7, nina: true })}${[40, 66, 194, 220].map((x, i) => `<ellipse cx="${x}" cy="150" rx="9" ry="4" fill="${i < 2 ? P.morado : "var(--line)"}"/>`).join("")}${etq(130, 172, "un pie delante del otro", P.azul, 12)}`),
      video: V("ef4b"),
    },
    {
      html: `<h3>Sobre el banco</h3><p>Cuando ya caminamos bien sobre la línea, subimos a un <mark>banco bajo</mark>.</p><p>Caminamos de frente, de lado y agachados. Al final, bajamos con un pequeño salto, cayendo con las rodillas dobladas.</p><p>Un compañero va al lado, sin tocarnos, por si necesitamos ayuda. ¡Siempre con un adulto delante y sin empujar!</p>`,
      svg: svg("Un niño camina sobre un banco bajo y un compañero va a su lado para ayudarle", `${banco(16, 176, 120)}${nino(80, 120, { c: P.azul, pose: "brazos", s: 1.3 })}${nino(216, 156, { c: P.naranja, pose: "palmas", s: 1.1, nina: true })}${flechaR(110, 56, 160, 56, P.rojo)}${etq(96, 172, "banco bajo", "#8b4513", 12)}${etq(216, 174, "ayudante", P.naranja, 11)}`),
    },
    {
      html: `<h3>Llevar objetos</h3><p>Más difícil todavía: mantener el equilibrio <mark>llevando algo</mark>.</p><p>Un saquito sobre la cabeza, una pelota sobre una raqueta o un vaso de plástico en la mano. ¡Que no se caiga!</p><p>Para conseguirlo, caminamos despacio, con la espalda recta y mirando al frente. El cuerpo tiene que estar tranquilo para que el objeto no se mueva.</p>`,
      svg: svg("Una niña camina con un saquito en la cabeza y un niño lleva una pelota en una raqueta", `${nino(70, 156, { c: P.rosa, s: 1.6, nina: true })}<rect x="56" y="34" width="28" height="12" rx="4" fill="${P.amarillo}" stroke="var(--ink)"/>${etq(70, 174, "saquito", P.rosa, 12)}${nino(190, 156, { c: P.verde, s: 1.6, pose: "palmas" })}<ellipse cx="214" cy="80" rx="16" ry="6" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M198 82 L190 92" stroke="var(--ink)" stroke-width="3"/><circle cx="214" cy="72" r="6" fill="${P.rojo}"/>${etq(190, 174, "pelota en raqueta", P.verde, 12)}${suelo(158)}`),
    },
    {
      html: `<h3>Equilibrio después de girar</h3><p>Al <mark>girar o saltar</mark>, el equilibrio se pone a prueba.</p><p>Probamos: damos una vuelta sobre nosotros mismos y nos quedamos sobre un pie. O saltamos y caemos sin movernos, como si los pies se pegaran al suelo.</p><p>Al principio nos tambaleamos. Con práctica, el cuerpo aprende a recuperarse más rápido.</p>`,
      svg: svg("Un niño gira, después salta y cae quieto como si tuviera los pies pegados", `${nino(46, 150, { c: P.naranja, pose: "brazos", s: 1.1 })}<path d="M60 50 A14 14 0 1 1 46 36" fill="none" stroke="${P.rojo}" stroke-width="3"/><path d="M46 36 l10 -6 v12z" fill="${P.rojo}"/>${flechaR(78, 120, 100, 120, "var(--line)")}${nino(130, 136, { c: P.naranja, pose: "salta", s: 1.1 })}${flechaR(158, 120, 180, 120, "var(--line)")}${nino(214, 150, { c: P.naranja, pose: "agacha", s: 1.1 })}<path d="M200 156 h28" stroke="${P.verde}" stroke-width="4"/>${etq(214, 172, "¡pegado!", P.verde, 12)}${suelo(152)}`),
    },
    {
      html: `<h3>Equilibrio por parejas</h3><p>Con un <mark>compañero</mark> podemos hacer equilibrios que solos no saldrían.</p><p>Nos cogemos de las manos, de frente, y nos ponemos los dos sobre un pie. O nos apoyamos espalda con espalda y bajamos juntos hasta sentarnos.</p><p>Hay que confiar en el otro y moverse a la vez. ¡Si uno se mueve, los dos se caen!</p>`,
      svg: svg("Dos niños cogidos de las manos sobre un pie y otros dos espalda con espalda", `${nino(40, 150, { c: P.azul, pose: "equilibrio", s: 1.2 })}${nino(86, 150, { c: P.rojo, pose: "equilibrio", s: 1.2, nina: true })}<circle cx="63" cy="96" r="5" fill="${P.amarillo}"/>${etq(63, 170, "de las manos", P.azul, 11)}${nino(176, 150, { c: P.verde, pose: "brazos", s: 1.2 })}${nino(204, 150, { c: P.morado, pose: "brazos", s: 1.2, nina: true })}${etq(190, 170, "espalda con espalda", P.verde, 11)}${suelo(152)}`),
    },
    {
      html: `<h3>Jugamos a cruzar el río</h3><p>Ponemos aros en el suelo: son <mark>piedras en un río</mark>. El suelo es agua.</p><p>Hay que cruzar de una orilla a otra pisando solo dentro de los aros. En algunos aros se pisa con un pie; en otros, con los dos.</p><p>Si alguien pisa el agua, vuelve a la orilla y lo intenta otra vez. ¡Cuidado, que hay cocodrilos!</p>`,
      svg: svg("Un río azul con aros como piedras y un niño saltando de uno a otro", `<rect x="40" y="40" width="180" height="120" fill="${P.celeste}" opacity=".6"/><path d="M40 40 V160 M220 40 V160" stroke="${P.verde}" stroke-width="8"/>${[[70, 140], [100, 110], [140, 130], [170, 92], [200, 120]].map(([x, y]) => aro(x, y, 15, [P.rojo, P.amarillo, P.naranja][x % 3])).join("")}${nino(100, 108, { c: P.morado, pose: "equilibrio", s: 0.9 })}<path d="M140 64 q8 -6 16 0 q8 -6 16 0" stroke="${P.verde}" stroke-width="3" fill="none"/><circle cx="174" cy="60" r="2" fill="var(--ink)"/>${etq(130, 30, "cruzar el río", "var(--pen)", 13)}`),
    },
  ],
  figura: {
    titulo: "El equilibrio",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Equilibrio quieto sobre un pie y equilibrio en movimiento sobre un banco, con los tres trucos"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Menos apoyos, más equilibrio", { size: 22, color: "var(--pen)" })}${nino(120, 262, { c: P.rosa, pose: "equilibrio", s: 2.4, nina: true })}${rot(120, 288, "quieto", { size: 16, color: P.rosa })}${banco(240, 420, 230)}${nino(330, 230, { c: P.azul, pose: "brazos", s: 2 })}${rot(330, 288, "en movimiento", { size: 16, color: P.azul })}${rot(530, 120, "1. punto fijo", { size: 17 })}${rot(530, 170, "2. brazos abiertos", { size: 17 })}${rot(530, 220, "3. barriga firme", { size: 17 })}</svg>`,
  },
  video: V("ef4v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Haz el flamenco y aguanta diez segundos.",
      pasos: ["Mira un punto fijo.", "Levanta un pie y abre los brazos.", "Aprieta la barriga y cuenta hasta diez."],
      resultado: "Diez segundos sin moverte." },
    { enunciado: "Camina sobre una línea llevando un saquito en la cabeza.",
      pasos: ["Espalda recta y mirada al frente.", "Un pie justo delante del otro.", "Despacio, sin prisa."],
      resultado: "Llegas al final sin que se caiga." },
    { enunciado: "Gira una vez y quédate sobre un pie.",
      pasos: ["Gira despacio.", "Al terminar, busca enseguida un punto fijo.", "Levanta un pie y abre los brazos."],
      resultado: "Recuperas el equilibrio tras girar." },
  ],
  errores: [
    "Mirar al suelo: hay que mirar un punto fijo al frente.",
    "Ir deprisa sobre el banco: en equilibrio, despacio es mejor.",
    "Empujar al compañero que está en el banco.",
    "Rendirse al primer tambaleo: hay que volver a intentarlo.",
  ],
  ejercicios: [
    { q: "¿Qué son los apoyos?", sol: "Las partes del cuerpo que tocan el suelo." },
    { q: "¿Es más fácil con muchos apoyos o con pocos?", sol: "Con muchos." },
    { q: "¿Qué es el equilibrio estático?", sol: "Aguantar una postura sin moverse." },
    { q: "¿Qué es el equilibrio dinámico?", sol: "No caerse mientras nos movemos." },
    { q: "Di los tres trucos para no caerse.", sol: "Mirar un punto fijo, abrir los brazos y apretar la barriga." },
    { q: "Describe la figura del avión.", sol: "Sobre un pie, cuerpo inclinado y brazos abiertos." },
    { q: "¿Por qué es más difícil con los ojos cerrados?", sol: "Porque los ojos nos ayudan a mantener el equilibrio." },
    { q: "¿Cómo bajamos del banco?", sol: "Con un pequeño salto, cayendo con las rodillas dobladas." },
    { q: "Aguanta sobre un pie mientras te lavas los dientes.", sol: "Respuesta práctica." },
    { q: "Inventa una figura de equilibrio y ponle nombre.", sol: "Respuesta libre." },
  ],
  quiz: [
    { q: "A cuatro patas tenemos…", o: ["cuatro apoyos", "un apoyo", "ningún apoyo"], a: 0, e: "Cuatro." },
    { q: "Con menos apoyos el equilibrio es…", o: ["más difícil", "más fácil", "igual"], a: 0, e: "Más difícil." },
    { q: "El flamenco se hace…", o: ["sobre un pie", "tumbado", "corriendo"], a: 0, e: "Sobre un pie." },
    { q: "Para no caernos miramos…", o: ["un punto fijo", "los pies", "al techo"], a: 0, e: "Punto fijo." },
    { q: "Los brazos ayudan si están…", o: ["abiertos", "en los bolsillos", "atados"], a: 0, e: "Abiertos." },
    { q: "Caminar sobre una línea es equilibrio…", o: ["dinámico", "estático", "dormido"], a: 0, e: "En movimiento." },
    { q: "En el banco caminamos…", o: ["despacio", "corriendo", "empujando"], a: 0, e: "Despacio." },
    { q: "Con los ojos cerrados el equilibrio es…", o: ["más difícil", "más fácil", "igual"], a: 0, e: "Más difícil." },
    { q: "Al caer de un salto los pies…", o: ["se quedan pegados", "siguen corriendo", "se cruzan"], a: 0, e: "Pegados." },
    { q: "En el juego del río pisamos…", o: ["dentro de los aros", "el agua", "fuera"], a: 0, e: "Dentro de los aros." },
  ],
  examen: [
    { q: "Aguantar una postura quietos es equilibrio…", o: ["estático", "dinámico", "rápido"], a: 0, e: "Estático." },
    { q: "Al llevar un objeto en la cabeza, la espalda va…", o: ["recta", "doblada", "girada"], a: 0, e: "Recta." },
    { q: "Espalda con espalda, para bajar hay que…", o: ["moverse a la vez", "soltarse", "correr"], a: 0, e: "A la vez." },
    { q: "El que va al lado del banco es…", o: ["el ayudante", "el árbitro", "el rival"], a: 0, e: "Ayudante." },
  ],
  feynman: ["Qué son los apoyos y cómo cambian el equilibrio", "Diferencia entre equilibrio quieto y en movimiento", "Los tres trucos para no caerse"],
  mapa: mapa("EQUILIBRIO", "var(--pri)", [
    ["Apoyos", "menos, más difícil", "#e53935"],
    ["Estático", "flamenco, avión, estatua", "#f06292"],
    ["Dinámico", "línea, banco, objetos", "#1e88e5"],
    ["Trucos", "mirar, brazos, barriga", "#43a047"],
  ], 230),
  tarjetas: [
    ["Equilibrio", "No caerse"],
    ["Apoyo", "Parte del cuerpo que toca el suelo"],
    ["Estático", "Equilibrio quieto"],
    ["Dinámico", "Equilibrio en movimiento"],
    ["Flamenco", "Sobre un pie, otro doblado"],
    ["Avión", "Sobre un pie, brazos abiertos"],
    ["Punto fijo", "Mirar al frente para no caer"],
    ["Banco", "Caminar despacio, con ayudante"],
  ],
  familias: [
    "Jugad a ver quién aguanta más tiempo sobre un pie.",
    "Caminad por el bordillo del parque de la mano.",
    "Haced un río con cojines y cruzadlo sin tocar el suelo.",
    "Llevad un libro en la cabeza por el pasillo.",
  ],
  profesores: PROF("Educación Física: equilibrio estático y dinámico; base de sustentación y número de apoyos; control postural; equilibrio con objetos, en altura baja y tras giros o saltos; equilibrios por parejas y ayuda", ["Progresión de apoyos: cuatro, tres, dos, uno.", "Recorridos sobre línea y banco sueco con ayudante.", "Juego de cruzar el río con aros."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Hacer posturas de equilibrio inspiradas en animales", "Caminar sobre líneas, cuerdas y zancos", "Mantener el equilibrio con los ojos cerrados", "Hacer figuras de equilibrio en grupo"],
  lectura: { titulo: "Nina, la equilibrista", html: `<p>Nina vivía en un circo. Su madre era equilibrista: caminaba sobre un cable muy alto con una sombrilla en la mano. Nina quería ser como ella.</p><p>—Mamá, ¿me enseñas?</p><p>—Claro, pero empezaremos por abajo —dijo su madre, y pintó una línea en el suelo con tiza.</p><p>Nina caminó sobre la línea. ¡Fácil! Después, su madre puso una cuerda en el suelo. Nina se tambaleó un poco, pero llegó al final.</p><p>Luego practicaron sobre un banco bajo, con los brazos abiertos como un avión. Nina se cayó una vez, dos veces, tres veces…</p><p>—No pasa nada —le dijo su madre—. Mira un punto fijo delante de ti y respira tranquila.</p><p>Nina lo intentó otra vez. Miró el punto rojo de la pared, abrió los brazos y… ¡llegó al final sin caerse!</p><p>Pasaron los meses. Un día, Nina salió a la pista del circo y caminó por un cable bajito con su propia sombrilla. Todo el público aplaudió.</p><p>—¡Lo has conseguido! —dijo su madre, muy orgullosa.</p>` },
  tras: {
    "Equilibrio quieto": [
      ["Posturas de animales", `<p>Muchos animales tienen un <mark>equilibrio</mark> increíble. Podemos imitar sus posturas:</p><ul><li><b>La cigüeña</b> o el <b>flamenco</b>: sobre un pie, con la otra pierna doblada y los brazos como alas.</li><li><b>El árbol</b>: sobre un pie, con la planta del otro pie apoyada en la pierna y los brazos hacia arriba como ramas.</li><li><b>El avión</b>: sobre un pie, con el cuerpo inclinado hacia delante y la otra pierna estirada hacia atrás.</li><li><b>La rana</b>: en cuclillas, con las manos en el suelo entre las rodillas.</li><li><b>El gato</b>: a cuatro patas, levantando un brazo y la pierna contraria.</li></ul><p>Truco: mira un <b>punto fijo</b> y aprieta la barriga. Intenta aguantar mientras cuentas hasta diez.</p><p><b>Actividad</b>: haced una «sesión de yoga animal» con cinco posturas seguidas.</p>`,
        L6.filas("Animales", [["cigüeña", "un pie", cAZ], ["árbol", "brazos arriba", cVE], ["avión", "inclinado", cRO], ["gato", "a cuatro patas", cNA]]),
        ["jMOZz7GHaog", "Yoga para niños - Las posturas de los animales", "Smile and Learn", 12456642]],
    ],
    "Equilibrio en movimiento": [
      ["Caminos difíciles", `<p>Caminar en <mark>equilibrio</mark> por caminos estrechos es un reto divertido. Podemos ir de lo más fácil a lo más difícil:</p><ul><li>Una <b>línea</b> pintada en el suelo.</li><li>Una <b>cuerda</b> estirada en el suelo.</li><li>Un <b>banco</b> sueco del derecho (ancho).</li><li>Un banco del <b>revés</b> (estrecho).</li><li>Unas <b>piedras</b> o aros separados, como para cruzar un río.</li></ul><p>Y podemos complicarlo:</p><ul><li>Caminando hacia <b>atrás</b> o de <b>lado</b>.</li><li>De <b>puntillas</b>.</li><li>Con un <b>saquito</b> en la cabeza.</li><li>Agachándonos en mitad del camino.</li></ul><p>Los <b>zancos</b> son otro reto: unos botes o latas con cuerdas sobre los que caminamos más altos.</p><p><b>Actividad</b>: fabrica unos zancos con dos latas y una cuerda, y aprende a caminar con ellos.</p>`,
        H6.flujo("Caminos", ["línea|fácil", "cuerda|medio", "banco|difícil", "zancos|reto"], cNA)],
    ],
    "Llevar objetos": [
      ["Equilibrio con los ojos cerrados", `<p>¿Sabías que los <mark>ojos</mark> nos ayudan mucho a mantener el equilibrio? Haz la prueba:</p><ul><li>Ponte a la pata coja con los ojos <b>abiertos</b>. Cuenta hasta diez.</li><li>Ahora hazlo con los ojos <b>cerrados</b>. ¿A que es mucho más difícil?</li></ul><p>Dentro de los <b>oídos</b> también tenemos un órgano que nos dice si estamos derechos o inclinados. Por eso, cuando damos muchas vueltas, nos <b>mareamos</b>.</p><p>Juegos con los ojos cerrados (siempre con un compañero cerca):</p><ul><li>Aguantar de pie sobre un pie.</li><li>Caminar sobre una línea con un compañero que nos avisa.</li><li>Tocarnos la nariz con un dedo, con los brazos abiertos.</li></ul><p>Practicar con los ojos cerrados entrena el equilibrio y la concentración.</p><p><b>Actividad</b>: compara cuántos segundos aguantas a la pata coja con los ojos abiertos y cerrados.</p>`,
        H6.dos("Ojos", ["ABIERTOS", ["más fácil", "punto fijo", "aguanto"], cVE], ["CERRADOS", ["más difícil", "oído", "compañero"], cMO])],
    ],
    "Equilibrio por parejas": [
      ["Figuras en grupo", `<p>En grupo podemos hacer <mark>figuras</mark> de equilibrio, como los acróbatas del circo. Siempre sobre colchonetas y con cuidado.</p><ul><li><b>La mesa</b>: uno a cuatro patas, con la espalda recta.</li><li><b>El puente</b>: dos compañeros se dan las manos por encima formando un arco.</li><li><b>La estrella</b>: cinco niños tumbados con las cabezas en el centro y los pies hacia fuera.</li><li><b>El abanico</b>: tres niños de la mano; los de los lados se inclinan hacia fuera.</li></ul><p>Normas para las figuras:</p><ul><li>Nunca nos subimos sobre la <b>espalda</b> de un compañero en el centro, solo en zonas firmes como caderas y hombros.</li><li>Montamos y desmontamos <b>despacio</b> y avisando.</li><li>Si alguien dice «¡para!», paramos.</li></ul><p><b>Actividad</b>: en grupos de cuatro, inventad una figura y hacedle una foto.</p>`,
        H6.rueda("Figuras", "GRUPO", [["mesa", cAZ], ["puente", cRO], ["estrella", cNA], ["abanico", cVE]])],
    ],
  },
  final: [
    ["El circo", `<p>En el <mark>circo</mark> hay artistas que son maestros del equilibrio:</p><ul><li>Los <b>equilibristas</b> o funambulistas: caminan sobre un cable.</li><li>Los <b>acróbatas</b>: hacen figuras y saltos en grupo.</li><li>Los <b>malabaristas</b>: lanzan pelotas o mazas mientras están en equilibrio.</li><li>Los que montan en <b>monociclo</b>: una bici de una sola rueda.</li><li>Los <b>trapecistas</b>: se balancean en el aire.</li></ul><p>Todos ellos han practicado muchísimas horas. Empezaron poco a poco, como Nina, y se cayeron muchas veces antes de hacerlo bien.</p><p>Hoy hay escuelas de circo donde los niños pueden aprender malabares, acrobacias y equilibrios.</p><p><b>Actividad</b>: aprende a hacer malabares con dos pañuelos lanzándolos al aire.</p>`,
      L6.filas("Circo", [["equilibrista", "cable", cRO], ["acróbata", "figuras", cAZ], ["malabarista", "pelotas", cNA], ["monociclo", "una rueda", cVE]])],
    ["Repaso: Nina, la equilibrista", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Nina empieza por lo <b>fácil</b>: una línea en el suelo.</li><li>Después, una <b>cuerda</b>, y luego un <b>banco</b>.</li><li>Abre los brazos como un <b>avión</b> para equilibrarse.</li><li>Se cae varias veces, pero <b>no se rinde</b>.</li><li>El truco: mirar un <b>punto fijo</b> y respirar tranquila.</li><li>Al final camina por un cable con una <b>sombrilla</b>.</li></ul><p>La lectura nos enseña que para aprender algo difícil hay que ir <b>paso a paso</b> y practicar mucho. ¡Caerse forma parte de aprender!</p><p><b>Actividad</b>: piensa en algo que te costó aprender y cuenta cómo lo conseguiste.</p>`,
      H6.flujo("Nina", ["línea|fácil", "cuerda|tambalea", "banco|se cae", "cable|¡lo logra!"], cAZ)],
  ],
  ejemplos: [
    ["¿Qué truco te ayuda a no caerte sobre un pie?", ["Fijarse en algo quieto."], "Mirar un punto fijo y apretar la barriga."],
    ["¿Por qué nos mareamos al dar vueltas?", ["Un órgano del oído controla el equilibrio."], "Porque se altera el equilibrio del oído."],
  ],
  errores: ["Hacer figuras de grupo sin colchonetas o sin avisar.", "Rendirse a la primera caída."],
  ejercicios: [
    ["b", "¿Cómo es la postura de la cigüeña?", "Sobre un pie, con la otra pierna doblada."],
    ["b", "¿Qué es más fácil, una línea o un banco del revés?", "Una línea."],
    ["b", "¿Es más difícil el equilibrio con los ojos cerrados?", "Sí."],
    ["b", "Di un artista de circo.", "Equilibrista, acróbata, malabarista…"],
    ["b", "¿Con qué se hacen unos zancos caseros?", "Con latas y cuerdas."],
    ["m", "Di dos formas de complicar el camino.", "Hacia atrás, de puntillas, con un saquito…"],
    ["m", "¿Dónde está el órgano del equilibrio?", "En el oído."],
    ["m", "Di dos normas de las figuras de grupo.", "Colchonetas, despacio, parar si alguien lo dice."],
    ["m", "¿Cómo se hace la estrella?", "Tumbados, con las cabezas en el centro."],
    ["m", "¿Qué hace un funambulista?", "Camina sobre un cable."],
    ["a", "En la lectura, ¿qué consejo da la madre a Nina?", "Mirar un punto fijo y respirar tranquila."],
    ["a", "¿Por qué empieza Nina por una línea?", "Para ir de lo fácil a lo difícil."],
    ["a", "Inventa una postura de equilibrio de un animal.", "Respuesta libre."],
    ["a", "Diseña un camino de equilibrio con cinco obstáculos.", "Respuesta libre."],
  ],
  quiz: [
    ["El árbol se hace sobre…", ["un pie", "dos manos", "la cabeza"], "Posturas."],
    ["Lo más fácil es caminar por…", ["una línea", "un cable", "zancos"], "Caminos."],
    ["Con los ojos cerrados el equilibrio es…", ["más difícil", "más fácil", "igual"], "Ojos."],
    ["Las figuras se hacen sobre…", ["colchonetas", "sillas", "mesas"], "Grupo."],
    ["El monociclo tiene…", ["una rueda", "dos ruedas", "tres ruedas"], "Circo."],
  ],
  examen: [
    ["En la lectura, ¿dónde vive Nina?", ["en un circo", "en un castillo", "en una granja"], "Lectura."],
    ["¿Qué lleva Nina en el cable?", ["una sombrilla", "una pelota", "un aro"], "Repaso."],
  ],
  tarjetas: [
    ["Truco del equilibrio", "Punto fijo, barriga apretada, brazos abiertos."],
    ["De fácil a difícil", "Línea, cuerda, banco, zancos, ojos cerrados."],
  ],
  glosario: [
    ["Equilibrio", "Mantenerse sin caerse."],
    ["Punto fijo", "Lugar al que miramos para no caernos."],
    ["Zancos", "Objetos para caminar más altos."],
    ["Banco sueco", "Banco largo de gimnasio."],
    ["Mareo", "Sensación de que todo da vueltas."],
    ["Acróbata", "Artista que hace saltos y figuras."],
    ["Funambulista", "Persona que camina sobre un cable."],
    ["Malabares", "Lanzar y coger objetos sin que caigan."],
    ["Monociclo", "Bicicleta de una rueda."],
    ["Figura", "Forma que hacemos con el cuerpo."],
  ],
  situacion: {
    titulo: "Nuestro circo",
    reto: "La clase prepara un espectáculo de circo con números de equilibrio, figuras de grupo y malabares sencillos.",
    pasos: ["Elegir un número: posturas, camino, zancos o figuras.", "Practicar de lo fácil a lo difícil.", "Preparar la música y la presentación.", "Hacer la función para otra clase."],
    producto: "Un espectáculo de circo de la clase.",
    evaluacion: ["Hace posturas de equilibrio.", "Camina en equilibrio por caminos difíciles.", "Controla el equilibrio con ojos cerrados.", "Colabora con seguridad en las figuras."],
  },
});
