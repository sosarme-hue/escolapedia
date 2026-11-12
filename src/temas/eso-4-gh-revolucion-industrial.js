// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Revolución Industrial",
  minutos: 35,
  objetivos: ["Explicar por qué la industrialización empezó en Gran Bretaña", "Distinguir la primera y la segunda Revolución Industrial", "Analizar sus consecuencias sociales: el movimiento obrero"],
  claves: ["máquina de vapor", "fábrica", "burguesía", "proletariado", "sindicato", "capitalismo"],
  pregunta: {
    texto: "En 1750 casi todo se hacía a mano y la mayoría de la gente vivía en el campo. Cien años después, millones de personas trabajaban en fábricas de ciudades llenas de humo. ¿Qué cambió?",
    respuesta: "Llegaron las <mark>máquinas movidas por energía</mark> (primero el vapor) y la producción pasó del taller a la fábrica. Fue el mayor cambio en la forma de vivir desde la invención de la agricultura: la <b>Revolución Industrial</b>, que empezó en Gran Bretaña hacia 1760.",
  },
  bloques: [
    {
      html: `<h3>Por qué empezó en Gran Bretaña</h3><p>Se juntaron varias condiciones: una <b>revolución agrícola</b> que produjo más alimentos con menos campesinos, <mark>crecimiento de la población</mark> y mano de obra para las fábricas, mucho <b>carbón y hierro</b>, capital acumulado por el comercio colonial y un sistema político que favorecía a la burguesía emprendedora.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco factores que confluyen en la industrialización británica">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="12" font-weight="700" text-anchor="middle">
          ${[["agricultura", 50, 34, "var(--leaf)"], ["población", 210, 34, "var(--pen)"], ["carbón y hierro", 54, 150, "var(--ink)"], ["capital", 206, 150, "var(--sun)"], ["burguesía", 130, 24, "var(--inf)"]]
            .map(([t, x, y, c]) => `<path d="M${x} ${y} L 130 98" stroke="var(--line)" stroke-width="2.5"/><rect x="${x - 46}" y="${y - 14}" width="92" height="26" rx="13" fill="var(--card)" stroke="${c}" stroke-width="2"/><text x="${x}" y="${y + 4}" fill="var(--ink)">${t}</text>`).join("")}
          <circle cx="130" cy="98" r="30" fill="var(--soc, #c2410c)"/>
          <text x="130" y="96" fill="#fff" font-size="11">Revolución</text><text x="130" y="110" fill="#fff" font-size="11">Industrial</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>La máquina de vapor y la fábrica</h3><p>James Watt perfeccionó la <mark>máquina de vapor</mark> en 1769: quemando carbón, movía telares, bombas y, más tarde, trenes y barcos. El trabajo se concentró en <b>fábricas</b> con horarios fijos y división del trabajo. Los primeros sectores fueron el <b>textil del algodón</b> y la <b>siderurgia</b> (hierro).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fábrica con chimeneas humeantes y una locomotora de vapor">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 120 V 80 L 60 100 V 80 L 100 100 V 80 L 140 100 V 120 Z" fill="var(--muted)" opacity=".6"/>
        <rect x="104" y="40" width="14" height="60" fill="var(--muted)"/><rect x="126" y="54" width="12" height="46" fill="var(--muted)"/>
        <circle cx="112" cy="30" r="10" fill="var(--line)"/><circle cx="124" cy="18" r="12" fill="var(--line)"/><circle cx="134" cy="42" r="8" fill="var(--line)"/>
        <rect x="150" y="104" width="70" height="26" rx="4" fill="var(--ink)"/><rect x="196" y="84" width="24" height="22" fill="var(--ink)"/><rect x="156" y="88" width="10" height="16" fill="var(--ink)"/>
        <circle cx="166" cy="136" r="10" fill="var(--red)"/><circle cx="204" cy="136" r="10" fill="var(--red)"/>
        <path d="M10 148 H 250" stroke="var(--ink)" stroke-width="3"/>
        <text x="130" y="170" text-anchor="middle" font-size="12" fill="var(--muted)" ${F}>vapor + carbón = fábrica y ferrocarril</text>
      </svg>`,
    },
    {
      html: `<h3>La segunda Revolución Industrial (1870-1914)</h3><p>Nuevas <mark>fuentes de energía</mark>, el petróleo y la electricidad, y nuevos sectores: química, acero y automóvil. Aparecieron la bombilla, el teléfono y la cadena de montaje de Ford (1913). La industria se extendió a Alemania, Estados Unidos y Japón, y surgieron las grandes empresas y la banca moderna.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación: primera revolución con carbón y vapor, segunda con petróleo y electricidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle">
          <rect x="14" y="20" width="110" height="140" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
          <text x="69" y="44" font-weight="700" font-size="14" fill="var(--ink)">1ª · 1760</text>
          <text x="69" y="76" font-size="13" fill="var(--ink)">carbón</text><text x="69" y="98" font-size="13" fill="var(--ink)">vapor</text><text x="69" y="120" font-size="13" fill="var(--ink)">textil, hierro</text><text x="69" y="142" font-size="13" fill="var(--ink)">ferrocarril</text>
          <rect x="136" y="20" width="110" height="140" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="3"/>
          <text x="191" y="44" font-weight="700" font-size="14" fill="var(--ink)">2ª · 1870</text>
          <text x="191" y="76" font-size="13" fill="var(--ink)">petróleo</text><text x="191" y="98" font-size="13" fill="var(--ink)">electricidad</text><text x="191" y="120" font-size="13" fill="var(--ink)">acero, química</text><text x="191" y="142" font-size="13" fill="var(--ink)">automóvil</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Una nueva sociedad de clases</h3><p>La sociedad estamental dio paso a una <b>sociedad de clases</b> basada en la riqueza. La <mark>burguesía</mark> era dueña de fábricas y bancos. El <mark>proletariado</mark>, los obreros, trabajaba jornadas de 12 a 16 horas, con niños en las fábricas, salarios bajos y barrios insalubres. Las ciudades crecieron muy deprisa: Manchester pasó de unos 25 000 habitantes en 1773 a más de 300 000 en 1851.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide social: burguesía arriba, clases medias, proletariado en la base">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 20 L 172 70 H 88 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M88 70 H 172 L 204 108 H 56 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M56 108 H 204 L 240 160 H 20 Z" fill="var(--muted)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>
        <g ${F} font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="130" y="60">burguesía</text><text x="130" y="94">clases medias</text><text x="130" y="140">proletariado</text></g>
      </svg>`,
    },
    {
      html: `<h3>El movimiento obrero</h3><p>Los trabajadores se organizaron para mejorar sus condiciones. Primero el <b>ludismo</b> (romper máquinas), luego los <mark>sindicatos</mark> y las huelgas. Aparecieron dos grandes ideologías: el <b>socialismo marxista</b> (Marx y Engels, <i>Manifiesto comunista</i>, 1848) y el <b>anarquismo</b> (Bakunin). Poco a poco se lograron leyes contra el trabajo infantil y la jornada de 8 horas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea de tiempo del movimiento obrero: ludismo, sindicatos, Manifiesto comunista, Primera Internacional">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 90 H 240" stroke="var(--ink)" stroke-width="3"/>
        ${[[34, "1811", "ludismo"], [94, "1824", "sindicatos"], [154, "1848", "Manifiesto"], [214, "1864", "1ª Internac."]]
          .map(([x, y, t], i) => `<circle cx="${x}" cy="90" r="7" fill="var(--red)"/><text x="${x}" y="${i % 2 ? 128 : 66}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${D}>${y}</text><text x="${x}" y="${i % 2 ? 146 : 48}" text-anchor="middle" font-size="11" fill="var(--muted)" ${F}>${t}</text>`).join("")}
      </svg>`,
    },
  ],
  figura: {
    titulo: "Línea del tiempo de la industrialización",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo de 1760 a 1913 con los hitos principales">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      <rect x="40" y="92" width="330" height="16" rx="8" fill="var(--muted)" opacity=".45"/>
      <rect x="400" y="92" width="240" height="16" rx="8" fill="var(--sun)" opacity=".8"/>
      <g ${F} font-size="13" font-weight="700" fill="var(--ink)"><text x="40" y="136">1ª Revolución Industrial</text><text x="400" y="136">2ª Revolución Industrial</text></g>
      ${[[40, "1760", "inicio en Gran Bretaña", 0], [120, "1769", "máquina de Watt", 1], [225, "1830", "tren Liverpool-Manchester", 0], [300, "1848", "España: Barcelona-Mataró", 1], [400, "1870", "petróleo y electricidad", 0], [500, "1879", "bombilla de Edison", 1], [610, "1913", "cadena de montaje", 0]]
        .map(([x, y, t, up]) => `<path d="M${x} 100 V ${up ? 62 : 150}" stroke="var(--ink)" stroke-width="1.5"/><text x="${x}" y="${up ? 40 : 170}" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" ${D}>${y}</text><text x="${x < 90 ? x - 20 : x > 590 ? x + 20 : x}" y="${up ? 56 : 186}" text-anchor="${x < 90 ? "start" : x > 590 ? "end" : "middle"}" font-size="11" fill="var(--muted)" ${F}>${t}</text>`).join("")}
    </svg>`,
  },
  video: { id: "3LQAnFEADl4", titulo: "La Revolución Industrial en 7 minutos", canal: "Academia Play", vistas: 6367302, megusta: 0, busqueda: "revolución industrial resumen" },
  quiz: [
    { q: "¿En qué país empezó la Revolución Industrial?", o: ["Francia", "Gran Bretaña", "Estados Unidos"], a: 1, e: "Empezó en Gran Bretaña hacia 1760, gracias a su revolución agrícola, el carbón, el capital y su sistema político." },
    { q: "¿Qué fuente de energía caracteriza la primera Revolución Industrial?", o: ["El petróleo", "La electricidad", "El carbón (vapor)"], a: 2, e: "La máquina de vapor funcionaba quemando carbón. Petróleo y electricidad son de la segunda." },
    { q: "¿Qué grupo social era dueño de las fábricas?", o: ["La burguesía", "El proletariado", "La nobleza"], a: 0, e: "La burguesía poseía los medios de producción; el proletariado vendía su trabajo a cambio de un salario." },
    { q: "El ludismo consistía en…", o: ["crear partidos obreros", "destruir las máquinas", "emigrar al campo"], a: 1, e: "Los luditas rompían máquinas porque las culpaban de quitarles el trabajo y bajar los salarios." },
    { q: "¿Cuál de estos inventos pertenece a la segunda Revolución Industrial?", o: ["La lanzadera volante", "La máquina de vapor de Watt", "La bombilla eléctrica"], a: 2, e: "Edison patentó su bombilla en 1879, en plena segunda Revolución Industrial." },
  ],
  feynman: ["Las causas por las que empezó en Gran Bretaña", "El papel de la máquina de vapor y la fábrica", "Diferencias entre la primera y la segunda Revolución Industrial", "Cómo era la vida del proletariado y cómo se organizó"],
  mapa: mapa("REVOLUCIÓN INDUSTRIAL", "var(--soc, #c2410c)", [
    ["Causas", "agricultura, población, carbón, capital", "var(--leaf)"],
    ["1ª (1760)", "carbón · vapor · textil · tren", "var(--ink)"],
    ["2ª (1870)", "petróleo · electricidad · acero", "var(--inf)"],
    ["Sociedad", "burguesía vs. proletariado → sindicatos", "var(--red)"],
  ], 270),
  tarjetas: [
    ["¿Cuándo y dónde empezó la Revolución Industrial?", "Hacia 1760, en Gran Bretaña."],
    ["¿Qué perfeccionó James Watt en 1769?", "La máquina de vapor."],
    ["Nuevas energías de la segunda Revolución Industrial", "Petróleo y electricidad."],
    ["¿Qué es el proletariado?", "La clase obrera, que solo posee su fuerza de trabajo y la vende por un salario."],
    ["¿Qué publicaron Marx y Engels en 1848?", "El Manifiesto comunista."],
  ],
  familias: ["Buscad juntos qué fábrica o industria antigua hay en vuestra ciudad o comarca (colonias textiles, minas, ferrocarril).", "Comparad un día de trabajo de un niño en 1840 con su día de hoy.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: transformaciones económicas y sociales de la industrialización y el movimiento obrero (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Comentario de un testimonio de trabajo infantil del informe Sadler (1832).", "Mapa de la industrialización en España: Cataluña textil, País Vasco siderúrgico, Asturias minera.", "Debate: ¿la automatización actual es una nueva revolución industrial?"],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Revolución Industrial, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_Industrial" },
  ],
  revisado: "2026-11-12",
};
