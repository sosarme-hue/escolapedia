// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { rueda, dos, barras, linea, figCols } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La dictadura franquista",
  minutos: 40,
  objetivos: ["Describir las características políticas e ideológicas del franquismo", "Comparar la autarquía de posguerra con el desarrollismo de los años 60", "Explicar la represión, la oposición y los cambios sociales de la dictadura"],
  claves: ["franquismo", "nacionalcatolicismo", "autarquía", "desarrollismo", "represión", "oposición"],
  pregunta: {
    texto: "Hasta 1975 en España no se podía votar en elecciones libres, ni crear partidos ni sindicatos, y una mujer casada necesitaba el permiso de su marido para abrir una cuenta en el banco. ¿Cómo era vivir así?",
    respuesta: "Era vivir en la <mark>dictadura franquista</mark> (1939-1975): un régimen autoritario en el que <b>Francisco Franco</b> concentró todos los poderes durante 36 años, con censura, represión de los opositores y una ideología basada en el nacionalismo español y el catolicismo.",
  },
  bloques: [
    {
      html: `<h3>Un régimen personal y autoritario</h3><p>Franco era <b>jefe del Estado</b>, del gobierno, del ejército y del partido único (el Movimiento Nacional). No había Constitución ni elecciones libres, sino <b>Leyes Fundamentales</b>. Los pilares del régimen fueron el <b>ejército</b>, la <b>Iglesia</b> (el <mark>nacionalcatolicismo</mark>), la <b>Falange</b> y los grupos económicos que le apoyaban. Había censura de prensa, cine y libros, y un sindicato vertical obligatorio en el que estaban juntos empresarios y trabajadores.</p>`,
      svg: rueda("Pilares del franquismo", "FRANCO", [["ejército", "var(--ink)"], ["Iglesia", "var(--sun)"], ["Falange", "var(--red)"], ["terratenientes", "var(--leaf)"], ["banca", "var(--pen)"], ["censura", "var(--muted)"]], "var(--ink)"),
    },
    {
      html: `<h3>Represión y exilio</h3><p>Tras la guerra hubo una dura <mark>represión</mark>: decenas de miles de fusilados, cárceles y campos de concentración llenos, trabajos forzados y depuración de maestros y funcionarios. La Ley de Responsabilidades Políticas castigó a quienes habían apoyado a la República. Muchos opositores siguieron en el exilio y algunos grupos guerrilleros (los <b>maquis</b>) resistieron en el monte hasta los años 50.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Periódico tachado con la palabra censura">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="56" y="24" width="148" height="132" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="70" y="38" width="120" height="14" fill="var(--ink)"/>
        ${[64, 78, 92, 106, 120, 134].map((y) => `<rect x="70" y="${y}" width="${y % 28 ? 120 : 90}" height="6" rx="3" fill="var(--line)"/>`).join("")}
        <rect x="46" y="78" width="168" height="30" rx="4" fill="var(--red)" transform="rotate(-10 130 93)"/>
        <text x="130" y="99" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" ${D} transform="rotate(-10 130 93)">CENSURADO</text>
      </svg>`,
    },
    {
      html: `<h3>De la autarquía al desarrollismo</h3><p>En los años 40 el régimen practicó la <mark>autarquía</mark>: producir todo dentro del país, sin comerciar con el exterior. Fueron los «años del hambre», con cartillas de racionamiento y estraperlo (mercado negro). España estuvo aislada por su cercanía al Eje, hasta que la Guerra Fría la acercó a EE. UU. (acuerdos de 1953). Con el <b>Plan de Estabilización</b> (1959) se abrió la economía y llegó el <mark>desarrollismo</mark> de los años 60: industria, turismo y dinero de los emigrantes.</p>`,
      svg: dos("Autarquía frente a desarrollismo", ["Años 40", ["autarquía", "racionamiento", "estraperlo", "aislamiento", "hambre"], "var(--muted)"], ["Años 60", ["apertura", "industria", "turismo", "emigración", "SEAT 600"], "var(--leaf)"]),
    },
    {
      html: `<h3>Cambios sociales y oposición</h3><p>En los años 60 millones de personas emigraron del campo a las ciudades (Madrid, Barcelona, Bilbao) o a Europa (Alemania, Francia, Suiza). Creció una clase media que compraba coche y televisión. Al mismo tiempo crecía la <b>oposición</b>: huelgas obreras con el sindicato clandestino <b>Comisiones Obreras</b>, protestas de estudiantes universitarios, parte de la Iglesia tras el Concilio Vaticano II y los nacionalismos. ETA empezó a asesinar en 1968.</p>`,
      svg: barras("Turistas extranjeros llegados a España en millones", [["1950", 0.75, "var(--muted)", "0,75 M"], ["1960", 6, "var(--sun)", "6 M"], ["1970", 24, "var(--leaf)", "24 M"]], 26),
    },
    {
      html: `<h3>El final de la dictadura</h3><p>En 1969 Franco designó como sucesor, con el título de rey, a <b>Juan Carlos de Borbón</b>. En 1973 ETA asesinó al presidente del gobierno, Carrero Blanco. La crisis del petróleo, las huelgas y la enfermedad del dictador debilitaron el régimen. Franco murió el <mark>20 de noviembre de 1975</mark> y dos días después Juan Carlos I fue proclamado rey.</p>`,
      svg: linea("Últimos años del franquismo", [["1969", "sucesor:|Juan Carlos"], ["1973", "muere|Carrero"], ["1975", "muere Franco|20 nov."], ["1975", "Juan Carlos I|rey, 22 nov."]], "var(--ink)"),
    },
  ],
  figura: {
    titulo: "Etapas de la dictadura",
    svg: figCols("Tres etapas del franquismo: posguerra, consolidación y desarrollismo", [
      ["1939-1952", ["posguerra y represión", "autarquía y hambre", "aislamiento", "internacional", "nacionalcatolicismo"], "var(--muted)"],
      ["1953-1959", ["acuerdos con EE. UU.", "Concordato con", "el Vaticano", "entrada en la ONU", "(1955)"], "var(--pen)"],
      ["1959-1975", ["Plan de Estabilización", "desarrollismo", "turismo y emigración", "oposición creciente", "muerte de Franco"], "var(--leaf)"],
    ]),
  },
  video: { id: "BCrCOFBOM1M", titulo: "El franquismo", canal: "Academia Play", vistas: 1958593, megusta: 45345, busqueda: "franquismo resumen" },
  quiz: [
    { q: "¿Qué cargos acumulaba Franco?", o: ["Solo jefe del ejército", "Jefe del Estado, del gobierno, del ejército y del partido único", "Presidente elegido por el Parlamento"], a: 1, e: "Concentró todos los poderes y no rendía cuentas a nadie." },
    { q: "¿Qué fue la autarquía?", o: ["Una política de producir todo dentro del país sin comerciar con el exterior", "Un plan de turismo", "Una ley electoral"], a: 0, e: "Provocó escasez, racionamiento y mercado negro en los años 40." },
    { q: "¿Qué medida abrió la economía española en 1959?", o: ["El Plan de Estabilización", "El Concordato", "La Ley de Responsabilidades Políticas"], a: 0, e: "Liberalizó el comercio y la inversión y abrió el camino al desarrollismo." },
    { q: "El nacionalcatolicismo significaba…", o: ["la separación de Iglesia y Estado", "la unión del nacionalismo español y la Iglesia católica como base del régimen", "la libertad religiosa"], a: 1, e: "La Iglesia controló la educación y la moral pública a cambio de legitimar a Franco." },
    { q: "¿Cuándo murió Franco?", o: ["20 de noviembre de 1975", "1 de abril de 1939", "23 de febrero de 1981"], a: 0, e: "Dos días después Juan Carlos I fue proclamado rey." },
  ],
  examen: [
    { q: "¿Qué hizo cambiar la actitud de EE. UU. hacia Franco?", o: ["La Guerra Fría y el anticomunismo del régimen", "La democratización del país", "La entrada de España en la OTAN"], a: 0, e: "En 1953 EE. UU. firmó acuerdos con España a cambio de bases militares." },
    { q: "Comisiones Obreras nació como…", o: ["el sindicato oficial", "un sindicato clandestino de oposición", "un partido político"], a: 1, e: "Se infiltró en el sindicato vertical para defender a los trabajadores desde dentro." },
    { q: "¿Qué tres fuentes de dinero impulsaron el desarrollismo?", o: ["Oro, plata y petróleo", "Inversión extranjera, turismo y remesas de emigrantes", "Impuestos, multas y loterías"], a: 1, e: "Esas tres entradas de divisas financiaron la industrialización de los años 60." },
  ],
  feynman: ["Quién tenía el poder en el franquismo y cuáles eran sus pilares", "Qué diferencia hay entre autarquía y desarrollismo", "Qué cambios sociales hubo en los años 60", "Cómo terminó la dictadura"],
  mapa: mapa("FRANQUISMO", "var(--soc, #c2410c)", [
    ["Régimen", "Franco · partido único · censura", "var(--ink)"],
    ["Represión", "fusilamientos · cárcel · exilio", "var(--red)"],
    ["Economía", "autarquía → desarrollismo", "var(--leaf)"],
    ["Final", "oposición · 20-N-1975", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["Duración de la dictadura franquista", "De 1939 a 1975 (36 años)."],
    ["Autarquía", "Autosuficiencia económica de los años 40: racionamiento y estraperlo."],
    ["Plan de Estabilización", "1959: abrió la economía española al exterior."],
    ["Desarrollismo", "Crecimiento de los años 60 gracias a industria, turismo y emigración."],
    ["Muerte de Franco", "20 de noviembre de 1975."],
  ],
  familias: ["Preguntad a abuelos o vecinos cómo era la escuela, la censura o la emigración en los años 50 y 60.", "Buscad una cartilla de racionamiento o una foto antigua del SEAT 600 y comentadla.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la dictadura franquista, la represión y la oposición; memoria democrática y derechos (RD 217/2022, Geografía e Historia 4º; Ley 20/2022).",
    ideas: ["Entrevista intergeneracional sobre la vida cotidiana en el franquismo.", "Comparación de los derechos de la mujer antes y después de 1975.", "Gráfica de emigración española a Europa 1960-1973."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Franquismo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Franquismo" },
  ],
  revisado: "2026-11-12",
};
