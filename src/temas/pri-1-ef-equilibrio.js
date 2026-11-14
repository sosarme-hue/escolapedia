// Educación Física 1º de Primaria: el equilibrio.
const { mapa } = require("./_util");
const { svg, rot, big, nino, nota, suelo, flechaR, PROF, FUENTES } = require("./_pri1-dib");
const L3 = require("./_pri1L3");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const banco = (x, y, w = 140) => `<rect x="${x - w / 2}" y="${y - 12}" width="${w}" height="10" rx="3" fill="#c99a5b"/><rect x="${x - w / 2 + 8}" y="${y - 2}" width="8" height="${180 - y > 20 ? 18 : 10}" fill="#a8763a"/><rect x="${x + w / 2 - 16}" y="${y - 2}" width="8" height="${180 - y > 20 ? 18 : 10}" fill="#a8763a"/>`;
const saquito = (x, y, c = "var(--red)") => `<rect x="${x - 10}" y="${y - 7}" width="20" height="8" rx="3" fill="${c}"/>`;
const flamenco = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 0 V-40 M0 -26 l8 -8 l-6 -6" stroke="#e86f8f" stroke-width="3" fill="none"/><ellipse cx="0" cy="-48" rx="18" ry="11" fill="#f49ab3"/><path d="M14 -52 q6 -20 -2 -34 q-4 -6 4 -8" stroke="#f49ab3" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M18 -94 l8 4 l-6 3z" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Educación Física",
  curso: "1-primaria",
  titulo: "El equilibrio",
  minutos: 50,
  objetivos: ["Mantener el equilibrio quieto y en movimiento", "Conocer trucos para no caerse", "Jugar al equilibrio solo, con objetos y con un compañero"],
  claves: ["equilibrio", "estatua", "pata coja", "línea", "banco", "punto fijo"],
  pregunta: {
    texto: "Ponte a la pata coja. ¿Cuánto tiempo aguantas sin apoyar el otro pie?",
    respuesta: "Para aguantar necesitas <mark>equilibrio</mark>. Si abres los brazos y miras un punto fijo, ¡aguantas mucho más!",
  },
  lectura: L3.lect("El puente de la selva", `<p>La maestra ha montado una selva en el gimnasio. Hay bancos, colchonetas y cuerdas en el suelo.</p><p>«Para cruzar el río, hay que pasar por el puente sin caerse a los cocodrilos», dice.</p><p>El puente es un banco largo. Debajo, unas colchonetas verdes son el agua.</p><p>Lía abre los brazos como un avión y mira al final del banco. Paso a paso, ¡lo consigue!</p><p>Gael va muy deprisa y se tambalea. Baja con cuidado y vuelve a empezar, ahora despacio.</p><p>«¡Esta vez sí!», grita contento.</p><p>¿Cómo se consigue no caerse? En este tema vas a jugar con el equilibrio.</p>`),
  bloques: [
    {
      html: `<h3>1. ¿Qué es el equilibrio?</h3><p>Tener equilibrio es <mark>no caerse</mark>.</p><p>Lo usamos al estar de pie, al andar o al subir escaleras. Casi nunca pensamos en él, pero siempre trabaja.</p><p>A veces es más difícil: en un pie, en un bordillo o en una bici. Con práctica, el equilibrio <b>mejora</b> mucho.</p><p>Vamos a jugar con él.</p><p>Hasta los bebés aprenden equilibrio. Primero se sientan, luego gatean y después andan.</p>`,
      svg: svg("Una niña a la pata coja con los brazos abiertos", `${nino(130, 150, { c: "var(--inf)", nina: true, pose: "equilibrio", s: 1.5 })}${suelo(150)}${etq(56, 60, "¡No me caigo!", "var(--pen)", 14)}${rot(130, 172, "El equilibrio", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>2. Equilibrio quieto</h3><p>A veces nos quedamos <mark>quietos</mark> como una estatua.</p><p>Por ejemplo, a la <b>pata coja</b> o de puntillas. O con un pie delante del otro.</p><p>Probamos a contar hasta <b>10</b> sin movernos. Primero con un pie y luego con el otro. Si nos caemos, ¡no pasa nada! Lo intentamos otra vez.</p><p>Cada día aguantarás un poco más.</p><p>Prueba también a ponerte como un flamenco: un pie apoyado en la otra rodilla.</p>`,
      svg: svg("Tres estatuas: una de puntillas con los brazos arriba, otra a la pata coja y otra con un pie delante del otro", `${nino(50, 150, { c: "var(--pen)", pose: "arriba" })}<path d="M42 150 v-4 M58 150 v-4" stroke="var(--pen)" stroke-width="4"/>${nino(130, 150, { c: "var(--leaf)", pose: "equilibrio" })}${nino(210, 150, { c: "var(--red)", nina: true, pose: "brazos" })}${suelo(150)}${etq(50, 170, "de puntillas")}${etq(130, 170, "pata coja")}${etq(210, 170, "pie delante")}${big(130, 36, "1, 2, 3… ¡10!", "var(--inf)", 16)}`),
      video: { id: "gORn1E8ez9w", titulo: "4 juegos de equilibrio para niños", canal: "Cristhian Alexander Quintero Mogollon", vistas: 329728 },
    },
    {
      html: `<h3>3. Equilibrio en movimiento</h3><p>Otras veces nos movemos <mark>sin caernos</mark>.</p><p>Andamos por una <b>línea</b> pintada en el suelo, como un funambulista.</p><p>Después probamos por un <b>banco</b> bajo, despacio. Ponemos un pie delante del otro. Al final, saltamos al suelo con las rodillas dobladas. ¡Lo has conseguido!</p><p>Si notas que te caes, baja con cuidado.</p><p>Pon una cuerda en el suelo de casa y camina por ella. ¡Es tu primer puente!</p>`,
      svg: svg("Un niño camina con los brazos abiertos sobre un banco bajo", `${banco(130, 140, 180)}${nino(120, 128, { c: "var(--pen)", pose: "brazos", s: 1.1 })}${flechaR(160, 90, 210, 90, "var(--leaf)")}${etq(186, 80, "despacio", "var(--leaf)")}${suelo(158)}${rot(130, 174, "Por el banco", { color: "var(--pen)" })}`),
    },
    {
      html: `<h3>4. Trucos para no caerse</h3><p>Hay <mark>trucos</mark> que ayudan mucho.</p><p>1. <b>Abre los brazos</b>, como las alas de un avión.</p><p>2. <b>Mira un punto fijo</b> delante, sin mover la cabeza.</p><p>3. Ve <b>despacio</b>.</p><p>4. Dobla un poco las <b>rodillas</b>. Así el cuerpo está más firme.</p><p>Pruébalos todos y verás qué bien funcionan.</p><p>Prueba a usar un truco cada vez. ¿Cuál te ayuda más a ti?</p>`,
      svg: svg("Un niño en equilibrio con los brazos abiertos mira una estrella fija en la pared", `${nino(80, 150, { c: "var(--pen)", pose: "equilibrio", s: 1.3 })}<circle cx="214" cy="66" r="14" fill="var(--sun)"/><path d="M94 72 L198 66" stroke="var(--sun)" stroke-width="2" stroke-dasharray="5 4"/>${etq(214, 98, "punto fijo", "var(--inf)")}${etq(80, 40, "brazos abiertos", "var(--leaf)")}${suelo(150)}${rot(130, 172, "Brazos abiertos y mirada fija", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>5. Equilibrio con objetos</h3><p>¡También podemos llevar cosas <mark>en equilibrio</mark>!</p><p>Ponemos un <b>saquito</b> en la cabeza y andamos sin que se caiga.</p><p>Otro juego: llevar una pelota pequeña en una <b>cuchara</b>. Hay que ir despacio y mirar bien. Si se cae, volvemos al principio. ¡Es muy divertido en equipo!</p><p>Gana quien llega sin que se caiga nada.</p><p>Podéis hacer carreras de relevos con el saquito. ¡Despacio se llega antes!</p>`,
      svg: svg("Una niña camina con un saquito en la cabeza y un niño lleva una pelota en una cuchara", `${nino(70, 150, { c: "var(--inf)", nina: true, pose: "brazos" })}${saquito(70, 76)}${nino(180, 150, { c: "var(--leaf)", pose: "palmas" })}<path d="M188 102 L214 92" stroke="var(--muted)" stroke-width="3"/><ellipse cx="218" cy="90" rx="7" ry="4" fill="var(--muted)"/><circle cx="218" cy="84" r="5" fill="var(--red)"/>${suelo(150)}${etq(70, 170, "saquito")}${etq(180, 170, "cuchara")}`),
    },
    {
      html: `<h3>6. Equilibrio con un compañero</h3><p>Con un compañero podemos hacer <mark>figuras</mark> en equilibrio.</p><p>Nos damos las manos. Y nos ponemos a la pata coja a la vez.</p><p>O nos sentamos espalda con espalda. Luego nos levantamos juntos, sin manos. Hay que <b>ayudarse</b> y hablar. Si uno empuja mucho, ¡los dos se caen!</p><p>Al acabar, chocad las manos. ¡El equilibrio en pareja es trabajo de equipo!</p>`,
      svg: svg("Dos niños de la mano, los dos a la pata coja", `${nino(100, 150, { c: "var(--pen)", pose: "equilibrio", s: 1.2 })}${nino(160, 150, { c: "var(--red)", nina: true, pose: "equilibrio", s: 1.2 })}<circle cx="130" cy="97" r="5" fill="#f3c9a1"/>${suelo(150)}${rot(130, 172, "Juntos no nos caemos", { color: "var(--pen)" })}`),
      video: { id: "kD6HNwqx_BE", titulo: "6 juegos de equilibrio cooperativo en educación física", canal: "Francisco J. Vázquez -kisco-", vistas: 227894 },
    },
    {
      html: `<h3>7. Campeones del equilibrio</h3><p>El <mark>flamenco</mark> duerme sobre una sola pata. ¡Durante horas!</p><p>Los <b>gatos</b> caminan por muros muy estrechos sin caerse. Usan la cola para equilibrarse.</p><p>En el circo, los <b>equilibristas</b> andan por una cuerda alta. Llevan una barra larga para no caerse. ¿Qué animal del equilibrio te gustaría ser?</p><p>¡Imítalo!</p><p>Los patinadores y los gimnastas también entrenan mucho su equilibrio.</p>`,
      svg: svg("Un flamenco sobre una pata y un equilibrista sobre una cuerda con una barra larga", `${flamenco(64, 150)}<path d="M120 112 H246" stroke="var(--ink)" stroke-width="2"/>${nino(184, 112, { c: "var(--red)", pose: "brazos", s: 0.9 })}<path d="M136 72 H232" stroke="var(--muted)" stroke-width="3"/>${suelo(150)}${etq(64, 170, "flamenco")}${etq(184, 170, "equilibrista")}`),
    },
    L3.B("8. Caer bien también se aprende", `<p>A veces perdemos el equilibrio. ¡Es normal! Lo importante es <mark>caer bien</mark>.</p><p>Doblamos las rodillas y nos hacemos pequeños, como una bolita.</p><p>Ponemos las manos delante para no darnos en la cara. Y no ponemos los brazos rígidos.</p><p>Practicamos siempre sobre una colchoneta. Si nos hacemos daño, avisamos a un adulto.</p>`, "Un niño agachado como una bolita sobre una colchoneta", `<rect x="40" y="130" width="180" height="20" rx="8" fill="var(--sun)"/>${L3.nino(130, 130, { c: "var(--pen)", pose: "agacha", s: 1.3 })}${L3.t(130, 26, "Me hago bolita", "var(--pen)", 16)}${L3.t(130, 170, "sobre la colchoneta", "var(--muted)", 13)}`),
    {
      html: `<h3>9. ¿Para qué sirve? Bici y patinete</h3><p>El equilibrio nos ayuda <mark>cada día</mark>.</p><p>Lo usamos al montar en <b>bici</b> o en <b>patinete</b>. También al subir y bajar escaleras.</p><p>Y al cruzar un río saltando por las piedras. Cuanto mejor es tu equilibrio, menos te caes. Y más cosas puedes hacer tú solo.</p><p>Por eso merece la pena practicar.</p><p>Para aprender a montar en bici, primero se usan ruedines o una bici sin pedales.</p>`,
      svg: svg("Un niño monta en bicicleta con casco", `<circle cx="80" cy="132" r="22" fill="none" stroke="var(--ink)" stroke-width="4"/><circle cx="190" cy="132" r="22" fill="none" stroke="var(--ink)" stroke-width="4"/><path d="M80 132 L120 96 L170 96 L190 132 M120 96 L132 132 L80 132 M170 96 L164 80 h12" stroke="var(--red)" stroke-width="4" fill="none" stroke-linejoin="round"/>${nino(124, 92, { c: "var(--pen)", pose: "sentado", s: 0.8 })}<path d="M114 38 a12 10 0 0 1 24 0z" fill="var(--leaf)"/><path d="M128 56 L168 80" stroke="var(--pen)" stroke-width="3.5" stroke-linecap="round"/>${suelo(156)}${rot(130, 174, "En bici necesito equilibrio", { color: "var(--pen)", size: 13 })}`),
    },
    {
      html: `<h3>10. Juego: las estatuas</h3><p>Suena la <mark>música</mark> y todos bailan por el espacio.</p><p>Cuando la música para, nos quedamos <b>quietos</b> como estatuas. ¡Y a la pata coja!</p><p>Quien se mueve, da una vuelta saltando. Luego vuelve al juego. Después, probamos estatuas con los ojos cerrados. ¡Es mucho más difícil!</p><p>¿Quién aguanta más?</p><p>Inventad estatuas raras: de puntillas, con un brazo arriba o con una pierna estirada.</p>`,
      svg: svg("Notas musicales tachadas y tres niños quietos como estatuas en posturas distintas", `${nota(40, 50, "var(--pen)")}${nota(70, 40, "var(--inf)")}<path d="M24 26 L90 60" stroke="var(--red)" stroke-width="4" stroke-linecap="round"/>${nino(70, 150, { c: "var(--leaf)", pose: "equilibrio" })}${nino(140, 150, { c: "var(--inf)", nina: true, pose: "baila" })}${nino(210, 150, { c: "var(--pen)", pose: "arriba" })}${suelo(150)}${rot(150, 44, "¡Estatuas!", { color: "var(--red)", size: 18 })}${rot(130, 172, "Quietos como estatuas", { color: "var(--pen)" })}`),
    },
    L3.B("11. Repaso: lo que ya sabes", `<p>Tener <mark>equilibrio</mark> es no caerse.</p><p>Hay equilibrio <b>quieto</b>, como la estatua, y equilibrio <b>en movimiento</b>, como andar por un banco.</p><p>Los trucos son: brazos abiertos, mirar un punto fijo, ir despacio y doblar un poco las rodillas.</p><p>Si nos caemos, nos hacemos bolita. ¡Y con práctica, el equilibrio mejora!</p>`, "Un niño en equilibrio sobre una línea con los brazos abiertos", `<path d="M20 152 H240" stroke="var(--red)" stroke-width="5" stroke-dasharray="10 6"/>${L3.nino(130, 150, { c: "var(--leaf)", pose: "equilibrio", s: 1.5 })}<circle cx="220" cy="50" r="6" fill="var(--red)"/><path d="M140 72 L214 52" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 3"/>${L3.t(60, 40, "brazos abiertos", "var(--pen)", 13)}`),
  ],
  figura: {
    titulo: "Trucos del equilibrio",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un niño grande a la pata coja con cuatro trucos: brazos abiertos, mirar un punto fijo, ir despacio y doblar un poco las rodillas">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${nino(320, 270, { c: "var(--pen)", pose: "equilibrio", s: 2.8 })}
      <path d="M200 270 H440" stroke="var(--line)" stroke-width="4"/>
      ${[["Brazos abiertos", 120, 70, "var(--leaf)"], ["Mira un punto fijo", 520, 70, "var(--inf)"], ["Ve despacio", 120, 210, "var(--red)"], ["Rodillas un poco dobladas", 520, 210, "var(--pen)"]].map(([t, x, y, c]) => `<rect x="${x - 105}" y="${y - 24}" width="210" height="40" rx="20" fill="var(--card)" stroke="${c}" stroke-width="3"/>${rot(x, y + 2, t, { color: c, size: 15 })}`).join("")}
    </svg>`,
  },
  video: { id: "GgNJUyCtpLI", titulo: "5 juegos de equilibrio estático y dinámico para niños y niñas", canal: "El Tío Kevin Mora", vistas: 571510, megusta: 0, busqueda: "juego del equilibrio para niños primaria educación física" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo aguanto más a la pata coja?",
      pasos: ["Abro los brazos como un avión.", "Miro un punto fijo delante.", "Doblo un poco la rodilla del pie que apoya."],
      resultado: "con los brazos abiertos y la mirada fija aguanto más." },
    { enunciado: "¿Cómo paso por un banco sin caerme?",
      pasos: ["Subo despacio y abro los brazos.", "Pongo un pie delante del otro.", "Miro el final del banco, no mis pies."],
      resultado: "despacio, brazos abiertos y mirando delante." },
    { enunciado: "¿Qué tipo de equilibrio es andar por una línea?",
      pasos: ["Pensamos: ¿estoy quieto o me muevo?", "Al andar por la línea, me muevo.", "Es equilibrio en movimiento."],
      resultado: "equilibrio en movimiento." },
    { enunciado: "Pierdes el equilibrio en el banco. ¿Qué haces?", pasos: ["No me agarro a un compañero, porque nos caeríamos los dos.", "Bajo del banco con un paso al suelo, doblando las rodillas.", "Respiro, me subo otra vez y voy más despacio."], resultado: "bajo con cuidado y lo intento de nuevo." },
  ],
  errores: [
    "Ir muy deprisa por el banco: despacio es más fácil no caerse.",
    "Mirarse los pies todo el rato: mejor mirar un punto fijo delante.",
    "Poner los brazos pegados al cuerpo: abiertos ayudan a equilibrarse.",
    "Rendirse a la primera: el equilibrio mejora con práctica.",
  ],
  ejercicios: [
    { nivel: "básico", q: "Ponte a la pata coja y cuenta hasta 10. Luego con el otro pie.", sol: "Con los brazos abiertos se aguanta mejor." },
    { nivel: "básico", q: "Anda por una línea del suelo sin salirte.", sol: "Un pie delante del otro, despacio." },
    { nivel: "básico", q: "Ponte de puntillas y cuenta hasta 5.", sol: "Puede abrir los brazos para ayudarse." },
    { nivel: "básico", q: "Lleva un cojín o un libro en la cabeza de una puerta a otra.", sol: "Hay que ir despacio y con la espalda recta." },
    { nivel: "medio", q: "Di dos trucos para no caerte.", sol: "Abrir los brazos y mirar un punto fijo (también ir despacio)." },
    { nivel: "medio", q: "¿Qué animal duerme sobre una pata?", sol: "El flamenco." },
    { nivel: "básico", q: "Con un compañero, daos las manos y poneos a la pata coja.", sol: "Deben ayudarse sin empujar." },
    { nivel: "medio", q: "Ponte a la pata coja con los ojos cerrados. ¿Es más fácil o más difícil?", sol: "Más difícil: los ojos nos ayudan a mantener el equilibrio." },
    { nivel: "medio", q: "Di dos cosas de cada día que necesitan equilibrio.", sol: "Por ejemplo: montar en bici y bajar escaleras." },
    { nivel: "medio", q: "¿Es equilibrio quieto o en movimiento hacer la estatua?", sol: "Quieto." },
    L3.b("Ponte de puntillas y cuenta hasta 10.", "Debe aguantar sin apoyar los talones."),
    L3.b("Haz el flamenco: un pie en la otra rodilla.", "Aguantar unos segundos con los brazos abiertos."),
    L3.b("Anda hacia atrás por una línea, muy despacio.", "Mirando hacia atrás de vez en cuando."),
    L3.m("Practica a caer como una bolita sobre una cama o colchoneta.", "Rodillas dobladas, cuerpo pequeño y manos delante."),
    L3.m("Lleva una pelota en una cuchara sin que se caiga.", "Ir despacio y mirando la cuchara."),
    L3.a("Monta un camino de equilibrio en casa con cojines.", "Un recorrido seguro para pisar solo los cojines."),
    L3.a("Explica por qué es más difícil con los ojos cerrados.", "Porque no podemos mirar un punto fijo."),
    L3.a("Haz una figura en equilibrio con un adulto y dibújala.", "Por ejemplo: espalda con espalda o de la mano a la pata coja."),
    L3.a("Inventa una estatua difícil y aguanta cinco segundos.", "Por ejemplo: de puntillas con un brazo arriba."),
    L3.a("¿Qué hace el gato con la cola en un muro?", "La usa para equilibrarse."),
    L3.a("Di qué truco del equilibrio te ayuda más y por qué.", "Respuesta personal, por ejemplo: abrir los brazos."),
    L3.a("Busca en el parque algo para practicar el equilibrio.", "Por ejemplo: un bordillo bajo, un tronco o un columpio."),
  ],
  quiz: [
    { q: "Tener equilibrio es…", o: ["no caerse", "correr mucho", "gritar"], a: 0, e: "Es mantenerse sin caer." },
    { q: "Para equilibrarme, los brazos van…", o: ["abiertos", "en los bolsillos", "atados"], a: 0, e: "Abiertos, como un avión." },
    { q: "¿Dónde miro para no caerme?", o: ["A un punto fijo", "A todas partes", "Arriba girando"], a: 0, e: "Un punto fijo ayuda mucho." },
    { q: "Por el banco voy…", o: ["despacio", "corriendo", "con los ojos cerrados"], a: 0, e: "Despacio es más seguro." },
    { q: "Hacer la estatua es equilibrio…", o: ["quieto", "en movimiento", "en el agua"], a: 0, e: "No nos movemos." },
    { q: "Andar por una línea es equilibrio…", o: ["en movimiento", "quieto", "dormido"], a: 0, e: "Nos movemos sin caer." },
    { q: "¿Qué animal duerme en una pata?", o: ["El flamenco", "La vaca", "El pez"], a: 0, e: "El flamenco." },
    { q: "¿Con los ojos cerrados es…", o: ["más difícil", "más fácil", "igual"], a: 0, e: "Los ojos ayudan al equilibrio." },
    { q: "¿Qué lleva el equilibrista del circo?", o: ["Una barra larga", "Un paraguas mojado", "Una pelota"], a: 0, e: "La barra le ayuda a no caerse." },
    { q: "¿Qué necesita mucho equilibrio?", o: ["Montar en bici", "Dormir", "Comer sentado"], a: 0, e: "La bici necesita equilibrio." },
    L3.Q("Si pierdes el equilibrio, te pones…", ["como una bolita", "tieso como un palo", "a correr"], 0, "Así caes mejor."),
    L3.Q("Para aprender a ir en bici podemos usar…", ["ruedines", "aletas", "patines de hielo"], 0, "O una bici sin pedales."),
  ],
  examen: [
    { q: "Di un truco para no caerse.", o: ["Abrir los brazos", "Ir muy rápido", "Cerrar los ojos"], a: 0, e: "Brazos abiertos." },
    { q: "Cuando para la música en el juego de las estatuas…", o: ["nos quedamos quietos", "corremos", "nos sentamos a comer"], a: 0, e: "¡Estatuas!" },
    { q: "Al bajar de un banco, caigo con…", o: ["las rodillas dobladas", "las piernas rectas", "la cabeza"], a: 0, e: "Así caemos suave." },
    { q: "El equilibrio mejora…", o: ["practicando", "sin hacer nada", "comiendo chuches"], a: 0, e: "Con práctica." },
    L3.Q("El flamenco aguanta…", ["sobre una pata", "colgado", "volando"], 0, "Duerme en una pata."),
    L3.Q("Al caer, ponemos las manos…", ["delante", "en la espalda", "en los bolsillos"], 0, "Para protegernos."),
  ],
  feynman: ["Qué es el equilibrio", "Qué trucos ayudan a no caerse", "Qué diferencia hay entre equilibrio quieto y en movimiento"],
  mapa: mapa("EL EQUILIBRIO", "var(--pri)", [
    ["Quieto", "estatua · pata coja · puntillas", "var(--pen)"],
    ["En movimiento", "línea · banco · bici", "var(--leaf)"],
    ["Trucos", "brazos abiertos · punto fijo", "var(--inf)"],
    ["Con otros", "parejas · objetos · juegos", "var(--red)"],
  ], 240),
  tarjetas: [
    ["¿Qué es el equilibrio?", "No caerse."],
    ["¿Qué hago con los brazos?", "Los abro como un avión."],
    ["¿Dónde miro?", "A un punto fijo delante."],
    ["¿Cómo voy por el banco?", "Despacio, un pie delante del otro."],
    ["¿Qué es equilibrio quieto?", "Mantenerse sin moverse, como una estatua."],
    ["¿Qué es equilibrio en movimiento?", "Moverse sin caerse, como por una línea."],
    ["¿Qué animal duerme en una pata?", "El flamenco."],
    ["¿Cómo mejora el equilibrio?", "Practicando."],
    ["¿Cómo caigo bien?", "Doblo las rodillas y me hago bolita"],
    ["¿Quién entrena mucho el equilibrio?", "Gimnastas, patinadores y equilibristas"],
  ],
  glosario: [
    ["Equilibrio", "No caerse al estar quieto o al moverse."],
    ["Estatua", "Quedarse quieto sin moverse."],
    ["Pata coja", "Estar o saltar con un solo pie."],
    ["Puntillas", "Apoyarse solo en la parte delantera de los pies."],
    ["Funambulista", "Artista que anda por una cuerda."],
    ["Banco", "Asiento largo y estrecho para practicar el equilibrio."],
    ["Punto fijo", "Un sitio que miramos sin mover la cabeza."],
    ["Colchoneta", "Superficie blanda para no hacerse daño."],
    ["Tambalearse", "Moverse de un lado a otro casi cayéndose."],
  ],
  situacion: L3.sit("El circo del equilibrio", "Vamos a preparar un espectáculo de circo en el que todos somos equilibristas.", ["Elegimos un número: andar por un banco, llevar un saquito en la cabeza o una figura en pareja.", "Practicamos cada día un poco, con los trucos del equilibrio.", "Preparamos la pista con colchonetas para que sea segura.", "Hacemos el espectáculo para otra clase y nos aplaudimos."], "Un espectáculo de circo con números de equilibrio.", ["Usa los trucos para no caerse.", "Practica con constancia y mejora.", "Cae con seguridad y respeta a sus compañeros."]),
  familias: [
    "Jugad a las estatuas con música en casa: cuando paráis la música, todos a la pata coja.",
    "En la calle, andad por las líneas de las baldosas o por un bordillo bajo de la mano.",
    "Montad en bici o patinete con casco en un lugar seguro.",
    "Haced una carrera de cucharas con una pelota pequeña o una nuez.",
  ],
  profesores: PROF("Educación Física: equilibrio estático y dinámico, control postural, y equilibrio con objetos y en parejas en situaciones lúdicas", ["Circuito de equilibrio con líneas, bancos suecos bajos y ladrillos de psicomotricidad.", "Juego de las estatuas con variantes: un pie, puntillas, ojos cerrados.", "Equilibrios por parejas y transporte de saquitos en la cabeza."]),
  fuentes: FUENTES,
  revisado: "2026-11-14",
};
