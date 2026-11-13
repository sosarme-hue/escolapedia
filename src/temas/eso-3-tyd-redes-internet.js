// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

const pc = (x, y, c = "var(--pen)") => `<rect x="${x - 14}" y="${y - 12}" width="28" height="18" rx="2" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2"/><path d="M${x - 6} ${y + 10} H ${x + 6} M${x} ${y + 6} V ${y + 10}" stroke="${c}" stroke-width="2"/>`;

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Redes, internet y seguridad digital",
  minutos: 60,
  objetivos: ["Explicar qué es una red informática, sus tipos y sus elementos", "Comprender cómo viaja la información por internet: direcciones IP, paquetes, DNS y servidores", "Identificar las principales amenazas de seguridad y aplicar medidas de protección", "Gestionar la identidad digital y la privacidad de forma responsable"],
  claves: ["red", "router", "dirección IP", "paquete", "DNS", "contraseña", "phishing", "huella digital"],
  pregunta: {
    texto: "Cuando envías un mensaje a alguien en Japón, llega en menos de un segundo. ¿Qué camino recorre?",
    respuesta: "El mensaje se divide en pequeños <mark>paquetes</mark> que salen de tu móvil por wifi hasta el <b>router</b>, pasan a la red de tu operador y viajan por <b>cables de fibra óptica</b>, muchos de ellos bajo el océano, saltando de router en router hasta el <b>servidor</b> de la aplicación y de ahí al móvil de destino. Allí los paquetes se vuelven a juntar. Viajan casi a la velocidad de la luz.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una red informática?</h3><p>Una <mark>red informática</mark> es un conjunto de dispositivos (ordenadores, móviles, impresoras, consolas, televisores) conectados entre sí para <b>compartir información y recursos</b>: archivos, una impresora, la conexión a internet. Según su <b>tamaño</b> se clasifican en: <b>PAN</b> (red de área personal, unos metros: el móvil y unos auriculares por Bluetooth); <b>LAN</b> (red de área local, una casa, un instituto o una oficina); <b>MAN</b> (metropolitana, una ciudad); y <b>WAN</b> (de área extensa, países o el mundo entero). <b>Internet</b> es la mayor WAN: una red de redes que conecta miles de millones de dispositivos de todo el planeta.</p>${tabla(["Tipo", "Alcance", "Ejemplo"], [["PAN", "unos metros", "auriculares Bluetooth"], ["LAN", "edificio", "red del instituto"], ["MAN", "ciudad", "red de bibliotecas municipales"], ["WAN", "países, mundo", "internet"]])}`,
    },
    {
      html: `<h3>Conexiones con cable e inalámbricas</h3><p>Los dispositivos se conectan a la red por <b>cable</b> o <b>sin cable</b>. Las conexiones con cable son más rápidas y estables: el <b>cable de pares trenzados</b> (Ethernet, con conector RJ45) dentro de casa, y la <b>fibra óptica</b>, que transmite la información como pulsos de luz por hilos de vidrio, con enorme velocidad y a grandes distancias. Las <b>inalámbricas</b> usan ondas electromagnéticas: el <b>wifi</b>, para redes locales; el <b>Bluetooth</b>, para distancias cortas entre aparatos; las <b>redes móviles</b> (4G, 5G), que conectan a través de antenas repartidas por el territorio; y los <b>satélites</b>, para zonas remotas. La velocidad de una conexión se mide en <b>megabits por segundo (Mbps)</b>.</p>`,
    },
    {
      html: `<h3>Elementos de una red</h3><p>Además de los dispositivos o <b>clientes</b>, una red tiene elementos que dirigen la información. El <mark>router</mark> conecta la red local de casa con internet, reparte las direcciones a cada dispositivo y decide por dónde enviar los datos; suele incluir el punto de acceso <b>wifi</b>. El <b>conmutador</b> (<i>switch</i>) conecta muchos dispositivos por cable dentro de una LAN. La <b>tarjeta de red</b> permite a cada aparato conectarse. Los <b>servidores</b> son ordenadores potentes, siempre encendidos, que ofrecen servicios a los clientes: guardar páginas web, correos, vídeos o partidas en línea. Muchos están en enormes <b>centros de datos</b>, lo que llamamos «la nube».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Red doméstica: un portátil, un móvil y una consola conectados al router por wifi y cable; el router conecta con internet">${BG}
        <rect x="104" y="80" width="52" height="26" rx="5" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2.5"/>${t(130, 97, "router", { size: 10, color: "var(--red)" })}
        <path d="M120 80 V 66 M140 80 V 66" stroke="var(--red)" stroke-width="2"/>
        ${pc(40, 46)}${pc(40, 140)}${pc(220, 140, "var(--leaf)")}
        <path d="M56 48 Q 90 56 104 86" stroke="var(--pen)" stroke-dasharray="4 3" fill="none" stroke-width="2"/><path d="M56 136 Q 90 122 104 100" stroke="var(--pen)" stroke-dasharray="4 3" fill="none" stroke-width="2"/><path d="M156 100 L 206 136" stroke="var(--ink)" stroke-width="2.5"/>
        <ellipse cx="210" cy="40" rx="36" ry="20" fill="var(--paper)" stroke="var(--muted)" stroke-width="2"/>${t(210, 44, "internet", { size: 10, color: "var(--muted)" })}<path d="M156 86 L 184 54" stroke="var(--ink)" stroke-width="2.5"/>
        ${t(40, 74, "portátil", { size: 9, color: "var(--pen)" })}${t(40, 168, "móvil", { size: 9, color: "var(--pen)" })}${t(220, 168, "consola", { size: 9, color: "var(--leaf)" })}${t(78, 96, "wifi", { size: 9, color: "var(--pen)" })}${t(196, 118, "cable", { size: 9, anchor: "start" })}</svg>`,
      video: { id: "uunnO9yZCYk", titulo: "¿Qué son las redes y cómo funciona Internet?", canal: "EDteam", vistas: 374324 },
    },
    {
      html: `<h3>Direcciones IP y protocolos</h3><p>Para que la información llegue a su destino, cada dispositivo conectado a una red tiene una <mark>dirección IP</mark>, como la dirección postal de una casa. En su versión clásica (<b>IPv4</b>) son cuatro números del 0 al 255 separados por puntos, por ejemplo <b>192.168.1.25</b>; como se agotaron, se usa también <b>IPv6</b>, mucho más larga. Para entenderse, los dispositivos siguen unas reglas comunes llamadas <mark>protocolos</mark>. El conjunto <b>TCP/IP</b> es la base de internet: IP se encarga de dirigir los datos y TCP comprueba que lleguen completos y en orden. Otros protocolos son <b>HTTP/HTTPS</b> (páginas web), <b>SMTP</b> (correo) o <b>FTP</b> (transferencia de archivos).</p>`,
    },
    {
      html: `<h3>Cómo viaja la información: paquetes y DNS</h3><p>Cuando escribimos una dirección web como <i>www.ejemplo.es</i>, el ordenador pregunta primero a un servidor <mark>DNS</mark> (sistema de nombres de dominio), que funciona como una agenda: traduce el <b>nombre</b> a la <b>dirección IP</b> del servidor. Después, el navegador pide la página a ese servidor. La información no viaja de una pieza: se divide en <mark>paquetes</mark>, pequeños trozos con la dirección de origen y de destino. Cada paquete puede ir por un camino diferente, saltando de router en router; al llegar se reordenan y se vuelve a montar el mensaje, y si falta alguno, se pide de nuevo. Más del 95 % del tráfico intercontinental viaja por <b>cables submarinos</b> de fibra óptica.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un mensaje se divide en paquetes numerados que viajan por distintos routers y se vuelven a juntar en el destino">${BG}
        ${pc(30, 90)}${pc(232, 90, "var(--leaf)")}${t(30, 120, "origen", { size: 9 })}${t(232, 120, "destino", { size: 9 })}
        ${[[90, 44], [130, 90], [90, 136], [176, 50], [176, 132]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="10" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/>`).join("")}
        <path d="M46 84 L 80 48 M100 44 L 166 50 M186 54 L 218 84 M46 92 L 120 90 M140 90 L 218 90 M46 98 L 80 132 M100 136 L 166 132 M186 128 L 218 96" stroke="var(--muted)" stroke-width="1.5" fill="none"/>
        ${[[130, 34, "1"], [96, 80, "2"], [130, 150, "3"]].map(([x, y, n]) => `<rect x="${x - 9}" y="${y - 9}" width="18" height="14" rx="2" fill="var(--pen)"/>` + t(x, y + 2, n, { size: 9, color: "#fff" })).join("")}
        ${t(130, 172, "paquetes por caminos distintos", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "u1xxZ8r2rRc", titulo: "Cómo funciona internet: los cables submarinos", canal: "Un Mundo Inmenso", vistas: 2041808 },
    },
    {
      html: `<h3>Servicios de internet</h3><p>Sobre la infraestructura de internet funcionan muchos <b>servicios</b>. La <b>World Wide Web</b>, creada por Tim Berners-Lee en el CERN en 1989, es el conjunto de páginas enlazadas que consultamos con un <b>navegador</b>. El <b>correo electrónico</b>, la <b>mensajería instantánea</b>, las <b>videollamadas</b>, las <b>redes sociales</b>, el <i>streaming</i> de música y vídeo, los <b>juegos en línea</b> y el <b>almacenamiento en la nube</b> son otros servicios. Cada página web tiene una <b>URL</b>: el protocolo (https://), el dominio (www.ejemplo.es) y la ruta. El <b>candado</b> y el «https» indican que la conexión está <b>cifrada</b>: nadie puede leer los datos por el camino.</p>`,
    },
    {
      html: `<h3>Amenazas en la red</h3><p>Internet también tiene riesgos. El <mark>malware</mark> es software malicioso: los <b>virus</b> se copian en otros archivos; los <b>troyanos</b> se esconden dentro de programas aparentemente útiles; el <b>ransomware</b> cifra los archivos y pide un rescate; el <b>spyware</b> espía la actividad. El <mark>phishing</mark> es un engaño que suplanta a un banco, una tienda o una red social mediante un correo o mensaje falso para robar contraseñas o datos de pago. Sus pistas típicas son la <b>urgencia</b>, los <b>premios</b> o amenazas, un <b>remitente</b> o un <b>enlace</b> extraños y las faltas de ortografía. Otros riesgos son el <b>robo de identidad</b>, los <b>bulos</b> o noticias falsas, el <b>ciberacoso</b> (acoso repetido a través de la red), el <b>grooming</b> (un adulto que engaña a un menor para ganarse su confianza) y la <b>adicción</b> a las pantallas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mensaje de phishing con sus pistas señaladas: remitente extraño, urgencia y enlace sospechoso">${BG}
        <rect x="14" y="20" width="156" height="140" rx="10" fill="var(--paper)" stroke="var(--muted)" stroke-width="2"/>
        ${t(24, 42, "De: banco-seguro@xyz.ru", { size: 9, anchor: "start" })}<line x1="28" y1="50" x2="162" y2="50" stroke="var(--muted)"/>
        ${t(24, 72, "¡URGENTE! Tu cuenta", { size: 10, anchor: "start", color: "var(--red)" })}${t(24, 88, "se bloqueará hoy.", { size: 10, anchor: "start" })}
        ${t(24, 112, "Entra aquí:", { size: 10, anchor: "start" })}${t(24, 128, "bit.ly/b4nc0", { size: 10, anchor: "start", color: "var(--pen)" })}
        ${fl(204, 40, 174, 40, "var(--red)", 2)}${t(208, 44, "remitente", { size: 9, color: "var(--red)", anchor: "start" })}
        ${fl(204, 78, 174, 78, "var(--red)", 2)}${t(208, 82, "urgencia", { size: 9, color: "var(--red)", anchor: "start" })}
        ${fl(204, 124, 174, 124, "var(--red)", 2)}${t(208, 128, "enlace", { size: 9, color: "var(--red)", anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>Medidas de seguridad</h3><p>Para protegerse hay que combinar herramientas y hábitos. Usar <mark>contraseñas seguras</mark>: largas (al menos 12 caracteres), con mayúsculas, minúsculas, números y símbolos, distintas para cada servicio y guardadas en un <b>gestor de contraseñas</b>; mejor aún, una <b>frase</b> larga fácil de recordar. Activar la <b>verificación en dos pasos</b>. Mantener <b>actualizados</b> el sistema y las aplicaciones. Usar un <b>antivirus</b> y el <b>cortafuegos</b>. Descargar aplicaciones solo de tiendas oficiales. Desconfiar de mensajes urgentes, premios o enlaces extraños: comprobar la dirección del remitente y no abrir adjuntos sospechosos. Evitar introducir datos importantes en <b>wifi públicas</b>. Y hacer <b>copias de seguridad</b> periódicas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación de contraseñas: 123456 es débil y se descubre al instante; una frase larga con símbolos es fuerte">${BG}
        <rect x="20" y="30" width="220" height="40" rx="8" fill="var(--red)" fill-opacity=".12" stroke="var(--red)" stroke-width="2"/>${t(36, 55, "123456", { size: 13, anchor: "start" })}${t(226, 55, "débil", { size: 11, color: "var(--red)", anchor: "end" })}
        <rect x="20" y="86" width="220" height="40" rx="8" fill="var(--leaf)" fill-opacity=".14" stroke="var(--leaf)" stroke-width="2"/>${t(36, 111, "Mi-gato-come-3-peras!", { size: 12, anchor: "start" })}${t(226, 111, "fuerte", { size: 11, color: "var(--leaf)", anchor: "end" })}
        ${t(130, 156, "larga + variada + única", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "2TferQprZ0g", titulo: "Las 10 claves para usar Internet con seguridad", canal: "PantallasAmigas", vistas: 2233167 },
    },
    {
      html: `<h3>Identidad digital y privacidad</h3><p>Todo lo que publicamos, comentamos, compartimos o buscamos deja un rastro: es nuestra <mark>huella digital</mark>, que forma nuestra <b>identidad digital</b>, la imagen que los demás tienen de nosotros en internet. Lo que se sube a la red es muy difícil de borrar: puede ser copiado, reenviado y visto años después por amistades, centros educativos o empresas. Por eso conviene <b>configurar la privacidad</b> de las redes sociales, aceptar solo a personas conocidas, no compartir datos personales (dirección, teléfono, ubicación, horarios), pensar antes de publicar y <b>pedir permiso</b> antes de subir fotos de otras personas. En España, la edad mínima para dar el consentimiento al uso de los propios datos es de <b>14 años</b>.</p>`,
      video: { id: "rHDTJQKW2y8", titulo: "Privacidad online para niños", canal: "Smile and Learn - Español", vistas: 832410 },
    },
    {
      html: `<h3>Ciudadanía digital y bienestar</h3><p>Ser un buen <b>ciudadano digital</b> significa usar la tecnología de forma <b>segura, responsable y respetuosa</b>. Implica tratar a los demás con el mismo respeto que en persona (la <b>netiqueta</b>); no participar en ciberacoso y <b>denunciarlo</b> ante un adulto de confianza o en la línea 017 de ayuda en ciberseguridad; contrastar la información en fuentes fiables antes de compartirla para no difundir bulos; respetar la <b>propiedad intelectual</b>; y cuidar el <b>bienestar digital</b>: limitar el tiempo de pantalla, desactivar notificaciones, no usar el móvil antes de dormir y equilibrar la vida en línea con el deporte, la familia y las amistades. La <b>desconexión digital</b> también es un derecho.</p>`,
    },
  ],
  figura: {
    titulo: "Qué pasa al escribir una dirección web",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Pasos al visitar una web: el navegador pregunta al DNS la IP, el DNS responde, el navegador pide la página al servidor y el servidor la envía en paquetes">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${caja(30, 90, 130, 60, "tu navegador", "var(--pen)", { size: 14 })}${caja(255, 20, 130, 50, "servidor DNS", "#b8860b", { size: 14 })}${caja(480, 90, 130, 60, "servidor web", "var(--leaf)", { size: 14 })}
      ${fl(110, 88, 253, 36, "var(--ink)", 2)}${t(40, 34, "1 ¿IP de ejemplo.es?", { size: 12, anchor: "start" })}
      ${fl(262, 72, 150, 100, "#b8860b", 2)}${t(236, 98, "2 es 93.184.216.34", { size: 12, color: "#b8860b", anchor: "start" })}
      ${fl(162, 128, 478, 128, "var(--ink)", 2)}${t(320, 122, "3 pide la página (HTTPS)", { size: 12 })}
      ${fl(478, 144, 162, 144, "var(--leaf)", 2)}${t(320, 166, "4 envía la página en paquetes", { size: 12, color: "var(--leaf)" })}
      ${t(320, 214, "todo ocurre en menos de un segundo", { size: 14, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "rw41W8crZ_Y", titulo: "¿Cómo funciona Internet?", canal: "Sabin Ingeniería Civil", vistas: 3565245, megusta: 0, busqueda: "cómo funciona internet redes seguridad digital" },
  ejemplos: [
    { enunciado: "Clasifica estas redes: la del instituto, el reloj conectado al móvil y la red que une las oficinas de una empresa en tres países.",
      pasos: ["Instituto: un edificio → LAN.", "Reloj y móvil: unos metros → PAN.", "Oficinas en varios países → WAN."],
      resultado: "LAN, PAN y WAN." },
    { enunciado: "Recibes un SMS: «Tu paquete está retenido. Paga 1,99 € en este enlace». ¿Qué haces?",
      pasos: ["Es urgente, pide dinero y trae un enlace desconocido: señales de phishing.", "No se pulsa el enlace ni se dan datos.", "Se comprueba en la web oficial de la empresa de mensajería y se borra el mensaje."],
      resultado: "Es phishing: no abrir el enlace y comprobar por canales oficiales." },
    { enunciado: "Evalúa estas contraseñas: «ana2010», «P@ssw0rd» y «Tres-tortugas-bailan-en-Soria!».",
      pasos: ["«ana2010»: corta, con nombre y año: muy débil.", "«P@ssw0rd»: tiene símbolos pero es una palabra muy conocida: débil.", "La frase: larga, variada y fácil de recordar: fuerte."],
      resultado: "Solo la frase larga es segura." },
  ],
  errores: [
    "Pensar que internet y la web son lo mismo: la web es solo uno de sus servicios.",
    "Usar la misma contraseña en todas partes.",
    "Creer que borrar una publicación la elimina para siempre.",
    "Confiar en un mensaje por llevar el logotipo de un banco o una tienda.",
    "Pensar que el modo incógnito hace a una persona anónima en internet.",
  ],
  ejercicios: [
    { q: "¿Qué es una red informática y para qué sirve?", sol: "Un conjunto de dispositivos conectados para compartir información y recursos." },
    { q: "Ordena por tamaño: WAN, PAN, MAN, LAN.", sol: "PAN, LAN, MAN, WAN." },
    { q: "Compara la fibra óptica con el wifi.", sol: "La fibra transmite luz por cable, muy rápida y estable; el wifi es inalámbrico, cómodo pero de menor alcance y más interferencias." },
    { q: "¿Qué funciones tiene el router de casa?", sol: "Conecta la red local con internet, asigna direcciones y dirige los datos; suele dar wifi." },
    { q: "¿Qué es una dirección IP? Pon un ejemplo.", sol: "El número que identifica a un dispositivo en la red, como 192.168.1.25." },
    { q: "Explica qué hace un servidor DNS.", sol: "Traduce nombres de dominio a direcciones IP." },
    { q: "¿Por qué la información viaja en paquetes?", sol: "Para repartir el tráfico por varios caminos y, si se pierde uno, reenviar solo ese." },
    { q: "Diferencia entre virus, troyano y ransomware.", sol: "El virus se copia en archivos; el troyano se esconde en un programa útil; el ransomware cifra los archivos y pide rescate." },
    { q: "Escribe cinco medidas para navegar con seguridad.", sol: "Contraseñas seguras, verificación en dos pasos, actualizar, antivirus, desconfiar de enlaces y adjuntos." },
    { q: "¿Qué es la huella digital y cómo se puede cuidar?", sol: "El rastro que dejamos en internet; configurando la privacidad y pensando antes de publicar." },
  ],
  quiz: [
    { q: "La red de una casa es una…", o: ["LAN", "WAN", "MAN"], a: 0, e: "LAN." },
    { q: "El Bluetooth crea redes de tipo…", o: ["PAN", "WAN", "MAN"], a: 0, e: "PAN." },
    { q: "La fibra óptica transmite la información como…", o: ["luz", "sonido", "corriente alterna"], a: 0, e: "Pulsos de luz." },
    { q: "El dispositivo que conecta la red de casa con internet es el…", o: ["router", "monitor", "teclado"], a: 0, e: "Router." },
    { q: "192.168.1.25 es una…", o: ["dirección IP", "URL", "contraseña"], a: 0, e: "Dirección IP." },
    { q: "El DNS traduce…", o: ["nombres a IP", "idiomas", "vídeos"], a: 0, e: "Nombres a IP." },
    { q: "La web la inventó…", o: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs"], a: 0, e: "Tim Berners-Lee, en el CERN." },
    { q: "El engaño que suplanta a un banco para robar datos es el…", o: ["phishing", "streaming", "router"], a: 0, e: "Phishing." },
    { q: "Una contraseña segura debe ser…", o: ["corta y fácil", "larga, variada y única", "tu nombre"], a: 1, e: "Larga, variada y única." },
    { q: "El rastro que dejamos en internet es la…", o: ["huella digital", "dirección IP", "nube"], a: 0, e: "Huella digital." },
  ],
  examen: [
    { q: "El protocolo que asegura que los datos llegan completos es…", o: ["TCP", "HTML", "DNS"], a: 0, e: "TCP." },
    { q: "El candado y «https» indican que la conexión está…", o: ["cifrada", "caída", "pagada"], a: 0, e: "Cifrada." },
    { q: "El malware que cifra los archivos y pide un rescate es el…", o: ["ransomware", "spyware", "troyano"], a: 0, e: "Ransomware." },
  ],
  feynman: ["Cómo viaja un mensaje por internet", "Cómo reconocer un intento de phishing", "Cómo crear y guardar contraseñas seguras"],
  mapa: mapa("REDES E INTERNET", "var(--eso)", [
    ["Redes", "PAN · LAN · MAN · WAN", "var(--pen)"],
    ["Funcionamiento", "IP · DNS · paquetes", "var(--leaf)"],
    ["Amenazas", "malware · phishing · acoso", "var(--red)"],
    ["Protección", "contraseñas · privacidad", "#b8860b"],
  ], 300),
  tarjetas: [
    ["LAN", "Red de área local: casa, instituto."],
    ["Router", "Conecta la red local con internet."],
    ["Dirección IP", "Número que identifica a un dispositivo."],
    ["DNS", "Traduce nombres de dominio a IP."],
    ["Paquete", "Trozo de información con origen y destino."],
    ["Phishing", "Engaño que suplanta a una entidad para robar datos."],
    ["Contraseña segura", "Larga, variada, única; mejor una frase."],
    ["Huella digital", "Rastro que dejamos en internet."],
  ],
  familias: ["Revisad juntos la configuración de privacidad de una red social o aplicación.", "Cread entre todos una frase-contraseña y activad la verificación en dos pasos en una cuenta.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Comunicación y difusión de ideas: redes, internet, protocolos y servicios; seguridad, privacidad, identidad digital, bienestar digital y ciudadanía digital crítica (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Simular el viaje de un mensaje en paquetes con tarjetas numeradas por la clase.", "Analizar ejemplos reales de phishing y localizar las pistas del engaño.", "Usar «tracert» o un mapa de cables submarinos para ver la ruta de los datos."],
  },
  fuentes: [RD, wiki("Internet", "Internet"), wiki("Phishing", "Phishing")],
  revisado: "2026-11-12",
};

require("./_eso3L7").libro(module.exports, {
  lectura: ["Lo que pasa en un clic", `<p>Son las ocho de la tarde. Martina pulsa «enviar» y una foto de su perro sale de su móvil. En una fracción de segundo, la foto se trocea en cientos de paquetes que viajan por el aire hasta el router de casa, entran por un cable de fibra óptica convertidos en destellos de luz, cruzan centrales y nodos de su ciudad y, quizá, atraviesan un cable submarino bajo el océano Atlántico hasta un centro de datos. Allí se guarda una copia, y otros paquetes recorren el camino contrario hasta el móvil de su prima en Argentina, que la ve antes de que Martina haya dejado el teléfono en la mesa.</p><p>Nada de eso sería posible sin unas reglas comunes, los <b>protocolos</b>, que permiten que miles de millones de dispositivos de fabricantes distintos se entiendan. Internet es la mayor máquina que ha construido la humanidad, y la usamos cientos de veces al día sin pensarlo.</p><p>Pero esa misma red que nos conecta con todo el mundo también tiene riesgos: estafas, virus, robo de cuentas o ciberacoso. En este tema aprenderás cómo funcionan las redes e internet y, sobre todo, cómo protegerte y cuidar tu identidad digital.</p>`],
  mas: [
    ["<h3>Direcciones IP y protocolos</h3>", `<p>Las direcciones IPv4 se están agotando, porque solo permiten unos 4.300 millones de combinaciones y hay muchos más dispositivos. Por eso se está extendiendo <b>IPv6</b>, con direcciones mucho más largas escritas en hexadecimal (como 2001:db8::1), que permiten un número prácticamente ilimitado. Dentro de casa, los dispositivos usan direcciones <b>privadas</b> (como 192.168.1.x) y el router sale a internet con una única dirección <b>pública</b>.</p>`],
    ["<h3>Amenazas en la red</h3>", `<p>Muchos ataques no se aprovechan de fallos técnicos, sino de la confianza de las personas: es la <b>ingeniería social</b>. El atacante finge ser alguien conocido, un servicio técnico o una tienda, y crea urgencia («tu cuenta se bloqueará en una hora») para que actuemos sin pensar. Variantes del phishing son el <b>smishing</b>, por SMS, y el <b>vishing</b>, por llamada telefónica. La mejor defensa es desconfiar de la prisa y comprobar siempre por otra vía.</p>`],
    ["<h3>Servicios de internet</h3>", `<p>Cada servicio usa su protocolo: <b>HTTP</b> y su versión segura <b>HTTPS</b> para la web; <b>SMTP</b>, <b>IMAP</b> y <b>POP3</b> para el correo electrónico; <b>FTP</b> para transferir archivos. Una dirección web o <b>URL</b> tiene varias partes: el protocolo (https://), el dominio (www.ejemplo.es), donde «.es» es el dominio de primer nivel, y la ruta hasta la página concreta (/noticias/hoy.html).</p>`],
  ],
  svgs: [
    ["<h3>¿Qué es una red informática?</h3>", "Tipos de redes por alcance", [["PAN", "personal: Bluetooth"], ["LAN", "casa, instituto"], ["MAN", "una ciudad"], ["WAN", "países: internet"]], "De menor a mayor alcance"],
    ["<h3>Conexiones con cable e inalámbricas</h3>", "Conexiones con cable e inalámbricas", [["Cable", "Ethernet, fibra óptica"], ["Inalámbricas", "wifi, Bluetooth, 4G y 5G"], ["Elegir", "estabilidad o movilidad"]], "Con cable o sin cable"],
    ["<h3>Direcciones IP y protocolos</h3>", "Direcciones IP", [["IPv4", "192.168.1.25"], ["IPv6", "2001:db8::1"], ["Privada y pública", "casa y salida a internet"]], "La dirección de cada dispositivo"],
    ["<h3>Servicios de internet</h3>", "Partes de una URL", [["Protocolo", "https://"], ["Dominio", "www.ejemplo.es"], ["Ruta", "/noticias/hoy.html"]], "Leer una dirección web"],
    ["<h3>Identidad digital y privacidad</h3>", "Cuidar la identidad digital", [["Pensar", "antes de publicar"], ["Privacidad", "perfil privado"], ["Buscarse", "revisar qué hay de ti"]], "Tu huella en internet"],
    ["<h3>Ciudadanía digital y bienestar</h3>", "Ciudadanía digital", [["Respeto", "netiqueta"], ["Responsabilidad", "no difundir bulos"], ["Bienestar", "tiempo sin pantallas"]], "Ser buen ciudadano digital"],
  ],
  bloques: [
    { tras: "<h3>¿Qué es una red informática?</h3>", html: `<h3>Breve historia de internet</h3><p>Internet nació de una red militar y científica de Estados Unidos, <b>ARPANET</b>, que en 1969 conectó cuatro universidades. Su idea clave era que la información se dividiera en paquetes que pudieran viajar por caminos distintos, de modo que la red siguiera funcionando aunque se cortara alguna conexión. En los años setenta, Vint Cerf y Robert Kahn crearon los protocolos <b>TCP/IP</b>, que permitieron unir redes diferentes en una «red de redes»: internet.</p><p>En 1989 Tim Berners-Lee inventó en el CERN la <b>World Wide Web</b>, con páginas enlazadas que cualquiera podía consultar con un navegador, y en los noventa internet llegó a los hogares a través de la línea telefónica. Después vinieron la banda ancha, las redes sociales, los <b>teléfonos inteligentes</b> (desde 2007) y el <b>internet de las cosas</b>, que conecta relojes, coches, electrodomésticos o sensores. Hoy más de dos tercios de la población mundial usan internet, aunque todavía existe una importante <b>brecha digital</b> entre países y entre personas.</p>`, svg: ["Historia de internet", [["1969", "ARPANET une 4 universidades"], ["1974", "protocolos TCP/IP"], ["1989", "Berners-Lee crea la web"], ["2007", "llegan los smartphones"]], "De ARPANET al móvil"] },
    { tras: "<h3>Conexiones con cable e inalámbricas</h3>", html: `<h3>Velocidad, latencia y cobertura</h3><p>La calidad de una conexión se mide con varias magnitudes. El <b>ancho de banda</b> o velocidad es la cantidad de datos que se transmiten por segundo, en megabits por segundo (Mbps) o gigabits (Gbps); se distingue entre la velocidad de <b>bajada</b> (descargar, ver vídeos) y la de <b>subida</b> (enviar archivos, hacer videollamadas). La <b>latencia</b> o ping es el tiempo que tarda un paquete en ir y volver, en milisegundos: es clave en los videojuegos en línea y en las videollamadas. La fibra óptica tiene latencias de pocos milisegundos; una conexión por satélite geoestacionario, más de 500.</p><p>La telefonía móvil ha ido mejorando por generaciones: el <b>4G</b> permitió ver vídeos en el móvil y el <b>5G</b> ofrece más velocidad, latencias muy bajas y la posibilidad de conectar muchísimos dispositivos a la vez, útil para coches conectados o fábricas inteligentes. La <b>cobertura</b> depende de las antenas cercanas: en zonas rurales todavía es peor. La velocidad de la conexión se puede medir con aplicaciones de test de velocidad.</p>`, svg: ["Calidad de una conexión", [["Bajada", "descargar, ver vídeos"], ["Subida", "enviar, videollamadas"], ["Latencia", "ping, en milisegundos"], ["5G", "rápido y con poca latencia"]], "Medir una conexión"] },
    { tras: "<h3>Elementos de una red</h3>", html: `<h3>Configurar la red de casa con seguridad</h3><p>El router de casa trae una configuración de fábrica que conviene revisar. Lo primero es cambiar la <b>contraseña de administración</b> del router (la que da acceso a su configuración), porque las de fábrica son conocidas. Después, la red wifi debe usar el cifrado más seguro disponible, <b>WPA2</b> o, mejor, <b>WPA3</b>, con una <b>contraseña larga</b> y distinta de la que viene en la pegatina. El nombre de la red (SSID) no debe revelar datos personales como el apellido o el número del piso.</p><p>Otras buenas prácticas: crear una <b>red de invitados</b> para las visitas y para los aparatos del internet de las cosas (bombillas, cámaras), de modo que no tengan acceso al resto; mantener actualizado el <b>firmware</b> del router; colocar el router en un lugar central y elevado, lejos de muros gruesos y microondas, para mejorar la cobertura; y, si hay zonas sin señal, usar repetidores o sistemas de malla (<i>mesh</i>).</p>`, svg: ["Router seguro", [["Contraseña admin", "cambiar la de fábrica"], ["Cifrado", "WPA2 o WPA3"], ["Red de invitados", "visitas e IoT"], ["Firmware", "siempre actualizado"]], "Proteger la wifi de casa"] },
    { tras: "<h3>Medidas de seguridad</h3>", html: `<h3>Qué hacer si algo va mal</h3><p>Aunque tomemos precauciones, a veces algo falla. Si sospechas que han <b>robado una cuenta</b>: cambia la contraseña desde otro dispositivo, activa la verificación en dos pasos, cierra las sesiones abiertas y avisa a tus contactos de que no hagan caso de mensajes raros enviados en tu nombre. Si has hecho clic en un enlace sospechoso o has dado datos de tu tarjeta, avisa enseguida a un adulto y al banco para bloquearla. Si un aparato se comporta de forma extraña, desconéctalo de la red y pásale un antivirus.</p><p>Ante el <b>ciberacoso</b>, la difusión de fotos sin permiso o las amenazas: no respondas ni borres nada, haz <b>capturas de pantalla</b> como prueba, <b>bloquea</b> y <b>denuncia</b> a la persona en la plataforma y cuéntaselo a un adulto de confianza o al profesorado. En España, el <b>017</b> es la línea gratuita y confidencial de ayuda en ciberseguridad del INCIBE, para menores, familias y centros educativos. Si hay un delito, se puede denunciar ante la policía. Pedir ayuda nunca es exagerar.</p>`, svg: ["Si algo va mal", [["Cuenta robada", "cambiar clave y 2 pasos"], ["Ciberacoso", "capturas, bloquear, denunciar"], ["Pedir ayuda", "adulto de confianza"], ["017", "ayuda en ciberseguridad"]], "Actuar a tiempo"] },
  ],
  grupos: [2, 4, 3, 3, 2],
  ejemplos: [
    ["Analiza la URL https://www.museo.cat/visitas/horarios.html", ["Protocolo: https (conexión cifrada).", "Dominio: www.museo.cat, con dominio de primer nivel .cat.", "Ruta: /visitas/horarios.html, la página concreta."], "Es una página segura del dominio museo.cat."],
    ["Con una velocidad de bajada de 300 Mbps, ¿cuánto tarda en descargarse un juego de 30 GB?", ["30 GB ≈ 30.000 MB · 8 = 240.000 Mb.", "240.000 / 300 = 800 s.", "800 s ≈ 13 minutos."], "Unos 13 minutos (algo más en la práctica)."],
    ["Recibes un mensaje de un amigo: «Mira qué foto tuya, entra aquí y pon tu contraseña». ¿Qué pasa y qué haces?", ["Probablemente le han robado la cuenta y es phishing.", "No pulsar el enlace ni dar la contraseña.", "Avisar al amigo por otra vía y, si se ha entrado, cambiar la contraseña y activar la verificación en dos pasos."], "Es un intento de robo de cuentas: no picar, avisar y proteger la propia cuenta."],
  ],
  errores: ["Mantener la contraseña de fábrica del router o una wifi abierta sin cifrado."],
  niveles: "bbbbbmmbbm",
  ejercicios: [
    ["b", "¿Qué fue ARPANET y en qué año nació?", "La red científica y militar de Estados Unidos que dio origen a internet; en 1969 conectó cuatro universidades."],
    ["b", "Diferencia entre velocidad de bajada y de subida, con un ejemplo de cada una.", "Bajada: recibir datos (ver una serie). Subida: enviar datos (subir un vídeo o la imagen de la cámara en una videollamada)."],
    ["b", "¿Qué es la latencia y por qué importa en los videojuegos en línea?", "El tiempo que tarda un paquete en ir y volver (ping). Si es alta, las acciones llegan tarde y el juego va con retraso."],
    ["b", "Escribe las partes de la URL https://www.instituto.es/notas/3eso.html", "Protocolo: https://; dominio: www.instituto.es; ruta: /notas/3eso.html."],
    ["b", "¿Qué es el 017?", "La línea gratuita y confidencial de ayuda en ciberseguridad del INCIBE, para menores, familias y centros educativos."],
    ["b", "¿Qué es la brecha digital?", "La diferencia de acceso a internet y a la tecnología (o de habilidades para usarla) entre países, zonas o personas."],
    ["m", "¿Por qué se está pasando de IPv4 a IPv6?", "Porque IPv4 solo permite unos 4.300 millones de direcciones y hay muchos más dispositivos; IPv6 ofrece un número prácticamente ilimitado."],
    ["m", "Escribe cinco medidas para configurar con seguridad el router de casa.", "Cambiar la contraseña de administración, usar cifrado WPA2/WPA3 con clave larga, poner un nombre de red sin datos personales, crear una red de invitados y actualizar el firmware."],
    ["m", "¿Para qué sirve una red de invitados?", "Para que visitas y aparatos del internet de las cosas tengan internet sin acceso a los ordenadores y archivos de la red principal."],
    ["m", "Calcula cuánto tarda en subirse un vídeo de 900 MB con 50 Mbps de subida.", "900 · 8 = 7.200 Mb. 7.200 / 50 = 144 s ≈ 2,4 minutos."],
    ["m", "¿Qué ventajas aporta el 5G frente al 4G?", "Más velocidad, latencia mucho menor y capacidad para conectar muchos más dispositivos a la vez."],
    ["m", "¿Qué protocolos usa el correo electrónico?", "SMTP para enviar, e IMAP o POP3 para recibir y descargar."],
    ["m", "Ordena los pasos ante una cuenta robada.", "Cambiar la contraseña desde otro dispositivo, activar la verificación en dos pasos, cerrar todas las sesiones, revisar la configuración y avisar a los contactos."],
    ["m", "Explica qué hacer si un compañero sufre ciberacoso en un grupo de mensajería.", "No reenviar ni reírse, apoyar al compañero, guardar capturas, animarle a bloquear y denunciar en la plataforma y contarlo a un adulto o al profesorado."],
    ["m", "¿Por qué el router debe colocarse en un lugar central y elevado?", "Porque la señal wifi se reparte en todas direcciones y pierde fuerza al atravesar muros y obstáculos; así llega mejor a toda la casa."],
    ["a", "Relaciona la historia de internet con su diseño: ¿por qué la idea de enviar paquetes por caminos distintos hace la red tan resistente?", "Porque no depende de un único camino ni de un ordenador central: si un enlace falla, los paquetes buscan otra ruta y se reordenan al llegar gracias a TCP. Por eso internet sigue funcionando aunque se corten cables o caigan nodos."],
    ["a", "Una familia se queja de que el wifi va lento en las habitaciones. Propón un diagnóstico y tres soluciones.", "Diagnóstico: medir la velocidad junto al router y en las habitaciones. Si cae lejos, es cobertura. Soluciones: mover el router a un lugar central y alto, usar un sistema mesh o repetidor, conectar por cable el ordenador fijo o cambiar a la banda de 5 GHz cerca y 2,4 GHz lejos."],
    ["a", "Diseña una guía de cinco pasos para que un niño de 10 años abra su primera cuenta en una red social de forma segura.", "Comprobar la edad mínima y hacerlo con un adulto; contraseña larga y única con verificación en dos pasos; perfil privado y sin datos personales; aceptar solo a personas que conoce en persona; saber bloquear, denunciar y a quién pedir ayuda (017)."],
    ["a", "Compara fibra óptica, 5G y satélite para una casa rural aislada: velocidad, latencia, coste y disponibilidad.", "Fibra: la mejor velocidad y latencia, pero puede no llegar a zonas aisladas. 5G: buena velocidad si hay antena cerca, cobertura limitada en el campo. Satélite: disponible casi en cualquier sitio, más caro y con más latencia (aunque los de órbita baja la reducen)."],
    ["a", "Explica por qué un dato público como el nombre del colegio, junto con otros (foto con uniforme, horario de entreno), puede ser peligroso.", "Por separado parecen inofensivos, pero combinados permiten saber dónde y cuándo localizar a una persona. Un acosador puede reunirlos. Por eso hay que limitar lo que se publica y quién lo ve."],
  ],
  cuartas: ["PAN", "LAN", "ondas de radio de baja frecuencia", "ratón", "contraseña", "imágenes", "Mark Zuckerberg", "streaming", "la fecha de nacimiento", "dirección de correo", "HTTP", "borrada", "cortafuegos"],
  quiz: [
    ["La primera red que dio origen a internet fue…", ["la web", "ARPANET", "el 5G", "el Bluetooth"], 1, "En 1969."],
    ["Los protocolos que unieron redes distintas son…", ["HTML y CSS", "TCP/IP", "MP3 y MP4", "USB"], 1, "Base de internet."],
    ["La latencia se mide en…", ["Mbps", "milisegundos", "GB", "vatios"], 1, "Tiempo de ida y vuelta."],
    ["El cifrado más seguro para la wifi es…", ["WEP", "WPA3", "ninguno", "abierta"], 1, "WPA3 (o WPA2)."],
    ["Una red de invitados sirve para…", ["ir más rápido", "aislar visitas y aparatos IoT", "ver la tele", "cambiar la IP pública"], 1, "No acceden a la red principal."],
    ["En la URL https://www.ejemplo.es/a.html, el dominio es…", ["https", "www.ejemplo.es", "/a.html", ".html"], 1, "El nombre del sitio."],
    ["IPv6 se creó porque…", ["IPv4 era lento", "se agotaban las direcciones IPv4", "era más bonito", "lo exigió la web"], 1, "Hacen falta más direcciones."],
    ["Ante el ciberacoso, lo primero es…", ["responder con insultos", "guardar pruebas y pedir ayuda", "borrar todo", "cerrar el ordenador y olvidarlo"], 1, "Capturas, bloquear, denunciar."],
    ["El 017 es…", ["el número de la policía", "la línea de ayuda en ciberseguridad", "un código de wifi", "una red social"], 1, "Del INCIBE."],
    ["Lo primero si roban tu cuenta es…", ["crear otra", "cambiar la contraseña y activar dos pasos", "no hacer nada", "publicarlo"], 1, "Recuperar el control."],
  ],
  examen: [
    ["La web la creó Tim Berners-Lee en…", ["1969", "1989", "2007", "2015"], 1, "En el CERN."],
    ["Un juego de 15 GB con 300 Mbps tarda unos…", ["7 minutos", "1 hora", "30 s", "2 h"], 0, "120.000 Mb / 300 = 400 s."],
    ["La velocidad de subida importa al…", ["ver una serie", "hacer una videollamada", "leer una web", "escuchar música"], 1, "Envías tu imagen."],
    ["Cambiar la contraseña de fábrica del router sirve para…", ["ir más rápido", "evitar accesos a su configuración", "tener más cobertura", "ahorrar luz"], 1, "Las de fábrica son conocidas."],
    ["La brecha digital es…", ["un virus", "la desigualdad de acceso a la tecnología", "un cable roto", "un tipo de red"], 1, "Entre países y personas."],
  ],
  tarjetas: [["ARPANET", "Red de 1969 que originó internet."], ["Latencia", "Tiempo de ida y vuelta de un paquete (ping)."], ["WPA3", "Cifrado más seguro para la wifi."], ["017", "Ayuda en ciberseguridad del INCIBE."]],
  glosario: [
    ["Red informática", "Dispositivos conectados para compartir información y recursos."],
    ["LAN", "Red de área local: casa, instituto."],
    ["WAN", "Red de área amplia, como internet."],
    ["Router", "Conecta la red local con internet."],
    ["Dirección IP", "Número que identifica un dispositivo en la red."],
    ["Protocolo", "Reglas comunes para comunicarse."],
    ["TCP/IP", "Protocolos básicos de internet."],
    ["DNS", "Sistema que traduce nombres de dominio a IP."],
    ["URL", "Dirección de una página web."],
    ["Ancho de banda", "Cantidad de datos por segundo."],
    ["Latencia", "Retraso en la comunicación."],
    ["Malware", "Software malicioso."],
    ["Phishing", "Engaño que suplanta a una entidad para robar datos."],
    ["Verificación en dos pasos", "Segundo código además de la contraseña."],
    ["Huella digital", "Rastro que dejamos en internet."],
    ["Ciberacoso", "Acoso mediante medios digitales."],
    ["Brecha digital", "Desigualdad en el acceso o uso de la tecnología."],
  ],
  situacion: { titulo: "Campaña de ciberseguridad para 1.º de ESO", reto: "Diseñar y presentar a los alumnos de 1.º de ESO una campaña breve y práctica sobre cómo funciona internet y cómo protegerse en la red.", pasos: ["Elegir tres temas: contraseñas y dos pasos, phishing y ciberacoso.", "Investigar en fuentes fiables (INCIBE, OSI) y preparar ejemplos reales adaptados.", "Diseñar una infografía y una presentación de 10 minutos con un juego final.", "Preparar una guía de «qué hacer si…» con el 017.", "Presentar la campaña y recoger la opinión de los alumnos con un formulario."], producto: "Infografía, presentación y guía de actuación.", evaluacion: ["Los contenidos son correctos y están basados en fuentes fiables.", "Los consejos son concretos y adaptados a la edad.", "Los materiales son claros y atractivos.", "Se analiza la opinión recogida para mejorar la campaña."] },
  saberes: "redes de comunicación e internet: tipos, elementos, protocolos y servicios; conexión segura; seguridad digital, protección de datos, identidad digital, bienestar y ciudadanía digital.",
  familias: ["Revisad juntos la configuración del router de casa: contraseña, cifrado y red de invitados."],
  minutos: 110,
});
