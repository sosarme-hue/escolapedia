// Música 4º ESO (2 de 2). Dibujos propios en SVG.
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

module.exports = [
  {
    materia: M, curso: C, titulo: "La música en el mundo", minutos: 35,
    objetivos: ["Conocer músicas tradicionales de distintos continentes", "Clasificar los instrumentos según cómo producen el sonido", "Valorar la diversidad musical y las músicas de fusión"],
    claves: ["etnomusicología", "idiófono", "membranófono", "cordófono", "aerófono", "fusión"],
    pregunta: {
      texto: "¿Existe alguna cultura en el mundo que no tenga música?",
      respuesta: "No se conoce ninguna. La música es <mark>universal</mark>: todas las culturas cantan, bailan y fabrican instrumentos, aunque con escalas, ritmos y funciones muy distintas. La disciplina que las estudia se llama <b>etnomusicología</b>.",
    },
    bloques: [
      {
        html: `<h3>Clasificar los instrumentos del mundo</h3><p>La clasificación de <b>Hornbostel y Sachs</b> agrupa cualquier instrumento según qué vibra: <b>idiófonos</b> (vibra el propio cuerpo: xilófono, maracas), <b>membranófonos</b> (una membrana: tambores), <b>cordófonos</b> (cuerdas: guitarra, sitar, kora), <b>aerófonos</b> (el aire: flauta, gaita, didgeridoo) y <mark>electrófonos</mark> (electricidad: sintetizador).</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco familias de instrumentos según lo que vibra: idiófonos, membranófonos, cordófonos, aerófonos y electrófonos">${BG}
          ${[["idiófonos", "vibra el cuerpo", "var(--hl-ink)"], ["membranófonos", "membrana", "var(--red)"], ["cordófonos", "vibran cuerdas", "var(--pen)"], ["aerófonos", "vibra el aire", "var(--leaf)"], ["electrófonos", "electricidad", "var(--inf)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 32}" width="220" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="34" y="${30 + i * 32}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="226" y="${30 + i * 32}" text-anchor="end" font-size="12" fill="var(--ink)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>África</h3><p>La música africana subsahariana se basa en el <b>ritmo</b>: la <mark>polirritmia</mark> superpone varios patrones rítmicos a la vez. Es muy común el <b>canto de llamada y respuesta</b> entre un solista y el grupo. Instrumentos: el <b>djembé</b>, la <b>kora</b> (arpa-laúd de 21 cuerdas) y la <b>mbira</b> o piano de pulgar. Los <b>griots</b> guardan la historia en canciones.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polirritmia: dos patrones a la vez, uno de 3 y otro de 2, que coinciden al principio de cada ciclo">${BG}
          ${[...Array(12)].map((_, i) => `<rect x="${20 + i * 18.5}" y="40" width="16" height="16" rx="3" fill="${i % 4 === 0 ? "var(--red)" : "var(--card)"}" stroke="var(--red)" stroke-width="1.5"/><rect x="${20 + i * 18.5}" y="90" width="16" height="16" rx="3" fill="${i % 6 === 0 ? "var(--pen)" : "var(--card)"}" stroke="var(--pen)" stroke-width="1.5"/>`).join("")}
          <g ${F} font-size="12" font-weight="700"><text x="20" y="32" fill="var(--red)">patrón de 3 golpes</text><text x="20" y="82" fill="var(--pen)">patrón de 2 golpes</text><text x="130" y="140" text-anchor="middle" fill="var(--ink)">a la vez = polirritmia</text></g></svg>`,
      },
      {
        html: `<h3>Asia</h3><p>En la <b>India</b>, la música clásica se basa en los <b>ragas</b> (escalas y melodías con un carácter y una hora del día) y los <b>talas</b> (ciclos rítmicos), con sitar y tabla. En <b>Indonesia</b>, el <b>gamelán</b> es una orquesta de gongs y metalófonos. En <b>China</b> y <b>Japón</b> son frecuentes las escalas <mark>pentatónicas</mark> (de 5 notas).</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala pentatónica: cinco notas, do, re, mi, sol y la, sobre las teclas blancas de un piano">${BG}
          ${["do", "re", "mi", "fa", "sol", "la", "si"].map((n, i) => { const p = ["do", "re", "mi", "sol", "la"].includes(n); return `<rect x="${24 + i * 30}" y="40" width="28" height="90" rx="3" fill="${p ? "var(--leaf)" : "var(--card)"}" fill-opacity="${p ? 0.8 : 1}" stroke="var(--ink)" stroke-width="1.5"/><text x="${38 + i * 30}" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`; }).join("")}
          ${[0, 1, 3, 4, 5].map((i) => `<rect x="${44 + i * 30}" y="40" width="16" height="54" rx="2" fill="var(--ink)"/>`).join("")}
          <text x="130" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="var(--leaf)" ${F}>pentatónica: 5 notas</text></svg>`,
      },
      {
        html: `<h3>América y Oceanía</h3><p>En <b>Latinoamérica</b> se mezclaron tradiciones indígenas, europeas y africanas: el <b>son cubano</b> y la salsa, el <b>tango</b> argentino, la <b>cumbia</b> colombiana, la <b>samba</b> y la bossa nova brasileñas, el <b>mariachi</b> mexicano o la música andina con quena y charango. En Australia, los aborígenes tocan el <mark>didgeridoo</mark>, uno de los aerófonos más antiguos.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Géneros de Latinoamérica: son cubano, tango, cumbia, samba, mariachi y música andina">${BG}
          ${[["son y salsa", "Cuba", "var(--red)"], ["tango", "Argentina", "var(--ink)"], ["cumbia", "Colombia", "var(--hl-ink)"], ["samba", "Brasil", "var(--leaf)"], ["mariachi", "México", "var(--pen)"]].map(([n, d, c], i) => `<rect x="20" y="${12 + i * 32}" width="220" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="34" y="${30 + i * 32}" font-size="13" font-weight="700" fill="${c}" ${F}>${n}</text><text x="226" y="${30 + i * 32}" text-anchor="end" font-size="12" fill="var(--muted)" ${F}>${d}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Fusión y música global</h3><p>Hoy las músicas viajan más que nunca. La <b>fusión</b> mezcla tradiciones: flamenco y jazz, música árabe y electrónica, cumbia y rap. Los ritmos <b>afrobeats</b> y el <b>K-pop</b> son éxitos mundiales. Escuchar músicas de otras culturas con <mark>curiosidad y respeto</mark> amplía el oído y ayuda a comprender a los demás.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres círculos que se superponen: tradición, otras culturas y tecnología; en el centro, la fusión">${BG}
          <circle cx="100" cy="72" r="46" fill="var(--red)" fill-opacity=".2" stroke="var(--red)" stroke-width="2"/><circle cx="160" cy="72" r="46" fill="var(--pen)" fill-opacity=".2" stroke="var(--pen)" stroke-width="2"/><circle cx="130" cy="114" r="46" fill="var(--leaf)" fill-opacity=".2" stroke="var(--leaf)" stroke-width="2"/>
          <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="84" y="60" fill="var(--red)">tradición</text><text x="184" y="56" font-size="10" fill="var(--pen)">otras culturas</text><text x="130" y="146" fill="var(--leaf)">tecnología</text><text x="130" y="92" fill="var(--ink)">fusión</text></g></svg>`,
      },
    ],
    figura: { titulo: "Viaje musical por el mundo", svg: filas("Rasgos musicales de África, Asia, América y Europa", [["África", "polirritmia · llamada y respuesta · kora, djembé", "var(--red)"], ["Asia", "ragas y talas · gamelán · pentatónica", "var(--leaf)"], ["América", "son, tango, samba, cumbia · quena", "var(--pen)"], ["Oceanía", "didgeridoo · cantos aborígenes", "var(--inf)"]]) },
    video: { id: "UEWCCSuHsuQ", titulo: "Sound Tracker: Gamelan (Indonesia)", canal: "Genelec Music Channel", vistas: 9131825, megusta: 124022, busqueda: "gamelán música de Indonesia" },
    quiz: [
      { q: "Un tambor es un…", o: ["idiófono", "membranófono", "cordófono"], a: 1, e: "Vibra una membrana." },
      { q: "Superponer varios ritmos distintos a la vez es…", o: ["polirritmia", "pentatónica", "unísono"], a: 0, e: "Típico de África." },
      { q: "El gamelán es una orquesta de…", o: ["Indonesia", "Argentina", "Irlanda"], a: 0, e: "Gongs y metalófonos." },
      { q: "Una escala pentatónica tiene…", o: ["5 notas", "7 notas", "12 notas"], a: 0, e: "Penta = cinco." },
      { q: "El tango nació en…", o: ["Cuba", "el Río de la Plata (Argentina y Uruguay)", "México"], a: 1, e: "Buenos Aires y Montevideo." },
    ],
    examen: [
      { q: "El didgeridoo es un aerófono de…", o: ["Australia", "India", "Brasil"], a: 0, e: "Pueblos aborígenes." },
      { q: "En la música india, el raga es…", o: ["una escala y melodía con carácter propio", "un tambor", "un baile"], a: 0, e: "Y el tala es el ciclo rítmico." },
      { q: "Una guitarra eléctrica se clasifica como…", o: ["cordófono (amplificado)", "membranófono", "idiófono"], a: 0, e: "Vibran cuerdas." },
    ],
    feynman: ["Cómo se clasifican los instrumentos según lo que vibra", "Qué es la polirritmia", "Qué rasgos tiene la música de la India y del gamelán", "Qué es la fusión musical con un ejemplo"],
    mapa: mapa("MÚSICA EN EL MUNDO", "var(--bac)", [["Instrumentos", "idio · membrano · cordo · aero", "var(--hl-ink)"], ["África", "polirritmia · kora", "var(--red)"], ["Asia", "raga · gamelán · pentatónica", "var(--leaf)"], ["América", "son · tango · samba", "var(--pen)"]], 250),
    tarjetas: [["Etnomusicología", "Estudio de la música de las distintas culturas."], ["Membranófono", "Instrumento en el que vibra una membrana."], ["Polirritmia", "Varios ritmos superpuestos."], ["Gamelán", "Orquesta de gongs y metalófonos de Indonesia."], ["Pentatónica", "Escala de cinco notas."]],
    familias: ["Buscad juntos una canción tradicional de un país que no conozcáis y localizadlo en el mapa.", "Clasificad los instrumentos u objetos sonoros que tengáis en casa.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Contextos y culturas: músicas tradicionales del mundo, organología y diversidad cultural (RD 217/2022, Música 4º).", ideas: ["Polirritmia 3 contra 2 con percusión corporal.", "Improvisar sobre la escala pentatónica con las láminas.", "Proyecto por grupos: un país, su música y sus instrumentos."] },
    fuentes: [RD, { t: "Clasificación de Hornbostel-Sachs, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Hornbostel-Sachs" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Tecnología musical", minutos: 35,
    objetivos: ["Entender cómo se graba y digitaliza el sonido", "Conocer el estudio de grabación y el DAW", "Usar MIDI, secuenciadores y edición de audio en una producción sencilla"],
    claves: ["micrófono", "audio digital", "DAW", "MIDI", "mezcla", "decibelio"],
    pregunta: {
      texto: "Hoy se graban canciones de éxito en un dormitorio con un portátil. ¿Qué se necesita como mínimo?",
      respuesta: "Un <b>ordenador</b> con un programa de producción (<mark>DAW</mark>), unos <b>auriculares</b> y, para grabar voces o instrumentos, un <b>micrófono</b> y una <b>interfaz de audio</b>. Con un teclado MIDI puedes tocar cualquier instrumento virtual.",
    },
    bloques: [
      {
        html: `<h3>Del sonido al archivo digital</h3><p>El sonido es una <b>onda</b> de presión en el aire. El <b>micrófono</b> la convierte en señal eléctrica y el <b>conversor</b> la mide miles de veces por segundo (<mark>frecuencia de muestreo</mark>: 44.100 veces por segundo en un CD) para convertirla en números. Así se guarda en un archivo WAV o MP3.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Onda de sonido continua y sus muestras digitales tomadas a intervalos regulares">${BG}
          <path d="M20 90 H 240" stroke="var(--muted)" stroke-width="1.5"/>
          <path d="${[...Array(111)].map((_, i) => `${i ? "L" : "M"}${20 + i * 2} ${(90 - 50 * Math.sin(i / 9)).toFixed(1)}`).join(" ")}" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
          ${[...Array(23)].map((_, i) => { const x = 20 + i * 10, y = 90 - 50 * Math.sin(((x - 20) / 2) / 9); return `<path d="M${x} 90 V ${y.toFixed(1)}" stroke="var(--red)" stroke-width="2"/><circle cx="${x}" cy="${y.toFixed(1)}" r="2.5" fill="var(--red)"/>`; }).join("")}
          <g ${F} font-size="12" font-weight="700"><text x="20" y="166" fill="var(--pen)">onda</text><text x="70" y="166" fill="var(--red)">muestras: 44.100 por segundo</text></g></svg>`,
      },
      {
        html: `<h3>El estudio de grabación</h3><p>La cadena básica: <b>micrófono</b> → <b>interfaz de audio</b> → <b>ordenador</b> con el DAW → <b>monitores</b> o auriculares. Hay micrófonos <b>dinámicos</b> (resistentes, para directo y voces fuertes) y de <b>condensador</b> (muy sensibles, para estudio). La sala debe estar <mark>tratada acústicamente</mark> para evitar ecos.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cadena de grabación: micrófono, interfaz de audio, ordenador y auriculares">${BG}
          ${[["micro", "var(--red)"], ["interfaz", "var(--pen)"], ["DAW", "var(--leaf)"], ["auris", "var(--inf)"]].map(([n, c], i) => `<rect x="${12 + i * 62}" y="60" width="52" height="52" rx="10" fill="${c}" fill-opacity=".18" stroke="${c}" stroke-width="2.5"/><text x="${38 + i * 62}" y="91" text-anchor="middle" font-size="10.5" font-weight="700" fill="${c}" ${F}>${n}</text>${i < 3 ? `<path d="M${64 + i * 62} 86 H ${74 + i * 62}" stroke="var(--ink)" stroke-width="2"/>` : ""}`).join("")}
          <text x="130" y="146" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>la cadena de grabación</text></svg>`,
      },
      {
        html: `<h3>El DAW</h3><p>Un <b>DAW</b> (estación de trabajo de audio digital) es el programa para grabar, editar y mezclar: Audacity (edición sencilla), BandLab o Soundtrap (en línea y gratis), Reaper, GarageBand, FL Studio, Ableton Live… Se trabaja con <b>pistas</b> en una línea de tiempo y se puede cortar, copiar, cuantizar y <mark>deshacer sin miedo</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pantalla de un DAW con cuatro pistas: voz, guitarra, bajo y batería, y regiones de audio en la línea de tiempo">${BG}
          <rect x="12" y="20" width="236" height="140" rx="8" fill="var(--ink)"/>
          ${[["voz", "var(--red)", [[70, 60], [150, 80]]], ["guitarra", "var(--hl)", [[70, 160]]], ["bajo", "var(--leaf)", [[70, 160]]], ["batería", "var(--pen)", [[70, 40], [114, 116]]]].map(([n, c, rs], i) => `<text x="20" y="${48 + i * 30}" font-size="10" font-weight="700" fill="var(--card)" ${F}>${n}</text>${rs.map(([x, w]) => `<rect x="${x}" y="${34 + i * 30}" width="${w}" height="22" rx="3" fill="${c}" fill-opacity=".85"/>`).join("")}`).join("")}
          <path d="M130 26 V 156" stroke="var(--card)" stroke-width="1.5"/></svg>`,
      },
      {
        html: `<h3>MIDI e instrumentos virtuales</h3><p><b>MIDI</b> no es sonido: son <mark>instrucciones</mark> («toca la nota do, con esta fuerza, durante este tiempo»). Un teclado MIDI envía esas órdenes al ordenador y un <b>instrumento virtual</b> las convierte en piano, violín o batería. En el <b>piano roll</b> se ven las notas como rectángulos y se pueden corregir una a una.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Piano roll: teclas a la izquierda y notas como rectángulos en una cuadrícula de tiempo">${BG}
          ${[...Array(8)].map((_, i) => `<rect x="14" y="${18 + i * 18}" width="34" height="18" fill="${[1, 3, 6].includes(i) ? "var(--ink)" : "var(--card)"}" stroke="var(--muted)" stroke-width="1"/><path d="M48 ${18 + i * 18} H 246" stroke="var(--muted)" stroke-width=".5"/>`).join("")}
          ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M${48 + i * 25} 18 V 162" stroke="var(--muted)" stroke-width="${i % 4 ? 0.5 : 1.5}"/>`).join("")}
          ${[[48, 7, 25], [73, 5, 25], [98, 4, 25], [123, 2, 50], [173, 4, 25], [198, 5, 48]].map(([x, f, w]) => `<rect x="${x + 1}" y="${19 + f * 18}" width="${w - 2}" height="16" rx="3" fill="var(--leaf)"/>`).join("")}
          <text x="130" y="176" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" ${F}>piano roll: altura ↕ · tiempo ↔</text></svg>`,
      },
      {
        html: `<h3>Mezcla, efectos y cuidado del oído</h3><p>En la <b>mezcla</b> se equilibra el <b>volumen</b> de cada pista, se coloca en el espacio estéreo (<b>panorámica</b>) y se aplican efectos: <b>ecualizador</b>, <b>compresor</b>, <b>reverberación</b>, <b>delay</b>. El volumen se mide en <b>decibelios</b>: por encima de <mark>85 dB</mark> mucho tiempo se daña el oído. Usa los auriculares a menos del 60 % del volumen.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escala de decibelios: conversación 60, tráfico 85, concierto 110; a partir de 85 hay riesgo para el oído">${BG}
          <rect x="30" y="30" width="200" height="22" rx="11" fill="url(#db-g)"/><defs><linearGradient id="db-g"><stop offset="0" stop-color="#43a047"/><stop offset=".55" stop-color="#fdd835"/><stop offset="1" stop-color="#e53935"/></linearGradient></defs>
          ${[["60 dB", "conversación", 60, "#43a047"], ["85 dB", "tráfico denso", 85, "#f9a825"], ["110 dB", "concierto", 110, "#e53935"]].map(([n, d, v, c], i) => `<path d="M${(30 + 200 * v / 130).toFixed(1)} 26 V 60" stroke="var(--ink)" stroke-width="2"/><text x="${(30 + 200 * v / 130).toFixed(1)}" y="74" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>${v}</text><circle cx="44" cy="${96 + i * 20}" r="6" fill="${c}"/><text x="58" y="${100 + i * 20}" font-size="12" font-weight="700" fill="var(--ink)" ${F}>${n} · ${d}</text>`).join("")}
          <text x="130" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>más de 85 dB mucho rato: riesgo</text></svg>`,
      },
    ],
    figura: { titulo: "De la idea a la canción producida", svg: filas("Fases de una producción musical: componer, grabar, editar y mezclar", [["Componer", "acordes, melodía, letra y estructura", "var(--hl-ink)"], ["Grabar", "micrófono, interfaz, MIDI", "var(--red)"], ["Editar", "cortar, cuantizar, afinar", "var(--pen)"], ["Mezclar", "volumen, panorámica, efectos", "var(--leaf)"]]) },
    video: { id: "BacNrKKPMsE", titulo: "Aprendemos a grabar una canción desde cero (tutorial de Reaper)", canal: "Jaime Altozano", vistas: 4034507, megusta: 0, busqueda: "grabar una canción desde cero DAW" },
    quiz: [
      { q: "¿Qué significa DAW?", o: ["Estación de trabajo de audio digital", "Disco de audio web", "Datos de alta velocidad"], a: 0, e: "El programa de producción." },
      { q: "MIDI transmite…", o: ["sonido grabado", "instrucciones de notas", "vídeo"], a: 1, e: "Qué nota, con qué fuerza y cuánto dura." },
      { q: "La frecuencia de muestreo de un CD es…", o: ["44.100 muestras por segundo", "100 por segundo", "1 por segundo"], a: 0, e: "44,1 kHz." },
      { q: "¿Qué efecto simula el eco de una sala?", o: ["Reverberación", "Ecualizador", "Compresor"], a: 0, e: "Reverb." },
      { q: "A partir de cuántos decibelios hay riesgo para el oído si la exposición es larga?", o: ["30 dB", "85 dB", "200 dB"], a: 1, e: "Cuidado con los auriculares." },
    ],
    examen: [
      { q: "Un micrófono de condensador es…", o: ["muy sensible, para estudio", "solo para directo", "un altavoz"], a: 0, e: "Capta muchos detalles." },
      { q: "Colocar un sonido a la izquierda o a la derecha es la…", o: ["panorámica", "cuantización", "compresión"], a: 0, e: "Espacio estéreo." },
      { q: "¿Qué aparato conecta el micrófono al ordenador con calidad?", o: ["La interfaz de audio", "El router", "El ratón"], a: 0, e: "Convierte la señal." },
    ],
    feynman: ["Cómo se convierte un sonido en un archivo digital", "Qué elementos tiene un estudio de grabación", "Qué diferencia hay entre audio y MIDI", "Qué se hace en la mezcla y por qué hay que cuidar el oído"],
    mapa: mapa("TECNOLOGÍA MUSICAL", "var(--bac)", [["Digitalizar", "onda · muestras · WAV/MP3", "var(--pen)"], ["Estudio", "micro · interfaz · DAW", "var(--red)"], ["MIDI", "instrucciones · piano roll", "var(--leaf)"], ["Mezcla", "volumen · efectos · dB", "var(--inf)"]], 250),
    tarjetas: [["DAW", "Programa para grabar, editar y mezclar audio."], ["MIDI", "Lenguaje de instrucciones musicales entre aparatos."], ["Frecuencia de muestreo", "Muestras por segundo al digitalizar (44.100 en un CD)."], ["Reverberación", "Efecto que simula el sonido de un espacio."], ["85 dB", "Límite a partir del cual la exposición larga daña el oído."]],
    familias: ["Probad juntos una app gratuita de producción (BandLab, GarageBand) y grabad algo divertido.", "Revisad el volumen de los auriculares y activad el límite de volumen del móvil.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Tecnología aplicada a la música: digitalización del sonido, grabación, DAW, MIDI, edición y mezcla, salud auditiva (RD 217/2022, Música 4º).", ideas: ["Grabar y mezclar una canción de clase en BandLab o Soundtrap.", "Medir decibelios en el centro con una app sonómetro.", "Crear un loop de batería en el piano roll."] },
    fuentes: [RD, { t: "OMS, escucha sin riesgos", url: "https://www.who.int/es/news-room/questions-and-answers/item/deafness-and-hearing-loss-safe-listening" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Interpretación y creación", minutos: 35,
    objetivos: ["Interpretar en grupo con atención al pulso, la afinación y la expresión", "Componer una canción sencilla con acordes, melodía y letra", "Improvisar sobre una base y valorar el trabajo propio y ajeno"],
    claves: ["pulso", "acorde", "estructura", "melodía", "improvisación", "ensayo"],
    pregunta: {
      texto: "Cientos de canciones de éxito usan solo los mismos cuatro acordes. ¿Cómo puede ser?",
      respuesta: "La progresión <mark>I – V – vi – IV</mark> (en do: Do, Sol, Lam, Fa) suena bien y es muy versátil. Lo que hace única a cada canción es la <b>melodía</b>, la <b>letra</b>, el <b>ritmo</b> y la <b>producción</b>. Con cuatro acordes ya puedes empezar a componer.",
    },
    bloques: [
      {
        html: `<h3>Tocar en grupo</h3><p>En un conjunto, lo primero es el <b>pulso</b> común: todos deben sentirlo a la vez (el director o la batería lo marcan). Después, la <b>afinación</b>, la <b>dinámica</b> (fuerte o suave según la partitura) y la <mark>escucha a los demás</mark>: si no oyes al resto, estás tocando demasiado fuerte.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro músicos en semicírculo que siguen el mismo pulso marcado por un metrónomo">${BG}
          ${[[50, 110], [100, 70], [160, 70], [210, 110]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="12" fill="${["var(--red)", "var(--pen)", "var(--leaf)", "var(--inf)"][i]}"/><path d="M${x} ${y + 12} V ${y + 36}" stroke="${["var(--red)", "var(--pen)", "var(--leaf)", "var(--inf)"][i]}" stroke-width="6"/>`).join("")}
          <path d="M120 156 L 130 120 L 140 156 Z" fill="var(--hl-ink)"/><path d="M130 150 L 142 126" stroke="var(--ink)" stroke-width="2"/>
          <g ${F} font-size="12" font-weight="700" text-anchor="middle" fill="var(--hl-ink)"><text x="130" y="174">pulso común</text><text x="130" y="30">1 · 2 · 3 · 4</text></g></svg>`,
      },
      {
        html: `<h3>Los acordes y la armonía</h3><p>Un <b>acorde</b> son tres o más notas a la vez. El acorde de <b>do mayor</b> es do–mi–sol. En cada tonalidad, los acordes más importantes son el <b>I</b> (tónica, reposo), el <b>IV</b> (subdominante) y el <b>V</b> (dominante, tensión que pide volver al I). Las <mark>progresiones</mark> de acordes son la base armónica de casi toda la música popular.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Progresión I, V, vi, IV en do mayor: Do, Sol, La menor y Fa">${BG}
          ${[["I", "Do", "var(--pen)"], ["V", "Sol", "var(--red)"], ["vi", "Lam", "var(--inf)"], ["IV", "Fa", "var(--leaf)"]].map(([g, n, c], i) => `<rect x="${16 + i * 60}" y="50" width="52" height="60" rx="10" fill="${c}"/><text x="${42 + i * 60}" y="80" text-anchor="middle" font-size="18" font-weight="700" fill="var(--card)" ${D}>${g}</text><text x="${42 + i * 60}" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="var(--card)" ${F}>${n}</text>`).join("")}
          <text x="130" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>la progresión de los «4 acordes»</text></svg>`,
      },
      {
        html: `<h3>La estructura de una canción</h3><p>Muchas canciones siguen la forma <b>intro – estrofa – estribillo – estrofa – estribillo – puente – estribillo – final</b>. La <b>estrofa</b> cuenta la historia; el <mark>estribillo</mark> repite la idea principal y es lo más pegadizo; el <b>puente</b> aporta algo nuevo antes del último estribillo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Estructura de una canción en bloques de colores: intro, estrofa, estribillo, estrofa, estribillo, puente, estribillo">${BG}
          ${[["In", 18, "var(--muted)"], ["Estrofa", 34, "var(--pen)"], ["Estr.", 28, "var(--red)"], ["Estrofa", 34, "var(--pen)"], ["Estr.", 28, "var(--red)"], ["Puente", 30, "var(--leaf)"], ["Estr.", 28, "var(--red)"]].reduce((acc, [n, w, c]) => { const x = acc.x; acc.s += `<rect x="${x}" y="60" width="${w - 2}" height="50" rx="5" fill="${c}"/><text x="${x + (w - 2) / 2}" y="${90}" text-anchor="middle" font-size="9" font-weight="700" fill="var(--card)" ${F}>${n}</text>`; acc.x += w; return acc; }, { x: 26, s: "" }).s}
          <g ${F} font-size="12" font-weight="700"><text x="26" y="140" fill="var(--pen)">estrofa: cuenta</text><text x="130" y="140" fill="var(--red)">estribillo: repite</text><text x="26" y="158" fill="var(--leaf)">puente: algo nuevo</text></g></svg>`,
      },
      {
        html: `<h3>Componer melodía y letra</h3><p>Para la <b>melodía</b>, usa sobre todo notas del acorde que suena y avanza por <b>grados conjuntos</b> (notas vecinas), con algún salto para dar emoción. Para la <b>letra</b>, busca una idea central, imágenes concretas y una <b>métrica</b> regular con <mark>rima</mark>. Graba tus ideas en el móvil en cuanto aparezcan.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Melodía en un pentagrama que avanza por notas vecinas con un salto">${BG}
          ${[0, 1, 2, 3, 4].map((i) => `<path d="M16 ${50 + i * 10} H 244" stroke="var(--ink)" stroke-width="1"/>`).join("")}
          ${[[40, 95], [64, 90], [88, 85], [112, 80], [136, 55], [160, 60], [184, 65], [208, 70]].map(([x, y], i) => `<ellipse cx="${x}" cy="${y}" rx="6.5" ry="4.8" fill="${i === 4 ? "var(--red)" : "var(--pen)"}" transform="rotate(-20 ${x} ${y})"/><path d="M${x + 6} ${y - 1} V ${y - 30}" stroke="${i === 4 ? "var(--red)" : "var(--pen)"}" stroke-width="1.6"/>`).join("")}
          <path d="M40 95 L 64 90 L 88 85 L 112 80" fill="none" stroke="var(--pen)" stroke-width="1" stroke-dasharray="3 3"/>
          <g ${F} font-size="12" font-weight="700"><text x="30" y="130" fill="var(--pen)">grados conjuntos</text><text x="150" y="34" fill="var(--red)">salto</text></g></svg>`,
      },
      {
        html: `<h3>Improvisar</h3><p>Improvisar es <b>componer en tiempo real</b>. Empieza con pocas notas: sobre una base en la menor, la <b>escala pentatónica</b> de la (la, do, re, mi, sol) suena bien casi siempre. Juega con el ritmo, repite un motivo y varíalo, deja silencios. Lo importante es <mark>escuchar la base</mark> y no tener miedo al error: en la improvisación, un «error» repetido se convierte en estilo.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pregunta y respuesta: un motivo de cuatro notas y su variación">${BG}
          ${[["motivo", "var(--pen)", 20], ["variación", "var(--red)", 140]].map(([n, c, x], j) => `<rect x="${x}" y="50" width="100" height="70" rx="10" fill="${c}" fill-opacity=".1" stroke="${c}" stroke-width="2"/>${[0, 1, 2, 3].map((i) => `<circle cx="${x + 18 + i * 22}" cy="${100 - [0, 14, 8, j ? 24 : 0][i]}" r="6" fill="${c}"/>`).join("")}<text x="${x + 50}" y="142" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
          <text x="130" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" ${F}>repetir y variar</text></svg>`,
      },
    ],
    figura: { titulo: "Cómo componer tu primera canción", svg: filas("Pasos para componer una canción", [["1. Idea", "un tema, una frase, una emoción", "var(--hl-ink)"], ["2. Acordes", "una progresión de 4 acordes", "var(--pen)"], ["3. Melodía", "notas del acorde, grados conjuntos, un salto", "var(--red)"], ["4. Estructura", "estrofa, estribillo y puente", "var(--leaf)"]]) },
    video: { id: "dJsjZTGBLLs", titulo: "5 tips para escribir mejores canciones", canal: "Bada Sessions", vistas: 416771, megusta: 0, busqueda: "consejos para escribir canciones" },
    quiz: [
      { q: "Un acorde es…", o: ["una sola nota larga", "tres o más notas a la vez", "un silencio"], a: 1, e: "Por ejemplo, do–mi–sol." },
      { q: "El acorde de reposo de una tonalidad es el…", o: ["I (tónica)", "V (dominante)", "IV"], a: 0, e: "Da sensación de final." },
      { q: "La parte más pegadiza que se repite en una canción es el…", o: ["puente", "estribillo", "intro"], a: 1, e: "Repite la idea principal." },
      { q: "Avanzar por notas vecinas es moverse por…", o: ["grados conjuntos", "saltos", "acordes"], a: 0, e: "La melodía fluye." },
      { q: "Improvisar es…", o: ["leer una partitura", "componer en tiempo real", "afinar"], a: 1, e: "Crear mientras se toca." },
    ],
    examen: [
      { q: "En do mayor, el acorde V es…", o: ["Sol", "Fa", "Re"], a: 0, e: "Do, Re, Mi, Fa, Sol: quinto grado." },
      { q: "¿Qué parte de la canción aporta algo nuevo antes del último estribillo?", o: ["La estrofa", "El puente", "La intro"], a: 1, e: "Rompe la repetición." },
      { q: "La pentatónica de la menor tiene las notas…", o: ["la, do, re, mi, sol", "do, re, mi, fa, sol", "la, si, do, re, mi, fa, sol"], a: 0, e: "Cinco notas." },
    ],
    feynman: ["Qué hay que cuidar al tocar en grupo", "Qué es un acorde y qué función tienen el I, el IV y el V", "Qué partes tiene una canción", "Cómo empezar a improvisar"],
    mapa: mapa("INTERPRETAR Y CREAR", "var(--bac)", [["Tocar juntos", "pulso · afinación · escucha", "var(--pen)"], ["Armonía", "acordes · I – IV – V", "var(--red)"], ["Canción", "estrofa · estribillo · puente", "var(--leaf)"], ["Improvisar", "pentatónica · motivo", "var(--inf)"]], 250),
    tarjetas: [["Pulso", "Latido regular de la música que todos comparten."], ["Acorde", "Tres o más notas que suenan a la vez."], ["Tónica (I)", "Acorde de reposo de la tonalidad."], ["Estribillo", "Parte que se repite con la idea principal."], ["Improvisación", "Crear música en tiempo real."]],
    familias: ["Escuchad juntos una canción e identificad estrofas, estribillos y puente.", "Animadle a grabar sus ideas musicales en el móvil y compartid alguna en familia.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Interpretación, improvisación y creación: práctica instrumental y vocal en grupo, armonía básica, forma y composición de canciones (RD 217/2022, Música 4º).", ideas: ["Componer en grupos una canción sobre I–V–vi–IV y grabarla.", "Ronda de improvisación de 4 compases con la pentatónica.", "Concierto final con coevaluación mediante rúbrica."] },
    fuentes: [RD, { t: "Acorde, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Acorde" }],
    revisado: "2026-11-12",
  },
  {
    materia: M, curso: C, titulo: "Profesiones de la música", minutos: 30,
    objetivos: ["Conocer las profesiones relacionadas con la música", "Identificar los estudios que llevan a ellas en España", "Valorar la música como sector económico y cultural"],
    claves: ["conservatorio", "producción", "técnico de sonido", "musicoterapia", "industria musical", "gestión cultural"],
    pregunta: {
      texto: "Detrás de un concierto en un estadio, ¿cuántas personas trabajan además de los músicos que ves en el escenario?",
      respuesta: "Cientos: <b>técnicos de sonido y luces</b>, montadores, productores, mánager, promotores, seguridad, diseñadores… La música es una <mark>industria</mark> con muchísimas profesiones, y no todas exigen subir al escenario.",
    },
    bloques: [
      {
        html: `<h3>En el escenario</h3><p><b>Intérprete</b> (instrumentista o cantante) en orquestas, bandas, grupos, musicales o como solista; <b>director</b> de orquesta, coro o banda; <b>DJ</b>. Exige muchas horas de práctica, disciplina y, a menudo, compaginar varios trabajos: <mark>conciertos, grabaciones y clases</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Escenario con un director, una cantante y un DJ">${BG}
          <path d="M10 130 H 250 V 150 H 10 Z" fill="var(--hl-ink)" fill-opacity=".5"/>
          ${[["director", "var(--pen)", 60], ["cantante", "var(--red)", 130], ["DJ", "var(--leaf)", 200]].map(([n, c, x]) => `<circle cx="${x}" cy="72" r="12" fill="${c}"/><path d="M${x} 84 V 126" stroke="${c}" stroke-width="7"/><text x="${x}" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
          <path d="M66 92 L 86 70" stroke="var(--pen)" stroke-width="2"/><rect x="182" y="100" width="36" height="16" rx="3" fill="var(--ink)"/></svg>`,
      },
      {
        html: `<h3>Detrás del escenario</h3><p><b>Técnico de sonido</b> (directo o estudio), <b>productor musical</b>, <b>ingeniero de mezcla y masterización</b>, técnico de luces, <b>luthier</b> (construye y repara instrumentos), afinador de pianos, mánager, <b>promotor</b> de conciertos y gestor cultural. Muchas de estas profesiones se estudian en <mark>Formación Profesional</mark>.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Profesiones detrás del escenario: técnico de sonido, productor, luthier y promotor">${BG}${chips([["Técnico de sonido", "directo, estudio, radio, cine", "var(--pen)"], ["Productor y luthier", "crear el sonido y los instrumentos", "var(--red)"], ["Mánager y promotor", "organizar giras y conciertos", "var(--leaf)"]])}</svg>`,
      },
      {
        html: `<h3>Crear y enseñar</h3><p><b>Compositor</b> (de canciones, bandas sonoras, videojuegos, publicidad), <b>arreglista</b>, <b>letrista</b>; <b>profesor de música</b> en escuelas, institutos y conservatorios; <b>musicólogo</b> (investiga la historia de la música); <b>musicoterapeuta</b> (usa la música para mejorar la salud y el bienestar); <mark>periodista o crítico</mark> musical.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Profesiones de creación y enseñanza: compositor, profesor, musicólogo y musicoterapeuta">${BG}
          ${[["compositor", "var(--red)"], ["profesor", "var(--pen)"], ["musicólogo", "var(--hl-ink)"], ["musicoterapeuta", "var(--leaf)"]].map(([n, c], i) => `<rect x="${i % 2 ? 136 : 16}" y="${i < 2 ? 30 : 100}" width="108" height="50" rx="12" fill="${c}" fill-opacity=".15" stroke="${c}" stroke-width="2.5"/><text x="${(i % 2 ? 136 : 16) + 54}" y="${(i < 2 ? 30 : 100) + 30}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>Qué estudiar</h3><ul><li><b>Conservatorio</b>: Enseñanzas Elementales (4 años), <b>Profesionales</b> (6 años, compatibles con la ESO y el Bachillerato) y <b>Superiores</b> (4 años, equivalentes a un grado).</li><li><b>Universidad</b>: Musicología, Magisterio con mención en Música, grados de sonido o producción.</li><li><b>FP</b>: Técnico Superior en <mark>Sonido para Audiovisuales y Espectáculos</mark>, entre otros.</li><li>Bachillerato de <b>Artes</b>, vía de Música y Artes Escénicas.</li></ul>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Caminos de estudio: conservatorio, universidad y formación profesional">${BG}
          <circle cx="40" cy="90" r="20" fill="var(--ink)"/><text x="40" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="var(--card)" ${F}>4º</text>
          ${[["Conservatorio", 40, "var(--red)"], ["Universidad", 90, "var(--pen)"], ["FP de sonido", 140, "var(--leaf)"]].map(([n, y, c]) => `<path d="M60 90 Q 90 ${y} 120 ${y}" fill="none" stroke="${c}" stroke-width="2.5"/><rect x="120" y="${y - 15}" width="124" height="30" rx="15" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><text x="182" y="${y + 5}" text-anchor="middle" font-size="12" font-weight="700" fill="${c}" ${F}>${n}</text>`).join("")}
        </svg>`,
      },
      {
        html: `<h3>La música como sector económico</h3><p>La música da trabajo a miles de personas: grabación, conciertos y festivales, edición, derechos de autor, fabricación de instrumentos, enseñanza… Hoy los <b>conciertos y festivales</b> generan más ingresos que la venta de música. Las competencias digitales, el <b>inglés</b> y saber <mark>emprender</mark> y moverse en redes son muy útiles en el sector.</p>`,
        svg: `<svg viewBox="0 0 260 180" role="img" aria-label="De dónde vienen los ingresos de la música: directo, streaming, derechos y otros, con el directo como el mayor">${BG}
          <path d="M20 150 H 240" stroke="var(--muted)" stroke-width="2"/>
          ${[["directo", 100, "var(--red)"], ["streaming", 70, "var(--pen)"], ["derechos", 40, "var(--leaf)"], ["otros", 25, "var(--inf)"]].map(([n, h, c], i) => `<rect x="${34 + i * 54}" y="${150 - h}" width="40" height="${h}" rx="4" fill="${c}"/><text x="${54 + i * 54}" y="168" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)" ${F}>${n}</text>`).join("")}
          <text x="130" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--muted)" ${F}>fuentes de ingresos (orientativo)</text></svg>`,
      },
    ],
    figura: { titulo: "Profesiones y estudios", svg: filas("Profesiones de la música y dónde se estudian", [["Intérprete, compositor", "Conservatorio Profesional y Superior", "var(--red)"], ["Profesor, musicólogo", "Universidad o Conservatorio Superior", "var(--pen)"], ["Técnico de sonido", "FP de Sonido o grado universitario", "var(--leaf)"], ["Musicoterapeuta", "grado + máster en Musicoterapia", "var(--inf)"]]) },
    video: { id: "ZBFZ0PK9oMI", titulo: "¿Qué estudiar si me gusta la música? Carreras para los amantes de la música", canal: "Orientación Es vocación", vistas: 174588, megusta: 0, busqueda: "qué estudiar si me gusta la música" },
    quiz: [
      { q: "¿Quién construye y repara instrumentos?", o: ["El luthier", "El promotor", "El DJ"], a: 0, e: "Un oficio artesanal." },
      { q: "Las Enseñanzas Profesionales de Música duran…", o: ["2 años", "6 años", "10 años"], a: 1, e: "Compatibles con la ESO y el Bachillerato." },
      { q: "¿Qué profesión usa la música para mejorar la salud?", o: ["Musicoterapeuta", "Musicólogo", "Arreglista"], a: 0, e: "En hospitales, centros…" },
      { q: "El Técnico Superior en Sonido se estudia en…", o: ["Formación Profesional", "Primaria", "el Conservatorio Elemental"], a: 0, e: "Es un ciclo de FP." },
      { q: "Hoy la mayor fuente de ingresos de la música suele ser…", o: ["la música en directo", "los vinilos", "las partituras"], a: 0, e: "Conciertos y festivales." },
    ],
    examen: [
      { q: "La persona que investiga la historia de la música es…", o: ["el musicólogo", "el productor", "el técnico de luces"], a: 0, e: "Estudia Musicología." },
      { q: "¿Qué Bachillerato tiene una vía de Música y Artes Escénicas?", o: ["El de Artes", "El de Ciencias", "El General"], a: 0, e: "Modalidad de Artes." },
      { q: "El que organiza conciertos y contrata a los artistas es el…", o: ["promotor", "luthier", "arreglista"], a: 0, e: "También el mánager gestiona la carrera." },
    ],
    feynman: ["Qué profesiones hay en el escenario y detrás de él", "Qué estudios llevan a ser músico profesional", "Qué hace un técnico de sonido y dónde se estudia", "Por qué la música es también un sector económico"],
    mapa: mapa("PROFESIONES DE LA MÚSICA", "var(--bac)", [["Escenario", "intérprete · director · DJ", "var(--red)"], ["Detrás", "sonido · producción · luthier", "var(--pen)"], ["Crear y enseñar", "compositor · profesor · terapia", "var(--leaf)"], ["Estudios", "conservatorio · universidad · FP", "var(--inf)"]], 260),
    tarjetas: [["Luthier", "Persona que construye y repara instrumentos."], ["Enseñanzas Profesionales de Música", "6 años en el conservatorio, compatibles con la ESO y el Bachillerato."], ["Musicoterapia", "Uso de la música para mejorar la salud y el bienestar."], ["Técnico de sonido", "Graba, mezcla y sonoriza; se estudia en FP o universidad."], ["Promotor", "Organiza conciertos y festivales."]],
    familias: ["Si le interesa la música, consultad juntos la oferta del conservatorio y de FP de vuestra comunidad.", "En el próximo concierto al que vayáis, fijaos en cuántas personas trabajan fuera del escenario.", "Repasad las tarjetas del paso 6 dos minutos al día."],
    profesores: { saberes: "Contextos y culturas: la música como profesión y sector económico; itinerarios formativos (RD 217/2022, Música 4º).", ideas: ["Entrevistas a profesionales de la música del entorno.", "Mapa de estudios musicales de la comunidad autónoma.", "Simular la organización de un concierto del centro con todos los roles."] },
    fuentes: [RD, { t: "Ministerio de Educación, enseñanzas artísticas de música", url: "https://www.educacionfpydeportes.gob.es/contenidos/estudiantes/ensenanzas-artisticas/musica.html" }],
    revisado: "2026-11-12",
  },
];

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
const T = (t) => module.exports.find((x) => x.titulo === t);

ampliar(T("La música en el mundo"), {
  minutos: 60,
  objetivos: ["Relacionar instrumentos y estilos con su continente de origen", "Explicar la escala pentatónica y la polirritmia"],
  bloques: [
    { tras: "Clasificar los instrumentos del mundo", html: `<h3>Instrumentos del mundo</h3>${tabla(["Instrumento", "Origen", "Familia (Hornbostel-Sachs)"], [["Djembé", "África occidental", "membranófono"], ["Kora", "África occidental", "cordófono (arpa-laúd)"], ["Sitar", "India", "cordófono"], ["Gamelán", "Indonesia", "idiófonos (metalófonos y gongs)"], ["Shamisen", "Japón", "cordófono"], ["Quena", "Andes", "aerófono"], ["Didgeridoo", "Australia", "aerófono"], ["Órgano", "Europa", "aerófono de teclado"]])}`, video: { id: "jbCDgoZ8_p8", titulo: "Entro en el instrumento más grande del mundo", canal: "Jaime Altozano", vistas: 1443202, megusta: 0 } },
    { tras: "Asia", html: `<h3>La escala pentatónica</h3><p>Mucha música tradicional de <b>China</b>, <b>Japón</b>, África, los pueblos andinos o el blues usa la <mark>escala pentatónica</mark>, de solo cinco notas (por ejemplo, do, re, mi, sol, la). Al no tener semitonos, todas sus notas suenan bien juntas, y por eso es muy fácil improvisar con ella: si tocas solo las teclas negras de un piano, estás tocando una pentatónica. En cambio, la música clásica de la <b>India</b> usa los <b>ragas</b>, escalas con reglas propias asociadas a momentos del día y estados de ánimo.</p>` },
    { tras: "África", html: `<h3>La polirritmia africana</h3><p>Una de las grandes aportaciones de África es la <mark>polirritmia</mark>: varios ritmos distintos que suenan a la vez y encajan entre sí. Por ejemplo, un tambor toca en grupos de 3 mientras otro toca en grupos de 2. También es típica la estructura de <b>llamada y respuesta</b>: un solista canta una frase y el grupo responde. Estas formas viajaron a América con la esclavitud y están en la base del blues, el jazz, la salsa, la samba y el rap.</p>` },
  ],
  ejemplos: [
    { enunciado: "Clasifica el didgeridoo según Hornbostel-Sachs.", pasos: ["El sonido lo produce el aire que vibra en un tubo.", "Lo hace vibrar el soplo del intérprete."], resultado: "Es un aerófono." },
    { enunciado: "Toca una polirritmia de 3 contra 2 con palmas.", pasos: ["Contar 6 pulsos: 1 2 3 4 5 6.", "Grupo A da palmas en 1, 3 y 5 (tres golpes).", "Grupo B da palmas en 1 y 4 (dos golpes).", "Repetir a la vez."], resultado: "Suena el 3 contra 2, base de mucha música africana y latina." },
    { enunciado: "Improvisa una melodía pentatónica.", pasos: ["Usar solo do, re, mi, sol y la.", "Empezar y acabar en do.", "Combinar notas largas y cortas."], resultado: "Una melodía de sonido «oriental» o folk sin notas que choquen." },
  ],
  errores: [
    "Llamar «música étnica» solo a la música no europea.",
    "Pensar que toda la música africana es igual.",
    "Clasificar los instrumentos por su forma en lugar de por lo que vibra.",
    "Creer que la música de otras culturas «desafina» porque usa otras escalas.",
    "Olvidar el origen africano de muchos estilos actuales.",
  ],
  ejercicios: [
    { q: "Cita las cuatro familias de instrumentos de Hornbostel-Sachs.", sol: "Idiófonos, membranófonos, cordófonos y aerófonos (y electrófonos)." },
    { q: "¿Qué es la kora?", sol: "Un instrumento de cuerda de África occidental, mezcla de arpa y laúd." },
    { q: "¿Qué es el gamelán?", sol: "Una orquesta indonesia formada sobre todo por metalófonos y gongs." },
    { q: "¿Qué es una escala pentatónica?", sol: "Una escala de cinco notas, sin semitonos." },
    { q: "¿Qué son los ragas?", sol: "Las escalas de la música clásica de la India, con reglas y estados de ánimo propios." },
    { q: "¿Qué es la polirritmia?", sol: "La superposición de varios ritmos diferentes a la vez." },
    { q: "¿Qué es la llamada y respuesta?", sol: "Un solista canta una frase y el grupo le responde." },
    { q: "Cita un instrumento andino y su familia.", sol: "La quena, un aerófono." },
    { q: "¿Qué estilos americanos tienen raíces africanas?", sol: "Blues, jazz, samba, salsa y rap, entre otros." },
    { q: "¿Qué es la world music o fusión?", sol: "La mezcla de músicas tradicionales de distintas culturas con estilos actuales." },
  ],
  quiz: [
    { q: "El sitar es de…", o: ["la India", "Japón", "Perú"], a: 0, e: "Cordófono." },
    { q: "La escala pentatónica tiene…", o: ["5 notas", "7 notas", "12 notas"], a: 0, e: "Sin semitonos." },
    { q: "El didgeridoo es un…", o: ["aerófono", "membranófono", "idiófono"], a: 0, e: "Australia." },
    { q: "Las teclas negras del piano forman una escala…", o: ["pentatónica", "cromática", "mayor"], a: 0, e: "Cinco notas." },
    { q: "La polirritmia es típica de…", o: ["África", "el canto gregoriano", "la ópera"], a: 0, e: "Varios ritmos a la vez." },
  ],
  tarjetas: [
    ["Pentatónica", "Escala de cinco notas sin semitonos."],
    ["Polirritmia", "Varios ritmos distintos a la vez."],
    ["Raga", "Escala de la música clásica india."],
  ],
});

ampliar(T("Tecnología musical"), {
  minutos: 60,
  objetivos: ["Explicar la frecuencia de muestreo y la profundidad de bits", "Distinguir los tipos de micrófonos y sus usos"],
  bloques: [
    { tras: "Del sonido al archivo digital", html: `<h3>Muestreo y calidad de audio</h3><p>Para digitalizar el sonido, el ordenador mide la onda muchas veces por segundo: es la <mark>frecuencia de muestreo</mark>. El CD usa <b>44.100 muestras por segundo</b> (44,1 kHz), suficiente para captar los sonidos que oímos (hasta 20 kHz). Cada muestra se guarda con una <b>profundidad de bits</b>: el CD usa 16 bits (65.536 niveles posibles). Un minuto de audio de CD estéreo ocupa unos <b>10 MB</b>; en MP3 a 128 kbps, menos de 1 MB, porque se eliminan datos poco audibles.</p>` },
    { tras: "El estudio de grabación", html: `<h3>Tipos de micrófonos</h3>${tabla(["Tipo", "Cómo es", "Uso típico"], [["Dinámico", "resistente, no necesita alimentación", "voces en directo, batería, amplificadores"], ["De condensador", "muy sensible, necesita alimentación phantom (48 V)", "voces e instrumentos acústicos en estudio"], ["De cinta", "suave y cálido, delicado", "voces y metales en estudio"]])}<p>Según hacia dónde captan, pueden ser <b>cardioides</b> (captan por delante, los más usados), <b>omnidireccionales</b> (en todas las direcciones) o <mark>bidireccionales</mark> (por delante y por detrás).</p>` },
    { tras: "MIDI e instrumentos virtuales", html: `<h3>Qué es MIDI y qué no es</h3><p>Un archivo <mark>MIDI</mark> no contiene sonido, sino <b>instrucciones</b>: qué nota se toca, con qué fuerza (velocity, de 0 a 127), cuándo empieza y cuándo acaba. Esas instrucciones se envían a un instrumento virtual, que produce el sonido. Por eso la misma melodía MIDI puede sonar como un piano, unas cuerdas o un sintetizador, y se puede corregir una nota sin volver a grabar. Un archivo MIDI ocupa solo unos <b>kilobytes</b>.</p>`, video: { id: "-nkYPhurjUI", titulo: "Qué es MIDI y cómo funciona", canal: "El Capitán estudio", vistas: 105341, megusta: 0 } },
  ],
  ejemplos: [
    { enunciado: "¿Cuántas muestras tiene 1 minuto de audio mono a 44,1 kHz?", pasos: ["44.100 muestras por segundo.", "60 s · 44.100 = 2.646.000."], resultado: "Más de 2,6 millones de muestras." },
    { enunciado: "Elige micrófono para grabar una voz en casa y otro para un concierto.", pasos: ["Estudio: condensador, por su sensibilidad y detalle.", "Directo: dinámico, resistente y menos sensible al ruido de fondo."], resultado: "Condensador para el estudio; dinámico para el directo." },
    { enunciado: "Graba una melodía MIDI y cambia el instrumento.", pasos: ["Grabar las notas con un teclado MIDI en el DAW.", "Corregir en el piano roll una nota equivocada.", "Cambiar el instrumento virtual de piano a violín."], resultado: "Misma melodía, otro timbre, sin volver a grabar." },
  ],
  errores: [
    "Pensar que un archivo MIDI contiene sonido grabado.",
    "Usar un micrófono de condensador sin alimentación phantom.",
    "Subir el volumen de todo en la mezcla en vez de equilibrar.",
    "Creer que más bits y más kHz siempre se notan al oír.",
    "Escuchar a mucho volumen durante horas en el estudio.",
  ],
  ejercicios: [
    { q: "¿Qué es la frecuencia de muestreo?", sol: "Las veces por segundo que se mide la onda al digitalizar." },
    { q: "¿Qué frecuencia de muestreo usa el CD?", sol: "44,1 kHz (44.100 muestras por segundo)." },
    { q: "¿Qué es la profundidad de bits?", sol: "La precisión con que se guarda cada muestra; el CD usa 16 bits." },
    { q: "¿Qué es un DAW?", sol: "Una estación de trabajo de audio digital: el programa para grabar, editar y mezclar." },
    { q: "Diferencia micrófono dinámico y de condensador.", sol: "Dinámico: resistente, para directo. Condensador: sensible, para estudio, y necesita phantom." },
    { q: "¿Qué es un micrófono cardioide?", sol: "Uno que capta sobre todo el sonido que le llega por delante." },
    { q: "¿Qué información guarda un mensaje MIDI?", sol: "La nota, la fuerza (velocity), el inicio y el final." },
    { q: "¿Qué es el piano roll?", sol: "La ventana del DAW donde se ven y editan las notas MIDI como barras." },
    { q: "Cita tres efectos de sonido.", sol: "Reverberación, eco (delay) y ecualización (también compresión)." },
    { q: "¿Qué es la regla 60/60 para cuidar el oído?", sol: "No pasar del 60 % del volumen ni de 60 minutos seguidos con auriculares." },
  ],
  quiz: [
    { q: "El CD usa una frecuencia de muestreo de…", o: ["44,1 kHz", "1 kHz", "1 MHz"], a: 0, e: "44.100 muestras por segundo." },
    { q: "Un archivo MIDI contiene…", o: ["instrucciones", "sonido grabado", "vídeo"], a: 0, e: "Notas, fuerza, tiempos." },
    { q: "Para el directo se suele usar un micrófono…", o: ["dinámico", "de cinta", "de juguete"], a: 0, e: "Resistente." },
    { q: "La alimentación phantom la necesitan los micrófonos…", o: ["de condensador", "dinámicos", "todos"], a: 0, e: "48 V." },
    { q: "La velocity MIDI va de…", o: ["0 a 127", "0 a 10", "1 a 1.000"], a: 0, e: "La fuerza de la nota." },
  ],
  tarjetas: [
    ["Frecuencia de muestreo", "Mediciones por segundo de la onda (44,1 kHz en CD)."],
    ["Micrófono de condensador", "Muy sensible; necesita phantom."],
    ["Velocity", "Fuerza de una nota MIDI, de 0 a 127."],
  ],
});

ampliar(T("Interpretación y creación"), {
  minutos: 60,
  objetivos: ["Construir acordes mayores y menores sobre la escala", "Leer y tocar a partir de un cifrado americano"],
  bloques: [
    { tras: "Los acordes y la armonía", html: `<h3>El cifrado americano</h3><p>En la música popular los acordes se escriben con <mark>letras</mark>: A = la, B = si, C = do, D = re, E = mi, F = fa, G = sol. Una letra sola indica acorde <b>mayor</b> (C = do mayor); con «m», <b>menor</b> (Am = la menor); con «7», acorde de séptima (G7). Un acorde mayor se construye con la nota base, la tercera mayor (4 semitonos) y la quinta (7 semitonos): do-mi-sol. En el menor, la tercera es menor (3 semitonos): la-do-mi. El mayor suena «alegre» y el menor, «triste».</p>`, video: { id: "UFAUnsFBawc", titulo: "Así se aprenden todos los acordes lo más rápido posible", canal: "Jorge Aguilera", vistas: 7614477, megusta: 0 } },
    { tras: "Los acordes y la armonía", html: `<h3>Los acordes de la escala de do</h3>${tabla(["Grado", "I", "II", "III", "IV", "V", "VI", "VII"], [["Acorde", "C", "Dm", "Em", "F", "G", "Am", "B°"], ["Notas", "do-mi-sol", "re-fa-la", "mi-sol-si", "fa-la-do", "sol-si-re", "la-do-mi", "si-re-fa"]])}<p>Los grados <b>I, IV y V</b> son los más importantes (tónica, subdominante y dominante): con ellos se acompañan miles de canciones. La progresión <mark>I-V-VI-IV</mark> (C-G-Am-F) es la base de muchísimos éxitos del pop.</p>` },
    { tras: "Componer melodía y letra", html: `<h3>Ensayar y actuar</h3><p>Una buena interpretación necesita un <b>ensayo</b> organizado: calentar la voz o el instrumento, practicar primero los fragmentos difíciles despacio, luego a tempo, y por último tocar la obra completa. En grupo hay que <mark>escuchar a los demás</mark>, seguir al director o a quien marca la entrada y respetar las dinámicas. El miedo escénico es normal: respirar hondo, prepararse bien y concentrarse en la música ayuda a controlarlo. Grabarse permite descubrir los fallos y mejorar.</p>` },
  ],
  ejemplos: [
    { enunciado: "Construye el acorde de sol mayor (G).", pasos: ["Nota base: sol.", "Tercera mayor (4 semitonos): si.", "Quinta (7 semitonos): re."], resultado: "G = sol-si-re." },
    { enunciado: "Acompaña una canción con la progresión C-G-Am-F, 4 tiempos por acorde.", pasos: ["Compás 1: do mayor.", "Compás 2: sol mayor.", "Compás 3: la menor.", "Compás 4: fa mayor; repetir."], resultado: "La progresión I-V-VI-IV del pop." },
    { enunciado: "Transporta la progresión C-F-G a la tonalidad de sol.", pasos: ["En do: I = C, IV = F, V = G.", "En sol: I = G, IV = C, V = D."], resultado: "G-C-D." },
  ],
  errores: [
    "Confundir C (do mayor) con Cm (do menor).",
    "Empezar a ensayar la obra entera a tempo desde el principio.",
    "Tocar fuerte sin escuchar al resto del grupo.",
    "Pensar que para componer hay que saber muchísima teoría.",
    "No respetar los silencios de la partitura.",
  ],
  ejercicios: [
    { q: "¿Qué nota es la letra E en cifrado americano?", sol: "Mi." },
    { q: "¿Qué significa Am?", sol: "La menor." },
    { q: "Escribe las notas del acorde de F.", sol: "Fa-la-do." },
    { q: "¿Qué diferencia un acorde mayor de uno menor?", sol: "La tercera: mayor (4 semitonos) o menor (3 semitonos)." },
    { q: "¿Qué grados son la tónica, la subdominante y la dominante?", sol: "I, IV y V." },
    { q: "Escribe la progresión I-V-VI-IV en do mayor.", sol: "C-G-Am-F." },
    { q: "Cita las partes de la estructura de una canción.", sol: "Introducción, estrofa, estribillo, puente y final (coda)." },
    { q: "¿Cómo se organiza un buen ensayo?", sol: "Calentar, practicar despacio los pasajes difíciles, subir a tempo y tocar la obra completa." },
    { q: "Da dos consejos contra el miedo escénico.", sol: "Respirar hondo y prepararse bien (y centrarse en la música)." },
    { q: "¿Qué es improvisar?", sol: "Crear música en el momento, a partir de una base, una escala o un esquema." },
  ],
  quiz: [
    { q: "En cifrado americano, G es…", o: ["sol", "la", "re"], a: 0, e: "A = la, B = si, C = do…" },
    { q: "Am significa…", o: ["la menor", "la mayor", "la séptima"], a: 0, e: "La «m» es menor." },
    { q: "El acorde de do mayor es…", o: ["do-mi-sol", "do-re-mi", "do-fa-la"], a: 0, e: "Fundamental, tercera y quinta." },
    { q: "La dominante es el grado…", o: ["V", "I", "IV"], a: 0, e: "Sol en do mayor." },
    { q: "Los pasajes difíciles se ensayan primero…", o: ["despacio", "a toda velocidad", "nunca"], a: 0, e: "Luego a tempo." },
  ],
  tarjetas: [
    ["Cifrado americano", "Letras para los acordes: C = do, A = la…"],
    ["I-IV-V", "Tónica, subdominante y dominante."],
    ["I-V-VI-IV", "Progresión típica del pop (C-G-Am-F)."],
  ],
});

ampliar(T("Profesiones de la música"), {
  minutos: 60,
  objetivos: ["Describir el trabajo del técnico de sonido y del productor", "Conocer los derechos y entidades de gestión de la música"],
  bloques: [
    { tras: "Detrás del escenario", html: `<h3>El técnico de sonido</h3><p>El <mark>técnico o ingeniero de sonido</mark> se encarga de que la música suene bien. En el <b>estudio</b>, coloca los micrófonos, graba, edita y mezcla. En el <b>directo</b> hay dos puestos: el técnico de <b>sala (FOH)</b>, que controla lo que oye el público desde la mesa de mezclas, y el de <b>monitores</b>, que controla lo que oyen los músicos en el escenario. Necesita conocer la acústica, la electrónica y los programas de audio, y tener un oído muy entrenado.</p>`, video: { id: "g8_rX5iPaMk", titulo: "¿Qué es y qué hace un ingeniero en sonido?", canal: "En el Home Studio", vistas: 63538, megusta: 0 } },
    { tras: "Qué estudiar", html: `<h3>Caminos formativos</h3>${tabla(["Estudios", "Duración", "Salidas"], [["Enseñanzas elementales y profesionales de Música (conservatorio)", "4 + 6 años", "base para estudios superiores"], ["Grado en Enseñanzas Artísticas Superiores de Música", "4 años", "intérprete, compositor, director, pedagogo"], ["Grado universitario en Musicología", "4 años", "investigación, crítica, gestión cultural"], ["Grado en Educación (mención Música)", "4 años", "maestro de música en Primaria"], ["FP de Sonido para Audiovisuales y Espectáculos", "2 años", "técnico de sonido en estudios y directos"]])}` },
    { tras: "La música como sector", html: `<h3>Los derechos de la música</h3><p>Una canción genera dos tipos de derechos. Los <b>derechos de autor</b> son de quien compone la música y escribe la letra; en España los gestiona sobre todo la <mark>SGAE</mark>. Los <b>derechos conexos</b> son de los intérpretes (gestionados por AIE) y de los productores de la grabación (AGEDI). Cada vez que una canción suena en la radio, en un bar, en un concierto o en streaming, estas entidades cobran y reparten el dinero entre sus socios.</p>` },
  ],
  ejemplos: [
    { enunciado: "¿Qué estudiarías para ser técnico de sonido en conciertos?", pasos: ["FP de grado superior en Sonido para Audiovisuales y Espectáculos.", "Prácticas en salas y estudios.", "Formación continua en mesas digitales y software."], resultado: "Un ciclo de FP de 2 años más experiencia práctica." },
    { enunciado: "Una canción suena en la radio. ¿Quién cobra?", pasos: ["El autor de la música y la letra: derechos de autor (SGAE).", "El cantante y los músicos: derechos conexos de intérpretes (AIE).", "La discográfica que produjo la grabación (AGEDI)."], resultado: "Cobran autores, intérpretes y productores." },
    { enunciado: "Organiza el equipo de un concierto pequeño.", pasos: ["Músicos y mánager.", "Técnico de sala y técnico de monitores.", "Técnico de luces, roadies y producción del evento."], resultado: "Decenas de profesionales detrás de unos pocos músicos." },
  ],
  errores: [
    "Pensar que en la música solo trabajan los cantantes famosos.",
    "Confundir al autor de una canción con su intérprete.",
    "Creer que estudiar música solo lleva a ser profesor.",
    "Pensar que el técnico de sonido «solo sube y baja volúmenes».",
    "Olvidar que la música es un sector económico que genera empleo.",
  ],
  ejercicios: [
    { q: "Cita tres profesiones del escenario.", sol: "Instrumentista, cantante y director de orquesta." },
    { q: "Cita tres profesiones detrás del escenario.", sol: "Técnico de sonido, productor musical y mánager (también roadie o luthier)." },
    { q: "Diferencia técnico de sala y técnico de monitores.", sol: "Sala: controla lo que oye el público. Monitores: lo que oyen los músicos." },
    { q: "¿Qué hace un productor musical?", sol: "Dirige la grabación: decide arreglos, sonido y cómo se graba cada parte." },
    { q: "¿Qué es un luthier?", sol: "Quien construye y repara instrumentos de cuerda." },
    { q: "¿Qué estudios hay en el conservatorio?", sol: "Elementales (4 años), profesionales (6 años) y superiores (4 años)." },
    { q: "¿Qué ciclo de FP forma técnicos de sonido?", sol: "Sonido para Audiovisuales y Espectáculos." },
    { q: "Diferencia derechos de autor y derechos conexos.", sol: "Autor: de quien compone. Conexos: de intérpretes y productores." },
    { q: "¿Qué es la SGAE?", sol: "La entidad que gestiona en España los derechos de autor de la música." },
    { q: "¿Por qué la música es un sector económico?", sol: "Porque genera empleo e ingresos con conciertos, grabaciones, derechos, festivales e instrumentos." },
  ],
  quiz: [
    { q: "El técnico FOH controla el sonido…", o: ["del público", "de los músicos", "del camerino"], a: 0, e: "Front of house." },
    { q: "La SGAE gestiona…", o: ["derechos de autor", "conciertos de rock", "conservatorios"], a: 0, e: "En España." },
    { q: "Un luthier…", o: ["construye instrumentos", "canta ópera", "dirige orquestas"], a: 0, e: "Sobre todo de cuerda." },
    { q: "El conservatorio superior dura…", o: ["4 años", "1 año", "10 años"], a: 0, e: "Como un grado." },
    { q: "Los derechos de los intérpretes son…", o: ["conexos", "de autor", "inexistentes"], a: 0, e: "Gestionados por AIE." },
  ],
  tarjetas: [
    ["Técnico de sonido", "Graba, mezcla y controla el sonido en estudio o directo."],
    ["SGAE", "Entidad de gestión de derechos de autor."],
    ["Derechos conexos", "De intérpretes y productores de grabaciones."],
  ],
});
require("./_eso4L12").aplica(module.exports, ["mundo", "tecnologia", "interpretacion", "profesiones"]);
