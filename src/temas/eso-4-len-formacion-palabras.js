// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Formación de palabras y léxico",
  minutos: 35,
  objetivos: ["Separar una palabra en lexema y morfemas", "Distinguir derivación, composición y parasíntesis", "Conocer siglas, acrónimos, préstamos y otras formas de crear léxico"],
  claves: ["lexema", "morfema", "prefijo", "sufijo", "derivación", "composición", "parasíntesis", "acrónimo", "préstamo"],
  pregunta: {
    texto: "«Ensuciar», «sacacorchos», «ovni» e «hiperconectado». Ninguna existía hace mil años. ¿De dónde salen las palabras nuevas?",
    respuesta: "Se fabrican con piezas que ya existen: añadiendo <mark>prefijos y sufijos</mark> (hiper-conect-ado), uniendo <mark>dos palabras</mark> (saca + corchos), con prefijo y sufijo a la vez (en-suci-ar) o con <mark>iniciales</mark> (OVNI). La lengua es un juego de construcción.",
  },
  bloques: [
    {
      html: `<h3>Las piezas de la palabra</h3><p>El <b>lexema</b> (o raíz) lleva el significado principal: <i>pan</i> en «panadero». Los <b>morfemas</b> se añaden: los <mark>flexivos</mark> marcan género, número, persona o tiempo (pan-<b>es</b>); los <mark>derivativos</mark> crean palabras nuevas: prefijos delante (<b>re</b>-hacer) y sufijos detrás (pan-<b>adero</b>).</p>`,
      svg: L.frase("Panaderas separada en lexema, sufijo y morfemas de género y número", [
        ["pan", "lexema", "var(--pen)"], ["ader", "sufijo", "var(--leaf)"], ["a", "género", "var(--red)"], ["s", "número", "var(--inf)"],
      ], "pan-ader-a-s"),
    },
    {
      html: `<h3>Derivación</h3><p>Se añade un <b>prefijo</b> o un <b>sufijo</b> a un lexema: <i>des</i>-hacer, <i>in</i>-útil, flor-<i>ista</i>, rápida-<i>mente</i>. Los sufijos pueden cambiar la categoría (amable → amabil<i>idad</i>) o dar un matiz: diminutivos (-ito), aumentativos (-ón) y despectivos (-ucho).</p>`,
      svg: L.filas("Prefijos y sufijos con su significado", [
        ["des-, in-", "negación: deshacer", "var(--red)"], ["re-", "repetición: releer", "var(--pen)"],
        ["-ero, -ista", "oficio: florista", "var(--leaf)"], ["-ito, -ón", "tamaño: casita", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Composición</h3><p>Se unen <mark>dos o más palabras</mark> o lexemas: <b>sacacorchos</b> (saca + corchos), <b>agridulce</b>, <b>pelirrojo</b>. También hay compuestos con guion (<i>franco-alemán</i>) y compuestos sintagmáticos que se escriben separados pero funcionan como una sola palabra (<i>ojo de buey</i>, <i>fin de semana</i>).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Composición: saca más corchos da sacacorchos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-weight="700" text-anchor="middle">
          <rect x="16" y="30" width="80" height="40" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="56" y="56" font-size="16" fill="var(--pen)">saca</text>
          <text x="118" y="58" font-size="22" fill="var(--muted)">+</text>
          <rect x="140" y="30" width="104" height="40" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="192" y="56" font-size="16" fill="var(--leaf)">corchos</text>
          <path d="M130 80 V 104" stroke="var(--muted)" stroke-width="3"/><path d="M124 98 l 6 8 l 6 -8" fill="none" stroke="var(--muted)" stroke-width="3"/>
          <rect x="50" y="114" width="160" height="44" rx="12" fill="var(--pen)"/><text x="130" y="143" font-size="18" fill="#fff" ${D}>sacacorchos</text>
        </g></svg>`,
    },
    {
      html: `<h3>Parasíntesis</h3><p>Una palabra es <b>parasintética</b> cuando se forma <mark>a la vez</mark> con prefijo y sufijo, o con composición y sufijo: <i>en-suci-ar</i>, <i>a-tard-ecer</i>, <i>quince-añ-ero</i>. Prueba: si quitas solo el prefijo o solo el sufijo, lo que queda no existe: no hay «*tardecer» ni «*atarde».</p>`,
      svg: L.frase("Atardecer: prefijo a, lexema tard y sufijo ecer al mismo tiempo", [
        ["a", "prefijo", "var(--red)"], ["tard", "lexema", "var(--pen)"], ["ecer", "sufijo", "var(--leaf)"],
      ], "*atarde ✗ · *tardecer ✗ → parasintética"),
    },
    {
      html: `<h3>Otras formas de crear léxico</h3><p><b>Siglas</b>: iniciales que se deletrean (ONG, DNI). <b>Acrónimos</b>: se leen como una palabra (ovni, láser, sida). <b>Acortamientos</b>: profe, bici, cole. <b>Préstamos</b> de otras lenguas: fútbol (inglés), almohada (árabe), chocolate (náhuatl). <b>Neologismos</b>: palabras recién creadas como «tuitear».</p>`,
      svg: L.tabla("Siglas, acrónimos, acortamientos y préstamos", ["Recurso", "Ejemplo"], [
        ["Sigla", "DNI · ONU"], ["Acrónimo", "ovni · láser"], ["Acortamiento", "bici · profe"], ["Préstamo", "fútbol · zapping"],
      ]),
    },
  ],
  figura: {
    titulo: "Cuatro maneras de fabricar palabras",
    svg: L.columnas("Derivación, composición, parasíntesis y acronimia con ejemplos", [
      ["lexema + afijo", "DERIVACIÓN", ["des + hacer", "flor + ista"], "var(--pen)"],
      ["palabra + palabra", "COMPOSICIÓN", ["saca + corchos", "pel(o) + i + rojo"], "var(--leaf)"],
      ["prefijo y sufijo a la vez", "PARASÍNTESIS", ["en + suci + ar", "a + tard + ecer"], "var(--red)"],
      ["iniciales", "SIGLAS", ["ONG · ovni", "láser"], "var(--inf)"],
    ]),
  },
  video: { id: "1EWHRCHGmUU", titulo: "Procedimientos de formación de palabras: derivación, composición y parasíntesis", canal: "Lengua de taco", vistas: 140607, megusta: 2496, busqueda: "formación de palabras derivación composición parasíntesis" },
  quiz: [
    { q: "En «zapatería», el lexema es…", o: ["zapat-", "-ería", "zapatería"], a: 0, e: "«Zapat-» aporta el significado; «-ería» es sufijo (lugar)." },
    { q: "«Paraguas» es una palabra…", o: ["derivada", "compuesta", "parasintética"], a: 1, e: "Une dos palabras: para + aguas." },
    { q: "«Enrojecer» es…", o: ["derivada por sufijo", "compuesta", "parasintética"], a: 2, e: "Se forma con en- y -ecer a la vez: no existen «*enrojo» ni «*rojecer»." },
    { q: "«Láser» es…", o: ["un acrónimo", "un acortamiento", "una palabra compuesta"], a: 0, e: "Viene de las iniciales inglesas de una frase y se lee como una palabra." },
    { q: "En «niñas», «-s» es un morfema…", o: ["derivativo", "flexivo de número", "prefijo"], a: 1, e: "Marca el plural sin crear una palabra nueva." },
  ],
  examen: [
    { q: "¿Qué palabra es un préstamo del inglés?", o: ["almohada", "fútbol", "tomate"], a: 1, e: "«Fútbol» viene de «football»; «almohada» es del árabe y «tomate» del náhuatl." },
    { q: "El prefijo «re-» en «releer» significa…", o: ["repetición", "negación", "tamaño"], a: 0, e: "Releer es volver a leer." },
    { q: "«Profe» es un caso de…", o: ["acortamiento", "sigla", "composición"], a: 0, e: "Se acorta «profesor»." },
  ],
  feynman: ["La diferencia entre lexema y morfema", "Qué es derivar y qué es componer", "Cómo saber si una palabra es parasintética", "La diferencia entre sigla y acrónimo"],
  mapa: mapa("FORMAR PALABRAS", "var(--eso)", [
    ["Derivación", "prefijos y sufijos", "var(--pen)"],
    ["Composición", "palabra + palabra", "var(--leaf)"],
    ["Parasíntesis", "prefijo + sufijo a la vez", "var(--red)"],
    ["Otros", "siglas · préstamos", "var(--inf)"],
  ]),
  tarjetas: [
    ["¿Qué es el lexema?", "La parte de la palabra que lleva el significado principal."],
    ["Morfemas derivativos", "Prefijos y sufijos que forman palabras nuevas."],
    ["Palabra parasintética", "La formada a la vez con prefijo y sufijo (o composición y sufijo): entristecer."],
    ["Sigla y acrónimo", "La sigla se deletrea (DNI); el acrónimo se lee como una palabra (ovni)."],
    ["Préstamo", "Palabra tomada de otra lengua: fútbol, almohada, chocolate."],
  ],
  familias: ["Elegid una palabra (por ejemplo, «mar») y competid a ver quién forma más palabras de su familia.", "Buscad en el envase de un producto siglas y préstamos del inglés.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: procedimientos de formación de palabras y relaciones léxicas (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Concurso de familias léxicas con diccionario.", "Inventar neologismos para objetos nuevos y explicar el procedimiento usado.", "Rastrear préstamos del árabe, el inglés y las lenguas americanas en el DLE."],
  },
  fuentes: [
    L.BOE,
    { t: "Diccionario de la lengua española (RAE)", url: "https://dle.rae.es/" },
    { t: "Morfología lingüística, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Morfolog%C3%ADa_ling%C3%BC%C3%ADstica" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Conocer el significado de los prefijos y sufijos más frecuentes, también los de origen griego y latino", "Reconocer neologismos, préstamos adaptados y extranjerismos crudos"],
  bloques: [
    { tras: "Las piezas de la palabra", html: `<h3>Palabras simples, derivadas y compuestas</h3><p>Según su estructura, las palabras pueden ser:</p>${L.tb(["Clase", "Estructura", "Ejemplos"], [["Simple", "un lexema (+ morfemas flexivos)", "mar, casa-s, cant-amos"], ["Derivada", "lexema + morfemas derivativos", "mar-ino, en-casa-r"], ["Compuesta", "dos o más lexemas", "bocacalle, abrelatas"], ["Parasintética", "prefijo + lexema + sufijo a la vez, o compuesto + sufijo", "en-carcel-ar, pica-pedr-ero"]])}<p>Las palabras que comparten lexema forman una <b>familia léxica</b>: <i>mar, marino, marinero, maremoto, amerizar, ultramar</i>. Construir familias es la mejor forma de ampliar vocabulario y de acertar con la ortografía: si «hierba» lleva h, también «herbívoro» y «herbolario».</p>` },
    { tras: "Derivación", html: `<h3>Prefijos y sufijos frecuentes</h3>${L.tb(["Prefijo", "Significado", "Ejemplo"], [["a-, an-, in-, des-", "negación", "anormal, inútil, deshacer"], ["re-", "repetición", "releer"], ["pre-, ante-", "antes", "prehistoria, anteayer"], ["sub-, infra-", "debajo", "subterráneo"], ["super-, hiper-", "encima, exceso", "supermercado, hiperactivo"], ["inter-", "entre", "internacional"], ["anti-", "contra", "antivirus"]])}${L.tb(["Sufijo", "Forma…", "Ejemplo"], [["-ción, -miento, -dad, -eza", "sustantivos abstractos", "creación, cansancio, bondad, belleza"], ["-ero, -ista, -or", "oficios o agentes", "panadero, dentista, pintor"], ["-oso, -able, -al", "adjetivos", "lluvioso, amable, mundial"], ["-izar, -ear, -ecer", "verbos", "organizar, golpear, oscurecer"], ["-mente", "adverbios", "rápidamente"]])}` },
    { tras: "Composición", html: `<h3>Raíces griegas y latinas</h3><p>Muchos tecnicismos se forman con raíces clásicas. Si conoces unas pocas, entenderás cientos de palabras sin diccionario:</p>${L.tb(["Raíz", "Significa", "Ejemplos"], [["bio-", "vida", "biología, biografía"], ["geo-", "tierra", "geografía, geología"], ["-logía", "estudio, ciencia", "zoología, psicología"], ["-grafía", "escritura, descripción", "ortografía, caligrafía"], ["tele-", "lejos", "teléfono, telescopio"], ["-fono", "sonido", "micrófono, afónico"], ["hidro-", "agua", "hidratar, hidroavión"], ["-cida", "que mata", "insecticida, homicida"]])}<p>Estas palabras se llaman <b>cultismos</b> cuando entran en la lengua directamente del latín o del griego, sin la evolución popular: «oculista» (culto) frente a «ojo» (patrimonial), ambas del latín <i>oculus</i>.</p>` },
    { tras: "Otras formas de crear léxico", html: `<h3>Préstamos y neologismos</h3><p>Un <b>neologismo</b> es una palabra nueva, creada para nombrar una realidad nueva: <i>tuitear, teletrabajo, ciberacoso</i>. Muchos llegan de otras lenguas como <b>préstamos</b>. Hay dos situaciones:</p><ul><li><b>Préstamo adaptado</b>: se escribe según nuestra ortografía: <i>fútbol, chófer, eslogan, espray, wifi, bufé</i>.</li><li><b>Extranjerismo crudo</b>: conserva la forma original y se escribe <b>en cursiva</b> (o entre comillas a mano): <i>software, pizza, ballet, smartphone</i>.</li></ul><p>La RAE y la Fundéu recomiendan usar la palabra española si existe y es igual de clara: <mark>«correo electrónico» por «e-mail», «aficionado» por «fan», «fecha límite» por «deadline»</mark>. Los préstamos según su origen se llaman anglicismos, galicismos (del francés: <i>bulevar</i>), arabismos (<i>aceite</i>), italianismos (<i>soneto</i>) o americanismos (<i>chocolate</i>, del náhuatl).</p>` },
    { tras: "Otras formas de crear léxico", html: `<h3>Cómo analizar una palabra</h3><ol><li><b>Busca el lexema</b>: la parte que comparte con su familia (<i>pan</i>-adería, <i>pan</i>-ecillo).</li><li><b>Separa los morfemas flexivos</b> del final: género, número, persona, tiempo (panader-<b>a</b>-<b>s</b>).</li><li><b>Separa los derivativos</b>: prefijos delante y sufijos detrás del lexema.</li><li><b>Clasifica</b>: simple, derivada, compuesta o parasintética.</li><li><b>Comprueba la parasíntesis</b>: quita el prefijo y, aparte, el sufijo; si ninguna de las dos formas existe, es parasintética.</li></ol><p>Ejemplo: <i>des-orden-ad-o-s</i>: prefijo des-, lexema orden, sufijo -ad-, flexivos -o (masculino) y -s (plural).</p>` },
    { tras: "Otras formas de crear léxico", html: `<h3>Las relaciones de significado</h3><p>El léxico no solo se forma: también se organiza por el significado. <b>Sinónimos</b> son palabras de significado parecido (<i>empezar, comenzar, iniciar</i>); <b>antónimos</b>, de significado opuesto (<i>frío / caliente</i>, <i>vivo / muerto</i>, <i>comprar / vender</i>). Las palabras <b>polisémicas</b> tienen varios significados relacionados (<i>la sierra</i> de cortar y <i>la sierra</i> de montañas, por la forma dentada); las <b>homónimas</b> se escriben o suenan igual pero vienen de palabras distintas (<i>vino</i> de beber y <i>vino</i> de venir; <i>vaca</i> y <i>baca</i>).</p><p>Un <b>hiperónimo</b> incluye a otros, sus <b>hipónimos</b>: <i>mueble</i> → silla, mesa, armario. Y un <b>campo semántico</b> reúne palabras de la misma categoría que se reparten un significado: los días de la semana o los colores. Estas relaciones son la base de la cohesión léxica de los textos.</p>` },
  ],
  videos: [
    ["Derivación", L.vid("CFOB_zJ1_DQ", "Prefijos y sufijos", "Profe Marilin", 677918)],
    ["Otras formas de crear léxico", L.vid("1HZ-ASkF3JU", "Diferencia entre siglas y acrónimos", "unProfesor", 133173)],
  ],
  ejemplos: [
    ["Analiza la palabra «inmovilizaremos».", ["Lexema: mov- (de mover, móvil).", "Prefijo: in- (negación). Sufijos derivativos: -il- (forma el adjetivo móvil) e -iz- (forma el verbo inmovilizar).", "Morfemas flexivos: -a-re- (vocal temática y futuro) y -mos (1.ª persona del plural).", "Es derivada: tiene prefijo y sufijos, pero existe «movilizar» sin el prefijo."], "in-mov-il-iz-a-re-mos: palabra derivada (no parasintética, porque «movilizar» existe)."],
    ["Decide si «aterrizar» es parasintética.", ["Partes: a- + tierr(a) + -izar.", "Quitamos el prefijo: «*terrizar» no existe.", "Quitamos el sufijo: «*aterra» no existe con este significado."], "sí, es parasintética: prefijo y sufijo se añaden a la vez."],
    ["Forma la familia léxica de «flor».", ["Busca derivadas con sufijos: florero, florista, floral, florecer, floración.", "Con prefijos: desflorar (también parasintética).", "Compuesta: coliflor (col + flor). Ojo: «floja» no es de la familia, aunque se parezca, porque no tiene el lexema flor."], "flor, florero, florista, floral, florecer, floración, floristería, coliflor."],
  ],
  errores: [
    "Confundir el morfema flexivo (cambia la forma: niño/niña) con el derivativo (crea otra palabra: niñera).",
    "Llamar parasintética a cualquier palabra con prefijo y sufijo: hay que comprobar que no existen las formas intermedias.",
    "Escribir los extranjerismos crudos en redonda: van en cursiva.",
    "Confundir siglas (se deletrean: DNI) con acrónimos (se leen como palabra: ovni).",
    "Pensar que «girasol» y «sacapuntas» son derivadas: son compuestas (dos lexemas).",
  ],
  ejercicios: [
    ["Separa los morfemas de «panaderas».", "pan (lexema) + -ader- (sufijo derivativo) + -a (femenino) + -s (plural)."],
    ["Clasifica: «portaaviones», «deshonesto», «enrojecer», «sol».", "Portaaviones: compuesta. Deshonesto: derivada (des- + honesto). Enrojecer: parasintética. Sol: simple."],
    ["Escribe tres palabras con el prefijo «sub-» y su significado.", "Submarino (bajo el mar), subsuelo (bajo el suelo), subrayar (trazar una raya debajo)."],
    ["¿Qué significan «hidrofobia» y «geocéntrico»?", "Hidrofobia: miedo o rechazo al agua (hidro- agua, -fobia miedo). Geocéntrico: con la Tierra en el centro (geo- tierra)."],
    ["Forma un sustantivo abstracto a partir de: feliz, cansar, débil.", "Felicidad, cansancio, debilidad."],
    ["Di si es sigla, acrónimo o acortamiento: ONU, radar, cine, UE.", "ONU: sigla que se lee como palabra (acrónimo de siglas). Radar: acrónimo. Cine: acortamiento de cinematógrafo. UE: sigla deletreada."],
    ["Sustituye el anglicismo: «Hicimos un brainstorming antes del deadline».", "«Hicimos una lluvia de ideas antes de la fecha límite.»"],
    ["Escribe dos préstamos adaptados del inglés y dos extranjerismos crudos.", "Adaptados: fútbol, líder, mitin, eslogan. Crudos (en cursiva): software, rock, show, marketing."],
    ["¿Es parasintética «enamorar»? Justifica.", "Sí: en- + amor + -ar. «*Amorar» no existe y «*enamor» tampoco."],
    ["Explica por qué «oculista» es un cultismo.", "Porque procede directamente del latín oculus sin la evolución popular que dio «ojo»; se mantiene la forma culta ocul-."],
  ],
  quiz: [
    ["El prefijo «anti-» significa…", ["contra", "antes", "debajo"], 0, "Antivirus: contra los virus."],
    ["«-logía» significa…", ["estudio o ciencia", "miedo", "sonido"], 0, "Biología: estudio de la vida."],
    ["Un extranjerismo crudo se escribe…", ["en cursiva", "con mayúsculas", "con tilde siempre"], 0, "Por ejemplo, software."],
    ["«Florecer» es una palabra…", ["derivada", "compuesta", "simple"], 0, "Flor + -ecer."],
    ["Un conjunto de palabras con el mismo lexema es una…", ["familia léxica", "campo semántico", "sigla"], 0, "Mar, marino, marinero…"],
  ],
  tarjetas: [
    ["Familia léxica", "Palabras que comparten lexema: mar, marino, marinero, maremoto."],
    ["Cultismo", "Palabra tomada del latín o el griego sin evolución popular: oculista."],
    ["Préstamo adaptado / extranjerismo crudo", "Adaptado: fútbol. Crudo, en cursiva: software."],
  ],
});
