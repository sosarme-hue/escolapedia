// Educación Plástica 1º de Primaria: modelar con plastilina.
const { mapa } = require("./_util");
const { svg, txt, PROF, FUENTES } = require("./_pri1");

const P = { rojo: "#e53935", amarillo: "#fdd835", azul: "#1e88e5", verde: "#43a047", naranja: "#fb8c00", morado: "#8e24aa", negro: "#212121", marron: "#8d6e63", rosa: "#f48fb1", gris: "#9e9e9e" };
const brillo = (x, y, r) => `<ellipse cx="${x - r * 0.35}" cy="${y - r * 0.35}" rx="${r * 0.28}" ry="${r * 0.18}" fill="#fff" opacity=".55"/>`;
const bola = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>${brillo(x, y, r)}`;
const churro = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}"/><rect x="${x + 6}" y="${y + 3}" width="${w * 0.5}" height="${h * 0.22}" rx="2" fill="#fff" opacity=".45"/>`;

module.exports = {
  materia: "Educación Plástica",
  curso: "1-primaria",
  titulo: "Modelar con plastilina",
  minutos: 25,
  objetivos: ["Conocer los materiales para modelar", "Hacer bolas, churros, placas y pellizcos", "Crear figuras sencillas uniendo piezas"],
  claves: ["modelar", "plastilina", "bola", "churro", "placa", "volumen", "escultura"],
  pregunta: {
    texto: "Con un dibujo vemos un gato por delante. ¿Cómo podríamos hacer un gato que se pueda ver por todos los lados?",
    respuesta: "<mark>Modelándolo</mark> con plastilina o barro. Así el gato tiene <b>volumen</b>: lo podemos girar y mirar por delante, por detrás y por los lados, como una escultura.",
  },
  bloques: [
    {
      html: `<h3>Modelar es dar forma con las manos</h3><p><mark>Modelar</mark> es dar forma a un material blando con las manos: lo apretamos, lo estiramos y lo aplastamos.</p><p>Lo que hacemos tiene <b>volumen</b>: ocupa sitio y se puede ver desde todos los lados. Es una pequeña <b>escultura</b>.</p>`,
      svg: svg("Dos manos dando forma a una bola de plastilina", `${bola(130, 100, 32, P.verde)}<path d="M60 130 q -10 -40 20 -55 q 20 -5 25 15 q 2 20 -5 40 Z" fill="#ffcc80" stroke="var(--ink)" stroke-width="1.5"/><path d="M200 130 q 10 -40 -20 -55 q -20 -5 -25 15 q -2 20 5 40 Z" fill="#ffcc80" stroke="var(--ink)" stroke-width="1.5"/>${txt(130, 165, "¡a modelar!", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>Materiales para modelar</h3><p>Podemos modelar con <mark>plastilina</mark>, que no se seca y se puede volver a usar. También con <b>pasta de modelar</b> o <b>arcilla</b>, que se secan y quedan duras.</p><p>Incluso se puede modelar con <b>masa de sal</b> hecha en casa con harina, sal y agua.</p>`,
      svg: svg("Barras de plastilina de colores, un bloque de arcilla y un cuenco de masa de sal", `${[P.rojo, P.amarillo, P.azul, P.verde].map((c, i) => `<rect x="${20 + i * 22}" y="${45 + i * 3}" width="18" height="70" rx="3" fill="${c}"/>`).join("")}<path d="M120 115 l 10 -55 h 50 l 10 55 Z" fill="#a1887f"/><path d="M200 95 h 50 q 0 30 -25 30 q -25 0 -25 -30 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><ellipse cx="225" cy="95" rx="22" ry="7" fill="#fff8e1" stroke="var(--line)"/>${txt(57, 145, "plastilina", "var(--ink)", 12)}${txt(155, 145, "arcilla", "var(--ink)", 12)}${txt(225, 145, "masa de sal", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Primero, calentar</h3><p>La plastilina fría está dura. Antes de empezar, la <mark>amasamos</mark> un rato entre las manos: el calor la vuelve blanda.</p><p>Trabajamos sobre una <b>tabla</b> o un hule para no manchar la mesa, y con las manos limpias.</p>`,
      svg: svg("Unas manos amasando plastilina sobre una tabla", `<rect x="30" y="120" width="200" height="25" rx="6" fill="#bcaaa4"/><path d="M95 110 q 35 -20 70 0 q -35 15 -70 0 Z" fill="${P.azul}"/><path d="M80 115 q -20 -30 10 -45 q 25 -5 25 25 Z" fill="#ffcc80" stroke="var(--ink)" stroke-width="1.5"/><path d="M180 115 q 20 -30 -10 -45 q -25 -5 -25 25 Z" fill="#ffcc80" stroke="var(--ink)" stroke-width="1.5"/>${txt(130, 40, "amasar", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>La bola</h3><p>Para hacer una <mark>bola</mark>, cogemos un trozo y lo giramos entre las <b>palmas de las manos</b>, dando vueltas.</p><p>Si apretamos poco y damos muchas vueltas, la bola sale muy redonda. Con bolas hacemos cabezas, ojos, frutas y cuentas de collar.</p>`,
      svg: svg("Bolas de plastilina de varios tamaños", `${bola(55, 95, 30, P.rojo)}${bola(120, 105, 20, P.amarillo)}${bola(170, 112, 13, P.azul)}${bola(205, 117, 8, P.verde)}${bola(230, 120, 5, P.morado)}<path d="M30 140 H 240" stroke="var(--line)" stroke-width="3"/>`),
    },
    {
      html: `<h3>El churro</h3><p>Para hacer un <mark>churro</mark> (o «serpiente»), ponemos un trozo en la mesa y lo hacemos rodar hacia delante y hacia atrás con la mano abierta.</p><p>Se va estirando. Con churros hacemos patas, brazos, colas y serpientes. ¡Y si lo enrollamos, sale un caracol!</p>`,
      svg: svg("Un churro largo de plastilina y un caracol hecho con un churro enrollado", `${churro(20, 50, 130, 16, P.naranja)}<g transform="translate(190 100)"><path d="M0 0 a 6 6 0 0 1 12 0 a 12 12 0 0 1 -24 0 a 18 18 0 0 1 36 0 a 24 24 0 0 1 -48 0" stroke="${P.amarillo}" stroke-width="9" fill="none" stroke-linecap="round"/></g><path d="M140 140 q 20 -5 60 0 q 15 -15 35 0" stroke="${P.verde}" stroke-width="12" fill="none" stroke-linecap="round"/>${txt(85, 95, "churro", "var(--ink)", 13)}`),
      video: { id: "Haq-ivD2Zik", titulo: "Cómo hacer una serpiente de plastilina fácil, paso a paso", canal: "Dibujos En Acción", vistas: 1034736, megusta: 0 },
    },
    {
      html: `<h3>La placa y el pellizco</h3><p>Si aplastamos una bola con la palma, sale una <mark>placa</mark>: una forma plana, como una galleta. Con placas hacemos orejas, alas o la base de una figura.</p><p>Si apretamos con dos dedos y estiramos, hacemos un <b>pellizco</b>: así salen picos, narices y orejas puntiagudas.</p>`,
      svg: svg("Una placa redonda aplastada y una bola con un pellizco que forma un pico", `<ellipse cx="70" cy="100" rx="45" ry="16" fill="${P.rosa}"/><ellipse cx="70" cy="95" rx="45" ry="14" fill="${P.rosa}"/>${brillo(70, 95, 20)}${bola(175, 95, 26, P.amarillo)}<path d="M198 92 l 22 6 l -22 6 Z" fill="${P.naranja}"/><circle cx="182" cy="86" r="3" fill="${P.negro}"/>${txt(70, 150, "placa", "var(--ink)", 13)}${txt(185, 150, "pellizco", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>Unir las piezas</h3><p>Para hacer una figura, <mark>unimos piezas</mark>: una bola grande para el cuerpo, una más pequeña para la cabeza y churros para las patas.</p><p>Apretamos un poco para que se peguen. Si la figura se cae, ponemos un <b>palillo</b> por dentro, como un esqueleto.</p>`,
      svg: svg("Un perro de plastilina hecho con bolas y churros", `${bola(120, 100, 32, P.marron)}${bola(165, 70, 20, P.marron)}<ellipse cx="160" cy="55" rx="7" ry="13" fill="#6d4c41" transform="rotate(-20 160 55)"/><circle cx="170" cy="66" r="3" fill="${P.negro}"/><circle cx="184" cy="72" r="4" fill="${P.negro}"/>${[95, 115, 130, 148].map((x) => `<rect x="${x - 5}" y="120" width="11" height="30" rx="5" fill="#6d4c41"/>`).join("")}<path d="M88 95 q -20 -10 -15 -30" stroke="#6d4c41" stroke-width="8" fill="none" stroke-linecap="round"/>`),
    },
    {
      html: `<h3>Detalles y herramientas</h3><p>Con un <mark>palillo</mark> o un lápiz podemos hacer agujeros, rayas y texturas: el pelo, los ojos o las escamas.</p><p>Con un tenedor de plástico hacemos rayas; con un tapón, círculos. Al acabar, guardamos cada color en su sitio y nos <b>lavamos las manos</b>.</p>`,
      svg: svg("Herramientas: un palillo, un tenedor de plástico y un tapón, junto a un pez con escamas marcadas", `<path d="M30 40 L 90 140" stroke="#d7ccc8" stroke-width="5" stroke-linecap="round"/><path d="M60 40 v 60 M55 40 v 20 M65 40 v 20 M60 100 v 40" stroke="${P.azul}" stroke-width="4" stroke-linecap="round"/><path d="M140 90 q 40 -40 80 0 q -40 40 -80 0 Z M220 90 l 25 -18 v 36 Z" fill="${P.naranja}"/>${[0, 1, 2].map((j) => [0, 1, 2].map((i) => `<path d="M${160 + i * 14} ${82 + j * 8} a 5 5 0 0 1 10 0" stroke="#e65100" stroke-width="1.6" fill="none"/>`).join("")).join("")}<circle cx="153" cy="85" r="3" fill="${P.negro}"/>`),
    },
    {
      html: `<h3>Juego: el zoo de plastilina</h3><p>Entre toda la familia o la clase, cada uno <mark>modela un animal</mark>: una serpiente con un churro, un caracol enrollado, una mariquita con una bola roja y puntos negros…</p><p>Después ponedlos juntos en una caja de cartón: ¡es vuestro zoo! Inventad un cuento con los animales.</p>`,
      svg: svg("Una serpiente, un caracol y una mariquita de plastilina", `<path d="M20 140 q 20 -25 40 0 t 40 0" stroke="${P.verde}" stroke-width="11" fill="none" stroke-linecap="round"/><circle cx="102" cy="138" r="8" fill="${P.verde}"/><g transform="translate(150 105)"><path d="M0 0 a 5 5 0 0 1 10 0 a 10 10 0 0 1 -20 0 a 15 15 0 0 1 30 0 a 20 20 0 0 1 -40 0" stroke="${P.amarillo}" stroke-width="8" fill="none"/></g>${churro(115, 125, 70, 12, "#ffcc80")}${bola(215, 70, 22, P.rojo)}<path d="M215 48 V 92" stroke="${P.negro}" stroke-width="2"/><circle cx="206" cy="64" r="4" fill="${P.negro}"/><circle cx="224" cy="78" r="4" fill="${P.negro}"/><circle cx="236" cy="62" r="7" fill="${P.negro}"/>`),
    },
  ],
  figura: {
    titulo: "Las cuatro técnicas básicas",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Las cuatro técnicas: bola girando entre las palmas, churro rodando, placa aplastando y pellizco con dos dedos">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${bola(90, 110, 40, P.rojo)}${churro(180, 95, 120, 26, P.azul)}<ellipse cx="400" cy="118" rx="60" ry="18" fill="${P.verde}"/><ellipse cx="400" cy="110" rx="60" ry="16" fill="${P.verde}"/>${bola(545, 110, 32, P.amarillo)}<path d="M574 106 l 32 8 l -32 8 Z" fill="${P.naranja}"/>
      ${[["bola", "girar"], ["churro", "rodar"], ["placa", "aplastar"], ["pellizco", "pellizcar"]].map(([t, d], i) => `${txt([90, 240, 400, 555][i], 185, t, "var(--ink)", 18)}${txt([90, 240, 400, 555][i], 210, d, "var(--muted)", 14)}`).join("")}
    </svg>`,
  },
  video: { id: "eEai0r_kl6Q", titulo: "Cómo hacer un pollito de plastilina en 3 minutos", canal: "Dibujos En Acción", vistas: 3252745, megusta: 0, busqueda: "plastilina para niños fácil" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Haz un pollito.", pasos: ["Una bola amarilla grande para el cuerpo y otra pequeña para la cabeza.", "Dos placas pequeñas para las alas.", "Un pellizco naranja para el pico y dos puntitos negros para los ojos."], resultado: "un pollito con bolas, placas y un pellizco." },
    { enunciado: "Haz una oruga.", pasos: ["Haz 5 bolas verdes del mismo tamaño.", "Únelas en fila apretando un poco.", "Añade dos churros finos para las antenas."], resultado: "una oruga de 5 bolas." },
    { enunciado: "Haz una pizza.", pasos: ["Aplasta una bola marrón para hacer una placa redonda: la masa.", "Pon encima una placa roja más fina: el tomate.", "Añade bolitas y trocitos de colores: los ingredientes."], resultado: "una pizza de plastilina." },
  ],
  errores: [
    "Empezar con la plastilina fría: se rompe. Primero hay que amasarla.",
    "Mezclar todos los colores: al final queda una masa marrón. Guarda cada color por separado.",
    "Hacer las patas muy finas: la figura no se sostiene. Mejor patas gordas o un palillo dentro.",
    "Llevarse la plastilina a la boca: no se come.",
  ],
  ejercicios: [
    { q: "Haz tres bolas: una grande, una mediana y una pequeña.", sol: "Tres bolas ordenadas por tamaño." },
    { q: "Haz un churro largo y otro corto.", sol: "Dos churros de distinta longitud." },
    { q: "Enrolla un churro para hacer un caracol.", sol: "Un churro en espiral con cabeza y antenas." },
    { q: "Aplasta una bola para hacer una galleta.", sol: "Una placa redonda; con un palillo puedes marcar los puntitos." },
    { q: "Haz un muñeco de nieve con tres bolas.", sol: "Tres bolas blancas, de mayor a menor, unidas." },
    { q: "Haz una serpiente y dale textura con un palillo.", sol: "Un churro con rayitas o puntos marcados." },
    { q: "Modela tu fruta favorita.", sol: "Respuesta libre: una manzana, un plátano, unas cerezas…" },
    { q: "Haz una mariquita.", sol: "Media bola roja con puntos negros y una cabeza negra." },
    { q: "¿Qué técnica usas para hacer el pico de un pájaro?", sol: "El pellizco." },
    { q: "Al terminar, ¿qué hay que hacer?", sol: "Guardar la plastilina por colores, limpiar la mesa y lavarse las manos." },
  ],
  quiz: [
    { q: "Modelar es…", o: ["dar forma con las manos", "pintar con pincel", "recortar papel"], a: 0, e: "Con un material blando." },
    { q: "Para hacer una bola…", o: ["giro entre las palmas", "aplasto", "corto"], a: 0, e: "Damos vueltas entre las manos." },
    { q: "Para hacer un churro…", o: ["lo hago rodar en la mesa", "lo pellizco", "lo aplasto"], a: 0, e: "Rodar con la mano abierta." },
    { q: "Si aplasto una bola, sale una…", o: ["placa", "serpiente", "espiral"], a: 0, e: "Una placa plana." },
    { q: "Un pico se hace con un…", o: ["pellizco", "churro", "dibujo"], a: 0, e: "Pellizcando." },
    { q: "La plastilina fría está…", o: ["dura", "líquida", "caliente"], a: 0, e: "Hay que amasarla." },
    { q: "Una figura modelada tiene…", o: ["volumen", "solo una cara", "colores siempre"], a: 0, e: "Se ve por todos los lados." },
    { q: "La arcilla cuando se seca…", o: ["se queda dura", "desaparece", "se vuelve plastilina"], a: 0, e: "Se queda dura." },
    { q: "Para que no se caiga una figura alta uso…", o: ["un palillo dentro", "más pintura", "agua"], a: 0, e: "Como un esqueleto." },
    { q: "Al acabar, la plastilina se guarda…", o: ["por colores", "toda mezclada", "en la boca"], a: 0, e: "Cada color en su sitio." },
  ],
  examen: [
    { q: "Las cuatro técnicas son bola, churro, placa y…", o: ["pellizco", "pincel", "tijera"], a: 0, e: "Pellizco." },
    { q: "Un caracol se hace con un churro…", o: ["enrollado", "aplastado", "cortado"], a: 0, e: "En espiral." },
    { q: "Las cerezas se hacen con…", o: ["bolas", "placas", "pellizcos"], a: 0, e: "Bolitas rojas." },
    { q: "Una escultura se puede ver…", o: ["desde todos los lados", "solo de frente", "solo de lado"], a: 0, e: "Tiene volumen." },
  ],
  feynman: ["Qué es modelar", "Cuáles son las cuatro técnicas básicas", "Cómo uno las piezas de una figura"],
  mapa: mapa("MODELAR", "var(--pri)", [
    ["Materiales", "plastilina · arcilla · masa de sal", "var(--sun)"],
    ["Bola y churro", "girar · rodar", "var(--red)"],
    ["Placa y pellizco", "aplastar · pellizcar", "var(--pen)"],
    ["Figura", "unir piezas y detalles", "var(--leaf)"],
  ], 220),
  tarjetas: [
    ["¿Qué es modelar?", "Dar forma con las manos a un material blando"],
    ["Bola", "Girar entre las palmas"],
    ["Churro", "Rodar con la mano abierta"],
    ["Placa", "Aplastar una bola"],
    ["Pellizco", "Apretar y estirar con dos dedos"],
    ["¿Qué hago antes de modelar?", "Amasar la plastilina para calentarla"],
    ["¿Qué tiene una escultura?", "Volumen"],
    ["Herramienta para hacer agujeros y rayas", "Un palillo"],
  ],
  familias: [
    "Haced masa de sal en casa: 2 tazas de harina, 1 de sal y 1 de agua.",
    "Modelad juntos lo que coméis ese día: un plato de espaguetis, una pizza, una fruta.",
    "Poned un hule o una bandeja para modelar sin preocuparos por manchar.",
    "Fotografiad sus figuras desde varios lados: así entiende el volumen.",
  ],
  profesores: PROF("Educación Plástica y Visual: el volumen; técnicas básicas de modelado (bola, churro, placa, pellizco) con plastilina, pasta o arcilla, y creación de figuras sencillas", ["Taller de modelado por estaciones (una técnica en cada mesa).", "Zoo de plastilina colectivo con cartelas de cada animal.", "Modelar personajes de un cuento leído en clase."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
