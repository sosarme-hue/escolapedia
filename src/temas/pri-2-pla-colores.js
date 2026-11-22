// Educación Plástica 2º de Primaria: colores primarios y secundarios. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, big, sol, arbol, flechaR, V, P, mancha, pincel, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 13) => rot(x, y, t, { size, color: c });
const suma = (y, a, b, c, ta, tb, tc) => `<circle cx="38" cy="${y}" r="17" fill="${a}" stroke="var(--ink)" stroke-width="1"/>${big(76, y + 7, "+", "var(--ink)", 22)}<circle cx="114" cy="${y}" r="17" fill="${b}" stroke="var(--ink)" stroke-width="1"/>${big(152, y + 7, "=", "var(--ink)", 22)}${mancha(206, y, 19, c)}${etq(38, y + 30, ta, "var(--muted)", 11)}${etq(114, y + 30, tb, "var(--muted)", 11)}${etq(206, y + 31, tc, "var(--ink)", 12)}`;
const rueda = (cx, cy, r) => [P.rojo, P.naranja, P.amarillo, P.verde, P.azul, P.morado].map((c, i) => {
  const a1 = ((i * 60 - 120) * Math.PI) / 180, a2 = (((i + 1) * 60 - 120) * Math.PI) / 180;
  return `<path d="M${cx} ${cy} L${(cx + Math.cos(a1) * r).toFixed(1)} ${(cy + Math.sin(a1) * r).toFixed(1)} A${r} ${r} 0 0 1 ${(cx + Math.cos(a2) * r).toFixed(1)} ${(cy + Math.sin(a2) * r).toFixed(1)}Z" fill="${c}" stroke="var(--card)" stroke-width="2"/>`;
}).join("");
const tarro = (x, y, c) => `<g transform="translate(${x} ${y})"><rect x="-14" y="-24" width="28" height="30" rx="5" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><rect x="-16" y="-30" width="32" height="8" rx="3" fill="var(--muted)"/></g>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Colores primarios y secundarios",
  minutos: 25,
  objetivos: ["Reconocer los tres colores primarios y los tres secundarios", "Mezclar colores para conseguir otros nuevos, claros y oscuros", "Usar el círculo de colores para pintar con intención"],
  claves: ["primarios", "secundarios", "mezcla", "círculo cromático", "claro", "oscuro", "témpera", "paleta"],
  pregunta: {
    texto: "Tienes solo tres botes de pintura: rojo, amarillo y azul. ¿Podrías pintar un árbol con el tronco marrón y las hojas verdes?",
    respuesta: "¡Sí! Con los tres <mark>colores primarios</mark> se consiguen casi todos. Amarillo y azul dan <b>verde</b>. Y si mezclas los tres, sale un <b>marrón</b>.",
  },
  bloques: [
    {
      html: `<h3>Los tres primarios</h3><p>El <mark>rojo</mark>, el <mark>amarillo</mark> y el <mark>azul</mark> son los colores primarios.</p><p>Se llaman así porque son los primeros. No se pueden conseguir mezclando otros colores.</p><p>En cambio, con ellos podemos hacer casi todos los demás. Por eso los pintores siempre los tienen en su caja. Son como las tres notas de una canción que lo cambia todo.</p>`,
      svg: svg("Tres botes de pintura: rojo, amarillo y azul, los colores primarios", `${tarro(60, 100, P.rojo)}${tarro(130, 100, P.amarillo)}${tarro(200, 100, P.azul)}${etq(60, 130, "rojo")}${etq(130, 130, "amarillo")}${etq(200, 130, "azul")}${rot(130, 34, "Colores primarios", { size: 16, color: "var(--pen)" })}${rot(130, 160, "No salen de mezclas", { size: 12, color: "var(--muted)" })}`),
    },
    {
      html: `<h3>Los secundarios</h3><p>Si mezclamos <mark>dos primarios</mark> a partes iguales, sale un color secundario.</p><p><b>Amarillo y azul</b> dan verde. <b>Rojo y amarillo</b> dan naranja. <b>Rojo y azul</b> dan morado.</p><p>Hay tres colores secundarios: el verde, el naranja y el morado. Pruébalo con témperas en un plato. ¡Parece magia, pero es la mezcla!</p>`,
      svg: svg("Tres sumas de colores: amarillo y azul dan verde, rojo y amarillo dan naranja, rojo y azul dan morado", `${suma(28, P.amarillo, P.azul, P.verde, "amarillo", "azul", "verde")}${suma(84, P.rojo, P.amarillo, P.naranja, "rojo", "amarillo", "naranja")}${suma(140, P.rojo, P.azul, P.morado, "rojo", "azul", "morado")}`),
      video: V("pl1b"),
    },
    {
      html: `<h3>El círculo de colores</h3><p>Los pintores ordenan los colores en un <mark>círculo cromático</mark>, como una tarta.</p><p>Entre dos primarios ponemos el secundario que sale al mezclarlos. El verde va entre el amarillo y el azul.</p><p>Los colores que están <b>enfrente</b> se llaman complementarios: rojo y verde, azul y naranja. Si los pones juntos, ¡se ven muchísimo!</p>`,
      svg: svg("Círculo cromático de seis colores con el rojo enfrente del verde", `${rueda(95, 92, 66)}${flechaR(170, 50, 205, 50, "var(--muted)")}${etq(214, 40, "Enfrente:", "var(--muted)", 12)}${mancha(196, 80, 13, P.rojo)}${mancha(232, 80, 13, P.verde)}${mancha(196, 124, 13, P.azul)}${mancha(232, 124, 13, P.naranja)}${etq(205, 162, "complementarios", "var(--ink)", 11)}`),
    },
    {
      html: `<h3>Más claro con blanco</h3><p>Si añadimos <mark>blanco</mark> a un color, se vuelve más claro.</p><p>Rojo con blanco da rosa. Azul con blanco da azul celeste. Cuanto más blanco pones, más claro queda.</p><p>El truco es añadir el blanco <b>poco a poco</b>, con la punta del pincel. Así consigues muchos tonos diferentes de un mismo color. ¡Pinta una escalera de azules!</p>`,
      svg: svg("Escalera de azules: de azul fuerte a azul muy claro añadiendo blanco", `${["#1e88e5", "#4fa3eb", "#81bef1", "#b3d8f7", "#e3f0fc"].map((c, i) => `<rect x="${22 + i * 44}" y="${118 - i * 16}" width="40" height="${30 + i * 16}" rx="4" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`).join("")}${etq(42, 165, "azul", "var(--ink)", 12)}${etq(218, 165, "+ blanco", "var(--ink)", 12)}${rot(130, 28, "Más blanco, más claro", { size: 15, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Más oscuro con negro</h3><p>Si añadimos un poquito de <mark>negro</mark>, el color se vuelve más oscuro.</p><p>Verde con negro da un verde de bosque. Rojo con negro da un rojo granate.</p><p>Cuidado: el negro es <b>muy fuerte</b>. Con una gota basta. Si pones mucho, todo se vuelve casi negro. Los colores oscuros sirven para pintar sombras y la noche.</p>`,
      svg: svg("Escalera de verdes: de verde claro a verde muy oscuro añadiendo negro", `${["#7cc47f", "#43a047", "#2e7d32", "#1b5e20", "#0d3310"].map((c, i) => `<rect x="${22 + i * 44}" y="${70}" width="40" height="60" rx="4" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`).join("")}<circle cx="236" cy="48" r="6" fill="${P.negro}"/>${etq(42, 152, "verde", "var(--ink)", 12)}${etq(214, 152, "+ negro", "var(--ink)", 12)}${rot(110, 40, "Una gota de negro…", { size: 14, color: "var(--pen)" })}`),
    },
    {
      html: `<h3>Cómo se mezcla</h3><p>Para mezclar bien usamos una <mark>paleta</mark> o un plato de plástico.</p><p>Primero ponemos el color <b>claro</b> y luego añadimos el oscuro poco a poco. Movemos el pincel en círculos.</p><p>Entre color y color, lavamos el pincel en el vaso de agua y lo secamos con un trapo. Así los colores no se ensucian y quedan limpios.</p>`,
      svg: svg("Una paleta con manchas de colores, un pincel y un vaso de agua", `<path d="M30 110 q-10 -60 60 -70 q80 -10 100 40 q10 30 -30 30 q-20 0 -15 20 q5 25 -40 25 q-70 0 -75 -45z" fill="#e8c99a" stroke="var(--ink)" stroke-width="1.5"/>${mancha(70, 72, 11, P.rojo)}${mancha(105, 60, 11, P.amarillo)}${mancha(142, 64, 11, P.azul)}${mancha(166, 90, 11, P.blanco)}${mancha(78, 112, 13, P.verde)}${pincel(120, 140, P.verde, 40)}<rect x="206" y="104" width="34" height="46" rx="4" fill="${P.celeste}" opacity=".7" stroke="var(--ink)" stroke-width="1.5"/>${etq(223, 168, "agua", "var(--muted)", 11)}`),
    },
    {
      html: `<h3>Colores con sentimiento</h3><p>Los colores también <mark>expresan cómo nos sentimos</mark>.</p><p>Un dibujo con amarillos y naranjas parece alegre, como un día de sol. Uno con azules y morados parece tranquilo o un poco triste.</p><p>Los artistas eligen los colores pensando en lo que quieren contar. Antes de pintar, pregúntate: ¿qué quiero que sienta quien lo mire?</p>`,
      svg: svg("Dos cuadros: uno alegre con sol amarillo y naranja y otro tranquilo con luna y azules", `<rect x="14" y="30" width="110" height="110" rx="8" fill="${P.amarillo}" opacity=".45"/>${sol(69, 78, 22)}<rect x="14" y="116" width="110" height="24" fill="${P.naranja}" opacity=".7"/><rect x="136" y="30" width="110" height="110" rx="8" fill="${P.azul}" opacity=".55"/><circle cx="210" cy="66" r="16" fill="${P.blanco}"/><circle cx="218" cy="60" r="14" fill="#5b8fd6"/><rect x="136" y="116" width="110" height="24" fill="${P.morado}" opacity=".7"/>${etq(69, 162, "alegre")}${etq(191, 162, "tranquilo")}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Saber mezclar colores sirve para <mark>pintar lo que ves</mark> aunque no tengas todas las pinturas.</p><p>Con pocos botes puedes hacer un paisaje entero.</p><p>También lo usan los decoradores para pintar las casas, los diseñadores para hacer la ropa y los cocineros para decorar pasteles. ¡Hasta los semáforos usan colores que se ven muy bien!</p>`,
      svg: svg("Un árbol pintado con colores mezclados: hojas verdes, tronco marrón y cielo celeste", `<rect x="14" y="14" width="232" height="152" rx="10" fill="${P.celeste}" opacity=".5"/><rect x="14" y="136" width="232" height="30" fill="${P.verde}" opacity=".7"/>${arbol(90, 140, 1.6)}${sol(205, 50, 18)}${etq(185, 106, "hojas: amarillo + azul", "var(--ink)", 11)}${etq(185, 124, "tronco: los tres", "var(--ink)", 11)}`),
    },
    {
      html: `<h3>Jugamos al detective de colores</h3><p>Miramos un <mark>cuadro o una foto</mark> con muchos colores.</p><p>Cada niño elige un color y dice cómo se ha hecho: «Este verde es amarillo y azul». «Este rosa es rojo con blanco».</p><p>Luego intentamos conseguir ese color en la paleta. ¿Quién consigue el más parecido? Gana un punto el que lo clava.</p>`,
      svg: svg("Un niño con lupa mira una mancha verde y adivina amarillo más azul", `${mancha(80, 85, 34, P.verde)}<circle cx="150" cy="78" r="26" fill="none" stroke="var(--ink)" stroke-width="5"/><path d="M168 96 l28 28" stroke="var(--ink)" stroke-width="8" stroke-linecap="round"/>${etq(80, 145, "¿Cómo se hizo?", "var(--pen)", 14)}${mancha(200, 46, 12, P.amarillo)}${big(222, 52, "+", "var(--ink)", 16)}${mancha(240, 46, 10, P.azul)}`),
    },
  ],
  figura: {
    titulo: "Colores primarios y secundarios",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Los tres colores primarios y los tres secundarios que salen al mezclarlos"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 34, "Primarios + primarios = secundarios", { size: 20, color: "var(--ink)" })}${[[P.amarillo, P.azul, P.verde, "verde"], [P.rojo, P.amarillo, P.naranja, "naranja"], [P.rojo, P.azul, P.morado, "morado"]].map(([a, b, c, t], i) => { const x = 110 + i * 210; return `<circle cx="${x - 46}" cy="110" r="28" fill="${a}" stroke="var(--ink)"/><circle cx="${x + 46}" cy="110" r="28" fill="${b}" stroke="var(--ink)"/>${big(x, 120, "+", "var(--ink)", 28)}<path d="M${x} 150 v26" stroke="var(--muted)" stroke-width="3"/><path d="M${x - 7} 170 l7 9 l7 -9" stroke="var(--muted)" stroke-width="3" fill="none"/>${mancha(x, 222, 36, c)}${rot(x, 284, t, { size: 18, color: "var(--ink)" })}`; }).join("")}</svg>`,
  },
  video: V("pl1v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Quieres pintar una naranja y no tienes pintura naranja.",
      pasos: ["El naranja es un color secundario.", "Sale de mezclar dos primarios.", "Mezcla rojo y amarillo a partes iguales."],
      resultado: "Rojo + amarillo = naranja." },
    { enunciado: "Necesitas un rosa para pintar un cerdito.",
      pasos: ["El rosa es un rojo más claro.", "Para aclarar se añade blanco.", "Pon blanco y añade rojo poco a poco."],
      resultado: "Blanco + un poco de rojo = rosa." },
    { enunciado: "¿Qué color está enfrente del azul en el círculo?",
      pasos: ["El azul es primario.", "Enfrente está el secundario que no lleva azul.", "Ese es el que sale de rojo y amarillo."],
      resultado: "El naranja: es su complementario." },
  ],
  errores: [
    "Pensar que el verde es primario: es secundario, sale de amarillo y azul.",
    "Echar mucho negro de golpe: se oscurece todo. Hay que poner una gota.",
    "No lavar el pincel entre colores: las mezclas salen sucias.",
    "Empezar la mezcla por el color oscuro: es mejor empezar por el claro.",
  ],
  ejercicios: [
    { q: "Escribe los tres colores primarios.", sol: "Rojo, amarillo y azul." },
    { q: "Escribe los tres colores secundarios.", sol: "Verde, naranja y morado." },
    { q: "¿Qué sale al mezclar rojo y azul?", sol: "Morado." },
    { q: "¿Qué dos colores mezclas para conseguir verde?", sol: "Amarillo y azul." },
    { q: "¿Qué añades para que un color sea más claro?", sol: "Blanco." },
    { q: "¿Qué añades para oscurecerlo?", sol: "Un poquito de negro." },
    { q: "¿Qué color sale de rojo con blanco?", sol: "Rosa." },
    { q: "Di una pareja de colores complementarios.", sol: "Rojo y verde (o azul y naranja, o amarillo y morado)." },
    { q: "Pinta una escalera de cinco tonos de un mismo color.", sol: "Respuesta libre: de más oscuro a más claro añadiendo blanco." },
    { q: "Dibuja algo alegre usando solo colores cálidos.", sol: "Respuesta libre: por ejemplo, un sol y un campo de girasoles en amarillo y naranja." },
  ],
  quiz: [
    { q: "¿Cuál es un color primario?", o: ["verde", "azul", "naranja"], a: 1, e: "Los primarios son rojo, amarillo y azul." },
    { q: "Amarillo + azul =", o: ["verde", "morado", "naranja"], a: 0, e: "Sale el verde." },
    { q: "Rojo + amarillo =", o: ["rosa", "naranja", "marrón"], a: 1, e: "Sale el naranja." },
    { q: "Rojo + azul =", o: ["morado", "verde", "gris"], a: 0, e: "Sale el morado." },
    { q: "¿Cuántos colores primarios hay?", o: ["dos", "tres", "seis"], a: 1, e: "Tres: rojo, amarillo y azul." },
    { q: "Para aclarar un color añadimos…", o: ["negro", "blanco", "agua sucia"], a: 1, e: "El blanco aclara." },
    { q: "Rojo con blanco da…", o: ["rosa", "granate", "naranja"], a: 0, e: "Rosa: un rojo claro." },
    { q: "El círculo cromático sirve para…", o: ["ordenar los colores", "borrar", "medir"], a: 0, e: "Ordena primarios y secundarios." },
    { q: "Enfrente del rojo está el…", o: ["verde", "naranja", "amarillo"], a: 0, e: "Rojo y verde son complementarios." },
    { q: "Entre color y color hay que…", o: ["lavar el pincel", "tirar la pintura", "usar otro papel"], a: 0, e: "Así no se ensucian las mezclas." },
  ],
  examen: [
    { q: "¿Cuál es un color secundario?", o: ["amarillo", "morado", "rojo"], a: 1, e: "Morado = rojo + azul." },
    { q: "Si mezclas los tres primarios sale…", o: ["blanco", "un marrón", "amarillo"], a: 1, e: "Los tres juntos dan un marrón oscuro." },
    { q: "Para pintar la noche usarías colores…", o: ["oscuros", "muy claros", "fluorescentes"], a: 0, e: "La noche es oscura." },
    { q: "Un dibujo con amarillos y naranjas parece…", o: ["alegre", "triste", "frío"], a: 0, e: "Los cálidos dan alegría." },
  ],
  feynman: ["Cuáles son los colores primarios y por qué se llaman así", "Cómo se consiguen los secundarios", "Cómo aclarar y oscurecer un color"],
  mapa: mapa("LOS COLORES", "var(--pri)", [
    ["Primarios", "rojo, amarillo, azul", "#e53935"],
    ["Secundarios", "verde, naranja, morado", "#43a047"],
    ["Claro / oscuro", "+ blanco / + negro", "#1e88e5"],
    ["Círculo", "complementarios enfrente", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Colores primarios", "Rojo, amarillo y azul"],
    ["Colores secundarios", "Verde, naranja y morado"],
    ["Amarillo + azul", "Verde"],
    ["Rojo + amarillo", "Naranja"],
    ["Rojo + azul", "Morado"],
    ["Para aclarar", "Se añade blanco"],
    ["Para oscurecer", "Una gota de negro"],
    ["Complementarios", "Colores que están enfrente en el círculo: rojo y verde"],
  ],
  familias: [
    "Mezclad témperas en un plato y adivinad qué color saldrá antes de remover.",
    "Buscad por casa objetos de cada color secundario.",
    "Haced juntos un círculo de colores con papeles recortados de revistas.",
    "Al cocinar, mirad cómo cambian los colores al mezclar (por ejemplo, batidos de frutas).",
  ],
  profesores: PROF("Educación Plástica y Visual: el color; colores primarios y secundarios; mezclas; gradaciones con blanco y negro; círculo cromático y complementarios; expresividad del color", ["Taller de mezclas con témperas en paletas individuales.", "Escaleras de tonos de un mismo color.", "Detective de colores con reproducciones de cuadros."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer a Mondrian y su uso de los primarios", "Recordar el orden de los colores del arcoíris", "Distinguir colores cálidos y fríos", "Elegir el material de color adecuado: ceras, rotuladores, témperas y acuarelas"],
  lectura: { titulo: "El pueblo gris", html: `<p>Había una vez un pueblo donde todo era <b>gris</b>: las casas, las calles, los árboles y hasta la ropa de la gente. Nadie sonreía mucho.</p><p>Un día llegó una pintora con tres botes: uno <b>rojo</b>, uno <b>amarillo</b> y uno <b>azul</b>.</p><p>—¿Solo tres colores? —se burló el alcalde—. Con eso no pintarás nada.</p><p>La pintora sonrió. Mezcló el amarillo y el azul, y pintó la hierba de <b>verde</b>. Mezcló el rojo y el amarillo, y las naranjas del mercado brillaron de <b>naranja</b>. Mezcló el rojo y el azul, y las flores se volvieron <b>moradas</b>.</p><p>Después añadió un poco de blanco y pintó el cielo de azul clarito.</p><p>Los vecinos salieron a las calles. Los niños pidieron pinceles y pintaron sus puertas de colores.</p><p>Al final, el alcalde se rascó la cabeza y dijo:</p><p>—Con tres colores… ¡has pintado el mundo entero!</p><p>Desde entonces, al pueblo le llaman Arcoíris.</p>` },
  tras: {
    "Los tres primarios": [
      ["Mondrian y los primarios", `<p><mark>Piet Mondrian</mark> fue un pintor holandés que pintaba cuadros muy especiales, usando casi solo los <b>tres colores primarios</b>.</p><ul><li>Dibujaba <b>líneas negras</b> rectas, horizontales y verticales.</li><li>Las líneas formaban <b>rectángulos</b> y cuadrados de distintos tamaños.</li><li>Pintaba algunos de <b>rojo</b>, <b>amarillo</b> o <b>azul</b>.</li><li>El resto los dejaba en <b>blanco</b>.</li></ul><p>Sus cuadros parecen sencillos, pero pensaba mucho dónde poner cada color para que todo estuviera <b>equilibrado</b>.</p><p>Su estilo es tan famoso que hoy se ve en vestidos, muebles, edificios y hasta en zapatillas.</p><p><b>Actividad</b>: con una regla, dibuja líneas negras en un folio y colorea algunos rectángulos de rojo, amarillo y azul, al estilo Mondrian.</p>`,
        L6.filas("Mondrian", [["líneas", "negras y rectas", cMO], ["rojo", "algunos", cRO], ["amarillo", "algunos", cNA], ["azul", "algunos", cAZ]])],
    ],
    "El círculo de colores": [
      ["Los colores del arcoíris", `<p>El <mark>arcoíris</mark> aparece cuando el sol ilumina las gotas de lluvia. La luz del sol, que parece blanca, se separa en <b>siete colores</b>, siempre en el mismo orden:</p><ul><li><b>Rojo</b> (arriba del todo).</li><li><b>Naranja</b>.</li><li><b>Amarillo</b>.</li><li><b>Verde</b>.</li><li><b>Azul</b>.</li><li><b>Añil</b>: un azul muy oscuro.</li><li><b>Violeta</b> (abajo del todo).</li></ul><p>Para verlo, el sol tiene que estar <b>detrás de nosotros</b> y la lluvia, delante.</p><p>También podemos crear un pequeño arcoíris con una manguera, echando agua al sol, o con un vaso de agua junto a la ventana.</p><p><b>Actividad</b>: pinta un arcoíris con témperas, siguiendo el orden correcto de los siete colores.</p>`,
        H6.flujo("Arcoíris", ["rojo|naranja", "amarillo|verde", "azul|añil", "violeta|abajo"], cAZ)],
    ],
    "Colores con sentimiento": [
      ["Cálidos y fríos", `<p>Los colores se pueden separar en dos <mark>familias</mark>:</p><ul><li><b>Colores cálidos</b>: rojo, naranja y amarillo. Nos recuerdan al <b>fuego</b> y al <b>sol</b>. Dan sensación de calor y energía.</li><li><b>Colores fríos</b>: azul, verde y violeta. Nos recuerdan al <b>agua</b>, al <b>hielo</b> y a la noche. Dan sensación de frescor y calma.</li></ul><p>Los artistas eligen una familia u otra según lo que quieren contar:</p><ul><li>Un día de verano en la playa: mejor <b>cálidos</b>.</li><li>Un paisaje nevado o el fondo del mar: mejor <b>fríos</b>.</li></ul><p>Si mezclas muchos cálidos y fríos en un dibujo, crearás <b>contraste</b>: los colores destacan mucho.</p><p><b>Actividad</b>: dibuja dos veces el mismo árbol: uno solo con colores cálidos (otoño) y otro solo con fríos (invierno).</p>`,
        H6.dos("Familias", ["CÁLIDOS", ["rojo", "naranja", "amarillo"], cRO], ["FRÍOS", ["azul", "verde", "violeta"], cAZ])],
    ],
    "Cómo se mezcla": [
      ["Materiales para dar color", `<p>Hay muchos <mark>materiales</mark> para dar color, y cada uno sirve para algo:</p><ul><li><b>Ceras</b>: colores intensos. Se pueden mezclar frotando una encima de otra.</li><li><b>Lápices de colores</b>: para detalles finos. Apretando poco, salen claros; apretando más, oscuros.</li><li><b>Rotuladores</b>: colores muy vivos, pero no se pueden mezclar bien.</li><li><b>Témperas</b>: pintura espesa que cubre mucho. Ideal para mezclar colores en la paleta.</li><li><b>Acuarelas</b>: pintura con mucha agua. Los colores quedan transparentes y suaves.</li></ul><p>Al terminar hay que <b>cuidar el material</b>: tapar los rotuladores, lavar los pinceles y cerrar los botes.</p><p><b>Actividad</b>: pinta el mismo círculo con cada material y compara cómo queda.</p>`,
        L6.filas("Materiales", [["ceras", "intensas", cRO], ["lápices", "detalles", cVE], ["témperas", "cubren", cNA], ["acuarelas", "transparentes", cAZ]]),
        ["MbGnfg2yAn0", "La magia de los colores primarios", "toycantando", 1632459]],
    ],
  },
  final: [
    ["Colores para esconderse", `<p>En la naturaleza, algunos animales usan sus colores para <mark>esconderse</mark>. Esto se llama <b>camuflaje</b>:</p><ul><li>El <b>camaleón</b> cambia de color según dónde está.</li><li>El <b>oso polar</b> es blanco, como la nieve.</li><li>Los <b>saltamontes</b> verdes se confunden con la hierba.</li><li>Las <b>lechuzas</b> tienen plumas del color de la corteza de los árboles.</li></ul><p>Otros animales hacen lo contrario: usan colores <b>muy llamativos</b> para avisar de que son peligrosos, como algunas ranas venenosas, que son rojas, amarillas o azules brillantes.</p><p>También nosotros usamos colores para que nos vean: los chalecos amarillos de seguridad o las señales rojas de peligro.</p><p><b>Actividad</b>: dibuja una mariposa con los mismos colores que la flor donde está posada, ¡a ver si tus compañeros la encuentran!</p>`,
      H6.dos("Colores", ["ESCONDERSE", ["camaleón", "oso polar", "saltamontes"], cVE], ["AVISAR", ["rana roja", "chaleco", "señal"], cRO])],
    ["Repaso: el pueblo gris", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>En el pueblo todo era <b>gris</b> y nadie sonreía.</li><li>La pintora traía <b>tres colores</b>: rojo, amarillo y azul.</li><li>Amarillo + azul = <b>verde</b> para la hierba.</li><li>Rojo + amarillo = <b>naranja</b> para las naranjas.</li><li>Rojo + azul = <b>morado</b> para las flores.</li><li>Con <b>blanco</b> aclaró el azul del cielo.</li></ul><p>El cuento nos recuerda que con solo los tres <b>primarios</b> se pueden conseguir muchísimos colores.</p><p><b>Actividad</b>: con tres témperas primarias y blanco, intenta conseguir el mayor número de colores distintos.</p>`,
      L6.filas("Mezclas", [["amarillo+azul", "verde", cVE], ["rojo+amarillo", "naranja", cNA], ["rojo+azul", "morado", cMO], ["azul+blanco", "azul claro", cAZ]])],
  ],
  ejemplos: [
    ["¿Qué color va justo después del amarillo en el arcoíris?", ["Rojo, naranja, amarillo…"], "El verde."],
    ["¿El naranja es cálido o frío?", ["Recuerda al fuego y al sol."], "Cálido."],
  ],
  errores: ["Pensar que el verde es un color cálido.", "Dejar los rotuladores destapados al terminar."],
  ejercicios: [
    ["b", "¿Qué colores usaba Mondrian?", "Rojo, amarillo y azul, con negro y blanco."],
    ["b", "¿Cuántos colores tiene el arcoíris?", "Siete."],
    ["b", "Di un color cálido.", "Rojo, naranja o amarillo."],
    ["b", "Di un color frío.", "Azul, verde o violeta."],
    ["b", "¿Qué material lleva mucha agua?", "La acuarela."],
    ["m", "¿Qué color está arriba en el arcoíris?", "El rojo."],
    ["m", "¿Qué es el añil?", "Un azul muy oscuro."],
    ["m", "¿Qué es el camuflaje?", "Usar los colores para esconderse."],
    ["m", "¿Qué material cubre mucho y se mezcla en la paleta?", "La témpera."],
    ["m", "¿Dónde tiene que estar el sol para ver el arcoíris?", "Detrás de nosotros."],
    ["a", "En la lectura, ¿cómo consiguió la pintora el verde?", "Mezclando amarillo y azul."],
    ["a", "¿Qué familia de colores usarías para un paisaje nevado? ¿Por qué?", "Fríos, porque recuerdan el hielo."],
    ["a", "¿Por qué algunas ranas tienen colores muy vivos?", "Para avisar de que son peligrosas."],
    ["a", "Ordena: verde, rojo, azul, amarillo, violeta.", "Rojo, amarillo, verde, azul, violeta."],
  ],
  quiz: [
    ["Mondrian pintaba con líneas…", ["negras y rectas", "curvas", "de puntos"], "Mondrian."],
    ["El último color del arcoíris es el…", ["violeta", "rojo", "verde"], "Arcoíris."],
    ["Los colores cálidos recuerdan al…", ["fuego", "hielo", "mar"], "Familias."],
    ["Las acuarelas quedan…", ["transparentes", "espesas", "negras"], "Materiales."],
    ["El oso polar se camufla con el…", ["blanco", "rojo", "azul"], "Camuflaje."],
  ],
  examen: [
    ["En la lectura, ¿cómo era el pueblo al principio?", ["gris", "rojo", "verde"], "Lectura."],
    ["¿Cuántos botes traía la pintora?", ["tres", "siete", "uno"], "Repaso."],
  ],
  tarjetas: [
    ["Arcoíris", "Rojo, naranja, amarillo, verde, azul, añil y violeta."],
    ["Cálidos y fríos", "Cálidos: rojo, naranja, amarillo. Fríos: azul, verde, violeta."],
  ],
  glosario: [
    ["Mondrian", "Pintor de líneas negras y primarios."],
    ["Arcoíris", "Arco de siete colores en el cielo."],
    ["Añil", "Azul muy oscuro."],
    ["Cálido", "Color que da sensación de calor."],
    ["Frío", "Color que da sensación de frescor."],
    ["Témpera", "Pintura espesa que cubre mucho."],
    ["Acuarela", "Pintura con mucha agua."],
    ["Paleta", "Tabla donde se mezclan colores."],
    ["Camuflaje", "Esconderse con los colores."],
    ["Contraste", "Diferencia grande entre colores."],
  ],
  situacion: {
    titulo: "Devolvemos el color al pueblo gris",
    reto: "La clase pinta un gran mural del pueblo gris de la lectura usando solo los tres primarios, el blanco y sus mezclas.",
    pasos: ["Dibujar el pueblo en papel continuo.", "Mezclar en la paleta los secundarios a partir de los primarios.", "Pintar el cielo y el agua en fríos y el sol y los tejados en cálidos.", "Exponer el mural y explicar qué mezclas usamos."],
    producto: "Un mural colorido hecho con mezclas de primarios.",
    evaluacion: ["Conoce a Mondrian.", "Ordena el arcoíris.", "Distingue cálidos y fríos.", "Usa el material adecuado."],
  },
});
