// Infantil 4 años · Descubrimiento y exploración del entorno: las plantas crecen.
const { marco, dibujos, lista, ic, t, sol, flor, arbol, flechaR, figura, mapa, PROF, FUENTES, vid } = require("./_inf4a");

const tierra = `<rect x="0" y="140" width="260" height="40" fill="#a0703c" opacity=".7"/>`;

module.exports = {
  materia: "Descubrimiento y exploración del entorno",
  curso: "4-anos",
  titulo: "Las plantas crecen",
  minutos: 15,
  objetivos: ["Saber que las plantas nacen de una semilla", "Conocer lo que necesita una planta: agua, sol y tierra", "Nombrar raíz, tallo, hojas y flor"],
  claves: ["semilla", "raíz", "tallo", "hojas", "flor"],
  pregunta: {
    texto: "Ponemos una semilla en un vaso con tierra. ¿Qué necesita para crecer?",
    respuesta: "Necesita <mark>agua</mark>, <mark>luz del sol</mark>, <mark>tierra</mark> y un poco de tiempo. Si la cuidamos cada día, saldrá una plantita.",
  },
  bloques: [
    {
      html: `<h3>Las plantas están vivas</h3><p>Las plantas son <mark>seres vivos</mark>, como los animales y las personas.</p><p>Nacen, <b>crecen</b>, beben agua y necesitan cuidados. Pero no pueden andar: viven siempre en el mismo sitio. Hay plantas grandes, como los árboles, y pequeñas, como la hierba.</p>`,
      svg: dibujos("Un árbol, una flor y una planta en maceta", [["arbol", "árbol", "var(--leaf)"], ["flor", "flor", "var(--red)"], ["maceta", "planta", "var(--leaf)"]], { titulo: "Están vivas" }),
    },
    {
      html: `<h3>De la semilla a la planta</h3><p>Todo empieza con una <mark>semilla</mark>. La enterramos y la regamos.</p><p>Primero sale una raíz. Luego, un <b>brote</b> verde que sube. ¡Poco a poco se hace una planta! Hay que tener paciencia.</p>`,
      svg: marco("Semilla, brote y planta: así crece", `${tierra}${ic("semilla", 40, 150, 0.8)}${flechaR(62, 120, 92, 120)}${ic("brote", 125, 128, 1.4)}${flechaR(158, 120, 188, 120)}<path d="M222 140 V60" stroke="var(--leaf)" stroke-width="4"/><path d="M222 110 q-22 -4 -22 -22 q18 0 22 18z M222 92 q22 -4 22 -22 q-18 0 -22 18z" fill="var(--leaf)"/>${flor(222, 64)}${t(40, 172, "1", { color: "#fff", size: 20 })}${t(125, 172, "2", { color: "#fff", size: 20 })}${t(222, 172, "3", { color: "#fff", size: 20 })}`),
    },
    {
      html: `<h3>Lo que necesita</h3><p>Una planta necesita <mark>agua</mark> para beber, <mark>sol</mark> para tener luz y <mark>tierra</mark> para agarrarse.</p><p>Sin agua se seca. Sin luz se pone amarilla y débil. Por eso las ponemos junto a la ventana.</p>`,
      svg: dibujos("Agua, sol y tierra: lo que necesita la planta", [["regadera", "agua", "var(--water)"], ["sol", "sol", "var(--sun)"], ["maceta", "tierra", "var(--inf)"]]),
    },
    {
      html: `<h3>Las partes de la planta</h3><p>La <mark>raíz</mark> está bajo tierra y bebe el agua. El <mark>tallo</mark> sube y la sostiene.</p><p>Las <mark>hojas</mark> son verdes y toman la luz. Algunas plantas tienen <b>flores</b> de colores. Todas sus partes trabajan juntas.</p>`,
      svg: marco("Una planta con flor, hojas, tallo y raíz señalados", `${tierra}<path d="M90 140 q-10 14 -24 20 M90 140 q4 16 -2 30 M90 140 q12 12 24 16" stroke="#7a5228" stroke-width="3" fill="none"/><path d="M90 140 V60" stroke="var(--leaf)" stroke-width="5"/><path d="M90 112 q-26 -4 -28 -24 q22 0 28 20z M90 96 q26 -4 28 -24 q-22 0 -28 20z" fill="var(--leaf)"/>${flor(90, 64)}${t(196, 40, "flor", { color: "var(--red)", size: 18 })}${t(196, 84, "hojas", { color: "var(--leaf)", size: 18 })}${t(196, 124, "tallo", { color: "var(--leaf)", size: 18 })}${t(196, 166, "raíz", { color: "#fff", size: 18 })}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las plantas nos dan <mark>comida</mark>: frutas, verduras y el trigo del pan.</p><p>También nos dan sombra, flores bonitas y un aire más limpio. ¡Por eso las cuidamos! Muchos animales también comen plantas.</p>`,
      svg: dibujos("Las plantas nos dan manzanas, zanahorias, pan y sombra", [["manzana", "fruta", "var(--red)"], ["zanahoria", "verdura", "var(--inf)"], ["pan", "pan", "var(--inf)"], ["arbol", "sombra", "var(--leaf)"]], { titulo: "Las plantas nos dan…" }),
    },
    {
      html: `<h3>Juego: mi semillero</h3><p>Pon algodón mojado en un vaso y unas <mark>lentejas</mark> encima. Déjalo junto a la ventana.</p><p>Riega un poquito cada día. ¡En unos días verás salir las raíces y los brotes!</p>`,
      svg: marco("Un vaso con algodón y lentejas germinando junto a la ventana", `<rect x="160" y="20" width="80" height="80" fill="var(--water)" opacity=".25" stroke="var(--line)" stroke-width="3"/><path d="M200 20 V100 M160 60 H240" stroke="var(--line)" stroke-width="3"/>${sol(200, 60, 10)}<path d="M50 70 H130 L122 160 H58z" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="56" y="110" width="68" height="20" rx="8" fill="#fff" stroke="var(--line)"/>${[66, 86, 106].map((x) => `<path d="M${x} 110 V84" stroke="var(--leaf)" stroke-width="3"/><path d="M${x} 86 q-8 -2 -8 -10 q6 0 8 8z" fill="var(--leaf)"/>`).join("")}${t(200, 140, "cada día", { color: "var(--water)", size: 18, max: 100 })}`),
    },
  ],
  figura: figura("Así crece una planta", "Semilla, brote, planta en maceta y árbol", [["semilla", "semilla", "var(--inf)"], ["brote", "brote", "var(--leaf)"], ["maceta", "planta", "var(--leaf)"], ["flor", "flor", "var(--red)"], ["arbol", "árbol", "var(--leaf)"]]),
  video: vid("hA_VNBPUJ2Q", "Vamos a plantar las semillas. La jardinería", "Bebefinn en español", 3306650, "cómo crecen las plantas para niños"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Plantamos una semilla de girasol.", pasos: ["Llenamos una maceta de tierra.", "Hacemos un agujerito con el dedo y metemos la semilla.", "La tapamos y la regamos."], resultado: "en unos días saldrá un brote." },
    { enunciado: "Una planta tiene las hojas caídas.", pasos: ["Tocamos la tierra: está seca.", "La regamos.", "La miramos al día siguiente."], resultado: "con agua, las hojas vuelven a ponerse firmes." },
  ],
  errores: [
    "Regar demasiado: la planta necesita agua, pero no un charco.",
    "Pensar que las plantas no están vivas porque no se mueven: crecen y beben.",
    "Creer que la raíz no sirve porque no se ve: es la que bebe el agua.",
  ],
  ejercicios: [
    { q: "Haz un semillero de lentejas en un vaso con algodón.", sol: "Nota para la familia: humedecedlo cada día y observad juntos." },
    { q: "Riega una planta de casa con ayuda.", sol: "Poca agua, en la tierra." },
    { q: "Señala la raíz, el tallo y las hojas de una planta.", sol: "Si es posible, mirad una cebolleta o un puerro con raíz." },
    { q: "Dibuja tu planta cuando nace y una semana después.", sol: "Así verá cómo crece." },
    { q: "Busca tres plantas distintas en el parque.", sol: "Un árbol, una flor y hierba, por ejemplo." },
    { q: "Di tres alimentos que vienen de las plantas.", sol: "Manzana, tomate, pan…" },
  ],
  quiz: [
    { q: "Una planta nace de una…", o: ["piedra", "semilla", "pelota"], a: 1, e: "Todo empieza con una semilla." },
    { q: "¿Qué necesita una planta?", o: ["Chocolate", "Ruido", "Agua y sol"], a: 2, e: "Agua, luz y tierra." },
    { q: "La raíz está…", o: ["bajo tierra", "en el cielo", "en la flor"], a: 0, e: "Bajo tierra, bebiendo agua." },
    { q: "Las hojas suelen ser…", o: ["negras", "de metal", "verdes"], a: 2, e: "Verdes, para tomar la luz." },
    { q: "Sin agua, la planta…", o: ["se seca", "crece más", "vuela"], a: 0, e: "Necesita agua para vivir." },
    { q: "Las plantas…", o: ["son juguetes", "están vivas", "no crecen"], a: 1, e: "Son seres vivos." },
  ],
  examen: [
    { q: "¿Qué parte sostiene la planta?", o: ["La flor", "El tallo", "La semilla"], a: 1, e: "El tallo la mantiene de pie." },
    { q: "La manzana viene de…", o: ["un árbol", "una vaca", "el mar"], a: 0, e: "El manzano es una planta." },
    { q: "Lo primero que sale de la semilla es…", o: ["la flor", "la fruta", "la raíz"], a: 2, e: "Primero la raíz y luego el brote." },
  ],
  feynman: ["Cómo nace una planta", "Qué necesita para crecer", "Las partes de una planta"],
  mapa: mapa("LAS PLANTAS", "var(--inf)", [
    ["Nacen", "de una semilla", "var(--inf)"],
    ["Necesitan", "agua, sol y tierra", "var(--water)"],
    ["Partes", "raíz, tallo, hojas", "var(--leaf)"],
    ["Nos dan", "comida y sombra", "var(--red)"],
  ], 220),
  tarjetas: [
    ["¿De dónde nace una planta?", "De una semilla"],
    ["¿Qué necesita?", "Agua, sol y tierra"],
    ["¿Qué hace la raíz?", "Bebe el agua"],
    ["¿Qué hace el tallo?", "Sostiene la planta"],
    ["¿De qué color son las hojas?", "Verdes"],
    ["¿Qué nos dan las plantas?", "Comida y sombra"],
  ],
  familias: [
    "Plantad juntos una semilla rápida: lentejas, judías o hierbabuena.",
    "Encargadle regar una planta de casa un día a la semana.",
    "En la frutería, contadle de qué planta viene cada fruta.",
    "Haced fotos a la misma planta cada semana para ver cómo crece.",
  ],
  profesores: PROF("Descubrimiento y exploración del entorno: seres vivos; ciclo de vida de las plantas, necesidades básicas y sus partes; actitudes de cuidado", ["Huerto escolar o semilleros individuales.", "Diario de observación con dibujos.", "Experimento: una planta con luz y otra sin luz."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};
