// Educación Plástica, Visual y Audiovisual 1º ESO: el plano y la forma. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, poligono, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "El plano y la forma",
  minutos: 50,
  objetivos: ["Reconocer el plano como elemento del lenguaje visual", "Clasificar las formas en geométricas y orgánicas, abiertas y cerradas", "Usar formas básicas para construir dibujos y la silueta para representar objetos", "Crear sensación de profundidad con la superposición y el tamaño de los planos"],
  claves: ["plano", "forma", "contorno", "silueta", "formas geométricas", "formas orgánicas"],
  pregunta: {
    texto: "¿Por qué reconoces una taza, un gato o una bicicleta aunque solo veas su sombra en una pared?",
    respuesta: "Porque reconocemos los objetos por su <b>forma</b>, y su contorno basta para identificarlos. La sombra es una <b>silueta</b>: una forma plana sin detalles. <mark>Cuanto más característica es la forma, menos información necesitamos</mark>. Por eso funcionan tan bien los pictogramas y las sombras chinescas.",
  },
  bloques: [
    {
      html: `<h3>El plano</h3><p>En plástica, un <b>plano</b> es una <b>superficie</b> limitada por líneas o por cambios de color. Tiene dos dimensiones: largo y ancho.</p><p>Hablamos de plano en dos sentidos:</p><ul><li>El <b>plano soporte</b>: la superficie sobre la que trabajamos (el papel, el lienzo, la pantalla).</li><li>Los <b>planos de la imagen</b>: las superficies que forman las figuras y el fondo. Un collage de papeles recortados está hecho de planos.</li></ul><p>Cuando en una imagen unos planos tapan a otros, el ojo entiende que están a distinta distancia, y así aparece la <mark>sensación de profundidad</mark>.</p>`,
      svg: svg("Tres planos de colores superpuestos: el que tapa a los otros parece más cercano", `<rect x="30" y="30" width="120" height="90" rx="4" fill="var(--pen)" fill-opacity=".35" stroke="var(--pen)" stroke-width="2"/><rect x="80" y="60" width="120" height="80" rx="4" fill="var(--sun)" fill-opacity=".55" stroke="var(--sun)" stroke-width="2"/><circle cx="190" cy="56" r="34" fill="var(--red)" fill-opacity=".55" stroke="var(--red)" stroke-width="2"/>${t(60, 50, "fondo", { c: "var(--pen)", s: 11 })}${t(140, 126, "delante", { s: 11 })}${t(130, 166, "superposición = profundidad", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>¿Qué es la forma?</h3><p>La <b>forma</b> es el aspecto exterior de un objeto, lo que lo distingue de los demás. En una imagen plana, la forma queda definida por su <b>contorno</b>: la línea que separa la figura del fondo.</p><p>Toda forma tiene:</p><ul><li><b>Contorno</b>: su límite.</li><li><b>Tamaño</b>: grande o pequeña, en relación con otras y con el soporte.</li><li><b>Posición</b> y <b>dirección</b>: dónde está y hacia dónde «apunta».</li><li><b>Color</b> y <b>textura</b>: lo que hay dentro del contorno.</li></ul><p>Cambiando cualquiera de estas cualidades, el mensaje de la imagen cambia.</p>`,
    },
    {
      html: `<h3>Formas geométricas y orgánicas</h3><ul><li><b>Geométricas</b>: tienen contornos regulares que se pueden trazar con regla y compás: cuadrado, círculo, triángulo, hexágono… Transmiten <b>orden</b>, precisión y estabilidad. Abundan en la arquitectura, el diseño y las señales.</li><li><b>Orgánicas</b>: tienen contornos irregulares y libres, como los de la naturaleza: una hoja, una nube, una piedra, el cuerpo humano. Transmiten <b>naturalidad</b>, vida y movimiento.</li></ul><p>Muchos artistas combinan las dos: <b>Antoni Gaudí</b> se inspiró en formas orgánicas para sus edificios; <b>Piet Mondrian</b> usó solo rectángulos y líneas rectas.</p>`,
      svg: svg("A la izquierda formas geométricas: cuadrado, triángulo y círculo; a la derecha formas orgánicas: una hoja y una nube", `<rect x="20" y="30" width="40" height="40" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>${poligono(98, 52, 24, 3, { c: "var(--pen)", fill: "var(--pen)", op: 0.3 })}<circle cx="60" cy="110" r="22" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2"/>${t(70, 160, "geométricas", { c: "var(--pen)", s: 12 })}<path d="M170 110 C 160 70 190 40 226 34 C 226 70 210 104 170 110 Z" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)" stroke-width="2"/><path d="M170 110 L 214 46" stroke="var(--leaf)" stroke-width="1.5"/><path d="M160 140 c -12 0 -12 -16 0 -16 c 2 -10 18 -10 22 -2 c 8 -6 20 0 18 8 c 10 2 8 12 -2 12 Z" fill="var(--sun)" fill-opacity=".35" stroke="var(--sun)" stroke-width="2"/>${t(196, 160, "orgánicas", { c: "var(--leaf)", s: 12 })}`),
      video: vb("plaB"),
    },
    {
      html: `<h3>Formas abiertas y cerradas, simples y complejas</h3><ul><li><b>Cerradas</b>: su contorno es continuo y separa claramente el interior del exterior (un círculo).</li><li><b>Abiertas</b>: su contorno tiene interrupciones y la forma «se escapa» hacia el fondo (una espiral, una letra C). Dan más sensación de ligereza.</li><li><b>Simples</b>: se reconocen al instante, con pocos elementos (un logotipo, una señal).</li><li><b>Complejas</b>: tienen muchos detalles y requieren más tiempo de observación (un retrato realista).</li></ul><p>También pueden ser <b>figurativas</b> (representan algo reconocible) o <b>abstractas</b> (no imitan nada real, solo juegan con colores y formas).</p>`,
    },
    {
      html: `<h3>Dibujar con formas básicas</h3><p>Casi todo se puede construir con <b>formas sencillas</b>: círculos, óvalos, rectángulos y triángulos. Los ilustradores empiezan así antes de añadir detalles.</p><ol><li>Observa el objeto y busca qué figuras geométricas lo forman (un gato: un círculo para la cabeza, un óvalo para el cuerpo, triángulos para las orejas).</li><li>Dibújalas suave, con líneas que se puedan borrar: es el <b>encaje</b>.</li><li>Une las formas con un <b>contorno</b> continuo.</li><li>Borra las líneas de construcción y añade detalles, color y textura.</li></ol><p>Este método ayuda a respetar las <b>proporciones</b> desde el principio.</p>`,
      svg: svg("Un gato dibujado con formas básicas: círculo para la cabeza, óvalo para el cuerpo y triángulos para las orejas", `<ellipse cx="150" cy="118" rx="58" ry="34" fill="none" stroke="var(--pen)" stroke-width="2" stroke-dasharray="5 3"/><circle cx="86" cy="80" r="30" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/><path d="M64 62 L 66 34 L 84 52 M92 52 L 108 34 L 110 62" fill="none" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="5 3"/><path d="M206 110 C 236 96 240 70 226 56" fill="none" stroke="var(--sun)" stroke-width="3"/>${t(86, 84, "círculo", { c: "var(--red)", s: 10 })}${t(160, 122, "óvalo", { c: "var(--pen)", s: 11 })}${t(130, 172, "encaje con formas básicas", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>La silueta</h3><p>La <b>silueta</b> es una forma plana rellena de un solo color, normalmente oscuro, sin detalles interiores. Solo se ve el contorno.</p><p>Para que una silueta se entienda, hay que elegir el <b>punto de vista</b> que mejor muestre la forma: una taza se reconoce de lado (con el asa), no desde arriba.</p><p>Usos de la silueta:</p><ul><li><b>Pictogramas</b> y señales: siluetas de personas, animales, objetos.</li><li><b>Contraluz</b> en fotografía: la figura oscura sobre un cielo brillante.</li><li><b>Sombras chinescas</b> y teatro de sombras.</li><li>Recortables de papel, como los de las tradiciones de recortado en China o en los retratos de perfil del siglo XVIII.</li></ul>`,
    },
    {
      html: `<h3>Forma y espacio: crear profundidad en el plano</h3><p>Aunque el papel es plano, podemos sugerir que unas formas están más cerca y otras más lejos:</p>${tabla(["Recurso", "Cómo funciona"], [["Superposición", "la forma que tapa a otra parece más cercana"], ["Tamaño", "lo grande parece cerca; lo pequeño, lejos"], ["Posición", "lo que está más arriba en el papel suele parecer más lejano"], ["Color", "los colores vivos se acercan; los apagados y azulados se alejan"], ["Nitidez", "lo detallado parece cerca; lo borroso, lejos"]])}<p>Combinando varios recursos, un paisaje con montañas, árboles y una casa puede tener mucha profundidad sin usar la perspectiva técnica.</p>`,
      video: vb("plaB2"),
    },
    {
      html: `<h3>Formas en el arte y el diseño</h3><ul><li><b>Henri Matisse</b>, ya mayor, «dibujaba con tijeras»: recortaba papeles pintados y creaba composiciones de formas orgánicas, como en sus famosos papeles recortados.</li><li><b>Kazimir Malévich</b> pintó un cuadrado negro sobre fondo blanco: la forma geométrica pura como obra de arte.</li><li><b>Joan Miró</b> mezclaba formas orgánicas, estrellas y manchas libres.</li><li>Los <b>logotipos</b> buscan formas simples y memorables que se reconozcan en un segundo.</li></ul><p>Actividad: crea un collage con papeles de colores recortados a mano (formas orgánicas) y con tijera y regla (geométricas), y juega con la superposición.</p>`,
    },
  ],
  figura: {
    titulo: "El plano y la forma en un vistazo",
    svg: filas("Resumen: plano como superficie; forma definida por el contorno; geométricas y orgánicas; abiertas y cerradas; formas básicas para dibujar; silueta; recursos de profundidad", [["Plano", "superficie de dos dimensiones", "var(--pen)"], ["Forma", "contorno · tamaño · posición", "var(--inf)"], ["Geométricas", "regulares · orden", "var(--sun)"], ["Orgánicas", "irregulares · naturaleza", "var(--leaf)"], ["Silueta", "forma plana sin detalles", "var(--red)"], ["Profundidad", "superposición · tamaño · color", "var(--ink)"]], 200),
  },
  video: vg("plaV"),
  quiz: mezcla([
    { q: "Un plano en plástica es…", o: ["una superficie", "una línea", "un punto"], a: 0, e: "Dos dimensiones." },
    { q: "La forma de una figura plana se define por…", o: ["su contorno", "su textura", "su soporte"], a: 0, e: "Su límite." },
    { q: "Una hoja de árbol es una forma…", o: ["orgánica", "geométrica", "abstracta"], a: 0, e: "Irregular, natural." },
    { q: "Un hexágono es una forma…", o: ["geométrica", "orgánica", "abierta"], a: 0, e: "Regular." },
    { q: "Una forma cuyo contorno tiene huecos es…", o: ["abierta", "cerrada", "geométrica"], a: 0, e: "Se escapa al fondo." },
    { q: "Una forma rellena de un color sin detalles es una…", o: ["silueta", "textura", "trama"], a: 0, e: "Solo contorno." },
    { q: "Si una forma tapa a otra, parece…", o: ["más cercana", "más lejana", "más pequeña"], a: 0, e: "Superposición." },
    { q: "Lo pequeño en un dibujo suele parecer…", o: ["lejano", "cercano", "más importante"], a: 0, e: "Tamaño." },
    { q: "¿Quién «dibujaba con tijeras»?", o: ["Matisse", "Mondrian", "Velázquez"], a: 0, e: "Papeles recortados." },
    { q: "Las líneas suaves que encajan las formas básicas se llaman…", o: ["encaje", "silueta", "contorno final"], a: 0, e: "Construcción." },
  ]),
  examen: mezcla([
    { q: "Los colores apagados y azulados sugieren…", o: ["lejanía", "cercanía", "peso"], a: 0, e: "Perspectiva atmosférica." },
    { q: "Una obra que no representa nada reconocible es…", o: ["abstracta", "figurativa", "realista"], a: 0, e: "Solo formas y colores." },
    { q: "Para que una silueta se entienda hay que elegir bien…", o: ["el punto de vista", "el color", "la textura"], a: 0, e: "La taza de lado." },
  ]),
  feynman: ["Qué es un plano en una imagen", "Diferencia entre formas geométricas y orgánicas", "Cómo se dibuja algo partiendo de formas básicas", "Qué es una silueta y para qué se usa", "Cinco formas de crear profundidad sin perspectiva"],
  mapa: mapa("EL PLANO Y LA FORMA", "var(--eso)", [
    ["Plano", "superficie · soporte", "var(--pen)"],
    ["Tipos de forma", "geométrica · orgánica", "var(--leaf)"],
    ["Silueta", "contorno · punto de vista", "var(--red)"],
    ["Profundidad", "superponer · tamaño · color", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Plano", "Superficie de dos dimensiones."],
    ["Contorno", "Línea que limita una forma."],
    ["Forma geométrica", "Contorno regular, trazable con regla y compás."],
    ["Forma orgánica", "Contorno irregular, como en la naturaleza."],
    ["Forma abierta", "Su contorno no está cerrado del todo."],
    ["Silueta", "Forma plana de un solo color, sin detalles."],
    ["Superposición", "Lo que tapa parece estar delante."],
    ["Encaje", "Dibujo previo con formas básicas."],
  ],
  familias: ["Jugad a las sombras chinescas con las manos y una linterna.", "Dibujad juntos un animal partiendo solo de círculos y triángulos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "El plano y la forma: tipos de formas, contorno y silueta, relación figura-fondo y recursos de profundidad en el plano (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Collage de papeles recortados a lo Matisse.", "Teatro de sombras con siluetas de cartulina.", "Encaje de objetos del aula con formas básicas."],
  },
  fuentes: [RD, { t: "Museo Nacional Centro de Arte Reina Sofía: colección", url: "https://www.museoreinasofia.es/coleccion" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Dibuja un búho con formas básicas.", pasos: ["Un óvalo grande para el cuerpo y un círculo encima para la cabeza.", "Dos círculos para los ojos, un triángulo para el pico y dos triángulos pequeños para las orejas.", "Une con un contorno continuo, borra el encaje y añade plumas con líneas cortas."], resultado: "Un búho proporcionado construido con formas simples." },
    { enunciado: "Crea un paisaje con profundidad usando solo papeles recortados.", pasos: ["Recorta montañas grandes en colores apagados y pégalas arriba.", "Delante, colinas medianas en verdes más vivos que tapen parte de las montañas.", "Abajo, árboles grandes y de colores intensos que tapen las colinas."], resultado: "Tres planos superpuestos que dan sensación de distancia." },
    { enunciado: "Elige el mejor punto de vista para la silueta de una tetera.", pasos: ["Desde arriba solo se vería un círculo: no se reconoce.", "De frente se pierde el asa o el pitorro.", "De perfil se ven cuerpo, asa, pitorro y tapa."], resultado: "La vista de perfil." },
  ],
  errores: [
    "Apretar mucho el lápiz en el encaje y no poder borrar luego las formas de construcción.",
    "Dibujar siluetas desde puntos de vista en los que el objeto no se reconoce.",
    "Pensar que las formas geométricas no aparecen en la naturaleza (panales, cristales…).",
    "Colocar todas las formas del mismo tamaño y sin superponer, lo que da un dibujo plano.",
  ],
  ejercicios: [
    { q: "Escribe tres objetos de forma geométrica y tres de forma orgánica de tu entorno.", sol: "Por ejemplo: ventana, reloj, señal; nube, manzana, mano." },
    { q: "Dibuja una forma abierta y una cerrada. ¿Qué sensación transmite cada una?", sol: "La abierta, ligereza y movimiento; la cerrada, estabilidad y peso." },
    { q: "Dibuja tres siluetas de objetos de cocina y que tus compañeros las adivinen.", sol: "Respuesta práctica: elegir puntos de vista característicos." },
    { q: "Construye un dibujo de un coche partiendo de rectángulos y círculos.", sol: "Respuesta práctica." },
    { q: "Explica con un ejemplo qué es la superposición.", sol: "Un árbol que tapa parte de una casa: el árbol parece estar delante." },
    { q: "Dibuja la misma forma en tres tamaños y colócalas para que parezcan a distinta distancia.", sol: "La grande abajo y delante; la pequeña arriba y detrás." },
    { q: "¿Qué diferencia hay entre una obra figurativa y una abstracta?", sol: "La figurativa representa algo reconocible; la abstracta solo juega con formas y colores." },
    { q: "Busca un logotipo hecho con formas geométricas y descríbelo.", sol: "Respuesta abierta." },
    { q: "Haz un collage al estilo de Matisse con formas orgánicas recortadas a mano.", sol: "Respuesta práctica." },
    { q: "¿Por qué los pictogramas usan siluetas en lugar de dibujos detallados?", sol: "Porque se entienden más rápido y desde lejos, sin depender de detalles." },
  ],
};
