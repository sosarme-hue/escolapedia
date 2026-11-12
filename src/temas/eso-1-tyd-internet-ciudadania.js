// Tecnología y Digitalización 1º ESO: Internet y ciudadanía digital. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "Internet y ciudadanía digital",
  minutos: 55,
  objetivos: ["Explicar de forma sencilla cómo funciona Internet y sus servicios", "Buscar información de forma eficaz y comprobar si es fiable", "Proteger la privacidad, la identidad digital y las contraseñas", "Comportarse con respeto en la red y saber actuar ante el ciberacoso"],
  claves: ["Internet", "red", "servidor", "navegador", "dirección web", "buscador", "fuente fiable", "bulo", "huella digital", "privacidad", "contraseña", "ciberacoso", "netiqueta", "derechos de autor", "desconexión digital"],
  pregunta: {
    texto: "Subes una foto a una red social y a los cinco minutos la borras. ¿Ha desaparecido de verdad?",
    respuesta: "No necesariamente. En esos cinco minutos alguien pudo <b>verla, hacer una captura o reenviarla</b>, y la propia plataforma puede guardar copias. Lo que se publica en Internet puede <b>copiarse y difundirse</b> sin control y es muy difícil de borrar del todo. Por eso, antes de publicar algo, conviene preguntarse: ¿me importaría que lo viera cualquiera, dentro de unos años?",
  },
  bloques: [
    {
      html: `<h3>¿Qué es Internet?</h3><p><mark>Internet</mark> es una <b>red mundial de redes de ordenadores</b> conectados entre sí, que pueden intercambiar información. Una <b>red</b> es un conjunto de dispositivos conectados: los ordenadores y móviles de tu casa forman una pequeña red a través del <b>router</b>, que a su vez se conecta con la red de tu compañía de Internet, y esta con otras, hasta formar una gigantesca red que rodea el planeta mediante cables de fibra óptica (muchos de ellos por el fondo del mar), antenas y satélites. En Internet hay dos tipos de ordenadores: los <mark>servidores</mark>, potentes ordenadores encendidos siempre que guardan y ofrecen información (páginas web, vídeos, correos), y los <mark>clientes</mark>, como tu móvil, que piden esa información. Para que todos se entiendan, usan unas reglas comunes llamadas <b>protocolos</b>, y cada dispositivo conectado tiene una dirección numérica única, la <b>dirección IP</b>. La información viaja dividida en pequeños <b>paquetes</b> que pueden ir por caminos distintos y se vuelven a juntar al llegar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un móvil y un ordenador se conectan a un router, que se conecta a Internet, donde están los servidores con la información">${BG}
        ${cj(12, 40, 54, 30, "móvil", COL.azul, { size: 10 })}${cj(12, 110, 54, 30, "portátil", COL.azul, { size: 10 })}${cj(92, 75, 52, 30, "router", COL.naranja, { size: 10 })}
        <ellipse cx="200" cy="90" rx="46" ry="34" fill="var(--card)" stroke="var(--leaf)" stroke-width="2" stroke-dasharray="5 3"/>${t(200, 80, "Internet", { size: 11, color: COL.verde })}
        ${cj(176, 92, 48, 20, "servidor", COL.morado, { size: 9.5 })}
        <path d="M66 55 L 92 84 M66 125 L 92 96 M144 90 H 154" stroke="var(--ink)" stroke-width="1.6"/>
        ${t(130, 30, "petición y respuesta", { size: 9.5, weight: 400, color: "var(--muted)" })}${t(200, 150, "cables, fibra, satélites", { size: 9, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "31LE0bPLrhM", titulo: "Cómo funciona el Internet", canal: "ThePRBridge", vistas: 1154478 },
    },
    {
      html: `<h3>Los servicios de Internet</h3><p>A través de Internet se ofrecen muchos <mark>servicios</mark>. La <b>World Wide Web</b> (la «web») es el conjunto de páginas enlazadas entre sí que se visitan con un <mark>navegador</mark> (Firefox, Chrome, Safari, Edge). Cada página tiene una dirección, llamada <b>URL</b>, como «https://www.ejemplo.es/inicio»: «https» indica el protocolo (la «s» significa que la conexión es segura y cifrada), «www.ejemplo.es» es el <b>dominio</b> o nombre del sitio, y lo que sigue indica la página concreta. Otros servicios son el <b>correo electrónico</b>, para enviar mensajes con archivos adjuntos; la <b>mensajería instantánea</b> y las <b>videollamadas</b>; las <b>redes sociales</b>; el <b>almacenamiento en la nube</b>, para guardar archivos en servidores y acceder a ellos desde cualquier lugar; las plataformas de vídeo y música en <b>streaming</b>; los juegos en línea; el comercio y la banca electrónicos; y las plataformas educativas, como el aula virtual del instituto.</p>`,
    },
    {
      html: `<h3>Buscar información con eficacia</h3><p>Los <mark>buscadores</mark> son servicios que encuentran páginas web a partir de unas <b>palabras clave</b>. Para buscar bien: usa <b>pocas palabras y precisas</b> («partes de la célula vegetal» funciona mejor que «quiero saber cuáles son las partes de las células de las plantas»); pon una frase <b>entre comillas</b> para buscarla exacta; usa el <b>signo menos</b> para excluir una palabra («jaguar -coche»); y filtra por tipo de resultado (imágenes, noticias, vídeos) o por fecha. Pero encontrar no es suficiente: no todo lo que hay en Internet es verdad. Cualquiera puede publicar, y hay errores, opiniones disfrazadas de datos, publicidad y <mark>bulos</mark> o noticias falsas hechos a propósito para engañar. Una <b>fuente fiable</b> suele ser de un organismo oficial, una universidad, un medio de comunicación reconocido o un experto, indica <b>quién</b> la escribe y <b>cuándo</b>, cita sus fuentes y no intenta asustar ni enfadar. Ante una información dudosa, hay que <b>contrastarla</b> con otras fuentes antes de creerla o compartirla.</p>${tabla(["Pregunta", "Señal de alerta"], [["¿Quién lo publica?", "autor anónimo o desconocido"], ["¿Cuándo?", "sin fecha o muy antiguo"], ["¿Cita fuentes?", "ninguna o imposibles de comprobar"], ["¿Cómo está escrito?", "titulares exagerados, muchas mayúsculas, faltas"], ["¿Lo dicen otros medios?", "solo aparece en un sitio"], ["¿Qué busca?", "asustar, enfadar, vender algo"]])}`,
    },
    {
      html: `<h3>La identidad y la huella digital</h3><p>Todo lo que hacemos en Internet deja rastro. La <mark>identidad digital</mark> es la imagen que los demás tienen de nosotros a partir de lo que aparece en la red: nuestros perfiles, fotos, comentarios, los «me gusta» y lo que otros publican sobre nosotros. La <mark>huella digital</mark> es el conjunto de rastros que dejamos al navegar: las publicaciones, pero también las búsquedas, las páginas visitadas, la ubicación del móvil o las compras. Muchas empresas recogen estos datos para mostrarnos publicidad personalizada. Lo que se publica es <b>difícil de borrar</b>, puede verlo mucha gente y puede aparecer años después, por ejemplo cuando busquemos trabajo. Por eso conviene pensar antes de publicar, no compartir nada que no compartirías en público y cuidar también la imagen de los demás: <b>publicar una foto de otra persona sin su permiso</b> no está bien y puede ser ilegal. En España, la edad mínima para dar el consentimiento propio y abrir una cuenta en una red social es de 14 años; por debajo hace falta el permiso de la familia.</p>`,
      video: { id: "fb506ebswb8", titulo: "Microaprendizaje: ¿Qué es la huella digital?", canal: "Educar Portal", vistas: 252517 },
    },
    {
      html: `<h3>Privacidad y seguridad</h3><p>Algunos consejos básicos para proteger nuestra <mark>privacidad</mark> y nuestros dispositivos. Usar <mark>contraseñas seguras</mark>: largas (al menos 12 caracteres), con letras, números y símbolos, sin datos personales fáciles de adivinar (nombre, cumpleaños, «123456»), distintas para cada servicio y <b>secretas</b>: no se comparten ni con los amigos. Un truco es usar una frase que solo tú recuerdes. Activar la <b>verificación en dos pasos</b> cuando sea posible. Configurar los perfiles de las redes sociales como <b>privados</b> y aceptar solo a personas que conocemos en la vida real. <b>No dar datos personales</b> (dirección, teléfono, colegio, fotos con uniforme) a desconocidos. Desconfiar de mensajes que piden contraseñas o datos, ofrecen premios o meten prisa: pueden ser <b>estafas</b> (phishing). No descargar archivos ni abrir enlaces sospechosos, que pueden contener <b>virus</b> o programas malignos. Cerrar sesión en ordenadores compartidos. Y, ante cualquier situación que nos incomode, contarlo a un adulto de confianza.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación de una contraseña débil, corta y fácil, con una contraseña fuerte, larga y con letras, números y símbolos">${BG}
        ${cj(20, 40, 220, 34, "123456", COL.rojo, { size: 13 })}${t(130, 92, "débil: corta y fácil de adivinar", { size: 10, color: COL.rojo })}
        ${cj(20, 108, 220, 34, "MiGato+ComeLentejas_7", COL.verde, { size: 13 })}${t(130, 160, "fuerte: larga, variada y secreta", { size: 10, color: COL.verde })}</svg>`,
    },
    {
      html: `<h3>Convivir en la red: netiqueta y ciberacoso</h3><p>Detrás de cada pantalla hay una persona, y en Internet hay que comportarse con el mismo respeto que cara a cara. Las normas de buena educación en la red se llaman <mark>netiqueta</mark>: saludar y despedirse, no escribir todo en MAYÚSCULAS (equivale a gritar), no insultar ni burlarse, respetar las opiniones distintas, no difundir rumores ni fotos de otros, pensar antes de enviar y no llenar los grupos de mensajes innecesarios. El <mark>ciberacoso</mark> o ciberbullying es el acoso que se hace a través de la tecnología: insultos, amenazas, burlas, difusión de fotos o vídeos humillantes, suplantar la identidad de alguien o excluirlo a propósito de los grupos, de forma repetida. Hace mucho daño, porque no se acaba al salir del colegio y llega a mucha gente. Si lo sufres: <b>no respondas</b> a las provocaciones, <b>guarda las pruebas</b> (capturas), <b>bloquea</b> a quien te acosa y, sobre todo, <b>cuéntaselo</b> a un adulto de confianza. Si lo ves, no lo compartas ni le des «me gusta»: apoya a la víctima y avisa a un adulto. Existe una línea de ayuda gratuita y confidencial, el <b>017</b> de INCIBE, para cualquier duda de seguridad en Internet.</p>`,
      video: { id: "ZHQ03fSn9J0", titulo: "Ciberbullying: ¿cómo evitar el ciberacoso?", canal: "Smile and Learn - Español", vistas: 727377 },
    },
    {
      html: `<h3>Derechos de autor y bienestar digital</h3><p>Las fotos, canciones, vídeos y textos de Internet tienen un autor, y están protegidos por los <mark>derechos de autor</mark>: no podemos usarlos libremente en nuestros trabajos o publicaciones como si fueran nuestros. Algunos autores permiten usar sus obras con ciertas condiciones mediante las <b>licencias Creative Commons</b>: por ejemplo, citando al autor o sin fines comerciales. Cuando usemos información o imágenes de otros, hay que <b>citar la fuente</b>, y nunca copiar y pegar un trabajo entero como propio (eso es <b>plagio</b>). Hay bancos de imágenes y música libres que se pueden usar sin problemas. Por último, es importante el <mark>bienestar digital</mark>: la tecnología es útil, pero su uso excesivo puede afectar al sueño, a la vista, a la atención y a las relaciones. Conviene marcarse <b>horarios sin pantallas</b> (en las comidas, antes de dormir), desactivar notificaciones innecesarias, no dormir con el móvil en la habitación y combinar el mundo digital con el deporte, la lectura, el juego y los amigos en persona. Es lo que se llama <b>derecho a la desconexión digital</b>.</p>`,
    },
  ],
  figura: {
    titulo: "Internet y ciudadanía digital en ocho ideas",
    svg: rejilla([
      ["Internet", "red mundial de redes", COL.azul],
      ["Servidor", "ofrece la información", COL.morado],
      ["Buscar bien", "palabras clave precisas", COL.agua],
      ["Contrastar", "fuentes fiables, ojo bulos", COL.naranja],
      ["Huella digital", "todo deja rastro", COL.gris],
      ["Contraseña", "larga, variada, secreta", COL.verde],
      ["Netiqueta", "respeto en la red", COL.sol],
      ["Ciberacoso", "no calles: cuéntalo", COL.rojo],
    ], 4, 86, "Resumen: Internet, servidores, búsqueda, fiabilidad, huella digital, contraseñas, netiqueta y ciberacoso"),
  },
  video: { id: "CXmjnNoDrTI", titulo: "Privacidad en Internet", canal: "UNICEF #educaDerechos", vistas: 162723, megusta: 0, busqueda: "ciudadania digital seguridad internet adolescentes" },
  ejemplos: [
    { enunciado: "Llega al grupo de clase: «¡URGENTE! Mañana no hay clase por una alerta, reenvíalo a todos». No dice quién lo publica. ¿Qué haces?",
      pasos: ["Señales de alerta: urgente, sin autor, pide reenviar.", "Contrastar: mirar la web del instituto o de protección civil.", "Si no aparece en fuentes oficiales, no reenviarlo."],
      resultado: "No reenviarlo hasta comprobarlo en una fuente oficial." },
    { enunciado: "Ordena de más débil a más fuerte: «lucia2012», «Lu!», «ElPerroDeLuciaLadra_3veces».",
      pasos: ["«Lu!»: muy corta.", "«lucia2012»: nombre y año, fácil de adivinar.", "La frase larga con símbolos y números es la más fuerte."],
      resultado: "Lu! < lucia2012 < ElPerroDeLuciaLadra_3veces." },
    { enunciado: "Un compañero te enseña un vídeo en el que se burlan de otra alumna y te pide que lo compartas. ¿Qué haces?",
      pasos: ["No compartirlo ni darle «me gusta»: sería participar en el acoso.", "Decir que no está bien.", "Apoyar a la alumna y avisar a un adulto o al tutor."],
      resultado: "No difundir, apoyar a la víctima y avisar a un adulto." },
  ],
  errores: [
    "Confundir Internet con la web: la web es uno de los servicios de Internet.",
    "Creer que todo lo que aparece en el primer resultado del buscador es cierto.",
    "Pensar que algo borrado de una red social desaparece por completo.",
    "Compartir la contraseña con el mejor amigo.",
    "Creer que reenviar una burla no es acoso porque no la has hecho tú.",
    "Pensar que todo lo que está en Internet se puede usar libremente.",
  ],
  ejercicios: [
    { q: "¿Qué es Internet?", sol: "Una red mundial de redes de ordenadores conectados que intercambian información." },
    { q: "Diferencia entre servidor y cliente.", sol: "El servidor guarda y ofrece información; el cliente la pide." },
    { q: "Escribe cuatro servicios de Internet.", sol: "Web, correo electrónico, mensajería y almacenamiento en la nube." },
    { q: "¿Qué indica la «s» de https?", sol: "Que la conexión es segura y cifrada." },
    { q: "Escribe tres trucos para buscar mejor.", sol: "Pocas palabras precisas, comillas para una frase exacta y el signo menos para excluir." },
    { q: "Escribe tres señales de que una información puede no ser fiable.", sol: "No tiene autor, no tiene fecha, usa titulares exagerados o solo aparece en un sitio." },
    { q: "¿Qué es la huella digital?", sol: "El conjunto de rastros que dejamos al usar Internet." },
    { q: "¿Cómo debe ser una contraseña segura?", sol: "Larga, con letras, números y símbolos, sin datos personales, distinta para cada servicio y secreta." },
    { q: "¿Qué harías si sufres ciberacoso?", sol: "No responder, guardar pruebas, bloquear y contárselo a un adulto de confianza." },
    { q: "¿Qué es el plagio?", sol: "Presentar como propio un trabajo o contenido de otra persona." },
  ],
  quiz: [
    { q: "Internet es una red…", o: ["mundial de redes", "de un solo país", "de un solo ordenador"], a: 0, e: "Mundial." },
    { q: "Para ver páginas web se usa un…", o: ["navegador", "procesador de textos", "router"], a: 0, e: "Navegador." },
    { q: "Una noticia falsa hecha para engañar es un…", o: ["bulo", "blog", "enlace"], a: 0, e: "Bulo." },
    { q: "Escribir en MAYÚSCULAS equivale a…", o: ["gritar", "susurrar", "nada"], a: 0, e: "Gritar." },
    { q: "La contraseña más segura es…", o: ["Mi_Bici.Roja-2pedales", "123456", "mi nombre"], a: 0, e: "Larga y variada." },
    { q: "Los mensajes que piden contraseñas haciéndose pasar por un banco son…", o: ["phishing", "netiqueta", "streaming"], a: 0, e: "Phishing." },
    { q: "El teléfono de ayuda de INCIBE es el…", o: ["017", "112", "016"], a: 0, e: "017." },
    { q: "Las licencias que permiten usar obras con condiciones son…", o: ["Creative Commons", "URL", "IP"], a: 0, e: "Creative Commons." },
    { q: "Cada dispositivo conectado tiene una dirección…", o: ["IP", "postal", "HDMI"], a: 0, e: "IP." },
    { q: "Ante el ciberacoso lo primero es…", o: ["contarlo a un adulto", "responder igual", "callar"], a: 0, e: "Pedir ayuda." },
  ],
  examen: [
    { q: "Los rastros que dejamos al navegar forman la…", o: ["huella digital", "netiqueta", "nube"], a: 0, e: "Huella digital." },
    { q: "La edad mínima en España para dar consentimiento propio en redes es…", o: ["14 años", "10 años", "18 años"], a: 0, e: "14 años." },
    { q: "Guardar archivos en servidores para usarlos desde cualquier lugar es…", o: ["la nube", "un virus", "el router"], a: 0, e: "Almacenamiento en la nube." },
  ],
  feynman: ["Cómo llega una página web desde un servidor hasta tu móvil", "Cómo saber si una información de Internet es fiable", "Qué harías si alguien sufre ciberacoso"],
  mapa: mapa("CIUDADANÍA DIGITAL", "var(--eso)", [
    ["Internet", "red · servidores · servicios", COL.azul],
    ["Información", "buscar · contrastar · citar", COL.naranja],
    ["Privacidad", "huella · contraseñas · perfiles", COL.verde],
    ["Convivencia", "netiqueta · ciberacoso · desconexión", COL.rojo],
  ], 300),
  tarjetas: [
    ["Internet", "Red mundial de redes de ordenadores."],
    ["Servidor", "Ordenador que ofrece información a otros."],
    ["URL", "Dirección de una página web."],
    ["Bulo", "Noticia falsa hecha para engañar."],
    ["Huella digital", "Rastro que dejamos al usar Internet."],
    ["Phishing", "Engaño para robar contraseñas o datos."],
    ["Netiqueta", "Normas de buena educación en la red."],
    ["Ciberacoso", "Acoso repetido a través de la tecnología."],
  ],
  familias: ["Revisad juntos la configuración de privacidad de las aplicaciones del móvil.", "Pactad en familia horarios y lugares sin pantallas.", "Buscad juntos vuestro nombre en Internet y comentad qué aparece."],
  profesores: {
    saberes: "Digitalización del entorno personal: Internet, servicios, búsqueda y evaluación de la información, identidad y huella digital, privacidad y seguridad, contraseñas, ciberacoso, netiqueta, derechos de autor, licencias y bienestar digital (RD 217/2022, Tecnología y Digitalización, bloque Digitalización del entorno personal de aprendizaje).",
    ideas: ["Concurso de detección de bulos con noticias reales y falsas.", "Laboratorio de contraseñas: crear y comparar contraseñas sin usarlas de verdad.", "Elaborar en grupo un decálogo de netiqueta para el grupo de clase."],
  },
  fuentes: [RD, wiki("Internet", "Internet"), { t: "INCIBE: Internet segura for Kids (IS4K), línea 017", url: "https://www.incibe.es/menores" }, { t: "Agencia Española de Protección de Datos: Tú decides en Internet", url: "https://www.tudecideseninternet.es/" }],
  revisado: REV,
};
