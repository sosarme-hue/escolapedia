// Economía y Emprendimiento 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { flujo, filas, dos, rueda } = require("./_hum");

const CANVAS = [
  [20, 16, 120, 168, "Socios clave", "var(--muted)"], [140, 16, 120, 84, "Actividades", "var(--muted)"], [140, 100, 120, 84, "Recursos", "var(--muted)"],
  [260, 16, 160, 168, "Propuesta de valor", "var(--red)"], [420, 16, 120, 84, "Relación", "var(--pen)"], [420, 100, 120, 84, "Canales", "var(--pen)"],
  [540, 16, 120, 168, "Segmentos", "var(--pen)"], [20, 184, 320, 0, "", ""],
];

module.exports = {
  materia: "Economía y Emprendimiento",
  curso: "4-eso",
  titulo: "Idea de negocio y modelo Canvas",
  minutos: 40,
  objetivos: ["Generar y evaluar ideas de negocio a partir de problemas reales", "Describir un modelo de negocio con los nueve bloques del lienzo Canvas", "Validar una idea con clientes antes de invertir"],
  claves: ["emprendimiento", "idea de negocio", "propuesta de valor", "segmento de clientes", "modelo Canvas", "prototipo"],
  pregunta: {
    texto: "Muchos negocios de éxito nacieron de una molestia cotidiana: no encontrar taxi, perder las llaves, no saber qué cocinar. ¿Cómo se convierte un problema en una empresa?",
    respuesta: "Detectando una <b>necesidad</b> que nadie resuelve bien, pensando una solución que la gente esté dispuesta a pagar y ordenando todas las piezas del negocio. Para eso los emprendedores usan el <mark>modelo Canvas</mark>, un lienzo de nueve bloques en una sola hoja.",
  },
  bloques: [
    {
      html: `<h3>El espíritu emprendedor</h3><p><mark>Emprender</mark> es convertir una idea en un proyecto, asumiendo riesgos. Las personas emprendedoras suelen tener <b>creatividad</b>, <b>iniciativa</b>, <b>perseverancia</b>, capacidad de trabajo en equipo y tolerancia al fracaso. No solo se emprende creando empresas: también hay emprendimiento <b>social</b> (resolver un problema de la comunidad) e <b>intraemprendimiento</b> (innovar dentro de una organización).</p>`,
      svg: rueda("Cualidades de una persona emprendedora", "EMPREN-|DER", [["creatividad", "var(--sun)"], ["iniciativa", "var(--red)"], ["constancia", "var(--pen)"], ["equipo", "var(--leaf)"], ["riesgo", "var(--muted)"], ["aprender", "var(--inf)"]], "var(--leaf)"),
    },
    {
      html: `<h3>De dónde salen las ideas</h3><p>Las buenas ideas nacen de <b>observar problemas</b> y necesidades, de tendencias (envejecimiento, sostenibilidad, digitalización), de mejorar algo que ya existe o de combinar dos ideas. Técnicas como la <b>lluvia de ideas</b> o el <mark>design thinking</mark> ayudan: empatizar con el usuario, definir el problema, idear, hacer un <b>prototipo</b> barato y probarlo.</p>`,
      svg: flujo("Pasos del design thinking", ["empatizar", "definir", "idear", "prototipo", "probar"], "var(--sun)"),
    },
    {
      html: `<h3>El lienzo Canvas</h3><p>Alexander Osterwalder creó el <mark>modelo Canvas</mark> para describir un negocio en nueve bloques. En el centro, la <b>propuesta de valor</b>: qué problema resuelves y por qué te elegirán. A la derecha, el cliente: <b>segmentos</b>, <b>canales</b> (cómo llegas) y <b>relación</b>. A la izquierda, cómo funciona: <b>actividades</b>, <b>recursos</b> y <b>socios clave</b>. Abajo, el dinero: <b>fuentes de ingresos</b> y <b>estructura de costes</b>.</p>`,
      svg: filas("Las cuatro grandes áreas del Canvas", [["Cliente", "segmentos, canales, relación", "var(--pen)"], ["Oferta", "propuesta de valor", "var(--red)"], ["Operación", "actividades, recursos, socios", "var(--muted)"], ["Dinero", "ingresos y costes", "var(--leaf)"]]),
    },
    {
      html: `<h3>Validar antes de invertir</h3><p>Una idea solo es buena si alguien la necesita. Antes de gastar mucho dinero hay que <b>validarla</b>: hablar con posibles clientes, hacer encuestas, lanzar un <mark>producto mínimo viable</mark> (la versión más simple que se pueda probar) y medir la respuesta. Si no funciona, se <b>pivota</b>: se cambia una parte del modelo y se vuelve a probar.</p>`,
      svg: dos("Idea validada frente a idea sin validar", ["Sin validar", ["«a todos les", "encantará»", "gasto alto", "riesgo alto", "sorpresas"], "var(--red)"], ["Validada", ["clientes reales", "opinan", "prototipo barato", "datos y ajustes", "menos riesgo"], "var(--leaf)"]),
    },
  ],
  figura: {
    titulo: "Los nueve bloques del lienzo Canvas",
    svg: `<svg viewBox="0 0 680 260" role="img" aria-label="Lienzo Canvas con nueve bloques: socios, actividades, recursos, propuesta de valor, relación, canales, segmentos, costes e ingresos">
      <rect width="680" height="260" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="13" font-weight="700" text-anchor="middle">
        ${CANVAS.slice(0, 7).map(([x, y, w, h, t, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="${x + w / 2}" y="${y + 24}" fill="${c}">${t}</text>`).join("")}
        <rect x="20" y="184" width="320" height="60" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="180" y="208" fill="var(--red)">Estructura de costes</text>
        <rect x="340" y="184" width="320" height="60" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="500" y="208" fill="var(--leaf)">Fuentes de ingresos</text>
        <g font-weight="400" font-size="11" fill="var(--muted)">
          <text x="80" y="100">¿quién me ayuda?</text><text x="200" y="62">¿qué hago?</text><text x="200" y="146">¿qué necesito?</text>
          <text x="340" y="100">¿qué problema</text><text x="340" y="116">resuelvo?</text>
          <text x="480" y="62">¿cómo los trato?</text><text x="480" y="146">¿cómo llego?</text><text x="600" y="100">¿para quién?</text>
          <text x="180" y="228">alquiler, sueldos, materiales…</text><text x="500" y="228">ventas, cuotas, publicidad…</text>
        </g>
      </g>
    </svg>`,
  },
  video: { id: "ZQgXyiozmYY", titulo: "Modelo de negocio Canvas explicado paso a paso en 6 minutos", canal: "Aprendiz Financiero", vistas: 1428886, megusta: 27089, busqueda: "modelo canvas explicación" },
  quiz: [
    { q: "¿Qué bloque ocupa el centro del lienzo Canvas?", o: ["Segmentos de clientes", "Propuesta de valor", "Estructura de costes"], a: 1, e: "La propuesta de valor explica qué problema resuelves y por qué te elegirán." },
    { q: "¿Cuántos bloques tiene el modelo Canvas?", o: ["4", "9", "12"], a: 1, e: "Nueve bloques: segmentos, propuesta, canales, relación, ingresos, recursos, actividades, socios y costes." },
    { q: "Un producto mínimo viable es…", o: ["el producto más caro", "la versión más sencilla que permite probar la idea con clientes", "un producto defectuoso"], a: 1, e: "Sirve para aprender rápido y con poco gasto." },
    { q: "Los «canales» del Canvas indican…", o: ["cómo llega el producto al cliente", "cuánto cuesta producir", "quiénes son los socios"], a: 0, e: "Tienda física, web, redes sociales, distribuidores…" },
    { q: "Pivotar significa…", o: ["abandonar para siempre", "cambiar una parte del modelo tras aprender de los clientes", "copiar a la competencia"], a: 1, e: "Es ajustar el rumbo con lo aprendido." },
  ],
  examen: [
    { q: "El emprendimiento social busca sobre todo…", o: ["el máximo beneficio", "resolver un problema de la comunidad", "evitar impuestos"], a: 1, e: "Puede ser rentable, pero su objetivo principal es el impacto social." },
    { q: "¿Cuál es el primer paso del design thinking?", o: ["Prototipar", "Empatizar con el usuario", "Vender"], a: 1, e: "Primero hay que entender bien a quién quieres ayudar." },
    { q: "En el bloque «estructura de costes» se incluye…", o: ["el alquiler del local", "los clientes", "las ventas"], a: 0, e: "Recoge los gastos necesarios para que el negocio funcione." },
  ],
  feynman: ["Qué cualidades ayudan a emprender", "Los pasos del design thinking", "Los nueve bloques del Canvas agrupados en cuatro áreas", "Por qué hay que validar una idea antes de invertir"],
  mapa: mapa("MODELO CANVAS", "var(--leaf)", [
    ["Idea", "problema real · design thinking", "var(--sun)"],
    ["Cliente", "segmentos · canales · relación", "var(--pen)"],
    ["Operación", "actividades · recursos · socios", "var(--muted)"],
    ["Dinero", "ingresos − costes · validar", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Propuesta de valor", "Qué problema resuelves y por qué te elegirán a ti."],
    ["Segmento de clientes", "El grupo de personas al que se dirige el negocio."],
    ["Producto mínimo viable", "La versión más sencilla del producto para probar la idea."],
    ["Design thinking", "Empatizar, definir, idear, prototipar y probar."],
    ["Pivotar", "Cambiar parte del modelo de negocio tras aprender de los clientes."],
  ],
  familias: ["Pensad juntos tres molestias de vuestro día a día y una posible solución para cada una.", "Elegid un negocio que conozcáis y rellenad entre todos su lienzo Canvas en una hoja.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Emprendimiento: generación de ideas, modelo de negocio y validación; creatividad e iniciativa (RD 217/2022, Economía y Emprendimiento 4º).",
    ideas: ["Reto por equipos: un Canvas para resolver un problema del centro educativo.", "Analizar el Canvas de una empresa conocida (una plataforma de música, una cadena de ropa).", "Entrevistas a cinco posibles clientes y presentación de lo aprendido."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Lienzo de modelo de negocio, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Lienzo_de_modelo_de_negocio" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Rellenar un lienzo Canvas completo para una idea propia", "Diseñar un producto mínimo viable y analizar la competencia"],
  bloques: [
    { tras: "El espíritu emprendedor", html: `<h3>Tipos de emprendimiento</h3><p>Emprender no es solo montar una empresa. El <b>emprendimiento empresarial</b> crea negocios con ánimo de lucro; el <mark>emprendimiento social</mark> busca resolver un problema de la sociedad (por ejemplo, dar empleo a personas con discapacidad o reducir el desperdicio de comida) y reinvierte los beneficios; y el <b>intraemprendimiento</b> consiste en innovar dentro de una empresa u organización en la que ya trabajas. Todos comparten actitudes: iniciativa, creatividad, tolerancia al fracaso, trabajo en equipo y saber aprender de los errores.</p>` },
    { tras: "De dónde salen las ideas", html: `<h3>Técnicas de creatividad</h3><p>Las ideas no aparecen por casualidad: se pueden provocar. En la <b>lluvia de ideas</b> (brainstorming) un grupo propone muchas ideas sin juzgarlas y después las filtra. La técnica <mark>SCAMPER</mark> pregunta qué se puede <b>S</b>ustituir, <b>C</b>ombinar, <b>A</b>daptar, <b>M</b>odificar, <b>P</b>oner en otro uso, <b>E</b>liminar o <b>R</b>eordenar en un producto que ya existe. El <b>design thinking</b> empieza por <b>empatizar</b> con las personas que tienen el problema, definirlo bien, idear soluciones, hacer un prototipo y probarlo.</p>` },
    { tras: "El lienzo Canvas", html: `<h3>Un Canvas de ejemplo: «BiciFix», reparación de bicis a domicilio</h3>${tabla(["Bloque", "Contenido"], [["Segmento de clientes", "estudiantes y trabajadores que van en bici a diario"], ["Propuesta de valor", "reparamos tu bici en tu portal en menos de 24 h"], ["Canales", "app, Instagram, carteles en institutos y facultades"], ["Relación con clientes", "reserva online, recordatorio de revisiones"], ["Fuentes de ingresos", "pago por reparación y bono anual de mantenimiento"], ["Recursos clave", "furgoneta, herramientas, mecánicos"], ["Actividades clave", "reparar, comprar recambios, gestionar citas"], ["Socios clave", "tiendas de recambios, ayuntamiento"], ["Estructura de costes", "salarios, combustible, recambios, publicidad"]])}`, video: { id: "i1Le5GYkBT8", titulo: "Modelo Canvas: cómo aplicar el modelo Canvas en el lienzo. Ejemplo práctico", canal: "Trabajar Desde Casa", vistas: 5841473, megusta: 0 } },
    { tras: "Validar antes de invertir", html: `<h3>El producto mínimo viable</h3><p>Un <mark>producto mínimo viable</mark> (PMV o MVP) es la versión más sencilla del producto que permite comprobar si a los clientes les interesa, gastando poco. Puede ser una web con un botón de «reservar», un prototipo hecho a mano o un servicio que al principio se presta de forma manual. Se sigue un ciclo de <b>crear → medir → aprender</b>: se lanza, se recogen datos (cuántos lo prueban, qué opinan) y se mejora. Si la idea no funciona, se <b>pivota</b>: se cambia una parte del modelo de negocio sin empezar de cero.</p>` },
    { tras: "Validar antes de invertir", html: `<h3>Analizar la competencia</h3><p>Antes de lanzar un negocio conviene saber quién ofrece algo parecido. Los <b>competidores directos</b> venden lo mismo al mismo cliente; los <b>indirectos</b> satisfacen la misma necesidad de otra forma (para «moverse por la ciudad», una bici compite con el bus o el patinete). Hay que comparar precio, calidad, ubicación y servicio, y buscar la <mark>ventaja competitiva</mark>: lo que hace a tu negocio diferente y mejor a ojos del cliente, como el precio más bajo, la rapidez o un trato más personal.</p>` },
  ],
  ejemplos: [
    { enunciado: "Aplica SCAMPER a una mochila escolar.", pasos: ["Sustituir: tela reciclada en lugar de nailon.", "Combinar: mochila con cargador solar.", "Adaptar: correas acolchadas de las mochilas de montaña.", "Eliminar: quitar bolsillos que nadie usa para que pese menos."], resultado: "Surge, por ejemplo, una mochila ligera de tela reciclada con cargador solar." },
    { enunciado: "Diseña un PMV para una app que conecta a estudiantes que se ayudan con los deberes.", pasos: ["Sin programar nada, crear un formulario online y un grupo de mensajería.", "Ofrecerlo en el instituto durante dos semanas.", "Medir cuántos se apuntan y cuántos repiten.", "Preguntar qué echan en falta."], resultado: "Con muy poco dinero se comprueba si hay interés antes de pagar una app." },
    { enunciado: "Para «BiciFix», identifica un competidor directo y uno indirecto.", pasos: ["Directo: el taller de bicis del barrio.", "Indirecto: un vídeo de YouTube para arreglar la bici uno mismo."], resultado: "Su ventaja competitiva frente a ambos es la comodidad: reparan en tu portal." },
  ],
  errores: [
    "Enamorarse de la idea sin preguntar a los clientes.",
    "Confundir la propuesta de valor con el producto: es el problema que resuelves y por qué te eligen.",
    "Pensar que no tienes competencia porque nadie hace exactamente lo mismo.",
    "Gastar mucho dinero antes de validar la idea.",
    "Creer que pivotar es fracasar: es aprender y ajustar.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre emprendimiento empresarial y social.", sol: "El empresarial busca beneficio; el social busca resolver un problema de la sociedad y reinvierte los beneficios en ese fin." },
    { q: "Cita tres actitudes emprendedoras.", sol: "Iniciativa, creatividad y tolerancia al fracaso (también trabajo en equipo y perseverancia)." },
    { q: "¿Cuáles son las reglas de una lluvia de ideas?", sol: "Proponer muchas ideas, no criticarlas al principio, construir sobre las de otros y filtrarlas después." },
    { q: "¿Qué significa cada letra de SCAMPER?", sol: "Sustituir, Combinar, Adaptar, Modificar, Poner en otro uso, Eliminar y Reordenar." },
    { q: "Nombra los nueve bloques del Canvas.", sol: "Segmentos de clientes, propuesta de valor, canales, relación con clientes, fuentes de ingresos, recursos clave, actividades clave, socios clave y estructura de costes." },
    { q: "¿En qué bloque del Canvas pondrías «Instagram»?", sol: "En canales." },
    { q: "¿Qué es un producto mínimo viable?", sol: "La versión más simple de un producto que permite comprobar si interesa a los clientes con poca inversión." },
    { q: "¿Qué significa pivotar?", sol: "Cambiar una parte del modelo de negocio tras comprobar que algo no funciona." },
    { q: "Define ventaja competitiva.", sol: "Lo que hace que los clientes prefieran tu negocio frente a la competencia." },
    { q: "Rellena la propuesta de valor de una cafetería para estudiantes.", sol: "Por ejemplo: «Un sitio tranquilo para estudiar, con wifi y café barato, abierto hasta tarde»." },
  ],
  quiz: [
    { q: "El intraemprendimiento es…", o: ["innovar dentro de una organización", "montar una empresa en el extranjero", "trabajar desde casa"], a: 0, e: "Emprender sin dejar tu empleo." },
    { q: "En design thinking, el primer paso es…", o: ["empatizar", "vender", "patentar"], a: 0, e: "Entender a quien tiene el problema." },
    { q: "Un PMV sirve para…", o: ["validar con poco gasto", "conseguir un préstamo", "pagar menos impuestos"], a: 0, e: "Crear, medir, aprender." },
    { q: "El bus es para una empresa de alquiler de bicis un competidor…", o: ["directo", "indirecto", "socio"], a: 1, e: "Cubre la misma necesidad de otra manera." },
    { q: "Los proveedores de recambios en el Canvas son…", o: ["socios clave", "canales", "clientes"], a: 0, e: "Son alianzas necesarias." },
  ],
  tarjetas: [
    ["Emprendimiento social", "Negocio que busca resolver un problema social."],
    ["SCAMPER", "Técnica de creatividad para mejorar productos existentes."],
    ["Pivotar", "Cambiar parte del modelo de negocio tras aprender del mercado."],
  ],
});
