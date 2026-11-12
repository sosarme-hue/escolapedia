// Música 2º ESO: la voz y el canto. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La voz y el canto",
  minutos: 50,
  objetivos: ["Describir el aparato fonador y cómo se produce la voz", "Clasificar las voces humanas según su tesitura", "Conocer las agrupaciones vocales y los géneros de música vocal", "Aplicar hábitos de respiración, técnica y cuidado de la voz al cantar"],
  claves: ["aparato fonador", "cuerdas vocales", "tesitura", "soprano", "coro", "muda de la voz"],
  pregunta: {
    texto: "¿Por qué a los chicos les «cambia la voz» en la adolescencia y a las chicas apenas?",
    respuesta: "Durante la pubertad la laringe crece. En los chicos crece mucho más y sus <b>cuerdas vocales</b> se alargan y engrosan, así que vibran más despacio y la voz baja <mark>casi una octava</mark>. Mientras se adapta, la voz «se rompe» o hace gallos: es la <b>muda de la voz</b>. En las chicas el cambio existe, pero es de solo unos pocos tonos.",
  },
  bloques: [
    {
      html: `<h3>El aparato fonador</h3><p>La voz es el instrumento más antiguo y personal. Se produce gracias al <b>aparato fonador</b>, que tiene tres partes:</p><ul><li><b>Aparato respiratorio</b> (el «fuelle»): pulmones, diafragma y tráquea. Proporcionan el <b>aire</b>.</li><li><b>Laringe</b> (el «vibrador»): en ella están las <b>cuerdas vocales</b>, dos pliegues musculares que vibran al pasar el aire.</li><li><b>Resonadores</b> (la «caja»): faringe, boca y fosas nasales amplifican el sonido y le dan su timbre. La lengua, los labios y los dientes (los <b>articuladores</b>) forman las vocales y consonantes.</li></ul>`,
      svg: svg("Esquema del aparato fonador: resonadores en la cabeza, laringe con las cuerdas vocales en el cuello y pulmones con el diafragma", `<path d="M100 22 C 70 22 62 50 66 70 C 70 84 84 90 96 90 L 96 104 L 124 104 L 124 84 C 142 80 150 62 146 46 C 142 30 126 22 100 22 Z" fill="var(--sun)" fill-opacity=".18" stroke="var(--sun)" stroke-width="2"/>
        <rect x="100" y="104" width="20" height="22" rx="4" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2"/><path d="M104 115 L 110 112 L 116 115" stroke="var(--red)" stroke-width="2" fill="none"/>
        <ellipse cx="88" cy="148" rx="20" ry="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><ellipse cx="132" cy="148" rx="20" ry="22" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><path d="M110 126 V 136" stroke="var(--pen)" stroke-width="3"/><path d="M64 172 Q 110 160 156 172" stroke="var(--leaf)" stroke-width="3" fill="none"/>
        ${t(196, 54, "resonadores", { c: "var(--sun)", s: 11 })}${t(196, 118, "laringe", { c: "var(--red)", s: 11 })}${t(196, 132, "(cuerdas vocales)", { c: "var(--red)", s: 9 })}${t(196, 152, "pulmones", { c: "var(--pen)", s: 11 })}${t(196, 172, "diafragma", { c: "var(--leaf)", s: 11 })}`, 180),
      video: { id: "iaGxX7G4tQI", titulo: "Aparato fonador humano: mecanismo de fonación", canal: "Espai Coriveu", vistas: 205666 },
    },
    {
      html: `<h3>Cómo se produce la voz</h3><p>Al respirar, las cuerdas vocales están <b>separadas</b> y el aire pasa sin hacer ruido. Al hablar o cantar, se <b>juntan</b> y el aire que sale de los pulmones las hace vibrar muy deprisa: cientos de veces por segundo.</p><ul><li>La <b>altura</b> depende de la tensión y la longitud de las cuerdas: más tensas y cortas → más agudo.</li><li>La <b>intensidad</b> depende de la presión del aire.</li><li>El <b>timbre</b> depende de la forma de los resonadores de cada persona: por eso reconocemos las voces.</li></ul><p>Las cuerdas vocales de un hombre adulto miden unos 17-25 mm; las de una mujer, 12-17 mm; las de un niño, menos de 10 mm.</p>`,
    },
    {
      html: `<h3>La respiración para cantar</h3><p>Para cantar bien hay que controlar el aire. La respiración más eficaz es la <b>costodiafragmática</b> (o abdominal):</p><ol><li>Se inspira por la nariz, sin subir los hombros, notando cómo se expanden la parte baja de las costillas y el abdomen al bajar el <b>diafragma</b>.</li><li>Se expulsa el aire de forma <b>lenta y controlada</b>, sosteniendo con los músculos abdominales.</li></ol><p>Un ejercicio: inspira en 4 tiempos, retén 4 y expulsa en 8 con una «sss» suave y constante. Poco a poco, alarga la espiración.</p>`,
    },
    {
      html: `<h3>La clasificación de las voces</h3><p>Las voces se clasifican por su <b>tesitura</b>: el conjunto de notas que una persona canta con comodidad y buena calidad.</p>${tabla(["", "Aguda", "Media", "Grave"], [["Voces femeninas", "soprano", "mezzosoprano", "contralto"], ["Voces masculinas", "tenor", "barítono", "bajo"]])}<p>Las <b>voces blancas</b> son las de los niños y niñas antes de la pubertad, agudas y parecidas entre sí. El <b>contratenor</b> es un hombre que canta en el registro de contralto usando una técnica especial (falsete). En la ópera, los papeles se escriben pensando en cada tipo de voz: la heroína suele ser soprano y el villano, barítono o bajo.</p>`,
      svg: svg("Tesituras de las voces de grave a aguda: bajo, barítono, tenor, contralto, mezzosoprano y soprano", `${[["bajo", 20, "var(--pen)"], ["barítono", 40, "var(--pen)"], ["tenor", 62, "var(--pen)"], ["contralto", 84, "var(--red)"], ["mezzo", 104, "var(--red)"], ["soprano", 126, "var(--red)"]].map(([n, x, c], i) => `<rect x="${x + 20}" y="${28 + i * 22}" width="96" height="16" rx="5" fill="${c}" fill-opacity=".3" stroke="${c}" stroke-width="1.5"/>${t(x + 14, 40 + i * 22, n, { c, s: 10, a: "end" })}`).join("")}<path d="M60 170 H 246" stroke="var(--muted)" stroke-width="1.5"/>${t(64, 166, "grave", { c: "var(--muted)", s: 10, a: "start" })}${t(244, 166, "agudo", { c: "var(--muted)", s: 10, a: "end" })}`),
      video: { id: "8SWgoum_tR4", titulo: "Clasificación de las voces humanas", canal: "Nauzet González Estévez", vistas: 403774 },
    },
    {
      html: `<h3>Agrupaciones vocales</h3><ul><li><b>Solista</b>: una sola voz, a menudo acompañada por instrumentos.</li><li><b>Dúo, trío, cuarteto</b>…: pequeños grupos de voces.</li><li><b>Coro</b>: un grupo numeroso dividido en <b>cuerdas</b> o secciones. El coro mixto clásico tiene cuatro: <b>soprano, contralto, tenor y bajo</b> (SATB).</li><li><b>Coro de voces blancas</b>: niños y niñas, como la Escolanía de Montserrat, una de las más antiguas de Europa.</li><li><b>Coro de voces iguales</b>: solo femeninas o solo masculinas.</li></ul><p>Cantar <b>a cappella</b> significa cantar sin acompañamiento instrumental. Hoy hay grupos vocales que imitan con la boca todos los instrumentos, incluida la batería (<b>beatbox</b>).</p>`,
    },
    {
      html: `<h3>Géneros de música vocal</h3>${tabla(["Género", "Qué es", "Ejemplo"], [["Ópera", "obra teatral cantada de principio a fin, con orquesta", "«La flauta mágica», Mozart"], ["Zarzuela", "teatro musical español que alterna partes cantadas y habladas", "«La verbena de la Paloma», Bretón"], ["Oratorio", "obra religiosa para solistas, coro y orquesta, sin escenografía", "«El Mesías», Händel"], ["Misa", "música para los textos de la celebración católica", "Misas de Victoria"], ["Canción (lied)", "poema cantado por una voz con piano", "Schubert"], ["Musical", "teatro con canciones y baile, estilo popular", "«El rey león»"]])}<p>Y, por supuesto, la <b>canción popular</b>: casi toda la música que escuchamos a diario es vocal.</p>`,
    },
    {
      html: `<h3>Técnica básica para cantar</h3><ul><li><b>Postura</b>: pies separados a la anchura de los hombros, rodillas sin bloquear, espalda recta y hombros relajados.</li><li><b>Calentamiento</b>: estiramientos del cuello, ejercicios de respiración, vocalizaciones suaves (escalas con «mmm», «brrr» con los labios, sirenas).</li><li><b>Afinación</b>: escuchar antes de cantar y ajustar la voz a la nota de referencia.</li><li><b>Articulación</b>: abrir bien la boca, pronunciar con claridad las consonantes.</li><li><b>Emisión</b>: cantar sin gritar, sin forzar la garganta; el volumen viene del aire, no del cuello.</li></ul>`,
    },
    {
      html: `<h3>Cuidar la voz</h3><p>La voz se puede dañar por mal uso: <b>afonía</b>, <b>disfonía</b> (ronquera) o <b>nódulos</b> en las cuerdas vocales, frecuentes en profesores y cantantes.</p><p>Hábitos saludables:</p><ul><li>Beber <b>agua</b> a menudo; evitar el tabaco y los ambientes con humo.</li><li>No gritar ni hablar por encima del ruido: mejor acercarse o esperar.</li><li>No carraspear: es mejor tragar saliva o beber agua.</li><li>Descansar la voz cuando esté cansada y durante la <b>muda</b> no forzar las notas agudas ni graves.</li><li>Si la ronquera dura más de dos semanas, consultar a un <b>otorrinolaringólogo</b> o a un <b>logopeda</b>.</li></ul>`,
      video: { id: "K7NMn5xforw", titulo: "¿Cómo el cuerpo humano produce la voz y el habla?", canal: "National Institutes of Health (NIH)", vistas: 417370 },
    },
  ],
  figura: {
    titulo: "La voz en un vistazo",
    svg: filas("Resumen: aparato fonador con respiración, laringe y resonadores; voces femeninas y masculinas; coro SATB; géneros vocales; cuidado de la voz", [["Fuelle", "pulmones y diafragma", "var(--pen)"], ["Vibrador", "laringe y cuerdas vocales", "var(--red)"], ["Resonadores", "faringe, boca y fosas nasales", "var(--sun)"], ["Voces", "soprano · mezzo · contralto · tenor · barítono · bajo", "var(--leaf)"], ["Coro", "SATB · voces blancas · a cappella", "var(--inf)"], ["Cuidado", "agua · no gritar · descanso", "var(--ink)"]], 180),
  },
  video: { id: "xQYhRbmT860", titulo: "Tipos de voz: rangos vocales", canal: "AngelMind", vistas: 923131, megusta: 0, busqueda: "la voz humana tipos de voces" },
  quiz: mezcla([
    { q: "Las cuerdas vocales están en…", o: ["la laringe", "los pulmones", "la boca"], a: 0, e: "En el cuello." },
    { q: "Los resonadores sirven para…", o: ["amplificar y dar timbre", "producir el aire", "respirar"], a: 0, e: "Caja de resonancia." },
    { q: "La respiración recomendada para cantar es la…", o: ["costodiafragmática", "clavicular", "por la boca rápida"], a: 0, e: "Usa el diafragma." },
    { q: "La voz femenina más aguda es la…", o: ["soprano", "contralto", "mezzosoprano"], a: 0, e: "Tesitura alta." },
    { q: "La voz masculina más grave es el…", o: ["bajo", "tenor", "barítono"], a: 0, e: "Tesitura baja." },
    { q: "Las voces de los niños antes de la pubertad se llaman…", o: ["voces blancas", "voces graves", "contratenores"], a: 0, e: "Agudas e iguales." },
    { q: "SATB significa…", o: ["soprano, contralto, tenor, bajo", "solista, alto, tiple, barítono", "son, aria, tema, balada"], a: 0, e: "Coro mixto." },
    { q: "Cantar a cappella es cantar…", o: ["sin instrumentos", "con orquesta", "en latín"], a: 0, e: "Solo voces." },
    { q: "Obra teatral cantada de principio a fin:", o: ["ópera", "zarzuela", "oratorio"], a: 0, e: "La zarzuela alterna habla." },
    { q: "Para cuidar la voz conviene…", o: ["beber agua y no gritar", "carraspear a menudo", "hablar por encima del ruido"], a: 0, e: "Hábitos saludables." },
  ]),
  examen: mezcla([
    { q: "La tesitura es…", o: ["las notas que se cantan con comodidad", "el volumen máximo", "la velocidad al cantar"], a: 0, e: "Rango cómodo." },
    { q: "La zarzuela se diferencia de la ópera porque…", o: ["alterna partes habladas", "no tiene orquesta", "no tiene coro"], a: 0, e: "Teatro musical español." },
    { q: "Durante la muda de la voz los chicos…", o: ["bajan casi una octava", "suben una octava", "no cambian"], a: 0, e: "Crecen las cuerdas." },
  ]),
  feynman: ["Las tres partes del aparato fonador", "Cómo se produce la voz y de qué depende su altura", "La clasificación de las voces", "Diferencia entre ópera, zarzuela y oratorio", "Hábitos para cuidar la voz"],
  mapa: mapa("LA VOZ", "var(--eso)", [
    ["Aparato fonador", "fuelle · vibrador · resonadores", "var(--red)"],
    ["Voces", "soprano … bajo", "var(--leaf)"],
    ["Agrupaciones", "solista · coro SATB", "var(--pen)"],
    ["Técnica y salud", "respirar · no gritar", "var(--sun)"],
  ], 240),
  tarjetas: [
    ["Aparato fonador", "Respiración, laringe y resonadores."],
    ["Cuerdas vocales", "Pliegues de la laringe que vibran con el aire."],
    ["Tesitura", "Notas que una voz canta con comodidad."],
    ["Soprano", "Voz femenina aguda."],
    ["Bajo", "Voz masculina grave."],
    ["Voces blancas", "Voces infantiles antes de la muda."],
    ["A cappella", "Cantar sin acompañamiento instrumental."],
    ["Zarzuela", "Teatro musical español con partes cantadas y habladas."],
  ],
  familias: ["Haced juntos el ejercicio de respiración 4-4-8 antes de dormir.", "Escuchad un fragmento de zarzuela y otro de ópera y comentad las diferencias.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La voz: aparato fonador, mecanismo de fonación y clasificación; agrupaciones y géneros vocales; técnica vocal y salud de la voz (RD 217/2022, Música, interpretación y creación).",
    ideas: ["Rutina de calentamiento vocal al inicio de cada sesión.", "Coro de aula a dos voces o en canon.", "Comparar voces de cantantes actuales y clasificarlas."],
  },
  fuentes: [RD, { t: "Sociedad Española de Otorrinolaringología: cuidado de la voz", url: "https://seorl.net/" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Un cantante masculino canta con comodidad notas medias, ni muy agudas ni muy graves. ¿Qué voz tiene?", pasos: ["Es una voz masculina.", "Su tesitura es media.", "Entre el tenor (agudo) y el bajo (grave)."], resultado: "Barítono." },
    { enunciado: "Explica por qué una persona afónica no puede cantar aunque respire bien.", pasos: ["El aire de los pulmones llega bien.", "Pero las cuerdas vocales están inflamadas y no vibran con normalidad.", "Sin vibración regular no hay sonido de voz claro."], resultado: "Falla el «vibrador» (la laringe)." },
    { enunciado: "Clasifica la obra: se representa en un teatro, todo es cantado, con orquesta y decorados.", pasos: ["Teatral: ópera, zarzuela o musical.", "Todo cantado, sin partes habladas.", "Con orquesta clásica."], resultado: "Ópera." },
  ],
  errores: [
    "Respirar subiendo los hombros al cantar.",
    "Forzar la garganta para cantar más fuerte en lugar de usar el aire.",
    "Pensar que «contralto» es una voz masculina.",
    "Confundir la ópera con la zarzuela.",
    "Carraspear continuamente para aclarar la voz.",
  ],
  ejercicios: [
    { q: "Nombra las tres partes del aparato fonador y su función.", sol: "Respiratorio (aire), laringe (vibración), resonadores (amplificar y dar timbre)." },
    { q: "¿Qué ocurre con las cuerdas vocales cuando respiramos y cuando hablamos?", sol: "Al respirar se separan; al hablar se juntan y vibran." },
    { q: "Ordena de agudo a grave las voces masculinas.", sol: "Tenor, barítono, bajo." },
    { q: "¿Qué es un contratenor?", sol: "Un hombre que canta en registro de contralto con la técnica del falsete." },
    { q: "Describe el ejercicio de respiración 4-4-8.", sol: "Inspirar en 4 tiempos, retener 4 y espirar en 8 con una «sss» constante." },
    { q: "¿Qué diferencia hay entre un oratorio y una ópera?", sol: "El oratorio es religioso y no se escenifica; la ópera es teatro." },
    { q: "Escribe tres consejos de postura para cantar.", sol: "Pies a la anchura de los hombros, espalda recta, hombros relajados." },
    { q: "¿Por qué no conviene gritar en el recreo?", sol: "Puede inflamar las cuerdas vocales y provocar disfonía o nódulos." },
    { q: "Busca un cantante actual y clasifica su voz.", sol: "Respuesta abierta (por ejemplo, una cantante pop suele ser soprano o mezzo)." },
    { q: "¿Qué significa SATB y qué voz cantaría tu profesor o profesora?", sol: "Soprano, contralto, tenor y bajo; respuesta abierta." },
  ],
};
