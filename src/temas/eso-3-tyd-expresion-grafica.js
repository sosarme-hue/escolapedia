// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

// Pieza en L en perspectiva isométrica (origen x0, y0, unidad u).
const iso = (x0, y0, u) => {
  const P = (x, y, z) => [x0 + (x - y) * u * 0.866, y0 + (x + y) * u * 0.5 - z * u];
  const poly = (pts, f) => `<path d="M${pts.map(p => P(...p).map(n => n.toFixed(1)).join(" ")).join(" L ")} Z" fill="${f}" stroke="var(--ink)" stroke-width="1.6" stroke-linejoin="round"/>`;
  return poly([[0, 0, 2], [3, 0, 2], [3, 0, 1], [1, 0, 1], [1, 0, 2]].slice(0, 0).concat([[0, 2, 0], [0, 2, 3], [1, 2, 3], [1, 2, 1], [3, 2, 1], [3, 2, 0]]), "var(--pen)") // frente (alzado)
    + poly([[0, 0, 3], [1, 0, 3], [1, 2, 3], [0, 2, 3]], "#dfe7fb") // techo alto
    + poly([[1, 0, 1], [3, 0, 1], [3, 2, 1], [1, 2, 1]], "#dfe7fb") // techo bajo
    + poly([[1, 0, 3], [1, 0, 1], [1, 2, 1], [1, 2, 3]], "#b9c8f0") // escalón
    + poly([[3, 0, 1], [3, 0, 0], [3, 2, 0], [3, 2, 1]], "#b9c8f0"); // lateral
};

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Expresión gráfica: bocetos, croquis y vistas",
  minutos: 55,
  objetivos: ["Diferenciar boceto, croquis y plano y saber cuándo usar cada uno", "Representar objetos sencillos mediante sus vistas: alzado, planta y perfil", "Dibujar piezas en perspectiva isométrica y caballera", "Aplicar normas de acotación y escalas, y conocer herramientas de diseño por ordenador"],
  claves: ["boceto", "croquis", "plano", "alzado", "planta", "perfil", "perspectiva isométrica", "escala"],
  pregunta: {
    texto: "Un mueble de cocina se diseña en Suecia, sus piezas se fabrican en Polonia y lo montas tú en tu casa sin hablar ningún idioma. ¿Cómo es posible entenderse?",
    respuesta: "Gracias a la <mark>expresión gráfica</mark>: un lenguaje de dibujos con normas comunes en todo el mundo. Las <b>vistas</b>, las <b>perspectivas</b> y las <b>cotas</b> describen la forma y las medidas exactas de cada pieza sin necesidad de palabras. Es el idioma universal de la tecnología.",
  },
  bloques: [
    {
      html: `<h3>El dibujo como lenguaje técnico</h3><p>En tecnología, el dibujo sirve para <b>pensar</b> una idea, <b>comunicarla</b> a otras personas y <b>fabricar</b> el objeto con exactitud. A diferencia del dibujo artístico, el <mark>dibujo técnico</mark> busca representar los objetos de forma <b>clara, precisa y sin ambigüedades</b>, siguiendo unas <b>normas</b> que todo el mundo entiende. En España se usan las normas <b>UNE</b>, basadas en las normas internacionales <b>ISO</b>, que fijan cómo se dibujan las vistas, los tipos de línea, las cotas o el formato del papel. Gracias a ellas, un plano hecho en Japón se puede fabricar en Bilbao. Hoy la mayoría de los planos se hacen con programas de ordenador, pero saber dibujar a mano sigue siendo fundamental para expresar ideas rápidamente.</p>`,
    },
    {
      html: `<h3>Boceto, croquis y plano</h3><p>Según el momento del proyecto se usan distintos tipos de dibujo. El <mark>boceto</mark> es un dibujo <b>rápido, a mano alzada</b> y sin medidas, que sirve para plasmar y comparar ideas; no importa que sea perfecto. El <mark>croquis</mark> es un dibujo también <b>a mano alzada</b>, pero más cuidado y <b>proporcionado</b>, con las <b>medidas</b> indicadas; sirve para recoger la información necesaria para fabricar o para hacer después el plano. El <mark>plano</mark> es un dibujo <b>preciso</b>, hecho con instrumentos de dibujo o con ordenador, a <b>escala</b>, con todas las vistas y cotas necesarias según las normas; es el documento definitivo para fabricar el objeto.</p>${tabla(["Tipo", "Cómo se hace", "Medidas", "Para qué"], [["Boceto", "a mano alzada, rápido", "no", "generar ideas"], ["Croquis", "a mano alzada, proporcionado", "sí", "recoger datos"], ["Plano", "con instrumentos u ordenador", "sí, a escala", "fabricar"]])}`,
      video: { id: "2vN2C4VgwGM", titulo: "Bocetos, croquis y planos", canal: "Pant ex", vistas: 82404 },
    },
    {
      html: `<h3>Materiales e instrumentos de dibujo</h3><p>Para dibujar a mano se usan <b>lápices</b> de distinta dureza: los duros (H, 2H) dan líneas finas y claras, buenas para trazos auxiliares; los blandos (B, 2B) dan líneas gruesas y oscuras, para bocetos; el HB es intermedio. Para dibujar con precisión se usan la <b>regla</b> graduada, la <b>escuadra</b> (triángulo con ángulos de 45°) y el <b>cartabón</b> (con ángulos de 30° y 60°), que combinados permiten trazar paralelas, perpendiculares y ángulos; el <b>compás</b>, para circunferencias; y el <b>transportador</b>, para medir ángulos. El papel tiene <b>formatos normalizados</b> de la serie A: el <b>A4</b> mide 210 × 297 mm, y cada formato es la mitad del anterior: el A3 es el doble del A4.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Instrumentos de dibujo: escuadra con ángulos de 45 grados, cartabón con ángulos de 30 y 60 grados, y compás">${BG}
        <path d="M20 140 L 100 140 L 20 60 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>${t(60, 162, "escuadra 45°", { size: 10, color: "var(--pen)" })}
        <path d="M118 140 L 196 140 L 118 46 Z" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2.5"/>${t(160, 162, "cartabón 30°/60°", { size: 10, color: "var(--leaf)" })}
        <path d="M226 30 L 210 130 M226 30 L 242 130" stroke="var(--ink)" stroke-width="3"/><circle cx="226" cy="28" r="5" fill="var(--ink)"/>${t(226, 150, "compás", { size: 10 })}</svg>`,
    },
    {
      html: `<h3>Las vistas de un objeto</h3><p>Para describir con exactitud la forma de un objeto se dibujan sus <mark>vistas</mark>: lo que se ve al mirarlo desde distintas direcciones, perpendicularmente y sin perspectiva. Las tres principales son el <b>alzado</b>, la vista desde <b>delante</b>, que se elige como la más representativa de la pieza; la <b>planta</b>, la vista desde <b>arriba</b>; y el <b>perfil izquierdo</b>, la vista desde la <b>izquierda</b>. En el sistema europeo, que es el que se usa en España, la <b>planta se coloca debajo del alzado</b> y el <b>perfil izquierdo, a la derecha del alzado</b>. Las vistas deben estar <b>alineadas</b>: el alzado y la planta tienen el mismo ancho, y el alzado y el perfil, la misma altura.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Disposición de vistas en el sistema europeo: alzado arriba a la izquierda, perfil izquierdo a su derecha y planta debajo del alzado, alineadas">${BG}
        <path d="M30 30 V 90 H 120 V 60 H 60 V 30 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>${t(75, 20, "ALZADO", { size: 10, color: "var(--pen)" })}
        <rect x="160" y="30" width="60" height="60" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2.5"/><line x1="160" y1="60" x2="220" y2="60" stroke="var(--leaf)" stroke-width="2"/>${t(190, 20, "PERFIL IZQ.", { size: 10, color: "var(--leaf)" })}
        <rect x="30" y="110" width="90" height="60" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2.5"/><line x1="60" y1="110" x2="60" y2="170" stroke="var(--red)" stroke-width="2"/>${t(190, 144, "PLANTA", { size: 10, color: "var(--red)" })}${fl(164, 140, 126, 140, "var(--red)", 1.5)}
        <line x1="120" y1="30" x2="160" y2="30" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="120" y1="90" x2="160" y2="90" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="30" y1="90" x2="30" y2="110" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="120" y1="90" x2="120" y2="110" stroke="var(--muted)" stroke-dasharray="3 3"/></svg>`,
      video: { id: "7JU-sObizA8", titulo: "Aprendo - Dibujo. Vistas: alzado, planta y perfil", canal: "Aprendo", vistas: 144479 },
    },
    {
      html: `<h3>Cómo obtener las vistas</h3><p>Para dibujar las vistas de una pieza conviene seguir unos pasos. Primero, <b>elegir el alzado</b>: la cara que mejor muestra la forma de la pieza. Segundo, <b>imaginar que miramos</b> la pieza desde delante, desde arriba y desde la izquierda, como si fuera transparente y proyectáramos sus aristas sobre un plano. Tercero, dibujar las vistas <b>alineadas</b> con líneas auxiliares finas. Las aristas que se ven se dibujan con <b>línea continua gruesa</b>; las aristas <b>ocultas</b>, que existen pero no se ven desde esa dirección, con <b>línea discontinua</b>; y los <b>ejes de simetría</b> y centros de agujeros, con <b>línea de trazo y punto</b>. Muchas piezas sencillas quedan bien definidas solo con alzado y planta, o alzado y perfil.</p>${tabla(["Tipo de línea", "Uso"], [["Continua gruesa", "aristas y contornos visibles"], ["Continua fina", "líneas de cota y auxiliares"], ["Discontinua", "aristas ocultas"], ["Trazo y punto", "ejes de simetría y centros"]])}`,
    },
    {
      html: `<h3>La perspectiva isométrica</h3><p>Las vistas son precisas, pero cuesta imaginar la pieza en tres dimensiones. Para eso se usan las <mark>perspectivas</mark>, que muestran el objeto en un solo dibujo con volumen. En la <b>perspectiva isométrica</b>, los tres ejes (ancho, profundo y alto) forman entre sí <b>ángulos de 120°</b>: el eje vertical se dibuja vertical y los otros dos a <b>30° de la horizontal</b>, uno a cada lado. Las medidas se llevan a los tres ejes <b>sin reducir</b>. Se puede dibujar fácilmente sobre <b>papel isométrico</b>, una cuadrícula de triángulos, o con escuadra y cartabón. Es la perspectiva más usada en los libros de tecnología y en los manuales de montaje.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pieza en forma de L dibujada en perspectiva isométrica con los ejes a 30 grados de la horizontal">${BG}
        ${iso(130, 94, 26)}
        <path d="M20 168 H 76" stroke="var(--muted)" stroke-dasharray="3 3"/><path d="M20 168 L 66 141" stroke="var(--red)" stroke-width="2"/>${t(60, 162, "30°", { size: 11, color: "var(--red)", anchor: "start" })}
        ${t(214, 30, "ejes a 120°", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "daDwoPgdSKY", titulo: "Perspectiva ISOMÉTRICA a partir de las VISTAS. Figuras en isométrico", canal: "Dibujo Técnico paso a paso", vistas: 475408 },
    },
    {
      html: `<h3>La perspectiva caballera</h3><p>La <mark>perspectiva caballera</mark> es más fácil de dibujar. La cara delantera de la pieza (normalmente el alzado) se dibuja <b>de frente, en verdadera magnitud</b>, con sus medidas reales. La profundidad se dibuja con líneas <b>oblicuas</b>, normalmente a <b>45°</b>, y se suele <b>reducir a la mitad</b> (coeficiente de reducción 0,5) para que el dibujo parezca más natural. Es muy útil cuando la cara delantera tiene formas complicadas, como circunferencias, porque se dibujan tal cual. Comparada con la isométrica, se ve algo menos real, pero es más rápida y se presta bien a los croquis en papel cuadriculado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cubo en perspectiva caballera: la cara frontal en verdadera magnitud y la profundidad a 45 grados reducida a la mitad">${BG}
        <rect x="60" y="70" width="80" height="80" fill="var(--pen)" fill-opacity=".2" stroke="var(--ink)" stroke-width="2"/>
        <path d="M60 70 L 88 42 H 168 L 140 70 Z" fill="#dfe7fb" stroke="var(--ink)" stroke-width="2"/><path d="M140 70 L 168 42 V 122 L 140 150 Z" fill="#b9c8f0" stroke="var(--ink)" stroke-width="2"/>
        ${t(100, 166, "frente: medida real", { size: 10, color: "var(--pen)" })}${t(204, 76, "fondo a 45°", { size: 10, color: "var(--red)" })}${t(204, 90, "× 0,5", { size: 10, color: "var(--red)" })}</svg>`,
    },
    {
      html: `<h3>La acotación</h3><p><mark>Acotar</mark> es indicar las <b>medidas reales</b> de un objeto en el dibujo, para que se pueda fabricar. Cada medida se llama <b>cota</b> y se compone de: las <b>líneas auxiliares</b>, finas, que prolongan las aristas que se van a medir; la <b>línea de cota</b>, fina y paralela a la medida, que termina en <b>flechas</b>; y la <b>cifra de cota</b>, el número escrito encima de la línea. Normas básicas: las medidas se expresan en <b>milímetros</b> y no se escribe la unidad; cada medida se indica <b>una sola vez</b>, en la vista donde mejor se vea; se acota siempre la <b>medida real</b>, aunque el dibujo esté a escala; y los diámetros llevan el símbolo <b>Ø</b> delante.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rectángulo acotado: línea de cota con flechas, líneas auxiliares y la cifra 80 encima; a la derecha, la altura 40">${BG}
        <rect x="50" y="70" width="140" height="70" fill="var(--pen)" fill-opacity=".1" stroke="var(--ink)" stroke-width="2.5"/>
        <line x1="50" y1="66" x2="50" y2="36" stroke="var(--muted)"/><line x1="190" y1="66" x2="190" y2="36" stroke="var(--muted)"/>
        ${fl(120, 44, 52, 44, "var(--red)", 1.2)}${fl(120, 44, 188, 44, "var(--red)", 1.2)}${t(120, 38, "80", { size: 13, color: "var(--red)" })}
        <line x1="194" y1="70" x2="226" y2="70" stroke="var(--muted)"/><line x1="194" y1="140" x2="226" y2="140" stroke="var(--muted)"/>
        ${fl(218, 105, 218, 72, "var(--red)", 1.2)}${fl(218, 105, 218, 138, "var(--red)", 1.2)}${t(234, 110, "40", { size: 13, color: "var(--red)", anchor: "start" })}
        ${t(120, 166, "medidas en mm, sin unidad", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Las escalas</h3><p>Muchos objetos no caben en el papel o son tan pequeños que no se verían. Por eso se dibujan a <mark>escala</mark>: la relación entre la medida del dibujo y la medida real. Se escribe como <b>dibujo : realidad</b>. En una escala de <b>reducción</b>, como <b>1:50</b>, 1 cm del dibujo son 50 cm reales; se usa para casas, muebles o mapas. En una escala de <b>ampliación</b>, como <b>5:1</b>, 5 cm del dibujo son 1 cm real; se usa para piezas diminutas, como las de un reloj. La escala <b>1:1</b> es el tamaño natural. Para calcular: <b>medida del dibujo = medida real × escala</b>. Por ejemplo, una mesa de 1,5 m a escala 1:20 mide en el dibujo 150 cm / 20 = 7,5 cm.</p>`,
    },
    {
      html: `<h3>El diseño asistido por ordenador</h3><p>Hoy la mayoría de los planos se hacen con programas de <mark>diseño asistido por ordenador (CAD)</mark>. Permiten dibujar con precisión total, copiar y modificar piezas en segundos, acotar automáticamente y compartir los archivos. Los programas de <b>dibujo 2D</b>, como LibreCAD o QCAD, sirven para planos de vistas. Los de <b>modelado 3D</b>, como <b>Tinkercad</b>, SketchUp, FreeCAD u Onshape, permiten construir la pieza en tres dimensiones, girarla, verla desde cualquier punto y obtener automáticamente sus vistas. Un modelo 3D se puede enviar a una <b>impresora 3D</b> o a una <b>cortadora láser</b> para fabricarlo directamente. Muchos de estos programas son gratuitos y funcionan en el navegador.</p>`,
    },
  ],
  figura: {
    titulo: "De la pieza a sus vistas",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Una pieza en L en perspectiva isométrica y, a la derecha, sus tres vistas: alzado, planta debajo y perfil izquierdo a la derecha del alzado">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${iso(150, 128, 40)}
      ${t(150, 240, "perspectiva isométrica", { size: 14, color: "var(--muted)", font: D })}
      <path d="M330 40 V 130 H 450 V 100 H 370 V 40 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="3"/>${t(390, 30, "alzado", { size: 13, color: "var(--pen)" })}
      <rect x="490" y="40" width="80" height="90" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="3"/><line x1="490" y1="100" x2="570" y2="100" stroke="var(--leaf)" stroke-width="2.5"/>${t(530, 30, "perfil izq.", { size: 13, color: "var(--leaf)" })}
      <rect x="330" y="160" width="120" height="80" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="3"/><line x1="370" y1="160" x2="370" y2="240" stroke="var(--red)" stroke-width="2.5"/>${t(530, 205, "planta", { size: 13, color: "var(--red)" })}
    </svg>`,
  },
  video: { id: "3mz9ubFWopI", titulo: "Vistas de alzado, planta y perfil izquierdo de una figura sencilla en papel pautado", canal: "Tecno Profe", vistas: 135232, megusta: 0, busqueda: "boceto croquis y vistas dibujo técnico" },
  ejemplos: [
    { enunciado: "Una habitación mide 4 m de largo. ¿Cuánto mide en un plano a escala 1:50?",
      pasos: ["Pasamos a cm: 4 m = 400 cm.", "Medida del dibujo = 400 / 50.", "= 8 cm."],
      resultado: "8 cm." },
    { enunciado: "En un plano a escala 1:20, una mesa mide 6 cm de ancho. ¿Cuál es su medida real?",
      pasos: ["Medida real = medida del dibujo × 20.", "6 · 20 = 120 cm.", "= 1,2 m."],
      resultado: "1,2 m." },
    { enunciado: "Un engranaje de reloj tiene 4 mm de diámetro. ¿Cuánto medirá dibujado a escala 10:1?",
      pasos: ["Es una escala de ampliación: el dibujo es 10 veces mayor.", "4 · 10 = 40 mm.", "Se acota con la medida real: Ø4."],
      resultado: "40 mm en el papel, acotado Ø4." },
  ],
  errores: [
    "Colocar la planta encima del alzado: en el sistema europeo va debajo.",
    "Dibujar con línea continua las aristas ocultas: van con línea discontinua.",
    "Acotar con la medida del dibujo en lugar de la medida real.",
    "Repetir la misma cota en varias vistas.",
    "Confundir 1:50 (reducción) con 50:1 (ampliación).",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre un boceto y un croquis.", sol: "Ambos son a mano alzada, pero el boceto es rápido y sin medidas, para generar ideas; el croquis es proporcionado y lleva medidas." },
    { q: "¿Qué dimensiones del papel A4 y A3 conoces? ¿Qué relación hay entre ellos?", sol: "A4: 210 × 297 mm. A3: 297 × 420 mm. El A3 es el doble que el A4." },
    { q: "Nombra las tres vistas principales y desde dónde se ven.", sol: "Alzado (desde delante), planta (desde arriba) y perfil izquierdo (desde la izquierda)." },
    { q: "¿Dónde se coloca cada vista en el sistema europeo?", sol: "El alzado arriba; la planta debajo del alzado; el perfil izquierdo a la derecha del alzado." },
    { q: "¿Qué tipo de línea se usa para las aristas ocultas y para los ejes de simetría?", sol: "Discontinua para las ocultas y de trazo y punto para los ejes." },
    { q: "¿Qué ángulos forman los ejes en la perspectiva isométrica?", sol: "120° entre sí; el vertical es vertical y los otros dos van a 30° de la horizontal." },
    { q: "¿Qué ventaja tiene la perspectiva caballera?", sol: "La cara frontal se dibuja en verdadera magnitud, así que es fácil y rápida, sobre todo con formas curvas en el frente." },
    { q: "Escribe tres normas de acotación.", sol: "Medidas en milímetros sin unidad; cada cota una sola vez; se acota la medida real aunque el dibujo esté a escala." },
    { q: "Un coche mide 4,2 m de largo. ¿Cuánto medirá en un dibujo a escala 1:30?", sol: "420 / 30 = 14 cm." },
    { q: "Cita dos programas de diseño 3D y una forma de fabricar lo diseñado.", sol: "Tinkercad y FreeCAD; se puede fabricar con una impresora 3D o una cortadora láser." },
  ],
  quiz: [
    { q: "Un dibujo rápido sin medidas es un…", o: ["plano", "boceto", "croquis"], a: 1, e: "Boceto." },
    { q: "El dibujo a mano alzada con medidas es un…", o: ["croquis", "boceto", "plano"], a: 0, e: "Croquis." },
    { q: "La vista desde arriba es…", o: ["el alzado", "la planta", "el perfil"], a: 1, e: "La planta." },
    { q: "En el sistema europeo, la planta va…", o: ["encima del alzado", "debajo del alzado", "a la izquierda"], a: 1, e: "Debajo." },
    { q: "Las aristas ocultas se dibujan con línea…", o: ["discontinua", "gruesa continua", "de trazo y punto"], a: 0, e: "Discontinua." },
    { q: "En isométrica, los ejes horizontales van a…", o: ["45°", "30°", "60°"], a: 1, e: "30°." },
    { q: "En caballera, la profundidad suele ir a…", o: ["30°", "45°", "90°"], a: 1, e: "45°, reducida." },
    { q: "Las cotas se expresan en…", o: ["centímetros", "milímetros", "metros"], a: 1, e: "Milímetros." },
    { q: "La escala 1:100 es de…", o: ["ampliación", "reducción", "tamaño natural"], a: 1, e: "Reducción." },
    { q: "Tinkercad es un programa de…", o: ["diseño 3D", "hoja de cálculo", "edición de vídeo"], a: 0, e: "Diseño 3D." },
  ],
  examen: [
    { q: "El A4 mide…", o: ["210 × 297 mm", "297 × 420 mm", "100 × 150 mm"], a: 0, e: "210 × 297 mm." },
    { q: "El perfil izquierdo se coloca…", o: ["a la derecha del alzado", "a la izquierda del alzado", "debajo de la planta"], a: 0, e: "A la derecha." },
    { q: "La escala 2:1 significa que el dibujo es…", o: ["la mitad", "el doble", "igual"], a: 1, e: "El doble." },
  ],
  feynman: ["Cuándo se usa un boceto, un croquis o un plano", "Cómo se obtienen y se colocan las vistas de una pieza", "Cómo se calcula una medida a escala"],
  mapa: mapa("EXPRESIÓN GRÁFICA", "var(--eso)", [
    ["Tipos", "boceto · croquis · plano", "var(--pen)"],
    ["Vistas", "alzado · planta · perfil", "var(--red)"],
    ["Perspectivas", "isométrica · caballera", "var(--leaf)"],
    ["Normas", "cotas · escalas · CAD", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Boceto", "Dibujo rápido a mano alzada, sin medidas."],
    ["Croquis", "Dibujo a mano alzada, proporcionado y con medidas."],
    ["Plano", "Dibujo preciso, a escala y con normas."],
    ["Alzado", "Vista desde delante."],
    ["Planta", "Vista desde arriba; va debajo del alzado."],
    ["Perfil izquierdo", "Vista desde la izquierda; va a la derecha del alzado."],
    ["Isométrica", "Ejes a 120°; medidas sin reducir."],
    ["Escala", "Dibujo : realidad. 1:50 reduce; 5:1 amplía."],
  ],
  familias: ["Elegid un objeto sencillo de casa (una goma, un brik) y dibujad juntos su alzado, planta y perfil.", "Dibujad el plano de vuestra habitación a escala 1:50 midiendo con una cinta métrica.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Proceso de resolución de problemas: expresión gráfica, bocetos y croquis, vistas, perspectivas, acotación, escalas y aplicaciones CAD (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Construir piezas con cubos encajables y dibujar sus vistas.", "Juego por parejas: uno dibuja las vistas y el otro reconstruye la pieza con cubos.", "Modelar en Tinkercad una pieza dibujada en papel isométrico."],
  },
  fuentes: [RD, wiki("Dibujo técnico", "Dibujo_t%C3%A9cnico"), wiki("Perspectiva isométrica", "Perspectiva_isom%C3%A9trica")],
  revisado: "2026-11-12",
};
