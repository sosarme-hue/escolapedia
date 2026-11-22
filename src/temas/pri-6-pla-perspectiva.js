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

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Representar objetos en escorzo", "Dibujar edificios altos con tres puntos de fuga", "Conocer el trampantojo, la anamorfosis y la perspectiva isométrica", "Medir y encajar del natural con el lápiz y el visor"],
  lectura: { titulo: "El agujero en el suelo", html: `<p>El lunes por la mañana, el patio del colegio amaneció con un agujero enorme en el suelo, junto a la fuente. Desde la puerta se veían las grietas, los bordes rotos y, al fondo, un río de lava naranja.</p><p>Nadie se atrevía a acercarse. La conserje puso unas sillas alrededor para que nadie se cayera. Algunos pequeños lloraban.</p><p>Entonces apareció el profesor de Plástica con una sonrisa traviesa.</p><p>—Acercaos sin miedo —dijo—. Pero no os pongáis aquí: id al otro lado.</p><p>Los de 6.º cruzaron con cuidado. Desde el otro lado, el agujero se convirtió en una mancha alargadísima y deformada de colores. ¡Era un dibujo con tizas!</p><p>—Se llama anamorfosis —explicó el profesor—. Solo parece real desde un punto exacto. Lo he dibujado este fin de semana con ayuda de unos amigos.</p><p>Toda la mañana, el patio fue una fila de alumnos haciéndose fotos «a punto de caer» al volcán. Por la tarde llovió y el agujero desapareció.</p><p>—Bueno —dijo Martina—, al menos ya sabemos que la perspectiva puede engañar a todo un colegio.</p>` },
  tras: {
    "Superposición y perspectiva aérea": [
      ["El escorzo", `<p>Cuando un objeto alargado <b>apunta hacia nosotros</b>, lo vemos mucho más corto de lo que es. Un brazo estirado hacia la cámara parece una mano enorme pegada a un hombro; un lápiz que apunta a tus ojos se ve casi como un círculo. Representar esta reducción se llama <mark>escorzo</mark>.</p><p>El escorzo es una de las partes más difíciles del dibujo, porque nuestro cerebro «sabe» cuánto mide un brazo y tiende a dibujarlo largo. Para conseguirlo hay que dibujar <b>lo que ves</b>, no lo que sabes:</p><ul><li>Lo más cercano se ve <b>más grande</b> (la mano, el pie).</li><li>Las partes se <b>superponen</b>: la mano tapa parte del brazo.</li><li>Los contornos se acortan y las formas se vuelven más redondas.</li></ul><p>Uno de los escorzos más famosos de la historia es la <i>Lamentación sobre Cristo muerto</i>, del pintor italiano <b>Andrea Mantegna</b> (hacia 1480): el cuerpo tumbado se ve desde los pies, que están en primer plano. En los cómics de superhéroes y en el manga, el escorzo se usa constantemente para dar fuerza: un puño que sale de la viñeta hacia el lector.</p><p>Prueba: pide a un compañero que extienda la mano hacia ti y dibújalo en un minuto. Luego compara con su brazo de perfil.</p>`,
        H6.dos("Un brazo", ["DE PERFIL", ["se ve largo", "mano pequeña", "sin solapes"], cAZ], ["EN ESCORZO", ["se ve corto", "mano enorme", "partes solapadas"], cRO])],
    ],
    "Dos puntos de fuga": [
      ["Tres puntos de fuga: mirar hacia arriba", `<p>Con dos puntos de fuga, las líneas verticales de los edificios se dibujan siempre <b>verticales y paralelas</b>. Pero si estás al pie de un rascacielos y miras hacia arriba, notarás que sus lados parecen <b>juntarse</b> en lo alto, como si el edificio se estrechara. Para dibujarlo añadimos un <b>tercer punto de fuga</b>.</p><p>Así se hace:</p><ol><li>Traza la línea de horizonte con <b>dos puntos de fuga</b> a los lados, como ya sabes.</li><li>Marca un <b>tercer punto</b> muy arriba, fuera del horizonte, si miras hacia arriba (vista de <b>hormiga</b>, en contrapicado), o muy abajo si miras desde lo alto hacia el suelo (vista de <b>pájaro</b>, en picado).</li><li>Las aristas horizontales del edificio van a los dos puntos laterales.</li><li>Las aristas verticales van ahora al tercer punto.</li></ol><p>El efecto es espectacular: los edificios parecen gigantescos y la escena gana dramatismo. Se usa mucho en el cómic, en el cine y en los videojuegos para mostrar ciudades enormes o la sensación de vértigo.</p><p>Consejo: coloca el tercer punto <b>lejos</b>, aunque tengas que pegar una tira de papel extra a la hoja. Si está demasiado cerca, el edificio se deforma demasiado.</p>`,
        H6.flujo("Tres puntos", ["horizonte|2 puntos", "3.er punto|arriba", "horizontales|a los lados", "verticales|al 3.º"], cNA), ["b_X7zlMvdBU", "Aprende a dibujar perspectiva a tres puntos de fuga", "entivoo", 152817]],
    ],
    "La perspectiva en el arte": [
      ["Engañar al ojo: trampantojo y anamorfosis", `<p>Algunos artistas usan la perspectiva no solo para representar el mundo, sino para <b>engañar</b> al espectador:</p><ul><li>El <mark>trampantojo</mark> (de «trampa ante el ojo») es una pintura tan realista que parece un objeto o un espacio de verdad: una ventana pintada en una pared ciega, una estantería con libros que no existe, un techo que parece abrirse al cielo. En la iglesia de San Ignacio, en Roma, el pintor <b>Andrea Pozzo</b> pintó a finales del siglo XVII una <b>falsa cúpula</b> sobre un techo plano: desde el punto marcado en el suelo, parece real. Hoy muchas fachadas de ciudades españolas tienen trampantojos que simulan balcones, personas asomadas o edificios antiguos.</li><li>La <mark>anamorfosis</mark> es una imagen deformada que solo se ve correctamente desde un <b>punto concreto</b> o con un espejo especial. En el cuadro <i>Los embajadores</i> (1533), de Hans Holbein, aparece en el suelo una mancha alargada extraña: si te colocas a un lado del cuadro, se convierte en una calavera.</li></ul><p>Los artistas callejeros que pintan con tiza en el suelo agujeros, cascadas o precipicios usan la anamorfosis: el dibujo está muy alargado y solo «funciona» desde donde se coloca la cámara.</p>`,
        L6.filas("Engaños visuales", [["trampantojo", "parece real", cVE], ["falsa cúpula", "Andrea Pozzo", cMO], ["anamorfosis", "desde un punto", cRO], ["Holbein", "calavera oculta", cNA]]), ["pAN70WEDeI4", "Anamorfosis, trampantojos y otras formas de engañar a tu vista", "Canal ComoYe", 44324]],
    ],
  },
  final: [
    ["Perspectiva isométrica", `<p>No todas las perspectivas tienen puntos de fuga. En la <mark>perspectiva isométrica</mark>, las líneas que son paralelas en la realidad <b>siguen siendo paralelas</b> en el dibujo, y los objetos no se hacen más pequeños al alejarse.</p><p>Se basa en tres <b>ejes</b> que forman ángulos iguales de 120° entre sí: uno vertical y dos inclinados 30° respecto a la horizontal, uno hacia cada lado. Sobre esos ejes se miden las tres dimensiones: <b>alto</b>, <b>ancho</b> y <b>fondo</b>, con sus medidas reales.</p><p>Para dibujar en isométrica es muy útil una <b>trama isométrica</b>: un papel con puntos o líneas colocados en triángulos. Basta con unir los puntos para construir cubos, escaleras o casas.</p><p>¿Dónde se usa?</p><ul><li>En el <b>dibujo técnico</b>, porque permite medir las piezas directamente sobre el dibujo.</li><li>En las <b>instrucciones</b> de montaje de muebles o juguetes de construcción.</li><li>En muchos <b>videojuegos</b> de construcción y estrategia, donde el mundo se ve desde una esquina y desde arriba.</li><li>En mapas e infografías de ciudades.</li></ul><p>No es tan realista como la perspectiva cónica (la de los puntos de fuga), pero es clara, ordenada y fácil de medir.</p>`,
      H6.dos("Dos perspectivas", ["CÓNICA", ["puntos de fuga", "lo lejano, pequeño", "realista"], cAZ], ["ISOMÉTRICA", ["sin puntos de fuga", "paralelas siempre", "se puede medir"], cVE])],
    ["Dibujar del natural: medir y encajar", `<p>Cuando dibujamos lo que tenemos delante, un objeto, un paisaje o una persona, es fácil equivocarse en las <b>proporciones</b>. Los artistas usan trucos sencillos:</p><ul><li><b>Medir con el lápiz</b>: estira el brazo del todo, con el lápiz vertical, cierra un ojo y haz coincidir la punta con un extremo del objeto. Marca con el pulgar el otro extremo. Así puedes comparar: «la botella es tres veces más alta que ancha».</li><li><b>Comprobar ángulos</b>: con el lápiz horizontal o vertical delante del modelo, observa qué inclinación tienen los bordes de un tejado o de una mesa.</li><li><b>El visor</b>: un cartón con un agujero rectangular, como una ventanita. Te ayuda a elegir el encuadre y a ver la escena como una imagen plana.</li><li><b>La cuadrícula</b>: en el siglo XVI, el artista alemán <b>Alberto Durero</b> mostró en un grabado a un dibujante mirando a su modelo a través de un marco con hilos cuadriculados, y copiando lo que veía en cada casilla sobre un papel con la misma cuadrícula.</li></ul><p>Encajar consiste en dibujar primero, con líneas suaves, las formas generales y sus proporciones (como cajas y óvalos), y solo después añadir detalles. Si el encaje está bien, el dibujo final saldrá bien.</p>`,
      H6.rueda("Dibujar del natural", "ENCAJAR", [["medir", cNA], ["ángulos", cAZ], ["visor", cMO], ["cuadrícula", cRO]])],
  ],
  ejemplos: [
    ["Dibujas un rascacielos desde la acera mirando hacia arriba. ¿Dónde colocas el tercer punto de fuga?", ["Miras hacia arriba (contrapicado).", "Las verticales convergen en lo alto."], "Muy arriba, por encima del edificio."],
    ["En un dibujo, las vías del tren siguen paralelas y no se juntan al alejarse. ¿Qué perspectiva es?", ["No hay punto de fuga.", "Las paralelas se mantienen."], "Perspectiva isométrica."],
  ],
  errores: ["Dibujar un brazo en escorzo con su longitud real.", "Colocar el tercer punto de fuga demasiado cerca del edificio."],
  ejercicios: [
    ["b", "¿Qué es el escorzo?", "La reducción aparente de un objeto que apunta hacia nosotros."],
    ["b", "¿Para qué sirve el tercer punto de fuga?", "Para dibujar objetos altos vistos desde abajo o desde arriba."],
    ["b", "¿Qué significa trampantojo?", "Trampa ante el ojo."],
    ["b", "¿Qué ángulo forman los ejes isométricos?", "120°."],
    ["b", "¿Qué es un visor?", "Un cartón con un agujero para encuadrar."],
    ["m", "¿Qué esconde Los embajadores de Holbein?", "Una calavera en anamorfosis."],
    ["m", "Explica cómo se mide con el lápiz.", "Brazo estirado, un ojo cerrado, comparar medidas marcando con el pulgar."],
    ["m", "Compara perspectiva cónica e isométrica.", "La cónica tiene puntos de fuga y es realista; la isométrica mantiene paralelas y se puede medir."],
    ["m", "¿Qué pintó Andrea Pozzo en San Ignacio?", "Una falsa cúpula sobre un techo plano."],
    ["m", "¿Qué es encajar un dibujo?", "Trazar primero las formas generales y proporciones."],
    ["a", "Dibuja una calle de rascacielos con tres puntos de fuga.", "Respuesta abierta."],
    ["a", "Diseña tu habitación en perspectiva isométrica con trama.", "Respuesta abierta."],
    ["a", "Dibuja la mano de un compañero en escorzo.", "Respuesta abierta."],
    ["a", "Crea un trampantojo pequeño para una pared de clase.", "Respuesta abierta."],
  ],
  quiz: [
    ["La Lamentación sobre Cristo muerto es famosa por su…", ["escorzo", "color", "puntillismo"], "Escorzo."],
    ["La vista de hormiga es…", ["desde abajo", "desde arriba", "de frente"], "Tres puntos."],
    ["Una anamorfosis se ve bien…", ["desde un punto concreto", "desde cualquier lugar", "solo de noche"], "Engaños."],
    ["La perspectiva isométrica se usa en…", ["instrucciones de montaje", "retratos realistas", "paisajes al óleo"], "Isométrica."],
    ["Durero dibujaba con un marco…", ["cuadriculado", "de espejos", "de colores"], "Del natural."],
  ],
  examen: [
    ["En la lectura, ¿qué era el agujero del patio?", ["una anamorfosis con tiza", "una obra real", "un charco"], "Lectura."],
    ["En perspectiva con tres puntos, las aristas verticales van…", ["al tercer punto", "a ningún punto", "al horizonte"], "Tres puntos."],
  ],
  tarjetas: [
    ["Escorzo", "Lo que apunta hacia ti se acorta; Mantegna."],
    ["Tres puntos", "Vista de hormiga o de pájaro; verticales al tercer punto."],
    ["Engaños", "Trampantojo (Pozzo) y anamorfosis (Holbein)."],
    ["Isométrica y del natural", "Ejes a 120°; medir con el lápiz, visor, cuadrícula."],
  ],
  glosario: [
    ["Escorzo", "Representación acortada de lo que apunta hacia el espectador."],
    ["Vista de hormiga", "Vista desde abajo hacia arriba."],
    ["Vista de pájaro", "Vista desde arriba hacia abajo."],
    ["Tercer punto de fuga", "Punto donde convergen las verticales."],
    ["Trampantojo", "Pintura que engaña haciendo creer que algo es real."],
    ["Anamorfosis", "Imagen deformada que solo se ve bien desde un punto."],
    ["Perspectiva cónica", "Perspectiva con puntos de fuga."],
    ["Perspectiva isométrica", "Perspectiva con ejes a 120° y paralelas que se mantienen."],
    ["Trama isométrica", "Papel con puntos en triángulos para dibujar en isométrica."],
    ["Encajar", "Trazar las formas generales antes de los detalles."],
    ["Visor", "Marco que ayuda a encuadrar."],
    ["Proporción", "Relación de tamaño entre las partes."],
  ],
  situacion: {
    titulo: "Ciudad imposible",
    reto: "La clase crea una gran ciudad dibujada combinando distintas perspectivas y un trampantojo.",
    pasos: ["Dibujad del natural un edificio del barrio, encajando con el lápiz.", "Cread rascacielos con tres puntos de fuga y casas en isométrica.", "Añadid un trampantojo o una anamorfosis en el suelo del patio.", "Montad la ciudad en un mural y fotografiad la anamorfosis desde su punto."],
    producto: "Un mural de ciudad en perspectiva y una anamorfosis fotografiada.",
    evaluacion: ["Aplica distintos tipos de perspectiva.", "Mide y encaja con proporción.", "Comprende los engaños visuales.", "Colabora en un proyecto de grupo."],
  },
});
