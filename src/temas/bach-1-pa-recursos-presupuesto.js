// Proyectos Artísticos, 1º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");

module.exports = B.tema({
  titulo: "Recursos y presupuesto",
  minutos: 60,
  objetivos: [
    "Identificar los recursos que necesita un proyecto: materiales, humanos, espaciales, técnicos y económicos",
    "Elaborar un presupuesto sencillo con gastos, ingresos e imprevistos",
    "Conocer formas de financiación: patrocinio, subvención, crowdfunding y autofinanciación",
    "Aplicar criterios de sostenibilidad, seguridad y permisos",
  ],
  claves: ["recursos", "presupuesto", "gasto", "ingreso", "imprevistos", "patrocinio", "crowdfunding", "sostenibilidad"],
  pregunta: {
    texto: "¿Hace falta mucho dinero para hacer un buen proyecto artístico?",
    respuesta: "No necesariamente. Hace falta <mark>saber cuánto cuesta</mark> lo que quieres hacer y ajustar la idea a lo que tienes. Muchas obras memorables se hicieron con materiales pobres y mucho ingenio.",
  },
  lectura: {
    titulo: "Arte con lo que hay",
    html: `<p>En los años sesenta, un grupo de artistas italianos decidió trabajar con materiales humildes: ramas, trapos, tierra, piedras, fluorescentes. Los críticos llamaron a su movimiento <b>arte povera</b>, «arte pobre». No era falta de medios: era una elección para acercar el arte a la vida cotidiana.</p>
    <p>Hoy muchos proyectos de jóvenes artistas siguen la misma lógica: reutilizan, piden prestado, colaboran con otros y buscan pequeñas ayudas. La clave no es el dinero, sino <b>planificar</b>: saber qué necesitas, cuánto cuesta y de dónde va a salir. Esa es la tarea de este tema.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Los recursos de un proyecto",
      html: `<p>Un <b>recurso</b> es todo lo que hace falta para llevar a cabo el proyecto. Se agrupan en cinco tipos: <b>materiales</b> (pintura, madera, tela, papel), <b>técnicos</b> (herramientas, cámara, ordenador, proyector), <b>humanos</b> (el equipo, colaboradores, asesores), <b>espaciales</b> (taller, sala de exposición, pared) y <b>económicos</b> (el dinero).</p>
      <p>Hacer una lista completa al principio evita sorpresas a mitad de la producción. No todos los recursos cuestan dinero: el tiempo y las habilidades del equipo también son recursos, y a menudo los más escasos. Saber quién domina cada técnica ayuda a repartir bien el trabajo.</p>`,
      svg: B.estrella("Tipos de recursos", "Recursos", ["Materiales", "Técnicos", "Humanos", "Espaciales", "Económicos"]),
    },
    {
      h: "Hacer la lista de necesidades",
      html: `<p>Se parte de la <b>propuesta</b> y se recorre la obra paso a paso: ¿qué necesito para preparar el soporte?, ¿para hacer la obra?, ¿para montarla?, ¿para difundirla? De cada recurso se anota la <b>cantidad</b>, si ya se tiene, si se puede <b>pedir prestado</b> o si hay que <b>comprarlo</b>.</p>
      <p>Para calcular cantidades se hacen pruebas: cuánta pintura gasta un metro cuadrado, cuántas copias se imprimen, cuántas horas de trabajo hacen falta.</p>`,
      svg: B.rejilla("Lista de necesidades (ejemplo de mural)", ["Recurso", "Cantidad", "Origen"], [["Pintura acrílica", "8 litros", "comprar"], ["Rodillos", "4", "instituto"], ["Andamio", "1", "préstamo"], ["Fotógrafo", "1", "equipo"]]),
      video: { id: "7I3qHgQr_w0", titulo: "Los 10 materiales imprescindibles para pintar un mural increíble", canal: "Flor Barchuk", vistas: 188387 },
    },
    {
      h: "El triángulo de restricciones",
      html: `<p>Todo proyecto se mueve entre tres límites: el <b>alcance</b> (lo grande o ambicioso que es), el <b>tiempo</b> disponible y el <b>dinero</b>. Si uno cambia, los otros se resienten: un mural el doble de grande necesitará más tiempo o más dinero, o tendrá menos calidad.</p>
      <p>Por eso la idea se ajusta a los recursos y no al revés. A veces la mejor decisión artística es <b>reducir</b>: menos tamaño, menos piezas, pero mejor acabadas. Antes de recortar la calidad, pregúntate qué lado del triángulo puedes mover: quizá haya más días disponibles, más compañeros que ayuden o un material más barato que dé un resultado parecido.</p>`,
      svg: B.triangulo("Triángulo de restricciones: alcance, tiempo y dinero"),
    },
    {
      h: "El presupuesto",
      html: `<p>El <b>presupuesto</b> es el cálculo de lo que costará el proyecto y de dónde saldrá el dinero. Tiene dos columnas: <b>gastos</b> (materiales, transporte, impresión, alquileres, seguros) e <b>ingresos</b> (aportación propia, del centro, patrocinio, venta de entradas o de obra).</p>
      <p>Para cada gasto se buscan al menos <b>dos precios</b> y se anota el más razonable. Al final se añade una partida de <b>imprevistos</b>, entre el 10 % y el 15 % del total, porque algo siempre se rompe, se encarece o se olvida.</p>`,
      svg: B.comparar("Las dos columnas del presupuesto", ["Gastos", ["materiales", "impresión", "transporte", "imprevistos"]], ["Ingresos", ["aportación propia", "centro", "patrocinio", "venta o entradas"]]),
    },
    {
      h: "Calcular un presupuesto paso a paso",
      html: `<p>Ejemplo: una exposición de fotografía. Gastos: impresión de 12 fotos (60 €), marcos reciclados y pintados (15 €), cartel e invitaciones (20 €). Suma: 95 €. Imprevistos del 10 %: 9,50 €. <b>Total de gastos: 104,50 €</b>.</p>
      <p>Ingresos: aportación del instituto (50 €) y de una papelería del barrio a cambio de su logo en el cartel (30 €). Total: 80 €. Faltan 24,50 €: o se busca otro ingreso o se <b>reduce</b> algún gasto. Un presupuesto debe quedar <mark>equilibrado</mark>: ingresos iguales o mayores que gastos.</p>`,
      svg: B.barras("Presupuesto de una exposición (€)", [["Impresión", 60], ["Cartel", 20], ["Marcos", 15], ["Imprevistos", 9.5], ["Ingresos", 80]], { unidad: " €" }),
      video: { id: "1dwO6y1MbMQ", titulo: "¿Qué es un presupuesto?", canal: "FinguTV", vistas: 148090 },
    },
    {
      h: "Cómo financiar un proyecto",
      html: `<p>Las vías más habituales son: la <b>autofinanciación</b> (dinero propio o del grupo), el <b>patrocinio</b> (una empresa aporta dinero o material a cambio de visibilidad), la <b>subvención</b> o <b>beca</b> (ayudas públicas de ayuntamientos, comunidades o ministerio, que se piden en convocatorias), los <b>premios y concursos</b> y el <b>micromecenazgo</b> o crowdfunding: muchas personas aportan pequeñas cantidades a través de una plataforma a cambio de recompensas.</p>
      <p>Todas exigen lo mismo: un proyecto bien explicado y un presupuesto creíble.</p>`,
      svg: B.cajas("Vías de financiación", [["Propia", "el equipo aporta"], ["Patrocinio", "empresa a cambio de logo"], ["Subvención", "convocatoria pública"], ["Crowdfunding", "muchas pequeñas aportaciones"]]),
      video: { id: "zddpfmykPVM", titulo: "Cómo conseguir patrocinadores para tu arte o proyecto creativo", canal: "Nahuel Garcia Buscemi", vistas: 46463 },
    },
    {
      h: "Sostenibilidad y seguridad",
      html: `<p>Elegir materiales también es una decisión ética. Un proyecto <b>sostenible</b> reutiliza y recicla, evita plásticos de un solo uso, elige pinturas al agua y piensa qué pasará con la obra cuando termine la exposición.</p>
      <p>La <b>seguridad</b> es imprescindible: leer las etiquetas de los productos, ventilar, usar guantes, gafas y mascarilla cuando haga falta, no trabajar en altura sin supervisión y tener a mano un botiquín. Si algo puede hacer daño a alguien, se cambia.</p>`,
      svg: B.cajas("Buenas prácticas de producción", [["Reutilizar", "materiales recuperados"], ["Al agua", "pinturas menos tóxicas"], ["Protección", "guantes, gafas, ventilación"], ["Después", "qué pasa con la obra"]]),
    },
    {
      h: "Permisos y acuerdos",
      html: `<p>Muchos proyectos necesitan <b>permisos</b>: del centro para usar un espacio, del ayuntamiento para pintar en la calle, del propietario de una fachada, de las personas que aparecen en fotos o vídeos (derecho a la propia imagen) y, en menores de edad, de sus familias.</p>
      <p>Conviene dejar los acuerdos <b>por escrito</b>, aunque sea en un correo: qué se va a hacer, dónde, cuándo y quién se responsabiliza. Así se evitan malentendidos cuando la obra ya está hecha.</p>`,
      svg: B.flujo("Permisos más habituales", ["Espacio: centro, ayuntamiento, propietario", "Imagen de las personas que aparecen", "Familias si hay menores", "Todo por escrito"]),
    },
  ],
  figura: {
    titulo: "Recursos y presupuesto en cuatro claves",
    items: [["Recursos", "⚒", "materiales, humanos,", "espacio, dinero"], ["Presupuesto", "€", "gastos e", "ingresos"], ["Imprevistos", "+10 %", "siempre", "hay sorpresas"], ["Financiar", "🤝", "patrocinio, subvención,", "crowdfunding"]],
  },
  video: { id: "E0ZZQKa5Y5s", titulo: "Cómo hacer un presupuesto desde cero", canal: "Luis Mi Negocios", vistas: 230696 },
  quiz: [
    ["Un andamio para pintar un mural es un recurso…", ["humano", "técnico o material", "económico", "espacial"], 1, "Herramienta o equipo necesario."],
    ["El taller o la sala de exposición son recursos…", ["espaciales", "humanos", "económicos", "digitales"], 0, "El lugar donde se trabaja o se expone."],
    ["En el triángulo de restricciones, si aumentas el alcance…", ["no cambia nada", "necesitarás más tiempo o dinero", "baja el presupuesto", "sube la calidad sola"], 1, "Los tres lados están ligados."],
    ["¿Qué porcentaje se suele reservar para imprevistos?", ["1 %", "10-15 %", "50 %", "100 %"], 1, "Algo siempre falla."],
    ["Un presupuesto equilibrado es aquel en que…", ["gastos mayores que ingresos", "ingresos iguales o mayores que gastos", "no hay ingresos", "no hay gastos"], 1, "No falta dinero."],
    ["Una empresa que aporta material a cambio de su logo hace…", ["una subvención", "un patrocinio", "un crowdfunding", "una beca"], 1, "A cambio de visibilidad."],
    ["El crowdfunding consiste en…", ["un préstamo bancario", "muchas aportaciones pequeñas a través de una plataforma", "una ayuda del ministerio", "vender la obra"], 1, "Micromecenazgo."],
    ["Las subvenciones públicas se piden…", ["por teléfono", "en convocatorias", "en la tienda", "sin documentación"], 1, "Con plazos y requisitos."],
    ["Un proyecto sostenible…", ["usa siempre material nuevo", "reutiliza y piensa en qué pasa con la obra después", "no tiene presupuesto", "es siempre digital"], 1, "Reduce residuos."],
    ["Para grabar a compañeros menores de edad hace falta…", ["nada", "permiso de sus familias", "pagarles", "un andamio"], 1, "Derecho a la propia imagen."],
  ],
  examen: [
    ["Gastos: 120 €. Imprevistos del 10 %. ¿Total?", ["120 €", "130 €", "132 €", "240 €"], 2, "120 + 12 = 132 €."],
    ["Gastos 150 € e ingresos 110 €. ¿Qué haces?", ["Empezar igual", "Buscar 40 € más o reducir gastos", "Subir los gastos", "Quitar los imprevistos"], 1, "El presupuesto debe equilibrarse."],
    ["Quieres pintar la persiana de una tienda del barrio. ¿Qué permiso necesitas?", ["Ninguno", "Del propietario y, si es necesario, del ayuntamiento", "Solo del profesor", "De los vecinos"], 1, "Permisos del espacio."],
    ["Solo tienes una semana, pero el mural previsto es de 10 metros. Según el triángulo…", ["lo haces igual", "reduces el alcance o consigues más manos", "subes el precio", "no cambia la calidad"], 1, "Ajustar la idea a los recursos."],
    ["¿Cuál es la opción más sostenible para unos marcos?", ["Comprar marcos de plástico nuevos", "Reutilizar marcos viejos y pintarlos", "Imprimir marcos en 3D desechables", "No enmarcar nunca"], 1, "Reutilizar."],
  ],
  feynman: ["Qué cinco tipos de recursos hay", "Cómo se hace un presupuesto equilibrado", "Qué es el triángulo de restricciones", "Qué diferencia hay entre patrocinio, subvención y crowdfunding"],
  mapa: ["RECURSOS Y PRESUPUESTO", [["Recursos", "materiales · técnicos · humanos · espacio"], ["Presupuesto", "gastos · ingresos · imprevistos"], ["Financiación", "propia · patrocinio · subvención"], ["Responsabilidad", "sostenibilidad · seguridad · permisos"]]],
  tarjetas: [
    ["Recurso", "Todo lo que hace falta para llevar a cabo el proyecto."],
    ["Presupuesto", "Cálculo de gastos e ingresos del proyecto."],
    ["Imprevistos", "Partida de reserva, del 10 al 15 %, para gastos no previstos."],
    ["Triángulo de restricciones", "Relación entre alcance, tiempo y dinero de un proyecto."],
    ["Patrocinio", "Aportación de una empresa a cambio de visibilidad."],
    ["Subvención", "Ayuda pública que se concede en una convocatoria."],
    ["Crowdfunding", "Financiación mediante muchas pequeñas aportaciones."],
    ["Arte povera", "Movimiento italiano de los años sesenta que usaba materiales humildes."],
  ],
  ejemplos: [
    ["Calcula el presupuesto de una instalación con botellas recicladas.", ["Gastos: cuerda y anclajes 18 €, luces led 32 €, cartel 10 €. Suma 60 €.", "Imprevistos 10 %: 6 €. Total gastos: 66 €.", "Ingresos: instituto 40 €, aportación del grupo 4 × 7 € = 28 €. Total 68 €."], "Presupuesto equilibrado: 68 € de ingresos frente a 66 € de gastos."],
    ["Ajusta una idea demasiado grande.", ["Idea: 30 esculturas de cartón en una semana.", "Recursos reales: 4 personas y 6 horas cada una.", "Ajuste: 10 esculturas mejor acabadas y colocadas con más espacio."], "Se reduce el alcance para mantener la calidad."],
    ["Elige la vía de financiación para un cortometraje del instituto.", ["Gasto principal: alquiler de un micrófono y transporte (90 €).", "La AMPA puede aportar una parte; una tienda local, el resto a cambio de aparecer en los créditos.", "Si sobra tiempo, presentar el corto a un concurso escolar con premio."], "Combinar aportación del centro, patrocinio local y concurso."],
  ],
  errores: [
    "Olvidar gastos pequeños (cinta, tornillos, transporte) que acaban sumando mucho.",
    "No reservar dinero para imprevistos.",
    "Empezar a producir sin tener los permisos.",
    "Elegir materiales tóxicos o desechables sin pensar en alternativas.",
  ],
  ejercicios: {
    b: [
      ["Nombra los cinco tipos de recursos con un ejemplo de cada uno.", "Materiales (pintura), técnicos (cámara), humanos (el equipo), espaciales (taller) y económicos (dinero)."],
      ["¿Qué son los imprevistos en un presupuesto?", "Una reserva del 10 al 15 % para gastos no previstos."],
      ["Define patrocinio y subvención.", "Patrocinio: aportación de una empresa a cambio de visibilidad. Subvención: ayuda pública concedida en una convocatoria."],
      ["Cita tres medidas de seguridad en el taller.", "Ventilar, usar guantes y gafas, leer las etiquetas, no trabajar en altura sin supervisión."],
    ],
    m: [
      ["Gastos: 45 €, 30 € y 25 €. Añade un 15 % de imprevistos. ¿Cuál es el total?", "Suma 100 €; imprevistos 15 €; total 115 €."],
      ["Explica con un ejemplo el triángulo de restricciones.", "Si un vídeo pasa de 3 a 10 minutos (más alcance), harán falta más días de rodaje y edición (tiempo) o más dinero, o bajará la calidad."],
      ["¿Qué ventajas tiene el crowdfunding además del dinero?", "Da a conocer el proyecto antes de terminarlo y crea un público comprometido."],
      ["Propón tres formas de hacer más sostenible una exposición.", "Reutilizar marcos, imprimir solo lo necesario en papel reciclado y difundir sobre todo en digital; donar o reutilizar las piezas al final."],
    ],
    a: [
      ["Elabora la lista de necesidades y el presupuesto completo de tu proyecto, con imprevistos y fuentes de ingresos.", "Respuesta abierta. Debe estar equilibrado e incluir cantidades, precios comparados e imprevistos."],
      ["Redacta un correo para pedir patrocinio a un comercio del barrio.", "Respuesta abierta: presentación, intención del proyecto, qué se pide, qué se ofrece a cambio (logo, mención) y fecha."],
    ],
  },
  glosario: [
    ["Gasto", "Dinero que se paga por un recurso o servicio."],
    ["Ingreso", "Dinero que entra en el proyecto."],
    ["Partida", "Cada línea de un presupuesto."],
    ["Alcance", "Tamaño y ambición de lo que se va a hacer."],
    ["Convocatoria", "Anuncio oficial con plazos y requisitos para pedir una ayuda."],
    ["Micromecenazgo", "Nombre en español del crowdfunding."],
    ["Derecho a la propia imagen", "Derecho a decidir sobre el uso de la propia imagen."],
    ["Sostenible", "Que reduce el impacto en el medio ambiente."],
  ],
  situacion: {
    titulo: "¿Cuánto cuesta nuestro proyecto?",
    reto: "Preparar la lista de recursos, el presupuesto y la financiación de vuestro proyecto.",
    pasos: [
      "Haced la lista de necesidades a partir de la propuesta.",
      "Buscad dos precios de cada gasto y elegid el razonable.",
      "Añadid un 10 % de imprevistos y equilibrad con ingresos realistas.",
      "Pedid por escrito los permisos necesarios.",
    ],
    producto: "Hoja de presupuesto equilibrado y lista de permisos.",
    evaluacion: [
      "La lista de recursos es completa.",
      "Los cálculos son correctos e incluyen imprevistos.",
      "Las vías de financiación son realistas.",
      "Se tienen en cuenta sostenibilidad, seguridad y permisos.",
    ],
  },
  familias: [
    "Ayudadle a comparar precios de materiales en dos tiendas.",
    "Buscad en casa materiales que se puedan reutilizar.",
    "Hablad de cómo organizáis vosotros un presupuesto familiar.",
    "Revisad juntos las autorizaciones de imagen que tenga que firmar.",
  ],
  saberes: "Gestión de recursos materiales, técnicos, humanos, espaciales y económicos; triángulo de restricciones; elaboración de presupuestos (gastos, ingresos, imprevistos); vías de financiación (autofinanciación, patrocinio, subvención, premio, micromecenazgo); sostenibilidad, seguridad, derecho a la propia imagen y permisos.",
  ideas: [
    "Ejercicio de presupuesto con precios reales de una papelería.",
    "Banco de materiales reutilizables en el aula.",
    "Simulación de una convocatoria de ayudas con jurado de alumnos.",
    "Revisión de fichas de seguridad de los productos del taller.",
  ],
  fuentes: [
    { t: "Arte povera, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Arte_povera" },
    { t: "Micromecenazgo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Micromecenazgo" },
  ],
});
