// Valores Cívicos y Éticos 2º ESO: la democracia y la participación. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "La democracia y la participación",
  minutos: 45,
  objetivos: ["Explicar qué es la democracia y sus principios", "Conocer los rasgos básicos de la Constitución española de 1978", "Distinguir los poderes del Estado y su separación", "Valorar las formas de participación ciudadana, también en el instituto"],
  claves: ["democracia", "soberanía popular", "Constitución", "separación de poderes", "elecciones", "ciudadanía", "participación"],
  pregunta: {
    texto: "Si en tu clase la mayoría vota que una persona limpie sola el aula todo el curso, ¿es democrático solo porque lo ha votado la mayoría?",
    respuesta: "No. La democracia no es solo votar: también exige <b>respetar los derechos</b> de todos, incluidas las minorías. Una mayoría no puede decidir que se vulnere la <mark>dignidad</mark> de alguien. Por eso las democracias tienen una Constitución que pone límites incluso a lo que vota la mayoría.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la democracia?</h3><p>La palabra viene del griego <i>demos</i> (pueblo) y <i>kratos</i> (poder): <b>el poder del pueblo</b>. Es una forma de gobierno en la que la <b>soberanía</b> reside en la ciudadanía, que decide directamente o elige a sus representantes.</p><p>Nació en la <b>Atenas</b> del siglo V a. C., pero allí solo votaban los hombres libres nacidos en la ciudad: ni mujeres, ni esclavos, ni extranjeros. Las democracias actuales reconocen el <b>sufragio universal</b>: votan todas las personas mayores de edad.</p>`,
      video: { id: "dbHRDG49XUg", titulo: "¿Qué es la democracia?", canal: "Magic Markers", vistas: 1063279 },
    },
    {
      html: `<h3>Democracia directa y representativa</h3>${tabla(["Tipo", "Cómo funciona", "Ejemplo"], [["Directa", "la ciudadanía vota cada decisión", "asamblea de Atenas; referéndum; asamblea de clase"], ["Representativa", "la ciudadanía elige representantes que deciden", "Congreso, Parlamentos autonómicos, ayuntamientos"]])}<p>Hoy casi todas las democracias son <b>representativas</b>, porque sería imposible que millones de personas votaran cada ley. Pero incluyen herramientas de participación directa, como el <b>referéndum</b> o la <b>iniciativa legislativa popular</b> (en España, con 500 000 firmas se puede proponer una ley).</p>`,
    },
    {
      html: `<h3>Principios de la democracia</h3><ul><li><b>Soberanía popular</b>: el poder viene de la ciudadanía.</li><li><b>Elecciones libres</b> y periódicas, con voto universal, igual, libre, directo y secreto.</li><li><b>Pluralismo político</b>: varios partidos e ideas pueden competir.</li><li><b>Separación de poderes</b>: nadie concentra todo el poder.</li><li><b>Estado de derecho</b>: todos, incluidos los gobernantes, deben cumplir la ley.</li><li><b>Respeto a los derechos humanos</b> y a las minorías.</li><li><b>Libertad de prensa</b> y de expresión.</li></ul>`,
      svg: svg("Siete principios de la democracia alrededor de la palabra democracia", `<circle cx="130" cy="90" r="30" fill="var(--eso)" fill-opacity=".15" stroke="var(--eso)" stroke-width="2.5"/>${t(130, 94, "democracia", { c: "var(--eso)", s: 12 })}${[["soberanía popular", 130, 22], ["elecciones libres", 200, 46], ["pluralismo", 214, 100], ["separación de poderes", 186, 158], ["estado de derecho", 70, 158], ["derechos humanos", 50, 100], ["libertad de prensa", 62, 46]].map(([n, x, y]) => t(x, y, n, { c: "var(--pen)", s: 9 })).join("")}`),
    },
    {
      html: `<h3>La Constitución española de 1978</h3><p>Tras casi cuarenta años de dictadura franquista (1939-1975), España recuperó la democracia en la <b>Transición</b>. La <b>Constitución</b> se aprobó en referéndum el <b>6 de diciembre de 1978</b>: ese día es fiesta nacional.</p><p>Es la <b>ley fundamental</b>: ninguna otra norma puede contradecirla. Tiene 169 artículos. Su artículo 1 dice que España es un <mark>Estado social y democrático de Derecho</mark> y que la forma política es la <b>monarquía parlamentaria</b> (el rey es jefe del Estado, pero no gobierna). También reconoce los derechos fundamentales y organiza el Estado en comunidades autónomas.</p>`,
      video: { id: "ofMR4HhaqBQ", titulo: "La Constitución española", canal: "Smile and Learn - Español", vistas: 136648 },
    },
    {
      html: `<h3>La separación de poderes</h3><p>El pensador francés <b>Montesquieu</b> (siglo XVIII) defendió que el poder debía dividirse en tres para que unos poderes controlaran a otros y nadie abusara:</p>`,
      svg: svg("Los tres poderes del Estado en España: legislativo, ejecutivo y judicial", `${[["Legislativo", "hace las leyes", "Cortes", "var(--pen)", 46], ["Ejecutivo", "gobierna", "Gobierno", "var(--leaf)", 130], ["Judicial", "juzga", "tribunales", "var(--red)", 214]].map(([a, b, c, col, x]) => `<rect x="${x - 38}" y="40" width="76" height="100" rx="8" fill="${col}" fill-opacity=".12" stroke="${col}" stroke-width="2"/>${t(x, 62, a, { c: col, s: 11 })}${t(x, 92, b, { s: 9 })}${t(x, 124, c, { c: "var(--muted)", s: 9 })}`).join("")}<path d="M30 40 L 130 14 L 230 40" fill="none" stroke="var(--ink)" stroke-width="2"/>${t(130, 32, "Estado", { s: 11 })}${t(130, 164, "se controlan entre sí", { c: "var(--muted)", s: 11 })}`),
    },
    {
      html: `<h3>Ser ciudadano o ciudadana</h3><p>La <b>ciudadanía</b> es la condición de quien pertenece a una comunidad política con derechos y deberes. En democracia, ser ciudadano no es solo votar cada cuatro años. También es:</p><ul><li>Informarse con fuentes fiables y pensar críticamente.</li><li>Participar en asociaciones, ONG, voluntariado.</li><li>Expresar opiniones y manifestarse pacíficamente.</li><li>Cumplir las leyes y pagar impuestos (que financian sanidad, educación, carreteras).</li><li>Cuidar lo público: parques, transporte, instituto.</li></ul><p>En España se puede votar a partir de los <b>18 años</b>, pero antes ya se puede participar de muchas maneras.</p>`,
    },
    {
      html: `<h3>La democracia en el instituto</h3><p>El instituto también es una pequeña comunidad democrática:</p>${tabla(["Órgano", "Qué hace"], [["Asamblea de clase", "debate y propone mejoras para el grupo"], ["Delegado o delegada", "representa a la clase; se elige por votación secreta"], ["Junta de delegados", "reúne a todos los delegados del centro"], ["Consejo Escolar", "órgano de gobierno con representantes de alumnado, familias, profesorado y personal"]])}<p>Presentarse a delegado, votar con criterio y participar en las asambleas es una forma real de <mark>practicar la democracia</mark>.</p>`,
    },
    {
      html: `<h3>Amenazas a la democracia</h3><ul><li>La <b>corrupción</b>: usar un cargo público para beneficio propio.</li><li>La <b>desinformación</b> y las noticias falsas.</li><li>La <b>abstención</b> y el desinterés por la política.</li><li>Los <b>discursos de odio</b> y la intolerancia.</li><li>La concentración del poder y los ataques a la prensa libre o a los jueces.</li></ul><p>La democracia no está garantizada para siempre: hay que <b>cuidarla</b> cada día con participación, información y respeto.</p>`,
    },
  ],
  figura: {
    titulo: "La democracia y la participación",
    svg: filas("Resumen: definición, tipos, principios, Constitución, poderes y participación", [["Democracia", "poder del pueblo · sufragio universal", "var(--eso)"], ["Tipos", "directa · representativa", "var(--pen)"], ["Principios", "elecciones · pluralismo · estado de derecho", "var(--sun)"], ["Constitución", "1978 · monarquía parlamentaria", "var(--red)"], ["Poderes", "legislativo · ejecutivo · judicial", "var(--leaf)"], ["Participar", "votar · asociarse · delegados · Consejo Escolar", "var(--ink)"]], 200),
  },
  video: { id: "dbHRDG49XUg", titulo: "¿Qué es la democracia?", canal: "Magic Markers", vistas: 1063279, megusta: 0, busqueda: "qué es la democracia" },
  quiz: mezcla([
    { q: "Democracia significa…", o: ["poder del pueblo", "poder de uno", "poder de los ricos"], a: 0, e: "Demos + kratos." },
    { q: "La democracia nació en…", o: ["Atenas", "Roma", "París"], a: 0, e: "Siglo V a. C." },
    { q: "Elegir representantes que deciden es democracia…", o: ["representativa", "directa", "absoluta"], a: 0, e: "La más común hoy." },
    { q: "Un referéndum es una herramienta de democracia…", o: ["directa", "indirecta", "judicial"], a: 0, e: "La ciudadanía vota una cuestión." },
    { q: "La Constitución española se aprobó en…", o: ["1978", "1931", "1812"], a: 0, e: "6 de diciembre." },
    { q: "La forma política de España es…", o: ["monarquía parlamentaria", "república", "monarquía absoluta"], a: 0, e: "Artículo 1." },
    { q: "El poder que hace las leyes es el…", o: ["legislativo", "ejecutivo", "judicial"], a: 0, e: "Cortes Generales." },
    { q: "La separación de poderes la defendió…", o: ["Montesquieu", "Kant", "Platón"], a: 0, e: "Siglo XVIII." },
    { q: "En España se puede votar en elecciones generales desde los…", o: ["18 años", "16 años", "21 años"], a: 0, e: "Mayoría de edad." },
    { q: "El órgano de gobierno del instituto con alumnado, familias y profesorado es el…", o: ["Consejo Escolar", "Senado", "Gobierno"], a: 0, e: "Participación." },
  ]),
  examen: mezcla([
    { q: "Que todos, incluidos los gobernantes, cumplan la ley se llama…", o: ["Estado de derecho", "pluralismo", "soberanía"], a: 0, e: "Nadie por encima de la ley." },
    { q: "Con 500 000 firmas en España se puede presentar una…", o: ["iniciativa legislativa popular", "sentencia", "moción de censura"], a: 0, e: "Propuesta de ley." },
    { q: "Una mayoría que vota quitar derechos a una minoría…", o: ["no respeta los principios democráticos", "es la esencia de la democracia", "es legal siempre"], a: 0, e: "Límites constitucionales." },
  ]),
  feynman: ["Qué significa democracia y su origen", "Democracia directa y representativa", "Principios de la democracia", "La Constitución de 1978 y la separación de poderes", "Cómo participar en el instituto"],
  mapa: mapa("DEMOCRACIA", "var(--eso)", [
    ["Tipos", "directa · representativa", "var(--pen)"],
    ["Principios", "elecciones · derechos", "var(--sun)"],
    ["Poderes", "legislativo · ejecutivo · judicial", "var(--leaf)"],
    ["Participar", "votar · delegados", "var(--red)"],
  ], 230),
  tarjetas: [
    ["Democracia", "Gobierno en el que el poder reside en el pueblo."],
    ["Sufragio universal", "Derecho a votar de todas las personas adultas."],
    ["Democracia representativa", "Se eligen representantes que deciden."],
    ["Referéndum", "Votación directa de la ciudadanía sobre una cuestión."],
    ["Constitución", "Ley fundamental; en España, de 1978."],
    ["Separación de poderes", "Legislativo, ejecutivo y judicial independientes."],
    ["Estado de derecho", "Todos están sometidos a la ley."],
    ["Consejo Escolar", "Órgano de gobierno participativo del centro."],
  ],
  familias: ["Hablad de por qué votáis (o no) y de cómo os informáis.", "Leed juntos el artículo 1 de la Constitución.", "Animadle a participar en la elección de delegado."],
  profesores: {
    saberes: "La democracia como forma de gobierno y como estilo de vida; principios democráticos; la Constitución española y la separación de poderes; la participación ciudadana y en el centro educativo (RD 217/2022, Educación en Valores Cívicos y Éticos, bloque B).",
    ideas: ["Simulación de elecciones a delegado con campaña y programa.", "Asamblea de clase con orden del día y acta.", "Visita virtual al Congreso de los Diputados."],
  },
  fuentes: [RD, { t: "Constitución española (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" }, { t: "Congreso de los Diputados", url: "https://www.congreso.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Clasifica cada institución en su poder: Gobierno, Tribunal Supremo, Congreso.", pasos: ["Gobierno: dirige y aplica → ejecutivo.", "Tribunal Supremo: juzga → judicial.", "Congreso: hace leyes → legislativo."], resultado: "Ejecutivo, judicial y legislativo." },
    { enunciado: "La clase vota la excursión: 14 votos a la playa, 11 a la montaña. ¿Qué tipo de democracia es y qué se decide?", pasos: ["Votan todos directamente: democracia directa.", "Gana la opción con más votos."], resultado: "Directa; se va a la playa, escuchando las razones de la minoría." },
    { enunciado: "Un presidente cierra periódicos que lo critican. ¿Qué principios vulnera?", pasos: ["Libertad de prensa y expresión.", "Pluralismo.", "Separación de poderes si actúa sin control judicial."], resultado: "Es un ataque a la democracia." },
  ],
  errores: [
    "Pensar que la democracia es solo votar.",
    "Creer que la mayoría puede decidir cualquier cosa.",
    "Confundir el poder ejecutivo (gobierna) con el legislativo (hace leyes).",
    "Pensar que los menores de 18 años no pueden participar.",
    "Creer que la democracia, una vez conseguida, ya no necesita cuidado.",
  ],
  ejercicios: [
    { q: "¿Qué significa democracia y de dónde viene la palabra?", sol: "Poder del pueblo; del griego demos y kratos." },
    { q: "¿Quién podía votar en la Atenas clásica?", sol: "Solo los hombres libres nacidos en la ciudad." },
    { q: "Diferencia democracia directa y representativa.", sol: "Directa: se vota cada decisión. Representativa: se eligen representantes." },
    { q: "Escribe cinco principios de la democracia.", sol: "Soberanía popular, elecciones libres, pluralismo, separación de poderes, estado de derecho." },
    { q: "¿Cuándo se aprobó la Constitución y qué dice su artículo 1?", sol: "6-12-1978; España es un Estado social y democrático de Derecho, monarquía parlamentaria." },
    { q: "Explica los tres poderes y quién los ejerce en España.", sol: "Legislativo: Cortes. Ejecutivo: Gobierno. Judicial: jueces y tribunales." },
    { q: "¿Por qué es importante la separación de poderes?", sol: "Para que unos poderes controlen a otros y nadie abuse." },
    { q: "Escribe cuatro formas de participar sin votar.", sol: "Asociaciones, voluntariado, manifestaciones pacíficas, informarse y opinar." },
    { q: "¿Cómo se elige al delegado de clase y qué hace?", sol: "Por votación secreta; representa a la clase." },
    { q: "Escribe tres amenazas para la democracia.", sol: "Corrupción, desinformación, discursos de odio." },
  ],
};
