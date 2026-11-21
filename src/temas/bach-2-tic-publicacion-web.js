// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Publicación y difusión de contenidos en la web: alojamiento, dominios, despliegue, HTTPS, CMS, SEO, licencias y legalidad.
const B = require("./_bach2-tic");

const T = (s) => `<code>${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
const fondo = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;

// Partes de una URL y de un nombre de dominio.
const url = () => {
  const parte = (x, w, t, c, et, y = 72) => `<rect x="${x}" y="${y - 16}" width="${w}" height="24" rx="4" fill="${c}" fill-opacity=".16" stroke="${c}" stroke-width="1.6"/>${B.tx(x + w / 2, y + 1, t, { fs: 10, maxW: w - 4, bold: true, color: c, font: "ui-monospace,monospace" })}
    <path d="M${x + w / 2} ${y + 9} V ${y + 26}" stroke="${c}" stroke-width="1.4"/>${B.tx(x + w / 2, y + 38, et, { fs: 9, maxW: w + 14, color: c, bold: true })}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Partes de la dirección https://www.miweb.es/blog: protocolo https, subdominio www, nombre de dominio miweb, dominio de nivel superior es y ruta /blog">
  ${fondo}${B.tx(130, 22, "Anatomía de una dirección web", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  ${parte(8, 58, "https://", "var(--red)", "protocolo")}${parte(68, 38, "www.", "var(--muted)", "subdominio")}${parte(108, 52, "miweb", "var(--pen)", "dominio")}${parte(162, 30, ".es", "var(--leaf)", "TLD")}${parte(194, 58, "/blog", "var(--sun)", "ruta")}
  <rect x="20" y="128" width="220" height="38" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="1.2"/>
  ${B.tx(130, 143, "DNS: miweb.es → 185.27.134.10", { fs: 10, maxW: 210, bold: true, font: "ui-monospace,monospace" })}
  ${B.tx(130, 158, "el nombre se traduce a la IP del servidor", { fs: 9, maxW: 210, color: "var(--muted)" })}
</svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Publicación y difusión de contenidos en la web",
  minutos: 120,
  objetivos: [
    "Explicar qué se necesita para publicar un sitio web: alojamiento, dominio, DNS y certificado",
    "Comparar tipos de alojamiento y publicar un sitio estático subiendo sus archivos o desde un repositorio",
    "Valorar el uso de gestores de contenidos y mantenerlos actualizados y seguros",
    "Aplicar técnicas básicas de posicionamiento, rendimiento y difusión de contenidos",
    "Respetar la propiedad intelectual y elegir licencias adecuadas, como Creative Commons",
    "Cumplir las obligaciones legales de una web y cuidar la identidad digital propia y ajena",
  ],
  claves: ["alojamiento", "dominio", "DNS", "servidor", "SFTP", "despliegue", "HTTPS", "certificado", "CMS", "SEO", "sitemap", "rendimiento", "Creative Commons", "RGPD", "cookies", "identidad digital"],
  pregunta: {
    texto: "Has terminado la web del club de teatro en tu ordenador y se ve perfecta. Le pasas a un amigo la dirección C:/Usuarios/Ana/teatro/index.html, pero él no puede abrirla. ¿Qué falta para que cualquiera pueda verla?",
    respuesta: "Falta <mark>publicarla</mark>. Esa dirección solo existe en tu disco duro. Para que esté en internet hay que copiar los archivos a un <b>servidor</b> conectado permanentemente (un <b>alojamiento</b> o <i>hosting</i>), darle un nombre fácil de recordar (un <b>dominio</b>, como <code>teatrodelinsti.es</code>) que el sistema <b>DNS</b> traduzca a la dirección del servidor, y protegerla con un <b>certificado</b> para que funcione con HTTPS. Después hay que darla a conocer y cumplir las normas sobre derechos de autor y protección de datos.",
  },
  lectura: {
    titulo: "Cualquiera puede publicar",
    html: `<p>Antes de internet, para que un texto llegara a miles de personas hacía falta una editorial, una imprenta o una emisora. La web cambió eso por completo: hoy cualquier persona puede publicar un blog, un pódcast, un vídeo o una tienda online con un coste muy bajo, e incluso gratis. En el mundo hay más de mil millones de sitios web, aunque solo una pequeña parte está activa.</p>
    <p>Esta democratización de la publicación ha tenido consecuencias enormes. Ha permitido que surjan voces nuevas, que la ciencia y la cultura se compartan libremente y que pequeños negocios vendan en todo el mundo. Pero también ha facilitado la difusión de bulos, el uso de obras ajenas sin permiso y la exposición de datos personales.</p>
    <p>Por eso, publicar con responsabilidad exige conocimientos técnicos (cómo funciona el alojamiento, cómo se protege una web) y también legales y éticos: de quién es lo que publico, con qué licencia lo comparto, qué datos recojo de mis visitantes y cómo construyo mi identidad digital.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Del ordenador a internet",
      html: `<p>Una página que funciona en tu ordenador no está en internet. Para <mark>publicar</mark> un sitio web hacen falta cuatro elementos:</p>
      <ul><li>Los <b>archivos</b> del sitio: HTML, CSS, JavaScript, imágenes y otros recursos, organizados en carpetas.</li>
      <li>Un <b>servidor web</b>: un ordenador conectado a internet de forma permanente, con un programa (como Apache o Nginx) que responde a las peticiones HTTP enviando esos archivos.</li>
      <li>Un <b>nombre de dominio</b>, como <code>escolapedia.com</code>, que las personas puedan recordar.</li>
      <li>Un <b>certificado</b> que permita la conexión cifrada con HTTPS.</li></ul>
      <p>Los sitios web pueden ser de dos tipos:</p>
      <ul><li><b>Estáticos</b>: están formados por archivos que se envían tal cual. Todos los visitantes reciben lo mismo. Son rápidos, baratos y muy seguros, porque no ejecutan programas en el servidor.</li>
      <li><b>Dinámicos</b>: el servidor ejecuta un programa (en PHP, Python, Node.js…) que construye cada página en el momento, normalmente consultando una base de datos. Permiten registros de usuarios, comentarios o tiendas, pero son más complejos de mantener y proteger.</li></ul>
      <p>El proceso de llevar una nueva versión del sitio al servidor se llama <b>despliegue</b> (<i>deploy</i>). Antes de desplegar conviene probar el sitio localmente con un pequeño servidor de pruebas, como la extensión Live Server de Visual Studio Code o la orden <code>python -m http.server</code>, que sirve la carpeta actual en <code>http://localhost:8000</code>.</p>`,
      svg: B.flujo("Pasos para publicar un sitio web", ["Crear y probar los archivos en local", "Contratar alojamiento", "Registrar un dominio y configurar el DNS", "Subir los archivos (despliegue)", "Activar HTTPS y comprobar"], { t: "Publicar una web" }),
    },
    {
      h: "El alojamiento web",
      html: `<p>El <mark>alojamiento web</mark> (<i>hosting</i>) es el servicio que ofrece espacio en un servidor conectado a internet. Hay varios tipos, según las necesidades del sitio:</p>
      <ul><li><b>Alojamiento compartido</b>: muchos sitios comparten el mismo servidor. Es barato y sencillo, se gestiona desde un panel de control y suele incluir correo y bases de datos. Es suficiente para la mayoría de las webs pequeñas y medianas.</li>
      <li><b>Servidor privado virtual (VPS)</b>: una máquina virtual con recursos reservados y control total del sistema operativo. Exige saber administrar servidores.</li>
      <li><b>Servidor dedicado</b>: un ordenador físico completo para un solo cliente, para sitios con mucho tráfico.</li>
      <li><b>Nube</b> (<i>cloud</i>): recursos que crecen o se reducen según la demanda y se pagan por uso, como los de Amazon Web Services, Google Cloud o Azure.</li>
      <li><b>Alojamiento estático gratuito</b>: servicios como GitHub Pages, Netlify o Cloudflare Pages publican gratis sitios estáticos directamente desde un repositorio, con HTTPS incluido. Son ideales para proyectos escolares y portafolios.</li></ul>
      <p>Para elegir un alojamiento conviene comparar el espacio de almacenamiento, la transferencia mensual de datos, los lenguajes y bases de datos que admite, las copias de seguridad, el servicio técnico, la ubicación de los servidores (importante para la protección de datos) y el compromiso de disponibilidad (<i>uptime</i>), que se expresa en porcentaje: un 99,9 % significa que la web puede estar caída unas 9 horas al año.</p>`,
      svg: B.rejilla("Tipos de alojamiento web", ["Tipo", "Ideal para"], [["Compartido", "webs pequeñas"], ["VPS", "control total"], ["Dedicado", "mucho tráfico"], ["Nube", "demanda variable"], ["Estático gratis", "proyectos, portafolio"]], { t: "Alojamiento" }),
      video: B.V("pub-hosting", "Hosting y dominio explicado para principiantes"),
    },
    {
      h: "Dominios y DNS",
      html: `<p>Los ordenadores de internet se identifican mediante <b>direcciones IP</b>, como <code>185.27.134.10</code>, difíciles de recordar. Un <mark>nombre de dominio</mark> es un nombre único y fácil de recordar asociado a esa dirección. Se lee de derecha a izquierda, de lo más general a lo más concreto:</p>
      <ul><li>El <b>dominio de nivel superior</b> (TLD): genérico (<code>.com</code>, <code>.org</code>, <code>.net</code>) o territorial (<code>.es</code>, <code>.cat</code>, <code>.eu</code>).</li>
      <li>El <b>nombre</b> elegido: <code>miweb</code>.</li>
      <li>Los <b>subdominios</b> opcionales, que se crean libremente: <code>www.miweb.es</code>, <code>blog.miweb.es</code>.</li></ul>
      <p>Los dominios no se compran para siempre: se <b>registran</b> por periodos de uno o más años en un registrador acreditado, y hay que renovarlos. Los dominios <code>.es</code> los gestiona la entidad pública Red.es. Al registrarlo se elige un nombre corto, fácil de escribir y sin infringir marcas registradas.</p>
      <p>El <mark>DNS</mark> (<i>Domain Name System</i>) es la «guía telefónica» de internet: un sistema de servidores distribuidos por todo el mundo que traduce los nombres de dominio en direcciones IP. Para cada dominio se configuran unos <b>registros DNS</b>:</p>
      <ul><li><b>A</b> (o <b>AAAA</b> para IPv6): asocia el nombre a la IP del servidor web.</li>
      <li><b>CNAME</b>: hace que un nombre sea un alias de otro (<code>www</code> → <code>miweb.es</code>).</li>
      <li><b>MX</b>: indica qué servidor recibe el correo del dominio.</li>
      <li><b>TXT</b>: textos para verificar la propiedad del dominio o proteger el correo.</li></ul>
      <p>Los cambios en el DNS pueden tardar desde minutos hasta un día en extenderse por todo el mundo, porque los servidores guardan las respuestas durante un tiempo (TTL).</p>`,
      svg: url(),
    },
    {
      h: "Subir los archivos: el despliegue",
      html: `<p>Hay varias formas de llevar los archivos al servidor:</p>
      <ul><li><b>Administrador de archivos</b> del panel de control: se suben desde el navegador. Es sencillo para cambios pequeños.</li>
      <li><b>SFTP</b> (<i>SSH File Transfer Protocol</i>): un programa cliente, como FileZilla, conecta con el servidor y permite arrastrar carpetas. Debe usarse SFTP y no el antiguo FTP, que envía la contraseña sin cifrar.</li>
      <li><b>Despliegue desde un repositorio Git</b>: el código se guarda en GitHub o GitLab y el servidor descarga automáticamente la última versión cada vez que se publica un cambio. Es la forma profesional, porque deja un historial de todas las versiones y permite volver atrás si algo falla.</li></ul>
      <p>Algunas normas para evitar errores al publicar:</p>
      <ul><li>La página principal de cada carpeta debe llamarse <code>index.html</code>: es la que el servidor envía cuando se pide la carpeta.</li>
      <li>Hay que usar <b>rutas relativas</b> (<code>img/logo.png</code>) y nunca rutas de tu disco (<code>C:/Usuarios/…</code>).</li>
      <li>Los servidores suelen funcionar con Linux, que <b>distingue mayúsculas y minúsculas</b>: <code>Foto.JPG</code> y <code>foto.jpg</code> son archivos distintos. Conviene usar siempre minúsculas, sin espacios ni tildes.</li>
      <li>Hay que comprobar los <b>permisos</b> de los archivos y no subir nunca archivos con contraseñas o claves.</li></ul>
      ${B.code(`miweb/
├── index.html
├── contacto.html
├── css/estilos.css
├── js/app.js
└── img/logo.png`)}
      <p>Después de desplegar, hay que comprobar el sitio publicado en varios dispositivos: los fallos más comunes son imágenes que no cargan por una ruta mal escrita y enlaces rotos.</p>`,
      svg: B.comparar("Subir archivos a mano frente a desplegar desde Git", ["A mano (SFTP)", ["arrastrar carpetas", "sin historial", "fácil equivocarse", "cambios pequeños"]], ["Desde Git", ["git push", "historial de versiones", "volver atrás", "despliegue automático"]]),
    },
    {
      h: "HTTPS y certificados",
      html: `<p>Con HTTP, los datos viajan sin cifrar: cualquiera que controle la red, como un punto wifi público malicioso, podría leer las contraseñas o modificar la página. <mark>HTTPS</mark> cifra la comunicación entre el navegador y el servidor mediante el protocolo <b>TLS</b> y garantiza tres cosas: <b>confidencialidad</b> (nadie puede leer los datos), <b>integridad</b> (nadie puede modificarlos sin que se note) y <b>autenticidad</b> (el servidor es quien dice ser).</p>
      <p>La autenticidad se basa en un <b>certificado digital</b>: un documento electrónico que asocia el dominio con una clave pública y que está firmado por una <b>autoridad de certificación</b> en la que confían los navegadores. Cuando visitas una web con HTTPS, el navegador comprueba que el certificado es válido, que no ha caducado y que corresponde al dominio; si algo falla, muestra un aviso de seguridad.</p>
      <p>Hoy los certificados básicos son gratuitos gracias a <b>Let's Encrypt</b>, una autoridad sin ánimo de lucro, y la mayoría de los alojamientos los instalan y renuevan automáticamente cada pocos meses. Una vez instalado el certificado, hay que:</p>
      <ul><li><b>Redirigir</b> todo el tráfico de HTTP a HTTPS.</li>
      <li>Evitar el <b>contenido mixto</b>: una página HTTPS que carga imágenes o scripts por HTTP pierde la protección y el navegador puede bloquearlos.</li>
      <li>Comprobar el certificado pulsando el icono junto a la dirección.</li></ul>
      <p>Ojo: el candado indica que la conexión está cifrada, no que la web sea de fiar. Muchas webs fraudulentas usan HTTPS. Hay que fijarse en que el dominio sea exactamente el esperado.</p>`,
      svg: B.cajas("Qué garantiza HTTPS", [["Confidencialidad", "nadie lee|los datos"], ["Integridad", "nadie los|modifica"], ["Autenticidad", "el servidor es|quien dice ser"], ["El candado", "no significa|web de fiar"]], { t: "HTTPS con TLS" }),
    },
    {
      h: "Gestores de contenidos",
      html: `<p>Un <mark>gestor de contenidos</mark> o <b>CMS</b> (<i>Content Management System</i>) es una aplicación web que permite crear y administrar un sitio sin escribir código: los textos, las imágenes y las páginas se editan desde un panel en el navegador, y el CMS los guarda en una base de datos y genera las páginas con una plantilla. Separa así el <b>contenido</b>, que gestionan los redactores, del <b>diseño</b> y la <b>programación</b>.</p>
      <p>El más usado es <b>WordPress</b>, software libre que funciona en más del 40 % de los sitios web del mundo. Otros son Joomla y Drupal, y existen plataformas alojadas, como Wix o Google Sites, y CMS de tiendas online, como PrestaShop o Shopify. Los centros educativos usan a menudo WordPress o Google Sites, y Moodle como plataforma de aprendizaje.</p>
      <p>Los CMS se amplían con <b>temas</b>, que cambian el diseño, y <b>complementos</b> (<i>plugins</i>), que añaden funciones: formularios, galerías, copias de seguridad, SEO, tienda… Su gran ventaja es que cualquiera puede publicar; su punto débil, la seguridad. Al ser tan populares, son el objetivo de ataques automáticos que buscan versiones antiguas con vulnerabilidades conocidas. Por eso hay que:</p>
      <ul><li>Mantener actualizados el núcleo, los temas y los complementos.</li>
      <li>Instalar solo complementos necesarios, de fuentes fiables y mantenidos.</li>
      <li>Usar contraseñas robustas, verificación en dos pasos y usuarios con el mínimo privilegio.</li>
      <li>Hacer copias de seguridad periódicas y comprobar que se pueden restaurar.</li></ul>
      <p>Para sitios sencillos que cambian poco, un sitio estático puede ser más rápido y seguro.</p>`,
      svg: B.comparar("Sitio estático frente a gestor de contenidos", ["Sitio estático", ["archivos HTML", "muy rápido y seguro", "editar exige código", "portafolio, apuntes"]], ["CMS", ["base de datos + PHP", "editar desde el panel", "actualizar siempre", "blog, tienda, centro"]]),
      video: B.V("pub-cms", "Qué es WordPress, explicado fácilmente"),
    },
    {
      h: "Posicionamiento en buscadores",
      html: `<p>La mayoría de las visitas a un sitio llegan desde un buscador, y casi nadie pasa de la primera página de resultados. El <mark>SEO</mark> (<i>Search Engine Optimization</i>, optimización para buscadores) es el conjunto de técnicas para que una web aparezca en buenas posiciones de forma natural, sin pagar anuncios.</p>
      <p>Los buscadores funcionan en tres fases: unos programas llamados <b>arañas</b> o <i>crawlers</i> recorren la web siguiendo enlaces; el contenido se <b>indexa</b> en enormes bases de datos; y, ante cada búsqueda, un algoritmo <b>ordena</b> los resultados según cientos de factores, sobre todo la relevancia y la calidad del contenido.</p>
      <p>Buenas prácticas de SEO técnico y de contenido:</p>
      <ul><li>Un ${T("<title>")} único y descriptivo en cada página y una ${T('<meta name="description">')} que resuma su contenido: es lo que aparece en los resultados.</li>
      <li>Un único ${T("<h1>")}, encabezados ordenados y HTML semántico.</li>
      <li><b>URL amigables</b>: <code>/recetas/tortilla-de-patatas</code> mejor que <code>/p?id=8371</code>.</li>
      <li>Textos alternativos en las imágenes, que también mejoran la accesibilidad.</li>
      <li>Un archivo <b>sitemap.xml</b> con la lista de páginas y un <b>robots.txt</b> que indica qué partes no deben rastrearse.</li>
      <li>Una web rápida, adaptada al móvil y con HTTPS.</li>
      <li>Sobre todo, <b>contenido original y útil</b> que responda a lo que buscan las personas, y <b>enlaces</b> desde otros sitios de calidad.</li></ul>
      <p>Las herramientas gratuitas para propietarios de sitios, como Google Search Console, muestran qué búsquedas traen visitas y qué errores encuentra el buscador. Hay que desconfiar de quien promete «el primer puesto»: las trampas se penalizan.</p>`,
      svg: B.flujo("Cómo funciona un buscador", ["Rastrear: las arañas siguen enlaces", "Indexar: guardar y analizar el contenido", "Ordenar: relevancia y calidad", "Mostrar: title y description"], { t: "Buscadores" }),
      video: B.V("pub-seo", "Aprende SEO en 15 minutos con ejemplos"),
    },
    {
      h: "Rendimiento y analítica",
      html: `<p>La velocidad importa: si una página tarda más de tres segundos en cargar en el móvil, una gran parte de los visitantes la abandona, y los buscadores la tienen en cuenta. Google mide la experiencia con las <b>Core Web Vitals</b>, que evalúan cuánto tarda en verse el contenido principal, cuánto tarda en responder a las acciones y si los elementos «saltan» mientras cargan.</p>
      <p>Las técnicas más eficaces para mejorar el <mark>rendimiento</mark> son:</p>
      <ul><li><b>Optimizar las imágenes</b>, que suelen ser lo que más pesa: redimensionarlas al tamaño en que se muestran, comprimirlas y usar formatos modernos como WebP o AVIF. Una foto de móvil de 4 MB puede quedarse en 150 kB sin pérdida apreciable.</li>
      <li>Cargar las imágenes de abajo solo cuando el usuario se acerca a ellas, con <code>loading="lazy"</code>.</li>
      <li><b>Minificar</b> el CSS y el JavaScript (quitar espacios y comentarios) y evitar scripts innecesarios.</li>
      <li>Aprovechar la <b>caché</b> del navegador para no descargar dos veces lo mismo.</li>
      <li>Usar una <b>CDN</b> (red de distribución de contenidos), que copia el sitio en servidores repartidos por el mundo para servirlo desde el más cercano.</li></ul>
      <p>La herramienta Lighthouse, integrada en Chrome, analiza el rendimiento, la accesibilidad, las buenas prácticas y el SEO, y propone mejoras concretas.</p>
      <p>Para saber cuántas personas visitan el sitio, de dónde llegan y qué páginas leen, se usan herramientas de <b>analítica web</b>. Si instalan <i>cookies</i> o rastrean a los usuarios, hay que pedir antes su consentimiento. Existen alternativas respetuosas con la privacidad que no usan cookies y no recogen datos personales.</p>`,
      svg: B.barras("Peso típico de una página antes y después de optimizar, en kilobytes", [["Imágenes antes", 3200], ["Imágenes WebP", 420], ["JS antes", 900], ["JS minificado", 310], ["CSS", 60]], { t: "Peso de una página (kB)", unidad: " kB" }),
    },
    {
      h: "Difundir los contenidos",
      html: `<p>Publicar no basta: hay que conseguir que el contenido llegue a su público. Una <b>estrategia de difusión</b> empieza por definir a quién nos dirigimos, qué le interesa y en qué canales está.</p>
      <ul><li><b>Redes sociales</b>: cada una tiene su lenguaje, formato y público. Hay que adaptar el mensaje, publicar con regularidad y conversar con la comunidad, no solo anunciar.</li>
      <li><b>Boletines</b> por correo electrónico: llegan directamente a quienes se han suscrito voluntariamente, y no dependen de los algoritmos de las redes.</li>
      <li><b>Sindicación</b>: los canales <b>RSS</b> permiten a los lectores recibir las novedades de muchos sitios en un lector, sin algoritmos. Los pódcast se distribuyen así.</li>
      <li><b>Contenidos multimedia</b>: vídeos, pódcast e infografías, publicados en plataformas especializadas e insertados en la web.</li>
      <li><b>Colaboración</b>: enlaces desde otras webs, entrevistas, participación en foros y comunidades.</li></ul>
      <p>Para que los enlaces se vean bien al compartirlos en redes y mensajería, se añaden en el <code>head</code> las etiquetas <b>Open Graph</b>, que indican el título, la descripción y la imagen de vista previa:</p>
      ${B.code(`<meta property="og:title" content="Festival de teatro 2026">
<meta property="og:description" content="Programa y entradas del festival del instituto">
<meta property="og:image" content="https://teatrodelinsti.es/img/cartel.jpg">`)}
      <p>Los contenidos deben ser <b>accesibles</b> en todos los canales: subtítulos en los vídeos, texto alternativo en las imágenes y descripciones de las infografías. Y hay que medir los resultados (visitas, suscripciones, interacciones) para mejorar la estrategia.</p>`,
      svg: B.ciclo("Ciclo de una estrategia de difusión", "Difusión", ["Público", "Contenido", "Canales", "Medir"]),
    },
    {
      h: "Propiedad intelectual y licencias",
      html: `<p>Toda obra original (un texto, una foto, una canción, un programa) está protegida por los <mark>derechos de autor</mark> desde el momento en que se crea, sin necesidad de registrarla ni de poner el símbolo ©. El autor tiene <b>derechos morales</b>, que no se pueden ceder, como ser reconocido como autor, y <b>derechos de explotación</b> (reproducir, distribuir, comunicar y transformar la obra), que en España duran toda su vida y 70 años después de su muerte. Después, la obra pasa al <b>dominio público</b> y puede usarse libremente.</p>
      <p>Que algo esté en internet <b>no significa</b> que se pueda usar: para publicar una imagen o un texto ajeno hace falta permiso del autor, salvo excepciones como la <b>cita</b> de fragmentos con fines de análisis o enseñanza, indicando la fuente. Usar obras sin permiso puede suponer la retirada del contenido, sanciones o el cierre de una cuenta.</p>
      <p>Las <mark>licencias Creative Commons</mark> permiten a los autores conceder por adelantado algunos permisos, combinando cuatro condiciones:</p>
      <ul><li><b>BY</b> (reconocimiento): hay que citar al autor. Está en todas las licencias.</li>
      <li><b>SA</b> (compartir igual): las obras derivadas deben usar la misma licencia.</li>
      <li><b>NC</b> (no comercial): no se permite el uso comercial.</li>
      <li><b>ND</b> (sin obras derivadas): no se puede modificar.</li></ul>
      <p>La licencia más abierta es CC BY; la más restrictiva, CC BY-NC-ND. Wikipedia usa CC BY-SA. Con <b>CC0</b> el autor renuncia a sus derechos. En el software existen licencias libres equivalentes, como la GPL o la MIT.</p>
      <p>Para encontrar recursos que se pueden reutilizar hay bancos de imágenes y sonidos libres y filtros de licencia en los buscadores. Al usarlos, hay que citar siempre el título, el autor, la fuente y la licencia.</p>`,
      svg: B.rejilla("Condiciones de las licencias Creative Commons", ["Condición", "Significa"], [["BY", "citar al autor"], ["SA", "compartir igual"], ["NC", "no comercial"], ["ND", "sin obras derivadas"], ["CC0", "dominio público"]], { t: "Creative Commons" }),
    },
    {
      h: "Obligaciones legales de un sitio web",
      html: `<p>Publicar una web conlleva responsabilidades legales. En España, las principales normas son:</p>
      <ul><li>La <b>LSSI</b> (Ley de Servicios de la Sociedad de la Información) obliga a los sitios con actividad económica, aunque sea publicidad, a incluir un <b>aviso legal</b> con los datos del titular: nombre o razón social, NIF, domicilio y correo de contacto. También regula el envío de comunicaciones comerciales, que exige consentimiento previo.</li>
      <li>El <b>RGPD</b> (Reglamento General de Protección de Datos) y la LOPDGDD regulan el tratamiento de datos personales. Si un formulario recoge nombres o correos, hay que informar con una <b>política de privacidad</b> de quién trata los datos, para qué, durante cuánto tiempo y cómo ejercer los derechos de acceso, rectificación, supresión u oposición; recoger solo los datos necesarios; y protegerlos. Los menores de 14 años no pueden consentir por sí mismos.</li>
      <li>Las <b>cookies</b> que no son técnicas (las de analítica o publicidad) solo pueden instalarse con el <b>consentimiento</b> previo del usuario, que debe poder rechazarlas con la misma facilidad con que las acepta. Es obligatoria una <b>política de cookies</b>.</li>
      <li>La normativa de <b>accesibilidad</b> obliga a las webs del sector público y, desde 2025, a muchos servicios privados, como el comercio electrónico.</li></ul>
      <p>La autoridad encargada de vigilar la protección de datos en España es la <b>Agencia Española de Protección de Datos</b> (AEPD), que puede imponer multas elevadas. Su web ofrece guías y herramientas gratuitas para cumplir la ley.</p>
      <p>Además, el titular de la web es responsable de los contenidos que publica, incluidos los comentarios de terceros si, una vez avisado, no retira los que sean ilícitos.</p>`,
      svg: B.cajas("Textos legales de un sitio web", [["Aviso legal", "LSSI: quién|es el titular"], ["Privacidad", "RGPD: qué datos|y para qué"], ["Cookies", "consentimiento|previo"], ["Accesibilidad", "WCAG|y declaración"]], { t: "Cumplir la ley" }),
    },
    {
      h: "Identidad digital y publicación responsable",
      html: `<p>Todo lo que publicamos, y lo que otros publican sobre nosotros, construye nuestra <mark>identidad digital</mark>: la imagen que se forma de una persona a partir de la información que hay de ella en internet. Deja una <b>huella digital</b> difícil de borrar, porque los contenidos se copian, se comparten y se archivan. Cada vez más centros de estudios y empresas buscan en internet a los candidatos.</p>
      <p>Algunas pautas de publicación responsable:</p>
      <ul><li><b>Piensa antes de publicar</b>: ¿te importaría que lo viera tu familia o una empresa dentro de diez años?</li>
      <li>Revisa la <b>configuración de privacidad</b> de tus perfiles y separa la vida personal de la profesional.</li>
      <li>No publiques imágenes ni datos de otras personas sin su <b>consentimiento</b>. La imagen de cada persona está protegida por la ley.</li>
      <li>Cuida la <b>netiqueta</b>: respeto, tono adecuado, sin insultos ni acoso.</li>
      <li>Busca tu nombre periódicamente en los buscadores para saber qué aparece. Ante contenidos ilícitos o que vulneran tu intimidad, puedes pedir su retirada y ejercer el <b>derecho al olvido</b>.</li></ul>
      <p>Quien publica también tiene la responsabilidad de no contribuir a la <b>desinformación</b>. Antes de difundir algo hay que <b>verificarlo</b>: comprobar la fuente y la fecha, buscar si otros medios fiables lo confirman, hacer una búsqueda inversa de las imágenes y desconfiar de los titulares que buscan provocar emociones fuertes. Los contenidos creados con inteligencia artificial, como imágenes o voces falsas, hacen más necesaria que nunca esta comprobación.</p>
      <p>Una buena identidad digital también es una oportunidad: un portafolio web con tus proyectos de TIC puede ser tu mejor carta de presentación.</p>`,
      svg: B.flujo("Verificar antes de compartir", ["¿Quién lo publica? Fuente", "¿Cuándo? Fecha", "¿Lo confirman otros medios fiables?", "Búsqueda inversa de imágenes", "Si hay dudas, no compartir"], { t: "Contra la desinformación" }),
    },
  ],
  figura: {
    titulo: "Ideas clave para publicar en la web",
    items: [["Servidor", "hosting", "estático o", "dinámico"], ["Nombre", "dominio", "DNS: registros", "A, CNAME, MX"], ["Visibilidad", "SEO", "title, contenido,", "velocidad"], ["Ley", "licencias", "CC, RGPD,", "LSSI y cookies"]],
  },
  video: B.V("pub-general", "Antes de subir un sitio web a internet"),
  quiz: [
    ["El servicio que ofrece espacio en un servidor conectado a internet se llama…", ["dominio", "alojamiento o hosting", "navegador", "certificado"], 1, "Hosting."],
    ["Un sitio estático…", ["usa siempre una base de datos", "envía los mismos archivos a todos los visitantes", "no puede tener CSS", "no se puede publicar"], 1, "Archivos tal cual."],
    ["¿Qué alojamiento es gratuito para sitios estáticos desde un repositorio?", ["Un servidor dedicado", "GitHub Pages", "Un VPS", "Un CMS"], 1, "También Netlify o Cloudflare Pages."],
    ["En miweb.es, «.es» es…", ["el subdominio", "el dominio de nivel superior", "el protocolo", "la ruta"], 1, "TLD territorial."],
    ["El DNS sirve para…", ["cifrar la web", "traducir nombres de dominio en direcciones IP", "subir archivos", "diseñar la página"], 1, "La guía telefónica de internet."],
    ["El registro DNS que indica el servidor de correo es…", ["A", "MX", "CNAME", "TXT"], 1, "Mail exchanger."],
    ["Un dominio se…", ["compra para siempre", "registra por periodos que hay que renovar", "regala con el ordenador", "crea en el navegador"], 1, "Uno o más años."],
    ["Para subir archivos de forma segura se usa…", ["FTP", "SFTP", "HTTP", "SMTP"], 1, "FTP no cifra la contraseña."],
    ["La página principal de una carpeta debe llamarse…", ["home.htm", "index.html", "principal.html", "Inicio.HTML"], 1, "Se envía al pedir la carpeta."],
    ["En un servidor Linux, Foto.JPG y foto.jpg son…", ["el mismo archivo", "archivos distintos", "un error", "imágenes iguales siempre"], 1, "Distingue mayúsculas."],
    ["HTTPS garantiza…", ["que la web es honrada", "confidencialidad, integridad y autenticidad del servidor", "más velocidad", "mejor diseño"], 1, "El candado no implica fiabilidad."],
    ["Let's Encrypt ofrece…", ["dominios gratis", "certificados gratuitos", "alojamiento", "plantillas"], 1, "Autoridad de certificación sin ánimo de lucro."],
    ["WordPress es…", ["un lenguaje", "un gestor de contenidos", "un navegador", "un buscador"], 1, "CMS libre."],
    ["La principal medida de seguridad en un CMS es…", ["no tener copias", "mantener actualizado el núcleo, temas y plugins", "instalar muchos plugins", "usar admin/admin"], 1, "Las versiones antiguas tienen fallos conocidos."],
    ["SEO significa…", ["seguridad de servidores", "optimización para buscadores", "sistema de edición", "servicio de envío"], 1, "Search Engine Optimization."],
    ["El archivo que lista las páginas para los buscadores es…", ["robots.txt", "sitemap.xml", "index.html", "style.css"], 1, "Mapa del sitio."],
    ["Una forma eficaz de mejorar la velocidad es…", ["usar fotos de 5 MB", "optimizar las imágenes y usar WebP", "añadir más scripts", "quitar el CSS"], 1, "Las imágenes son lo que más pesa."],
    ["La licencia CC BY-NC permite…", ["cualquier uso sin citar", "usar citando al autor, sin fines comerciales", "vender la obra", "nada"], 1, "Reconocimiento y no comercial."],
    ["Las cookies de analítica…", ["no necesitan aviso", "requieren consentimiento previo", "están prohibidas", "solo se usan en el móvil"], 1, "Las técnicas no lo necesitan."],
    ["La identidad digital es…", ["el DNI electrónico solamente", "la imagen que se forma de alguien con la información que hay sobre él en internet", "una contraseña", "un dominio"], 1, "Incluye lo que publican otros."],
  ],
  examen: [
    ["Una web tiene una disponibilidad del 99,9 %. ¿Cuántas horas puede estar caída al año aproximadamente?", ["0,9 h", "8,8 h", "36 h", "87,6 h"], 1, "0,1 % de 8760 h ≈ 8,8 h."],
    ["Las imágenes de una web no se ven al publicarla, aunque sí en local. ¿Causa más probable?", ["falta HTTPS", "rutas absolutas del disco o mayúsculas distintas en los nombres", "falta el DNS MX", "el CSS es externo"], 1, "Errores típicos de despliegue."],
    ["Quieres que blog.miweb.es apunte al mismo sitio que otro nombre. ¿Qué registro usas?", ["MX", "CNAME", "TXT", "AAAA"], 1, "Alias de otro nombre."],
    ["Una página HTTPS carga un script con http://. ¿Qué problema hay?", ["ninguno", "contenido mixto: se pierde la protección y puede bloquearse", "el DNS falla", "mejora el SEO"], 1, "Todo debe ir por HTTPS."],
    ["¿Qué etiqueta influye más en el texto que aparece como enlace en los resultados del buscador?", ["<footer>", "<title>", "<aside>", "<br>"], 1, "Título único y descriptivo."],
    ["Quieres reutilizar una foto CC BY-SA en tu web con licencia CC BY-SA. ¿Qué debes hacer?", ["nada", "citar al autor y mantener la misma licencia", "pagar al autor", "no se puede"], 1, "Reconocimiento y compartir igual."],
    ["Un formulario de inscripción a un torneo pide nombre, correo y número de cuenta bancaria, aunque es gratis. ¿Qué principio del RGPD incumple?", ["exactitud", "minimización de datos", "portabilidad", "ninguno"], 1, "Solo los datos necesarios."],
    ["Una noticia impactante circula sin fuente ni fecha. ¿Qué haces antes de compartirla?", ["compartirla rápido", "verificar fuente, fecha y confirmación en medios fiables", "añadir un comentario", "reenviarla a un grupo"], 1, "Verificación."],
  ],
  feynman: ["Qué hace falta para publicar una web y qué diferencia hay entre sitio estático y dinámico", "Qué tipos de alojamiento existen y cuándo usar cada uno", "Qué es un dominio y cómo traduce el DNS los nombres", "Cómo se suben los archivos y qué errores típicos hay que evitar", "Qué garantiza HTTPS y qué no", "Qué ventajas y riesgos tiene un CMS", "Cómo funcionan los buscadores y qué es el SEO", "Qué significan las licencias Creative Commons y qué obligaciones legales tiene una web"],
  mapa: ["PUBLICAR EN LA WEB", [["Infraestructura", "hosting · dominio · DNS"], ["Despliegue", "SFTP · Git · HTTPS"], ["Visibilidad", "CMS · SEO · difusión"], ["Responsabilidad", "licencias · RGPD · identidad"]]],
  tarjetas: [
    ["Para publicar", "Archivos + servidor + dominio + certificado."],
    ["Estático y dinámico", "Mismos archivos para todos / páginas generadas con base de datos."],
    ["Alojamiento", "Compartido, VPS, dedicado, nube, estático gratuito."],
    ["Dominio", "Nombre + TLD; se registra y se renueva."],
    ["DNS", "Registros A (IP), CNAME (alias), MX (correo), TXT."],
    ["Despliegue", "Panel, SFTP o Git; index.html, rutas relativas, minúsculas."],
    ["HTTPS", "TLS: confidencialidad, integridad y autenticidad; Let's Encrypt."],
    ["CMS", "WordPress: temas y plugins; actualizar y copias de seguridad."],
    ["SEO", "title, description, h1, URL amigables, sitemap, contenido útil."],
    ["Rendimiento", "Imágenes WebP, lazy, minificar, caché y CDN; Lighthouse."],
    ["Creative Commons", "BY, SA, NC, ND; CC0 dominio público."],
    ["Legal", "Aviso legal (LSSI), privacidad (RGPD), cookies con consentimiento."],
  ],
  ejemplos: [
    ["Publica un portafolio estático gratis con un dominio propio.", ["Subir los archivos a un repositorio de GitHub con index.html en la raíz.", "Activar GitHub Pages en la configuración del repositorio.", "Registrar el dominio y crear un registro CNAME (o A) hacia el servicio.", "Activar la opción de forzar HTTPS."], "El portafolio queda en https://midominio.es, con certificado automático y un despliegue nuevo con cada git push."],
    ["Corrige estas referencias de una web antes de subirla: <img src=\"C:\\Fotos\\Logo.PNG\"> y <a href=\"Contacto.HTML\">.", ["Copiar la imagen a la carpeta img del proyecto con nombre en minúsculas.", "Usar rutas relativas.", "Renombrar el archivo de contacto en minúsculas y actualizar el enlace."], "<img src=\"img/logo.png\" alt=\"Logotipo del club\">\n<a href=\"contacto.html\">Contacto</a>"],
    ["Configura el DNS de miweb.es: web en 185.27.134.10, www como alias y correo en mail.proveedor.com.", ["Registro A para el dominio raíz.", "CNAME para www.", "MX para el correo."], "miweb.es.      A      185.27.134.10\nwww.miweb.es.  CNAME  miweb.es.\nmiweb.es.      MX 10  mail.proveedor.com."],
    ["Mejora el SEO de una página con <title>Inicio</title> y sin descripción, de una academia de música de Toledo.", ["El title debe ser único y describir el contenido.", "Añadir una meta description atractiva.", "Revisar que haya un solo h1."], "<title>Academia de música en Toledo | Clases de guitarra y piano</title>\n<meta name=\"description\" content=\"Clases de guitarra, piano y lenguaje musical para todas las edades en el centro de Toledo. Primera clase gratis.\">"],
    ["Una foto de 4000 × 3000 píxeles (4,2 MB) se muestra a 800 píxeles de ancho. ¿Cómo la optimizas?", ["Redimensionar a 800 px (o 1600 px para pantallas de alta densidad).", "Exportar a WebP con calidad 80.", "Añadir loading=\"lazy\" si no está al principio de la página."], "Pasa de 4,2 MB a unos 100-150 kB, unas 30 veces menos, sin pérdida visible."],
    ["Escribe correctamente el crédito de una foto de Wikimedia Commons titulada «Catedral de León», de Rubén Ojeda, con licencia CC BY-SA 4.0.", ["Título, autor, fuente y licencia (con enlace).", "Indicar si se ha modificado."], "«Catedral de León», de Rubén Ojeda, Wikimedia Commons, CC BY-SA 4.0. (Si se recorta: «recortada del original».)"],
  ],
  errores: [
    "Enlazar archivos con rutas del propio ordenador o con mayúsculas distintas a las del nombre real.",
    "Usar FTP sin cifrar o subir archivos con contraseñas y claves.",
    "Pensar que el candado de HTTPS significa que una web es de confianza.",
    "No actualizar un CMS ni sus plugins, o instalar plugins de fuentes dudosas.",
    "Creer que todo lo que está en internet se puede usar libremente sin permiso ni cita.",
    "Instalar cookies de analítica o recoger datos personales sin informar ni pedir consentimiento.",
  ],
  ejercicios: {
    b: [
      ["Enumera los cuatro elementos necesarios para publicar un sitio web.", "Los archivos del sitio, un servidor (alojamiento), un nombre de dominio y un certificado para HTTPS."],
      ["Explica la diferencia entre un sitio estático y uno dinámico con un ejemplo de cada uno.", "Estático: envía los mismos archivos a todos (un portafolio). Dinámico: el servidor genera las páginas con un programa y una base de datos (una tienda online con carrito y usuarios)."],
      ["Indica las partes de https://blog.museo.org/expos/2026.", "Protocolo https, subdominio blog, dominio museo, TLD .org y ruta /expos/2026."],
      ["¿Qué hace el DNS?", "Traduce los nombres de dominio en las direcciones IP de los servidores."],
      ["¿Por qué no debe usarse FTP para subir archivos?", "Porque envía el usuario, la contraseña y los archivos sin cifrar; hay que usar SFTP."],
      ["¿Cómo debe llamarse la página principal de un sitio y por qué?", "index.html, porque es el archivo que el servidor envía cuando se pide la carpeta sin indicar un archivo."],
      ["Nombra dos servicios para publicar gratis un sitio estático.", "GitHub Pages y Netlify (también Cloudflare Pages)."],
      ["¿Qué tres propiedades garantiza HTTPS?", "Confidencialidad, integridad y autenticidad del servidor."],
      ["¿Qué es un CMS? Pon dos ejemplos.", "Un gestor de contenidos que permite crear y administrar un sitio sin programar, desde un panel: WordPress y Joomla."],
      ["Escribe dos buenas prácticas de SEO.", "Un title único y descriptivo con meta description; contenido original y útil (también URL amigables, sitemap, velocidad)."],
      ["¿Qué significan las siglas BY, NC, SA y ND de Creative Commons?", "Reconocimiento, no comercial, compartir igual y sin obras derivadas."],
      ["¿Qué es la identidad digital?", "La imagen de una persona que se forma con toda la información que hay sobre ella en internet, publicada por ella misma o por otros."],
    ],
    m: [
      ["Compara alojamiento compartido y VPS en precio, control y conocimientos necesarios.", "Compartido: barato, poco control, gestionado desde un panel y sin necesidad de saber administrar servidores. VPS: más caro, control total del sistema, exige conocimientos de administración."],
      ["Escribe los registros DNS para que tienda.es apunte a 93.184.216.34 y www sea un alias.", "tienda.es. A 93.184.216.34\nwww.tienda.es. CNAME tienda.es."],
      ["Tras cambiar el registro A de tu dominio, unos amigos ven la web nueva y otros la antigua. Explica por qué.", "Los servidores DNS guardan las respuestas durante el tiempo indicado por el TTL; hasta que caduca, algunos siguen dando la IP antigua. Es la propagación del DNS."],
      ["Ordena las ventajas del despliegue desde Git frente a subir archivos por SFTP.", "Historial de todas las versiones, posibilidad de volver atrás, despliegue automático con cada cambio, trabajo en equipo sin pisarse y menos errores manuales."],
      ["Una web muestra «No seguro» en el navegador. ¿Qué pasos sigues para solucionarlo?", "Instalar un certificado (por ejemplo, de Let's Encrypt desde el panel), redirigir todo el tráfico de HTTP a HTTPS, corregir el contenido mixto cambiando los recursos a https y comprobar el certificado."],
      ["El candado aparece en https://bancosantandr-seguro.com. ¿Es seguro introducir tus claves? Razona.", "No: el candado solo indica que la conexión está cifrada. El dominio no es el del banco (está mal escrito y añade «-seguro»), típico del phishing."],
      ["Enumera cuatro medidas para mantener seguro un sitio WordPress.", "Actualizar núcleo, temas y plugins; usar pocos plugins y de confianza; contraseñas robustas con verificación en dos pasos; copias de seguridad periódicas y probadas."],
      ["¿Cuándo elegirías un sitio estático y cuándo un CMS? Pon un caso de cada uno.", "Estático: un portafolio o unos apuntes que cambian poco y deben ser rápidos y seguros. CMS: el blog de un centro en el que muchas personas sin conocimientos técnicos publican noticias a menudo."],
      ["Escribe un robots.txt que impida rastrear la carpeta /privado/ e indique el sitemap de miweb.es.", "User-agent: *\nDisallow: /privado/\nSitemap: https://miweb.es/sitemap.xml"],
      ["Explica tres técnicas para que una página cargue más rápido en el móvil.", "Optimizar las imágenes (tamaño adecuado, WebP, lazy), minificar CSS y JavaScript quitando scripts innecesarios, y aprovechar la caché y una CDN."],
      ["Escribe las etiquetas Open Graph para compartir la página de un concierto con su imagen.", "<meta property=\"og:title\" content=\"Concierto de primavera\">\n<meta property=\"og:description\" content=\"Sábado 18 de abril, 19:00, salón de actos\">\n<meta property=\"og:image\" content=\"https://miweb.es/img/concierto.jpg\">"],
      ["Indica qué licencia CC elegirías si quieres que te citen, que no se use con fines comerciales y que se pueda modificar compartiendo igual.", "CC BY-NC-SA."],
      ["¿Qué textos legales necesita la web de una academia que vende cursos, tiene un formulario de contacto y usa analítica con cookies?", "Aviso legal (LSSI) con los datos del titular, política de privacidad (RGPD) para el formulario, política de cookies con un banner de consentimiento previo, y condiciones de contratación."],
      ["Describe el proceso para verificar una imagen viral antes de compartirla.", "Buscar la fuente original y su fecha, hacer una búsqueda inversa de la imagen para ver dónde apareció antes, comprobar si medios fiables o verificadores la confirman, y no compartirla si hay dudas."],
    ],
    a: [
      ["Diseña el plan completo de publicación de la web de una asociación vecinal con un presupuesto mínimo: tipo de sitio, alojamiento, dominio, despliegue y mantenimiento.", "Sitio estático (pocas actualizaciones, máxima seguridad), alojado gratis en GitHub Pages o Netlify, dominio .es registrado por unos pocos euros al año con un CNAME, despliegue desde Git y HTTPS automático. Mantenimiento: una persona responsable de actualizar contenidos, revisión trimestral de enlaces y renovación anual del dominio."],
      ["Una web de un instituto en WordPress ha sido hackeada y muestra publicidad. Describe qué harías para recuperarla y evitar que se repita.", "Ponerla en mantenimiento, restaurar una copia de seguridad limpia anterior al ataque, cambiar todas las contraseñas y las claves, actualizar núcleo, temas y plugins y eliminar los abandonados, revisar los usuarios administradores, activar verificación en dos pasos y un plugin de seguridad, y programar copias automáticas."],
      ["Calcula cuánto tarda en descargarse una página de 6 MB con una conexión móvil de 8 Mbit/s y con la página optimizada a 900 kB. Comenta el resultado.", "6 MB = 48 Mbit → 48/8 = 6 s. 900 kB = 7,2 Mbit → 0,9 s. Optimizar reduce el tiempo casi siete veces; con 6 s muchos usuarios abandonarían la página."],
      ["Analiza con Lighthouse la web de una institución de tu localidad y redacta un informe con tres mejoras priorizadas.", "Respuesta abierta. Ejemplo: 1) imágenes demasiado pesadas → convertir a WebP y redimensionar; 2) contraste insuficiente en el menú → oscurecer el color; 3) falta de meta description → añadir una por página."],
      ["Una empresa usa sin permiso en su catálogo una foto que publicaste en tu blog con CC BY-NC. ¿Qué derechos tienes y qué puedes hacer?", "La licencia prohíbe el uso comercial y, además, exige citarte. Puedes pedir a la empresa que la retire o que pague una licencia, notificarlo a la plataforma donde la publique y, si no responde, reclamar por la vía legal, porque es una infracción de los derechos de explotación."],
      ["Propón una estrategia de difusión de un mes para un pódcast del instituto sobre ciencia.", "Público: alumnado y familias. Canales: web del centro con RSS, plataformas de pódcast, una red social con fragmentos de vídeo subtitulados y un boletín mensual. Calendario: un episodio semanal y tres publicaciones de apoyo. Medición: escuchas, suscriptores y comentarios para ajustar temas y horarios."],
      ["Redacta una política de privacidad breve para un formulario de inscripción en un torneo escolar de ajedrez.", "Responsable: AMPA del IES X, contacto ampa@iesx.es. Datos: nombre, curso y correo de la familia. Finalidad: gestionar la inscripción y comunicar horarios. Base: consentimiento (de los tutores para menores de 14 años). Conservación: hasta el fin del torneo. No se ceden a terceros. Derechos de acceso, rectificación y supresión en el correo indicado; reclamaciones ante la AEPD."],
      ["Compara las ventajas e inconvenientes de publicar contenidos en tu propia web frente a hacerlo solo en redes sociales.", "Web propia: control del diseño y de los datos, propiedad del contenido, no depende de algoritmos ni de cambios de normas, mejor para el SEO; exige más trabajo técnico. Redes: audiencia inmediata y gratis, pero el contenido y la relación con el público dependen de la plataforma, que puede cambiar las normas o cerrar la cuenta. Lo ideal: la web como centro y las redes para difundir."],
      ["Busca tu nombre en dos buscadores y analiza tu identidad digital: qué aparece, qué imagen da y qué mejorarías.", "Respuesta abierta. Debe identificar perfiles, menciones e imágenes, valorar si son adecuados, revisar la privacidad de las redes y proponer acciones: borrar contenidos antiguos, pedir la retirada de lo que publique otro sin permiso, o crear un portafolio que aparezca en primer lugar."],
      ["Debate: ¿deberían las plataformas etiquetar obligatoriamente las imágenes y vídeos generados con inteligencia artificial? Argumenta.", "Respuesta abierta. A favor: ayuda a combatir la desinformación y las suplantaciones; la normativa europea de IA ya exige identificar ciertos contenidos sintéticos. En contra o con matices: las etiquetas se pueden eliminar, no siempre se detecta el contenido generado y puede crear falsa confianza en lo no etiquetado. Conclusión: etiquetado más educación mediática."],
    ],
  },
  glosario: [
    ["Alojamiento web", "Servicio que ofrece espacio en un servidor conectado a internet."],
    ["Servidor web", "Programa y ordenador que responden a las peticiones HTTP enviando las páginas."],
    ["Sitio estático", "Sitio formado por archivos que se envían igual a todos los visitantes."],
    ["Dominio", "Nombre único y fácil de recordar asociado a una dirección IP."],
    ["DNS", "Sistema que traduce los nombres de dominio en direcciones IP."],
    ["Despliegue", "Proceso de llevar una nueva versión del sitio al servidor."],
    ["SFTP", "Protocolo cifrado para transferir archivos."],
    ["Certificado digital", "Documento firmado por una autoridad que vincula un dominio con su clave pública."],
    ["CMS", "Gestor de contenidos para crear y administrar un sitio sin programar."],
    ["Plugin", "Complemento que añade funciones a un CMS."],
    ["SEO", "Técnicas para mejorar la posición de una web en los buscadores."],
    ["Sitemap", "Archivo con la lista de páginas de un sitio para los buscadores."],
    ["CDN", "Red de servidores que distribuye copias de un sitio por el mundo."],
    ["Derechos de autor", "Derechos morales y de explotación del creador sobre su obra."],
    ["Creative Commons", "Licencias que conceden por adelantado algunos permisos de uso."],
    ["Cookie", "Pequeño archivo que una web guarda en el navegador."],
    ["Identidad digital", "Imagen de una persona formada por la información que hay sobre ella en internet."],
  ],
  situacion: {
    titulo: "Publicamos de verdad",
    reto: "En grupos, publicad en internet, con un dominio o subdominio real y HTTPS, la web que habéis creado en los temas anteriores, y diseñad su plan de difusión y sus textos legales.",
    pasos: [
      "Elegid el tipo de alojamiento adecuado justificando la decisión y cread un repositorio con el código.",
      "Desplegad el sitio, configurad el dominio o subdominio y comprobad que funciona con HTTPS.",
      "Optimizad las imágenes, revisad el SEO básico y analizad la web con Lighthouse.",
      "Revisad que todos los recursos usados tengan licencia adecuada y citadlos; redactad el aviso legal y la política de privacidad.",
      "Diseñad y ejecutad durante dos semanas un plan de difusión y medid sus resultados.",
    ],
    producto: "Web publicada con HTTPS, informe técnico (alojamiento, DNS, Lighthouse), textos legales y memoria del plan de difusión con resultados.",
    evaluacion: [
      "La web está publicada correctamente, con dominio, HTTPS y sin enlaces rotos.",
      "Se aplican técnicas de SEO y rendimiento, justificadas con datos.",
      "Se respetan las licencias y se incluyen los textos legales necesarios.",
      "El plan de difusión es coherente y se evalúan sus resultados.",
    ],
  },
  familias: [
    "Pedidle que os enseñe su web publicada y cómo ha llegado a internet.",
    "Buscad juntos vuestros nombres en internet y comentad qué aparece.",
    "Revisad la configuración de privacidad de vuestras redes sociales.",
    "Comentad una noticia falsa reciente y cómo se podría haber detectado.",
  ],
  saberes: "Publicación y difusión de contenidos en la web: sitios estáticos y dinámicos, tipos de alojamiento, dominios y DNS, despliegue por SFTP y desde repositorios, HTTPS y certificados, gestores de contenidos y su seguridad, posicionamiento en buscadores, rendimiento y analítica, estrategias de difusión, propiedad intelectual y licencias Creative Commons, obligaciones legales (LSSI, RGPD, cookies, accesibilidad) e identidad digital (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Publicar en GitHub Pages los proyectos del curso para que el alumnado tenga un portafolio real.",
    "Usar la herramienta de consultas DNS de la consola (nslookup) para ver los registros de webs conocidas.",
    "Hacer un concurso de optimización: quién consigue mejor puntuación de Lighthouse con la misma página.",
    "Analizar los textos legales y los banners de cookies de webs conocidas y valorar si cumplen la ley.",
  ],
  fuentes: [
    { t: "MDN: publicar un sitio web", url: "https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website" },
    { t: "Creative Commons: elige una licencia", url: "https://creativecommons.org/choose/" },
    { t: "Agencia Española de Protección de Datos", url: "https://www.aepd.es/" },
    { t: "Google Search Central: guía de SEO para principiantes", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es" },
  ],
}));
