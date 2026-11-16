// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L38");

// Modelo de caja de CSS: margin, border, padding, content.
const caja = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo de caja de CSS: contenido rodeado de relleno (padding), borde (border) y margen (margin)">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Modelo de caja", { fs: 13, maxW: 236, bold: true, font: B.D })}
  <rect x="16" y="30" width="228" height="140" rx="4" fill="var(--sun)" opacity=".25" stroke="var(--sun)" stroke-dasharray="5 4" stroke-width="1.5"/>${B.tx(130, 44, "margin", { fs: 10.5, maxW: 60, bold: true, color: "var(--sun)" })}
  <rect x="36" y="50" width="188" height="104" rx="3" fill="var(--card)" stroke="var(--red)" stroke-width="5"/>${B.tx(130, 66, "border", { fs: 10.5, maxW: 60, bold: true, color: "var(--red)" })}
  <rect x="50" y="72" width="160" height="70" fill="var(--leaf)" opacity=".22"/>${B.tx(130, 84, "padding", { fs: 10.5, maxW: 60, bold: true, color: "var(--leaf)" })}
  <rect x="72" y="92" width="116" height="40" fill="var(--pen)" opacity=".85"/>${B.tx(130, 116, "contenido", { fs: 11, maxW: 100, bold: true, color: "#fff" })}
</svg>`;

// Wireframe de una página: cabecera, menú, contenido, lateral y pie (escritorio y móvil).
const wire = () => {
  const r = (x, y, w, h, t, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="var(--card)" stroke="${c}" stroke-width="2"/>${B.tx(x + w / 2, y + h / 2 + 4, t, { fs: 9.5, maxW: w - 6, bold: true, color: c })}`;
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Boceto de página web: en escritorio, contenido y barra lateral en dos columnas; en móvil, todo en una columna">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${B.tx(84, 18, "Escritorio", { fs: 11, maxW: 140, bold: true, font: B.D })}${B.tx(214, 18, "Móvil", { fs: 11, maxW: 60, bold: true, font: B.D })}
    ${r(10, 26, 148, 22, "header + nav", "var(--pen)")}${r(10, 52, 98, 92, "main", "var(--leaf)")}${r(112, 52, 46, 92, "aside", "var(--sun)")}${r(10, 148, 148, 22, "footer", "var(--red)")}
    <rect x="182" y="24" width="64" height="150" rx="10" fill="none" stroke="var(--ink)" stroke-width="2"/>
    ${r(188, 32, 52, 20, "header", "var(--pen)")}${r(188, 56, 52, 50, "main", "var(--leaf)")}${r(188, 110, 52, 30, "aside", "var(--sun)")}${r(188, 144, 52, 22, "footer", "var(--red)")}
  </svg>`;
};

module.exports = B.tema(B.textos({
  titulo: "Diseño web",
  minutos: 120,
  objetivos: [
    "Explicar cómo se transmite y se muestra una página web y planificar un sitio con mapa y bocetos",
    "Escribir documentos HTML válidos y semánticos con textos, enlaces, imágenes, listas, tablas y formularios",
    "Dar estilo con CSS usando selectores, el modelo de caja, flexbox, grid y consultas de medios",
    "Publicar un sitio accesible, usable, optimizado y respetuoso con la normativa",
  ],
  claves: ["página web", "servidor", "navegador", "HTML", "etiqueta", "enlace", "CSS", "selector", "modelo de caja", "diseño adaptable", "accesibilidad", "alojamiento"],
  pregunta: {
    texto: "Abres la misma web en el ordenador y en el móvil: en uno ves tres columnas y en el otro una sola, con un botón de menú. ¿Hay dos webs distintas?",
    respuesta: "No: es la misma página. Su contenido está escrito en <b>HTML</b> y su aspecto, en <b>CSS</b>. El CSS incluye <b>consultas de medios</b> que aplican estilos diferentes según el ancho de la pantalla. Es el <mark>diseño adaptable</mark> (<i>responsive</i>): un solo código que se reorganiza para verse bien en cualquier dispositivo.",
  },
  lectura: {
    titulo: "La primera web sigue viva",
    html: `<p>El 6 de agosto de 1991, Tim Berners-Lee publicó la primera página web de la historia en un ordenador del CERN. Explicaba qué era la World Wide Web, cómo crear páginas y cómo instalar un servidor. Era solo texto negro sobre fondo blanco con enlaces azules subrayados. Hoy se puede visitar todavía, restaurada por el propio CERN, y funciona en cualquier navegador moderno, más de treinta años después.</p>
    <p>Ese detalle dice mucho del éxito de la web: sus lenguajes son <b>estándares abiertos</b>, gratuitos y compatibles hacia atrás. Una página bien escrita en HTML en 1995 sigue leyéndose hoy. Desde entonces la web ha incorporado imágenes, estilos, vídeo, animaciones y aplicaciones completas, pero su base sigue siendo la misma: texto con etiquetas que el navegador interpreta.</p>
    <p>Hay más de mil millones de sitios web. Muchos se crean con plataformas y plantillas sin escribir código, pero entender HTML y CSS te permitirá saber qué ocurre por debajo, arreglar lo que falla, hacer páginas rápidas y accesibles para todo el mundo y dar el primer paso hacia la programación web. En este tema construirás tu propia web desde cero.</p>`,
  },
  secciones: [4, 5, 4],
  bloques: [
    {
      h: "Cómo funciona la web",
      html: `<p>Una <b>página web</b> es un documento de hipertexto que se visualiza en un <b>navegador</b> (Firefox, Chrome, Safari, Edge). Un <b>sitio web</b> es un conjunto de páginas relacionadas bajo un mismo dominio. La web funciona con el modelo <b>cliente-servidor</b>:</p>
      <ul><li>El usuario escribe una URL o pulsa un enlace. El navegador (<b>cliente</b>) obtiene la IP del servidor mediante el DNS.</li>
      <li>El navegador envía una <b>petición HTTP</b> (por ejemplo, GET /index.html) al <b>servidor web</b>, un ordenador siempre conectado que guarda los archivos del sitio.</li>
      <li>El servidor responde con un <b>código de estado</b> (200 si todo va bien, 404 si la página no existe, 500 si hay un error interno) y con el archivo pedido.</li>
      <li>El navegador interpreta el HTML, pide los demás recursos (hojas de estilo, imágenes, scripts) y <b>renderiza</b> la página en pantalla.</li></ul>
      <p>Las tres tecnologías del lado del cliente son: <b>HTML</b>, que define la estructura y el contenido; <b>CSS</b>, que define la presentación; y <b>JavaScript</b>, que añade comportamiento e interactividad.</p>
      <p>Las páginas pueden ser <b>estáticas</b>, archivos fijos iguales para todos, o <b>dinámicas</b>, generadas al momento por un programa del servidor (en PHP, Python o JavaScript) que consulta una base de datos: así funcionan una tienda en línea o una red social. Con <b>HTTPS</b>, la comunicación va cifrada con TLS y el navegador muestra un candado; hoy es imprescindible en cualquier web.</p>`,
      svg: B.flujo("Petición y respuesta de una página web", ["El navegador consulta el DNS", "Envía la petición HTTP GET", "El servidor busca o genera la página", "Responde 200 con el HTML", "El navegador pide CSS e imágenes y dibuja"], { t: "Cliente y servidor" }),
    },
    {
      h: "Planificar un sitio web",
      html: `<p>Antes de escribir código hay que planificar. Un buen proyecto web empieza respondiendo a preguntas: ¿cuál es el <b>objetivo</b> del sitio (informar, vender, mostrar un portafolio)?, ¿a qué <b>público</b> se dirige?, ¿qué <b>contenidos</b> necesita?, ¿qué esperan encontrar los visitantes?</p>
      <p>Las herramientas de planificación son:</p>
      <ul><li><b>Mapa del sitio</b>: un esquema en árbol con todas las páginas y cómo se relacionan (inicio, quiénes somos, actividades, contacto). Determina la <b>navegación</b> principal.</li>
      <li><b>Bocetos o wireframes</b>: dibujos esquemáticos de cada tipo de página que muestran dónde van la cabecera, el menú, el contenido, los laterales y el pie, sin entrar en colores. Conviene hacerlos para escritorio y para móvil.</li>
      <li><b>Prototipo</b>: una versión más elaborada, a veces interactiva, hecha con herramientas de diseño, para probar con usuarios antes de programar.</li>
      <li><b>Guía de estilo</b>: paleta de colores, tipografías, tamaños, estilo de botones e imágenes y tono de los textos.</li></ul>
      <p>La estructura de carpetas también se planifica: un archivo <code>index.html</code> para la portada, una carpeta <code>css/</code> para los estilos, otra <code>img/</code> para las imágenes, y nombres de archivo en minúsculas, sin espacios ni tildes (<code>quienes-somos.html</code>). En la web importan la <b>usabilidad</b> (que sea fácil de usar) y la <b>experiencia de usuario</b>: los visitantes deciden en pocos segundos si se quedan, y si no encuentran lo que buscan se van.</p>`,
      svg: wire(),
    },
    {
      h: "Herramientas para crear webs",
      html: `<p>Hay varias formas de crear un sitio web, según el nivel de control y de conocimientos:</p>
      <ul><li><b>Editores de código</b>: Visual Studio Code, Notepad++ o editores en línea como CodePen. Se escribe directamente HTML, CSS y JavaScript. Ofrecen resaltado de sintaxis, autocompletado, vista previa y comprobación de errores. Dan el máximo control y producen páginas ligeras.</li>
      <li><b>Sistemas de gestión de contenidos</b> (CMS): WordPress, Joomla o Drupal. Se instalan en el servidor y permiten publicar y editar contenidos desde un panel, sin tocar código, con <b>plantillas</b> (temas) y <b>complementos</b> (plugins) que añaden funciones. Cerca del 40 % de las webs del mundo usan WordPress. Exigen mantener actualizado el sistema y los complementos por seguridad.</li>
      <li><b>Creadores visuales</b> en la nube (Google Sites y otros): se arrastran bloques y se publica con un clic. Son muy fáciles, pero limitan el diseño y los datos quedan en la plataforma.</li>
      <li><b>Generadores de sitios estáticos</b>: convierten textos y plantillas en páginas HTML. Son rápidos y seguros.</li></ul>
      <p>Durante el desarrollo se usan las <b>herramientas de desarrollo</b> del navegador (tecla F12): permiten inspeccionar el HTML de cualquier elemento, probar cambios de CSS en directo, simular pantallas de móvil y ver los errores. Los <b>validadores</b> del W3C, el consorcio que define los estándares web, comprueban que el código sea correcto. Y el control de versiones con Git permite guardar el historial de cambios y colaborar.</p>`,
      svg: B.comparar("Editor de código frente a CMS", ["Editor de código", ["HTML y CSS a mano", "control total", "páginas ligeras", "requiere saber"]], ["CMS", ["panel de gestión", "plantillas y plugins", "sin código", "mantenimiento"]]),
    },
    {
      h: "HTML: estructura del documento",
      html: `<p><b>HTML</b> (lenguaje de marcado de hipertexto) no es un lenguaje de programación, sino de <b>marcado</b>: describe qué es cada parte del contenido mediante <b>etiquetas</b> entre ángulos. La mayoría tienen apertura y cierre, y entre ellas va el contenido: <code>&lt;p&gt;Hola&lt;/p&gt;</code>. Juntas forman un <b>elemento</b>. Algunas etiquetas son vacías, sin cierre, como <code>&lt;br&gt;</code> o <code>&lt;img&gt;</code>. Las etiquetas pueden llevar <b>atributos</b> con información adicional: <code>&lt;a href="..."&gt;</code>.</p>
      <p>Todo documento HTML5 tiene esta estructura mínima:</p>
      ${B.code(`<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mi primera web</title>
    <link rel="stylesheet" href="css/estilos.css">
  </head>
  <body>
    <h1>Hola, mundo</h1>
    <p>Esta es mi primera página.</p>
  </body>
</html>`)}
      <ul><li><code>&lt;!DOCTYPE html&gt;</code> indica que es HTML5. <code>lang="es"</code> indica el idioma (lo usan los lectores de pantalla y los buscadores).</li>
      <li>El <b>head</b> contiene información sobre la página que no se ve: codificación UTF-8, título de la pestaña, la etiqueta <b>viewport</b> para móviles, la descripción y el enlace a la hoja de estilos.</li>
      <li>El <b>body</b> contiene todo lo que se muestra.</li></ul>
      <p>Los elementos se <b>anidan</b> unos dentro de otros y deben cerrarse en orden inverso. La sangría no afecta al resultado, pero hace el código legible. Los comentarios se escriben así: <code>&lt;!-- comentario --&gt;</code>.</p>`,
      svg: B.capas("Estructura de un documento HTML", [["DOCTYPE", "HTML5"], ["html lang", "raíz"], ["head", "meta, title, CSS"], ["body", "contenido visible"]], { t: "Documento HTML" }),
      video: { id: "mNbnV3aN3KA", titulo: "Aprende HTML en 15 minutos", canal: "Victor Robles WEB", vistas: 812623 },
    },
    {
      h: "Textos, enlaces e imágenes",
      html: `<p>Las etiquetas básicas de contenido son:</p>
      <ul><li><b>Encabezados</b> <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>: títulos jerárquicos. Debe haber un solo h1 por página y no saltarse niveles.</li>
      <li><b>Párrafos</b> <code>&lt;p&gt;</code>; <b>énfasis</b> <code>&lt;strong&gt;</code> (importancia) y <code>&lt;em&gt;</code> (énfasis); salto de línea <code>&lt;br&gt;</code>.</li>
      <li><b>Enlaces</b> <code>&lt;a href="destino"&gt;texto&lt;/a&gt;</code>. El destino puede ser una ruta <b>relativa</b> a otra página del sitio (<code>contacto.html</code>, <code>../index.html</code>), una URL <b>absoluta</b> externa (<code>https://www.boe.es</code>), un ancla dentro de la página (<code>#seccion2</code>), un correo (<code>mailto:</code>) o un teléfono (<code>tel:</code>). El atributo <code>target="_blank"</code> abre en otra pestaña. El texto del enlace debe describir el destino: «Consulta el horario», no «pincha aquí».</li>
      <li><b>Imágenes</b> <code>&lt;img src="img/foto.jpg" alt="Descripción" width="800" height="600"&gt;</code>. El atributo <b>alt</b> es obligatorio: describe la imagen para quien no puede verla y aparece si no carga. Indicar el ancho y el alto evita que la página «salte» al cargar.</li></ul>
      ${B.code(`<h2 id="horario">Horario</h2>
<p>Abrimos de <strong>lunes a viernes</strong>.</p>
<a href="contacto.html">Escríbenos</a>
<img src="img/biblioteca.jpg" alt="Sala de lectura con estanterías">`)}
      <p>Para insertar vídeo y audio se usan <code>&lt;video&gt;</code> y <code>&lt;audio&gt;</code> con el atributo <code>controls</code>, o se incrustan reproductores externos con <code>&lt;iframe&gt;</code>. Las imágenes deben optimizarse (tamaño adecuado, formato WebP o JPEG) para que la página cargue rápido.</p>`,
      svg: B.rejilla("Etiquetas HTML básicas", ["Etiqueta", "Uso"], [["h1 … h6", "títulos"], ["p", "párrafo"], ["a href", "enlace"], ["img src alt", "imagen"], ["strong, em", "énfasis"]], { t: "Etiquetas básicas" }),
    },
    {
      h: "Listas, tablas y formularios",
      html: `<p>Las <b>listas</b> pueden ser no ordenadas <code>&lt;ul&gt;</code> (con viñetas) u ordenadas <code>&lt;ol&gt;</code> (numeradas); cada elemento va en <code>&lt;li&gt;</code>. Los menús de navegación se construyen casi siempre como listas de enlaces.</p>
      <p>Las <b>tablas</b> se usan solo para datos tabulares (horarios, clasificaciones), nunca para maquetar la página:</p>
      ${B.code(`<table>
  <caption>Horario de la biblioteca</caption>
  <tr><th>Día</th><th>Horario</th></tr>
  <tr><td>Lunes</td><td>9:00-14:00</td></tr>
</table>`)}
      <p><code>&lt;tr&gt;</code> es una fila, <code>&lt;th&gt;</code> una celda de encabezado y <code>&lt;td&gt;</code> una celda de datos. <code>colspan</code> y <code>rowspan</code> combinan celdas.</p>
      <p>Los <b>formularios</b> recogen datos del usuario y los envían a un programa del servidor. Se definen con <code>&lt;form action="destino" method="post"&gt;</code> y contienen controles:</p>
      <ul><li><code>&lt;input&gt;</code> con distintos <b>tipos</b>: text, email, password, number, date, checkbox (casillas), radio (opción única) y submit (botón de envío).</li>
      <li><code>&lt;textarea&gt;</code> para textos largos y <code>&lt;select&gt;</code> con <code>&lt;option&gt;</code> para listas desplegables.</li>
      <li><code>&lt;label for="..."&gt;</code>: la etiqueta visible de cada campo. Es esencial para la accesibilidad.</li></ul>
      <p>Atributos como <code>required</code>, <code>min</code>, <code>max</code> o el propio tipo email hacen que el navegador <b>valide</b> los datos antes de enviarlos. Un formulario que recoge datos personales debe informar de su tratamiento y pedir el consentimiento, según el RGPD.</p>`,
      svg: B.cajas("Controles de un formulario HTML", [["text / email", "textos cortos"], ["checkbox", "varias opciones"], ["radio", "una opción"], ["select", "desplegable"], ["textarea", "texto largo"], ["submit", "enviar"]], { t: "Formularios", cols: 3 }),
    },
    {
      h: "HTML semántico",
      html: `<p>El <b>HTML semántico</b> consiste en usar cada etiqueta según su <b>significado</b> y no según su aspecto. HTML5 incorporó etiquetas que describen las partes de una página:</p>
      <ul><li><code>&lt;header&gt;</code>: la cabecera (logotipo, título del sitio).</li>
      <li><code>&lt;nav&gt;</code>: el menú de navegación principal.</li>
      <li><code>&lt;main&gt;</code>: el contenido principal, único en cada página.</li>
      <li><code>&lt;article&gt;</code>: un contenido independiente (una noticia, una entrada de blog).</li>
      <li><code>&lt;section&gt;</code>: una sección temática con su propio título.</li>
      <li><code>&lt;aside&gt;</code>: contenido complementario (barra lateral, notas).</li>
      <li><code>&lt;footer&gt;</code>: el pie (contacto, aviso legal, créditos).</li>
      <li><code>&lt;figure&gt;</code> y <code>&lt;figcaption&gt;</code>: una imagen o gráfico con su pie.</li></ul>
      <p>Antes de HTML5 todo se hacía con <code>&lt;div&gt;</code>, un contenedor genérico sin significado. El <b>div</b> y el <b>span</b> (genérico en línea) siguen siendo útiles para agrupar elementos y aplicarles estilos, pero cuando existe una etiqueta con significado, se usa esa.</p>
      <p>¿Por qué importa la semántica si el aspecto se controla con CSS? Porque:</p>
      <ul><li>Los <b>lectores de pantalla</b> permiten saltar directamente al menú o al contenido principal.</li>
      <li>Los <b>buscadores</b> entienden mejor qué es importante y lo posicionan mejor.</li>
      <li>El código es más <b>legible</b> y fácil de mantener.</li></ul>
      <p>Una regla útil: escribe el HTML pensando en cómo se leería el documento sin ningún estilo. Si tiene sentido así, la estructura es buena.</p>`,
      svg: B.capas("Estructura semántica de una página", [["header + nav", "cabecera y menú"], ["main", "article, section"], ["aside", "complementario"], ["footer", "pie"]], { t: "HTML semántico" }),
    },
    {
      h: "CSS: sintaxis, selectores y cascada",
      html: `<p><b>CSS</b> (hojas de estilo en cascada) define la presentación: colores, tipografías, tamaños, espaciados y distribución. Separar contenido (HTML) y presentación (CSS) permite cambiar el aspecto de todo un sitio editando un solo archivo. El CSS se escribe preferentemente en una <b>hoja externa</b> enlazada desde el head; también puede ir en una etiqueta <code>&lt;style&gt;</code> o en el atributo style de un elemento, aunque esto último dificulta el mantenimiento.</p>
      <p>Una <b>regla</b> CSS tiene un <b>selector</b> y un bloque de <b>declaraciones</b> propiedad: valor:</p>
      ${B.code(`h1 { color: #1E3A8A; font-size: 2rem; }
.destacado { background: #FEF3C7; }
#menu a:hover { text-decoration: underline; }
nav li { display: inline-block; }`)}
      <ul><li><b>Selector de etiqueta</b> (<code>h1</code>): todos los elementos de ese tipo.</li>
      <li><b>Selector de clase</b> (<code>.destacado</code>): los elementos con <code>class="destacado"</code>; una clase puede repetirse en muchos elementos.</li>
      <li><b>Selector de identificador</b> (<code>#menu</code>): el único elemento con <code>id="menu"</code>.</li>
      <li><b>Selector descendiente</b> (<code>nav li</code>) y <b>pseudoclases</b> como <code>:hover</code> (al pasar el ratón) o <code>:first-child</code>.</li></ul>
      <p>La <b>cascada</b> resuelve los conflictos cuando varias reglas afectan a un mismo elemento: gana la más <b>específica</b> (un id pesa más que una clase, y una clase más que una etiqueta); si tienen la misma especificidad, gana la última escrita. Además, algunas propiedades, como el color o la fuente, se <b>heredan</b> de los elementos padre: basta con definir la tipografía en el body.</p>`,
      svg: B.barras("Especificidad de los selectores CSS", [["etiqueta", 1], ["clase", 10], ["id", 100], ["style", 1000]], { t: "Peso de cada selector", unidad: "" }),
      video: { id: "OEV8gMkCHXQ", titulo: "CSS en 100 segundos", canal: "Fireship", vistas: 731613 },
    },
    {
      h: "El modelo de caja, el color y la tipografía",
      html: `<p>Para CSS, cada elemento es una <mark>caja</mark> rectangular formada por cuatro capas, de dentro afuera:</p>
      <ul><li><b>Contenido</b> (<code>width</code> y <code>height</code>).</li>
      <li><b>Relleno</b> (<code>padding</code>): espacio entre el contenido y el borde; toma el color de fondo.</li>
      <li><b>Borde</b> (<code>border: 2px solid red</code>).</li>
      <li><b>Margen</b> (<code>margin</code>): espacio exterior que separa la caja de las demás; es transparente.</li></ul>
      <p>Por defecto, el ancho total es width + padding + border. Con <code>box-sizing: border-box</code>, el width incluye relleno y borde, lo que facilita mucho los cálculos. Los elementos de <b>bloque</b> (p, h1, div, section) ocupan todo el ancho y empiezan en una línea nueva; los elementos <b>en línea</b> (a, strong, span) ocupan solo lo necesario y no admiten ancho ni alto.</p>
      <p>Las <b>unidades</b> pueden ser absolutas (<code>px</code>) o relativas: <code>%</code> (respecto al contenedor), <code>rem</code> (respecto al tamaño de letra raíz, normalmente 16 px), <code>em</code> y <code>vw</code>/<code>vh</code> (porcentaje del ancho y alto de la ventana). Las relativas se adaptan mejor a distintas pantallas y respetan el tamaño de letra que el usuario elija.</p>
      <p>Los <b>colores</b> se indican por nombre (<code>red</code>), en hexadecimal (<code>#FF0000</code>), con <code>rgb()</code> o con <code>hsl()</code>. Para la <b>tipografía</b> se usan <code>font-family</code> (con fuentes alternativas: <code>"Open Sans", Arial, sans-serif</code>), <code>font-size</code>, <code>font-weight</code>, <code>line-height</code> (un interlineado de 1,5 mejora la lectura) y <code>text-align</code>. Las fuentes web permiten usar tipografías que el usuario no tiene instaladas.</p>`,
      svg: caja(),
    },
    {
      h: "Maquetación con flexbox y grid",
      html: `<p><b>Maquetar</b> es distribuir las cajas en la página: cabecera, menú horizontal, columnas, galerías. El CSS moderno ofrece dos sistemas muy potentes:</p>
      <ul><li><b>Flexbox</b> (<code>display: flex</code>) organiza los elementos hijos en <b>una dimensión</b>, en fila o en columna. Con <code>justify-content</code> se reparten en el eje principal (al inicio, centrados, con espacio entre ellos), con <code>align-items</code> se alinean en el eje transversal, con <code>gap</code> se separan y con <code>flex-wrap: wrap</code> pasan a la línea siguiente si no caben. Es ideal para menús, barras de botones o tarjetas en fila.</li>
      <li><b>Grid</b> (<code>display: grid</code>) organiza en <b>dos dimensiones</b>, filas y columnas, como una cuadrícula. Con <code>grid-template-columns</code> se definen las columnas y la unidad <code>fr</code> reparte el espacio disponible: <code>1fr 2fr</code> crea dos columnas en las que la segunda es el doble de ancha. Es ideal para la estructura general de la página y para galerías.</li></ul>
      ${B.code(`nav ul { display: flex; gap: 1rem; justify-content: center; }
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}`)}
      <p>La segunda regla crea una galería que coloca tantas columnas de al menos 200 px como quepan: cuatro en un monitor, dos en una tableta y una en el móvil, sin escribir nada más. Antes de flexbox y grid se maquetaba con tablas o con elementos flotantes, técnicas frágiles que hoy se evitan. La propiedad <code>position</code> (relative, absolute, fixed, sticky) sirve para casos concretos, como una cabecera que se queda fija al hacer scroll.</p>`,
      svg: B.comparar("Flexbox frente a grid", ["Flexbox", ["una dimensión", "fila o columna", "menús, botones", "justify, align"]], ["Grid", ["dos dimensiones", "filas y columnas", "página, galerías", "fr, repeat"]]),
    },
    {
      h: "Diseño web adaptable",
      html: `<p>Más de la mitad de las visitas a la web se hacen desde móviles. El <mark>diseño adaptable</mark> (<i>responsive web design</i>) consigue que una misma página se vea y se use bien en cualquier tamaño de pantalla. Se basa en tres ideas:</p>
      <ul><li><b>Retícula fluida</b>: anchos en porcentajes, fr o unidades relativas en lugar de píxeles fijos.</li>
      <li><b>Imágenes flexibles</b>: <code>img { max-width: 100%; height: auto; }</code> impide que una imagen se salga de su contenedor. Con <code>srcset</code> el navegador elige la versión más adecuada al tamaño de la pantalla.</li>
      <li><b>Consultas de medios</b> (<i>media queries</i>): aplican estilos solo cuando se cumple una condición, normalmente un ancho mínimo o máximo.</li></ul>
      ${B.code(`.contenido { display: grid; grid-template-columns: 1fr; }
@media (min-width: 768px) {
  .contenido { grid-template-columns: 3fr 1fr; }
}`)}
      <p>Con este código, en el móvil todo va en una columna, y a partir de 768 px de ancho (tabletas y ordenadores) el contenido principal y la barra lateral se colocan en dos columnas. El ancho en el que cambia el diseño es un <b>punto de ruptura</b>.</p>
      <p>Se recomienda trabajar con el enfoque <b>«primero el móvil»</b> (<i>mobile first</i>): diseñar primero para la pantalla pequeña, centrándose en lo esencial, y añadir columnas y detalles para pantallas mayores. Imprescindible: la etiqueta <code>meta viewport</code> en el head, botones y enlaces de al menos 44 px para tocarlos con el dedo, texto de 16 px como mínimo y comprobar el resultado con el modo dispositivo de las herramientas del navegador y en móviles reales.</p>`,
      svg: B.cajas("Puntos de ruptura de un diseño adaptable", [["Móvil", "hasta 599 px|1 columna"], ["Tableta", "600-1023 px|2 columnas"], ["Escritorio", "desde 1024 px|3 columnas"]], { t: "Puntos de ruptura", cols: 3 }),
      video: { id: "8JC-XyCSys4", titulo: "Cómo hacer un diseño responsive solo con HTML y CSS", canal: "Soy Dalto", vistas: 295947 },
    },
    {
      h: "Accesibilidad y usabilidad web",
      html: `<p>La <b>accesibilidad web</b> garantiza que todas las personas, incluidas las que tienen discapacidad visual, auditiva, motriz o cognitiva, y las personas mayores, puedan percibir, entender, navegar e interactuar con una web. Es un derecho y, en España, una obligación legal para las webs del sector público y de muchas empresas. La referencia internacional son las pautas <b>WCAG</b> del W3C, que se organizan en cuatro principios: <b>perceptible</b>, <b>operable</b>, <b>comprensible</b> y <b>robusto</b>.</p>
      <p>Buenas prácticas:</p>
      <ul><li>Texto alternativo (<code>alt</code>) en todas las imágenes informativas; alt vacío en las decorativas.</li>
      <li>Estructura semántica y encabezados ordenados, para navegar con lector de pantalla.</li>
      <li><b>Contraste</b> suficiente entre texto y fondo (al menos 4,5:1 para texto normal) y no transmitir información solo con el color.</li>
      <li>Que todo se pueda usar con el <b>teclado</b> (tabulador) y que se vea qué elemento tiene el foco.</li>
      <li>Etiquetas <code>&lt;label&gt;</code> en los formularios y mensajes de error claros.</li>
      <li>Subtítulos y transcripciones en vídeos y audios.</li>
      <li>Textos claros, enlaces descriptivos e idioma declarado.</li>
      <li>Que el texto pueda ampliarse al 200 % sin romper el diseño.</li></ul>
      <p>La <b>usabilidad</b> es la facilidad de uso: navegación coherente en todas las páginas, menú visible, buscador, ubicación clara («migas de pan»), tiempos de carga cortos y diseño consistente. Una web accesible suele ser también más usable para todos. Existen herramientas automáticas de evaluación, pero la prueba definitiva es navegar con el teclado y con un lector de pantalla.</p>`,
      svg: B.cajas("Principios de accesibilidad WCAG", [["Perceptible", "alt, subtítulos|contraste"], ["Operable", "teclado|tiempo suficiente"], ["Comprensible", "textos claros|errores claros"], ["Robusto", "HTML válido|compatible"]], { t: "WCAG" }),
    },
    {
      h: "Publicar y mantener un sitio web",
      html: `<p>Para que una web sea accesible desde internet hacen falta:</p>
      <ul><li>Un <b>nombre de dominio</b> (<code>miweb.es</code>), que se alquila por años a un registrador. Para los .es, la autoridad es Red.es.</li>
      <li>Un <b>alojamiento</b> o <i>hosting</i>: espacio en un servidor conectado permanentemente. Puede ser compartido, un servidor privado virtual o en la nube. Hay servicios gratuitos para webs estáticas que publican el sitio directamente desde un repositorio de código.</li>
      <li>Un <b>certificado</b> TLS para HTTPS; muchos alojamientos lo ofrecen gratis.</li></ul>
      <p>Los archivos se suben al servidor por <b>SFTP</b> (transferencia segura de archivos), desde el panel de control del alojamiento o mediante <b>Git</b>, que sincroniza el sitio con un repositorio y permite desplegar cada nueva versión.</p>
      <p>Una vez publicada, la web debe <b>optimizarse</b>:</p>
      <ul><li><b>Rendimiento</b>: imágenes comprimidas y del tamaño justo, pocos archivos pesados, caché. Las herramientas de auditoría del navegador lo miden.</li>
      <li><b>Posicionamiento en buscadores</b> (SEO): títulos y descripciones únicos en cada página, HTML semántico, URL legibles, contenido original de calidad, enlaces de otros sitios y velocidad de carga.</li></ul>
      <p>También hay que cumplir la <b>normativa</b>: aviso legal con los datos del responsable, política de privacidad si se recogen datos personales (RGPD), aviso y consentimiento de <b>cookies</b> que no sean técnicas, y respeto a los derechos de autor de textos, imágenes y fuentes. Finalmente, una web es un proyecto vivo: hay que actualizar contenidos, revisar enlaces rotos, hacer copias de seguridad y mantener al día el software.</p>`,
      svg: B.flujo("Pasos para publicar una web", ["Registrar el dominio", "Contratar el alojamiento con HTTPS", "Subir archivos por SFTP o Git", "Comprobar en varios dispositivos", "Optimizar, SEO y textos legales"], { t: "Publicación" }),
    },
  ],
  figura: {
    titulo: "Ideas clave del diseño web",
    items: [["HTML", "h1 · p · a", "estructura", "y semántica"], ["CSS", "selector { }", "caja, color", "y tipografía"], ["Adaptable", "@media", "flexbox, grid", "móvil primero"], ["Publicar", "dominio · hosting", "accesible", "y legal"]],
  },
  video: { id: "24gNhTcy6pw", titulo: "Curso básico de CSS desde 0: introducción", canal: "FalconMasters", vistas: 1612814 },
  quiz: [
    ["El programa que muestra las páginas web es…", ["el servidor", "el navegador", "el DNS", "el editor"], 1, "Firefox, Chrome, Safari…"],
    ["El código de estado HTTP que indica «página no encontrada» es…", ["200", "301", "404", "500"], 2, "200 es correcto; 500, error del servidor."],
    ["HTML se encarga de…", ["el aspecto", "la estructura y el contenido", "la interactividad", "el alojamiento"], 1, "CSS da el aspecto y JavaScript la interactividad."],
    ["Un wireframe es…", ["un cable de red", "un boceto esquemático de una página", "un tipo de servidor", "una fuente"], 1, "Muestra la distribución sin colores."],
    ["WordPress es…", ["un navegador", "un sistema de gestión de contenidos", "un lenguaje", "un protocolo"], 1, "Un CMS muy extendido."],
    ["La parte de un documento HTML que contiene lo visible es…", ["head", "body", "title", "meta"], 1, "El head contiene información no visible."],
    ["¿Qué etiqueta crea un enlace?", ["<link>", "<a>", "<href>", "<url>"], 1, "Con el atributo href."],
    ["El atributo alt de una imagen sirve para…", ["darle tamaño", "describirla para quien no la ve", "enlazarla", "comprimirla"], 1, "Es esencial para la accesibilidad."],
    ["Para una lista numerada se usa…", ["<ul>", "<ol>", "<li>", "<dl>"], 1, "Ordered list."],
    ["Una celda de encabezado de tabla se marca con…", ["<td>", "<tr>", "<th>", "<thead>"], 2, "Table header."],
    ["La etiqueta semántica para el menú principal es…", ["<menu>", "<nav>", "<header>", "<div>"], 1, "Navigation."],
    ["En CSS, el selector .aviso selecciona…", ["el elemento con id aviso", "los elementos con clase aviso", "las etiquetas aviso", "nada"], 1, "El punto indica clase."],
    ["Si un id y una clase dan colores distintos a un elemento, gana…", ["la clase", "el id", "la última", "ninguno"], 1, "El id es más específico."],
    ["En el modelo de caja, el espacio entre el contenido y el borde es…", ["margin", "padding", "border", "gap"], 1, "Relleno interior."],
    ["La unidad rem es relativa a…", ["el contenedor", "el tamaño de letra raíz", "la ventana", "el píxel"], 1, "Normalmente 16 px."],
    ["Para colocar elementos en filas y columnas a la vez se usa…", ["flexbox", "grid", "float", "inline"], 1, "Dos dimensiones."],
    ["@media (min-width: 768px) aplica los estilos…", ["solo en móviles", "a partir de 768 px de ancho", "hasta 768 px", "al imprimir"], 1, "Ancho mínimo."],
    ["img { max-width: 100% } sirve para…", ["ampliar la imagen", "que la imagen no se salga de su contenedor", "comprimirla", "ocultarla"], 1, "Imágenes flexibles."],
    ["El contraste mínimo recomendado para texto normal según WCAG es…", ["2:1", "3:1", "4,5:1", "10:1"], 2, "Nivel AA."],
    ["SEO significa…", ["seguridad del servidor", "posicionamiento en buscadores", "un tipo de alojamiento", "un formato de imagen"], 1, "Search Engine Optimization."],
  ],
  examen: [
    ["¿Qué error tiene <p>Texto <strong>importante</p></strong>?", ["Ninguno", "Las etiquetas se cierran en orden incorrecto", "Falta alt", "strong no existe"], 1, "Debe cerrarse primero strong y después p."],
    ["Desde paginas/actividades.html, ¿qué enlace lleva a index.html, situado en la carpeta superior?", ["index.html", "../index.html", "/paginas/index.html", "./paginas/index.html"], 1, ".. sube un nivel."],
    ["Una caja tiene width: 300px, padding: 20px, border: 5px y margin: 10px, sin border-box. ¿Qué ancho ocupa en total?", ["300 px", "350 px", "370 px", "335 px"], 2, "300 + 2·20 + 2·5 + 2·10 = 370 px."],
    ["Con box-sizing: border-box y los mismos valores, ¿cuánto mide el área de contenido?", ["300 px", "250 px", "240 px", "350 px"], 1, "300 − 2·20 − 2·5 = 250 px."],
    ["p { color: blue } y .nota { color: green } y #n1 { color: red }. ¿De qué color es <p class=\"nota\" id=\"n1\">?", ["azul", "verde", "rojo", "negro"], 2, "El id es el más específico."],
    ["grid-template-columns: 1fr 3fr en un contenedor de 800 px (sin gap). ¿Cuánto mide la segunda columna?", ["400 px", "600 px", "200 px", "533 px"], 1, "800 / 4 · 3 = 600 px."],
    ["Si la letra raíz es 16 px, ¿cuánto mide 1,5rem?", ["15 px", "24 px", "32 px", "1,5 px"], 1, "1,5 · 16 = 24 px."],
    ["¿Cuál de estos textos de enlace es más accesible?", ["Pincha aquí", "Más", "Descarga el horario de tutorías (PDF)", "Enlace"], 2, "Describe el destino y el formato."],
  ],
  feynman: ["Qué ocurre desde que escribes una URL hasta que ves la página", "Qué hacen HTML, CSS y JavaScript", "Por qué es importante el HTML semántico", "Cómo funciona la cascada de CSS y la especificidad", "Qué es el modelo de caja", "Cómo consigue una web adaptarse al móvil y por qué debe ser accesible"],
  mapa: ["DISEÑO WEB", [["Funcionamiento", "cliente · servidor · HTTP"], ["HTML", "etiquetas · enlaces · semántica"], ["CSS", "selectores · caja · flex y grid"], ["Calidad", "adaptable · accesible · SEO · legal"]]],
  tarjetas: [
    ["Cliente y servidor", "El navegador pide por HTTP y el servidor responde con el archivo y un código (200, 404)."],
    ["HTML, CSS y JavaScript", "Estructura, presentación y comportamiento."],
    ["Planificación", "Objetivo, público, mapa del sitio, wireframes y guía de estilo."],
    ["Documento HTML", "DOCTYPE, html lang, head (meta, title, CSS) y body."],
    ["Enlace e imagen", "<a href=\"...\">texto</a> · <img src=\"...\" alt=\"...\">."],
    ["HTML semántico", "header, nav, main, article, section, aside, footer."],
    ["Regla CSS", "selector { propiedad: valor; }"],
    ["Especificidad", "style > id > clase > etiqueta; a igualdad, la última."],
    ["Modelo de caja", "Contenido, padding, border y margin."],
    ["Flexbox y grid", "Flex: una dimensión. Grid: filas y columnas."],
    ["Diseño adaptable", "Retícula fluida, imágenes flexibles y @media; móvil primero."],
    ["Accesibilidad WCAG", "Perceptible, operable, comprensible y robusto."],
  ],
  ejemplos: [
    ["Escribe el HTML de una tarjeta de presentación con tu nombre como título, una foto, un párrafo y un enlace a tu correo.", ["Se usa un article con un h2 para el nombre.", "La imagen lleva alt descriptivo y tamaño.", "El correo se enlaza con mailto:."], "<article class=\"tarjeta\">\n  <h2>Lucía Pérez</h2>\n  <img src=\"img/lucia.jpg\" alt=\"Retrato de Lucía sonriendo\" width=\"200\" height=\"200\">\n  <p>Estudiante de 1º de Bachillerato y aficionada a la fotografía.</p>\n  <a href=\"mailto:lucia@ejemplo.es\">Escríbeme</a>\n</article>"],
    ["Da estilo a la tarjeta anterior: ancho máximo de 320 px, centrada, borde gris redondeado, relleno de 16 px, imagen redonda y enlace sin subrayado que se subraye al pasar el ratón.", ["Se usa la clase .tarjeta como selector.", "margin: auto centra un bloque con ancho definido.", "border-radius: 50% hace la imagen circular.", "La pseudoclase :hover cambia el enlace."], ".tarjeta { max-width: 320px; margin: 1rem auto; padding: 16px;\n  border: 1px solid #ccc; border-radius: 12px; text-align: center; }\n.tarjeta img { border-radius: 50%; }\n.tarjeta a { text-decoration: none; color: #1E3A8A; }\n.tarjeta a:hover { text-decoration: underline; }"],
    ["Crea un menú horizontal centrado con cuatro enlaces que en pantallas estrechas pase a vertical.", ["HTML: un nav con una lista ul de enlaces.", "CSS: flex en columna por defecto (móvil primero).", "Con @media a partir de 600 px pasa a fila y se centra."], "<nav><ul class=\"menu\">\n  <li><a href=\"index.html\">Inicio</a></li>\n  <li><a href=\"actividades.html\">Actividades</a></li>\n  <li><a href=\"galeria.html\">Galería</a></li>\n  <li><a href=\"contacto.html\">Contacto</a></li>\n</ul></nav>\n\n.menu { display: flex; flex-direction: column; gap: .5rem; list-style: none; }\n@media (min-width: 600px) {\n  .menu { flex-direction: row; justify-content: center; }\n}"],
    ["Escribe un formulario accesible de inscripción con nombre, correo, curso (desplegable) y botón de envío, con campos obligatorios.", ["Cada campo tiene un label asociado con for e id.", "type=\"email\" y required validan en el navegador.", "El select ofrece las opciones de curso."], "<form action=\"/inscripcion\" method=\"post\">\n  <label for=\"nombre\">Nombre</label>\n  <input id=\"nombre\" name=\"nombre\" type=\"text\" required>\n  <label for=\"correo\">Correo</label>\n  <input id=\"correo\" name=\"correo\" type=\"email\" required>\n  <label for=\"curso\">Curso</label>\n  <select id=\"curso\" name=\"curso\">\n    <option>1º Bachillerato</option>\n    <option>2º Bachillerato</option>\n  </select>\n  <button type=\"submit\">Inscribirme</button>\n</form>"],
    ["Calcula el ancho total que ocupa una caja con width: 250px; padding: 15px; border: 3px solid; margin: 20px en los dos modelos de caja.", ["content-box: el width es solo el contenido.", "Total = 250 + 2·15 + 2·3 + 2·20 = 326 px.", "border-box: el width incluye padding y borde: la caja mide 250 px y con márgenes ocupa 290 px; el contenido mide 250 − 30 − 6 = 214 px."], "content-box: 326 px ocupados; border-box: 290 px ocupados (contenido de 214 px)."],
    ["Revisa la accesibilidad de este fragmento y corrígelo: <img src=\"mapa.png\"> <a href=\"x.pdf\">aquí</a> <p style=\"color:#bbb\">Aviso importante</p>.", ["La imagen no tiene alt: añadir una descripción.", "El enlace «aquí» no dice adónde lleva: describir el destino y el formato.", "El gris #bbb sobre blanco tiene un contraste de unos 1,9:1: usar un color más oscuro y marcar la importancia con strong."], "<img src=\"mapa.png\" alt=\"Mapa de acceso al instituto desde la estación\">\n<a href=\"x.pdf\">Descarga las normas del centro (PDF, 200 kB)</a>\n<p class=\"aviso\"><strong>Aviso importante</strong></p>  /* .aviso { color: #333; } */"],
  ],
  errores: [
    "Olvidar el atributo alt de las imágenes o rellenarlo con «imagen».",
    "Cerrar las etiquetas en orden incorrecto o no cerrarlas.",
    "Usar tablas o muchos <br> para maquetar en lugar de CSS.",
    "Abusar de los id y del atributo style en lugar de clases y una hoja de estilos externa.",
    "Diseñar con anchos fijos en píxeles que se salen de la pantalla del móvil.",
    "Olvidar la etiqueta meta viewport, de modo que el móvil muestra la versión de escritorio diminuta.",
  ],
  ejercicios: {
    b: [
      ["Explica la diferencia entre página web, sitio web y navegador.", "Página: documento HTML. Sitio: conjunto de páginas relacionadas bajo un dominio. Navegador: programa que pide y muestra las páginas."],
      ["¿Qué significan los códigos HTTP 200, 404 y 500?", "200: correcto. 404: recurso no encontrado. 500: error interno del servidor."],
      ["¿Qué función tienen HTML, CSS y JavaScript?", "HTML: estructura y contenido. CSS: presentación. JavaScript: comportamiento e interactividad."],
      ["Enumera cuatro herramientas o documentos de planificación de un sitio web.", "Mapa del sitio, wireframes, prototipo y guía de estilo."],
      ["Escribe la estructura mínima de un documento HTML5.", "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Título</title>\n</head>\n<body>\n</body>\n</html>"],
      ["Escribe el código de un enlace a https://www.rae.es que se abra en otra pestaña.", "<a href=\"https://www.rae.es\" target=\"_blank\">Diccionario de la RAE</a>"],
      ["Escribe una lista no ordenada con tres frutas.", "<ul>\n  <li>Manzana</li>\n  <li>Pera</li>\n  <li>Naranja</li>\n</ul>"],
      ["Nombra cinco etiquetas semánticas de HTML5 y su función.", "header (cabecera), nav (navegación), main (contenido principal), aside (complementario), footer (pie)."],
      ["Identifica el tipo de selector: p, .boton, #logo, nav a.", "Etiqueta, clase, identificador y descendiente."],
      ["Nombra las cuatro partes del modelo de caja de dentro afuera.", "Contenido, padding, border y margin."],
      ["Escribe la regla CSS que pone todos los h2 en color #2E7D32 y tamaño 1,5rem.", "h2 { color: #2E7D32; font-size: 1.5rem; }"],
      ["¿Qué necesitas para publicar una web en internet con tu propio nombre?", "Un dominio, un alojamiento en un servidor (con HTTPS) y subir los archivos (SFTP, panel o Git)."],
    ],
    m: [
      ["Describe paso a paso qué ocurre cuando visitas https://www.ejemplo.es/actividades.html.", "El navegador resuelve el dominio con el DNS, abre una conexión cifrada (TLS) con el servidor, envía GET /actividades.html, el servidor responde 200 con el HTML, el navegador lo analiza, pide CSS, imágenes y scripts y renderiza la página."],
      ["Dibuja (describe) el mapa de un sitio web para una asociación juvenil.", "Inicio → Quiénes somos (historia, equipo), Actividades (campamentos, talleres, calendario), Galería, Noticias (entradas), Hazte socio (formulario), Contacto. Cada página enlaza con el menú principal."],
      ["Escribe una tabla HTML con encabezado de dos columnas (Día, Actividad) y dos filas de datos y un título.", "<table>\n  <caption>Actividades</caption>\n  <tr><th>Día</th><th>Actividad</th></tr>\n  <tr><td>Lunes</td><td>Ajedrez</td></tr>\n  <tr><td>Jueves</td><td>Teatro</td></tr>\n</table>"],
      ["Corrige: <img src=foto.jpg> <h3>Título principal</h3> <b>importante</b>.", "<img src=\"foto.jpg\" alt=\"Descripción de la foto\"> <h1>Título principal</h1> (no saltarse niveles; un solo h1) <strong>importante</strong> (semántica de importancia)."],
      ["Reescribe con HTML semántico: <div id=\"cabecera\">, <div id=\"menu\">, <div id=\"contenido\">, <div id=\"pie\">.", "<header>, <nav>, <main> y <footer>."],
      ["Indica el color final: body { color: black } .texto { color: blue } p { color: red } para <p class=\"texto\">.", "Azul: la clase es más específica que la etiqueta, y el color de body solo se heredaría si no hubiera reglas propias."],
      ["Calcula el ancho total ocupado por una caja con width: 400px, padding: 10px 20px, border: 2px y margin: 0 auto en content-box.", "Padding horizontal 20 px a cada lado: 400 + 40 + 4 = 444 px de caja; el margin auto la centra repartiendo el espacio sobrante."],
      ["Escribe el CSS para que tres tarjetas se repartan en una fila con el mismo espacio entre ellas.", ".tarjetas { display: flex; justify-content: space-between; gap: 1rem; }\n.tarjeta { flex: 1; }"],
      ["Escribe una cuadrícula de 3 columnas iguales con 10 px de separación.", ".rejilla { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }"],
      ["Escribe una consulta de medios que oculte la barra lateral (.lateral) en pantallas menores de 600 px.", "@media (max-width: 599px) { .lateral { display: none; } }"],
      ["Explica el enfoque «móvil primero» y una ventaja.", "Diseñar primero los estilos para pantallas pequeñas y añadir con min-width los cambios para pantallas mayores. Obliga a priorizar lo esencial y los móviles cargan menos estilos."],
      ["Indica cinco comprobaciones de accesibilidad que harías en tu web.", "Alt en imágenes, orden de encabezados, contraste suficiente, navegación completa con teclado y foco visible, labels en formularios (también subtítulos y ampliación al 200 %)."],
      ["¿Qué prácticas mejoran el posicionamiento SEO de una página?", "Title y descripción únicos, HTML semántico con encabezados, URL legibles, contenido original y útil, imágenes con alt, velocidad de carga, versión móvil y enlaces de otras webs."],
      ["¿Qué textos legales necesita una web que tiene un formulario de contacto y usa cookies de analítica?", "Aviso legal (responsable), política de privacidad (qué datos se recogen, para qué, derechos, RGPD) con consentimiento en el formulario y aviso de cookies con consentimiento previo para las no técnicas."],
    ],
    a: [
      ["Calcula la especificidad de: #menu .activo a, nav ul li a, .tarjeta:hover y ordénalas de mayor a menor.", "Contando (id, clases/pseudoclases, etiquetas): #menu .activo a = (1,1,1); nav ul li a = (0,0,4); .tarjeta:hover = (0,2,0). Orden: #menu .activo a > .tarjeta:hover > nav ul li a."],
      ["Diseña con grid la estructura de una página con cabecera, menú lateral, contenido y pie, usando áreas con nombre.", "body { display: grid; grid-template-columns: 220px 1fr;\n  grid-template-areas: \"cab cab\" \"menu main\" \"pie pie\"; }\nheader { grid-area: cab; } nav { grid-area: menu; }\nmain { grid-area: main; } footer { grid-area: pie; }\n@media (max-width: 700px) { body { grid-template-columns: 1fr;\n  grid-template-areas: \"cab\" \"menu\" \"main\" \"pie\"; } }"],
      ["Una página pesa 6 MB por diez fotos de 600 kB que se muestran a 400 px de ancho. Propón optimizaciones y estima el ahorro.", "Redimensionar a 800 px (pantallas de alta densidad) y exportar a WebP de calidad 75: unos 60 kB por foto. Total: 600 kB frente a 6 MB, un 90 % menos. Añadir loading=\"lazy\", width y height, y srcset para servir 400 px en móviles."],
      ["Calcula la relación de contraste entre blanco (luminancia 1) y un gris de luminancia relativa 0,2, y di si cumple WCAG AA para texto normal.", "Contraste = (L1 + 0,05) / (L2 + 0,05) = 1,05 / 0,25 = 4,2 : 1. No llega a 4,5 : 1: no cumple para texto normal (sí para texto grande, que exige 3 : 1)."],
      ["Escribe una galería de imágenes adaptable sin consultas de medios, con miniaturas de al menos 180 px.", ".galeria { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px; }\n.galeria img { width: 100%; height: 180px; object-fit: cover; border-radius: 8px; }"],
      ["Compara crear la web de un club deportivo con un CMS, con un creador visual o a mano, valorando coste, control, mantenimiento y seguridad.", "CMS: flexible, muchos plugins, varias personas publican; requiere hosting y actualizaciones constantes (riesgo si no). Creador visual: rapidísimo y sin mantenimiento técnico, pero diseño limitado y dependencia de la plataforma. A mano (estático): ligero, seguro y barato, pero cada cambio requiere saber HTML. Para un club con noticias frecuentes, un CMS bien mantenido o un generador estático con editor."],
      ["Explica por qué un sitio debe usar HTTPS aunque no tenga formularios.", "Cifra y autentica la comunicación: evita que terceros (en una wifi pública, por ejemplo) lean o modifiquen la página e inyecten código o anuncios; los navegadores marcan HTTP como «no seguro», los buscadores priorizan HTTPS y muchas funciones modernas solo funcionan con él."],
      ["Diseña la jerarquía de encabezados de una página de noticia con título, entradilla, tres secciones con dos subsecciones cada una y una barra lateral de noticias relacionadas.", "h1: título de la noticia. Entradilla: p. Secciones: h2 (×3), cada una con h3 (×2). Barra lateral (aside): h2 «Noticias relacionadas» con una lista de enlaces. Sin saltos de nivel."],
      ["Plantea cómo probarías la usabilidad de tu web con cinco compañeros.", "Definir 4-5 tareas reales (encontrar el horario, inscribirse), observar sin ayudar mientras piensan en voz alta, cronometrar y anotar dónde dudan o fallan, preguntar su valoración al final y priorizar las mejoras de los problemas más repetidos."],
      ["Escribe el HTML y CSS de un botón accesible «Ir arriba» fijo en la esquina inferior derecha.", "<a href=\"#inicio\" class=\"arriba\">Ir arriba</a>\n.arriba { position: fixed; right: 16px; bottom: 16px; padding: 12px 16px;\n  background: #1E3A8A; color: #fff; border-radius: 24px; }\n.arriba:focus { outline: 3px solid #F59E0B; }\n(El body debe tener id=\"inicio\" o un elemento con ese id al principio.)"],
    ],
  },
  glosario: [
    ["Navegador", "Programa que solicita y muestra páginas web."],
    ["Servidor web", "Ordenador que almacena y envía las páginas de un sitio."],
    ["HTTP", "Protocolo de transferencia de hipertexto; HTTPS es su versión cifrada."],
    ["Wireframe", "Boceto esquemático de la distribución de una página."],
    ["CMS", "Sistema de gestión de contenidos para crear webs sin programar."],
    ["HTML", "Lenguaje de marcado que estructura el contenido web."],
    ["Etiqueta", "Marca entre ángulos que delimita un elemento HTML."],
    ["Atributo", "Información adicional de una etiqueta, como href o alt."],
    ["HTML semántico", "Uso de etiquetas según su significado."],
    ["CSS", "Lenguaje de hojas de estilo que define la presentación."],
    ["Selector", "Parte de una regla CSS que indica a qué elementos se aplica."],
    ["Especificidad", "Peso de un selector para resolver conflictos de estilos."],
    ["Modelo de caja", "Contenido, relleno, borde y margen de cada elemento."],
    ["Flexbox", "Sistema de maquetación en una dimensión."],
    ["Grid", "Sistema de maquetación en filas y columnas."],
    ["Consulta de medios", "Regla CSS que se aplica según las características de la pantalla."],
    ["Accesibilidad web", "Posibilidad de que todas las personas usen una web."],
    ["SEO", "Técnicas para mejorar la posición en los buscadores."],
  ],
  situacion: {
    titulo: "La web de una entidad del barrio",
    reto: "Por parejas, diseñad y programad desde cero un sitio web de al menos cuatro páginas para una entidad real del entorno (asociación, biblioteca, club) que no tenga web o la tenga anticuada.",
    pasos: [
      "Entrevistad a la entidad para definir objetivos, público y contenidos.",
      "Elaborad el mapa del sitio, los wireframes para móvil y escritorio y la guía de estilo.",
      "Escribid el HTML semántico de las páginas con textos, imágenes optimizadas, tabla y formulario.",
      "Cread la hoja de estilos con flexbox, grid y consultas de medios (móvil primero).",
      "Validad el código y comprobad la accesibilidad y el rendimiento con las herramientas del navegador.",
      "Publicad la web en un alojamiento gratuito y presentadla a la entidad.",
    ],
    producto: "Sitio web publicado, documentación de planificación, informe de validación y accesibilidad y presentación a la entidad.",
    evaluacion: [
      "La planificación responde a las necesidades de la entidad y del público.",
      "El HTML es válido, semántico y el CSS está bien organizado.",
      "La web es adaptable, accesible (WCAG) y carga rápido.",
      "Se cumplen los requisitos legales y se respetan las licencias de los contenidos.",
    ],
  },
  familias: [
    "Pedidle que os enseñe las herramientas de desarrollo del navegador (F12) en una web que visitéis a menudo.",
    "Buscad juntos una web que funcione mal en el móvil y comentad qué falla.",
    "Probad a navegar por una web solo con el teclado para entender la accesibilidad.",
    "Si tenéis un negocio o asociación, animadle a proponer mejoras para su web.",
  ],
  saberes: "Diseño y publicación de contenidos web: funcionamiento de la web (cliente, servidor, HTTP), planificación de sitios, herramientas (editores, CMS), lenguaje HTML (estructura, etiquetas, enlaces, imágenes, listas, tablas, formularios, semántica), hojas de estilo CSS (selectores, cascada, modelo de caja, flexbox, grid), diseño adaptable, accesibilidad (WCAG), usabilidad, SEO, publicación y normativa (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Reto «una página en 20 minutos»: replicar un diseño sencillo dado con HTML y CSS.",
    "Juego de especificidad: predecir el color final de elementos con reglas en conflicto.",
    "Auditoría de accesibilidad de la web del centro con teclado y lector de pantalla.",
    "Publicar el portafolio personal del curso en un alojamiento gratuito para webs estáticas.",
  ],
  fuentes: [
    { t: "MDN Web Docs (Mozilla): HTML y CSS en español", url: "https://developer.mozilla.org/es/docs/Web" },
    { t: "W3C: Pautas de Accesibilidad para el Contenido Web (WCAG)", url: "https://www.w3.org/WAI/standards-guidelines/wcag/es" },
    { t: "Servicio de validación de HTML del W3C", url: "https://validator.w3.org/" },
  ],
}));
