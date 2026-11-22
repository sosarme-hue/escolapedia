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

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Reconocer la proporción áurea y la sucesión de Fibonacci en la naturaleza y el arte", "Distinguir tipos de simetría: axial, radial y de traslación", "Diseñar pictogramas claros y universales", "Conocer las figuras imposibles y la geometría del arte andalusí"],
  lectura: { titulo: "El misterio del girasol", html: `<p>En la huerta del colegio, los girasoles habían crecido más que la profesora. Valeria se acercó a uno con una lupa y empezó a contar las semillas.</p><p>—¡Están colocadas en espirales! —gritó—. Unas giran hacia un lado y otras hacia el otro.</p><p>El profesor de Matemáticas, que pasaba por allí, se agachó a mirar.</p><p>—Cuenta cuántas espirales hay en cada sentido.</p><p>Valeria y Óscar tardaron casi media hora, porque se perdían todo el rato. Al final, apuntaron: 34 en un sentido y 55 en el otro.</p><p>—Ahora escribid esta serie —dijo el profesor—: 1, 1, 2, 3, 5, 8… Cada número es la suma de los dos anteriores.</p><p>Siguieron sumando: 13, 21, 34, 55. Valeria se quedó con la boca abierta.</p><p>—¡Nuestros números están en la serie!</p><p>—Es la sucesión de Fibonacci —sonrió el profesor—. Aparece en las piñas, en las margaritas y en muchas conchas. La naturaleza es una gran matemática.</p><p>Esa tarde, en Plástica, la clase dibujó espirales con compás. Y Óscar se fue a casa a contar las escamas de una piña.</p>` },
  tras: {
    "Polígonos regulares": [
      ["La proporción áurea y la espiral", `<p>Hay una proporción que aparece tantas veces en la naturaleza y el arte que la llamaron <mark>proporción áurea</mark> o número de oro. Su valor es aproximadamente <b>1,618</b> y se representa con la letra griega <b>φ</b> (fi).</p><p>Un <b>rectángulo áureo</b> es aquel en el que el lado largo mide 1,618 veces el lado corto. Si le quitas un cuadrado, ¡el rectángulo que queda vuelve a ser áureo! Repitiendo esto y uniendo las esquinas con arcos de circunferencia, se dibuja una bonita <b>espiral</b>.</p><p>Esta proporción está relacionada con la <mark>sucesión de Fibonacci</mark>: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55… en la que cada número es la suma de los dos anteriores. Si divides un número entre el anterior (55 ÷ 34, por ejemplo), el resultado se acerca cada vez más a 1,618.</p><p>La encontramos en la naturaleza: en las espirales de las semillas del girasol, en las escamas de las piñas, en la colocación de las hojas en algunos tallos y en conchas como la del nautilus.</p><p>Muchos artistas y arquitectos la han usado para buscar armonía. El arquitecto <b>Le Corbusier</b> creó un sistema de medidas basado en ella, el Modulor. Aunque se dice que también la usaron los griegos en el Partenón o Leonardo da Vinci, los expertos no se ponen de acuerdo.</p>`,
        L6.filas("Número de oro", [["valor", "≈ 1,618 (φ)", cNA], ["Fibonacci", "1, 1, 2, 3, 5, 8…", cAZ], ["naturaleza", "girasol, piña", cVE], ["arte", "Le Corbusier", cMO]]), ["B6ztvqvZTsk", "Qué es la serie de Fibonacci y qué tiene que ver con el número áureo | BBC Mundo", "BBC News Mundo", 2658570]],
    ],
    "La simetría": [
      ["Tipos de simetría", `<p>La simetría que ya conoces, con un eje que divide la figura en dos mitades como un espejo, se llama <mark>simetría axial</mark> o bilateral. Pero hay otras:</p><ul><li><b>Simetría radial</b> (o central): las partes se repiten <b>alrededor de un centro</b>, como los radios de una rueda. Una estrella de mar tiene cinco brazos iguales; una margarita, muchos pétalos. En el arte la vemos en los <b>rosetones</b> de las catedrales góticas o en los <b>mandalas</b>. Si giras la figura un poco, coincide consigo misma.</li><li><b>Simetría de traslación</b>: un motivo se repite <b>desplazándose</b> en línea recta, como las huellas de unos pasos, los dibujos de una cenefa o el estampado de una tela.</li><li><b>Asimetría</b>: cuando no hay simetría. No es un defecto: muchas composiciones son asimétricas pero <b>equilibradas</b>, porque un elemento grande a un lado se compensa con varios pequeños al otro, como en una balanza.</li></ul><p>Un juguete perfecto para explorar la simetría es el <b>caleidoscopio</b>, inventado en 1816 por el escocés David Brewster: con espejos colocados en ángulo, unos pocos cristalitos de colores se multiplican y forman dibujos radiales que cambian al girarlo.</p>`,
        H6.rueda("Simetrías", "SIMETRÍA", [["axial", cAZ], ["radial", cRO], ["traslación", cVE], ["asimetría", cNA]])],
    ],
    "Diseñar un logotipo": [
      ["Pictogramas y señales", `<p>Un <mark>pictograma</mark> es un dibujo muy simplificado que comunica una idea <b>sin palabras</b>: un servicio, un peligro, una dirección. Su gran ventaja es que lo entiende gente de cualquier idioma.</p><p>Para diseñar pictogramas hay que <b>quitar todo lo que sobra</b>: figuras humanas hechas con un círculo y unos pocos palitos, siluetas sin detalles, un solo color. El diseñador alemán <b>Otl Aicher</b> creó para los Juegos Olímpicos de Múnich de 1972 unos pictogramas de deportes basados en una cuadrícula y en líneas a 45° y 90° que influyeron en el diseño de todo el mundo.</p><p>Las <b>señales</b> combinan pictograma, <b>forma</b> y <b>color</b> con significados fijos:</p><ul><li><b>Triángulo</b> con borde rojo: peligro, precaución.</li><li><b>Círculo</b> con borde rojo: prohibición. Círculo azul: obligación.</li><li><b>Cuadrado o rectángulo</b>: información (azul) o salvamento y emergencias (verde, como las salidas de emergencia).</li><li><b>Amarillo con negro</b>: advertencia en trabajos y fábricas.</li></ul><p>Un buen pictograma se entiende <b>en un segundo</b>, se ve bien de lejos y en tamaño pequeño, y es <b>accesible</b>: no depende solo del color, para que lo entiendan también las personas con daltonismo.</p>`,
        L6.filas("Formas de las señales", [["triángulo", "peligro", cNA], ["círculo rojo", "prohibición", cRO], ["círculo azul", "obligación", cAZ], ["cuadrado", "información", cVE]])],
    ],
  },
  final: [
    ["Escher y las figuras imposibles", `<p>El artista neerlandés <b>Maurits Cornelis Escher</b> (1898-1972) fue un mago de la geometría. Tras visitar la <b>Alhambra</b> de Granada, se obsesionó con los mosaicos y empezó a crear teselados en los que las piezas eran <b>animales</b>: peces que encajan con pájaros, lagartos que forman un suelo perfecto.</p><p>Pero también es famoso por sus <mark>figuras imposibles</mark>: dibujos que parecen correctos, pero que no podrían existir en la realidad. En su grabado <i>Cascada</i>, el agua baja por un canal y, sin subir nunca, vuelve al punto de partida para caer otra vez. En <i>Relatividad</i>, unas escaleras están pensadas para personas con la gravedad en direcciones diferentes.</p><p>Un ejemplo sencillo que puedes dibujar es el <b>triángulo imposible</b> o triángulo de Penrose: tres barras que forman ángulos rectos entre sí y, sin embargo, se cierran en un triángulo. Cada esquina por separado es correcta, pero el conjunto es imposible.</p><p>Estas obras juegan con cómo nuestro cerebro interpreta las líneas y la perspectiva. Matemáticos y científicos admiran a Escher porque convirtió ideas muy complejas en imágenes que cualquiera puede disfrutar.</p>`,
      H6.dos("El mundo de Escher", ["TESELADOS", ["animales que encajan", "sin huecos", "Alhambra"], cVE], ["IMPOSIBLES", ["Cascada", "Relatividad", "Penrose"], cMO]), ["r9TfNdUn8DU", "Escher y sus dibujos imposibles", "Muy Interesante", 106459]],
    ["Geometría en el arte andalusí", `<p>Durante casi ocho siglos, en al-Ándalus se desarrolló un arte de enorme riqueza decorativa. En los espacios religiosos islámicos se evita representar personas y animales, así que los artistas llenaron muros, techos y suelos de <b>geometría</b>, <b>vegetación</b> y <b>escritura</b>:</p><ul><li><b>Lacería</b>: líneas que se cruzan y entrelazan como cintas, formando estrellas de 8, 12 o 16 puntas. Se construían solo con regla y compás, partiendo de una circunferencia dividida en partes iguales.</li><li><b>Ataurique</b>: decoración con hojas, tallos y flores muy estilizados que se repiten.</li><li><b>Epigrafía</b>: inscripciones en caligrafía árabe, que se convierten en parte del dibujo.</li><li><b>Mocárabes</b>: pequeños prismas de yeso apilados que cuelgan de techos y arcos como estalactitas.</li><li><b>Alicatados</b>: mosaicos de piezas de cerámica vidriada cortadas a mano.</li></ul><p>La <b>Alhambra</b> de Granada y la <b>Mezquita</b> de Córdoba son los mejores ejemplos. Este arte influyó después en el <b>arte mudéjar</b>, creado en los reinos cristianos por artesanos musulmanes, con sus artesonados de madera y sus torres de ladrillo, como las de Teruel.</p><p>Prueba a construir una estrella de ocho puntas con dos cuadrados girados 45°: es el inicio de muchas lacerías.</p>`,
      H6.flujo("Una estrella de lacería", ["circunferencia|base", "8 partes|iguales", "2 cuadrados|giro 45°", "entrelazar|cintas"], cNA)],
  ],
  ejemplos: [
    ["¿Cuál es el siguiente número de la serie 1, 1, 2, 3, 5, 8, 13…?", ["Cada número es la suma de los dos anteriores.", "8 + 13."], "21."],
    ["Una señal tiene forma circular con borde rojo y una bicicleta dentro. ¿Qué significa?", ["Círculo con borde rojo: prohibición.", "El pictograma es una bicicleta."], "Prohibido circular en bicicleta."],
  ],
  errores: ["Pensar que todas las composiciones bonitas tienen que ser simétricas.", "Diseñar señales que solo se entienden por el color."],
  ejercicios: [
    ["b", "¿Cuánto vale aproximadamente el número de oro?", "1,618."],
    ["b", "¿Qué es la simetría radial?", "Repetición de partes alrededor de un centro."],
    ["b", "¿Qué es un pictograma?", "Un dibujo simplificado que comunica sin palabras."],
    ["b", "¿Qué monumento inspiró a Escher?", "La Alhambra de Granada."],
    ["b", "¿Qué es la lacería?", "Decoración de líneas entrelazadas que forman estrellas."],
    ["m", "Escribe los diez primeros números de Fibonacci.", "1, 1, 2, 3, 5, 8, 13, 21, 34, 55."],
    ["m", "Pon un ejemplo de simetría de traslación.", "Una cenefa o unas huellas de pasos."],
    ["m", "¿Qué significan el triángulo, el círculo rojo y el círculo azul en las señales?", "Peligro, prohibición y obligación."],
    ["m", "Explica qué tiene de imposible el triángulo de Penrose.", "Cada esquina es correcta, pero el conjunto no podría existir."],
    ["m", "¿Qué es el arte mudéjar?", "Arte de artesanos musulmanes en reinos cristianos."],
    ["a", "Dibuja un rectángulo áureo y su espiral con compás.", "Respuesta abierta."],
    ["a", "Diseña cuatro pictogramas para los espacios del colegio.", "Respuesta abierta."],
    ["a", "Construye una estrella de lacería de ocho puntas.", "Respuesta abierta."],
    ["a", "Crea un mandala con simetría radial.", "Respuesta abierta."],
  ],
  quiz: [
    ["En la sucesión de Fibonacci, cada número es…", ["la suma de los dos anteriores", "el doble del anterior", "siempre par"], "Fibonacci."],
    ["Un rosetón gótico tiene simetría…", ["radial", "de traslación", "ninguna"], "Simetría."],
    ["Otl Aicher diseñó pictogramas para…", ["los Juegos de Múnich 1972", "la Alhambra", "Toy Story"], "Pictogramas."],
    ["Los mocárabes parecen…", ["estalactitas", "estrellas", "hojas"], "Andalusí."],
    ["El caleidoscopio lo inventó…", ["David Brewster", "Escher", "Le Corbusier"], "Simetría."],
  ],
  examen: [
    ["En la lectura, ¿qué números de espirales contó Valeria?", ["34 y 55", "10 y 20", "8 y 12"], "Lectura."],
    ["Las señales de salida de emergencia son…", ["verdes", "rojas", "amarillas"], "Señales."],
  ],
  tarjetas: [
    ["Número de oro", "φ ≈ 1,618; Fibonacci 1, 1, 2, 3, 5, 8…; girasol, nautilus."],
    ["Simetrías", "Axial, radial, traslación; asimetría equilibrada."],
    ["Pictogramas", "Sin palabras; forma y color de las señales; Otl Aicher."],
    ["Escher y al-Ándalus", "Figuras imposibles; lacería, ataurique, mocárabes."],
  ],
  glosario: [
    ["Proporción áurea", "Relación de aproximadamente 1,618 considerada armoniosa."],
    ["Sucesión de Fibonacci", "Serie en la que cada número suma los dos anteriores."],
    ["Simetría axial", "Simetría respecto a un eje, como un espejo."],
    ["Simetría radial", "Repetición alrededor de un centro."],
    ["Simetría de traslación", "Repetición desplazando un motivo en línea."],
    ["Mandala", "Composición circular con simetría radial."],
    ["Pictograma", "Signo gráfico que comunica sin palabras."],
    ["Figura imposible", "Dibujo que no podría existir en tres dimensiones."],
    ["Lacería", "Decoración de líneas entrelazadas en forma de estrella."],
    ["Ataurique", "Decoración vegetal estilizada del arte andalusí."],
    ["Mocárabe", "Decoración de prismas de yeso como estalactitas."],
    ["Mudéjar", "Arte de musulmanes en los reinos cristianos."],
  ],
  situacion: {
    titulo: "Señalética para el colegio",
    reto: "La clase diseña un sistema de pictogramas y un mural geométrico para el colegio.",
    pasos: ["Haced una lista de espacios y normas que necesitan señal.", "Diseñad pictogramas con una cuadrícula común, forma y color adecuados.", "Probad que se entienden con alumnado de otros cursos.", "Cread un mural con lacerías o mosaicos para la entrada."],
    producto: "Un sistema de señales y un mural geométrico.",
    evaluacion: ["Simplifica las formas con claridad.", "Aplica el código de formas y colores.", "Usa instrumentos de dibujo con precisión.", "Diseña pensando en todas las personas."],
  },
});
