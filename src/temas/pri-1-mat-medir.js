// Matemáticas 1º de Primaria: medir longitud, peso y capacidad.
const { mapa } = require("./_util");
const { svg, num, txt, PROF, FUENTES } = require("./_pri1");

const balanza = (inc = 0, izq = "", der = "") => `<g><path d="M130 150 V 60" stroke="var(--ink)" stroke-width="5"/><path d="M95 150 H 165" stroke="var(--ink)" stroke-width="6"/><g transform="rotate(${inc} 130 60)"><path d="M50 60 H 210" stroke="var(--ink)" stroke-width="5"/><path d="M50 60 L 35 95 H 85 L 70 60 M210 60 L 195 95 H 245 L 230 60" stroke="var(--muted)" stroke-width="2" fill="none"/><g transform="translate(60 95) rotate(${-inc})">${izq}</g><g transform="translate(220 95) rotate(${-inc})">${der}</g></g><circle cx="130" cy="60" r="6" fill="var(--red)"/></g>`;
const vaso = (x, y, w, h, nivel, c = "var(--water)") => `<g><rect x="${x}" y="${y + h * (1 - nivel)}" width="${w}" height="${h * nivel}" fill="${c}" opacity=".7"/><path d="M${x} ${y} V ${y + h} H ${x + w} V ${y}" stroke="var(--ink)" stroke-width="2.5" fill="none"/></g>`;

module.exports = {
  materia: "Matemáticas",
  curso: "1-primaria",
  titulo: "Medir longitud, peso y capacidad",
  minutos: 25,
  objetivos: ["Comparar objetos por su largo, su peso y lo que caben", "Medir con palmos, pasos y otros objetos", "Conocer el metro, el kilo y el litro"],
  claves: ["largo", "corto", "pesado", "ligero", "lleno", "vacío", "metro", "kilo", "litro"],
  pregunta: {
    texto: "¿Cómo sabrías si tu mesa es más larga que la de tu compañero, sin moverlas?",
    respuesta: "<mark>Midiéndolas</mark>: por ejemplo, contando cuántos palmos tiene cada una, o con una regla. Quien tenga más palmos es más larga.",
  },
  bloques: [
    {
      html: `<h3>Largo y corto</h3><p>La <mark>longitud</mark> es lo que mide algo de un extremo a otro. Para comparar, ponemos las cosas <b>una al lado de la otra</b>, empezando en el mismo sitio.</p><p>El lápiz que llega más lejos es el más <b>largo</b>. El otro es más <b>corto</b>.</p>`,
      svg: svg("Dos lápices alineados a la izquierda: uno largo y otro corto", `<path d="M30 30 V 140" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/><rect x="30" y="55" width="180" height="22" rx="3" fill="var(--pen)"/><path d="M210 55 L 235 66 L 210 77 Z" fill="var(--sun)"/><rect x="30" y="100" width="100" height="22" rx="3" fill="var(--leaf)"/><path d="M130 100 L 155 111 L 130 122 Z" fill="var(--sun)"/>${txt(130, 160, "largo arriba · corto abajo")}`),
    },
    {
      html: `<h3>Alto y bajo</h3><p>Cuando medimos de abajo arriba, hablamos de <mark>altura</mark>. Una jirafa es <b>alta</b>; un ratón es <b>bajo</b>.</p><p>Para saber quién es más alto en clase, nos ponemos espalda con espalda, con los pies en el suelo. ¡Sin ponernos de puntillas!</p>`,
      svg: svg("Tres torres de distinta altura con una línea de suelo", `<path d="M20 150 H 240" stroke="var(--ink)" stroke-width="3"/>${[[50, 110, "var(--pen)"], [115, 60, "var(--leaf)"], [180, 85, "var(--red)"]].map(([x, h, c]) => `<rect x="${x}" y="${150 - h}" width="40" height="${h}" rx="4" fill="${c}" opacity=".85"/>`).join("")}${txt(70, 30, "la más alta", "var(--pen)", 13)}${txt(135, 80, "la más baja", "var(--leaf)", 13)}`),
    },
    {
      html: `<h3>Medir con el cuerpo</h3><p>Podemos medir con <mark>palmos</mark>, <mark>pies</mark> o <mark>pasos</mark>. Un palmo es lo que mide la mano abierta, del pulgar al meñique.</p><p>La mesa mide 6 palmos. Pero si la mide un adulto, le saldrán menos palmos, porque su mano es más grande. ¡Por eso inventamos el metro!</p>`,
      svg: svg("Una mesa medida con seis palmos", `<rect x="25" y="80" width="210" height="14" rx="3" fill="var(--sun)"/><path d="M40 94 V 150 M220 94 V 150" stroke="var(--sun)" stroke-width="8"/>${[...Array(6)].map((_, i) => `<path d="M${28 + i * 34} 72 q 17 -26 34 0" stroke="var(--pen)" stroke-width="3" fill="none"/>${num(45 + i * 34, 55, i + 1, "var(--pen)", 13)}`).join("")}${txt(130, 30, "6 palmos")}`),
    },
    {
      html: `<h3>El metro y la regla</h3><p>Para que todos midamos igual, usamos el <mark>metro</mark>. Un metro es, más o menos, lo que hay del suelo a tu cintura… ¡o un paso muy largo de un adulto!</p><p>Las cosas pequeñas se miden con la <b>regla</b>, que tiene unas rayitas llamadas centímetros.</p>`,
      svg: svg("Una regla con números del 0 al 10 midiendo una goma", `<rect x="20" y="90" width="220" height="40" rx="4" fill="var(--sun)" opacity=".6" stroke="var(--ink)" stroke-width="1.5"/>${[...Array(11)].map((_, i) => `<path d="M${30 + i * 20} 90 v ${i % 5 === 0 ? 16 : 10}" stroke="var(--ink)" stroke-width="1.5"/>${num(30 + i * 20, 124, i, "var(--ink)", 11)}`).join("")}<rect x="30" y="55" width="80" height="30" rx="6" fill="var(--red)" opacity=".75"/>${txt(130, 40, "la goma mide 4 cm", "var(--ink)", 13)}`),
      video: { id: "kzrplJ1jvko", titulo: "La longitud y su unidad de medida: el metro", canal: "Happy Learning Español", vistas: 3862472, megusta: 0 },
    },
    {
      html: `<h3>Pesado y ligero</h3><p>El <mark>peso</mark> nos dice si algo cuesta mucho o poco levantarlo. Una sandía es <b>pesada</b>; una pluma es <b>ligera</b>.</p><p>Para comparar pesos usamos la <b>balanza</b>: el lado que baja es el que pesa más.</p>`,
      svg: svg("Una balanza: el lado de la sandía baja y el de la pluma sube", balanza(-12, `<ellipse cx="0" cy="-12" rx="20" ry="14" fill="var(--leaf)"/>`, `<path d="M-14 -6 q 14 -20 28 -6 q -14 4 -28 6" fill="var(--sun)"/>`) + txt(60, 170, "pesa más", "var(--leaf)", 13) + txt(200, 170, "pesa menos", "var(--sun)", 13)),
    },
    {
      html: `<h3>El kilo</h3><p>El peso se mide en <mark>kilos</mark>. Un paquete de azúcar o de arroz pesa 1 kilo. Una sandía puede pesar 5 kilos.</p><p>¡Ojo! Lo grande no siempre es lo más pesado: una pelota de playa es grande pero ligera, y una piedra pequeña puede pesar mucho.</p>`,
      svg: svg("Un paquete de arroz de un kilo y una pelota de playa grande pero ligera", `<rect x="40" y="55" width="60" height="85" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${txt(70, 95, "ARROZ", "var(--ink)", 12)}${num(70, 122, "1 kg", "var(--red)", 16)}<circle cx="185" cy="95" r="45" fill="var(--sun)"/><path d="M185 50 V 140 M140 95 H 230" stroke="var(--red)" stroke-width="6" opacity=".7"/>${txt(185, 165, "grande y ligera", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Lleno y vacío: la capacidad</h3><p>La <mark>capacidad</mark> es lo que cabe dentro de un recipiente. Un vaso puede estar <b>lleno</b>, <b>medio lleno</b> o <b>vacío</b>.</p><p>Para saber dónde cabe más, llenamos uno y pasamos el agua al otro. Si se sale, el primero tenía más capacidad.</p>`,
      svg: svg("Tres vasos: lleno, medio lleno y vacío", `${vaso(35, 50, 45, 80, 1)}${vaso(108, 50, 45, 80, 0.5)}${vaso(181, 50, 45, 80, 0)}${txt(57, 155, "lleno", "var(--water)", 13)}${txt(130, 155, "a medias", "var(--water)", 13)}${txt(203, 155, "vacío", "var(--muted)", 13)}`),
    },
    {
      html: `<h3>El litro</h3><p>Los líquidos se miden en <mark>litros</mark>. Un brik de leche tiene 1 litro. Con una botella grande de agua de 1 litro y medio llenamos 6 vasos.</p><p>Medimos con litros el agua, la leche, el zumo o la gasolina del coche.</p>`,
      svg: svg("Un brik de leche de un litro llenando cuatro vasos", `<path d="M30 60 L 45 40 H 85 L 100 60 V 145 H 30 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>${txt(65, 95, "LECHE", "var(--pen)", 12)}${num(65, 125, "1 L", "var(--red)", 18)}${[0, 1, 2, 3].map((i) => vaso(125 + i * 32, 95, 24, 45, 0.85, "var(--line)")).join("")}${txt(180, 160, "4 vasos", "var(--ink)", 13)}`),
    },
    {
      html: `<h3>¿Para qué sirve? Juego de medidas</h3><p>Medimos para <b>comprar</b> (un kilo de naranjas, un litro de leche), para <b>cocinar</b> y para saber si un mueble cabe en casa.</p><p>Juego: elige 3 cosas de tu habitación y <mark>ordénalas de la más larga a la más corta</mark>. Luego, coge dos y adivina cuál pesa más. ¡Comprueba con las manos!</p>`,
      svg: svg("Una receta con un kilo de harina, un litro de leche y una regla", `<rect x="25" y="30" width="210" height="120" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${txt(130, 55, "Receta de bizcocho", "var(--ink)", 14)}${txt(130, 85, "1 kg de harina", "var(--sun)", 13)}${txt(130, 108, "1 L de leche", "var(--water)", 13)}${txt(130, 131, "molde de 20 cm", "var(--red)", 13)}`),
    },
  ],
  figura: {
    titulo: "Qué medimos y con qué",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Longitud con el metro, peso con el kilo y la balanza, capacidad con el litro">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      ${[["Longitud", "metro (m)", "largo · corto", "var(--pen)"], ["Peso", "kilo (kg)", "pesado · ligero", "var(--leaf)"], ["Capacidad", "litro (L)", "lleno · vacío", "var(--water)"]].map(([t, u, d, c], i) => `<rect x="${25 + i * 205}" y="25" width="180" height="210" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>${txt(115 + i * 205, 60, t, c, 22)}${num(115 + i * 205, 130, u, "var(--ink)", 22)}${txt(115 + i * 205, 190, d, "var(--muted)", 15)}`).join("")}
    </svg>`,
  },
  video: { id: "4e-dsOgOIrA", titulo: "Unidades de medida: súper fácil", canal: "Daniel Carreón", vistas: 3269653, megusta: 0, busqueda: "medidas longitud peso capacidad niños" },
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "¿Cuántos pasos mide tu pasillo?", pasos: ["Ponte al principio del pasillo, con los talones en la pared.", "Camina poniendo un pie justo delante del otro.", "Cuenta cada paso hasta llegar al final."], resultado: "por ejemplo, 12 pasos (cada uno tendrá su número)." },
    { enunciado: "¿Qué pesa más: un libro o una goma?", pasos: ["Coge uno en cada mano.", "Nota cuál te «tira» más hacia abajo.", "Si tienes balanza, compruébalo: baja el lado más pesado."], resultado: "pesa más el libro." },
    { enunciado: "¿Cuántos vasos llenas con una botella de 1 litro?", pasos: ["Llena un vaso con la botella.", "Sigue llenando vasos hasta vaciarla.", "Cuenta los vasos."], resultado: "unos 4 vasos normales." },
  ],
  errores: [
    "Comparar dos cosas sin empezar en el mismo punto: hay que alinearlas por un extremo.",
    "Dejar huecos o montar los palmos al medir: cada palmo empieza donde acaba el anterior.",
    "Pensar que lo más grande siempre pesa más.",
    "Medir los líquidos en kilos o el largo en litros: cada cosa tiene su unidad.",
  ],
  ejercicios: [
    { q: "¿Qué es más largo: un autobús o un coche?", sol: "Un autobús." },
    { q: "Mide tu mesa con palmos. ¿Cuántos tiene?", sol: "Respuesta según la mesa; suele estar entre 4 y 8 palmos." },
    { q: "¿Qué pesa más: una sandía o una fresa?", sol: "La sandía." },
    { q: "¿Qué cabe más: un cubo o una taza?", sol: "Un cubo." },
    { q: "¿Con qué medimos la leche: kilos o litros?", sol: "Con litros." },
    { q: "¿Con qué medimos el largo de la clase: metros o litros?", sol: "Con metros." },
    { q: "Ordena de más corto a más largo: un lápiz, una goma, una regla.", sol: "Goma, lápiz, regla." },
    { q: "Dibuja un vaso lleno y otro vacío.", sol: "Un vaso coloreado hasta arriba y otro sin colorear." },
    { q: "En la balanza, ¿qué lado baja?", sol: "El lado que pesa más." },
    { q: "¿Qué pesa más: 1 kilo de plumas o 1 kilo de piedras?", sol: "¡Pesan igual! Los dos pesan 1 kilo." },
  ],
  quiz: [
    { q: "Para medir lo largo usamos…", o: ["el metro", "el litro", "el kilo"], a: 0, e: "Longitud: metro." },
    { q: "Para medir el agua usamos…", o: ["el metro", "el litro", "el palmo"], a: 1, e: "Capacidad: litro." },
    { q: "Para medir el peso usamos…", o: ["el kilo", "el litro", "la regla"], a: 0, e: "Peso: kilo." },
    { q: "En la balanza baja el lado…", o: ["más ligero", "más pesado", "más bonito"], a: 1, e: "Lo pesado baja." },
    { q: "¿Qué es más ligero?", o: ["una pluma", "un libro", "una mochila llena"], a: 0, e: "La pluma casi no pesa." },
    { q: "Un vaso sin nada está…", o: ["lleno", "vacío", "pesado"], a: 1, e: "Vacío." },
    { q: "Un palmo es…", o: ["la mano abierta", "un paso", "un pie"], a: 0, e: "Del pulgar al meñique." },
    { q: "Para comparar dos lápices, los pongo…", o: ["empezando en el mismo sitio", "como quiera", "uno encima de otro"], a: 0, e: "Alineados por un extremo." },
    { q: "Las cosas pequeñas se miden con…", o: ["la regla", "la balanza", "el litro"], a: 0, e: "La regla tiene centímetros." },
    { q: "Lo más grande siempre pesa más…", o: ["verdadero", "falso", "a veces es verdad, pero no siempre"], a: 2, e: "Una pelota de playa es grande y ligera." },
  ],
  examen: [
    { q: "Un brik de leche tiene…", o: ["1 litro", "1 metro", "1 palmo"], a: 0, e: "Capacidad en litros." },
    { q: "¿Qué es más alto?", o: ["una jirafa", "un gato", "una silla"], a: 0, e: "La jirafa." },
    { q: "Un paquete de arroz pesa…", o: ["1 kilo", "1 litro", "1 metro"], a: 0, e: "Peso en kilos." },
    { q: "Si mido con palmos un adulto y yo, el adulto cuenta…", o: ["más palmos", "menos palmos", "los mismos"], a: 1, e: "Su mano es más grande." },
  ],
  feynman: ["Cómo comparo dos longitudes", "Para qué sirve una balanza", "Por qué usamos el metro y no los palmos"],
  mapa: mapa("MEDIR", "var(--pri)", [
    ["Longitud", "largo · corto · metro", "var(--pen)"],
    ["Peso", "pesado · ligero · kilo", "var(--leaf)"],
    ["Capacidad", "lleno · vacío · litro", "var(--water)"],
    ["Con el cuerpo", "palmos · pies · pasos", "var(--sun)"],
  ], 220),
  tarjetas: [
    ["¿Con qué se mide lo largo?", "Con el metro y la regla"],
    ["¿Con qué se mide el peso?", "Con el kilo y la balanza"],
    ["¿Con qué se mide la leche?", "Con el litro"],
    ["Lo contrario de pesado", "Ligero"],
    ["Lo contrario de lleno", "Vacío"],
    ["¿Qué lado baja en la balanza?", "El que pesa más"],
    ["¿Qué es un palmo?", "Lo que mide la mano abierta"],
    ["¿Pesa más 1 kg de plumas o 1 kg de hierro?", "Igual: 1 kg"],
  ],
  familias: [
    "Medid cosas de casa con palmos y pasos: la cama, el pasillo, la mesa.",
    "En la cocina, dejad que llene vasos con una botella de 1 litro y los cuente.",
    "En el súper, leed juntos las etiquetas: kg en la fruta, L en la leche.",
    "Haced una «balanza» con una percha y dos bolsas para comparar pesos.",
  ],
  profesores: PROF("Sentido de la medida: comparación directa de longitudes, masas y capacidades; medida con unidades no convencionales y primer contacto con metro, kilo y litro", ["Medir el aula con pasos de distintos alumnos y comparar resultados.", "Balanza de platillos en el rincón de matemáticas.", "Trasvases de agua o arena con recipientes de distintos tamaños."]),
  fuentes: FUENTES,
  revisado: "2026-11-12",
};
