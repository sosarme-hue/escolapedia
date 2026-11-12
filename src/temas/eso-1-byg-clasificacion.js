// Biología y Geología 1º ESO: la clasificación de los seres vivos. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "La clasificación de los seres vivos",
  minutos: 55,
  objetivos: ["Explicar por qué y cómo se clasifican los seres vivos", "Definir especie y conocer las categorías taxonómicas", "Escribir correctamente el nombre científico de una especie", "Describir los cinco reinos y usar claves dicotómicas sencillas"],
  claves: ["clasificación", "taxonomía", "especie", "género", "familia", "orden", "clase", "filo", "reino", "nomenclatura binomial", "Linneo", "clave dicotómica", "biodiversidad"],
  pregunta: {
    texto: "En España llaman «pez espada» a un pez que en otros países se llama «emperador», «aguja» o «swordfish». ¿Cómo saben los científicos de todo el mundo que hablan del mismo animal?",
    respuesta: "Usando su <b>nombre científico</b>, que es único y el mismo en todos los idiomas: <i>Xiphias gladius</i>. Desde el siglo XVIII, cada especie recibe un nombre en latín formado por <b>dos palabras</b>: el género y la especie. Así se evitan las confusiones de los nombres comunes, que cambian de un país a otro, o incluso de un pueblo a otro.",
  },
  bloques: [
    {
      html: `<h3>¿Por qué clasificar?</h3><p>En la Tierra se han descrito cerca de <b>dos millones de especies</b> de seres vivos, y cada año se descubren miles más. Para poder estudiar esta enorme <mark>biodiversidad</mark> es necesario ordenarla, igual que una biblioteca ordena sus libros por temas o un supermercado agrupa los productos por secciones. <mark>Clasificar</mark> consiste en <b>agrupar</b> los seres vivos según sus <b>semejanzas y diferencias</b>. La ciencia que se encarga de describir, nombrar y clasificar los seres vivos se llama <mark>taxonomía</mark>. Clasificar sirve para identificar un ser vivo desconocido, para entender cómo están emparentadas las especies (los seres más parecidos suelen tener un antepasado común reciente) y para comunicarse sin errores entre científicos de distintos países. Hoy, además del aspecto externo, se tienen en cuenta la <b>anatomía interna</b>, el tipo de <b>células</b>, el modo de <b>nutrición</b>, el <b>desarrollo embrionario</b> y, cada vez más, el <b>ADN</b>.</p>`,
    },
    {
      html: `<h3>Criterios para clasificar</h3><p>Se puede clasificar de muchas maneras, según el <b>criterio</b> que se elija. Por ejemplo, podríamos agrupar a los animales en voladores, nadadores y terrestres; pero entonces el murciélago iría con las aves y la ballena con los peces, aunque los dos son mamíferos. Ese tipo de agrupación se llama <b>artificial</b>, porque se basa en un solo rasgo superficial. Los científicos buscan una clasificación <b>natural</b>, que use muchos rasgos importantes y refleje el <b>parentesco</b> entre las especies. Algunos criterios importantes son: si las células tienen núcleo o no (procariotas o eucariotas); si el ser vivo es unicelular o pluricelular; si su nutrición es autótrofa o heterótrofa; si sus células forman tejidos; y, en los animales, si tienen columna vertebral o no. Un buen criterio divide los seres vivos en grupos <b>claros y sin dudas</b>: cada ser vivo debe poder entrar en uno solo.</p>`,
    },
    {
      html: `<h3>La especie</h3><p>La unidad básica de clasificación es la <mark>especie</mark>: un conjunto de individuos <b>muy parecidos</b> entre sí que pueden <b>reproducirse</b> y tener <b>descendientes fértiles</b>, es decir, hijos que a su vez pueden tener hijos. Por ejemplo, todos los perros, desde un chihuahua hasta un gran danés, son de la misma especie, porque pueden cruzarse y sus crías son fértiles. En cambio, un caballo y una burra pueden tener una cría, el <b>mulo</b>, pero los mulos son estériles: por eso el caballo y el asno son especies distintas. A veces dos individuos de la misma especie parecen muy diferentes (macho y hembra del pavo real, o una oruga y la mariposa adulta), y otras veces dos especies distintas se parecen muchísimo. Por eso no basta con mirar: hay que estudiar si se reproducen entre ellos y, hoy en día, comparar su ADN.</p>`,
    },
    {
      html: `<h3>Las categorías taxonómicas</h3><p>Las especies se agrupan en categorías cada vez más amplias, como si fueran cajas dentro de cajas. Estas categorías se llaman <mark>taxones</mark>. Las especies parecidas se agrupan en un <b>género</b>; los géneros parecidos, en una <b>familia</b>; las familias, en un <b>orden</b>; los órdenes, en una <b>clase</b>; las clases, en un <b>filo</b> (en las plantas se dice «división»); y los filos, en un <b>reino</b>. Por encima del reino se usa hoy el <b>dominio</b>. Cuanto más baja es la categoría, menos seres vivos incluye y más se parecen entre sí. Para recordar el orden de mayor a menor puedes usar una frase como «<b>Re</b>ina <b>Fi</b>lomena <b>Cla</b>ra <b>Or</b>dena <b>Fa</b>milias <b>Ge</b>nerosas <b>Es</b>pañolas». Por ejemplo, el lobo pertenece al reino Animales, filo Cordados, clase Mamíferos, orden Carnívoros, familia Cánidos, género <i>Canis</i> y especie <i>Canis lupus</i>. El perro doméstico se considera una subespecie del lobo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Categorías taxonómicas del lobo, de la más amplia a la más concreta: reino Animales, filo Cordados, clase Mamíferos, orden Carnívoros, familia Cánidos, género Canis y especie Canis lupus">${BG}
        ${[["reino", "Animales", COL.azul], ["filo", "Cordados", COL.agua], ["clase", "Mamíferos", COL.verde], ["orden", "Carnívoros", COL.sol], ["familia", "Cánidos", COL.naranja], ["género", "<tspan font-style=\"italic\">Canis</tspan>", COL.rojo], ["especie", "<tspan font-style=\"italic\">Canis lupus</tspan>", COL.morado]].map(([n, e, c], i) => {
          const w = 240 - i * 18, x = 130 - w / 2, y = 10 + i * 23;
          return `<rect x="${x}" y="${y}" width="${w}" height="20" rx="6" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2"/>${t(x + 8, y + 14, n, { size: 10, anchor: "start", color: c })}${t(x + w - 8, y + 14, e, { size: 10, anchor: "end", weight: 400 })}`;
        }).join("")}</svg>`,
      video: { id: "IKVXwH0-gTc", titulo: "Clasificación de los seres vivos Taxonomía", canal: "Es Ciencia", vistas: 729734 },
    },
    {
      html: `<h3>El nombre científico</h3><p>En el siglo XVIII, el naturalista sueco <b>Carlos Linneo</b> propuso un sistema para nombrar a todas las especies que todavía se usa: la <mark>nomenclatura binomial</mark>. Cada especie tiene un nombre científico formado por <b>dos palabras en latín</b> (o latinizadas). La primera es el nombre del <b>género</b> y se escribe con <b>mayúscula inicial</b>; la segunda es el <b>epíteto específico</b> y se escribe <b>todo en minúscula</b>. El nombre completo se escribe en <b>cursiva</b> (o subrayado si se escribe a mano). Por ejemplo: el ser humano es <i>Homo sapiens</i>; el lince ibérico, <i>Lynx pardinus</i>; la encina, <i>Quercus ilex</i>; y el alcornoque, <i>Quercus suber</i> (que es del mismo género que la encina). Este sistema tiene varias ventajas: es <b>universal</b> (igual en todos los idiomas), cada nombre es <b>único</b> y, además, el nombre del género ya indica qué especies están emparentadas.</p>`,
      video: { id: "r5lhPZK5SAU", titulo: "Nomenclatura binomial | ¿cómo escribir nombres científicos?", canal: "Ciencias con la Bióloga Elena", vistas: 15610 },
    },
    {
      html: `<h3>Los cinco reinos</h3><p>Una clasificación muy usada en la enseñanza divide los seres vivos en <mark>cinco reinos</mark>, según el tipo de células, su número y su forma de nutrición. El <b>reino Moneras</b> incluye las <b>bacterias</b>: son procariotas y unicelulares, y su nutrición puede ser autótrofa o heterótrofa. El <b>reino Protoctistas</b> reúne a los <b>protozoos</b> (eucariotas unicelulares y heterótrofos, como la ameba o el paramecio) y las <b>algas</b> (eucariotas autótrofas, unicelulares o pluricelulares sin tejidos verdaderos). El <b>reino Hongos</b> incluye mohos, levaduras y setas: son eucariotas, unicelulares o pluricelulares, con pared celular de quitina y nutrición heterótrofa, generalmente de restos de otros seres. El <b>reino Plantas</b> está formado por seres eucariotas, pluricelulares, con tejidos y autótrofos (fotosíntesis). Y el <b>reino Animales</b> lo forman seres eucariotas, pluricelulares, con tejidos y heterótrofos, que en su mayoría pueden desplazarse. Actualmente, muchos científicos agrupan los seres vivos en <b>tres dominios</b> (Bacterias, Arqueas y Eucariotas), según su ADN.</p>${tabla(["Reino", "Célula", "Organización", "Nutrición", "Ejemplos"], [["Moneras", "procariota", "unicelular", "autótrofa o heterótrofa", "bacterias, cianobacterias"], ["Protoctistas", "eucariota", "uni- o pluricelular sin tejidos", "autótrofa (algas) o heterótrofa (protozoos)", "ameba, alga"], ["Hongos", "eucariota", "uni- o pluricelular", "heterótrofa", "levadura, moho, seta"], ["Plantas", "eucariota", "pluricelular con tejidos", "autótrofa", "musgo, helecho, pino"], ["Animales", "eucariota", "pluricelular con tejidos", "heterótrofa", "esponja, abeja, lobo"]])}`,
    },
    {
      html: `<h3>Las claves dicotómicas</h3><p>Para identificar un ser vivo se usan las <mark>claves dicotómicas</mark>. Una clave dicotómica es una lista de <b>pares de afirmaciones opuestas</b>; en cada paso se elige la opción que cumple el ser vivo que queremos identificar, y esa opción nos lleva a otro par de afirmaciones o directamente al nombre del grupo. «Dicotómica» significa «que se divide en dos». Por ejemplo, para clasificar cuatro animales (una lagartija, un gorrión, una trucha y un ratón) podríamos usar esta clave: 1a) Tiene pelo → <b>mamífero</b> (ratón); 1b) No tiene pelo → ir a 2. 2a) Tiene plumas → <b>ave</b> (gorrión); 2b) No tiene plumas → ir a 3. 3a) Tiene escamas y aletas, y vive en el agua → <b>pez</b> (trucha); 3b) Tiene escamas y patas → <b>reptil</b> (lagartija). Las claves usan rasgos <b>fáciles de observar</b> y deben estar bien construidas para que no haya dudas. Los botánicos y zoólogos usan claves mucho más largas en las guías de campo; hoy también existen aplicaciones de móvil que identifican plantas y animales a partir de una foto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Clave dicotómica en forma de árbol: con pelo, mamífero; sin pelo y con plumas, ave; sin plumas y con aletas, pez; con patas, reptil">${BG}
        ${cj(10, 10, 74, 26, "¿pelo?", COL.azul)}${cj(160, 10, 90, 26, "mamífero", COL.rojo)}
        ${fl(84, 23, 156, 23, "var(--ink)", 1.8)}${et(120, 18, "sí", 30, { size: 9.5 })}
        ${fl(47, 36, 47, 62, "var(--ink)", 1.8)}${et(56, 52, "no", 20, { size: 9.5, anchor: "start" })}
        ${cj(10, 66, 74, 26, "¿plumas?", COL.azul)}${cj(160, 66, 90, 26, "ave", COL.sol)}
        ${fl(84, 79, 156, 79, "var(--ink)", 1.8)}${et(120, 74, "sí", 30, { size: 9.5 })}
        ${fl(47, 92, 47, 118, "var(--ink)", 1.8)}${et(56, 108, "no", 20, { size: 9.5, anchor: "start" })}
        ${cj(10, 122, 74, 26, "¿aletas?", COL.azul)}${cj(160, 122, 90, 22, "pez", COL.agua)}${cj(160, 150, 90, 22, "reptil", COL.verde)}
        ${fl(84, 133, 156, 133, "var(--ink)", 1.8)}${et(120, 128, "sí", 30, { size: 9.5 })}${fl(84, 142, 156, 160, "var(--ink)", 1.8)}${et(112, 162, "no", 20, { size: 9.5 })}</svg>`,
    },
    {
      html: `<h3>La biodiversidad y su protección</h3><p>La <mark>biodiversidad</mark> es la <b>variedad de seres vivos</b> que hay en la Tierra o en un lugar concreto. Incluye la variedad de <b>especies</b>, la variedad <b>genética</b> dentro de cada especie (por eso cada perro es diferente) y la variedad de <b>ecosistemas</b>. España es uno de los países de Europa con más biodiversidad, gracias a la variedad de climas y relieves y a sus islas, y tiene muchas especies <b>endémicas</b>, que solo viven aquí, como el lince ibérico o el drago canario. La biodiversidad es valiosa porque mantiene el equilibrio de los ecosistemas, nos proporciona alimentos, medicinas y materiales, y forma parte de nuestro patrimonio natural. Sin embargo, hoy muchas especies están en peligro de extinción por la destrucción de sus hábitats, la contaminación, la caza y pesca excesivas, las especies invasoras y el cambio climático. Para protegerla se crean <b>espacios naturales protegidos</b>, como los parques nacionales, se aprueban leyes y catálogos de especies amenazadas y se desarrollan programas de cría en cautividad, como el que salvó al lince ibérico.</p>`,
    },
  ],
  figura: {
    titulo: "Los cinco reinos",
    svg: rejilla([
      ["Moneras", "procariotas: bacterias", COL.gris],
      ["Protoctistas", "protozoos y algas", COL.agua],
      ["Hongos", "levaduras, mohos y setas", COL.marron],
      ["Plantas", "pluricelulares autótrofas", COL.verde],
      ["Animales", "pluricelulares heterótrofos", COL.rojo],
      ["Especie", "descendencia fértil", COL.morado],
    ], 3, 80, "Resumen: los cinco reinos y la definición de especie"),
  },
  video: { id: "6tttZ_7Q9a8", titulo: "Clasificación de los SERES VIVOS - 5 REINOS - Ciencias para niños", canal: "Smile and Learn - Español", vistas: 1695461, megusta: 0, busqueda: "los cinco reinos de los seres vivos" },
  ejemplos: [
    { enunciado: "Corrige estos nombres científicos: «homo Sapiens», «Lynx Pardinus», «quercus ilex».",
      pasos: ["El género va con mayúscula inicial y la especie toda en minúscula.", "Todo el nombre va en cursiva (o subrayado a mano)."],
      resultado: "<i>Homo sapiens</i>, <i>Lynx pardinus</i>, <i>Quercus ilex</i>." },
    { enunciado: "El lobo es <i>Canis lupus</i> y el chacal dorado es <i>Canis aureus</i>. ¿Qué categorías comparten seguro? ¿Son la misma especie?",
      pasos: ["Tienen el mismo género, <i>Canis</i>.", "Si comparten género, comparten también familia, orden, clase, filo y reino.", "El segundo nombre es distinto, así que son especies diferentes."],
      resultado: "Comparten del género hacia arriba; son especies distintas." },
    { enunciado: "Un ser vivo es eucariota, pluricelular, tiene pared celular de quitina y se alimenta de restos de hojas. ¿A qué reino pertenece?",
      pasos: ["Eucariota: descartamos Moneras.", "Heterótrofo: descartamos Plantas y algas.", "Pared de quitina y se alimenta de restos: Hongos."],
      resultado: "Reino Hongos (por ejemplo, una seta)." },
  ],
  errores: [
    "Escribir la segunda palabra del nombre científico con mayúscula.",
    "Pensar que el mulo es una especie: es un híbrido estéril.",
    "Clasificar por un solo rasgo superficial (por ejemplo, poner la ballena con los peces).",
    "Incluir los hongos en el reino de las plantas: son heterótrofos y tienen quitina.",
    "Creer que cuanto más alta es la categoría, más se parecen sus miembros: es al revés.",
  ],
  ejercicios: [
    { q: "¿Qué es la taxonomía?", sol: "La ciencia que describe, nombra y clasifica los seres vivos." },
    { q: "¿Qué es una especie?", sol: "Un conjunto de individuos parecidos que pueden reproducirse entre sí y tener descendencia fértil." },
    { q: "¿Por qué el caballo y el asno son especies distintas si pueden tener crías?", sol: "Porque sus crías, los mulos, son estériles." },
    { q: "Ordena de menor a mayor: clase, especie, reino, familia, género, orden, filo.", sol: "Especie, género, familia, orden, clase, filo y reino." },
    { q: "¿Quién propuso la nomenclatura binomial y cómo se escribe un nombre científico?", sol: "Linneo; dos palabras en latín, género con mayúscula y especie en minúscula, todo en cursiva." },
    { q: "La encina (<i>Quercus ilex</i>) y el alcornoque (<i>Quercus suber</i>), ¿están emparentados? ¿Por qué?", sol: "Sí, porque pertenecen al mismo género, <i>Quercus</i>." },
    { q: "¿Qué reino agrupa a los seres procariotas?", sol: "El reino Moneras." },
    { q: "Escribe dos diferencias entre el reino Plantas y el reino Hongos.", sol: "Las plantas son autótrofas y tienen pared de celulosa; los hongos son heterótrofos y tienen pared de quitina." },
    { q: "¿Qué es una clave dicotómica?", sol: "Una lista de pares de afirmaciones opuestas que, eligiendo una en cada paso, permite identificar un ser vivo." },
    { q: "Escribe tres amenazas para la biodiversidad y una medida para protegerla.", sol: "Destrucción de hábitats, contaminación y especies invasoras; por ejemplo, crear espacios naturales protegidos." },
  ],
  quiz: [
    { q: "La unidad básica de clasificación es…", o: ["el reino", "la especie", "la familia"], a: 1, e: "La especie." },
    { q: "La categoría más amplia de las siete es…", o: ["el reino", "el género", "la clase"], a: 0, e: "El reino." },
    { q: "La nomenclatura binomial la propuso…", o: ["Darwin", "Linneo", "Hooke"], a: 1, e: "Carlos Linneo." },
    { q: "En <i>Homo sapiens</i>, «Homo» es el…", o: ["género", "reino", "orden"], a: 0, e: "Género." },
    { q: "Las bacterias pertenecen al reino…", o: ["Moneras", "Hongos", "Protoctistas"], a: 0, e: "Moneras." },
    { q: "Las algas pertenecen al reino…", o: ["Plantas", "Protoctistas", "Moneras"], a: 1, e: "Protoctistas." },
    { q: "Los hongos son…", o: ["autótrofos", "heterótrofos", "procariotas"], a: 1, e: "Heterótrofos." },
    { q: "Los seres del reino Plantas son…", o: ["unicelulares", "pluricelulares autótrofos", "heterótrofos"], a: 1, e: "Pluricelulares y autótrofos." },
    { q: "Una clave dicotómica ofrece en cada paso…", o: ["dos opciones", "tres opciones", "una sola"], a: 0, e: "Dos opciones opuestas." },
    { q: "Una especie endémica es la que…", o: ["vive solo en un lugar", "está extinguida", "es invasora"], a: 0, e: "Vive solo en una zona concreta." },
  ],
  examen: [
    { q: "El nombre científico se escribe…", o: ["en cursiva", "en mayúsculas", "entre comillas"], a: 0, e: "En cursiva." },
    { q: "Hoy, además del aspecto, se clasifica comparando…", o: ["el ADN", "el precio", "el tamaño solo"], a: 0, e: "El ADN." },
    { q: "Los tres dominios son Bacterias, Arqueas y…", o: ["Eucariotas", "Animales", "Virus"], a: 0, e: "Eucariotas." },
  ],
  feynman: ["Qué es una especie y cómo se sabe si dos animales son de la misma", "Cómo se escribe un nombre científico y por qué es útil", "Qué caracteriza a cada uno de los cinco reinos"],
  mapa: mapa("CLASIFICAR", "var(--eso)", [
    ["Especie", "descendencia fértil", COL.morado],
    ["Categorías", "reino → … → especie", COL.azul],
    ["Nombre científico", "Género especie (Linneo)", COL.rojo],
    ["Cinco reinos", "moneras · protoctistas · hongos…", COL.verde],
  ], 290),
  tarjetas: [
    ["Taxonomía", "Ciencia que describe, nombra y clasifica los seres vivos."],
    ["Especie", "Individuos parecidos que tienen descendencia fértil."],
    ["Categorías", "Reino, filo, clase, orden, familia, género y especie."],
    ["Nomenclatura binomial", "Nombre científico de dos palabras: <i>Género especie</i>."],
    ["Reino Moneras", "Bacterias: procariotas unicelulares."],
    ["Reino Hongos", "Eucariotas heterótrofos con pared de quitina."],
    ["Clave dicotómica", "Pares de opciones opuestas para identificar seres vivos."],
    ["Biodiversidad", "Variedad de especies, genes y ecosistemas."],
  ],
  familias: ["En el supermercado, buscad el nombre científico de algún pescado en la etiqueta (es obligatorio).", "Inventad juntos una clave dicotómica para identificar los objetos de un cajón de la cocina.", "Usad una aplicación de identificación de plantas en un paseo y apuntad los nombres científicos."],
  profesores: {
    saberes: "Clasificación de los seres vivos: criterios, concepto de especie, categorías taxonómicas, nomenclatura binomial, los cinco reinos y los tres dominios, claves dicotómicas, biodiversidad y su conservación (RD 217/2022, Biología y Geología, bloque Seres vivos).",
    ideas: ["Elaborar una clave dicotómica para los árboles del patio del centro.", "Juego de cartas de taxones: ordenar categorías de varias especies.", "Investigar una especie endémica amenazada de la comunidad autónoma."],
  },
  fuentes: [RD, wiki("Taxonomía", "Taxonomía"), wiki("Nomenclatura binomial", "Nomenclatura_binomial"), { t: "Ministerio para la Transición Ecológica: catálogo de especies amenazadas", url: "https://www.miteco.gob.es/es/biodiversidad/temas/conservacion-de-especies.html" }],
  revisado: REV,
};
