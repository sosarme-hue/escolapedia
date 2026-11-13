// Música 5º de Primaria: formas musicales sencillas. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM, MO } = require("./_pri5d");

// Esquema de forma: secciones [[letra, color, ancho?]] en fila, con título.
const forma = (label, titulo, secs, o = {}) => {
  const tot = secs.reduce((a, s) => a + (s[2] || 1), 0), W = 228 / tot;
  let x = 16;
  const s = secs.map(([l, c, w = 1]) => { const r = `<rect x="${x + 2}" y="${o.y || 66}" width="${W * w - 4}" height="44" rx="8" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>${tx(x + (W * w) / 2, (o.y || 66) + 29, l, { s: l.length > 3 ? 10.5 : 17, c })}`; x += W * w; return r; }).join("");
  return svg(label, `${tx(130, 34, titulo, { s: 12 })}${s}${o.extra || ""}`, o.h || 160);
};
const C = { A: AZ, B: RO, C: VE, D: NA };
const fila = (cad) => [...cad].map((l) => [l === "'" ? "A'" : l, C[l] || AM]);

module.exports = tema({
  materia: "Música",
  titulo: "Formas musicales sencillas",
  objetivos: ["Comprender qué es la forma musical y por qué se usan letras para representarla", "Reconocer la forma binaria, la ternaria y el rondó", "Identificar estrofa y estribillo, el canon y el tema con variaciones", "Seguir y crear musicogramas"],
  claves: ["forma musical", "frase", "sección", "repetición", "contraste", "variación", "forma binaria", "forma ternaria", "rondó", "estribillo", "estrofa", "canon", "tema con variaciones", "musicograma"],
  pregunta: [
    "¿Por qué casi todas las canciones tienen un estribillo que se repite?",
    "Porque a nuestro oído le gusta <mark>reconocer</mark> lo que ya ha escuchado, pero también le gustan las <mark>sorpresas</mark>. Los compositores organizan la música combinando <b>repetición</b> (vuelve algo conocido), <b>contraste</b> (aparece algo nuevo) y <b>variación</b> (algo conocido, pero cambiado). Esa organización es la <b>forma musical</b>, y se escribe con letras: A, B, C… Una canción con estrofas y estribillo es una de las formas más sencillas.",
  ],
  bloques: [
    ["La forma: cómo se organiza la música", `<p>Igual que un cuento tiene principio, nudo y desenlace, la música tiene una estructura llamada <mark>forma musical</mark>. Las obras se dividen en <b>secciones</b>, y estas en <b>frases</b>, como un texto se divide en párrafos y oraciones.</p><p>Para representar la forma se usan <b>letras mayúsculas</b>. La primera sección es <b>A</b>; si aparece una música distinta, es <b>B</b>; otra diferente, <b>C</b>. Si vuelve la primera, se escribe otra vez <b>A</b>. Y si vuelve, pero algo cambiada, se escribe <b>A'</b> (A prima).</p>`,
      L.filas("Las letras de la forma", [["A", "la primera música", AZ], ["B", "una música distinta", RO], ["A otra vez", "vuelve la primera", AZ], ["A'", "vuelve, pero cambiada", NA]])],
    ["Repetición, contraste y variación", `<p>Toda forma musical se construye con tres herramientas. La <mark>repetición</mark> da unidad: nos ayuda a recordar y a sentirnos «en casa». El <mark>contraste</mark> da interés: una sección nueva puede cambiar la melodía, el ritmo, el tempo, los matices o los instrumentos.</p><p>La <mark>variación</mark> está a medio camino: repite algo conocido, pero cambiado. Por ejemplo, la misma melodía más rápida, en otro instrumento o con notas de adorno. Una obra con solo repetición aburre; una con solo contraste, despista. ¡El equilibrio es la clave!</p>`,
      svg("Repetición, contraste y variación con figuras", `${[["repetición", ["c", "c", "c"], AZ], ["contraste", ["c", "t", "s"], RO], ["variación", ["c", "c2", "c3"], VE]].map(([n, fs, c], i) => { const y = 40 + i * 46; return `${tx(16, y + 4, n, { s: 10.5, a: "start", c })}${fs.map((f, k) => { const x = 128 + k * 44; return f === "c" ? `<circle cx="${x}" cy="${y}" r="13" fill="${c}" fill-opacity=".45"/>` : f === "t" ? `<path d="M${x} ${y - 14} L ${x + 14} ${y + 12} H ${x - 14} Z" fill="${NA}" fill-opacity=".55"/>` : f === "s" ? `<rect x="${x - 12}" y="${y - 12}" width="24" height="24" fill="${MO}" fill-opacity=".5"/>` : f === "c2" ? `<circle cx="${x}" cy="${y}" r="13" fill="${c}" fill-opacity=".45" stroke="${c}" stroke-width="3" stroke-dasharray="4 3"/>` : `<circle cx="${x}" cy="${y}" r="9" fill="${c}" fill-opacity=".7"/><circle cx="${x}" cy="${y}" r="15" fill="none" stroke="${c}" stroke-width="2"/>`; }).join("")}`; }).join("")}`, 170)],
    ["Forma binaria: A B", `<p>La <mark>forma binaria</mark> tiene dos secciones distintas: <b>A B</b>. La parte A presenta una idea y la parte B le responde con otra diferente, como una <b>pregunta y una respuesta</b>. Muchas veces cada parte se repite: <b>A A B B</b>.</p><p>Es muy habitual en las <b>danzas</b> antiguas, como el minueto o la gavota, y en muchas canciones populares cortas. Para reconocerla, escucha: ¿hay una primera música, luego otra distinta y se acaba sin volver a la primera? Entonces es binaria.</p>`,
      forma("Forma binaria A B, a veces con repeticiones A A B B", "binaria: A B", fila("AB"), { extra: `${tx(130, 136, "con repeticiones: A A B B", { s: 10.5, c: "var(--muted)" })}` })],
    ["Forma ternaria: A B A", `<p>La <mark>forma ternaria</mark> tiene tres secciones: <b>A B A</b>. Empieza con una idea, sigue con una parte que contrasta y termina <b>volviendo a la primera</b>. Es como un viaje de ida y vuelta: salimos de casa, visitamos otro lugar y regresamos.</p><p>Esta vuelta da a la obra una sensación de <b>equilibrio</b> y de final redondo. Si la A del final vuelve cambiada, se escribe <b>A B A'</b>. Muchas nanas, arias de ópera y piezas para piano tienen esta forma.</p>`,
      forma("Forma ternaria A B A, como un viaje de ida y vuelta", "ternaria: A B A", fila("ABA"), { extra: `<path d="M56 124 Q 130 152 204 124" fill="none" stroke="${AZ}" stroke-width="2"/><path d="M198 120 l 8 4 l -6 6" fill="none" stroke="${AZ}" stroke-width="2"/>${tx(130, 154, "volvemos a casa", { s: 10.5, c: AZ })}` })],
    ["El rondó: A B A C A", `<p>El <mark>rondó</mark> es una forma en la que una sección principal, el <b>estribillo</b> (A), vuelve una y otra vez, y entre sus apariciones hay secciones diferentes llamadas <b>coplas</b> o <b>episodios</b> (B, C, D…). El esquema más típico es <b>A B A C A</b>.</p><p>Es como un juego en el que siempre se regresa a la base. Por eso es fácil de seguir y muy alegre. Muchos compositores clásicos, como Mozart o Beethoven, terminaban sus sonatas y conciertos con un rondó animado.</p>`,
      forma("Rondó A B A C A: el estribillo vuelve entre coplas distintas", "rondó: A B A C A", fila("ABACA"), { extra: `${tx(130, 136, "A = estribillo · B y C = coplas", { s: 10.5, c: "var(--muted)" })}` }), "m6v"],
    ["Estrofa y estribillo", `<p>La mayoría de las <mark>canciones</mark> se organizan en <b>estrofas</b> y <b>estribillo</b>. En las estrofas la melodía es la misma, pero la <b>letra cambia</b> y va contando la historia. El estribillo repite la misma <b>melodía y la misma letra</b> cada vez, y suele ser la parte más pegadiza.</p><p>Muchas canciones actuales añaden una <b>introducción</b> al principio, un <b>puente</b> (una parte distinta antes del último estribillo) y una <b>coda</b> o final. Al escuchar una canción, ¡prueba a señalar dónde empieza cada parte!</p>`,
      forma("Canción con introducción, estrofas, estribillos, puente y final", "canción", [["intro", MO, 1.15], ["E", AZ], ["Est", RO], ["E", AZ], ["Est", RO], ["P", VE], ["Est", RO], ["fin", MO, 0.8]], { extra: `${tx(130, 136, "E = estrofa · Est = estribillo · P = puente", { s: 10, c: "var(--muted)" })}` })],
    ["El canon", `<p>En un <mark>canon</mark>, varias voces o instrumentos interpretan <b>la misma melodía</b>, pero <b>empiezan en momentos diferentes</b>, uno detrás de otro, como si se persiguieran. Cuando la primera voz va por la segunda frase, entra la segunda voz con la primera frase, y así sucesivamente.</p><p>El resultado es una música a varias voces hecha con una sola melodía. Para que suene bien, las frases deben «encajar» al sonar juntas. Hay cánones a dos, tres o cuatro voces, y pueden repetirse varias veces antes de terminar.</p>`,
      svg("Canon a tres voces que entran una detrás de otra", `${[AZ, RO, VE].map((c, i) => `${tx(16, 56 + i * 34, "voz " + (i + 1), { s: 10.5, a: "start", c })}${[1, 2, 3].map((k) => `<rect x="${52 + (i + k - 1) * 40}" y="${42 + i * 34}" width="36" height="20" rx="5" fill="${c}" fill-opacity="${0.15 + k * 0.18}" stroke="${c}" stroke-width="1.4"/>${tx(70 + (i + k - 1) * 40, 56 + i * 34, k, { s: 10.5 })}`).join("")}`).join("")}${tx(130, 26, "misma melodía (1-2-3), entradas distintas", { s: 10, c: "var(--muted)" })}<path d="M52 152 H 244" stroke="var(--line)" stroke-width="2"/>${tx(152, 168, "tiempo", { s: 9.5, c: "var(--muted)" })}`, 176)],
    ["Tema con variaciones", `<p>En el <mark>tema con variaciones</mark>, primero se presenta una melodía sencilla, el <b>tema</b>, y después se repite varias veces cambiando algo en cada una: son las <b>variaciones</b>. Su esquema es <b>A A' A'' A'''</b>…</p><p>Se puede variar el <b>ritmo</b> (más rápido o con notas cortas), el <b>modo</b> (de alegre a triste), el <b>tempo</b>, los <b>matices</b>, el <b>instrumento</b> o añadir <b>adornos</b>. El reto del oyente es reconocer el tema escondido en cada variación. ¡Es como el mismo dibujo pintado con colores distintos!</p>`,
      forma("Tema con variaciones: el tema A y sus variaciones", "tema con variaciones", [["A", AZ], ["A'", VE], ["A''", NA], ["A'''", RO]], { extra: `${tx(130, 136, "más rápido · triste · con adornos", { s: 10.5, c: "var(--muted)" })}` })],
    ["El musicograma", `<p>Un <mark>musicograma</mark> es un dibujo que representa lo que pasa en una obra musical para poder seguirla mientras se escucha. Cada sección o instrumento se dibuja con un <b>símbolo</b> o <b>color</b> distinto, y se lee de izquierda a derecha, como un texto.</p><p>Puedes crear el tuyo: elige un símbolo para cada sección (A, B, C), dibújalo más grande si suena fuerte y más pequeño si suena suave, y usa flechas que suben o bajan según la melodía. ¡Así, al escuchar, sigues la música con el dedo!</p>`,
      svg("Musicograma de un rondó con símbolos para cada sección", `${[["A", "c", AZ, 1], ["B", "t", RO, 0.8], ["A", "c", AZ, 1], ["C", "s", VE, 0.7], ["A", "c", AZ, 1.2]].map(([l, f, c, k], i) => { const x = 34 + i * 48, y = 86; return (f === "c" ? `<circle cx="${x}" cy="${y}" r="${16 * k}" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>` : f === "t" ? `<path d="M${x} ${y - 16 * k} L ${x + 16 * k} ${y + 14 * k} H ${x - 16 * k} Z" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>` : `<rect x="${x - 13 * k}" y="${y - 13 * k}" width="${26 * k}" height="${26 * k}" fill="${c}" fill-opacity=".35" stroke="${c}" stroke-width="2"/>`) + tx(x, 136, l, { s: 13, c }); }).join("")}<path d="M16 160 H 244" stroke="var(--line)" stroke-width="2"/><path d="M238 155 l 6 5 l -6 5" fill="none" stroke="var(--line)" stroke-width="2"/>${tx(130, 34, "grande = fuerte · pequeño = suave", { s: 10, c: "var(--muted)" })}`, 176)],
  ],
  ejemplos: [
    ["Una pieza suena así: melodía alegre, melodía tranquila y vuelve la alegre igual. ¿Qué forma tiene?", ["Primera música: A. Distinta: B.", "Vuelve la primera: A."], "Forma ternaria, A B A."],
    ["Escribe el esquema de un rondó con tres coplas diferentes.", ["El estribillo A vuelve siempre entre coplas.", "Coplas: B, C y D."], "A B A C A D A."],
    ["En una canción, la letra del estribillo… ¿cambia o se repite?", ["Las estrofas cambian de letra.", "El estribillo repite melodía y letra."], "Se repite igual cada vez."],
  ],
  errores: [
    "Usar una letra nueva cuando vuelve una sección conocida: si vuelve, es otra vez A.",
    "Confundir la forma ternaria (A B A) con la binaria (A B).",
    "Pensar que en un canon cada voz canta una melodía distinta.",
    "Creer que A' es una sección nueva: es A, pero variada.",
    "Confundir estrofa (cambia la letra) y estribillo (se repite).",
  ],
  ejercicios: [
    ["¿Qué es la forma musical?", "La manera en que se organiza una obra en secciones."],
    ["¿Qué tres herramientas construyen la forma?", "Repetición, contraste y variación."],
    ["Escribe el esquema de la forma binaria.", "A B (o A A B B con repeticiones)."],
    ["Escribe el esquema de la forma ternaria.", "A B A."],
    ["¿Cómo se llama la sección que se repite en un rondó?", "Estribillo."],
    ["¿Qué significa A'?", "Que vuelve la sección A, pero algo cambiada."],
    ["¿Qué diferencia hay entre estrofa y estribillo?", "En la estrofa cambia la letra; el estribillo repite melodía y letra."],
    ["Explica qué es un canon.", "Varias voces cantan la misma melodía, pero entrando en momentos distintos."],
    ["Nombra tres cosas que se pueden cambiar en una variación.", "El ritmo, el tempo y el instrumento (o el modo, los matices, los adornos)."],
    ["¿Para qué sirve un musicograma?", "Para seguir una obra mientras se escucha, con dibujos y colores."],
  ],
  figura: ["Formas musicales sencillas", svg("Esquemas de forma binaria, ternaria, rondó y variaciones", `${[["binaria", "AB"], ["ternaria", "ABA"], ["rondó", "ABACA"], ["variaciones", ["A", "A'", "A''", "A'''"]]].map(([n, ls], i) => { const y = 22 + i * 40; return `${tx(14, y + 18, n, { s: 10.5, a: "start" })}${[...ls].map((l, k) => `<rect x="${92 + k * 30}" y="${y}" width="26" height="26" rx="5" fill="${C[l[0]]}" fill-opacity="${l.length > 1 ? 0.5 : 0.3}" stroke="${C[l[0]]}" stroke-width="1.5"/>${tx(105 + k * 30, y + 18, l, { s: l.length > 2 ? 9 : 12, c: C[l[0]] })}`).join("")}`; }).join("")}`, 180)],
  video: "m6b",
  quiz: [
    ["La forma A B A se llama…", ["ternaria", "binaria", "rondó"], "Ternaria."],
    ["La forma A B se llama…", ["binaria", "ternaria", "canon"], "Binaria."],
    ["A B A C A es un…", ["rondó", "canon", "tema"], "Rondó."],
    ["En el rondó, la A es el…", ["estribillo", "puente", "final"], "Estribillo."],
    ["A' significa…", ["A cambiada", "una sección nueva", "un error"], "A variada."],
    ["Si en una canción la letra cambia y la melodía no, es la…", ["estrofa", "coda", "intro"], "Estrofa."],
    ["Misma melodía con entradas sucesivas es un…", ["canon", "rondó", "minueto"], "Canon."],
    ["Lo que da unidad a la forma es la…", ["repetición", "sorpresa", "velocidad"], "Repetición."],
    ["Un dibujo para seguir la música es un…", ["musicograma", "pentagrama", "metrónomo"], "Musicograma."],
    ["A A' A'' A''' es un…", ["tema con variaciones", "rondó", "canon"], "Variaciones."],
  ],
  examen: [
    ["Una sección nueva y distinta aporta…", ["contraste", "repetición", "unidad"], "Contraste."],
    ["El esquema A A B B es una forma…", ["binaria", "ternaria", "rondó"], "Binaria con repeticiones."],
    ["La parte distinta antes del último estribillo es el…", ["puente", "tema", "canon"], "Puente."],
    ["En un musicograma se lee…", ["de izquierda a derecha", "de abajo arriba", "al azar"], "Como un texto."],
  ],
  feynman: ["Qué es la forma musical y cómo se usan las letras", "En qué se diferencian la forma binaria, la ternaria y el rondó", "Qué son la estrofa, el estribillo, el canon y las variaciones", "Cómo se hace un musicograma"],
  mapa: ["FORMAS", VE, [["Herramientas", "repetición · contraste · variación", AZ], ["Binaria y ternaria", "A B · A B A", VE], ["Rondó y canción", "A B A C A · estrofa-estribillo", NA], ["Canon y variaciones", "entradas sucesivas · A A' A''", RO]], 240],
  tarjetas: [
    ["Forma musical", "Organización de una obra en secciones."],
    ["Binaria", "A B."],
    ["Ternaria", "A B A."],
    ["Rondó", "A B A C A."],
    ["A'", "La sección A, variada."],
    ["Estribillo", "Se repite con la misma letra."],
    ["Canon", "Misma melodía, entradas distintas."],
    ["Musicograma", "Dibujo para seguir la música."],
  ],
  familias: ["Escuchad juntos una canción que os guste y señalad dónde están las estrofas y el estribillo.", "Inventad un rondó con palmas: un ritmo que se repite (A) y otros distintos entre medias (B, C)."],
  saberes: "Forma musical: repetición, contraste y variación; formas binaria, ternaria, rondó, estrofa-estribillo, canon y tema con variaciones; musicogramas (Educación Artística, Música)",
  ideas: ["Rondó corporal: estribillo común y coplas inventadas por grupos.", "Seguir un musicograma en la pizarra mientras suena una obra.", "Crear y cantar un canon a dos voces con una melodía de la clase."],
  fuentes: [["Fundación Juan March: conciertos didácticos", "https://www.march.es/es/madrid/musica"], ["Auditorio Nacional de Música", "https://www.auditorionacional.mcu.es/"]],
});
