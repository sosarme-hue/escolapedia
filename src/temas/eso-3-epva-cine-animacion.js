// Educación Plástica, Visual y Audiovisual 3º ESO: cine y animación. Dibujos propios en SVG.
const { F, D, mapa, C, RD, svg, t, tabla, mezcla } = require("./_eso3");

const M = "Educación Plástica, Visual y Audiovisual";

module.exports = {
  materia: M,
  curso: C,
  titulo: "La imagen en movimiento: cine y animación",
  minutos: 50,
  objetivos: ["Entender cómo se crea la ilusión de movimiento", "Conocer el lenguaje audiovisual: plano, secuencia, movimientos de cámara y montaje", "Distinguir las fases de producción de una película", "Conocer las técnicas de animación y realizar un stop motion sencillo"],
  claves: ["fotograma", "persistencia retiniana", "movimiento de cámara", "montaje", "guion técnico", "stop motion"],
  pregunta: {
    texto: "Si una película es solo una sucesión de fotos quietas, ¿por qué vemos que los personajes se mueven?",
    respuesta: "Porque el ojo y el cerebro <mark>unen las imágenes</mark> cuando pasan muy deprisa: unas 24 por segundo en el cine. Cada foto se llama <b>fotograma</b>, y cada una es un poco distinta de la anterior. El cerebro rellena los huecos y percibe un movimiento continuo.",
  },
  bloques: [
    {
      html: `<h3>La ilusión del movimiento</h3><p>El cine y la animación son una <b>ilusión</b>. Una cámara toma muchas imágenes fijas por segundo, los <b>fotogramas</b>; al proyectarlas seguidas, nuestro cerebro las percibe como movimiento continuo. Este fenómeno se relaciona con la <b>persistencia retiniana</b> y, sobre todo, con la forma en que el cerebro interpreta los cambios (el llamado <i>efecto phi</i>).</p><p>El cine tradicional usa <mark>24 fotogramas por segundo</mark> (fps); el vídeo, 25 o 30. Antes del cine existieron juguetes ópticos basados en esta idea, como el <b>taumatropo</b>, el <b>zoótropo</b> o el <b>folioscopio</b> (el cuadernillo que se pasa rápido con el pulgar).</p>`,
      svg: svg("Secuencia de cinco fotogramas de una pelota que bota; al pasarlos rápido parece moverse", `${[0, 1, 2, 3, 4].map((i) => { const y = [40, 80, 120, 80, 40][i]; return `<rect x="${16 + i * 46}" y="24" width="42" height="120" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M${16 + i * 46} 136 H ${58 + i * 46}" stroke="var(--muted)" stroke-width="1.5"/><circle cx="${37 + i * 46}" cy="${y + (i === 2 ? 7 : 0)}" r="9" fill="var(--red)"/>${t(37 + i * 46, 160, i + 1, { c: "var(--muted)", s: 11 })}`; }).join("")}${t(130, 16, "fotogramas: cada uno cambia un poco", { c: "var(--muted)", s: 11 })}${t(130, 176, "24 por segundo = movimiento", { c: "var(--pen)", s: 11 })}`),
    },
    {
      html: `<h3>Breve historia del cine</h3><ul><li><b>1895</b>: los hermanos <b>Lumière</b> proyectan en París sus primeras películas, como <i>La salida de los obreros de la fábrica</i>.</li><li><b>Georges Méliès</b> inventa los primeros trucajes y el cine de fantasía (<i>Viaje a la Luna</i>, 1902).</li><li>Años 1910-20: cine mudo, con grandes cómicos como <b>Charles Chaplin</b> y Buster Keaton.</li><li><b>1927</b>: llega el cine sonoro; más tarde, el color.</li><li>Desde finales del siglo XX: efectos digitales, animación 3D por ordenador y plataformas de vídeo.</li></ul><p>En España destacan directores como Luis Buñuel, Pedro Almodóvar o Alejandro Amenábar, y estudios de animación premiados.</p>`,
    },
    {
      html: `<h3>Las unidades del lenguaje audiovisual</h3><p>Una película se construye con piezas cada vez mayores:</p>${tabla(["Unidad", "Qué es"], [["<b>Fotograma</b>", "cada imagen fija"], ["<b>Plano</b>", "lo que se graba de forma continua, entre dos cortes"], ["<b>Escena</b>", "conjunto de planos en un mismo lugar y tiempo"], ["<b>Secuencia</b>", "conjunto de escenas que forman una unidad narrativa, como un capítulo"]])}<p>Los <b>tipos de plano</b> (general, americano, medio, primer plano, detalle) y los <b>ángulos</b> (picado, normal, contrapicado) son los mismos que en la fotografía, pero ahora se combinan en el tiempo.</p>`,
      video: { id: "CmPg9POBvV0", titulo: "Cinematografía: lenguaje audiovisual (I)", canal: "Officium", vistas: 430249, megusta: 0 },
    },
    {
      html: `<h3>Los movimientos de cámara</h3><p>La cámara también se mueve para contar la historia:</p><ul><li><b>Panorámica</b>: la cámara gira sobre su eje, sin desplazarse, de lado a lado o de arriba abajo. Sirve para describir un lugar o seguir a alguien.</li><li><b>Travelling</b>: la cámara se desplaza (sobre raíles, un coche o un estabilizador). Acompaña al personaje o se acerca a él.</li><li><b>Zoom</b>: la cámara no se mueve; el objetivo acerca o aleja la imagen.</li><li><b>Cámara al hombro</b>: movimiento inestable que da sensación de realidad o de nerviosismo.</li><li><b>Plano grúa o con dron</b>: la cámara se eleva para mostrar la escena desde arriba.</li></ul>`,
      svg: svg("Panorámica: la cámara gira sobre sí misma. Travelling: la cámara se desplaza sobre raíles", `<rect x="44" y="70" width="34" height="24" rx="5" fill="var(--pen)"/><path d="M78 76 L 88 70 V 94 L 78 88 Z" fill="var(--pen)"/><path d="M100 40 A 60 60 0 0 1 100 124" fill="none" stroke="var(--red)" stroke-width="2.5" marker-end="url(#fp)"/>
        <defs><marker id="fp" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L 10 5 L 0 10 Z" fill="var(--red)"/></marker><marker id="ft" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L 10 5 L 0 10 Z" fill="var(--leaf)"/></marker></defs>
        <path d="M150 112 H 248 M150 120 H 248" stroke="var(--muted)" stroke-width="2"/><rect x="160" y="84" width="34" height="24" rx="5" fill="var(--pen)"/><path d="M194 90 L 204 84 V 108 L 194 102 Z" fill="var(--pen)"/><path d="M160 66 H 236" stroke="var(--leaf)" stroke-width="2.5" marker-end="url(#ft)"/>
        ${t(70, 150, "panorámica", { c: "var(--red)", s: 12 })}${t(70, 166, "gira", { c: "var(--muted)", s: 10 })}${t(200, 150, "travelling", { c: "var(--leaf)", s: 12 })}${t(200, 166, "se desplaza", { c: "var(--muted)", s: 10 })}`),
      video: { id: "iN0rf5vUfxc", titulo: "15 movimientos de cámara cinematográficos", canal: "Aprendercine.com", vistas: 1051137, megusta: 0 },
    },
    {
      html: `<h3>El montaje y el sonido</h3><p>El <b>montaje</b> (o edición) consiste en seleccionar, ordenar y unir los planos. Es donde la película cobra sentido: el mismo material montado de otra forma cuenta otra historia. El cineasta ruso <b>Lev Kuleshov</b> demostró que una cara neutra parece triste, hambrienta o enamorada según el plano que le sigue (el <b>efecto Kuleshov</b>).</p><ul><li><b>Corte</b>: paso directo de un plano a otro.</li><li><b>Fundido</b>: la imagen se oscurece o aclara poco a poco; indica paso del tiempo.</li><li><b>Flashback</b>: salto al pasado.</li></ul><p>El <b>sonido</b> completa la imagen: diálogos, efectos, música y silencios. La música puede crear tensión o alegría y cambiar por completo cómo sentimos una escena.</p>`,
    },
    {
      html: `<h3>Las fases de producción</h3><ol><li><b>Preproducción</b>: idea, <b>guion literario</b> (la historia con diálogos), <b>guion técnico</b> (qué plano, ángulo y movimiento lleva cada momento) y <b>storyboard</b> (el guion técnico dibujado en viñetas). También se buscan localizaciones, actores y materiales.</li><li><b>Producción o rodaje</b>: se graban los planos, normalmente sin seguir el orden de la historia.</li><li><b>Posproducción</b>: montaje, sonido, música, efectos especiales, color y títulos de crédito.</li></ol><p>Una película es un trabajo en equipo: dirección, guion, fotografía, sonido, arte, interpretación y montaje.</p>`,
    },
    {
      html: `<h3>La animación y sus técnicas</h3><p>En la <b>animación</b> no se graba un movimiento real: se crea fotograma a fotograma.</p>${tabla(["Técnica", "Cómo se hace", "Ejemplo"], [["<b>Dibujo animado</b>", "dibujos a mano, uno por fotograma", "clásicos de Disney o Studio Ghibli"], ["<b>Stop motion</b>", "se fotografían objetos o muñecos moviéndolos un poco cada vez", "<i>Wallace y Gromit</i>, <i>Coraline</i>"], ["<b>Animación 3D</b>", "modelos digitales animados por ordenador", "<i>Toy Story</i>, la primera en 1995"], ["<b>Rotoscopia</b>", "se dibuja encima de imágenes reales grabadas", "efectos y videoclips"]])}<p>Los animadores dibujan primero los <b>fotogramas clave</b> y luego los <b>intermedios</b>.</p>`,
    },
    {
      html: `<h3>Cómo hacer un stop motion</h3><p>Con un móvil y una aplicación gratuita de stop motion puedes animar plastilina, juguetes o recortes:</p><ol><li>Escribe una historia muy corta y dibuja un <b>storyboard</b>.</li><li>Fija el móvil con un trípode o soporte: <mark>la cámara no debe moverse</mark>.</li><li>Usa luz constante (evita la luz del sol, que cambia).</li><li>Haz una foto, mueve el objeto un poco, haz otra foto… Cuanto más pequeño el movimiento, más suave.</li><li>A 12 fotos por segundo, 10 segundos de animación necesitan <b>120 fotos</b>.</li><li>Añade títulos, sonido y música en la edición.</li></ol>`,
      svg: svg("Montaje de stop motion: móvil fijo en un trípode, muñeco de plastilina y foco de luz constante", `<path d="M40 160 L 60 96 L 80 160 M60 96 V 160" stroke="var(--muted)" stroke-width="3" fill="none"/><rect x="46" y="62" width="28" height="40" rx="5" fill="var(--ink)"/><circle cx="60" cy="82" r="6" fill="var(--water)"/>
        <path d="M80 82 L 170 120" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5 4"/>
        <path d="M120 150 H 240" stroke="var(--ink)" stroke-width="3"/><ellipse cx="180" cy="136" rx="16" ry="14" fill="var(--leaf)"/><circle cx="180" cy="114" r="10" fill="var(--leaf)"/><circle cx="184" cy="112" r="2" fill="var(--ink)"/>
        <path d="M230 30 L 212 60 H 248 Z" fill="var(--sun)"/><path d="M230 60 V 100" stroke="var(--muted)" stroke-width="3"/>
        ${t(60, 50, "móvil fijo", { c: "var(--ink)", s: 11 })}${t(182, 172, "mover un poco cada foto", { c: "var(--leaf)", s: 11 })}${t(200, 22, "luz constante", { c: "var(--muted)", s: 10, a: "end" })}`),
    },
    {
      html: `<h3>Ver cine con mirada crítica</h3><p>Hoy consumimos muchísimas imágenes en movimiento: series, anuncios, vídeos cortos y videojuegos. Analizarlas ayuda a no dejarse manipular y a disfrutarlas más:</p><ul><li>¿Qué plano, ángulo y movimiento se usan, y qué transmiten?</li><li>¿Cómo influyen la música y el montaje en lo que siento?</li><li>¿Qué valores o estereotipos aparecen?</li><li>¿Es ficción, documental o publicidad?</li></ul><p>Recuerda también los <b>derechos de autor</b>: para tus vídeos, usa música e imágenes libres o propias, y cita siempre a sus autores.</p>`,
    },
  ],
  figura: {
    titulo: "Cómo se hace una película",
    svg: `<svg viewBox="0 0 640 282" role="img" aria-label="Fotograma, plano, escena y secuencia; preproducción con guion y storyboard; rodaje; posproducción con montaje y sonido; animación fotograma a fotograma">
      <rect width="640" height="282" rx="16" fill="var(--paper)"/>
      ${[["Unidades", "fotograma → plano → escena → secuencia", "var(--pen)"], ["Preproducción", "guion literario · guion técnico · storyboard", "var(--leaf)"], ["Rodaje", "planos, ángulos y movimientos de cámara", "var(--red)"], ["Posproducción", "montaje · sonido · música · efectos", "var(--inf)"], ["Animación", "fotograma a fotograma · stop motion · 3D", "var(--ink)"]].map(([n, d, c], i) => `<rect x="20" y="${14 + i * 52}" width="600" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${42 + i * 52}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="200" y="${42 + i * 52}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "XqlR2T5Ztyo", titulo: "Cómo hacer un stop motion: tutorial básico", canal: "Markez Films", vistas: 1862399, megusta: 0, busqueda: "stop motion cómo se hace" },
  quiz: mezcla([
    { q: "Cada imagen fija de una película se llama…", o: ["fotograma", "plano", "secuencia"], a: 0, e: "La unidad mínima." },
    { q: "¿Cuántos fotogramas por segundo usa el cine tradicional?", o: ["12", "24", "60"], a: 1, e: "24 fps." },
    { q: "Lo que se graba de forma continua entre dos cortes es un…", o: ["plano", "fotograma", "guion"], a: 0, e: "Unidad básica del montaje." },
    { q: "Si la cámara gira sobre su eje sin desplazarse, es una…", o: ["panorámica", "travelling", "grúa"], a: 0, e: "Gira, no se traslada." },
    { q: "Si la cámara se desplaza sobre raíles, es un…", o: ["zoom", "travelling", "picado"], a: 1, e: "Desplazamiento real." },
    { q: "En el zoom, la cámara…", o: ["se acerca andando", "no se mueve; cambia el objetivo", "gira"], a: 1, e: "Acerca la imagen óptica o digitalmente." },
    { q: "El guion dibujado en viñetas se llama…", o: ["storyboard", "claqueta", "sinopsis"], a: 0, e: "Plano a plano." },
    { q: "El montaje se realiza en la…", o: ["preproducción", "producción", "posproducción"], a: 2, e: "Tras el rodaje." },
    { q: "La técnica que fotografía muñecos moviéndolos poco a poco es…", o: ["rotoscopia", "stop motion", "3D"], a: 1, e: "Fotograma a fotograma." },
    { q: "Los primeros en proyectar películas al público, en 1895, fueron…", o: ["los hermanos Lumière", "Méliès", "Chaplin"], a: 0, e: "En París." },
  ]),
  examen: mezcla([
    { q: "El efecto Kuleshov demuestra la importancia del…", o: ["montaje", "color", "zoom"], a: 0, e: "El orden de los planos crea significado." },
    { q: "Para 8 segundos de stop motion a 12 fps necesitas…", o: ["96 fotos", "20 fotos", "48 fotos"], a: 0, e: "8 · 12 = 96." },
    { q: "Un conjunto de planos en un mismo lugar y tiempo es una…", o: ["escena", "secuencia", "toma"], a: 0, e: "Varias escenas forman una secuencia." },
  ]),
  feynman: ["Por qué percibimos movimiento en una sucesión de imágenes fijas", "En qué se diferencian panorámica, travelling y zoom", "Qué se hace en cada fase de producción", "Cómo se hace un stop motion"],
  mapa: mapa("CINE", "var(--eso)", [
    ["Ilusión", "24 fotogramas/s", "var(--pen)"],
    ["Lenguaje", "plano · movimiento", "var(--leaf)"],
    ["Montaje", "corte · fundido", "var(--red)"],
    ["Animación", "stop motion · 3D", "var(--inf)"],
  ], 230),
  tarjetas: [
    ["Fotograma", "Cada imagen fija de una película."],
    ["24 fps", "Velocidad del cine tradicional."],
    ["Plano (cine)", "Lo grabado de forma continua entre dos cortes."],
    ["Panorámica", "La cámara gira sobre su eje sin desplazarse."],
    ["Travelling", "La cámara se desplaza físicamente."],
    ["Montaje", "Seleccionar, ordenar y unir los planos."],
    ["Storyboard", "El guion técnico dibujado en viñetas."],
    ["Stop motion", "Animación fotografiando objetos que se mueven poco a poco."],
  ],
  familias: ["Ved juntos una escena de película y contad los cortes que hay en un minuto.", "Haced un folioscopio en una libreta vieja dibujando una pelota que bota.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Lenguaje audiovisual: fotograma, plano, escena y secuencia; movimientos de cámara; montaje y sonido; fases de producción; historia del cine; técnicas de animación (RD 217/2022, Educación Plástica, Visual y Audiovisual).",
    ideas: ["Construir un zoótropo de cartulina con tiras de 12 dibujos.", "Rodar en grupo un cortometraje de un minuto con storyboard previo.", "Proyectar el mismo plano con dos músicas y debatir el efecto."],
  },
  fuentes: [RD, { t: "Filmoteca Española: historia y patrimonio del cine", url: "https://www.cultura.gob.es/cultura/areas/cine/mc/fe/portada.html" }],
  revisado: "2026-11-12",
  ejemplosTitulo: "Análisis guiados",
  ejemplos: [
    { enunciado: "Calcula cuántas fotos necesitas para un stop motion de 15 segundos a 10 fps.",
      pasos: ["Fotos = segundos · fotogramas por segundo.", "15 · 10 = 150."],
      resultado: "150 fotos (puedes repetir alguna para las pausas)." },
    { enunciado: "Escribe el guion técnico de tres planos para una escena en la que una chica encuentra una carta.",
      pasos: ["Plano 1: plano general, ángulo normal; ella entra en la habitación.", "Plano 2: plano detalle de la carta sobre la mesa.", "Plano 3: primer plano de su cara sorprendida; zoom lento de acercamiento.", "Sonido: silencio y una nota de música al ver la carta."],
      resultado: "Una secuencia breve que crea intriga." },
    { enunciado: "Explica qué movimiento de cámara usarías para seguir a un ciclista por una carretera.",
      pasos: ["La cámara debe acompañar su desplazamiento.", "Una panorámica solo giraría y lo perdería.", "Un travelling lateral (desde un coche) lo mantiene en el encuadre."],
      resultado: "Travelling de acompañamiento." },
  ],
  errores: [
    "Confundir plano (cine) con fotograma.",
    "Llamar travelling a una panorámica: en la panorámica la cámara no se desplaza.",
    "Confundir el zoom con un acercamiento de la cámara.",
    "En stop motion, mover la cámara o cambiar la luz entre fotos.",
    "Rodar sin storyboard y descubrir en el montaje que faltan planos.",
    "Usar música con derechos de autor sin permiso en un vídeo publicado.",
  ],
  ejercicios: [
    { q: "Ordena de menor a mayor: escena, fotograma, secuencia, plano.", sol: "Fotograma, plano, escena, secuencia." },
    { q: "¿Cuántos fotogramas tiene una película de 90 minutos a 24 fps?", sol: "90 · 60 · 24 = 129.600 fotogramas." },
    { q: "Explica la diferencia entre guion literario y guion técnico.", sol: "El literario cuenta la historia y los diálogos; el técnico detalla plano, ángulo, movimiento y sonido de cada toma." },
    { q: "¿Qué movimiento de cámara describe un paisaje de izquierda a derecha sin moverse del sitio?", sol: "Una panorámica horizontal." },
    { q: "¿Para qué sirve un fundido a negro?", sol: "Para indicar paso del tiempo o el final de una secuencia." },
    { q: "Nombra cuatro técnicas de animación con un ejemplo.", sol: "Dibujo animado (clásicos de Disney), stop motion (Wallace y Gromit), 3D (Toy Story), rotoscopia (videoclips)." },
    { q: "¿Por qué hay que fijar el móvil en un stop motion?", sol: "Porque si la cámara se mueve, el fondo salta entre fotos y se pierde la ilusión de movimiento." },
    { q: "¿Qué diferencia hay entre un fotograma clave y uno intermedio?", sol: "El clave marca las posiciones principales del movimiento; los intermedios rellenan el paso entre ellos." },
    { q: "Dibuja un folioscopio de 12 páginas con una pelota que bota.", sol: "Respuesta gráfica: la pelota baja, se aplasta al tocar el suelo y vuelve a subir." },
    { q: "Elabora el storyboard de un anuncio de 20 segundos con al menos cinco planos distintos.", sol: "Respuesta abierta. Se valora la variedad de planos y ángulos y la claridad de la historia." },
  ],
};
