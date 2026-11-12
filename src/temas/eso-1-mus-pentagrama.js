// Música 1º ESO: el lenguaje musical, pentagrama y notas. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, penta, mezcla, vb, vg } = require("./_eso1c");

// Clave de sol esquemática centrada en la 2.ª línea (y2) de un pentagrama con separación g.
const claveSol = (x, y2, g, c = "var(--ink)") => `<path d="M${x + 2} ${y2 + g * 3.2} C ${x - 4} ${y2 + g * 3.8} ${x - 8} ${y2 + g * 2.6} ${x} ${y2 + g * 2.4} M${x + 3} ${y2 + g * 3.4} L ${x + 3} ${y2 - g * 3.2} C ${x + 3} ${y2 - g * 4.4} ${x + 12} ${y2 - g * 3.6} ${x + 8} ${y2 - g * 2.2} C ${x + 2} ${y2 - g * 0.8} ${x - 8} ${y2 + g * 0.4} ${x - 6} ${y2 + g * 1.4} C ${x - 4} ${y2 + g * 2.6} ${x + 10} ${y2 + g * 2.4} ${x + 10} ${y2 + g * 1.2} C ${x + 10} ${y2} ${x} ${y2 - g * 0.2} ${x - 1} ${y2 + g * 0.8}" fill="none" stroke="${c}" stroke-width="2.2"/>`;

const NOMBRES = ["do", "re", "mi", "fa", "sol", "la", "si", "do"];

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "El lenguaje musical: pentagrama y notas",
  minutos: 50,
  objetivos: ["Conocer el pentagrama, sus líneas y espacios", "Leer las notas en clave de sol", "Usar líneas adicionales y conocer la clave de fa", "Relacionar las notas del pentagrama con el teclado y la flauta"],
  claves: ["pentagrama", "clave de sol", "notas", "líneas adicionales", "escala", "octava"],
  pregunta: {
    texto: "Un músico de Japón y otro de Argentina no hablan el mismo idioma, pero pueden tocar juntos la misma partitura. ¿Cómo es posible?",
    respuesta: "Porque la <b>escritura musical</b> es un lenguaje universal. El <b>pentagrama</b> indica la altura de cada nota, las <b>figuras</b> su duración y otros signos el volumen y la velocidad. <mark>Quien sabe leer música puede interpretar una partitura escrita en cualquier lugar del mundo</mark>, aunque los nombres de las notas cambien de un idioma a otro.",
  },
  bloques: [
    {
      html: `<h3>Por qué escribimos la música</h3><p>Durante miles de años la música se transmitió <b>de oído</b>, de generación en generación. Pero así se perdían o cambiaban muchas melodías. Para conservarlas se inventó la <b>notación musical</b>.</p><ul><li>Los antiguos griegos usaban letras sobre el texto.</li><li>En la Edad Media aparecieron los <b>neumas</b>, pequeños signos sobre la letra de los cantos.</li><li>Hacia el año 1000, el monje <b>Guido d'Arezzo</b> ordenó las notas sobre líneas y les puso nombre a partir de las sílabas iniciales de un himno latino: <i>ut, re, mi, fa, sol, la</i>. Más tarde <i>ut</i> pasó a llamarse <b>do</b> y se añadió <b>si</b>.</li></ul><p>Hoy usamos el sistema de <b>pentagrama</b>, que se fijó hacia el siglo XVII.</p>`,
    },
    {
      html: `<h3>El pentagrama</h3><p>El <b>pentagrama</b> es un conjunto de <b>cinco líneas horizontales y paralelas</b> y los <b>cuatro espacios</b> que quedan entre ellas. Sobre él se colocan las notas.</p><ul><li>Las líneas y los espacios se cuentan <b>de abajo arriba</b>: la 1.ª línea es la de abajo.</li><li>Cuanto <b>más arriba</b> está una nota, más <b>aguda</b> es; cuanto más abajo, más <b>grave</b>.</li><li>Las notas se colocan <b>en</b> una línea (la línea las atraviesa por el centro) o <b>en</b> un espacio (entre dos líneas).</li></ul><p>Así, el pentagrama funciona como una escalera: cada línea y cada espacio es un escalón.</p>`,
      svg: (() => { const p = penta(30, 170, 50, 16); return svg("Pentagrama con las cinco líneas numeradas de abajo arriba y los cuatro espacios", `${p.s}${[1, 2, 3, 4, 5].map((n) => t(22, p.Y((n - 1) * 2) + 4, String(n), { s: 11, c: "var(--pen)", a: "end" })).join("")}${[1, 2, 3, 4].map((n) => t(178, p.Y(n * 2 - 1) + 4, `${n}.º espacio`, { s: 10, c: "var(--leaf)", a: "start" })).join("")}${t(100, 30, "5 líneas · 4 espacios", { s: 11 })}${t(130, 140, "se cuentan de abajo arriba", { s: 10, c: "var(--muted)" })}`, 160); })(),
    },
    {
      html: `<h3>Las siete notas</h3><p>En España y en los países latinos las notas se llaman <b>do, re, mi, fa, sol, la, si</b>. Después de <i>si</i> vuelve a empezar <i>do</i>, más agudo: la distancia entre un do y el siguiente se llama <b>octava</b>.</p>${tabla(["Latino", "do", "re", "mi", "fa", "sol", "la", "si"], [["Inglés y alemán", "C", "D", "E", "F", "G", "A", "B (H en alemán)"]])}<p>El sistema de letras se usa en los acordes de guitarra y en la música moderna: si ves «Am» es <b>la menor</b> y «G» es <b>sol</b>.</p><p>Las notas ordenadas de grave a agudo forman una <b>escala</b>. La escala de do es la que se toca con las teclas blancas del piano empezando en do.</p>`,
      video: vb("penB2"),
    },
    {
      html: `<h3>La clave de sol</h3><p>El pentagrama solo no dice qué nota es cada línea. Para eso se pone al principio una <b>clave</b>, que da nombre a una línea y, a partir de ella, a todas las demás.</p><p>La <b>clave de sol</b> es la más usada: se dibuja empezando en la <b>2.ª línea</b>, y esa línea pasa a llamarse <b>sol</b>. Desde ahí:</p><ul><li><b>Líneas</b> (de abajo arriba): <b>mi, sol, si, re, fa</b>.</li><li><b>Espacios</b> (de abajo arriba): <b>fa, la, do, mi</b>.</li></ul><p>Truco para recordar los espacios: forman la palabra «<b>FA-LA-DO-MI</b>». La usan la flauta, el violín, la voz aguda y la mano derecha del piano.</p>`,
      svg: (() => { const p = penta(14, 248, 46, 12); const ns = [0, 1, 2, 3, 4, 5, 6, 7, 8]; const nom = ["mi", "fa", "sol", "la", "si", "do", "re", "mi", "fa"]; return svg("Clave de sol en la segunda línea y las notas de mi a fa en líneas y espacios", `${p.s}${claveSol(30, p.Y(2), 12)}${ns.map((n, i) => p.nota(64 + i * 21, n, { plica: false, c: n % 2 ? "var(--leaf)" : "var(--pen)" })).join("")}${ns.map((n, i) => t(64 + i * 21, 132, nom[i], { s: 10, c: n % 2 ? "var(--leaf)" : "var(--pen)" })).join("")}${t(130, 160, "líneas en azul · espacios en verde", { s: 10, c: "var(--muted)" })}${t(30, 26, "clave de sol", { s: 9, c: "var(--muted)", a: "start" })}`); })(),
      video: vb("penB"),
    },
    {
      html: `<h3>Líneas adicionales</h3><p>Muchas melodías bajan o suben más allá del pentagrama. Para escribir esas notas se añaden pequeñas <b>líneas adicionales</b>, cortas, solo donde está la nota.</p><ul><li>El <b>do central</b> (el do del centro del piano, el más grave de la flauta dulce) se escribe en la <b>1.ª línea adicional inferior</b>.</li><li>El <b>re</b> está justo debajo de la 1.ª línea, en el espacio.</li><li>Por arriba, después del <b>fa</b> de la 5.ª línea vienen el <b>sol</b> (espacio de encima) y el <b>la</b> (1.ª línea adicional superior).</li></ul><p>Así, la escala de do central queda: <b>do</b> (línea adicional), <b>re</b>, <b>mi</b> (1.ª línea), <b>fa</b>, <b>sol</b>, <b>la</b>, <b>si</b> (3.ª línea) y <b>do</b> (3.er espacio).</p>`,
      svg: (() => { const p = penta(14, 248, 40, 12); const pasos = [-2, -1, 0, 1, 2, 3, 4, 5]; return svg("Escala de do en clave de sol: do en línea adicional, re, mi, fa, sol, la, si y do agudo", `${p.s}${claveSol(30, p.Y(2), 12)}${pasos.map((n, i) => p.nota(70 + i * 23, n, { plica: false, c: i === 0 ? "var(--red)" : "var(--ink)" })).join("")}${pasos.map((n, i) => t(70 + i * 23, 128, NOMBRES[i], { s: 10, c: i === 0 ? "var(--red)" : "var(--ink)" })).join("")}${t(70, 152, "do central", { s: 10, c: "var(--red)" })}${t(170, 160, "escala de do: teclas blancas", { s: 10, c: "var(--muted)" })}`); })(),
    },
    {
      html: `<h3>La clave de fa</h3><p>Los instrumentos graves (violonchelo, contrabajo, fagot, tuba, mano izquierda del piano) y las voces graves usan la <b>clave de fa en 4.ª línea</b>. Se dibuja como una «C» girada con dos puntos a los lados de la <b>4.ª línea</b>, que pasa a llamarse <b>fa</b>.</p><ul><li>Líneas: <b>sol, si, re, fa, la</b>.</li><li>Espacios: <b>la, do, mi, sol</b>.</li></ul><p>El <b>do central</b> se escribe en clave de fa en la 1.ª línea adicional <b>superior</b>. Por eso el piano usa dos pentagramas unidos por una llave (<b>sistema</b>): arriba en clave de sol y abajo en clave de fa, y el do central queda justo entre los dos.</p><p>Existe también la <b>clave de do</b>, que usan la viola y algunos instrumentos.</p>`,
    },
    {
      html: `<h3>Del pentagrama al instrumento</h3><p>Leer notas sirve para tocar. Relacionarlas con un instrumento ayuda a memorizarlas:</p>${tabla(["Nota (clave de sol)", "Lugar en el pentagrama", "Teclado", "Flauta dulce (dedos tapados)"], [["Si", "3.ª línea", "tecla blanca a la izquierda del do", "pulgar + 1"], ["La", "2.º espacio", "a la izquierda del si", "pulgar + 1 + 2"], ["Sol", "2.ª línea", "a la izquierda del la", "pulgar + 1 + 2 + 3"], ["Do agudo", "3.er espacio", "a la derecha del si", "pulgar + 2"]])}<p>En el teclado, el <b>do</b> es siempre la tecla blanca que está justo <b>a la izquierda del grupo de dos teclas negras</b>. Encontrado el do, las demás teclas blancas siguen el orden de la escala.</p>`,
      svg: svg("Teclado de una octava con las teclas blancas do, re, mi, fa, sol, la, si y las teclas negras en grupos de dos y tres", `${NOMBRES.map((n, i) => `<rect x="${18 + i * 28}" y="34" width="28" height="110" rx="3" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.6"/>${t(32 + i * 28, 132, n, { s: 10, c: i === 0 || i === 7 ? "var(--red)" : "var(--ink)" })}`).join("")}${[1, 2, 4, 5, 6].map((i) => `<rect x="${18 + i * 28 - 9}" y="34" width="18" height="66" rx="2" fill="var(--ink)"/>`).join("")}${t(130, 22, "el do está a la izquierda de las dos negras", { s: 10, c: "var(--red)" })}`, 160),
    },
    {
      html: `<h3>Cómo leer notas con soltura</h3><p>Leer notas es como leer letras: al principio se va despacio y con práctica se hace automático.</p><ol><li>Aprende primero unas <b>notas guía</b>: sol (2.ª línea), do central (línea adicional) y do agudo (3.er espacio).</li><li>Lee las demás contando <b>pasos</b> desde la nota guía más cercana: línea, espacio, línea…</li><li>Fíjate en la <b>dirección</b>: si la melodía sube, baja o repite.</li><li>Practica <b>dos minutos al día</b> con tarjetas o aplicaciones de lectura.</li></ol><p>Juego: un compañero escribe palabras usando solo notas (por ejemplo «sol-la», «re-mi», «fa-la-do») y el otro las lee en el pentagrama.</p>`,
    },
  ],
  figura: {
    titulo: "Pentagrama y notas en un vistazo",
    svg: filas("Resumen: pentagrama de cinco líneas y cuatro espacios; siete notas; clave de sol en segunda línea; líneas mi sol si re fa; espacios fa la do mi; líneas adicionales; clave de fa", [["Pentagrama", "5 líneas · 4 espacios", "var(--ink)"], ["Notas", "do re mi fa sol la si", "var(--pen)"], ["Clave de sol", "2.ª línea = sol", "var(--red)"], ["Líneas", "mi · sol · si · re · fa", "var(--pen)"], ["Espacios", "FA · LA · DO · MI", "var(--leaf)"], ["Clave de fa", "4.ª línea = fa · graves", "var(--sun)"]], 200),
  },
  video: vg("penV"),
  quiz: mezcla([
    { q: "El pentagrama tiene…", o: ["5 líneas y 4 espacios", "4 líneas y 5 espacios", "5 líneas y 5 espacios"], a: 0, e: "Penta = cinco." },
    { q: "Las líneas se cuentan…", o: ["de abajo arriba", "de arriba abajo", "de izquierda a derecha"], a: 0, e: "La 1.ª es la de abajo." },
    { q: "La clave de sol da nombre a la…", o: ["2.ª línea", "1.ª línea", "4.ª línea"], a: 0, e: "Empieza a dibujarse en ella." },
    { q: "En clave de sol, la 3.ª línea es…", o: ["si", "la", "do"], a: 0, e: "mi, sol, SI." },
    { q: "Los espacios en clave de sol forman…", o: ["fa, la, do, mi", "mi, sol, si, re", "do, re, mi, fa"], a: 0, e: "FA-LA-DO-MI." },
    { q: "El do central se escribe en clave de sol…", o: ["en la 1.ª línea adicional inferior", "en la 1.ª línea", "en el 3.er espacio"], a: 0, e: "Debajo del pentagrama." },
    { q: "La distancia de un do al siguiente do es una…", o: ["octava", "escala", "clave"], a: 0, e: "Ocho notas." },
    { q: "En el sistema inglés, «G» es…", o: ["sol", "la", "do"], a: 0, e: "C D E F G." },
    { q: "La clave de fa la usan instrumentos…", o: ["graves", "agudos", "de percusión"], a: 0, e: "Violonchelo, tuba…" },
    { q: "Quién dio nombre a las notas hacia el año 1000:", o: ["Guido d'Arezzo", "Mozart", "Pitágoras"], a: 0, e: "Ut, re, mi…" },
  ]),
  examen: mezcla([
    { q: "Una nota en el 4.º espacio en clave de sol es…", o: ["mi", "re", "fa"], a: 0, e: "FA-LA-DO-MI." },
    { q: "En el teclado, el do está…", o: ["a la izquierda del grupo de dos negras", "a la derecha de tres negras", "en una tecla negra"], a: 0, e: "Referencia visual." },
    { q: "Cuanto más arriba está una nota en el pentagrama…", o: ["más aguda", "más larga", "más fuerte"], a: 0, e: "Altura." },
  ]),
  feynman: ["Para qué sirve escribir la música", "Qué es el pentagrama y cómo se cuentan líneas y espacios", "Qué hace la clave de sol", "Cómo se escriben las notas fuera del pentagrama", "Cómo encontrar el do en un teclado"],
  mapa: mapa("PENTAGRAMA Y NOTAS", "var(--eso)", [
    ["Pentagrama", "5 líneas · 4 espacios", "var(--ink)"],
    ["Notas", "do re mi fa sol la si", "var(--pen)"],
    ["Claves", "sol (2.ª) · fa (4.ª)", "var(--red)"],
    ["Adicionales", "do central", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Pentagrama", "Cinco líneas y cuatro espacios donde se escriben las notas."],
    ["Clave de sol", "Da a la 2.ª línea el nombre de sol."],
    ["Líneas en clave de sol", "Mi, sol, si, re, fa."],
    ["Espacios en clave de sol", "Fa, la, do, mi."],
    ["Línea adicional", "Línea corta para notas fuera del pentagrama."],
    ["Do central", "1.ª línea adicional inferior en clave de sol."],
    ["Octava", "Distancia entre una nota y la siguiente del mismo nombre."],
    ["Clave de fa", "Da a la 4.ª línea el nombre de fa; para sonidos graves."],
  ],
  familias: ["Escribid el nombre de cada miembro de la familia con notas (las letras que existan como nota).", "Buscad el do en cualquier teclado o aplicación de piano.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje musical: pentagrama, claves de sol y fa, notas, líneas adicionales y escala; lectura y escritura musical; relación con la práctica instrumental (RD 217/2022, Música, interpretación y creación).",
    ideas: ["Pentagrama gigante en el suelo con cinta: los alumnos se colocan como notas.", "Dictado de notas con la flauta: si, la, sol.", "Juego de palabras musicales (fa-la-do, re-mi, sol-la)."],
  },
  fuentes: [RD, { t: "Real Conservatorio Superior de Música de Madrid", url: "https://rcsmm.eu/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Nombra la nota escrita en la 4.ª línea en clave de sol.", pasos: ["Las líneas, de abajo arriba, son: mi, sol, si, re, fa.", "La 4.ª es la penúltima."], resultado: "Re." },
    { enunciado: "¿Dónde se escribe el la en clave de sol?", pasos: ["Sol está en la 2.ª línea.", "La siguiente nota hacia arriba ocupa el espacio que hay encima.", "Ese es el 2.º espacio."], resultado: "En el 2.º espacio." },
    { enunciado: "Lee esta melodía: 2.ª línea, 2.º espacio, 3.ª línea, 2.º espacio, 2.ª línea.", pasos: ["2.ª línea = sol.", "2.º espacio = la.", "3.ª línea = si."], resultado: "Sol, la, si, la, sol (sube y vuelve a bajar)." },
  ],
  errores: [
    "Contar las líneas de arriba abajo.",
    "Confundir nota en línea con nota en espacio cuando la cabeza está mal dibujada.",
    "Creer que las líneas adicionales son una sexta línea fija del pentagrama.",
    "Pensar que todas las claves dan los mismos nombres a las líneas.",
    "Confundir el do central con el do del 3.er espacio.",
  ],
  ejercicios: [
    { q: "Escribe los nombres de las líneas y los espacios en clave de sol.", sol: "Líneas: mi, sol, si, re, fa. Espacios: fa, la, do, mi." },
    { q: "¿Qué nota está en la 1.ª línea? ¿Y en el 3.er espacio?", sol: "Mi; do." },
    { q: "Escribe la escala de do ascendente con sus posiciones.", sol: "Do (1.ª adicional), re (debajo de 1.ª línea), mi (1.ª l.), fa (1.er esp.), sol (2.ª l.), la (2.º esp.), si (3.ª l.), do (3.er esp.)." },
    { q: "¿Qué nota sigue al si? ¿Y la anterior al do?", sol: "Do; si." },
    { q: "Escribe en sistema inglés: do, mi, sol.", sol: "C, E, G." },
    { q: "Lee: 1.er espacio, 2.º espacio, 3.er espacio, 4.º espacio.", sol: "Fa, la, do, mi." },
    { q: "¿Para qué sirve la clave de fa? Nombra dos instrumentos que la usen.", sol: "Para escribir sonidos graves; violonchelo, tuba, contrabajo, fagot." },
    { q: "Explica cómo localizar un do en el piano.", sol: "Es la tecla blanca a la izquierda del grupo de dos teclas negras." },
    { q: "Escribe tres palabras con nombres de notas.", sol: "Respuesta orientativa: «sola» (sol-la), «remi», «fado» (fa-do)." },
    { q: "Inventa una melodía de cinco notas con sol, la y si y escríbela en el pentagrama.", sol: "Respuesta abierta." },
  ],
};
