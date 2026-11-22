// Música 5º de Primaria: formas musicales sencillas. Dibujos propios en SVG.
const { tema, L, svg, tx, AZ, RO, VE, NA, AM, MO } = require("./_pri5d");

// Esquema de forma: secciones [[letra, color, ancho?]] en fila, con título.
const forma = (label, titulo, secs, o = {}) => {
  const tot = secs.reduce((a, s) => a + (s[2] || 1), 0), W = 228 / tot;
  let x = 16;
  const s = secs.map(([l, c, w = 1]) => { const r = `<rect x="${x + 2}" y="${o.y || 66}" width="${W * w - 4}" height="44" rx="8" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>${tx(x + (W * w) / 2, (o.y || 66) + 29, l, { s: l.length > 2 ? 10.5 : 17, c })}`; x += W * w; return r; }).join("");
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
      forma("Canción con introducción, estrofas, estribillos, puente y final", "canción", [["intro", MO, 1.15], ["E", AZ], ["Est", RO], ["E", AZ], ["Est", RO], ["P", VE], ["Est", RO], ["fin", MO, 1]], { extra: `${tx(130, 136, "E = estrofa · Est = estribillo · P = puente", { s: 10, c: "var(--muted)" })}` })],
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

// ---------- Nivel libro (5º de Primaria) ----------
const { L: L5, H: H5, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 75,
  objetivos: ["Reconocer el ostinato y su uso en el Bolero de Ravel", "Entender la fuga como un canon más complejo", "Seguir las variaciones de Mozart sobre «Estrellita»", "Conocer la suite de danzas y la forma de la sinfonía"],
  lectura: { titulo: "La música que no paraba de repetirse", html: `<p>En 1928, una bailarina rusa, Ida Rubinstein, le pidió al compositor francés Maurice Ravel una música para un ballet. Ravel aceptó, pero tenía poco tiempo y una idea muy extraña en la cabeza.</p><p>—Voy a hacer un experimento —le dijo a un amigo—. Una sola melodía, repetida una y otra vez, sin cambiar nada, solo haciéndola cada vez más fuerte.</p><p>Así nació el <b>Bolero</b>. Empieza con una caja que toca un ritmo muy suave, casi un susurro. Encima, una flauta toca la melodía. Después la repite el clarinete, luego el fagot, luego otros instrumentos… Durante quince minutos, el ritmo de la caja no se detiene ni una sola vez, y la melodía va pasando de instrumento en instrumento mientras la orquesta crece y crece.</p><p>El día del estreno, en París, una señora del público gritó: «¡Socorro, un loco!». Cuando se lo contaron a Ravel, sonrió y dijo: «Esa señora lo ha entendido».</p><p>A pesar de que el propio Ravel pensaba que era una obra «sin música», el Bolero se convirtió en una de las piezas más interpretadas del mundo. Demuestra que, en música, repetir no es aburrido si se hace con imaginación: la forma también puede emocionar.</p>` },
  tras: {
    "Repetición, contraste y variación": [
      ["El ostinato", `<p>Un <b>ostinato</b> es un pequeño fragmento musical (un ritmo o una melodía corta) que se <b>repite sin parar</b> durante toda una obra o una parte de ella. La palabra viene del italiano y significa «obstinado», «terco».</p><p>El ostinato da <b>unidad</b> y <b>energía</b> a la música. Mientras se repite debajo, otras voces o instrumentos pueden cantar melodías distintas por encima.</p><p>El ejemplo más famoso es el <b>Bolero</b> (1928) del compositor francés <b>Maurice Ravel</b>. La caja toca el mismo ritmo durante unos quince minutos, sin parar, mientras la melodía pasa de un instrumento a otro: flauta, clarinete, fagot, saxofón, trompeta… La obra es un enorme <b>crescendo</b>: empieza casi en silencio y termina con toda la orquesta tocando a la vez muy fuerte.</p><p>También hay ostinatos en la música actual: muchas canciones de pop, rock o música electrónica se construyen sobre un ritmo de batería o un riff de guitarra que se repite.</p><p>En clase podéis crear un ostinato con percusión corporal, por ejemplo «pie, pie, palmada, silencio», y mantenerlo mientras otro grupo canta una canción por encima. ¡Es más difícil de lo que parece no perder el ritmo!</p>`,
        L5.filas("El Bolero de Ravel", [["año", "1928", cAZ], ["ostinato", "ritmo de la caja", cRO], ["melodía", "pasa por instrumentos", cVE], ["matiz", "un gran crescendo", cNA]]), ["r30D3SW4OVw", "Maurice Ravel - Bolero", "The Wicked North", 24048714]],
    ],
    "El canon": [
      ["La fuga", `<p>La <b>fuga</b> es como un canon, pero mucho más elaborado. Se desarrolló sobre todo en el <b>Barroco</b>, y su gran maestro fue <b>Johann Sebastian Bach</b>.</p><p>Su nombre viene de la idea de que las voces parecen «huir» unas de otras y perseguirse. Funciona así:</p><ol><li>Una voz presenta sola una melodía corta y fácil de reconocer: el <b>sujeto</b>.</li><li>Después entra una segunda voz con el mismo sujeto, pero más agudo o más grave. Mientras tanto, la primera voz sigue con otra melodía que encaja con él.</li><li>Entran la tercera y la cuarta voz, también con el sujeto.</li><li>A partir de ahí, el sujeto va apareciendo en distintas voces y tonalidades, a veces cortado, al revés o más lento, mezclado con partes libres llamadas <b>episodios</b>.</li><li>Al final, todas las voces se juntan en un cierre brillante.</li></ol><p>La diferencia con el canon es que en el canon todas las voces repiten <b>exactamente</b> la misma melodía, mientras que en la fuga solo el sujeto se repite y las voces tienen mucha más libertad.</p><p>Escuchar una fuga es como un juego de detectives: hay que encontrar el sujeto cada vez que aparece. Bach escribió fugas para órgano, para clave y para muchos otros instrumentos.</p>`,
        H5.flujo("Cómo empieza una fuga", ["Voz 1|sujeto", "Voz 2|sujeto", "Voz 3|sujeto", "Juego|libre"], cMO)],
    ],
    "Tema con variaciones": [
      ["Mozart y «Estrellita»", `<p>Una de las melodías más conocidas por los niños de todo el mundo es la de <b>«Estrellita, ¿dónde estás?»</b> (en inglés, <i>Twinkle, twinkle, little star</i>). Pero su origen es una canción popular francesa del siglo XVIII: <i>Ah, vous dirai-je, maman</i> («Ah, ¿le diré, mamá?»).</p><p><b>Wolfgang Amadeus Mozart</b> escribió hacia <b>1781</b> un tema con <b>doce variaciones</b> para piano sobre esta melodía. Es un ejemplo perfecto para entender esta forma musical:</p><ul><li>Primero suena el <b>tema</b>, sencillo y claro.</li><li>En las primeras variaciones, la mano derecha toca notas muy rápidas alrededor de la melodía.</li><li>En otras, las notas rápidas pasan a la mano izquierda.</li><li>Hay una variación en <b>modo menor</b>, que suena triste y misteriosa.</li><li>Otra es muy <b>lenta</b> y llena de adornos (adagio).</li><li>La última es rápida, alegre y brillante, en compás de tres.</li></ul><p>En todas ellas, si escuchas con atención, la melodía de «Estrellita» sigue escondida. ¡Es como un juego de buscar a Wally musical!</p><p>Después de escucharla, intentad hacer vuestras propias variaciones de «Estrellita» con la flauta: cambiando el ritmo, el tempo, los matices o tocándola en menor.</p>`,
        L5.filas("Variar «Estrellita»", [["tema", "la melodía sencilla", cAZ], ["ritmo", "notas muy rápidas", cVE], ["modo", "en menor", cMO], ["tempo", "muy lento, adagio", cNA], ["final", "rápido y brillante", cRO]]), ["hCKBl-TpRzc", "Mozart - Twinkle Twinkle Little Star (12 variations on Ah vous dirai-je, Maman)", "Rousseau", 5636944]],
    ],
  },
  final: [
    ["La suite de danzas", `<p>En el <b>Barroco</b>, los compositores agrupaban varias <b>danzas</b> en una obra llamada <b>suite</b>. Cada danza tenía su propio carácter, tempo y compás, y venía de un país diferente. Aunque al principio se bailaban, con el tiempo se escribieron solo para escuchar.</p><p>Las cuatro danzas básicas de la suite eran:</p><ul><li><b>Allemande</b> (alemanda): de origen alemán, tranquila, en compás de cuatro.</li><li><b>Courante</b> (corrente): de origen francés o italiano, más rápida, como si corriera.</li><li><b>Sarabande</b> (zarabanda): lenta, solemne y elegante, en compás de tres. Curiosamente, su origen está en una danza muy animada de España y América.</li><li><b>Gigue</b> (giga): muy rápida y saltarina, de origen británico, a menudo en 6/8.</li></ul><p>Entre ellas se podían añadir otras danzas, como el <b>minueto</b>, una danza francesa elegante en compás de 3/4, muy de moda en la corte de Luis XIV. Más tarde, en el Clasicismo, el minueto pasó a formar parte de las sinfonías.</p><p>Bach escribió muchas suites, por ejemplo para violonchelo solo, y Händel compuso la <i>Música acuática</i> para un paseo del rey en barco por el río Támesis.</p>`,
      L5.filas("Danzas de la suite", [["alemanda", "tranquila, en 4", cAZ], ["corrente", "rápida", cVE], ["zarabanda", "lenta, en 3", cMO], ["giga", "muy rápida, en 6/8", cRO], ["minueto", "elegante, en 3/4", cNA]]), ["GjLTTgv5FUQ", "Baroque Dance - Sarabande à deux", "Peter Hoffmann", 505751]],
    ["La sinfonía y la forma sonata", `<p>La <b>sinfonía</b> es una gran obra para orquesta que se divide normalmente en <b>cuatro movimientos</b>, cada uno con su propio carácter:</p><ol><li><b>Primer movimiento</b>: rápido (allegro), el más importante, en forma sonata.</li><li><b>Segundo movimiento</b>: lento y cantable (andante o adagio).</li><li><b>Tercer movimiento</b>: una danza, el <b>minueto</b> o, desde Beethoven, el <b>scherzo</b> (que significa «broma»), más rápido y juguetón.</li><li><b>Cuarto movimiento</b>: rápido y brillante, para terminar con energía, a menudo en forma de rondó.</li></ol><p>La <b>forma sonata</b>, típica del primer movimiento, tiene tres partes, parecidas a un cuento:</p><ul><li><b>Exposición</b>: se presentan dos temas distintos, como dos personajes; el primero suele ser enérgico y el segundo, más tranquilo.</li><li><b>Desarrollo</b>: los temas se transforman, se mezclan, cambian de tonalidad y aparecen conflictos. Es el «nudo».</li><li><b>Reexposición</b>: los temas vuelven, ya en paz, en la tonalidad principal. Es el «desenlace».</li></ul><p>Haydn, Mozart y Beethoven perfeccionaron esta forma, que se usa también en sonatas para piano, cuartetos de cuerda y conciertos.</p>`,
      H5.flujo("Forma sonata", ["Exposi-|ción", "Desarro-|llo", "Reexpo-|sición"], cAZ), ["V2ZO9YUL8aI", "Forma sonata en DOS minutos. (aproximadamente)", "Jesse Strickland", 77016]],
  ],
  ejemplos: [
    ["Una caja toca el mismo ritmo durante toda la obra mientras la melodía cambia de instrumento. ¿Qué recurso es?", ["Algo que se repite sin parar.", "Da unidad a toda la obra."], "Un ostinato (como en el Bolero de Ravel)."],
    ["Ordena los movimientos de una sinfonía clásica.", ["Empieza rápido.", "Sigue lento, luego una danza y termina rápido."], "Allegro, andante, minueto o scherzo, final rápido."],
  ],
  errores: ["Confundir canon y fuga: en la fuga solo se repite el sujeto y las voces son más libres.", "Pensar que todas las danzas de la suite son rápidas: la zarabanda es lenta."],
  ejercicios: [
    ["b", "¿Qué es un ostinato?", "Un fragmento que se repite sin parar."],
    ["b", "¿Quién compuso el Bolero?", "Maurice Ravel, en 1928."],
    ["b", "¿Cómo se llama la melodía principal de una fuga?", "El sujeto."],
    ["b", "¿Cuántas variaciones escribió Mozart sobre «Estrellita»?", "Doce."],
    ["b", "¿Cuántos movimientos tiene normalmente una sinfonía?", "Cuatro."],
    ["m", "Explica la diferencia entre canon y fuga.", "En el canon se repite toda la melodía igual; en la fuga solo el sujeto y las voces son más libres."],
    ["m", "Nombra las cuatro danzas básicas de la suite barroca.", "Alemanda, corrente, zarabanda y giga."],
    ["m", "¿Qué significa «scherzo»?", "Broma."],
    ["m", "Nombra las tres partes de la forma sonata.", "Exposición, desarrollo y reexposición."],
    ["m", "¿Qué cambia en la variación en menor de «Estrellita»?", "El modo: suena triste y misteriosa."],
    ["a", "Crea un ostinato de percusión corporal y mantenlo mientras otros cantan.", "Respuesta abierta."],
    ["a", "Escribe tres variaciones de «Estrellita» para flauta.", "Respuesta abierta."],
    ["a", "Escucha el primer movimiento de una sinfonía y levanta la mano al oír el segundo tema.", "Respuesta abierta."],
    ["a", "Inventa una coreografía sencilla para un minueto.", "Respuesta abierta."],
  ],
  quiz: [
    ["El Bolero de Ravel es un gran…", ["crescendo", "diminuendo", "silencio"], "Cada vez más fuerte."],
    ["El gran maestro de la fuga fue…", ["Bach", "Ravel", "Chueca"], "Barroco."],
    ["«Estrellita» viene de una canción…", ["francesa", "japonesa", "argentina"], "Ah, vous dirai-je, maman."],
    ["La zarabanda es una danza…", ["lenta y solemne", "muy rápida", "en 6/8 siempre"], "Compás de tres."],
    ["En la forma sonata, los temas se transforman en el…", ["desarrollo", "exposición", "final"], "Nudo."],
  ],
  examen: [
    ["Un ostinato da a la música…", ["unidad y energía", "silencio", "letra"], "Repetición."],
    ["La Música acuática es de…", ["Händel", "Mozart", "Beethoven"], "Río Támesis."],
  ],
  tarjetas: [
    ["Ostinato", "Fragmento que se repite; Bolero de Ravel (1928)."],
    ["Fuga", "Sujeto que entra en cada voz; Bach."],
    ["Variaciones", "Mozart, doce variaciones sobre «Estrellita»."],
    ["Suite y sinfonía", "Alemanda, corrente, zarabanda, giga; cuatro movimientos y forma sonata."],
  ],
  glosario: [
    ["Ostinato", "Fragmento musical que se repite sin parar."],
    ["Riff", "Frase corta que se repite en el pop y el rock."],
    ["Fuga", "Forma en que un sujeto entra sucesivamente en varias voces."],
    ["Sujeto", "Melodía principal de una fuga."],
    ["Episodio", "Parte libre de una fuga entre apariciones del sujeto."],
    ["Variación", "Repetición de un tema con cambios."],
    ["Suite", "Conjunto de danzas en una obra."],
    ["Minueto", "Danza francesa elegante en 3/4."],
    ["Scherzo", "Movimiento rápido y juguetón de una sinfonía."],
    ["Forma sonata", "Exposición, desarrollo y reexposición."],
    ["Exposición", "Parte donde se presentan los temas."],
    ["Reexposición", "Parte donde vuelven los temas al final."],
  ],
  situacion: {
    titulo: "Arquitectos de la música",
    reto: "La clase construye una obra musical colectiva usando varias formas: un ostinato de base, un canon, variaciones y un final en forma de rondó.",
    pasos: ["Cread un ostinato de percusión corporal que sirva de base a toda la obra.", "Sobre el ostinato, cantad una canción conocida en canon a dos o tres voces.", "Preparad tres variaciones de la melodía cambiando ritmo, tempo y modo.", "Organizadlo todo como un rondó (A B A C A), dibujad el musicograma y presentadlo."],
    producto: "Una obra colectiva con musicograma.",
    evaluacion: ["Mantiene un ostinato.", "Distingue canon, fuga y variaciones.", "Reconoce las danzas de la suite.", "Explica la forma sonata."],
  },
});
