// Geografía e Historia 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, flujo, figLinea } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Transición y la democracia en España",
  minutos: 40,
  objetivos: ["Explicar cómo se pasó de la dictadura a la democracia entre 1975 y 1982", "Conocer los rasgos básicos de la Constitución de 1978", "Describir las etapas de la democracia y la integración en Europa"],
  claves: ["Transición", "Ley para la Reforma Política", "Constitución de 1978", "consenso", "23-F", "Estado de las autonomías"],
  pregunta: {
    texto: "El 15 de junio de 1977 millones de españoles votaron por primera vez en 41 años. Muchos de ellos nunca habían votado. ¿Cómo se pasó de una dictadura a una democracia sin una guerra?",
    respuesta: "Con la <mark>Transición</mark>: un proceso de reformas pactadas en el que los herederos del régimen, encabezados por el rey Juan Carlos I y Adolfo Suárez, y la oposición democrática negociaron el cambio. Su resultado fue la <b>Constitución de 1978</b>, aprobada en referéndum.",
  },
  bloques: [
    {
      html: `<h3>De la ley a la ley</h3><p>Tras la muerte de Franco, el rey nombró presidente a <mark>Adolfo Suárez</mark> (1976). Su <b>Ley para la Reforma Política</b>, aprobada por las propias Cortes franquistas y en referéndum, permitió unas elecciones libres: se pasó «de la ley a la ley». Se legalizaron los partidos, incluido el Partido Comunista (abril de 1977), y los sindicatos, y se aprobó una amnistía. En junio de 1977 ganó la <b>UCD</b> de Suárez.</p>`,
      svg: flujo("Pasos de la Transición de 1975 a 1977", ["muere|Franco", "rey Juan|Carlos I", "Suárez|presidente", "Reforma|Política", "partidos|legales", "elecciones|1977"], "var(--pen)"),
    },
    {
      html: `<h3>El consenso y la Constitución de 1978</h3><p>Partidos muy distintos negociaron juntos: es el <mark>consenso</mark>. Los <b>Pactos de la Moncloa</b> (1977) afrontaron la crisis económica. Siete diputados, los «padres de la Constitución», redactaron el texto, aprobado en referéndum el <b>6 de diciembre de 1978</b>. Define España como una <b>monarquía parlamentaria</b>, con soberanía nacional, división de poderes, derechos fundamentales, Estado social y un <b>Estado de las autonomías</b>.</p>`,
      svg: filas("Rasgos de la Constitución de 1978", [["Forma", "monarquía parlamentaria", "var(--pen)"], ["Soberanía", "reside en el pueblo español", "var(--red)"], ["Derechos", "igualdad, libertades, voto", "var(--leaf)"], ["Territorio", "17 comunidades autónomas", "var(--sun)"]]),
    },
    {
      html: `<h3>Amenazas: terrorismo y golpe de Estado</h3><p>La Transición no fue fácil. El terrorismo de <b>ETA</b> asesinó a cientos de personas, y también actuaron grupos de extrema derecha y extrema izquierda. Al dimitir Suárez, el <mark>23 de febrero de 1981</mark> un grupo de guardias civiles dirigido por Tejero asaltó el Congreso: era un golpe de Estado. Fracasó en pocas horas, y el rey defendió la Constitución en un mensaje televisado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hemiciclo del Congreso con la fecha 23-F 1981">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${[50, 70, 90].map((r, i) => `<path d="M${130 - r} 130 A ${r} ${r} 0 0 1 ${130 + r} 130" fill="none" stroke="${i === 2 ? "var(--red)" : "var(--pen)"}" stroke-width="10" stroke-dasharray="6 4"/>`).join("")}
        <rect x="114" y="112" width="32" height="18" rx="3" fill="var(--ink)"/>
        <text x="130" y="162" text-anchor="middle" font-size="18" font-weight="700" fill="var(--red)" ${D}>23-F · 1981</text>
      </svg>`,
    },
    {
      html: `<h3>La democracia consolidada</h3><p>En 1982 ganó el <b>PSOE</b> de Felipe González, el primer cambio de partido en el gobierno: la democracia se había consolidado. Llegaron reformas en educación, sanidad universal y pensiones. España entró en la <mark>OTAN</mark> (1982) y en la <b>Comunidad Económica Europea</b> (1986). Desde entonces han gobernado el PP y el PSOE, en solitario o en coalición, y en 2011 ETA anunció el fin de su violencia.</p>`,
      svg: linea("Hitos de la democracia", [["1982", "gana el|PSOE"], ["1986", "entra en|la CEE"], ["1992", "Barcelona|y Sevilla"], ["2002", "llega|el euro"]], "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "Cronología de la Transición",
    svg: figLinea("Línea del tiempo de 1975 a 1986", [[40, "1975", "muere Franco", 1], [130, "1976", "Suárez y Reforma", 0], [220, "1977", "primeras elecciones", 1], [320, "1978", "Constitución", 0], [420, "1981", "23-F", 1], [520, "1982", "gana el PSOE", 0], [630, "1986", "entra en la CEE", 1]], [[40, 520, "Transición", "var(--pen)"], [520, 640, "", "var(--leaf)"]]),
  },
  video: { id: "y-cpcl2ADXk", titulo: "La Transición española explicada en 10 minutos", canal: "Memorias de Pez", vistas: 348755, megusta: 10044, busqueda: "transición española resumen" },
  quiz: [
    { q: "¿Quién fue el primer presidente del gobierno de la Transición elegido en las urnas?", o: ["Felipe González", "Adolfo Suárez", "Carrero Blanco"], a: 1, e: "Suárez, de UCD, ganó las elecciones de junio de 1977." },
    { q: "¿Cuándo se aprobó la Constitución en referéndum?", o: ["6 de diciembre de 1978", "20 de noviembre de 1975", "23 de febrero de 1981"], a: 0, e: "Por eso el 6 de diciembre es el Día de la Constitución." },
    { q: "La Constitución define España como…", o: ["una república federal", "una monarquía parlamentaria", "una monarquía absoluta"], a: 1, e: "El rey es jefe del Estado, pero el poder reside en el pueblo y lo ejercen las Cortes y el gobierno." },
    { q: "¿Qué ocurrió el 23-F de 1981?", o: ["Un intento de golpe de Estado en el Congreso", "Las primeras elecciones", "La entrada en la CEE"], a: 0, e: "Guardias civiles al mando de Tejero asaltaron el Congreso; el golpe fracasó." },
    { q: "¿En qué año entró España en la Comunidad Económica Europea?", o: ["1977", "1986", "2002"], a: 1, e: "El 1 de enero de 1986, junto con Portugal." },
  ],
  examen: [
    { q: "«De la ley a la ley» quiere decir que…", o: ["la democracia se impuso por una revolución", "las Cortes franquistas aprobaron su propia disolución con una ley", "no hubo leyes en la Transición"], a: 1, e: "La Ley para la Reforma Política permitió el cambio respetando la legalidad existente." },
    { q: "Los Pactos de la Moncloa (1977) trataron sobre todo…", o: ["la crisis económica", "la Guerra Fría", "la entrada en la OTAN"], a: 0, e: "Gobierno, partidos y sindicatos pactaron medidas contra la inflación y el paro." },
    { q: "¿Por qué 1982 se considera el fin de la Transición?", o: ["Porque murió Franco", "Porque un partido de la oposición ganó y gobernó con normalidad", "Porque se aprobó la Constitución"], a: 1, e: "La alternancia pacífica en el poder demostró que la democracia funcionaba." },
  ],
  feynman: ["Los pasos que llevaron de la muerte de Franco a las elecciones de 1977", "Qué es el consenso y para qué sirvió", "Los rasgos básicos de la Constitución de 1978", "Qué peligros amenazaron la Transición"],
  mapa: mapa("TRANSICIÓN", "var(--soc, #c2410c)", [
    ["Reforma", "Suárez · ley de 1976 · 1977", "var(--pen)"],
    ["Constitución", "1978 · monarquía parlamentaria", "var(--red)"],
    ["Amenazas", "terrorismo · 23-F", "var(--ink)"],
    ["Consolidación", "1982 · OTAN · CEE 1986", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Primeras elecciones democráticas tras Franco", "15 de junio de 1977."],
    ["Día de la Constitución", "6 de diciembre (referéndum de 1978)."],
    ["Forma política del Estado español", "Monarquía parlamentaria."],
    ["23-F", "Intento de golpe de Estado del 23 de febrero de 1981."],
    ["Entrada en la CEE", "1986."],
  ],
  familias: ["Leed juntos el artículo 14 de la Constitución y hablad de qué significa la igualdad ante la ley.", "Preguntad a quien lo viviera qué recuerda del referéndum de 1978 o del 23-F.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la Transición, la Constitución de 1978 y la consolidación democrática; ciudadanía y compromiso cívico (RD 217/2022, Geografía e Historia 4º).",
    ideas: ["Lectura guiada del Título Preliminar de la Constitución.", "Simulación de un consenso: grupos con intereses distintos redactan un artículo común.", "Hemeroteca: portadas del 16 de junio de 1977 y del 24 de febrero de 1981."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Constitución Española de 1978 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
const { ampliar, tabla } = require("./_hum");
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar los pasos de la Transición y el papel de sus protagonistas", "Conocer la estructura y los principios de la Constitución de 1978"],
  bloques: [
    { tras: "De la ley a la ley", html: `<h3>Los protagonistas</h3>${tabla(["Protagonista", "Papel"], [["Juan Carlos I", "rey desde 1975; impulsó el cambio y frenó el golpe de 1981"], ["Adolfo Suárez", "presidente del Gobierno (1976-1981); Ley para la Reforma Política y primeras elecciones"], ["Torcuato Fernández-Miranda", "presidente de las Cortes; diseñó la reforma desde la legalidad franquista"], ["Santiago Carrillo", "líder del PCE, legalizado en 1977; aceptó la monarquía"], ["Felipe González", "líder del PSOE; presidente desde 1982"]])}` },
    { tras: "De la ley a la ley", html: `<h3>Del referéndum a las primeras elecciones</h3><p>La <b>Ley para la Reforma Política</b> (1976) permitía elegir unas Cortes democráticas; las mismas Cortes franquistas la aprobaron y el pueblo la ratificó en referéndum con un 94 % de votos a favor. En 1977 se aprobó una <b>amnistía</b> para los presos políticos y se legalizaron los partidos, incluido el <b>Partido Comunista</b> (Sábado Santo de 1977). El <mark>15 de junio de 1977</mark> se celebraron las primeras elecciones libres desde 1936: ganó la UCD de Suárez, seguida del PSOE. Los <b>Pactos de la Moncloa</b> (1977) unieron a partidos, empresarios y sindicatos para afrontar la crisis económica.</p>` },
    { tras: "El consenso y la Constitución", html: `<h3>Qué dice la Constitución de 1978</h3><p>La Constitución, aprobada en referéndum el <b>6 de diciembre de 1978</b>, define España como un <mark>Estado social y democrático de Derecho</mark> cuya forma política es la <b>monarquía parlamentaria</b>. La soberanía reside en el pueblo español. Reconoce derechos fundamentales (igualdad, libertad de expresión, de religión, educación), separa los poderes (las Cortes Generales hacen las leyes; el Gobierno las ejecuta; los jueces las aplican) y crea el <b>Estado de las autonomías</b>. Tiene un preámbulo, 169 artículos divididos en 10 títulos y varias disposiciones.</p>`, video: { id: "hwL6Hp3kk1g", titulo: "Aprende rápido los títulos de la Constitución Española", canal: "LANDL Formación", vistas: 426932, megusta: 0 } },
    { tras: "El consenso y la Constitución", html: `<h3>El Estado de las autonomías</h3><p>La Constitución reconoce el derecho a la autonomía de las <b>nacionalidades y regiones</b>. Entre 1979 y 1983 se aprobaron los estatutos de las <b>17 comunidades autónomas</b>, y en 1995 los de <b>Ceuta y Melilla</b> como ciudades autónomas. Cada comunidad tiene su Parlamento, su Gobierno y competencias propias, como educación o sanidad. País Vasco, Cataluña y Galicia accedieron por la vía rápida, por haber aprobado estatuto en la República; <mark>Andalucía</mark> la logró con el referéndum de 1980.</p>` },
    { tras: "La democracia consolidada", html: `<h3>España se moderniza y se abre al mundo</h3><p>Los gobiernos del PSOE (1982-1996) universalizaron la <b>sanidad pública</b> y la educación obligatoria hasta los 16 años, e hicieron una dura reconversión industrial. España entró en la <b>OTAN</b> (1982, confirmado en referéndum en 1986) y en la <mark>Comunidad Económica Europea</mark> (1 de enero de 1986). En 1992 los <b>Juegos Olímpicos de Barcelona</b> y la <b>Exposición Universal de Sevilla</b> mostraron al mundo un país moderno. Desde entonces se han alternado en el gobierno el PSOE y el Partido Popular, y después otras fuerzas han llegado al Parlamento.</p>` },
  ],
  ejemplos: [
    { enunciado: "Explica qué significa «de la ley a la ley».", pasos: ["La Transición no rompió de golpe con el franquismo.", "Usó las propias leyes franquistas para cambiarlas.", "Las Cortes franquistas aprobaron la Ley para la Reforma Política.", "Así se llegó a la democracia sin vacío legal."], resultado: "Se pasó de la dictadura a la democracia reformando la legalidad, no rompiéndola." },
    { enunciado: "Clasifica estos poderes según la Constitución: Congreso y Senado, Gobierno, Tribunal Supremo.", pasos: ["Congreso y Senado (Cortes Generales): poder legislativo.", "Gobierno: poder ejecutivo.", "Tribunal Supremo y jueces: poder judicial."], resultado: "Legislativo, ejecutivo y judicial, separados." },
    { enunciado: "¿Por qué fue clave la legalización del PCE?", pasos: ["Era el principal partido de la oposición clandestina.", "Dejarlo fuera habría restado legitimidad a las elecciones.", "Carrillo aceptó la monarquía y la bandera.", "El ejército se opuso, pero Suárez lo hizo."], resultado: "Permitió unas elecciones con todas las fuerzas políticas y reforzó el consenso." },
  ],
  errores: [
    "Pensar que la Constitución es de 1975: se aprobó en 1978.",
    "Creer que la Transición fue totalmente pacífica: hubo terrorismo y un intento de golpe.",
    "Decir que el rey gobierna: en la monarquía parlamentaria gobierna el Gobierno elegido por las Cortes.",
    "Confundir la entrada en la CEE (1986) con la creación del euro (2002).",
    "Pensar que las comunidades autónomas son independientes: tienen autonomía dentro del Estado.",
  ],
  ejercicios: [
    { q: "¿Qué fue la Ley para la Reforma Política?", sol: "La ley de 1976 que permitió elegir unas Cortes democráticas; la aprobaron las Cortes franquistas y el pueblo en referéndum." },
    { q: "¿Cuándo fueron las primeras elecciones democráticas tras Franco y quién ganó?", sol: "El 15 de junio de 1977; ganó la UCD de Adolfo Suárez." },
    { q: "¿Qué fueron los Pactos de la Moncloa?", sol: "Acuerdos de 1977 entre partidos, sindicatos y empresarios para afrontar la crisis económica y reforzar la democracia." },
    { q: "¿Por qué la Constitución se llama «del consenso»?", sol: "Porque la redactaron ponentes de partidos muy distintos, de la derecha a los comunistas, buscando acuerdos." },
    { q: "Explica «Estado social y democrático de Derecho».", sol: "Social: garantiza servicios y bienestar; democrático: el poder viene del pueblo; de Derecho: todos, también el Estado, cumplen la ley." },
    { q: "¿Cuántas comunidades autónomas hay?", sol: "17 comunidades autónomas y 2 ciudades autónomas (Ceuta y Melilla)." },
    { q: "¿Qué pasó el 23 de febrero de 1981?", sol: "Un intento de golpe de Estado: guardias civiles asaltaron el Congreso; fracasó, entre otras razones, por la intervención del rey." },
    { q: "¿Qué daño hizo ETA a la democracia?", sol: "Asesinó a más de 800 personas y buscó desestabilizar la democracia; anunció su fin definitivo en 2011 y se disolvió en 2018." },
    { q: "¿Cuándo entró España en la CEE?", sol: "El 1 de enero de 1986." },
    { q: "¿Qué simbolizó el año 1992 para España?", sol: "Los Juegos de Barcelona y la Expo de Sevilla mostraron un país moderno y abierto al mundo." },
  ],
  quiz: [
    { q: "La Ley para la Reforma Política se aprobó en referéndum en…", o: ["1976", "1978", "1982"], a: 0, e: "Con un 94 % de síes." },
    { q: "El PCE se legalizó en…", o: ["1975", "1977", "1981"], a: 1, e: "En Semana Santa." },
    { q: "La forma política de España según la Constitución es…", o: ["república federal", "monarquía parlamentaria", "monarquía absoluta"], a: 1, e: "Artículo 1.3." },
    { q: "La Constitución tiene…", o: ["169 artículos", "500 artículos", "50 artículos"], a: 0, e: "Y 10 títulos." },
    { q: "Andalucía logró la autonomía por la vía rápida tras…", o: ["el referéndum de 1980", "el golpe de 1981", "la Expo de 1992"], a: 0, e: "El 28 de febrero de 1980." },
  ],
  tarjetas: [
    ["Pactos de la Moncloa", "Acuerdos de 1977 contra la crisis económica."],
    ["Estado de las autonomías", "Organización territorial con 17 comunidades autónomas."],
    ["Monarquía parlamentaria", "El rey es jefe del Estado, pero gobierna un Gobierno elegido."],
  ],
});
