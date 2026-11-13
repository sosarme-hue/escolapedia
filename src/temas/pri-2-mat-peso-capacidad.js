// Matemáticas 2º de Primaria: medidas de peso y capacidad (kilo y litro).
const P = require("./_pri2a");
const { svg, num, txt, nino, balanza, botella, manzana, flechaR } = P;

// Pesa con su etiqueta.
const pesa = (x, y, t, w = 34, c = "var(--muted)") => `<g><path d="M${x - w / 2} ${y} l6 -${w * 0.7} h${w - 12} l6 ${w * 0.7}z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="${x}" cy="${y - w * 0.7 - 4}" r="4" fill="none" stroke="var(--ink)" stroke-width="2"/>${num(x, y - 6, t, "var(--card)", 11)}</g>`;
// Bolsa de 1 kg.
const saco = (x, y, t, c = "var(--sun)") => `<g><path d="M${x - 18} ${y} q-4 -30 6 -40 h24 q10 10 6 40z" fill="${c}" stroke="var(--ink)" stroke-width="1.5"/><path d="M${x - 8} ${y - 40} l8 -6 l8 6" stroke="var(--ink)" stroke-width="1.5" fill="none"/>${num(x, y - 14, t, "var(--ink)", 11)}</g>`;
// Pluma ligera.
const pluma = (x, y) => `<g transform="translate(${x} ${y}) rotate(-30)"><path d="M0 0 q-8 -16 0 -32 q8 16 0 32z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/><path d="M0 4 V-30" stroke="var(--ink)" stroke-width="1"/></g>`;
// Vaso de capacidad.
const vaso = (x, y, nivel = 0.7, c = "var(--water)") => `<g><path d="M${x - 12} ${y - 34} l3 34 h18 l3 -34z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><path d="M${x - 12 + 3 * (1 - nivel)} ${y - 34 * nivel} l${3 * nivel} ${34 * nivel} h18 l${3 * nivel} ${-34 * nivel}z" fill="${c}" opacity=".6"/></g>`;

module.exports = P.tema({
  materia: "Matemáticas",
  titulo: "Medidas de peso y capacidad",
  objetivos: ["Comparar qué pesa más y qué pesa menos", "Conocer el kilo y el medio kilo", "Conocer el litro, el medio litro y el cuarto de litro"],
  claves: ["peso", "kilo (kg)", "medio kilo", "balanza", "capacidad", "litro (l)", "medio litro", "cuarto de litro"],
  pregunta: ["¿Qué pesa más, un kilo de plumas o un kilo de piedras?", "¡Pesan <mark>lo mismo</mark>! Los dos pesan <b>1 kilo</b>. Las plumas ocupan mucho más sitio, pero el peso es igual."],
  bloques: [
    ["Pesado y ligero", `<p>Algunas cosas son <mark>pesadas</mark>: cuesta levantarlas, como una mochila llena o una sandía.</p><p>Otras son <mark>ligeras</mark>: casi no pesan, como una pluma o una hoja de papel.</p><p>Con las manos podemos notar qué pesa más. Pero a veces dos cosas pesan casi igual y las manos se equivocan.</p>`,
      svg("Una niña sostiene una sandía pesada y una pluma ligera", `${nino(130, 160, { nina: true, pose: "brazos", c: "var(--red)" })}<ellipse cx="80" cy="116" rx="26" ry="20" fill="var(--leaf)" stroke="var(--ink)" stroke-width="1.5"/><path d="M60 110 q20 -8 40 0 M58 120 q22 -6 44 0" stroke="#1f6b3a" stroke-width="2" fill="none"/>${pluma(190, 112)}${txt(80, 160, "pesada", "var(--leaf)", 14)}${txt(196, 160, "ligera", "var(--pen)", 14)}`)],
    ["La balanza", `<p>Para comparar pesos usamos la <mark>balanza</mark>.</p><p>El plato que <b>baja</b> tiene la cosa que <b>pesa más</b>. El plato que sube tiene la que pesa menos.</p><p>Si los dos platos quedan a la <b>misma altura</b>, las dos cosas pesan lo mismo. ¡La balanza está en equilibrio!</p>`,
      svg("Una balanza con una piña que baja y una manzana que sube", `${balanza(130, 52, 1.4, `<g transform="translate(0 -14)"><ellipse cx="0" cy="0" rx="12" ry="16" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.2"/><path d="M-6 -16 l6 -12 l6 12" fill="var(--leaf)"/></g>`, `<g transform="translate(0 -10)">${manzana(0, 0)}</g>`)}${txt(56, 166, "pesa más", "var(--red)", 13)}${txt(204, 166, "pesa menos", "var(--pen)", 13)}`)],
    ["El kilo", `<p>Para medir el peso usamos el <mark>kilogramo</mark>, que llamamos <b>kilo</b>. Se escribe <b>kg</b>.</p><p>Un paquete de <b>arroz</b> o de <b>azúcar</b> suele pesar 1 kilo. Un litro de leche pesa más o menos 1 kilo.</p><p>Tú pesas unos <b>25 kilos</b>. ¡Como 25 paquetes de arroz!</p>`,
      svg("Una balanza en equilibrio con un paquete de arroz de un kilo y una pesa de un kilo", `${balanza(130, 52, 0, `<g transform="translate(0 -2)">${saco(0, 0, "1 kg")}</g>`, `<g transform="translate(0 -2)">${pesa(0, 0, "1 kg", 38)}</g>`)}${txt(130, 166, "pesan lo mismo: 1 kg", "var(--pen)", 14)}`)],
    ["Medio kilo", `<p>Si partimos un kilo en <b>dos partes iguales</b>, cada parte es <mark>medio kilo</mark>.</p><p>Dos medios kilos forman un kilo entero: ½ kg + ½ kg = <b>1 kg</b>.</p><p>En la frutería pedimos «medio kilo de fresas». Y en la panadería, un pan grande puede pesar medio kilo.</p>`,
      svg("Dos pesas de medio kilo equilibran una pesa de un kilo", `${balanza(130, 52, 0, `<g transform="translate(0 -2)">${pesa(-11, 0, "½", 22)}${pesa(11, 0, "½", 22)}</g>`, `<g transform="translate(0 -2)">${pesa(0, 0, "1 kg", 38)}</g>`)}${txt(130, 166, "½ kg + ½ kg = 1 kg", "var(--pen)", 15)}`)],
    ["La capacidad", `<p>La <mark>capacidad</mark> es lo que <b>cabe</b> dentro de un recipiente: una botella, un vaso, una bañera.</p><p>En una bañera cabe <b>mucha</b> agua. En una cuchara cabe <b>poca</b>.</p><p>Para comparar, podemos llenar uno y echar el agua en el otro. Si se sale, en el primero cabía más.</p>`,
      svg("Una bañera con mucha agua y una cuchara con poca", `<path d="M20 80 h140 v30 q0 26 -26 26 h-88 q-26 0 -26 -26z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M24 90 h132 v20 q0 22 -22 22 h-88 q-22 0 -22 -22z" fill="var(--water)" opacity=".55"/><path d="M40 136 v14 M140 136 v14" stroke="var(--ink)" stroke-width="3"/><ellipse cx="210" cy="110" rx="18" ry="10" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/><ellipse cx="210" cy="110" rx="12" ry="6" fill="var(--water)" opacity=".6"/><path d="M226 106 L246 86" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>${txt(90, 60, "cabe mucho", "var(--pen)", 14)}${txt(210, 150, "cabe poco", "var(--red)", 14)}`), P.V("pesB")],
    ["El litro", `<p>Para medir la capacidad usamos el <mark>litro</mark>. Se escribe <b>l</b>.</p><p>Un <b>cartón de leche</b> o una botella grande de agua tienen 1 litro.</p><p>Con una botella de 1 litro podemos llenar unos <b>4 vasos</b>. Una bañera llena tiene unos 150 litros.</p>`,
      svg("Un cartón de leche de un litro llena cuatro vasos", `<g><path d="M30 150 V70 l10 -16 h36 l10 16 V150z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M30 70 h56" stroke="var(--ink)" stroke-width="1.5"/>${num(58, 112, "1 l", "var(--pen)", 22)}${txt(58, 134, "leche", "var(--muted)", 12)}</g>${flechaR(96, 104, 120, 104)}${[0, 1, 2, 3].map((i) => vaso(140 + i * 28, 140, 0.8, "var(--card)")).join("")}${[0, 1, 2, 3].map((i) => `<path d="M${130 + i * 28} ${140 - 26} h20" stroke="var(--line)" stroke-width="0"/>`).join("")}${txt(182, 166, "unos 4 vasos", "var(--ink)", 13)}`)],
    ["Medio litro y cuarto de litro", `<p>Si repartimos un litro en <b>2 botellas iguales</b>, cada una tiene <mark>medio litro</mark> (½ l).</p><p>Si lo repartimos en <b>4 botellitas iguales</b>, cada una tiene un <mark>cuarto de litro</mark> (¼ l).</p><p>Así: 1 l = 2 medios litros = 4 cuartos de litro.</p>`,
      svg("Una botella de un litro, dos de medio litro y cuatro de un cuarto", `${botella(34, 150, 96)}${txt(34, 172, "1 l", "var(--pen)", 14)}${botella(90, 150, 72)}${botella(124, 150, 72)}${txt(107, 172, "½ l + ½ l", "var(--leaf)", 13)}${[0, 1, 2, 3].map((i) => botella(166 + i * 22, 150, 52)).join("")}${txt(200, 172, "4 de ¼ l", "var(--red)", 13)}`), P.V("pesB2")],
    ["¿Para qué sirve?", `<p>Pesamos y medimos la capacidad cuando vamos a <b>comprar</b> y cuando <b>cocinamos</b>.</p><p>Para hacer un bizcocho necesitamos <b>medio kilo de harina</b> y un <b>cuarto de litro</b> de leche.</p><p>En la farmacia y en el médico nos <mark>pesan</mark> para ver si crecemos bien.</p>`,
      svg("Ingredientes de un bizcocho: medio kilo de harina y un cuarto de litro de leche", `${saco(60, 130, "½ kg", "var(--card)")}${txt(60, 160, "harina", "var(--ink)", 13)}${botella(130, 140, 64)}${txt(130, 160, "¼ l leche", "var(--ink)", 13)}<path d="M180 130 h60 l-6 -26 h-48z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M186 104 q24 -22 48 0" fill="#c99a5b" stroke="var(--ink)" stroke-width="1.5"/>${txt(210, 160, "¡bizcocho!", "var(--red)", 13)}`)],
    ["Juego: ¿cuál pesa más?", `<p>Coge dos objetos de casa, uno en cada mano. Por ejemplo, un <b>libro</b> y una <b>manzana</b>.</p><p>Adivina cuál pesa más. Después compruébalo con una <b>percha</b> y dos bolsas: ¡es una balanza casera!</p><p>El lado que <mark>baja más</mark> tiene el objeto más pesado.</p>`,
      svg("Una percha con dos bolsas como balanza casera", `<path d="M130 30 q0 -12 10 -12" stroke="var(--ink)" stroke-width="3" fill="none"/><path d="M130 34 L50 70 H210z" fill="none" stroke="var(--ink)" stroke-width="3" transform="rotate(-6 130 52)"/><path d="M58 76 V100 M200 64 V88" stroke="var(--muted)" stroke-width="2"/><path d="M40 100 h36 l-4 40 h-28z" fill="var(--sun)" fill-opacity=".5" stroke="var(--ink)" stroke-width="1.5"/><rect x="48" y="110" width="20" height="26" fill="var(--pen)"/><path d="M182 88 h36 l-4 40 h-28z" fill="var(--sun)" fill-opacity=".5" stroke="var(--ink)" stroke-width="1.5"/>${manzana(200, 112)}${txt(58, 166, "libro: baja", "var(--pen)", 13)}${txt(200, 166, "manzana", "var(--red)", 13)}`)],
  ],
  figura: ["Kilos y litros", `<svg viewBox="0 0 640 260" role="img" aria-label="El peso se mide en kilos con la balanza y la capacidad en litros">
    <rect width="640" height="260" rx="16" fill="var(--paper)"/>
    <rect x="24" y="20" width="290" height="220" rx="14" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>
    <rect x="326" y="20" width="290" height="220" rx="14" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/>
    ${txt(169, 50, "PESO: kilo (kg)", "var(--red)", 18)}${txt(471, 50, "CAPACIDAD: litro (l)", "var(--pen)", 18)}
    ${balanza(169, 84, 0, `<g transform="translate(0 -2)">${saco(0, 0, "1 kg")}</g>`, `<g transform="translate(0 -2)">${pesa(-11, 0, "½", 22)}${pesa(11, 0, "½", 22)}</g>`)}
    ${txt(169, 222, "1 kg = 2 medios kilos", "var(--ink)", 15)}
    ${botella(390, 190, 100)}${botella(446, 190, 76)}${botella(478, 190, 76)}${[0, 1, 2, 3].map((i) => botella(520 + i * 22, 190, 56)).join("")}
    ${txt(471, 222, "1 l = 2 medios = 4 cuartos", "var(--ink)", 15)}
  </svg>`],
  video: P.V("pesV", true),
  ejemplos: [
    ["En una balanza, el plato de la naranja baja y el de la fresa sube. ¿Qué pesa más?", ["El plato que baja tiene lo más pesado.", "Baja el de la naranja."], "la naranja pesa más que la fresa."],
    ["Tengo 2 bolsas de medio kilo de lentejas. ¿Cuánto tengo?", ["Medio kilo + medio kilo.", "Dos medios forman uno entero."], "tengo 1 kilo de lentejas."],
    ["¿Cuántas botellitas de ¼ l necesito para llenar una de 1 litro?", ["Un litro tiene 4 cuartos.", "Cada botellita es un cuarto."], "necesito 4 botellitas."],
  ],
  errores: [
    "Pensar que lo más grande siempre pesa más: un globo es grande y pesa muy poco.",
    "Creer que el plato que sube pesa más: pesa más el que baja.",
    "Mezclar las unidades: el peso va en kilos y la capacidad en litros.",
    "Pensar que medio litro es más que un litro.",
  ],
  ejercicios: [
    ["¿Qué pesa más, una mochila llena o una hoja?", "La mochila llena."],
    ["¿Qué usamos para comparar pesos?", "La balanza."],
    ["¿Cómo se escribe kilogramo abreviado?", "kg."],
    ["¿Cuántos medios kilos forman 1 kilo?", "2."],
    ["¿Cómo se escribe litro abreviado?", "l."],
    ["¿Cuántos cuartos de litro hay en un litro?", "4."],
    ["¿En qué se mide el agua de una piscina: kilos o litros?", "En litros."],
    ["¿En qué se mide el peso de un perro: kilos o litros?", "En kilos."],
    ["Tengo 3 botellas de 1 litro. ¿Cuántos litros tengo?", "3 litros."],
    ["Busca en la cocina algo que pese 1 kilo y algo que tenga 1 litro.", "Respuesta libre: un paquete de arroz y un cartón de leche."],
  ],
  quiz: [
    ["En la balanza, el plato que baja…", ["pesa más", "pesa menos", "está vacío"], "Lo pesado hace bajar el plato."],
    ["El peso se mide en…", ["kilos", "litros", "metros"], "El kilo es la unidad de peso."],
    ["La capacidad se mide en…", ["litros", "kilos", "centímetros"], "El litro mide lo que cabe."],
    ["½ kg + ½ kg =", ["1 kg", "2 kg", "½ kg"], "Dos medios forman un entero."],
    ["Un cartón de leche suele tener…", ["1 litro", "10 litros", "1 kilo de agua"], "Es la medida más común."],
    ["En 1 litro hay…", ["4 cuartos de litro", "2 cuartos de litro", "10 cuartos de litro"], "1 l = 4 × ¼ l."],
    ["¿Qué pesa más: 1 kg de plumas o 1 kg de piedras?", ["Pesan lo mismo", "Las piedras", "Las plumas"], "Las dos cosas pesan 1 kg."],
    ["¿Dónde cabe más agua?", ["En un cubo", "En un vaso", "En una cuchara"], "El cubo tiene más capacidad."],
    ["La capacidad es…", ["lo que cabe dentro", "lo que pesa", "lo que mide de largo"], "Se mide en litros."],
    ["Medio litro se escribe…", ["½ l", "¼ l", "2 l"], "Una de dos partes iguales."],
  ],
  examen: [
    ["¿Qué usamos para medir el peso?", ["La balanza", "La regla", "El reloj"], "Compara pesos."],
    ["2 botellas de ½ l son…", ["1 l", "2 l", "¼ l"], "Dos medios litros forman un litro."],
    ["Un paquete de arroz pesa…", ["1 kg", "1 l", "1 m"], "El peso va en kilos."],
    ["¿Cuántos medios kilos hay en 2 kilos?", ["4", "2", "1"], "Cada kilo tiene 2 medios."],
  ],
  feynman: ["Cómo funciona una balanza", "Qué diferencia hay entre peso y capacidad", "Cuántos cuartos de litro tiene un litro"],
  mapa: ["PESO Y CAPACIDAD", [
    ["Peso", "kilo (kg)", "var(--red)"],
    ["Balanza", "baja lo que pesa más", "var(--sun)"],
    ["Capacidad", "litro (l)", "var(--pen)"],
    ["Partes", "½ y ¼", "var(--leaf)"],
  ]],
  tarjetas: [
    ["¿Con qué comparamos pesos?", "Con la balanza"],
    ["Unidad de peso", "El kilo (kg)"],
    ["½ kg + ½ kg", "1 kg"],
    ["¿Qué es la capacidad?", "Lo que cabe dentro de un recipiente"],
    ["Unidad de capacidad", "El litro (l)"],
    ["1 l son… medios litros", "2"],
    ["1 l son… cuartos de litro", "4"],
    ["¿Qué pesa más: 1 kg de plumas o 1 kg de hierro?", "Pesan lo mismo"],
  ],
  familias: [
    "En la compra, dejad que sostenga paquetes de 1 kg y de medio kilo para notar la diferencia.",
    "Mirad juntos las etiquetas: «kg» en el arroz y «l» en la leche y el agua.",
    "Cocinad algo sencillo midiendo con vasos y cucharas.",
    "Haced una balanza con una percha y dos bolsas para comparar juguetes.",
  ],
  saberes: "Medida: masa y capacidad; comparación con balanza; unidades convencionales (kilogramo, medio kilo, litro, medio litro y cuarto de litro)",
  ideas: ["Rincón de la tienda con productos reales de 1 kg, ½ kg, 1 l y ½ l.", "Trasvases de agua con botellas y vasos para comparar capacidades.", "Balanza de platos en el aula para ordenar objetos por su peso."],
});
