// Educación Plástica 2º de Primaria: obras de arte famosas. Dibujos propios en SVG, inspirados en las obras (no son copias).
const { mapa } = require("./_util");
const { svg, rot, nino, estrella, luna, flechaR, V, P, marco2, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 12) => rot(x, y, t, { size, color: c });
const ORO = "#b8860b";
// Pequeñas versiones dibujadas, inspiradas en cada obra.
const gioconda = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#7d8f5a"/><path d="M${x} ${y + h * 0.55} q${w * 0.3} -10 ${w} -4 v${h * 0.45} h${-w}z" fill="#5d6b44"/><path d="M${x + w * 0.18} ${y + h} q0 ${-h * 0.42} ${w * 0.32} ${-h * 0.42} q${w * 0.32} 0 ${w * 0.32} ${h * 0.42}z" fill="#3e2a1a"/><ellipse cx="${x + w / 2}" cy="${y + h * 0.36}" rx="${w * 0.15}" ry="${h * 0.15}" fill="#d9b48a"/><path d="M${x + w * 0.33} ${y + h * 0.36} q0 ${-h * 0.2} ${w * 0.17} ${-h * 0.2} q${w * 0.17} 0 ${w * 0.17} ${h * 0.2} v${h * 0.3} h${-w * 0.06} v${-h * 0.28} q${-w * 0.11} ${-h * 0.1} ${-w * 0.22} 0 v${h * 0.28} h${-w * 0.06}z" fill="#2b1d12"/><path d="M${x + w * 0.45} ${y + h * 0.43} q${w * 0.05} ${h * 0.02} ${w * 0.1} 0" stroke="#7a4a2a" stroke-width="1.2" fill="none"/><path d="M${x + w * 0.38} ${y + h * 0.78} q${w * 0.12} ${h * 0.06} ${w * 0.24} 0" stroke="#d9b48a" stroke-width="${w * 0.08}" fill="none"/>`;
const estrellada = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#1a3a8a"/>${[0, 1, 2].map((i) => `<path d="M${x + 4} ${y + h * (0.3 + i * 0.13)} q${w * 0.2} -10 ${w * 0.4} 0 t${w * 0.4} 0" stroke="#6fa8dc" stroke-width="3" fill="none"/>`).join("")}<path d="M${x + w * 0.35} ${y + h * 0.35} m-8 0 a8 8 0 1 1 16 0 a5 5 0 1 1 -10 0" stroke="#ffe082" stroke-width="2.5" fill="none"/>${[[0.15, 0.18], [0.6, 0.15], [0.8, 0.3], [0.45, 0.12]].map(([a, b]) => `<circle cx="${x + w * a}" cy="${y + h * b}" r="${w * 0.04}" fill="#ffe082" stroke="#fff59d" stroke-width="2"/>`).join("")}<circle cx="${x + w * 0.86}" cy="${y + h * 0.14}" r="${w * 0.07}" fill="#ffd54f"/><path d="M${x} ${y + h} v${-h * 0.2} q${w * 0.3} -6 ${w * 0.5} 0 t${w * 0.5} -4 v${h * 0.24}z" fill="#283593"/><path d="M${x + w * 0.16} ${y + h} q${-w * 0.06} ${-h * 0.4} ${w * 0.04} ${-h * 0.72} q${w * 0.07} ${h * 0.4} ${w * 0.05} ${h * 0.72}z" fill="#1b2e1b"/>`;
const miro = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fffde7"/><circle cx="${x + w * 0.3}" cy="${y + h * 0.35}" r="${w * 0.13}" fill="${P.rojo}"/><path d="M${x + w * 0.1} ${y + h * 0.8} q${w * 0.4} ${-h * 0.5} ${w * 0.8} 0" stroke="var(--ink)" stroke-width="2.5" fill="none"/><circle cx="${x + w * 0.72}" cy="${y + h * 0.3}" r="${w * 0.07}" fill="${P.negro}"/><path d="M${x + w * 0.62} ${y + h * 0.18} l${w * 0.2} ${h * 0.24} M${x + w * 0.82} ${y + h * 0.18} l${-w * 0.2} ${h * 0.24}" stroke="var(--ink)" stroke-width="2"/>${estrella(x + w * 0.5, y + h * 0.58, w * 0.08, P.amarillo)}<circle cx="${x + w * 0.85}" cy="${y + h * 0.75}" r="${w * 0.06}" fill="${P.azul}"/><path d="M${x + w * 0.2} ${y + h * 0.6} h${w * 0.1}" stroke="${P.verde}" stroke-width="5" stroke-linecap="round"/>`;
const cubista = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#e0c9a6"/><path d="M${x + w * 0.2} ${y + h * 0.15} L${x + w * 0.55} ${y + h * 0.1} L${x + w * 0.6} ${y + h * 0.9} L${x + w * 0.25} ${y + h * 0.85}z" fill="#f2b880" stroke="var(--ink)" stroke-width="1.5"/><path d="M${x + w * 0.55} ${y + h * 0.1} L${x + w * 0.85} ${y + h * 0.25} L${x + w * 0.8} ${y + h * 0.8} L${x + w * 0.6} ${y + h * 0.9}z" fill="#8fb3d9" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="${x + w * 0.38}" cy="${y + h * 0.38}" rx="${w * 0.07}" ry="${h * 0.04}" fill="#fff" stroke="var(--ink)"/><circle cx="${x + w * 0.38}" cy="${y + h * 0.38}" r="${w * 0.025}" fill="var(--ink)"/><path d="M${x + w * 0.66} ${y + h * 0.36} l${w * 0.1} ${-h * 0.03} l-${w * 0.04} ${h * 0.06}z" fill="var(--ink)"/><path d="M${x + w * 0.55} ${y + h * 0.4} l${w * 0.12} ${h * 0.2} l${-w * 0.12} 0" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M${x + w * 0.4} ${y + h * 0.7} q${w * 0.1} ${h * 0.06} ${w * 0.22} 0" stroke="${P.rojo}" stroke-width="3" fill="none"/>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Obras de arte famosas",
  minutos: 25,
  objetivos: ["Conocer algunas obras de arte famosas y a sus autores", "Saber qué es un museo y cómo nos comportamos en él", "Mirar un cuadro con atención y crear una obra inspirada en un artista"],
  claves: ["obra de arte", "artista", "museo", "Leonardo da Vinci", "Van Gogh", "Velázquez", "Picasso", "Miró", "Frida Kahlo"],
  pregunta: {
    texto: "¿Por qué crees que hay cuadros que todo el mundo conoce, aunque se pintaran hace cientos de años?",
    respuesta: "Porque son <mark>obras de arte</mark> muy especiales: sus artistas inventaron formas nuevas de pintar. Se guardan en los <b>museos</b> para que todos podamos verlas.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un museo?</h3><p>Un <mark>museo</mark> es un edificio donde se guardan y se enseñan obras de arte: cuadros, esculturas, dibujos…</p><p>En España hay museos muy famosos, como el <b>Prado</b> en Madrid. Allí van personas de todo el mundo.</p><p>En el museo hablamos bajito, no tocamos las obras y no corremos. Así las cuidamos para que duren muchos años más.</p>`,
      svg: svg("Un museo con columnas y una familia mirando un cuadro en una sala", `<path d="M30 70 L130 30 L230 70z" fill="${P.gris}" stroke="var(--ink)" stroke-width="2"/><rect x="40" y="70" width="180" height="10" fill="#cfd8dc" stroke="var(--ink)"/>${[0, 1, 2, 3, 4].map((i) => `<rect x="${52 + i * 38}" y="82" width="12" height="60" fill="#eceff1" stroke="var(--ink)"/>`).join("")}<rect x="34" y="142" width="192" height="12" fill="#cfd8dc" stroke="var(--ink)"/>${etq(130, 64, "MUSEO", "var(--ink)", 13)}${etq(130, 172, "Hablamos bajito y no tocamos", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>La Gioconda</h3><p>La <mark>Gioconda</mark>, también llamada Mona Lisa, es quizá el cuadro más famoso del mundo.</p><p>La pintó <b>Leonardo da Vinci</b> hace más de quinientos años. Leonardo era pintor, inventor y científico a la vez.</p><p>Lo más conocido es su <b>sonrisa misteriosa</b>: unos dicen que sonríe y otros que no. Está en el museo del Louvre, en París. ¿Tú qué crees?</p>`,
      svg: svg("Dibujo inspirado en la Gioconda: una mujer de pelo largo y sonrisa suave con un paisaje detrás", `${marco2(80, 14, 100, 140, gioconda(86, 20, 88, 128), ORO)}${etq(130, 172, "Leonardo da Vinci", "var(--ink)", 13)}${etq(40, 70, "¿sonríe?", "var(--pen)", 12)}`),
    },
    {
      html: `<h3>La noche estrellada</h3><p><b>Vincent van Gogh</b> pintó <mark>La noche estrellada</mark> mirando por la ventana de su habitación.</p><p>El cielo parece moverse: está lleno de <b>remolinos</b> de pintura azul y estrellas que brillan como soles.</p><p>Van Gogh pintaba con pinceladas gruesas y colores muy fuertes. Casi no vendió cuadros en su vida, y hoy es uno de los pintores más queridos.</p>`,
      svg: svg("Dibujo inspirado en La noche estrellada: un cielo azul con remolinos, estrellas amarillas, una luna y un ciprés", `${marco2(30, 14, 200, 140, estrellada(36, 20, 188, 128), ORO)}${etq(130, 172, "Vincent van Gogh", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Las Meninas</h3><p><mark>Las Meninas</mark> es el cuadro más famoso del museo del Prado. Lo pintó <b>Diego Velázquez</b>, un pintor español.</p><p>En el centro está la infanta Margarita, una niña, rodeada de sus damas, un perro y otras personas.</p><p>¡Y Velázquez se pintó a sí mismo dentro del cuadro, con su pincel! Si miras el espejo del fondo, verás a los reyes. Es un cuadro lleno de sorpresas.</p>`,
      svg: svg("Dibujo inspirado en Las Meninas: una infanta con vestido ancho en el centro, damas, un perro y un pintor con su lienzo", `<rect x="14" y="14" width="232" height="140" fill="#5d4a36"/><rect x="24" y="24" width="40" height="110" fill="#8d6e4f"/>${etq(44, 80, "lienzo", "#fff", 10)}${nino(80, 140, { c: P.negro, s: 1.1 })}<rect x="150" y="34" width="20" height="16" fill="#d7ccc8" stroke="${ORO}" stroke-width="2"/><path d="M110 140 q4 -40 20 -44 q16 4 20 44z" fill="#eceff1"/><circle cx="130" cy="88" r="9" fill="${P.piel}"/><path d="M121 86 q9 -14 18 0" fill="${P.amarillo}"/><path d="M170 140 q4 -34 16 -38 q12 4 16 38z" fill="#8d6e63"/><circle cx="186" cy="96" r="8" fill="${P.piel}"/><ellipse cx="220" cy="138" rx="16" ry="8" fill="#a1887f"/><circle cx="206" cy="132" r="6" fill="#a1887f"/>${etq(130, 172, "Diego Velázquez", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Picasso y las caras de lado</h3><p><b>Pablo Picasso</b> nació en Málaga y es uno de los artistas más famosos del mundo.</p><p>Inventó con otros pintores el <mark>cubismo</mark>: pintar una cara vista de frente y de lado a la vez. Por eso sus retratos tienen los ojos en sitios raros y formas como piezas de puzle.</p><p>Picasso decía que de niño ya dibujaba como un mayor. ¡Y de mayor quiso pintar como un niño!</p>`,
      svg: svg("Retrato inspirado en el cubismo: una cara hecha de formas geométricas, vista de frente y de lado a la vez", `${marco2(70, 14, 120, 140, cubista(76, 20, 108, 128), "#5d4037")}${etq(130, 172, "Pablo Picasso", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Miró, colores y estrellas</h3><p><b>Joan Miró</b> nació en Barcelona. Sus cuadros parecen <mark>dibujos de un sueño</mark>.</p><p>Usaba pocos colores y muy alegres: rojo, amarillo, azul, verde y negro. Pintaba estrellas, lunas, pájaros, ojos y líneas que bailan.</p><p>No intentaba que las cosas se parecieran a la realidad. Quería que el cuadro fuera como un juego o un poema. ¡Parece fácil, pero es muy difícil!</p>`,
      svg: svg("Cuadro inspirado en Miró: formas sencillas de colores, una estrella amarilla, círculos rojo y azul y líneas negras", `${marco2(30, 14, 200, 140, miro(36, 20, 188, 128), "#9e9e9e")}${etq(130, 172, "Joan Miró", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Frida Kahlo y sus autorretratos</h3><p><b>Frida Kahlo</b> fue una pintora mexicana. Pintó muchísimos <mark>autorretratos</mark>.</p><p>De joven tuvo un accidente y pasó mucho tiempo en la cama. Su madre le puso un espejo en el techo y así empezó a pintarse a sí misma.</p><p>En sus cuadros aparecen flores en el pelo, monos, loros y colores muy vivos de México. Pintaba lo que sentía.</p>`,
      svg: svg("Autorretrato inspirado en Frida Kahlo: una mujer con flores rojas en el pelo y hojas verdes alrededor", `<rect x="60" y="14" width="140" height="140" fill="${P.verde}" opacity=".8"/>${[[72, 30], [186, 40], [76, 130], [184, 128]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="12" ry="6" fill="#2e7d32" transform="rotate(30 ${x} ${y})"/>`).join("")}<path d="M100 154 q0 -30 30 -30 q30 0 30 30z" fill="${P.rojo}"/><ellipse cx="130" cy="86" rx="22" ry="27" fill="#d9a87a"/><path d="M106 80 q0 -32 24 -32 q24 0 24 32 q-6 -20 -24 -20 q-18 0 -24 20z" fill="${P.negro}"/><path d="M118 76 q12 -6 24 0" stroke="${P.negro}" stroke-width="3" fill="none"/><circle cx="121" cy="84" r="2.5" fill="var(--ink)"/><circle cx="139" cy="84" r="2.5" fill="var(--ink)"/>${[110, 130, 150].map((x) => `<circle cx="${x}" cy="50" r="8" fill="${P.rojo}"/><circle cx="${x}" cy="50" r="3" fill="${P.amarillo}"/>`).join("")}${etq(130, 172, "Frida Kahlo", "var(--ink)", 13)}`),
      video: V("pl8b"),
    },
    {
      html: `<h3>Cómo mirar un cuadro</h3><p>Mirar arte es como <mark>ser detective</mark>. Hay que fijarse bien y hacerse preguntas.</p><p>¿Qué veo? ¿Qué colores usa? ¿Es de día o de noche? ¿Cómo se sienten las personas?</p><p>Después pregúntate: ¿qué me hace sentir a mí? ¿Me gusta? ¿Por qué? No hay respuestas malas. Cada persona ve cosas distintas en el mismo cuadro.</p>`,
      svg: svg("Un niño con lupa delante de un cuadro y tres preguntas: qué veo, qué colores, qué siento", `${marco2(140, 20, 100, 90, miro(146, 26, 88, 78), "#9e9e9e")}${nino(70, 156, { c: P.azul, s: 1.3 })}<circle cx="106" cy="76" r="14" fill="none" stroke="var(--ink)" stroke-width="4"/><path d="M96 88 l-10 12" stroke="var(--ink)" stroke-width="5"/>${etq(190, 130, "¿Qué veo?", P.rojo)}${etq(190, 146, "¿Qué colores?", P.azul)}${etq(190, 162, "¿Qué siento?", P.verde)}`),
    },
    {
      html: `<h3>Jugamos a ser artistas famosos</h3><p>Cada niño elige un <mark>artista de este tema</mark> y hace un dibujo «a su manera».</p><p>Si eliges a Van Gogh, pinta remolinos en el cielo. Si eliges a Miró, usa pocos colores y formas que bailan. Si eliges a Picasso, haz una cara de frente y de lado.</p><p>Al final hacemos un museo en el pasillo. Los demás adivinan qué artista te inspiró.</p>`,
      svg: svg("Tres dibujos de niños en la pared: uno con remolinos, otro con formas de colores y otro con una cara cubista", `${marco2(14, 40, 72, 72, estrellada(20, 46, 60, 60), "#c99a5b")}${marco2(94, 40, 72, 72, miro(100, 46, 60, 60), "#c99a5b")}${marco2(174, 40, 72, 72, cubista(180, 46, 60, 60), "#c99a5b")}${etq(50, 132, "Van Gogh", "var(--muted)")}${etq(130, 132, "Miró", "var(--muted)")}${etq(210, 132, "Picasso", "var(--muted)")}${etq(130, 164, "Nuestro museo", "var(--pen)", 15)}`),
    },
  ],
  figura: {
    titulo: "Obras de arte famosas",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Cuatro obras dibujadas, inspiradas en Leonardo, Van Gogh, Picasso y Miró"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${marco2(28, 40, 120, 170, gioconda(34, 46, 108, 158), ORO)}${marco2(170, 60, 150, 130, estrellada(176, 66, 138, 118), ORO)}${marco2(342, 40, 120, 170, cubista(348, 46, 108, 158), "#5d4037")}${marco2(484, 60, 130, 130, miro(490, 66, 118, 118), "#9e9e9e")}${rot(88, 240, "Leonardo", { size: 16 })}${rot(245, 240, "Van Gogh", { size: 16 })}${rot(402, 240, "Picasso", { size: 16 })}${rot(549, 240, "Miró", { size: 16 })}${rot(320, 280, "Se guardan en los museos para que todos las veamos", { size: 15, color: "var(--pen)" })}</svg>`,
  },
  video: V("pl8v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Pinta tu calle «a lo Van Gogh».",
      pasos: ["Dibuja las casas y el cielo.", "Rellena el cielo con remolinos y pinceladas gruesas.", "Usa azules intensos y estrellas amarillas muy brillantes."],
      resultado: "Un paisaje con cielo en movimiento, como La noche estrellada." },
    { enunciado: "Haz un retrato cubista de un amigo.",
      pasos: ["Dibuja su cara de frente y la nariz de lado.", "Divide la cara en formas, como piezas de puzle.", "Pinta cada pieza de un color distinto."],
      resultado: "Una cara inspirada en Picasso." },
    { enunciado: "Describe un cuadro como un detective.",
      pasos: ["Di qué ves y qué colores hay.", "Di si es de día o de noche y cómo se sienten.", "Di qué sientes tú al mirarlo."],
      resultado: "Una descripción con lo que ves y lo que sientes." },
  ],
  errores: [
    "Pensar que un cuadro solo es bueno si parece una foto: Miró o Picasso no querían eso.",
    "Tocar las obras en el museo: el sudor de las manos las estropea.",
    "Confundir Velázquez y Van Gogh: Velázquez era español y pintó Las Meninas.",
    "Creer que hay una sola respuesta al mirar un cuadro: cada persona siente cosas distintas.",
  ],
  ejercicios: [
    { q: "¿Qué es un museo?", sol: "Un edificio donde se guardan y se enseñan obras de arte." },
    { q: "¿Cómo nos comportamos en un museo?", sol: "Hablamos bajito, no tocamos las obras y no corremos." },
    { q: "¿Quién pintó la Gioconda?", sol: "Leonardo da Vinci." },
    { q: "¿Qué tiene de especial el cielo de La noche estrellada?", sol: "Está lleno de remolinos y estrellas muy brillantes." },
    { q: "¿Quién pintó Las Meninas y dónde está?", sol: "Diego Velázquez; está en el museo del Prado, en Madrid." },
    { q: "¿Qué es el cubismo?", sol: "Pintar una cosa vista de frente y de lado a la vez, con formas geométricas." },
    { q: "¿De qué ciudad era Joan Miró?", sol: "De Barcelona." },
    { q: "¿Qué pintaba sobre todo Frida Kahlo?", sol: "Autorretratos." },
    { q: "Mira un cuadro y responde: ¿qué veo?, ¿qué colores?, ¿qué siento?", sol: "Respuesta libre." },
    { q: "Haz un dibujo inspirado en uno de los artistas del tema.", sol: "Respuesta libre: por ejemplo, formas de colores como Miró." },
  ],
  quiz: [
    { q: "Las obras de arte se guardan en…", o: ["museos", "supermercados", "estaciones"], a: 0, e: "Museos." },
    { q: "La Gioconda la pintó…", o: ["Leonardo da Vinci", "Picasso", "Miró"], a: 0, e: "Leonardo." },
    { q: "La Gioconda es famosa por su…", o: ["sonrisa misteriosa", "sombrero", "caballo"], a: 0, e: "Su sonrisa." },
    { q: "La noche estrellada es de…", o: ["Van Gogh", "Velázquez", "Frida Kahlo"], a: 0, e: "Van Gogh." },
    { q: "Las Meninas está en el museo…", o: ["del Prado", "del Louvre", "de Ciencias"], a: 0, e: "Prado, Madrid." },
    { q: "En Las Meninas, Velázquez…", o: ["se pintó a sí mismo", "no aparece", "pintó un barco"], a: 0, e: "Aparece con su pincel." },
    { q: "Picasso nació en…", o: ["Málaga", "París", "México"], a: 0, e: "Málaga." },
    { q: "Pintar de frente y de lado a la vez es…", o: ["cubismo", "collage", "paisaje"], a: 0, e: "Cubismo." },
    { q: "Miró pintaba con…", o: ["pocos colores alegres y formas sencillas", "solo gris", "fotos"], a: 0, e: "Rojo, amarillo, azul…" },
    { q: "Frida Kahlo era…", o: ["mexicana", "española", "francesa"], a: 0, e: "De México." },
  ],
  examen: [
    { q: "En un museo…", o: ["no tocamos las obras", "corremos", "gritamos"], a: 0, e: "Cuidamos las obras." },
    { q: "Un cuadro con remolinos en el cielo recuerda a…", o: ["Van Gogh", "Velázquez", "Leonardo"], a: 0, e: "La noche estrellada." },
    { q: "Frida Kahlo se pintaba gracias a…", o: ["un espejo", "una foto", "un ordenador"], a: 0, e: "Un espejo en el techo." },
    { q: "Al mirar un cuadro…", o: ["cada persona siente cosas distintas", "solo hay una respuesta", "no hay que pensar"], a: 0, e: "No hay respuestas malas." },
  ],
  feynman: ["Qué es un museo y cómo nos comportamos", "Qué tiene de especial cada obra del tema", "Cómo mirar un cuadro como un detective"],
  mapa: mapa("OBRAS DE ARTE", "var(--pri)", [
    ["Museo", "Prado, Louvre", "#e53935"],
    ["Leonardo · Velázquez", "Gioconda · Meninas", "#1e88e5"],
    ["Van Gogh · Picasso", "remolinos · cubismo", "#43a047"],
    ["Miró · Frida", "formas · autorretratos", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Museo", "Edificio donde se guardan y se enseñan obras de arte"],
    ["La Gioconda", "Leonardo da Vinci: la sonrisa misteriosa"],
    ["La noche estrellada", "Van Gogh: cielo con remolinos"],
    ["Las Meninas", "Velázquez, en el museo del Prado"],
    ["Cubismo", "Picasso: de frente y de lado a la vez"],
    ["Joan Miró", "Barcelona: colores alegres, estrellas y formas"],
    ["Frida Kahlo", "México: autorretratos con flores"],
    ["Mirar un cuadro", "¿Qué veo? ¿Qué colores? ¿Qué siento?"],
  ],
  familias: [
    "Visitad un museo o su web y elegid cada uno su cuadro favorito.",
    "Jugad a describir un cuadro como detectives con tres preguntas.",
    "Pintad juntos un cuadro inspirado en Miró con pocos colores.",
    "Buscad obras de arte en vuestra ciudad: estatuas, murales, iglesias…",
  ],
  profesores: PROF("Educación Plástica y Visual: patrimonio artístico; obras y artistas relevantes; el museo y sus normas; lectura de imágenes; creación inspirada en referentes artísticos", ["Visita virtual al museo del Prado.", "Lectura de un cuadro con tres preguntas.", "Museo de aula con obras inspiradas en artistas."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer las playas de Sorolla y los nenúfares de Monet", "Descubrir La gran ola de Hokusai", "Saber que el arte también está en la calle, como Gaudí", "Conocer museos importantes de España"],
  lectura: { titulo: "Una noche en el museo", html: `<p>Era el día de la excursión al museo. Marta caminaba por las salas con su clase, mirando cuadros enormes.</p><p>De repente, se paró delante de un cuadro con un <b>mar azul</b> y unos niños jugando en la playa. La luz era tan brillante que parecía de verdad.</p><p>—¡Casi puedo oír las olas! —dijo Marta.</p><p>La guía del museo sonrió.</p><p>—Lo pintó <b>Sorolla</b>, un pintor de Valencia. Le encantaba pintar al aire libre, en la misma playa, para atrapar la luz del sol.</p><p>Después vieron un cuadro de <b>flores flotando en un estanque</b>, pintado con manchas de colores. De cerca, solo eran pinceladas. Pero al alejarse… ¡aparecían los nenúfares!</p><p>—Es de <b>Monet</b> —explicó la guía—. Pintó su jardín cientos de veces.</p><p>Al salir, Marta le dijo a su maestra:</p><p>—Cuando sea mayor, quiero pintar la luz.</p><p>Aquella noche soñó que se metía dentro del cuadro de Sorolla y se bañaba en el mar.</p>` },
  tras: {
    "Las Meninas": [
      ["Sorolla, el pintor de la luz", `<p><mark>Joaquín Sorolla</mark> fue un pintor español, nacido en Valencia. Es conocido como el «pintor de la luz».</p><ul><li>Pintaba sobre todo <b>playas</b>, el mar y niños bañándose.</li><li>Le gustaba pintar <b>al aire libre</b>, con el caballete en la arena.</li><li>Sabía pintar muy bien el <b>agua</b>, los reflejos y la ropa blanca movida por el viento.</li><li>Sus cuadros transmiten <b>calor</b> y alegría de verano.</li><li>Uno de los más conocidos es <b>Paseo a orillas del mar</b>: dos mujeres vestidas de blanco caminando junto al agua.</li></ul><p>En Madrid se puede visitar la casa donde vivía, que hoy es el <b>Museo Sorolla</b>, con su jardín.</p><p><b>Actividad</b>: pinta una playa con mucha luz: usa mucho blanco y amarillo, y sombras azules.</p>`,
        L6.filas("Sorolla", [["de", "Valencia", cNA], ["pintaba", "playas", cAZ], ["dónde", "al aire libre", cVE], ["museo", "Madrid", cRO]]),
        ["EmXtXShc9ek", "Joaquín Sorolla: Niños en la playa", "musicyarte", 25166]],
    ],
    "La noche estrellada": [
      ["Monet y los nenúfares", `<p><mark>Claude Monet</mark> fue un pintor francés. Pertenecía a un grupo de pintores llamados <b>impresionistas</b>.</p><ul><li>Pintaba con <b>pinceladas rápidas</b> y manchas de color.</li><li>De cerca, sus cuadros parecen manchas; de lejos, aparece la imagen.</li><li>Quería pintar la <b>impresión</b> de un momento: la luz de la mañana, la niebla, el atardecer.</li><li>Pintó muchas veces lo mismo a distintas horas para ver cómo cambiaba la luz.</li><li>En su casa tenía un <b>jardín</b> con un estanque lleno de <b>nenúfares</b> y un puente japonés. ¡Lo pintó cientos de veces!</li></ul><p>Algunos cuadros de nenúfares son tan grandes que ocupan una sala entera.</p><p><b>Actividad</b>: pinta un estanque con nenúfares usando solo manchas de témpera, sin dibujar líneas.</p>`,
        H6.dos("Monet", ["PINTABA", ["manchas", "luz", "rápido"], cAZ], ["TEMAS", ["nenúfares", "jardín", "puente"], cVE])],
    ],
    "Miró, colores y estrellas": [
      ["La gran ola de Hokusai", `<p><mark>Hokusai</mark> fue un artista de <b>Japón</b> que vivió hace unos doscientos años. Su obra más famosa es <b>La gran ola de Kanagawa</b>.</p><ul><li>Muestra una <b>ola gigante</b>, azul y blanca, a punto de caer.</li><li>La espuma de la ola parece <b>garras</b> o dedos.</li><li>Debajo hay unas <b>barcas</b> con pescadores agarrados con fuerza.</li><li>Al fondo, muy pequeño, se ve el <b>monte Fuji</b>, la montaña más alta de Japón, con nieve.</li></ul><p>No es una pintura: es un <b>grabado</b>. Se tallaba el dibujo en una plancha de madera, se le ponía tinta y se imprimía en papel. Así se podían hacer muchas copias.</p><p><b>Actividad</b>: busca el monte Fuji en el cuadro. Después, dibuja tu propia ola gigante con garras de espuma.</p>`,
        L6.filas("La gran ola", [["ola", "gigante", cAZ], ["espuma", "garras", cVE], ["barcas", "pescadores", cNA], ["fondo", "monte Fuji", cMO]])],
    ],
    "¿Qué es un museo?": [
      ["Arte en la calle: Gaudí", `<p>El arte no solo está en los museos: también lo encontramos en la <mark>calle</mark>. Un gran ejemplo es <b>Antoni Gaudí</b>, un arquitecto de Cataluña.</p><ul><li>Hacía edificios con formas <b>curvas</b>, inspiradas en la naturaleza: árboles, conchas, huesos.</li><li>Decoraba con <b>trencadís</b>: trocitos de cerámica rota de colores, como un mosaico.</li><li>En el <b>Park Güell</b> de Barcelona hay un dragón (o lagarto) cubierto de trencadís.</li><li>Su obra más famosa es la <b>Sagrada Familia</b>, una iglesia enorme que todavía se sigue construyendo.</li><li>La <b>Casa Batlló</b> parece tener escamas de dragón en el tejado.</li></ul><p>Los murales, las estatuas de las plazas y las fuentes también son arte que podemos ver gratis.</p><p><b>Actividad</b>: decora la silueta de un lagarto con trencadís de papel de colores.</p>`,
        H6.rueda("Gaudí", "GAUDÍ", [["curvas", cRO], ["trencadís", cNA], ["dragón", cVE], ["Barcelona", cAZ]])],
    ],
  },
  final: [
    ["Museos de España", `<p>En España hay <mark>museos</mark> muy importantes que reciben visitantes de todo el mundo:</p><ul><li><b>Museo del Prado</b> (Madrid): tiene Las Meninas de Velázquez y muchas obras de Goya.</li><li><b>Museo Reina Sofía</b> (Madrid): allí está el Guernica de Picasso.</li><li><b>Museo Guggenheim</b> (Bilbao): un edificio brillante con forma de barco. En la entrada hay un perro gigante hecho de flores.</li><li><b>Fundación Miró</b> (Barcelona): con muchas obras de Joan Miró.</li><li><b>Museo Picasso</b> (Málaga), en la ciudad donde nació el pintor.</li></ul><p>Muchos museos tienen <b>talleres para niños</b> y días con entrada gratis.</p><p>Algunos también se pueden visitar por internet, con <b>visitas virtuales</b>.</p><p><b>Actividad</b>: haz una visita virtual a un museo con tu familia y elige tu cuadro favorito.</p>`,
      L6.filas("Museos", [["Prado", "Madrid", cAZ], ["Reina Sofía", "Madrid", cRO], ["Guggenheim", "Bilbao", cVE], ["Picasso", "Málaga", cNA]])],
    ["Repaso: una noche en el museo", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Marta fue de <b>excursión</b> al museo con su clase.</li><li>Vio un cuadro de <b>playa</b> con mucha luz, de <b>Sorolla</b>.</li><li>Sorolla pintaba <b>al aire libre</b> para atrapar la luz.</li><li>Vio unos <b>nenúfares</b> de <b>Monet</b>, hechos con manchas.</li><li>De cerca eran pinceladas; de <b>lejos</b>, aparecían las flores.</li><li>Marta quiere, de mayor, <b>pintar la luz</b>.</li></ul><p>Visitar un museo nos ayuda a descubrir lo que nos gusta y a soñar con nuestras propias obras.</p><p><b>Actividad</b>: dibuja el sueño de Marta: ella bañándose dentro del cuadro de Sorolla.</p>`,
      H6.flujo("Marta", ["museo|excursión", "Sorolla|luz", "Monet|manchas", "sueño|bañarse"], cAZ)],
  ],
  ejemplos: [
    ["¿Por qué los cuadros de Monet se ven mejor de lejos?", ["Están hechos de manchas."], "Porque las manchas se juntan y aparece la imagen."],
    ["¿Qué montaña aparece en La gran ola?", ["Al fondo, con nieve."], "El monte Fuji."],
  ],
  errores: ["Pensar que el arte solo está dentro de los museos.", "Mirar un cuadro impresionista solo de muy cerca."],
  ejercicios: [
    ["b", "¿De dónde era Sorolla?", "De Valencia."],
    ["b", "¿Qué flores pintaba Monet?", "Nenúfares."],
    ["b", "¿De qué país era Hokusai?", "De Japón."],
    ["b", "¿Qué es el trencadís?", "Trocitos de cerámica de colores."],
    ["b", "¿Dónde está el Museo del Prado?", "En Madrid."],
    ["m", "¿Qué significa pintar al aire libre?", "Pintar fuera, en el mismo lugar que se pinta."],
    ["m", "¿Cómo se llamaba el grupo de Monet?", "Impresionistas."],
    ["m", "¿Qué es un grabado?", "Un dibujo tallado en una plancha que se imprime."],
    ["m", "¿Cuál es la obra más famosa de Gaudí?", "La Sagrada Familia."],
    ["m", "¿Qué hay en la entrada del Guggenheim?", "Un perro gigante de flores."],
    ["a", "En la lectura, ¿qué quiere hacer Marta de mayor?", "Pintar la luz."],
    ["a", "¿Por qué Monet pintaba lo mismo a distintas horas?", "Para ver cómo cambiaba la luz."],
    ["a", "¿Por qué con un grabado se pueden hacer muchas copias?", "Porque la plancha se entinta e imprime muchas veces."],
    ["a", "¿Dónde se puede ver el Guernica?", "En el Museo Reina Sofía de Madrid."],
  ],
  quiz: [
    ["Sorolla es el pintor de la…", ["luz", "noche", "nieve"], "Sorolla."],
    ["Monet pintaba con…", ["manchas", "reglas", "tijeras"], "Monet."],
    ["La gran ola es de…", ["Hokusai", "Goya", "Miró"], "La gran ola."],
    ["El dragón de trencadís está en el…", ["Park Güell", "Prado", "Louvre"], "Gaudí."],
    ["El Guggenheim está en…", ["Bilbao", "Sevilla", "Madrid"], "Museos."],
  ],
  examen: [
    ["En la lectura, ¿qué cuadro casi le hacía oír las olas?", ["el de Sorolla", "el de Monet", "La Gioconda"], "Lectura."],
    ["¿Qué soñó Marta?", ["que se bañaba en el cuadro", "que volaba", "que era pintora"], "Repaso."],
  ],
  tarjetas: [
    ["Sorolla y Monet", "Sorolla: playas llenas de luz. Monet: nenúfares con manchas."],
    ["Hokusai y Gaudí", "Hokusai: La gran ola. Gaudí: trencadís y Sagrada Familia."],
  ],
  glosario: [
    ["Sorolla", "Pintor valenciano de la luz."],
    ["Monet", "Pintor impresionista francés."],
    ["Impresionismo", "Pintura de manchas y luz."],
    ["Nenúfar", "Planta con flores que flota en el agua."],
    ["Hokusai", "Artista japonés de La gran ola."],
    ["Grabado", "Imagen impresa desde una plancha."],
    ["Gaudí", "Arquitecto de formas curvas."],
    ["Trencadís", "Mosaico de cerámica rota."],
    ["Arquitecto", "Persona que diseña edificios."],
    ["Visita virtual", "Recorrido por internet."],
  ],
  situacion: {
    titulo: "Nuestro pequeño museo",
    reto: "Cada grupo elige un artista (Sorolla, Monet, Hokusai o Gaudí), hace una obra a su estilo y la presenta en un museo de clase.",
    pasos: ["Elegir el artista y mirar sus obras.", "Hacer una obra con su técnica: luz, manchas, ola o trencadís.", "Escribir la cartela con el nombre del artista.", "Hacer de guías del museo para otra clase."],
    producto: "Un museo de clase con obras al estilo de cuatro artistas.",
    evaluacion: ["Conoce a Sorolla y Monet.", "Describe La gran ola.", "Conoce a Gaudí y el arte en la calle.", "Nombra museos de España."],
  },
});
