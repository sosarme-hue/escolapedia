// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, filas, rueda, flujo } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "Los dioses y los mitos",
  minutos: 60,
  objetivos: ["Explicar qué es un mito y para qué servía", "Conocer el origen del mundo y de los dioses según la mitología griega", "Identificar a los dioses olímpicos, sus nombres griegos y romanos y sus atributos", "Reconocer mitos en el arte, la lengua y la cultura actual"],
  claves: ["mito", "Caos", "titanes", "Olimpo", "atributo", "pervivencia"],
  pregunta: {
    texto: "Nike, Pandora, Hermès, Amazon, el rover Perseverance en Marte junto a la misión Artemis… ¿Por qué tantas marcas y misiones espaciales usan nombres de la mitología griega?",
    respuesta: "Porque los <mark>mitos griegos</mark> siguen siendo historias compartidas por millones de personas: todos asocian a Niké con la victoria o a Ártemis con la Luna. Llevan casi 3.000 años contándose y forman parte de nuestro imaginario.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un mito?</h3><p>Un <b>mito</b> (del griego <i>mythos</i>, «relato») es una narración tradicional protagonizada por dioses, héroes y criaturas fantásticas. Los mitos se transmitían de forma <b>oral</b>, de generación en generación, y tenían varias funciones: <mark>explicar</mark> el origen del mundo y de los fenómenos naturales (el trueno, las estaciones), <b>justificar</b> costumbres y ritos, <b>enseñar</b> valores (el castigo de la soberbia) y dar <b>identidad</b> a un pueblo. Los recogieron por escrito poetas como Homero, Hesíodo y Ovidio.</p>`,
      svg: rueda("Funciones de los mitos", "MITO", [["explicar", "var(--pen)"], ["justificar ritos", "var(--sun)"], ["enseñar valores", "var(--leaf)"], ["dar identidad", "var(--red)"]], "var(--ink)"),
    },
    {
      html: `<h3>El origen del mundo</h3><p>Según la <i>Teogonía</i> de <b>Hesíodo</b>, al principio solo existía el <mark>Caos</mark>, un vacío oscuro. De él surgieron <b>Gea</b> (la Tierra), Eros (el amor) y otras fuerzas. Gea engendró a <b>Urano</b> (el Cielo), y de su unión nacieron los <b>titanes</b>. El titán <b>Crono</b> derrocó a su padre Urano y, por miedo a que sus hijos hicieran lo mismo, se los tragaba al nacer. Su esposa Rea salvó al pequeño <b>Zeus</b> dándole a Crono una piedra envuelta en pañales.</p>`,
      svg: flujo("Generaciones divinas según Hesíodo", ["Caos", "Gea y|Urano", "Crono y|Rea", "Zeus y los|olímpicos"], "var(--bac)"),
    },
    {
      html: `<h3>La titanomaquia</h3><p>Ya adulto, Zeus obligó a Crono a vomitar a sus hermanos: Hestia, Deméter, Hera, Hades y Poseidón. Juntos lucharon diez años contra los titanes en la <mark>titanomaquia</mark>, la guerra de los dioses. Vencieron gracias a los cíclopes, que forjaron el rayo de Zeus, el tridente de Poseidón y el casco de invisibilidad de Hades. Los tres hermanos se repartieron el mundo: <b>Zeus</b> el cielo, <b>Poseidón</b> el mar y <b>Hades</b> el inframundo. El titán <b>Atlas</b> fue condenado a sostener la bóveda celeste.</p>`,
      svg: filas("Reparto del mundo tras la titanomaquia", [["Zeus", "el cielo y el rayo", "var(--sun)"], ["Poseidón", "el mar y los terremotos", "var(--water)"], ["Hades", "el inframundo", "var(--ink)"], ["Atlas", "castigado: sostiene el cielo", "var(--muted)"]]),
      video: { id: "DeIbRemE6Kg", titulo: "Mitología griega: el origen de los dioses del Olimpo", canal: "Mira la Historia", vistas: 6833982, megusta: 0 },
    },
    {
      html: `<h3>Los dioses olímpicos</h3><p>Los doce grandes dioses vivían en el monte <b>Olimpo</b>, el más alto de Grecia. Eran <mark>antropomorfos</mark> (con forma humana) e inmortales, pero tenían pasiones humanas: celos, ira, amor, venganza. Cada uno se reconoce por sus <b>atributos</b>, los objetos o animales que lo acompañan en el arte. Los romanos los identificaron con sus propios dioses:</p>${tabla(["Griego", "Romano", "Dominio", "Atributos"], [["Zeus", "Júpiter", "cielo, rey de los dioses", "rayo, águila"], ["Hera", "Juno", "matrimonio", "pavo real, diadema"], ["Poseidón", "Neptuno", "mar, terremotos", "tridente, caballo"], ["Atenea", "Minerva", "sabiduría, estrategia", "lechuza, casco, olivo"], ["Apolo", "Apolo", "sol, música, profecía", "lira, laurel, arco"], ["Ártemis", "Diana", "caza, luna", "arco, ciervo"], ["Afrodita", "Venus", "amor, belleza", "paloma, concha"], ["Ares", "Marte", "guerra", "lanza, casco"], ["Hermes", "Mercurio", "mensajero, comercio", "sandalias aladas, caduceo"], ["Hefesto", "Vulcano", "fuego, forja", "martillo, yunque"], ["Deméter", "Ceres", "agricultura", "espigas"], ["Dioniso", "Baco", "vino, teatro", "vid, copa"]])}`,
    },
    {
      html: `<h3>Prometeo y Pandora</h3><p>El titán <b>Prometeo</b> creó a los seres humanos con barro y, compadecido de ellos, <mark>robó el fuego</mark> a los dioses para dárselo. Zeus lo castigó encadenándolo a una roca, donde un águila le devoraba el hígado cada día, y este le volvía a crecer cada noche, hasta que Heracles lo liberó. Para castigar a los humanos, Zeus envió a <b>Pandora</b>, la primera mujer, con una jarra (luego llamada «caja») que no debía abrir. La abrió por curiosidad y escaparon todos los males; solo quedó dentro la <b>esperanza</b>.</p>`,
      video: { id: "5VIzCJhbEqs", titulo: "El mito de Prometeo, Iseult Gillespie", canal: "TED-Ed", vistas: 311123, megusta: 0 },
    },
    {
      html: `<h3>Mitos de transformación y castigo</h3><p>Muchos mitos cuentan <b>metamorfosis</b> (transformaciones), recogidas por el poeta romano <b>Ovidio</b>. <b>Narciso</b> se enamoró de su propio reflejo y se convirtió en flor. <b>Aracne</b> desafió a Atenea a tejer y fue convertida en araña. <b>Dafne</b>, huyendo de Apolo, se transformó en laurel. Otros mitos castigan la <mark>hybris</mark> (soberbia, querer igualarse a los dioses): <b>Ícaro</b> voló demasiado cerca del sol con alas de cera, y <b>Sísifo</b> fue condenado a empujar eternamente una roca montaña arriba.</p>`,
      svg: filas("Mitos de metamorfosis y castigo", [["Narciso", "flor, por amarse a sí mismo", "var(--sun)"], ["Aracne", "araña, por desafiar a Atenea", "var(--muted)"], ["Dafne", "laurel, huyendo de Apolo", "var(--leaf)"], ["Ícaro", "cae al mar por volar alto", "var(--water)"], ["Sísifo", "roca eterna por engañar", "var(--red)"]]),
    },
    {
      html: `<h3>El inframundo y las criaturas</h3><p>Al morir, las almas viajaban al <b>Hades</b>, el reino subterráneo. Pagaban un óbolo (moneda) al barquero <b>Caronte</b> para cruzar la laguna Estigia, y el perro de tres cabezas <b>Cerbero</b> vigilaba la entrada. Los buenos iban a los Campos Elíseos; los malvados, al Tártaro. La mitología está llena de <mark>criaturas fantásticas</mark>: la Medusa, cuya mirada petrificaba; el Minotauro, mitad hombre y mitad toro; los centauros; las sirenas; la Hidra de nueve cabezas; Pegaso, el caballo alado.</p>`,
    },
    {
      html: `<h3>Los mitos hoy</h3><p>Los mitos siguen vivos. En la <b>lengua</b>: pánico (de Pan), eco (la ninfa Eco), narcisista, titánico, odisea, talón de Aquiles, caja de Pandora. En la <b>ciencia</b>: el complejo de Edipo, los planetas, la misión Artemis de la NASA. En el <b>arte</b>: <i>El nacimiento de Venus</i> de Botticelli o <i>Las hilanderas</i> de Velázquez, que cuenta el mito de Aracne. Y en el <mark>cine, los cómics y los videojuegos</mark>: Percy Jackson, Hércules de Disney o God of War. Conocerlos permite entender gran parte de nuestra cultura.</p>`,
    },
  ],
  figura: {
    titulo: "Cómo reconocer a un dios en un cuadro o una escultura",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Atributos de seis dioses: rayo de Zeus, tridente de Poseidón, lechuza de Atenea, lira de Apolo, sandalias aladas de Hermes y paloma de Afrodita">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      ${[["Zeus", "rayo", "var(--sun)", `<path d="M0 -26 L -10 2 H 2 L -6 28 L 12 -6 H 0 L 8 -26 Z" fill="var(--sun)"/>`], ["Poseidón", "tridente", "var(--water)", `<path d="M0 -26 V 28 M-14 -26 V -10 Q -14 0 0 0 Q 14 0 14 -10 V -26" stroke="var(--water)" stroke-width="4" fill="none"/>`], ["Atenea", "lechuza", "var(--muted)", `<ellipse cx="0" cy="4" rx="16" ry="22" fill="var(--muted)"/><circle cx="-6" cy="-6" r="5" fill="#fff"/><circle cx="6" cy="-6" r="5" fill="#fff"/><circle cx="-6" cy="-6" r="2" fill="var(--ink)"/><circle cx="6" cy="-6" r="2" fill="var(--ink)"/>`], ["Apolo", "lira", "var(--hl-ink)", `<path d="M-14 -24 Q -20 10 0 24 Q 20 10 14 -24 M-14 -24 H 14 M-6 -24 V 14 M0 -24 V 18 M6 -24 V 14" stroke="var(--hl-ink)" stroke-width="3" fill="none"/>`], ["Hermes", "sandalias aladas", "var(--leaf)", `<path d="M-18 14 H 18 Q 18 4 6 4 L 0 -10 H -10 V 14 Z" fill="var(--leaf)"/><path d="M-10 -6 L -26 -20 M-10 0 L -28 -10" stroke="var(--leaf)" stroke-width="3"/>`], ["Afrodita", "paloma", "var(--inf)", `<path d="M-20 4 Q -6 -14 10 -6 Q 22 -2 20 6 Q 8 18 -8 12 Z" fill="var(--inf)"/><path d="M-4 0 L 4 -22 L 10 -4" fill="var(--inf)"/>`]].map(([n, a, c, ico], i) => `<rect x="${16 + i * 110}" y="24" width="98" height="170" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><g transform="translate(${65 + i * 110} 86)">${ico}</g><text x="${65 + i * 110}" y="150" text-anchor="middle" font-size="15" font-weight="700" fill="var(--ink)" ${D}>${n}</text><text x="${65 + i * 110}" y="172" text-anchor="middle" font-size="${a.length > 10 ? 10.5 : 12}" fill="var(--muted)" ${F}>${a}</text>`).join("")}
    </svg>`,
  },
  video: { id: "GyBC0R8JH2o", titulo: "Los dioses griegos del Olimpo", canal: "Draw My Life en Español", vistas: 1258086, megusta: 0, busqueda: "dioses del olimpo mitología griega" },
  ejemplos: [
    { enunciado: "En un cuadro aparece un hombre barbudo con un tridente rodeado de caballos y olas. ¿Quién es?", pasos: ["El tridente es el atributo de Poseidón.", "Los caballos y el mar refuerzan la identificación.", "Su nombre romano es Neptuno."], resultado: "Poseidón (Neptuno)." },
    { enunciado: "Explica qué fenómeno natural explicaba el mito de Perséfone, hija de Deméter, raptada por Hades.", pasos: ["Hades se llevó a Perséfone al inframundo; Deméter, triste, dejó secar los campos.", "Zeus acordó que Perséfone pasaría una parte del año con su madre y otra con Hades.", "Cuando está con su madre hay cosechas (primavera y verano); cuando está en el inframundo, la tierra descansa (otoño e invierno)."], resultado: "Explicaba el ciclo de las estaciones." },
    { enunciado: "¿Qué enseñanza transmite el mito de Ícaro?", pasos: ["Dédalo fabricó alas de cera y plumas para escapar de Creta y advirtió a su hijo que no volara alto.", "Ícaro, entusiasmado, se acercó al sol; la cera se derritió y cayó al mar.", "Desobedeció y se excedió: cometió hybris."], resultado: "Advierte contra la imprudencia y la soberbia, y elogia la moderación." },
  ],
  errores: [
    "Confundir el nombre griego y el romano de un dios (Hera es Juno, no Venus).",
    "Pensar que los dioses griegos eran perfectos y buenos: tenían defectos y pasiones humanas.",
    "Confundir a Hades (dios) con el Hades (lugar), que también se usa para nombrar el inframundo.",
    "Creer que los mitos eran solo cuentos infantiles: para los griegos tenían un valor religioso y social.",
    "Decir que Prometeo era un dios olímpico: era un titán.",
  ],
  ejercicios: [
    { q: "Define mito y escribe tres de sus funciones.", sol: "Relato tradicional sobre dioses y héroes. Funciones: explicar el mundo, justificar costumbres y ritos, enseñar valores y dar identidad." },
    { q: "Resume el origen del mundo según Hesíodo.", sol: "Al principio estaba el Caos; de él surgió Gea, que engendró a Urano. Sus hijos, los titanes, fueron gobernados por Crono, que fue derrocado por su hijo Zeus." },
    { q: "¿Qué fue la titanomaquia y cómo terminó?", sol: "La guerra entre Zeus y sus hermanos contra los titanes. Ganaron los olímpicos y se repartieron el mundo: Zeus el cielo, Poseidón el mar y Hades el inframundo." },
    { q: "Escribe el nombre romano de: Zeus, Hera, Atenea, Afrodita, Ares y Hermes.", sol: "Júpiter, Juno, Minerva, Venus, Marte y Mercurio." },
    { q: "¿Qué es un atributo? Pon tres ejemplos.", sol: "Objeto o animal que identifica a un dios: el rayo de Zeus, la lechuza de Atenea y el tridente de Poseidón." },
    { q: "Cuenta el mito de Prometeo y explica su castigo.", sol: "Prometeo robó el fuego a los dioses para dárselo a los humanos. Zeus lo encadenó a una roca, donde un águila le comía el hígado cada día." },
    { q: "¿Qué significa hoy «abrir la caja de Pandora»?", sol: "Hacer algo que desencadena muchos problemas imprevistos." },
    { q: "¿Qué es la hybris? Pon un ejemplo mitológico.", sol: "La soberbia de querer igualarse o superar a los dioses. Ejemplo: Aracne, que desafió a Atenea, o Ícaro, que voló demasiado alto." },
    { q: "Describe el viaje de un alma al inframundo.", sol: "Pagaba un óbolo a Caronte para cruzar la laguna Estigia, pasaba ante Cerbero y era juzgada: los buenos iban a los Campos Elíseos y los malvados al Tártaro." },
    { q: "Escribe cuatro palabras o expresiones actuales que vengan de mitos.", sol: "Pánico, eco, narcisista, odisea, titánico, talón de Aquiles, caja de Pandora (cualquier cuatro)." },
  ],
  quiz: [
    { q: "«Mythos» en griego significa…", o: ["relato", "dios", "verdad"], a: 0, e: "Narración tradicional." },
    { q: "Al principio, según Hesíodo, existía…", o: ["el Caos", "Zeus", "el Olimpo"], a: 0, e: "Un vacío oscuro." },
    { q: "Crono se tragaba a sus hijos por miedo a…", o: ["ser destronado", "pasar hambre", "Zeus"], a: 0, e: "Como él hizo con Urano." },
    { q: "El dios del mar es…", o: ["Poseidón", "Hades", "Apolo"], a: 0, e: "Neptuno en Roma." },
    { q: "La lechuza es atributo de…", o: ["Atenea", "Hera", "Ártemis"], a: 0, e: "Símbolo de la sabiduría." },
    { q: "El nombre romano de Hermes es…", o: ["Mercurio", "Marte", "Vulcano"], a: 0, e: "Mensajero de los dioses." },
    { q: "Prometeo robó a los dioses…", o: ["el fuego", "el rayo", "la ambrosía"], a: 0, e: "Para dárselo a los humanos." },
    { q: "En la caja de Pandora quedó…", o: ["la esperanza", "el amor", "el oro"], a: 0, e: "Todo lo demás escapó." },
    { q: "Narciso se convirtió en…", o: ["una flor", "un árbol", "una araña"], a: 0, e: "Por enamorarse de su reflejo." },
    { q: "El barquero del inframundo es…", o: ["Caronte", "Cerbero", "Atlas"], a: 0, e: "Cobraba un óbolo." },
  ],
  examen: [
    { q: "Los dioses griegos eran antropomorfos, es decir…", o: ["con forma humana", "con forma animal", "invisibles"], a: 0, e: "Y con pasiones humanas." },
    { q: "Las Metamorfosis son una obra de…", o: ["Ovidio", "Homero", "Hesíodo"], a: 0, e: "Poeta romano." },
    { q: "El mito de Perséfone explicaba…", o: ["las estaciones", "el trueno", "los volcanes"], a: 0, e: "Su ida y vuelta del inframundo." },
  ],
  feynman: ["Qué es un mito y para qué servía", "El origen del mundo y la titanomaquia", "Seis dioses olímpicos con su nombre romano y atributo", "Tres mitos y su huella en nuestra lengua"],
  mapa: mapa("MITOLOGÍA", "var(--bac)", [
    ["Mito", "relato · explica · enseña", "var(--ink)"],
    ["Origen", "Caos · titanes · Zeus", "var(--sun)"],
    ["Olímpicos", "12 dioses · atributos", "var(--pen)"],
    ["Hoy", "lengua · arte · cine", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Mito", "Relato tradicional sobre dioses y héroes que explica el mundo."],
    ["Teogonía", "Poema de Hesíodo sobre el origen de los dioses."],
    ["Titanomaquia", "Guerra entre los olímpicos y los titanes."],
    ["Atributo", "Objeto o animal que identifica a un dios en el arte."],
    ["Zeus / Júpiter", "Rey de los dioses; atributos: rayo y águila."],
    ["Atenea / Minerva", "Diosa de la sabiduría; atributos: lechuza y casco."],
    ["Prometeo", "Titán que robó el fuego para los humanos."],
    ["Hybris", "Soberbia de querer igualarse a los dioses; siempre castigada."],
  ],
  familias: ["Buscad en casa o en la calle marcas con nombres mitológicos y averiguad su origen.", "Ved juntos Hércules de Disney o una película de Percy Jackson y comparad con el mito original.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): mitología grecolatina, cosmogonía y teogonía, dioses olímpicos y pervivencia de los mitos en el arte y la cultura.",
    ideas: ["Visita virtual al Museo del Prado buscando cuadros mitológicos.", "Cada alumno adopta un dios y crea su «perfil de red social».", "Comparar un mito con su versión en cine o videojuego."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo del Prado, la mitología en la colección", url: "https://www.museodelprado.es/" },
  ],
  revisado: "2026-11-12",
};
