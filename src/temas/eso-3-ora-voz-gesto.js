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

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["El experimento sin sonido", `<p>La profesora de Oratoria propone un experimento. Pone en la pantalla el vídeo de dos compañeros de otro curso exponiendo el mismo tema, pero <b>sin sonido</b>. El primero mira al suelo, se balancea, se toca el pelo y tiene los brazos cruzados. La segunda está erguida, mira a distintas partes de la sala, sonríe al empezar y mueve las manos para enumerar o señalar. «¿Cuál de los dos creéis que lo hizo mejor?», pregunta. Toda la clase elige a la segunda, sin haber oído ni una palabra.</p><p>Después ponen el sonido. El primero habla muy deprisa, en voz baja y siempre con el mismo tono, con muchos «eeeh» y «o sea». La segunda hace pausas, cambia de ritmo, sube la voz en las ideas importantes y la baja para contar una anécdota. El contenido de ambos trabajos era parecido; la diferencia estaba en <b>cómo</b> lo transmitían. En este tema aprenderás a usar los instrumentos que siempre llevas contigo cuando hablas en público: la <b>voz</b>, el <b>cuerpo</b>, la <b>cara</b>, la <b>mirada</b> y el <b>espacio</b>. Y descubrirás que todos se pueden entrenar.</p>`],
  mas: [
    ["<h3>Las muletillas</h3>", `<p>Además de las muletillas de sonido, hay <b>muletillas de palabra</b> que se repiten al final de las frases: «¿vale?», «¿no?», «¿sabes?», «tipo», «literal». Una o dos no son graves, pero si aparecen en cada frase distraen y dan sensación de inseguridad. El primer paso para eliminarlas es <b>detectarlas</b>: grábate o pide a un compañero que las cuente mientras hablas.</p>`],
    ["<h3>La postura</h3>", `<p>Evita las posturas que transmiten inseguridad o desinterés: apoyarse en la mesa o en la pared, balancearse de un pie a otro, meter las manos en los bolsillos o esconderlas a la espalda. Si te cuesta estar quieto, puedes dar algún paso tranquilo para cambiar de posición entre una idea y otra; el movimiento con intención ayuda, el movimiento nervioso distrae.</p>`],
    ["<h3>La expresión de la cara</h3>", `<p>La expresión debe acompañar al contenido: no se cuenta igual una anécdota divertida que un dato preocupante. Un error frecuente es mantener la misma sonrisa fija durante todo el discurso, o la cara seria y tensa por los nervios. Ensaya ante el espejo las partes más emotivas para comprobar que tu cara dice lo mismo que tus palabras.</p>`],
    ["<h3>El espacio: proxémica</h3>", `<p>El orador puede usar el espacio con intención: acercarse un paso al público para contar algo personal o hacer una pregunta, y volver al centro para las ideas generales. También puede asociar lugares a partes del discurso, por ejemplo, moverse a la izquierda para el problema y a la derecha para la solución, de modo que el público «vea» la estructura.</p>`],
  ],
  svgs: [
    ["<h3>Ejercicios para preparar la voz</h3>", "Calentar la voz", [["Respiración", "inspirar y soltar despacio"], ["Bostezos y zumbidos", "relajar la garganta"], ["Trabalenguas", "mejorar la dicción"]], "antes de hablar"],
    ["<h3>Las muletillas</h3>", "Muletillas frecuentes", [["Sonidos", "eeeh, mmm"], ["Palabras", "o sea, en plan, ¿vale?"], ["Solución", "una pausa en silencio"]], "rellenos que distraen"],
    ["<h3>La expresión de la cara</h3>", "La expresión de la cara", [["Sonrisa", "al empezar, relaja"], ["Cejas y ojos", "muestran interés"], ["Coherencia", "cara acorde al mensaje"]], "lo que más mira el público"],
    ["<h3>El espacio: proxémica</h3>", "Distancias en la comunicación", [["Íntima", "hasta medio metro"], ["Personal", "medio metro a 1,2 m"], ["Pública", "más de 3,5 m"]], "proxémica"],
    ["<h3>Coherencia entre lo verbal y lo no verbal</h3>", "Coherencia verbal y no verbal", [["Palabras", "lo que dices"], ["Voz", "cómo lo dices"], ["Cuerpo", "lo que muestras"]], "todo debe decir lo mismo"],
  ],
  bloques: [
    { tras: "<h3>La voz: volumen y dicción</h3>", html: `<h3>Cómo funciona la voz</h3><p>La voz es un instrumento de viento. Todo empieza en la <mark>respiración</mark>: los pulmones expulsan el aire, impulsados por el <b>diafragma</b>, un músculo en forma de cúpula situado bajo los pulmones. Ese aire pasa por la laringe, donde las <mark>cuerdas vocales</mark> vibran cientos de veces por segundo y producen el sonido. Después, el sonido se amplifica en los <b>resonadores</b> (la garganta, la boca y las fosas nasales) y se transforma en palabras gracias a los <b>articuladores</b>: lengua, labios, dientes, paladar y mandíbula.</p><p>Por eso, para hablar bien en público no basta con «hablar más alto»: hay que respirar con el diafragma, relajar la garganta y abrir bien la boca al articular. La voz también hay que <b>cuidarla</b>: bebe agua a menudo, evita gritar o carraspear con fuerza, no hables por encima del ruido durante mucho rato, descansa la voz si notas ronquera y evita el tabaco. Los profesores, los cantantes y los locutores, que usan la voz todo el día, aprenden estas técnicas para no lesionarse.</p>`, svg: ["Cómo se produce la voz", [["Respiración", "pulmones y diafragma"], ["Cuerdas vocales", "vibran y dan sonido"], ["Resonadores y boca", "amplifican y articulan"]], "un instrumento de viento"] },
    { tras: "<h3>Ritmo, entonación y pausas</h3>", html: `<h3>La voz que convence</h3><p>Los estudios sobre la voz muestran que el público percibe como más <b>creíbles</b> y seguros a los oradores que usan un tono algo más <b>grave</b> y relajado, sin forzarlo, y que <mark>varían</mark> la voz a lo largo del discurso. La monotonía, en cambio, transmite aburrimiento o inseguridad, aunque el contenido sea bueno. Variar no significa exagerar: basta con cambiar el volumen, la velocidad y la altura según lo que se dice.</p><p>Una técnica útil es el <mark>énfasis</mark>: destacar las palabras clave de cada frase subiendo un poco la voz, alargándolas o haciendo una breve pausa antes de ellas. Compara «Esto <b>no</b> es un problema del futuro» con la misma frase dicha de forma plana. También ayuda adaptar la velocidad al contenido: más lento para los datos importantes y las conclusiones; algo más rápido y animado para las anécdotas. Y una curiosidad: sonreír mientras hablas se nota en la voz, incluso por teléfono, porque cambia la forma de la boca y la hace sonar más cálida.</p>`, svg: ["Una voz que convence", [["Tono", "grave y relajado"], ["Variedad", "volumen, ritmo, altura"], ["Énfasis", "destacar palabras clave"]], "contra la monotonía"], video: "vozPersuade" },
    { tras: "<h3>Los gestos</h3>", html: `<h3>Los gestos y la cultura</h3><p>Muchos gestos no son universales: su significado depende de la <mark>cultura</mark>. El pulgar hacia arriba significa «bien» en España, pero en algunos países de Oriente Próximo puede ser un insulto. El gesto de «OK», formando un círculo con el pulgar y el índice, es positivo en muchos lugares, pero ofensivo en otros. Asentir con la cabeza significa «sí» en casi toda Europa, pero en Bulgaria o en partes de Grecia el movimiento es casi el contrario.</p><p>También cambian las normas sobre la <b>mirada</b> (en algunas culturas mirar fijamente a una persona mayor es una falta de respeto), el <b>contacto físico</b> (besos, abrazos o apretones de manos) y la <b>distancia</b> a la que nos colocamos. Por eso, cuando hablamos ante un público diverso o en otro país, conviene usar gestos sencillos y naturales, informarse de las costumbres y no interpretar el comportamiento de los demás solo desde nuestras propias normas. Respetar esas diferencias también es parte de comunicar bien.</p>`, svg: ["Gestos que cambian de significado", [["Pulgar arriba", "bien / ofensa"], ["Gesto de OK", "positivo / grosero"], ["Asentir", "sí / no en Bulgaria"]], "depende de la cultura"] },
    { tras: "<h3>La mirada</h3>", html: `<h3>Leer en voz alta</h3><p>A veces hay que leer un texto ante el público: una noticia, un poema, una cita o el acta de una reunión. Leer bien en voz alta también se entrena. Primero, <b>prepara el texto</b>: léelo varias veces en silencio para entenderlo, busca las palabras difíciles y comprueba cómo se pronuncian. Después, <mark>márcalo</mark>: una barra (/) para las pausas cortas, dos (//) para las largas y subraya las palabras que quieres destacar.</p><p>Al leer, sujeta el papel a la altura del pecho, para no esconder la cara ni bajar la cabeza. Lee <b>más despacio</b> de lo que crees necesario, respeta los signos de puntuación y usa la entonación para que se note si es una pregunta, una exclamación o una enumeración. Intenta <b>levantar la vista</b> del papel al final de cada frase: lee con los ojos un poco por delante de lo que dices y mira al público mientras pronuncias las últimas palabras. En la poesía, cuida además el ritmo de los versos sin cantar ni exagerar: el sentido del texto debe mandar sobre la música.</p>`, svg: ["Leer en voz alta", [["Preparar", "entender y pronunciar"], ["Marcar", "/ pausa corta, // larga"], ["Levantar la vista", "al final de cada frase"]], "también se entrena"] },
    { html: `<h3>Verse y escucharse para mejorar</h3><p>La forma más rápida de mejorar la voz y el lenguaje corporal es <mark>observarse</mark>. Grábate con el móvil mientras ensayas y revisa la grabación en tres pasadas: primero <b>sin sonido</b>, fijándote solo en la postura, los gestos, la cara y la mirada; después <b>sin imagen</b>, escuchando solo la voz (volumen, ritmo, pausas, muletillas); y por último con todo, para comprobar si lo verbal y lo no verbal dicen lo mismo.</p><p>Usa una <b>lista de comprobación</b> sencilla y, en lugar de intentar corregirlo todo a la vez, elige <b>uno o dos objetivos</b> para la próxima vez: por ejemplo, «hacer una pausa en lugar de decir eeeh» y «mirar a las tres zonas de la sala». Pide también comentarios a un compañero de confianza, empezando por lo que ha funcionado. Al principio cuesta verse en vídeo, pero es normal: casi nadie reconoce su propia voz grabada, porque cuando hablamos la oímos también a través de los huesos del cráneo. Con unas pocas sesiones, los progresos son muy visibles.</p>`, svg: ["Revisar una grabación", [["Sin sonido", "postura, gestos, mirada"], ["Sin imagen", "voz, ritmo, muletillas"], ["Completa", "coherencia del conjunto"]]] },
  ],
  ejemplos: [
    ["Marca para leer en voz alta: «Cuando llegó el invierno, el río se heló y los niños patinaron sobre él».", ["Pausa corta tras la subordinada: «Cuando llegó el invierno /».", "Pausa corta antes de la segunda acción: «el río se heló /».", "Pausa larga al final: «sobre él //». Destacar «heló» y «patinaron»."], "«Cuando llegó el invierno / el río se <u>heló</u> / y los niños <u>patinaron</u> sobre él //»."],
    ["Coloca el énfasis en: «Necesitamos actuar hoy, no dentro de diez años».", ["Identifica las palabras clave: «hoy» y «no».", "Haz una breve pausa antes de «hoy».", "Sube un poco la voz en «no dentro de diez años»."], "«Necesitamos actuar… <b>hoy</b>; <b>no</b> dentro de diez años»."],
    ["Planifica cómo revisar la grabación de tu exposición.", ["Primera pasada sin sonido: postura, gestos y mirada.", "Segunda pasada sin imagen: voz y muletillas.", "Tercera pasada completa: coherencia.", "Elegir dos objetivos de mejora."], "Tres pasadas y dos objetivos concretos para el siguiente ensayo."],
  ],
  errores: ["Pensar que hablar bien es solo hablar alto: hay que respirar con el diafragma, articular y variar la voz."],
  niveles: "bbmbbbmbam",
  ejercicios: [
    ["b", "¿Qué partes intervienen en la producción de la voz?", "Pulmones y diafragma (aire), cuerdas vocales (sonido), resonadores (amplifican) y articuladores (forman las palabras)."],
    ["b", "Escribe tres consejos para cuidar la voz.", "Beber agua, no gritar ni carraspear con fuerza y descansar la voz si hay ronquera (también evitar el tabaco)."],
    ["b", "¿Qué es el énfasis?", "Destacar las palabras clave de una frase con la voz, alargándolas o haciendo una pausa antes."],
    ["b", "Escribe dos muletillas de palabra.", "«¿Vale?» y «o sea» (también «en plan», «tipo», «¿sabes?»)."],
    ["b", "¿Qué significan / y // al marcar un texto para leerlo?", "Una pausa corta y una pausa larga."],
    ["b", "¿Por qué no reconocemos nuestra voz grabada?", "Porque al hablar la oímos también a través de los huesos del cráneo, y en la grabación solo llega por el aire."],
    ["m", "Explica por qué un gesto puede ser correcto en un país y ofensivo en otro. Pon un ejemplo.", "Porque el significado de los gestos depende de la cultura. Ejemplo: el pulgar hacia arriba es positivo en España y puede ser un insulto en algunos países de Oriente Próximo."],
    ["m", "Di la frase «¿Has terminado?» con tres intenciones distintas y explica qué cambia.", "Con sorpresa (subiendo mucho al final), con enfado (más fuerte y seco) y con amabilidad (suave y lenta). Cambian el tono, el volumen y la velocidad."],
    ["m", "¿Por qué la monotonía perjudica a un buen contenido?", "Porque transmite aburrimiento o inseguridad y hace que el público desconecte, aunque lo que se dice sea interesante."],
    ["m", "¿Cómo debes sujetar el papel al leer en voz alta y por qué?", "A la altura del pecho, para no esconder la cara ni bajar la cabeza, y poder levantar la vista hacia el público."],
    ["m", "Describe las tres pasadas para revisar una grabación.", "Sin sonido (postura, gestos, cara, mirada), sin imagen (voz, ritmo, muletillas) y completa (coherencia entre lo verbal y lo no verbal)."],
    ["m", "¿Qué posturas transmiten inseguridad al hablar en público?", "Apoyarse en la mesa, balancearse, meter las manos en los bolsillos, esconderlas a la espalda o cruzar los brazos."],
    ["m", "¿Qué distancia proxémica usa un orador ante una clase y por qué?", "La pública (más de 3,5 m con el fondo de la sala) o una social amplia, para que todos le vean y oigan sin sentirse invadidos."],
    ["m", "Explica cómo puede un orador usar el espacio para mostrar la estructura de su discurso.", "Asociando lugares a partes del discurso (por ejemplo, el problema a la izquierda y la solución a la derecha) y acercándose al público en los momentos más personales."],
    ["a", "Prepara y marca un fragmento de un poema o una noticia de 60 palabras y léelo en voz alta grabándote.", "Respuesta abierta. Debe incluir marcas de pausa y énfasis, y una autoevaluación de la lectura."],
    ["a", "Analiza la lectura inicial: ¿qué rasgos no verbales y de voz diferencian a los dos oradores?", "El primero: mirada al suelo, balanceo, tics, brazos cruzados, habla rápida, baja y monótona con muletillas. La segunda: postura erguida, mirada repartida, sonrisa, gestos que enumeran, pausas, variedad de ritmo y énfasis."],
    ["a", "¿Por qué crees que el público eligió a la segunda oradora sin oír el sonido?", "Porque el lenguaje corporal transmite seguridad, interés y conexión, y el público forma su impresión muy rápido a partir de lo que ve."],
    ["a", "Diseña una rutina de calentamiento vocal de tres minutos para antes de una exposición.", "Respuesta abierta. Ejemplo: un minuto de respiración diafragmática, 30 segundos de bostezos y zumbidos con la boca cerrada, un minuto de trabalenguas y 30 segundos diciendo la primera frase con énfasis."],
    ["a", "Vas a exponer ante estudiantes de intercambio de varios países. ¿Qué tendrías en cuenta sobre los gestos?", "Usar gestos sencillos y naturales, evitar los que pueden ser ofensivos en otras culturas (como el pulgar o el OK), informarme de sus costumbres y no interpretar su comportamiento solo desde mis normas."],
    ["a", "Escribe tu lista de comprobación personal de cinco puntos sobre voz y lenguaje corporal y elige dos objetivos.", "Respuesta abierta. Ejemplo: volumen suficiente, pausas en lugar de muletillas, postura erguida, mirada a toda la sala y gestos que acompañan; objetivos: pausas y mirada."],
    ["a", "Explica por qué la coherencia entre palabras, voz y cuerpo es clave para la credibilidad.", "Porque cuando el cuerpo o la voz contradicen las palabras (decir «estoy encantado» con cara seria y voz apagada), el público cree más a lo no verbal y deja de confiar en el mensaje."],
  ],
  cuartas: ["solo oye el profesor", "hace reír siempre", "entusiasmo", "una técnica de respiración", "a la pantalla", "silbidos", "el vocabulario", "chicles", "con los ojos cerrados", "da miedo", "entonación", "se cierra la garganta", "entusiasmo"],
  quiz: [
    ["Las cuerdas vocales están en…", ["la laringe", "los pulmones", "la boca", "la nariz"], 0, "Vibran y producen el sonido."],
    ["El músculo que impulsa el aire al hablar es…", ["el diafragma", "el bíceps", "el corazón", "la lengua"], 0, "Está bajo los pulmones."],
    ["Los labios, la lengua y los dientes son los…", ["articuladores", "resonadores", "pulmones", "cuerdas vocales"], 0, "Forman las palabras."],
    ["Para cuidar la voz conviene…", ["beber agua y no gritar", "carraspear fuerte", "hablar sobre el ruido", "susurrar siempre"], 0, "Y descansar si hay ronquera."],
    ["Destacar una palabra clave con la voz es…", ["el énfasis", "la monotonía", "la muletilla", "la proxémica"], 0, "Subir, alargar o pausar."],
    ["El público percibe como más creíble una voz…", ["grave, relajada y variada", "aguda y monótona", "muy rápida", "muy baja"], 0, "Sin forzar."],
    ["El gesto del pulgar hacia arriba…", ["no significa lo mismo en todas las culturas", "es universal", "es siempre ofensivo", "no existe"], 0, "Depende de la cultura."],
    ["Al leer en voz alta, el papel se sujeta…", ["a la altura del pecho", "delante de la cara", "en la mesa", "a la espalda"], 0, "Para no esconder la cara."],
    ["En la marca «//» se hace…", ["una pausa larga", "una pausa corta", "un énfasis", "una pregunta"], 0, "Una barra: pausa corta."],
    ["La primera pasada al revisar una grabación se hace…", ["sin sonido", "sin imagen", "a doble velocidad", "al revés"], 0, "Para fijarse en el cuerpo."],
  ],
  examen: [
    ["La voz se amplifica en…", ["los resonadores", "los pulmones", "las cuerdas vocales", "el diafragma"], 0, "Garganta, boca y fosas nasales."],
    ["Sonreír mientras hablas…", ["se nota en la voz", "no influye", "la hace más grave", "la apaga"], 0, "Suena más cálida."],
    ["Para eliminar una muletilla, lo primero es…", ["detectarla", "hablar más rápido", "ignorarla", "gritar"], 0, "Grabarse o pedir ayuda."],
    ["Asentir con la cabeza en Bulgaria puede significar…", ["no", "sí siempre", "hola", "gracias"], 0, "Los gestos cambian con la cultura."],
    ["En la tercera pasada de una grabación se comprueba…", ["la coherencia del conjunto", "solo la voz", "solo la postura", "la duración"], 0, "Lo verbal y lo no verbal."],
  ],
  tarjetas: [["Diafragma", "Músculo bajo los pulmones que impulsa el aire."], ["Énfasis", "Destacar con la voz las palabras clave."], ["Gesto cultural", "Gesto cuyo significado cambia según la cultura."], ["Marcar un texto", "Señalar pausas (/ y //) y palabras destacadas."]],
  glosario: [["Volumen", "Intensidad de la voz."], ["Dicción", "Pronunciación clara de los sonidos."], ["Entonación", "Melodía de la voz en la frase."], ["Ritmo", "Velocidad y cadencia al hablar."], ["Pausa", "Silencio breve con intención."], ["Énfasis", "Realce de una palabra con la voz."], ["Muletilla", "Palabra o sonido de relleno que se repite."], ["Diafragma", "Músculo principal de la respiración."], ["Cuerdas vocales", "Pliegues de la laringe que vibran."], ["Resonadores", "Cavidades que amplifican la voz."], ["Articuladores", "Órganos que forman los sonidos."], ["Lenguaje corporal", "Comunicación con postura, gestos y cara."], ["Proxémica", "Uso del espacio y la distancia al comunicar."], ["Coherencia", "Acuerdo entre lo verbal y lo no verbal."]],
  situacion: { titulo: "Locutores por un día", reto: "Grabar un pódcast o un vídeo breve en el que la voz y el gesto sean protagonistas.", pasos: ["Elegir en parejas un texto breve (noticia, poema, microrrelato) y otro propio de opinión.", "Marcar los textos con pausas y énfasis y hacer un calentamiento vocal.", "Grabar una primera versión y revisarla en tres pasadas con la lista de comprobación.", "Fijar dos objetivos de mejora y grabar la versión final.", "Escuchar las grabaciones de la clase y dar comentarios constructivos."], producto: "Pódcast o vídeo de dos minutos con primera versión, versión final y autoevaluación.", evaluacion: ["La voz es clara, con volumen y ritmo adecuados.", "Usa pausas y énfasis con intención y evita las muletillas.", "El lenguaje corporal acompaña al mensaje (en vídeo).", "La autoevaluación es sincera y muestra mejora entre versiones."] },
  familias: ["Leed en voz alta un cuento o una noticia por turnos y comentad qué lectura ha sonado mejor y por qué."],
  saberes: "elementos prosódicos y no verbales de la comunicación oral: producción y cuidado de la voz, énfasis, lectura expresiva, gesto y cultura y autoevaluación.",
  minutos: 100,
});
