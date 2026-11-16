// Dibujo Artístico I, 1º de Bachillerato. Tema 4, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo } = B;

// Rectángulo áureo con su espiral.
const aureo = marco("Rectángulo áureo: un cuadrado y un rectángulo menor semejante al total",
  `${rc(30, 30, 162, 100, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')}${ln(130, 30, 130, 130, "var(--pen)", 2)}${rc(130, 30, 62, 62, 'fill="none" stroke="var(--red)" stroke-width="1.5"')}${ln(130, 92, 192, 92, "var(--red)", 1.5)}${pa("M130 130 A62 62 0 0 1 192 68", trazo("var(--leaf)", 2) )}
  ${t(110, 24, "a + b", { fs: 10, color: "var(--ink)" })}${t(80, 84, "a", { bold: 1, color: "var(--pen)", fs: 12 })}${t(161, 62, "b", { bold: 1, color: "var(--red)", fs: 12 })}${t(130, 152, "(a + b) / a = a / b ≈ 1,618", { bold: 1, maxW: 220 })}${t(130, 170, "el número áureo φ", { color: "var(--muted)" })}`);

// Cuadrícula para ampliar.
const cuadricula = marco("Ampliación con cuadrícula: el mismo trazo pasa de una cuadrícula pequeña a otra mayor",
  `${Array.from({ length: 5 }, (_, i) => ln(14 + i * 20, 40, 14 + i * 20, 120, "var(--line)", 1)).join("")}${Array.from({ length: 5 }, (_, i) => ln(14, 40 + i * 20, 94, 40 + i * 20, "var(--line)", 1)).join("")}${pa("M14 110 Q34 50 54 74 T94 52", trazo("var(--pen)", 2.4))}
  ${Array.from({ length: 5 }, (_, i) => ln(134 + i * 28, 30, 134 + i * 28, 142, "var(--line)", 1)).join("")}${Array.from({ length: 5 }, (_, i) => ln(134, 30 + i * 28, 246, 30 + i * 28, "var(--line)", 1)).join("")}${pa("M134 128 Q162 58 190 92 T246 62", trazo("var(--red)", 2.8))}
  ${t(54, 142, "original", { color: "var(--pen)", bold: 1 })}${t(190, 160, "copia ×1,4", { color: "var(--red)", bold: 1 })}${t(130, 20, "mismos cuadros, mismas posiciones", { color: "var(--muted)", maxW: 220 })}`);

// Planos de la figura: general, medio y primer plano.
const planos = marco("Tipos de plano según cuánto se muestra de la figura",
  `${[["general", 14, 30, 60, 100], ["medio", 98, 30, 60, 100], ["primer plano", 182, 30, 60, 100]].map(([n, x, y, w, h], i) => `${rc(x, y, w, h, 'fill="var(--card)" stroke="var(--ink)" stroke-width="1.8" rx="4"')}${t(x + w / 2, 148, n, { bold: 1, maxW: 68 })}`).join("")}
  ${ci(44, 46, 5, trazo("var(--pen)", 1.6))}${ln(44, 52, 44, 92, "var(--pen)", 2)}${ln(30, 64, 58, 64, "var(--pen)", 2)}${ln(44, 92, 36, 120, "var(--pen)", 2)}${ln(44, 92, 52, 120, "var(--pen)", 2)}
  ${ci(128, 56, 14, trazo("var(--red)", 2))}${ln(128, 70, 128, 130, "var(--red)", 2.4)}${ln(104, 94, 152, 94, "var(--red)", 2.4)}
  ${ci(212, 76, 24, trazo("var(--leaf)", 2.4))}${el(204, 72, 3, 2, 'fill="var(--leaf)"')}${el(220, 72, 3, 2, 'fill="var(--leaf)"')}${pa("M204 88 Q212 94 220 88", trazo("var(--leaf)", 2))}`);

// Puntos de vista: normal, picado y contrapicado.
const vistas = marco("Puntos de vista: normal, picado y contrapicado respecto a un objeto",
  `${[30, 110, 190].map((x) => rc(x + 20, 64, 24, 40, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2"')).join("")}
  ${ci(14, 84, 7, 'fill="var(--ink)"')}${ln(21, 84, 50, 84, "var(--red)", 1.5, 'stroke-dasharray="4 3"')}
  ${ci(142, 24, 7, 'fill="var(--ink)"')}${ln(142, 31, 142, 64, "var(--red)", 1.5, 'stroke-dasharray="4 3"')}
  ${ci(222, 142, 7, 'fill="var(--ink)"')}${ln(222, 135, 222, 104, "var(--red)", 1.5, 'stroke-dasharray="4 3"')}
  ${t(46, 126, "normal", { bold: 1 })}${t(126, 126, "picado", { bold: 1 })}${t(206, 126, "contrapicado", { bold: 1, maxW: 76 })}${t(130, 168, "el ojo mira desde distinta altura", { color: "var(--muted)", maxW: 220 })}`);

module.exports = B.tema({
  titulo: "Proporción y encuadre",
  minutos: 105,
  objetivos: [
    "Aplicar el concepto de proporción y de módulo para relacionar las partes con el todo",
    "Conocer los cánones del cuerpo y del rostro, la sección áurea y las escalas y ampliaciones con cuadrícula",
    "Elegir formato, encuadre, plano y punto de vista con intención expresiva",
    "Organizar la imagen dentro del formato con equilibrio, tercios, diagonales y espacio de respiro",
  ],
  claves: ["proporción", "módulo", "canon", "sección áurea", "escala", "cuadrícula", "formato", "encuadre", "plano", "punto de vista"],
  pregunta: {
    texto: "¿Por qué una caricatura con la cabeza enorme sigue pareciendo la persona, pero un retrato con los ojos un poco bajos nos parece raro?",
    respuesta: "Porque nuestra mente reconoce las <mark>relaciones de proporción</mark> más que los tamaños absolutos. Una caricatura exagera a propósito, pero mantiene la estructura; un error involuntario de proporciones rompe el parecido. Dominar la proporción y decidir bien el encuadre es lo que permite que el dibujo se lea con claridad y con intención.",
  },
  lectura: {
    titulo: "El hombre de Vitruvio",
    html: `<p>Hacia 1490, Leonardo da Vinci dibujó un hombre desnudo con los brazos y las piernas abiertos, inscrito a la vez en un círculo y en un cuadrado. Es una de las imágenes más famosas del mundo y es, en realidad, una lección de proporciones. Leonardo se basó en un texto del arquitecto romano Vitruvio que afirmaba que el cuerpo humano guarda relaciones precisas: la altura total es igual a la envergadura de los brazos abiertos, el pie mide una sexta parte de la altura, el rostro, una décima.</p>
    <p>Leonardo midió cuerpos reales y comprobó que las reglas de Vitruvio no se cumplían exactamente, pero también descubrió algo importante: que la belleza del cuerpo y la del dibujo dependen de que las partes <b>se relacionen entre sí</b> de manera coherente. Cuando esas relaciones se alteran con intención, se obtiene expresión; cuando se alteran sin querer, se obtiene error.</p>
    <p>En este tema estudiarás esas relaciones: cómo se establecen las proporciones, qué cánones usan los artistas, cómo se amplía un dibujo con una cuadrícula y cómo se decide qué parte del mundo se encierra en el marco, desde dónde se mira y cómo se organiza lo que queda dentro.</p>`,
  },
  secciones: [4, 3, 4],
  bloques: [
    {
      h: "Qué es la proporción",
      html: `<p>La <b>proporción</b> es la relación de tamaño entre las partes de un objeto y de cada parte con el todo. Se expresa de forma numérica (la altura es el doble de la anchura, 2:1) o visual (la oreja es del tamaño de la nariz). Cuando las proporciones son correctas, el objeto se reconoce aunque esté simplificado; cuando fallan, el objeto parece <b>deformado</b> aunque cada detalle esté bien hecho.</p>
      <p>Conviene distinguir <b>proporción</b> de <b>tamaño</b>: dos objetos pueden tener tamaños distintos y la misma proporción (una foto y su ampliación). La proporción es lo que se <mark>conserva</mark> cuando se amplía o reduce una imagen, y por eso es la clave de las escalas.</p>
      <p>Medimos la proporción con el método visual del tema anterior, tomando una unidad de referencia y comparando las demás medidas con ella. También se puede trabajar con <b>fracciones simples</b> («la altura es el doble del ancho», «la cabeza es un tercio del tronco»), que se recuerdan y se comprueban fácilmente.</p>`,
      svg: B.estrella("La proporción relaciona", "PROPORCIÓN", ["Parte y todo", "Objeto y entorno", "Original y copia"]),
    },
    {
      h: "Módulo y canon",
      html: `<p>Un <b>módulo</b> es una unidad de medida elegida como referencia para expresar todas las demás. En el dibujo de la figura humana, el módulo más habitual es la <b>cabeza</b>. Un <b>canon</b> es el conjunto de proporciones ideales fijadas por un artista, una escuela o una época a partir de ese módulo.</p>
      <p>Entre los más conocidos: el <b>canon egipcio</b> (basado en el puño y en una cuadrícula de 18 cuadros hasta la línea del pelo); el <b>canon de Policleto</b> (escultor griego del siglo V a. C., cuerpo de siete cabezas, equilibrado y atlético); el de <b>Lisipo</b> (ocho cabezas, más esbelto); el de <b>Vitruvio</b>, que retomó Leonardo, y el <b>Modulor</b> de Le Corbusier (siglo XX), basado en la altura de un hombre de 1,83 m y en la proporción áurea.</p>
      <p>Los cánones <b>no son leyes naturales</b>: son convenciones. Un adulto real mide entre 7 y 8 cabezas, un niño de cinco años unas 5 y un bebé unas 4. Los cánones sirven como punto de partida; los artistas los transforman con intención: la moda alarga a ocho y media o nueve cabezas, el cómic de superhéroes a ocho o más, y el manga infantil lo reduce a tres o cuatro.</p>`,
      svg: B.rejilla("Cabezas de altura según el canon", ["Canon", "Cabezas", "Carácter"], [["Policleto", "7", "robusto"], ["Lisipo", "8", "esbelto"], ["Moda", "9", "estilizado"], ["Niño 5 años", "5", "infantil"], ["Bebé", "4", "cabezón"]], { t: "El módulo de la cabeza" }),
    },
    {
      h: "La proporción áurea",
      html: `<p>La <b>sección áurea</b> o <b>proporción áurea</b> es la que se obtiene al dividir un segmento en dos partes de modo que el segmento total sea a la parte mayor como la parte mayor es a la menor. Su valor es el <b>número áureo</b>, φ ≈ 1,618. Un rectángulo cuyos lados guardan esa razón se llama <b>rectángulo áureo</b>, y tiene una propiedad curiosa: al quitarle un cuadrado queda otro rectángulo áureo más pequeño, y así sucesivamente, dibujando una espiral.</p>
      <p>Se ha buscado esta proporción en el Partenón, en la Gioconda o en las obras de Dalí, y también en la naturaleza (conchas, flores). Conviene ser prudentes: muchas de esas afirmaciones son <mark>exageraciones</mark> o ajustes forzados. Lo cierto es que la proporción áurea es una referencia útil y agradable para componer un formato (por ejemplo, un cuadro de 1 × 1,6) o para repartir masas de forma asimétrica pero equilibrada.</p>
      <p>Una versión práctica para el dibujante es la <b>regla de los tercios</b>, que aproxima la proporción áurea con más sencillez: los puntos fuertes de la composición quedan cerca (aunque no exactamente) de los puntos áureos del formato.</p>`,
      svg: aureo,
      video: { id: "6HnCHifBb88", titulo: "La regla de los tercios en el arte", canal: "Arte Divierte", vistas: 35691 },
    },
    {
      h: "Escala y ampliación con cuadrícula",
      html: `<p>La <b>escala</b> es la razón entre el tamaño de la copia y el del original. Se escribe <b>1:2</b> (la copia tiene la mitad), <b>2:1</b> (el doble) o <b>1:1</b> (tamaño natural). Una escala se aplica multiplicando todas las medidas por el mismo factor: si una ventana mide 90 cm × 120 cm y la dibujas a 1:10, tendrá 9 cm × 12 cm.</p>
      <p>Para ampliar o reducir una imagen a mano se utiliza el <b>método de la cuadrícula</b>, conocido desde el Renacimiento y empleado por Durero. Se divide el original con una rejilla de cuadros iguales, se prepara en el papel otra rejilla con el mismo número de cuadros pero de distinto tamaño, y se copia lo que ocurre en cada cuadro en su cuadro correspondiente. En cada cuadro la tarea es pequeña y fácil: solo hay que mirar por dónde cruza el trazo los bordes del cuadro.</p>
      <p>Si el original mide 10 × 15 cm y quieres una copia de 30 cm de ancho, el factor es 30/10 = 3, y la altura será 15 × 3 = 45 cm. Cuidado con un error típico: <mark>el factor se aplica a las longitudes</mark>, no a las áreas; una copia al doble de tamaño tiene cuatro veces más superficie.</p>`,
      svg: cuadricula,
    },
    {
      h: "Proporciones del rostro",
      html: `<p>El rostro humano frontal se organiza con unas pautas sencillas que sirven para empezar:</p>
      <ul><li>La cabeza se inscribe en un <b>óvalo</b> o en un huevo, con la parte ancha arriba (el cráneo) y la estrecha abajo (el mentón).</li>
      <li>Una línea horizontal por la <b>mitad</b> de la cabeza pasa por los <b>ojos</b>; la mayoría de la gente cree que están más arriba.</li>
      <li>El rostro se divide en <b>tres tercios</b> iguales: de la línea del pelo a las cejas, de las cejas a la base de la nariz y de la nariz al mentón.</li>
      <li>Entre ojo y ojo cabe <b>otro ojo</b>. La línea de la nariz es del ancho de un ojo, y la boca se sitúa a un tercio de la distancia entre la nariz y la barbilla.</li>
      <li>Las <b>orejas</b> van desde la línea de las cejas hasta la base de la nariz.</li></ul>
      <p>Hay que recordar que son <b>medidas medias</b> y que cada persona tiene las suyas: el parecido está en cómo se desvía cada rostro del esquema. En un perfil la cabeza es casi tan profunda como alta, y el oído queda a medio camino entre la frente y la nuca. Con la edad y la inclinación del cuello las relaciones cambian, de modo que esta pauta siempre se comprueba con el modelo.</p>`,
      svg: B.rostro("Proporciones del rostro frontal en tercios"),
      video: { id: "yqA31tSsWtA", titulo: "Canon del rostro, vista frontal", canal: "Oscar Sarmiento", vistas: 4379400 },
    },
    {
      h: "Proporciones del cuerpo humano",
      html: `<p>Con el módulo de la cabeza, el cuerpo adulto medio se organiza de arriba abajo en <b>ocho cabezas</b>: la primera, el rostro; la segunda llega a los pezones; la tercera, al ombligo; la cuarta, a la entrepierna (el punto medio del cuerpo); la quinta, a media pierna; la sexta, a las rodillas; la séptima, a las pantorrillas, y la octava, a los pies. En realidad, el cuerpo real es de 7 a 7,5 cabezas, y el canon de ocho es una convención idealizada.</p>
      <p>Otras relaciones útiles: los <b>hombros</b> miden unas dos cabezas de ancho en el hombre y algo menos en la mujer; los brazos caídos llegan a la mitad del muslo; los codos están a la altura de la cintura y las muñecas, a la entrepierna; el pie mide una cabeza. Con los brazos extendidos, la <b>envergadura</b> es igual a la altura total, como señalaba Vitruvio.</p>
      <p>Las proporciones cambian con la edad: un recién nacido tiene 4 cabezas, un niño de 6 años 6, un adolescente 7. También difieren de unas personas a otras y se alteran por la <b>perspectiva</b>: un cuerpo visto desde abajo o con una pierna adelantada se «acorta», y hay que dibujar lo que se ve, no lo que se sabe. Dibujar con el esquema en la cabeza y las medidas en la mano es la combinación ganadora.</p>`,
      svg: B.canon("Canon de ocho cabezas del cuerpo adulto"),
      video: { id: "V9VP87BVKtw", titulo: "Cómo dibujar el cuerpo humano: proporciones", canal: "Arte Pro", vistas: 311530 },
    },
    {
      h: "Proporción de objetos y de paisajes",
      html: `<p>La proporción no es solo cosa de personas. Los objetos cotidianos tienen una relación característica entre sus partes: una taza es casi tan alta como ancha, una botella es de 3 a 4 veces más alta que ancha, un libro tiene una proporción cercana a 2:3 y una pantalla de 16:9. Reconocer estas relaciones facilita el encaje.</p>
      <p>En un conjunto, las <b>relaciones de tamaño entre objetos</b> son las que dan la sensación de realismo: la taza es la mitad de alta que la jarra, la silla llega a la altura de la mesa. Cuando se dibuja un paisaje, las relaciones de tamaño entre elementos cercanos y lejanos se alteran por la <b>perspectiva</b>: una persona lejana es más pequeña que un árbol cercano, pero ambos conservan su proporción real si se aplica la escala correcta.</p>
      <p>Una técnica útil es elegir un <b>objeto de referencia</b> con tamaño conocido (una persona, una puerta, una silla) e ir midiendo todo lo demás en múltiplos de él. En un paisaje, una figura humana en la distancia sirve de <b>escala visual</b>: da la sensación de tamaño del conjunto y de profundidad.</p>`,
      svg: B.barras("Altura relativa de objetos cotidianos", [["Taza", 9], ["Botella", 28], ["Silla", 90], ["Puerta", 210]], { t: "Alturas (cm)", unidad: " cm" }),
    },
    {
      h: "Formato y encuadre",
      html: `<p>El <b>formato</b> es la forma y proporción del soporte: <b>vertical</b> (más alto que ancho; retratos, figuras, árboles), <b>horizontal</b> (más ancho que alto; paisajes, panorámicas, escenas con movimiento lateral) o <b>cuadrado</b> (equilibrado, estático). Elegir bien el formato antes de empezar tiene un efecto enorme sobre el resultado.</p>
      <p>El <b>encuadre</b> es la porción de realidad que se incluye en el formato. Equivale a elegir dónde cortar. Una herramienta útil es el <b>visor</b>: un cartón con una ventana rectangular de la misma proporción que el papel, que se sostiene delante del ojo para seleccionar lo que se dibuja. Con él se comprueba cómo quedan los márgenes, qué se corta y qué tamaño relativo tendrán los objetos.</p>
      <p>Algunos principios: no <b>cortar</b> los elementos por las articulaciones (cabezas, manos, pies, tobillos) a menos que haya un motivo; dejar <b>aire</b> en la dirección en la que mira o se mueve el sujeto; evitar que el sujeto <b>toque</b> el borde de forma casual y no dejar un margen enorme y vacío al otro lado. Un buen encuadre es el que <mark>incluye lo necesario y excluye lo que molesta</mark>.</p>`,
      svg: B.comparar("Formato vertical y horizontal", ["Vertical", ["retratos", "figuras", "árboles", "altura"]], ["Horizontal", ["paisajes", "panorámicas", "movimiento", "amplitud"]]),
    },
    {
      h: "Los planos",
      html: `<p>Como en el cine y la fotografía, en dibujo se habla de <b>planos</b> para describir cuánto se muestra del sujeto y a qué distancia se supone que está el observador:</p>
      <ul><li><b>Plano general</b>: la figura completa y su entorno; sitúa la escena y da sensación de espacio.</li>
      <li><b>Plano americano</b> o tres cuartos: hasta las rodillas.</li>
      <li><b>Plano medio</b>: hasta la cintura o el pecho; el más natural para la conversación.</li>
      <li><b>Primer plano</b>: el rostro o un objeto pequeño ocupa casi todo el formato; transmite emoción e intimidad.</li>
      <li><b>Plano detalle</b>: una parte muy concreta (los ojos, unas manos); concentra la atención.</li></ul>
      <p>Cada plano implica una decisión de <b>información</b> y de <b>emoción</b>: cuanto más cerrado, más expresivo; cuanto más abierto, más informativo. Un mismo tema (una persona esperando en una estación) cambia por completo según la distancia: en plano general se habla de soledad y de espacio; en primer plano, de impaciencia o de miedo.</p>`,
      svg: planos,
    },
    {
      h: "Composición dentro del encuadre",
      html: `<p>Dentro del formato, los elementos se organizan siguiendo esquemas de composición. Los más usados en dibujo son:</p>
      <ul><li><b>Tercios</b>: los elementos importantes sobre las líneas o puntos de tercios.</li>
      <li><b>Simetría central</b>: la imagen se divide por un eje; transmite solemnidad, orden y quietud.</li>
      <li><b>Diagonal</b>: elementos dispuestos según una diagonal; dan dinamismo y movimiento.</li>
      <li><b>Triángulo</b>: tres elementos principales forman un triángulo; transmite estabilidad (muy usado en retrato de grupo y bodegón).</li>
      <li><b>Curva en S</b>: una línea sinuosa lleva la mirada por la imagen (caminos, ríos).</li>
      <li><b>Marco dentro del marco</b>: una ventana o una puerta enmarca el motivo y refuerza la profundidad.</li></ul>
      <p>También cuentan el <b>espacio vacío</b> o <i>aire</i> (que dota de calma y centra la atención), el <b>peso visual</b> (los elementos oscuros, grandes o saturados pesan más) y el <b>contraste</b> (en valor, tamaño o forma) que dirige la mirada. Ante la duda, haz tres <b>miniaturas</b> de composición de 2 × 3 cm, juzga cuál es más clara y trabaja sobre esa.</p>`,
      svg: B.cajas("Esquemas de composición", [["Tercios", "puntos fuertes"], ["Simetría", "orden y quietud"], ["Diagonal", "dinamismo"], ["Triángulo", "estabilidad"]], { t: "Cuatro esquemas" }),
      video: { id: "4OT4vj8mvY8", titulo: "5 reglas de composición", canal: "De Viaje con la Cámara", vistas: 1540167 },
    },
    {
      h: "Puntos de vista",
      html: `<p>El <b>punto de vista</b> es la posición del ojo respecto al motivo y condiciona cómo se ve y qué significa:</p>
      <ul><li><b>Normal</b> (a la altura de los ojos): neutro, natural, cercano.</li>
      <li><b>Picado</b> (desde arriba): el sujeto parece pequeño, débil o vulnerable; se ve más suelo y más información del espacio.</li>
      <li><b>Contrapicado</b> (desde abajo): el sujeto parece grande, poderoso o amenazante; domina el cielo.</li>
      <li><b>Cenital</b> (desde arriba, vertical): vista de pájaro, abstracta, que enseña la organización de formas.</li>
      <li><b>Nadir</b> (desde abajo, vertical): dramática y poco habitual.</li></ul>
      <p>El punto de vista determina la <b>línea de horizonte</b>: siempre está a la altura de los ojos del observador. Con un horizonte bajo domina el cielo y los objetos se ven desde abajo; con un horizonte alto domina el suelo. Además, los <b>escorzos</b> (formas que se ven muy acortadas porque apuntan hacia el observador) aparecen al elegir puntos de vista extremos.</p>
      <p>Antes de dibujar, conviene <b>moverse</b> alrededor del modelo y buscar el punto de vista más interesante: a menudo, uno distinto del primero que se te ocurre.</p>`,
      svg: vistas,
    },
  ],
  figura: {
    titulo: "Proporción y encuadre",
    items: [["Módulo", "1 cabeza", "unidad del canon", "ocho en el cuerpo"], ["Áurea", "φ ≈ 1,618", "razón armónica", "tercios aproximados"], ["Escala", "1:2 · 2:1", "factor igual en", "todas las medidas"], ["Encuadre", "plano y vista", "qué entra", "y desde dónde"]],
  },
  video: { id: "yqA31tSsWtA", titulo: "Canon del rostro, vista frontal", canal: "Oscar Sarmiento", vistas: 4379400 },
  quiz: [
    ["La proporción es…", ["el tamaño absoluto de un objeto", "la relación entre las partes y con el todo", "el color de las partes", "la textura"], 1, "Es la relación entre tamaños, no el tamaño en sí."],
    ["¿Qué se conserva al ampliar una imagen?", ["El tamaño", "La proporción", "El área", "El peso"], 1, "La proporción se conserva; el tamaño cambia."],
    ["Un módulo es…", ["un tipo de papel", "una unidad de medida de referencia", "un lápiz", "una sombra"], 1, "En la figura humana suele ser la cabeza."],
    ["El canon de Policleto tiene…", ["cuatro cabezas", "siete cabezas", "diez cabezas", "dos cabezas"], 1, "Cuerpo equilibrado y atlético de siete cabezas."],
    ["Un bebé recién nacido tiene aproximadamente…", ["4 cabezas de altura", "8 cabezas de altura", "10 cabezas", "2 cabezas"], 0, "El módulo de la cabeza es proporcionalmente mayor."],
    ["El número áureo vale aproximadamente…", ["1,414", "1,618", "3,14", "2,718"], 1, "φ ≈ 1,618."],
    ["Un rectángulo áureo, al quitarle un cuadrado, deja…", ["un triángulo", "otro rectángulo áureo", "un círculo", "nada"], 1, "Propiedad que genera la espiral áurea."],
    ["La escala 2:1 significa que la copia es…", ["la mitad", "el doble", "igual", "cuatro veces menor"], 1, "2:1 es una ampliación al doble."],
    ["Si ampliamos un original de 10 × 15 cm con factor 3, la copia mide…", ["30 × 45 cm", "13 × 18 cm", "30 × 15 cm", "10 × 45 cm"], 0, "El factor se aplica a todas las longitudes."],
    ["Una copia al doble de tamaño lineal tiene…", ["el doble de superficie", "cuatro veces la superficie", "la misma superficie", "la mitad"], 1, "El área crece con el cuadrado del factor."],
    ["En el rostro frontal, los ojos están…", ["en el tercio superior", "a la mitad de la cabeza", "a un cuarto desde abajo", "en el mentón"], 1, "La mayoría de la gente cree que están más arriba."],
    ["¿Cuántos ojos caben entre los dos ojos?", ["Ninguno", "Uno", "Dos", "Tres"], 1, "La distancia interocular es de un ojo."],
    ["En el canon de ocho cabezas, la entrepierna queda en…", ["la tercera cabeza", "la cuarta cabeza", "la sexta cabeza", "la octava cabeza"], 1, "Es el punto medio de la altura."],
    ["La envergadura de los brazos abiertos es igual a…", ["la mitad de la altura", "la altura total", "el doble de la altura", "la cabeza"], 1, "Relación de Vitruvio."],
    ["El formato horizontal se asocia a…", ["retratos", "paisajes y panorámicas", "árboles", "torres"], 1, "Amplitud y movimiento lateral."],
    ["Un visor sirve para…", ["borrar", "seleccionar y comprobar el encuadre", "sombrear", "medir ángulos"], 1, "Es un marco con la proporción del papel."],
    ["Un primer plano transmite…", ["más información del entorno", "más emoción e intimidad", "menos expresión", "lejanía"], 1, "Cuanto más cerrado, más expresivo."],
    ["El punto de vista contrapicado hace que el sujeto parezca…", ["pequeño y débil", "grande y poderoso", "neutral", "invisible"], 1, "Se mira desde abajo."],
    ["La línea de horizonte está siempre…", ["en el centro del papel", "a la altura de los ojos del observador", "arriba", "abajo"], 1, "Depende del punto de vista."],
    ["Una composición diagonal transmite…", ["quietud", "dinamismo", "solemnidad", "frialdad"], 1, "Las diagonales introducen movimiento."],
  ],
  examen: [
    ["Dibujas una puerta de 2,10 m × 0,90 m a escala 1:10. Mide…", ["21 × 9 cm", "2,1 × 0,9 cm", "210 × 90 cm", "10 × 4 cm"], 0, "Se divide por 10: 21 cm × 9 cm."],
    ["Si un adulto mide 7,5 cabezas y la cabeza dibujada mide 3 cm, el cuerpo medirá…", ["15 cm", "22,5 cm", "30 cm", "24 cm"], 1, "7,5 × 3 = 22,5 cm."],
    ["¿Qué consejo es correcto para encuadrar?", ["Cortar siempre por las articulaciones", "Dejar aire en la dirección de la mirada del sujeto", "Centrar siempre", "Rellenar los bordes"], 1, "El aire evita la sensación de agobio."],
    ["Un plano que muestra a la persona hasta la cintura es…", ["general", "medio", "detalle", "cenital"], 1, "El plano medio es el más natural para conversar."],
    ["¿Qué punto de vista muestra la organización de formas desde arriba?", ["Normal", "Contrapicado", "Cenital", "Nadir"], 2, "Es la vista de pájaro."],
    ["La regla de los tercios aproxima…", ["la sección áurea", "la simetría", "la perspectiva", "el color"], 0, "Es una versión práctica de la proporción áurea."],
    ["Para ampliar un dibujo con cuadrícula…", ["se cambia el número de cuadros", "se mantiene el número de cuadros y se cambia su tamaño", "se borra la cuadrícula", "se usa un solo cuadro"], 1, "Mismos cuadros, distinto tamaño."],
    ["¿Qué ocurre con las proporciones si el cuerpo se ve en escorzo?", ["No cambian", "Las partes se acortan visualmente por la perspectiva", "Se hacen mayores", "Desaparecen"], 1, "Hay que dibujar lo que se ve y no lo que se sabe."],
  ],
  feynman: ["La diferencia entre proporción y tamaño y por qué se conserva en la escala", "El canon de ocho cabezas y las proporciones del rostro", "Cómo se amplía un dibujo con cuadrícula", "Cómo elegir formato, plano y punto de vista"],
  mapa: ["PROPORCIÓN Y ENCUADRE", [["Proporción", "módulo · canon · áurea"], ["Escala", "factor · cuadrícula · 1:2"], ["Figura", "8 cabezas · tercios del rostro"], ["Encuadre", "formato · plano · punto de vista"]]],
  tarjetas: [
    ["Proporción", "Relación de tamaño entre las partes y con el todo."],
    ["Módulo", "Unidad de medida de referencia, como la cabeza en la figura."],
    ["Canon", "Conjunto de proporciones ideales de una escuela o época."],
    ["Canon de ocho cabezas", "Cuerpo ideal con la entrepierna en la cuarta cabeza."],
    ["Número áureo", "φ ≈ 1,618, razón de la sección áurea."],
    ["Escala 1:2", "La copia mide la mitad del original."],
    ["Método de cuadrícula", "Ampliar o reducir copiando cuadro por cuadro."],
    ["Tercios del rostro", "Pelo-cejas, cejas-nariz, nariz-mentón."],
    ["Los ojos", "Están a la mitad de la cabeza."],
    ["Plano general y primer plano", "Informa del entorno frente a transmite emoción."],
    ["Picado y contrapicado", "Desde arriba (pequeño) y desde abajo (poderoso)."],
    ["Visor", "Marco de cartón para elegir el encuadre."],
  ],
  ejemplos: [
    ["Amplía un dibujo de 8 × 12 cm a un ancho de 20 cm con cuadrícula. ¿Qué medidas tiene la copia y cómo se hace la cuadrícula?", ["Factor = 20/8 = 2,5.", "Alto = 12 × 2,5 = 30 cm.", "Cuadrícula de 1 cm en el original (8 × 12 cuadros) y de 2,5 cm en la copia (20 × 30 cm)."], "Copia de 20 × 30 cm con 8 × 12 cuadros de 2,5 cm."],
    ["Dibuja un retrato frontal con 21 cm de altura de cabeza. ¿Dónde sitúas ojos, nariz y boca?", ["Ojos a la mitad: 10,5 cm desde el mentón.", "Tercios de 7 cm: base de la nariz a 7 cm del mentón; cejas a 14 cm.", "Boca a un tercio entre la nariz y el mentón: 7/3 ≈ 2,3 cm bajo la nariz, es decir, a unos 4,7 cm del mentón."], "Ojos a 10,5 cm, nariz a 7 cm y boca a 4,7 cm medidos desde el mentón."],
    ["Una modelo de 8 cabezas se dibuja en moda a 9 cabezas con la misma cabeza de 2,5 cm. ¿Cuánto crece la figura y dónde conviene alargar?", ["Altura canon: 8 × 2,5 = 20 cm; moda: 9 × 2,5 = 22,5 cm.", "Crece 2,5 cm.", "Se alargan sobre todo las piernas (de la cadera a los pies)."], "Figura de 22,5 cm, alargando piernas."],
    ["Un cuadro mide 60 × 97 cm. ¿Se acerca al rectángulo áureo?", ["Relación = 97/60 ≈ 1,617.", "φ ≈ 1,618.", "La diferencia es mínima."], "Sí: la proporción es casi áurea (1,617)."],
    ["Quieres dibujar una escena de un niño pequeño esperando solo en una estación. Elige plano y punto de vista y justifica.", ["Plano general para mostrar el vacío y el tamaño de la estación.", "Punto de vista picado, ligeramente desde arriba, para acentuar su fragilidad.", "Descentrar al niño en un tercio y dejar aire hacia la vía."], "Plano general picado y asimétrico: soledad y vulnerabilidad."],
    ["Corrige un retrato en el que los ojos están en el tercio superior de la cabeza.", ["Mide la cabeza de arriba abajo y divide por dos.", "Baja la línea de los ojos hasta esa mitad.", "Reajusta cejas, nariz y boca en los tercios."], "Ojos a la mitad: el rostro se ve más natural."],
  ],
  errores: [
    "Colocar los ojos demasiado arriba en la cabeza (están a la mitad).",
    "Confundir proporción con tamaño y no conservar la razón al ampliar.",
    "Aplicar el factor de escala solo a una dimensión y deformar la copia.",
    "Aceptar los cánones como leyes naturales y olvidar las diferencias entre personas.",
    "Cortar las figuras por las articulaciones o rozar el borde del papel sin intención.",
    "Elegir siempre el primer encuadre y el punto de vista normal.",
  ],
  ejercicios: {
    b: [
      ["Define proporción con tus palabras.", "Relación de tamaño entre las partes de un objeto y de cada parte con el todo."],
      ["¿Qué es un módulo? Pon un ejemplo en el dibujo de la figura.", "Una unidad de medida de referencia; la cabeza en el canon de ocho cabezas."],
      ["Cita dos cánones de la figura humana y su número de cabezas.", "Policleto: 7 cabezas; Lisipo: 8 cabezas (también moda: 9)."],
      ["¿Cuánto vale aproximadamente el número áureo?", "φ ≈ 1,618."],
      ["¿Qué significa escala 1:5?", "La copia mide la quinta parte del original."],
      ["¿Qué significa escala 3:1?", "La copia mide el triple del original (ampliación)."],
      ["Indica dónde están los ojos en un rostro frontal.", "A la mitad de la altura de la cabeza."],
      ["¿Cuántos tercios tiene el rostro y cuáles son?", "Tres: línea del pelo a cejas, cejas a base de la nariz y nariz a mentón."],
      ["¿Cuántas cabezas tiene el canon del adulto y en qué cabeza queda la entrepierna?", "Ocho cabezas; en la cuarta."],
      ["Distingue formato vertical, horizontal y cuadrado con un ejemplo de cada uno.", "Vertical: retrato; horizontal: paisaje; cuadrado: composición simétrica o estática."],
      ["Nombra los cinco planos más usados.", "General, americano, medio, primer plano y detalle."],
      ["¿Qué diferencia hay entre picado y contrapicado?", "Picado: visto desde arriba (sujeto pequeño); contrapicado: desde abajo (sujeto grande)."],
    ],
    m: [
      ["Calcula la altura total de un adulto de 7,5 cabezas si la cabeza mide 2,8 cm.", "7,5 × 2,8 = 21 cm."],
      ["Un original mide 12 × 18 cm. Lo reduces a escala 1:3. ¿Qué medidas tiene?", "12/3 = 4 cm; 18/3 = 6 cm: 4 × 6 cm."],
      ["Para ampliar a 40 cm de ancho un dibujo de 16 × 20 cm, ¿qué alto tiene la copia?", "Factor 40/16 = 2,5; alto = 20 × 2,5 = 50 cm."],
      ["Calcula la altura de un rectángulo áureo cuyo ancho es 32 cm (≈).", "Alto ≈ 32/1,618 ≈ 19,8 cm."],
      ["Describe cómo corregirías un retrato con boca demasiado alta.", "Medir el tercio inferior (nariz-mentón), situar la boca a un tercio desde la nariz y ajustar el labio inferior y el mentón."],
      ["Explica por qué el factor de escala se aplica a longitudes y no a áreas.", "Porque las proporciones se conservan al multiplicar todas las longitudes; el área resultante depende del cuadrado del factor."],
      ["¿Por qué un plano general es más informativo y uno cerrado más expresivo?", "El general muestra el entorno y las relaciones; el cerrado elimina contexto y concentra la atención en el gesto y la emoción."],
      ["Describe tres efectos de un punto de vista contrapicado en un retrato.", "Aumenta la importancia del personaje, enfatiza la barbilla y el cuello, y deja el cielo o el techo como fondo."],
      ["¿Qué error aparece si dibujas un paisaje con árboles lejanos del mismo tamaño que los cercanos?", "Se pierde la sensación de profundidad: faltan escala y perspectiva decreciente."],
      ["Propón una composición en triángulo para un bodegón de tres objetos.", "Objeto alto en el vértice superior centrado, objeto medio a la izquierda y objeto bajo a la derecha, formando un triángulo estable con un espacio negativo entre ellos."],
    ],
    a: [
      ["Una modelo de 1,75 m se quiere dibujar a 9 cabezas en un folio de 30 cm de alto. ¿Qué altura de cabeza resulta y cabe con margen de 3 cm?", "Zona útil: 24 cm; altura de cabeza = 24/9 ≈ 2,67 cm. Con margen 3 cm arriba y abajo la figura mide 24 cm y cabe."],
      ["Calcula la razón entre dos medidas de un cuadro de 73 × 116 cm y compárala con φ. Comenta.", "116/73 ≈ 1,589; φ ≈ 1,618; diferencia ≈ 1,8%: aproxima el rectángulo áureo, aunque no lo es exactamente."],
      ["Diseña la ampliación con cuadrícula de una fotografía de 9 × 13 cm a un papel de 36 cm de ancho. Detalla cuadros, tamaño, medidas finales y error típico.", "Factor 4; alto 52 cm. Cuadrícula de 1 cm → 9 × 13 cuadros; en la copia de 4 cm. Error típico: usar factor distinto en cada eje, deformando."],
      ["Compara el canon de Policleto (7 cabezas) y el de Lisipo (8) para una figura de 28 cm. ¿Qué tamaño de cabeza resulta en cada uno?", "Policleto: 28/7 = 4 cm; Lisipo: 28/8 = 3,5 cm. Con Lisipo la cabeza es menor y la figura más esbelta."],
      ["Un niño de 6 años (unas 6 cabezas) y un adulto de 7,5 cabezas tienen la misma altura de cabeza dibujada, 3 cm. ¿Cuánto miden cada uno en el dibujo y qué relación guardan?", "Niño: 6 × 3 = 18 cm; adulto: 7,5 × 3 = 22,5 cm. Relación 18/22,5 = 0,8: el niño mide el 80 % del adulto si las cabezas se dibujan iguales."],
      ["Analiza cómo cambiar el plano y el punto de vista altera el mensaje de una imagen de una persona subiendo escaleras.", "Picado en plano general: pequeña y cansada; contrapicado en plano medio: heroica y poderosa; primer plano de los pies: esfuerzo físico. Muestra que encuadre y punto de vista son decisiones expresivas."],
      ["Calcula qué tamaño tendría un visor de 10 × 15 cm para encuadrar un folio A4 apaisado (29,7 × 21 cm), manteniendo proporción. ¿Se aproxima?", "A4: 29,7/21 ≈ 1,414; el visor 15/10 = 1,5: no es idéntico. Para ser proporcional con 10 de alto, el ancho debería ser 14,1 cm."],
      ["Justifica con razonamientos de composición por qué un retrato descentrado hacia la derecha con la mirada hacia la izquierda es más natural que uno centrado.", "El sujeto mira hacia el espacio libre (aire), compensa su peso con el vacío, aprovecha el punto fuerte de tercio y crea una tensión suave y narrativa; el centrado resulta estático."],
    ],
  },
  glosario: [
    ["Proporción", "Relación de tamaño entre las partes y el todo."],
    ["Módulo", "Unidad de medida de referencia."],
    ["Canon", "Sistema de proporciones ideales."],
    ["Número áureo", "Razón φ ≈ 1,618 de la sección áurea."],
    ["Rectángulo áureo", "Rectángulo con lados en proporción áurea."],
    ["Escala", "Razón entre el tamaño del dibujo y el del original."],
    ["Cuadrícula", "Rejilla de cuadros iguales para ampliar o reducir."],
    ["Envergadura", "Distancia entre las puntas de los dedos con los brazos abiertos."],
    ["Formato", "Forma y proporción del soporte."],
    ["Encuadre", "Porción de realidad incluida en el formato."],
    ["Visor", "Marco usado para seleccionar el encuadre."],
    ["Plano", "Cantidad del sujeto mostrada en la imagen."],
    ["Punto de vista", "Posición del ojo respecto al motivo."],
    ["Escorzo", "Forma acortada por la perspectiva."],
    ["Línea de horizonte", "Línea a la altura de los ojos del observador."],
    ["Aire", "Espacio libre en la dirección de la mirada o el movimiento."],
  ],
  situacion: {
    titulo: "Retrato en tres planos",
    reto: "Dibuja el retrato de un compañero en tres planos distintos y elige el que mejor expresa su carácter, justificándolo.",
    pasos: [
      "Mide con el lápiz la cabeza de tu modelo y establece el canon: tercios del rostro, ojos a la mitad y anchura de un ojo entre ambos.",
      "Haz tres miniaturas con visor: plano general (cuerpo entero), plano medio y primer plano.",
      "Elige una y amplíala con cuadrícula a un A4 respetando la proporción.",
      "Dibuja con encaje, tercios y aire en la dirección de la mirada.",
      "Redacta un párrafo corto que explique qué plano, formato y punto de vista has elegido y por qué.",
    ],
    producto: "Una lámina con tres miniaturas, el retrato final con la cuadrícula visible y el comentario de la elección.",
    evaluacion: [
      "Las proporciones del rostro son correctas y están comprobadas con medidas.",
      "La ampliación con cuadrícula conserva la proporción.",
      "El encuadre, el plano y el punto de vista son coherentes con la intención.",
      "El comentario usa con propiedad el vocabulario del tema.",
    ],
  },
  familias: [
    "Pedidle que dibuje a un familiar y mida con el lápiz si los ojos están en el lugar correcto.",
    "Mirad juntos fotos con distintos planos y puntos de vista y comentad qué sensación dan.",
    "Haced un visor de cartón y buscad encuadres bonitos en casa.",
    "Preguntadle qué medidas del cuerpo recuerda del canon de ocho cabezas.",
  ],
  saberes: "Proporción y encuadre: proporción y canon de la figura y del rostro, sección áurea, escala y ampliación con cuadrícula, formato, encuadre, planos y puntos de vista, y organización de la composición dentro del formato.",
  ideas: [
    "Medir las proporciones del rostro de los compañeros y comparar con el canon.",
    "Proponer ampliaciones con cuadrícula de fotografías de obras clásicas.",
    "Analizar encuadres de cómics, cine y pintura con el vocabulario del tema.",
    "Montar una exposición «Un mismo tema, tres planos».",
  ],
  fuentes: [
    { t: "Hombre de Vitruvio, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Hombre_de_Vitruvio" },
    { t: "Número áureo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/N%C3%BAmero_%C3%A1ureo" },
    { t: "Canon de proporciones, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Canon_de_proporciones" },
  ],
});
