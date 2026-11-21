// Artes Escénicas I, 1º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ae");

module.exports = B.tema({
  titulo: "El montaje escénico",
  minutos: 60,
  objetivos: [
    "Conocer las fases de un montaje escénico, de la idea al estreno",
    "Identificar los equipos artístico, técnico y de producción y sus funciones",
    "Organizar un calendario de ensayos y los ensayos técnico y general",
    "Planificar y evaluar un montaje escénico de aula",
  ],
  claves: ["montaje", "producción", "ensayo", "ensayo general", "regiduría", "estreno", "dramaturgia", "gira"],
  pregunta: {
    texto: "¿Cuántas personas hacen falta para que una obra de una hora llegue al escenario?",
    respuesta: "Muchas más de las que se ven. Detrás de los intérpretes hay <mark>equipos artísticos, técnicos y de producción</mark> que trabajan durante meses. El <b>montaje escénico</b> es ese proceso organizado de la idea al estreno.",
  },
  lectura: {
    titulo: "Diez semanas para el estreno",
    html: `<p>El grupo de teatro del instituto decide en octubre montar una adaptación de <i>El sí de las niñas</i> para la semana cultural de enero. La primera reunión es caótica: todos quieren actuar y nadie quiere ocuparse de las luces. La profesora propone repartir equipos y hacer un calendario en la pared.</p>
    <p>Hay semanas de lectura, de ensayos por escenas, de construcción del decorado con cartón y de pruebas de vestuario. Una alumna se convierte en regidora: lleva el cuaderno, avisa de las entradas y da las órdenes de luz. El día del estreno todo sale casi perfecto. Al final, al saludar, los actores piden un aplauso para el equipo técnico, y el público descubre que eran la mitad del grupo.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es un montaje escénico",
      html: `<p>Un <b>montaje escénico</b> es el proceso completo para crear y representar un espectáculo: desde la elección de la obra o la idea hasta el estreno, las funciones y la valoración final. Es, en el fondo, un <b>proyecto</b> artístico con objetivos, equipo, recursos, calendario y un resultado ante el público.</p>
      <p>Se suele dividir en tres grandes etapas: <b>preproducción</b> (elegir, adaptar, diseñar y planificar), <b>producción</b> (ensayar y construir) y <b>exhibición</b> (estrenar, representar y, a veces, salir de gira).</p>`,
      svg: B.flujo("Etapas de un montaje", ["Preproducción: elegir, diseñar, planificar", "Producción: ensayar y construir", "Exhibición: estreno y funciones", "Valoración final"]),
    },
    {
      h: "Elegir y adaptar el texto",
      html: `<p>Todo empieza por decidir <b>qué</b> se va a montar: un texto dramático existente, una adaptación de una novela o un cuento, o una <b>creación colectiva</b> a partir de improvisaciones. Hay que tener en cuenta el número de intérpretes, el tiempo, el espacio y el público al que se dirige.</p>
      <p>La <b>dramaturgia</b> es el trabajo de adaptar el texto a ese montaje concreto: recortar escenas, unir o eliminar personajes, actualizar el lenguaje o escribir partes nuevas. En una obra protegida por derechos de autor hay que pedir permiso o pagar a la sociedad de autores.</p>`,
      svg: B.cajas("Puntos de partida", [["Texto teatral", "obra existente"], ["Adaptación", "novela, cuento, cine"], ["Creación colectiva", "desde improvisaciones"], ["Idea o tema", "teatro documental"]]),
      video: { id: "6oudFJm_2Uk", titulo: "Curso virtual: conceptos básicos de dramaturgia (1/3)", canal: "cultura24.tv", vistas: 124389 },
    },
    {
      h: "Los equipos",
      html: `<p>En un montaje trabajan tres grandes equipos. El <b>artístico</b>: dirección, intérpretes, dramaturgia, escenografía, vestuario, iluminación, música y coreografía. El <b>técnico</b>: maquinistas, eléctricos, sonido, sastrería, peluquería y regiduría. Y el de <b>producción</b>, que gestiona el dinero, los contratos, el calendario, los espacios y la difusión.</p>
      <p>En un grupo de aula, cada persona puede asumir más de un papel, pero conviene que todos sepan claramente <b>qué responsabilidad</b> tienen.</p>`,
      svg: B.rejilla("Equipos de un montaje", ["Equipo", "Quiénes", "Qué hacen"], [["Artístico", "dirección, intérpretes", "crean la obra"], ["Diseño", "escenografía, luz", "crean la imagen"], ["Técnico", "maquinaria, sonido", "hacen que funcione"], ["Producción", "gestión, difusión", "dinero y calendario"]]),
    },
    {
      h: "Producción: recursos y calendario",
      html: `<p>La <b>producción</b> convierte la idea en algo posible. Elabora un <b>presupuesto</b> (decorados, vestuario, derechos, alquileres, publicidad), busca la <b>financiación</b> (taquilla, subvenciones, patrocinio) y fija el <b>calendario</b> desde el primer ensayo hasta el estreno.</p>
      <p>El calendario se planifica hacia atrás: se parte de la fecha del estreno y se reparten las semanas de ensayos, construcción, pruebas técnicas y difusión. Prever con tiempo evita las prisas de última hora y deja margen para imprevistos: una baja, un decorado que no llega o un ensayo que hay que repetir.</p>`,
      svg: B.barras("Calendario orientativo de un montaje de aula (semanas)", [["Lectura y diseño", 2], ["Ensayos por escenas", 4], ["Pasadas completas", 2], ["Técnico y general", 1], ["Funciones", 1]]),
    },
    {
      h: "El proceso de ensayos",
      html: `<p>Los ensayos siguen un orden lógico. Primero, la <b>lectura</b> en grupo y el análisis del texto («ensayos de mesa»). Después, el <b>montaje por escenas</b>, en el que se fija el trazo y se trabaja cada personaje. Más tarde llegan las <b>pasadas</b>, que repiten la obra entera para ganar ritmo y memoria.</p>
      <p>En cada ensayo conviene empezar con un <b>calentamiento</b>, trabajar con concentración y terminar con las <b>notas</b> del director. Hay que llegar con el texto aprendido a partir de la fecha acordada.</p>`,
      svg: B.flujo("Fases de los ensayos", ["Ensayos de mesa: leer y analizar", "Montaje por escenas: trazo y personajes", "Pasadas completas: ritmo y memoria", "Ensayo técnico", "Ensayo general"]),
    },
    {
      h: "Ensayo técnico, ensayo general y regiduría",
      html: `<p>En el <b>ensayo técnico</b> se ajustan los efectos de luz y sonido, los cambios de decorado y de vestuario, sin preocuparse tanto por la interpretación. El <b>ensayo general</b> es una función completa, sin paradas, con todo como el día del estreno; a veces con público invitado.</p>
      <p>Durante las funciones, el <b>regidor</b> o regidora dirige la representación desde un lateral con el <b>cuaderno de regiduría</b>: avisa a los intérpretes de sus entradas y da las órdenes («¡va luz!», «¡va telón!») a los técnicos en el momento exacto.</p>`,
      svg: B.cajas("Funciones de la regiduría", [["Cuaderno", "todo anotado"], ["Avisos", "entradas y salidas"], ["Órdenes", "luz, sonido, telón"], ["Orden", "que la función fluya"]]),
      video: { id: "L4FlKxFV7K4", titulo: "Oficios en el teatro. Regiduría", canal: "Festival de Almagro", vistas: 9987 },
    },
    {
      h: "Difusión, estreno y funciones",
      html: `<p>Para que haya público hay que <b>darlo a conocer</b>: cartel, programa de mano, notas de prensa, redes sociales y un pequeño vídeo o <i>teaser</i>. El <b>programa de mano</b> recoge el título, el autor, el reparto y el equipo.</p>
      <p>El <b>estreno</b> es la primera función ante el público. Después vienen las funciones siguientes y, en las compañías profesionales, la <b>gira</b> por otros teatros. Antes de cada función hay tareas fijas: revisar decorado, utilería y efectos, calentar y concentrarse. Al terminar, el <b>saludo</b> agradece al público y reconoce a todo el equipo.</p>`,
      svg: B.cajas("Difundir el espectáculo", [["Cartel", "imagen y datos"], ["Programa", "reparto y equipo"], ["Redes", "teaser y fotos"], ["Prensa", "nota y entrevistas"]]),
    },
    {
      h: "Evaluar el montaje",
      html: `<p>Al terminar conviene <b>valorar</b> el proceso y el resultado: qué funcionó, qué se podría mejorar, cómo respondió el público y cómo trabajó el equipo. Se puede hacer con un debate, una rúbrica o un cuestionario al público.</p>
      <p>Todo el material (textos, bocetos, fotos, vídeo, cuaderno de dirección y de regiduría) forma el <b>dosier</b> o memoria del montaje. Sirve para aprender, para presentar el trabajo a un festival o a una convocatoria y para recordar una experiencia colectiva única.</p>`,
      svg: B.ciclo("Mejora continua del montaje", "montaje", ["Planificar", "Ensayar", "Representar", "Evaluar"]),
    },
  ],
  figura: {
    titulo: "El montaje escénico en cuatro claves",
    items: [["Proyecto", "▣", "de la idea", "al estreno"], ["Equipos", "♣", "artístico, técnico", "y producción"], ["Ensayos", "↻", "mesa, escenas,", "pasadas"], ["Estreno", "★", "funciones", "y valoración"]],
  },
  video: { id: "zJ_fzmHUIuI", titulo: "Teatro: guion, director, escenografía, actores", canal: "Rocio Carreon", vistas: 316300 },
  quiz: [
    ["El montaje escénico es…", ["solo el ensayo general", "el proceso completo de la idea a las funciones", "el decorado", "la taquilla"], 1, "Un proyecto con fases."],
    ["La preproducción incluye…", ["las funciones", "elegir, diseñar y planificar", "la gira", "los aplausos"], 1, "Primera etapa."],
    ["La dramaturgia en un montaje consiste en…", ["vender entradas", "adaptar el texto a ese montaje concreto", "iluminar", "coser el vestuario"], 1, "Recortar, unir, actualizar."],
    ["El equipo de producción se ocupa de…", ["interpretar", "dinero, contratos, calendario y difusión", "maquillar", "componer la música"], 1, "Hace posible el montaje."],
    ["El calendario de un montaje se planifica…", ["desde el estreno hacia atrás", "al azar", "después del estreno", "solo la última semana"], 0, "Se parte de la fecha final."],
    ["Los «ensayos de mesa» son…", ["ensayos con muebles", "lectura y análisis del texto en grupo", "ensayos técnicos", "funciones"], 1, "Primera fase de ensayos."],
    ["Una pasada es…", ["un ensayo de la obra completa", "un error", "un cambio de luz", "un tipo de telón"], 0, "Gana ritmo y memoria."],
    ["En el ensayo técnico se ajustan sobre todo…", ["los personajes", "luces, sonido y cambios", "las entradas", "el texto"], 1, "Parte técnica."],
    ["Quien da las órdenes de luz y avisa de las entradas durante la función es…", ["el director", "el regidor", "el productor", "el figurinista"], 1, "Regiduría."],
    ["El programa de mano recoge…", ["el presupuesto", "título, autor, reparto y equipo", "las notas del director", "el horario de ensayos"], 1, "Se entrega al público."],
  ],
  examen: [
    ["Un grupo inventa una obra a partir de improvisaciones sobre el acoso escolar. Es…", ["una adaptación de novela", "una creación colectiva", "un texto clásico", "una ópera"], 1, "Parte de la improvisación del grupo."],
    ["Queda una semana para el estreno y nunca se ha hecho la obra entera seguida. Falta…", ["la lectura", "hacer pasadas completas", "elegir el texto", "el cartel"], 1, "Pasadas."],
    ["Durante una función, un cambio de luz llega tarde. ¿Quién coordina ese momento?", ["El regidor", "El autor", "El público", "El figurinista"], 0, "Da las órdenes técnicas."],
    ["Una función completa, sin paradas, con todo como en el estreno, es…", ["el ensayo de mesa", "el ensayo general", "una pasada de texto", "el ensayo técnico"], 1, "Ensayo general."],
    ["Recoger fotos, bocetos, cuadernos y vídeo al final sirve para…", ["nada", "elaborar el dosier o memoria del montaje", "vender el decorado", "repetir el casting"], 1, "Evaluar y presentar el trabajo."],
  ],
  feynman: ["Qué etapas tiene un montaje escénico", "Qué hace cada equipo", "Cómo se ordenan los ensayos", "Qué hace la regiduría"],
  mapa: ["EL MONTAJE ESCÉNICO", [["Etapas", "preproducción · producción · exhibición"], ["Equipos", "artístico · técnico · producción"], ["Ensayos", "mesa · escenas · pasadas · técnico · general"], ["Funciones", "difusión · estreno · regiduría · evaluación"]]],
  tarjetas: [
    ["Montaje escénico", "Proceso completo para crear y representar un espectáculo."],
    ["Dramaturgia", "Adaptación del texto a un montaje concreto."],
    ["Creación colectiva", "Obra creada por el grupo a partir de improvisaciones."],
    ["Producción", "Gestión de recursos, dinero, calendario y difusión."],
    ["Pasada", "Ensayo de la obra completa."],
    ["Ensayo general", "Última prueba completa, sin paradas, como el estreno."],
    ["Regidor", "Persona que dirige la función desde el lateral y da las órdenes."],
    ["Estreno", "Primera representación ante el público."],
  ],
  ejemplos: [
    ["Planifica hacia atrás un montaje que se estrena el 20 de marzo con 10 semanas de trabajo.", ["Semana 10 (estreno): ensayo técnico, general y funciones.", "Semanas 7-9: pasadas completas, construcción terminada y difusión.", "Semanas 1-6: lectura, diseño, montaje por escenas y texto aprendido en la semana 5."], "Calendario con hitos claros desde el estreno hacia atrás."],
    ["Reparte tareas en un grupo de 12 para un montaje de aula.", ["Artístico: dirección (1) e intérpretes (6).", "Técnico: luz y sonido (2), escenografía y utilería (1).", "Producción y regiduría: producción y difusión (1), regiduría (1)."], "Cada persona sabe su responsabilidad; todos colaboran en la construcción."],
    ["Escribe tres órdenes del cuaderno de regiduría para el final de la obra.", ["«Atención luz 24, atención telón.»", "Al pie «…y nunca volvió»: «¡Va luz 24!» (oscuro).", "Tras dos segundos: «¡Va telón!» y luz de saludos."], "Avisos previos y órdenes en el pie exacto."],
  ],
  errores: [
    "Empezar a ensayar sin calendario ni reparto de responsabilidades.",
    "Dejar el ensayo técnico para el mismo día del estreno.",
    "Olvidar la difusión y encontrarse la sala vacía.",
    "No evaluar ni documentar el proceso al terminar.",
  ],
  ejercicios: {
    b: [
      ["Nombra las tres etapas de un montaje.", "Preproducción, producción y exhibición (y valoración final)."],
      ["¿Qué tres equipos intervienen?", "Artístico, técnico y de producción."],
      ["Ordena: ensayo general, ensayos de mesa, pasadas, montaje por escenas, ensayo técnico.", "Ensayos de mesa, montaje por escenas, pasadas, ensayo técnico y ensayo general."],
      ["¿Qué es el estreno?", "La primera representación de un espectáculo ante el público."],
    ],
    m: [
      ["Explica qué es la dramaturgia en un montaje y pon dos ejemplos de cambios.", "Adaptar el texto al montaje: recortar escenas, unir personajes, actualizar el lenguaje o escribir partes nuevas."],
      ["Diferencia ensayo técnico y ensayo general.", "El técnico ajusta luz, sonido y cambios con paradas; el general es una función completa sin paradas, como el estreno."],
      ["¿Qué hace el regidor durante la función?", "Lleva el cuaderno, avisa a los intérpretes de sus entradas y da las órdenes de luz, sonido y telón en el momento exacto."],
      ["¿Por qué se planifica el calendario desde el estreno hacia atrás?", "Porque la fecha de estreno es fija y así se reparten las semanas necesarias para cada fase sin dejar nada para el final."],
    ],
    a: [
      ["Elabora el plan de producción de un montaje de aula: obra, equipo, presupuesto sencillo y calendario.", "Respuesta abierta. Debe ser realista y coherente con los recursos del centro."],
      ["Tras una representación, redacta una evaluación del proceso y del resultado con tres aciertos y tres mejoras.", "Respuesta abierta. Se valora la autocrítica razonada sobre equipo, ensayos y función."],
    ],
  },
  glosario: [
    ["Preproducción", "Etapa de elección, diseño y planificación del montaje."],
    ["Reparto", "Lista de intérpretes y de los personajes que hacen."],
    ["Casting", "Selección de intérpretes para los papeles."],
    ["Cuaderno de regiduría", "Texto anotado con todas las entradas y efectos de la función."],
    ["Pie", "Palabra o acción que da paso a una réplica o a un efecto."],
    ["Teaser", "Vídeo breve de promoción del espectáculo."],
    ["Gira", "Serie de funciones en distintos teatros o ciudades."],
    ["Dosier", "Documento que recoge todo el proceso y los materiales de un montaje."],
  ],
  situacion: {
    titulo: "Montamos nuestra obra",
    reto: "Organizar en grupo el montaje completo de una pieza breve para el centro.",
    pasos: [
      "Elegid o cread un texto de 10 a 15 minutos y adaptadlo al grupo.",
      "Repartid equipos y haced un calendario desde la fecha del estreno.",
      "Ensayad por fases hasta el ensayo técnico y el general.",
      "Estrenad ante el público, con cartel y programa de mano, y evaluad el proceso.",
    ],
    producto: "Montaje representado, cartel, programa de mano y dosier con la evaluación.",
    evaluacion: [
      "El calendario se cumple.",
      "Cada equipo realiza su función.",
      "La función es fluida (regiduría y técnica).",
      "La evaluación final es honesta y propone mejoras.",
    ],
  },
  familias: [
    "Acudid al estreno de su grupo de teatro.",
    "Ayudadle a organizar su calendario de ensayos y estudio.",
    "Colaborad con materiales de reciclaje para decorados o vestuario.",
    "Preguntadle por su papel en el equipo, no solo si actúa.",
  ],
  saberes: "El montaje escénico como proyecto: etapas (preproducción, producción, exhibición); elección y dramaturgia del texto; equipos artístico, técnico y de producción; presupuesto y calendario; proceso de ensayos, ensayo técnico y general; regiduría; difusión, estreno y funciones; evaluación y dosier.",
  ideas: [
    "Montar una pieza breve con todos los roles repartidos.",
    "Visita técnica a un teatro y charla con un regidor.",
    "Crear el cartel y el programa de mano en clase de artes.",
    "Grabar el montaje y valorarlo con una rúbrica común.",
  ],
  fuentes: [
    { t: "Regidor teatral, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Regidor_(teatro)" },
    { t: "Festival Internacional de Teatro Clásico de Almagro", url: "https://www.festivaldealmagro.com" },
  ],
});
