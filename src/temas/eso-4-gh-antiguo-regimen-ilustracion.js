// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { piramide, dos, rueda, filas, figCols } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "El siglo XVIII: el Antiguo Régimen y la Ilustración",
  minutos: 35,
  objetivos: ["Describir los rasgos económicos, sociales y políticos del Antiguo Régimen", "Explicar las ideas principales de la Ilustración y sus autores", "Reconocer el despotismo ilustrado y el reformismo borbónico en España"],
  claves: ["Antiguo Régimen", "sociedad estamental", "absolutismo", "Ilustración", "división de poderes", "despotismo ilustrado"],
  pregunta: {
    texto: "En 1750 un rey podía encarcelar a alguien sin juicio y un noble no pagaba impuestos solo por haber nacido noble. Cuarenta años después, en Francia se proclamaba que «los hombres nacen libres e iguales en derechos». ¿De dónde salieron esas ideas?",
    respuesta: "De la <mark>Ilustración</mark>, un movimiento de pensadores del siglo XVIII que confiaba en la <b>razón</b> para criticar el orden de su tiempo, el <b>Antiguo Régimen</b>: monarquía absoluta, privilegios por nacimiento y economía agraria.",
  },
  bloques: [
    {
      html: `<h3>Una economía agraria y una sociedad de estamentos</h3><p>Casi el 80 % de la población vivía del campo, con técnicas antiguas y cosechas que dependían del clima: una mala cosecha traía hambre. La sociedad se dividía en <mark>estamentos</mark>: la <b>nobleza</b> y el <b>clero</b> eran privilegiados (no pagaban impuestos, tenían tribunales propios) y el <b>tercer estado</b> (campesinos, artesanos y burguesía) sostenía con sus impuestos a todo el reino. Se pertenecía a un estamento por nacimiento.</p>`,
      svg: piramide("Pirámide estamental: rey arriba, nobleza y clero privilegiados, tercer estado en la base", [["rey", "var(--sun)"], ["nobleza y clero", "var(--card)"], ["tercer estado (90 %)", "var(--line)"]]),
    },
    {
      html: `<h3>La monarquía absoluta</h3><p>En el <mark>absolutismo</mark> el rey concentraba los tres poderes: hacía las leyes, las aplicaba y juzgaba. Decía gobernar por <b>derecho divino</b> y no rendía cuentas a nadie. El modelo fue Luis XIV de Francia («el Estado soy yo»). La excepción era <b>Gran Bretaña</b>, donde desde 1689 el Parlamento limitaba el poder del rey: una <b>monarquía parlamentaria</b>.</p>`,
      svg: dos("Comparación entre monarquía absoluta en Francia y parlamentaria en Gran Bretaña", ["Absoluta", ["Francia, España", "el rey hace leyes,", "gobierna y juzga", "derecho divino", "sin límites"], "var(--red)"], ["Parlamentaria", ["Gran Bretaña", "desde 1689", "el Parlamento", "aprueba leyes", "e impuestos"], "var(--pen)"]),
    },
    {
      html: `<h3>La Ilustración: luz de la razón</h3><p>Los ilustrados creían que la <mark>razón</mark> y la ciencia podían hacer a la humanidad más libre y feliz. Criticaban los privilegios, la superstición y el poder sin límites. <b>Locke</b> defendió los derechos naturales (vida, libertad, propiedad); <b>Montesquieu</b>, la <mark>división de poderes</mark>; <b>Rousseau</b>, la soberanía nacional (el poder viene del pueblo); <b>Voltaire</b>, la tolerancia religiosa. Sus ideas se difundieron con la <i>Enciclopedia</i> de Diderot y D'Alembert.</p>`,
      svg: rueda("Pensadores ilustrados alrededor de la idea de razón", "RAZÓN", [["Locke", "var(--leaf)"], ["Montesquieu", "var(--pen)"], ["Rousseau", "var(--red)"], ["Voltaire", "var(--sun)"], ["Enciclopedia", "var(--inf)"], ["Adam Smith", "var(--bac)"]], "var(--soc, #c2410c)"),
    },
    {
      html: `<h3>La división de poderes de Montesquieu</h3><p>En <i>El espíritu de las leyes</i> (1748) Montesquieu propuso separar el poder en tres para que ninguno abusara: el <b>legislativo</b> (hace las leyes, un parlamento), el <b>ejecutivo</b> (las aplica, el gobierno) y el <b>judicial</b> (juzga, los tribunales). Esta idea es la base de las constituciones democráticas actuales, incluida la española de 1978.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Templo con tres columnas: legislativo, ejecutivo y judicial">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 52 L 130 16 L 230 52 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>Constitución</text>
        ${[[62, "legislativo", "var(--pen)"], [130, "ejecutivo", "var(--leaf)"], [198, "judicial", "var(--red)"]].map(([x, t, c]) => `<rect x="${x - 22}" y="58" width="44" height="88" fill="var(--card)" stroke="${c}" stroke-width="3"/><text x="${x}" y="${164}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${t}</text>`).join("")}
        <rect x="24" y="146" width="212" height="6" fill="var(--ink)"/>
      </svg>`,
    },
    {
      html: `<h3>Despotismo ilustrado y España borbónica</h3><p>Algunos reyes aplicaron reformas ilustradas sin renunciar a su poder: es el <mark>despotismo ilustrado</mark>, resumido en «todo para el pueblo, pero sin el pueblo». En España la dinastía <b>Borbón</b> llegó tras la Guerra de Sucesión (1701-1714). Felipe V centralizó el Estado con los <b>Decretos de Nueva Planta</b>, y <b>Carlos III</b> (1759-1788) impulsó obras públicas, academias, la Real Fábrica de Tapices y la expulsión de los jesuitas.</p>`,
      svg: filas("Reyes Borbones del siglo XVIII en España y sus medidas", [["Felipe V", "Nueva Planta, centralismo", "var(--red)"], ["Fernando VI", "catastro de Ensenada", "var(--leaf)"], ["Carlos III", "reformas ilustradas", "var(--pen)"], ["Carlos IV", "crisis y Revolución francesa", "var(--muted)"]]),
    },
  ],
  figura: {
    titulo: "Del Antiguo Régimen a las ideas ilustradas",
    svg: figCols("Tres columnas: economía, sociedad y política en el Antiguo Régimen frente a la propuesta ilustrada", [
      ["Economía", ["agraria y de subsistencia", "señoríos y diezmo", "gremios artesanos", "→ ilustrados: libre", "comercio (Adam Smith)"], "var(--leaf)"],
      ["Sociedad", ["estamental", "privilegios por nacer", "nobleza y clero exentos", "→ ilustrados: igualdad", "ante la ley"], "var(--sun)"],
      ["Política", ["monarquía absoluta", "derecho divino", "rey con los 3 poderes", "→ ilustrados: división", "de poderes, soberanía"], "var(--red)"],
    ]),
  },
  video: { id: "UVmS_dWcWEk", titulo: "La Ilustración: resumen. Las ideas de Voltaire, Montesquieu, Rousseau…", canal: "Cuaderno de Historia", vistas: 1114376, megusta: 22005, busqueda: "antiguo régimen e ilustración resumen" },
  quiz: [
    { q: "¿Qué estamentos eran privilegiados en el Antiguo Régimen?", o: ["La burguesía y los campesinos", "La nobleza y el clero", "Los artesanos y el clero"], a: 1, e: "Nobleza y clero no pagaban la mayoría de impuestos y tenían leyes y tribunales propios." },
    { q: "En una monarquía absoluta, el rey…", o: ["comparte el poder con el Parlamento", "concentra los poderes legislativo, ejecutivo y judicial", "es elegido por el pueblo"], a: 1, e: "El rey absoluto hacía las leyes, gobernaba y juzgaba, y decía recibir el poder de Dios." },
    { q: "¿Quién propuso la división de poderes?", o: ["Montesquieu", "Voltaire", "Luis XIV"], a: 0, e: "Montesquieu la expuso en «El espíritu de las leyes» (1748)." },
    { q: "«Todo para el pueblo, pero sin el pueblo» resume…", o: ["la monarquía parlamentaria", "la democracia", "el despotismo ilustrado"], a: 2, e: "Los déspotas ilustrados hacían reformas para mejorar el país, pero sin dejar participar al pueblo." },
    { q: "¿Qué país tenía ya una monarquía parlamentaria en el siglo XVIII?", o: ["España", "Gran Bretaña", "Francia"], a: 1, e: "Desde la revolución de 1688-1689 el Parlamento británico limitaba el poder del rey." },
  ],
  examen: [
    { q: "Rousseau defendió que la soberanía reside en…", o: ["el rey", "la nación o el pueblo", "la Iglesia"], a: 1, e: "Para Rousseau el poder legítimo nace de la voluntad general del pueblo." },
    { q: "Los Decretos de Nueva Planta de Felipe V…", o: ["crearon el Parlamento", "suprimieron los fueros de la Corona de Aragón y centralizaron el Estado", "abolieron los privilegios de la nobleza"], a: 1, e: "Tras la Guerra de Sucesión, Felipe V impuso las leyes e instituciones de Castilla en los territorios de la Corona de Aragón (salvo Navarra y el País Vasco)." },
    { q: "La «Enciclopedia» de Diderot y D'Alembert servía para…", o: ["difundir el saber y las ideas ilustradas", "defender el absolutismo", "registrar los impuestos"], a: 0, e: "Reunía el conocimiento de la época con un enfoque racional y crítico." },
  ],
  feynman: ["Cómo era la sociedad estamental y quién pagaba impuestos", "Qué diferencia una monarquía absoluta de una parlamentaria", "Las ideas de Locke, Montesquieu, Rousseau y Voltaire", "Qué es el despotismo ilustrado y un ejemplo en España"],
  mapa: mapa("ANTIGUO RÉGIMEN", "var(--soc, #c2410c)", [
    ["Economía", "agraria · señoríos · gremios", "var(--leaf)"],
    ["Sociedad", "estamentos y privilegios", "var(--sun)"],
    ["Política", "absolutismo · derecho divino", "var(--red)"],
    ["Ilustración", "razón · poderes · soberanía", "var(--pen)"],
  ], 260),
  tarjetas: [
    ["¿Qué es un estamento?", "Un grupo social cerrado al que se pertenece por nacimiento, con derechos y deberes propios."],
    ["Tres poderes de Montesquieu", "Legislativo (hace leyes), ejecutivo (las aplica) y judicial (juzga)."],
    ["¿Qué defendía Locke?", "Los derechos naturales: vida, libertad y propiedad."],
    ["Despotismo ilustrado", "Reformas ilustradas hechas por reyes absolutos: «todo para el pueblo, pero sin el pueblo»."],
    ["Rey ilustrado de España", "Carlos III (1759-1788)."],
  ],
  familias: ["Preguntad qué derechos actuales no existían en el siglo XVIII (votar, juicio justo, libertad de prensa).", "Buscad en vuestra ciudad una calle, plaza o edificio dedicado a Carlos III o a un ilustrado.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: el Antiguo Régimen, la Ilustración y el reformismo borbónico como origen del mundo contemporáneo (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Lectura comparada de fragmentos de Montesquieu y Rousseau con artículos de la Constitución de 1978.", "Dinámica de rol: el alumnado se reparte en estamentos y paga «impuestos» según su grupo.", "Línea de tiempo de los Borbones del siglo XVIII con una obra pública de cada reinado."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Ilustración, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ilustraci%C3%B3n" },
  ],
  revisado: "2026-11-12",
};
