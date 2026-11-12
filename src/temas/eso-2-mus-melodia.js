// Música 2º ESO: la melodía y la armonía. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, penta, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La melodía y la armonía",
  minutos: 55,
  objetivos: ["Leer las notas en clave de sol y reconocer los intervalos", "Construir la escala de do mayor y entender tonos y semitonos", "Describir una melodía: ámbito, movimiento y frases", "Formar acordes y reconocer los grados principales de la armonía"],
  claves: ["melodía", "intervalo", "escala", "tono y semitono", "acorde", "tonalidad"],
  pregunta: {
    texto: "¿Por qué algunas canciones suenan alegres y otras tristes, aunque tengan el mismo ritmo?",
    respuesta: "En buena parte por la <b>armonía</b>: las canciones en <mark>modo mayor</mark> suelen sonar luminosas y las de <mark>modo menor</mark>, melancólicas. La diferencia está en un solo sonido del acorde: en do mayor se usa mi y en do menor, mi bemol. La melodía es lo que cantamos; la armonía, los acordes que la acompañan.",
  },
  bloques: [
    {
      html: `<h3>Las notas en el pentagrama</h3><p>Las <b>notas</b> son siete: <b>do, re, mi, fa, sol, la, si</b>. Después vuelve a empezar el do, más agudo: la distancia entre dos notas con el mismo nombre se llama <b>octava</b>.</p><p>Se escriben en el <b>pentagrama</b>, cinco líneas y cuatro espacios que se cuentan de abajo arriba. La <b>clave de sol</b>, en la segunda línea, indica que la nota de esa línea es sol. A partir de ahí: mi en la 1.ª línea, fa en el 1.er espacio, sol en la 2.ª línea, la, si, do, re, mi, fa… Para notas más graves o agudas se usan <b>líneas adicionales</b>: el do central va en una línea adicional por debajo.</p><p>Las <b>alteraciones</b> modifican la altura: el <b>sostenido</b> (♯) sube medio tono, el <b>bemol</b> (♭) lo baja y el <b>becuadro</b> (♮) anula la alteración.</p>`,
      svg: (() => { const p = penta(14, 246, 44, 10); const n = ["do", "re", "mi", "fa", "sol", "la", "si", "do"]; return svg("Escala de do en clave de sol: do en línea adicional, re, mi en la primera línea, fa, sol, la, si y do", `${p.s}${n.map((x, i) => p.nota(34 + i * 28, i - 2, { c: i === 0 || i === 7 ? "var(--red)" : "var(--ink)", plica: false })).join("")}${n.map((x, i) => t(34 + i * 28, 132, x, { c: i === 0 || i === 7 ? "var(--red)" : "var(--pen)", s: 11 })).join("")}${t(130, 24, "clave de sol: sol en la 2.ª línea", { c: "var(--muted)", s: 11 })}${t(130, 160, "de do a do: una octava", { s: 12 })}`); })(),
    },
    {
      html: `<h3>Los intervalos</h3><p>Un <b>intervalo</b> es la <mark>distancia entre dos notas</mark>. Se nombra contando las notas desde la primera hasta la última, ambas incluidas:</p>${tabla(["Intervalo", "Ejemplo", "Notas que se cuentan"], [["2.ª", "do-re", "do, re"], ["3.ª", "do-mi", "do, re, mi"], ["4.ª", "do-fa", "do, re, mi, fa"], ["5.ª", "do-sol", "do … sol"], ["8.ª (octava)", "do-do'", "8 notas"]])}<p>Si las dos notas suenan una después de otra, el intervalo es <b>melódico</b>; si suenan a la vez, <b>armónico</b>. Los intervalos de 3.ª, 5.ª y 8.ª suenan estables (<b>consonantes</b>); los de 2.ª y 7.ª, más tensos (<b>disonantes</b>).</p>`,
      video: { id: "KbIRXKP6GfY", titulo: "Qué es un intervalo musical", canal: "Jaime Altozano", vistas: 2017748 },
    },
    {
      html: `<h3>Tonos, semitonos y la escala</h3><p>El <b>semitono</b> es la distancia más pequeña que se usa en nuestra música (de una tecla del piano a la siguiente, blanca o negra). Dos semitonos forman un <b>tono</b>.</p><p>Entre las notas naturales hay un tono, <b>excepto entre mi-fa y si-do</b>, donde hay un semitono (en el piano no hay tecla negra entre ellas).</p><p>Una <b>escala</b> es una sucesión ordenada de notas. La <b>escala de do mayor</b> sigue el esquema:</p><p style="text-align:center"><mark>T – T – S – T – T – T – S</mark></p><p>Cualquier escala mayor sigue ese mismo patrón; por eso la de sol mayor necesita un fa♯ y la de fa mayor, un si♭.</p>`,
      svg: svg("Teclado de piano de do a do con los tonos y los semitonos de la escala mayor: T T S T T T S", `${[...Array(8)].map((_, i) => `<rect x="${24 + i * 26}" y="40" width="26" height="90" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}${[0, 1, 3, 4, 5].map((i) => `<rect x="${42 + i * 26}" y="40" width="16" height="54" fill="var(--ink)"/>`).join("")}
        ${["do", "re", "mi", "fa", "sol", "la", "si", "do"].map((n, i) => t(37 + i * 26, 122, n, { c: "var(--muted)", s: 9 })).join("")}
        ${["T", "T", "S", "T", "T", "T", "S"].map((x, i) => t(50 + i * 26, 152, x, { c: x === "S" ? "var(--red)" : "var(--pen)", s: 13 })).join("")}${t(130, 26, "escala de do mayor", { s: 12 })}`),
      video: { id: "OdYIS8KXdFI", titulo: "Qué es una escala musical", canal: "Jaime Altozano", vistas: 2742866 },
    },
    {
      html: `<h3>La melodía</h3><p>La <b>melodía</b> es una sucesión de sonidos de distinta altura y duración que tiene <b>sentido musical</b>: es la parte que recordamos y cantamos de una canción.</p><p>Para describir una melodía se observa:</p><ul><li>El <b>ámbito</b>: la distancia entre la nota más grave y la más aguda.</li><li>El <b>movimiento</b>: <b>por grados conjuntos</b> (notas seguidas, como en una escala) o <b>por saltos</b> (intervalos mayores).</li><li>El <b>perfil</b>: ascendente, descendente, ondulado o en arco.</li><li>Las <b>frases</b>: partes con sentido completo, como las frases de un texto. Suelen terminar en una nota de reposo, la <b>cadencia</b>.</li></ul><p>«Himno a la alegría» de Beethoven se mueve casi siempre por grados conjuntos; «Somewhere over the rainbow» empieza con un gran salto de octava.</p>`,
      svg: (() => { const p = penta(14, 246, 50, 10); const m = [0, 0, 1, 2, 2, 1, 0, -1, -2, -2, -1, 0]; return svg("Comienzo del Himno a la alegría: notas que suben y bajan por grados conjuntos", `${p.s}${m.map((h, i) => p.nota(28 + i * 18, h, { plica: false, c: "var(--pen)" })).join("")}<path d="${m.map((h, i) => `${i ? "L" : "M"}${28 + i * 18} ${p.Y(h) - 14}`).join(" ")}" fill="none" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="3 3"/>${t(130, 30, "perfil ondulado por grados conjuntos", { c: "var(--red)", s: 11 })}${t(130, 128, "mi mi fa sol sol fa mi re do do re mi", { s: 10 })}`); })(),
    },
    {
      html: `<h3>La armonía y los acordes</h3><p>La <b>armonía</b> estudia los sonidos que suenan <b>a la vez</b> y cómo se enlazan. Su unidad es el <b>acorde</b>: tres o más notas simultáneas.</p><p>El acorde más común es la <b>tríada</b>, formada por una nota (la <b>fundamental</b>) y las notas a distancia de <b>3.ª y 5.ª</b>: do-mi-sol, fa-la-do, sol-si-re. Se escriben «apilados» en el pentagrama, como un muñeco de nieve: línea-línea-línea o espacio-espacio-espacio.</p><ul><li>Acorde <b>mayor</b>: suena luminoso (do-mi-sol).</li><li>Acorde <b>menor</b>: suena más triste (la-do-mi, o do-mi♭-sol).</li></ul><p>En los cifrados de las canciones, C = do, D = re, E = mi, F = fa, G = sol, A = la, B = si; y una «m» indica menor (Am = la menor).</p>`,
      svg: (() => { const p = penta(14, 246, 50, 10); const ac = [[0, "do", "C"], [3, "fa", "F"], [4, "sol", "G"], [5, "la m", "Am"]]; return svg("Cuatro acordes en el pentagrama: do mayor, fa mayor, sol mayor y la menor", `${p.s}${ac.map(([f, n, c], i) => [0, 2, 4].map((d) => p.nota(46 + i * 56, f - 2 + d, { plica: false, c: i === 3 ? "var(--pen)" : "var(--leaf)" })).join("") + t(46 + i * 56, 128, n, { s: 11 }) + t(46 + i * 56, 146, c, { c: "var(--red)", s: 13 })).join("")}${t(130, 30, "tríadas: fundamental, 3.ª y 5.ª", { c: "var(--muted)", s: 11 })}`); })(),
      video: { id: "YDX4xULlkwc", titulo: "Qué es un acorde. Tipos de acordes", canal: "Jaime Altozano", vistas: 1672332 },
    },
    {
      html: `<h3>Los grados y las cadencias</h3><p>Sobre cada nota de la escala se puede construir un acorde. Se numeran con <b>números romanos</b>. En do mayor, los tres más importantes son:</p>${tabla(["Grado", "Nombre", "Acorde en do mayor", "Función"], [["I", "tónica", "do-mi-sol (C)", "reposo, «casa»"], ["IV", "subdominante", "fa-la-do (F)", "alejamiento suave"], ["V", "dominante", "sol-si-re (G)", "tensión que pide volver a I"]])}<p>Con estos tres acordes se pueden acompañar cientos de canciones populares. El enlace <b>V → I</b> es la <b>cadencia perfecta</b>, la que suena a final. Si una frase acaba en V, suena «en suspenso» (semicadencia), como una pregunta.</p>`,
    },
    {
      html: `<h3>Tonalidad: modo mayor y modo menor</h3><p>La <b>tonalidad</b> es la organización de una obra alrededor de una nota principal, la <b>tónica</b>, que da nombre al tono: «Sinfonía en re mayor».</p><ul><li>En el <b>modo mayor</b> la 3.ª desde la tónica está a 2 tonos (do-mi). Suele asociarse a ambientes alegres o enérgicos.</li><li>En el <b>modo menor</b> la 3.ª está a tono y medio (la-do). Suele asociarse a ambientes tristes, misteriosos o dramáticos.</li></ul><p>Cada tonalidad mayor tiene una <b>relativa menor</b> con las mismas notas: do mayor y la menor no tienen alteraciones. Muchas bandas sonoras juegan con el cambio de modo para cambiar la emoción de una escena.</p>`,
      video: { id: "o6aOC3rERF0", titulo: "Qué son las tonalidades. Tonalidad mayor y menor", canal: "Jaime Altozano", vistas: 2869828 },
    },
    {
      html: `<h3>Acompañar una canción</h3><p>Para acompañar una melodía con acordes:</p><ol><li>Busca la <b>tonalidad</b>: la nota en la que la canción «descansa» al final.</li><li>Prueba los acordes <b>I, IV y V</b> en cada compás y elige el que contenga las notas principales de la melodía.</li><li>Termina con <b>V → I</b>.</li></ol><p>Ejemplo en do mayor: «Cumpleaños feliz» se puede acompañar con C – G – G – C – C – F – C G C. Con instrumentos de aula (xilófonos, guitarra, teclado o ukelele) se toca el acorde completo o solo su <b>bajo</b> (la nota fundamental) en el primer pulso de cada compás.</p><p>La secuencia I – V – vi – IV (C – G – Am – F) es tan frecuente en el pop que se la llama «la progresión de los cuatro acordes».</p>`,
    },
  ],
  figura: {
    titulo: "Melodía y armonía en un vistazo",
    svg: filas("Resumen: notas y clave de sol; intervalos; escala mayor T T S T T T S; melodía con ámbito y perfil; acordes tríada; grados I IV V y modos", [["Notas", "do re mi fa sol la si · clave de sol", "var(--pen)"], ["Intervalo", "distancia entre dos notas: 2.ª, 3.ª, 5.ª…", "var(--inf)"], ["Escala mayor", "T T S T T T S", "var(--sun)"], ["Melodía", "ámbito · grados o saltos · frases", "var(--red)"], ["Acorde", "tríada: fundamental, 3.ª y 5.ª", "var(--leaf)"], ["Grados", "I tónica · IV · V dominante", "var(--ink)"]], 200),
  },
  video: { id: "kQlpaRTXzME", titulo: "Aprende a componer progresiones de acordes", canal: "ChordHouse", vistas: 563675, megusta: 0, busqueda: "melodía y armonía acordes" },
  quiz: mezcla([
    { q: "En clave de sol, la nota de la 2.ª línea es…", o: ["sol", "mi", "si"], a: 0, e: "Por eso se llama así." },
    { q: "El sostenido…", o: ["sube medio tono", "baja medio tono", "anula alteraciones"], a: 0, e: "♯." },
    { q: "El intervalo do-sol es una…", o: ["5.ª", "4.ª", "3.ª"], a: 0, e: "do, re, mi, fa, sol." },
    { q: "Entre mi y fa hay…", o: ["un semitono", "un tono", "dos tonos"], a: 0, e: "Igual que si-do." },
    { q: "El patrón de la escala mayor es…", o: ["T T S T T T S", "T S T T S T T", "S T T T S T T"], a: 0, e: "Do mayor." },
    { q: "Una melodía que avanza con notas seguidas va por…", o: ["grados conjuntos", "saltos", "acordes"], a: 0, e: "Como una escala." },
    { q: "Una tríada está formada por…", o: ["fundamental, 3.ª y 5.ª", "tres notas seguidas", "tres octavas"], a: 0, e: "Do-mi-sol." },
    { q: "El acorde de dominante en do mayor es…", o: ["sol-si-re", "fa-la-do", "do-mi-sol"], a: 0, e: "V grado." },
    { q: "En cifrado americano, «Am» es…", o: ["la menor", "la mayor", "re menor"], a: 0, e: "A = la, m = menor." },
    { q: "La relativa menor de do mayor es…", o: ["la menor", "do menor", "mi menor"], a: 0, e: "Mismas notas." },
  ]),
  examen: mezcla([
    { q: "La cadencia que suena a final es…", o: ["V → I", "I → V", "I → IV"], a: 0, e: "Cadencia perfecta." },
    { q: "La escala de sol mayor necesita…", o: ["fa♯", "si♭", "ninguna alteración"], a: 0, e: "Para cumplir T T S T T T S." },
    { q: "Si dos notas suenan a la vez, el intervalo es…", o: ["armónico", "melódico", "rítmico"], a: 0, e: "Simultáneo." },
  ]),
  feynman: ["Cómo se leen las notas en clave de sol", "Cómo se cuenta un intervalo", "Por qué la escala mayor tiene dos semitonos", "Qué es un acorde y cómo se forma", "Diferencia entre modo mayor y menor"],
  mapa: mapa("MELODÍA Y ARMONÍA", "var(--eso)", [
    ["Notas e intervalos", "pentagrama · distancias", "var(--pen)"],
    ["Escala", "T T S T T T S", "var(--sun)"],
    ["Melodía", "ámbito · perfil · frases", "var(--red)"],
    ["Armonía", "acordes · I IV V · modos", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Pentagrama", "Cinco líneas y cuatro espacios para escribir música."],
    ["Intervalo", "Distancia entre dos notas."],
    ["Semitono", "La distancia más pequeña: mi-fa y si-do."],
    ["Escala mayor", "T T S T T T S."],
    ["Melodía", "Sucesión de sonidos con sentido musical."],
    ["Acorde", "Tres o más notas a la vez."],
    ["Tónica", "Grado I: nota y acorde de reposo."],
    ["Dominante", "Grado V: tensión que pide volver a la tónica."],
  ],
  familias: ["Cantad una canción conocida y buscad juntos la nota en la que «descansa».", "Escuchad la misma canción versionada en mayor y en menor (hay muchas en internet) y comentad la emoción.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lectura de notas; intervalos; escalas mayor y menor; elementos de la melodía; acordes, grados tonales y cadencias; tonalidad y modo (RD 217/2022, Música, lenguaje musical, creación e interpretación).",
    ideas: ["Acompañar canciones populares con I-IV-V en láminas o ukelele.", "Componer una melodía de 8 compases que termine con cadencia perfecta.", "Dictado de perfiles melódicos dibujados."],
  },
  fuentes: [RD, { t: "musictheory.net: lecciones de teoría musical (en español)", url: "https://www.musictheory.net/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Calcula el intervalo re-la y di si es consonante.", pasos: ["Contamos: re, mi, fa, sol, la.", "Son 5 notas: una 5.ª.", "Las 5.as justas son consonantes."], resultado: "5.ª, consonante." },
    { enunciado: "Forma el acorde sobre el IV grado de sol mayor.", pasos: ["Escala de sol: sol, la, si, do, re, mi, fa♯.", "IV grado: do.", "Tríada: do-mi-sol."], resultado: "Do mayor (C)." },
    { enunciado: "Construye la escala de re mayor.", pasos: ["Desde re aplicamos T T S T T T S.", "re-mi (T), mi-fa♯ (T), fa♯-sol (S), sol-la (T), la-si (T), si-do♯ (T), do♯-re (S).", "Hacen falta fa♯ y do♯."], resultado: "re, mi, fa♯, sol, la, si, do♯, re." },
  ],
  errores: [
    "Contar los intervalos sin incluir la primera nota.",
    "Pensar que entre todas las notas naturales hay un tono.",
    "Confundir melodía (sucesiva) con armonía (simultánea).",
    "Leer las notas contando las líneas desde arriba.",
    "Creer que el modo menor es siempre triste y el mayor siempre alegre: también depende del tempo, el ritmo y la interpretación.",
  ],
  ejercicios: [
    { q: "¿Qué nota hay en el 3.er espacio en clave de sol? ¿Y en la 5.ª línea?", sol: "do y fa." },
    { q: "Nombra los intervalos: do-fa, mi-sol, sol-re, la-la'.", sol: "4.ª, 3.ª, 5.ª, 8.ª." },
    { q: "¿Entre qué notas naturales hay un semitono?", sol: "mi-fa y si-do." },
    { q: "Escribe la escala de fa mayor.", sol: "fa, sol, la, si♭, do, re, mi, fa." },
    { q: "Describe el movimiento de «do-re-mi-fa-sol» y de «do-sol-do'».", sol: "Grados conjuntos ascendente; por saltos." },
    { q: "Forma las tríadas sobre do, fa y sol en do mayor.", sol: "do-mi-sol, fa-la-do, sol-si-re." },
    { q: "¿Por qué la-do-mi es un acorde menor?", sol: "Porque la 3.ª la-do es de tono y medio (menor)." },
    { q: "Traduce el cifrado G – Em – C – D.", sol: "Sol mayor, mi menor, do mayor, re mayor." },
    { q: "¿Cuál es la relativa menor de sol mayor?", sol: "Mi menor (un tono y medio por debajo de la tónica)." },
    { q: "Inventa una melodía de 4 compases en do mayor que termine en do y acompáñala con I, IV y V.", sol: "Respuesta abierta; debe acabar con el acorde de sol seguido de do." },
  ],
};
