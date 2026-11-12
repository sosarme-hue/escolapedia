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
