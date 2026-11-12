// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, arbol, linea } = require("./_hum");

const ABC = "ABCDEFGHIKLMNOPQRSTVXYZ".split("");

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "El alfabeto y la pronunciación",
  minutos: 35,
  objetivos: ["Conocer el origen y las letras del alfabeto latino", "Pronunciar el latín según la pronunciación clásica", "Aplicar las reglas de acentuación latinas"],
  claves: ["alfabeto latino", "pronunciación clásica", "diptongo", "cantidad vocálica", "sílaba larga", "acentuación"],
  pregunta: {
    texto: "Julio César escribía «CAESAR» y decía algo parecido a «káisar». De ahí viene la palabra alemana «Kaiser» (emperador). Pero en español decimos «César». ¿Cuál es la pronunciación correcta?",
    respuesta: "Los romanos de la época clásica pronunciaban la C siempre como /k/ y AE como /ai/: «káisar». Con los siglos la pronunciación cambió en cada lengua. En clase se usa la <mark>pronunciación clásica</mark>, la más parecida a la de Cicerón.",
  },
  bloques: [
    {
      html: `<h3>Origen del alfabeto</h3><p>Los romanos tomaron su alfabeto de los <b>etruscos</b>, que a su vez lo habían adaptado del <b>griego</b>, y este del <b>fenicio</b>. El alfabeto latino clásico tenía <mark>23 letras</mark>, todas mayúsculas. No existían la J, la U ni la W: la I y la V servían a la vez de vocal y de consonante (IVLIVS = Iulius). La K, la Y y la Z se usaban casi solo en palabras griegas.</p>`,
      svg: linea("Origen del alfabeto latino", [["fenicio", "s. XI a. C."], ["griego", "s. VIII a. C."], ["etrusco", "s. VII a. C."], ["latino", "23 letras"]], "var(--red)"),
    },
    {
      html: `<h3>La pronunciación clásica</h3><p>En latín clásico casi todo se pronuncia como se escribe, con algunas reglas: la <b>C</b> siempre suena /k/ (<i>Cicero</i> = «kíkero»); la <b>G</b> siempre /g/ (<i>gens</i> = «guens»); la <b>V</b> consonante suena como la <i>u</i> de «huevo» (<i>vinum</i> = «uínum»); <b>QU</b> suena /kw/; la <b>H</b> era una aspiración suave; <b>LL</b> son dos eles (<i>il-le</i>); <b>PH</b> = f, <b>CH</b> = k, <b>TH</b> = t.</p>`,
      svg: filas("Reglas de pronunciación clásica", [["C", "siempre /k/: Cicero", "var(--red)"], ["G", "siempre /g/: gens", "var(--leaf)"], ["V", "como /u/: vinum", "var(--pen)"], ["QU", "/kw/: quinque", "var(--sun)"], ["PH", "/f/: philosophia", "var(--muted)"]]),
    },
    {
      html: `<h3>Diptongos y cantidad</h3><p>Los principales <mark>diptongos</mark> son <b>AE</b> (se pronuncia /ai/: <i>rosae</i>), <b>OE</b> (/oi/: <i>poena</i>) y <b>AU</b> (/au/: <i>aurum</i>). Además, las vocales podían ser <b>largas</b> o <b>breves</b>: es la <mark>cantidad vocálica</mark>, que se marca con una raya (ā) o una curva (ă). La cantidad cambiaba el significado: <i>mālum</i> (manzana) y <i>mălum</i> (mal).</p>`,
      svg: dos("Vocales largas y breves", ["Larga ā", ["dura el doble", "mālum", "= manzana", "rosā", "(ablativo)"], "var(--red)"], ["Breve ă", ["dura poco", "mălum", "= el mal", "rosă", "(nominativo)"], "var(--pen)"]),
    },
    {
      html: `<h3>La acentuación latina</h3><p>En latín no hay palabras agudas ni tildes. Las reglas son: las palabras de <b>dos sílabas</b> son siempre llanas (<i>ro-sa</i>). En las de <b>tres o más</b>, todo depende de la <b>penúltima sílaba</b>: si es <mark>larga</mark>, el acento cae en ella (<i>a-mī-cus</i>); si es <mark>breve</mark>, el acento pasa a la antepenúltima (<i>dó-mi-nus</i>).</p>`,
      svg: arbol("Acento en palabras de tres o más sílabas según la penúltima", [["penúltima…", ["larga: llana", "breve: esdrújula"], "var(--red)", ["a-mī-cus", "dó-mi-nus"]]]),
    },
  ],
  figura: {
    titulo: "Las 23 letras del alfabeto latino clásico",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Las 23 letras del alfabeto latino; K, Y y Z marcadas como letras para palabras griegas">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      <g text-anchor="middle" ${D} font-size="28" font-weight="700">
      ${ABC.map((l, i) => { const x = 40 + (i % 12) * 54, y = i < 12 ? 66 : 136; const g = "KYZ".includes(l); return `<rect x="${x - 22}" y="${y - 34}" width="44" height="48" rx="8" fill="${g ? "var(--sun)" : "var(--card)"}" stroke="var(--red)" stroke-width="2"/><text x="${x}" y="${y + 2}" fill="var(--ink)">${l}</text>`; }).join("")}
      </g>
      <text x="340" y="186" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>Sin J, U ni W · en amarillo, letras para palabras griegas</text>
    </svg>`,
  },
  video: { id: "FFEPttcEkj0", titulo: "¿Cómo sonaba el latín de los romanos? La pronunciación del latín", canal: "Manuel Bravo", vistas: 1176016, megusta: 60503, busqueda: "pronunciación del latín clásico" },
  quiz: [
    { q: "¿Cuántas letras tenía el alfabeto latino clásico?", o: ["23", "27", "30"], a: 0, e: "No existían la J, la U ni la W." },
    { q: "En pronunciación clásica, «Cicero» se lee…", o: ["«Zízero»", "«Kíkero»", "«Chíchero»"], a: 1, e: "La C suena siempre /k/." },
    { q: "El diptongo AE se pronuncia…", o: ["/e/", "/ai/", "/ae/ separadas"], a: 1, e: "Rosae se lee «rósai»." },
    { q: "Una palabra latina de dos sílabas es siempre…", o: ["aguda", "llana", "esdrújula"], a: 1, e: "En latín no hay palabras agudas." },
    { q: "Si la penúltima sílaba es breve, el acento va en…", o: ["la última", "la penúltima", "la antepenúltima"], a: 2, e: "Ejemplo: dó-mi-nus." },
  ],
  examen: [
    { q: "¿De qué pueblo tomaron los romanos el alfabeto?", o: ["De los fenicios directamente", "De los etruscos", "De los egipcios"], a: 1, e: "Los etruscos lo habían adaptado del griego." },
    { q: "«Vinum» se pronunciaba…", o: ["«bínum»", "«uínum»", "«fínum»"], a: 1, e: "La V consonante sonaba como una u semiconsonante." },
    { q: "Mālum (manzana) y mălum (mal) se distinguen por…", o: ["la cantidad vocálica", "el acento escrito", "la consonante"], a: 0, e: "La a larga o breve cambiaba el significado." },
  ],
  feynman: ["De dónde viene el alfabeto latino y qué letras le faltaban", "Cinco reglas de la pronunciación clásica", "Qué son los diptongos y la cantidad vocálica", "Cómo se decide dónde va el acento"],
  mapa: mapa("ALFABETO LATINO", "var(--red)", [
    ["Origen", "fenicio → griego → etrusco", "var(--muted)"],
    ["Letras", "23 · sin J, U, W", "var(--pen)"],
    ["Sonidos", "C = k · G = g · V = u", "var(--leaf)"],
    ["Acento", "penúltima larga o breve", "var(--sun)"],
  ], 260),
  tarjetas: [
    ["Letras que no tenía el latín clásico", "J, U y W."],
    ["Pronunciación clásica de la C", "Siempre /k/."],
    ["Diptongo AE", "Se pronuncia /ai/."],
    ["Palabras latinas de dos sílabas", "Siempre llanas."],
    ["Tres o más sílabas con penúltima breve", "Esdrújula: el acento va en la antepenúltima."],
  ],
  familias: ["Buscad inscripciones latinas en monumentos, monedas o edificios y leedlas en voz alta con la pronunciación clásica.", "Pedidle que os lea su nombre escrito con letras romanas (sin J ni U).", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El sistema de la lengua latina: alfabeto, pronunciación y acentuación (RD 217/2022, Latín 4º).",
    ideas: ["Lectura coral de un texto breve (Pater noster o un fragmento de César).", "Transcribir nombres del alumnado en capital cuadrada romana.", "Ejercicio de acentuación con palabras marcadas con cantidad."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Pronunciación del latín, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Pronunciaci%C3%B3n_del_lat%C3%ADn" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Leer en voz alta textos latinos con la pronunciación clásica", "Aplicar las reglas de acentuación latina"],
  bloques: [
    { tras: "Origen del alfabeto", html: `<h3>Las letras del alfabeto latino</h3><p>El alfabeto latino clásico tenía <b>23 letras</b>: A B C D E F G H I K L M N O P Q R S T V X Y Z. No existían la <b>J</b>, la <b>U</b> ni la <b>W</b>, que se añadieron en la Edad Media y el Renacimiento: la I servía para el sonido vocálico [i] y el consonántico [y] (IVLIVS = Iulius), y la V para [u] y [w] (VENI = ueni). La <b>K</b> casi no se usaba (Kalendae) y la <b>Y</b> y la <b>Z</b> se tomaron del griego para escribir palabras griegas. Los romanos escribían en <mark>mayúsculas</mark>; las minúsculas aparecieron después.</p>` },
    { tras: "La pronunciación clásica", html: `<h3>Cómo suenan las letras</h3>${tabla(["Letra o grupo", "Se pronuncia", "Ejemplo"], [["c", "siempre [k]", "Cicero → [kíkero]"], ["g", "siempre como en «gato»", "gens → [guens]"], ["v consonante", "[w], como en inglés «water»", "vinum → [wínum]"], ["i consonante", "[y], como en «yo»", "iam → [yam]"], ["qu", "[kw]", "quis → [kwis]"], ["h", "aspirada suave o muda", "homo"], ["ae / oe", "[ai] / [oi]", "Caesar → [káisar]"], ["ph, th, ch", "[p], [t], [k] aspiradas", "philosophia"], ["ll", "dos eles [l-l]", "puella → [puel-la]"]])}<p>Esta es la <mark>pronunciación clásica</mark> o restituida. En la Iglesia se usa la <b>pronunciación eclesiástica</b> (italiana), en la que <i>Caesar</i> suena [chésar].</p>`, video: { id: "PSasr81sbg8", titulo: "El alfabeto latino y la pronunciación del latín clásico", canal: "LatínOnline.es", vistas: 331808, megusta: 0 } },
    { tras: "Diptongos y cantidad", html: `<h3>Sílabas largas y breves</h3><p>Una sílaba es <b>larga</b> si tiene una vocal larga, un diptongo o una vocal seguida de dos consonantes (o de x o z). Es <b>breve</b> si tiene una vocal breve seguida de otra vocal o de una sola consonante. Los diccionarios marcan las vocales largas con una rayita (macrón: ā) y las breves con una media luna (breve: ă). La <mark>cantidad</mark> podía cambiar el significado: <i>mālum</i> (manzana) frente a <i>mălum</i> (mal), o <i>lĕvis</i> (ligero) frente a <i>lēvis</i> (liso). Además, el latín <b>no tenía palabras agudas</b> de más de una sílaba.</p>` },
    { tras: "La acentuación latina", html: `<h3>Practicamos el acento</h3>${tabla(["Palabra", "Penúltima sílaba", "Acento"], [["ro-sa", "solo dos sílabas", "<b>ró</b>sa"], ["a-mi-cus", "-mi- larga (ī)", "a<b>mí</b>cus"], ["do-mi-nus", "-mi- breve", "<b>dó</b>minus"], ["pu-el-la", "-el- larga por dos consonantes", "pu<b>él</b>la"], ["fe-nes-tra", "-nes- larga por dos consonantes", "fe<b>nés</b>tra"], ["te-ne-brae", "-ne- breve (muta + líquida)", "<b>té</b>nebrae"]])}<p>La regla: las palabras de <b>dos sílabas</b> se acentúan en la primera; las de <b>tres o más</b>, en la penúltima si es larga y en la antepenúltima si es breve. Por eso el español <i>dominus</i> > «dueño» y <i>amicus</i> > «amigo» conservan el acento en la sílaba latina.</p>` },
  ],
  ejemplos: [
    { enunciado: "Lee en voz alta con pronunciación clásica: «Veni, vidi, vici».", pasos: ["La v consonante suena [w].", "La c suena siempre [k].", "Acento en la primera de las palabras de dos sílabas."], resultado: "[wéni, wídi, wíki]." },
    { enunciado: "Divide en sílabas y acentúa «templum».", pasos: ["Sílabas: tem-plum.", "Tiene dos sílabas.", "Las de dos sílabas se acentúan en la primera."], resultado: "<b>tém</b>plum." },
    { enunciado: "Acentúa «populus» sabiendo que la o de -pu- es breve.", pasos: ["Sílabas: po-pu-lus (tres).", "Miramos la penúltima, -pu-: es breve.", "Si es breve, el acento va en la antepenúltima."], resultado: "<b>pó</b>pulus (de ahí el español «pueblo»)." },
  ],
  errores: [
    "Pronunciar la c como [z] ante e o i: en latín clásico siempre suena [k].",
    "Pronunciar la v como [b]: sonaba [w].",
    "Acentuar las palabras latinas en la última sílaba: no hay agudas de varias sílabas.",
    "Leer ae como dos sílabas separadas: es el diptongo [ai].",
    "Pensar que la J y la U son letras del latín clásico.",
  ],
  ejercicios: [
    { q: "¿Cuántas letras tenía el alfabeto latino clásico y cuáles faltaban respecto al español?", sol: "23. Faltaban la J, la U, la W y la Ñ." },
    { q: "Pronuncia: Caesar, cena, gens.", sol: "[káisar], [kéna], [guens]." },
    { q: "¿Cómo se pronuncia «quinque»?", sol: "[kwínkwe]." },
    { q: "¿Cuándo es larga una sílaba?", sol: "Si tiene vocal larga, diptongo o vocal seguida de dos consonantes (o de x, z)." },
    { q: "¿Qué significan mālum y mălum?", sol: "Mālum: manzana. Mălum: mal." },
    { q: "Acentúa «rosa», «puella» y «filius» (i breve en -li-).", sol: "Rósa, puélla, fílius." },
    { q: "Acentúa «Roma» y «senatus» (a larga).", sol: "Róma, senátus." },
    { q: "¿Por qué en latín no hay palabras agudas de varias sílabas?", sol: "Porque el acento nunca recae en la última sílaba: va en la penúltima o en la antepenúltima." },
    { q: "Lee con pronunciación clásica: «Gallia est omnis divisa in partes tres».", sol: "[gál-lia est ómnis diwísa in pártes tres]." },
    { q: "Explica la diferencia entre pronunciación clásica y eclesiástica.", sol: "La clásica intenta reproducir cómo hablaban los romanos ([k] siempre); la eclesiástica es la italiana que usa la Iglesia (c ante e, i como [ch])." },
  ],
  quiz: [
    { q: "En latín clásico, «Cicero» se pronunciaba…", o: ["[kíkero]", "[zízero]", "[chíchero]"], a: 0, e: "La c siempre [k]." },
    { q: "La letra J…", o: ["no existía en latín clásico", "era muy frecuente", "sonaba [j]"], a: 0, e: "Se usaba I." },
    { q: "La vocal larga se marca con…", o: ["un macrón (ā)", "una tilde", "una diéresis"], a: 0, e: "Una rayita encima." },
    { q: "«Dominus» se acentúa…", o: ["dóminus", "domínus", "dominús"], a: 0, e: "La penúltima es breve." },
    { q: "«ae» se pronuncia…", o: ["[ai]", "[e]", "[a-e]"], a: 0, e: "Es un diptongo." },
  ],
  tarjetas: [
    ["Macrón", "Rayita que marca una vocal larga: ā."],
    ["Sílaba larga", "Con vocal larga, diptongo o vocal + dos consonantes."],
    ["Pronunciación clásica", "C y G siempre duras; V como [w]."],
  ],
});
