// Educación Plástica 1º de Primaria: puntos y líneas. Tema a nivel libro. Dibujos propios en SVG.
const { tema, C, dibujos, lista, mural, vid, lienzo, texto } = require("./_pri1L2");
const { R, A, V, N, M, G, K } = C;

const trazo = (d, c = K, w = 4) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const punto = (x, y, r, c = K) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
// Tres muestras en columna con su nombre debajo.
const tres = (label, items, opts) => lienzo(label, items.map(([d, n, c], i) => `<g transform="translate(${8 + i * 82} 0)">${d(c)}</g>${texto(48 + i * 82, 150, n, { size: 15, max: 78, color: c })}`).join(""), opts);

// Formas de línea dentro de una caja de 80 de ancho, entre y=50 y y=125.
const L = {
  horizontal: (c) => trazo("M8 88 H72", c),
  vertical: (c) => trazo("M40 52 V124", c),
  inclinada: (c) => trazo("M12 122 L68 54", c),
  curva: (c) => trazo("M10 115 Q40 30 70 115", c),
  ondulada: (c) => trazo("M6 88 q 9 -18 17 0 t 17 0 t 17 0 t 17 0", c),
  espiral: (c) => trazo("M40 88 m0 0 a4 4 0 0 1 8 0 a8 8 0 0 1 -16 0 a12 12 0 0 1 24 0 a16 16 0 0 1 -32 0 a20 20 0 0 1 40 0", c, 3.5),
  quebrada: (c) => trazo("M6 110 L20 64 L34 110 L48 64 L62 110 L74 70", c),
  fina: (c) => trazo("M8 88 H72", c, 1.5),
  media: (c) => trazo("M8 88 H72", c, 5),
  gruesa: (c) => trazo("M8 88 H72", c, 14),
};

const puntos = lienzo("Puntos grandes, medianos y pequeños", [[50, 80, 26, R], [125, 90, 14, A], [185, 72, 8, V], [220, 110, 4, K], [90, 125, 5, N], [160, 125, 10, M]].map(([x, y, r, c]) => punto(x, y, r, c)).join(""), { titulo: "Puntos de muchos tamaños", nota: "grande · mediano · pequeño" });

const puntillismo = lienzo("Una flor y un sol dibujados solo con puntos", (() => {
  let o = "";
  for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; o += punto(80 + Math.cos(a) * 26, 82 + Math.sin(a) * 26, 7, R); }
  o += punto(80, 82, 10, M);
  for (let y = 112; y < 160; y += 9) o += punto(80, y, 3.5, V);
  for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8; o += punto(190 + Math.cos(a) * 22, 70 + Math.sin(a) * 22, 4, M); }
  for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; o += punto(190 + Math.cos(a) * 36, 70 + Math.sin(a) * 36, 3, M); }
  return o;
})(), { titulo: "Dibujos de puntos" });

const nace = lienzo("Un punto que se mueve deja una línea", punto(40, 95, 8, A) + trazo("M40 95 C 90 40, 140 150, 215 85", A, 4) + `<text x="225" y="92" font-size="22" fill="${A}">✎</text>` + texto(40, 130, "punto", { size: 15, max: 80, color: A }) + texto(150, 150, "…se mueve y hace una línea", { size: 15, max: 200 }), { titulo: "El punto echa a andar" });

const caras = lienzo("Una línea ondulada tranquila y una línea en zigzag nerviosa", `<g transform="translate(14 0)">${trazo("M0 80 q 14 -22 28 0 t 28 0 t 28 0 t 28 0", A, 4)}</g>${texto(70, 120, "tranquila", { size: 16, max: 110, color: A })}
  <g transform="translate(140 0)">${trazo("M0 98 L12 60 L24 98 L36 60 L48 98 L60 60 L72 98 L84 60 L96 98", R, 4)}</g>${texto(190, 120, "nerviosa", { size: 16, max: 110, color: R })}`, { titulo: "¿Cómo se siente la línea?" });

const miro = lienzo("Un cuadro inventado al estilo de Miró, con puntos, líneas y formas de colores", `${trazo("M20 140 C 70 40, 120 160, 170 70 S 230 50, 240 120", K, 3)}${punto(60, 60, 16, R)}${punto(205, 45, 10, M)}${punto(130, 120, 7, K)}
  <path d="M150 140 l12 -26 l12 26 z" fill="${A}"/>${trazo("M196 98 l14 14 m0 -14 l-14 14", K, 3)}<circle cx="95" cy="140" r="9" fill="none" stroke="${V}" stroke-width="4"/>${trazo("M100 40 l8 -10 l8 10", K, 3)}`, { titulo: "Al estilo de Miró" });

const contorno = lienzo("El contorno de una casa hecho con líneas rectas y un sol con líneas curvas", `${trazo("M40 140 V90 L90 50 L140 90 V140 Z", A, 4)}${trazo("M78 140 V112 H102 V140", A, 3)}<circle cx="205" cy="62" r="18" fill="none" stroke="${M}" stroke-width="4"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = i * Math.PI / 4; return trazo(`M${205 + Math.cos(a) * 25} ${62 + Math.sin(a) * 25} L${205 + Math.cos(a) * 35} ${62 + Math.sin(a) * 35}`, M, 3); }).join("")}${trazo("M170 140 q 10 -14 20 0 t 20 0 t 20 0", V, 3)}`, { titulo: "Líneas que dibujan", nota: "contornos con rectas y curvas" });

module.exports = tema({
  materia: "Educación Plástica",
  titulo: "Puntos y líneas",
  minutos: 50,
  objetivos: ["Reconocer el punto como la marca más pequeña", "Dibujar con puntos", "Distinguir líneas rectas, curvas, onduladas, quebradas y en espiral", "Hacer líneas gruesas y finas", "Usar puntos y líneas para crear y expresar"],
  claves: ["punto", "línea", "recta", "curva", "ondulada", "quebrada", "espiral", "contorno"],
  pregunta: ["¿Qué pasa si pones la punta del lápiz en el papel y la mueves sin levantarla?", "¡Que el <mark>punto</mark> se convierte en una <mark>línea</mark>! Todos los dibujos empiezan con un punto."],
  lectura: ["El punto que quería pasear", `<p>En una hoja blanca vivía un punto muy pequeño y muy negro.</p><p>Se aburría siempre en el mismo sitio.</p><p>Un día, el lápiz le dijo: —¿Vamos de paseo?</p><p>El punto echó a andar. Primero fue recto, recto, como un tren.</p><p>Luego subió y bajó como las olas del mar. Después saltó en zigzag como un rayo.</p><p>Al final dio vueltas y más vueltas, como la concha de un caracol.</p><p>Cuando se paró, miró hacia atrás. ¡Había dejado un camino precioso!</p><p>—Soy un punto —dijo—, pero cuando paseo, me convierto en línea.</p>`],
  bloques: [
    ["El punto", `<p>El <mark>punto</mark> es la marca más pequeña que podemos hacer.</p><p>Para hacerlo, apoyamos la punta del lápiz en el papel y lo levantamos. ¡Ya está!</p><p>Los puntos pueden ser <b>grandes</b> o <b>pequeños</b>, de muchos colores.</p><p>Con un rotulador gordo salen puntos grandes. Con un lápiz fino, puntos pequeñitos.</p><p>Mira a tu alrededor: hay puntos en las mariquitas, en la ropa y en los dados.</p>`,
      puntos],
    ["Dibujar con puntos", `<p>Si ponemos muchos puntos juntos, podemos hacer un <mark>dibujo de puntos</mark>.</p><p>Puntos rojos en círculo forman una flor. Puntos amarillos forman un sol.</p><p>Si los puntos están muy <b>juntos</b>, el color se ve fuerte. Si están <b>separados</b>, se ve suave.</p><p>Puedes hacer puntos con rotuladores, con el dedo mojado en pintura o con bastoncillos.</p><p>¡Hay pintores famosos que hacían cuadros enteros solo con puntos!</p>`,
      puntillismo],
    ["La línea", `<p>Si ponemos la punta del lápiz en el papel y la <b>movemos</b>, el punto deja un camino.</p><p>Ese camino es una <mark>línea</mark>.</p><p>Una línea es como un punto que se ha ido de paseo.</p><p>Las líneas pueden ir hacia muchos sitios: hacia arriba, hacia abajo, hacia los lados.</p><p>Pueden ser largas o cortas. Con líneas dibujamos casi todo: personas, casas, árboles y letras.</p>`,
      nace, vid("kR-4tyRsQ1c", "Las líneas para niños", "Smile and Learn - Español", 1903534)],
    ["Líneas rectas", `<p>Una <mark>línea recta</mark> va siempre en la misma dirección, sin torcerse.</p><p>La línea <b>horizontal</b> está tumbada, como el horizonte del mar o una persona dormida.</p><p>La línea <b>vertical</b> está de pie, como un árbol o una farola.</p><p>La línea <b>inclinada</b> está torcida, como un tobogán.</p><p>Para hacer rectas muy derechas podemos usar una regla. ¡Pero también salen bien a mano alzada!</p>`,
      tres("Línea horizontal, vertical e inclinada", [[L.horizontal, "horizontal", A], [L.vertical, "vertical", R], [L.inclinada, "inclinada", V]], { titulo: "Líneas rectas" })],
    ["Líneas curvas", `<p>Una <mark>línea curva</mark> se dobla suavemente, sin esquinas.</p><p>La línea <b>ondulada</b> sube y baja como las olas del mar.</p><p>La línea en <b>espiral</b> da vueltas y vueltas, como la concha de un caracol.</p><p>Hay curvas en el arcoíris, en una sonrisa y en las ruedas.</p><p>Para dibujar una curva, mueve la mano despacio y sin parar. Se nota más suave que una recta.</p>`,
      tres("Línea curva, ondulada y en espiral", [[L.curva, "curva", A], [L.ondulada, "ondulada", N], [L.espiral, "espiral", V]], { titulo: "Líneas curvas" })],
    ["Líneas quebradas", `<p>Una <mark>línea quebrada</mark> está hecha de trozos rectos que cambian de dirección.</p><p>Tiene <b>picos</b> o esquinas. También la llamamos línea en <b>zigzag</b>.</p><p>Es como el rayo de una tormenta, los dientes de una sierra o las montañas.</p><p>Para hacerla, sube y baja con el lápiz haciendo puntas.</p><p>Si juntas una quebrada y una ondulada, tienes montañas y mar en el mismo dibujo.</p>`,
      tres("Línea quebrada, ondulada y recta para comparar", [[L.quebrada, "quebrada", R], [L.ondulada, "ondulada", A], [L.horizontal, "recta", G]], { titulo: "Con picos o sin picos" })],
    ["Gruesas y finas", `<p>Las líneas pueden ser <mark>gruesas</mark> o <mark>finas</mark>.</p><p>Una línea <b>fina</b> es delgadita, como un pelo. La hacemos con un lápiz bien afilado.</p><p>Una línea <b>gruesa</b> es ancha y fuerte. La hacemos con un rotulador gordo, una cera o un pincel.</p><p>También cambia si aprietas más o menos.</p><p>Las líneas gruesas destacan mucho. Las finas sirven para los detalles, como los bigotes de un gato.</p>`,
      tres("Línea fina, mediana y gruesa", [[L.fina, "fina", K], [L.media, "mediana", A], [L.gruesa, "gruesa", R]], { titulo: "Del pelo a la carretera" })],
    ["Líneas que expresan", `<p>Las líneas también pueden <mark>expresar sentimientos</mark>.</p><p>Una línea <b>ondulada</b> y suave parece tranquila, como el mar en calma.</p><p>Una línea en <b>zigzag</b> parece nerviosa o enfadada, como un rayo.</p><p>Una línea <b>horizontal</b> parece descansar. Una línea <b>vertical</b> parece fuerte y firme.</p><p>Escucha una música y dibuja las líneas que te inspire. ¿Te salen suaves o con picos?</p>`,
      caras],
    ["Un artista de puntos y líneas", `<p><mark>Joan Miró</mark> fue un pintor de Barcelona.</p><p>Le encantaba pintar con <b>puntos</b>, <b>líneas</b> y formas de colores muy vivos: rojo, amarillo, azul y negro.</p><p>Sus cuadros parecen juegos: estrellas, lunas, pájaros y personajes inventados.</p><p>Sus líneas negras son finas y largas, y dan vueltas por todo el cuadro.</p><p>Mira sus obras y busca puntos y líneas. ¡Después inventa tu propio cuadro como él!</p>`,
      miro, vid("-Zp7Du1ckaY", "Joan Miró: biografía para niños", "Anakronismos", 650554)],
    ["¿Para qué sirven?", `<p>Los puntos y las líneas sirven para muchas cosas.</p><p>Con líneas dibujamos el <mark>contorno</mark>: el borde de las cosas. Primero hacemos el contorno de la casa y luego la pintamos.</p><p>Con líneas escribimos las <b>letras</b> y los <b>números</b>.</p><p>En los mapas, las líneas son caminos y ríos. En la carretera, las líneas nos dicen por dónde ir.</p><p>¡Y con puntos ponemos los ojos a nuestros dibujos!</p>`,
      contorno],
    ["Juego: el dictado de líneas", `<p>Vamos a jugar al <mark>dictado de líneas</mark>.</p><p>Necesitas una hoja y un lápiz. La maestra dice una línea y tú la dibujas.</p><p>«¡Una línea recta horizontal!» «¡Ahora una ondulada!» «¡Una espiral muy grande!»</p><p>Después, compara tu hoja con la de tu compañero. ¿Se parecen?</p><p>Al final, convierte tus líneas en un dibujo. La ondulada puede ser el mar. La espiral, un caracol. ¡Tú decides!</p>`,
      dibujos("Líneas convertidas en dibujos: ondulada en mar, espiral en caracol, vertical en árbol", [["pez", "mar", A], ["caracol", "caracol", V], ["arbol", "árbol", N]], { titulo: "De línea a dibujo" })],
    ["Repaso: lo que ya sé", `<p>El <mark>punto</mark> es la marca más pequeña. Con muchos puntos hacemos dibujos.</p><p>La <mark>línea</mark> es un punto que se mueve.</p><p>Hay líneas <b>rectas</b>: horizontales, verticales e inclinadas.</p><p>Hay líneas <b>curvas</b>: onduladas y en espiral. Y líneas <b>quebradas</b>, en zigzag.</p><p>Las líneas pueden ser gruesas o finas, tranquilas o nerviosas.</p><p>¡Con puntos y líneas empieza cualquier dibujo!</p>`,
      lista("Repaso de puntos y líneas", [["El punto: la marca más pequeña", R], ["Rectas: tumbada, de pie, torcida", A], ["Curvas: ondulada, espiral", V], ["Quebrada: en zigzag", N]], { titulo: "Ya sé…" })],
  ],
  figura: ["Puntos y líneas", mural("Punto, línea recta, línea curva y línea quebrada", [["sol", "Punto", "la marca más pequeña", R], ["lapiz", "Recta", "tumbada · de pie · torcida", A], ["caracol", "Curva", "ondulada · espiral", V], ["estrella", "Quebrada", "en zigzag, con picos", N]], "Así empieza un dibujo")],
  video: { ...vid("X5rGFxkT7TY", "El punto y la línea: cómo hacer un dibujo solo con líneas", "Adriana Arunima", 786632), busqueda: "el punto y la línea para niños" },
  ejemplos: [
    ["Dibuja el mar con líneas.", ["Pienso cómo se mueven las olas.", "Suben y bajan.", "Uso líneas onduladas azules."], "varias líneas onduladas una debajo de otra."],
    ["Dibuja una montaña.", ["Las montañas tienen picos.", "Necesito una línea con puntas.", "Hago una línea quebrada."], "una línea en zigzag."],
    ["¿Qué línea es una farola?", ["La farola está de pie.", "Va de arriba abajo.", "Es una recta vertical."], "línea vertical."],
    ["Dibuja una mariquita con puntos.", ["Hago un círculo rojo.", "Le pongo puntos negros grandes.", "Añado los ojos con puntos pequeños."], "una mariquita de puntos."],
  ],
  errores: [
    "Pensar que una línea quebrada es curva: la quebrada tiene picos.",
    "Confundir horizontal y vertical: horizontal está tumbada; vertical, de pie.",
    "Apretar siempre igual: apretando más o menos cambia el grosor.",
    "Creer que un punto no sirve para nada: ¡con puntos se hacen cuadros enteros!",
  ],
  basico: [
    ["Haz cinco puntos grandes y cinco pequeños.", "Dibujo libre con puntos de dos tamaños."],
    ["Dibuja una línea recta.", "Una línea sin curvas."],
    ["Dibuja una línea ondulada.", "Una línea que sube y baja suave."],
    ["Dibuja una línea en zigzag.", "Una línea quebrada con picos."],
    ["Dibuja una espiral.", "Una línea que da vueltas."],
    ["¿Qué línea parece una persona dormida?", "La horizontal."],
    ["¿Qué línea parece un árbol de pie?", "La vertical."],
    ["Busca puntos en tu ropa o en clase.", "Respuesta libre."],
  ],
  medio: [
    ["Haz una línea fina y una gruesa.", "Una delgada y otra ancha."],
    ["¿Qué línea parece un tobogán?", "La inclinada."],
    ["¿Qué línea parece un rayo?", "La quebrada."],
    ["¿Qué línea parece la concha de un caracol?", "La espiral."],
    ["Dibuja una flor solo con puntos.", "Puntos de colores formando una flor."],
    ["Dibuja el contorno de una casa con rectas.", "Cuadrado y triángulo hechos con líneas rectas."],
    ["Haz una línea tranquila y otra nerviosa.", "Ondulada suave y zigzag."],
    ["¿Qué es un contorno?", "El borde de una cosa dibujado con una línea."],
    ["¿Quién fue Joan Miró?", "Un pintor que usaba puntos, líneas y colores vivos."],
  ],
  avanzado: [
    ["Dibuja un paisaje usando cinco tipos de línea.", "Dibujo con recta, ondulada, quebrada, espiral y curva."],
    ["Escucha una música y dibuja sus líneas.", "Respuesta libre según la música."],
    ["Inventa un cuadro al estilo de Miró.", "Dibujo con puntos, líneas negras y colores vivos."],
    ["Explica a un compañero cómo nace una línea.", "Un punto que se mueve deja un camino."],
    ["Haz un dibujo con puntos juntos y otro con puntos separados. ¿Qué cambia?", "Juntos se ve más fuerte; separados, más suave."],
  ],
  quiz: [
    ["¿Cuál es la marca más pequeña?", ["el punto", "la línea", "la espiral"], 0, "El punto."],
    ["Una línea es un punto que…", ["se mueve", "se borra", "duerme"], 0, "Se mueve."],
    ["La línea tumbada es…", ["horizontal", "vertical", "espiral"], 0, "Horizontal."],
    ["La línea de pie es…", ["vertical", "ondulada", "quebrada"], 0, "Vertical."],
    ["La línea que sube y baja como las olas es…", ["ondulada", "recta", "quebrada"], 0, "Ondulada."],
    ["La línea en zigzag es…", ["quebrada", "curva", "horizontal"], 0, "Quebrada."],
    ["La concha de un caracol es una…", ["espiral", "recta", "inclinada"], 0, "Espiral."],
    ["Una línea con un rotulador gordo es…", ["gruesa", "fina", "invisible"], 0, "Gruesa."],
    ["¿Qué línea parece más tranquila?", ["ondulada suave", "zigzag", "ninguna"], 0, "La ondulada suave."],
    ["El borde de un dibujo es el…", ["contorno", "punto", "color"], 0, "Contorno."],
    ["Joan Miró pintaba con…", ["puntos y líneas", "solo gris", "solo fotos"], 0, "Puntos, líneas y colores vivos."],
    ["Un tobogán es una línea…", ["inclinada", "espiral", "ondulada"], 0, "Inclinada."],
  ],
  examen: [
    ["¿Qué hace un punto cuando se mueve?", ["una línea", "un color", "nada"], 0, "Una línea."],
    ["¿Qué línea tiene picos?", ["quebrada", "ondulada", "curva"], 0, "Quebrada."],
    ["La línea del horizonte del mar es…", ["horizontal", "vertical", "espiral"], 0, "Horizontal."],
    ["Una línea fina es…", ["delgadita", "muy ancha", "un punto"], 0, "Delgadita."],
    ["La espiral da…", ["vueltas", "saltos", "picos"], 0, "Vueltas."],
    ["Con muchos puntos juntos puedo…", ["hacer un dibujo", "borrar", "nada"], 0, "Hacer un dibujo."],
  ],
  feynman: ["Qué es un punto y qué es una línea", "Los tipos de líneas", "Cómo una línea puede expresar algo"],
  mapa: ["PUNTOS Y LÍNEAS", [["Punto", "grande · pequeño", R], ["Rectas", "horizontal · vertical · inclinada", A], ["Curvas", "ondulada · espiral", V], ["Quebrada", "zigzag", N]], 230],
  tarjetas: [
    ["¿Qué es un punto?", "La marca más pequeña"],
    ["¿Qué es una línea?", "Un punto que se mueve"],
    ["Línea horizontal", "Tumbada, como el mar"],
    ["Línea vertical", "De pie, como un árbol"],
    ["Línea inclinada", "Torcida, como un tobogán"],
    ["Línea ondulada", "Sube y baja como las olas"],
    ["Línea quebrada", "En zigzag, con picos"],
    ["Espiral", "Da vueltas como un caracol"],
    ["Contorno", "El borde de una cosa"],
    ["Joan Miró", "Pintor de puntos, líneas y colores"],
  ],
  glosario: [
    ["Punto", "La marca más pequeña que se puede hacer."],
    ["Línea", "El camino que deja un punto al moverse."],
    ["Recta", "Línea que no se tuerce."],
    ["Curva", "Línea que se dobla suave, sin esquinas."],
    ["Ondulada", "Línea que sube y baja como las olas."],
    ["Quebrada", "Línea con picos, en zigzag."],
    ["Espiral", "Línea que da vueltas alrededor de un centro."],
    ["Contorno", "Línea que marca el borde de una cosa."],
  ],
  situacion: ["El paseo del punto", "Vamos a hacer un gran dibujo colectivo contando el paseo del punto de la lectura.", ["Cada grupo elige un tipo de línea: recta, ondulada, quebrada o espiral.", "En un papel largo, dibujamos el camino del punto con nuestra línea.", "Convertimos las líneas en cosas: el mar, montañas, caracoles.", "Contamos la historia del paseo a otra clase."], "un papel continuo con el paseo del punto.", ["Dibuja los tipos de línea correctos.", "Usa líneas gruesas y finas.", "Convierte las líneas en un dibujo con sentido."]],
  familias: [
    "Buscad juntos líneas en casa y en la calle: rectas, curvas, en zigzag.",
    "Haced dibujos de puntos con bastoncillos y pintura.",
    "Jugad al dictado de líneas en un folio.",
    "Mirad juntos algún cuadro de Joan Miró y buscad puntos y líneas.",
  ],
  saberes: "Elementos del lenguaje plástico: el punto y la línea. Tipos de línea (recta, curva, ondulada, quebrada, espiral), grosor, contorno y expresividad de la línea. Joan Miró",
  ideas: ["Dictado de líneas con música de fondo.", "Puntillismo con bastoncillos y témpera.", "Papel continuo con el paseo del punto.", "Mirar una obra de Miró y crear una propia."],
});
