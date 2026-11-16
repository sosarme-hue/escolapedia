// Tecnologías de la Información y la Comunicación I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L38");

// Mapa de bits frente a vectorial: un círculo ampliado.
const bitsVector = () => {
  const px = [];
  for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) {
    const x = 16 + j * 9, y = 38 + i * 9, d = Math.hypot(x + 4.5 - 61, y + 4.5 - 83);
    if (d < 42) px.push(`<rect x="${x}" y="${y}" width="9" height="9" fill="var(--pen)" stroke="var(--paper)" stroke-width=".8"/>`);
  }
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Un círculo ampliado: en mapa de bits se ven los píxeles en escalera; en vectorial el borde sigue siendo liso">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${B.tx(130, 22, "Ampliado al 800 %", { fs: 13, maxW: 236, bold: true, font: B.D })}
    ${px.join("")}${B.tx(56, 146, "Mapa de bits", { fs: 11.5, maxW: 110, bold: true, color: "var(--pen)" })}${B.tx(56, 162, "píxeles: se pixela", { fs: 10, maxW: 110 })}
    <circle cx="196" cy="83" r="44" fill="var(--red)"/><circle cx="196" cy="39" r="3" fill="var(--ink)"/><circle cx="240" cy="83" r="3" fill="var(--ink)"/>
    ${B.tx(196, 146, "Vectorial", { fs: 11.5, maxW: 110, bold: true, color: "var(--red)" })}${B.tx(196, 162, "fórmulas: siempre nítido", { fs: 10, maxW: 110 })}
  </svg>`;
};

// Muestreo de una onda: curva y escalones.
const muestreo = () => {
  const pts = [], esc = [];
  for (let i = 0; i <= 120; i++) { const x = 20 + i * 1.8, y = 92 - 50 * Math.sin(i / 120 * 2 * Math.PI * 1.5); pts.push(`${x.toFixed(1)},${y.toFixed(1)}`); }
  for (let k = 0; k < 12; k++) { const i = k * 10, x = 20 + i * 1.8, v = Math.round(50 * Math.sin(i / 120 * 2 * Math.PI * 1.5) / 12.5) * 12.5, y = 92 - v;
    esc.push(`<rect x="${x.toFixed(1)}" y="${Math.min(y, 92).toFixed(1)}" width="18" height="${Math.abs(92 - y).toFixed(1) || 1}" fill="var(--leaf)" opacity=".35"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="var(--red)"/>`); }
  return `<svg viewBox="0 0 260 180" role="img" aria-label="Muestreo y cuantificación: se mide la onda a intervalos regulares y cada medida se redondea a un nivel">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    ${B.tx(130, 20, "Muestreo y cuantificación", { fs: 13, maxW: 236, bold: true, font: B.D })}
    <path d="M20 92 H 240" stroke="var(--line)" stroke-width="1.5"/>${esc.join("")}
    <polyline points="${pts.join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2.2"/>
    ${B.tx(130, 162, "• muestra (Hz)  ▮ nivel (bits)", { fs: 10.5, maxW: 220, bold: true, color: "var(--red)" })}
  </svg>`;
};

module.exports = B.tema({
  titulo: "Imagen y multimedia",
  minutos: 120,
  objetivos: [
    "Diferenciar imágenes de mapa de bits y vectoriales y calcular su tamaño según resolución y profundidad de color",
    "Elegir el modelo de color y el formato de archivo adecuados a cada uso, con o sin compresión",
    "Editar imágenes con capas, selecciones y ajustes, y crear diseños y animaciones sencillas",
    "Grabar, editar y publicar audio y vídeo digitales respetando licencias, accesibilidad y ética",
  ],
  claves: ["píxel", "mapa de bits", "imagen vectorial", "resolución", "profundidad de color", "RGB", "CMYK", "compresión", "capa", "frecuencia de muestreo", "fotograma", "códec"],
  pregunta: {
    texto: "El logotipo de tu equipo se ve perfecto en el móvil, pero al imprimirlo en una pancarta de tres metros aparece borroso y lleno de cuadraditos. ¿Qué ha pasado?",
    respuesta: "El logotipo era una imagen de <b>mapa de bits</b>: una cuadrícula de <b>píxeles</b> con un número fijo de puntos. Al ampliarla tanto, cada píxel se convierte en un cuadrado visible. Si se hubiera diseñado como imagen <mark>vectorial</mark>, formada por formas descritas con fórmulas, se podría ampliar a cualquier tamaño sin perder calidad.",
  },
  lectura: {
    titulo: "La foto que nunca existió",
    html: `<p>En 2023, una imagen del papa Francisco con un enorme abrigo blanco acolchado dio la vuelta al mundo en pocas horas. Millones de personas la compartieron convencidas de que era real. No lo era: la había creado un usuario con un programa de inteligencia artificial generativa. Ese mismo año, una fotografía premiada en un concurso internacional resultó ser también sintética, y su autor la presentó a propósito para abrir el debate.</p>
    <p>La manipulación de imágenes no es nueva: en los años treinta se borraba a dirigentes caídos en desgracia de las fotos oficiales con pinceles y tijeras. Lo nuevo es que hoy cualquiera puede hacerlo en segundos y que el resultado es casi indistinguible de una fotografía auténtica.</p>
    <p>Por eso entender cómo funcionan la imagen, el sonido y el vídeo digitales es más importante que nunca. No solo para crear contenidos de calidad (fotos bien expuestas, carteles claros, pódcast con buen sonido, vídeos bien montados), sino también para analizarlos con mirada crítica, respetar los derechos de autor y usar estas herramientas de forma honesta. En este tema aprenderás las dos cosas.</p>`,
  },
  secciones: [5, 4, 4],
  bloques: [
    {
      h: "La imagen digital: mapa de bits y vectorial",
      html: `<p>Los ordenadores guardan las imágenes de dos maneras muy distintas:</p>
      <ul><li><b>Imágenes de mapa de bits</b> (o rasterizadas): son una cuadrícula de pequeños puntos de color llamados <b>píxeles</b> (<i>picture elements</i>). Cada píxel guarda un color. Son ideales para fotografías y para imágenes con degradados y texturas complejas. Su problema es que tienen un número fijo de píxeles: al ampliarlas pierden nitidez y aparece el <b>pixelado</b>. Se crean con cámaras y escáneres y se editan con programas como GIMP, Photoshop o Krita.</li>
      <li><b>Imágenes vectoriales</b>: se describen mediante objetos geométricos (puntos, líneas, curvas de Bézier, polígonos) definidos con fórmulas matemáticas, con atributos como el color del relleno y del contorno. Se pueden <b>escalar sin pérdida de calidad</b>, porque el ordenador recalcula las formas a cada tamaño, y suelen ocupar poco. Son ideales para logotipos, iconos, tipografías, planos, mapas e ilustraciones de colores planos. Se crean con Inkscape, Illustrator o Figma.</li></ul>
      <p>Una imagen vectorial puede convertirse fácilmente en mapa de bits (<b>rasterizar</b>), por ejemplo al exportarla a PNG. El proceso inverso (<b>vectorizar</b>) es más difícil: el programa intenta detectar las formas y solo funciona bien con dibujos sencillos.</p>`,
      svg: bitsVector(),
      video: { id: "9i_0cLdJE-s", titulo: "Mapas de bits e imágenes vectoriales: conoce bien las diferencias", canal: "Hey Jaime", vistas: 67464 },
    },
    {
      h: "Resolución, profundidad de color y tamaño",
      html: `<p>La calidad y el tamaño de una imagen de mapa de bits dependen de dos características:</p>
      <ul><li><b>Resolución</b>: número de píxeles de la imagen, expresado como ancho × alto (4000 × 3000 píxeles = 12 megapíxeles). Para imprimir se habla también de <b>densidad</b>: píxeles por pulgada (ppp o ppi). Para una impresión de calidad se usan unos 300 ppp; para pantalla basta con que la imagen tenga los píxeles que se van a mostrar.</li>
      <li><b>Profundidad de color</b>: número de bits que se usan para el color de cada píxel. Con 1 bit hay 2 colores (blanco y negro); con 8 bits, 256 colores o niveles de gris; con <b>24 bits</b> (color verdadero, 8 bits por canal), 2²⁴ ≈ 16,7 millones de colores, más de los que el ojo distingue.</li></ul>
      <p>El tamaño de una imagen <b>sin comprimir</b> se calcula así:</p>
      <div class="formula"><span>tamaño (bytes) = ancho × alto × profundidad (bits) / 8</span></div>
      <p>Una foto de 4000 × 3000 píxeles a 24 bits ocupa 4000 · 3000 · 24 / 8 = 36 000 000 bytes, unos 36 MB. Por eso las imágenes se guardan casi siempre comprimidas.</p>
      <p>Para saber a qué tamaño se puede imprimir una foto con calidad, se divide su resolución entre la densidad: 4000 px / 300 ppp ≈ 13,3 pulgadas ≈ 34 cm de ancho. Y al revés: para publicar en una web no tiene sentido subir una foto de 4000 px de ancho si se va a mostrar a 800 px; conviene <b>redimensionarla</b> para que la página cargue rápido.</p>`,
      svg: B.barras("Colores según la profundidad de color", [["1 bit", 2], ["4 bits", 16], ["8 bits", 256], ["16 bits", 65536]], { t: "Número de colores (2ⁿ)" }),
    },
    {
      h: "Los modelos de color",
      html: `<p>Un <b>modelo de color</b> es una forma de describir los colores con números. Los más importantes son:</p>
      <ul><li><b>RGB</b> (rojo, verde, azul): es un modelo <b>aditivo</b>, propio de las pantallas, que emiten luz. Cada píxel de la pantalla tiene tres subpíxeles; sumando luz roja, verde y azul en distintas intensidades se obtienen todos los colores, y los tres al máximo dan el <b>blanco</b>. Cada canal va de 0 a 255 con 8 bits: (255, 0, 0) es rojo puro; (255, 255, 0), amarillo; (0, 0, 0), negro.</li>
      <li><b>Notación hexadecimal</b>: el mismo RGB escrito con dos cifras hexadecimales por canal, muy usada en diseño web: #FF0000 es rojo; #FFFFFF, blanco; #1E90FF, un azul.</li>
      <li><b>CMYK</b> (cian, magenta, amarillo y negro): es un modelo <b>sustractivo</b>, propio de la <b>imprenta</b>. Las tintas absorben parte de la luz blanca que ilumina el papel. Mezclar las tres primeras daría, en teoría, negro, pero en la práctica sale un marrón oscuro; por eso se añade la tinta negra (K, de <i>key</i>).</li>
      <li><b>HSL o HSB</b> (tono, saturación y luminosidad o brillo): describe el color de forma intuitiva para las personas.</li></ul>
      <p>No todos los colores RGB se pueden imprimir: la <b>gama</b> o conjunto de colores reproducibles en CMYK es menor. Por eso un diseño para imprenta debe prepararse en CMYK y revisarse, y uno para pantalla, en RGB.</p>`,
      svg: B.comparar("Modelos de color RGB y CMYK", ["RGB aditivo", ["luz: pantallas", "rojo, verde, azul", "todo = blanco", "#FF0000"]], ["CMYK sustractivo", ["tinta: imprenta", "cian, magenta, amarillo", "+ negro (K)", "gama menor"]]),
      video: { id: "Rd6HYvVgSXA", titulo: "Qué es RGB y CMYK y cuándo usarlos", canal: "Dostin Hurtado", vistas: 312209 },
    },
    {
      h: "Formatos de imagen y compresión",
      html: `<p>La <b>compresión</b> reduce el tamaño de un archivo. Hay dos tipos:</p>
      <ul><li><b>Sin pérdida</b>: se recupera exactamente la imagen original. Aprovecha las repeticiones (por ejemplo, «200 píxeles blancos seguidos» en lugar de repetir 200 veces el blanco). Reduce menos el tamaño.</li>
      <li><b>Con pérdida</b>: elimina información que el ojo apenas percibe (pequeñas variaciones de color). Reduce mucho el tamaño, pero cada vez que se guarda se pierde algo de calidad y, con compresiones altas, aparecen <b>artefactos</b> (bloques y halos).</li></ul>
      <p>Los formatos más usados son:</p>
      <ul><li><b>JPEG</b> (.jpg): con pérdida y nivel de compresión ajustable. Ideal para fotografías. No admite transparencia.</li>
      <li><b>PNG</b>: sin pérdida y con <b>transparencia</b> (canal alfa). Ideal para capturas de pantalla, gráficos, textos y logotipos en mapa de bits.</li>
      <li><b>GIF</b>: sin pérdida, pero limitado a 256 colores; admite transparencia simple y <b>animación</b>.</li>
      <li><b>WebP</b> y <b>AVIF</b>: formatos modernos para la web, con o sin pérdida, transparencia y animación, y archivos más pequeños.</li>
      <li><b>TIFF</b> y <b>RAW</b>: de alta calidad. RAW guarda los datos «en bruto» del sensor de la cámara para editarlos con el máximo margen.</li>
      <li><b>SVG</b>: formato vectorial abierto para la web. Formatos de proyecto: XCF (GIMP), PSD (Photoshop) o AI (Illustrator), que conservan las capas.</li></ul>
      <p>Una buena práctica es guardar el original y el proyecto con capas, y exportar a JPEG, PNG o WebP solo la versión final para publicar.</p>`,
      svg: B.rejilla("Comparación de formatos de imagen", ["Formato", "Compresión", "Uso"], [["JPEG", "con pérdida", "fotos"], ["PNG", "sin pérdida", "gráficos, alfa"], ["GIF", "256 colores", "animación"], ["WebP", "ambas", "web"], ["SVG", "vectorial", "logos, iconos"]], { t: "Formatos de imagen" }),
    },
    {
      h: "Fotografía digital",
      html: `<p>Una cámara digital (también la del móvil) capta la luz con un <b>sensor</b> formado por millones de fotodiodos, uno por píxel, cubiertos por filtros de color rojo, verde y azul. Un procesador convierte esas señales en una imagen y la comprime.</p>
      <p>La <b>exposición</b>, es decir, la cantidad de luz que llega al sensor, se controla con tres parámetros, el llamado <b>triángulo de exposición</b>:</p>
      <ul><li><b>Apertura del diafragma</b> (número f): una apertura grande (f/1,8) deja pasar mucha luz y desenfoca el fondo (poca <b>profundidad de campo</b>), ideal para retratos.</li>
      <li><b>Velocidad de obturación</b>: el tiempo que el sensor recibe luz. Una velocidad rápida (1/1000 s) congela el movimiento; una lenta (1 s) lo convierte en estelas y necesita trípode.</li>
      <li><b>Sensibilidad ISO</b>: amplifica la señal del sensor. Un ISO alto permite fotografiar con poca luz, pero añade <b>ruido</b> (granulado).</li></ul>
      <p>La <b>composición</b> organiza los elementos de la foto. Algunas pautas: la <b>regla de los tercios</b> (situar el motivo en las líneas que dividen la imagen en tres partes), las <b>líneas guía</b> que conducen la mirada, el encuadre, el punto de vista y el aprovechamiento de la luz natural (la «hora dorada», al amanecer y al atardecer).</p>
      <p>Las fotos guardan además <b>metadatos EXIF</b>: fecha, modelo de cámara, ajustes y, a menudo, la ubicación GPS. Antes de publicarlas conviene revisarlos para no revelar dónde vivimos.</p>`,
      svg: B.ciclo("Triángulo de exposición", "Luz", ["Apertura f", "Velocidad", "ISO"]),
    },
    {
      h: "Edición de imágenes de mapa de bits",
      html: `<p>Los <b>editores de mapas de bits</b>, como GIMP (libre), Photoshop o Photopea (en el navegador), permiten modificar fotografías y componer imágenes. Sus herramientas fundamentales son:</p>
      <ul><li><b>Capas</b>: láminas transparentes superpuestas en las que se colocan elementos por separado (fondo, persona, texto). Se pueden mover, ocultar, cambiar de orden, ajustar su <b>opacidad</b> y su <b>modo de fusión</b> sin afectar a las demás. Trabajar con capas permite editar de forma <b>no destructiva</b>.</li>
      <li><b>Selecciones</b>: delimitan la zona que se va a modificar. Pueden ser rectangulares, elípticas, a mano alzada, por color o con la «varita mágica», que selecciona píxeles parecidos. Las <b>máscaras de capa</b> ocultan partes de una capa sin borrarlas.</li>
      <li><b>Transformaciones</b>: recortar (para mejorar el encuadre), escalar, rotar, voltear, corregir la perspectiva.</li>
      <li><b>Ajustes de color</b>: brillo y contraste, <b>niveles</b> y <b>curvas</b> (que controlan las sombras, los tonos medios y las luces a partir del <b>histograma</b>), saturación, balance de color, conversión a blanco y negro.</li>
      <li><b>Retoque</b>: clonar, sanear o «parche» para eliminar manchas u objetos, enfocar o desenfocar.</li>
      <li><b>Filtros</b>: efectos automáticos (desenfoque, enfoque, artísticos, distorsiones).</li></ul>
      <p>El <b>histograma</b> es un gráfico que muestra cuántos píxeles hay de cada nivel de luminosidad, de negro a blanco. Si está desplazado a la izquierda, la imagen está subexpuesta (oscura); a la derecha, sobreexpuesta; si se amontona en los extremos, se han perdido detalles en sombras o luces.</p>`,
      svg: B.capas("Capas de una composición", [["Texto", "título"], ["Persona", "recortada"], ["Ajuste", "color"], ["Fondo", "paisaje"]], { t: "Trabajar con capas" }),
    },
    {
      h: "Retoque, imagen sintética y ética",
      html: `<p>Retocar una imagen puede ser legítimo y necesario: corregir la exposición, eliminar el polvo de un escaneo, recortar un encuadre torcido o crear un fotomontaje artístico que se presenta como tal. El problema aparece cuando la manipulación <b>engaña</b> sobre la realidad.</p>
      <ul><li>En <b>periodismo</b>, los códigos éticos solo permiten ajustes leves de tono y contraste; añadir o quitar elementos de una foto de prensa se considera falsificación.</li>
      <li>En <b>publicidad</b> y en <b>redes sociales</b>, los cuerpos y rostros retocados o con filtros transmiten modelos de belleza imposibles, que se relacionan con problemas de autoestima, sobre todo en adolescentes.</li>
      <li>La <b>inteligencia artificial generativa</b> crea imágenes, voces y vídeos a partir de una descripción en texto. Es una herramienta creativa potente, pero también permite fabricar <b>deepfakes</b>: suplantaciones realistas de personas. Crear o difundir imágenes íntimas falsas de alguien es un delito.</li></ul>
      <p>Para detectar una imagen manipulada o sintética se puede: hacer una <b>búsqueda inversa</b> de la imagen para encontrar su origen, revisar sus metadatos, fijarse en detalles incoherentes (manos, textos, reflejos, sombras), comprobar si la fuente es fiable y consultar servicios de verificación. Las plataformas y la normativa europea de IA empiezan a exigir que el contenido generado por IA se <b>etiquete</b> como tal.</p>`,
      svg: B.flujo("Verificar una imagen sospechosa", ["Búsqueda inversa de la imagen", "Revisar los metadatos", "Buscar incoherencias visuales", "Comprobar la fuente original", "Consultar verificadores"], { t: "¿Es real?" }),
    },
    {
      h: "Diseño vectorial y principios de diseño gráfico",
      html: `<p>Los <b>editores vectoriales</b>, como Inkscape (libre), Illustrator o Figma, trabajan con <b>objetos</b>: formas básicas (rectángulos, elipses, estrellas), trazados con <b>nodos</b> y <b>curvas de Bézier</b> (cuyos tiradores controlan la curvatura) y textos. Cada objeto tiene un <b>relleno</b> (color, degradado o patrón) y un <b>contorno</b> (color y grosor). Las herramientas clave son agrupar, alinear y distribuir, ordenar (traer al frente o enviar al fondo) y las <b>operaciones booleanas</b>: unión, diferencia, intersección y exclusión de formas, con las que se construyen logotipos complejos a partir de figuras simples.</p>
      <p>Un buen diseño (un cartel, una infografía, un logotipo) sigue algunos <b>principios</b>:</p>
      <ul><li><b>Jerarquía</b>: lo más importante destaca por tamaño, color o posición; la mirada debe saber por dónde empezar.</li>
      <li><b>Contraste</b>: entre texto y fondo para que se lea bien, y entre elementos para diferenciarlos.</li>
      <li><b>Alineación</b> y <b>retícula</b>: los elementos alineados transmiten orden.</li>
      <li><b>Proximidad</b>: los elementos relacionados se agrupan.</li>
      <li><b>Repetición</b>: los mismos colores y tipografías dan unidad.</li>
      <li><b>Espacio en blanco</b>: dejar aire evita la saturación.</li>
      <li><b>Color y tipografía</b>: una paleta reducida de colores armónicos y como máximo dos familias tipográficas.</li></ul>
      <p>Una <b>infografía</b> combina datos, iconos, gráficos y textos breves para explicar un tema de un vistazo.</p>`,
      svg: B.estrella("Principios de diseño gráfico", "Diseño", ["Jerarquía", "Contraste", "Alineación", "Proximidad", "Repetición", "Espacio"]),
    },
    {
      h: "La animación digital",
      html: `<p>La <b>animación</b> crea sensación de movimiento mostrando rápidamente una sucesión de imágenes fijas o <b>fotogramas</b> ligeramente distintos. El ojo y el cerebro los perciben como movimiento continuo a partir de unos 12 fotogramas por segundo; el cine usa 24 y los videojuegos, 60 o más.</p>
      <p>Técnicas de animación digital:</p>
      <ul><li><b>Fotograma a fotograma</b>: se dibuja cada imagen. Da mucho control, pero es laborioso. Es la base del <b>GIF animado</b>, que se crea en un editor de imágenes con una capa por fotograma y un tiempo de espera entre ellas.</li>
      <li><b>Animación por interpolación</b> (<i>tweening</i>): se definen solo los <b>fotogramas clave</b> (posición inicial y final, por ejemplo) y el programa calcula los intermedios. Se usa en animación 2D vectorial, en presentaciones y en la web con CSS.</li>
      <li><b>Stop motion</b>: se fotografían objetos reales moviéndolos un poco entre foto y foto (plastilina, juguetes, recortes).</li>
      <li><b>Animación 3D</b>: se modelan objetos en tres dimensiones (Blender, libre), se les asignan materiales, luces y un esqueleto, y el ordenador <b>renderiza</b> cada fotograma calculando cómo se vería desde una cámara virtual.</li></ul>
      <p>Una animación de 10 segundos a 24 fps necesita 240 fotogramas: por eso la interpolación ahorra tanto trabajo.</p>`,
      svg: B.flujo("Animación por interpolación", ["Fotograma clave 1: posición inicial", "El programa calcula los intermedios", "Fotograma clave 2: posición final", "Ajustar aceleración", "Exportar a vídeo o GIF"], { t: "Interpolación" }),
    },
    {
      h: "El sonido digital",
      html: `<p>El sonido es una onda de presión que se propaga por el aire. Un <b>micrófono</b> la convierte en una señal eléctrica analógica y un <b>conversor analógico-digital</b> la transforma en números mediante dos procesos:</p>
      <ul><li><b>Muestreo</b>: se mide la señal a intervalos regulares. La <b>frecuencia de muestreo</b> es el número de muestras por segundo, en hercios. Según el <b>teorema de Nyquist</b>, para reproducir un sonido hay que muestrear al menos al doble de su frecuencia más alta. Como el oído humano percibe hasta unos 20 000 Hz, el CD usa <b>44 100 Hz</b>; el vídeo, 48 000 Hz; la telefonía, solo 8000 Hz, por eso la voz suena «enlatada».</li>
      <li><b>Cuantificación</b>: cada muestra se redondea a uno de los niveles posibles según la <b>resolución</b> o profundidad de bits. Con 16 bits hay 65 536 niveles; con 24 bits, más de 16 millones. Más bits significa menos ruido y más rango dinámico.</li></ul>
      <p>El tamaño de un audio <b>sin comprimir</b> (PCM) es:</p>
      <div class="formula"><span>tamaño (bits) = frecuencia × resolución × canales × duración (s)</span></div>
      <p>Un minuto de calidad CD (44 100 Hz, 16 bits, estéreo) ocupa 44 100 · 16 · 2 · 60 = 84 672 000 bits ≈ 10,6 MB. Su <b>tasa de bits</b> es 1411 kb/s.</p>
      <p>Para grabar bien la voz conviene usar un micrófono cercano, un espacio con poca reverberación (cortinas, sofás), evitar ruidos de fondo y vigilar el nivel para que no llegue al máximo y se produzca <b>saturación</b> o recorte, que distorsiona el sonido sin remedio.</p>`,
      svg: muestreo(),
      video: { id: "rundDEGXPFE", titulo: "Frecuencia de muestreo y profundidad de bits (explicación simple)", canal: "Hoy Grabo", vistas: 254745 },
    },
    {
      h: "Formatos y edición de audio",
      html: `<p>Como en las imágenes, los formatos de audio pueden ser:</p>
      <ul><li><b>Sin comprimir</b>: <b>WAV</b> y AIFF. Máxima calidad, gran tamaño. Se usan para grabar y editar.</li>
      <li><b>Compresión sin pérdida</b>: <b>FLAC</b> (libre) y ALAC. Reducen el tamaño a la mitad aproximadamente sin perder nada; útiles para archivar música.</li>
      <li><b>Compresión con pérdida</b>: <b>MP3</b>, <b>AAC</b> y <b>Opus</b> (libre, muy eficiente, usado en videollamadas). Usan un <b>modelo psicoacústico</b> que elimina lo que el oído no percibe: frecuencias muy altas o sonidos tapados por otros más fuertes (enmascaramiento). Un MP3 a 128 kb/s ocupa unas 11 veces menos que el WAV original y, para la mayoría de oyentes, suena casi igual; a 320 kb/s, prácticamente idéntico.</li></ul>
      <p>Los <b>editores de audio</b>, como Audacity (libre), permiten trabajar con la forma de onda en varias <b>pistas</b>: cortar, copiar y pegar fragmentos, ajustar el volumen, hacer <b>fundidos</b> de entrada y salida, eliminar ruido de fondo, normalizar el nivel, ecualizar (modificar graves, medios y agudos) y añadir efectos como el eco o la compresión dinámica. La <b>mezcla</b> combina voz, música y efectos con el volumen adecuado de cada pista.</p>
      <p>Un <b>pódcast</b> es un programa de audio distribuido por internet. Para crearlo: guion, grabación con buen sonido, edición, música con licencia libre o permiso, exportación (MP3 o AAC a 96-128 kb/s para voz), una portada y la publicación en una plataforma.</p>`,
      svg: B.barras("Tamaño aproximado de un minuto de música estéreo", [["WAV", 10.6], ["FLAC", 5.5], ["MP3 320", 2.4], ["MP3 128", 1]], { t: "MB por minuto", unidad: "" }),
    },
    {
      h: "El vídeo digital",
      html: `<p>Un vídeo digital es una sucesión de imágenes (fotogramas) acompañada de una o varias pistas de audio. Sus características principales son:</p>
      <ul><li><b>Resolución</b>: HD (1280 × 720), Full HD (1920 × 1080), 4K UHD (3840 × 2160).</li>
      <li><b>Fotogramas por segundo</b> (fps): 24 (aspecto cinematográfico), 25 o 30 (televisión e internet), 50-60 (deportes y videojuegos, movimiento más fluido) o 120 y más para cámara lenta.</li>
      <li><b>Relación de aspecto</b>: 16:9 (horizontal, la habitual), 9:16 (vertical, redes sociales móviles), 4:3 o 1:1.</li>
      <li><b>Tasa de bits</b> (bitrate): cantidad de datos por segundo. Determina la calidad y el tamaño del archivo.</li></ul>
      <p>Sin compresión, un vídeo sería inmanejable: un segundo de Full HD a 24 bits y 30 fps ocupa 1920 · 1080 · 3 · 30 ≈ 187 MB. Los <b>códecs</b> (codificador-decodificador) lo comprimen aprovechando que los fotogramas consecutivos se parecen mucho: guardan algunos fotogramas completos y, en los demás, solo lo que cambia y el movimiento de los bloques. Los códecs más usados son <b>H.264</b> (AVC), <b>H.265</b> (HEVC), <b>VP9</b> y <b>AV1</b> (libre y muy eficiente). Un vídeo Full HD en H.264 para internet ocupa de 5 a 10 Mb/s, unas 200 veces menos.</p>
      <p>Hay que distinguir el códec del <b>contenedor</b>: el archivo .mp4, .mkv, .webm o .mov es una «caja» que guarda las pistas de vídeo y audio comprimidas con un códec, los subtítulos y los metadatos. Un MP4 con H.264 y AAC es el formato más compatible para compartir.</p>`,
      svg: B.rejilla("Resoluciones de vídeo habituales", ["Nombre", "Píxeles", "Megapíxeles"], [["HD", "1280 × 720", "0,9"], ["Full HD", "1920 × 1080", "2,1"], ["QHD", "2560 × 1440", "3,7"], ["4K UHD", "3840 × 2160", "8,3"]], { t: "Resoluciones" }),
    },
    {
      h: "Edición y publicación de vídeo",
      html: `<p>La creación de un vídeo sigue tres fases:</p>
      <ul><li><b>Preproducción</b>: idea, guion, <b>guion gráfico</b> (<i>storyboard</i>, viñetas con cada plano), localizaciones, material y permisos.</li>
      <li><b>Producción</b>: grabación. Conviene estabilizar la cámara, cuidar la luz (mejor de frente o lateral, nunca un contraluz sin querer), grabar el sonido cerca de quien habla y variar los <b>planos</b> (general, medio, primer plano, detalle) y los ángulos.</li>
      <li><b>Posproducción</b>: montaje en un <b>editor de vídeo no lineal</b>, como Shotcut, Kdenlive (libres), DaVinci Resolve o editores de móvil.</li></ul>
      <p>En el editor, los clips se colocan en una <b>línea de tiempo</b> con pistas de vídeo y de audio. Se cortan y ordenan, se añaden <b>transiciones</b> (el corte directo es la más usada; los fundidos indican paso del tiempo), títulos y rótulos, música y efectos, y se hace la <b>corrección de color</b>. Finalmente se <b>exporta</b> o renderiza con el formato, la resolución y la tasa de bits adecuados al destino.</p>
      <p>Antes de publicar hay que revisar:</p>
      <ul><li><b>Derechos de autor</b>: usar solo música, imágenes y clips propios, con licencias libres (Creative Commons, dominio público) o con permiso, citando la autoría.</li>
      <li><b>Derecho a la propia imagen</b>: pedir permiso a las personas que aparecen, y el de sus familias si son menores.</li>
      <li><b>Accesibilidad</b>: añadir <b>subtítulos</b>, que además se ven sin sonido, y descripciones si la información es solo visual.</li>
      <li><b>Privacidad</b>: no mostrar datos personales, matrículas o el exterior de la casa.</li></ul>`,
      svg: B.flujo("Fases de creación de un vídeo", ["Idea y guion", "Storyboard", "Grabación", "Montaje en la línea de tiempo", "Exportar, subtitular y publicar"], { t: "Producción de vídeo" }),
    },
  ],
  figura: {
    titulo: "Ideas clave de la imagen y el multimedia",
    items: [["Imagen", "bits o vector", "resolución", "y profundidad"], ["Color", "RGB · CMYK", "pantalla", "o imprenta"], ["Sonido", "44,1 kHz · 16 b", "muestreo", "y cuantificación"], ["Vídeo", "fps · códec", "contenedor", "MP4 · H.264"]],
  },
  video: { id: "_L_MMU22bAw", titulo: "GIMP en menos de 10 minutos: guía para principiantes", canal: "Davies Media Design", vistas: 1182244 },
  quiz: [
    ["Las fotografías digitales son imágenes…", ["vectoriales", "de mapa de bits", "en 3D", "de texto"], 1, "Una cuadrícula de píxeles."],
    ["Una imagen que se amplía sin perder calidad es…", ["JPEG", "PNG", "vectorial", "RAW"], 2, "Se describe con fórmulas."],
    ["Una foto de 3000 × 2000 píxeles tiene…", ["5 megapíxeles", "6 megapíxeles", "3 megapíxeles", "60 megapíxeles"], 1, "3000 · 2000 = 6 000 000."],
    ["Con 24 bits de profundidad de color hay unos…", ["256 colores", "65 536 colores", "16,7 millones de colores", "24 colores"], 2, "2²⁴ = 16 777 216."],
    ["El modelo de color de las pantallas es…", ["CMYK", "RGB", "HSL", "Pantone"], 1, "Aditivo: suma luz."],
    ["En RGB, (255, 255, 255) es…", ["negro", "blanco", "rojo", "gris"], 1, "Los tres canales al máximo."],
    ["El color #00FF00 es…", ["rojo", "verde", "azul", "amarillo"], 1, "Canal verde al máximo."],
    ["La K de CMYK corresponde a…", ["el blanco", "el negro", "el rosa", "el gris"], 1, "Tinta negra (key)."],
    ["Para un logotipo con fondo transparente en la web se usa…", ["JPEG", "PNG o SVG", "BMP", "WAV"], 1, "Admiten transparencia."],
    ["JPEG es un formato con compresión…", ["sin pérdida", "con pérdida", "vectorial", "sin compresión"], 1, "Elimina detalles poco perceptibles."],
    ["Para congelar el movimiento de un deportista se usa…", ["una velocidad de obturación rápida", "un ISO bajo", "una velocidad lenta", "el flash apagado"], 0, "Por ejemplo, 1/1000 s."],
    ["Un ISO muy alto produce…", ["más nitidez", "ruido o grano", "colores más vivos", "menos luz"], 1, "Amplifica también el ruido."],
    ["Las capas permiten…", ["comprimir la imagen", "editar elementos por separado sin afectar al resto", "cambiar el formato", "imprimir"], 1, "Edición no destructiva."],
    ["Un histograma desplazado a la izquierda indica una imagen…", ["sobreexpuesta", "subexpuesta (oscura)", "vectorial", "en blanco y negro"], 1, "Predominan los tonos oscuros."],
    ["En la animación por interpolación, el animador define…", ["todos los fotogramas", "solo los fotogramas clave", "solo el sonido", "el códec"], 1, "El programa calcula los intermedios."],
    ["La frecuencia de muestreo de un CD es…", ["8000 Hz", "22 050 Hz", "44 100 Hz", "96 000 Hz"], 2, "Más del doble de 20 kHz (Nyquist)."],
    ["¿Qué formato de audio comprime sin pérdida?", ["MP3", "AAC", "FLAC", "Opus"], 2, "Reduce a la mitad sin perder datos."],
    ["El MP3 reduce el tamaño gracias a…", ["un modelo psicoacústico", "más bits", "subir la frecuencia", "un contenedor"], 0, "Elimina lo que el oído no percibe."],
    ["H.264 y AV1 son…", ["contenedores", "códecs de vídeo", "resoluciones", "editores"], 1, "Comprimen y descomprimen el vídeo."],
    ["Antes de publicar un vídeo con música de un artista famoso debes…", ["nada, si es corto", "tener permiso o usar música con licencia libre", "bajar el volumen", "ponerle un filtro"], 1, "Los derechos de autor protegen la obra."],
  ],
  examen: [
    ["¿Cuánto ocupa sin comprimir una imagen de 1024 × 768 píxeles en escala de grises de 8 bits?", ["768 kB", "2,25 MB", "6 MB", "96 kB"], 0, "1024 · 768 · 1 byte = 786 432 bytes = 768 KiB."],
    ["¿A qué tamaño máximo en cm puede imprimirse a 300 ppp una foto de 2400 px de ancho? (1 pulgada = 2,54 cm)", ["8 cm", "20,3 cm", "24 cm", "30 cm"], 1, "2400 / 300 = 8 pulgadas · 2,54 = 20,3 cm."],
    ["El color RGB (255, 128, 0) en hexadecimal es…", ["#FF8000", "#FF0080", "#80FF00", "#FFFF00"], 0, "255 = FF; 128 = 80; 0 = 00."],
    ["Un cartel diseñado en RGB con colores muy saturados se imprime apagado. La causa es…", ["la resolución", "la gama CMYK es menor que la RGB", "el formato PNG", "el tamaño"], 1, "Algunos colores RGB no son imprimibles."],
    ["¿Cuánto ocupa 1 minuto de audio mono a 48 000 Hz y 24 bits sin comprimir?", ["8,64 MB", "17,28 MB", "2,88 MB", "5,76 MB"], 0, "48 000 · 24 · 60 / 8 = 8 640 000 bytes."],
    ["Un sonido de 12 000 Hz, ¿a qué frecuencia mínima debe muestrearse?", ["6000 Hz", "12 000 Hz", "24 000 Hz", "44 100 Hz"], 2, "Nyquist: al menos el doble."],
    ["Un vídeo de 10 minutos a 8 Mb/s ocupa aproximadamente…", ["80 MB", "600 MB", "4,8 GB", "800 MB"], 1, "8 · 600 = 4800 Mb = 600 MB."],
    ["Una animación de 15 s a 24 fps necesita…", ["39 fotogramas", "360 fotogramas", "150 fotogramas", "24 fotogramas"], 1, "15 · 24 = 360."],
  ],
  feynman: ["Qué diferencia hay entre una imagen de mapa de bits y una vectorial", "Cómo se calcula el tamaño de una imagen sin comprimir", "Por qué las pantallas usan RGB y la imprenta CMYK", "Qué formato de imagen elegirías para una foto, un logotipo y una animación", "Qué son el muestreo y la cuantificación del sonido", "Qué diferencia hay entre un códec y un contenedor de vídeo"],
  mapa: ["IMAGEN Y MULTIMEDIA", [["Imagen", "bits/vector · resolución · color"], ["Formatos", "JPEG · PNG · SVG · compresión"], ["Edición", "capas · ajustes · diseño · animación"], ["Audio y vídeo", "muestreo · MP3 · fps · códec"]]],
  tarjetas: [
    ["Mapa de bits", "Cuadrícula de píxeles; ideal para fotos; se pixela al ampliar."],
    ["Vectorial", "Formas con fórmulas; escalable sin pérdida; logos e iconos."],
    ["Tamaño de imagen", "ancho × alto × bits / 8 (bytes, sin comprimir)."],
    ["Profundidad de color", "n bits → 2ⁿ colores; 24 bits ≈ 16,7 millones."],
    ["RGB y CMYK", "RGB aditivo (pantallas); CMYK sustractivo (imprenta)."],
    ["Compresión", "Sin pérdida (PNG, FLAC) o con pérdida (JPEG, MP3)."],
    ["Triángulo de exposición", "Apertura, velocidad de obturación e ISO."],
    ["Capas", "Elementos en láminas separadas: edición no destructiva."],
    ["Principios de diseño", "Jerarquía, contraste, alineación, proximidad, repetición y espacio."],
    ["Audio digital", "Muestreo (Hz) y cuantificación (bits); CD: 44 100 Hz, 16 bits."],
    ["Vídeo digital", "Resolución, fps, relación de aspecto y bitrate."],
    ["Códec y contenedor", "H.264, AV1 comprimen; MP4, MKV guardan las pistas."],
  ],
  ejemplos: [
    ["Calcula el tamaño sin comprimir de una foto de 6000 × 4000 píxeles a 24 bits. Si en JPEG ocupa 8 MB, ¿cuál es la relación de compresión?", ["Píxeles: 6000 · 4000 = 24 000 000.", "Bytes: 24 000 000 · 3 = 72 000 000 ≈ 72 MB.", "Relación: 72 / 8 = 9."], "72 MB sin comprimir; compresión 9:1."],
    ["Quieres imprimir un póster de 50 × 70 cm a 150 ppp. ¿Qué resolución mínima necesita la imagen?", ["Pasar a pulgadas: 50 / 2,54 = 19,7″ y 70 / 2,54 = 27,6″.", "Multiplicar por 150 ppp: 19,7 · 150 ≈ 2953 px y 27,6 · 150 ≈ 4134 px.", "Para un póster que se ve de lejos basta con 150 ppp."], "Unos 2950 × 4130 píxeles (≈ 12 megapíxeles)."],
    ["Convierte el color #3A7BD5 a RGB decimal.", ["3A = 3 · 16 + 10 = 58.", "7B = 7 · 16 + 11 = 123.", "D5 = 13 · 16 + 5 = 213."], "RGB(58, 123, 213), un azul medio."],
    ["Elige formato para: a) foto de vacaciones para la web; b) captura de pantalla con texto; c) logotipo para camisetas y web; d) icono animado.", ["a) Foto con muchos colores: JPEG o WebP con pérdida.", "b) Texto nítido y colores planos: PNG sin pérdida.", "c) Debe escalar a cualquier tamaño: SVG (vectorial).", "d) Animación sencilla: GIF o WebP animado."], "JPEG/WebP, PNG, SVG y GIF/WebP."],
    ["Calcula el tamaño de un pódcast de 30 minutos en WAV (44,1 kHz, 16 bits, mono) y en MP3 a 96 kb/s.", ["WAV: 44 100 · 16 · 1 · 1800 = 1 270 080 000 bits ≈ 158,8 MB.", "MP3: 96 000 · 1800 = 172 800 000 bits = 21,6 MB.", "Relación: 158,8 / 21,6 ≈ 7,4."], "≈ 159 MB en WAV y ≈ 22 MB en MP3."],
    ["Calcula cuánto ocupa un vídeo de 3 minutos en Full HD con una tasa de vídeo de 8 Mb/s y audio a 128 kb/s.", ["Tasa total: 8000 + 128 = 8128 kb/s.", "Duración: 180 s → 8128 · 180 = 1 463 040 kb.", "En bytes: 1 463 040 / 8 = 182 880 kB ≈ 183 MB."], "Unos 183 MB."],
  ],
  errores: [
    "Ampliar una imagen de mapa de bits pequeña esperando que gane detalle: solo se pixela.",
    "Usar JPEG para logotipos o capturas con texto: aparecen halos y no hay transparencia.",
    "Guardar varias veces un JPEG mientras se edita: cada guardado pierde calidad.",
    "Diseñar en RGB un trabajo para imprenta sin revisar los colores en CMYK.",
    "Grabar la voz con el nivel al máximo y provocar saturación irreparable.",
    "Usar música o imágenes de internet sin comprobar su licencia ni citar la autoría.",
  ],
  ejercicios: {
    b: [
      ["Diferencia imagen de mapa de bits y vectorial y pon dos ejemplos de uso de cada una.", "Mapa de bits: cuadrícula de píxeles; fotografías y escaneos. Vectorial: formas con fórmulas, escalable; logotipos y planos."],
      ["¿Cuántos megapíxeles tiene una imagen de 4032 × 3024 píxeles?", "4032 · 3024 = 12 192 768 ≈ 12,2 megapíxeles."],
      ["¿Cuántos colores se pueden representar con 1, 8 y 24 bits?", "2, 256 y 16 777 216."],
      ["¿Qué modelo de color usarías para un vídeo de YouTube y para un folleto impreso?", "RGB para el vídeo (pantalla) y CMYK para el folleto (imprenta)."],
      ["Escribe en hexadecimal el negro, el blanco, el rojo y el azul puros.", "#000000, #FFFFFF, #FF0000 y #0000FF."],
      ["Indica si la compresión es con pérdida o sin pérdida: JPEG, PNG, MP3, FLAC, GIF.", "Con pérdida: JPEG y MP3. Sin pérdida: PNG, FLAC y GIF."],
      ["Nombra los tres parámetros del triángulo de exposición y qué controla cada uno además de la luz.", "Apertura (profundidad de campo), velocidad de obturación (movimiento congelado o movido) e ISO (ruido)."],
      ["¿Qué ventajas tiene trabajar con capas?", "Se edita cada elemento por separado, se pueden mover, ocultar o cambiar sin afectar al resto y se puede volver atrás: edición no destructiva."],
      ["Cita cuatro principios de diseño gráfico.", "Jerarquía, contraste, alineación y proximidad (también repetición y espacio en blanco)."],
      ["¿Cuántos fotogramas tiene un vídeo de 2 minutos a 30 fps?", "120 · 30 = 3600 fotogramas."],
      ["¿Qué significan las cifras 44 100 Hz y 16 bits en el audio de un CD?", "Se toman 44 100 muestras por segundo y cada una se guarda con 16 bits (65 536 niveles)."],
      ["Diferencia códec y contenedor con un ejemplo.", "El códec comprime los datos (H.264); el contenedor es el archivo que guarda las pistas comprimidas (MP4)."],
    ],
    m: [
      ["Calcula el tamaño sin comprimir de una imagen de 1920 × 1080 a 24 bits y de la misma en escala de grises de 8 bits.", "Color: 1920 · 1080 · 3 = 6 220 800 bytes ≈ 6,2 MB. Grises: 2 073 600 bytes ≈ 2,1 MB."],
      ["Una cámara de 24 megapíxeles con proporción 3:2, ¿qué resolución aproximada tiene?", "Ancho · alto = 24 · 10⁶ y ancho = 1,5 · alto → alto² = 16 · 10⁶ → alto = 4000; ancho = 6000 px."],
      ["Convierte RGB(200, 50, 120) a hexadecimal.", "200 = C8; 50 = 32; 120 = 78 → #C83278."],
      ["Explica por qué mezclar las tintas cian, magenta y amarillo no da un negro perfecto y qué solución se usa.", "Las tintas reales no son puras y absorben la luz de forma imperfecta, por lo que la mezcla da un marrón oscuro y gasta mucha tinta. Se añade una tinta negra (K) para negros profundos, textos nítidos y ahorro."],
      ["Una foto de 4000 × 3000 px se va a publicar en un blog a 1200 px de ancho. ¿Qué harías y por qué?", "Redimensionarla a 1200 × 900 px y exportarla en JPEG o WebP con calidad del 75-85 %. Así ocupa una pequeña parte y la página carga rápido sin pérdida visible."],
      ["Quieres fotografiar un retrato con el fondo muy desenfocado en un día nublado. ¿Qué ajustes eliges?", "Apertura grande (f/1,8-f/2,8) para poca profundidad de campo; velocidad suficiente para evitar trepidación (1/125 s); subir el ISO lo necesario (400-800) aceptando algo de ruido."],
      ["Interpreta un histograma con casi todos los valores apilados en el extremo derecho.", "La imagen está sobreexpuesta: predominan los tonos claros y probablemente se han «quemado» las luces (zonas blancas sin detalle). Habría que reducir la exposición al tomarla o, en edición, bajar las luces con curvas."],
      ["Describe cómo crearías un GIF animado de un logotipo que parpadea en un editor de imágenes.", "Crear varias capas, una por fotograma (logotipo encendido, apagado o con distinta opacidad), ordenarlas, indicar el tiempo de cada una (por ejemplo, 300 ms), previsualizar la animación y exportar como GIF animado en bucle."],
      ["Calcula el tamaño de 4 minutos de audio estéreo a 48 kHz y 24 bits sin comprimir y en AAC a 256 kb/s.", "Sin comprimir: 48 000 · 24 · 2 · 240 = 552 960 000 bits = 69,12 MB. AAC: 256 000 · 240 = 61 440 000 bits = 7,68 MB."],
      ["Explica qué es el enmascaramiento y cómo lo aprovecha el MP3.", "Un sonido fuerte impide oír otros más débiles de frecuencia cercana o que suenan justo después. El MP3 elimina esos sonidos inaudibles y dedica menos bits a lo que el oído percibe peor, reduciendo mucho el tamaño."],
      ["¿Por qué un códec de vídeo comprime mucho más que uno de imagen aplicado a cada fotograma?", "Porque aprovecha la redundancia temporal: los fotogramas consecutivos son casi iguales, así que guarda pocos fotogramas completos y, en el resto, solo las diferencias y los vectores de movimiento de los bloques."],
      ["Propón los planos de un vídeo de 30 s que explique cómo reciclar una pila.", "Plano general del alumno en el aula; plano medio presentando el problema; primer plano de la pila; plano detalle del símbolo de reciclaje; plano medio caminando al punto de recogida; plano detalle introduciendo la pila; cierre con rótulo y mensaje."],
      ["Indica qué comprobarías antes de subir a redes un vídeo grabado en el patio del instituto.", "Permiso de las personas que aparecen (y de sus familias si son menores) y del centro, que no se vean datos personales ni lugares identificables innecesarios, licencias de la música, subtítulos y que el contenido sea respetuoso."],
      ["Explica tres señales que pueden indicar que una imagen ha sido generada con IA.", "Manos con dedos de más o deformes; textos ilegibles o sin sentido en carteles; reflejos, sombras o perspectivas incoherentes; piel o fondos excesivamente perfectos. Se confirma con búsqueda inversa y fuentes fiables."],
    ],
    a: [
      ["Una imagen PNG de 800 × 600 píxeles usa una paleta indexada de 256 colores. ¿Cuánto ocuparía sin comprimir y cuánto ahorra frente a 24 bits?", "Indexada: 800 · 600 · 1 byte = 480 000 bytes + paleta (256 · 3 = 768 bytes) ≈ 469 KiB. A 24 bits: 1 440 000 bytes. Ahorra unos dos tercios."],
      ["Un sensor de cámara de 24 MP graba RAW a 14 bits por píxel (un solo canal por fotodiodo). ¿Cuánto ocupa cada foto sin comprimir? ¿Cuántas caben en una tarjeta de 128 GB?", "24 · 10⁶ · 14 / 8 = 42 · 10⁶ bytes = 42 MB. 128 000 / 42 ≈ 3047 fotos."],
      ["Calcula el bitrate sin comprimir de un vídeo 4K a 60 fps y 24 bits, y la relación de compresión si se codifica a 40 Mb/s.", "3840 · 2160 · 24 · 60 = 11 943 936 000 b/s ≈ 11,9 Gb/s. Relación: 11 944 / 40 ≈ 299 : 1."],
      ["Explica el teorema de Nyquist y qué ocurre si se muestrea por debajo del doble de la frecuencia máxima.", "Para reconstruir una señal hay que muestrearla al menos al doble de su frecuencia más alta. Si no, se produce aliasing: las frecuencias altas se confunden con otras más bajas que no existían, generando distorsión. Por eso se filtra la señal antes de muestrear."],
      ["Diseña la identidad visual de una asociación juvenil: logotipo, paleta y tipografías, y justifica los formatos de entrega.", "Logotipo vectorial sencillo construido con operaciones booleanas; paleta de 3 colores con sus valores RGB/HEX (pantalla) y CMYK (imprenta) y buen contraste; una tipografía para títulos y otra legible para textos. Entrega: SVG y PDF vectorial para imprenta y escalado, PNG transparente para redes y documentos."],
      ["Analiza éticamente el uso de filtros de belleza en las redes sociales y propón una norma para la cuenta del instituto.", "Los filtros alteran rasgos y piel creando un ideal irreal que favorece comparaciones y problemas de autoestima. Norma: no usar filtros que alteren el cuerpo o el rostro, señalar cuando una imagen está editada o generada con IA, pedir siempre consentimiento y priorizar la diversidad real."],
      ["Calcula cuánto espacio necesita una clase de 25 alumnos que graba cada uno un vídeo de 5 minutos en 4K a 50 Mb/s, y propone cómo reducirlo.", "Por vídeo: 50 · 300 = 15 000 Mb = 1875 MB. Total: 25 · 1,875 GB ≈ 46,9 GB. Reducirlo: grabar en Full HD a 10-15 Mb/s (unos 9-14 GB en total) o exportar la versión final en H.265/AV1 y borrar las tomas descartadas."],
      ["Planifica la producción de un pódcast escolar de 15 minutos con dos invitados, detallando material, fases y formatos.", "Material: dos micrófonos cercanos o de solapa, grabadora o ordenador con interfaz, auriculares, sala con poca reverberación. Fases: guion y preguntas, permisos, grabación en WAV 48 kHz/24 bits por pistas, edición en Audacity (limpieza, nivelado, música libre de derechos), exportación MP3 o AAC a 128 kb/s, portada, transcripción y publicación."],
      ["Compara la animación fotograma a fotograma, por interpolación y 3D para un cortometraje de 1 minuto en clase.", "Fotograma a fotograma: 1440 dibujos a 24 fps, máximo control, mucho trabajo. Interpolación 2D vectorial: solo fotogramas clave, mucho más rápida, estilo más sencillo. 3D: modelado y render, requiere aprendizaje y potencia de cálculo pero permite cámaras libres. Para una clase, la interpolación 2D o el stop motion son los más viables."],
      ["Explica cómo comprobarías si una foto viral de una inundación es actual y del lugar que se dice.", "Búsqueda inversa de la imagen (si aparece años antes, es antigua); revisar metadatos EXIF si los conserva; comparar edificios, carteles e idioma con imágenes del lugar en mapas; buscar si medios fiables o servicios de emergencia la publican; consultar verificadores."],
    ],
  },
  glosario: [
    ["Píxel", "Unidad mínima de color de una imagen de mapa de bits."],
    ["Mapa de bits", "Imagen formada por una cuadrícula de píxeles."],
    ["Imagen vectorial", "Imagen formada por objetos descritos con fórmulas."],
    ["Resolución", "Número de píxeles de una imagen (ancho × alto)."],
    ["Profundidad de color", "Bits usados para el color de cada píxel."],
    ["RGB", "Modelo de color aditivo de las pantallas."],
    ["CMYK", "Modelo de color sustractivo de la imprenta."],
    ["Compresión con pérdida", "Reducción de tamaño que elimina información poco perceptible."],
    ["Capa", "Lámina independiente de una imagen editable."],
    ["Histograma", "Gráfico de la distribución de luminosidad de una imagen."],
    ["Curva de Bézier", "Curva definida por nodos y tiradores en el dibujo vectorial."],
    ["Fotograma", "Cada una de las imágenes fijas de una animación o vídeo."],
    ["Interpolación", "Cálculo automático de los fotogramas entre dos fotogramas clave."],
    ["Frecuencia de muestreo", "Número de muestras de sonido por segundo."],
    ["Tasa de bits", "Cantidad de datos por segundo de un audio o vídeo."],
    ["Códec", "Algoritmo que comprime y descomprime audio o vídeo."],
    ["Contenedor", "Formato de archivo que agrupa pistas de vídeo, audio y subtítulos."],
    ["Deepfake", "Contenido falso realista creado con IA que suplanta a una persona."],
  ],
  situacion: {
    titulo: "Campaña multimedia por la salud digital",
    reto: "Por equipos, cread una campaña sobre el uso saludable de las pantallas para el alumnado de 1º de ESO: un cartel, un pódcast corto y un vídeo de un minuto.",
    pasos: [
      "Definid el mensaje, el público y una identidad visual común (paleta, tipografías y logotipo vectorial).",
      "Diseñad el cartel en vectorial aplicando los principios de diseño y exportadlo para imprimir y para pantalla.",
      "Haced fotografías propias, editadlas con capas y ajustes y documentad los retoques.",
      "Grabad y editad un pódcast de 3 minutos con música de licencia libre.",
      "Escribid el guion gráfico, grabad y montad el vídeo con subtítulos.",
      "Publicad la campaña en el espacio del centro con los créditos y licencias.",
    ],
    producto: "Cartel (SVG/PDF y PNG), pódcast (MP3), vídeo (MP4 subtitulado) y memoria técnica con formatos, tamaños y licencias.",
    evaluacion: [
      "Se eligen correctamente los formatos, resoluciones, modelos de color y compresiones.",
      "El diseño aplica jerarquía, contraste, alineación y coherencia visual.",
      "El audio y el vídeo tienen buena calidad técnica y un montaje claro.",
      "Se respetan los derechos de autor, la propia imagen y la accesibilidad.",
    ],
  },
  familias: [
    "Revisad juntos las fotos del móvil: qué metadatos guardan y si muestran la ubicación.",
    "Comentad alguna imagen viral y verificad si es real con una búsqueda inversa.",
    "Pedidle que os enseñe a editar una foto familiar con capas y ajustes sin perder el original.",
    "Escuchad o ved juntos un pódcast o un vídeo y fijaos en cómo están grabados y montados.",
  ],
  saberes: "Creación y edición de contenidos multimedia: imagen digital de mapa de bits y vectorial, resolución, profundidad y modelos de color, formatos y compresión, fotografía, edición con capas, diseño gráfico, animación, audio digital (muestreo, cuantificación, formatos y edición), vídeo digital (códecs, contenedores, montaje), derechos de autor, imagen sintética y ética (Tecnologías de la Información y la Comunicación I, optativa de 1º de Bachillerato de oferta autonómica en el marco del RD 243/2022).",
  ideas: [
    "Experimento de compresión: guardar la misma foto en JPEG con distintas calidades y comparar tamaño y artefactos.",
    "Taller de logotipos vectoriales con operaciones booleanas en Inkscape.",
    "Concurso de stop motion de 20 segundos con plastilina y el móvil.",
    "Grabar la misma voz con distintas frecuencias de muestreo y comparar el resultado.",
  ],
  fuentes: [
    { t: "Manual de GIMP en español", url: "https://docs.gimp.org/2.10/es/" },
    { t: "Inkscape: documentación y tutoriales", url: "https://inkscape.org/es/aprende/" },
    { t: "Creative Commons España: licencias", url: "https://creativecommons.org/licenses/?lang=es" },
  ],
});
