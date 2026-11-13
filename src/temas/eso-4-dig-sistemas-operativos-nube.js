// Digitalización 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Digitalización",
  curso: "4-eso",
  titulo: "Sistemas operativos y la nube",
  minutos: 40,
  objetivos: ["Explicar qué hace un sistema operativo y comparar los más usados", "Organizar archivos y carpetas y entender las extensiones", "Usar servicios en la nube y hacer copias de seguridad"],
  claves: ["sistema operativo", "software libre", "archivo", "extensión", "nube", "copia de seguridad"],
  pregunta: {
    texto: "Pierdes el móvil, te compras otro e inicias sesión: aparecen tus fotos, tus contactos y tus chats. ¿Dónde estaban guardados?",
    respuesta: "En la <mark>nube</mark>: servidores de grandes centros de datos repartidos por el mundo. Tu móvil hacía <b>copias de seguridad</b> automáticas por Internet. La «nube» no flota en el cielo: son ordenadores muy reales, de otra empresa, a los que accedes con tu cuenta.",
  },
  bloques: [
    {
      html: `<h3>Qué es un sistema operativo</h3><p>El <b>sistema operativo</b> (SO) es el programa principal de un dispositivo: arranca primero y hace de <mark>intermediario entre el hardware, las aplicaciones y el usuario</mark>. Reparte el procesador y la memoria entre los programas, gestiona los archivos, controla los periféricos mediante <b>controladores</b> (drivers), administra usuarios y permisos y ofrece la <b>interfaz</b>: ventanas, iconos o la pantalla táctil. Sin él, cada aplicación tendría que saber manejar cada pieza.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Capas: usuario arriba, aplicaciones, sistema operativo y hardware abajo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["usuario", "var(--inf)", 200], ["aplicaciones", "var(--leaf)", 180], ["sistema operativo", "var(--pen)", 200], ["hardware", "var(--muted)", 220]]
          .map(([t, c, w], i) => `<rect x="${130 - w / 2}" y="${18 + i * 38}" width="${w}" height="30" rx="8" fill="${c}"/><text x="130" y="${38 + i * 38}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" ${F}>${t}</text>`).join("")}
        <text x="130" y="172" text-anchor="middle" font-size="9" fill="var(--muted)" ${F}>el SO hace de puente entre capas</text>
      </svg>`,
    },
    {
      html: `<h3>Los sistemas más usados</h3><p>En ordenadores dominan <b>Windows</b> (Microsoft), <b>macOS</b> (Apple) y <b>Linux</b>, con distribuciones como Ubuntu o las educativas de algunas comunidades. En móviles, <b>Android</b> (basado en Linux) e <b>iOS</b>. Una diferencia importante es la licencia: el <mark>software libre</mark> (como Linux) permite usar, estudiar, modificar y compartir el programa; el <b>software propietario</b> (Windows, macOS, iOS) solo se puede usar con las condiciones que pone la empresa. Linux también hace funcionar la mayoría de los servidores de Internet.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tabla de sistemas operativos: de ordenador y de móvil, libres y propietarios">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="20" width="84" height="26" rx="6" fill="var(--leaf)"/><rect x="162" y="20" width="84" height="26" rx="6" fill="var(--red)"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="112" y="37" fill="#fff">libre</text><text x="204" y="37" fill="#fff">propietario</text></g>
        <g ${F} font-size="11" font-weight="700" fill="var(--ink)"><text x="14" y="84">ordenador</text><text x="14" y="138">móvil</text></g>
        <path d="M14 104 H 246" stroke="var(--line)" stroke-width="2"/>
        <g ${F} font-size="12" text-anchor="middle" fill="var(--ink)"><text x="112" y="84">Linux</text><text x="204" y="76">Windows</text><text x="204" y="94">macOS</text><text x="112" y="130">Android*</text><text x="204" y="138">iOS</text></g>
        <text x="112" y="146" text-anchor="middle" font-size="8" fill="var(--muted)" ${F}>*base libre</text>
      </svg>`,
    },
    {
      html: `<h3>Archivos, carpetas y extensiones</h3><p>La información se guarda en <b>archivos</b> organizados en <b>carpetas</b> que forman un árbol. La <b>ruta</b> indica dónde está un archivo, por ejemplo <i>Documentos/Insti/Digitalizacion/redes.pdf</i>. La <b>extensión</b>, las letras tras el punto, dice el tipo: <b>.docx</b> u <b>.odt</b> (texto), <b>.pdf</b>, <b>.jpg</b> y <b>.png</b> (imagen), <b>.mp3</b> (audio), <b>.mp4</b> (vídeo), <b>.zip</b> (comprimido). Poner <mark>nombres claros</mark> sin espacios raros y una carpeta por materia te ahorra mucho tiempo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol de carpetas: Documentos, Insti, Digitalización con un archivo redes.pdf">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M34 42 V 156 M34 58 H 58 M34 156 H 58 M70 66 V 110 M70 84 H 94 M70 110 H 94 M106 118 V 137 H 128" fill="none" stroke="var(--line)" stroke-width="2"/>
        ${[[20, 26, "Documentos"], [58, 50, "Insti"], [94, 76, "Lengua"], [94, 102, "Digitalización"], [58, 148, "Fotos"]].map(([x, y, t]) => `<path d="M${x} ${y} h 10 l 3 3 h 13 v 13 h -26 z" fill="var(--sun)"/><text x="${x + 32}" y="${y + 13}" font-size="11" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <rect x="130" y="128" width="14" height="18" rx="2" fill="var(--red)"/><text x="150" y="142" font-size="11" font-weight="700" fill="var(--red)" ${F}>redes.pdf</text>
        <text x="20" y="172" font-size="9" fill="var(--muted)" ${F}>ruta: Documentos/Insti/Digitalización/redes.pdf</text>
      </svg>`,
    },
    {
      html: `<h3>Qué es la nube</h3><p>La <b>computación en la nube</b> consiste en usar por Internet recursos que están en <mark>servidores de otras empresas</mark>: almacenamiento (Google Drive, OneDrive, iCloud), aplicaciones que funcionan en el navegador (documentos, hojas de cálculo, presentaciones) o incluso potencia de cálculo. Ventajas: accedes desde cualquier dispositivo, puedes <b>trabajar a la vez</b> con otras personas en el mismo documento y no pierdes nada si se rompe tu ordenador. Inconvenientes: necesitas conexión, dependes de la empresa y tus datos quedan guardados en sus equipos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nube conectada con un portátil, un móvil y una tableta que comparten el mismo documento">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M86 70 a 22 22 0 0 1 30 -28 a 28 28 0 0 1 50 6 a 20 20 0 0 1 8 38 h -86 a 16 16 0 0 1 -2 -16 z" fill="var(--inf)" opacity=".85"/>
        <rect x="112" y="48" width="36" height="26" rx="3" fill="#fff"/>${[0, 1, 2].map((i) => `<path d="M118 ${56 + i * 6} h 24" stroke="var(--inf)" stroke-width="2"/>`).join("")}
        <path d="M100 88 L 50 124 M130 88 V 124 M160 88 L 212 124" stroke="var(--ink)" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="24" y="126" width="54" height="32" rx="3" fill="var(--ink)"/><rect x="16" y="158" width="70" height="5" rx="2" fill="var(--ink)"/>
        <rect x="118" y="126" width="24" height="40" rx="5" fill="var(--ink)"/>
        <rect x="188" y="126" width="48" height="38" rx="5" fill="var(--ink)"/>
        <text x="130" y="24" text-anchor="middle" font-size="10" font-weight="700" fill="var(--inf)" ${F}>centro de datos</text>
      </svg>`,
    },
    {
      html: `<h3>Copias de seguridad y mantenimiento</h3><p>Un disco puede romperse, un móvil perderse y un virus cifrar tus archivos. Por eso hay que hacer <b>copias de seguridad</b>. Una regla muy usada es la <mark>3-2-1</mark>: tener <b>3 copias</b> de los datos importantes, en <b>2 soportes</b> distintos (por ejemplo, el ordenador y un disco externo) y <b>1 fuera de casa</b> (por ejemplo, en la nube). Además conviene instalar las <b>actualizaciones</b>, que corrigen fallos de seguridad, desinstalar lo que no usas y liberar espacio de vez en cuando.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Regla 3-2-1: tres copias, dos soportes, una fuera de casa">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[["3", "copias", "var(--pen)"], ["2", "soportes", "var(--sun)"], ["1", "fuera de casa", "var(--leaf)"]].map(([n, t, c], i) => `<circle cx="${50 + i * 80}" cy="70" r="32" fill="${c}"/><text x="${50 + i * 80}" y="84" text-anchor="middle" font-size="38" font-weight="700" fill="#fff" ${D}>${n}</text><text x="${50 + i * 80}" y="126" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
        <text x="130" y="158" text-anchor="middle" font-size="10" fill="var(--muted)" ${F}>ordenador + disco externo + nube</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Guardar en local o en la nube",
    svg: `<svg viewBox="0 0 640 220" role="img" aria-label="Comparación entre almacenamiento local y en la nube">
      <rect width="640" height="220" rx="16" fill="var(--paper)"/>
      ${[["En local", "var(--sun)", ["funciona sin Internet", "tú controlas los datos", "si se rompe, se pierde", "solo en ese aparato"]], ["En la nube", "var(--inf)", ["desde cualquier sitio", "trabajo a la vez", "necesita conexión", "datos en otra empresa"]]]
        .map(([n, c, l], i) => `<rect x="${20 + i * 310}" y="20" width="290" height="180" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${165 + i * 310}" y="56" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${n}</text>
          ${l.map((t, j) => `<text x="${50 + i * 310}" y="${92 + j * 26}" font-size="14" fill="var(--ink)" ${F}>${j < 2 ? "＋" : "－"} ${t}</text>`).join("")}`).join("")}
    </svg>`,
  },
  video: { id: "fsuroRYmagw", titulo: "Sistemas operativos: qué son, cómo funcionan, tipos", canal: "El Salón de Informática", vistas: 737890, megusta: 0, busqueda: "qué es un sistema operativo tipos" },
  quiz: [
    { q: "¿Qué programa reparte la memoria y el procesador entre las aplicaciones?", o: ["El navegador", "El sistema operativo", "El antivirus"], a: 1, e: "Es una de las funciones básicas del SO." },
    { q: "¿Cuál de estos sistemas es software libre?", o: ["Windows", "iOS", "Linux"], a: 2, e: "Linux se puede usar, estudiar, modificar y compartir." },
    { q: "Un archivo llamado «trabajo.mp4» es…", o: ["un vídeo", "un texto", "una imagen"], a: 0, e: ".mp4 es una extensión de vídeo." },
    { q: "¿Cuál es una ventaja de la nube?", o: ["Funciona siempre sin Internet", "Se accede desde cualquier dispositivo", "Los datos no salen nunca de tu casa"], a: 1, e: "Basta con iniciar sesión con tu cuenta." },
    { q: "En la regla 3-2-1, el «1» significa…", o: ["una copia fuera de casa", "un único disco", "una copia al año"], a: 0, e: "Así un incendio o un robo no se lleva todas las copias." }
  ],
  examen: [
    { q: "¿Para qué sirve un controlador (driver)?", o: ["Para que el SO sepa manejar un periférico concreto", "Para navegar más rápido", "Para comprimir archivos"], a: 0, e: "Cada impresora o tarjeta gráfica necesita el suyo." },
    { q: "¿Por qué conviene instalar las actualizaciones?", o: ["Solo cambian los colores", "Corrigen fallos de seguridad", "Borran tus archivos antiguos"], a: 1, e: "Muchos ataques aprovechan fallos ya corregidos en versiones nuevas." },
    { q: "La diferencia entre software libre y propietario está en…", o: ["el precio siempre", "la licencia: lo que se permite hacer con el programa", "el número de iconos"], a: 1, e: "Hay software libre de pago y propietario gratuito." },
  ],
  feynman: ["Qué hace un sistema operativo y por qué hace falta", "Qué diferencia hay entre software libre y propietario", "Cómo se organiza un árbol de carpetas y qué dice la extensión", "Ventajas e inconvenientes de la nube", "La regla 3-2-1 de las copias de seguridad"],
  mapa: mapa("SO Y NUBE", "var(--eso)", [
    ["Sistema operativo", "puente hardware-usuario", "var(--pen)"],
    ["Licencias", "libre · propietario", "var(--leaf)"],
    ["Archivos", "carpetas · ruta · extensión", "var(--sun)"],
    ["Nube", "acceso remoto · 3-2-1", "var(--inf)"],
  ], 250),
  tarjetas: [
    ["¿Qué es un sistema operativo?", "El programa principal que gestiona el hardware y hace de puente con el usuario."],
    ["Dos SO de móvil", "Android e iOS."],
    ["¿Qué indica la extensión de un archivo?", "Su tipo: .pdf, .jpg, .mp3…"],
    ["¿Qué es la nube?", "Servidores de otras empresas a los que accedemos por Internet."],
    ["Regla 3-2-1", "3 copias, 2 soportes, 1 fuera de casa."],
  ],
  familias: ["Revisad juntos si el móvil hace copia de seguridad automática y dónde la guarda.", "Ordenad una carpeta de fotos o documentos con nombres claros y subcarpetas.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sistemas operativos: funciones, instalación y mantenimiento; sistemas de almacenamiento local y en la nube; copias de seguridad (RD 217/2022, Digitalización 4º).",
    ideas: ["Arrancar un Linux desde un USB y compararlo con el SO habitual.", "Redactar en grupo un documento compartido en la nube con historial de versiones.", "Diseñar el plan de copias 3-2-1 de una familia o una pequeña empresa."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Sistema operativo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sistema_operativo" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
const AMP = require("./_amplia");
AMP.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Gestionar usuarios, permisos y software de un equipo", "Trabajar en la nube con documentos compartidos y control de versiones"],
  tras: {
    "Qué es un sistema operativo": [
      { html: `<h3>Usuarios, cuentas y permisos</h3><p>Un sistema operativo permite que varias personas usen el mismo equipo con su propia <b>cuenta de usuario</b>, cada una con sus archivos, su escritorio y sus ajustes. Hay cuentas de <b>administrador</b>, que pueden instalar programas y cambiar la configuración, y cuentas <b>estándar</b>, más limitadas. Por seguridad, lo recomendable es usar a diario una cuenta estándar: si entra un programa malicioso, <mark>tendrá menos permisos</mark> para hacer daño. Los archivos y carpetas también tienen <b>permisos</b> que indican quién puede leerlos, modificarlos o ejecutarlos. En los móviles, cada aplicación pide permisos para acceder a la cámara, la ubicación o los contactos, y se pueden revisar y quitar en los ajustes.</p>` },
    ],
    "Archivos, carpetas y extensiones": [
      { html: `<h3>Instalar, actualizar y desinstalar programas</h3><p>Los programas se instalan desde fuentes de confianza: la <b>tienda oficial</b> del sistema (Microsoft Store, App Store, Google Play), los repositorios de Linux o la web oficial del fabricante. Descargar programas «crackeados» o de webs desconocidas es una de las vías más comunes de entrada de malware. Cada programa tiene una <b>licencia</b> que dice cómo se puede usar: hay software <b>libre</b> (LibreOffice, GIMP, VLC), <b>gratuito</b> pero cerrado (freeware), de prueba (shareware) o de pago. Conviene mantenerlos <mark>actualizados</mark> y desinstalar los que no se usan, porque ocupan espacio, consumen recursos al arrancar y pueden tener fallos de seguridad. Para desinstalar se usa la opción del sistema, no basta con borrar el icono.</p>` },
      { html: `<h3>Comprimir archivos</h3><p><b>Comprimir</b> es reducir el tamaño de un archivo para que ocupe menos o se envíe más rápido. La compresión <b>sin pérdida</b> (formatos ZIP, 7Z, PNG) busca patrones repetidos y los escribe de forma más corta; al descomprimir se recupera el archivo exacto. Se usa para documentos y programas, donde no puede cambiar ni un bit. La compresión <b>con pérdida</b> (JPG, MP3, MP4) elimina información que apenas se percibe: consigue archivos mucho más pequeños, pero <mark>no se puede recuperar el original</mark>. Un archivo ZIP también sirve para juntar muchos archivos y carpetas en uno solo, cómodo de enviar por correo.</p>` },
    ],
    "Qué es la nube": [
      { html: `<h3>Trabajar en la nube</h3><p>Las <b>suites ofimáticas en línea</b> (Google Docs, Microsoft 365, OnlyOffice) permiten crear documentos, hojas de cálculo y presentaciones desde el navegador y <b>compartirlos</b> con otras personas. Al compartir se eligen los permisos: <b>ver</b>, <b>comentar</b> o <b>editar</b>. Varias personas pueden escribir a la vez en el mismo documento y ver los cambios en tiempo real, dejar <b>comentarios</b> y sugerencias, y consultar el <mark>historial de versiones</mark> para recuperar una versión anterior si alguien borra algo. También existen los servicios de nube de pago por uso (Amazon, Google, Microsoft) que alquilan servidores a empresas: así funcionan Netflix o muchos videojuegos en línea.</p>`, video: { id: "xT75e-G1eak", titulo: "Qué es la nube, para qué sirve y cuáles son sus funciones", canal: "LearnFree en Español", vistas: 240779 } },
    ],
  },
  ejemplos: [
    { enunciado: "Un grupo de cuatro alumnos hace un trabajo en un documento en la nube. ¿Qué permisos darías al profesor y a los compañeros?", pasos: ["Los cuatro compañeros necesitan escribir: permiso de edición.", "El profesor debe poder revisar y dejar notas sin cambiar el texto: permiso de comentar.", "Si alguien borra algo por error, se recupera con el historial de versiones."], resultado: "Compañeros: editar. Profesor: comentar." },
    { enunciado: "Tienes 120 fotos de 4 MB cada una. ¿Caben en una memoria USB de 512 MB? ¿Y si las comprimes en ZIP?", pasos: ["Tamaño total: 120 · 4 = 480 MB.", "480 < 512: caben, aunque justas.", "Las fotos JPG ya están comprimidas con pérdida, así que en ZIP apenas reducen su tamaño."], resultado: "Caben (480 MB), pero el ZIP casi no ahorra espacio con fotos JPG." },
    { enunciado: "Un programa gratuito pide al instalarse permisos de administrador y añadir una barra al navegador. ¿Qué haces?", pasos: ["Comprueba que lo descargas de la web oficial o de la tienda.", "Lee cada pantalla del instalador y desmarca los programas adicionales.", "Si no es de confianza, no lo instales: los extras suelen ser publicidad o espías."], resultado: "Instalar solo desde fuentes oficiales y rechazar los complementos no deseados." },
  ],
  errores: [
    "Usar siempre una cuenta de administrador para el día a día.",
    "Borrar el icono del escritorio pensando que así se desinstala el programa.",
    "Compartir un documento con permiso de edición a cualquiera que tenga el enlace.",
    "Pensar que comprimir un JPG o un MP4 en ZIP reduce mucho su tamaño.",
    "Confundir software gratuito con software libre.",
  ],
  ejercicios: [
    { q: "Indica cuatro funciones de un sistema operativo.", sol: "Gestionar el procesador y la memoria, gestionar los archivos, controlar los periféricos y ofrecer la interfaz al usuario (también gestionar usuarios y seguridad)." },
    { q: "¿Qué diferencia hay entre una cuenta de administrador y una estándar?", sol: "La de administrador puede instalar programas y cambiar la configuración del sistema; la estándar no, lo que la hace más segura para el uso diario." },
    { q: "Clasifica: LibreOffice, Photoshop, WinRAR (de prueba), VLC.", sol: "Libre: LibreOffice y VLC. De pago: Photoshop. Shareware (de prueba): WinRAR." },
    { q: "Escribe la ruta de un archivo «examen.pdf» guardado en la carpeta «Mates» dentro de «Documentos».", sol: "Documentos/Mates/examen.pdf." },
    { q: "Indica el tipo de archivo: .xlsx, .png, .mp3, .zip, .odp.", sol: "Hoja de cálculo, imagen, audio, archivo comprimido y presentación (LibreOffice)." },
    { q: "¿Qué diferencia hay entre compresión con pérdida y sin pérdida? Pon un formato de cada una.", sol: "Sin pérdida recupera el archivo exacto (ZIP, PNG); con pérdida elimina información poco perceptible y no se recupera el original (JPG, MP3)." },
    { q: "Indica tres ventajas de trabajar en un documento compartido en la nube.", sol: "Trabajar a la vez con otras personas, acceder desde cualquier dispositivo y recuperar versiones anteriores." },
    { q: "Diseña un plan de copias de seguridad 3-2-1 para tus trabajos del instituto.", sol: "Original en el ordenador, copia en un disco o USB externo y otra copia en la nube (tres copias, dos soportes, una fuera de casa)." },
    { q: "¿Por qué hay que revisar los permisos de las aplicaciones del móvil?", sol: "Porque algunas piden acceso a datos que no necesitan (contactos, ubicación, micrófono) y pueden recogerlos o venderlos." },
    { q: "Indica dos inconvenientes de guardarlo todo solo en la nube.", sol: "Sin conexión no se puede acceder y dependemos de la empresa (puede cerrar, cambiar sus condiciones o sufrir un ataque)." },
  ],
  quiz: [
    { q: "Para el uso diario es más seguro usar una cuenta…", o: ["de administrador", "estándar", "de invitado siempre"], a: 1, e: "Limita lo que puede hacer el malware." },
    { q: "Un archivo ZIP usa compresión…", o: ["sin pérdida", "con pérdida", "ninguna"], a: 0, e: "Se recupera el original exacto." },
    { q: "Para que alguien pueda dejar notas sin cambiar el texto se le da permiso de…", o: ["editar", "comentar", "eliminar"], a: 1, e: "Puede sugerir, no modificar." },
    { q: "El historial de versiones sirve para…", o: ["recuperar una versión anterior", "comprimir el documento", "cambiar el idioma"], a: 0, e: "Muy útil si alguien borra algo." },
    { q: "Los programas se deben descargar de…", o: ["cualquier web", "tiendas y webs oficiales", "enlaces que te mandan por chat"], a: 1, e: "Evita el malware." },
  ],
  tarjetas: [
    ["Cuenta estándar", "Cuenta con permisos limitados, más segura para el día a día."],
    ["Compresión sin pérdida", "Reduce el tamaño y permite recuperar el archivo exacto (ZIP, PNG)."],
    ["Historial de versiones", "Registro de cambios de un documento en la nube para recuperar versiones anteriores."],
  ],
});

// Nivel libro (4º ESO): lectura, más apartados con dibujo, ejercicios por niveles, glosario y situación de aprendizaje.
const L = require("./_eso4L11");
L.libro(module.exports, {
  minutos: 100,
  revisado: "2026-11-13",
  lectura: {
    titulo: "El día que el portátil de Marc no arrancó",
    html: `<p>La víspera de entregar el trabajo de Historia, el portátil de Marc se quedó en una pantalla negra. Había pasado meses aplazando las actualizaciones y nunca había hecho una copia. Su hermana, en cambio, abrió el mismo trabajo desde el móvil en cinco segundos: lo tenía en una carpeta sincronizada con la nube y el historial de versiones le permitía recuperar hasta la frase que había borrado por error.</p>
      <p>La diferencia entre las dos situaciones no fue la suerte, sino entender cómo funciona el programa que gobierna cada aparato, el <b>sistema operativo</b>, y saber dónde y cómo se guardan los archivos. En este tema verás qué pasa desde que pulsas el botón de encendido hasta que aparece el escritorio, cómo reparte el sistema el trabajo entre los programas, qué significan las licencias de software y qué hay realmente detrás de «la nube». Terminarás diseñando tu propio plan para que nunca te pase lo de Marc.</p>`,
  },
  svgs: {
    "Usuarios, cuentas y permisos": L.rejilla("Permisos de lectura, escritura y ejecución según el tipo de cuenta", ["Cuenta", "Leer", "Cambiar", "Instalar"], [["Administrador", "sí", "sí", "sí"], ["Estándar", "sus archivos", "sus archivos", "no"], ["Invitado", "limitado", "no", "no"]], { t: "Quién puede hacer qué" }),
    "Instalar, actualizar y desinstalar programas": L.flujo("Pasos para instalar un programa con seguridad", ["Fuente oficial o tienda", "Revisar permisos y extras", "Instalar y actualizar", "Desinstalar lo que no se usa"], { t: "Instalar con cabeza" }),
    "Trabajar en la nube": L.rejilla("Permisos al compartir un documento en la nube", ["Permiso", "Ver", "Comentar", "Editar"], [["Lector", "sí", "no", "no"], ["Comentarista", "sí", "sí", "no"], ["Editor", "sí", "sí", "sí"]], { t: "Compartir con permisos" }),
    "Comprimir archivos": L.barras("Tamaño de una carpeta antes y después de comprimirla", [["Texto original", 10], ["Texto en ZIP", 3], ["Foto RAW", 25], ["Foto JPEG", 4]], { t: "Antes y después (MB)", unidad: " MB" }),
  },
  videos: {},
  tras: {
    "Qué es un sistema operativo": [
      {
        html: `<h3>Cómo arranca un ordenador</h3><p>Al pulsar el botón de encendido, la placa base ejecuta un pequeño programa grabado en un chip, el <b>firmware</b> (antes llamado BIOS y hoy <b>UEFI</b>). Primero hace el <b>POST</b>, una revisión rápida de que la memoria, el procesador y el teclado responden; si algo falla, avisa con pitidos o un mensaje. Después busca un disco con un sistema operativo y entrega el control al <b>gestor de arranque</b>, que carga en la RAM el <mark>núcleo</mark> o <i>kernel</i>, la parte central del sistema.</p>
          <p>El núcleo reconoce el hardware y carga los <b>controladores</b>, pone en marcha los <b>servicios</b> que trabajan en segundo plano (red, sonido, antivirus, actualizaciones) y, por último, muestra la pantalla de inicio de sesión y el escritorio. Todo el proceso dura unos segundos gracias a los discos SSD. El <b>arranque seguro</b> de UEFI comprueba que el sistema que se carga está firmado, para impedir que un programa malicioso se cuele antes que el propio sistema. Si un equipo no arranca, saber en qué fase se queda ayuda a encontrar el problema: un fallo en el POST apunta al hardware; uno después del logotipo, al sistema operativo.</p>`,
        svg: L.flujo("Fases del arranque de un ordenador", ["Firmware UEFI y POST", "Gestor de arranque", "Núcleo y controladores", "Servicios en segundo plano", "Inicio de sesión y escritorio"], { t: "Del botón al escritorio" }),
      },
      {
        html: `<h3>Procesos y multitarea</h3><p>Cada programa en ejecución es un <b>proceso</b>. Aunque tengas abiertos el navegador, la música y un juego, el procesador solo puede hacer unas pocas cosas a la vez (una por núcleo). El sistema operativo da la sensación de que todo funciona simultáneamente gracias a su <b>planificador</b>, que reparte el tiempo de la CPU en turnos de milisegundos: es la <mark>multitarea</mark>. Los procesos pueden estar <b>en ejecución</b>, <b>listos</b> (esperando turno) o <b>bloqueados</b> (esperando un dato del disco o de la red).</p>
          <p>El sistema también gestiona la <b>memoria</b>: da a cada proceso su espacio y evita que uno escriba en el de otro. Cuando la RAM se llena, usa una parte del disco como <b>memoria virtual</b>, mucho más lenta; por eso un equipo con poca RAM va lento si abres demasiadas pestañas. Con el <b>Administrador de tareas</b> (Windows), el Monitor de actividad (macOS) o el comando <code>top</code> (Linux) puedes ver qué procesos consumen más CPU, memoria o batería y cerrar uno que se ha quedado «colgado».</p>`,
        svg: L.ciclo("Estados de un proceso: listo, en ejecución y bloqueado", "SO", ["listo", "en ejecución", "bloqueado"]),
      },
    ],
    "Los sistemas más usados": [
      {
        html: `<h3>Software libre y licencias</h3><p>Todo programa se usa bajo una <b>licencia</b>, un contrato que dice lo que puedes hacer con él. El <b>software propietario</b> (Windows, macOS, Photoshop) permite usarlo, pero no ver ni modificar su código ni repartir copias. El <b>software libre</b> garantiza cuatro libertades: <mark>usarlo</mark> para cualquier fin, <mark>estudiar</mark> cómo funciona (su código fuente es público), <mark>modificarlo</mark> y <mark>distribuir</mark> copias, incluso mejoradas. Ejemplos: Linux, LibreOffice, Firefox, GIMP o VLC.</p>
          <p>Libre no siempre significa gratis, ni gratis significa libre. El <b>freeware</b> es gratuito pero cerrado (muchas aplicaciones de móvil); el <b>shareware</b> o de prueba funciona unos días o con funciones limitadas; el modelo <b>freemium</b> es gratis con opciones de pago. Algunas licencias libres, como la <b>GPL</b>, obligan a que las versiones modificadas sigan siendo libres. Usar programas propietarios sin licencia (copias «pirata») es ilegal y peligroso, porque suelen llevar malware escondido. Muchos centros educativos usan software libre porque no tiene coste de licencias y se puede adaptar.</p>`,
        svg: L.cajas("Cuatro libertades del software libre", [["Usar", "para cualquier|fin"], ["Estudiar", "código fuente|abierto"], ["Modificar", "adaptarlo|y mejorarlo"], ["Distribuir", "compartir|copias"]], { t: "Las 4 libertades" }),
      },
      {
        html: `<h3>Máquinas virtuales</h3><p>Una <b>máquina virtual</b> es un ordenador simulado por software dentro de otro ordenador. Un programa llamado <b>hipervisor</b> (VirtualBox, VMware o Hyper-V) reserva una parte del procesador, de la RAM y del disco del equipo real, el <b>anfitrión</b>, y la presenta como si fuera un ordenador completo, el <b>invitado</b>. En él se puede instalar otro sistema operativo: probar Linux desde Windows, por ejemplo, sin tocar el sistema principal.</p>
          <p>Las máquinas virtuales son muy útiles para <mark>aprender y experimentar</mark> sin miedo a estropear nada, para usar programas antiguos o para analizar archivos sospechosos de forma aislada. Se pueden guardar «instantáneas» y volver atrás si algo sale mal. La nube funciona en gran parte así: un único servidor físico de un centro de datos ejecuta decenas de máquinas virtuales de clientes distintos, separadas entre sí. El inconveniente es que el invitado comparte los recursos del anfitrión, así que hace falta un ordenador con bastante RAM para que ambos vayan con soltura.</p>`,
        svg: L.capas("Capas de una máquina virtual: hardware, sistema anfitrión, hipervisor y sistema invitado", [["Invitado", "Linux de prueba"], ["Hipervisor", "VirtualBox"], ["Anfitrión", "Windows"], ["Hardware", "CPU · RAM · disco"]], { t: "Un ordenador dentro de otro" }),
        video: { id: "2v_3f_jjLL4", titulo: "¿Qué es una máquina virtual?", canal: "Udacity", vistas: 104205 },
      },
    ],
    "Archivos, carpetas y extensiones": [
      {
        html: `<h3>Sistemas de archivos y unidades</h3><p>Un disco nuevo es como un almacén vacío sin estanterías. Para guardar archivos hay que <b>formatearlo</b> con un <b>sistema de archivos</b>, que organiza el espacio en bloques y lleva un índice de qué archivo ocupa cada bloque, su nombre, su tamaño y sus permisos. Cada sistema operativo prefiere el suyo: <b>NTFS</b> en Windows, <b>APFS</b> en macOS y <b>ext4</b> en Linux. Para memorias USB y tarjetas que se usan en varios aparatos se emplea <b>exFAT</b>; el antiguo <b>FAT32</b> no admite archivos de más de 4 GB, por eso a veces una película «no cabe» aunque sobre espacio.</p>
          <p>Un disco puede dividirse en <b>particiones</b>, zonas independientes que el sistema ve como unidades distintas. Formatear borra el índice, así que hay que hacerlo con cuidado. Cuando «borras» un archivo normalmente va a la <b>papelera</b>; al vaciarla, el espacio se marca como libre, pero los datos pueden seguir ahí hasta que se sobrescriben. Por eso, antes de vender o regalar un equipo, conviene usar la opción de <mark>restablecer y borrar de forma segura</mark>.</p>`,
        svg: L.rejilla("Sistemas de archivos más comunes y dónde se usan", ["Sistema", "Dónde", "Archivo máx."], [["NTFS", "Windows", "enorme"], ["APFS", "macOS / iOS", "enorme"], ["ext4", "Linux", "16 TB"], ["exFAT", "USB, tarjetas", "enorme"], ["FAT32", "USB antiguos", "4 GB"]], { t: "Sistemas de archivos" }),
      },
    ],
    "Qué es la nube": [
      {
        html: `<h3>Modelos de servicio en la nube</h3><p>No todo en la nube es igual. Según lo que te da el proveedor se distinguen tres modelos. En el <b>software como servicio</b> (<mark>SaaS</mark>) usas una aplicación completa desde el navegador: Gmail, Canva, Google Docs o Spotify. En la <b>plataforma como servicio</b> (<mark>PaaS</mark>) el proveedor te da un entorno listo para publicar tus propios programas o webs sin preocuparte de los servidores. En la <b>infraestructura como servicio</b> (<mark>IaaS</mark>) alquilas máquinas virtuales, discos y redes y lo configuras todo tú, como hacen muchas empresas con Amazon Web Services, Azure o Google Cloud.</p>
          <p>Por quién la usa, la nube puede ser <b>pública</b> (compartida con otros clientes), <b>privada</b> (solo para una organización) o <b>híbrida</b> (una mezcla). Detrás hay enormes <b>centros de datos</b> con miles de servidores, sistemas de refrigeración y conexiones redundantes. Consumen muchísima electricidad y agua, por lo que las empresas buscan energías renovables y lugares fríos. Pagar solo por lo que se usa y poder crecer en minutos son las grandes ventajas del modelo.</p>`,
        svg: L.capas("Tres modelos de nube: SaaS, PaaS e IaaS", [["SaaS", "usas la aplicación"], ["PaaS", "publicas tu programa"], ["IaaS", "alquilas servidores"]], { t: "Cuánto gestiona el proveedor" }),
      },
    ],
    "Trabajar en la nube": [
      {
        html: `<h3>Privacidad y dependencia de la nube</h3><p>Guardar algo en la nube significa guardarlo en el ordenador de otra empresa. Antes de subir datos personales conviene saber <b>dónde</b> están los servidores y qué dicen las <b>condiciones de uso</b>. En la Unión Europea, el <b>Reglamento General de Protección de Datos</b> (RGPD) obliga a las empresas a informar de qué hacen con tus datos, a dejarte descargarlos y a borrarlos si lo pides. Algunos servicios cifran los archivos de forma que ni la propia empresa puede leerlos (<mark>cifrado de extremo a extremo</mark>).</p>
          <p>Para proteger tu cuenta, activa la <b>verificación en dos pasos</b> y revisa a menudo qué enlaces has compartido: un enlace «público» puede abrirlo cualquiera que lo tenga. La nube también crea <b>dependencia</b>: si el servicio cierra, cambia sus precios o pierdes la conexión, puedes quedarte sin acceso. Por eso los formatos abiertos (ODT, PDF, PNG) y una copia local de lo importante te dan independencia. La <b>sincronización</b> mantiene iguales los archivos de todos tus dispositivos; si editas el mismo archivo sin conexión en dos sitios, puede aparecer un <b>conflicto</b> y el servicio guarda las dos versiones para que elijas.</p>`,
        svg: L.cajas("Cuatro medidas para usar la nube con seguridad", [["Dos pasos", "contraseña|+ código"], ["Enlaces", "revisar quién|tiene acceso"], ["RGPD", "derecho a|descargar y borrar"], ["Copia local", "formatos|abiertos"]], { t: "Nube segura" }),
      },
    ],
  },
  secciones: [7, 4, 5],
  niveles: "bbmbbmbamm",
  ejercicios: [
    { nivel: "básico", q: "Ordena las fases del arranque: escritorio, POST, núcleo, gestor de arranque, servicios.", sol: "POST (dentro del firmware UEFI) → gestor de arranque → núcleo → servicios → escritorio." },
    { nivel: "básico", q: "¿Qué es un proceso? Pon tres ejemplos de procesos que tengas abiertos ahora.", sol: "Un proceso es un programa en ejecución. Ejemplos: el navegador, el reproductor de música y el antivirus que trabaja en segundo plano." },
    { nivel: "básico", q: "Explica con tus palabras las cuatro libertades del software libre.", sol: "Usar el programa para lo que quieras, estudiar cómo funciona viendo su código, modificarlo para adaptarlo y repartir copias, también de tus versiones mejoradas." },
    { nivel: "básico", q: "Clasifica como SaaS, PaaS o IaaS: Gmail, alquilar un servidor virtual, Canva, un servicio para publicar tu web sin gestionar servidores.", sol: "SaaS: Gmail y Canva. IaaS: alquilar un servidor virtual. PaaS: el servicio para publicar tu web." },
    { nivel: "básico", q: "¿Qué sistema de archivos usarías para un USB que vas a conectar a un PC con Windows y a un Mac? ¿Por qué?", sol: "exFAT, porque lo leen y escriben los dos sistemas y admite archivos de más de 4 GB." },
    { nivel: "básico", q: "¿Qué diferencia hay entre freeware y software libre?", sol: "El freeware es gratis pero su código es cerrado y no se puede modificar ni redistribuir libremente. El software libre permite estudiar, modificar y compartir; además suele ser gratuito, aunque no siempre." },
    { nivel: "básico", q: "Nombra la herramienta para ver los procesos en Windows, en macOS y en Linux.", sol: "Administrador de tareas (Windows), Monitor de actividad (macOS) y el comando top o el Monitor del sistema (Linux)." },
    { nivel: "medio", q: "Un ordenador pita al encenderlo y no muestra nada en pantalla. ¿En qué fase del arranque falla? ¿Hardware o software?", sol: "Falla en el POST, la revisión que hace el firmware antes de cargar nada. Apunta a un problema de hardware: memoria RAM mal colocada, tarjeta gráfica o placa." },
    { nivel: "medio", q: "Explica por qué un ordenador con 4 GB de RAM va lento con 30 pestañas abiertas.", sol: "Cada pestaña es un proceso que ocupa memoria. Cuando la RAM se llena, el sistema usa el disco como memoria virtual, que es mucho más lento; el ordenador pasa mucho tiempo moviendo datos entre RAM y disco." },
    { nivel: "medio", q: "Quieres copiar una película de 6 GB a un USB formateado en FAT32 con 16 GB libres y da error. Explica la causa y dos soluciones.", sol: "FAT32 no admite archivos de más de 4 GB. Soluciones: reformatear el USB en exFAT (tras copiar lo que tenga) o comprimir la película en varios trozos." },
    { nivel: "medio", q: "Compara SaaS e IaaS: quién gestiona qué y un ejemplo de usuario para cada uno.", sol: "En SaaS el proveedor lo gestiona todo y tú solo usas la aplicación (un estudiante con Google Docs). En IaaS el proveedor da el hardware virtual y tú instalas y mantienes el sistema y los programas (una empresa que monta su tienda online)." },
    { nivel: "medio", q: "¿Por qué es peligroso descargar una copia pirata de un programa de pago?", sol: "Es ilegal porque incumple la licencia y, además, esas copias suelen incluir malware (troyanos, mineros de criptomonedas, ransomware) que se instala con permisos de administrador." },
    { nivel: "medio", q: "Describe dos usos de una máquina virtual para un estudiante de 4º.", sol: "Probar Linux u otro sistema sin borrar el suyo; practicar a configurar un sistema sin miedo a romperlo (con instantáneas para volver atrás); o abrir un archivo sospechoso en un entorno aislado." },
    { nivel: "medio", q: "Has editado sin conexión el mismo archivo en el móvil y en el portátil. Al conectarte aparecen dos copias. ¿Qué ha pasado y qué haces?", sol: "Es un conflicto de sincronización: el servicio no sabe qué versión es la buena y guarda las dos. Hay que abrirlas, combinar los cambios en una y borrar la otra." },
    { nivel: "medio", q: "¿Qué derechos te da el RGPD sobre los datos que guardas en un servicio en la nube?", sol: "Saber qué datos tienen y para qué los usan (información y acceso), corregirlos (rectificación), pedir que los borren (supresión) y descargarlos para llevarlos a otro servicio (portabilidad)." },
    { nivel: "medio", q: "Explica qué diferencia hay entre borrar un archivo, vaciar la papelera y formatear.", sol: "Borrar lo manda a la papelera y se puede recuperar. Vaciar la papelera marca su espacio como libre, aunque los datos pueden seguir hasta que se sobrescriben. Formatear borra el índice de todo el disco y prepara un sistema de archivos nuevo." },
    { nivel: "medio", q: "¿Por qué el arranque seguro de UEFI mejora la seguridad?", sol: "Comprueba la firma digital del gestor de arranque y del núcleo; si alguien ha modificado esos archivos (por ejemplo, un malware que quiere cargarse antes que el sistema), la firma no coincide y se bloquea el arranque." },
    { nivel: "avanzado", q: "Una empresa de 20 personas duda entre comprar un servidor propio o usar IaaS. Da dos argumentos a favor de cada opción.", sol: "Servidor propio: control total de los datos y sin cuota mensual tras la compra. IaaS: no hay que comprar ni mantener hardware y se puede ampliar o reducir en minutos pagando solo lo que se usa; además el proveedor garantiza copias y alta disponibilidad." },
    { nivel: "avanzado", q: "Abre el administrador de tareas (o imagina uno) y explica cómo detectarías un programa que gasta demasiada batería.", sol: "Ordenar los procesos por uso de CPU o de energía; si uno usa mucho de forma continua sin que lo estés usando, es sospechoso. Comprobar si es necesario, cerrarlo, desactivar su inicio automático o desinstalarlo; si es desconocido, analizarlo con el antivirus." },
    { nivel: "avanzado", q: "La licencia GPL obliga a que las versiones modificadas sigan siendo libres. ¿Qué ventaja tiene para la comunidad? ¿Qué inconveniente puede ver una empresa?", sol: "Ventaja: las mejoras vuelven a la comunidad y nadie puede cerrar el código. Inconveniente para una empresa: si distribuye un programa basado en código GPL, debe publicar también su código, lo que le impide venderlo como cerrado." },
    { nivel: "avanzado", q: "Un portátil de 8 GB de RAM quiere ejecutar una máquina virtual con Linux. ¿Cuánta RAM le asignarías y por qué?", sol: "Unos 2-3 GB: Linux funciona bien con eso, y el anfitrión necesita el resto (5-6 GB) para no quedarse sin memoria. Asignar demasiado haría que los dos fueran lentos." },
    { nivel: "avanzado", q: "Un centro de datos consume 20 MW de forma continua. ¿Cuánta energía consume al año en GWh? ¿Por qué se construyen en zonas frías?", sol: "20 MW · 8.760 h = 175.200 MWh ≈ 175 GWh al año. En zonas frías el aire exterior ayuda a refrigerar los servidores y se gasta menos energía en aire acondicionado." },
    { nivel: "avanzado", q: "Diseña la estructura de carpetas de tu curso (materias, trimestres, trabajos) y una norma para nombrar archivos. Justifícala.", sol: "Por ejemplo: Insti/4ESO/<Materia>/<Trimestre>/ y nombres como «2026-11-13_Tecno_Informe-v2.pdf». La fecha al principio ordena cronológicamente, la materia identifica y la versión evita confundir borradores; sin espacios ni tildes para evitar problemas entre sistemas." },
    { nivel: "avanzado", q: "¿Qué riesgos tiene compartir una carpeta en la nube con un enlace «cualquiera con el enlace puede editar»? Propón una configuración mejor.", sol: "Cualquiera que reciba el enlace, aunque sea reenviado, puede ver, borrar o cambiar los archivos, y no sabrás quién fue. Mejor compartir solo con cuentas concretas, dar permiso de lectura o comentario salvo a quien deba editar y poner fecha de caducidad al enlace." },
    { nivel: "avanzado", q: "Explica por qué el planificador del sistema da más prioridad a la música o al ratón que a una copia de archivos.", sol: "Son tareas interactivas: si se retrasan unos milisegundos, el usuario nota cortes o el ratón a saltos. Una copia de archivos puede ir un poco más lenta sin que se note. Dar prioridad a lo interactivo mejora la sensación de rapidez." },
  ],
  ejemplos: [
    { enunciado: "Un equipo muestra el logotipo del fabricante y después una pantalla azul con un error. ¿Dónde está el problema?", pasos: ["Si aparece el logotipo, el POST ha terminado bien: el hardware básico responde.", "El fallo ocurre al cargar el núcleo o los controladores.", "Probables causas: una actualización o un controlador defectuoso.", "Solución: arrancar en modo seguro o usar la recuperación para deshacer el último cambio."], resultado: "Es un problema del sistema operativo, no del hardware básico." },
    { enunciado: "Clasifica estos programas por su licencia: LibreOffice, WhatsApp, Photoshop, un juego de prueba de 30 días.", pasos: ["LibreOffice: código abierto con las cuatro libertades → software libre.", "WhatsApp: gratis, pero cerrado → freeware.", "Photoshop: de pago y cerrado → propietario (por suscripción).", "Juego de 30 días: funciona un tiempo limitado → shareware o de prueba."], resultado: "Libre, freeware, propietario y shareware." },
    { enunciado: "Un instituto quiere un aula virtual para 800 alumnos sin comprar servidores. ¿Qué modelo de nube le conviene?", pasos: ["No quiere mantener hardware → descarta un servidor propio.", "Si usa una plataforma ya hecha (Google Classroom, Moodle alojado), es SaaS.", "Si quiere instalar su propio Moodle en una máquina alquilada, es IaaS.", "Para un centro sin informáticos, lo más sencillo es SaaS."], resultado: "SaaS (o IaaS si tiene personal técnico y quiere control total)." },
  ],
  errores: ["Pensar que vaciar la papelera borra los datos para siempre: pueden recuperarse hasta que se sobrescriben."],
  cuarta: ["El ratón", "macOS", "una hoja de cálculo", "No necesita contraseña", "tres discos duros", "de sistema", "completa", "imprimir", "subir más rápido", "anuncios en buscadores"],
  quiz: [
    { q: "¿Qué hace el POST al encender el ordenador?", o: ["Carga el escritorio", "Revisa que el hardware básico responde", "Instala actualizaciones", "Conecta a Internet"], a: 1, e: "Es la autocomprobación del firmware antes de arrancar el sistema." },
    { q: "La parte central del sistema operativo se llama…", o: ["núcleo o kernel", "escritorio", "navegador", "periférico"], a: 0, e: "El núcleo gestiona memoria, procesos y hardware." },
    { q: "Un proceso que espera datos del disco está…", o: ["en ejecución", "listo", "bloqueado", "terminado"], a: 2, e: "Queda bloqueado hasta que llega lo que necesita." },
    { q: "¿Cuál NO es una de las cuatro libertades del software libre?", o: ["Usarlo", "Estudiarlo", "Venderlo sin dar el código", "Distribuirlo"], a: 2, e: "Las libertades son usar, estudiar, modificar y distribuir." },
    { q: "El sistema de archivos FAT32 no admite archivos de más de…", o: ["4 MB", "4 GB", "4 TB", "40 GB"], a: 1, e: "Por eso hoy se prefiere exFAT en las memorias USB." },
    { q: "Google Docs es un ejemplo de…", o: ["IaaS", "PaaS", "SaaS", "hardware"], a: 2, e: "Usas una aplicación completa desde el navegador." },
    { q: "Un hipervisor sirve para…", o: ["comprimir archivos", "crear máquinas virtuales", "proteger el wifi", "hacer copias en la nube"], a: 1, e: "Reparte los recursos del anfitrión entre los sistemas invitados." },
    { q: "Cuando la RAM se llena, el sistema usa el disco como…", o: ["memoria virtual", "caché", "papelera", "partición"], a: 0, e: "Es mucho más lenta, por eso el equipo se ralentiza." },
    { q: "¿Qué ley europea protege tus datos personales en la nube?", o: ["La GPL", "El RGPD", "El UEFI", "El TCP"], a: 1, e: "El Reglamento General de Protección de Datos." },
    { q: "Si editas el mismo archivo sin conexión en dos dispositivos, puede aparecer…", o: ["un virus", "un conflicto de sincronización", "una partición", "un error de POST"], a: 1, e: "El servicio guarda ambas versiones para que elijas." },
  ],
  cuartaEx: ["Para cargar la batería", "Aumentan la RAM", "el idioma del programa"],
  examen: [
    { q: "¿Qué programa reparte el tiempo de la CPU entre los procesos?", o: ["El planificador del sistema operativo", "El navegador", "El firmware", "El antivirus"], a: 0, e: "Así consigue la multitarea." },
    { q: "Una licencia freemium…", o: ["es libre", "es gratis con opciones de pago", "es siempre ilegal", "solo funciona en Linux"], a: 1, e: "La parte básica es gratuita y se paga por funciones extra." },
    { q: "Antes de vender un ordenador conviene…", o: ["vaciar la papelera", "restablecerlo con borrado seguro", "cambiar el fondo", "desinstalar el navegador"], a: 1, e: "Así los datos no se pueden recuperar." },
    { q: "Alquilar máquinas virtuales a un proveedor es…", o: ["SaaS", "PaaS", "IaaS", "freeware"], a: 2, e: "Infraestructura como servicio." },
    { q: "¿Qué sistema de archivos usa macOS?", o: ["NTFS", "ext4", "APFS", "FAT16"], a: 2, e: "Apple File System." },
  ],
  tarjetas: [
    ["Fases del arranque", "Firmware y POST, gestor de arranque, núcleo, servicios y escritorio."],
    ["Multitarea", "El planificador reparte la CPU en turnos de milisegundos."],
    ["SaaS, PaaS, IaaS", "Aplicación, plataforma o infraestructura como servicio."],
    ["Máquina virtual", "Ordenador simulado dentro de otro mediante un hipervisor."],
  ],
  glosario: [
    ["Sistema operativo", "Programa principal que gestiona el hardware y hace de intermediario con las aplicaciones."],
    ["Firmware (UEFI)", "Programa grabado en la placa base que arranca el equipo."],
    ["POST", "Autocomprobación del hardware al encender el ordenador."],
    ["Núcleo (kernel)", "Parte central del sistema operativo que controla memoria, procesos y dispositivos."],
    ["Proceso", "Programa en ejecución."],
    ["Planificador", "Parte del sistema que reparte el tiempo de CPU entre procesos."],
    ["Memoria virtual", "Espacio del disco que se usa como RAM cuando esta se llena."],
    ["Licencia", "Contrato que fija lo que se puede hacer con un programa."],
    ["Software libre", "Programa que permite usarlo, estudiarlo, modificarlo y distribuirlo."],
    ["Código fuente", "Instrucciones del programa escritas en un lenguaje de programación."],
    ["Sistema de archivos", "Forma de organizar los datos en un disco (NTFS, APFS, ext4, exFAT)."],
    ["Formatear", "Preparar un disco con un sistema de archivos nuevo, borrando el índice anterior."],
    ["Partición", "Parte de un disco que el sistema trata como una unidad independiente."],
    ["Hipervisor", "Programa que crea y gestiona máquinas virtuales."],
    ["SaaS", "Software como servicio: aplicación lista para usar desde Internet."],
    ["IaaS", "Infraestructura como servicio: alquiler de servidores, discos y redes virtuales."],
    ["Sincronización", "Mantener iguales los archivos en varios dispositivos a través de la nube."],
    ["RGPD", "Reglamento europeo que protege los datos personales."],
  ],
  situacion: {
    titulo: "Plan antidesastres para mis archivos",
    reto: "Imagina que mañana pierdes el móvil y el ordenador. Diseña y pon en marcha un sistema para que tus trabajos, fotos y contraseñas sigan a salvo y en orden, usando solo herramientas gratuitas o libres.",
    pasos: [
      "Haz inventario de tus datos importantes: dónde están, cuánto ocupan y qué pasaría si los pierdes.",
      "Diseña una estructura de carpetas y una norma de nombres de archivo y aplícala a un trimestre de trabajos.",
      "Aplica la regla 3-2-1: decide qué copia va en el equipo, cuál en un disco o USB y cuál en la nube.",
      "Revisa la seguridad de tu cuenta en la nube: verificación en dos pasos, enlaces compartidos y permisos de aplicaciones.",
      "Haz una prueba de recuperación: borra (en una copia) un archivo y recupéralo desde el historial o la copia.",
    ],
    producto: "Una guía ilustrada de una página «Mi plan 3-2-1» con capturas del sistema funcionando.",
    evaluacion: ["La estructura de carpetas y los nombres son coherentes y se aplican de verdad.", "El plan cumple la regla 3-2-1 y explica la frecuencia de las copias.", "Se configuran correctamente las medidas de seguridad de la cuenta.", "La prueba de recuperación funciona y se documenta."],
  },
  objetivos: ["Describir el arranque del ordenador y la gestión de procesos", "Distinguir tipos de licencias y modelos de nube (SaaS, PaaS, IaaS)"],
  fuentes: [{ t: "Free Software Foundation: ¿Qué es el software libre?", url: "https://www.gnu.org/philosophy/free-sw.es.html" }],
});
