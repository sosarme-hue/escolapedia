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
  video: { id: "dfzlBAMVrBI", titulo: "¿Cómo acentuar? Agudas, graves (llanas), esdrújulas y sobresdrújulas", canal: "Rocío Carreón y Daniel Carreón", vistas: 2555827, megusta: 0, busqueda: "reglas de acentuación" },
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

// ---------- Nivel libro (6º de Primaria) ----------
// Este tema tenía el formato antiguo, sin ejemplos, errores, ejercicios ni examen: se preparan antes.
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
Object.assign(module.exports, { ejemplos: [], errores: [], ejercicios: [], examen: [] });
require("./_priL").libro(module.exports, {
  minutos: 80,
  objetivos: ["Separar palabras en sílabas y distinguir acento y tilde", "Acentuar correctamente monosílabos, diptongos e hiatos", "Usar la tilde diacrítica y la de interrogativos y exclamativos", "Acentuar palabras compuestas, adverbios en -mente y mayúsculas"],
  lectura: { titulo: "La abuela y la tilde perdida", html: `<p>La abuela de Iker acababa de aprender a usar el móvil y estaba entusiasmada: mandaba mensajes a todo el mundo. Un domingo, mientras Iker jugaba al fútbol, le llegó este mensaje:</p><p><i>«Ven rapido a casa. Tu papa esta frita»</i>.</p><p>Iker se quedó blanco. ¿Su padre, frito? ¿Le había pasado algo? Salió corriendo del campo, cruzó tres calles sin parar y entró en casa sin aliento… y se encontró a su padre tan tranquilo, poniendo la mesa. En la cocina, la abuela sacaba de la sartén un plato enorme de patatas fritas.</p><p>—¡Ya era hora! —dijo la abuela—. Te he escrito que vinieras, que tu papa estaba frita. ¡Se te iba a enfriar!</p><p>Iker se echó a reír. Aquella tarde se sentó con su abuela y le explicó que <b>papa</b>, sin tilde, es la patata, y <b>papá</b>, con tilde, es su padre. Y que <b>esta</b> y <b>está</b> tampoco significan lo mismo.</p><p>Desde entonces, la abuela revisa las tildes antes de enviar cada mensaje. Dice que una rayita tan pequeña no puede dar un susto tan grande.</p>` },
  tras: {
    "La sílaba tónica": [
      ["Separar en sílabas", `<p>Para encontrar la sílaba tónica primero hay que <b>separar bien las sílabas</b>. Una sílaba es cada golpe de voz con el que pronunciamos una palabra, y siempre tiene al menos una <b>vocal</b>. Estas reglas te ayudarán:</p><ul><li>Una consonante entre dos vocales va con la vocal de <b>detrás</b>: <i>ca-sa, pe-lo, a-mi-go</i>.</li><li>Dos consonantes seguidas entre vocales se separan, una a cada lado: <i>car-ta, ven-ta, ár-bol</i>.</li><li>Pero hay grupos que <b>nunca se separan</b>, porque forman un solo bloque: consonante + <b>l</b> o <b>r</b> (<i>bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, tr</i>): <i>ha-blar, li-bro, so-plar, pa-dre</i>.</li><li>Las letras dobles <b>ch, ll, rr</b> representan un solo sonido y nunca se separan: <i>co-che, ca-lle, pe-rro</i>.</li><li>Tres consonantes seguidas: normalmente dos van con la primera vocal y una con la segunda, salvo si las dos últimas forman un grupo inseparable: <i>ins-tan-te</i>, pero <i>som-bre-ro</i>.</li></ul><p>Según su número de sílabas, las palabras son <b>monosílabas</b> (una: <i>sol</i>), <b>bisílabas</b> (dos: <i>me-sa</i>), <b>trisílabas</b> (tres: <i>ca-mi-sa</i>) y <b>polisílabas</b> (cuatro o más: <i>ma-ri-po-sa</i>).</p>`,
        L6.filas("Separar sílabas", [["una consonante", "ca-sa", cAZ], ["dos consonantes", "car-ta", cVE], ["bl, br, pl, tr…", "ha-blar, li-bro", cNA], ["ch, ll, rr", "co-che, pe-rro", cMO]])],
      ["Acento y tilde no son lo mismo", `<p>Es muy frecuente confundir <b>acento</b> con <b>tilde</b>, pero no son lo mismo:</p><ul><li>El <b>acento</b> (o acento prosódico) es la mayor fuerza de voz con que pronunciamos la sílaba tónica. Se <b>oye</b>, pero no siempre se ve. Todas las palabras con más de una sílaba tienen acento.</li><li>La <b>tilde</b> (o acento gráfico) es la rayita que <b>escribimos</b> sobre la vocal de la sílaba tónica, solo en algunas palabras, según las reglas.</li></ul><p>Por ejemplo, <i>mesa</i> y <i>árbol</i> tienen las dos acento en la primera sílaba (<i>ME-sa, ÁR-bol</i>), pero solo <i>árbol</i> lleva tilde. Las dos palabras son llanas: <i>mesa</i> termina en vocal y no la lleva; <i>árbol</i> termina en <i>l</i> y sí la lleva.</p><p>La tilde siempre se escribe de <b>derecha a izquierda</b> y hacia arriba (´), nunca al revés. En español solo se pone sobre las vocales.</p><p>Hay algunas palabras que no tienen acento propio y se pronuncian apoyadas en la siguiente: son las palabras <b>átonas</b>, como los artículos (<i>el, la, los</i>), muchas preposiciones (<i>de, en, con</i>) o los posesivos delante del nombre (<i>mi, tu, su</i>). Fíjate: decimos <i>la-ca-SA</i> como si fuera una sola palabra.</p>`,
        H6.dos("Acento y tilde", ["Acento", ["se oye", "todas las palabras", "ME-sa"], cAZ], ["Tilde", ["se escribe", "solo algunas", "árbol"], cRO])],
    ],
    "Cuatro tipos de palabras": [
      ["Clasificar paso a paso", `<p>Para saber si una palabra lleva tilde, sigue siempre estos <b>cuatro pasos</b>, en orden:</p><ul><li><b>1. Separa</b> la palabra en sílabas: <i>ca-ma-re-ro</i>.</li><li><b>2. Busca la sílaba tónica</b>. Usa el truco de llamar desde lejos o cambia la fuerza de sitio hasta que suene bien: <i>ca-ma-RE-ro</i>.</li><li><b>3. Cuenta desde el final</b>: la tónica es la penúltima, así que es <b>llana</b>.</li><li><b>4. Aplica la regla</b>: las llanas llevan tilde si <b>no</b> terminan en vocal, <i>-n</i> o <i>-s</i>. <i>Camarero</i> termina en vocal: <b>no lleva tilde</b>.</li></ul><p>Veamos otros ejemplos:</p><ul><li><i>Al-go-dón</i>: tónica la última, aguda, termina en <i>-n</i>: lleva tilde.</li><li><i>Re-loj</i>: aguda, termina en <i>-j</i>: no lleva tilde.</li><li><i>Cés-ped</i>: llana, termina en <i>-d</i>: lleva tilde.</li><li><i>Exa-men</i>: llana, termina en <i>-n</i>: no lleva tilde. ¡Pero su plural, <i>e-XÁ-me-nes</i>, es esdrújula y sí la lleva!</li></ul><p>Fíjate en ese último caso: al formar el plural, la sílaba tónica no se mueve, pero la palabra gana una sílaba y puede cambiar de tipo. Pasa lo mismo con <i>joven → jóvenes</i> o <i>imagen → imágenes</i>. Y al revés: <i>canción → canciones</i> pierde la tilde.</p>`,
        H6.flujo("¿Lleva tilde?", ["separa|sílabas", "busca|la tónica", "cuenta|desde el final", "aplica|la regla"], cVE)],
    ],
    "Cuándo llevan tilde": [
      ["Los monosílabos", `<p>Las palabras de <b>una sola sílaba</b>, los monosílabos, <b>no llevan tilde</b> como norma general, porque no hay ninguna otra sílaba con la que confundir la tónica: <i>sol, pan, mar, fue, fui, dio, vio, ti, fe, pie, bien</i>.</p><p>Son errores muy frecuentes escribir <i>«fué», «dió», «vió»</i> o <i>«tí»</i>. Recuerda: <i>fue, dio, vio</i> y <i>ti</i> se escriben siempre sin tilde.</p><p>Desde la <i>Ortografía</i> de la RAE de 2010, también se consideran monosílabos algunas palabras que antes se escribían con tilde, como <i>guion, truhan, crie, lie, fie</i> o <i>rio</i> (del verbo reír). Al pronunciarse en una sola emisión de voz, no llevan tilde.</p><p>Los monosílabos solo llevan tilde en un caso: cuando hay que distinguir dos palabras que se escriben igual pero tienen distinto significado o función. Es la <b>tilde diacrítica</b>, que verás más adelante: <i>tú / tu, él / el, sí / si, mí / mi, té / te, dé / de, sé / se, más / mas</i>.</p><p>Truco: si dudas con un monosílabo, pregúntate si existe otra palabra igual con la que se pueda confundir. Si no existe, no lleva tilde.</p>`,
        L6.filas("Monosílabos sin tilde", [["fue, fui", "nunca «fué»", cRO], ["dio, vio", "nunca «dió»", cNA], ["ti", "nunca «tí»", cAZ], ["guion", "desde 2010", cMO]])],
      ["Diptongos e hiatos", `<p>Las vocales se dividen en <b>abiertas</b> (<i>a, e, o</i>) y <b>cerradas</b> (<i>i, u</i>). Cuando dos vocales van juntas en una palabra, pueden pronunciarse en la misma sílaba o en sílabas distintas:</p><ul><li>Hay <b>diptongo</b> cuando dos vocales se pronuncian en la <b>misma sílaba</b>. Ocurre cuando se juntan una abierta y una cerrada átona (<i>cie-lo, pei-ne, au-la</i>) o dos cerradas distintas (<i>ciu-dad, rui-do</i>).</li><li>Hay <b>hiato</b> cuando dos vocales juntas se pronuncian en <b>sílabas distintas</b>. Ocurre cuando se juntan dos abiertas (<i>le-ón, ca-er, po-e-ta</i>), dos vocales iguales (<i>le-er, chi-i-ta</i>) o una cerrada <b>tónica</b> junto a una abierta (<i>dí-a, ma-íz, re-ír</i>).</li></ul><p>La <b>h</b> entre dos vocales no impide el diptongo ni el hiato: <i>prohibir</i> se pronuncia <i>prohi-bir</i> y lleva diptongo; <i>búho</i> tiene hiato.</p><p>Si juntas tres vocales en una misma sílaba, se forma un <b>triptongo</b>: <i>buey, Paraguay, averiguáis</i>.</p>`,
        H6.dos("Dos vocales juntas", ["Diptongo", ["misma sílaba", "cie-lo, au-la", "ciu-dad"], cAZ], ["Hiato", ["sílabas distintas", "le-ón", "dí-a, ma-íz"], cRO]), ["HbV-3YUcjk8", "DIPTONGOS E HIATOS", "Aarón de masquemaestros", 1015029]],
      ["La tilde en diptongos e hiatos", `<p>Los diptongos y los hiatos siguen las <b>reglas generales</b> de acentuación, con algunos detalles:</p><ul><li>En los <b>diptongos</b>, si la palabra lleva tilde por las reglas generales, la tilde va sobre la vocal <b>abierta</b>: <i>can-CIÓN</i> (aguda en -n), <i>des-PUÉS</i> (aguda en -s), <i>mur-CIÉ-la-go</i> (esdrújula). Si las dos vocales son cerradas, la tilde va sobre la <b>segunda</b>: <i>cuí-da-te, ben-ju-í</i>.</li><li>Los <b>hiatos de dos vocales abiertas</b> siguen las reglas generales: <i>le-ón</i> (aguda en -n, con tilde), <i>ca-er</i> (aguda en -r, sin tilde), <i>a-é-re-o</i> (esdrújula).</li><li>Los <b>hiatos con cerrada tónica</b> (<i>í, ú</i>) junto a una abierta llevan <b>siempre tilde</b> en la vocal cerrada, aunque las reglas generales digan lo contrario: <i>dí-a, rí-o, ma-íz, ba-úl, re-ír, o-ír, Ra-úl, Ma-rí-a, fríos, búho</i>. Esa tilde sirve para avisar de que no hay diptongo.</li></ul><p>Compara <i>continuo</i> (con-ti-NUO, diptongo, llana sin tilde) con <i>continúo</i> (con-ti-NÚ-o, hiato, verbo) y <i>continuó</i> (con-ti-NUÓ, aguda en vocal). ¡Tres palabras distintas!</p>`,
        L6.filas("Tildes con vocales juntas", [["diptongo", "can-ción, des-pués", cAZ], ["dos cerradas", "cuí-da-te", cVE], ["dos abiertas", "le-ón, ca-er", cNA], ["í, ú + abierta", "dí-a, ba-úl", cRO]])],
    ],
    "La tilde diacrítica": [
      ["Más parejas diacríticas", `<p>Además de <i>tú/tu, él/el, sí/si</i> y <i>más/mas</i>, hay otras parejas de monosílabos que se distinguen por la tilde:</p><ul><li><b>mí</b> (pronombre: <i>Es para mí</i>) / <b>mi</b> (posesivo: <i>mi casa</i>; o nota musical: <i>en mi menor</i>).</li><li><b>té</b> (bebida: <i>Tomo té</i>) / <b>te</b> (pronombre: <i>Te quiero</i>).</li><li><b>dé</b> (verbo dar: <i>Que me dé la razón</i>) / <b>de</b> (preposición: <i>casa de madera</i>).</li><li><b>sé</b> (verbos saber y ser: <i>No lo sé; Sé bueno</i>) / <b>se</b> (pronombre: <i>Se fue</i>).</li></ul><p>Y una palabra de dos sílabas que también puede llevar tilde diacrítica:</p><ul><li><b>aún</b> (= todavía: <i>Aún no ha llegado</i>) / <b>aun</b> (= incluso: <i>Aun así, iré</i>).</li></ul><p>Fíjate en que la palabra con tilde casi siempre es la que <b>suena más fuerte</b> en la frase, porque es tónica, mientras que la otra se pronuncia apoyada en la palabra siguiente.</p><p>¿Y <i>solo</i> y los demostrativos <i>este, ese, aquel</i>? Desde 2010 la RAE recomienda escribirlos <b>sin tilde</b> en todos los casos: <i>Solo quiero agua; Este es mi libro</i>.</p>`,
        L6.filas("Parejas diacríticas", [["mí / mi", "para mí / mi casa", cAZ], ["té / te", "bebida / pronombre", cVE], ["sé / se", "saber / se fue", cNA], ["aún / aun", "todavía / incluso", cMO]])],
      ["Interrogativos y exclamativos", `<p>Las palabras <b>qué, quién, cuál, cómo, cuándo, cuánto</b> y <b>dónde</b> llevan tilde cuando <b>preguntan</b> o <b>exclaman</b>:</p><ul><li>En preguntas y exclamaciones <b>directas</b>, con signos: <i>¿Qué quieres? ¿Dónde vives? ¡Cuánto has crecido! ¡Qué bonito!</i></li><li>También en preguntas y exclamaciones <b>indirectas</b>, aunque no haya signos: <i>No sé qué hacer; Dime cuándo vienes; Me preguntó dónde estaba; Mira cómo corre</i>.</li></ul><p>Las mismas palabras se escriben <b>sin tilde</b> cuando no preguntan ni exclaman, sino que funcionan como relativos o conjunciones y unen oraciones:</p><ul><li><i>El libro <b>que</b> leí era genial.</i></li><li><i>Iré <b>cuando</b> termine.</i></li><li><i>Es la casa <b>donde</b> nací.</i></li><li><i>Hazlo <b>como</b> quieras.</i></li><li><i>Dice <b>que</b> vendrá mañana.</i></li></ul><p>Truco: si puedes convertir la frase en una pregunta directa con esa palabra, lleva tilde. <i>No sé qué hacer</i> → <i>¿Qué hago?</i> Lleva tilde. <i>Dice que vendrá</i> → no hay pregunta: sin tilde.</p>`,
        H6.dos("¿Con tilde?", ["Pregunta", ["¿Qué quieres?", "No sé qué hacer", "¡Cuánto ruido!"], cVE], ["No pregunta", ["el libro que leí", "iré cuando acabe", "la casa donde vivo"], cMO]), ["a-JhcXVoUig", "Acentuación de Palabras Interrogativas y Exclamativas/Lengua 2 ESO/AulaFacil.com", "AulaFacil CuRsoS OnLiNe GrAtiS", 84152]],
    ],
  },
  final: [
    ["Compuestas, -mente y mayúsculas", `<p>Algunos casos especiales:</p><ul><li>Los <b>adverbios en -mente</b> conservan la tilde del adjetivo del que vienen: <i>fácil → fácilmente; rápida → rápidamente; cortés → cortésmente</i>. Si el adjetivo no la lleva, el adverbio tampoco: <i>lenta → lentamente</i>. Es una excepción, porque estos adverbios tienen dos sílabas tónicas.</li><li>Las <b>palabras compuestas</b> escritas juntas forman una sola palabra y siguen las reglas generales; el primer elemento pierde su tilde: <i>décimo + séptimo = decimoséptimo; balón + cesto = baloncesto; así + mismo = asimismo</i>. Pero <i>ciempiés</i> lleva tilde porque es aguda en -s.</li><li>Los compuestos con <b>guion</b> conservan la tilde de cada palabra: <i>teórico-práctico, histórico-artístico</i>.</li><li>Los verbos con <b>pronombres pegados</b> siguen las reglas generales: <i>dame</i> (llana en vocal) pero <i>dámelo</i> (esdrújula).</li><li>Las <b>mayúsculas</b> llevan tilde exactamente igual que las minúsculas: <i>Álvaro, Óscar, ÁFRICA, ÉXITO</i>. No ponerla es una falta.</li></ul>`,
      L6.filas("Casos especiales", [["fácil", "fácilmente", cAZ], ["balón + cesto", "baloncesto", cVE], ["da + me + lo", "dámelo", cNA], ["mayúsculas", "Álvaro, ÉXITO", cRO]])],
    ["Una tilde, otro significado", `<p>En muchas palabras, la tilde y la posición del acento cambian completamente el significado. Fíjate en estos tríos de palabras:</p><ul><li><i>término</i> (fin o palabra, esdrújula), <i>termino</i> (yo termino, llana), <i>terminó</i> (él terminó, aguda).</li><li><i>público</i> (la gente), <i>publico</i> (yo publico), <i>publicó</i> (él publicó).</li><li><i>ánimo</i> (energía), <i>animo</i> (yo animo), <i>animó</i> (él animó).</li><li><i>célebre</i> (famoso), <i>celebre</i> (que él celebre), <i>celebré</i> (yo celebré).</li><li><i>práctico</i> (útil), <i>practico</i> (yo practico), <i>practicó</i> (él practicó).</li></ul><p>Y estas parejas:</p><ul><li><i>papa</i> (patata o el papa) y <i>papá</i> (padre).</li><li><i>esta</i> (determinante: <i>esta casa</i>) y <i>está</i> (verbo estar: <i>Está aquí</i>).</li><li><i>sabana</i> (llanura con hierba) y <i>sábana</i> (tela de la cama).</li><li><i>hacia</i> (preposición) y <i>hacía</i> (verbo hacer).</li><li><i>continuo, continúo, continuó</i>.</li></ul><p>Por eso la tilde no es un adorno: es parte de la palabra. Escribir sin tildes en un mensaje puede provocar malentendidos, como le pasó a la abuela de Iker.</p>`,
      H6.rueda("Cambia el sentido", "TILDE", [["término", cAZ], ["termino", cVE], ["terminó", cNA], ["papá / papa", cRO]])],
  ],
  ejemplos: [
    ["¿Lleva tilde «cesped»?", ["Sílabas: ces-ped.", "Tónica: CES, la penúltima: llana.", "Termina en -d, que no es vocal, n ni s."], "Sí: césped."],
    ["¿Lleva tilde «examenes»?", ["Sílabas: e-xa-me-nes.", "Tónica: XA, la antepenúltima: esdrújula.", "Las esdrújulas llevan siempre tilde."], "Sí: exámenes."],
    ["¿Diptongo o hiato en «baúl»?", ["La u es tónica y va junto a la a.", "Cerrada tónica + abierta: hiato."], "Hiato: ba-úl, con tilde en la ú."],
    ["¿Lleva tilde «que» en «No sé que decir»?", ["Podemos preguntar: ¿Qué digo?", "Es una pregunta indirecta."], "Sí: No sé qué decir."],
    ["¿Lleva tilde «dio»?", ["Tiene una sola sílaba.", "No existe otra «dio» con la que confundirla."], "No: los monosílabos no llevan tilde, salvo la diacrítica."],
  ],
  errores: ["Escribir «fué», «dió» o «tí»: son monosílabos sin tilde.", "Olvidar la tilde de los hiatos: «dia», «maiz», «Raul».", "Quitar la tilde a las mayúsculas: «Alvaro» en lugar de «Álvaro».", "Poner tilde a «que» o «donde» cuando no preguntan: «el libro qué leí».", "Creer que el plural conserva siempre la tilde: canción → canciones.", "Confundir acento con tilde: todas las palabras tienen acento, no todas tilde."],
  ejercicios: [
    ["b", "Separa en sílabas: hablar, calle, carta.", "Ha-blar, ca-lle, car-ta."],
    ["b", "¿Cuál es la sílaba tónica de «ventana»?", "Ta (ven-TA-na)."],
    ["b", "Clasifica: sofá, mesa, música.", "Aguda, llana, esdrújula."],
    ["b", "Pon tilde si hace falta: arbol, camion, reloj.", "Árbol, camión, reloj."],
    ["b", "¿Llevan tilde «fue» y «vio»?", "No."],
    ["b", "Escribe tres palabras esdrújulas.", "Música, pájaro, plátano."],
    ["b", "Completa con tú o tu: «___ tienes ___ mochila».", "Tú tienes tu mochila."],
    ["b", "¿Es «día» diptongo o hiato?", "Hiato: dí-a."],
    ["m", "Pon tilde si hace falta: cesped, lapiz, examen, joven.", "Césped, lápiz, examen, joven."],
    ["m", "Escribe el plural: examen, joven, canción.", "Exámenes, jóvenes, canciones."],
    ["m", "Separa y di si hay diptongo o hiato: ciudad, poeta, aula.", "Ciu-dad (diptongo), po-e-ta (hiato), au-la (diptongo)."],
    ["m", "Pon tilde: rio (sustantivo), baul, Maria, heroe.", "Río, baúl, María, héroe."],
    ["m", "Completa con mi o mí: «Este regalo es para ___ y ___ hermano».", "Para mí y mi hermano."],
    ["m", "Completa con aún o aun: «___ no he terminado».", "Aún no he terminado."],
    ["m", "Pon tilde si hace falta: «¿Donde vives? Vivo donde nací».", "¿Dónde vives? Vivo donde nací."],
    ["m", "Escribe el adverbio en -mente de: fácil, lento, cortés.", "Fácilmente, lentamente, cortésmente."],
    ["m", "Corrige: «ALVARO GANO EL CONCURSO».", "ÁLVARO GANÓ EL CONCURSO."],
    ["a", "Explica por qué «baúl» lleva tilde aunque es aguda acabada en l.", "Porque es un hiato con cerrada tónica, que siempre lleva tilde."],
    ["a", "Explica la diferencia entre término, termino y terminó.", "Sustantivo esdrújulo; verbo en presente, llano; verbo en pasado, agudo."],
    ["a", "Explica por qué «mesa» no lleva tilde y «árbol» sí, si las dos son llanas.", "Mesa acaba en vocal; árbol acaba en l, que no es vocal, n ni s."],
    ["a", "Escribe dos oraciones con «que» y «qué» y explica la diferencia.", "Respuesta abierta. «Qué» pregunta o exclama; «que» une oraciones."],
    ["a", "Pon todas las tildes: «Mi papa esta en el jardin y aun no ha comido».", "Mi papá está en el jardín y aún no ha comido."],
    ["a", "¿Por qué «guion» no lleva tilde desde 2010?", "Porque se considera monosílabo ortográfico."],
    ["a", "Escribe un mensaje sin tildes que pueda entenderse mal y corrígelo.", "Respuesta abierta."],
  ],
  quiz: [
    ["«Ha-blar» se separa así porque «bl»…", ["nunca se separa", "siempre se separa", "es una vocal"], "Sílabas."],
    ["La tilde se escribe…", ["solo en algunas palabras", "en todas las palabras", "solo en mayúsculas"], "Acento y tilde."],
    ["«Exámenes» lleva tilde porque es…", ["esdrújula", "aguda", "llana acabada en s"], "Plurales."],
    ["¿Cuál está bien escrita?", ["fue", "fué", "fuè"], "Monosílabos."],
    ["En «cie-lo» hay…", ["diptongo", "hiato", "triptongo"], "Diptongos."],
    ["«Maíz» lleva tilde porque…", ["tiene un hiato con í tónica", "es esdrújula", "es monosílaba"], "Hiatos."],
    ["«Aún» con tilde significa…", ["todavía", "incluso", "también"], "Diacrítica."],
    ["«No sé ___ hacer». Completa:", ["qué", "que", "quē"], "Interrogativos."],
    ["«Fácilmente» lleva tilde porque…", ["conserva la del adjetivo fácil", "es esdrújula", "termina en vocal"], "-mente."],
    ["«Publicó» es una palabra…", ["aguda", "llana", "esdrújula"], "Significado."],
  ],
  examen: [
    ["La abuela de Iker quería decir que estaba frita…", ["la patata", "el padre", "la sartén"], "Lectura."],
    ["¿Cuál lleva tilde?", ["césped", "reloj", "mesa"], "Reglas."],
    ["En «po-e-ta» hay…", ["hiato", "diptongo", "triptongo"], "Hiatos."],
    ["«Sé» con tilde puede ser del verbo…", ["saber", "estar", "dar"], "Diacrítica."],
    ["«El libro ___ leí». Completa:", ["que", "qué", "quién"], "Relativos."],
    ["Las mayúsculas…", ["llevan tilde como las minúsculas", "nunca llevan tilde", "solo en títulos"], "Mayúsculas."],
  ],
  tarjetas: [
    ["Separar sílabas", "ca-sa, car-ta, ha-blar; ch, ll, rr no se separan."],
    ["Monosílabos", "Sin tilde: fue, dio, vio, ti, guion. Solo tilde diacrítica."],
    ["Diptongo e hiato", "Diptongo: misma sílaba (cie-lo). Hiato: separadas (le-ón, dí-a)."],
    ["Interrogativos", "qué, quién, cómo, cuándo, dónde con tilde al preguntar, también en indirectas."],
    ["Casos especiales", "fácilmente, decimoséptimo, dámelo, ÁLVARO."],
  ],
  glosario: [
    ["Sílaba", "Golpe de voz con que se pronuncia una palabra."],
    ["Acento", "Mayor fuerza de voz de una sílaba."],
    ["Tilde", "Rayita que se escribe sobre la vocal tónica."],
    ["Átona", "Palabra o sílaba sin acento propio."],
    ["Monosílabo", "Palabra de una sola sílaba."],
    ["Vocal abierta", "a, e, o."],
    ["Vocal cerrada", "i, u."],
    ["Diptongo", "Dos vocales en la misma sílaba."],
    ["Hiato", "Dos vocales juntas en sílabas distintas."],
    ["Triptongo", "Tres vocales en la misma sílaba."],
    ["Tilde diacrítica", "Tilde que distingue palabras iguales."],
    ["Interrogativo", "Palabra que sirve para preguntar."],
  ],
  situacion: {
    titulo: "Rescatadores de tildes",
    reto: "La clase revisa mensajes, carteles y textos de la vida diaria para rescatar las tildes perdidas y demostrar que cambian el significado.",
    pasos: ["Recoged mensajes, carteles o subtítulos con tildes que faltan o sobran.", "Corregidlos aplicando los cuatro pasos y las reglas de diptongos, hiatos y diacríticas.", "Inventad frases graciosas en las que una tilde cambie el significado y dibujadlas.", "Organizad un concurso de dictados por equipos con autocorrección."],
    producto: "Un mural de «tildes rescatadas» y un concurso de dictados.",
    evaluacion: ["Separa sílabas y localiza la tónica.", "Aplica las reglas generales y especiales de acentuación.", "Usa la tilde diacrítica y la de interrogativos.", "Explica cómo la tilde cambia el significado."],
  },
});
