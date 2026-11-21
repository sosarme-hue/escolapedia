// Proyectos Artísticos, 1º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");
const { marco, t, rc, pa, ln } = B;

// Hoja de miniaturas: seis bocetos rápidos de composición.
const miniaturas = marco("Hoja de miniaturas: seis composiciones rápidas de la misma idea",
  [0, 1, 2, 3, 4, 5].map((i) => {
    const x = 12 + (i % 3) * 82, y = 14 + Math.floor(i / 3) * 80, w = 72, h = 56;
    const dentro = [
      `${rc(x + 8, y + 26, 22, 24, 'fill="var(--ink)" fill-opacity=".7"')}${ln(x, y + 50, x + w, y + 50, "var(--ink)", 1.2)}`,
      `${pa(`M${x} ${y + h} L${x + 36} ${y + 10} L${x + w} ${y + h}Z`, 'fill="var(--ink)" fill-opacity=".55"')}`,
      `${rc(x + 44, y + 8, 22, 42, 'fill="var(--ink)" fill-opacity=".7"')}${ln(x, y + 36, x + w, y + 36, "var(--ink)", 1.2)}`,
      `${pa(`M${x} ${y + 40} Q${x + 36} ${y + 4} ${x + w} ${y + 40}`, 'fill="none" stroke="var(--ink)" stroke-width="3"')}`,
      `${rc(x + 26, y + 18, 20, 20, 'fill="var(--red)" fill-opacity=".8"')}`,
      `${pa(`M${x} ${y + h} L${x + w} ${y}`, 'stroke="var(--ink)" stroke-width="3"')}${rc(x + 50, y + 34, 14, 14, 'fill="var(--ink)" fill-opacity=".7"')}`,
    ][i];
    return `${rc(x, y, w, h, 'fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"')}<g>${dentro}</g>${t(x + w / 2, y + h + 13, ["A", "B", "C", "D", "E ✓", "F"][i], { fs: 10, bold: 1, color: i === 4 ? "var(--leaf)" : "var(--muted)" })}`;
  }).join(""));

module.exports = B.tema({
  titulo: "Ideación y bocetos",
  minutos: 60,
  objetivos: [
    "Aplicar técnicas para generar muchas ideas: lluvia de ideas, mapa mental y SCAMPER",
    "Seleccionar las mejores ideas con criterios claros",
    "Utilizar distintos tipos de boceto: miniatura, boceto de estudio y boceto final",
    "Presentar una propuesta artística clara y argumentada",
  ],
  claves: ["ideación", "lluvia de ideas", "mapa mental", "SCAMPER", "boceto", "miniatura", "maqueta", "propuesta"],
  pregunta: {
    texto: "¿Es mejor esperar a tener una idea genial o tener muchas ideas mediocres?",
    respuesta: "Tener muchas. Las ideas buenas suelen aparecer <mark>después</mark> de las obvias, cuando ya has vaciado la cabeza. La cantidad lleva a la calidad: primero se abre, luego se elige.",
  },
  lectura: {
    titulo: "Cien sillas",
    html: `<p>En muchas escuelas de diseño se hace un ejercicio famoso: dibujar cien sillas diferentes en una tarde. Las diez primeras salen solas: la silla de cocina, la de oficina, el taburete. A partir de la treinta cuesta. Hacia la sesenta empiezan las ideas raras: una silla que es un columpio, otra hecha con libros, otra que solo se sostiene apoyada en la pared.</p>
    <p>Casi siempre, las propuestas más interesantes están en la segunda mitad de la hoja. El ejercicio enseña algo que sirve para cualquier proyecto: la primera idea casi nunca es la mejor, y el <b>boceto rápido</b> es la herramienta para llegar más lejos.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es idear",
      html: `<p><b>Idear</b> es transformar lo investigado en posibles soluciones. Es la fase más libre del proyecto, pero tiene dos momentos bien distintos: <b>generar</b> muchas ideas sin juzgarlas y después <b>seleccionar</b> las mejores con criterio.</p>
      <p>Mezclar los dos momentos bloquea: si criticas cada idea al nacer, dejas de proponer. Por eso conviene separarlos en el tiempo, igual que en el doble diamante se abre antes de cerrar. Un buen hábito es ponerse una cifra (veinte, treinta ideas) y un tiempo límite: la presión suave obliga a ir más allá de lo obvio y evita quedarse atascado buscando la idea perfecta.</p>`,
      svg: B.embudo("Del montón de ideas a la propuesta", [["Muchas ideas", "sin juzgar"], ["Las prometedoras", "agrupar y combinar"], ["Tres candidatas", "bocetar y probar"], ["Propuesta", "una"]]),
    },
    {
      h: "Lluvia de ideas y mapa mental",
      html: `<p>La <b>lluvia de ideas</b> (brainstorming) consiste en proponer en grupo, durante un tiempo corto, todas las ideas posibles sobre una pregunta. Reglas: no criticar, buscar cantidad, aceptar ideas locas y construir sobre las de los demás.</p>
      <p>El <b>mapa mental</b> parte de una palabra central y crea ramas de asociaciones: imágenes, colores, sonidos, recuerdos, materiales. Ayuda a ver conexiones inesperadas y funciona muy bien de forma individual en el diario de proyecto.</p>`,
      svg: B.estrella("Mapa mental a partir de «agua»", "agua", ["lluvia", "azul", "sed", "mar", "lágrima", "reflejo"]),
      video: { id: "YPTYQ3yrpHw", titulo: "Técnicas de lluvia de ideas: cómo innovar en grupo", canal: "Sprouts Español", vistas: 73100 },
    },
    {
      h: "SCAMPER y otras técnicas",
      html: `<p><b>SCAMPER</b> es una lista de preguntas para transformar una idea o un objeto existente: <b>S</b>ustituir, <b>C</b>ombinar, <b>A</b>daptar, <b>M</b>odificar (agrandar, reducir), <b>P</b>oner otros usos, <b>E</b>liminar y <b>R</b>eordenar o invertir. Aplicada a un retrato, por ejemplo: ¿y si sustituyo la pintura por hilos?, ¿y si lo hago gigante?</p>
      <p>Otras técnicas útiles: el <b>azar</b> (elegir palabras o imágenes al azar y relacionarlas), las <b>restricciones</b> (solo dos colores, solo papel) y el <b>cambio de punto de vista</b>.</p>`,
      svg: B.rejilla("SCAMPER aplicado a un retrato", ["Letra", "Pregunta"], [["S", "¿y con hilos?"], ["C", "¿retrato + mapa?"], ["M", "¿de 3 metros?"], ["E", "¿sin rostro?"], ["R", "¿al revés?"]]),
    },
    {
      h: "Seleccionar ideas",
      html: `<p>Para elegir no basta con el gusto personal. Se usan <b>criterios</b>: ¿responde a la intención?, ¿es original?, ¿se puede hacer con el tiempo, el dinero y las habilidades que tenemos?, ¿funcionará en el lugar y con el público previsto?</p>
      <p>Una <b>matriz de decisión</b> ayuda: se puntúa cada idea de 1 a 5 en cada criterio y se suman los puntos. No decide sola, pero hace visibles las razones y evita discusiones eternas en el equipo.</p>`,
      svg: B.rejilla("Matriz de decisión (1 a 5)", ["Idea", "Intención", "Original", "Viable", "Total"], [["Mural", "4", "3", "5", "12"], ["Instalación", "5", "5", "3", "13"], ["Vídeo", "3", "4", "4", "11"]]),
    },
    {
      h: "Tipos de boceto",
      html: `<p>El <b>boceto</b> es el dibujo rápido que sirve para pensar. Hay varios niveles: las <b>miniaturas</b> (thumbnails), pequeñas y rápidas, para probar muchas composiciones en pocos minutos; el <b>boceto de estudio</b>, que analiza un detalle, un color o una luz; y el <b>boceto final</b> o <b>apunte de presentación</b>, más cuidado, que muestra cómo será la obra.</p>
      <p>Lo importante no es que el boceto sea bonito, sino que sea <mark>útil</mark>: que permita comparar y decidir. Por eso se dibuja deprisa, con lápiz blando o rotulador, sin borrar: los errores también enseñan. Conviene numerar y fechar cada hoja para poder volver a una idea antigua si la nueva no funciona.</p>`,
      svg: miniaturas,
      video: { id: "P9E_kSxIibI", titulo: "Cómo dibujar miniaturas", canal: "Sara Tepes", vistas: 123579 },
    },
    {
      h: "Bocetar en tres dimensiones y en tiempo",
      html: `<p>No todos los proyectos se bocetan en papel. Una escultura o una instalación se prueban con <b>maquetas</b> de cartón, plastilina o alambre. Un vídeo o una animación se planifican con un <b>guion gráfico</b> (storyboard). Una performance se prueba con un <b>ensayo</b> grabado. Y un proyecto digital, con un <b>prototipo</b> sencillo en pantalla.</p>
      <p>Hoy también se usan programas de dibujo y modelado 3D y la inteligencia artificial para explorar variaciones, siempre como apoyo y declarando su uso.</p>`,
      svg: B.cajas("Cómo se boceta según el tipo de obra", [["Obra plana", "miniaturas y color"], ["Escultura", "maqueta"], ["Audiovisual", "storyboard"], ["Acción", "ensayo grabado"]]),
    },
    {
      h: "La propuesta",
      html: `<p>La fase de ideación termina con una <b>propuesta</b>: un documento breve que explica qué se va a hacer. Suele incluir el <b>título</b>, la <b>intención</b> en dos o tres líneas, el <b>boceto final</b>, la <b>técnica y materiales</b>, las <b>medidas</b>, el <b>lugar</b> de exposición y los <b>referentes</b> principales.</p>
      <p>Sirve para pedir permisos, convencer a quien financia y que todo el equipo comparta la misma imagen de la obra. Cuanto más concreta, mejor.</p>`,
      svg: B.capas("Partes de una propuesta artística", [["Título", "nombre de la obra"], ["Intención", "2 o 3 líneas"], ["Boceto final", "cómo será"], ["Técnica y medidas", "materiales"], ["Lugar y referentes", "contexto"]]),
    },
    {
      h: "Presentar y defender la idea",
      html: `<p>Presentar una idea es parte del oficio. Una buena presentación oral dura poco (dos o tres minutos), empieza por la intención, muestra el boceto grande y explica por qué esa forma es la mejor para ese lugar y ese público.</p>
      <p>Después llega el turno de las <b>preguntas y críticas</b>: escúchalas sin ponerte a la defensiva, anótalas y decide cuáles mejoran el proyecto. Las críticas a tiempo ahorran errores caros en la producción.</p>`,
      svg: B.flujo("Presentar una propuesta en 3 minutos", ["Intención: qué quiero contar", "Boceto: cómo será", "Por qué esta forma y este lugar", "Escuchar y anotar críticas"]),
    },
  ],
  figura: {
    titulo: "Ideación y bocetos en cuatro claves",
    items: [["Generar", "∞", "lluvia de ideas", "mapa mental"], ["Transformar", "S·C·A·M", "técnica", "SCAMPER"], ["Bocetar", "▢▢▢", "miniaturas", "y maquetas"], ["Proponer", "✓", "propuesta", "clara"]],
  },
  video: { id: "-OMJINQIZzA", titulo: "Cómo generar ideas con la técnica SCAMPER", canal: "Michael Masters", vistas: 336511 },
  quiz: [
    ["Los dos momentos de la ideación son…", ["comprar y vender", "generar y seleccionar", "dibujar y pintar", "investigar y exponer"], 1, "Primero se abre, luego se elige."],
    ["En una lluvia de ideas NO se debe…", ["buscar cantidad", "criticar las ideas", "aceptar ideas locas", "construir sobre otras"], 1, "Criticar bloquea."],
    ["Un mapa mental parte de…", ["un presupuesto", "una palabra central", "un boceto final", "un cronograma"], 1, "Y crea ramas de asociaciones."],
    ["En SCAMPER, la «E» significa…", ["Exponer", "Eliminar", "Estudiar", "Encuadrar"], 1, "Quitar elementos."],
    ["Una matriz de decisión sirve para…", ["dibujar mejor", "comparar ideas con criterios", "pedir dinero", "hacer fotos"], 1, "Hace visibles las razones."],
    ["Las miniaturas o thumbnails son…", ["bocetos pequeños y rápidos", "fotos de la obra final", "maquetas de cartón", "esculturas pequeñas"], 0, "Para probar composiciones."],
    ["Para bocetar un vídeo se usa…", ["una maqueta", "un storyboard", "un Gantt", "un catálogo"], 1, "Guion gráfico."],
    ["Una escultura se prueba antes con…", ["un storyboard", "una maqueta", "un mapa mental", "un presupuesto"], 1, "Modelo en 3D a escala."],
    ["¿Qué NO suele incluir una propuesta?", ["Intención", "Boceto final", "La nota final del proyecto", "Técnica y medidas"], 2, "La evaluación llega al final."],
    ["Ante una crítica a tu propuesta, lo mejor es…", ["defenderte", "ignorarla", "escucharla, anotarla y valorar si mejora el proyecto", "cambiar todo"], 2, "Las críticas a tiempo ahorran errores."],
  ],
  examen: [
    ["Tu grupo lleva 5 minutos discutiendo si la primera idea es buena. ¿Qué técnica conviene?", ["Elegir la primera", "Hacer primero una lluvia de ideas sin juzgar y luego seleccionar", "Votar sin hablar", "Abandonar"], 1, "Separar generar y seleccionar."],
    ["«¿Y si el retrato fuera de 3 metros?» corresponde en SCAMPER a…", ["Sustituir", "Modificar", "Eliminar", "Combinar"], 1, "Agrandar o reducir es modificar."],
    ["La idea con más puntos en la matriz es poco viable. ¿Qué haces?", ["Hacerla igual", "Revisar los criterios y valorar si se puede adaptar", "Tirar la matriz", "Elegir al azar"], 1, "La matriz ayuda, no decide sola."],
    ["Para una performance, la mejor forma de boceto es…", ["una miniatura a lápiz", "un ensayo grabado", "una maqueta de arcilla", "un moodboard"], 1, "Se prueba en el tiempo."],
    ["¿Qué tiene que tener un boceto para ser bueno?", ["Ser bonito", "Ser útil para comparar y decidir", "Estar coloreado", "Estar firmado"], 1, "Sirve para pensar."],
  ],
  feynman: ["Por qué se separa generar de seleccionar", "Cómo funciona SCAMPER", "Qué tipos de boceto existen", "Qué contiene una propuesta"],
  mapa: ["IDEACIÓN Y BOCETOS", [["Generar", "lluvia de ideas · mapa mental"], ["Transformar", "SCAMPER · azar · límites"], ["Elegir y bocetar", "matriz · miniaturas · maqueta"], ["Proponer", "propuesta · presentación"]]],
  tarjetas: [
    ["Ideación", "Fase en la que se generan y seleccionan ideas."],
    ["Lluvia de ideas", "Técnica de grupo para proponer muchas ideas sin juzgarlas."],
    ["Mapa mental", "Esquema de asociaciones a partir de una palabra central."],
    ["SCAMPER", "Sustituir, Combinar, Adaptar, Modificar, Poner otros usos, Eliminar, Reordenar."],
    ["Matriz de decisión", "Tabla que puntúa ideas según criterios."],
    ["Miniatura", "Boceto pequeño y rápido para probar composiciones."],
    ["Storyboard", "Secuencia de dibujos que planifica un audiovisual."],
    ["Propuesta", "Documento que explica la obra que se va a realizar."],
  ],
  ejemplos: [
    ["Aplica SCAMPER a una mochila escolar para un proyecto de escultura.", ["Sustituir la tela por cartón; Combinar con una maceta.", "Modificar: hacerla gigante, de 2 metros; Poner otro uso: refugio para un pájaro.", "Eliminar las asas; Reordenar: colgarla del techo boca abajo."], "Siete variaciones que abren caminos para la escultura."],
    ["Elige entre tres ideas con una matriz.", ["Criterios: intención, originalidad, viabilidad (1 a 5).", "Mural 4+3+5 = 12; instalación 5+5+3 = 13; vídeo 3+4+4 = 11.", "La instalación gana, pero su viabilidad es baja: se reduce su tamaño para hacerla posible."], "Instalación adaptada a menor escala."],
    ["Haz seis miniaturas para un cartel sobre reciclaje.", ["Fijar el formato (vertical) y dibujar seis rectángulos pequeños.", "Probar en cada uno una composición distinta: centrada, diagonal, figura grande, texto grande…", "Elegir la más clara a 2 metros y ampliarla como boceto final."], "Miniatura elegida y boceto final del cartel."],
  ],
  errores: [
    "Quedarse con la primera idea sin explorar otras.",
    "Criticar las ideas en el mismo momento en que se proponen.",
    "Hacer bocetos muy detallados demasiado pronto y no comparar alternativas.",
    "Presentar la idea sin explicar la intención ni el lugar.",
  ],
  ejercicios: {
    b: [
      ["Escribe las cuatro reglas de la lluvia de ideas.", "No criticar, buscar cantidad, aceptar ideas locas y construir sobre las de los demás."],
      ["¿Qué significa cada letra de SCAMPER?", "Sustituir, Combinar, Adaptar, Modificar, Poner otros usos, Eliminar, Reordenar."],
      ["Nombra tres tipos de boceto.", "Miniatura, boceto de estudio y boceto final o de presentación."],
      ["Enumera cinco partes de una propuesta.", "Título, intención, boceto final, técnica y medidas, lugar y referentes."],
    ],
    m: [
      ["Haz un mapa mental con 12 ramas a partir de la palabra «casa».", "Respuesta abierta: hogar, refugio, familia, ladrillo, llave, mudanza, ventana, infancia, techo, desahucio, calor, plano…"],
      ["Explica para qué sirve una maqueta y cuándo se usa.", "Para probar en tres dimensiones la forma, la escala y el equilibrio de una escultura o instalación antes de hacerla en grande."],
      ["Diseña una matriz de decisión para elegir entre dos ideas propias.", "Respuesta abierta: al menos tres criterios puntuados de 1 a 5 y una conclusión razonada."],
      ["¿Por qué conviene separar el momento de generar del de seleccionar?", "Porque juzgar cada idea al nacer frena la creatividad; separados, se exploran más opciones y luego se eligen mejor."],
    ],
    a: [
      ["Llena una hoja con 20 miniaturas de una misma idea y elige la mejor justificando por qué.", "Respuesta abierta. Se valora la variedad de composiciones y una justificación con criterios."],
      ["Redacta y presenta en 3 minutos la propuesta de tu proyecto.", "Respuesta abierta: intención, boceto, técnica, medidas, lugar, referentes y razones de la forma elegida."],
    ],
  },
  glosario: [
    ["Brainstorming", "Nombre en inglés de la lluvia de ideas."],
    ["Criterio", "Razón o norma que se usa para elegir."],
    ["Viabilidad", "Posibilidad real de hacer algo con los recursos disponibles."],
    ["Boceto de estudio", "Dibujo que analiza un detalle, un color o una luz."],
    ["Maqueta", "Modelo reducido en tres dimensiones."],
    ["Prototipo", "Versión de prueba de una idea."],
    ["Restricción creativa", "Límite que se impone para estimular soluciones nuevas."],
    ["Thumbnail", "Miniatura: boceto pequeño y rápido."],
  ],
  situacion: {
    titulo: "De cien ideas a una propuesta",
    reto: "Generar al menos 30 ideas para tu proyecto y convertir la mejor en una propuesta presentada a la clase.",
    pasos: [
      "Haz un mapa mental y una lluvia de ideas en grupo.",
      "Aplica SCAMPER a dos de las ideas para obtener variantes.",
      "Elige tres candidatas con una matriz de decisión y haz miniaturas de cada una.",
      "Redacta la propuesta y preséntala en tres minutos.",
    ],
    producto: "Hoja de ideas, miniaturas, matriz y propuesta de una página.",
    evaluacion: [
      "Se generan muchas ideas variadas.",
      "La selección usa criterios claros.",
      "Los bocetos permiten comparar alternativas.",
      "La propuesta es completa y se presenta con claridad.",
    ],
  },
  familias: [
    "Jugad a SCAMPER con un objeto de casa: ¿qué pasaría si…?",
    "Pedidle que os enseñe su hoja de bocetos y elegid juntos el más claro.",
    "Escuchad su presentación de tres minutos antes de llevarla a clase.",
    "Valorad la cantidad de ideas, no solo la primera.",
  ],
  saberes: "Ideación: técnicas de generación de ideas (lluvia de ideas, mapas mentales, SCAMPER, azar, restricciones); selección con criterios y matriz de decisión; tipos de boceto, maquetas, storyboard y prototipos; redacción y presentación de la propuesta artística.",
  ideas: [
    "Reto de las cien sillas o los cien objetos en una sesión.",
    "Lluvia de ideas cronometrada de 10 minutos con pósits.",
    "Ruleta SCAMPER: sortear una letra por grupo.",
    "Ronda de presentaciones de 3 minutos con críticas constructivas.",
  ],
  fuentes: [
    { t: "SCAMPER, Wikipedia en español", url: "https://es.wikipedia.org/wiki/SCAMPER" },
    { t: "Mapa mental, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Mapa_mental" },
  ],
});
