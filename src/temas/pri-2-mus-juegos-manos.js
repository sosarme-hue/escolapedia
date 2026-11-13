// Música 2º de Primaria: canciones y juegos de manos. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, nino, suelo, negra, palma, V, P, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
// Dos niños de frente chocando las manos.
const pareja = (x, y, s = 1, c1 = P.azul, c2 = P.rojo) => `${nino(x - 30 * s, y, { c: c1, pose: "palmas", s })}${nino(x + 30 * s, y, { c: c2, pose: "palmas", s, nina: true })}<circle cx="${x}" cy="${y - 46 * s}" r="${6 * s}" fill="${P.amarillo}" opacity=".8"/>`;
const paso = (x, y, n, t, c) => `<circle cx="${x}" cy="${y}" r="15" fill="${c}"/>${rot(x, y + 5, n, { size: 15, color: "#fff", w: 800 })}${etq(x, y + 34, t, "var(--ink)", 11)}`;

module.exports = {
  materia: "Música",
  curso: "2-primaria",
  titulo: "Canciones y juegos de manos",
  minutos: 20,
  objetivos: ["Cantar canciones populares infantiles con buena voz y respiración", "Aprender juegos de manos por parejas y en corro siguiendo el pulso", "Coordinar la voz, las palmas y los gestos sin perder el ritmo"],
  claves: ["canción popular", "juego de manos", "palmas", "pareja", "estribillo", "estrofa", "coordinación", "tradición"],
  pregunta: {
    texto: "¿Conoces alguna canción que se canta chocando las manos con un amigo?",
    respuesta: "Seguro que sí: son los <mark>juegos de manos</mark>. Se cantan mientras damos palmas con un compañero siguiendo el <b>pulso</b>. Muchos los cantaban ya nuestros abuelos.",
  },
  bloques: [
    {
      html: `<h3>Canciones de siempre</h3><p>Las <mark>canciones populares</mark> son canciones que la gente aprende de oídas, de padres a hijos.</p><p>Nadie sabe quién las inventó. Se cantan en el patio, en las fiestas y en casa. Muchas tienen juegos, gestos o bailes.</p><p>Tus abuelos seguramente se saben alguna. ¡Pregúntales! Así la música pasa de una generación a otra.</p>`,
      svg: svg("Una abuela canta con su nieto y su nieta, con notas musicales en el aire", `${nino(60, 154, { c: P.morado, pose: "canta", s: 1.5, pelo: P.gris, nina: true, boca: "abierta" })}${nino(150, 154, { c: P.azul, pose: "palmas", s: 1.1, boca: "abierta" })}${nino(210, 154, { c: P.rojo, pose: "palmas", s: 1.1, nina: true, boca: "abierta" })}${negra(110, 50, P.verde)}${negra(150, 36, P.naranja)}${negra(190, 52, P.verde)}${suelo(156)}`),
    },
    {
      html: `<h3>Cantar bien</h3><p>Para cantar bien hay que <mark>cuidar la voz</mark>.</p><p>Nos ponemos de pie, con la espalda recta y los hombros relajados. Cogemos aire por la nariz, llenando la barriga, como si oliéramos una flor.</p><p>Cantamos sin gritar: la voz debe sonar bonita, no fuerte. Y abrimos bien la boca para que se entiendan las palabras. ¡Bebe agua después!</p>`,
      svg: svg("Tres consejos para cantar: espalda recta, coger aire oliendo una flor y no gritar", `${nino(50, 150, { c: P.verde, s: 1.4 })}${etq(50, 170, "recto")}<circle cx="130" cy="74" r="22" fill="${P.piel}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="122" cy="70" r="2.5" fill="var(--ink)"/><circle cx="138" cy="70" r="2.5" fill="var(--ink)"/><g transform="translate(130 110)"><path d="M0 0 V-18" stroke="${P.verde}" stroke-width="3"/>${[0, 72, 144, 216, 288].map((a) => `<circle cx="${(Math.cos(a * Math.PI / 180) * 6).toFixed(1)}" cy="${(-22 + Math.sin(a * Math.PI / 180) * 6).toFixed(1)}" r="4" fill="${P.rosa}"/>`).join("")}</g>${etq(130, 150, "aire por la nariz")}${nino(210, 150, { c: P.azul, pose: "canta", s: 1.2, boca: "abierta" })}${etq(210, 170, "sin gritar")}`),
    },
    {
      html: `<h3>Estrofa y estribillo</h3><p>Muchas canciones tienen <mark>dos partes</mark> que se van turnando.</p><p>La <b>estrofa</b> cuenta la historia y su letra cambia cada vez. El <b>estribillo</b> se repite siempre igual, y es la parte que todos recordamos.</p><p>Un truco: cuando llega el estribillo, ¡toda la clase canta más alto y con más ganas! Así aprendemos la canción entera.</p>`,
      svg: svg("Esquema de una canción: estrofa, estribillo, estrofa, estribillo, con el estribillo siempre del mismo color", `${["estrofa 1", "estribillo", "estrofa 2", "estribillo"].map((t, i) => `<rect x="${14 + i * 60}" y="60" width="54" height="50" rx="10" fill="${i % 2 ? P.amarillo : "var(--card)"}" stroke="${i % 2 ? "#c49000" : P.azul}" stroke-width="2.5"/>${etq(41 + i * 60, 90, t, "var(--ink)", 10)}`).join("")}${etq(130, 140, "El estribillo se repite igual", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>¿Qué es un juego de manos?</h3><p>Un <mark>juego de manos</mark> es una canción que se canta mientras damos palmas siguiendo una serie de movimientos.</p><p>Normalmente se juega por parejas, uno enfrente del otro. A veces en corro o en grupos de cuatro.</p><p>Hay que coordinar tres cosas a la vez: <b>cantar</b>, mover las <b>manos</b> y seguir el <b>pulso</b>. ¡Parece difícil, pero con práctica sale solo!</p>`,
      svg: svg("Dos niños de frente chocan las manos mientras cantan un juego de manos", `${pareja(130, 154, 1.6)}${negra(118, 46, P.morado)}${negra(148, 40, P.verde)}${suelo(156)}`),
      video: V("mu4b"),
    },
    {
      html: `<h3>Los movimientos básicos</h3><p>Casi todos los juegos de manos usan <mark>pocos movimientos</mark> que se combinan.</p><p>Una <b>palmada propia</b>: aplaudes tú solo. Las <b>dos manos</b>: chocas las dos palmas con tu pareja. La <b>derecha</b>: chocas solo la mano derecha. La <b>izquierda</b>: chocas solo la izquierda.</p><p>También se usan golpes en las piernas o chasquidos. Practica cada uno despacio antes de juntar la canción.</p>`,
      svg: svg("Los cuatro movimientos de un juego de manos numerados: palmada propia, dos manos, derecha e izquierda", `${paso(40, 54, "1", "palmada", P.rojo)}${paso(100, 54, "2", "dos manos", P.azul)}${paso(160, 54, "3", "derecha", P.verde)}${paso(220, 54, "4", "izquierda", P.naranja)}${palma(60, 140, P.rojo, 1.1)}${palma(90, 140, P.rojo, 1.1)}${palma(170, 140, P.azul, 1.1)}${palma(200, 140, P.azul, 1.1)}${etq(130, 170, "1 · 2 · 1 · 3 · 1 · 4", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>Paso a paso</h3><p>Para aprender un juego de manos, vamos <mark>por partes</mark>.</p><p>Primero aprendemos la letra cantando. Después hacemos los movimientos sin cantar, muy despacio. Luego juntamos letra y manos, todavía despacio.</p><p>Cuando sale bien, vamos más rápido. Si nos equivocamos, no pasa nada: paramos, nos reímos y volvemos a empezar. ¡Es parte del juego!</p>`,
      svg: svg("Escalera de aprendizaje: letra, manos, juntos despacio y más rápido", `${["letra", "manos", "juntos", "¡rápido!"].map((t, i) => `<rect x="${20 + i * 56}" y="${130 - i * 28}" width="56" height="${28 + i * 28}" fill="${[P.celeste, P.verde, P.amarillo, P.naranja][i]}" stroke="var(--ink)" stroke-width="1.5"/>${etq(48 + i * 56, 122 - i * 28, t, "var(--ink)", 10)}`).join("")}`),
    },
    {
      html: `<h3>Juegos en corro</h3><p>Algunos juegos se hacen en <mark>corro</mark>, sentados o de pie.</p><p>Por ejemplo, ponemos la mano derecha encima de la izquierda del compañero. Una palmada va pasando de mano en mano siguiendo el pulso de la canción.</p><p>Cuando la canción termina, el que recibe la última palmada sale o hace una prenda. ¡Hay que estar muy atento para apartar la mano a tiempo!</p>`,
      svg: svg("Un corro de niños sentados con las manos unidas, pasando una palmada de uno a otro", `<circle cx="130" cy="92" r="58" fill="none" stroke="var(--line)" stroke-width="3" stroke-dasharray="6 5"/>${[0, 1, 2, 3, 4, 5].map((i) => { const a = (i * 60 - 90) * Math.PI / 180; return `<circle cx="${(130 + Math.cos(a) * 58).toFixed(1)}" cy="${(92 + Math.sin(a) * 58).toFixed(1)}" r="14" fill="${[P.rojo, P.azul, P.verde, P.naranja, P.morado, P.rosa][i]}" stroke="var(--ink)"/>`; }).join("")}<path d="M150 46 a58 58 0 0 1 32 22" stroke="${P.amarillo}" stroke-width="5" fill="none"/>${etq(130, 96, "¡palmada!", "var(--pen)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Los juegos de manos <mark>entrenan el cerebro</mark>: atención, memoria y coordinación entre la mano derecha y la izquierda.</p><p>También nos ayudan a llevar el pulso, a pronunciar bien y a hacer amigos jugando.</p><p>Y guardan la tradición: son un tesoro de canciones que no está en los libros, sino en la memoria de las personas. ¡Ahora tú también lo guardas!</p>`,
      svg: svg("Un cerebro contento con tres etiquetas: atención, memoria y coordinación", `<g transform="translate(130 78)"><path d="M-40 10 q-14 -30 10 -44 q10 -18 30 -10 q20 -10 32 6 q24 4 18 30 q10 24 -16 34 q-14 14 -36 4 q-30 6 -38 -20z" fill="${P.rosa}" stroke="var(--ink)" stroke-width="2"/><path d="M0 -40 v70 M-24 -18 q12 8 0 20 M24 -18 q-12 8 0 20" stroke="#c2185b" stroke-width="2" fill="none"/><circle cx="-12" cy="4" r="3" fill="var(--ink)"/><circle cx="12" cy="4" r="3" fill="var(--ink)"/><path d="M-8 14 q8 6 16 0" stroke="var(--ink)" stroke-width="2" fill="none"/></g>${etq(44, 150, "atención", P.rojo, 13)}${etq(130, 160, "memoria", P.azul, 13)}${etq(214, 150, "coordinación", P.verde, 13)}`),
    },
    {
      html: `<h3>Jugamos a inventar un juego de manos</h3><p>Por parejas, elegimos una <mark>canción corta</mark> que ya sepamos, como «Debajo un botón».</p><p>Inventamos una serie de cuatro movimientos: por ejemplo, palmada, dos manos, palmada, rodillas. La repetimos durante toda la canción.</p><p>Después enseñamos nuestro juego a otra pareja. ¿Son capaces de aprenderlo? ¡Ya sois creadores de música popular!</p>`,
      svg: svg("Una pareja enseña su juego de manos inventado a otra pareja, con la secuencia palmada, dos manos, palmada, rodillas", `${pareja(70, 156, 1)}${pareja(190, 156, 1, P.verde, P.morado)}${etq(130, 30, "palmada · manos · palmada · rodillas", "var(--pen)", 12)}${suelo(158)}`),
    },
  ],
  figura: {
    titulo: "Canciones y juegos de manos",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Un juego de manos por parejas con los cuatro movimientos y el consejo de ir paso a paso"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${pareja(160, 250, 2.2)}${negra(150, 60, P.morado)}${negra(190, 50, P.verde)}${rot(470, 50, "Movimientos", { size: 20, color: "var(--pen)" })}${paso(380, 100, "1", "palmada", P.rojo)}${paso(440, 100, "2", "dos manos", P.azul)}${paso(500, 100, "3", "derecha", P.verde)}${paso(560, 100, "4", "izquierda", P.naranja)}${rot(470, 200, "Letra → manos → juntos → ¡rápido!", { size: 16 })}${rot(470, 240, "Cantar + palmas + pulso", { size: 16, color: "var(--pen)" })}</svg>`,
  },
  video: V("mu4v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Aprende un juego de manos nuevo.",
      pasos: ["Canta la letra hasta sabértela.", "Haz los movimientos despacio y sin cantar.", "Junta letra y movimientos, primero lento y luego rápido."],
      resultado: "El juego sale entero y a tiempo." },
    { enunciado: "Haz la serie 1-2-1-3-1-4 con tu pareja.",
      pasos: ["1 es palmada propia, 2 dos manos.", "3 es la derecha y 4 la izquierda.", "Cada movimiento cae en un pulso."],
      resultado: "palmada · dos manos · palmada · derecha · palmada · izquierda." },
    { enunciado: "¿Cuál es el estribillo de una canción?",
      pasos: ["Escucha la canción entera.", "Busca la parte que se repite igual.", "Esa es la que todos recuerdan."],
      resultado: "El estribillo es la parte que se repite." },
  ],
  errores: [
    "Gritar al cantar: la voz debe sonar bonita, no fuerte.",
    "Querer ir rápido desde el principio: primero despacio.",
    "Perder el pulso al mover las manos: cada movimiento cae en un pulso.",
    "Confundir la mano derecha y la izquierda al chocar con la pareja.",
  ],
  ejercicios: [
    { q: "¿Qué es una canción popular?", sol: "Una canción que la gente aprende de oídas y pasa de padres a hijos." },
    { q: "¿Qué es un juego de manos?", sol: "Una canción que se canta mientras damos palmas con una serie de movimientos." },
    { q: "¿Qué tres cosas coordinamos en un juego de manos?", sol: "La voz, las manos y el pulso." },
    { q: "¿Qué es el estribillo?", sol: "La parte de la canción que se repite siempre igual." },
    { q: "¿Y la estrofa?", sol: "La parte que cuenta la historia; su letra cambia." },
    { q: "Di dos consejos para cantar bien.", sol: "Espalda recta, coger aire por la nariz, no gritar, abrir bien la boca." },
    { q: "Di los cuatro movimientos básicos de un juego de manos.", sol: "Palmada propia, dos manos, derecha e izquierda." },
    { q: "Pregunta a un adulto por un juego de manos de cuando era niño.", sol: "Respuesta libre." },
    { q: "Enseña un juego de manos a alguien de tu familia.", sol: "Respuesta libre." },
    { q: "Inventa una serie de cuatro movimientos para una canción que sepas.", sol: "Por ejemplo: palmada, dos manos, palmada, rodillas." },
  ],
  quiz: [
    { q: "Las canciones populares se aprenden…", o: ["de oídas", "solo en libros", "en el móvil"], a: 0, e: "De padres a hijos." },
    { q: "Para cantar cogemos aire por…", o: ["la nariz", "las orejas", "los ojos"], a: 0, e: "Por la nariz." },
    { q: "Al cantar debemos…", o: ["gritar mucho", "cantar sin gritar", "no abrir la boca"], a: 1, e: "Voz bonita." },
    { q: "La parte que se repite igual es…", o: ["el estribillo", "la estrofa", "el título"], a: 0, e: "Estribillo." },
    { q: "Un juego de manos se suele jugar…", o: ["por parejas", "solo", "dormido"], a: 0, e: "Por parejas o en corro." },
    { q: "Cada movimiento cae en un…", o: ["pulso", "silencio largo", "dibujo"], a: 0, e: "Pulso." },
    { q: "Para aprender un juego, primero…", o: ["vamos despacio", "vamos rapidísimo", "no cantamos nunca"], a: 0, e: "Despacio." },
    { q: "«Dos manos» significa…", o: ["chocar las dos palmas con la pareja", "aplaudir solo", "tocar el suelo"], a: 0, e: "Con la pareja." },
    { q: "Los juegos de manos entrenan…", o: ["la coordinación", "el olfato", "la vista solo"], a: 0, e: "Atención, memoria, coordinación." },
    { q: "Si nos equivocamos…", o: ["volvemos a empezar", "nos enfadamos", "dejamos de jugar"], a: 0, e: "Es parte del juego." },
  ],
  examen: [
    { q: "La estrofa…", o: ["cambia la letra", "se repite igual", "no tiene letra"], a: 0, e: "Cuenta la historia." },
    { q: "En un juego de manos coordinamos…", o: ["voz, manos y pulso", "solo los pies", "solo los ojos"], a: 0, e: "Las tres cosas." },
    { q: "Después de cantar mucho conviene…", o: ["beber agua", "gritar", "comer caramelos"], a: 0, e: "Cuidar la voz." },
    { q: "Los juegos de manos son parte de la…", o: ["tradición", "ciencia ficción", "pintura"], a: 0, e: "Tradición popular." },
  ],
  feynman: ["Qué es una canción popular y un juego de manos", "Cómo se canta bien", "Cómo se aprende un juego de manos paso a paso"],
  mapa: mapa("JUEGOS DE MANOS", "var(--pri)", [
    ["Canciones", "populares, de siempre", "#e53935"],
    ["Cantar", "aire, sin gritar", "#1e88e5"],
    ["Movimientos", "palmada, manos, dcha., izq.", "#43a047"],
    ["Aprender", "letra, manos, juntos", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Canción popular", "Se aprende de oídas, de padres a hijos"],
    ["Juego de manos", "Canción con palmas y movimientos"],
    ["Estribillo", "Parte que se repite igual"],
    ["Estrofa", "Parte que cuenta la historia"],
    ["Cantar bien", "Espalda recta, aire por la nariz, sin gritar"],
    ["Movimientos", "Palmada, dos manos, derecha, izquierda"],
    ["Aprender", "Letra, manos, juntos despacio, más rápido"],
    ["Coordinar", "Voz + manos + pulso"],
  ],
  familias: [
    "Pedid a los abuelos que os enseñen un juego de manos de su infancia.",
    "Practicad juntos un juego de manos cada noche, cada vez un poco más rápido.",
    "Grabad la canción en casa para que no se olvide.",
    "Inventad entre todos un juego de manos con una canción conocida.",
  ],
  profesores: PROF("Música: canción popular infantil; técnica vocal básica (postura, respiración, emisión); forma estrofa-estribillo; juegos de manos y coordinación psicomotriz; patrimonio musical oral", ["Recopilación de juegos de manos de las familias.", "Aprendizaje por fases: letra, gesto, unión.", "Creación de un juego de manos por parejas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
