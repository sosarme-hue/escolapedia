// Música 2º ESO: la forma musical. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

// Fila de bloques con letras: [[letra, color, ancho]]
const bloques = (y, partes, x0 = 20) => { let x = x0; return partes.map(([l, c, w = 34]) => { const r = `<rect x="${x}" y="${y}" width="${w - 4}" height="30" rx="6" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>${t(x + (w - 4) / 2, y + 20, l, { c, s: 13 })}`; x += w; return r; }).join(""); };
const A = "var(--pen)", B = "var(--red)", Cc = "var(--leaf)", Dd = "var(--sun)";

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La forma musical",
  minutos: 50,
  objetivos: ["Comprender la forma como la organización de una obra en partes", "Reconocer los procedimientos de repetición, contraste y variación", "Identificar las formas binaria, ternaria, rondó y tema con variaciones", "Analizar la estructura estrofa-estribillo de las canciones actuales"],
  claves: ["forma musical", "frase", "repetición", "contraste", "rondó", "estribillo"],
  pregunta: {
    texto: "¿Por qué el estribillo de una canción se te queda en la cabeza y las estrofas no tanto?",
    respuesta: "Porque el estribillo se <mark>repite</mark> varias veces con la misma letra y música, mientras que las estrofas cambian de letra. La <b>repetición</b> ayuda a la memoria. Los compositores organizan las obras en partes que se repiten y contrastan: eso es la <b>forma musical</b>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la forma musical?</h3><p>La <b>forma</b> es la <mark>estructura</mark> u organización de una obra musical: cómo se divide en partes y cómo se relacionan entre sí. Es como el plano de un edificio o el índice de un libro.</p><p>Para analizarla se asigna una <b>letra mayúscula</b> a cada sección: A a la primera, B a la siguiente si es diferente, otra vez A si vuelve la primera… Si una sección vuelve con pequeños cambios, se escribe A' (A prima).</p><p>Conocer la forma ayuda a escuchar mejor: sabes cuándo empieza algo nuevo y puedes anticipar lo que vendrá.</p>`,
    },
    {
      html: `<h3>Motivo, frase y sección</h3><p>Igual que un texto se compone de palabras, frases y párrafos, la música se organiza en unidades de distinto tamaño:</p><ul><li><b>Motivo</b>: la idea musical más pequeña y reconocible, de unas pocas notas. Las cuatro notas «ta-ta-ta-tááán» de la Quinta Sinfonía de Beethoven son un motivo famoso.</li><li><b>Semifrase</b> y <b>frase</b>: fragmentos con sentido, que suelen durar 4 y 8 compases. Muchas veces una frase es una «pregunta» (acaba en suspenso) y la siguiente, una «respuesta» (acaba en reposo).</li><li><b>Sección</b>: un conjunto de frases que forma una parte de la obra (A, B…).</li></ul><p>El final de cada frase está marcado por una <b>cadencia</b>, un «signo de puntuación» musical.</p>`,
    },
    {
      html: `<h3>Repetición, contraste y variación</h3><p>Todas las formas se construyen con tres procedimientos:</p>${tabla(["Procedimiento", "Qué hace", "Efecto en el oyente"], [["Repetición (A A)", "vuelve a sonar algo ya escuchado", "unidad, se recuerda fácilmente"], ["Contraste (A B)", "aparece una idea nueva y distinta", "variedad, interés, sorpresa"], ["Variación (A A')", "se repite cambiando algo: ritmo, instrumentos, armonía, tempo", "unidad y variedad a la vez"]])}<p>Una obra solo con repetición aburre; una obra solo con contrastes desorienta. El equilibrio entre ambos es la clave de la forma.</p>`,
      svg: svg("Repetición A A, contraste A B y variación A A prima en bloques de colores", `${bloques(30, [["A", A], ["A", A]], 60)}${bloques(76, [["A", A], ["B", B]], 60)}${bloques(122, [["A", A], ["A'", A]], 60)}${t(150, 50, "repetición", { s: 11, a: "start", c: "var(--muted)" })}${t(150, 96, "contraste", { s: 11, a: "start", c: "var(--muted)" })}${t(150, 142, "variación", { s: 11, a: "start", c: "var(--muted)" })}`),
    },
    {
      html: `<h3>Formas binaria y ternaria</h3><ul><li><b>Forma binaria (A B)</b>: dos secciones distintas. Muchas veces cada una se repite: A A B B. Era la forma de las danzas del Barroco (minuetos, gigas, zarabandas).</li><li><b>Forma ternaria (A B A)</b>: una sección, un contraste y el regreso de la primera. Da sensación de viaje de ida y vuelta, de volver a casa. Es muy frecuente en arias de ópera, minuetos con trío y canciones populares.</li></ul><p>La ternaria es una de las formas más naturales: el oído agradece reencontrar lo que ya conoce después de algo distinto.</p>`,
      svg: svg("Forma binaria A B y forma ternaria A B A", `${bloques(46, [["A", A, 60], ["B", B, 60]], 70)}${bloques(110, [["A", A, 60], ["B", B, 60], ["A", A, 60]], 40)}${t(130, 34, "binaria", { s: 12, c: "var(--muted)" })}${t(130, 98, "ternaria", { s: 12, c: "var(--muted)" })}`),
      video: { id: "mHsV9yaw05M", titulo: "Forma musical en 7 minutos con ejemplos", canal: "Repentizando", vistas: 169495 },
    },
    {
      html: `<h3>El rondó</h3><p>En el <b>rondó</b> una sección principal, el <b>estribillo</b> (A), vuelve una y otra vez, alternando con secciones diferentes llamadas <b>coplas</b> o episodios (B, C, D…):</p><p style="text-align:center"><mark>A B A C A D A</mark></p><p>Es una forma alegre y fácil de seguir porque el estribillo actúa como punto de referencia. Ejemplos: «Para Elisa» de Beethoven (A B A C A), el «Rondó alla turca» de Mozart o el último movimiento de muchos conciertos clásicos.</p>`,
      svg: svg("Forma rondó: A B A C A D A, el estribillo A vuelve entre secciones nuevas", `${bloques(76, [["A", A], ["B", B], ["A", A], ["C", Cc], ["A", A], ["D", Dd], ["A", A]], 12)}${t(130, 44, "RONDÓ", { s: 15, d: true })}${t(130, 140, "el estribillo A vuelve siempre", { s: 12 })}`),
      video: { id: "ohwdsknSI9U", titulo: "Forma rondó", canal: "Julio J. Maestro Oliver", vistas: 84401 },
    },
    {
      html: `<h3>Tema con variaciones</h3><p>Se presenta un <b>tema</b> (una melodía sencilla, a veces conocida) y después se repite varias veces <b>modificado</b>: A A' A'' A''' …</p><p>Cada variación cambia uno o varios elementos:</p><ul><li>el <b>ritmo</b> (más notas rápidas, otro compás),</li><li>el <b>modo</b> (de mayor a menor),</li><li>la <b>instrumentación</b> o el timbre,</li><li>el <b>tempo</b>, la <b>armonía</b> o la <b>textura</b>.</li></ul><p>Ejemplos: las 12 variaciones de Mozart sobre «Ah, vous dirai-je, maman» (la melodía de «Estrellita, ¿dónde estás?») o el «Bolero» de Ravel, donde el tema se repite cambiando solo los instrumentos y creciendo en intensidad.</p>`,
    },
    {
      html: `<h3>La forma de las canciones actuales</h3><p>Las canciones de pop, rock, reguetón o música urbana suelen seguir una estructura parecida:</p>${tabla(["Parte", "Función"], [["Introducción", "prepara la canción, solo instrumentos"], ["Estrofa (verso)", "cuenta la historia; la música se repite, la letra cambia"], ["Preestribillo", "aumenta la tensión antes del estribillo"], ["Estribillo", "la parte más pegadiza; se repite con la misma letra"], ["Puente", "contraste: música y letra nuevas antes del final"], ["Coda / final", "cierra la canción, a veces con un fundido (fade out)"]])}<p>Un esquema típico: <b>Intro – Estrofa – Estribillo – Estrofa – Estribillo – Puente – Estribillo – Coda</b>. ¡Es un pariente moderno del rondó!</p>`,
      svg: svg("Esquema de canción: introducción, estrofa, estribillo, estrofa, estribillo, puente, estribillo y final", `${bloques(76, [["I", "var(--muted)", 26], ["E", A, 34], ["Es", B, 34], ["E", A, 34], ["Es", B, 34], ["P", Cc, 30], ["Es", B, 34], ["F", "var(--muted)", 26]], 12)}${t(130, 44, "CANCIÓN POP", { s: 14, d: true })}${t(130, 136, "E estrofa · Es estribillo · P puente", { s: 11 })}`),
      video: { id: "90yPgOZq4iw", titulo: "Ordena las partes de tu canción como un pro", canal: "GuitarRec Estudio de Grabación Online", vistas: 123310 },
    },
    {
      html: `<h3>Analizar la forma al escuchar</h3><p>Pasos para descubrir la forma de una obra:</p><ol><li>Escucha entera la obra una vez, sin analizar.</li><li>En la segunda escucha, marca con una línea cada vez que notes un <b>cambio</b> (otra melodía, otros instrumentos, otro carácter).</li><li>Pon una letra a cada parte y comprueba si alguna <b>vuelve</b>.</li><li>Anota los minutos y segundos en los que empieza cada sección.</li><li>Representa el esquema con un <b>musicograma</b>: un dibujo con colores, formas o iconos que muestra la estructura de la obra.</li></ol><p>Truco: los cambios suelen coincidir con una cadencia, un silencio breve o la entrada de nuevos instrumentos.</p>`,
    },
  ],
  figura: {
    titulo: "Las formas musicales",
    svg: filas("Resumen: forma como estructura; repetición, contraste y variación; binaria A B; ternaria A B A; rondó; tema con variaciones; canción con estrofa y estribillo", [["Procedimientos", "repetición · contraste · variación", "var(--ink)"], ["Binaria", "A B (A A B B)", "var(--pen)"], ["Ternaria", "A B A", "var(--red)"], ["Rondó", "A B A C A D A", "var(--leaf)"], ["Variaciones", "A A' A'' A'''", "var(--sun)"], ["Canción", "estrofa · estribillo · puente", "var(--inf)"]], 200),
  },
  video: { id: "QAylqLt4Q4M", titulo: "La forma musical", canal: "Tu teacher de musica", vistas: 66016, megusta: 0, busqueda: "forma musical binaria ternaria rondó" },
  quiz: mezcla([
    { q: "La forma musical es…", o: ["la estructura de una obra", "la velocidad", "el timbre"], a: 0, e: "Su organización en partes." },
    { q: "La idea musical más pequeña es el…", o: ["motivo", "tema", "movimiento"], a: 0, e: "Pocas notas." },
    { q: "A A' indica…", o: ["variación", "contraste", "silencio"], a: 0, e: "Repetición con cambios." },
    { q: "La forma A B A se llama…", o: ["ternaria", "binaria", "rondó"], a: 0, e: "Tres secciones." },
    { q: "La forma A B A C A es un…", o: ["rondó", "canon", "tema con variaciones"], a: 0, e: "Estribillo que vuelve." },
    { q: "En el rondó, la sección que se repite es el…", o: ["estribillo", "puente", "episodio"], a: 0, e: "A." },
    { q: "Las danzas barrocas solían tener forma…", o: ["binaria", "rondó", "libre"], a: 0, e: "A A B B." },
    { q: "En una canción pop, la parte que cuenta la historia es la…", o: ["estrofa", "coda", "introducción"], a: 0, e: "La letra cambia." },
    { q: "El puente aporta…", o: ["contraste", "repetición exacta", "silencio"], a: 0, e: "Material nuevo." },
    { q: "El dibujo que representa la estructura de una obra es un…", o: ["musicograma", "pentagrama", "metrónomo"], a: 0, e: "Con colores y formas." },
  ]),
  examen: mezcla([
    { q: "El «Bolero» de Ravel repite el tema cambiando sobre todo…", o: ["los instrumentos", "el compás", "la tonalidad"], a: 0, e: "Variación tímbrica." },
    { q: "Una frase «pregunta» suele terminar…", o: ["en suspenso", "en reposo", "con silencio de redonda"], a: 0, e: "La respuesta concluye." },
    { q: "«Para Elisa» de Beethoven tiene forma de…", o: ["rondó", "canon", "monodia"], a: 0, e: "A B A C A." },
  ]),
  feynman: ["Qué es la forma y cómo se nombran las partes", "Los tres procedimientos de la forma", "Diferencia entre forma binaria y ternaria", "Cómo es un rondó", "Las partes de una canción actual"],
  mapa: mapa("FORMA MUSICAL", "var(--eso)", [
    ["Unidades", "motivo · frase · sección", "var(--ink)"],
    ["Procedimientos", "repetición · contraste · variación", "var(--pen)"],
    ["Formas clásicas", "A B · A B A · rondó", "var(--red)"],
    ["Canción", "estrofa · estribillo · puente", "var(--leaf)"],
  ], 240),
  tarjetas: [
    ["Forma musical", "Estructura de una obra en partes."],
    ["Motivo", "Idea musical más pequeña y reconocible."],
    ["Frase", "Fragmento con sentido, de unos 8 compases."],
    ["Forma binaria", "A B."],
    ["Forma ternaria", "A B A."],
    ["Rondó", "A B A C A…: estribillo que vuelve."],
    ["Tema con variaciones", "A A' A'' A'''…"],
    ["Estribillo", "Parte que se repite con la misma letra y música."],
  ],
  familias: ["Escuchad juntos una canción favorita y apuntad dónde empiezan la estrofa y el estribillo.", "Dibujad un musicograma con colores de una canción infantil.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Forma musical; unidades formales; procedimientos de repetición, contraste y variación; formas binaria, ternaria, rondó y tema con variaciones; estructura de la canción popular urbana (RD 217/2022, Música, escucha y percepción).",
    ideas: ["Musicogramas de «Para Elisa» o del «Rondó alla turca».", "Componer un rondó en grupo: estribillo común y coplas de cada equipo.", "Analizar la forma de canciones elegidas por el alumnado."],
  },
  fuentes: [RD, { t: "Fundación Juan March: recursos de música para escolares", url: "https://www.march.es/es/madrid/musica" }],
  revisado: REV,
  ejemplosTitulo: "Análisis resueltos",
  ejemplos: [
    { enunciado: "Una obra empieza con una melodía tranquila, sigue con una parte rápida y distinta y termina con la melodía del principio. ¿Qué forma es?", pasos: ["Primera parte: A.", "Parte distinta: B.", "Vuelve la primera: A."], resultado: "Forma ternaria A B A." },
    { enunciado: "Escribe el esquema de «Estrellita, ¿dónde estás?» variada por Mozart en 4 versiones.", pasos: ["Tema: A.", "Cada versión modifica ritmo, adornos o modo.", "Se escribe A A' A'' A'''."], resultado: "Tema con variaciones." },
    { enunciado: "Analiza: intro – estrofa – estribillo – estrofa – estribillo – puente – estribillo.", pasos: ["Estribillo = A; estrofas = B; puente = C.", "Sin la intro: B A B A C A.", "El estribillo vuelve tras cada parte nueva."], resultado: "Forma de canción, parecida a un rondó." },
  ],
  errores: [
    "Poner letra nueva a una sección que es repetición de otra.",
    "Confundir la forma (estructura) con la textura (combinación de voces).",
    "Pensar que la forma ternaria es «tres partes distintas» (es A B A).",
    "Llamar estribillo a cualquier parte que se repite musicalmente aunque cambie la letra (eso es la estrofa).",
    "No usar la prima (A') cuando una sección vuelve con cambios.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre motivo y frase.", sol: "El motivo es una idea de pocas notas; la frase es un fragmento con sentido completo, de varios compases." },
    { q: "¿Qué procedimiento se usa en A A'? ¿Y en A B?", sol: "Variación; contraste." },
    { q: "Escribe el esquema de una forma binaria con repeticiones.", sol: "A A B B." },
    { q: "¿Por qué la forma ternaria da sensación de «volver a casa»?", sol: "Porque tras el contraste regresa la primera sección, ya conocida." },
    { q: "Escribe un rondó con cuatro coplas.", sol: "A B A C A D A E A." },
    { q: "Nombra tres elementos que se pueden cambiar en una variación.", sol: "Ritmo, modo, instrumentos, tempo, armonía o textura." },
    { q: "¿Qué parte de una canción tiene la misma letra cada vez?", sol: "El estribillo." },
    { q: "¿Qué función tiene el puente en una canción?", sol: "Aportar contraste antes del último estribillo." },
    { q: "Analiza la forma de tu canción favorita con letras y tiempos.", sol: "Respuesta abierta: por ejemplo, Intro 0:00, E 0:10, Es 0:45…" },
    { q: "Dibuja un musicograma sencillo de una forma A B A.", sol: "Respuesta abierta: tres bloques, el primero y el último con el mismo color o símbolo." },
  ],
};
