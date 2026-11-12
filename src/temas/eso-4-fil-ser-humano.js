// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, linea, rueda } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "El ser humano: naturaleza y cultura",
  minutos: 60,
  objetivos: ["Explicar los procesos de hominización y humanización", "Distinguir lo natural (biológico) y lo cultural en el ser humano", "Conocer distintas respuestas filosóficas a la pregunta «¿qué es el ser humano?»", "Valorar la diversidad cultural evitando el etnocentrismo y el relativismo extremo"],
  claves: ["hominización", "humanización", "cultura", "socialización", "etnocentrismo", "persona"],
  pregunta: {
    texto: "En 1800 se encontró en un bosque de Francia a un niño que había crecido solo, sin contacto humano. Caminaba a cuatro patas y no hablaba. ¿Era menos humano que nosotros?",
    respuesta: "Biológicamente era un ser humano completo, pero le faltaba lo que nos da la <mark>cultura</mark>: el lenguaje, las costumbres, las normas. Somos a la vez <b>naturaleza</b> (un cuerpo heredado) y <b>cultura</b> (lo que aprendemos de los demás). Sin los otros, no llegamos a ser del todo humanos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el ser humano?</h3><p>Es una de las grandes preguntas de la filosofía; Kant decía que en ella se resumen todas las demás. La estudia la <b>antropología filosófica</b>. Las ciencias nos dan datos (somos primates, tenemos un cerebro grande, compartimos casi el 99 % del ADN con los chimpancés), pero la filosofía se pregunta por lo que nos hace <mark>únicos</mark>: la razón, la libertad, el lenguaje simbólico, la conciencia de la propia muerte o la capacidad de crear normas y valores.</p>`,
      svg: rueda("Rasgos propiamente humanos", "SER|HUMANO", [["razón", "var(--pen)"], ["lenguaje", "var(--leaf)"], ["libertad", "var(--red)"], ["cultura", "var(--sun)"], ["conciencia", "var(--inf)"], ["valores", "var(--bac)"]], "var(--ink)"),
    },
    {
      html: `<h3>Hominización: la evolución biológica</h3><p>La <b>hominización</b> es el proceso evolutivo, de unos 7 millones de años, que llevó de los primeros homínidos al <i>Homo sapiens</i>. Sus cambios clave fueron el <mark>bipedismo</mark> (caminar erguidos, que liberó las manos), la mano con pulgar oponible para manipular objetos, el aumento del cerebro (de unos 400 cm³ a unos 1.350 cm³) y el cambio en la laringe, que permitió articular sonidos. Darwin explicó este proceso mediante la <b>selección natural</b>.</p>`,
      svg: linea("Algunos pasos de la evolución humana", [["7 Ma", "primeros|homínidos"], ["3,2 Ma", "Lucy:|bipedismo"], ["2 Ma", "Homo|herramientas"], ["300.000", "Homo|sapiens"]], "var(--leaf)"),
      video: { id: "9Mm0K0D1YzM", titulo: "La evolución del ser humano: hominización y humanización", canal: "Unboxing Philosophy", vistas: 347626, megusta: 0 },
    },
    {
      html: `<h3>Humanización: la evolución cultural</h3><p>A la vez que el cuerpo cambiaba, apareció la <b>humanización</b>: el desarrollo de la cultura. Fabricar herramientas, dominar el fuego, enterrar a los muertos, pintar en las cuevas, hablar, vivir en grupos con normas… Desde entonces la evolución cultural va mucho más rápida que la biológica: nuestro cuerpo es casi igual al de hace 40.000 años, pero hemos pasado de las cuevas a los satélites. La cultura es nuestra <mark>segunda naturaleza</mark>.</p>`,
    },
    {
      html: `<h3>Naturaleza y cultura</h3><p>La <b>naturaleza</b> es lo que recibimos al nacer por herencia biológica: el color de ojos, los reflejos, el hambre. La <b>cultura</b> es todo lo que aprendemos de la sociedad: lengua, costumbres, creencias, técnicas, arte. Lo interesante es que en nosotros <mark>se mezclan</mark>: todos tenemos hambre (natural), pero comemos con palillos o con tenedor según la cultura. Los animales actúan sobre todo por <b>instinto</b>; el ser humano nace muy inmaduro y necesita aprender casi todo, por eso es tan flexible.</p>`,
      svg: dos("Ejemplos de naturaleza y de cultura", ["Natural", ["hambre", "sueño", "color de ojos", "reflejo de succión", "poder hablar"], "var(--leaf)"], ["Cultural", ["comer con tenedor", "horario de dormir", "moda y peinado", "saludar", "hablar español"], "var(--sun)"]),
    },
    {
      html: `<h3>La socialización</h3><p>La cultura se transmite por la <b>socialización</b>: el proceso por el que aprendemos las normas, valores y conocimientos de nuestra sociedad. La <mark>socialización primaria</mark> ocurre en la infancia, sobre todo en la familia; la <mark>secundaria</mark>, más tarde, en la escuela, los amigos, el trabajo y los medios de comunicación y redes sociales. Los casos de «niños salvajes», como Víctor de Aveyron, muestran que sin socialización no se desarrollan el lenguaje ni la vida social plena.</p>`,
      svg: filas("Agentes de socialización", [["Familia", "primeras normas y afectos", "var(--red)"], ["Escuela", "saberes y convivencia", "var(--pen)"], ["Amigos", "identidad y grupo", "var(--sun)"], ["Medios", "modelos y valores", "var(--inf)"], ["Trabajo", "roles adultos", "var(--leaf)"]]),
    },
    {
      html: `<h3>Diversidad cultural</h3><p>Hay miles de culturas distintas, y ante ellas caben varias actitudes. El <b>etnocentrismo</b> juzga a las demás culturas desde la propia, considerándola superior («lo nuestro es lo normal»). El <b>relativismo cultural</b> afirma que cada cultura solo puede juzgarse desde sí misma; ayuda a comprender, pero llevado al extremo impediría criticar prácticas que violan derechos. La postura más defendida hoy es el <mark>interculturalismo</mark>: diálogo y respeto entre culturas, con los <b>derechos humanos</b> como mínimo común.</p>`,
    },
    {
      html: `<h3>Respuestas filosóficas: ¿qué somos?</h3><p>Cada época ha dado su definición:</p>${tabla(["Autor", "Definición del ser humano"], [["Aristóteles", "animal racional y animal político (social)"], ["Tradición cristiana", "criatura hecha a imagen de Dios, con alma"], ["Descartes", "una mente (cosa que piensa) unida a un cuerpo"], ["Ortega y Gasset", "«Yo soy yo y mi circunstancia»"], ["Sartre", "existencia libre: primero existimos y luego nos hacemos"], ["Darwin", "un animal más, fruto de la evolución"]])}`,
    },
    {
      html: `<h3>La persona y su dignidad</h3><p>Hablar de <b>persona</b> es reconocer que cada ser humano tiene un <mark>valor propio</mark>, que no depende de su utilidad, su riqueza o su origen. Kant lo expresó así: las cosas tienen precio, pero las personas tienen <b>dignidad</b>. Por eso nunca deben ser tratadas solo como medios. Esta idea es la base de los derechos humanos, recogidos en la Declaración Universal de 1948: todos los seres humanos nacen libres e iguales en dignidad y derechos.</p>`,
    },
  ],
  figura: {
    titulo: "Lo que somos: naturaleza más cultura",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="La naturaleza biológica y la cultura aprendida se combinan en la persona">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      <circle cx="240" cy="100" r="80" fill="var(--leaf)" opacity=".35" stroke="var(--leaf)" stroke-width="3"/>
      <circle cx="440" cy="100" r="80" fill="var(--sun)" opacity=".35" stroke="var(--sun)" stroke-width="3"/>
      <g ${F} text-anchor="middle"><text x="200" y="80" font-size="17" font-weight="700" fill="var(--ink)" ${D}>Naturaleza</text><text x="200" y="104" font-size="13" fill="var(--ink)">herencia · cuerpo</text><text x="200" y="124" font-size="13" fill="var(--ink)">hominización</text>
      <text x="480" y="80" font-size="17" font-weight="700" fill="var(--ink)" ${D}>Cultura</text><text x="480" y="104" font-size="13" fill="var(--ink)">aprendizaje · normas</text><text x="480" y="124" font-size="13" fill="var(--ink)">humanización</text>
      <text x="340" y="96" font-size="16" font-weight="700" fill="var(--pen)" ${D}>PERSONA</text><text x="340" y="116" font-size="12" fill="var(--ink)">dignidad</text></g>
    </svg>`,
  },
  video: { id: "JHJ1mX0R-0c", titulo: "Antropología filosófica", canal: "La escuela en tu Hogar", vistas: 185697, megusta: 0, busqueda: "qué es el ser humano antropología filosófica" },
  ejemplos: [
    { enunciado: "Clasifica como natural o cultural: a) sentir frío; b) llevar abrigo de lana; c) celebrar la Nochevieja con uvas; d) tener sed.", pasos: ["a) Sentir frío: reacción del cuerpo, natural.", "b) Llevar abrigo de lana: una técnica aprendida, cultural (aunque responde a una necesidad natural).", "c) Las uvas de Nochevieja: costumbre española, cultural.", "d) Tener sed: natural."], resultado: "Naturales: a y d. Culturales: b y c." },
    { enunciado: "Un turista dice: «En ese país comen con las manos; son unos maleducados». ¿Qué actitud muestra y cómo respondería un interculturalista?", pasos: ["Juzga otra cultura con las normas de la suya: es etnocentrismo.", "Comer con las manos tiene allí sus propias normas de cortesía.", "Un interculturalista intentaría entender esas normas y no considerarlas inferiores."], resultado: "Etnocentrismo; la respuesta intercultural es comprender antes de juzgar." },
    { enunciado: "Explica la frase de Ortega «Yo soy yo y mi circunstancia».", pasos: ["El «yo» es la persona con su libertad.", "La «circunstancia» es todo lo que la rodea: época, país, familia, cuerpo.", "Ortega añadía: «y si no la salvo a ella no me salvo yo»: debemos asumir y mejorar nuestro entorno."], resultado: "Somos inseparables de nuestro contexto, pero podemos actuar sobre él." },
  ],
  errores: [
    "Confundir hominización (evolución biológica) con humanización (evolución cultural).",
    "Pensar que la cultura es solo el arte o los libros: incluye costumbres, técnicas, lengua y valores.",
    "Creer que lo cultural es «menos real» que lo natural: forma parte de lo que somos.",
    "Pensar que el relativismo cultural obliga a aceptar cualquier práctica, incluso la que vulnera derechos.",
    "Decir que el ser humano «desciende del mono»: humanos y chimpancés tienen un antepasado común.",
  ],
  ejercicios: [
    { q: "Define hominización y humanización.", sol: "Hominización: proceso evolutivo biológico que llevó al Homo sapiens. Humanización: desarrollo de la cultura (herramientas, lenguaje, normas)." },
    { q: "Escribe cuatro cambios biológicos clave en la hominización.", sol: "El bipedismo, el pulgar oponible, el aumento del cerebro y los cambios en la laringe que permitieron el habla." },
    { q: "¿Por qué se dice que la cultura es nuestra «segunda naturaleza»?", sol: "Porque lo aprendido nos configura tanto como lo heredado y es imprescindible para vivir como humanos." },
    { q: "Pon dos ejemplos de conductas en las que se mezclan naturaleza y cultura.", sol: "Comer (hambre natural, forma cultural) y dormir (necesidad natural, horarios y costumbres culturales)." },
    { q: "Explica la diferencia entre socialización primaria y secundaria.", sol: "La primaria se da en la infancia, sobre todo en la familia; la secundaria, después, en la escuela, los amigos, el trabajo y los medios." },
    { q: "¿Qué nos enseñan los casos de niños salvajes?", sol: "Que sin contacto social no se desarrollan el lenguaje ni las capacidades humanas plenas." },
    { q: "Define etnocentrismo y pon un ejemplo.", sol: "Juzgar otras culturas desde la propia, creyéndola superior. Ejemplo: considerar «raras» las comidas de otros países solo por ser distintas." },
    { q: "¿Qué problema tiene el relativismo cultural extremo?", sol: "Que impide criticar prácticas que vulneran derechos humanos, como la esclavitud, si una cultura las acepta." },
    { q: "Explica qué quiere decir Aristóteles con «animal político».", sol: "Que el ser humano es social por naturaleza y solo se realiza plenamente viviendo en comunidad (polis)." },
    { q: "¿Qué diferencia hay, según Kant, entre precio y dignidad?", sol: "Las cosas tienen precio y se pueden sustituir; las personas tienen dignidad, un valor propio que no se puede intercambiar." },
  ],
  quiz: [
    { q: "La hominización es…", o: ["la evolución biológica", "la educación", "la cultura"], a: 0, e: "Proceso evolutivo hasta el Homo sapiens." },
    { q: "El bipedismo permitió…", o: ["liberar las manos", "volar", "ver en color"], a: 0, e: "Las manos quedaron libres para usar herramientas." },
    { q: "Hablar español es algo…", o: ["natural", "cultural", "instintivo"], a: 1, e: "Se aprende de la sociedad." },
    { q: "La socialización primaria se da sobre todo en…", o: ["la familia", "el trabajo", "la universidad"], a: 0, e: "En la infancia." },
    { q: "Juzgar otra cultura como inferior es…", o: ["relativismo", "etnocentrismo", "interculturalismo"], a: 1, e: "Tomar la propia como medida." },
    { q: "Aristóteles definió al ser humano como…", o: ["animal racional y político", "cosa que piensa", "existencia libre"], a: 0, e: "Razón y vida en la polis." },
    { q: "«Yo soy yo y mi circunstancia» es de…", o: ["Sartre", "Ortega y Gasset", "Kant"], a: 1, e: "Filósofo español del siglo XX." },
    { q: "Según Kant, las personas tienen…", o: ["precio", "dignidad", "dueño"], a: 1, e: "Un valor propio e insustituible." },
    { q: "La evolución cultural es…", o: ["más rápida que la biológica", "igual de lenta", "inexistente"], a: 0, e: "De las cuevas a los satélites en pocos milenios." },
    { q: "Los animales actúan sobre todo por…", o: ["instinto", "leyes", "costumbres escritas"], a: 0, e: "Conductas heredadas." },
  ],
  examen: [
    { q: "El interculturalismo propone…", o: ["diálogo con los derechos humanos como mínimo", "que cada cultura viva aislada", "imponer una cultura"], a: 0, e: "Respeto y diálogo." },
    { q: "Humanos y chimpancés…", o: ["comparten un antepasado común", "son la misma especie", "no se parecen genéticamente"], a: 0, e: "No descendemos del chimpancé." },
    { q: "Para Sartre, el ser humano…", o: ["primero existe y luego se hace", "nace ya hecho", "es solo cuerpo"], a: 0, e: "La existencia precede a la esencia." },
  ],
  feynman: ["Diferencia entre hominización y humanización", "Qué es natural y qué es cultural en nosotros, con ejemplos", "Cómo se transmite la cultura: la socialización", "Qué es la dignidad de la persona"],
  mapa: mapa("SER HUMANO", "var(--leaf)", [
    ["Naturaleza", "hominización · herencia", "var(--leaf)"],
    ["Cultura", "humanización · socialización", "var(--sun)"],
    ["Diversidad", "etnocentrismo · interculturalidad", "var(--pen)"],
    ["Persona", "dignidad · derechos", "var(--red)"],
  ], 280),
  tarjetas: [
    ["Antropología filosófica", "Rama de la filosofía que se pregunta qué es el ser humano."],
    ["Hominización", "Evolución biológica que llevó al Homo sapiens."],
    ["Humanización", "Desarrollo de la cultura: lenguaje, técnicas, normas."],
    ["Cultura", "Todo lo que aprendemos de la sociedad y no heredamos biológicamente."],
    ["Socialización", "Proceso por el que aprendemos las normas y valores de la sociedad."],
    ["Etnocentrismo", "Juzgar otras culturas desde la propia, creyéndola superior."],
    ["Animal político", "Definición de Aristóteles: el ser humano es social por naturaleza."],
    ["Dignidad", "Valor propio de cada persona, que no tiene precio."],
  ],
  familias: ["Comparad costumbres de vuestra familia con las de otra cultura que conozcáis (comidas, fiestas, saludos).", "Contad qué aprendisteis en casa y qué fuera: socialización primaria y secundaria.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): antropología filosófica, hominización y humanización, naturaleza y cultura, diversidad cultural y dignidad (marco del RD 217/2022).",
    ideas: ["Línea del tiempo de la evolución humana en el aula.", "Debate sobre el caso de Víctor de Aveyron (película El pequeño salvaje, de Truffaut).", "Mapa de costumbres de las familias del grupo."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo de la Evolución Humana de Burgos", url: "https://www.museoevolucionhumana.com/" },
  ],
  revisado: "2026-11-12",
};
