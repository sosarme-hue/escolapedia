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

// ---------- Nivel libro (2º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  limites: { palabras: [1100, 1800], apartados: [13, 16], lectura: [90, 180] },
  minutos: 70,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer el cuarto de kilo y el gramo", "Leer el peso en una báscula", "Sumar y restar pesos y capacidades", "Distinguir lo grande de lo pesado"],
  lectura: { titulo: "El bizcocho de la abuela", html: `<p>Los domingos, Daniel ayuda a su abuela a hacer un bizcocho de limón. La abuela no necesita receta: se la sabe de memoria.</p><p>—Primero, medio kilo de harina —dice la abuela.</p><p>Daniel pone el bol sobre la báscula de la cocina y echa harina hasta que la pantalla marca 500 gramos.</p><p>—Ahora, un cuarto de kilo de azúcar.</p><p>—¿Cuánto es un cuarto, abuela?</p><p>—La mitad de medio kilo: 250 gramos.</p><p>Después añaden tres huevos, la ralladura de un limón y un cuarto de litro de leche, medido con una jarra que tiene rayitas.</p><p>—¡Y un vaso de aceite! —recuerda Daniel.</p><p>Lo mezclan todo, lo meten en el horno y esperan media hora. La cocina huele de maravilla.</p><p>Cuando el bizcocho sale del horno, Daniel lo pesa por curiosidad: ¡más de un kilo! Lo cortan en ocho trozos y lo comparten con toda la familia.</p>` },
  tras: {
    "La balanza": [
      ["La báscula de casa", `<p>Además de la balanza de dos platos, existen las <mark>básculas</mark>. Tienen un solo plato y nos dicen directamente cuánto pesa algo.</p><p>Hay varias clases:</p><ul><li>La <b>báscula de cocina</b>: para pesar harina, azúcar o fruta. Marca en gramos.</li><li>La <b>báscula de baño</b>: para pesar personas. Marca en kilos.</li><li>La <b>báscula del mercado</b>: el frutero pesa las manzanas y calcula el precio.</li></ul><p>Muchas son <b>digitales</b>: el peso aparece en una pantalla con números. Otras tienen una <b>aguja</b> que gira y señala el número, como un reloj.</p><p>Antes de pesar, la báscula debe marcar <b>0</b>. Si ponemos un bol vacío, pulsamos el botón para volver a 0 y así solo pesamos lo de dentro.</p><p><b>Actividad</b>: pésate en una báscula de baño y apunta tu peso en kilos.</p>`,
        H6.dos("Pesar", ["BALANZA", ["dos platos", "compara", "¿cuál pesa más?"], cAZ], ["BÁSCULA", ["un plato", "dice el peso", "en kg o g"], cVE]),
        ["CpOQ-s0FLt4", "El KILO, EL 1/2 Kg y el 1/4 de Kg", "La BiBlioTHeKa", 185992]],
    ],
    "Medio kilo": [
      ["El cuarto de kilo y el gramo", `<p>Si partimos medio kilo por la mitad, obtenemos un <mark>cuarto de kilo</mark>.</p><ul><li>1 kilo = 2 medios kilos.</li><li>1 kilo = <b>4 cuartos de kilo</b>.</li><li>Medio kilo = 2 cuartos de kilo.</li></ul><p>Para pesar cosas ligeras usamos una unidad más pequeña: el <mark>gramo</mark>, que se escribe <b>g</b>.</p><ul><li><b>1 kilo = 1000 gramos</b>.</li><li>Medio kilo = <b>500 gramos</b>.</li><li>Un cuarto de kilo = <b>250 gramos</b>.</li></ul><p>Pesan unos pocos gramos un lápiz, una hoja o una moneda. Un paquete de mantequilla suele pesar 250 g: ¡un cuarto de kilo!</p><p><b>Actividad</b>: busca en la cocina paquetes que pongan «250 g», «500 g» o «1 kg» y clasifícalos.</p>`,
        L6.filas("Peso", [["1 kg", "1000 g", cNA], ["1/2 kg", "500 g", cAZ], ["1/4 kg", "250 g", cVE], ["lápiz", "pocos g", cMO]]),
        ["uZOBBUqcggU", "Kilos, medios kilos y cuartos de kilos", "La profe Lorena", 115952]],
    ],
    "El litro": [
      ["Medir capacidad en casa", `<p>Para medir líquidos en la cocina usamos una <mark>jarra medidora</mark>. Es transparente y tiene rayitas con números.</p><p>Echamos el líquido y miramos a qué raya llega. Hay que mirar con los ojos a la altura de la raya, no desde arriba.</p><p>Otros recipientes que conocemos:</p><ul><li>Un <b>vaso</b>: caben unos 4 vasos en un litro, así que un vaso es más o menos un cuarto de litro.</li><li>Una <b>botella de agua grande</b>: 1 litro y medio o 2 litros.</li><li>Una <b>lata de refresco</b>: un poco más de un cuarto de litro.</li><li>Un <b>cubo</b> de fregar: unos 10 litros.</li><li>Una <b>bañera</b>: ¡más de 100 litros!</li></ul><p>Para cantidades muy pequeñas, como un jarabe, usamos una <b>cuchara</b> o una jeringuilla.</p><p><b>Actividad</b>: con una jarra medidora, averigua cuántos vasos de agua caben en una botella de 1 litro.</p>`,
        L6.filas("Capacidad", [["vaso", "1/4 l", cAZ], ["botella", "1 l", cVE], ["cubo", "10 l", cNA], ["bañera", "+100 l", cRO]])],
    ],
    "Medio litro y cuarto de litro": [
      ["Sumar y restar pesos y litros", `<p>Igual que con los metros, podemos <mark>sumar y restar</mark> pesos y capacidades, siempre en la misma unidad.</p><p>Con pesos:</p><ul><li>Una bolsa de 2 kg de naranjas y otra de 3 kg de patatas: 2 + 3 = <b>5 kg</b>.</li><li>Un saco de 10 kg de arena. Uso 4 kg. Quedan 10 − 4 = <b>6 kg</b>.</li></ul><p>Con capacidades:</p><ul><li>Tengo una botella de 2 litros y otra de 1 litro: 2 + 1 = <b>3 litros</b>.</li><li>Una garrafa de 5 litros. Lleno 2 botellas de 1 litro. Quedan 5 − 2 = <b>3 litros</b>.</li><li>Medio litro y medio litro hacen <b>1 litro</b>.</li></ul><p>No olvides escribir siempre <b>kg</b>, <b>g</b> o <b>l</b> en el resultado.</p><p><b>Actividad</b>: inventa un problema de la compra con kilos y otro con litros.</p>`,
        H6.flujo("Garrafa", ["tengo|5 l", "lleno|2 l", "5 − 2|=", "quedan|3 l"], cAZ)],
    ],
  },
  final: [
    ["¿Grande es lo mismo que pesado?", `<p>¡No siempre! Un objeto puede ser <mark>grande y ligero</mark>, o <mark>pequeño y pesado</mark>.</p><p>Fíjate en estos ejemplos:</p><ul><li>Un <b>globo</b> es grande, pero pesa muy poco.</li><li>Una <b>almohada</b> es grande y ligera.</li><li>Una <b>piedra</b> pequeña puede pesar más que la almohada.</li><li>Una <b>pesa de gimnasio</b> es pequeña, pero muy pesada.</li></ul><p>Lo que importa es de qué <b>material</b> está hecho. El hierro y la piedra pesan mucho. Las plumas, el papel y el aire pesan poco.</p><p>También pasa al revés con los líquidos: una botella grande puede estar casi vacía y una pequeña muy llena.</p><p>Por eso, para saber cuánto pesa algo de verdad, no basta con mirarlo: hay que <b>pesarlo</b>.</p><p><b>Actividad</b>: busca un objeto grande y ligero y otro pequeño y pesado. Compruébalo con una balanza.</p>`,
      H6.dos("¡Sorpresa!", ["LIGERO", ["globo", "almohada", "caja vacía"], cAZ], ["PESADO", ["piedra", "pesa", "llave de hierro"], cRO])],
    ["Repaso: la lista de la compra", `<p>Repasamos con la <mark>lista de la compra</mark> de la familia de Daniel:</p><ul><li><b>1 kg</b> de manzanas.</li><li><b>Medio kilo</b> de tomates.</li><li><b>Un cuarto de kilo</b> de queso.</li><li><b>2 litros</b> de leche.</li><li><b>Medio litro</b> de zumo.</li></ul><p>Preguntas:</p><ul><li>¿Cuántos gramos de tomates compran? <b>500 g</b>.</li><li>¿Y de queso? <b>250 g</b>.</li><li>¿Cuántos litros de líquido llevan en total? 2 + medio = <b>2 litros y medio</b>.</li><li>¿Qué pesa más, las manzanas o los tomates? Las manzanas: 1 kg es más que medio kilo.</li><li>¿Con qué miden en la tienda el queso? Con la <b>báscula</b>.</li></ul><p><b>Actividad</b>: haced una tienda en clase con envases vacíos y escribid en cada uno su peso o su capacidad.</p>`,
      L6.filas("Compra", [["manzanas", "1 kg", cRO], ["tomates", "500 g", cNA], ["queso", "250 g", cAZ], ["leche", "2 l", cVE]])],
  ],
  ejemplos: [
    ["¿Cuántos gramos son un cuarto de kilo?", ["1 kg = 1000 g.", "La mitad: 500 g; otra mitad: 250 g."], "250 g."],
    ["Tengo 3 kg de patatas y gasto 1 kg. ¿Cuánto queda?", ["3 − 1 = 2."], "2 kg."],
  ],
  errores: ["Pensar que algo grande siempre pesa más.", "Olvidar poner la báscula a 0 antes de pesar."],
  ejercicios: [
    ["b", "¿Cuántos gramos tiene 1 kilo?", "1000 g."],
    ["b", "¿Cuántos cuartos de kilo hay en 1 kilo?", "4."],
    ["b", "¿Qué usarías para pesarte?", "Una báscula de baño."],
    ["b", "¿Cuántos vasos caben más o menos en 1 litro?", "Unos 4."],
    ["b", "Di algo grande que pese poco.", "Un globo, una almohada…"],
    ["m", "2 kg de naranjas y 2 kg de peras. ¿Cuánto pesan juntas?", "4 kg."],
    ["m", "Una garrafa de 8 l. Saco 3 l. ¿Cuánto queda?", "5 l."],
    ["m", "¿Cuántos gramos son medio kilo?", "500 g."],
    ["m", "Medio litro y medio litro, ¿cuánto es?", "1 litro."],
    ["m", "¿Qué pesa más, 1 kg de plumas o 1 kg de hierro?", "Pesan lo mismo: 1 kg."],
    ["a", "En la lectura, ¿cuántos gramos de azúcar echa Daniel?", "250 g, un cuarto de kilo."],
    ["a", "La lista lleva 2 litros de leche y medio de zumo. ¿Cuántos litros en total?", "2 litros y medio."],
    ["a", "¿Por qué una piedra pequeña puede pesar más que una almohada?", "Porque depende del material, no del tamaño."],
    ["a", "Inventa un problema de restar kilos y resuélvelo.", "Respuesta libre con unidad."],
  ],
  quiz: [
    ["1 kg tiene…", ["1000 g", "100 g", "10 g"], "Gramo."],
    ["Un cuarto de kilo son…", ["250 g", "500 g", "400 g"], "Cuarto."],
    ["Para pesar harina en casa uso…", ["la báscula de cocina", "la regla", "la cinta métrica"], "Báscula."],
    ["Un globo es…", ["grande y ligero", "pequeño y pesado", "grande y pesado"], "Tamaño y peso."],
    ["2 l + 1 l =", ["3 l", "1 l", "21 l"], "Sumar."],
  ],
  examen: [
    ["En la lectura, ¿cuánta harina lleva el bizcocho?", ["medio kilo", "un cuarto de kilo", "un kilo"], "Lectura."],
    ["En la compra, ¿cuántos gramos de queso hay?", ["250 g", "500 g", "1000 g"], "Repaso."],
  ],
  tarjetas: [
    ["Gramos", "1 kg = 1000 g; 1/2 kg = 500 g; 1/4 kg = 250 g."],
    ["Grande ≠ pesado", "El peso depende del material."],
  ],
  glosario: [
    ["Peso", "Lo que pesa un objeto."],
    ["Kilo", "Unidad de peso: 1000 g."],
    ["Gramo", "Unidad pequeña de peso."],
    ["Cuarto de kilo", "250 gramos."],
    ["Balanza", "Compara pesos con dos platos."],
    ["Báscula", "Dice cuánto pesa algo."],
    ["Capacidad", "Lo que cabe en un recipiente."],
    ["Litro", "Unidad de capacidad."],
    ["Jarra medidora", "Recipiente con marcas para medir líquidos."],
    ["Material", "Aquello de lo que está hecho un objeto."],
  ],
  situacion: {
    titulo: "Cocineros de la clase",
    reto: "La clase prepara una receta sencilla, como una macedonia o un batido, pesando y midiendo cada ingrediente.",
    pasos: ["Leer la receta y anotar los kilos, gramos y litros.", "Pesar los ingredientes con la báscula puesta a 0.", "Medir los líquidos con una jarra medidora.", "Calcular cuánto sobra de cada paquete o botella."],
    producto: "Una receta ilustrada con cantidades y la comida preparada.",
    evaluacion: ["Usa kg, g y l correctamente.", "Pesa con la báscula.", "Mide con la jarra.", "Suma y resta pesos y capacidades."],
  },
});
