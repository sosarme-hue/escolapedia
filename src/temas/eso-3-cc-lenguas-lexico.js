// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, arbol, figCols, ampliar, tabla, caja } = require("./_hum");

// Dibujo propio: algunas letras del alfabeto griego con su equivalente latino.
const alfabeto = caja("Letras griegas con su equivalente latino: alfa A, beta B, gamma G, delta D, pi P, omega O larga", `
  <g ${F} text-anchor="middle" font-weight="700">
    ${[["Α α", "alfa", "a"], ["Β β", "beta", "b"], ["Γ γ", "gamma", "g"], ["Δ δ", "delta", "d"], ["Π π", "pi", "p"], ["Ω ω", "omega", "o"]].map(([g, n, l], i) => {
      const x = 46 + (i % 3) * 84, y = 30 + Math.floor(i / 3) * 76;
      return `<rect x="${x - 36}" y="${y}" width="72" height="62" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="${x}" y="${y + 28}" font-size="20" fill="var(--pen)" ${D}>${g}</text><text x="${x}" y="${y + 48}" font-size="11" fill="var(--muted)">${n} = ${l}</text>`;
    }).join("")}
    <text x="130" y="20" font-size="11" fill="var(--muted)">alfa + beta = alfabeto</text>
  </g>`);

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "Las lenguas clásicas y el léxico",
  minutos: 35,
  objetivos: ["Situar el griego y el latín en la familia indoeuropea", "Explicar cómo el latín dio origen a las lenguas romances", "Reconocer raíces, prefijos y sufijos grecolatinos en palabras actuales"],
  claves: ["indoeuropeo", "latín vulgar", "lenguas romances", "alfabeto", "palabra patrimonial y cultismo", "helenismo", "etimología"],
  pregunta: {
    texto: "¿Qué tienen en común un «teléfono», una «biblioteca» y un «acuario»?",
    respuesta: "Que son palabras formadas con piezas de las <mark>lenguas clásicas</mark>: <i>tele</i> («lejos») + <i>fono</i> («sonido») en griego; <i>biblio</i> («libro») + <i>teca</i> («caja, depósito») en griego; y <i>aqua</i> («agua») en latín. Conocer esas piezas te permite entender miles de palabras, incluso las que nunca has visto.",
  },
  bloques: [
    {
      html: `<h3>Una gran familia: el indoeuropeo</h3><p>El griego y el latín pertenecen a la familia de lenguas <mark>indoeuropeas</mark>. Hace unos 6.000 años, un pueblo que vivía probablemente al norte del mar Negro hablaba una lengua, el <b>indoeuropeo</b>, que no se escribía. Al emigrar hacia Europa y Asia, esa lengua se fue transformando en otras: el <b>griego</b>, el <b>latín</b>, las lenguas germánicas (inglés, alemán), las eslavas (ruso), las celtas o el sánscrito de la India. Por eso se parecen palabras como <i>madre</i>, <i>mother</i>, <i>Mutter</i>, <i>mater</i> (latín) y <i>méter</i> (griego).</p>`,
      svg: filas("«Madre» en varias lenguas indoeuropeas", [["Latín", "mater", "var(--red)"], ["Griego", "méter", "var(--pen)"], ["Inglés", "mother", "var(--leaf)"], ["Alemán", "Mutter", "var(--sun)"], ["Sánscrito", "matar", "var(--muted)"]]),
    },
    {
      html: `<h3>El alfabeto: de los fenicios a nosotros</h3><p>Los griegos tomaron la escritura de los <b>fenicios</b>, que solo escribían consonantes, y le añadieron las <b>vocales</b>: así nació el primer <mark>alfabeto</mark> completo, cuyo nombre viene de sus dos primeras letras, <i>alfa</i> y <i>beta</i>. Los etruscos lo adaptaron y de ellos lo tomaron los romanos, creando el <b>alfabeto latino</b>, que es el que usamos hoy en la mayor parte del mundo. El alfabeto griego se sigue usando en Grecia y en ciencia: π (pi) en matemáticas, α y β en física o Δ para indicar un cambio.</p>`,
      svg: alfabeto,
    },
    {
      html: `<h3>Del latín a las lenguas romances</h3><p>Los romanos extendieron el latín por todo el Imperio. Pero el pueblo no hablaba el latín de los libros (<b>latín culto</b>), sino un latín más sencillo y cambiante, el <mark>latín vulgar</mark>. Cuando el Imperio se dividió y cada territorio quedó aislado, ese latín fue evolucionando de forma distinta en cada zona, y dio lugar a las <mark>lenguas romances</mark>: castellano, gallego, catalán, portugués, francés, italiano, rumano… Por eso estas lenguas se parecen tanto: «noche» se dice <i>noite</i>, <i>nit</i>, <i>nuit</i>, <i>notte</i> o <i>noapte</i>, todas del latín <i>noctem</i>.</p>`,
      svg: filas("El latín «noctem» en las lenguas romances", [["Castellano", "noche", "var(--red)"], ["Gallego", "noite", "var(--inf)"], ["Catalán", "nit", "var(--sun)"], ["Francés", "nuit", "var(--pen)"], ["Italiano", "notte", "var(--leaf)"]]),
    },
    {
      html: `<h3>Palabras patrimoniales y cultismos</h3><p>Las palabras que vienen del latín llegaron al castellano por dos caminos. Las <mark>patrimoniales</mark> se usaron siempre en la lengua hablada y cambiaron mucho con el tiempo: <i>oculum</i> → <b>ojo</b>, <i>filium</i> → <b>hijo</b>. Los <mark>cultismos</mark> se tomaron más tarde de los libros, casi sin cambios: <b>ocular</b>, <b>filial</b>. A veces una misma palabra latina dio las dos, y forman un <b>doblete</b>: <i>delicatum</i> → <b>delgado</b> (patrimonial) y <b>delicado</b> (cultismo); <i>clavem</i> → <b>llave</b> y <b>clave</b>.</p>`,
      svg: arbol("Dobletes: del latín oculum salen ojo y ocular; de clavem salen llave y clave", [["oculum", ["ojo", "ocular"], "var(--red)", ["patrimonial", "cultismo"]], ["clavem", ["llave", "clave"], "var(--pen)", ["patrimonial", "cultismo"]]]),
    },
    {
      html: `<h3>Las piezas de las palabras: raíces y afijos</h3><p>Muchas palabras se forman combinando piezas griegas o latinas. La <b>raíz</b> aporta el significado principal; los <b>prefijos</b> van delante y los <b>sufijos</b> detrás. Si conoces que <i>bio</i> es «vida» y <i>logía</i> «estudio», entiendes <mark>biología</mark>; con <i>geo</i> («tierra») formas geología y geografía (<i>grafía</i>, «escritura, descripción»). Del latín, <i>multi</i> («muchos») da <b>multicolor</b> y <b>multinacional</b>; <i>sub</i> («debajo») da <b>submarino</b> y <b>subterráneo</b>. Esta técnica sirve también en inglés, francés o italiano.</p>`,
      svg: rueda("La raíz griega bio, vida, forma biología, biografía, antibiótico y biosfera", "BIO = vida", [["biología", "var(--leaf)"], ["biografía", "var(--pen)"], ["antibiótico", "var(--red)"], ["biosfera", "var(--sun)"]], "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "Del indoeuropeo al castellano",
    svg: figCols("Esquema: del indoeuropeo salen el griego y el latín; del latín vulgar salen las lenguas romances", [["Indoeuropeo", ["hace 6.000 años", "sin escritura", "Europa y Asia", "muchas ramas"], "var(--muted)"], ["Griego", ["alfabeto con vocales", "ciencia y filosofía", "helenismos:", "teléfono, democracia"], "var(--pen)"], ["Latín", ["lengua de Roma", "culto y vulgar", "cultismos:", "ocular, clave"], "var(--red)"], ["Romances", ["castellano, gallego", "catalán, portugués", "francés, italiano", "rumano"], "var(--leaf)"]]),
  },
  video: { id: "ZpAdq8sb5iI", titulo: "Historia: origen y evolución del español o castellano", canal: "ESPAÑOLÉXICO", vistas: 951925, megusta: 0, busqueda: "del latín al castellano evolución" },
  quiz: [
    { q: "¿A qué familia pertenecen el griego y el latín?", o: ["Semítica", "Indoeuropea", "Uraloaltaica"], a: 1, e: "Igual que el inglés o el ruso." },
    { q: "¿Qué añadieron los griegos al alfabeto fenicio?", o: ["Las vocales", "Los números", "Las mayúsculas"], a: 0, e: "Así nació el primer alfabeto completo." },
    { q: "¿De qué latín proceden las lenguas romances?", o: ["Del latín culto", "Del latín vulgar", "Del griego"], a: 1, e: "El que hablaba el pueblo." },
    { q: "«Ojo» es una palabra…", o: ["patrimonial", "cultismo", "helenismo"], a: 0, e: "Cambió mucho desde oculum." },
    { q: "¿Qué significa la raíz griega «bio»?", o: ["Libro", "Vida", "Tierra"], a: 1, e: "Biología, biografía." },
  ],
  examen: [
    { q: "«Llave» y «clave» forman un…", o: ["doblete", "sinónimo", "prefijo"], a: 0, e: "Ambas de clavem." },
    { q: "¿Cuál NO es lengua romance?", o: ["Rumano", "Inglés", "Gallego"], a: 1, e: "El inglés es germánico." },
    { q: "«Geografía» significa literalmente…", o: ["descripción de la tierra", "estudio de la vida", "amor a la tierra"], a: 0, e: "Geo + grafía." },
  ],
  feynman: ["Qué es el indoeuropeo y qué lenguas salieron de él", "Cómo nació el alfabeto que usamos", "Cómo surgieron las lenguas romances", "Qué diferencia hay entre una palabra patrimonial y un cultismo"],
  mapa: mapa("LENGUAS CLÁSICAS", "var(--sun)", [
    ["Indoeuropeo", "griego · latín · inglés", "var(--muted)"],
    ["Alfabeto", "fenicio → griego → latino", "var(--pen)"],
    ["Romances", "del latín vulgar", "var(--red)"],
    ["Léxico", "raíces · prefijos · sufijos", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["Indoeuropeo", "Lengua prehistórica de la que proceden el griego, el latín y muchas otras."],
    ["Latín vulgar", "Latín hablado por el pueblo, origen de las lenguas romances."],
    ["Lenguas romances", "Castellano, gallego, catalán, portugués, francés, italiano, rumano…"],
    ["Cultismo", "Palabra tomada del latín escrito casi sin cambios: ocular."],
    ["Doblete", "Pareja patrimonial y cultismo de un mismo origen: llave / clave."],
  ],
  familias: ["Jugad a adivinar el significado de palabras largas descomponiéndolas: termómetro, hidroavión, cronómetro.", "Comparad cómo se dice una misma palabra en las lenguas romances que conozcáis.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El griego y el latín en la familia indoeuropea, el alfabeto, la formación de las lenguas romances y el léxico de origen grecolatino (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Escribir el propio nombre con el alfabeto griego.", "Diccionario etimológico de clase con palabras de otras materias.", "Mapa de las lenguas romances con una palabra común traducida."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Real Academia Española: Diccionario de la lengua española (etimologías)", url: "https://dle.rae.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Aplicar algunas reglas de evolución del latín al castellano", "Formar y explicar palabras con raíces griegas y latinas"],
  bloques: [
    { tras: "Del latín a las lenguas romances", html: `<h3>Algunas reglas de evolución</h3><p>El paso del latín al castellano siguió unas <b>reglas</b> bastante regulares. Conocerlas permite adivinar de dónde viene una palabra:</p>${tabla(["Regla", "Latín", "Castellano"], [["La -m final se pierde", "rosam", "rosa"], ["La e breve tónica → ie", "petram", "piedra"], ["La o breve tónica → ue", "portam", "puerta"], ["La f- inicial → h-", "filium, facere", "hijo, hacer"], ["Las consonantes sordas entre vocales sonorizan", "lupum, vitam", "lobo, vida"], ["El grupo -ct- → -ch-", "noctem, lactem", "noche, leche"], ["El grupo cl-, pl- inicial → ll-", "clamare, plenum", "llamar, lleno"]])}<p>Por eso en gallego o catalán, que no diptongan igual, se dice <i>porta</i> o <i>pedra</i>.</p>` },
    { tras: "Las piezas de las palabras: raíces y afijos", html: `<h3>Raíces griegas frecuentes</h3>${tabla(["Raíz", "Significa", "Ejemplos"], [["auto-", "uno mismo", "autobiografía, autónomo"], ["cronos", "tiempo", "cronómetro, crónica"], ["demos", "pueblo", "democracia, epidemia"], ["foto-", "luz", "fotografía, fotosíntesis"], ["hidro-", "agua", "hidratar, hidroavión"], ["-logía", "estudio, ciencia", "zoología, psicología"], ["poli-", "muchos", "polígono, polideportivo"], ["tele-", "lejos", "televisión, telescopio"], ["-fobia", "miedo, rechazo", "claustrofobia, aracnofobia"]])}`, video: { id: "qXEhws7YrUs", titulo: "Estos sufijos griegos te harán comprender mejor el español", canal: "ESPAÑOLÉXICO", vistas: 116301, megusta: 0 } },
    { tras: "Raíces griegas frecuentes", html: `<h3>Prefijos latinos y palabras del latín de hoy</h3><p>El latín aporta muchos <mark>prefijos</mark> de uso diario: <b>pre-</b> («antes»: prehistoria), <b>post-</b> («después»: posguerra), <b>inter-</b> («entre»: internacional), <b>re-</b> («de nuevo»: reciclar), <b>ex-</b> («fuera»: exportar), <b>in-</b> o <b>im-</b> («no» o «dentro»: imposible, importar), <b>bi-</b> («dos»: bicicleta) y <b>semi-</b> («medio»: semicírculo). Además, el latín presta palabras a los <b>números</b>, los <b>meses</b> y los <b>días</b>: <i>septiembre</i> era el mes séptimo del antiguo calendario romano (que empezaba en marzo), y <i>lunes</i>, <i>martes</i>, <i>miércoles</i>, <i>jueves</i> y <i>viernes</i> son los días de la Luna, Marte, Mercurio, Júpiter y Venus.</p>` },
    { tras: "Una gran familia: el indoeuropeo", html: `<h3>El latín en España: lenguas peninsulares</h3><p>En la península ibérica, el latín vulgar dio lugar a varias lenguas romances: <b>gallego</b> y <b>portugués</b> (que fueron una sola lengua en la Edad Media), <b>asturleonés</b>, <b>castellano</b>, <b>navarroaragonés</b> y <b>catalán</b>. El castellano se extendió hacia el sur durante la Reconquista y después por América, y hoy lo hablan más de 500 millones de personas. La única lengua de España que <mark>no procede del latín</mark> es el <b>euskera</b>, anterior a la llegada de los romanos y de origen todavía desconocido. Aun así, el euskera tomó del latín muchas palabras, como <i>gaztelu</i> (castillo, de <i>castellum</i>) o <i>liburu</i> (libro, de <i>librum</i>).</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica cómo evolucionó la palabra latina «factum» hasta «hecho».", pasos: ["La f- inicial se convierte en h-: factum → *hactum.", "El grupo -ct- se convierte en -ch-: *hacho.", "La -m final se pierde y la -u final pasa a -o; la a se cierra en e ante -ch-."], resultado: "factum → hecho (y el cultismo «factor» conserva la forma latina)." },
    { enunciado: "Deduce el significado de «cronófobo».", pasos: ["Cronos = tiempo.", "-fobo = que tiene miedo o rechazo.", "Une las piezas."], resultado: "Persona que tiene miedo o rechazo al paso del tiempo." },
    { enunciado: "Clasifica: «noche» y «nocturno».", pasos: ["Ambas vienen de noctem.", "«Noche» ha sufrido cambios (-ct- → -ch-): patrimonial.", "«Nocturno» conserva -ct-: cultismo."], resultado: "Noche, patrimonial; nocturno, cultismo." },
  ],
  errores: [
    "Pensar que el castellano viene del latín clásico de los libros: viene del latín vulgar.",
    "Creer que el inglés es una lengua romance: es germánica, aunque tiene muchas palabras latinas.",
    "Confundir prefijo (va delante) con sufijo (va detrás).",
    "Pensar que el euskera procede del latín.",
    "Confundir cultismo (palabra culta latina) con helenismo (palabra de origen griego).",
  ],
  ejercicios: [
    { q: "Escribe tres lenguas indoeuropeas que no sean romances.", sol: "Por ejemplo: inglés, alemán y ruso (también griego, irlandés, hindi…)." },
    { q: "¿Por qué se llama así el alfabeto?", sol: "Por sus dos primeras letras griegas: alfa y beta." },
    { q: "Nombra cinco lenguas romances.", sol: "Castellano, gallego, catalán, francés e italiano (también portugués y rumano)." },
    { q: "¿Qué es una palabra patrimonial? Pon un ejemplo.", sol: "La que viene del latín hablado y ha cambiado mucho: oculum → ojo." },
    { q: "Escribe el doblete de «delicatum».", sol: "Delgado (patrimonial) y delicado (cultismo)." },
    { q: "Aplica las reglas: «portam», «lupum», «plenum».", sol: "Puerta, lobo, lleno." },
    { q: "¿Qué significan «hidro», «poli» y «tele»?", sol: "Agua, muchos y lejos." },
    { q: "Forma dos palabras con el prefijo latino «inter-» y explica su significado.", sol: "Internacional (entre naciones) e intercambio (cambio entre dos o más)." },
    { q: "¿De qué dioses vienen los nombres de martes, jueves y viernes?", sol: "De Marte, Júpiter y Venus." },
    { q: "¿Qué lengua de España no procede del latín?", sol: "El euskera." },
  ],
  quiz: [
    { q: "«Lactem» dio en castellano…", o: ["leche", "lago", "lado"], a: 0, e: "-ct- → -ch-." },
    { q: "«Democracia» significa…", o: ["poder del pueblo", "estudio del pueblo", "miedo al pueblo"], a: 0, e: "Demos + kratos." },
    { q: "«Posguerra» lleva un prefijo que significa…", o: ["después", "antes", "contra"], a: 0, e: "Post-." },
    { q: "Septiembre era el mes…", o: ["séptimo", "noveno", "primero"], a: 0, e: "El año empezaba en marzo." },
    { q: "«Liburu» en euskera viene del latín…", o: ["librum", "liberum", "lupum"], a: 0, e: "Préstamo latino." },
  ],
  tarjetas: [
    ["f- → h-", "Regla de evolución: filium → hijo, facere → hacer."],
    ["-ct- → -ch-", "Regla de evolución: noctem → noche."],
    ["Helenismo", "Palabra de origen griego: teléfono, democracia."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Palabras con dos mil años", `<p>Abre un mensaje cualquiera de tu móvil y cuenta las palabras. Si es en castellano, catalán o gallego, casi todas tienen más de dos mil años: vienen del latín que hablaban los soldados, comerciantes y colonos romanos que llegaron a la península ibérica. <b>Agua</b> viene de <i>aquam</i>; <b>noche</b>, de <i>noctem</i>; <b>hijo</b>, de <i>filium</i>. Y muchas de las palabras «difíciles» que aprendes en el instituto, como <b>fotosíntesis</b>, <b>democracia</b> o <b>termómetro</b>, se construyeron con piezas griegas.</p><p>Las palabras son como fósiles vivos: llevan dentro su historia. Si sabes que <i>cardio</i> significa «corazón» y <i>-logía</i> «estudio», entenderás qué hace un cardiólogo aunque nunca hayas oído la palabra. Y si conoces algunas reglas de cambio, descubrirás que <b>hacer</b> y <b>fabricar</b>, o <b>llave</b> y <b>clave</b>, son en realidad la misma palabra latina que siguió dos caminos distintos. En este tema conocerás la gran familia de lenguas a la que pertenecemos, la historia del alfabeto, cómo el latín se convirtió en las lenguas romances y cómo usar raíces y afijos grecolatinos para ampliar tu vocabulario y deducir el significado de palabras nuevas.</p>`],
  mas: [
    ["<h3>El latín en España: lenguas peninsulares</h3>", `<p>Hoy son lenguas oficiales en sus territorios, junto al castellano, el <b>catalán</b> (y su variedad valenciana), el <b>gallego</b> y el <b>euskera</b>; el aranés, una variedad del occitano, es oficial en Cataluña. Todas, salvo el euskera, son romances. El euskera es la única lengua prerromana que sobrevivió en Europa occidental, aunque tomó muchas palabras del latín.</p>`],
    ["<h3>Algunas reglas de evolución</h3>", `<p>Estas reglas no se aplicaron por decreto: fueron cambios lentos de pronunciación que se extendieron durante siglos entre los hablantes. Por eso afectan a las palabras patrimoniales, que estaban vivas en la lengua hablada, y no a los cultismos, que se tomaron después directamente de los libros. Así se explica que <i>factum</i> diera <b>hecho</b> pero también exista el cultismo <b>facto</b> (en «de facto»).</p>`],
    ["<h3>Las piezas de las palabras: raíces y afijos</h3>", `<p>Hay que distinguir dos procedimientos. En la <b>derivación</b> se añade un prefijo o un sufijo a una raíz: <i>re-</i> + <i>escribir</i>. En la <b>composición</b> se unen dos raíces con significado propio: <i>tele</i> («lejos») + <i>visión</i>; <i>biblio</i> («libro») + <i>teca</i> («caja, lugar donde se guarda»). Muchas palabras científicas son compuestos grecolatinos creados en los últimos siglos.</p>`],
    ["<h3>Raíces griegas frecuentes</h3>", `<p>Conviene memorizar también algunas raíces del cuerpo humano, muy útiles en medicina: <b>cardio</b> (corazón), <b>neuro</b> (nervio), <b>derma</b> (piel), <b>gastro</b> (estómago), <b>oftalmo</b> (ojo), <b>oto</b> (oído), <b>pedi-</b> (niño, en pediatra) y <b>odonto</b> (diente). Con ellas puedes deducir que un dermatólogo cuida la piel y un otorrino, el oído y la nariz (<i>rhinos</i>).</p>`],
    ["<h3>Una gran familia: el indoeuropeo</h3>", `<p>No todas las lenguas del mundo son indoeuropeas. Hay otras grandes familias, como la <b>sino-tibetana</b> (chino), la <b>afroasiática</b> (árabe, hebreo, bereber), la <b>urálica</b> (finés, húngaro) o la <b>bantú</b> (suajili). Dentro de Europa, el húngaro, el finés, el estonio y el euskera no son indoeuropeos, y por eso sus palabras básicas no se parecen a las nuestras.</p>`],
    ["<h3>El alfabeto: de los fenicios a nosotros</h3>", `<p>Un <b>alfabeto</b> representa cada sonido con una letra, a diferencia de otros sistemas de escritura más antiguos, como los jeroglíficos egipcios o la escritura cuneiforme, que necesitaban cientos de signos para palabras o sílabas. Con solo unas veinte letras, cualquiera podía aprender a leer y escribir, y por eso el alfabeto se extendió rápidamente por todo el Mediterráneo.</p>`],
    ["<h3>Del latín a las lenguas romances</h3>", `<p>El cambio fue tan lento que nadie se dio cuenta de que hablaba una lengua nueva. Los primeros textos en los que ya se nota el romance son glosas, notas que algunos monjes escribían en los márgenes de textos latinos para entenderlos. Las <b>Glosas Emilianenses</b>, del monasterio de San Millán de la Cogolla (La Rioja), de hacia el siglo X-XI, son uno de esos primeros testimonios.</p>`],
    ["<h3>Palabras patrimoniales y cultismos</h3>", `<p>Los cultismos entraron sobre todo a partir de la Edad Media y del Renacimiento, cuando sabios, juristas, médicos y escritores necesitaron palabras para conceptos nuevos y las tomaron directamente del latín escrito. Por eso abundan en la ciencia, el derecho y la religión: <i>artículo</i>, <i>círculo</i>, <i>fórmula</i>, <i>espíritu</i>, <i>evidente</i>. Suelen ser esdrújulas o conservar grupos de consonantes latinos.</p>`],
  ],
  svgs: [
    ["<h3>El latín en España: lenguas peninsulares</h3>", "Lenguas romances peninsulares", [["Oeste", "gallego y portugués"], ["Centro", "asturleonés, castellano"], ["Este", "aragonés, catalán"]], "del latín vulgar"],
    ["<h3>Algunas reglas de evolución</h3>", "Reglas de evolución del latín", [["-m final cae", "rosam → rosa"], ["f- → h-", "farinam → harina"], ["-ct- → -ch-", "noctem → noche"]], "del latín al castellano"],
    ["<h3>Raíces griegas frecuentes</h3>", "Raíces griegas en palabras actuales", [["bio-", "vida: biología"], ["hidro-", "agua: hidratar"], ["-logía", "estudio: geología"]], "piezas griegas"],
    ["<h3>Prefijos latinos y palabras del latín de hoy</h3>", "Prefijos latinos frecuentes", [["pre-", "antes: prehistoria"], ["post-", "después: posguerra"], ["inter-", "entre: internacional"]], "piezas latinas"],
  ],
  bloques: [
    { tras: "<h3>Una gran familia: el indoeuropeo</h3>", html: `<h3>Cómo sabemos que son parientes</h3><p>Nadie escribió el indoeuropeo: es una lengua <b>reconstruida</b>. Los lingüistas del siglo XIX compararon palabras básicas de muchas lenguas y descubrieron parecidos demasiado regulares para ser casualidad. Fíjate en «padre»: en latín <i>pater</i>, en griego <i>patér</i>, en sánscrito (la lengua antigua de la India) <i>pitar</i>, en inglés <i>father</i> y en alemán <i>Vater</i>. O en «tres»: <i>tres</i>, <i>treis</i>, <i>trayas</i>, <i>three</i>, <i>drei</i>.</p><p>Las diferencias tampoco son caprichosas: siguen <mark>leyes fonéticas</mark>. Por ejemplo, donde el latín tiene <b>p</b>, las lenguas germánicas suelen tener <b>f</b> (<i>pater / father</i>, <i>pedem / foot</i>, <i>piscem / fish</i>). Este método, llamado <mark>comparativo</mark>, permitió agrupar las lenguas en ramas: itálica (latín y lenguas romances), helénica (griego), germánica (inglés, alemán), eslava (ruso, polaco), céltica (irlandés, galés), indoirania (persa, hindi) y otras. Casi la mitad de la humanidad habla hoy una lengua indoeuropea.</p>`, svg: ["Una palabra en varias lenguas", [["Latín", "pater, tres"], ["Griego", "patér, treis"], ["Inglés", "father, three"]], "«padre» y «tres»"], video: "familias" },
    { tras: "<h3>El alfabeto: de los fenicios a nosotros</h3>", html: `<h3>El alfabeto griego</h3><p>El alfabeto griego tiene <b>24 letras</b>, desde la <b>alfa</b> (α) hasta la <b>omega</b> (ω). Muchas se parecen a las nuestras (alfa, beta, épsilon, kappa), pero otras tienen formas propias: <b>gamma</b> (γ), <b>delta</b> (δ, Δ), <b>lambda</b> (λ), <b>pi</b> (π), <b>sigma</b> (σ, Σ), <b>fi</b> (φ), <b>psi</b> (ψ). Los romanos lo adaptaron a través de los etruscos y crearon el alfabeto latino, el que usamos nosotros. En Europa oriental, el alfabeto <b>cirílico</b> (ruso, búlgaro, serbio) también deriva del griego.</p><p>Las letras griegas siguen vivas en la ciencia: π (pi) es la relación entre la longitud de la circunferencia y su diámetro; Δ indica una variación; Σ, un sumatorio; Ω es el ohmio en electricidad; y los rayos α, β y γ son tipos de radiación. Decimos «de la A a la Z», pero en el Apocalipsis se dice «yo soy el alfa y la omega», el principio y el fin.</p>`, svg: ["Letras griegas en la ciencia", [["π pi", "circunferencia / diámetro"], ["Δ delta", "variación"], ["Ω omega", "ohmio, electricidad"]], "24 letras de alfa a omega"] },
    { tras: "<h3>Del latín a las lenguas romances</h3>", html: `<h3>Lo que el castellano no tomó del latín</h3><p>Aunque la base del castellano es latina, otras lenguas dejaron su huella. Las lenguas que se hablaban antes de los romanos forman el <mark>sustrato</mark>: del íbero, el celta o el vasco proceden palabras como <b>izquierda</b>, <b>pizarra</b>, <b>cerveza</b>, <b>perro</b> o <b>vega</b>. Los pueblos germánicos (visigodos y otros) aportaron vocabulario militar y algunos nombres: <b>guerra</b>, <b>tregua</b>, <b>ropa</b>, <b>guardia</b>, <b>Fernando</b> o <b>Gonzalo</b>.</p><p>La mayor aportación después del latín es la del <b>árabe</b>, hablado en al-Ándalus durante ocho siglos: más de 4.000 palabras, muchas con el artículo <i>al-</i> pegado: <b>aceite</b>, <b>almohada</b>, <b>alcalde</b>, <b>azúcar</b>, <b>algodón</b>, <b>ojalá</b>, <b>cero</b> o <b>álgebra</b>. Más tarde llegaron palabras del francés, el italiano, las lenguas de América (<b>chocolate</b>, <b>tomate</b>, <b>patata</b>) y, hoy, del inglés. Una lengua viva siempre toma préstamos, pero su esqueleto y la mayoría de sus palabras más frecuentes siguen siendo latinos.</p>`, svg: ["Aportaciones al castellano", [["Sustrato", "izquierda, perro, vega"], ["Germánico", "guerra, ropa, guardia"], ["Árabe", "aceite, almohada, cero"]], "además del latín"] },
    { tras: "<h3>Palabras patrimoniales y cultismos</h3>", html: `<h3>Dobletes y cambios de significado</h3><p>Cuando una misma palabra latina dio una forma patrimonial y otra culta, tenemos un <mark>doblete</mark>: <i>clavem</i> dio <b>llave</b> y <b>clave</b>; <i>delicatum</i>, <b>delgado</b> y <b>delicado</b>; <i>rapidum</i>, <b>raudo</b> y <b>rápido</b>; <i>auscultare</i>, <b>escuchar</b> y <b>auscultar</b>; <i>fabulam</i>, <b>habla</b> y <b>fábula</b>; <i>integrum</i>, <b>entero</b> e <b>íntegro</b>. Casi siempre la forma patrimonial es la más común y la culta tiene un sentido más técnico o abstracto.</p><p>Las palabras también cambian de <b>significado</b>. <i>Salarium</i> era la cantidad que se daba a los soldados para comprar sal, y hoy es la paga de cualquier trabajo. <i>Calculus</i> era una piedrecita para contar, y de ahí <b>calcular</b> (y los cálculos del riñón). <i>Testa</i> era una vasija de barro y, en broma, pasó a designar la cabeza: <b>testa</b> y el catalán <b>cap</b>, que viene de <i>caput</i>. Investigar la <mark>etimología</mark> de una palabra es descubrir una pequeña historia.</p>`, svg: ["Dobletes: una palabra, dos caminos", [["clavem", "llave / clave"], ["delicatum", "delgado / delicado"], ["fabulam", "habla / fábula"]], "patrimonial / cultismo"] },
    { html: `<h3>Sufijos grecolatinos y cómo deducir significados</h3><p>Algunos sufijos y elementos finales aparecen en cientos de palabras. Del griego: <b>-itis</b> (inflamación: <i>otitis</i>, <i>apendicitis</i>), <b>-algia</b> (dolor: <i>neuralgia</i>), <b>-cracia</b> (poder: <i>aristocracia</i>), <b>-fobia</b> (miedo, rechazo: <i>claustrofobia</i>), <b>-filia</b> (afición: <i>cinefilia</i>), <b>-teca</b> (lugar donde se guarda: <i>discoteca</i>). Del latín: <b>-cida</b> (que mata: <i>insecticida</i>), <b>-voro</b> (que come: <i>herbívoro</i>), <b>-fero</b> (que lleva: <i>mamífero</i>), <b>-forme</b> (con forma de: <i>uniforme</i>).</p><p>Para deducir el significado de una palabra desconocida sigue tres pasos: <b>1)</b> divídela en piezas; <b>2)</b> busca el significado de cada pieza; <b>3)</b> únelas y comprueba si la definición tiene sentido en la frase. Por ejemplo, <i>xenofobia</i>: <i>xeno</i> («extranjero») + <i>fobia</i> («rechazo») = rechazo a los extranjeros. Es una estrategia muy útil en los exámenes y en la lectura de textos científicos.</p>`, svg: ["Deducir el significado de una palabra", [["1 Dividir", "xeno + fobia"], ["2 Traducir", "extranjero + rechazo"], ["3 Unir", "rechazo al extranjero"]]] },
  ],
  videos: [["<h3>Del latín a las lenguas romances</h3>", "romances"]],
  ejemplos: [
    ["Deduce el significado de «hidrofobia» y de «carnívoro».", ["Hidrofobia: hidro («agua») + fobia («miedo»): miedo al agua.", "Carnívoro: carni («carne») + voro («que come»): que come carne."], "Miedo al agua; que se alimenta de carne."],
    ["Explica la evolución de «filium» a «hijo».", ["Se pierde la -m final: filiu.", "La -u final se abre en -o: filio.", "La f- inicial pasa a h-: hilio.", "El grupo -li- + vocal da el sonido j: hijo."], "filium → hijo."],
    ["¿«Llave» y «clave» son palabras patrimoniales o cultas?", ["Ambas vienen de clavem.", "Llave sufrió los cambios regulares (cl- → ll-): es patrimonial.", "Clave conserva la forma latina: es un cultismo."], "Forman un doblete: llave (patrimonial) y clave (cultismo)."],
  ],
  errores: ["Pensar que todas las palabras del castellano vienen del latín: hay préstamos del árabe, de lenguas prerromanas, germánicas, americanas y del inglés."],
  niveles: "bbbbmmbmmb",
  ejercicios: [
    ["b", "¿Cuántas letras tiene el alfabeto griego? ¿Cuáles son la primera y la última?", "24 letras; la primera es alfa y la última, omega."],
    ["b", "Escribe tres palabras de origen árabe.", "Por ejemplo: aceite, almohada y azúcar (también alcalde, algodón, cero, ojalá)."],
    ["b", "¿Qué significan los sufijos -itis, -cida y -voro?", "-itis: inflamación; -cida: que mata; -voro: que come."],
    ["b", "Escribe el doblete de «rapidum» y de «integrum».", "Raudo / rápido; entero / íntegro."],
    ["b", "¿Qué es una lengua reconstruida?", "Una lengua de la que no hay textos escritos y que los lingüistas deducen comparando las lenguas que proceden de ella, como el indoeuropeo."],
    ["m", "Explica qué es el método comparativo con un ejemplo.", "Comparar palabras básicas de varias lenguas para descubrir correspondencias regulares: pater, patér, pitar, father y Vater muestran que el latín, el griego, el sánscrito, el inglés y el alemán tienen un origen común."],
    ["m", "Explica el origen de la palabra «salario».", "Viene de salarium, la cantidad que se daba a los soldados romanos para comprar sal; luego pasó a significar el pago de cualquier trabajo."],
    ["m", "Divide en piezas y explica: «biblioteca», «telescopio», «geografía».", "Biblio (libro) + teca (lugar donde se guarda); tele (lejos) + scopio (mirar); geo (tierra) + grafía (descripción)."],
    ["m", "¿Qué diferencia hay entre derivación y composición? Pon un ejemplo de cada una.", "Derivación: raíz + afijo (re + hacer = rehacer). Composición: dos raíces con significado (foto + grafía = fotografía)."],
    ["m", "¿Qué es el sustrato? Cita dos palabras de sustrato prerromano.", "Las huellas que dejan en una lengua las lenguas habladas antes en ese territorio. Ejemplos: izquierda, pizarra, perro, vega."],
    ["m", "Aplica las reglas de evolución a «factum» y «oculum».", "Factum → hecho (f- → h-, -ct- → -ch-, -um → -o); oculum → ojo (pérdida de la vocal interior, -cl- → j, -um → -o)."],
    ["m", "Explica por qué el euskera es una lengua especial en Europa occidental.", "Porque no es indoeuropea: es la única lengua prerromana que sobrevivió a la romanización, aunque tomó muchas palabras del latín."],
    ["m", "Escribe el significado de las letras griegas π, Δ y Ω en ciencia.", "π: relación entre la longitud de la circunferencia y su diámetro; Δ: variación o incremento; Ω: ohmio, unidad de resistencia eléctrica."],
    ["a", "Deduce el significado de: «antropófago», «policromía», «homófono», «gastritis».", "Antropófago: que come seres humanos (anthropos + phagein). Policromía: muchos colores (poli + croma). Homófono: de igual sonido (homo + fono). Gastritis: inflamación del estómago (gastro + itis)."],
    ["a", "Inventa una palabra con piezas grecolatinas para un invento futuro y define su significado.", "Respuesta abierta. Ejemplo: «hidrófago», máquina que «se come» el agua contaminada; «cronoscopio», aparato para mirar el tiempo pasado."],
    ["a", "Explica por qué «hecho» y «facto» proceden de la misma palabra pero tienen forma distinta.", "Hecho es patrimonial: se usó siempre en la lengua hablada y sufrió los cambios f- → h- y -ct- → -ch-. Facto es un cultismo tomado más tarde de los textos latinos, sin esos cambios."],
    ["a", "La palabra inglesa «foot» y la latina «pedem» están emparentadas. Explica cómo puede ser.", "Ambas vienen de una raíz indoeuropea. Las lenguas germánicas cambiaron de forma regular la p- en f- (ley fonética), y la d en t: por eso pedem / foot, como pater / father."],
    ["a", "Compara las aportaciones del latín, del árabe y del inglés al castellano.", "El latín es la base: gramática y la mayoría del vocabulario frecuente. El árabe aportó unas 4.000 palabras de agricultura, ciencia, administración y vida cotidiana. El inglés aporta hoy términos de tecnología, deporte y ocio. Solo el latín es el origen de la lengua; los demás son préstamos."],
    ["a", "Busca la etimología de tu nombre o de tu localidad y explícala.", "Respuesta abierta. Ejemplo: Valencia, de Valentia («fuerza, vigor»), colonia romana; Zaragoza, de Caesaraugusta, ciudad dedicada a César Augusto."],
    ["a", "¿Por qué crees que la ciencia sigue creando palabras con raíces griegas y latinas?", "Porque son comunes a muchos idiomas, permiten crear términos precisos y transparentes para los especialistas de cualquier país y forman parte de una tradición científica que empezó en griego y latín."],
    ["a", "Explica el cambio de significado de «calculus» y de «testa».", "Calculus era una piedrecita para contar; dio calcular y también cálculo renal. Testa era una vasija de barro y, en tono humorístico, pasó a significar cabeza."],
  ],
  cuartas: ["Bantú", "Los acentos", "Del árabe", "germanismo", "Agua", "lata", "amor al pueblo", "entre", "duodécimo", "lucem", "sufijo", "Italiano", "miedo a la tierra"],
  quiz: [
    ["El alfabeto griego tiene…", ["24 letras", "27 letras", "22 letras", "30 letras"], 0, "De alfa a omega."],
    ["«Padre» en inglés es «father» por una regla que cambia…", ["p en f", "t en d", "a en e", "r en l"], 0, "Pater / father, piscem / fish."],
    ["¿Qué alfabeto deriva también del griego?", ["El cirílico", "El árabe", "El chino", "El hebreo"], 0, "Ruso, búlgaro, serbio."],
    ["«Aceite» y «almohada» proceden del…", ["árabe", "latín", "celta", "inglés"], 0, "Muchas llevan el artículo al-."],
    ["«Guerra» y «ropa» son de origen…", ["germánico", "griego", "árabe", "íbero"], 0, "Aportación de visigodos y otros pueblos."],
    ["El sufijo -fobia significa…", ["miedo o rechazo", "amor", "estudio", "inflamación"], 0, "Claustrofobia, xenofobia."],
    ["«Salario» viene de…", ["la sal", "el sol", "la sala", "salir"], 0, "Pago a los soldados para comprar sal."],
    ["Un doblete de «fabulam» es…", ["habla / fábula", "fabada / fábula", "hablar / fallar", "fama / fábula"], 0, "Patrimonial y cultismo."],
    ["«Herbívoro» significa…", ["que come hierba", "que mata hierba", "que lleva hierba", "con forma de hierba"], 0, "-voro: que come."],
    ["El indoeuropeo es una lengua…", ["reconstruida", "escrita en tablillas", "hablada hoy", "romance"], 0, "No dejó textos."],
  ],
  examen: [
    ["«Otitis» significa…", ["inflamación del oído", "dolor de ojos", "miedo al oído", "estudio del oído"], 0, "Oto + itis."],
    ["¿Qué palabra es de sustrato prerromano?", ["izquierda", "aceite", "guerra", "chocolate"], 0, "Probablemente vasca."],
    ["El primer paso para deducir una palabra es…", ["dividirla en piezas", "buscarla en inglés", "pronunciarla", "contar sus letras"], 0, "Luego se traduce cada pieza."],
    ["«Chocolate» y «tomate» proceden de…", ["lenguas de América", "el árabe", "el latín", "el griego"], 0, "Del náhuatl."],
    ["La letra Σ se usa en matemáticas para…", ["sumatorios", "ángulos", "el número pi", "la resistencia"], 0, "Sigma mayúscula."],
  ],
  tarjetas: [["Método comparativo", "Comparar lenguas para descubrir su origen común."], ["Sustrato", "Huella de las lenguas anteriores en una lengua nueva."], ["Etimología", "Origen e historia de una palabra."], ["-itis", "Sufijo griego: inflamación (otitis)."]],
  glosario: [["Indoeuropeo", "Lengua reconstruida de la que proceden casi todas las de Europa."], ["Lengua romance", "Lengua nacida del latín vulgar."], ["Latín vulgar", "Latín hablado por el pueblo."], ["Palabra patrimonial", "Palabra latina que evolucionó en la lengua hablada."], ["Cultismo", "Palabra tomada del latín escrito con pocos cambios."], ["Doblete", "Pareja patrimonial y culta de un mismo étimo."], ["Étimo", "Palabra de la que procede otra."], ["Etimología", "Estudio del origen de las palabras."], ["Sustrato", "Influencia de una lengua anterior sobre otra."], ["Préstamo", "Palabra tomada de otra lengua."], ["Raíz", "Parte de la palabra que aporta el significado principal."], ["Prefijo", "Pieza que se coloca delante de la raíz."], ["Sufijo", "Pieza que se coloca detrás de la raíz."], ["Composición", "Unión de dos raíces para formar una palabra."]],
  situacion: { titulo: "El diccionario etimológico de la clase", reto: "Crear un diccionario ilustrado con la historia de las palabras que más usamos.", pasos: ["Cada alumno elige cinco palabras frecuentes (de casa, del deporte, de la ciencia).", "Buscar su etimología en un diccionario fiable (DLE de la RAE o Corominas).", "Clasificarlas: patrimonial, cultismo, compuesto grecolatino o préstamo de otra lengua.", "Explicar los cambios de forma o de significado y hacer un dibujo.", "Reunir todas las fichas en orden alfabético y presentarlas en un juego de adivinar el origen."], producto: "Diccionario etimológico ilustrado de la clase.", evaluacion: ["La etimología es correcta y la fuente es fiable.", "La clasificación de cada palabra es adecuada.", "Explica los cambios con las reglas aprendidas.", "La ficha es clara y creativa."] },
  familias: ["Jugad a dividir en piezas palabras de los prospectos de medicamentos (analgésico, antiinflamatorio) y adivinad qué significan."],
  saberes: "el origen del alfabeto, las lenguas indoeuropeas y romances, la evolución fonética y el léxico grecolatino.",
  minutos: 100,
});
