// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, dos, filas, barras, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "España en el siglo XIX",
  minutos: 40,
  objetivos: ["Explicar la Guerra de la Independencia y la Constitución de Cádiz", "Ordenar las etapas políticas del siglo XIX español", "Valorar la industrialización española y sus diferencias regionales"],
  claves: ["Cortes de Cádiz", "carlismo", "Isabel II", "Sexenio Democrático", "Restauración", "turnismo"],
  pregunta: {
    texto: "En 1812, en una ciudad sitiada por el ejército de Napoleón, un grupo de diputados escribió la primera constitución de España. La llamaron «la Pepa». ¿Por qué tardó tanto en cumplirse?",
    respuesta: "Porque el siglo XIX español fue una lucha constante entre <mark>absolutistas y liberales</mark>. Fernando VII anuló la Constitución de Cádiz, hubo guerras carlistas, golpes militares (pronunciamientos), una breve república y, al final, la <b>Restauración</b>, un sistema liberal pero poco democrático.",
  },
  bloques: [
    {
      html: `<h3>Guerra de la Independencia y Cortes de Cádiz</h3><p>En 1808 Napoleón obligó a Carlos IV y a Fernando VII a abdicar y puso a su hermano <b>José I</b> en el trono. El 2 de mayo el pueblo de Madrid se levantó y empezó la <mark>Guerra de la Independencia</mark> (1808-1814). Mientras, en Cádiz, las Cortes aprobaron la <b>Constitución de 1812</b>: soberanía nacional, división de poderes, sufragio universal masculino indirecto y fin de los señoríos.</p>`,
      svg: dos("Bandos en 1808: josefinos y afrancesados frente a patriotas", ["José I", ["afrancesados", "ejército francés", "Estatuto de", "Bayona (1808)"], "var(--muted)"], ["Patriotas", ["Juntas y guerrilla", "apoyo británico", "Cortes de Cádiz", "Constitución 1812"], "var(--red)"]),
    },
    {
      html: `<h3>Fernando VII: absolutismo y liberalismo</h3><p>Al volver en 1814, <mark>Fernando VII</mark> anuló la Constitución y restauró el absolutismo. Tras el pronunciamiento de Riego hubo un <b>Trienio Liberal</b> (1820-1823), pero un ejército francés devolvió al rey el poder absoluto (Década Ominosa). Mientras tanto se independizaron casi todas las colonias americanas (1810-1824). Al morir el rey en 1833 estalló la <b>primera guerra carlista</b> entre los partidarios de su hija Isabel (liberales) y de su hermano Carlos (absolutistas).</p>`,
      svg: linea("Reinado de Fernando VII", [["1814", "vuelve el|absolutismo"], ["1820", "Trienio|Liberal"], ["1823", "Década|Ominosa"], ["1833", "muere: guerra|carlista"]]),
    },
    {
      html: `<h3>Isabel II y el Sexenio Democrático</h3><p>Con <mark>Isabel II</mark> (1833-1868) se consolidó el Estado liberal, dominado por los <b>moderados</b> (Narváez) y los <b>progresistas</b> (Espartero), con constituciones de 1837 y 1845. Se hizo la <b>desamortización</b> de Mendizábal, que vendió tierras de la Iglesia. La Revolución de 1868, «la Gloriosa», expulsó a la reina y abrió el <mark>Sexenio Democrático</mark>: Constitución de 1869 con sufragio universal masculino, el rey Amadeo I y la <b>Primera República</b> (1873-1874).</p>`,
      svg: filas("Etapas de 1833 a 1874", [["Regencias", "1833-1843, guerra carlista", "var(--muted)"], ["Isabel II", "1843-1868, moderados", "var(--pen)"], ["Amadeo I", "1871-1873, monarquía", "var(--leaf)"], ["I República", "1873-1874, federal", "var(--red)"]]),
    },
    {
      html: `<h3>La Restauración (1874-1923)</h3><p>Un pronunciamiento devolvió la monarquía con <b>Alfonso XII</b>. Cánovas diseñó la <mark>Restauración</mark>, con la Constitución de 1876. Dos partidos, el Conservador (Cánovas) y el Liberal (Sagasta), se turnaban en el poder (<b>turnismo</b>) pactando los resultados mediante el <b>caciquismo</b> y el fraude electoral. En 1898 España perdió Cuba, Puerto Rico y Filipinas frente a Estados Unidos: «el desastre del 98».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Turnismo: conservadores y liberales se alternan en el gobierno, con el cacique controlando el voto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-weight="700" font-size="12">
          <circle cx="70" cy="70" r="40" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/><text x="70" y="66" fill="var(--pen)">Cánovas</text><text x="70" y="82" fill="var(--ink)" font-size="10.5">conservador</text>
          <circle cx="190" cy="70" r="40" fill="var(--card)" stroke="var(--red)" stroke-width="3"/><text x="190" y="66" fill="var(--red)">Sagasta</text><text x="190" y="82" fill="var(--ink)" font-size="10.5">liberal</text>
          <path d="M110 56 Q 130 36 150 56" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M150 84 Q 130 104 110 84" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
          <path d="M146 50 L 152 58 L 142 58 Z" fill="var(--ink)"/><path d="M114 90 L 108 82 L 118 82 Z" fill="var(--ink)"/>
          <rect x="70" y="128" width="120" height="30" rx="15" fill="var(--sun)"/><text x="130" y="148" fill="var(--ink)">cacique y urnas</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>Una industrialización tardía y desigual</h3><p>España se industrializó más tarde que Gran Bretaña y solo en algunas zonas: el <mark>textil del algodón en Cataluña</mark>, la <b>siderurgia en el País Vasco</b> (con hierro de Vizcaya) y la <b>minería en Asturias</b>. El primer ferrocarril peninsular unió Barcelona y Mataró en 1848. La mayoría de la población siguió siendo campesina y pobre, y surgió un movimiento obrero anarquista y socialista (PSOE en 1879, UGT en 1888).</p>`,
      svg: barras("Población activa agraria en España hacia 1900 frente a otros sectores", [["agricultura", 66, "var(--leaf)", "66 %"], ["industria", 16, "var(--muted)", "16 %"], ["servicios", 18, "var(--pen)", "18 %"]], 70),
    },
  ],
  figura: {
    titulo: "España de 1808 a 1898",
    svg: figLinea("Línea del tiempo del siglo XIX español", [[40, "1808", "Guerra de la Independencia", 1], [120, "1812", "Constitución de Cádiz", 0], [240, "1833", "Isabel II, guerra carlista", 1], [320, "1868", "la Gloriosa", 0], [400, "1873", "I República", 1], [480, "1876", "Constitución de Cánovas", 0], [610, "1898", "pérdida de Cuba", 1]], [[40, 240, "absolutismo vs. liberalismo", "var(--muted)"], [240, 320, "", "var(--pen)"], [320, 430, "", "var(--red)"], [430, 640, "Restauración", "var(--sun)"]]),
  },
  video: { id: "2u6GeD7Go78", titulo: "España en el siglo XIX: de Fernando VII al Sexenio Democrático", canal: "La cuna de Halicarnaso", vistas: 390497, megusta: 9145, busqueda: "España en el siglo XIX resumen" },
  quiz: [
    { q: "¿Cómo se conoce la Constitución de 1812?", o: ["La Gloriosa", "La Pepa", "La de Cánovas"], a: 1, e: "Se aprobó el 19 de marzo de 1812, día de San José, y por eso se la llamó «la Pepa»." },
    { q: "Las guerras carlistas enfrentaron a…", o: ["liberales isabelinos y absolutistas partidarios de Carlos", "España y Francia", "monárquicos y republicanos de 1931"], a: 0, e: "Al morir Fernando VII, su hermano Carlos reclamó el trono con apoyo absolutista frente a su hija Isabel." },
    { q: "El turnismo de la Restauración consistía en…", o: ["elecciones totalmente limpias", "que conservadores y liberales se alternaban pactando el resultado", "un gobierno militar"], a: 1, e: "El caciquismo y el fraude garantizaban que ganara el partido al que le «tocaba» gobernar." },
    { q: "¿Qué ocurrió en 1898?", o: ["España perdió Cuba, Puerto Rico y Filipinas", "Se proclamó la I República", "Empezó la Guerra de la Independencia"], a: 0, e: "La derrota frente a Estados Unidos se vivió como el «desastre del 98»." },
    { q: "¿Qué región fue el centro de la industria textil española?", o: ["Andalucía", "Cataluña", "Galicia"], a: 1, e: "El algodón catalán fue el primer gran sector industrial del país." },
  ],
  examen: [
    { q: "La desamortización de Mendizábal (1836)…", o: ["vendió tierras de la Iglesia", "repartió tierras gratis a los campesinos", "nacionalizó las fábricas"], a: 0, e: "El Estado expropió y subastó bienes del clero para pagar deuda; los compraron sobre todo burgueses y nobles." },
    { q: "¿Qué periodo se abrió con la revolución de 1868?", o: ["La Década Ominosa", "El Sexenio Democrático", "La Restauración"], a: 1, e: "De 1868 a 1874: Constitución de 1869, Amadeo I y la Primera República." },
    { q: "Un pronunciamiento es…", o: ["un discurso del rey", "un levantamiento militar para cambiar el gobierno", "un tipo de elecciones"], a: 1, e: "Fue la forma habitual de cambiar de gobierno en el siglo XIX español." },
  ],
  feynman: ["Qué pasó en 1808 y qué aprobaron las Cortes de Cádiz", "Por qué el reinado de Fernando VII alterna absolutismo y liberalismo", "Qué fue el Sexenio Democrático", "Cómo funcionaban el turnismo y el caciquismo"],
  mapa: mapa("ESPAÑA SIGLO XIX", "var(--soc, #c2410c)", [
    ["1808-1833", "Cádiz · Fernando VII", "var(--muted)"],
    ["1833-1874", "Isabel II · Sexenio", "var(--pen)"],
    ["Restauración", "turnismo · caciques · 1898", "var(--sun)"],
    ["Economía", "Cataluña · País Vasco · Asturias", "var(--leaf)"],
  ], 260),
  tarjetas: [
    ["¿Qué aprobaron las Cortes de Cádiz?", "La Constitución de 1812, la primera de España."],
    ["Trienio Liberal", "1820-1823, tras el pronunciamiento de Riego."],
    ["Sexenio Democrático", "1868-1874: Constitución de 1869, Amadeo I y la I República."],
    ["Turnismo", "Alternancia pactada de conservadores y liberales en la Restauración."],
    ["Desastre del 98", "Pérdida de Cuba, Puerto Rico y Filipinas."],
  ],
  familias: ["Buscad en vuestra ciudad una calle con nombre del siglo XIX (Cortes de Cádiz, Riego, Espartero, Cánovas) y averiguad quién fue.", "Ved juntos «Los fusilamientos del 3 de mayo» de Goya y comentad qué cuenta.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la construcción del Estado liberal en España y la industrialización desigual (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Comparar artículos de las constituciones de 1812, 1845, 1869 y 1876 (soberanía, sufragio, religión).", "Comentario de los cuadros de Goya del 2 y 3 de mayo.", "Simulación de unas elecciones caciquiles con resultado pactado."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Historia de España (1810-1873), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Historia_de_Espa%C3%B1a#Edad_Contempor%C3%A1nea" },
  ],
  revisado: "2026-11-12",
};
