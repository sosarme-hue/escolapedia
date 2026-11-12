// Valores Cívicos y Éticos 2º ESO: la ética en la era digital. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "La ética en la era digital",
  minutos: 45,
  objetivos: ["Reconocer los derechos y deberes de la ciudadanía digital", "Proteger la privacidad y la identidad digital", "Identificar el ciberacoso y saber cómo actuar", "Detectar desinformación y usar la tecnología con equilibrio"],
  claves: ["ciudadanía digital", "identidad digital", "huella digital", "privacidad", "ciberacoso", "desinformación", "netiqueta"],
  pregunta: {
    texto: "Si borras una foto que subiste hace un año, ¿desaparece de internet para siempre?",
    respuesta: "No necesariamente. Alguien puede haberla <b>guardado</b>, hecho una captura o compartido. Todo lo que publicamos deja una <b>huella digital</b> difícil de borrar. Por eso, antes de publicar, conviene preguntarse: <mark>¿me importaría que esto lo viera cualquiera dentro de diez años?</mark>",
  },
  bloques: [
    {
      html: `<h3>La ciudadanía digital</h3><p>Pasamos muchas horas en internet: estudiamos, jugamos, nos comunicamos. La <b>ciudadanía digital</b> es la capacidad de participar en ese mundo de forma <b>responsable, segura y respetuosa</b>.</p><p>Las mismas normas éticas que valen en la calle valen en la red: la <b>dignidad</b> de las personas, el respeto y la honestidad. Que no veamos la cara del otro no hace que el daño sea menor. La pantalla da una falsa sensación de <b>anonimato</b> que lleva a algunos a decir cosas que nunca dirían en persona.</p>`,
      video: { id: "dcYgA1qHBpM", titulo: "La ciudadanía digital explicada", canal: "Astraway", vistas: 206787 },
    },
    {
      html: `<h3>Identidad y huella digital</h3><ul><li><b>Identidad digital</b>: la imagen que los demás tienen de ti a partir de lo que hay en internet (perfiles, fotos, comentarios, lo que otros publican de ti).</li><li><b>Huella digital</b>: el rastro de todo lo que haces en la red (búsquedas, «me gusta», ubicaciones, compras).</li></ul><p>Las empresas usan esa huella para mostrarte publicidad personalizada. Y en el futuro, universidades o empresas pueden buscar tu nombre en internet. Cuidar tu identidad digital es <mark>cuidar tu reputación</mark>.</p>`,
      svg: svg("Huella digital: un rastro de pasos formado por fotos, búsquedas, me gusta, ubicación, comentarios y compras", `${[["fotos", 30, 140], ["búsquedas", 70, 104], ["me gusta", 112, 140], ["ubicación", 150, 92], ["comentarios", 196, 136], ["compras", 226, 88]].map(([n, x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="16" transform="rotate(${-30 + i * 6} ${x} ${y})" fill="var(--eso)" fill-opacity=".25" stroke="var(--eso)"/>${t(x, y - 22, n, { c: "var(--ink)", s: 10 })}`).join("")}${t(130, 172, "todo deja rastro y es difícil de borrar", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>La privacidad y los datos personales</h3><p>Los <b>datos personales</b> son cualquier información que te identifica: nombre, foto, dirección, teléfono, centro escolar, ubicación. En España, la ley establece que hasta los <b>14 años</b> hace falta el consentimiento de padres o tutores para que una plataforma trate tus datos.</p><p>Consejos de privacidad:</p><ul><li>Perfiles <b>privados</b> y solo con personas que conoces.</li><li>No compartir <b>contraseñas</b>, ni siquiera con amigos.</li><li>Desactivar la <b>ubicación</b> en las publicaciones.</li><li>No publicar datos como el uniforme del colegio o la dirección.</li><li>Pedir <b>permiso</b> antes de publicar fotos de otras personas (y respetar si te piden que no).</li></ul>`,
      svg: svg("Candado y tres consejos de privacidad: perfil privado, contraseñas propias y ubicación desactivada", `<rect x="30" y="74" width="60" height="50" rx="8" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2.5"/><path d="M42 74 V 56 A 18 18 0 0 1 78 56 V 74" fill="none" stroke="var(--pen)" stroke-width="5"/><circle cx="60" cy="96" r="6" fill="var(--pen)"/><path d="M60 100 V 112" stroke="var(--pen)" stroke-width="4"/>
        ${[["perfil privado", 52], ["contraseña solo tuya", 92], ["ubicación desactivada", 132]].map(([n, y]) => `<path d="M112 ${y - 4} l 6 6 l 10 -12" fill="none" stroke="var(--leaf)" stroke-width="3"/>${t(136, y, n, { s: 11, a: "start" })}`).join("")}`),
    },
    {
      html: `<h3>El ciberacoso</h3><p>El <b>ciberacoso</b> (ciberbullying) es el acoso que se produce a través de móviles, redes sociales, juegos en línea o mensajería. Formas:</p><ul><li>Insultos o amenazas por mensaje.</li><li>Difundir fotos o vídeos humillantes, o rumores.</li><li><b>Excluir</b> a alguien de un grupo a propósito.</li><li>Suplantar la identidad de alguien (crear un perfil falso).</li></ul><p>Es especialmente dañino porque no se acaba al salir del colegio (está <b>en casa, a todas horas</b>), puede llegar a muchísimas personas en segundos y a veces el acosador es anónimo.</p>`,
      video: { id: "tVAjiyNzYq0", titulo: "¿Cómo actuar ante el ciberacoso? Ignora, bloquea, pide ayuda", canal: "PantallasAmigas", vistas: 1999785 },
    },
    {
      html: `<h3>Qué hacer ante el ciberacoso</h3>${tabla(["Si lo sufres", "Si lo ves"], [["no respondas ni te vengues", "no lo compartas ni le des «me gusta»"], ["guarda pruebas (capturas)", "apoya en privado a la víctima"], ["bloquea y denuncia en la plataforma", "denuncia el contenido"], ["cuéntaselo a un adulto de confianza", "avisa a un adulto del centro"]])}<p>Recursos: el teléfono contra el acoso escolar <b>900 018 018</b> y la línea de ayuda en ciberseguridad del INCIBE, el <b>017</b>. Difundir imágenes íntimas de otra persona sin su permiso es un <mark>delito</mark>, aunque te las haya enviado ella.</p>`,
      svg: svg("Cuatro pasos ante el ciberacoso: no responder, guardar pruebas, bloquear y pedir ayuda", chips([["No respondas", "ni te vengues", "var(--sun)"], ["Guarda pruebas", "capturas con fecha", "var(--pen)"], ["Bloquea y denuncia", "en la plataforma", "var(--inf)"], ["Pide ayuda", "adulto de confianza · 017 · 900 018 018", "var(--red)"]], 8, 36), 180),
    },
    {
      html: `<h3>La desinformación</h3><p>Las <b>noticias falsas</b> (fake news) son informaciones inventadas o manipuladas que se presentan como verdaderas. Se difunden rápido porque provocan emociones fuertes (miedo, indignación). Para detectarlas:</p><ol><li>Comprueba la <b>fuente</b>: ¿es un medio conocido? ¿Quién lo firma?</li><li>Lee más allá del <b>titular</b>.</li><li>Mira la <b>fecha</b>: puede ser antigua.</li><li>Busca si otros medios fiables lo cuentan.</li><li>Desconfía de imágenes sin contexto: pueden estar trucadas o generadas con inteligencia artificial.</li><li>Si dudas, <b>no lo compartas</b>.</li></ol>`,
    },
    {
      html: `<h3>La netiqueta</h3><p>La <b>netiqueta</b> son las normas de buena educación en internet:</p><ul><li>Trata a los demás como te gustaría que te trataran.</li><li>No escribas en MAYÚSCULAS (equivale a gritar).</li><li>Respeta las opiniones diferentes; critica ideas, no personas.</li><li>No compartas contenido de otros sin citar la fuente; respeta los <b>derechos de autor</b>.</li><li>Piensa antes de publicar: ¿es verdad?, ¿es necesario?, ¿es amable?</li></ul>`,
    },
    {
      html: `<h3>Un uso equilibrado</h3><p>Las aplicaciones están diseñadas para que pasemos en ellas el máximo tiempo (notificaciones, scroll infinito, recompensas). Un uso excesivo puede afectar al <b>sueño</b>, al estudio, a la actividad física y a las relaciones cara a cara.</p><p>Señales de alerta: no poder dejar el móvil, ponerse nervioso sin él, mentir sobre el tiempo de uso. Consejos: activar el control de <b>tiempo de pantalla</b>, silenciar notificaciones, dejar el móvil fuera de la habitación por la noche y reservar momentos <b>sin pantallas</b> (comidas, estudio). La tecnología es una gran herramienta: la clave es que <mark>la uses tú a ella</mark>, y no al revés.</p>`,
    },
  ],
  figura: {
    titulo: "La ética en la era digital",
    svg: filas("Resumen: ciudadanía digital, identidad y huella, privacidad, ciberacoso, desinformación y uso equilibrado", [["Ciudadanía digital", "mismas normas éticas que fuera de la red", "var(--eso)"], ["Huella digital", "todo deja rastro · cuida tu reputación", "var(--pen)"], ["Privacidad", "perfil privado · permiso · 14 años", "var(--inf)"], ["Ciberacoso", "no responder · pruebas · bloquear · ayuda", "var(--red)"], ["Bulos", "fuente · fecha · contrastar · no compartir", "var(--sun)"], ["Equilibrio", "tiempo de pantalla · sin móvil de noche", "var(--leaf)"]], 200),
  },
  video: { id: "dcYgA1qHBpM", titulo: "La ciudadanía digital explicada", canal: "Astraway", vistas: 206787, megusta: 0, busqueda: "ciudadanía digital riesgos valores" },
  quiz: mezcla([
    { q: "La huella digital es…", o: ["el rastro de lo que hacemos en internet", "una huella dactilar", "una app"], a: 0, e: "Difícil de borrar." },
    { q: "Hasta los 14 años, para que una plataforma use tus datos hace falta…", o: ["el consentimiento de tus padres", "nada", "pagar"], a: 0, e: "Ley española." },
    { q: "Antes de publicar una foto de un amigo hay que…", o: ["pedirle permiso", "ponerle filtro", "nada"], a: 0, e: "Su imagen es suya." },
    { q: "Excluir a propósito a alguien de un grupo de mensajería puede ser…", o: ["ciberacoso", "netiqueta", "privacidad"], a: 0, e: "Forma de exclusión." },
    { q: "Si sufres ciberacoso, lo primero es…", o: ["no responder y guardar pruebas", "vengarte", "borrarlo todo"], a: 0, e: "Y pedir ayuda." },
    { q: "La línea de ayuda en ciberseguridad del INCIBE es el…", o: ["017", "112", "091"], a: 0, e: "Gratuita y confidencial." },
    { q: "Escribir en mayúsculas en un chat equivale a…", o: ["gritar", "susurrar", "nada"], a: 0, e: "Netiqueta." },
    { q: "Ante una noticia sorprendente, lo primero es…", o: ["comprobar la fuente", "compartirla", "creerla"], a: 0, e: "Puede ser un bulo." },
    { q: "Difundir imágenes íntimas de alguien sin su permiso es…", o: ["un delito", "una broma", "legal si te las envió"], a: 0, e: "Siempre." },
    { q: "Para dormir mejor, el móvil por la noche debe estar…", o: ["fuera de la habitación", "debajo de la almohada", "con sonido"], a: 0, e: "Uso equilibrado." },
  ]),
  examen: mezcla([
    { q: "La identidad digital es…", o: ["la imagen que los demás tienen de ti a partir de internet", "tu contraseña", "tu número de teléfono"], a: 0, e: "Incluye lo que otros publican." },
    { q: "El ciberacoso es especialmente dañino porque…", o: ["llega a todas horas y a mucha gente", "es siempre anónimo", "solo ocurre en clase"], a: 0, e: "Sin descanso." },
    { q: "Las noticias falsas se difunden rápido porque…", o: ["provocan emociones fuertes", "son siempre aburridas", "las publica la ONU"], a: 0, e: "Miedo, indignación." },
  ]),
  feynman: ["Qué es la ciudadanía digital", "Identidad y huella digital", "Cómo proteger la privacidad", "Qué es el ciberacoso y cómo actuar", "Cómo detectar una noticia falsa"],
  mapa: mapa("ÉTICA DIGITAL", "var(--eso)", [
    ["Identidad", "huella · reputación", "var(--pen)"],
    ["Privacidad", "datos · permiso", "var(--inf)"],
    ["Ciberacoso", "no callar · ayuda", "var(--red)"],
    ["Información", "bulos · netiqueta", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Ciudadanía digital", "Participar en internet de forma responsable y respetuosa."],
    ["Identidad digital", "Imagen de ti que se forma con lo que hay en internet."],
    ["Huella digital", "Rastro de todo lo que haces en la red."],
    ["Datos personales", "Información que te identifica."],
    ["Ciberacoso", "Acoso repetido a través de medios digitales."],
    ["017", "Línea de ayuda en ciberseguridad (INCIBE)."],
    ["Fake news", "Noticia falsa presentada como verdadera."],
    ["Netiqueta", "Normas de educación en internet."],
  ],
  familias: ["Revisad juntos la configuración de privacidad de sus redes.", "Acordad un horario familiar sin pantallas.", "Buscad juntos si una noticia viral es verdadera."],
  profesores: {
    saberes: "Ética y tecnología: ciudadanía digital, identidad y huella digital, protección de datos y privacidad, ciberacoso, desinformación y uso responsable y equilibrado de las tecnologías (RD 217/2022, Educación en Valores Cívicos y Éticos, bloques A y B).",
    ideas: ["Búsqueda de la propia huella digital (con supervisión).", "Taller de verificación de noticias con ejemplos reales.", "Decálogo de netiqueta para el grupo de clase."],
  },
  fuentes: [RD, { t: "INCIBE: Línea de ayuda en ciberseguridad 017", url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad" }, { t: "Agencia Española de Protección de Datos", url: "https://www.aepd.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Te llega un vídeo de un compañero cayéndose en el patio y todos lo reenvían. ¿Qué haces?", pasos: ["Difundirlo humilla al compañero: vulnera su dignidad.", "No lo reenvías ni lo comentas.", "Pides que lo borren y apoyas al compañero; si sigue, avisas a un adulto."], resultado: "Cortar la cadena y apoyar a la víctima." },
    { enunciado: "Lees: «¡URGENTE! Mañana cierran todos los colegios por un virus». ¿Cómo lo compruebas?", pasos: ["Buscar la fuente: ¿lo dice la Consejería de Educación?", "Ver si medios fiables lo publican.", "Mirar la fecha."], resultado: "Si no aparece en fuentes oficiales, es un bulo: no compartir." },
    { enunciado: "Quieres subir una foto en la puerta de tu casa con el uniforme del colegio. ¿Qué riesgos tiene?", pasos: ["Muestra dónde vives.", "Muestra a qué colegio vas.", "Cualquiera podría localizarte."], resultado: "Mejor no publicarla o elegir otra foto sin esos datos." },
  ],
  errores: [
    "Creer que lo que se borra desaparece de internet.",
    "Pensar que en internet todo vale porque es «virtual».",
    "Compartir contraseñas con amigos «de confianza».",
    "Reenviar contenido humillante «porque lo hace todo el mundo».",
    "Compartir una noticia solo por el titular.",
  ],
  ejercicios: [
    { q: "Define ciudadanía digital.", sol: "Capacidad de participar en internet de forma responsable, segura y respetuosa." },
    { q: "Diferencia identidad digital y huella digital.", sol: "Identidad: la imagen que tienen de ti. Huella: el rastro de lo que haces." },
    { q: "Escribe cinco consejos de privacidad.", sol: "Perfil privado, no compartir contraseñas, sin ubicación, no publicar datos personales, pedir permiso." },
    { q: "¿A qué edad puedes dar tú solo el consentimiento para tus datos en España?", sol: "A partir de los 14 años." },
    { q: "Escribe cuatro formas de ciberacoso.", sol: "Insultos, difundir fotos humillantes, excluir, suplantar identidad." },
    { q: "¿Por qué el ciberacoso es especialmente dañino?", sol: "Llega a todas horas, a mucha gente y puede ser anónimo." },
    { q: "¿Qué debes hacer si ves un caso de ciberacoso?", sol: "No compartir, apoyar a la víctima, denunciar y avisar a un adulto." },
    { q: "Escribe cuatro pasos para detectar una noticia falsa.", sol: "Fuente, leer más allá del titular, fecha, contrastar con otros medios." },
    { q: "Escribe tres normas de netiqueta.", sol: "No escribir en mayúsculas, respetar opiniones, citar las fuentes." },
    { q: "Propón tu plan para un uso equilibrado del móvil.", sol: "Respuesta abierta: límite de tiempo, sin móvil por la noche, momentos sin pantallas." },
  ],
};
