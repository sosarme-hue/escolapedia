// Diseño, 2º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-dis");

module.exports = B.tema({
  titulo: "Diseño gráfico: cartel, editorial, envase y señalética",
  minutos: 60,
  objetivos: [
    "Diseñar un cartel eficaz combinando imagen, texto y jerarquía",
    "Conocer las partes de una publicación y el uso de la retícula en el diseño editorial",
    "Analizar las funciones del envase y del embalaje y su impacto ambiental",
    "Diseñar pictogramas y sistemas de señalética claros y accesibles",
  ],
  claves: ["cartel", "diseño editorial", "maquetación", "envase", "packaging", "señalética", "pictograma", "artes finales"],
  pregunta: {
    texto: "¿Qué tienen en común un cartel de concierto, una revista, una caja de cereales y la señal de los aseos?",
    respuesta: "Todos son <mark>diseño gráfico</mark>: comunican con imagen y texto organizados para que alguien entienda algo rápido y actúe: ir, leer, comprar u orientarse.",
  },
  lectura: {
    titulo: "Los iconos de 1964",
    html: `<p>Para los Juegos Olímpicos de Tokio de 1964, los organizadores tenían un problema: miles de visitantes de todo el mundo que no leían japonés. El equipo dirigido por Masaru Katsumie diseñó una serie de pictogramas sencillos, figuras geométricas que representaban cada deporte y cada servicio, desde la natación hasta los aseos.</p>
    <p>Fue la primera vez que unos Juegos usaron un sistema completo de pictogramas. Desde entonces, cada ciudad olímpica diseña los suyos y muchas de esas figuras han pasado a aeropuertos, hospitales y estaciones. Un buen pictograma habla todos los idiomas a la vez.</p>`,
  },
  secciones: [2, 2, 3],
  bloques: [
    {
      h: "El cartel",
      html: `<p>El <b>cartel</b> es una pieza gráfica pensada para verse de lejos y de paso: debe captar la atención en pocos segundos y transmitir un mensaje claro. Combina una <b>imagen</b> potente, un <b>titular</b> breve y los <b>datos</b> necesarios (qué, cuándo, dónde) con una jerarquía muy marcada.</p>
      <p>Su historia une arte y comunicación: los carteles de Toulouse-Lautrec y Mucha, los constructivistas rusos, los carteles de la Guerra Civil española o los de cine. Hoy el cartel vive también en pantallas y redes, donde se adapta a formatos verticales y cuadrados, y a veces se anima. Aun así, sus reglas básicas siguen siendo las mismas: impacto, síntesis y claridad.</p>`,
      svg: B.capas("Jerarquía de un cartel", [["Imagen", "atrae la mirada"], ["Titular", "qué es, en pocas palabras"], ["Datos", "cuándo y dónde"], ["Firma", "logos y web"]]),
    },
    {
      h: "Recursos del cartel",
      html: `<p>Para comunicar en tan poco tiempo, el cartelista usa <b>recursos retóricos visuales</b>: la <b>metáfora</b> (un objeto representa otro), la <b>hipérbole</b> (exagerar el tamaño), la <b>síntesis</b> (reducir al mínimo), la <b>fusión</b> de dos imágenes en una o el <b>contraste</b> entre elementos opuestos.</p>
      <p>La relación entre imagen y texto puede ser de <b>anclaje</b> (el texto fija el sentido de la imagen) o de <b>relevo</b> (cada uno aporta una parte del mensaje). Un buen cartel se entiende sin leerlo entero, pero recompensa a quien se detiene a mirarlo.</p>`,
      svg: B.cajas("Recursos visuales", [["Metáfora", "una cosa|por otra"], ["Hipérbole", "exagerar"], ["Síntesis", "lo mínimo|necesario"], ["Fusión", "dos imágenes|en una"]]),
    },
    {
      h: "El diseño editorial",
      html: `<p>El <b>diseño editorial</b> organiza publicaciones: libros, revistas, periódicos, catálogos, informes y sus versiones digitales. Su objetivo es que la lectura sea cómoda y que el contenido se entienda y se recorra con facilidad.</p>
      <p>Sus elementos son la <b>portada</b>, el <b>índice</b>, los <b>titulares</b>, la entradilla, el texto, los <b>pies de foto</b>, los destacados y los folios (números de página). La <b>maquetación</b> coloca todos estos elementos sobre una <b>retícula</b> que se repite en cada página y da unidad. Las páginas se diseñan por parejas (pliego o doble página), porque así las ve el lector.</p>`,
      svg: B.reticula("Retícula editorial de cuatro columnas con titular, imagen y texto", 4),
      video: { id: "WS-Cr3cqH8w", titulo: "Diseño de retículas para editorial: tipos, anatomía y composición", canal: "Mariela Hurtado", vistas: 44882 },
    },
    {
      h: "De la pantalla a la imprenta",
      html: `<p>Un diseño impreso se prepara como <b>arte final</b>: archivo en CMYK, imágenes a 300 ppp de resolución, tipografías incluidas y <b>sangrado</b> (unos 3 mm de imagen que sobrepasan el corte para que no queden bordes blancos). Se exporta normalmente en PDF.</p>
      <p>Antes de imprimir se revisa una <b>prueba</b> de color y se elige el <b>papel</b>: gramaje (grosor), acabado mate o brillo, reciclado o no. Los sistemas de impresión más comunes son el <b>offset</b>, para tiradas largas, y la <b>impresión digital</b>, para tiradas cortas. La serigrafía se usa en textiles y carteles artísticos. Hablar con la imprenta antes de empezar evita sorpresas de coste y de calidad.</p>`,
      svg: B.flujo("Preparar un arte final", ["Color en CMYK", "Imágenes a 300 ppp", "Sangrado de 3 mm", "PDF con fuentes incluidas", "Prueba de color"]),
    },
    {
      h: "El envase y el embalaje",
      html: `<p>El <b>envase</b> (<i>packaging</i>) contiene y protege el producto, pero también lo <b>comunica</b> y lo vende: en el lineal del supermercado compite con decenas de productos. El <b>embalaje</b> agrupa y protege envases para el transporte.</p>
      <p>El diseñador trabaja la <b>forma</b> y el material (cartón, vidrio, plástico, metal), el <b>troquel</b> (plantilla plana de corte y plegado), la gráfica y la información obligatoria: nombre, ingredientes, alérgenos, fecha, peso y reciclaje. Hoy se busca reducir material, usar monomateriales reciclables y evitar el sobreembalaje.</p>`,
      svg: B.cajas("Funciones del envase", [["Proteger", "conservar|el producto"], ["Informar", "datos|obligatorios"], ["Vender", "destacar|en el lineal"], ["Reciclar", "menos material|y separable"]]),
      video: { id: "MP1Qb3vhjXg", titulo: "Diseño de envases y empaques: 5 claves fundamentales", canal: "FOROALFA", vistas: 142568 },
    },
    {
      h: "Señalética y pictogramas",
      html: `<p>La <b>señalética</b> es el sistema de señales que ayuda a las personas a orientarse en un espacio: un hospital, un aeropuerto, un museo o un instituto. Se diseña tras estudiar los recorridos y los puntos de decisión, donde el usuario duda.</p>
      <p>Usa <b>pictogramas</b>, figuras sintéticas que representan un concepto sin palabras, junto a textos breves y flechas. Un buen pictograma es simple, se entiende en cualquier idioma y forma parte de una familia coherente (mismo grosor, estilo y proporción). La señalización de seguridad sigue normas con colores fijos: verde para salvamento, rojo para prohibición e incendios, amarillo para advertencia y azul para obligación.</p>`,
      svg: B.rejilla("Colores de seguridad", ["Color", "Significado", "Ejemplo"], [["Rojo", "prohibición, incendio", "extintor"], ["Amarillo", "advertencia", "riesgo eléctrico"], ["Azul", "obligación", "usar casco"], ["Verde", "salvamento", "salida"]]),
    },
    {
      h: "Señalética accesible",
      html: `<p>La señalética debe servir a <b>todas las personas</b>. Por eso se cuidan el contraste, el tamaño de los textos según la distancia de lectura y la altura de colocación. Para personas ciegas se añaden textos en <b>braille</b> y relieves, y para personas con dificultades de comprensión se usan pictogramas de <b>lectura fácil</b>, como los del sistema ARASAAC, creado en Aragón.</p>
      <p>También se combinan señales visuales con <b>pavimentos podotáctiles</b>, avisos sonoros y aplicaciones móviles. Un sistema bien diseñado reduce el estrés y hace que nadie se sienta perdido.</p>`,
      svg: B.estrella("Señalética para todos", "Accesible", ["Contraste", "Tamaño", "Braille", "Pictogramas", "Altura"]),
    },
  ],
  figura: {
    titulo: "Diseño gráfico aplicado",
    items: [["Cartel", "▮", "impacto y", "jerarquía"], ["Editorial", "▤", "retícula y", "maquetación"], ["Envase", "▣", "proteger, informar", "y vender"], ["Señalética", "➜", "orientar a", "todas las personas"]],
  },
  video: { id: "ufJZ6_511dg", titulo: "Diseño de pictogramas para marcas", canal: "Domestika", vistas: 34755 },
  quiz: [
    ["Un cartel debe…", ["contener mucho texto", "captar la atención y comunicar en pocos segundos", "leerse de cerca", "evitar imágenes"], 1, "Se ve de lejos y de paso."],
    ["La hipérbole visual consiste en…", ["reducir al mínimo", "exagerar", "unir dos imágenes", "usar texto"], 1, "Tamaño o cantidad exagerados."],
    ["El anclaje significa que…", ["el texto fija el sentido de la imagen", "la imagen está pegada", "no hay texto", "se usa la retícula"], 0, "Relación texto-imagen."],
    ["La maquetación es…", ["la impresión", "la colocación de los elementos en las páginas", "el troquel", "el papel"], 1, "Sobre una retícula."],
    ["El sangrado en imprenta es…", ["un error", "imagen que sobrepasa el corte para evitar bordes blancos", "un tipo de papel", "una tinta"], 1, "Unos 3 mm."],
    ["Para imprimir, las imágenes suelen ir a…", ["72 ppp", "300 ppp", "10 ppp", "1.000 ppp"], 1, "Resolución de imprenta."],
    ["El troquel de un envase es…", ["su logotipo", "la plantilla plana de corte y plegado", "su precio", "la tinta"], 1, "Envase desplegado."],
    ["Un pictograma es…", ["una fotografía", "una figura sintética que representa un concepto", "un texto largo", "un mapa"], 1, "Sin palabras."],
    ["En las señales de seguridad, el verde indica…", ["prohibición", "salvamento o socorro", "obligación", "advertencia"], 1, "Salidas y botiquines."],
    ["ARASAAC es…", ["una imprenta", "un sistema de pictogramas para la comunicación accesible", "una tipografía", "un museo"], 1, "Creado en Aragón."],
  ],
  examen: [
    ["Un cartel tiene el título, la fecha, el lugar, el precio y los logos en el mismo tamaño. ¿Qué falla?", ["El color", "La jerarquía", "El papel", "El troquel"], 1, "Nada destaca."],
    ["Tu folleto impreso sale con una línea blanca en el borde. ¿Qué olvidaste?", ["El sangrado", "El kerning", "El RGB", "La retícula"], 0, "3 mm de sangrado."],
    ["Una galleta viene en bandeja de plástico, bolsa y caja. ¿Qué crítica haces?", ["Ninguna", "Sobreembalaje: demasiado material", "Le falta color", "Es poco visible"], 1, "Reducir material."],
    ["En un hospital la gente se pierde en un cruce de pasillos. ¿Qué haces?", ["Poner más carteles de publicidad", "Estudiar ese punto de decisión y señalizarlo con claridad", "Quitar las señales", "Poner música"], 1, "Señalética basada en recorridos."],
    ["Un cartel muestra una bombilla que es a la vez un cerebro. ¿Qué recurso usa?", ["Hipérbole", "Fusión o metáfora visual", "Anclaje", "Sangrado"], 1, "Dos imágenes en una."],
  ],
  feynman: ["Qué necesita un cartel para funcionar", "Las partes de una revista y el papel de la retícula", "Las funciones de un envase", "Cómo se diseña la señalética de un edificio"],
  mapa: ["DISEÑO GRÁFICO", [["Cartel", "imagen · titular · datos · retórica"], ["Editorial", "retícula · maquetación · arte final"], ["Envase", "proteger · informar · vender · reciclar"], ["Señalética", "pictograma · recorrido · accesibilidad"]]],
  tarjetas: [
    ["Cartel", "Pieza gráfica para verse de lejos que comunica en pocos segundos."],
    ["Metáfora visual", "Recurso que representa una idea con la imagen de otra cosa."],
    ["Maquetación", "Colocación de textos e imágenes en las páginas."],
    ["Sangrado", "Margen de imagen que sobrepasa la línea de corte."],
    ["Arte final", "Archivo listo para imprimir."],
    ["Troquel", "Plantilla plana de corte y plegado de un envase."],
    ["Señalética", "Sistema de señales para orientarse en un espacio."],
    ["Pictograma", "Figura sintética que representa un concepto sin palabras."],
  ],
  ejemplos: [
    ["Diseña el esquema de un cartel para una carrera solidaria.", ["Imagen: zapatillas que dejan huellas en forma de corazón (fusión).", "Titular: «Corre por…» y el nombre de la causa.", "Datos: fecha, hora, salida e inscripción; logos abajo."], "Jerarquía en tres niveles y un recurso visual claro."],
    ["Prepara para imprenta un folleto A5.", ["Documento de 148 × 210 mm más 3 mm de sangrado.", "Imágenes en CMYK a 300 ppp.", "PDF con fuentes incrustadas y marcas de corte."], "Arte final correcto."],
    ["Propón tres pictogramas para el instituto.", ["Biblioteca: libro abierto.", "Secretaría: figura tras un mostrador con documento.", "Gimnasio: figura saltando."], "Mismo grosor de línea y estilo en los tres."],
  ],
  errores: [
    "Poner todo el texto del mismo tamaño en un cartel.",
    "Enviar a imprenta archivos en RGB y sin sangrado.",
    "Diseñar envases bonitos pero con exceso de material.",
    "Crear pictogramas con demasiados detalles o estilos mezclados.",
  ],
  ejercicios: {
    b: [
      ["Cita los tres niveles de jerarquía de un cartel.", "Imagen o titular principal, datos (qué, cuándo, dónde) y firma (logos, web)."],
      ["¿Qué es el sangrado y cuánto suele medir?", "Imagen que sobrepasa la línea de corte, unos 3 mm, para evitar bordes blancos."],
      ["Nombra cuatro funciones del envase.", "Proteger, informar, vender y facilitar el transporte y el reciclaje."],
      ["¿Qué significan el rojo y el azul en las señales de seguridad?", "Rojo: prohibición o material contra incendios. Azul: obligación."],
    ],
    m: [
      ["Analiza un cartel de cine: recursos, jerarquía y relación texto-imagen.", "Respuesta abierta: identificar metáfora, hipérbole o fusión, niveles de lectura y anclaje o relevo."],
      ["Dibuja la retícula de una doble página de revista y coloca titular, foto, texto y pie de foto.", "Respuesta gráfica: márgenes, columnas, medianil y coherencia entre ambas páginas."],
      ["Dibuja el troquel de una caja sencilla para un producto pequeño.", "Respuesta gráfica: caras, solapas y pestañas de pegado, con líneas de corte y de plegado diferenciadas."],
      ["Explica por qué los pictogramas de una familia deben compartir estilo.", "Para que se reconozcan como sistema, se lean con rapidez y den imagen coherente del lugar."],
    ],
    a: [
      ["Diseña un sistema de señalética para la planta baja del instituto: plano, puntos de decisión y cinco señales.", "Respuesta abierta. Se valora el estudio de recorridos, la claridad y la accesibilidad."],
      ["Rediseña un envase de tu casa para reducir material sin perder información ni atractivo.", "Respuesta abierta: comparación antes y después con justificación ambiental y comunicativa."],
    ],
  },
  glosario: [
    ["Entradilla", "Texto breve que resume un artículo tras el titular."],
    ["Pie de foto", "Texto que acompaña a una imagen."],
    ["Pliego", "Dos páginas enfrentadas de una publicación."],
    ["Gramaje", "Peso del papel por metro cuadrado, que indica su grosor."],
    ["Offset", "Sistema de impresión industrial para grandes tiradas."],
    ["Lineal", "Estantería de la tienda donde se exponen los productos."],
    ["Punto de decisión", "Lugar donde el usuario debe elegir un camino."],
    ["Braille", "Sistema de lectura táctil con puntos en relieve."],
  ],
  situacion: {
    titulo: "Nadie se pierde",
    reto: "Mejorar la orientación en el instituto para el alumnado nuevo y las visitas.",
    pasos: [
      "Recorred el centro con alguien que no lo conozca y anotad dónde duda.",
      "Dibujad el plano con los puntos de decisión.",
      "Diseñad una familia de pictogramas y las señales necesarias.",
      "Probad un prototipo en papel y ajustadlo con lo observado.",
    ],
    producto: "Sistema de señalética con plano, pictogramas y señales prototipo.",
    evaluacion: [
      "Responde a problemas reales observados.",
      "Los pictogramas son claros y forman una familia.",
      "Tiene en cuenta contraste, tamaño, altura y accesibilidad.",
    ],
  },
  familias: [
    "Comentad juntos los carteles de vuestra calle: ¿cuál se entiende antes?",
    "Mirad la información de un envase y buscad el símbolo de reciclaje.",
    "En un viaje, fijaos en la señalética de la estación o el aeropuerto.",
    "Hojead una revista y buscad la retícula que ordena sus páginas.",
  ],
  saberes: "Ámbitos del diseño gráfico: el cartel y sus recursos retóricos; diseño editorial, retícula y maquetación; preparación de artes finales y sistemas de impresión; diseño de envases y embalajes; señalética, pictogramas y accesibilidad",
  ideas: [
    "Concurso de carteles para una actividad real del centro.",
    "Fanzine colectivo de la clase maquetado con retícula.",
    "Colección de troqueles de envases desplegados.",
    "Colaboración con el departamento de orientación en la señalética del centro.",
  ],
  fuentes: [
    { t: "ARASAAC, Centro Aragonés para la Comunicación Aumentativa y Alternativa", url: "https://arasaac.org/" },
    { t: "Diseño editorial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dise%C3%B1o_editorial" },
  ],
});
