// Artes Escénicas II, 2º de Bachillerato. Tema 9 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "Producción, gestión y difusión del espectáculo",
  minutos: 60,
  objetivos: [
    "Conocer los modelos de producción escénica: pública, privada e independiente",
    "Elaborar un presupuesto sencillo e identificar fuentes de financiación",
    "Comprender cómo se distribuye y se contrata un espectáculo",
    "Diseñar un plan de difusión y de captación de públicos",
  ],
  claves: ["producción", "presupuesto", "financiación", "caché", "distribución", "dosier", "rider", "públicos"],
  pregunta: {
    texto: "¿Quién paga una obra de teatro antes de que nadie compre una entrada?",
    respuesta: "La <mark>producción</mark>. Antes del estreno hay que pagar ensayos, decorados, vestuario, derechos y salarios. Una compañía lo financia con ahorros, subvenciones, coproducciones o patrocinio, y después intenta recuperarlo con las <b>funciones y las giras</b>.",
  },
  lectura: {
    titulo: "Una compañía de cinco",
    html: `<p>Al acabar el Bachillerato artístico, cinco amigos fundan una compañía. Tienen una obra que les entusiasma, pero nada más. La primera reunión con una productora veterana les deja sin palabras: alquiler de sala de ensayo, derechos de autor, seguro, escenografía, transporte, salarios, cartel, fotos, vídeo, gestoría…</p>
    <p>Ella les enseña a hacer un presupuesto, a presentar el proyecto a una ayuda pública y a una residencia artística, y a preparar un dosier para enviar a programadores. Un año después estrenan en un festival y consiguen doce funciones en una red de teatros. «El arte está en el escenario», les dice, «pero sin producción no llega a ningún escenario».</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "Qué es la producción escénica",
      html: `<p>La <b>producción</b> es la gestión de todos los recursos (personas, dinero, tiempo, espacios y materiales) para que un espectáculo se cree y se represente. La persona responsable, el <b>productor</b> o la productora, planifica, busca financiación, contrata, controla el gasto y vela por que se cumpla el calendario.</p>
      <p>Una producción pasa por varias fases: <b>proyecto</b> (idea, equipo, viabilidad), <b>preproducción</b>, <b>ensayos y construcción</b>, <b>estreno</b> y <b>explotación</b> (temporada y gira). En las compañías pequeñas, la misma persona suele encargarse de la producción, la distribución y la comunicación.</p>`,
      svg: B.flujo("Fases de una producción", ["Proyecto y viabilidad", "Preproducción y financiación", "Ensayos y construcción", "Estreno", "Temporada y gira"]),
      video: { id: "RdlPRjDnTEQ", titulo: "01. Producción escénica", canal: "Celcit TV", vistas: 30416 },
    },
    {
      h: "Modelos de producción",
      html: `<p>En España conviven tres grandes modelos. La <b>producción pública</b> la realizan teatros y centros que dependen del Estado, las comunidades o los ayuntamientos (Centro Dramático Nacional, Compañía Nacional de Danza, teatros autonómicos). La <b>producción privada</b> busca beneficio económico, como los grandes musicales de la Gran Vía.</p>
      <p>Las <b>compañías independientes</b>, muchas veces cooperativas o asociaciones, crean sus propios espectáculos con recursos limitados y viven de las giras. Son frecuentes las <b>coproducciones</b> entre varios socios para repartir costes y llegar a más ciudades.</p>`,
      svg: B.rejilla("Modelos de producción", ["Modelo", "Quién", "Objetivo"], [["Público", "teatros nacionales y municipales", "servicio cultural"], ["Privado", "empresas", "beneficio"], ["Independiente", "compañías, cooperativas", "creación propia"], ["Coproducción", "varios socios", "repartir costes"]]),
    },
    {
      h: "El presupuesto",
      html: `<p>El <b>presupuesto</b> compara los <b>gastos</b> previstos con los <b>ingresos</b> esperados. Hay gastos de <b>producción</b>, que se pagan una vez (escenografía, vestuario, ensayos, diseño, promoción), y gastos de <b>explotación</b>, que se repiten en cada función (salarios, transporte, dietas, derechos de autor, técnicos).</p>
      <p>Los ingresos llegan de la taquilla, de los <b>cachés</b> que pagan los teatros por cada función, de las ayudas públicas, de los patrocinadores o del micromecenazgo. Un presupuesto realista incluye siempre un margen para imprevistos.</p>`,
      svg: B.barras("Presupuesto orientativo de producción (miles de euros)", [["Salarios de ensayo", 18], ["Escenografía y vestuario", 8], ["Diseño y técnica", 5], ["Promoción", 3], ["Imprevistos", 2]]),
    },
    {
      h: "La financiación",
      html: `<p>Las principales fuentes son las <b>subvenciones</b> públicas (del INAEM, las comunidades autónomas y los ayuntamientos), las <b>coproducciones</b> con teatros y festivales, las <b>residencias artísticas</b> (espacios que ceden sala y a veces dinero para crear), el <b>patrocinio</b> de empresas y el <b>micromecenazgo</b> o <i>crowdfunding</i>.</p>
      <p>Para optar a ellas hay que presentar un <b>proyecto</b> bien escrito: idea, equipo, calendario, presupuesto y plan de difusión. Saber explicar un espectáculo antes de que exista es una habilidad clave. Además, las ayudas obligan a justificar después cada gasto con facturas.</p>`,
      svg: B.cajas("Fuentes de financiación", [["Subvenciones", "INAEM, comunidades"], ["Coproducción", "teatros y festivales"], ["Patrocinio", "empresas"], ["Micromecenazgo", "pequeñas aportaciones"]]),
    },
    {
      h: "Distribución y contratación",
      html: `<p>La <b>distribución</b> consiste en vender el espectáculo a teatros, festivales y programadores. Las compañías acuden a <b>ferias</b> de artes escénicas (FETEN en Gijón, la Feria de Teatro de Castilla y León en Ciudad Rodrigo, la Fira Tàrrega o la Feria de Huesca) y forman parte de <b>redes</b> de teatros públicos.</p>
      <p>Los contratos más habituales son a <b>caché</b> (precio fijo por función), a <b>taquilla</b> o porcentaje (la compañía cobra parte de las entradas) o mixtos. El contrato fija fechas, horarios, montaje, publicidad y quién paga los derechos de autor.</p>`,
      svg: B.comparar("Contrato a caché frente a contrato a taquilla", ["Caché", ["precio fijo", "riesgo del teatro", "ingreso seguro", "habitual en redes públicas"]], ["Taquilla", ["porcentaje de entradas", "riesgo de la compañía", "ingreso variable", "habitual en salas privadas"]]),
    },
    {
      h: "Documentos de la compañía: dosier y rider",
      html: `<p>El <b>dosier</b> artístico presenta el espectáculo a los programadores: sinopsis, propuesta, ficha artística y técnica, fotos, enlace a un vídeo, críticas, público al que se dirige y contacto. Debe ser breve, visual y atractivo.</p>
      <p>El <b>rider técnico</b> indica lo que el espectáculo necesita del teatro: dimensiones del escenario, material de luz y sonido, tiempo de montaje y desmontaje y personal técnico. Así el teatro sabe si puede acoger la obra y lo prepara con antelación. Un rider exagerado puede hacer que muchos teatros pequeños no puedan contratar la obra.</p>`,
      svg: B.comparar("Dosier frente a rider técnico", ["Dosier", ["para programadores", "sinopsis y propuesta", "fotos, vídeo, críticas", "convence"]], ["Rider", ["para técnicos", "escenario, luz, sonido", "tiempos de montaje", "informa"]]),
    },
    {
      h: "Difusión y públicos",
      html: `<p>La <b>difusión</b> da a conocer el espectáculo: cartel, nota de prensa, redes sociales, <i>teaser</i>, entrevistas, fotos de ensayo y campañas con centros educativos. El mensaje debe adaptarse a cada <b>público</b>: no se comunica igual a jóvenes, a familias o a aficionados al teatro.</p>
      <p>La <b>mediación</b> o desarrollo de públicos busca crear relación con los espectadores: coloquios tras la función, ensayos abiertos, talleres o materiales didácticos. Así se gana público fiel y nuevo, y se conoce mejor qué buscan los espectadores.</p>`,
      svg: B.estrella("Herramientas de difusión", "Difusión", ["Cartel", "Nota de prensa", "Redes sociales", "Teaser", "Coloquios", "Campaña escolar"]),
      video: { id: "mnvgFAYryfg", titulo: "Teatro Real de Madrid: oficios y funciones del equipo técnico", canal: "Telefónica", vistas: 595831 },
    },
    {
      h: "Aspectos legales, sostenibilidad y accesibilidad",
      html: `<p>Una producción debe cumplir la ley: <b>contratos</b> y altas en la Seguridad Social de artistas y técnicos, seguros, prevención de riesgos laborales (trabajo en altura, cargas), permisos para espacios públicos y pago de <b>derechos de autor</b> a través de entidades como la SGAE.</p>
      <p>Cada vez se cuidan más la <b>sostenibilidad</b> (escenografías reutilizables, transporte eficiente, menos residuos) y la <b>accesibilidad</b> (subtítulos, audiodescripción, lengua de signos, bucle magnético), para que el teatro llegue a todas las personas.</p>`,
      svg: B.cajas("Responsabilidades de la producción", [["Legal", "contratos y seguros"], ["Derechos", "autoría"], ["Sostenible", "reutilizar, reducir"], ["Accesible", "subtítulos, signos"]]),
    },
  ],
  figura: {
    titulo: "La producción en cuatro claves",
    items: [["Recursos", "▣", "personas, dinero", "y tiempo"], ["Presupuesto", "€", "gastos frente", "a ingresos"], ["Distribución", "➜", "ferias, redes", "y contratos"], ["Públicos", "♥", "difusión", "y mediación"]],
  },
  video: { id: "ic-brjUVM4Q", titulo: "¿Existe la gestión teatral? Formación en artes escénicas", canal: "Fundación Arteficial", vistas: 5520 },
  quiz: [
    ["La producción escénica gestiona…", ["solo la taquilla", "personas, dinero, tiempo, espacios y materiales", "solo la luz", "solo los ensayos"], 1, "Todos los recursos."],
    ["El Centro Dramático Nacional es un ejemplo de producción…", ["privada", "pública", "aficionada", "independiente"], 1, "Depende del Estado."],
    ["Un gasto de explotación es…", ["la construcción del decorado", "el transporte de cada función", "el diseño del cartel", "los ensayos"], 1, "Se repite cada función."],
    ["El caché es…", ["el decorado", "el precio fijo que se paga por función", "una subvención", "el teaser"], 1, "Contrato a caché."],
    ["En un contrato a taquilla, el riesgo es sobre todo…", ["del teatro", "de la compañía", "del público", "del autor"], 1, "Cobra según las entradas vendidas."],
    ["FETEN, en Gijón, es…", ["un teatro romano", "una feria de artes escénicas", "una compañía", "un premio de cine"], 1, "Para programadores."],
    ["El rider técnico describe…", ["la sinopsis", "las necesidades técnicas del espectáculo", "las críticas", "el reparto"], 1, "Para los técnicos del teatro."],
    ["El micromecenazgo consiste en…", ["una subvención estatal", "pequeñas aportaciones de muchas personas", "un préstamo bancario", "vender el decorado"], 1, "Crowdfunding."],
    ["La mediación con públicos incluye…", ["subir el precio", "coloquios, talleres y ensayos abiertos", "quitar la publicidad", "cerrar la sala"], 1, "Crear relación."],
    ["Los subtítulos y la audiodescripción mejoran la…", ["sostenibilidad", "accesibilidad", "taquilla", "escenografía"], 1, "Teatro para todos."],
  ],
  examen: [
    ["Tres teatros de distintas ciudades aportan dinero para crear un espectáculo que luego se verá en los tres. Es…", ["una coproducción", "un rider", "un caché", "un patrocinio"], 0, "Reparto de costes."],
    ["Una compañía necesita convencer a un programador para que la contrate. Le envía…", ["el rider", "el dosier artístico", "la factura", "el presupuesto interno"], 1, "Presenta el espectáculo."],
    ["El teatro pregunta cuántas horas de montaje y qué focos necesita la obra. La respuesta está en…", ["el dosier", "el rider técnico", "la nota de prensa", "el programa de mano"], 1, "Información técnica."],
    ["Una compañía presenta su proyecto al INAEM para pedir dinero. Busca…", ["una subvención pública", "un caché", "un patrocinio privado", "un contrato a taquilla"], 0, "Ayuda pública."],
    ["Un montaje usa decorados de otros espectáculos y viaja en una sola furgoneta. Cuida la…", ["accesibilidad", "sostenibilidad", "taquilla", "dramaturgia"], 1, "Menos residuos y emisiones."],
  ],
  feynman: ["Qué hace la producción", "Diferencia entre gastos de producción y de explotación", "Diferencia entre caché y taquilla", "Para qué sirven el dosier y el rider"],
  mapa: ["PRODUCCIÓN Y GESTIÓN", [["Modelos", "público · privado · independiente"], ["Dinero", "presupuesto · subvenciones · patrocinio"], ["Mercado", "ferias · redes · caché · taquilla"], ["Público", "dosier · difusión · mediación · accesibilidad"]]],
  tarjetas: [
    ["Producción", "Gestión de recursos para crear y representar un espectáculo."],
    ["Coproducción", "Producción compartida entre varios socios."],
    ["Presupuesto", "Previsión de gastos e ingresos."],
    ["Caché", "Precio fijo que cobra la compañía por función."],
    ["Distribución", "Venta del espectáculo a teatros y festivales."],
    ["Dosier", "Documento que presenta el espectáculo a programadores."],
    ["Rider técnico", "Documento con las necesidades técnicas del espectáculo."],
    ["Mediación", "Acciones para crear relación con los públicos."],
  ],
  ejemplos: [
    ["Clasifica los gastos: escenografía, transporte, diseño del cartel, dietas, vestuario, técnico de gira.", ["Producción (una vez): escenografía, diseño del cartel, vestuario.", "Explotación (cada función): transporte, dietas, técnico de gira."], "Separar ambos tipos ayuda a calcular el precio de cada función."],
    ["Calcula el resultado de una gira: caché 2.500 € por función, 10 funciones; gastos por función 1.800 €; producción 6.000 €.", ["Ingresos: 2.500 × 10 = 25.000 €.", "Gastos de explotación: 1.800 × 10 = 18.000 €.", "Total gastos: 18.000 + 6.000 = 24.000 €."], "Beneficio: 1.000 €. La gira apenas cubre la producción."],
    ["Diseña un plan de difusión para un estreno escolar.", ["Cartel y programa de mano en el centro.", "Teaser de 30 segundos en redes del instituto.", "Invitación a familias y a otro centro con coloquio final."], "Acciones adaptadas al público escolar y familiar."],
  ],
  errores: [
    "Hacer el presupuesto sin margen para imprevistos.",
    "Olvidar los derechos de autor y los seguros.",
    "Enviar a los programadores un dosier larguísimo y sin vídeo.",
    "Pensar en la difusión solo la semana del estreno.",
  ],
  ejercicios: {
    b: [
      ["Nombra las fases de una producción.", "Proyecto, preproducción, ensayos y construcción, estreno y explotación (temporada y gira)."],
      ["¿Qué es una coproducción?", "Un espectáculo producido entre varios socios que comparten costes y beneficios."],
      ["Cita tres fuentes de financiación.", "Subvenciones públicas, coproducciones, residencias, patrocinio o micromecenazgo."],
      ["¿Qué es el rider técnico?", "El documento con las necesidades técnicas del espectáculo: escenario, luz, sonido, tiempos y personal."],
    ],
    m: [
      ["Diferencia los tres modelos de producción.", "Pública (instituciones, servicio cultural), privada (empresas, beneficio) e independiente (compañías, creación propia con recursos limitados)."],
      ["Explica la diferencia entre gastos de producción y de explotación.", "Los de producción se pagan una vez para crear el espectáculo; los de explotación se repiten en cada función."],
      ["¿Qué ventajas e inconvenientes tiene el contrato a taquilla para una compañía?", "Puede ganar más si hay mucho público, pero asume el riesgo de ingresar poco si la sala no se llena."],
      ["¿Qué incluye un buen dosier artístico?", "Sinopsis, propuesta, fichas artística y técnica, fotos, enlace a vídeo, críticas, público destinatario y contacto."],
    ],
    a: [
      ["Elaborad el plan de producción de un montaje del centro: presupuesto con gastos e ingresos, financiación y calendario.", "Respuesta abierta. Debe ser realista, equilibrado y con margen para imprevistos."],
      ["Diseñad el dosier y el rider de un espectáculo de clase para enviarlo a un festival juvenil.", "Respuesta abierta. Se valora la claridad, la información completa y el atractivo visual."],
    ],
  },
  glosario: [
    ["Explotación", "Etapa de funciones y gira tras el estreno."],
    ["Residencia artística", "Cesión de espacio y recursos a una compañía para crear."],
    ["Patrocinio", "Aportación de una empresa a cambio de visibilidad."],
    ["Programador", "Persona que elige los espectáculos de un teatro o festival."],
    ["Feria", "Encuentro donde las compañías muestran espectáculos a programadores."],
    ["SGAE", "Sociedad General de Autores y Editores, gestiona derechos de autor."],
    ["Teaser", "Vídeo breve de promoción."],
    ["Bucle magnético", "Sistema que mejora la audición a personas con audífono."],
  ],
  situacion: {
    titulo: "Nuestra compañía",
    reto: "Crear una compañía ficticia y preparar la producción y distribución de un espectáculo.",
    pasos: [
      "Definid nombre, modelo de compañía y espectáculo.",
      "Elaborad el presupuesto de producción y el coste por función.",
      "Preparad el dosier, el rider técnico y un teaser.",
      "Presentad el proyecto ante un «jurado de programadores» de la clase.",
    ],
    producto: "Carpeta de producción: presupuesto, dosier, rider y teaser.",
    evaluacion: [
      "El presupuesto es realista y está equilibrado.",
      "El dosier es claro y atractivo.",
      "El rider es completo y comprensible.",
      "La presentación convence y responde a las preguntas.",
    ],
  },
  familias: [
    "Mirad juntos el precio de una entrada y hablad de qué paga.",
    "Seguid en redes a una compañía y analizad su difusión.",
    "Ayudadle a preparar un presupuesto realista.",
    "Participad en un coloquio tras una función.",
  ],
  saberes: "Producción y gestión de las artes escénicas: fases de la producción; modelos (público, privado, independiente, coproducción); presupuesto (gastos de producción y explotación, ingresos); financiación (subvenciones, residencias, patrocinio, micromecenazgo); distribución (ferias, redes, caché y taquilla); dosier y rider técnico; difusión, mediación y públicos; aspectos legales, derechos de autor, sostenibilidad y accesibilidad.",
  ideas: [
    "Simulacro de feria de artes escénicas en clase.",
    "Analizar el dosier real de una compañía.",
    "Calcular el coste de un montaje del centro.",
    "Entrevista a la persona que programa el teatro municipal.",
  ],
  fuentes: [
    { t: "Instituto Nacional de las Artes Escénicas y de la Música (INAEM)", url: "https://www.cultura.gob.es/cultura/areas/artes-escenicas.html" },
    { t: "FETEN, Feria Europea de Artes Escénicas para Niños y Niñas", url: "https://www.feten.es" },
  ],
});
