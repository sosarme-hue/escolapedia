// Tecnología y Digitalización 2º ESO: internet y uso seguro de la red. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Internet y uso seguro de la red",
  minutos: 55,
  objetivos: ["Explicar qué es internet y cómo viaja la información", "Distinguir los servicios principales de internet", "Proteger la identidad digital, las contraseñas y la privacidad", "Reconocer riesgos como el ciberacoso, el phishing o los bulos y saber cómo actuar"],
  claves: ["internet", "red", "router", "dirección IP", "servidor", "navegador", "contraseña", "identidad digital", "privacidad", "phishing", "malware", "ciberacoso", "bulo"],
  pregunta: {
    texto: "Si borras una foto que subiste a una red social, ¿desaparece de internet para siempre?",
    respuesta: "No necesariamente. Antes de borrarla, otras personas pueden haberla <b>descargado, reenviado o capturado</b> con una captura de pantalla, y la plataforma puede guardar copias en sus servidores. Por eso se dice que internet «no olvida». La mejor protección es <b>pensar antes de publicar</b>: no subas nada que no te importaría que viera todo el mundo, también dentro de cinco años.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es internet?</h3><p>Una <mark>red informática</mark> es un conjunto de dispositivos conectados entre sí para compartir información y recursos. La red de tu casa, que une el ordenador, los móviles, la tele y la impresora, es una <b>red local</b> (LAN). <mark>Internet</mark> es la <b>red de redes</b>: une miles de millones de dispositivos de todo el mundo mediante cables de cobre y de <b>fibra óptica</b>, enormes <b>cables submarinos</b> que cruzan los océanos, antenas de telefonía móvil y satélites. Nació en los años 60 como un proyecto militar y universitario de Estados Unidos (ARPANET) y en 1989 el científico Tim Berners-Lee, en el CERN, inventó la <b>World Wide Web</b> (las páginas web enlazadas), que la hizo fácil de usar para todo el mundo. Hoy la usan más de 5000 millones de personas. Nadie es dueño de internet: funciona gracias a unas normas comunes, los <b>protocolos</b>.</p>`,
    },
    {
      html: `<h3>Cómo viaja la información</h3><p>Cada dispositivo conectado a internet tiene una <mark>dirección IP</mark>, un número que lo identifica, como la dirección postal de una casa. Cuando pides una página web, tu dispositivo envía la petición por wifi o cable al <mark>router</mark>, el aparato que conecta tu red local con internet. Tu <b>proveedor de internet</b> la encamina, saltando de router en router, hasta el <mark>servidor</mark>: un ordenador potente, normalmente en un gran centro de datos, que guarda la página y la envía de vuelta. La información no viaja entera, sino dividida en pequeños <b>paquetes</b> que pueden ir por caminos distintos y se vuelven a juntar al llegar. Como recordar números es difícil, usamos <b>nombres de dominio</b> (como wikipedia.org), y unos servidores llamados <b>DNS</b> los traducen a direcciones IP, como una agenda de contactos. Todo esto ocurre en menos de un segundo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Camino de una petición web: el móvil envía la petición al router de casa, pasa por internet y llega al servidor, que devuelve la página">${BG}
        ${caja(10, 64, 50, 40, "móvil", "var(--pen)", { size: 10 })}${caja(78, 64, 50, 40, "router", "#b8860b", { size: 10 })}
        <ellipse cx="166" cy="84" rx="28" ry="22" fill="var(--muted)" fill-opacity=".15" stroke="var(--muted)" stroke-width="2"/>${t(166, 88, "internet", { size: 9.5 })}
        ${caja(204, 60, 48, 48, "servidor", "var(--red)", { size: 9 })}
        ${fl(60, 76, 77, 76, "var(--leaf)", 1.8)}${fl(128, 76, 140, 76, "var(--leaf)", 1.8)}${fl(192, 76, 203, 76, "var(--leaf)", 1.8)}
        ${fl(203, 94, 192, 94, "var(--red)", 1.8)}${fl(140, 94, 129, 94, "var(--red)", 1.8)}${fl(77, 94, 61, 94, "var(--red)", 1.8)}
        ${t(130, 36, "petición: «dame la página»", { size: 10, color: "var(--leaf)" })}${t(130, 136, "respuesta: la página en paquetes", { size: 10, color: "var(--red)" })}
        ${t(130, 160, "IP · DNS · protocolos", { size: 9.5, color: "var(--muted)" })}</svg>`,
      video: { id: "rw41W8crZ_Y", titulo: "¿Cómo funciona Internet?", canal: "Sabin Ingeniería Civil", vistas: 3565303 },
    },
    {
      html: `<h3>Los servicios de internet</h3><p>Internet ofrece muchos <mark>servicios</mark>. La <b>web</b> permite consultar páginas con un <b>navegador</b> (Chrome, Firefox, Safari, Edge) y encontrar información con un <b>buscador</b>. El <b>correo electrónico</b> envía mensajes a una dirección del tipo nombre@dominio. La <b>mensajería instantánea</b> y las <b>videollamadas</b> permiten comunicarse en tiempo real. Las <b>redes sociales</b> sirven para compartir publicaciones, fotos y vídeos con otras personas. El <b>almacenamiento en la nube</b> guarda archivos en servidores, y las plataformas de <b>streaming</b> emiten música, series y vídeos. También hay <b>comercio electrónico</b>, banca en línea, administración electrónica, plataformas educativas como la de tu instituto y <b>videojuegos en línea</b>. Las direcciones web que empiezan por <b>https://</b> y muestran un candado cifran la información, para que nadie pueda leerla por el camino.</p>`,
    },
    {
      html: `<h3>Buscar y contrastar información</h3><p>En internet hay muchísima información, pero no toda es fiable. Para buscar bien: usa <b>palabras clave</b> precisas en vez de frases largas; pon entre comillas una frase exacta; y mira más allá del primer resultado, que a veces es un anuncio. Para <mark>evaluar una fuente</mark>, pregúntate: ¿<b>quién</b> la ha escrito (una institución, un experto, un anónimo)?, ¿<b>cuándo</b> se publicó?, ¿cita de dónde saca los datos?, ¿quiere venderme algo o convencerme? Desconfía de los <mark>bulos</mark> o <i>fake news</i>: noticias falsas que se difunden para engañar, generar miedo o ganar dinero con los clics. Suelen tener titulares exagerados, faltas de ortografía, no citan fuentes y piden que los compartas rápidamente. Antes de reenviar algo, <b>contrástalo</b> en otras fuentes fiables o en webs de verificación. Y cuando uses información o imágenes de otros, <b>cita la fuente</b> y respeta los derechos de autor.</p>`,
    },
    {
      html: `<h3>Identidad digital y privacidad</h3><p>Tu <mark>identidad digital</mark> es la imagen de ti que se forma en internet con todo lo que publicas tú y lo que otros publican sobre ti: fotos, comentarios, «me gusta», vídeos, perfiles. La <b>huella digital</b> es el rastro que dejas: búsquedas, páginas visitadas, ubicaciones. Como lo que se publica puede quedarse para siempre, conviene cuidarlas. Protege tu <mark>privacidad</mark>: configura tus redes sociales como <b>privadas</b>; acepta solo a personas que conozcas en la vida real; no publiques datos personales como tu dirección, teléfono, colegio, horarios o ubicación en tiempo real; desactiva la geolocalización de las fotos; y <b>pide permiso</b> antes de publicar fotos de otras personas. En España, la ley establece que hasta los <b>14 años</b> hace falta el consentimiento de los padres para que las redes sociales traten tus datos. Recuerda: lo que publicas hoy lo puede ver mañana un profesor, una universidad o una empresa.</p>`,
    },
    {
      html: `<h3>Contraseñas seguras</h3><p>Una <mark>contraseña</mark> es la llave de tus cuentas. Una contraseña segura: es <b>larga</b> (al menos 12 caracteres); mezcla <b>mayúsculas, minúsculas, números y símbolos</b>; no contiene datos personales fáciles de adivinar (tu nombre, fecha de nacimiento, el nombre de tu mascota ni «123456»); y es <b>distinta para cada servicio</b>, para que si roban una no puedan entrar en todas. Un truco para recordarlas es usar una frase: «MiPerroComeDosVecesAlDía!» o tomar la primera letra de cada palabra de una frase. No compartas tus contraseñas con nadie, ni con tu mejor amigo, y <b>cierra siempre la sesión</b> en ordenadores compartidos. Activa la <mark>verificación en dos pasos</mark>: además de la contraseña, el servicio pide un código que llega al móvil, así que, aunque alguien averigüe la contraseña, no podrá entrar. Un <b>gestor de contraseñas</b> puede recordarlas por ti.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación de contraseñas: 123456 es muy débil, luis2011 es débil y una frase larga con mayúsculas, números y símbolos es fuerte">${BG}
        ${[["123456", 18, "var(--red)", "muy débil"], ["luis2011", 70, "#e8892c", "débil"], ["MiPerroCome2Veces!", 210, "var(--leaf)", "fuerte"]].map(([s, w, c, e], i) => { const y = 34 + i * 46; return `${t(16, y, s, { size: 11, anchor: "start", font: "monospace" })}<rect x="16" y="${y + 8}" width="210" height="10" rx="5" fill="var(--muted)" fill-opacity=".2"/><rect x="16" y="${y + 8}" width="${w}" height="10" rx="5" fill="${c}"/>${t(226, y, e, { size: 9.5, color: c, anchor: "end" })}`; }).join("")}
        ${t(130, 170, "larga · variada · distinta en cada sitio", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Amenazas técnicas: malware y phishing</h3><p>El <mark>malware</mark> o software malicioso son programas creados para dañar un dispositivo o robar información. Los <b>virus</b> se copian en otros archivos; los <b>troyanos</b> se esconden en programas aparentemente útiles; el <b>spyware</b> espía lo que haces; y el <b>ransomware</b> bloquea tus archivos y pide un rescate. El <mark>phishing</mark> es un engaño en el que un delincuente se hace pasar por una empresa o persona de confianza (un banco, una tienda, una red social, Correos) para que le des tus contraseñas o datos bancarios. Suele llegar por correo, SMS o mensaje, con una urgencia («tu cuenta será bloqueada») y un enlace a una web falsa muy parecida a la real. Para protegerte: no abras enlaces ni archivos de desconocidos; comprueba la dirección real de la web; descarga apps solo de tiendas oficiales; mantén actualizados el sistema y el antivirus; y haz <b>copias de seguridad</b>.</p>`,
      video: { id: "2TferQprZ0g", titulo: "Las 10 claves para usar internet con seguridad", canal: "PantallasAmigas", vistas: 2233173 },
    },
    {
      html: `<h3>Riesgos para las personas: ciberacoso y otros</h3><p>Algunos riesgos de internet afectan directamente a las personas. El <mark>ciberacoso</mark> o <i>ciberbullying</i> es el acoso repetido entre menores a través de mensajes, redes o juegos: insultos, amenazas, difundir fotos o rumores, excluir de grupos o suplantar la identidad. El <mark>grooming</mark> es cuando un adulto se gana la confianza de un menor por internet, a menudo haciéndose pasar por alguien de su edad, con intenciones sexuales. El <b>sexting</b> es enviar fotos íntimas, que pueden acabar difundidas sin control. También hay riesgos de <b>uso excesivo</b> de pantallas y videojuegos, que afectan al sueño, al estudio y a las relaciones. Qué hacer: <b>no respondas</b> a provocaciones, <b>guarda pruebas</b> (capturas), <b>bloquea y denuncia</b> en la plataforma y, sobre todo, <b>cuéntaselo a un adulto de confianza</b>. Si ves que acosan a alguien, no lo compartas ni te rías: apoya a la víctima y avisa. En España, el teléfono gratuito <b>017</b> de INCIBE ayuda en temas de ciberseguridad.</p>`,
    },
    {
      html: `<h3>Netiqueta y bienestar digital</h3><p>La <mark>netiqueta</mark> son las normas de buena educación en internet. Trata a los demás como te gustaría que te trataran; detrás de cada pantalla hay una persona con sentimientos. Escribir en MAYÚSCULAS equivale a gritar. No difundas rumores, bulos ni fotos de otros sin permiso. Respeta las opiniones distintas y discute con argumentos, sin insultos. Y piensa antes de publicar: ¿es verdad?, ¿es útil?, ¿es amable? El <b>bienestar digital</b> consiste en usar la tecnología de forma equilibrada: pon límites de tiempo, desactiva notificaciones innecesarias, deja el móvil fuera del dormitorio por la noche, no lo uses en las comidas y reserva tiempo para el deporte, la lectura y estar con amigos en persona. Los propios móviles tienen herramientas para ver cuánto tiempo pasas en cada aplicación. Usar bien internet es una gran oportunidad para aprender, crear y comunicarte.</p>`,
    },
  ],
  figura: {
    titulo: "Decálogo para navegar seguro",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Diez consejos: contraseñas fuertes, verificación en dos pasos, perfil privado, no dar datos personales, pensar antes de publicar, desconfiar de enlaces, actualizar, contrastar información, respetar a los demás y pedir ayuda a un adulto">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${["Contraseñas largas y distintas", "Verificación en dos pasos", "Perfil privado", "Sin datos personales", "Piensa antes de publicar", "Desconfía de enlaces raros", "Actualiza y usa antivirus", "Contrasta antes de compartir", "Respeta a los demás", "Pide ayuda a un adulto"].map((s, i) => { const col = i < 5 ? 0 : 1; const fila = i % 5; const x = 24 + col * 304; const y = 22 + fila * 40; return `<rect x="${x}" y="${y}" width="288" height="32" rx="10" fill="var(--card)" stroke="${col ? "var(--leaf)" : "var(--pen)"}" stroke-width="2"/><circle cx="${x + 20}" cy="${y + 16}" r="11" fill="${col ? "var(--leaf)" : "var(--pen)"}"/>${t(x + 20, y + 20, String(i + 1), { size: 11, color: "#fff" })}${t(x + 42, y + 21, s, { size: 13, anchor: "start" })}`; }).join("")}
    </svg>`,
  },
  video: { id: "t-x73w1N1os", titulo: "Recomendaciones para el uso seguro de internet y las redes sociales", canal: "PantallasAmigas", vistas: 1952783, megusta: 10844, busqueda: "uso seguro de internet adolescentes" },
  ejemplos: [
    { enunciado: "Recibes un SMS: «Su paquete está retenido. Pague 1,99 € aquí: correos-envio24.xyz». ¿Qué haces?",
      pasos: ["Señales de phishing: urgencia, pago pequeño y una dirección web que no es la oficial.", "No abras el enlace ni des datos.", "Bórralo, avisa a un adulto y, si quieres, consulta la web oficial escribiéndola tú."],
      resultado: "Es phishing: no se pulsa." },
    { enunciado: "Mejora la contraseña «ana2012».",
      pasos: ["Problemas: corta, con tu nombre y año, solo minúsculas y números.", "Usa una frase: «MeGustaNadarLosJueves».", "Añade números y símbolos: «MeGustaNadar3Jueves!»."],
      resultado: "Larga, variada y sin datos personales." },
    { enunciado: "En un grupo de clase circula una foto de un compañero para burlarse. ¿Cómo actúas?",
      pasos: ["No la reenvíes ni la comentes.", "Guarda una captura como prueba y apoya al compañero.", "Cuéntaselo a un profesor o adulto de confianza."],
      resultado: "No participar, apoyar y avisar." },
  ],
  errores: [
    "Usar la misma contraseña para todo.",
    "Pensar que borrar una publicación la elimina de internet para siempre.",
    "Creer que si algo está en internet o lo comparte mucha gente es verdad.",
    "Aceptar en redes a desconocidos porque tienen muchos seguidores o parecen de tu edad.",
    "Callarse ante el ciberacoso por miedo: hay que contarlo a un adulto.",
  ],
  ejercicios: [
    { q: "¿Qué es internet? ¿Por qué se dice que es una red de redes?", sol: "Una red mundial que une millones de redes y dispositivos entre sí." },
    { q: "¿Qué función tienen el router y el servidor?", sol: "El router conecta la red de casa con internet; el servidor guarda y envía las páginas o servicios." },
    { q: "¿Para qué sirven los DNS?", sol: "Para traducir los nombres de dominio a direcciones IP." },
    { q: "Nombra cinco servicios de internet.", sol: "Web, correo electrónico, mensajería, redes sociales, almacenamiento en la nube." },
    { q: "¿Qué preguntas te haces para saber si una web es fiable?", sol: "Quién la escribe, cuándo, si cita fuentes y si quiere venderme o convencerme de algo." },
    { q: "Explica qué es la identidad digital.", sol: "La imagen de una persona que se forma en internet con lo que publica y lo que publican sobre ella." },
    { q: "Escribe cuatro características de una contraseña segura.", sol: "Larga, con mayúsculas, minúsculas, números y símbolos, sin datos personales y distinta para cada servicio." },
    { q: "¿Qué es la verificación en dos pasos?", sol: "Pedir, además de la contraseña, un código enviado al móvil." },
    { q: "¿Qué es el phishing y cómo se reconoce?", sol: "Un engaño para robar datos haciéndose pasar por alguien de confianza; urgencia, enlaces raros, webs falsas." },
    { q: "¿Qué pasos hay que seguir ante un caso de ciberacoso?", sol: "No responder, guardar pruebas, bloquear y denunciar y contárselo a un adulto de confianza." },
  ],
  quiz: [
    { q: "Internet es…", o: ["una red de redes", "un programa", "una empresa"], a: 0, e: "Red mundial de redes." },
    { q: "La web la inventó…", o: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs"], a: 0, e: "En el CERN, en 1989." },
    { q: "Identifica cada dispositivo en internet…", o: ["la dirección IP", "el DNS", "el navegador"], a: 0, e: "La IP." },
    { q: "Une la red de casa con internet…", o: ["el router", "el ratón", "el servidor"], a: 0, e: "El router." },
    { q: "Una web con https y candado…", o: ["cifra la información", "es siempre verdad", "es gratis"], a: 0, e: "Cifra, pero no garantiza que sea fiable." },
    { q: "Una contraseña segura es…", o: ["123456", "tu nombre", "larga y variada"], a: 2, e: "Larga y variada." },
    { q: "El ransomware…", o: ["pide un rescate", "acelera el ordenador", "es un antivirus"], a: 0, e: "Bloquea archivos y pide dinero." },
    { q: "Un SMS urgente con un enlace para pagar puede ser…", o: ["phishing", "netiqueta", "un DNS"], a: 0, e: "Phishing." },
    { q: "Ante el ciberacoso, lo primero es…", o: ["responder", "contárselo a un adulto", "borrar todo"], a: 1, e: "Pedir ayuda y guardar pruebas." },
    { q: "Escribir en mayúsculas en internet equivale a…", o: ["gritar", "susurrar", "nada"], a: 0, e: "Netiqueta." },
  ],
  examen: [
    { q: "Antes de reenviar una noticia sorprendente conviene…", o: ["contrastarla", "reenviarla rápido", "añadir emojis"], a: 0, e: "Puede ser un bulo." },
    { q: "Hasta qué edad hace falta el permiso de los padres para las redes en España…", o: ["12", "14", "18"], a: 1, e: "14 años." },
    { q: "La información viaja por internet en…", o: ["paquetes", "un solo bloque", "cartas"], a: 0, e: "Paquetes." },
  ],
  feynman: ["Cómo llega una página web desde el servidor hasta tu móvil", "Cómo crear una contraseña segura", "Qué hacer si sufres o ves ciberacoso"],
  mapa: mapa("INTERNET", "var(--eso)", [
    ["Funcionamiento", "IP · router · servidor · DNS", "var(--pen)"],
    ["Servicios", "web · correo · redes · nube", "#b8860b"],
    ["Proteger", "contraseñas · privacidad · 2 pasos", "var(--leaf)"],
    ["Riesgos", "phishing · malware · ciberacoso", "var(--red)"],
  ], 290),
  tarjetas: [
    ["Internet", "Red mundial de redes de ordenadores."],
    ["Dirección IP", "Número que identifica un dispositivo en la red."],
    ["Router", "Conecta la red local con internet."],
    ["Identidad digital", "Imagen de ti que se forma en internet."],
    ["Contraseña segura", "Larga, variada, sin datos personales y única."],
    ["Phishing", "Engaño para robar datos haciéndose pasar por otro."],
    ["Ciberacoso", "Acoso repetido entre menores por internet."],
    ["Bulo", "Noticia falsa difundida para engañar."],
  ],
  familias: ["Revisad juntos la configuración de privacidad de las redes y apps del móvil.", "Acordad en familia normas de uso de pantallas (horarios, móvil fuera del dormitorio).", "Guardad el teléfono 017 de INCIBE por si necesitáis ayuda."],
  profesores: {
    saberes: "Digitalización del entorno personal de aprendizaje y sistemas de comunicación: funcionamiento de internet, servicios, búsqueda y contraste de información, identidad digital, seguridad, privacidad y bienestar digital (RD 217/2022, Tecnología y Digitalización, bloque D).",
    ideas: ["Taller de detección de phishing con mensajes reales anonimizados.", "Comprobación de la fortaleza de contraseñas inventadas (sin usar las reales).", "Campaña del alumnado contra el ciberacoso para el centro."],
  },
  fuentes: [RD, wiki("Internet", "Internet"), wiki("Phishing", "Phishing"), { t: "INCIBE: Línea de ayuda en ciberseguridad 017", url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad" }],
  revisado: REV,
};
