// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Revolución rusa y el período de entreguerras",
  minutos: 110,
  objetivos: [
    "Explicar las revoluciones rusas de 1917 y la creación de la URSS",
    "Analizar las causas y efectos del crac del 29",
    "Comparar fascismo, nazismo y estalinismo como totalitarismos",
    "Explicar las causas y consecuencias de la Gran Depresión",
    "Comparar los regímenes totalitarios",
  ],
  claves: ["bolcheviques", "URSS", "crac del 29", "Gran Depresión", "fascismo", "nazismo"],
  pregunta: {
    texto: `En octubre de 1929 la Bolsa de Nueva York se hundió en pocos días. Cuatro años después, Hitler era canciller de Alemania. ¿Qué relación hay entre una crisis económica y la llegada de una dictadura?`,
    respuesta: `La <mark>Gran Depresión</mark> dejó a millones de personas sin trabajo y sin esperanza. Muchas dejaron de confiar en la democracia y apoyaron a líderes autoritarios que prometían orden y empleo. Así crecieron los <b>totalitarismos</b>: fascismo en Italia, nazismo en Alemania y, por otro camino, el estalinismo en la URSS.`,
  },
  lectura: {
    titulo: "Una carretilla de billetes",
    html: `<p>Berlín, noviembre de 1923. Una mujer empuja una carretilla llena de fajos de billetes hacia la panadería. Con todo ese dinero apenas puede comprar una barra de pan: cuesta 200 000 millones de marcos. Los salarios se pagan dos veces al día, porque por la tarde el dinero de la mañana ya no vale nada. Hay niños que juegan a construir torres con billetes, y familias que los queman en la estufa porque calientan más que la leña que podrían comprar con ellos.</p><p>Seis años después, en Nueva York, miles de personas que habían comprado acciones con dinero prestado lo pierden todo en unos días. En pocos meses, millones de trabajadores de todo el mundo se quedan en paro. En las colas del pan de Chicago, Berlín o Londres, mucha gente empieza a preguntarse si la democracia sirve para algo.</p><p>Entre las dos guerras mundiales, el mundo vivió una revolución comunista en Rusia, unos años de euforia, la peor crisis económica del capitalismo y el ascenso de dictaduras que prometían orden a cambio de libertad. En este tema entenderás cómo se encadenaron esos hechos y por qué condujeron a una nueva guerra.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 La Rusia de los zares</h3><p>A comienzos del siglo XX <b>Rusia</b> era un imperio inmenso, de Polonia al océano Pacífico, gobernado por el zar <b>Nicolás II</b> como monarca absoluto: era la <mark>autocracia</mark>. No había constitución ni parlamento, y la policía política perseguía a la oposición. Unos ocho de cada diez habitantes eran campesinos pobres que habían dejado de ser siervos hacía poco (1861) y seguían sin tierra suficiente. La industria, financiada con capital extranjero, se concentraba en San Petersburgo y Moscú, donde los obreros vivían en condiciones muy duras.</p><p>La oposición era variada: liberales que querían una monarquía constitucional, socialistas revolucionarios con apoyo campesino y marxistas del Partido Obrero Socialdemócrata, dividido en <b>mencheviques</b>, más moderados, y <b>bolcheviques</b>, dirigidos por <b>Lenin</b>, que defendían una revolución inmediata dirigida por un partido de revolucionarios profesionales.</p><p>La derrota frente a Japón provocó la <b>revolución de 1905</b>. En el «Domingo Sangriento» la guardia disparó contra una manifestación pacífica que pedía pan al zar. Surgieron los <b>sóviets</b>, consejos de obreros y soldados. El zar creó un parlamento, la <b>Duma</b>, pero sin poder real.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La Rusia de los zares: Zar, Nobleza y clero, Burguesía y obreros, Campesinos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">La Rusia de los zares</text><path d="M110 28.0 H 150 L 175 63.5 H 85 Z" fill="var(--pen)" opacity=".22" stroke="var(--pen)" stroke-width="2"/><text x="130" y="43.6" text-anchor="middle" font-size="9.5" font-weight="700">Zar:</text><text x="130" y="54.5" text-anchor="middle" font-size="9.5" font-weight="700">autocracia</text><path d="M85 63.5 H 175 L 200 99.0 H 60 Z" fill="var(--red)" opacity=".22" stroke="var(--red)" stroke-width="2"/><text x="130" y="84.6" text-anchor="middle" font-size="9.5" font-weight="700">Nobleza y clero</text><path d="M60 99.0 H 200 L 225 134.5 H 35 Z" fill="var(--leaf)" opacity=".22" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="120.1" text-anchor="middle" font-size="9.5" font-weight="700">Burguesía y obreros: pocos</text><path d="M35 134.5 H 225 L 250 170.0 H 10 Z" fill="var(--sun)" opacity=".22" stroke="var(--sun)" stroke-width="2"/><text x="130" y="155.6" text-anchor="middle" font-size="9.5" font-weight="700">Campesinos: ≈ 80 %</text></g></svg>`,
    },
    {
      html: `<h3>1.2 Las revoluciones de febrero y octubre de 1917</h3><p>La <b>Primera Guerra Mundial</b> fue el golpe final para el zarismo: derrotas, millones de muertos, hambre y precios disparados. En <b>febrero de 1917</b> (marzo en nuestro calendario) huelgas y manifestaciones en Petrogrado, a las que se unieron los soldados, obligaron a abdicar a Nicolás II. Se formó un <b>Gobierno provisional</b> liberal y moderado, que dirigió después Kérenski, pero el poder se compartía con los sóviets: era el «doble poder».</p><p>El Gobierno provisional cometió un error decisivo: siguió en la guerra y aplazó el reparto de tierras. Lenin, que volvió del exilio, lanzó las <b>Tesis de abril</b> con el lema <mark>«paz, pan y tierra»</mark> y «todo el poder a los sóviets». Los bolcheviques ganaron apoyo entre obreros y soldados.</p><p>El 25 de octubre de 1917 (7 de noviembre), la Guardia Roja dirigida por <b>Trotski</b> tomó el Palacio de Invierno: fue la <mark>Revolución de Octubre</mark>. Se formó un gobierno bolchevique, el Consejo de Comisarios del Pueblo, presidido por Lenin. Sus primeros decretos sacaron a Rusia de la guerra, entregaron la tierra a los campesinos y pusieron las fábricas bajo control obrero. Cuando la Asamblea Constituyente elegida no les dio mayoría, la disolvieron.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rusia de 1917 a 1924">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--red)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">feb. 1917</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">cae el zar</text><circle cx="98" cy="90" r="7" fill="var(--red)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">oct. 1917</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Lenin y los</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">bolcheviques</text><circle cx="162" cy="90" r="7" fill="var(--red)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1918-21</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">guerra civil</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">rojos/blancos</text><circle cx="226" cy="90" r="7" fill="var(--red)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1922</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">nace la</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">URSS</text>
  </svg>`,
      video: {
        id: "r3uV0mPnnVs",
        titulo: "La Revolución rusa en 12 minutos",
        canal: "Memorias de Pez",
        vistas: 941613,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.3 La guerra civil y el nacimiento de la URSS</h3><p>Lenin firmó con Alemania la paz de <b>Brest-Litovsk</b> (1918), muy dura: Rusia perdió Polonia, los países bálticos, Finlandia y Ucrania. Contra los bolcheviques se levantaron los <b>blancos</b>, una mezcla de zaristas, liberales, mencheviques y nacionalistas, apoyados por tropas de potencias extranjeras. Los <b>rojos</b> organizaron el Ejército Rojo bajo el mando de Trotski. La guerra civil (1918-1921) fue brutal por ambos bandos; la policía política bolchevique, la Checa, practicó el «terror rojo». La familia del zar fue ejecutada en 1918.</p><p>Para abastecer al ejército, los bolcheviques aplicaron el <b>comunismo de guerra</b>: requisaron las cosechas, nacionalizaron toda la industria y prohibieron el comercio privado. Vencieron, pero el país quedó arruinado y sufrió una terrible hambruna. Lenin cambió de rumbo con la <b>NEP</b> (Nueva Política Económica, 1921), que permitía a los campesinos vender parte de su producción y algo de comercio privado; la economía se recuperó.</p><p>En 1922 nació la <mark>URSS</mark>, la Unión de Repúblicas Socialistas Soviéticas, un Estado federal en teoría, pero dirigido de forma centralizada por un partido único, el Partido Comunista.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La guerra civil rusa (1918-1921): Rojos frente a Blancos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">La guerra civil rusa (1918-1921)</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Rojos</text><text x="67" y="72.1" text-anchor="middle" font-size="9.5" >bolcheviques</text><text x="67" y="96.1" text-anchor="middle" font-size="9.5" >Ejército Rojo de</text><text x="67" y="107.0" text-anchor="middle" font-size="9.5" >Trotski</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >control del centro</text><text x="67" y="160.6" text-anchor="middle" font-size="9.5" >vencedores</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Blancos</text><text x="193" y="66.6" text-anchor="middle" font-size="9.5" >zaristas,</text><text x="193" y="77.5" text-anchor="middle" font-size="9.5" >liberales…</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >apoyo extranjero</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >divididos</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >derrotados</text></g></svg>`,
    },
    {
      html: `<h3>1.4 La URSS de Stalin</h3><p>Al morir Lenin (1924), <b>Stalin</b>, secretario general del partido, derrotó a sus rivales, especialmente a Trotski, que fue expulsado y asesinado en México en 1940. Desde finales de los años 20 impuso una <mark>dictadura personal</mark>.</p><p>Acabó con la NEP y estableció una <b>economía planificada</b>: el Estado decidía qué, cuánto y cómo se producía mediante los <b>planes quinquenales</b>, que dieron prioridad a la industria pesada (acero, carbón, electricidad, maquinaria). La URSS se industrializó a gran velocidad, pero a costa de un enorme sacrificio de la población. En el campo impuso la <b>colectivización</b> forzosa: las tierras se agruparon en granjas colectivas (koljoses) y estatales (sovjoses). Los campesinos que se resistieron, llamados <i>kulaks</i>, fueron deportados o asesinados, y la producción se hundió. La hambruna de 1932-1933, especialmente terrible en Ucrania (el <i>Holodomor</i>), causó millones de muertos.</p><p>Stalin gobernó con partido único, culto a su persona, propaganda y una <b>represión masiva</b>: en las <b>purgas</b> o «Gran Terror» (1936-1938) fueron ejecutadas cientos de miles de personas, incluidos antiguos dirigentes bolcheviques y mandos del ejército, y millones fueron enviadas a los campos de trabajo forzado del <b>gulag</b>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Economía soviética frente a la capitalista">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--red)" font-family="Baloo 2, sans-serif">URSS</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Estado planifica</text><text x="69" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">sin propiedad</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">privada</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">planes de 5 años</text><text x="69" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">partido único</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--pen)" font-family="Baloo 2, sans-serif">Capitalismo</text>
    <text x="191" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">mercado y precios</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">propiedad privada</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">empresas</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">competencia</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">varios partidos</text>
  </svg>`,
    },
    {
      html: `<h3>1.5 Los felices años veinte</h3><p>Tras la guerra, <b>Estados Unidos</b> se había convertido en la primera potencia económica y acreedor de Europa. Durante los años veinte vivió una etapa de gran prosperidad, los <mark>«felices años veinte»</mark>. La producción en cadena abarató los automóviles (el Ford T), las radios, las neveras y los electrodomésticos; se generalizaron la <b>publicidad</b> y las <b>compras a plazos</b>. Nació la sociedad de consumo de masas.</p><p>También cambió la cultura: se popularizaron el cine de Hollywood, el jazz, el charlestón y los deportes de masas. Muchas mujeres ganaron independencia; las <i>flappers</i> se cortaron el pelo, acortaron las faldas, trabajaban fuera de casa y en EE. UU. votaban desde 1920. Pero no todo era brillante: la <b>Ley Seca</b> (1920-1933), que prohibió el alcohol, enriqueció a mafias como la de Al Capone; los afroamericanos sufrían segregación y el Ku Klux Klan; y los agricultores no participaron de la prosperidad.</p><p>Europa se recuperó más despacio. Alemania sufrió la <b>hiperinflación</b> de 1923, pero gracias a los préstamos estadounidenses (plan Dawes) vivió unos años de estabilidad a partir de 1924. La Sociedad de Naciones parecía capaz de mantener la paz.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Efecto dominó del crac del 29">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <defs><marker id="fl-29" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--ink)"/></marker></defs>
    <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle" font-size="11" font-weight="700">
    <path d="M84 52 H 92" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-29)"/><path d="M166 52 H 174" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-29)"/><path d="M212 72 C 212 98, 48 82, 48 106" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-29)"/><path d="M84 128 H 92" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-29)"/><path d="M166 128 H 174" stroke="var(--ink)" stroke-width="2" marker-end="url(#fl-29)"/>
    <rect x="12" y="34" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="12" cy="34" r="10" fill="var(--red)"/><text x="12" y="37.5" fill="#fff" font-size="10">1</text><text x="48" y="50" fill="var(--ink)">Bolsa se</text><text x="48" y="62" fill="var(--ink)">hunde</text><rect x="94" y="34" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="94" cy="34" r="10" fill="var(--red)"/><text x="94" y="37.5" fill="#fff" font-size="10">2</text><text x="130" y="50" fill="var(--ink)">bancos</text><text x="130" y="62" fill="var(--ink)">quiebran</text><rect x="176" y="34" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="176" cy="34" r="10" fill="var(--red)"/><text x="176" y="37.5" fill="#fff" font-size="10">3</text><text x="212" y="50" fill="var(--ink)">sin</text><text x="212" y="62" fill="var(--ink)">crédito</text><rect x="12" y="110" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="12" cy="110" r="10" fill="var(--red)"/><text x="12" y="113.5" fill="#fff" font-size="10">4</text><text x="48" y="126" fill="var(--ink)">empresas</text><text x="48" y="138" fill="var(--ink)">cierran</text><rect x="94" y="110" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="94" cy="110" r="10" fill="var(--red)"/><text x="94" y="113.5" fill="#fff" font-size="10">5</text><text x="130" y="126" fill="var(--ink)">paro</text><text x="130" y="138" fill="var(--ink)">25 %</text><rect x="176" y="110" width="72" height="36" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><circle cx="176" cy="110" r="10" fill="var(--red)"/><text x="176" y="113.5" fill="#fff" font-size="10">6</text><text x="212" y="126" fill="var(--ink)">menos</text><text x="212" y="138" fill="var(--ink)">consumo</text>
  </g>
  </svg>`,
    },
    {
      html: `<h3>1.6 El crac del 29 y la Gran Depresión</h3><p>La prosperidad tenía pies de barro. Se producía más de lo que la población podía comprar (<b>sobreproducción</b>) y muchas personas compraban acciones con dinero prestado, esperando que su precio subiera siempre: era una <mark>burbuja especulativa</mark>. Las acciones valían mucho más que las empresas reales.</p><p>El jueves <b>24 de octubre de 1929</b>, el «jueves negro», millones de acciones salieron a la venta y nadie quería comprarlas: los precios se desplomaron. Fue el <mark>crac de la Bolsa de Nueva York</mark>. Los inversores arruinados no podían devolver sus préstamos; miles de bancos quebraron y la gente perdió sus ahorros. Sin crédito, las empresas cerraron y despidieron trabajadores, lo que redujo aún más el consumo: un círculo vicioso. En 1933 una de cada cuatro personas activas en EE. UU. estaba en paro, y la producción industrial había caído casi a la mitad.</p><p>La crisis se hizo <b>mundial</b> porque los bancos estadounidenses retiraron sus préstamos a Europa, el comercio internacional se hundió y los países subieron los aranceles para proteger su producción. Alemania, muy dependiente de esos préstamos, llegó a tener seis millones de parados. Fue la <b>Gran Depresión</b>, la peor crisis del capitalismo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Paro en Estados Unidos (% de activos). 1929 3 %, 1931 16 %, 1933 25 %, 1935 20 %, 1937 14 %"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Paro en Estados Unidos (% de</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">activos)</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="26.6" y="136.2" width="30.8" height="9.8" rx="3" fill="var(--pen)"/><text x="42" y="132.5" text-anchor="middle" font-size="9.5" font-weight="700">3 %</text><text x="42" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1929</text><rect x="70.6" y="93.5" width="30.8" height="52.5" rx="3" fill="var(--red)"/><text x="86" y="89.8" text-anchor="middle" font-size="9.5" font-weight="700">16 %</text><text x="86" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1931</text><rect x="114.6" y="64.0" width="30.8" height="82.0" rx="3" fill="var(--leaf)"/><text x="130" y="60.3" text-anchor="middle" font-size="9.5" font-weight="700">25 %</text><text x="130" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1933</text><rect x="158.6" y="80.4" width="30.8" height="65.6" rx="3" fill="var(--sun)"/><text x="174" y="76.7" text-anchor="middle" font-size="9.5" font-weight="700">20 %</text><text x="174" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1935</text><rect x="202.6" y="100.1" width="30.8" height="45.9" rx="3" fill="var(--inf)"/><text x="218" y="96.4" text-anchor="middle" font-size="9.5" font-weight="700">14 %</text><text x="218" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1937</text></g></svg>`,
      video: {
        id: "sxqzgjizzdo",
        titulo: "El crack del 29 y la Gran Depresión",
        canal: "Academia Play",
        vistas: 7263323,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.7 Las respuestas a la crisis: el New Deal</h3><p>Al principio los gobiernos aplicaron recetas liberales: reducir el gasto público y esperar a que el mercado se corrigiera solo. La situación empeoró. En 1932 los estadounidenses eligieron presidente a <b>Franklin D. Roosevelt</b>, que prometió un «nuevo trato» para el pueblo: el <mark>New Deal</mark> (1933).</p><p>El Estado intervino en la economía como nunca: grandes <b>obras públicas</b> (presas, carreteras, escuelas, parques) para dar empleo; ayudas a los parados y a los agricultores; control de los bancos y de la Bolsa; reconocimiento de los <b>sindicatos</b>, salario mínimo y, en 1935, la Seguridad Social, con pensiones de jubilación y subsidio de paro. La recuperación fue lenta, pero devolvió la confianza.</p><p>Estas medidas coincidían con las ideas del economista británico <b>John Maynard Keynes</b>: en una crisis, el Estado debe gastar e invertir para estimular la demanda, aunque tenga déficit. Tras la Segunda Guerra Mundial, el keynesianismo inspiraría el <b>Estado del bienestar</b> europeo.</p><p>Otros países eligieron caminos muy distintos. En Alemania, Italia o Japón, la crisis reforzó a quienes prometían salir de ella con un Estado autoritario, el rearme y la expansión militar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Medidas del New Deal: Obras públicas, Ayudas, Bancos, Derechos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Medidas del New Deal</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Obras públicas</text><text x="68" y="64.0" text-anchor="middle" font-size="10" >presas,</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >carreteras,</text><text x="68" y="87.0" text-anchor="middle" font-size="10" >escuelas</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Ayudas</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >a parados y</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >agricultores</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Bancos</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >control y garantía</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >de depósitos</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Derechos</text><text x="192" y="139.0" text-anchor="middle" font-size="10" >sindicatos,</text><text x="192" y="150.5" text-anchor="middle" font-size="10" >salario mínimo,</text><text x="192" y="162.0" text-anchor="middle" font-size="10" >pensiones</text></g></svg>`,
    },
    {
      html: `<h3>1.8 El fascismo italiano</h3><p>En los años de entreguerras surgieron regímenes <mark>totalitarios</mark>, que querían controlar toda la vida de la sociedad, no solo el gobierno. El primero fue el <b>fascismo</b> italiano.</p><p>Italia había ganado la guerra, pero se sentía estafada porque no recibió todos los territorios prometidos: hablaba de una «victoria mutilada». Además sufría crisis económica, paro y grandes huelgas obreras y ocupaciones de tierras en 1919-1920, que asustaron a empresarios y propietarios. <b>Benito Mussolini</b>, antiguo socialista, fundó en 1919 los <b>Fasci di Combattimento</b>, con escuadras de «camisas negras» que atacaban a socialistas y sindicalistas con porras y aceite de ricino.</p><p>En octubre de 1922 organizó la <b>Marcha sobre Roma</b>: miles de fascistas avanzaron hacia la capital y el rey Víctor Manuel III, en vez de frenarlos, nombró a Mussolini jefe del Gobierno. Tras el asesinato del diputado socialista Matteotti (1924), Mussolini, el <b>Duce</b>, impuso la dictadura: prohibió los partidos y sindicatos, controló la prensa y creó un Estado corporativo. Exaltaba la nación, la violencia y la guerra, y soñaba con un nuevo Imperio romano: en 1935 invadió Etiopía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Rasgos comunes de los totalitarismos">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle">
    <path d="M56 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="56" y="34" fill="var(--ink)" font-size="10.5">partido único</text><path d="M204 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="204" y="34" fill="var(--ink)" font-size="10.5">culto al líder</text><path d="M54 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="6" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="54" y="100" fill="var(--ink)">propaganda</text><path d="M206 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="158" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="206" y="100" fill="var(--ink)">represión</text><path d="M56 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="56" y="164" fill="var(--ink)">nacionalismo</text><path d="M204 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><text x="204" y="164" fill="var(--ink)" font-size="10.5">control social</text>
    <circle cx="130" cy="96" r="34" fill="var(--soc, #c2410c)"/>
    <text x="130" y="93" fill="#fff" font-size="9.5">TOTALITA-</text><text x="130" y="107" fill="#fff" font-size="9.5">RISMO</text>
  </g>
  </svg>`,
    },
    {
      html: `<h3>1.9 El ascenso de Hitler</h3><p>Tras la derrota de 1918 nació en Alemania la <b>República de Weimar</b>, una democracia con una constitución avanzada pero muy frágil. Arrastraba la humillación del Tratado de Versalles, intentos de golpe de Estado de la extrema izquierda y la extrema derecha y la <b>hiperinflación</b> de 1923. Muchos alemanes creían la leyenda de la «puñalada por la espalda»: el ejército no habría sido derrotado, sino traicionado por socialistas y judíos.</p><p><b>Adolf Hitler</b>, un excombatiente austriaco, dirigía el Partido Nacionalsocialista (nazi). Tras un fallido golpe en Múnich (1923), escribió en la cárcel <i>Mi lucha</i>, donde expuso sus ideas: nacionalismo extremo, racismo, antisemitismo, anticomunismo y conquista de «espacio vital» en el este.</p><p>La <b>Gran Depresión</b> cambió todo. Con seis millones de parados, Hitler prometió trabajo, orden y venganza contra Versalles, y culpó de todo a judíos y comunistas. Usó una propaganda moderna y la violencia de sus milicias, las SA. En 1932 el Partido Nazi fue el más votado, y en enero de <b>1933</b> el presidente Hindenburg nombró a Hitler <b>canciller</b>, presionado por conservadores que creían poder controlarlo. No llegó por un golpe, sino por vías legales.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Votos del Partido Nazi (%). 1928 2.6 %, 1930 18.3 %, 1932 jul 37.3 %, 1932 nov 33.1 %, 1933 43.9 %"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Votos del Partido Nazi (%)</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="26.6" y="140.3" width="30.8" height="5.7" rx="3" fill="var(--pen)"/><text x="42" y="136.6" text-anchor="middle" font-size="9.5" font-weight="700">2,6 %</text><text x="42" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1928</text><rect x="70.6" y="106.0" width="30.8" height="40.0" rx="3" fill="var(--red)"/><text x="86" y="102.3" text-anchor="middle" font-size="9.5" font-weight="700">18,3 %</text><text x="86" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1930</text><rect x="114.6" y="64.4" width="30.8" height="81.6" rx="3" fill="var(--leaf)"/><text x="130" y="60.8" text-anchor="middle" font-size="9.5" font-weight="700">37,3 %</text><text x="130" y="157.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">1932</text><text x="130" y="168.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">jul</text><rect x="158.6" y="73.6" width="30.8" height="72.4" rx="3" fill="var(--sun)"/><text x="174" y="69.9" text-anchor="middle" font-size="9.5" font-weight="700">33,1 %</text><text x="174" y="157.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">1932</text><text x="174" y="168.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">nov</text><rect x="202.6" y="50.0" width="30.8" height="96.0" rx="3" fill="var(--inf)"/><text x="218" y="46.3" text-anchor="middle" font-size="9.5" font-weight="700">43,9 %</text><text x="218" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1933</text></g></svg>`,
    },
    {
      html: `<h3>1.10 La Alemania nazi: un Estado totalitario</h3><p>En pocos meses, Hitler destruyó la democracia. Tras el incendio del Reichstag (febrero de 1933), del que culpó a los comunistas, suspendió los derechos civiles; una <b>ley de plenos poderes</b> le permitió gobernar por decreto. Prohibió los partidos y sindicatos y abrió los primeros <b>campos de concentración</b>, como Dachau, para opositores. Al morir Hindenburg (1934) se proclamó <b>Führer</b>, líder absoluto: era el <mark>Tercer Reich</mark>.</p><p>El régimen controló todos los aspectos de la vida. La <b>Gestapo</b> (policía secreta) y las <b>SS</b> vigilaban y reprimían; el ministro <b>Goebbels</b> dirigía la propaganda en prensa, radio, cine y grandes concentraciones; se quemaron libros; la escuela y las Juventudes Hitlerianas adoctrinaban a los jóvenes. A las mujeres se les asignó el papel de madres y amas de casa.</p><p>El paro bajó gracias a las obras públicas (autopistas) y, sobre todo, al <b>rearme</b>. El antisemitismo se convirtió en ley: las <b>Leyes de Núremberg</b> (1935) quitaron la ciudadanía a los judíos y prohibieron los matrimonios mixtos; en la <b>Noche de los Cristales Rotos</b> (1938) se destruyeron sinagogas y comercios judíos y miles de judíos fueron enviados a campos. Era el camino hacia el Holocausto.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: cómo Hitler destruyó la democracia"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1933</text><text x="47.35" y="33.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">canciller;</text><text x="47.35" y="44.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">incendio del</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Reichstag</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1933</text><text x="79" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">plenos poderes</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1934</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Führer</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1935</text><text x="181" y="149.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">Leyes de</text><text x="181" y="160.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Núremberg</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1938</text><text x="212.65" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">Noche de los</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Cristales Rotos</text></g></svg>`,
    },
    {
      html: `<h3>1.11 Rasgos comunes de los totalitarismos</h3><table class="tb"><thead><tr><th>Rasgo</th><th>Fascismo italiano</th><th>Nazismo alemán</th><th>Estalinismo</th></tr></thead><tbody><tr><td>Líder</td><td>Mussolini (Duce)</td><td>Hitler (Führer)</td><td>Stalin</td></tr><tr><td>Llegada al poder</td><td>Marcha sobre Roma, 1922</td><td>elecciones y nombramiento, 1933</td><td>lucha interna tras morir Lenin</td></tr><tr><td>Partido único</td><td>Partido Fascista</td><td>Partido Nazi</td><td>Partido Comunista</td></tr><tr><td>Represión</td><td>policía política, cárcel</td><td>Gestapo, campos de concentración</td><td>NKVD, gulag</td></tr><tr><td>Economía</td><td>capitalista con control estatal</td><td>capitalista con control estatal</td><td>planificada, sin propiedad privada</td></tr></tbody></table><p>Todos rechazaban la democracia liberal, los derechos individuales y el pluralismo; usaron la <b>propaganda</b>, el <b>culto al líder</b>, el control de la educación y de los medios y el terror. Pero sus ideologías eran opuestas: el fascismo y el nazismo eran <b>de extrema derecha</b>, nacionalistas, anticomunistas y, en el caso nazi, racistas; el estalinismo se presentaba como <b>comunista</b> e internacionalista y quería una sociedad sin clases. Por eso fueron enemigos, aunque en 1939 Hitler y Stalin firmaran un pacto de no agresión por conveniencia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos totalitarismos opuestos: Fascismo y nazismo frente a Estalinismo"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Dos totalitarismos opuestos</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="38.5" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Fascismo y</text><text x="67" y="51.2" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">nazismo</text><text x="67" y="72.1" text-anchor="middle" font-size="9.5" >extrema derecha</text><text x="67" y="96.1" text-anchor="middle" font-size="9.5" >nacionalismo y</text><text x="67" y="107.0" text-anchor="middle" font-size="9.5" >racismo</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >anticomunismo</text><text x="67" y="155.1" text-anchor="middle" font-size="9.5" >capitalismo</text><text x="67" y="166.0" text-anchor="middle" font-size="9.5" >dirigido</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Estalinismo</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >comunismo</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >internacionalismo</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >sociedad sin clases</text><text x="193" y="155.1" text-anchor="middle" font-size="9.5" >economía</text><text x="193" y="166.0" text-anchor="middle" font-size="9.5" >planificada</text></g></svg>`,
      video: {
        id: "EjszN7gO1MI",
        titulo: "El totalitarismo: Tercer Reich, Italia fascista y Unión Soviética",
        canal: "Cuaderno de Historia",
        vistas: 387919,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.12 Las democracias en retroceso y el camino a la guerra</h3><p>En los años treinta la <mark>democracia retrocedió</mark> en casi toda Europa. Además de Italia y Alemania, se establecieron dictaduras en Portugal (Salazar), Polonia, Hungría, Grecia, Austria o los países bálticos. Solo resistieron las democracias de Europa occidental y del norte: Reino Unido, Francia, Bélgica, Países Bajos, Suiza y los países escandinavos. En España, la Segunda República (1931) intentó consolidar una democracia en este contexto tan hostil, como verás en otro tema.</p><p>Para frenar al fascismo, socialistas, comunistas y republicanos formaron en Francia y España <b>frentes populares</b>, que ganaron las elecciones en 1936. Pero la <b>Sociedad de Naciones</b> fue incapaz de detener las agresiones: Japón invadió Manchuria (1931) e Italia, Etiopía (1935), y solo recibieron condenas o sanciones ineficaces.</p><p>Hitler rompió una a una las cláusulas de Versalles: restableció el servicio militar, se rearmó y ocupó Renania (1936). Alemania, Italia y Japón se aliaron (Eje Roma-Berlín, Pacto Antikomintern). Las democracias, que temían otra guerra, respondieron con la <b>política de apaciguamiento</b>: ceder para evitar el conflicto. El siguiente tema mostrará cómo esa política fracasó en 1939.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Europa en 1938: Democracias, Dictaduras fascistas, Otras dictaduras, Dictadura comunista"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Europa en 1938</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Democracias</text><text x="68" y="64.0" text-anchor="middle" font-size="10" >Reino Unido,</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >Francia, Benelux,</text><text x="68" y="87.0" text-anchor="middle" font-size="10" >Escandinavia</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.5" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Dictaduras</text><text x="192" y="59.2" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">fascistas</text><text x="192" y="82.0" text-anchor="middle" font-size="10" >Italia, Alemania</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Otras dictaduras</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >Portugal, Polonia,</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >Hungría, Grecia…</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.5" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Dictadura</text><text x="192" y="134.2" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">comunista</text><text x="192" y="157.0" text-anchor="middle" font-size="10" >URSS</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Tres totalitarismos de entreguerras",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Comparación de fascismo italiano, nazismo alemán y estalinismo soviético">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle">
    <rect x="20" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><rect x="20" y="16" width="204" height="36" rx="12" fill="var(--ink)"/><text x="122" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Fascismo · Italia</text><text x="122" y="76" font-size="13" fill="var(--ink)">Mussolini, 1922</text><text x="122" y="100" font-size="13" fill="var(--ink)">Marcha sobre Roma</text><text x="122" y="124" font-size="13" fill="var(--ink)">Estado corporativo</text><text x="122" y="148" font-size="13" fill="var(--ink)">nacionalismo imperial</text><text x="122" y="172" font-size="13" fill="var(--ink)">camisas negras</text><rect x="238" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/><rect x="238" y="16" width="204" height="36" rx="12" fill="var(--red)"/><text x="340" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Nazismo · Alemania</text><text x="340" y="76" font-size="13" fill="var(--ink)">Hitler, 1933</text><text x="340" y="100" font-size="13" fill="var(--ink)">tras el crac del 29</text><text x="340" y="124" font-size="13" fill="var(--ink)">racismo antisemita</text><text x="340" y="148" font-size="13" fill="var(--ink)">espacio vital</text><text x="340" y="172" font-size="13" fill="var(--ink)">SS y Gestapo</text><rect x="456" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><rect x="456" y="16" width="204" height="36" rx="12" fill="var(--pen)"/><text x="558" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Estalinismo · URSS</text><text x="558" y="76" font-size="13" fill="var(--ink)">Stalin, desde 1924</text><text x="558" y="100" font-size="13" fill="var(--ink)">economía planificada</text><text x="558" y="124" font-size="13" fill="var(--ink)">colectivización</text><text x="558" y="148" font-size="13" fill="var(--ink)">purgas y gulag</text><text x="558" y="172" font-size="13" fill="var(--ink)">partido comunista</text>
    </g>
  </svg>`,
  },
  video: {
    id: "-mnRwShLmXc",
    titulo: "La Revolución rusa en 7 minutos",
    canal: "Academia Play",
    vistas: 7094097,
    megusta: 150904,
    busqueda: "revolución rusa resumen",
  },
  ejemplos: [
    {
      enunciado: "Explica la cadena que llevó del crac de la Bolsa al paro masivo.",
      pasos: [
        "Caen las acciones → muchos inversores se arruinan y no devuelven sus créditos.",
        "Los bancos quiebran → no hay préstamos para las empresas.",
        "Las empresas venden menos y cierran → despiden trabajadores.",
        "Con más paro, se consume aún menos.",
      ],
      resultado: `La crisis financiera se convirtió en una crisis económica general que se alimentaba a sí misma.`,
    },
    {
      enunciado: "Compara las revoluciones de febrero y octubre de 1917.",
      pasos: [
        "Febrero: caída del zar; gobierno provisional liberal que sigue en la guerra.",
        "Octubre: los bolcheviques de Lenin toman el poder; paz y tierra para los campesinos.",
      ],
      resultado: "Febrero acabó con la monarquía; octubre instauró un Estado comunista.",
    },
    {
      enunciado: "¿Por qué los totalitarismos atraían a parte de la población en los años 30?",
      pasos: [
        "Había paro, miedo y crisis económica.",
        "Las democracias parecían débiles.",
        "Los líderes ofrecían orden, trabajo y un enemigo al que culpar.",
        "La propaganda era muy eficaz.",
      ],
      resultado: `La crisis y el miedo hicieron que muchos aceptaran perder libertades a cambio de seguridad.`,
    },
    {
      enunciado: "Analiza los votos nazis: 2,6 % (1928), 18,3 % (1930), 37,3 % (1932). ¿Qué los explica?",
      pasos: [
        `1928: prosperidad relativa gracias a los préstamos de EE. UU.; los nazis son un grupo marginal.`,
        "1929-1930: el crac retira los préstamos; sube el paro; los nazis se multiplican por siete.",
        "1932: seis millones de parados; miedo al comunismo; propaganda nazi y violencia de las SA.",
        "Conclusión: el voto nazi crece al mismo ritmo que la crisis.",
      ],
      resultado: `La Gran Depresión fue decisiva: sin el paro masivo, el nazismo habría seguido siendo minoritario.`,
    },
    {
      enunciado: "Compara el New Deal y la política económica nazi frente a la crisis.",
      pasos: [
        "Ambos: el Estado interviene, hace obras públicas y reduce el paro.",
        "New Deal: dentro de la democracia, con derechos sindicales y seguridad social.",
        "Nazis: dictadura, sindicatos prohibidos y recuperación basada en el rearme.",
        "Consecuencia: el modelo nazi preparaba la guerra; el New Deal reforzó la democracia.",
      ],
      resultado: `Los dos usaron la intervención del Estado, pero el New Deal protegió los derechos y el nazismo los suprimió para preparar la guerra.`,
    },
    {
      enunciado: "Explica por qué el comunismo de guerra fue sustituido por la NEP.",
      pasos: [
        `Comunismo de guerra (1918-1921): requisas de cosechas, nacionalización total, sin comercio privado.`,
        `Sirvió para ganar la guerra civil, pero hundió la producción: hambruna y revueltas, como la de Kronstadt (1921).`,
        "La NEP permitió a los campesinos vender excedentes y abrió pequeños negocios privados.",
        "La economía se recuperó, aunque Stalin la abolió en 1928.",
      ],
      resultado: `Lenin cambió a la NEP porque el comunismo de guerra había arruinado al país; fue una retirada táctica para recuperar la economía.`,
    },
  ],
  errores: [
    `Confundir la revolución de febrero (cae el zar) con la de octubre (toman el poder los bolcheviques).`,
    `Pensar que Hitler dio un golpe de Estado para llegar al poder en 1933: fue nombrado canciller tras ganar votos.`,
    "Creer que el crac del 29 solo afectó a EE. UU.",
    "Llamar fascista al régimen de Stalin: era comunista, aunque también totalitario.",
    "Situar el New Deal antes del crac: es de 1933.",
    `Pensar que la Gran Depresión se resolvió sola o rápido: duró casi toda la década de 1930 y en muchos países solo terminó con el rearme y la guerra.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué era la autocracia zarista?",
      sol: "El poder absoluto del zar, sin parlamento con poder real ni libertades.",
    },
    {
      nivel: "básico",
      q: "¿Qué pasó en el Domingo Sangriento?",
      sol: `En 1905 la guardia del zar disparó contra una manifestación pacífica en San Petersburgo; empezó la revolución de 1905.`,
    },
    {
      nivel: "básico",
      q: "¿Qué prometían los bolcheviques con «paz, pan y tierra»?",
      sol: "Salir de la guerra, acabar con el hambre y repartir la tierra entre los campesinos.",
    },
    {
      nivel: "básico",
      q: "Explica qué eran los planes quinquenales de Stalin.",
      sol: `Planes de cinco años que fijaban la producción de toda la economía, dando prioridad a la industria pesada.`,
    },
    {
      nivel: "básico",
      q: "Cita dos medidas del New Deal.",
      sol: `Obras públicas para dar empleo y subsidios a los parados; también más control de los bancos.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la Marcha sobre Roma?",
      sol: "La movilización fascista de 1922 que llevó al rey a nombrar a Mussolini jefe del Gobierno.",
    },
    {
      nivel: "básico",
      q: "¿Quiénes eran los bolcheviques y quién los dirigía?",
      sol: `El sector radical del partido marxista ruso, partidario de una revolución inmediata dirigida por un partido de revolucionarios profesionales. Los dirigía Lenin.`,
    },
    {
      nivel: "básico",
      q: "¿Qué eran los sóviets?",
      sol: `Consejos de obreros, soldados y campesinos que surgieron en la revolución de 1905 y volvieron en 1917; los bolcheviques gobernaron en su nombre («todo el poder a los sóviets»).`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la colectivización de Stalin?",
      sol: `La agrupación forzosa de las tierras de los campesinos en granjas colectivas (koljoses) y estatales (sovjoses). Quienes se resistieron fueron deportados o asesinados, y provocó hambrunas.`,
    },
    {
      nivel: "básico",
      q: "Cita tres rasgos de los felices años veinte en EE. UU.",
      sol: `Consumo de masas (automóvil, electrodomésticos), compras a plazos y publicidad, cine y jazz, nuevas costumbres de las mujeres (flappers), Ley Seca.`,
    },
    {
      nivel: "básico",
      q: "¿Qué era la Ley Seca y qué consecuencia tuvo?",
      sol: `La prohibición de fabricar y vender alcohol en EE. UU. (1920-1933). Favoreció el contrabando y el crecimiento de las mafias, como la de Al Capone.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la Noche de los Cristales Rotos?",
      sol: `El pogromo del 9-10 de noviembre de 1938 en Alemania: los nazis destruyeron sinagogas, comercios y casas de judíos, mataron a decenas y enviaron a miles a campos de concentración.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el gulag?",
      sol: `El sistema de campos de trabajo forzado de la URSS, adonde Stalin envió a millones de presos políticos y comunes, muchos de los cuales murieron por el frío, el hambre y el agotamiento.`,
    },
    {
      nivel: "básico",
      q: "¿Qué era la Gestapo?",
      sol: `La policía secreta del Estado nazi, encargada de vigilar, detener y torturar a los opositores.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue la NEP?",
      sol: `La Nueva Política Económica de Lenin (1921), que permitió algo de comercio y propiedad privada para recuperar la economía.`,
    },
    {
      nivel: "medio",
      q: "¿Qué es una burbuja especulativa?",
      sol: `Una subida de precios de un bien o de acciones muy por encima de su valor real, porque se compra solo para vender más caro.`,
    },
    {
      nivel: "medio",
      q: "¿Qué establecían las Leyes de Núremberg?",
      sol: `Quitaban la ciudadanía alemana a los judíos y prohibían los matrimonios entre judíos y no judíos (1935).`,
    },
    {
      nivel: "medio",
      q: "¿Qué rasgos comparten los regímenes totalitarios?",
      sol: "Partido único, culto al líder, represión, propaganda y control total de la sociedad.",
    },
    {
      nivel: "medio",
      q: "Explica qué fue el «doble poder» en Rusia en 1917.",
      sol: `Tras la revolución de febrero coexistieron dos poderes: el Gobierno provisional (liberal y moderado) y los sóviets de obreros y soldados, con gran influencia en las calles y el ejército. Ninguno controlaba todo, lo que favoreció la toma del poder bolchevique en octubre.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué el Gobierno provisional perdió apoyo entre febrero y octubre de 1917?",
      sol: `Porque siguió en la guerra, que causaba muertos y hambre, y aplazó el reparto de tierras y las elecciones a una asamblea constituyente. Los bolcheviques ofrecían «paz, pan y tierra», lo que la población deseaba.`,
    },
    {
      nivel: "medio",
      q: "Explica qué fue la hiperinflación alemana de 1923 y sus efectos.",
      sol: `Una subida descontrolada de los precios causada por la impresión masiva de dinero para pagar gastos y reparaciones, agravada por la ocupación francesa del Ruhr. El marco perdió todo su valor; las clases medias perdieron sus ahorros y desconfiaron de la república, lo que luego aprovecharon los nazis.`,
    },
    {
      nivel: "medio",
      q: "¿Qué defendía Keynes y por qué era una ruptura con el liberalismo clásico?",
      sol: `Que en las crisis el Estado debe aumentar el gasto público y la inversión, aunque tenga déficit, para estimular la demanda y el empleo. Rompía con el liberalismo clásico, que pedía no intervenir y dejar que el mercado se ajustara solo.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue la Marcha sobre Roma y por qué tuvo éxito?",
      sol: `La movilización de miles de fascistas hacia Roma en octubre de 1922. Tuvo éxito porque el rey Víctor Manuel III se negó a usar el ejército contra ellos y nombró a Mussolini jefe del Gobierno, con el apoyo de conservadores y empresarios que temían a la izquierda.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue la ley de plenos poderes de 1933?",
      sol: `Una ley aprobada por el Reichstag, en un clima de intimidación, que permitía a Hitler gobernar y hacer leyes sin el Parlamento durante cuatro años. Fue la base legal de la dictadura.`,
    },
    {
      nivel: "medio",
      q: "Explica qué era la política de apaciguamiento y quién la aplicó.",
      sol: `La política de Reino Unido y Francia en los años 30 de hacer concesiones a Hitler (rearme, Renania, Austria, Sudetes) para evitar una nueva guerra. Su máximo defensor fue el primer ministro británico Chamberlain. Fracasó en 1939.`,
    },
    {
      nivel: "medio",
      q: "¿Qué medidas tomó la Seguridad Social estadounidense de 1935?",
      sol: `Creó pensiones de jubilación, un seguro de desempleo y ayudas a personas con discapacidad y a familias con niños dependientes. Fue el inicio de un sistema de protección social en EE. UU.`,
    },
    {
      nivel: "avanzado",
      q: `Comenta el lema «paz, pan y tierra». ¿A qué grupos se dirigía cada palabra y por qué tuvo tanto éxito?`,
      sol: `Paz: a los soldados y a toda la población, agotada por la guerra mundial. Pan: a los obreros de las ciudades, que sufrían hambre y precios altos. Tierra: a los campesinos, la inmensa mayoría, que querían las tierras de los nobles. Tuvo éxito porque resumía en tres palabras las necesidades urgentes que el Gobierno provisional no atendía.`,
    },
    {
      nivel: "avanzado",
      q: "Compara el estalinismo y el nazismo: tres semejanzas y tres diferencias.",
      sol: `Semejanzas: partido único y culto al líder; represión masiva con policía política y campos (gulag/campos de concentración); propaganda y control total de la sociedad. Diferencias: ideología comunista frente a nacionalista y racista; economía planificada sin propiedad privada frente a capitalismo con control estatal; el estalinismo buscaba una sociedad sin clases, el nazismo una jerarquía racial.`,
    },
    {
      nivel: "avanzado",
      q: "¿Fue la Gran Depresión la causa del ascenso del nazismo? Argumenta con datos.",
      sol: `Fue una causa decisiva, pero no la única. Datos: los nazis pasaron del 2,6 % (1928) al 37,3 % (1932) mientras el paro llegaba a 6 millones. Otras causas: humillación de Versalles, debilidad de Weimar, hiperinflación de 1923, miedo al comunismo, propaganda nazi y apoyo de conservadores que nombraron canciller a Hitler.`,
    },
    {
      nivel: "avanzado",
      q: `Explica la paradoja de que la URSS se industrializara rápidamente mientras millones de personas morían de hambre.`,
      sol: `Los planes quinquenales concentraron todos los recursos en la industria pesada; para financiarla, el Estado se quedaba con las cosechas (colectivización) y las exportaba, aunque faltara comida. La industria creció mucho, pero a costa de la población campesina: hambrunas como el Holodomor, deportaciones y trabajo forzado en el gulag.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué fracasó la Sociedad de Naciones en los años treinta?",
      sol: `No tenía ejército propio, sus decisiones requerían unanimidad, EE. UU. nunca entró y la URSS lo hizo tarde; Alemania, Japón e Italia la abandonaron. Ante las invasiones de Manchuria y Etiopía solo aplicó condenas o sanciones débiles, lo que animó a los agresores.`,
    },
    {
      nivel: "avanzado",
      q: `Imagina que eres un parado de Berlín en 1932. Escribe un breve monólogo explicando por qué dudas entre votar a los nazis, a los comunistas o a los partidos democráticos.`,
      sol: `Debe reflejar: el paro y el hambre tras el crac; la desconfianza en la República de Weimar (hiperinflación, Versalles); la propaganda nazi que promete trabajo y orden y culpa a judíos y comunistas; la propuesta comunista de revolución como en la URSS; y los partidos democráticos, que parecen incapaces de resolver la crisis. Una buena respuesta muestra comprensión, no apoyo, de esas motivaciones.`,
    },
  ],
  quiz: [
    {
      q: "¿Quién dirigía a los bolcheviques en octubre de 1917?",
      o: ["Stalin", "Trotski", "Lenin", "Nicolás II"],
      a: 2,
      e: "Lenin encabezó la toma del poder con el lema «paz, pan y tierra».",
    },
    {
      q: "¿Qué fue el crac del 29?",
      o: [
        "La invasión de Polonia",
        "Una guerra",
        "El hundimiento de la Bolsa de Nueva York",
        "Una revolución en Alemania",
      ],
      a: 2,
      e: "En octubre de 1929 las acciones se desplomaron y empezó la Gran Depresión.",
    },
    {
      q: "El New Deal de Roosevelt consistió en…",
      o: [
        "recortar todo el gasto público",
        "obras públicas y ayudas sociales para salir de la crisis",
        "declarar la guerra a Alemania",
        "nacionalizar todas las empresas",
      ],
      a: 1,
      e: "El Estado intervino para crear empleo y proteger a los más afectados.",
    },
    {
      q: "¿Qué rasgo es común a los totalitarismos?",
      o: ["Pluralidad de partidos", "Partido único y culto al líder", "Libertad de prensa", "Separación de poderes"],
      a: 1,
      e: "Fascismo, nazismo y estalinismo eliminaron la oposición y glorificaron al jefe.",
    },
    {
      q: "¿En qué año llegó Hitler al poder?",
      o: ["1922", "1929", "1933", "1939"],
      a: 2,
      e: "Fue nombrado canciller en enero de 1933 y en pocos meses eliminó la democracia.",
    },
    {
      q: "La Duma era…",
      o: ["un sindicato obrero", "el parlamento ruso", "la policía del zar", "un partido"],
      a: 1,
      e: "Se creó tras la revolución de 1905.",
    },
    { q: "La URSS nació en…", o: ["1917", "1922", "1945", "1905"], a: 1, e: "Tras la guerra civil." },
    {
      q: "El crac de la Bolsa de Nueva York empezó en…",
      o: ["octubre de 1929", "enero de 1933", "marzo de 1917", "julio de 1914"],
      a: 0,
      e: "El llamado jueves negro.",
    },
    { q: "El New Deal lo impulsó…", o: ["Roosevelt", "Hoover", "Wilson", "Truman"], a: 0, e: "Desde 1933." },
    { q: "Hitler fue nombrado canciller en…", o: ["1929", "1923", "1933", "1939"], a: 2, e: "En enero de 1933." },
    {
      q: "El zar que abdicó en 1917 fue…",
      o: ["Alejandro II", "Nicolás II", "Pedro el Grande", "Iván IV"],
      a: 1,
      e: "Abdicó tras la revolución de febrero.",
    },
    {
      q: "¿Qué tratado sacó a Rusia de la Primera Guerra Mundial?",
      o: ["Versalles", "Brest-Litovsk", "Locarno", "Trianón"],
      a: 1,
      e: "Firmado con Alemania en 1918, con grandes pérdidas territoriales.",
    },
    {
      q: "La NEP de Lenin permitía…",
      o: [
        "la propiedad privada de grandes fábricas",
        "algo de comercio privado y venta de excedentes campesinos",
        "volver a la monarquía",
        "elecciones libres",
      ],
      a: 1,
      e: "Fue una retirada táctica para recuperar la economía.",
    },
    {
      q: "Las granjas colectivas soviéticas se llamaban…",
      o: ["kulaks", "koljoses", "sóviets", "dumas"],
      a: 1,
      e: "Los sovjoses eran las granjas estatales.",
    },
    {
      q: "La hiperinflación alemana fue en…",
      o: ["1918", "1923", "1929", "1933"],
      a: 1,
      e: "El marco perdió todo su valor.",
    },
    {
      q: "¿Qué economista defendió que el Estado gastara para salir de las crisis?",
      o: ["Adam Smith", "Karl Marx", "John M. Keynes", "Milton Friedman"],
      a: 2,
      e: "Sus ideas inspiraron el Estado del bienestar.",
    },
    {
      q: "Mussolini recibía el título de…",
      o: ["Führer", "Duce", "Caudillo", "Zar"],
      a: 1,
      e: "Duce significa «guía» o «líder».",
    },
    {
      q: "El libro en que Hitler expuso sus ideas fue…",
      o: ["El capital", "Mi lucha", "El príncipe", "Mein Duce"],
      a: 1,
      e: "Lo escribió en la cárcel tras el golpe de Múnich (1923).",
    },
    {
      q: "El ministro de Propaganda nazi fue…",
      o: ["Himmler", "Goebbels", "Göring", "Hess"],
      a: 1,
      e: "Controló prensa, radio, cine y actos de masas.",
    },
    {
      q: "La política de apaciguamiento consistía en…",
      o: [
        "declarar la guerra a Hitler",
        "hacer concesiones a Hitler para evitar la guerra",
        "aliarse con la URSS",
        "invadir Alemania",
      ],
      a: 1,
      e: "La aplicaron Reino Unido y Francia hasta 1939.",
    },
  ],
  examen: [
    {
      q: "Los planes quinquenales de Stalin buscaban…",
      o: [
        "privatizar la industria",
        "industrializar rápidamente la URSS con planificación estatal",
        "repartir dinero a los campesinos",
        "subir los impuestos a los obreros",
      ],
      a: 1,
      e: "Fijaban objetivos de producción a cinco años, sobre todo en industria pesada.",
    },
    {
      q: "¿Por qué la Gran Depresión favoreció al nazismo?",
      o: [
        "Porque mejoró la economía alemana",
        "Porque el paro y la desesperación debilitaron la confianza en la democracia",
        "Porque Hitler ganó una guerra",
        "Porque Hitler era banquero",
      ],
      a: 1,
      e: "Con seis millones de parados, muchos alemanes votaron a quien prometía orden y empleo.",
    },
    {
      q: "Las leyes de Núremberg (1935)…",
      o: [
        "quitaron derechos a los judíos alemanes",
        "prohibieron el Partido Nazi",
        "dieron el voto a las mujeres",
        "crearon la Sociedad de Naciones",
      ],
      a: 0,
      e: "Prohibieron los matrimonios mixtos y retiraron la ciudadanía a los judíos.",
    },
    {
      q: "El Domingo Sangriento (1905) ocurrió en…",
      o: ["Moscú", "San Petersburgo", "Kiev", "Berlín"],
      a: 1,
      e: "La guardia disparó contra una manifestación pacífica.",
    },
    {
      q: "¿Quién dirigió el Ejército Rojo en la guerra civil rusa?",
      o: ["Stalin", "Trotski", "Kérenski", "Nicolás II"],
      a: 1,
      e: "Trotski organizó el Ejército Rojo.",
    },
    {
      q: "En 1933 el paro en EE. UU. afectaba aproximadamente a…",
      o: ["1 de cada 100", "1 de cada 20", "1 de cada 4", "la mitad"],
      a: 2,
      e: "Un 25 % de la población activa.",
    },
    {
      q: "Las Juventudes Hitlerianas servían para…",
      o: [
        "formar sindicatos",
        "adoctrinar a los jóvenes en el nazismo",
        "organizar elecciones",
        "ayudar a los judíos",
      ],
      a: 1,
      e: "El nazismo controlaba la educación y el tiempo libre.",
    },
    {
      q: "¿Qué país NO era una democracia en 1938?",
      o: ["Reino Unido", "Francia", "Portugal", "Suecia"],
      a: 2,
      e: "Portugal vivía la dictadura de Salazar.",
    },
  ],
  feynman: [
    "Por qué hubo dos revoluciones en Rusia en 1917",
    "Cómo funcionaba la economía planificada de Stalin",
    "La cadena de efectos del crac del 29",
    "Qué tienen en común fascismo, nazismo y estalinismo",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: ENTREGUERRAS">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">ENTREGUERRAS</text>
      <rect x="10" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--red)">Rusia 1917</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">Lenin · bolcheviques · URSS</text><rect x="430" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--ink)">Stalin</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">planes · colectivización · gulag</text><rect x="10" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--sun)">Crac del 29</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Gran Depresión · New Deal</text><rect x="430" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--pen)">Totalitarismos</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Mussolini · Hitler</text>
    </g></svg>`,
  tarjetas: [
    ["Lema de los bolcheviques", "«Paz, pan y tierra»."],
    ["¿Cuándo nació la URSS?", "En 1922."],
    ["Jueves negro", "24 de octubre de 1929, inicio del crac de la Bolsa de Nueva York."],
    ["New Deal", "Plan de Roosevelt de obras públicas y ayudas sociales contra la Gran Depresión."],
    ["Marcha sobre Roma", "1922: Mussolini llega al poder en Italia."],
    ["Domingo Sangriento", "Matanza de 1905 que inicia la primera revolución rusa."],
    ["New Deal", "Plan de Roosevelt contra la Gran Depresión."],
    ["Totalitarismo", "Régimen que controla toda la vida de las personas."],
    ["Planes quinquenales", "Planes estatales de cinco años de Stalin para industrializar la URSS."],
    ["Burbuja especulativa", "Subida de precios de las acciones muy por encima de su valor real."],
    ["Führer", "Título de Hitler como líder absoluto del Tercer Reich desde 1934."],
    ["Apaciguamiento", "Política de concesiones de Reino Unido y Francia a Hitler para evitar la guerra."],
  ],
  glosario: [
    ["Autocracia", "Poder absoluto del zar en Rusia."],
    ["Sóviet", "Consejo de obreros, soldados y campesinos."],
    ["Bolcheviques", "Sector revolucionario del marxismo ruso dirigido por Lenin."],
    ["NEP", `Nueva Política Económica (1921) que permitió algo de comercio privado en la Rusia soviética.`],
    ["URSS", "Unión de Repúblicas Socialistas Soviéticas, creada en 1922."],
    ["Economía planificada", "Sistema en el que el Estado decide qué y cuánto se produce."],
    ["Colectivización", "Agrupación forzosa de las tierras en granjas colectivas."],
    ["Gulag", "Sistema de campos de trabajo forzado de la URSS."],
    ["Purgas", "Eliminación masiva de supuestos enemigos dentro del régimen estalinista."],
    ["Sobreproducción", "Exceso de producción respecto a lo que se puede vender."],
    ["Especulación", "Compra de bienes o acciones para venderlos más caros en poco tiempo."],
    ["Gran Depresión", "Crisis económica mundial de los años treinta iniciada con el crac de 1929."],
    ["New Deal", "Programa de Roosevelt de intervención del Estado para superar la crisis."],
    ["Hiperinflación", "Subida extrema y descontrolada de los precios."],
    ["Totalitarismo", "Régimen que controla todos los aspectos de la vida con partido único y represión."],
    ["Fascismo", `Ideología de extrema derecha, nacionalista, antidemocrática y violenta fundada por Mussolini.`],
    ["Antisemitismo", "Odio y discriminación contra los judíos."],
    ["Apaciguamiento", "Política de ceder ante las exigencias de Hitler para evitar la guerra."],
  ],
  situacion: {
    titulo: "¿Cómo se pierde una democracia?",
    reto: `Un periódico digital juvenil os encarga un reportaje que explique a lectores de vuestra edad cómo una democracia, la República de Weimar, se convirtió en una dictadura en menos de dos meses. Debe ayudar a reconocer las señales de alarma y defender los valores democráticos hoy.`,
    pasos: [
      `Construid una línea del tiempo de 1919 a 1934 con los hechos clave (Versalles, hiperinflación, crac, elecciones, nombramiento de Hitler, Reichstag, plenos poderes).`,
      "Analizad el gráfico de votos nazis y relacionadlo con la evolución del paro.",
      "Buscad dos fuentes primarias (un cartel de propaganda y un testimonio) y comentadlas.",
      `Identificad cinco «señales de alarma» (violencia política, culpar a una minoría, ataques a la prensa…).`,
      `Redactad el reportaje con titular, entradilla, cuerpo, un gráfico y una conclusión sobre cómo se protege hoy la democracia.`,
    ],
    producto: `Un reportaje periodístico (600-800 palabras) con línea del tiempo, gráfico y análisis de fuentes.`,
    evaluacion: [
      "Explicación correcta de las causas del ascenso nazi y de la destrucción de la democracia.",
      "Análisis riguroso de fuentes primarias y datos.",
      "Reflexión crítica sobre las señales de alarma y los valores democráticos.",
      "Calidad periodística: claridad, estructura y adecuación al público.",
    ],
  },
  familias: [
    `Comentad juntos cómo la propaganda actual (anuncios, redes) usa técnicas parecidas a las de los años 30: mensajes simples y repetidos.`,
    "Buscad qué pasó con los precios y el paro en la crisis de 2008 y comparadlo con 1929.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: la Revolución rusa, la crisis de 1929 y el ascenso de los totalitarismos; memoria democrática (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      "Análisis de carteles de propaganda soviética, fascista y nazi.",
      "Gráfica del paro en EE. UU. y Alemania de 1928 a 1934.",
      "Debate guiado: ¿cómo puede una democracia defenderse de los extremismos?",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    { t: "Revolución rusa, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_rusa" },
  ],
  revisado: "2026-11-13",
};
