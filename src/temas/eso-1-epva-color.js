// Educación Plástica, Visual y Audiovisual 1º ESO: el color. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";
// Círculo cromático de pigmentos (12 colores), empezando por el amarillo arriba.
const C12 = ["#f2d21b", "#f5a81c", "#f07c1c", "#e8501f", "#d7262b", "#b5236e", "#7b2d8e", "#4b3a99", "#1e5bb0", "#1b8fae", "#239a52", "#8cc63f"];
const rueda = (cx, cy, r1, r2, cols = C12) => cols.map((c, i) => { const n = cols.length, a0 = ((i * 360) / n - 90 - 180 / n) * Math.PI / 180, a1 = (((i + 1) * 360) / n - 90 - 180 / n) * Math.PI / 180; const p = (r, a) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`; return `<path d="M${p(r1, a0)} L ${p(r2, a0)} A ${r2} ${r2} 0 0 1 ${p(r2, a1)} L ${p(r1, a1)} A ${r1} ${r1} 0 0 0 ${p(r1, a0)} Z" fill="${c}" stroke="var(--paper)" stroke-width="1.5"/>`; }).join("");

module.exports = {
  materia: M,
  curso: C,
  titulo: "El color",
  minutos: 55,
  objetivos: ["Explicar que el color depende de la luz", "Distinguir colores primarios, secundarios y terciarios y construir el círculo cromático", "Reconocer colores complementarios, cálidos y fríos", "Usar el color con intención expresiva y simbólica"],
  claves: ["luz", "colores primarios", "colores secundarios", "círculo cromático", "complementarios", "gama cálida"],
  pregunta: {
    texto: "¿Por qué las señales de peligro, los camiones de bomberos y los botones de emergencia son casi siempre rojos o amarillos?",
    respuesta: "Porque son colores <b>cálidos</b> y muy <b>luminosos</b> que llaman la atención enseguida, sobre todo sobre fondos verdes, grises o azules. Además, en muchas culturas el rojo se asocia al peligro y a parar. <mark>El color no solo decora: comunica</mark>.",
  },
  bloques: [
    {
      html: `<h3>Sin luz no hay color</h3><p>El <b>color</b> es una sensación que se produce cuando la <b>luz</b> llega a nuestros ojos. La luz blanca del sol contiene todos los colores: lo comprobamos en el <b>arcoíris</b> o con un prisma, que la separa en rojo, naranja, amarillo, verde, azul, añil y violeta.</p><p>Cuando la luz ilumina un objeto, este <b>absorbe</b> unos colores y <b>refleja</b> otros. El que refleja es el que vemos:</p><ul><li>Una hoja es verde porque refleja la luz verde y absorbe las demás.</li><li>Lo <b>blanco</b> refleja todos los colores.</li><li>Lo <b>negro</b> los absorbe todos (por eso una camiseta negra se calienta más al sol).</li></ul><p>Por eso, a oscuras, todo se ve negro o gris.</p>`,
      svg: svg("Un rayo de luz blanca llega a una manzana; la manzana refleja solo la luz roja hacia el ojo", `<path d="M20 30 L 100 80" stroke="var(--sun)" stroke-width="4"/>${t(40, 24, "luz blanca", { c: "var(--muted)", s: 11 })}<circle cx="120" cy="96" r="26" fill="#d7262b"/><path d="M120 70 q 4 -12 12 -14" fill="none" stroke="var(--leaf)" stroke-width="3"/><path d="M146 90 L 222 56" stroke="#d7262b" stroke-width="4"/><ellipse cx="232" cy="52" rx="12" ry="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="232" cy="52" r="4" fill="var(--ink)"/>${t(196, 92, "refleja rojo", { c: "#d7262b", s: 11 })}${t(120, 152, "absorbe los demás", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Colores primarios y secundarios</h3><p>Con los <b>pigmentos</b> (pinturas, témperas, lápices de colores) trabajamos con tres <b>colores primarios</b>: <mark>amarillo, magenta y cian</mark> (en el cole se suelen simplificar como amarillo, rojo y azul). No se pueden obtener mezclando otros.</p><p>Mezclando dos primarios a partes iguales se obtienen los <b>secundarios</b>:</p>${tabla(["Mezcla", "Resultado"], [["amarillo + cian (azul)", "verde"], ["amarillo + magenta (rojo)", "naranja / rojo"], ["magenta + cian", "violeta / azul"]])}<p>Si mezclamos los tres primarios en pigmento, se obtiene un color muy oscuro, casi <b>negro</b>. Por eso esta mezcla se llama <b>sustractiva</b>: cada pigmento «quita» luz.</p>`,
      svg: svg("Tres círculos de pintura amarilla, magenta y cian que se solapan: en los cruces aparecen los secundarios y en el centro un color casi negro", `<g style="isolation:isolate"><circle cx="110" cy="70" r="40" fill="#ffe600" style="mix-blend-mode:multiply"/><circle cx="150" cy="70" r="40" fill="#ff2fa0" style="mix-blend-mode:multiply"/><circle cx="130" cy="104" r="40" fill="#18c0f0" style="mix-blend-mode:multiply"/></g>${t(60, 40, "amarillo", { s: 10, a: "end" })}${t(200, 40, "magenta", { s: 10, a: "start" })}${t(130, 166, "cian", { s: 10 })}`),
      video: vb("colB"),
    },
    {
      html: `<h3>El círculo cromático</h3><p>El <b>círculo cromático</b> ordena los colores en una rueda. Los tres primarios se colocan separados, los secundarios entre ellos, y entre cada primario y su secundario vecino van los <b>terciarios</b>, mezclas de un primario y un secundario: amarillo verdoso, naranja rojizo, azul violáceo…</p><p>Así se forma un círculo de <b>12 colores</b>. Sirve para:</p><ul><li>Saber qué colores <b>se mezclan</b> bien y qué se obtiene.</li><li>Encontrar los <b>complementarios</b> (enfrentados).</li><li>Elegir <b>armonías</b> (colores vecinos que combinan suavemente).</li></ul><p>Construir tu propio círculo con témperas es la mejor forma de entender cómo funcionan las mezclas.</p>`,
      svg: svg("Círculo cromático de doce colores, con el amarillo arriba y el violeta abajo", `${rueda(90, 90, 30, 70)}${t(206, 50, "primarios", { s: 11 })}${t(206, 70, "secundarios", { s: 11 })}${t(206, 90, "terciarios", { s: 11 })}${t(206, 124, "12 colores", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Colores complementarios</h3><p>Dos colores son <b>complementarios</b> si están <mark>enfrentados en el círculo cromático</mark>. Cada secundario es el complementario del primario que no lleva:</p><ul><li><b>Amarillo</b> ↔ <b>violeta</b></li><li><b>Rojo (magenta)</b> ↔ <b>verde</b></li><li><b>Azul (cian)</b> ↔ <b>naranja</b></li></ul><p>Colocados uno junto al otro producen el máximo <b>contraste</b>: se refuerzan y «vibran». Por eso muchos equipos deportivos y marcas los combinan. En cambio, si se mezclan, se apagan y dan un gris parduzco.</p><p>Truco de pintor: para oscurecer un color sin usar negro, añádele una pizca de su complementario.</p>`,
      video: vb("colB2"),
    },
    {
      html: `<h3>Colores cálidos y fríos</h3><p>Según la sensación que producen, el círculo se divide en dos mitades:</p><ul><li><b>Gama cálida</b>: amarillos, naranjas y rojos. Recuerdan al fuego y al sol. Transmiten <b>energía</b>, alegría, pasión. Parecen <b>acercarse</b> al espectador.</li><li><b>Gama fría</b>: verdes, azules y violetas. Recuerdan al agua, al hielo y a la noche. Transmiten <b>calma</b>, tranquilidad, a veces tristeza. Parecen <b>alejarse</b>.</li></ul><p>Los decoradores los usan: un dormitorio en tonos fríos invita a descansar; una cafetería en tonos cálidos resulta acogedora.</p>`,
      svg: svg("Círculo cromático partido en dos mitades: la gama cálida de amarillos, naranjas y rojos, y la gama fría de violetas, azules y verdes", `${rueda(130, 88, 0, 66)}<path d="M${(130 + 74 * Math.cos(-105 * Math.PI / 180)).toFixed(1)} ${(88 + 74 * Math.sin(-105 * Math.PI / 180)).toFixed(1)} L ${(130 - 74 * Math.cos(-105 * Math.PI / 180)).toFixed(1)} ${(88 - 74 * Math.sin(-105 * Math.PI / 180)).toFixed(1)}" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="5 3"/>${t(228, 92, "cálidos", { c: "#e8501f", s: 12, d: true })}${t(32, 92, "fríos", { c: "#1e5bb0", s: 12, d: true })}`),
    },
    {
      html: `<h3>Las cualidades del color</h3><p>Cada color tiene tres cualidades:</p>${tabla(["Cualidad", "Qué es", "Ejemplo"], [["Tono o matiz", "el color en sí, su nombre", "rojo, verde, azul"], ["Luminosidad o valor", "lo claro u oscuro que es", "azul celeste / azul marino"], ["Saturación", "lo puro o intenso que es", "rojo vivo / rojo apagado"]])}<ul><li>Para <b>aclarar</b> un color se le añade blanco (o agua en la acuarela).</li><li>Para <b>oscurecerlo</b>, negro o su complementario.</li><li>Para <b>desaturarlo</b> (apagarlo), gris o un poco de su complementario.</li></ul><p>Una <b>gama monocroma</b> usa un solo tono con distintas luminosidades: azules del más claro al más oscuro.</p>`,
    },
    {
      html: `<h3>El color expresivo y simbólico</h3><p>Además de describir cómo son las cosas, el color puede expresar <b>emociones</b> y tener <b>significados</b> culturales:</p>${tabla(["Color", "Asociaciones habituales en nuestra cultura"], [["Rojo", "pasión, amor, peligro, prohibición"], ["Amarillo", "alegría, luz, atención"], ["Verde", "naturaleza, esperanza, permiso"], ["Azul", "calma, confianza, frío, tristeza"], ["Negro", "elegancia, misterio, luto"], ["Blanco", "pureza, paz, limpieza"]])}<p>Pero cuidado: los significados cambian entre culturas. En Occidente el luto es negro, mientras que en algunas culturas de Asia es blanco. <b>Picasso</b> pintó una «época azul» llena de tristeza y una «época rosa» más alegre.</p>`,
    },
    {
      html: `<h3>Practicar con el color</h3><ol><li><b>Círculo cromático</b> de 12 colores con témperas, partiendo solo de amarillo, magenta y cian.</li><li><b>Escala de luminosidad</b>: un color en 7 casillas, del más claro (con blanco) al más oscuro (con negro).</li><li><b>Mismo dibujo, dos emociones</b>: pinta el mismo paisaje en gama cálida y en gama fría y compara.</li><li><b>Contraste de complementarios</b>: un diseño sencillo (un pez, una estrella) en naranja sobre fondo azul.</li></ol><p>Consejo: limpia el pincel entre mezclas y prueba el color en un papel aparte antes de aplicarlo.</p>`,
    },
  ],
  figura: {
    titulo: "El color en un vistazo",
    svg: filas("Resumen: el color depende de la luz; primarios y secundarios; círculo cromático; complementarios enfrentados; gamas cálida y fría; tono, luminosidad y saturación", [["Luz", "los objetos reflejan su color", "var(--sun)"], ["Primarios", "amarillo · magenta · cian", "var(--red)"], ["Secundarios", "verde · naranja · violeta", "var(--leaf)"], ["Complementarios", "enfrentados en el círculo", "var(--pen)"], ["Gamas", "cálida acerca · fría aleja", "var(--inf)"], ["Cualidades", "tono · luminosidad · saturación", "var(--ink)"]], 220),
  },
  video: vg("colV"),
  quiz: mezcla([
    { q: "Sin luz, los objetos se ven…", o: ["negros u oscuros", "blancos", "de su color"], a: 0, e: "No reflejan nada." },
    { q: "Un objeto blanco…", o: ["refleja todos los colores", "absorbe todos", "refleja solo el blanco"], a: 0, e: "Por eso no se calienta tanto." },
    { q: "Primarios de los pigmentos:", o: ["amarillo, magenta y cian", "rojo, verde y azul", "naranja, verde y violeta"], a: 0, e: "No se obtienen mezclando." },
    { q: "Amarillo + cian =", o: ["verde", "naranja", "violeta"], a: 0, e: "Secundario." },
    { q: "El complementario del amarillo es…", o: ["el violeta", "el verde", "el naranja"], a: 0, e: "Enfrentados." },
    { q: "Los colores cálidos parecen…", o: ["acercarse", "alejarse", "desaparecer"], a: 0, e: "Avanzan." },
    { q: "El azul pertenece a la gama…", o: ["fría", "cálida", "neutra"], a: 0, e: "Agua, hielo." },
    { q: "Lo claro u oscuro de un color es su…", o: ["luminosidad", "tono", "saturación"], a: 0, e: "Valor." },
    { q: "Una gama monocroma usa…", o: ["un solo tono", "colores complementarios", "todos los colores"], a: 0, e: "Varias luminosidades." },
    { q: "Mezclar dos complementarios da…", o: ["un gris parduzco", "blanco", "un color más vivo"], a: 0, e: "Se apagan." },
  ]),
  examen: mezcla([
    { q: "Un color terciario es la mezcla de…", o: ["un primario y un secundario", "dos primarios", "dos complementarios"], a: 0, e: "Ej.: naranja rojizo." },
    { q: "Para oscurecer un color sin negro se añade…", o: ["su complementario", "blanco", "agua"], a: 0, e: "Truco de pintor." },
    { q: "La época azul de Picasso transmite…", o: ["tristeza", "alegría", "energía"], a: 0, e: "Gama fría." },
  ]),
  feynman: ["Por qué vemos los objetos de un color", "Cómo se obtienen los colores secundarios", "Qué son los colores complementarios y para qué sirven", "Diferencia entre gama cálida y fría", "Las tres cualidades del color"],
  mapa: mapa("EL COLOR", "var(--eso)", [
    ["Luz y color", "reflejar · absorber", "var(--sun)"],
    ["Círculo cromático", "primarios · secundarios", "var(--red)"],
    ["Relaciones", "complementarios · gamas", "var(--pen)"],
    ["Expresión", "emociones · símbolos", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Color", "Sensación que produce la luz reflejada en el ojo."],
    ["Primarios (pigmento)", "Amarillo, magenta y cian."],
    ["Secundario", "Mezcla de dos primarios."],
    ["Círculo cromático", "Rueda ordenada de colores."],
    ["Complementarios", "Enfrentados en el círculo; máximo contraste."],
    ["Gama cálida", "Amarillos, naranjas y rojos."],
    ["Gama fría", "Verdes, azules y violetas."],
    ["Saturación", "Pureza o intensidad de un color."],
  ],
  familias: ["Buscad en casa objetos de colores complementarios juntos (ropa, envases, logotipos).", "Pintad juntos con tres colores primarios y descubrid cuántos colores salen.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "El color: naturaleza, mezclas sustractivas, círculo cromático, complementarios, gamas, cualidades y uso expresivo y simbólico (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Círculo cromático con témperas a partir de tres primarios.", "Un mismo dibujo en gama cálida y fría.", "Análisis del color en carteles de cine."],
  },
  fuentes: [RD, { t: "Museo Nacional del Prado: el color en la pintura", url: "https://www.museodelprado.es/" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Obtén un verde oliva a partir de los primarios.", pasos: ["Mezcla amarillo y cian a partes iguales: verde.", "Añade una pizca de magenta (el complementario del verde) para apagarlo.", "Si queda muy oscuro, aclara con un poco de amarillo."], resultado: "Un verde apagado, como el de las aceitunas." },
    { enunciado: "Diseña un cartel que llame mucho la atención con solo dos colores.", pasos: ["Elige una pareja de complementarios: naranja y azul.", "Fondo azul intenso, letras y dibujo en naranja.", "Comprueba de lejos que se lee bien."], resultado: "Máximo contraste con dos colores." },
    { enunciado: "Pinta una escala de luminosidad de rojo.", pasos: ["Dibuja 7 casillas; pon el rojo puro en la del centro.", "Hacia la izquierda, añade cada vez más blanco.", "Hacia la derecha, añade cada vez un poco de negro o de verde."], resultado: "Una escala del rosa claro al granate." },
  ],
  errores: [
    "Pensar que los colores «están» en los objetos aunque no haya luz.",
    "Confundir la mezcla de pigmentos con la de luces (las pantallas usan rojo, verde y azul).",
    "Oscurecer siempre con negro, lo que ensucia el color.",
    "Creer que los significados de los colores son iguales en todas las culturas.",
    "No limpiar el pincel entre mezclas.",
  ],
  ejercicios: [
    { q: "Explica por qué una fresa se ve roja.", sol: "Porque refleja la luz roja y absorbe el resto de colores de la luz blanca." },
    { q: "Escribe los tres primarios de los pigmentos y los tres secundarios que se obtienen.", sol: "Amarillo, magenta y cian; verde, naranja-rojo y violeta-azul." },
    { q: "Escribe las tres parejas de complementarios.", sol: "Amarillo-violeta, rojo-verde, azul-naranja." },
    { q: "Pinta un círculo cromático de 12 colores con témperas.", sol: "Respuesta práctica." },
    { q: "Clasifica en cálidos o fríos: turquesa, bermellón, ocre, lila, verde esmeralda.", sol: "Frío, cálido, cálido, frío, frío." },
    { q: "¿Qué gama usarías para un cartel de una fiesta de verano? ¿Y para una campaña de agua?", sol: "Cálida; fría." },
    { q: "¿Qué cualidad cambia al añadir blanco a un color? ¿Y al añadir gris?", sol: "La luminosidad; la saturación." },
    { q: "Pinta una gama monocroma de verdes con al menos cinco tonos.", sol: "Respuesta práctica." },
    { q: "Busca una obra de la época azul de Picasso y explica qué transmite el color.", sol: "Respuesta abierta: tristeza, soledad, frío." },
    { q: "¿Por qué el logotipo de muchas marcas usa colores complementarios?", sol: "Porque el contraste los hace muy visibles y fáciles de recordar." },
  ],
};
