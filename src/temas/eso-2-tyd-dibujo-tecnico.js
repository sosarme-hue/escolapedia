// Tecnología y Digitalización 2º ESO: dibujo técnico, vistas y escalas. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Dibujo técnico: vistas y escalas",
  minutos: 55,
  objetivos: ["Conocer los instrumentos de dibujo y los tipos de líneas normalizadas", "Dibujar las vistas principales (alzado, planta y perfil) de piezas sencillas", "Aplicar escalas de ampliación y reducción y acotar correctamente", "Representar objetos en perspectiva isométrica y caballera y usar programas de diseño"],
  claves: ["boceto", "croquis", "alzado", "planta", "perfil", "escala", "acotación", "perspectiva isométrica", "perspectiva caballera", "CAD"],
  pregunta: {
    texto: "Un plano de una casa cabe en un folio, pero la casa mide 12 metros de largo. ¿Cómo sabe el albañil cuánto mide cada pared de verdad?",
    respuesta: "Gracias a la <mark>escala</mark> y a las <mark>cotas</mark>. Si el plano está dibujado a escala 1:100, cada centímetro del papel son 100 cm (1 m) de la realidad. Además, las medidas reales se escriben sobre el dibujo con cotas. Así, cualquiera puede construir la casa sin ver al arquitecto.",
  },
  bloques: [
    {
      html: `<h3>El dibujo, el lenguaje de la técnica</h3><p>Para explicar cómo es un objeto que queremos fabricar, las palabras no bastan: hace falta un dibujo. El <mark>dibujo técnico</mark> es un lenguaje gráfico, común en todo el mundo, que representa los objetos con <b>precisión</b>, siguiendo unas <b>normas</b> (en España, las normas UNE, basadas en las internacionales ISO). Así, un plano hecho en Japón se entiende en España. En un proyecto se usan tres tipos de dibujo. El <mark>boceto</mark> es un dibujo rápido a mano alzada para expresar una idea. El <mark>croquis</mark> también se hace a mano alzada, pero con las proporciones cuidadas y todas las medidas. El <mark>plano</mark> se hace con instrumentos o con ordenador, a escala, con precisión, y sirve para fabricar.</p>`,
    },
    {
      html: `<h3>Instrumentos y tipos de línea</h3><p>Para dibujar con precisión se usan varios <mark>instrumentos</mark>: <b>lápices</b> de distinta dureza (los duros, como el 2H, para líneas finas y auxiliares; los blandos, como el HB o el B, para el trazado final), la <b>escuadra</b> y el <b>cartabón</b> para trazar paralelas y perpendiculares, la <b>regla</b> graduada para medir, el <b>compás</b> para circunferencias y arcos, y la goma de borrar. El papel normalizado tiene formatos <b>DIN A</b>: el A4 es el folio (210 × 297 mm) y cada formato es la mitad del anterior. En los planos se usan distintos <mark>tipos de línea</mark>, cada una con un significado: la <b>línea gruesa continua</b> para las aristas que se ven; la <b>línea discontinua</b> para las aristas ocultas; la <b>línea fina de trazo y punto</b> para los ejes de simetría y los centros; y la <b>línea fina continua</b> para las cotas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tipos de línea normalizados: gruesa continua para aristas vistas, discontinua para aristas ocultas, trazo y punto para ejes y fina continua para cotas">${BG}
        ${[[34, "", 4, "aristas vistas"], [72, "8 5", 2.5, "aristas ocultas"], [110, "16 4 2 4", 1.2, "ejes de simetría"], [148, "", 1, "cotas"]].map(([y, d, w, s]) => `<line x1="16" y1="${y}" x2="110" y2="${y}" stroke="var(--ink)" stroke-width="${w}" ${d ? `stroke-dasharray="${d}"` : ""}/>${t(122, y + 4, s, { size: 11, anchor: "start" })}`).join("")}
        ${fl(20, 156, 20, 150, "var(--ink)", 1)}</svg>`,
    },
    {
      html: `<h3>Las vistas de un objeto</h3><p>Un objeto tiene tres dimensiones (largo, ancho y alto), pero el papel solo tiene dos. Una forma de representarlo sin ambigüedades es dibujar sus <mark>vistas</mark>: lo que veríamos mirándolo de frente, desde arriba y desde un lado, siempre de forma perpendicular. Las tres vistas principales son el <mark>alzado</mark>, que es la vista de frente o vista principal (se elige la que mejor muestra la forma del objeto); la <mark>planta</mark>, que es la vista desde arriba; y el <mark>perfil</mark>, que es la vista desde la izquierda o desde la derecha. Cada vista muestra solo dos dimensiones: el alzado, el largo y el alto; la planta, el largo y el ancho; y el perfil, el ancho y el alto. Juntas, permiten conocer la forma completa del objeto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pieza en forma de L vista en perspectiva con tres flechas que indican las direcciones de observación: alzado de frente, planta desde arriba y perfil desde la izquierda">${BG}
        <path d="M100 120 L 100 80 L 130 80 L 130 100 L 180 100 L 180 120 Z" fill="var(--pen)" fill-opacity=".35" stroke="var(--ink)" stroke-width="2"/>
        <path d="M100 80 L 124 64 L 154 64 L 130 80 M154 64 L 154 84 L 130 100 M154 84 L 204 84 L 180 100 M204 84 L 204 104 L 180 120" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <path d="M100 80 L 124 64 L 154 64 L 130 80 Z" fill="var(--pen)" fill-opacity=".15"/><path d="M130 100 L 154 84 L 204 84 L 180 100 Z" fill="var(--pen)" fill-opacity=".15"/>
        ${fl(140, 162, 140, 126, "var(--red)", 2.5)}${t(140, 176, "alzado", { size: 10, color: "var(--red)" })}
        ${fl(160, 22, 160, 60, "var(--leaf)", 2.5)}${t(160, 16, "planta", { size: 10, color: "var(--leaf)" })}
        ${fl(40, 100, 94, 100, "#b8860b", 2.5)}${t(40, 90, "perfil", { size: 10, color: "#b8860b" })}</svg>`,
      video: { id: "7JU-sObizA8", titulo: "Dibujo. Vistas: alzado, planta y perfil", canal: "Aprendo", vistas: 144486 },
    },
    {
      html: `<h3>Cómo se colocan las vistas</h3><p>Las vistas no se dibujan en cualquier sitio del papel: siguen una colocación normalizada para que se relacionen entre sí. En el <b>sistema europeo</b>, el que se usa en España, el <b>alzado</b> va arriba a la izquierda; la <b>planta</b> va justo <b>debajo</b> del alzado; y el <b>perfil izquierdo</b> va a la <b>derecha</b> del alzado. Las vistas están <b>alineadas</b>: el alzado y la planta tienen el mismo largo y están uno encima del otro; el alzado y el perfil tienen la misma altura y están a la misma altura. Así, un punto del objeto se puede seguir de una vista a otra con líneas auxiliares. Las aristas que no se ven desde esa dirección se dibujan con <b>línea discontinua</b>. Para dibujar las vistas a partir de una pieza, conviene imaginar que la miramos desde muy lejos, de forma que todos los rayos de visión sean paralelos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Vistas de la pieza en L en el sistema europeo: alzado arriba a la izquierda, planta debajo y perfil izquierdo a la derecha, alineadas con líneas auxiliares">${BG}
        <path d="M30 64 L 30 24 L 60 24 L 60 44 L 110 44 L 110 64 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${t(70, 80, "alzado", { size: 10, color: "var(--red)" })}
        <rect x="30" y="100" width="80" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><line x1="60" y1="100" x2="60" y2="140" stroke="var(--ink)" stroke-width="2"/>${t(70, 158, "planta", { size: 10, color: "var(--leaf)" })}
        <path d="M150 64 L 150 24 L 190 24 L 190 64 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><line x1="150" y1="44" x2="190" y2="44" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="5 3"/>${t(170, 80, "perfil izq.", { size: 10, color: "#b8860b" })}
        <path d="M30 64 V 100 M110 64 V 100 M110 24 H 150 M110 64 H 150" stroke="var(--muted)" stroke-dasharray="2 3"/></svg>`,
    },
    {
      html: `<h3>La escala</h3><p>Muchas veces los objetos son demasiado grandes o demasiado pequeños para dibujarlos a su tamaño real. Entonces se usa una <mark>escala</mark>: la relación entre la medida en el dibujo y la medida real. Se escribe como <b>E = dibujo : realidad</b>. Hay tres tipos. La escala <b>natural</b>, 1:1, en la que el dibujo mide lo mismo que el objeto. La escala de <b>reducción</b>, como 1:2, 1:10, 1:50 o 1:100, en la que el dibujo es más pequeño: en 1:100, 1 cm del dibujo son 100 cm reales; se usa para casas, muebles o mapas. Y la escala de <b>ampliación</b>, como 2:1, 5:1 o 10:1, en la que el dibujo es más grande: en 5:1, 5 cm del dibujo son 1 cm real; se usa para piezas pequeñas como engranajes de reloj o componentes electrónicos.</p>${tabla(["Escala", "Tipo", "1 cm del dibujo son…", "Uso"], [["1:1", "natural", "1 cm real", "piezas de tamaño cómodo"], ["1:50", "reducción", "50 cm reales", "planos de viviendas"], ["1:50 000", "reducción", "500 m reales", "mapas topográficos"], ["5:1", "ampliación", "0,2 cm reales", "piezas pequeñas"]])}`,
      video: { id: "o0DL20Os34k", titulo: "Escalas: concepto, tipos y ejercicios", canal: "Ruben Sebastian", vistas: 2648814 },
    },
    {
      html: `<h3>Calcular con escalas</h3><p>Los cálculos de escalas son una <b>proporción</b>. Para pasar de la medida del dibujo a la real, se <b>multiplica</b> por el denominador y se divide por el numerador: en un plano a escala 1:50, una pared que mide 8 cm en el papel mide 8 · 50 = 400 cm = 4 m en la realidad. Para pasar de la real a la del dibujo, se hace al revés: una mesa de 120 cm se dibujará a 1:20 con 120 / 20 = 6 cm. Para averiguar a qué escala está un dibujo, se divide la medida del dibujo entre la real, usando las mismas unidades: si un coche de 4 m (400 cm) mide 8 cm en el dibujo, la escala es 8 : 400 = 1 : 50. Muchos planos y mapas incluyen también una <b>escala gráfica</b>: una barra dividida que indica a qué distancia real equivale cada tramo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala gráfica de un mapa: una barra dividida en tramos de 1 centímetro donde cada tramo son 500 metros, de 0 a 2 kilómetros">${BG}
        ${t(130, 34, "escala gráfica 1:50 000", { size: 12 })}
        ${[0, 1, 2, 3].map((i) => `<rect x="${30 + i * 50}" y="70" width="50" height="14" fill="${i % 2 ? "var(--card)" : "var(--ink)"}" stroke="var(--ink)" stroke-width="1.5"/>${t(30 + i * 50, 104, ["0", "500 m", "1 km", "1,5 km"][i], { size: 10 })}`).join("")}${t(230, 104, "2 km", { size: 10 })}
        ${t(130, 140, "cada tramo de 1 cm = 500 m reales", { size: 11, color: "var(--red)" })}${t(130, 162, "real = dibujo · 50 000", { size: 11, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La acotación</h3><p>Aunque el plano esté a escala, las medidas reales se escriben sobre el dibujo para que no haya que medir con regla: es la <mark>acotación</mark>. Cada <b>cota</b> tiene varios elementos: las <b>líneas auxiliares</b>, finas, que prolongan las aristas que se van a medir; la <b>línea de cota</b>, fina y paralela a la medida, que termina en dos flechas; y la <b>cifra de cota</b>, que indica la medida real, normalmente en <b>milímetros</b> sin escribir la unidad. Las normas básicas son: cada medida se acota <b>una sola vez</b>, en la vista donde mejor se vea; las cifras se escriben encima de la línea de cota y se leen desde abajo o desde la derecha; las cotas no deben cruzarse entre sí; y los círculos se acotan con el símbolo Ø de diámetro, y los arcos con R de radio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rectángulo acotado: líneas auxiliares, línea de cota con flechas y cifra 80 para el largo, y 40 para el alto; círculo con cota de diámetro 20">${BG}
        <rect x="50" y="50" width="140" height="70" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="150" cy="85" r="18" fill="var(--paper)" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M50 120 V 150 M190 120 V 150" stroke="var(--ink)" stroke-width="1"/>${fl(120, 144, 52, 144, "var(--ink)", 1)}${fl(120, 144, 188, 144, "var(--ink)", 1)}${t(120, 140, "80", { size: 11 })}
        <path d="M190 50 H 222 M190 120 H 222" stroke="var(--ink)" stroke-width="1"/>${fl(216, 85, 216, 52, "var(--ink)", 1)}${fl(216, 85, 216, 118, "var(--ink)", 1)}${t(232, 89, "40", { size: 11 })}
        ${fl(150, 85, 137, 72, "var(--ink)", 1)}${t(116, 70, "Ø20", { size: 11, anchor: "end" })}<line x1="118" y1="66" x2="138" y2="73" stroke="var(--ink)"/>
        ${t(66, 36, "medidas en mm", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las perspectivas</h3><p>Las vistas son precisas, pero cuesta imaginar el objeto. Las <mark>perspectivas</mark> lo representan en un solo dibujo con sus tres dimensiones, como si lo viéramos en el espacio. En el dibujo técnico se usan sobre todo dos. La <mark>perspectiva isométrica</mark> usa tres ejes que forman entre sí <b>120°</b>: uno vertical y dos inclinados 30° respecto a la horizontal. Las medidas se llevan sobre los tres ejes con su tamaño real. Se dibuja fácilmente con la escuadra y el cartabón o con papel isométrico (con una trama de triángulos). La <mark>perspectiva caballera</mark> dibuja la cara frontal en su forma verdadera (con un eje vertical y otro horizontal), y la profundidad con un tercer eje inclinado <b>45°</b>, en el que las medidas se reducen, normalmente a la mitad, para que no parezca demasiado alargado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un cubo en perspectiva isométrica con tres ejes a 120 grados y el mismo cubo en perspectiva caballera con la cara frontal real y la profundidad a 45 grados reducida a la mitad">${BG}
        <path d="M66 140 L 26 117 L 26 71 L 66 94 Z" fill="var(--pen)" fill-opacity=".3" stroke="var(--ink)" stroke-width="2"/><path d="M66 140 L 106 117 L 106 71 L 66 94 Z" fill="var(--pen)" fill-opacity=".5" stroke="var(--ink)" stroke-width="2"/><path d="M66 94 L 26 71 L 66 48 L 106 71 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--ink)" stroke-width="2"/>
        ${t(66, 166, "isométrica (120°)", { size: 10 })}
        <rect x="150" y="80" width="54" height="54" fill="var(--red)" fill-opacity=".3" stroke="var(--ink)" stroke-width="2"/><path d="M150 80 L 169 61 L 223 61 L 204 80 Z" fill="var(--red)" fill-opacity=".15" stroke="var(--ink)" stroke-width="2"/><path d="M204 80 L 223 61 L 223 115 L 204 134 Z" fill="var(--red)" fill-opacity=".45" stroke="var(--ink)" stroke-width="2"/>
        ${t(190, 166, "caballera (45°, ½)", { size: 10 })}</svg>`,
      video: { id: "7n53T63Koe8", titulo: "Dibujar perspectiva isométrica conocidos el alzado, planta y perfil", canal: "Curso de dibujo", vistas: 395559 },
    },
    {
      html: `<h3>El dibujo con ordenador</h3><p>Hoy la mayoría de los planos se hacen con programas de <mark>diseño asistido por ordenador (CAD)</mark>. Hay programas de <b>dibujo en 2D</b>, que sustituyen al papel y los instrumentos (LibreCAD, QCAD, el dibujo vectorial de Inkscape o Draw), y programas de <b>modelado en 3D</b>, en los que se construye el objeto como si fuera de arcilla virtual y el programa genera automáticamente las vistas y las perspectivas (Tinkercad, FreeCAD, SketchUp, Onshape). Las ventajas son muchas: precisión total, facilidad para corregir y copiar, acotación automática, trabajo en equipo en la nube y la posibilidad de enviar el modelo directamente a una <b>impresora 3D</b> o a una cortadora láser para fabricarlo. <b>Tinkercad</b>, gratuito y en el navegador, es una buena forma de empezar: se combinan formas básicas (cubos, cilindros, esferas) sumándolas o restándolas como «huecos».</p>`,
    },
  ],
  figura: {
    titulo: "Formas de representar un objeto",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Resumen: vistas (alzado, planta y perfil), escala (dibujo entre realidad), acotación (medidas en milímetros) y perspectivas (isométrica y caballera)">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Vistas", "alzado · planta", "perfil", "var(--pen)"], ["Escala", "E = dibujo : real", "1:50 · 2:1", "var(--red)"], ["Cotas", "medidas reales", "en milímetros", "#b8860b"], ["Perspectiva", "isométrica", "caballera", "var(--leaf)"]].map(([a, b, c, col], i) => { const x = 20 + i * 152; return `<rect x="${x}" y="40" width="140" height="160" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 70, 82, a, { size: 17, color: col, font: D })}${t(x + 70, 126, b, { size: 13, weight: 400 })}${t(x + 70, 156, c, { size: 13, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "rM3-D-b4Ga8", titulo: "Alzado, planta y perfil de una pieza: ejercicios de vistas", canal: "CursoTutorial", vistas: 142530, megusta: 1448, busqueda: "vistas alzado planta perfil escalas" },
  ejemplos: [
    { enunciado: "En un plano a escala 1:50, una habitación mide 8 cm × 6 cm. ¿Cuáles son sus medidas reales?",
      pasos: ["Real = dibujo · 50.", "8 · 50 = 400 cm = 4 m; 6 · 50 = 300 cm = 3 m.", "La habitación mide 4 m × 3 m (12 m²)."],
      resultado: "4 m × 3 m." },
    { enunciado: "Quieres dibujar a escala 5:1 un tornillo de 6 mm de largo. ¿Cuánto medirá en el dibujo?",
      pasos: ["Escala de ampliación: dibujo = real · 5.", "6 · 5 = 30 mm.", "En el dibujo medirá 3 cm."],
      resultado: "30 mm." },
    { enunciado: "Un coche de 4,5 m aparece en un dibujo con 9 cm. ¿A qué escala está?",
      pasos: ["Misma unidad: 4,5 m = 450 cm.", "E = 9 : 450.", "Dividimos entre 9: 1 : 50."],
      resultado: "Escala 1:50." },
  ],
  errores: [
    "Colocar la planta encima del alzado: en el sistema europeo va debajo.",
    "Dibujar las aristas ocultas con línea continua: van con línea discontinua.",
    "Acotar con la medida del dibujo en lugar de la medida real.",
    "Calcular la escala sin pasar antes las dos medidas a la misma unidad.",
    "Confundir isométrica y caballera: la caballera tiene la cara frontal sin deformar y la profundidad a 45°.",
  ],
  ejercicios: [
    { q: "¿Qué diferencia hay entre boceto, croquis y plano?", sol: "Boceto: a mano alzada, sin medidas. Croquis: a mano alzada, con medidas y proporciones. Plano: con instrumentos o CAD, preciso y a escala." },
    { q: "¿Qué tipo de línea usarías para: una arista visible, un eje de simetría, una arista oculta?", sol: "Gruesa continua, fina de trazo y punto, y discontinua." },
    { q: "¿Qué dimensiones muestra cada vista?", sol: "Alzado: largo y alto. Planta: largo y ancho. Perfil: ancho y alto." },
    { q: "Dibuja en tu cuaderno el alzado, la planta y el perfil de un dado y de una pieza en forma de escalón de dos peldaños.", sol: "Dado: tres cuadrados iguales. Escalón: alzado en forma de escalera, planta un rectángulo dividido por una línea, perfil un rectángulo." },
    { q: "Clasifica las escalas en natural, reducción o ampliación: 1:1, 1:200, 10:1, 1:5.", sol: "1:1 natural; 1:200 y 1:5 de reducción; 10:1 de ampliación." },
    { q: "En un mapa 1:25 000, dos pueblos están a 8 cm. ¿Qué distancia real los separa?", sol: "8 · 25 000 = 200 000 cm = 2 km." },
    { q: "Una mesa mide 160 cm × 80 cm. ¿Cuánto medirá dibujada a 1:20?", sol: "8 cm × 4 cm." },
    { q: "Un insecto de 12 mm se dibuja con 6 cm. ¿A qué escala?", sol: "60 mm : 12 mm = 5 : 1 (ampliación)." },
    { q: "Escribe tres normas de acotación.", sol: "Cada medida se acota una sola vez, las cifras van encima de la línea de cota y en mm, las cotas no se cruzan (también: Ø para diámetros y R para radios)." },
    { q: "¿Qué ángulos forman los ejes en la perspectiva isométrica? ¿Y en la caballera?", sol: "Isométrica: 120° entre sí (30° con la horizontal). Caballera: 90° entre el vertical y el horizontal y el tercer eje a 45°, con reducción." },
  ],
  quiz: [
    { q: "La vista de frente se llama…", o: ["planta", "alzado", "perfil"], a: 1, e: "Alzado." },
    { q: "La vista desde arriba es la…", o: ["planta", "alzado", "perfil"], a: 0, e: "Planta." },
    { q: "En el sistema europeo, la planta va…", o: ["encima del alzado", "debajo del alzado", "a la izquierda"], a: 1, e: "Debajo." },
    { q: "Las aristas ocultas se dibujan con línea…", o: ["continua gruesa", "discontinua", "de trazo y punto"], a: 1, e: "Discontinua." },
    { q: "La escala 1:100 es de…", o: ["ampliación", "reducción", "tamaño natural"], a: 1, e: "Reducción." },
    { q: "En escala 1:100, 3 cm del plano son…", o: ["3 m", "30 cm", "300 m"], a: 0, e: "300 cm = 3 m." },
    { q: "Las cotas se expresan normalmente en…", o: ["cm", "mm", "m"], a: 1, e: "Milímetros." },
    { q: "El símbolo Ø indica…", o: ["radio", "diámetro", "ángulo"], a: 1, e: "Diámetro." },
    { q: "En la isométrica los ejes forman…", o: ["90°", "120°", "45°"], a: 1, e: "120°." },
    { q: "Un programa de modelado 3D gratuito en el navegador es…", o: ["Tinkercad", "Word", "Excel"], a: 0, e: "Tinkercad." },
  ],
  examen: [
    { q: "El formato A4 mide…", o: ["210 × 297 mm", "297 × 420 mm", "100 × 150 mm"], a: 0, e: "210 × 297 mm." },
    { q: "Para acotar el radio de un arco se usa…", o: ["Ø", "R", "A"], a: 1, e: "R." },
    { q: "En la perspectiva caballera, las medidas del eje a 45° se…", o: ["duplican", "reducen", "mantienen siempre"], a: 1, e: "Se reducen, normalmente a la mitad." },
  ],
  feynman: ["Qué son el alzado, la planta y el perfil y cómo se colocan", "Cómo se calcula una medida real con la escala", "Qué diferencia hay entre la perspectiva isométrica y la caballera"],
  mapa: mapa("DIBUJO TÉCNICO", "var(--eso)", [
    ["Vistas", "alzado · planta · perfil", "var(--pen)"],
    ["Escala", "natural · reducción · ampliación", "var(--red)"],
    ["Acotación", "líneas · flechas · cifras en mm", "#b8860b"],
    ["Perspectivas", "isométrica · caballera · CAD", "var(--leaf)"],
  ], 300),
  tarjetas: [
    ["Alzado", "Vista de frente; muestra largo y alto."],
    ["Planta", "Vista desde arriba; va debajo del alzado."],
    ["Perfil", "Vista lateral; el izquierdo va a la derecha del alzado."],
    ["Escala", "Relación dibujo : realidad."],
    ["Escala 1:100", "1 cm del dibujo son 100 cm reales."],
    ["Cota", "Medida real escrita sobre el dibujo, en mm."],
    ["Isométrica", "Perspectiva con tres ejes a 120° y medidas reales."],
    ["CAD", "Diseño asistido por ordenador, en 2D o 3D."],
  ],
  familias: ["Dibujad juntos el alzado, la planta y el perfil de un objeto de la cocina (una caja de cereales, una taza).", "Buscad la escala de un mapa de carreteras o de la app de mapas y calculad la distancia a un pueblo cercano.", "Probad Tinkercad y diseñad un llavero con vuestro nombre."],
  profesores: {
    saberes: "Comunicación y difusión de ideas: expresión gráfica, bocetos, croquis, vistas, escalas, acotación, perspectivas y aplicaciones CAD (RD 217/2022, Tecnología y Digitalización, bloque B).",
    ideas: ["Piezas de madera o bloques de construcción reales para dibujar sus vistas.", "Plano a escala del aula con medidas tomadas por grupos.", "Diseño en Tinkercad de una pieza sencilla y obtención de sus vistas."],
  },
  fuentes: [RD, wiki("Dibujo técnico", "Dibujo_técnico"), wiki("Escala (cartografía)", "Escala_(cartografía)")],
  revisado: REV,
};
