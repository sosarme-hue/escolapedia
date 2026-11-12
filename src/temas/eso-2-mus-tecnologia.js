// Música 2º ESO: música y tecnología. Dibujos propios en SVG.
const { mapa, C, RD, REV, svg, t, tabla, filas, mezcla } = require("./_eso2c");

module.exports = {
  materia: "Música",
  curso: C,
  titulo: "Música y tecnología",
  minutos: 50,
  objetivos: ["Conocer la historia de la grabación y la reproducción del sonido", "Diferenciar el sonido analógico y el digital y los formatos de audio", "Explicar qué son el MIDI, los secuenciadores y las estaciones de trabajo de audio (DAW)", "Usar herramientas digitales para crear música respetando los derechos de autor"],
  claves: ["grabación", "analógico", "digital", "MIDI", "DAW", "derechos de autor"],
  pregunta: {
    texto: "Hace 150 años, para escuchar música había que estar delante de los músicos. ¿Qué cambió eso?",
    respuesta: "La <b>grabación del sonido</b>. En <mark>1877</mark> Thomas Edison presentó el <b>fonógrafo</b>, que grababa y reproducía el sonido en un cilindro. Desde entonces la música se puede guardar, repetir, transportar y, hoy, llevar miles de canciones en el bolsillo. La tecnología también ha cambiado cómo se <b>crea</b> la música.",
  },
  bloques: [
    {
      html: `<h3>Historia de la grabación</h3><ul><li><b>1877</b>: <b>fonógrafo</b> de Edison, con cilindros.</li><li><b>1887</b>: <b>gramófono</b> de Berliner, con discos planos, más fáciles de copiar.</li><li><b>Años 20</b>: llegan el <b>micrófono</b> eléctrico y la <b>radio</b>.</li><li><b>Años 40-50</b>: <b>cinta magnética</b> y disco de <b>vinilo</b> (single y LP).</li><li><b>Años 60-80</b>: estéreo, <b>casete</b> y walkman (1979): la música se vuelve portátil.</li><li><b>1982</b>: <b>CD</b>, el primer formato digital doméstico.</li><li><b>Años 90-2000</b>: <b>MP3</b> e internet; reproductores digitales.</li><li><b>Desde 2008</b>: <b>streaming</b> (escuchar sin descargar), hoy la forma principal de escuchar música.</li></ul>`,
      svg: svg("Línea del tiempo de soportes: fonógrafo 1877, vinilo 1948, casete 1963, CD 1982, MP3 1995 y streaming 2008", `<path d="M16 96 H 244" stroke="var(--muted)" stroke-width="3"/>${[[1877, "fonógrafo", "var(--sun)"], [1948, "vinilo", "var(--red)"], [1963, "casete", "var(--leaf)"], [1982, "CD", "var(--pen)"], [1995, "MP3", "var(--inf)"], [2008, "streaming", "var(--ink)"]].map(([a, n, c], i) => { const x = 28 + i * 41, up = i % 2 === 0; return `<circle cx="${x}" cy="96" r="6" fill="${c}"/><path d="M${x} ${up ? 90 : 102} V ${up ? 66 : 126}" stroke="${c}" stroke-width="1.5"/>${t(x, up ? 46 : 142, String(a), { c, s: 11 })}${t(x, up ? 60 : 156, n, { s: 10 })}`; }).join("")}`),
      video: { id: "317zTd6QqaI", titulo: "Del fonoautógrafo a Spotify: historia de los dispositivos de audio", canal: "LG7 multimedia", vistas: 111508 },
    },
    {
      html: `<h3>Sonido analógico y sonido digital</h3><ul><li><b>Analógico</b>: se graba una copia <b>continua</b> de la onda sonora, como el surco de un vinilo o la magnetización de una cinta. Cada copia pierde un poco de calidad y aparece ruido.</li><li><b>Digital</b>: la onda se mide muchas veces por segundo (<b>muestreo</b>) y cada medida se guarda como un <b>número</b> (bits). El CD toma <mark>44.100 muestras por segundo</mark>. Las copias son idénticas al original.</li></ul><p>El paso de uno a otro lo hace un <b>convertidor</b>: el micrófono capta la vibración, la tarjeta de sonido la convierte en números (A/D), y al escuchar se vuelve a convertir en señal eléctrica (D/A) que mueve el altavoz.</p>`,
      svg: svg("Onda continua analógica y la misma onda convertida en escalones digitales por muestreo", `<path d="${[...Array(121)].map((_, i) => `${i ? "L" : "M"}${20 + i * 1.8} ${(70 - 30 * Math.sin((i / 120) * 2 * Math.PI * 1.5)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
        ${[...Array(19)].map((_, i) => { const y = 70 - 30 * Math.sin(((i * 6.66) / 120) * 2 * Math.PI * 1.5); return `<rect x="${(20 + i * 12).toFixed(1)}" y="${Math.min(y, 70).toFixed(1)}" width="10" height="${Math.abs(70 - y).toFixed(1)}" fill="var(--leaf)" fill-opacity=".35" stroke="var(--leaf)" stroke-width="1"/>`; }).join("")}
        <path d="M16 70 H 244" stroke="var(--muted)" stroke-width="1"/>${t(130, 130, "analógico: onda continua", { c: "var(--pen)", s: 12 })}${t(130, 150, "digital: muestras (números)", { c: "var(--leaf)", s: 12 })}`),
    },
    {
      html: `<h3>Formatos de audio</h3>${tabla(["Formato", "Tipo", "Características"], [["WAV / AIFF", "sin compresión", "máxima calidad, archivos muy grandes (unos 10 MB por minuto)"], ["FLAC", "compresión sin pérdida", "calidad idéntica, ocupa la mitad"], ["MP3 / AAC / OGG", "compresión con pérdida", "elimina sonidos poco audibles; ocupa unas 10 veces menos"]])}<p>La calidad de un archivo comprimido se indica con su <b>tasa de bits</b> (kbps): 128 kbps es calidad aceptable; 320 kbps, alta. Las plataformas de streaming ajustan la calidad según la conexión.</p>`,
    },
    {
      html: `<h3>El estudio de grabación</h3><p>En un estudio se graban, mezclan y masterizan las canciones. Elementos principales:</p><ul><li><b>Micrófonos</b>: dinámicos (resistentes, para voces en directo y baterías) o de condensador (más sensibles, para estudio).</li><li><b>Mesa de mezclas</b>: ajusta el volumen, la ecualización (graves, medios, agudos), la panorámica (izquierda-derecha) y los efectos de cada pista.</li><li><b>Efectos</b>: reverberación (sensación de sala), eco, compresión, autotune (corrige la afinación).</li><li><b>Monitores</b> y <b>auriculares</b> para escuchar con fidelidad.</li></ul><p>El proceso tiene tres fases: <b>grabación</b> (cada instrumento en su pista), <b>mezcla</b> (equilibrar todas las pistas) y <b>masterización</b> (dar el acabado final para su publicación).</p>`,
      video: { id: "BacNrKKPMsE", titulo: "Aprendemos a grabar una canción desde cero", canal: "Jaime Altozano", vistas: 4034537 },
    },
    {
      html: `<h3>MIDI: música como instrucciones</h3><p>El <b>MIDI</b> (Musical Instrument Digital Interface, 1983) es un <b>lenguaje</b> que permite que instrumentos electrónicos y ordenadores se comuniquen. Un archivo MIDI <mark>no contiene sonido</mark>, sino <b>instrucciones</b>: qué nota, cuándo empieza, cuánto dura y con qué fuerza se toca.</p><p>Por eso un mismo archivo MIDI puede sonar a piano, a violín o a sintetizador según el instrumento virtual que lo lea, y ocupa muy poco. Un <b>teclado controlador MIDI</b> no suena solo: envía las notas al ordenador.</p>`,
      svg: svg("Un teclado MIDI envía instrucciones al ordenador, que produce sonido de piano, violín o batería", `<rect x="16" y="70" width="80" height="36" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${[...Array(7)].map((_, i) => `<path d="M${27 + i * 11} 70 V 106" stroke="var(--ink)" stroke-width="1"/>`).join("")}<path d="M96 88 H 140" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="5 3"/><rect x="140" y="62" width="56" height="40" rx="4" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><path d="M160 102 v 8 h 16 v -8" stroke="var(--pen)" stroke-width="2" fill="none"/>
        ${t(118, 80, "MIDI", { c: "var(--pen)", s: 11 })}${t(56, 124, "teclado controlador", { s: 10 })}${t(168, 86, "DAW", { c: "var(--pen)", s: 12 })}${[["piano", "var(--leaf)"], ["violín", "var(--sun)"], ["batería", "var(--red)"]].map(([n, c], i) => `<path d="M196 82 L 206 ${56 + i * 30}" stroke="${c}" stroke-width="1.5"/><rect x="206" y="${46 + i * 30}" width="48" height="22" rx="6" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2"/>${t(230, 61 + i * 30, n, { c, s: 10 })}`).join("")}${t(130, 30, "instrucciones, no sonido", { s: 12 })}`),
      video: { id: "cjmO0E0TTAE", titulo: "¿Para qué sirve un teclado MIDI y cómo se usa?", canal: "Rolando Mora", vistas: 113421 },
    },
    {
      html: `<h3>Crear música con el ordenador: la DAW</h3><p>Una <b>DAW</b> (estación de trabajo de audio digital) es un programa para grabar, editar, componer y mezclar. Hay opciones gratuitas y en línea: <b>BandLab</b>, <b>Audacity</b> (editor de audio), <b>GarageBand</b>, <b>LMMS</b> o <b>Soundtrap</b>.</p><p>Funciones básicas:</p><ul><li><b>Pistas</b> de audio (grabaciones) y de MIDI (instrumentos virtuales).</li><li><b>Secuenciador</b>: organiza las pistas en una línea de tiempo, como bloques.</li><li><b>Bucles</b> (loops): fragmentos que se repiten para crear bases.</li><li>Edición: cortar, copiar, cambiar el tempo o la tonalidad.</li><li><b>Exportar</b> la canción a MP3 o WAV.</li></ul><p>Otras herramientas útiles para estudiar música: editores de partituras (MuseScore, Flat), afinadores y metrónomos en el móvil.</p>`,
    },
    {
      html: `<h3>Música en la era de internet</h3><p>Internet ha transformado la industria musical:</p><ul><li>El <b>streaming</b> ha sustituido a la compra de discos. Los artistas cobran una pequeña cantidad por cada escucha.</li><li>Los <b>algoritmos</b> recomiendan canciones según lo que escuchas: conviene buscar también música nueva por tu cuenta para no escuchar siempre lo mismo.</li><li>Las <b>redes sociales</b> pueden hacer viral una canción en días.</li><li>Cualquiera puede <b>publicar</b> su música desde casa.</li></ul><p>La música también acompaña a los <b>videojuegos</b>, el cine y la publicidad. En los videojuegos la música suele ser <b>adaptativa</b>: cambia según lo que ocurre en la partida.</p>`,
    },
    {
      html: `<h3>Derechos de autor y licencias</h3><p>Las canciones están protegidas por los <b>derechos de autor</b>: no se pueden copiar, distribuir ni usar en un vídeo público sin permiso. En España los gestiona sobre todo la <b>SGAE</b>.</p><p>Para tus proyectos (vídeos de clase, podcasts) usa:</p><ul><li>Música con licencia <b>Creative Commons</b>, respetando sus condiciones (por ejemplo, citar al autor: «CC BY»).</li><li>Bibliotecas de música <b>libre de derechos</b> o de <b>dominio público</b> (en España, en general, 70 años después de la muerte del autor; 80 si murió antes de diciembre de 1987).</li><li>Música <b>creada por ti</b>.</li></ul><p>Descargar música de webs no autorizadas perjudica a los artistas y puede traer virus.</p>`,
    },
  ],
  figura: {
    titulo: "Música y tecnología en un vistazo",
    svg: filas("Resumen: historia de la grabación; analógico y digital; formatos de audio; estudio de grabación; MIDI; DAW; derechos de autor", [["Grabación", "fonógrafo 1877 → vinilo → CD → streaming", "var(--sun)"], ["Digital", "muestreo: 44.100 muestras por segundo", "var(--pen)"], ["Formatos", "WAV · FLAC · MP3", "var(--leaf)"], ["MIDI", "instrucciones, no sonido", "var(--red)"], ["DAW", "pistas · bucles · mezcla · exportar", "var(--inf)"], ["Derechos", "permiso · Creative Commons · SGAE", "var(--ink)"]], 180),
  },
  video: { id: "uipy4Dx_Yd8", titulo: "¿Cómo ha cambiado la tecnología el camino de la música?", canal: "Zares", vistas: 34116, megusta: 0, busqueda: "música y tecnología grabación" },
  quiz: mezcla([
    { q: "El fonógrafo lo presentó…", o: ["Edison", "Berliner", "Mozart"], a: 0, e: "1877." },
    { q: "El primer formato digital doméstico fue el…", o: ["CD", "vinilo", "casete"], a: 0, e: "1982." },
    { q: "En el sonido digital la onda se guarda como…", o: ["números", "un surco", "cinta magnética"], a: 0, e: "Muestreo." },
    { q: "El MP3 es un formato…", o: ["comprimido con pérdida", "sin compresión", "analógico"], a: 0, e: "Elimina información." },
    { q: "Un archivo MIDI contiene…", o: ["instrucciones", "una grabación de sonido", "una partitura en papel"], a: 0, e: "Nota, duración, fuerza." },
    { q: "DAW significa…", o: ["estación de trabajo de audio digital", "disco analógico de vinilo", "directo al walkman"], a: 0, e: "Programa para hacer música." },
    { q: "La fase que equilibra todas las pistas es la…", o: ["mezcla", "grabación", "composición"], a: 0, e: "Antes del máster." },
    { q: "La reverberación da sensación de…", o: ["sala o espacio", "más agudo", "más rápido"], a: 0, e: "Efecto." },
    { q: "Para usar música en un vídeo público conviene…", o: ["usar licencias Creative Commons", "descargar cualquier canción", "bajar el volumen"], a: 0, e: "Respetar los derechos." },
    { q: "El streaming permite…", o: ["escuchar sin descargar", "grabar en vinilo", "tocar sin instrumento"], a: 0, e: "Desde 2008 aprox." },
  ]),
  examen: mezcla([
    { q: "El CD toma … muestras por segundo", o: ["44.100", "1.000", "128"], a: 0, e: "44,1 kHz." },
    { q: "Un teclado controlador MIDI…", o: ["envía notas al ordenador", "suena solo por altavoces", "graba voz"], a: 0, e: "No genera sonido." },
    { q: "Las copias digitales…", o: ["son idénticas al original", "pierden calidad cada vez", "no se pueden hacer"], a: 0, e: "Son números." },
  ]),
  feynman: ["Cómo ha cambiado la manera de escuchar música desde 1877", "Diferencia entre sonido analógico y digital", "Por qué un MP3 ocupa menos que un WAV", "Qué es el MIDI y por qué no contiene sonido", "Cómo usar música en un vídeo sin infringir derechos"],
  mapa: mapa("MÚSICA Y TECNOLOGÍA", "var(--eso)", [
    ["Grabación", "fonógrafo → streaming", "var(--sun)"],
    ["Digital", "muestreo · formatos", "var(--pen)"],
    ["Crear", "MIDI · DAW · bucles", "var(--red)"],
    ["Derechos", "licencias · SGAE", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["Fonógrafo", "Primer aparato para grabar y reproducir sonido (Edison, 1877)."],
    ["Analógico", "Copia continua de la onda: vinilo, cinta."],
    ["Digital", "La onda se guarda como números (muestreo)."],
    ["MP3", "Formato comprimido con pérdida."],
    ["MIDI", "Lenguaje de instrucciones entre instrumentos y ordenadores."],
    ["DAW", "Programa para grabar, editar y mezclar música."],
    ["Mezcla", "Equilibrar volumen, ecualización y efectos de las pistas."],
    ["Creative Commons", "Licencias que permiten usar obras con condiciones."],
  ],
  familias: ["Buscad en casa aparatos antiguos (tocadiscos, casetes) y comparadlos con el móvil.", "Cread juntos una base sencilla con una app gratuita de música.", "Repasad las tarjetas dos minutos al día."],
  profesores: {
    saberes: "Tecnologías de grabación y reproducción; sonido analógico y digital; formatos de audio; MIDI y DAW; creación musical con herramientas digitales; derechos de autor y licencias (RD 217/2022, Música, creación e interpretación con tecnología).",
    ideas: ["Crear una canción de 16 compases en BandLab con bucles y una pista grabada.", "Podcast de clase con sintonía propia y música Creative Commons.", "Comparar la misma canción en WAV y MP3 de baja calidad."],
  },
  fuentes: [RD, { t: "Creative Commons España: licencias", url: "https://creativecommons.org/licenses/?lang=es" }],
  revisado: REV,
  ejemplosTitulo: "Casos resueltos",
  ejemplos: [
    { enunciado: "Una canción de 4 minutos en WAV ocupa unos 40 MB. ¿Cuánto ocuparía aproximadamente en MP3?", pasos: ["El MP3 ocupa unas 10 veces menos.", "40 MB : 10.", "≈ 4 MB."], resultado: "Unos 4 MB." },
    { enunciado: "Grabas una melodía con un teclado MIDI y quieres que suene a flauta. ¿Qué haces?", pasos: ["La pista MIDI guarda las notas, no el sonido.", "Se cambia el instrumento virtual de la pista.", "Se elige un sonido de flauta."], resultado: "Cambiar el instrumento virtual: las notas se mantienen." },
    { enunciado: "Quieres poner música a un vídeo del instituto que se publicará en internet. ¿Qué opciones tienes?", pasos: ["No usar canciones comerciales sin permiso.", "Buscar música con licencia Creative Commons o libre de derechos.", "Citar al autor o crear tu propia música."], resultado: "Música CC citando al autor, de dominio público o propia." },
  ],
  errores: [
    "Pensar que un archivo MIDI es una grabación de audio.",
    "Creer que el MP3 tiene la misma calidad que un WAV.",
    "Usar cualquier canción en un vídeo público porque «está en internet».",
    "Confundir mezcla (equilibrar pistas) con masterización (acabado final).",
    "Pensar que la tecnología solo sirve para escuchar y no para crear.",
  ],
  ejercicios: [
    { q: "Ordena cronológicamente: CD, fonógrafo, streaming, casete, vinilo.", sol: "Fonógrafo, vinilo, casete, CD, streaming." },
    { q: "Explica qué es el muestreo.", sol: "Medir la onda sonora muchas veces por segundo y guardar cada medida como un número." },
    { q: "¿Por qué las copias de un vinilo pierden calidad y las de un archivo digital no?", sol: "Porque el analógico copia una señal continua con ruido; el digital copia números exactos." },
    { q: "Di qué formato elegirías para guardar una grabación sin perder nada y para escucharla en el móvil.", sol: "WAV o FLAC; MP3 o AAC." },
    { q: "Nombra tres elementos de un estudio de grabación.", sol: "Micrófonos, mesa de mezclas, monitores (o efectos, auriculares)." },
    { q: "¿Qué ventaja tiene el MIDI frente al audio?", sol: "Ocupa poco y permite cambiar instrumento, tempo o notas fácilmente." },
    { q: "Nombra dos programas gratuitos para hacer música.", sol: "BandLab, Audacity, LMMS, GarageBand (en Apple), MuseScore para partituras." },
    { q: "¿Qué es un bucle o loop?", sol: "Un fragmento musical que se repite para crear una base." },
    { q: "¿Qué significa la licencia CC BY?", sol: "Que se puede usar la obra citando al autor." },
    { q: "Crea en una DAW una base de 8 compases con batería, bajo y acordes y expórtala.", sol: "Respuesta abierta." },
  ],
};
