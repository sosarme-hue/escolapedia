// Música 2º ESO: la música popular y del mundo. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "La música popular y del mundo",
  minutos: 50,
  objetivos: ["Distinguir música culta, tradicional (folclore) y popular urbana", "Conocer la música tradicional de España: danzas, canciones e instrumentos", "Reconocer el flamenco como patrimonio de la humanidad", "Descubrir músicas de otras culturas y valorar la diversidad musical"],
  claves: ["folclore", "música tradicional", "flamenco", "palo", "música popular urbana", "fusión"],
  pregunta: {
    texto: "¿Quién compuso «Cumpleaños feliz» o las canciones de corro que cantabas de pequeño?",
    respuesta: "Muchas canciones de corro y nanas son <b>anónimas</b>: se han transmitido de generación en generación, de boca en boca, y cada pueblo las ha ido cambiando. Eso es la <mark>música tradicional</mark> o folclore. «Cumpleaños feliz», en cambio, tiene autoras conocidas: las hermanas Hill, maestras estadounidenses de finales del siglo XIX.",
  },
  bloques: [
    {
      html: `<h3>Tres grandes tipos de música</h3>${tabla(["", "Culta (clásica)", "Tradicional (folclore)", "Popular urbana"], [["Autor", "conocido", "normalmente anónimo", "conocido"], ["Transmisión", "partitura", "oral, de generación en generación", "grabaciones, radio, internet"], ["Intérpretes", "profesionales con formación", "el propio pueblo", "artistas profesionales o aficionados"], ["Ejemplos", "sinfonía, ópera", "jota, muiñeira, nana", "pop, rock, rap, reguetón"]])}<p>Las fronteras no son rígidas: muchos compositores clásicos se inspiraron en el folclore (Falla, Albéniz, Bartók) y muchos artistas actuales mezclan tradición y estilos modernos.</p>`,
    },
    {
      html: `<h3>Características de la música tradicional</h3><ul><li>Es <b>anónima</b> y <b>colectiva</b>: pertenece a una comunidad.</li><li>Se transmite <b>oralmente</b>, por eso existen muchas <b>versiones</b> de una misma canción.</li><li>Está unida a la <b>vida cotidiana</b>: el trabajo (canciones de siega, de trilla), el ciclo vital (nanas, canciones de boda), las fiestas (carnaval, San Juan, Navidad) y la religión (romerías, procesiones).</li><li>Usa instrumentos <b>tradicionales</b>, a menudo fabricados por los propios músicos.</li></ul><p>Su recopilación y estudio se llama <b>etnomusicología</b>. En España, investigadores como Federico Olmeda, Kurt Schindler o Joaquín Díaz grabaron y anotaron miles de canciones antes de que se perdieran.</p>`,
    },
    {
      html: `<h3>Folclore de España</h3><p>Cada región tiene danzas y canciones propias:</p>${tabla(["Danza o canción", "Zona", "Rasgos"], [["Jota", "Aragón, Navarra, Valencia, Castilla…", "compás ternario, saltos, castañuelas, guitarras y bandurrias"], ["Muiñeira", "Galicia", "6/8, gaita, tamboril y bombo"], ["Sardana", "Cataluña", "corro con las manos unidas, cobla (tenora, tible, flabiol)"], ["Sevillanas", "Andalucía", "3/4, por parejas, cuatro partes"], ["Isa y folía", "Canarias", "timple, guitarra"], ["Aurresku y fandango", "País Vasco", "txistu, alboka, trikitixa"], ["Seguidillas", "Castilla-La Mancha", "ternario, castañuelas"]])}<p>Muchas de estas danzas tienen raíces de siglos y hoy siguen vivas en fiestas y escuelas de folclore.</p>`,
      svg: svg("Mapa esquemático de España con danzas: muiñeira en Galicia, jota en Aragón, sardana en Cataluña, sevillanas en Andalucía e isa en Canarias", `<path d="M40 50 L 90 36 L 160 38 L 214 48 L 226 76 L 206 106 L 196 140 L 150 156 L 96 150 L 66 128 L 50 96 Z" fill="var(--sun)" fill-opacity=".14" stroke="var(--sun)" stroke-width="2"/>
        ${[[60, 56, "muiñeira", "var(--pen)"], [160, 66, "jota", "var(--red)"], [210, 60, "sardana", "var(--leaf)"], [120, 140, "sevillanas", "var(--inf)"], [114, 92, "seguidillas", "var(--ink)"], [130, 64, "aurresku", "var(--sun)"]].map(([x, y, n, c]) => `<circle cx="${x}" cy="${y}" r="4" fill="${c}"/>${t(x, y - 7, n, { c, s: 10 })}`).join("")}<rect x="20" y="148" width="36" height="16" rx="4" fill="none" stroke="var(--muted)" stroke-dasharray="3 2"/>${t(38, 160, "isa", { c: "var(--pen)", s: 10 })}`),
    },
    {
      html: `<h3>Instrumentos tradicionales españoles</h3><ul><li><b>Cuerda</b>: guitarra española, bandurria, laúd, timple canario, zanfoña, rabel.</li><li><b>Viento</b>: gaita gallega y asturiana, dulzaina, txistu, flabiol, tenora, alboka.</li><li><b>Percusión</b>: castañuelas, pandereta, pandero cuadrado, tamboril, bombo, cajón (de origen peruano, adoptado por el flamenco), almirez, botella de anís rascada.</li></ul><p>La <b>guitarra española</b> es el instrumento más internacional del país: desde la música popular hasta el concierto clásico con Andrés Segovia o el «Concierto de Aranjuez» de Joaquín Rodrigo.</p>`,
      video: { id: "2XKeQeF97GQ", titulo: "Folk music from Spain: Las lavanderas de Cáceres", canal: "Arany Zoltán", vistas: 52766 },
    },
    {
      html: `<h3>El flamenco</h3><p>El <b>flamenco</b> nació en <b>Andalucía</b> a finales del siglo XVIII con influencias gitanas, andaluzas, árabes, judías y castellanas. En <b>2010</b> la UNESCO lo declaró <mark>Patrimonio Cultural Inmaterial de la Humanidad</mark>.</p><p>Tiene tres elementos: el <b>cante</b> (la voz), el <b>toque</b> (la guitarra) y el <b>baile</b>, a los que se suman las <b>palmas</b>, los <b>jaleos</b> («¡olé!») y el cajón.</p><p>Sus estilos se llaman <b>palos</b>: <b>soleá</b>, <b>seguiriya</b>, <b>bulería</b>, <b>alegrías</b>, <b>tangos</b>, <b>fandangos</b>… Muchos usan un ciclo rítmico de <b>12 tiempos</b> con acentos irregulares (3, 6, 8, 10, 12). Figuras clave: Camarón de la Isla, Paco de Lucía, Carmen Amaya, Enrique Morente; y hoy artistas que lo fusionan con el pop o la música urbana.</p>`,
      svg: svg("Reloj del compás flamenco de 12 tiempos con acentos en 3, 6, 8, 10 y 12", `<circle cx="130" cy="94" r="62" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${[...Array(12)].map((_, i) => { const n = i + 1, a = (n / 12) * 2 * Math.PI - Math.PI / 2, x = 130 + 50 * Math.cos(a), y = 94 + 50 * Math.sin(a), acc = [3, 6, 8, 10, 12].includes(n); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${acc ? 11 : 8}" fill="${acc ? "var(--red)" : "var(--card)"}" fill-opacity="${acc ? 0.85 : 1}" stroke="var(--red)" stroke-width="1.5"/>${t(x.toFixed(1), (y + 4).toFixed(1), String(n), { c: acc ? "#fff" : "var(--ink)", s: 10 })}`; }).join("")}${t(130, 98, "compás", { c: "var(--muted)", s: 12 })}${t(130, 172, "acentos: 3 · 6 · 8 · 10 · 12", { c: "var(--red)", s: 12 })}`, 180),
      video: { id: "A4M3E4oIucY", titulo: "Los orígenes del flamenco: el ritmo", canal: "Señor Naranja", vistas: 82559 },
    },
    {
      html: `<h3>Músicas del mundo</h3><p>Cada cultura ha desarrollado su manera de hacer música:</p><ul><li><b>África subsahariana</b>: polirritmia (varios ritmos a la vez), tambores como el djembé, canto de pregunta y respuesta, kora.</li><li><b>India</b>: el <b>raga</b> (escala y modo melódico) y el <b>tala</b> (ciclo rítmico); sitar, tabla.</li><li><b>Indonesia</b>: el <b>gamelán</b>, orquesta de gongs y metalófonos.</li><li><b>Japón</b>: koto, shakuhachi, tambores taiko.</li><li><b>Latinoamérica</b>: mezcla de raíces indígenas, africanas y europeas: son cubano, tango, cumbia, samba, música andina con quena y charango.</li><li><b>Mundo árabe</b>: escalas con intervalos menores que el semitono, laúd (oud), darbuka.</li></ul>`,
    },
    {
      html: `<h3>La música popular urbana</h3><p>Nace en las ciudades en el siglo XX, ligada a la <b>grabación</b> y los medios de comunicación. Algunos estilos clave:</p>${tabla(["Estilo", "Origen", "Rasgos"], [["Blues y jazz", "EE. UU., comunidades afroamericanas, inicios s. XX", "improvisación, «blue notes», swing"], ["Rock and roll y rock", "EE. UU. y Reino Unido, años 50-60", "guitarra eléctrica, bajo, batería"], ["Pop", "años 60 en adelante", "canciones pegadizas, estribillo, producción cuidada"], ["Hip hop / rap", "Nueva York, años 70", "letra recitada, bases (beats), DJ"], ["Reguetón y música urbana latina", "Puerto Rico y Panamá, años 90", "ritmo «dembow», mezcla con pop"], ["Electrónica", "Europa y EE. UU., años 80", "sintetizadores, música de baile"]])}<p>Estos estilos se han extendido por todo el planeta gracias a internet y las plataformas de streaming.</p>`,
    },
    {
      html: `<h3>Fusión y respeto por la diversidad</h3><p>Hoy es habitual la <b>fusión</b>: mezclar estilos y tradiciones. Ejemplos: el flamenco-pop, el rock con gaitas celtas, el jazz latino o artistas que combinan música urbana con instrumentos tradicionales.</p><p>Escuchar músicas de otras culturas ayuda a:</p><ul><li>Entender que no hay una música «mejor», sino <b>sistemas</b> distintos, cada uno con sus reglas.</li><li>Valorar el <b>patrimonio</b> propio y ajeno.</li><li>Evitar la <b>apropiación cultural</b>: usar elementos de otra cultura sin conocerlos ni reconocer su origen.</li></ul><p>Pregunta en casa por las canciones que cantaban tus abuelos: estás ayudando a conservar un patrimonio que solo vive si alguien lo canta.</p>`,
    },
  ],
  figura: {
    titulo: "Música popular y del mundo",
    svg: filas("Resumen: culta, tradicional y popular urbana; folclore anónimo y oral; danzas españolas; flamenco patrimonio de la humanidad; músicas del mundo; fusión", [["Tres tipos", "culta · tradicional · popular urbana", "var(--ink)"], ["Folclore", "anónimo · oral · ligado a la vida", "var(--sun)"], ["España", "jota · muiñeira · sardana · sevillanas", "var(--red)"], ["Flamenco", "cante, toque, baile · UNESCO 2010", "var(--pen)"], ["Mundo", "raga · gamelán · polirritmia", "var(--leaf)"], ["Urbana y fusión", "jazz · rock · pop · rap · mezcla", "var(--inf)"]], 200),
  },
  video: { id: "V5gdxBD_Boo", titulo: "Todos los géneros musicales explicados en 12 minutos", canal: "Te hago un croquis", vistas: 584394, megusta: 0, busqueda: "músicas del mundo y folclore español" },
  quiz: mezcla([
    { q: "La música tradicional se transmite sobre todo…", o: ["de forma oral", "por partitura", "por la radio"], a: 0, e: "De generación en generación." },
    { q: "El autor de la música folclórica suele ser…", o: ["anónimo", "un compositor famoso", "una discográfica"], a: 0, e: "Colectiva." },
    { q: "La muiñeira es típica de…", o: ["Galicia", "Aragón", "Cataluña"], a: 0, e: "Con gaita." },
    { q: "La sardana se baila en…", o: ["Cataluña", "Andalucía", "Canarias"], a: 0, e: "En corro." },
    { q: "El timple es un instrumento de…", o: ["Canarias", "Galicia", "Asturias"], a: 0, e: "Cuerda pulsada." },
    { q: "El flamenco fue declarado Patrimonio de la Humanidad en…", o: ["2010", "1992", "1950"], a: 0, e: "UNESCO." },
    { q: "Los estilos del flamenco se llaman…", o: ["palos", "tangos", "ragas"], a: 0, e: "Soleá, bulería…" },
    { q: "El gamelán es una orquesta de…", o: ["Indonesia", "India", "Cuba"], a: 0, e: "Gongs y metalófonos." },
    { q: "El rap nació en…", o: ["Nueva York", "Londres", "Madrid"], a: 0, e: "Años 70." },
    { q: "Mezclar estilos y tradiciones se llama…", o: ["fusión", "monodia", "folclore"], a: 0, e: "Flamenco-pop, jazz latino…" },
  ]),
  examen: mezcla([
    { q: "El compás de la bulería y la soleá tiene…", o: ["12 tiempos", "4 tiempos", "7 tiempos"], a: 0, e: "Acentos en 3, 6, 8, 10, 12." },
    { q: "La etnomusicología estudia…", o: ["la música de las culturas y tradiciones", "solo la música clásica", "la acústica"], a: 0, e: "Recopilación y análisis." },
    { q: "La polirritmia es característica de la música…", o: ["africana", "gregoriana", "renacentista"], a: 0, e: "Varios ritmos a la vez." },
  ]),
  feynman: ["Diferencias entre música culta, tradicional y popular urbana", "Por qué hay muchas versiones de una canción tradicional", "Tres danzas españolas y su región", "Los elementos del flamenco", "Qué aporta escuchar músicas de otras culturas"],
  mapa: mapa("MÚSICA POPULAR", "var(--eso)", [
    ["Folclore", "anónimo · oral", "var(--sun)"],
    ["España", "jota · muiñeira · flamenco", "var(--red)"],
    ["Mundo", "África · India · Asia · América", "var(--leaf)"],
    ["Urbana", "jazz · rock · pop · rap", "var(--pen)"],
  ], 240),
  tarjetas: [
    ["Folclore", "Música tradicional de un pueblo, anónima y oral."],
    ["Jota", "Danza ternaria de Aragón y otras regiones."],
    ["Muiñeira", "Danza gallega en 6/8 con gaita."],
    ["Flamenco", "Cante, toque y baile; Patrimonio de la Humanidad (2010)."],
    ["Palo", "Cada estilo del flamenco."],
    ["Raga", "Modo melódico de la música de la India."],
    ["Gamelán", "Orquesta indonesia de gongs y metalófonos."],
    ["Fusión", "Mezcla de estilos musicales."],
  ],
  familias: ["Pedid a los abuelos que os canten una canción de su infancia y grabadla.", "Escuchad una jota, una muiñeira y unas sevillanas y comparad su ritmo.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Música culta, tradicional y popular urbana; folclore español: danzas, canciones e instrumentos; el flamenco; músicas del mundo; fusión y diversidad cultural (RD 217/2022, Música, contextos y culturas).",
    ideas: ["Proyecto «Canciones de mi familia»: recopilación oral.", "Taller de palmas flamencas por bulerías.", "Mapa sonoro del mundo con audiciones breves."],
  },
  fuentes: [RD, { t: "UNESCO: el flamenco, patrimonio cultural inmaterial", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" }],
  revisado: REV,
  ejemplosTitulo: "Audiciones analizadas",
  ejemplos: [
    { enunciado: "Escuchas una danza en compás ternario con guitarras, bandurrias y castañuelas, cantada con mucha fuerza. ¿Qué puede ser?", pasos: ["Ternario y castañuelas: danza española.", "Rondalla de cuerda pulsada.", "Canto potente: típico de la jota."], resultado: "Una jota." },
    { enunciado: "Escuchas guitarra, palmas y una voz rota con un ritmo de 12 tiempos.", pasos: ["Guitarra y palmas: flamenco.", "Ciclo de 12 tiempos.", "Palos como la soleá o la bulería."], resultado: "Flamenco (soleá o bulería)." },
    { enunciado: "Escuchas muchos tambores con ritmos distintos que se superponen y un canto de pregunta y respuesta.", pasos: ["Polirritmia.", "Canto responsorial.", "Rasgos de África subsahariana."], resultado: "Música tradicional africana." },
  ],
  errores: [
    "Llamar «popular» solo a la música famosa: también lo es la tradicional del pueblo.",
    "Pensar que la música tradicional no cambia nunca.",
    "Creer que el flamenco es solo baile.",
    "Juzgar las músicas de otras culturas con las reglas de la nuestra.",
    "Confundir la jota (ternaria, Aragón) con la muiñeira (6/8, Galicia).",
  ],
  ejercicios: [
    { q: "Escribe tres diferencias entre música tradicional y popular urbana.", sol: "Autor anónimo frente a conocido; transmisión oral frente a grabaciones; vinculada a la comunidad frente a la industria." },
    { q: "¿Por qué hay varias versiones de una misma canción tradicional?", sol: "Porque se transmite de memoria y cada lugar o persona la modifica." },
    { q: "Relaciona: sardana, isa, muiñeira, sevillanas.", sol: "Cataluña, Canarias, Galicia, Andalucía." },
    { q: "Nombra tres instrumentos tradicionales de viento de España.", sol: "Gaita, dulzaina, txistu (o flabiol, tenora, alboka)." },
    { q: "¿Cuáles son los tres elementos del flamenco?", sol: "Cante, toque y baile." },
    { q: "Nombra tres palos flamencos.", sol: "Soleá, bulería, alegrías (o tangos, seguiriya, fandango)." },
    { q: "Explica qué son el raga y el tala.", sol: "El raga es el modo melódico y el tala el ciclo rítmico de la música de la India." },
    { q: "¿Dónde y cuándo nació el hip hop?", sol: "En Nueva York, en los años 70." },
    { q: "Pon un ejemplo de fusión musical que conozcas.", sol: "Respuesta abierta: flamenco-pop, rock celta, jazz latino…" },
    { q: "Pregunta a un familiar mayor por una canción de su infancia y escribe su letra.", sol: "Respuesta abierta." },
  ],
};
