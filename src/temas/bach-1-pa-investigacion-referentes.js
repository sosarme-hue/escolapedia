// Proyectos Artísticos, 1º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");

module.exports = B.tema({
  titulo: "Investigación y referentes",
  minutos: 60,
  objetivos: [
    "Investigar un tema antes de crear, usando fuentes fiables y variadas",
    "Buscar, seleccionar y analizar referentes artísticos",
    "Construir un moodboard o panel de referencias coherente",
    "Distinguir entre inspirarse, citar y copiar, y respetar los derechos de autor",
  ],
  claves: ["investigación", "fuente", "referente", "moodboard", "análisis", "inspiración", "plagio", "derechos de autor"],
  pregunta: {
    texto: "Si todo está ya inventado, ¿cómo puede ser original mi obra?",
    respuesta: "La originalidad no nace de la nada: nace de <mark>combinar</mark> de forma nueva lo que has visto y vivido. Cuanto más y mejor investigas, más materiales tienes para crear algo tuyo.",
  },
  lectura: {
    titulo: "Robar como un artista",
    html: `<p>Los grandes artistas siempre han estudiado a otros. Velázquez copió a Tiziano en sus viajes a Italia; Picasso reinterpretó <i>Las Meninas</i> en 58 cuadros; Frida Kahlo bebió del arte popular mexicano. Ninguno se limitó a copiar: tomaron algo, lo entendieron y lo transformaron.</p>
    <p>Hoy tenemos millones de imágenes a un clic, pero eso no hace la tarea más fácil. El reto ya no es encontrar imágenes, sino <b>elegir bien</b>: saber qué buscar, de dónde viene cada cosa y qué te aporta de verdad. Investigar es la parte invisible de toda obra, y la que más se nota cuando falta.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Para qué sirve investigar",
      html: `<p>La <b>investigación</b> es la primera fase del proyecto. Sirve para <b>entender el tema</b> en profundidad, descubrir qué se ha hecho ya, encontrar enfoques inesperados y evitar repetir lo obvio.</p>
      <p>Investigar en arte no es solo leer: también es <b>observar</b>, fotografiar, dibujar del natural, entrevistar, coleccionar objetos y visitar lugares. Todo ello se anota en el diario de proyecto con la fecha y el origen.</p>
      <p>Una buena investigación empieza con una <b>pregunta</b> concreta. «El mar» es demasiado amplio; «¿qué queda del oficio de pescador en mi pueblo?» ya señala dónde buscar, a quién preguntar y qué fotografiar.</p>`,
      svg: B.estrella("Formas de investigar en arte", "Investigar", ["Leer", "Observar", "Dibujar", "Entrevistar", "Visitar", "Coleccionar"]),
    },
    {
      h: "Fuentes: dónde buscar",
      html: `<p>Las <b>fuentes primarias</b> son directas: la obra vista en el museo, la entrevista, el lugar visitado. Las <b>secundarias</b> hablan sobre ellas: libros, catálogos, artículos, documentales.</p>
      <p>En internet conviene ir a sitios fiables: webs de <b>museos</b> (Prado, Reina Sofía, MoMA, Google Arts &amp; Culture), bibliotecas y archivos digitales. Para cada fuente hay que preguntarse quién lo dice, cuándo y con qué pruebas. Una imagen sin autor ni fecha vale poco como referencia.</p>`,
      svg: B.comparar("Fuentes primarias y secundarias", ["Primarias", ["obra original", "entrevista", "lugar", "objeto"]], ["Secundarias", ["libro", "catálogo", "artículo", "documental"]]),
    },
    {
      h: "Qué es un referente",
      html: `<p>Un <b>referente</b> es una obra, un artista o una imagen que te sirve de punto de apoyo para tu proyecto. Puede servir por su <b>tema</b> (trata lo mismo que tú), por su <b>técnica</b> (cómo está hecho), por su <b>forma</b> (composición, color, escala) o por su <b>actitud</b> (cómo se relaciona con el público).</p>
      <p>Los referentes no tienen por qué ser solo del arte: el cine, la ciencia, la moda, la arquitectura o un objeto cotidiano pueden ser igual de útiles.</p>`,
      svg: B.cajas("Qué te puede aportar un referente", [["Tema", "de qué habla"], ["Técnica", "cómo está hecho"], ["Forma", "color, escala, composición"], ["Actitud", "relación con el público"]]),
      video: { id: "6G8g5fgEUHE", titulo: "Referencias: por qué y cómo usarlas", canal: "Gartzia Artz", vistas: 36797 },
    },
    {
      h: "Analizar un referente",
      html: `<p>No basta con decir «me gusta». Hay que <b>analizar</b>: primero la <b>ficha</b> (autor, título, año, técnica, medidas, lugar); luego la <b>descripción</b> de lo que se ve; después la <b>interpretación</b> (qué significa y en qué contexto se hizo); y por último, lo más importante para ti: <b>qué te llevas</b> para tu proyecto.</p>
      <p>Tres buenos referentes bien analizados valen más que treinta imágenes guardadas sin pensar. Conviene que sean <b>variados</b>: uno clásico, uno actual y uno de fuera del arte, para no acabar haciendo una versión de una sola obra.</p>`,
      svg: B.flujo("Analizar un referente en cuatro pasos", ["Ficha: autor, año, técnica", "Descripción: qué se ve", "Interpretación: qué significa", "Qué me llevo para mi obra"]),
    },
    {
      h: "El moodboard o panel de referencias",
      html: `<p>Un <b>moodboard</b> (panel de ambiente) reúne en un solo vistazo imágenes, colores, texturas, tipografías y palabras que definen el tono de un proyecto. Lo usan diseñadores, directores de cine e ilustradores para ponerse de acuerdo antes de empezar.</p>
      <p>Puede ser físico (corcho, collage) o digital (Pinterest, Canva, Miro). Un buen moodboard es <b>selectivo</b>: todo lo que hay en él responde a la intención del proyecto y se nota una línea común de color o de estilo. Antes de cerrarlo, prueba a quitar lo que no encaja: si el panel gana fuerza, sobraba.</p>`,
      svg: B.muro("Un moodboard reúne color, imagen, palabra, textura, obras y bocetos"),
      video: { id: "xJEYViuQifg", titulo: "Cómo los directores de arte realmente crean paneles de inspiración", canal: "Louis Moss", vistas: 371894 },
    },
    {
      h: "Organizar lo que encuentras",
      html: `<p>Lo que no se organiza se pierde. Conviene crear <b>carpetas</b> por categorías (referentes, materiales, datos, fotos propias), nombrar los archivos con claridad y anotar siempre la <b>fuente</b>: autor, título y enlace o libro.</p>
      <p>Un mapa mental en el diario ayuda a ver las conexiones entre ideas. Al final de la fase, se resume todo en una página: la pregunta, los tres referentes clave y las primeras conclusiones. Esa página será la base de la propuesta en la fase siguiente.</p>`,
      svg: B.capas("Cómo ordenar la investigación", [["Pregunta", "qué quiero saber"], ["Datos", "textos y cifras"], ["Referentes", "obras y artistas"], ["Material propio", "fotos, dibujos"], ["Conclusión", "una página"]]),
    },
    {
      h: "Inspirarse, citar y copiar",
      html: `<p><b>Inspirarse</b> es tomar una idea y transformarla hasta que sea tuya. <b>Citar</b> o hacer un <b>homenaje</b> es aludir a una obra de forma reconocible y declararlo. <b>Plagiar</b> es presentar como propio el trabajo de otro: es deshonesto y puede ser ilegal.</p>
      <p>Una regla útil: si alguien viera tu obra junto al referente, ¿pensaría que has aportado algo nuevo? Si la respuesta es no, todavía estás copiando.</p>`,
      svg: B.capas("De la inspiración al plagio", [["Inspirarse", "transformar"], ["Citar", "aludir y declararlo"], ["Copiar", "solo para aprender"], ["Plagiar", "hacerlo pasar por tuyo"]]),
    },
    {
      h: "Derechos de autor y licencias",
      html: `<p>Las obras están protegidas por los <b>derechos de autor</b>: en España, durante toda la vida del autor y 70 años después. Para usar una imagen ajena en tu obra o en tu difusión necesitas permiso, salvo que sea de <b>dominio público</b> o tenga una licencia libre.</p>
      <p>Las licencias <b>Creative Commons</b> indican qué se puede hacer: citar al autor (BY), no usarla con fines comerciales (NC), no modificarla (ND) o compartir con la misma licencia (SA). Bancos como Wikimedia Commons o Unsplash ofrecen imágenes con permisos claros.</p>`,
      svg: B.rejilla("Licencias Creative Commons: qué piden", ["Sigla", "Significa"], [["BY", "cita al autor"], ["NC", "sin uso comercial"], ["ND", "sin modificar"], ["SA", "comparte igual"]]),
    },
  ],
  figura: {
    titulo: "Investigación y referentes en cuatro claves",
    items: [["Fuentes", "📚", "primarias y", "secundarias"], ["Referente", "★", "tema, técnica,", "forma, actitud"], ["Moodboard", "▦", "panel de", "ambiente"], ["Ética", "©", "inspirar,", "no plagiar"]],
  },
  video: { id: "EG31f-mGzoM", titulo: "¿Qué es un moodboard? ¿Cuál es su importancia?", canal: "By Hanz", vistas: 42150 },
  quiz: [
    ["La investigación en un proyecto sirve sobre todo para…", ["retrasar el trabajo", "entender el tema y evitar lo obvio", "copiar ideas", "rellenar el portfolio"], 1, "Da profundidad y materiales."],
    ["Una entrevista que haces tú a un vecino es una fuente…", ["secundaria", "primaria", "falsa", "comercial"], 1, "Es directa."],
    ["Un catálogo de exposición es una fuente…", ["primaria", "secundaria", "ilegal", "inútil"], 1, "Habla sobre las obras."],
    ["Un referente puede servir por su…", ["solo por su precio", "tema, técnica, forma o actitud", "solo por su fama", "tamaño de archivo"], 1, "Cuatro aspectos aprovechables."],
    ["El último paso al analizar un referente es…", ["la ficha", "la descripción", "qué me llevo para mi obra", "el precio"], 2, "Es lo que lo hace útil."],
    ["Un moodboard es…", ["un tipo de pincel", "un panel de imágenes, colores y texturas que define el tono", "un presupuesto", "un cronograma"], 1, "Panel de ambiente."],
    ["Un buen moodboard es…", ["muy grande y variado sin criterio", "selectivo y coherente con la intención", "solo de fotos propias", "secreto"], 1, "Todo responde a la intención."],
    ["Presentar como propia la obra de otro es…", ["inspirarse", "citar", "plagiar", "homenajear"], 2, "Es deshonesto y puede ser ilegal."],
    ["En España, los derechos de autor duran…", ["10 años", "la vida del autor y 70 años más", "para siempre", "hasta que se publica"], 1, "Después la obra pasa a dominio público."],
    ["En una licencia Creative Commons, «BY» significa…", ["prohibido usar", "hay que citar al autor", "solo uso comercial", "sin modificar"], 1, "Atribución."],
  ],
  examen: [
    ["Quieres usar en tu cartel una foto con licencia CC BY-NC. ¿Puedes ponerla en un cartel de una fiesta benéfica gratuita del instituto?", ["No, nunca", "Sí, citando al autor, porque no es comercial", "Sí, sin citar", "Solo si la modificas"], 1, "Uso no comercial y con atribución."],
    ["Pablo guarda 200 imágenes en Pinterest sin anotar nada. ¿Qué le falta?", ["Más imágenes", "Seleccionar, analizar y anotar las fuentes", "Un ordenador mejor", "Nada"], 1, "Tres referentes analizados valen más."],
    ["Un cuadro de Goya (murió en 1828) se puede reproducir en tu obra porque…", ["es famoso", "está en dominio público", "es español", "está en un museo"], 1, "Han pasado más de 70 años."],
    ["Pintas tu versión de La Gioconda con tu madre como modelo y lo indicas en el título. Es…", ["plagio", "una cita u homenaje", "una fuente primaria", "un moodboard"], 1, "Alusión reconocible y declarada."],
    ["¿Cuál es la mejor fuente para conocer la técnica de una obra de El Prado?", ["Un meme", "La ficha de la obra en la web del museo", "Un comentario anónimo", "Un vídeo sin autor"], 1, "Fuente fiable y verificable."],
  ],
  feynman: ["Qué diferencia una fuente primaria de una secundaria", "Cómo se analiza un referente", "Para qué sirve un moodboard", "Dónde está la línea entre inspirarse y plagiar"],
  mapa: ["INVESTIGACIÓN Y REFERENTES", [["Investigar", "leer · observar · entrevistar"], ["Fuentes", "primarias · secundarias · fiables"], ["Referentes", "analizar · moodboard"], ["Ética", "citar · licencias · no plagiar"]]],
  tarjetas: [
    ["Fuente primaria", "Información directa: la obra, el lugar, la entrevista."],
    ["Fuente secundaria", "Información elaborada sobre otras fuentes: libros, artículos."],
    ["Referente", "Obra o artista que sirve de apoyo a tu proyecto."],
    ["Moodboard", "Panel que reúne imágenes, colores y texturas para definir el tono de un proyecto."],
    ["Homenaje", "Alusión reconocible y declarada a otra obra."],
    ["Plagio", "Presentar como propia una obra ajena."],
    ["Dominio público", "Obras que ya se pueden usar libremente porque han expirado sus derechos."],
    ["Creative Commons", "Licencias que indican qué usos permite el autor."],
  ],
  ejemplos: [
    ["Busca referentes para un proyecto sobre la soledad en la ciudad.", ["Tema: Edward Hopper (Nighthawks) retrata personas solas en espacios urbanos.", "Técnica: la fotografía de calle de Vivian Maier.", "Forma y actitud: una instalación sonora con voces de vecinos mayores."], "Tres referentes que aportan tema, técnica y actitud distintos."],
    ["Analiza un referente: Las Meninas de Velázquez para un proyecto sobre la mirada.", ["Ficha: Velázquez, 1656, óleo sobre lienzo, Museo del Prado.", "Descripción e interpretación: el pintor y los personajes nos miran; juega con quién mira a quién.", "Qué me llevo: incluir al espectador dentro de la obra con un espejo."], "Referente analizado con una idea concreta para el proyecto."],
    ["Decide si puedes usar esta imagen: foto de Unsplash en el cartel de tu exposición.", ["Consultar la licencia de Unsplash: permite uso gratuito, incluso comercial.", "No exige atribución, pero es buena práctica citar al fotógrafo.", "Comprobar que no aparezcan marcas o personas que requieran permiso."], "Sí se puede usar, citando al autor como buena práctica."],
  ],
  errores: [
    "Investigar solo en buscadores de imágenes, sin anotar autor ni fuente.",
    "Guardar cientos de imágenes y no analizar ninguna.",
    "Confundir inspirarse con copiar casi exactamente una obra.",
    "Usar imágenes ajenas en la difusión sin mirar su licencia.",
  ],
  ejercicios: {
    b: [
      ["Pon dos ejemplos de fuente primaria y dos de secundaria.", "Primarias: visitar la obra, entrevistar al artista. Secundarias: un libro de historia del arte, un documental."],
      ["¿Qué cuatro aspectos te puede aportar un referente?", "Tema, técnica, forma y actitud."],
      ["Define moodboard.", "Panel físico o digital que reúne imágenes, colores, texturas y palabras para definir el tono de un proyecto."],
      ["¿Qué significan BY y NC en Creative Commons?", "BY: hay que citar al autor. NC: no se permite el uso comercial."],
    ],
    m: [
      ["Explica la diferencia entre inspirarse, citar y plagiar con un ejemplo de cada.", "Inspirarse: tomar los colores de Sorolla para una serie propia sobre la playa. Citar: versionar La Gioconda declarándolo. Plagiar: copiar una ilustración y firmarla como propia."],
      ["Analiza en cuatro pasos un referente que te guste.", "Respuesta abierta: ficha, descripción, interpretación y qué te llevas para tu obra."],
      ["¿Por qué un moodboard debe ser selectivo?", "Porque su función es definir un tono común; si mezcla todo sin criterio, no ayuda a tomar decisiones."],
      ["¿Cuándo pasa una obra a dominio público en España?", "Setenta años después de la muerte de su autor (a contar desde el 1 de enero del año siguiente)."],
    ],
    a: [
      ["Elabora un moodboard de 12 elementos para un proyecto propio y justifica cada elección en una línea.", "Respuesta abierta. Se valora la coherencia con la intención y la variedad (color, textura, obra, palabra)."],
      ["Redacta un dosier de investigación de una página: pregunta, fuentes, tres referentes analizados y conclusión.", "Respuesta abierta. Debe citar las fuentes correctamente y extraer ideas aplicables."],
    ],
  },
  glosario: [
    ["Investigación", "Búsqueda ordenada de información sobre un tema."],
    ["Ficha técnica", "Datos básicos de una obra: autor, título, año, técnica, medidas, lugar."],
    ["Interpretación", "Explicación del significado de una obra."],
    ["Catálogo", "Libro que documenta una exposición o colección."],
    ["Atribución", "Indicar quién es el autor de una obra."],
    ["Licencia", "Permiso que concede el autor para usar su obra."],
    ["Banco de imágenes", "Web que ofrece imágenes con licencias de uso."],
    ["Mapa mental", "Esquema que conecta ideas alrededor de un tema central."],
  ],
  situacion: {
    titulo: "Dosier de referentes",
    reto: "Investigar el tema de tu proyecto y presentar un dosier con referentes y un moodboard.",
    pasos: [
      "Formula la pregunta de tu proyecto en una frase.",
      "Busca al menos una fuente primaria y dos secundarias fiables.",
      "Selecciona y analiza tres referentes en cuatro pasos.",
      "Construye un moodboard de 12 elementos y cita todas las fuentes.",
    ],
    producto: "Dosier de dos páginas y moodboard físico o digital.",
    evaluacion: [
      "Las fuentes son variadas y fiables.",
      "Los referentes están bien analizados.",
      "El moodboard es coherente con la intención.",
      "Todas las imágenes tienen autor y fuente.",
    ],
  },
  familias: [
    "Visitad juntos la web de un museo y elegid una obra para comentar.",
    "Preguntadle de dónde sacó las imágenes de su trabajo y si puede usarlas.",
    "Contadle historias o enseñadle objetos de familia que puedan servirle de fuente.",
    "Animadle a llevar una carpeta ordenada de referencias.",
  ],
  saberes: "La investigación en el proyecto artístico: tipos de fuentes y fiabilidad; búsqueda, selección y análisis de referentes; moodboard; organización de la información; inspiración, cita y plagio; propiedad intelectual, dominio público y licencias Creative Commons.",
  ideas: [
    "Visita virtual guiada a la web de un museo para buscar referentes.",
    "Moodboard colectivo en un corcho del aula.",
    "Debate con casos reales de plagio en el arte y el diseño.",
    "Taller de licencias: buscar imágenes libres en Wikimedia Commons.",
  ],
  fuentes: [
    { t: "Creative Commons, licencias", url: "https://creativecommons.org/licenses/?lang=es" },
    { t: "Google Arts & Culture", url: "https://artsandculture.google.com" },
  ],
});
