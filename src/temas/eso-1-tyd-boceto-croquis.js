// Tecnología y Digitalización 1º ESO: el dibujo técnico, boceto y croquis. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

// Cota horizontal entre x1 y x2 a la altura y, con texto encima.
const cotaH = (x1, x2, y, s) => `<path d="M${x1} ${y - 6} V ${y + 6} M${x2} ${y - 6} V ${y + 6} M${x1} ${y} H ${x2}" stroke="${COL.rojo}" stroke-width="1"/><path d="M${x1} ${y} l 6 -3 v 6 Z M${x2} ${y} l -6 -3 v 6 Z" fill="${COL.rojo}"/>${t((x1 + x2) / 2, y - 4, s, { size: 9, color: COL.rojo })}`;
// Cota vertical entre y1 y y2 en x, con texto a la izquierda.
const cotaV = (y1, y2, x, s) => `<path d="M${x - 6} ${y1} H ${x + 6} M${x - 6} ${y2} H ${x + 6} M${x} ${y1} V ${y2}" stroke="${COL.rojo}" stroke-width="1"/><path d="M${x} ${y1} l -3 6 h 6 Z M${x} ${y2} l -3 -6 h 6 Z" fill="${COL.rojo}"/>${t(x - 4, (y1 + y2) / 2 + 3, s, { size: 9, anchor: "end", color: COL.rojo })}`;

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "El dibujo técnico: boceto y croquis",
  minutos: 55,
  objetivos: ["Reconocer la utilidad del dibujo técnico como lenguaje universal", "Distinguir boceto, croquis y plano, y usar los materiales de dibujo", "Representar un objeto sencillo mediante sus vistas: alzado, planta y perfil", "Acotar un dibujo y usar escalas de ampliación y reducción"],
  claves: ["dibujo técnico", "boceto", "croquis", "plano", "normalización", "vistas", "alzado", "planta", "perfil", "acotación", "cota", "escala", "perspectiva"],
  pregunta: {
    texto: "Un mueble se diseña en Suecia, sus piezas se fabrican en Polonia y lo montas tú en casa siguiendo un folleto sin apenas palabras. ¿Cómo es posible entenderse sin hablar el mismo idioma?",
    respuesta: "Gracias al <b>dibujo técnico</b>, un lenguaje gráfico con <b>normas comunes</b> en todo el mundo: cómo se dibujan las vistas, cómo se indican las medidas, qué tipos de línea se usan. Con unos dibujos claros y las medidas exactas, cualquier persona puede fabricar o montar un objeto sin necesidad de traducir un texto.",
  },
  bloques: [
    {
      html: `<h3>El dibujo técnico, un lenguaje universal</h3><p>Para comunicar ideas sobre objetos, las palabras no siempre bastan: describir con texto la forma exacta de una pieza sería larguísimo y confuso. Por eso en tecnología se usa el <mark>dibujo técnico</mark>, una forma de representar objetos de manera <b>clara, precisa y objetiva</b>, para que cualquier persona pueda entender cómo son, cuánto miden y cómo se fabrican o se montan. A diferencia del dibujo artístico, que busca expresar emociones o la visión personal del autor, el dibujo técnico <b>no admite interpretaciones</b>: todo el mundo debe entenderlo igual. Para conseguirlo sigue unas reglas comunes, establecidas en las <mark>normas</mark> (en España, las normas UNE, y en todo el mundo, las ISO), que fijan, por ejemplo, el tamaño del papel (el DIN A4 mide 210 × 297 mm), los tipos de líneas, cómo se colocan las vistas y cómo se escriben las medidas. En el proceso tecnológico se usan tres tipos de dibujos, cada vez más precisos: el <b>boceto</b>, el <b>croquis</b> y el <b>plano</b>.</p>`,
    },
    {
      html: `<h3>Los materiales de dibujo</h3><p>Para dibujar a mano se usan unos materiales básicos. Los <b>lápices</b> pueden ser duros (<b>H</b>, de trazo fino y claro, para líneas auxiliares) o blandos (<b>B</b>, de trazo grueso y oscuro, para bocetos y sombras); el <b>HB</b> es intermedio y sirve para casi todo. También se usan portaminas, que siempre tienen la punta fina. La <b>goma de borrar</b> debe ser blanda para no estropear el papel. La <b>regla graduada</b> mide longitudes y traza líneas rectas. La <b>escuadra</b> (con ángulos de 90°, 45° y 45°) y el <b>cartabón</b> (con ángulos de 90°, 60° y 30°) se usan juntos para trazar líneas paralelas, perpendiculares y con ángulos determinados. El <b>compás</b> traza circunferencias y arcos, y el <b>transportador</b> mide ángulos. Hoy, en la industria, casi todo el dibujo técnico se hace con programas de <b>diseño asistido por ordenador (CAD)</b>, que permiten dibujar con gran precisión, modificar los diseños fácilmente y ver los objetos en tres dimensiones; pero saber hacer un boceto y un croquis a mano sigue siendo muy útil para pensar y comunicar ideas rápidamente.</p>`,
    },
    {
      html: `<h3>El boceto</h3><p>El <mark>boceto</mark> es un dibujo <b>rápido</b>, hecho a <b>mano alzada</b> (sin regla ni compás) y <b>sin medidas</b>, que sirve para plasmar una idea en el papel y comunicarla a los demás. Es el primer dibujo del proceso tecnológico, el de la fase de diseño, cuando se generan y comparan ideas. En un boceto lo importante es que se entienda la <b>forma general</b> del objeto y sus partes principales; no tiene por qué ser bonito ni exacto, pero sí claro. Puede incluir <b>flechas y notas</b> breves que expliquen cómo funciona o de qué material es cada parte («bisagra», «madera», «se abre hacia arriba»). Se suele dibujar en <b>perspectiva</b>, es decir, mostrando el objeto en tres dimensiones como lo vemos, porque así se entiende mejor. Un truco para dibujar cajas en perspectiva a mano alzada es partir de una esquina y trazar las aristas en tres direcciones: una vertical y dos inclinadas unos 30° hacia cada lado. Hacer varios bocetos de distintas ideas ayuda a elegir la mejor.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Boceto a mano alzada de una caja con tapa en perspectiva, con notas: tapa con bisagra y madera">${BG}
        <path d="M70 70 L 130 50 L 190 70 L 130 92 Z" fill="#fde68a" fill-opacity=".5" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M70 70 L 71 128 L 130 150 L 129 92 M130 150 L 190 129 L 190 70" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M72 71 L 74 129 M131 93 L 132 151" stroke="var(--ink)" stroke-width=".8" opacity=".5"/>
        ${fl(54, 38, 96, 60, COL.azul, 1.5)}${t(14, 34, "tapa con bisagra", { size: 9.5, anchor: "start", color: COL.azul })}
        ${fl(226, 120, 172, 112, COL.azul, 1.5)}${t(240, 134, "madera", { size: 9.5, anchor: "end", color: COL.azul })}
        ${t(130, 172, "a mano alzada, sin medidas", { size: 10, weight: 400, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El croquis</h3><p>El <mark>croquis</mark> es un dibujo hecho también a <b>mano alzada</b>, pero más cuidadoso y completo que el boceto: representa el objeto mediante sus <b>vistas</b> y con todas sus <b>medidas</b> (cotas), y mantiene más o menos las <b>proporciones</b> reales. Se hace una vez elegida la solución, y sirve para definirla con detalle y como paso previo al plano. También se usa mucho en el taller: si queremos copiar una pieza o hacer una reparación, se hace un croquis tomando las medidas del objeto real. Para hacer un buen croquis: 1) se observa bien el objeto y se eligen las vistas necesarias; 2) se encajan las vistas con líneas muy suaves, en forma de rectángulos que las contienen, cuidando las proporciones; 3) se dibujan los detalles; 4) se repasan las líneas definitivas con más fuerza; y 5) se añaden las cotas con las medidas. El <mark>plano</mark>, por último, es el dibujo definitivo: se hace con instrumentos de dibujo o con ordenador, a <b>escala</b>, siguiendo todas las normas, y es el que se usa para fabricar.</p>${tabla(["", "Boceto", "Croquis", "Plano"], [["Cómo se dibuja", "a mano alzada", "a mano alzada", "con instrumentos o CAD"], ["Medidas", "no", "sí (cotas)", "sí (cotas)"], ["Proporciones", "aproximadas", "bastante cuidadas", "exactas, a escala"], ["Para qué sirve", "expresar ideas", "definir la solución", "fabricar"]])}`,
      video: { id: "Cw9vh5XOmuM", titulo: "MOOC Visión espacial: ¿Cómo hacer un croquis?", canal: "UPM", vistas: 194679 },
    },
    {
      html: `<h3>Las vistas de un objeto</h3><p>Un objeto tiene tres dimensiones: largo, ancho y alto. Para representarlo en un papel con exactitud, se dibuja como se vería <b>mirándolo de frente desde distintas direcciones</b>, como si estuviéramos muy lejos y solo viéramos una cara cada vez. Cada uno de esos dibujos es una <mark>vista</mark>. Las tres vistas principales son: el <mark>alzado</mark>, la vista <b>de frente</b>, que se elige de forma que muestre la mayor cantidad de detalles del objeto; la <mark>planta</mark>, la vista <b>desde arriba</b>; y el <mark>perfil</mark>, la vista <b>desde la izquierda</b> (perfil izquierdo). Según la norma europea, las vistas se colocan en el papel de una forma fija: el <b>alzado</b> arriba a la izquierda, la <b>planta debajo del alzado</b> y el <b>perfil izquierdo a la derecha del alzado</b>. Las vistas están relacionadas entre sí: el alzado y la planta tienen el mismo <b>largo</b>; el alzado y el perfil, la misma <b>altura</b>; y la planta y el perfil, el mismo <b>ancho</b>. Las aristas que se ven se dibujan con línea continua gruesa, y las que quedan ocultas, con línea discontinua.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pieza en forma de L y sus tres vistas: alzado arriba a la izquierda, planta debajo y perfil izquierdo a la derecha del alzado">${BG}
        <path d="M14 76 V 36 H 30 V 58 H 62 V 76 Z" fill="#e0f2fe" stroke="var(--ink)" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 36 L 28 26 H 44 V 48 L 76 48 V 66 L 62 76 M30 36 L 44 26 M30 58 L 44 48 M62 58 L 76 48" fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-linejoin="round"/>
        ${t(46, 98, "pieza", { size: 9.5, color: "var(--muted)" })}
        <path d="M110 30 V 80 H 170 V 58 H 134 V 30 Z" fill="#bfdbfe" stroke="var(--ink)" stroke-width="2"/>${t(140, 24, "alzado", { size: 10, color: COL.azul })}
        <rect x="110" y="100" width="60" height="40" fill="#bbf7d0" stroke="var(--ink)" stroke-width="2"/><path d="M134 100 V 140" stroke="var(--ink)" stroke-width="2"/>${t(140, 156, "planta", { size: 10, color: COL.verde })}
        <rect x="190" y="30" width="40" height="50" fill="#fde68a" stroke="var(--ink)" stroke-width="2"/><path d="M190 58 H 230" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3"/>${t(210, 24, "perfil", { size: 10, color: COL.sol })}
        <path d="M110 84 V 96 M170 84 V 96 M174 30 H 186 M174 80 H 186" stroke="var(--muted)" stroke-dasharray="2 2"/></svg>`,
      video: { id: "gbFG603q9fU", titulo: "VISTAS de una FIGURA dibujo técnico: planta, alzado y perfil de un objeto", canal: "Dibujo Técnico paso a paso", vistas: 77958 },
    },
    {
      html: `<h3>La acotación</h3><p><mark>Acotar</mark> es indicar en el dibujo las <b>medidas reales</b> del objeto, para que se pueda fabricar. Cada medida se llama <mark>cota</mark>. Una cota tiene varios elementos: las <b>líneas auxiliares de cota</b>, finas, que prolongan las aristas del objeto; la <b>línea de cota</b>, fina y paralela a la medida, que se dibuja entre las auxiliares con una <b>flecha</b> en cada extremo; y la <b>cifra de cota</b>, el número que indica la medida, que se escribe encima de la línea de cota y centrada. Algunas normas básicas: las medidas se expresan en <b>milímetros</b> y no se escribe la unidad; la cifra siempre indica la <b>medida real</b> del objeto, aunque el dibujo esté ampliado o reducido; cada medida se indica <b>una sola vez</b>, en la vista donde mejor se vea; las cotas se colocan, si es posible, <b>fuera</b> de la figura; y las cifras de las cotas verticales se escriben de forma que se lean desde la derecha. Para los círculos se usa el símbolo <b>Ø</b> delante del diámetro, y para los arcos, la letra <b>R</b> delante del radio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rectángulo acotado de 80 por 40 milímetros con un agujero de diámetro 10: líneas auxiliares, líneas de cota con flechas y cifras">${BG}
        <rect x="70" y="60" width="140" height="70" fill="#e0f2fe" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="175" cy="95" r="10" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><path d="M160 95 H 190 M175 80 V 110" stroke="var(--muted)" stroke-width=".8" stroke-dasharray="6 2 1 2"/>
        <path d="M70 56 V 30 M210 56 V 30 M66 60 H 40 M66 130 H 40" stroke="${COL.rojo}" stroke-width=".8"/>
        ${cotaH(70, 210, 38, "80")}${cotaV(60, 130, 48, "40")}
        ${fl(214, 150, 184, 102, COL.rojo, 1)}${t(222, 162, "Ø10", { size: 10, color: COL.rojo })}
        ${t(140, 160, "medidas en mm", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "sgvhrVJMt3k", titulo: "Principios básicos de acotación. Tutorial básico para comenzar a acotar", canal: "Curso de dibujo. Demetrio Susin.", vistas: 153435 },
    },
    {
      html: `<h3>Las escalas</h3><p>Muchos objetos son demasiado grandes para dibujarlos en un papel a su tamaño real, como una casa o un puente, y otros son tan pequeños que no se verían bien, como una pieza de un reloj. Por eso se dibujan a <mark>escala</mark>: todas las medidas se multiplican o se dividen por el mismo número, de modo que el dibujo mantiene la forma y las proporciones del objeto. La escala se escribe como una división: <b>medida en el dibujo : medida real</b>. Hay tres tipos. La <b>escala natural</b> es <b>1:1</b>: el dibujo tiene el mismo tamaño que el objeto. Las <b>escalas de reducción</b>, como <b>1:2, 1:10 o 1:100</b>, se usan para objetos grandes: en la escala 1:10, cada centímetro del dibujo son 10 centímetros en la realidad. Las <b>escalas de ampliación</b>, como <b>2:1 o 5:1</b>, se usan para objetos pequeños: en la escala 2:1, el dibujo es el doble de grande que el objeto. Para calcular: <b>medida en el dibujo = medida real × escala</b>. Recuerda que las cotas siempre indican la medida real, sea cual sea la escala.</p>${tabla(["Escala", "Tipo", "1 cm en el dibujo es…", "Uso típico"], [["1:1", "natural", "1 cm real", "piezas medianas"], ["1:2", "reducción", "2 cm reales", "muebles pequeños"], ["1:100", "reducción", "1 m real", "planos de una casa"], ["2:1", "ampliación", "0,5 cm reales", "piezas pequeñas"]])}`,
    },
    {
      html: `<h3>La perspectiva</h3><p>Las vistas son muy precisas, pero a veces cuesta imaginar el objeto a partir de ellas. Por eso, además, se dibujan <mark>perspectivas</mark>: representaciones que muestran el objeto en <b>tres dimensiones</b> en un solo dibujo, como lo veríamos en la realidad. En dibujo técnico se usan sobre todo dos. La <b>perspectiva caballera</b> dibuja la cara frontal del objeto en verdadera magnitud, igual que el alzado, y las líneas de profundidad inclinadas 45° y reducidas a la mitad; es muy fácil de hacer. La <b>perspectiva isométrica</b> dibuja las tres direcciones del objeto (largo, ancho y alto) con la misma importancia: las aristas verticales se dibujan verticales y las otras dos direcciones, inclinadas 30° respecto a la horizontal; con ella, el objeto se ve como desde una esquina. Para dibujar en isométrica es muy útil el papel con una <b>trama de triángulos</b> (papel isométrico). Una buena forma de practicar la visión espacial es hacer el camino en los dos sentidos: dibujar las vistas a partir de una perspectiva y dibujar la perspectiva a partir de las vistas.</p>`,
    },
  ],
  figura: {
    titulo: "El dibujo técnico en ocho ideas",
    svg: rejilla([
      ["Boceto", "idea rápida, sin medidas", COL.sol],
      ["Croquis", "a mano, con vistas y cotas", COL.naranja],
      ["Plano", "con instrumentos, a escala", COL.azul],
      ["Alzado", "vista de frente", COL.agua],
      ["Planta", "vista desde arriba", COL.verde],
      ["Perfil", "vista desde la izquierda", COL.marron],
      ["Cota", "medida real en mm", COL.rojo],
      ["Escala", "dibujo : realidad", COL.morado],
    ], 4, 86, "Resumen: boceto, croquis, plano, vistas, cota y escala"),
  },
  video: { id: "8p5Xg4veB9E", titulo: "El Croquis - ¿Qué es? - Ejemplos.", canal: "Juan Marcel Francia", vistas: 16301, megusta: 0, busqueda: "boceto y croquis dibujo técnico" },
  ejemplos: [
    { enunciado: "Una mesa mide 120 cm de largo. ¿Cuánto medirá en un plano a escala 1:10?",
      pasos: ["Medida en el dibujo = medida real × escala.", "120 cm × 1/10 = 12 cm."],
      resultado: "12 cm en el dibujo (y la cota seguirá diciendo 1200 mm)." },
    { enunciado: "Una pieza de un reloj mide 4 mm. ¿Cuánto medirá en un dibujo a escala 5:1?",
      pasos: ["Escala de ampliación: el dibujo es 5 veces mayor.", "4 mm × 5 = 20 mm."],
      resultado: "20 mm en el dibujo." },
    { enunciado: "En un plano a escala 1:50, una pared mide 8 cm. ¿Cuánto mide en la realidad?",
      pasos: ["Cada centímetro del dibujo son 50 cm reales.", "8 cm × 50 = 400 cm.", "400 cm = 4 m."],
      resultado: "La pared mide 4 metros." },
  ],
  errores: [
    "Poner medidas en un boceto o hacer un croquis sin cotas.",
    "Colocar el perfil izquierdo a la izquierda del alzado: va a la derecha.",
    "Escribir en la cota la medida del dibujo en lugar de la real.",
    "Repetir la misma cota en varias vistas.",
    "Confundir escala de ampliación (2:1) con la de reducción (1:2).",
  ],
  ejercicios: [
    { q: "¿Por qué decimos que el dibujo técnico es un lenguaje universal?", sol: "Porque sigue normas comunes y cualquier persona del mundo lo interpreta igual." },
    { q: "¿Para qué sirven la escuadra y el cartabón? ¿Qué ángulos tiene cada uno?", sol: "Para trazar paralelas, perpendiculares y ángulos; escuadra 90°, 45° y 45°; cartabón 90°, 60° y 30°." },
    { q: "Escribe tres diferencias entre un boceto y un croquis.", sol: "El croquis tiene medidas, se dibuja con vistas y cuida más las proporciones; el boceto es una idea rápida sin medidas, a menudo en perspectiva." },
    { q: "¿Qué es el alzado? ¿Y la planta?", sol: "El alzado es la vista de frente; la planta, la vista desde arriba." },
    { q: "¿Dónde se colocan la planta y el perfil izquierdo respecto al alzado?", sol: "La planta debajo del alzado y el perfil izquierdo a su derecha." },
    { q: "¿Qué dimensión comparten el alzado y el perfil?", sol: "La altura." },
    { q: "Nombra los elementos de una cota.", sol: "Líneas auxiliares, línea de cota con flechas y cifra de cota." },
    { q: "¿Qué significan los símbolos Ø y R en una cota?", sol: "Ø indica diámetro y R indica radio." },
    { q: "Un aula mide 9 m de largo. ¿Cuánto medirá en un plano a escala 1:100?", sol: "900 cm / 100 = 9 cm." },
    { q: "¿Qué diferencia hay entre la perspectiva caballera y la isométrica?", sol: "La caballera dibuja el frente en verdadera magnitud y la profundidad a 45° y reducida; la isométrica dibuja las tres direcciones con igual importancia, dos de ellas a 30°." },
  ],
  quiz: [
    { q: "Un dibujo rápido, a mano y sin medidas es un…", o: ["boceto", "croquis", "plano"], a: 0, e: "Boceto." },
    { q: "El croquis se dibuja…", o: ["a mano alzada con medidas", "con ordenador", "sin vistas"], a: 0, e: "A mano alzada y con cotas." },
    { q: "El lápiz para trazos finos y claros es el…", o: ["H", "B", "2B"], a: 0, e: "Duro: H." },
    { q: "La vista de frente se llama…", o: ["alzado", "planta", "perfil"], a: 0, e: "Alzado." },
    { q: "La planta se ve desde…", o: ["arriba", "la izquierda", "abajo"], a: 0, e: "Desde arriba." },
    { q: "Las aristas ocultas se dibujan con línea…", o: ["discontinua", "gruesa continua", "roja"], a: 0, e: "Discontinua." },
    { q: "Las cotas se expresan en…", o: ["milímetros", "metros", "pulgadas"], a: 0, e: "Milímetros." },
    { q: "La escala 1:1 es…", o: ["natural", "de ampliación", "de reducción"], a: 0, e: "Natural." },
    { q: "La escala 1:100 es de…", o: ["reducción", "ampliación", "natural"], a: 0, e: "Reducción." },
    { q: "Un folio DIN A4 mide…", o: ["210 × 297 mm", "100 × 200 mm", "297 × 420 mm"], a: 0, e: "210 × 297 mm." },
  ],
  examen: [
    { q: "Si un dibujo está a escala 1:2, la cota indica…", o: ["la medida real", "la mitad de la real", "el doble"], a: 0, e: "Siempre la medida real." },
    { q: "En perspectiva isométrica las aristas horizontales se inclinan…", o: ["30°", "45°", "90°"], a: 0, e: "30°." },
    { q: "El alzado y la planta comparten…", o: ["el largo", "la altura", "el ancho"], a: 0, e: "El largo." },
  ],
  feynman: ["Qué diferencia hay entre boceto, croquis y plano", "Cómo se colocan las vistas de un objeto", "Cómo se calcula una medida con una escala"],
  mapa: mapa("DIBUJO TÉCNICO", "var(--eso)", [
    ["Tipos", "boceto · croquis · plano", COL.sol],
    ["Vistas", "alzado · planta · perfil", COL.azul],
    ["Acotación", "líneas, flechas y cifras", COL.rojo],
    ["Escalas", "1:1 · 1:10 · 2:1", COL.morado],
  ], 300),
  tarjetas: [
    ["Boceto", "Dibujo rápido a mano alzada, sin medidas."],
    ["Croquis", "Dibujo a mano alzada con vistas y medidas."],
    ["Plano", "Dibujo definitivo con instrumentos o CAD, a escala."],
    ["Alzado", "Vista de frente; arriba a la izquierda."],
    ["Planta", "Vista desde arriba; debajo del alzado."],
    ["Perfil izquierdo", "Vista desde la izquierda; a la derecha del alzado."],
    ["Cota", "Medida real indicada en el dibujo, en milímetros."],
    ["Escala", "Relación entre la medida del dibujo y la real."],
  ],
  familias: ["Dibujad juntos el plano de vuestra habitación a escala 1:50 midiendo las paredes.", "Elegid una caja de cereales y dibujad su alzado, planta y perfil con sus medidas.", "Buscad las instrucciones de montaje de algún mueble y fijaos en cómo explican los pasos sin palabras."],
  profesores: {
    saberes: "Expresión gráfica: boceto, croquis y plano, normalización básica, materiales de dibujo, sistema diédrico (vistas), acotación, escalas y perspectivas caballera e isométrica; iniciación al CAD (RD 217/2022, Tecnología y Digitalización, bloque Proceso de resolución de problemas).",
    ideas: ["Croquis de piezas reales del taller tomando medidas con el calibre o la regla.", "Reto: construir con cubos encajables un objeto a partir de sus tres vistas.", "Primer diseño en Tinkercad de un llavero acotado."],
  },
  fuentes: [RD, wiki("Dibujo técnico", "Dibujo_técnico"), wiki("Escala (cartografía)", "Escala_(cartografía)"), { t: "UNE: normalización española", url: "https://www.une.org/" }],
  revisado: REV,
};

// Ampliación a nivel libro (README, «Tema nivel libro»), pensada para alumnos de 12 años:
// lectura, apartados nuevos, ejercicios por niveles, glosario y situación de aprendizaje.
require("./_eso1L5").libro(module.exports, {
  lectura: ["La estantería que no cabía", `<p>El tío de Pau es carpintero. Un sábado, una clienta lo llamó por teléfono: «Quiero una estantería para el comedor, alta, con tres baldas y que quede bonita». El tío de Pau la construyó con mucho cuidado. Pero cuando la llevó a casa de la clienta… ¡no cabía! Era cinco centímetros más alta que el hueco de la pared.</p><p>«¿Cómo puede ser?», preguntó Pau. Su tío le enseñó entonces su cuaderno: «A partir de ahora, antes de hacer nada, dibujo». En una página había un dibujo rápido de una mesa, hecho en un minuto. En la siguiente, el mismo objeto dibujado de frente, desde arriba y de lado, con flechas y números por todas partes. «El primero es un boceto, para pensar la idea. El segundo es un croquis, con todas las medidas. Si se lo enseño al cliente y lo aprueba, ya no hay sorpresas».</p><p>Pau se quedó mirando los dibujos. Aunque no sabía de carpintería, entendía perfectamente cómo era la mesa: cuánto medía, dónde iban las patas y qué grosor tenía el tablero. «Es como un idioma», dijo. «Exacto», respondió su tío. «Un idioma que entienden los carpinteros de aquí y los de Japón».</p><p>En este tema aprenderás ese idioma: el <b>dibujo técnico</b>. Sabrás hacer bocetos y croquis, dibujar las vistas de un objeto, acotarlo, usar escalas y representarlo en perspectiva.</p>`],
  mas: [
    ["<h3>El boceto</h3>", `<p>Un buen boceto no tiene que ser bonito, sino <b>claro</b>. Se pueden añadir flechas, notas y colores para explicar cómo funciona el objeto o de qué material será cada parte. En la fase de diseño se suelen hacer muchos bocetos de ideas diferentes: dibujar rápido permite comparar y descartar sin perder tiempo.</p>`],
    ["<h3>La acotación</h3>", `<p>Algunas normas para acotar bien: las cotas se colocan <b>fuera</b> de la figura siempre que se pueda; las más pequeñas, más cerca del dibujo, y las más grandes, más lejos, para que las líneas no se crucen; cada medida se pone <b>una sola vez</b>, en la vista donde mejor se vea; y los números se escriben encima de la línea de cota, centrados y legibles desde abajo o desde la derecha.</p>`],
  ],
  svgs: [
    ["<h3>El dibujo técnico, un lenguaje universal</h3>", "Un lenguaje universal", [["normas", "iguales en todo el mundo"], ["preciso", "formas y medidas exactas"], ["útil", "fabricar sin explicaciones"]], "dibujar para comunicar"],
    ["<h3>Los materiales de dibujo</h3>", "Materiales de dibujo", [["lápices", "H fino, B blando, HB"], ["escuadra", "90°, 45°, 45°"], ["cartabón", "90°, 60°, 30°"], ["compás", "circunferencias"]], "para dibujar a mano"],
    ["<h3>El croquis</h3>", "Boceto o croquis", [["boceto", "rápido, sin medidas"], ["croquis", "vistas y cotas, a mano"], ["plano", "con instrumentos o CAD"]], "tres dibujos del proyecto"],
    ["<h3>Las escalas</h3>", "Las escalas", [["natural", "1:1, mismo tamaño"], ["reducción", "1:10, 1:100"], ["ampliación", "2:1, 5:1"], ["cálculo", "dibujo = real × escala"]], "dibujar a otro tamaño"],
    ["<h3>La perspectiva</h3>", "Perspectivas", [["caballera", "frente real, fondo a 45°"], ["isométrica", "ejes a 30°"], ["papel isométrico", "trama de triángulos"]], "el objeto en 3D"],
  ],
  bloques: [
    { tras: "<h3>Los materiales de dibujo</h3>", html: `<h3>Los tipos de línea</h3><p>En dibujo técnico, cada tipo de línea tiene un significado. Así, quien lee el plano sabe qué representa cada trazo sin necesidad de explicaciones:</p><ul><li><b>Línea continua gruesa</b>: los contornos y las aristas que se ven del objeto.</li><li><b>Línea continua fina</b>: las líneas de cota, las líneas auxiliares y los rayados.</li><li><b>Línea discontinua</b> (a trazos): las aristas que no se ven porque quedan ocultas detrás de otras partes.</li><li><b>Línea de trazo y punto</b> fina: los ejes de simetría y los centros de las circunferencias.</li></ul><p>Para que las líneas se distingan bien, se dibujan con lápices diferentes: un lápiz blando o un portaminas de 0,5 mm para las gruesas y un lápiz duro o de 0,3 mm para las finas. Al empezar un dibujo, se trazan primero todas las líneas finas y suaves, y al final se repasan con trazo grueso las que deben quedar visibles. Así, si nos equivocamos, es fácil borrar.</p>`, svg: ["Tipos de línea", [["continua gruesa", "contornos visibles"], ["continua fina", "cotas y auxiliares"], ["discontinua", "aristas ocultas"], ["trazo y punto", "ejes de simetría"]], "cada línea dice algo"] },
    { tras: "<h3>Las vistas de un objeto</h3>", html: `<h3>Cómo dibujar las vistas paso a paso</h3><p>Dibujar las vistas de un objeto requiere práctica, pero siguiendo un método es mucho más fácil:</p><ol><li><b>Observa el objeto</b> y decide cuál será el alzado: la cara que mejor muestra su forma.</li><li><b>Dibuja el alzado</b> con líneas finas, respetando las proporciones (largo y alto).</li><li><b>Dibuja la planta debajo del alzado</b>: tendrá el mismo largo. Prolonga hacia abajo las líneas verticales del alzado para que coincidan.</li><li><b>Dibuja el perfil izquierdo a la derecha del alzado</b>: tendrá la misma altura. Prolonga hacia la derecha las líneas horizontales.</li><li>Añade las <b>aristas ocultas</b> con línea discontinua y los <b>ejes</b> con trazo y punto.</li><li><b>Repasa</b> con línea gruesa los contornos visibles y borra las líneas auxiliares que sobren.</li></ol><p>Recuerda la regla que relaciona las vistas: el alzado y la planta comparten el <b>largo</b>; el alzado y el perfil, la <b>altura</b>; la planta y el perfil, el <b>ancho</b> o profundidad.</p>`, svg: ["Vistas paso a paso", [["alzado", "la cara principal"], ["planta", "debajo, mismo largo"], ["perfil izquierdo", "a la derecha, misma altura"], ["repasar", "gruesas las visibles"]], "un método ordenado"] },
    { tras: "<h3>Las escalas</h3>", html: `<h3>El formato del papel y el cajetín</h3><p>Para que los planos se puedan archivar y fotocopiar, se dibujan en hojas de tamaño normalizado. La serie más usada es la <b>DIN A</b>: el <b>A4</b> mide 210 × 297 mm (un folio); el <b>A3</b> es el doble (297 × 420 mm), y el <b>A5</b>, la mitad (148 × 210 mm). Cada formato se obtiene doblando por la mitad el anterior.</p><p>Las láminas de dibujo técnico tienen un <b>margen</b> (un recuadro a unos 10 mm del borde) y, en la esquina inferior derecha, un <mark>cajetín</mark>: un pequeño recuadro con los datos del plano. Normalmente incluye:</p><ul><li>El <b>título</b> del dibujo (por ejemplo, «Portalápices: vistas»).</li><li>El <b>nombre</b> de quien lo ha dibujado y el curso.</li><li>La <b>fecha</b>.</li><li>La <b>escala</b> utilizada.</li><li>El <b>número</b> de lámina.</li></ul><p>Con el cajetín, cualquiera que coja el plano sabe enseguida qué representa, quién lo hizo y a qué escala está. Es como la etiqueta de un archivo.</p>`, svg: ["Formatos y cajetín", [["A4", "210 × 297 mm"], ["A3", "297 × 420 mm"], ["cajetín", "título, nombre, escala"], ["margen", "a unos 10 mm del borde"]], "la lámina normalizada"] },
    { html: `<h3>Del papel al ordenador: el dibujo con CAD</h3><p>En las empresas, casi todos los planos se hacen hoy con programas de <b>diseño asistido por ordenador</b> o <mark>CAD</mark> (de sus siglas en inglés). Tienen muchas ventajas: las medidas son exactas, se pueden corregir errores sin borrar, se pueden copiar piezas iguales, cambiar la escala con un clic y enviar el plano por correo.</p><p>Hay programas de CAD en <b>2D</b>, que dibujan vistas como en el papel, y en <b>3D</b>, que construyen el objeto en tres dimensiones y permiten girarlo, verlo por dentro e incluso obtener automáticamente sus vistas. En el aula se usan programas gratuitos y sencillos como <b>Tinkercad</b> (en línea), <b>SketchUp</b> o <b>FreeCAD</b>. En Tinkercad, por ejemplo, se construyen objetos combinando formas básicas (cubos, cilindros, esferas) y restando unas de otras para hacer agujeros.</p><p>El diseño en 3D se puede enviar a una <b>impresora 3D</b>, que fabrica la pieza capa a capa. Aun así, el proceso empieza casi siempre con un boceto a mano: es la forma más rápida de pensar.</p>`, svg: ["El dibujo con CAD", [["2D", "vistas como en papel"], ["3D", "girar y ver por dentro"], ["Tinkercad", "formas básicas"], ["impresora 3D", "fabrica capa a capa"]], "diseño asistido por ordenador"] },
  ],
  grupos: [4, 4, 4],
  ejemplos: [
    ["Dibuja las vistas de una pieza en forma de L: 40 mm de largo, 30 mm de alto, 20 mm de ancho, con un escalón de 20 × 15 mm arriba a la derecha.", ["Alzado: la L vista de frente (40 × 30 mm) con el escalón recortado arriba a la derecha.", "Planta debajo: un rectángulo de 40 × 20 mm con una línea en x = 20 mm donde cambia la altura.", "Perfil izquierdo a la derecha: rectángulo de 20 × 30 mm con una línea discontinua si el escalón queda oculto."], "Tres vistas alineadas: alzado arriba a la izquierda, planta debajo y perfil a la derecha."],
    ["¿Qué tipo de línea usarías para: a) el contorno de una caja; b) un agujero que no se ve; c) el eje de un cilindro?", ["a) Arista visible: línea continua gruesa.", "b) Arista oculta: línea discontinua.", "c) Eje de simetría: trazo y punto fino."], "a) continua gruesa; b) discontinua; c) trazo y punto"],
    ["Una puerta dibujada a escala 1:20 mide 10 cm en el plano. ¿Cuánto mide la puerta real?", ["En 1:20, cada cm del dibujo son 20 cm reales.", "10 × 20 = 200 cm.", "Comprobamos que tiene sentido: una puerta suele medir unos 2 m."], "La puerta mide 200 cm = 2 m de altura."],
  ],
  errores: ["Repasar con línea gruesa desde el principio: luego no se pueden borrar las líneas auxiliares."],
  niveles: "bbbbbmmmaa",
  ejercicios: [
    ["b", "¿Qué representa la línea discontinua en un dibujo técnico?", "Las <b>aristas ocultas</b>, que no se ven porque están detrás de otras partes."],
    ["b", "¿Qué tipo de línea se usa para los ejes de simetría?", "La línea fina de <b>trazo y punto</b>."],
    ["b", "¿Cuánto mide un A4? ¿Y un A3?", "A4: <b>210 × 297 mm</b>. A3: <b>297 × 420 mm</b>."],
    ["b", "¿Qué datos lleva el cajetín?", "Título, nombre del autor, curso, fecha, <b>escala</b> y número de lámina."],
    ["b", "¿Qué significa CAD?", "<b>Diseño asistido por ordenador</b> (Computer-Aided Design)."],
    ["b", "¿Dónde va la planta respecto al alzado?", "<b>Debajo</b> del alzado."],
    ["b", "Nombra un programa de CAD gratuito que se pueda usar en el aula.", "Por ejemplo, <b>Tinkercad</b> (también SketchUp o FreeCAD)."],
    ["m", "Dibuja el boceto y el croquis (con tres vistas acotadas) de una goma de borrar de 50 × 20 × 10 mm.", "Boceto: dibujo rápido en perspectiva sin medidas. Croquis: alzado 50 × 10, planta 50 × 20 debajo, perfil 20 × 10 a la derecha, con cotas de 50, 20 y 10 mm."],
    ["m", "Un campo de fútbol mide 100 m de largo. ¿Cuánto medirá en un plano a escala 1:1.000?", "100 m = 10.000 cm; 10.000 / 1.000 = <b>10 cm</b>."],
    ["m", "¿Por qué se trazan primero las líneas finas y al final se repasan las gruesas?", "Porque las líneas finas se pueden <b>borrar</b> fácilmente si nos equivocamos; al final se repasan solo las que deben quedar visibles."],
    ["m", "¿Qué ventajas tiene el CAD respecto al dibujo a mano? Escribe tres.", "Medidas <b>exactas</b>, se pueden <b>corregir</b> errores sin borrar, se pueden <b>copiar</b> piezas, cambiar la escala, ver en 3D y enviar por correo."],
    ["m", "¿Qué medida comparten la planta y el perfil izquierdo?", "El <b>ancho</b> o profundidad."],
    ["a", "Dibuja en perspectiva caballera un dado de 2 cm de arista.", "Cara frontal: cuadrado de 2 × 2 cm. Líneas de profundidad a 45° y reducidas a la mitad (1 cm). Se unen los vértices y se repasan las aristas visibles."],
    ["a", "Dibuja las vistas de tu goma de borrar o tu sacapuntas con su cajetín en una hoja A4.", "Respuesta abierta. Debe incluir margen, cajetín completo, tres vistas bien colocadas, tipos de línea correctos y cotas en mm."],
    ["a", "Diseña en Tinkercad un llavero con tu inicial y un agujero, y explica qué formas has combinado.", "Respuesta abierta. Ejemplo: un cilindro aplastado como base, una letra en relieve encima y un cilindro pequeño como «hueco» para el agujero."],
    ["a", "Un plano de tu aula está a escala 1:50. Si el aula mide 8 × 6 m, ¿qué medidas tendrá en el plano? ¿Cabe en un A4?", "8 m = 800 cm / 50 = <b>16 cm</b>; 6 m = 600 cm / 50 = <b>12 cm</b>. Sí cabe en un A4 (21 × 29,7 cm)."],
    ["a", "Encuentra los errores de este croquis: perfil a la izquierda del alzado, cota repetida en dos vistas y medidas en cm.", "El perfil izquierdo debe ir a la <b>derecha</b> del alzado; cada cota se pone <b>una sola vez</b>; las medidas se expresan en <b>milímetros</b> sin escribir la unidad."],
    ["a", "Dibuja en perspectiva isométrica una pieza a partir de sus vistas (el profesor te dará las vistas).", "Respuesta abierta. Debe usar los ejes a 30°, medidas reales en las tres direcciones y aristas ocultas sin dibujar."],
    ["a", "Un tornillo mide 6 mm de largo. Dibújalo a escala 5:1: ¿cuánto medirá en el papel? ¿Por qué se usa una escala de ampliación?", "6 × 5 = <b>30 mm</b>. Se usa una escala de ampliación porque a tamaño real el dibujo sería demasiado pequeño para ver los detalles."],
    ["a", "Explica qué ventajas tiene que el dibujo técnico siga normas iguales en todo el mundo.", "Que un plano hecho en un país se pueda <b>fabricar en otro</b> sin traducciones ni explicaciones: todos entienden igual los tipos de línea, las vistas, las cotas y las escalas. Evita errores y abarata la fabricación."],
    ["a", "Compara el boceto, el croquis y el plano en una tabla (cómo se hace, medidas, cuándo se usa).", "Boceto: a mano alzada, sin medidas, para pensar ideas. Croquis: a mano alzada, con vistas y cotas, para definir el objeto. Plano: con instrumentos o CAD, a escala y normalizado, para fabricar."],
  ],
  cuartas: ["dibujo artístico", "con compás", "HB", "perfil", "un lado", "fina continua", "centímetros", "aumentada", "ampliación", "148 × 210 mm", "el área", "60°", "el ancho"],
  quiz: [
    ["Las aristas ocultas se representan con línea…", ["discontinua", "continua gruesa", "de trazo y punto", "ondulada"], "Están detrás de otras partes."],
    ["Los contornos visibles se dibujan con línea…", ["continua gruesa", "continua fina", "discontinua", "de puntos"], "Son las aristas que se ven."],
    ["El eje de una pieza cilíndrica se dibuja con…", ["trazo y punto", "línea discontinua", "línea gruesa", "flechas"], "Eje de simetría."],
    ["El cajetín se coloca en la esquina…", ["inferior derecha", "superior izquierda", "superior derecha", "centro"], "Abajo a la derecha."],
    ["El formato A3 es…", ["el doble del A4", "la mitad del A4", "igual que el A4", "el cuádruple del A5"], "297 × 420 mm."],
    ["El perfil izquierdo se coloca…", ["a la derecha del alzado", "a la izquierda del alzado", "encima del alzado", "debajo de la planta"], "Aunque se llame izquierdo."],
    ["El alzado y el perfil comparten…", ["la altura", "el largo", "el ancho", "el área"], "Están a la misma altura."],
    ["CAD significa…", ["diseño asistido por ordenador", "cálculo automático de distancias", "control de aparatos digitales", "cajetín de dibujo"], "Computer-Aided Design."],
    ["Al empezar un dibujo técnico conviene…", ["trazar líneas finas y suaves", "repasar todo grueso", "pintarlo de colores", "poner primero las cotas"], "Después se repasa."],
    ["Una impresora 3D fabrica las piezas…", ["capa a capa", "cortando un bloque", "con moldes", "doblando chapa"], "Fabricación aditiva."],
  ],
  examen: [
    ["La línea fina continua se usa para…", ["las cotas", "las aristas ocultas", "los contornos visibles", "los ejes"], "También líneas auxiliares."],
    ["Un folio A4 mide…", ["210 × 297 mm", "297 × 420 mm", "148 × 210 mm", "200 × 300 mm"], "Es el formato más usado."],
    ["En el cajetín NO suele aparecer…", ["el precio del objeto", "la escala", "el título", "el nombre"], "Es un dato del presupuesto, no del plano."],
    ["Tinkercad es un programa de…", ["CAD en 3D", "hoja de cálculo", "presentaciones", "mensajería"], "Diseño con formas básicas."],
    ["La planta y el perfil comparten…", ["el ancho", "la altura", "el largo", "nada"], "La profundidad del objeto."],
  ],
  tarjetas: [["Línea discontinua", "Representa aristas ocultas."], ["Trazo y punto", "Representa ejes de simetría y centros."], ["Cajetín", "Recuadro con título, autor, fecha y escala del plano."], ["CAD", "Diseño asistido por ordenador, en 2D o 3D."]],
  glosario: [
    ["dibujo técnico", "Lenguaje gráfico normalizado para representar objetos."],
    ["boceto", "Dibujo rápido a mano alzada sin medidas."],
    ["croquis", "Dibujo a mano alzada con vistas y medidas."],
    ["plano", "Dibujo preciso hecho con instrumentos o con ordenador."],
    ["alzado", "Vista de frente del objeto."],
    ["planta", "Vista desde arriba."],
    ["perfil izquierdo", "Vista desde la izquierda, dibujada a la derecha del alzado."],
    ["arista oculta", "Arista que no se ve; se dibuja discontinua."],
    ["cota", "Medida real indicada en el dibujo."],
    ["escala", "Relación entre la medida del dibujo y la real."],
    ["cajetín", "Recuadro con los datos del plano."],
    ["formato DIN A", "Serie normalizada de tamaños de papel."],
    ["perspectiva caballera", "Dibujo 3D con la cara frontal real y el fondo a 45°."],
    ["perspectiva isométrica", "Dibujo 3D con los ejes a 30°."],
    ["CAD", "Diseño asistido por ordenador."],
  ],
  situacion: { titulo: "El plano de mi invento", reto: "Diseñar un objeto útil para el aula o para casa (portalápices, soporte para el móvil, organizador) y prepararle toda la documentación gráfica para que otra persona lo pueda fabricar.", pasos: ["Hacer tres bocetos de ideas diferentes y elegir una.", "Dibujar el croquis con las tres vistas y todas las cotas.", "Pasarlo a limpio en una lámina A4 con margen, cajetín y escala adecuada.", "Dibujar el objeto en perspectiva caballera o isométrica.", "Modelarlo en Tinkercad y, si se puede, imprimirlo en 3D.", "Intercambiar los planos con otro grupo y comprobar si lo entienden sin explicaciones."], producto: "Una lámina normalizada con vistas, cotas y perspectiva, y el modelo en 3D.", evaluacion: ["Las vistas están bien colocadas y son coherentes entre sí.", "Las cotas son correctas, completas y no se repiten.", "Usa bien los tipos de línea, el formato y el cajetín.", "Otro grupo puede entender el objeto solo con el plano."] },
  saberes: "tipos de línea normalizados; método para dibujar vistas; formatos DIN A, márgenes y cajetín; diseño 2D y 3D con programas de CAD e iniciación a la impresión 3D.",
  familias: ["Dibujad juntos un mueble de casa visto de frente, desde arriba y de lado, y medidlo para añadirle las cotas."],
  minutos: 100,
});
