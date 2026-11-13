// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "El mundo actual y la globalización",
  minutos: 105,
  objetivos: [
    "Definir la globalización y sus dimensiones económica, tecnológica y cultural",
    "Valorar sus ventajas e inconvenientes, incluidas las desigualdades",
    "Identificar los grandes retos del mundo actual y los Objetivos de Desarrollo Sostenible",
    "Explicar el fin de la Guerra Fría y el nuevo orden mundial",
    "Analizar los efectos de la revolución digital y las migraciones",
  ],
  claves: ["globalización", "multinacional", "deslocalización", "desigualdad", "cambio climático", "ODS"],
  pregunta: {
    texto: `Tu móvil se diseñó en un país, sus piezas se fabricaron en otros cinco y se montó en un sexto. Lo compraste en una tienda española y ves en él vídeos de todo el planeta. ¿Cómo hemos llegado a esto?`,
    respuesta: `Es la <mark>globalización</mark>: la creciente conexión de las economías, las sociedades y las culturas de todo el mundo, acelerada desde los años 90 por el fin de la Guerra Fría, el abaratamiento del transporte e Internet.`,
  },
  lectura: {
    titulo: "El viaje de una camiseta",
    html: `<p>Mira la etiqueta de la camiseta que llevas puesta. Es muy probable que diga «Made in Bangladesh», «Vietnam» o «China». Pero su historia es más larga. El algodón quizá se cultivó en la India o en Estados Unidos; se hiló y se tiñó en China con productos químicos alemanes; se cosió en un taller de Bangladesh por una mujer joven que cobra menos de cien euros al mes; viajó en un enorme barco portacontenedores por el océano Índico y el canal de Suez hasta Algeciras; y la diseñó una empresa con sede en Galicia, Suecia o Estados Unidos, que la vende en tiendas de cincuenta países y en internet.</p><p>Esa camiseta ha recorrido más kilómetros que muchas personas en toda su vida, y te ha costado menos que una pizza. Es posible gracias a los contenedores, a internet, a los acuerdos comerciales y a los salarios muy distintos entre unos países y otros. Pero también tiene costes: contaminación de ríos por los tintes, trabajo mal pagado o accidentes como el derrumbe del edificio Rana Plaza (Bangladesh, 2013), que mató a más de 1100 trabajadores textiles.</p><p>En este tema estudiarás el mundo actual: la <b>globalización</b>, sus ventajas, sus desigualdades y los grandes retos que compartimos.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es la globalización</h3><p>La <mark>globalización</mark> es el proceso por el que las economías, las sociedades y las culturas de todo el planeta están cada vez más conectadas e interdependientes: lo que ocurre en un lugar afecta rápidamente a lugares muy lejanos. No es totalmente nueva, porque ya hubo fases anteriores con los descubrimientos geográficos o la revolución industrial, pero se aceleró enormemente desde los años noventa, tras el fin de la Guerra Fría, cuando el capitalismo se extendió a casi todo el mundo.</p><p>Tiene varias dimensiones:</p><ul><li><b>Económica</b>: comercio y finanzas mundiales, empresas multinacionales.</li><li><b>Tecnológica</b>: internet, móviles, satélites, contenedores y aviones que abaratan las comunicaciones y el transporte.</li><li><b>Política</b>: organismos internacionales y acuerdos entre países.</li><li><b>Cultural</b>: series, música, deportes, marcas y modas compartidas en todo el planeta, con el inglés como lengua común.</li><li><b>Migratoria</b>: millones de personas viven fuera de su país.</li></ul><p>Sus defensores destacan que ha aumentado la riqueza y ha sacado de la pobreza a cientos de millones de personas. Sus críticos, los movimientos <b>altermundistas</b>, denuncian que aumenta las desigualdades, debilita el poder de los Estados frente a las grandes empresas y amenaza las culturas locales y el medio ambiente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dimensiones de la globalización">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle">
    <path d="M56 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="56" y="34" fill="var(--ink)">economía</text><path d="M204 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="204" y="34" fill="var(--ink)">tecnología</text><path d="M54 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="6" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="54" y="100" fill="var(--ink)">política</text><path d="M206 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="158" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="206" y="100" fill="var(--ink)">cultura</text><path d="M56 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--water)" stroke-width="2"/><text x="56" y="164" fill="var(--ink)">migraciones</text><path d="M204 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><text x="204" y="164" fill="var(--ink)" font-size="10.5">medio ambiente</text>
    <circle cx="130" cy="96" r="34" fill="var(--soc, #c2410c)"/>
    <text x="130" y="93" fill="#fff" font-size="11">GLOBALI-</text><text x="130" y="107" fill="#fff" font-size="11">ZACIÓN</text>
  </g>
  </svg>`,
      video: {
        id: "H74wetVX2Bs",
        titulo: "¿Qué es la globalización?",
        canal: "En Minutos • Educación",
        vistas: 684739,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.2 Del mundo bipolar al multipolar</h3><p>La caída del Muro de Berlín (1989) y la desaparición de la URSS (1991) acabaron con la Guerra Fría. Durante unos años, Estados Unidos fue la <b>única superpotencia</b>: un mundo «unipolar». Hoy el mundo es <mark>multipolar</mark>: junto a EE. UU. ganan peso China, segunda economía del mundo, la Unión Europea, la India, que es el país más poblado desde 2023, y potencias regionales como Brasil, Rusia, Turquía o Arabia Saudí. Varias economías emergentes se agrupan en los <b>BRICS</b> (Brasil, Rusia, India, China, Sudáfrica y otros países incorporados después).</p><p>Los atentados yihadistas del <b>11 de septiembre de 2001</b> en Nueva York y Washington, que mataron a casi 3000 personas, abrieron una etapa de «guerra contra el terror»: EE. UU. invadió Afganistán (2001) e Irak (2003). Después, la <b>Primavera Árabe</b> (2011) provocó revueltas y guerras como la de Siria. La invasión rusa de <b>Ucrania</b> en 2022 devolvió la guerra a gran escala a Europa, y la rivalidad entre EE. UU. y China por el liderazgo tecnológico y comercial marca hoy las relaciones internacionales. También persisten conflictos como el de Israel y Palestina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Potencias del mundo multipolar: EE. UU., China, Unión Europea, Emergentes"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Potencias del mundo multipolar</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">EE. UU.</text><text x="68" y="64.0" text-anchor="middle" font-size="10" >primera potencia</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >militar y</text><text x="68" y="87.0" text-anchor="middle" font-size="10" >económica</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">China</text><text x="192" y="75.5" text-anchor="middle" font-size="10" >segunda economía</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Unión Europea</text><text x="68" y="150.5" text-anchor="middle" font-size="10" >gran mercado único</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Emergentes</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >India, Brasil,</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >Rusia, Turquía</text></g></svg>`,
    },
    {
      html: `<h3>1.3 Los organismos internacionales</h3><p>Como muchos problemas no pueden resolverse por un solo país, los Estados cooperan en <mark>organismos internacionales</mark>.</p><table class="tb"><thead><tr><th>Organismo</th><th>Función</th></tr></thead><tbody><tr><td>ONU (1945)</td><td>mantener la paz, defender los derechos humanos y el desarrollo; 193 Estados miembros</td></tr><tr><td>OMC (1995)</td><td>regular el comercio internacional y resolver disputas comerciales</td></tr><tr><td>FMI y Banco Mundial (1944)</td><td>ayudar a países con problemas financieros y financiar proyectos de desarrollo</td></tr><tr><td>G20</td><td>reunión de las 20 mayores economías para coordinar la economía mundial</td></tr><tr><td>OTAN (1949)</td><td>alianza militar de EE. UU., Canadá y la mayoría de países europeos</td></tr></tbody></table><p>La <b>ONU</b> tiene una Asamblea General, donde cada país tiene un voto, y un <b>Consejo de Seguridad</b>, que decide sobre la paz y la guerra; en él cinco miembros permanentes (EE. UU., Rusia, China, Reino Unido y Francia) tienen derecho de <b>veto</b>, lo que a menudo bloquea sus decisiones. Sus agencias, como UNICEF, la OMS o ACNUR, trabajan en la infancia, la salud o los refugiados. También existen organizaciones regionales como la Unión Europea o la Unión Africana, y miles de <b>ONG</b>, organizaciones no gubernamentales como Médicos Sin Fronteras, Cruz Roja o Amnistía Internacional.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="ONU: UNICEF, OMS, ACNUR, UNESCO, FAO"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M130 92 L 130.0 30.0" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 213.7 72.8" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 181.7 142.2" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 78.3 142.2" stroke="var(--line)" stroke-width="2.5"/><path d="M130 92 L 46.3 72.8" stroke="var(--line)" stroke-width="2.5"/><ellipse cx="130" cy="92" rx="48" ry="24" fill="var(--pen)"/><text x="130" y="95.7" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">ONU</text><rect x="90.0" y="15.0" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="33.1" text-anchor="middle" font-size="9" >UNICEF</text><rect x="172.0" y="57.8" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="212" y="76.0" text-anchor="middle" font-size="9" >OMS</text><rect x="141.7" y="127.2" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="181.72510220173763" y="145.3" text-anchor="middle" font-size="9" >ACNUR</text><rect x="38.3" y="127.2" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="78.27489779826237" y="145.3" text-anchor="middle" font-size="9" >UNESCO</text><rect x="8.0" y="57.8" width="80" height="30" rx="8" fill="var(--card)" stroke="var(--soc, #c2410c)" stroke-width="2"/><text x="48" y="76.0" text-anchor="middle" font-size="9" >FAO</text></g></svg>`,
    },
    {
      html: `<h3>1.4 La revolución digital</h3><p>Las <mark>tecnologías de la información y la comunicación</mark> (TIC) son el motor de la globalización. Internet, los teléfonos inteligentes y las redes sociales han hecho que la información circule al instante por todo el planeta. Más de dos tercios de la población mundial usa internet, frente al 7 % del año 2000. Esto facilita el comercio electrónico, el teletrabajo, la banca en línea, la telemedicina y el aprendizaje a distancia, y permite que una noticia, una canción o un vídeo se hagan famosos en todo el mundo en horas.</p><p>Pero también plantea problemas. La <b>brecha digital</b> separa a quienes tienen acceso y saben usar estas tecnologías de quienes no, entre países y dentro de ellos, por ejemplo, entre jóvenes y mayores o entre ciudad y campo. Se difunden <b>desinformación</b> y bulos, que pueden influir en elecciones; crecen el ciberacoso, la adicción a las pantallas y la pérdida de <b>privacidad</b>, porque nuestros datos personales tienen gran valor económico; y unas pocas grandes empresas tecnológicas acumulan un enorme poder. La <b>inteligencia artificial</b> está transformando muchos trabajos y plantea nuevos debates éticos sobre empleo, autoría y control.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Usuarios de internet (% población mundial). 2000 7 %, 2010 29 %, 2020 60 %, 2024 68 %"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Usuarios de internet (% población</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">mundial)</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="28.3" y="137.6" width="38.5" height="8.4" rx="3" fill="var(--pen)"/><text x="47.5" y="133.9" text-anchor="middle" font-size="9.5" font-weight="700">7 %</text><text x="47.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">2000</text><rect x="83.3" y="111.0" width="38.5" height="35.0" rx="3" fill="var(--red)"/><text x="102.5" y="107.4" text-anchor="middle" font-size="9.5" font-weight="700">29 %</text><text x="102.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">2010</text><rect x="138.3" y="73.6" width="38.5" height="72.4" rx="3" fill="var(--leaf)"/><text x="157.5" y="70.0" text-anchor="middle" font-size="9.5" font-weight="700">60 %</text><text x="157.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">2020</text><rect x="193.3" y="64.0" width="38.5" height="82.0" rx="3" fill="var(--sun)"/><text x="212.5" y="60.3" text-anchor="middle" font-size="9.5" font-weight="700">68 %</text><text x="212.5" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">2024</text></g></svg>`,
      video: {
        id: "JJ0nFD19eT8",
        titulo: "La globalización explicada",
        canal: "explainitychannel",
        vistas: 5058568,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.5 Multinacionales y deslocalización</h3><p>Las <mark>empresas multinacionales</mark> tienen su sede en un país y fábricas, oficinas y tiendas en muchos otros. Las mayores mueven más dinero que muchos Estados: algunas tecnológicas valen más que el PIB de España. Organizan su producción en <b>cadenas globales de valor</b>: cada fase se hace donde resulta más barata o eficiente, como en la camiseta de la lectura o en un teléfono móvil, con piezas de decenas de países.</p><p>Para reducir costes practican la <mark>deslocalización</mark>: trasladar la producción a países con salarios más bajos, menos impuestos o normas laborales y ambientales menos exigentes. Así, Asia, sobre todo China, se convirtió desde los años noventa en la «<b>fábrica del mundo</b>», y después lo han sido también Vietnam, Bangladesh o México. Esto abarata los productos y crea empleo en los países de destino, pero destruye puestos de trabajo industriales en los países de origen, como ocurrió en zonas de Europa y EE. UU., y puede fomentar malas condiciones laborales.</p><p>La pandemia de 2020 y las guerras mostraron la fragilidad de estas cadenas: faltaron mascarillas y chips. Por eso hoy algunos países intentan relocalizar industrias estratégicas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Recorrido de un móvil: diseño, piezas, montaje y venta en cuatro lugares">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <defs><marker id="glo-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
        <path d="M60 50 C 120 20, 160 20, 200 50" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#glo-a)"/>
        <path d="M200 80 V 112" stroke="var(--ink)" stroke-width="2" marker-end="url(#glo-a)"/>
        <path d="M180 140 C 140 168, 110 168, 76 140" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#glo-a)"/>
        <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle" font-size="11.5" font-weight="700">
          <rect x="10" y="46" width="92" height="36" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="56" y="62" fill="var(--pen)">diseño</text><text x="56" y="76" fill="var(--ink)" font-weight="400" font-size="10.5">EE. UU.</text><rect x="158" y="46" width="92" height="36" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="204" y="62" fill="var(--leaf)">piezas</text><text x="204" y="76" fill="var(--ink)" font-weight="400" font-size="10.5">Corea, Japón</text><rect x="158" y="110" width="92" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="204" y="126" fill="var(--red)">montaje</text><text x="204" y="140" fill="var(--ink)" font-weight="400" font-size="10.5">China</text><rect x="10" y="110" width="92" height="36" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="56" y="126" fill="var(--sun)">venta</text><text x="56" y="140" fill="var(--ink)" font-weight="400" font-size="10.5">España</text>
        </g>
      </svg>`,
      video: {
        id: "WEfNJYIhXnk",
        titulo: "¿Qué es la globalización y por qué dependemos tanto de ella?",
        canal: "La cuna de Halicarnaso",
        vistas: 342773,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.6 Finanzas globales y la crisis de 2008</h3><p>Junto al comercio de bienes, la globalización ha creado un enorme <mark>mercado financiero mundial</mark>. Cada día se mueven por las bolsas y los bancos billones de dólares que pasan de un país a otro en segundos, a través de ordenadores. Esto permite financiar empresas y proyectos, pero también hace que una crisis en un país se contagie rápidamente a todo el planeta. Además, existen <b>paraísos fiscales</b>, territorios con impuestos muy bajos y secreto bancario donde grandes empresas y fortunas esconden su dinero para no pagar impuestos en sus países.</p><p>En <b>2008</b> estalló en Estados Unidos una <mark>crisis financiera</mark>: los bancos habían concedido hipotecas a personas que no podían pagarlas y habían vendido esas deudas por todo el mundo. Cuando los precios de las viviendas bajaron, muchos bancos tuvieron enormes pérdidas; el banco Lehman Brothers quebró y el pánico se extendió. Fue la <b>Gran Recesión</b>, la peor crisis desde 1929. En Europa se convirtió en una crisis de deuda pública en países como Grecia, Irlanda, Portugal o España, con un fuerte aumento del paro, desahucios y recortes en servicios públicos. Los Estados tuvieron que rescatar a muchos bancos con dinero público.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cómo se contagió la crisis de 2008: hipotecas de riesgo en EE. UU. → bancos de todo el mundo compran esa deuda → caen los precios y quiebran bancos → paro y recortes en Europa"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Cómo se contagió la crisis de 2008</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="45.9" text-anchor="middle" font-size="10.5" >hipotecas de riesgo en EE. UU.</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="78.4" text-anchor="middle" font-size="10.5" >bancos de todo el mundo compran</text><text x="130" y="90.5" text-anchor="middle" font-size="10.5" >esa deuda</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="116.9" text-anchor="middle" font-size="10.5" >caen los precios y quiebran</text><text x="130" y="129.0" text-anchor="middle" font-size="10.5" >bancos</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="161.4" text-anchor="middle" font-size="10.5" >paro y recortes en Europa</text></g></svg>`,
    },
    {
      html: `<h3>1.7 Un mundo desigual</h3><p>La globalización ha sacado de la <mark>pobreza extrema</mark> a cientos de millones de personas, sobre todo en China y el resto de Asia: en 1990 vivía en ella más de un tercio de la humanidad; hoy, menos de una de cada diez personas. Pero las desigualdades siguen siendo enormes. Unos 700 millones de personas viven con menos de 2,15 dólares al día, la mayoría en el África subsahariana, y cientos de millones pasan hambre.</p><p>Suele hablarse de un <b>Norte</b> rico (América del Norte, Europa, Japón, Australia) y un <b>Sur</b> en desarrollo (gran parte de África, Asia y América Latina), aunque la realidad es más compleja: hay países emergentes que crecen deprisa, como China o la India, y grandes desigualdades <b>dentro de cada país</b>, incluso en los ricos. El 10 % más rico del mundo posee más de tres cuartas partes de la riqueza.</p><p>Las causas del subdesarrollo son variadas: herencia colonial, dependencia de exportar materias primas, deuda externa, guerras y corrupción, falta de educación y sanidad, y unas reglas del comercio que a menudo favorecen a los países ricos. Para reducir la desigualdad son importantes la <b>ayuda al desarrollo</b>, el comercio justo y, sobre todo, la buena gobernanza y la inversión en educación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esperanza de vida aproximada en años en distintos países">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5"><text x="84" y="34" text-anchor="end" font-weight="700" fill="var(--ink)">Japón</text><rect x="92" y="20" width="112" height="20" rx="5" fill="var(--pen)"/><text x="208" y="34" fill="var(--ink)">84</text><text x="84" y="62" text-anchor="end" font-weight="700" fill="var(--ink)">España</text><rect x="92" y="48" width="112" height="20" rx="5" fill="var(--leaf)"/><text x="208" y="62" fill="var(--ink)">84</text><text x="84" y="90" text-anchor="end" font-weight="700" fill="var(--ink)">Brasil</text><rect x="92" y="76" width="101.33333333333333" height="20" rx="5" fill="var(--sun)"/><text x="197.33333333333331" y="90" fill="var(--ink)">76</text><text x="84" y="118" text-anchor="end" font-weight="700" fill="var(--ink)">India</text><rect x="92" y="104" width="96" height="20" rx="5" fill="var(--inf)"/><text x="192" y="118" fill="var(--ink)">72</text><text x="84" y="146" text-anchor="end" font-weight="700" fill="var(--ink)">Nigeria</text><rect x="92" y="132" width="72" height="20" rx="5" fill="var(--red)"/><text x="168" y="146" fill="var(--ink)">54</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.8 Indicadores de desarrollo</h3><table class="tb"><thead><tr><th>Indicador</th><th>Qué mide</th><th>Ejemplo de contraste</th></tr></thead><tbody><tr><td>PIB por habitante</td><td>riqueza media por persona</td><td>más de 50.000 $ en los países más ricos; menos de 1.000 $ en los más pobres</td></tr><tr><td>Esperanza de vida</td><td>años que se espera vivir al nacer</td><td>más de 80 en España; alrededor de 55-60 en algunos países del Sahel</td></tr><tr><td>IDH</td><td>combina salud, educación e ingresos (de 0 a 1)</td><td>Noruega o Suiza ≈ 0,96; Sudán del Sur o Somalia por debajo de 0,4</td></tr></tbody></table><p>Para medir el desarrollo no basta con el dinero. El <mark>Índice de Desarrollo Humano</mark> (IDH) de la ONU combina tres dimensiones: una vida larga y saludable (esperanza de vida), el acceso a la educación (años de escolarización) y un nivel de vida digno (ingresos por habitante). Por eso es más completo que el PIB por habitante, que es solo una media y puede esconder grandes desigualdades internas.</p><p>Otros indicadores útiles son la <b>mortalidad infantil</b>, la tasa de <b>alfabetización</b>, el acceso a agua potable, electricidad e internet, o el índice de desigualdad de género. España tiene un IDH muy alto, en torno a 0,91, y una de las esperanzas de vida más altas del mundo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos países, dos vidas: España frente a Níger"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Dos países, dos vidas</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">España</text><text x="67" y="71.5" text-anchor="middle" font-size="9.5" >esperanza de vida:</text><text x="67" y="82.5" text-anchor="middle" font-size="9.5" >83 años</text><text x="67" y="116.3" text-anchor="middle" font-size="9.5" >IDH ≈ 0,91</text><text x="67" y="150.2" text-anchor="middle" font-size="9.5" >escolarización casi</text><text x="67" y="161.1" text-anchor="middle" font-size="9.5" >total</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Níger</text><text x="193" y="71.5" text-anchor="middle" font-size="9.5" >esperanza de vida:</text><text x="193" y="82.5" text-anchor="middle" font-size="9.5" >62 años</text><text x="193" y="116.3" text-anchor="middle" font-size="9.5" >IDH ≈ 0,39</text><text x="193" y="150.2" text-anchor="middle" font-size="9.5" >muchos niños sin</text><text x="193" y="161.1" text-anchor="middle" font-size="9.5" >escuela</text></g></svg>`,
    },
    {
      html: `<h3>1.9 Las migraciones</h3><p>Más de <b>280 millones</b> de personas viven fuera de su país de nacimiento, alrededor del 3,6 % de la humanidad. Las causas de las <mark>migraciones</mark> son económicas, como buscar trabajo y mejores salarios; políticas, como huir de guerras, dictaduras o persecuciones; ambientales, como sequías, inundaciones o la subida del mar; y familiares. Los principales destinos son Europa, América del Norte y los países del golfo Pérsico.</p><p>Los <b>refugiados</b> son personas que huyen de guerras o persecuciones y están protegidos por el derecho internacional (Convención de Ginebra de 1951): no se les puede devolver a un lugar donde corren peligro. Hoy hay más de cien millones de personas desplazadas por la fuerza en el mundo, de Siria, Ucrania, Afganistán, Sudán o Venezuela.</p><p>España pasó de ser un país de emigrantes a recibir millones de inmigrantes desde los años noventa, procedentes sobre todo de América Latina, Marruecos y Europa del Este. Las migraciones rejuvenecen la población, aportan trabajadores y cotizaciones, enriquecen la cultura y envían remesas a sus países. Pero exigen políticas de <b>integración</b>, combatir el racismo y la explotación, y luchar contra las mafias que trafican con personas; miles mueren cada año en el Mediterráneo intentando llegar a Europa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Por qué se emigra: Económicas, Políticas, Ambientales, Familiares"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Por qué se emigra</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Económicas</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >buscar trabajo y</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >salario</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Políticas</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >guerras y</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >persecución</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Ambientales</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >sequías y</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >desastres</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Familiares</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >reunirse con los</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >suyos</text></g></svg>`,
    },
    {
      html: `<h3>1.10 El cambio climático</h3><p>La quema de combustibles fósiles (carbón, petróleo y gas) y la deforestación emiten <b>gases de efecto invernadero</b>, sobre todo dióxido de carbono, que retienen el calor en la atmósfera. La temperatura media del planeta ya ha subido alrededor de 1,2 °C desde la época preindustrial. Es el <mark>cambio climático</mark>, y la comunidad científica coincide en que se debe principalmente a la actividad humana.</p><p>Sus consecuencias ya se notan: olas de calor, sequías e incendios más intensos, como en el sur de Europa; deshielo de los glaciares y los polos; subida del nivel del mar, que amenaza ciudades costeras e islas; lluvias torrenciales e inundaciones; pérdida de biodiversidad; y migraciones forzadas. Los países pobres, que menos han contaminado, suelen ser los más afectados.</p><p>En el <b>Acuerdo de París</b> (2015) casi todos los países se comprometieron a limitar el calentamiento muy por debajo de 2 °C, y preferiblemente a 1,5 °C. La Unión Europea quiere alcanzar la <b>neutralidad climática</b> en 2050. Para lograrlo hacen falta energías renovables (solar, eólica), eficiencia energética, transporte público y eléctrico, menos desperdicio y cambios en nuestro consumo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: Acuerdos sobre el clima"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="52" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1992</text><text x="52" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Cumbre de Río</text><circle cx="96" cy="98" r="6" fill="var(--red)"/><path d="M96 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="96" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1997</text><text x="96" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Protocolo de Kioto</text><circle cx="164" cy="98" r="6" fill="var(--leaf)"/><path d="M164 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="164" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">2015</text><text x="164" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Acuerdo de París</text><circle cx="232" cy="98" r="6" fill="var(--sun)"/><path d="M232 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="208" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">2050</text><text x="208" y="149.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">meta UE:</text><text x="208" y="160.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">neutralidad</text></g></svg>`,
    },
    {
      html: `<h3>1.11 Los grandes retos globales</h3><p>El mundo actual afronta problemas que ningún país puede resolver solo: son <mark>retos globales</mark>. Además del cambio climático, destacan:</p><ul><li>Las <b>pandemias</b>: la COVID-19 (2020) causó millones de muertes y paralizó la economía mundial; mostró la importancia de la ciencia, la cooperación y los sistemas sanitarios públicos.</li><li>El <b>terrorismo internacional</b>, sobre todo yihadista, que ha golpeado ciudades de todo el mundo, como Madrid (2004), París (2015) o Barcelona (2017).</li><li>Las <b>guerras</b> y la amenaza nuclear, que han vuelto con la invasión rusa de Ucrania (2022) y los conflictos de Oriente Próximo y África.</li><li>El <b>agotamiento de recursos</b>: agua dulce, suelos fértiles, minerales y pesca.</li><li>La <b>desinformación</b> y el debilitamiento de algunas democracias.</li><li>Los cambios de la <b>inteligencia artificial</b> en el trabajo y la comunicación.</li></ul><p>Frente a ellos, se habla de <b>gobernanza global</b>: la necesidad de reforzar la cooperación internacional, el derecho internacional y las instituciones comunes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Retos globales del siglo XXI">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="14" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="14" y="14" width="80" height="26" rx="8" fill="var(--red)"/><text x="54" y="31" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Clima</text><text x="102" y="31" font-size="11.5" fill="var(--ink)">calentamiento global</text><rect x="14" y="44" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="44" width="80" height="26" rx="8" fill="var(--leaf)"/><text x="54" y="61" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Salud</text><text x="102" y="61" font-size="10.5" fill="var(--ink)">pandemias como la COVID-19</text><rect x="14" y="74" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="14" y="74" width="80" height="26" rx="8" fill="var(--ink)"/><text x="54" y="91" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Paz</text><text x="102" y="91" font-size="11.5" fill="var(--ink)">guerras y terrorismo</text><rect x="14" y="104" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="14" y="104" width="80" height="26" rx="8" fill="var(--pen)"/><text x="54" y="121" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Personas</text><text x="102" y="121" font-size="10.5" fill="var(--ink)">migraciones y refugiados</text><rect x="14" y="134" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><rect x="14" y="134" width="80" height="26" rx="8" fill="var(--sun)"/><text x="54" y="151" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Red</text><text x="102" y="151" font-size="11.5" fill="var(--ink)">desinformación e IA</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.12 La Agenda 2030 y la ciudadanía global</h3><p>En 2015 los 193 países de la ONU aprobaron la <mark>Agenda 2030</mark>, con 17 <b>Objetivos de Desarrollo Sostenible</b> (ODS): acabar con la pobreza y el hambre, garantizar una educación y una salud de calidad, la igualdad de género, el agua limpia, la energía asequible y no contaminante, el trabajo decente, la reducción de las desigualdades, ciudades sostenibles, la producción y el consumo responsables, la acción por el clima, la vida submarina y terrestre, la paz y la justicia, y las alianzas para lograrlo.</p><p>El <mark>desarrollo sostenible</mark> es el que satisface las necesidades del presente sin comprometer las de las generaciones futuras: equilibra economía, sociedad y medio ambiente.</p><p>Cada persona también puede contribuir como <b>ciudadano global</b>: con un consumo responsable (reducir, reutilizar, reciclar; comprar productos de <b>comercio justo</b>, que garantiza salarios dignos a los productores), ahorrando energía y agua, usando el transporte público o la bicicleta, informándose con fuentes fiables, participando en asociaciones y ONG y votando. Los jóvenes han protagonizado movimientos como Fridays for Future, que reclaman acción contra el cambio climático.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Globalización: ventajas e inconvenientes">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--leaf)" font-family="Baloo 2, sans-serif">Ventajas</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">más comercio</text><text x="69" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">productos baratos</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">menos pobreza</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">extrema en Asia</text><text x="69" y="156" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">intercambio cultural</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--red)" font-family="Baloo 2, sans-serif">Riesgos</text>
    <text x="191" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">desigualdad</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">deslocalización</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">contaminación</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">crisis que se</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">contagian</text>
  </svg>`,
    },
  ],
  figura: {
    titulo: "Tres caras de la globalización",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Globalización económica, tecnológica y cultural con ejemplos">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle">
    <rect x="20" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/><rect x="20" y="16" width="204" height="36" rx="12" fill="var(--leaf)"/><text x="122" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Económica</text><text x="122" y="76" font-size="13" fill="var(--ink)">comercio mundial</text><text x="122" y="100" font-size="13" fill="var(--ink)">multinacionales</text><text x="122" y="124" font-size="13" fill="var(--ink)">deslocalización</text><text x="122" y="148" font-size="13" fill="var(--ink)">OMC y FMI</text><text x="122" y="172" font-size="13" fill="var(--ink)">crisis de 2008</text><rect x="238" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><rect x="238" y="16" width="204" height="36" rx="12" fill="var(--pen)"/><text x="340" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Tecnológica</text><text x="340" y="76" font-size="13" fill="var(--ink)">Internet (años 90)</text><text x="340" y="100" font-size="13" fill="var(--ink)">móviles y redes</text><text x="340" y="124" font-size="13" fill="var(--ink)">contenedores</text><text x="340" y="148" font-size="13" fill="var(--ink)">vuelos baratos</text><text x="340" y="172" font-size="13" fill="var(--ink)">inteligencia artificial</text><rect x="456" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="2.5"/><rect x="456" y="16" width="204" height="36" rx="12" fill="var(--sun)"/><text x="558" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Cultural</text><text x="558" y="76" font-size="13" fill="var(--ink)">series y música</text><text x="558" y="100" font-size="13" fill="var(--ink)">marcas globales</text><text x="558" y="124" font-size="13" fill="var(--ink)">inglés como lengua</text><text x="558" y="148" font-size="13" fill="var(--ink)">franca</text><text x="558" y="172" font-size="13" fill="var(--ink)">migraciones</text>
    </g>
  </svg>`,
  },
  video: {
    id: "fpkn6Eagl58",
    titulo: "La globalización: resumen. Globalización económica, política y cultural",
    canal: "Cuaderno de Historia",
    vistas: 1125668,
    megusta: 18511,
    busqueda: "globalización explicación",
  },
  ejemplos: [
    {
      enunciado: "Pon un ejemplo de cómo la globalización afecta a un objeto de tu vida diaria.",
      pasos: [
        "Un móvil se diseña en EE. UU. o Corea.",
        "Sus minerales se extraen en África o Sudamérica.",
        "Se ensambla en China u otro país asiático.",
        "Se vende en todo el mundo y se usa con aplicaciones de empresas globales.",
      ],
      resultado: "Un solo producto depende de muchos países: eso es la globalización económica.",
    },
    {
      enunciado: "¿Por qué el IDH es mejor que el PIB por habitante para comparar países?",
      pasos: [
        "El PIB por habitante solo mide la riqueza media.",
        "Un país rico puede tener mala sanidad o educación.",
        "El IDH incluye esperanza de vida, años de estudio e ingresos.",
      ],
      resultado: "Porque mide el desarrollo de las personas y no solo el dinero.",
    },
    {
      enunciado: `Clasifica las causas de estas migraciones: huir de una guerra, buscar empleo, una sequía que arruina las cosechas.`,
      pasos: [
        "Guerra: causa política; la persona puede ser refugiada.",
        "Empleo: causa económica.",
        "Sequía: causa ambiental (relacionada con el clima).",
      ],
      resultado: "Política, económica y ambiental.",
    },
    {
      enunciado: "Explica el recorrido de un teléfono móvil como ejemplo de cadena global de valor.",
      pasos: [
        "Diseño y marca: empresa de EE. UU., Corea del Sur o China.",
        "Minerales: litio de Chile o Australia, cobalto del Congo.",
        "Componentes: chips de Taiwán, pantallas de Corea, montaje en China, la India o Vietnam.",
        "Venta: en todo el mundo, por tiendas y por internet.",
      ],
      resultado: `Cada fase se hace en un país distinto según costes y especialización; el móvil es producto de decenas de países.`,
    },
    {
      enunciado: `Analiza el gráfico: usuarios de internet: 7 % (2000), 29 % (2010), 60 % (2020), 68 % (2024).`,
      pasos: [
        "Tendencia: crecimiento muy rápido, casi diez veces en 24 años.",
        "Causas: abaratamiento de móviles y conexión, redes móviles.",
        `Lo que no muestra: un tercio de la humanidad sigue sin internet, sobre todo en África y zonas rurales.`,
        "Conclusión: la revolución digital avanza, pero persiste la brecha digital.",
      ],
      resultado: `Internet se ha extendido a dos tercios de la población, pero la brecha digital todavía excluye a unos 2.600 millones de personas.`,
    },
    {
      enunciado: "Explica cómo una crisis en EE. UU. en 2008 provocó paro en España.",
      pasos: [
        "Origen: hipotecas de riesgo impagadas en EE. UU.",
        `Contagio: bancos de todo el mundo habían comprado esa deuda; perdieron dinero y dejaron de prestar.`,
        "En España: estalló la burbuja inmobiliaria, se hundió la construcción y aumentó la deuda.",
        "Consecuencias: el paro superó el 26 %, hubo desahucios y recortes.",
      ],
      resultado: `En un mundo financieramente globalizado, una crisis local se extiende rápidamente a otros países.`,
    },
  ],
  errores: [
    `Pensar que la globalización es solo económica: también es cultural, política y tecnológica.`,
    `Confundir inmigrante y refugiado: el refugiado huye de guerras o persecución y tiene protección especial.`,
    "Creer que el PIB lo dice todo sobre el desarrollo de un país.",
    "Decir que el cambio climático es solo un problema futuro: sus efectos ya se notan.",
    "Pensar que el mundo actual sigue siendo bipolar.",
    `Pensar que la globalización solo tiene perdedores o solo ganadores: ha reducido la pobreza en muchos países, pero también ha creado desigualdades y problemas ambientales.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué hechos marcan el fin de la Guerra Fría?",
      sol: "La caída del muro de Berlín (1989) y la disolución de la URSS (1991).",
    },
    {
      nivel: "básico",
      q: "¿Qué es una multinacional? Pon un ejemplo.",
      sol: `Una empresa con sede en un país y filiales en muchos otros; por ejemplo, una gran marca de ropa o de tecnología.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es la deslocalización?",
      sol: "Trasladar fábricas a países con salarios o impuestos más bajos.",
    },
    {
      nivel: "básico",
      q: "¿Qué mide el IDH?",
      sol: "La salud (esperanza de vida), la educación (años de estudio) y los ingresos por habitante.",
    },
    {
      nivel: "básico",
      q: "¿Qué se acordó en París en 2015?",
      sol: "Limitar el calentamiento global muy por debajo de 2 °C y reducir las emisiones.",
    },
    {
      nivel: "básico",
      q: "¿Qué es el comercio justo?",
      sol: `Un sistema que paga precios dignos a los productores de países pobres y respeta sus derechos.`,
    },
    {
      nivel: "básico",
      q: "Cita tres ODS de la Agenda 2030.",
      sol: "Por ejemplo: fin de la pobreza, educación de calidad y acción por el clima.",
    },
    {
      nivel: "básico",
      q: "¿Qué es la OMC?",
      sol: `La Organización Mundial del Comercio, creada en 1995, que regula el comercio internacional y resuelve las disputas comerciales entre países.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es una ONG? Pon dos ejemplos.",
      sol: `Una organización no gubernamental, sin ánimo de lucro e independiente de los gobiernos, que trabaja por causas sociales o ambientales. Ejemplos: Médicos Sin Fronteras, Cruz Roja, Amnistía Internacional, Greenpeace.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es un paraíso fiscal?",
      sol: `Un territorio con impuestos muy bajos o nulos y secreto bancario, donde empresas y personas ricas llevan su dinero para pagar menos impuestos.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es el desarrollo sostenible?",
      sol: `El que satisface las necesidades del presente sin comprometer las de las generaciones futuras, equilibrando economía, sociedad y medio ambiente.`,
    },
    {
      nivel: "básico",
      q: "¿Qué países tienen derecho de veto en el Consejo de Seguridad de la ONU?",
      sol: "Estados Unidos, Rusia, China, Reino Unido y Francia.",
    },
    {
      nivel: "medio",
      q: "¿Qué significa que el mundo actual es multipolar?",
      sol: `Que hay varios centros de poder: EE. UU., China, la UE, la India y otras potencias regionales.`,
    },
    {
      nivel: "medio",
      q: "Explica qué es la brecha digital.",
      sol: "La diferencia entre quienes tienen acceso a internet y a la tecnología y quienes no.",
    },
    {
      nivel: "medio",
      q: "Cita dos consecuencias positivas y una negativa de la inmigración en España.",
      sol: `Positivas: rejuvenece la población y aporta trabajadores y cotizaciones. Negativa o reto: necesidad de integración y riesgo de discriminación.`,
    },
    {
      nivel: "medio",
      q: "¿Qué es una cadena global de valor? Pon un ejemplo.",
      sol: `La organización de la producción de un bien en fases realizadas en distintos países según costes y especialización. Ejemplo: una camiseta con algodón de la India, tejido en China, cosida en Bangladesh y diseñada en España.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue la Gran Recesión?",
      sol: `La crisis económica mundial iniciada en 2008 en EE. UU. por las hipotecas de riesgo, que se extendió por el sistema financiero global, provocó quiebras de bancos, paro masivo y, en Europa, una crisis de deuda con recortes.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué el derecho de veto bloquea a menudo la ONU?",
      sol: `Porque basta con que uno de los cinco miembros permanentes vote en contra para impedir una resolución del Consejo de Seguridad; cuando una potencia o sus aliados están implicados en un conflicto, lo vetan.`,
    },
    {
      nivel: "medio",
      q: "Explica la diferencia entre un inmigrante económico y un refugiado.",
      sol: `El inmigrante económico se desplaza voluntariamente para buscar trabajo o mejores condiciones de vida. El refugiado huye de una guerra o persecución por motivos de raza, religión, nacionalidad, opinión política o grupo social, y tiene derecho a protección internacional: no puede ser devuelto a su país.`,
    },
    {
      nivel: "medio",
      q: "¿Qué consecuencias del cambio climático afectan ya a España?",
      sol: `Olas de calor más intensas y frecuentes, sequías prolongadas, incendios forestales, lluvias torrenciales (DANA), riesgo de desertificación, subida del nivel del mar en la costa y cambios en la agricultura y el turismo.`,
    },
    {
      nivel: "medio",
      q: `¿Por qué los países pobres son más vulnerables al cambio climático aunque contaminen menos?`,
      sol: `Porque muchos dependen de la agricultura, que sufre sequías e inundaciones; tienen menos dinero para adaptarse (diques, regadíos, sanidad); y algunos están en zonas especialmente expuestas, como el Sahel o islas y deltas bajos.`,
    },
    {
      nivel: "medio",
      q: "¿Qué es el comercio justo?",
      sol: `Un sistema comercial que garantiza a los productores de países en desarrollo un precio justo, condiciones laborales dignas, sin trabajo infantil y respeto al medio ambiente; los productos llevan un sello que lo certifica.`,
    },
    {
      nivel: "medio",
      q: "¿Qué enseñó la pandemia de COVID-19 sobre la globalización?",
      sol: `Que un virus se extiende muy rápido en un mundo conectado; que las cadenas globales de suministro son frágiles (faltaron mascarillas y chips); y que hace falta cooperación internacional en ciencia y vacunas, y sistemas sanitarios sólidos.`,
    },
    {
      nivel: "avanzado",
      q: "Valora la globalización: argumentos a favor y en contra, y tu conclusión.",
      sol: `A favor: más comercio y riqueza, reducción de la pobreza extrema en Asia, productos más baratos, acceso a información y cultura, cooperación científica. En contra: desigualdades, deslocalización y pérdida de empleo industrial, explotación laboral, daño ambiental, poder de las multinacionales, crisis contagiosas, homogeneización cultural. Conclusión personal razonada, por ejemplo: es irreversible, pero debe regularse para que sea más justa y sostenible.`,
    },
    {
      nivel: "avanzado",
      q: "Compara el mundo de 1985 y el actual: bloques, potencias y conflictos.",
      sol: `1985: mundo bipolar, EE. UU. contra la URSS, Guerra Fría, carrera de armamentos, Tercer Mundo no alineado. Hoy: mundo multipolar con EE. UU., China, la UE, India y potencias regionales; competencia económica y tecnológica; terrorismo yihadista; guerra en Ucrania y Oriente Próximo; retos globales como el clima y las pandemias.`,
    },
    {
      nivel: "avanzado",
      q: `Analiza los datos: IDH de Noruega 0,96, España 0,91, México 0,78, India 0,64, Níger 0,39. ¿Qué te dicen?`,
      sol: `Muestran grandes diferencias de desarrollo humano: Noruega y España tienen un desarrollo muy alto; México alto; India medio; Níger bajo. Detrás hay diferencias de esperanza de vida, educación e ingresos. Reflejan la división Norte-Sur y la posición intermedia de los países emergentes.`,
    },
    {
      nivel: "avanzado",
      q: `¿Puede una persona hacer algo frente a los retos globales? Propón cinco acciones concretas.`,
      sol: `Sí, aunque los cambios grandes exigen acuerdos políticos. Acciones: reducir el consumo de plástico y reciclar; usar transporte público, bici o caminar; comprar productos locales, de temporada o de comercio justo; ahorrar energía y agua; comprobar las noticias antes de compartirlas; participar en asociaciones o voluntariado; votar e informarse.`,
    },
    {
      nivel: "avanzado",
      q: "Explica por qué la deslocalización puede ser buena para un país y mala para otro.",
      sol: `Para el país de destino (por ejemplo, Vietnam) crea empleo, inversión y crecimiento, aunque con salarios bajos y a veces malas condiciones. Para el país de origen (por ejemplo, una ciudad industrial europea) supone cierre de fábricas, paro y declive de la zona, aunque los consumidores pagan menos. El efecto depende de quién gana y quién pierde.`,
    },
    {
      nivel: "avanzado",
      q: "Comenta la frase: «Piensa globalmente, actúa localmente».",
      sol: `Significa que los problemas actuales (clima, pobreza, migraciones) son mundiales y debemos comprender sus causas globales, pero podemos actuar en nuestro entorno: consumo, barrio, escuela, municipio. Resume la idea de ciudadanía global y responsabilidad individual y colectiva.`,
    },
    {
      nivel: "avanzado",
      q: "Relaciona el fin de la Guerra Fría con la aceleración de la globalización.",
      sol: `Al desaparecer la URSS (1991), el capitalismo y el libre comercio se extendieron a Europa del Este, Rusia y, con sus reformas, China; se creó la OMC (1995); internet se popularizó. Un mercado mundial casi único hizo posible el gran aumento del comercio y la inversión de los años noventa y dos mil.`,
    },
    {
      nivel: "avanzado",
      q: "Elige un ODS y diseña una campaña para tu instituto.",
      sol: `Debe identificar el ODS (por ejemplo, el 12, consumo responsable), explicar el problema con datos, proponer acciones concretas en el centro (puntos de reciclaje, mercadillo de intercambio, reducción de papel), un lema, los medios de difusión y una forma de medir resultados.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué se dice que el mundo actual es multipolar? Da ejemplos de cada polo.",
      sol: `Porque el poder está repartido entre varios centros y no entre uno o dos. EE. UU. (primera potencia militar y tecnológica), China (segunda economía, gran exportador), la Unión Europea (gran mercado y potencia normativa), India (país más poblado, economía en rápido crecimiento) y Rusia (potencia militar y energética), además de potencias regionales como Brasil o Turquía.`,
    },
  ],
  quiz: [
    {
      q: "¿Qué es la globalización?",
      o: [
        "La conexión creciente de economías, sociedades y culturas de todo el mundo",
        "Un deporte internacional",
        "Un tipo de gobierno",
        "Una organización internacional",
      ],
      a: 0,
      e: "Afecta a la economía, la tecnología, la política, la cultura y las migraciones.",
    },
    {
      q: "La deslocalización consiste en…",
      o: [
        "subir los aranceles",
        "trasladar la producción a países con costes más bajos",
        "cerrar todas las fábricas",
        "vender solo en el propio país",
      ],
      a: 1,
      e: "Las multinacionales buscan salarios más bajos o menos normas para abaratar costes.",
    },
    {
      q: "¿Qué mide el Índice de Desarrollo Humano?",
      o: ["Solo la riqueza", "Riqueza, salud y educación", "El número de habitantes", "Solo la esperanza de vida"],
      a: 1,
      e: "Combina renta por habitante, esperanza de vida y años de escolarización.",
    },
    {
      q: "¿Cuántos Objetivos de Desarrollo Sostenible aprobó la ONU en 2015?",
      o: ["8", "17", "50", "30"],
      a: 1,
      e: "Los 17 ODS forman la Agenda 2030.",
    },
    {
      q: "¿Qué hecho de 1991 aceleró la globalización?",
      o: [
        "La caída del muro de Berlín",
        "La invención del teléfono",
        "La disolución de la URSS y la extensión del capitalismo",
        "La creación de la ONU",
      ],
      a: 2,
      e: "Con el fin de la Guerra Fría casi todo el mundo se integró en la economía de mercado.",
    },
    {
      q: "La URSS desapareció en…",
      o: ["1975", "1989", "1991", "2001"],
      a: 2,
      e: "Se dividió en 15 repúblicas.",
    },
    {
      q: "El IDH va de…",
      o: ["0 a 1", "1 a 100", "0 a 10", "1 a 5"],
      a: 0,
      e: "Cuanto más cerca de 1, más desarrollo.",
    },
    {
      q: "Un refugiado es alguien que…",
      o: [
        "huye de una guerra o persecución",
        "viaja de vacaciones",
        "se jubila en otro país",
        "cambia de ciudad por trabajo",
      ],
      a: 0,
      e: "Tiene derecho a protección internacional.",
    },
    {
      q: "El Acuerdo de París trata sobre…",
      o: ["el cambio climático", "la carrera espacial", "el comercio", "la OTAN"],
      a: 0,
      e: "Se firmó en 2015.",
    },
    {
      q: "La segunda economía del mundo es…",
      o: ["Japón", "China", "Brasil", "Rusia"],
      a: 1,
      e: "Por detrás de EE. UU.",
    },
    {
      q: "Desde 2023 el país más poblado del mundo es…",
      o: ["China", "la India", "EE. UU.", "Indonesia"],
      a: 1,
      e: "Superó a China.",
    },
    {
      q: "Los atentados de las Torres Gemelas fueron en…",
      o: ["1991", "2001", "2004", "2011"],
      a: 1,
      e: "El 11 de septiembre de 2001.",
    },
    {
      q: "¿Qué organismo regula el comercio internacional?",
      o: ["la OMS", "la OMC", "la OTAN", "UNICEF"],
      a: 1,
      e: "Organización Mundial del Comercio.",
    },
    {
      q: "La agencia de la ONU para los refugiados es…",
      o: ["ACNUR", "FAO", "UNESCO", "OMS"],
      a: 0,
      e: "Protege a desplazados y refugiados.",
    },
    {
      q: "La brecha digital es…",
      o: [
        "un fallo de internet",
        "la desigualdad en el acceso a las tecnologías",
        "un virus informático",
        "una red social",
      ],
      a: 1,
      e: "Entre países y dentro de ellos.",
    },
    {
      q: "Llamamos «fábrica del mundo» a…",
      o: ["Alemania", "China", "EE. UU.", "Brasil"],
      a: 1,
      e: "Por su enorme producción industrial.",
    },
    {
      q: "La crisis financiera mundial comenzó en…",
      o: ["1929", "1973", "2008", "2020"],
      a: 2,
      e: "Con las hipotecas de riesgo en EE. UU.",
    },
    {
      q: "¿Cuántas personas viven fuera de su país de nacimiento?",
      o: ["unos 28 millones", "más de 280 millones", "unos 2.800 millones", "unos 2 millones"],
      a: 1,
      e: "Alrededor del 3,6 % de la humanidad.",
    },
    {
      q: "El Acuerdo de París busca limitar el calentamiento a…",
      o: ["5 °C", "muy por debajo de 2 °C", "10 °C", "0 °C"],
      a: 1,
      e: "Preferiblemente 1,5 °C.",
    },
    {
      q: "El comercio justo garantiza…",
      o: [
        "precios más bajos al consumidor",
        "un precio digno a los productores",
        "más publicidad",
        "productos de lujo",
      ],
      a: 1,
      e: "Y condiciones laborales dignas.",
    },
  ],
  examen: [
    {
      q: "Una empresa multinacional es…",
      o: [
        "una empresa con sede en un país y actividad en muchos otros",
        "una empresa pública",
        "una pequeña empresa familiar",
        "un organismo de la ONU",
      ],
      a: 0,
      e: "Apple, Inditex o Toyota son ejemplos de multinacionales.",
    },
    {
      q: "¿Qué reto global causan los gases de efecto invernadero?",
      o: ["Las pandemias", "El cambio climático", "La brecha digital", "La deslocalización"],
      a: 1,
      e: "Su acumulación en la atmósfera calienta el planeta.",
    },
    {
      q: "La división Norte-Sur se refiere a…",
      o: [
        "la diferencia de clima",
        "la diferencia de idioma",
        "la desigualdad entre países ricos y pobres",
        "los hemisferios terrestres exactos",
      ],
      a: 2,
      e: "No coincide exactamente con el ecuador: Australia está en el «Norte» rico.",
    },
    {
      q: "¿Qué banco quebró en 2008 y desencadenó el pánico?",
      o: ["Banco Santander", "Lehman Brothers", "Deutsche Bank", "Banco Mundial"],
      a: 1,
      e: "Su quiebra extendió la crisis.",
    },
    {
      q: "¿Cuántos Estados son miembros de la ONU?",
      o: ["51", "120", "193", "250"],
      a: 2,
      e: "Casi todos los países del mundo.",
    },
    {
      q: "La Convención que protege a los refugiados es la de…",
      o: ["Ginebra (1951)", "París (2015)", "Kioto (1997)", "Viena (1815)"],
      a: 0,
      e: "Prohíbe devolverlos a donde corren peligro.",
    },
    {
      q: "Los gases de efecto invernadero proceden sobre todo de…",
      o: ["los volcanes", "la quema de combustibles fósiles", "los océanos", "la energía solar"],
      a: 1,
      e: "Carbón, petróleo y gas.",
    },
    {
      q: "La UE quiere alcanzar la neutralidad climática en…",
      o: ["2030", "2040", "2050", "2100"],
      a: 2,
      e: "Emisiones netas cero.",
    },
  ],
  feynman: [
    "Las dimensiones de la globalización con un ejemplo de cada una",
    "Qué es una multinacional y por qué deslocaliza",
    "Cómo se mide la desigualdad entre países",
    "Tres retos globales y qué son los ODS",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: GLOBALIZACIÓN">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">GLOBALIZACIÓN</text>
      <rect x="5" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--pen)">Qué es</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">economía · tecnología · cultura</text><rect x="425" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--leaf)">Empresas</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">multinacionales · deslocalización</text><rect x="5" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--red)">Desigualdad</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Norte-Sur · IDH</text><rect x="425" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--sun)">Retos</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">clima · pandemias · ODS</text>
    </g></svg>`,
  tarjetas: [
    ["Globalización", "Interconexión económica, tecnológica, política y cultural a escala mundial."],
    ["Deslocalización", "Trasladar la producción a países con costes más bajos."],
    ["IDH", "Índice de Desarrollo Humano: renta, salud y educación."],
    ["Agenda 2030", "17 Objetivos de Desarrollo Sostenible aprobados por la ONU en 2015."],
    ["«Fábrica del mundo»", "China, por su enorme producción industrial para la exportación."],
    ["Mundo multipolar", "Orden con varios centros de poder."],
    ["IDH", "Índice que combina salud, educación e ingresos."],
    ["Acuerdo de París", "Compromiso de 2015 contra el cambio climático."],
    ["Cadena global de valor", "Producción de un bien repartida en fases por varios países."],
    ["Gran Recesión", "Crisis mundial iniciada en 2008 por las hipotecas de riesgo."],
    ["Refugiado", "Persona que huye de guerra o persecución, con protección internacional."],
    ["Desarrollo sostenible", "Satisfacer el presente sin comprometer el futuro."],
  ],
  glosario: [
    ["Globalización", "Creciente conexión e interdependencia mundial."],
    ["Mundo multipolar", "Poder repartido entre varias grandes potencias."],
    ["Multinacional", "Empresa con actividad en muchos países."],
    ["Deslocalización", "Traslado de la producción a países con costes más bajos."],
    ["Cadena global de valor", "Producción de un bien repartida entre varios países."],
    ["OMC", "Organización Mundial del Comercio."],
    ["ONG", "Organización no gubernamental sin ánimo de lucro."],
    ["Veto", "Derecho a bloquear una decisión con un solo voto."],
    ["Paraíso fiscal", "Territorio con impuestos muy bajos y secreto bancario."],
    ["Brecha digital", "Desigualdad en el acceso y uso de las tecnologías."],
    ["IDH", "Índice de Desarrollo Humano: salud, educación e ingresos."],
    ["Pobreza extrema", "Vivir con menos de 2,15 dólares al día."],
    ["Refugiado", "Persona que huye de guerra o persecución."],
    ["Efecto invernadero", "Retención de calor en la atmósfera por ciertos gases."],
    ["Neutralidad climática", "Emitir solo los gases que se pueden absorber."],
    ["ODS", "Los 17 Objetivos de Desarrollo Sostenible de la Agenda 2030."],
    ["Comercio justo", "Comercio que garantiza precios y condiciones dignas al productor."],
    ["Altermundismo", "Movimiento crítico con la globalización actual."],
  ],
  situacion: {
    titulo: "La huella de mi mochila",
    reto: `La asociación de familias de tu instituto quiere sensibilizar sobre el consumo responsable y os pide investigar de dónde vienen los objetos que usáis cada día y qué impacto tienen.`,
    pasos: [
      "Cada miembro del grupo elige un objeto de su mochila o de su ropa y mira su etiqueta.",
      `Investigad su recorrido: materias primas, fabricación, transporte y venta; situad cada fase en un mapa.`,
      `Analizad su impacto: kilómetros recorridos, condiciones laborales, consumo de agua o energía.`,
      `Relacionad lo que habéis descubierto con conceptos del tema: globalización, deslocalización, multinacionales, desigualdad.`,
      "Proponed alternativas de consumo responsable vinculadas a un ODS.",
    ],
    producto: "Un mapa mural con los recorridos de los objetos y una guía breve de consumo responsable.",
    evaluacion: [
      "Rigor en la búsqueda y el uso de la información.",
      "Uso correcto de los conceptos del tema.",
      "Calidad cartográfica del mapa.",
      "Viabilidad y creatividad de las propuestas.",
    ],
  },
  familias: [
    "Mirad las etiquetas de cinco prendas o aparatos de casa y apuntad dónde se fabricaron.",
    "Elegid juntos un ODS y pensad una acción concreta para la familia.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Retos del mundo actual: globalización, desigualdad, desarrollo sostenible y emergencia climática (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      "Rastrear la cadena de producción de un producto cotidiano.",
      "Comparar el IDH de cinco países con datos del PNUD.",
      "Debate: ¿la globalización reduce o aumenta la desigualdad?",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    {
      t: "Objetivos de Desarrollo Sostenible, Naciones Unidas",
      url: "https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/",
    },
  ],
  revisado: "2026-11-13",
};
