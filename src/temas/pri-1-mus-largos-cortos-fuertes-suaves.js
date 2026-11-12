// Música 1º de Primaria: sonidos largos y cortos, fuertes y suaves.
const { mapa } = require("./_util");
const { svg, rot, big, nino, nube, tambor, nota, suelo, bocadillo, PROF, FUENTES } = require("./_pri1-dib");

const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const ondas = (x, y, n, c, esc = 1) => [...Array(n)].map((_, i) => `<path d="M${x + (8 + i * 10) * esc} ${y - (8 + i * 5) * esc} q${6 * esc} ${(8 + i * 5) * esc} 0 ${(16 + i * 10) * esc}" stroke="${c}" stroke-width="${2 + esc}" fill="none" stroke-linecap="round"/>`).join("");
const campana = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-14 0 q0 -24 14 -24 q14 0 14 24 l4 4 h-36z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><circle cx="0" cy="8" r="4" fill="var(--ink)"/></g>`;
const gato = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="-14" rx="16" ry="11" fill="var(--muted)"/><circle cx="14" cy="-28" r="9" fill="var(--muted)"/><path d="M8 -34 l2 -9 l5 6 M16 -36 l5 -7 l2 8" fill="var(--muted)"/><path d="M-16 -12 q-14 -4 -10 -20" stroke="var(--muted)" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
const rayo = (x, y) => `<path d="M${x} ${y} l-10 18 h8 l-6 16 l16 -22 h-8 l6 -12z" fill="var(--sun)"/>`;
const libro = (x, y) => `<rect x="${x - 14}" y="${y - 20}" width="28" height="20" fill="var(--red)"/><rect x="${x - 10}" y="${y - 40}" width="22" height="20" fill="var(--water)"/><rect x="${x - 12}" y="${y - 58}" width="26" height="18" fill="var(--leaf)"/>`;

module.exports = {
  materia: "Música",
  curso: "1-primaria",
  titulo: "Sonidos largos y cortos, fuertes y suaves",
  minutos: 20,
  objetivos: ["Distinguir sonidos largos y cortos", "Distinguir sonidos fuertes y suaves", "Representar y producir sonidos con distinta duración e intensidad"],
  claves: ["largo", "corto", "fuerte", "suave", "duración", "intensidad"],
  pregunta: {
    texto: "Di «aaaaaa» hasta que se te acabe el aire. Ahora da una palmada. ¿En qué se parecen? ¿En qué se diferencian?",
    respuesta: "Los dos son sonidos, pero el «aaaaa» es <mark>largo</mark> y la palmada es <mark>corta</mark>. Los sonidos pueden durar mucho o poco.",
  },
  bloques: [
    {
      html: `<h3>No todos los sonidos son iguales</h3><p>Hay sonidos que duran <mark>mucho</mark> y otros que duran <mark>poco</mark>.</p><p>Hay sonidos muy <b>fuertes</b>, como un trueno. Y otros muy <b>suaves</b>, como un susurro.</p><p>Escuchando con atención, podemos saber cómo es cada sonido. ¡Es como ser un detective de los sonidos!</p><p>Vamos a aprender a distinguirlos.</p>`,
      svg: svg("Cuatro tarjetas: una línea larga, un punto, ondas grandes y ondas pequeñas", `${[[`<path d="M-20 0 H20" stroke="var(--pen)" stroke-width="6" stroke-linecap="round"/>`, "largo", "var(--pen)"], [`<circle r="6" fill="var(--inf)"/>`, "corto", "var(--inf)"], [ondas(-24, 0, 3, "var(--red)", 1.2), "fuerte", "var(--red)"], [ondas(-14, 0, 2, "var(--leaf)", 0.6), "suave", "var(--leaf)"]].map(([d, t, c], i) => `<rect x="${12 + i * 61}" y="40" width="54" height="86" rx="10" fill="var(--card)" stroke="${c}" stroke-width="2"/><g transform="translate(${39 + i * 61} 76)">${d}</g>${etq(39 + i * 61, 116, t, c, 12)}`).join("")}${rot(130, 158, "¿Cómo es el sonido?", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>Sonidos largos</h3><p>Un sonido <mark>largo</mark> dura mucho tiempo.</p><p>La <b>campana</b> de la iglesia hace «dooong» y se queda sonando. El viento hace «uuuuuu». Una sirena suena largo rato.</p><p>Con la voz también hacemos sonidos largos: «aaaaaa», «mmmmmm». Cuanto más aire tenemos, más largo puede ser.</p><p>¿Cuánto aguantas tú?</p>`,
      svg: svg("Una campana que suena con una línea larga y la palabra dooong", `${campana(50, 90, 1.6)}<path d="M84 80 H236" stroke="var(--pen)" stroke-width="7" stroke-linecap="round"/>${rot(160, 62, "dooooooong", { color: "var(--pen)", size: 16 })}${rot(130, 150, "Sonido largo", { color: "var(--pen)", size: 16 })}`),
      video: { id: "KEXojOmh10I", titulo: "Descubriendo los sonidos. Capítulo III: los sonidos largos y cortos", canal: "Musicaeduca", vistas: 516000 },
    },
    {
      html: `<h3>Sonidos cortos</h3><p>Un sonido <mark>corto</mark> dura muy poco: suena y se acaba enseguida.</p><p>Una <b>palmada</b> es un sonido corto. También una gota que cae: «¡plic!». O el «tic» de un reloj.</p><p>También un golpe en la mesa o un saltito. Prueba a decir «¡pa!» muy rápido. ¡Eso es un sonido corto!</p><p>Puedes hacer muchos seguidos: ¡pa, pa, pa!</p>`,
      svg: svg("Una niña da palmadas y debajo hay puntos cortos", `${nino(70, 140, { c: "var(--inf)", nina: true, pose: "palmas", s: 1.2 })}${[0, 1, 2, 3].map((i) => `<circle cx="${140 + i * 28}" cy="80" r="8" fill="var(--inf)"/>`).join("")}${rot(182, 56, "¡pa! ¡pa! ¡pa! ¡pa!", { color: "var(--inf)", size: 13 })}${suelo(140)}${rot(130, 164, "Sonidos cortos", { color: "var(--inf)", size: 16 })}`),
    },
    {
      html: `<h3>Dibujar sonidos</h3><p>Podemos <mark>dibujar</mark> los sonidos para leerlos.</p><p>Un sonido largo es una <b>línea larga</b>. Un sonido corto es un <b>punto</b>.</p><p>Mira el dibujo y lee con la voz: «aaaaa», «pa», «pa», «aaaaa». Los músicos también escriben la música con dibujos especiales. ¡Tú ya estás leyendo música!</p><p>Inventa tú una partitura de líneas y puntos.</p>`,
      svg: svg("Una partitura sencilla: línea larga, dos puntos y otra línea larga", `<rect x="16" y="50" width="228" height="60" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M30 80 H90" stroke="var(--pen)" stroke-width="7" stroke-linecap="round"/><circle cx="112" cy="80" r="7" fill="var(--inf)"/><circle cx="136" cy="80" r="7" fill="var(--inf)"/><path d="M160 80 H226" stroke="var(--pen)" stroke-width="7" stroke-linecap="round"/>${etq(60, 130, "aaaa", "var(--pen)", 14)}${etq(124, 130, "pa pa", "var(--inf)", 14)}${etq(193, 130, "aaaa", "var(--pen)", 14)}${rot(130, 164, "Leemos los sonidos", { color: "var(--pen)", size: 15 })}`),
    },
    {
      html: `<h3>Sonidos fuertes</h3><p>Un sonido <mark>fuerte</mark> se oye mucho, aunque estemos lejos.</p><p>El <b>trueno</b> de una tormenta es un sonido fuerte. También un tambor golpeado con fuerza o una bocina.</p><p>Los sonidos fuertes nos llaman la atención. Pero si son <b>demasiado</b> fuertes, molestan. Pueden hacer daño a los oídos.</p><p>¡Tápate los oídos si hace falta!</p>`,
      svg: svg("Una nube con un rayo y un tambor con ondas grandes", `${nube(64, 50, 1.4)}${rayo(70, 64)}${rot(64, 120, "¡BRRUM!", { color: "var(--red)", size: 18 })}${tambor(170, 120, 1.3)}${ondas(196, 96, 3, "var(--red)", 1.3)}${rot(130, 164, "Sonidos fuertes", { color: "var(--red)", size: 16 })}`),
      video: { id: "W7VDeSFnMdk", titulo: "Descubriendo los sonidos. Capítulo II: los sonidos fuertes y débiles", canal: "Musicaeduca", vistas: 662978 },
    },
    {
      html: `<h3>Sonidos suaves</h3><p>Un sonido <mark>suave</mark> se oye poco. Hay que estar callados para oírlo.</p><p>Un <b>susurro</b> al oído es un sonido suave. También un gato que ronronea o la lluvia fina.</p><p>Las nanas para dormir a un bebé se cantan suave. Los sonidos suaves nos ayudan a estar <b>tranquilos</b>.</p><p>Para oírlos, hacemos silencio.</p>`,
      svg: svg("Un niño susurra al oído de una niña y un gato duerme a su lado", `${nino(70, 150, { c: "var(--pen)", s: 1.1 })}${nino(118, 150, { c: "var(--inf)", nina: true, s: 1.1 })}${ondas(80, 82, 2, "var(--leaf)", 0.5)}${gato(200, 150)}${rot(196, 100, "rrrr…", { color: "var(--muted)", size: 13 })}${suelo(150)}${rot(130, 172, "Sonidos suaves", { color: "var(--leaf)", size: 16 })}`),
    },
    {
      html: `<h3>Fuerte y suave en la música</h3><p>En una canción podemos cantar <mark>fuerte</mark> o <mark>suave</mark>.</p><p>Los músicos usan dos letras. La <b>f</b> significa fuerte («forte»). La <b>p</b> significa suave («piano»).</p><p>Una canción puede empezar suave e ir subiendo hasta sonar fuerte. ¡Así es más emocionante!</p><p>Prueba a cantar tu canción favorita primero <b>piano</b> y luego <b>forte</b>. ¿Cómo suena mejor?</p>`,
      svg: svg("Una letra f grande en rojo y una letra p pequeña en verde con notas", `${big(76, 112, "f", "var(--red)", 86)}${big(184, 110, "p", "var(--leaf)", 40)}${nota(116, 70, "var(--red)")}${nota(220, 84, "var(--leaf)")}${etq(76, 144, "forte = fuerte", "var(--red)", 13)}${etq(184, 144, "piano = suave", "var(--leaf)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Usar bien la voz</h3><p>Saber hablar fuerte o suave es muy <mark>útil</mark>.</p><p>En la <b>biblioteca</b> o en el hospital hablamos suave. En el <b>patio</b>, para llamar a un amigo lejos, hablamos más fuerte.</p><p>En clase, hablamos a un volumen normal y por turnos. Así todos nos entendemos mejor y nadie se cansa.</p><p>¡Cuidamos nuestra voz!</p>`,
      svg: svg("A la izquierda un niño lee en la biblioteca en voz baja; a la derecha una niña llama a un amigo en el patio", `${libro(36, 150)}${nino(78, 150, { c: "var(--pen)", pose: "palmas", boca: "cerrada" })}${rot(78, 50, "suave", { color: "var(--leaf)", size: 14 })}<path d="M130 40 V150" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>${nino(180, 150, { c: "var(--inf)", nina: true, pose: "canta", boca: "abierta" })}${ondas(194, 82, 3, "var(--red)", 0.9)}${rot(196, 44, "¡fuerte!", { color: "var(--red)", size: 14 })}${suelo(150)}${etq(70, 172, "biblioteca")}${etq(190, 172, "patio")}`),
    },
    {
      html: `<h3>Juego: el director de orquesta</h3><p>Uno hace de <mark>director</mark>. Los demás cantan «aaaa» o dan palmas.</p><p>Si abre mucho los <b>brazos</b>, todos suenan fuerte. Si los junta, suenan suave.</p><p>Si deja la mano estirada, el sonido es <b>largo</b>. Si cierra el puño, se para: sonido <b>corto</b>. ¡A dirigir!</p><p>Luego cambiamos de director.</p>`,
      svg: svg("Un director con los brazos abiertos y otro con los brazos juntos", `${nino(70, 150, { c: "var(--red)", pose: "arriba", s: 1.2 })}${bocadillo(70, 30, 90, "¡fuerte!", 13)}${nino(190, 150, { c: "var(--leaf)", pose: "reza", s: 1.2 })}${bocadillo(190, 30, 90, "suave", 13)}${suelo(150)}${rot(130, 172, "Sigue al director", { color: "var(--pen)" })}`),
    },
  ],
  figura: {
    titulo: "Largo, corto, fuerte y suave",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cuadro de cuatro casillas: largo con una línea, corto con puntos, fuerte con ondas grandes y suave con ondas pequeñas, cada una con un ejemplo">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["LARGO", "campana: dooong", `<path d="M-40 0 H50" stroke="var(--pen)" stroke-width="10" stroke-linecap="round"/>`, "var(--pen)"], ["CORTO", "palmada: ¡pa!", `${[-30, 0, 30].map((x) => `<circle cx="${x}" r="9" fill="var(--inf)"/>`).join("")}`, "var(--inf)"], ["FUERTE", "trueno: ¡brrum!", ondas(-40, 0, 3, "var(--red)", 2), "var(--red)"], ["SUAVE", "susurro: shhh", ondas(-20, 0, 2, "var(--leaf)", 0.9), "var(--leaf)"]].map(([t, d, dib, c], i) => {
        const x = 20 + (i % 2) * 310, y = i < 2 ? 16 : 156;
        return `<rect x="${x}" y="${y}" width="290" height="128" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>${big(x + 80, y + 54, t, c, 24)}${rot(x + 80, y + 88, d, { size: 15 })}<g transform="translate(${x + 215} ${y + 64})">${dib}</g>`;
      }).join("")}
    </svg>`,
  },
  video: { id: "xQBeSWXFVd8", titulo: "El sonido para niños: intensidad, tono y timbre", canal: "Smile and Learn - Español", vistas: 1139506, megusta: 0, busqueda: "sonidos largos y cortos fuertes y suaves para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿El sonido de una sirena es largo o corto?",
      pasos: ["Imaginamos la sirena: «uuuuuuu».", "Sigue sonando mucho tiempo.", "Cuando un sonido dura mucho, es largo."],
      resultado: "es un sonido largo." },
    { enunciado: "¿Un susurro es fuerte o suave?",
      pasos: ["Al susurrar, hablamos muy bajito.", "Solo lo oye quien está muy cerca.", "Se oye poco: es suave."],
      resultado: "es un sonido suave." },
    { enunciado: "Lee este dibujo: — • • —",
      pasos: ["La línea es un sonido largo: «aaaa».", "Cada punto es un sonido corto: «pa».", "Leemos en orden de izquierda a derecha."],
      resultado: "«aaaa», «pa», «pa», «aaaa»." },
  ],
  errores: [
    "Confundir largo con fuerte: un sonido puede ser largo y suave, como «mmmmm» bajito.",
    "Pensar que suave significa que no suena: suena, pero poco.",
    "Leer los dibujos de derecha a izquierda: se leen de izquierda a derecha, como los libros.",
    "Gritar para que suene fuerte: con la voz fuerte no hace falta gritar.",
  ],
  ejercicios: [
    { q: "Haz un sonido largo con la voz.", sol: "Por ejemplo: «aaaaaa» o «mmmmmm»." },
    { q: "Haz tres sonidos cortos con las manos.", sol: "Tres palmadas rápidas." },
    { q: "Di un sonido largo de la calle o de casa.", sol: "Por ejemplo: una sirena o la campana." },
    { q: "Di un sonido corto.", sol: "Por ejemplo: una palmada, una gota o el tic de un reloj." },
    { q: "Dibuja: largo, corto, corto.", sol: "Una línea y dos puntos: — • •" },
    { q: "Lee con la voz: • • —", sol: "«pa», «pa», «aaaa»." },
    { q: "Di tu nombre muy fuerte y luego muy suave.", sol: "Primero con voz fuerte (sin gritar) y luego susurrando." },
    { q: "¿Qué letra significa fuerte en música? ¿Y suave?", sol: "f (forte) es fuerte; p (piano) es suave." },
    { q: "Da palmas suaves y, poco a poco, más fuertes.", sol: "Empieza bajito y va subiendo." },
    { q: "¿Cómo hablamos en la biblioteca?", sol: "Suave, en voz baja." },
  ],
  quiz: [
    { q: "Un sonido largo…", o: ["dura mucho", "dura poco", "no suena"], a: 0, e: "Dura mucho tiempo." },
    { q: "Una palmada es un sonido…", o: ["corto", "largo", "silencioso"], a: 0, e: "Suena y se acaba enseguida." },
    { q: "La campana «dooong» es un sonido…", o: ["largo", "corto", "sin sonido"], a: 0, e: "Se queda sonando." },
    { q: "Un sonido largo se dibuja con…", o: ["una línea", "un punto", "un círculo"], a: 0, e: "Una línea larga." },
    { q: "Un sonido corto se dibuja con…", o: ["un punto", "una línea larga", "una estrella"], a: 0, e: "Un punto." },
    { q: "Un trueno es un sonido…", o: ["fuerte", "suave", "largo y silencioso"], a: 0, e: "Se oye mucho." },
    { q: "Un susurro es un sonido…", o: ["suave", "fuerte", "de tambor"], a: 0, e: "Se oye poco." },
    { q: "En música, la letra f significa…", o: ["fuerte", "flojo", "fin"], a: 0, e: "Forte: fuerte." },
    { q: "En música, la letra p significa…", o: ["suave", "pelota", "palmada"], a: 0, e: "Piano: suave." },
    { q: "En la biblioteca hablamos…", o: ["suave", "a gritos", "cantando fuerte"], a: 0, e: "Para no molestar." },
  ],
  examen: [
    { q: "¿Qué sonido es largo?", o: ["La sirena", "Una palmada", "Una gota"], a: 0, e: "La sirena suena mucho rato." },
    { q: "¿Qué sonido es suave?", o: ["Una nana", "Un trueno", "Una bocina"], a: 0, e: "Las nanas se cantan suave." },
    { q: "Si el director abre mucho los brazos…", o: ["sonamos fuerte", "nos callamos", "sonamos suave"], a: 0, e: "Brazos abiertos: fuerte." },
    { q: "¿Qué significa — • ?", o: ["Largo y corto", "Corto y largo", "Dos largos"], a: 0, e: "Línea larga y punto corto." },
  ],
  feynman: ["Qué diferencia hay entre un sonido largo y uno corto", "Qué diferencia hay entre un sonido fuerte y uno suave", "Cómo se dibujan los sonidos largos y cortos"],
  mapa: mapa("CÓMO SUENA", "var(--pri)", [
    ["Largo", "dura mucho · línea —", "var(--pen)"],
    ["Corto", "dura poco · punto •", "var(--inf)"],
    ["Fuerte", "se oye mucho · f", "var(--red)"],
    ["Suave", "se oye poco · p", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["¿Qué es un sonido largo?", "Uno que dura mucho."],
    ["¿Qué es un sonido corto?", "Uno que dura poco."],
    ["¿Cómo dibujo un sonido largo?", "Con una línea."],
    ["¿Cómo dibujo un sonido corto?", "Con un punto."],
    ["Di un sonido fuerte.", "Un trueno (o un tambor, una bocina)."],
    ["Di un sonido suave.", "Un susurro (o una nana, un gato)."],
    ["¿Qué significa f?", "Forte: fuerte."],
    ["¿Qué significa p?", "Piano: suave."],
  ],
  familias: [
    "Jugad a «¿largo o corto?» con sonidos de casa: el microondas, una palmada, el timbre…",
    "Dibujad juntos líneas y puntos y leedlos con la voz.",
    "Cantad una canción conocida primero muy suave y luego más fuerte.",
    "Practicad la voz de biblioteca y la voz de patio según el lugar.",
  ],
  profesores: PROF("Música: cualidades del sonido (duración e intensidad), discriminación auditiva, representación gráfica no convencional y producción vocal e instrumental con matices de fuerte y suave", ["Musicogramas sencillos con líneas y puntos para leer con la voz.", "Juego del director con gestos de intensidad y duración.", "Clasificación de sonidos grabados en largos/cortos y fuertes/suaves."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
