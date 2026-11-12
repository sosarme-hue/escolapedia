// Latín 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, flujo } = require("./_hum");

module.exports = {
  materia: "Latín",
  curso: "4-eso",
  titulo: "La sintaxis de la oración",
  minutos: 40,
  objetivos: ["Relacionar cada caso con su función sintáctica", "Aplicar la concordancia entre sujeto y verbo y entre sustantivo y adjetivo", "Analizar y traducir oraciones simples siguiendo un método"],
  claves: ["función sintáctica", "concordancia", "sujeto", "complemento directo", "preposición", "orden de palabras"],
  pregunta: {
    texto: "«Puella nautae rosam dat.» Cuatro palabras y ninguna está donde la pondríamos en español. ¿Por dónde empiezas a traducir?",
    respuesta: "Por el <mark>verbo</mark> (<i>dat</i>, da), que suele ir al final. Después buscas el <b>sujeto</b> en nominativo (<i>puella</i>, la niña), el <b>complemento directo</b> en acusativo (<i>rosam</i>, una rosa) y el <b>indirecto</b> en dativo (<i>nautae</i>, al marinero): «La niña da una rosa al marinero».",
  },
  bloques: [
    {
      html: `<h3>Cada caso, una función</h3><p>En latín la función de una palabra se reconoce por su caso, no por su posición. <b>Nominativo</b>: sujeto y atributo. <b>Acusativo</b>: complemento directo y algunos circunstanciales con preposición (<i>ad urbem</i>, hacia la ciudad). <b>Genitivo</b>: complemento del nombre (<i>liber pueri</i>, el libro del niño). <b>Dativo</b>: complemento indirecto. <b>Ablativo</b>: complementos circunstanciales (<i>cum amicis</i>, con los amigos; <i>in horto</i>, en el huerto).</p>`,
      svg: filas("Casos y funciones con ejemplos", [["Nom.", "sujeto: puella", "var(--red)"], ["Ac.", "CD: rosam", "var(--pen)"], ["Gen.", "CN: liber pueri", "var(--leaf)"], ["Dat.", "CI: nautae", "var(--sun)"], ["Abl.", "CC: in horto", "var(--muted)"]]),
    },
    {
      html: `<h3>La concordancia</h3><p>El <b>verbo</b> concuerda con el sujeto en <b>persona y número</b>: <i>puella cantat</i> (la niña canta), <i>puellae cantant</i> (las niñas cantan). El <b>adjetivo</b> concuerda con su sustantivo en <mark>género, número y caso</mark>, aunque no siempre tengan la misma terminación: <i>agricola bonus</i> (el buen agricultor, masculino de la 1.ª con adjetivo de la 2.ª).</p>`,
      svg: dos("Concordancia verbal y nominal", ["Verbo", ["concuerda con el", "sujeto en", "persona y número", "puellae", "cantant"], "var(--red)"], ["Adjetivo", ["concuerda con el", "sustantivo en", "género, n.º, caso", "agricola", "bonus"], "var(--pen)"]),
    },
    {
      html: `<h3>Las preposiciones</h3><p>Algunas funciones circunstanciales llevan <mark>preposición</mark>, que rige un caso concreto. Con <b>acusativo</b>: <i>ad</i> (hacia), <i>per</i> (a través de), <i>post</i> (después de), <i>ante</i> (delante de). Con <b>ablativo</b>: <i>cum</i> (con), <i>sine</i> (sin), <i>de</i> (de, sobre), <i>ex/e</i> (desde dentro), <i>a/ab</i> (desde). <b>In</b> cambia de sentido: con acusativo indica dirección (<i>in urbem</i>, a la ciudad) y con ablativo, lugar (<i>in urbe</i>, en la ciudad).</p>`,
      svg: dos("Preposiciones de acusativo y de ablativo", ["+ acusativo", ["ad: hacia", "per: a través", "post: después", "ante: delante", "in: a (dirección)"], "var(--pen)"], ["+ ablativo", ["cum: con", "sine: sin", "de: sobre, de", "ex, ab: desde", "in: en (lugar)"], "var(--leaf)"]),
    },
    {
      html: `<h3>Un método para traducir</h3><p>El orden habitual latino es <b>sujeto – complementos – verbo</b>, pero puede variar para destacar algo. Un método seguro: 1) localiza el <mark>verbo</mark> y analiza persona y número; 2) busca el <b>sujeto</b> en nominativo que concuerde; 3) busca el <b>CD</b> en acusativo; 4) analiza los demás complementos; 5) traduce en orden español y revisa que tenga sentido.</p>`,
      svg: flujo("Pasos para traducir una oración latina", ["verbo", "sujeto|(nom.)", "CD (ac.)", "otros|casos", "traducir", "revisar"], "var(--red)"),
    },
  ],
  figura: {
    titulo: "Análisis de una oración latina",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Análisis de Puella nautae rosam dat: sujeto, complemento indirecto, complemento directo y verbo">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      <g text-anchor="middle">
      ${[[100, "Puella", "nom. sing.", "sujeto", "la niña", "var(--red)"], [260, "nautae", "dat. sing.", "C. indirecto", "al marinero", "var(--sun)"], [420, "rosam", "ac. sing.", "C. directo", "una rosa", "var(--pen)"], [570, "dat", "3.ª sing. pres.", "verbo", "da", "var(--leaf)"]].map(([x, l, m, f, t, c]) => `<text x="${x}" y="56" font-size="28" font-weight="700" fill="${c}" ${D}>${l}</text><text x="${x}" y="82" font-size="12" fill="var(--muted)" ${F}>${m}</text><rect x="${x - 62}" y="96" width="124" height="30" rx="15" fill="${c}"/><text x="${x}" y="116" font-size="13" font-weight="700" fill="#fff" ${F}>${f}</text><text x="${x}" y="152" font-size="14" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </g>
      <text x="340" y="196" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" ${F}>«La niña da una rosa al marinero»</text>
    </svg>`,
  },
  video: { id: "9j6gS8vy3DQ", titulo: "Casos del latín: sintaxis fundamental", canal: "Paco Álvarez philologus", vistas: 130625, megusta: 0, busqueda: "sintaxis latina casos funciones" },
  quiz: [
    { q: "¿Qué función tiene normalmente el acusativo sin preposición?", o: ["Sujeto", "Complemento directo", "Complemento del nombre"], a: 1, e: "Rosam (una rosa) es el CD de dat." },
    { q: "En latín, ¿qué conviene buscar primero al traducir?", o: ["El verbo", "El adjetivo", "La preposición"], a: 0, e: "El verbo indica persona y número y ayuda a encontrar el sujeto." },
    { q: "«Liber pueri» significa…", o: ["el niño del libro", "el libro del niño", "los libros del niño"], a: 1, e: "Pueri es genitivo: complemento del nombre." },
    { q: "La preposición «cum» rige…", o: ["acusativo", "ablativo", "genitivo"], a: 1, e: "Cum amicis: con los amigos." },
    { q: "«In urbem» indica…", o: ["lugar en donde", "dirección hacia donde", "procedencia"], a: 1, e: "In + acusativo expresa movimiento hacia." },
  ],
  examen: [
    { q: "Un adjetivo concuerda con su sustantivo en…", o: ["persona y número", "género, número y caso", "solo en caso"], a: 1, e: "Agricola bonus: masculino, singular, nominativo." },
    { q: "Traduce: «Agricolae in agris laborant».", o: ["El agricultor trabaja en el campo", "Los agricultores trabajan en los campos", "Los campos trabajan a los agricultores"], a: 1, e: "Agricolae nom. pl. (sujeto), in agris abl. pl. (lugar), laborant 3.ª pl." },
    { q: "El orden habitual de la oración latina es…", o: ["verbo – sujeto – objeto", "sujeto – complementos – verbo", "objeto – verbo – sujeto"], a: 1, e: "El verbo suele ir al final, aunque el orden es libre." },
  ],
  feynman: ["Qué función expresa cada caso", "Las dos clases de concordancia", "Las preposiciones de acusativo y de ablativo, y el caso de «in»", "Los pasos del método de traducción"],
  mapa: mapa("SINTAXIS LATINA", "var(--red)", [
    ["Casos", "nom = suj · ac = CD · dat = CI", "var(--pen)"],
    ["Concordancia", "verbo-sujeto · adj.-sust.", "var(--leaf)"],
    ["Preposiciones", "ad + ac · cum + abl · in ±", "var(--sun)"],
    ["Traducir", "verbo → sujeto → CD → resto", "var(--ink)"],
  ], 270),
  tarjetas: [
    ["Caso del sujeto", "Nominativo."],
    ["Caso del complemento indirecto", "Dativo."],
    ["Preposiciones con ablativo", "cum, sine, de, ex/e, a/ab (e in de lugar)."],
    ["In + acusativo / in + ablativo", "Dirección (a) / lugar (en)."],
    ["Primer paso para traducir", "Localizar y analizar el verbo."],
  ],
  familias: ["Pedidle que os enseñe a traducir «Puella nautae rosam dat» paso a paso.", "Inventad juntos una oración latina con las palabras del tema y desordenadla: ¿sigue significando lo mismo?", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El sistema de la lengua latina: sintaxis de los casos, concordancia, preposiciones, oración simple y estrategias de traducción (RD 217/2022, Latín 4º).",
    ideas: ["Oraciones en tiras de papel para reordenar sin cambiar el sentido.", "Colores por caso para analizar textos breves.", "Traducción inversa de oraciones sencillas del español al latín."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Gramática latina, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Gram%C3%A1tica_latina" },
  ],
  revisado: "2026-11-12",
};
