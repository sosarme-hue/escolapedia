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
