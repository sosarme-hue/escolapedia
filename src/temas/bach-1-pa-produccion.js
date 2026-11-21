// Proyectos Artísticos, 1º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");
const { marco, t, ln, rc, pa } = B;

// Ampliar con cuadrícula: el boceto pequeño y la pared con la misma retícula.
const reticula = (() => {
  const g = (x, y, w, h, n) => { let s = rc(x, y, w, h, 'fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"'); for (let i = 1; i < n; i++) s += ln(x + (w * i) / n, y, x + (w * i) / n, y + h, "var(--line)", 1) + ln(x, y + (h * i) / n, x + w, y + (h * i) / n, "var(--line)", 1); return s; };
  return marco("Ampliar por cuadrícula: la misma retícula en el boceto y en la pared",
    `${g(14, 54, 60, 60, 4)}${pa("M20 104 Q44 60 68 76", 'fill="none" stroke="var(--red)" stroke-width="2.5"')}
    ${g(110, 18, 138, 138, 4)}${pa("M124 140 Q180 40 236 76", 'fill="none" stroke="var(--red)" stroke-width="4"')}
    ${pa("M80 84 H102", 'stroke="var(--muted)" stroke-width="2"')}${pa("M98 80 L104 84 L98 88", 'fill="none" stroke="var(--muted)" stroke-width="2"')}
    ${t(44, 132, "boceto", { fs: 10, color: "var(--muted)" })}${t(179, 172, "pared (×4)", { fs: 10, color: "var(--muted)" })}`);
})();

module.exports = B.tema({
  titulo: "La producción",
  minutos: 60,
  objetivos: [
    "Organizar la fase de producción: espacio, tareas y seguimiento",
    "Pasar del boceto a la obra mediante pruebas, maquetas y cambios de escala",
    "Aplicar técnicas básicas de producción según el tipo de obra",
    "Documentar el proceso y resolver imprevistos con criterio",
  ],
  claves: ["producción", "prueba", "escala", "cuadrícula", "acabado", "seguimiento", "documentación", "imprevisto"],
  pregunta: {
    texto: "Si el boceto ha quedado perfecto, ¿la obra ya está hecha?",
    respuesta: "Ni mucho menos. Al pasar al tamaño y al material reales aparecen problemas nuevos: escala, peso, tiempo de secado, luz. La producción es el momento de <mark>resolverlos</mark> sin perder la idea.",
  },
  lectura: {
    titulo: "Los ayudantes de Rubens",
    html: `<p>En el siglo XVII, el pintor Pedro Pablo Rubens recibía tantos encargos que organizó su taller de Amberes casi como una empresa. Él hacía los bocetos al óleo y decidía la composición; sus ayudantes, cada uno especialista en algo (paisajes, animales, telas), pasaban el diseño al lienzo grande; y al final Rubens daba los últimos toques.</p>
    <p>Hoy muchos artistas trabajan igual: idean y coordinan, y la obra se produce con un equipo o con talleres especializados. Lo que no cambia es que la producción necesita <b>organización</b>, <b>pruebas</b> y alguien que vigile que el resultado siga siendo fiel a la idea.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Preparar la producción",
      html: `<p>Antes de empezar, conviene revisar que todo está listo: <b>propuesta aprobada</b>, <b>materiales</b> comprados o reunidos, <b>permisos</b> concedidos, <b>espacio</b> preparado y <b>calendario</b> de sesiones con las tareas de cada persona.</p>
      <p>El espacio de trabajo debe estar ordenado: una zona limpia para la obra, otra para materiales y herramientas, protección del suelo y buena ventilación y luz. Un taller ordenado es más seguro y más rápido. Al final de cada sesión se dedican diez minutos a limpiar herramientas, guardar materiales y dejar el espacio listo para la siguiente: parece tiempo perdido, pero ahorra mucho más al día siguiente.</p>`,
      svg: B.flujo("Lista de comprobación antes de producir", ["Propuesta aprobada", "Materiales reunidos", "Permisos concedidos", "Espacio protegido y ventilado", "Calendario y tareas"]),
    },
    {
      h: "De la prueba a la obra",
      html: `<p>Nunca se empieza directamente por la obra definitiva. Primero se hacen <b>pruebas de material</b> (cómo se comporta la pintura en ese soporte, cuánto tarda en secar), <b>pruebas de color</b> y, en obras de volumen, una <b>maqueta</b> a escala.</p>
      <p>Las pruebas se guardan y se etiquetan con fecha y resultado. Muchas veces descubren cosas que mejoran la idea: un efecto inesperado, una textura, un color que funciona mejor que el previsto.</p>`,
      svg: B.ciclo("Prueba, observa, ajusta", "obra", ["Probar", "Observar", "Anotar", "Ajustar"]),
    },
    {
      h: "Cambiar de escala",
      html: `<p>Pasar de un boceto pequeño a una obra grande es uno de los retos de la producción. El método clásico es la <b>cuadrícula</b>: se divide el boceto en cuadrados iguales y la superficie final en el mismo número de cuadrados, más grandes, y se copia lo que hay en cada uno.</p>
      <p>Otras opciones son <b>proyectar</b> la imagen con un proyector sobre la pared, usar <b>plantillas</b> o la técnica del <b>doodle grid</b> (garabatos en la pared que sirven de referencia). Al cambiar de escala, conviene mirar la obra desde lejos con frecuencia. Lo que funciona en un papel de 20 centímetros puede quedar vacío o recargado en una pared de cuatro metros: a veces hay que añadir o quitar elementos al ampliar.</p>`,
      svg: reticula,
      video: { id: "3id4FnznOgU", titulo: "¿Cómo trazar un mural? Doodle Grid", canal: "Nahual arte & oficio", vistas: 109280 },
    },
    {
      h: "Producir obras planas e instalaciones",
      html: `<p>En la <b>obra plana</b> (pintura, mural, grabado, ilustración) el orden suele ser: preparar el soporte (imprimación), trasladar el dibujo, aplicar las manchas grandes de color de fondo a figura y terminar con detalles y luces.</p>
      <p>En la <b>instalación</b> se piensa el recorrido del espectador: se marcan en el suelo las posiciones, se resuelven anclajes, cables y luz, y se monta primero en seco para comprobar que todo encaja. La seguridad del público es prioritaria: nada que pueda caer, cortar o hacer tropezar.</p>`,
      svg: B.comparar("Orden de trabajo", ["Obra plana", ["preparar soporte", "trasladar dibujo", "manchas grandes", "detalles y luces"]], ["Instalación", ["marcar el espacio", "anclajes y cables", "montaje en seco", "luz y seguridad"]]),
    },
    {
      h: "Producir volumen, audiovisual y acción",
      html: `<p>En la <b>escultura</b> se pasa de la maqueta a la pieza final por modelado (añadir), talla (quitar) o construcción (ensamblar piezas). En el <b>audiovisual</b> la producción se divide en <b>rodaje</b> y <b>posproducción</b> (montaje, sonido, color). En la <b>acción</b> o performance, producir es <b>ensayar</b>: tiempos, desplazamientos, vestuario y qué se registra.</p>
      <p>En todos los casos se trabaja de lo general a lo particular: primero la estructura, luego el detalle.</p>`,
      svg: B.cajas("Producción según el tipo de obra", [["Escultura", "modelar, tallar|o construir"], ["Audiovisual", "rodaje y|posproducción"], ["Acción", "ensayos y|registro"], ["Digital", "prototipo y|pruebas"]]),
      video: { id: "OuIf1dzMexM", titulo: "Así se hace: esculturas de mármol", canal: "SubconSub", vistas: 283441 },
    },
    {
      h: "Seguimiento y trabajo en equipo",
      html: `<p>Durante la producción hay que comprobar con frecuencia si se va al ritmo previsto. Una herramienta sencilla es el <b>tablero de tareas</b> con tres columnas: <b>por hacer</b>, <b>en marcha</b> y <b>hecho</b>. Cada tarea es un pósit con un responsable.</p>
      <p>Al empezar cada sesión, una reunión de cinco minutos: qué hice, qué haré hoy, qué me bloquea. Si el calendario se retrasa, se decide pronto qué recortar, en lugar de correr al final.</p>`,
      svg: B.rejilla("Tablero de tareas", ["Por hacer", "En marcha", "Hecho"], [["Barnizar", "Pintar fondo", "Imprimar"], ["Cartel", "Figura 2", "Trasladar dibujo"], ["Montaje", "", "Figura 1"]]),
    },
    {
      h: "Resolver imprevistos",
      html: `<p>Siempre surge algo: un material que no llega, una pieza que se rompe, alguien que enferma, una pared más húmeda de lo previsto. Ante un imprevisto, se siguen cuatro pasos: <b>parar y analizar</b> qué ha pasado, buscar <b>alternativas</b>, elegir la que menos afecte a la <b>intención</b> de la obra y <b>anotarlo</b> en el diario.</p>
      <p>Algunos accidentes acaban formando parte de la obra. La clave es que el cambio sea una <mark>decisión</mark>, no una rendición.</p>`,
      svg: B.flujo("Ante un imprevisto", ["Parar y analizar", "Buscar alternativas", "Elegir la que respeta la intención", "Anotar en el diario"]),
    },
    {
      h: "Documentar el proceso y el acabado",
      html: `<p>Documentar es fotografiar o grabar cada etapa desde el mismo punto de vista, guardar pruebas y bocetos y escribir en el diario las decisiones. Con ese material se puede hacer un <b>timelapse</b> o un pequeño vídeo del making of que ayudará en la difusión.</p>
      <p>El <b>acabado</b> también es producción: barnizar, enmarcar, limpiar bordes, poner cartela y comprobar que la obra se puede transportar y colgar. Una buena obra mal terminada pierde mucha fuerza.</p>`,
      svg: B.cajas("Documentar y terminar", [["Fotos", "mismo punto de vista"], ["Diario", "decisiones y fechas"], ["Making of", "timelapse o vídeo"], ["Acabado", "barniz, marco, cartela"]]),
    },
  ],
  figura: {
    titulo: "La producción en cuatro claves",
    items: [["Preparar", "☑", "materiales, permisos,", "espacio"], ["Probar", "↻", "pruebas y", "maquetas"], ["Escalar", "#", "cuadrícula o", "proyección"], ["Seguir", "▤", "tablero de", "tareas y diario"]],
  },
  video: { id: "ufyd9_00QZE", titulo: "Cómo plantear el dibujo para un mural de forma fácil y rápida", canal: "Pablo Ruarte", vistas: 250773 },
  quiz: [
    ["Antes de producir hay que tener…", ["solo los materiales", "propuesta aprobada, materiales, permisos, espacio y calendario", "la exposición montada", "el portfolio hecho"], 1, "Lista de comprobación."],
    ["¿Para qué sirven las pruebas de material?", ["Para gastar más", "Para ver cómo se comporta el material antes de la obra final", "Para exponerlas", "Para nada"], 1, "Evitan sorpresas."],
    ["El método de la cuadrícula sirve para…", ["mezclar colores", "cambiar de escala un dibujo", "hacer presupuestos", "grabar vídeo"], 1, "Ampliar con la misma retícula."],
    ["En la obra plana se suele trabajar…", ["del detalle a lo general", "de las manchas grandes a los detalles", "sin orden", "empezando por el barniz"], 1, "De lo general a lo particular."],
    ["Montar una instalación «en seco» significa…", ["sin agua", "probar el montaje completo antes del definitivo", "sin luz", "sin público"], 1, "Comprobar que todo encaja."],
    ["La talla es una técnica escultórica que…", ["añade material", "quita material", "pega piezas", "funde metal"], 1, "Como en el mármol."],
    ["En el audiovisual, la posproducción incluye…", ["el guion", "el montaje, el sonido y el color", "la búsqueda de referentes", "el presupuesto"], 1, "Después del rodaje."],
    ["Un tablero de tareas tiene las columnas…", ["gastos e ingresos", "por hacer, en marcha y hecho", "idea, forma y contexto", "S, C, A, M"], 1, "Seguimiento visual."],
    ["Ante un imprevisto, el primer paso es…", ["rendirse", "parar y analizar qué ha pasado", "ocultarlo", "empezar otra obra"], 1, "Luego buscar alternativas."],
    ["Un timelapse es…", ["un tipo de pincel", "una secuencia de fotos del proceso montada como vídeo rápido", "un permiso", "un marco"], 1, "Muestra el proceso."],
  ],
  examen: [
    ["Tu boceto mide 20 × 20 cm con 4 × 4 cuadros y la pared 2 × 2 m. ¿Cuánto mide cada cuadro en la pared?", ["5 cm", "20 cm", "50 cm", "2 m"], 2, "2 m entre 4 = 50 cm."],
    ["La pintura tarda el triple en secar en la pared. ¿Qué haces?", ["Nada", "Ajustar el calendario y anotarlo en el diario", "Usar más pintura", "Cambiar de proyecto"], 1, "Resolver y documentar."],
    ["Una pieza colgada podría caer sobre el público. ¿Qué es lo prioritario?", ["La estética", "Asegurar los anclajes o cambiar la solución", "Poner un cartel", "Inaugurar igual"], 1, "La seguridad es lo primero."],
    ["¿Por qué se fotografía el proceso siempre desde el mismo punto?", ["Para ahorrar batería", "Para comparar etapas y poder montar un timelapse", "Porque es obligatorio", "Para que salga más luz"], 1, "Las imágenes se pueden encadenar."],
    ["Faltan 3 días y quedan tareas de 5 días. ¿Qué es lo más sensato?", ["Correr y no dormir", "Decidir pronto qué recortar sin perder la intención", "Retrasar la exposición sin avisar", "No hacer nada"], 1, "Ajustar el alcance."],
  ],
  feynman: ["Qué hay que tener listo antes de producir", "Cómo se amplía un boceto con cuadrícula", "Cómo se sigue el trabajo de un equipo", "Qué pasos se siguen ante un imprevisto"],
  mapa: ["LA PRODUCCIÓN", [["Preparar", "materiales · permisos · espacio"], ["Probar", "pruebas · maqueta · escala"], ["Producir", "plana · volumen · audiovisual"], ["Controlar", "tablero · imprevistos · registro"]]],
  tarjetas: [
    ["Producción", "Fase en la que se realiza la obra."],
    ["Prueba de material", "Ensayo para ver cómo se comporta un material."],
    ["Cuadrícula", "Retícula que permite ampliar un dibujo copiando cuadro a cuadro."],
    ["Imprimación", "Capa que prepara el soporte para recibir la pintura."],
    ["Montaje en seco", "Prueba completa del montaje antes del definitivo."],
    ["Posproducción", "Montaje, sonido y color de un audiovisual tras el rodaje."],
    ["Tablero de tareas", "Panel con columnas por hacer, en marcha y hecho."],
    ["Acabado", "Últimos trabajos que dejan la obra lista para mostrar."],
  ],
  ejemplos: [
    ["Amplía un boceto de 15 × 10 cm a una pared de 3 × 2 m.", ["Escala: 300 / 15 = 20; la obra será 20 veces mayor.", "Divide el boceto en cuadros de 2,5 cm (6 × 4).", "Divide la pared en cuadros de 50 cm (6 × 4) y copia cuadro a cuadro."], "Cuadrícula de 6 × 4 con cuadros de 2,5 cm y 50 cm."],
    ["Organiza la primera sesión de producción de un mural de cuatro personas.", ["Reunión de 5 minutos: tareas del día en el tablero.", "Dos personas imprimen la pared; dos preparan colores y prueban en un cartón.", "Al final: foto desde el punto fijo y nota en el diario."], "Sesión organizada con tareas, pruebas y registro."],
    ["Resuelve un imprevisto: el día del rodaje llueve.", ["Analizar: la escena exterior no se puede grabar.", "Alternativas: grabar ese día las escenas interiores o usar la lluvia en la historia.", "Decidir la que respeta la intención y anotarlo."], "Se graban las escenas interiores y se cambia el calendario."],
  ],
  errores: [
    "Empezar la obra final sin hacer pruebas de material.",
    "Ampliar a ojo sin cuadrícula ni proyección y deformar el dibujo.",
    "No mirar la obra desde lejos durante el trabajo.",
    "Dejar el acabado para el último minuto o no hacerlo.",
  ],
  ejercicios: {
    b: [
      ["Enumera cinco cosas que deben estar listas antes de producir.", "Propuesta aprobada, materiales, permisos, espacio preparado y calendario."],
      ["Explica en qué consiste la cuadrícula.", "Dividir el boceto y la superficie final en el mismo número de cuadros y copiar cada cuadro."],
      ["¿Qué tres columnas tiene un tablero de tareas?", "Por hacer, en marcha y hecho."],
      ["Nombra tres técnicas escultóricas.", "Modelado (añadir), talla (quitar) y construcción o ensamblaje."],
    ],
    m: [
      ["Un boceto de 10 × 14 cm debe ampliarse a 1 × 1,4 m. ¿Cuál es la escala? ¿Qué cuadros usarías?", "Escala 10. Cuadros de 2 cm en el boceto (5 × 7) y de 20 cm en la superficie final."],
      ["Describe el orden de trabajo de una pintura mural.", "Preparar e imprimar la pared, trasladar el dibujo, aplicar las manchas grandes de color y terminar con detalles, luces y barniz."],
      ["¿Por qué es útil la reunión de cinco minutos al empezar la sesión?", "Coordina al equipo, detecta bloqueos y permite reajustar las tareas a tiempo."],
      ["Pon dos ejemplos de accidentes en la producción que podrían convertirse en parte de la obra.", "Un goteo de pintura que da movimiento; una grieta en la arcilla que sugiere fragilidad. Deben aceptarse como decisión, no por resignación."],
    ],
    a: [
      ["Planifica la producción de tu proyecto: lista de comprobación, pruebas, método de escala, tablero de tareas y plan de registro.", "Respuesta abierta. Se valora la coherencia con la propuesta y la previsión de riesgos."],
      ["Haz un timelapse o una serie de 8 fotos del proceso de una obra tuya y escribe un texto breve con las decisiones tomadas.", "Respuesta abierta: secuencia ordenada desde el mismo punto de vista y texto que explique cambios e imprevistos."],
    ],
  },
  glosario: [
    ["Soporte", "Superficie o base sobre la que se hace la obra."],
    ["Escala", "Relación entre el tamaño del boceto y el de la obra."],
    ["Plantilla", "Recorte que permite repetir una forma."],
    ["Anclaje", "Sistema que sujeta una pieza a la pared o al suelo."],
    ["Rodaje", "Grabación de las imágenes de un audiovisual."],
    ["Making of", "Registro del proceso de creación de una obra."],
    ["Cartela", "Pequeño texto junto a la obra con sus datos."],
    ["Barniz", "Capa final que protege y unifica la superficie."],
  ],
  situacion: {
    titulo: "Manos a la obra",
    reto: "Producir vuestra obra en el tiempo previsto, documentando el proceso.",
    pasos: [
      "Revisad la lista de comprobación y preparad el espacio.",
      "Haced las pruebas de material y elegid el método de escala.",
      "Producid la obra con un tablero de tareas y una reunión breve al inicio de cada sesión.",
      "Documentad cada sesión y cuidad el acabado.",
    ],
    producto: "Obra terminada y registro del proceso (fotos, diario y, si se puede, timelapse).",
    evaluacion: [
      "La obra es fiel a la propuesta o mejora con decisiones justificadas.",
      "Se han hecho pruebas y se ha cuidado la escala.",
      "El equipo se organiza y cumple el calendario.",
      "El proceso está documentado y el acabado es cuidado.",
    ],
  },
  familias: [
    "Preguntadle qué ha probado esta semana y qué ha descubierto.",
    "Ayudadle a conseguir materiales reutilizables para las pruebas.",
    "Mirad juntos las fotos del proceso y comentad los cambios.",
    "Recordadle las normas de seguridad si trabaja en casa.",
  ],
  saberes: "La producción del proyecto artístico: preparación, pruebas, maquetas y cambio de escala (cuadrícula, proyección, plantillas); procesos según el tipo de obra (plana, instalación, escultura, audiovisual, acción); seguimiento del trabajo en equipo; gestión de imprevistos; documentación del proceso y acabado.",
  ideas: [
    "Ampliar en grupo una obra famosa repartiendo los cuadros de la cuadrícula.",
    "Tablero de tareas de pared para cada proyecto.",
    "Banco de pruebas de material etiquetadas en el aula.",
    "Timelapse colectivo con un móvil fijo en el taller.",
  ],
  fuentes: [
    { t: "Pedro Pablo Rubens, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pedro_Pablo_Rubens" },
    { t: "Técnicas de escultura, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Escultura" },
  ],
});
