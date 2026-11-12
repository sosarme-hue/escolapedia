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
