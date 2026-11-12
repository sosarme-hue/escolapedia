// Valores Cívicos y Éticos 2º ESO: la igualdad y la no discriminación. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, chips, persona, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Valores Cívicos y Éticos",
  curso: C,
  titulo: "La igualdad y la no discriminación",
  minutos: 45,
  objetivos: ["Distinguir igualdad, equidad y diferencia", "Reconocer prejuicios, estereotipos y discriminación", "Analizar la desigualdad entre mujeres y hombres y otras formas de discriminación", "Proponer acciones para una convivencia inclusiva"],
  claves: ["igualdad", "equidad", "diversidad", "prejuicio", "estereotipo", "discriminación", "inclusión"],
  pregunta: {
    texto: "¿Es justo dar a todos los alumnos exactamente lo mismo, aunque uno no vea bien la pizarra y otro sí?",
    respuesta: "No del todo. Tratar <b>igual</b> a quien está en situaciones distintas puede ser injusto. La <b>equidad</b> consiste en dar a cada uno lo que necesita para tener <mark>las mismas oportunidades</mark>: por ejemplo, sentar delante a quien ve peor. Igualdad de derechos no significa que todos seamos idénticos.",
  },
  bloques: [
    {
      html: `<h3>Iguales y diferentes</h3><p>Todas las personas somos <b>iguales en dignidad y derechos</b>, pero somos <b>diferentes</b> en muchas cosas: aspecto, origen, lengua, capacidades, creencias, gustos, orientación sexual… Esa variedad se llama <b>diversidad</b> y es una riqueza.</p><p>Lo contrario de la igualdad no es la diferencia, sino la <b>desigualdad</b>: que unas personas tengan menos derechos u oportunidades que otras por una característica personal.</p><p>El artículo <b>14 de la Constitución española</b> dice: «Los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición o circunstancia personal o social».</p>`,
      video: { id: "-4o6tQkJdwo", titulo: "Igualdad y no discriminación", canal: "SNDIF", vistas: 3306304 },
    },
    {
      html: `<h3>Igualdad y equidad</h3><p>La <b>igualdad</b> da a todos lo mismo. La <b>equidad</b> da a cada uno lo que necesita para llegar al mismo punto de partida. Las dos son necesarias: igualdad de <b>derechos</b> para todos y medidas de equidad para que esos derechos sean <b>reales</b>.</p><p>Ejemplos de equidad: becas para familias con menos recursos, rampas y ascensores, apoyo escolar a quien lo necesita, materiales en braille.</p>`,
      svg: svg("Igualdad: tres personas de distinta altura con una caja cada una; la más baja no ve por encima de la valla. Equidad: cada una tiene las cajas que necesita y las tres ven", (() => { const fig = (x, hy, fy, c) => `<g stroke="${c}" stroke-width="3" stroke-linecap="round" fill="none"><circle cx="${x}" cy="${hy}" r="6" fill="${c}" fill-opacity=".25"/><path d="M${x} ${hy + 6} V ${hy + (fy - hy) * 0.6} M${x} ${hy + 12} l -8 10 M${x} ${hy + 12} l 8 10 M${x} ${hy + (fy - hy) * 0.6} L ${x - 6} ${fy} M${x} ${hy + (fy - hy) * 0.6} L ${x + 6} ${fy}"/></g>`; const H = [70, 58, 46]; return [0, 1].map((p) => { const ox = p * 130, cajas = p === 0 ? [1, 1, 1] : [0, 1, 2]; return `<rect x="${ox + 8}" y="88" width="114" height="62" fill="var(--sun)" fill-opacity=".25" stroke="var(--sun)" stroke-width="2"/>` + [0, 1, 2].map((i) => { const x = ox + 30 + i * 35, fy = 150 - cajas[i] * 14, hy = fy - H[i]; return Array.from({ length: cajas[i] }, (_, k) => `<rect x="${x - 11}" y="${150 - (k + 1) * 14}" width="22" height="14" fill="var(--card)" stroke="var(--muted)"/>`).join("") + fig(x, hy, fy, hy + 6 < 88 ? "var(--leaf)" : "var(--red)"); }).join(""); }).join(""); })() + `<path d="M4 150 H 256" stroke="var(--ink)" stroke-width="2"/>${t(65, 164, "igualdad", { c: "var(--pen)", s: 12 })}${t(195, 164, "equidad", { c: "var(--leaf)", s: 12 })}${t(65, 177, "lo mismo para todos", { c: "var(--muted)", s: 9 })}${t(195, 177, "lo que cada uno necesita", { c: "var(--muted)", s: 9 })}`),
    },
    {
      html: `<h3>Del estereotipo a la discriminación</h3>${tabla(["Concepto", "Qué es", "Ejemplo"], [["Estereotipo", "idea simplificada sobre un grupo (pensamiento)", "«los chicos no lloran»"], ["Prejuicio", "juicio previo, normalmente negativo, sin conocer (actitud)", "«seguro que no sabe hacerlo»"], ["Discriminación", "trato desfavorable por pertenecer a un grupo (acción)", "no dejar jugar a alguien por su origen"]])}<p>Los tres forman una cadena: un estereotipo alimenta un prejuicio, y el prejuicio puede acabar en una <mark>acción discriminatoria</mark>. Romper la cadena empieza por <b>conocer</b> a las personas antes de juzgarlas.</p>`,
      svg: svg("Cadena: estereotipo, prejuicio y discriminación", `${[["estereotipo", "pienso", "var(--sun)", 40], ["prejuicio", "siento", "var(--inf)", 130], ["discriminación", "actúo", "var(--red)", 220]].map(([a, b, c, x]) => `<circle cx="${x}" cy="80" r="34" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.5"/>${t(x, 80, a, { c, s: a.length > 12 ? 8 : 11 })}${t(x, 96, b, { c: "var(--muted)", s: 10 })}`).join("")}<path d="M76 80 H 92 M166 80 H 184" stroke="var(--ink)" stroke-width="2.5"/><path d="M88 74 L 94 80 L 88 86 M180 74 L 186 80 L 180 86" fill="none" stroke="var(--ink)" stroke-width="2.5"/>${t(130, 150, "conocer a las personas rompe la cadena", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>Formas de discriminación</h3><ul><li><b>Racismo y xenofobia</b>: por el origen, el color de piel o la nacionalidad.</li><li><b>Machismo y sexismo</b>: por ser mujer (o por no cumplir los roles de género).</li><li><b>Capacitismo</b>: hacia personas con discapacidad.</li><li><b>LGTBIfobia</b>: por la orientación sexual o la identidad de género.</li><li><b>Aporofobia</b>: rechazo a las personas pobres (palabra creada por la filósofa española Adela Cortina).</li><li>Por <b>religión</b>, <b>edad</b> o <b>aspecto físico</b>.</li></ul><p>La discriminación puede ser <b>directa</b> (insultar, excluir) o <b>indirecta</b> (una norma aparentemente neutral que perjudica a un grupo, como un edificio sin rampa).</p>`,
    },
    {
      html: `<h3>Igualdad entre mujeres y hombres</h3><p>Durante siglos las mujeres no pudieron votar, estudiar en la universidad o tener cuenta bancaria propia. En España las mujeres votaron por primera vez en <b>1933</b>, gracias en parte a <b>Clara Campoamor</b>. Hoy la ley reconoce la igualdad, pero persisten desigualdades:</p><ul><li><b>Brecha salarial</b>: las mujeres cobran de media menos que los hombres.</li><li>Menor presencia en puestos de dirección y en carreras tecnológicas.</li><li>Más horas dedicadas al cuidado de hijos, mayores y tareas domésticas.</li><li>Violencia de género.</li></ul><p>El <b>feminismo</b> es el movimiento que defiende la igualdad real de derechos y oportunidades entre mujeres y hombres.</p>`,
      video: { id: "iyCHxB7wdeQ", titulo: "¿Por qué existe aún desigualdad entre hombres y mujeres?", canal: "AprendemosJuntos", vistas: 1240817 },
    },
    {
      html: `<h3>El acoso escolar por discriminación</h3><p>Muchos casos de <b>acoso escolar</b> empiezan con burlas por ser diferente: el acento, el peso, la ropa, la orientación sexual, una discapacidad. El acoso es:</p><ul><li><b>Intencionado</b>: se quiere hacer daño.</li><li><b>Repetido</b> en el tiempo.</li><li>Con <b>desequilibrio de poder</b>: la víctima no puede defenderse sola.</li></ul><p>Quien mira y se ríe también participa. Si ves un caso, <mark>no te calles</mark>: apoya a la víctima y cuéntaselo a un adulto de confianza. En España existe el teléfono gratuito contra el acoso escolar <b>900 018 018</b>.</p>`,
    },
    {
      html: `<h3>Construir una sociedad inclusiva</h3><p>La <b>inclusión</b> significa que todas las personas puedan participar plenamente, con sus diferencias. Algunas acciones:</p>`,
      svg: svg("Acciones para la inclusión en el instituto y en la sociedad", chips([["Conocer antes de juzgar", "hablar con quien es diferente", "var(--pen)"], ["Lenguaje respetuoso", "sin insultos ni bromas que hieren", "var(--sun)"], ["Accesibilidad", "rampas · subtítulos · lectura fácil", "var(--leaf)"], ["Actuar", "apoyar a la víctima · avisar a un adulto", "var(--red)"]], 8, 36), 180),
    },
    {
      html: `<h3>Las leyes contra la discriminación</h3><p>Además del artículo 14 de la Constitución, en España hay leyes específicas: la Ley de igualdad efectiva de mujeres y hombres (2007), la Ley integral para la igualdad de trato y la no discriminación (2022) y leyes sobre derechos de las personas con discapacidad. El Código Penal castiga los <b>delitos de odio</b>: agresiones o amenazas motivadas por el racismo, la LGTBIfobia u otras formas de discriminación.</p><p>Las leyes son necesarias, pero la igualdad real se construye también con las <b>actitudes</b> de cada día.</p>`,
    },
  ],
  figura: {
    titulo: "La igualdad y la no discriminación",
    svg: filas("Resumen: igualdad y diversidad, equidad, cadena del prejuicio, tipos de discriminación, igualdad de género e inclusión", [["Igualdad", "en dignidad y derechos · art. 14 CE", "var(--pen)"], ["Equidad", "a cada uno lo que necesita", "var(--leaf)"], ["Cadena", "estereotipo → prejuicio → discriminación", "var(--red)"], ["Tipos", "racismo · machismo · capacitismo · aporofobia", "var(--sun)"], ["Género", "brecha salarial · cuidados · violencia", "var(--inf)"], ["Inclusión", "conocer · respetar · actuar", "var(--ink)"]], 200),
  },
  video: { id: "-4o6tQkJdwo", titulo: "Igualdad y no discriminación", canal: "SNDIF", vistas: 3306304, megusta: 0, busqueda: "igualdad y no discriminación" },
  quiz: mezcla([
    { q: "Lo contrario de la igualdad es…", o: ["la desigualdad", "la diferencia", "la diversidad"], a: 0, e: "Diferentes pero iguales en derechos." },
    { q: "Dar a cada uno lo que necesita para tener las mismas oportunidades es…", o: ["equidad", "igualdad", "discriminación"], a: 0, e: "Ejemplo: becas." },
    { q: "«Las chicas no saben de mecánica» es un…", o: ["estereotipo", "derecho", "valor"], a: 0, e: "Idea simplificada." },
    { q: "No dejar entrar a alguien en un grupo por su origen es…", o: ["discriminación", "estereotipo", "equidad"], a: 0, e: "Es una acción." },
    { q: "El rechazo a las personas pobres se llama…", o: ["aporofobia", "xenofobia", "capacitismo"], a: 0, e: "Término de Adela Cortina." },
    { q: "La discriminación hacia personas con discapacidad se llama…", o: ["capacitismo", "racismo", "sexismo"], a: 0, e: "Barreras y prejuicios." },
    { q: "El artículo de la Constitución que garantiza la igualdad ante la ley es el…", o: ["14", "1", "27"], a: 0, e: "No discriminación." },
    { q: "Las mujeres votaron por primera vez en España en…", o: ["1933", "1978", "1812"], a: 0, e: "Clara Campoamor." },
    { q: "Un edificio sin rampa es un ejemplo de discriminación…", o: ["indirecta", "directa", "positiva"], a: 0, e: "Norma neutral que perjudica." },
    { q: "Si ves acoso escolar, lo correcto es…", o: ["apoyar a la víctima y avisar a un adulto", "reírte", "grabarlo"], a: 0, e: "No callar." },
  ]),
  examen: mezcla([
    { q: "El orden de la cadena de la discriminación es…", o: ["estereotipo, prejuicio, discriminación", "discriminación, prejuicio, estereotipo", "prejuicio, equidad, estereotipo"], a: 0, e: "Pensar, sentir, actuar." },
    { q: "La brecha salarial es…", o: ["la diferencia media de sueldo entre mujeres y hombres", "un impuesto", "un tipo de beca"], a: 0, e: "Desigualdad de género." },
    { q: "Una característica del acoso escolar es…", o: ["repetirse en el tiempo", "ser una pelea puntual entre iguales", "ser accidental"], a: 0, e: "Intencionado y con desequilibrio." },
  ]),
  feynman: ["Diferencia entre igualdad, diferencia y diversidad", "Igualdad y equidad", "Estereotipo, prejuicio y discriminación", "Formas de discriminación", "Cómo actuar ante el acoso"],
  mapa: mapa("IGUALDAD", "var(--eso)", [
    ["Igualdad", "dignidad · derechos", "var(--pen)"],
    ["Equidad", "según necesidad", "var(--leaf)"],
    ["Discriminación", "estereotipo → acción", "var(--red)"],
    ["Inclusión", "conocer · actuar", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Diversidad", "Variedad de personas y formas de vida: una riqueza."],
    ["Equidad", "Dar a cada uno lo que necesita para igualar oportunidades."],
    ["Estereotipo", "Idea simplificada sobre un grupo."],
    ["Prejuicio", "Juicio previo, normalmente negativo, sin conocer."],
    ["Discriminación", "Trato desfavorable por pertenecer a un grupo."],
    ["Aporofobia", "Rechazo a las personas pobres."],
    ["Brecha salarial", "Diferencia media de sueldo entre mujeres y hombres."],
    ["Inclusión", "Que todos participen plenamente con sus diferencias."],
  ],
  familias: ["Repartid las tareas de casa de forma equitativa y comentad por qué.", "Buscad en anuncios estereotipos de género y hablad de ellos.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Igualdad y no discriminación: diversidad, equidad, estereotipos y prejuicios; igualdad efectiva entre mujeres y hombres; respeto a la diversidad afectivo-sexual, cultural y funcional; prevención del acoso (RD 217/2022, Educación en Valores Cívicos y Éticos, bloque B).",
    ideas: ["Análisis de estereotipos en publicidad y redes.", "Investigación sobre mujeres referentes en ciencia.", "Campaña contra el acoso diseñada por el alumnado."],
  },
  fuentes: [RD, { t: "Constitución española (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" }, { t: "Instituto de las Mujeres", url: "https://www.inmujeres.gob.es/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Un instituto da a todos el mismo examen escrito, incluida una alumna ciega. ¿Es justo?", pasos: ["Se aplica igualdad: lo mismo para todos.", "Ella no puede leerlo: no tiene las mismas oportunidades.", "Equidad: examen en braille u oral."], resultado: "No es justo; hace falta una adaptación." },
    { enunciado: "Identifica estereotipo, prejuicio y discriminación: «Los de ese barrio roban» → «no me fío de él» → «no le dejo entrar en el grupo».", pasos: ["Idea sobre un grupo: estereotipo.", "Desconfianza sin conocerle: prejuicio.", "Excluirle: discriminación."], resultado: "Cadena completa." },
    { enunciado: "En un grupo de clase de mensajería se burlan cada día del acento de un compañero. ¿Es acoso?", pasos: ["Es intencionado.", "Se repite cada día.", "Él está solo frente al grupo."], resultado: "Sí: es ciberacoso por discriminación; hay que avisar a un adulto." },
  ],
  errores: [
    "Pensar que igualdad significa que todos somos idénticos.",
    "Creer que la equidad es un privilegio injusto.",
    "Decir «es solo una broma» ante comentarios racistas o machistas.",
    "Pensar que la desigualdad de género ya no existe.",
    "Creer que quien solo mira el acoso no tiene responsabilidad.",
  ],
  ejercicios: [
    { q: "Explica la diferencia entre diferencia y desigualdad.", sol: "La diferencia es natural y enriquece; la desigualdad es tener menos derechos u oportunidades." },
    { q: "Define igualdad y equidad con un ejemplo de cada una.", sol: "Igualdad: mismo trato (un voto por persona). Equidad: según necesidad (becas)." },
    { q: "Diferencia estereotipo, prejuicio y discriminación.", sol: "Pensamiento, actitud y acción." },
    { q: "Escribe cinco formas de discriminación.", sol: "Racismo, machismo, capacitismo, LGTBIfobia, aporofobia." },
    { q: "¿Qué dice el artículo 14 de la Constitución?", sol: "Igualdad ante la ley sin discriminación por nacimiento, raza, sexo, religión, opinión u otra circunstancia." },
    { q: "Escribe tres desigualdades actuales entre mujeres y hombres.", sol: "Brecha salarial, menos puestos directivos, más tareas de cuidado." },
    { q: "¿Quién fue Clara Campoamor?", sol: "Política que defendió el voto femenino en España (logrado en 1931, ejercido en 1933)." },
    { q: "Explica las tres características del acoso escolar.", sol: "Intencionado, repetido y con desequilibrio de poder." },
    { q: "¿Qué es la discriminación indirecta? Pon un ejemplo.", sol: "Una norma neutral que perjudica a un grupo: un edificio sin rampa." },
    { q: "Propón tres medidas para hacer tu instituto más inclusivo.", sol: "Respuesta abierta." },
  ],
};
