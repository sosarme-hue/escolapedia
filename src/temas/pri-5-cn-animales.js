// Ciencias de la Naturaleza 5º de Primaria: los animales, clasificación. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, pez, pajaro } = require("./_pri5b");

// Insecto de vista superior: cabeza, tórax, abdomen, seis patas y antenas.
const insecto = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="-22" rx="7" ry="6" fill="#78350f"/><ellipse cx="0" cy="-6" rx="9" ry="10" fill="#a16207"/><ellipse cx="0" cy="20" rx="11" ry="17" fill="#c98a00"/>${[-1, 1].map((k) => `<path d="M${k * 8} -10 l${k * 14} -10 M${k * 9} -5 l${k * 16} 0 M${k * 8} 0 l${k * 14} 12 M${-k * 3} -27 q${-k * 6} -12 ${-k * 12} -14" stroke="#78350f" stroke-width="2" fill="none"/>`).join("")}</g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Los animales: clasificación",
  minutos: 50,
  objetivos: ["Recordar las características comunes de los animales", "Diferenciar vertebrados e invertebrados", "Clasificar los vertebrados en mamíferos, aves, reptiles, anfibios y peces", "Conocer los principales grupos de invertebrados", "Explicar cómo realizan los animales sus funciones vitales", "Valorar la protección de las especies amenazadas"],
  claves: ["vertebrado", "invertebrado", "mamífero", "ave", "reptil", "anfibio", "pez", "vivíparo", "ovíparo", "metamorfosis", "artrópodo", "molusco", "gusano", "equinodermo", "esponja", "medusa"],
  pregunta: {
    texto: "Un murciélago vuela como un pájaro, una ballena nada como un pez y un pingüino no puede volar. ¿A qué grupo pertenece cada uno?",
    respuesta: "El <b>murciélago</b> y la <b>ballena</b> son <mark>mamíferos</mark>: tienen pelo (aunque la ballena casi no), nacen del vientre de su madre y maman leche. El <b>pingüino</b> es un <mark>ave</mark>: tiene plumas, pico y pone huevos, aunque no vuele. Para clasificar un animal no basta con fijarse en cómo se mueve: hay que mirar todas sus características.",
  },
  bloques: [
    {
      html: `<h3>Características de los animales</h3><p>El reino animal reúne a más de un millón de especies conocidas. Aunque son muy distintos, todos comparten estas características:</p><p>• Son <b>pluricelulares</b>, con tejidos y, casi siempre, órganos y aparatos.<br>• Son <b>heterótrofos</b>: se alimentan de otros seres vivos. Según lo que comen pueden ser <b>herbívoros</b> (comen plantas, como la vaca), <b>carnívoros</b> (comen otros animales, como el lobo) u <b>omnívoros</b> (comen de todo, como el oso o el ser humano).<br>• Casi todos pueden <b>desplazarse</b>: andan, corren, nadan, vuelan, reptan o saltan.<br>• Tienen <b>sentidos</b> y, la mayoría, sistema nervioso, que les permite reaccionar rápido.<br>• Casi todos se reproducen de forma <b>sexual</b>: un macho y una hembra se unen para tener descendencia.</p><p>Para clasificarlos, la primera pregunta es: ¿tiene <b>columna vertebral</b>, es decir, un esqueleto interno con vértebras? Si la tiene, es un <mark>vertebrado</mark>. Si no la tiene, es un <mark>invertebrado</mark>.</p>`,
      svg: svg("Los animales se dividen en vertebrados (con columna) e invertebrados (sin columna)", `${tit("¿Tiene columna vertebral?")}${cj(80, 40, 100, 28, "animal", COL.azul)}${fl(110, 70, 70, 92, "var(--muted)", 2)}${fl(150, 70, 190, 92, "var(--muted)", 2)}${cj2(12, 96, 116, 56, "Sí: vertebrado", "mamífero, ave, pez…", COL.azul)}${cj2(134, 96, 116, 56, "No: invertebrado", "insecto, caracol…", COL.verde)}${tx(130, 170, "herbívoros · carnívoros · omnívoros", 236)}`),
      video: vid("uQo9wZS2BC0"),
    },
    {
      html: `<h3>Los mamíferos</h3><p>Los <mark>mamíferos</mark> son el grupo al que pertenecemos los seres humanos. Sus características son:</p><p>• Tienen el cuerpo cubierto de <b>pelo</b>, que les ayuda a mantener el calor.<br>• Son <b>vivíparos</b>: las crías se desarrollan dentro del vientre de la madre y nacen ya formadas. (Hay dos excepciones curiosas, el ornitorrinco y el equidna, que ponen huevos.)<br>• Las crías se alimentan de la <b>leche</b> que producen las <b>mamas</b> de la madre. De ahí viene su nombre.<br>• Respiran por <b>pulmones</b>, también los que viven en el agua, como los delfines, que salen a la superficie a tomar aire.<br>• Tienen <b>temperatura constante</b>: su cuerpo se mantiene caliente aunque haga frío fuera.<br>• Casi todos tienen <b>cuatro extremidades</b>, que pueden ser patas, brazos, aletas o alas.</p><p>Hay mamíferos terrestres (león, caballo), acuáticos (ballena, delfín, foca) y voladores (murciélago, el único mamífero que vuela de verdad). Los cuidados que dan a sus crías suelen ser largos: muchas crías pasan meses o años con sus padres aprendiendo a sobrevivir.</p>`,
      svg: svg("Mamíferos: pelo, vivíparos, maman leche, pulmones; terrestres, acuáticos y voladores", `${tit("Mamíferos")}${filas([["pelo", "abriga el cuerpo", COL.marron], ["vivíparos", "nacen de la madre", COL.rojo], ["leche", "las crías maman", COL.azul], ["pulmones", "incluso la ballena", COL.verde]], 50, 26, { x: 22, wa: 80, wb: 130 })}${tx(130, 166, "león · ballena · murciélago", 236, { weight: 700, color: COL.marron })}`),
      video: vid("m4MPj5nFNW0"),
    },
    {
      html: `<h3>Las aves</h3><p>Las <mark>aves</mark> son vertebrados con estas características:</p><p>• Tienen el cuerpo cubierto de <b>plumas</b>. Hay plumas grandes para volar y plumas pequeñas y suaves, el plumón, que dan calor.<br>• Tienen <b>pico</b> sin dientes. Su forma depende de lo que comen: corto y fuerte para partir semillas (gorrión), ganchudo para desgarrar carne (águila), largo y fino para buscar en el barro (garza).<br>• Sus extremidades delanteras son <b>alas</b> y tienen dos <b>patas</b> con escamas.<br>• Son <b>ovíparas</b>: ponen huevos con cáscara dura, que <b>incuban</b> (dan calor sentándose encima) en nidos hasta que nacen los polluelos.<br>• Respiran por <b>pulmones</b> y tienen <b>temperatura constante</b>.<br>• Sus huesos son <b>huecos</b> y ligeros, lo que les ayuda a volar.</p><p>No todas las aves vuelan: el <b>avestruz</b> corre muy deprisa y el <b>pingüino</b> usa sus alas como aletas para nadar. Muchas aves son <b>migratorias</b>: viajan miles de kilómetros cada año buscando mejor clima y comida, como las cigüeñas y las golondrinas.</p>`,
      svg: svg("Ave con plumas, pico, alas y huevos en un nido", `${tit("Aves")}<ellipse cx="70" cy="96" rx="34" ry="22" fill="#93c5fd" stroke="var(--pen)" stroke-width="2"/><circle cx="104" cy="74" r="14" fill="#93c5fd" stroke="var(--pen)" stroke-width="2"/><path d="M116 72 l16 4 l-16 4z" fill="var(--sun)"/><circle cx="108" cy="70" r="2" fill="var(--ink)"/><path d="M50 88 q20 -30 44 -6" fill="#60a5fa" stroke="var(--pen)" stroke-width="2"/><path d="M36 96 l-18 -6 l4 12z" fill="#60a5fa"/><path d="M64 118 V136 M80 118 V136" stroke="#c98a00" stroke-width="3"/><path d="M150 144 q40 20 80 0" fill="#a16207" stroke="#78350f" stroke-width="2"/>${[172, 190, 208].map((x) => `<ellipse cx="${x}" cy="138" rx="8" ry="10" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}${filas([["plumas", "", COL.azul], ["pico", "", COL.sol], ["huevos", "", COL.marron]], 54, 22, { x: 160, wa: 70, wb: 0 })}`),
    },
    {
      html: `<h3>Los reptiles</h3><p>Los <mark>reptiles</mark> son vertebrados como las lagartijas, las serpientes, las tortugas y los cocodrilos. Sus características son:</p><p>• Tienen la piel seca y cubierta de <b>escamas</b> duras o de placas. Algunos, como las serpientes, cambian la piel entera de vez en cuando: es la <b>muda</b>.<br>• Casi todos tienen <b>cuatro patas cortas</b>, por eso caminan arrastrando el vientre (reptando). Las serpientes no tienen patas.<br>• Son <b>ovíparos</b>: ponen huevos con cáscara blanda, como de cuero, normalmente en la arena o en la tierra. La mayoría no cuida de sus crías.<br>• Respiran por <b>pulmones</b>, también las tortugas marinas.<br>• Tienen <b>temperatura variable</b>: su cuerpo está frío o caliente según el ambiente. Por eso los verás tomando el sol por la mañana para calentarse, y en invierno muchos <b>hibernan</b>, escondidos y casi sin moverse.</p><p>Los dinosaurios eran reptiles. Hoy, los reptiles más grandes son los cocodrilos, que pueden medir más de seis metros.</p>`,
      svg: svg("Reptiles: escamas, cuatro patas cortas, huevos con cáscara blanda y temperatura variable", `${tit("Reptiles")}<path d="M24 100 q30 -18 70 -8 q20 4 34 0 q10 -4 18 4 q-8 8 -18 6 q-16 -2 -34 4 q-40 12 -70 -6z" fill="#86efac" stroke="#15803d" stroke-width="2"/><path d="M146 96 q30 6 60 -6" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round"/>${[[50, 108], [80, 110], [50, 92], [80, 90]].map(([x, y], i) => `<path d="M${x} ${y} l${i % 2 ? 8 : -8} ${y > 100 ? 12 : -12}" stroke="#15803d" stroke-width="3"/>`).join("")}<circle cx="138" cy="96" r="2" fill="var(--ink)"/>${filas([["escamas", "piel seca", COL.verde], ["ovíparos", "cáscara blanda", COL.marron], ["temperatura", "variable: toma el sol", COL.naranja]], 136, 16, { x: 22, wa: 80, wb: 130 })}`),
    },
    {
      html: `<h3>Los anfibios</h3><p>Los <mark>anfibios</mark> son vertebrados como las ranas, los sapos, las salamandras y los tritones. Su nombre significa «doble vida», porque pasan una parte de su vida en el agua y otra en la tierra. Sus características son:</p><p>• Tienen la piel <b>desnuda</b> (sin pelo, plumas ni escamas), fina y <b>húmeda</b>. Por eso necesitan vivir cerca del agua o en lugares húmedos.<br>• Son <b>ovíparos</b>: ponen huevos sin cáscara, blandos como gelatina, en el agua.<br>• Tienen <b>temperatura variable</b>.<br>• Sufren una gran transformación a lo largo de su vida, la <mark>metamorfosis</mark>:</p><p>1. Del huevo nace un <b>renacuajo</b>, que vive en el agua, tiene cola, no tiene patas y respira por <b>branquias</b>, como un pez.<br>2. Poco a poco le salen las patas traseras y después las delanteras.<br>3. Desaparecen la cola y las branquias, y se forman los <b>pulmones</b>.<br>4. Se convierte en una <b>rana adulta</b>, que puede vivir en tierra y respira por pulmones y también a través de la piel.</p><p>Los anfibios son muy sensibles a la contaminación del agua: si desaparecen de una charca, es una señal de alarma.</p>`,
      svg: svg("Metamorfosis de la rana: huevos, renacuajo, renacuajo con patas y rana adulta", `${tit("La metamorfosis de la rana")}${flujo([["huevos", COL.agua], ["renacuajo", COL.azul], ["con patas", COL.verde], ["rana", COL.verde]], 60, 38)}${tx(130, 124, "branquias en el agua → pulmones en tierra", 236, { weight: 700, color: COL.azul })}${tx(130, 150, "piel desnuda y húmeda", 236)}`),
      video: vid("RRDbPK6DeCk"),
    },
    {
      html: `<h3>Los peces</h3><p>Los <mark>peces</mark> son vertebrados que viven siempre en el agua, dulce o salada. Sus características son:</p><p>• Tienen el cuerpo cubierto de <b>escamas</b> y con forma <b>alargada</b> (hidrodinámica), que les ayuda a deslizarse por el agua.<br>• Tienen <b>aletas</b> para nadar: la de la cola los impulsa y las demás les sirven para dirigirse y mantener el equilibrio.<br>• Respiran por <mark>branquias</mark>, unas láminas rojas situadas a los lados de la cabeza que toman el oxígeno disuelto en el agua. Por eso un pez fuera del agua se ahoga.<br>• La mayoría son <b>ovíparos</b>: las hembras ponen muchísimos huevos (llamados huevas) y los machos los fecundan en el agua.<br>• Tienen <b>temperatura variable</b>.<br>• Muchos tienen una <b>vejiga natatoria</b>, una bolsa con aire que les permite flotar a diferentes profundidades sin esfuerzo.</p><p>Hay dos grandes grupos: los <b>peces óseos</b>, con esqueleto de hueso (sardina, merluza, trucha), y los <b>peces cartilaginosos</b>, con esqueleto flexible de cartílago (tiburón, raya).</p>`,
      svg: svg("Pez con escamas, aletas y branquias; óseos y cartilaginosos", `${tit("Peces")}${pez(0, 0, "var(--water)").replace("translate(0 0)", "translate(80 92) scale(3)")}${filas([["escamas", "", COL.agua], ["aletas", "", COL.azul], ["branquias", "", COL.rojo]], 54, 24, { x: 170, wa: 70, wb: 0 })}${tx(130, 150, "óseos: sardina · cartilaginosos: tiburón", 236, { weight: 700 })}${tx(130, 168, "respiran el oxígeno disuelto en el agua", 236)}`),
    },
    {
      html: `<h3>Los invertebrados (I): artrópodos</h3><p>Los <mark>invertebrados</mark> no tienen columna vertebral ni huesos. Son la gran mayoría de los animales. El grupo más numeroso es el de los <mark>artrópodos</mark>, que tienen un <b>exoesqueleto</b> (una cubierta dura por fuera) y <b>patas articuladas</b>, formadas por piezas. Hay cuatro grupos:</p><p>• <b>Insectos</b>: tienen el cuerpo dividido en <b>cabeza, tórax y abdomen</b>, <b>seis patas</b>, dos antenas y muchos tienen alas. Son el grupo más numeroso del planeta: hormigas, abejas, escarabajos, mariposas, moscas… Muchos sufren metamorfosis, como la mariposa (huevo, oruga, crisálida y adulto).</p><p>• <b>Arácnidos</b>: tienen <b>ocho patas</b> y no tienen antenas. Son las arañas, los escorpiones y los ácaros.</p><p>• <b>Crustáceos</b>: tienen dos pares de antenas, un caparazón duro y suelen vivir en el agua. Respiran por branquias. Son los cangrejos, las gambas o las langostas. La cochinilla de la humedad es un crustáceo terrestre.</p><p>• <b>Miriápodos</b>: tienen el cuerpo alargado, formado por anillos, con <b>muchísimas patas</b>, como el ciempiés y el milpiés.</p>`,
      svg: svg("Artrópodos: insectos con seis patas, arácnidos con ocho, crustáceos y miriápodos", `${tit("Artrópodos")}${insecto(44, 92)}${et(44, 150, "insectos: 6 patas", 80, { size: 10.5, color: COL.sol })}${cj2(96, 36, 154, 40, "Arácnidos", "8 patas: araña", COL.morado)}${cj2(96, 84, 154, 40, "Crustáceos", "caparazón: cangrejo", COL.rojo)}${cj2(96, 132, 154, 40, "Miriápodos", "muchas patas: ciempiés", COL.marron)}`),
      video: vid("WB4h351Oxaw"),
    },
    {
      html: `<h3>Los invertebrados (II): otros grupos</h3><p>Además de los artrópodos, hay otros grupos importantes de invertebrados:</p><p>• <mark>Moluscos</mark>: tienen el cuerpo <b>blando</b>, muchas veces protegido por una <b>concha</b>. Son los <b>caracoles</b> y las babosas (con una concha o sin ella), los <b>bivalvos</b> como el mejillón o la almeja (con dos conchas) y los <b>cefalópodos</b> como el pulpo o el calamar, que tienen tentáculos con ventosas.</p><p>• <mark>Gusanos</mark>: tienen el cuerpo blando, alargado y sin patas. La <b>lombriz de tierra</b> tiene el cuerpo formado por anillos y es muy útil: al cavar túneles airea el suelo y lo abona.</p><p>• <mark>Equinodermos</mark>: viven en el mar y tienen la piel con <b>pinchos</b> o placas duras y forma de estrella. Son las <b>estrellas de mar</b> y los <b>erizos de mar</b>.</p><p>• <mark>Medusas</mark> y <b>pólipos</b> (corales, anémonas): cuerpo blando, en forma de bolsa o sombrilla, con <b>tentáculos</b> que pican para atrapar a sus presas.</p><p>• <mark>Esponjas</mark>: los animales más sencillos. Viven fijas en el fondo del mar y su cuerpo está lleno de agujeros por los que filtran el agua para alimentarse.</p>`,
      svg: svg("Otros invertebrados: moluscos, gusanos, equinodermos, medusas y esponjas", `${tit("Más invertebrados")}<path d="M24 80 a18 18 0 1 1 18 18 h-22 q-8 0 -6 -8z" fill="#fde68a" stroke="#a16207" stroke-width="2"/><path d="M42 80 m-8 0 a8 8 0 1 1 8 8" stroke="#a16207" stroke-width="2" fill="none"/>${et(36, 120, "molusco", 60, { size: 10.5, color: COL.marron })}<path d="M80 84 q10 -10 20 0 q10 10 20 0" stroke="#f472b6" stroke-width="7" fill="none" stroke-linecap="round"/>${et(100, 120, "gusano", 60, { size: 10.5, color: COL.rojo })}<path d="${[...Array(10)].map((_, i) => { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 7 : 18; return `${i ? "L" : "M"}${(170 + Math.cos(a) * r).toFixed(1)} ${(82 + Math.sin(a) * r).toFixed(1)}`; }).join(" ")}z" fill="#fb923c" stroke="#c2410c" stroke-width="1.5"/>${et(166, 120, "equinodermo", 58, { size: 10.5, color: COL.naranja })}<path d="M206 84 q16 -30 32 0z" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1.5"/><path d="M212 84 q-2 14 2 22 M222 84 q2 14 -2 22 M232 84 q-2 14 2 22" stroke="#6d28d9" stroke-width="1.5" fill="none"/>${et(228, 120, "medusa", 48, { size: 10.5, color: COL.morado })}${tx(130, 152, "y las esponjas, las más sencillas", 236, { weight: 700, color: COL.agua })}`),
    },
    {
      html: `<h3>Cómo viven los animales y su protección</h3><p>Repasa cómo realizan los animales sus funciones vitales:</p>${tabla(["Grupo", "Cubierta", "Respiración", "Reproducción", "Temperatura"], [["Mamíferos", "pelo", "pulmones", "vivíparos", "constante"], ["Aves", "plumas", "pulmones", "ovíparas", "constante"], ["Reptiles", "escamas", "pulmones", "ovíparos", "variable"], ["Anfibios", "piel desnuda", "branquias y luego pulmones", "ovíparos", "variable"], ["Peces", "escamas", "branquias", "ovíparos", "variable"]])}<p>Muchos animales están <b>en peligro de extinción</b>: si no se protegen, desaparecerán para siempre. En España, por ejemplo, el <b>lince ibérico</b>, el <b>oso pardo</b>, el <b>urogallo</b> o el <b>quebrantahuesos</b>. Las causas principales son la destrucción de su hábitat, la caza ilegal, la contaminación y la llegada de especies invasoras.</p><p>Para protegerlos se crean <b>espacios naturales protegidos</b>, se prohíbe cazarlos, se crían en centros especiales para luego liberarlos y se informa a la población. Gracias a estos esfuerzos, el lince ibérico ha pasado de menos de 100 ejemplares hace veinticinco años a más de 2.000 hoy.</p>`,
      svg: svg("Lince ibérico: de menos de 100 ejemplares a más de 2.000 gracias a la protección", `${tit("El lince ibérico se recupera")}<path d="M30 146 H230" stroke="var(--line)" stroke-width="2"/><rect x="50" y="138" width="40" height="8" rx="2" fill="var(--red)"/><rect x="160" y="50" width="40" height="96" rx="3" fill="var(--leaf)"/>${et(70, 128, "menos de 100", 90, { size: 11, color: COL.rojo })}${et(180, 42, "más de 2.000", 100, { size: 11, color: COL.verde })}${tx(70, 164, "hace 25 años", 90)}${tx(180, 164, "hoy", 90)}`),
    },
  ],
  figura: {
    titulo: "La clasificación de los animales en ocho ideas",
    svg: rejilla([
      ["Vertebrados", "con columna vertebral", COL.azul],
      ["Mamíferos", "pelo, vivíparos, leche", COL.marron],
      ["Aves", "plumas, pico, huevos", COL.agua],
      ["Reptiles", "escamas, toman el sol", COL.verde],
      ["Anfibios", "piel húmeda, metamorfosis", COL.morado],
      ["Peces", "aletas y branquias", COL.sol],
      ["Artrópodos", "exoesqueleto y patas articuladas", COL.naranja],
      ["Otros invertebrados", "moluscos, gusanos, medusas", COL.rojo],
    ], 4, 86, "Resumen de la clasificación de los animales"),
  },
  video: vgen("uQo9wZS2BC0", "animales vertebrados primaria"),
  ejemplos: [
    { enunciado: "El delfín vive en el mar y tiene aletas. ¿Es un pez? Razona tu respuesta.",
      pasos: ["Fíjate en cómo respira: sale a la superficie a tomar aire, tiene pulmones.", "Sus crías nacen del vientre de la madre y maman leche.", "Tener aletas no basta para ser pez."],
      resultado: "No es un pez: es un mamífero acuático, porque respira por pulmones, es vivíparo y amamanta a sus crías." },
    { enunciado: "Clasifica: araña, mejillón, mariposa, lombriz, cangrejo, estrella de mar.",
      pasos: ["Ninguno tiene columna: todos son invertebrados.", "Con patas articuladas y exoesqueleto (artrópodos): araña (arácnido), mariposa (insecto), cangrejo (crustáceo).", "Mejillón: molusco bivalvo. Lombriz: gusano. Estrella de mar: equinodermo."],
      resultado: "Artrópodos: araña, mariposa y cangrejo. Molusco: mejillón. Gusano: lombriz. Equinodermo: estrella de mar." },
    { enunciado: "Encuentras un animal de cuerpo dividido en tres partes, con seis patas y dos antenas. ¿Qué es?",
      pasos: ["Patas articuladas: es un artrópodo.", "Seis patas y cuerpo en cabeza, tórax y abdomen: es lo propio de los insectos."],
      resultado: "Es un insecto." },
  ],
  errores: [
    "Clasificar a los animales solo por dónde viven: la ballena vive en el mar y es mamífero.",
    "Pensar que todas las aves vuelan: el avestruz y el pingüino no vuelan.",
    "Decir que la araña es un insecto: tiene ocho patas, es un arácnido.",
    "Confundir anfibios y reptiles: los anfibios tienen piel desnuda y húmeda; los reptiles, escamas secas.",
    "Creer que los invertebrados son pocos: son alrededor del 95 % de los animales.",
  ],
  ejercicios: [
    { q: "Escribe tres características comunes a todos los animales.", sol: "Son pluricelulares, heterótrofos y casi todos pueden desplazarse (también tienen sentidos y se reproducen sexualmente)." },
    { q: "¿Qué diferencia hay entre un animal vivíparo y uno ovíparo? Pon un ejemplo de cada uno.", sol: "El vivíparo nace del vientre de la madre (perro); el ovíparo nace de un huevo (gallina)." },
    { q: "¿Por qué el murciélago es un mamífero y no un ave?", sol: "Porque tiene pelo, es vivíparo y sus crías maman leche; no tiene plumas ni pico." },
    { q: "¿Qué significa que un reptil tiene temperatura variable?", sol: "Que su cuerpo está frío o caliente según la temperatura del ambiente; por eso toma el sol para calentarse." },
    { q: "Describe las fases de la metamorfosis de la rana.", sol: "Huevo → renacuajo con cola y branquias → renacuajo con patas → rana adulta sin cola que respira por pulmones." },
    { q: "¿Por qué un pez fuera del agua se ahoga?", sol: "Porque respira por branquias, que solo pueden tomar el oxígeno disuelto en el agua." },
    { q: "Escribe las características de los insectos.", sol: "Cuerpo en cabeza, tórax y abdomen; seis patas; dos antenas; muchos tienen alas; exoesqueleto." },
    { q: "Nombra los cuatro grupos de artrópodos con un ejemplo.", sol: "Insectos (hormiga), arácnidos (araña), crustáceos (cangrejo) y miriápodos (ciempiés)." },
    { q: "¿Qué tienen en común el caracol, el mejillón y el pulpo?", sol: "Son moluscos: tienen el cuerpo blando (a veces protegido por una concha)." },
    { q: "Escribe dos animales en peligro de extinción en España y dos causas.", sol: "Por ejemplo, el lince ibérico y el oso pardo. Causas: destrucción del hábitat y caza ilegal (también contaminación y especies invasoras)." },
  ],
  quiz: [
    { q: "Los animales con columna vertebral son…", o: ["invertebrados", "vertebrados", "artrópodos"], a: 1, e: "Vertebrados." },
    { q: "La ballena es…", o: ["un mamífero", "un pez", "un anfibio"], a: 0, e: "Respira por pulmones y amamanta." },
    { q: "Las aves tienen el cuerpo cubierto de…", o: ["escamas", "pelo", "plumas"], a: 2, e: "Plumas." },
    { q: "La lagartija toma el sol porque…", o: ["tiene temperatura variable", "tiene plumas", "es vivípara"], a: 0, e: "Necesita calentarse." },
    { q: "El renacuajo respira por…", o: ["pulmones", "branquias", "la cola"], a: 1, e: "Por branquias." },
    { q: "El tiburón es un pez…", o: ["óseo", "anfibio", "cartilaginoso"], a: 2, e: "Su esqueleto es de cartílago." },
    { q: "Un animal con ocho patas es un…", o: ["insecto", "arácnido", "miriápodo"], a: 1, e: "Arácnido." },
    { q: "El mejillón es un…", o: ["molusco", "crustáceo", "pez"], a: 0, e: "Molusco bivalvo." },
    { q: "La estrella de mar es un…", o: ["pez", "molusco", "equinodermo"], a: 2, e: "Equinodermo." },
    { q: "Los invertebrados son, aproximadamente,…", o: ["el 95 % de los animales", "la mitad", "muy pocos"], a: 0, e: "La gran mayoría." },
  ],
  examen: [
    { q: "Los animales que comen de todo son…", o: ["herbívoros", "omnívoros", "carnívoros"], a: 1, e: "Omnívoros." },
    { q: "La transformación de la rana se llama…", o: ["muda", "hibernación", "metamorfosis"], a: 2, e: "Metamorfosis." },
    { q: "El cuerpo de los insectos se divide en…", o: ["cabeza, tórax y abdomen", "cabeza y cola", "anillos iguales"], a: 0, e: "Tres partes." },
    { q: "El lince ibérico se ha recuperado gracias a…", o: ["la caza", "la protección", "la contaminación"], a: 1, e: "A los planes de protección." },
  ],
  feynman: ["Cómo se diferencian los cinco grupos de vertebrados", "Qué es un artrópodo y cuáles son sus cuatro grupos", "Por qué un animal acuático no es siempre un pez"],
  mapa: mapa("ANIMALES", "var(--pri)", [
    ["Vertebrados", "mamíferos · aves · reptiles", COL.azul],
    ["Más vertebrados", "anfibios · peces", COL.agua],
    ["Artrópodos", "insectos · arácnidos · crustáceos", COL.naranja],
    ["Otros invertebrados", "moluscos · gusanos · medusas", COL.verde],
  ], 250),
  tarjetas: [
    ["Vertebrado", "Animal con columna vertebral."],
    ["Vivíparo", "Animal que nace del vientre de la madre."],
    ["Ovíparo", "Animal que nace de un huevo."],
    ["Metamorfosis", "Gran cambio de forma durante el crecimiento, como en la rana."],
    ["Branquias", "Órganos para respirar el oxígeno del agua."],
    ["Artrópodo", "Invertebrado con exoesqueleto y patas articuladas."],
    ["Molusco", "Invertebrado de cuerpo blando, a menudo con concha."],
    ["Extinción", "Desaparición total de una especie."],
  ],
  familias: ["En el mercado o la pescadería, clasificad lo que veis: peces, moluscos, crustáceos.", "Buscad bichos en un parque con una lupa y contad sus patas para clasificarlos.", "Ved un documental de naturaleza y anotad el grupo de cada animal que aparezca.", "Informaos sobre un animal en peligro de extinción y cómo ayudar a protegerlo."],
  profesores: PROF("Ciencias de la Naturaleza: características de los animales; vertebrados (mamíferos, aves, reptiles, anfibios y peces); invertebrados (artrópodos, moluscos, gusanos, equinodermos, cnidarios y poríferos); especies amenazadas", ["Clave dicotómica para clasificar fichas de animales por parejas.", "Terrario temporal de caracoles o de bichos bola para observar y devolver a su hábitat.", "Investigación por grupos sobre especies amenazadas de la comunidad autónoma."]),
  fuentes: [RD, wiki("Vertebrata", "Vertebrata"), wiki("Invertebrado", "Invertebrado"), wiki("Lynx pardinus", "Lynx_pardinus")],
  revisado: REV,
};
