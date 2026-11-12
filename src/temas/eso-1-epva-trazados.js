// Educación Plástica, Visual y Audiovisual 1º ESO: trazados geométricos básicos. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, arco, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Trazados geométricos básicos",
  minutos: 55,
  objetivos: ["Conocer y usar con cuidado los instrumentos de dibujo técnico", "Trazar paralelas y perpendiculares con escuadra y cartabón", "Construir la mediatriz de un segmento y la bisectriz de un ángulo con compás", "Dividir un segmento en partes iguales y construir ángulos con la plantilla"],
  claves: ["escuadra", "cartabón", "compás", "mediatriz", "bisectriz", "teorema de Tales"],
  pregunta: {
    texto: "¿Cómo encontrarías el punto exacto en el que poner una farola para que esté a la misma distancia de dos casas, sin medir con regla?",
    respuesta: "Trazando la <b>mediatriz</b> del segmento que une las dos casas, con un compás: <mark>todos los puntos de la mediatriz están a la misma distancia de los dos extremos</mark>. Es uno de los trazados básicos que usan arquitectos, ingenieros y diseñadores.",
  },
  bloques: [
    {
      html: `<h3>Los instrumentos de dibujo técnico</h3>${tabla(["Instrumento", "Para qué sirve"], [["Regla", "trazar rectas y medir (no se usa para medir con escuadra y cartabón)"], ["Escuadra", "triángulo con ángulos de 90°, 45° y 45°"], ["Cartabón", "triángulo con ángulos de 90°, 60° y 30°"], ["Compás", "trazar circunferencias y arcos y trasladar medidas"], ["Transportador", "medir y dibujar ángulos en grados"], ["Lápiz duro (2H, H)", "líneas finas y precisas de construcción"], ["Lápiz HB", "líneas de resultado, algo más marcadas"]])}<p>Consejos: mantén el lápiz y la mina del compás <b>bien afilados</b>, trabaja con <b>líneas finas</b> y no borres las líneas auxiliares: demuestran cómo has hecho el trazado.</p>`,
      svg: svg("Escuadra con ángulos de 90, 45 y 45 grados y cartabón con ángulos de 90, 60 y 30 grados", `<path d="M20 150 L 120 150 L 20 50 Z" fill="var(--pen)" fill-opacity=".14" stroke="var(--pen)" stroke-width="2.5"/>${t(40, 140, "90°", { s: 10, c: "var(--pen)" })}${t(96, 144, "45°", { s: 10, c: "var(--pen)" })}${t(28, 76, "45°", { s: 10, c: "var(--pen)", a: "start" })}${t(60, 170, "escuadra", { s: 11, c: "var(--pen)" })}<path d="M140 150 L 240 150 L 140 92 Z" fill="var(--red)" fill-opacity=".14" stroke="var(--red)" stroke-width="2.5"/>${t(158, 140, "90°", { s: 10, c: "var(--red)" })}${t(218, 144, "30°", { s: 10, c: "var(--red)" })}${t(146, 112, "60°", { s: 10, c: "var(--red)", a: "start" })}${t(190, 170, "cartabón", { s: 11, c: "var(--red)" })}`),
    },
    {
      html: `<h3>Trazar paralelas</h3><p>Dos rectas son <b>paralelas</b> si nunca se cortan. Con escuadra y cartabón:</p><ol><li>Coloca la <b>hipotenusa</b> de la escuadra (su lado largo) sobre la recta dada.</li><li>Apoya el <b>cartabón</b> contra uno de los catetos de la escuadra, como si fuera una guía. Sujétalo firme.</li><li><b>Desliza la escuadra</b> sobre el cartabón, sin que este se mueva.</li><li>Traza la nueva recta por el lado largo de la escuadra en la posición que quieras.</li></ol><p>Así puedes trazar tantas paralelas como necesites: para hacer rayados, cuadrículas o fondos.</p>`,
      svg: svg("Escuadra deslizándose sobre el cartabón fijo para trazar dos rectas paralelas", `<path d="M30 60 L 230 60 M30 110 L 230 110" stroke="var(--pen)" stroke-width="2.5"/><path d="M80 64 L 130 64 L 130 114 Z" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M68 114 L 130 114 L 130 176 Z" fill="var(--pen)" fill-opacity=".16" stroke="var(--pen)" stroke-width="1.5"/><path d="M134 40 V 176 L 176 176 Z" fill="var(--red)" fill-opacity=".14" stroke="var(--red)" stroke-width="2"/>${t(200, 150, "cartabón", { c: "var(--red)", s: 10 })}${t(90, 50, "recta dada", { c: "var(--muted)", s: 10 })}${t(90, 100, "paralela", { c: "var(--pen)", s: 10 })}<path d="M120 76 V 100" stroke="var(--leaf)" stroke-width="2" marker-end="url(#ft1)"/><defs><marker id="ft1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--leaf)"/></marker></defs>`, 180),
    },
    {
      html: `<h3>Trazar perpendiculares</h3><p>Dos rectas son <b>perpendiculares</b> si se cortan formando ángulos rectos (90°).</p><ol><li>Coloca la hipotenusa de la escuadra sobre la recta dada y apoya el cartabón en un cateto, como antes.</li><li>Ahora <b>gira la escuadra</b> sobre el cartabón (o usa el cateto pequeño del cartabón) para que su otro cateto quede encima.</li><li>El lado que antes estaba horizontal, ahora queda formando 90° con la recta. Traza.</li></ol><p>Truco: también puedes apoyar un cateto del cartabón sobre la regla y trazar por el otro cateto, que forma 90° con el primero.</p>`,
    },
    {
      html: `<h3>La mediatriz de un segmento</h3><p>La <b>mediatriz</b> es la recta perpendicular a un segmento que pasa por su <b>punto medio</b>. Todos sus puntos están a la <mark>misma distancia de los dos extremos</mark>.</p><ol><li>Abre el compás <b>más de la mitad</b> del segmento AB.</li><li>Con centro en A, traza un arco por arriba y otro por abajo.</li><li>Sin cambiar la abertura, haz lo mismo con centro en B. Los arcos se cortan en dos puntos.</li><li>Une esos dos puntos: esa recta es la mediatriz. Donde corta a AB está el punto medio M.</li></ol><p>Sirve para dividir un segmento en 2, 4, 8… partes iguales y para encontrar el centro de una circunferencia que pasa por tres puntos.</p>`,
      svg: svg("Construcción de la mediatriz: arcos desde A y desde B que se cortan arriba y abajo; la recta que une los cortes es la mediatriz", `<path d="M60 96 H 200" stroke="var(--ink)" stroke-width="2.5"/><circle cx="60" cy="96" r="3.5" fill="var(--ink)"/><circle cx="200" cy="96" r="3.5" fill="var(--ink)"/>${t(52, 116, "A", { s: 12 })}${t(208, 116, "B", { s: 12 })}${arco(60, 96, 90, 25, 55, "var(--pen)")}${arco(60, 96, 90, -55, -25, "var(--pen)")}${arco(200, 96, 90, 125, 155, "var(--red)")}${arco(200, 96, 90, 205, 235, "var(--red)")}<path d="M130 16 V 176" stroke="var(--leaf)" stroke-width="2.2"/><circle cx="130" cy="96" r="3.5" fill="var(--leaf)"/>${t(142, 112, "M", { s: 12, c: "var(--leaf)" })}${t(170, 30, "mediatriz", { c: "var(--leaf)", s: 11 })}`, 190),
      video: vb("traB"),
    },
    {
      html: `<h3>La bisectriz de un ángulo</h3><p>La <b>bisectriz</b> es la semirrecta que divide un ángulo en <mark>dos ángulos iguales</mark>. Sus puntos están a la misma distancia de los dos lados.</p><ol><li>Con centro en el vértice V, traza un arco que corte los dos lados en los puntos 1 y 2.</li><li>Con centro en 1 y luego en 2, y la misma abertura, traza dos arcos que se corten dentro del ángulo en un punto P.</li><li>Une V con P: es la bisectriz.</li></ol><p>Si repites el trazado en cada mitad, divides el ángulo en 4 partes iguales. Así se obtiene un ángulo de 45° a partir de uno de 90°, o de 15° a partir de uno de 30°.</p>`,
      svg: svg("Construcción de la bisectriz: arco desde el vértice que corta los dos lados y dos arcos que se cortan en P; la recta VP divide el ángulo en dos iguales", `<path d="M40 150 H 240 M40 150 L 200 34" stroke="var(--ink)" stroke-width="2.5"/><circle cx="40" cy="150" r="3.5" fill="var(--ink)"/>${t(30, 166, "V", { s: 12 })}${arco(40, 150, 90, -5, 42, "var(--pen)")}<circle cx="130" cy="150" r="3" fill="var(--pen)"/><circle cx="113" cy="97" r="3" fill="var(--pen)"/>${arco(130, 150, 60, 30, 60, "var(--red)")}${arco(113, 97, 60, -18, 12, "var(--red)")}<path d="M40 150 L 238 87" stroke="var(--leaf)" stroke-width="2.2"/>${t(176, 98, "P", { s: 12, c: "var(--red)" })}${t(214, 120, "bisectriz", { c: "var(--leaf)", s: 11 })}`),
      video: vb("traB2"),
    },
    {
      html: `<h3>Ángulos con escuadra y cartabón</h3><p>Combinando la escuadra (45°) y el cartabón (30° y 60°) se dibujan muchos ángulos <b>sin transportador</b>:</p>${tabla(["Ángulo", "Cómo se obtiene"], [["30°, 45°, 60°, 90°", "directamente con un ángulo de la plantilla"], ["75°", "45° + 30°"], ["105°", "45° + 60°"], ["120°", "90° + 30°"], ["135°", "90° + 45°"], ["15°", "45° − 30° (o bisectriz de 30°)"]])}<p>Se coloca una plantilla apoyada en la recta base y la otra pegada a ella, sumando o restando sus ángulos.</p>`,
    },
    {
      html: `<h3>Dividir un segmento en partes iguales (Tales)</h3><p>Para dividir un segmento AB en, por ejemplo, <b>5 partes iguales</b> aunque su medida no se pueda dividir exactamente:</p><ol><li>Desde A traza una semirrecta auxiliar con cualquier inclinación.</li><li>Con el compás, marca sobre ella 5 segmentos iguales de cualquier tamaño: puntos 1, 2, 3, 4 y 5.</li><li>Une el punto 5 con B.</li><li>Traza <b>paralelas</b> a esa recta por los puntos 4, 3, 2 y 1. Donde cortan a AB quedan las divisiones.</li></ol><p>Funciona gracias al <b>teorema de Tales</b>: rectas paralelas cortan a dos rectas en segmentos proporcionales.</p>`,
      svg: svg("División de un segmento AB en cinco partes iguales trazando paralelas desde una semirrecta auxiliar", `<path d="M30 140 H 230" stroke="var(--ink)" stroke-width="2.5"/><path d="M30 140 L 200 30" stroke="var(--muted)" stroke-width="1.5"/>${[1, 2, 3, 4, 5].map((i) => { const x = 30 + i * 34, y = 140 - i * 22; return `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--pen)"/>${t(x - 4, y - 6, String(i), { s: 9, c: "var(--pen)" })}<path d="M${x} ${y} L ${30 + i * 40} 140" stroke="${i === 5 ? "var(--red)" : "var(--leaf)"}" stroke-width="1.5"/><circle cx="${30 + i * 40}" cy="140" r="2.5" fill="var(--ink)"/>`; }).join("")}${t(24, 158, "A", { s: 12 })}${t(236, 158, "B", { s: 12 })}${t(130, 174, "5 partes iguales", { c: "var(--leaf)", s: 11 })}`, 180),
    },
    {
      html: `<h3>Trazados con compás y circunferencias</h3><p>El compás también permite:</p><ul><li><b>Trasladar un segmento</b>: se toma su medida con el compás y se lleva a otra recta.</li><li><b>Copiar un ángulo</b>: con un arco desde el vértice del ángulo dado y otro igual desde un nuevo vértice; se toma la distancia entre los cortes y se traslada.</li><li><b>Dividir la circunferencia en 6 partes</b>: con la misma abertura que el radio, se marca seis veces sobre ella. Es la base del hexágono y de la «flor de seis pétalos».</li><li><b>Trazar rosetones</b>: combinando arcos iguales se crean diseños decorativos, como los de las vidrieras góticas.</li></ul><p>Un buen ejercicio final es diseñar un <b>rosetón</b> propio y colorearlo.</p>`,
    },
  ],
  figura: {
    titulo: "Trazados básicos en un vistazo",
    svg: filas("Resumen: escuadra 45 grados y cartabón 30 y 60; paralelas deslizando; perpendiculares girando; mediatriz con arcos desde los extremos; bisectriz con arcos desde el vértice; división con Tales", [["Plantillas", "escuadra 45° · cartabón 30° y 60°", "var(--pen)"], ["Paralelas", "deslizar la escuadra sobre el cartabón", "var(--inf)"], ["Perpendiculares", "girar la escuadra 90°", "var(--sun)"], ["Mediatriz", "arcos iguales desde A y B", "var(--leaf)"], ["Bisectriz", "arco desde V y dos arcos iguales", "var(--red)"], ["Tales", "dividir en partes iguales", "var(--ink)"]], 210),
  },
  video: vg("traV"),
  quiz: mezcla([
    { q: "La escuadra tiene ángulos de…", o: ["90°, 45° y 45°", "90°, 60° y 30°", "60°, 60° y 60°"], a: 0, e: "Isósceles rectángulo." },
    { q: "El cartabón tiene ángulos de…", o: ["90°, 60° y 30°", "90°, 45° y 45°", "120°, 30° y 30°"], a: 0, e: "Medio triángulo equilátero." },
    { q: "Para trazar paralelas se desliza…", o: ["la escuadra sobre el cartabón fijo", "el compás", "el transportador"], a: 0, e: "El cartabón hace de guía." },
    { q: "La mediatriz pasa por…", o: ["el punto medio del segmento", "un extremo", "el vértice"], a: 0, e: "Y es perpendicular." },
    { q: "Los puntos de la mediatriz están…", o: ["a igual distancia de A y B", "más cerca de A", "sobre AB"], a: 0, e: "Equidistantes." },
    { q: "La bisectriz divide un ángulo en…", o: ["dos ángulos iguales", "tres partes", "dos rectas paralelas"], a: 0, e: "Mitades." },
    { q: "75° se obtiene con…", o: ["45° + 30°", "60° + 30°", "90° − 30°"], a: 0, e: "Escuadra y cartabón." },
    { q: "Para dividir un segmento en 7 partes iguales se usa…", o: ["el teorema de Tales", "la bisectriz", "el transportador"], a: 0, e: "Paralelas." },
    { q: "Con la abertura del radio, la circunferencia se divide en…", o: ["6 partes", "4 partes", "5 partes"], a: 0, e: "Base del hexágono." },
    { q: "Las líneas de construcción deben ser…", o: ["finas y no se borran", "gruesas", "borradas al final"], a: 0, e: "Muestran el proceso." },
  ]),
  examen: mezcla([
    { q: "Al trazar la mediatriz, la abertura del compás debe ser…", o: ["mayor que la mitad del segmento", "menor que la mitad", "igual a un milímetro"], a: 0, e: "Si no, los arcos no se cortan." },
    { q: "135° se obtiene con…", o: ["90° + 45°", "90° + 30°", "60° + 60°"], a: 0, e: "Recto y escuadra." },
    { q: "Si haces la bisectriz de un ángulo de 60° obtienes…", o: ["30°", "15°", "120°"], a: 0, e: "La mitad." },
  ]),
  feynman: ["Diferencia entre escuadra y cartabón", "Cómo se trazan paralelas", "Cómo se construye la mediatriz", "Cómo se construye la bisectriz", "Por qué funciona la división de un segmento con Tales"],
  mapa: mapa("TRAZADOS BÁSICOS", "var(--eso)", [
    ["Instrumentos", "escuadra · cartabón · compás", "var(--pen)"],
    ["Paralelas y perp.", "deslizar · girar", "var(--sun)"],
    ["Mediatriz y bisectriz", "arcos iguales", "var(--leaf)"],
    ["Tales", "partes iguales", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Escuadra", "Plantilla de 90°, 45° y 45°."],
    ["Cartabón", "Plantilla de 90°, 60° y 30°."],
    ["Paralelas", "Rectas que nunca se cortan."],
    ["Perpendiculares", "Rectas que forman 90°."],
    ["Mediatriz", "Perpendicular por el punto medio de un segmento."],
    ["Bisectriz", "Divide un ángulo en dos iguales."],
    ["Teorema de Tales", "Paralelas cortan segmentos proporcionales."],
    ["Compás", "Traza arcos y traslada medidas."],
  ],
  familias: ["Buscad en la calle o en casa rectas paralelas y perpendiculares (baldosas, ventanas, pasos de cebra).", "Diseñad juntos un rosetón con compás y coloreadlo.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Trazados geométricos fundamentales: paralelas, perpendiculares, mediatriz, bisectriz, operaciones con ángulos y división de segmentos (RD 217/2022, Educación Plástica, Visual y Audiovisual, geometría).",
    ideas: ["Láminas de trazados con línea auxiliar fina y resultado marcado.", "Rosetones con compás para decorar el aula.", "Comprobar construcciones en GeoGebra."],
  },
  fuentes: [RD, { t: "GeoGebra: construcciones con regla y compás", url: "https://www.geogebra.org/" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Divide un segmento de 9 cm en 4 partes iguales sin medir.", pasos: ["Traza la mediatriz del segmento: lo divide en 2.", "Traza la mediatriz de cada mitad.", "Quedan 4 partes iguales de 2,25 cm."], resultado: "4 partes iguales con dos pasos de mediatriz." },
    { enunciado: "Dibuja un ángulo de 105° con las plantillas.", pasos: ["Coloca la escuadra sobre la recta base con su ángulo de 45°.", "Apoya el cartabón a continuación con su ángulo de 60°.", "45° + 60° = 105°: traza por el lado del cartabón."], resultado: "Ángulo de 105° sin transportador." },
    { enunciado: "Divide un segmento AB de 10 cm en 3 partes iguales.", pasos: ["Desde A, semirrecta auxiliar; marca 3 segmentos iguales con el compás.", "Une el punto 3 con B.", "Paralelas por 1 y 2 hasta cortar AB."], resultado: "Tres partes de unos 3,33 cm, exactas." },
  ],
  errores: [
    "Usar el lado graduado de la escuadra o del cartabón para medir (se mide con la regla).",
    "Mover el cartabón al deslizar la escuadra: las rectas dejan de ser paralelas.",
    "Abrir el compás menos de la mitad del segmento al hacer la mediatriz.",
    "Cambiar la abertura del compás entre los dos arcos de la mediatriz o la bisectriz.",
    "Borrar las líneas auxiliares, que demuestran el trazado.",
  ],
  ejercicios: [
    { q: "Traza cinco rectas paralelas separadas 1 cm.", sol: "Respuesta práctica con escuadra y cartabón." },
    { q: "Traza una recta y tres perpendiculares a ella.", sol: "Respuesta práctica." },
    { q: "Dibuja un segmento de 7 cm y su mediatriz. Comprueba con la regla que M está en el centro.", sol: "M a 3,5 cm de cada extremo." },
    { q: "Dibuja un ángulo de 80° con transportador y traza su bisectriz. ¿Cuánto mide cada mitad?", sol: "40°." },
    { q: "Divide un ángulo recto en 4 partes iguales.", sol: "Bisectriz (45°) y bisectriz de cada mitad: 22,5°." },
    { q: "¿Cómo obtienes 120° y 15° con escuadra y cartabón?", sol: "90° + 30°; 45° − 30°." },
    { q: "Divide un segmento de 11 cm en 6 partes iguales con Tales.", sol: "Respuesta práctica: cada parte mide unos 1,83 cm." },
    { q: "Copia con compás un ángulo dibujado por un compañero.", sol: "Respuesta práctica: arco en los dos vértices y traslado de la cuerda." },
    { q: "Divide una circunferencia en 6 partes iguales con la abertura del radio.", sol: "Respuesta práctica." },
    { q: "Diseña un rosetón con arcos de circunferencia y coloréalo con dos colores complementarios.", sol: "Respuesta práctica." },
  ],
};
