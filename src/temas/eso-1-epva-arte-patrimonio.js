// Educación Plástica, Visual y Audiovisual 1º ESO: el arte y el patrimonio. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, caja, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "El arte y el patrimonio",
  minutos: 50,
  objetivos: ["Reconocer las principales manifestaciones artísticas y sus técnicas", "Distinguir los géneros de la pintura", "Explicar qué es el patrimonio cultural y natural y por qué hay que protegerlo", "Analizar una obra de arte siguiendo una ficha de comentario"],
  claves: ["arte", "disciplina artística", "género pictórico", "patrimonio material", "patrimonio inmaterial", "museo"],
  pregunta: {
    texto: "¿Qué tienen en común las pinturas de la cueva de Altamira, la Alhambra de Granada, el flamenco y los castells?",
    respuesta: "Que todos forman parte del <b>patrimonio cultural</b> y la UNESCO los reconoce como <b>Patrimonio de la Humanidad</b>. Unos son <b>materiales</b> (se pueden tocar: pinturas, edificios) y otros <b>inmateriales</b> (tradiciones vivas: música, danza, fiestas). <mark>Son una herencia de todos que debemos cuidar</mark>.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el arte?</h3><p>El <b>arte</b> es una actividad humana en la que una persona crea algo para <b>expresar</b> ideas, emociones o su forma de ver el mundo, usando materiales, imágenes, sonidos o movimientos. Existe desde la Prehistoria: hace más de 35 000 años ya se pintaban animales en las cuevas.</p><p>A lo largo de la historia el arte ha servido para muchas cosas: <b>rendir culto</b> a los dioses, <b>mostrar el poder</b> de reyes y nobles, <b>contar historias</b>, <b>decorar</b>, <b>denunciar</b> injusticias o simplemente buscar la <b>belleza</b>.</p><p>No hay una única forma de hacer arte ni de disfrutarlo: lo importante es <mark>mirar con atención y con curiosidad</mark>.</p>`,
    },
    {
      html: `<h3>Las disciplinas artísticas</h3>${tabla(["Disciplina", "Qué es", "Ejemplo"], [["Arquitectura", "el arte de proyectar y construir edificios y espacios", "la Sagrada Familia (Gaudí)"], ["Escultura", "obras en tres dimensiones talladas, modeladas o fundidas", "el Discóbolo, las esculturas de Chillida"], ["Pintura", "obras en dos dimensiones con color sobre un soporte", "Las Meninas (Velázquez)"], ["Dibujo y grabado", "obras con líneas, manchas o estampación", "los grabados de Goya"], ["Artes decorativas", "objetos útiles y bellos: cerámica, orfebrería, tapices", "la cerámica de Talavera"], ["Nuevas artes", "fotografía, cine, cómic, arte digital, arte urbano, instalaciones", "un mural de grafiti"]])}<p>Hoy muchas obras mezclan varias disciplinas: una instalación puede combinar escultura, vídeo, luz y sonido.</p>`,
    },
    {
      html: `<h3>Los géneros de la pintura</h3><p>Según el <b>tema</b>, las pinturas se agrupan en <b>géneros</b>:</p><ul><li><b>Retrato</b>: representa a una persona. Si el artista se pinta a sí mismo, es un <b>autorretrato</b>.</li><li><b>Paisaje</b>: la naturaleza, el campo, el mar o la ciudad.</li><li><b>Bodegón</b> o naturaleza muerta: objetos inanimados (frutas, flores, recipientes).</li><li><b>Pintura de historia</b>: hechos históricos o mitológicos.</li><li><b>Pintura religiosa</b>: escenas sagradas.</li><li><b>Escena costumbrista</b> o de género: la vida cotidiana.</li><li><b>Abstracción</b>: no representa nada reconocible, solo formas y colores.</li></ul>`,
      svg: svg("Tres miniaturas de géneros pictóricos: retrato, paisaje y bodegón", `${caja(14, 30, 72, 92, "", "var(--pen)")}<circle cx="50" cy="66" r="16" fill="var(--pen)" fill-opacity=".35"/><path d="M26 122 Q 50 86 74 122" fill="var(--pen)" fill-opacity=".35"/>${t(50, 140, "retrato", { s: 11, c: "var(--pen)" })}${caja(94, 30, 72, 92, "", "var(--leaf)")}<path d="M94 96 L 116 70 L 132 86 L 146 62 L 166 96 Z" fill="var(--leaf)" fill-opacity=".4"/><circle cx="150" cy="46" r="7" fill="var(--sun)"/>${t(130, 140, "paisaje", { s: 11, c: "var(--leaf)" })}${caja(174, 30, 72, 92, "", "var(--red)")}<path d="M190 106 H 232" stroke="var(--ink)" stroke-width="2"/><circle cx="202" cy="96" r="9" fill="var(--red)" fill-opacity=".55"/><path d="M216 106 V 76 Q 222 70 228 76 V 106 Z" fill="var(--sun)" fill-opacity=".5"/>${t(210, 140, "bodegón", { s: 11, c: "var(--red)" })}`),
    },
    {
      html: `<h3>Materiales y técnicas</h3><p>Cada técnica deja un resultado distinto:</p><ul><li><b>Técnicas secas</b>: lápiz de grafito, lápices de colores, carboncillo, ceras, pastel.</li><li><b>Técnicas húmedas</b>: <b>acuarela</b> (transparente, con agua), <b>témpera</b> o gouache (opaca, mate), <b>acrílico</b> (seca rápido, muy resistente), <b>óleo</b> (pigmentos con aceite, seca lento y permite fundir colores; la técnica de los grandes maestros desde el siglo XV).</li><li><b>Técnicas mixtas</b>: collage, esgrafiado, técnicas digitales.</li></ul><p>En escultura se trabaja <b>tallando</b> (quitar material de la piedra o la madera), <b>modelando</b> (añadir barro o plastilina) o <b>fundiendo</b> (verter metal líquido, como el bronce, en un molde).</p>`,
    },
    {
      html: `<h3>¿Qué es el patrimonio?</h3><p>El <b>patrimonio</b> es el conjunto de bienes que <b>heredamos</b> de quienes vivieron antes y que queremos <b>transmitir</b> a las generaciones futuras. Nos ayuda a entender quiénes somos.</p><ul><li><b>Patrimonio cultural material</b>: se puede tocar. <b>Inmueble</b> (no se mueve: catedrales, castillos, acueductos, cascos históricos) y <b>mueble</b> (se puede trasladar: cuadros, esculturas, libros, objetos arqueológicos).</li><li><b>Patrimonio cultural inmaterial</b>: tradiciones vivas que se transmiten de persona a persona: música, danzas, fiestas, oficios artesanos, gastronomía, lenguas.</li><li><b>Patrimonio natural</b>: paisajes, espacios y especies de gran valor, como el Parque Nacional de Doñana o el Teide.</li></ul>`,
      svg: svg("Tres tipos de patrimonio: material (un edificio), inmaterial (una nota musical y figuras bailando) y natural (montaña y árbol)", `<path d="M30 100 V 64 L 60 44 L 90 64 V 100 Z" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/><rect x="52" y="76" width="16" height="24" fill="var(--pen)" fill-opacity=".5"/>${t(60, 124, "material", { s: 11, c: "var(--pen)" })}<path d="M122 90 V 52 L 146 46 V 84" fill="none" stroke="var(--red)" stroke-width="3"/><ellipse cx="116" cy="90" rx="8" ry="6" fill="var(--red)"/><ellipse cx="140" cy="84" rx="8" ry="6" fill="var(--red)"/>${t(134, 124, "inmaterial", { s: 11, c: "var(--red)" })}<path d="M180 100 L 206 54 L 232 100 Z" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)" stroke-width="2"/><circle cx="222" cy="80" r="10" fill="var(--leaf)" fill-opacity=".5"/>${t(206, 124, "natural", { s: 11, c: "var(--leaf)" })}${t(130, 156, "herencia de todos", { c: "var(--muted)", s: 11 })}`),
      video: vb("artB"),
    },
    {
      html: `<h3>El patrimonio de la humanidad</h3><p>La <b>UNESCO</b> (organización de la ONU para la educación, la ciencia y la cultura) elabora listas de bienes de <b>valor universal</b>. España es uno de los países con más bienes inscritos. Algunos ejemplos:</p>${tabla(["Tipo", "Ejemplos en España"], [["Cultural material", "Cueva de Altamira, Alhambra, Mezquita de Córdoba, acueducto de Segovia, obras de Gaudí"], ["Natural", "Parque Nacional de Doñana, Teide, Garajonay"], ["Inmaterial", "flamenco, castells, la dieta mediterránea, el silbo gomero, la Patum de Berga"]])}<p>También cada comunidad autónoma y cada localidad protegen su <b>patrimonio local</b>: una ermita, un puente romano, una fiesta tradicional o un oficio artesano.</p>`,
      video: vb("artB2"),
    },
    {
      html: `<h3>Museos y conservación</h3><p>Los <b>museos</b> conservan, investigan y exponen obras para que todos podamos disfrutarlas. En España destacan el <b>Museo del Prado</b>, el <b>Reina Sofía</b> y el <b>Thyssen-Bornemisza</b> en Madrid, el <b>MNAC</b> y el <b>Museo Picasso</b> en Barcelona o el <b>Guggenheim</b> en Bilbao. Muchos ofrecen visitas virtuales gratuitas.</p><p>Todos podemos ayudar a <b>proteger el patrimonio</b>:</p><ul><li>No pintar, rayar ni tocar monumentos y obras.</li><li>Respetar las normas de los museos (sin flash, sin comida).</li><li>Valorar y participar en las tradiciones de tu entorno.</li><li>Informar si ves daños o abandono.</li></ul><p>Los <b>restauradores</b> son profesionales que reparan las obras dañadas con técnicas científicas, respetando el original.</p>`,
    },
    {
      html: `<h3>Cómo analizar una obra de arte</h3><p>Para comentar una obra puedes seguir esta <b>ficha</b>:</p><ol><li><b>Identificación</b>: título, autor, fecha, técnica, tamaño y lugar donde está.</li><li><b>Descripción</b> (lectura objetiva): ¿qué se ve? Personajes, objetos, paisaje.</li><li><b>Análisis formal</b>: elementos visuales (línea, color, luz, textura), composición, plano y punto de vista.</li><li><b>Interpretación</b> (lectura subjetiva): ¿qué quiere transmitir? ¿Qué significado tiene en su época?</li><li><b>Opinión personal</b>: ¿qué te sugiere a ti? ¿Por qué te gusta o no?</li></ol><p>Analizar obras te ayuda a mirar con más atención y a usar esos recursos en tus propios trabajos.</p>`,
    },
  ],
  figura: {
    titulo: "El arte y el patrimonio en un vistazo",
    svg: filas("Resumen: el arte expresa; disciplinas artísticas; géneros de la pintura; técnicas secas y húmedas; patrimonio material, inmaterial y natural; UNESCO; museos; ficha de análisis", [["Arte", "expresar ideas y emociones", "var(--pen)"], ["Disciplinas", "arquitectura · escultura · pintura…", "var(--inf)"], ["Géneros", "retrato · paisaje · bodegón…", "var(--sun)"], ["Patrimonio", "material · inmaterial · natural", "var(--leaf)"], ["Protegerlo", "UNESCO · museos · respeto", "var(--red)"], ["Analizar", "identificar · describir · interpretar", "var(--ink)"]], 200),
  },
  video: vg("artV"),
  quiz: mezcla([
    { q: "La disciplina que crea obras en tres dimensiones es…", o: ["la escultura", "la pintura", "el grabado"], a: 0, e: "Volumen." },
    { q: "Un cuadro de frutas y objetos es un…", o: ["bodegón", "paisaje", "retrato"], a: 0, e: "Naturaleza muerta." },
    { q: "Cuando el artista se pinta a sí mismo hace un…", o: ["autorretrato", "bodegón", "paisaje"], a: 0, e: "Retrato propio." },
    { q: "La pintura transparente que se diluye con agua es la…", o: ["acuarela", "óleo", "cera"], a: 0, e: "Transparente." },
    { q: "Quitar material a un bloque de piedra es…", o: ["tallar", "modelar", "fundir"], a: 0, e: "Escultura sustractiva." },
    { q: "El flamenco es patrimonio…", o: ["inmaterial", "natural", "mueble"], a: 0, e: "Tradición viva." },
    { q: "Una catedral es patrimonio material…", o: ["inmueble", "mueble", "inmaterial"], a: 0, e: "No se puede mover." },
    { q: "El Parque Nacional de Doñana es patrimonio…", o: ["natural", "inmaterial", "mueble"], a: 0, e: "Espacio natural." },
    { q: "¿Qué organismo elabora la lista del Patrimonio Mundial?", o: ["la UNESCO", "la FIFA", "el Museo del Prado"], a: 0, e: "ONU." },
    { q: "En el análisis de una obra, «¿qué se ve?» corresponde a la…", o: ["descripción", "opinión personal", "identificación"], a: 0, e: "Lectura objetiva." },
  ]),
  examen: mezcla([
    { q: "La técnica de los grandes maestros, con pigmentos y aceite, es…", o: ["el óleo", "la témpera", "el pastel"], a: 0, e: "Desde el siglo XV." },
    { q: "Un cuadro en un museo es patrimonio…", o: ["mueble", "inmueble", "inmaterial"], a: 0, e: "Se puede trasladar." },
    { q: "Los castells son patrimonio…", o: ["inmaterial", "natural", "inmueble"], a: 0, e: "Tradición catalana." },
  ]),
  feynman: ["Para qué ha servido el arte a lo largo de la historia", "Cuáles son las disciplinas artísticas", "Los géneros de la pintura con un ejemplo", "Tipos de patrimonio con ejemplos", "Los pasos para analizar una obra de arte"],
  mapa: mapa("ARTE Y PATRIMONIO", "var(--eso)", [
    ["Disciplinas", "arquitectura · escultura · pintura", "var(--pen)"],
    ["Géneros y técnicas", "retrato · óleo · acuarela", "var(--sun)"],
    ["Patrimonio", "material · inmaterial · natural", "var(--leaf)"],
    ["Analizar", "ficha de comentario", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Arte", "Creación humana para expresar ideas y emociones."],
    ["Escultura", "Obra en tres dimensiones."],
    ["Bodegón", "Pintura de objetos inanimados."],
    ["Óleo", "Pintura de pigmentos con aceite."],
    ["Patrimonio material", "Bienes que se pueden tocar (inmuebles y muebles)."],
    ["Patrimonio inmaterial", "Tradiciones vivas: música, danza, fiestas."],
    ["UNESCO", "Organismo que declara el Patrimonio de la Humanidad."],
    ["Restaurador", "Profesional que repara obras respetando el original."],
  ],
  familias: ["Visitad un museo o un monumento cercano (o una visita virtual) y elegid cada uno una obra favorita.", "Haced una lista del patrimonio de vuestra localidad: edificios, fiestas, oficios.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Manifestaciones artísticas, géneros y técnicas; patrimonio cultural y natural, su valoración y conservación; análisis de obras (RD 217/2022, Educación Plástica, Visual y Audiovisual, patrimonio artístico y cultural).",
    ideas: ["Visita virtual al Museo del Prado con ficha de análisis.", "Mapa del patrimonio del municipio.", "Recrear una obra famosa con fotografía (tableau vivant)."],
  },
  fuentes: [RD, { t: "UNESCO: Patrimonio Mundial en España", url: "https://whc.unesco.org/es/estadosparte/es" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Clasifica: la Sagrada Familia, el Guernica, la Patum de Berga y el Teide.", pasos: ["Sagrada Familia: arquitectura, patrimonio material inmueble.", "Guernica: pintura, patrimonio material mueble.", "Patum: fiesta, patrimonio inmaterial. Teide: patrimonio natural."], resultado: "Inmueble, mueble, inmaterial y natural." },
    { enunciado: "Haz la ficha de identificación de Las Meninas.", pasos: ["Título: Las Meninas (La familia de Felipe IV). Autor: Diego Velázquez.", "Fecha: 1656. Técnica: óleo sobre lienzo.", "Lugar: Museo del Prado, Madrid."], resultado: "Ficha de identificación completa." },
    { enunciado: "Describe y analiza un paisaje inventado: un mar en calma al atardecer.", pasos: ["Descripción: mar, cielo, sol bajo, una barca pequeña.", "Análisis: formato horizontal, líneas horizontales, gama cálida en el cielo y fría en el agua.", "Interpretación: transmite calma y nostalgia."], resultado: "Comentario en tres niveles." },
  ],
  errores: [
    "Pensar que solo es arte lo que está en un museo.",
    "Confundir patrimonio mueble (se traslada) con inmueble (fijo).",
    "Creer que el patrimonio solo son monumentos (también son fiestas, oficios y paisajes).",
    "Mezclar en el comentario la descripción con la opinión.",
  ],
  ejercicios: [
    { q: "Escribe un ejemplo de cada disciplina artística.", sol: "Respuesta abierta: por ejemplo, el acueducto de Segovia, el Discóbolo, Las Meninas, un grabado de Goya, una vasija de cerámica, una película." },
    { q: "Clasifica por géneros: un cuadro de un jarrón con flores, uno de una batalla y uno de una montaña.", sol: "Bodegón, pintura de historia y paisaje." },
    { q: "¿Qué diferencia hay entre la acuarela y la témpera?", sol: "La acuarela es transparente; la témpera es opaca." },
    { q: "Explica las tres formas de hacer una escultura.", sol: "Tallar (quitar), modelar (añadir) y fundir (verter metal en un molde)." },
    { q: "Escribe dos ejemplos de patrimonio inmaterial de tu comunidad autónoma.", sol: "Respuesta abierta: una fiesta, una danza, un oficio artesano…" },
    { q: "Busca tres bienes españoles declarados Patrimonio de la Humanidad y di de qué tipo son.", sol: "Respuesta abierta." },
    { q: "Escribe cinco normas para cuidar el patrimonio.", sol: "No rayar ni tocar, no usar flash, no tirar basura, respetar las tradiciones, avisar de daños." },
    { q: "Haz la ficha de análisis completa de una obra que te guste.", sol: "Respuesta abierta siguiendo los cinco pasos." },
    { q: "Haz un autorretrato con la técnica que prefieras.", sol: "Respuesta práctica." },
    { q: "Elige un monumento de tu localidad y diseña un cartel para darlo a conocer.", sol: "Respuesta práctica." },
  ],
};
