// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Dispositivos y redes",
  minutos: 40,
  objetivos: ["Identificar las partes de un ordenador y otros dispositivos digitales", "Explicar cómo viajan los datos por una red y por Internet", "Configurar y mantener una red doméstica de forma segura"],
  claves: ["hardware", "procesador", "memoria RAM", "router", "dirección IP", "protocolo"],
  pregunta: {
    texto: "Cuando envías una foto por WhatsApp a un amigo que está en otro país, tarda menos de un segundo. ¿Por dónde viaja exactamente?",
    respuesta: "La foto se trocea en <mark>paquetes</mark> de datos. Salen del móvil por wifi o 4G/5G, pasan al <b>router</b> o a la antena, recorren cables de fibra óptica (muchos bajo el mar) y saltan de router en router hasta el servidor de la aplicación, que la reenvía al móvil de tu amigo. Allí los paquetes se vuelven a juntar.",
  },
  bloques: [
    {
      html: `<h3>Qué tiene dentro un dispositivo</h3><p>Todo dispositivo digital (ordenador, móvil, tableta, consola) tiene <b>hardware</b>, las piezas físicas, y <b>software</b>, los programas. Las piezas clave son el <b>procesador</b> o CPU, que ejecuta las instrucciones; la <b>memoria RAM</b>, rápida pero que se borra al apagar; el <b>almacenamiento</b> (disco SSD o memoria flash), que guarda los datos de forma permanente; y la <b>placa base</b>, que lo conecta todo. Los <mark>periféricos</mark> permiten la entrada (teclado, ratón, micrófono, cámara) y la salida (pantalla, altavoces, impresora) de información.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de un ordenador: entrada, procesador con memoria RAM y almacenamiento, y salida">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="90" y="50" width="80" height="60" rx="8" fill="var(--pen)"/><text x="130" y="85" text-anchor="middle" font-size="14" font-weight="700" fill="#fff" ${D}>CPU</text>
        <rect x="90" y="126" width="36" height="32" rx="5" fill="var(--sun)"/><text x="108" y="146" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>RAM</text>
        <rect x="134" y="126" width="36" height="32" rx="5" fill="var(--leaf)"/><text x="152" y="146" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" ${F}>SSD</text>
        <path d="M108 126 V 110 M152 126 V 110" stroke="var(--ink)" stroke-width="2"/>
        <rect x="14" y="62" width="58" height="36" rx="6" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="43" y="85" text-anchor="middle" font-size="10" font-weight="700" fill="var(--inf)" ${F}>entrada</text>
        <rect x="188" y="62" width="58" height="36" rx="6" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="217" y="85" text-anchor="middle" font-size="10" font-weight="700" fill="var(--red)" ${F}>salida</text>
        <path d="M72 80 H 88 M172 80 H 186" stroke="var(--ink)" stroke-width="2.5"/><path d="M84 75 L 90 80 L 84 85 M182 75 L 188 80 L 182 85" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <g ${F} font-size="9" fill="var(--muted)" text-anchor="middle"><text x="43" y="114">teclado · ratón</text><text x="217" y="114">pantalla · altavoz</text><text x="130" y="36">procesa las instrucciones</text></g>
      </svg>`,
    },
    {
      html: `<h3>Cómo se mide la información</h3><p>Los dispositivos trabajan con <b>bits</b>: ceros y unos. Ocho bits forman un <b>byte</b>, que basta para guardar una letra. Después vienen el <b>kilobyte</b> (KB, unos mil bytes), el <b>megabyte</b> (MB, un millón), el <b>gigabyte</b> (GB, mil millones) y el <b>terabyte</b> (TB). La velocidad de una conexión se mide en <mark>bits por segundo</mark>: una fibra de 600 Mbps transmite 600 millones de bits cada segundo. Ojo: 600 Mbps son unos 75 MB por segundo, porque hay que dividir entre 8.</p>
      <div class="formula"><span>1 byte = 8 bits</span></div>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de unidades: bit, byte, kilobyte, megabyte, gigabyte y terabyte">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["bit", "0 o 1", "var(--muted)"], ["byte", "8 bits · una letra", "var(--inf)"], ["KB", "un texto corto", "var(--leaf)"], ["MB", "una foto", "var(--sun)"], ["GB", "una película", "var(--red)"], ["TB", "un disco entero", "var(--pen)"]]
          .map(([u, d, c], i) => `<rect x="${20 + i * 18}" y="${18 + i * 25}" width="${60}" height="20" rx="5" fill="${c}"/><text x="${50 + i * 18}" y="${32 + i * 25}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" ${F}>${u}</text><text x="${88 + i * 18}" y="${32 + i * 25}" font-size="10" fill="var(--ink)" ${F}>${d}</text>`).join("")}
        <text x="20" y="172" font-size="9" fill="var(--muted)" ${F}>cada escalón ≈ × 1000</text>
      </svg>`,
    },
    {
      html: `<h3>Tipos de redes</h3><p>Una <b>red</b> une dispositivos para que compartan datos y recursos. Según su tamaño hablamos de <b>PAN</b> (red personal, como el Bluetooth entre móvil y auriculares), <b>LAN</b> (red local de una casa, un instituto o una oficina) y <b>WAN</b> (red extensa que une ciudades y países; <mark>Internet es la mayor WAN</mark>). Las conexiones pueden ser <b>cableadas</b> (cable de red Ethernet, fibra óptica), más rápidas y estables, o <b>inalámbricas</b> (wifi, Bluetooth, 4G/5G), más cómodas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres círculos concéntricos: red personal PAN, red local LAN y red extensa WAN">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="130" cy="92" rx="118" ry="78" fill="none" stroke="var(--pen)" stroke-width="3"/>
        <ellipse cx="110" cy="100" rx="68" ry="48" fill="none" stroke="var(--leaf)" stroke-width="3"/>
        <ellipse cx="92" cy="108" rx="28" ry="20" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <g ${F} font-size="11" font-weight="700"><text x="80" y="112" fill="var(--sun)">PAN</text><text x="140" y="96" fill="var(--leaf)">LAN</text><text x="196" y="60" fill="var(--pen)">WAN</text></g>
        <g ${F} font-size="9" fill="var(--muted)"><text x="176" y="76">Internet</text><text x="150" y="112" text-anchor="middle">casa · insti</text><text x="92" y="123" text-anchor="middle" font-size="8">Bluetooth</text></g>
      </svg>`,
    },
    {
      html: `<h3>Cómo viajan los datos por Internet</h3><p>Cada dispositivo conectado tiene una <b>dirección IP</b>, como un número de teléfono. Los datos se dividen en <b>paquetes</b>, y cada paquete lleva la IP de origen y la de destino. Los <b>routers</b> los van reenviando por el mejor camino disponible. Todo funciona porque los equipos siguen las mismas reglas, llamadas <mark>protocolos</mark>: <b>TCP/IP</b> para el transporte, <b>HTTP/HTTPS</b> para las webs y <b>DNS</b>, que traduce un nombre como <i>escolapedia.com</i> a su dirección IP.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Paquetes de datos que salen de un móvil, pasan por varios routers y llegan a un servidor">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="70" width="28" height="46" rx="6" fill="var(--ink)"/><rect x="18" y="76" width="20" height="32" rx="2" fill="var(--inf)"/>
        <rect x="216" y="56" width="32" height="70" rx="4" fill="var(--muted)"/>${[0, 1, 2, 3].map((i) => `<rect x="221" y="${64 + i * 15}" width="22" height="8" rx="2" fill="var(--paper)"/>`).join("")}
        <path d="M44 92 L 84 60 L 130 110 L 176 64 L 214 90 M84 60 L 130 40 L 176 64 M84 60 L 100 140 L 176 64" fill="none" stroke="var(--line)" stroke-width="2"/>
        <path d="M44 92 L 84 60 L 130 110 L 176 64 L 214 90" fill="none" stroke="var(--red)" stroke-width="3"/>
        ${[[84, 60], [130, 110], [176, 64], [130, 40], [100, 140]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="var(--pen)"/>`).join("")}
        ${[[60, 80], [106, 84], [152, 90]].map(([x, y]) => `<rect x="${x - 7}" y="${y - 5}" width="14" height="10" rx="2" fill="var(--sun)"/>`).join("")}
        <g ${F} font-size="10" font-weight="700"><text x="12" y="134" fill="var(--ink)">móvil</text><text x="210" y="142" fill="var(--ink)">servidor</text><text x="116" y="168" fill="var(--pen)">routers</text><text x="62" y="30" fill="var(--sun)">paquetes con IP</text></g>
      </svg>`,
    },
    {
      html: `<h3>La red de casa y su mantenimiento</h3><p>El <b>router</b> doméstico une la red local de casa con Internet y crea el wifi. Para que funcione bien y sea seguro conviene <b>cambiar la contraseña</b> que trae de fábrica, usar cifrado <b>WPA2 o WPA3</b>, colocarlo en un lugar central y alto, y mantener actualizados los dispositivos. Cuando algo falla, sigue un orden: comprobar cables y luces, <mark>reiniciar</mark> el router y el aparato, revisar si el problema afecta a todos los dispositivos o solo a uno, y buscar el mensaje de error. Desconectar los aparatos que no usamos también ahorra energía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Router con ondas wifi, candado WPA3 y lista de comprobaciones">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="30" y="104" width="100" height="30" rx="8" fill="var(--ink)"/>${[0, 1, 2, 3].map((i) => `<circle cx="${48 + i * 14}" cy="119" r="3" fill="${i === 3 ? "var(--red)" : "var(--leaf)"}"/>`).join("")}
        <path d="M60 104 V 80 M100 104 V 80" stroke="var(--ink)" stroke-width="3"/>
        ${[16, 30, 44].map((r) => `<path d="M${80 - r} ${74 - r * 0.2} Q 80 ${74 - r * 1.1} ${80 + r} ${74 - r * 0.2}" fill="none" stroke="var(--inf)" stroke-width="3"/>`).join("")}
        <rect x="114" y="34" width="22" height="18" rx="3" fill="var(--sun)"/><path d="M118 34 V 28 A 7 7 0 0 1 132 28 V 34" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <g ${F} font-size="10"><text x="146" y="46" font-weight="700" fill="var(--sun)">WPA3</text>
        ${["cambia la clave", "actualiza", "lugar central", "reinicia si falla"].map((t, i) => `<text x="150" y="${92 + i * 18}" fill="var(--ink)">✓ ${t}</text>`).join("")}</g>
        <text x="80" y="156" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>router</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Del móvil al servidor: el viaje de un mensaje",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Cuatro pasos: dispositivo, router, Internet y servidor">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["1. Dispositivo", "trocea los datos", "en paquetes", "var(--inf)"], ["2. Router", "lo une a Internet", "por wifi o cable", "var(--sun)"], ["3. Internet", "routers y fibra", "eligen el camino", "var(--pen)"], ["4. Servidor", "recibe, junta", "y responde", "var(--leaf)"]]
        .map(([n, a, b, c], i) => `<rect x="${16 + i * 154}" y="30" width="140" height="160" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${86 + i * 154}" y="76" text-anchor="middle" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${86 + i * 154}" y="122" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${86 + i * 154}" y="142" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>${i < 3 ? `<path d="M${158 + i * 154} 110 h 10" stroke="var(--ink)" stroke-width="3"/>` : ""}`).join("")}
    </svg>`,
  },
  video: { id: "rw41W8crZ_Y", titulo: "¿Cómo funciona Internet?", canal: "Sabin Ingeniería Civil", vistas: 3565187, megusta: 0, busqueda: "cómo funciona internet redes router" },
  quiz: [
    { q: "¿Qué memoria se borra al apagar el ordenador?", o: ["El disco SSD", "La memoria RAM", "La memoria flash del USB"], a: 1, e: "La RAM es volátil: rápida pero temporal." },
    { q: "¿Cuántos bits tiene un byte?", o: ["2", "8", "1000"], a: 1, e: "1 byte = 8 bits." },
    { q: "El Bluetooth entre el móvil y unos auriculares forma una red…", o: ["PAN", "LAN", "WAN"], a: 0, e: "PAN: red de área personal, de pocos metros." },
    { q: "¿Qué hace el DNS?", o: ["Cifra el wifi", "Traduce nombres de dominio a direcciones IP", "Acelera el procesador"], a: 1, e: "Es como la agenda de contactos de Internet." },
    { q: "¿Qué es lo primero que conviene cambiar en un router nuevo?", o: ["El color de las luces", "La contraseña de fábrica", "El cable de corriente"], a: 1, e: "Las claves de fábrica son fáciles de averiguar." }
  ],
  examen: [
    { q: "Una conexión de 800 Mbps descarga, como mucho, unos…", o: ["800 MB por segundo", "100 MB por segundo", "8 MB por segundo"], a: 1, e: "800 / 8 = 100 megabytes por segundo." },
    { q: "¿Por qué los datos viajan en paquetes?", o: ["Para que cada uno pueda ir por el camino más libre y reenviarse si se pierde", "Porque ocupan menos colores", "Para que solo funcione por cable"], a: 0, e: "Si un paquete se pierde, se vuelve a enviar solo ese." },
    { q: "Un teclado es un periférico de…", o: ["salida", "entrada", "almacenamiento"], a: 1, e: "Introduce información en el ordenador." },
  ],
  feynman: ["Qué hacen la CPU, la RAM y el almacenamiento", "La diferencia entre bit, byte y megabyte", "Los tipos de redes según su tamaño", "Cómo viaja un paquete de datos con su dirección IP", "Cómo proteger y reparar la red de casa"],
  mapa: mapa("DISPOSITIVOS Y REDES", "var(--eso)", [
    ["Hardware", "CPU · RAM · almacenamiento", "var(--pen)"],
    ["Unidades", "bit · byte · MB · GB", "var(--sun)"],
    ["Redes", "PAN · LAN · WAN", "var(--leaf)"],
    ["Internet", "IP · paquetes · DNS", "var(--red)"],
  ], 250),
  tarjetas: [
    ["¿Qué hace la CPU?", "Ejecuta las instrucciones de los programas."],
    ["1 byte son…", "8 bits."],
    ["¿Qué es una LAN?", "Una red local: la de una casa, un instituto o una oficina."],
    ["¿Qué es una dirección IP?", "El número que identifica a cada dispositivo en una red."],
    ["¿Qué es un protocolo?", "Un conjunto de reglas común para comunicarse, como TCP/IP o HTTPS."],
  ],
  familias: ["Mirad juntos la etiqueta del router: buscad el nombre de la red y comprobad si la contraseña es la de fábrica.", "Haced un test de velocidad y calculad cuántos megabytes por segundo son (dividid entre 8).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Dispositivos digitales, sistemas operativos y de comunicación: arquitectura de ordenadores, redes de comunicación, Internet y configuración y mantenimiento de dispositivos (RD 217/2022, Digitalización 4º).",
    ideas: ["Abrir un ordenador viejo e identificar sus piezas.", "Usar el comando ping o tracert para ver los saltos de los paquetes.", "Dibujar en grupo la red del instituto con sus routers y puntos de acceso."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Internet, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Internet" },
  ],
  revisado: "2026-11-12",
};
