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
