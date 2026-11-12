// Tecnología y Digitalización 2º ESO: el ordenador y sus componentes. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "El ordenador y sus componentes",
  minutos: 50,
  objetivos: ["Distinguir hardware y software y explicar cómo funciona un ordenador", "Identificar los componentes internos y su función", "Clasificar periféricos de entrada, salida y almacenamiento", "Usar las unidades de información y conocer los tipos de software"],
  claves: ["hardware", "software", "bit", "byte", "placa base", "procesador", "memoria RAM", "almacenamiento", "periférico", "sistema operativo", "aplicación", "software libre"],
  pregunta: {
    texto: "Un móvil, una consola, un reloj inteligente y el ordenador de clase parecen aparatos muy distintos. ¿Tienen algo en común por dentro?",
    respuesta: "Sí: todos son <b>ordenadores</b>. Todos tienen un <b>procesador</b> que ejecuta instrucciones, <b>memoria RAM</b> para trabajar, <b>almacenamiento</b> para guardar datos, dispositivos de <b>entrada y salida</b> (pantalla táctil, botones, altavoz) y un <b>sistema operativo</b>. Cambian el tamaño, la potencia y la forma, pero la arquitectura básica es la misma.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un ordenador?</h3><p>Un <mark>ordenador</mark> es una máquina electrónica que <b>recibe datos</b>, los <b>procesa</b> siguiendo las instrucciones de un programa, los <b>almacena</b> y <b>muestra resultados</b>. Todo lo que hace se puede resumir en este esquema: <b>entrada → proceso → salida</b>, con el almacenamiento para guardar la información. Por ejemplo, cuando escribes una letra en el teclado (entrada), el procesador la interpreta (proceso), aparece en la pantalla (salida) y, al guardar el documento, queda en el disco (almacenamiento). En un ordenador distinguimos dos partes que no pueden funcionar la una sin la otra. El <mark>hardware</mark> es la parte <b>física</b>, lo que se puede tocar: la carcasa, los chips, los cables, el teclado o la pantalla. El <mark>software</mark> es la parte <b>lógica</b>, los programas: las instrucciones que le dicen al hardware qué tiene que hacer.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de funcionamiento de un ordenador: entrada, proceso y salida, con almacenamiento debajo del proceso">${BG}
        ${caja(10, 40, 70, 46, "entrada", "var(--pen)", { size: 11 })}${caja(95, 40, 70, 46, "proceso", "var(--red)", { size: 11 })}${caja(180, 40, 70, 46, "salida", "var(--leaf)", { size: 11 })}
        ${fl(80, 63, 93, 63, "var(--ink)", 2)}${fl(165, 63, 178, 63, "var(--ink)", 2)}
        ${caja(85, 116, 90, 40, "almacenamiento", "#b8860b", { size: 10 })}<path d="M124 88 V 114 M136 114 V 88" stroke="var(--ink)" stroke-width="2"/>
        ${t(45, 104, "teclado", { size: 9, color: "var(--muted)" })}${t(215, 104, "pantalla", { size: 9, color: "var(--muted)" })}${t(130, 26, "CPU + RAM", { size: 9, color: "var(--muted)" })}</svg>`,
      video: { id: "gVaE2F0jOJs", titulo: "Hardware y software: ¿qué es el hardware?", canal: "El Salón de Informática", vistas: 551579 },
    },
    {
      html: `<h3>Bits y bytes: cómo guarda la información</h3><p>Un ordenador solo entiende dos estados eléctricos: <b>hay corriente o no hay corriente</b>, que representamos con <b>1 y 0</b>. Por eso se dice que trabaja en <mark>sistema binario</mark>. Cada uno de esos ceros o unos es un <mark>bit</mark>, la unidad mínima de información. Con 8 bits se forma un <mark>byte</mark>, que permite 256 combinaciones distintas, suficientes para representar una letra, un número o un signo. Por ejemplo, la letra A se guarda como 01000001. Todo lo que ves en un ordenador, ya sean textos, fotos, música o vídeos, son en el fondo millones de bits. Como los archivos son grandes, se usan múltiplos del byte. En informática cada unidad suele ser 1024 veces la anterior, aunque en el uso cotidiano y en la publicidad se redondea a 1000.</p>${tabla(["Unidad", "Equivale a", "Ejemplo"], [["1 bit", "0 o 1", "un interruptor"], ["1 byte (B)", "8 bits", "una letra"], ["1 kilobyte (KB)", "1024 B", "un texto corto"], ["1 megabyte (MB)", "1024 KB", "una foto, una canción"], ["1 gigabyte (GB)", "1024 MB", "una película"], ["1 terabyte (TB)", "1024 GB", "un disco duro grande"]])}`,
    },
    {
      html: `<h3>La placa base y el procesador</h3><p>Al abrir la caja de un ordenador lo primero que se ve es la <mark>placa base</mark>: una gran placa de circuito impreso en la que se conectan todos los demás componentes. Tiene zócalos para el procesador y la memoria, ranuras de expansión para tarjetas, conectores para los discos y la fuente de alimentación, y los puertos traseros (USB, red, sonido). Las pistas de cobre de la placa comunican unos componentes con otros. El <mark>procesador</mark> o <b>CPU</b> (unidad central de proceso) es el «cerebro» del ordenador: ejecuta las instrucciones de los programas y hace los cálculos. Es un chip de silicio con miles de millones de transistores diminutos. Su velocidad se mide en <b>gigahercios (GHz)</b>, es decir, miles de millones de operaciones por segundo, y los actuales tienen varios <b>núcleos</b>, como si fueran varios procesadores trabajando a la vez. Como se calienta mucho, lleva encima un <b>disipador</b> y un ventilador.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Placa base vista desde arriba con el procesador, los módulos de memoria RAM, una ranura para la tarjeta gráfica y los puertos">${BG}
        <rect x="20" y="16" width="220" height="150" rx="6" fill="#2f7d4f" fill-opacity=".85" stroke="var(--ink)" stroke-width="1.5"/>
        <rect x="40" y="34" width="54" height="54" rx="4" fill="#c9ccd3" stroke="var(--ink)"/>${t(67, 66, "CPU", { size: 12 })}
        ${[110, 120, 130, 140].map((x) => `<rect x="${x}" y="30" width="6" height="66" fill="#1d2a52"/>`).join("")}${t(128, 110, "RAM", { size: 10, color: "#fff" })}
        <rect x="40" y="124" width="130" height="10" fill="#1d1d1d"/>${t(105, 150, "ranura de tarjeta gráfica", { size: 9, color: "#fff" })}
        <rect x="190" y="30" width="36" height="60" rx="3" fill="#888" stroke="var(--ink)"/>${t(208, 104, "puertos", { size: 9, color: "#fff" })}
        <path d="M94 61 H 108" stroke="#e6c200" stroke-width="1.5"/></svg>`,
      video: { id: "d86ws7mQYIg", titulo: "¿Cómo funciona el hardware de una computadora?", canal: "Branch Education", vistas: 3982005 },
    },
    {
      html: `<h3>La memoria: RAM y ROM</h3><p>La <mark>memoria RAM</mark> es la <b>memoria de trabajo</b> del ordenador. Mientras usas un programa, el procesador carga en la RAM las instrucciones y los datos que necesita, porque desde ahí los lee muchísimo más rápido que desde el disco. Es <b>volátil</b>: cuando se apaga el ordenador, se borra todo lo que contiene. Por eso, si no guardas un documento y se va la luz, lo pierdes. Cuanta más RAM tiene un ordenador, más programas y pestañas puede tener abiertos a la vez sin ir lento; hoy lo habitual son 8 o 16 GB. La <mark>memoria ROM</mark> (memoria de solo lectura) es <b>permanente</b>: no se borra al apagar. Guarda el pequeño programa de arranque del ordenador (la BIOS o UEFI), que comprueba el hardware al encenderlo y carga el sistema operativo. Una forma de recordarlo: la RAM es como la mesa en la que trabajas y el disco es la estantería donde guardas los libros.</p>`,
    },
    {
      html: `<h3>El almacenamiento</h3><p>Los <mark>dispositivos de almacenamiento</mark> guardan la información de forma <b>permanente</b>, aunque se apague el ordenador: el sistema operativo, los programas y tus archivos. El <b>disco duro</b> (HDD) guarda los datos magnéticamente en discos que giran a gran velocidad; es barato y tiene mucha capacidad, pero es lento y delicado ante los golpes. La <b>unidad de estado sólido</b> (SSD) usa chips de memoria flash, sin piezas móviles: es mucho más rápida, silenciosa y resistente, y es la que llevan hoy casi todos los portátiles. La memoria flash también está en los <b>pendrives</b> y las <b>tarjetas de memoria</b> de cámaras y móviles. Por último, el <b>almacenamiento en la nube</b> guarda los archivos en servidores de internet, a los que puedes acceder desde cualquier dispositivo. Una buena costumbre es hacer <b>copias de seguridad</b> en dos sitios distintos.</p>`,
    },
    {
      html: `<h3>Otros componentes internos</h3><p>Además de la placa, el procesador, la memoria y el almacenamiento, un ordenador tiene otros componentes. La <mark>fuente de alimentación</mark> transforma la corriente alterna del enchufe (230 V) en corriente continua de pocos voltios que necesitan los componentes. En los portátiles y los móviles esta función la cumple el cargador, junto con una <b>batería</b>. La <mark>tarjeta gráfica</mark> (GPU) se encarga de calcular las imágenes que se ven en la pantalla; es fundamental para los videojuegos, la edición de vídeo y la inteligencia artificial. Puede ir integrada en el procesador o ser una tarjeta aparte. La <b>tarjeta de red</b> y la de <b>wifi</b> permiten conectarse a internet, y la <b>tarjeta de sonido</b> procesa el audio. El <b>sistema de refrigeración</b> (ventiladores, disipadores o líquido) evita que los componentes se calienten demasiado.</p>`,
    },
    {
      html: `<h3>Los periféricos</h3><p>Los <mark>periféricos</mark> son los dispositivos que se conectan al ordenador para comunicarse con él. Se clasifican según el sentido en que circula la información. Los <b>de entrada</b> introducen datos en el ordenador: teclado, ratón, micrófono, escáner, cámara web, lector de huellas o mando de juegos. Los <b>de salida</b> muestran o sacan los resultados: monitor, impresora, altavoces, auriculares o proyector. Los <b>de entrada y salida</b> hacen las dos cosas: la pantalla táctil, que muestra imágenes y recibe toques; los cascos con micrófono; o una impresora multifunción con escáner. Y los <b>de almacenamiento</b>, como el disco externo o el pendrive, guardan datos y también se consideran de entrada y salida. La mayoría se conectan por <b>USB</b>, aunque cada vez más lo hacen sin cables, por <b>Bluetooth</b> o wifi.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Periféricos: de entrada, como teclado y ratón; de salida, como monitor e impresora; de entrada y salida, como la pantalla táctil">${BG}
        ${caja(10, 20, 74, 34, "entrada", "var(--pen)", { size: 11 })}${caja(93, 20, 74, 34, "salida", "var(--leaf)", { size: 11 })}${caja(176, 20, 74, 34, "entrada/salida", "var(--red)", { size: 9.5 })}
        ${t(47, 76, "teclado", { size: 9.5 })}${t(47, 94, "ratón", { size: 9.5 })}${t(47, 112, "micrófono", { size: 9.5 })}${t(47, 130, "escáner", { size: 9.5 })}${t(47, 148, "cámara web", { size: 9.5 })}
        ${t(130, 76, "monitor", { size: 9.5 })}${t(130, 94, "impresora", { size: 9.5 })}${t(130, 112, "altavoces", { size: 9.5 })}${t(130, 130, "proyector", { size: 9.5 })}${t(130, 148, "auriculares", { size: 9.5 })}
        ${t(213, 76, "pantalla táctil", { size: 9.5 })}${t(213, 94, "multifunción", { size: 9.5 })}${t(213, 112, "cascos con mic.", { size: 9.5 })}${t(213, 130, "pendrive", { size: 9.5 })}${t(213, 148, "disco externo", { size: 9.5 })}</svg>`,
    },
    {
      html: `<h3>El software: sistema operativo y aplicaciones</h3><p>Sin software, el hardware no sirve para nada. El <mark>sistema operativo</mark> es el programa principal: se carga al encender el ordenador, controla el hardware, gestiona los archivos y la memoria, y permite que funcionen los demás programas. Muestra una interfaz gráfica con ventanas, iconos y menús para que lo usemos con facilidad. Los más usados en ordenadores son <b>Windows</b>, <b>macOS</b> y <b>Linux</b> (y ChromeOS en muchos centros educativos); en móviles, <b>Android</b> e <b>iOS</b>. Las <mark>aplicaciones</mark> son los programas que usamos para tareas concretas: procesadores de texto, hojas de cálculo, navegadores, editores de fotos, videojuegos o programas de programación como Scratch. Según su licencia, el software puede ser <b>propietario</b>, cuyo código está cerrado y suele ser de pago, o <b>libre</b>, que se puede usar, estudiar, modificar y compartir, como Linux, LibreOffice o GIMP.</p>`,
    },
    {
      html: `<h3>Elegir y cuidar un ordenador</h3><p>Para elegir un ordenador hay que pensar en <b>para qué se va a usar</b>. Para estudiar, navegar y hacer trabajos basta con un procesador sencillo, 8 GB de RAM y un SSD de 256 GB. Para editar vídeo o jugar hace falta más RAM y una buena tarjeta gráfica. En la ficha técnica conviene mirar: procesador, RAM, tipo y capacidad de almacenamiento, tamaño y resolución de pantalla, autonomía de la batería y peso. Para que dure: mantén el sistema operativo y los programas <b>actualizados</b>, usa un <b>antivirus</b>, no lo dejes al sol ni bloquees las rejillas de ventilación, y no comas ni bebas encima del teclado. Cuando ya no sirva, llévalo a un <b>punto limpio</b>: los aparatos electrónicos contienen metales valiosos y sustancias contaminantes que deben reciclarse correctamente.</p>`,
    },
  ],
  figura: {
    titulo: "Las partes de un ordenador",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Hardware: componentes internos como placa base, procesador, RAM, almacenamiento, fuente y gráfica, y periféricos de entrada, salida y entrada y salida. Software: sistema operativo y aplicaciones">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      <rect x="16" y="16" width="400" height="198" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>${t(216, 44, "HARDWARE (lo que se toca)", { size: 16, color: "var(--pen)", font: D })}
      ${t(116, 80, "Componentes internos", { size: 13, color: "var(--red)" })}${["placa base · procesador", "memoria RAM · ROM", "SSD · disco duro", "fuente · tarjeta gráfica"].map((s, i) => t(116, 108 + i * 24, s, { size: 12, weight: 400 })).join("")}
      ${t(316, 80, "Periféricos", { size: 13, color: "var(--leaf)" })}${["entrada: teclado, ratón", "salida: monitor, impresora", "E/S: pantalla táctil", "almacenamiento: pendrive"].map((s, i) => t(316, 108 + i * 24, s, { size: 12, weight: 400 })).join("")}
      <rect x="432" y="16" width="192" height="198" rx="14" fill="var(--card)" stroke="#b8860b" stroke-width="2.5"/>${t(528, 44, "SOFTWARE", { size: 16, color: "#b8860b", font: D })}${t(528, 62, "(los programas)", { size: 12, weight: 400 })}
      ${t(528, 100, "Sistema operativo", { size: 13 })}${t(528, 120, "Windows · Linux · Android", { size: 11, weight: 400 })}${t(528, 160, "Aplicaciones", { size: 13 })}${t(528, 180, "navegador · Scratch", { size: 11, weight: 400 })}
    </svg>`,
  },
  video: { id: "-1clqsilLQ0", titulo: "Explicación de los componentes de un PC", canal: "Alberto Gálvez", vistas: 1208179, megusta: 0, busqueda: "componentes del ordenador hardware software" },
  ejemplos: [
    { enunciado: "¿Cuántos bits tiene un archivo de 4 KB?",
      pasos: ["4 KB = 4 · 1024 = 4096 bytes.", "Cada byte son 8 bits.", "4096 · 8 = 32 768 bits."],
      resultado: "32 768 bits." },
    { enunciado: "Un pendrive de 32 GB. ¿Cuántas fotos de 4 MB caben aproximadamente?",
      pasos: ["32 GB = 32 · 1024 = 32 768 MB.", "32 768 / 4 = 8192.", "Unas 8000 fotos (algo menos por el espacio del sistema)."],
      resultado: "Unas 8000 fotos." },
    { enunciado: "Clasifica: impresora, micrófono, pantalla táctil, altavoz, escáner.",
      pasos: ["Entrada: micrófono, escáner.", "Salida: impresora, altavoz.", "Entrada y salida: pantalla táctil."],
      resultado: "2 de entrada, 2 de salida, 1 de E/S." },
  ],
  errores: [
    "Llamar «CPU» a toda la torre del ordenador: la CPU es solo el procesador.",
    "Confundir RAM y almacenamiento: la RAM es de trabajo y se borra al apagar.",
    "Pensar que un byte y un bit son lo mismo: 1 byte = 8 bits.",
    "Creer que el software libre es siempre gratis o de peor calidad: se refiere a la libertad de uso.",
    "Tirar los aparatos electrónicos a la basura normal en vez de al punto limpio.",
  ],
  ejercicios: [
    { q: "Define hardware y software y pon dos ejemplos de cada.", sol: "Hardware: parte física (teclado, procesador). Software: programas (Windows, navegador)." },
    { q: "¿Qué significa entrada, proceso y salida? Pon un ejemplo.", sol: "Recibir datos, procesarlos y mostrar el resultado: escribir en el teclado, el procesador lo interpreta y aparece en pantalla." },
    { q: "¿Cuántos bytes son 3 KB?", sol: "3 · 1024 = 3072 bytes." },
    { q: "Ordena de menor a mayor: 1 GB, 1 bit, 1 MB, 1 byte, 1 TB, 1 KB.", sol: "1 bit, 1 byte, 1 KB, 1 MB, 1 GB, 1 TB." },
    { q: "¿Qué función tiene la placa base?", sol: "Conectar y comunicar todos los componentes del ordenador." },
    { q: "¿Por qué se pierde un documento no guardado si se va la luz?", sol: "Porque estaba en la RAM, que es volátil." },
    { q: "Compara el disco duro (HDD) y el SSD.", sol: "El HDD es magnético, con discos que giran, barato y lento; el SSD es de memoria flash, sin piezas móviles, más rápido y resistente." },
    { q: "Clasifica: ratón, proyector, cascos con micrófono, cámara web, auriculares.", sol: "Entrada: ratón, cámara web. Salida: proyector, auriculares. E/S: cascos con micrófono." },
    { q: "¿Qué hace el sistema operativo? Nombra tres.", sol: "Controla el hardware y permite usar los programas: Windows, Linux, Android." },
    { q: "Explica qué es el software libre y nombra un ejemplo.", sol: "Software que se puede usar, estudiar, modificar y compartir: LibreOffice." },
  ],
  quiz: [
    { q: "El hardware es…", o: ["la parte física", "los programas", "internet"], a: 0, e: "Lo que se puede tocar." },
    { q: "Un byte tiene…", o: ["2 bits", "8 bits", "1024 bits"], a: 1, e: "8 bits." },
    { q: "El «cerebro» del ordenador es…", o: ["la RAM", "el procesador", "el disco"], a: 1, e: "La CPU." },
    { q: "La RAM es…", o: ["permanente", "volátil", "un periférico"], a: 1, e: "Se borra al apagar." },
    { q: "El SSD usa…", o: ["discos magnéticos", "memoria flash", "cintas"], a: 1, e: "Memoria flash." },
    { q: "Convierte 230 V en corriente continua…", o: ["la fuente de alimentación", "la gráfica", "la ROM"], a: 0, e: "La fuente." },
    { q: "El escáner es un periférico de…", o: ["entrada", "salida", "almacenamiento"], a: 0, e: "Entrada." },
    { q: "La pantalla táctil es de…", o: ["entrada", "salida", "entrada y salida"], a: 2, e: "Muestra y recibe." },
    { q: "Android es…", o: ["una aplicación", "un sistema operativo", "un procesador"], a: 1, e: "Sistema operativo." },
    { q: "La velocidad del procesador se mide en…", o: ["GB", "GHz", "W"], a: 1, e: "Gigahercios." },
  ],
  examen: [
    { q: "Lo que arranca el ordenador al encenderlo está en…", o: ["la ROM (BIOS/UEFI)", "la RAM", "el monitor"], a: 0, e: "Es permanente." },
    { q: "Para tener muchas pestañas abiertas sin que vaya lento, conviene más…", o: ["RAM", "pantalla", "altavoces"], a: 0, e: "Memoria de trabajo." },
    { q: "Un ordenador viejo se debe llevar a…", o: ["la basura", "un punto limpio", "el contenedor amarillo"], a: 1, e: "Para reciclarlo bien." },
  ],
  feynman: ["Qué diferencia hay entre hardware y software", "Para qué sirve la RAM y por qué se borra", "Cómo se clasifican los periféricos"],
  mapa: mapa("ORDENADOR", "var(--eso)", [
    ["Información", "bit · byte · KB · MB · GB", "#b8860b"],
    ["Componentes", "placa · CPU · RAM · SSD", "var(--red)"],
    ["Periféricos", "entrada · salida · E/S", "var(--leaf)"],
    ["Software", "sistema operativo · aplicaciones", "var(--pen)"],
  ], 280),
  tarjetas: [
    ["Hardware", "Parte física del ordenador."],
    ["Software", "Programas que dicen al hardware qué hacer."],
    ["Bit", "Unidad mínima de información: 0 o 1."],
    ["Byte", "8 bits."],
    ["Procesador (CPU)", "Ejecuta las instrucciones; se mide en GHz."],
    ["RAM", "Memoria de trabajo, volátil."],
    ["Periférico", "Dispositivo de entrada, salida o E/S."],
    ["Sistema operativo", "Programa principal que controla el ordenador."],
  ],
  familias: ["Mirad juntos la capacidad de almacenamiento y la RAM de vuestro móvil u ordenador.", "Haced una lista de los periféricos de casa y clasificadlos.", "Buscad el punto limpio más cercano para los aparatos viejos."],
  profesores: {
    saberes: "Digitalización del entorno personal de aprendizaje: dispositivos digitales, elementos del hardware y del software, sistemas operativos, periféricos y mantenimiento básico (RD 217/2022, Tecnología y Digitalización, bloque D).",
    ideas: ["Desmontaje guiado de un ordenador viejo para identificar componentes.", "Comparativa de fichas técnicas de tres portátiles con un presupuesto.", "Prueba de un sistema operativo libre en una memoria USB."],
  },
  fuentes: [RD, wiki("Computadora", "Computadora"), wiki("Hardware", "Hardware")],
  revisado: REV,
};
