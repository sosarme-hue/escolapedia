// Ciencias de la Naturaleza 3º de Primaria: los animales invertebrados. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, filas, fichas, ciclo, vid, vgen, RD, PROF, insecto, flor, suelo } = require("./_pri3b");

// Caracol.
const caracol = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-22 0 h40 q8 0 8 -6 l4 -10 M24 -10 l2 -10 M28 -14 l6 -8" stroke="var(--ink)" stroke-width="1.4" fill="#d6b48a"/><circle cx="-4" cy="-14" r="14" fill="${COL.naranja}" fill-opacity=".8" stroke="var(--ink)" stroke-width="1.4"/><path d="M-4 -14 m-8 0 a8 8 0 1 1 8 8 a5 5 0 1 1 -3 -6" stroke="var(--ink)" stroke-width="1.2" fill="none"/></g>`;
// Araña con ocho patas.
const arana = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="var(--ink)" stroke-width="1.6" fill="none">${[-1, 1].map((d) => [-12, -4, 4, 12].map((k) => `<path d="M0 0 q${d * 14} ${k - 8} ${d * 22} ${k + 2}"/>`).join("")).join("")}<circle r="7" fill="var(--ink)"/><circle cx="0" cy="-9" r="4" fill="var(--ink)"/></g>`;
// Estrella de mar.
const estrellaMar = (x, y, r = 18) => `<path d="${[...Array(10)].map((_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.42 : r; return `${i ? "L" : "M"}${(x + Math.cos(a) * rr).toFixed(1)} ${(y + Math.sin(a) * rr).toFixed(1)}`; }).join(" ")}z" fill="${COL.naranja}" stroke="var(--ink)" stroke-width="1.2"/>`;
// Lombriz.
const lombriz = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M0 0 q10 -10 20 0 q10 10 20 0 q10 -10 20 0" stroke="#d4848a" stroke-width="7" fill="none" stroke-linecap="round"/>`;
// Mariposa.
const mariposa = (x, y, s = 1, c = COL.morado) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 q-20 -22 -24 -4 q-2 12 24 4z M0 0 q20 -22 24 -4 q2 12 -24 4z" fill="${c}" fill-opacity=".7"/><path d="M0 2 q-14 14 -14 4 q0 -6 14 -4z M0 2 q14 14 14 4 q0 -6 -14 -4z" fill="${c}" fill-opacity=".5"/><path d="M0 -8 V10" stroke="var(--ink)" stroke-width="2.5"/><path d="M0 -8 q-4 -8 -8 -10 M0 -8 q4 -8 8 -10" stroke="var(--ink)" stroke-width="1" fill="none"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los animales invertebrados",
  minutos: 45,
  objetivos: ["Saber qué es un animal invertebrado", "Conocer los principales grupos de invertebrados", "Identificar las partes de un insecto", "Describir la metamorfosis de la mariposa", "Valorar la importancia de los invertebrados en la naturaleza"],
  claves: ["invertebrado", "artrópodos", "insectos", "arácnidos", "crustáceos", "miriápodos", "moluscos", "gusanos", "equinodermos", "esponjas", "medusas", "metamorfosis"],
  pregunta: {
    texto: "Si cogemos todos los animales del planeta y los ponemos en dos montones, uno con los que tienen huesos y otro con los que no, ¿qué montón crees que será más grande?",
    respuesta: "¡El de los animales <b>sin huesos</b>, con muchísima diferencia! Los <mark>invertebrados</mark> son más del 95 % de todas las especies de animales. Solo de <b>insectos</b> se conocen más de un millón de especies distintas, más que todos los demás animales juntos.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un invertebrado?</h3><p>Los <mark>invertebrados</mark> son los animales que <b>no tienen esqueleto interno</b> de huesos ni columna vertebral. Su nombre significa justamente eso: «sin vértebras».</p><p>Para proteger su cuerpo blando, muchos invertebrados tienen otras defensas:</p><p>• Algunos tienen una <b>concha</b> dura, como el caracol o el mejillón.<br>• Otros tienen un <b>caparazón</b> o una cubierta dura por fuera, como la hormiga, el escarabajo o el cangrejo. Es como una armadura.<br>• Y otros tienen el cuerpo totalmente <b>blando</b>, como la lombriz o la medusa.</p><p>Los invertebrados son casi siempre <b>pequeños</b>, aunque hay excepciones, como el calamar gigante, que puede medir más que un autobús.</p><p>Viven en todas partes: en el suelo, en el aire, en el mar, en los ríos, en las plantas e incluso dentro de otros animales. Hay muchísimos grupos. En este tema vamos a conocer los más importantes: los artrópodos, los moluscos, los gusanos, los equinodermos, las medusas y las esponjas.</p>`,
      svg: svg("Invertebrados: sin huesos; con concha, con caparazón o blandos", `${tit("Animales sin huesos")}${caracol(48, 96, 1.2)}${insecto(138, 90, 1.1)}${lombriz(186, 92, 0.9)}${et(48, 128, "con concha", 80, { size: 11, color: COL.naranja })}${et(130, 128, "con caparazón", 80, { size: 11, color: COL.marron })}${et(212, 128, "blandos", 80, { size: 11, color: "#d4848a" })}${tx(130, 158, "más del 95 % de los animales", 236, { weight: 700 })}`),
    },
    {
      html: `<h3>Los artrópodos</h3><p>Los <mark>artrópodos</mark> son el grupo de animales más numeroso del planeta. Sus características son:</p><p>• Tienen el cuerpo cubierto por un <b>esqueleto externo</b>, una cubierta dura que los protege como una armadura. Como esa cubierta no crece, de vez en cuando se la quitan y les sale otra más grande: es la <b>muda</b>.<br>• Tienen <b>patas articuladas</b>, es decir, formadas por piezas unidas que se doblan. De ahí viene su nombre: «patas con articulaciones».<br>• Su cuerpo está dividido en partes.</p><p>Los artrópodos se dividen en cuatro grupos:</p><p>• <b>Insectos</b>: seis patas. La mosca, la hormiga o la mariquita.<br>• <b>Arácnidos</b>: ocho patas. La araña, el escorpión o la garrapata.<br>• <b>Crustáceos</b>: diez patas o más, y dos pares de antenas. Casi todos viven en el agua: la gamba, el cangrejo, la langosta. La cochinilla de la humedad es un crustáceo terrestre.<br>• <b>Miriápodos</b>: muchísimas patas. El ciempiés y el milpiés.</p>`,
      svg: svg("Grupos de artrópodos según el número de patas", `${tit("Artrópodos: cuenta las patas")}${fichas([["Insectos", "6 patas", COL.marron], ["Arácnidos", "8 patas", COL.gris], ["Crustáceos", "10 patas o más", COL.rojo], ["Miriápodos", "muchísimas patas", COL.naranja]], 2, 36, 0)}`),
      video: vid("3tXZZTy_ncE"),
    },
    {
      html: `<h3>Los insectos</h3><p>Los <mark>insectos</mark> son los artrópodos más abundantes. Todos tienen:</p><p>• El cuerpo dividido en <b>tres partes</b>: <b>cabeza</b>, <b>tórax</b> y <b>abdomen</b>.<br>• <b>Seis patas</b>, que salen del tórax.<br>• Dos <b>antenas</b> en la cabeza, que les sirven para oler y tocar.<br>• Muchos tienen <b>alas</b>, una o dos parejas. Son los únicos invertebrados que vuelan.</p><p>Sus ojos están formados por cientos de ojitos pequeños, y ven de una manera muy diferente a nosotros.</p><p>Algunos insectos viven <b>en grupo</b> y se reparten el trabajo, como las abejas en la colmena, las hormigas en el hormiguero o las termitas. Se llaman insectos <b>sociales</b>. En una colmena hay una reina, que pone los huevos, y miles de obreras, que recogen el néctar, cuidan las larvas y fabrican la miel y la cera.</p><p>Los insectos son muy importantes: las abejas y las mariposas <b>polinizan</b> las flores para que den frutos, y muchos insectos son alimento de aves, ranas y peces.</p>`,
      svg: svg("Partes de un insecto: cabeza, tórax, abdomen, seis patas y antenas", `${tit("Partes de un insecto")}${insecto(134, 108, 2.3)}${fl(84, 56, 96, 92, COL.rojo, 1.5)}${fl(134, 56, 134, 94, COL.azul, 1.5)}${fl(190, 56, 176, 94, COL.verde, 1.5)}${et(80, 50, "cabeza", 60, { size: 11, color: COL.rojo })}${et(134, 50, "tórax", 60, { size: 11, color: COL.azul })}${et(196, 50, "abdomen", 70, { size: 11, color: COL.verde })}${et(36, 126, "antenas", 50, { size: 10 })}${tx(130, 162, "6 patas que salen del tórax", 200, { weight: 700 })}`),
    },
    {
      html: `<h3>La metamorfosis de la mariposa</h3><p>Muchos insectos cambian completamente de forma al crecer. Este cambio se llama <mark>metamorfosis</mark>. El ejemplo más conocido es el de la <b>mariposa</b>:</p><p>1. La mariposa adulta pone <b>huevos</b> pequeñitos en las hojas de una planta.<br>2. De cada huevo sale una <b>oruga</b>, también llamada <b>larva</b>. La oruga no tiene alas y se pasa el día comiendo hojas. Crece mucho y muda la piel varias veces.<br>3. Cuando es grande, la oruga se envuelve en una cubierta dura y se queda quieta. Ahora se llama <b>crisálida</b> o <b>pupa</b>. Por fuera parece que no pasa nada, pero por dentro su cuerpo se está transformando.<br>4. Unas semanas después, la crisálida se abre y sale una <b>mariposa</b> adulta con alas, que se alimenta del néctar de las flores.</p><p>Otros insectos que hacen metamorfosis completa son el escarabajo, la mosca, la abeja o la mariquita. El gusano de seda es la oruga de una mariposa que fabrica un capullo de seda.</p>`,
      svg: svg("Ciclo de la mariposa: huevo, oruga, crisálida y mariposa", `${tit("De oruga a mariposa")}${ciclo([["huevo", COL.gris], ["oruga", COL.verde], ["crisálida", COL.marron], ["mariposa", COL.morado]], 130, 102, 56, 80)}`),
      video: vid("9HrGzMO6DF8"),
    },
    {
      html: `<h3>Arañas, cangrejos y ciempiés</h3><p>Vamos a conocer mejor los otros grupos de artrópodos:</p><p>Los <mark>arácnidos</mark> tienen <b>ocho patas</b> y el cuerpo en dos partes. No tienen antenas ni alas. Las <b>arañas</b> fabrican hilos de seda con los que tejen telarañas para atrapar insectos. Casi todas son inofensivas para las personas y muy útiles, porque cazan mosquitos y moscas. Los <b>escorpiones</b> tienen pinzas y un aguijón en la cola. Las <b>garrapatas</b> y los <b>ácaros</b> son arácnidos muy pequeños.</p><p>Los <mark>crustáceos</mark> tienen el cuerpo protegido por un caparazón duro, dos pares de antenas y muchas patas. La mayoría vive en el mar o en los ríos y respira con branquias: la gamba, el langostino, el cangrejo, el bogavante o el percebe.</p><p>Los <mark>miriápodos</mark> tienen el cuerpo largo, dividido en muchos anillos, y en cada anillo uno o dos pares de patas. El <b>ciempiés</b> es cazador y rápido; el <b>milpiés</b> es lento y se alimenta de hojas podridas. A pesar de su nombre, ¡ninguno tiene exactamente cien ni mil patas!</p>`,
      svg: svg("Una araña con ocho patas en su telaraña y un cangrejo con pinzas", `${tit("Arácnidos y crustáceos")}<g stroke="var(--line)" stroke-width="1" fill="none">${[0, 45, 90, 135].map((a) => `<path d="M${70 - 44 * Math.cos((a * Math.PI) / 180)} ${96 - 44 * Math.sin((a * Math.PI) / 180)} L${70 + 44 * Math.cos((a * Math.PI) / 180)} ${96 + 44 * Math.sin((a * Math.PI) / 180)}"/>`).join("")}<circle cx="70" cy="96" r="14"/><circle cx="70" cy="96" r="28"/><circle cx="70" cy="96" r="42"/></g>${arana(70, 96, 1)}<g transform="translate(190 104)"><ellipse rx="26" ry="16" fill="${COL.rojo}" fill-opacity=".7" stroke="var(--ink)" stroke-width="1.4"/><path d="M-22 -10 q-14 -14 -8 -24 q6 4 0 10 M22 -10 q14 -14 8 -24 q-6 4 0 10" stroke="var(--ink)" stroke-width="1.4" fill="${COL.rojo}"/><path d="M-20 8 l-14 12 M-10 12 l-8 16 M20 8 l14 12 M10 12 l8 16" stroke="var(--ink)" stroke-width="2"/></g>${et(70, 160, "araña: 8 patas", 110, { size: 11 })}${et(190, 160, "cangrejo: 10 patas", 110, { size: 11, color: COL.rojo })}`),
    },
    {
      html: `<h3>Los moluscos</h3><p>Los <mark>moluscos</mark> son invertebrados de <b>cuerpo blando</b>, sin patas. Muchos lo protegen con una <b>concha</b>. Hay tres tipos principales:</p><p>• Los <b>gasterópodos</b> tienen una concha en forma de espiral, o ninguna, y se arrastran sobre un pie musculoso dejando un rastro de baba. Por ejemplo, el <b>caracol</b>, que vive en la tierra, y la <b>babosa</b>, que no tiene concha. El caracol tiene cuatro tentáculos en la cabeza y en las puntas de los más largos tiene los ojos.</p><p>• Los <b>bivalvos</b> tienen una concha formada por <b>dos valvas</b> que se abren y se cierran como una caja. Viven en el agua, como el <b>mejillón</b>, la <b>almeja</b>, la ostra o la vieira.</p><p>• Los <b>cefalópodos</b> no tienen concha externa y tienen <b>tentáculos</b> con ventosas alrededor de la cabeza. Son el <b>pulpo</b>, con ocho brazos, y el <b>calamar</b> y la <b>sepia</b>, con diez. Son muy listos y, para escapar, lanzan una nube de tinta.</p>`,
      svg: svg("Tipos de moluscos: caracol, mejillón y pulpo", `${tit("Los moluscos")}${caracol(52, 108, 1.2)}<g transform="translate(130 100)"><path d="M-20 4 q20 -30 40 0 q-20 10 -40 0z" fill="#1e3a5f" fill-opacity=".8" stroke="var(--ink)" stroke-width="1.2"/><path d="M-20 4 q20 14 40 0" stroke="var(--ink)" stroke-width="1.2" fill="none"/></g><g transform="translate(208 92)"><ellipse cx="0" cy="-8" rx="16" ry="14" fill="${COL.morado}" fill-opacity=".7"/>${[-12, -6, 0, 6, 12].map((d) => `<path d="M${d} 4 q${d} 20 ${d * 1.6} 30" stroke="${COL.morado}" stroke-width="3" fill="none" stroke-opacity=".7"/>`).join("")}<circle cx="-5" cy="-8" r="2" fill="var(--ink)"/><circle cx="5" cy="-8" r="2" fill="var(--ink)"/></g>${et(52, 138, "gasterópodo", 80, { size: 10.5, color: COL.naranja })}${et(130, 138, "bivalvo", 80, { size: 10.5, color: COL.azul })}${et(208, 138, "cefalópodo", 80, { size: 10.5, color: COL.morado })}${tx(130, 162, "cuerpo blando, muchos con concha", 236)}`),
    },
    {
      html: `<h3>Gusanos, estrellas de mar, medusas y esponjas</h3><p>Existen otros grupos de invertebrados muy diferentes:</p><p>• Los <mark>gusanos</mark> tienen el cuerpo blando, alargado y sin patas. La <b>lombriz de tierra</b> tiene el cuerpo formado por anillos. Vive bajo tierra, haciendo túneles, y se alimenta de restos de plantas. ¡Es muy útil, porque airea y abona el suelo! También hay gusanos que viven en el mar y gusanos que viven dentro de otros animales, como la tenia.</p><p>• Los <mark>equinodermos</mark> viven en el mar. Tienen el cuerpo cubierto de pinchos o de una piel dura, y suelen tener forma de estrella. Son la <b>estrella de mar</b>, que si pierde un brazo puede regenerarlo, y el <b>erizo de mar</b>.</p><p>• Las <mark>medusas</mark> tienen el cuerpo blando y transparente, con forma de paraguas, y unos tentáculos que pican. Las anémonas y los corales son parientes de las medusas.</p><p>• Las <mark>esponjas</mark> son los animales más sencillos. Viven fijas en el fondo del mar y su cuerpo está lleno de agujeros por donde filtran el agua para alimentarse.</p>`,
      svg: svg("Lombriz, estrella de mar, medusa y esponja", `${tit("Otros invertebrados")}${lombriz(14, 82, 0.8)}${estrellaMar(104, 82, 22)}<g transform="translate(160 76)"><path d="M-18 0 q18 -30 36 0z" fill="${COL.agua}" fill-opacity=".5" stroke="${COL.azul}" stroke-width="1.4"/>${[-12, -4, 4, 12].map((d) => `<path d="M${d} 0 q4 10 0 20 q-4 8 0 16" stroke="${COL.azul}" stroke-width="1.4" fill="none"/>`).join("")}</g><g transform="translate(222 92)"><path d="M-14 12 q-4 -30 4 -40 h20 q8 10 4 40z" fill="${COL.sol}" fill-opacity=".6" stroke="var(--ink)" stroke-width="1.2"/>${[[-4, -16], [4, -6], [-4, 4], [6, -22]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="2.5" fill="var(--card)"/>`).join("")}</g>${et(38, 126, "lombriz", 60, { size: 10.5, color: "#d4848a" })}${et(104, 126, "estrella", 60, { size: 10.5, color: COL.naranja })}${et(160, 126, "medusa", 60, { size: 10.5, color: COL.azul })}${et(222, 126, "esponja", 60, { size: 10.5, color: COL.sol })}${tx(130, 158, "gusanos, equinodermos, medusas y esponjas", 236)}`),
    },
    {
      html: `<h3>¿Para qué sirven los invertebrados?</h3><p>Aunque algunos nos den un poco de miedo o asco, los invertebrados son <b>imprescindibles</b> para la vida en la Tierra:</p><p>• <b>Polinizan</b> las plantas. Sin abejas, mariposas y otros insectos, muchas plantas no darían frutos y nos faltarían manzanas, fresas, tomates o almendras.<br>• <b>Limpian</b> la naturaleza: los escarabajos peloteros, las moscas y las lombrices descomponen los restos de animales y plantas, y los convierten en abono.<br>• Son <b>alimento</b> de muchísimos animales: aves, peces, ranas, lagartijas o murciélagos.<br>• Nos dan <b>productos</b>: la miel y la cera de las abejas, la seda del gusano de seda, y alimentos como las gambas, los mejillones o el pulpo.</p><p>Algunos pueden causar problemas: los mosquitos pican y algunos transmiten enfermedades, las plagas de insectos estropean cosechas y las polillas se comen la ropa. Pero hasta ellos son alimento de otros animales.</p><p>Por eso no hay que matarlos sin motivo. Si encuentras una araña en casa, puedes sacarla fuera con un vaso y un papel.</p>`,
      svg: svg("Utilidad de los invertebrados: polinizan, limpian, son alimento y nos dan productos", `${tit("¡Son muy útiles!")}${filas([["polinizan", "abejas y mariposas", COL.sol], ["limpian", "lombrices y escarabajos", COL.marron], ["son alimento", "de aves, peces y ranas", COL.verde], ["nos dan", "miel, seda y marisco", COL.naranja]], 52, 30, { x: 20, wa: 80, wb: 140 })}`),
    },
    {
      html: `<h3>¡A clasificar!</h3><p>Para saber a qué grupo pertenece un invertebrado, fíjate bien y hazte estas preguntas:</p><p>1. ¿Tiene <b>patas articuladas</b> y una cubierta dura? → Es un <b>artrópodo</b>. Cuenta las patas: 6, insecto; 8, arácnido; 10 o más con antenas, crustáceo; muchísimas en un cuerpo largo, miriápodo.<br>2. ¿Tiene el cuerpo blando, sin patas, y muchas veces una <b>concha</b>? → Es un <b>molusco</b>.<br>3. ¿Es alargado, blando y sin patas, con anillos? → Es un <b>gusano</b>.<br>4. ¿Vive en el mar, tiene forma de estrella o pinchos? → Es un <b>equinodermo</b>.</p><p>Probamos con la <b>mariquita</b>: tiene seis patas, antenas y alas. Es un insecto.</p><p>Y el <b>caracol</b>: no tiene patas, su cuerpo es blando y tiene una concha en espiral. Es un molusco.</p><p><b>Reto:</b> sal al patio o al jardín con una lupa. Levanta con cuidado una piedra o mira debajo de unas hojas. ¿Cuántos invertebrados encuentras? Después, vuelve a dejarlos donde estaban.</p>`,
      svg: svg("Mariquita: seis patas, insecto; caracol: concha, molusco", `${tit("¿De qué grupo es?")}<g transform="translate(66 92)"><circle r="22" fill="${COL.rojo}"/><path d="M0 -22 V22" stroke="var(--ink)" stroke-width="2"/><circle cx="-10" cy="-4" r="4" fill="var(--ink)"/><circle cx="9" cy="6" r="4" fill="var(--ink)"/><circle cx="-6" cy="12" r="3" fill="var(--ink)"/><circle cx="0" cy="-26" r="8" fill="var(--ink)"/>${[-1, 1].map((d) => [-10, 0, 10].map((k) => `<path d="M${d * 20} ${k} l${d * 10} ${k / 2 + 4}" stroke="var(--ink)" stroke-width="2"/>`).join("")).join("")}</g>${caracol(190, 104, 1.4)}${et(66, 144, "6 patas → insecto", 120, { size: 11, color: COL.rojo })}${et(190, 144, "concha → molusco", 120, { size: 11, color: COL.naranja })}`),
    },
  ],
  figura: {
    titulo: "Los invertebrados en ocho ideas",
    svg: rejilla([
      ["Invertebrado", "sin columna vertebral", COL.azul],
      ["Artrópodos", "patas articuladas", COL.marron],
      ["Insectos", "6 patas, 3 partes", COL.sol],
      ["Arácnidos", "8 patas", COL.gris],
      ["Crustáceos", "caparazón, en el agua", COL.rojo],
      ["Moluscos", "blandos, con concha", COL.naranja],
      ["Gusanos", "alargados, sin patas", "#d4848a"],
      ["Metamorfosis", "oruga → mariposa", COL.morado],
    ], 4, 86, "Resumen de los animales invertebrados"),
  },
  video: vgen("zPLSPh9YeiY", "animales invertebrados para niños"),
  ejemplos: [
    { enunciado: "Clasifica: hormiga, araña, gamba, mejillón, lombriz.",
      pasos: ["Hormiga: 6 patas → insecto.", "Araña: 8 patas → arácnido.", "Gamba: muchas patas y antenas, vive en el mar → crustáceo.", "Mejillón: concha de dos valvas → molusco.", "Lombriz: blanda, alargada, sin patas → gusano."],
      resultado: "Insecto, arácnido, crustáceo, molusco y gusano." },
    { enunciado: "Has encontrado un bichito con ocho patas y sin antenas. ¿Puede ser un insecto?",
      pasos: ["Los insectos tienen 6 patas y antenas.", "8 patas y sin antenas es propio de los arácnidos."],
      resultado: "No: es un arácnido, como una araña." },
    { enunciado: "Ordena la metamorfosis: crisálida, mariposa, huevo, oruga.",
      pasos: ["Empieza con el huevo.", "Sale una oruga que come y crece.", "Se transforma dentro de la crisálida.", "Sale la mariposa adulta."],
      resultado: "Huevo → oruga → crisálida → mariposa." },
  ],
  errores: [
    "Llamar insecto a la araña: tiene ocho patas y es un arácnido.",
    "Pensar que el pulpo es un pez: es un molusco sin concha.",
    "Creer que los invertebrados no sirven para nada: polinizan, limpian y son alimento.",
    "Pensar que el ciempiés tiene exactamente cien patas.",
  ],
  ejercicios: [
    { q: "¿Qué es un animal invertebrado? Escribe tres ejemplos.", sol: "Un animal sin esqueleto interno ni columna vertebral. Por ejemplo, la mosca, el caracol y la lombriz." },
    { q: "¿Qué características tienen los artrópodos?", sol: "Esqueleto externo duro, patas articuladas y el cuerpo dividido en partes." },
    { q: "Escribe las tres partes del cuerpo de un insecto.", sol: "Cabeza, tórax y abdomen." },
    { q: "¿Cuántas patas tiene un insecto? ¿Y un arácnido?", sol: "El insecto, seis. El arácnido, ocho." },
    { q: "Escribe dos crustáceos.", sol: "Por ejemplo, la gamba y el cangrejo (también la cochinilla de la humedad)." },
    { q: "¿Qué diferencia hay entre un caracol y una babosa?", sol: "Los dos son moluscos gasterópodos, pero el caracol tiene concha y la babosa no." },
    { q: "¿Qué es un bivalvo? Pon un ejemplo.", sol: "Un molusco con concha de dos valvas, como el mejillón o la almeja." },
    { q: "Ordena y explica la metamorfosis de la mariposa.", sol: "Huevo, oruga (come y crece), crisálida (se transforma) y mariposa adulta." },
    { q: "¿Por qué son útiles las lombrices de tierra?", sol: "Porque airean el suelo con sus túneles y lo abonan al descomponer restos de plantas." },
    { q: "Escribe dos productos que nos dan los invertebrados.", sol: "La miel de las abejas y la seda del gusano de seda (también marisco como gambas o mejillones)." },
  ],
  quiz: [
    { q: "Los invertebrados no tienen…", o: ["columna vertebral", "boca", "cuerpo"], a: 0, e: "No tienen columna vertebral." },
    { q: "Un insecto tiene…", o: ["6 patas", "8 patas", "10 patas"], a: 0, e: "Seis patas." },
    { q: "La araña es un…", o: ["insecto", "arácnido", "molusco"], a: 1, e: "Arácnido: 8 patas." },
    { q: "El cangrejo es un…", o: ["crustáceo", "gusano", "pez"], a: 0, e: "Crustáceo." },
    { q: "El cuerpo de un insecto tiene…", o: ["2 partes", "3 partes", "5 partes"], a: 1, e: "Cabeza, tórax y abdomen." },
    { q: "La oruga es la cría de la…", o: ["mariposa", "araña", "lombriz"], a: 0, e: "De la mariposa." },
    { q: "El mejillón es un…", o: ["molusco", "insecto", "crustáceo"], a: 0, e: "Molusco bivalvo." },
    { q: "El pulpo tiene…", o: ["8 brazos", "6 patas", "una concha en espiral"], a: 0, e: "Ocho brazos con ventosas." },
    { q: "La estrella de mar es un…", o: ["equinodermo", "pez", "arácnido"], a: 0, e: "Equinodermo." },
    { q: "Las abejas ayudan a las plantas porque…", o: ["las polinizan", "se comen sus raíces", "las pisan"], a: 0, e: "Llevan el polen de flor en flor." },
  ],
  examen: [
    { q: "El cambio de la oruga a mariposa se llama…", o: ["muda", "metamorfosis", "migración"], a: 1, e: "Metamorfosis." },
    { q: "Los únicos invertebrados que vuelan son los…", o: ["insectos", "moluscos", "gusanos"], a: 0, e: "Los insectos." },
    { q: "El ciempiés es un…", o: ["miriápodo", "insecto", "gusano"], a: 0, e: "Miriápodo." },
    { q: "Los animales más sencillos, llenos de agujeros, son las…", o: ["esponjas", "medusas", "arañas"], a: 0, e: "Las esponjas." },
  ],
  feynman: ["Qué es un invertebrado", "Cómo distinguir un insecto de un arácnido", "La metamorfosis de la mariposa"],
  mapa: mapa("INVERTEBRADOS", "var(--pri)", [
    ["Artrópodos", "insectos · arácnidos · crustáceos", COL.marron],
    ["Moluscos", "caracol · mejillón · pulpo", COL.naranja],
    ["Otros", "gusanos · estrellas · medusas", COL.azul],
    ["Utilidad", "polinizan · limpian · alimento", COL.verde],
  ], 250),
  tarjetas: [
    ["Invertebrado", "Animal sin columna vertebral."],
    ["Artrópodo", "Patas articuladas y esqueleto externo."],
    ["Insecto", "6 patas, antenas, cabeza, tórax y abdomen."],
    ["Arácnido", "8 patas y sin antenas: araña."],
    ["Crustáceo", "Caparazón, antenas y muchas patas: gamba."],
    ["Molusco", "Cuerpo blando, muchos con concha."],
    ["Metamorfosis", "Huevo, oruga, crisálida y mariposa."],
    ["Equinodermo", "Animal marino con pinchos: estrella de mar."],
  ],
  familias: ["Salid con una lupa al parque y buscad invertebrados bajo piedras y hojas; después, dejadlos en su sitio.", "En la pescadería, identificad crustáceos y moluscos.", "Observad caracoles en un terrario unos días y dibujad cómo se mueven.", "Plantad flores en la ventana para atraer a las abejas y las mariposas."],
  profesores: PROF("Ciencias de la Naturaleza: animales invertebrados; artrópodos (insectos, arácnidos, crustáceos y miriápodos), moluscos, gusanos, equinodermos, cnidarios y poríferos; metamorfosis; importancia ecológica", ["Salida al patio con lupas y ficha de registro de invertebrados.", "Cría de gusanos de seda o terrario de caracoles en el aula.", "Clave dicotómica por número de patas."]),
  fuentes: [RD, wiki("Invertebrado", "Invertebrado"), wiki("Insecta", "Insectos"), wiki("Mollusca", "Moluscos")],
  revisado: REV,
};
