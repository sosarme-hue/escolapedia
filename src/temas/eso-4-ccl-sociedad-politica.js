// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, rueda } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "La sociedad y la política: democracia y república",
  minutos: 60,
  objetivos: ["Describir la organización social de Atenas, Esparta y Roma", "Explicar el funcionamiento de la democracia ateniense y sus límites", "Conocer las instituciones de la República romana", "Relacionar estas instituciones con las de los Estados actuales"],
  claves: ["democracia", "ciudadano", "asamblea", "Senado", "cónsules", "patricios y plebeyos"],
  pregunta: {
    texto: "En la Atenas de Pericles, la «cuna de la democracia», votaban unas 40.000 personas de una población de unas 300.000. ¿Quiénes no votaban?",
    respuesta: "Las <b>mujeres</b>, los <b>esclavos</b> y los <b>extranjeros</b> (metecos). La <mark>democracia ateniense</mark> fue un gran invento, pero muy distinta de la nuestra. Aun así, de Atenas y de Roma vienen palabras e ideas que usamos cada día: ciudadano, senado, república, votar, candidato.",
  },
  bloques: [
    {
      html: `<h3>La sociedad de Atenas</h3><p>La sociedad ateniense estaba dividida en tres grandes grupos. Los <b>ciudadanos</b> eran los varones libres, hijos de padre y madre atenienses, mayores de 18 años: tenían derechos políticos. Los <b>metecos</b> eran extranjeros libres que vivían en Atenas, a menudo comerciantes y artesanos; pagaban impuestos, pero no votaban. Los <b>esclavos</b>, normalmente prisioneros de guerra, no tenían ningún derecho. Las <mark>mujeres</mark>, aunque fueran hijas de ciudadanos, no participaban en la política y vivían casi siempre en el gineceo, la parte de la casa reservada para ellas.</p>`,
      svg: filas("Sociedad ateniense", [["Ciudadanos", "varones libres: votan", "var(--pen)"], ["Mujeres", "sin derechos políticos", "var(--inf)"], ["Metecos", "extranjeros libres", "var(--sun)"], ["Esclavos", "sin ningún derecho", "var(--ink)"]]),
    },
    {
      html: `<h3>Cómo nació la democracia</h3><p>Al principio, las polis estaban gobernadas por reyes y después por <b>aristócratas</b> («los mejores», los nobles). En Atenas, una serie de reformas fue dando poder al pueblo: <b>Solón</b> (594 a. C.) abolió la esclavitud por deudas; <b>Clístenes</b> (508 a. C.) organizó a los ciudadanos en tribus y creó la <mark>democracia</mark> (<i>demos</i>, pueblo; <i>kratos</i>, poder); y <b>Pericles</b>, en el siglo V a. C., pagó un sueldo a quienes ejercían cargos públicos para que también los pobres pudieran participar.</p>`,
    },
    {
      html: `<h3>Las instituciones atenienses</h3><p>La democracia de Atenas era <b>directa</b>: los ciudadanos votaban personalmente las leyes.</p>${tabla(["Institución", "Quién la formaba", "Función"], [["Ekklesía (Asamblea)", "todos los ciudadanos", "votaba leyes, la guerra y la paz; se reunía en la colina de la Pnix"], ["Bulé (Consejo de los 500)", "500 ciudadanos sorteados", "preparaba las leyes que votaba la Asamblea"], ["Heliea (tribunales)", "unos 6.000 jurados sorteados", "juzgaba los delitos"], ["Arcontes", "9 magistrados sorteados", "funciones religiosas y judiciales"], ["Estrategos", "10 generales elegidos", "mandaban el ejército y la flota"]])}<p>La mayoría de cargos se elegían por <b>sorteo</b>, porque se pensaba que así cualquier ciudadano podía gobernar.</p>`,
      video: { id: "q4kSLZhxQ0I", titulo: "La democracia ateniense", canal: "Hasclepio", vistas: 271918, megusta: 0 },
    },
    {
      html: `<h3>El ostracismo y los límites de la democracia</h3><p>Para evitar que alguien acumulara demasiado poder, los atenienses usaban el <mark>ostracismo</mark>: una vez al año podían votar escribiendo un nombre en un trozo de cerámica (<i>óstrakon</i>); si alguien reunía 6.000 votos, era desterrado diez años. La democracia ateniense tenía límites claros: excluía a la mayoría de la población, se apoyaba en el trabajo de los esclavos y a veces tomaba decisiones injustas, como la condena a muerte de <b>Sócrates</b> en el 399 a. C.</p>`,
    },
    {
      html: `<h3>Esparta, la otra Grecia</h3><p><b>Esparta</b> tenía un modelo opuesto: era una <b>oligarquía</b> militar con dos reyes, un consejo de ancianos (<i>gerusía</i>) y cinco éforos que vigilaban. Los <b>espartiatas</b> eran los únicos ciudadanos y se dedicaban solo a la guerra; los <b>periecos</b> eran libres y comerciaban; los <b>ilotas</b>, siervos, cultivaban la tierra. Los niños eran educados por el Estado desde los 7 años en la <mark>agogé</mark>, un duro entrenamiento militar. Las mujeres espartanas tenían más libertad que las atenienses: hacían deporte y administraban propiedades.</p>`,
      svg: dos("Atenas frente a Esparta", ["Atenas", ["democracia", "comercio y mar", "filosofía, teatro", "mujeres en casa", "voto directo"], "var(--pen)"], ["Esparta", ["oligarquía", "ejército de tierra", "disciplina", "mujeres atletas", "todos soldados"], "var(--red)"]),
    },
    {
      html: `<h3>La sociedad romana</h3><p>En Roma, la división principal era entre <b>libres</b> y <b>esclavos</b>. Entre los libres, los <mark>patricios</mark> eran las familias nobles descendientes de los fundadores, y los <mark>plebeyos</mark>, el resto (campesinos, artesanos, comerciantes). Durante la República, los plebeyos lucharon por la igualdad y lograron tener sus propios representantes, los <b>tribunos de la plebe</b>, y leyes escritas (<b>Ley de las XII Tablas</b>, 450 a. C.). Los esclavos podían ser liberados y se convertían en <b>libertos</b>. La familia estaba dirigida por el <i>pater familias</i>, con autoridad sobre todos.</p>`,
      svg: filas("Grupos sociales de Roma", [["Patricios", "nobles, grandes propietarios", "var(--red)"], ["Plebeyos", "campesinos, artesanos", "var(--sun)"], ["Clientes", "protegidos de un patrono", "var(--muted)"], ["Libertos", "antiguos esclavos libres", "var(--leaf)"], ["Esclavos", "sin derechos", "var(--ink)"]]),
    },
    {
      html: `<h3>Las instituciones de la República romana</h3><p>La <b>República</b> (<i>res publica</i>, «la cosa pública») se basaba en el equilibrio entre tres poderes. Los <b>magistrados</b> eran elegidos cada año y siempre en parejas o grupos, para que se vigilaran: los <mark>cónsules</mark> (dos) gobernaban y mandaban el ejército; los pretores juzgaban; los censores hacían el censo; los cuestores administraban el dinero. El <mark>Senado</mark>, formado por antiguos magistrados, aconsejaba y controlaba la política exterior y las finanzas. Las <b>asambleas</b> (comicios) elegían a los magistrados y votaban leyes. En caso de grave peligro se nombraba un <b>dictador</b> por seis meses.</p>`,
      svg: rueda("Instituciones de la República romana", "SPQR", [["cónsules", "var(--red)"], ["Senado", "var(--sun)"], ["comicios", "var(--pen)"], ["tribunos", "var(--leaf)"], ["pretores", "var(--bac)"], ["censores", "var(--inf)"]], "var(--ink)"),
      video: { id: "tVhHHx-pQxE", titulo: "La República romana", canal: "Infonimados", vistas: 902610, megusta: 0 },
    },
    {
      html: `<h3>Herencia política</h3><p>Muchas ideas e instituciones actuales vienen de Grecia y Roma: la <b>democracia</b>, el sorteo de los <b>jurados</b> populares, el <b>Senado</b> (en España, la cámara alta de las Cortes), la palabra <b>república</b>, el <b>derecho romano</b> (base del Código Civil español) o la palabra <b>candidato</b> (de <i>candidus</i>, «blanco», por la toga blanqueada que llevaban quienes pedían el voto). Las siglas <mark>SPQR</mark> (<i>Senatus Populusque Romanus</i>, «el Senado y el pueblo romano») todavía aparecen en las tapas de alcantarilla de Roma.</p>`,
    },
  ],
  figura: {
    titulo: "Democracia ateniense y República romana",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Comparación: Atenas tenía Asamblea, Consejo de los 500 y tribunales; Roma tenía cónsules, Senado y comicios">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      ${[["ATENAS", "democracia directa", 24, "var(--pen)", [["Ekklesía", "todos votan leyes"], ["Bulé", "500 por sorteo"], ["Heliea", "jurados populares"]]], ["ROMA", "república", 354, "var(--red)", [["Cónsules", "2 gobiernan, 1 año"], ["Senado", "aconseja y controla"], ["Comicios", "eligen y votan"]]]].map(([t, s, x, c, rows]) => `<rect x="${x}" y="16" width="302" height="188" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="${x + 151}" y="46" text-anchor="middle" font-size="19" font-weight="700" fill="${c}" ${D}>${t}</text><text x="${x + 151}" y="66" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>${s}</text>${rows.map(([a, b], i) => `<rect x="${x + 16}" y="${80 + i * 40}" width="270" height="32" rx="8" fill="var(--paper)"/><text x="${x + 28}" y="${101 + i * 40}" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${a}</text><text x="${x + 128}" y="${101 + i * 40}" font-size="13" fill="var(--ink)" ${F}>${b}</text>`).join("")}`).join("")}
    </svg>`,
  },
  video: { id: "XfnaR4s1om8", titulo: "Origen de la democracia: ¿qué es y de dónde viene?", canal: "Enterarse", vistas: 313051, megusta: 0, busqueda: "democracia ateniense explicación" },
  ejemplos: [
    { enunciado: "Compara la democracia ateniense con la española actual.", pasos: ["Atenas: directa, los ciudadanos votaban las leyes en la Asamblea. España: representativa, elegimos diputados que votan las leyes.", "Atenas: votaban solo varones libres atenienses. España: sufragio universal desde los 18 años.", "Atenas: muchos cargos por sorteo. España: cargos por elección; solo los jurados se sortean."], resultado: "Atenas era directa y excluyente; la española es representativa y universal." },
    { enunciado: "¿Por qué en Roma los magistrados eran al menos dos y solo durante un año?", pasos: ["Tras expulsar al último rey, los romanos temían que alguien volviera a acumular todo el poder.", "Dos cónsules podían vetarse mutuamente.", "Un mandato de un año impedía perpetuarse en el cargo."], resultado: "Para repartir y limitar el poder (colegialidad y anualidad)." },
    { enunciado: "Explica el origen de la palabra «ostracismo» y su significado actual.", pasos: ["Viene de óstrakon, trozo de cerámica donde se escribía el nombre del político.", "En Atenas, el más votado era desterrado diez años.", "Hoy significa apartar o aislar a alguien de un grupo."], resultado: "Ostracismo: destierro en Atenas; hoy, exclusión o aislamiento." },
  ],
  errores: [
    "Pensar que en Atenas votaba todo el mundo: solo los ciudadanos varones libres.",
    "Confundir democracia directa (votar uno mismo las leyes) con representativa (elegir representantes).",
    "Creer que la República romana era una democracia como la nuestra: el poder lo tenían sobre todo los ricos y el Senado.",
    "Confundir patricios con «patriotas»: eran las familias nobles de Roma.",
    "Pensar que el dictador romano era siempre un tirano: era un cargo legal y temporal para emergencias.",
  ],
  ejercicios: [
    { q: "Describe los tres grupos sociales de Atenas.", sol: "Ciudadanos (varones libres atenienses con derechos políticos), metecos (extranjeros libres sin derechos políticos) y esclavos (sin derechos)." },
    { q: "¿Qué significa democracia y quién la creó en Atenas?", sol: "«Poder del pueblo» (demos + kratos). La estableció Clístenes en el 508 a. C." },
    { q: "Explica las funciones de la Ekklesía y de la Bulé.", sol: "La Ekklesía, asamblea de todos los ciudadanos, votaba las leyes y la guerra. La Bulé, consejo de 500 sorteados, preparaba las leyes." },
    { q: "¿Qué era el ostracismo?", sol: "Votación anual en la que se escribía en una cerámica el nombre de un político peligroso; si sumaba 6.000 votos, era desterrado diez años." },
    { q: "Escribe tres límites de la democracia ateniense.", sol: "Excluía a mujeres, esclavos y metecos; se basaba en el trabajo esclavo; podía tomar decisiones injustas, como condenar a Sócrates." },
    { q: "Compara la educación en Esparta y en Atenas.", sol: "En Esparta el Estado educaba a los niños desde los 7 años en la agogé, con entrenamiento militar. En Atenas se valoraban también la música, la gimnasia, la lectura y la filosofía." },
    { q: "¿Qué diferencia había entre patricios y plebeyos?", sol: "Los patricios eran las familias nobles con privilegios políticos; los plebeyos, el resto de los ciudadanos libres." },
    { q: "¿Qué hacían los cónsules y el Senado?", sol: "Los cónsules gobernaban y dirigían el ejército durante un año; el Senado aconsejaba y controlaba la política exterior y las finanzas." },
    { q: "¿Qué significa SPQR?", sol: "Senatus Populusque Romanus: «el Senado y el pueblo romano»." },
    { q: "Explica el origen de la palabra «candidato».", sol: "Viene de candidus, «blanco», porque quienes se presentaban a un cargo en Roma vestían una toga blanqueada." },
  ],
  quiz: [
    { q: "En Atenas, los extranjeros libres se llamaban…", o: ["metecos", "ilotas", "plebeyos"], a: 0, e: "Pagaban impuestos pero no votaban." },
    { q: "Democracia significa…", o: ["poder del pueblo", "poder de los mejores", "poder de uno"], a: 0, e: "Demos + kratos." },
    { q: "Creó la democracia en Atenas…", o: ["Clístenes", "Pericles", "Solón"], a: 0, e: "En el 508 a. C." },
    { q: "La Asamblea de ciudadanos de Atenas era la…", o: ["Ekklesía", "Bulé", "Gerusía"], a: 0, e: "Se reunía en la Pnix." },
    { q: "Muchos cargos atenienses se elegían por…", o: ["sorteo", "herencia", "edad"], a: 0, e: "Cualquier ciudadano podía gobernar." },
    { q: "La educación militar espartana se llamaba…", o: ["agogé", "ágora", "gineceo"], a: 0, e: "Desde los 7 años." },
    { q: "Las familias nobles de Roma eran los…", o: ["patricios", "plebeyos", "libertos"], a: 0, e: "Descendientes de los fundadores." },
    { q: "Roma tenía cada año…", o: ["dos cónsules", "un rey", "cinco éforos"], a: 0, e: "Para vigilarse mutuamente." },
    { q: "Las primeras leyes escritas de Roma fueron…", o: ["las XII Tablas", "la Constitución", "el Código Civil"], a: 0, e: "Hacia el 450 a. C." },
    { q: "Un esclavo liberado era un…", o: ["liberto", "patricio", "meteco"], a: 0, e: "Libre, con algunos límites." },
  ],
  examen: [
    { q: "La democracia ateniense era…", o: ["directa", "representativa", "hereditaria"], a: 0, e: "Los ciudadanos votaban las leyes." },
    { q: "Los tribunos de la plebe defendían a…", o: ["los plebeyos", "los patricios", "los esclavos"], a: 0, e: "Podían vetar decisiones." },
    { q: "El Senado romano estaba formado por…", o: ["antiguos magistrados", "todos los ciudadanos", "esclavos"], a: 0, e: "Gran prestigio y experiencia." },
  ],
  feynman: ["La sociedad de Atenas y quién podía votar", "Las instituciones de la democracia ateniense y el ostracismo", "Diferencias entre Atenas y Esparta", "Patricios, plebeyos e instituciones de la República romana"],
  mapa: mapa("POLÍTICA CLÁSICA", "var(--pen)", [
    ["Atenas", "democracia · Ekklesía · sorteo", "var(--pen)"],
    ["Esparta", "oligarquía · agogé", "var(--red)"],
    ["Roma", "cónsules · Senado · comicios", "var(--sun)"],
    ["Herencia", "senado · república · candidato", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Ciudadano ateniense", "Varón libre, hijo de atenienses, mayor de 18 años."],
    ["Ekklesía", "Asamblea de todos los ciudadanos de Atenas."],
    ["Ostracismo", "Destierro de diez años votado con trozos de cerámica."],
    ["Agogé", "Educación militar espartana desde los 7 años."],
    ["Patricios y plebeyos", "Nobles y gente común de Roma."],
    ["Cónsules", "Dos magistrados que gobernaban Roma durante un año."],
    ["Senado", "Consejo de antiguos magistrados que guiaba la República."],
    ["SPQR", "«El Senado y el pueblo romano»."],
  ],
  familias: ["Ved una sesión del Congreso o del Senado y comparadla con la Asamblea ateniense.", "Haced en casa un «ostracismo» de broma para decidir qué tarea doméstica se elimina.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): organización social y política de Grecia y Roma, democracia ateniense y República romana, y su herencia en las instituciones actuales.",
    ideas: ["Simular una sesión de la Ekklesía para votar una norma de clase.", "Votación de ostracismo con trozos de cartulina sobre un tema ficticio.", "Comparar la Constitución española con las instituciones romanas."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Democracia ateniense, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Democracia_ateniense" },
  ],
  revisado: "2026-11-12",
};
