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
