// Matemáticas 4º de Primaria: rectas y ángulos. Dibujos propios en SVG.
const P = require("./_pri4a");
const { svg, t, arco, AZ, RO, VE, NA, SO, MO } = P;

// Ángulo con vértice (x, y), un lado horizontal de longitud l y otro a g grados, con su arco.
const ang = (x, y, g, l, c = AZ, r = 22) => {
  const a = (g * Math.PI) / 180;
  return `<path d="M${x + l} ${y} L ${x} ${y} L ${(x + l * Math.cos(a)).toFixed(1)} ${(y - l * Math.sin(a)).toFixed(1)}" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linecap="round"/>${g === 90 ? `<path d="M${x + 14} ${y} V ${y - 14} H ${x}" fill="none" stroke="${c}" stroke-width="2"/>` : arco(x, y, r, 0, g, c)}<circle cx="${x}" cy="${y}" r="3" fill="var(--ink)"/>`;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Rectas y ángulos",
  minutos: 50,
  objetivos: ["Distinguir recta, semirrecta y segmento", "Reconocer rectas paralelas, secantes y perpendiculares", "Identificar los elementos de un ángulo y clasificarlo (recto, agudo, obtuso, llano)", "Medir y dibujar ángulos con el transportador"],
  claves: ["punto", "línea recta", "línea curva", "semirrecta", "segmento", "paralelas", "secantes", "perpendiculares", "ángulo", "vértice", "lados", "grado (°)", "recto", "agudo", "obtuso", "llano", "transportador"],
  pregunta: ["Las agujas de un reloj forman una figura que cambia todo el rato. A las 3 en punto, ¿qué figura forman?", "Forman un <b>ángulo recto</b>, como la esquina de una hoja de papel: <mark>90 grados</mark>. A las 6 en punto forman un ángulo llano (una línea recta) y a la 1, un ángulo pequeño o agudo. Los ángulos están por todas partes: en los relojes, en las tijeras, en las puertas que se abren…"],
  bloques: [
    ["Líneas rectas y curvas", `<p>Las <b>líneas</b> pueden ser de varios tipos:</p><ul><li><b>Recta</b>: no cambia de dirección, como el borde de una regla.</li><li><b>Curva</b>: cambia de dirección poco a poco, como un arco iris.</li><li><b>Poligonal</b>: está formada por varios trozos rectos unidos, como una escalera o un rayo.</li><li><b>Mixta</b>: tiene trozos rectos y trozos curvos.</li></ul><p>Las líneas pueden ser <b>abiertas</b> (los extremos no se juntan) o <mark>cerradas</mark> (no tienen principio ni fin, como un círculo). Con líneas cerradas se forman las figuras planas.</p>`,
      svg("Tipos de líneas: recta, curva, poligonal y mixta", `${t(46, 30, "recta", { s: 11, c: AZ })}<path d="M16 56 L 76 44" stroke="${AZ}" stroke-width="3"/>${t(184, 30, "curva", { s: 11, c: VE })}<path d="M150 58 Q 184 18 220 58" fill="none" stroke="${VE}" stroke-width="3"/>${t(46, 100, "poligonal", { s: 11, c: RO })}<path d="M14 140 L 34 116 L 54 140 L 74 116 L 94 140" fill="none" stroke="${RO}" stroke-width="3"/>${t(184, 100, "mixta", { s: 11, c: SO })}<path d="M146 140 L 176 140 Q 196 110 216 140 L 236 116" fill="none" stroke="${SO}" stroke-width="3"/>`)],
    ["Recta, semirrecta y segmento", `<p>Hay tres tipos de líneas rectas según dónde empiezan y acaban:</p><ul><li>La <b>recta</b> no tiene principio ni fin: sigue sin parar en los dos sentidos. Se dibuja con puntas de flecha en los extremos.</li><li>La <b>semirrecta</b> tiene <mark>principio pero no fin</mark>: empieza en un punto (el origen) y sigue sin parar en un sentido, como el rayo de una linterna.</li><li>El <b>segmento</b> tiene <mark>principio y fin</mark>: es el trozo de recta entre dos puntos. Se puede medir con la regla.</li></ul><p>Los puntos se nombran con letras mayúsculas: el segmento que va de A a B se llama <b>AB</b>.</p>`,
      svg("Recta con dos flechas, semirrecta con origen y una flecha, y segmento AB entre dos puntos", `${P.flecha(130, 40, 236, 40, AZ)}${P.flecha(130, 40, 24, 40, AZ)}${t(130, 30, "recta", { s: 11, c: AZ })}<circle cx="30" cy="92" r="5" fill="${VE}"/>${P.flecha(30, 92, 236, 92, VE)}${t(130, 82, "semirrecta", { s: 11, c: VE })}${t(30, 112, "O", { s: 11, c: VE })}<path d="M50 144 H 210" stroke="${RO}" stroke-width="2.5"/><circle cx="50" cy="144" r="5" fill="${RO}"/><circle cx="210" cy="144" r="5" fill="${RO}"/>${t(50, 166, "A", { s: 12, c: RO })}${t(210, 166, "B", { s: 12, c: RO })}${t(130, 134, "segmento AB", { s: 11, c: RO })}`)],
    ["Rectas paralelas y secantes", `<p>Si dibujamos dos rectas en el mismo plano, pueden estar colocadas de dos maneras:</p><ul><li><b>Paralelas</b>: <mark>nunca se cortan</mark>, por mucho que las alarguemos. Siempre están a la misma distancia, como los raíles de un tren o las líneas de un cuaderno.</li><li><b>Secantes</b>: se <mark>cortan en un punto</mark>. Al cortarse, forman cuatro ángulos. Por ejemplo, las dos líneas de una «X».</li></ul><p>Busca paralelas a tu alrededor: los lados opuestos de la pizarra, las cuerdas de una guitarra, las rayas de un paso de cebra.</p>`,
      svg("Rectas paralelas que no se cortan y rectas secantes que se cortan en un punto", `<path d="M14 54 L 116 34 M14 94 L 116 74" stroke="${AZ}" stroke-width="3"/>${t(66, 128, "paralelas", { s: 13, c: AZ })}${t(66, 146, "no se cortan", { s: 10, c: "var(--muted)" })}<path d="M144 36 L 236 104 M144 104 L 236 36" stroke="${RO}" stroke-width="3"/><circle cx="190" cy="70" r="5" fill="${RO}"/>${t(190, 128, "secantes", { s: 13, c: RO })}${t(190, 146, "se cortan en un punto", { s: 10, c: "var(--muted)" })}`),
      P.V("recB")],
    ["Rectas perpendiculares", `<p>Las <b>perpendiculares</b> son un tipo especial de rectas secantes: al cortarse, forman <mark>cuatro ángulos rectos</mark>, es decir, cuatro «esquinas» iguales.</p><p>Las encontramos en muchos sitios: en el signo «+», en las esquinas de las baldosas, en el cruce de dos calles bien trazadas o en el marco de una ventana.</p><p>Para comprobar si dos rectas son perpendiculares, podemos usar la <b>escuadra</b> o la esquina de un folio: si encaja justo en el cruce, son perpendiculares.</p><p>El símbolo de perpendicular es <b>⊥</b>; el de paralela, <b>∥</b>.</p>`,
      svg("Rectas perpendiculares que forman cuatro ángulos rectos", `<path d="M40 90 H 220 M130 20 V 160" stroke="${VE}" stroke-width="3"/>${[[1, -1], [-1, -1], [1, 1], [-1, 1]].map(([dx, dy]) => `<path d="M${130 + dx * 14} 90 V ${90 + dy * 14} H 130" fill="none" stroke="${RO}" stroke-width="2"/>`).join("")}${t(196, 40, "4 ángulos", { s: 12, c: RO })}${t(196, 56, "rectos", { s: 12, c: RO })}`)],
    ["¿Qué es un ángulo?", `<p>Un <b>ángulo</b> es la parte del plano que queda entre <mark>dos semirrectas que salen del mismo punto</mark>.</p><p>Sus elementos son:</p><ul><li>Los <b>lados</b>: las dos semirrectas.</li><li>El <b>vértice</b>: el punto donde se unen los lados.</li><li>La <b>abertura</b>: lo que se separan los lados.</li></ul><p>El tamaño de un ángulo depende de su <b>abertura</b>, no de lo largos que dibujemos los lados. Un ángulo con lados cortos puede ser más grande que otro con lados larguísimos.</p><p>Los ángulos se miden en <b>grados</b> (°). Una vuelta completa tiene 360°.</p>`,
      svg("Elementos de un ángulo: dos lados, el vértice y la abertura", `${ang(60, 130, 50, 160, SO, 40)}${t(52, 150, "vértice", { s: 11, c: RO })}<circle cx="60" cy="130" r="5" fill="${RO}"/>${t(200, 150, "lado", { s: 11 })}${t(160, 40, "lado", { s: 11 })}${t(126, 112, "abertura", { s: 11, c: SO })}`)],
    ["Tipos de ángulos", `<p>Según su abertura, los ángulos se clasifican así:</p><ul><li><b>Recto</b>: mide exactamente <mark>90°</mark>. Es la esquina de un folio. Se marca con un cuadradito.</li><li><b>Agudo</b>: mide <b>menos de 90°</b>. Es más cerrado que el recto, como la punta de un trozo de pizza.</li><li><b>Obtuso</b>: mide <b>más de 90°</b> y menos de 180°. Es más abierto que el recto, como un abanico bastante abierto.</li><li><b>Llano</b>: mide <mark>180°</mark>. Sus dos lados forman una línea recta.</li></ul><p>Para saber si un ángulo es agudo u obtuso, compáralo con la esquina de una hoja.</p>`,
      svg("Cuatro tipos de ángulos: agudo, recto, obtuso y llano", `${ang(20, 70, 40, 90, VE, 18)}${t(60, 92, "agudo &lt; 90°", { s: 10, c: VE })}${ang(150, 70, 90, 60, RO)}${t(190, 92, "recto = 90°", { s: 10, c: RO })}${ang(60, 150, 130, 60, AZ, 18)}${t(60, 172, "obtuso &gt; 90°", { s: 10, c: AZ })}<path d="M140 150 H 240" stroke="var(--ink)" stroke-width="2.4"/>${arco(190, 150, 18, 0, 180, SO)}<circle cx="190" cy="150" r="3" fill="var(--ink)"/>${t(190, 172, "llano = 180°", { s: 10, c: SO })}`)],
    ["Medir ángulos con el transportador", `<p>El <b>transportador</b> es un semicírculo de plástico con los grados marcados de 0° a 180°. Para medir un ángulo:</p><ol><li>Coloca el <b>centro</b> del transportador justo sobre el <mark>vértice</mark>.</li><li>Haz coincidir la línea del 0° con <b>un lado</b> del ángulo.</li><li>Mira el número por donde pasa el <b>otro lado</b>.</li></ol><p>¡Cuidado! El transportador tiene dos filas de números. Usa la que empieza en 0 en el lado que has colocado. Si el ángulo es agudo, la medida debe ser menor que 90; si sale 140, has leído la fila equivocada.</p>`,
      svg("Transportador midiendo un ángulo de 60 grados", `<path d="M30 140 A 100 100 0 0 1 230 140 Z" fill="${SO}" fill-opacity=".15" stroke="${SO}" stroke-width="2"/>${[0, 30, 60, 90, 120, 150, 180].map((g) => { const a = (g * Math.PI) / 180; return `<path d="M${(130 + 88 * Math.cos(a)).toFixed(1)} ${(140 - 88 * Math.sin(a)).toFixed(1)} L ${(130 + 100 * Math.cos(a)).toFixed(1)} ${(140 - 100 * Math.sin(a)).toFixed(1)}" stroke="var(--ink)" stroke-width="1.5"/>${t(+(130 + 70 * Math.cos(a) - (g === 60 ? 10 : 0)).toFixed(1), +(134 - 70 * Math.sin(a)).toFixed(1), String(g), { s: 9 })}`; }).join("")}<path d="M130 140 H 240" stroke="${AZ}" stroke-width="3"/><path d="M130 140 L 190 36" stroke="${AZ}" stroke-width="3"/><circle cx="130" cy="140" r="4" fill="${RO}"/>${t(130, 166, "mide 60°", { s: 14, c: RO })}`),
      P.V("recB2")],
    ["Dibujar ángulos y rectas", `<p>Para <b>dibujar un ángulo</b> de una medida concreta, por ejemplo 45°:</p><ol><li>Traza un lado con la regla y marca el vértice en un extremo.</li><li>Coloca el transportador con el centro en el vértice y el 0° sobre el lado.</li><li>Haz una marca en el 45.</li><li>Une el vértice con la marca usando la regla.</li></ol><p>Para trazar <b>paralelas y perpendiculares</b> se usan la <b>escuadra</b> y el <b>cartabón</b>, dos reglas con forma de triángulo. Deslizando una sobre la otra se dibujan paralelas perfectas; y la esquina recta de la escuadra sirve para trazar perpendiculares.</p>`,
      P.filas("Pasos para dibujar un ángulo de 45 grados", [["1. Lado", "traza un lado y marca el vértice", AZ], ["2. Coloca", "centro en vértice, 0° en lado", VE], ["3. Marca", "un punto en el 45", SO], ["4. Une", "el vértice con la marca", RO]])],
    ["Ángulos a nuestro alrededor", `<p>Si te fijas, verás ángulos por todas partes:</p><ul><li><b>Rectos</b>: las esquinas de las mesas, las puertas cerradas, las páginas de un libro.</li><li><b>Agudos</b>: la punta de un lápiz, unas tijeras casi cerradas, el tejado de una casa muy puntiagudo.</li><li><b>Obtusos</b>: un portátil bien abierto, el respaldo inclinado de una tumbona.</li><li><b>Llanos</b>: un libro abierto del todo sobre la mesa.</li></ul><p>Las agujas del reloj forman ángulos distintos a lo largo del día: a las 3 forman un ángulo <mark>recto</mark>, a las 2 uno agudo, a las 5 uno obtuso y a las 6 uno llano.</p>`,
      svg("Relojes a las 2, las 3, las 5 y las 6: ángulos agudo, recto, obtuso y llano", `${[[2, "agudo", VE], [3, "recto", RO], [5, "obtuso", AZ], [6, "llano", SO]].map(([h, n, c], i) => { const cx = 36 + i * 62, a = ((h * 30 - 90) * Math.PI) / 180; return `<circle cx="${cx}" cy="76" r="26" fill="var(--card)" stroke="${c}" stroke-width="2.4"/><path d="M${cx} 76 V 54" stroke="var(--ink)" stroke-width="2.4"/><path d="M${cx} 76 L ${(cx + 18 * Math.cos(a)).toFixed(1)} ${(76 + 18 * Math.sin(a)).toFixed(1)}" stroke="${RO}" stroke-width="3.2"/>${t(cx, 124, `${h}:00`, { s: 11 })}${t(cx, 142, n, { s: 11, c })}`; }).join("")}`)],
  ],
  figura: ["Rectas y ángulos", P.columnas("Resumen: tipos de rectas, posiciones, elementos del ángulo y clases de ángulos", [["sin fin · origen · extremos", "RECTAS", ["recta, semirrecta", "segmento"], AZ], ["no se cortan · se cortan", "POSICIÓN", ["paralelas, secantes", "perpendiculares"], VE], ["lados y vértice", "ÁNGULO", ["se mide en °", "transportador"], SO], ["según su abertura", "CLASES", ["agudo, recto", "obtuso, llano"], RO]])],
  video: P.V("recV", true),
  ejemplos: [
    ["Clasifica estos ángulos: 35°, 90°, 120°, 180°.", ["Menos de 90°: agudo.", "Exactamente 90°: recto.", "Entre 90° y 180°: obtuso. 180°: llano."], "35° agudo, 90° recto, 120° obtuso y 180° llano."],
    ["¿Qué tipo de rectas son los raíles del tren y los lados de una cruz?", ["Los raíles nunca se cortan: paralelas.", "Los lados de la cruz se cortan formando cuatro ángulos rectos: perpendiculares."], "Paralelas y perpendiculares."],
    ["Al medir un ángulo con el transportador, Pablo lee 150°, pero el ángulo es más cerrado que la esquina de un folio. ¿Qué ha pasado?", ["Más cerrado que la esquina = agudo = menos de 90°.", "150° es obtuso: ha leído la fila de números equivocada.", "180 − 150 = 30."], "Ha leído la otra escala: el ángulo mide 30°."],
  ],
  errores: [
    "Confundir semirrecta (un extremo) con segmento (dos extremos).",
    "Pensar que todas las rectas que se cortan son perpendiculares: solo lo son si forman ángulos rectos.",
    "Creer que un ángulo es mayor porque sus lados son más largos.",
    "Colocar el transportador sin poner el centro en el vértice.",
    "Leer la fila de grados equivocada del transportador.",
  ],
  ejercicios: [
    ["¿Qué diferencia hay entre una recta y un segmento?", "La recta no tiene principio ni fin; el segmento tiene dos extremos."],
    ["Escribe dos ejemplos de rectas paralelas en tu clase.", "Por ejemplo, los lados opuestos de la pizarra y las líneas del cuaderno."],
    ["¿Cómo se llaman las rectas que se cortan formando cuatro ángulos rectos?", "Perpendiculares."],
    ["Nombra los elementos de un ángulo.", "Dos lados y un vértice."],
    ["¿Cuántos grados mide un ángulo recto? ¿Y uno llano?", "90° y 180°."],
    ["Clasifica: 89°, 91°, 15°, 170°.", "Agudo, obtuso, agudo y obtuso."],
    ["¿Qué ángulo forman las agujas del reloj a las 9 en punto?", "Un ángulo recto."],
    ["¿Cuántos ángulos rectos hay en un ángulo llano?", "Dos (90 + 90 = 180)."],
    ["Dibuja con el transportador un ángulo de 70° y di de qué tipo es.", "Es un ángulo agudo (menor de 90°)."],
    ["Si a un ángulo recto le añadimos 30°, ¿qué ángulo obtenemos y de qué tipo es?", "120°, obtuso."],
  ],
  quiz: [
    ["La línea que tiene principio pero no fin es…", ["la semirrecta", "el segmento", "la recta"], "Empieza en un origen."],
    ["Dos rectas que nunca se cortan son…", ["paralelas", "secantes", "perpendiculares"], "Como los raíles."],
    ["Las rectas perpendiculares forman ángulos…", ["rectos", "agudos", "llanos"], "De 90°."],
    ["El punto donde se unen los lados de un ángulo es…", ["el vértice", "el origen", "la abertura"], "Elemento del ángulo."],
    ["Un ángulo de 45° es…", ["agudo", "obtuso", "recto"], "Menor de 90°."],
    ["Un ángulo de 150° es…", ["obtuso", "llano", "agudo"], "Entre 90° y 180°."],
    ["Un ángulo llano mide…", ["180°", "90°", "360°"], "Forma una línea recta."],
    ["Para medir ángulos se usa…", ["el transportador", "el compás", "la cinta métrica"], "Tiene los grados marcados."],
    ["A las 6 en punto, las agujas forman un ángulo…", ["llano", "recto", "agudo"], "Apuntan en direcciones opuestas."],
    ["El tamaño de un ángulo depende de…", ["su abertura", "la longitud de sus lados", "el color"], "No de los lados."],
  ],
  examen: [
    ["El segmento tiene…", ["dos extremos", "un extremo", "ningún extremo"], "Principio y fin."],
    ["La esquina de un folio es un ángulo…", ["recto", "obtuso", "llano"], "90°."],
    ["Las líneas de una X son…", ["secantes", "paralelas", "curvas"], "Se cortan."],
    ["¿Qué ángulo es mayor?", ["100°", "90°", "45°"], "Más abertura."],
  ],
  feynman: ["Qué diferencia hay entre recta, semirrecta y segmento", "Qué son las rectas paralelas, secantes y perpendiculares", "Qué es un ángulo y cuáles son sus elementos", "Cómo se clasifican los ángulos según su abertura", "Cómo se usa el transportador"],
  mapa: ["RECTAS Y ÁNGULOS", [["Rectas", "recta · semirrecta · segmento", AZ], ["Posiciones", "paralelas · secantes · perpendiculares", VE], ["Ángulo", "lados · vértice · grados", SO], ["Clases", "agudo · recto · obtuso · llano", RO]]],
  tarjetas: [
    ["Semirrecta", "Línea recta con principio pero sin fin."],
    ["Segmento", "Trozo de recta entre dos puntos."],
    ["Rectas paralelas", "Nunca se cortan."],
    ["Rectas perpendiculares", "Se cortan formando cuatro ángulos rectos."],
    ["Ángulo", "Región entre dos semirrectas que salen del mismo punto."],
    ["Ángulo recto", "Mide 90°."],
    ["Ángulo agudo / obtuso", "Menos de 90° / entre 90° y 180°."],
    ["Ángulo llano", "Mide 180°: sus lados forman una recta."],
  ],
  familias: ["Buscad en casa ángulos rectos, agudos y obtusos y haced una lista.", "Mirad el reloj de agujas y decid qué tipo de ángulo forman a distintas horas.", "Buscad rectas paralelas y perpendiculares en la calle: pasos de cebra, cruces, farolas.", "Repasad las tarjetas dos minutos al día."],
  saberes: "Sentido espacial: rectas, semirrectas y segmentos; posiciones relativas de rectas; el ángulo, sus elementos, medida en grados con transportador y clasificación",
  ideas: ["Medidor de ángulos hecho con dos tiras de cartulina y un encuadernador.", "Caza de ángulos por el centro con fotografías.", "Trazado de paralelas y perpendiculares con escuadra y cartabón."],
});

// ---------- Nivel libro (4º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
// Reloj con las agujas en la hora h (en punto).
const reloj = (h) => { const a = (h % 12) * 30 * Math.PI / 180; return `<circle cx="130" cy="84" r="60" fill="var(--card)" stroke="var(--ink)" stroke-width="2.4"/>${[...Array(12)].map((_, i) => { const b = i * 30 * Math.PI / 180; return `<path d="M${(130 + 52 * Math.sin(b)).toFixed(1)} ${(84 - 52 * Math.cos(b)).toFixed(1)} L ${(130 + 58 * Math.sin(b)).toFixed(1)} ${(84 - 58 * Math.cos(b)).toFixed(1)}" stroke="var(--ink)" stroke-width="2"/>`; }).join("")}<path d="M130 84 V 34" stroke="${cAZ}" stroke-width="3.4" stroke-linecap="round"/><path d="M130 84 L ${(130 + 36 * Math.sin(a)).toFixed(1)} ${(84 - 36 * Math.cos(a)).toFixed(1)}" stroke="${cRO}" stroke-width="4.4" stroke-linecap="round"/><circle cx="130" cy="84" r="4" fill="var(--ink)"/>${t(130, 168, `las ${h} en punto: ${h * 30}°`, { s: 13, d: true })}`; };
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Trazar paralelas y perpendiculares con escuadra y cartabón", "Reconocer ángulos complementarios y suplementarios", "Relacionar los ángulos con los giros, el reloj y la brújula", "Identificar ejes de simetría en figuras y objetos"],
  lectura: { titulo: "El robot que giraba", html: `<p>En el taller de robótica, la clase de 4.º tenía que programar un pequeño robot para que recorriera un laberinto dibujado en el suelo.</p><p>—Avanza 3 pasos y gira a la derecha —dictó Samuel.</p><p>El robot avanzó… y giró solo un poquito, apuntando hacia una esquina.</p><p>—¡No! ¡Tiene que girar del todo!</p><p>La profesora se acercó.</p><p>—El robot no entiende «del todo». Hay que decirle cuántos <b>grados</b> tiene que girar.</p><p>Paula pensó un momento.</p><p>—Para girar como en las esquinas del laberinto, tiene que ser un ángulo recto. ¡90 grados!</p><p>Lo programaron así y el robot giró perfecto. Después probaron otras cosas: con 180 grados el robot daba media vuelta y volvía por donde había venido; con 360 grados daba una vuelta entera y se quedaba mirando hacia el mismo sitio, como si no hubiera hecho nada.</p><p>—¡Ha bailado! —se rio Samuel.</p><p>Al final consiguieron que el robot saliera del laberinto: 3 pasos, giro de 90°, 2 pasos, giro de 90° hacia el otro lado, 4 pasos…</p><p>—Así es como se mueven también los aviones, los barcos y los coches que conducen solos —explicó la profesora—. Todo funciona con ángulos.</p>` },
  tras: {
    "Rectas perpendiculares": [
      ["Trazar con escuadra y cartabón", `<p>Para dibujar rectas paralelas y perpendiculares con precisión se usan dos reglas especiales con forma de triángulo:</p><ul><li>La <b>escuadra</b>: tiene un ángulo recto y dos ángulos de 45°. Sus dos lados cortos son iguales.</li><li>El <b>cartabón</b>: tiene un ángulo recto, uno de 30° y otro de 60°.</li></ul><p><b>Para trazar una paralela:</b></p><ol><li>Coloca la escuadra con uno de sus lados sobre la recta que ya tienes.</li><li>Apoya el cartabón contra otro lado de la escuadra, bien sujeto.</li><li>Desliza la escuadra a lo largo del cartabón, sin mover este.</li><li>Traza la nueva recta: será <mark>paralela</mark> a la primera.</li></ol><p><b>Para trazar una perpendicular:</b></p><ol><li>Coloca el lado largo de la escuadra sobre la recta.</li><li>Apoya el cartabón contra la escuadra.</li><li>Gira la escuadra para que su otro lado corto quede apoyado en el cartabón, y desliza hasta el punto que quieras.</li><li>Traza la recta: formará un ángulo recto con la primera.</li></ol><p>Con práctica, las dos reglas se manejan como si fueran una sola. Los arquitectos y delineantes las usaban a diario antes de que existieran los ordenadores.</p>`,
        H6.dos("Reglas", ["ESCUADRA", ["90°", "45°", "45°"], cAZ], ["CARTABÓN", ["90°", "60°", "30°"], cVE]), ["okjnJuAzG84", "Uso de escuadra y cartabón, paralelas y perpendiculares", "EPV1PAC", 481990]],
    ],
    "Tipos de ángulos": [
      ["Parejas de ángulos", `<p>Cuando dos ángulos están juntos o se relacionan, reciben nombres especiales:</p><ul><li><b>Ángulos consecutivos</b>: tienen el <b>vértice</b> y un <b>lado</b> en común, uno al lado del otro, como las porciones de una tarta.</li><li><b>Ángulos adyacentes</b>: son consecutivos y, además, sus lados no comunes forman una <b>línea recta</b>. Por eso siempre suman <b>180°</b>.</li></ul><p>Según lo que suman, dos ángulos pueden ser:</p><ul><li><mark>Complementarios</mark>: suman <b>90°</b>, un ángulo recto. 30° y 60° son complementarios. El complementario de 25° es 90 − 25 = <b>65°</b>.</li><li><mark>Suplementarios</mark>: suman <b>180°</b>, un ángulo llano. 120° y 60° son suplementarios. El suplementario de 45° es 180 − 45 = <b>135°</b>.</li></ul><p>Un truco para no confundirlos: «<b>c</b>omplementario» va antes que «<b>s</b>uplementario» en el abecedario, igual que 90 va antes que 180.</p><p>Fíjate en las tijeras: al abrirlas, los ángulos de un lado y del otro del eje son adyacentes y siempre suman 180°. Si uno se hace más grande, el otro se hace más pequeño.</p>`,
        L6.filas("Parejas", [["complementarios", "suman 90°", cAZ], ["30° y 60°", "90°", cVE], ["suplementarios", "suman 180°", cNA], ["120° y 60°", "180°", cRO]])],
    ],
    "Medir ángulos con el transportador": [
      ["Giros, relojes y ángulos", `<p>Un ángulo también puede verse como un <b>giro</b>: cuánto gira algo alrededor de un punto.</p><ul><li><b>Un cuarto de vuelta</b>: 90°, un ángulo recto. Es lo que giras al doblar una esquina.</li><li><b>Media vuelta</b>: 180°, un ángulo llano. Te quedas mirando hacia atrás.</li><li><b>Tres cuartos de vuelta</b>: 270°.</li><li><b>Una vuelta entera</b>: <mark>360°</mark>. Vuelves a mirar hacia donde estabas.</li></ul><p>Los patinadores y los saltadores de trampolín hablan de «giros de 360» o de «720» (dos vueltas).</p><p><b>El reloj</b> es una máquina de hacer ángulos. La esfera es una vuelta completa de 360° dividida en 12 horas, así que entre cada número hay <b>30°</b> (360 : 12).</p><ul><li>A las 3 en punto, las agujas forman 3 × 30 = <b>90°</b>: un ángulo recto.</li><li>A las 6 en punto, forman <b>180°</b>: un ángulo llano.</li><li>A las 2 en punto, <b>60°</b>: un ángulo agudo.</li><li>A las 5 en punto, <b>150°</b>: un ángulo obtuso.</li></ul><p>La aguja de los minutos da una vuelta entera, 360°, cada hora: gira <b>6°</b> cada minuto.</p>`,
        svg("Reloj marcando las 3 en punto: las agujas forman 90 grados", reloj(3))],
    ],
  },
  final: [
    ["La simetría", `<p>Si doblas un papel por la mitad, pintas una mancha en un lado y lo vuelves a cerrar, al abrirlo verás una figura con dos mitades iguales, como una mariposa. La línea del doblez es un <mark>eje de simetría</mark>.</p><p>Una figura es <b>simétrica</b> cuando una recta la divide en dos partes que son como el reflejo de un espejo: si las doblamos por esa recta, coinciden exactamente.</p><p>Algunas figuras tienen varios ejes de simetría:</p><ul><li>El <b>rectángulo</b> tiene 2 ejes.</li><li>El <b>cuadrado</b> tiene 4 ejes: dos que pasan por la mitad de los lados y dos por las diagonales.</li><li>El <b>triángulo equilátero</b> tiene 3.</li><li>El <b>círculo</b> tiene infinitos: cualquier recta que pase por el centro.</li><li>Un triángulo escaleno no tiene ninguno.</li></ul><p>También hay letras simétricas: la <b>A</b>, la <b>M</b> o la <b>T</b> tienen un eje vertical; la <b>B</b>, la <b>C</b> o la <b>E</b>, uno horizontal; y la <b>H</b> o la <b>X</b>, los dos.</p><p>La simetría está en la naturaleza (hojas, mariposas, nuestra cara), en la arquitectura (fachadas de catedrales y palacios) y en muchos logotipos. ¡Busca ejes de simetría a tu alrededor!</p>`,
      L6.filas("Ejes de simetría", [["rectángulo", "2", cAZ], ["triángulo equil.", "3", cVE], ["cuadrado", "4", cNA], ["círculo", "infinitos", cRO]]), ["EcDFbUkyDHI", "Eje de simetría súper fácil - Para principiantes", "Daniel Carreón", 1649624]],
    ["Orientarse con ángulos: la brújula", `<p>La <b>brújula</b> es un instrumento con una aguja imantada que siempre señala hacia el <b>norte</b>. Sirve para orientarse en el campo, en el mar o en la montaña.</p><p>Alrededor de la brújula hay una rueda marcada en <b>grados</b>, de 0° a 360°, como un transportador completo. Los <b>puntos cardinales</b> están en:</p><ul><li><b>Norte (N)</b>: 0°.</li><li><b>Este (E)</b>: 90°.</li><li><b>Sur (S)</b>: 180°.</li><li><b>Oeste (O)</b>: 270°.</li></ul><p>Entre ellos están los puntos intermedios: <b>noreste</b> (45°), <b>sureste</b> (135°), <b>suroeste</b> (225°) y <b>noroeste</b> (315°).</p><p>Los pilotos y los marineros indican la dirección con un ángulo llamado <b>rumbo</b>. Si un barco navega con rumbo 90°, va hacia el este. Si gira un cuarto de vuelta a la derecha, su nuevo rumbo es 180°: va hacia el sur.</p><p>Fíjate: entre dos puntos cardinales seguidos siempre hay un ángulo recto, y entre dos opuestos (norte y sur, por ejemplo), un ángulo llano.</p><p>Hoy los móviles tienen una brújula electrónica, pero aprender a usar una de verdad puede sacarte de un apuro en una excursión.</p>`,
      H6.rueda("Brújula", "ROSA", [["N 0°", cAZ], ["E 90°", cVE], ["S 180°", cNA], ["O 270°", cRO]])],
  ],
  ejemplos: [
    ["¿Cuál es el complementario de 40°? ¿Y el suplementario?", ["Complementario: 90 − 40.", "Suplementario: 180 − 40."], "50° y 140°."],
    ["¿Qué ángulo forman las agujas del reloj a las 4 en punto?", ["Entre cada número hay 30°.", "4 × 30."], "120°: obtuso."],
  ],
  errores: ["Confundir ángulos complementarios (90°) con suplementarios (180°).", "Pensar que el círculo no tiene ejes de simetría o que solo tiene uno."],
  ejercicios: [
    ["b", "¿Cuántos grados tiene una vuelta entera?", "360°."],
    ["b", "¿Qué ángulos tiene el cartabón?", "90°, 60° y 30°."],
    ["b", "¿Cuántos ejes de simetría tiene un cuadrado?", "4."],
    ["b", "¿En qué grados está el este en la brújula?", "90°."],
    ["b", "Escribe el complementario de 70°.", "20°."],
    ["m", "Escribe el suplementario de 110°.", "70°."],
    ["m", "¿Qué ángulo forman las agujas a las 2 en punto? ¿Qué tipo es?", "60°, agudo."],
    ["m", "Un barco va con rumbo 0° y gira media vuelta. ¿Hacia dónde va?", "Hacia el sur (180°)."],
    ["m", "Escribe tres letras mayúsculas con eje de simetría vertical.", "A, M, T…"],
    ["m", "¿Cuántos grados gira la aguja de los minutos en 15 minutos?", "90°."],
    ["a", "Traza con escuadra y cartabón tres rectas paralelas y una perpendicular a ellas.", "Respuesta abierta."],
    ["a", "Programa con flechas el recorrido de un robot en un laberinto usando giros de 90° y 180°.", "Respuesta abierta."],
    ["a", "Busca en tu casa cinco objetos simétricos y dibuja su eje.", "Respuesta abierta."],
    ["a", "¿A qué horas en punto forman las agujas un ángulo recto?", "A las 3 y a las 9."],
  ],
  quiz: [
    ["Dos ángulos complementarios suman…", ["90°", "180°", "360°"], "Parejas."],
    ["Media vuelta son…", ["180°", "90°", "360°"], "Giros."],
    ["A las 6 en punto las agujas forman…", ["un ángulo llano", "un ángulo recto", "un ángulo agudo"], "Reloj."],
    ["El sur está en…", ["180°", "90°", "270°"], "Brújula."],
    ["El triángulo equilátero tiene…", ["3 ejes de simetría", "1 eje", "ningún eje"], "Simetría."],
  ],
  examen: [
    ["En la lectura, ¿cuántos grados tenía que girar el robot en las esquinas?", ["90", "180", "360"], "Lectura."],
    ["La escuadra tiene ángulos de…", ["90°, 45° y 45°", "90°, 60° y 30°", "60°, 60° y 60°"], "Instrumentos."],
  ],
  tarjetas: [
    ["Escuadra y cartabón", "Escuadra 90-45-45; cartabón 90-60-30; deslizar para paralelas."],
    ["Parejas de ángulos", "Complementarios suman 90°; suplementarios, 180°."],
    ["Giros y reloj", "Cuarto 90°, media 180°, entera 360°; 30° entre cada hora."],
    ["Simetría y brújula", "Eje como espejo; N 0°, E 90°, S 180°, O 270°."],
  ],
  glosario: [
    ["Paralelas", "Rectas que nunca se cortan."],
    ["Perpendiculares", "Rectas que se cortan formando ángulos rectos."],
    ["Escuadra", "Regla triangular con ángulos de 90°, 45° y 45°."],
    ["Cartabón", "Regla triangular con ángulos de 90°, 60° y 30°."],
    ["Ángulos complementarios", "Dos ángulos que suman 90°."],
    ["Ángulos suplementarios", "Dos ángulos que suman 180°."],
    ["Ángulos adyacentes", "Ángulos juntos cuyos lados no comunes forman una recta."],
    ["Giro", "Movimiento alrededor de un punto."],
    ["Eje de simetría", "Recta que divide una figura en dos mitades iguales."],
    ["Brújula", "Instrumento cuya aguja señala el norte."],
    ["Puntos cardinales", "Norte, sur, este y oeste."],
    ["Rumbo", "Dirección expresada en grados."],
  ],
  situacion: {
    titulo: "Robots de papel",
    reto: "Por parejas, la clase programa con instrucciones de pasos y giros el recorrido de un compañero «robot» por un circuito.",
    pasos: ["Dibujad un circuito en el suelo del patio con tiza.", "Escribid el programa con avances y giros en grados.", "Un compañero hace de robot y sigue el programa con los ojos tapados.", "Corregid los errores y comparad los programas."],
    producto: "Un programa de instrucciones con giros correctos.",
    evaluacion: ["Identifica giros de 90°, 180° y 360°.", "Usa los puntos cardinales y los grados.", "Comprueba y corrige los errores.", "Coopera con su pareja."],
  },
});
