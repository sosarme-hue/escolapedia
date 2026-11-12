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
