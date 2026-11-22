// Educación Plástica 2º de Primaria: líneas y formas. Dibujos propios en SVG.
const { mapa } = require("./_util");
const { svg, rot, big, sol, arbol, casa, V, P, pincel, PROF, FUENTES } = require("./_pri2d");

const etq = (x, y, t, c = "var(--ink)", size = 13) => rot(x, y, t, { size, color: c });
const L = (d, c, w = 4) => `<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const espiral = (cx, cy, c) => { let d = `M${cx} ${cy}`; for (let a = 0; a < 6 * Math.PI; a += 0.3) { const r = 2 + a * 2.1; d += ` L${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}`; } return L(d, c, 3.5); };

module.exports = {
  materia: "Educación Plástica",
  curso: "2-primaria",
  titulo: "Líneas y formas",
  minutos: 25,
  objetivos: ["Reconocer y dibujar líneas rectas, curvas, quebradas, onduladas y en espiral", "Distinguir formas abiertas y cerradas y las figuras básicas", "Dibujar objetos y hacer cenefas combinando líneas y formas"],
  claves: ["línea recta", "línea curva", "quebrada", "ondulada", "espiral", "forma abierta", "forma cerrada", "cenefa", "contorno"],
  pregunta: {
    texto: "Si miras una casa, ¿qué formas ves? ¿Y qué líneas hay en el mar?",
    respuesta: "En la casa hay un <mark>cuadrado</mark> y un <mark>triángulo</mark> de tejado. En el mar las olas hacen <b>líneas onduladas</b>. ¡Todo está hecho de líneas y formas!",
  },
  bloques: [
    {
      html: `<h3>Todo empieza con una línea</h3><p>Cuando apoyas el lápiz en el papel y lo mueves, dibujas una <mark>línea</mark>.</p><p>Las líneas pueden ser largas o cortas, finas o gruesas. Pueden ir hacia arriba, hacia abajo o de lado.</p><p>Con líneas dibujamos el <b>contorno</b> de las cosas, que es su borde. ¡Cualquier dibujo empieza con una línea! Coge un lápiz y prueba a hacer una muy larga.</p>`,
      svg: svg("Un lápiz dibuja una línea larga que se convierte en el contorno de una casa", `${L("M20 140 H80 V90 L110 62 L140 90 V140 H200", "var(--pen)", 4)}<g transform="translate(206 140) rotate(-40)"><rect x="-4" y="-46" width="8" height="40" fill="${P.amarillo}" stroke="var(--ink)"/><path d="M-4 -6 L0 6 L4 -6z" fill="#f3c9a1" stroke="var(--ink)"/></g>${etq(130, 30, "Una línea hace un contorno", "var(--pen)", 15)}`),
    },
    {
      html: `<h3>Rectas y curvas</h3><p>La <mark>línea recta</mark> no se tuerce: va derecha como una regla.</p><p>Puede ser <b>horizontal</b>, tumbada como el horizonte, o <b>vertical</b>, de pie como un árbol. Si va inclinada, se llama <b>oblicua</b>.</p><p>La <mark>línea curva</mark> se dobla suavemente, como un arco iris o la letra C. Mira tu clase: ¿dónde hay líneas rectas? ¿Y curvas?</p>`,
      svg: svg("Tres líneas rectas: horizontal, vertical y oblicua, y una línea curva", `${L("M20 50 H100", P.azul)}${etq(60, 72, "horizontal", "var(--muted)", 11)}${L("M140 26 V86", P.rojo)}${etq(140, 102, "vertical", "var(--muted)", 11)}${L("M180 86 L240 26", P.verde)}${etq(212, 102, "oblicua", "var(--muted)", 11)}${L("M40 150 Q130 90 220 150", P.morado, 5)}${etq(130, 168, "curva", "var(--ink)", 13)}`),
      video: V("pl2b"),
    },
    {
      html: `<h3>Quebradas, onduladas y espirales</h3><p>Hay líneas <mark>más divertidas</mark>.</p><p>La línea <b>quebrada</b> cambia de dirección de golpe, como los dientes de una sierra o un rayo.</p><p>La línea <b>ondulada</b> sube y baja suave, como las olas del mar. La <b>espiral</b> da vueltas y vueltas, como un caracol o un remolino. Dibuja una de cada en tu cuaderno.</p>`,
      svg: svg("Línea quebrada en zigzag, línea ondulada como olas y una espiral como un caracol", `${L("M16 50 L36 24 L56 50 L76 24 L96 50 L116 24", P.rojo)}${etq(66, 74, "quebrada", "var(--ink)", 12)}${L("M16 120 q15 -24 30 0 t30 0 t30 0", P.azul)}${etq(62, 152, "ondulada", "var(--ink)", 12)}${espiral(192, 82, P.verde)}${etq(192, 152, "espiral", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Formas abiertas y cerradas</h3><p>Si una línea vuelve a <mark>su punto de partida</mark>, forma una figura cerrada.</p><p>Una figura cerrada tiene dentro y fuera. Se puede colorear por dentro sin que se salga la pintura.</p><p>Si la línea no se junta, la forma es <b>abierta</b>, como una letra C o una U. Un truco: si un ratón puede escaparse por un hueco, ¡la forma es abierta!</p>`,
      svg: svg("Una forma cerrada coloreada por dentro y una forma abierta con un hueco por donde sale un ratón", `<path d="M30 110 q0 -60 50 -60 q50 0 50 50 q0 50 -60 50 q-40 0 -40 -40z" fill="${P.amarillo}" opacity=".7" stroke="var(--ink)" stroke-width="4"/>${etq(80, 165, "cerrada", "var(--ink)", 14)}${L("M210 60 q-50 -10 -55 40 q0 50 55 45", "var(--ink)", 4)}<g transform="translate(232 104)"><ellipse rx="10" ry="6" fill="${P.gris}"/><circle cx="8" cy="-4" r="3" fill="${P.gris}"/><path d="M-10 0 q-8 4 -12 -2" stroke="${P.gris}" stroke-width="2" fill="none"/></g>${etq(196, 165, "abierta", "var(--ink)", 14)}`),
    },
    {
      html: `<h3>Las formas básicas</h3><p>Algunas formas cerradas tienen <mark>nombre propio</mark>.</p><p>El <b>círculo</b> es redondo, sin esquinas. El <b>cuadrado</b> tiene cuatro lados iguales. El <b>triángulo</b> tiene tres lados.</p><p>El <b>rectángulo</b> tiene cuatro lados, dos largos y dos cortos. Hay más: el óvalo, como un huevo, y el rombo, como una cometa. ¿Cuántas encuentras en tu mochila?</p>`,
      svg: svg("Formas básicas: círculo, cuadrado, triángulo y rectángulo", `<circle cx="42" cy="70" r="28" fill="${P.rojo}"/><rect x="88" y="42" width="56" height="56" fill="${P.azul}"/><path d="M190 42 L222 98 H158z" fill="${P.amarillo}" stroke="var(--ink)" stroke-width="1"/><rect x="44" y="120" width="120" height="36" fill="${P.verde}"/>${etq(42, 114, "círculo", "var(--ink)", 11)}${etq(116, 114, "cuadrado", "var(--ink)", 11)}${etq(190, 114, "triángulo", "var(--ink)", 11)}${etq(212, 143, "rectángulo", "var(--ink)", 11)}`),
    },
    {
      html: `<h3>Dibujar con formas</h3><p>Muchos dibujos se hacen <mark>juntando formas</mark> sencillas.</p><p>Una casa es un cuadrado con un triángulo encima. Un árbol es un rectángulo y un círculo. Un sol es un círculo con líneas rectas alrededor.</p><p>Los dibujantes piensan así: primero buscan las formas grandes y luego añaden los detalles. ¡Prueba a dibujar un tren con rectángulos y círculos!</p>`,
      svg: svg("Un dibujo hecho con formas: una casa con cuadrado y triángulo, un árbol con rectángulo y círculo, y un sol", `<rect x="30" y="90" width="70" height="60" fill="${P.amarillo}" stroke="var(--ink)" stroke-width="2"/><path d="M22 90 L65 52 L108 90z" fill="${P.rojo}" stroke="var(--ink)" stroke-width="2"/><rect x="56" y="118" width="18" height="32" fill="${P.marron}"/><rect x="146" y="104" width="14" height="46" fill="${P.marron}"/><circle cx="153" cy="86" r="30" fill="${P.verde}"/>${sol(218, 44, 16)}${L("M10 150 H250", "var(--line)", 3)}${etq(130, 172, "casa = cuadrado + triángulo", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>Cenefas y patrones</h3><p>Una <mark>cenefa</mark> es una tira decorada que repite lo mismo una y otra vez.</p><p>Por ejemplo: círculo, triángulo, círculo, triángulo… O una línea ondulada roja, otra azul, otra roja…</p><p>Las cenefas adornan platos, vestidos y paredes. Para hacerla bien, dibuja antes dos líneas rectas como carril. Después repite el dibujo dentro.</p>`,
      svg: svg("Dos cenefas: una con círculos y triángulos alternos y otra con olas de colores", `${L("M14 26 H246 M14 76 H246", "var(--line)", 2)}${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => i % 2 ? `<path d="M${30 + i * 29 - 12} 66 L${30 + i * 29} 36 L${30 + i * 29 + 12} 66z" fill="${P.azul}"/>` : `<circle cx="${30 + i * 29}" cy="51" r="12" fill="${P.rojo}"/>`).join("")}${L("M14 100 H246 M14 150 H246", "var(--line)", 2)}${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => L(`M${16 + i * 29} 125 q7 -14 14.5 0 t14.5 0`, i % 2 ? P.verde : P.naranja, 4)).join("")}${etq(130, 172, "Se repite una y otra vez", "var(--muted)", 12)}`),
    },
    {
      html: `<h3>¿Para qué sirve?</h3><p>Las líneas y las formas están <mark>en todas partes</mark>.</p><p>Los arquitectos las usan para dibujar casas y puentes. Los diseñadores las usan para hacer logotipos y señales de tráfico.</p><p>Las señales de peligro son triángulos y las de prohibido son círculos. Así se reconocen de lejos. ¡Las formas también hablan!</p>`,
      svg: svg("Señales de tráfico: un triángulo de peligro y un círculo de prohibido", `<path d="M70 40 L118 124 H22z" fill="${P.blanco}" stroke="${P.rojo}" stroke-width="9" stroke-linejoin="round"/>${big(70, 112, "!", P.negro, 34)}<circle cx="190" cy="88" r="44" fill="${P.blanco}" stroke="${P.rojo}" stroke-width="9"/><path d="M160 88 H220" stroke="${P.rojo}" stroke-width="12"/>${etq(70, 160, "triángulo: peligro", "var(--ink)", 12)}${etq(190, 160, "círculo: prohibido", "var(--ink)", 12)}`),
    },
    {
      html: `<h3>Jugamos al dictado de líneas</h3><p>Un niño dice <mark>qué línea dibujar</mark>. Los demás la hacen en un folio.</p><p>«Una línea recta horizontal. Ahora una ondulada encima. Ahora un círculo arriba a la derecha.»</p><p>Al final comparamos los dibujos. ¡Han salido paisajes muy distintos! Una línea ondulada puede ser el mar y un círculo, el sol.</p>`,
      svg: svg("Dibujo hecho al dictado: una línea recta, una ondulada encima y un círculo arriba que parece un paisaje con mar y sol", `<rect x="14" y="14" width="232" height="152" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${L("M24 140 H236", P.marron, 4)}${L("M24 116 q14 -16 28 0 t28 0 t28 0 t28 0 t28 0 t28 0 t28 0", P.azul, 4)}<circle cx="204" cy="52" r="20" fill="none" stroke="${P.naranja}" stroke-width="4"/>${pincel(70, 70, P.rojo, 30)}`),
    },
  ],
  figura: {
    titulo: "Líneas y formas",
    svg: `<svg viewBox="0 0 640 300" role="img" aria-label="Tipos de líneas y formas: recta, curva, quebrada, ondulada, espiral, círculo, cuadrado y triángulo"><rect width="640" height="300" rx="16" fill="var(--paper)"/>${rot(320, 32, "Líneas", { size: 20, color: "var(--pen)" })}${L("M30 80 H120", P.azul, 5)}${L("M150 95 Q195 50 240 95", P.morado, 5)}${L("M270 95 L290 65 L310 95 L330 65 L350 95", P.rojo, 5)}${L("M380 80 q15 -22 30 0 t30 0 t30 0", P.verde, 5)}${espiral(560, 80, P.naranja)}${["recta", "curva", "quebrada", "ondulada", "espiral"].map((t, i) => rot([75, 195, 310, 425, 560][i], 128, t, { size: 15 })).join("")}${rot(320, 172, "Formas", { size: 20, color: "var(--pen)" })}<circle cx="160" cy="232" r="34" fill="${P.rojo}"/><rect x="286" y="198" width="68" height="68" fill="${P.azul}"/><path d="M480 196 L520 266 H440z" fill="${P.amarillo}" stroke="var(--ink)"/>${rot(160, 290, "círculo", { size: 14 })}${rot(320, 290, "cuadrado", { size: 14 })}${rot(480, 290, "triángulo", { size: 14 })}</svg>`,
  },
  video: V("pl2v"),
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    { enunciado: "Dibuja el mar con olas.",
      pasos: ["Las olas suben y bajan suave.", "Esa es la línea ondulada.", "Dibuja varias, una encima de otra, en azul."],
      resultado: "Varias líneas onduladas azules: ¡el mar!" },
    { enunciado: "¿La letra O es una forma abierta o cerrada?",
      pasos: ["Mira si la línea vuelve al principio.", "La O se junta y no tiene hueco.", "Un ratón no podría escapar."],
      resultado: "Es una forma cerrada." },
    { enunciado: "Dibuja un coche solo con formas básicas.",
      pasos: ["El cuerpo del coche es un rectángulo.", "Encima, otro rectángulo más pequeño para las ventanas.", "Las ruedas son dos círculos."],
      resultado: "Dos rectángulos y dos círculos forman un coche." },
  ],
  errores: [
    "Llamar curva a una línea quebrada: la quebrada tiene picos, la curva es suave.",
    "Confundir cuadrado y rectángulo: el cuadrado tiene los cuatro lados iguales.",
    "Dejar huecos al cerrar una figura: luego la pintura se sale.",
    "Hacer cenefas sin carril: se tuercen. Primero se dibujan dos líneas guía.",
  ],
  ejercicios: [
    { q: "Dibuja una línea recta horizontal y otra vertical.", sol: "Horizontal: tumbada. Vertical: de pie." },
    { q: "Dibuja una línea quebrada.", sol: "Una línea en zigzag, con picos." },
    { q: "¿Qué línea parece las olas del mar?", sol: "La línea ondulada." },
    { q: "¿Qué animal tiene una espiral en su concha?", sol: "El caracol." },
    { q: "¿Qué es una forma cerrada?", sol: "Una forma cuya línea vuelve al principio y no tiene huecos." },
    { q: "Escribe una letra que sea forma abierta.", sol: "Por ejemplo: C, U o L." },
    { q: "¿Cuántos lados tiene un triángulo?", sol: "Tres." },
    { q: "¿Con qué dos formas dibujas una casa?", sol: "Un cuadrado y un triángulo." },
    { q: "Haz una cenefa de círculos y cuadrados alternos.", sol: "Círculo, cuadrado, círculo, cuadrado… entre dos líneas guía." },
    { q: "Dibuja un robot usando solo formas básicas.", sol: "Respuesta libre: por ejemplo, rectángulos para el cuerpo y círculos para los ojos." },
  ],
  quiz: [
    { q: "Una línea que no se tuerce es…", o: ["recta", "curva", "ondulada"], a: 0, e: "La recta va derecha." },
    { q: "Una línea en zigzag es…", o: ["quebrada", "espiral", "curva"], a: 0, e: "Cambia de dirección de golpe." },
    { q: "La línea que da vueltas como un caracol es…", o: ["ondulada", "espiral", "vertical"], a: 1, e: "Espiral." },
    { q: "Una línea tumbada como el horizonte es…", o: ["vertical", "horizontal", "oblicua"], a: 1, e: "Horizontal." },
    { q: "Si la línea vuelve al principio, la forma es…", o: ["abierta", "cerrada", "quebrada"], a: 1, e: "Cerrada." },
    { q: "¿Qué forma no tiene esquinas?", o: ["círculo", "cuadrado", "triángulo"], a: 0, e: "El círculo es redondo." },
    { q: "Un triángulo tiene…", o: ["tres lados", "cuatro lados", "ningún lado"], a: 0, e: "Tres lados." },
    { q: "Un tejado de casa suele ser un…", o: ["círculo", "triángulo", "óvalo"], a: 1, e: "Triángulo." },
    { q: "Una cenefa es…", o: ["un dibujo que se repite en una tira", "una línea sola", "un color"], a: 0, e: "Se repite una y otra vez." },
    { q: "Las señales de peligro tienen forma de…", o: ["círculo", "triángulo", "cuadrado"], a: 1, e: "Triángulo." },
  ],
  examen: [
    { q: "Las olas del mar parecen líneas…", o: ["onduladas", "rectas", "quebradas"], a: 0, e: "Suben y bajan suave." },
    { q: "La letra C es una forma…", o: ["abierta", "cerrada", "cuadrada"], a: 0, e: "Tiene un hueco." },
    { q: "Un rectángulo tiene…", o: ["cuatro lados, dos largos y dos cortos", "tres lados", "todos los lados curvos"], a: 0, e: "Rectángulo." },
    { q: "Un árbol sencillo se dibuja con…", o: ["rectángulo y círculo", "solo triángulos", "espirales"], a: 0, e: "Tronco y copa." },
  ],
  feynman: ["Qué tipos de líneas hay y cómo son", "Qué diferencia hay entre una forma abierta y una cerrada", "Cómo se dibujan cosas juntando formas básicas"],
  mapa: mapa("LÍNEAS Y FORMAS", "var(--pri)", [
    ["Rectas", "horizontal, vertical, oblicua", "#1e88e5"],
    ["Otras líneas", "curva, quebrada, ondulada, espiral", "#e53935"],
    ["Formas", "abiertas y cerradas", "#43a047"],
    ["Figuras", "círculo, cuadrado, triángulo", "#8e24aa"],
  ], 230),
  tarjetas: [
    ["Línea recta", "No se tuerce, va derecha"],
    ["Línea curva", "Se dobla suave, como un arco"],
    ["Línea quebrada", "Zigzag con picos"],
    ["Línea ondulada", "Sube y baja como las olas"],
    ["Espiral", "Da vueltas como un caracol"],
    ["Forma cerrada", "La línea vuelve al principio; tiene dentro y fuera"],
    ["Forma abierta", "Tiene un hueco, como la C"],
    ["Cenefa", "Tira con un dibujo que se repite"],
  ],
  familias: [
    "Buscad líneas y formas en la calle: señales, ventanas, ruedas…",
    "Jugad al dictado de líneas y comparad los dibujos.",
    "Haced una cenefa para decorar una caja o un marco.",
    "Dibujad juntos animales usando solo círculos, triángulos y rectángulos.",
  ],
  profesores: PROF("Educación Plástica y Visual: elementos del lenguaje visual; la línea (tipos y direcciones); formas abiertas y cerradas; figuras geométricas básicas; composición con formas; ritmos y cenefas", ["Dictado de líneas para crear paisajes.", "Construir figuras con formas recortadas.", "Cenefas con alternancia de forma y color."]),
  fuentes: FUENTES,
  revisado: "2026-11-13",
};

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer cómo usaba Kandinsky puntos, líneas y formas", "Saber qué expresan las líneas", "Usar trazos finos, gruesos, continuos y discontinuos", "Crear un mandala con formas y patrones"],
  lectura: { titulo: "La línea que se escapó", html: `<p>Una mañana, Hugo dibujó una <b>línea recta</b> en su cuaderno. De repente, la línea se movió y saltó fuera de la hoja.</p><p>—¡Vuelve aquí! —gritó Hugo.</p><p>Pero la línea ya corría por la mesa. Primero subió y bajó haciendo <b>zigzag</b>, como los dientes de un tiburón. Después se puso a hacer <b>ondas</b>, como el mar.</p><p>Al llegar a la ventana, dio vueltas y vueltas hasta formar una <b>espiral</b>, como la concha de un caracol.</p><p>Luego se estiró, tranquila y <b>horizontal</b>, como el horizonte al atardecer.</p><p>Hugo la siguió por toda la casa. Por fin, la línea se cansó, se dobló sobre sí misma y se cerró formando un <b>círculo</b>.</p><p>—Ya no puedes escapar —rio Hugo—. ¡Ahora eres una forma cerrada!</p><p>La cogió con cuidado y la devolvió al cuaderno. Desde ese día, Hugo sabe que una línea puede convertirse en cualquier cosa.</p>` },
  tras: {
    "Todo empieza con una línea": [
      ["Kandinsky: punto, línea y color", `<p><mark>Vasili Kandinsky</mark> fue un pintor ruso que pensaba que los puntos, las líneas y las formas podían expresar emociones, como la música.</p><ul><li>Sus cuadros no representan cosas reales: son <b>abstractos</b>.</li><li>Usaba <b>círculos</b> de muchos colores, unos dentro de otros.</li><li>Dibujaba líneas <b>rectas, curvas y quebradas</b> que se cruzaban.</li><li>Añadía <b>triángulos</b> y cuadrados, como si flotaran.</li><li>Pintaba mientras escuchaba música: decía que veía los colores de los sonidos.</li></ul><p>Uno de sus cuadros más famosos para niños es el de los <b>círculos concéntricos</b>: cuadraditos con círculos de colores dentro.</p><p><b>Actividad</b>: divide un folio en seis cuadros y dibuja en cada uno círculos de colores, unos dentro de otros, como Kandinsky.</p>`,
        L6.filas("Kandinsky", [["círculos", "de colores", cAZ], ["líneas", "que se cruzan", cRO], ["triángulos", "flotan", cNA], ["música", "inspira", cMO]]),
        ["3hLMs3kPFIg", "25 cuadros de Kandinsky con música", "Todo Cuadros", 421195]],
    ],
    "Rectas y curvas": [
      ["Líneas que expresan", `<p>Las líneas no solo dibujan cosas: también <mark>expresan</mark> sensaciones.</p><ul><li><b>Horizontales</b>: tranquilidad y calma, como el mar quieto o una persona tumbada.</li><li><b>Verticales</b>: fuerza y altura, como un árbol o un rascacielos.</li><li><b>Inclinadas</b>: movimiento, como algo que cae o resbala.</li><li><b>Curvas</b> y onduladas: suavidad y alegría, como el agua o el viento.</li><li><b>Quebradas</b> en zigzag: nervios, peligro o energía, como un rayo.</li></ul><p>Los dibujantes de cómic usan estas líneas para que sepamos cómo se siente un personaje sin decirlo.</p><p><b>Actividad</b>: dibuja un mar tranquilo solo con líneas horizontales y una tormenta solo con líneas quebradas.</p>`,
        H6.dos("Sensaciones", ["CALMA", ["horizontal", "curva", "ondulada"], cAZ], ["ENERGÍA", ["zigzag", "inclinada", "vertical"], cRO])],
    ],
    "Quebradas, onduladas y espirales": [
      ["Gruesa, fina, continua y discontinua", `<p>Además de su forma, las líneas pueden tener distinto <mark>trazo</mark>:</p><ul><li><b>Gruesa</b>: se ve mucho y parece fuerte. Se hace apretando o con un rotulador gordo.</li><li><b>Fina</b>: delicada y suave. Se hace con lápiz afilado y sin apretar.</li><li><b>Continua</b>: no se corta en ningún momento.</li><li><b>Discontinua</b>: hecha de rayitas separadas, como las de la carretera.</li><li><b>De puntos</b>: puntitos seguidos, como las líneas de recortar.</li></ul><p>Mezclando trazos, un dibujo gana variedad: el contorno grueso, los detalles finos y los caminos discontinuos.</p><p>En los mapas, las líneas discontinuas suelen marcar fronteras o caminos.</p><p><b>Actividad</b>: dibuja un mapa del tesoro usando una línea discontinua para el camino y una gruesa para el río.</p>`,
        L6.filas("Trazos", [["gruesa", "fuerte", cMO], ["fina", "delicada", cVE], ["continua", "sin cortes", cAZ], ["discontinua", "rayitas", cNA]])],
    ],
    "Cenefas y patrones": [
      ["Mandalas", `<p>Un <mark>mandala</mark> es un dibujo circular que se forma repitiendo figuras alrededor de un centro.</p><ul><li>Se empieza por un <b>punto</b> en el centro.</li><li>Alrededor se dibujan <b>círculos</b> cada vez más grandes.</li><li>En cada anillo se repite la misma forma: pétalos, triángulos, gotas…</li><li>Todo es <b>simétrico</b>: igual por todos los lados.</li><li>Al final se colorea, repitiendo los colores en cada anillo.</li></ul><p>Los mandalas vienen de la India y del Tíbet. Allí los monjes los hacen con <b>arena de colores</b> y, al terminar, ¡los borran!</p><p>Colorear mandalas ayuda a <b>concentrarse</b> y a relajarse.</p><p><b>Actividad</b>: dibuja un mandala con un plato para el círculo grande y un vaso para el pequeño, y rellénalo con formas repetidas.</p>`,
        H6.flujo("Mandala", ["centro|punto", "círculos|anillos", "repetir|formas", "colorear|igual"], cVE)],
    ],
  },
  final: [
    ["Líneas en la naturaleza", `<p>Si miramos con atención, la <mark>naturaleza</mark> está llena de líneas y formas:</p><ul><li>La <b>telaraña</b>: líneas rectas que salen del centro y una espiral que las une.</li><li>La concha del <b>caracol</b>: una espiral perfecta.</li><li>La <b>cebra</b> y el <b>tigre</b>: rayas onduladas.</li><li>Las <b>olas</b> del mar: líneas onduladas.</li><li>Los <b>rayos</b> de una tormenta: líneas quebradas.</li><li>Las <b>hojas</b>: una línea central con nervios a los lados.</li><li>Los <b>panales</b> de las abejas: hexágonos, figuras de seis lados.</li></ul><p>Muchos artistas y diseñadores se inspiran en estas formas para sus obras.</p><p><b>Actividad</b>: sal al patio con una lupa, busca tres líneas o formas de la naturaleza y dibújalas.</p>`,
      L6.filas("Naturaleza", [["caracol", "espiral", cNA], ["cebra", "ondas", cMO], ["rayo", "zigzag", cRO], ["panal", "hexágonos", cAZ]])],
    ["Repaso: la línea que se escapó", `<p>Repasamos con la <mark>lectura</mark>:</p><ul><li>Hugo dibujó una línea <b>recta</b> que se escapó.</li><li>Hizo <b>zigzag</b>, como dientes de tiburón.</li><li>Hizo <b>ondas</b>, como el mar.</li><li>Dio vueltas en <b>espiral</b>, como un caracol.</li><li>Se estiró <b>horizontal</b>, tranquila, como el horizonte.</li><li>Al final se cerró en un <b>círculo</b>: una forma cerrada.</li></ul><p>El cuento nos enseña que todas las formas nacen de una línea que se mueve.</p><p><b>Actividad</b>: dibuja el recorrido de la línea de Hugo por la casa, con cada tipo de línea en su sitio.</p>`,
      H6.flujo("Hugo", ["recta|escapa", "zigzag|ondas", "espiral|caracol", "círculo|cerrada"], cRO)],
  ],
  ejemplos: [
    ["¿Qué sensación da una línea horizontal?", ["Como el mar quieto."], "Calma."],
    ["¿Cómo es la línea de la carretera?", ["Rayitas separadas."], "Discontinua."],
  ],
  errores: ["Pensar que las líneas solo sirven para hacer contornos.", "Hacer un mandala sin repetir las formas."],
  ejercicios: [
    ["b", "¿De dónde era Kandinsky?", "De Rusia."],
    ["b", "¿Qué forma tiene la concha del caracol?", "Espiral."],
    ["b", "¿Qué es un mandala?", "Un dibujo circular con formas repetidas."],
    ["b", "Di un tipo de trazo.", "Grueso, fino, continuo, discontinuo…"],
    ["b", "¿Qué expresa una línea en zigzag?", "Nervios, peligro o energía."],
    ["m", "¿Qué son los cuadros abstractos?", "Los que no representan cosas reales."],
    ["m", "¿Qué expresa una línea vertical?", "Fuerza y altura."],
    ["m", "¿Dónde hacen los monjes mandalas de arena?", "En la India y el Tíbet."],
    ["m", "¿Qué figura forman los panales?", "Hexágonos."],
    ["m", "¿Cómo se hace una línea fina?", "Con lápiz afilado y sin apretar."],
    ["a", "En la lectura, ¿qué forma tomó la línea al final?", "Un círculo."],
    ["a", "¿Por qué Kandinsky pintaba escuchando música?", "Porque decía que veía los colores de los sonidos."],
    ["a", "¿Qué líneas usarías para dibujar una tormenta?", "Quebradas e inclinadas."],
    ["a", "Describe cómo es una telaraña.", "Rectas desde el centro y una espiral que las une."],
  ],
  quiz: [
    ["Kandinsky pintaba muchos…", ["círculos", "retratos", "paisajes"], "Kandinsky."],
    ["La línea horizontal expresa…", ["calma", "peligro", "nervios"], "Sensaciones."],
    ["La línea de rayitas es…", ["discontinua", "continua", "gruesa"], "Trazos."],
    ["Un mandala es…", ["circular", "cuadrado", "una línea"], "Mandala."],
    ["La cebra tiene rayas…", ["onduladas", "de puntos", "invisibles"], "Naturaleza."],
  ],
  examen: [
    ["En la lectura, ¿cómo se llama el niño?", ["Hugo", "Pablo", "Lucas"], "Lectura."],
    ["¿Qué forma tenía la línea en la ventana?", ["espiral", "cuadrado", "triángulo"], "Repaso."],
  ],
  tarjetas: [
    ["Líneas que expresan", "Horizontal: calma. Vertical: fuerza. Zigzag: energía. Curva: suavidad."],
    ["Mandala", "Dibujo circular con formas repetidas alrededor de un centro."],
  ],
  glosario: [
    ["Kandinsky", "Pintor de círculos y líneas abstractas."],
    ["Abstracto", "Que no representa cosas reales."],
    ["Trazo", "Forma de hacer una línea."],
    ["Discontinua", "Línea de rayitas separadas."],
    ["Mandala", "Dibujo circular con formas repetidas."],
    ["Simétrico", "Igual por los dos lados."],
    ["Concéntricos", "Círculos con el mismo centro."],
    ["Hexágono", "Figura de seis lados."],
    ["Horizonte", "Línea donde parece juntarse el cielo con la tierra."],
    ["Espiral", "Línea que da vueltas alrededor de un punto."],
  ],
  situacion: {
    titulo: "Galería de líneas",
    reto: "La clase crea una galería con obras al estilo Kandinsky, mandalas y dibujos de líneas que expresan emociones.",
    pasos: ["Hacer una obra de círculos concéntricos al estilo Kandinsky.", "Dibujar un mandala con formas repetidas.", "Dibujar una emoción usando solo un tipo de línea.", "Exponer las obras y adivinar la emoción de cada una."],
    producto: "Una galería de líneas y formas en el pasillo.",
    evaluacion: ["Conoce a Kandinsky.", "Sabe qué expresan las líneas.", "Usa distintos trazos.", "Crea un mandala."],
  },
});
