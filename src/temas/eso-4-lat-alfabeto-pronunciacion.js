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
