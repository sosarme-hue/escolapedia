// Tecnología y Digitalización 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Tecnología y Digitalización",
  curso: "3-eso",
  titulo: "Herramientas digitales y trabajo colaborativo",
  minutos: 55,
  objetivos: ["Conocer los componentes de un sistema informático y organizar archivos de forma eficaz", "Usar aplicaciones ofimáticas y en la nube para crear documentos, hojas de cálculo y presentaciones", "Trabajar en equipo con herramientas colaborativas: documentos compartidos, comunicación y gestión de tareas", "Respetar la propiedad intelectual y usar licencias Creative Commons"],
  claves: ["hardware", "software", "nube", "ofimática", "documento compartido", "hoja de cálculo", "Creative Commons", "derechos de autor"],
  pregunta: {
    texto: "Cinco compañeros escriben a la vez el mismo trabajo, cada uno desde su casa, y ninguno pisa el texto de los demás. ¿Cómo es posible?",
    respuesta: "Porque el documento no está en ningún ordenador concreto, sino en <mark>la nube</mark>: en un servidor de internet. Las <b>herramientas colaborativas</b> envían cada cambio al servidor al instante y lo muestran a todos, con el cursor de cada persona en un color. Además guardan el <b>historial de versiones</b>, así que se puede ver quién escribió cada parte y recuperar versiones anteriores.",
  },
  bloques: [
    {
      html: `<h3>El sistema informático</h3><p>Un <mark>sistema informático</mark> está formado por <b>hardware</b>, la parte física (lo que se puede tocar), y <b>software</b>, los programas (las instrucciones). El hardware incluye la <b>unidad central de proceso (CPU)</b>, que ejecuta las instrucciones; la <b>memoria RAM</b>, que guarda temporalmente lo que se está usando y se borra al apagar; el <b>almacenamiento</b> (discos SSD o duros), que guarda archivos de forma permanente; y los <b>periféricos</b>: de <b>entrada</b> (teclado, ratón, micrófono, cámara), de <b>salida</b> (pantalla, altavoces, impresora) y de <b>entrada/salida</b> (pantalla táctil, memoria USB). El software se divide en <b>sistema operativo</b> (Windows, macOS, Linux, Android, iOS), que gestiona el equipo, y <b>aplicaciones</b>, que sirven para tareas concretas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de un ordenador: periféricos de entrada envían datos a la CPU con memoria y almacenamiento, y la CPU envía resultados a los periféricos de salida">${BG}
        ${caja(14, 66, 64, 44, "entrada", "var(--leaf)", { size: 10 })}${caja(98, 50, 64, 76, "CPU", "var(--pen)", { size: 12 })}${caja(182, 66, 64, 44, "salida", "var(--red)", { size: 10 })}
        ${fl(78, 88, 96, 88, "var(--ink)", 2)}${fl(162, 88, 180, 88, "var(--ink)", 2)}
        ${caja(98, 140, 64, 26, "RAM · disco", "#b8860b", { size: 9 })}<path d="M124 126 V 138 M136 138 V 126" stroke="var(--ink)" stroke-width="1.5"/>
        ${t(46, 52, "teclado, ratón", { size: 9, color: "var(--leaf)" })}${t(214, 52, "pantalla, altavoz", { size: 9, color: "var(--red)" })}${t(130, 34, "procesa", { size: 10, color: "var(--pen)" })}</svg>`,
    },
    {
      html: `<h3>Archivos y carpetas</h3><p>La información se guarda en <mark>archivos</mark> o ficheros. Cada archivo tiene un <b>nombre</b> y una <b>extensión</b>, después del punto, que indica su tipo y el programa que lo abre: <b>.docx</b> u <b>.odt</b> (texto), <b>.xlsx</b> u <b>.ods</b> (hoja de cálculo), <b>.pptx</b> u <b>.odp</b> (presentación), <b>.pdf</b> (documento para leer o imprimir), <b>.jpg</b> o <b>.png</b> (imagen), <b>.mp3</b> (audio), <b>.mp4</b> (vídeo) o <b>.zip</b> (comprimido). Los archivos se organizan en <b>carpetas</b> dentro de otras carpetas, formando un árbol. Un buen sistema de organización ahorra mucho tiempo: carpetas por materia y por trimestre, y nombres claros con fecha, como <i>2026-11-tecnologia-proyecto-v2</i>. El tamaño se mide en <b>bytes</b>: kilobytes (KB), megabytes (MB), gigabytes (GB) y terabytes (TB).</p>${tabla(["Extensión", "Tipo de archivo"], [[".docx / .odt", "documento de texto"], [".xlsx / .ods", "hoja de cálculo"], [".pptx / .odp", "presentación"], [".pdf", "documento para leer o imprimir"], [".jpg / .png", "imagen"], [".mp4", "vídeo"]])}`,
    },
    {
      html: `<h3>La nube</h3><p>La <mark>nube</mark> (<i>cloud</i>) es el conjunto de servicios que funcionan en <b>servidores de internet</b> en lugar de en nuestro dispositivo. Permite <b>almacenar archivos</b> (Google Drive, OneDrive, Dropbox, iCloud) y usar <b>aplicaciones</b> desde el navegador sin instalarlas. Sus ventajas son: acceder a los archivos desde cualquier dispositivo y lugar; tener <b>copias de seguridad</b> automáticas si se rompe o se pierde el móvil; <b>compartir</b> archivos con un enlace en lugar de enviarlos por correo; y <b>trabajar a la vez</b> en el mismo documento. Sus inconvenientes: hace falta conexión a internet, el espacio gratuito es limitado y nuestros datos quedan en manos de una empresa, así que hay que proteger bien la cuenta con una contraseña segura y verificación en dos pasos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una nube con servidores conectada a un portátil, un móvil y una tableta que acceden a los mismos archivos">${BG}
        <path d="M80 70 a 24 24 0 0 1 30 -30 a 30 30 0 0 1 52 6 a 22 22 0 0 1 18 38 H 84 a 18 18 0 0 1 -4 -14 Z" fill="var(--pen)" fill-opacity=".15" stroke="var(--pen)" stroke-width="2.5"/>${t(132, 70, "la nube", { size: 12, color: "var(--pen)" })}
        <rect x="24" y="130" width="44" height="28" rx="3" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><rect x="118" y="128" width="22" height="36" rx="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/><rect x="190" y="128" width="40" height="32" rx="4" fill="var(--paper)" stroke="var(--ink)" stroke-width="2"/>
        ${fl(70, 92, 52, 126, "var(--leaf)", 2)}${fl(129, 92, 129, 124, "var(--leaf)", 2)}${fl(186, 92, 206, 124, "var(--leaf)", 2)}
        ${t(130, 175, "mismos archivos en todos", { size: 9, color: "var(--muted)" })}</svg>`,
      video: { id: "RbMyNAufitE", titulo: "Cómo usar Google drive para trabajo colaborativo", canal: "Herramientas Virtuales", vistas: 21101 },
    },
    {
      html: `<h3>Procesadores de texto y presentaciones</h3><p>Las aplicaciones de <mark>ofimática</mark> son las que se usan para el trabajo de oficina y de estudio. Hay paquetes <b>de pago</b>, como Microsoft 365, <b>gratuitos en la nube</b>, como Google Docs, y <b>libres</b>, como LibreOffice. El <b>procesador de textos</b> sirve para redactar y dar formato a documentos: tipos y tamaños de letra, párrafos, listas, tablas, imágenes, encabezados y números de página. Usar <b>estilos de título</b> permite crear un <b>índice automático</b>. Las <b>presentaciones</b> acompañan una exposición oral con diapositivas. Consejos: pocas palabras por diapositiva, letra grande, imágenes de calidad, colores con buen contraste y no leer la pantalla. Una diapositiva debe apoyar lo que se dice, no repetirlo.</p>`,
    },
    {
      html: `<h3>La hoja de cálculo</h3><p>La <mark>hoja de cálculo</mark> (Calc, Excel, Google Sheets) organiza datos en una cuadrícula de <b>filas</b> (números) y <b>columnas</b> (letras). Cada <b>celda</b> se identifica por su columna y fila, por ejemplo <b>B3</b>. En las celdas se escriben textos, números o <b>fórmulas</b>, que empiezan por el signo <b>=</b>: <b>=B2+B3</b> suma dos celdas; <b>=SUMA(B2:B10)</b> suma un rango; <b>=PROMEDIO(B2:B10)</b> calcula la media; <b>=MAX</b> y <b>=MIN</b> dan el mayor y el menor. Lo potente es que, si se cambia un dato, <b>todos los resultados se recalculan solos</b>. Además, con los datos se crean <b>gráficos</b> de barras, de líneas o de sectores. Se usa para presupuestos de proyectos, notas, horarios, estadísticas o registros de experimentos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hoja de cálculo con columnas A y B; las celdas B2 a B4 tienen gastos y la celda B5 tiene la fórmula de suma">${BG}
        <rect x="20" y="40" width="220" height="114" fill="var(--paper)" stroke="var(--muted)"/>
        ${[0, 1, 2, 3, 4, 5].map(i => `<line x1="20" y1="${40 + i * 19}" x2="240" y2="${40 + i * 19}" stroke="var(--muted)" stroke-width=".8"/>`).join("")}<line x1="44" y1="40" x2="44" y2="154" stroke="var(--muted)"/><line x1="140" y1="40" x2="140" y2="154" stroke="var(--muted)"/>
        ${t(92, 54, "A", { size: 10, color: "var(--muted)" })}${t(190, 54, "B", { size: 10, color: "var(--muted)" })}${["1", "2", "3", "4", "5"].map((n, i) => t(32, 73 + i * 19, String(i + 1), { size: 9, color: "var(--muted)" })).join("")}
        ${t(50, 73, "Material", { size: 10, anchor: "start" })}${t(234, 73, "Coste (€)", { size: 10, anchor: "end" })}
        ${t(50, 92, "Madera", { size: 10, anchor: "start" })}${t(234, 92, "4,50", { size: 10, anchor: "end" })}${t(50, 111, "Motor", { size: 10, anchor: "start" })}${t(234, 111, "3,20", { size: 10, anchor: "end" })}${t(50, 130, "Cables", { size: 10, anchor: "start" })}${t(234, 130, "1,30", { size: 10, anchor: "end" })}
        <rect x="140" y="135" width="100" height="19" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>${t(50, 149, "TOTAL", { size: 10, anchor: "start" })}${t(234, 149, "9,00", { size: 10, anchor: "end", color: "var(--leaf)" })}
        ${t(130, 26, "=SUMA(B2:B4)", { size: 12, color: "var(--leaf)" })}</svg>`,
    },
    {
      html: `<h3>Herramientas colaborativas</h3><p>Las <mark>herramientas colaborativas</mark> permiten que un equipo trabaje junto aunque esté en lugares distintos. Hay varios tipos. <b>Documentos compartidos</b> (Google Docs, Microsoft 365, OnlyOffice): varias personas editan a la vez, dejan <b>comentarios</b> y <b>sugerencias</b>, y el <b>historial de versiones</b> guarda todos los cambios. <b>Comunicación</b>: correo electrónico, chat y videollamadas (Teams, Meet). <b>Gestión de tareas</b>: tableros como Trello o Planner, con columnas «por hacer», «en curso» y «hecho». <b>Pizarras</b> y murales digitales (Padlet, Miro) para lluvias de ideas. Y <b>plataformas educativas</b>, como Google Classroom o Moodle, para entregar tareas. Al compartir hay que elegir bien los <b>permisos</b>: solo ver, comentar o editar.</p>`,
      video: { id: "ftAzRtcKaDU", titulo: "Herramientas colaborativas: qué son y por qué han revolucionado la forma de trabajar", canal: "Marketing4eCommerce", vistas: 29074 },
    },
    {
      html: `<h3>Organizar el trabajo en equipo</h3><p>Una herramienta no basta: el trabajo en equipo necesita <b>organización</b>. Primero se definen el <b>objetivo</b> y la <b>fecha de entrega</b>. Después se <b>reparten las tareas</b> y los <b>roles</b> (coordinación, redacción, diseño, revisión), teniendo en cuenta las habilidades de cada persona. Un <b>tablero de tareas</b> permite ver de un vistazo quién hace qué y en qué punto está. Conviene fijar <b>reuniones breves</b> de seguimiento, mantener una <b>carpeta común</b> ordenada, comunicarse con respeto y avisar con tiempo si surgen problemas. Al final, cada miembro debe poder explicar el trabajo completo. Es la misma forma de trabajar que se usa en el proceso tecnológico y en las empresas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tablero de tareas con tres columnas: por hacer, en curso y hecho, con tarjetas de tareas">${BG}
        ${[["por hacer", "var(--red)", 14], ["en curso", "#b8860b", 98], ["hecho", "var(--leaf)", 182]].map(([n, c, x]) => `<rect x="${x}" y="24" width="72" height="140" rx="6" fill="${c}" fill-opacity=".08" stroke="${c}" stroke-width="1.5"/>` + t(x + 36, 42, n, { size: 10, color: c })).join("")}
        ${[[18, 54, "vídeo"], [18, 84, "carteles"], [102, 54, "maqueta"], [186, 54, "bocetos"], [186, 84, "presupuesto"], [186, 114, "reparto"]].map(([x, y, n]) => `<rect x="${x}" y="${y}" width="64" height="24" rx="4" fill="var(--paper)" stroke="var(--muted)"/>` + t(x + 32, y + 16, n, { size: 9 })).join("")}</svg>`,
    },
    {
      html: `<h3>Propiedad intelectual y derechos de autor</h3><p>Todo lo que alguien crea, sea un texto, una foto, una canción, un vídeo, un dibujo o un programa, está protegido por los <mark>derechos de autor</mark> desde el momento en que se crea, aunque no lleve el símbolo ©. Eso significa que <b>no podemos copiarlo, modificarlo ni publicarlo</b> sin permiso del autor, aunque esté en internet. Copiar un trabajo ajeno y presentarlo como propio es <b>plagio</b>. Se permite <b>citar</b> fragmentos breves indicando siempre el autor y la fuente. Para usar imágenes, música o vídeos en nuestros trabajos hay que buscar contenidos con licencias que lo permitan o de <b>dominio público</b>, cuyos derechos ya han caducado (en España, 70 años después de la muerte del autor).</p>`,
    },
    {
      html: `<h3>Licencias Creative Commons</h3><p>Las licencias <mark>Creative Commons (CC)</mark> permiten al autor decidir qué pueden hacer otros con su obra, combinando cuatro condiciones. <b>BY</b> (reconocimiento): hay que citar al autor; está en todas. <b>NC</b> (no comercial): no se puede usar para ganar dinero. <b>ND</b> (sin obras derivadas): no se puede modificar. <b>SA</b> (compartir igual): las obras derivadas deben llevar la misma licencia. Por ejemplo, <b>CC BY-SA</b> permite usar y modificar la obra citando al autor y compartiendo con la misma licencia; es la licencia de Wikipedia. La licencia <b>CC0</b> renuncia a todos los derechos. En los buscadores de imágenes se puede filtrar por licencia, y bancos como Wikimedia Commons o Pixabay ofrecen contenidos libres.</p>${tabla(["Símbolo", "Significa"], [["BY", "reconocer la autoría"], ["NC", "uso no comercial"], ["ND", "sin modificaciones"], ["SA", "compartir con la misma licencia"]])}`,
      video: { id: "dAfkDSRBfZU", titulo: "Cómo crear y usar las Licencias Creative Commons", canal: "Educatutos", vistas: 240855 },
    },
    {
      html: `<h3>Software libre y buenas prácticas digitales</h3><p>El <mark>software libre</mark> es el que se puede usar, estudiar, copiar, modificar y compartir libremente porque su código fuente es abierto: Linux, LibreOffice, Firefox, GIMP, Inkscape, Audacity o Scratch. Suele ser gratuito y lo desarrollan comunidades de todo el mundo. El <b>software propietario</b> tiene restricciones de uso y su código es secreto. Usar programas <b>piratas</b> es ilegal y peligroso, porque suelen llevar malware. Algunas buenas prácticas digitales: guardar a menudo y hacer copias de seguridad; nombrar bien los archivos; exportar a <b>PDF</b> para que el documento se vea igual en cualquier equipo; citar siempre las fuentes; y comprimir las imágenes para que los archivos no pesen demasiado.</p>`,
    },
  ],
  figura: {
    titulo: "Un proyecto en la nube",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Cuatro miembros de un equipo conectados a una carpeta compartida en la nube con documento, hoja de cálculo, presentación y tablero de tareas">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${caja(220, 70, 200, 100, "carpeta compartida", "var(--pen)", { size: 15 })}
      ${t(320, 140, "texto · hoja · diapositivas · tareas", { size: 12, color: "var(--muted)" })}
      ${[[80, 50, "coordina", "var(--red)"], [80, 190, "redacta", "var(--leaf)"], [560, 50, "diseña", "#b8860b"], [560, 190, "revisa", "var(--pen)"]].map(([x, y, n, c]) => `<circle cx="${x}" cy="${y - 10}" r="12" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/><path d="M${x - 18} ${y + 22} a 18 16 0 0 1 36 0" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2"/>` + t(x, y + 40, n, { size: 13, color: c })).join("")}
      ${fl(110, 60, 216, 96, "var(--ink)", 2)}${fl(110, 196, 216, 150, "var(--ink)", 2)}${fl(530, 60, 424, 96, "var(--ink)", 2)}${fl(530, 196, 424, 150, "var(--ink)", 2)}
      ${t(320, 30, "cada uno edita, comenta y ve los cambios al momento", { size: 14, color: "var(--muted)", font: D })}
    </svg>`,
  },
  video: { id: "ZLP1wSkhg3Y", titulo: "Creative Commons tipos de Licencias", canal: "UTEyCV", vistas: 150567, megusta: 0, busqueda: "herramientas colaborativas nube licencias Creative Commons" },
  ejemplos: [
    { enunciado: "En una hoja de cálculo, B2 = 4,5, B3 = 3,2 y B4 = 1,3. ¿Qué fórmula da el total y qué resultado aparece?",
      pasos: ["Se usa la función SUMA sobre el rango.", "=SUMA(B2:B4).", "4,5 + 3,2 + 1,3 = 9."],
      resultado: "=SUMA(B2:B4) → 9." },
    { enunciado: "Quieres usar una foto con licencia CC BY-NC en el póster de una feria del instituto (sin venta). ¿Puedes?",
      pasos: ["BY: hay que citar al autor.", "NC: no comercial; el póster no se vende.", "No hay ND: se podría recortar."],
      resultado: "Sí, citando al autor y la licencia." },
    { enunciado: "Un archivo ocupa 3 MB. ¿Cuántos caben aproximadamente en una memoria de 16 GB?",
      pasos: ["16 GB ≈ 16 000 MB.", "16 000 / 3 ≈ 5 333.", "Unos 5 300 archivos."],
      resultado: "Unos 5 300 archivos." },
  ],
  errores: [
    "Pensar que todo lo que está en internet se puede usar libremente.",
    "Confundir la RAM con el almacenamiento: la RAM se borra al apagar.",
    "Escribir una fórmula sin el signo =: la hoja la toma como texto.",
    "Compartir un documento con permiso de edición cuando solo se quería que lo vieran.",
    "Llenar las diapositivas de texto y leerlas en voz alta.",
  ],
  ejercicios: [
    { q: "Clasifica: teclado, pantalla táctil, impresora, micrófono, memoria USB, altavoz.", sol: "Entrada: teclado, micrófono. Salida: impresora, altavoz. Entrada/salida: pantalla táctil, memoria USB." },
    { q: "Diferencia entre hardware y software, con dos ejemplos.", sol: "Hardware: la parte física (CPU, disco). Software: los programas (sistema operativo, navegador)." },
    { q: "¿Qué indica la extensión de un archivo? Di qué tipo es .ods, .pdf y .png.", sol: "El tipo de archivo; hoja de cálculo, documento PDF e imagen." },
    { q: "Escribe dos ventajas y dos inconvenientes de la nube.", sol: "Ventajas: acceso desde cualquier lugar y copias de seguridad. Inconvenientes: requiere internet y los datos los guarda una empresa." },
    { q: "Escribe la fórmula para calcular la media de C2 a C20.", sol: "=PROMEDIO(C2:C20)." },
    { q: "Da cuatro consejos para una buena presentación.", sol: "Poco texto, letra grande, imágenes de calidad, buen contraste (y no leer la pantalla)." },
    { q: "Nombra una herramienta para cada fin: escribir juntos, organizar tareas y hacer videollamadas.", sol: "Google Docs; Trello; Meet o Teams." },
    { q: "¿Qué es el plagio y cómo se evita?", sol: "Presentar como propio un trabajo ajeno; citando autor y fuente o creando contenido propio." },
    { q: "Explica qué permite una licencia CC BY-ND.", sol: "Usar y compartir la obra citando al autor, pero sin modificarla." },
    { q: "Cita tres programas de software libre.", sol: "LibreOffice, Firefox, GIMP (o Linux, Inkscape, Audacity)." },
  ],
  quiz: [
    { q: "La parte física del ordenador es el…", o: ["hardware", "software", "sistema operativo"], a: 0, e: "Hardware." },
    { q: "La memoria que se borra al apagar es la…", o: ["RAM", "SSD", "USB"], a: 0, e: "RAM." },
    { q: "Un archivo .pdf es…", o: ["un documento para leer o imprimir", "un vídeo", "un audio"], a: 0, e: "Documento." },
    { q: "Las fórmulas de una hoja de cálculo empiezan por…", o: ["=", "#", "@"], a: 0, e: "=" },
    { q: "La celda de la columna C y fila 7 es…", o: ["C7", "7C", "C:7"], a: 0, e: "C7." },
    { q: "El historial de versiones permite…", o: ["recuperar versiones anteriores", "borrar el archivo", "cambiar la extensión"], a: 0, e: "Recuperar versiones." },
    { q: "Un tablero con columnas «por hacer / en curso / hecho» sirve para…", o: ["gestionar tareas", "editar fotos", "hacer cálculos"], a: 0, e: "Gestionar tareas." },
    { q: "En Creative Commons, BY significa…", o: ["reconocer al autor", "no comercial", "sin cambios"], a: 0, e: "Reconocimiento." },
    { q: "Una obra de dominio público…", o: ["se puede usar libremente", "no se puede usar", "es de pago"], a: 0, e: "Uso libre." },
    { q: "LibreOffice es software…", o: ["libre", "pirata", "propietario"], a: 0, e: "Libre." },
  ],
  examen: [
    { q: "La licencia de Wikipedia es…", o: ["CC BY-SA", "CC BY-NC-ND", "©"], a: 0, e: "CC BY-SA." },
    { q: "1 GB son aproximadamente…", o: ["1 000 MB", "100 KB", "1 TB"], a: 0, e: "1 000 MB." },
    { q: "Para que todos vean igual un documento conviene exportarlo a…", o: ["PDF", "ZIP", "MP3"], a: 0, e: "PDF." },
  ],
  feynman: ["Qué es la nube y qué ventajas tiene para un equipo", "Cómo funciona una fórmula en una hoja de cálculo", "Qué significa cada símbolo de Creative Commons"],
  mapa: mapa("HERRAMIENTAS DIGITALES", "var(--eso)", [
    ["Sistema", "hardware · software", "var(--pen)"],
    ["Ofimática", "texto · hoja · presentación", "var(--leaf)"],
    ["Colaboración", "nube · tareas · comunicación", "#b8860b"],
    ["Derechos", "autor · Creative Commons", "var(--red)"],
  ], 300),
  tarjetas: [
    ["Hardware", "Parte física del sistema informático."],
    ["Software", "Programas: sistema operativo y aplicaciones."],
    ["Extensión", "Indica el tipo de archivo: .pdf, .ods…"],
    ["Nube", "Servicios y archivos en servidores de internet."],
    ["Fórmula", "Empieza por =; se recalcula sola."],
    ["Historial de versiones", "Guarda todos los cambios de un documento."],
    ["Derechos de autor", "Protegen toda obra desde que se crea."],
    ["CC BY-SA", "Citar al autor y compartir igual."],
  ],
  familias: ["Ordenad juntos las carpetas de fotos o documentos del ordenador de casa con nombres claros.", "Haced una hoja de cálculo con los gastos de una semana y una fórmula de suma.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Digitalización del entorno personal de aprendizaje: dispositivos, sistemas operativos, organización de archivos, ofimática, herramientas de edición y colaboración en la nube, propiedad intelectual y licencias (RD 217/2022, Tecnología y Digitalización 1º a 3º).",
    ideas: ["Proyecto en grupo con documento compartido, tablero de tareas y presentación final.", "Presupuesto del proyecto del taller en hoja de cálculo con gráfico.", "Búsqueda de imágenes con licencia CC y cita correcta en el trabajo."],
  },
  fuentes: [RD, wiki("Computación en la nube", "Computaci%C3%B3n_en_la_nube"), wiki("Licencias Creative Commons", "Licencias_Creative_Commons")],
  revisado: "2026-11-12",
};
