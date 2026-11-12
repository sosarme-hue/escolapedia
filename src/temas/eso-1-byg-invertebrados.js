// Biología y Geología 1º ESO: los animales invertebrados. Dibujos propios en SVG.
const { mapa, BG, t, fl, tabla, RD, wiki, C, REV, cj, rejilla, et, COL } = require("./_eso1a");

module.exports = {
  materia: "Biología y Geología",
  curso: C,
  titulo: "Los animales invertebrados",
  minutos: 60,
  objetivos: ["Conocer las características del reino Animales y la diferencia entre vertebrados e invertebrados", "Describir los principales grupos de invertebrados: poríferos, cnidarios, gusanos, moluscos, artrópodos y equinodermos", "Clasificar los artrópodos en insectos, arácnidos, crustáceos y miriápodos", "Valorar la importancia de los invertebrados para los ecosistemas y las personas"],
  claves: ["invertebrado", "simetría", "poríferos", "cnidarios", "anélidos", "moluscos", "artrópodos", "exoesqueleto", "muda", "insectos", "arácnidos", "crustáceos", "miriápodos", "equinodermos", "metamorfosis"],
  pregunta: {
    texto: "Si sumáramos todos los animales del planeta, ¿qué porcentaje de las especies crees que tiene columna vertebral, como nosotros?",
    respuesta: "¡Muy pocas! Alrededor del <b>95 %</b> de las especies animales conocidas son <b>invertebrados</b>: no tienen columna vertebral ni esqueleto interno de hueso. Solo los insectos ya superan el millón de especies descritas. Los vertebrados (peces, anfibios, reptiles, aves y mamíferos) son apenas un 5 %, aunque sean los animales que mejor conocemos.",
  },
  bloques: [
    {
      html: `<h3>El reino Animales</h3><p>Los <mark>animales</mark> son seres vivos <b>eucariotas</b>, <b>pluricelulares</b> y con <b>tejidos</b> (salvo las esponjas). Sus células <b>no tienen pared celular</b> ni cloroplastos. Su nutrición es <b>heterótrofa</b>: se alimentan de otros seres vivos o de sus restos, que digieren en su interior. Casi todos pueden <b>desplazarse</b> en algún momento de su vida y tienen un <b>sistema nervioso</b> y órganos de los sentidos para relacionarse con el medio. La mayoría se reproduce de forma sexual. Una característica importante para clasificarlos es su <b>simetría</b>. Los animales con <b>simetría radial</b>, como las medusas o las estrellas de mar, pueden dividirse en partes iguales por varios planos que pasan por un eje central, como una tarta. Los de <b>simetría bilateral</b>, como un escarabajo o una persona, solo pueden dividirse en dos mitades iguales (derecha e izquierda) por un plano; suelen tener una cabeza con los órganos de los sentidos y moverse hacia delante. Las esponjas son <b>asimétricas</b>.</p>`,
    },
    {
      html: `<h3>Vertebrados e invertebrados</h3><p>Tradicionalmente, los animales se dividen en dos grandes grupos. Los <mark>vertebrados</mark> tienen un <b>esqueleto interno</b> de hueso o cartílago con una <b>columna vertebral</b>, que sostiene el cuerpo y protege la médula espinal. Los <mark>invertebrados</mark> <b>no tienen columna vertebral</b>. Es un grupo enorme y muy variado: algunos tienen el cuerpo blando, como las lombrices o los pulpos; otros están protegidos por una <b>concha</b>, como los caracoles y los mejillones; y otros tienen un esqueleto externo duro, el <b>exoesqueleto</b>, como los insectos y los cangrejos. Viven en todos los ambientes: el mar (donde surgieron y donde hay más variedad), el agua dulce, la tierra y el aire, y muchos son <b>parásitos</b> de otros animales. Los principales grupos de invertebrados, ordenados de más sencillo a más complejo, son: poríferos, cnidarios, gusanos (platelmintos, nematodos y anélidos), moluscos, artrópodos y equinodermos.</p>`,
    },
    {
      html: `<h3>Poríferos y cnidarios</h3><p>Los <mark>poríferos</mark> o <b>esponjas</b> son los animales más sencillos. Viven fijos al fondo, casi siempre en el mar, y <b>no tienen tejidos ni órganos</b> verdaderos. Su cuerpo tiene forma de saco o de tubo y está lleno de <b>poros</b> por los que entra el agua; unas células especiales con flagelos mueven el agua y atrapan las partículas de alimento que lleva; el agua sale por un orificio superior llamado ósculo. Antiguamente se usaba su esqueleto blando como esponja de baño. Los <mark>cnidarios</mark> son animales acuáticos con <b>simetría radial</b> y una sola abertura que hace de boca y de ano, rodeada de <b>tentáculos</b>. Sus tentáculos tienen unas células urticantes, los <b>cnidocitos</b>, que lanzan un filamento con veneno para paralizar a sus presas: por eso «pican» las medusas. Pueden tener forma de <b>pólipo</b>, con forma de saco fijo al fondo y los tentáculos hacia arriba, como las anémonas y los corales; o de <b>medusa</b>, con forma de sombrilla que nada libremente. Los <b>corales</b> viven en colonias y fabrican un esqueleto calizo que forma los arrecifes, ecosistemas de gran biodiversidad.</p>`,
    },
    {
      html: `<h3>Los gusanos</h3><p>Llamamos <b>gusanos</b> a animales de cuerpo <b>blando, alargado y sin patas</b>, con simetría bilateral. Pertenecen a tres grupos distintos. Los <mark>platelmintos</mark> son gusanos <b>planos</b>, como cintas: algunos viven libres en el agua, como las planarias, y otros son parásitos, como la <b>tenia</b> o «solitaria», que vive en el intestino y puede medir varios metros. Los <mark>nematodos</mark> son gusanos <b>cilíndricos</b> y lisos, la mayoría muy pequeños, que viven en el suelo, el agua o como parásitos; por ejemplo, la lombriz intestinal de los niños o el anisakis, que puede estar en el pescado crudo y que se elimina congelándolo o cocinándolo bien. Los <mark>anélidos</mark> son gusanos con el cuerpo dividido en <b>anillos</b> o segmentos; tienen ya aparatos más complejos, como un aparato circulatorio. A este grupo pertenecen la <b>lombriz de tierra</b>, que excava galerías y mezcla y airea el suelo, haciéndolo más fértil; la <b>sanguijuela</b>, que chupa sangre; y muchos gusanos marinos que se usan como cebo de pesca.</p>`,
    },
    {
      html: `<h3>Los moluscos</h3><p>Los <mark>moluscos</mark> tienen el <b>cuerpo blando</b>, sin segmentos, que suele estar protegido por una <b>concha</b> de caliza fabricada por una capa de piel llamada <b>manto</b>. Su cuerpo tiene tres partes: la <b>cabeza</b>, con la boca y los órganos de los sentidos; la <b>masa visceral</b>, que contiene los órganos internos; y el <b>pie</b>, musculoso, que usan para desplazarse. Muchos tienen en la boca una lengua raspadora con dientecillos, la rádula. Hay tres grupos principales. Los <b>gasterópodos</b> tienen una concha de una pieza, enrollada en espiral, o no tienen concha; se arrastran sobre su pie, como el <b>caracol</b>, la babosa o la lapa. Los <b>bivalvos</b> tienen una concha de <b>dos valvas</b> que se abren y se cierran; no tienen cabeza y se alimentan filtrando el agua, como el <b>mejillón</b>, la almeja, la ostra o el berberecho. Los <b>cefalópodos</b> tienen la cabeza muy desarrollada, con grandes ojos, y el pie transformado en <b>tentáculos</b> con ventosas; la concha es interna o no existe. Son el <b>pulpo</b> (ocho tentáculos), el calamar y la sepia (diez); son muy inteligentes y nadan expulsando agua a presión.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres moluscos: un caracol gasterópodo con concha en espiral, un mejillón bivalvo con dos valvas y un pulpo cefalópodo con tentáculos">${BG}
        <path d="M14 104 q 30 -8 66 0 q 6 6 -2 8 h -60 q -8 -2 -4 -8 Z" fill="#d6a76b"/><circle cx="52" cy="80" r="22" fill="#f59e0b" stroke="#92400e" stroke-width="2"/><path d="M52 80 m -12 0 a 12 12 0 1 1 12 12 a 6 6 0 1 1 -6 -6" fill="none" stroke="#92400e" stroke-width="2"/><path d="M20 102 l -6 -14 M26 102 l -2 -14" stroke="#92400e" stroke-width="2"/>
        ${t(48, 136, "gasterópodo", { size: 10.5 })}${t(48, 150, "caracol", { size: 9.5, weight: 400, color: "var(--muted)" })}
        <path d="M108 104 Q 116 60 140 56 Q 140 84 132 108 Z" fill="#1e3a8a"/><path d="M140 56 Q 164 60 170 104 Q 150 112 132 108 Z" fill="#334155"/>
        ${t(140, 136, "bivalvo", { size: 10.5 })}${t(140, 150, "mejillón", { size: 9.5, weight: 400, color: "var(--muted)" })}
        <ellipse cx="216" cy="62" rx="20" ry="24" fill="#f87171"/><circle cx="208" cy="64" r="3" fill="#fff"/><circle cx="224" cy="64" r="3" fill="#fff"/>
        ${[-3, -2, -1, 0, 1, 2, 3].map((k) => `<path d="M${216 + k * 4} 84 q ${k * 8} 12 ${k * 6 + 2} 26" fill="none" stroke="#f87171" stroke-width="4" stroke-linecap="round"/>`).join("")}
        ${t(216, 136, "cefalópodo", { size: 10.5 })}${t(216, 150, "pulpo", { size: 9.5, weight: 400, color: "var(--muted)" })}</svg>`,
      video: { id: "_sDgRN2eHKs", titulo: "Los Moluscos | Videos Educativos para Niños", canal: "Happy Learning Español", vistas: 1759982 },
    },
    {
      html: `<h3>Los artrópodos</h3><p>Los <mark>artrópodos</mark> son el grupo de animales <b>más numeroso y diverso</b> del planeta. Su nombre significa «patas articuladas»: tienen <b>apéndices articulados</b> (patas, antenas, piezas de la boca) formados por piezas unidas por articulaciones, lo que les permite moverse con precisión. Su cuerpo está dividido en <b>segmentos</b> agrupados en regiones (cabeza, tórax y abdomen, o cefalotórax y abdomen) y está cubierto por un <mark>exoesqueleto</mark>, un esqueleto externo rígido de una sustancia llamada <b>quitina</b>, que los protege y evita que pierdan agua. Como el exoesqueleto no crece, para crecer tienen que cambiarlo periódicamente: se desprenden del viejo y fabrican uno nuevo más grande. Este proceso se llama <mark>muda</mark>, y mientras el nuevo exoesqueleto se endurece, el animal es muy vulnerable. Viven en todos los ambientes, y se dividen en cuatro grupos: <b>insectos</b>, <b>arácnidos</b>, <b>crustáceos</b> y <b>miriápodos</b>.</p>`,
      video: { id: "3yUarVVTb80", titulo: "Los Artrópodos | Videos Educativos para Niños", canal: "Happy Learning Español", vistas: 1753239 },
    },
    {
      html: `<h3>Los cuatro grupos de artrópodos</h3><p>Los <mark>insectos</mark> tienen el cuerpo dividido en <b>cabeza, tórax y abdomen</b>, <b>seis patas</b> (tres pares, en el tórax), <b>dos antenas</b> y, en la mayoría, <b>alas</b> (uno o dos pares). Son los únicos invertebrados que vuelan. Muchos sufren <b>metamorfosis</b>: cambian de forma durante su desarrollo; en la metamorfosis completa pasan por huevo, larva (oruga), pupa (crisálida) y adulto, como la mariposa. Ejemplos: abeja, mosca, hormiga, escarabajo, saltamontes. Los <mark>arácnidos</mark> tienen el cuerpo dividido en <b>cefalotórax y abdomen</b>, <b>ocho patas</b>, <b>no tienen antenas</b> y tienen unos apéndices junto a la boca, los quelíceros, a menudo con veneno. Son las arañas (que fabrican seda en el abdomen), los escorpiones, los ácaros y las garrapatas. Los <mark>crustáceos</mark> tienen <b>cefalotórax y abdomen</b>, <b>dos pares de antenas</b> y normalmente <b>diez patas</b>; respiran por branquias y casi todos son acuáticos, como el cangrejo, la gamba o el percebe; la cochinilla de la humedad es un crustáceo terrestre. Los <mark>miriápodos</mark> tienen el cuerpo alargado con <b>cabeza y tronco</b> formado por muchos segmentos, con <b>muchas patas</b>, como el ciempiés y el milpiés.</p>${tabla(["Grupo", "Partes del cuerpo", "Patas", "Antenas", "Ejemplos"], [["Insectos", "cabeza, tórax, abdomen", "6", "2", "abeja, mosca, mariposa"], ["Arácnidos", "cefalotórax, abdomen", "8", "0", "araña, escorpión, garrapata"], ["Crustáceos", "cefalotórax, abdomen", "10 (casi siempre)", "4", "cangrejo, gamba, cochinilla"], ["Miriápodos", "cabeza, tronco", "muchas", "2", "ciempiés, milpiés"]])}`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Un insecto con cabeza, tórax, abdomen, seis patas, dos antenas y alas, junto a una araña con cefalotórax, abdomen y ocho patas sin antenas">${BG}
        <circle cx="40" cy="80" r="9" fill="#475569"/><ellipse cx="62" cy="80" rx="13" ry="9" fill="#64748b"/><ellipse cx="94" cy="80" rx="20" ry="11" fill="#94a3b8"/>
        <path d="M34 72 q -8 -16 -18 -18 M36 72 q -2 -18 -10 -24" fill="none" stroke="#475569" stroke-width="1.8"/>
        ${[-1, 0, 1].map((k) => `<path d="M${62 + k * 8} 88 l ${k * 6 - 4} 18 M${62 + k * 8} 72 l ${k * 6 - 4} -18" stroke="#475569" stroke-width="1.8"/>`).join("")}
        <ellipse cx="74" cy="58" rx="22" ry="8" fill="#bae6fd" fill-opacity=".8" stroke="#0369a1" transform="rotate(-20 74 58)"/>
        ${t(62, 136, "insecto", { size: 11, color: COL.azul })}${t(62, 152, "3 partes · 6 patas", { size: 9.5, weight: 400 })}
        <ellipse cx="186" cy="80" rx="13" ry="11" fill="#7c2d12"/><ellipse cx="214" cy="82" rx="18" ry="15" fill="#9a3412"/>
        ${[-1.5, -0.5, 0.5, 1.5].map((k) => `<path d="M${186 + k * 5} 72 q ${k * 10 - 4} -20 ${k * 14 - 14} -16 M${186 + k * 5} 88 q ${k * 10 - 4} 20 ${k * 14 - 14} 16" fill="none" stroke="#7c2d12" stroke-width="2"/>`).join("")}
        ${t(196, 136, "arácnido", { size: 11, color: COL.marron })}${t(196, 152, "2 partes · 8 patas", { size: 9.5, weight: 400 })}</svg>`,
    },
    {
      html: `<h3>Los equinodermos</h3><p>Los <mark>equinodermos</mark> son animales exclusivamente <b>marinos</b>. Su nombre significa «piel con espinas», porque tienen un <b>esqueleto interno</b> formado por placas calizas, justo debajo de la piel, del que a menudo salen <b>espinas</b>. De adultos tienen <b>simetría radial</b>, casi siempre de <b>cinco partes</b>. Tienen un sistema de tubos llenos de agua, el <b>sistema ambulacral</b>, que termina en cientos de <b>pies ambulacrales</b>, pequeños tubos con ventosa que usan para desplazarse lentamente, sujetarse a las rocas y atrapar alimento. Los más conocidos son las <b>estrellas de mar</b>, que tienen cinco brazos y una gran capacidad de <b>regeneración</b>: pueden volver a formar un brazo perdido, e incluso un animal entero a partir de un brazo con parte del disco central; los <b>erizos de mar</b>, con forma de esfera y cubiertos de largas espinas; y las <b>holoturias</b> o pepinos de mar, alargados y blandos. Curiosamente, aunque parezcan muy distintos, son los invertebrados más emparentados con los vertebrados.</p>`,
    },
    {
      html: `<h3>Importancia de los invertebrados</h3><p>Los invertebrados son imprescindibles para el funcionamiento de los ecosistemas y para las personas. Los insectos <b>polinizadores</b>, como las abejas, las mariposas o los abejorros, permiten que se formen frutos y semillas; sin ellos desaparecerían muchas plantas silvestres y cultivos como las manzanas o los tomates. Muchos invertebrados son <b>descomponedores</b> o ayudan a reciclar la materia, como las lombrices, los escarabajos peloteros o las cochinillas. Son <b>alimento</b> de muchísimos animales, y también de las personas: mariscos como mejillones, gambas o calamares. Nos dan productos como la <b>miel</b> y la cera de las abejas, la <b>seda</b> de los gusanos de seda o las perlas de las ostras. Pero algunos también causan problemas: transmiten enfermedades, como algunos <b>mosquitos</b> (dengue, malaria) o las garrapatas; son <b>plagas</b> de cultivos, como la langosta o el pulgón; o son parásitos, como los piojos o la tenia. Hoy muchas poblaciones de insectos están disminuyendo por los pesticidas, la pérdida de hábitats y el cambio climático, lo que preocupa mucho a los científicos.</p>`,
    },
  ],
  figura: {
    titulo: "Los grupos de invertebrados",
    svg: rejilla([
      ["Poríferos", "esponjas con poros", COL.sol],
      ["Cnidarios", "medusas, corales: pican", COL.agua],
      ["Gusanos", "planos, cilíndricos, anillados", COL.rojo],
      ["Moluscos", "cuerpo blando y concha", COL.naranja],
      ["Insectos", "6 patas, 2 antenas, alas", COL.verde],
      ["Arácnidos", "8 patas, sin antenas", COL.marron],
      ["Crustáceos", "4 antenas, branquias", COL.azul],
      ["Equinodermos", "marinos, piel con espinas", COL.morado],
    ], 4, 86, "Resumen: poríferos, cnidarios, gusanos, moluscos, insectos, arácnidos, crustáceos y equinodermos"),
  },
  video: { id: "ySnN5InGGlk", titulo: "ANIMALES INVERTEBRADOS - Artrópodos, moluscos, gusanos, celentéreos, equinodermos", canal: "Smile and Learn - Español", vistas: 11846425, megusta: 0, busqueda: "animales invertebrados clasificación" },
  ejemplos: [
    { enunciado: "Encuentras un animal con ocho patas, sin antenas y con el cuerpo dividido en dos partes. ¿A qué grupo pertenece?",
      pasos: ["Tiene patas articuladas: es un artrópodo.", "Ocho patas, sin antenas y dos regiones (cefalotórax y abdomen): arácnido."],
      resultado: "Es un arácnido (por ejemplo, una araña)." },
    { enunciado: "Clasifica: lombriz de tierra, sepia, medusa, erizo de mar.",
      pasos: ["Lombriz: gusano con anillos → anélido.", "Sepia: tentáculos y cabeza desarrollada → molusco cefalópodo.", "Medusa: tentáculos con células urticantes y simetría radial → cnidario.", "Erizo: marino con espinas y pies ambulacrales → equinodermo."],
      resultado: "Anélido, molusco, cnidario y equinodermo." },
    { enunciado: "Un compañero dice que la cochinilla de la humedad es un insecto. ¿Tiene razón?",
      pasos: ["Los insectos tienen 6 patas y 2 antenas.", "La cochinilla tiene 14 patas y respira por unas branquias modificadas.", "Esas características son de los crustáceos."],
      resultado: "No: la cochinilla es un crustáceo terrestre." },
  ],
  errores: [
    "Decir que las arañas son insectos: tienen ocho patas y no tienen antenas.",
    "Pensar que todos los gusanos pertenecen al mismo grupo.",
    "Creer que los invertebrados no tienen ningún esqueleto: muchos tienen exoesqueleto o concha.",
    "Confundir la simetría radial (estrella, medusa) con la bilateral.",
    "Pensar que todos los insectos son plagas: muchos son polinizadores o descomponedores.",
  ],
  ejercicios: [
    { q: "Escribe tres características del reino Animales.", sol: "Eucariotas, pluricelulares con tejidos, sin pared celular y heterótrofos (la mayoría se desplazan)." },
    { q: "¿Qué diferencia a un vertebrado de un invertebrado?", sol: "El vertebrado tiene esqueleto interno con columna vertebral; el invertebrado no tiene columna vertebral." },
    { q: "Explica la diferencia entre simetría radial y bilateral con un ejemplo de cada una.", sol: "Radial: se puede dividir por varios planos en partes iguales (medusa). Bilateral: solo en dos mitades iguales (escarabajo)." },
    { q: "¿Por qué «pican» las medusas?", sol: "Porque tienen cnidocitos, células urticantes que lanzan un filamento con veneno." },
    { q: "Nombra los tres grupos de gusanos y un ejemplo de cada uno.", sol: "Platelmintos (tenia), nematodos (anisakis) y anélidos (lombriz de tierra)." },
    { q: "¿Qué tres partes tiene el cuerpo de un molusco? Nombra los tres grupos principales.", sol: "Cabeza, masa visceral y pie; gasterópodos, bivalvos y cefalópodos." },
    { q: "¿Qué es el exoesqueleto y por qué los artrópodos tienen que mudar?", sol: "Un esqueleto externo de quitina; como no crece, lo cambian por otro más grande para crecer." },
    { q: "Escribe las fases de la metamorfosis completa de una mariposa.", sol: "Huevo, larva (oruga), pupa (crisálida) y adulto." },
    { q: "¿Qué son los pies ambulacrales y qué animales los tienen?", sol: "Pequeños tubos con ventosa para moverse y sujetarse; los equinodermos." },
    { q: "Escribe dos invertebrados beneficiosos y dos perjudiciales, explicando por qué.", sol: "Abeja (poliniza y da miel) y lombriz (fertiliza el suelo); mosquito (transmite enfermedades) y pulgón (plaga de cultivos)." },
  ],
  quiz: [
    { q: "Los invertebrados son aproximadamente el…", o: ["5 % de las especies animales", "50 %", "95 %"], a: 2, e: "Alrededor del 95 %." },
    { q: "Los animales más sencillos son los…", o: ["poríferos", "moluscos", "artrópodos"], a: 0, e: "Las esponjas." },
    { q: "Los corales son…", o: ["cnidarios", "moluscos", "plantas"], a: 0, e: "Cnidarios." },
    { q: "La lombriz de tierra es un…", o: ["anélido", "nematodo", "insecto"], a: 0, e: "Anélido." },
    { q: "El mejillón es un molusco…", o: ["bivalvo", "gasterópodo", "cefalópodo"], a: 0, e: "Bivalvo." },
    { q: "El pulpo tiene…", o: ["8 tentáculos", "10 tentáculos", "6 patas"], a: 0, e: "Ocho." },
    { q: "Los insectos tienen…", o: ["6 patas", "8 patas", "10 patas"], a: 0, e: "Seis patas." },
    { q: "Las arañas tienen…", o: ["2 antenas", "ninguna antena", "4 antenas"], a: 1, e: "No tienen antenas." },
    { q: "El cangrejo es un…", o: ["crustáceo", "arácnido", "miriápodo"], a: 0, e: "Crustáceo." },
    { q: "La estrella de mar es un…", o: ["equinodermo", "pez", "cnidario"], a: 0, e: "Equinodermo." },
  ],
  examen: [
    { q: "El cambio del exoesqueleto se llama…", o: ["muda", "metamorfosis", "regeneración"], a: 0, e: "Muda." },
    { q: "El ciempiés es un…", o: ["miriápodo", "insecto", "anélido"], a: 0, e: "Miriápodo." },
    { q: "El anisakis se elimina del pescado…", o: ["congelándolo o cocinándolo bien", "lavándolo", "con sal"], a: 0, e: "Congelación o buena cocción." },
  ],
  feynman: ["Qué diferencia a un vertebrado de un invertebrado", "Cómo distinguir un insecto, un arácnido y un crustáceo", "Por qué los invertebrados son importantes para nosotros"],
  mapa: mapa("INVERTEBRADOS", "var(--eso)", [
    ["Sencillos", "esponjas · cnidarios", COL.agua],
    ["Gusanos y moluscos", "anélidos · caracol · pulpo", COL.naranja],
    ["Artrópodos", "insectos · arácnidos · crustáceos", COL.verde],
    ["Equinodermos", "estrella · erizo de mar", COL.morado],
  ], 300),
  tarjetas: [
    ["Invertebrado", "Animal sin columna vertebral: el 95 % de las especies."],
    ["Simetría radial", "Partes iguales alrededor de un eje: medusa, estrella."],
    ["Cnidarios", "Acuáticos con tentáculos urticantes: medusas, corales."],
    ["Anélidos", "Gusanos con el cuerpo en anillos: lombriz."],
    ["Moluscos", "Cuerpo blando, manto y a menudo concha."],
    ["Exoesqueleto", "Esqueleto externo de quitina de los artrópodos."],
    ["Insectos", "Cabeza, tórax y abdomen; 6 patas y 2 antenas."],
    ["Metamorfosis", "Cambio de forma: huevo, larva, pupa y adulto."],
  ],
  familias: ["Buscad en el jardín o el parque bichos bajo las piedras y contad sus patas para clasificarlos (y devolvedlos a su sitio).", "En la pescadería, identificad juntos qué mariscos son moluscos y cuáles crustáceos.", "Construid un hotel de insectos con cañas y piñas para atraer polinizadores."],
  profesores: {
    saberes: "Animales invertebrados: características del reino Animales, simetría, poríferos, cnidarios, platelmintos, nematodos, anélidos, moluscos, artrópodos y equinodermos; importancia ecológica, económica y sanitaria (RD 217/2022, Biología y Geología, bloque Seres vivos).",
    ideas: ["Observación de cochinillas y lombrices en un terrario y devolución al medio.", "Clave dicotómica de invertebrados del entorno escolar.", "Seguimiento de la metamorfosis de gusanos de seda en clase."],
  },
  fuentes: [RD, wiki("Invertebrado", "Invertebrado"), wiki("Arthropoda", "Arthropoda"), { t: "Museo Nacional de Ciencias Naturales (CSIC)", url: "https://www.mncn.csic.es/" }],
  revisado: REV,
};
