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
