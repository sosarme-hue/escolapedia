// Música 1º ESO: interpretación y creación musical. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, penta, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "Interpretación y creación musical",
  minutos: 50,
  objetivos: ["Conocer las pautas para interpretar música en grupo", "Practicar la técnica básica de la flauta dulce y la percusión", "Crear ritmos, melodías y acompañamientos sencillos", "Valorar el ensayo, la escucha y el respeto en la práctica musical"],
  claves: ["interpretación", "ensayo", "director", "improvisación", "ostinato", "composición"],
  pregunta: {
    texto: "¿Hace falta ser un genio para componer música?",
    respuesta: "No. Componer es <b>tomar decisiones</b> con sonidos: qué notas, qué ritmo, qué instrumentos. Igual que escribes una redacción con palabras que ya conoces, <mark>puedes crear una melodía con tres o cuatro notas que ya sabes tocar</mark>. Los grandes compositores también empezaron con piezas sencillas, y practicaron muchísimo.",
  },
  bloques: [
    {
      html: `<h3>Interpretar y crear</h3><p>En música hay tres formas principales de participar:</p><ul><li><b>Escuchar</b>: recibir la música con atención.</li><li><b>Interpretar</b>: hacer sonar una música, propia o de otros, con la voz, un instrumento o el cuerpo. El intérprete no solo reproduce notas: decide matices, expresión y carácter.</li><li><b>Crear</b>: inventar música nueva, ya sea improvisando en el momento o componiendo y escribiéndola.</li></ul><p>En clase de Música vas a hacer las tres cosas. No se trata de ser un virtuoso, sino de <b>disfrutar</b>, <b>expresarte</b> y aprender a <b>trabajar en grupo</b>, porque la música, casi siempre, se hace con otros.</p>`,
    },
    {
      html: `<h3>Tocar en grupo</h3><p>Tocar en un conjunto es como jugar en un equipo: cada uno tiene su papel y todos dependen de todos. Normas básicas:</p><ol><li><b>Silencio</b> antes de empezar y entre piezas. Los instrumentos no se tocan mientras otro explica.</li><li><b>Mirar al director</b>: marca la entrada, el tempo, los matices y el final.</li><li><b>Escuchar a los demás</b>: si no oyes a tus compañeros, estás tocando demasiado fuerte.</li><li><b>Contar</b> los compases de silencio para entrar a tiempo.</li><li>Si te equivocas, <b>no pares</b>: sigue contando y vuelve a entrar.</li></ol><p>El <b>director</b> marca el pulso con gestos: en un compás de 4/4 dibuja en el aire abajo, izquierda, derecha y arriba.</p>`,
      svg: svg("Gesto del director en compás de cuatro por cuatro: abajo (1), a la izquierda (2), a la derecha (3) y arriba (4)", `<path d="M132 36 Q 128 90 126 136 Q 96 124 64 100 Q 130 116 202 100 Q 172 62 132 36" fill="none" stroke="var(--pen)" stroke-width="2.5"/>${[[126, 140, "1"], [64, 100, "2"], [202, 100, "3"], [132, 32, "4"]].map(([x, y, n]) => `<circle cx="${x}" cy="${y}" r="10" fill="var(--red)" fill-opacity=".85"/>${t(x, y + 4, n, { s: 11, c: "var(--paper)" })}`).join("")}${t(130, 168, "compás de 4/4: abajo, izquierda, derecha, arriba", { s: 10 })}`, 180),
    },
    {
      html: `<h3>La flauta dulce</h3><p>La <b>flauta dulce</b> soprano es un aerófono de bisel fácil de transportar y muy usado en el aula. Técnica básica:</p><ul><li><b>Postura</b>: espalda recta, flauta inclinada unos 45°, codos relajados.</li><li><b>Manos</b>: la <b>izquierda arriba</b> (pulgar tapa el agujero de atrás) y la derecha abajo.</li><li><b>Dedos</b>: tapa los agujeros con la <b>yema</b>, no con la punta.</li><li><b>Soplo</b>: suave y constante, como si dijeras «tu» o «du». Si soplas fuerte, sale un pitido.</li><li><b>Articulación</b>: cada nota empieza con un golpe de lengua («tu»).</li></ul><p>Las primeras notas que se aprenden son <b>si, la y sol</b>: con ellas ya se pueden tocar muchas melodías. Después vienen el do y el re agudos y, más adelante, las notas graves.</p>`,
      svg: svg("Digitación de la flauta dulce: si con pulgar y un dedo, la con pulgar y dos, sol con pulgar y tres", `${[["si", 1], ["la", 2], ["sol", 3]].map(([n, k], j) => `<g transform="translate(${30 + j * 80} 0)"><rect x="16" y="20" width="22" height="130" rx="10" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2"/><circle cx="8" cy="40" r="5" fill="var(--ink)"/>${[...Array(7)].map((_, i) => `<circle cx="27" cy="${48 + i * 14}" r="5" fill="${i < k ? "var(--ink)" : "var(--paper)"}" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}${t(27, 170, n, { s: 12, c: "var(--pen)" })}</g>`).join("")}${t(8, 14, "pulgar", { s: 9, a: "start", c: "var(--muted)" })}`, 180),
      video: vb("creB2"),
    },
    {
      html: `<h3>La percusión corporal y escolar</h3><p>El cuerpo es un instrumento completo. La <b>percusión corporal</b> usa cuatro sonidos básicos, de grave a agudo:</p>${tabla(["Sonido", "Cómo se hace", "Timbre"], [["Pies", "golpe en el suelo", "grave"], ["Muslos", "palmas sobre las piernas", "medio grave"], ["Palmas", "dar palmas", "medio agudo"], ["Pitos", "chasquido de dedos", "agudo"]])}<p>Con la <b>percusión escolar</b> (claves, caja china, pandero, triángulo, xilófonos) se pueden hacer acompañamientos. Consejo: sujeta los instrumentos de forma que <b>puedan vibrar</b> (el triángulo colgado, no agarrado) y toca siempre controlando el volumen.</p>`,
      video: vb("creB"),
    },
    {
      html: `<h3>Improvisar</h3><p><b>Improvisar</b> es crear música en el momento, sin haberla escrito antes. Parece difícil, pero con unas reglas sencillas es fácil:</p><ul><li><b>Pregunta y respuesta</b>: el profesor toca un ritmo de un compás y cada alumno responde con otro inventado.</li><li><b>Notas limitadas</b>: improvisa una melodía usando solo <b>si, la y sol</b> sobre un acompañamiento.</li><li><b>Escala pentatónica</b>: en el xilófono, quita las láminas de <b>fa</b> y <b>si</b>. Con las cinco notas restantes (do, re, mi, sol, la) casi todo suena bien.</li></ul><p>La improvisación es la base del <b>jazz</b>, de muchas músicas tradicionales y del flamenco.</p>`,
    },
    {
      html: `<h3>El ostinato y el acompañamiento</h3><p>Un <b>ostinato</b> es un ritmo o una melodía corta que se <b>repite sin parar</b>. Es la forma más sencilla de acompañar una canción.</p><ul><li><b>Ostinato rítmico</b>: por ejemplo, «negra, negra, corchea-corchea, negra» con las claves.</li><li><b>Ostinato melódico</b>: dos o tres notas que se repiten en el xilófono, como do-sol, do-sol.</li><li><b>Bordón</b>: dos notas tocadas a la vez (do y sol) en el primer pulso de cada compás, como un «suelo» sobre el que se apoya la melodía.</li></ul><p>Combinando varios ostinatos a la vez (uno grave, uno medio y uno agudo) se crea una <b>textura</b> rica, como en muchas músicas del mundo.</p>`,
    },
    {
      html: `<h3>Componer una melodía</h3><p>Pasos para crear tu primera melodía de cuatro compases en 4/4:</p><ol><li>Elige las notas: <b>sol, la, si</b> (y do si te atreves).</li><li>Empieza y <b>termina en sol</b>: así sonará «acabada».</li><li>Mezcla <b>pasos</b> (notas vecinas) con algún <b>salto</b>.</li><li>Usa un ritmo sencillo: negras, blancas y alguna pareja de corcheas.</li><li>Haz que el compás 3 se parezca al 1 (<b>repetición</b>): da unidad.</li><li>Acaba con una nota <b>larga</b> (blanca o redonda).</li></ol><p>Toca tu melodía, corrige lo que no te guste, escríbela y ponle título. Ya eres compositor.</p>`,
      svg: (() => { const p = penta(10, 250, 40, 10); return svg("Melodía original de ejemplo en clave de sol con las notas sol, la, si, la, sol y una blanca final, en cuatro por cuatro", `${p.s}${t(22, 56, "4", { s: 15, d: true })}${t(22, 76, "4", { s: 15, d: true })}${p.nota(46, 2)}${p.nota(66, 3)}${p.nota(86, 4, { blanca: true })}${p.barra(110)}${p.nota(126, 3)}${p.nota(146, 4)}${p.nota(166, 3)}${p.nota(186, 2)}${p.barra(204)}${p.nota(226, 2, { redonda: true, blanca: true })}<path d="M244 40 V 80" stroke="var(--ink)" stroke-width="4"/>${t(130, 128, "sol la si · la si la sol · sol", { s: 11, c: "var(--pen)" })}${t(130, 150, "empieza y termina en sol", { s: 10, c: "var(--muted)" })}`, 166); })(),
    },
    {
      html: `<h3>Ensayar y actuar</h3><p>Una actuación musical, aunque sea en clase, se prepara:</p><ul><li><b>Ensayo por partes</b>: primero cada grupo de instrumentos su parte, despacio; después, todos juntos.</li><li><b>Tempo lento</b> al principio y más rápido cuando sale bien.</li><li><b>Grabaros</b> con el móvil y escuchaos: se oyen cosas que tocando no se notan.</li><li>Antes de actuar: respira hondo, mira al director y piensa en el primer compás.</li><li>Al terminar, <b>saluda</b> y agradece el aplauso. Y cuando escuches a otros, sé un público respetuoso.</li></ul><p>Los nervios son normales: hasta los profesionales los sienten. Se controlan con preparación y respiración.</p>`,
    },
  ],
  figura: {
    titulo: "Interpretación y creación en un vistazo",
    svg: filas("Resumen: escuchar, interpretar y crear; normas de grupo; flauta dulce con si, la y sol; percusión corporal; improvisación; ostinato y bordón; componer una melodía; ensayar", [["Interpretar", "voz · instrumento · cuerpo", "var(--pen)"], ["En grupo", "silencio · director · escuchar", "var(--red)"], ["Flauta", "si · la · sol · soplo suave", "var(--sun)"], ["Improvisar", "pregunta-respuesta · pentatónica", "var(--leaf)"], ["Acompañar", "ostinato · bordón", "var(--inf)"], ["Componer", "empezar y acabar en sol", "var(--ink)"]], 200),
  },
  video: vg("creV"),
  quiz: mezcla([
    { q: "Crear música en el momento, sin escribirla, es…", o: ["improvisar", "ensayar", "transcribir"], a: 0, e: "Base del jazz." },
    { q: "En la flauta dulce, la mano de arriba es la…", o: ["izquierda", "derecha", "cualquiera"], a: 0, e: "Pulgar izquierdo detrás." },
    { q: "Para tocar la flauta hay que soplar…", o: ["suave y constante", "lo más fuerte posible", "a golpes"], a: 0, e: "Si no, pita." },
    { q: "Si en la flauta tapo el pulgar y los tres primeros agujeros suena…", o: ["sol", "si", "la"], a: 0, e: "Pulgar + 1 + 2 + 3." },
    { q: "Un ritmo corto que se repite sin parar es un…", o: ["ostinato", "leitmotiv", "silencio"], a: 0, e: "Acompañamiento." },
    { q: "El sonido más grave de la percusión corporal son los…", o: ["pies", "pitos", "palmas"], a: 0, e: "Golpe en el suelo." },
    { q: "La escala pentatónica tiene…", o: ["5 notas", "7 notas", "3 notas"], a: 0, e: "Penta = cinco." },
    { q: "El bordón son…", o: ["dos notas tocadas a la vez como base", "una melodía rápida", "un tipo de flauta"], a: 0, e: "Do y sol." },
    { q: "Si te equivocas tocando en grupo debes…", o: ["seguir contando y volver a entrar", "parar a todos", "empezar de nuevo"], a: 0, e: "No se para." },
    { q: "En 4/4, el primer gesto del director es hacia…", o: ["abajo", "arriba", "la derecha"], a: 0, e: "Pulso 1." },
  ]),
  examen: mezcla([
    { q: "Para que una melodía en sol suene «terminada», conviene acabar en…", o: ["sol", "si", "la"], a: 0, e: "Nota de reposo." },
    { q: "¿Qué láminas se quitan del xilófono en do para tener la pentatónica?", o: ["fa y si", "do y sol", "re y la"], a: 0, e: "Quedan do re mi sol la." },
    { q: "Si no oyes a tus compañeros al tocar en grupo…", o: ["tocas demasiado fuerte", "tocas bien", "tocas lento"], a: 0, e: "Escuchar es clave." },
  ]),
  feynman: ["Diferencia entre interpretar y crear", "Normas para tocar en grupo", "Técnica básica de la flauta dulce", "Qué es un ostinato y cómo acompaña", "Pasos para componer una melodía"],
  mapa: mapa("INTERPRETAR Y CREAR", "var(--eso)", [
    ["Interpretar", "voz · flauta · percusión", "var(--pen)"],
    ["Grupo", "director · escucha · silencio", "var(--red)"],
    ["Improvisar", "pregunta-respuesta", "var(--leaf)"],
    ["Componer", "notas · ritmo · repetición", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Interpretar", "Hacer sonar una música con voz, instrumento o cuerpo."],
    ["Improvisar", "Crear música en el momento."],
    ["Componer", "Crear música nueva y fijarla, por escrito o grabada."],
    ["Ostinato", "Ritmo o melodía corta que se repite sin parar."],
    ["Bordón", "Dos notas simultáneas que sirven de base."],
    ["Pentatónica", "Escala de cinco notas: do, re, mi, sol, la."],
    ["Director", "Marca entradas, tempo, matices y final."],
    ["Ensayo", "Práctica por partes y en conjunto antes de actuar."],
  ],
  familias: ["Pedid a vuestro hijo o hija que os enseñe la melodía que ha compuesto.", "Inventad juntos un ostinato de percusión corporal.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Interpretación vocal, instrumental y corporal; normas de la práctica en grupo; improvisación y composición de piezas sencillas; ensayo y actuación (RD 217/2022, Música, interpretación, improvisación y creación).",
    ideas: ["Banco de ostinatos creados por los grupos para acompañar una melodía común.", "Concierto final de trimestre con las melodías compuestas por los alumnos.", "Improvisación en pentatónica con xilófonos sobre un bordón."],
  },
  fuentes: [RD, { t: "Real Conservatorio Superior de Música de Madrid", url: "https://rcsmm.eu/" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Crea un ostinato de percusión corporal de un compás de 4/4.", pasos: ["Pulso 1: pies.", "Pulso 2: palmas.", "Pulso 3: muslos dos veces (dos corcheas).", "Pulso 4: palmas."], resultado: "Pies, palmas, muslos-muslos, palmas: se repite sin parar." },
    { enunciado: "Comprueba si esta melodía de 4/4 está bien construida: sol (negra), la (negra), si (blanca) | la (negra), sol (negra), la (blanca).", pasos: ["Cada compás suma 1 + 1 + 2 = 4: correcto.", "Empieza en sol, pero termina en la.", "Una melodía en sol suena más acabada si termina en sol."], resultado: "El ritmo es correcto; conviene cambiar la última nota por sol." },
    { enunciado: "Prepara una improvisación de pregunta y respuesta en parejas.", pasos: ["A toca un compás con si y la.", "B responde con un compás que use la y sol y termine en sol.", "Se repite cambiando los papeles."], resultado: "Un diálogo musical de cuatro compases." },
  ],
  errores: [
    "Soplar demasiado fuerte la flauta (sale un pitido).",
    "Tapar los agujeros con la punta del dedo en vez de con la yema.",
    "Parar cuando uno se equivoca tocando en grupo.",
    "Pensar que improvisar es tocar cualquier cosa sin escuchar.",
    "Creer que componer exige saber muchas notas.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre interpretar, improvisar y componer.", sol: "Interpretar: hacer sonar una música; improvisar: crear en el momento; componer: crear y fijar la música." },
    { q: "Escribe cinco normas para tocar en grupo.", sol: "Silencio, mirar al director, escuchar, contar los silencios, no parar si te equivocas." },
    { q: "Describe la posición de las manos en la flauta dulce.", sol: "Izquierda arriba con el pulgar detrás; derecha abajo; dedos con la yema." },
    { q: "¿Qué agujeros se tapan para el si, el la y el sol?", sol: "Si: pulgar + 1. La: pulgar + 1 + 2. Sol: pulgar + 1 + 2 + 3." },
    { q: "Ordena de grave a agudo los sonidos de la percusión corporal.", sol: "Pies, muslos, palmas, pitos." },
    { q: "¿Qué es un ostinato? Escribe uno rítmico de un compás.", sol: "Un fragmento que se repite; ejemplo: negra, negra, corchea-corchea, negra." },
    { q: "¿Qué notas forman la escala pentatónica de do?", sol: "Do, re, mi, sol y la." },
    { q: "Dibuja el gesto del director en 3/4.", sol: "Abajo, derecha, arriba (forma de triángulo)." },
    { q: "Compón una melodía de cuatro compases con sol, la y si que empiece y termine en sol.", sol: "Respuesta abierta." },
    { q: "Graba tu melodía, escúchala y escribe dos cosas que mejorarías.", sol: "Respuesta personal." },
  ],
};
