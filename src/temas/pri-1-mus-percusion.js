// Música 1º de Primaria: instrumentos de percusión.
const { mapa } = require("./_util");
const { svg, rot, big, nino, tambor, nota, suelo, PROF, FUENTES } = require("./_pri1-dib");

const MADERA = "#a8763a";
const etq = (x, y, t, c = "var(--muted)", size = 12) => rot(x, y, t, { size, color: c });
const pandero = (x, y, r = 30) => `<g><circle cx="${x}" cy="${y}" r="${r}" fill="var(--card)" stroke="${MADERA}" stroke-width="7"/>${[0, 60, 120, 180, 240, 300].map((a) => `<circle cx="${(x + Math.cos((a * Math.PI) / 180) * r).toFixed(1)}" cy="${(y + Math.sin((a * Math.PI) / 180) * r).toFixed(1)}" r="4" fill="var(--sun)" stroke="var(--ink)" stroke-width="1"/>`).join("")}</g>`;
const triangulo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-4 -40 L-26 0 H24 L4 -40" stroke="#9aa5c0" stroke-width="4" fill="none" stroke-linejoin="round"/><path d="M0 -40 V-52" stroke="var(--red)" stroke-width="2"/><path d="M14 -30 L40 -10" stroke="#9aa5c0" stroke-width="3"/></g>`;
const maraca = (x, y, c = "var(--red)", rot0 = -20) => `<g transform="translate(${x} ${y}) rotate(${rot0})"><ellipse cx="0" cy="-24" rx="13" ry="17" fill="${c}"/><rect x="-3" y="-8" width="6" height="26" rx="3" fill="${MADERA}"/><path d="M-8 -30 q8 -6 16 0" stroke="var(--sun)" stroke-width="2.5" fill="none"/></g>`;
const claves = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-30" y="-6" width="56" height="10" rx="5" fill="${MADERA}" transform="rotate(-25)"/><rect x="-26" y="-6" width="56" height="10" rx="5" fill="${MADERA}" transform="rotate(25)"/></g>`;
const castanuelas = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-22 0 a20 20 0 1 1 20 -20 v8 a12 12 0 1 0 -12 12z" fill="#7a3f1a"/><path d="M2 0 a20 20 0 1 1 20 -20" stroke="var(--red)" stroke-width="3" fill="none"/></g>`;
const platillos = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="-16" cy="0" rx="8" ry="26" fill="var(--sun)" stroke="#c48a00" stroke-width="2"/><ellipse cx="16" cy="0" rx="8" ry="26" fill="var(--sun)" stroke="#c48a00" stroke-width="2"/><circle cx="-16" cy="0" r="3" fill="#c48a00"/><circle cx="16" cy="0" r="3" fill="#c48a00"/></g>`;
const cascabeles = (x, y) => `<g transform="translate(${x} ${y})"><path d="M-26 0 H26" stroke="var(--red)" stroke-width="5" stroke-linecap="round"/>${[-18, -6, 6, 18].map((d) => `<circle cx="${d}" cy="8" r="6" fill="var(--sun)" stroke="#c48a00" stroke-width="1.5"/>`).join("")}</g>`;
const guiro = (x, y) => `<g transform="translate(${x} ${y})"><ellipse rx="34" ry="12" fill="var(--leaf)"/>${[-20, -12, -4, 4, 12, 20].map((d) => `<path d="M${d} -10 V10" stroke="#1d6b2e" stroke-width="2"/>`).join("")}<path d="M-30 -24 L30 -16" stroke="${MADERA}" stroke-width="4" stroke-linecap="round"/></g>`;
const botella = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-16" y="-50" width="32" height="50" rx="8" fill="var(--water)" opacity=".35" stroke="var(--water)" stroke-width="2"/><rect x="-7" y="-62" width="14" height="12" rx="2" fill="var(--red)"/>${[[-8, -8], [0, -6], [8, -9], [-4, -14], [4, -15], [-10, -16], [10, -18]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="2.5" ry="1.5" fill="#f1e3c0"/>`).join("")}</g>`;

module.exports = {
  materia: "Música",
  curso: "1-primaria",
  titulo: "Instrumentos de percusión",
  minutos: 20,
  objetivos: ["Reconocer instrumentos de percusión y su sonido", "Saber cómo se tocan: golpear, sacudir, entrechocar y raspar", "Acompañar canciones con instrumentos sencillos"],
  claves: ["percusión", "tambor", "pandero", "triángulo", "maracas", "castañuelas", "golpear"],
  pregunta: {
    texto: "Da golpes suaves en la mesa con los dedos. ¿Has hecho música?",
    respuesta: "¡Sí! Golpear para hacer sonar algo es tocar <mark>percusión</mark>. Los instrumentos de percusión se tocan golpeando, sacudiendo o raspando.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la percusión?</h3><p>Los instrumentos de <mark>percusión</mark> suenan cuando los <b>golpeamos</b>. También al <b>sacudirlos</b> o <b>rasparlos</b>.</p><p>Son los instrumentos más antiguos. Hace miles de años, ya se golpeaban troncos y piedras para hacer música.</p><p>Los instrumentos de percusión marcan muy bien el <b>ritmo</b> de una canción.</p><p>¡Seguro que ya has tocado alguno!</p>`,
      svg: svg("Un niño toca un tambor con una baqueta y salen notas", `${nino(70, 150, { c: "var(--pen)", pose: "palmas", s: 1.2 })}${tambor(140, 140, 1.4)}<path d="M92 92 L124 106" stroke="${MADERA}" stroke-width="4" stroke-linecap="round"/><circle cx="126" cy="107" r="4" fill="var(--red)"/>${nota(196, 70, "var(--red)")}${nota(226, 54, "var(--inf)")}${suelo(150)}${rot(130, 172, "¡Pom, pom, pom!", { color: "var(--red)", size: 15 })}`),
    },
    {
      html: `<h3>El tambor y el pandero</h3><p>El <mark>tambor</mark> tiene una <b>piel</b> estirada. Al golpearla, vibra y suena «pom, pom». Se toca con las manos o con baquetas.</p><p>El <mark>pandero</mark> es redondo y también tiene piel. La <b>pandereta</b> lleva además unas chapitas de metal. Cuando la mueves, ¡tintinean!</p><p>Prueba a tocar la pandereta golpeando y sacudiendo.</p>`,
      svg: svg("Un tambor con dos baquetas y una pandereta con chapitas", `${tambor(70, 140, 1.6)}<path d="M50 70 L64 96 M96 70 L80 96" stroke="${MADERA}" stroke-width="4" stroke-linecap="round"/>${pandero(186, 96, 34)}${etq(70, 166, "tambor", "var(--red)", 14)}${etq(186, 166, "pandereta", MADERA, 14)}`),
    },
    {
      html: `<h3>Instrumentos de madera</h3><p>Algunos instrumentos están hechos de <mark>madera</mark>. Suenan secos: «toc, toc».</p><p>Las <b>claves</b> son dos palitos que se chocan. La <b>caja china</b> es un bloque hueco que se golpea.</p><p>Las <b>castañuelas</b> son muy típicas de España. Se tocan con los dedos en bailes como la jota.</p><p>¡Prueba a imitar su sonido con la lengua!</p>`,
      svg: svg("Unas claves de madera cruzadas y unas castañuelas", `${claves(80, 90)}${castanuelas(184, 100)}${etq(80, 140, "claves", MADERA, 14)}${etq(184, 140, "castañuelas", "#7a3f1a", 14)}${rot(130, 168, "toc, toc", { color: MADERA, size: 15 })}`),
    },
    {
      html: `<h3>Instrumentos de metal</h3><p>Otros instrumentos son de <mark>metal</mark>. Su sonido brilla y dura más tiempo.</p><p>El <b>triángulo</b> se cuelga de un hilo. Se golpea con una varilla: «tiiiin».</p><p>Los <b>platillos</b> son dos discos que se chocan: «¡chas!». Los <b>cascabeles</b> suenan al moverlos. ¡Nos recuerdan a la Navidad!</p><p>Hay que tocarlos con cuidado.</p>`,
      svg: svg("Un triángulo con su varilla, unos platillos y unos cascabeles", `${triangulo(54, 120)}${platillos(134, 90)}${cascabeles(210, 84)}${etq(54, 146, "triángulo", "var(--muted)", 13)}${etq(134, 146, "platillos", "#c48a00", 13)}${etq(210, 146, "cascabeles", "var(--red)", 13)}${rot(130, 170, "tiiin · ¡chas!", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>Instrumentos que se sacuden</h3><p>Hay instrumentos que suenan al <mark>sacudirlos</mark>.</p><p>Las <b>maracas</b> tienen dentro semillas o bolitas. Al moverlas hacen «chss, chss».</p><p>El <b>palo de lluvia</b> es un tubo largo. Al girarlo, suena como cuando llueve. Los bebés tienen sonajeros, que funcionan igual. ¡Es su primer instrumento!</p><p>Prueba a sacudir despacio y deprisa.</p>`,
      svg: svg("Dos maracas de colores y un palo de lluvia", `${maraca(56, 130, "var(--red)", -20)}${maraca(96, 130, "var(--leaf)", 20)}<rect x="140" y="80" width="100" height="20" rx="10" fill="#c99a5b" transform="rotate(-20 190 90)"/>${[0, 1, 2, 3, 4].map((i) => `<circle cx="${156 + i * 16}" cy="${100 - i * 6}" r="2" fill="${MADERA}"/>`).join("")}${etq(76, 158, "maracas", "var(--red)", 14)}${etq(190, 140, "palo de lluvia", MADERA, 13)}${rot(76, 50, "chss, chss", { color: "var(--muted)", size: 14 })}`),
    },
    {
      html: `<h3>¿Cómo se tocan?</h3><p>Hay <mark>cuatro formas</mark> de tocar la percusión.</p><p><b>Golpear</b>: el tambor y el triángulo. <b>Sacudir</b>: las maracas y los cascabeles.</p><p><b>Entrechocar</b>: chocar dos piezas, como las claves o los platillos.</p><p><b>Raspar</b>: frotar con un palito, como el <b>güiro</b>, que tiene rayas.</p><p>¿Sabes ya cómo se toca cada uno? Intenta decirlo sin mirar.</p>`,
      svg: svg("Cuatro tarjetas: golpear con un tambor, sacudir con una maraca, entrechocar con platillos y raspar con un güiro", `${[[tambor(0, 16, 0.7), "golpear"], [maraca(0, 16, "var(--red)", 0), "sacudir"], [`<g transform="scale(.7)">${platillos(0, 0)}</g>`, "chocar"], [`<g transform="scale(.6)">${guiro(0, 10)}</g>`, "raspar"]].map(([d, t], i) => `<rect x="${12 + i * 61}" y="30" width="54" height="100" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><g transform="translate(${39 + i * 61} 76)">${d}</g>${etq(39 + i * 61, 120, t, "var(--pen)", 11)}`).join("")}${rot(130, 160, "Cuatro formas de tocar", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>Fabrica tu instrumento</h3><p>¡Podemos <mark>fabricar</mark> instrumentos con cosas de casa!</p><p>Una <b>maraca</b>: echa un puñado de arroz en una botella pequeña y ciérrala bien.</p><p>Un <b>tambor</b>: usa un bote vacío. Golpéalo con una cuchara de madera. Con dos tapas de cazuela tienes unos platillos. ¡Pide ayuda a un adulto!</p><p>¡Ya tienes tu banda!</p>`,
      svg: svg("Una botella con arroz como maraca y un bote con una cuchara de madera como tambor", `${botella(70, 140)}<g transform="translate(180 140)"><rect x="-26" y="-44" width="52" height="44" rx="4" fill="var(--inf)"/><ellipse cx="0" cy="-44" rx="26" ry="7" fill="#c99a5b"/></g><path d="M214 54 L192 92" stroke="${MADERA}" stroke-width="5" stroke-linecap="round"/><ellipse cx="216" cy="50" rx="6" ry="9" fill="${MADERA}" transform="rotate(30 216 50)"/>${etq(70, 160, "maraca", "var(--water)", 13)}${etq(180, 160, "tambor", "var(--inf)", 13)}${rot(130, 30, "Con cosas de casa", { color: "var(--pen)", size: 14 })}`),
    },
    {
      html: `<h3>¿Para qué sirve? Llevar el ritmo</h3><p>La percusión <mark>lleva el ritmo</mark> en las orquestas y en las bandas.</p><p>En las fiestas de los pueblos hay tambores y bombos. En Cataluña hay grupos de <b>batucada</b>.</p><p>Con un pandero o unas maracas podemos acompañar las canciones de clase. ¡Suenan mucho mejor!</p><p>Y en los grupos de rock, la batería.</p>`,
      svg: svg("Tres niños tocan en una banda: tambor, maracas y triángulo", `${nino(50, 150, { c: "var(--red)", pose: "palmas" })}${tambor(50, 132, 0.8)}${nino(130, 150, { c: "var(--leaf)", pose: "arriba", nina: true })}${maraca(114, 84, "var(--red)", -55)}${maraca(146, 84, "var(--sun)", 55)}${nino(210, 150, { c: "var(--pen)", pose: "palmas" })}${triangulo(222, 110, 0.6)}${suelo(150)}${rot(130, 172, "¡La banda de clase!", { color: "var(--pen)" })}`),
      video: { id: "UR9yJ0WtEEs", titulo: "Juegos de ritmo: Samba Reggae Show", canal: "La Bombocova", vistas: 6130604 },
    },
    {
      html: `<h3>Juego: ¿qué instrumento suena?</h3><p>Ponemos varios instrumentos detrás de una <mark>cortina</mark>.</p><p>Alguien toca uno sin que lo veamos. ¿Es el <b>tambor</b>, el <b>triángulo</b> o las <b>maracas</b>?</p><p>Quien acierte, toca el siguiente. Pista: el metal suena brillante y la madera suena seco. La piel hace «pom». ¡Escucha bien!</p><p>Luego, todos tocan juntos.</p>`,
      svg: svg("Una cortina con un signo de interrogación y tres instrumentos debajo para elegir", `<rect x="40" y="20" width="180" height="70" fill="var(--red)" opacity=".8"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${56 + i * 30} 20 V90" stroke="#a3221b" stroke-width="2"/>`).join("")}${big(130, 72, "?", "#fff", 40)}${tambor(60, 150, 0.7)}${triangulo(130, 150, 0.7)}${maraca(204, 140, "var(--leaf)", -10)}${etq(60, 172, "tambor")}${etq(130, 172, "triángulo")}${etq(204, 172, "maracas")}`),
    },
  ],
  figura: {
    titulo: "La familia de la percusión",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Tres grupos de instrumentos de percusión: de piel (tambor y pandereta), de madera (claves y castañuelas) y de metal (triángulo y platillos), más las maracas que se sacuden">
      <rect width="640" height="300" rx="16" fill="var(--paper)"/>
      ${[["PIEL", "suena «pom»", `${tambor(-40, 30, 1.3)}${pandero(46, 4, 26)}`, "var(--red)"], ["MADERA", "suena «toc»", `${claves(-36, 0)}${castanuelas(44, 10)}`, MADERA], ["METAL", "suena «tiiin»", `${triangulo(-40, 28, 1)}${platillos(46, 0)}`, "#c48a00"]].map(([t, d, dib, c], i) => {
        const x = 20 + i * 205;
        return `<rect x="${x}" y="20" width="190" height="260" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${big(x + 95, 60, t, c, 26)}<g transform="translate(${x + 95} 150) scale(1.45)">${dib}</g>${rot(x + 95, 250, d, { size: 16 })}`;
      }).join("")}
    </svg>`,
  },
  video: { id: "0cXfbb39VQ4", titulo: "Aprende los instrumentos musicales: viento, cuerda y percusión", canal: "Smile and Learn - Español", vistas: 7481769, megusta: 0, busqueda: "instrumentos de percusión para niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cómo se toca el triángulo?",
      pasos: ["Lo sujetamos colgado de su hilo.", "Cogemos la varilla de metal.", "Golpeamos un lado del triángulo con la varilla."],
      resultado: "se toca golpeándolo con una varilla." },
    { enunciado: "¿De qué material son las castañuelas? ¿Cómo suenan?",
      pasos: ["Miramos el color y la forma: son de madera.", "Los instrumentos de madera suenan secos.", "Hacen «tac, tac» al chocar."],
      resultado: "son de madera y suenan secas: «tac, tac»." },
    { enunciado: "¿Cómo hacemos una maraca en casa?",
      pasos: ["Buscamos una botella pequeña de plástico.", "Echamos dentro un puñado de arroz o lentejas.", "La cerramos bien y la sacudimos."],
      resultado: "una botella con arroz que suena al sacudirla." },
  ],
  errores: [
    "Golpear muy fuerte el tambor: suena mejor con golpes firmes pero suaves.",
    "Agarrar el triángulo con la mano: así no vibra; hay que colgarlo del hilo.",
    "Pensar que todos los instrumentos de percusión se golpean: algunos se sacuden o se raspan.",
    "Tocar sin escuchar la canción: la percusión debe seguir el pulso.",
  ],
  ejercicios: [
    { q: "Da golpes con los dedos en la mesa siguiendo una canción.", sol: "Golpes suaves al pulso de la canción." },
    { q: "Di tres instrumentos de percusión.", sol: "Por ejemplo: tambor, triángulo y maracas." },
    { q: "¿Qué tiene el tambor que vibra al golpearlo?", sol: "La piel (o parche)." },
    { q: "¿Cómo suena un instrumento de madera?", sol: "Seco: «toc, toc»." },
    { q: "¿Qué instrumento de metal tiene forma de triángulo?", sol: "El triángulo." },
    { q: "¿Cómo se tocan las maracas?", sol: "Sacudiéndolas." },
    { q: "Di las cuatro formas de tocar la percusión.", sol: "Golpear, sacudir, entrechocar y raspar." },
    { q: "Fabrica una maraca con una botella y arroz.", sol: "Con ayuda de un adulto, bien cerrada." },
    { q: "¿Qué instrumento típico de España se toca con los dedos?", sol: "Las castañuelas." },
    { q: "Acompaña «Los pollitos dicen» con palmas o una maraca.", sol: "Siguiendo el pulso de la canción." },
  ],
  quiz: [
    { q: "Los instrumentos de percusión suenan al…", o: ["golpearlos o sacudirlos", "soplarlos", "mirarlos"], a: 0, e: "Golpear, sacudir, chocar o raspar." },
    { q: "El tambor tiene…", o: ["una piel", "cuerdas", "teclas"], a: 0, e: "La piel vibra al golpearla." },
    { q: "La pandereta tiene…", o: ["chapitas de metal", "agua", "botones"], a: 0, e: "Por eso tintinea." },
    { q: "Las claves son de…", o: ["madera", "cristal", "papel"], a: 0, e: "Dos palitos de madera." },
    { q: "Las castañuelas son típicas de…", o: ["España", "la Luna", "el Polo Norte"], a: 0, e: "Se usan en bailes españoles." },
    { q: "El triángulo es de…", o: ["metal", "madera", "tela"], a: 0, e: "Suena brillante: «tiiin»." },
    { q: "Las maracas se tocan…", o: ["sacudiéndolas", "soplando", "pisándolas"], a: 0, e: "Chss, chss." },
    { q: "El güiro se toca…", o: ["raspando", "soplando", "pellizcando"], a: 0, e: "Con un palito sobre sus rayas." },
    { q: "Los platillos se tocan…", o: ["chocándolos", "sacudiéndolos", "raspándolos"], a: 0, e: "¡Chas!" },
    { q: "Una botella con arroz puede ser…", o: ["una maraca", "un violín", "una flauta"], a: 0, e: "Suena al sacudirla." },
  ],
  examen: [
    { q: "¿Qué instrumento es de percusión?", o: ["El tambor", "La flauta", "La guitarra"], a: 0, e: "Se golpea." },
    { q: "¿Cómo suena la madera?", o: ["Seca: toc, toc", "Larga: tiiin", "Como el agua"], a: 0, e: "Toc, toc." },
    { q: "¿Qué se hace con el güiro?", o: ["Raspar", "Soplar", "Cantar"], a: 0, e: "Se raspa." },
    { q: "La percusión sirve sobre todo para…", o: ["llevar el ritmo", "pintar", "dormir"], a: 0, e: "Marca el ritmo de la música." },
  ],
  feynman: ["Qué es un instrumento de percusión", "Cuáles son las cuatro formas de tocarlos", "Cómo suenan la piel, la madera y el metal"],
  mapa: mapa("PERCUSIÓN", "var(--pri)", [
    ["Piel", "tambor · pandero", "var(--red)"],
    ["Madera", "claves · castañuelas", "#a8763a"],
    ["Metal", "triángulo · platillos", "#c48a00"],
    ["Se sacuden", "maracas · cascabeles", "var(--leaf)"],
  ], 230),
  tarjetas: [
    ["¿Cómo se tocan los instrumentos de percusión?", "Golpeando, sacudiendo, chocando o raspando."],
    ["¿Qué vibra en un tambor?", "La piel."],
    ["¿Qué lleva la pandereta?", "Chapitas de metal."],
    ["Di un instrumento de madera.", "Las claves (o las castañuelas)."],
    ["Di un instrumento de metal.", "El triángulo (o los platillos)."],
    ["¿Cómo se tocan las maracas?", "Sacudiéndolas."],
    ["¿Qué se hace con el güiro?", "Rasparlo."],
    ["¿Cómo hago una maraca?", "Con una botella y arroz."],
  ],
  familias: [
    "Fabricad juntos una maraca con una botella y arroz o un tambor con un bote.",
    "Buscad por casa objetos que suenen al golpearlos: cazuelas, tapas, cajas…",
    "Acompañad una canción que os guste con palmas, cucharas o una maraca casera.",
    "Si veis una banda o una batucada en una fiesta, fijaos en los instrumentos de percusión.",
  ],
  profesores: PROF("Música: instrumentos de percusión de altura indeterminada (piel, madera y metal), técnicas básicas (golpear, sacudir, entrechocar y raspar), construcción de instrumentos sencillos y acompañamiento rítmico", ["Rincón de instrumentos Orff para explorar libremente.", "Taller de instrumentos con material reciclado.", "Orquesta de clase: el director señala qué familia toca."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
