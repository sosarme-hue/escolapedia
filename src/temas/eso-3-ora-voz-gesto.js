// Oratoria y debate 3º ESO (optativa). Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Oratoria y debate",
  curso: "3-eso",
  titulo: "La voz, el gesto y la mirada",
  minutos: 45,
  objetivos: ["Controlar el volumen, el ritmo, el tono y las pausas de la voz", "Usar la postura, los gestos y la mirada a favor del mensaje", "Ocupar el espacio y evitar los tics que distraen"],
  claves: ["volumen", "ritmo", "entonación", "pausa", "dicción", "postura", "gestos", "contacto visual", "proxémica", "muletillas"],
  pregunta: {
    texto: "Dos compañeros exponen el mismo trabajo con las mismas palabras. Uno mira al suelo y habla bajito; el otro mira a la clase, hace pausas y mueve las manos. ¿A quién recordarás?",
    respuesta: "Al segundo. Cuando hablamos en público, el público <mark>no solo escucha: también mira</mark>. La voz, la postura, los gestos y la mirada transmiten seguridad o nervios, interés o aburrimiento. Son tan importantes como las palabras.",
  },
  bloques: [
    {
      html: `<h3>La voz: volumen y dicción</h3><p>El <b>volumen</b> debe permitir que te oiga la última fila sin gritar: imagina que hablas para la persona más alejada. La voz sale del aire, por eso conviene respirar con el <b>diafragma</b> (la tripa se hincha al coger aire), no solo con el pecho. La <b>dicción</b> es pronunciar con claridad cada sonido, sin comerse letras: «cansado», no «cansao»; «para», no «pa».</p>`,
      svg: L.filas("Claves de una voz clara", [
        ["Volumen", "que te oiga la última fila", "var(--pen)"],
        ["Respiración", "con el diafragma", "var(--leaf)"],
        ["Dicción", "pronunciar cada sonido", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Ritmo, entonación y pausas</h3><p>Con los nervios solemos hablar <b>demasiado deprisa</b>. Un buen ritmo es algo más lento que en una conversación, y se varía: más rápido para contar una anécdota, más lento para lo importante. La <b>entonación</b> sube y baja para evitar la monotonía. Y las <mark>pausas</mark> son poderosas: antes de una idea clave crean expectación, y después dejan tiempo para que el público la piense.</p>`,
      svg: L.frase("Una pausa antes de la idea clave", [
        ["Y el resultado fue…", "", "var(--ink)"], ["(pausa)", "expectación", "var(--red)"], ["¡un 80 % menos!", "idea clave", "var(--pen)"],
      ], "el silencio también comunica"),
    },
    {
      html: `<h3>La postura</h3><p>Una buena postura transmite seguridad: <b>pies separados</b> a la altura de los hombros y bien apoyados, <b>espalda recta</b>, hombros relajados y <b>barbilla paralela al suelo</b>. Evita balancearte, apoyarte en la mesa, cruzar los brazos (parece que te defiendes) o meter las manos en los bolsillos. Si estás sentado, apoya la espalda y deja las manos visibles sobre la mesa.</p>`,
      svg: L.tabla("Posturas que ayudan y posturas que restan", ["Ayuda", "Resta"], [
        ["pies firmes", "balancearse"], ["espalda recta", "encorvarse"], ["manos visibles", "brazos cruzados"], ["hombros sueltos", "manos en bolsillos"],
      ]),
    },
    {
      html: `<h3>Los gestos</h3><p>Las manos ayudan a <mark>subrayar el mensaje</mark>: enumerar con los dedos («primero, segundo…»), mostrar un tamaño, abrir las manos para incluir al público. Los gestos deben ser naturales y estar entre la cintura y los hombros. Lo que distrae son los <b>tics</b>: jugar con el bolígrafo, tocarse el pelo, frotarse las manos. Si no sabes qué hacer con las manos, déjalas relajadas a los lados o juntas a la altura del ombligo.</p>`,
      svg: L.filas("Gestos que ayudan y tics que distraen", [
        ["Ayudan", "enumerar, señalar, abrir manos", "var(--leaf)"],
        ["Distraen", "boli, pelo, frotarse las manos", "var(--red)"],
      ], "las manos, entre cintura y hombros"),
    },
    {
      html: `<h3>La mirada</h3><p>Mirar al público es la forma más directa de <b>conectar</b> con él y de ganar credibilidad. Reparte la mirada por toda la sala, en zigzag o por zonas, y sostenla unos segundos en distintas personas, como si hablaras con cada una. No mires al techo, al suelo ni a tus papeles todo el rato. Si te pone nervioso mirar a los ojos, mira entre las cejas o busca primero las caras amables.</p>`,
      svg: L.frase("Reparte la mirada por toda la sala", [
        ["izquierda", "zona 1", "var(--pen)"], ["centro", "zona 2", "var(--leaf)"], ["derecha", "zona 3", "var(--red)"], ["fondo", "zona 4", "var(--inf)"],
      ], "unos segundos en cada persona"),
    },
  ],
  figura: {
    titulo: "El cuerpo también habla",
    svg: L.columnas("Los cuatro recursos no verbales del orador", [
      ["se oye", "VOZ", ["volumen, ritmo,", "pausas"], "var(--pen)"],
      ["se ve", "POSTURA", ["firme, recta,", "abierta"], "var(--leaf)"],
      ["subraya", "GESTOS", ["naturales,", "sin tics"], "var(--red)"],
      ["conecta", "MIRADA", ["a toda", "la sala"], "var(--inf)"],
    ]),
  },
  video: { id: "Pq7HjM2N9ao", titulo: "Tu cuerpo habla antes que tus palabras", canal: "Aprendemos juntos Mex", vistas: 2068258, megusta: 0, busqueda: "comunicación no verbal hablar en público" },
  quiz: [
    { q: "El volumen adecuado es el que…", o: ["oye la última fila sin gritos", "solo oye la primera fila", "se nota que gritas"], a: 0, e: "Habla para la persona más alejada." },
    { q: "Una pausa antes de una idea importante…", o: ["crea expectación", "demuestra que se te ha olvidado", "aburre"], a: 0, e: "El silencio también comunica." },
    { q: "Cruzar los brazos al hablar transmite…", o: ["actitud defensiva", "seguridad", "alegría"], a: 0, e: "Mejor manos visibles y abiertas." },
    { q: "Jugar con el bolígrafo mientras hablas es…", o: ["un tic que distrae", "un gesto que ayuda", "una pausa"], a: 0, e: "El público mira el boli, no a ti." },
    { q: "La mirada se debe repartir…", o: ["por toda la sala", "solo al profesor", "al techo"], a: 0, e: "Para conectar con todos." },
  ],
  examen: [
    { q: "Pronunciar con claridad cada sonido es la…", o: ["dicción", "proxémica", "entonación"], a: 0, e: "Sin comerse letras." },
    { q: "Respirar con el diafragma significa que…", o: ["la tripa se hincha al coger aire", "se levantan los hombros", "no se respira"], a: 0, e: "Da más aire y control." },
    { q: "Hablar siempre con el mismo tono produce…", o: ["monotonía", "expectación", "credibilidad"], a: 0, e: "Hay que variar la entonación." },
  ],
  feynman: ["Cómo controlar el volumen y la dicción", "Para qué sirven las pausas", "Qué postura transmite seguridad", "Cómo usar la mirada para conectar con el público"],
  mapa: mapa("VOZ Y CUERPO", "var(--eso)", [
    ["Voz", "volumen · dicción · pausas", "var(--pen)"],
    ["Postura", "firme y abierta", "var(--leaf)"],
    ["Gestos", "naturales, sin tics", "var(--red)"],
    ["Mirada", "a toda la sala", "var(--inf)"],
  ]),
  tarjetas: [
    ["Dicción", "Pronunciar con claridad todos los sonidos de las palabras."],
    ["Pausa", "Silencio breve que crea expectación o deja pensar al público."],
    ["Postura segura", "Pies firmes, espalda recta, hombros relajados y manos visibles."],
    ["Tic", "Gesto repetido e inconsciente que distrae: jugar con el boli, tocarse el pelo."],
    ["Contacto visual", "Mirar a distintas personas de la sala unos segundos cada vez."],
  ],
  familias: ["Grabad en vídeo un minuto de su exposición y miradlo juntos sin sonido: ¿qué dice su cuerpo?", "Practicad trabalenguas para mejorar la dicción.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Comunicación oral: elementos prosódicos y no verbales de la expresión oral (volumen, ritmo, entonación, gesto, mirada, uso del espacio) (materia optativa de Oratoria y debate; relación con el RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Leer la misma frase con cinco intenciones distintas cambiando solo la entonación.", "Exposición muda: contar algo solo con gestos.", "Ronda de trabalenguas y lectura con lápiz entre los dientes para la dicción."],
  },
  fuentes: [
    L.BOE,
    { t: "Comunicación no verbal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_no_verbal" },
    { t: "Centro Virtual Cervantes: recursos de lengua y comunicación", url: "https://cvc.cervantes.es/" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Eliminar muletillas y cuidar la voz", "Usar el espacio del escenario"],
  bloques: [
    { tras: "La voz: volumen y dicción", html: `<h3>Ejercicios para preparar la voz</h3><p>Igual que los deportistas calientan antes de un partido, los oradores preparan la voz. Algunos ejercicios sencillos:</p><ol><li><b>Respiración</b>: coge aire por la nariz en cuatro tiempos inflando la tripa, mantenlo cuatro y suéltalo en ocho diciendo «sss».</li><li><b>Relajación</b>: mueve suavemente el cuello, encoge y suelta los hombros, bosteza para abrir la garganta.</li><li><b>Articulación</b>: exagera las vocales (a-e-i-o-u) y di trabalenguas cada vez más rápido: «Tres tristes tigres tragaban trigo en un trigal».</li><li><b>Proyección</b>: di tu nombre como si llamaras a alguien al otro lado del patio, sin gritar.</li></ol><p>Y cuida la voz: bebe agua, no grites en exceso y evita carraspear.</p>` },
    { tras: "Ritmo, entonación y pausas", html: `<h3>Las muletillas</h3><p>Las <b>muletillas</b> son palabras o sonidos que repetimos sin darnos cuenta para rellenar silencios: «eeeh», «mmm», «o sea», «vale», «bueno», «en plan», «¿sabes?», «tipo». Una de vez en cuando no pasa nada, pero si se repiten mucho <mark>distraen</mark> y transmiten inseguridad: el público empieza a contarlas en lugar de escuchar.</p><p>Para eliminarlas: primero, <b>descubre las tuyas</b> grabándote o pidiendo a un compañero que las cuente. Segundo, <b>sustitúyelas por una pausa</b>: el silencio es mucho más elegante que un «eeeh». Tercero, <b>prepara bien las transiciones</b> entre partes, que es donde más aparecen («Una vez visto esto, pasemos a…»).</p>` },
    { tras: "Los gestos", html: `<h3>La expresión de la cara</h3><p>La cara es la parte del cuerpo que más mira el público. Una <b>sonrisa</b> al empezar relaja el ambiente y crea simpatía, aunque el tema sea serio. Durante el discurso, la expresión debe <mark>acompañar al contenido</mark>: seria al hablar de un problema, animada al proponer soluciones, sorprendida al dar un dato llamativo.</p><p>Si la cara dice una cosa y las palabras otra, el público cree a la cara. Por ejemplo, decir «Estoy encantado de estar aquí» con cara de susto resta credibilidad. Ensayar delante de un espejo o grabarse ayuda a descubrir si nuestra expresión es la que queremos transmitir.</p>` },
    { tras: "La mirada", html: `<h3>El espacio: proxémica</h3><p>La <b>proxémica</b> estudia cómo usamos el espacio y la distancia al comunicarnos. En una exposición, el orador puede <b>moverse</b> por el escenario para dar dinamismo: acercarse al público en los momentos más personales y volver al centro para las ideas principales. Cada desplazamiento debe tener un sentido; caminar sin parar, como un león en una jaula, pone nervioso al público.</p><p>Otras reglas útiles: no te escondas detrás de la mesa o del atril; no des la espalda al público para leer las diapositivas; y colócate a un lado de la pantalla para que todos vean lo proyectado. Antes de empezar, <mark>conoce el lugar</mark>: dónde estará el público, si hay micrófono, dónde dejarás tus notas.</p>` },
    { tras: "La mirada", html: `<h3>Coherencia entre lo verbal y lo no verbal</h3><p>Todos los recursos de este tema deben trabajar <b>juntos</b>. Si dices «Esto es muy importante», tu voz debe bajar el ritmo, tu cara ponerse seria y tus manos marcar la idea; si dices «¡Fue increíble!», la voz se anima, la cara sonríe y los gestos se abren. Cuando todo apunta en la misma dirección, el mensaje llega con fuerza.</p><p>La mejor forma de conseguirlo es <mark>ensayar en voz alta</mark>, de pie y con el cuerpo, no solo leyendo mentalmente. Graba un ensayo, míralo una vez sin sonido (para fijarte en el cuerpo) y otra solo con sonido (para fijarte en la voz). Después, elige una sola cosa que mejorar en el siguiente ensayo.</p>` },
  ],
  videos: [
    ["La voz: volumen y dicción", L.vid("U2lWFRFwZLE", "Técnicas para hablar fluido y claro", "Teresa Baró · Comunicación de éxito", 3631760)],
    ["Los gestos", L.vid("G4Gp0hc0TMA", "Lenguaje corporal: el cuerpo grita lo que la mente calla (TEDxReus)", "TEDx Talks", 997405)],
  ],
  ejemplos: [
    ["Mejora esta intervención: «Eeeh… bueno, o sea, el reciclaje, eeeh, es importante, ¿sabes?».", ["Detectar las muletillas: eeeh, bueno, o sea, ¿sabes?", "Sustituirlas por pausas.", "Ordenar la frase y darle fuerza."], "«El reciclaje… (pausa) es importante. Y hoy os voy a explicar por qué»."],
    ["Un compañero expone con los brazos cruzados, mirando la pantalla y muy deprisa. ¿Qué le aconsejarías?", ["Postura: descruzar los brazos y mostrar las manos.", "Mirada: girarse hacia el público y mirar la pantalla solo de reojo.", "Ritmo: hablar más despacio y hacer pausas tras las ideas clave."], "tres consejos concretos de postura, mirada y ritmo."],
    ["Marca las pausas en: «Cada día se tiran a la basura toneladas de comida mientras millones de personas pasan hambre».", ["Pausa breve tras «comida» para separar las dos ideas.", "Pausa larga al final para que el público reflexione.", "Bajar el ritmo en «millones de personas pasan hambre», que es lo más impactante."], "«Cada día se tiran a la basura toneladas de comida / mientras millones de personas pasan hambre //»."],
  ],
  errores: [
    "Hablar demasiado deprisa por los nervios.",
    "Leer los papeles o las diapositivas sin mirar al público.",
    "Llenar los silencios con muletillas como «eeeh» u «o sea».",
    "Dar la espalda al público para mirar la pantalla.",
    "Moverse sin parar por el escenario o balancearse.",
  ],
  ejercicios: [
    ["Escribe tres muletillas que uses tú o que oigas mucho.", "Respuesta abierta. Por ejemplo: «en plan», «o sea», «tipo»."],
    ["Di en voz alta «Tres tristes tigres tragaban trigo en un trigal» tres veces, cada vez más rápido. ¿Qué sonidos te cuestan?", "Respuesta abierta. Lo habitual es que cuesten los grupos tr- y gr-; hay que exagerar la articulación."],
    ["Lee la frase «Mañana hay examen» con alegría, con miedo y con sorpresa. ¿Qué cambia?", "Cambian la entonación, el volumen, el ritmo y la expresión de la cara, aunque las palabras sean iguales."],
    ["Describe la postura correcta para hablar de pie.", "Pies separados a la altura de los hombros, espalda recta, hombros relajados, barbilla paralela al suelo y manos visibles."],
    ["¿Dónde deberías colocarte respecto a la pantalla en una presentación?", "A un lado, de cara al público, para no tapar lo proyectado."],
    ["Escribe dos gestos que subrayen el mensaje.", "Por ejemplo: contar con los dedos al enumerar y abrir los brazos para incluir al público."],
    ["¿Qué harías si te pone nervioso mirar a los ojos?", "Mirar entre las cejas, buscar caras amables o repartir la mirada por zonas."],
    ["Explica un ejercicio de respiración para antes de hablar.", "Inspirar por la nariz en 4 tiempos, mantener 4 y soltar el aire en 8 diciendo «sss»."],
    ["Graba 30 segundos hablando de tu fin de semana y cuenta las muletillas. ¿Cuántas hay?", "Respuesta abierta. El objetivo es tomar conciencia y sustituirlas por pausas."],
    ["¿Por qué es importante la coherencia entre palabras y gestos?", "Porque si se contradicen, el público cree al lenguaje no verbal y el mensaje pierde credibilidad."],
  ],
  quiz: [
    ["Las muletillas se sustituyen mejor por…", ["pausas", "más muletillas", "gritos"], 0, "El silencio es más elegante."],
    ["La proxémica estudia…", ["el uso del espacio y la distancia", "la voz", "la ortografía"], 0, "Cómo nos movemos y colocamos."],
    ["Antes de hablar, la voz se prepara con…", ["respiración y trabalenguas", "refrescos con gas", "gritos"], 0, "Calentamiento vocal."],
    ["Para revisar tu lenguaje corporal, mira tu grabación…", ["sin sonido", "a doble velocidad", "solo el principio"], 0, "Así te fijas solo en el cuerpo."],
    ["Una sonrisa al empezar…", ["relaja y crea simpatía", "quita seriedad siempre", "distrae"], 0, "Conecta con el público."],
  ],
  tarjetas: [
    ["Muletilla", "Palabra o sonido de relleno que repetimos sin darnos cuenta: eeeh, o sea, en plan."],
    ["Proxémica", "Uso del espacio y de las distancias al comunicarnos."],
    ["Coherencia no verbal", "Voz, cara, gestos y palabras deben transmitir lo mismo."],
  ],
});
