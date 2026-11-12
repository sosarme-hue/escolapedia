// Educación Plástica 6º de Primaria: la perspectiva. Dibujos propios en SVG.
const { tema, L, svg, tx, perspectiva1, perspectiva2, AZ, RO, VE, NA, AM, AG } = require("./_pri6d");

const M = "Educación Plástica";

// Árboles iguales que se ven más pequeños al alejarse.
const tamanos = svg("Tres árboles iguales: el cercano es grande y está abajo, el lejano es pequeño y está más arriba", `
  <path d="M10 70 H 250" stroke="${AG}" stroke-width="2"/>${tx(14, 64, "horizonte", { s: 10, a: "start", c: AG })}
  ${[[60, 160, 1], [140, 112, 0.55], [200, 88, 0.3]].map(([x, y, k]) => `<path d="M${x} ${y} V ${y - 40 * k}" stroke="#8a5a2b" stroke-width="${8 * k}"/><circle cx="${x}" cy="${y - 62 * k}" r="${30 * k}" fill="${VE}"/>`).join("")}
  ${tx(60, 176, "cerca: grande, abajo", { s: 10 })}${tx(196, 128, "lejos: pequeño, arriba", { s: 10 })}`);

// Superposición y perspectiva aérea: montañas que se aclaran con la distancia.
const montanas = svg("Montañas superpuestas: las lejanas son más claras y azuladas", `
  <rect x="0" y="0" width="260" height="180" rx="14" fill="#e8f1fb"/>
  <path d="M0 110 L 60 50 L 120 100 L 170 40 L 260 110 V 180 H 0 Z" fill="#a9c3e0"/>
  <path d="M0 140 L 50 90 L 110 130 L 190 70 L 260 130 V 180 H 0 Z" fill="#6f95c2"/>
  <path d="M0 180 V 150 L 70 112 L 150 160 L 210 120 L 260 150 V 180 Z" fill="#2f5d3a"/>
  ${tx(200, 30, "lejos: claro y azulado", { s: 10.5, c: "#36506f" })}${tx(70, 172, "cerca: oscuro y nítido", { s: 10.5, c: "#fff" })}`);

module.exports = tema({
  materia: M,
  titulo: "La perspectiva",
  objetivos: ["Entender qué es la perspectiva y para qué sirve", "Usar trucos sencillos de profundidad: tamaño, superposición, altura y color", "Dibujar con un punto de fuga una calle, una habitación o un cubo", "Conocer la perspectiva con dos puntos de fuga"],
  claves: ["perspectiva", "profundidad", "línea de horizonte", "punto de fuga", "líneas de fuga", "superposición", "perspectiva aérea", "un punto de fuga", "dos puntos de fuga"],
  pregunta: [
    "Si miras unas vías de tren rectas, parece que se juntan a lo lejos. ¿Se juntan de verdad?",
    "No: las vías son siempre paralelas. Es un efecto de nuestra vista: lo lejano se ve más pequeño, y las líneas paralelas parecen unirse en un punto del horizonte. A ese punto lo llamamos <mark>punto de fuga</mark>, y aprovechar este efecto para dibujar con profundidad es la <mark>perspectiva</mark>.",
  ],
  bloques: [
    ["¿Qué es la perspectiva?", `<p>Un papel es plano: solo tiene alto y ancho. Pero el mundo tiene también <b>profundidad</b>: unas cosas están cerca y otras lejos. La <mark>perspectiva</mark> es el conjunto de técnicas que usamos para que un dibujo plano parezca tener profundidad, como si fuera una ventana a otro espacio.</p><p>Los pintores medievales no la dominaban y sus cuadros parecían planos. En el Renacimiento (siglo XV), artistas italianos como Brunelleschi descubrieron sus reglas matemáticas, y desde entonces los cuadros parecen escenarios de verdad.</p>`,
      svg("Un cuadro plano y otro con profundidad, como una ventana", `<rect x="16" y="40" width="100" height="90" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/><rect x="34" y="70" width="24" height="40" fill="${NA}" fill-opacity=".7"/><rect x="72" y="70" width="24" height="40" fill="${AZ}" fill-opacity=".7"/>${tx(66, 150, "plano", { s: 11, c: "var(--muted)" })}<rect x="144" y="40" width="100" height="90" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/><path d="M144 130 L 194 78 L 244 130" fill="var(--line)" fill-opacity=".6"/><path d="M144 40 L 194 78 L 244 40" fill="${AG}" fill-opacity=".15"/><rect x="186" y="70" width="16" height="16" fill="${NA}" fill-opacity=".7"/><circle cx="194" cy="78" r="3" fill="${RO}"/>${tx(194, 150, "con profundidad", { s: 11, c: AZ })}`)],
    ["Tamaño y altura", `<p>El primer truco es el <mark>tamaño</mark>: las cosas lejanas se ven <b>más pequeñas</b>. Si dibujas dos personas iguales, una grande y otra pequeña, la pequeña parecerá estar más lejos.</p><p>El segundo es la <mark>altura en el papel</mark>: lo cercano se coloca <b>más abajo</b> y lo lejano <b>más arriba</b>, cerca de la línea del horizonte. Prueba a dibujar tres árboles iguales cada vez más pequeños y más altos en la hoja: ¡parecerá un camino que se aleja!</p>`,
      tamanos],
    ["Superposición y perspectiva aérea", `<p>La <mark>superposición</mark> consiste en tapar parcialmente una cosa con otra. Si una casa tapa parte de un árbol, entendemos que la casa está delante. Es muy sencillo y funciona siempre.</p><p>La <mark>perspectiva aérea</mark> imita el efecto del aire: a lo lejos, por la humedad y el polvo, los objetos se ven <b>más claros, azulados y borrosos</b>; de cerca, más oscuros, nítidos y con más detalle. Leonardo da Vinci la usó en los paisajes de fondo de sus cuadros. Fíjate en las montañas lejanas un día de excursión.</p>`,
      montanas],
    ["La línea de horizonte", `<p>La <mark>línea de horizonte</mark> es una línea horizontal imaginaria que está a la altura de nuestros ojos. En la playa coincide con la línea donde se juntan el mar y el cielo. Si nos agachamos, el horizonte baja; si subimos a un tejado, sube.</p><p>Dónde la pongas cambia el dibujo: con el horizonte <b>bajo</b> vemos mucho cielo y las cosas parecen grandes e importantes (vista de hormiga); con el horizonte <b>alto</b> vemos mucho suelo, como desde un avión (vista de pájaro).</p>`,
      svg("Horizonte bajo (vista de hormiga) y horizonte alto (vista de pájaro)", `<rect x="16" y="24" width="106" height="120" rx="6" fill="#dbe9fb"/><rect x="16" y="118" width="106" height="26" fill="#9bc59d"/><path d="M16 118 H 122" stroke="${AG}" stroke-width="2"/><rect x="138" y="24" width="106" height="120" rx="6" fill="#9bc59d"/><rect x="138" y="24" width="106" height="26" fill="#dbe9fb"/><path d="M138 50 H 244" stroke="${AG}" stroke-width="2"/><rect x="58" y="62" width="22" height="56" fill="${NA}"/><rect x="184" y="84" width="14" height="14" fill="${NA}"/>${tx(69, 162, "horizonte bajo", { s: 10.5 })}${tx(191, 162, "horizonte alto", { s: 10.5 })}`)],
    ["Un punto de fuga", `<p>En la <mark>perspectiva con un punto de fuga</mark>, todas las líneas que se alejan de nosotros (los bordes de una carretera, las vías, el suelo de un pasillo) se dirigen a un único punto del horizonte: el <b>punto de fuga</b>. Las líneas horizontales y verticales de lo que tenemos de frente siguen siendo horizontales y verticales.</p><p>Es perfecta para dibujar una calle vista de frente, un pasillo o una habitación. Primero traza el horizonte, marca el punto de fuga y une con regla las esquinas de los objetos con ese punto.</p>`,
      perspectiva1("Perspectiva con un punto de fuga: un camino, una caja y unos árboles que se alejan")],
    ["Dibujar un cubo con un punto de fuga", `<p>Paso a paso: <b>1)</b> Dibuja la línea de horizonte y un punto de fuga en ella. <b>2)</b> Debajo, dibuja un cuadrado: será la cara de delante. <b>3)</b> Con regla, une las cuatro esquinas del cuadrado con el punto de fuga mediante líneas finas (las líneas de fuga).</p><p><b>4)</b> Decide la profundidad del cubo y traza una línea horizontal y otra vertical que corten las líneas de fuga: es la cara de atrás. <b>5)</b> Repasa el contorno del cubo y borra las líneas de ayuda. Si el cuadrado está bajo el horizonte, verás la cara de arriba del cubo.</p>`,
      svg("Pasos para dibujar un cubo con un punto de fuga", `<path d="M14 40 H 246" stroke="${AG}" stroke-width="1.6"/><circle cx="190" cy="40" r="4" fill="${RO}"/><path d="M190 40 L 40 90 M190 40 L 110 90 M190 40 L 110 150 M190 40 L 40 150" stroke="${RO}" stroke-width="1" stroke-dasharray="4 3"/><rect x="40" y="90" width="70" height="60" fill="${AZ}" fill-opacity=".25" stroke="${AZ}" stroke-width="2.4"/><path d="M40 90 L 85 75 L 134 75 L 110 90 Z" fill="${AZ}" fill-opacity=".12" stroke="${AZ}" stroke-width="2.4"/><path d="M110 90 L 134 75 L 134 117 L 110 150 Z" fill="${AZ}" fill-opacity=".4" stroke="${AZ}" stroke-width="2.4"/>${tx(75, 168, "1 cuadrado + líneas de fuga", { s: 10 })}${tx(196, 28, "punto de fuga", { s: 10, c: RO })}`)],
    ["Dos puntos de fuga", `<p>Cuando vemos un objeto <b>de esquina</b>, como un edificio desde una acera, usamos la <mark>perspectiva con dos puntos de fuga</mark>. Marcamos dos puntos en el horizonte, uno a cada lado de la hoja. Las líneas de la cara izquierda van a un punto y las de la cara derecha, al otro. Las aristas verticales siguen siendo verticales.</p><p>Es la perspectiva que usan los arquitectos y los dibujantes de videojuegos para mostrar edificios y ciudades. Empieza por la arista más cercana y une sus extremos con los dos puntos de fuga.</p>`,
      perspectiva2("Perspectiva con dos puntos de fuga: un edificio visto de esquina"), "pl3b"],
    ["La perspectiva en el arte", `<p>Algunos cuadros famosos son lecciones de perspectiva. En <i>La última cena</i> de Leonardo, todas las líneas del techo y de las paredes llevan a la cabeza de Jesús, que está justo en el punto de fuga: así nuestra mirada va directa al centro.</p><p>En <i>Las Meninas</i>, Velázquez creó un espacio tan profundo que parece que podríamos entrar en la habitación. Otros artistas, como M. C. Escher, jugaron a <b>engañar</b> con la perspectiva, dibujando escaleras imposibles que suben y bajan a la vez.</p>`,
      L.filas("Perspectiva en obras famosas", [["Leonardo", "La última cena: un punto de fuga", AZ], ["Velázquez", "Las Meninas: espacio profundo", RO], ["Escher", "escaleras imposibles", VE]], "En el museo")],
    ["Taller: mi calle en perspectiva", `<p>Dibuja una calle vista desde el centro de la calzada. <b>1)</b> Traza el horizonte a media altura y el punto de fuga en el centro. <b>2)</b> Dibuja las aceras como dos líneas que salen de las esquinas de abajo hacia el punto. <b>3)</b> Levanta edificios con rectángulos de frente y une sus esquinas con el punto de fuga.</p><p><b>4)</b> Añade farolas y árboles cada vez más pequeños. <b>5)</b> Colorea lo cercano con colores vivos y lo lejano más claro y azulado. <b>Consejo:</b> usa regla y lápiz suave para las líneas de ayuda; así las borrarás fácilmente.</p>`,
      L.filas("Pasos para dibujar una calle", [["1", "Horizonte y punto de fuga.", AZ], ["2", "Aceras hacia el punto.", VE], ["3", "Edificios unidos al punto.", NA], ["4", "Farolas cada vez más pequeñas.", RO]], "Paso a paso")],
  ],
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    ["En tu dibujo, dos niños iguales: uno debe parecer lejos. ¿Qué haces?", ["Dibújalo más pequeño.", "Colócalo más arriba, cerca del horizonte.", "Puedes hacer que el cercano lo tape un poco."], "Más pequeño, más arriba y, si quieres, parcialmente tapado."],
    ["¿Qué perspectiva usarías para dibujar un pasillo visto de frente?", ["Las paredes, el suelo y el techo se alejan hacia el fondo.", "Todas esas líneas van a un mismo punto."], "Perspectiva con un punto de fuga."],
    ["¿Cómo pintas unas montañas muy lejanas?", ["Perspectiva aérea: el aire aclara los colores.", "Más claras, azuladas y con pocos detalles."], "Con colores claros y azulados, sin detalles."],
  ],
  errores: [
    "Poner el punto de fuga fuera de la línea de horizonte.",
    "Inclinar las líneas verticales: en estas perspectivas siguen siendo verticales.",
    "Dibujar las cosas lejanas del mismo tamaño que las cercanas.",
    "Trazar las líneas de ayuda muy marcadas y no poder borrarlas.",
    "Pintar lo lejano con colores más vivos que lo cercano.",
  ],
  ejercicios: [
    ["¿Qué es la perspectiva?", "Técnicas para que un dibujo plano parezca tener profundidad."],
    ["¿Qué es la línea de horizonte?", "Una línea horizontal imaginaria a la altura de nuestros ojos."],
    ["¿Qué es el punto de fuga?", "El punto del horizonte al que parecen dirigirse las líneas que se alejan."],
    ["Escribe tres trucos para dar profundidad sin punto de fuga.", "Tamaño, altura en el papel, superposición (y perspectiva aérea)."],
    ["¿Qué pasa con los colores de lo lejano en la perspectiva aérea?", "Se ven más claros, azulados y borrosos."],
    ["¿Cuándo se usan dos puntos de fuga?", "Cuando vemos un objeto de esquina, como un edificio."],
    ["Si el horizonte está muy bajo, ¿qué vemos?", "Mucho cielo; las cosas parecen grandes (vista de hormiga)."],
    ["Dibuja un cubo con un punto de fuga.", "Respuesta gráfica: cuadrado, líneas de fuga al punto y cara trasera."],
    ["¿Qué artista renacentista puso el punto de fuga en la cabeza de Jesús?", "Leonardo da Vinci, en La última cena."],
    ["Dibuja unas vías de tren que se alejan.", "Respuesta gráfica: dos líneas que se juntan en el punto de fuga y traviesas cada vez más juntas."],
  ],
  figura: ["La perspectiva", L.pasos("Cómo crear profundidad", [["Tamaño", ["lejos =", "más pequeño"], AZ], ["Superposición", ["lo de delante", "tapa"], VE], ["Color", ["lejos = claro", "y azulado"], NA], ["Punto de fuga", ["líneas que se", "juntan"], RO]])],
  video: "pl3v",
  quiz: [
    ["La perspectiva sirve para…", ["dar sensación de profundidad", "mezclar colores", "crear texturas"], "Profundidad en un plano."],
    ["Lo lejano se dibuja…", ["más pequeño", "más grande", "igual"], "Truco del tamaño."],
    ["El punto de fuga está…", ["en la línea de horizonte", "en el suelo", "fuera del papel siempre"], "En el horizonte."],
    ["La línea de horizonte está a la altura de…", ["nuestros ojos", "nuestros pies", "las nubes"], "Altura de la vista."],
    ["Si una casa tapa un árbol, la casa está…", ["delante", "detrás", "a la misma distancia"], "Superposición."],
    ["En la perspectiva aérea, lo lejano es…", ["más claro y azulado", "más oscuro", "más nítido"], "Efecto del aire."],
    ["Para un edificio visto de esquina usamos…", ["dos puntos de fuga", "un punto de fuga", "ninguno"], "Dos caras."],
    ["Las aristas verticales en perspectiva…", ["siguen siendo verticales", "se inclinan al punto de fuga", "desaparecen"], "Verticales."],
    ["¿En qué época se descubrieron las reglas de la perspectiva?", ["Renacimiento", "Prehistoria", "Edad Media"], "Siglo XV."],
    ["Con el horizonte muy alto vemos…", ["mucho suelo", "mucho cielo", "nada"], "Vista de pájaro."],
  ],
  examen: [
    ["Las líneas que van al punto de fuga se llaman…", ["líneas de fuga", "líneas de horizonte", "contornos"], "Líneas de fuga."],
    ["Un pasillo de frente se dibuja con…", ["un punto de fuga", "dos puntos de fuga", "superposición solo"], "Un punto."],
    ["Lo cercano se coloca en el papel…", ["más abajo", "más arriba", "en el horizonte"], "Truco de altura."],
    ["¿Quién usó la perspectiva aérea en sus fondos?", ["Leonardo da Vinci", "Picasso", "Miró"], "Renacimiento."],
  ],
  feynman: ["Qué es la perspectiva y por qué la necesitamos", "Trucos de profundidad: tamaño, altura, superposición y color", "Qué son la línea de horizonte y el punto de fuga", "Diferencia entre uno y dos puntos de fuga"],
  mapa: ["LA PERSPECTIVA", "var(--bac)", [["Trucos", "tamaño · altura · superposición", AZ], ["Aérea", "lejos: claro y azulado", AG], ["Un punto de fuga", "calle o pasillo de frente", RO], ["Dos puntos de fuga", "edificio de esquina", VE]], 240],
  tarjetas: [
    ["Perspectiva", "Dar profundidad a un dibujo plano."],
    ["Línea de horizonte", "Línea a la altura de los ojos."],
    ["Punto de fuga", "Punto del horizonte donde se juntan las líneas."],
    ["Superposición", "Lo de delante tapa lo de detrás."],
    ["Perspectiva aérea", "Lo lejano, claro y azulado."],
    ["Un punto de fuga", "Objetos de frente: calle, pasillo."],
    ["Dos puntos de fuga", "Objetos de esquina: edificio."],
    ["Renacimiento", "Época en que se descubrieron sus reglas."],
  ],
  familias: ["Mirad juntos una calle recta o unas vías y buscad dónde parecen juntarse las líneas.", "Haced fotos de pasillos o carreteras y marcad sobre ellas el punto de fuga con un rotulador."],
  saberes: "Representación del espacio: profundidad, línea de horizonte, punto de fuga y perspectiva; análisis de obras (Educación Plástica y Visual)",
  ideas: ["Dibujo de una calle con un punto de fuga.", "Buscar el punto de fuga en reproducciones de cuadros renacentistas.", "Fotografías del colegio con distintas alturas de horizonte."],
  fuentes: [["Museo Nacional del Prado: Las Meninas", "https://www.museodelprado.es/coleccion/obra-de-arte/las-meninas/9fdc7800-9ade-48b0-ab8b-edee94ea877f"], ["Real Academia Española: perspectiva", "https://dle.rae.es/perspectiva"]],
});
