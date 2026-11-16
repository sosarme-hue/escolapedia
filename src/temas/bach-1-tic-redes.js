// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L38");

// Topologías: bus, estrella, anillo y malla.
const topologias = () => {
  const n = (x, y, c) => `<circle cx="${x}" cy="${y}" r="6" fill="${c}"/>`;
  const l = (d, c) => `<path d="${d}" stroke="${c}" stroke-width="2" fill="none"/>`;
  const P = "var(--pen)", R = "var(--red)", L = "var(--leaf)", S = "var(--sun)";
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro topologías de red: bus, estrella, anillo y malla">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${l("M18 50 H 112", P)}${[28, 52, 76, 100].map((x, i) => l(`M${x} 50 V ${i % 2 ? 62 : 38}`, P) + n(x, i % 2 ? 66 : 34, P)).join("")}${B.tx(65, 86, "Bus", { fs: 11, maxW: 80, bold: true, color: P })}
    ${[[196, 30], [228, 50], [196, 70], [164, 50]].map(([x, y]) => l(`M196 50 L ${x} ${y}`, R) + n(x, y, R)).join("")}<rect x="189" y="43" width="14" height="14" rx="3" fill="${R}"/>${B.tx(196, 86, "Estrella", { fs: 11, maxW: 80, bold: true, color: R })}
    <circle cx="65" cy="128" r="22" stroke="${L}" stroke-width="2" fill="none"/>${[[65, 106], [87, 128], [65, 150], [43, 128]].map(([x, y]) => n(x, y, L)).join("")}${B.tx(65, 172, "Anillo", { fs: 11, maxW: 80, bold: true, color: L })}
    ${(() => { const p = [[176, 110], [216, 110], [226, 142], [196, 156], [166, 142]]; let s = ""; for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) s += l(`M${p[i][0]} ${p[i][1]} L ${p[j][0]} ${p[j][1]}`, S); return s + p.map(([x, y]) => n(x, y, S)).join(""); })()}${B.tx(196, 172, "Malla", { fs: 11, maxW: 80, bold: true, color: S })}
  </svg>`;
};

// Red doméstica: ONT/router, switch, wifi y dispositivos.
const casa = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Red doméstica: fibra hasta el router, que reparte por cable y por wifi a ordenador, móvil, televisor e impresora">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Una red doméstica", { fs: 13, maxW: 236, bold: true, font: B.D })}
  <rect x="10" y="74" width="46" height="28" rx="6" fill="var(--ink)" opacity=".8"/>${B.tx(33, 92, "Internet", { fs: 9.5, maxW: 40, bold: true, color: "#fff" })}
  <path d="M56 88 H 92" stroke="var(--sun)" stroke-width="3"/>${B.tx(74, 82, "fibra", { fs: 9, maxW: 30, color: "var(--sun)" })}
  <rect x="92" y="70" width="70" height="36" rx="8" fill="var(--pen)"/>${B.tx(127, 86, "Router", { fs: 11, maxW: 62, bold: true, color: "#fff" })}${B.tx(127, 99, "NAT · DHCP", { fs: 8.5, maxW: 62, color: "#fff" })}
  <path d="M110 70 V 52 M144 70 V 52" stroke="var(--pen)" stroke-width="2"/><path d="M120 46 q7 -8 14 0 M116 40 q11 -14 22 0" stroke="var(--leaf)" stroke-width="2" fill="none"/>${B.tx(96, 46, "wifi", { fs: 10, maxW: 30, bold: true, color: "var(--leaf)" })}
  ${[["Portátil", 206, 40, "var(--leaf)"], ["Móvil", 222, 76, "var(--leaf)"], ["TV", 206, 112, "var(--red)"], ["Impresora", 120, 150, "var(--red)"]].map(([t, x, y, c]) => `<rect x="${x - 30}" y="${y - 12}" width="60" height="22" rx="6" fill="var(--card)" stroke="${c}" stroke-width="2"/>${B.tx(x, y + 3, t, { fs: 9.5, maxW: 54, bold: true, color: c })}`).join("")}
  <path d="M162 98 L 176 108 M127 106 V 138" stroke="var(--red)" stroke-width="2.5"/>${B.tx(60, 140, "cable RJ45", { fs: 9, maxW: 60, color: "var(--red)" })}
  <path d="M162 76 L 192 76 M150 70 L 178 44" stroke="var(--leaf)" stroke-width="1.5" stroke-dasharray="3 3"/>
</svg>`;

module.exports = B.tema({
  titulo: "Las redes",
  minutos: 120,
  objetivos: [
    "Clasificar las redes por su alcance, su topología y su medio de transmisión",
    "Identificar la función de los dispositivos de red y de los protocolos organizados en capas",
    "Interpretar direcciones IP y MAC, máscaras, puertos, URL y el funcionamiento del DNS",
    "Configurar y diagnosticar una red doméstica segura con herramientas básicas",
  ],
  claves: ["red", "LAN", "WAN", "topología", "fibra óptica", "switch", "router", "protocolo", "TCP/IP", "dirección IP", "DNS", "wifi"],
  pregunta: {
    texto: "Cuando abres una web alojada en Japón, la página tarda menos de un segundo en llegar. ¿Qué camino recorren los datos y cómo saben adónde ir?",
    respuesta: "La página se divide en miles de <b>paquetes</b>, cada uno con la <b>dirección IP</b> de origen y de destino. Los <b>routers</b> de las distintas redes los van reenviando, salto a salto, por cables de fibra óptica que cruzan los océanos. Antes, el <b>DNS</b> tradujo el nombre de la web a su IP. Todo funciona porque los equipos del mundo siguen los mismos <mark>protocolos TCP/IP</mark>.",
  },
  lectura: {
    titulo: "Cables bajo el mar",
    html: `<p>Imaginamos internet como algo que flota en el aire, «en la nube». La realidad es mucho más material: más del 95 % del tráfico intercontinental viaja por unos 500 cables submarinos de fibra óptica que recorren el fondo de los océanos. Algunos miden más de 20 000 kilómetros, son del grosor de una manguera y llevan en su interior hilos de vidrio más finos que un pelo por los que viajan pulsos de luz.</p>
    <p>Varios de esos cables llegan a la costa española, en lugares como Bilbao, Barcelona, Valencia o las Canarias. Desde allí los datos pasan a centros de intercambio, a las redes de los operadores y, por fin, a la fibra que entra en casa, al router y al móvil por wifi. En cada etapa cambian el medio y los dispositivos, pero no el idioma: todos los equipos hablan los mismos protocolos.</p>
    <p>Cuando un barco ancla mal o un terremoto rompe un cable, países enteros pueden quedarse con internet lento durante días, hasta que un buque especial lo repara. En este tema descubrirás cómo se organiza esa red de redes, qué hace cada aparato y cómo montar, configurar y proteger tu propia red.</p>`,
  },
  secciones: [4, 5, 3],
  bloques: [
    {
      h: "Qué es una red y para qué sirve",
      html: `<p>Una <b>red informática</b> es un conjunto de dispositivos (ordenadores, móviles, impresoras, servidores, sensores) conectados entre sí mediante un medio de transmisión, que intercambian información siguiendo unas reglas comunes llamadas <b>protocolos</b>.</p>
      <p>Las redes permiten:</p>
      <ul><li><b>Compartir recursos</b>: una impresora, un disco o la conexión a internet para todo un aula.</li>
      <li><b>Compartir información</b>: trabajar sobre los mismos archivos, usar bases de datos centralizadas.</li>
      <li><b>Comunicarse</b>: correo, mensajería, videollamadas.</li>
      <li><b>Acceder a servicios remotos</b>: la web, la nube, el streaming o la banca en línea.</li></ul>
      <p>Toda comunicación tiene los elementos clásicos: un <b>emisor</b>, un <b>receptor</b>, un <b>mensaje</b>, un <b>canal</b> o medio y un <b>código</b> común. En las redes, el canal es un cable o el aire, el código son los protocolos y el mensaje viaja dividido en <b>paquetes</b>.</p>
      <p>Las redes pueden organizarse con dos modelos. En el modelo <b>cliente-servidor</b>, unos equipos potentes (<b>servidores</b>) ofrecen servicios y otros (<b>clientes</b>) los solicitan: tu navegador es un cliente que pide páginas a un servidor web. En las redes <b>entre iguales</b> (<i>peer to peer</i>, P2P), todos los equipos actúan a la vez como clientes y servidores, como en algunas aplicaciones de intercambio de archivos o en las cadenas de bloques. Las características que más importan de una red son su <b>ancho de banda</b> (cantidad de datos por segundo), su <b>latencia</b> (retardo) y su <b>fiabilidad</b>.</p>`,
      svg: B.comparar("Modelo cliente-servidor frente a red entre iguales", ["Cliente-servidor", ["servidor central", "clientes piden", "fácil de gestionar", "punto único de fallo"]], ["P2P", ["todos iguales", "comparten recursos", "sin centro", "difícil de controlar"]]),
    },
    {
      h: "Tipos de redes según su alcance y topología",
      html: `<p>Según su <b>alcance geográfico</b>, las redes se clasifican en:</p>
      <ul><li><b>PAN</b> (red de área personal): unos pocos metros alrededor de una persona; por ejemplo, el móvil con los auriculares y el reloj por Bluetooth.</li>
      <li><b>LAN</b> (red de área local): un edificio, una casa, un instituto. Si es inalámbrica se llama <b>WLAN</b>.</li>
      <li><b>MAN</b> (red de área metropolitana): una ciudad, como la red que une los edificios de un ayuntamiento.</li>
      <li><b>WAN</b> (red de área extensa): países o continentes. Internet es la mayor WAN del mundo.</li></ul>
      <p>La <b>topología</b> es la forma en que se conectan los nodos:</p>
      <ul><li><b>Bus</b>: todos comparten un único cable. Barata, pero si el cable falla cae toda la red.</li>
      <li><b>Estrella</b>: todos se conectan a un dispositivo central (switch). Es la más usada en las LAN: si un cable falla solo se pierde ese equipo, aunque el centro es crítico.</li>
      <li><b>Anillo</b>: cada nodo se conecta con dos vecinos y los datos circulan en un sentido.</li>
      <li><b>Malla</b>: hay varios caminos entre nodos. Muy fiable y cara; es la estructura del núcleo de internet.</li>
      <li><b>Árbol</b> o jerárquica: estrellas conectadas entre sí, típica de redes de edificios grandes.</li></ul>
      <p>También se clasifican por su <b>titularidad</b> en redes <b>públicas</b> (cualquiera puede conectarse, como la wifi de una biblioteca) y <b>privadas</b> (de uso restringido, como la red de una empresa), y por su medio, en <b>cableadas</b> e <b>inalámbricas</b>.</p>`,
      svg: topologias(),
      video: { id: "4_zSIXb7tLQ", titulo: "Tipos de red: LAN, WAN, PAN, CAN, MAN, SAN, WLAN", canal: "PowerCert Animated Videos", vistas: 1304647 },
    },
    {
      h: "Medios de transmisión",
      html: `<p>El <b>medio de transmisión</b> es el soporte físico por el que viajan las señales. Puede ser guiado (cables) o no guiado (ondas).</p>
      <ul><li><b>Par trenzado</b>: cables de cobre trenzados por parejas para reducir interferencias, con conectores <b>RJ45</b>. Es el cable Ethernet de casas y oficinas. Sus categorías (Cat 5e, Cat 6, Cat 6A) indican la velocidad: de 1 a 10 Gb/s hasta 100 m.</li>
      <li><b>Cable coaxial</b>: un conductor central rodeado de una malla metálica. Se usa en antenas de televisión y en algunas redes de cable.</li>
      <li><b>Fibra óptica</b>: hilos de vidrio por los que viaja luz que se refleja en sus paredes. Ofrece un ancho de banda enorme, recorre kilómetros sin apenas pérdidas y no le afectan las interferencias electromagnéticas. Es la base de las redes troncales y de la conexión doméstica <b>FTTH</b> (fibra hasta el hogar).</li>
      <li><b>Ondas de radio</b>: wifi, Bluetooth y redes móviles. Dan movilidad, pero tienen menos alcance y son más sensibles a obstáculos e interferencias.</li>
      <li><b>Microondas</b> y <b>satélite</b>: enlaces entre antenas lejanas y conexiones en zonas remotas. Los satélites de órbita baja han reducido la latencia de las conexiones por satélite.</li></ul>
      <p>Para elegir un medio se valoran el <b>ancho de banda</b>, la <b>distancia</b> máxima, la resistencia a <b>interferencias</b>, la <b>seguridad</b> (las ondas pueden captarse más fácilmente que la luz de una fibra), el <b>coste</b> y la <b>facilidad de instalación</b>. En casa, conviene usar cable para el ordenador fijo o la consola y wifi para los dispositivos móviles.</p>`,
      svg: B.rejilla("Comparación de medios de transmisión", ["Medio", "Velocidad", "Alcance"], [["Par trenzado", "1-10 Gb/s", "100 m"], ["Fibra óptica", "> 100 Gb/s", "km"], ["Wifi", "0,1-2 Gb/s", "decenas m"], ["Satélite", "0,1 Gb/s", "global"]], { t: "Medios de transmisión" }),
    },
    {
      h: "Dispositivos de interconexión",
      html: `<p>Cada dispositivo de red cumple una función concreta:</p>
      <ul><li><b>Tarjeta de red</b> (NIC): el componente que conecta un equipo a la red, por cable o inalámbrica. Cada una tiene una dirección física única, la <b>dirección MAC</b>.</li>
      <li><b>Hub</b> o concentrador: repetía lo que recibía por todos sus puertos. Hoy está obsoleto.</li>
      <li><b>Switch</b> o conmutador: conecta los equipos de una LAN y envía cada trama solo al puerto del destinatario, porque aprende qué dirección MAC hay en cada puerto. Es el centro de la topología en estrella.</li>
      <li><b>Router</b> o encaminador: conecta <b>redes distintas</b> (por ejemplo, la red de casa con internet) y decide por qué camino enviar cada paquete según su <b>dirección IP</b> de destino, consultando su tabla de rutas.</li>
      <li><b>Punto de acceso</b> (AP): conecta los dispositivos inalámbricos a la red cableada. Los <b>repetidores</b> y los sistemas <b>wifi en malla</b> amplían la cobertura.</li>
      <li><b>Módem</b> y <b>ONT</b>: convierten las señales de la línea del operador (cobre, cable o fibra) en señales digitales para la red local. En las conexiones de fibra, la ONT transforma la luz en señales eléctricas.</li>
      <li><b>Cortafuegos</b> (<i>firewall</i>): filtra el tráfico según unas reglas para bloquear conexiones no autorizadas.</li></ul>
      <p>El «router» que instalan los operadores en casa es en realidad un aparato todo en uno: incluye router, switch de varios puertos, punto de acceso wifi, cortafuegos y, a veces, la ONT. En empresas e institutos estos elementos van por separado en un <b>armario de comunicaciones</b>.</p>`,
      svg: B.cajas("Dispositivos de red y su función", [["Tarjeta de red", "dirección MAC"], ["Switch", "une equipos|de una LAN"], ["Router", "une redes|usa la IP"], ["Punto de acceso", "conecta|el wifi"], ["Módem / ONT", "línea del|operador"], ["Cortafuegos", "filtra|el tráfico"]], { t: "Dispositivos de red", cols: 3 }),
      video: { id: "Gky8-OVYmT4", titulo: "Diferencias entre hub, switch y router explicado rápido y fácil", canal: "RedesCiber", vistas: 190608 },
    },
    {
      h: "Protocolos y modelos de capas",
      html: `<p>Un <b>protocolo</b> es un conjunto de reglas que establece cómo se comunican los dispositivos: formato de los mensajes, orden, control de errores. Como la comunicación en red es compleja, se divide en <b>capas</b>: cada una resuelve una parte del problema y ofrece sus servicios a la capa superior.</p>
      <p>El <b>modelo OSI</b>, de la Organización Internacional de Normalización, define siete capas teóricas: física, enlace, red, transporte, sesión, presentación y aplicación. En la práctica, internet usa el <mark>modelo TCP/IP</mark>, con cuatro capas:</p>
      <ul><li><b>Acceso a la red</b> (física y enlace): cómo se transmiten los bits por el medio concreto. Protocolos: <b>Ethernet</b> y <b>wifi</b> (IEEE 802.11). Usa direcciones MAC.</li>
      <li><b>Internet</b> (red): cómo llegan los paquetes de una red a otra. Protocolo <b>IP</b>, con direcciones IP.</li>
      <li><b>Transporte</b>: comunicación entre aplicaciones de extremo a extremo. <b>TCP</b> garantiza que todo llegue completo y en orden; <b>UDP</b> es más rápido pero no lo garantiza.</li>
      <li><b>Aplicación</b>: servicios para el usuario: <b>HTTP/HTTPS</b> (web), <b>SMTP</b>, <b>IMAP</b> (correo), <b>DNS</b> (nombres), <b>FTP</b> (archivos).</li></ul>
      <p>Al enviar, cada capa añade su propia cabecera a los datos, como si se metiera una carta en sobres sucesivos: es el <b>encapsulamiento</b>. Al recibir, cada capa quita su sobre y pasa el contenido a la siguiente. Gracias a las capas, una página web puede viajar igual por wifi, por cobre o por fibra: solo cambia la capa inferior.</p>`,
      svg: B.capas("Capas del modelo TCP/IP con sus protocolos", [["Aplicación", "HTTP, DNS, SMTP"], ["Transporte", "TCP, UDP"], ["Internet", "IP"], ["Acceso a la red", "Ethernet, wifi"]], { t: "Modelo TCP/IP" }),
    },
    {
      h: "Direcciones IP y MAC",
      html: `<p>Para que un paquete llegue a su destino, cada equipo necesita una dirección. Hay dos tipos que trabajan juntos:</p>
      <ul><li>La <b>dirección MAC</b> es la dirección <b>física</b> de la tarjeta de red, grabada por el fabricante. Tiene 48 bits escritos como seis parejas hexadecimales: <code>3C:52:82:1A:F0:7B</code>. Se usa dentro de la red local.</li>
      <li>La <b>dirección IP</b> es la dirección <b>lógica</b>, asignada según la red en la que está el equipo, como la dirección postal de una casa. Permite encaminar los paquetes entre redes.</li></ul>
      <p>Una dirección <b>IPv4</b> tiene <b>32 bits</b>, escritos como cuatro números decimales de 0 a 255 separados por puntos: <code>192.168.1.25</code>. Cada número es un octeto (8 bits). Una parte de la dirección identifica la <b>red</b> y otra el <b>equipo</b> dentro de ella. Lo indica la <b>máscara de subred</b>: con la máscara <code>255.255.255.0</code> (o /24), los tres primeros octetos son la red (192.168.1) y el último el equipo, así que caben 254 equipos (el 0 identifica la red y el 255 es la difusión).</p>
      <p>Para salir de su red, un equipo envía los paquetes a la <b>puerta de enlace</b> (<i>gateway</i>), que es el router. Así, la configuración de red de un equipo incluye cuatro datos: IP, máscara, puerta de enlace y servidor DNS. Para conocerlos se usan las órdenes <code>ipconfig</code> (Windows) o <code>ip a</code> (Linux).</p>`,
      svg: B.rejilla("Configuración de red de un equipo", ["Dato", "Ejemplo"], [["IP", "192.168.1.25"], ["Máscara", "255.255.255.0"], ["Puerta de enlace", "192.168.1.1"], ["DNS", "1.1.1.1"], ["MAC", "3C:52:82:1A:F0:7B"]], { t: "Configuración IP" }),
      video: { id: "YSVo21r3wBg", titulo: "Qué es una dirección IP y para qué sirve", canal: "Retro", vistas: 420286 },
    },
    {
      h: "IP públicas y privadas, NAT, DHCP e IPv6",
      html: `<p>Con 32 bits hay unos 4300 millones de direcciones IPv4, muchas menos que dispositivos conectados. Para ahorrarlas se usan varias soluciones:</p>
      <ul><li><b>IP privadas</b>: rangos reservados para redes locales que no se usan en internet y pueden repetirse en millones de casas: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code> y <code>192.168.0.0/16</code>.</li>
      <li><b>IP pública</b>: la que identifica a la conexión en internet. Normalmente el operador asigna una sola por hogar al router.</li>
      <li><b>NAT</b> (traducción de direcciones de red): el router cambia la IP privada de cada paquete que sale por su IP pública y recuerda a quién pertenece cada conexión para devolver las respuestas al equipo correcto. Así, todos los dispositivos de casa salen a internet con una única IP.</li></ul>
      <p>Las direcciones pueden ser <b>estáticas</b> (fijas, configuradas a mano, útiles para servidores e impresoras) o <b>dinámicas</b>. Estas las asigna automáticamente un servidor <b>DHCP</b>, normalmente el router, durante un tiempo de préstamo: al conectarte a una wifi, recibes IP, máscara, puerta de enlace y DNS sin hacer nada.</p>
      <p>La solución definitiva es <b>IPv6</b>, con direcciones de <b>128 bits</b> escritas en ocho grupos hexadecimales: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>. Ofrece unos 3,4 · 10³⁸ direcciones, suficientes para dar una a cada objeto del planeta, e incluye mejoras de seguridad. IPv4 e IPv6 conviven hoy en internet.</p>`,
      svg: B.flujo("Funcionamiento de la NAT del router", ["Móvil 192.168.1.30 pide una web", "El router cambia la IP privada por la pública", "La web responde a la IP pública", "El router consulta su tabla NAT", "Entrega la respuesta al móvil"], { t: "NAT" }),
    },
    {
      h: "Nombres de dominio, URL y DNS",
      html: `<p>Las personas recordamos mejor nombres que números. Por eso los servidores tienen <b>nombres de dominio</b>, como <code>www.boe.es</code>. Se leen de derecha a izquierda, de lo general a lo particular:</p>
      <ul><li><b>Dominio de primer nivel</b> (TLD): genéricos (.com, .org, .edu) o territoriales (.es, .fr, .cat).</li>
      <li><b>Dominio de segundo nivel</b>: el nombre registrado (boe).</li>
      <li><b>Subdominios</b>: www, sede, mail…</li></ul>
      <p>El <mark>DNS</mark> (sistema de nombres de dominio) es una enorme base de datos distribuida que traduce nombres a direcciones IP. Al escribir un nombre, el equipo pregunta a su <b>servidor DNS</b> (el del operador u otro público); si no lo sabe, este consulta de forma jerárquica a los servidores raíz, a los del TLD y a los del dominio, y guarda la respuesta en una <b>caché</b> para la próxima vez. Si el DNS falla, «no hay internet» aunque la conexión funcione.</p>
      <p>Una <b>URL</b> (localizador uniforme de recursos) indica dónde está exactamente un recurso:</p>
      <p><code>https://www.ejemplo.es:443/cursos/tic.html?tema=3</code></p>
      <ul><li><b>Protocolo</b>: https. <b>Dominio</b>: www.ejemplo.es. <b>Puerto</b> (opcional): 443.</li>
      <li><b>Ruta</b>: /cursos/tic.html. <b>Parámetros</b>: ?tema=3.</li></ul>
      <p>Los <b>puertos</b> identifican el servicio dentro de un servidor: 80 para HTTP, 443 para HTTPS, 25 para SMTP. Revisar bien el dominio de una URL es esencial para detectar webs falsas que imitan a las auténticas.</p>`,
      svg: B.flujo("Resolución de un nombre mediante DNS", ["Escribes www.boe.es", "El equipo pregunta a su servidor DNS", "El DNS consulta raíz, .es y boe.es", "Responde con la dirección IP", "El navegador conecta con esa IP"], { t: "Cómo funciona el DNS" }),
      video: { id: "dIGxJCqLJlY", titulo: "¿Cómo funciona el DNS?", canal: "Redpuntoes", vistas: 319314 },
    },
    {
      h: "El viaje de los paquetes",
      html: `<p>Internet usa la <b>conmutación de paquetes</b>: los datos no viajan por un circuito reservado, como las antiguas llamadas telefónicas, sino divididos en <b>paquetes</b> independientes de, como máximo, unos 1500 bytes. Cada paquete lleva una cabecera con la IP de origen y destino, un número de orden y otros datos de control. Los paquetes de un mismo mensaje pueden seguir caminos distintos y llegar desordenados.</p>
      <p>Cada <b>router</b> que atraviesa un paquete es un <b>salto</b>. El router lee la IP de destino, consulta su <b>tabla de enrutamiento</b> y lo reenvía hacia el siguiente router más adecuado. Para evitar que un paquete dé vueltas para siempre, lleva un contador (TTL) que disminuye en cada salto. Los operadores intercambian rutas entre sí y conectan sus redes en <b>puntos neutros</b> (IXP), como los de Madrid y Barcelona.</p>
      <p>En la capa de transporte, <b>TCP</b> establece primero una conexión con un «saludo en tres pasos», numera los segmentos, confirma su recepción y reenvía los que se pierden: se usa en la web, el correo y las descargas, donde no puede faltar nada. <b>UDP</b> envía sin confirmar: es más rápido y se usa en videollamadas, juegos en línea o streaming en directo, donde es mejor perder un fotograma que esperar.</p>
      <p>Para diagnosticar el camino se usan <code>ping</code>, que comprueba si un equipo responde y mide la <b>latencia</b> en milisegundos, y <code>tracert</code> o <code>traceroute</code>, que muestra los routers de cada salto.</p>`,
      svg: B.comparar("Protocolos de transporte TCP y UDP", ["TCP", ["con conexión", "confirma y reordena", "fiable", "web, correo"]], ["UDP", ["sin conexión", "no confirma", "rápido", "voz, juegos"]]),
    },
    {
      h: "Redes inalámbricas y móviles",
      html: `<p>Las <b>redes wifi</b> siguen las normas IEEE 802.11 y usan ondas de radio en las bandas de <b>2,4 GHz</b> (más alcance y mejor paso por paredes, pero más saturada e interferida), <b>5 GHz</b> (más velocidad, menos alcance) y <b>6 GHz</b> (en wifi 6E y wifi 7). Las generaciones recientes, como wifi 6 (802.11ax), mejoran la velocidad y, sobre todo, el rendimiento cuando hay muchos dispositivos conectados. Cada red se identifica con un nombre o <b>SSID</b>.</p>
      <p>La cobertura depende de la distancia, de los obstáculos (paredes de hormigón, espejos, agua) y de las interferencias. Para mejorarla: colocar el router en un lugar central y elevado, elegir un canal poco saturado y usar sistemas en malla si la casa es grande.</p>
      <p>Otras tecnologías inalámbricas son <b>Bluetooth</b> (unos 10 m, para periféricos), <b>NFC</b> (pocos centímetros, para pagos) y las redes de bajo consumo para el internet de las cosas.</p>
      <p>Las <b>redes de telefonía móvil</b> dividen el territorio en <b>celdas</b> con una antena cada una, y el móvil cambia de celda sin cortar la conexión. Han evolucionado por generaciones: 2G (voz y SMS), 3G (datos), <b>4G</b> (banda ancha móvil) y <b>5G</b>, con velocidades de varios Gb/s, latencias de pocos milisegundos y capacidad para un millón de dispositivos por kilómetro cuadrado. El 5G permite aplicaciones como la cirugía remota o los vehículos conectados.</p>`,
      svg: B.comparar("Bandas wifi de 2,4 y 5 GHz", ["2,4 GHz", ["más alcance", "atraviesa paredes", "más interferencias", "menos velocidad"]], ["5 GHz", ["menos alcance", "más velocidad", "más canales", "menos interferencias"]]),
    },
    {
      h: "Configurar una red doméstica",
      html: `<p>Una red doméstica típica tiene una conexión de fibra que llega a la ONT o al router del operador, que reparte la conexión por cable a algunos equipos y por wifi al resto. Para configurarla se entra en el <b>panel de administración del router</b> escribiendo en el navegador la dirección de la puerta de enlace (por ejemplo, <code>192.168.1.1</code>) con el usuario y la contraseña de administración que vienen en la etiqueta.</p>
      <p>Pasos recomendados de configuración:</p>
      <ul><li>Cambiar la <b>contraseña de administración</b> del router por una robusta.</li>
      <li>Poner un <b>SSID</b> que no revele datos personales ni el modelo de router.</li>
      <li>Usar <b>cifrado WPA3</b> (o WPA2-AES si algún equipo no admite WPA3) con una clave larga. Nunca WEP ni red abierta.</li>
      <li>Desactivar <b>WPS</b>, que permite conectarse con un PIN fácil de averiguar.</li>
      <li>Crear una <b>red de invitados</b> separada para las visitas y para los dispositivos domóticos.</li>
      <li><b>Actualizar el firmware</b> del router.</li>
      <li>Reservar IP fijas por DHCP para la impresora o una consola, si hace falta.</li></ul>
      <p>Para compartir archivos o una impresora entre los equipos de casa, el sistema operativo permite activar la <b>detección de redes</b> y el uso compartido en redes privadas, nunca en las públicas. Un plano sencillo de la red, con los dispositivos, sus conexiones y sus direcciones, ayuda mucho cuando algo falla.</p>`,
      svg: casa(),
    },
    {
      h: "Seguridad y diagnóstico de la red",
      html: `<p>Las redes, sobre todo las inalámbricas, pueden ser objeto de ataques: intrusos que usan nuestra conexión, que espían el tráfico o que se hacen pasar por una red legítima (un punto de acceso falso con el nombre de la wifi de una cafetería). Medidas de protección:</p>
      <ul><li>Configurar bien el router (WPA3, contraseñas fuertes, firmware actualizado).</li>
      <li>Activar el <b>cortafuegos</b> del sistema operativo.</li>
      <li>En <b>wifi públicas</b>, no hacer operaciones sensibles, comprobar que las webs usan <b>HTTPS</b> y, si es posible, usar los datos móviles o una <b>VPN</b> (red privada virtual), que cifra todo el tráfico en un túnel hasta un servidor de confianza.</li>
      <li>Revisar de vez en cuando la lista de dispositivos conectados al router.</li></ul>
      <p>Cuando «no hay internet», conviene seguir un <b>diagnóstico por capas</b>, de abajo arriba:</p>
      <ul><li><b>Física</b>: ¿está el cable conectado?, ¿están encendidas las luces del router?, ¿hay cobertura wifi?</li>
      <li><b>Configuración</b>: <code>ipconfig</code> o <code>ip a</code>. Si la IP empieza por 169.254, el equipo no ha recibido IP del DHCP.</li>
      <li><b>Red local</b>: <code>ping 192.168.1.1</code> comprueba si llegamos al router.</li>
      <li><b>Internet</b>: <code>ping 1.1.1.1</code> comprueba la salida a internet sin usar nombres.</li>
      <li><b>DNS</b>: si funciona el ping a una IP pero no a un nombre, el problema es el DNS.</li></ul>
      <p>Los <b>test de velocidad</b> miden la bajada, la subida y la latencia; para que sean fiables hay que hacerlos por cable y sin otros equipos descargando.</p>`,
      svg: B.flujo("Diagnóstico de red por capas", ["¿Cable, luces y cobertura?", "¿IP correcta? (ipconfig)", "ping al router", "ping a una IP de internet", "ping a un nombre: ¿DNS?"], { t: "Diagnóstico" }),
    },
  ],
  figura: {
    titulo: "Ideas clave de las redes",
    items: [["Tipos", "PAN·LAN·WAN", "estrella, malla", "cable o radio"], ["Dispositivos", "switch · router", "AP · ONT", "cortafuegos"], ["Protocolos", "TCP/IP", "4 capas", "encapsulamiento"], ["Direcciones", "IP · MAC · DNS", "máscara, NAT", "DHCP, IPv6"]],
  },
  video: { id: "_JTNqOEjN84", titulo: "Así es como funciona realmente el wifi", canal: "GENIAL", vistas: 2180783 },
  quiz: [
    ["Una red que cubre un instituto es una…", ["PAN", "LAN", "MAN", "WAN"], 1, "Red de área local."],
    ["La topología más usada en las redes locales actuales es…", ["bus", "anillo", "estrella", "malla"], 2, "Todos los equipos se conectan a un switch."],
    ["En el modelo cliente-servidor, el navegador web actúa como…", ["servidor", "cliente", "router", "switch"], 1, "Pide páginas al servidor web."],
    ["El medio con mayor ancho de banda y alcance es…", ["par trenzado", "coaxial", "fibra óptica", "Bluetooth"], 2, "Transmite luz con muy pocas pérdidas."],
    ["El conector del cable Ethernet es…", ["HDMI", "RJ45", "USB-C", "jack"], 1, "RJ45."],
    ["El dispositivo que conecta redes distintas usando direcciones IP es…", ["el switch", "el router", "el hub", "la tarjeta de red"], 1, "Encamina los paquetes entre redes."],
    ["El switch envía cada trama…", ["a todos los puertos", "solo al puerto del destinatario", "a internet", "al DNS"], 1, "Aprende qué MAC hay en cada puerto."],
    ["¿Cuántas capas tiene el modelo TCP/IP?", ["2", "4", "7", "10"], 1, "Acceso a la red, internet, transporte y aplicación."],
    ["HTTPS pertenece a la capa de…", ["acceso a la red", "internet", "transporte", "aplicación"], 3, "Es un servicio para el usuario."],
    ["Una dirección IPv4 tiene…", ["32 bits", "48 bits", "64 bits", "128 bits"], 0, "Cuatro octetos."],
    ["La dirección MAC tiene…", ["32 bits", "48 bits", "128 bits", "8 bits"], 1, "Seis parejas hexadecimales."],
    ["¿Cuál es una IP privada?", ["8.8.8.8", "192.168.1.10", "213.0.1.5", "1.1.1.1"], 1, "El rango 192.168.0.0/16 es privado."],
    ["El servicio que asigna IP automáticamente es…", ["DNS", "DHCP", "NAT", "FTP"], 1, "Dynamic Host Configuration Protocol."],
    ["El DNS sirve para…", ["cifrar el tráfico", "traducir nombres de dominio a IP", "asignar MAC", "medir la velocidad"], 1, "Es la «agenda» de internet."],
    ["En https://www.boe.es/buscar, el dominio de primer nivel es…", [".boe", ".es", "www", "/buscar"], 1, "Se lee de derecha a izquierda."],
    ["El puerto estándar de HTTPS es…", ["21", "25", "80", "443"], 3, "80 es HTTP sin cifrar."],
    ["El protocolo que garantiza la entrega completa y ordenada es…", ["UDP", "TCP", "IP", "DNS"], 1, "Confirma y reenvía lo perdido."],
    ["La banda wifi con más alcance es…", ["2,4 GHz", "5 GHz", "6 GHz", "todas igual"], 0, "Las frecuencias bajas atraviesan mejor los obstáculos."],
    ["El cifrado wifi más seguro de los siguientes es…", ["WEP", "red abierta", "WPA2-TKIP", "WPA3"], 3, "WEP está roto desde hace años."],
    ["La orden que comprueba si un equipo responde y mide la latencia es…", ["ipconfig", "ping", "dir", "cd"], 1, "Envía paquetes de eco."],
  ],
  examen: [
    ["Con la máscara 255.255.255.0, ¿cuántos equipos caben en la red 192.168.5.0?", ["256", "254", "255", "24"], 1, "2⁸ − 2 = 254 (se reservan red y difusión)."],
    ["¿Están 192.168.1.20 y 192.168.2.20 en la misma red con máscara /24?", ["Sí", "No, difiere el tercer octeto", "Solo si usan wifi", "Depende del DNS"], 1, "La parte de red son los tres primeros octetos."],
    ["Pasa a binario el octeto 192.", ["11000000", "10100000", "11110000", "10000001"], 0, "128 + 64 = 192."],
    ["¿Cuántas direcciones IPv4 existen en total?", ["2³² ≈ 4300 millones", "2⁴⁸", "2¹²⁸", "255⁴"], 0, "32 bits."],
    ["Un equipo hace ping a 1.1.1.1 con éxito pero no a www.boe.es. El problema está en…", ["el cable", "el DNS", "la tarjeta de red", "el router"], 1, "Hay conexión pero no se resuelven nombres."],
    ["Un archivo de 600 MB se descarga en 1 minuto. ¿Qué velocidad real tiene la conexión?", ["10 Mb/s", "80 Mb/s", "600 Mb/s", "4800 Mb/s"], 1, "600 · 8 / 60 = 80 Mb/s."],
    ["Un equipo tiene la IP 169.254.10.3. ¿Qué indica?", ["Tiene IP pública", "No ha recibido IP del servidor DHCP", "Usa IPv6", "Es el router"], 1, "Es una dirección automática de emergencia."],
    ["Para una videollamada en tiempo real se prefiere UDP porque…", ["cifra mejor", "es más rápido y no espera reenvíos", "garantiza el orden", "usa menos IP"], 1, "Es mejor perder un dato que retrasar la imagen."],
  ],
  feynman: ["Qué diferencia hay entre LAN y WAN y entre topología en estrella y en malla", "Qué hace un switch y qué hace un router", "Por qué la comunicación en red se organiza en capas", "Qué son la IP, la máscara, la puerta de enlace y el DNS", "Cómo consiguen todos los equipos de casa salir a internet con una sola IP pública", "Cómo diagnosticarías que «no hay internet»"],
  mapa: ["LAS REDES", [["Clasificación", "alcance · topología · medio"], ["Dispositivos", "tarjeta · switch · router · AP"], ["Protocolos", "TCP/IP · TCP y UDP · HTTP"], ["Direcciones", "IP · MAC · DNS · NAT · DHCP"]]],
  tarjetas: [
    ["Red informática", "Dispositivos conectados que comparten información según protocolos."],
    ["Por alcance", "PAN, LAN (WLAN), MAN y WAN."],
    ["Topologías", "Bus, estrella, anillo, malla y árbol."],
    ["Fibra óptica", "Luz por hilos de vidrio: gran ancho de banda y sin interferencias."],
    ["Switch y router", "El switch une equipos de una LAN (MAC); el router une redes (IP)."],
    ["Modelo TCP/IP", "Acceso a la red, internet, transporte y aplicación."],
    ["TCP y UDP", "TCP: fiable y ordenado. UDP: rápido, sin confirmación."],
    ["IPv4", "32 bits en cuatro octetos; máscara para separar red y equipo."],
    ["IP privadas", "10.x.x.x, 172.16-31.x.x y 192.168.x.x; salen por NAT."],
    ["DHCP", "Asigna IP, máscara, puerta de enlace y DNS automáticamente."],
    ["DNS", "Traduce nombres de dominio en direcciones IP."],
    ["Wifi segura", "WPA3, clave larga, sin WPS, firmware al día y red de invitados."],
  ],
  ejemplos: [
    ["Analiza la configuración: IP 192.168.1.37, máscara 255.255.255.0, puerta de enlace 192.168.1.1. ¿Cuál es la dirección de red, cuántos equipos caben y qué es 192.168.1.1?", ["La máscara /24 indica que la red son los tres primeros octetos.", "Dirección de red: 192.168.1.0; difusión: 192.168.1.255.", "Equipos posibles: 2⁸ − 2 = 254.", "192.168.1.1 es el router, la salida hacia otras redes."], "Red 192.168.1.0/24, hasta 254 equipos, gateway en el router."],
    ["Convierte la IP 172.16.10.200 a binario.", ["172 = 128 + 32 + 8 + 4 = 10101100.", "16 = 00010000; 10 = 00001010.", "200 = 128 + 64 + 8 = 11001000."], "10101100.00010000.00001010.11001000"],
    ["Descompón la URL https://sede.ejemplo.gob.es/tramites/beca.html?curso=2026.", ["Protocolo: https (cifrado, puerto 443 por defecto).", "Dominio: sede.ejemplo.gob.es (TLD .es, segundo nivel gob, subdominios ejemplo y sede).", "Ruta: /tramites/beca.html; parámetro: curso=2026."], "Protocolo, dominio, ruta y parámetros identificados."],
    ["Calcula el tiempo de descarga de un juego de 50 GB con fibra de 600 Mb/s si se aprovecha el 90 % de la velocidad.", ["Velocidad útil: 0,9 · 600 = 540 Mb/s.", "Tamaño: 50 GB = 50 000 MB = 400 000 Mb.", "t = 400 000 / 540 ≈ 741 s."], "Unos 12 minutos y medio."],
    ["Explica qué ocurre cuando escribes www.ejemplo.es en el navegador.", ["El equipo consulta al DNS y obtiene la IP del servidor.", "Establece una conexión TCP con el puerto 443 y negocia el cifrado TLS (HTTPS).", "Envía una petición HTTP GET; el servidor responde con el HTML.", "El navegador pide imágenes, estilos y scripts y dibuja la página. Todos los paquetes salen por el router con NAT."], "DNS → TCP/TLS → HTTP → renderizado."],
    ["En casa la wifi va lenta en la habitación del fondo. Propón un diagnóstico y soluciones.", ["Medir la velocidad junto al router y en la habitación, por wifi y por cable.", "Si junto al router va bien, el problema es la cobertura: paredes, distancia o interferencias.", "Probar la banda de 2,4 GHz, cambiar el canal, mover el router a un lugar central y elevado.", "Si no basta, instalar un sistema wifi en malla o un punto de acceso cableado."], "Diagnóstico por mediciones y mejora de cobertura."],
  ],
  errores: [
    "Confundir internet (la red) con la web (un servicio) o con el wifi (un medio de acceso).",
    "Pensar que el switch y el router hacen lo mismo.",
    "Creer que la dirección IP de un equipo es siempre la misma en todas las redes.",
    "Dejar la contraseña de administración del router y la clave wifi de fábrica.",
    "Hacer operaciones bancarias en una wifi pública abierta sin HTTPS ni VPN.",
    "Interpretar un fallo de DNS como «no hay internet» sin comprobar con ping a una IP.",
  ],
  ejercicios: {
    b: [
      ["Define red informática y nombra cuatro ventajas de trabajar en red.", "Conjunto de dispositivos conectados que intercambian información según protocolos. Ventajas: compartir recursos (impresora, conexión), compartir información, comunicarse y acceder a servicios remotos."],
      ["Clasifica por alcance: la red del instituto, los auriculares Bluetooth, internet, la red de los semáforos de una ciudad.", "LAN, PAN, WAN y MAN."],
      ["Dibuja (describe) las topologías en bus, estrella y malla e indica una ventaja de cada una.", "Bus: un cable común, barata. Estrella: todos a un switch; si falla un cable, solo cae ese equipo. Malla: varios caminos, muy fiable."],
      ["Ordena de menor a mayor ancho de banda: par trenzado Cat 5e, fibra óptica, Bluetooth.", "Bluetooth, par trenzado Cat 5e, fibra óptica."],
      ["¿Qué función tienen el switch, el router y el punto de acceso?", "El switch une los equipos de una red local; el router une redes distintas y encamina paquetes por IP; el punto de acceso conecta los dispositivos inalámbricos."],
      ["Nombra las cuatro capas del modelo TCP/IP y un protocolo de cada una.", "Acceso a la red (Ethernet), internet (IP), transporte (TCP), aplicación (HTTP)."],
      ["¿Qué diferencia hay entre dirección MAC y dirección IP?", "La MAC es física, la graba el fabricante en la tarjeta y se usa en la red local; la IP es lógica, depende de la red y permite encaminar entre redes."],
      ["Indica si son públicas o privadas: 10.0.0.5, 8.8.4.4, 192.168.0.100, 172.20.1.1.", "Privada, pública, privada y privada."],
      ["¿Qué hace el servidor DHCP?", "Asigna automáticamente a cada equipo su IP, máscara, puerta de enlace y DNS."],
      ["¿Para qué sirve el DNS?", "Traduce nombres de dominio (www.ejemplo.es) a direcciones IP."],
      ["Indica el protocolo, el dominio y la ruta de http://www.museo.es/expos/actual.html.", "Protocolo http; dominio www.museo.es; ruta /expos/actual.html."],
      ["Cita cuatro medidas para proteger la wifi de casa.", "Cifrado WPA3 o WPA2-AES con clave larga, cambiar la contraseña del router, desactivar WPS y actualizar el firmware (además de red de invitados)."],
    ],
    m: [
      ["Explica el encapsulamiento con la analogía de la carta y los sobres.", "Cada capa mete los datos de la superior en su propio «sobre» con una cabecera (puertos en transporte, IP en internet, MAC en enlace). El receptor abre los sobres en orden inverso. Así, cada capa solo se ocupa de su parte."],
      ["Con IP 10.0.5.20 y máscara 255.0.0.0, ¿cuál es la parte de red y cuántos equipos caben?", "La red es el primer octeto (10.0.0.0/8). Quedan 24 bits para equipos: 2²⁴ − 2 = 16 777 214."],
      ["Convierte a decimal la IP 11000000.10101000.00000001.00001010.", "192.168.1.10."],
      ["Explica cómo funciona la NAT con un ejemplo de dos móviles de casa viendo vídeos.", "Ambos tienen IP privadas (192.168.1.20 y .21). El router sustituye la IP privada de origen por la pública y apunta en su tabla qué conexión (puerto) es de cada uno. Cuando llegan las respuestas, consulta la tabla y entrega cada flujo al móvil correcto."],
      ["¿Por qué es necesario IPv6? ¿Cuántas direcciones permite?", "Porque las unas 4300 millones de direcciones IPv4 se han agotado ante miles de millones de dispositivos. IPv6 usa 128 bits: 2¹²⁸ ≈ 3,4 · 10³⁸ direcciones."],
      ["Describe la resolución DNS de un nombre que el servidor no tiene en caché.", "El servidor DNS pregunta a un servidor raíz, que le indica los servidores del TLD (.es); estos le indican los servidores del dominio; estos dan la IP. El servidor la devuelve al equipo y la guarda en caché un tiempo."],
      ["Elige TCP o UDP y justifica: descarga de un PDF, partida en línea, correo, retransmisión en directo.", "PDF: TCP (no puede faltar nada). Partida: UDP (prima la rapidez). Correo: TCP. Directo: UDP (mejor perder un fotograma que retrasar)."],
      ["Compara las bandas wifi de 2,4 y 5 GHz y aconseja cuál usar para una consola junto al router y un sensor en el jardín.", "2,4 GHz: más alcance y penetración, menos velocidad y más interferencias. 5 GHz: más velocidad, menos alcance. Consola junto al router: 5 GHz (o cable). Sensor en el jardín: 2,4 GHz."],
      ["Un ping a 8.8.8.8 da tiempos de 15 ms y uno a un servidor de Australia, 310 ms. Explica la diferencia.", "La latencia depende de la distancia física (la luz en la fibra recorre unos 200 000 km/s) y del número de saltos y colas en los routers. El servidor australiano está a decenas de miles de km y a más saltos."],
      ["Calcula cuánto tarda en recorrer la luz 20 000 km de cable submarino a 200 000 km/s y compáralo con una latencia típica.", "t = 20 000 / 200 000 = 0,1 s = 100 ms solo de ida; ida y vuelta, 200 ms, a lo que se suma el procesamiento de los routers."],
      ["¿Qué es una VPN y cuándo es útil?", "Una red privada virtual cifra todo el tráfico del dispositivo en un túnel hasta un servidor de confianza. Es útil en wifi públicas, para teletrabajar accediendo a la red de la empresa o para proteger la privacidad frente al operador de la red local."],
      ["Planifica la red de un aula con 25 ordenadores, una impresora y un proyector inalámbrico.", "Topología en estrella con un switch de 32 puertos (Gigabit) conectado al router del centro; cable Cat 6 para los ordenadores y la impresora (IP fija reservada); un punto de acceso para el proyector y los portátiles, en una red separada de la de invitados."],
      ["Describe los pasos para cambiar la clave wifi del router de casa.", "Conocer la puerta de enlace (ipconfig), escribirla en el navegador, entrar con el usuario y contraseña de administración, ir a la sección inalámbrica, elegir WPA3/WPA2-AES, escribir una clave larga, guardar y reconectar los dispositivos."],
      ["Explica por qué en el núcleo de internet se usa topología en malla.", "Porque ofrece caminos alternativos: si un enlace o router falla, el tráfico se desvía por otro. Aporta fiabilidad y reparte la carga, aunque es más cara."],
    ],
    a: [
      ["Divide la red 192.168.10.0/24 en 4 subredes iguales. Indica la máscara y el rango de cada una.", "Se toman 2 bits más: máscara /26 = 255.255.255.192, 64 direcciones por subred (62 equipos). Subredes: .0-.63, .64-.127, .128-.191, .192-.255 (en cada una, la primera es la red y la última la difusión)."],
      ["¿Qué máscara necesitas para una red con 500 equipos? Justifica.", "Se necesitan n bits de equipo con 2ⁿ − 2 ≥ 500 → n = 9 (510 equipos). Máscara /23 = 255.255.254.0."],
      ["Un traceroute muestra 14 saltos y en el salto 9 el tiempo pasa de 20 a 180 ms. Interpreta el resultado.", "Hasta el salto 8 los paquetes van por redes cercanas. En el salto 9 se produce un gran aumento de latencia: probablemente se cruza un enlace intercontinental (cable submarino) o hay un router congestionado. Los saltos posteriores conservan ese retardo."],
      ["Un hogar tiene fibra de 300 Mb/s y cuatro personas: dos ven vídeo 4K (25 Mb/s cada una), una juega en línea (5 Mb/s) y otra descarga un archivo. ¿Qué velocidad máxima tendrá la descarga? ¿Por qué el juego puede ir mal?", "Ocupado: 25 + 25 + 5 = 55 Mb/s; quedan unos 245 Mb/s para la descarga. El juego puede ir mal no por ancho de banda sino por latencia: la descarga satura las colas del router y aumenta el retardo. Se soluciona con calidad de servicio (QoS) priorizando el juego."],
      ["Compara la seguridad de WEP, WPA2 y WPA3.", "WEP usa un cifrado con fallos graves que se rompe en minutos. WPA2 con AES es robusto, pero vulnerable a ataques de diccionario si la clave es débil. WPA3 añade un intercambio de claves (SAE) resistente a esos ataques y protege mejor las redes abiertas."],
      ["Escribe un procedimiento de diagnóstico, con órdenes concretas, para un equipo que no navega.", "1) Revisar cable/wifi. 2) ipconfig: si 169.254.x.x, renovar con ipconfig /renew. 3) ping 192.168.1.1 (router). 4) ping 1.1.1.1 (internet). 5) ping www.boe.es (DNS); si falla solo esto, cambiar el DNS o ipconfig /flushdns. 6) Si todo funciona, revisar el navegador, el proxy o el cortafuegos."],
      ["Explica por qué una wifi pública con el nombre «Aeropuerto_Gratis» puede ser peligrosa aunque tenga ese nombre.", "Cualquiera puede crear un punto de acceso con ese SSID (gemelo malvado). Todo el tráfico pasaría por su equipo: puede ver los sitios visitados, intentar redirigir a webs falsas o capturar datos de servicios sin HTTPS. Hay que confirmar la red oficial, usar HTTPS y una VPN o los datos móviles."],
      ["Calcula cuántos dispositivos se podrían conectar por kilómetro cuadrado en 5G y compáralo con la población de una ciudad densa de 20 000 hab./km².", "El 5G admite hasta 1 000 000 dispositivos/km²: unos 50 dispositivos por habitante, suficientes para el internet de las cosas (sensores, farolas, contadores, vehículos)."],
      ["Diseña la red de una vivienda de dos plantas con teletrabajo, domótica y una consola, y justifica cada decisión.", "Fibra hasta el router en la planta baja; cable Cat 6 por la pared al despacho (estabilidad para el teletrabajo) y a la consola (latencia); sistema wifi en malla con un nodo por planta; red de invitados para domótica y visitas; WPA3, WPS desactivado, firmware al día y reserva DHCP para la impresora."],
      ["Investiga y explica qué es un punto neutro de intercambio (IXP) y por qué mejora internet en un país.", "Es una infraestructura donde muchos operadores conectan sus redes para intercambiar tráfico directamente. Evita que el tráfico entre dos operadores del mismo país salga al extranjero: reduce la latencia, los costes y aumenta la resiliencia. Ejemplos: los puntos neutros de Madrid y Barcelona."],
    ],
  },
  glosario: [
    ["Red informática", "Dispositivos conectados que intercambian información con protocolos comunes."],
    ["LAN", "Red de área local, de un edificio o un hogar."],
    ["WAN", "Red de área extensa, de países o continentes."],
    ["Topología", "Forma en que se conectan los nodos de una red."],
    ["Fibra óptica", "Medio que transmite pulsos de luz por hilos de vidrio."],
    ["Switch", "Dispositivo que une los equipos de una red local."],
    ["Router", "Dispositivo que conecta redes y encamina paquetes por su IP."],
    ["Protocolo", "Conjunto de reglas para comunicarse en una red."],
    ["TCP/IP", "Familia de protocolos de internet organizada en cuatro capas."],
    ["Paquete", "Unidad en la que se dividen los datos para viajar por la red."],
    ["Dirección IP", "Dirección lógica que identifica a un equipo en una red."],
    ["Dirección MAC", "Dirección física única de una tarjeta de red."],
    ["Máscara de subred", "Indica qué parte de la IP es la red y cuál el equipo."],
    ["NAT", "Traducción de IP privadas a una IP pública en el router."],
    ["DHCP", "Protocolo que asigna configuración de red automáticamente."],
    ["DNS", "Sistema que traduce nombres de dominio a direcciones IP."],
    ["Latencia", "Tiempo que tarda un dato en llegar a su destino."],
    ["VPN", "Red privada virtual que cifra el tráfico en un túnel."],
  ],
  situacion: {
    titulo: "Auditores de la red del instituto",
    reto: "Por equipos, documentad cómo es la red de vuestro centro o de una vivienda, medid su rendimiento y proponed un plan de mejora de cobertura y seguridad.",
    pasos: [
      "Dibujad el plano de la red con dispositivos, conexiones y tipos de medio.",
      "Obtened la configuración IP de varios equipos y explicad qué significa cada dato.",
      "Haced un mapa de cobertura wifi midiendo la velocidad y la latencia en distintos puntos.",
      "Usad ping y traceroute hacia varios destinos y analizad los resultados en una hoja de cálculo.",
      "Revisad la seguridad (cifrado, contraseñas, red de invitados, actualizaciones) con una lista de comprobación.",
      "Presentad un plan de mejora priorizado y presupuestado.",
    ],
    producto: "Plano de red, mapa de cobertura, tabla de mediciones con gráficos y plan de mejora presentado a la clase.",
    evaluacion: [
      "El plano y la configuración IP son correctos y están bien explicados.",
      "Las mediciones están bien hechas e interpretadas.",
      "La revisión de seguridad aplica las buenas prácticas estudiadas.",
      "Las propuestas son realistas, justificadas y bien comunicadas.",
    ],
  },
  familias: [
    "Revisad juntos la configuración del router de casa: clave wifi, cifrado y contraseña de administración.",
    "Pedidle que mida la velocidad de la conexión en distintas habitaciones y que proponga cómo mejorarla.",
    "Hablad de las precauciones al usar wifi públicas en viajes, cafeterías o aeropuertos.",
    "Buscad en un mapa de cables submarinos cuáles llegan a la costa española.",
  ],
  saberes: "Redes de ordenadores e internet: tipos de redes por alcance y topología, medios de transmisión, dispositivos de interconexión, protocolos y modelos de capas (OSI y TCP/IP), direccionamiento IP y MAC, máscaras, NAT, DHCP, IPv6, DNS y URL, conmutación de paquetes, TCP y UDP, redes inalámbricas y móviles, configuración, seguridad y diagnóstico (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Montar una pequeña LAN con un switch y tres ordenadores y configurar las IP a mano.",
    "Usar un simulador de redes gratuito para ver el encapsulamiento y el viaje de los paquetes.",
    "Concurso de subredes: dividir redes en el menor tiempo con explicación del proceso.",
    "Traceroute colectivo a servidores de cinco continentes y mapa de latencias en clase.",
  ],
  fuentes: [
    B.INCIBE,
    { t: "IETF RFC 1918: espacios de direcciones IP privadas", url: "https://www.rfc-editor.org/rfc/rfc1918" },
    { t: "Submarine Cable Map (TeleGeography)", url: "https://www.submarinecablemap.com/" },
  ],
});
