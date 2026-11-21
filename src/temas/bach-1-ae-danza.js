// Artes Escénicas I, 1º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");
const { marco, t, ln, rc, ci, pa } = B;

// Los cuatro factores del movimiento (Laban): cuerpo, espacio, tiempo y energía.
const factores = B.cajas("Elementos de la danza", [["Cuerpo", "qué se mueve"], ["Espacio", "dónde y hacia dónde"], ["Tiempo", "ritmo y velocidad"], ["Energía", "fuerza y calidad"]]);

// Niveles y direcciones en el espacio: alto, medio y bajo.
const niveles = marco("Los tres niveles del espacio en la danza",
  `${ln(20, 160, 240, 160, "var(--line)", 3)}
  ${ci(52, 34, 9, 'fill="var(--pen)"')}${pa("M52 43 V84 M52 52 L38 30 M52 52 L66 30 M52 84 L44 120 L44 156 M52 84 L60 120 L60 156", 'fill="none" stroke="var(--pen)" stroke-width="4" stroke-linecap="round"')}
  ${ci(130, 78, 9, 'fill="var(--leaf)"')}${pa("M130 87 V118 M130 96 L112 108 M130 96 L148 108 M130 118 L114 136 L124 156 M130 118 L146 136 L136 156", 'fill="none" stroke="var(--leaf)" stroke-width="4" stroke-linecap="round"')}
  ${ci(196, 134, 8, 'fill="var(--red)"')}${pa("M204 140 L232 150 M212 142 L210 126 M222 146 L236 132 M232 150 L240 156", 'fill="none" stroke="var(--red)" stroke-width="4" stroke-linecap="round"')}
  ${t(52, 20, "nivel alto", { bold: 1, color: "var(--pen)", fs: 10 })}${t(130, 60, "nivel medio", { bold: 1, color: "var(--leaf)", fs: 10 })}${t(206, 112, "nivel bajo", { bold: 1, color: "var(--red)", fs: 10 })}
  ${t(130, 174, "saltos · de pie · suelo", { fs: 9, color: "var(--muted)", maxW: 200 })}`);

module.exports = B.tema({
  titulo: "La danza",
  minutos: 60,
  objetivos: [
    "Definir la danza y reconocer sus elementos: cuerpo, espacio, tiempo y energía",
    "Distinguir los grandes estilos: danza clásica, moderna y contemporánea, folclórica, española y urbana",
    "Conocer los hitos esenciales de la historia de la danza escénica",
    "Crear y analizar una secuencia coreográfica sencilla",
  ],
  claves: ["danza", "coreografía", "ballet", "danza contemporánea", "flamenco", "ritmo", "espacio", "improvisación"],
  pregunta: {
    texto: "¿Se puede contar una historia completa sin decir una sola palabra?",
    respuesta: "Sí. La <b>danza</b> lo hace con el <mark>cuerpo en movimiento</mark>: los gestos, los recorridos por el espacio, el ritmo y la energía transmiten emociones, personajes y relaciones sin necesidad de texto.",
  },
  lectura: {
    titulo: "Un cisne en el escenario",
    html: `<p>Las luces bajan y suena la música de Chaikovski. Una bailarina vestida de blanco cruza el escenario sobre las puntas de los pies; sus brazos se mueven como alas lentas. Nadie dice una palabra, pero todo el público entiende que es una princesa convertida en cisne, triste y atrapada.</p>
    <p>Días después, en un festival de calle, un grupo de jóvenes baila descalzo sobre el asfalto. Ruedan por el suelo, se empujan, se sostienen unos a otros. Tampoco hablan, y sin embargo el público siente la rabia y la amistad que se cuentan. Dos danzas muy distintas, una misma idea: <b>el cuerpo también habla</b>.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la danza",
      html: `<p>La <b>danza</b> es el arte de expresar ideas y emociones mediante el <b>movimiento</b> del cuerpo, casi siempre acompañado de <b>música</b> o ritmo. Es una de las formas de expresión más antiguas: aparece en pinturas rupestres y en todos los pueblos del mundo, ligada a rituales, fiestas y cortejos.</p>
      <p>No toda danza es escénica. Bailamos en una fiesta o una verbena por diversión (danza <b>social</b>), en celebraciones tradicionales (danza <b>folclórica</b>) o ante un público como espectáculo (danza <b>escénica</b>), que es la que estudia esta materia.</p>`,
      svg: B.comparar("Danza social frente a danza escénica", ["Social", ["para participar", "fiesta, verbena", "sin público fijo", "pasos sencillos"]], ["Escénica", ["para ser vista", "escenario", "público", "coreografía ensayada"]]),
    },
    {
      h: "Los elementos de la danza",
      html: `<p>El coreógrafo Rudolf <b>Laban</b> analizó el movimiento con cuatro factores. El <b>cuerpo</b>: qué partes se mueven y cómo. El <b>espacio</b>: niveles, direcciones y recorridos. El <b>tiempo</b>: ritmo, velocidad y pausas. Y la <b>energía</b>: la fuerza o calidad del movimiento (suave o fuerte, fluido o cortado).</p>
      <p>Combinando estos cuatro factores se pueden crear infinitos movimientos. Cambiar solo uno, por ejemplo hacer el mismo gesto muy lento o muy rápido, transforma por completo lo que expresa.</p>`,
      svg: factores,
    },
    {
      h: "El espacio y la coreografía",
      html: `<p>El bailarín se mueve en tres <b>niveles</b>: <b>alto</b> (saltos, puntas), <b>medio</b> (de pie, flexionado) y <b>bajo</b> (suelo). Además elige <b>direcciones</b> (adelante, atrás, lados, diagonales) y <b>trayectorias</b> (rectas, curvas, espirales).</p>
      <p>La <b>coreografía</b> es la composición organizada de esos movimientos en el tiempo y el espacio. El coreógrafo decide qué pasos se hacen, en qué orden, con qué música y cómo se colocan los bailarines: al unísono, en canon (uno tras otro), en espejo o en contraste.</p>`,
      svg: niveles,
    },
    {
      h: "La danza clásica o ballet",
      html: `<p>El <b>ballet</b> nace en las cortes del Renacimiento italiano y francés. Luis XIV, gran bailarín, funda en 1661 la Real Academia de Danza y fija las <b>cinco posiciones</b> de pies; por eso el vocabulario del ballet está en francés (<i>plié</i>, <i>relevé</i>, <i>jeté</i>).</p>
      <p>Busca la <b>ligereza</b>, el equilibrio y la elevación: piernas rotadas hacia fuera, zapatillas de <b>puntas</b>, saltos y giros. Sus grandes obras del siglo XIX, como <i>El lago de los cisnes</i> o <i>Giselle</i>, cuentan historias con música de orquesta.</p>`,
      svg: B.cajas("Rasgos del ballet", [["Vocabulario", "en francés"], ["Posiciones", "cinco de pies"], ["Puntas", "elevación"], ["Historias", "ballet de argumento"]]),
      video: { id: "jG299LTSk08", titulo: "¿Qué es el ballet?", canal: "Canal22", vistas: 70778 },
    },
    {
      h: "Danza moderna y contemporánea",
      html: `<p>A principios del siglo XX, bailarinas como <b>Isadora Duncan</b> se quitan las zapatillas y buscan un movimiento más libre y natural. Nace la <b>danza moderna</b>: <b>Martha Graham</b> crea una técnica basada en la contracción y la respiración, y usa el suelo y el peso del cuerpo.</p>
      <p>La <b>danza contemporánea</b> va más allá: mezcla técnicas, improvisa, incorpora el gesto cotidiano, la palabra o el vídeo. Pina Bausch crea la <b>danza-teatro</b>. Lo importante no es la belleza de la forma, sino lo que el movimiento <mark>expresa</mark>.</p>`,
      svg: B.comparar("Ballet frente a danza contemporánea", ["Ballet", ["ligereza y elevación", "zapatillas, puntas", "técnica codificada", "cuerpo vertical"]], ["Contemporánea", ["peso y suelo", "pies descalzos", "libertad e improvisación", "cuerpo expresivo"]]),
      video: { id: "A_rMduhBTeQ", titulo: "¿Qué es la danza contemporánea… y su historia?", canal: "Melissa Martínez - Cuerpo de Bailarina", vistas: 46083 },
    },
    {
      h: "Danza española, folclore y danza urbana",
      html: `<p>La <b>danza española</b> reúne cuatro formas: la <b>escuela bolera</b> (siglo XVIII, con castañuelas), la <b>danza estilizada</b>, el <b>folclore</b> de cada región (jota, sardana, muiñeira, sevillanas) y el <b>flamenco</b>, con su cante, toque y baile, y el zapateado como seña de identidad.</p>
      <p>Las <b>danzas urbanas</b> nacen en la calle: el <i>breaking</i> en el Bronx de los años 70, el <i>hip hop</i>, el <i>popping</i> o el <i>house</i>. Hoy llegan a los escenarios e incluso a los Juegos Olímpicos, donde el breaking debutó en París 2024.</p>`,
      svg: B.estrella("Danza española y urbana", "Estilos", ["Bolera", "Flamenco", "Jota", "Sardana", "Breaking", "Hip hop"]),
      video: { id: "Bnq4wSOgLTk", titulo: "El flamenco", canal: "UNESCO en español", vistas: 129118 },
    },
    {
      h: "Crear una secuencia",
      html: `<p>Para crear una pequeña coreografía se parte de una <b>idea</b> (una emoción, una imagen, una historia) y se buscan movimientos que la expresen, a menudo mediante la <b>improvisación</b>. Después se seleccionan los mejores, se ordenan en <b>frases de movimiento</b> y se ajustan al ritmo de la música.</p>
      <p>Las frases se pueden variar con los recursos de composición: repetir, cambiar de nivel o velocidad, invertir el orden, bailar en espejo o en canon. Así, con pocos pasos, se construye una pieza rica y con sentido.</p>`,
      svg: B.flujo("Crear una coreografía", ["Idea o emoción", "Improvisar movimientos", "Elegir y ordenar frases", "Variar: nivel, ritmo, canon", "Ensayar y mostrar"]),
    },
    {
      h: "Mirar y analizar la danza",
      html: `<p>Para analizar una pieza de danza conviene fijarse en el <b>estilo</b> (clásico, contemporáneo, flamenco…), en los <b>elementos</b> del movimiento (cuerpo, espacio, tiempo y energía), en la relación con la <b>música</b> y en el uso del <b>vestuario</b>, la luz y el espacio.</p>
      <p>Finalmente, la pregunta clave: <b>¿qué me transmite?</b> No hace falta saber bailar para disfrutar de la danza; basta con mirar con atención y dejar que el cuerpo del otro nos cuente algo.</p>`,
      svg: B.cajas("Guía para analizar una danza", [["Estilo", "a qué tradición pertenece"], ["Movimiento", "cuerpo, espacio, tiempo"], ["Música y luz", "cómo acompañan"], ["Sentido", "qué transmite"]]),
    },
  ],
  figura: {
    titulo: "La danza en cuatro claves",
    items: [["Cuerpo", "☺", "instrumento", "expresivo"], ["Espacio", "↗", "niveles y", "trayectorias"], ["Tiempo", "♩", "ritmo y", "pausas"], ["Energía", "≈", "fuerte, suave,", "fluida"]],
  },
  video: { id: "XYTCz9I2fo4", titulo: "¿Qué es la danza? Historia, teoría, definición", canal: "HABLEMOS DE BAILE", vistas: 70609 },
  quiz: [
    ["La danza expresa ideas y emociones mediante…", ["la palabra", "el movimiento del cuerpo", "la escenografía", "la pintura"], 1, "Cuerpo en movimiento, con música o ritmo."],
    ["Los cuatro factores del movimiento según Laban son…", ["cuerpo, espacio, tiempo y energía", "luz, sonido, texto y público", "pie, mano, cabeza y tronco", "ritmo, melodía, armonía y timbre"], 0, "Base del análisis del movimiento."],
    ["Bailar en el suelo corresponde al nivel…", ["alto", "medio", "bajo", "aéreo"], 2, "Nivel bajo."],
    ["La coreografía es…", ["el vestuario", "la composición organizada de movimientos", "la música", "el escenario"], 1, "La crea el coreógrafo."],
    ["El vocabulario del ballet está en francés porque…", ["nació en Rusia", "se codificó en la corte de Luis XIV", "lo decidió la UNESCO", "es más bonito"], 1, "Real Academia de Danza, 1661."],
    ["¿Qué bailarina abandonó las zapatillas y buscó un movimiento libre?", ["Isadora Duncan", "Anna Pávlova", "Giselle", "Odette"], 0, "Pionera de la danza moderna."],
    ["Martha Graham basó su técnica en…", ["las puntas", "la contracción y la respiración", "el zapateado", "las castañuelas"], 1, "Técnica Graham."],
    ["La danza-teatro está asociada a…", ["Pina Bausch", "Luis XIV", "Lope de Vega", "Chaikovski"], 0, "Mezcla danza y recursos teatrales."],
    ["El zapateado es característico de…", ["el ballet", "el flamenco", "el breaking", "la sardana"], 1, "Seña de identidad del baile flamenco."],
    ["Bailar «en canon» significa…", ["todos a la vez", "uno tras otro, con desfase", "en el suelo", "sin música"], 1, "Como un canon musical."],
  ],
  examen: [
    ["Una bailarina repite el mismo gesto primero muy lento y luego muy rápido. ¿Qué factor cambia?", ["Cuerpo", "Espacio", "Tiempo", "Vestuario"], 2, "Cambia la velocidad."],
    ["Una pieza con pies descalzos, uso del suelo y movimientos cotidianos es probablemente…", ["ballet clásico", "danza contemporánea", "escuela bolera", "sardana"], 1, "Rasgos contemporáneos."],
    ["Cuatro bailarines hacen el mismo movimiento a la vez. Bailan…", ["en canon", "al unísono", "en contraste", "en improvisación"], 1, "Unísono: todos a la vez."],
    ["¿Qué estilo debutó en los Juegos Olímpicos de París 2024?", ["El ballet", "El breaking", "El flamenco", "La jota"], 1, "Danza urbana nacida en el Bronx."],
    ["Bailar en una verbena con amigos es danza…", ["escénica", "social", "clásica", "coreografiada"], 1, "Para participar, no para ser vista."],
  ],
  feynman: ["Qué elementos tiene todo movimiento de danza", "Qué es una coreografía", "Qué diferencia el ballet de la danza contemporánea", "Qué estilos forman la danza española"],
  mapa: ["LA DANZA", [["Elementos", "cuerpo · espacio · tiempo · energía"], ["Clásica", "ballet, puntas, Luis XIV"], ["Moderna", "Duncan · Graham · Bausch"], ["Española y urbana", "flamenco · folclore · breaking"]]],
  tarjetas: [
    ["Danza", "Arte de expresar mediante el movimiento del cuerpo, con música o ritmo."],
    ["Coreografía", "Composición organizada de movimientos en el tiempo y el espacio."],
    ["Niveles", "Alturas a las que se baila: alto, medio y bajo."],
    ["Ballet", "Danza clásica codificada en la corte francesa, con puntas y vocabulario en francés."],
    ["Danza contemporánea", "Danza libre que mezcla técnicas, usa el suelo y busca la expresión."],
    ["Flamenco", "Arte andaluz de cante, toque y baile; Patrimonio de la Humanidad."],
    ["Unísono", "Todos los bailarines hacen el mismo movimiento a la vez."],
    ["Canon", "Los bailarines repiten un movimiento uno tras otro, con desfase."],
  ],
  ejemplos: [
    ["Describe con los cuatro factores el gesto de «abrazar el aire».", ["Cuerpo: brazos que se abren y se cierran.", "Espacio: nivel medio, hacia delante, trayectoria curva.", "Tiempo: lento; energía: suave y fluida."], "Un movimiento lento, curvo y suave que expresa ternura."],
    ["Clasifica: zapatillas de puntas, zapateado y giros sobre la cabeza.", ["Puntas: ballet clásico.", "Zapateado: flamenco.", "Giros sobre la cabeza (headspin): breaking."], "Ballet, flamenco y danza urbana."],
    ["Varía una frase de 4 movimientos (saltar, girar, agacharse, abrir brazos).", ["Repítela al revés: abrir brazos, agacharse, girar, saltar.", "Hazla en nivel bajo, en el suelo.", "Bailadla en canon: cada persona empieza un tiempo después."], "Tres versiones distintas a partir de la misma frase."],
  ],
  errores: [
    "Pensar que la danza solo es ballet o que solo vale la técnica perfecta.",
    "Bailar sin intención: hacer pasos sin saber qué se quiere expresar.",
    "Olvidar el espacio y bailar siempre en el mismo sitio y nivel.",
    "No calentar antes de bailar, con riesgo de lesiones.",
  ],
  ejercicios: {
    b: [
      ["Define danza y coreografía.", "Danza: arte de expresar con el movimiento del cuerpo. Coreografía: composición organizada de movimientos."],
      ["Nombra los cuatro factores del movimiento.", "Cuerpo, espacio, tiempo y energía."],
      ["¿Cuáles son los tres niveles del espacio?", "Alto, medio y bajo."],
      ["Cita cuatro estilos de danza.", "Ballet, contemporánea, flamenco, folclórica, urbana (breaking, hip hop)."],
    ],
    m: [
      ["Compara ballet y danza contemporánea en tres rasgos.", "Ballet: elevación, puntas, técnica codificada. Contemporánea: suelo y peso, pies descalzos, libertad e improvisación."],
      ["Explica por qué el vocabulario del ballet está en francés.", "Porque se codificó en la corte de Luis XIV, que fundó la Real Academia de Danza en 1661."],
      ["Diferencia unísono, canon y espejo.", "Unísono: todos a la vez; canon: uno tras otro con desfase; espejo: dos personas hacen el movimiento simétrico, frente a frente."],
      ["¿Qué cuatro formas reúne la danza española?", "Escuela bolera, danza estilizada, folclore y flamenco."],
    ],
    a: [
      ["Crea una secuencia de 8 movimientos que exprese una emoción y descríbela con los cuatro factores.", "Respuesta abierta. Debe usar al menos dos niveles y variar tiempo y energía de forma coherente con la emoción."],
      ["Mira un fragmento de El lago de los cisnes y otro de danza contemporánea y compáralos.", "Respuesta abierta. Se valora el uso de los factores del movimiento y la reflexión sobre lo que transmite cada uno."],
    ],
  },
  glosario: [
    ["Plié", "Flexión de rodillas en el ballet."],
    ["Puntas", "Técnica de bailar sobre la punta de los pies con zapatillas especiales."],
    ["Frase de movimiento", "Serie corta de movimientos con principio y final."],
    ["Trayectoria", "Camino que dibuja el bailarín en el espacio."],
    ["Contracción", "Movimiento de curvar el torso desde el centro, base de la técnica Graham."],
    ["Zapateado", "Golpes rítmicos de los pies propios del flamenco."],
    ["Breaking", "Danza urbana con giros y apoyos en el suelo."],
    ["Danza-teatro", "Forma que combina danza y recursos del teatro."],
  ],
  situacion: {
    titulo: "Una emoción en movimiento",
    reto: "Crear en grupo una coreografía breve que exprese una emoción sin palabras.",
    pasos: [
      "Elegid una emoción y una música de un minuto.",
      "Improvisad movimientos y quedaos con una frase de ocho tiempos cada uno.",
      "Unidlas usando unísono, canon y cambios de nivel.",
      "Mostradla y pedid al público que adivine la emoción.",
    ],
    producto: "Coreografía de un minuto y una ficha con los recursos de composición usados.",
    evaluacion: [
      "La emoción se reconoce.",
      "Se usan distintos niveles, ritmos y energías.",
      "El grupo está coordinado.",
      "La ficha explica las decisiones.",
    ],
  },
  familias: [
    "Bailad juntos una canción en casa, sin vergüenza.",
    "Ved un ballet o un espectáculo de flamenco y comentadlo.",
    "Pedidle que os enseñe una frase de movimiento creada en clase.",
    "Recordad bailes tradicionales de vuestra familia o región.",
  ],
  saberes: "La danza: concepto y funciones; elementos del movimiento (cuerpo, espacio, tiempo, energía); coreografía y recursos de composición; estilos: ballet, danza moderna y contemporánea, danza española y flamenco, folclore, danzas urbanas; análisis de piezas de danza.",
  ideas: [
    "Calentamiento guiado y juego de niveles y direcciones.",
    "Creación por parejas en espejo y luego en canon.",
    "Visionado comparado de un ballet y una pieza contemporánea.",
    "Taller de danza tradicional de la comunidad.",
  ],
  fuentes: [
    { t: "Danza, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Danza" },
    { t: "El flamenco, UNESCO, Patrimonio Cultural Inmaterial", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" },
  ],
});
