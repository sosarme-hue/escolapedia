// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

// Estratos horizontales: [color, grosor, etiqueta].
function estratos(x, y, w, capas) {
  let yy = y;
  return capas.map(([c, h, t]) => { const r = `<rect x="${x}" y="${yy}" width="${w}" height="${h}" fill="${c}"/>${t ? `<text x="${x + w + 8}" y="${yy + h / 2 + 4}" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>` : ""}`; yy += h; return r; }).join("");
}

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "La historia de la Tierra",
  minutos: 40,
  objetivos: ["Comprender la escala del tiempo geológico", "Aplicar los principios de la estratigrafía y la datación", "Describir los grandes acontecimientos de cada eón y era"],
  claves: ["tiempo geológico", "estrato", "superposición", "fósil guía", "datación radiométrica", "extinción masiva"],
  pregunta: {
    texto: "Si comprimes toda la historia de la Tierra en un solo año, ¿en qué momento aparecemos los seres humanos?",
    respuesta: "El <b>31 de diciembre a las 23:36</b>. Los dinosaurios se extinguen el 26 de diciembre y la vida tardó hasta finales de marzo en aparecer. La historia de la Tierra es tan larga (<mark>4 600 millones de años</mark>) que necesitamos una escala especial para entenderla.",
  },
  bloques: [
    {
      html: `<h3>El tiempo geológico</h3><p>Los geólogos miden el tiempo en <b>millones de años (Ma)</b> y lo dividen en <b>eones</b>, <b>eras</b> y <b>periodos</b>, separados por grandes cambios en la vida o en el planeta. El <mark>Precámbrico</mark> ocupa casi el 90 % de la historia. Después vienen las tres eras del eón Fanerozoico: <b>Paleozoico</b> (541-252 Ma), <b>Mesozoico</b> (252-66 Ma) y <b>Cenozoico</b> (desde 66 Ma hasta hoy).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Barra del tiempo geológico: el Precámbrico ocupa casi todo y las tres eras finales un trozo pequeño">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="14" y="40" width="200" height="30" fill="var(--muted)" opacity=".6"/><rect x="214" y="40" width="18" height="30" fill="var(--pen)"/><rect x="232" y="40" width="9" height="30" fill="var(--leaf)"/><rect x="241" y="40" width="5" height="30" fill="var(--sun)"/>
        <g ${F} font-size="11" font-weight="700"><text x="114" y="60" text-anchor="middle" fill="#fff">Precámbrico</text><text x="14" y="90" fill="var(--muted)">4 600 Ma</text><text x="246" y="90" text-anchor="end" fill="var(--muted)">hoy</text></g>
        <g ${F} font-size="12" font-weight="700"><rect x="40" y="110" width="12" height="12" fill="var(--pen)"/><text x="58" y="121" fill="var(--ink)">Paleozoico</text><rect x="40" y="130" width="12" height="12" fill="var(--leaf)"/><text x="58" y="141" fill="var(--ink)">Mesozoico</text><rect x="40" y="150" width="12" height="12" fill="var(--sun)"/><text x="58" y="161" fill="var(--ink)">Cenozoico</text></g>
      </svg>`,
    },
    {
      html: `<h3>Leer las rocas: los estratos</h3><p>Las rocas sedimentarias se forman en capas o <b>estratos</b>. La <b>estratigrafía</b> los interpreta con unos principios: <mark>superposición</mark> (lo de abajo es más antiguo), <b>horizontalidad</b> (se depositan horizontales; si están plegados, algo los movió después) y <mark>sucesión de acontecimientos</mark> (una falla o un dique es más moderno que las rocas que corta).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Corte geológico con estratos, una falla y un dique: abajo lo más antiguo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${estratos(20, 30, 160, [["var(--sun)", 26], ["var(--leaf)", 26], ["var(--water)", 26], ["var(--red)", 26], ["var(--muted)", 26]])}
        <path d="M120 30 L 100 160" stroke="var(--ink)" stroke-width="3"/><rect x="56" y="30" width="10" height="130" fill="var(--ink)" opacity=".7"/>
        <g ${F} font-size="11" font-weight="700"><text x="188" y="48" fill="var(--ink)">más moderno</text><text x="188" y="150" fill="var(--ink)">más antiguo</text><text x="124" y="174" fill="var(--ink)">falla</text><text x="36" y="174" fill="var(--ink)">dique</text></g>
      </svg>`,
    },
    {
      html: `<h3>Datar las rocas</h3><p>La <b>datación relativa</b> ordena los hechos (esto ocurrió antes que aquello) usando los estratos y los <b>fósiles guía</b>: especies que vivieron poco tiempo pero en muchos lugares, como los trilobites (Paleozoico) o los ammonites (Mesozoico). La <b>datación absoluta</b> da la edad en años gracias a los <mark>isótopos radiactivos</mark>, que se desintegran a un ritmo fijo (su <b>semivida</b>). El carbono-14 sirve para restos de hasta unos 50 000 años; el uranio, para rocas de miles de millones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fósiles guía: trilobites del Paleozoico y ammonites del Mesozoico">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <ellipse cx="70" cy="80" rx="30" ry="42" fill="var(--muted)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M44 ${56 + i * 10} H 96" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<path d="M60 40 V 120 M80 40 V 120" stroke="var(--ink)" stroke-width="1.5"/>
        <path d="M190 80 m 0 0 ${Array.from({ length: 60 }, (_, i) => { const a = i * 0.32, r = 3 + i * 0.62; return `L ${(190 + r * Math.cos(a)).toFixed(1)} ${(80 + r * Math.sin(a)).toFixed(1)}`; }).join(" ")}" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle"><text x="70" y="146" fill="var(--pen)">trilobites</text><text x="70" y="162" font-size="10" fill="var(--muted)">Paleozoico</text><text x="190" y="146" fill="var(--leaf)">ammonites</text><text x="190" y="162" font-size="10" fill="var(--muted)">Mesozoico</text></g>
      </svg>`,
    },
    {
      html: `<h3>Precámbrico y Paleozoico</h3><p>En el <b>Precámbrico</b> se forma la Tierra, aparecen las primeras bacterias y las <b>cianobacterias</b> llenan la atmósfera de <mark>oxígeno</mark>. Al final surgen los primeros animales pluricelulares. En el <b>Paleozoico</b> se produce la <mark>explosión cámbrica</mark> de animales con concha, aparecen los peces, las plantas y los anfibios conquistan la tierra firme y se forman grandes bosques que darán el carbón. Termina con la mayor extinción de la historia: desaparece el 90 % de las especies marinas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Seres típicos del Paleozoico: trilobites, pez acorazado y helecho gigante">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="10" y="90" width="120" height="80" fill="var(--water)" opacity=".3"/>
        <path d="M30 130 Q 50 110 80 126 L 96 116 V 140 L 80 132 Q 50 146 30 130 Z" fill="var(--pen)"/><circle cx="40" cy="126" r="2.5" fill="#fff"/>
        <path d="M190 160 V 60" stroke="var(--leaf)" stroke-width="5"/>${[70, 90, 110, 130].map((y) => `<path d="M190 ${y} q -30 -6 -44 6 M190 ${y} q 30 -6 44 6" fill="none" stroke="var(--leaf)" stroke-width="4"/>`).join("")}
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="64" y="104" fill="var(--pen)">peces</text><text x="190" y="44" fill="var(--leaf)">helechos gigantes</text></g>
      </svg>`,
    },
    {
      html: `<h3>Mesozoico y Cenozoico</h3><p>El <b>Mesozoico</b> es la era de los <mark>dinosaurios</mark> y los ammonites. Aparecen los mamíferos, las aves y las plantas con flor, y Pangea se fragmenta. Hace 66 Ma, el impacto de un <b>asteroide</b> en Yucatán provoca una extinción masiva. En el <b>Cenozoico</b> los <mark>mamíferos se diversifican</mark>, se levantan los Alpes, los Pirineos y el Himalaya y, en los últimos millones de años, aparece el género <i>Homo</i>. Hoy muchos científicos hablan de una sexta extinción causada por el ser humano.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Silueta de dinosaurio y de mamut, con un asteroide entre ambas eras">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 130 Q 40 120 60 112 L 72 70 Q 76 60 86 62 L 92 70 L 80 76 L 74 112 Q 90 112 100 124 L 96 150 H 88 L 86 132 H 62 L 58 150 H 50 L 48 134 Q 32 136 20 130 Z" fill="var(--leaf)"/>
        <circle cx="130" cy="40" r="10" fill="var(--red)"/><path d="M122 46 L 104 64 M126 50 L 112 66" stroke="var(--sun)" stroke-width="3"/>
        <path d="M160 140 V 100 Q 160 76 190 74 Q 222 74 226 96 L 236 112 Q 240 124 230 130 L 226 116 V 140 H 216 V 116 H 176 V 140 Z" fill="var(--sun)" opacity=".85"/>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="60" y="170" fill="var(--leaf)">Mesozoico</text><text x="198" y="170" fill="var(--sun)">Cenozoico</text><text x="130" y="84" fill="var(--red)">66 Ma</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Las eras y sus protagonistas",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Precámbrico, Paleozoico, Mesozoico y Cenozoico con su duración y seres típicos">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Precámbrico", "4 600-541 Ma", "bacterias, oxígeno", "primeros animales", "var(--muted)"], ["Paleozoico", "541-252 Ma", "trilobites, peces", "anfibios, carbón", "var(--pen)"], ["Mesozoico", "252-66 Ma", "dinosaurios", "ammonites, aves", "var(--leaf)"], ["Cenozoico", "66 Ma-hoy", "mamíferos", "ser humano", "var(--sun)"]]
        .map(([n, t, a, b, c], i) => `<rect x="${16 + i * 154}" y="20" width="146" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${89 + i * 154}" y="58" text-anchor="middle" font-size="18" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${89 + i * 154}" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)" ${F}>${t}</text>
          <text x="${89 + i * 154}" y="136" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${a}</text>
          <text x="${89 + i * 154}" y="156" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${b}</text>`).join("")}
    </svg>`,
  },
  video: { id: "XrA5qcs31iw", titulo: "Toda la evolución de la Tierra en solo 10 minutos", canal: "Qué pasaría si - What If Español", vistas: 5018247, megusta: 0, busqueda: "historia de la Tierra eras geológicas" },
  quiz: [
    { q: "¿Qué edad tiene aproximadamente la Tierra?", o: ["4 600 millones de años", "6 000 años", "66 millones de años"], a: 0, e: "La Tierra se formó hace unos 4 600 millones de años." },
    { q: "Según el principio de superposición, los estratos de abajo son…", o: ["más modernos", "más antiguos", "de la misma edad"], a: 1, e: "Se depositan unos encima de otros: los primeros quedan debajo." },
    { q: "¿Qué es un fósil guía?", o: ["Cualquier fósil grande", "Un fósil de una especie que vivió poco tiempo y en muchos lugares", "Un fósil de dinosaurio"], a: 1, e: "Permite saber la edad de los estratos donde aparece." },
    { q: "¿En qué era vivieron los dinosaurios?", o: ["Paleozoico", "Mesozoico", "Cenozoico"], a: 1, e: "Del Triásico al Cretácico, hasta hace 66 millones de años." },
    { q: "¿Qué seres llenaron de oxígeno la atmósfera primitiva?", o: ["Los dinosaurios", "Las cianobacterias", "Los helechos"], a: 1, e: "Hacían la fotosíntesis y liberaron oxígeno durante cientos de millones de años." },
  ],
  examen: [
    { q: "Una falla que corta varios estratos es…", o: ["más antigua que ellos", "más moderna que ellos", "de la misma edad"], a: 1, e: "Para cortar las rocas, estas ya tenían que existir." },
    { q: "El carbono-14 sirve para datar…", o: ["rocas de millones de años", "restos orgánicos de hasta unos 50 000 años", "cualquier mineral"], a: 1, e: "Su semivida es de 5 730 años: tras unas 10 semividas apenas queda." },
    { q: "¿Qué causó probablemente la extinción de los dinosaurios?", o: ["Una glaciación", "El impacto de un gran asteroide", "Los seres humanos"], a: 1, e: "El cráter de Chicxulub, en Yucatán, es de hace 66 millones de años." },
  ],
  feynman: ["Por qué hace falta una escala especial para el tiempo geológico", "Los principios de superposición y de sucesión de acontecimientos", "La diferencia entre datación relativa y absoluta", "Un acontecimiento importante de cada era", "Qué es una extinción masiva"],
  mapa: mapa("HISTORIA DE LA TIERRA", "var(--eso)", [
    ["Tiempo geológico", "eones · eras · periodos", "var(--ink)"],
    ["Estratigrafía", "superposición · fallas", "var(--pen)"],
    ["Datación", "fósiles guía · radiactividad", "var(--red)"],
    ["Eras", "Precámbrico → Cenozoico", "var(--leaf)"],
  ], 250),
  tarjetas: [
    ["Principio de superposición", "En una serie de estratos sin alterar, los inferiores son más antiguos que los superiores."],
    ["Las tres eras del Fanerozoico", "Paleozoico, Mesozoico y Cenozoico."],
    ["¿Qué es un fósil guía?", "Un fósil de una especie de corta duración y amplia distribución que permite datar estratos."],
    ["¿Qué mide la datación radiométrica?", "La edad absoluta, a partir de la desintegración de isótopos radiactivos."],
    ["¿Cuándo se extinguieron los dinosaurios?", "Hace 66 millones de años, al final del Mesozoico."],
  ],
  familias: ["Haced en casa la «historia de la Tierra en un año» con un calendario y marcad los grandes momentos.", "En una excursión, buscad un talud o acantilado con capas y pensad cuál es la más antigua.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La Tierra y su historia: tiempo geológico, principios estratigráficos, datación y principales acontecimientos geológicos y biológicos (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Línea del tiempo a escala en el pasillo (1 m = 100 Ma).", "Columna estratigráfica con capas de arena de colores en un bote.", "Resolver cortes geológicos ordenando acontecimientos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Escala temporal geológica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Escala_temporal_geol%C3%B3gica" },
  ],
  revisado: "2026-11-12",
};
