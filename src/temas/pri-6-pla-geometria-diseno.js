// Educación Plástica 6º de Primaria: geometría y diseño. Dibujos propios en SVG.
const { tema, L, svg, tx, pol, panal, AZ, RO, VE, NA, AM, MO } = require("./_pri6d");

const M = "Educación Plástica";

// Mariposa simétrica con su eje.
const simetria = svg("Mariposa simétrica con su eje de simetría vertical", `
  <path d="M130 30 V 160" stroke="${RO}" stroke-width="2" stroke-dasharray="6 4"/>
  ${[1, -1].map((k) => `<g transform="translate(130 0) scale(${k} 1)"><path d="M4 90 C 30 30 90 20 92 60 C 94 90 50 96 4 92 Z" fill="${AZ}" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.5"/><path d="M4 96 C 40 100 80 110 64 140 C 50 160 20 130 4 104 Z" fill="${NA}" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.5"/><circle cx="56" cy="62" r="9" fill="${AM}"/></g>`).join("")}
  <ellipse cx="130" cy="96" rx="5" ry="36" fill="var(--ink)"/>${tx(130, 22, "eje de simetría", { s: 11, c: RO })}`);

// Pasos para dibujar un hexágono con compás.
const hexagono = svg("Hexágono regular dibujado con compás: el radio cabe seis veces en la circunferencia", `
  <circle cx="100" cy="92" r="60" fill="none" stroke="var(--muted)" stroke-width="1.5"/>
  ${[...Array(6)].map((_, i) => { const a = (i * 60 - 90) * Math.PI / 180, x = 100 + 60 * Math.cos(a), y = 92 + 60 * Math.sin(a); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" fill="${RO}"/>`; }).join("")}
  ${pol(100, 92, 60, 6, AZ, -90, { op: 0.2, st: AZ, sw: 2.5 })}<path d="M100 92 L 100 32" stroke="${RO}" stroke-width="2"/>${tx(108, 64, "r", { s: 12, c: RO, a: "start" })}
  ${tx(214, 70, "6 veces", { s: 12, c: RO })}${tx(214, 88, "el radio", { s: 12, c: RO })}${tx(214, 118, "hexágono", { s: 12, c: AZ })}`);

// Logotipo de ejemplo hecho con formas geométricas.
const logo = svg("Logotipo inventado hecho con un círculo, un triángulo y una letra", `
  <circle cx="90" cy="80" r="44" fill="${VE}"/><path d="M62 104 L 90 50 L 118 104 Z" fill="var(--paper)"/><circle cx="104" cy="62" r="8" fill="${AM}"/>
  ${tx(90, 152, "MONTE", { s: 18, d: true, c: VE })}
  <path d="M160 40 h 80 M160 70 h 80 M160 100 h 80" stroke="var(--line)" stroke-width="2"/>${tx(200, 34, "sencillo", { s: 11 })}${tx(200, 64, "reconocible", { s: 11 })}${tx(200, 94, "pocos colores", { s: 11 })}${tx(200, 124, "funciona pequeño", { s: 11 })}`);

module.exports = tema({
  materia: M,
  titulo: "Geometría y diseño",
  objetivos: ["Trazar formas geométricas con regla, escuadra y compás", "Reconocer y crear simetrías, ritmos y módulos", "Diseñar mosaicos y redes geométricas", "Aplicar la geometría al diseño de logotipos y objetos"],
  claves: ["geometría", "regla", "escuadra y cartabón", "compás", "polígono regular", "simetría", "eje", "módulo", "red modular", "mosaico", "ritmo", "logotipo", "diseño"],
  pregunta: [
    "¿Qué tienen en común un panal de abejas, el suelo de la Alhambra y el logotipo de tu marca de zapatillas favorita?",
    "Todos usan la <mark>geometría</mark>: formas regulares que se repiten o se combinan con orden. Las abejas hacen hexágonos que encajan sin dejar huecos; los artistas andalusíes crearon mosaicos con estrellas y polígonos; y los diseñadores usan círculos, triángulos y líneas para crear logotipos fáciles de recordar.",
  ],
  bloques: [
    ["Geometría en el arte y en la vida", `<p>La <mark>geometría</mark> estudia las formas, las medidas y las posiciones. En el arte nos ayuda a crear composiciones ordenadas y equilibradas. La encontramos en la naturaleza (panales, copos de nieve, girasoles), en la arquitectura (arcos, ventanas, cúpulas) y en el diseño (señales, logotipos, envases).</p><p>Algunos artistas del siglo XX, como Kandinsky o Mondrian, pintaron cuadros solo con líneas, círculos y rectángulos de colores. Y en el arte islámico, los mosaicos geométricos llegaron a ser una auténtica maravilla matemática.</p>`,
      svg("Geometría en la naturaleza: un panal de hexágonos", `${panal(40, 36, 7, 5, 18, [AM, NA, AM])}${tx(130, 172, "panal: hexágonos que encajan", { s: 11, c: "var(--muted)" })}`)],
    ["Los instrumentos de dibujo técnico", `<p>Para trazar con precisión usamos la <mark>regla</mark> (líneas rectas y medidas), la <mark>escuadra</mark> y el <mark>cartabón</mark> (dos plantillas triangulares para trazar paralelas, perpendiculares y ángulos de 30°, 45°, 60° y 90°) y el <mark>compás</mark> (circunferencias y arcos).</p><p>Consejos: usa un lápiz duro y bien afilado (2H o HB), traza líneas finas y luego repasa las definitivas. Para hacer paralelas, apoya la escuadra en el cartabón y deslízala. Y cuida la punta del compás: ¡pincha!</p>`,
      L.filas("Instrumentos de dibujo técnico", [["regla", "rectas y medidas", AZ], ["escuadra", "ángulos de 45° y 90°", VE], ["cartabón", "ángulos de 30°, 60° y 90°", NA], ["compás", "circunferencias y arcos", RO]])],
    ["Polígonos regulares", `<p>Un <mark>polígono regular</mark> tiene todos sus lados y ángulos iguales: triángulo equilátero, cuadrado, pentágono, hexágono, octógono… Se pueden dibujar dentro de una circunferencia.</p><p>El <b>hexágono</b> es el más fácil con compás: dibuja una circunferencia y, sin cambiar la abertura, apoya el compás en un punto y marca arcos sobre ella. ¡El radio cabe exactamente seis veces! Une los seis puntos y tendrás el hexágono. Si unes los puntos de uno en uno saltando uno, sale un triángulo equilátero.</p>`,
      hexagono],
    ["La simetría", `<p>Una figura tiene <mark>simetría</mark> cuando una línea, el <b>eje de simetría</b>, la divide en dos mitades iguales, como si una fuera el reflejo de la otra en un espejo. Las mariposas, muchas hojas y nuestra cara son casi simétricas.</p><p>Hay figuras con varios ejes: un cuadrado tiene cuatro y un círculo, infinitos. La simetría transmite <b>equilibrio</b> y orden, por eso la usan los edificios importantes y muchos logotipos. Truco: dobla un papel, dibuja media figura pegada al doblez, recórtala y ábrela.</p>`,
      simetria, "pl7b"],
    ["Módulos y redes", `<p>Un <mark>módulo</mark> es una forma que se repite para crear una composición mayor. Para repetirla con orden usamos una <mark>red modular</mark>: una cuadrícula de cuadrados, triángulos o hexágonos que sirve de guía.</p><p>Moviendo el módulo podemos crear muchos efectos: <b>trasladarlo</b> (repetirlo igual), <b>girarlo</b>, darle la vuelta como en un espejo o cambiar sus colores. Así funcionan los azulejos de las cocinas, los estampados de las telas y el papel de regalo.</p>`,
      svg("Un mismo módulo girado en una red de cuadrados crea un diseño", `${[...Array(16)].map((_, i) => { const x = 58 + (i % 4) * 36, y = 8 + Math.floor(i / 4) * 36, r = (i % 4 + Math.floor(i / 4)) % 4 * 90; return `<g transform="translate(${x + 18} ${y + 18}) rotate(${r})"><rect x="-18" y="-18" width="36" height="36" fill="var(--card)" stroke="var(--line)"/><path d="M-18 -18 L 18 -18 L -18 18 Z" fill="${[AZ, NA][i % 2]}" fill-opacity=".8"/><circle cx="9" cy="9" r="4.5" fill="${RO}"/></g>`; }).join("")}${tx(130, 172, "un módulo, cuatro giros", { s: 10.5, c: "var(--muted)" })}`)],
    ["Mosaicos", `<p>Un <mark>mosaico</mark> o teselado cubre una superficie con piezas que encajan sin dejar huecos ni montarse. Solo tres polígonos regulares lo consiguen solos: el <b>triángulo equilátero</b>, el <b>cuadrado</b> y el <b>hexágono</b>. Combinando varios polígonos se obtienen diseños más complejos.</p><p>Los romanos hacían mosaicos con pequeñas piedras de colores llamadas <b>teselas</b>. En la Alhambra de Granada hay mosaicos de azulejos con estrellas y lazos que inspiraron al artista M. C. Escher, quien luego creó mosaicos de peces, pájaros y lagartos que encajan como un puzle.</p>`,
      svg("Tres mosaicos regulares: triángulos, cuadrados y hexágonos", `${[0, 1, 2, 3, 4].map((j) => [0, 1, 2, 3, 4, 5].map((i) => { const x = 14 + i * 12, yt = 34 + j * 21, yb = yt + 21, up = (i + j) % 2 === 0; return `<path d="M${x} ${up ? yb : yt} L ${x + 12} ${up ? yt : yb} L ${x + 24} ${up ? yb : yt} Z" fill="${[AZ, NA][(i + j) % 2]}" fill-opacity=".75" stroke="var(--paper)"/>`; }).join("")).join("")}${[...Array(15)].map((_, i) => `<rect x="${106 + (i % 3) * 18}" y="${34 + Math.floor(i / 3) * 21}" width="18" height="21" fill="${[VE, AM][(i % 3 + Math.floor(i / 3)) % 2]}" fill-opacity=".8" stroke="var(--paper)"/>`).join("")}${panal(184, 44, 3, 5, 12, [RO, MO])}${tx(50, 160, "triángulos", { s: 10 })}${tx(133, 160, "cuadrados", { s: 10 })}${tx(212, 160, "hexágonos", { s: 10 })}`), "pl7c"],
    ["El ritmo en el diseño", `<p>Cuando un elemento se repite con una cierta regularidad, aparece el <mark>ritmo</mark>, como en la música. Puede ser un ritmo <b>uniforme</b> (siempre igual: círculo, círculo, círculo), <b>alterno</b> (círculo, cuadrado, círculo, cuadrado) o <b>creciente</b> (cada vez más grande o más oscuro).</p><p>Los ritmos guían la mirada y crean sensación de movimiento: piensa en las columnas de un claustro, las rayas de un paso de cebra o las cenefas de una alfombra. Un buen diseñador combina repetición y variación para que no resulte aburrido.</p>`,
      svg("Tres ritmos: uniforme, alterno y creciente", `${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${40 + i * 34}" cy="34" r="10" fill="${AZ}"/>`).join("")}${[0, 1, 2, 3, 4, 5].map((i) => i % 2 ? `<rect x="${30 + i * 34}" y="76" width="20" height="20" fill="${RO}"/>` : `<circle cx="${40 + i * 34}" cy="86" r="10" fill="${AZ}"/>`).join("")}${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${40 + i * 34}" cy="140" r="${4 + i * 2.6}" fill="${VE}"/>`).join("")}${tx(130, 16, "uniforme", { s: 10, c: "var(--muted)" })}${tx(130, 66, "alterno", { s: 10, c: "var(--muted)" })}${tx(130, 114, "creciente", { s: 10, c: "var(--muted)" })}`)],
    ["Diseñar un logotipo", `<p>El <mark>diseño gráfico</mark> crea imágenes con una función: informar, vender, orientar. Un <b>logotipo</b> es el símbolo de una marca, un club o un colegio. Un buen logotipo es <b>sencillo</b>, <b>reconocible</b>, usa <b>pocos colores</b> y se entiende aunque sea muy pequeño.</p><p>Muchos se construyen con formas geométricas: un círculo transmite unión, un triángulo, dirección o energía, un cuadrado, estabilidad. Antes de llegar al definitivo, los diseñadores hacen decenas de bocetos rápidos. El <b>diseño industrial</b>, por su parte, crea objetos: sillas, lámparas, botellas…</p>`,
      logo],
    ["Taller: mi mosaico y mi logotipo", `<p><b>Mosaico</b>: en una cuadrícula de 2 cm, diseña un módulo en un cuadrado (combinando triángulos, arcos con compás y una línea recta). Repítelo en toda la hoja girándolo de distintas formas y colorea con solo tres colores. Observa qué nuevas figuras aparecen al juntarse los módulos.</p><p><b>Logotipo</b>: inventa un logo para tu clase o un equipo. Haz al menos cinco bocetos pequeños, elige el mejor y pásalo a limpio con regla y compás. Comprueba si se entiende reducido al tamaño de un sello.</p>`,
      L.filas("Pasos del taller", [["1", "Diseña un módulo en un cuadrado.", AZ], ["2", "Repítelo girándolo en la red.", VE], ["3", "Colorea con tres colores.", NA], ["4", "Logo: 5 bocetos y uno final.", RO]], "Paso a paso")],
  ],
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    ["¿Cuántos ejes de simetría tiene un cuadrado?", ["Dos ejes: uno vertical y otro horizontal por el centro.", "Y dos más: las diagonales."], "Cuatro ejes."],
    ["¿Por qué las baldosas suelen ser cuadradas o hexagonales?", ["Porque esos polígonos encajan sin dejar huecos.", "Forman mosaicos regulares."], "Porque el cuadrado y el hexágono teselan el plano sin huecos."],
    ["Dibuja un triángulo equilátero con compás.", ["Haz el hexágono dentro de una circunferencia.", "Une sus vértices saltando uno sí y otro no."], "Se obtiene uniendo vértices alternos del hexágono."],
  ],
  errores: [
    "Usar un lápiz blando y romo: las líneas salen gruesas e imprecisas.",
    "Cambiar la abertura del compás mientras se dibuja el hexágono.",
    "Creer que cualquier polígono regular sirve para un mosaico (el pentágono no encaja solo).",
    "Hacer un logotipo con demasiados detalles: no se entiende en pequeño.",
    "Colorear un mosaico sin plan: se pierde el ritmo.",
  ],
  ejercicios: [
    ["¿Para qué sirven la escuadra y el cartabón?", "Para trazar paralelas, perpendiculares y ángulos de 30°, 45°, 60° y 90°."],
    ["¿Qué es un polígono regular?", "Un polígono con todos los lados y ángulos iguales."],
    ["¿Cuántas veces cabe el radio en la circunferencia al dibujar un hexágono?", "Seis veces."],
    ["¿Qué es un eje de simetría?", "Una línea que divide una figura en dos mitades iguales como en un espejo."],
    ["¿Cuántos ejes de simetría tiene un círculo?", "Infinitos."],
    ["¿Qué es un módulo?", "Una forma que se repite para crear una composición."],
    ["¿Qué tres polígonos regulares forman mosaicos por sí solos?", "Triángulo equilátero, cuadrado y hexágono."],
    ["¿Qué nombre tenían las piezas de los mosaicos romanos?", "Teselas."],
    ["Escribe tres características de un buen logotipo.", "Sencillo, reconocible, pocos colores, funciona en pequeño."],
    ["Dibuja una cenefa con ritmo alterno.", "Respuesta gráfica: por ejemplo, círculo, triángulo, círculo, triángulo…"],
  ],
  figura: ["Geometría y diseño", L.columnas("Geometría y diseño", [["regla, compás", "TRAZADOS", ["polígonos", "regulares"], AZ], ["espejo", "SIMETRÍA", ["eje", "equilibrio"], VE], ["repetición", "MÓDULOS", ["redes, ritmos", "y mosaicos"], NA], ["función", "DISEÑO", ["logotipos", "y objetos"], RO]])],
  video: "pl7v",
  quiz: [
    ["El instrumento para trazar circunferencias es el…", ["compás", "cartabón", "transportador"], "Compás."],
    ["La escuadra tiene un ángulo de…", ["45°", "60°", "30° solamente"], "Escuadra: 45°, 45°, 90°."],
    ["Un polígono regular tiene…", ["lados y ángulos iguales", "lados curvos", "un solo eje"], "Regular."],
    ["Con el radio en la circunferencia se dibuja fácilmente un…", ["hexágono", "pentágono", "octógono"], "Cabe 6 veces."],
    ["Una figura simétrica…", ["tiene dos mitades iguales como en un espejo", "no tiene ejes", "es siempre un círculo"], "Simetría."],
    ["Una forma que se repite en un diseño es un…", ["módulo", "eje", "radio"], "Módulo."],
    ["¿Qué polígono NO forma un mosaico por sí solo?", ["pentágono regular", "cuadrado", "hexágono"], "Deja huecos."],
    ["Los mosaicos de la Alhambra inspiraron a…", ["Escher", "Velázquez", "Sorolla"], "Teselados de animales."],
    ["Círculo, cuadrado, círculo, cuadrado es un ritmo…", ["alterno", "uniforme", "creciente"], "Alterna dos elementos."],
    ["Un buen logotipo debe ser…", ["sencillo y reconocible", "muy detallado", "de muchos colores"], "Funciona en pequeño."],
  ],
  examen: [
    ["El cartabón tiene ángulos de…", ["30°, 60° y 90°", "45°, 45° y 90°", "60°, 60° y 60°"], "Cartabón."],
    ["Un cuadrado tiene ___ ejes de simetría.", ["4", "2", "1"], "Dos medianas y dos diagonales."],
    ["Las piezas de un mosaico romano se llaman…", ["teselas", "módulos", "píxeles"], "Teselas."],
    ["Un ritmo que va de pequeño a grande es…", ["creciente", "alterno", "uniforme"], "Crece."],
  ],
  feynman: ["Para qué sirve cada instrumento de dibujo técnico", "Qué es un polígono regular y cómo se traza un hexágono", "Qué es la simetría y qué son los módulos y mosaicos", "Cómo se diseña un buen logotipo"],
  mapa: ["GEOMETRÍA Y DISEÑO", "var(--bac)", [["Trazados", "regla · escuadra · compás", AZ], ["Simetría", "eje · espejo · equilibrio", VE], ["Módulos", "redes · mosaicos · ritmo", NA], ["Diseño", "logotipos · objetos", RO]], 240],
  tarjetas: [
    ["Compás", "Traza circunferencias y arcos."],
    ["Escuadra y cartabón", "Paralelas, perpendiculares y ángulos."],
    ["Polígono regular", "Lados y ángulos iguales."],
    ["Hexágono", "El radio cabe 6 veces en la circunferencia."],
    ["Eje de simetría", "Divide la figura en dos mitades iguales."],
    ["Módulo", "Forma que se repite."],
    ["Mosaico", "Piezas que cubren sin huecos."],
    ["Logotipo", "Símbolo sencillo de una marca o grupo."],
  ],
  familias: ["Buscad en casa y por la calle simetrías, mosaicos y logotipos geométricos y haced fotos.", "Diseñad juntos un logotipo para la familia con formas geométricas."],
  saberes: "Geometría plana aplicada: trazados con instrumentos, polígonos regulares, simetría, módulos, redes, mosaicos, ritmo; diseño gráfico (Educación Plástica y Visual)",
  ideas: ["Mosaico colectivo de la clase con módulos individuales.", "Concurso de logotipos para una actividad del colegio.", "Visita virtual a la Alhambra para buscar polígonos y estrellas."],
  fuentes: [["Patronato de la Alhambra y Generalife", "https://www.alhambra-patronato.es/"], ["Real Academia Española: simetría", "https://dle.rae.es/simetr%C3%ADa"]],
});
