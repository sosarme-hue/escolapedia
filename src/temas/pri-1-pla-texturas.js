// Educación Plástica 1º de Primaria: texturas. Tema a nivel libro. Dibujos propios en SVG.
const { tema, C, dibujos, lista, mural, vid, lienzo, texto } = require("./_pri1L2");
const { R, A, V, N, M, G, K } = C;

const B = `stroke="var(--ink)" stroke-width="2"`;
// Patrones de textura dentro de un cuadro de 64 × 64 con esquina en (x, y).
const pat = {
  rayas: (x, y, c) => [0, 1, 2, 3, 4, 5].map((i) => `<path d="M${x + 6} ${y + 8 + i * 10} H${x + 58}" stroke="${c}" stroke-width="3"/>`).join(""),
  puntos: (x, y, c) => [0, 1, 2, 3].flatMap((i) => [0, 1, 2, 3].map((j) => `<circle cx="${x + 10 + i * 15}" cy="${y + 10 + j * 15}" r="3.5" fill="${c}"/>`)).join(""),
  cuadros: (x, y, c) => [0, 1, 2, 3].flatMap((i) => [0, 1, 2, 3].filter((j) => (i + j) % 2 === 0).map((j) => `<rect x="${x + i * 16}" y="${y + j * 16}" width="16" height="16" fill="${c}"/>`)).join(""),
  ondas: (x, y, c) => [0, 1, 2, 3, 4].map((i) => `<path d="M${x + 4} ${y + 10 + i * 11} q 7 -7 14 0 t 14 0 t 14 0 t 14 0" fill="none" stroke="${c}" stroke-width="2.5"/>`).join(""),
  rugoso: (x, y, c) => [[12, 12], [34, 10], [52, 18], [20, 30], [44, 34], [10, 48], [30, 52], [54, 50], [28, 20], [40, 46]].map(([a, b], i) => `<path d="M${x + a - 4} ${y + b + 3} l4 -7 l5 6 z" fill="${c}"/>`).join(""),
  liso: () => "",
  peludo: (x, y, c) => [0, 1, 2, 3, 4, 5, 6].flatMap((i) => [0, 1, 2, 3].map((j) => `<path d="M${x + 6 + i * 8} ${y + 14 + j * 14} q 2 -8 5 -10" fill="none" stroke="${c}" stroke-width="2"/>`)).join(""),
  madera: (x, y, c) => [0, 1, 2, 3, 4].map((i) => `<path d="M${x + 2} ${y + 8 + i * 12} q 20 ${i % 2 ? 6 : -6} 30 0 t 30 0" fill="none" stroke="${c}" stroke-width="2"/>`).join(""),
};
// Fila de muestras de textura con su nombre.
const muestras = (label, items, opts) => {
  const n = items.length, w = 248 / n;
  return lienzo(label, items.map(([k, nom, fondo, c], i) => {
    const cx = 6 + w * (i + 0.5), x = cx - 32, y = 48;
    return `<rect x="${x}" y="${y}" width="64" height="64" rx="8" fill="${fondo}" ${B}/><g clip-path="none">${pat[k](x, y, c)}</g>${texto(cx, 140, nom, { size: 15, max: w - 6 })}`;
  }).join(""), opts);
};

const frottage = lienzo("Técnica del frottage: una hoja bajo un papel y una cera que frota y hace aparecer la hoja", `
  <path d="M40 130 q 20 -80 70 -70 q -10 70 -70 70 z" fill="#81c784" ${B}/><path d="M40 130 L100 70" stroke="#2e7d32" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<path d="M${55 + i * 11} ${115 - i * 11} l${-6 - i} ${-10 - i}" stroke="#2e7d32" stroke-width="1.5"/>`).join("")}
  ${texto(75, 158, "1. hoja debajo", { size: 13, max: 110 })}
  <rect x="140" y="50" width="100" height="84" rx="4" fill="#fff" ${B}/>
  <path d="M152 124 q 20 -70 66 -62 q -10 64 -66 62 z" fill="none" stroke="#fb8c00" stroke-width="7" stroke-dasharray="3 2" opacity=".85"/>
  <rect x="206" y="40" width="34" height="14" rx="3" fill="#fb8c00" transform="rotate(-30 223 47)" ${B}/>
  ${texto(190, 158, "2. froto con cera", { size: 13, max: 110 })}`, { titulo: "El frottage" });

module.exports = tema({
  materia: "Educación Plástica",
  titulo: "Texturas",
  minutos: 50,
  objetivos: ["Descubrir qué es la textura de las cosas", "Distinguir suave y áspero, liso y rugoso, duro y blando", "Diferenciar texturas táctiles y texturas visuales", "Hacer texturas con la técnica del frottage", "Inventar texturas con puntos y líneas"],
  claves: ["textura", "suave", "áspero", "liso", "rugoso", "táctil", "visual", "frottage"],
  pregunta: ["Si cierras los ojos, ¿cómo sabes si tocas un peluche o una piedra?", "¡Por su <mark>textura</mark>! El peluche es suave y blandito. La piedra es dura y rugosa."],
  lectura: ["La caja de las sorpresas", `<p>Un lunes, la maestra trajo una caja cerrada con un agujero.</p><p>—Meted la mano sin mirar —dijo—. ¿Qué notáis?</p><p>Leo tocó algo suave y calentito. —¡Es lana!</p><p>Ana tocó algo frío y liso. —¡Parece un espejo!</p><p>Pablo tocó algo duro y lleno de bultos. —¡Una piña!</p><p>Después abrieron la caja. Había lana, un espejo, una piña, una esponja y un papel de lija.</p><p>—Las cosas no solo tienen color y forma —explicó la maestra—. También tienen textura.</p><p>Y todos quisieron volver a tocarlo todo.</p>`],
  bloques: [
    ["¿Qué es la textura?", `<p>La <mark>textura</mark> es cómo es la superficie de las cosas. La notamos al tocarlas.</p><p>Si pasas la mano por tu mesa, la notas <b>lisa</b>. Si tocas un osito de peluche, lo notas <b>suave</b>.</p><p>La corteza de un árbol es <b>rugosa</b>, con bultos y grietas.</p><p>Cada cosa tiene su textura. ¡Las manos son nuestros detectives de texturas!</p><p>Toca con cuidado y fíjate en lo que sientes.</p>`,
      dibujos("Tocar para descubrir texturas: mano, oso de peluche y árbol", [["mano", "toco", A], ["oso", "suave", M], ["arbol", "rugoso", V]], { titulo: "Detectives de texturas" })],
    ["Suave y áspero", `<p>Algunas cosas son <mark>suaves</mark>: da gusto tocarlas. Por ejemplo, el pelo de un gato, una pluma o una toalla.</p><p>Otras son <mark>ásperas</mark>: raspan un poco. Por ejemplo, el papel de lija, la lengua de un gato o una esponja de fregar.</p><p>Toca tu jersey y luego la suela de tu zapato. ¿Qué diferencia notas?</p><p>Las cosas suaves nos parecen cómodas y agradables. Las ásperas, más fuertes.</p>`,
      muestras("Muestra suave y peluda frente a muestra áspera con picos", [["peludo", "suave", "#fff3e0", "#bcaaa4"], ["rugoso", "áspera", "#ffe0b2", "#8d6e63"]], { titulo: "Suave o áspero" })],
    ["Liso y rugoso", `<p>Una superficie <mark>lisa</mark> no tiene bultos. La mano resbala por ella, como por un cristal, un espejo o una manzana.</p><p>Una superficie <mark>rugosa</mark> tiene bultos, arrugas o grietas. Por ejemplo, la corteza de un árbol, una piña o una nuez.</p><p>Pasa el dedo por la pizarra y luego por la pared. ¿Cuál es más lisa?</p><p>Los artistas usan las dos para que sus obras sean más interesantes.</p>`,
      muestras("Una muestra lisa y una muestra rugosa con vetas de madera", [["liso", "lisa", "#e3f2fd", ""], ["madera", "rugosa", "#d7ccc8", "#6d4c41"]], { titulo: "Liso o rugoso" })],
    ["Duro y blando", `<p>Las cosas también pueden ser <mark>duras</mark> o <mark>blandas</mark>.</p><p>Las cosas <b>duras</b> no cambian si las apretamos: una piedra, una mesa, una cuchara.</p><p>Las cosas <b>blandas</b> se hunden al apretarlas: una almohada, una esponja, la plastilina.</p><p>Aprieta con el dedo una goma de borrar y luego tu cojín. ¿Cuál se hunde más?</p><p>Las cosas blandas suelen recuperar su forma al soltarlas. ¡Mira cómo vuelve la esponja!</p>`,
      dibujos("Cosas duras y blandas: mesa dura, cama blanda", [["mesa", "dura", G], ["cama", "blanda", N], ["mano", "aprieto", A]], { titulo: "¿Se hunde?" })],
    ["Texturas táctiles", `<p>Las texturas que notamos al tocar se llaman <mark>texturas táctiles</mark>.</p><p>Para descubrirlas usamos la piel, sobre todo las yemas de los dedos.</p><p>Podemos hacer un cuadro con texturas táctiles: pegamos algodón, arena, lana, papel de burbujas o lentejas.</p><p>Así el cuadro se puede mirar ¡y también tocar!</p><p>Las personas ciegas conocen muchas cosas por su textura. Sus dedos son muy sensibles.</p>`,
      dibujos("Materiales para un cuadro de texturas: lana, arena y algodón", [["abrigo", "lana", G], ["isla", "arena", M], ["nube", "algodón", A]], { titulo: "Para tocar" }),
      vid("XMzrMXzRYUk", "Las texturas (canción)", "Contentus UFM", 279817)],
    ["Texturas visuales", `<p>Algunas texturas no se tocan: solo se <b>ven</b>. Son <mark>texturas visuales</mark>.</p><p>Si dibujas rayas, puntos o cuadros en un papel, parece que tiene textura. Pero al tocarlo, ¡el papel está liso!</p><p>Los dibujantes hacen texturas visuales para que el pelo de un gato parezca suave o un tronco parezca rugoso.</p><p>Las telas de tu ropa también tienen dibujos: rayas, cuadros o lunares.</p>`,
      muestras("Texturas visuales dibujadas: rayas, puntos y cuadros", [["rayas", "rayas", "#fff", "#1e88e5"], ["puntos", "puntos", "#fff", "#e53935"], ["cuadros", "cuadros", "#fff", "#43a047"]], { titulo: "Se ven, no se tocan" }),
      vid("yeaBWcAA-WM", "¿Qué son las texturas visuales? Técnica frottage", "Gisela Duarte", 110842)],
    ["La técnica del frottage", `<p>El <mark>frottage</mark> es una técnica para copiar texturas. Su nombre viene del francés y significa «frotar».</p><p>Pon una hoja de árbol, una moneda o una rejilla debajo de un papel.</p><p>Después frota encima con una cera tumbada. ¡Poco a poco aparece la textura!</p><p>Puedes hacerlo con muchas cosas: el suelo, la corteza de un árbol o una suela de zapato.</p><p>Con varios frottages de colores puedes hacer un cuadro precioso.</p>`,
      frottage],
    ["Texturas en la naturaleza", `<p>La <mark>naturaleza</mark> está llena de texturas.</p><p>Las plumas de los pájaros son suaves. Las conchas del caracol, duras y lisas. La piel de la rana es húmeda y resbaladiza.</p><p>Los troncos son rugosos. Las piedras del río son lisas porque el agua las ha pulido.</p><p>Los animales usan su textura para protegerse. ¡El erizo tiene pinchos!</p><p>Sal al patio y busca tres texturas distintas en la naturaleza.</p>`,
      dibujos("Texturas en la naturaleza: pájaro con plumas suaves, caracol de concha dura y rana resbaladiza", [["pajaro", "plumas", A], ["caracol", "concha", M], ["rana", "resbala", V]], { titulo: "Busca en la naturaleza" })],
    ["Inventamos texturas", `<p>Con <mark>puntos y líneas</mark> podemos inventar texturas visuales.</p><p>Muchas rayas juntas parecen hierba. Muchos puntitos parecen arena.</p><p>Las líneas onduladas parecen agua. Las curvitas cortas parecen el pelo de un animal.</p><p>Elige un animal, dibuja su contorno y rellénalo con una textura inventada.</p><p>Un pez con escamas, un oso peludo, una tortuga con cuadros. ¡No hay límites!</p>`,
      muestras("Texturas inventadas: ondas de agua, pelo y vetas de madera", [["ondas", "agua", "#e3f2fd", "#1e88e5"], ["peludo", "pelo", "#fff3e0", "#8d6e63"], ["madera", "madera", "#ffe0b2", "#8d6e63"]], { titulo: "Con puntos y líneas" })],
    ["¿Para qué sirven?", `<p>Las texturas son muy <mark>útiles</mark>.</p><p>Los suelos de las piscinas son rugosos para que no resbalemos.</p><p>Las toallas son suaves y absorben el agua. Las suelas de las zapatillas tienen dibujos para agarrarse al suelo.</p><p>Las personas ciegas leen con los dedos, tocando puntitos en relieve. Se llama <b>braille</b>.</p><p>En el arte, las texturas hacen que las obras sean más ricas y den ganas de tocarlas.</p>`,
      dibujos("Texturas útiles: zapato que no resbala, libro en braille y toalla suave", [["zapato", "no resbala", A], ["libro", "braille", R], ["mano", "leo tocando", V]], { titulo: "Texturas útiles" })],
    ["Juego: la caja de las sorpresas", `<p>Vamos a jugar a la <mark>caja de las sorpresas</mark>, como en la lectura.</p><p>Dentro de una caja ponemos objetos con texturas distintas: lana, una piedra, una esponja, papel de aluminio.</p><p>Con los ojos cerrados, mete la mano y toca un objeto.</p><p>Describe su textura: ¿es suave o áspero? ¿Liso o rugoso? ¿Duro o blando?</p><p>Tus compañeros intentan adivinar qué es. ¡Después, cambiamos de turno!</p>`,
      dibujos("Una caja con un agujero para meter la mano y adivinar", [["mano", "toco", A], ["interrogacion", "¿qué es?", R], ["boca", "lo describo", V]], { titulo: "La caja de las sorpresas" })],
    ["Repaso: lo que ya sé", `<p>La <mark>textura</mark> es cómo es la superficie de las cosas.</p><p>Puede ser <b>suave</b> o <b>áspera</b>, <b>lisa</b> o <b>rugosa</b>, <b>dura</b> o <b>blanda</b>.</p><p>Las texturas <b>táctiles</b> se tocan. Las <b>visuales</b> se ven, dibujadas con puntos y líneas.</p><p>Con el <b>frottage</b> copiamos texturas frotando una cera.</p><p>¡Ahora ya miras y tocas el mundo como un artista!</p>`,
      lista("Repaso de las texturas", [["Suave o áspero", A], ["Liso o rugoso", V], ["Táctil o visual", R], ["Frottage: frotar con cera", N]], { titulo: "Ya sé…" })],
  ],
  figura: ["Texturas para mirar y tocar", muestras("Cuatro texturas: lisa, rugosa, peluda y a rayas", [["liso", "lisa", "#e3f2fd", ""], ["rugoso", "rugosa", "#ffe0b2", "#8d6e63"], ["peludo", "peluda", "#fff3e0", "#a1887f"]], { titulo: "Texturas" })],
  video: { ...vid("fl1TKE1UMu4", "Texturas táctiles y texturas visuales", "Juan Marcel Francia", 153017), busqueda: "texturas para niños plástica" },
  ejemplos: [
    ["¿Qué textura tiene una piña?", ["La toco con cuidado.", "Noto bultos y picos.", "No es suave ni lisa."], "rugosa y dura."],
    ["¿Cómo copio la textura de una moneda?", ["Pongo la moneda debajo de un papel.", "Tumbo una cera.", "Froto encima."], "frottage: aparece la moneda."],
    ["Dibuja un oso que parezca peludo.", ["Dibujo el contorno del oso.", "Lo relleno de curvitas cortas.", "Así parece pelo."], "una textura visual de pelo."],
    ["¿Por qué el suelo de la piscina es rugoso?", ["El agua hace resbalar.", "Lo rugoso agarra.", "Así no nos caemos."], "para no resbalar."],
  ],
  errores: [
    "Pensar que la textura es el color: es cómo se nota la superficie.",
    "Creer que un dibujo de rayas se nota al tocar: es una textura visual.",
    "Frotar con la punta de la cera: en el frottage la cera va tumbada.",
    "Confundir liso y blando: un espejo es liso pero duro.",
  ],
  basico: [
    ["Toca tu mesa. ¿Es lisa o rugosa?", "Lisa."],
    ["Nombra una cosa suave.", "Por ejemplo: un peluche, una pluma."],
    ["Nombra una cosa áspera.", "Por ejemplo: el papel de lija."],
    ["Nombra una cosa dura y una blanda.", "Por ejemplo: piedra y almohada."],
    ["¿Con qué parte del cuerpo notamos las texturas?", "Con la piel, sobre todo los dedos."],
    ["Toca la corteza de un árbol. ¿Cómo es?", "Rugosa."],
    ["Dibuja una muestra de rayas.", "Respuesta libre."],
    ["¿Un espejo es liso o rugoso?", "Liso."],
  ],
  medio: [
    ["¿Qué diferencia hay entre textura táctil y visual?", "La táctil se toca; la visual solo se ve."],
    ["Haz un frottage de una hoja de árbol.", "Hoja debajo del papel y frotar con cera tumbada."],
    ["Dibuja arena con puntitos.", "Muchos puntos juntos."],
    ["Dibuja agua con líneas.", "Líneas onduladas."],
    ["¿Qué textura tienen las plumas?", "Suave."],
    ["¿Para qué sirven los dibujos de las suelas?", "Para no resbalar."],
    ["Describe la textura de tu jersey.", "Respuesta libre."],
    ["¿Qué es el braille?", "Puntitos en relieve que se leen tocando."],
    ["Busca tres texturas en el patio.", "Respuesta libre."],
  ],
  avanzado: [
    ["Haz un cuadro de texturas táctiles con 4 materiales.", "Cuadro con materiales pegados."],
    ["Rellena un animal con una textura inventada.", "Dibujo libre."],
    ["Haz un frottage con 3 objetos distintos y compáralos.", "Respuesta libre."],
    ["Juega a la caja de las sorpresas y describe lo que tocas.", "Descripción con suave/áspero, liso/rugoso, duro/blando."],
    ["Explica por qué el erizo tiene pinchos.", "Para protegerse."],
  ],
  quiz: [
    ["La textura es…", ["cómo es la superficie", "el color", "el tamaño"], 0, "Cómo se nota la superficie."],
    ["Un peluche es…", ["suave", "áspero", "rugoso"], 0, "Suave."],
    ["El papel de lija es…", ["áspero", "suave", "blando"], 0, "Áspero."],
    ["Un cristal es…", ["liso", "rugoso", "peludo"], 0, "Liso."],
    ["La corteza de un árbol es…", ["rugosa", "lisa", "blanda"], 0, "Rugosa."],
    ["Una almohada es…", ["blanda", "dura", "áspera"], 0, "Blanda."],
    ["Una textura que solo se ve es…", ["visual", "táctil", "dura"], 0, "Visual."],
    ["El frottage se hace…", ["frotando con cera", "con agua", "con tijeras"], 0, "Frotando con cera."],
    ["Muchos puntitos parecen…", ["arena", "agua", "fuego"], 0, "Arena."],
    ["Las líneas onduladas parecen…", ["agua", "piedra", "lija"], 0, "Agua."],
    ["El braille se lee con…", ["los dedos", "las orejas", "la nariz"], 0, "Los dedos."],
    ["Una piedra es…", ["dura", "blanda", "peluda"], 0, "Dura."],
  ],
  examen: [
    ["¿Con qué notamos las texturas?", ["con los dedos", "con los ojos cerrados solo", "con el pelo"], 0, "Con los dedos y la piel."],
    ["Una pluma es…", ["suave", "áspera", "dura"], 0, "Suave."],
    ["Las rayas dibujadas son una textura…", ["visual", "táctil", "blanda"], 0, "Visual."],
    ["Para el frottage la cera va…", ["tumbada", "de punta", "mojada"], 0, "Tumbada."],
    ["Una piña es…", ["rugosa", "lisa", "blanda"], 0, "Rugosa."],
    ["El suelo de la piscina es rugoso para…", ["no resbalar", "que brille", "nadar"], 0, "No resbalar."],
  ],
  feynman: ["Qué es la textura", "La diferencia entre textura táctil y visual", "Cómo se hace un frottage"],
  mapa: ["TEXTURAS", [["Suave / áspero", "peluche · lija", A], ["Liso / rugoso", "cristal · corteza", V], ["Táctil / visual", "se toca · se ve", R], ["Frottage", "frotar con cera", N]], 230],
  tarjetas: [
    ["Textura", "Cómo es la superficie"],
    ["Suave", "Como un peluche"],
    ["Áspero", "Como el papel de lija"],
    ["Liso", "Como un cristal"],
    ["Rugoso", "Como la corteza"],
    ["Blando", "Se hunde al apretar"],
    ["Textura táctil", "Se nota al tocar"],
    ["Textura visual", "Solo se ve"],
    ["Frottage", "Frotar con cera sobre un papel"],
    ["Braille", "Leer tocando puntitos"],
  ],
  glosario: [
    ["Textura", "Cómo es la superficie de una cosa."],
    ["Suave", "Agradable de tocar, no raspa."],
    ["Áspero", "Que raspa al tocarlo."],
    ["Liso", "Sin bultos: la mano resbala."],
    ["Rugoso", "Con bultos, arrugas o grietas."],
    ["Táctil", "Que se nota con el tacto."],
    ["Visual", "Que se ve con los ojos."],
    ["Frottage", "Técnica de frotar con cera para copiar texturas."],
  ],
  situacion: ["El libro de las texturas", "Vamos a hacer un libro de texturas para la biblioteca de clase, para mirar y tocar.", ["Buscamos materiales con texturas distintas en casa y en el patio.", "Pegamos cada material en una página y escribimos su textura.", "Añadimos páginas de frottage y de texturas dibujadas.", "Prestamos el libro a la clase de Infantil."], "un libro de texturas para tocar.", ["Clasifica bien las texturas.", "Hace frottage correctamente.", "Distingue texturas táctiles y visuales."]],
  familias: [
    "Preparad una caja de sorpresas con objetos de casa y adivinad con los ojos cerrados.",
    "Haced frottages de monedas, hojas o llaves.",
    "Al pasear, tocad troncos, piedras y hojas y describid su textura.",
    "Buscad en la ropa texturas visuales: rayas, cuadros, lunares.",
  ],
  saberes: "Elementos del lenguaje plástico: la textura. Texturas táctiles y visuales, cualidades de los materiales (suave, áspero, liso, rugoso, duro, blando) y técnica del frottage",
  ideas: ["Caja de sorpresas para explorar con el tacto.", "Frottage en el patio con cortezas y suelos.", "Libro de texturas colectivo para Infantil.", "Rellenar siluetas de animales con texturas visuales."],
});
