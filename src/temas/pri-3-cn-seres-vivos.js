// Ciencias de la Naturaleza 3º de Primaria: los seres vivos y sus funciones. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, filas, fichas, ciclo, vid, vgen, RD, PROF, arbol, sol, flor, nube, pez, pajaro, nino, suelo, tick, equis, hoja, insecto } = require("./_pri3b");

// Piedra gris para comparar con los seres vivos.
const piedra = (x, y, s = 1) => `<path transform="translate(${x} ${y}) scale(${s})" d="M-20 0 q-4 -14 8 -20 q12 -6 22 0 q10 6 6 20z" fill="${COL.gris}" fill-opacity=".55" stroke="var(--ink)" stroke-width="1.2"/>`;
// Seta sencilla.
const seta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-4" y="-16" width="8" height="16" fill="#f5e6c8" stroke="var(--ink)" stroke-width="1"/><path d="M-16 -14 q16 -22 32 0z" fill="var(--red)"/><circle cx="-6" cy="-20" r="2" fill="#fff"/><circle cx="5" cy="-22" r="2" fill="#fff"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los seres vivos y sus funciones",
  minutos: 45,
  objetivos: ["Distinguir los seres vivos de los objetos inertes", "Conocer las tres funciones vitales: nutrición, relación y reproducción", "Saber que todos los seres vivos están formados por células", "Clasificar los seres vivos en sus grandes grupos o reinos", "Respetar y cuidar a todos los seres vivos"],
  claves: ["ser vivo", "ser inerte", "funciones vitales", "nutrición", "relación", "reproducción", "ciclo de vida", "célula", "reino", "animales", "plantas", "hongos"],
  pregunta: {
    texto: "Una piedra y una semilla pueden parecer muy parecidas: las dos son pequeñas, duras y están quietas. Si las plantas en una maceta con tierra y agua, ¿qué pasará con cada una?",
    respuesta: "La piedra seguirá igual para siempre, pero de la semilla saldrá una planta. La semilla es un <mark>ser vivo</mark>: está «dormida», pero cuando tiene agua y calor <b>se nutre, crece y se desarrolla</b>. La piedra es un <b>ser inerte</b>: no nace, no se alimenta, no crece ni se reproduce.",
  },
  bloques: [
    {
      html: `<h3>Seres vivos y seres inertes</h3><p>A nuestro alrededor hay muchísimas cosas. Algunas tienen vida y otras no. Los <mark>seres vivos</mark> son los que <b>nacen, crecen, se reproducen y mueren</b>. Las personas, los perros, los árboles, las setas o las hormigas son seres vivos.</p><p>Los <mark>seres inertes</mark> no tienen vida: no nacen, no se alimentan, no crecen por sí mismos y no tienen hijos. Las piedras, el agua, el aire o la arena son seres inertes <b>naturales</b>. Una mesa, un lápiz o una pelota son objetos inertes <b>fabricados</b> por las personas.</p><p>Hay cosas que nos pueden despistar. Un coche se mueve, pero no es un ser vivo: no nace ni crece, y solo se mueve si alguien lo conduce. Una montaña puede hacerse más pequeña con los años, pero no «crece» como un niño. En cambio, un árbol no se desplaza y sí es un ser vivo.</p><p>Y una mesa de madera, ¿qué es? La madera vino de un árbol que estuvo vivo, pero la mesa ya es un objeto inerte.</p>`,
      svg: svg("Seres vivos (árbol, pájaro, niño) frente a seres inertes (piedra, agua, pelota)", `${tit("¿Vivo o inerte?")}<path d="M130 34 V170" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 4"/>${et(66, 46, "seres vivos", 110, { size: 12, color: COL.verde })}${et(196, 46, "seres inertes", 110, { size: 12, color: COL.gris })}${suelo(150)}${arbol(36, 150, 1.1)}${nino(80, 150, { c: COL.azul, s: 0.9 })}${pajaro(108, 74)}${flor(110, 150)}${piedra(166, 150)}<path d="M190 150 q10 -16 20 0z" fill="var(--water)"/><circle cx="234" cy="140" r="10" fill="var(--red)"/>${tick(66, 168)}${equis(196, 166)}`),
      video: vid("Ex6HZEHXOYk"),
    },
    {
      html: `<h3>Las funciones vitales</h3><p>Todos los seres vivos, desde un elefante hasta una lombriz o un pino, hacen tres cosas importantes para seguir vivos. Se llaman <mark>funciones vitales</mark>:</p><p>• La <mark>nutrición</mark>: tomar alimento y aire para conseguir energía y materiales para crecer.<br>• La <mark>relación</mark>: darse cuenta de lo que pasa a su alrededor y reaccionar.<br>• La <mark>reproducción</mark>: tener descendientes, es decir, hijos, semillas o nuevas plantas parecidas a ellos.</p><p>Si a un ser le falta alguna de estas funciones, no es un ser vivo. Un robot puede moverse y «reaccionar» si choca, pero no se alimenta ni tiene crías por sí mismo. Por eso no es un ser vivo.</p><p>En las páginas siguientes vamos a ver cada una de las funciones vitales con ejemplos de animales y plantas. Verás que las plantas también las hacen todas, aunque de una forma diferente y mucho más lenta que los animales.</p>`,
      svg: svg("Las tres funciones vitales: nutrición, relación y reproducción", `${tit("Las 3 funciones vitales")}${fichas([["Nutrición", "comer, beber, respirar", COL.verde], ["Relación", "sentir y responder", COL.azul], ["Reproducción", "tener descendientes", COL.rojo]], 1, 36, 40)}`),
    },
    {
      html: `<h3>La nutrición</h3><p>Los seres vivos necesitan <b>energía</b> para moverse, crecer y mantenerse sanos, igual que un coche necesita gasolina. Esa energía la consiguen con la <mark>nutrición</mark>.</p><p>Los <b>animales</b> no pueden fabricar su comida: tienen que <b>comer</b> otros seres vivos. Algunos comen plantas, como la vaca o el conejo; otros comen otros animales, como el lobo o el águila; y otros comen de todo, como el oso o las personas. Además, los animales <b>beben</b> agua y <b>respiran</b> el oxígeno del aire.</p><p>Las <b>plantas</b>, en cambio, <b>fabrican su propio alimento</b>. Con sus raíces toman agua y sales minerales del suelo, y en sus hojas, con la luz del sol y el aire, lo convierten en alimento. Las plantas también respiran, aunque no lo notemos.</p><p>Gracias a la nutrición, los seres vivos <b>crecen</b>. Un pollito se convierte en gallina y una bellota llega a ser una gran encina. ¡Tú también has crecido muchos centímetros desde que naciste!</p>`,
      svg: svg("Los animales comen otros seres vivos y las plantas fabrican su alimento con la luz", `${tit("¿Cómo se alimentan?")}${sol(220, 52, 12)}${suelo(150)}<g transform="translate(64 136)"><ellipse rx="28" ry="15" fill="${COL.marron}" fill-opacity=".55"/><circle cx="26" cy="-12" r="10" fill="${COL.marron}" fill-opacity=".7"/><path d="M-20 12 v12 M-8 12 v12 M8 12 v12 M20 12 v12" stroke="${COL.marron}" stroke-width="4"/></g>${flor(110, 150, "var(--sun)")}${fl(98, 128, 82, 124, COL.verde, 2)}<path d="M190 150 V96" stroke="#15803d" stroke-width="4"/>${hoja(190, 112, 1, -30)}${hoja(190, 124, 1, 200)}${fl(208, 66, 196, 96, COL.sol, 2)}${et(64, 172, "come", 80, { size: 11, color: COL.marron })}${et(190, 172, "fabrica su alimento", 110, { size: 11, color: COL.verde })}`),
      video: vid("B56zZNSdAvg"),
    },
    {
      html: `<h3>La relación</h3><p>Los seres vivos <b>se dan cuenta</b> de lo que pasa a su alrededor y <b>responden</b>. Esta es la función de <mark>relación</mark>.</p><p>Los <b>animales</b> usan los <b>sentidos</b> para recibir información: la vista, el oído, el olfato, el gusto y el tacto. Después, se mueven para reaccionar. Un gato que oye un ruido gira las orejas; una gacela que ve un león sale corriendo; un perro que huele comida mueve la cola. También nos relacionamos con otros: los lobos viven en manada y las abejas trabajan juntas en la colmena.</p><p>Las <b>plantas</b> también se relacionan, pero sus movimientos son muy lentos. Sus tallos y hojas se giran hacia la <b>luz</b>, sus raíces crecen hacia abajo y hacia el <b>agua</b>, y muchos árboles pierden las hojas cuando llega el frío del otoño.</p><p>Algunas plantas son más rápidas: la planta carnívora llamada atrapamoscas cierra sus hojas cuando un insecto las toca, y la mimosa pliega sus hojitas si las rozas con el dedo.</p>`,
      svg: svg("Un gato oye un ruido y gira las orejas; una planta se inclina hacia la luz", `${tit("Sentir y responder")}<g transform="translate(70 120)"><ellipse cx="0" cy="18" rx="30" ry="16" fill="${COL.naranja}" fill-opacity=".7"/><circle cx="0" cy="-10" r="18" fill="${COL.naranja}" fill-opacity=".8"/><path d="M-14 -22 l-4 -16 l12 8z M14 -22 l4 -16 l-12 8z" fill="${COL.naranja}"/><circle cx="-6" cy="-12" r="2.4" fill="var(--ink)"/><circle cx="6" cy="-12" r="2.4" fill="var(--ink)"/></g><path d="M110 70 q8 8 0 16 M118 64 q14 14 0 28" stroke="var(--muted)" stroke-width="2" fill="none"/>${sol(232, 54, 11)}<path d="M180 160 q0 -40 30 -70" stroke="#15803d" stroke-width="4" fill="none"/>${hoja(194, 128, 0.8, -40)}${hoja(204, 108, 0.8, -40)}<path d="M162 160 h36 l-5 14 h-26z" fill="${COL.naranja}" fill-opacity=".6"/>${et(70, 172, "oye y se mueve", 110, { size: 11, color: COL.naranja })}${et(176, 60, "hacia la luz", 70, { size: 10, color: COL.sol })}`),
    },
    {
      html: `<h3>La reproducción</h3><p>Ningún ser vivo vive para siempre. Para que no desaparezcan, los seres vivos tienen <b>descendientes</b> parecidos a ellos. Esta es la función de <mark>reproducción</mark>.</p><p>Los <b>animales</b> se reproducen de dos formas principales:</p><p>• Los <mark>vivíparos</mark> crecen dentro del cuerpo de su madre y nacen ya formados, como los perros, los caballos o las personas.<br>• Los <mark>ovíparos</mark> nacen de un <b>huevo</b>, como las gallinas, las tortugas, los peces o las mariposas.</p><p>Las <b>plantas</b> se reproducen de varias maneras. Muchas tienen <b>flores</b>, que se convierten en <b>frutos</b> con <b>semillas</b> dentro. Cuando una semilla cae en la tierra, germina y sale una planta nueva. Otras plantas nacen de un trozo de la planta madre, como el geranio o la patata.</p><p>Los descendientes se parecen a sus padres: de una semilla de girasol sale un girasol, nunca un tomate; y de un huevo de pato sale un patito.</p>`,
      svg: svg("Animales vivíparos y ovíparos; las plantas nacen de semillas", `${tit("Tener descendientes")}${fichas([["Vivíparos", "nacen de la madre: perro, vaca", COL.rojo], ["Ovíparos", "nacen de un huevo: gallina, pez", COL.sol], ["Plantas", "nacen de semillas", COL.verde], ["Otras plantas", "de un trozo: patata", "#15803d"]], 2, 36, 0)}`),
    },
    {
      html: `<h3>El ciclo de vida</h3><p>Todos los seres vivos pasan por las mismas etapas a lo largo de su vida. Es lo que llamamos el <mark>ciclo de vida</mark>:</p><p><b>1. Nacen</b> de su madre, de un huevo o de una semilla.<br><b>2. Crecen</b> y se desarrollan gracias a la nutrición.<br><b>3. Se reproducen</b> cuando son adultos y tienen descendientes.<br><b>4. Mueren</b> al final de su vida.</p><p>Se llama «ciclo» porque, cuando un ser vivo muere, ya ha dejado descendientes que vuelven a nacer, crecer y reproducirse. Así, la vida continúa.</p><p>La duración del ciclo es muy diferente según el ser vivo. Algunos insectos viven solo unas semanas. Un perro vive unos doce o quince años y una persona, unos ochenta. ¡Algunas tortugas gigantes superan los cien años, y hay árboles, como los olivos o los tejos, que tienen más de mil!</p><p>Algunos animales cambian mucho al crecer. La rana nace como renacuajo, y la mariposa empieza siendo una oruga. Este cambio se llama <b>metamorfosis</b>.</p>`,
      svg: svg("Ciclo de vida: nacer, crecer, reproducirse y morir", `${tit("El ciclo de vida")}${ciclo([["nacer", COL.sol], ["crecer", COL.verde], ["reproducirse", COL.rojo], ["morir", COL.gris]], 130, 102, 56, 94)}`),
    },
    {
      html: `<h3>Las células</h3><p>Si miramos una hoja, la piel o un trozo de cebolla con un <b>microscopio</b>, descubrimos que están formados por piezas diminutas, como si fueran ladrillos de una casa. Esas piezas se llaman <mark>células</mark>.</p><p>Todos los seres vivos están formados por células. Es lo que tienen en común una ballena, un roble y una bacteria. Las células son tan pequeñas que no las podemos ver a simple vista.</p><p>• Algunos seres vivos tienen una <b>sola célula</b>: se llaman <b>unicelulares</b>. Por ejemplo, las bacterias. Son tan pequeños que solo se ven con el microscopio. Algunas bacterias son buenas, como las que hacen el yogur, y otras producen enfermedades.<br>• La mayoría de los seres vivos que conocemos tienen <b>muchísimas células</b>: son <b>pluricelulares</b>. Tu cuerpo tiene billones de células de muchos tipos: de la piel, de los huesos, de la sangre…</p><p>Los objetos inertes, como una piedra o el plástico, no están formados por células.</p>`,
      svg: svg("Las células se ven con el microscopio; seres unicelulares y pluricelulares", `${tit("La célula")}<g transform="translate(62 108)"><rect x="-8" y="-50" width="16" height="44" rx="4" fill="${COL.gris}"/><rect x="-26" y="10" width="52" height="10" rx="3" fill="${COL.gris}"/><path d="M0 -6 V10" stroke="${COL.gris}" stroke-width="8"/><rect x="-18" y="0" width="36" height="5" fill="var(--ink)"/></g>${[0, 1, 2].map((r) => [0, 1, 2].map((c) => `<rect x="${130 + c * 38}" y="${50 + r * 34}" width="36" height="32" rx="6" fill="${COL.verde}" fill-opacity=".25" stroke="${COL.verde}" stroke-width="1.5"/><circle cx="${148 + c * 38}" cy="${66 + r * 34}" r="5" fill="${COL.morado}"/>`).join("")).join("")}${et(62, 152, "microscopio", 90, { size: 11 })}${et(186, 166, "células de una hoja", 130, { size: 11, color: COL.verde })}`),
    },
    {
      html: `<h3>Los reinos de los seres vivos</h3><p>Hay millones de seres vivos diferentes. Para estudiarlos, los científicos los agrupan según se parecen. Los grupos más grandes se llaman <mark>reinos</mark>. Los principales son:</p><p>• El <b>reino de los animales</b>: se alimentan de otros seres vivos y la mayoría pueden desplazarse. Por ejemplo, el perro, la mariposa o el pez.<br>• El <b>reino de las plantas</b>: fabrican su alimento con la luz del sol y viven fijas al suelo. Por ejemplo, el pino, la rosa o el musgo.<br>• El <b>reino de los hongos</b>: no son plantas aunque vivan fijos; no fabrican su alimento y se nutren de restos de otros seres vivos. Por ejemplo, las setas, los mohos del pan o las levaduras que hacen subir la masa.</p><p>Además, hay seres vivos <b>microscópicos</b>, como las bacterias o algunas algas diminutas, que forman otros reinos.</p><p>¿Sabías que las setas que comemos son solo una parte del hongo? El resto vive bajo tierra, como una red de hilos finísimos.</p>`,
      svg: svg("Reinos de los seres vivos: animales, plantas, hongos y seres microscópicos", `${tit("Los reinos")}${suelo(122)}${pez(42, 104)}${pajaro(42, 70, COL.azul)}${arbol(104, 122, 0.9)}${flor(124, 122)}${seta(170, 122, 1.2)}${seta(186, 122, 0.8)}<circle cx="226" cy="90" r="16" fill="none" stroke="var(--ink)" stroke-width="1.5"/>${[[220, 86], [230, 92], [224, 96], [232, 84]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="3" ry="1.6" fill="${COL.morado}"/>`).join("")}${et(42, 146, "animales", 60, { size: 11, color: COL.azul })}${et(112, 146, "plantas", 60, { size: 11, color: COL.verde })}${et(178, 146, "hongos", 56, { size: 11, color: COL.rojo })}${et(226, 146, "bacterias", 56, { size: 11, color: COL.morado })}${tx(130, 168, "agrupados según se parecen", 220)}`),
    },
    {
      html: `<h3>Cuidamos a los seres vivos</h3><p>Todos los seres vivos son importantes y dependen unos de otros. Las plantas producen el oxígeno que respiramos y son alimento de muchos animales; los insectos ayudan a que las flores den frutos; y los hongos y las bacterias descomponen los restos y abonan el suelo.</p><p>Por eso tenemos que <b>respetarlos y cuidarlos</b>:</p><p>• No arrancar plantas ni flores en el campo sin necesidad.<br>• No molestar a los animales, ni romper nidos ni hormigueros.<br>• No dejar basura en la naturaleza: un plástico puede atrapar a un pájaro o a una tortuga.<br>• Cuidar bien a nuestras mascotas: darles comida, agua, cariño y llevarlas al veterinario.<br>• Ahorrar agua y no hacer fuego en el monte.</p><p><b>Juego de repaso:</b> busca en tu clase o en el patio cinco seres vivos y cinco objetos inertes. Para cada ser vivo, piensa: ¿cómo se nutre?, ¿cómo se relaciona? y ¿cómo se reproduce?</p>`,
      svg: svg("Normas para cuidar a los seres vivos", `${tit("Respetamos la vida")}${filas([["plantas", "no arrancarlas", COL.verde], ["animales", "no molestarlos", COL.naranja], ["basura", "a la papelera", COL.azul], ["mascotas", "comida, agua y cariño", COL.rojo]], 50, 30, { x: 22, wa: 70, wb: 150, dos: false })}`),
    },
  ],
  figura: {
    titulo: "Los seres vivos en ocho ideas",
    svg: rejilla([
      ["Ser vivo", "nace, crece, muere", COL.verde],
      ["Inerte", "no tiene vida", COL.gris],
      ["Nutrición", "energía para vivir", COL.naranja],
      ["Relación", "sentir y responder", COL.azul],
      ["Reproducción", "tener descendientes", COL.rojo],
      ["Ciclo de vida", "nacer, crecer, morir", COL.sol],
      ["Célula", "ladrillo de la vida", COL.morado],
      ["Reinos", "animales, plantas, hongos", COL.marron],
    ], 4, 86, "Resumen de los seres vivos"),
  },
  video: vgen("HeS-NSMxQfE", "los seres vivos para niños"),
  ejemplos: [
    { enunciado: "Clasifica en seres vivos e inertes: margarita, piedra, hormiga, bicicleta, seta, agua.",
      pasos: ["¿Nace, crece, se reproduce y muere? Margarita, hormiga y seta: sí.", "La piedra y el agua son inertes naturales.", "La bicicleta es un objeto inerte fabricado."],
      resultado: "Vivos: margarita, hormiga y seta. Inertes: piedra, bicicleta y agua." },
    { enunciado: "Un girasol gira su flor hacia el sol. ¿Qué función vital está realizando?",
      pasos: ["Se da cuenta de dónde está la luz.", "Responde moviéndose hacia ella."],
      resultado: "La función de relación." },
    { enunciado: "Ordena el ciclo de vida de una gallina: pone huevos, nace un pollito, muere, crece.",
      pasos: ["Primero nace del huevo.", "Después crece y se hace adulta.", "De adulta se reproduce y pone huevos.", "Al final de su vida muere."],
      resultado: "Nace → crece → pone huevos → muere." },
  ],
  errores: [
    "Pensar que todo lo que se mueve está vivo: un coche se mueve y es inerte.",
    "Creer que las plantas no son seres vivos porque no andan.",
    "Pensar que las setas son plantas: son hongos.",
    "Creer que las plantas comen tierra: fabrican su alimento con la luz.",
  ],
  ejercicios: [
    { q: "Escribe tres seres vivos y tres seres inertes que haya en tu casa.", sol: "Por ejemplo, vivos: tú, tu gato y una planta. Inertes: la mesa, la televisión y el agua del grifo." },
    { q: "¿Cuáles son las tres funciones vitales?", sol: "Nutrición, relación y reproducción." },
    { q: "¿En qué se diferencia la nutrición de un conejo de la de un rosal?", sol: "El conejo come otros seres vivos (plantas); el rosal fabrica su alimento con la luz del sol, el agua y el aire." },
    { q: "Un perro oye su nombre y corre hacia su dueño. ¿Qué función vital hace?", sol: "La relación: oye (sentido) y responde moviéndose." },
    { q: "Escribe dos animales vivíparos y dos ovíparos.", sol: "Vivíparos: perro y caballo. Ovíparos: gallina y tortuga (también peces, ranas…)." },
    { q: "¿Cuáles son las etapas del ciclo de vida?", sol: "Nacer, crecer, reproducirse y morir." },
    { q: "¿Qué es una célula?", sol: "La pieza diminuta de la que están formados todos los seres vivos. Solo se ve con microscopio." },
    { q: "¿Qué diferencia hay entre un ser unicelular y uno pluricelular?", sol: "El unicelular tiene una sola célula (bacteria); el pluricelular tiene muchas (persona, árbol)." },
    { q: "¿Por qué una seta no es una planta?", sol: "Porque no fabrica su propio alimento con la luz: se nutre de restos de otros seres vivos. Es un hongo." },
    { q: "Escribe dos cosas que puedes hacer para cuidar a los seres vivos.", sol: "Por ejemplo: no arrancar plantas, no dejar basura en el campo, cuidar a las mascotas, no molestar a los animales." },
  ],
  quiz: [
    { q: "¿Cuál es un ser vivo?", o: ["una piedra", "una hormiga", "una mesa"], a: 1, e: "La hormiga nace, crece, se reproduce y muere." },
    { q: "¿Cuántas funciones vitales hay?", o: ["dos", "tres", "cinco"], a: 1, e: "Nutrición, relación y reproducción." },
    { q: "Las plantas consiguen su alimento…", o: ["comiendo tierra", "fabricándolo con la luz", "comiendo insectos siempre"], a: 1, e: "Lo fabrican en las hojas con la luz del sol." },
    { q: "Sentir y responder es la función de…", o: ["relación", "nutrición", "reproducción"], a: 0, e: "La relación." },
    { q: "Un animal que nace de un huevo es…", o: ["vivíparo", "ovíparo", "inerte"], a: 1, e: "Ovíparo." },
    { q: "El perro es…", o: ["ovíparo", "vivíparo", "unicelular"], a: 1, e: "Nace del vientre de su madre." },
    { q: "Los seres vivos están formados por…", o: ["células", "piedras", "plástico"], a: 0, e: "Por células." },
    { q: "Las setas pertenecen al reino de los…", o: ["animales", "plantas", "hongos"], a: 2, e: "Son hongos." },
    { q: "La última etapa del ciclo de vida es…", o: ["nacer", "crecer", "morir"], a: 2, e: "Morir." },
    { q: "Una bacteria es un ser…", o: ["unicelular", "pluricelular", "inerte"], a: 0, e: "Tiene una sola célula." },
  ],
  examen: [
    { q: "Un coche se mueve, pero es inerte porque…", o: ["no nace ni crece", "es rojo", "hace ruido"], a: 0, e: "No realiza las funciones vitales." },
    { q: "Las hojas de la mimosa se cierran al tocarlas. Es un ejemplo de…", o: ["nutrición", "relación", "reproducción"], a: 1, e: "Relación." },
    { q: "Para ver una célula necesitamos…", o: ["unas gafas de sol", "un microscopio", "una lupa de juguete"], a: 1, e: "Un microscopio." },
    { q: "El cambio de renacuajo a rana se llama…", o: ["metamorfosis", "germinación", "nutrición"], a: 0, e: "Metamorfosis." },
  ],
  feynman: ["Cómo distinguir un ser vivo de un objeto inerte", "Las tres funciones vitales con un ejemplo de cada una", "Qué es el ciclo de vida"],
  mapa: mapa("SERES VIVOS", "var(--pri)", [
    ["Nutrición", "comer · fabricar alimento", COL.verde],
    ["Relación", "sentidos · movimiento", COL.azul],
    ["Reproducción", "vivíparos · ovíparos · semillas", COL.rojo],
    ["Reinos", "animales · plantas · hongos", COL.marron],
  ], 250),
  tarjetas: [
    ["Ser vivo", "Nace, crece, se reproduce y muere."],
    ["Ser inerte", "No tiene vida: piedra, agua, mesa."],
    ["Nutrición", "Tomar alimento y aire para tener energía."],
    ["Relación", "Darse cuenta de lo que pasa y responder."],
    ["Reproducción", "Tener descendientes parecidos."],
    ["Vivíparo", "Animal que nace del vientre de su madre."],
    ["Ovíparo", "Animal que nace de un huevo."],
    ["Célula", "Pieza diminuta que forma los seres vivos."],
  ],
  familias: ["Dad un paseo por el parque y haced una lista de seres vivos e inertes.", "Plantad unas lentejas en algodón húmedo y observad cómo crecen.", "Mirad fotos de cuando vuestro hijo era bebé y hablad de cómo ha crecido.", "Buscad en casa alimentos que vienen de plantas, de animales y de hongos (champiñones, levadura)."],
  profesores: PROF("Ciencias de la Naturaleza: seres vivos e inertes; funciones vitales de nutrición, relación y reproducción; ciclo de vida; la célula; clasificación de los seres vivos en reinos; respeto a los seres vivos", ["Clasificación de objetos y fotos en vivo e inerte con justificación oral.", "Observación de células de cebolla con microscopio escolar o lupa binocular.", "Terrario o semillero de aula con diario de observación."]),
  fuentes: [RD, wiki("Ser vivo", "Ser vivo"), wiki("Célula", "Célula"), wiki("Reino (biología)", "Reino (biología)")],
  revisado: REV,
};
