// Infantil 3 años · Descubrimiento y exploración del entorno: Las frutas. Se mira, se escucha y se hace con un adulto. Dibujos propios.
const { mapa } = require("./_util");
const { escena, t, PROF, FUENTES } = require("./_inf3a");
const { dibujos, lista, mural, vid, ic } = require("./_peque");

const R = "var(--red)", A = "var(--pen)", V = "var(--leaf)", N = "var(--inf)", S = "var(--sun)";

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "3-anos",
  titulo: "Las frutas",
  minutos: 10,
  objetivos: ["Nombrar frutas de cada día", "Describir su color, su forma y su sabor", "Saber que la fruta crece en árboles y plantas"],
  claves: ["fruta", "manzana", "plátano", "naranja", "fresa", "dulce"],
  pregunta: {
    texto: "¿Cuál es tu fruta favorita? ¿De qué color es?",
    respuesta: "Hay muchas <mark>frutas</mark>: la manzana roja, el plátano amarillo, la naranja… ¡Todas son ricas y sanas!",
  },
  bloques: [
    {
      html: `<h3>Muchas frutas</h3><p>Las <mark>frutas</mark> son dulces, jugosas y muy sanas.</p><p>Hay manzanas, plátanos, naranjas, fresas, peras, uvas y sandías.</p><p>Cada una tiene su color, su forma y su sabor. ¿Cuál has comido hoy?</p>`,
      svg: dibujos("Frutas: manzana, plátano, naranja, fresa, pera y uvas", [["manzana", "manzana", R], ["platano", "plátano", S], ["naranja", "naranja", N], ["fresa", "fresa", R], ["pera", "pera", V], ["uva", "uvas", A]]),
    },
    {
      html: `<h3>Colores y formas</h3><p>La <mark>naranja</mark> es redonda y de color naranja. El <mark>plátano</mark> es largo y amarillo.</p><p>Las uvas son pequeñitas y van en racimo. La sandía es grande, verde por fuera y roja por dentro.</p>`,
      svg: dibujos("La naranja es redonda, el plátano largo, las uvas en racimo y la sandía roja por dentro", [["naranja", "redonda", N], ["platano", "larga", S], ["uva", "racimo", A], ["sandia", "grande", V]], { titulo: "¿Cómo son?" }),
    },
    {
      html: `<h3>Por dentro</h3><p>Si abrimos una fruta, vemos cómo es <mark>por dentro</mark>.</p><p>La naranja tiene gajos y zumo. La manzana tiene pepitas. La sandía tiene semillas negras.</p><p>Algunas se pelan, como el plátano. ¡Y otras se comen con piel!</p>`,
      svg: escena("Una naranja abierta con sus gajos y una sandía con semillas", `<circle cx="72" cy="88" r="44" fill="var(--inf)"/><circle cx="72" cy="88" r="38" fill="#ffd08a"/>${[...Array(8)].map((_, i) => `<path d="M72 88 L${(72 + Math.cos(i * Math.PI / 4) * 38).toFixed(1)} ${(88 + Math.sin(i * Math.PI / 4) * 38).toFixed(1)}" stroke="var(--inf)" stroke-width="3"/>`).join("")}
        ${ic("sandia", 190, 88, 2.4)}${t(72, 160, "gajos", 20, N, 100)}${t(190, 160, "semillas", 20, V, 100)}`, "¿Qué hay dentro?"),
      video: vid("yCKOFitXRoM", "El baile de las frutas", "El Payaso Plim Plim", 67685723),
    },
    {
      html: `<h3>¿Dónde crecen?</h3><p>Las frutas crecen en <mark>árboles y plantas</mark>.</p><p>Las manzanas y las naranjas cuelgan de los árboles. Las fresas crecen en plantas bajitas, cerca del suelo. Cuando están maduras, se recogen.</p>`,
      svg: escena("Un manzano con manzanas y una planta de fresas", `<rect x="66" y="96" width="14" height="60" fill="#a0703c"/><circle cx="73" cy="72" r="46" fill="var(--leaf)"/>${[[52, 58], [90, 60], [66, 90], [100, 92], [76, 44]].map(([x, y]) => ic("manzana", x, y, 0.55)).join("")}
        <path d="M150 156 H236" stroke="#a0703c" stroke-width="4"/>${[164, 192, 220].map((x) => `<path d="M${x} 156 q-8 -20 -2 -34 M${x} 156 q8 -20 2 -34" stroke="var(--leaf)" stroke-width="5" fill="none"/>${ic("fresa", x, 140, 0.6)}`).join("")}
        ${t(73, 172, "árbol", 16, V, 90)}${t(192, 172, "planta", 16, V, 90)}`, ""),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>La fruta nos da <mark>vitaminas</mark> y nos ayuda a crecer sanos.</p><p>Es perfecta para merendar o para el recreo. Y quita la sed, porque tiene mucha agua.</p><p>¡Lo mejor es comer fruta cada día!</p>`,
      svg: lista("La fruta da vitaminas, es buena merienda y quita la sed", [["Vitaminas", V], ["Rica merienda", N], ["Quita la sed", A]], { titulo: "La fruta me ayuda" }),
    },
    {
      html: `<h3>Jugamos: ¿qué fruta es?</h3><p>Con los ojos cerrados, un adulto te da a <mark>probar</mark> un trocito de fruta.</p><p>¿Es dulce o ácida? ¿Blandita o dura? ¿Qué fruta es?</p><p>¡También puedes adivinarla solo tocándola!</p>`,
      svg: dibujos("Juego: probar con los ojos cerrados y adivinar la fruta", [["dormido", "¡a probar!", A], ["interrogacion", "¿qué es?", R], ["fresa", "¡fresa!", R]], { titulo: "¿Qué fruta es?" }),
    },
  ],
  figura: {
    titulo: "Las frutas",
    svg: mural("Las frutas: la manzana roja, el plátano amarillo, la naranja con gajos y las fresas en una planta", [["manzana", "manzana", "roja, con pepitas", R], ["platano", "plátano", "amarillo, se pela", S], ["naranja", "naranja", "redonda, con gajos", N], ["fresa", "fresa", "crece en una planta", V]], "Las frutas"),
  },
  video: { ...vid("aXUwt20xcys", "A Mateo le gusta la fruta", "Luli Pampín", 46195317), busqueda: "las frutas canción infantil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Pelamos un plátano.",
      pasos: ["Cogemos la punta y tiramos hacia abajo.", "Quitamos la piel a tiras.", "La piel va a la basura orgánica."],
      resultado: "¡plátano listo para comer!" },
    { enunciado: "¿Qué hay dentro de la manzana?",
      pasos: ["Un adulto la corta por la mitad.", "Miramos el centro."],
      resultado: "hay pepitas, que son semillas." },
  ],
  errores: [
    "Ofrecer siempre la misma fruta: probar frutas nuevas en trocitos amplía los gustos.",
    "Dar uvas enteras: a los 3 años hay que cortarlas a lo largo para evitar atragantamientos.",
    "Sustituir la fruta por zumo: mejor la fruta entera, que tiene más fibra.",
  ],
  ejercicios: [
    { q: "Ve con un adulto a la frutería y elige una fruta.", sol: "Para la familia: nombrad su color y su forma en casa." },
    { q: "Pela tú solo una mandarina.", sol: "Para la familia: empezad vosotros el primer trozo de piel." },
    { q: "Cuenta los gajos de la mandarina.", sol: "Para la familia: contad juntos y comed uno cada vez." },
    { q: "Haz una brocheta de frutas de colores.", sol: "Para la familia: con palito sin punta y trozos blandos." },
    { q: "Estampa media manzana con pintura.", sol: "Para la familia: aparece una estrella de pepitas en el centro." },
    { q: "Juega a adivinar la fruta con los ojos cerrados.", sol: "Para la familia: dulce, ácida, blanda, dura… nombrad sabores." },
  ],
  quiz: [
    { q: "¿Qué fruta es amarilla y larga?", o: ["el plátano", "la fresa", "la uva"], a: 0, e: "El plátano." },
    { q: "¿Qué fruta tiene gajos?", o: ["la naranja", "el plátano", "la pera"], a: 0, e: "La naranja." },
    { q: "La fresa es de color…", o: ["rojo", "azul", "negro"], a: 0, e: "Roja." },
    { q: "Las manzanas crecen en…", o: ["árboles", "el mar", "las nubes"], a: 0, e: "En árboles." },
    { q: "La sandía por dentro es…", o: ["roja", "azul", "amarilla"], a: 0, e: "Roja con semillas negras." },
    { q: "¿Cuál es una fruta?", o: ["la pera", "el pan", "el queso"], a: 0, e: "La pera." },
  ],
  examen: [
    { q: "Las uvas van en…", o: ["racimo", "caja de zapatos", "botella"], a: 0, e: "En racimo." },
    { q: "¿Qué fruta se pela antes de comer?", o: ["el plátano", "la fresa", "la uva"], a: 0, e: "El plátano." },
    { q: "Comer fruta cada día es…", o: ["sano", "malo", "imposible"], a: 0, e: "Sano." },
  ],
  feynman: ["Frutas que conozco", "Cómo son por fuera y por dentro", "Dónde crecen las frutas"],
  mapa: mapa("LAS FRUTAS", "var(--pri)", [
    ["Manzana", "roja, con pepitas", R],
    ["Plátano", "amarillo, se pela", N],
    ["Naranja", "redonda, con gajos", A],
    ["Crecen", "en árboles y plantas", V],
  ], 220),
  tarjetas: [
    ["¿Qué fruta es amarilla y larga?", "El plátano"],
    ["¿Qué fruta tiene gajos?", "La naranja"],
    ["¿Qué fruta es roja y pequeña?", "La fresa"],
    ["¿Qué tiene la manzana dentro?", "Pepitas"],
    ["¿Dónde crecen las manzanas?", "En los árboles"],
    ["¿Cuándo comemos fruta?", "Cada día"],
  ],
  familias: [
    "Dejad un frutero a su altura para que elija la fruta de la merienda.",
    "Id juntos a la frutería o al mercado y nombrad colores y formas.",
    "Preparad macedonias o brochetas con su ayuda.",
    "Cortad siempre las uvas y frutas redondas pequeñas a lo largo.",
  ],
  profesores: PROF("Indagación en el medio natural y exploración de objetos: frutas del entorno, cualidades sensoriales (color, forma, sabor, textura) y su origen vegetal", [
    "Taller de macedonia con frutas de temporada traídas de casa.",
    "Bolsa de los sentidos: adivinar la fruta tocando u oliendo.",
    "Estampación con frutas cortadas (manzana, naranja, limón).",
  ]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
