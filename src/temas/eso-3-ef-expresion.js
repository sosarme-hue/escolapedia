// Educación Física 3º ESO: expresión corporal, ritmo y acrosport. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, caja, tabla, filas, mezcla } = require("./_eso3");

const M = "Educación Física";

module.exports = {
  materia: M,
  curso: C,
  titulo: "Expresión corporal, ritmo y acrosport",
  minutos: 50,
  objetivos: ["Usar el cuerpo como medio de expresión y comunicación", "Adaptar el movimiento al ritmo musical contando tiempos y frases", "Conocer los roles, agarres y normas de seguridad del acrosport", "Crear y presentar en grupo una coreografía con figuras"],
  claves: ["expresión corporal", "lenguaje no verbal", "ritmo", "coreografía", "acrosport", "portor"],
  pregunta: {
    texto: "¿Se puede contar una historia completa sin decir una sola palabra?",
    respuesta: "Sí: el <mark>cuerpo también habla</mark>. Con gestos, posturas, miradas y movimientos al ritmo de la música se transmiten emociones e ideas, como hacen el mimo, la danza o el teatro de gesto. En el <b>acrosport</b>, además, el grupo construye figuras humanas que solo funcionan con confianza y cooperación.",
  },
  bloques: [
    {
      html: `<h3>El cuerpo como lenguaje</h3><p>La <b>expresión corporal</b> utiliza el cuerpo y el movimiento para <mark>comunicar emociones, sentimientos e ideas</mark>. Más de la mitad de lo que comunicamos es <b>no verbal</b>:</p><ul><li><b>Gestos</b>: movimientos de manos, brazos y cabeza.</li><li><b>Expresión facial</b>: la cara muestra alegría, miedo, sorpresa, enfado…</li><li><b>Mirada</b>: sostenerla transmite seguridad; evitarla, timidez.</li><li><b>Postura</b>: erguida, encogida, abierta, cerrada.</li><li><b>Espacio</b>: distancia con los demás (proxémica).</li></ul><p>Trabajar la expresión corporal mejora la <b>autoestima</b>, la <b>desinhibición</b>, la creatividad y la capacidad de comunicarse con los demás.</p>`,
    },
    {
      html: `<h3>Los recursos expresivos</h3><p>El movimiento expresivo se construye combinando:</p>${tabla(["Recurso", "Posibilidades"], [["<b>Cuerpo</b>", "partes que se mueven, posturas, tensión y relajación"], ["<b>Espacio</b>", "niveles (alto, medio, bajo), direcciones, trayectorias, cerca o lejos"], ["<b>Tiempo</b>", "rápido, lento, pausas, ritmo"], ["<b>Energía</b>", "movimientos fuertes o suaves, continuos o cortados"], ["<b>Relación</b>", "solo, en pareja, en grupo; espejo, eco, contraste"]])}<p>Técnicas expresivas: el <b>mimo</b> (contar sin palabras con objetos imaginarios), la <b>dramatización</b>, las <b>estatuas</b> o imágenes congeladas, las <b>sombras chinescas</b> y la <b>danza</b>.</p>`,
    },
    {
      html: `<h3>El ritmo y la música</h3><p>Para moverse con la música hay que entender su estructura:</p><ul><li><b>Pulso</b>: el latido regular de la canción, lo que marcamos con el pie sin darnos cuenta.</li><li><b>Tiempo</b> o compás: los pulsos se agrupan, casi siempre de 4 en 4 en la música actual.</li><li><b>Frase musical</b>: en coreografía se cuentan <mark>bloques de 8 tiempos</mark> («5, 6, 7, 8… ¡y!»).</li><li><b>Tempo</b>: la velocidad, medida en pulsaciones por minuto (bpm). Una canción de baile suele tener entre 100 y 130 bpm.</li></ul><p>Contar los ochos permite que todo el grupo empiece, cambie de paso y termine a la vez.</p>`,
      svg: svg("Frase musical de 8 tiempos: los tiempos 1 y 5 marcados como acentos, contados en voz alta", `${Array.from({ length: 8 }, (_, i) => `<circle cx="${30 + i * 29}" cy="80" r="${i % 4 === 0 ? 13 : 9}" fill="${i % 4 === 0 ? "var(--red)" : "var(--pen)"}" fill-opacity="${i % 4 === 0 ? 0.8 : 0.4}"/>${t(30 + i * 29, 84, i + 1, { c: "#fff", s: 11 })}`).join("")}
        <path d="M18 112 H 242" stroke="var(--muted)" stroke-width="1.5"/>${t(130, 132, "un «ocho» = una frase de baile", { c: "var(--muted)", s: 11 })}${t(130, 40, "acentos en 1 y 5", { c: "var(--red)", s: 11 })}`),
    },
    {
      html: `<h3>Crear una coreografía</h3><p>Una <b>coreografía</b> es una secuencia de movimientos organizada en el tiempo y el espacio. Pasos para crearla en grupo:</p><ol><li>Elegir la <b>música</b> (con letra adecuada) y la <b>idea</b> o historia.</li><li>Dividir la canción en <b>bloques de ochos</b>: introducción, partes y final.</li><li>Crear los <b>pasos</b> de cada bloque y aprenderlos contando.</li><li>Diseñar las <b>formaciones</b> en el espacio: líneas, círculo, cuña, filas que se cruzan.</li><li>Añadir recursos: <b>canon</b> (cada uno empieza un ocho después), <b>espejo</b>, contraste de niveles.</li><li><b>Ensayar</b>, grabar y mejorar.</li></ol><p>El inicio y el final, con una posición clara y quieta, dan mucha fuerza a la presentación.</p>`,
    },
    {
      html: `<h3>¿Qué es el acrosport?</h3><p>El <b>acrosport</b> es una actividad gimnástica y cooperativa en la que un grupo construye <mark>figuras humanas</mark> o pirámides y las enlaza con movimientos coreográficos y acrobáticos, al ritmo de la música.</p><p>Cada persona tiene un <b>rol</b>:</p><ul><li><b>Portor</b> o base: sostiene a los compañeros. Necesita una buena base de apoyo y fuerza.</li><li><b>Ágil</b> o volteador: sube y forma la parte alta de la figura. Necesita equilibrio y control.</li><li><b>Ayudante</b>: ayuda a subir y bajar, vigila y está preparado para sujetar si alguien pierde el equilibrio.</li></ul><p>Los roles <b>rotan</b>, y todos importan: sin portores sólidos y ayudantes atentos no hay figura.</p>`,
      svg: svg("Figura de acrosport: dos portores en cuadrupedia y un ágil de pie sobre ellos, con un ayudante al lado", `<path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/>
        <path d="M42 116 H 84 M44 116 V 150 M82 116 V 150 M106 116 H 148 M108 116 V 150 M146 116 V 150" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/><circle cx="34" cy="112" r="7" fill="var(--pen)"/><circle cx="156" cy="112" r="7" fill="var(--pen)"/>
        <path d="M84 112 L 95 76 L 106 112" stroke="var(--red)" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M95 76 V 46 M95 56 L 75 44 M95 56 L 115 44" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/><circle cx="95" cy="36" r="8" fill="var(--red)"/>
        <path d="M200 150 L 206 110 L 212 150 M206 110 V 84 M206 92 L 186 98 M206 92 L 226 98" stroke="var(--leaf)" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="206" cy="74" r="8" fill="var(--leaf)"/>
        ${t(94, 168, "portores", { c: "var(--pen)", s: 11 })}${t(140, 44, "ágil", { c: "var(--red)", s: 11 })}${t(206, 168, "ayudante", { c: "var(--leaf)", s: 11 })}`),
      video: { id: "YU1LnR-DB_Y", titulo: "Teoría y trabajo de acrosport", canal: "Jesús Hernández", vistas: 37151, megusta: 0 },
    },
    {
      html: `<h3>Seguridad en el acrosport</h3><ul><li><b>Calentar</b> bien, especialmente muñecas, hombros y espalda.</li><li>Trabajar sobre <b>colchonetas</b>, descalzos o con calcetines antideslizantes, sin relojes, pulseras ni pendientes.</li><li>El ágil apoya los pies sobre zonas <b>firmes</b> del portor: la cadera (zona lumbar-sacra) o los hombros, <mark>nunca en el centro de la espalda</mark> ni en la nuca.</li><li>El portor mantiene la <b>espalda recta</b>, los brazos extendidos y las manos bajo los hombros.</li><li>Subir y bajar <b>despacio</b> y en el orden inverso: el último que sube es el primero que baja.</li><li>Comunicarse: «¿preparado?», «subo», «bajo». Si alguien dice «¡para!», se deshace la figura con control.</li><li>Empezar con figuras de 2-3 personas y progresar.</li></ul>`,
      video: { id: "7EUH7eQsD4Q", titulo: "Ante todo seguridad: acrosport", canal: "MANUEL GF", vistas: 107778, megusta: 0 },
    },
    {
      html: `<h3>Agarres y figuras</h3>${tabla(["Agarre", "Cómo es", "Uso"], [["<b>Mano-mano</b>", "palmas juntas, dedos entrelazados o enganchados", "equilibrios en pareja"], ["<b>Mano-muñeca</b>", "cada uno coge la muñeca del otro", "el más seguro para tirar o sostener"], ["<b>Pie-mano</b> (estribo)", "el portor cruza las manos para que el ágil apoye el pie", "ayudar a subir"], ["<b>Hombro</b>", "el ágil apoya un pie en el hombro del portor", "figuras en altura"]])}<p>Cada figura tiene tres fases: <b>montaje</b> (subir con control), <b>mantenimiento</b> (al menos 3 segundos de inmovilidad, con la mirada al frente) y <b>desmontaje</b> (bajar sin saltar sobre los compañeros). Al terminar, el grupo hace un <b>saludo</b> conjunto.</p>`,
    },
    {
      html: `<h3>El montaje final</h3><p>El proyecto del tema es una <b>coreografía de acrosport</b> de 2-3 minutos en grupos de 5 o 6:</p><ul><li>Inicio y final con una <b>pose</b> clara.</li><li>Entre 4 y 6 <b>figuras</b> de dificultad progresiva, con todos los roles rotando.</li><li><b>Transiciones</b> coreografiadas entre figuras: desplazamientos, giros, volteretas sencillas, pasos de baile.</li><li>Uso del <b>espacio</b> y sincronización con la <b>música</b>.</li></ul><p>Se valora la seguridad, la cooperación, la originalidad y la expresividad, no solo la dificultad. Grabar los ensayos ayuda a mejorar: el vídeo muestra lo que desde dentro no se ve.</p>`,
    },
    {
      html: `<h3>Danzas y bailes</h3><p>La expresión corporal incluye la <b>danza</b> en todas sus formas:</p><ul><li><b>Danzas del mundo</b> y <b>bailes tradicionales</b> españoles: jota, sardana, muiñeira, sevillanas. Transmiten la cultura de cada región.</li><li><b>Bailes de salón</b> y en pareja: vals, salsa, bachata, pasodoble.</li><li><b>Bailes urbanos</b>: hip hop, breaking (olímpico en París 2024), funky.</li><li><b>Aeróbic</b> y <b>zumba</b>: baile como actividad física.</li></ul><p>Todas combinan condición física (resistencia, coordinación), expresión y relación con los demás. Se baila para divertirse, no para juzgar: el respeto a cómo se mueve cada persona es la primera norma.</p>`,
    },
  ],
  figura: {
    titulo: "Expresar, bailar y construir juntos",
    svg: filas("Lenguaje no verbal: gesto, mirada, postura; ritmo: pulso y frases de 8 tiempos; coreografía; acrosport: portor, ágil y ayudante; seguridad: apoyos firmes y comunicación", [["No verbal", "gesto · cara · mirada · postura · espacio", "var(--inf)"], ["Ritmo", "pulso · frases de 8 tiempos · tempo", "var(--pen)"], ["Coreografía", "ochos · formaciones · canon · espejo", "var(--leaf)"], ["Acrosport", "portor · ágil · ayudante · rotación", "var(--red)"], ["Seguridad", "colchoneta · cadera y hombros · subir y bajar despacio", "var(--ink)"]], 200),
  },
  video: { id: "vjrrosdZLyA", titulo: "Acrosport: coreografía escolar", canal: "Jordi Llach", vistas: 237643, megusta: 0, busqueda: "acrosport figuras" },
  quiz: mezcla([
    { q: "La expresión corporal usa el cuerpo para…", o: ["comunicar emociones e ideas", "medir la fuerza", "competir"], a: 0, e: "Lenguaje no verbal." },
    { q: "Contar una historia sin palabras con objetos imaginarios es…", o: ["mimo", "acrosport", "aeróbic"], a: 0, e: "Técnica expresiva." },
    { q: "En coreografía, la música se cuenta en bloques de…", o: ["8 tiempos", "3 tiempos", "12 tiempos"], a: 0, e: "Los ochos." },
    { q: "El latido regular de una canción es el…", o: ["pulso", "tempo", "estribillo"], a: 0, e: "Lo que marca el pie." },
    { q: "Hacer el mismo movimiento empezando cada uno un ocho después es un…", o: ["canon", "espejo", "unísono"], a: 0, e: "Efecto en cascada." },
    { q: "En acrosport, quien sostiene a los compañeros es el…", o: ["portor", "ágil", "ayudante"], a: 0, e: "Base." },
    { q: "El ágil nunca debe apoyar los pies en…", o: ["el centro de la espalda del portor", "la cadera", "los hombros"], a: 0, e: "Zona débil." },
    { q: "El agarre más seguro para tirar o sostener es el…", o: ["mano-muñeca", "dedo-dedo", "codo-codo"], a: 0, e: "Doble sujeción." },
    { q: "Una figura de acrosport debe mantenerse al menos…", o: ["3 segundos", "30 segundos", "medio segundo"], a: 0, e: "Inmovilidad." },
    { q: "Para deshacer una figura, el primero en bajar es…", o: ["el último que subió", "el portor", "cualquiera"], a: 0, e: "Orden inverso." },
  ]),
  examen: mezcla([
    { q: "Una canción a 120 bpm tiene…", o: ["2 pulsos por segundo", "120 pulsos por segundo", "1 pulso cada 2 s"], a: 0, e: "120 / 60." },
    { q: "La función del ayudante en acrosport es…", o: ["ayudar a subir y bajar y vigilar", "sostener la base", "subir arriba"], a: 0, e: "Seguridad." },
    { q: "El breaking fue deporte olímpico por primera vez en…", o: ["París 2024", "Barcelona 92", "Tokio 1964"], a: 0, e: "Baile urbano." },
  ]),
  feynman: ["Cómo comunica el cuerpo sin palabras", "Cómo se cuenta la música para bailar en grupo", "Los tres roles del acrosport", "Normas de seguridad del acrosport"],
  mapa: mapa("EXPRESIÓN", "var(--eso)", [
    ["No verbal", "gesto · mirada", "var(--inf)"],
    ["Ritmo", "pulso · ochos", "var(--pen)"],
    ["Acrosport", "portor · ágil", "var(--red)"],
    ["Seguridad", "apoyos · orden", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Expresión corporal", "Comunicar con el cuerpo emociones e ideas."],
    ["Mimo", "Contar sin palabras con objetos imaginarios."],
    ["Pulso", "Latido regular de la música."],
    ["Ocho", "Frase de 8 tiempos para contar una coreografía."],
    ["Canon", "Mismo movimiento con inicio escalonado."],
    ["Portor", "Base que sostiene en acrosport."],
    ["Ágil", "Quien sube y forma la parte alta de la figura."],
    ["Mano-muñeca", "Agarre más seguro para sostener."],
  ],
  familias: ["Jugad a las películas: representad un título solo con gestos.", "Bailad juntos una canción contando los ochos en voz alta.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Expresión corporal y comunicación no verbal; recursos expresivos; ritmo, pulso y frase musical; creación coreográfica; acrosport: roles, agarres, figuras, seguridad y montaje; danzas y bailes (RD 217/2022, Educación Física, manifestaciones de la cultura motriz).",
    ideas: ["Estatuas que cuentan una historia en cuatro imágenes congeladas.", "Fichas de figuras de acrosport por niveles con código de seguridad.", "Muestra final de coreografías con coevaluación por rúbrica."],
  },
  fuentes: [RD, { t: "INEF / Consejo Superior de Deportes: recursos de Educación Física", url: "https://www.csd.gob.es/" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Casos prácticos",
  ejemplos: [
    { enunciado: "Organiza en ochos una coreografía de 64 tiempos.",
      pasos: ["64 / 8 = 8 ochos.", "Ochos 1-2: entrada y pose inicial.", "Ochos 3-6: dos bloques de pasos con cambio de formación (línea → círculo).", "Ochos 7-8: canon y pose final."],
      resultado: "Estructura clara para ensayar por partes." },
    { enunciado: "Monta con seguridad una figura de tres: dos portores en cuadrupedia y un ágil de pie encima.",
      pasos: ["Portores juntos, espalda recta, manos bajo los hombros.", "El ayudante da la mano al ágil.", "El ágil sube apoyando un pie en la cadera de cada portor.", "Mantener 3 s; bajar en orden inverso con ayuda."],
      resultado: "Figura estable con apoyos sobre zonas firmes." },
    { enunciado: "Expresa la emoción «miedo» con los recursos corporales.",
      pasos: ["Cuerpo: encogido, hombros altos, manos protegiendo.", "Espacio: nivel bajo, alejarse del estímulo.", "Tiempo: movimientos rápidos y cortados.", "Mirada: ojos muy abiertos, mirando atrás."],
      resultado: "Comunicación clara sin palabras." },
  ],
  errores: [
    "Apoyar los pies en el centro de la espalda del portor.",
    "Subir o bajar de golpe, sin avisar.",
    "Hacer acrosport sin colchonetas o con relojes y pulseras.",
    "Empezar la coreografía sin contar los tiempos y descoordinarse.",
    "Burlarse de cómo se mueven los compañeros.",
    "Buscar figuras muy difíciles antes de dominar las sencillas.",
  ],
  ejercicios: [
    { q: "Nombra cinco elementos de la comunicación no verbal.", sol: "Gestos, expresión facial, mirada, postura y uso del espacio." },
    { q: "¿Qué diferencia hay entre pulso y tempo?", sol: "El pulso es el latido regular; el tempo es su velocidad, en pulsaciones por minuto." },
    { q: "¿Cuántos ochos tiene un fragmento de 96 tiempos?", sol: "12 ochos." },
    { q: "Explica qué es un canon y un espejo en coreografía.", sol: "Canon: el mismo movimiento empezado de forma escalonada. Espejo: un compañero reproduce el movimiento del otro como en un espejo." },
    { q: "Describe los tres roles del acrosport.", sol: "Portor (sostiene), ágil (sube y forma la parte alta) y ayudante (ayuda y vigila)." },
    { q: "¿Dónde puede apoyar los pies el ágil sobre un portor en cuadrupedia?", sol: "En la cadera (zona lumbar-sacra) o en los hombros, nunca en el centro de la espalda." },
    { q: "Nombra las tres fases de una figura.", sol: "Montaje, mantenimiento (3 s) y desmontaje." },
    { q: "Escribe cinco normas de seguridad del acrosport.", sol: "Calentar, colchonetas, sin objetos, apoyos firmes, subir y bajar despacio en orden inverso, comunicarse." },
    { q: "Nombra dos bailes tradicionales españoles y su región.", sol: "Por ejemplo: jota (Aragón), sardana (Cataluña), muiñeira (Galicia), sevillanas (Andalucía)." },
    { q: "Diseña en grupo una coreografía de acrosport de 2 minutos con 4 figuras y transiciones.", sol: "Respuesta abierta; debe incluir estructura en ochos, figuras con roles rotatorios, transiciones y normas de seguridad." },
  ],
};
