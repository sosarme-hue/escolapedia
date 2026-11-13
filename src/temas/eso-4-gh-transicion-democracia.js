// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Transición y la democracia en España",
  minutos: 110,
  objetivos: [
    "Explicar cómo se pasó de la dictadura a la democracia entre 1975 y 1982",
    "Conocer los rasgos básicos de la Constitución de 1978",
    "Describir las etapas de la democracia y la integración en Europa",
    "Explicar los pasos de la Transición y el papel de sus protagonistas",
    "Conocer la estructura y los principios de la Constitución de 1978",
  ],
  claves: [
    "Transición",
    "Ley para la Reforma Política",
    "Constitución de 1978",
    "consenso",
    "23-F",
    "Estado de las autonomías",
  ],
  pregunta: {
    texto: `El 15 de junio de 1977 millones de españoles votaron por primera vez en 41 años. Muchos de ellos nunca habían votado. ¿Cómo se pasó de una dictadura a una democracia sin una guerra?`,
    respuesta: `Con la <mark>Transición</mark>: un proceso de reformas pactadas en el que los herederos del régimen, encabezados por el rey Juan Carlos I y Adolfo Suárez, y la oposición democrática negociaron el cambio. Su resultado fue la <b>Constitución de 1978</b>, aprobada en referéndum.`,
  },
  lectura: {
    titulo: "Una tarde de febrero en el Congreso",
    html: `<p>Madrid, 23 de febrero de 1981, seis y veintitrés de la tarde. En el Congreso de los Diputados se vota la investidura de un nuevo presidente del Gobierno. De repente, un grupo de guardias civiles armados irrumpe en el hemiciclo. Su jefe, el teniente coronel Antonio Tejero, sube a la tribuna pistola en mano y grita: «¡Quieto todo el mundo!». Suenan disparos al techo. Casi todos los diputados se tiran al suelo; solo tres permanecen sentados en sus escaños.</p><p>Las cámaras de televisión siguen grabando. Durante horas, el país vive en vilo, pegado a la radio: en Valencia los tanques salen a la calle. Muchos recuerdan la guerra y la larga dictadura, y temen que todo lo conseguido en los últimos cinco años desaparezca. A la una y cuarto de la madrugada, el rey Juan Carlos I aparece en televisión vestido de capitán general y ordena a los militares que respeten la Constitución. El golpe fracasa. Días después, más de un millón de personas se manifiestan en las calles por la democracia.</p><p>En este tema estudiarás cómo España pasó de una dictadura a una democracia: la <b>Transición</b> y la consolidación democrática.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 España en 1975: ¿continuidad, reforma o ruptura?</h3><p>Cuando Franco murió, el 20 de noviembre de 1975, nadie sabía qué iba a ocurrir. La sociedad española había cambiado mucho: era urbana, con amplias clases medias, más formada y abierta a Europa, y deseaba libertades. Pero las instituciones franquistas seguían en pie, y el ejército vigilaba.</p><p>Había tres grandes opciones:</p><ul><li>El <mark>continuismo</mark>: el «búnker», los franquistas más duros, quería mantener el régimen sin cambios.</li><li>La <mark>reforma</mark>: los franquistas más abiertos querían llegar a la democracia de forma gradual, cambiando las leyes desde dentro, sin romper con la legalidad.</li><li>La <mark>ruptura</mark>: la oposición democrática (PSOE, PCE, nacionalistas, sindicatos) quería acabar de golpe con el franquismo, formar un gobierno provisional y convocar elecciones constituyentes.</li></ul><p>Al principio, el rey mantuvo como presidente a Carlos <b>Arias Navarro</b>, que solo planteaba pequeños cambios. Pero la presión de la calle fue enorme: en 1976 hubo miles de huelgas y manifestaciones por la amnistía y la libertad, algunas con muertos, como en Vitoria. Finalmente se impuso una vía intermedia: una <b>reforma pactada</b>, que acabó llevando a una ruptura con la dictadura sin violencia generalizada.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres caminos en 1975: Continuismo, Reforma, Ruptura"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Tres caminos en 1975</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Continuismo</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >el búnker: nada</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >cambia</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Reforma</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >cambio gradual</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >desde las leyes</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Ruptura</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >la oposición:</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >romper de golpe</text></g></svg>`,
      video: {
        id: "Ck5-OXF34Fw",
        titulo: "La Transición en 6 minutos",
        canal: "Alejandro Díaz de Losada",
        vistas: 122206,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.2 Los protagonistas</h3><table class="tb"><thead><tr><th>Protagonista</th><th>Papel</th></tr></thead><tbody><tr><td>Juan Carlos I</td><td>rey desde 1975; impulsó el cambio y frenó el golpe de 1981</td></tr><tr><td>Adolfo Suárez</td><td>presidente del Gobierno (1976-1981); Ley para la Reforma Política y primeras elecciones</td></tr><tr><td>Torcuato Fernández-Miranda</td><td>presidente de las Cortes; diseñó la reforma desde la legalidad franquista</td></tr><tr><td>Santiago Carrillo</td><td>líder del PCE, legalizado en 1977; aceptó la monarquía</td></tr><tr><td>Felipe González</td><td>líder del PSOE; presidente desde 1982</td></tr></tbody></table><p>La Transición fue obra de muchas personas. El rey <b>Juan Carlos I</b>, que había heredado todos los poderes de Franco, decidió renunciar a ellos y apoyar la democracia. En julio de 1976 nombró presidente a <mark>Adolfo Suárez</mark>, un joven político que venía del Movimiento Nacional y que, por eso, inspiraba confianza a los franquistas. Suárez sorprendió a todos: dialogó con la oposición y desmontó el régimen desde dentro.</p><p>Fueron igual de decisivos los líderes de la oposición, que aceptaron negociar, como Santiago Carrillo (PCE) o Felipe González (PSOE), los nacionalistas catalanes y vascos, y los sindicatos. Y, sobre todo, millones de ciudadanos que se manifestaron, se afiliaron a partidos y votaron, demostrando que querían vivir en democracia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Transición: Juan Carlos I, Suárez, Fernández-Miranda, Carrillo, Felipe González"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M130 92 L 130.0 30.0" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 213.7 72.8" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 181.7 142.2" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 78.3 142.2" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 46.3 72.8" stroke="var(--line)" stroke-width="2.5"/><ellipse cx="130" cy="92" rx="48" ry="24" fill="var(--pen)"/><text x="130" y="95.7" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Transición</text><rect x="90.0" y="15.0" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="33.1" text-anchor="middle" font-size="9" >Juan Carlos I</text><rect x="172.0" y="57.8" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="212" y="76.0" text-anchor="middle" font-size="9" >Suárez</text><rect x="141.7" y="127.2" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="181.72510220173763" y="145.3" text-anchor="middle" font-size="9" >Fernández-Miranda</text><rect x="38.3" y="127.2" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="78.27489779826237" y="145.3" text-anchor="middle" font-size="9" >Carrillo</text><rect x="8.0" y="57.8" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--soc, #c2410c)" stroke-width="2"/><text x="48" y="70.8" text-anchor="middle" font-size="9" >Felipe</text><text x="48" y="81.2" text-anchor="middle" font-size="9" >González</text></g></svg>`,
    },
    {
      html: `<h3>1.3 De la ley a la ley: la Ley para la Reforma Política</h3><p>El gran problema era cómo pasar de la dictadura a la democracia sin violencia y sin que el ejército interviniera. La solución, diseñada por Torcuato Fernández-Miranda, fue usar las propias leyes franquistas para desmontar el franquismo: «<mark>de la ley a la ley</mark>, a través de la ley».</p><p>Suárez presentó la <b>Ley para la Reforma Política</b>, que establecía unas Cortes con dos cámaras, el Congreso y el Senado, elegidas por sufragio universal. Para aprobarla, las Cortes franquistas tenían que votar a favor de su propia desaparición. Suárez negoció con los procuradores, les ofreció garantías y, en noviembre de 1976, la ley fue aprobada por amplia mayoría: muchos lo llamaron el «<b>harakiri</b>» de las Cortes franquistas.</p><p>En diciembre de 1976 la ley se sometió a <b>referéndum</b>: votó el 77 % del censo y el 94 % lo hizo a favor. La oposición había pedido la abstención, pero el resultado mostró que la mayoría de los españoles apoyaba ese camino. A partir de ahí, la oposición aceptó negociar con Suárez las condiciones de las primeras elecciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pasos de la Transición de 1975 a 1977">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <defs><marker id="fl-37" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
    <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle" font-size="11" font-weight="700">
    <path d="M84 52 H 92" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-37)"/><path d="M166 52 H 174" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-37)"/><path d="M212 72 C 212 98, 48 82, 48 106" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-37)"/><path d="M84 128 H 92" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-37)"/><path d="M166 128 H 174" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-37)"/>
    <rect x="12" y="34" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="12" cy="34" r="10" fill="var(--pen)"/><text x="12" y="37.5" fill="#fff" font-size="10">1</text><text x="48" y="50" fill="var(--ink)">muere</text><text x="48" y="62" fill="var(--ink)">Franco</text><rect x="94" y="34" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="94" cy="34" r="10" fill="var(--pen)"/><text x="94" y="37.5" fill="#fff" font-size="10">2</text><text x="130" y="50" fill="var(--ink)">rey Juan</text><text x="130" y="62" fill="var(--ink)">Carlos I</text><rect x="176" y="34" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="176" cy="34" r="10" fill="var(--pen)"/><text x="176" y="37.5" fill="#fff" font-size="10">3</text><text x="212" y="50" fill="var(--ink)">Suárez</text><text x="212" y="62" fill="var(--ink)">presidente</text><rect x="12" y="110" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="12" cy="110" r="10" fill="var(--pen)"/><text x="12" y="113.5" fill="#fff" font-size="10">4</text><text x="48" y="126" fill="var(--ink)">Reforma</text><text x="48" y="138" fill="var(--ink)">Política</text><rect x="94" y="110" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="94" cy="110" r="10" fill="var(--pen)"/><text x="94" y="113.5" fill="#fff" font-size="10">5</text><text x="130" y="126" fill="var(--ink)">partidos</text><text x="130" y="138" fill="var(--ink)">legales</text><rect x="176" y="110" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><circle cx="176" cy="110" r="10" fill="var(--pen)"/><text x="176" y="113.5" fill="#fff" font-size="10">6</text><text x="212" y="126" fill="var(--ink)">elecciones</text><text x="212" y="138" fill="var(--ink)">1977</text>
  </g>
  </svg>`,
    },
    {
      html: `<h3>1.4 Del referéndum a las primeras elecciones</h3><p>En 1977 se dieron pasos decisivos. Se aprobó una <b>amnistía</b> para los presos políticos y se legalizaron los partidos y los sindicatos. El caso más difícil fue el <mark>Partido Comunista</mark> (PCE), al que el ejército consideraba el gran enemigo. Suárez lo legalizó en el <b>Sábado Santo</b> de abril de 1977, aprovechando las vacaciones; el PCE, a cambio, aceptó la monarquía y la bandera. Ese mismo año, en enero, un grupo de extrema derecha asesinó a cinco abogados laboralistas en su despacho de la calle Atocha, en Madrid; la respuesta serena y masiva de la izquierda en el entierro reforzó la vía pacífica.</p><p>El <b>15 de junio de 1977</b> se celebraron las <mark>primeras elecciones libres</mark> desde 1936, con una participación del 79 %. Ganó la <b>UCD</b>, la coalición centrista de Suárez, seguida del PSOE de Felipe González; el PCE y Alianza Popular, de Manuel Fraga, obtuvieron muchos menos votos. Los españoles habían elegido moderación.</p><p>La economía atravesaba una grave crisis, con una inflación de casi el 30 %. En octubre, los partidos firmaron los <b>Pactos de la Moncloa</b>, que moderaron salarios y precios a cambio de reformas sociales y fiscales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Elecciones de 1977 (% de votos). UCD 34 %, PSOE 29 %, PCE 9 %, AP 8 %"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Elecciones de 1977 (% de votos)</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="28.3" y="50.0" width="38.5" height="96.0" rx="3" fill="var(--pen)"/><text x="47.5" y="46.3" text-anchor="middle" font-size="9.5" font-weight="700">34 %</text><text x="47.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">UCD</text><rect x="83.3" y="64.1" width="38.5" height="81.9" rx="3" fill="var(--red)"/><text x="102.5" y="60.4" text-anchor="middle" font-size="9.5" font-weight="700">29 %</text><text x="102.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">PSOE</text><rect x="138.3" y="120.6" width="38.5" height="25.4" rx="3" fill="var(--leaf)"/><text x="157.5" y="116.9" text-anchor="middle" font-size="9.5" font-weight="700">9 %</text><text x="157.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">PCE</text><rect x="193.3" y="123.4" width="38.5" height="22.6" rx="3" fill="var(--sun)"/><text x="212.5" y="119.7" text-anchor="middle" font-size="9.5" font-weight="700">8 %</text><text x="212.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">AP</text></g></svg>`,
    },
    {
      html: `<h3>1.5 El consenso y la Constitución de 1978</h3><p>Las Cortes elegidas en 1977 tuvieron que redactar una Constitución. Para que fuera de todos, se buscó el <mark>consenso</mark>: un acuerdo entre partidos con ideas muy distintas, en el que cada uno cedía algo. Una comisión de siete diputados, los «<b>padres de la Constitución</b>», preparó el texto: tres de UCD, uno del PSOE, uno del PCE, uno de Alianza Popular y uno de los nacionalistas catalanes. Hubo debates difíciles sobre la monarquía, la religión, la educación o las autonomías, y largas negociaciones, a veces de madrugada.</p><p>El texto fue aprobado por las Cortes y después, en <b>referéndum</b>, el <b>6 de diciembre de 1978</b>, con un 88 % de votos a favor. Por eso ese día es fiesta nacional. Es la Constitución más duradera de la historia de España y la primera hecha por acuerdo de casi todas las fuerzas políticas, no impuesta por un solo partido.</p><p>En el País Vasco la participación fue más baja, porque el PNV pidió la abstención al no reconocerse sus derechos históricos como deseaba. A pesar de ello, la Constitución se convirtió en la base de la convivencia democrática.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rasgos de la Constitución de 1978">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="21" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="14" y="21" width="80" height="30" rx="8" fill="var(--pen)"/><text x="54" y="40" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Forma</text><text x="102" y="40" font-size="10.5" fill="var(--ink)">monarquía parlamentaria</text><rect x="14" y="55" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="14" y="55" width="80" height="30" rx="8" fill="var(--red)"/><text x="54" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Soberanía</text><text x="102" y="74" font-size="9.5" fill="var(--ink)">reside en el pueblo español</text><rect x="14" y="89" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="89" width="80" height="30" rx="8" fill="var(--leaf)"/><text x="54" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Derechos</text><text x="102" y="108" font-size="10.5" fill="var(--ink)">igualdad, libertades, voto</text><rect x="14" y="123" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><rect x="14" y="123" width="80" height="30" rx="8" fill="var(--sun)"/><text x="54" y="142" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Territorio</text><text x="102" y="142" font-size="10.5" fill="var(--ink)">17 comunidades autónomas</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.6 Qué dice la Constitución de 1978</h3><p>La Constitución define España como un <mark>Estado social y democrático de Derecho</mark>, cuya forma política es la <b>monarquía parlamentaria</b>: el rey es el jefe del Estado, pero no gobierna; sus actos deben ser refrendados por el Gobierno. La <b>soberanía nacional</b> reside en el pueblo español.</p><p>Reconoce amplios <b>derechos y libertades</b>: igualdad ante la ley sin discriminación, libertad de expresión, de reunión, de asociación y religiosa (el Estado es aconfesional), derecho a la educación, a la huelga y a la sindicación. Como Estado social, compromete a los poderes públicos con la sanidad, las pensiones y la vivienda. Abolió la pena de muerte y estableció la mayoría de edad a los 18 años.</p><p>Establece la <b>división de poderes</b>: las <b>Cortes Generales</b> (Congreso y Senado) hacen las leyes y controlan al Gobierno; el <b>Gobierno</b>, dirigido por un presidente elegido por el Congreso, ejecuta las leyes; los <b>jueces</b>, independientes, las aplican. El Tribunal Constitucional vela por que las leyes respeten la Constitución, y el Defensor del Pueblo protege los derechos de los ciudadanos. Tiene un preámbulo, 169 artículos en 10 títulos y varias disposiciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Poderes del Estado: Ciudadanos: votan → Cortes: hacen las leyes → Gobierno: ejecuta → Jueces: aplican las leyes"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Poderes del Estado</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="45.9" text-anchor="middle" font-size="10.5" >Ciudadanos: votan</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="84.4" text-anchor="middle" font-size="10.5" >Cortes: hacen las leyes</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="122.9" text-anchor="middle" font-size="10.5" >Gobierno: ejecuta</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="161.4" text-anchor="middle" font-size="10.5" >Jueces: aplican las leyes</text></g></svg>`,
      video: {
        id: "hwL6Hp3kk1g",
        titulo: "Aprende rápido los títulos de la Constitución Española",
        canal: "LANDL Formación",
        vistas: 426932,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.7 El Estado de las autonomías</h3><p>El franquismo había sido muy centralista y había reprimido las lenguas y culturas de Cataluña, el País Vasco y Galicia. La Constitución reconoce la <b>unidad de España</b> y, a la vez, el <mark>derecho a la autonomía</mark> de las nacionalidades y regiones que la integran. Reconoce como oficiales, junto al castellano, las otras lenguas de España en sus comunidades.</p><p>Entre <b>1979 y 1983</b> se aprobaron los <b>estatutos de autonomía</b> de las 17 comunidades autónomas, y en 1995 los de Ceuta y Melilla como ciudades autónomas. El estatuto es la norma básica de cada comunidad. Cada una tiene un Parlamento elegido por los ciudadanos, un Gobierno con su presidente y un Tribunal Superior de Justicia, y gestiona competencias propias, como la educación, la sanidad, la cultura o el transporte.</p><p>Hubo dos vías de acceso. País Vasco, Cataluña y Galicia, que habían aprobado estatuto en la República, accedieron por la <b>vía rápida</b> con más competencias. <b>Andalucía</b> la consiguió tras el referéndum del 28 de febrero de 1980, después de grandes manifestaciones. El resto siguió la vía lenta, aunque con el tiempo las competencias se igualaron bastante. Hoy España es uno de los países más descentralizados de Europa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Comunidades autónomas por año de estatuto. 1979 2, 1981 4, 1982 7, 1983 4"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Comunidades autónomas por año de</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">estatuto</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="28.3" y="122.6" width="38.5" height="23.4" rx="3" fill="var(--pen)"/><text x="47.5" y="118.9" text-anchor="middle" font-size="9.5" font-weight="700">2</text><text x="47.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1979</text><rect x="83.3" y="99.1" width="38.5" height="46.9" rx="3" fill="var(--red)"/><text x="102.5" y="95.5" text-anchor="middle" font-size="9.5" font-weight="700">4</text><text x="102.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1981</text><rect x="138.3" y="64.0" width="38.5" height="82.0" rx="3" fill="var(--leaf)"/><text x="157.5" y="60.3" text-anchor="middle" font-size="9.5" font-weight="700">7</text><text x="157.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1982</text><rect x="193.3" y="99.1" width="38.5" height="46.9" rx="3" fill="var(--sun)"/><text x="212.5" y="95.5" text-anchor="middle" font-size="9.5" font-weight="700">4</text><text x="212.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1983</text></g></svg>`,
    },
    {
      html: `<h3>1.8 Amenazas: terrorismo, crisis y el 23-F</h3><p>La Transición no fue un camino fácil ni del todo pacífico. El <mark>terrorismo</mark> fue la mayor amenaza: <b>ETA</b> asesinó a cerca de cien personas al año entre 1978 y 1980, sobre todo militares, policías y guardias civiles, para provocar al ejército. También actuaron grupos de extrema izquierda, como los GRAPO, y de extrema derecha. A ello se sumaban la crisis económica, con un paro creciente, y las tensiones dentro de UCD, que se dividía.</p><p>En enero de 1981 dimitió Adolfo Suárez. Durante la votación de su sucesor, Leopoldo Calvo-Sotelo, el <b>23 de febrero de 1981</b>, el teniente coronel <b>Antonio Tejero</b> asaltó el Congreso con guardias civiles y tomó como rehenes al Gobierno y a los diputados. Era un <mark>golpe de Estado</mark> en el que participaban otros militares, como el general Milans del Bosch, que sacó los tanques en Valencia, y el general Armada.</p><p>El golpe fracasó en pocas horas porque la mayoría del ejército no lo secundó y porque el <b>rey</b>, en un mensaje televisado de madrugada, defendió la Constitución. El 27 de febrero, millones de personas se manifestaron por la libertad. Los golpistas fueron juzgados y condenados.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hemiciclo del Congreso con la fecha 23-F 1981">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M80 130 A 50 50 0 0 1 180 130" fill="none" stroke="var(--pen)" stroke-width="10" stroke-dasharray="6 4"/><path d="M60 130 A 70 70 0 0 1 200 130" fill="none" stroke="var(--pen)" stroke-width="10" stroke-dasharray="6 4"/><path d="M40 130 A 90 90 0 0 1 220 130" fill="none" stroke="var(--red)" stroke-width="10" stroke-dasharray="6 4"/>
        <rect x="114" y="112" width="32" height="18" rx="3" fill="var(--ink)"/>
        <text x="130" y="162" text-anchor="middle" font-size="18" font-weight="700" fill="var(--red)" font-family="Baloo 2, sans-serif">23-F · 1981</text>
      </svg>`,
      video: { id: "KSR-nXPSqBM", titulo: "El 23F en 10 minutos", canal: "Memorias de Pez", vistas: 875693, megusta: 0 },
    },
    {
      html: `<h3>1.9 Una sociedad que estrena libertades</h3><p>La Transición no fue solo un cambio político: fue también una transformación de la vida cotidiana. Desapareció la <b>censura</b> (1977) y aparecieron nuevos periódicos, como <i>El País</i> o <i>Diario 16</i>, y revistas que hablaban con libertad de política, sexo o religión. Volvieron muchos exiliados, como el poeta Rafael Alberti o la dirigente comunista Dolores Ibárruri. El <i>Guernica</i> de Picasso llegó a España en 1981.</p><p>Las leyes cambiaron para adaptarse a la sociedad: se despenalizaron los anticonceptivos (1978), se aprobó la <mark>ley del divorcio</mark> (1981), se igualaron los derechos de los hijos nacidos dentro y fuera del matrimonio y las mujeres alcanzaron la plena igualdad legal; muchas llegaron a la política, la universidad y las profesiones. La mayoría de edad bajó a los 18 años.</p><p>En la cultura, la <b>Movida madrileña</b> de los años ochenta simbolizó las ganas de libertad y de modernidad de los jóvenes, con grupos musicales, cineastas como Pedro Almodóvar, fotógrafos y diseñadores. También volvieron a usarse con normalidad en la escuela, los medios y la administración el catalán, el euskera y el gallego.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Nuevas libertades: 1977, 1978, 1981, Cultura"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Nuevas libertades</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">1977</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >fin de la censura</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">1978</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >anticonceptivos</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >legales</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">1981</text><text x="68" y="150.5" text-anchor="middle" font-size="10" >ley del divorcio</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Cultura</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >la Movida</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >madrileña</text></g></svg>`,
    },
    {
      html: `<h3>1.10 La consolidación democrática</h3><p>En las elecciones de octubre de <b>1982</b>, el <b>PSOE</b> de Felipe González obtuvo la mayoría absoluta, con más de diez millones de votos. Por primera vez desde 1936, un partido de la oposición, y además de izquierda, llegaba al Gobierno de forma pacífica, y la derecha aceptaba el resultado. Muchos historiadores consideran esta <mark>alternancia</mark> como el final de la Transición: la democracia se había consolidado.</p><p>Desde entonces, el poder ha cambiado de manos en las urnas en varias ocasiones: gobernó el PSOE de Felipe González (1982-1996), el <b>Partido Popular</b> de José María Aznar (1996-2004), el PSOE de José Luis Rodríguez Zapatero (2004-2011), el PP de Mariano Rajoy (2011-2018) y el PSOE de Pedro Sánchez desde 2018, en coalición. Es la etapa democrática más larga y estable de la historia de España.</p><p>El terrorismo de ETA continuó durante años, con más de 850 asesinatos en total y una fuerte reacción social, como las manifestaciones tras el asesinato del concejal Miguel Ángel Blanco (1997). Gracias a la acción policial y judicial y al rechazo de la sociedad, en <b>2011</b> ETA anunció el fin definitivo de la violencia, y se disolvió en 2018.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Hitos de la democracia">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--leaf)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1982</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">gana el</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">PSOE</text><circle cx="98" cy="90" r="7" fill="var(--leaf)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1986</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">entra en</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">la CEE</text><circle cx="162" cy="90" r="7" fill="var(--leaf)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1992</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Barcelona</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">y Sevilla</text><circle cx="226" cy="90" r="7" fill="var(--leaf)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">2002</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">llega</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">el euro</text>
  </svg>`,
    },
    {
      html: `<h3>1.11 España se moderniza y se abre al mundo</h3><p>Los gobiernos socialistas de los años ochenta y noventa impulsaron grandes reformas. Se universalizó la <b>sanidad pública</b> (Ley General de Sanidad, 1986), se extendieron las pensiones y la enseñanza obligatoria y gratuita hasta los 16 años (LOGSE, 1990), y se construyeron autovías, hospitales y escuelas. También se llevó a cabo una dura <b>reconversión industrial</b>, que cerró astilleros, minas y siderurgias poco rentables y provocó mucho paro y protestas.</p><p>España rompió su aislamiento internacional. Entró en la <b>OTAN</b> en 1982, y su permanencia se confirmó en un reñido referéndum en 1986. El <b>1 de enero de 1986</b> ingresó en la <mark>Comunidad Económica Europea</mark>, junto a Portugal: era un viejo sueño de la oposición antifranquista, porque «Europa» significaba democracia y modernidad. Los fondos europeos ayudaron a modernizar infraestructuras y agricultura.</p><p>En <b>1992</b> los Juegos Olímpicos de Barcelona y la Exposición Universal de Sevilla, junto al primer AVE (Madrid-Sevilla), mostraron al mundo un país moderno. En 2002 España adoptó el <b>euro</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Grandes reformas: Sanidad, Educación, Industria, Transporte"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Grandes reformas</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Sanidad</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >universal desde</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >1986</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Educación</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >obligatoria hasta</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >16 años</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Industria</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >reconversión y</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >paro</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Transporte</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >autovías y AVE</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >(1992)</text></g></svg>`,
    },
    {
      html: `<h3>1.12 La España democrática del siglo XXI</h3><p>En el siglo XXI la democracia española ha afrontado nuevos retos. España recibió millones de <b>inmigrantes</b>: en pocos años pasó de ser un país de emigrantes a uno de inmigración, y hoy más del 13 % de sus habitantes ha nacido en el extranjero. El 11 de marzo de 2004 sufrió el peor atentado de su historia, cuando terroristas yihadistas mataron a 192 personas en trenes de Madrid.</p><p>La <mark>crisis económica de 2008</mark>, agravada por el estallido de la burbuja inmobiliaria, disparó el paro por encima del 26 % en 2013 y obligó a duros recortes. El descontento se expresó en el movimiento <b>15-M</b> (2011), con acampadas en las plazas que pedían «democracia real», y en la aparición de nuevos partidos que acabaron con el bipartidismo PP-PSOE. En 2014 el rey Juan Carlos I abdicó y le sucedió su hijo, <b>Felipe VI</b>. En 2017 el intento de independencia de Cataluña provocó una grave crisis política. En 2020 la pandemia de COVID-19 causó decenas de miles de muertes.</p><p>Se han ampliado derechos, como el <b>matrimonio igualitario</b> (2005), y la memoria democrática. La Constitución sigue siendo el marco común de la convivencia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Retos del siglo XXI: Inmigración, Crisis 2008, Nuevos partidos, Cataluña"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Retos del siglo XXI</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Inmigración</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >más del 13 %</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >nacido fuera</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Crisis 2008</text><text x="192" y="75.5" text-anchor="middle" font-size="10" >paro y recortes</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Nuevos partidos</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >fin del</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >bipartidismo</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Cataluña</text><text x="192" y="150.5" text-anchor="middle" font-size="10" >crisis de 2017</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Cronología de la Transición",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo de 1975 a 1986">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <path d="M30 100 H 650" stroke="var(--line)" stroke-width="4"/>
    <rect x="40" y="92" width="480" height="16" rx="8" fill="var(--pen)" opacity=".75"/><text x="280" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Transición</text><rect x="520" y="92" width="120" height="16" rx="8" fill="var(--leaf)" opacity=".75"/><text x="580" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text>
    <path d="M40 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="40" cy="100" r="5" fill="var(--ink)"/><text x="40" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1975</text><text x="20" y="54" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">muere Franco</text><path d="M130 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="130" cy="100" r="5" fill="var(--ink)"/><text x="130" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1976</text><text x="130" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Suárez y Reforma</text><path d="M220 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="220" cy="100" r="5" fill="var(--ink)"/><text x="220" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1977</text><text x="220" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">primeras elecciones</text><path d="M320 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="320" cy="100" r="5" fill="var(--ink)"/><text x="320" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1978</text><text x="320" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Constitución</text><path d="M420 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="420" cy="100" r="5" fill="var(--ink)"/><text x="420" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1981</text><text x="420" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">23-F</text><path d="M520 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="520" cy="100" r="5" fill="var(--ink)"/><text x="520" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1982</text><text x="520" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">gana el PSOE</text><path d="M630 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="630" cy="100" r="5" fill="var(--ink)"/><text x="630" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1986</text><text x="650" y="54" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">entra en la CEE</text>
  </svg>`,
  },
  video: {
    id: "y-cpcl2ADXk",
    titulo: "La Transición española explicada en 10 minutos",
    canal: "Memorias de Pez",
    vistas: 348755,
    megusta: 10044,
    busqueda: "transición española resumen",
  },
  ejemplos: [
    {
      enunciado: "Explica qué significa «de la ley a la ley».",
      pasos: [
        "La Transición no rompió de golpe con el franquismo.",
        "Usó las propias leyes franquistas para cambiarlas.",
        "Las Cortes franquistas aprobaron la Ley para la Reforma Política.",
        "Así se llegó a la democracia sin vacío legal.",
      ],
      resultado: "Se pasó de la dictadura a la democracia reformando la legalidad, no rompiéndola.",
    },
    {
      enunciado: `Clasifica estos poderes según la Constitución: Congreso y Senado, Gobierno, Tribunal Supremo.`,
      pasos: [
        "Congreso y Senado (Cortes Generales): poder legislativo.",
        "Gobierno: poder ejecutivo.",
        "Tribunal Supremo y jueces: poder judicial.",
      ],
      resultado: "Legislativo, ejecutivo y judicial, separados.",
    },
    {
      enunciado: "¿Por qué fue clave la legalización del PCE?",
      pasos: [
        "Era el principal partido de la oposición clandestina.",
        "Dejarlo fuera habría restado legitimidad a las elecciones.",
        "Carrillo aceptó la monarquía y la bandera.",
        "El ejército se opuso, pero Suárez lo hizo.",
      ],
      resultado: "Permitió unas elecciones con todas las fuerzas políticas y reforzó el consenso.",
    },
    {
      enunciado: "Explica por qué la Transición fue una «reforma pactada».",
      pasos: [
        `Reforma: el cambio se hizo desde las leyes franquistas (Ley para la Reforma Política), sin romper la legalidad.`,
        `Pactada: el Gobierno de Suárez negoció con la oposición las elecciones, la amnistía y la Constitución.`,
        `La oposición renunció a la ruptura total y aceptó la monarquía; los reformistas aceptaron una democracia plena.`,
        "Resultado: se evitó una nueva guerra y se llegó a una Constitución de consenso.",
      ],
      resultado: `Fue una vía intermedia entre el continuismo y la ruptura: se llegó a la democracia desde la ley y mediante acuerdos.`,
    },
    {
      enunciado: "Analiza los resultados de las elecciones de 1977: UCD 34 %, PSOE 29 %, PCE 9 %, AP 8 %.",
      pasos: [
        "Ganó la UCD, centrista, sin mayoría absoluta.",
        "El PSOE se convirtió en el gran partido de la izquierda; el PCE quedó muy por detrás.",
        "Alianza Popular, con muchos exministros franquistas, obtuvo poco apoyo.",
        `Conclusión: la mayoría votó opciones moderadas y la necesidad de pactar favoreció el consenso.`,
      ],
      resultado: `Los votantes premiaron la moderación; ningún partido podía imponerse solo, lo que obligó al consenso constitucional.`,
    },
    {
      enunciado: "¿Por qué fracasó el golpe del 23-F?",
      pasos: [
        "La mayoría de los mandos militares no se unió al golpe.",
        "El rey, jefe de las Fuerzas Armadas, ordenó respetar la Constitución en televisión.",
        "Los golpistas estaban divididos sobre sus objetivos.",
        "La sociedad respondió con enormes manifestaciones a favor de la democracia.",
      ],
      resultado: `El golpe fracasó por falta de apoyo militar, la actuación del rey y el rechazo de la sociedad; reforzó la democracia.`,
    },
  ],
  errores: [
    "Pensar que la Constitución es de 1975: se aprobó en 1978.",
    "Creer que la Transición fue totalmente pacífica: hubo terrorismo y un intento de golpe.",
    `Decir que el rey gobierna: en la monarquía parlamentaria gobierna el Gobierno elegido por las Cortes.`,
    "Confundir la entrada en la CEE (1986) con la creación del euro (2002).",
    `Pensar que las comunidades autónomas son independientes: tienen autonomía dentro del Estado.`,
    `Pensar que la Transición fue obra solo del rey y de Suárez: la presión de la sociedad, de la oposición y de los sindicatos fue decisiva.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué fue la Ley para la Reforma Política?",
      sol: `La ley de 1976 que permitió elegir unas Cortes democráticas; la aprobaron las Cortes franquistas y el pueblo en referéndum.`,
    },
    {
      nivel: "básico",
      q: "¿Cuándo fueron las primeras elecciones democráticas tras Franco y quién ganó?",
      sol: "El 15 de junio de 1977; ganó la UCD de Adolfo Suárez.",
    },
    {
      nivel: "básico",
      q: "¿Cuántas comunidades autónomas hay?",
      sol: "17 comunidades autónomas y 2 ciudades autónomas (Ceuta y Melilla).",
    },
    {
      nivel: "básico",
      q: "¿Qué pasó el 23 de febrero de 1981?",
      sol: `Un intento de golpe de Estado: guardias civiles asaltaron el Congreso; fracasó, entre otras razones, por la intervención del rey.`,
    },
    { nivel: "básico", q: "¿Cuándo entró España en la CEE?", sol: "El 1 de enero de 1986." },
    {
      nivel: "básico",
      q: "¿Qué tres opciones políticas había en 1975?",
      sol: `El continuismo (mantener el franquismo), la reforma (cambiar gradualmente desde las leyes) y la ruptura (acabar de golpe con el régimen).`,
    },
    {
      nivel: "básico",
      q: "¿Quiénes fueron los padres de la Constitución?",
      sol: `Los siete diputados de distintos partidos (UCD, PSOE, PCE, AP y nacionalistas catalanes) que redactaron el texto constitucional.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la Movida madrileña?",
      sol: `Un movimiento cultural juvenil de los años ochenta, con música, cine, moda y fotografía, que simbolizó las ganas de libertad y modernidad tras la dictadura.`,
    },
    { nivel: "básico", q: "¿Cuándo se aprobó la ley del divorcio?", sol: "En 1981." },
    {
      nivel: "básico",
      q: "¿Quién es el jefe del Estado desde 2014?",
      sol: "El rey Felipe VI, tras la abdicación de Juan Carlos I.",
    },
    {
      nivel: "básico",
      q: "¿Qué fue la matanza de Atocha?",
      sol: `El asesinato de cinco abogados laboralistas en su despacho de Madrid por pistoleros de extrema derecha en enero de 1977.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fueron los Pactos de la Moncloa?",
      sol: `Acuerdos de 1977 entre partidos, sindicatos y empresarios para afrontar la crisis económica y reforzar la democracia.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué la Constitución se llama «del consenso»?",
      sol: `Porque la redactaron ponentes de partidos muy distintos, de la derecha a los comunistas, buscando acuerdos.`,
    },
    {
      nivel: "medio",
      q: "Explica «Estado social y democrático de Derecho».",
      sol: `Social: garantiza servicios y bienestar; democrático: el poder viene del pueblo; de Derecho: todos, también el Estado, cumplen la ley.`,
    },
    {
      nivel: "medio",
      q: "¿Qué daño hizo ETA a la democracia?",
      sol: `Asesinó a más de 800 personas y buscó desestabilizar la democracia; anunció su fin definitivo en 2011 y se disolvió en 2018.`,
    },
    {
      nivel: "medio",
      q: "¿Qué simbolizó el año 1992 para España?",
      sol: "Los Juegos de Barcelona y la Expo de Sevilla mostraron un país moderno y abierto al mundo.",
    },
    {
      nivel: "medio",
      q: "¿Por qué era tan delicada la legalización del PCE?",
      sol: `Porque el ejército y los franquistas consideraban al comunismo su gran enemigo desde la Guerra Civil; temían un golpe militar. Pero sin el PCE las elecciones no habrían sido plenamente democráticas. Suárez lo legalizó en Semana Santa de 1977 y el PCE aceptó la monarquía y la bandera.`,
    },
    {
      nivel: "medio",
      q: "Explica qué significa que España es una monarquía parlamentaria.",
      sol: `Que el jefe del Estado es el rey, de forma hereditaria, pero no gobierna: tiene funciones simbólicas y de representación, y sus actos deben ser refrendados. El poder reside en el pueblo, que elige las Cortes, y el Gobierno depende de la confianza del Congreso.`,
    },
    {
      nivel: "medio",
      q: "¿Qué es un estatuto de autonomía?",
      sol: `La norma institucional básica de cada comunidad autónoma, aprobada por las Cortes Generales, que establece sus instituciones, su territorio, sus símbolos, su lengua y las competencias que asume.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué Andalucía es un caso especial en el acceso a la autonomía?",
      sol: `Porque no había aprobado estatuto en la República, pero tras grandes manifestaciones (4 de diciembre de 1977) consiguió la vía rápida con el referéndum del 28 de febrero de 1980, alcanzando las mismas competencias que País Vasco, Cataluña y Galicia.`,
    },
    {
      nivel: "medio",
      q: "¿Qué cambios supuso la Transición para las mujeres?",
      sol: `Igualdad ante la ley en la Constitución, fin de la licencia marital y de las discriminaciones legales, legalización de los anticonceptivos (1978), ley del divorcio (1981), mayor acceso a la universidad, el trabajo y la política.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue la reconversión industrial y qué consecuencias tuvo?",
      sol: `El cierre o reducción en los años ochenta de sectores industriales poco competitivos, como astilleros, siderurgia y minería, para modernizar la economía. Provocó mucho paro y fuertes protestas, sobre todo en Asturias, el País Vasco, Cantabria o Galicia.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué se considera 1982 el fin de la Transición?",
      sol: `Porque el PSOE, un partido de la oposición, ganó las elecciones y gobernó con normalidad: la alternancia pacífica demostró que la democracia estaba consolidada.`,
    },
    {
      nivel: "avanzado",
      q: "Compara la Constitución de 1978 con las Leyes Fundamentales del franquismo.",
      sol: `Leyes Fundamentales: soberanía de Franco, sin elecciones libres, partido único, sindicato vertical, confesionalidad católica, centralismo. Constitución de 1978: soberanía nacional, sufragio universal, pluralismo de partidos y sindicatos, derechos y libertades, Estado aconfesional, división de poderes, autonomías. Pasa de una dictadura a un Estado social y democrático de Derecho.`,
    },
    {
      nivel: "avanzado",
      q: "Valora el papel de Juan Carlos I en la Transición.",
      sol: `Positivo: renunció a los poderes heredados de Franco, nombró a Suárez y apoyó la reforma; en el 23-F defendió la Constitución. Matices: su legitimidad venía de Franco y la consiguió después con la Constitución; la Transición fue obra de muchos protagonistas y de la presión social. Además, su imagen se deterioró más tarde por escándalos, lo que llevó a su abdicación en 2014.`,
    },
    {
      nivel: "avanzado",
      q: "¿Fue la Transición «modélica»? Argumenta a favor y en contra.",
      sol: `A favor: se pasó de una dictadura a una democracia sin guerra, con consenso, una Constitución duradera y una rápida integración en Europa. En contra: hubo violencia (terrorismo, represión policial, extrema derecha), con cientos de muertos; la amnistía de 1977 impidió juzgar los crímenes del franquismo; y el miedo al ejército condicionó muchos acuerdos. Es una valoración abierta al debate.`,
    },
    {
      nivel: "avanzado",
      q: `Comenta el artículo 1.2 de la Constitución: «La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado».`,
      sol: `Significa que el poder pertenece a los ciudadanos, que lo ejercen votando a sus representantes. Contrasta con el franquismo, donde el poder lo tenía Franco. Es la base de la democracia: Cortes, Gobierno y jueces actúan en nombre del pueblo.`,
    },
    {
      nivel: "avanzado",
      q: "Explica la relación entre la crisis económica de los años setenta y la Transición.",
      sol: `La crisis del petróleo (1973) provocó inflación de casi el 30 % y paro creciente; aumentaron las huelgas. Ponía en riesgo el cambio político. Los Pactos de la Moncloa (1977) unieron a partidos, sindicatos y empresarios para moderar salarios y precios a cambio de reformas: un ejemplo del consenso que también se aplicó a la Constitución.`,
    },
    {
      nivel: "avanzado",
      q: "Elabora una línea del tiempo de la Transición (1975-1982) con ocho acontecimientos.",
      sol: `1975 muerte de Franco y proclamación del rey; 1976 Suárez presidente; 1976 Ley para la Reforma Política y referéndum; 1977 legalización del PCE; 1977 primeras elecciones y Pactos de la Moncloa; 1978 Constitución; 1979-1983 estatutos de autonomía; 1981 23-F; 1982 victoria del PSOE.`,
    },
    {
      nivel: "avanzado",
      q: `Imagina que tienes 18 años y votas por primera vez en junio de 1977. Escribe lo que sientes y qué te preocupa.`,
      sol: `Debe recoger: la emoción de votar libremente por primera vez en 41 años; la variedad de partidos y carteles; el recuerdo de la dictadura en la familia; el miedo al ejército y al terrorismo; la crisis económica y el paro; las esperanzas de libertad y de entrar en Europa.`,
    },
    {
      nivel: "avanzado",
      q: "Relaciona el movimiento 15-M (2011) con la crisis económica y el sistema político.",
      sol: `La crisis de 2008 provocó paro masivo, sobre todo juvenil, desahucios y recortes. Muchos ciudadanos culparon a los grandes partidos y a los bancos. El 15-M pidió «democracia real» y más participación. Sus ideas contribuyeron a la aparición de nuevos partidos y al fin del bipartidismo.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué la entrada en la CEE en 1986 era tan importante para los españoles?",
      sol: `Porque Europa simbolizaba la democracia y la modernidad que el franquismo había negado (la CEE había rechazado a la España de Franco). Supuso integrarse en un gran mercado, recibir fondos para infraestructuras y agricultura, y consolidar la democracia y la apertura al mundo.`,
    },
  ],
  quiz: [
    {
      q: "¿Quién fue el primer presidente del gobierno de la Transición elegido en las urnas?",
      o: ["Felipe González", "Carlos Arias Navarro", "Adolfo Suárez", "Carrero Blanco"],
      a: 2,
      e: "Suárez, de UCD, ganó las elecciones de junio de 1977.",
    },
    {
      q: "¿Cuándo se aprobó la Constitución en referéndum?",
      o: ["15 de junio de 1977", "6 de diciembre de 1978", "20 de noviembre de 1975", "23 de febrero de 1981"],
      a: 1,
      e: "Por eso el 6 de diciembre es el Día de la Constitución.",
    },
    {
      q: "La Constitución define España como…",
      o: ["una república federal", "una monarquía parlamentaria", "una monarquía absoluta", "una dictadura militar"],
      a: 1,
      e: `El rey es jefe del Estado, pero el poder reside en el pueblo y lo ejercen las Cortes y el gobierno.`,
    },
    {
      q: "¿Qué ocurrió el 23-F de 1981?",
      o: [
        "Un intento de golpe de Estado en el Congreso",
        "Las primeras elecciones",
        "La muerte de Franco",
        "La entrada en la CEE",
      ],
      a: 0,
      e: "Guardias civiles al mando de Tejero asaltaron el Congreso; el golpe fracasó.",
    },
    {
      q: "¿En qué año entró España en la Comunidad Económica Europea?",
      o: ["1977", "1992", "1986", "2002"],
      a: 2,
      e: "El 1 de enero de 1986, junto con Portugal.",
    },
    {
      q: "La Ley para la Reforma Política se aprobó en referéndum en…",
      o: ["1975", "1976", "1978", "1982"],
      a: 1,
      e: "Con un 94 % de síes.",
    },
    { q: "El PCE se legalizó en…", o: ["1975", "1977", "1981", "1986"], a: 1, e: "En Semana Santa." },
    {
      q: "La forma política de España según la Constitución es…",
      o: ["república federal", "monarquía parlamentaria", "república presidencialista", "monarquía absoluta"],
      a: 1,
      e: "Artículo 1.3.",
    },
    {
      q: "La Constitución tiene…",
      o: ["169 artículos", "1.000 artículos", "500 artículos", "50 artículos"],
      a: 0,
      e: "Y 10 títulos.",
    },
    {
      q: "Andalucía logró la autonomía por la vía rápida tras…",
      o: ["los Juegos Olímpicos de 1992", "el referéndum de 1980", "el golpe de 1981", "la Expo de 1992"],
      a: 1,
      e: "El 28 de febrero de 1980.",
    },
    {
      q: "Los franquistas que se negaban a cualquier cambio eran conocidos como…",
      o: ["los reformistas", "el búnker", "la ruptura", "los tecnócratas"],
      a: 1,
      e: "Querían mantener el régimen intacto.",
    },
    {
      q: "¿Quién nombró a Adolfo Suárez presidente en 1976?",
      o: ["las Cortes elegidas", "el rey", "el pueblo en referéndum", "Franco"],
      a: 1,
      e: "En julio de 1976.",
    },
    {
      q: "La UCD era un partido…",
      o: ["comunista", "de centro", "nacionalista vasco", "anarquista"],
      a: 1,
      e: "La coalición de Suárez.",
    },
    {
      q: "Los Pactos de la Moncloa buscaban sobre todo…",
      o: ["entrar en la OTAN", "afrontar la crisis económica", "crear las autonomías", "legalizar el PCE"],
      a: 1,
      e: "Firmados en octubre de 1977.",
    },
    {
      q: "La Constitución de 1978 define el Estado como…",
      o: ["confesional católico", "aconfesional", "ateo", "laico obligatorio"],
      a: 1,
      e: "Ninguna religión es estatal.",
    },
    {
      q: "¿Qué institución vela por que las leyes respeten la Constitución?",
      o: ["el Senado", "el Tribunal Constitucional", "el Defensor del Pueblo", "el Consejo de Ministros"],
      a: 1,
      e: "Puede anular leyes inconstitucionales.",
    },
    {
      q: "¿Cuántas comunidades autónomas hay en España?",
      o: ["15", "17", "19", "50"],
      a: 1,
      e: "Más Ceuta y Melilla, ciudades autónomas.",
    },
    {
      q: "El teniente coronel que asaltó el Congreso en 1981 fue…",
      o: ["Milans del Bosch", "Tejero", "Armada", "Carrero Blanco"],
      a: 1,
      e: "Antonio Tejero.",
    },
    {
      q: "El PSOE ganó por primera vez las elecciones en…",
      o: ["1977", "1982", "1986", "1996"],
      a: 1,
      e: "Con mayoría absoluta.",
    },
    {
      q: "ETA anunció el fin de la violencia en…",
      o: ["1992", "2004", "2011", "2018"],
      a: 2,
      e: "Y se disolvió en 2018.",
    },
  ],
  examen: [
    {
      q: "«De la ley a la ley» quiere decir que…",
      o: [
        "la democracia se impuso por una revolución",
        "las Cortes franquistas aprobaron su propia disolución con una ley",
        "no hubo leyes en la Transición",
        "el rey aprobó la Constitución sin votación",
      ],
      a: 1,
      e: "La Ley para la Reforma Política permitió el cambio respetando la legalidad existente.",
    },
    {
      q: "Los Pactos de la Moncloa (1977) trataron sobre todo…",
      o: ["la crisis económica", "la Guerra Fría", "la entrada en la CEE", "la entrada en la OTAN"],
      a: 0,
      e: "Gobierno, partidos y sindicatos pactaron medidas contra la inflación y el paro.",
    },
    {
      q: "¿Por qué 1982 se considera el fin de la Transición?",
      o: [
        "Porque murió Franco",
        "Porque se celebraron los Juegos Olímpicos",
        "Porque un partido de la oposición ganó y gobernó con normalidad",
        "Porque se aprobó la Constitución",
      ],
      a: 2,
      e: "La alternancia pacífica en el poder demostró que la democracia funcionaba.",
    },
    {
      q: "La Ley para la Reforma Política se aprobó en referéndum con un…",
      o: ["51 %", "94 %", "70 %", "100 %"],
      a: 1,
      e: "En diciembre de 1976.",
    },
    {
      q: "¿Quién sucedió a Suárez como presidente en 1981?",
      o: ["Felipe González", "Calvo-Sotelo", "Fraga", "Aznar"],
      a: 1,
      e: "Su investidura se votaba el 23-F.",
    },
    {
      q: "La Constitución tiene…",
      o: ["169 artículos", "100 artículos", "250 artículos", "17 artículos"],
      a: 0,
      e: "En 10 títulos.",
    },
    {
      q: "Los Juegos Olímpicos de Barcelona se celebraron en…",
      o: ["1982", "1986", "1992", "2002"],
      a: 2,
      e: "Junto a la Expo de Sevilla.",
    },
    {
      q: "Felipe VI es rey desde…",
      o: ["1975", "2004", "2014", "2018"],
      a: 2,
      e: "Tras la abdicación de Juan Carlos I.",
    },
  ],
  feynman: [
    "Los pasos que llevaron de la muerte de Franco a las elecciones de 1977",
    "Qué es el consenso y para qué sirvió",
    "Los rasgos básicos de la Constitución de 1978",
    "Qué peligros amenazaron la Transición",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: TRANSICIÓN">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">TRANSICIÓN</text>
      <rect x="5" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--pen)">Reforma</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">Suárez · ley de 1976 · 1977</text><rect x="425" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--red)">Constitución</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">1978 · monarquía parlamentaria</text><rect x="5" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--ink)">Amenazas</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">terrorismo · 23-F</text><rect x="425" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--leaf)">Consolidación</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">1982 · OTAN · CEE 1986</text>
    </g></svg>`,
  tarjetas: [
    ["Primeras elecciones democráticas tras Franco", "15 de junio de 1977."],
    ["Día de la Constitución", "6 de diciembre (referéndum de 1978)."],
    ["Forma política del Estado español", "Monarquía parlamentaria."],
    ["23-F", "Intento de golpe de Estado del 23 de febrero de 1981."],
    ["Entrada en la CEE", "1986."],
    ["Pactos de la Moncloa", "Acuerdos de 1977 contra la crisis económica."],
    ["Estado de las autonomías", "Organización territorial con 17 comunidades autónomas."],
    ["Monarquía parlamentaria", "El rey es jefe del Estado, pero gobierna un Gobierno elegido."],
    ["Reforma pactada", "Vía de la Transición: cambio desde la ley y mediante acuerdos."],
    ["Ley para la Reforma Política", "Ley de 1976 que permitió elecciones libres."],
    ["Consenso", "Acuerdo entre partidos distintos para redactar la Constitución."],
    ["Alternancia de 1982", "Victoria del PSOE: la democracia se consolida."],
  ],
  glosario: [
    ["Transición", "Paso de la dictadura franquista a la democracia (1975-1982)."],
    ["Continuismo", "Postura que quería mantener el franquismo sin cambios."],
    ["Reforma", "Cambio gradual desde las leyes existentes."],
    ["Ruptura", "Postura de la oposición que quería acabar de golpe con el franquismo."],
    ["Amnistía", "Perdón de delitos políticos para liberar a los presos."],
    ["Referéndum", "Votación en la que los ciudadanos aprueban o rechazan una propuesta."],
    ["Consenso", "Acuerdo alcanzado con cesiones de todas las partes."],
    ["Constitución", "Ley suprema que organiza el Estado y reconoce derechos."],
    ["Monarquía parlamentaria", "Forma de Estado en la que el rey reina pero no gobierna."],
    ["Soberanía nacional", "Principio de que el poder reside en el pueblo."],
    ["Estado aconfesional", "Estado sin religión oficial."],
    ["División de poderes", "Separación entre poder legislativo, ejecutivo y judicial."],
    ["Estatuto de autonomía", "Norma básica de una comunidad autónoma."],
    ["Golpe de Estado", "Toma del poder por la fuerza, al margen de la ley."],
    ["Alternancia", "Cambio pacífico del partido en el Gobierno tras unas elecciones."],
    ["Reconversión industrial", "Cierre y modernización de industrias poco rentables."],
    ["Bipartidismo", "Sistema dominado por dos grandes partidos."],
  ],
  situacion: {
    titulo: "Una Constitución para nuestra clase",
    reto: `Para celebrar el Día de la Constitución, vuestro instituto os propone vivir el consenso: redactar entre todos unas normas de convivencia de la clase con la misma lógica de 1977-1978.`,
    pasos: [
      `Formad cuatro o cinco «grupos parlamentarios» con prioridades distintas (por ejemplo, orden, libertad, igualdad, participación).`,
      "Estudiad cómo se negoció la Constitución de 1978 y qué es el consenso.",
      "Cada grupo propone tres artículos para las normas de la clase.",
      `Una «ponencia» con un representante de cada grupo negocia un texto común, cediendo cada uno algo.`,
      "Votad el texto en «referéndum» y compáralo con el procedimiento de 1978.",
    ],
    producto: "Una «Constitución de la clase» de 10 artículos y una reflexión escrita sobre el consenso.",
    evaluacion: [
      "Comprensión del proceso constituyente de 1978.",
      "Capacidad de negociar y ceder para alcanzar acuerdos.",
      "Claridad y coherencia del texto final.",
      "Calidad de la reflexión comparativa.",
    ],
  },
  familias: [
    `Leed juntos el artículo 14 de la Constitución y hablad de qué significa la igualdad ante la ley.`,
    "Preguntad a quien lo viviera qué recuerda del referéndum de 1978 o del 23-F.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: la Transición, la Constitución de 1978 y la consolidación democrática; ciudadanía y compromiso cívico (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      "Lectura guiada del Título Preliminar de la Constitución.",
      "Simulación de un consenso: grupos con intereses distintos redactan un artículo común.",
      "Hemeroteca: portadas del 16 de junio de 1977 y del 24 de febrero de 1981.",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    { t: "Constitución Española de 1978 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" },
  ],
  revisado: "2026-11-13",
};
