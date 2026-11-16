// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L38");

// Arquitectura de Von Neumann: CPU (UC + ALU + registros), memoria, E/S y buses.
const vonNeumann = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Arquitectura de Von Neumann: CPU con unidad de control y unidad aritmético-lógica, memoria principal y entrada/salida unidas por buses">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Arquitectura de Von Neumann", { fs: 13, maxW: 236, bold: true, font: B.D })}
  <rect x="14" y="34" width="120" height="92" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${B.tx(74, 50, "CPU", { fs: 12, maxW: 60, bold: true, color: "var(--pen)" })}
  <rect x="24" y="58" width="100" height="24" rx="6" fill="var(--pen)" opacity=".85"/>${B.tx(74, 74, "Unidad de control", { fs: 10, maxW: 92, bold: true, color: "#fff" })}
  <rect x="24" y="90" width="100" height="26" rx="6" fill="var(--red)" opacity=".85"/>${B.tx(74, 107, "ALU + registros", { fs: 10, maxW: 92, bold: true, color: "#fff" })}
  <rect x="152" y="34" width="94" height="40" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>${B.tx(199, 52, "Memoria", { fs: 11, maxW: 84, bold: true, color: "var(--leaf)" })}${B.tx(199, 66, "datos + programa", { fs: 9.5, maxW: 84 })}
  <rect x="152" y="86" width="94" height="40" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2.5"/>${B.tx(199, 104, "Entrada/salida", { fs: 11, maxW: 84, bold: true, color: "var(--sun)" })}${B.tx(199, 118, "periféricos", { fs: 9.5, maxW: 84 })}
  <rect x="14" y="142" width="232" height="26" rx="8" fill="var(--ink)" opacity=".85"/>${B.tx(130, 159, "Buses: datos · direcciones · control", { fs: 10.5, maxW: 220, bold: true, color: "#fff" })}
  <path d="M74 126 V 142 M199 74 V 80 M199 126 V 142 M240 74 V 86" stroke="var(--ink)" stroke-width="2.5"/>
</svg>`;

// Conversión de 13 a binario por divisiones sucesivas.
const binario = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Paso de 13 a binario por divisiones sucesivas entre 2: restos 1, 0, 1, 1, leídos de abajo arriba dan 1101">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "13 en binario", { fs: 13, maxW: 236, bold: true, font: B.D })}
  ${[["13 : 2 = 6", "1"], ["6 : 2 = 3", "0"], ["3 : 2 = 1", "1"], ["1 : 2 = 0", "1"]].map(([d, r], i) => `${B.tx(70, 48 + i * 26, d, { fs: 12, maxW: 100 })}<circle cx="138" cy="${44 + i * 26}" r="10" fill="var(--red)"/>${B.tx(138, 48 + i * 26, r, { fs: 12, maxW: 12, bold: true, color: "#fff" })}`).join("")}
  ${B.tx(170, 40, "resto", { fs: 9.5, maxW: 40, anchor: "start" })}
  <path d="M160 130 V 48" stroke="var(--pen)" stroke-width="2.5"/><path d="M154 56 L 160 44 L 166 56" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
  ${B.tx(205, 92, "leer de", { fs: 10, maxW: 80, color: "var(--pen)" })}${B.tx(205, 106, "abajo arriba", { fs: 10, maxW: 80, color: "var(--pen)" })}
  <rect x="40" y="144" width="180" height="26" rx="8" fill="var(--leaf)"/>${B.tx(130, 162, "13₁₀ = 1101₂", { fs: 14, maxW: 170, bold: true, color: "#fff" })}
</svg>`;

module.exports = B.tema({
  titulo: "Hardware y sistemas operativos",
  minutos: 120,
  objetivos: [
    "Describir la arquitectura de un ordenador y la función de cada uno de sus componentes",
    "Representar información en binario y hexadecimal y calcular capacidades con las unidades de medida",
    "Comparar procesadores, memorias, almacenamiento y periféricos para elegir un equipo según su uso",
    "Explicar las funciones de un sistema operativo, comparar los principales y gestionar archivos y mantenimiento",
  ],
  claves: ["hardware", "software", "Von Neumann", "CPU", "binario", "byte", "memoria RAM", "SSD", "periférico", "placa base", "sistema operativo", "sistema de archivos"],
  pregunta: {
    texto: "Tu móvil, tu portátil, una consola y el ordenador de a bordo de un coche parecen aparatos muy distintos. ¿Qué tienen en común por dentro?",
    respuesta: "Todos siguen la misma <b>arquitectura de Von Neumann</b>: un <b>procesador</b> que ejecuta instrucciones, una <b>memoria</b> donde se guardan datos y programas, dispositivos de <b>entrada y salida</b> y unos <b>buses</b> que lo conectan todo. Y todos necesitan un <mark>sistema operativo</mark> que administre ese hardware y ofrezca una forma cómoda de usarlo.",
  },
  lectura: {
    titulo: "Una sala llena de válvulas",
    html: `<p>En 1946, el ENIAC ocupaba una sala de 167 metros cuadrados, pesaba 27 toneladas y tenía casi 18 000 válvulas de vacío que se fundían con frecuencia. Para cambiar de programa, un equipo de programadoras, entre ellas Jean Bartik y Betty Holberton, tenía que recablearlo a mano durante días. Hacía unas 5000 sumas por segundo.</p>
    <p>Ese mismo año, el matemático John von Neumann describió una idea revolucionaria: guardar el programa en la misma memoria que los datos. Así, cambiar de tarea sería tan sencillo como cargar otro programa. Casi ochenta años después, todos nuestros dispositivos siguen ese esquema.</p>
    <p>Hoy un procesador de móvil cabe en una uña, tiene miles de millones de transistores y hace billones de operaciones por segundo consumiendo menos que una bombilla. Entre medias ha cambiado casi todo… salvo los principios. En este tema abrirás la «caja» del ordenador: verás cómo representa la información con ceros y unos, qué hace cada componente, cómo elegir un equipo y qué trabajo invisible realiza el sistema operativo cada vez que pulsas una tecla.</p>`,
  },
  secciones: [4, 5, 4],
  bloques: [
    {
      h: "El ordenador: hardware, software y arquitectura",
      html: `<p>Un <b>ordenador</b> es una máquina electrónica que recibe datos, los procesa siguiendo las instrucciones de un programa y ofrece resultados. Distinguimos dos partes:</p>
      <ul><li>El <b>hardware</b>: los componentes físicos (procesador, memoria, discos, pantalla, teclado).</li>
      <li>El <b>software</b>: los programas y datos, intangibles, que indican al hardware qué hacer. Sin software, el hardware es inútil; sin hardware, el software no puede ejecutarse.</li></ul>
      <p>Casi todos los ordenadores siguen la <mark>arquitectura de Von Neumann</mark> (1945), cuya idea clave es que <b>programa y datos se guardan en la misma memoria</b>. Sus bloques son:</p>
      <ul><li><b>Unidad central de proceso</b> (CPU), formada por la <b>unidad de control</b>, que lee e interpreta las instrucciones y coordina todo, y la <b>unidad aritmético-lógica</b> (ALU), que hace los cálculos y las comparaciones. Usa pequeñas memorias internas muy rápidas, los <b>registros</b>.</li>
      <li><b>Memoria principal</b>, donde están el programa en ejecución y sus datos.</li>
      <li><b>Unidades de entrada y salida</b>, que comunican con el exterior.</li>
      <li><b>Buses</b>, conjuntos de líneas que transportan datos, direcciones y señales de control.</li></ul>
      <p>La CPU trabaja en un ciclo continuo llamado <b>ciclo de instrucción</b>: <b>busca</b> la siguiente instrucción en memoria, la <b>decodifica</b>, la <b>ejecuta</b> y guarda el resultado. Este ciclo se repite miles de millones de veces por segundo al ritmo del reloj del procesador.</p>`,
      svg: vonNeumann(),
    },
    {
      h: "La información en binario",
      html: `<p>Los circuitos digitales solo distinguen dos estados: hay tensión o no la hay. Por eso los ordenadores representan toda la información con el <b>sistema binario</b>, que usa solo dos cifras, 0 y 1. Cada cifra binaria es un <b>bit</b> (<i>binary digit</i>).</p>
      <p>El binario es un sistema <b>posicional</b> como el decimal, pero en base 2: cada posición vale el doble que la anterior (1, 2, 4, 8, 16, 32, 64, 128…). Así, 1101₂ = 1·8 + 1·4 + 0·2 + 1·1 = 13₁₀.</p>
      <ul><li><b>De binario a decimal</b>: se multiplica cada bit por su peso (potencia de 2) y se suman los resultados.</li>
      <li><b>De decimal a binario</b>: se divide sucesivamente entre 2 y se leen los restos de abajo arriba.</li></ul>
      <p>Con <i>n</i> bits se pueden representar <mark>2ⁿ combinaciones</mark>: con 8 bits, 256 valores (de 0 a 255). Por eso un píxel con 8 bits por color tiene 256 niveles de rojo, de verde y de azul.</p>
      <p>Como los números binarios largos son difíciles de leer, se usa también el sistema <b>hexadecimal</b> (base 16), con las cifras 0-9 y las letras A-F (A = 10, …, F = 15). Cada cifra hexadecimal equivale exactamente a 4 bits: 1101 0110₂ = D6₁₆. Lo verás en los colores de las páginas web (#FF0000 es rojo puro) y en las direcciones MAC de las tarjetas de red.</p>`,
      svg: binario(),
      video: { id: "QUiURUkNxC4", titulo: "Pasar números a código binario", canal: "utilidadTV", vistas: 689576 },
    },
    {
      h: "Unidades de medida de la información",
      html: `<p>Un bit es una cantidad muy pequeña de información, así que se agrupan. Un <b>byte</b> son <b>8 bits</b> y permite representar un carácter de texto sencillo. Para cantidades mayores se usan múltiplos, y aquí hay que tener cuidado, porque conviven dos sistemas:</p>
      <ul><li><b>Sistema decimal (SI)</b>: kilobyte (kB) = 1000 bytes; megabyte (MB) = 1000 kB; gigabyte (GB) = 1000 MB; terabyte (TB) = 1000 GB. Lo usan los fabricantes de discos y las velocidades de red.</li>
      <li><b>Sistema binario (IEC)</b>: kibibyte (KiB) = 1024 bytes; mebibyte (MiB) = 1024 KiB; gibibyte (GiB) = 1024 MiB; tebibyte (TiB) = 1024 GiB. Es el que usan muchos sistemas operativos, aunque a menudo lo escriban como «GB».</li></ul>
      <p>Esta diferencia explica que un disco anunciado como «1 TB» aparezca en el ordenador como unos 931 «GB»: 10¹² bytes / 2³⁰ ≈ 931 GiB. No falta espacio: se mide con otra unidad.</p>
      <p>Otra confusión frecuente es entre <b>bits y bytes</b> en las velocidades. Las conexiones se miden en <b>bits por segundo</b> (Mb/s, con «b» minúscula), y los tamaños de archivo en bytes (MB, con «B» mayúscula). Una fibra de 600 Mb/s descarga como máximo 600 / 8 = 75 MB por segundo. Saber convertir entre unidades permite calcular cuánto tardará una descarga o cuántas fotos caben en una tarjeta de memoria.</p>`,
      svg: B.rejilla("Unidades de información decimales y binarias", ["Decimal", "Bytes", "Binario"], [["1 kB", "10³", "1 KiB = 2¹⁰"], ["1 MB", "10⁶", "1 MiB = 2²⁰"], ["1 GB", "10⁹", "1 GiB = 2³⁰"], ["1 TB", "10¹²", "1 TiB = 2⁴⁰"]], { t: "1 byte = 8 bits" }),
    },
    {
      h: "Codificación de textos, imágenes y sonidos",
      html: `<p>Todo lo que maneja un ordenador, sea texto, imagen o sonido, se convierte en números binarios mediante un <b>código</b>, es decir, una correspondencia acordada.</p>
      <ul><li><b>Texto</b>: el código <b>ASCII</b> (1963) asigna un número de 7 bits a cada carácter: la «A» es 65 y la «a» es 97. Solo tenía 128 caracteres, sin ñ ni acentos. Para incluir todos los alfabetos del mundo se creó <b>Unicode</b>, con más de 150 000 caracteres (letras, ideogramas, símbolos y emojis). Su forma más usada en la web, <b>UTF-8</b>, emplea de 1 a 4 bytes por carácter. Cuando un texto muestra «Ã±» en lugar de «ñ», es que se ha leído con una codificación distinta de la que se usó al escribirlo.</li>
      <li><b>Imágenes</b>: una imagen de mapa de bits se divide en <b>píxeles</b> y el color de cada uno se guarda como números (por ejemplo, 24 bits: 8 para rojo, 8 para verde y 8 para azul).</li>
      <li><b>Sonido</b>: la onda se mide miles de veces por segundo (<b>muestreo</b>) y cada medida se guarda con un número de bits (<b>resolución</b>). Un CD usa 44 100 muestras por segundo de 16 bits.</li></ul>
      <p>Los números también tienen sus códigos: enteros con signo en <b>complemento a dos</b> y números con decimales en <b>coma flotante</b> (norma IEEE 754). Como la cantidad de bits es limitada, algunas operaciones dan pequeños errores de redondeo: en muchos lenguajes, 0,1 + 0,2 no da exactamente 0,3.</p>`,
      svg: B.cajas("Cómo se codifica cada tipo de información", [["Texto", "ASCII · Unicode|UTF-8"], ["Imagen", "píxeles|RGB 24 bits"], ["Sonido", "muestreo|y resolución"], ["Números", "complemento a 2|coma flotante"]], { t: "Todo son bits" }),
    },
    {
      h: "La placa base y el procesador",
      html: `<p>La <b>placa base</b> es el circuito impreso principal al que se conectan todos los componentes. Incluye el <b>zócalo</b> del procesador, las ranuras de memoria, las ranuras de expansión <b>PCI Express</b> (para la tarjeta gráfica o de red), los conectores de almacenamiento (SATA y M.2), el <b>chipset</b> que gestiona las comunicaciones y los puertos traseros. También lleva el <b>firmware UEFI</b> (antes BIOS), un programa grabado que comprueba el hardware al encender y arranca el sistema operativo.</p>
      <p>El <b>procesador</b> o microprocesador contiene la CPU en un solo chip. Sus características principales son:</p>
      <ul><li><b>Frecuencia de reloj</b>, en gigahercios (GHz): miles de millones de ciclos por segundo.</li>
      <li><b>Núcleos</b>: cada núcleo es una CPU completa; con varios, se ejecutan tareas en paralelo. Los <b>hilos</b> permiten que cada núcleo atienda dos tareas a la vez.</li>
      <li><b>Memoria caché</b> (L1, L2, L3): memoria ultrarrápida dentro del chip para los datos más usados.</li>
      <li><b>Arquitectura</b>: x86-64 (Intel, AMD) en la mayoría de los PC; <b>ARM</b>, más eficiente, en móviles, tabletas y cada vez más portátiles.</li>
      <li><b>Consumo</b> (TDP): calor que hay que disipar con un ventilador o disipador.</li></ul>
      <p>La frecuencia no lo es todo: un procesador moderno a 3 GHz puede ser mucho más rápido que uno antiguo a 4 GHz porque ejecuta más instrucciones por ciclo. Muchos chips integran además la <b>GPU</b> (procesador gráfico), muy eficaz en cálculos en paralelo y clave para videojuegos, edición de vídeo e inteligencia artificial.</p>`,
      svg: B.cajas("Elementos de la placa base", [["Zócalo CPU", "procesador"], ["Ranuras RAM", "DIMM / SO-DIMM"], ["PCIe", "gráfica, red"], ["M.2 y SATA", "almacenamiento"], ["Chipset", "comunicaciones"], ["UEFI", "arranque"]], { t: "La placa base", cols: 3 }),
      video: { id: "1RQ8OmZfk8s", titulo: "Placas madre: todo lo que necesitas saber", canal: "Sara's Tech", vistas: 348867 },
    },
    {
      h: "La memoria: RAM, ROM y caché",
      html: `<p>Los ordenadores usan varios tipos de memoria organizados en una <b>jerarquía</b>: cuanto más rápida, más cara y más pequeña.</p>
      <ul><li><b>Registros</b> y <b>caché</b>: dentro del procesador, de muy poca capacidad (kilobytes o megabytes) y velocísimas.</li>
      <li><b>RAM</b> (memoria de acceso aleatorio): la memoria principal, donde se cargan el sistema operativo, los programas abiertos y sus datos. Es <b>volátil</b>: se borra al apagar. Los módulos actuales son DDR4 y DDR5; su capacidad típica va de 8 a 32 GB. Si la RAM se llena, el sistema usa parte del disco como memoria virtual, mucho más lenta, y el equipo se ralentiza.</li>
      <li><b>ROM</b> (memoria de solo lectura) y <b>memoria flash</b>: <b>no volátiles</b>, conservan los datos sin corriente. Guardan el firmware de arranque y, en el caso de la flash, también los datos de móviles, memorias USB y discos SSD.</li>
      <li><b>Almacenamiento secundario</b>: discos, de gran capacidad pero más lentos que la RAM.</li></ul>
      <p>La <b>caché</b> funciona porque los programas tienden a reutilizar los mismos datos y a usar datos cercanos (principio de <b>localidad</b>): si el procesador encuentra lo que busca en la caché (un acierto), se ahorra el viaje a la RAM, cien veces más lento.</p>
      <p>Para elegir RAM importa la <b>capacidad</b> (8 GB para tareas básicas, 16 GB o más para edición de vídeo o videojuegos), el <b>tipo</b> compatible con la placa y la <b>velocidad</b>. Instalar dos módulos iguales (doble canal) mejora el rendimiento.</p>`,
      svg: B.capas("Jerarquía de memoria: de la más rápida a la más lenta", [["Registros", "bytes · ns"], ["Caché", "MB · muy rápida"], ["RAM", "GB · volátil"], ["SSD", "cientos de GB"], ["HDD / nube", "TB · lenta"]], { t: "Jerarquía de memoria" }),
      video: { id: "swOCvouHeAg", titulo: "Memorias ROM y RAM explicadas", canal: "MindMachineTV", vistas: 293456 },
    },
    {
      h: "El almacenamiento",
      html: `<p>El almacenamiento secundario guarda de forma permanente el sistema operativo, los programas y los archivos. Las principales tecnologías son:</p>
      <ul><li><b>Disco duro magnético</b> (HDD): platos que giran a 5400 o 7200 rpm y un cabezal que lee y escribe magnetizando la superficie. Barato por gigabyte y de gran capacidad (varios TB), pero lento, ruidoso y sensible a los golpes.</li>
      <li><b>Unidad de estado sólido</b> (SSD): usa memoria flash, sin piezas móviles. Es mucho más rápida (un SSD NVMe por M.2 puede leer a más de 3000 MB/s, frente a unos 150 MB/s de un HDD), silenciosa y resistente. Su precio por GB es mayor y las celdas soportan un número limitado de escrituras.</li>
      <li><b>Almacenamiento óptico</b> (CD, DVD, Blu-ray): un láser lee marcas en la superficie. Hoy está casi en desuso.</li>
      <li><b>Memorias externas</b>: memorias USB y tarjetas SD o microSD, también de memoria flash.</li>
      <li><b>Almacenamiento en la nube</b>: los archivos se guardan en servidores remotos y se accede a ellos por internet, desde cualquier dispositivo. Requiere conexión y confiar en el proveedor.</li></ul>
      <p>Para elegir se valoran la <b>capacidad</b>, la <b>velocidad</b> de lectura y escritura, la <b>fiabilidad</b>, el <b>precio por GB</b> y la <b>portabilidad</b>. Una combinación habitual es un SSD para el sistema y los programas (arranque en segundos) y un HDD o la nube para guardar fotos y vídeos. Y siempre, copias de seguridad: cualquier soporte puede fallar.</p>`,
      svg: B.barras("Velocidad aproximada de lectura de cada tipo de almacenamiento", [["HDD", 150], ["SSD SATA", 550], ["SSD NVMe", 3500], ["USB 3", 100]], { t: "Lectura en MB/s", unidad: "" }),
    },
    {
      h: "Los periféricos",
      html: `<p>Los <b>periféricos</b> son los dispositivos que permiten al ordenador comunicarse con el exterior. Se clasifican según el sentido en que circula la información:</p>
      <ul><li><b>De entrada</b>: introducen datos. Teclado, ratón, panel táctil, escáner, micrófono, cámara web, lector de códigos, sensores o mandos de videojuegos.</li>
      <li><b>De salida</b>: muestran o entregan resultados. Monitor, impresora, altavoces, auriculares, proyector o impresora 3D.</li>
      <li><b>Mixtos</b> o de entrada/salida: hacen ambas cosas. Pantalla táctil, impresora multifunción, casco de realidad virtual, módem o tarjeta de red. Los dispositivos de almacenamiento externo también se consideran mixtos.</li></ul>
      <p>Cada periférico tiene características que conviene conocer. En un <b>monitor</b>: el tamaño en pulgadas de la diagonal, la <b>resolución</b> (1920 × 1080 píxeles es Full HD; 3840 × 2160, 4K), la frecuencia de refresco (60, 144 Hz…) y el tipo de panel. En una <b>impresora</b>: la tecnología (inyección de tinta, láser), la resolución en puntos por pulgada (ppp) y el coste por página. En una <b>cámara</b>: los megapíxeles y la calidad del sensor.</p>
      <p>Para funcionar, cada periférico necesita un <b>controlador</b> o <i>driver</i>: un pequeño programa que permite al sistema operativo comunicarse con él. Muchos se instalan solos al conectarlos (<i>plug and play</i>). Los periféricos también tienen implicaciones de <b>ergonomía</b>: la altura del monitor, la posición del teclado y las pausas previenen lesiones y fatiga visual.</p>`,
      svg: B.comparar("Periféricos de entrada y de salida", ["Entrada", ["teclado y ratón", "micrófono", "escáner", "cámara web"]], ["Salida", ["monitor", "impresora", "altavoces", "proyector"]]),
    },
    {
      h: "Puertos, conexiones y elección de un equipo",
      html: `<p>Los periféricos se conectan mediante <b>puertos</b> con cable o de forma inalámbrica:</p>
      <ul><li><b>USB</b>: el más universal. El conector <b>USB-C</b>, reversible, transmite datos, vídeo y carga; según la versión (USB 3.2, USB4, Thunderbolt) alcanza de 5 a 40 Gb/s o más.</li>
      <li><b>HDMI</b> y <b>DisplayPort</b>: vídeo y sonido digitales hacia monitores y televisores.</li>
      <li><b>RJ45</b> (Ethernet): red por cable.</li>
      <li><b>Jack de 3,5 mm</b>: audio analógico.</li>
      <li><b>Inalámbricas</b>: <b>Bluetooth</b> para ratones, auriculares o relojes a pocos metros; <b>wifi</b> para la red; <b>NFC</b> para pagos y emparejamiento a centímetros.</li></ul>
      <p>Para <b>elegir un equipo</b> hay que partir del uso que se le va a dar, no del más caro:</p>
      <ul><li><b>Ofimática y navegación</b>: procesador de gama media, 8-16 GB de RAM y SSD de 256-512 GB.</li>
      <li><b>Edición de vídeo, diseño 3D o videojuegos</b>: procesador potente, 16-32 GB de RAM, tarjeta gráfica dedicada y SSD rápido de 1 TB.</li>
      <li><b>Movilidad</b>: peso, autonomía de la batería y pantalla.</li></ul>
      <p>También cuentan la posibilidad de ampliar memoria o disco, la garantía, la facilidad de reparación, la eficiencia energética y el impacto ambiental. Un ordenador bien elegido y mantenido puede durar muchos años.</p>`,
      svg: B.rejilla("Puertos habituales y su uso", ["Puerto", "Uso", "Tipo"], [["USB-C", "datos, carga", "cable"], ["HDMI", "vídeo", "cable"], ["RJ45", "red", "cable"], ["Bluetooth", "periféricos", "inalámbrico"], ["NFC", "pagos", "inalámbrico"]], { t: "Conexiones" }),
      video: { id: "2vD1mlHifZU", titulo: "Todos los componentes del PC explicados en 13 minutos", canal: "Explicando Tecnología", vistas: 118394 },
    },
    {
      h: "El software y sus tipos",
      html: `<p>El software se clasifica según su función:</p>
      <ul><li><b>Software de sistema</b>: gestiona el hardware y ofrece una base para los demás programas. Incluye el <b>sistema operativo</b>, los <b>controladores</b> de dispositivos y el <b>firmware</b>.</li>
      <li><b>Software de aplicación</b>: permite al usuario hacer tareas concretas: procesadores de textos, hojas de cálculo, navegadores, editores de imagen, videojuegos o aplicaciones móviles.</li>
      <li><b>Software de programación</b>: herramientas para crear otros programas, como editores de código, compiladores, intérpretes y depuradores.</li></ul>
      <p>El software también se clasifica por su <b>licencia</b>, que fija lo que se puede hacer con él:</p>
      <ul><li><b>Software propietario</b>: el código fuente es secreto y la licencia limita su uso, copia y modificación (Windows, Microsoft Office, Photoshop).</li>
      <li><b>Software libre</b>: garantiza cuatro libertades: usarlo con cualquier fin, estudiar cómo funciona (acceso al código), distribuir copias y mejorarlo y publicar las mejoras (Linux, LibreOffice, GIMP, Firefox). El <b>código abierto</b> es un concepto muy próximo.</li>
      <li><b>Freeware</b>: gratuito pero no necesariamente libre; <b>shareware</b>: prueba gratuita limitada en tiempo o funciones.</li></ul>
      <p>«Gratis» y «libre» no son lo mismo: un programa puede ser gratuito y propietario, y uno libre puede venderse. Usar software sin licencia («pirata») es ilegal y peligroso, porque suele llevar malware.</p>`,
      svg: B.estrella("Tipos de software", "Software", ["Sistema", "Aplicación", "Programación", "Libre", "Propietario", "Freeware"]),
    },
    {
      h: "El sistema operativo y sus funciones",
      html: `<p>El <mark>sistema operativo</mark> (SO) es el software básico que se carga al encender el equipo y hace de intermediario entre el hardware, las aplicaciones y el usuario. Su núcleo, el <b>kernel</b>, tiene el control total de la máquina. Sus funciones principales son:</p>
      <ul><li><b>Gestión de procesos</b>: un programa en ejecución es un proceso. El SO reparte el tiempo del procesador entre todos ellos, tan rápido que parece que funcionan a la vez (<b>multitarea</b>).</li>
      <li><b>Gestión de la memoria</b>: asigna RAM a cada proceso, impide que uno invada la de otro y usa la memoria virtual cuando falta.</li>
      <li><b>Gestión de archivos</b>: organiza los datos en archivos y carpetas dentro del <b>sistema de archivos</b>.</li>
      <li><b>Gestión de dispositivos</b>: controla los periféricos a través de los controladores.</li>
      <li><b>Seguridad y usuarios</b>: cuentas, contraseñas, permisos y cortafuegos.</li>
      <li><b>Interfaz de usuario</b>: la forma de comunicarse con el SO. Puede ser una <b>interfaz gráfica</b> (ventanas, iconos, menús) o una <b>interfaz de línea de comandos</b> (se escriben órdenes en un terminal, como <code>ls</code> o <code>dir</code>), más potente para automatizar tareas.</li></ul>
      <p>El proceso de <b>arranque</b> sigue estos pasos: el firmware UEFI comprueba el hardware, localiza el gestor de arranque en el disco, este carga el kernel en la RAM y el kernel inicia los servicios y la interfaz. Por eso un SSD acorta tanto el tiempo de encendido.</p>`,
      svg: B.capas("El sistema operativo entre usuario y hardware", [["Usuario", "interfaz"], ["Aplicaciones", "programas"], ["Sistema operativo", "kernel y drivers"], ["Hardware", "CPU, RAM, discos"]], { t: "Capas del sistema" }),
    },
    {
      h: "Los sistemas operativos actuales",
      html: `<p>Los sistemas operativos más extendidos se pueden agrupar por el tipo de dispositivo:</p>
      <ul><li><b>Windows</b> (Microsoft): el más usado en ordenadores personales. Propietario, con un enorme catálogo de programas y juegos.</li>
      <li><b>macOS</b> (Apple): propietario, solo para ordenadores Apple. Se basa en Unix y destaca por su integración con el resto de dispositivos de la marca.</li>
      <li><b>GNU/Linux</b>: libre y gratuito, se distribuye en <b>distribuciones</b> como Ubuntu, Debian, Fedora o Linux Mint. Domina en servidores, supercomputadores y dispositivos integrados, y es muy usado en educación y administraciones.</li>
      <li><b>Android</b> (Google): basado en el kernel Linux, es el más usado en móviles del mundo.</li>
      <li><b>iOS</b> e <b>iPadOS</b> (Apple): para iPhone e iPad.</li>
      <li><b>ChromeOS</b>: ligero y orientado a la nube, frecuente en los portátiles de muchos centros educativos.</li></ul>
      <p>Existen también <b>sistemas operativos en tiempo real</b> para coches, aviones o equipos médicos, que deben responder en un tiempo garantizado, y sistemas para servidores, relojes o televisores. Hoy, más de la mitad de las conexiones a internet se hacen desde sistemas móviles.</p>
      <p>Con la <b>virtualización</b> se puede ejecutar un sistema operativo dentro de otro en una <b>máquina virtual</b> (VirtualBox, por ejemplo), lo que permite probar Linux sin borrar Windows o aislar un entorno de pruebas.</p>`,
      svg: B.rejilla("Comparación de sistemas operativos", ["SO", "Licencia", "Uso"], [["Windows", "propietaria", "PC"], ["macOS", "propietaria", "Apple"], ["Linux", "libre", "servidores, PC"], ["Android", "libre*", "móviles"], ["iOS", "propietaria", "iPhone"]], { t: "Sistemas operativos" }),
    },
    {
      h: "Gestión de archivos y mantenimiento",
      html: `<p>Un <b>archivo</b> es un conjunto de datos con nombre guardado en un soporte. Su <b>extensión</b> (.docx, .pdf, .jpg, .mp3) indica el formato y qué programa lo abre. Los archivos se organizan en <b>carpetas</b> o directorios dentro de una estructura en árbol. La <b>ruta</b> indica dónde está un archivo: <code>C:\\Usuarios\\Ana\\Documentos\\tic.odt</code> en Windows o <code>/home/ana/Documentos/tic.odt</code> en Linux. Una ruta es <b>absoluta</b> si empieza en la raíz y <b>relativa</b> si parte de la carpeta actual.</p>
      <p>El <b>sistema de archivos</b> es la forma en que el SO organiza los datos en el disco: NTFS (Windows), APFS (macOS), ext4 (Linux) o FAT32 y exFAT (memorias USB, compatibles con todos). FAT32 no admite archivos de más de 4 GB.</p>
      <p>Buenas prácticas de organización: nombres descriptivos y sin caracteres raros (<code>2026-11-tic-tema2.odt</code>), una estructura de carpetas lógica, no dejarlo todo en el escritorio y eliminar lo que no sirve.</p>
      <p>El <b>mantenimiento</b> mantiene el equipo rápido y seguro:</p>
      <ul><li>Instalar las <b>actualizaciones</b> del sistema y de los programas, que corrigen fallos de seguridad.</li>
      <li>Desinstalar programas innecesarios y controlar los que se inician al arrancar.</li>
      <li>Liberar espacio y, en discos HDD, <b>desfragmentar</b> (en SSD no es necesario).</li>
      <li>Hacer <b>copias de seguridad</b> periódicas y usar un antivirus.</li>
      <li>Limpiar el polvo y vigilar la temperatura.</li></ul>`,
      svg: B.flujo("Rutina de mantenimiento del ordenador", ["Actualizar sistema y programas", "Desinstalar lo innecesario", "Liberar espacio en disco", "Copia de seguridad", "Análisis antivirus"], { t: "Mantenimiento" }),
    },
  ],
  figura: {
    titulo: "Ideas clave del hardware y los sistemas operativos",
    items: [["Arquitectura", "CPU + memoria", "E/S y buses", "Von Neumann"], ["Binario", "2ⁿ valores", "1 byte = 8 bits", "1 kB = 1000 B"], ["Componentes", "CPU · RAM · SSD", "placa base", "y periféricos"], ["Sistema operativo", "kernel", "procesos, memoria", "archivos, E/S"]],
  },
  video: { id: "1C8x3nn-u_w", titulo: "Sistemas operativos: qué es, características, tipos y funciones", canal: "TecnoMáticas", vistas: 398347 },
  quiz: [
    ["El hardware es…", ["el conjunto de programas", "la parte física del ordenador", "el sistema operativo", "la nube"], 1, "Los componentes que se pueden tocar."],
    ["La idea clave de la arquitectura de Von Neumann es…", ["usar válvulas", "guardar programa y datos en la misma memoria", "no tener procesador", "usar el sistema decimal"], 1, "Así se cambia de programa cargando otro."],
    ["La ALU se encarga de…", ["coordinar los componentes", "hacer cálculos y comparaciones", "guardar archivos", "mostrar imágenes"], 1, "Unidad aritmético-lógica."],
    ["1101₂ en decimal es…", ["11", "13", "15", "1101"], 1, "8 + 4 + 0 + 1 = 13."],
    ["¿Cuántos valores distintos se representan con 8 bits?", ["8", "16", "255", "256"], 3, "2⁸ = 256 (de 0 a 255)."],
    ["Un byte son…", ["2 bits", "8 bits", "10 bits", "1024 bits"], 1, "Ocho bits."],
    ["Una conexión de 300 Mb/s descarga como máximo…", ["300 MB/s", "37,5 MB/s", "2400 MB/s", "3 MB/s"], 1, "300 / 8 = 37,5 MB/s."],
    ["El código que incluye los caracteres de todos los alfabetos es…", ["ASCII", "Unicode", "binario", "hexadecimal"], 1, "Su codificación más usada es UTF-8."],
    ["La cifra hexadecimal F equivale a…", ["15", "16", "1111 0000", "F no existe"], 0, "A = 10 … F = 15 (1111₂)."],
    ["La memoria RAM es…", ["no volátil", "volátil", "de solo lectura", "un disco"], 1, "Se borra al apagar el equipo."],
    ["La memoria caché está…", ["en la nube", "dentro del procesador", "en la impresora", "en el disco duro"], 1, "Es pequeña y muy rápida."],
    ["Frente a un HDD, un SSD es…", ["más lento", "más rápido y sin piezas móviles", "magnético", "óptico"], 1, "Usa memoria flash."],
    ["Una pantalla táctil es un periférico…", ["de entrada", "de salida", "mixto", "de almacenamiento"], 2, "Muestra imagen y recoge toques."],
    ["El programa que permite al SO comunicarse con un periférico es…", ["un controlador (driver)", "un compilador", "un navegador", "una macro"], 0, "Cada dispositivo necesita el suyo."],
    ["El conector reversible que transmite datos, vídeo y carga es…", ["VGA", "USB-C", "RJ45", "jack"], 1, "USB-C."],
    ["El software libre garantiza la libertad de…", ["usarlo solo en casa", "estudiar, modificar y distribuir el programa", "no pagar nunca", "usarlo sin sistema operativo"], 1, "Las cuatro libertades."],
    ["El núcleo del sistema operativo se llama…", ["kernel", "BIOS", "driver", "shell"], 0, "Tiene el control total del hardware."],
    ["¿Qué sistema operativo es libre?", ["Windows", "macOS", "GNU/Linux", "iOS"], 2, "Ubuntu, Debian, Fedora…"],
    ["/home/ana/doc.txt es una ruta…", ["relativa", "absoluta", "de red", "incorrecta"], 1, "Empieza en la raíz (/)."],
    ["¿Qué sistema de archivos no admite archivos mayores de 4 GB?", ["NTFS", "ext4", "FAT32", "APFS"], 2, "Por eso las memorias grandes usan exFAT."],
  ],
  examen: [
    ["Convierte 45₁₀ a binario.", ["101101", "110101", "100101", "101011"], 0, "32 + 8 + 4 + 1 = 45 → 101101."],
    ["Convierte 1010 1111₂ a hexadecimal.", ["AF", "FA", "A7", "175"], 0, "1010 = A; 1111 = F."],
    ["¿Cuántos bits hacen falta como mínimo para numerar 300 elementos?", ["8", "9", "10", "300"], 1, "2⁸ = 256 < 300 ≤ 512 = 2⁹."],
    ["Un disco de 2 TB (decimal) aparece en el sistema como aproximadamente…", ["2048 GiB", "1863 GiB", "2000 GiB", "1024 GiB"], 1, "2 · 10¹² / 2³⁰ ≈ 1863 GiB."],
    ["¿Cuánto tarda en descargarse un archivo de 3 GB con una conexión de 100 Mb/s (ideal)?", ["30 s", "4 min", "8 min", "24 s"], 1, "3000 MB · 8 = 24 000 Mb; 24 000 / 100 = 240 s = 4 min."],
    ["Una imagen de 1920 × 1080 píxeles con 24 bits por píxel sin comprimir ocupa…", ["2 MB", "≈ 6,2 MB", "≈ 50 MB", "24 MB"], 1, "1920 · 1080 · 3 bytes = 6 220 800 bytes."],
    ["Un equipo se ralentiza mucho al abrir varias aplicaciones y el disco trabaja sin parar. La mejora más eficaz es…", ["más RAM", "un monitor mayor", "un ratón inalámbrico", "otra impresora"], 0, "Falta RAM y usa memoria virtual en disco."],
    ["¿Qué función del SO reparte el tiempo de CPU entre los programas abiertos?", ["Gestión de archivos", "Gestión de procesos", "Gestión de dispositivos", "Interfaz"], 1, "Permite la multitarea."],
  ],
  feynman: ["Qué bloques tiene la arquitectura de Von Neumann y qué hace cada uno", "Cómo se pasa un número de decimal a binario y de binario a hexadecimal", "Por qué un disco de 1 TB aparece como 931 GB", "Qué diferencia hay entre RAM, ROM, caché y almacenamiento", "Qué es el software libre y en qué se diferencia del gratuito", "Qué funciones cumple un sistema operativo"],
  mapa: ["HARDWARE Y SISTEMAS OPERATIVOS", [["Información", "binario · hexadecimal · bytes"], ["Arquitectura", "CPU · memoria · buses"], ["Componentes", "placa · RAM · SSD · periféricos"], ["Software", "tipos · licencias · SO · archivos"]]],
  tarjetas: [
    ["Hardware y software", "Parte física y parte lógica (programas y datos) del ordenador."],
    ["Von Neumann", "CPU (UC + ALU), memoria con datos y programa, E/S y buses."],
    ["Ciclo de instrucción", "Buscar, decodificar, ejecutar y guardar el resultado."],
    ["Binario", "Base 2. Con n bits, 2ⁿ valores. 1101₂ = 13."],
    ["Hexadecimal", "Base 16 (0-9, A-F). Una cifra = 4 bits."],
    ["Unidades", "1 byte = 8 bits; kB = 1000 B; KiB = 1024 B."],
    ["Unicode y UTF-8", "Codifican los caracteres de todos los alfabetos."],
    ["Procesador", "Frecuencia (GHz), núcleos, hilos, caché y arquitectura (x86, ARM)."],
    ["Jerarquía de memoria", "Registros → caché → RAM → SSD → HDD/nube."],
    ["HDD frente a SSD", "Magnético y barato frente a flash, rápido y resistente."],
    ["Software libre", "Libertad de usar, estudiar, distribuir y mejorar."],
    ["Sistema operativo", "Gestiona procesos, memoria, archivos, dispositivos, seguridad e interfaz."],
  ],
  ejemplos: [
    ["Convierte 200₁₀ a binario y a hexadecimal.", ["Divisiones entre 2: 200→100 r0, 100→50 r0, 50→25 r0, 25→12 r1, 12→6 r0, 6→3 r0, 3→1 r1, 1→0 r1.", "Restos de abajo arriba: 11001000₂.", "Se agrupa en bloques de 4: 1100 | 1000 = C | 8."], "200₁₀ = 1100 1000₂ = C8₁₆."],
    ["Convierte 10110110₂ a decimal.", ["Pesos de izquierda a derecha: 128, 64, 32, 16, 8, 4, 2, 1.", "Bits a 1: 128 + 32 + 16 + 4 + 2.", "Suma: 182."], "10110110₂ = 182₁₀."],
    ["¿Cuántas fotos de 4,5 MB caben en una tarjeta de 64 GB? (decimal)", ["64 GB = 64 000 MB.", "64 000 / 4,5 = 14 222,2.", "Se redondea hacia abajo y se deja margen para el sistema de archivos."], "Unas 14 200 fotos."],
    ["Calcula el tiempo mínimo para subir un vídeo de 1,2 GB con una subida de 20 Mb/s.", ["Tamaño en megabits: 1,2 GB = 1200 MB = 9600 Mb.", "t = 9600 / 20 = 480 s.", "480 s = 8 min (en la práctica algo más, por la sobrecarga de la red)."], "Unos 8 minutos."],
    ["Elige un ordenador para una estudiante que editará vídeo 4K para un canal educativo, con un presupuesto medio.", ["Procesador: 8 núcleos o más, de generación reciente.", "RAM: 32 GB (16 GB es el mínimo para 4K).", "Almacenamiento: SSD NVMe de 1 TB para proyectos y un disco externo o nube para el archivo.", "Gráfica dedicada o integrada potente con aceleración de vídeo; monitor con buena reproducción del color."], "Equipo equilibrado centrado en CPU, RAM y SSD rápido, sin gastar en lo que no usará."],
    ["Escribe la ruta absoluta y la relativa del archivo «notas.ods», que está en /home/luis/instituto/tic, si el usuario se encuentra en /home/luis.", ["Ruta absoluta: parte de la raíz.", "Ruta relativa: parte de la carpeta actual (/home/luis).", "Se descienden las carpetas instituto y tic."], "Absoluta: /home/luis/instituto/tic/notas.ods. Relativa: instituto/tic/notas.ods."],
  ],
  errores: [
    "Confundir megabits (Mb) con megabytes (MB) al calcular velocidades de descarga.",
    "Pensar que el disco «ha perdido espacio» porque 1 TB aparece como 931 GB.",
    "Leer los restos de las divisiones entre 2 de arriba abajo al pasar a binario.",
    "Confundir la RAM (memoria de trabajo, volátil) con el almacenamiento (disco, permanente).",
    "Creer que software libre significa siempre gratuito, o que gratuito significa libre.",
    "Juzgar un procesador solo por sus gigahercios, sin tener en cuenta núcleos, caché y generación.",
  ],
  ejercicios: {
    b: [
      ["Define hardware y software y pon tres ejemplos de cada uno.", "Hardware: parte física (procesador, teclado, monitor). Software: programas y datos (sistema operativo, navegador, procesador de textos)."],
      ["Nombra los bloques de la arquitectura de Von Neumann.", "CPU (unidad de control y ALU con registros), memoria principal, unidades de entrada/salida y buses."],
      ["Convierte a decimal: 1010₂, 11111₂ y 100000₂.", "10, 31 y 32."],
      ["Convierte a binario: 9, 25 y 64.", "1001, 11001 y 1000000."],
      ["¿Cuántos valores distintos se pueden representar con 4, 10 y 16 bits?", "16, 1024 y 65 536."],
      ["¿Cuántos bits son 3 bytes? ¿Cuántos bytes son 1 kB y 1 KiB?", "24 bits. 1 kB = 1000 bytes; 1 KiB = 1024 bytes."],
      ["Clasifica como entrada, salida o mixto: escáner, altavoz, pantalla táctil, micrófono, impresora multifunción, proyector.", "Entrada: escáner, micrófono. Salida: altavoz, proyector. Mixtos: pantalla táctil, impresora multifunción."],
      ["Indica si son volátiles o no: RAM, memoria flash, ROM, caché.", "Volátiles: RAM y caché. No volátiles: flash y ROM."],
      ["Cita tres diferencias entre HDD y SSD.", "El SSD es más rápido, no tiene piezas móviles (silencioso y resistente a golpes) y es más caro por GB; el HDD es magnético, más lento y más barato."],
      ["¿Para qué sirve el firmware UEFI de la placa base?", "Comprueba el hardware al encender, permite configurarlo y arranca el gestor de arranque del sistema operativo."],
      ["Clasifica como software de sistema, de aplicación o de programación: Linux, un editor de fotos, un compilador de C, un controlador de impresora, un navegador.", "Sistema: Linux y el controlador. Aplicación: editor de fotos y navegador. Programación: compilador de C."],
      ["Nombra cinco funciones del sistema operativo.", "Gestión de procesos, de memoria, de archivos, de dispositivos, seguridad y usuarios e interfaz de usuario."],
    ],
    m: [
      ["Convierte 156₁₀ a binario y a hexadecimal.", "156 = 128 + 16 + 8 + 4 → 10011100₂. En grupos de 4: 1001 | 1100 = 9C₁₆."],
      ["Convierte 3F₁₆ y A0₁₆ a decimal y a binario.", "3F = 3·16 + 15 = 63 = 0011 1111₂. A0 = 10·16 = 160 = 1010 0000₂."],
      ["Suma en binario 1011 + 0110 y comprueba en decimal.", "1011 + 0110 = 10001₂. Comprobación: 11 + 6 = 17 = 10001₂."],
      ["¿Cuántos caracteres se podían codificar con el ASCII original de 7 bits? ¿Y con 8 bits?", "2⁷ = 128 caracteres; con 8 bits (ASCII extendido), 256."],
      ["Un disco anunciado de 500 GB, ¿cuántos GiB mostrará el sistema?", "500 · 10⁹ / 2³⁰ = 465,7 GiB."],
      ["Calcula cuánto ocupa 1 minuto de audio con calidad CD (44 100 muestras/s, 16 bits, estéreo) sin comprimir.", "44 100 · 16 · 2 = 1 411 200 bits/s. En 60 s: 84 672 000 bits = 10 584 000 bytes ≈ 10,6 MB."],
      ["Explica el principio de localidad y por qué hace eficaz la caché.", "Los programas tienden a reutilizar los mismos datos (localidad temporal) y a usar datos cercanos en memoria (localidad espacial). Si se guardan en la caché, la mayoría de los accesos se resuelven allí sin ir a la RAM, que es mucho más lenta."],
      ["Un SSD lee a 3000 MB/s y un HDD a 150 MB/s. ¿Cuánto tarda cada uno en leer un juego de 45 GB?", "SSD: 45 000 / 3000 = 15 s. HDD: 45 000 / 150 = 300 s = 5 min."],
      ["¿Qué características mirarías en un monitor para diseño gráfico? Justifica.", "Resolución alta (al menos QHD o 4K) para el detalle, buena reproducción del color (cobertura sRGB/Adobe RGB y calibración), panel IPS con buenos ángulos de visión y tamaño de 27 pulgadas o más."],
      ["Explica la diferencia entre software libre, freeware y shareware con un ejemplo.", "Libre: se puede usar, estudiar, modificar y distribuir (LibreOffice). Freeware: gratis pero sin acceso al código ni permiso para modificarlo (un lector de PDF gratuito). Shareware: versión de prueba limitada; después hay que pagar (un programa de compresión con prueba de 30 días)."],
      ["Describe los pasos del arranque de un ordenador.", "Al pulsar el botón, el firmware UEFI comprueba el hardware (POST), busca el dispositivo de arranque, carga el gestor de arranque, este carga el kernel en la RAM, el kernel inicia controladores y servicios y finalmente aparece la interfaz de inicio de sesión."],
      ["¿Qué ventaja tiene la línea de comandos sobre la interfaz gráfica? Pon un ejemplo.", "Permite automatizar tareas repetitivas y hacer operaciones masivas con una sola orden; por ejemplo, renombrar o copiar cientos de archivos de una vez, o hacerlo en un servidor remoto sin entorno gráfico."],
      ["Una memoria USB de 32 GB formateada en FAT32 no deja copiar una película de 6 GB aunque hay espacio. Explica por qué y cómo solucionarlo.", "FAT32 no admite archivos de más de 4 GB. Se soluciona formateando la memoria en exFAT (compatible con Windows, macOS y Linux) o NTFS, tras guardar su contenido."],
      ["Propón un sistema de nombres y carpetas para los trabajos de 1º de Bachillerato.", "Carpeta «1bach» con una subcarpeta por materia y dentro por trimestre; archivos con fecha y descripción: «2026-11-16_tic_tema2_resumen.odt». Sin espacios ni tildes, y una carpeta «entregados»."],
    ],
    a: [
      ["Representa −5 en complemento a dos con 8 bits.", "5 = 00000101. Se invierten los bits: 11111010. Se suma 1: 11111011. Así, −5 = 11111011."],
      ["Una imagen de 4000 × 3000 píxeles se guarda con 24 bits por píxel. ¿Cuánto ocupa sin comprimir? Si en JPEG ocupa 3,2 MB, ¿cuál es la relación de compresión?", "4000 · 3000 · 3 = 36 000 000 bytes = 36 MB. Relación: 36 / 3,2 ≈ 11,25 : 1."],
      ["Un procesador de 4 núcleos a 3,5 GHz ejecuta de media 4 instrucciones por ciclo en cada núcleo. ¿Cuántas instrucciones por segundo puede ejecutar como máximo?", "4 · 3,5 · 10⁹ · 4 = 5,6 · 10¹⁰ instrucciones por segundo (56 000 millones)."],
      ["Explica por qué en muchos lenguajes 0,1 + 0,2 no da exactamente 0,3.", "En coma flotante binaria, 0,1 y 0,2 no tienen representación exacta (como 1/3 en decimal, son periódicos en binario); se guardan con un pequeño redondeo y la suma da 0,30000000000000004. Por eso no se deben comparar números reales con == sino con una tolerancia."],
      ["Compara el coste por GB: un HDD de 4 TB cuesta 90 € y un SSD de 1 TB cuesta 70 €. ¿Qué proporción hay?", "HDD: 90 / 4000 = 0,0225 €/GB. SSD: 70 / 1000 = 0,07 €/GB. El SSD cuesta unas 3,1 veces más por GB."],
      ["Diseña la configuración de un ordenador para un aula de informática con un presupuesto ajustado y uso de ofimática, programación y navegación, justificando cada componente y el sistema operativo.", "Procesador de gama media de bajo consumo, 16 GB de RAM (navegador y entorno de programación a la vez), SSD de 512 GB, gráficos integrados, monitor Full HD de 24″ ajustable. SO: GNU/Linux (sin coste de licencias, seguro, con herramientas de programación) o el que exija la administración; prioridad a la reparabilidad y la eficiencia."],
      ["Un equipo tarda 2 minutos en arrancar. Propón un diagnóstico ordenado y soluciones.", "1) Ver los programas de inicio y desactivar los innecesarios. 2) Comprobar si el disco es HDD y si está casi lleno o con errores. 3) Revisar malware. 4) Comprobar la RAM ocupada al iniciar. Soluciones: limpiar el inicio, liberar espacio, cambiar a SSD (la mejora más notable), ampliar RAM y actualizar el sistema."],
      ["Calcula cuántas horas de vídeo Full HD a 5 Mb/s caben en un disco de 1 TB.", "1 TB = 8 · 10¹² bits. Por hora: 5 · 10⁶ · 3600 = 1,8 · 10¹⁰ bits. Horas = 8 · 10¹² / 1,8 · 10¹⁰ ≈ 444 h."],
      ["Investiga y explica por qué ARM está sustituyendo a x86 en muchos portátiles.", "ARM usa un conjunto de instrucciones reducido (RISC) y diseños muy eficientes desarrollados para móviles: ofrece gran rendimiento por vatio, más autonomía y menos calor, sin ventilador. Los sistemas operativos y programas se han adaptado o emulan x86, lo que facilita la transición."],
      ["Describe cómo instalarías Linux en una máquina virtual para probarlo sin modificar tu sistema.", "Descargar un programa de virtualización (VirtualBox) y la imagen ISO de una distribución; crear una máquina virtual asignando RAM (4 GB), procesadores y un disco virtual (25 GB); montar la ISO como unidad de arranque e instalar; el sistema anfitrión no se modifica y la máquina se puede borrar o guardar instantáneas."],
    ],
  },
  glosario: [
    ["Hardware", "Componentes físicos de un sistema informático."],
    ["Software", "Programas y datos que dirigen el funcionamiento del hardware."],
    ["CPU", "Unidad central de proceso: ejecuta las instrucciones."],
    ["ALU", "Unidad aritmético-lógica, que hace cálculos y comparaciones."],
    ["Bit", "Unidad mínima de información: 0 o 1."],
    ["Byte", "Conjunto de 8 bits."],
    ["Hexadecimal", "Sistema de numeración en base 16."],
    ["Unicode", "Estándar que codifica los caracteres de todas las escrituras."],
    ["Placa base", "Circuito principal al que se conectan los componentes."],
    ["RAM", "Memoria principal de trabajo, rápida y volátil."],
    ["Memoria caché", "Memoria pequeña y muy rápida junto al procesador."],
    ["SSD", "Almacenamiento de estado sólido basado en memoria flash."],
    ["Periférico", "Dispositivo de entrada, salida o mixto conectado al ordenador."],
    ["Controlador (driver)", "Programa que permite al sistema operativo manejar un dispositivo."],
    ["Software libre", "Software que puede usarse, estudiarse, modificarse y distribuirse."],
    ["Sistema operativo", "Software que gestiona el hardware y sirve de base a las aplicaciones."],
    ["Kernel", "Núcleo del sistema operativo."],
    ["Sistema de archivos", "Forma de organizar y guardar los archivos en un soporte."],
  ],
  situacion: {
    titulo: "Segunda vida para los ordenadores del instituto",
    reto: "El centro tiene ordenadores antiguos y lentos. Por equipos, diagnosticad su estado, proponed mejoras de bajo coste y preparad algunos equipos para donarlos a una asociación.",
    pasos: [
      "Haced un inventario de los componentes de cada equipo con las herramientas de información del sistema.",
      "Medid el tiempo de arranque y de apertura de programas antes de intervenir.",
      "Proponed mejoras (SSD, ampliación de RAM, limpieza, sistema operativo ligero) con su presupuesto.",
      "Aplicad las mejoras en un equipo piloto, instalando y configurando el sistema operativo elegido.",
      "Volved a medir los tiempos y comparad resultados en una tabla y un gráfico.",
      "Borrad de forma segura los datos y preparad una guía de uso para la asociación receptora.",
    ],
    producto: "Inventario técnico, informe de mejoras con presupuesto y mediciones, equipo restaurado y guía de uso.",
    evaluacion: [
      "El inventario identifica correctamente los componentes y sus características.",
      "Las mejoras propuestas están justificadas técnica y económicamente.",
      "La instalación y la configuración se realizan con seguridad y buenas prácticas.",
      "El informe interpreta los datos y valora el impacto ambiental de reutilizar equipos.",
    ],
  },
  familias: [
    "Mirad juntos las características del ordenador o móvil de casa (procesador, RAM, almacenamiento) y comentad para qué da.",
    "Si vais a comprar un equipo, pedidle que haga una comparativa razonada según el uso real.",
    "Revisad entre todos las actualizaciones pendientes y haced una copia de seguridad de las fotos familiares.",
    "Llevad los aparatos viejos a reparar o a reciclar en lugar de guardarlos en un cajón.",
  ],
  saberes: "Arquitectura de ordenadores y sistemas operativos: representación binaria y hexadecimal, unidades de información, codificación de textos, imágenes y sonido, componentes (placa base, procesador, memorias, almacenamiento, periféricos y conexiones), tipos de software y licencias, funciones y tipos de sistemas operativos, sistemas de archivos y mantenimiento (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Desmontar y volver a montar un ordenador viejo identificando cada componente.",
    "Juego por parejas de conversiones entre binario, decimal y hexadecimal con tarjetas.",
    "Instalar una distribución de Linux en una máquina virtual y comparar su interfaz con la del sistema habitual.",
    "Preparar comparativas de equipos con un presupuesto fijo y defenderlas ante la clase.",
  ],
  fuentes: [
    { t: "John von Neumann, Wikipedia en español", url: "https://es.wikipedia.org/wiki/John_von_Neumann" },
    { t: "Free Software Foundation: ¿Qué es el software libre?", url: "https://www.gnu.org/philosophy/free-sw.es.html" },
    { t: "The Unicode Consortium", url: "https://home.unicode.org/" },
  ],
});
