// Lengua Castellana 6º de Primaria. Dibujos propios en SVG. Normas según la Ortografía de la RAE (2010).
const F = 'font-family="Atkinson Hyperlegible, sans-serif"';
const D = 'font-family="Baloo 2, sans-serif"';

// Palabra en sílabas, con la tónica resaltada.
function silabas(x, y, partes, tonica, color) {
  let out = "", px = x;
  partes.forEach((p, i) => {
    const w = 18 + p.length * 15;
    out += `<rect x="${px}" y="${y}" width="${w}" height="40" rx="8" fill="${i === tonica ? color : "var(--card)"}" stroke="var(--ink)" stroke-width="2"/>`;
    out += `<text x="${px + w / 2}" y="${y + 27}" text-anchor="middle" font-size="20" font-weight="700" fill="${i === tonica ? "#fff" : "var(--ink)"}" ${D}>${p}</text>`;
    px += w + 6;
  });
  return out;
}

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "6-primaria",
  titulo: "Reglas de acentuación",
  minutos: 25,
  objetivos: ["Encontrar la sílaba tónica", "Clasificar palabras en agudas, llanas, esdrújulas y sobresdrújulas", "Saber cuándo llevan tilde"],
  claves: ["sílaba tónica", "tilde", "aguda", "llana", "esdrújula"],
  pregunta: {
    texto: "«Mi papá come papa» y «Mi papa come papá». ¿Por qué estas dos frases no dicen lo mismo?",
    respuesta: "Por <mark>la tilde</mark>. «Papá» es tu padre y «papa» es una patata (o el Papa). La tilde nos dice qué sílaba suena más fuerte, y eso puede cambiar el significado de la palabra.",
  },
  bloques: [
    {
      html: `<h3>La sílaba tónica</h3><p>En cada palabra hay una sílaba que pronunciamos con más fuerza: es la <mark>sílaba tónica</mark>. Truco: di la palabra como si llamaras a alguien desde lejos. La sílaba que alargas es la tónica: «¡ca-MIÓN!», «¡ME-sa!».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Palabras separadas en sílabas con la sílaba tónica resaltada: ca-mión, me-sa">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${silabas(30, 36, ["ca", "mión"], 1, "var(--pen)")}
        ${silabas(30, 104, ["me", "sa"], 0, "var(--pen)")}
        <text x="190" y="62" font-size="13" fill="var(--muted)" ${F}>tónica →</text>
        <text x="130" y="168" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>la sílaba de color suena más fuerte</text>
      </svg>`,
    },
    {
      html: `<h3>Cuatro tipos de palabras</h3><p>Según dónde esté la sílaba tónica, contando desde el final: <b>agudas</b> (la última), <b>llanas</b> (la penúltima), <b>esdrújulas</b> (la antepenúltima) y <b>sobresdrújulas</b> (antes de la antepenúltima).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ejemplos: ratón aguda, árbol llana, pájaro esdrújula">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${silabas(14, 14, ["ra", "tón"], 1, "var(--leaf)")}<text x="250" y="40" text-anchor="end" font-size="14" font-weight="700" fill="var(--leaf)" ${F}>aguda</text>
        ${silabas(14, 68, ["ár", "bol"], 0, "var(--inf)")}<text x="250" y="94" text-anchor="end" font-size="14" font-weight="700" fill="var(--inf)" ${F}>llana</text>
        ${silabas(14, 122, ["pá", "ja", "ro"], 0, "var(--red)")}<text x="250" y="148" text-anchor="end" font-size="14" font-weight="700" fill="var(--red)" ${F}>esdrújula</text>
      </svg>`,
    },
    {
      html: `<h3>Cuándo llevan tilde</h3><p><b>Agudas:</b> llevan tilde si terminan en <mark>vocal, -n o -s</mark> (sofá, camión, compás). <b>Llanas:</b> al revés, llevan tilde si <mark>no</mark> terminan en vocal, -n o -s (árbol, lápiz, cárcel). <b>Esdrújulas y sobresdrújulas:</b> <mark>siempre</mark> llevan tilde (música, cómpramelo).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Resumen de la regla: aguda con vocal n o s lleva tilde, llana sin vocal n o s lleva tilde, esdrújula siempre">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="14">
          <rect x="14" y="14" width="232" height="44" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
          <text x="26" y="34" font-weight="700" fill="var(--leaf)">Aguda</text><text x="26" y="50" fill="var(--ink)">tilde si acaba en vocal, n, s</text>
          <rect x="14" y="68" width="232" height="44" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/>
          <text x="26" y="88" font-weight="700" fill="var(--inf)">Llana</text><text x="26" y="104" fill="var(--ink)">tilde si NO acaba en vocal, n, s</text>
          <rect x="14" y="122" width="232" height="44" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
          <text x="26" y="142" font-weight="700" fill="var(--red)">Esdrújula</text><text x="26" y="158" fill="var(--ink)">siempre llevan tilde</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>La tilde diacrítica</h3><p>Algunas palabras de una sílaba llevan tilde para <mark>distinguirse de otra que se escribe igual</mark>: tú (persona) y tu (tu casa); él (persona) y el (el perro); sí (afirmación) y si (condición); más (cantidad) y mas (pero).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Parejas de tilde diacrítica: tú y tu, él y el, sí y si">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${D} font-weight="700" font-size="26">
          <text x="40" y="52" fill="var(--pen)">tú</text><text x="150" y="52" fill="var(--ink)">tu</text>
          <text x="40" y="104" fill="var(--pen)">él</text><text x="150" y="104" fill="var(--ink)">el</text>
          <text x="40" y="156" fill="var(--pen)">sí</text><text x="150" y="156" fill="var(--ink)">si</text>
        </g>
        <g ${F} font-size="12" fill="var(--muted)">
          <text x="78" y="50">persona</text><text x="186" y="50">tu casa</text>
          <text x="78" y="102">persona</text><text x="186" y="102">el perro</text>
          <text x="78" y="154">afirmar</text><text x="186" y="154">si vienes</text>
        </g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "La regla de un vistazo",
    svg: `<svg viewBox="0 0 640 260" role="img" aria-label="Tabla visual: posición de la sílaba tónica contando desde el final y cuándo se pone tilde">
      <rect width="640" height="260" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="15">
        <text x="20" y="34" font-weight="700" fill="var(--muted)">Sílaba tónica contando desde el final</text>
        ${[["sobresdrújula", "4ª o antes", "siempre", "cómpramelo", "var(--bac, #7b3fc4)"], ["esdrújula", "3ª", "siempre", "música", "var(--red)"], ["llana", "2ª", "si NO acaba en vocal, n, s", "lápiz", "var(--inf)"], ["aguda", "última", "si acaba en vocal, n, s", "camión", "var(--leaf)"]]
          .map(([n, pos, regla, ej, c], i) => `<rect x="${20 + i * 152}" y="54" width="140" height="186" rx="12" fill="var(--card)" stroke="${c}" stroke-width="3"/>
            <text x="${90 + i * 152}" y="84" text-anchor="middle" font-weight="700" fill="${c}" font-size="17">${n}</text>
            <text x="${90 + i * 152}" y="110" text-anchor="middle" fill="var(--ink)">${pos}</text>
            <text x="${90 + i * 152}" y="146" text-anchor="middle" fill="var(--muted)" font-size="13">tilde:</text>
            <foreignObject x="${28 + i * 152}" y="152" width="124" height="48"><div xmlns="http://www.w3.org/1999/xhtml" style="font:700 13px/1.25 'Atkinson Hyperlegible',sans-serif;text-align:center;color:var(--ink)">${regla}</div></foreignObject>
            <text x="${90 + i * 152}" y="224" text-anchor="middle" font-size="20" font-weight="700" fill="${c}" ${D}>${ej}</text>`).join("")}
      </g>
    </svg>`,
  },
  video: { id: "3Qzip92Rrpg", titulo: "Reglas de acentuación: agudas, llanas, esdrújulas y sobresdrújulas", canal: "Susi Profe", busqueda: "reglas de acentuación primaria" },
  quiz: [
    { q: "¿Cuál es la sílaba tónica de «ventana»?", o: ["ven", "ta", "na"], a: 1, e: "Se dice «ven-TA-na»: la tónica es la penúltima, así que es llana." },
    { q: "¿Por qué lleva tilde «canción»?", o: ["Porque es llana y acaba en n", "Porque es aguda y acaba en n", "Porque todas las palabras con «ción» la llevan siempre"], a: 1, e: "Es aguda (can-CIÓN) y termina en -n, así que lleva tilde." },
    { q: "¿Qué palabra está bien escrita?", o: ["arbol", "lapiz", "fácil"], a: 2, e: "Las tres son llanas acabadas en consonante que no es n ni s, así que las tres llevan tilde: árbol, lápiz, fácil." },
    { q: "«Murciélago» es una palabra…", o: ["aguda", "llana", "esdrújula"], a: 2, e: "Mur-CIÉ-la-go: la tónica es la antepenúltima. Es esdrújula y por eso lleva tilde siempre." },
    { q: "Completa: «¿___ quieres venir? ___, quiero ir con ___ hermano».", o: ["Tú · Sí · tu", "Tu · Si · tú", "Tú · Si · tu"], a: 0, e: "«Tú» es la persona, «sí» es afirmación y «tu» indica de quién es el hermano." },
  ],
  feynman: ["Qué es la sílaba tónica y cómo encontrarla", "Los tipos de palabra según la sílaba tónica", "La regla de la tilde de agudas y llanas", "Qué es la tilde diacrítica, con un ejemplo"],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental de las reglas de acentuación">
    <g ${F} font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 60"/><path d="M350 150 L 560 240"/></g>
      <rect x="250" y="122" width="200" height="56" rx="28" fill="var(--pen)"/>
      <text x="350" y="157" text-anchor="middle" font-size="20" font-weight="700" fill="var(--card)" ${D}>ACENTUACIÓN</text>
      <rect x="40" y="34" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--ink)">Sílaba tónica</text>
      <text x="140" y="75" text-anchor="middle" fill="var(--muted)" font-size="13">la que suena más fuerte</text>
      <rect x="460" y="34" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--leaf)">Agudas</text>
      <text x="560" y="75" text-anchor="middle" fill="var(--ink)" font-size="13">tilde: vocal, n, s</text>
      <rect x="40" y="214" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--inf)">Llanas</text>
      <text x="140" y="255" text-anchor="middle" fill="var(--ink)" font-size="13">tilde: NO vocal, n, s</text>
      <rect x="460" y="214" width="200" height="52" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--red)">Esdrújulas</text>
      <text x="560" y="255" text-anchor="middle" fill="var(--ink)" font-size="13">siempre con tilde</text>
    </g>
  </svg>`,
  tarjetas: [
    ["¿Qué es la sílaba tónica?", "La sílaba que pronunciamos con más fuerza."],
    ["¿Cuándo lleva tilde una palabra aguda?", "Cuando termina en vocal, -n o -s. Ej.: sofá, camión."],
    ["¿Cuándo lleva tilde una palabra llana?", "Cuando NO termina en vocal, -n o -s. Ej.: árbol, lápiz."],
    ["¿Cuándo llevan tilde las esdrújulas?", "Siempre. Ej.: música, pájaro."],
    ["¿Qué diferencia hay entre «tú» y «tu»?", "«Tú» es la persona; «tu» indica posesión (tu libro)."],
  ],
  familias: ["Jugad a «¡llamar desde lejos!» con nombres de la familia para encontrar la sílaba tónica.", "Cuando lea en voz alta, pídele que te diga si alguna palabra con tilde es aguda, llana o esdrújula.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Bloque «Reflexión sobre la lengua»: ortografía y acentuación (RD 157/2022, tercer ciclo).",
    ideas: ["Clasificar en grupos las palabras de un texto del libro de lectura en cuatro columnas.", "Dictado de 10 palabras y autocorrección por parejas con la regla de la figura.", "Concurso por equipos con parejas de tilde diacrítica."],
  },
  fuentes: [
    { t: "Ortografía de la lengua española (RAE y ASALE, 2010): reglas de acentuación", url: "https://www.rae.es/ortograf%C3%ADa/reglas-generales-de-acentuaci%C3%B3n-gr%C3%A1fica" },
    { t: "Real Decreto 157/2022, enseñanzas mínimas de Primaria (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-3296" },
  ],
  revisado: "2026-11-12",
};
