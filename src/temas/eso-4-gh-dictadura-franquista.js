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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar las etapas del franquismo y sus apoyos", "Describir la vida cotidiana y los cambios de los años 60"],
  bloques: [
    { tras: "Un régimen personal", html: `<h3>Los pilares del régimen</h3><p>Franco concentraba todos los poderes como <b>Caudillo</b> y jefe del Estado. Se apoyaba en las «familias» del régimen: el <b>ejército</b>, la <b>Iglesia católica</b> (el <mark>nacionalcatolicismo</mark>: la religión impregnaba la escuela, las leyes y la moral), <b>Falange</b>, que se convirtió en el partido único (Movimiento Nacional), y los <b>monárquicos</b> y grandes propietarios. No había Constitución, sino unas <b>Leyes Fundamentales</b>. Los trabajadores debían integrarse en el sindicato vertical, junto con los empresarios, y las huelgas estaban prohibidas.</p>` },
    { tras: "Represión y exilio", html: `<h3>La posguerra: hambre y racionamiento</h3><p>Los años 40 fueron los «<mark>años del hambre</mark>». Las <b>cartillas de racionamiento</b> (vigentes hasta 1952) limitaban la compra de pan, aceite o azúcar, y floreció el <b>estraperlo</b>, el mercado negro, donde los productos costaban mucho más. Faltaban electricidad y medicinas, y enfermedades como la tuberculosis eran frecuentes. Las mujeres perdieron los derechos logrados en la República: necesitaban permiso del marido para trabajar o abrir una cuenta, y la <b>Sección Femenina</b> las educaba para ser esposas y madres.</p>` },
    { tras: "De la autarquía al desarrollismo", html: `<h3>Del aislamiento a la aceptación internacional</h3><p>Al terminar la Segunda Guerra Mundial, el régimen, que había apoyado a Hitler y Mussolini, quedó aislado: la <b>ONU</b> recomendó retirar los embajadores en 1946. La <mark>Guerra Fría</mark> cambió la situación: para EE. UU., Franco era un aliado anticomunista. En <b>1953</b> se firmaron los <b>acuerdos con EE. UU.</b> (bases militares a cambio de ayuda) y el <b>Concordato</b> con el Vaticano. En <b>1955</b> España entró en la ONU, y en 1959 el presidente Eisenhower visitó Madrid.</p>` },
    { tras: "De la autarquía al desarrollismo", html: `<h3>El «milagro económico» de los 60</h3>${tabla(["Motor del crecimiento", "Qué supuso"], [["Plan de Estabilización (1959)", "apertura al exterior, fin de la autarquía"], ["Turismo", "de unos 4 millones de visitantes en 1959 a más de 30 en 1973"], ["Emigración a Europa", "más de un millón de españoles trabajan en Alemania, Francia o Suiza y envían divisas"], ["Inversión extranjera", "fábricas de coches, química, electrodomésticos"], ["Planes de Desarrollo", "polos industriales en ciudades como Valladolid, Burgos o Huelva"]])}<p>La renta de los españoles creció muy deprisa, pero el campo se vació: millones de personas emigraron a Madrid, Barcelona y el País Vasco.</p>`, video: { id: "gVEtOUmgMGE", titulo: "El milagro económico español", canal: "Memorias de Tiburón", vistas: 124638, megusta: 0 } },
    { tras: "Cambios sociales y oposición", html: `<h3>La vida cotidiana en los 60 y 70</h3><p>Con el desarrollo llegaron el <b>SEAT 600</b>, la televisión (TVE desde 1956), la nevera y la lavadora, y las vacaciones en la playa. Surgió una amplia <b>clase media</b>. Los turistas y los emigrantes trajeron costumbres más libres, y la juventud escuchaba música extranjera. Pero seguía la <mark>censura</mark> en la prensa, el cine y los libros, y no había libertad política. Las universidades y las fábricas se convirtieron en focos de protesta, y parte de la Iglesia, tras el Concilio Vaticano II, se distanció del régimen.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica por qué la Guerra Fría ayudó a Franco a sobrevivir.", pasos: ["Tras 1945 Franco estaba aislado por su apoyo al Eje.", "EE. UU. necesitaba aliados contra la URSS.", "España ofrecía una posición estratégica y un régimen anticomunista.", "En 1953 se firmaron los acuerdos de las bases."], resultado: "El anticomunismo convirtió a Franco en un aliado útil para EE. UU. y le permitió salir del aislamiento." },
    { enunciado: "Compara la autarquía y el desarrollismo.", pasos: ["Autarquía (1939-1959): producir todo dentro, poco comercio, hambre y estancamiento.", "Desarrollismo (1959-1973): apertura, turismo, inversiones y fuerte crecimiento."], resultado: "La autarquía fracasó; la apertura de 1959 trajo el crecimiento de los años 60." },
    { enunciado: "Analiza una cartilla de racionamiento de 1945 como fuente.", pasos: ["Tipo: documento oficial.", "Muestra que los alimentos básicos estaban limitados por persona.", "Refleja la escasez de la posguerra y la política autárquica.", "Explica la aparición del estraperlo."], resultado: "Es una prueba directa del hambre y del fracaso de la autarquía." },
  ],
  errores: [
    "Pensar que el franquismo fue igual de principio a fin: pasó de la autarquía al desarrollismo.",
    "Creer que hubo elecciones libres durante la dictadura.",
    "Atribuir el crecimiento de los 60 solo al régimen: fueron claves el turismo, la emigración y la economía europea.",
    "Decir que las mujeres tenían los mismos derechos que en la República: perdieron muchos.",
    "Confundir el Plan de Estabilización (1959) con los Planes de Desarrollo (desde 1964).",
  ],
  ejercicios: [
    { q: "¿Qué era el nacionalcatolicismo?", sol: "La unión entre el Estado franquista y la Iglesia católica, que controlaba la educación y la moral." },
    { q: "¿Qué era el sindicato vertical?", sol: "El único sindicato permitido, que agrupaba a trabajadores y empresarios bajo el control del Estado." },
    { q: "¿Qué fue el estraperlo?", sol: "El mercado negro de la posguerra, donde se vendían productos racionados a precios muy altos." },
    { q: "¿Por qué la ONU aisló a España en 1946?", sol: "Por la relación del régimen con la Alemania nazi y la Italia fascista." },
    { q: "Cita dos acuerdos de 1953.", sol: "Los pactos con EE. UU. (bases militares a cambio de ayuda) y el Concordato con el Vaticano." },
    { q: "¿Qué cambió el Plan de Estabilización de 1959?", sol: "Acabó con la autarquía, abrió la economía al exterior y controló la inflación." },
    { q: "¿Qué papel tuvieron los emigrantes españoles en Europa?", sol: "Enviaron dinero (divisas) a sus familias, que ayudó a financiar el crecimiento." },
    { q: "Describe el éxodo rural de los años 60.", sol: "Millones de personas dejaron los pueblos para trabajar en la industria y los servicios de las grandes ciudades." },
    { q: "¿Qué símbolos de consumo aparecen en los 60?", sol: "El SEAT 600, la televisión, la nevera, la lavadora y las vacaciones." },
    { q: "Cita dos focos de oposición al franquismo.", sol: "El movimiento obrero (Comisiones Obreras) y el movimiento estudiantil en las universidades; también nacionalistas y parte de la Iglesia." },
  ],
  quiz: [
    { q: "Las cartillas de racionamiento duraron hasta…", o: ["1945", "1952", "1975"], a: 1, e: "La posguerra fue muy larga." },
    { q: "España entró en la ONU en…", o: ["1945", "1955", "1977"], a: 1, e: "Gracias al contexto de la Guerra Fría." },
    { q: "TVE empezó a emitir en…", o: ["1956", "1939", "1975"], a: 0, e: "Al principio solo en Madrid." },
    { q: "La Sección Femenina…", o: ["educaba a las mujeres en el papel de esposa y madre", "defendía el voto femenino", "era un sindicato"], a: 0, e: "Dependía de Falange." },
    { q: "El turismo en España en 1973 superó los…", o: ["3 millones de visitantes", "30 millones de visitantes", "300 millones"], a: 1, e: "Fue un motor clave del crecimiento." },
  ],
  tarjetas: [
    ["Nacionalcatolicismo", "Unión entre el régimen franquista y la Iglesia."],
    ["Estraperlo", "Mercado negro de la posguerra."],
    ["Plan de Estabilización", "Medidas de 1959 que acabaron con la autarquía."],
  ],
});
