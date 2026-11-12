// Ciencias de la Naturaleza 6º de Primaria: la clasificación de los seres vivos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, arbol, pez, pajaro } = require("./_pri6b");

const seta = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-4 0 V-16 h8 V0z" fill="#f5f0e6" stroke="var(--ink)" stroke-width="1"/><path d="M-18 -14 q18 -26 36 0z" fill="var(--red)"/><circle cx="-6" cy="-20" r="2.5" fill="#fff"/><circle cx="6" cy="-18" r="2" fill="#fff"/></g>`;
const bacteria = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-14" y="-6" width="28" height="12" rx="6" fill="#a7f3d0" stroke="#059669" stroke-width="1.5"/><path d="M14 0 q6 -4 10 2" stroke="#059669" stroke-width="1.5" fill="none"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "La clasificación de los seres vivos",
  minutos: 50,
  objetivos: ["Explicar por qué y cómo se clasifican los seres vivos", "Conocer los cinco reinos y sus características", "Diferenciar vertebrados e invertebrados y sus grupos", "Usar claves sencillas para identificar seres vivos"],
  claves: ["clasificar", "especie", "reino", "moneras", "protoctistas", "hongos", "plantas", "animales", "vertebrados", "invertebrados", "nombre científico", "clave dicotómica"],
  pregunta: {
    texto: "La ballena vive en el mar y nada como un pez. ¿Por qué los científicos dicen que es un mamífero y no un pez?",
    respuesta: "Porque para <mark>clasificar</mark> no basta con ver dónde vive un animal: hay que fijarse en cómo es por dentro y cómo vive. La ballena <b>respira con pulmones</b> (sale a la superficie a tomar aire), es de <b>sangre caliente</b>, sus crías nacen del vientre de la madre y <b>maman leche</b>. Todo eso son rasgos de los <b>mamíferos</b>, no de los peces.",
  },
  bloques: [
    {
      html: `<h3>¿Por qué clasificamos?</h3><p>En la Tierra se conocen cerca de <b>dos millones</b> de especies distintas, y cada año se descubren miles más. Para poder estudiarlas, los científicos las <mark>clasifican</mark>: las ordenan en grupos según sus <b>parecidos</b>. Es como ordenar una biblioteca por temas para encontrar un libro rápidamente.</p><p>La unidad básica es la <mark>especie</mark>: un grupo de seres vivos muy parecidos que pueden reproducirse entre sí y tener descendientes fértiles. Por ejemplo, todos los perros son de la misma especie, aunque haya razas muy distintas.</p><p>Las especies parecidas se agrupan en grupos cada vez más grandes, hasta llegar al más grande de todos: el <b>reino</b>. Para clasificar nos fijamos en características como: si tienen una o muchas células, si sus células tienen núcleo, cómo consiguen el alimento (si lo fabrican o lo toman de otros seres) y si se pueden desplazar.</p>`,
      svg: svg("Muchos seres vivos distintos se ordenan en grupos como libros en estanterías", `${tit("Ordenar para entender")}${[["plantas", COL.verde], ["animales", COL.rojo], ["hongos", COL.marron], ["…", COL.gris]].map(([s, c], i) => `<rect x="${20 + i * 58}" y="54" width="50" height="90" rx="6" fill="${c}" fill-opacity=".14" stroke="${c}" stroke-width="2"/>${[0, 1, 2].map((j) => `<rect x="${26 + i * 58 + j * 13}" y="${76 + (j % 2) * 4}" width="10" height="${56 - (j % 2) * 4}" rx="2" fill="${c}" fill-opacity=".7"/>`).join("")}${et(45 + i * 58, 70, s, 50, { size: 10, color: c })}`).join("")}${tx(130, 166, "unos 2 millones de especies conocidas", 230, { weight: 700 })}`),
    },
    {
      html: `<h3>El nombre científico</h3><p>Un mismo ser vivo puede tener nombres distintos según el idioma o la región. Por ejemplo, la <i>mariquita</i> se llama también <i>catalina</i>, <i>sanantonio</i> o <i>marieta</i>. Para que los científicos de todo el mundo se entiendan, cada especie tiene un <mark>nombre científico</mark> único.</p><p>Este sistema lo inventó en el siglo XVIII el sueco <b>Carl Linneo</b>. El nombre científico tiene <b>dos palabras en latín</b>: la primera, con mayúscula, es el <b>género</b> (el grupo de especies muy parecidas); la segunda, en minúscula, indica la especie. Se escribe en <i>cursiva</i>.</p><p>Algunos ejemplos: el ser humano es <i>Homo sapiens</i>; el lobo, <i>Canis lupus</i>; el perro, <i>Canis familiaris</i> (por eso se parecen tanto: son del mismo género); el lince ibérico, <i>Lynx pardinus</i>; y la encina, <i>Quercus ilex</i>.</p><p>Desde la especie hasta el reino, los grupos son: especie, género, familia, orden, clase, filo y reino.</p>`,
      svg: svg("Nombre científico del lobo: género Canis y especie lupus, y la escalera de grupos hasta el reino", `${tit("Canis lupus")}${cj2(14, 36, 108, 44, "Canis", "género (mayúscula)", COL.azul)}${cj2(138, 36, 108, 44, "lupus", "especie (minúscula)", COL.verde)}${flujo([["especie", COL.verde], ["género", COL.azul], ["familia", COL.morado], ["reino", COL.rojo]], 112, 30)}${tx(130, 162, "…y en medio: orden, clase y filo", 220)}`),
    },
    {
      html: `<h3>Los cinco reinos</h3><p>Una clasificación muy usada en el colegio divide a los seres vivos en <mark>cinco reinos</mark>:</p>${tabla(["Reino", "Células", "Alimentación", "Ejemplos"], [["Moneras", "una, sin núcleo", "variada", "bacterias"], ["Protoctistas", "una o muchas, con núcleo", "fabrican su alimento o lo toman", "algas, amebas, paramecios"], ["Hongos", "una o muchas, con núcleo", "toman materia de otros seres", "setas, mohos, levaduras"], ["Plantas", "muchas, con núcleo y cloroplastos", "fabrican su alimento (fotosíntesis)", "musgos, helechos, pinos, rosales"], ["Animales", "muchas, con núcleo", "comen otros seres vivos", "esponjas, insectos, peces, mamíferos"]])}<p>Los seres que <b>fabrican su propio alimento</b> se llaman <b>autótrofos</b> (como las plantas y las algas). Los que lo <b>toman de otros seres</b> se llaman <b>heterótrofos</b> (como los animales y los hongos).</p><p>Los científicos actuales usan clasificaciones más detalladas, pero la de los cinco reinos es una buena forma de empezar.</p>`,
      svg: svg("Los cinco reinos: moneras, protoctistas, hongos, plantas y animales", `${tit("Cinco reinos")}${bacteria(34, 62)}${et(34, 86, "moneras", 48, { size: 10, color: "#059669" })}<ellipse cx="82" cy="62" rx="16" ry="9" fill="#bae6fd" stroke="var(--water)"/>${et(82, 86, "protoctistas", 52, { size: 10, color: COL.agua })}${seta(130, 72, 1)}${et(130, 86, "hongos", 48, { size: 10, color: COL.marron })}${arbol(178, 74, 0.7)}${et(178, 86, "plantas", 48, { size: 10, color: COL.verde })}${pez(226, 62, "var(--red)")}${et(226, 86, "animales", 48, { size: 10, color: COL.rojo })}${cj(10, 110, 115, 52, "autótrofos", COL.verde)}${cj(135, 110, 115, 52, "heterótrofos", COL.rojo)}${tx(67, 152, "fabrican su alimento", 110)}${tx(192, 152, "lo toman de otros", 110)}`),
      video: vid("GS34snY_P4o"),
    },
    {
      html: `<h3>Moneras y protoctistas</h3><p>El <mark>reino moneras</mark> está formado por las <b>bacterias</b>. Son unicelulares y sus células <b>no tienen núcleo</b>. Son los seres vivos más pequeños y más abundantes, y viven en todas partes: en el suelo, el agua, el aire e incluso dentro de nosotros. Muchas son beneficiosas: las de nuestro intestino nos ayudan a digerir y otras se usan para hacer yogur o queso. Algunas causan enfermedades, como la tuberculosis.</p><p>El <mark>reino protoctistas</mark> es muy variado. Sus células tienen núcleo y pueden ser unicelulares o pluricelulares sencillos. Se dividen en dos grupos:</p><p>• Las <b>algas</b>, que hacen la fotosíntesis. Algunas son microscópicas y forman el <b>plancton</b>, que produce gran parte del oxígeno de la Tierra; otras son grandes, como las algas marinas que ves en la playa.<br>• Los <b>protozoos</b>, unicelulares que se alimentan de otros seres, como las amebas y los paramecios. Algunos causan enfermedades, como la malaria.</p>`,
      svg: svg("Bacterias, alga y paramecio, vistos al microscopio", `${tit("Seres diminutos")}<circle cx="70" cy="98" r="56" fill="var(--card)" stroke="var(--line)" stroke-width="4"/>${bacteria(50, 76)}${bacteria(84, 96)}${bacteria(56, 118)}${et(70, 168, "bacterias", 90, { size: 11, color: "#059669" })}<circle cx="190" cy="98" r="56" fill="var(--card)" stroke="var(--line)" stroke-width="4"/><ellipse cx="178" cy="90" rx="30" ry="14" fill="#bae6fd" stroke="var(--water)" stroke-width="2"/><circle cx="182" cy="88" r="5" fill="#6d28d9"/><path d="M196 116 q8 -10 16 0 q8 10 16 0" stroke="var(--leaf)" stroke-width="5" fill="none"/>${et(190, 168, "paramecio y alga", 110, { size: 11, color: COL.agua })}`),
    },
    {
      html: `<h3>El reino de los hongos</h3><p>Durante mucho tiempo se pensó que los hongos eran plantas, pero son un reino aparte porque <b>no tienen clorofila</b> y no pueden hacer la fotosíntesis. Se alimentan de la materia de otros seres vivos o de sus restos: son <b>heterótrofos</b>.</p><p>Hay hongos <b>unicelulares</b>, como las <b>levaduras</b>, que se usan para fabricar pan, cerveza y otros alimentos. Y hay hongos <b>pluricelulares</b>, como los <b>mohos</b> (las manchas verdes o blancas de la fruta pasada o el pan viejo) y los hongos que forman <b>setas</b>.</p><p>La <mark>seta</mark> es solo una parte del hongo: la que sale del suelo para reproducirse. El resto del hongo es una red de hilos finísimos, el <b>micelio</b>, escondida bajo tierra. Las setas se reproducen por <b>esporas</b>.</p><p>Los hongos son muy importantes porque <b>descomponen</b> hojas y restos, y así devuelven nutrientes al suelo. Uno de ellos, el <i>Penicillium</i>, sirvió para descubrir la <b>penicilina</b>, el primer antibiótico. ¡Ojo!: algunas setas son muy venenosas, así que nunca se cogen ni se comen sin un experto.</p>`,
      svg: svg("Seta con sombrero y pie, y el micelio bajo tierra; esporas saliendo del sombrero", `${tit("Una seta y su micelio")}<path d="M10 110 H250" stroke="#a16207" stroke-width="3"/><rect x="10" y="110" width="240" height="60" fill="#a16207" fill-opacity=".14"/>${seta(130, 110, 2.6)}<path d="M130 112 q-30 10 -60 30 M130 112 q30 12 64 26 M130 112 q-6 20 -20 40 M130 112 q10 22 30 34" stroke="#f5f0e6" stroke-width="2" fill="none"/>${[[96, 58], [86, 70], [168, 60], [176, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2" fill="var(--muted)"/>`).join("")}${et(212, 52, "esporas", 70, { size: 11, color: COL.gris })}${et(214, 92, "seta", 60, { size: 11, color: COL.rojo })}${et(60, 160, "micelio", 70, { size: 11, color: COL.marron })}`),
    },
    {
      html: `<h3>El reino de las plantas</h3><p>Las <mark>plantas</mark> son pluricelulares, tienen clorofila y fabrican su alimento con la fotosíntesis. No se desplazan. Se clasifican en dos grandes grupos:</p><p>Las <b>plantas sin flores</b> se reproducen por <b>esporas</b>. Son los <b>musgos</b>, pequeños, sin raíces ni vasos, que viven en lugares muy húmedos; y los <b>helechos</b>, que ya tienen raíz, tallo y hojas grandes, y forman las esporas en puntitos bajo las hojas.</p><p>Las <b>plantas con flores</b> se reproducen por <b>semillas</b>. Se dividen en:</p><p>• <b>Gimnospermas</b>: sus semillas no están dentro de un fruto verdadero. Suelen tener hojas en forma de aguja y piñas, como el pino, el abeto o el ciprés.<br>• <b>Angiospermas</b>: tienen flores vistosas y sus semillas están protegidas dentro de un <b>fruto</b>. Son la mayoría: el rosal, el manzano, el trigo, la encina o el girasol.</p>`,
      svg: svg("Clasificación de las plantas: sin flores (musgos y helechos) y con flores (gimnospermas y angiospermas)", `${tit("Las plantas")}${cj(70, 32, 120, 24, "PLANTAS", COL.verde)}${cj(14, 76, 106, 26, "sin flores: esporas", COL.verde, { op: 0.08 })}${cj(140, 76, 106, 26, "con flores: semillas", COL.verde, { op: 0.08 })}${fl(110, 56, 70, 74)}${fl(150, 56, 190, 74)}${cj(10, 126, 52, 32, "musgos", COL.verde)}${cj(68, 126, 56, 32, "helechos", COL.verde)}${cj(136, 126, 54, 32, "gimnosp.", COL.agua)}${cj(196, 126, 54, 32, "angiosp.", COL.rojo)}${fl(50, 102, 36, 124)}${fl(84, 102, 96, 124)}${fl(176, 102, 164, 124)}${fl(206, 102, 222, 124)}${tx(163, 172, "pino", 50)}${tx(223, 172, "rosal", 50)}`),
    },
    {
      html: `<h3>Los animales vertebrados</h3><p>Los <mark>animales</mark> son pluricelulares, heterótrofos y la mayoría se desplaza. Se dividen en dos grandes grupos según tengan o no esqueleto interno con <b>columna vertebral</b>.</p><p>Los <mark>vertebrados</mark> tienen esqueleto interno con columna vertebral. Hay cinco grupos:</p>${tabla(["Grupo", "Piel", "Respiración", "Reproducción", "Ejemplo"], [["Peces", "escamas", "branquias", "huevos", "sardina"], ["Anfibios", "desnuda y húmeda", "branquias de jóvenes, luego pulmones y piel", "huevos en el agua", "rana"], ["Reptiles", "escamas duras", "pulmones", "huevos con cáscara", "lagarto"], ["Aves", "plumas", "pulmones", "huevos con cáscara", "gorrión"], ["Mamíferos", "pelo", "pulmones", "crías que maman leche", "lince"]])}<p>Las aves y los mamíferos son de <b>sangre caliente</b>: mantienen su temperatura constante. Peces, anfibios y reptiles son de <b>sangre fría</b>: su temperatura depende del ambiente, por eso los lagartos toman el sol.</p>`,
      svg: svg("Los cinco grupos de vertebrados: peces, anfibios, reptiles, aves y mamíferos", `${tit("Cinco grupos de vertebrados")}${fichas([["Peces", "escamas, branquias", COL.agua], ["Anfibios", "piel húmeda", COL.verde], ["Reptiles", "escamas duras", COL.marron], ["Aves", "plumas, pico", COL.sol], ["Mamíferos", "pelo, leche", COL.rojo], ["Sangre", "caliente: aves y mamíferos", COL.naranja]], 2, 34)}`),
      video: vid("buPiax-DWbM"),
    },
    {
      html: `<h3>Los animales invertebrados</h3><p>Los <mark>invertebrados</mark> no tienen columna vertebral. Son más del <b>95 %</b> de las especies animales. Los principales grupos son:</p><p>• <b>Poríferos</b> o esponjas: viven fijos en el fondo del mar y tienen el cuerpo lleno de poros.<br>• <b>Cnidarios</b>: medusas, corales y anémonas, con tentáculos que pican.<br>• <b>Gusanos</b>: cuerpo blando y alargado, como la lombriz de tierra.<br>• <b>Moluscos</b>: cuerpo blando, a menudo protegido por una concha. Caracoles, mejillones, pulpos y calamares.<br>• <b>Equinodermos</b>: marinos con piel espinosa y forma de estrella, como la estrella y el erizo de mar.<br>• <b>Artrópodos</b>: el grupo más numeroso de todos. Tienen un esqueleto externo duro y patas articuladas. Incluyen los <b>insectos</b> (6 patas, como la hormiga), los <b>arácnidos</b> (8 patas, como la araña), los <b>crustáceos</b> (como la gamba o el cangrejo) y los <b>miriápodos</b> (muchas patas, como el ciempiés).</p>`,
      svg: svg("Grupos de invertebrados: esponjas, medusas, gusanos, moluscos, equinodermos y artrópodos", `${tit("Grupos de invertebrados")}${filas([["Esponjas", "fijas, con poros", COL.sol], ["Cnidarios", "medusa, coral", COL.agua], ["Gusanos", "lombriz", "#e07a5f"], ["Moluscos", "caracol, pulpo", COL.morado], ["Equinodermos", "estrella de mar", COL.naranja], ["Artrópodos", "insectos, arañas…", COL.rojo]], 46, 22, { wa: 90, wb: 130 })}`),
      video: vid("NOpzysr0PJQ"),
    },
    {
      html: `<h3>Cómo identificar un ser vivo: las claves</h3><p>Para averiguar a qué grupo pertenece un ser vivo, los científicos usan <mark>claves dicotómicas</mark>. «Dicotómica» quiere decir que en cada paso hay <b>dos opciones</b>, y hay que elegir la que se cumple. Cada respuesta te lleva a otra pregunta, hasta llegar al nombre del grupo.</p><p>Por ejemplo, una clave para vertebrados:</p><p>1. ¿Tiene plumas? Sí → <b>ave</b>. No → ve a 2.<br>2. ¿Tiene pelo? Sí → <b>mamífero</b>. No → ve a 3.<br>3. ¿Tiene aletas y branquias? Sí → <b>pez</b>. No → ve a 4.<br>4. ¿Tiene la piel con escamas duras y secas? Sí → <b>reptil</b>. No (piel desnuda y húmeda) → <b>anfibio</b>.</p><p>Las claves se usan en guías de campo para identificar plantas, aves o insectos en una excursión. Lo importante es fijarse bien en las características y no en lo que «parece» a primera vista, como en el caso de la ballena o del murciélago, que vuela pero es mamífero.</p>`,
      svg: svg("Clave dicotómica de vertebrados: plumas, pelo, aletas, escamas", `${tit("Una clave de dos en dos")}${["¿plumas?", "¿pelo?", "¿aletas?", "¿escamas?"].map((q, i) => `${cj(12, 34 + i * 34, 72, 24, q, COL.azul)}${fl(84, 46 + i * 34, 104, 46 + i * 34, COL.verde, 2)}${cj(106, 34 + i * 34, 64, 24, ["ave", "mamífero", "pez", "reptil"][i], COL.verde)}${i < 3 ? fl(48, 58 + i * 34, 48, 68 + i * 34, COL.rojo, 2) : ""}`).join("")}${tx(214, 52, "→ sí", 60, { color: COL.verde, weight: 700 })}${tx(214, 70, "↓ no", 60, { color: COL.rojo, weight: 700 })}${fl(84, 156, 104, 166, COL.rojo, 2)}${tx(150, 172, "anfibio", 60, { weight: 700, color: COL.verde })}`),
    },
  ],
  figura: {
    titulo: "La clasificación en ocho ideas",
    svg: rejilla([
      ["Especie", "se reproducen entre sí", COL.azul],
      ["Nombre científico", "género + especie", COL.morado],
      ["Moneras", "bacterias sin núcleo", "#059669"],
      ["Protoctistas", "algas y protozoos", COL.agua],
      ["Hongos", "setas, mohos, levaduras", COL.marron],
      ["Plantas", "esporas o semillas", COL.verde],
      ["Vertebrados", "5 grupos", COL.rojo],
      ["Invertebrados", "el 95 % de animales", COL.naranja],
    ], 4, 86, "Resumen de la clasificación de los seres vivos"),
  },
  video: vgen("6MQ3DLTK2aA", "clasificación de los seres vivos cinco reinos niños"),
  ejemplos: [
    { enunciado: "Un ser vivo es pluricelular, no tiene clorofila, vive sobre un tronco podrido y se reproduce por esporas. ¿A qué reino pertenece?",
      pasos: ["Es pluricelular: descartamos moneras.", "No tiene clorofila: no es planta ni alga.", "Se alimenta de restos y forma esporas: es un hongo."],
      resultado: "Reino de los hongos (por ejemplo, una seta)." },
    { enunciado: "Usa la clave dicotómica para clasificar al murciélago.",
      pasos: ["¿Tiene plumas? No.", "¿Tiene pelo? Sí."],
      resultado: "Es un mamífero, aunque vuele." },
    { enunciado: "¿Son de la misma especie el lobo (Canis lupus) y el perro (Canis familiaris)? ¿Y del mismo género?",
      pasos: ["La primera palabra es el género: los dos son Canis.", "La segunda palabra indica la especie y es distinta: lupus y familiaris."],
      resultado: "Mismo género, distinta especie según este nombre." },
  ],
  errores: [
    "Pensar que los hongos son plantas: no tienen clorofila y forman un reino propio.",
    "Clasificar a la ballena o al delfín como peces: son mamíferos.",
    "Decir que la araña es un insecto: tiene 8 patas, es un arácnido.",
    "Creer que todas las bacterias son malas: muchas son beneficiosas.",
    "Escribir el nombre científico sin mayúscula en el género o sin cursiva.",
  ],
  ejercicios: [
    { q: "¿Por qué es necesario clasificar a los seres vivos?", sol: "Porque hay millones de especies y ordenarlas en grupos facilita estudiarlas e identificarlas." },
    { q: "¿Qué es una especie?", sol: "Un grupo de seres muy parecidos que pueden reproducirse entre sí y tener descendientes fértiles." },
    { q: "Escribe los cinco reinos y un ejemplo de cada uno.", sol: "Moneras (bacteria), protoctistas (alga o ameba), hongos (seta), plantas (pino) y animales (gato)." },
    { q: "¿Qué diferencia hay entre un ser autótrofo y uno heterótrofo?", sol: "El autótrofo fabrica su alimento (fotosíntesis); el heterótrofo lo toma de otros seres." },
    { q: "Explica qué es el micelio de un hongo.", sol: "La red de hilos finos que forma el cuerpo del hongo bajo tierra; la seta es solo la parte reproductora." },
    { q: "Clasifica: helecho, pino, musgo, manzano.", sol: "Sin flores (esporas): helecho y musgo. Con flores (semillas): pino (gimnosperma) y manzano (angiosperma)." },
    { q: "Escribe dos características de cada grupo de vertebrados.", sol: "Peces: escamas y branquias. Anfibios: piel húmeda y metamorfosis. Reptiles: escamas duras y pulmones. Aves: plumas y pico. Mamíferos: pelo y leche." },
    { q: "¿Qué tienen en común todos los artrópodos?", sol: "Esqueleto externo duro y patas articuladas." },
    { q: "Clasifica en su grupo de invertebrados: caracol, medusa, hormiga, estrella de mar, lombriz.", sol: "Caracol: molusco. Medusa: cnidario. Hormiga: artrópodo (insecto). Estrella de mar: equinodermo. Lombriz: gusano." },
    { q: "Usa la clave dicotómica para clasificar a la salamandra (piel húmeda, sin escamas, sin pelo ni plumas ni aletas).", sol: "No plumas, no pelo, no aletas, no escamas duras: anfibio." },
  ],
  quiz: [
    { q: "El grupo más grande de la clasificación es…", o: ["el reino", "el género", "la especie"], a: 0, e: "El reino." },
    { q: "Inventó el nombre científico con dos palabras…", o: ["Cajal", "Darwin", "Linneo"], a: 2, e: "Carl Linneo." },
    { q: "Las bacterias pertenecen al reino…", o: ["plantas", "moneras", "hongos"], a: 1, e: "Moneras." },
    { q: "Las algas pertenecen al reino…", o: ["protoctistas", "animales", "plantas"], a: 0, e: "Protoctistas." },
    { q: "Los hongos se reproducen por…", o: ["esporas", "huevos", "semillas"], a: 0, e: "Esporas." },
    { q: "El pino es una planta…", o: ["angiosperma", "gimnosperma", "sin flores"], a: 1, e: "Gimnosperma." },
    { q: "Los anfibios tienen la piel…", o: ["desnuda y húmeda", "con pelo", "con plumas"], a: 0, e: "Desnuda y húmeda." },
    { q: "Son de sangre caliente…", o: ["aves y mamíferos", "anfibios", "peces y reptiles"], a: 0, e: "Aves y mamíferos." },
    { q: "Un insecto tiene…", o: ["8 patas", "6 patas", "10 patas"], a: 1, e: "6 patas." },
    { q: "El pulpo es un…", o: ["molusco", "crustáceo", "pez"], a: 0, e: "Molusco sin concha." },
  ],
  examen: [
    { q: "El murciélago es un…", o: ["ave", "insecto", "mamífero"], a: 2, e: "Mamífero." },
    { q: "Los seres que fabrican su alimento son…", o: ["heterótrofos", "parásitos", "autótrofos"], a: 2, e: "Autótrofos." },
    { q: "La araña es un…", o: ["arácnido", "insecto", "molusco"], a: 0, e: "Arácnido: 8 patas." },
    { q: "Las plantas con fruto que protege la semilla son…", o: ["musgos", "angiospermas", "gimnospermas"], a: 1, e: "Angiospermas." },
  ],
  feynman: ["Para qué sirve clasificar y qué es una especie", "Qué caracteriza a cada uno de los cinco reinos", "Cómo funciona una clave dicotómica, con un ejemplo"],
  mapa: mapa("SERES VIVOS", "var(--pri)", [
    ["Unicelulares", "moneras · protoctistas", COL.agua],
    ["Hongos", "setas · mohos · levaduras", COL.marron],
    ["Plantas", "sin flores · con flores", COL.verde],
    ["Animales", "vertebrados · invertebrados", COL.rojo],
  ], 250),
  tarjetas: [
    ["Especie", "Seres parecidos que se reproducen entre sí."],
    ["Nombre científico", "Dos palabras en latín: género y especie. Ej.: Homo sapiens."],
    ["Moneras", "Reino de las bacterias: células sin núcleo."],
    ["Hongos", "Sin clorofila; se reproducen por esporas."],
    ["Angiospermas", "Plantas con flores y semillas dentro de un fruto."],
    ["Vertebrados", "Animales con columna vertebral: 5 grupos."],
    ["Artrópodos", "Invertebrados con esqueleto externo y patas articuladas."],
    ["Clave dicotómica", "Preguntas con dos opciones para identificar seres vivos."],
  ],
  familias: ["En un paseo, haced fotos de seres vivos y clasificadlas en casa por reinos.", "Dejad un trozo de pan húmedo en un tarro cerrado y observad cómo aparece moho (sin abrirlo).", "Buscad el nombre científico de vuestro animal o planta favorita.", "Inventad juntos una clave dicotómica para los objetos de la cocina."],
  profesores: PROF("Ciencias de la Naturaleza: clasificación de los seres vivos; reinos; plantas sin flores y con flores; vertebrados e invertebrados; uso de claves dicotómicas y guías de identificación", ["Salida al entorno con guía de campo y registro fotográfico.", "Elaborar por grupos una clave dicotómica de los alumnos de la clase (gafas, pelo largo…).", "Cultivo de moho y observación de levadura con lupa o microscopio."]),
  fuentes: [RD, wiki("Reino (biología)", "Reino_(biología)"), wiki("Clave dicotómica", "Clave_dicotómica"), { t: "Museo Nacional de Ciencias Naturales (CSIC)", url: "https://www.mncn.csic.es/" }],
  revisado: REV,
};
