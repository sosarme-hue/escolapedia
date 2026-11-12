// Educación Plástica, Visual y Audiovisual 1º ESO: el punto y la línea. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "El punto y la línea",
  minutos: 50,
  objetivos: ["Reconocer el punto y la línea como elementos básicos del lenguaje visual", "Usar el punto para crear formas, texturas, luces y sombras", "Distinguir los tipos de línea y su expresividad", "Aplicar el punto y la línea en composiciones propias"],
  claves: ["punto", "puntillismo", "línea", "trazo", "expresividad", "sombreado"],
  pregunta: {
    texto: "Si te acercas mucho a la pantalla del móvil o a una foto de un periódico, ¿qué descubres?",
    respuesta: "Que la imagen está hecha de <b>miles de puntos</b> diminutos (píxeles en la pantalla, puntos de tinta en el papel). De lejos el ojo los mezcla y vemos colores y formas continuas. <mark>El punto es el elemento más pequeño de la imagen</mark>, y con él se puede construir todo.",
  },
  bloques: [
    {
      html: `<h3>El punto: el elemento más sencillo</h3><p>En geometría el punto no tiene tamaño, pero en plástica el <b>punto</b> es la <mark>mínima mancha</mark> que deja un lápiz, un pincel o un rotulador al tocar el papel. Puede ser redondo, cuadrado, irregular, grande o pequeño.</p><p>Aunque sea tan simple, el punto es muy expresivo:</p><ul><li><b>Atrae la mirada</b>: un solo punto en un papel en blanco se convierte en el centro de atención.</li><li><b>Crea tensión</b>: si está en el centro transmite calma; desplazado hacia un borde, sensación de movimiento o inestabilidad.</li><li><b>Se relaciona con otros</b>: dos puntos parecen conectarse con una línea invisible.</li></ul>`,
      svg: svg("Un punto centrado transmite calma y otro cerca de la esquina transmite movimiento", `<rect x="16" y="30" width="104" height="104" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="68" cy="82" r="9" fill="var(--pen)"/><rect x="140" y="30" width="104" height="104" rx="6" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="226" cy="50" r="9" fill="var(--red)"/>${t(68, 154, "calma", { c: "var(--pen)", s: 12 })}${t(192, 154, "tensión", { c: "var(--red)", s: 12 })}`),
    },
    {
      html: `<h3>Usos del punto</h3><p>Agrupando puntos podemos conseguir muchos efectos:</p><ul><li><b>Formar figuras</b>: puntos alineados forman líneas; puntos agrupados, superficies.</li><li><b>Crear texturas</b>: con puntos repetidos se imita la arena, la piel o la piedra.</li><li><b>Sombrear (punteado)</b>: donde hay más puntos y más juntos, la zona se ve más <b>oscura</b>; donde hay menos y más separados, más <b>clara</b>. Así se da sensación de volumen.</li><li><b>Mezclar colores en el ojo</b>: puntos azules y amarillos muy juntos se ven verdes de lejos.</li></ul><p>Los diseñadores usan esta técnica en ilustración científica y en tatuajes, porque permite degradados muy suaves con un solo color.</p>`,
      svg: svg("Esfera sombreada con puntos: más puntos en la parte oscura y pocos en la parte iluminada", (() => { let s = ""; let k = 7; for (let i = 0; i < 260; i++) { k = (k * 9301 + 49297) % 233280; const a = (k / 233280) * Math.PI * 2; k = (k * 9301 + 49297) % 233280; const r = Math.sqrt(k / 233280) * 52; const x = 130 + r * Math.cos(a), y = 88 + r * Math.sin(a); if ((x - 100) + (y - 60) > (i % 5) * 18 - 30) s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6" fill="var(--ink)"/>`; } return `<circle cx="130" cy="88" r="54" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${s}${t(64, 40, "luz", { c: "var(--sun)", s: 12 })}${t(130, 168, "punteado: volumen", { s: 11 })}`; })()),
    },
    {
      html: `<h3>El puntillismo</h3><p>A finales del siglo XIX, pintores como <b>Georges Seurat</b> y <b>Paul Signac</b> crearon el <b>puntillismo</b>: pintaban cuadros enteros con pequeños toques de color puro, sin mezclar en la paleta. La mezcla se produce en el <mark>ojo del espectador</mark> al mirar de lejos.</p><p>Su obra más conocida es <i>Tarde de domingo en la isla de La Grande Jatte</i> (Seurat, 1884-1886), en la que tardó dos años en colocar millones de puntos.</p><p>Hoy la misma idea está en las <b>pantallas</b> (píxeles rojos, verdes y azules) y en la <b>impresión</b> (puntos de tinta cian, magenta, amarilla y negra).</p>`,
      video: vb("punB"),
    },
    {
      html: `<h3>La línea</h3><p>La <b>línea</b> es la huella de un punto en movimiento. Es el elemento más usado para dibujar: con ella hacemos contornos, bocetos, letras, planos y esquemas.</p><p>Una línea tiene:</p><ul><li><b>Dirección</b>: horizontal, vertical, inclinada.</li><li><b>Grosor</b>: fina o gruesa (y puede cambiar a lo largo del trazo).</li><li><b>Trayectoria</b>: recta, curva, quebrada, ondulada, mixta.</li><li><b>Continuidad</b>: continua, discontinua, de puntos.</li></ul><p>Según el instrumento (lápiz duro o blando, rotulador, pincel, carboncillo) la línea tiene un carácter diferente.</p>`,
      svg: svg("Muestras de línea recta, curva, quebrada, ondulada, discontinua y de grosor variable", `<path d="M20 30 H 120" stroke="var(--pen)" stroke-width="2.5"/>${t(190, 34, "recta", { s: 11 })}<path d="M20 62 Q 70 30 120 62" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${t(190, 60, "curva", { s: 11 })}<path d="M20 92 L 40 76 L 60 92 L 80 76 L 100 92 L 120 76" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${t(190, 88, "quebrada", { s: 11 })}<path d="M20 112 q 12 -12 25 0 t 25 0 t 25 0 t 25 0" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${t(190, 116, "ondulada", { s: 11 })}<path d="M20 136 H 120" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="8 6"/>${t(190, 140, "discontinua", { s: 11 })}<path d="M20 162 C 50 150 90 174 120 160" fill="none" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>${t(190, 166, "grosor variable", { s: 11 })}`, 180),
    },
    {
      html: `<h3>La expresividad de la línea</h3><p>Cada tipo de línea transmite <b>sensaciones</b> diferentes:</p>${tabla(["Línea", "Sensación"], [["Horizontal", "calma, reposo, estabilidad (el horizonte del mar)"], ["Vertical", "fuerza, elevación, firmeza (un rascacielos, un árbol)"], ["Inclinada o diagonal", "movimiento, dinamismo, desequilibrio"], ["Curva", "suavidad, armonía, delicadeza"], ["Quebrada o en zigzag", "nerviosismo, tensión, violencia (un rayo)"], ["Gruesa", "fuerza, cercanía; fina: fragilidad, lejanía"]])}<p>Los cómics usan líneas cinéticas para indicar movimiento y líneas en zigzag para los gritos o los golpes.</p>`,
      video: vb("punB2"),
    },
    {
      html: `<h3>Funciones de la línea en el dibujo</h3><ul><li><b>Contorno</b>: rodea las figuras y las separa del fondo. Es la línea de los dibujos para colorear.</li><li><b>Línea interna</b>: marca detalles dentro de la figura (pliegues, arrugas, rasgos de la cara).</li><li><b>Sombreado</b>: con líneas paralelas (<b>rayado</b>) o cruzadas (<b>tramado</b>) se oscurecen zonas y se da volumen.</li><li><b>Textura</b>: líneas cortas repetidas imitan el pelo, la hierba o la madera.</li><li><b>Boceto</b>: líneas suaves y rápidas para encajar un dibujo antes de definirlo.</li></ul><p>Un dibujo hecho solo con líneas, sin sombras ni color, se llama <b>dibujo lineal</b> o de contorno.</p>`,
    },
    {
      html: `<h3>Punto y línea en el arte</h3><ul><li><b>Vasili Kandinsky</b> escribió en 1926 el libro <i>Punto y línea sobre el plano</i>, donde estudió la fuerza expresiva de estos elementos. Sus cuadros abstractos están llenos de puntos, líneas y círculos.</li><li><b>Joan Miró</b> usaba líneas finas y negras que conectan manchas de color y estrellas.</li><li><b>Paul Klee</b> decía que dibujar era «llevar una línea a dar un paseo».</li><li>Los <b>grabados</b> y la ilustración a tinta se basan casi solo en líneas.</li></ul><p>Observar cómo estos artistas usan el punto y la línea te dará ideas para tus propias obras.</p>`,
    },
    {
      html: `<h3>Practica: técnicas con punto y línea</h3><ol><li><b>Retrato punteado</b>: calca una foto con mucho contraste y rellena las zonas oscuras con puntos de rotulador muy juntos.</li><li><b>Escala de grises</b>: dibuja cinco cuadrados y oscurécelos de menos a más con rayado y tramado.</li><li><b>Paisaje de líneas</b>: representa un mar en calma (horizontales), un bosque (verticales) y una tormenta (zigzag).</li><li><b>Paseo de la línea</b>: sin levantar el lápiz, haz una línea que se cruce consigo misma y colorea los espacios que se forman.</li></ol><p>Materiales recomendados: rotuladores calibrados (0,1 a 0,8), lápices de distinta dureza (2H, HB, 2B) y papel blanco.</p>`,
    },
  ],
  figura: {
    titulo: "El punto y la línea en un vistazo",
    svg: filas("Resumen: el punto atrae la mirada y crea tensión; agrupado forma texturas y sombras; puntillismo; la línea como punto en movimiento; tipos y expresividad; funciones", [["Punto", "mínima mancha · atrae la mirada", "var(--pen)"], ["Agrupar puntos", "formas · texturas · sombras", "var(--inf)"], ["Puntillismo", "mezcla de color en el ojo", "var(--sun)"], ["Línea", "punto en movimiento", "var(--leaf)"], ["Expresividad", "horizontal calma · diagonal movimiento", "var(--red)"], ["Funciones", "contorno · sombreado · textura", "var(--ink)"]], 210),
  },
  video: vg("punV"),
  quiz: mezcla([
    { q: "El elemento visual más simple es…", o: ["el punto", "el plano", "el color"], a: 0, e: "Mínima mancha." },
    { q: "Un punto cerca del borde transmite…", o: ["tensión o movimiento", "calma", "nada"], a: 0, e: "Desequilibrio." },
    { q: "En el punteado, la zona más oscura tiene…", o: ["más puntos y más juntos", "menos puntos", "puntos más grandes siempre"], a: 0, e: "Densidad." },
    { q: "El pintor puntillista más famoso es…", o: ["Seurat", "Velázquez", "Picasso"], a: 0, e: "La Grande Jatte." },
    { q: "La línea es…", o: ["un punto en movimiento", "un punto grande", "una mancha de color"], a: 0, e: "Su huella." },
    { q: "Una línea horizontal transmite…", o: ["calma", "nerviosismo", "fuerza ascendente"], a: 0, e: "Horizonte." },
    { q: "Una línea en zigzag transmite…", o: ["tensión", "reposo", "suavidad"], a: 0, e: "Como un rayo." },
    { q: "Sombrear con líneas cruzadas se llama…", o: ["tramado", "contorno", "puntillismo"], a: 0, e: "Líneas que se cruzan." },
    { q: "«Punto y línea sobre el plano» es un libro de…", o: ["Kandinsky", "Miró", "Seurat"], a: 0, e: "1926." },
    { q: "En las pantallas, los puntos se llaman…", o: ["píxeles", "trazos", "tramas"], a: 0, e: "Rojo, verde y azul." },
  ]),
  examen: mezcla([
    { q: "La línea que rodea una figura es…", o: ["el contorno", "el rayado", "el boceto"], a: 0, e: "La separa del fondo." },
    { q: "Una línea vertical sugiere…", o: ["elevación y firmeza", "reposo", "caída"], a: 0, e: "Un árbol." },
    { q: "¿Quién dijo que dibujar es «llevar una línea a pasear»?", o: ["Paul Klee", "Joan Miró", "Signac"], a: 0, e: "Klee." },
  ]),
  feynman: ["Por qué el punto atrae la mirada", "Cómo se sombrea con puntos", "Qué es el puntillismo y dónde lo vemos hoy", "Qué sensaciones transmiten los tipos de línea", "Para qué sirve la línea en un dibujo"],
  mapa: mapa("PUNTO Y LÍNEA", "var(--eso)", [
    ["El punto", "atención · tensión", "var(--pen)"],
    ["Usos del punto", "texturas · punteado", "var(--sun)"],
    ["La línea", "tipos y grosores", "var(--leaf)"],
    ["Expresividad", "calma · fuerza · movimiento", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Punto", "Mínima mancha sobre una superficie."],
    ["Punteado", "Sombrear con puntos más o menos juntos."],
    ["Puntillismo", "Pintar con toques de color puro que se mezclan en el ojo."],
    ["Línea", "Huella de un punto en movimiento."],
    ["Horizontal", "Calma y estabilidad."],
    ["Diagonal", "Movimiento y dinamismo."],
    ["Rayado", "Sombrear con líneas paralelas."],
    ["Tramado", "Sombrear con líneas cruzadas."],
  ],
  familias: ["Mirad con una lupa una foto del periódico y buscad los puntos de tinta.", "Haced un dibujo a dos manos: uno pone puntos y el otro los une con líneas.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Elementos básicos del lenguaje visual: el punto y la línea, sus cualidades expresivas y su uso en la creación de formas, texturas y volumen (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Retrato punteado a partir de una foto en alto contraste.", "Escala de valores con rayado y tramado.", "Análisis de una obra de Kandinsky o Miró."],
  },
  fuentes: [RD, { t: "Museo Nacional Thyssen-Bornemisza: Kandinsky y las vanguardias", url: "https://www.museothyssen.org/" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Sombrea una esfera solo con puntos.", pasos: ["Dibuja un círculo suave y decide de dónde viene la luz (arriba a la izquierda).", "Deja casi en blanco la zona cercana a la luz y llena de puntos muy juntos el lado contrario.", "En medio, ve separando los puntos poco a poco para hacer el degradado."], resultado: "Una esfera con volumen hecha solo con puntos." },
    { enunciado: "Representa la calma y la tormenta con líneas.", pasos: ["Calma: un rectángulo con líneas horizontales finas y largas.", "Tormenta: otro rectángulo con líneas en zigzag, diagonales y gruesas.", "Compara las sensaciones de los dos."], resultado: "Dos composiciones que expresan lo contrario solo con el tipo de línea." },
    { enunciado: "Haz una escala de grises con rayado y tramado.", pasos: ["Dibuja cinco cuadrados en fila.", "1: en blanco; 2: rayado separado; 3: rayado junto; 4: tramado; 5: tramado muy denso.", "Comprueba que el paso de uno a otro es gradual."], resultado: "Escala de cinco valores de claro a oscuro." },
  ],
  errores: [
    "Pensar que el punto es siempre redondo y pequeño (puede tener cualquier forma).",
    "Hacer el punteado con trazos en lugar de puntos, apretando y arrastrando el rotulador.",
    "Usar el mismo tipo de línea para todo sin pensar en lo que quiere expresar.",
    "Marcar demasiado las líneas del boceto, que luego no se pueden borrar.",
  ],
  ejercicios: [
    { q: "Dibuja tres composiciones con un solo punto: una tranquila, una inestable y una con mucho espacio vacío.", sol: "Respuesta práctica: centrado, cerca de un borde y pequeño en una gran superficie." },
    { q: "Crea con puntos tres texturas distintas: arena, piel de naranja y cielo estrellado.", sol: "Respuesta práctica: puntos finos y uniformes; puntos con huecos; puntos blancos sobre negro." },
    { q: "Explica qué es el puntillismo y nombra a dos de sus pintores.", sol: "Pintar con toques de color puro que se mezclan en el ojo. Seurat y Signac." },
    { q: "Dibuja seis tipos de línea y escribe su nombre.", sol: "Recta, curva, quebrada, ondulada, discontinua, mixta." },
    { q: "¿Qué tipo de línea usarías para dibujar un rayo, un lago y una ola? ¿Por qué?", sol: "Zigzag (tensión), horizontal (calma) y curva (movimiento suave)." },
    { q: "Haz un dibujo de contorno de tu mano sin mirar el papel.", sol: "Respuesta práctica: el dibujo «a ciegas» entrena la coordinación ojo-mano." },
    { q: "Sombrea un cubo con rayado: cada cara con una densidad distinta.", sol: "Respuesta práctica: cara iluminada sin rayado, otra con rayado suave y la de sombra con tramado." },
    { q: "Busca una obra de Kandinsky y describe cómo usa el punto y la línea.", sol: "Respuesta abierta: por ejemplo, círculos que funcionan como puntos y líneas rectas que cruzan la obra." },
    { q: "¿Por qué los dibujantes de cómic usan líneas cinéticas?", sol: "Para sugerir movimiento y velocidad en una imagen fija." },
    { q: "Haz un «paseo de la línea» sin levantar el lápiz y colorea los espacios.", sol: "Respuesta práctica." },
  ],
};
