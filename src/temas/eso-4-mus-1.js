// Música 4º ESO (1 de 2). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

const M = "Música";
const C = "4-eso";
const BG = `<rect width="260" height="180" rx="14" fill="var(--paper)"/>`;
const RD = { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" };
const filas = (aria, rows) => `<svg viewBox="0 0 640 ${rows.length * 50 + 20}" role="img" aria-label="${aria}">
  <rect width="640" height="${rows.length * 50 + 20}" rx="16" fill="var(--paper)"/>
  ${rows.map(([n, d, c], i) => `<rect x="20" y="${12 + i * 50}" width="600" height="42" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="40" y="${39 + i * 50}" font-size="17" font-weight="700" fill="${c}" ${D}>${n}</text><text x="250" y="${39 + i * 50}" font-size="15" fill="var(--ink)" ${F}>${d}</text>`).join("")}
</svg>`;
const chips = (rows) => rows.map(([n, d, c], i) => `<rect x="14" y="${16 + i * 52}" width="232" height="44" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="26" y="${36 + i * 52}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="26" y="${52 + i * 52}" font-size="12" fill="var(--ink)" ${F}>${d}</text>`).join("");
// Línea de tiempo: [año, etiqueta, color]
const linea = (aria, hitos, desde, hasta) => `<svg viewBox="0 0 260 180" role="img" aria-label="${aria}">${BG}
  <path d="M16 96 H 244" stroke="var(--muted)" stroke-width="3"/>
  ${hitos.map(([a, t, c], i) => { const x = 20 + ((a - desde) / (hasta - desde)) * 220; const arriba = i % 2 === 0; return `<circle cx="${x.toFixed(1)}" cy="96" r="6" fill="${c}"/><path d="M${x.toFixed(1)} ${arriba ? 90 : 102} V ${arriba ? 62 : 130}" stroke="${c}" stroke-width="1.5"/><text x="${x.toFixed(1)}" y="${arriba ? 40 : 146}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${a}</text><text x="${x.toFixed(1)}" y="${arriba ? 56 : 162}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`; }).join("")}
</svg>`;

module.exports = [
  {
    materia: M, curso: C, titulo: "La música en los medios de comunicación", minutos: 35,
    objetivos: ["Conocer cómo los medios han cambiado la forma de escuchar música", "Analizar el papel de la radio, la televisión, internet y las plataformas de streaming", "Escuchar de forma crítica y respetar los derechos de autor"],
    claves: ["fonógrafo", "radio", "videoclip", "streaming", "algoritmo", "derechos de autor"],
    pregunta: {
      texto: "Hace 150 años, para escuchar música había que estar delante de quien tocaba. ¿Qué invento lo cambió todo?",
      respuesta: "El <mark>fonógrafo</mark> de <b>Edison</b> (1877), que grababa y reproducía sonido. Después llegaron el disco, la radio, la televisión, el casete, el CD, el MP3 y el <b>streaming</b>. Hoy llevamos millones de canciones en el bolsillo.",
    },
    bloques: [
      {
        html: `<h3>De la grabación al bolsillo</h3><p>La forma de escuchar música ha cambiado con cada invento: <b>fonógrafo</b> (1877), <b>disco de vinilo</b>, <b>casete</b> (1963), <b>CD</b> (1982), <b>MP3</b> (años 90) y <b>streaming</b> (Spotify, 2008). Cada cambio hizo la música <mark>más accesible</mark> y transformó la industria.</p>`,
        svg: linea("Línea de tiempo de los soportes musicales: fonógrafo 1877, radio 1920, casete 1963, CD 1982, MP3 1995 y streaming 2008", [[1877, "fonógrafo", "var(--hl-ink)"], [1920, "radio", "var(--red)"], [1963, "casete", "var(--pen)"], [1982, "CD", "var(--inf)"], [1995, "MP3", "var(--leaf)"], [2008, "streaming", "var(--ink)"]], 1870, 2015),
      },
      {
        html: `<h3>La radio</h3><p>Desde los años 20, la radio llevó la música a todos los hogares. Creó las <b>listas de éxitos</b> y la figura del <b>DJ</b> que elige y presenta canciones. Hoy sigue siendo un medio muy escuchado, y los <mark>podcasts</mark> son su versión a la carta. La radio también usa la música como <b>sintonía</b> y <b>cortina</b> entre secciones.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Radio antigua emitiendo ondas hacia varias casas">${BG}
          <rect x="30" y="60" width="90" height="70" rx="12" fill="var(--hl-ink)" fill-opacity=".8"/><circle cx="60" cy="95" r="20" fill="var(--card)" fill-opacity=".6"/><rect x="88" y="78" width="22" height="8" rx="3" fill="var(--card)"/><rect x="88" y="94" width="22" height="8" rx="3" fill="var(--card)"/><path d="M50 60 L 70 40" stroke="var(--ink)" stroke-width="2"/>
          ${[1, 2, 3].map((i) => `<path d="M${124 + i * 12} ${95 - i * 12} Q ${134 + i * 14} 95 ${124 + i * 12} ${95 + i * 12}" fill="none" stroke="var(--red)" stroke-width="2.5"/>`).join("")}
          ${[[200, 50], [220, 100], [196, 140]].map(([x, y]) => `<path d="M${x - 14} ${y + 10} V ${y - 4} L ${x} ${y - 16} L ${x + 14} ${y - 4} V ${y + 10} Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>`).join("")}
          <text x="75" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>años 20: radio</text></svg>`,
      },
      {
        html: `<h3>La televisión y el videoclip</h3><p>La televisión unió <b>música e imagen</b>: actuaciones en directo, concursos y festivales como <b>Eurovisión</b> (desde 1956). En 1981 nació la cadena MTV y el <mark>videoclip</mark> se convirtió en una forma de arte y de promoción. La primera canción que emitió fue, precisamente, «Video Killed the Radio Star».</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Televisor antiguo con una cantante en pantalla y notas musicales">${BG}
          <rect x="50" y="40" width="160" height="110" rx="14" fill="var(--ink)"/><rect x="62" y="52" width="136" height="86" rx="8" fill="var(--pen)" fill-opacity=".4"/>
          <path d="M100 30 L 120 40 M160 30 L 140 40" stroke="var(--ink)" stroke-width="3"/>
          <circle cx="130" cy="80" r="12" fill="var(--hl)"/><path d="M130 92 V 124 M130 100 L 116 112 M130 100 L 144 90" stroke="var(--hl)" stroke-width="5" stroke-linecap="round"/><circle cx="148" cy="86" r="4" fill="var(--ink)"/>
          <text x="84" y="76" font-size="18" fill="var(--hl)" ${F}>♪</text><text x="170" y="120" font-size="18" fill="var(--hl)" ${F}>♫</text>
          <text x="130" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>1981: nace el videoclip en TV (MTV)</text></svg>`,
      },
      {
        html: `<h3>Streaming, redes y algoritmos</h3><p>Hoy la mayoría de la música se escucha en <b>plataformas de streaming</b> y redes sociales. Sus <b>algoritmos</b> recomiendan canciones según lo que ya escuchas: es cómodo, pero puede encerrarte en una <mark>burbuja</mark> de gustos. Las redes de vídeos cortos hacen virales fragmentos de 15 segundos, y eso influye en cómo se componen las canciones.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Burbuja de recomendaciones: el algoritmo te propone canciones parecidas a las que ya escuchas">${BG}
          <circle cx="130" cy="90" r="64" fill="var(--pen)" fill-opacity=".1" stroke="var(--pen)" stroke-width="2.5" stroke-dasharray="6 4"/>
          <circle cx="130" cy="90" r="14" fill="var(--pen)"/><text x="130" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="var(--card)" ${F}>tú</text>
          ${[0, 1, 2, 3, 4, 5].map((i) => { const a = i * 1.047; return `<text x="${(130 + 40 * Math.cos(a)).toFixed(1)}" y="${(96 + 40 * Math.sin(a)).toFixed(1)}" text-anchor="middle" font-size="16" fill="var(--pen)" ${F}>♪</text>`; }).join("")}
          ${[[24, 30], [236, 40], [30, 160], [232, 150]].map(([x, y]) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="16" fill="var(--muted)" ${F}>♫</text>`).join("")}
          <text x="130" y="172" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>la burbuja del algoritmo</text></svg>`,
      },
      {
        html: `<h3>Derechos de autor y consumo responsable</h3><p>Las canciones tienen <b>derechos de autor</b>: quien compone, interpreta y produce debe cobrar cuando se usa su música. En streaming, un artista cobra <mark>fracciones de céntimo</mark> por reproducción, por eso los conciertos y la venta directa son importantes. Para tus vídeos, usa música con licencia libre o bancos de sonido gratuitos.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Quién cobra por una canción: autor, intérprete y productor; y opciones para usar música en tus vídeos">${BG}${chips([["Autoría", "compositor y letrista", "var(--red)"], ["Interpretación y producción", "artista, músicos, sello", "var(--pen)"], ["En tus vídeos", "música libre o con licencia", "var(--leaf)"]])}</svg>`,
      },
    ],
    figura: { titulo: "Cómo hemos escuchado música", svg: filas("Soportes y medios de la música en el último siglo", [["Grabación", "fonógrafo · vinilo · casete · CD", "var(--hl-ink)"], ["Radio", "listas de éxitos · DJ · podcast", "var(--red)"], ["Televisión", "actuaciones · Eurovisión · videoclip", "var(--pen)"], ["Internet", "MP3 · streaming · redes · algoritmos", "var(--leaf)"]]) },
    video: { id: "g7XtA9Ew7z0", titulo: "Historia de la radio", canal: "TeoCom", vistas: 113427, megusta: 0, busqueda: "historia de la radio" },
    quiz: [
      { q: "¿Quién inventó el fonógrafo en 1877?", o: ["Edison", "Marconi", "Bell"], a: 0, e: "Primer aparato que grababa y reproducía sonido." },
      { q: "El videoclip se popularizó con la cadena MTV en…", o: ["1951", "1981", "2011"], a: 1, e: "Su primera emisión fue en 1981." },
      { q: "¿Qué recomienda canciones parecidas a las que ya escuchas?", o: ["El algoritmo", "El DJ de la radio", "El casete"], a: 0, e: "En plataformas y redes." },
      { q: "La versión a la carta de la radio es…", o: ["el podcast", "el vinilo", "el videoclip"], a: 0, e: "Se escucha cuando quieres." },
      { q: "En streaming, por cada reproducción un artista cobra…", o: ["varios euros", "fracciones de céntimo", "nada nunca"], a: 1, e: "Por eso importan los conciertos." },
    ],
    examen: [
      { q: "Eurovisión se celebra desde…", o: ["1956", "1990", "2005"], a: 0, e: "Es uno de los programas más antiguos." },
      { q: "¿Qué soporte apareció en 1982?", o: ["Casete", "CD", "MP3"], a: 1, e: "El disco compacto." },
      { q: "Para poner música en un vídeo que vas a publicar debes…", o: ["usar música libre o con licencia", "usar cualquier canción", "cambiarle el nombre"], a: 0, e: "Por los derechos de autor." },
    ],
    feynman: ["Cómo ha cambiado la forma de escuchar música desde el fonógrafo", "Qué aportó la radio a la música", "Qué es un videoclip y por qué fue importante", "Qué es la burbuja del algoritmo"],
    mapa: mapa("MÚSICA Y MEDIOS", "var(--bac)", [["Soportes", "fonógrafo · vinilo · CD · MP3", "var(--hl-ink)"], ["Radio y TV", "listas · videoclip · Eurovisión", "var(--red)"], ["Internet", "streaming · redes · algoritmos", "var(--pen)"], ["Derechos", "autoría · licencias", "var(--leaf)"]], 250),
    tarjetas: [["Fonógrafo", "Invento de Edison (1877) para grabar y reproducir sonido."], ["Videoclip", "Vídeo promocional de una canción; se popularizó con MTV (1981)."], ["Streaming", "Escuchar música por internet sin descargarla."], ["Algoritmo de recomendación", "Programa que sugiere canciones según lo que escuchas."], ["Derechos de autor", "Lo que protege y remunera a quien crea la música."]],
    familias: ["Compartid cómo escuchabais música a su edad (casete, radio, CD…).", "Revisad juntos las estadísticas de escucha del año y comentad si hay «burbuja».", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Contextos y culturas: la música en los medios de comunicación, la industria musical, consumo responsable y propiedad intelectual (RD 217/2022, Música 4º).", ideas: ["Crear un programa de radio o podcast del aula con sintonía y cortinas.", "Comparar la estructura de una canción de los 70 y un éxito viral actual.", "Investigar cuánto cobra un artista por reproducción en distintas plataformas."] },
    fuentes: [RD, { t: "Fonógrafo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Fon%C3%B3grafo" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "La música en el cine y la publicidad", minutos: 35,
    objetivos: ["Identificar las funciones de la música en el cine", "Distinguir música diegética y extradiegética", "Analizar el uso de la música y el jingle en la publicidad"],
    claves: ["banda sonora", "diegética", "leitmotiv", "jingle", "sintonía", "efecto sonoro"],
    pregunta: {
      texto: "Dos notas graves repetidas cada vez más rápido y ya sabes que se acerca un tiburón. ¿Cómo lo hace la música?",
      respuesta: "Es el <mark>leitmotiv</mark> de <i>Tiburón</i> (John Williams, 1975): un tema asociado a un personaje. La música <b>anticipa</b> lo que va a pasar y crea tensión aunque no veamos al animal. Esa es una de sus funciones en el cine.",
    },
    bloques: [
      {
        html: `<h3>Las funciones de la música en el cine</h3><p>La música de una película puede: <b>crear ambiente</b> (época, lugar), <b>expresar emociones</b> de los personajes, <b>anticipar</b> lo que va a pasar, dar <b>ritmo</b> a la acción y <b>unir</b> escenas distintas. Una misma escena cambia por completo <mark>según la música</mark> que le pongas.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La misma escena de una puerta que se abre con música alegre o con música de terror cambia de significado">${BG}
          ${[["alegre", "var(--hl-ink)", "♪ ♫ ♪", 20], ["terror", "var(--red)", "♩ . . ♩", 140]].map(([n, c, m, x]) => `<rect x="${x}" y="30" width="100" height="80" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${x + 36}" y="46" width="28" height="64" fill="var(--muted)" fill-opacity=".3" stroke="var(--ink)" stroke-width="2"/><path d="M${x + 64} 46 L ${x + 80} 52 V 104 L ${x + 64} 110" fill="var(--ink)" fill-opacity=".2" stroke="var(--ink)" stroke-width="2"/><text x="${x + 50}" y="134" text-anchor="middle" font-size="16" fill="${c}" ${F}>${m}</text><text x="${x + 50}" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>música ${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Diegética y extradiegética</h3><p>La música <b>diegética</b> forma parte de la historia: los personajes la oyen (una radio, un músico en la calle, una fiesta). La <b>extradiegética</b> (o incidental) solo la oye el espectador: es la <mark>banda sonora</mark> que acompaña. A veces una pasa a ser la otra, y es un recurso muy expresivo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Diegética: el personaje escucha la radio dentro de la escena. Extradiegética: la música llega solo al espectador desde fuera de la pantalla">${BG}
          <rect x="20" y="24" width="140" height="100" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
          <circle cx="60" cy="70" r="10" fill="var(--pen)"/><path d="M60 80 V 110" stroke="var(--pen)" stroke-width="5"/>
          <rect x="100" y="86" width="40" height="26" rx="4" fill="var(--leaf)"/><text x="120" y="80" text-anchor="middle" font-size="14" fill="var(--leaf)" ${F}>♪</text>
          <circle cx="216" cy="120" r="14" fill="var(--inf)"/><path d="M216 134 V 160" stroke="var(--inf)" stroke-width="6"/><text x="200" y="70" font-size="18" fill="var(--red)" ${F}>♫</text><path d="M196 60 Q 186 40 200 30" fill="none" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="3 3"/>
          <g ${F} font-size="11" font-weight="700"><text x="20" y="144" fill="var(--leaf)">diegética: la oye el personaje</text><text x="178" y="20" fill="var(--red)">banda sonora</text><text x="216" y="176" text-anchor="middle" fill="var(--inf)">espectador</text></g></svg>`,
      },
      {
        html: `<h3>El leitmotiv y los grandes compositores</h3><p>Un <b>leitmotiv</b> es un tema musical asociado a un personaje, un lugar o una idea, que vuelve cada vez que aparece. Grandes compositores de cine: <b>John Williams</b> (<i>Star Wars</i>, <i>Harry Potter</i>), <b>Hans Zimmer</b> (<i>El rey león</i>, <i>Interstellar</i>), <b>Ennio Morricone</b> y, en España, <b>Alberto Iglesias</b> o <b>Roque Baños</b>. Muchas bandas sonoras se tocan hoy <mark>en salas de concierto</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pentagrama con un motivo musical que se repite cada vez que aparece el personaje">${BG}
          ${[0, 1, 2, 3, 4].map((i) => `<path d="M16 ${50 + i * 10} H 244" stroke="var(--ink)" stroke-width="1"/>`).join("")}
          ${[[40, 80], [56, 80], [140, 80], [156, 80]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="4.5" fill="var(--red)" transform="rotate(-20 ${x} ${y})"/><path d="M${x + 5.5} ${y - 1} V ${y - 30}" stroke="var(--red)" stroke-width="1.6"/>`).join("")}
          ${[[86, 65], [102, 70], [116, 60], [196, 70], [212, 60], [228, 55]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="6" ry="4.5" fill="var(--ink)" transform="rotate(-20 ${x} ${y})"/><path d="M${x + 5.5} ${y - 1} V ${y - 28}" stroke="var(--ink)" stroke-width="1.6"/>`).join("")}
          <rect x="30" y="34" width="36" height="70" rx="6" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/><rect x="130" y="34" width="36" height="70" rx="6" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="130" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="var(--red)" ${F}>el mismo motivo vuelve: leitmotiv</text></svg>`,
      },
      {
        html: `<h3>Música y publicidad</h3><p>En publicidad, la música busca que <mark>recuerdes la marca</mark>. Recursos: el <b>jingle</b> (melodía corta y pegadiza con el nombre del producto), la <b>sintonía</b> o logo sonoro (unas pocas notas que identifican a una marca), y las <b>canciones conocidas</b> que asocian el producto a una emoción o a una época.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres recursos musicales de la publicidad: jingle, logo sonoro y canción conocida">${BG}${chips([["Jingle", "melodía pegadiza con el nombre", "var(--red)"], ["Logo sonoro", "3–5 notas que identifican la marca", "var(--pen)"], ["Canción conocida", "asocia el producto a una emoción", "var(--leaf)"]])}</svg>`,
      },
      {
        html: `<h3>Escucha crítica</h3><p>La música publicitaria está diseñada para <b>persuadir</b>: tempos rápidos y modo mayor para transmitir energía y alegría; cuerdas lentas para emocionar. Saber cómo funciona te ayuda a <mark>no dejarte manipular</mark>. Prueba a ver un anuncio sin sonido: ¿sigue funcionando igual?</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lo que la música transmite según el tempo y el modo: rápido y mayor, energía; lento y menor, emoción">${BG}
          <path d="M130 20 V 160 M20 90 H 240" stroke="var(--muted)" stroke-width="2"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="75" y="56" fill="var(--hl-ink)">lento + mayor</text><text x="75" y="72" fill="var(--muted)">calma, confianza</text><text x="185" y="56" fill="var(--red)">rápido + mayor</text><text x="185" y="72" fill="var(--muted)">energía, alegría</text><text x="75" y="126" fill="var(--pen)">lento + menor</text><text x="75" y="142" fill="var(--muted)">tristeza, emoción</text><text x="185" y="126" fill="var(--inf)">rápido + menor</text><text x="185" y="142" fill="var(--muted)">tensión, drama</text></g></svg>`,
      },
    ],
    figura: { titulo: "Funciones de la música en el audiovisual", svg: filas("Ambientar, expresar, anticipar y recordar", [["Ambientar", "situar en una época o un lugar", "var(--pen)"], ["Expresar", "emociones de los personajes", "var(--red)"], ["Anticipar", "crear tensión antes de que pase algo", "var(--inf)"], ["Recordar", "leitmotiv, jingle, logo sonoro", "var(--leaf)"]]) },
    video: { id: "Xl2lqBonAk0", titulo: "Cómo cambia el sentido de la escena cambiando la música", canal: "Dulce González Pérez", vistas: 178352, megusta: 1473, busqueda: "cambiar la música de una escena" },
    quiz: [
      { q: "La música que suena en una radio que el personaje escucha es…", o: ["diegética", "extradiegética", "un jingle"], a: 0, e: "Está dentro de la historia." },
      { q: "Un tema asociado a un personaje que se repite es un…", o: ["leitmotiv", "jingle", "estribillo"], a: 0, e: "Como en Tiburón o Star Wars." },
      { q: "¿Quién compuso la música de Star Wars?", o: ["Hans Zimmer", "John Williams", "Ennio Morricone"], a: 1, e: "También Tiburón y Harry Potter." },
      { q: "Una melodía corta y pegadiza con el nombre del producto es un…", o: ["jingle", "leitmotiv", "travelling"], a: 0, e: "Recurso publicitario." },
      { q: "Tempo rápido y modo mayor suelen transmitir…", o: ["tristeza", "energía y alegría", "miedo"], a: 1, e: "Muy usado en anuncios." },
    ],
    examen: [
      { q: "La banda sonora que solo oye el espectador es música…", o: ["diegética", "extradiegética", "ambiental real"], a: 1, e: "También se llama incidental." },
      { q: "Unas pocas notas que identifican a una marca son un…", o: ["logo sonoro", "videoclip", "remix"], a: 0, e: "Sintonía de marca." },
      { q: "¿Qué función cumple una música inquietante antes de un susto?", o: ["Ambientar la época", "Anticipar", "Unir escenas"], a: 1, e: "Crea tensión." },
    ],
    feynman: ["Qué funciones cumple la música en una película", "Qué diferencia hay entre música diegética y extradiegética", "Qué es un leitmotiv con un ejemplo", "Cómo usa la publicidad la música para persuadir"],
    mapa: mapa("MÚSICA EN CINE Y PUBLICIDAD", "var(--bac)", [["Funciones", "ambientar · expresar · anticipar", "var(--pen)"], ["Tipos", "diegética · extradiegética", "var(--leaf)"], ["Recursos", "leitmotiv · banda sonora", "var(--red)"], ["Publicidad", "jingle · logo sonoro", "var(--inf)"]], 260),
    tarjetas: [["Música diegética", "La oyen los personajes; forma parte de la historia."], ["Música extradiegética", "Solo la oye el espectador."], ["Leitmotiv", "Tema asociado a un personaje o idea que se repite."], ["Jingle", "Melodía publicitaria corta y pegadiza."], ["Logo sonoro", "Unas notas que identifican una marca."]],
    familias: ["Ved una escena de película sin sonido y después con él, y comentad qué cambia.", "Cantad juntos jingles que recordéis: ¿por qué se os quedaron?", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Escucha y percepción: funciones de la música en el audiovisual, música diegética y extradiegética, música y publicidad (RD 217/2022, Música 4º).", ideas: ["Sonorizar un mismo clip con tres músicas distintas y comparar.", "Crear un jingle para un producto inventado.", "Analizar leitmotivs en bandas sonoras famosas."] },
    fuentes: [RD, { t: "Banda sonora, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Banda_sonora" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Música popular urbana", minutos: 35,
    objetivos: ["Conocer el origen y la evolución de la música popular urbana", "Identificar los rasgos de los principales géneros: blues, jazz, rock, pop, hip hop y electrónica", "Relacionar estos géneros con su contexto social"],
    claves: ["blues", "jazz", "rock and roll", "pop", "hip hop", "electrónica"],
    pregunta: {
      texto: "El rock, el pop, el rap y el reguetón tienen un antepasado común nacido en el sur de Estados Unidos. ¿Cuál?",
      respuesta: "El <mark>blues</mark>, nacido a finales del siglo XIX en las comunidades afroamericanas del delta del Misisipi. De él salieron el jazz, el rock and roll, el soul y, más tarde, buena parte de la música que escuchas hoy.",
    },
    bloques: [
      {
        html: `<h3>Las raíces: blues y jazz</h3><p>El <b>blues</b> nació de los cantos de trabajo y los espirituales de los afroamericanos: canciones melancólicas con una estructura de <mark>12 compases</mark> y las «blue notes». El <b>jazz</b> surgió en Nueva Orleans hacia 1900 y se caracteriza por la <b>improvisación</b> y el ritmo <i>swing</i>. Louis Armstrong y Ella Fitzgerald fueron grandes figuras.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Estructura del blues de 12 compases en tres filas de cuatro">${BG}
          ${["I", "I", "I", "I", "IV", "IV", "I", "I", "V", "IV", "I", "V"].map((g, i) => `<rect x="${24 + (i % 4) * 54}" y="${30 + Math.floor(i / 4) * 40}" width="50" height="34" rx="6" fill="${{ I: "var(--pen)", IV: "var(--leaf)", V: "var(--red)" }[g]}" fill-opacity=".8"/><text x="${49 + (i % 4) * 54}" y="${53 + Math.floor(i / 4) * 40}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--card)" ${F}>${g}</text>`).join("")}
          <text x="130" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>blues de 12 compases</text></svg>`,
      },
      {
        html: `<h3>El rock and roll y el pop</h3><p>En los años 50, el <b>rock and roll</b> mezcló blues y country con guitarra eléctrica, bajo y batería (Chuck Berry, Elvis Presley). En los 60, <b>The Beatles</b> y los Rolling Stones lo llevaron a todo el mundo. El <b>pop</b> busca canciones accesibles y pegadizas, con la estructura <mark>estrofa–estribillo</mark>, y domina las listas desde entonces.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formación básica del rock: guitarra eléctrica, bajo, batería y voz">${BG}${chips([["Guitarra eléctrica", "riffs y solos", "var(--red)"], ["Bajo y batería", "la base rítmica", "var(--pen)"], ["Voz", "estrofa – estribillo – puente", "var(--leaf)"]])}</svg>`,
      },
      {
        html: `<h3>Del punk a la electrónica</h3><p>En los 70 y 80 aparecieron muchos estilos: el <b>heavy metal</b> (sonido potente), el <b>punk</b> (rápido, sencillo y rebelde), la <b>música disco</b> y el <b>synth-pop</b> con sintetizadores. La <b>música electrónica</b> (house, techno) nació en Chicago y Detroit y se basa en <mark>ritmos programados</mark> para bailar.</p>`,
        svg: linea("Línea de tiempo de géneros: blues 1900, jazz 1920, rock and roll 1955, punk 1976, hip hop 1979, electrónica 1985, reguetón 2004", [[1900, "blues", "var(--pen)"], [1920, "jazz", "var(--hl-ink)"], [1955, "rock", "var(--red)"], [1976, "punk", "var(--ink)"], [1979, "hip hop", "var(--leaf)"], [2004, "reguetón", "var(--inf)"]], 1890, 2015),
      },
      {
        html: `<h3>Hip hop, rap y músicas urbanas actuales</h3><p>El <b>hip hop</b> nació en el Bronx de Nueva York en los 70 como cultura con cuatro elementos: <b>DJ</b>, <b>MC</b> (rap), <b>breakdance</b> y <b>grafiti</b>. El rap usa la palabra rítmica sobre una base. De él y del reggae derivan el <b>trap</b> y el <b>reguetón</b>, con su ritmo característico de <mark>dembow</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los cuatro elementos del hip hop: DJ, MC, breakdance y grafiti">${BG}
          ${[["DJ", "var(--pen)", 70, 52], ["MC", "var(--red)", 190, 52], ["break", "var(--leaf)", 70, 128], ["grafiti", "var(--inf)", 190, 128]].map(([n, c, x, y]) => `<circle cx="${x}" cy="${y}" r="32" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2.5"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
          <text x="130" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>hip hop</text></svg>`,
      },
      {
        html: `<h3>Música y sociedad</h3><p>La música popular urbana siempre ha sido más que música: el blues habló del dolor de la esclavitud, el rock de la rebeldía juvenil, el punk del rechazo al sistema y el rap de la vida en los barrios. Las letras <b>reflejan su época</b>. Escuchar con espíritu crítico es preguntarse <mark>qué cuenta</mark> una canción y qué valores transmite.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cada género y lo que expresaba: blues dolor, rock rebeldía, punk protesta, rap la vida en los barrios">${BG}
          ${[["blues", "dolor y esperanza", "var(--pen)"], ["rock", "rebeldía juvenil", "var(--red)"], ["punk", "protesta", "var(--ink)"], ["rap", "la vida en el barrio", "var(--leaf)"]].map(([n, d, c], i) => `<rect x="20" y="${18 + i * 38}" width="220" height="30" rx="15" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="36" y="${38 + i * 38}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="226" y="${38 + i * 38}" text-anchor="end" font-size="12" fill="var(--ink)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
    ],
    figura: { titulo: "El árbol de la música popular urbana", svg: filas("Raíces y ramas de la música popular urbana", [["Raíces", "espirituales · cantos de trabajo → blues", "var(--pen)"], ["Años 1900–40", "jazz · swing", "var(--hl-ink)"], ["Años 50–80", "rock and roll · pop · soul · punk · disco", "var(--red)"], ["Años 80–hoy", "hip hop · electrónica · trap · reguetón", "var(--leaf)"]]) },
    video: { id: "V5gdxBD_Boo", titulo: "Todos los géneros musicales explicados en 12 minutos", canal: "Te hago un croquis", vistas: 584337, megusta: 20844, busqueda: "géneros musicales explicados" },
    quiz: [
      { q: "¿Qué género es la raíz de buena parte de la música popular urbana?", o: ["Ópera", "Blues", "Flamenco"], a: 1, e: "Nació en el sur de EE. UU." },
      { q: "El jazz se caracteriza sobre todo por…", o: ["la improvisación", "no tener ritmo", "usar solo violines"], a: 0, e: "Y el swing." },
      { q: "¿Dónde nació el hip hop?", o: ["Londres", "El Bronx de Nueva York", "Kingston"], a: 1, e: "En los años 70." },
      { q: "Los cuatro elementos del hip hop son DJ, MC, breakdance y…", o: ["grafiti", "jazz", "ópera"], a: 0, e: "Arte urbano." },
      { q: "La estructura típica de una canción pop es…", o: ["estrofa – estribillo", "sonata", "fuga"], a: 0, e: "Fácil de recordar." },
    ],
    examen: [
      { q: "La estructura clásica del blues tiene…", o: ["8 compases", "12 compases", "32 compases"], a: 1, e: "Blues de 12 compases." },
      { q: "¿Qué grupo británico llevó el pop-rock a todo el mundo en los 60?", o: ["The Beatles", "Daft Punk", "ABBA"], a: 0, e: "De Liverpool." },
      { q: "El punk se caracteriza por ser…", o: ["lento y complejo", "rápido, sencillo y rebelde", "solo instrumental"], a: 1, e: "Finales de los 70." },
    ],
    feynman: ["Cómo nacieron el blues y el jazz", "Qué instrumentos y estructura tiene el rock", "Cuáles son los elementos de la cultura hip hop", "Cómo reflejan las canciones su época"],
    mapa: mapa("MÚSICA POPULAR URBANA", "var(--bac)", [["Raíces", "blues · jazz", "var(--pen)"], ["Rock y pop", "guitarra · estribillo", "var(--red)"], ["Electrónica", "sintetizadores · house · techno", "var(--inf)"], ["Urbana actual", "hip hop · trap · reguetón", "var(--leaf)"]], 250),
    tarjetas: [["Blues", "Género afroamericano de 12 compases; raíz de la música popular."], ["Jazz", "Nacido en Nueva Orleans; improvisación y swing."], ["Rock and roll", "Años 50: guitarra eléctrica, bajo y batería."], ["Hip hop", "Cultura del Bronx: DJ, MC, breakdance y grafiti."], ["Dembow", "Patrón rítmico característico del reguetón."]],
    familias: ["Haced una lista de canciones con un tema de cada década desde los 50.", "Elegid una canción y comentad juntos qué cuenta su letra.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Contextos y culturas: la música popular urbana, géneros, evolución histórica y relación con la sociedad (RD 217/2022, Música 4º).", ideas: ["Tocar un blues de 12 compases con instrumentos del aula.", "Línea del tiempo musical colaborativa con códigos QR a canciones.", "Taller de rap: escribir y rimar sobre una base."] },
    fuentes: [RD, { t: "Música popular, Wikipedia en español", url: "https://es.wikipedia.org/wiki/M%C3%BAsica_popular" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "La música española", minutos: 40,
    objetivos: ["Conocer las principales etapas y figuras de la música en España", "Reconocer la zarzuela, el nacionalismo musical y el flamenco", "Valorar la música tradicional y la música española actual"],
    claves: ["cantigas", "zarzuela", "nacionalismo", "flamenco", "palo", "movida"],
    pregunta: {
      texto: "¿Sabías que una de las piezas más escuchadas del mundo, el Concierto de Aranjuez, la compuso un músico ciego?",
      respuesta: "Sí, <mark>Joaquín Rodrigo</mark>, que perdió la vista a los 3 años, la compuso en 1939 para guitarra y orquesta. España tiene una enorme tradición musical: de las <b>Cantigas</b> medievales al <b>flamenco</b> y al pop actual.",
    },
    bloques: [
      {
        html: `<h3>De la Edad Media al Barroco</h3><p>En la Edad Media destacan las <b>Cantigas de Santa María</b> de <b>Alfonso X el Sabio</b> (siglo XIII), con más de 400 canciones. En el Renacimiento, <b>Tomás Luis de Victoria</b> (música religiosa) y el <b>Cancionero de Palacio</b>. En el siglo XVIII, el italiano Domenico <b>Scarlatti</b> escribió en Madrid cientos de sonatas para clave.</p>`,
        svg: linea("Línea de tiempo de la música española: Cantigas 1270, Victoria 1600, Scarlatti 1740, zarzuela 1890, Falla 1915, Rodrigo 1939", [[1270, "Cantigas", "var(--hl-ink)"], [1600, "Victoria", "var(--pen)"], [1740, "Scarlatti", "var(--inf)"], [1890, "zarzuela", "var(--red)"], [1939, "Rodrigo", "var(--leaf)"]], 1230, 2000),
      },
      {
        html: `<h3>La zarzuela</h3><p>Es el género lírico español: alterna partes <b>habladas y cantadas</b>, con temas populares y costumbristas. Su época dorada fue el <b>género chico</b> de finales del siglo XIX, con obras como <i>La verbena de la Paloma</i> (Bretón) o <i>La revoltosa</i> (Chapí), y en el siglo XX <i>Doña Francisquita</i> o <i>La rosa del azafrán</i>. Se representa en el <mark>Teatro de la Zarzuela</mark> de Madrid.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escenario de teatro con telón rojo, dos personajes y un diálogo alternando habla y canto">${BG}
          <rect x="20" y="20" width="220" height="130" rx="6" fill="var(--ink)"/><path d="M20 20 Q 60 70 50 150 H 20 Z M240 20 Q 200 70 210 150 H 240 Z" fill="#c62828"/><path d="M20 20 H 240 V 34 Q 130 50 20 34 Z" fill="#b71c1c"/>
          <circle cx="104" cy="90" r="9" fill="var(--hl)"/><path d="M104 99 V 132" stroke="var(--hl)" stroke-width="6"/><circle cx="156" cy="90" r="9" fill="var(--hl)"/><path d="M156 99 L 148 132 H 164 Z" fill="var(--hl)"/>
          <text x="84" y="74" font-size="11" font-weight="700" fill="var(--card)" ${F}>«¡Hablado!»</text><text x="150" y="74" font-size="14" fill="var(--hl)" ${F}>♪ ♫</text>
          <text x="130" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>partes habladas + partes cantadas</text></svg>`,
      },
      {
        html: `<h3>El nacionalismo musical</h3><p>A finales del XIX y principios del XX, los compositores se inspiraron en la <b>música popular española</b>: <b>Isaac Albéniz</b> (<i>Iberia</i>), <b>Enrique Granados</b> (<i>Goyescas</i>) y, sobre todo, <b>Manuel de Falla</b> (<i>El amor brujo</i>, <i>El sombrero de tres picos</i>), que llevó el flamenco a la orquesta. <b>Joaquín Rodrigo</b> compuso el <mark>Concierto de Aranjuez</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Compositores nacionalistas y sus obras: Albéniz, Granados, Falla y Rodrigo">${BG}
          ${[["Albéniz", "Iberia", "var(--pen)"], ["Granados", "Goyescas", "var(--inf)"], ["Falla", "El amor brujo", "var(--red)"], ["Rodrigo", "Concierto de Aranjuez", "var(--leaf)"]].map(([n, d, c], i) => `<rect x="20" y="${16 + i * 38}" width="220" height="30" rx="15" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="36" y="${36 + i * 38}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="226" y="${36 + i * 38}" text-anchor="end" font-size="12" font-style="italic" fill="var(--ink)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>El flamenco</h3><p>Nacido en Andalucía de la mezcla de culturas gitana, andaluza, árabe y judía, es <b>Patrimonio Cultural Inmaterial de la Humanidad</b> desde 2010. Tiene tres elementos: <b>cante</b>, <b>toque</b> (guitarra) y <b>baile</b>, y se organiza en <b>palos</b> (soleá, seguiriya, bulería, alegría, tangos…). Muchos palos se basan en un ciclo de <mark>12 tiempos</mark> con acentos marcados por las palmas. Figuras: Camarón, Paco de Lucía, Enrique Morente.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ciclo de 12 tiempos de la soleá con acentos en el 3, el 6, el 8, el 10 y el 12">${BG}
          ${[...Array(12)].map((_, i) => { const n = i + 1, a = (i * 30 - 60) * Math.PI / 180, x = 130 + 62 * Math.cos(a), y = 90 + 62 * Math.sin(a), ac = [3, 6, 8, 10, 12].includes(n); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${ac ? 14 : 10}" fill="${ac ? "var(--red)" : "var(--card)"}" stroke="var(--red)" stroke-width="2"/><text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="${ac ? "var(--card)" : "var(--ink)"}" ${F}>${n}</text>`; }).join("")}
          <text x="130" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="var(--red)" ${F}>soleá</text><text x="130" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>12 tiempos</text></svg>`,
      },
      {
        html: `<h3>Tradición y música actual</h3><p>Cada región tiene su <b>música tradicional</b>: la jota, la muiñeira con gaita, la sardana con la cobla, el txistu vasco, las isas canarias… En el siglo XX llegaron la canción de autor, la <b>Movida madrileña</b> de los 80 y el pop-rock español. Hoy artistas como <mark>Rosalía</mark> mezclan flamenco, pop y música urbana y triunfan en todo el mundo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Mapa simplificado de España con algunas músicas tradicionales: muiñeira en Galicia, txistu en el País Vasco, jota en Aragón, sardana en Cataluña, flamenco en Andalucía e isa en Canarias">${BG}
          <path d="M40 40 L 120 30 L 170 36 L 222 54 L 214 90 L 196 120 L 176 150 L 110 156 L 70 140 L 46 100 Z" fill="var(--leaf)" fill-opacity=".15" stroke="var(--leaf)" stroke-width="2"/>
          ${[["muiñeira", 50, 48], ["txistu", 120, 44], ["jota", 168, 76], ["sardana", 196, 50], ["flamenco", 110, 140], ["isa", 26, 160]].map(([n, x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="var(--red)"/><text x="${x + 6}" y="${y + 4}" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          </svg>`,
      },
    ],
    figura: { titulo: "Grandes nombres de la música española", svg: filas("Una figura por etapa de la música española", [["Edad Media", "Alfonso X: Cantigas de Santa María", "var(--hl-ink)"], ["Zarzuela", "Chapí, Bretón, Chueca", "var(--red)"], ["Nacionalismo", "Albéniz, Granados, Falla, Rodrigo", "var(--pen)"], ["Flamenco y actual", "Paco de Lucía, Camarón, Rosalía", "var(--leaf)"]]) },
    video: { id: "A4M3E4oIucY", titulo: "Los orígenes del flamenco: el ritmo", canal: "Señor Naranja", vistas: 82548, megusta: 0, busqueda: "orígenes del flamenco ritmo" },
    quiz: [
      { q: "¿Quién reunió las Cantigas de Santa María?", o: ["Alfonso X el Sabio", "Felipe II", "Carlos III"], a: 0, e: "En el siglo XIII." },
      { q: "La zarzuela alterna…", o: ["partes habladas y cantadas", "solo danza", "solo instrumentos"], a: 0, e: "Es el género lírico español." },
      { q: "¿Quién compuso El amor brujo?", o: ["Manuel de Falla", "Joaquín Rodrigo", "Isaac Albéniz"], a: 0, e: "Compositor gaditano." },
      { q: "Los tres elementos del flamenco son cante, toque y…", o: ["baile", "piano", "coro"], a: 0, e: "Toque = guitarra." },
      { q: "Los distintos estilos del flamenco se llaman…", o: ["palos", "movimientos", "actos"], a: 0, e: "Soleá, bulería, alegría…" },
    ],
    examen: [
      { q: "El flamenco es Patrimonio Cultural Inmaterial de la Humanidad desde…", o: ["1992", "2010", "2020"], a: 1, e: "Declarado por la UNESCO." },
      { q: "El Concierto de Aranjuez está escrito para…", o: ["guitarra y orquesta", "piano solo", "coro"], a: 0, e: "Joaquín Rodrigo, 1939." },
      { q: "¿Con qué instrumento se asocia la muiñeira gallega?", o: ["Gaita", "Txistu", "Castañuelas"], a: 0, e: "Gaita gallega." },
    ],
    feynman: ["Qué son las Cantigas de Santa María", "Qué es la zarzuela y en qué se diferencia de la ópera", "Qué es el nacionalismo musical español", "Qué elementos y palos tiene el flamenco"],
    mapa: mapa("MÚSICA ESPAÑOLA", "var(--bac)", [["Antigua", "Cantigas · Victoria · Scarlatti", "var(--hl-ink)"], ["Zarzuela", "hablado + cantado", "var(--red)"], ["Nacionalismo", "Albéniz · Falla · Rodrigo", "var(--pen)"], ["Flamenco y hoy", "palos · Movida · Rosalía", "var(--leaf)"]], 250),
    tarjetas: [["Cantigas de Santa María", "Más de 400 canciones medievales reunidas por Alfonso X."], ["Zarzuela", "Género lírico español con partes habladas y cantadas."], ["Manuel de Falla", "Compositor nacionalista: El amor brujo."], ["Flamenco", "Cante, toque y baile; Patrimonio de la Humanidad (2010)."], ["Palo", "Cada estilo del flamenco: soleá, bulería, alegría…"]],
    familias: ["Escuchad juntos el segundo movimiento del Concierto de Aranjuez.", "Investigad la música tradicional de vuestro pueblo o región.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Contextos y culturas: la música española a lo largo de la historia, la zarzuela, el nacionalismo, el flamenco y la música tradicional (RD 217/2022, Música 4º).", ideas: ["Taller de palmas por soleá y bulería.", "Escenificar un fragmento de zarzuela.", "Comparar una canción tradicional con su versión de un artista actual."] },
    fuentes: [RD, { t: "Teatro de la Zarzuela", url: "https://teatrodelazarzuela.inaem.gob.es/" }, { t: "UNESCO, el flamenco", url: "https://ich.unesco.org/es/RL/el-flamenco-00363" }],
    revisado: "2026-11-12",
  },
];
