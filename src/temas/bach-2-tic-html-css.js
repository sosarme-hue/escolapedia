// Tecnologías de la Información y la Comunicación II, 2º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
// Desarrollo web del lado del cliente: HTML5 semántico y accesible, CSS, modelo de caja, Flexbox, Grid y diseño adaptable.
const B = require("./_bach2-tic");

// Código en línea con las etiquetas escapadas.
const T = (s) => `<code>${s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
const fondo = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const caja = (x, y, w, h, c, t, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.rx ?? 5}" fill="${o.fill || "var(--card)"}" stroke="${c}" stroke-width="${o.sw || 2}"/>${t ? B.tx(x + w / 2, y + h / 2 + 4, t, { fs: o.fs || 10, maxW: w - 6, bold: true, color: c }) : ""}`;

// Árbol de un documento HTML.
const arbol = () => {
  const n = (x, y, t, c) => `<rect x="${x - 26}" y="${y - 11}" width="52" height="20" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/>${B.tx(x, y + 3, t, { fs: 9.5, maxW: 48, bold: true, color: c })}`;
  const l = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="var(--muted)" stroke-width="1.4"/>`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Árbol de un documento HTML: el elemento html contiene head, con meta y title, y body, con header, main y footer">
  ${fondo}${B.tx(130, 20, "Un documento HTML es un árbol", { fs: 12, maxW: 236, bold: true, font: B.D })}
  ${l(130, 48, 70, 84)}${l(130, 48, 190, 84)}${l(70, 95, 40, 128)}${l(70, 95, 100, 128)}${l(190, 95, 150, 128)}${l(190, 95, 196, 128)}${l(190, 95, 236, 128)}
  ${n(130, 42, "html", "var(--ink)")}${n(70, 90, "head", "var(--sun)")}${n(190, 90, "body", "var(--pen)")}
  ${n(40, 134, "meta", "var(--sun)")}${n(100, 134, "title", "var(--sun)")}
  <rect x="124" y="123" width="132" height="22" rx="11" fill="none"/>
  ${[[150, "header"], [196, "main"], [236, "footer"]].map(([x, t]) => `<rect x="${x - 21}" y="123" width="42" height="20" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>${B.tx(x, 137, t, { fs: 8.5, maxW: 40, bold: true, color: "var(--leaf)" })}`).join("")}
  ${B.tx(70, 168, "información sobre la página", { fs: 9, maxW: 116, color: "var(--muted)" })}${B.tx(196, 168, "lo que se ve", { fs: 9, maxW: 110, color: "var(--muted)" })}
</svg>`;
};

// Regiones semánticas de una página.
const semantica = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Estructura semántica de una página: header arriba, nav debajo, main con dos article en el centro, aside a la derecha y footer abajo">
  ${fondo}
  ${caja(14, 10, 232, 26, "var(--pen)", "header: logo y título")}
  ${caja(14, 40, 232, 18, "var(--sun)", "nav: menú", { fs: 9.5 })}
  ${caja(14, 62, 160, 82, "var(--leaf)", "", { fill: "none" })}${B.tx(94, 76, "main", { fs: 10, maxW: 80, bold: true, color: "var(--leaf)" })}
  ${caja(22, 82, 70, 54, "var(--ink)", "article", { sw: 1.4, fs: 9.5 })}${caja(98, 82, 68, 54, "var(--ink)", "article", { sw: 1.4, fs: 9.5 })}
  ${caja(180, 62, 66, 82, "var(--red)", "aside", { fs: 10 })}
  ${caja(14, 148, 232, 22, "var(--muted)", "footer: contacto y licencia", { fs: 9.5 })}
</svg>`;

// Anatomía de una regla CSS.
const regla = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Partes de una regla CSS: el selector h1, las llaves que abren el bloque y dos declaraciones formadas por una propiedad y un valor separados por dos puntos y terminadas en punto y coma">
  ${fondo}${B.tx(130, 20, "Anatomía de una regla CSS", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  <rect x="28" y="38" width="204" height="94" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="1.2"/>
  <g font-family="ui-monospace,monospace" font-size="15" font-weight="700">
    <text x="40" y="62" fill="var(--red)">h1</text><text x="66" y="62" fill="var(--ink)">{</text>
    <text x="56" y="86" fill="var(--pen)">color</text><text x="104" y="86" fill="var(--ink)">:</text><text x="114" y="86" fill="var(--leaf)">navy</text><text x="152" y="86" fill="var(--ink)">;</text>
    <text x="56" y="108" fill="var(--pen)">margin</text><text x="113" y="108" fill="var(--ink)">:</text><text x="123" y="108" fill="var(--leaf)">0</text><text x="133" y="108" fill="var(--ink)">;</text>
    <text x="40" y="126" fill="var(--ink)">}</text></g>
  <path d="M46 134 V148" stroke="var(--red)" stroke-width="1.6"/>${B.tx(46, 160, "selector", { fs: 10, maxW: 60, bold: true, color: "var(--red)" })}
  <path d="M76 112 L98 148" stroke="var(--pen)" stroke-width="1.6"/>${B.tx(106, 160, "propiedad", { fs: 10, maxW: 64, bold: true, color: "var(--pen)" })}
  <path d="M128 112 L164 148" stroke="var(--leaf)" stroke-width="1.6"/>${B.tx(166, 160, "valor", { fs: 10, maxW: 50, bold: true, color: "var(--leaf)" })}
  ${B.tx(164, 86, "← declaración", { fs: 9.5, maxW: 66, anchor: "start", color: "var(--muted)" })}
</svg>`;

// Modelo de caja.
const modeloCaja = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo de caja de CSS: el contenido en el centro, rodeado por el relleno o padding, el borde o border y el margen o margin">
  ${fondo}
  <rect x="14" y="12" width="232" height="156" rx="6" fill="var(--sun)" fill-opacity=".18" stroke="var(--sun)" stroke-width="1.6" stroke-dasharray="5 3"/>
  ${B.tx(130, 27, "margin (margen exterior)", { fs: 10, maxW: 200, bold: true, color: "var(--sun)" })}
  <rect x="34" y="36" width="192" height="114" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="5"/>
  ${B.tx(130, 52, "border (borde)", { fs: 10, maxW: 160, bold: true })}
  <rect x="48" y="58" width="164" height="82" rx="3" fill="var(--leaf)" fill-opacity=".18"/>
  ${B.tx(130, 72, "padding (relleno)", { fs: 10, maxW: 150, bold: true, color: "var(--leaf)" })}
  <rect x="72" y="80" width="116" height="48" fill="var(--pen)" fill-opacity=".85"/>
  ${B.tx(130, 101, "contenido", { fs: 11, maxW: 100, bold: true, color: "#fff" })}${B.tx(130, 117, "width × height", { fs: 9.5, maxW: 100, color: "#fff" })}
</svg>`;

// Flexbox: ejes y alineación.
const flex = () => {
  const fila = (y, just, t) => {
    const w = 30, xs = { "flex-start": [24, 58, 92], center: [81, 115, 149], "space-between": [24, 115, 206] }[just];
    return `<rect x="18" y="${y}" width="224" height="30" rx="5" fill="var(--card)" stroke="var(--muted)" stroke-width="1.2"/>${xs.map((x, i) => `<rect x="${x}" y="${y + 5}" width="${w}" height="20" rx="4" fill="${["var(--pen)", "var(--red)", "var(--leaf)"][i]}"/>`).join("")}${B.tx(130, y + 42, t, { fs: 9.5, maxW: 230, color: "var(--muted)", font: "ui-monospace,monospace" })}`;
  };
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Flexbox reparte los hijos en una fila: con justify-content flex-start se juntan al principio, con center en el centro y con space-between se separan al máximo">
  ${fondo}${B.tx(130, 16, "display: flex → eje principal →", { fs: 11, maxW: 236, bold: true, font: B.D })}
  ${fila(24, "flex-start", "justify-content: flex-start")}${fila(76, "center", "justify-content: center")}${fila(128, "space-between", "justify-content: space-between")}
</svg>`;
};

// Grid con áreas.
const grid = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Rejilla CSS de tres columnas de 1fr, 2fr y 1fr: la cabecera ocupa la primera fila completa, debajo hay menú, contenido y lateral, y el pie ocupa la última fila">
  ${fondo}${B.tx(130, 18, "grid-template-columns: 1fr 2fr 1fr", { fs: 10.5, maxW: 236, bold: true, font: "ui-monospace,monospace" })}
  ${caja(14, 28, 232, 30, "var(--pen)", "cabecera  (1 / 4)", { fs: 10 })}
  ${caja(14, 64, 54, 70, "var(--sun)", "menú", { fs: 10 })}${caja(74, 64, 112, 70, "var(--leaf)", "contenido", { fs: 10.5 })}${caja(192, 64, 54, 70, "var(--red)", "lateral", { fs: 10 })}
  ${caja(14, 140, 232, 24, "var(--muted)", "pie", { fs: 10 })}
  ${B.tx(41, 176, "1fr", { fs: 9, maxW: 40, color: "var(--muted)" })}${B.tx(130, 176, "2fr", { fs: 9, maxW: 40, color: "var(--muted)" })}${B.tx(219, 176, "1fr", { fs: 9, maxW: 40, color: "var(--muted)" })}
</svg>`;

// Diseño adaptable en tres pantallas.
const adaptable = () => {
  const pant = (x, y, w, h, cols, t) => {
    const g = 4, iw = (w - 8 - g * (cols - 1)) / cols;
    const items = [0, 1, 2].map((i) => `<rect x="${x + 4 + (i % cols) * (iw + g)}" y="${y + 12 + Math.floor(i / cols) * 22}" width="${iw}" height="18" rx="2" fill="${["var(--pen)", "var(--red)", "var(--leaf)"][i]}" fill-opacity=".8"/>`).join("");
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="${x + 4}" y="${y + 4}" width="${w - 8}" height="5" rx="2" fill="var(--muted)"/>${items}${B.tx(x + w / 2, y + h + 14, t, { fs: 9.5, maxW: w + 30, bold: true })}`;
  };
  return `<svg viewBox="0 0 260 180" role="img" aria-label="El mismo contenido se adapta: en el móvil, una columna; en la tableta, dos; y en el ordenador, tres, gracias a las media queries">
  ${fondo}${B.tx(130, 18, "Un solo HTML, tres diseños", { fs: 12, maxW: 236, bold: true, font: B.D })}
  ${pant(14, 40, 44, 84, 1, "móvil")}${pant(72, 52, 72, 72, 2, "≥ 600 px")}${pant(158, 62, 90, 62, 3, "≥ 1000 px")}
  ${B.tx(130, 166, "@media (min-width: 600px) { … }", { fs: 10, maxW: 236, color: "var(--pen)", font: "ui-monospace,monospace" })}
</svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Desarrollo web: HTML5 y CSS",
  minutos: 120,
  objetivos: [
    "Describir cómo funciona la web y el papel de HTML, CSS y JavaScript en una página",
    "Escribir documentos HTML5 bien estructurados, semánticos y accesibles",
    "Crear tablas y formularios con los tipos de campo y la validación de HTML5",
    "Dar estilo con CSS aplicando selectores, cascada, especificidad y herencia",
    "Maquetar con el modelo de caja, Flexbox y CSS Grid",
    "Construir páginas adaptables a cualquier pantalla con media queries y comprobarlas con las herramientas del navegador",
  ],
  claves: ["cliente", "servidor", "HTTP", "URL", "HTML5", "etiqueta", "atributo", "semántica", "accesibilidad", "formulario", "CSS", "selector", "especificidad", "modelo de caja", "Flexbox", "Grid"],
  pregunta: {
    texto: "Abres la misma web de noticias en el móvil y en el ordenador. En el móvil ves una sola columna y un menú plegado; en el ordenador, tres columnas y el menú desplegado. ¿Hay dos webs distintas?",
    respuesta: "No: es la misma página. El contenido está escrito una sola vez en <mark>HTML</mark>, que indica qué es cada cosa (un titular, un menú, un artículo), y la presentación la decide <mark>CSS</mark>, que contiene reglas del tipo «si la pantalla mide al menos 1000 píxeles, coloca los artículos en tres columnas». Separar el contenido de la presentación es la idea central del desarrollo web: permite adaptar la página a cualquier pantalla, a una impresora o a un lector de pantalla para personas ciegas, sin tocar el contenido.",
  },
  lectura: {
    titulo: "La web nació para compartir documentos científicos",
    html: `<p>En 1989, Tim Berners-Lee, un informático británico que trabajaba en el CERN, cerca de Ginebra, tenía un problema: los científicos del laboratorio usaban ordenadores distintos y les costaba muchísimo compartir sus documentos. Propuso un sistema de documentos enlazados entre sí, el <b>hipertexto</b>, accesible desde cualquier ordenador conectado a internet. En 1990 escribió las tres piezas que todavía usamos: el lenguaje <b>HTML</b>, el protocolo <b>HTTP</b> y las direcciones <b>URL</b>, además del primer navegador y el primer servidor web.</p>
    <p>El CERN decidió en 1993 liberar la tecnología, sin patentes ni pagos, y la web se extendió por el mundo. En 1994, Berners-Lee fundó el <b>W3C</b> (<i>World Wide Web Consortium</i>), que sigue elaborando los estándares, y en 1996 se publicó la primera versión de CSS, propuesta por el noruego Håkon Wium Lie para separar el diseño del contenido. HTML5 llegó en 2014 con etiquetas semánticas, vídeo y audio sin complementos, y hoy es un «estándar vivo» que se actualiza continuamente.</p>
    <p>En este tema aprenderás a crear páginas web con HTML5 y CSS. Solo necesitas un editor de texto, como Visual Studio Code, y un navegador.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Cómo funciona la web",
      html: `<p>La <mark>web</mark> (<i>World Wide Web</i>) es un servicio de internet formado por millones de documentos enlazados. Funciona con el modelo <b>cliente-servidor</b>: el <b>cliente</b> es el navegador (Chrome, Firefox, Safari), que pide las páginas; el <b>servidor</b> es un ordenador conectado permanentemente que las almacena y las envía.</p>
      <p>Cuando escribes una <b>URL</b> como <code>https://escolapedia.com/bachillerato/</code>, ocurre lo siguiente:</p>
      <ol><li>El navegador pregunta al <b>DNS</b> (sistema de nombres de dominio) la dirección IP del servidor <code>escolapedia.com</code>.</li>
      <li>Se conecta con el servidor y le envía una <b>petición HTTP</b>: <code>GET /bachillerato/</code>.</li>
      <li>El servidor responde con un <b>código de estado</b> (200 si todo va bien, 404 si la página no existe, 500 si hay un error en el servidor) y el contenido, normalmente un documento HTML.</li>
      <li>El navegador lee el HTML, pide los demás recursos que necesita (hojas de estilo, imágenes, scripts) y <b>dibuja</b> la página.</li></ol>
      <p><b>HTTPS</b> es la versión segura de HTTP: cifra la comunicación para que nadie pueda leer ni modificar los datos por el camino, y hoy es obligatoria en cualquier web seria.</p>
      <p>Una página web se construye con tres lenguajes complementarios, cada uno con su función: <b>HTML</b> define el <b>contenido y la estructura</b> (qué es un título, un párrafo, una imagen); <b>CSS</b> define la <b>presentación</b> (colores, tipos de letra, distribución); y <b>JavaScript</b> añade el <b>comportamiento</b> (qué ocurre al pulsar un botón). En este tema trabajaremos los dos primeros, y en el siguiente, JavaScript.</p>`,
      svg: B.flujo("Qué ocurre al visitar una página web", ["Escribes la URL", "DNS: nombre → dirección IP", "Petición HTTP GET al servidor", "Respuesta 200 con el HTML", "El navegador dibuja la página"], { t: "De la URL a la página" }),
    },
    {
      h: "Estructura de un documento HTML5",
      html: `<p><mark>HTML</mark> (<i>HyperText Markup Language</i>) es un <b>lenguaje de marcas</b>: no es un lenguaje de programación, sino un sistema de <b>etiquetas</b> que indican qué es cada parte del texto. Un <b>elemento</b> se forma normalmente con una etiqueta de apertura, un contenido y una etiqueta de cierre: ${T("<p>Hola</p>")}. Algunas etiquetas, como ${T("<img>")} o ${T("<br>")}, no tienen cierre. Las etiquetas pueden llevar <b>atributos</b>, que dan información adicional con la forma <code>nombre="valor"</code>: ${T('<a href="contacto.html">')}.</p>
      <p>Todo documento HTML5 tiene esta estructura básica:</p>
      ${B.code(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mi primera página</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <h1>Hola, mundo</h1>
  <p>Esta es mi primera página web.</p>
</body>
</html>`)}
      <p>La primera línea, ${T("<!DOCTYPE html>")}, indica que es un documento HTML5. El elemento ${T("<html>")} contiene todo, y su atributo <code>lang="es"</code> indica el idioma, lo que ayuda a los buscadores y a los lectores de pantalla. El ${T("<head>")} contiene información <b>sobre</b> la página que no se muestra: la codificación de caracteres UTF-8 (para que se vean bien las tildes y la ñ), la configuración para móviles (<code>viewport</code>), el título de la pestaña y el enlace a la hoja de estilos. El ${T("<body>")} contiene todo lo que se ve.</p>
      <p>Los elementos se <b>anidan</b> unos dentro de otros formando un <b>árbol</b>: hay que cerrarlos en orden inverso al que se abrieron.</p>`,
      svg: arbol(),
    },
    {
      h: "Texto, enlaces, imágenes y listas",
      html: `<p>Las etiquetas más usadas para el contenido son:</p>
      <ul><li><b>Encabezados</b>, de ${T("<h1>")} (el más importante, uno por página) a ${T("<h6>")}. Forman el índice de la página, y no deben elegirse por su tamaño, sino por su nivel.</li>
      <li><b>Párrafos</b> ${T("<p>")}, <b>énfasis</b> ${T("<em>")} y <b>importancia</b> ${T("<strong>")}.</li>
      <li><b>Enlaces</b> ${T('<a href="...">')}: el atributo <code>href</code> indica el destino, que puede ser una URL absoluta (<code>https://www.w3.org</code>), una ruta relativa (<code>contacto.html</code>, <code>../index.html</code>), un ancla dentro de la página (<code>#seccion2</code>) o una dirección de correo (<code>mailto:</code>).</li>
      <li><b>Imágenes</b> ${T('<img src="foto.jpg" alt="...">')}: <code>src</code> indica el archivo y <code>alt</code> un <b>texto alternativo</b> que describe la imagen, imprescindible para las personas ciegas y para cuando la imagen no carga.</li>
      <li><b>Listas</b>: ${T("<ul>")} (no ordenada, con viñetas) y ${T("<ol>")} (ordenada, numerada), con un ${T("<li>")} por elemento.</li>
      <li><b>Contenedores genéricos</b>: ${T("<div>")} (de bloque) y ${T("<span>")} (en línea), sin significado, para agrupar y aplicar estilos.</li></ul>
      ${B.code(`<h2>Mis aficiones</h2>
<p>Me gusta <strong>mucho</strong> la fotografía.</p>
<ul>
  <li>Fotografía de paisaje</li>
  <li><a href="https://es.wikipedia.org/wiki/Astrofotografía">Astrofotografía</a></li>
</ul>
<img src="img/via-lactea.jpg" alt="La Vía Láctea sobre un pinar">`)}
      <p>Los elementos se dividen en dos tipos de comportamiento: los de <b>bloque</b> (${T("<p>")}, ${T("<h1>")}, ${T("<ul>")}, ${T("<div>")}) ocupan todo el ancho disponible y empiezan en una línea nueva; los de <b>línea</b> (${T("<a>")}, ${T("<strong>")}, ${T("<span>")}, ${T("<img>")}) ocupan solo lo que necesitan y se colocan dentro del texto.</p>`,
      svg: B.rejilla("Etiquetas básicas de HTML", ["Etiqueta", "Para qué"], [["h1 … h6", "encabezados"], ["p", "párrafo"], ["a href", "enlace"], ["img src alt", "imagen"], ["ul, ol, li", "listas"]], { t: "Contenido" }),
    },
    {
      h: "HTML semántico y accesibilidad",
      html: `<p>HTML5 introdujo etiquetas <mark>semánticas</mark>, que indican el <b>significado</b> de cada zona de la página, en lugar de usar ${T("<div>")} para todo:</p>
      <ul><li>${T("<header>")}: cabecera, con el logotipo y el título.</li>
      <li>${T("<nav>")}: menú de navegación principal.</li>
      <li>${T("<main>")}: contenido principal, uno por página.</li>
      <li>${T("<article>")}: contenido independiente, como una noticia o una entrada de un blog.</li>
      <li>${T("<section>")}: sección temática, normalmente con su encabezado.</li>
      <li>${T("<aside>")}: contenido complementario, como una barra lateral.</li>
      <li>${T("<footer>")}: pie, con el contacto, el aviso legal o la licencia.</li></ul>
      <p>Visualmente no cambian nada, pero los buscadores entienden mejor la página (lo que mejora el <b>posicionamiento</b> o SEO) y los <b>lectores de pantalla</b> que usan las personas ciegas permiten saltar directamente al menú o al contenido principal.</p>
      <p>La <mark>accesibilidad</mark> web consiste en que todas las personas, incluidas las que tienen alguna discapacidad visual, auditiva, motora o cognitiva, puedan usar la web. Las pautas internacionales son las <b>WCAG</b> del W3C, y en España la ley obliga a cumplirlas a las webs de las administraciones públicas y de muchas empresas. Algunas buenas prácticas sencillas:</p>
      <ul><li>Escribir un <code>alt</code> descriptivo en las imágenes informativas, y vacío (<code>alt=""</code>) en las decorativas.</li>
      <li>Respetar el orden de los encabezados, sin saltar niveles.</li>
      <li>Usar textos de enlace con sentido («Descarga el horario», no «pincha aquí»).</li>
      <li>Asegurar suficiente <b>contraste</b> entre el texto y el fondo.</li>
      <li>Permitir manejar toda la página con el teclado.</li>
      <li>Subtitular los vídeos.</li></ul>`,
      svg: semantica(),
      video: B.V("web-general", "Curso de HTML y CSS desde cero"),
    },
    {
      h: "Tablas y formularios",
      html: `<p>Las <b>tablas</b> sirven para presentar datos tabulares, como un horario o una clasificación, nunca para maquetar la página. Se construyen fila a fila: ${T("<table>")} contiene filas ${T("<tr>")}, y cada fila, celdas de encabezado ${T("<th>")} o de datos ${T("<td>")}. El elemento ${T("<caption>")} da un título a la tabla.</p>
      <p>Los <mark>formularios</mark> permiten al usuario enviar información: un registro, una búsqueda, una encuesta. El elemento ${T("<form>")} agrupa los campos, y sus atributos <code>action</code> y <code>method</code> indican adónde y cómo se envían los datos (<code>GET</code>, en la URL, o <code>POST</code>, en el cuerpo de la petición, para datos privados).</p>
      ${B.code(`<form action="/registro" method="post">
  <label for="nombre">Nombre</label>
  <input id="nombre" name="nombre" type="text" required>

  <label for="correo">Correo</label>
  <input id="correo" name="correo" type="email" required>

  <label for="edad">Edad</label>
  <input id="edad" name="edad" type="number" min="12" max="20">

  <label for="curso">Curso</label>
  <select id="curso" name="curso">
    <option>1º Bach</option><option>2º Bach</option>
  </select>

  <label><input type="checkbox" name="acepto" required> Acepto la política de privacidad</label>
  <button type="submit">Enviar</button>
</form>`)}
      <p>HTML5 incorpora muchos <b>tipos de campo</b> (<code>email</code>, <code>number</code>, <code>date</code>, <code>tel</code>, <code>url</code>, <code>password</code>, <code>range</code>, <code>color</code>), que en el móvil muestran el teclado adecuado, y <b>validación</b> automática con atributos como <code>required</code>, <code>min</code>, <code>max</code>, <code>maxlength</code> o <code>pattern</code>: el navegador no envía el formulario hasta que los datos son correctos.</p>
      <p>Cada campo debe tener un ${T("<label>")} asociado mediante <code>for</code> e <code>id</code>, por accesibilidad: el lector de pantalla lee la etiqueta y, al pulsarla, se activa el campo. Atención: la validación del navegador mejora la experiencia, pero no es segura, porque se puede saltar; el servidor siempre debe volver a validar los datos.</p>`,
      svg: B.rejilla("Tipos de campo de un formulario HTML5", ["type", "Para"], [["text, password", "textos, claves"], ["email, tel, url", "contacto"], ["number, range", "números"], ["date, time", "fechas"], ["checkbox, radio", "opciones"]], { t: "&lt;input type=…&gt;" }),
    },
    {
      h: "Introducción a CSS",
      html: `<p><mark>CSS</mark> (<i>Cascading Style Sheets</i>, hojas de estilo en cascada) es el lenguaje que define la presentación de los documentos HTML. Una hoja de estilos es una lista de <b>reglas</b>. Cada regla tiene un <b>selector</b>, que indica a qué elementos se aplica, y un bloque entre llaves con <b>declaraciones</b>, formadas por una <b>propiedad</b> y un <b>valor</b>:</p>
      ${B.code(`h1 {
  color: navy;
  font-size: 2rem;
  text-align: center;
}
p {
  line-height: 1.6;
  max-width: 65ch;
}`)}
      <p>Hay tres formas de aplicar CSS a una página:</p>
      <ul><li><b>Hoja externa</b>, en un archivo <code>.css</code> enlazado desde el <code>head</code> con ${T('<link rel="stylesheet" href="estilos.css">')}. Es la forma recomendada: una sola hoja da estilo a todas las páginas del sitio, y el navegador la guarda en la caché.</li>
      <li><b>Hoja interna</b>, dentro de un elemento ${T("<style>")} en el <code>head</code>, útil para pruebas.</li>
      <li><b>Estilo en línea</b>, con el atributo <code>style</code> de un elemento: ${T('<p style="color: red">')}. Debe evitarse, porque mezcla contenido y presentación.</li></ul>
      <p>La palabra «cascada» se refiere a cómo se resuelven los <b>conflictos</b> cuando varias reglas asignan valores distintos a la misma propiedad de un elemento. Se tienen en cuenta, por este orden, la <b>importancia</b> (las declaraciones con <code>!important</code>, que conviene evitar), la <b>especificidad</b> del selector y el <b>orden</b>: a igualdad de lo anterior, gana la última regla escrita.</p>
      <p>Además, algunas propiedades, como el color o el tipo de letra, se <b>heredan</b>: si se aplican al <code>body</code>, todos los elementos de su interior las reciben, salvo que tengan una regla propia. Otras, como los bordes o los márgenes, no se heredan.</p>`,
      svg: regla(),
    },
    {
      h: "Selectores y especificidad",
      html: `<p>Los <b>selectores</b> permiten elegir con precisión los elementos a los que se aplica cada regla:</p>
      <ul><li><b>De tipo</b>: <code>p</code>, <code>h1</code>, todos los elementos de esa etiqueta.</li>
      <li><b>De clase</b>: <code>.destacado</code>, los elementos con <code>class="destacado"</code>. Una clase puede usarse en muchos elementos, y un elemento puede tener varias clases. Son los selectores más usados.</li>
      <li><b>De identificador</b>: <code>#portada</code>, el único elemento con <code>id="portada"</code>.</li>
      <li><b>Descendiente</b>: <code>nav a</code>, los enlaces que están dentro de un <code>nav</code>. <b>Hijo directo</b>: <code>ul &gt; li</code>.</li>
      <li><b>Agrupación</b>: <code>h1, h2, h3</code>, varios selectores con la misma regla.</li>
      <li><b>Pseudoclases</b>, que seleccionan según el estado o la posición: <code>a:hover</code> (con el ratón encima), <code>input:focus</code> (campo activo), <code>li:first-child</code> o <code>tr:nth-child(even)</code> (filas pares).</li>
      <li><b>De atributo</b>: <code>input[type="email"]</code>.</li></ul>
      ${B.code(`.tarjeta { border: 1px solid #ccc; border-radius: 8px; }
nav a:hover { text-decoration: underline; }
tr:nth-child(even) { background: #f2f2f2; }   /* tabla a rayas */`)}
      <p>La <mark>especificidad</mark> mide lo concreto que es un selector y decide qué regla gana en caso de conflicto. Se calcula contando, por este orden de importancia, los <b>identificadores</b>, las <b>clases</b> (incluidas pseudoclases y atributos) y los <b>tipos</b>. Así, <code>#menu a</code> (1, 0, 1) gana a <code>nav .enlace</code> (0, 1, 1), y este gana a <code>nav a</code> (0, 0, 2). Los estilos en línea están por encima de todos ellos.</p>
      <p>Una buena práctica es dar estilos casi siempre con <b>clases</b>, con especificidad baja y parecida, y reservar los identificadores para JavaScript y los anclas. Las herramientas para desarrolladores del navegador (tecla F12) muestran qué reglas se aplican a cada elemento y cuáles quedan tachadas por otras más específicas.</p>`,
      svg: B.rejilla("Especificidad de varios selectores, de menor a mayor", ["Selector", "(id, clase, tipo)"], [["nav a", "(0, 0, 2)"], ["nav .enlace", "(0, 1, 1)"], [".menu a:hover", "(0, 2, 1)"], ["#menu a", "(1, 0, 1)"], ["style=\"…\"", "en línea: gana"]], { t: "¿Qué selector gana?" }),
    },
    {
      h: "Colores, tipografía y unidades",
      html: `<p>Los <b>colores</b> se pueden escribir de varias formas: por nombre (<code>navy</code>, <code>tomato</code>), en hexadecimal (<code>#1a73e8</code>, dos cifras para cada componente rojo, verde y azul), con <code>rgb(26, 115, 232)</code> o con <code>hsl(217, 82%, 51%)</code> (tono, saturación y luminosidad), que facilita crear variaciones de un mismo color. Con un cuarto valor se indica la transparencia: <code>rgb(0 0 0 / 50%)</code>. Las propiedades principales son <code>color</code> (texto) y <code>background-color</code> (fondo).</p>
      <p>La <b>tipografía</b> se controla con <code>font-family</code>, que admite una lista de alternativas terminada en una familia genérica (<code>font-family: "Inter", Arial, sans-serif;</code>), <code>font-size</code>, <code>font-weight</code> (grosor), <code>line-height</code> (interlineado) y <code>text-align</code>.</p>
      <p>Las <b>unidades</b> de medida se dividen en dos grupos:</p>
      <ul><li><b>Absolutas</b>: <code>px</code> (píxeles), útiles para bordes y detalles pequeños.</li>
      <li><b>Relativas</b>: <code>%</code> (respecto al elemento padre), <code>em</code> (respecto al tamaño de letra del elemento), <code>rem</code> (respecto al tamaño de letra de la raíz, normalmente 16 px), <code>vw</code> y <code>vh</code> (1 % del ancho o del alto de la ventana) y <code>ch</code> (ancho de un carácter). Las relativas hacen que el diseño se adapte y respetan el tamaño de letra que el usuario haya elegido en su navegador.</li></ul>
      <p>Las <mark>variables CSS</mark> (propiedades personalizadas) guardan un valor para reutilizarlo en toda la hoja, de modo que se cambia en un único lugar:</p>
      ${B.code(`:root {
  --principal: #1a73e8;
  --texto: #222;
}
a      { color: var(--principal); }
button { background: var(--principal); color: white; }`)}`,
      svg: B.comparar("Unidades absolutas frente a relativas", ["Absolutas", ["px", "tamaño fijo", "bordes y detalles", "no se adaptan"]], ["Relativas", ["%, em, rem, vw", "dependen de otro valor", "textos y anchuras", "se adaptan"]]),
    },
    {
      h: "El modelo de caja",
      html: `<p>Para CSS, todo elemento es una <mark>caja</mark> rectangular formada por cuatro capas, de dentro hacia fuera:</p>
      <ul><li><b>Contenido</b> (<i>content</i>): el texto o la imagen, con su ancho (<code>width</code>) y alto (<code>height</code>).</li>
      <li><b>Relleno</b> (<code>padding</code>): espacio entre el contenido y el borde, que toma el color de fondo del elemento.</li>
      <li><b>Borde</b> (<code>border</code>): línea alrededor del relleno, con grosor, estilo y color: <code>border: 2px solid navy</code>.</li>
      <li><b>Margen</b> (<code>margin</code>): espacio exterior transparente que separa la caja de las vecinas.</li></ul>
      <p>Las propiedades <code>padding</code> y <code>margin</code> admiten de uno a cuatro valores, en el sentido de las agujas del reloj empezando por arriba: <code>margin: 10px 20px</code> pone 10 px arriba y abajo, y 20 px a los lados. El valor <code>margin: 0 auto</code> centra horizontalmente un bloque con ancho definido.</p>
      <p>Un detalle que causa muchos errores: por defecto, <code>width</code> mide solo el contenido, de modo que una caja de <code>width: 300px</code> con 20 px de relleno y 2 px de borde ocupa en realidad 344 px. Para evitarlo, casi todos los proyectos empiezan con esta regla, que hace que el ancho incluya el relleno y el borde:</p>
      ${B.code(`*, *::before, *::after { box-sizing: border-box; }`)}
      <p>La propiedad <code>display</code> decide cómo se comporta la caja: <code>block</code> (ocupa todo el ancho), <code>inline</code> (dentro del texto, sin ancho ni alto propios), <code>inline-block</code> (en línea pero con dimensiones), <code>none</code> (no se muestra), y <code>flex</code> y <code>grid</code>, que veremos a continuación.</p>`,
      svg: modeloCaja(),
    },
    {
      h: "Maquetar con Flexbox",
      html: `<p><mark>Flexbox</mark> (caja flexible) es un sistema de CSS para distribuir elementos en <b>una dimensión</b>: en fila o en columna. Se activa en el elemento <b>contenedor</b> con <code>display: flex</code>, y sus hijos directos se convierten en <b>elementos flexibles</b> que se colocan uno junto a otro.</p>
      <p>Flexbox trabaja con dos ejes: el <b>eje principal</b>, en la dirección de <code>flex-direction</code> (<code>row</code>, horizontal, por defecto, o <code>column</code>), y el <b>eje transversal</b>, perpendicular. Las propiedades más importantes del contenedor son:</p>
      <ul><li><code>justify-content</code>: reparte los elementos en el eje principal (<code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>).</li>
      <li><code>align-items</code>: los alinea en el eje transversal (<code>stretch</code>, <code>center</code>, <code>flex-start</code>).</li>
      <li><code>gap</code>: espacio entre elementos.</li>
      <li><code>flex-wrap: wrap</code>: permite que los elementos pasen a la línea siguiente si no caben.</li></ul>
      <p>En los hijos, la propiedad <code>flex</code> indica cómo crecen para ocupar el espacio libre: con <code>flex: 1</code> en todos, se reparten el ancho a partes iguales; con <code>flex: 2</code> en uno, ese ocupa el doble.</p>
      ${B.code(`.menu {
  display: flex;
  justify-content: space-between;   /* logo a la izquierda, enlaces a la derecha */
  align-items: center;              /* centrados en vertical */
  gap: 1rem;
}
.tarjetas { display: flex; flex-wrap: wrap; gap: 16px; }
.tarjetas > article { flex: 1 1 250px; }  /* mínimo 250 px y crecen */`)}
      <p>Flexbox es ideal para menús, barras de herramientas, filas de botones y grupos de tarjetas.</p>`,
      svg: flex(),
      video: B.V("web-flex", "Flexbox CSS: curso completo con ejemplos"),
    },
    {
      h: "Maquetar con CSS Grid",
      html: `<p><mark>CSS Grid</mark> (rejilla) es un sistema de maquetación en <b>dos dimensiones</b>: filas y columnas a la vez. Es la herramienta adecuada para la estructura general de una página o para galerías. Se activa con <code>display: grid</code> en el contenedor, y se definen las columnas y las filas:</p>
      ${B.code(`.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* tres columnas iguales */
  gap: 12px;
}`)}
      <p>La unidad <code>fr</code> (fracción) reparte el espacio disponible: <code>1fr 2fr 1fr</code> crea tres columnas en las que la central es el doble de ancha. La combinación <code>repeat(auto-fit, minmax(200px, 1fr))</code> crea tantas columnas de al menos 200 px como quepan, adaptándose al ancho de la pantalla sin necesidad de media queries.</p>
      <p>Una forma muy visual de diseñar es con <b>áreas con nombre</b>: se «dibuja» la página con texto y se asigna cada elemento a su área.</p>
      ${B.code(`body {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "cabecera cabecera cabecera"
    "menu     contenido lateral"
    "pie      pie       pie";
  gap: 10px;
}
header { grid-area: cabecera; }
nav    { grid-area: menu; }
main   { grid-area: contenido; }
aside  { grid-area: lateral; }
footer { grid-area: pie; }`)}
      <p>También se puede indicar que un elemento ocupe varias columnas o filas con <code>grid-column: 1 / 4</code> (de la línea 1 a la 4) o <code>grid-column: span 2</code>.</p>
      <p>¿Flexbox o Grid? No compiten, se combinan: Grid para la estructura en dos dimensiones (el esqueleto de la página) y Flexbox para alinear elementos en una sola dirección dentro de cada zona (el menú de la cabecera).</p>`,
      svg: grid(),
      video: B.V("web-grid", "CSS Grid desde cero"),
    },
    {
      h: "Diseño adaptable y publicación de calidad",
      html: `<p>Más de la mitad de las visitas a la web se hacen desde el móvil, por lo que las páginas deben adaptarse a cualquier tamaño de pantalla. Es el <mark>diseño adaptable</mark> (<i>responsive design</i>), que se basa en tres ideas: la etiqueta <code>meta viewport</code>, que evita que el móvil muestre la página reducida; las rejillas y unidades flexibles; y las <b>media queries</b>.</p>
      <p>Una <b>media query</b> aplica un grupo de reglas solo si se cumple una condición sobre el dispositivo, normalmente el ancho de la ventana:</p>
      ${B.code(`/* Móvil primero: una columna */
.contenido { display: grid; gap: 1rem; }

/* Tabletas: dos columnas */
@media (min-width: 600px) {
  .contenido { grid-template-columns: 1fr 1fr; }
}

/* Ordenadores: tres columnas */
@media (min-width: 1000px) {
  .contenido { grid-template-columns: repeat(3, 1fr); }
}`)}
      <p>La estrategia recomendada es <b>móvil primero</b> (<i>mobile first</i>): se diseña la versión más sencilla, para pantallas pequeñas, y se añaden mejoras con <code>min-width</code> a medida que hay más espacio. Los anchos en los que cambia el diseño se llaman <b>puntos de ruptura</b>, y deben elegirse según el contenido, no según modelos concretos de teléfono.</p>
      <p>Antes de publicar una página conviene comprobar su calidad:</p>
      <ul><li><b>Validar</b> el HTML y el CSS con los validadores del W3C.</li>
      <li>Probarla en varios navegadores y con el <b>modo dispositivo</b> de las herramientas para desarrolladores (F12).</li>
      <li>Analizar la accesibilidad y el rendimiento con <b>Lighthouse</b>, incluido en Chrome.</li>
      <li>Optimizar las <b>imágenes</b> (formatos modernos como WebP, tamaño adecuado).</li></ul>`,
      svg: adaptable(),
      video: B.V("web-media", "Diseño web responsive con media queries"),
    },
  ],
  figura: {
    titulo: "Ideas clave de HTML5 y CSS",
    items: [["Contenido", "HTML", "etiquetas", "semánticas"], ["Estilo", "CSS", "selector {", "propiedad: valor }"], ["Caja", "margin", "border, padding,", "contenido"], ["Maquetar", "Flex y Grid", "1 y 2 dimensiones,", "media queries"]],
  },
  video: B.V("web-general", "Curso de HTML y CSS desde cero"),
  quiz: [
    ["En la web, el navegador actúa como…", ["servidor", "cliente", "DNS", "router"], 1, "Pide las páginas al servidor."],
    ["El código de estado 404 significa…", ["todo correcto", "página no encontrada", "error del servidor", "redirección"], 1, "El recurso no existe."],
    ["HTML es un lenguaje…", ["de programación", "de marcas", "de bases de datos", "de estilos"], 1, "Usa etiquetas."],
    ["La parte de la página que se muestra va dentro de…", ["<head>", "<body>", "<title>", "<meta>"], 1, "El head no se ve."],
    ["<meta charset=\"UTF-8\"> sirve para…", ["poner título", "que se vean bien tildes y ñ", "enlazar CSS", "adaptar al móvil"], 1, "Codificación de caracteres."],
    ["El atributo alt de una imagen…", ["indica su tamaño", "describe la imagen con texto", "enlaza la imagen", "la centra"], 1, "Accesibilidad."],
    ["¿Qué etiqueta crea un enlace?", ["<link>", "<a>", "<href>", "<url>"], 1, "Con el atributo href."],
    ["Una lista numerada se crea con…", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "Ordered list."],
    ["¿Cuál es una etiqueta semántica de HTML5?", ["<div>", "<nav>", "<span>", "<b>"], 1, "Menú de navegación."],
    ["Las pautas internacionales de accesibilidad web son las…", ["RGPD", "WCAG", "HTTP", "SQL"], 1, "Del W3C."],
    ["En un formulario, type=\"email\"…", ["envía un correo", "valida que el texto parezca un correo", "cifra el campo", "oculta el texto"], 1, "Validación de HTML5."],
    ["La forma recomendada de aplicar CSS es…", ["estilo en línea", "hoja externa con <link>", "atributos HTML", "imágenes"], 1, "Sirve para todo el sitio."],
    ["En color: red;, «color» es…", ["el selector", "la propiedad", "el valor", "la regla"], 1, "Propiedad y valor."],
    ["El selector .aviso selecciona…", ["el elemento con id aviso", "los elementos con class aviso", "las etiquetas <aviso>", "nada"], 1, "Selector de clase."],
    ["¿Qué selector es más específico?", ["p", ".texto", "#intro", "todos igual"], 2, "Los id pesan más."],
    ["La unidad rem es relativa a…", ["el elemento padre", "el tamaño de letra de la raíz", "la ventana", "un píxel"], 1, "Root em."],
    ["En el modelo de caja, el espacio entre contenido y borde es…", ["margin", "padding", "border", "gap"], 1, "Relleno interior."],
    ["Flexbox distribuye elementos en…", ["una dimensión", "dos dimensiones", "tres dimensiones", "ninguna"], 0, "Fila o columna."],
    ["grid-template-columns: 1fr 1fr 1fr crea…", ["tres filas", "tres columnas iguales", "una columna", "un borde"], 1, "fr reparte el espacio."],
    ["Una media query sirve para…", ["consultar una base de datos", "aplicar estilos según el dispositivo", "buscar vídeos", "validar formularios"], 1, "Diseño adaptable."],
  ],
  examen: [
    ["¿Qué ancho total ocupa una caja con width: 200px, padding: 10px y border: 5px, sin box-sizing: border-box?", ["200 px", "215 px", "230 px", "240 px"], 2, "200 + 2·10 + 2·5 = 230 px."],
    ["Si p { color: blue } y .nota { color: green } se aplican a <p class=\"nota\">, el texto es…", ["azul", "verde", "negro", "depende del orden"], 1, "La clase es más específica."],
    ["¿Qué hace margin: 0 auto en un bloque con width: 600px?", ["lo oculta", "lo centra horizontalmente", "lo pega arriba", "quita el borde"], 1, "Márgenes laterales automáticos iguales."],
    ["¿Qué regla coloca un menú con el logo a la izquierda y los enlaces a la derecha?", ["display: block", "display: flex; justify-content: space-between", "text-align: right", "float: none"], 1, "Separa al máximo."],
    ["Con grid-template-columns: 1fr 3fr en 800 px sin huecos, la segunda columna mide…", ["200 px", "400 px", "600 px", "800 px"], 2, "3/4 de 800."],
    ["En mobile first, ¿cuándo se aplica @media (min-width: 768px)?", ["en pantallas de menos de 768 px", "en pantallas de 768 px o más", "solo al imprimir", "siempre"], 1, "Mejoras para pantallas grandes."],
    ["¿Qué fallo de accesibilidad tiene <a href=\"horario.pdf\">pincha aquí</a>?", ["ninguno", "el texto del enlace no dice adónde lleva", "falta el alt", "es un PDF"], 1, "Los enlaces deben tener sentido solos."],
    ["¿Qué especificidad tiene nav ul li.activo?", ["(0,0,3)", "(0,1,3)", "(1,0,3)", "(0,1,0)"], 1, "Una clase y tres tipos."],
  ],
  feynman: ["Qué ocurre desde que escribes una URL hasta que ves la página", "Para qué sirven HTML, CSS y JavaScript", "Cuál es la estructura básica de un documento HTML5", "Por qué usar etiquetas semánticas y textos alternativos", "Cómo se construye un formulario accesible y con validación", "Cómo decide la cascada qué regla CSS se aplica", "Qué partes tiene el modelo de caja", "Cuándo usar Flexbox, Grid y media queries"],
  mapa: ["HTML5 Y CSS", [["HTML", "estructura · semántica · formularios"], ["CSS", "selectores · cascada · unidades"], ["Caja", "contenido · padding · border · margin"], ["Maquetación", "Flexbox · Grid · media queries"]]],
  tarjetas: [
    ["Cliente-servidor", "El navegador pide por HTTP(S) y el servidor responde con HTML."],
    ["HTML, CSS, JS", "Contenido, presentación y comportamiento."],
    ["Documento HTML5", "<!DOCTYPE html>, <html lang>, <head> y <body>."],
    ["Enlace e imagen", "<a href=\"…\"> y <img src=\"…\" alt=\"…\">."],
    ["Semántica", "header, nav, main, article, section, aside, footer."],
    ["Accesibilidad", "WCAG: alt, encabezados en orden, contraste, teclado, label."],
    ["Formulario", "<form>, <label for>, <input type required>, <button>."],
    ["Regla CSS", "selector { propiedad: valor; }"],
    ["Especificidad", "id > clase/pseudoclase > tipo; a igualdad, gana la última."],
    ["Modelo de caja", "contenido + padding + border + margin; box-sizing: border-box."],
    ["Flexbox y Grid", "Una dimensión (justify-content, align-items) / dos (fr, áreas)."],
    ["Media query", "@media (min-width: 600px) { … }; móvil primero."],
  ],
  ejemplos: [
    ["Escribe la estructura mínima de una página HTML5 en español titulada «Club de robótica», enlazada a robotica.css.", ["DOCTYPE y elemento html con lang.", "En el head: charset, viewport, title y link.", "En el body, un encabezado principal."], "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Club de robótica</title>\n  <link rel=\"stylesheet\" href=\"robotica.css\">\n</head>\n<body>\n  <h1>Club de robótica</h1>\n</body>\n</html>"],
    ["Organiza semánticamente un blog con cabecera, menú, dos entradas, una barra lateral y un pie.", ["Cabecera y menú: header y nav.", "Contenido principal: main con un article por entrada.", "Complementario: aside. Pie: footer."], "<header><h1>Mi blog</h1></header>\n<nav>…</nav>\n<main>\n  <article><h2>Entrada 1</h2>…</article>\n  <article><h2>Entrada 2</h2>…</article>\n</main>\n<aside>Entradas populares</aside>\n<footer>© 2026 · CC BY</footer>"],
    ["Crea un campo de formulario accesible para la fecha de nacimiento, obligatorio.", ["label asociado con for e id.", "type=\"date\" muestra un calendario.", "required impide enviar el formulario vacío."], "<label for=\"nac\">Fecha de nacimiento</label>\n<input id=\"nac\" name=\"nac\" type=\"date\" required>"],
    ["Calcula la especificidad de #pie a, .menu li:hover y ul li a, y ordénalos de mayor a menor.", ["#pie a: 1 id y 1 tipo → (1,0,1).", ".menu li:hover: 1 clase, 1 pseudoclase, 1 tipo → (0,2,1).", "ul li a: 3 tipos → (0,0,3)."], "#pie a (1,0,1) > .menu li:hover (0,2,1) > ul li a (0,0,3)."],
    ["Una tarjeta mide width: 300px, padding: 20px, border: 1px y margin: 10px. ¿Cuánto espacio horizontal ocupa con content-box y con border-box?", ["content-box: 300 + 2·20 + 2·1 = 342 px de caja, más 2·10 de margen.", "border-box: la caja mide 300 px, más los márgenes."], "content-box: 362 px en total (342 de caja). border-box: 320 px en total (300 de caja)."],
    ["Haz una galería que muestre 1 columna en el móvil, 2 desde 600 px y 4 desde 1000 px.", ["Móvil primero: grid de una columna.", "Dos media queries con min-width.", "gap para separar las imágenes."], ".galeria { display: grid; gap: 10px; }\n@media (min-width: 600px) {\n  .galeria { grid-template-columns: repeat(2, 1fr); }\n}\n@media (min-width: 1000px) {\n  .galeria { grid-template-columns: repeat(4, 1fr); }\n}"],
  ],
  errores: [
    "Elegir los encabezados por su tamaño y no por su nivel, o poner varios h1.",
    "Olvidar el atributo alt de las imágenes o poner textos como «imagen».",
    "Usar tablas o muchos div sin significado para maquetar la página.",
    "Abusar de los estilos en línea, de los id y de !important, y luego no saber por qué una regla no se aplica.",
    "Olvidar que width no incluye padding ni border sin box-sizing: border-box.",
    "Olvidar la etiqueta meta viewport, con lo que la página se ve diminuta en el móvil.",
  ],
  ejercicios: {
    b: [
      ["Ordena los pasos al visitar una web: respuesta del servidor, consulta DNS, el navegador dibuja, petición HTTP.", "Consulta DNS → petición HTTP → respuesta del servidor → el navegador dibuja la página."],
      ["Indica qué lenguaje (HTML, CSS o JavaScript) se encarga de: el color de los títulos, un párrafo, lo que pasa al pulsar un botón, la distribución en columnas.", "CSS, HTML, JavaScript y CSS."],
      ["Escribe un enlace a https://www.w3.org con el texto «Web del W3C».", "<a href=\"https://www.w3.org\">Web del W3C</a>"],
      ["Inserta la imagen gato.jpg con un texto alternativo adecuado.", "<img src=\"gato.jpg\" alt=\"Gato atigrado dormido sobre un cojín\">"],
      ["Escribe una lista ordenada con los tres primeros pasos de una receta.", "<ol>\n  <li>Batir los huevos</li>\n  <li>Añadir la harina</li>\n  <li>Hornear 20 minutos</li>\n</ol>"],
      ["¿Qué diferencia hay entre <head> y <body>?", "El head contiene información sobre la página que no se muestra (codificación, título de la pestaña, enlaces a CSS); el body contiene el contenido visible."],
      ["Escribe una regla CSS que ponga todos los párrafos en color gris oscuro (#333) y con interlineado 1,5.", "p { color: #333; line-height: 1.5; }"],
      ["Escribe una regla que dé fondo amarillo claro a los elementos con la clase aviso.", ".aviso { background-color: #fff8c4; }"],
      ["Nombra las cuatro capas del modelo de caja de dentro hacia fuera.", "Contenido, padding (relleno), border (borde) y margin (margen)."],
      ["¿Qué hace la etiqueta <nav> y por qué es mejor que un <div>?", "Marca el menú de navegación. Es semántica: los buscadores y los lectores de pantalla saben que es el menú y permiten saltar a él."],
      ["Escribe un campo de formulario para el correo electrónico, obligatorio y con su etiqueta.", "<label for=\"correo\">Correo</label>\n<input id=\"correo\" name=\"correo\" type=\"email\" required>"],
      ["¿Para qué sirve la etiqueta meta viewport?", "Para que el móvil muestre la página con el ancho real del dispositivo, en lugar de una versión de escritorio reducida."],
    ],
    m: [
      ["Crea una tabla con el horario de lunes y martes y dos horas, con encabezados.", "<table>\n  <caption>Horario</caption>\n  <tr><th>Hora</th><th>Lunes</th><th>Martes</th></tr>\n  <tr><td>8:30</td><td>TIC II</td><td>Matemáticas II</td></tr>\n  <tr><td>9:25</td><td>Historia</td><td>Inglés</td></tr>\n</table>"],
      ["Escribe un formulario de búsqueda que envíe el texto por GET a /buscar.", "<form action=\"/buscar\" method=\"get\">\n  <label for=\"q\">Buscar</label>\n  <input id=\"q\" name=\"q\" type=\"search\" required>\n  <button type=\"submit\">Buscar</button>\n</form>"],
      ["Escribe la regla que subraya los enlaces del menú solo cuando el ratón pasa por encima.", "nav a { text-decoration: none; }\nnav a:hover { text-decoration: underline; }"],
      ["Colorea de gris claro las filas pares de las tablas.", "tr:nth-child(even) { background: #f2f2f2; }"],
      ["Calcula la especificidad de: header nav a, .boton.grande, #logo img.", "(0,0,3), (0,2,0) y (1,0,1)."],
      ["Un párrafo tiene las reglas p { color: black } y #intro { color: blue } y es <p id=\"intro\" class=\"destacado\">; además .destacado { color: red }. ¿De qué color se ve?", "Azul, porque el id (1,0,0) es más específico que la clase (0,1,0) y que el tipo (0,0,1)."],
      ["Define variables CSS para un color principal y uno secundario y úsalas en los botones y los títulos.", ":root { --principal: #0b6e4f; --secundario: #f2a541; }\nh1, h2 { color: var(--principal); }\nbutton { background: var(--secundario); }"],
      ["Explica por qué conviene usar rem en lugar de px para el tamaño de letra.", "rem es relativo al tamaño de letra de la raíz, que el usuario puede aumentar en su navegador; con px se ignora esa preferencia y se perjudica la accesibilidad."],
      ["Centra en vertical y horizontal un mensaje dentro de una caja de 300 px de alto.", ".caja {\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"],
      ["Crea un menú horizontal con los enlaces separados 20 px usando Flexbox.", "nav ul {\n  display: flex;\n  gap: 20px;\n  list-style: none;\n  padding: 0;\n}"],
      ["Haz una fila de tres tarjetas que se repartan el ancho, en la que la del centro sea el doble de ancha.", ".fila { display: flex; gap: 1rem; }\n.fila > * { flex: 1; }\n.fila > :nth-child(2) { flex: 2; }"],
      ["Crea una galería con Grid en la que quepan tantas columnas de al menos 180 px como permita la pantalla.", ".galeria {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n}"],
      ["Haz que las imágenes nunca sean más anchas que su contenedor.", "img { max-width: 100%; height: auto; }"],
      ["Enumera cuatro comprobaciones de accesibilidad para revisar una página antes de publicarla.", "Textos alternativos en las imágenes, orden correcto de encabezados, contraste suficiente entre texto y fondo, navegación completa con teclado, campos con label y enlaces con texto significativo."],
    ],
    a: [
      ["Maqueta con Grid y áreas con nombre una página con cabecera, contenido y pie en móvil (una columna) y con una barra lateral a la derecha desde 900 px.", "body { display: grid; gap: 1rem;\n  grid-template-areas: \"cab\" \"cont\" \"lat\" \"pie\"; }\n@media (min-width: 900px) {\n  body { grid-template-columns: 3fr 1fr;\n    grid-template-areas: \"cab cab\" \"cont lat\" \"pie pie\"; }\n}\nheader { grid-area: cab; } main { grid-area: cont; }\naside { grid-area: lat; } footer { grid-area: pie; }"],
      ["Explica por qué esta regla no se aplica y propone dos soluciones: #menu a { color: white } y después .enlace-activo { color: yellow } en <a class=\"enlace-activo\"> dentro de #menu.", "#menu a tiene especificidad (1,0,1) y .enlace-activo (0,1,0): gana la primera aunque esté antes. Soluciones: aumentar la especificidad (#menu .enlace-activo, que es (1,1,0)) o, mejor, cambiar el id por una clase (.menu a y .menu .enlace-activo)."],
      ["Diseña una tarjeta de producto con imagen, nombre, precio y botón, con esquinas redondeadas, sombra y el botón siempre abajo aunque el texto varíe.", ".tarjeta {\n  display: flex; flex-direction: column;\n  border-radius: 12px; box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n  padding: 1rem; gap: .5rem;\n}\n.tarjeta img { max-width: 100%; border-radius: 8px; }\n.tarjeta button { margin-top: auto; }   /* empuja el botón al final */"],
      ["Escribe un formulario de inscripción a una excursión con nombre, DNI (patrón de 8 cifras y una letra), teléfono, actividad (radio) y alergias (textarea), accesible y validado.", "<form method=\"post\" action=\"/inscripcion\">\n  <label for=\"n\">Nombre</label> <input id=\"n\" name=\"n\" required>\n  <label for=\"d\">DNI</label>\n  <input id=\"d\" name=\"d\" pattern=\"[0-9]{8}[A-Za-z]\" required>\n  <label for=\"t\">Teléfono</label> <input id=\"t\" name=\"t\" type=\"tel\">\n  <fieldset><legend>Actividad</legend>\n    <label><input type=\"radio\" name=\"act\" value=\"kayak\" required> Kayak</label>\n    <label><input type=\"radio\" name=\"act\" value=\"senderismo\"> Senderismo</label>\n  </fieldset>\n  <label for=\"a\">Alergias</label> <textarea id=\"a\" name=\"a\"></textarea>\n  <button>Enviar</button>\n</form>"],
      ["Crea un tema claro y oscuro que siga la preferencia del sistema usando variables CSS.", ":root { --fondo: #ffffff; --texto: #1d1d1f; }\n@media (prefers-color-scheme: dark) {\n  :root { --fondo: #121212; --texto: #eaeaea; }\n}\nbody { background: var(--fondo); color: var(--texto); }"],
      ["Analiza los problemas de este código y corrígelo: <div class=\"titulo\">Noticias</div><div onclick=\"...\">Leer más</div><img src=\"foto.jpg\">.", "No es semántico ni accesible: el título debería ser un <h2>, «Leer más» debería ser un enlace <a href> con texto significativo (o un <button>), porque un div no se puede usar con el teclado, y la imagen necesita un alt descriptivo."],
      ["Calcula el ancho del contenido de tres columnas Grid definidas como 200px 1fr 2fr con gap de 20 px en un contenedor de 1040 px.", "Espacio para fr: 1040 − 200 − 2·20 = 800 px; 1fr = 800/3 ≈ 266,7 px y 2fr ≈ 533,3 px. Columnas: 200, ≈266,7 y ≈533,3 px."],
      ["Explica la estrategia «móvil primero» y por qué suele dar mejor resultado que diseñar primero para escritorio.", "Se escribe primero el CSS para pantallas pequeñas y se añaden mejoras con media queries de min-width. Obliga a priorizar el contenido esencial, produce CSS más sencillo y los móviles, que son los dispositivos más limitados, descargan y aplican menos reglas."],
      ["Usa Lighthouse en una web que conozcas e interpreta tres de sus recomendaciones de rendimiento y accesibilidad.", "Respuesta abierta. Por ejemplo: imágenes demasiado grandes (servir tamaños adecuados en WebP), contraste insuficiente en algún texto (oscurecer el color) y botones sin nombre accesible (añadir texto o aria-label)."],
      ["Debate: ¿debería ser obligatorio por ley que todas las webs de comercio electrónico sean accesibles? Argumenta con datos.", "Respuesta abierta. Argumentos: en España hay millones de personas con discapacidad y una población cada vez más mayor; la accesibilidad mejora la experiencia de todos y el posicionamiento; la normativa europea (Acta Europea de Accesibilidad, aplicable desde 2025) ya la exige a muchos servicios. En contra se suele citar el coste para pequeños comercios, que se reduce si se tiene en cuenta desde el diseño."],
    ],
  },
  glosario: [
    ["Servidor web", "Ordenador que almacena las páginas y las envía cuando se piden."],
    ["HTTP/HTTPS", "Protocolo de comunicación de la web; HTTPS es su versión cifrada."],
    ["URL", "Dirección única de un recurso en la web."],
    ["HTML", "Lenguaje de marcas que define el contenido y la estructura de una página."],
    ["Etiqueta", "Marca entre los signos menor y mayor que delimita un elemento."],
    ["Atributo", "Información adicional de un elemento, con la forma nombre=\"valor\"."],
    ["HTML semántico", "Uso de etiquetas que indican el significado del contenido."],
    ["Accesibilidad", "Posibilidad de que todas las personas usen la web, incluidas las que tienen discapacidad."],
    ["CSS", "Lenguaje de hojas de estilo que define la presentación."],
    ["Selector", "Parte de una regla CSS que indica a qué elementos se aplica."],
    ["Cascada", "Mecanismo que resuelve los conflictos entre reglas CSS."],
    ["Especificidad", "Peso de un selector: identificadores, clases y tipos."],
    ["Modelo de caja", "Contenido, relleno, borde y margen de cada elemento."],
    ["Flexbox", "Sistema de maquetación en una dimensión."],
    ["CSS Grid", "Sistema de maquetación en dos dimensiones."],
    ["Media query", "Regla que aplica estilos según las características del dispositivo."],
    ["Diseño adaptable", "Diseño que se ajusta a cualquier tamaño de pantalla."],
  ],
  situacion: {
    titulo: "La web de nuestra asociación",
    reto: "En grupos de tres, diseñad y construid con HTML5 y CSS la web de una asociación real o imaginaria del barrio (deportiva, cultural, ecologista), de al menos tres páginas, semántica, accesible y adaptable al móvil.",
    pasos: [
      "Entrevistad a la asociación o definid su público y sus objetivos, y dibujad a mano el boceto de cada página en móvil y en ordenador.",
      "Escribid el HTML semántico de las páginas, con menú común, formulario de contacto y textos alternativos.",
      "Cread una hoja de estilos común con variables de color y tipografía, maquetada con Grid y Flexbox, móvil primero.",
      "Validad el código con el W3C y analizad la accesibilidad y el rendimiento con Lighthouse.",
      "Corregid los problemas detectados y presentad la web a la clase en un móvil y en un ordenador.",
    ],
    producto: "Sitio web de tres páginas como mínimo, con su hoja de estilos, bocetos e informe de validación y accesibilidad.",
    evaluacion: [
      "El HTML es válido, semántico y está bien estructurado.",
      "El CSS usa selectores adecuados, variables, Grid y Flexbox.",
      "La web se adapta correctamente al móvil, a la tableta y al ordenador.",
      "Se cumplen las pautas básicas de accesibilidad.",
    ],
  },
  familias: [
    "Pedidle que os enseñe el código de una página que haya hecho y cómo se ve en el móvil.",
    "Abrid juntos una web con las herramientas para desarrolladores (F12) y cambiad algún color.",
    "Pensad qué webs os resultan difíciles de usar y por qué.",
    "Hablad de la accesibilidad: cómo navegaría por internet una persona ciega.",
  ],
  saberes: "Desarrollo web del lado del cliente: funcionamiento de la web, HTML5 (estructura, texto, enlaces, imágenes, listas, tablas y formularios con validación), HTML semántico y accesibilidad (WCAG), CSS (reglas, selectores, cascada, especificidad y herencia, colores, tipografía, unidades y variables), modelo de caja, maquetación con Flexbox y CSS Grid, diseño adaptable con media queries y control de calidad (Tecnologías de la Información y la Comunicación II, optativa de 2º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Usar un editor en línea como CodePen para ver al instante el efecto de cada regla.",
    "Juegos de práctica como Flexbox Froggy y Grid Garden para aprender las propiedades de maquetación.",
    "Analizar con F12 la web del centro y proponer mejoras de accesibilidad.",
    "Navegar con los ojos cerrados usando un lector de pantalla para comprender la importancia de la semántica.",
  ],
  fuentes: [
    { t: "MDN Web Docs: HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { t: "MDN Web Docs: CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { t: "W3C: pautas de accesibilidad WCAG", url: "https://www.w3.org/WAI/standards-guidelines/wcag/es" },
    { t: "Validador HTML del W3C", url: "https://validator.w3.org/" },
  ],
}));
