// Tecnología y Digitalización 1º ESO: el ordenador, hardware y software. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: C,
  titulo: "El ordenador: hardware y software",
  minutos: 55,
  objetivos: ["Explicar cómo procesa información un ordenador: entrada, proceso, almacenamiento y salida", "Distinguir hardware y software y sus tipos", "Identificar los componentes internos y los periféricos", "Medir la información en bits y bytes y organizar los archivos en carpetas"],
  claves: ["ordenador", "hardware", "software", "periférico", "placa base", "procesador", "memoria RAM", "almacenamiento", "sistema operativo", "aplicación", "bit", "byte", "archivo", "carpeta", "software libre"],
  pregunta: {
    texto: "Tu móvil, la consola, el robot aspirador y el ordenador del aula parecen aparatos muy distintos. ¿Qué tienen en común por dentro?",
    respuesta: "Todos son <b>ordenadores</b>: tienen un <b>procesador</b> que ejecuta instrucciones, <b>memoria</b> para guardar datos, formas de <b>recibir información</b> (pantalla táctil, mando, sensores, teclado) y de <b>dar resultados</b> (pantalla, sonido, motores). Y todos funcionan gracias a <b>programas</b>. Cambia el aspecto y el uso, pero la idea básica es la misma: entrada, proceso, almacenamiento y salida de información.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un ordenador?</h3><p>Un <mark>ordenador</mark> es una máquina electrónica que <b>recibe datos, los procesa siguiendo las instrucciones de un programa, los almacena y ofrece resultados</b>. Es capaz de hacer millones de operaciones por segundo sin equivocarse, pero no «piensa» por sí mismo: solo hace lo que le indican los programas. Todo ordenador funciona en cuatro pasos. 1) <mark>Entrada</mark>: recibe los datos, por ejemplo cuando escribes con el teclado, haces clic con el ratón, hablas al micrófono o tocas la pantalla. 2) <mark>Proceso</mark>: el procesador realiza las operaciones necesarias con esos datos. 3) <mark>Almacenamiento</mark>: guarda los datos y los resultados, de forma temporal o permanente. 4) <mark>Salida</mark>: muestra los resultados, en la pantalla, por los altavoces, en papel con una impresora… Hoy hay ordenadores de muchos tipos: <b>de sobremesa</b>, <b>portátiles</b>, <b>tabletas</b>, <b>teléfonos inteligentes</b>, consolas, relojes inteligentes, y muchos ordenadores escondidos dentro de otros aparatos (coches, lavadoras, robots), que se llaman <b>sistemas integrados</b> o embebidos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema del funcionamiento de un ordenador: entrada, proceso, salida y almacenamiento debajo del proceso">${BG}
        ${cj(10, 46, 64, 40, "entrada", COL.verde, { size: 11 })}${cj(98, 46, 64, 40, "proceso", COL.azul, { size: 11 })}${cj(186, 46, 64, 40, "salida", COL.naranja, { size: 11 })}
        ${cj(90, 116, 80, 40, "almacenamiento", COL.morado, { size: 10 })}
        ${fl(74, 66, 96, 66, "var(--ink)", 2)}${fl(162, 66, 184, 66, "var(--ink)", 2)}${fl(124, 86, 124, 114, "var(--ink)", 1.8)}${fl(136, 114, 136, 88, "var(--ink)", 1.8)}
        ${t(42, 104, "teclado, ratón", { size: 8.5, weight: 400, color: "var(--muted)" })}${t(218, 104, "pantalla, altavoz", { size: 8.5, weight: 400, color: "var(--muted)" })}${t(130, 34, "procesador", { size: 8.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "oYxE3L-6-a8", titulo: "Microaprendizaje: ¿Cómo funciona una computadora?", canal: "Educar Portal", vistas: 499384 },
    },
    {
      html: `<h3>Hardware y software</h3><p>En un ordenador hay dos partes que se necesitan mutuamente. El <mark>hardware</mark> es la parte <b>física</b>, todo lo que se puede tocar: la caja, la placa base, el procesador, la memoria, la pantalla, el teclado, los cables… El <mark>software</mark> es la parte <b>lógica</b>, que no se puede tocar: los <b>programas</b>, es decir, los conjuntos de instrucciones que le dicen al hardware lo que tiene que hacer, y los datos con los que trabajan. Una comparación sencilla: el hardware sería como el cuerpo de un músico y su instrumento, y el software, la partitura y lo que sabe tocar. Sin software, el hardware es una caja inútil; y sin hardware, el software no tiene dónde ejecutarse. Algunos programas vienen grabados de fábrica en el propio hardware para ponerlo en marcha (el <b>firmware</b>), como el que arranca el ordenador al encenderlo o el que hace funcionar un router.</p>`,
      video: { id: "3F-kuNGlNco", titulo: "Qué es software y qué es hardware", canal: "LearnFree en Español", vistas: 592327 },
    },
    {
      html: `<h3>Los componentes internos</h3><p>Dentro de la caja de un ordenador de sobremesa hay varios componentes. La <mark>placa base</mark> es una gran placa de circuito impreso a la que se conectan todos los demás componentes y que los comunica entre sí. El <mark>procesador</mark> o CPU (unidad central de procesamiento) es el «cerebro»: un pequeño chip que ejecuta las instrucciones de los programas y hace los cálculos; su velocidad se mide en gigahercios (GHz) y suele tener varios <b>núcleos</b> que trabajan a la vez. Como se calienta mucho, lleva encima un <b>disipador</b> y un ventilador. La <mark>memoria RAM</mark> es la memoria de trabajo: guarda los programas y los datos que se están usando en ese momento; es muy rápida, pero <b>se borra al apagar</b> el ordenador. El <mark>almacenamiento</mark> guarda la información de forma permanente aunque se apague: el <b>disco duro</b> (HDD), con discos magnéticos que giran, o el <b>disco SSD</b>, sin piezas móviles, mucho más rápido. La <b>tarjeta gráfica</b> procesa las imágenes que se ven en la pantalla, la <b>fuente de alimentación</b> transforma la corriente del enchufe en la que necesitan los componentes, y las <b>tarjetas de red</b> conectan con Internet por cable o wifi.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Placa base con el procesador, los módulos de memoria RAM, la tarjeta gráfica, el disco SSD y la fuente de alimentación">${BG}
        <rect x="14" y="16" width="232" height="150" rx="6" fill="#dcfce7" stroke="var(--leaf)" stroke-width="2"/>
        ${cj(30, 30, 56, 46, "CPU", COL.azul, { size: 12 })}
        ${[0, 1, 2].map((i) => `<rect x="${102 + i * 12}" y="26" width="7" height="58" fill="#1e293b"/>`).join("")}${t(118, 96, "RAM", { size: 10 })}
        ${cj(150, 30, 84, 26, "fuente", COL.gris, { size: 10 })}
        ${cj(30, 108, 120, 22, "tarjeta gráfica", COL.morado, { size: 10 })}
        ${cj(170, 100, 64, 36, "SSD", COL.naranja, { size: 11 })}
        ${t(130, 154, "placa base", { size: 10.5, color: COL.verde })}</svg>`,
    },
    {
      html: `<h3>Los periféricos</h3><p>Los <mark>periféricos</mark> son los dispositivos que se conectan al ordenador, normalmente desde fuera, para comunicarse con él. Se clasifican según la dirección de la información. Los <b>periféricos de entrada</b> introducen datos en el ordenador: teclado, ratón, micrófono, cámara web, escáner, lector de códigos, mando de juegos. Los <b>periféricos de salida</b> muestran o sacan los resultados: monitor, altavoces, auriculares, impresora, proyector. Los <b>periféricos de entrada y salida</b> hacen las dos cosas: la <b>pantalla táctil</b>, una impresora multifunción que también escanea, unos auriculares con micrófono o un casco de realidad virtual. Y los <b>periféricos de almacenamiento</b> guardan la información para llevarla de un sitio a otro o hacer copias: <b>memorias USB</b>, discos duros externos y tarjetas de memoria. Se conectan al ordenador mediante <b>puertos</b> (USB, HDMI para vídeo, conector de auriculares, de red) o de forma inalámbrica (wifi, Bluetooth).</p>${tabla(["Tipo", "Para qué", "Ejemplos"], [["Entrada", "introducir datos", "teclado, ratón, micrófono, cámara"], ["Salida", "mostrar resultados", "monitor, altavoces, impresora"], ["Entrada y salida", "las dos cosas", "pantalla táctil, multifunción"], ["Almacenamiento", "guardar y transportar", "memoria USB, disco externo"]])}`,
    },
    {
      html: `<h3>El software: sistema operativo y aplicaciones</h3><p>Hay dos grandes tipos de software. El <mark>sistema operativo</mark> es el programa principal, que se pone en marcha al encender el ordenador y lo gestiona todo: controla el hardware, organiza los archivos, permite instalar y abrir otros programas y ofrece una forma cómoda de usar el ordenador, con ventanas, iconos y menús (la <b>interfaz gráfica</b>). Los más conocidos son <b>Windows</b>, <b>macOS</b> y <b>Linux</b> en ordenadores, y <b>Android</b> e <b>iOS</b> en móviles y tabletas. Las <mark>aplicaciones</mark> o programas de aplicación sirven para hacer tareas concretas: procesadores de textos, hojas de cálculo, presentaciones, navegadores web, programas de dibujo, de edición de vídeo o de música, juegos, programas educativos… Según cómo se puede usar, el software puede ser <mark>software libre</mark>, que se puede usar, estudiar, modificar y compartir libremente (como Linux, LibreOffice, GIMP o Scratch), o <b>software propietario</b>, cuyo código está cerrado y que normalmente hay que pagar o aceptar condiciones de uso (licencia). Que algo sea gratis no significa que sea libre.</p>`,
      video: { id: "vnJCudAed08", titulo: "Microaprendizaje: ¿Qué es un sistema operativo?", canal: "Educar Portal", vistas: 139621 },
    },
    {
      html: `<h3>Cómo se mide la información</h3><p>Los ordenadores solo entienden dos estados: hay corriente o no hay corriente, que se representan con los números <b>1 y 0</b>. Por eso usan el <mark>sistema binario</mark>. Cada uno de esos ceros o unos es un <mark>bit</mark>, la unidad más pequeña de información. Un grupo de 8 bits forma un <mark>byte</mark>, que es lo que ocupa más o menos una letra o un número. Como un byte es muy poca información, se usan múltiplos: un <b>kilobyte (KB)</b> son unos mil bytes (una página de texto ocupa unos pocos KB); un <b>megabyte (MB)</b> son unos mil KB (una foto del móvil ocupa unos pocos MB, y una canción, unos 4 MB); un <b>gigabyte (GB)</b> son unos mil MB (una película ocupa unos pocos GB); y un <b>terabyte (TB)</b> son unos mil GB (un disco duro grande). En realidad, cada múltiplo es 1.024 veces el anterior, porque se basan en potencias de 2, pero para hacer cálculos aproximados se puede usar 1.000. Todo, textos, fotos, vídeos y música, se guarda en el ordenador como largas cadenas de ceros y unos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escalera de unidades: bit, byte de 8 bits, kilobyte, megabyte, gigabyte y terabyte, cada uno unas mil veces el anterior">${BG}
        ${[["bit", "0 o 1"], ["byte", "8 bits"], ["KB", "un texto"], ["MB", "una foto"], ["GB", "una película"], ["TB", "un disco"]].map(([u, e], i) => {
          const x = 10 + i * 41, h = 22 + i * 18, y = 150 - h;
          return `<rect x="${x}" y="${y}" width="36" height="${h}" rx="4" fill="var(--pen)" opacity="${0.25 + i * 0.12}"/>${t(x + 18, y + 16, u, { size: 11, color: "#fff" })}${et(x + 18, 166, e, 40, { size: 9, weight: 400, color: "var(--muted)" })}`;
        }).join("")}
        ${t(16, 30, "× 1.000 en cada escalón", { size: 10, color: COL.azul, anchor: "start" })}</svg>`,
    },
    {
      html: `<h3>Archivos y carpetas</h3><p>La información se guarda en el ordenador en <mark>archivos</mark> o ficheros: cada documento, foto, canción o programa es un archivo. Cada archivo tiene un <b>nombre</b> y una <b>extensión</b>, unas letras detrás de un punto que indican qué tipo de archivo es y con qué programa se abre: <b>.txt</b> o <b>.odt</b> o <b>.docx</b> (textos), <b>.jpg</b> o <b>.png</b> (imágenes), <b>.mp3</b> (sonido), <b>.mp4</b> (vídeo), <b>.pdf</b> (documentos para leer o imprimir), <b>.sb3</b> (proyectos de Scratch). Para no perderse, los archivos se organizan en <mark>carpetas</mark> o directorios, que pueden contener otros archivos y otras carpetas, formando una estructura en <b>árbol</b>. Por ejemplo: una carpeta «Tecnología», con dentro las carpetas «Apuntes», «Proyecto comedero» y «Fotos». Conviene usar <b>nombres claros</b> (no «documento1»), sin caracteres raros, y hacer <b>copias de seguridad</b> de los archivos importantes en una memoria USB o en la nube, porque los discos se pueden estropear.</p>`,
    },
    {
      html: `<h3>Un uso responsable del ordenador</h3><p>Usar bien el ordenador también implica cuidarlo y cuidarse. Hay que <b>apagarlo correctamente</b> desde el sistema operativo, no tirando del cable, para no perder datos. Conviene mantener el sistema y los programas <b>actualizados</b>, porque las actualizaciones corrigen errores y fallos de seguridad, y tener un <b>antivirus</b> activo. Solo hay que instalar programas de <b>fuentes de confianza</b>. Para la salud, es importante mantener una <b>buena postura</b> (espalda recta, pantalla a la altura de los ojos y a un brazo de distancia), hacer <b>descansos</b> frecuentes para mover el cuerpo y relajar la vista, y no usar pantallas justo antes de dormir. Y para el planeta: cuando un aparato se estropea, primero se intenta <b>reparar</b>; si ya no sirve, se lleva a un <b>punto limpio</b>, porque los residuos electrónicos contienen metales valiosos que se pueden recuperar y sustancias contaminantes que no deben acabar en la basura.</p>`,
    },
  ],
  figura: {
    titulo: "El ordenador en ocho ideas",
    svg: rejilla([
      ["Hardware", "parte física, se toca", COL.azul],
      ["Software", "programas y datos", COL.morado],
      ["CPU", "procesa las instrucciones", COL.rojo],
      ["RAM", "memoria de trabajo, se borra", COL.naranja],
      ["SSD / disco", "guarda permanente", COL.marron],
      ["Periféricos", "entrada, salida, almacenar", COL.verde],
      ["Sistema operativo", "gestiona el ordenador", COL.agua],
      ["Byte", "8 bits: KB, MB, GB, TB", COL.gris],
    ], 4, 86, "Resumen: hardware, software, procesador, memoria, almacenamiento, periféricos, sistema operativo y unidades"),
  },
  video: { id: "6DcGWI7Z3XE", titulo: "Hardware y software: qué son y diferencias", canal: "Te Lo Explico", vistas: 152622, megusta: 0, busqueda: "el ordenador hardware y software" },
  ejemplos: [
    { enunciado: "Clasifica estos periféricos: micrófono, impresora, pantalla táctil, memoria USB, cámara web, altavoces.",
      pasos: ["Entrada: micrófono, cámara web.", "Salida: impresora, altavoces.", "Entrada y salida: pantalla táctil.", "Almacenamiento: memoria USB."],
      resultado: "2 de entrada, 2 de salida, 1 mixto y 1 de almacenamiento." },
    { enunciado: "Una memoria USB tiene 16 GB. ¿Cuántas fotos de 4 MB caben aproximadamente (usa 1 GB ≈ 1.000 MB)?",
      pasos: ["16 GB ≈ 16 × 1.000 = 16.000 MB.", "16.000 ÷ 4 = 4.000."],
      resultado: "Unas 4.000 fotos." },
    { enunciado: "Estás escribiendo un trabajo y se va la luz antes de guardar. Al volver a encenderlo, el trabajo ha desaparecido. ¿Por qué?",
      pasos: ["Mientras se escribe, el documento está en la memoria RAM.", "La RAM se borra al apagarse.", "Solo al guardar se copia al disco o SSD, que es permanente."],
      resultado: "Estaba solo en la RAM: hay que guardar a menudo." },
  ],
  errores: [
    "Confundir la memoria RAM (temporal) con el almacenamiento (permanente).",
    "Llamar «CPU» a toda la caja del ordenador: la CPU es el procesador.",
    "Pensar que software libre significa solo gratuito.",
    "Confundir bit y byte: un byte son 8 bits.",
    "Creer que el ordenador piensa: solo ejecuta las instrucciones de los programas.",
  ],
  ejercicios: [
    { q: "Escribe las cuatro funciones básicas de un ordenador.", sol: "Entrada, proceso, almacenamiento y salida de información." },
    { q: "Diferencia entre hardware y software con dos ejemplos de cada uno.", sol: "Hardware es lo físico (teclado, procesador); software, los programas (navegador, sistema operativo)." },
    { q: "¿Qué hace el procesador?", sol: "Ejecuta las instrucciones de los programas y hace los cálculos." },
    { q: "Diferencia entre RAM y disco SSD.", sol: "La RAM es la memoria de trabajo, rápida y temporal; el SSD guarda la información de forma permanente." },
    { q: "Pon dos ejemplos de periféricos de entrada y dos de salida.", sol: "Entrada: teclado, ratón. Salida: monitor, impresora." },
    { q: "¿Para qué sirve el sistema operativo? Nombra tres.", sol: "Para gestionar el hardware, los archivos y los programas; Windows, Linux, Android." },
    { q: "¿Qué es el software libre? Pon un ejemplo.", sol: "El que se puede usar, estudiar, modificar y compartir libremente; LibreOffice." },
    { q: "¿Cuántos bits tiene un byte? ¿Cuántos MB tiene aproximadamente 1 GB?", sol: "8 bits; unos 1.000 MB." },
    { q: "¿Qué indica la extensión de un archivo? Pon tres ejemplos.", sol: "El tipo de archivo: .jpg (imagen), .mp3 (sonido), .pdf (documento)." },
    { q: "Escribe tres consejos para un uso saludable del ordenador.", sol: "Buena postura, descansos frecuentes y no usar pantallas antes de dormir." },
  ],
  quiz: [
    { q: "El «cerebro» del ordenador es…", o: ["el procesador", "la RAM", "el monitor"], a: 0, e: "CPU." },
    { q: "La memoria que se borra al apagar es…", o: ["la RAM", "el SSD", "la memoria USB"], a: 0, e: "RAM." },
    { q: "Un teclado es un periférico de…", o: ["entrada", "salida", "almacenamiento"], a: 0, e: "Entrada." },
    { q: "Un sistema operativo es…", o: ["Linux", "un ratón", "un procesador de textos"], a: 0, e: "Linux." },
    { q: "Un byte tiene…", o: ["8 bits", "2 bits", "1.000 bits"], a: 0, e: "8 bits." },
    { q: "La parte que se puede tocar es el…", o: ["hardware", "software", "firmware"], a: 0, e: "Hardware." },
    { q: "Una canción en .mp3 ocupa unos…", o: ["4 MB", "4 TB", "4 bits"], a: 0, e: "Unos MB." },
    { q: "La placa que conecta todos los componentes es la…", o: ["placa base", "tarjeta gráfica", "fuente"], a: 0, e: "Placa base." },
    { q: "Una pantalla táctil es de…", o: ["entrada y salida", "solo salida", "almacenamiento"], a: 0, e: "Las dos." },
    { q: "Los aparatos electrónicos viejos se llevan…", o: ["al punto limpio", "al contenedor amarillo", "a la basura"], a: 0, e: "Punto limpio." },
  ],
  examen: [
    { q: "El software que se puede estudiar y modificar es…", o: ["libre", "propietario", "firmware"], a: 0, e: "Libre." },
    { q: "Para conectar un monitor se usa a menudo el puerto…", o: ["HDMI", "de auriculares", "de red"], a: 0, e: "HDMI." },
    { q: "Un robot aspirador lleva un ordenador…", o: ["integrado", "de sobremesa", "portátil"], a: 0, e: "Sistema integrado." },
  ],
  feynman: ["Cómo procesa un ordenador la información, de la entrada a la salida", "Qué diferencia hay entre la RAM y el almacenamiento", "Por qué un byte son 8 bits y cómo se miden los archivos"],
  mapa: mapa("ORDENADOR", "var(--eso)", [
    ["Funciones", "entrada · proceso · salida", COL.azul],
    ["Hardware", "CPU · RAM · disco · periféricos", COL.rojo],
    ["Software", "sistema operativo · aplicaciones", COL.morado],
    ["Información", "bits · bytes · archivos", COL.verde],
  ], 300),
  tarjetas: [
    ["Hardware", "Parte física del ordenador."],
    ["Software", "Programas que dicen al hardware qué hacer."],
    ["Procesador (CPU)", "Chip que ejecuta las instrucciones."],
    ["Memoria RAM", "Memoria de trabajo que se borra al apagar."],
    ["Periférico", "Dispositivo que se conecta para comunicarse con el ordenador."],
    ["Sistema operativo", "Programa que gestiona el ordenador: Windows, Linux, Android."],
    ["Bit", "Unidad mínima de información: 0 o 1."],
    ["Byte", "Grupo de 8 bits."],
  ],
  familias: ["Mirad juntos en la configuración del móvil cuánta memoria tiene y cuánto ocupan las fotos.", "Organizad en carpetas con nombres claros las fotos familiares del ordenador.", "Haced una copia de seguridad de los archivos importantes de casa."],
  profesores: {
    saberes: "Dispositivos digitales: funcionamiento del ordenador, hardware (componentes internos y periféricos), software (sistema operativo, aplicaciones, software libre), unidades de información, archivos y carpetas, uso saludable y gestión de residuos electrónicos (RD 217/2022, Tecnología y Digitalización, bloque Digitalización del entorno personal de aprendizaje).",
    ideas: ["Desmontaje guiado de un ordenador viejo para identificar sus componentes.", "Juego de clasificación de periféricos con tarjetas.", "Escribir el nombre propio en binario con el código ASCII."],
  },
  fuentes: [RD, wiki("Computadora", "Computadora"), wiki("Software libre", "Software_libre"), { t: "INTEF: competencia digital", url: "https://intef.es/" }],
  revisado: REV,
};
