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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Convertir números entre decimal y binario y entender cómo se codifica la información", "Comparar medios de transmisión y reconocer los dispositivos del Internet de las cosas"],
  tras: {
    "Qué tiene dentro un dispositivo": [
      { html: `<h3>El sistema binario</h3><p>Los circuitos de un ordenador solo distinguen dos estados: hay corriente o no la hay. Por eso toda la información se representa con dos cifras, 0 y 1: es el <b>sistema binario</b>. Igual que en decimal cada posición vale 10 veces más que la anterior (unidades, decenas, centenas), en binario cada posición vale <mark>el doble</mark>: 1, 2, 4, 8, 16, 32, 64, 128… Así, 1011 en binario es 8 + 0 + 2 + 1 = 11. Para pasar de decimal a binario se divide entre 2 sucesivamente y se leen los restos de abajo arriba. Las letras también se codifican con números: en el código <b>ASCII</b>, la «A» es el 65 (01000001), y el estándar <b>Unicode</b> incluye letras de todos los idiomas y emojis.</p>`, video: { id: "f9b0wwhTmeU", titulo: "Todo lo que tienes que saber del código binario", canal: "Derivando", vistas: 2139793 } },
      { html: `<h3>Cómo elegir un dispositivo</h3><p>Al comparar ordenadores o móviles conviene fijarse en: el <b>procesador</b> (número de núcleos y velocidad en GHz), la <b>RAM</b> (8 GB permiten trabajar con soltura con varias aplicaciones), el <b>almacenamiento</b> (un SSD es mucho más rápido que un disco duro mecánico), la <b>pantalla</b> (tamaño y resolución), la <b>batería</b> y la <b>conectividad</b> (wifi, Bluetooth, puertos USB-C). También importa el uso que le vamos a dar: para estudiar y navegar no hace falta el más potente. Y antes de comprar uno nuevo, vale la pena pensar si se puede <mark>ampliar o reparar</mark> el que ya tenemos, por ejemplo añadiendo RAM o cambiando el disco por un SSD.</p>` },
    ],
    "Tipos de redes": [
      { html: `<h3>Medios de transmisión</h3><p>Los datos viajan por distintos medios. El <b>cable de par trenzado</b> (Ethernet) lleva señales eléctricas y se usa en las redes locales. La <b>fibra óptica</b> transporta pulsos de luz por hilos de vidrio finísimos: es la más rápida, alcanza grandes distancias y no le afectan las interferencias; los cables submarinos que unen continentes son de fibra. Entre los <b>inalámbricos</b>, el <b>wifi</b> cubre una casa o un edificio; el <b>Bluetooth</b>, unos pocos metros; las redes <b>móviles</b> (4G, 5G) cubren un país con antenas; y los <b>satélites</b> llevan Internet a zonas remotas. El 5G ofrece más velocidad y menos retraso (<mark>latencia</mark>), lo que permite, por ejemplo, controlar máquinas a distancia.</p>` },
    ],
    "La red de casa y su mantenimiento": [
      { html: `<h3>El Internet de las cosas</h3><p>El <b>Internet de las cosas</b> (IoT) es la red de objetos cotidianos que llevan sensores y conexión a Internet: relojes inteligentes que miden el pulso, termostatos que se controlan desde el móvil, altavoces con asistente de voz, cámaras de vigilancia, enchufes inteligentes, coches conectados o sensores que miden la humedad de un campo de cultivo y riegan solo cuando hace falta. Ya hay más objetos conectados que personas. Ofrecen comodidad y ahorro, pero también riesgos: muchos tienen <mark>contraseñas de fábrica</mark> que nadie cambia y casi nunca se actualizan, y recogen datos sobre nuestra vida. Conviene cambiar sus claves, actualizarlos y conectarlos, si se puede, a una red wifi separada.</p>`, video: { id: "fWrY571yHYI", titulo: "Qué es el internet de las cosas", canal: "DW Español", vistas: 444509 } },
    ],
  },
  ejemplos: [
    { enunciado: "Pasa el número binario 110101 a decimal.", pasos: ["Valores de las posiciones de derecha a izquierda: 1, 2, 4, 8, 16, 32.", "Suma las posiciones con 1: 32 + 16 + 0 + 4 + 0 + 1.", "32 + 16 + 4 + 1 = 53."], resultado: "110101₂ = 53." },
    { enunciado: "Pasa el número 25 a binario.", pasos: ["25 / 2 = 12, resto 1. 12 / 2 = 6, resto 0. 6 / 2 = 3, resto 0.", "3 / 2 = 1, resto 1. 1 / 2 = 0, resto 1.", "Se leen los restos de abajo arriba: 11001.", "Comprobación: 16 + 8 + 1 = 25."], resultado: "25 = 11001₂." },
    { enunciado: "¿Cuánto se tarda en descargar una película de 3 GB con una conexión de 300 Mbps?", pasos: ["Pasa a bits: 3 GB = 3.000 MB = 24.000 Mb (multiplicando por 8).", "Tiempo = 24.000 Mb / 300 Mb/s = 80 s.", "En la práctica tarda algo más por la sobrecarga de los protocolos."], resultado: "Unos 80 segundos (algo más de un minuto)." },
  ],
  errores: [
    "Confundir megabits (Mb, velocidad de conexión) con megabytes (MB, tamaño de archivos).",
    "Leer al revés los restos al pasar de decimal a binario.",
    "Pensar que más GHz siempre significa un ordenador más rápido: influyen también los núcleos, la RAM y el disco.",
    "Creer que wifi e Internet son lo mismo: el wifi solo conecta con el router.",
    "Dejar las contraseñas de fábrica en cámaras, routers y otros dispositivos conectados.",
  ],
  ejercicios: [
    { q: "Pasa a decimal: 1010, 1111 y 10000000.", sol: "10, 15 y 128." },
    { q: "Pasa a binario: 6, 13 y 100.", sol: "110, 1101 y 1100100." },
    { q: "¿Cuál es el número más alto que se puede escribir con 8 bits?", sol: "11111111 = 255 (en total, 256 valores, del 0 al 255)." },
    { q: "Un archivo ocupa 2.048 KB. ¿Cuántos MB son aproximadamente?", sol: "2.048 / 1.024 = 2 MB." },
    { q: "Ordena de menor a mayor alcance: wifi, Bluetooth, 5G, fibra submarina.", sol: "Bluetooth < wifi < 5G < fibra submarina." },
    { q: "¿Qué ventajas tiene la fibra óptica frente al cable de cobre?", sol: "Más velocidad, más distancia sin pérdidas y no le afectan las interferencias eléctricas." },
    { q: "Indica tres periféricos de entrada, dos de salida y uno de entrada y salida.", sol: "Entrada: teclado, ratón y micrófono. Salida: pantalla y altavoces. Entrada y salida: pantalla táctil (o una impresora multifunción)." },
    { q: "Un móvil tiene 6 GB de RAM y 128 GB de almacenamiento. Explica para qué sirve cada uno.", sol: "La RAM guarda temporalmente las aplicaciones abiertas mientras se usan; el almacenamiento guarda de forma permanente fotos, aplicaciones y archivos." },
    { q: "Pon cuatro ejemplos de dispositivos del Internet de las cosas.", sol: "Reloj inteligente, termostato conectado, altavoz con asistente de voz y bombillas o enchufes inteligentes." },
    { q: "Indica tres medidas de seguridad para los dispositivos IoT de casa.", sol: "Cambiar las contraseñas de fábrica, actualizar su software y conectarlos a una red wifi separada (o desactivar funciones que no se usan)." },
  ],
  quiz: [
    { q: "En binario, 101 equivale a…", o: ["5", "101", "3"], a: 0, e: "4 + 0 + 1." },
    { q: "Cada posición en binario vale…", o: ["10 veces la anterior", "el doble de la anterior", "lo mismo"], a: 1, e: "1, 2, 4, 8, 16…" },
    { q: "El medio de transmisión más rápido para largas distancias es…", o: ["el Bluetooth", "la fibra óptica", "el cable de cobre"], a: 1, e: "Usa pulsos de luz." },
    { q: "La latencia es…", o: ["el retraso en la transmisión", "el tamaño de un archivo", "la potencia del router"], a: 0, e: "El 5G la reduce mucho." },
    { q: "Un termostato que se controla desde el móvil es un ejemplo de…", o: ["Internet de las cosas", "red PAN", "sistema operativo"], a: 0, e: "Objeto cotidiano conectado." },
  ],
  tarjetas: [
    ["Sistema binario", "Representa todo con 0 y 1; cada posición vale el doble que la anterior."],
    ["Fibra óptica", "Transmite datos con pulsos de luz por hilos de vidrio."],
    ["Internet de las cosas", "Objetos cotidianos con sensores y conexión a Internet."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 100,
  revisado: "2026-11-13",
  lectura: {
    titulo: "Un mensaje que da la vuelta al mundo en 0,2 segundos",
    html: `<p>Lucía escribe «¿quedamos a las 6?» y pulsa enviar. En ese instante su móvil convierte cada letra en ceros y unos, los guarda en la memoria, los cifra y los manda por wifi al router de casa. De ahí salen por un cable de fibra óptica como pulsos de luz, saltan de router en router por la ciudad, cruzan un centro de datos que quizá está en Irlanda y vuelven a bajar hasta el móvil de su amiga, que vive a dos calles. Todo el viaje dura menos de lo que tardas en parpadear.</p>
      <p>Detrás de ese gesto tan normal hay piezas que trabajan a miles de millones de operaciones por segundo, un idioma de solo dos cifras y unas reglas, los <b>protocolos</b>, que permiten que aparatos de marcas y países distintos se entiendan. En este tema abrirás el dispositivo por dentro, aprenderás a medir la información y seguirás el camino de los datos por las redes. Al final sabrás elegir un ordenador con criterio, entender la factura de tu conexión y montar una red doméstica segura.</p>`,
  },
  svgs: {
    "El sistema binario": L.rejilla("Tabla de valores de posición en binario: 8, 4, 2 y 1", ["8", "4", "2", "1", "= decimal"], [["1", "0", "1", "1", "11"], ["0", "1", "1", "0", "6"], ["1", "1", "1", "1", "15"], ["1", "0", "0", "0", "8"]], { t: "Cada posición vale el doble" }),
    "Cómo elegir un dispositivo": L.cajas("Cuatro criterios para elegir un dispositivo: procesador, RAM, almacenamiento y pantalla", [["Procesador", "núcleos y GHz"], ["RAM", "8-16 GB"], ["Almacenamiento", "SSD 256-512 GB"], ["Pantalla y batería", "pulgadas · horas"]], { t: "Qué mirar antes de comprar" }),
    "Medios de transmisión": L.barras("Velocidad aproximada de distintos medios de transmisión en megabits por segundo", [["Bluetooth", 2], ["4G", 50], ["Wifi 6", 600], ["Cobre Ethernet", 1000], ["Fibra óptica", 10000]], { t: "Velocidad típica (Mbps)" }),
    "El Internet de las cosas": L.estrella("Objetos del Internet de las cosas conectados a la nube", "IoT", ["reloj", "termostato", "bombilla", "altavoz", "cámara", "coche"]),
  },
  tras: {
    "Qué tiene dentro un dispositivo": [
      {
        html: `<h3>La CPU y el ciclo de instrucción</h3><p>La <b>unidad central de proceso</b> (CPU) es el cerebro del dispositivo. Ejecuta los programas repitiendo sin parar el <mark>ciclo de instrucción</mark>: <b>busca</b> la siguiente instrucción en la memoria, la <b>descodifica</b> para saber qué hay que hacer, la <b>ejecuta</b> (una suma, una comparación, mover un dato) y <b>guarda</b> el resultado. Un reloj interno marca el ritmo: un procesador de 3 GHz da 3.000 millones de pulsos por segundo.</p>
          <p>Hoy las CPU tienen varios <b>núcleos</b>, cada uno capaz de ejecutar su propia tarea, por lo que un procesador de 8 núcleos puede trabajar en varias cosas a la vez. Para no esperar a la RAM, que es más lenta, guardan los datos más usados en una memoria pequeña y rapidísima llamada <b>caché</b>. Junto a la CPU trabaja la <b>GPU</b> o procesador gráfico, con miles de núcleos sencillos que calculan en paralelo los píxeles de la pantalla; por eso también se usa para entrenar inteligencia artificial. En los móviles, CPU, GPU, memoria y módem van juntos en un solo chip llamado <b>SoC</b> (sistema en un chip), lo que ahorra espacio y batería.</p>`,
        svg: L.ciclo("Ciclo de instrucción de la CPU: buscar, descodificar, ejecutar y guardar", "CPU", ["buscar", "descodificar", "ejecutar", "guardar"]),
      },
    ],
    "Cómo elegir un dispositivo": [
      {
        html: `<h3>Periféricos y puertos</h3><p>Los <b>periféricos</b> son los aparatos que se conectan a la unidad central. Los de <b>entrada</b> introducen datos (teclado, ratón, micrófono, escáner, cámara, sensores); los de <b>salida</b> muestran o producen resultados (pantalla, impresora, altavoces, auriculares); y los de <b>entrada y salida</b> hacen las dos cosas (pantalla táctil, memoria USB, disco externo, casco de realidad virtual).</p>
          <p>Se conectan por <b>puertos</b> con cable o de forma inalámbrica. El <b>USB-C</b> se ha convertido en el estándar europeo: transmite datos, imagen y carga con el mismo conector, que además es reversible. El <b>HDMI</b> y el <b>DisplayPort</b> llevan vídeo y audio a monitores y televisores; el <b>Ethernet</b> (RJ-45) conecta a la red por cable; el <b>jack</b> de 3,5 mm, cada vez menos frecuente, lleva sonido analógico. Sin cable se usan el <b>Bluetooth</b> para periféricos cercanos y el <b>NFC</b>, de pocos centímetros, para pagar con el móvil. Para que el sistema operativo reconozca un periférico necesita su <mark>controlador</mark> o <i>driver</i>, un pequeño programa que traduce sus órdenes.</p>`,
        svg: L.cajas("Periféricos de entrada, de salida y de entrada y salida", [["Entrada", "teclado · ratón|micrófono · cámara"], ["Salida", "pantalla · altavoz|impresora"], ["Entrada y salida", "táctil · USB|disco externo"], ["Puertos", "USB-C · HDMI|Ethernet · BT"]]),
      },
    ],
    "Cómo se mide la información": [
      {
        html: `<h3>Representar texto, imagen y sonido</h3><p>Todo lo que guarda un ordenador acaba siendo una lista de bits. Para el <b>texto</b>, cada carácter tiene un número asignado en una tabla: el antiguo código <b>ASCII</b> usaba 7 bits (la «A» es el 65), y hoy se usa <b>Unicode</b>, que incluye todos los alfabetos del mundo, la ñ, los acentos y hasta los emojis.</p>
          <p>Una <b>imagen</b> digital es una cuadrícula de <b>píxeles</b>. Cada píxel guarda su color mezclando rojo, verde y azul (<mark>RGB</mark>), con 8 bits por color: 24 bits por píxel y más de 16 millones de colores posibles. Una foto de 12 megapíxeles sin comprimir ocuparía unos 36 MB; por eso se <b>comprime</b> en formatos como JPEG o WebP. El <b>sonido</b> se digitaliza <b>muestreando</b> la onda muchas veces por segundo (44.100 en un CD) y guardando cada muestra como un número. Cuantas más muestras y más bits, más fiel es la copia, pero más ocupa. La compresión puede ser <b>sin pérdida</b> (ZIP, PNG, FLAC), que recupera el original exacto, o <b>con pérdida</b> (JPEG, MP3), que elimina detalles que apenas percibimos a cambio de ocupar mucho menos.</p>`,
        svg: L.rejilla("Cómo se representan texto, imagen y sonido en bits", ["Dato", "Unidad", "Ejemplo"], [["Texto", "carácter", "A = 65"], ["Imagen", "píxel RGB", "24 bits"], ["Sonido", "muestra", "44.100/s"], ["Vídeo", "fotograma", "30/s"]], { t: "Todo son bits" }),
      },
    ],
    "Tipos de redes": [
      {
        html: `<h3>Topologías y dispositivos de red</h3><p>La <b>topología</b> es la forma en que se conectan los equipos de una red. En <b>estrella</b>, todos van a un punto central (un switch o un router); es la más usada en casas y centros educativos porque si falla un cable solo cae ese equipo. En <b>bus</b>, todos comparten un único cable, barato pero frágil. En <b>anillo</b>, los datos pasan de equipo en equipo. En <b>malla</b>, cada nodo tiene varios caminos posibles: es la idea de Internet y de los sistemas wifi «mesh» que reparten la señal por toda la casa.</p>
          <p>Cada pieza tiene su función. El <b>switch</b> o conmutador une los equipos de una red local y envía cada paquete solo a su destinatario. El <b>router</b> o encaminador conecta redes distintas y decide por dónde mandar los datos. El <b>punto de acceso</b> crea la red wifi. El <b>módem</b> o la <b>ONT</b> de fibra convierten la señal de la compañía en datos para el router. En casa, todas esas funciones suelen ir dentro de una sola caja que llamamos «el router».</p>`,
        svg: L.cajas("Cuatro topologías de red: estrella, bus, anillo y malla", [["Estrella", "un centro|(switch o router)"], ["Bus", "un cable|compartido"], ["Anillo", "de equipo|en equipo"], ["Malla", "varios caminos|(Internet, mesh)"]], { t: "Topologías" }),
      },
    ],
    "Cómo viajan los datos por Internet": [
      {
        html: `<h3>Protocolos y el modelo TCP/IP</h3><p>Un <b>protocolo</b> es un conjunto de reglas que dos equipos siguen para entenderse, igual que dos personas acuerdan un idioma. Internet funciona con una familia de protocolos organizada en <mark>capas</mark>, el <b>modelo TCP/IP</b>. Cada capa se ocupa de una parte del trabajo y se apoya en la de debajo.</p>
          <p>En la capa de <b>aplicación</b> están los protocolos que usan los programas: <b>HTTP</b> y su versión cifrada <b>HTTPS</b> para la web, <b>SMTP</b> e <b>IMAP</b> para el correo y <b>DNS</b> para traducir nombres como escolapedia.com a direcciones IP. La capa de <b>transporte</b> trocea los datos: <b>TCP</b> numera los paquetes, comprueba que llegan todos y pide los perdidos (ideal para una web o un archivo), mientras que <b>UDP</b> es más rápido pero no reenvía nada (útil para videollamadas y juegos en línea). La capa de <b>Internet</b> pone a cada paquete las direcciones <b>IP</b> de origen y destino. La capa de <b>acceso a la red</b> lo convierte en señales por wifi, cable o fibra. Las direcciones IPv4 tienen cuatro números (192.168.1.20) y se están agotando, por eso se adopta <b>IPv6</b>, con muchísimas más combinaciones.</p>`,
        svg: L.capas("Las cuatro capas del modelo TCP/IP con sus protocolos", [["Aplicación", "HTTPS · DNS · IMAP"], ["Transporte", "TCP · UDP"], ["Internet", "IP (v4 y v6)"], ["Acceso a red", "wifi · Ethernet · fibra"]], { t: "Modelo TCP/IP" }),
      },
    ],
    "La red de casa y su mantenimiento": [
      {
        html: `<h3>Velocidad, latencia y cobertura</h3><p>Las compañías anuncian la velocidad en <b>megabits por segundo</b> (Mbps), pero los archivos se miden en <b>megabytes</b>. Como un byte son 8 bits, una fibra de 600 Mbps descarga como mucho unos <mark>75 MB por segundo</mark>. Esa cifra es el <b>ancho de banda</b>: la cantidad de datos que caben por la conexión. La <b>subida</b> (enviar) suele ser menor que la <b>bajada</b> (recibir), salvo en la fibra simétrica.</p>
          <p>La <b>latencia</b> o <i>ping</i> es el tiempo que tarda un paquete en ir y volver, en milisegundos. Para ver una serie importa el ancho de banda; para jugar en línea o hacer una videollamada importa más una latencia baja (menos de 30 ms). El wifi tiene dos bandas: la de <b>2,4 GHz</b> llega más lejos y atraviesa mejor las paredes, y la de <b>5 GHz</b> es más rápida pero de menor alcance. La señal se debilita con la distancia, las paredes gruesas, los espejos y los electrodomésticos; para mejorarla se coloca el router en un lugar alto y central o se instala un sistema en malla. Puedes medir tu conexión con un test de velocidad: la cifra real casi siempre es algo menor que la contratada.</p>`,
        svg: L.comparar("Comparación entre las bandas wifi de 2,4 y 5 gigahercios", ["2,4 GHz", ["más alcance", "atraviesa paredes", "más lenta", "más interferencias"]], ["5 GHz", ["menos alcance", "peor con paredes", "más rápida", "menos saturada"]]),
      },
    ],
  },
  secciones: [7, 8],
  niveles: "bbmbbmbmbm",
  ejercicios: [
    { nivel: "básico", q: "Clasifica como hardware o software: navegador, memoria RAM, sistema operativo, ratón, antivirus, placa base.", sol: "Hardware: memoria RAM, ratón y placa base (piezas físicas). Software: navegador, sistema operativo y antivirus (programas)." },
    { nivel: "básico", q: "Escribe en orden las cuatro fases del ciclo de instrucción de la CPU.", sol: "Buscar la instrucción en memoria, descodificarla, ejecutarla y guardar el resultado. Después vuelve a empezar con la siguiente." },
    { nivel: "básico", q: "¿Qué diferencia hay entre una red LAN y una WAN? Pon un ejemplo de cada una.", sol: "Una LAN es una red local de poca extensión, como la del instituto o la de casa. Una WAN cubre grandes distancias, como Internet o la red de una empresa con sedes en varios países." },
    { nivel: "básico", q: "Di si cada protocolo es de aplicación o de transporte: HTTPS, TCP, DNS, UDP, IMAP.", sol: "Aplicación: HTTPS, DNS e IMAP. Transporte: TCP y UDP." },
    { nivel: "básico", q: "Nombra un puerto para cada uso: cargar el móvil, conectar un monitor, conectar a la red por cable.", sol: "USB-C para cargar (y datos), HDMI o DisplayPort para el monitor, Ethernet (RJ-45) para la red por cable." },
    { nivel: "básico", q: "¿Qué hace un switch y en qué se diferencia de un router?", sol: "El switch une los equipos de una misma red local y entrega cada paquete a su destinatario. El router conecta redes distintas (la de casa con Internet) y elige el camino de los datos." },
    { nivel: "medio", q: "Pasa a binario 45 y a decimal 101101. ¿Qué observas?", sol: "45 = 32 + 8 + 4 + 1 → 101101. Y 101101 = 32 + 8 + 4 + 1 = 45. Son el mismo número escrito en las dos bases." },
    { nivel: "medio", q: "Suma en binario 1011 + 0110 y comprueba el resultado en decimal.", sol: "1 + 0 = 1; 1 + 1 = 10 (escribo 0, me llevo 1); 0 + 1 + 1 = 10 (0, me llevo 1); 1 + 0 + 1 = 10. Resultado 10001. En decimal: 11 + 6 = 17, y 10001 = 16 + 1 = 17." },
    { nivel: "medio", q: "Una foto de 4.000 × 3.000 píxeles se guarda sin comprimir con 24 bits por píxel. ¿Cuántos MB ocupa?", sol: "Píxeles: 4.000 · 3.000 = 12.000.000. Bits: 12.000.000 · 24 = 288.000.000. Bytes: 288.000.000 / 8 = 36.000.000 B ≈ 36 MB." },
    { nivel: "medio", q: "Tu fibra es de 300 Mbps. ¿Cuántos segundos tarda como mínimo en bajar un juego de 15 GB?", sol: "300 Mbps / 8 = 37,5 MB/s. 15 GB = 15.000 MB. Tiempo = 15.000 / 37,5 = 400 s, unos 6 minutos y 40 segundos (en la práctica, algo más)." },
    { nivel: "medio", q: "¿Por qué una videollamada usa UDP y la descarga de un documento usa TCP?", sol: "En una videollamada importa la rapidez: si se pierde un paquete es mejor seguir que esperar a reenviarlo. En un documento no puede faltar ningún trozo, así que TCP comprueba que llega todo y pide lo perdido." },
    { nivel: "medio", q: "Compara la topología en estrella y en bus: ventajas e inconvenientes.", sol: "Estrella: si falla un cable solo cae un equipo y es fácil ampliarla, pero depende del nodo central y usa más cable. Bus: barata y sencilla, pero si se corta el cable cae toda la red y hay colisiones cuando muchos transmiten." },
    { nivel: "medio", q: "Explica qué ocurre, paso a paso, cuando escribes una dirección web en el navegador.", sol: "1) El navegador pregunta al DNS la IP del dominio. 2) Abre una conexión TCP con ese servidor. 3) Pide la página con HTTPS (cifrada). 4) El servidor responde en paquetes, que viajan por varios routers. 5) El navegador los ordena, los une y dibuja la página." },
    { nivel: "medio", q: "Una canción dura 3 minutos, con 44.100 muestras por segundo, 16 bits por muestra y 2 canales. ¿Cuánto ocupa sin comprimir?", sol: "Muestras: 180 s · 44.100 · 2 = 15.876.000. Bits: · 16 = 254.016.000. Bytes: / 8 = 31.752.000 ≈ 31,8 MB. En MP3 ocuparía unos 3 MB." },
    { nivel: "medio", q: "En casa el wifi va bien en el salón pero mal en tu cuarto. Propón tres soluciones razonadas.", sol: "Mover el router a un lugar más alto y central; conectarte a la banda de 2,4 GHz, que atraviesa mejor las paredes; instalar un repetidor o un sistema en malla; o usar un cable Ethernet o PLC hasta el cuarto." },
    { nivel: "medio", q: "¿Para qué sirve la memoria caché? ¿Por qué no se hace toda la RAM igual de rápida?", sol: "Guarda los datos que la CPU usa más para no esperar a la RAM. No se hace toda así porque la memoria caché es muy cara y ocupa mucho espacio en el chip; se combina poca memoria muy rápida con mucha algo más lenta." },
    { nivel: "avanzado", q: "¿Cuántos colores distintos puede mostrar un píxel con 8 bits por cada canal RGB? Razónalo.", sol: "Cada canal tiene 2⁸ = 256 niveles. Con tres canales: 256 · 256 · 256 = 16.777.216 colores (2²⁴)." },
    { nivel: "avanzado", q: "¿Cuántas direcciones distintas permite IPv4 (32 bits) y cuántas IPv6 (128 bits)? ¿Por qué hizo falta IPv6?", sol: "IPv4: 2³² ≈ 4.300 millones. IPv6: 2¹²⁸ ≈ 3,4 · 10³⁸. Hay más dispositivos conectados que personas (móviles, relojes, IoT), y 4.300 millones de direcciones se agotaron." },
    { nivel: "avanzado", q: "Compara dos portátiles: A (4 núcleos, 8 GB RAM, HDD 1 TB) y B (6 núcleos, 16 GB RAM, SSD 512 GB). ¿Cuál recomendarías para editar vídeo y por qué?", sol: "El B: más núcleos para procesar, el doble de RAM para manejar proyectos grandes y un SSD que lee y escribe muchísimo más rápido que el disco duro. El A solo gana en capacidad; se puede añadir un disco externo para archivar." },
    { nivel: "avanzado", q: "Una web tarda en cargar aunque tu conexión es de 1 Gbps. Da tres posibles causas que no dependen del ancho de banda.", sol: "Latencia alta (servidor muy lejano), servidor saturado o lento, wifi débil o con interferencias en casa, un dispositivo con poca RAM o un DNS lento. El ancho de banda solo limita cuántos datos caben, no lo rápido que responde cada parte." },
    { nivel: "avanzado", q: "Diseña la red de un aula con 25 ordenadores, una impresora y wifi para tabletas. Indica topología, dispositivos y cómo sale a Internet.", sol: "Topología en estrella: todos los ordenadores y la impresora con cable a un switch de 32 puertos; un punto de acceso wifi conectado al switch para las tabletas; el switch se conecta al router del centro, que sale a Internet por fibra. Conviene separar la red de alumnos con su propia contraseña." },
    { nivel: "avanzado", q: "Explica por qué 1 KB puede valer 1.000 o 1.024 bytes y qué consecuencia tiene al comprar un disco de 1 TB.", sol: "Los fabricantes usan el sistema decimal (1 TB = 10¹² bytes), pero muchos sistemas operativos cuentan en potencias de 2 (1 TiB = 2⁴⁰ bytes). Por eso un disco de 1 TB aparece como unos 931 GB: no falta espacio, cambia la unidad." },
    { nivel: "avanzado", q: "Un mensaje de 3 MB se divide en paquetes de 1.500 bytes. ¿Cuántos paquetes hacen falta? ¿Qué hace TCP si se pierde el 37?", sol: "3.000.000 / 1.500 = 2.000 paquetes. TCP numera cada paquete; el receptor ve que falta el 37 y no lo confirma, así que el emisor lo vuelve a enviar. Luego se ordenan todos y se reconstruye el mensaje." },
    { nivel: "avanzado", q: "¿Qué ventajas tiene un SoC en un móvil frente a piezas separadas? ¿Y algún inconveniente?", sol: "Ventajas: ocupa menos, consume menos batería, las piezas se comunican más rápido y se calienta menos. Inconveniente: no se puede ampliar ni cambiar una pieza (por ejemplo, más RAM); si falla, hay que cambiar todo el chip o la placa." },
    { nivel: "avanzado", q: "Investiga el consumo de tu router y calcula cuánto gasta al año si está siempre encendido (por ejemplo, 10 W a 0,15 €/kWh). ¿Merece la pena apagarlo de noche?", sol: "10 W · 24 h · 365 = 87.600 Wh = 87,6 kWh. Coste: 87,6 · 0,15 ≈ 13 € al año. Apagándolo 8 h al día se ahorra un tercio (unos 4 €) y se reduce la exposición; el inconveniente es que no funcionan de noche los dispositivos que lo necesitan." },
  ],
  ejemplos: [
    { enunciado: "Calcula cuánto ocupa una imagen sin comprimir de 1.920 × 1.080 píxeles a 24 bits por píxel.", pasos: ["Número de píxeles: 1.920 · 1.080 = 2.073.600.", "Bits totales: 2.073.600 · 24 = 49.766.400 bits.", "Pasamos a bytes dividiendo entre 8: 6.220.800 bytes.", "En megabytes: unos 6,2 MB."], resultado: "Unos 6,2 MB (un JPEG de esa imagen ocuparía menos de 1 MB)." },
    { enunciado: "Suma en binario 1101 + 0111.", pasos: ["Columna de la derecha: 1 + 1 = 10 → escribo 0 y me llevo 1.", "Segunda: 0 + 1 + 1 = 10 → escribo 0 y me llevo 1.", "Tercera: 1 + 1 + 1 = 11 → escribo 1 y me llevo 1.", "Cuarta: 1 + 0 + 1 = 10 → escribo 10.", "Comprobación: 13 + 7 = 20 y 10100 = 16 + 4 = 20."], resultado: "10100" },
    { enunciado: "Un juego en línea tiene un ping de 120 ms con un servidor de EE. UU. y de 20 ms con uno de Madrid. ¿Cuál conviene y por qué?", pasos: ["El ping mide lo que tarda un paquete en ir y volver.", "Con 120 ms, cada acción tarda más de una décima de segundo en reflejarse.", "Con 20 ms la respuesta es casi inmediata.", "El ancho de banda no cambia este retraso: depende sobre todo de la distancia y de los saltos."], resultado: "El de Madrid: menor latencia y el juego responde antes." },
  ],
  errores: ["Confundir megabits (Mb) con megabytes (MB): hay que dividir entre 8 para saber cuánto se descarga por segundo."],
  cuarta: ["La memoria caché del navegador", "16", "MAN", "Aumenta la batería", "El nombre del dispositivo en el móvil", "1", "cada vez la mitad", "el 4G", "la velocidad de subida", "computación en la nube"],
  quiz: [
    { q: "¿Qué fase del ciclo de instrucción averigua qué hay que hacer?", o: ["Buscar", "Descodificar", "Ejecutar", "Guardar"], a: 1, e: "Al descodificar, la CPU interpreta la instrucción que acaba de leer." },
    { q: "¿Qué pieza calcula en paralelo los píxeles de la pantalla?", o: ["La GPU", "El router", "El disco SSD", "La fuente de alimentación"], a: 0, e: "La GPU tiene miles de núcleos sencillos que trabajan a la vez." },
    { q: "¿Qué protocolo traduce «escolapedia.com» a una dirección IP?", o: ["TCP", "HTTP", "DNS", "UDP"], a: 2, e: "El DNS funciona como una agenda de Internet." },
    { q: "Una fibra de 800 Mbps descarga como mucho unos…", o: ["800 MB/s", "100 MB/s", "8 MB/s", "6.400 MB/s"], a: 1, e: "800 / 8 = 100 MB por segundo." },
    { q: "¿Qué topología usan casi todas las redes de casa?", o: ["Bus", "Anillo", "Estrella", "Ninguna"], a: 2, e: "Todos los equipos se conectan al router o a un switch central." },
    { q: "¿Cuál de estos formatos comprime sin perder información?", o: ["JPEG", "MP3", "PNG", "MP4"], a: 2, e: "PNG, ZIP o FLAC permiten recuperar el original exacto." },
    { q: "La banda wifi de 2,4 GHz, frente a la de 5 GHz…", o: ["es más rápida y de menos alcance", "llega más lejos pero es más lenta", "no atraviesa paredes", "solo sirve para Bluetooth"], a: 1, e: "Mayor alcance y mejor paso por paredes, a cambio de menos velocidad." },
    { q: "¿Qué hace TCP cuando falta un paquete?", o: ["Lo ignora", "Pide que se reenvíe", "Corta la conexión", "Cambia la IP"], a: 1, e: "TCP numera los paquetes y garantiza que lleguen todos." },
    { q: "¿Qué conector es el estándar europeo para cargar móviles?", o: ["Micro USB", "Lightning", "USB-C", "HDMI"], a: 2, e: "La Unión Europea lo hizo obligatorio para unificar cargadores." },
    { q: "¿Cuántos valores distintos caben en 4 bits?", o: ["4", "8", "16", "32"], a: 2, e: "2⁴ = 16, del 0000 (0) al 1111 (15)." },
  ],
  cuartaEx: ["8.000 MB por segundo", "Para que pesen menos", "proceso"],
  examen: [
    { q: "¿Qué número decimal es el binario 110010?", o: ["50", "48", "26", "110"], a: 0, e: "32 + 16 + 2 = 50." },
    { q: "Una canción en MP3 ocupa menos que en un CD porque…", o: ["usa compresión con pérdida", "tiene menos minutos", "se guarda en binario", "usa Unicode"], a: 0, e: "Elimina sonidos que apenas se perciben." },
    { q: "¿Qué dispositivo une varias redes y elige el camino de los paquetes?", o: ["Switch", "Router", "Punto de acceso", "Periférico"], a: 1, e: "El router encamina los datos entre redes." },
    { q: "Para jugar en línea, lo más importante es…", o: ["una latencia baja", "un disco grande", "una pantalla táctil", "un router de color"], a: 0, e: "Un ping bajo hace que las acciones se reflejen al instante." },
    { q: "¿Cuál es un periférico de entrada y salida?", o: ["Altavoz", "Teclado", "Pantalla táctil", "Micrófono"], a: 2, e: "Muestra imagen y recibe toques." },
  ],
  tarjetas: [
    ["Ciclo de instrucción", "Buscar, descodificar, ejecutar y guardar."],
    ["TCP frente a UDP", "TCP garantiza que llega todo; UDP es más rápido pero no reenvía."],
    ["Mbps y MB/s", "Divide los megabits entre 8 para obtener megabytes por segundo."],
    ["Píxel RGB", "Mezcla rojo, verde y azul con 8 bits cada uno: 24 bits."],
  ],
  glosario: [
    ["Bit", "Unidad mínima de información: un 0 o un 1."],
    ["Byte", "Grupo de 8 bits; basta para guardar un carácter sencillo."],
    ["CPU", "Unidad central de proceso: ejecuta las instrucciones de los programas."],
    ["GPU", "Procesador gráfico con muchos núcleos que trabajan en paralelo."],
    ["Memoria RAM", "Memoria de trabajo rápida y volátil: se borra al apagar."],
    ["Caché", "Memoria muy pequeña y rápida junto a la CPU con los datos más usados."],
    ["SSD", "Unidad de almacenamiento sin piezas móviles, mucho más rápida que un disco duro."],
    ["Periférico", "Aparato que se conecta a la unidad central para meter o sacar datos."],
    ["Controlador (driver)", "Programa que permite al sistema operativo manejar un periférico."],
    ["Protocolo", "Conjunto de reglas para que dos equipos se comuniquen."],
    ["Dirección IP", "Número que identifica a un dispositivo en una red."],
    ["DNS", "Servicio que traduce nombres de dominio a direcciones IP."],
    ["Router", "Dispositivo que conecta redes distintas y encamina los paquetes."],
    ["Switch", "Dispositivo que une los equipos de una red local."],
    ["Ancho de banda", "Cantidad de datos que puede transmitir una conexión por segundo."],
    ["Latencia (ping)", "Tiempo que tarda un paquete en ir y volver, en milisegundos."],
    ["Topología", "Forma en que están conectados los equipos de una red."],
    ["IoT", "Internet de las cosas: objetos cotidianos con sensores y conexión."],
  ],
  situacion: {
    titulo: "Auditamos la red de casa",
    reto: "Vuestra familia se queja de que «Internet va lento». Tenéis que investigar la red de casa (o la de un familiar), medirla con datos y proponer mejoras razonadas que no cuesten más de 60 €.",
    pasos: [
      "Haced un inventario de los dispositivos conectados (ordenadores, móviles, consola, IoT) y anotad si van por cable o por wifi.",
      "Medid la velocidad de bajada, de subida y la latencia en tres lugares de la casa con un test de velocidad, en las bandas de 2,4 y 5 GHz.",
      "Dibujad un plano de la vivienda con el router, las paredes y los puntos medidos, y señalad las zonas de señal débil.",
      "Revisad la seguridad: contraseña de fábrica, cifrado WPA2/WPA3, red de invitados y actualizaciones del router.",
      "Proponed mejoras (mover el router, cable, repetidor, malla) con su precio y el beneficio esperado.",
    ],
    producto: "Un informe de una página con el plano de cobertura, la tabla de mediciones y las tres mejoras priorizadas.",
    evaluacion: ["Las mediciones son correctas y se expresan con sus unidades (Mbps, ms).", "Se interpretan bien los datos y se distingue ancho de banda de latencia.", "Las propuestas están justificadas técnicamente y respetan el presupuesto.", "El informe es claro y el plano se entiende sin explicaciones."],
  },
  objetivos: ["Explicar cómo se representan texto, imagen y sonido en binario", "Describir el modelo TCP/IP y calcular tiempos de descarga"],
  fuentes: [{ t: "INCIBE: protege tu wifi y tus dispositivos", url: "https://www.incibe.es/ciudadania" }],
});
