// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "El Romanticismo",
  minutos: 40,
  objetivos: ["Explicar cómo el Romanticismo rompe con las normas neoclásicas", "Reconocer sus temas: libertad, yo, amor imposible, muerte", "Identificar a Espronceda, Bécquer, Rosalía de Castro, Larra y Zorrilla"],
  claves: ["Romanticismo", "subjetividad", "libertad", "rimas", "leyendas", "drama romántico", "Bécquer"],
  pregunta: {
    texto: "«¿Qué es poesía?, dices mientras clavas en mi pupila tu pupila azul. ¿Qué es poesía? ¿Y tú me lo preguntas? Poesía… eres tú.» ¿Por qué estos versos de hace 150 años siguen apareciendo en carpetas y redes?",
    respuesta: "Porque expresan algo que sigue siendo actual: <mark>los sentimientos del yo</mark>. Bécquer, el autor, es el gran poeta del <b>Romanticismo</b>, el movimiento que puso las emociones, el amor y la libertad por encima de las reglas.",
  },
  bloques: [
    {
      html: `<h3>Rebeldes contra las normas</h3><p>El Romanticismo nace en Alemania e Inglaterra a finales del siglo XVIII y llega a España hacia <b>1830-1850</b>. Frente a la razón y las reglas neoclásicas, defiende la <mark>libertad</mark> (en el arte, en política y en el amor), la <mark>subjetividad</mark> (lo que siente el yo) y la imaginación.</p>`,
      svg: L.filas("Neoclasicismo frente a Romanticismo", [
        ["Neoclásico", "razón · normas · enseñar", "var(--muted)"],
        ["Romántico", "emoción · libertad · yo", "var(--red)"],
      ], "del siglo XVIII al XIX"),
    },
    {
      html: `<h3>Temas y ambientes</h3><p>Los románticos aman lo <b>nocturno</b>, las ruinas, los cementerios, las tormentas y la <b>Edad Media</b>. Sus héroes son rebeldes y marginados (piratas, mendigos) que buscan la libertad. Abundan el <mark>amor imposible</mark>, la soledad, el destino trágico y la muerte.</p>`,
      svg: L.filas("Temas del Romanticismo", [
        ["Libertad", "pirata, rebelde", "var(--red)"], ["Amor", "imposible o trágico", "var(--pen)"],
        ["Misterio", "noche, ruinas, leyendas", "var(--inf)"], ["Muerte", "destino fatal", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>La poesía: Espronceda, Bécquer y Rosalía</h3><p><b>José de Espronceda</b> escribió la «Canción del pirata», canto a la libertad. <b>Gustavo Adolfo Bécquer</b> es el autor de las <i>Rimas</i>, poemas breves e íntimos sobre la poesía, el amor y el desengaño, y de las <i>Leyendas</i>. <b>Rosalía de Castro</b> escribió en gallego (<i>Cantares gallegos</i>) y en castellano (<i>En las orillas del Sar</i>).</p>`,
      svg: L.tabla("Poetas románticos y sus obras", ["Autor", "Obra"], [
        ["Espronceda", "Canción del pirata"], ["Bécquer", "Rimas · Leyendas"], ["Rosalía", "En las orillas del Sar"],
      ], "var(--red)"),
    },
    {
      html: `<h3>La prosa: Larra</h3><p><b>Mariano José de Larra</b> fue periodista. En sus <mark>artículos de costumbres</mark> critica con ironía los defectos de la sociedad: la pereza en «Vuelva usted mañana», donde un extranjero intenta hacer trámites en España y siempre le dicen que vuelva otro día.</p>`,
      svg: L.dialogo("Escena de Vuelva usted mañana de Larra", [
        ["monsieur Sans-délai", "¿Está listo mi expediente?", "var(--inf)"],
        ["el funcionario", "Vuelva usted mañana.", "var(--red)"],
        ["seis meses después", "…vuelva usted mañana.", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>El teatro: el drama romántico</h3><p>Rompe la regla de las tres unidades: muchos lugares, años de acción, mezcla de verso y prosa, de lo trágico y lo cómico. <b>Don Álvaro o la fuerza del sino</b> (Duque de Rivas) y <b>Don Juan Tenorio</b> (Zorrilla, 1844), que todavía se representa cada año en torno al <mark>Día de Todos los Santos</mark>.</p>`,
      svg: L.filas("Dos dramas románticos", [
        ["Don Álvaro", "Duque de Rivas · 1835", "var(--inf)"],
        ["Don Juan Tenorio", "José Zorrilla · 1844", "var(--red)"],
      ], "el drama rompe las reglas"),
    },
  ],
  figura: {
    titulo: "Los grandes nombres del Romanticismo español",
    svg: L.eje("Autores románticos ordenados por fecha de su obra principal", [
      ["1835", "Duque de Rivas", ["Don Álvaro", "drama"], "var(--inf)"],
      ["1835", "Larra", ["Vuelva usted", "mañana"], "var(--muted)"],
      ["1840", "Espronceda", ["Canción", "del pirata"], "var(--red)"],
      ["1844", "Zorrilla", ["Don Juan", "Tenorio"], "var(--pen)"],
      ["1871", "Bécquer", ["Rimas", "(póstumas)"], "var(--leaf)"],
    ]),
  },
  video: { id: "X3EyPdskrHo", titulo: "Literatura del Romanticismo: autores y obras más destacadas", canal: "unProfesor", vistas: 228574, megusta: 0, busqueda: "Romanticismo literatura española Bécquer Espronceda" },
  quiz: [
    { q: "¿Qué valora por encima de todo el Romanticismo?", o: ["Las reglas clásicas", "La libertad y los sentimientos", "La ciencia"], a: 1, e: "El yo, la emoción y la libertad frente a la razón." },
    { q: "¿Quién escribió las Rimas?", o: ["Espronceda", "Bécquer", "Larra"], a: 1, e: "Gustavo Adolfo Bécquer; se publicaron tras su muerte, en 1871." },
    { q: "«Vuelva usted mañana» critica…", o: ["la pereza y la burocracia", "la guerra", "el amor"], a: 0, e: "Larra se burla de la lentitud de la administración." },
    { q: "Rosalía de Castro escribió en…", o: ["gallego y castellano", "catalán", "euskera"], a: 0, e: "Cantares gallegos y En las orillas del Sar." },
    { q: "El drama romántico…", o: ["respeta las tres unidades", "rompe las tres unidades", "solo usa prosa"], a: 1, e: "Mezcla lugares, tiempos, verso y prosa." },
  ],
  examen: [
    { q: "¿Qué obra se representa tradicionalmente en noviembre?", o: ["Don Juan Tenorio", "El sí de las niñas", "La Celestina"], a: 0, e: "La obra de Zorrilla transcurre en parte en la noche de difuntos." },
    { q: "Un ambiente típico romántico es…", o: ["un salón ordenado", "un cementerio de noche", "un laboratorio"], a: 1, e: "Noche, ruinas y misterio." },
    { q: "La «Canción del pirata» es un canto a…", o: ["la libertad", "la obediencia", "la razón"], a: 0, e: "«Que es mi barco mi tesoro, que es mi dios la libertad»." },
  ],
  feynman: ["Por qué el Romanticismo es una rebelión contra el Neoclasicismo", "Cuatro temas románticos", "Qué aportan Bécquer y Rosalía de Castro", "Qué critica Larra en sus artículos"],
  mapa: mapa("ROMANTICISMO", "var(--eso)", [
    ["Ideas", "libertad · yo · emoción", "var(--red)"],
    ["Poesía", "Espronceda · Bécquer", "var(--pen)"],
    ["Prosa", "Larra · leyendas", "var(--muted)"],
    ["Teatro", "Zorrilla · Duque de Rivas", "var(--inf)"],
  ]),
  tarjetas: [
    ["Rasgos del Romanticismo", "Libertad, subjetividad, imaginación, gusto por lo nocturno y lo medieval."],
    ["Rimas", "Poemas breves e íntimos de Bécquer sobre poesía, amor y desengaño."],
    ["Larra", "Periodista romántico; artículos de costumbres como «Vuelva usted mañana»."],
    ["Don Juan Tenorio", "Drama romántico de Zorrilla (1844)."],
    ["Rosalía de Castro", "Poeta romántica que escribió en gallego y en castellano."],
  ],
  familias: ["Leed juntos una rima de Bécquer y pedidle que la convierta en un mensaje de hoy.", "Buscad si en vuestra ciudad se representa el Tenorio este año.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: el Romanticismo en su contexto; lectura comentada de poesía, prosa y teatro románticos (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Recital de rimas con música de fondo elegida por el alumnado.", "Reescribir «Vuelva usted mañana» en un contexto actual (atención al cliente, apps).", "Leer una leyenda de Bécquer y crear un pódcast de misterio."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Gustavo Adolfo Bécquer", url: "https://www.cervantesvirtual.com/portales/gustavo_adolfo_becquer/" },
    { t: "Romanticismo en España, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Romanticismo_en_Espa%C3%B1a" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comentar una rima de Bécquer y una leyenda", "Explicar el mito de don Juan en Zorrilla", "Situar el Romanticismo en su contexto histórico"],
  bloques: [
    { tras: "Rebeldes contra las normas", html: `<h3>El contexto: liberales y absolutistas</h3><p>La primera mitad del siglo XIX es muy agitada en España: la Guerra de la Independencia contra Napoleón (1808-1814), la Constitución de Cádiz (1812), el regreso del absolutismo con Fernando VII y las guerras carlistas. Muchos escritores liberales tuvieron que <b>exiliarse</b> en Londres y París, donde conocieron el Romanticismo europeo (Byron, Victor Hugo, Walter Scott). A la muerte de Fernando VII (1833) regresan y el movimiento triunfa en España entre <mark>1835 y 1850</mark>, con el estreno de <i>Don Álvaro</i> como fecha clave.</p><p>Bécquer y Rosalía de Castro escriben más tarde, hacia 1860-1870, cuando el Romanticismo ya ha pasado de moda: por eso se les llama <b>posrománticos</b>, aunque son los poetas románticos más leídos hoy.</p>` },
    { tras: "Temas y ambientes", html: `<h3>El yo romántico</h3><p>El centro de la obra romántica es el <b>yo</b> del autor, con sus emociones extremas. El romántico siente un <b>desajuste</b> entre lo que desea (amor absoluto, libertad, belleza) y lo que la realidad le ofrece: de ahí nacen la frustración, el <i>mal del siglo</i> (una tristeza profunda y sin causa clara) y, en algunos casos, la muerte joven o el suicidio, como el de Larra a los 27 años.</p><p>La naturaleza deja de ser un decorado y se convierte en un <b>espejo del alma</b>: si el protagonista está triste, hay tormenta, viento o noche. Además, los románticos recuperan la <b>Edad Media</b> y lo popular (romances, leyendas, tradiciones) porque ven en ellos el espíritu de cada pueblo. Es el origen del interés por las culturas nacionales.</p>` },
    { tras: "La poesía: Espronceda, Bécquer y Rosalía", html: `<h3>Las Rimas y las Leyendas de Bécquer</h3><p>Las <b>Rimas</b> (publicadas en 1871, tras la muerte del autor) son unos 80 poemas breves, de tono íntimo y lenguaje sencillo, con rima asonante. Se suelen ordenar en cuatro grupos: la <b>poesía</b> y el poeta («¿Qué es poesía?, dices mientras clavas / en mi pupila tu pupila azul. / ¿Qué es poesía? ¿Y tú me lo preguntas? / Poesía… eres tú»), el <b>amor ilusionado</b>, el <b>desengaño</b> y la <b>soledad y la muerte</b> («¡Dios mío, qué solos / se quedan los muertos!»).</p><p>Las <b>Leyendas</b> son relatos en prosa poética, ambientados casi siempre en la Edad Media y en Soria o Toledo, con elementos sobrenaturales: <i>El monte de las ánimas</i>, <i>Los ojos verdes</i>, <i>El rayo de luna</i>. Sus protagonistas persiguen un ideal imposible que los lleva a la locura o a la muerte.</p>` },
    { tras: "El teatro: el drama romántico", html: `<h3>Don Juan Tenorio</h3><p>José Zorrilla estrenó <i>Don Juan Tenorio</i> en 1844. Don Juan es un joven sevillano, seductor y pendenciero, que apuesta con don Luis Mejía quién hará más daño en un año. Seduce a doña Inés, una novicia, pero acaba enamorándose de verdad. Tras matar al padre de ella, huye. Años después, en el cementerio, la estatua del Comendador lo invita a cenar y lo arrastra hacia la muerte; sin embargo, <mark>el amor de doña Inés lo salva</mark> en el último momento, porque don Juan se arrepiente.</p><p>Zorrilla toma el mito de <i>El burlador de Sevilla</i> (Tirso de Molina, siglo XVII), pero cambia el final: frente al castigo barroco, la salvación romántica por amor. Todavía hoy se representa en muchos teatros en torno al 1 de noviembre, Día de Todos los Santos.</p>` },
    { tras: "El teatro: el drama romántico", html: `<h3>Cómo reconocer un texto romántico</h3><ul><li><b>Temas</b>: amor imposible, libertad, rebeldía, muerte, destino trágico, soledad.</li><li><b>Ambientes</b>: noche, ruinas, cementerios, tormentas, Edad Media, lugares exóticos.</li><li><b>Personajes</b>: héroes rebeldes y marginados; mujeres idealizadas (ángeles) o misteriosas.</li><li><b>Estilo</b>: exclamaciones, interrogaciones retóricas, puntos suspensivos, adjetivos intensos, mezcla de géneros y de verso y prosa, polimetría (versos de distinta medida).</li><li><b>Actitud</b>: subjetividad; el yo del poeta lo llena todo.</li></ul>` },
  ],
  videos: [
    ["Rebeldes contra las normas", L.vid("Za3ZkJmbSRI", "Romanticismo. Literatura española: características generales y autores", "Javier Lengua", 60288)],
    ["Las Rimas y las Leyendas de Bécquer", L.vid("7BBC0hciDtU", "Romanticismo español: «Rimas» de Gustavo Adolfo Bécquer", "Profesor Paolo Astorga", 64986)],
  ],
  ejemplos: [
    ["Comenta la rima XXI: «¿Qué es poesía?, dices mientras clavas / en mi pupila tu pupila azul. / ¿Qué es poesía? ¿Y tú me lo preguntas? / Poesía… eres tú.»", ["Tema: la amada es la propia poesía; poesía y amor se identifican.", "Estructura: pregunta de ella (vv. 1-2), sorpresa del poeta (v. 3) y respuesta (v. 4).", "Recursos: interrogaciones retóricas, repetición de «pupila» y de «¿Qué es poesía?», puntos suspensivos que crean pausa emotiva.", "Rasgos románticos: subjetividad, amor idealizado, brevedad intensa."], "rima del grupo de la poesía y el amor ilusionado: la mujer amada es la poesía."],
    ["Señala los rasgos románticos de esta situación: «En una noche de tormenta, un pirata rebelde canta en su barco que solo su libertad le importa.»", ["Noche y tormenta: naturaleza agitada como reflejo del alma.", "Pirata: héroe marginado y rebelde.", "Libertad como valor supremo."], "rasgos románticos: ambiente nocturno y tempestuoso, héroe marginal y defensa de la libertad (como en la «Canción del pirata»)."],
    ["Compara el final de El burlador de Sevilla y el de Don Juan Tenorio.", ["En Tirso (Barroco), don Juan no se arrepiente y es condenado al infierno: castigo ejemplar.", "En Zorrilla (Romanticismo), don Juan se arrepiente en el último instante.", "El amor puro de doña Inés intercede y lo salva."], "el Barroco castiga al pecador; el Romanticismo lo salva por amor."],
  ],
  errores: [
    "Situar a Bécquer en plena época romántica: escribe hacia 1860 y es posromántico.",
    "Pensar que Rosalía solo escribió en gallego: En las orillas del Sar está en castellano.",
    "Confundir a Larra (artículos periodísticos) con un poeta.",
    "Creer que el drama romántico respeta las tres unidades: las rompe.",
    "Confundir El burlador de Sevilla (Tirso, siglo XVII) con Don Juan Tenorio (Zorrilla, 1844).",
  ],
  ejercicios: [
    ["Enumera tres rasgos que el Romanticismo opone al Neoclasicismo.", "Sentimiento frente a razón, libertad creativa frente a normas, y gusto por lo misterioso, medieval y exótico frente al orden y la claridad clásica."],
    ["¿Por qué muchos románticos españoles se formaron en el extranjero?", "Porque, siendo liberales, tuvieron que exiliarse durante el absolutismo de Fernando VII y allí conocieron el Romanticismo europeo."],
    ["¿Qué es el «mal del siglo»?", "Una tristeza y un desencanto profundos que sienten los románticos por el choque entre sus ideales y la realidad."],
    ["Escribe dos títulos de Leyendas de Bécquer.", "El monte de las ánimas, Los ojos verdes, El rayo de luna o Maese Pérez el organista."],
    ["Resume el argumento de Don Juan Tenorio en tres líneas.", "Don Juan apuesta a ver quién hace más daño y seduce a doña Inés, de quien se enamora. Mata a su padre y huye. Al final, a punto de morir, se arrepiente y el amor de Inés lo salva."],
    ["¿Qué crítica hace Larra en «Vuelva usted mañana»?", "Critica la pereza y la burocracia: un extranjero intenta resolver sus asuntos en Madrid y siempre le dicen que vuelva mañana."],
    ["Identifica el recurso: «¡Dios mío, qué solos / se quedan los muertos!»", "Exclamación (y apóstrofe a Dios) que expresa una emoción intensa ante la muerte."],
    ["¿En qué lengua escribió Rosalía Cantares gallegos y qué importancia tiene?", "En gallego (1863). Es el inicio del Rexurdimento, la recuperación literaria del gallego."],
    ["¿Por qué la naturaleza es importante para los románticos?", "Porque refleja los sentimientos del protagonista: tormentas, noches o ruinas expresan su estado de ánimo."],
    ["Explica qué es la polimetría y por qué la usa el drama romántico.", "Mezclar versos de distinta medida en una misma obra. El drama romántico la usa porque busca libertad y variedad frente a las normas clásicas."],
  ],
  quiz: [
    ["El Romanticismo triunfa en España hacia…", ["1835-1850", "1700-1720", "1898-1910"], 0, "Tras la muerte de Fernando VII."],
    ["Bécquer y Rosalía se consideran…", ["posrománticos", "neoclásicos", "realistas"], 0, "Escriben hacia 1860-1870."],
    ["¿Quién salva a don Juan al final?", ["Doña Inés", "Don Luis Mejía", "El Comendador"], 0, "El amor de Inés lo redime."],
    ["Las Leyendas de Bécquer suelen ambientarse en…", ["la Edad Media", "el futuro", "la Grecia clásica"], 0, "Soria y Toledo medievales."],
    ["Mezclar versos de distinta medida se llama…", ["polimetría", "aliteración", "hipérbaton"], 0, "Rasgo del drama romántico."],
  ],
  tarjetas: [
    ["Posromanticismo", "Bécquer y Rosalía (1860-1870): poesía íntima y breve."],
    ["Leyendas", "Relatos de Bécquer en prosa poética, medievales y sobrenaturales."],
    ["Mal del siglo", "Tristeza romántica por el choque entre los ideales y la realidad."],
  ],
});
