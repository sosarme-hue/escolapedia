// Biología y Geología 4º ESO. Dibujos propios en SVG.
const { F, D, mapa, flecha } = require("./_util");

module.exports = {
  materia: "Biología y Geología",
  curso: "4-eso",
  titulo: "El origen de la vida y la evolución",
  minutos: 40,
  objetivos: ["Conocer las hipótesis sobre el origen de la vida", "Comparar el fijismo, el lamarckismo y el darwinismo", "Explicar la selección natural, las pruebas de la evolución y la especiación"],
  claves: ["evolución", "selección natural", "adaptación", "variabilidad", "especie", "fósil"],
  pregunta: {
    texto: "Las bacterias que causan algunas infecciones se están volviendo resistentes a los antibióticos. ¿Es que «aprenden» a defenderse?",
    respuesta: "No aprenden: <mark>evolucionan por selección natural</mark>. Entre millones de bacterias, unas pocas ya tenían por azar una mutación que las protegía. El antibiótico mata a las demás y <b>las resistentes sobreviven y se multiplican</b>. Por eso hay que tomar los antibióticos solo cuando los receta el médico y hasta el final.",
  },
  bloques: [
    {
      html: `<h3>El origen de la vida</h3><p>La Tierra se formó hace unos <b>4 600 millones de años</b> y los primeros seres vivos, bacterias, aparecieron hace unos <mark>3 800 millones</mark>. Según la hipótesis de <b>Oparin y Haldane</b>, en la atmósfera primitiva sin oxígeno, la energía de rayos y volcanes formó moléculas orgánicas que se concentraron en los océanos («sopa primitiva»). En 1953, <b>Miller y Urey</b> lo recrearon en el laboratorio y obtuvieron aminoácidos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Experimento de Miller: matraz con agua caliente, gases y descargas eléctricas que producen aminoácidos">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <circle cx="70" cy="120" r="30" fill="var(--water)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>
        <circle cx="180" cy="60" r="34" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M70 90 V 50 H 146 M214 60 H 236 V 150 H 100" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
        <path d="M172 44 L 182 58 L 174 60 L 186 78" fill="none" stroke="var(--sun)" stroke-width="3"/>
        <path d="M56 160 Q 62 150 68 160 Q 74 150 80 160" fill="var(--red)"/>
        <g ${F} font-size="11" font-weight="700"><text x="150" y="112" fill="var(--ink)">CH₄ NH₃ H₂ H₂O</text><text x="20" y="80" fill="var(--pen)">océano</text><text x="150" y="128" fill="var(--leaf)">→ aminoácidos</text></g>
      </svg>`,
    },
    {
      html: `<h3>Fijismo y lamarckismo</h3><p>Hasta el siglo XVIII dominaba el <b>fijismo</b>: las especies se crearon tal como son y no cambian. <b>Lamarck</b> (1809) propuso la primera teoría de la evolución: los seres vivos cambian por <mark>uso y desuso</mark> de sus órganos y <mark>heredan los caracteres adquiridos</mark>. Para él, las jirafas estiraron el cuello para alcanzar las hojas altas y pasaron ese cuello largo a sus crías. Hoy sabemos que lo que se adquiere en vida no se hereda.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Según Lamarck, una jirafa estira el cuello y su cría nace con el cuello más largo">
        <defs>${flecha("ev1", "var(--muted)")}</defs>
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[60, 50], [190, 80]].map(([x, h]) => `<ellipse cx="${x}" cy="130" rx="28" ry="14" fill="var(--sun)"/><path d="M${x + 18} 124 L ${x + 30} ${120 - h}" stroke="var(--sun)" stroke-width="10" stroke-linecap="round"/><circle cx="${x + 34}" cy="${116 - h}" r="8" fill="var(--sun)"/><path d="M${x - 16} 140 V 164 M${x + 16} 140 V 164" stroke="var(--sun)" stroke-width="5"/>`).join("")}
        <path d="M110 120 H 150" stroke="var(--muted)" stroke-width="2.5" marker-end="url(#ev1)"/>
        <text x="130" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" ${F}>«lo adquirido se hereda» ✗</text>
      </svg>`,
    },
    {
      html: `<h3>Darwin y la selección natural</h3><p><b>Darwin</b> y <b>Wallace</b> (1858) explicaron la evolución así: 1) en una población hay <mark>variabilidad</mark>, nadie es igual; 2) nacen más individuos de los que pueden sobrevivir: hay <b>lucha por la existencia</b>; 3) los que tienen variaciones más ventajosas en su ambiente <mark>sobreviven y se reproducen más</mark>; 4) transmiten esas variaciones y, con muchas generaciones, la especie cambia. Es la <b>selección natural</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Polillas claras y oscuras sobre troncos oscuros: los pájaros cazan las claras y aumentan las oscuras">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[60, [1, 0, 1, 0, 1, 0]], [190, [0, 0, 1, 0, 0, 0]]].map(([x, ps]) => `<rect x="${x - 30}" y="20" width="60" height="130" rx="6" fill="var(--ink)" opacity=".75"/>${ps.map((c, i) => `<ellipse cx="${x - 12 + (i % 2) * 24}" cy="${40 + Math.floor(i / 2) * 40}" rx="9" ry="6" fill="${c ? "var(--card)" : "#333"}" stroke="${c ? "var(--muted)" : "#555"}"/>`).join("")}`).join("")}
        <text x="125" y="90" text-anchor="middle" font-size="22" fill="var(--muted)" ${F}>→</text>
        <g ${F} font-size="11" font-weight="700" text-anchor="middle"><text x="60" y="168" fill="var(--ink)">generación 1</text><text x="190" y="168" fill="var(--ink)">generación 20</text></g>
      </svg>`,
    },
    {
      html: `<h3>Las pruebas de la evolución</h3><p><b>Fósiles</b>: muestran seres que ya no existen y formas intermedias, como <i>Archaeopteryx</i>, entre reptil y ave. <b>Anatomía comparada</b>: los <mark>órganos homólogos</mark> (brazo humano, ala de murciélago, aleta de ballena) tienen los mismos huesos porque vienen de un antepasado común. <b>Embriología</b>: los embriones de vertebrados se parecen mucho. <b>Bioquímica y genética</b>: cuanto más emparentadas están dos especies, <mark>más parecido es su ADN</mark> (humano y chimpancé comparten casi el 99 %).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Órganos homólogos: brazo humano, ala de murciélago y aleta de ballena con los mismos huesos coloreados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[[44, "humano", 0], [130, "murciélago", 1], [216, "ballena", 2]].map(([x, t, k]) => `<rect x="${x - 5}" y="24" width="10" height="${k === 2 ? 26 : 44}" rx="5" fill="var(--red)"/><rect x="${x - 8}" y="${k === 2 ? 52 : 70}" width="6" height="${k === 2 ? 20 : 34}" rx="3" fill="var(--pen)"/><rect x="${x + 2}" y="${k === 2 ? 52 : 70}" width="6" height="${k === 2 ? 20 : 34}" rx="3" fill="var(--pen)"/>
          ${[-12, -6, 0, 6, 12].map((d) => `<path d="M${x + d * 0.5} ${k === 2 ? 74 : 106} L ${x + d * (k === 1 ? 3.4 : k === 2 ? 1.3 : 0.9)} ${k === 1 ? 150 : k === 2 ? 122 : 132}" stroke="var(--leaf)" stroke-width="3.5" stroke-linecap="round"/>`).join("")}
          <text x="${x}" y="168" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
    {
      html: `<h3>La teoría sintética y la especiación</h3><p>En el siglo XX, la genética completó a Darwin: la variabilidad procede de las <mark>mutaciones</mark> y de la <b>recombinación</b> en la meiosis. Es la <b>teoría sintética</b> o neodarwinismo. Una nueva <b>especie</b> aparece (especiación) cuando dos poblaciones quedan <mark>aisladas</mark>, por ejemplo por una montaña o un mar, acumulan diferencias y ya no pueden tener descendencia fértil entre sí. Así se formaron los pinzones de las Galápagos que estudió Darwin.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una población separada por una barrera forma dos especies distintas con el tiempo">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${Array.from({ length: 8 }, (_, i) => `<circle cx="${40 + (i % 4) * 26}" cy="${40 + Math.floor(i / 4) * 24}" r="7" fill="var(--pen)"/><circle cx="${150 + (i % 4) * 26}" cy="${40 + Math.floor(i / 4) * 24}" r="7" fill="var(--pen)"/>`).join("")}
        <path d="M130 20 L 120 100 L 140 100 Z" fill="var(--muted)"/>
        ${Array.from({ length: 6 }, (_, i) => `<rect x="${34 + (i % 3) * 30}" y="${116 + Math.floor(i / 3) * 24}" width="14" height="14" fill="var(--leaf)"/><path d="M${170 + (i % 3) * 30} ${116 + Math.floor(i / 3) * 24} l 8 14 h -16 z" fill="var(--red)"/>`).join("")}
        <path d="M130 108 V 170" stroke="var(--muted)" stroke-width="5"/>
        <g ${F} font-size="11" font-weight="700"><text x="146" y="104" fill="var(--muted)">barrera</text></g>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Tres ideas sobre las especies",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="Fijismo, lamarckismo y darwinismo: idea principal y explicación del cuello de la jirafa">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${[["Fijismo", "las especies no cambian", "la jirafa siempre", "tuvo el cuello largo", "var(--muted)"], ["Lamarck", "uso y desuso · se hereda", "lo adquirido: estiró el cuello", "y se lo pasó a sus crías", "var(--sun)"], ["Darwin", "variabilidad + selección", "las de cuello más largo", "comían más y tuvieron más crías", "var(--leaf)"]]
        .map(([n, a, b, c1, c], i) => `<rect x="${20 + i * 206}" y="20" width="190" height="190" rx="14" fill="var(--card)" stroke="${c}" stroke-width="3"/>
          <text x="${115 + i * 206}" y="60" text-anchor="middle" font-size="24" font-weight="700" fill="${c}" ${D}>${n}</text>
          <text x="${115 + i * 206}" y="100" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${a}</text>
          <text x="${115 + i * 206}" y="150" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${b}</text>
          <text x="${115 + i * 206}" y="168" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>${c1}</text>`).join("")}
    </svg>`,
  },
  video: { id: "3gT1qH9b1cg", titulo: "Teoría de la evolución: 5 preguntas frecuentes", canal: "CuriosaMente", vistas: 1894481, megusta: 0, busqueda: "teoría de la evolución Darwin" },
  quiz: [
    { q: "¿Hace cuánto aparecieron los primeros seres vivos en la Tierra?", o: ["Unos 3 800 millones de años", "Unos 65 millones de años", "Unos 10 000 años"], a: 0, e: "Las primeras bacterias aparecieron hace unos 3 800 millones de años." },
    { q: "¿Qué idea de Lamarck se ha demostrado falsa?", o: ["Que las especies cambian", "Que se heredan los caracteres adquiridos en vida", "Que hay fósiles"], a: 1, e: "Lo que se adquiere en vida (músculos, cicatrices) no cambia el ADN de los gametos." },
    { q: "Según Darwin, ¿qué individuos dejan más descendencia?", o: ["Los más grandes", "Los mejor adaptados a su ambiente", "Los más viejos"], a: 1, e: "La selección natural favorece las variaciones ventajosas en cada ambiente." },
    { q: "El brazo humano y el ala del murciélago son órganos…", o: ["análogos", "homólogos", "vestigiales"], a: 1, e: "Tienen el mismo origen y los mismos huesos aunque su función sea distinta." },
    { q: "¿De dónde procede la variabilidad según la teoría sintética?", o: ["Del uso de los órganos", "De las mutaciones y la recombinación genética", "Del clima"], a: 1, e: "La genética explicó el origen de las variaciones que Darwin observaba." },
  ],
  examen: [
    { q: "¿Qué demostró el experimento de Miller y Urey?", o: ["Que la vida vino del espacio", "Que se pueden formar moléculas orgánicas a partir de gases simples", "Que las bacterias evolucionan"], a: 1, e: "Con gases de la atmósfera primitiva y descargas eléctricas obtuvieron aminoácidos." },
    { q: "Las bacterias resistentes a antibióticos son un ejemplo de…", o: ["lamarckismo", "selección natural", "fijismo"], a: 1, e: "El antibiótico selecciona a las que ya eran resistentes por azar." },
    { q: "Para que aparezca una especie nueva suele hacer falta…", o: ["aislamiento entre poblaciones", "que los individuos se esfuercen", "que no haya mutaciones"], a: 0, e: "Las poblaciones aisladas acumulan diferencias hasta no poder cruzarse." },
  ],
  feynman: ["Cómo pudo originarse la vida según Oparin y Miller", "La diferencia entre Lamarck y Darwin con el ejemplo de la jirafa", "Los cuatro pasos de la selección natural", "Tres pruebas de la evolución", "Cómo se forma una especie nueva"],
  mapa: mapa("EVOLUCIÓN", "var(--eso)", [
    ["Origen de la vida", "sopa primitiva · Miller", "var(--ink)"],
    ["Teorías", "fijismo · Lamarck · Darwin", "var(--sun)"],
    ["Selección natural", "variabilidad · supervivencia", "var(--leaf)"],
    ["Pruebas y especiación", "fósiles · homólogos · ADN", "var(--pen)"],
  ], 250),
  tarjetas: [
    ["¿Qué es la selección natural?", "La supervivencia y mayor reproducción de los individuos con variaciones más ventajosas en su ambiente."],
    ["¿Qué son los órganos homólogos?", "Órganos con el mismo origen evolutivo y estructura, aunque tengan funciones distintas."],
    ["¿Qué es una especie?", "Un grupo de individuos que pueden cruzarse entre sí y tener descendencia fértil."],
    ["Idea principal del lamarckismo", "Uso y desuso de los órganos y herencia de los caracteres adquiridos."],
    ["¿Qué añade la teoría sintética a Darwin?", "Explica la variabilidad con la genética: mutaciones y recombinación."],
  ],
  familias: ["Visitad un museo de ciencias naturales y buscad fósiles de formas intermedias.", "Hablad de por qué hay que terminar los antibióticos aunque ya os encontréis bien.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Genética y evolución: origen de la vida, teorías evolutivas, selección natural, pruebas de la evolución y especiación (RD 217/2022, Biología y Geología 4º).",
    ideas: ["Simulación de selección natural con «presas» de papel de colores sobre fondos distintos.", "Comparar huesos homólogos con láminas o modelos.", "Lectura guiada de fragmentos de «El origen de las especies»."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Evolución biológica, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Evoluci%C3%B3n_biol%C3%B3gica" },
  ],
  revisado: "2026-11-12",
};
