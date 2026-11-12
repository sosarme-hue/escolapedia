// Música 6º de Primaria: formas musicales. Esquemas propios con letras y colores.
const { tema, L, svg, tx, t, AZ, RO, VE, NA, AM, MO } = require("./_pri6d");

const COL = { A: AZ, B: RO, C: VE, D: NA, "A'": AZ, I: MO, Co: AM };
// Fila de secciones: letras con su color, repartidas a lo ancho.
const forma = (y, letras, w = 34) => {
  const x0 = 130 - (letras.length * (w + 4) - 4) / 2;
  return letras.map((l, i) => `<rect x="${x0 + i * (w + 4)}" y="${y}" width="${w}" height="26" rx="6" fill="${COL[l] || AZ}" fill-opacity="${l.includes("'") ? 0.15 : 0.3}" stroke="${COL[l] || AZ}" stroke-width="2"/>${t(x0 + i * (w + 4) + w / 2, y + 18, l, { s: 13, d: true, c: COL[l] || AZ })}`).join("");
};

module.exports = tema({
  materia: "Música",
  titulo: "Formas musicales",
  objetivos: ["Entender qué es la forma musical y por qué la música se organiza en partes", "Reconocer la repetición, el contraste y la variación", "Identificar las formas binaria, ternaria, rondó, tema con variaciones y canon", "Representar la forma de una audición con letras y musicogramas"],
  claves: ["forma musical", "frase", "motivo", "repetición", "contraste", "variación", "forma binaria AB", "forma ternaria ABA", "rondó", "estribillo", "tema con variaciones", "canon", "musicograma"],
  pregunta: [
    "Cuando escuchas una canción de la radio, enseguida sabes cuándo vuelve el estribillo, aunque no la hayas oído antes. ¿Por qué?",
    "Porque la música tiene <mark>forma</mark>: se organiza en partes que se <b>repiten</b>, <b>contrastan</b> o <b>varían</b>. Tu cerebro reconoce los patrones, igual que reconoces el esquema de un cuento (inicio, nudo y desenlace). Los músicos nombran esas partes con letras: A, B, C…",
  ],
  bloques: [
    ["¿Qué es la forma musical?", `<p>La <mark>forma musical</mark> es la manera en que se <b>organizan las partes</b> de una obra. Igual que un texto tiene párrafos y capítulos, la música tiene <b>motivos</b> (ideas muy cortas, de pocas notas), <b>frases</b> (como una oración musical, normalmente de 4 u 8 compases) y <b>secciones</b> (grupos de frases).</p><p>Para describir la forma usamos <b>letras mayúsculas</b>: la primera sección es A; si aparece una distinta, B; luego C, y así sucesivamente. Si una sección vuelve un poco cambiada, se le pone un apóstrofo: <b>A'</b> (se lee «A prima»).</p>`,
      svg("Motivo, frase y sección: de lo más pequeño a lo más grande", `<rect x="20" y="30" width="30" height="20" rx="4" fill="${AM}" fill-opacity=".4" stroke="${AM}" stroke-width="2"/>${tx(64, 44, "motivo: pocas notas", { s: 11, a: "start", c: AM })}${[0, 1, 2, 3].map((i) => `<rect x="${20 + i * 32}" y="70" width="30" height="20" rx="4" fill="${VE}" fill-opacity=".3" stroke="${VE}" stroke-width="1.5"/>`).join("")}${tx(154, 84, "frase: 4-8 compases", { s: 11, a: "start", c: VE })}<rect x="20" y="110" width="220" height="24" rx="6" fill="${AZ}" fill-opacity=".2" stroke="${AZ}" stroke-width="2"/>${tx(130, 126, "sección A: varias frases", { s: 11, c: AZ })}${tx(130, 160, "como palabra → oración → párrafo", { s: 10.5, c: "var(--muted)" })}`)],
    ["Repetición, contraste y variación", `<p>Toda forma musical se construye con tres herramientas. La <mark>repetición</mark> hace que una idea vuelva igual: nos da seguridad y nos ayuda a recordarla. El <mark>contraste</mark> introduce algo nuevo y diferente (otra melodía, otro ritmo, otro carácter): evita el aburrimiento. La <mark>variación</mark> recupera una idea conocida, pero cambiada: más rápida, en otro instrumento, con otro ritmo o adornada.</p><p>Un buen compositor equilibra las tres. Demasiada repetición aburre; demasiado contraste desorienta. Piensa en tu serie favorita: personajes conocidos (repetición), aventuras nuevas (contraste) y personajes que evolucionan (variación).</p>`,
      L.filas("Las tres herramientas de la forma", [["repetición", "A … A: vuelve igual", AZ], ["contraste", "A … B: algo nuevo", RO], ["variación", "A … A': vuelve cambiada", VE]])],
    ["Forma binaria (AB)", `<p>La <mark>forma binaria</mark> tiene <b>dos secciones</b> diferentes: <b>A</b> y <b>B</b>. Muchas veces cada una se repite: <b>AABB</b>. Es una forma muy frecuente en las danzas antiguas y en canciones populares sencillas, donde una primera parte presenta la melodía y la segunda le «responde».</p><p>Para reconocerla, fíjate en si la música cambia a mitad y ya <b>no vuelve</b> a la primera parte. Las dos secciones suelen tener una duración parecida y muchas veces la sección B empieza en otra zona de notas, más aguda o más grave, para crear contraste.</p>`,
      svg("Forma binaria AB y AABB", `${forma(40, ["A", "B"], 60)}${tx(130, 30, "AB", { s: 12, c: "var(--muted)" })}${forma(110, ["A", "A", "B", "B"], 44)}${tx(130, 100, "AABB: cada parte se repite", { s: 11, c: "var(--muted)" })}`)],
    ["Forma ternaria (ABA)", `<p>La <mark>forma ternaria</mark> tiene <b>tres secciones</b>: <b>A</b>, una sección contrastante <b>B</b> y la <b>vuelta de A</b>. Es como un sándwich musical: el pan (A) envuelve el relleno (B). La vuelta final nos da sensación de «llegar a casa».</p><p>Si la A del final vuelve con algún cambio, escribimos <b>ABA'</b>. Esta forma es muy común en piezas cortas para piano, en arias de ópera y en muchas canciones. Es fácil de reconocer: cuando, tras una parte distinta, reaparece la melodía del principio, ¡es ternaria!</p>`,
      svg("Forma ternaria ABA como un sándwich", `${forma(36, ["A", "B", "A"], 56)}${tx(130, 26, "ABA", { s: 12, c: "var(--muted)" })}<rect x="60" y="96" width="140" height="14" rx="7" fill="${AZ}" fill-opacity=".35"/><rect x="66" y="112" width="128" height="12" rx="3" fill="${RO}" fill-opacity=".45"/><rect x="60" y="126" width="140" height="14" rx="7" fill="${AZ}" fill-opacity=".35"/>${tx(214, 107, "A", { s: 11, a: "start", c: AZ })}${tx(214, 122, "B", { s: 11, a: "start", c: RO })}${tx(214, 137, "A", { s: 11, a: "start", c: AZ })}${tx(130, 162, "un sándwich musical", { s: 11, c: "var(--muted)" })}`)],
    ["El rondó (ABACA…)", `<p>En el <mark>rondó</mark> una sección principal, el <b>estribillo</b> (A), vuelve una y otra vez, y entre sus apariciones suenan secciones distintas llamadas <b>coplas</b> o episodios (B, C, D…). El esquema típico es <b>ABACA</b> o <b>ABACABA</b>.</p><p>El nombre viene de «ronda», porque la música «da vueltas» y siempre regresa al mismo punto. Un ejemplo famoso para piano es el <b>Rondó alla turca</b> de Mozart, con un estribillo enérgico muy fácil de reconocer. Muchas canciones actuales siguen una idea parecida: estrofas distintas y un estribillo que se repite.</p>`,
      svg("Rondó ABACA: el estribillo A vuelve entre coplas distintas", `${forma(60, ["A", "B", "A", "C", "A"], 40)}${tx(130, 40, "estribillo A + coplas B, C", { s: 11, c: "var(--muted)" })}<path d="M57 98 Q 98 130 140 98 Q 182 130 223 98" fill="none" stroke="${AZ}" stroke-width="2" stroke-dasharray="4 3"/>${tx(130, 148, "A siempre vuelve: da la «ronda»", { s: 11, c: AZ })}`), "mu5b"],
    ["Tema con variaciones", `<p>En el <mark>tema con variaciones</mark> se presenta primero una melodía sencilla, el <b>tema</b> (A), y después se repite varias veces transformada: <b>A', A'', A'''…</b> Cada variación cambia algo y mantiene algo, para que sigamos reconociendo el tema.</p><p>Se puede variar el <b>ritmo</b> (más notas, notas más cortas), el <b>tempo</b> (más rápido o lento), el <b>modo</b> (de alegre a triste), el <b>instrumento</b> o la <b>intensidad</b>, o añadir <b>adornos</b>. Es un juego de imaginación: ¿de cuántas formas distintas puedes presentar la misma idea? Mozart compuso unas variaciones muy conocidas sobre una melodía popular francesa.</p>`,
      svg("Tema A y tres variaciones que cambian el ritmo, el modo y el instrumento", `${forma(36, ["A", "A'", "A'", "A'"], 46)}${[["ritmo", 0], ["modo", 1], ["instrumento", 2]].map(([n, i]) => `${tx(105 + i * 50, 84, n, { s: 9.5, c: VE })}`).join("")}${tx(55, 84, "tema", { s: 9.5, c: AZ })}${tx(130, 120, "algo cambia, algo se mantiene", { s: 11, c: "var(--muted)" })}<path d="M40 136 H 220" stroke="${VE}" stroke-width="2"/><path d="M214 131 l 7 5 l -7 5" fill="none" stroke="${VE}" stroke-width="2"/>`)],
    ["El canon y otras formas", `<p>Ya conoces el <mark>canon</mark>: varias voces interpretan la misma melodía entrando una detrás de otra. Es una <b>forma por imitación</b>. Si la imitación es más libre y compleja, se llama <b>fuga</b>; Bach fue un maestro de este tipo de obras.</p><p>Las piezas grandes combinan formas. Una <b>sinfonía</b> suele tener cuatro <b>movimientos</b> (partes con tempos distintos: rápido, lento, danza y rápido), y cada uno tiene su propia forma. En una <b>canción</b> actual encontramos: introducción, estrofa, estribillo, a veces un <b>puente</b> distinto y un final o <b>coda</b>.</p>`,
      svg("Estructura habitual de una canción actual", `${[["intro", MO, 32], ["estrofa", AZ, 46], ["estribillo", AM, 54], ["estrofa", AZ, 46], ["estribillo", AM, 54]].reduce((a, [n, c, w]) => ({ x: a.x + w + 3, s: a.s + `<rect x="${a.x}" y="50" width="${w}" height="26" rx="5" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="1.5"/>${tx(a.x + w / 2, 67, n, { s: 9, c })}` }), { x: 8, s: "" }).s}${[["puente", VE, 60], ["estribillo", AM, 60], ["coda", RO, 46]].reduce((a, [n, c, w]) => ({ x: a.x + w + 4, s: a.s + `<rect x="${a.x}" y="100" width="${w}" height="26" rx="5" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="1.5"/>${tx(a.x + w / 2, 117, n, { s: 9.5, c })}` }), { x: 44, s: "" }).s}${tx(130, 30, "forma de una canción pop", { s: 11, c: "var(--muted)" })}${tx(130, 156, "el estribillo es lo que más se recuerda", { s: 10.5, c: AM })}`)],
    ["El musicograma", `<p>Un <mark>musicograma</mark> es una partitura hecha con <b>dibujos, colores y símbolos</b> que nos ayuda a seguir una audición aunque no sepamos leer notas. Cada sección tiene su color o su dibujo (por ejemplo, A = círculos azules, B = triángulos rojos), y el tamaño o la altura de los dibujos representan la intensidad o la altura del sonido.</p><p>Se lee de izquierda a derecha, como un texto, mientras suena la música. Seguir un musicograma con el dedo ayuda a descubrir la forma de la obra: cuántas secciones hay, cuáles se repiten y dónde está el contraste.</p>`,
      svg("Musicograma inventado de una pieza ABA", `${[0, 1, 2, 3].map((i) => `<circle cx="${24 + i * 18}" cy="${70 - (i % 2) * 10}" r="${6 + i}" fill="${AZ}" fill-opacity=".45"/>`).join("")}${[0, 1, 2, 3].map((i) => `<path d="M${102 + i * 18} 86 l 8 -${16 + i * 4} l 8 ${16 + i * 4} z" fill="${RO}" fill-opacity=".45"/>`).join("")}${[0, 1, 2, 3].map((i) => `<circle cx="${184 + i * 18}" cy="${70 - (i % 2) * 10}" r="${6 + i}" fill="${AZ}" fill-opacity=".45"/>`).join("")}${t(50, 120, "A", { s: 14, d: true, c: AZ })}${t(136, 120, "B", { s: 14, d: true, c: RO })}${t(212, 120, "A", { s: 14, d: true, c: AZ })}<path d="M20 140 H 236" stroke="var(--muted)" stroke-width="1.5"/><path d="M230 135 l 7 5 l -7 5" fill="none" stroke="var(--muted)" stroke-width="1.5"/>${tx(130, 160, "se lee de izquierda a derecha", { s: 10.5, c: "var(--muted)" })}`)],
    ["Taller: compón un rondó de clase", `<p>Vamos a crear un rondó colectivo. Entre todos inventáis un <b>estribillo A</b> rítmico de cuatro compases con palmas, pies y chasquidos, fácil de recordar. Después, varios grupos preparan cada uno una <b>copla</b> distinta (B, C, D) con instrumentos de percusión, voces o la flauta.</p><p>La interpretación sigue el esquema <b>A B A C A D A</b>: toda la clase toca el estribillo y cada grupo, su copla. Para terminar, dibujad el <b>musicograma</b> de vuestro rondó en un papel continuo, con un color y un símbolo distinto para cada sección.</p>`,
      svg("Esquema del rondó de clase ABACADA", `${forma(54, ["A", "B", "A", "C", "A", "D", "A"], 30)}${tx(130, 40, "toda la clase: A · cada grupo: B, C, D", { s: 10.5, c: "var(--muted)" })}${tx(130, 112, "A = palmas, pies, chasquidos", { s: 11, c: AZ })}${tx(130, 132, "coplas = instrumentos o voces", { s: 11, c: RO })}`)],
  ],
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    ["Una pieza suena: melodía 1, melodía 2, melodía 1. ¿Qué forma tiene?", ["Melodía 1 = A, melodía 2 = B.", "Vuelve A al final."], "Ternaria ABA."],
    ["Escribe un rondó con tres coplas.", ["El estribillo A vuelve entre cada copla."], "A B A C A D A."],
    ["La melodía vuelve más rápida y en otro instrumento. ¿Cómo la llamamos?", ["Es la misma idea, pero cambiada.", "Se marca con apóstrofo."], "A' (variación)."],
  ],
  errores: [
    "Poner una letra nueva a una sección que es una repetición.",
    "Confundir forma binaria (AB) con ternaria (ABA).",
    "Pensar que en el rondó las coplas se repiten igual que el estribillo.",
    "Creer que una variación es una melodía totalmente nueva.",
    "Leer el musicograma sin seguir el orden de izquierda a derecha.",
  ],
  ejercicios: [
    ["¿Qué es la forma musical?", "La manera en que se organizan las partes de una obra."],
    ["Ordena de menor a mayor: frase, motivo, sección.", "Motivo, frase, sección."],
    ["¿Qué tres herramientas construyen la forma?", "Repetición, contraste y variación."],
    ["Escribe el esquema de la forma binaria con repeticiones.", "AABB."],
    ["¿Por qué decimos que la forma ternaria es como un sándwich?", "Porque A envuelve a B: ABA."],
    ["¿Cómo se llama la sección que se repite en el rondó?", "Estribillo."],
    ["¿Qué significa A'?", "Que la sección A vuelve con cambios."],
    ["Nombra tres cosas que se pueden cambiar en una variación.", "El ritmo, el tempo, el modo (o el instrumento, la intensidad, los adornos)."],
    ["¿Qué es un musicograma?", "Una partitura con dibujos y colores para seguir una audición."],
    ["Escribe las partes de una canción actual.", "Introducción, estrofa, estribillo, puente y coda."],
  ],
  figura: ["Las formas musicales", L.columnas("Principales formas musicales", [["AB", "BINARIA", ["dos partes", "AABB"], AZ], ["ABA", "TERNARIA", ["vuelve A", "sándwich"], VE], ["ABACA", "RONDÓ", ["estribillo", "y coplas"], RO], ["A A' A''", "VARIACIONES", ["mismo tema", "cambiado"], NA]])],
  video: "mu5v",
  quiz: [
    ["La forma musical es…", ["la organización de las partes", "el volumen", "el instrumento"], "Forma."],
    ["Una idea musical muy corta es un…", ["motivo", "movimiento", "rondó"], "Motivo."],
    ["La forma ABA se llama…", ["ternaria", "binaria", "rondó"], "Tres secciones."],
    ["La forma AB se llama…", ["binaria", "ternaria", "canon"], "Dos."],
    ["En el rondó, la sección que vuelve es el…", ["estribillo", "puente", "motivo"], "A."],
    ["A' significa…", ["A con cambios", "una sección nueva", "silencio"], "Prima."],
    ["Introducir algo nuevo y diferente es…", ["contraste", "repetición", "variación"], "B."],
    ["Un musicograma usa…", ["dibujos y colores", "solo notas", "solo letras"], "Visual."],
    ["El esquema ABACA corresponde a…", ["un rondó", "una binaria", "un canon"], "Rondó."],
    ["Una forma por imitación es el…", ["canon", "rondó", "puente"], "Imitación."],
  ],
  examen: [
    ["En el tema con variaciones, el tema…", ["se repite transformado", "no vuelve nunca", "solo suena al final"], "Variaciones."],
    ["Una sinfonía suele tener…", ["cuatro movimientos", "una sola parte", "diez estribillos"], "Cuatro."],
    ["La parte distinta que aparece en algunas canciones antes del último estribillo es el…", ["puente", "motivo", "concertino"], "Puente."],
    ["El Rondó alla turca es de…", ["Mozart", "Bach", "Vivaldi"], "Mozart."],
  ],
  feynman: ["Qué es la forma y cómo se nombra con letras", "Repetición, contraste y variación", "Diferencias entre binaria, ternaria y rondó", "Cómo se sigue un musicograma"],
  mapa: ["FORMAS MUSICALES", "var(--bac)", [["Herramientas", "repetición · contraste · variación", AZ], ["Binaria y ternaria", "AB · ABA", VE], ["Rondó", "A B A C A", RO], ["Variaciones", "A A' A'' · canon", NA]], 240],
  tarjetas: [
    ["Forma musical", "Organización de las partes de una obra."],
    ["Motivo", "Idea musical muy corta."],
    ["Frase", "Oración musical de 4 u 8 compases."],
    ["Binaria", "Forma AB."],
    ["Ternaria", "Forma ABA."],
    ["Rondó", "Estribillo que vuelve entre coplas: ABACA."],
    ["Variación", "Idea conocida que vuelve cambiada: A'."],
    ["Musicograma", "Partitura con dibujos para seguir una audición."],
  ],
  familias: ["Escuchad juntos una canción que os guste y descubrid su forma con letras: ¿dónde está el estribillo?", "Dibujad en familia un musicograma sencillo de una pieza corta."],
  saberes: "La forma musical: motivo, frase y sección; repetición, contraste y variación; formas binaria, ternaria, rondó, tema con variaciones y canon; musicogramas",
  ideas: ["Rondó colectivo con percusión corporal.", "Análisis de la forma de canciones actuales con letras de colores.", "Musicograma gigante en papel continuo."],
  fuentes: [["Real Academia Española: rondó", "https://dle.rae.es/rondó"], ["Real Academia Española: canon", "https://dle.rae.es/canon"]],
});
