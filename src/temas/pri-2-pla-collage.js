// Educación Plástica 2º de Primaria: collage y reciclaje. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, sol, arbol, nino, flechaR, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const tijeras = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="-10" cy="16" r="7" fill="none" stroke="${P.rojo}" stroke-width="4"/><circle cx="10" cy="16" r="7" fill="none" stroke="${P.rojo}" stroke-width="4"/><path d="M-6 10 L8 -24 M6 10 L-8 -24" stroke="#9aa5c0" stroke-width="4" stroke-linecap="round"/></g>`;
const pega = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-10" y="-20" width="20" height="40" rx="4" fill="${P.blanco}" stroke="var(--ink)" stroke-width="1.5"/><rect x="-10" y="-28" width="20" height="10" rx="3" fill="${P.morado}"/><rect x="-8" y="-6" width="16" height="12" fill="${P.amarillo}"/></g>`;
const rasgado = (x, y, w, h, c, rot0 = 0) => `<path transform="rotate(${rot0} ${x + w / 2} ${y + h / 2})" d="M${x} ${y + 3} l${w * 0.25} -3 l${w * 0.25} 4 l${w * 0.25} -4 l${w * 0.25} 3 l-2 ${h * 0.5} l2 ${h * 0.5} l${-w * 0.3} 3 l${-w * 0.3} -4 l${-w * 0.4} 2 l2 ${-h * 0.5}z" fill="${c}" stroke="var(--ink)" stroke-width="1"/>`;
const botella = (x, y, c = P.celeste) => `<g transform="translate(${x} ${y})"><rect x="-14" y="-40" width="28" height="56" rx="8" fill="${c}" opacity=".7" stroke="var(--ink)" stroke-width="1.5"/><rect x="-6" y="-52" width="12" height="14" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><rect x="-7" y="-58" width="14" height="7" rx="2" fill="${P.azul}"/></g>`;
const tubo = (x, y, h = 50, c = "#c99a5b") => `<g><rect x="${x - 12}" y="${y - h}" width="24" height="${h}" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="${x}" cy="${y - h}" rx="12" ry="4" fill="#a8763a" stroke="var(--ink)" stroke-width="1.5"/></g>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Collage y reciclaje",
  minutos: 25,
  objetivos: ["Saber qué es un collage y hacerlo con papeles recortados y rasgados", "Componer una imagen pegando trozos de materiales", "Reutilizar materiales de desecho para crear objetos y juguetes"],
  claves: ["collage", "recortar", "rasgar", "pegar", "composición", "reciclar", "reutilizar", "material de desecho"],
  pregunta: {
    texto: "¿Se puede hacer un cuadro sin pinceles ni lápices, solo con papeles, telas y tijeras?",
    respuesta: "¡Sí! Se llama <mark>collage</mark>: una imagen hecha <b>pegando trozos</b> de distintos materiales. Y si usamos cosas que íbamos a tirar, además <b>reciclamos</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un collage?</h3><p>Un <mark>collage</mark> es una imagen hecha pegando trozos de cosas sobre un papel o un cartón.</p><p>La palabra viene del francés y significa «pegar». Podemos usar papel de colores, revistas, telas, botones, hojas secas o lanas.</p><p>Muchos artistas famosos hicieron collages, como Picasso o Matisse. ¡Es una forma de pintar con tijeras!</p>`,
      svg: svg("Un collage: un paisaje hecho con trozos de papel pegados, un sol de papel y una casa con botones", `<rect x="14" y="14" width="232" height="152" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${rasgado(14, 110, 232, 56, P.verde)}${rasgado(30, 24, 70, 40, P.celeste, -4)}<circle cx="200" cy="46" r="20" fill="${P.amarillo}" stroke="var(--ink)"/>${[0, 1, 2, 3, 4, 5].map((i) => rasgado(196 + Math.cos(i * 1.05) * 30, 42 + Math.sin(i * 1.05) * 30, 10, 8, P.naranja, i * 60)).join("")}<rect x="96" y="80" width="56" height="44" fill="${P.rojo}" stroke="var(--ink)"/><path d="M90 80 L124 54 L158 80z" fill="${P.azul}" stroke="var(--ink)"/>${[[110, 96], [138, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="${P.amarillo}" stroke="var(--ink)"/><circle cx="${x - 2}" cy="${y}" r="1" fill="var(--ink)"/><circle cx="${x + 2}" cy="${y}" r="1" fill="var(--ink)"/>`).join("")}`),
    },
    {
      html: `<h3>Recortar y rasgar</h3><p>Los trozos se pueden preparar de <mark>dos maneras</mark>.</p><p><b>Recortar</b> con tijeras: los bordes quedan rectos y limpios. Sirve para formas exactas, como un cuadrado.</p><p><b>Rasgar</b> con los dedos: los bordes quedan irregulares, con pelitos. Queda muy bien para nubes, montañas o hierba. Usa siempre tijeras de punta redonda y córtalas hacia fuera.</p>`,
      svg: svg("A la izquierda unas tijeras recortan un cuadrado de bordes rectos; a la derecha unos dedos rasgan papel con bordes irregulares", `${tijeras(46, 70, 1.3)}<rect x="74" y="56" width="40" height="40" fill="${P.azul}" stroke="var(--ink)"/>${etq(70, 138, "recortar")}${etq(70, 156, "bordes rectos", "var(--muted)", 11)}${rasgado(166, 50, 60, 50, P.verde)}<path d="M150 104 q-6 -14 6 -18 l18 -4 M236 104 q6 -14 -6 -18 l-18 -4" stroke="${P.piel}" stroke-width="10" fill="none" stroke-linecap="round"/>${etq(196, 138, "rasgar")}${etq(196, 156, "bordes con pelitos", "var(--muted)", 11)}`),
    },
    {
      html: `<h3>Pegar bien</h3><p>Para que el collage no se despegue hay que <mark>pegar bien</mark>.</p><p>Pon el pegamento en la parte de <b>atrás</b> del trozo, sobre todo por los bordes. No hace falta mucho.</p><p>Después aprieta con la mano y alisa desde el centro hacia fuera. Para papeles finos va bien la barra de pegamento. Para cosas gruesas, como botones o telas, mejor la cola blanca.</p>`,
      svg: svg("Pasos para pegar: pegamento por detrás, en los bordes, y alisar del centro hacia fuera", `${pega(40, 90)}<rect x="80" y="60" width="64" height="56" fill="${P.naranja}" opacity=".35" stroke="var(--ink)" stroke-dasharray="4 3"/><path d="M84 64 h56 v48 h-56z" fill="none" stroke="${P.amarillo}" stroke-width="5" opacity=".9"/>${etq(112, 136, "bordes")}<rect x="172" y="60" width="64" height="56" fill="${P.naranja}" stroke="var(--ink)"/>${flechaR(204, 88, 228, 70, "#fff")}${flechaR(204, 88, 180, 70, "#fff")}${flechaR(204, 88, 228, 108, "#fff")}${flechaR(204, 88, 180, 108, "#fff")}${etq(204, 136, "alisar")}${etq(130, 30, "Poco pegamento y bien repartido", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Componer la imagen</h3><p>Antes de pegar, <mark>colocamos los trozos</mark> sobre el papel y probamos.</p><p>Movemos las piezas hasta que nos guste cómo quedan. Eso se llama componer.</p><p>Primero pegamos lo que está <b>al fondo</b>, como el cielo o el suelo. Después lo que está delante, como los árboles o las personas. Si lo hacemos al revés, ¡el cielo tapa a los árboles!</p>`,
      svg: svg("Orden para pegar: primero el fondo, después el suelo y al final lo de delante", `${[0, 1, 2].map((i) => `<rect x="${14 + i * 82}" y="40" width="72" height="90" rx="4" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><rect x="${16 + i * 82}" y="42" width="68" height="86" fill="${P.celeste}" opacity=".6"/>${i >= 1 ? `<rect x="${16 + i * 82}" y="100" width="68" height="28" fill="${P.verde}" opacity=".8"/>` : ""}${i >= 2 ? arbol(50 + i * 82, 112, 0.9) : ""}`).join("")}${etq(50, 150, "1. fondo")}${etq(132, 150, "2. suelo")}${etq(214, 150, "3. delante")}${flechaR(88, 84, 94, 84)}${flechaR(170, 84, 176, 84)}`),
    },
    {
      html: `<h3>Reducir, reutilizar, reciclar</h3><p>Cada día tiramos muchas cosas: cajas, botellas, tapones, periódicos… Eso es <mark>basura</mark> que contamina.</p><p>Para cuidar el planeta seguimos las <b>tres R</b>. <b>Reducir</b>: gastar menos. <b>Reutilizar</b>: dar otra vida a las cosas.</p><p><b>Reciclar</b>: tirar cada cosa al contenedor de su color. En Plástica podemos <b>reutilizar</b> muchísimo. ¡A guardar materiales!</p>`,
      svg: svg("Las tres erres: reducir, reutilizar y reciclar, con contenedores amarillo, azul y verde", `${["reducir", "reutilizar", "reciclar"].map((t, i) => `<circle cx="${48 + i * 82}" cy="44" r="22" fill="${P.verde}"/>${rot(48 + i * 82, 52, "R", { size: 22, color: "#fff", w: 800 })}${etq(48 + i * 82, 84, t)}`).join("")}${[[P.amarillo, "envases"], [P.azul, "papel"], [P.verde, "vidrio"]].map(([c, t], i) => `<rect x="${30 + i * 76}" y="104" width="50" height="46" rx="4" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><rect x="${26 + i * 76}" y="98" width="58" height="9" rx="3" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/>${etq(55 + i * 76, 168, t, "var(--ink)", 11)}`).join("")}`),
    },
    {
      html: `<h3>Materiales de desecho</h3><p>Los <mark>materiales de desecho</mark> son cosas que ya no usamos y que pueden servir para crear.</p><p>Rollos de papel higiénico, cajas de cartón, hueveras, tapones, botellas de plástico, revistas viejas, botones y trozos de tela.</p><p>Antes de usarlos, hay que <b>lavarlos</b> y secarlos bien. Guárdalos en una caja de reciclaje en clase. ¡Es el tesoro de los artistas!</p>`,
      svg: svg("Caja de materiales de desecho con rollos de cartón, una botella, tapones y una huevera", `<path d="M20 160 V96 H240 V160z" fill="#c99a5b" stroke="var(--ink)" stroke-width="2"/><path d="M20 96 L36 80 H224 L240 96" fill="#d9b07a" stroke="var(--ink)" stroke-width="2"/>${tubo(60, 100, 46)}${tubo(88, 100, 38)}${botella(130, 96)}${[P.rojo, P.azul, P.amarillo, P.verde].map((c, i) => `<circle cx="${176 + (i % 2) * 18}" cy="${60 + Math.floor(i / 2) * 16}" r="7" fill="${c}" stroke="var(--ink)"/>`).join("")}${etq(130, 136, "Caja de reciclaje", "#fff", 14)}`),
    },
    {
      html: `<h3>Crear con reciclaje</h3><p>Con materiales de desecho podemos hacer <mark>juguetes y objetos</mark> nuevos.</p><p>Un rollo de cartón se convierte en un muñeco o unos prismáticos. Una botella, en un cohete o una maceta. Una huevera, en una oruga.</p><p>Primero piensa qué quieres hacer. Después elige los materiales, únelos con cola y decóralos con pintura o papeles. ¡Nada se tira!</p>`,
      svg: svg("Juguetes de reciclaje: un muñeco hecho con un rollo de cartón, un cohete de botella y una oruga de huevera", `${tubo(50, 140, 64, P.naranja)}<circle cx="44" cy="96" r="3" fill="var(--ink)"/><circle cx="56" cy="96" r="3" fill="var(--ink)"/><path d="M44 106 q6 5 12 0" stroke="var(--ink)" stroke-width="2" fill="none"/><path d="M38 80 q12 -14 24 0" fill="${P.amarillo}"/>${botella(130, 128, P.blanco)}<path d="M116 134 l-12 14 h12z M144 134 l12 14 h-12z" fill="${P.rojo}"/><path d="M122 144 q8 18 16 0" fill="${P.naranja}"/>${[0, 1, 2, 3].map((i) => `<circle cx="${180 + i * 17}" cy="126" r="12" fill="${P.verde}" stroke="var(--ink)"/>`).join("")}<circle cx="236" cy="122" r="2.5" fill="var(--ink)"/><path d="M232 112 l-3 -10 M240 112 l3 -10" stroke="var(--ink)" stroke-width="2"/>${etq(50, 164, "rollo")}${etq(130, 170, "botella")}${etq(206, 164, "huevera")}`),
      video: V("pl6b"),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>El collage y el reciclaje nos enseñan que <mark>todo puede tener otra vida</mark>.</p><p>Hay artistas que hacen esculturas enormes con plásticos que recogen en las playas, para que pensemos en la basura del mar.</p><p>Y en casa, con imaginación, podemos hacer regalos, adornos de Navidad o juguetes sin comprar nada. ¡Cuidamos el planeta y ahorramos!</p>`,
      svg: svg("Un pez grande hecho con tapones de colores y una botella, como en el arte con plásticos de la playa", `<g transform="translate(120 90)"><ellipse rx="80" ry="44" fill="none" stroke="var(--ink)" stroke-width="2"/>${[...Array(24)].map((_, i) => { const a = (i * 2 * Math.PI) / 24, r = (i % 3) * 14 + 14; return `<circle cx="${(Math.cos(a) * r * 1.7).toFixed(1)}" cy="${(Math.sin(a) * r * 0.85).toFixed(1)}" r="7" fill="${[P.rojo, P.azul, P.amarillo, P.verde, P.naranja][i % 5]}" stroke="var(--ink)" stroke-width="1"/>`; }).join("")}<path d="M78 0 l40 -30 v60z" fill="${P.celeste}" stroke="var(--ink)" stroke-width="2"/><circle cx="-56" cy="-8" r="6" fill="#fff" stroke="var(--ink)"/><circle cx="-56" cy="-8" r="2.5" fill="var(--ink)"/></g>${etq(130, 168, "Un pez de tapones", "var(--pen)", 14)}`),
    },
    {
      html: `<h3>Jugamos al collage en cadena</h3><p>Hacemos un <mark>collage entre todos</mark> en un papel muy grande.</p><p>Cada niño tiene un trozo de revista, tela o cartón. Por turnos, sale y lo pega donde quiera, pensando en lo que ya hay.</p><p>Poco a poco aparece una imagen sorpresa: ¿una ciudad, un jardín, un monstruo? Al final le ponemos un título entre todos. ¡Es una obra de toda la clase!</p>`,
      svg: svg("Mural colectivo: tres niños pegan trozos de papel de colores en un papel grande", `<rect x="14" y="14" width="232" height="100" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${rasgado(24, 30, 50, 34, P.rojo, -8)}${rasgado(84, 50, 60, 40, P.azul, 6)}${rasgado(150, 24, 46, 30, P.amarillo, -3)}${rasgado(196, 60, 40, 40, P.verde, 10)}${rasgado(40, 74, 40, 30, P.morado, 4)}${nino(60, 168, { c: P.rojo, pose: "arriba", s: 0.9 })}${nino(130, 168, { c: P.azul, pose: "palmas", s: 0.9, nina: true })}${nino(200, 168, { c: P.verde, pose: "arriba", s: 0.9 })}`),
    },
  ],
  figura: {
    titulo: "Collage y reciclaje",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Pasos del collage: recortar o rasgar, colocar, pegar, y las tres erres del reciclaje"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 34, "Hacer un collage", { size: 20, color: "var(--pen)" })}${tijeras(100, 100, 1.6)}${rot(100, 168, "1. Recortar o rasgar", { size: 15 })}${rasgado(270, 74, 50, 40, P.azul, -10)}${rasgado(310, 90, 40, 36, P.rojo, 8)}${rot(320, 168, "2. Colocar", { size: 15 })}${pega(540, 110)}${rot(540, 168, "3. Pegar", { size: 15 })}${flechaR(170, 100, 236, 100, "var(--muted)")}${flechaR(392, 100, 500, 100, "var(--muted)")}${["Reducir", "Reutilizar", "Reciclar"].map((t, i) => `<circle cx="${160 + i * 160}" cy="236" r="26" fill="${P.verde}"/>${rot(160 + i * 160, 245, "R", { size: 26, color: "#fff", w: 800 })}${rot(160 + i * 160, 286, t, { size: 15 })}`).join("")}</svg>`,
  },
  video: V("pl6v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Haz un collage de un paisaje de montaña.",
      pasos: ["Rasga papel azul para el cielo y pégalo primero.", "Rasga papel marrón y verde para las montañas.", "Recorta un sol amarillo y pégalo al final."],
      resultado: "Un paisaje de papel con bordes de montaña irregulares." },
    { enunciado: "Convierte un rollo de cartón en un búho.",
      pasos: ["Dobla la parte de arriba hacia dentro para hacer las orejas.", "Pega dos círculos grandes de papel para los ojos.", "Pinta o pega plumas de papel en la barriga."],
      resultado: "Un búho de reciclaje." },
    { enunciado: "¿En qué contenedor tiras una caja de cereales vacía?",
      pasos: ["La caja es de cartón.", "El cartón y el papel van juntos.", "Su contenedor es el azul."],
      resultado: "En el contenedor azul (o la guardas para Plástica)." },
  ],
  errores: [
    "Poner pegamento por delante del trozo: se pone por detrás.",
    "Pegar primero lo de delante: luego el fondo lo tapa.",
    "Usar materiales sucios: hay que lavarlos y secarlos antes.",
    "Cortar con tijeras de punta hacia uno mismo: se corta hacia fuera.",
  ],
  ejercicios: [
    { q: "¿Qué es un collage?", sol: "Una imagen hecha pegando trozos de materiales sobre un papel o cartón." },
    { q: "¿Qué diferencia hay entre recortar y rasgar?", sol: "Recortar se hace con tijeras (bordes rectos); rasgar, con los dedos (bordes irregulares)." },
    { q: "¿Qué se pega primero en un collage de paisaje?", sol: "El fondo: el cielo y el suelo." },
    { q: "¿Qué pegamento usas para un botón?", sol: "Cola blanca." },
    { q: "¿Cuáles son las tres R?", sol: "Reducir, reutilizar y reciclar." },
    { q: "Di tres materiales de desecho que sirven en Plástica.", sol: "Por ejemplo: rollos de cartón, botellas y tapones." },
    { q: "¿Qué hay que hacer con un bote de yogur antes de usarlo?", sol: "Lavarlo y secarlo." },
    { q: "¿Qué se puede hacer con una huevera?", sol: "Por ejemplo: una oruga, una tortuga o un joyero." },
    { q: "Haz un collage de tu animal favorito con papeles de revista.", sol: "Respuesta libre." },
    { q: "Construye un juguete con al menos dos materiales reciclados.", sol: "Respuesta libre: por ejemplo, un cohete con una botella y cartón." },
  ],
  quiz: [
    { q: "«Collage» significa…", o: ["pegar", "pintar", "modelar"], a: 0, e: "Viene del francés coller, pegar." },
    { q: "Rasgar se hace con…", o: ["los dedos", "tijeras", "un pincel"], a: 0, e: "Con los dedos." },
    { q: "Al rasgar, los bordes quedan…", o: ["rectos", "irregulares", "redondos perfectos"], a: 1, e: "Con pelitos." },
    { q: "El pegamento se pone…", o: ["por delante", "por detrás", "en la mesa"], a: 1, e: "Por la parte de atrás." },
    { q: "Componer es…", o: ["colocar los trozos hasta que nos guste", "tirar papeles", "borrar"], a: 0, e: "Probar antes de pegar." },
    { q: "Se pega primero…", o: ["el fondo", "lo de delante", "el título"], a: 0, e: "El fondo." },
    { q: "Reutilizar es…", o: ["dar otra vida a las cosas", "tirarlas", "comprar más"], a: 0, e: "Usarlas de nuevo." },
    { q: "El papel va al contenedor…", o: ["azul", "verde", "amarillo"], a: 0, e: "Azul." },
    { q: "Los envases de plástico van al…", o: ["amarillo", "azul", "verde"], a: 0, e: "Amarillo." },
    { q: "Con un rollo de cartón podemos hacer…", o: ["unos prismáticos", "una sopa", "un vaso de agua"], a: 0, e: "Juguetes y figuras." },
  ],
  examen: [
    { q: "Para hacer nubes de papel es mejor…", o: ["rasgar", "recortar con regla", "doblar"], a: 0, e: "Los bordes irregulares parecen nubes." },
    { q: "Las tijeras de clase deben ser de…", o: ["punta redonda", "punta afilada", "metal grande"], a: 0, e: "Por seguridad." },
    { q: "¿Qué R es «gastar menos»?", o: ["reducir", "reciclar", "reutilizar"], a: 0, e: "Reducir." },
    { q: "Los materiales de desecho hay que…", o: ["lavarlos y secarlos", "pintarlos sin lavar", "romperlos"], a: 0, e: "Limpios antes de usar." },
  ],
  feynman: ["Qué es un collage y cómo se hace", "En qué orden se pegan los trozos", "Qué son las tres R y cómo usamos el reciclaje en Plástica"],
  mapa: mapa("COLLAGE Y RECICLAJE", "var(--pri)", [
    ["Collage", "imagen con trozos pegados", "#e53935"],
    ["Técnicas", "recortar, rasgar, pegar", "#1e88e5"],
    ["Componer", "fondo primero, delante después", "#43a047"],
    ["Tres R", "reducir, reutilizar, reciclar", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Collage", "Imagen hecha pegando trozos de materiales"],
    ["Recortar", "Con tijeras: bordes rectos"],
    ["Rasgar", "Con los dedos: bordes irregulares"],
    ["Componer", "Colocar los trozos antes de pegar"],
    ["Orden al pegar", "Primero el fondo, después lo de delante"],
    ["Reducir", "Gastar menos"],
    ["Reutilizar", "Dar otra vida a las cosas"],
    ["Reciclar", "Tirar cada cosa a su contenedor"],
  ],
  familias: [
    "Preparad en casa una caja de materiales limpios para reciclar en manualidades.",
    "Haced un collage con fotos y recortes de revistas de un viaje o una fiesta.",
    "Construid juntos un juguete con rollos de cartón y tapones.",
    "Separad la basura en casa y explicad a qué contenedor va cada cosa.",
  ],
  profesores: PROF("Educación Plástica y Visual: técnica del collage (recortar, rasgar, pegar); composición por planos; uso creativo de materiales de desecho; educación ambiental (reducir, reutilizar, reciclar)", ["Collage de paisaje por planos con papel rasgado.", "Caja de reciclaje de aula para proyectos.", "Mural colectivo en cadena."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer los papeles recortados de Matisse", "Hacer un mosaico con trocitos de papel", "Crear un retrato divertido con recortes de revista", "Construir esculturas con cajas y envases"],
  lectura: { titulo: "Las tijeras del señor Matisse", html: `<p>Henri Matisse era un pintor francés muy famoso. Pintaba cuadros llenos de colores alegres.</p><p>Cuando se hizo mayor, se puso enfermo y tuvo que pasar mucho tiempo en una silla de ruedas. Ya no podía estar de pie delante del caballete para pintar.</p><p>—¿Tendré que dejar el arte? —se preguntaba triste.</p><p>Pero Matisse no se rindió. Pidió a sus ayudantes que pintaran grandes hojas de papel de colores. Después, cogió unas <b>tijeras</b> y empezó a recortar: hojas de algas, estrellas, pájaros, bailarines…</p><p>Sus ayudantes pegaban las formas en la pared siguiendo sus indicaciones. Matisse decía que <b>dibujaba con las tijeras</b>.</p><p>Poco a poco, las paredes de su habitación se llenaron de formas que parecían bailar. Algunas obras eran tan grandes que ocupaban una pared entera.</p><p>Hoy, esos <b>papeles recortados</b> están en los museos más importantes del mundo. Matisse demostró que siempre hay una forma de seguir creando.</p>` },
  tras: {
    "¿Qué es un collage?": [
      ["Matisse, dibujar con tijeras", `<p><mark>Henri Matisse</mark> fue un pintor francés que, al final de su vida, inventó una forma nueva de hacer arte: los <b>papeles recortados</b>.</p><ul><li>Pintaba hojas grandes de papel con <b>colores vivos</b>: azul, rojo, amarillo, verde.</li><li>Las recortaba sin dibujar antes: ¡directamente con las tijeras!</li><li>Hacía formas de la naturaleza: <b>hojas, algas, estrellas, pájaros</b>.</li><li>Sus formas son <b>curvas</b> y parecen moverse.</li><li>Una de sus obras más conocidas es <b>Ícaro</b>: una figura negra sobre fondo azul con estrellas amarillas.</li></ul><p>Matisse decía que recortar papel de color era como esculpir el color.</p><p><b>Actividad</b>: recorta sin dibujar antes una forma de hoja o de alga y pégala sobre un fondo de color contrario.</p>`,
        L6.filas("Matisse", [["pintar", "papel grande", cAZ], ["recortar", "sin dibujo", cRO], ["formas", "hojas, algas", cVE], ["pegar", "en la pared", cNA]]),
        ["pp2ZqJoHPXE", "Cómo crear un collage de Henri Matisse para niños", "National Gallery of Art", 109780]],
    ],
    "Pegar bien": [
      ["El mosaico de papel", `<p>Un <mark>mosaico</mark> es una imagen hecha con muchos trocitos pequeños, colocados uno al lado del otro. Los romanos hacían mosaicos con piedrecitas en los suelos de sus casas.</p><p>Nosotros podemos hacerlo con <b>papel</b>:</p><ul><li>Dibuja una forma sencilla: un pez, una flor o un sol.</li><li>Corta tiras de papel de colores y después, <b>cuadraditos</b> pequeños.</li><li>Pega los cuadraditos dentro del dibujo, dejando un <b>espacio</b> fino entre ellos.</li><li>Usa un color para la figura y otro distinto para el fondo.</li></ul><p>Cada trocito se llama <b>tesela</b>. Hace falta mucha paciencia, ¡pero el resultado es precioso!</p><p><b>Actividad</b>: haz un mosaico de un pez con teselas de papel de revista de tonos azules y verdes.</p>`,
        H6.flujo("Mosaico", ["dibujar|forma", "cortar|cuadraditos", "pegar|con espacio", "fondo|otro color"], cAZ)],
    ],
    "Componer la imagen": [
      ["Retratos de revista", `<p>Con recortes de <mark>revistas</mark> podemos hacer retratos muy divertidos y sorprendentes:</p><ul><li>Busca en revistas viejas <b>ojos, narices, bocas</b> y peinados de distintos tamaños.</li><li>Recórtalos con cuidado.</li><li>Dibuja el óvalo de una cara en una cartulina.</li><li>Prueba combinaciones: ¡un ojo grande y otro pequeño, una boca enorme!</li><li>Cuando te guste, pega las piezas.</li><li>Termina con pelo de lana o de papel rasgado.</li></ul><p>No tiene que parecerse a nadie: es un retrato <b>imaginario</b>. A veces queda gracioso y otras, un poco raro.</p><p>Algunos artistas, como <b>Arcimboldo</b>, hacían caras con frutas y verduras.</p><p><b>Actividad</b>: crea un personaje de revista y ponle un nombre inventado.</p>`,
        H6.dos("Retrato", ["BUSCAR", ["ojos", "nariz", "boca"], cMO], ["AÑADIR", ["pelo de lana", "orejas", "sombrero"], cNA])],
    ],
    "Crear con reciclaje": [
      ["Esculturas con cajas", `<p>Con cajas y envases vacíos podemos construir <mark>esculturas</mark> en tres dimensiones, que se pueden mirar por todos los lados.</p><ul><li><b>Cajas</b> de cereales, de zapatos o de galletas.</li><li><b>Tubos</b> de cartón del papel de cocina.</li><li><b>Tapones</b> de colores para ojos o ruedas.</li><li><b>Hueveras</b> para escamas o caparazones.</li></ul><p>Pasos:</p><ul><li>Piensa qué quieres hacer: un robot, un castillo, un dinosaurio.</li><li>Une las piezas con cola blanca o cinta adhesiva.</li><li>Cuando esté seco, píntalo con témpera.</li><li>Añade los detalles al final.</li></ul><p>Las esculturas grandes se pueden hacer entre toda la clase: ¡una ciudad entera de cajas!</p><p><b>Actividad</b>: construye un robot con una caja, dos tubos y tapones.</p>`,
        L6.filas("Robot", [["caja", "cuerpo", cAZ], ["tubos", "brazos", cVE], ["tapones", "ojos", cRO], ["témpera", "color", cNA]])],
    ],
  },
  final: [
    ["Exponemos nuestros collages", `<p>Cuando terminamos nuestras obras, podemos hacer una <mark>exposición</mark> en clase o en el pasillo, como en un museo de verdad.</p><ul><li>Cada obra lleva una <b>cartela</b>: un papelito con el título, el nombre del artista y los materiales.</li><li>Colgamos las obras a la <b>altura de los ojos</b>.</li><li>Dejamos espacio entre una y otra para que se vean bien.</li><li>Invitamos a otras clases o a las familias a <b>visitarla</b>.</li><li>Cada artista explica su obra: qué quiso hacer y cómo lo hizo.</li></ul><p>Al mirar las obras de los demás, decimos lo que nos gusta con <b>respeto</b>: «Me gustan tus colores», «¡Qué idea tan original!».</p><p><b>Actividad</b>: escribe la cartela de tu collage: título, tu nombre y los materiales.</p>`,
      H6.flujo("Exposición", ["cartela|título", "colgar|a la vista", "visitar|familias", "explicar|mi obra"], cVE)],
    ["Repaso: las tijeras de Matisse", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Matisse era un <b>pintor francés</b>.</li><li>De mayor se puso enfermo y usaba <b>silla de ruedas</b>.</li><li>No podía pintar de pie, pero <b>no se rindió</b>.</li><li>Sus ayudantes pintaban <b>papeles de colores</b>.</li><li>Él los recortaba: decía que <b>dibujaba con tijeras</b>.</li><li>Sus obras están hoy en <b>museos</b> de todo el mundo.</li></ul><p>La historia de Matisse nos enseña que el arte se adapta: si una forma no funciona, se puede buscar otra.</p><p><b>Actividad</b>: entre todos, haced un mural grande al estilo de Matisse con formas recortadas.</p>`,
      H6.flujo("Matisse", ["pintor|colores", "enfermo|silla", "tijeras|recortar", "museos|hoy"], cRO)],
  ],
  ejemplos: [
    ["¿Cómo se llama cada trocito de un mosaico?", ["Se colocan uno junto a otro."], "Tesela."],
    ["¿Qué hacía Matisse con las tijeras?", ["Recortaba papeles pintados."], "Dibujaba recortando formas."],
  ],
  errores: ["Pegar las teselas sin dejar espacio entre ellas.", "Pintar una escultura de cajas antes de que se seque la cola."],
  ejercicios: [
    ["b", "¿De qué país era Matisse?", "De Francia."],
    ["b", "¿Qué es un mosaico?", "Una imagen hecha con trocitos."],
    ["b", "Di un material para una escultura reciclada.", "Cajas, tubos, tapones…"],
    ["b", "¿Qué formas recortaba Matisse?", "Hojas, algas, estrellas, pájaros."],
    ["b", "¿Qué es una cartela?", "El papel con el título y el autor de la obra."],
    ["m", "¿Quién hacía mosaicos en los suelos?", "Los romanos."],
    ["m", "¿Qué artista hacía caras con frutas?", "Arcimboldo."],
    ["m", "¿Cómo se llama la obra de Matisse con una figura negra?", "Ícaro."],
    ["m", "¿Con qué se pinta una escultura de cajas?", "Con témpera."],
    ["m", "¿A qué altura se cuelgan las obras?", "A la altura de los ojos."],
    ["a", "En la lectura, ¿por qué Matisse empezó a recortar?", "Porque estaba enfermo y no podía pintar de pie."],
    ["a", "¿Qué nos enseña la historia de Matisse?", "Que siempre hay una forma de seguir creando."],
    ["a", "Explica los pasos de un mosaico de papel.", "Dibujar, cortar cuadraditos, pegarlos con espacio y hacer el fondo."],
    ["a", "Diseña un robot con materiales reciclados.", "Respuesta libre."],
  ],
  quiz: [
    ["Matisse dibujaba con…", ["tijeras", "lápiz", "ordenador"], "Matisse."],
    ["Un trocito de mosaico es una…", ["tesela", "cartela", "paleta"], "Mosaico."],
    ["Para el retrato usamos…", ["revistas", "arena", "agua"], "Retrato."],
    ["Una escultura se mira…", ["por todos lados", "solo de frente", "con los ojos cerrados"], "Esculturas."],
    ["En una exposición, decimos lo que nos gusta con…", ["respeto", "gritos", "prisa"], "Exposición."],
  ],
  examen: [
    ["En la lectura, ¿quién pintaba los papeles?", ["los ayudantes", "Matisse de pie", "nadie"], "Lectura."],
    ["¿Dónde están hoy sus obras?", ["en museos", "en la basura", "en una caja"], "Repaso."],
  ],
  tarjetas: [
    ["Matisse", "Pintor francés que dibujaba con tijeras: papeles recortados."],
    ["Mosaico", "Imagen hecha con teselas, trocitos colocados con un espacio."],
  ],
  glosario: [
    ["Matisse", "Pintor francés de colores alegres."],
    ["Mosaico", "Imagen de trocitos pequeños."],
    ["Tesela", "Cada trocito de un mosaico."],
    ["Escultura", "Obra de arte con volumen."],
    ["Exposición", "Muestra de obras para que se vean."],
    ["Cartela", "Papel con el título y el autor de una obra."],
    ["Arcimboldo", "Pintor que hacía caras con frutas."],
    ["Caballete", "Soporte para pintar de pie."],
    ["Envase", "Recipiente que guarda un producto."],
    ["Mural", "Obra grande en una pared."],
  ],
  situacion: {
    titulo: "El museo reciclado",
    reto: "La clase prepara una exposición con collages al estilo de Matisse, mosaicos y esculturas de cajas.",
    pasos: ["Recoger papeles, revistas, cajas y tapones limpios.", "Cada alumno hace un collage o un mosaico.", "En grupos, construir una escultura con cajas.", "Montar la exposición con cartelas e invitar a otra clase."],
    producto: "Una exposición de arte con materiales reciclados.",
    evaluacion: ["Conoce a Matisse.", "Hace un mosaico de papel.", "Compone un retrato con recortes.", "Construye una escultura con envases."],
  },
});
