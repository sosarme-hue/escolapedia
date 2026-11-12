// Educación Plástica, Visual y Audiovisual 3º ESO: el color. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";
// Círculo cromático de 12 colores (pigmento).
const C12 = ["#f2d21b", "#f5a81c", "#f07c1c", "#e8501f", "#d7262b", "#b5236e", "#7b2d8e", "#4b3a99", "#1e5bb0", "#1b8fae", "#239a52", "#8cc63f"];
const rueda = (cx, cy, r1, r2) => C12.map((c, i) => { const a0 = ((i * 30 - 105) * Math.PI) / 180, a1 = (((i + 1) * 30 - 105) * Math.PI) / 180; const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`; return `<path d="M${p(r1, a0)} L ${p(r2, a0)} A ${r2} ${r2} 0 0 1 ${p(r2, a1)} L ${p(r1, a1)} A ${r1} ${r1} 0 0 0 ${p(r1, a0)} Z" fill="${c}" stroke="var(--paper)" stroke-width="1.5"/>`; }).join("");

module.exports = {
  materia: M,
  curso: C,
  titulo: "El color: teoría y armonías",
  minutos: 50,
  objetivos: ["Explicar la naturaleza física del color y la diferencia entre mezcla aditiva y sustractiva", "Identificar colores primarios, secundarios, terciarios y complementarios en el círculo cromático", "Describir las cualidades del color: tono, saturación y luminosidad", "Usar armonías y contrastes de color con intención expresiva"],
  claves: ["luz", "síntesis aditiva", "síntesis sustractiva", "círculo cromático", "complementarios", "armonía"],
  pregunta: {
    texto: "Si mezclas todos los colores de la paleta te sale un marrón oscuro, pero si mezclas todas las luces de colores sale blanco. ¿Cómo puede ser?",
    respuesta: "Porque hay <mark>dos tipos de mezcla</mark>. Las luces se suman (síntesis aditiva) y juntas dan blanco; los pigmentos absorben luz (síntesis sustractiva) y cuanto más mezclas, más oscuro. Tu pantalla trabaja con luz (RGB) y tu impresora, con tintas (CMYK).",
  },
  bloques: [
    {
      html: `<h3>Qué es el color</h3><p>El color es una <b>sensación</b> que produce la luz al llegar a nuestros ojos. La luz blanca del sol contiene todos los colores, como demostró <b>Isaac Newton</b> al descomponerla con un prisma en el <b>espectro</b>: rojo, naranja, amarillo, verde, azul, añil y violeta (el arcoíris).</p><p>Los objetos no «tienen» color: <mark>absorben</mark> unas partes de la luz y <mark>reflejan</mark> otras. Un tomate se ve rojo porque refleja la luz roja y absorbe el resto. Un objeto blanco refleja casi todo; uno negro lo absorbe casi todo. Por eso, sin luz, no hay color.</p>`,
      svg: svg("Un prisma descompone un rayo de luz blanca en los colores del arcoíris", `<path d="M14 92 L 100 88" stroke="#fff" stroke-width="6"/><path d="M14 92 L 100 88" stroke="var(--muted)" stroke-width="1"/><path d="M90 140 L 130 50 L 170 140 Z" fill="var(--pen)" fill-opacity=".12" stroke="var(--ink)" stroke-width="2.5"/>
        ${["#e53935", "#fb8c00", "#fdd835", "#43a047", "#1e88e5", "#3949ab", "#8e24aa"].map((c, i) => `<path d="M140 94 L 246 ${60 + i * 12}" stroke="${c}" stroke-width="5"/>`).join("")}
        ${t(40, 80, "luz blanca", { c: "var(--muted)", s: 11 })}${t(130, 160, "prisma", { s: 11 })}${t(214, 160, "espectro", { s: 11 })}`),
    },
    {
      html: `<h3>Síntesis aditiva: el color luz</h3><p>Cuando se <b>suman luces</b> de colores, el resultado es más claro. Los <b>primarios luz</b> son el <mark>rojo, el verde y el azul</mark> (RGB, por sus siglas en inglés). Mezclados de dos en dos dan los secundarios luz: amarillo (rojo + verde), cian (verde + azul) y magenta (azul + rojo). Los tres juntos dan <b>blanco</b>.</p><p>Es la mezcla de las <b>pantallas</b>: cada píxel tiene tres pequeñas luces, roja, verde y azul, que se encienden con distinta intensidad. También la usan los focos de los teatros y conciertos.</p>`,
      svg: svg("Tres círculos de luz roja, verde y azul que se solapan: en el centro sale blanco y en los cruces amarillo, cian y magenta", `<rect x="40" y="10" width="180" height="160" rx="12" fill="#111"/><g style="isolation:isolate"><circle cx="110" cy="70" r="42" fill="#ff0000" style="mix-blend-mode:screen"/><circle cx="150" cy="70" r="42" fill="#00ff00" style="mix-blend-mode:screen"/><circle cx="130" cy="104" r="42" fill="#0000ff" style="mix-blend-mode:screen"/></g>
        ${t(20, 40, "R", { c: "#d7262b", s: 13, a: "start" })}${t(240, 40, "G", { c: "#239a52", s: 13, a: "end" })}${t(236, 150, "B", { c: "#1e5bb0", s: 13, a: "start" })}`),
    },
    {
      html: `<h3>Síntesis sustractiva: el color pigmento</h3><p>Los <b>pigmentos</b> (pinturas, tintas) restan luz: cada uno absorbe una parte. Al mezclarlos, absorben más y el resultado es <b>más oscuro</b>. Los <b>primarios pigmento</b> son el <mark>cian, el magenta y el amarillo</mark>; en la escuela se simplifican como azul, rojo y amarillo. Mezclados de dos en dos dan los secundarios: verde (cian + amarillo), rojo (magenta + amarillo) y azul violáceo (cian + magenta). Los tres juntos dan un color casi <b>negro</b>.</p><p>Las impresoras usan el sistema <b>CMYK</b>: cian, magenta, amarillo y negro (K), porque el negro puro sale más limpio y barato con una tinta propia.</p>`,
      video: { id: "MNKRUoKcWb0", titulo: "Teoría del color: todo lo que necesitas saber", canal: "Agata del Barco", vistas: 589702, megusta: 0 },
    },
    {
      html: `<h3>El círculo cromático</h3><p>El <b>círculo cromático</b> ordena los colores pigmento en una rueda:</p><ul><li><b>Primarios</b>: amarillo, magenta (rojo) y cian (azul). No se obtienen mezclando otros.</li><li><b>Secundarios</b>: naranja, violeta y verde. Mezcla de dos primarios a partes iguales.</li><li><b>Terciarios</b>: mezcla de un primario y un secundario vecinos (amarillo verdoso, rojo anaranjado…).</li></ul><p>Los colores que están <mark>enfrentados</mark> en el círculo son <b>complementarios</b>: amarillo–violeta, rojo–verde, azul–naranja. Juntos se refuerzan y producen el máximo contraste; mezclados, se neutralizan y dan un gris o marrón.</p>`,
      svg: svg("Círculo cromático de doce colores con los primarios marcados y una flecha uniendo el amarillo con su complementario violeta", `${rueda(76, 86, 30, 64)}<path d="M76 18 L 76 154" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 4"/>
        ${t(200, 50, "primarios:", { s: 11 })}${t(200, 66, "amarillo, rojo, azul", { s: 10 })}${t(200, 100, "opuestos =", { c: "var(--red)", s: 11 })}${t(200, 116, "complementarios", { c: "var(--red)", s: 11 })}${t(76, 172, "amarillo ↔ violeta", { c: "var(--muted)", s: 10 })}`),
    },
    {
      html: `<h3>Cualidades del color</h3>${tabla(["Cualidad", "Qué es", "Ejemplo"], [["<b>Tono</b> (matiz)", "el color en sí, su lugar en el círculo", "rojo, verde, azul"], ["<b>Saturación</b> (pureza)", "lo intenso o apagado que es; se reduce añadiendo gris o su complementario", "rojo puro frente a rojo grisáceo"], ["<b>Luminosidad</b> (valor)", "lo claro u oscuro que es; se cambia añadiendo blanco o negro", "rosa claro frente a granate"]])}<p>Al añadir blanco a un color se obtiene un <b>matiz claro</b> y al añadir negro, una <b>sombra</b>. Una <b>gama</b> es una serie ordenada de un mismo tono que va del más claro al más oscuro: muy útil para dar volumen.</p>`,
      svg: svg("Escala de luminosidad del azul, de muy claro con blanco a muy oscuro con negro, y escala de saturación de rojo puro a gris", `${["#dbe8f8", "#a9c7ef", "#6c9fe0", "#1e5bb0", "#16437f", "#0d2a50"].map((c, i) => `<rect x="${20 + i * 37}" y="36" width="37" height="38" fill="${c}"/>`).join("")}${["#d7262b", "#c3474a", "#ae6466", "#9a7c7d", "#8a8a8a"].map((c, i) => `<rect x="${20 + i * 44.4}" y="110" width="44.4" height="38" fill="${c}"/>`).join("")}
        ${t(130, 28, "luminosidad (+ blanco … + negro)", { s: 11 })}${t(130, 102, "saturación (puro … gris)", { s: 11 })}`),
    },
    {
      html: `<h3>Colores cálidos y fríos</h3><p>Según las sensaciones que producen, los colores se dividen en:</p><ul><li><b>Cálidos</b>: amarillos, naranjas y rojos. Recuerdan al fuego y al sol. Transmiten energía, alegría, pasión. Visualmente parecen <mark>acercarse</mark> al espectador.</li><li><b>Fríos</b>: azules, verdes y violetas. Recuerdan al agua, al hielo y a la sombra. Transmiten calma, tranquilidad, a veces tristeza. Parecen <mark>alejarse</mark>.</li></ul><p>Esto se usa en decoración (los fríos hacen que una habitación parezca más grande), en pintura (los fondos de paisaje se pintan más azulados) y en marketing (muchas marcas de comida rápida usan rojo y amarillo).</p>`,
    },
    {
      html: `<h3>Armonías de color</h3><p>Una <b>armonía</b> es una combinación de colores que resulta agradable y coherente. Las más usadas:</p><ul><li><b>Monocromática</b>: un solo tono en distintas luminosidades y saturaciones.</li><li><b>Análoga</b>: colores vecinos en el círculo (amarillo, amarillo anaranjado, naranja). Transmite unidad y calma.</li><li><b>Complementaria</b>: dos colores opuestos. Mucho contraste y energía; conviene que uno domine.</li><li><b>Complementaria dividida</b>: un color y los dos vecinos de su complementario.</li><li><b>Tríada</b>: tres colores equidistantes, como los tres primarios.</li></ul>`,
      svg: svg("Tres paletas: monocromática en azules, análoga de amarillo a naranja y complementaria azul y naranja", `${["#a9c7ef", "#6c9fe0", "#1e5bb0", "#0d2a50"].map((c, i) => `<rect x="${24 + i * 28}" y="24" width="28" height="34" fill="${c}"/>`).join("")}${["#f2d21b", "#f5a81c", "#f07c1c", "#e8501f"].map((c, i) => `<rect x="${24 + i * 28}" y="76" width="28" height="34" fill="${c}"/>`).join("")}<rect x="24" y="128" width="56" height="34" fill="#1e5bb0"/><rect x="80" y="128" width="56" height="34" fill="#f07c1c"/>
        ${t(150, 46, "monocromática", { s: 12, a: "start" })}${t(150, 98, "análoga", { s: 12, a: "start" })}${t(150, 150, "complementaria", { s: 12, a: "start" })}`),
      video: { id: "PYjqhn-26TM", titulo: "Cómo combinar colores: armonía del color y círculo cromático", canal: "Profe Matos", vistas: 1723094, megusta: 0 },
    },
    {
      html: `<h3>Contrastes de color</h3><p>El <b>contraste</b> hace que unos elementos destaquen sobre otros. Los principales son:</p><ul><li><b>De tono</b>: colores muy distintos (rojo, azul, amarillo puros).</li><li><b>De luminosidad</b>: claro frente a oscuro. Es el más importante para la <mark>legibilidad</mark>: texto oscuro sobre fondo claro.</li><li><b>De complementarios</b>: el de máxima intensidad.</li><li><b>Cálido-frío</b>: crea sensación de profundidad.</li><li><b>Simultáneo</b>: un mismo gris parece más claro sobre fondo negro y más oscuro sobre blanco.</li></ul><p>Las señales de peligro usan amarillo y negro: el contraste de luminosidad más fuerte posible.</p>`,
    },
    {
      html: `<h3>El significado del color</h3><p>Los colores tienen <b>connotaciones</b> culturales:</p>${tabla(["Color", "Asociaciones habituales en nuestra cultura"], [["Rojo", "pasión, amor, peligro, prohibición, energía"], ["Amarillo", "luz, alegría, atención, advertencia"], ["Azul", "calma, confianza, frescura, tecnología"], ["Verde", "naturaleza, salud, ecología, permiso"], ["Negro", "elegancia, misterio, luto"], ["Blanco", "pureza, limpieza, paz"]])}<p>Pero cambian con la cultura: en China el rojo simboliza la buena suerte y en la India es el color de los vestidos de novia. Los artistas, como <b>Van Gogh</b> o los <b>fauvistas</b>, usaron el color de forma expresiva, no realista, para transmitir emociones.</p>`,
    },
  ],
  figura: {
    titulo: "Luz y pigmento",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Síntesis aditiva con luces rojo, verde y azul que suman blanco; síntesis sustractiva con cian, magenta y amarillo que dan negro; complementarios opuestos en el círculo; armonías">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Aditiva (luz)", "RGB: rojo + verde + azul = blanco · pantallas", "var(--pen)"], ["Sustractiva (pigmento)", "CMY(K): cian + magenta + amarillo ≈ negro", "var(--red)"], ["Complementarios", "opuestos en el círculo: máximo contraste", "var(--leaf)"], ["Armonías", "monocromática · análoga · complementaria · tríada", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${42 + i * 52}" font-size="14" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "E4YQaUS95C8", titulo: "¿Cómo usar la teoría del color en tu arte?", canal: "DepreArtistas", vistas: 833928, megusta: 0, busqueda: "teoría del color círculo cromático" },
  quiz: mezcla([
    { q: "Los primarios luz son…", o: ["rojo, verde y azul", "cian, magenta y amarillo", "rojo, amarillo y azul"], a: 0, e: "RGB." },
    { q: "La mezcla de las tres luces primarias da…", o: ["negro", "blanco", "marrón"], a: 1, e: "Síntesis aditiva." },
    { q: "Las impresoras usan el sistema…", o: ["RGB", "CMYK", "HSL"], a: 1, e: "Tintas: cian, magenta, amarillo y negro." },
    { q: "Un objeto se ve verde porque…", o: ["absorbe el verde", "refleja el verde", "emite verde"], a: 1, e: "Absorbe el resto." },
    { q: "El complementario del azul (pigmento) es…", o: ["el naranja", "el verde", "el violeta"], a: 0, e: "Está enfrentado en el círculo." },
    { q: "Añadir blanco a un color cambia su…", o: ["tono", "luminosidad", "temperatura"], a: 1, e: "Lo aclara." },
    { q: "Un rojo mezclado con un poco de gris pierde…", o: ["saturación", "luminosidad", "tono"], a: 0, e: "Se vuelve menos puro." },
    { q: "¿Cuál es un color frío?", o: ["naranja", "turquesa", "amarillo"], a: 1, e: "Azul verdoso." },
    { q: "Usar solo distintos azules es una armonía…", o: ["análoga", "monocromática", "complementaria"], a: 1, e: "Un único tono." },
    { q: "El contraste más importante para leer un texto es el de…", o: ["luminosidad", "temperatura", "saturación"], a: 0, e: "Claro sobre oscuro o al revés." },
  ]),
  examen: mezcla([
    { q: "Amarillo + cian (pigmento) dan…", o: ["verde", "naranja", "violeta"], a: 0, e: "Secundario pigmento." },
    { q: "Rojo + verde (luz) dan…", o: ["amarillo", "marrón", "blanco"], a: 0, e: "Secundario luz." },
    { q: "Los colores cálidos parecen…", o: ["acercarse", "alejarse", "desaparecer"], a: 0, e: "Por eso se usan en primer plano." },
  ]),
  feynman: ["Por qué un objeto tiene color", "Diferencia entre síntesis aditiva y sustractiva", "Qué son los colores complementarios y para qué se usan", "Qué es la saturación y cómo se reduce"],
  mapa: mapa("EL COLOR", "var(--eso)", [
    ["Luz", "espectro · aditiva RGB", "var(--pen)"],
    ["Pigmento", "sustractiva CMYK · círculo", "var(--red)"],
    ["Cualidades", "tono · saturación · luminosidad", "var(--leaf)"],
    ["Armonías", "análoga · complementaria", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Síntesis aditiva", "Mezcla de luces: RGB; las tres dan blanco."],
    ["Síntesis sustractiva", "Mezcla de pigmentos: CMY; las tres dan casi negro."],
    ["Colores secundarios pigmento", "Naranja, verde y violeta."],
    ["Complementarios", "Colores opuestos en el círculo cromático."],
    ["Tono", "El color en sí (rojo, azul…)."],
    ["Saturación", "Pureza o intensidad de un color."],
    ["Luminosidad", "Lo claro u oscuro que es un color."],
    ["Armonía análoga", "Colores vecinos en el círculo cromático."],
  ],
  familias: ["Mirad la pantalla del móvil con una lupa y descubrid los puntos rojos, verdes y azules.", "Elegid juntos la paleta de colores de una habitación usando una armonía.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "El color: naturaleza física, síntesis aditiva y sustractiva, círculo cromático, cualidades, armonías, contrastes y simbolismo (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Construir un círculo cromático de 12 colores con témperas a partir de los tres primarios.", "Experimentar con linternas y filtros de colores la síntesis aditiva.", "Reinterpretar una obra cambiando su armonía de color."],
  },
  fuentes: [RD, { t: "Museo Nacional del Prado: el color en la pintura", url: "https://www.museodelprado.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Obtén un violeta, un verde oliva y un rosa a partir de los primarios, el blanco y el negro.",
      pasos: ["Violeta: magenta + cian a partes iguales.", "Verde oliva: amarillo + cian (verde) y una pizca de magenta o negro para apagarlo.", "Rosa: magenta + mucho blanco (sube la luminosidad)."],
      resultado: "Se consigue toda la paleta mezclando primarios y ajustando luminosidad y saturación." },
    { enunciado: "Elige una armonía para el cartel de una fiesta de verano y otra para el de una biblioteca.",
      pasos: ["Fiesta: complementaria naranja–azul o tríada de colores saturados: energía y alegría.", "Biblioteca: análoga de azules y verdes poco saturados: calma y concentración.", "En ambos, texto con fuerte contraste de luminosidad."],
      resultado: "La armonía refuerza el mensaje del cartel." },
    { enunciado: "Analiza el color en «La noche estrellada» de Van Gogh.",
      pasos: ["Predominan azules (fríos) en el cielo y amarillos (cálidos) en estrellas y luna.", "Azul y amarillo anaranjado son casi complementarios: máximo contraste.", "El color no es realista sino expresivo: transmite emoción y movimiento."],
      resultado: "Un contraste de complementarios al servicio de la expresión." },
  ],
  errores: [
    "Confundir los primarios luz (RGB) con los primarios pigmento (CMY).",
    "Pensar que mezclar todos los pigmentos da blanco.",
    "Oscurecer un color siempre con negro: a veces queda mejor con su complementario.",
    "Usar dos complementarios saturados en igual cantidad: el resultado cansa la vista.",
    "Elegir texto y fondo de luminosidad parecida: se lee mal.",
  ],
  ejercicios: [
    { q: "Explica por qué una manzana roja se ve negra bajo una luz azul.", sol: "La manzana solo refleja el rojo; si la luz no contiene rojo, no refleja nada y se ve oscura." },
    { q: "Completa: rojo + azul (luz) = …; cian + magenta (pigmento) = …", sol: "Magenta; azul violáceo." },
    { q: "Escribe los complementarios de amarillo, rojo y azul (pigmento).", sol: "Violeta, verde y naranja." },
    { q: "¿Qué son los colores terciarios? Pon dos ejemplos.", sol: "Mezcla de un primario y un secundario vecinos: amarillo verdoso, rojo violáceo." },
    { q: "Ordena de más claro a más oscuro una gama de cinco verdes y explica cómo la obtienes.", sol: "Verde + mucho blanco, verde + poco blanco, verde puro, verde + poco negro, verde + mucho negro." },
    { q: "Clasifica en cálidos o fríos: turquesa, granate, ocre, lila, verde menta.", sol: "Turquesa frío; granate cálido; ocre cálido; lila frío; verde menta frío." },
    { q: "¿Qué armonía usarías para transmitir calma en un dormitorio? Razona.", sol: "Análoga o monocromática de tonos fríos y poco saturados: pocos contrastes y sensación de amplitud." },
    { q: "Pon un ejemplo de contraste simultáneo.", sol: "Un cuadrado gris parece más claro sobre fondo negro que sobre fondo blanco, aunque sea el mismo gris." },
    { q: "¿Por qué las señales de advertencia combinan amarillo y negro?", sol: "Porque producen el contraste de luminosidad más fuerte y se ven desde lejos; además el amarillo connota atención." },
    { q: "Diseña la paleta de cinco colores de una marca de zumos ecológicos y justifícala.", sol: "Respuesta abierta. Ej.: verdes y naranjas análogos (naturaleza, fruta) más un blanco y un marrón suave; texto en verde oscuro." },
  ],
};
