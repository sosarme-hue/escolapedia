// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Textos periodísticos y publicitarios",
  minutos: 40,
  objetivos: ["Clasificar los géneros periodísticos en informativos, de opinión y mixtos", "Reconocer las partes de una noticia", "Analizar los recursos con que la publicidad intenta persuadir"],
  claves: ["noticia", "titular", "entradilla", "editorial", "columna", "crónica", "eslogan", "publicidad"],
  pregunta: {
    texto: "Un anuncio dice: «9 de cada 10 dentistas lo recomiendan». ¿Te está informando o te está intentando convencer?",
    respuesta: "Te está <mark>intentando convencer</mark>. Usa un dato que parece objetivo, pero el fin es que compres. La publicidad mezcla información y <b>persuasión</b>; el periodismo informativo, en cambio, debería limitarse a contar hechos comprobados.",
  },
  bloques: [
    {
      html: `<h3>Los géneros periodísticos</h3><p>Se dividen en tres grupos: <b>informativos</b> (cuentan hechos de forma objetiva: noticia, reportaje, entrevista), <b>de opinión</b> (valoran: editorial, artículo, columna, carta al director) y <b>mixtos</b> (informan y valoran: crónica, crítica).</p>`,
      svg: L.filas("Géneros periodísticos en tres grupos", [
        ["Informativos", "noticia · reportaje · entrevista", "var(--inf)"],
        ["De opinión", "editorial · columna · cartas", "var(--red)"],
        ["Mixtos", "crónica · crítica", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La noticia y la pirámide invertida</h3><p>La noticia cuenta un hecho reciente y de interés. Lo más importante va arriba: <mark>titular</mark>, <mark>entradilla</mark> (resumen) y después el <mark>cuerpo</mark> con detalles cada vez menos importantes. Debe responder a las <b>6 W</b>: qué, quién, cuándo, dónde, cómo y por qué.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide invertida de la noticia: titular, entradilla y cuerpo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 16 H 240 L 130 168 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M46 52 H 214 M78 96 H 182" stroke="var(--line)" stroke-width="2"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <text x="130" y="40" font-size="15" fill="var(--red)">TITULAR</text>
          <text x="130" y="80" font-size="14" fill="var(--pen)">entradilla</text>
          <text x="130" y="122" font-size="13" fill="var(--inf)">cuerpo</text>
          <text x="130" y="140" font-size="11" fill="var(--muted)">detalles</text>
        </g></svg>`,
    },
    {
      html: `<h3>Los géneros de opinión</h3><p>El <b>editorial</b> expresa la opinión del periódico y no va firmado. El <b>artículo</b> lo firma un experto o invitado. La <b>columna</b> la escribe siempre la misma persona, en el mismo lugar, con estilo propio. En las <b>cartas al director</b> opinan los lectores.</p>`,
      svg: L.tabla("Quién firma cada género de opinión", ["Género", "¿Quién firma?"], [
        ["Editorial", "nadie: el medio"], ["Artículo", "un experto"], ["Columna", "un columnista"], ["Cartas", "un lector"],
      ], "var(--red)"),
    },
    {
      html: `<h3>La publicidad</h3><p>Su intención es <mark>persuadir</mark> para que compremos o hagamos algo. Combina imagen y texto: <b>eslogan</b> (frase corta y fácil de recordar), <b>marca</b> y <b>logotipo</b>. Se dirige a un público concreto y apela más a las emociones que a la razón.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Anuncio inventado con imagen, eslogan y marca señalados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="20" y="14" width="140" height="152" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="90" cy="60" r="30" fill="var(--sun)"/><path d="M70 64 q 20 18 40 0" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <g ${F} font-weight="700">
          <text x="90" y="120" text-anchor="middle" font-size="14" fill="var(--red)">¡Muerde el día!</text>
          <rect x="54" y="134" width="72" height="22" rx="6" fill="var(--pen)"/><text x="90" y="150" text-anchor="middle" font-size="12" fill="#fff">ZUMAX</text>
          <g font-size="12"><text x="170" y="64" fill="var(--muted)">imagen</text><text x="170" y="124" fill="var(--red)">eslogan</text><text x="170" y="150" fill="var(--pen)">marca</text></g>
        </g></svg>`,
    },
    {
      html: `<h3>Recursos para persuadir</h3><p>La publicidad usa <b>imperativos</b> («¡Pruébalo!»), <b>preguntas</b>, <b>rimas</b> y juegos de palabras, <b>superlativos</b> («el mejor»), personas famosas y datos llamativos. Un lector crítico se pregunta: ¿qué quiere que haga?, ¿qué emoción busca?, ¿qué no me cuenta?</p>`,
      svg: L.filas("Recursos persuasivos con ejemplo", [
        ["Imperativo", "¡Pruébalo ya!", "var(--pen)"], ["Superlativo", "el más rápido", "var(--red)"],
        ["Rima", "come sano, vive ufano", "var(--leaf)"], ["Famoso", "lo usa tu ídolo", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Informar, opinar o convencer",
    svg: L.columnas("Tres intenciones: informar, opinar y persuadir", [
      ["la noticia", "INFORMAR", ["hechos comprobables,", "tercera persona"], "var(--inf)"],
      ["la columna", "OPINAR", ["valoración firmada,", "estilo personal"], "var(--red)"],
      ["el anuncio", "PERSUADIR", ["eslogan, imagen,", "emociones"], "var(--pen)"],
    ]),
  },
  video: { id: "zbDsyQG7jp8", titulo: "Qué son los géneros periodísticos: clasificación, características y ejemplos", canal: "Clases Particulares en Ávila", vistas: 124559, megusta: 0, busqueda: "géneros periodísticos informativos y de opinión" },
  quiz: [
    { q: "¿Qué parte de la noticia resume lo más importante justo después del titular?", o: ["La entradilla", "El cuerpo", "La firma"], a: 0, e: "La entradilla responde a las preguntas básicas en pocas líneas." },
    { q: "¿Qué género expresa la opinión del propio periódico y no va firmado?", o: ["La crónica", "El editorial", "El reportaje"], a: 1, e: "El editorial representa la línea del medio." },
    { q: "La crónica es un género…", o: ["informativo puro", "de opinión puro", "mixto"], a: 2, e: "Informa de hechos y añade la valoración del cronista." },
    { q: "«El chocolate más cremoso del mundo» usa un…", o: ["superlativo", "imperativo", "tecnicismo"], a: 0, e: "«El más…» exagera la calidad del producto." },
    { q: "La estructura de la noticia se llama pirámide invertida porque…", o: ["empieza por los detalles", "pone lo más importante al principio", "termina con la opinión"], a: 1, e: "De más a menos importante: se puede cortar por abajo sin perder lo esencial." },
  ],
  examen: [
    { q: "Las 6 W de la noticia son…", o: ["qué, quién, cuándo, dónde, cómo, por qué", "titular, entradilla y cuerpo", "eslogan, logo y marca"], a: 0, e: "Son las preguntas que toda noticia debe responder." },
    { q: "¿Qué texto escribe siempre la misma persona en el mismo espacio?", o: ["La columna", "La noticia", "La carta al director"], a: 0, e: "El columnista tiene un espacio fijo y estilo propio." },
    { q: "La principal intención de la publicidad es…", o: ["informar con objetividad", "persuadir", "narrar hechos"], a: 1, e: "Busca que el público compre o actúe." },
  ],
  feynman: ["Los tres grupos de géneros periodísticos", "Las partes de una noticia y por qué es una pirámide invertida", "La diferencia entre editorial, artículo y columna", "Tres recursos de la publicidad"],
  mapa: mapa("PRENSA Y PUBLICIDAD", "var(--eso)", [
    ["Informativos", "noticia · reportaje", "var(--inf)"],
    ["Opinión", "editorial · columna", "var(--red)"],
    ["Mixtos", "crónica · crítica", "var(--leaf)"],
    ["Publicidad", "eslogan · imagen · marca", "var(--pen)"],
  ]),
  tarjetas: [
    ["¿Qué es la entradilla?", "El primer párrafo de la noticia, que resume lo esencial."],
    ["Editorial", "Texto de opinión del periódico, sin firma."],
    ["Crónica", "Género mixto: informa de hechos y los valora quien estuvo allí."],
    ["Eslogan", "Frase breve y fácil de recordar que acompaña a una marca."],
    ["Pirámide invertida", "Orden de la noticia: de lo más importante a lo menos importante."],
  ],
  familias: ["Mirad juntos la portada de un periódico y clasificad tres textos en informativo, opinión o mixto.", "Durante los anuncios de la tele, pedidle que diga qué recurso persuasivo usa cada uno.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Géneros discursivos propios del ámbito social: textos periodísticos y publicitarios; alfabetización mediática y detección de desinformación (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Redacción de una noticia del centro con pirámide invertida y las 6 W.", "Comparar la misma noticia en tres medios y detectar adjetivos valorativos.", "Crear un anuncio y explicar los recursos elegidos y el público objetivo."],
  },
  fuentes: [
    L.BOE,
    { t: "Géneros periodísticos, Wikipedia en español", url: "https://es.wikipedia.org/wiki/G%C3%A9nero_period%C3%ADstico" },
    { t: "Fundéu RAE, recomendaciones de redacción periodística", url: "https://www.fundeu.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Distinguir reportaje, entrevista y crónica", "Analizar un anuncio y detectar noticias falsas"],
  bloques: [
    { tras: "La noticia y la pirámide invertida", html: `<h3>El titular y la entradilla</h3><p>El <b>titular</b> debe atrapar en pocas palabras: verbos en presente aunque el hecho sea pasado («El Gobierno aprueba…»), sin artículos innecesarios y con los datos clave. A veces lo acompañan un <b>antetítulo</b> (encima, contexto) y un <b>subtítulo</b> (debajo, amplía). La <b>entradilla</b> o <i>lead</i> resume en uno o dos párrafos las respuestas a las 6 W: <mark>qué, quién, cuándo, dónde, cómo y por qué</mark>. Si el lector solo lee esto, ya sabe lo esencial.</p><p>El <b>cuerpo</b> amplía datos, añade declaraciones entre comillas (citas de los protagonistas) y contexto. Por eso la noticia se puede recortar desde abajo sin perder lo fundamental.</p>` },
    { tras: "La noticia y la pirámide invertida", html: `<h3>Reportaje, entrevista y crónica</h3>${L.tb(["Género", "Qué hace", "Rasgo clave"], [["Reportaje", "investiga un tema a fondo (no tiene por qué ser actual)", "testimonios, datos, fotos; mucha extensión"], ["Entrevista", "recoge las palabras de una persona", "pregunta y respuesta, o entrevista-perfil con descripciones"], ["Crónica", "narra un hecho que el periodista ha vivido o seguido", "orden cronológico, firma, estilo personal y valoraciones"]])}<p>La crónica y la entrevista-perfil son <b>géneros mixtos</b>: informan, pero el autor también interpreta. Las crónicas deportivas, de sucesos o de un festival son las más habituales.</p>` },
    { tras: "Los géneros de opinión", html: `<h3>Información, opinión y noticias falsas</h3><p>En un periódico serio, la información y la opinión van separadas y marcadas. En redes sociales se mezclan, y circulan <b>bulos</b> o <i>fake news</i>: informaciones falsas que imitan el aspecto de una noticia. Para comprobar una información:</p><ol><li>¿Quién la publica? Busca el medio y el autor.</li><li>¿Tiene fecha y fuentes? Una noticia real cita de dónde salen los datos.</li><li>¿El titular dice lo mismo que el cuerpo? El <b>titular cebo</b> (<i>clickbait</i>) exagera para que pinches.</li><li>¿Lo publican otros medios fiables? Hay webs de verificación como Maldita.es o Newtral.</li></ol><p>Desconfía de textos que provocan <mark>mucha emoción y piden compartir «antes de que lo borren»</mark>.</p>` },
    { tras: "La publicidad", html: `<h3>Tipos de publicidad y su lenguaje</h3><p>La <b>publicidad comercial</b> vende productos o servicios. La <b>propaganda</b> difunde ideas políticas, religiosas o sociales. La <b>publicidad institucional</b> (campañas de tráfico, de salud, de igualdad) la pagan las administraciones para el bien común. Hoy crece la <b>publicidad encubierta</b>: <i>influencers</i> que muestran un producto sin decir claramente que les pagan; por ley deben indicarlo con etiquetas como «#publi».</p><p>El anuncio combina <b>código verbal</b> (eslogan, texto) e <b>icónico</b> (imagen, color, música). Usa todas las funciones del lenguaje, pero domina la <mark>apelativa</mark>, apoyada por la poética (rimas, metáforas, juegos de palabras).</p>` },
    { tras: "Recursos para persuadir", html: `<h3>Cómo analizar un anuncio</h3><ol><li><b>Producto y marca</b>: ¿qué se anuncia?</li><li><b>Público</b>: edad, sexo, gustos a los que se dirige.</li><li><b>Imagen</b>: personas, colores, ambiente; qué valores transmite (éxito, libertad, familia, juventud).</li><li><b>Texto</b>: eslogan y recursos (imperativo, rima, hipérbole, anglicismos).</li><li><b>Estrategia</b>: ¿razones o emociones?, ¿asocia el producto a algo deseable?</li><li><b>Valoración</b>: ¿transmite estereotipos? ¿Es honesto?</li></ol>` },
  ],
  videos: [
    ["Los géneros periodísticos", L.vid("4IQpf1urNgc", "¿Qué son los géneros periodísticos? Clasificación y ejemplos", "Astraway", 77986)],
    ["Tipos de publicidad y su lenguaje", L.vid("IHrfdAODfxg", "Texto publicitario: definición, funciones, estructura, tipos y elementos", "Estudiando con Jackeline", 90853)],
  ],
  ejemplos: [
    ["Comprueba si esta entradilla responde a las 6 W: «Más de 2.000 vecinos de Zaragoza se concentraron ayer por la tarde en la plaza del Pilar para pedir más carriles bici, según la Policía Local.»", ["Qué: una concentración para pedir carriles bici. Quién: más de 2.000 vecinos.", "Cuándo: ayer por la tarde. Dónde: plaza del Pilar, Zaragoza.", "Por qué: para pedir más carriles bici. Fuente: Policía Local.", "Falta el cómo (de forma pacífica, con pancartas…), que puede ir en el cuerpo."], "responde a cinco de las 6 W; el cómo se puede añadir en el cuerpo."],
    ["Analiza el eslogan «Fresco, fresquísimo: ¡tu verano empieza aquí!» de un helado.", ["Superlativo «fresquísimo»: exagera la cualidad.", "Imperativo implícito y exclamación: apela al lector.", "Posesivo «tu»: trato cercano, se dirige a cada uno.", "Asocia el producto a un valor deseado: el verano, las vacaciones."], "eslogan apelativo con superlativo, tuteo y asociación emocional al verano."],
    ["Decide el género: un texto firmado que cuenta minuto a minuto un concierto e incluye «el público, entregado, vibró con la última canción».", ["Narra un hecho en orden cronológico.", "El autor estuvo allí y lo firma.", "Incluye valoraciones («entregado», «vibró»)."], "es una crónica (género mixto)."],
  ],
  errores: [
    "Confundir el editorial (opinión del periódico, sin firma) con el artículo (firmado por un colaborador).",
    "Escribir el titular en pasado y con detalles secundarios en lugar de lo esencial.",
    "Pensar que todo lo que tiene forma de noticia es verdad: hay que comprobar la fuente.",
    "Analizar solo el texto de un anuncio y olvidar la imagen, que también comunica.",
    "Creer que la propaganda y la publicidad comercial son lo mismo.",
  ],
  ejercicios: [
    ["Ordena según la pirámide invertida: cuerpo, titular, entradilla.", "Titular, entradilla, cuerpo. Lo más importante va arriba."],
    ["Escribe un titular para: «Ayer, el equipo femenino del instituto ganó la final provincial de baloncesto por 54-40».", "«El instituto gana la final provincial femenina de baloncesto.» Presente, breve y con el dato clave."],
    ["¿A qué género pertenece una carta de una lectora que se queja del ruido de su barrio?", "Género de opinión: carta al director."],
    ["Indica la diferencia entre reportaje y noticia.", "La noticia cuenta un hecho reciente de forma breve; el reportaje investiga un tema con profundidad, testimonios y datos, y no tiene por qué ser de actualidad inmediata."],
    ["Señala dos recursos en «¿Cansado? Prueba Energix. Energía que se nota.»", "Pregunta retórica (¿Cansado?) e imperativo (Prueba). También repetición o juego entre Energix y energía."],
    ["¿Qué tipo de publicidad es una campaña de la DGT contra el alcohol al volante?", "Publicidad institucional: la paga una administración para el bien común."],
    ["Explica qué es el clickbait y pon un ejemplo.", "Un titular exagerado o engañoso para conseguir clics, por ejemplo: «No creerás lo que pasó cuando abrió esta puerta…»."],
    ["Escribe tres preguntas para comprobar si una noticia es falsa.", "¿Quién la publica y en qué medio? ¿Cita fuentes y tiene fecha? ¿La publican otros medios fiables o webs de verificación?"],
    ["¿Por qué un influencer debe poner «#publi»?", "Porque la ley exige identificar la publicidad; si no, sería publicidad encubierta y engañaría a sus seguidores."],
    ["Analiza el público y el valor de un anuncio de coche con una familia sonriente en la montaña.", "Público: familias con hijos. Valores: seguridad, libertad, unión familiar y naturaleza. Apela a las emociones más que a datos técnicos."],
  ],
  quiz: [
    ["Las 6 W se responden sobre todo en…", ["la entradilla", "el último párrafo", "la firma"], 0, "El lead resume lo esencial."],
    ["Un texto que investiga a fondo un tema con testimonios es un…", ["reportaje", "editorial", "eslogan"], 0, "El reportaje profundiza."],
    ["La publicidad que oculta que es publicidad se llama…", ["encubierta", "institucional", "propaganda"], 0, "Por eso se exige «#publi»."],
    ["Una campaña de vacunación del Ministerio es publicidad…", ["institucional", "comercial", "encubierta"], 0, "La paga una administración."],
    ["Un titular exagerado para conseguir clics es un…", ["clickbait", "antetítulo", "editorial"], 0, "Titular cebo."],
  ],
  tarjetas: [
    ["Reportaje", "Género informativo que investiga un tema a fondo con datos y testimonios."],
    ["Bulo (fake news)", "Información falsa con aspecto de noticia; se comprueba con fuentes y webs de verificación."],
    ["Publicidad institucional", "Campaña pagada por una administración para el bien común (tráfico, salud…)."],
  ],
});
