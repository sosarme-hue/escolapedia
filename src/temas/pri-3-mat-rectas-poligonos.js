// Matemáticas 3º de Primaria: rectas, ángulos y polígonos. Dibujos propios en SVG.
const P = require("./_pri3a");
const { svg, t, poligono, arco, AZ, RO, VE, NA, SO, MO } = P;

// Punto con nombre.
const pto = (x, y, n, c = "var(--ink)", dx = 0, dy = -10) => `<circle cx="${x}" cy="${y}" r="3.5" fill="${c}"/>${n ? t(x + dx, y + dy, n, { s: 12, c }) : ""}`;
// Línea con puntas de flecha opcionales en cada extremo (para rectas y semirrectas).
const linea = (x1, y1, x2, y2, c, ini, fin) => {
  const a = Math.atan2(y2 - y1, x2 - x1), f = (x, y, s) => `<path d="M${(x - s * 9 * Math.cos(a - 0.45)).toFixed(1)} ${(y - s * 9 * Math.sin(a - 0.45)).toFixed(1)} L ${x} ${y} L ${(x - s * 9 * Math.cos(a + 0.45)).toFixed(1)} ${(y - s * 9 * Math.sin(a + 0.45)).toFixed(1)}" stroke="${c}" stroke-width="2.5" fill="none"/>`;
  return `<path d="M${x1} ${y1} L ${x2} ${y2}" stroke="${c}" stroke-width="2.5"/>${ini ? f(x1, y1, -1) : ""}${fin ? f(x2, y2, 1) : ""}`;
};
// Ángulo con vértice (x, y), lados con ángulos a1 y a2 (grados, sentido antihorario) y longitud l.
const angulo = (x, y, a1, a2, l, c, o = {}) => {
  const P2 = (a) => [(x + l * Math.cos((a * Math.PI) / 180)).toFixed(1), (y - l * Math.sin((a * Math.PI) / 180)).toFixed(1)];
  const [x1, y1] = P2(a1), [x2, y2] = P2(a2);
  const marca = a2 - a1 === 90 ? `<path d="M${x + 12} ${y} V ${y - 12} H ${x}" fill="none" stroke="${c}" stroke-width="1.8"/>` : arco(x, y, 16, a1, a2, c);
  return `<path d="M${x1} ${y1} L ${x} ${y} L ${x2} ${y2}" fill="none" stroke="var(--ink)" stroke-width="2.5"/>${marca}${o.txt ? t(x + (o.dx || 0), y + 22, o.txt, { s: 12, c }) : ""}`;
};

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Rectas, ángulos y polígonos",
  minutos: 50,
  objetivos: ["Distinguir recta, semirrecta y segmento", "Reconocer rectas paralelas, secantes y perpendiculares", "Identificar ángulos rectos, agudos y obtusos", "Reconocer y clasificar polígonos por su número de lados y conocer sus elementos"],
  claves: ["punto", "línea", "recta", "semirrecta", "segmento", "paralelas", "secantes", "perpendiculares", "ángulo", "vértice", "recto", "agudo", "obtuso", "polígono", "lado", "triángulo", "cuadrilátero", "pentágono", "hexágono"],
  pregunta: ["Mira la esquina de tu libro. ¿Qué forma tiene? ¿Y las dos rayas de un paso de cebra?", "La esquina del libro es un <mark>ángulo recto</mark>, como una «L». Las rayas del paso de cebra son <b>rectas paralelas</b>: van una al lado de la otra y nunca se tocan. Las matemáticas tienen nombres para todas las formas que nos rodean. ¡Vamos a conocerlos!"],
  bloques: [
    ["Líneas rectas y curvas", `<p>Una <b>línea</b> es lo que dibujamos al mover el lápiz sin levantarlo. Hay varios tipos:</p><ul><li><b>Recta</b>: va siempre en la misma dirección, sin torcerse. Se traza con la regla.</li><li><b>Curva</b>: se tuerce poco a poco, sin esquinas, como un arco iris.</li><li><b>Poligonal</b>: está formada por trozos rectos unidos, con esquinas, como un zigzag.</li><li><b>Mixta</b>: tiene trozos rectos y trozos curvos.</li></ul><p>Si una línea empieza y acaba en el mismo punto, es <b>cerrada</b>; si no, es <b>abierta</b>.</p>`,
      svg("Tipos de líneas: recta, curva, poligonal y mixta", `<path d="M20 40 L 110 40" stroke="${AZ}" stroke-width="3"/>${t(65, 62, "recta", { s: 12, c: AZ })}<path d="M144 50 Q 170 10 196 40 T 244 34" fill="none" stroke="${VE}" stroke-width="3"/>${t(194, 70, "curva", { s: 12, c: VE })}<path d="M20 128 L 40 96 L 60 128 L 80 96 L 100 128" fill="none" stroke="${RO}" stroke-width="3"/>${t(60, 150, "poligonal", { s: 12, c: RO })}<path d="M144 120 L 180 120 Q 200 90 220 120 L 244 120" fill="none" stroke="${MO}" stroke-width="3"/>${t(194, 150, "mixta", { s: 12, c: MO })}`)],
    ["Recta, semirrecta y segmento", `<p>Con un trozo de línea recta podemos tener tres cosas distintas:</p><ul><li><b>Recta</b>: <mark>no tiene principio ni fin</mark>. Se dibuja con flechas en los dos lados porque sigue y sigue.</li><li><b>Semirrecta</b>: tiene <mark>principio pero no fin</mark>. Empieza en un punto y sigue hacia un lado, como el rayo de una linterna.</li><li><b>Segmento</b>: tiene <mark>principio y fin</mark>. Está entre dos puntos y lo podemos <b>medir</b>: el segmento AB mide 4 cm.</li></ul><p>Los puntos se nombran con letras mayúsculas: A, B, C…</p>`,
      svg("Una recta con flechas en los dos lados, una semirrecta con origen y un segmento AB", `${linea(20, 34, 240, 34, AZ, true, true)}${t(130, 56, "recta: sin principio ni fin", { s: 11.5, c: AZ })}${linea(30, 86, 240, 86, VE, false, true)}${pto(30, 86, "O", VE, 0, -10)}${t(130, 108, "semirrecta: tiene origen", { s: 11.5, c: VE })}${linea(60, 138, 200, 138, RO)}${pto(60, 138, "A", RO)}${pto(200, 138, "B", RO)}${t(130, 162, "segmento AB: se puede medir", { s: 11.5, c: RO })}`, 172)],
    ["Rectas paralelas y secantes", `<p>Si dibujamos dos rectas en un papel, pueden pasar dos cosas:</p><ul><li><b>Paralelas</b>: <mark>nunca se cortan</mark>, por mucho que las alarguemos. Siempre están a la misma distancia, como las vías del tren o las líneas de tu cuaderno.</li><li><b>Secantes</b>: <mark>se cortan en un punto</mark>, como las dos rayas de una «X» o el cruce de dos calles.</li></ul><p>Busca ejemplos en la clase: los bordes de arriba y de abajo de la pizarra son paralelos; las tijeras abiertas forman dos líneas secantes.</p>`,
      svg("Dos rectas paralelas como vías del tren y dos rectas secantes que se cortan en un punto", `${linea(16, 44, 116, 44, AZ, true, true)}${linea(16, 80, 116, 80, AZ, true, true)}${[0, 1, 2, 3, 4].map((i) => `<path d="M${28 + i * 20} 44 V 80" stroke="var(--line)" stroke-width="3"/>`).join("")}${t(66, 116, "paralelas", { s: 14, c: AZ })}${t(66, 134, "nunca se cortan", { s: 11 })}${linea(144, 30, 240, 96, RO, true, true)}${linea(144, 96, 240, 30, RO, true, true)}${pto(192, 63, "", RO)}${t(192, 116, "secantes", { s: 14, c: RO })}${t(192, 134, "se cortan", { s: 11 })}`)],
    ["Rectas perpendiculares", `<p>Las rectas <b>perpendiculares</b> son un tipo especial de secantes: se cortan formando <mark>cuatro ángulos iguales</mark>, cuatro esquinas como la de un libro. Es decir, forman <b>ángulos rectos</b>.</p><p>Ejemplos: la cruz de la tecla «+», los lados de una ventana, el palo y el larguero de una portería.</p><p>Para comprobar si dos rectas son perpendiculares, usa la <b>escuadra</b> o la esquina de una hoja: si encaja justo en el cruce, ¡son perpendiculares! El ángulo recto se marca con un cuadradito.</p>`,
      svg("Dos rectas perpendiculares forman cuatro ángulos rectos marcados con un cuadradito", `${linea(30, 90, 230, 90, VE, true, true)}${linea(130, 20, 130, 160, VE, true, true)}<path d="M130 78 H 142 V 90" fill="none" stroke="${RO}" stroke-width="2"/><path d="M130 102 H 118 V 90" fill="none" stroke="${RO}" stroke-width="2"/>${t(196, 60, "perpendiculares", { s: 12, c: VE })}${t(196, 126, "ángulo recto", { s: 12, c: RO })}`)],
    ["¿Qué es un ángulo?", `<p>Un <b>ángulo</b> es la abertura que hay entre dos líneas que salen del mismo punto. Tiene:</p><ul><li>Dos <b>lados</b>: las dos semirrectas.</li><li>Un <b>vértice</b>: el punto donde se juntan los lados.</li></ul><p>Imagina un abanico o unas tijeras: cuanto más los abres, <mark>mayor es el ángulo</mark>. ¡El tamaño del ángulo no depende de lo largos que dibujemos los lados, sino de lo abiertos que estén!</p><p>Las agujas del reloj también forman ángulos: a las 3 en punto forman un ángulo recto.</p>`,
      svg("Un ángulo con su vértice y sus dos lados", `${angulo(70, 130, 0, 50, 120, MO)}${pto(70, 130, "", RO)}${t(56, 152, "vértice", { s: 12, c: RO })}${t(170, 148, "lado", { s: 12, c: AZ })}${t(120, 52, "lado", { s: 12, c: AZ })}${t(106, 118, "ángulo", { s: 11, c: MO, a: "start" })}`)],
    ["Ángulos rectos, agudos y obtusos", `<p>Según su abertura, los ángulos pueden ser:</p><ul><li><b>Recto</b>: como la esquina de un folio o una «L». Lo marcamos con un cuadradito.</li><li><b>Agudo</b>: <mark>menos abierto</mark> que un recto. Como la punta de un lápiz o una pizza cortada en trozos.</li><li><b>Obtuso</b>: <mark>más abierto</mark> que un recto. Como un abanico muy abierto o el respaldo de una tumbona.</li></ul><p>Para saber de qué tipo es un ángulo, compáralo con la esquina de una hoja: si cabe dentro sin llenarla, es agudo; si se sale, es obtuso.</p>`,
      svg("Tres ángulos: agudo, recto y obtuso", `${angulo(22, 110, 0, 40, 60, AZ, { txt: "agudo", dx: 26 })}${angulo(104, 110, 0, 90, 60, VE, { txt: "recto", dx: 26 })}${angulo(196, 110, 0, 135, 54, RO, { txt: "obtuso", dx: 0 })}${t(130, 160, "menos · igual · más que una L", { s: 12, c: "var(--muted)" })}`),
      P.V("recB")],
    ["Los polígonos", `<p>Un <b>polígono</b> es una figura plana <mark>cerrada</mark> y formada solo por <mark>líneas rectas</mark> (una línea poligonal cerrada).</p><p>Sus elementos son:</p><ul><li><b>Lados</b>: los segmentos que lo forman.</li><li><b>Vértices</b>: los puntos donde se unen dos lados.</li><li><b>Ángulos</b>: la abertura en cada vértice.</li></ul><p>Un círculo <b>no</b> es un polígono, porque su borde es curvo. Una figura abierta tampoco, aunque tenga lados rectos.</p><p>¡Un polígono tiene el mismo número de lados, de vértices y de ángulos!</p>`,
      svg("Polígono con sus lados, vértices y ángulos, y dos figuras que no son polígonos", `${poligono(70, 82, 52, 5, { c: AZ, fill: AZ, op: 0.15 })}${pto(70, 30, "vértice", RO, 0, -8)}${t(70, 160, "polígono ✔", { s: 12, c: VE })}<circle cx="178" cy="60" r="22" fill="none" stroke="var(--muted)" stroke-width="2.5"/>${t(178, 100, "curvo ✘", { s: 11, c: RO })}<path d="M156 150 L 170 120 L 190 140 L 206 116" fill="none" stroke="var(--muted)" stroke-width="2.5"/>${t(226, 150, "abierto ✘", { s: 11, c: RO })}`)],
    ["Clasificar polígonos por sus lados", `<p>Los polígonos se nombran según su <b>número de lados</b>:</p>${P.tb(["lados", "nombre", "ejemplo"], [["3", "triángulo", "una señal de ceda el paso"], ["4", "cuadrilátero", "una ventana, una hoja"], ["5", "pentágono", "la casa dibujada de frente"], ["6", "hexágono", "una celda de un panal"], ["7", "heptágono", "algunas monedas"], ["8", "octógono", "la señal de STOP"]])}<p>Entre los <b>cuadriláteros</b> hay algunos con nombre propio: el <b>cuadrado</b> (4 lados iguales y 4 ángulos rectos), el <b>rectángulo</b> (4 ángulos rectos, lados iguales dos a dos) y el <b>rombo</b> (4 lados iguales, sin ángulos rectos).</p>`,
      svg("Triángulo, cuadrilátero, pentágono, hexágono y octógono", `${[[3, "triángulo", AZ], [4, "cuadrilátero", VE], [5, "pentágono", RO]].map(([n, nom, c], i) => `${poligono(44 + i * 86, 50, 28, n, { c, fill: c, op: 0.18, giro: n === 4 ? -45 : -90 })}${t(44 + i * 86, 98, nom, { s: 11, c })}`).join("")}${[[6, "hexágono", NA], [8, "octógono", MO]].map(([n, nom, c], i) => `${poligono(88 + i * 86, 128, 24, n, { c, fill: c, op: 0.18, giro: n === 8 ? -67.5 : -90 })}${t(88 + i * 86, 166, nom, { s: 11, c })}`).join("")}`, 172),
      P.V("recB2")],
    ["Polígonos a nuestro alrededor", `<p>Si te fijas, verás polígonos y ángulos por todas partes:</p><ul><li>Las <b>señales de tráfico</b>: triángulos (peligro), círculos (prohibición, ¡no es polígono!), octógono (STOP), cuadrados y rectángulos (información).</li><li>Los <b>panales de las abejas</b>: hexágonos que encajan sin dejar huecos.</li><li>Los <b>balones de fútbol</b> clásicos: pentágonos y hexágonos.</li><li>Las <b>baldosas</b> del suelo: cuadrados, rectángulos, hexágonos.</li></ul><p>Reto: haz una lista de los polígonos que encuentres en tu casa y cuenta sus lados.</p>`,
      svg("Panal de hexágonos que encajan sin huecos", `${[[0, 0], [1, 0], [2, 0], [0.5, 1], [1.5, 1], [2.5, 1], [0, 2], [1, 2], [2, 2]].map(([c, f]) => poligono(68 + c * 41.6, 42 + f * 36, 24, 6, { c: SO, fill: SO, op: 0.35, giro: -90 })).join("")}${t(130, 168, "el panal: hexágonos sin huecos", { s: 12, c: NA })}`)],
  ],
  figura: ["Rectas, ángulos y polígonos", P.columnas("Resumen: rectas, posiciones, ángulos y polígonos", [["sin fin · con origen · medible", "LÍNEAS", ["recta, semirrecta", "segmento"], AZ], ["nunca se cortan", "POSICIONES", ["paralelas, secantes", "perpendiculares"], VE], ["vértice y lados", "ÁNGULOS", ["agudo · recto", "obtuso"], RO], ["cerrado y recto", "POLÍGONOS", ["3 triángulo", "4 cuadrilátero…"], SO]])],
  video: P.V("recV", true),
  ejemplos: [
    ["¿Qué tiene principio pero no fin: una recta, una semirrecta o un segmento?", ["La recta no tiene ni principio ni fin.", "El segmento tiene principio y fin.", "La semirrecta empieza en un punto y no acaba."], "La semirrecta."],
    ["Las manecillas del reloj a las 3 en punto forman un ángulo… ¿y a la 1 en punto?", ["A las 3: como una L.", "A la 1: menos abierto que una L."], "A las 3, recto; a la 1, agudo."],
    ["Una figura tiene 6 lados rectos y es cerrada. ¿Cómo se llama? ¿Cuántos vértices tiene?", ["Es un polígono porque es cerrada y de lados rectos.", "6 lados: hexágono.", "Tiene tantos vértices como lados."], "Hexágono, con 6 vértices."],
  ],
  errores: [
    "Confundir la recta (sin fin) con el segmento (con principio y fin).",
    "Pensar que dos rectas no son paralelas solo porque son de distinto largo.",
    "Creer que un ángulo es mayor porque sus lados están dibujados más largos.",
    "Llamar polígono al círculo.",
    "Confundir pentágono (5) y hexágono (6).",
  ],
  ejercicios: [
    ["Dibuja una línea curva, una poligonal y una recta.", "Respuesta abierta: curva sin esquinas, poligonal en zigzag y recta con regla."],
    ["¿Qué diferencia hay entre una recta y un segmento?", "La recta no tiene principio ni fin; el segmento tiene principio y fin y se puede medir."],
    ["Escribe dos ejemplos de rectas paralelas en tu clase.", "Por ejemplo: las líneas del cuaderno y los bordes de arriba y abajo de la pizarra."],
    ["¿Cómo se llaman dos rectas que se cortan formando ángulos rectos?", "Perpendiculares."],
    ["¿Cuáles son los elementos de un ángulo?", "Dos lados y un vértice."],
    ["Clasifica: el ángulo de una esquina de la mesa y el de unas tijeras poco abiertas.", "Recto y agudo."],
    ["¿Qué es un polígono?", "Una figura plana cerrada formada por líneas rectas."],
    ["¿Cuántos lados tienen un pentágono y un octógono?", "5 y 8."],
    ["¿Por qué un círculo no es un polígono?", "Porque su borde es curvo, no está formado por lados rectos."],
    ["Un polígono tiene 4 vértices. ¿Cuántos lados tiene? ¿Cómo se llama?", "4 lados: cuadrilátero."],
  ],
  quiz: [
    ["La línea que no tiene principio ni fin es la…", ["recta", "semirrecta", "segmento"], "Flechas en los dos lados."],
    ["El segmento tiene…", ["principio y fin", "solo principio", "ni principio ni fin"], "Se puede medir."],
    ["Las vías del tren son…", ["paralelas", "secantes", "perpendiculares"], "Nunca se cortan."],
    ["Dos rectas que se cortan son…", ["secantes", "paralelas", "curvas"], "Se cortan en un punto."],
    ["El punto donde se juntan los lados de un ángulo es el…", ["vértice", "lado", "centro"], "Vértice."],
    ["Un ángulo menos abierto que el recto es…", ["agudo", "obtuso", "llano"], "Como la punta de un lápiz."],
    ["La esquina de una hoja es un ángulo…", ["recto", "agudo", "obtuso"], "Como una L."],
    ["Un polígono de 3 lados es un…", ["triángulo", "cuadrilátero", "pentágono"], "Tri = tres."],
    ["¿Cuál NO es un polígono?", ["el círculo", "el cuadrado", "el hexágono"], "Es curvo."],
    ["La señal de STOP tiene forma de…", ["octógono", "hexágono", "pentágono"], "8 lados."],
  ],
  examen: [
    ["El rayo de una linterna se parece a una…", ["semirrecta", "recta", "curva"], "Tiene origen y no acaba."],
    ["Las rectas que forman una cruz «+» son…", ["perpendiculares", "paralelas", "curvas"], "Ángulos rectos."],
    ["Un ángulo más abierto que el recto es…", ["obtuso", "agudo", "recto"], "Como un abanico muy abierto."],
    ["Un hexágono tiene…", ["6 lados", "5 lados", "8 lados"], "Panal de abejas."],
  ],
  feynman: ["Qué diferencia hay entre recta, semirrecta y segmento", "Qué son las rectas paralelas, secantes y perpendiculares", "Qué es un ángulo y cuáles son sus elementos", "Cómo distingo un ángulo agudo, recto y obtuso", "Qué es un polígono y cómo se nombran según sus lados"],
  mapa: ["RECTAS, ÁNGULOS Y POLÍGONOS", [["Líneas", "recta, semirrecta, segmento", AZ], ["Posiciones", "paralelas, secantes, perpendiculares", VE], ["Ángulos", "agudo, recto, obtuso", RO], ["Polígonos", "cerrados y de lados rectos", SO]]],
  tarjetas: [
    ["Recta", "Línea recta sin principio ni fin."],
    ["Semirrecta", "Tiene principio (origen) pero no fin."],
    ["Segmento", "Trozo de recta con principio y fin: se puede medir."],
    ["Paralelas", "Rectas que nunca se cortan."],
    ["Perpendiculares", "Rectas que se cortan formando ángulos rectos."],
    ["Ángulo", "Abertura entre dos lados que salen de un vértice."],
    ["Agudo, recto y obtuso", "Menos abierto, igual o más abierto que una esquina en L."],
    ["Polígono", "Figura plana cerrada de lados rectos: triángulo (3), cuadrilátero (4), pentágono (5), hexágono (6)…"],
  ],
  familias: ["Buscad paralelas y perpendiculares en la calle: pasos de cebra, ventanas, farolas.", "Jugad a encontrar polígonos en las señales de tráfico durante un paseo.", "Usad una hoja doblada como «medidor» de ángulos rectos por la casa.", "Construid polígonos con palillos y plastilina y contad lados y vértices."],
  saberes: "Sentido espacial: tipos de líneas; recta, semirrecta y segmento; posiciones relativas de rectas (paralelas, secantes y perpendiculares); el ángulo y sus elementos; ángulos recto, agudo y obtuso; polígonos, elementos y clasificación por el número de lados; cuadriláteros especiales",
  ideas: ["Geoplano con gomas para construir polígonos y ángulos.", "Cazadores de ángulos rectos con una escuadra de papel por el colegio.", "Mural de señales de tráfico clasificadas por su forma."],
});
