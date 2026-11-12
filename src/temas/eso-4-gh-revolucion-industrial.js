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

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar las consecuencias demográficas y urbanas de la industrialización", "Distinguir las ideologías del movimiento obrero"],
  bloques: [
    { tras: "Por qué empezó en Gran Bretaña", html: `<h3>La revolución agrícola y demográfica</h3><p>Antes que las fábricas cambió el campo. En Gran Bretaña se <b>cercaron</b> las tierras comunales (<i>enclosures</i>), se sustituyó el barbecho por la <mark>rotación de cultivos</mark> (por ejemplo, el sistema Norfolk de cuatro hojas: trigo, nabos, cebada y trébol) y se usaron nuevas máquinas como la sembradora. Con más alimentos, la mortalidad bajó mientras la natalidad seguía alta: la población inglesa pasó de unos 6 millones en 1750 a unos 17 en 1850. Muchos campesinos sin tierra emigraron a las ciudades y se convirtieron en la mano de obra de las fábricas.</p>` },
    { tras: "La máquina de vapor", html: `<h3>Algodón, hierro y ferrocarril</h3><p>La primera industria moderna fue la <b>textil del algodón</b>: la lanzadera volante, la <i>spinning jenny</i> y el telar mecánico multiplicaron la producción. La <b>siderurgia</b> empezó a usar <mark>carbón de coque</mark> en lugar de leña, y el hierro barato permitió fabricar máquinas, puentes y raíles. El <b>ferrocarril</b> (línea Liverpool-Manchester, 1830) y el barco de vapor redujeron el tiempo y el coste del transporte, unieron los mercados y crearon una enorme demanda de carbón y hierro. En España, la primera línea peninsular fue Barcelona-Mataró (1848).</p>` },
    { tras: "La segunda Revolución Industrial", html: `<h3>El capitalismo industrial</h3><p>La industria necesitaba mucho dinero. Surgieron las <mark>sociedades anónimas</mark>, cuyo capital se divide en acciones que se compran y venden en la Bolsa, y los grandes <b>bancos</b> que prestaban a las empresas. Para reducir la competencia, las empresas se unieron en <b>cárteles</b>, <b>trusts</b> y <b>holdings</b>, y aparecieron los monopolios. Henry Ford introdujo la <b>cadena de montaje</b> (1913): cada obrero hacía una sola tarea y el coche bajó de precio. El sistema se basaba en la propiedad privada, el beneficio y el libre mercado, y sufría <b>crisis cíclicas</b> de sobreproducción.</p>` },
    { tras: "Una nueva sociedad de clases", html: `<h3>Las ciudades industriales</h3><p>Ciudades como Manchester crecieron sin planificación. Los obreros vivían en barrios pegados a las fábricas, con casas pequeñas, sin agua corriente ni alcantarillado, y con humo constante: el <b>cólera</b> y la tuberculosis se extendían con facilidad. Las jornadas eran de 12 a 14 horas, también para <mark>mujeres y niños</mark>, que cobraban menos, y no había protección ante accidentes, enfermedad o vejez. La burguesía, en cambio, se instaló en barrios nuevos (los <b>ensanches</b>), con calles anchas y servicios.</p>`, video: { id: "gwYZpUi3EkQ", titulo: "El nacimiento del movimiento obrero", canal: "Clases Particulares en Ávila", vistas: 322411, megusta: 0 } },
    { tras: "El movimiento obrero", html: `<h3>Socialismo, anarquismo y sindicatos</h3>${tabla(["", "Socialismo marxista", "Anarquismo"], [["Autores", "Marx y Engels (<i>Manifiesto comunista</i>, 1848)", "Bakunin, Kropotkin"], ["Objetivo", "sociedad sin clases", "sociedad sin Estado ni autoridad"], ["Medios", "partido obrero, tomar el poder político", "acción directa, huelga general"], ["En España", "PSOE (1879) y UGT (1888)", "CNT (1910)"]])}<p>Los obreros se organizaron en <b>sindicatos</b> y en la <mark>Asociación Internacional de Trabajadores</mark> (1864). Consiguieron, poco a poco, la jornada de 8 horas, la prohibición del trabajo infantil y los primeros seguros sociales.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica la cadena causal entre la revolución agrícola y el crecimiento de las ciudades.", pasos: ["Nuevas técnicas agrícolas → más alimentos con menos campesinos.", "Más alimentos → baja la mortalidad → crece la población.", "Sobran brazos en el campo → los campesinos emigran.", "Las fábricas los contratan → las ciudades crecen."], resultado: "La revolución agrícola liberó mano de obra y alimentó a una población que se concentró en las ciudades industriales." },
    { enunciado: "Un historiador dice que el ferrocarril fue el «motor del motor». ¿Qué quiere decir?", pasos: ["El ferrocarril necesitaba enormes cantidades de hierro y carbón.", "Esa demanda impulsó la minería y la siderurgia.", "Además abarató el transporte y unió los mercados."], resultado: "El ferrocarril impulsó a las demás industrias, por eso se le considera el gran motor de la industrialización." },
    { enunciado: "Clasifica: electricidad, máquina de vapor, petróleo, carbón, acero, algodón.", pasos: ["Primera revolución (desde 1760): vapor, carbón, algodón.", "Segunda revolución (1870-1914): electricidad, petróleo, acero."], resultado: "1ª: vapor, carbón y algodón. 2ª: electricidad, petróleo y acero." },
  ],
  errores: [
    "Pensar que la Revolución Industrial fue rápida: duró décadas y se extendió poco a poco.",
    "Creer que empezó en España: empezó en Gran Bretaña hacia 1760; España se industrializó tarde.",
    "Confundir socialismo y anarquismo: los socialistas querían tomar el Estado y los anarquistas abolirlo.",
    "Mezclar las fuentes de energía de las dos revoluciones: carbón en la 1ª, petróleo y electricidad en la 2ª.",
    "Olvidar el papel de las mujeres y los niños como mano de obra barata.",
  ],
  ejercicios: [
    { q: "¿Qué fueron las enclosures?", sol: "El cercado de tierras comunales en Gran Bretaña, que concentró la propiedad y empujó a muchos campesinos a las ciudades." },
    { q: "Nombra tres inventos de la industria textil.", sol: "La lanzadera volante, la spinning jenny y el telar mecánico." },
    { q: "¿Por qué fue importante el carbón de coque?", sol: "Permitió fundir hierro en grandes cantidades sin usar leña, abaratando el hierro." },
    { q: "Explica qué es una sociedad anónima.", sol: "Una empresa cuyo capital se divide en acciones; los accionistas son los dueños y responden solo con lo que han aportado." },
    { q: "¿Qué es un trust?", sol: "Una unión de empresas de un mismo sector que se fusionan para controlar el mercado." },
    { q: "Describe tres problemas de las ciudades industriales.", sol: "Viviendas insalubres, falta de agua y alcantarillado, y contaminación que causaba epidemias como el cólera." },
    { q: "¿Qué es el ludismo?", sol: "El movimiento de obreros que destruían máquinas porque las culpaban del paro y de los bajos salarios." },
    { q: "Compara los objetivos del socialismo y del anarquismo.", sol: "Ambos quieren acabar con la explotación. El socialismo busca una sociedad sin clases conquistando el Estado; el anarquismo quiere suprimir el Estado." },
    { q: "Cita dos organizaciones obreras españolas y su ideología.", sol: "PSOE y UGT, socialistas; CNT, anarquista (anarcosindicalista)." },
    { q: "¿Qué aportó la cadena de montaje?", sol: "Producir en serie, más rápido y más barato, como hizo Ford con el Modelo T a partir de 1913." },
  ],
  quiz: [
    { q: "La rotación de cultivos sustituyó al…", o: ["regadío", "barbecho", "arado"], a: 1, e: "Ya no hacía falta dejar la tierra sin cultivar." },
    { q: "La primera línea de ferrocarril de la España peninsular fue…", o: ["Madrid-Aranjuez", "Barcelona-Mataró", "Bilbao-Santander"], a: 1, e: "Se inauguró en 1848." },
    { q: "¿Quiénes escribieron el Manifiesto comunista?", o: ["Marx y Engels", "Bakunin y Kropotkin", "Smith y Ricardo"], a: 0, e: "Se publicó en 1848." },
    { q: "La CNT era un sindicato…", o: ["socialista", "anarquista", "católico"], a: 1, e: "Se fundó en 1910." },
    { q: "La cadena de montaje se asocia a…", o: ["Henry Ford", "James Watt", "Edison"], a: 0, e: "La usó para fabricar el Modelo T." },
  ],
  tarjetas: [
    ["Enclosures", "Cercado de tierras comunales en Gran Bretaña."],
    ["Sociedad anónima", "Empresa con el capital dividido en acciones."],
    ["Anarquismo", "Ideología que quiere suprimir el Estado y toda autoridad."],
  ],
});
