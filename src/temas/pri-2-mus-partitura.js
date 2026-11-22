// Música 2º de Primaria: mi primera partitura. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, negra, blanca, corcheas, silencio, palma, pentagrama, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
// Clave de sol sencilla (espiral con línea).
const clave = (x, y, s = 1, c = "var(--ink)") => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M4 30 q-14 -2 -12 -14 q2 -12 14 -10 q10 2 8 12 q-2 8 -12 6 M4 -40 q12 10 0 26 q-14 14 -10 30 M4 -40 V42 q0 8 -8 6" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/></g>`;
// Cabeza de nota sobre el pentagrama (línea o espacio), sin plica.
const cabeza = (x, y, c) => `<ellipse cx="${x}" cy="${y}" rx="8" ry="6" transform="rotate(-20 ${x} ${y})" fill="${c}"/><path d="M${x + 7} ${y - 2} V${y - 32}" stroke="${c}" stroke-width="3"/>`;

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "Mi primera partitura",
  minutos: 20,
  objetivos: ["Entender que la música se puede escribir y leer", "Leer y tocar ritmos con negra, dos corcheas y silencio", "Conocer el pentagrama, la clave de sol y las notas musicales"],
  claves: ["partitura", "negra", "corchea", "silencio", "pentagrama", "clave de sol", "nota", "do re mi"],
  pregunta: {
    texto: "¿Se puede escribir la música, igual que escribimos palabras?",
    respuesta: "¡Sí! La música se escribe con <mark>símbolos</mark> en una <b>partitura</b>. Igual que las letras forman palabras, las figuras y las notas forman canciones que cualquiera puede leer y tocar.",
  },
  bloques: [
    {
      html: `<h3>La música se escribe</h3><p>Una <mark>partitura</mark> es un papel donde está escrita la música.</p><p>Los músicos la leen para saber qué tocar, igual que tú lees un cuento. Así, una canción escrita hace cientos de años todavía se puede tocar hoy.</p><p>Para escribir música usamos símbolos especiales. Hoy vamos a aprender los primeros. ¡Es como aprender un alfabeto nuevo!</p>`,
      svg: svg("Una niña lee una partitura con notas en un atril", `${nino(56, 156, { c: P.morado, pose: "pie", s: 1.4, nina: true })}<path d="M180 150 V100 M160 156 L180 140 L200 156" stroke="var(--ink)" stroke-width="3" fill="none"/><rect x="116" y="30" width="128" height="74" rx="4" fill="#fff" stroke="var(--ink)" stroke-width="2"/>${pentagrama(126, 234, 46, 8)}${negra(150, 70, "var(--ink)")}${negra(180, 62, "var(--ink)")}${negra(210, 74, "var(--ink)")}`),
    },
    {
      html: `<h3>Dibujar los sonidos</h3><p>Antes de usar los símbolos de verdad, podemos <mark>dibujar los sonidos</mark>.</p><p>Un sonido largo se dibuja con una raya larga. Un sonido corto, con un punto. Un sonido fuerte, con un dibujo grande; uno suave, con uno pequeño.</p><p>Si el sonido sube a agudo, la raya sube. Si baja a grave, la raya baja. ¡Así ya escribimos música!</p>`,
      svg: svg("Sonidos dibujados: raya larga, puntos cortos, círculo grande y pequeño, y una raya que sube", `<path d="M20 50 H110" stroke="${P.azul}" stroke-width="6" stroke-linecap="round"/>${etq(65, 74, "largo", P.azul)}${[0, 1, 2, 3].map((i) => `<circle cx="${150 + i * 22}" cy="50" r="5" fill="${P.rojo}"/>`).join("")}${etq(183, 74, "cortos", P.rojo)}<circle cx="40" cy="126" r="20" fill="${P.verde}"/><circle cx="84" cy="132" r="8" fill="${P.verde}"/>${etq(62, 164, "fuerte · suave", P.verde)}<path d="M150 150 Q190 140 230 104" stroke="${P.naranja}" stroke-width="5" fill="none" stroke-linecap="round"/>${etq(190, 164, "sube: agudo", P.naranja)}`),
    },
    {
      html: `<h3>La negra: «ta»</h3><p>La <mark>negra</mark> es una figura con la cabeza rellena y un palito.</p><p>Dura <b>un pulso</b>. La leemos diciendo «ta» y damos una palmada.</p><p>Cuatro negras seguidas suenan «ta, ta, ta, ta», como un reloj que camina tranquilo. Es la figura más importante: con ella llevamos el pulso.</p>`,
      svg: svg("Cuatro negras con la sílaba ta debajo de cada una y una mano dando palmada", `${[0, 1, 2, 3].map((i) => `${negra(46 + i * 56, 96, P.azul)}${etq(50 + i * 56, 132, "ta", P.azul, 18)}`).join("")}${etq(130, 166, "una negra = un pulso", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Dos corcheas: «ti-ti»</h3><p>Las <mark>corcheas</mark> van de dos en dos, unidas por una barra.</p><p>Las dos juntas duran <b>un pulso</b>, igual que una negra. Por eso son más rápidas: dos sonidos en el tiempo de uno.</p><p>Las leemos «ti-ti», con dos palmadas rapiditas. Mezcladas con negras, hacen ritmos divertidos: «ta, ti-ti, ta, ti-ti».</p>`,
      svg: svg("Un ritmo de negra, dos corcheas, negra y dos corcheas con las sílabas ta, ti-ti", `${negra(36, 96, P.azul)}${etq(40, 132, "ta", P.azul, 16)}${corcheas(86, 96, P.rojo, 22)}${etq(100, 132, "ti-ti", P.rojo, 16)}${negra(156, 96, P.azul)}${etq(160, 132, "ta", P.azul, 16)}${corcheas(196, 96, P.rojo, 22)}${etq(210, 132, "ti-ti", P.rojo, 16)}${etq(130, 166, "dos corcheas = un pulso", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>El silencio: «shh»</h3><p>En la música también hay <mark>silencios</mark>: momentos en que no suena nada.</p><p>El <b>silencio de negra</b> dura un pulso, como la negra, pero callados. Tiene forma de rayo o de zigzag.</p><p>Cuando lo leemos, no damos palmada: abrimos las manos y decimos «shh» muy bajito. ¡El silencio también es música!</p>`,
      svg: svg("Un ritmo con ta, ta, silencio y ta; en el silencio una mano abierta y la palabra shh", `${negra(36, 96, P.azul)}${etq(40, 132, "ta", P.azul, 16)}${negra(96, 96, P.azul)}${etq(100, 132, "ta", P.azul, 16)}${silencio(160, 96, P.morado)}${etq(160, 132, "shh", P.morado, 16)}${negra(216, 96, P.azul)}${etq(220, 132, "ta", P.azul, 16)}${etq(130, 166, "silencio = un pulso callado", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Leemos ritmos</h3><p>Ahora <mark>leemos ritmos</mark> de cuatro pulsos, como una frase.</p><p>Primero decimos las sílabas: «ta, ti-ti, ta, shh». Después lo hacemos con palmas. Luego, con un instrumento.</p><p>Podemos tocar en grupo: la mitad de la clase toca un ritmo y la otra mitad otro. ¡Suena como una orquesta de percusión!</p>`,
      svg: svg("Dos tarjetas de ritmo de cuatro pulsos para leer con palmas", `<rect x="14" y="26" width="232" height="60" rx="10" fill="var(--card)" stroke="${P.azul}" stroke-width="2"/>${negra(44, 72, "var(--ink)")}${corcheas(90, 72, "var(--ink)", 22)}${negra(160, 72, "var(--ink)")}${silencio(214, 72, "var(--ink)")}<rect x="14" y="100" width="232" height="60" rx="10" fill="var(--card)" stroke="${P.rojo}" stroke-width="2"/>${corcheas(36, 146, "var(--ink)", 22)}${corcheas(96, 146, "var(--ink)", 22)}${negra(164, 146, "var(--ink)")}${negra(214, 146, "var(--ink)")}`),
    },
    {
      html: `<h3>El pentagrama y la clave de sol</h3><p>Para escribir si un sonido es <b>agudo</b> o <b>grave</b>, usamos el <mark>pentagrama</mark>.</p><p>Tiene <b>cinco líneas</b> y cuatro espacios. Las notas se colocan en las líneas o en los espacios: cuanto más arriba, más aguda.</p><p>Al principio va la <b>clave de sol</b>, un símbolo con forma de caracol. Nos dice cómo se llama cada nota.</p>`,
      svg: svg("Un pentagrama de cinco líneas numeradas con una clave de sol y notas que suben", `${pentagrama(20, 240, 54, 16, "var(--ink)")}${clave(44, 86, 1.05)}${[1, 2, 3, 4, 5].map((n, i) => etq(250, 122 - i * 16, String(n), P.rojo, 10)).join("")}${cabeza(100, 118, P.azul)}${cabeza(140, 102, P.verde)}${cabeza(180, 86, P.naranja)}${cabeza(220, 70, P.rojo)}${etq(150, 164, "más arriba = más agudo", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>Las siete notas</h3><p>Las <mark>notas musicales</mark> son siete: <b>do, re, mi, fa, sol, la, si</b>.</p><p>Las cantamos subiendo como una escalera: do es la más grave y si la más aguda. Después de si, vuelve a empezar do, pero más agudo.</p><p>Con estas siete notas se han escrito todas las canciones que conoces. ¡Solo siete y tantas canciones!</p>`,
      svg: svg("Una escalera de colores con las siete notas: do, re, mi, fa, sol, la, si", `${["do", "re", "mi", "fa", "sol", "la", "si"].map((t, i) => `<rect x="${12 + i * 34}" y="${150 - (i + 1) * 17}" width="34" height="${(i + 1) * 17}" fill="${[P.rojo, P.naranja, P.amarillo, P.verde, P.celeste, P.azul, P.morado][i]}" stroke="var(--ink)" stroke-width="1"/>${etq(29 + i * 34, 168, t, "var(--ink)", 13)}`).join("")}`),
      video: V("mu8b"),
    },
    {
      html: `<h3>Jugamos a componer</h3><p>Cada uno escribe su <mark>propio ritmo</mark> de cuatro pulsos.</p><p>Elegimos para cada pulso una tarjeta: negra, dos corcheas o silencio. Las ponemos en fila y ya tenemos nuestra partitura.</p><p>Después se la damos a un compañero: ¿sabe leerla y tocarla con palmas? Si lo consigue, ¡somos compositores de verdad!</p>`,
      svg: svg("Tarjetas de negra, dos corcheas y silencio que un niño ordena para escribir su ritmo", `${[[negra, P.azul], [corcheas, P.rojo], [silencio, P.morado], [negra, P.azul]].map(([f, c], i) => `<rect x="${18 + i * 58}" y="32" width="50" height="70" rx="8" fill="var(--card)" stroke="${c}" stroke-width="2"/>${f === corcheas ? corcheas(30 + i * 58, 84, c, 20) : f === silencio ? silencio(43 + i * 58, 82, c) : negra(40 + i * 58, 84, c)}`).join("")}${nino(196, 172, { c: P.verde, pose: "arriba", s: 0.75 })}${etq(90, 140, "¡mi ritmo!", "var(--pen)", 15)}`),
    },
  ],
  figura: {
    titulo: "Mi primera partitura",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Figuras musicales con sus sílabas y un pentagrama con clave de sol"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 40, "Leemos música", { size: 22, color: "var(--pen)" })}${negra(90, 130, P.azul)}${rot(94, 170, "ta", { size: 22, color: P.azul })}${rot(94, 196, "1 pulso", { size: 14 })}${corcheas(180, 130, P.rojo, 28)}${rot(198, 170, "ti-ti", { size: 22, color: P.rojo })}${rot(198, 196, "1 pulso", { size: 14 })}${silencio(300, 130, P.morado)}${rot(300, 170, "shh", { size: 22, color: P.morado })}${rot(300, 196, "1 pulso", { size: 14 })}${pentagrama(380, 610, 90, 14, "var(--ink)")}${clave(404, 118, 0.95)}${cabeza(460, 146, P.rojo)}${cabeza(500, 132, P.naranja)}${cabeza(540, 118, P.verde)}${cabeza(580, 104, P.azul)}${rot(495, 196, "do · re · mi · fa · sol · la · si", { size: 15 })}${rot(320, 260, "Las negras, las corcheas y los silencios forman ritmos", { size: 16 })}</svg>`,
  },
  video: V("mu8v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Lee: negra, negra, dos corcheas, negra.",
      pasos: ["Negra es «ta», dos corcheas son «ti-ti».", "Di las sílabas: «ta, ta, ti-ti, ta».", "Hazlo con palmas siguiendo el pulso."],
      resultado: "ta · ta · ti-ti · ta." },
    { enunciado: "Lee: negra, silencio, negra, silencio.",
      pasos: ["La negra es palmada: «ta».", "El silencio es callar: «shh».", "Cada uno dura un pulso."],
      resultado: "ta · shh · ta · shh." },
    { enunciado: "¿Qué nota está más arriba en el pentagrama, la grave o la aguda?",
      pasos: ["El pentagrama ordena los sonidos de abajo a arriba.", "Arriba van los sonidos agudos.", "Abajo van los graves."],
      resultado: "La nota aguda está más arriba." },
  ],
  errores: [
    "Pensar que dos corcheas duran dos pulsos: duran uno entre las dos.",
    "Dar palmada en el silencio: el silencio se calla.",
    "Contar seis líneas en el pentagrama: tiene cinco.",
    "Leer la partitura de derecha a izquierda: se lee como un libro.",
  ],
  ejercicios: [
    { q: "¿Qué es una partitura?", sol: "Un papel donde está escrita la música." },
    { q: "¿Cuánto dura una negra? ¿Cómo se lee?", sol: "Un pulso. Se lee «ta»." },
    { q: "¿Cuánto duran dos corcheas juntas?", sol: "Un pulso. Se leen «ti-ti»." },
    { q: "¿Qué es el silencio de negra?", sol: "Un pulso sin sonido. Se dice «shh» sin palmada." },
    { q: "Lee y toca: ta, ti-ti, ta, shh.", sol: "Palmada, dos palmadas rápidas, palmada, silencio." },
    { q: "¿Cuántas líneas tiene el pentagrama?", sol: "Cinco." },
    { q: "¿Para qué sirve la clave de sol?", sol: "Para saber cómo se llama cada nota." },
    { q: "Di las siete notas en orden.", sol: "Do, re, mi, fa, sol, la, si." },
    { q: "¿Cuál es más aguda, do o sol?", sol: "Sol." },
    { q: "Escribe tu propio ritmo de cuatro pulsos y tócalo.", sol: "Respuesta libre, con negras, corcheas y silencios." },
  ],
  quiz: [
    { q: "La negra se lee…", o: ["ta", "ti-ti", "shh"], a: 0, e: "Ta." },
    { q: "Dos corcheas se leen…", o: ["ti-ti", "ta", "bum"], a: 0, e: "Ti-ti." },
    { q: "El silencio se lee…", o: ["shh", "ta", "ti-ti"], a: 0, e: "Shh." },
    { q: "Una negra dura…", o: ["un pulso", "dos pulsos", "nada"], a: 0, e: "Un pulso." },
    { q: "Dos corcheas juntas duran…", o: ["un pulso", "dos pulsos", "cuatro"], a: 0, e: "Un pulso." },
    { q: "El pentagrama tiene…", o: ["cinco líneas", "tres líneas", "diez líneas"], a: 0, e: "Cinco." },
    { q: "En el pentagrama, arriba van los sonidos…", o: ["agudos", "graves", "fuertes"], a: 0, e: "Agudos." },
    { q: "Las notas musicales son…", o: ["siete", "cinco", "veinte"], a: 0, e: "Do, re, mi, fa, sol, la, si." },
    { q: "La primera nota es…", o: ["do", "si", "sol"], a: 0, e: "Do." },
    { q: "Una partitura se lee…", o: ["de izquierda a derecha", "al revés", "de abajo arriba"], a: 0, e: "Como un libro." },
  ],
  examen: [
    { q: "La negra tiene la cabeza…", o: ["rellena", "vacía", "cuadrada"], a: 0, e: "Rellena." },
    { q: "La clave de sol va…", o: ["al principio del pentagrama", "al final", "debajo"], a: 0, e: "Al principio." },
    { q: "Después de la nota si viene…", o: ["do", "la", "fa"], a: 0, e: "Vuelve a empezar do." },
    { q: "Un sonido largo se puede dibujar con…", o: ["una raya larga", "un punto", "nada"], a: 0, e: "Raya larga." },
  ],
  feynman: ["Qué es una partitura y para qué sirve", "Cómo se leen la negra, las corcheas y el silencio", "Qué son el pentagrama, la clave de sol y las siete notas"],
  mapa: mapa("PARTITURA", "var(--pri)", [
    ["Negra", "ta: un pulso", "#1e88e5"],
    ["Corcheas", "ti-ti: un pulso", "#e53935"],
    ["Silencio", "shh: un pulso callado", "#8e24aa"],
    ["Pentagrama", "5 líneas, clave de sol", "#43a047"],
  ], 230),
  tarjetas: [
    ["Partitura", "Papel con la música escrita"],
    ["Negra", "«Ta»: un pulso"],
    ["Dos corcheas", "«Ti-ti»: un pulso"],
    ["Silencio de negra", "«Shh»: un pulso callado"],
    ["Pentagrama", "Cinco líneas y cuatro espacios"],
    ["Clave de sol", "Dice el nombre de las notas"],
    ["Notas", "Do, re, mi, fa, sol, la, si"],
    ["Arriba", "Notas agudas; abajo, graves"],
  ],
  familias: [
    "Escribid juntos ritmos con tarjetas de negra, corcheas y silencio.",
    "Leed un ritmo y tocadlo con cucharas o palmas.",
    "Cantad las siete notas subiendo y bajando como una escalera.",
    "Buscad una partitura de verdad y contad las líneas del pentagrama.",
  ],
  profesores: PROF("Música: grafía no convencional y convencional; figuras (negra, pareja de corcheas, silencio de negra) y sílabas rítmicas; pentagrama, clave de sol y nombre de las notas; lectura y creación de ritmos de cuatro pulsos", ["Grafías no convencionales para sonidos largos, cortos, fuertes y suaves.", "Lectura rítmica con sílabas y percusión corporal.", "Composición de ritmos con tarjetas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Saber por qué se escribe la música", "Conocer la blanca, que dura dos pulsos", "Situar notas en líneas y espacios del pentagrama", "Leer y tocar ritmos y notas sencillas"],
  lectura: { titulo: "El monje que no quería olvidar", html: `<p>Hace mil años, en un monasterio de Italia, vivía un monje llamado <b>Guido</b>. Su trabajo era enseñar canciones a los niños del coro.</p><p>Pero había un problema: las canciones no se escribían. Había que aprenderlas de memoria, escuchándolas una y otra vez. ¡Tardaban años en aprender todas!</p><p>—Si se nos olvida una canción, se pierde para siempre —pensaba Guido, preocupado.</p><p>Una noche, a la luz de una vela, tuvo una idea. Dibujó unas <b>líneas</b> horizontales y colocó puntos encima: si el sonido era agudo, el punto iba <b>arriba</b>; si era grave, iba <b>abajo</b>.</p><p>Además, puso un nombre a cada nota con las primeras sílabas de una canción: <b>ut, re, mi, fa, sol, la</b>. Mucho después, «ut» se cambió por «do».</p><p>Con su invento, los niños aprendían en pocos días. Y lo mejor: las canciones ya nunca se olvidarían, porque estaban escritas.</p><p>Hoy, músicos de todo el mundo siguen leyendo partituras gracias a la idea de Guido.</p>` },
  tras: {
    "La música se escribe": [
      ["Guido y el nombre de las notas", `<p>Antes, la música no se escribía: se aprendía de <mark>memoria</mark>. Un monje italiano llamado <b>Guido de Arezzo</b> inventó, hace unos mil años, una forma de escribirla.</p><ul><li>Dibujó <b>líneas</b> para colocar las notas.</li><li>Las notas <b>agudas</b> iban arriba y las <b>graves</b>, abajo.</li><li>Dio nombre a las notas con las sílabas de una canción: <b>ut, re, mi, fa, sol, la</b>.</li><li>Más tarde, «ut» pasó a ser <b>do</b> y se añadió el <b>si</b>.</li></ul><p>Gracias a la escritura musical, hoy podemos tocar canciones compuestas hace cientos de años, como si las escucháramos de sus autores.</p><p>Una partitura es como un libro de música: quien sabe leerla puede tocar la canción aunque nunca la haya oído.</p><p><b>Actividad</b>: canta las notas despacio, subiendo la mano a cada nota: do, re, mi, fa, sol, la, si, do.</p>`,
        L6.filas("Notas", [["antes", "de memoria", cNA], ["Guido", "líneas", cAZ], ["ut", "ahora do", cVE], ["hoy", "partituras", cMO]])],
    ],
    "Leemos ritmos": [
      ["La blanca: «ta-a»", `<p>Ya conocemos la negra («ta»), las dos corcheas («ti-ti») y el silencio («shh»). Ahora aprendemos una figura nueva: la <mark>blanca</mark>.</p><ul><li>La blanca es una nota <b>hueca</b>, sin rellenar, con una plica.</li><li>Dura <b>dos pulsos</b>: lo mismo que dos negras.</li><li>La decimos «<b>ta-a</b>», alargando el sonido.</li><li>Al tocarla, damos una palmada y <b>esperamos</b> un pulso más con las manos juntas.</li></ul><p>Las figuras son como una familia: la blanca es la más lenta, la negra va al paso y las corcheas corren.</p><p>Un ritmo con blancas suena tranquilo; un ritmo con muchas corcheas suena movido.</p><p><b>Actividad</b>: lee y da palmas a este ritmo: ta, ta, ta-a; ti-ti, ti-ti, ta-a.</p>`,
        H6.flujo("Figuras", ["blanca|ta-a", "negra|ta", "corcheas|ti-ti", "silencio|shh"], cAZ),
        ["gFC55ayyaDo", "Iniciación a la lectura rítmica con palabras", "Angela Rodes", 704987]],
    ],
    "El pentagrama y la clave de sol": [
      ["Líneas y espacios", `<p>El <mark>pentagrama</mark> tiene <b>cinco líneas</b> y <b>cuatro espacios</b> entre ellas. Las líneas y los espacios se cuentan siempre <b>de abajo arriba</b>.</p><ul><li>Una nota puede estar <b>en una línea</b>: la línea le atraviesa el centro.</li><li>O puede estar <b>en un espacio</b>: entre dos líneas, sin tocarlas por dentro.</li><li>Cuanto <b>más arriba</b> está la nota, más <b>aguda</b> suena.</li><li>Cuanto <b>más abajo</b>, más <b>grave</b>.</li></ul><p>Con la clave de sol, la nota de la <b>segunda línea</b> se llama <b>sol</b>. La clave se empieza a dibujar justo en esa línea, haciendo un caracol.</p><p>Si una nota no cabe en el pentagrama, se le añade una rayita pequeña: así se escribe el <b>do</b> grave, debajo de todo.</p><p><b>Actividad</b>: usa tu mano como pentagrama: los cinco dedos son las líneas y los huecos entre ellos, los espacios.</p>`,
        H6.dos("Pentagrama", ["LÍNEAS", ["son cinco", "nota cruzada", "1ª abajo"], cAZ], ["ESPACIOS", ["son cuatro", "nota entre dos", "1º abajo"], cVE])],
    ],
    "Las siete notas": [
      ["La escala sube y baja", `<p>Cuando cantamos las siete notas seguidas, de grave a agudo, hacemos una <mark>escala</mark>: do, re, mi, fa, sol, la, si… ¡y otra vez do, más agudo!</p><ul><li>La escala <b>sube</b> como una escalera: cada nota es un escalón.</li><li>También puede <b>bajar</b>: do, si, la, sol, fa, mi, re, do.</li><li>En el pentagrama, cada nota se coloca un poco más arriba que la anterior: línea, espacio, línea, espacio…</li><li>En el xilófono, las láminas de la escala van de la <b>más larga</b> (grave) a la <b>más corta</b> (aguda).</li></ul><p>Muchas canciones conocidas usan solo unas pocas notas: <b>mi, sol y la</b> bastan para cantar canciones de corro.</p><p>En algunos países usan letras en vez de sílabas: C es do, D es re, E es mi…</p><p><b>Actividad</b>: subid y bajad la escala con el cuerpo: do en los pies, re en las rodillas, mi en la cintura… y si en las manos estiradas.</p>`,
        L6.filas("Escala", [["do", "pies", cRO], ["mi", "cintura", cNA], ["sol", "hombros", cVE], ["si", "manos arriba", cAZ]])],
    ],
  },
  final: [
    ["Del papel al instrumento", `<p>Para tocar una partitura sencilla, sigue estos <mark>pasos</mark>:</p><ul><li><b>Mira</b> la clave: si es de sol, ya sabes dónde está cada nota.</li><li><b>Lee el ritmo</b> en voz alta: ta, ti-ti, ta-a, shh.</li><li><b>Di el nombre</b> de las notas: mi, sol, sol, mi…</li><li><b>Canta</b> la canción despacio, con los nombres de las notas.</li><li><b>Toca</b> en el xilófono o el metalófono buscando cada lámina.</li><li>Cuando te salga bien, <b>acelera</b> poco a poco.</li></ul><p>Los músicos de verdad también aprenden así: primero despacio y por partes, y luego juntan todo.</p><p>Equivocarse es parte de aprender: si fallas una nota, respira y vuelve a empezar desde el principio de la frase.</p><p><b>Actividad</b>: toca en el xilófono esta melodía: sol, mi, sol, mi, sol, sol, mi.</p>`,
      H6.flujo("Tocar", ["leer|ritmo", "nombrar|notas", "cantar|despacio", "tocar|xilófono"], cMO)],
    ["Repaso: el monje Guido", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Guido vivía en un <b>monasterio</b> de Italia, hace mil años.</li><li>Las canciones se aprendían de <b>memoria</b> y podían olvidarse.</li><li>Dibujó <b>líneas</b> y puso puntos: agudos arriba, graves abajo.</li><li>Nombró las notas: <b>ut, re, mi, fa, sol, la</b>.</li><li>El «ut» se cambió después por <b>do</b>.</li><li>Gracias a él, los niños aprendían en <b>días</b>, no en años.</li></ul><p>Escribir la música es tan importante como escribir las palabras: así nada se pierde.</p><p><b>Actividad</b>: inventa tu propia forma de escribir tres sonidos y enséñasela a un compañero para que la toque.</p>`,
      H6.flujo("Guido", ["olvidar|problema", "líneas|idea", "ut re mi|nombres", "partitura|hoy"], cNA)],
  ],
  ejemplos: [
    ["¿Cuántos pulsos duran una blanca y una negra juntas?", ["Blanca 2 + negra 1."], "Tres pulsos."],
    ["Una nota en el quinto espacio, ¿existe?", ["El pentagrama tiene cuatro espacios."], "No: solo hay cuatro espacios."],
  ],
  errores: ["Contar las líneas de arriba abajo.", "Tocar la blanca igual de corta que la negra."],
  ejercicios: [
    ["b", "¿Cuántas líneas tiene el pentagrama?", "Cinco."],
    ["b", "¿Cuántos pulsos dura la blanca?", "Dos."],
    ["b", "¿Cómo decimos la blanca?", "Ta-a."],
    ["b", "¿Quién puso nombre a las notas?", "Guido de Arezzo."],
    ["b", "Di las siete notas.", "Do, re, mi, fa, sol, la, si."],
    ["m", "¿Cuántos espacios tiene el pentagrama?", "Cuatro."],
    ["m", "¿Cómo se llamaba antes el do?", "Ut."],
    ["m", "¿Cómo es la blanca por dentro?", "Hueca."],
    ["m", "¿Qué nota está en la segunda línea con clave de sol?", "Sol."],
    ["m", "¿Qué es una escala?", "Las notas seguidas de grave a agudo o al revés."],
    ["a", "¿Cuántos pulsos suman: blanca, negra, dos corcheas?", "Cuatro."],
    ["a", "En la lectura, ¿qué problema quería resolver Guido?", "Que las canciones se olvidaran."],
    ["a", "¿Por qué es útil escribir la música?", "Para no olvidarla y que otros la toquen."],
    ["a", "Escribe un ritmo de cuatro pulsos con una blanca.", "Ejemplo: ta-a, ta, ti-ti."],
  ],
  quiz: [
    ["La blanca dura…", ["dos pulsos", "un pulso", "medio pulso"], "La blanca."],
    ["Las líneas se cuentan…", ["de abajo arriba", "de arriba abajo", "al azar"], "Líneas y espacios."],
    ["Guido era…", ["un monje", "un rey", "un pirata"], "Guido."],
    ["El pentagrama tiene… espacios", ["cuatro", "cinco", "siete"], "Líneas y espacios."],
    ["Una escala sube como…", ["una escalera", "un río", "un globo"], "La escala."],
  ],
  examen: [
    ["En la lectura, las notas agudas iban…", ["arriba", "abajo", "al lado"], "Lectura."],
    ["«Ut» se cambió por…", ["do", "si", "sol"], "Repaso."],
  ],
  tarjetas: [
    ["Blanca", "Nota hueca que dura dos pulsos: ta-a."],
    ["Pentagrama", "Cinco líneas y cuatro espacios, contados desde abajo."],
  ],
  glosario: [
    ["Blanca", "Figura hueca de dos pulsos."],
    ["Línea", "Cada una de las cinco rayas del pentagrama."],
    ["Espacio", "Hueco entre dos líneas."],
    ["Escala", "Notas seguidas que suben o bajan."],
    ["Monasterio", "Casa donde viven monjes."],
    ["Guido", "Monje que dio nombre a las notas."],
    ["Melodía", "Notas seguidas que forman una canción."],
    ["Lámina", "Pieza del xilófono que se golpea."],
    ["Figura", "Signo que indica cuánto dura un sonido."],
    ["Componer", "Inventar una música."],
  ],
  situacion: {
    titulo: "Nuestra primera canción escrita",
    reto: "Cada grupo compone una melodía corta, la escribe en un pentagrama grande y otro grupo la toca.",
    pasos: ["Elegir tres notas: mi, sol y la.", "Inventar un ritmo de ocho pulsos con negras, corcheas y blancas.", "Escribirlo en un pentagrama dibujado en cartulina.", "Intercambiar partituras y tocar la de otro grupo."],
    producto: "Una partitura de la clase y su interpretación.",
    evaluacion: ["Conoce la blanca.", "Sitúa notas en líneas y espacios.", "Lee un ritmo sencillo.", "Toca una melodía escrita."],
  },
});
