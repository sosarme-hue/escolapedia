// Música 1º ESO: la música tradicional y el folclore. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La música tradicional y el folclore",
  minutos: 50,
  objetivos: ["Definir música tradicional y folclore y sus características", "Clasificar las canciones tradicionales por su función", "Conocer danzas e instrumentos tradicionales de España", "Valorar el folclore como patrimonio vivo"],
  claves: ["folclore", "transmisión oral", "anónimo", "danza tradicional", "gaita", "patrimonio inmaterial"],
  pregunta: {
    texto: "Muchas canciones que te cantaban de pequeño no tienen autor conocido. ¿Quién las compuso entonces?",
    respuesta: "Las compuso <b>el pueblo</b>, poco a poco. Alguien las inventó hace mucho, pero al transmitirse <b>de boca en boca</b> durante generaciones, cada persona y cada lugar las fue cambiando un poco. Por eso son <b>anónimas</b> y existen <mark>muchas versiones distintas de la misma canción</mark> según el pueblo o la región.",
  },
  bloques: [
    {
      html: `<h3>Qué es la música tradicional</h3><p>La <b>música tradicional</b> o <b>popular</b> es la que nace del pueblo y forma parte de su forma de vida. La palabra <b>folclore</b> (del inglés <i>folk-lore</i>, «saber del pueblo») designa el conjunto de canciones, danzas, cuentos, fiestas y costumbres de una comunidad.</p><p>Sus características principales son:</p><ul><li><b>Transmisión oral</b>: se aprende escuchando, no leyendo partituras.</li><li><b>Anonimato</b>: no se conoce al autor.</li><li><b>Variantes</b>: cada lugar tiene su versión.</li><li><b>Funcionalidad</b>: acompaña momentos de la vida, el trabajo o la fiesta.</li><li><b>Sencillez</b>: melodías fáciles de recordar y repetir.</li></ul>`,
      svg: svg("Cadena de transmisión oral: abuela, madre e hija pasándose una melodía que cambia un poco en cada paso", `${[[40, "var(--sun)", "abuela"], [130, "var(--leaf)", "madre"], [220, "var(--pen)", "hija"]].map(([x, c, n]) => `<circle cx="${x}" cy="72" r="18" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="2.5"/><circle cx="${x}" cy="66" r="5" fill="${c}"/><path d="M${x - 9} 82 Q ${x} 76 ${x + 9} 82" fill="none" stroke="${c}" stroke-width="2"/>${t(x, 114, n, { s: 11, c })}`).join("")}<path d="M62 60 Q 85 36 108 60" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#fol1)"/><path d="M152 60 Q 175 36 198 60" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#fol1)"/><defs><marker id="fol1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>${t(85, 30, "♪ versión 1", { s: 10, c: "var(--muted)" })}${t(175, 30, "♪ versión 2", { s: 10, c: "var(--muted)" })}${t(130, 150, "de boca en boca, con variantes", { s: 11 })}`, 170),
      video: vb("folB"),
    },
    {
      html: `<h3>Canciones según su función</h3><p>La música tradicional acompaña toda la vida de una persona, desde que nace hasta que muere:</p>${tabla(["Tipo", "Función", "Ejemplos"], [["Nanas", "dormir a los bebés", "canciones de cuna"], ["Infantiles", "jugar", "canciones de corro, de comba, retahílas"], ["De trabajo", "marcar el ritmo de las tareas", "de siega, de trilla, de arrieros, de pescadores"], ["De ronda", "cortejar, cantar por las calles de noche", "rondas, albadas"], ["Festivas", "celebrar fiestas del año", "villancicos, mayos, canciones de carnaval"], ["Religiosas", "rituales y procesiones", "saetas, auroras, gozos"]])}<p>Muchas canciones de trabajo desaparecieron cuando las máquinas sustituyeron las tareas manuales, y hoy se conservan gracias a los <b>cancioneros</b>.</p>`,
    },
    {
      html: `<h3>Danzas tradicionales de España</h3><p>Cada región de España tiene danzas propias. Algunas de las más conocidas:</p><ul><li><b>Jota</b>: presente en Aragón, Navarra, Valencia, Castilla y muchas otras regiones. En compás ternario, con saltos y castañuelas.</li><li><b>Muiñeira</b>: Galicia y Asturias, alegre, en compás de 6/8, con gaita.</li><li><b>Sardana</b>: Cataluña, se baila en corro con las manos unidas.</li><li><b>Sevillanas</b>: Andalucía, en parejas y en cuatro partes.</li><li><b>Fandango</b>: muy extendido, con variantes en Andalucía, Extremadura o Huelva.</li><li><b>Aurresku</b>: País Vasco, danza de honor.</li><li><b>Isa</b> y <b>folía</b>: Canarias.</li><li><b>Seguidillas</b> y <b>boleros</b>: La Mancha y Baleares.</li></ul>`,
      svg: svg("Mapa simplificado de España con danzas: muiñeira al noroeste, aurresku al norte, sardana al noreste, jota en el centro y este, sevillanas al sur e isa en Canarias", `<path d="M24 48 L 70 30 L 150 34 L 214 40 L 240 66 L 222 100 L 206 136 L 168 160 L 96 162 L 54 140 L 40 104 L 22 82 Z" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${[[44, 58, "muiñeira", "var(--pen)"], [130, 50, "aurresku", "var(--red)"], [214, 60, "sardana", "var(--sun)"], [146, 98, "jota", "var(--leaf)"], [100, 146, "sevillanas", "var(--red)"]].map(([x, y, n, c]) => `<circle cx="${x}" cy="${y}" r="4" fill="${c}"/>${t(x, y + 16, n, { s: 10, c })}`).join("")}<rect x="6" y="154" width="44" height="20" rx="4" fill="var(--card)" stroke="var(--line)"/>${t(28, 168, "isa", { s: 10, c: "var(--inf)" })}`, 180),
    },
    {
      html: `<h3>Instrumentos tradicionales</h3><p>Muchos instrumentos tradicionales se fabricaban con materiales del entorno y los tocaban los propios vecinos:</p>${tabla(["Grupo", "Instrumentos"], [["Aerófonos", "gaita gallega y asturiana, dulzaina, gaita de boto aragonesa, txistu, flabiol, chirimía"], ["Cordófonos", "guitarra, bandurria, laúd, rabel, zanfona, timple canario"], ["Membranófonos", "tamboril, pandero cuadrado, pandereta, zambomba, tambor"], ["Idiófonos", "castañuelas, almirez, botella de anís, cucharas, triángulo, sonajas"]])}<p>Algunos se tocan en pareja: el <b>txistu</b> o la <b>gaita</b> se acompañan con un tamboril, y la <b>dulzaina</b> con un tambor o caja. Las <b>rondallas</b> unen guitarras, bandurrias y laúdes.</p>`,
      video: vb("folB2"),
    },
    {
      html: `<h3>Las características musicales</h3><p>Aunque cada región es distinta, la música tradicional española comparte algunos rasgos:</p><ul><li><b>Melodías</b> cortas que se repiten con distinta letra (estrofas).</li><li>Alternancia entre <b>estrofa</b> y <b>estribillo</b>, que canta todo el grupo.</li><li>Ritmos muy marcados en las <b>danzas</b> y ritmo libre en canciones de trabajo y nanas.</li><li>Uso de <b>adornos</b> vocales (melismas) en muchas zonas del sur.</li><li><b>Pregunta y respuesta</b> entre un solista y el coro.</li></ul><p>El <b>flamenco</b>, nacido en Andalucía a partir de la mezcla de culturas, fue declarado por la UNESCO <b>Patrimonio Cultural Inmaterial de la Humanidad</b> en 2010.</p>`,
    },
    {
      html: `<h3>Recopilar el folclore</h3><p>A lo largo del siglo XX, el folclore empezó a desaparecer con el éxodo rural, la radio y la televisión. Para salvarlo, investigadores llamados <b>folcloristas</b> recorrieron los pueblos grabando y transcribiendo canciones.</p><ul><li>Se publicaron <b>cancioneros</b> de cada provincia.</li><li>En los años 50, el estadounidense <b>Alan Lomax</b> grabó cientos de canciones por toda España.</li><li>En el siglo XX, compositores como <b>Manuel de Falla</b> se inspiraron en la música popular para sus obras.</li></ul><p>Hoy existen archivos sonoros públicos en internet, y muchos grupos de <b>folk</b> mezclan la tradición con instrumentos actuales.</p>`,
    },
    {
      html: `<h3>El folclore del mundo</h3><p>Todas las culturas tienen su música tradicional, con instrumentos y ritmos característicos:</p><ul><li><b>Irlanda</b>: violín, flauta irlandesa y danzas rápidas.</li><li><b>Argentina</b>: la zamba, la chacarera y el bombo legüero.</li><li><b>México</b>: los mariachis y el son jarocho.</li><li><b>África occidental</b>: los griots, que cuentan la historia del pueblo cantando con la kora.</li><li><b>Indonesia</b>: el gamelán, una orquesta de gongs y metalófonos.</li><li><b>Japón</b>: el koto y los tambores taiko.</li></ul><p>Conocer la música de otros pueblos ayuda a <b>comprender y respetar</b> otras culturas.</p>`,
    },
    {
      html: `<h3>Investiga tu propio folclore</h3><p>Proyecto de clase: convertíos en folcloristas.</p><ol><li>Pregunta a tus abuelos o a personas mayores qué canciones cantaban de niños, en el trabajo o en las fiestas.</li><li><b>Grábalas</b> (con su permiso) y anota dónde y cuándo las aprendieron.</li><li>Clasifícalas por su <b>función</b>: nana, juego, trabajo, fiesta…</li><li>Comparad en clase versiones de la misma canción: ¿cambian la letra, la melodía o el ritmo?</li><li>Reunid todo en un <b>cancionero</b> del grupo.</li></ol><p>Así estáis protegiendo un patrimonio que, si nadie lo canta, se pierde.</p>`,
    },
  ],
  figura: {
    titulo: "Música tradicional en un vistazo",
    svg: filas("Resumen: transmisión oral, anónima y con variantes; funciones como nanas, trabajo y fiesta; danzas como jota, muiñeira, sardana y sevillanas; instrumentos como gaita, dulzaina, castañuelas y pandero; flamenco patrimonio inmaterial", [["Rasgos", "oral · anónima · variantes", "var(--pen)"], ["Funciones", "nanas · trabajo · fiesta · ronda", "var(--leaf)"], ["Danzas", "jota · muiñeira · sardana", "var(--red)"], ["Viento", "gaita · dulzaina · txistu", "var(--sun)"], ["Percusión", "castañuelas · pandero", "var(--inf)"], ["Patrimonio", "flamenco (UNESCO 2010)", "var(--ink)"]], 200),
  },
  video: vg("folV"),
  quiz: mezcla([
    { q: "La música tradicional se transmite sobre todo…", o: ["de forma oral", "con partituras", "por grabaciones"], a: 0, e: "De boca en boca." },
    { q: "«Folclore» significa…", o: ["saber del pueblo", "música moderna", "canción de cuna"], a: 0, e: "Folk-lore." },
    { q: "Una canción para dormir a un bebé es una…", o: ["nana", "jota", "ronda"], a: 0, e: "Canción de cuna." },
    { q: "La muiñeira es típica de…", o: ["Galicia", "Andalucía", "Cataluña"], a: 0, e: "Con gaita." },
    { q: "La sardana se baila…", o: ["en corro con las manos unidas", "en parejas separadas", "solo"], a: 0, e: "Cataluña." },
    { q: "La dulzaina es un…", o: ["aerófono", "cordófono", "membranófono"], a: 0, e: "Lengüeta doble." },
    { q: "Las castañuelas son…", o: ["idiófonos", "aerófonos", "cordófonos"], a: 0, e: "Vibra el cuerpo." },
    { q: "El txistu se acompaña de…", o: ["un tamboril", "una guitarra", "un piano"], a: 0, e: "Lo toca la misma persona." },
    { q: "El flamenco es patrimonio inmaterial de la UNESCO desde…", o: ["2010", "1950", "1992"], a: 0, e: "Andalucía." },
    { q: "Quien recopila canciones tradicionales es un…", o: ["folclorista", "director", "luthier"], a: 0, e: "Investigador." },
  ]),
  examen: mezcla([
    { q: "¿Por qué una misma canción tradicional tiene muchas versiones?", o: ["por la transmisión oral", "por los derechos de autor", "porque la escribieron muchos compositores"], a: 0, e: "Cambia al pasar de boca en boca." },
    { q: "La jota suele estar en compás…", o: ["ternario", "binario de marcha", "libre"], a: 0, e: "Tres pulsos." },
    { q: "¿Qué instrumento NO es tradicional español?", o: ["koto", "bandurria", "zambomba"], a: 0, e: "Japón." },
  ]),
  feynman: ["Qué es el folclore", "Por qué las canciones tradicionales son anónimas y tienen variantes", "Tipos de canciones según su función", "Danzas e instrumentos tradicionales de España", "Por qué es importante recopilar el folclore"],
  mapa: mapa("FOLCLORE", "var(--eso)", [
    ["Rasgos", "oral · anónimo · funcional", "var(--pen)"],
    ["Canciones", "nanas · trabajo · fiesta", "var(--leaf)"],
    ["Danzas", "jota · muiñeira · sardana", "var(--red)"],
    ["Instrumentos", "gaita · dulzaina · pandero", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Folclore", "Saber tradicional de un pueblo: música, danzas, cuentos, fiestas."],
    ["Transmisión oral", "Aprender de oído, de generación en generación."],
    ["Anónimo", "De autor desconocido."],
    ["Nana", "Canción para dormir a los bebés."],
    ["Jota", "Danza ternaria extendida por muchas regiones de España."],
    ["Gaita", "Aerófono con un saco que almacena el aire."],
    ["Cancionero", "Recopilación de canciones tradicionales."],
    ["Patrimonio inmaterial", "Tradiciones vivas protegidas, como el flamenco."],
  ],
  familias: ["Preguntad a los abuelos por las canciones de su infancia y grabadlas.", "Buscad en un mapa de dónde es cada danza del tema.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Música tradicional y folclore: características, funciones, danzas e instrumentos de España y del mundo; patrimonio musical y su conservación (RD 217/2022, Música, contextos y culturas).",
    ideas: ["Cancionero de la clase con canciones recogidas en las familias.", "Taller de danza: pasos básicos de una danza tradicional de la zona.", "Mapa sonoro de España con un instrumento por región."],
  },
  fuentes: [RD, { t: "UNESCO: el flamenco, Patrimonio Cultural Inmaterial", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" }],
  revisado: REV,
  ejemplosTitulo: "Ejercicios resueltos",
  ejemplos: [
    { enunciado: "Clasifica por su función: canción para segar, canción de corro, villancico, canción de cuna.", pasos: ["Segar: trabajo.", "Corro: infantil o de juego.", "Villancico: festiva (Navidad).", "Cuna: nana."], resultado: "Trabajo, infantil, festiva y nana." },
    { enunciado: "Clasifica según Hornbostel-Sachs: zambomba, rabel, almirez, txistu.", pasos: ["Zambomba: membrana que se frota con una caña (membranófono).", "Rabel: cuerda frotada (cordófono).", "Almirez: mortero de metal golpeado (idiófono).", "Txistu: flauta de tres agujeros (aerófono)."], resultado: "Membranófono, cordófono, idiófono, aerófono." },
    { enunciado: "Inventa una estrofa propia para un juego de comba, con ritmo regular.", pasos: ["Elige un tema sencillo: el recreo.", "Haz versos de 8 sílabas con rima.", "Por ejemplo: «Salta, salta, compañera, / que la cuerda va ligera, / uno, dos y tres y cuatro, / quien la pise pierde un rato»."], resultado: "Una estrofa original de cuatro versos para saltar." },
  ],
  errores: [
    "Pensar que «popular» significa solo «famoso» o «de moda».",
    "Creer que la música tradicional tiene una única versión correcta.",
    "Confundir el folclore con la música antigua sin más: el folclore sigue vivo.",
    "Pensar que solo existe folclore en el campo.",
    "Creer que la jota es exclusiva de una sola región.",
  ],
  ejercicios: [
    { q: "Escribe cuatro características de la música tradicional.", sol: "Transmisión oral, anonimato, variantes, funcionalidad (y sencillez)." },
    { q: "¿Qué significa la palabra folclore?", sol: "Saber del pueblo." },
    { q: "Nombra seis tipos de canciones según su función.", sol: "Nanas, infantiles, de trabajo, de ronda, festivas y religiosas." },
    { q: "Relaciona cada danza con su región: sardana, muiñeira, sevillanas, aurresku.", sol: "Cataluña, Galicia, Andalucía, País Vasco." },
    { q: "Cita dos aerófonos, dos cordófonos y dos idiófonos tradicionales españoles.", sol: "Gaita, dulzaina; bandurria, laúd; castañuelas, almirez." },
    { q: "¿Por qué se perdieron muchas canciones de trabajo?", sol: "Porque las máquinas sustituyeron las tareas que acompañaban." },
    { q: "¿Qué hacía un folclorista?", sol: "Recorría pueblos para grabar y transcribir canciones tradicionales." },
    { q: "Escribe tres ejemplos de música tradicional de otros países con un instrumento cada uno.", sol: "Irlanda (violín), Argentina (bombo legüero), Indonesia (gamelán)." },
    { q: "¿Qué es el patrimonio cultural inmaterial? Pon un ejemplo.", sol: "Tradiciones vivas que se protegen; el flamenco." },
    { q: "Entrevista a una persona mayor y anota una canción de su infancia: función, lugar y cómo se aprendió.", sol: "Respuesta personal." },
  ],
};
