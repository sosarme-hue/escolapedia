// Educación Plástica, Visual y Audiovisual 1º ESO: la imagen y los medios de comunicación. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla, vb, vg } = require("./_eso1c");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "La imagen y los medios de comunicación",
  minutos: 55,
  objetivos: ["Reconocer la presencia de la imagen en los medios de comunicación", "Usar los tipos de plano y los ángulos de cámara en fotografía y vídeo", "Analizar los recursos de la publicidad con espíritu crítico", "Conocer el lenguaje del cómic y los principios de la imagen en movimiento", "Usar las imágenes en internet de forma responsable"],
  claves: ["medios de comunicación", "plano", "ángulo picado", "publicidad", "viñeta", "fotograma"],
  pregunta: {
    texto: "¿Por qué en los anuncios de hamburguesas la comida parece mucho más apetecible que la que te sirven en el restaurante?",
    respuesta: "Porque la imagen publicitaria está <b>preparada</b>: estilistas de comida, luces estudiadas, ángulos favorables y retoque digital. Su objetivo no es informar, sino <mark>convencerte de que la compres</mark>. Saber cómo se construyen esas imágenes te ayuda a mirarlas con ojo crítico.",
  },
  bloques: [
    {
      html: `<h3>La imagen en los medios de comunicación</h3><p>Los <b>medios de comunicación de masas</b> llevan mensajes a muchísimas personas a la vez: prensa, radio, televisión, cine, publicidad exterior e <b>internet</b> (webs, redes sociales, plataformas de vídeo).</p><p>Salvo la radio, todos se apoyan en <b>imágenes</b>, que pueden ser:</p><ul><li><b>Fijas</b>: fotografía, ilustración, cartel, cómic, infografía.</li><li><b>En movimiento</b>: cine, televisión, vídeo, animación, videojuegos.</li></ul><p>Cada medio usa la imagen con una <b>intención</b>: informar (noticias), entretener (series, cómics), persuadir (publicidad) o enseñar (documentales). Reconocer esa intención es el primer paso de una <b>lectura crítica</b>.</p>`,
    },
    {
      html: `<h3>La fotografía: los tipos de plano</h3><p>El <b>plano</b> indica cuánto espacio ocupa la figura humana en el encuadre. Cada uno sirve para algo distinto:</p>${tabla(["Plano", "Qué muestra", "Para qué sirve"], [["Gran plano general", "un paisaje enorme con personas diminutas", "situar, impresionar, soledad"], ["Plano general", "la persona entera y su entorno", "mostrar el lugar y la acción"], ["Plano americano", "de las rodillas hacia arriba", "acción y diálogo (típico de los wésterns)"], ["Plano medio", "de la cintura hacia arriba", "conversaciones, presentadores de televisión"], ["Primer plano", "la cara y los hombros", "emociones"], ["Primerísimo primer plano / detalle", "una parte de la cara o un objeto", "intensidad, pistas importantes"]])}<p>Cuanto más cerca, más <b>emoción</b>; cuanto más lejos, más <b>información</b> del entorno.</p>`,
      svg: svg("Una silueta de persona con los cortes de los planos: general, americano, medio y primer plano", `<circle cx="80" cy="34" r="12" fill="var(--pen)" fill-opacity=".4"/><path d="M80 46 V 110 M80 58 L 60 88 M80 58 L 100 88 M80 110 L 66 160 M80 110 L 94 160" stroke="var(--pen)" stroke-width="5" stroke-linecap="round"/>${[[56, "primer plano", "var(--red)"], [90, "plano medio", "var(--sun)"], [130, "americano", "var(--leaf)"], [166, "general", "var(--ink)"]].map(([y, n, c]) => `<path d="M40 ${y} H 130" stroke="${c}" stroke-width="2" stroke-dasharray="5 3"/>${t(140, y + 4, n, { s: 11, a: "start", c })}`).join("")}`),
    },
    {
      html: `<h3>Ángulos de cámara</h3><p>El <b>ángulo</b> es la altura desde la que se toma la imagen respecto a la figura:</p><ul><li><b>Normal</b>: a la altura de los ojos. Neutral, natural.</li><li><b>Picado</b>: desde arriba. La figura parece <mark>más pequeña, débil o vulnerable</mark>.</li><li><b>Contrapicado</b>: desde abajo. La figura parece <mark>más grande, poderosa o amenazante</mark>. Es el favorito para los superhéroes.</li><li><b>Cenital</b>: desde justo encima (vista de pájaro). <b>Nadir</b>: desde justo debajo.</li><li><b>Aberrante</b> u holandés: con la cámara inclinada. Transmite desequilibrio o inquietud.</li></ul><p>Fotógrafos y cineastas eligen el ángulo para que sintamos algo concreto ante un personaje.</p>`,
      svg: svg("Una cámara arriba mira hacia abajo (picado) y otra abajo mira hacia arriba (contrapicado) a la misma figura", `<circle cx="130" cy="64" r="10" fill="var(--pen)" fill-opacity=".4"/><path d="M130 74 V 116 M130 84 L 116 104 M130 84 L 144 104 M130 116 L 120 150 M130 116 L 140 150" stroke="var(--pen)" stroke-width="4" stroke-linecap="round"/><rect x="24" y="22" width="34" height="22" rx="4" fill="var(--red)"/><path d="M58 33 L 112 90" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/>${t(40, 60, "picado", { c: "var(--red)", s: 11 })}<rect x="200" y="148" width="34" height="22" rx="4" fill="var(--leaf)"/><path d="M200 156 L 146 90" stroke="var(--leaf)" stroke-width="1.5" stroke-dasharray="4 3"/>${t(216, 138, "contrapicado", { c: "var(--leaf)", s: 11 })}`),
    },
    {
      html: `<h3>La publicidad</h3><p>La <b>publicidad</b> busca que compremos un producto, usemos un servicio o adoptemos una idea. Un anuncio gráfico suele tener:</p><ul><li><b>Imagen</b> principal, que atrae la mirada.</li><li><b>Eslogan</b>: una frase corta y fácil de recordar.</li><li><b>Logotipo</b> o marca.</li><li><b>Texto</b> informativo (a veces muy pequeño, con las condiciones).</li></ul><p>Estrategias habituales: asociar el producto a la <b>felicidad</b>, el éxito o la amistad; usar a <b>personas famosas</b>; crear sensación de <b>urgencia</b> («¡solo hoy!»); mostrar a gente «como tú». La <b>publicidad institucional</b> (campañas de salud, tráfico, reciclaje) usa las mismas técnicas para fines sociales.</p>`,
      video: vb("imaB"),
    },
    {
      html: `<h3>El lenguaje del cómic</h3><p>El <b>cómic</b> o historieta cuenta historias con una secuencia de imágenes y textos. Sus elementos son:</p>${tabla(["Elemento", "Función"], [["Viñeta", "cada recuadro con una escena; su tamaño y forma marcan el ritmo"], ["Bocadillo o globo", "contiene lo que dicen (contorno liso) o piensan (forma de nube) los personajes"], ["Cartela", "recuadro con la voz del narrador («Mientras tanto…»)"], ["Onomatopeya", "palabra que imita un sonido: ¡BOOM!, ¡ring!, ¡splash!"], ["Líneas cinéticas", "rayas que indican movimiento"], ["Metáforas visuales", "bombilla = idea; estrellas = dolor; corazones = amor"]])}<p>Entre viñeta y viñeta, el lector imagina lo que pasa: esa elipsis es parte de la magia del cómic.</p>`,
      svg: svg("Dos viñetas de cómic: en la primera un personaje con un bocadillo de diálogo y en la segunda una onomatopeya y líneas cinéticas", `<rect x="14" y="24" width="112" height="120" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><rect x="134" y="24" width="112" height="120" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="50" cy="104" r="12" fill="var(--pen)" fill-opacity=".4"/><path d="M50 116 V 140" stroke="var(--pen)" stroke-width="4"/><path d="M40 40 H 116 V 72 H 74 L 60 86 L 64 72 H 40 Z" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.8"/>${t(78, 61, "¡Hola!", { s: 12 })}<circle cx="200" cy="104" r="12" fill="var(--red)" fill-opacity=".4"/><path d="M150 96 H 180 M150 106 H 182 M150 116 H 180" stroke="var(--muted)" stroke-width="2"/>${t(196, 62, "¡ZAS!", { s: 18, d: true, c: "var(--red)" })}${t(70, 162, "bocadillo", { s: 10 })}${t(190, 162, "onomatopeya", { s: 10 })}`),
      video: vb("imaB2"),
    },
    {
      html: `<h3>La imagen en movimiento</h3><p>El cine y la animación son una <b>ilusión</b>: en realidad vemos una sucesión de imágenes fijas, los <b>fotogramas</b>, que pasan muy deprisa (24 por segundo en el cine). El ojo y el cerebro las unen y percibimos <b>movimiento</b>.</p><p>Antes del cine se inventaron juguetes ópticos que usan este efecto: el <b>taumatropo</b> (un disco con un dibujo en cada cara que, al girar, se ven juntos), el <b>zoótropo</b> o el <b>flipbook</b> (libro de dibujos que se pasan rápido con el pulgar).</p><p>Con el móvil puedes crear tu propia animación en <b>stop motion</b>: mueves un poco un objeto, haces una foto, lo vuelves a mover… y al final reproduces todas las fotos seguidas.</p>`,
    },
    {
      html: `<h3>La imagen digital y las redes sociales</h3><p>Hoy cualquiera puede hacer, retocar y publicar imágenes en segundos. Eso exige <b>responsabilidad</b>:</p><ul><li><b>Retoque</b>: muchas fotos de redes y revistas están modificadas con filtros o programas. Los cuerpos y las caras «perfectos» no son reales.</li><li><b>Privacidad</b>: no publiques fotos de otras personas sin su permiso, y menos de menores. Una imagen subida a internet puede quedarse para siempre.</li><li><b>Derechos de autor</b>: las imágenes tienen dueño. Usa imágenes propias o con licencias libres (como Creative Commons) y cita la fuente.</li><li><b>Imágenes falsas</b>: existen montajes y fotos creadas con inteligencia artificial. Antes de compartir, comprueba de dónde salen.</li></ul>`,
    },
    {
      html: `<h3>Leer imágenes con espíritu crítico</h3><p>Ante cualquier imagen de los medios, hazte estas preguntas:</p><ol><li><b>¿Quién</b> la ha hecho y <b>para qué</b>? (informar, vender, entretener, convencer).</li><li><b>¿Qué muestra</b> exactamente? Haz una lectura objetiva.</li><li><b>¿Qué sugiere</b>? ¿Qué emociones busca provocar?</li><li><b>¿Cómo</b> lo consigue? Plano, ángulo, color, luz, composición, texto.</li><li><b>¿Qué deja fuera</b>? Todo encuadre elige y oculta.</li></ol><p>Practicar con anuncios, portadas de revistas y miniaturas de vídeos es la mejor forma de no dejarse manipular.</p>`,
    },
  ],
  figura: {
    titulo: "La imagen y los medios en un vistazo",
    svg: filas("Resumen: medios de comunicación con imagen fija o en movimiento; tipos de plano; ángulos picado y contrapicado; publicidad; cómic; responsabilidad digital", [["Medios", "prensa · TV · cine · internet", "var(--pen)"], ["Planos", "general · medio · primer plano", "var(--inf)"], ["Ángulos", "picado empequeñece · contrapicado engrandece", "var(--sun)"], ["Publicidad", "imagen · eslogan · logotipo", "var(--red)"], ["Cómic", "viñeta · bocadillo · onomatopeya", "var(--leaf)"], ["Digital", "retoque · privacidad · derechos", "var(--ink)"]], 180),
  },
  video: vg("imaV"),
  quiz: mezcla([
    { q: "¿Cuál es un medio de comunicación de masas?", o: ["la televisión", "una carta", "una conversación"], a: 0, e: "Llega a muchos a la vez." },
    { q: "El plano que muestra de la cintura hacia arriba es el…", o: ["plano medio", "primer plano", "plano general"], a: 0, e: "Presentadores." },
    { q: "Para mostrar emociones se usa sobre todo el…", o: ["primer plano", "gran plano general", "plano americano"], a: 0, e: "La cara." },
    { q: "Una foto tomada desde abajo es un…", o: ["contrapicado", "picado", "cenital"], a: 0, e: "Engrandece." },
    { q: "El picado hace que la figura parezca…", o: ["más pequeña o débil", "más poderosa", "más rápida"], a: 0, e: "Desde arriba." },
    { q: "La frase corta y fácil de recordar de un anuncio es el…", o: ["eslogan", "logotipo", "bocadillo"], a: 0, e: "Lema." },
    { q: "Cada recuadro de un cómic es una…", o: ["viñeta", "cartela", "onomatopeya"], a: 0, e: "Escena." },
    { q: "«¡Crash!» en un cómic es una…", o: ["onomatopeya", "cartela", "metáfora visual"], a: 0, e: "Imita un sonido." },
    { q: "En el cine pasan normalmente… fotogramas por segundo", o: ["24", "2", "240"], a: 0, e: "Ilusión de movimiento." },
    { q: "Antes de publicar la foto de un amigo debes…", o: ["pedirle permiso", "ponerle un filtro", "nada"], a: 0, e: "Privacidad." },
  ]),
  examen: mezcla([
    { q: "La técnica de fotografiar objetos moviéndolos poco a poco es…", o: ["stop motion", "contrapicado", "collage"], a: 0, e: "Animación." },
    { q: "El recuadro con la voz del narrador en un cómic es la…", o: ["cartela", "viñeta", "onomatopeya"], a: 0, e: "«Mientras tanto…»" },
    { q: "Una licencia que permite reutilizar imágenes con condiciones es…", o: ["Creative Commons", "copyright total", "un eslogan"], a: 0, e: "Licencia libre." },
  ]),
  feynman: ["Diferencia entre imagen fija y en movimiento", "Para qué sirve cada tipo de plano", "Qué transmiten el picado y el contrapicado", "Elementos y estrategias de un anuncio", "Por qué hay que ser responsable con las imágenes en internet"],
  mapa: mapa("IMAGEN Y MEDIOS", "var(--eso)", [
    ["Fotografía", "planos · ángulos", "var(--pen)"],
    ["Publicidad", "persuadir · eslogan", "var(--red)"],
    ["Cómic y cine", "viñetas · fotogramas", "var(--leaf)"],
    ["Ciudadanía digital", "privacidad · derechos", "var(--sun)"],
  ], 230),
  tarjetas: [
    ["Medios de masas", "Llevan mensajes a muchas personas a la vez."],
    ["Primer plano", "Cara y hombros: emoción."],
    ["Plano general", "Persona entera y entorno."],
    ["Picado", "Cámara desde arriba: empequeñece."],
    ["Contrapicado", "Cámara desde abajo: engrandece."],
    ["Eslogan", "Frase breve y memorable de un anuncio."],
    ["Onomatopeya", "Palabra que imita un sonido."],
    ["Fotograma", "Cada imagen fija de una película."],
  ],
  familias: ["Analizad juntos un anuncio de la tele: ¿qué vende y qué emoción usa?", "Haced una animación stop motion con el móvil y juguetes.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "La imagen en los medios de comunicación: fotografía (planos y ángulos), publicidad, cómic, imagen en movimiento y uso responsable de la imagen digital (RD 217/2022, Educación Plástica, Visual y Audiovisual, comunicación audiovisual).",
    ideas: ["Fotografiar al mismo compañero con distintos planos y ángulos.", "Contraanuncio crítico sobre un producto.", "Cómic de una página o stop motion de 10 segundos."],
  },
  fuentes: [RD, { t: "Agencia Española de Protección de Datos: imágenes de menores en internet", url: "https://www.aepd.es/" }],
  revisado: REV,
  ejemplosTitulo: "Lo hacemos paso a paso",
  ejemplos: [
    { enunciado: "Analiza un anuncio de zapatillas con un deportista famoso saltando, en contrapicado, y el eslogan «Supera tus límites».", pasos: ["Intención: vender zapatillas.", "Recursos: famoso (admiración), contrapicado (poder), eslogan (superación).", "Lo que sugiere: si las compras, serás como él. Lo que no dice: precio, materiales, origen."], resultado: "Persuade asociando el producto al éxito." },
    { enunciado: "Cuenta en tres viñetas que alguien encuentra un regalo.", pasos: ["Viñeta 1, plano general: el personaje entra en la habitación y ve una caja.", "Viñeta 2, plano detalle: las manos abren la caja con la onomatopeya «¡RAS!».", "Viñeta 3, primer plano: cara de sorpresa con un bocadillo «¡Es para mí!»."], resultado: "Una minihistoria que varía los planos para dar ritmo." },
    { enunciado: "Haz que un personaje parezca un gigante con una foto.", pasos: ["Ponte por debajo de él, casi en el suelo.", "Encuadra en contrapicado con el cielo detrás.", "Si quieres, añade elementos pequeños en primer término para exagerar."], resultado: "El personaje parece enorme y poderoso." },
  ],
  errores: [
    "Creer que una foto siempre muestra la realidad tal cual (todo encuadre elige y puede retocarse).",
    "Confundir el plano (lo que se ve) con el ángulo (desde dónde se ve).",
    "Usar imágenes de internet sin comprobar sus derechos ni citar la fuente.",
    "Compartir imágenes de otras personas sin su consentimiento.",
    "Leer la publicidad sin preguntarse qué quiere conseguir.",
  ],
  ejercicios: [
    { q: "Escribe cuatro medios de comunicación y si usan imagen fija, en movimiento o ambas.", sol: "Prensa (fija), televisión (movimiento), internet (ambas), cartel publicitario (fija)." },
    { q: "Haz cuatro fotos de un compañero: plano general, americano, medio y primer plano.", sol: "Respuesta práctica." },
    { q: "Haz dos fotos de un objeto: una en picado y otra en contrapicado. ¿Qué cambia?", sol: "En picado parece pequeño; en contrapicado, grande e importante." },
    { q: "Busca un anuncio y señala imagen, eslogan, logotipo y texto.", sol: "Respuesta abierta." },
    { q: "Escribe tres estrategias de la publicidad y un ejemplo de cada una.", sol: "Famosos, urgencia («últimas unidades»), asociar a la felicidad (familia sonriente)." },
    { q: "Dibuja un bocadillo de diálogo, uno de pensamiento y una cartela.", sol: "Respuesta práctica: contorno liso con rabo, nube con burbujas, rectángulo." },
    { q: "Inventa cinco onomatopeyas y di qué sonido imitan.", sol: "Respuesta abierta: ¡pum!, ¡ding!, ¡fiuuu!, ¡chof!, ¡grrr!" },
    { q: "Explica por qué vemos movimiento en el cine.", sol: "Porque pasan 24 fotogramas por segundo y el cerebro los une." },
    { q: "Haz un flipbook de 12 páginas con una pelota que bota.", sol: "Respuesta práctica." },
    { q: "Escribe tres normas para usar imágenes en redes sociales de forma responsable.", sol: "Pedir permiso, no subir datos personales, respetar los derechos de autor y comprobar antes de compartir." },
  ],
};
