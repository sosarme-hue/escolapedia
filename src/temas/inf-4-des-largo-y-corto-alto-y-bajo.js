// Infantil 4 años · Descubrimiento y exploración del entorno: largo y corto, alto y bajo.
const { marco, ic, nino, t, suelo, arbol, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

const tren = (x, y, n, c) => [...Array(n)].map((_, i) => `<rect x="${x + i * 24}" y="${y}" width="22" height="18" rx="3" fill="${c}"/>`).join("");
const serp = (x, y, l, c) => `<path d="M${x} ${y} h${l}" stroke="${c}" stroke-width="12" stroke-linecap="round"/><circle cx="${x + l}" cy="${y}" r="9" fill="${c}"/><circle cx="${x + l + 3}" cy="${y - 3}" r="1.8" fill="#2a2a2a"/>`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Largo y corto, alto y bajo",
  minutos: 15,
  objetivos: ["Comparar dos cosas y decir cuál es más larga", "Comparar dos personas o cosas y decir cuál es más alta", "Ordenar tres objetos de corto a largo"],
  claves: ["largo", "corto", "alto", "bajo"],
  pregunta: {
    texto: "Tienes dos cuerdas. ¿Cómo sabes cuál es más larga?",
    respuesta: "Las pongo una <mark>al lado de la otra</mark>, empezando en el mismo sitio. La que llega más lejos es la <mark>más larga</mark>.",
  },
  bloques: [
    {
      html: `<h3>Largo y corto</h3><p>Mira las dos serpientes. Una es <mark>larga</mark> y la otra es <mark>corta</mark>.</p><p>La larga ocupa mucho de lado a lado. La corta, poquito. ¿Qué cosas largas hay en tu casa?</p>`,
      svg: marco("Una serpiente larga y otra corta", `${serp(30, 60, 170, "var(--leaf)")}${serp(30, 120, 60, "var(--inf)")}${t(130, 92, "larga", { color: "var(--leaf)", size: 20 })}${t(140, 126, "corta", { color: "var(--inf)", size: 20, anchor: "start", max: 100 })}`),
    },
    {
      html: `<h3>Comparar bien</h3><p>Para comparar, ponemos las cosas <mark>juntas</mark> y empezando en el <b>mismo sitio</b>.</p><p>Así vemos cuál llega más lejos. ¡Ese tren es más largo porque tiene más vagones! Ponlos uno debajo del otro y mira cuál termina más lejos.</p>`,
      svg: marco("Dos trenes que empiezan en la misma raya: uno largo y otro corto", `<path d="M30 30 V150" stroke="var(--red)" stroke-width="3" stroke-dasharray="5 4"/>${tren(34, 50, 8, "var(--pen)")}${tren(34, 110, 3, "var(--sun)")}${t(130, 94, "más largo", { color: "var(--pen)", size: 16 })}${t(160, 126, "más corto", { color: "var(--inf)", size: 16, max: 100 })}`),
    },
    {
      html: `<h3>Alto y bajo</h3><p>Ahora miramos de <mark>abajo arriba</mark>. La jirafa es <mark>alta</mark>. El ratón es <mark>bajo</mark>.</p><p>Lo alto llega muy arriba, cerca del cielo. Lo bajo está cerca del suelo. ¿Qué cosas altas ves desde tu ventana?</p>`,
      svg: marco("Una jirafa alta y un ratón bajo", `${suelo(162)}${ic("jirafa", 80, 92, 3.2)}${ic("raton", 190, 146, 1)}${t(80, 26, "alta", { color: "var(--inf)", size: 20 })}${t(190, 112, "bajo", { color: "var(--pen)", size: 20 })}`),
    },
    {
      html: `<h3>¿Quién es más alto?</h3><p>Nos ponemos <mark>espalda con espalda</mark>, con los pies en el suelo.</p><p>Papá es más alto que yo. Yo soy más alto que mi hermano pequeño. ¡Cada uno tiene su altura! ¿Quién es el más bajo de tu casa?</p>`,
      svg: marco("Tres personas de distinta altura: alto, mediano y bajo", `${suelo(166)}${nino(60, 164, { s: 2, c: "var(--pen)" })}${nino(130, 164, { s: 1.45, c: "var(--red)", nina: true })}${nino(195, 164, { s: 1, c: "var(--leaf)" })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Comparar tamaños sirve para elegir. Una <mark>bufanda larga</mark> da más vueltas al cuello.</p><p>Para coger algo de una <b>estantería alta</b>, pido ayuda a alguien más alto. Las cosas pequeñas se guardan abajo.</p>`,
      svg: marco("Una estantería alta con un libro arriba y un niño que no llega", `<rect x="150" y="20" width="80" height="146" fill="none" stroke="var(--inf)" stroke-width="4"/><path d="M150 60 H230 M150 105 H230" stroke="var(--inf)" stroke-width="4"/>${ic("libro", 190, 44, 0.9)}${nino(90, 164, { s: 1.3, pose: "arriba", c: "var(--red)" })}${t(90, 34, "¡muy alto!", { color: "var(--muted)", size: 15, max: 110 })}`),
    },
    {
      html: `<h3>Juego: de corto a largo</h3><p>Coge tres lápices. Ponlos en fila del <mark>más corto</mark> al <mark>más largo</mark>.</p><p>¡Parecen una escalera! Ahora prueba con tres peluches, del más bajo al más alto. Poco a poco, los peluches suben como una escalera.</p>`,
      svg: marco("Tres lápices ordenados de corto a largo como una escalera", `${[60, 110, 160].map((l, i) => `<g transform="translate(40 ${50 + i * 40})"><rect width="${l}" height="18" rx="3" fill="${["var(--red)", "var(--leaf)", "var(--pen)"][i]}"/><path d="M${l} 0 l18 9 l-18 9z" fill="#f2c79e"/><path d="M${l + 12} 6 l6 3 l-6 3z" fill="#2a2a2a"/></g>`).join("")}${t(232, 66, "1", { color: "var(--red)", size: 18 })}${t(232, 106, "2", { color: "var(--leaf)", size: 18 })}${t(232, 146, "3", { color: "var(--pen)", size: 18 })}`),
    },
  ],
  figura: { titulo: "Largo, corto, alto y bajo", svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Serpiente larga y corta; árbol alto y flor baja"><rect width="640" height="260" rx="16" fill="var(--paper)"/>${serp(40, 80, 220, "var(--leaf)")}${serp(40, 160, 80, "var(--inf)")}<text x="150" y="124" text-anchor="middle" font-size="26" font-weight="800" fill="var(--leaf)" font-family="Baloo 2, sans-serif">largo</text><text x="170" y="170" font-size="26" font-weight="800" fill="var(--inf)" font-family="Baloo 2, sans-serif">corto</text><path d="M330 230 H610" stroke="var(--line)" stroke-width="3"/>${arbol(420, 230, 2.6)}${ic("flor", 540, 214, 1.4)}<text x="420" y="36" text-anchor="middle" font-size="26" font-weight="800" fill="var(--pen)" font-family="Baloo 2, sans-serif">alto</text><text x="540" y="160" text-anchor="middle" font-size="26" font-weight="800" fill="var(--red)" font-family="Baloo 2, sans-serif">bajo</text></svg>` },
  video: vid("hJh3yV8dERg", "¡Encontremos los opuestos! Largo y corto", "Bebefinn en español", 5354767, "largo corto alto bajo para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Qué es más largo, una cuchara o una escoba?", pasos: ["Ponemos la cuchara al lado de la escoba en el suelo.", "Empiezan en la misma raya.", "La escoba llega mucho más lejos."], resultado: "la escoba es más larga; la cuchara, más corta." },
    { enunciado: "Medimos quién es más alto en casa.", pasos: ["Nos ponemos de pie contra la pared.", "Hacemos una marca en la cabeza de cada uno.", "Miramos qué marca está más arriba."], resultado: "la marca más arriba es la de la persona más alta." },
  ],
  errores: [
    "Comparar sin empezar en el mismo sitio: parece más larga la que está más adelantada.",
    "Mezclar largo y alto: largo es de lado; alto es hacia arriba.",
    "Pensar que lo grande siempre es alto: un elefante es grande pero la jirafa es más alta.",
  ],
  ejercicios: [
    { q: "Busca en casa algo largo y algo corto.", sol: "Nota para la familia: una bufanda y un calcetín, por ejemplo." },
    { q: "Ordena 3 lápices del más corto al más largo.", sol: "Que empiecen en la misma raya." },
    { q: "Mide con la pared quién es más alto en tu familia.", sol: "Haced una marca con fecha: veréis cómo crece." },
    { q: "Dibuja un árbol alto y una flor baja.", sol: "Preguntadle cuál llega más arriba." },
    { q: "Haz una serpiente de plastilina larga y otra corta.", sol: "Comparadlas una al lado de la otra." },
    { q: "Ponte de puntillas: ¿eres más alto o más bajo?", sol: "Más alto. Agachado, más bajo." },
  ],
  quiz: [
    { q: "La jirafa es…", o: ["baja", "alta", "corta"], a: 1, e: "La jirafa llega muy arriba." },
    { q: "El tren con más vagones es…", o: ["más corto", "igual", "más largo"], a: 2, e: "Más vagones, más largo." },
    { q: "El ratón es…", o: ["bajo", "alto", "largo"], a: 0, e: "Está cerca del suelo." },
    { q: "Lo contrario de largo es…", o: ["alto", "bajo", "corto"], a: 2, e: "Largo y corto." },
    { q: "Lo contrario de alto es…", o: ["bajo", "corto", "largo"], a: 0, e: "Alto y bajo." },
    { q: "Para comparar dos cuerdas, las pongo…", o: ["lejos una de otra", "juntas desde el mismo sitio", "en una caja"], a: 1, e: "Juntas y empezando en la misma raya." },
  ],
  examen: [
    { q: "Papá y yo: ¿quién es más alto?", o: ["Yo", "Papá", "Igual"], a: 1, e: "Los adultos suelen ser más altos." },
    { q: "Una bufanda larga…", o: ["da más vueltas", "da menos vueltas", "no abriga"], a: 0, e: "Es más larga." },
    { q: "Un lápiz gastado es…", o: ["más largo", "más alto", "más corto"], a: 2, e: "Se hace corto al sacarle punta." },
  ],
  feynman: ["Qué es largo y qué es corto", "Qué es alto y qué es bajo", "Cómo se comparan bien dos cosas"],
  mapa: mapa("MEDIR", "var(--inf)", [
    ["Largo", "llega lejos", "var(--leaf)"],
    ["Corto", "llega poco", "var(--red)"],
    ["Alto", "llega arriba", "var(--pen)"],
    ["Bajo", "cerca del suelo", "var(--water)"],
  ], 220),
  tarjetas: [
    ["La jirafa es…", "Alta"],
    ["El ratón es…", "Bajo"],
    ["Lo contrario de largo", "Corto"],
    ["Lo contrario de alto", "Bajo"],
    ["¿Cómo comparo dos cuerdas?", "Juntas, desde el mismo sitio"],
    ["Tren con muchos vagones", "Largo"],
  ],
  familias: [
    "Haced una marca de altura en una puerta cada pocos meses.",
    "Al recoger, ordenad juguetes de corto a largo o de bajo a alto.",
    "En el parque, comparad árboles, farolas y bancos.",
    "Con plastilina, haced churros largos y cortos.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: magnitudes; comparación de longitudes y alturas y seriación por tamaño", ["Seriaciones con regletas o pajitas.", "Tallímetro de clase en la pared.", "Comparar cuerdas y lanas en la asamblea."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
