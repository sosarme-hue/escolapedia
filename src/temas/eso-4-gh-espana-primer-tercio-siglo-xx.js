// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "España en el primer tercio del siglo XX",
  minutos: 110,
  objetivos: [
    "Explicar la crisis de la Restauración durante el reinado de Alfonso XIII",
    "Describir la dictadura de Primo de Rivera",
    "Analizar las reformas y los problemas de la Segunda República",
    "Relacionar la crisis de 1917 y la guerra de Marruecos con el fin de la Restauración",
    "Explicar las reformas y los conflictos de la Segunda República",
  ],
  claves: [
    "Alfonso XIII",
    "crisis de 1917",
    "Primo de Rivera",
    "Segunda República",
    "Constitución de 1931",
    "voto femenino",
  ],
  pregunta: {
    texto: `El 14 de abril de 1931, tras unas elecciones municipales, el rey Alfonso XIII se marchó de España sin abdicar y miles de personas salieron a la calle con banderas tricolores. ¿Cómo se llegó a eso?`,
    respuesta: `El sistema de la <b>Restauración</b> llevaba años en crisis: conflictos sociales, la guerra de Marruecos y una dictadura militar apoyada por el rey. Cuando cayó el dictador, la monarquía quedó sin apoyos y se proclamó la <mark>Segunda República</mark>, que intentó modernizar el país con grandes reformas.`,
  },
  lectura: {
    titulo: "La primera vez que votaron",
    html: `<p>19 de noviembre de 1933. En un colegio electoral de un pueblo de Jaén, una mujer de sesenta años se pone su mejor vestido, coge de la mano a su nieta y hace cola. Muchos vecinos la miran con curiosidad; algunos, con desaprobación. Ella nunca ha ido a la escuela y le cuesta leer la papeleta, pero quiere hacerlo. Por primera vez en la historia de España, las mujeres votan en unas elecciones generales.</p><p>Dos años antes, en las Cortes, la diputada Clara Campoamor había defendido ese derecho casi en solitario frente a quienes decían que las mujeres «no estaban preparadas» o que votarían lo que les dijera el cura. «Dejad que la mujer se manifieste como es», respondió. Ganó la votación por 161 votos contra 121.</p><p>Aquel voto femenino fue una de las muchas novedades de la Segunda República, un régimen que despertó enormes esperanzas y también fuertes rechazos. Para entender cómo se llegó a ella, y por qué terminó en guerra, hay que retroceder a principios de siglo: a un sistema político agotado, a una guerra impopular en Marruecos y a una dictadura. Ese es el recorrido de este tema, de 1902 a 1936.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Alfonso XIII y la crisis de la Restauración</h3><p>En 1902 <b>Alfonso XIII</b> alcanzó la mayoría de edad y empezó a reinar. El sistema de la Restauración seguía en pie, pero cada vez más débil. Muertos Cánovas (asesinado en 1897) y Sagasta (1903), los partidos Conservador y Liberal se dividieron en facciones enfrentadas, y el turno pacífico funcionaba peor. Algunos políticos, como el conservador <b>Antonio Maura</b>, intentaron una «revolución desde arriba» para acabar con el caciquismo, sin éxito. El liberal <b>Canalejas</b> impulsó reformas sociales, pero fue asesinado en 1912.</p><p>Mientras tanto, los grupos que el sistema dejaba fuera se hacían más fuertes: republicanos, socialistas, anarquistas y nacionalistas catalanes y vascos. Tres grandes problemas iban a desgastar al régimen: la <b>cuestión social</b> (conflictos obreros y campesinos), la <b>cuestión nacional</b> (reivindicaciones de autonomía) y la <b>guerra de Marruecos</b>. Además, el rey intervenía a menudo en la política y en los asuntos del ejército, algo que la Constitución le permitía pero que le restaba neutralidad.</p><p>Entre 1902 y 1923 hubo más de treinta gobiernos distintos: la inestabilidad se convirtió en norma.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Problemas de la Restauración a principios del siglo XX">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="21" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="14" y="21" width="80" height="30" rx="8" fill="var(--red)"/><text x="54" y="40" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Obreros</text><text x="102" y="40" font-size="11.5" fill="var(--ink)">huelgas, CNT y UGT</text><rect x="14" y="55" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><rect x="14" y="55" width="80" height="30" rx="8" fill="var(--sun)"/><text x="54" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Regiones</text><text x="102" y="74" font-size="9.5" fill="var(--ink)">nacionalismo catalán y vasco</text><rect x="14" y="89" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="89" width="80" height="30" rx="8" fill="var(--leaf)"/><text x="54" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Marruecos</text><text x="102" y="108" font-size="10.5" fill="var(--ink)">guerra impopular, Annual</text><rect x="14" y="123" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="14" y="123" width="80" height="30" rx="8" fill="var(--muted)"/><text x="54" y="142" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Política</text><text x="102" y="142" font-size="11.5" fill="var(--ink)">turnismo y caciquismo</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.2 Una sociedad en tensión: obreros, campesinos y nacionalismos</h3><p>A comienzos del siglo XX España seguía siendo un país mayoritariamente agrario, pero las ciudades crecían y la industria avanzaba en Cataluña, el País Vasco, Asturias y Madrid. Con ella creció el <mark>movimiento obrero</mark>. Los socialistas de la <b>UGT</b> y el PSOE eran fuertes en Madrid, Asturias y Vizcaya y defendían la acción política y la negociación. Los anarquistas fundaron en 1910 la <b>CNT</b>, el sindicato más numeroso, con gran implantación en Cataluña, Valencia y Andalucía, partidario de la huelga general y la acción directa. En el campo andaluz los jornaleros protagonizaban huelgas y ocupaciones de fincas.</p><p>Al mismo tiempo crecieron los <b>nacionalismos</b>. En Cataluña, la <b>Lliga Regionalista</b> de Prat de la Riba y Cambó, conservadora y burguesa, ganó las elecciones y consiguió la <b>Mancomunidad de Cataluña</b> (1914), que reunía a las cuatro diputaciones y creó escuelas, bibliotecas y carreteras. En el País Vasco, el PNV ganaba apoyos. En Galicia, Valencia o Andalucía surgieron movimientos regionalistas.</p><p>Frente a estas demandas, el sistema respondió muchas veces con represión y con el estado de guerra, lo que radicalizó las posiciones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fuerzas fuera del turno: Socialistas, Anarquistas, Republicanos, Nacionalistas"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Fuerzas fuera del turno</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Socialistas</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >PSOE y UGT</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Anarquistas</text><text x="192" y="75.5" text-anchor="middle" font-size="10" >CNT (1910)</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Republicanos</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >Lerroux, Blasco</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >Ibáñez</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Nacionalistas</text><text x="192" y="150.5" text-anchor="middle" font-size="10" >Lliga, PNV</text></g></svg>`,
    },
    {
      html: `<h3>1.3 La guerra de Marruecos y la Semana Trágica</h3><p>Tras perder las últimas colonias en 1898, España buscó compensación en África. En 1912 obtuvo, junto a Francia, un <mark>protectorado</mark> en el norte de Marruecos, una franja montañosa y pobre, el Rif, cuyas tribus resistieron la ocupación.</p><p>La guerra fue muy <b>impopular</b>. El servicio militar no era igual para todos: los hijos de familias ricas podían librarse pagando una cuota o un sustituto, de modo que morían sobre todo los hijos de obreros y campesinos. En julio de 1909, el embarque en Barcelona de reservistas, muchos de ellos padres de familia, desató la <b>Semana Trágica</b>: una huelga general que se convirtió en revuelta, con barricadas y la quema de iglesias y conventos. La represión fue durísima: hubo cinco fusilados, entre ellos el pedagogo Francesc Ferrer i Guàrdia, cuya ejecución causó protestas en toda Europa y la caída de Maura.</p><p>En <b>1921</b>, en el <mark>desastre de Annual</mark>, las tropas del general Silvestre se desplomaron ante el ataque del líder rifeño Abd el-Krim: murieron unos 10 000 soldados españoles. El Parlamento abrió una investigación, el expediente Picasso, que señalaba responsabilidades de mandos militares y quizá del propio rey.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: la guerra de Marruecos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1909</text><text x="47.35" y="33.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">Barranco del</text><text x="47.35" y="44.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Lobo y Semana</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Trágica</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1912</text><text x="79" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">protectorado</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1921</text><text x="130" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">desastre de</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Annual</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1925</text><text x="181" y="149.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">desembarco de</text><text x="181" y="160.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Alhucemas</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1927</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">fin de la guerra</text></g></svg>`,
    },
    {
      html: `<h3>1.4 La crisis de 1917 y el pistolerismo</h3><p>España fue <b>neutral</b> en la Primera Guerra Mundial y vendió alimentos, tejidos, carbón y hierro a los países en guerra. Algunos empresarios hicieron grandes fortunas, pero los precios subieron mucho más que los salarios y la vida de los trabajadores empeoró. En <mark>1917</mark> estalló una triple crisis.</p><p><b>Militar</b>: los oficiales del ejército de la península formaron <b>Juntas de Defensa</b> para protestar por sus sueldos y por los ascensos rápidos de los militares destinados en África. <b>Política</b>: diputados catalanistas, republicanos y reformistas se reunieron en Barcelona en una <b>Asamblea de Parlamentarios</b> para pedir unas Cortes constituyentes. <b>Social</b>: UGT y CNT convocaron una <b>huelga general</b> revolucionaria en agosto. El Gobierno sobrevivió porque las tres protestas no se unieron: el ejército, satisfecho con sus mejoras, reprimió la huelga con cientos de detenidos y decenas de muertos.</p><p>Siguieron años muy violentos. En el campo andaluz, el «trienio bolchevique» (1918-1920) llenó de huelgas los latifundios. En Barcelona se vivió el <b>pistolerismo</b> (1918-1923): pistoleros pagados por la patronal y grupos de acción anarquistas se mataban en la calle. Fue asesinado incluso el presidente del Gobierno, Eduardo Dato (1921).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La triple crisis de 1917: Militar, Política, Social"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">La triple crisis de 1917</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Militar</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >Juntas de Defensa</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >de los oficiales</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Política</text><text x="192" y="64.0" text-anchor="middle" font-size="10" >Asamblea de</text><text x="192" y="75.5" text-anchor="middle" font-size="10" >Parlamentarios en</text><text x="192" y="87.0" text-anchor="middle" font-size="10" >Barcelona</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Social</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >huelga general de</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >UGT y CNT</text></g></svg>`,
    },
    {
      html: `<h3>1.5 La dictadura de Primo de Rivera: el golpe y el régimen</h3><p>El 13 de septiembre de 1923 el capitán general de Cataluña, <b>Miguel Primo de Rivera</b>, dio un <mark>golpe de Estado</mark>. Prometía acabar con el desorden, el pistolerismo, la guerra de Marruecos y la «vieja política» caciquil, y se presentaba como un «cirujano de hierro» que gobernaría solo un tiempo. Muchos sectores lo recibieron con alivio: empresarios, Iglesia, ejército y buena parte de las clases medias. El rey <b>Alfonso XIII</b> lo aceptó y lo nombró jefe del Gobierno, con lo que unió el destino de la monarquía al de la dictadura; probablemente quería también cerrar la investigación sobre Annual.</p><p>Primo de Rivera suspendió la Constitución de 1876, disolvió las Cortes, prohibió los partidos, censuró la prensa y declaró el estado de guerra. Disolvió la Mancomunidad de Cataluña y persiguió el catalanismo. Gobernó primero con un <b>Directorio militar</b> (1923-1925) y después con un <b>Directorio civil</b> (1925-1930), con técnicos. Creó un partido único, la <b>Unión Patriótica</b>, y una Asamblea Nacional consultiva sin poder real. Se inspiraba en parte en el fascismo italiano, pero su régimen fue más una dictadura militar conservadora que un totalitarismo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Luces y sombras de la dictadura de Primo de Rivera">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--leaf)" font-family="Baloo 2, sans-serif">Logros</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">fin de la guerra</text><text x="69" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">de Marruecos</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">obras públicas</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">carreteras,</text><text x="69" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">pantanos</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--red)" font-family="Baloo 2, sans-serif">Problemas</text>
    <text x="191" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">sin Constitución</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">ni partidos</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">censura</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">deuda pública</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">dimite en 1930</text>
  </svg>`,
    },
    {
      html: `<h3>1.6 Logros, fracasos y caída de la dictadura</h3><p>Su mayor éxito fue terminar la <b>guerra de Marruecos</b>. En 1925, en colaboración con Francia, organizó el <mark>desembarco de Alhucemas</mark>, una operación anfibia que derrotó a Abd el-Krim; en 1927 la zona quedó pacificada. En economía aprovechó la prosperidad internacional de los años veinte e impulsó grandes <b>obras públicas</b>: carreteras, ferrocarriles, pantanos y las Confederaciones Hidrográficas, que organizaban el uso del agua por cuencas. Creó monopolios como <b>CAMPSA</b> (petróleo) y <b>Telefónica</b>, y organizó las Exposiciones de Barcelona y Sevilla de 1929. Para reducir conflictos laborales creó comités paritarios con la UGT, mientras persiguió a la CNT.</p><p>Pero la dictadura no resolvió los problemas de fondo y acumuló enemigos. Los <b>intelectuales</b> (Unamuno fue desterrado) y los <b>estudiantes</b> universitarios protestaron; los <b>republicanos</b> y los catalanistas conspiraron; parte del <b>ejército</b>, especialmente los artilleros, se enfrentó a él por los ascensos. La crisis de 1929 hundió la peseta y agravó el déficit de las obras. Sin apoyos, Primo de Rivera dimitió en enero de 1930 y murió poco después en París. El rey quedó gravemente desprestigiado.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: realizaciones de la dictadura"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1924</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Telefónica</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1925</text><text x="79" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Alhucemas</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1926</text><text x="130" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">Confederaciones</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Hidrográficas</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1927</text><text x="181" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">CAMPSA</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1929</text><text x="212.65" y="33.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">Exposiciones de</text><text x="212.65" y="44.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Barcelona y</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Sevilla</text></g></svg>`,
      video: {
        id: "D21pudizOm0",
        titulo: "Dictadura de Primo de Rivera (1923-1930)",
        canal: "Probando probando",
        vistas: 303131,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.7 La caída de la monarquía (1930-1931)</h3><p>Tras la dimisión de Primo de Rivera, Alfonso XIII intentó volver a la normalidad constitucional con los gobiernos del general Berenguer y del almirante Aznar: fue la llamada «dictablanda». Pero era tarde. Muchos políticos monárquicos, como Niceto Alcalá-Zamora o Miguel Maura, se habían pasado a la república porque culpaban al rey de haber apoyado la dictadura.</p><p>En agosto de 1930 republicanos, socialistas y nacionalistas catalanes y gallegos firmaron el <mark>Pacto de San Sebastián</mark> para traer la República y crearon un comité revolucionario. En diciembre fracasó un levantamiento militar republicano en Jaca, cuyos líderes, Galán y García Hernández, fueron fusilados y se convirtieron en mártires de la causa.</p><p>El Gobierno convocó <b>elecciones municipales</b> para el <b>12 de abril de 1931</b>. Aunque en el conjunto de España ganaron más concejales monárquicos, en casi todas las capitales de provincia y grandes ciudades, donde el voto era más libre de caciquismo, triunfaron las candidaturas republicanas y socialistas. Se interpretó como un plebiscito contra la monarquía. El 14 de abril se proclamó la República en Éibar, Barcelona y Madrid, y Alfonso XIII salió de España sin abdicar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Del rey a la República: dictadura de Primo de Rivera con apoyo del rey → 1930: dimisión y Pacto de San Sebastián → 12 abril 1931: republicanos ganan en las ciudades → 14 abril 1931: se proclama la República"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Del rey a la República</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="39.9" text-anchor="middle" font-size="10.5" >dictadura de Primo de Rivera</text><text x="130" y="52.0" text-anchor="middle" font-size="10.5" >con apoyo del rey</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="78.4" text-anchor="middle" font-size="10.5" >1930: dimisión y Pacto de San</text><text x="130" y="90.5" text-anchor="middle" font-size="10.5" >Sebastián</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="116.9" text-anchor="middle" font-size="10.5" >12 abril 1931: republicanos</text><text x="130" y="129.0" text-anchor="middle" font-size="10.5" >ganan en las ciudades</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="155.4" text-anchor="middle" font-size="10.5" >14 abril 1931: se proclama la</text><text x="130" y="167.5" text-anchor="middle" font-size="10.5" >República</text></g></svg>`,
    },
    {
      html: `<h3>1.8 El Gobierno provisional y las Cortes constituyentes</h3><p>El 14 de abril de 1931, con calles llenas de gente que celebraba con banderas tricolores, se proclamó la <mark>Segunda República</mark>. Se formó un <b>Gobierno provisional</b> presidido por el católico conservador <b>Niceto Alcalá-Zamora</b>, con republicanos de distintas tendencias, socialistas y nacionalistas. Ese mismo día, Francesc Macià proclamó en Barcelona la «República Catalana», aunque aceptó transformarla en un gobierno autónomo, la <b>Generalitat</b>.</p><p>El Gobierno tomó medidas urgentes: amnistía para los presos políticos, decretos para proteger a los jornaleros (como obligar a contratar a los del propio municipio) y una primera reforma militar. También hubo tensiones tempranas: en mayo de 1931 se quemaron varios conventos en Madrid y otras ciudades, y el cardenal Segura atacó a la República en una pastoral, lo que enfrentó al régimen con parte de la Iglesia.</p><p>En junio se celebraron <b>elecciones a Cortes constituyentes</b>, con sufragio universal masculino (las mujeres podían ser elegidas, pero aún no votar). Ganó ampliamente la coalición republicano-socialista. Fueron elegidas tres diputadas: Clara Campoamor, Victoria Kent y Margarita Nelken. Las Cortes redactaron una nueva constitución.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Urna con papeletas y el texto 1933: votan las mujeres">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="80" y="70" width="100" height="80" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="110" y="66" width="40" height="8" rx="3" fill="var(--ink)"/>
        <rect x="116" y="30" width="28" height="40" rx="3" fill="var(--card)" stroke="var(--bac)" stroke-width="2.5" transform="rotate(-8 130 50)"/>
        <path d="M122 46 l 6 6 l 10 -12" fill="none" stroke="var(--bac)" stroke-width="3" transform="rotate(-8 130 50)"/>
        <text x="130" y="116" text-anchor="middle" font-size="22" font-weight="700" fill="var(--bac)" font-family="Baloo 2, sans-serif">1933</text>
        <text x="130" y="168" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">primer voto de las mujeres</text>
      </svg>`,
      video: {
        id: "nMhp8UFr_Ig",
        titulo: "La Segunda República española (1931-1936): resumen",
        canal: "La cuna de Halicarnaso",
        vistas: 436794,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.9 La Constitución de 1931</h3><table class="tb"><thead><tr><th>Aspecto</th><th>Qué establecía</th></tr></thead><tbody><tr><td>Estado</td><td>república democrática «de trabajadores de toda clase»; soberanía popular</td></tr><tr><td>Poderes</td><td>Cortes unicamerales; presidente de la República elegido por 6 años; Tribunal de Garantías Constitucionales</td></tr><tr><td>Sufragio</td><td>universal: por primera vez votan las mujeres (desde 1933)</td></tr><tr><td>Religión</td><td>Estado laico; separación Iglesia-Estado; matrimonio civil y divorcio</td></tr><tr><td>Territorio</td><td>Estado integral que permitía autonomías (Cataluña, 1932)</td></tr><tr><td>Derechos</td><td>amplios derechos y libertades; posibilidad de expropiar tierras con indemnización</td></tr></tbody></table><p>Aprobada en diciembre de 1931, fue la <mark>constitución más democrática</mark> de la historia de España hasta entonces. El <b>voto femenino</b> se aprobó gracias a la diputada <b>Clara Campoamor</b>, del Partido Radical, frente a la oposición de buena parte de la izquierda, incluida Victoria Kent, que temía que las mujeres votaran a la derecha por influencia de la Iglesia. Su punto más polémico fue la cuestión religiosa: el artículo 26 prohibía a las órdenes religiosas dedicarse a la enseñanza y disolvía a los jesuitas, lo que provocó la dimisión de Alcalá-Zamora y Maura. Alcalá-Zamora fue elegido presidente de la República y Manuel Azaña, jefe del Gobierno.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Constitución de 1931: Sufragio, Religión, Territorio, Derechos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Constitución de 1931</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Sufragio</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >universal: votan</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >las mujeres</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Religión</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >Estado laico,</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >divorcio</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Territorio</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >Estado integral</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >con autonomías</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Derechos</text><text x="192" y="139.0" text-anchor="middle" font-size="10" >amplios; función</text><text x="192" y="150.5" text-anchor="middle" font-size="10" >social de la</text><text x="192" y="162.0" text-anchor="middle" font-size="10" >propiedad</text></g></svg>`,
    },
    {
      html: `<h3>1.10 El bienio reformista (1931-1933)</h3><p>El Gobierno de <b>Manuel Azaña</b>, con republicanos de izquierda y socialistas, emprendió grandes reformas para modernizar el país. La <b>reforma agraria</b> (1932) quería dar tierra a los jornaleros de los latifundios del sur mediante la expropiación con indemnización; pero fue lenta, burocrática y sin dinero suficiente, y en 1933 apenas se habían asentado unos miles de familias. Frustró a los campesinos y enfureció a los terratenientes.</p><p>La <b>reforma educativa</b> fue la más celebrada: se construyeron unas 10 000 escuelas, se contrataron miles de maestros y las <b>Misiones Pedagógicas</b> llevaron bibliotecas, cine, teatro y museos ambulantes a los pueblos más aislados. La <b>reforma militar</b> de Azaña redujo el exceso de oficiales ofreciendo el retiro con sueldo completo y cerró la Academia de Zaragoza, que dirigía Franco. El ministro socialista Largo Caballero aprobó leyes laborales: jurados mixtos, jornada de ocho horas en el campo, seguros. El <b>Estatuto de Cataluña</b> (1932) dio autonomía a esa región.</p><p>Las reformas ilusionaron a muchos, pero levantaron fuerte oposición: en agosto de 1932 el general Sanjurjo intentó un golpe en Sevilla, y en el otro extremo los anarquistas organizaron insurrecciones, como la de Casas Viejas (1933), cuya dura represión dañó al Gobierno.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las reformas del bienio reformista: Agraria, Educativa, Militar, Religiosa, Autonómica, Laboral"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Las reformas del bienio reformista</text><rect x="10.0" y="28.0" width="74.7" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="47.333333333333336" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Agraria</text><text x="47.333333333333336" y="64.8" text-anchor="middle" font-size="9" >tierra para</text><text x="47.333333333333336" y="75.2" text-anchor="middle" font-size="9" >los</text><text x="47.333333333333336" y="85.5" text-anchor="middle" font-size="9" >jornaleros</text><rect x="92.7" y="28.0" width="74.7" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Educativa</text><text x="130" y="70.0" text-anchor="middle" font-size="9" >escuelas y</text><text x="130" y="80.3" text-anchor="middle" font-size="9" >Misiones</text><rect x="175.3" y="28.0" width="74.7" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="212.66666666666669" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Militar</text><text x="212.66666666666669" y="59.6" text-anchor="middle" font-size="9" >menos</text><text x="212.66666666666669" y="70.0" text-anchor="middle" font-size="9" >oficiales,</text><text x="212.66666666666669" y="80.3" text-anchor="middle" font-size="9" >ejército</text><text x="212.66666666666669" y="90.7" text-anchor="middle" font-size="9" >profesional</text><rect x="10.0" y="103.0" width="74.7" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="47.333333333333336" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Religiosa</text><text x="47.333333333333336" y="150.2" text-anchor="middle" font-size="9" >Estado laico</text><rect x="92.7" y="103.0" width="74.7" height="67.0" rx="9" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="130" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--inf)">Autonómica</text><text x="130" y="145.0" text-anchor="middle" font-size="9" >Estatuto de</text><text x="130" y="155.3" text-anchor="middle" font-size="9" >Cataluña</text><rect x="175.3" y="103.0" width="74.7" height="67.0" rx="9" fill="var(--card)" stroke="var(--soc, #c2410c)" stroke-width="2"/><text x="212.66666666666669" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--soc, #c2410c)">Laboral</text><text x="212.66666666666669" y="139.8" text-anchor="middle" font-size="9" >jurados</text><text x="212.66666666666669" y="150.2" text-anchor="middle" font-size="9" >mixtos y</text><text x="212.66666666666669" y="160.5" text-anchor="middle" font-size="9" >derechos</text></g></svg>`,
    },
    {
      html: `<h3>1.11 El bienio radical-cedista y la revolución de 1934</h3><p>En las elecciones de noviembre de 1933, las primeras en las que votaron las mujeres, la izquierda se presentó dividida y los anarquistas pidieron la abstención. Ganaron el centro y la derecha: el <b>Partido Radical</b> de Alejandro Lerroux y la <b>CEDA</b> (Confederación Española de Derechas Autónomas) de José María Gil-Robles, un partido católico de masas que no se declaraba claramente republicano. Lerroux formó gobierno con el apoyo de la CEDA.</p><p>Fue el <mark>bienio radical-cedista</mark> o conservador (1933-1935). Se frenaron o anularon muchas reformas: se paralizó la reforma agraria, se devolvieron tierras, se amnistió a los golpistas de Sanjurjo y se mejoraron las relaciones con la Iglesia.</p><p>En octubre de 1934 la entrada de tres ministros de la CEDA en el Gobierno fue vista por la izquierda como el preludio del fascismo, como había ocurrido en Austria y Alemania. Socialistas y otras fuerzas convocaron una huelga general revolucionaria. En <b>Asturias</b>, mineros socialistas, anarquistas y comunistas protagonizaron una auténtica insurrección durante dos semanas, aplastada por el ejército dirigido desde Madrid por el general Franco, con más de un millar de muertos y miles de presos. En Cataluña, Companys proclamó el «Estado catalán», y el Estatuto quedó suspendido. Después, los escándalos de corrupción hundieron al Partido Radical.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Etapas de la Segunda República">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--bac)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1931</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">proclamación</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Constitución</text><circle cx="98" cy="90" r="7" fill="var(--bac)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1933</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">gana la</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">derecha</text><circle cx="162" cy="90" r="7" fill="var(--bac)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1934</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">revolución</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">de Asturias</text><circle cx="226" cy="90" r="7" fill="var(--bac)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1936</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Frente Popular</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">y golpe</text>
  </svg>`,
    },
    {
      html: `<h3>1.12 El Frente Popular y el camino hacia la guerra</h3><p>Para las elecciones de <b>febrero de 1936</b> la izquierda se unió en el <mark>Frente Popular</mark> (republicanos de izquierda, socialistas, comunistas y otros), con un programa de amnistía y vuelta a las reformas; esta vez muchos anarquistas votaron. Ganó por un margen estrecho en votos, pero amplio en escaños. Azaña volvió al Gobierno y fue elegido presidente de la República en mayo; Casares Quiroga pasó a ser jefe del Gobierno.</p><p>Se amnistió a los presos de 1934, se restableció el Estatuto de Cataluña y se aceleró la reforma agraria, mientras los jornaleros ocupaban fincas en Extremadura. Pero la sociedad estaba muy <b>polarizada</b>. Una parte de la izquierda, como el sector de Largo Caballero, hablaba de revolución, y una parte de la derecha ya no creía en la República. La violencia política creció en las calles, con atentados de pistoleros de Falange, el partido fascista español fundado por José Antonio Primo de Rivera en 1933, y de grupos de izquierda, huelgas y quema de iglesias.</p><p>Desde marzo, un grupo de generales, coordinados por el general <b>Mola</b>, preparaba un golpe de Estado. El 13 de julio fue asesinado el líder monárquico José Calvo Sotelo por policías y militantes socialistas, en venganza por la muerte de un teniente de izquierdas. Cinco días después comenzaba el golpe que desembocó en la Guerra Civil.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Elecciones de febrero de 1936: Frente Popular frente a Derechas"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Elecciones de febrero de 1936</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Frente Popular</text><text x="67" y="66.6" text-anchor="middle" font-size="9.5" >republicanos de</text><text x="67" y="77.5" text-anchor="middle" font-size="9.5" >izquierda</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >socialistas</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >comunistas</text><text x="67" y="160.6" text-anchor="middle" font-size="9.5" >voto anarquista</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Derechas</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >CEDA</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >monárquicos</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >tradicionalistas</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >otros</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "De Alfonso XIII a la Guerra Civil",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo de 1902 a 1936">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <path d="M30 100 H 650" stroke="var(--line)" stroke-width="4"/>
    <rect x="40" y="92" width="280" height="16" rx="8" fill="var(--muted)" opacity=".75"/><text x="180" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">crisis de la Restauración</text><rect x="320" y="92" width="130" height="16" rx="8" fill="var(--ink)" opacity=".75"/><text x="385" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">dictadura</text><rect x="460" y="92" width="180" height="16" rx="8" fill="var(--bac)" opacity=".75"/><text x="550" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text>
    <path d="M40 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="40" cy="100" r="5" fill="var(--ink)"/><text x="40" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1902</text><text x="20" y="54" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">reina Alfonso XIII</text><path d="M120 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="120" cy="100" r="5" fill="var(--ink)"/><text x="120" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1909</text><text x="120" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Semana Trágica</text><path d="M200 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="200" cy="100" r="5" fill="var(--ink)"/><text x="200" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1917</text><text x="200" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">crisis de 1917</text><path d="M260 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="260" cy="100" r="5" fill="var(--ink)"/><text x="260" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1921</text><text x="260" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Annual</text><path d="M320 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="320" cy="100" r="5" fill="var(--ink)"/><text x="320" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1923</text><text x="320" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">golpe de Primo de Rivera</text><path d="M460 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="460" cy="100" r="5" fill="var(--ink)"/><text x="460" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1931</text><text x="460" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">II República</text><path d="M560 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="560" cy="100" r="5" fill="var(--ink)"/><text x="560" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1933</text><text x="560" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">votan las mujeres</text><path d="M640 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="640" cy="100" r="5" fill="var(--ink)"/><text x="640" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1936</text><text x="660" y="182" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Frente Popular</text>
  </svg>`,
  },
  video: {
    id: "OZirgERQ2qc",
    titulo: "La Segunda República en 10 minutos",
    canal: "Memorias de Pez",
    vistas: 2042804,
    megusta: 48481,
    busqueda: "España primer tercio siglo XX segunda república resumen",
  },
  ejemplos: [
    {
      enunciado: "Explica por qué la dictadura de Primo de Rivera arrastró a la monarquía.",
      pasos: [
        "Alfonso XIII aceptó el golpe de 1923 y la dictadura.",
        "Cuando la dictadura fracasó, muchos culparon también al rey.",
        "En las elecciones municipales de abril de 1931 ganaron los republicanos en las ciudades.",
        "El rey se marchó y se proclamó la República el 14 de abril.",
      ],
      resultado: "Al apoyar una dictadura, el rey perdió la legitimidad de la monarquía constitucional.",
    },
    {
      enunciado: `Ordena: Annual, Semana Trágica, proclamación de la República, golpe de Primo de Rivera, revolución de Asturias.`,
      pasos: [
        "Semana Trágica: 1909.",
        "Annual: 1921.",
        "Golpe de Primo de Rivera: 1923.",
        "República: 1931.",
        "Asturias: 1934.",
      ],
      resultado: "1909 → 1921 → 1923 → 1931 → 1934.",
    },
    {
      enunciado: "¿Por qué la reforma agraria creó tantos enemigos y tantas frustraciones?",
      pasos: [
        "Los terratenientes se oponían a perder tierras.",
        "Los jornaleros esperaban tierra rápido, pero el reparto fue lento y escaso.",
        "Había poco dinero para indemnizar.",
      ],
      resultado: `Molestó a los propietarios y decepcionó a los campesinos, lo que aumentó la tensión social.`,
    },
    {
      enunciado: `Explica por qué las elecciones municipales del 12 de abril de 1931 acabaron con la monarquía, si los monárquicos sacaron más concejales.`,
      pasos: [
        `Recuento global: los monárquicos ganaron más concejales gracias a los pueblos pequeños, controlados por caciques.`,
        `Ciudades: en 41 de las 50 capitales de provincia ganaron republicanos y socialistas, con voto más libre.`,
        `Interpretación: se vio como un plebiscito sobre la monarquía, no como unas simples elecciones locales.`,
        "Reacción: multitudes en la calle, el ejército no quiso intervenir y el rey se marchó.",
      ],
      resultado: `El voto urbano, más libre, demostró que el rey había perdido el apoyo de la opinión pública, y la monarquía cayó sin violencia.`,
    },
    {
      enunciado: "Compara el bienio reformista y el bienio radical-cedista.",
      pasos: [
        `Gobiernos: Azaña con republicanos de izquierda y socialistas / Lerroux con apoyo de la CEDA.`,
        "Reforma agraria: se aprueba (1932) / se paraliza y se devuelven tierras.",
        "Iglesia: Estado laico y conflicto / mejora de relaciones.",
        "Conflictos: golpe de Sanjurjo y Casas Viejas / revolución de Asturias de 1934.",
      ],
      resultado: `Fueron dos proyectos opuestos: el primero impulsó reformas profundas y el segundo las frenó, lo que aumentó la polarización.`,
    },
    {
      enunciado: "Analiza la votación del voto femenino (1 de octubre de 1931): 161 a favor y 121 en contra.",
      pasos: [
        `A favor: socialistas en su mayoría, parte de los radicales (Campoamor), algunos republicanos y la derecha por cálculo.`,
        `En contra: muchos republicanos de izquierda y radicales, que temían el voto conservador de las mujeres.`,
        `Argumento de Campoamor: la igualdad no se concede según lo que se vaya a votar; es un derecho.`,
        "Consecuencia: en 1933 votaron unos 6,8 millones de mujeres.",
      ],
      resultado: `El sufragio femenino se aprobó por 40 votos de diferencia, gracias a una defensa basada en el principio de igualdad.`,
    },
  ],
  errores: [
    `Pensar que la Segunda República llegó por una revolución violenta: llegó tras unas elecciones municipales.`,
    "Creer que las mujeres votaron en España antes de 1933.",
    "Confundir la Semana Trágica (1909) con el desastre de Annual (1921).",
    "Pensar que Primo de Rivera gobernó contra el rey: Alfonso XIII lo apoyó.",
    `Decir que la República solo tuvo gobiernos de izquierdas: entre 1933 y 1935 gobernó el centro-derecha.`,
    `Pensar que la revolución de 1934 fue un golpe de la derecha: fue una insurrección obrera de izquierdas contra la entrada de la CEDA en el Gobierno, reprimida por el ejército.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué fue la Semana Trágica?",
      sol: `La revuelta de Barcelona en 1909 contra el embarque de reservistas a Marruecos, duramente reprimida.`,
    },
    {
      nivel: "básico",
      q: "¿Qué ocurrió en Annual en 1921?",
      sol: `Una gran derrota del ejército español en Marruecos en la que murieron unos 10.000 soldados.`,
    },
    {
      nivel: "básico",
      q: "¿Cómo se proclamó la Segunda República?",
      sol: `Tras ganar los republicanos las elecciones municipales en las ciudades el 12 de abril de 1931; el 14 se proclamó la República y el rey se exilió.`,
    },
    {
      nivel: "básico",
      q: "¿Quién fue Clara Campoamor?",
      sol: "Diputada que defendió en las Cortes el voto femenino, aprobado en 1931.",
    },
    {
      nivel: "básico",
      q: "¿Qué fueron las Misiones Pedagógicas?",
      sol: "Un proyecto de la República que llevaba bibliotecas, cine, teatro y música a los pueblos.",
    },
    {
      nivel: "básico",
      q: "¿Cuándo empezó a reinar Alfonso XIII y cuándo se fue de España?",
      sol: `Empezó a reinar en 1902, al cumplir 16 años, y se marchó en abril de 1931, tras la proclamación de la Segunda República.`,
    },
    {
      nivel: "básico",
      q: "¿Qué era la Mancomunidad de Cataluña?",
      sol: `Un organismo creado en 1914 que agrupaba a las cuatro diputaciones catalanas, presidido por Prat de la Riba. Creó escuelas, bibliotecas, carreteras y teléfonos. Primo de Rivera la disolvió en 1925.`,
    },
    {
      nivel: "básico",
      q: "¿Qué diferencia había entre la UGT y la CNT?",
      sol: `La UGT era socialista, ligada al PSOE, y prefería la negociación y la acción política. La CNT era anarquista, rechazaba la política y defendía la acción directa y la huelga general.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el Pacto de San Sebastián?",
      sol: `El acuerdo de agosto de 1930 entre republicanos, socialistas y nacionalistas para acabar con la monarquía y proclamar la República.`,
    },
    {
      nivel: "básico",
      q: "¿Quiénes fueron las primeras diputadas de las Cortes españolas?",
      sol: "Clara Campoamor, Victoria Kent y Margarita Nelken, elegidas en 1931.",
    },
    {
      nivel: "básico",
      q: "¿Qué era la CEDA y quién la dirigía?",
      sol: `La Confederación Española de Derechas Autónomas, un gran partido católico y conservador dirigido por José María Gil-Robles.`,
    },
    {
      nivel: "básico",
      q: "¿Qué ocurrió en Casas Viejas en 1933?",
      sol: `Una insurrección anarquista en esta aldea de Cádiz fue reprimida por la Guardia de Asalto, que mató a una veintena de campesinos, algunos ejecutados tras rendirse. El escándalo debilitó al Gobierno de Azaña.`,
    },
    {
      nivel: "básico",
      q: "¿Quién fue el primer presidente de la Segunda República?",
      sol: "Niceto Alcalá-Zamora, presidente de 1931 a 1936; después lo fue Manuel Azaña.",
    },
    {
      nivel: "medio",
      q: "Cita los tres aspectos de la crisis de 1917.",
      sol: `Militar (Juntas de Defensa), política (Asamblea de Parlamentarios) y social (huelga general).`,
    },
    {
      nivel: "medio",
      q: "¿Cómo terminó la guerra de Marruecos?",
      sol: `Con el desembarco de Alhucemas (1925), en colaboración con Francia, y la rendición de Abd el-Krim.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué cayó Primo de Rivera?",
      sol: `Por la crisis económica de 1929, la oposición de estudiantes, intelectuales y políticos, y la pérdida del apoyo del rey y del ejército.`,
    },
    {
      nivel: "medio",
      q: "Cita tres novedades de la Constitución de 1931.",
      sol: "Voto de la mujer, Estado laico y posibilidad de autonomías regionales.",
    },
    {
      nivel: "medio",
      q: "¿Qué era el Frente Popular?",
      sol: "La coalición de partidos de izquierda que ganó las elecciones de febrero de 1936.",
    },
    {
      nivel: "medio",
      q: "¿Por qué la guerra de Marruecos era tan impopular entre las clases trabajadoras?",
      sol: `Porque los ricos podían librarse del servicio militar pagando una cuota o un sustituto, de modo que iban a la guerra y morían sobre todo hijos de obreros y campesinos, en un conflicto lejano que no entendían.`,
    },
    {
      nivel: "medio",
      q: "Explica por qué fracasó la crisis de 1917 como intento de cambiar el sistema.",
      sol: `Porque sus tres protagonistas (militares, parlamentarios y obreros) tenían objetivos distintos y no se unieron. Los militares obtuvieron sus mejoras y ayudaron a reprimir la huelga; la Lliga se asustó de la revolución obrera y entró en el Gobierno.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué la dictadura de Primo de Rivera arrastró a la monarquía?",
      sol: `Porque Alfonso XIII apoyó el golpe y gobernó con el dictador durante siete años, rompiendo la Constitución. Cuando la dictadura cayó, muchos culparon al rey, incluso políticos monárquicos, que se pasaron a la República.`,
    },
    {
      nivel: "medio",
      q: "Explica qué fueron las Misiones Pedagógicas.",
      sol: `Un proyecto de la República (1931-1936), dirigido por Manuel Bartolomé Cossío, que llevó a los pueblos más aislados bibliotecas, cine, teatro (La Barraca de Lorca colaboró en esa línea), música y copias de cuadros del Prado, para acercar la cultura a la población rural.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué fracasó la reforma agraria de 1932?",
      sol: `Era lenta y burocrática, el Estado tenía poco dinero para indemnizar, exigía elaborar un inventario de fincas y los terratenientes la obstaculizaron. En 1933 apenas se habían asentado unos miles de familias, y el gobierno siguiente la paralizó.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue el golpe de Sanjurjo (la Sanjurjada)?",
      sol: `Un intento de golpe de Estado del general Sanjurjo en Sevilla en agosto de 1932 contra las reformas de Azaña. Fracasó en un día; Sanjurjo fue condenado, pero el gobierno radical-cedista lo amnistió.`,
    },
    {
      nivel: "medio",
      q: "¿Qué era Falange Española y quién la fundó?",
      sol: `El partido fascista español, fundado en 1933 por José Antonio Primo de Rivera, hijo del dictador. Fue minoritario hasta la guerra, cuando creció mucho y se convirtió en la base del partido único de Franco.`,
    },
    {
      nivel: "medio",
      q: "Explica por qué en 1936 la sociedad española estaba polarizada.",
      sol: `Porque izquierdas y derechas tenían proyectos opuestos y cada vez menos confianza en la democracia: parte de la izquierda hablaba de revolución y parte de la derecha de golpe; la violencia callejera entre falangistas y militantes de izquierda, las ocupaciones de tierras, las huelgas y los asesinatos políticos alimentaban el miedo mutuo.`,
    },
    {
      nivel: "avanzado",
      q: `Comenta esta frase de Clara Campoamor en las Cortes (1931): «No cometáis un error histórico que no tendréis nunca bastante tiempo para llorar». ¿A quién se dirigía y qué defendía?`,
      sol: `Clasifica: discurso político parlamentario. Se dirigía a los diputados, sobre todo de izquierda, que querían aplazar o negar el voto a la mujer por miedo a que votara a la derecha. Defendía que la igualdad de derechos es un principio que no se puede condicionar a lo que se espera que vote un grupo; negarlo sería contradecir los valores de la República. Ganó la votación (161-121).`,
    },
    {
      nivel: "avanzado",
      q: "¿Fue la dictadura de Primo de Rivera una dictadura fascista? Argumenta.",
      sol: `Tuvo rasgos parecidos (partido único, Unión Patriótica; censura; antiparlamentarismo; inspiración en Mussolini), pero no fue totalitaria: no tuvo una ideología movilizadora de masas, ni un partido con milicias, ni un control total de la sociedad; fue una dictadura militar conservadora, apoyada por el rey, que pretendía ser temporal.`,
    },
    {
      nivel: "avanzado",
      q: "Valora la Constitución de 1931: dos aspectos avanzados y dos polémicos.",
      sol: `Avanzados: sufragio universal con voto femenino; amplios derechos, divorcio y Estado integral con autonomías. Polémicos: el artículo 26, que limitaba a las órdenes religiosas y disolvía a los jesuitas, enfrentó a la República con los católicos; la posibilidad de expropiar propiedades asustó a propietarios. Fue aprobada por una mayoría de izquierdas sin consenso con la derecha.`,
    },
    {
      nivel: "avanzado",
      q: `Explica la cadena de acontecimientos entre las elecciones de noviembre de 1933 y la revolución de octubre de 1934.`,
      sol: `Gana el centro-derecha (Radical y CEDA) porque la izquierda va dividida y los anarquistas se abstienen; Lerroux gobierna con apoyo de la CEDA y frena las reformas; en octubre de 1934 tres ministros de la CEDA entran en el Gobierno; la izquierda lo interpreta como un paso hacia el fascismo y convoca huelga general revolucionaria; en Asturias se convierte en insurrección, reprimida por el ejército.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué fracasó la Segunda República? Ordena las causas según tu criterio y justifica.",
      sol: `Respuesta argumentada. Causas: contexto internacional de crisis y auge de los totalitarismos; crisis económica de 1929; reformas profundas que chocaron con grupos poderosos (terratenientes, Iglesia, ejército); radicalización de izquierdas y derechas y violencia política; falta de consenso constitucional; y, sobre todo, el golpe militar de julio de 1936, que la destruyó por la fuerza.`,
    },
    {
      nivel: "avanzado",
      q: `Imagina que eres maestra de una escuela rural en 1932. Escribe una carta describiendo tu trabajo y las reformas de la República.`,
      sol: `Debe mencionar: la construcción de nuevas escuelas y la contratación de maestros; la llegada de las Misiones Pedagógicas (biblioteca, cine); la enseñanza laica y mixta; el analfabetismo de los adultos; las tensiones en el pueblo entre partidarios y enemigos de las reformas (terratenientes, párroco); la ilusión y las dificultades materiales.`,
    },
  ],
  quiz: [
    {
      q: "¿Qué fue el desastre de Annual (1921)?",
      o: [
        "Una huelga general",
        "Una victoria en Cuba",
        "Una gran derrota del ejército español en Marruecos",
        "Unas elecciones fraudulentas",
      ],
      a: 2,
      e: "Murieron miles de soldados y el escándalo debilitó al rey y al gobierno.",
    },
    {
      q: "¿Quién dio el golpe de Estado de 1923?",
      o: ["José Antonio Primo de Rivera", "Francisco Franco", "Miguel Primo de Rivera", "Manuel Azaña"],
      a: 2,
      e: "Primo de Rivera gobernó como dictador con el apoyo de Alfonso XIII hasta 1930.",
    },
    {
      q: "¿Cuándo se proclamó la Segunda República?",
      o: ["14 de abril de 1931", "18 de julio de 1936", "6 de diciembre de 1978", "6 de diciembre de 1931"],
      a: 0,
      e: `Tras las elecciones municipales del 12 de abril, en las que ganaron los republicanos en las ciudades.`,
    },
    {
      q: "¿Quién defendió el voto femenino en las Cortes?",
      o: ["Clara Campoamor", "Dolores Ibárruri", "Margarita Nelken", "Victoria Kent"],
      a: 0,
      e: "Clara Campoamor logró que la Constitución de 1931 reconociera el sufragio femenino.",
    },
    {
      q: "El bienio reformista se caracterizó por…",
      o: [
        "frenar las reformas",
        "devolver el poder al rey",
        "reformas agraria, educativa, militar y religiosa",
        "una dictadura militar",
      ],
      a: 2,
      e: "El gobierno de Azaña quiso modernizar España con reformas profundas.",
    },
    {
      q: "La Semana Trágica ocurrió en…",
      o: ["Sevilla, 1932", "Barcelona, 1909", "Madrid, 1917", "Asturias, 1934"],
      a: 1,
      e: "Por el embarque de reservistas a Marruecos.",
    },
    {
      q: "El desembarco de Alhucemas fue en…",
      o: ["1921", "1925", "1931", "1927"],
      a: 1,
      e: "Puso fin a la guerra del Rif.",
    },
    {
      q: "La Segunda República se proclamó el…",
      o: ["14 de abril de 1931", "18 de julio de 1936", "1 de octubre de 1931", "6 de diciembre de 1978"],
      a: 0,
      e: "Tras las elecciones municipales.",
    },
    {
      q: "La CEDA era un partido…",
      o: ["de derechas", "monárquico absolutista", "anarquista", "comunista"],
      a: 0,
      e: "Su líder era Gil Robles.",
    },
    {
      q: "La revolución de 1934 fue más fuerte en…",
      o: ["Navarra", "Asturias", "Valencia", "Galicia"],
      a: 1,
      e: "Los mineros se levantaron y el ejército la aplastó.",
    },
    {
      q: "La CNT se fundó en…",
      o: ["1879", "1888", "1910", "1931"],
      a: 2,
      e: "Era el sindicato anarquista, el más numeroso.",
    },
    {
      q: "La Mancomunidad de Cataluña se creó en…",
      o: ["1902", "1914", "1923", "1932"],
      a: 1,
      e: "Agrupaba las cuatro diputaciones catalanas.",
    },
    {
      q: "¿Qué pedagogo fue fusilado tras la Semana Trágica?",
      o: ["Giner de los Ríos", "Ferrer i Guàrdia", "Cossío", "Unamuno"],
      a: 1,
      e: "Su ejecución provocó protestas internacionales.",
    },
    {
      q: "El líder rifeño que derrotó a España en Annual fue…",
      o: ["Abd el-Krim", "Saladino", "Mohamed V", "Abd el-Kader"],
      a: 0,
      e: "Proclamó una república del Rif.",
    },
    {
      q: "España en la Primera Guerra Mundial fue…",
      o: ["aliada de Alemania", "aliada de Francia", "neutral", "invadida"],
      a: 2,
      e: "Vendió productos a ambos bandos.",
    },
    {
      q: "El partido único de Primo de Rivera se llamó…",
      o: ["Falange", "Unión Patriótica", "CEDA", "Lliga"],
      a: 1,
      e: "Creado para apoyar la dictadura.",
    },
    {
      q: "Las elecciones que trajeron la República fueron…",
      o: ["generales de 1931", "municipales del 12 de abril de 1931", "un referéndum", "las de 1933"],
      a: 1,
      e: "Los republicanos ganaron en las ciudades.",
    },
    {
      q: "¿Quién presidió el Gobierno en el bienio reformista?",
      o: ["Lerroux", "Azaña", "Gil-Robles", "Alcalá-Zamora"],
      a: 1,
      e: "Manuel Azaña, republicano de izquierda.",
    },
    {
      q: "¿Qué general reprimió la revolución de Asturias de 1934?",
      o: ["Mola", "Franco", "Sanjurjo", "Queipo de Llano"],
      a: 1,
      e: "La dirigió desde Madrid como asesor del ministro de la Guerra.",
    },
    {
      q: "¿Quién fue asesinado el 13 de julio de 1936?",
      o: ["Azaña", "Calvo Sotelo", "Largo Caballero", "José Antonio"],
      a: 1,
      e: "Líder monárquico; su muerte precipitó el golpe.",
    },
  ],
  examen: [
    {
      q: "La crisis de 1917 juntó…",
      o: [
        "una protesta militar, una asamblea de parlamentarios y una huelga general",
        "una guerra con Francia y una epidemia",
        "la abdicación del rey y un golpe",
        "una epidemia de gripe y una sequía",
      ],
      a: 0,
      e: "Tres desafíos simultáneos mostraron que el sistema de la Restauración estaba agotado.",
    },
    {
      q: "¿Qué coalición ganó las elecciones de febrero de 1936?",
      o: ["La CEDA", "El Frente Popular", "El Partido Radical", "La Unión Patriótica"],
      a: 1,
      e: "Fue una alianza de partidos de izquierda republicana, socialistas y comunistas.",
    },
    {
      q: "La Constitución de 1931 definía el Estado como…",
      o: ["confesional católico", "federal", "laico", "monárquico"],
      a: 2,
      e: "Separó la Iglesia y el Estado, aprobó el divorcio y el matrimonio civil.",
    },
    {
      q: "El «cirujano de hierro» que prometía regenerar España en 1923 fue…",
      o: ["Maura", "Primo de Rivera", "Azaña", "Franco"],
      a: 1,
      e: "Dio el golpe del 13 de septiembre.",
    },
    {
      q: "El desembarco de Alhucemas lo hizo España en colaboración con…",
      o: ["Gran Bretaña", "Francia", "Italia", "Estados Unidos"],
      a: 1,
      e: "Derrotó a Abd el-Krim en 1925.",
    },
    {
      q: "Las mujeres votaron por primera vez en unas generales en…",
      o: ["1931", "1933", "1936", "1977"],
      a: 1,
      e: "En noviembre de 1933.",
    },
    {
      q: "La reforma educativa de la República construyó aproximadamente…",
      o: ["100 escuelas", "1 000 escuelas", "10 000 escuelas", "100 000 escuelas"],
      a: 2,
      e: "Y contrató miles de maestros.",
    },
    {
      q: "Falange Española fue fundada por…",
      o: ["Gil-Robles", "José Antonio Primo de Rivera", "Calvo Sotelo", "Lerroux"],
      a: 1,
      e: "En 1933, inspirada en el fascismo.",
    },
  ],
  feynman: [
    "Los cuatro grandes problemas de la Restauración",
    "Qué hizo Primo de Rivera y por qué cayó",
    "Las principales novedades de la Constitución de 1931",
    "Las tres etapas de la Segunda República",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: ESPAÑA 1902-1936">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">ESPAÑA 1902-1936</text>
      <rect x="5" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--muted)">Alfonso XIII</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">1909 · 1917 · Annual</text><rect x="425" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--ink)">Primo de Rivera</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">dictadura 1923-1930</text><rect x="5" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--bac)">II República</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Constitución 1931 · voto mujer</text><rect x="425" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--red)">Etapas</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">reformas · conservador · F. Popular</text>
    </g></svg>`,
  tarjetas: [
    ["Semana Trágica", "1909, Barcelona: protesta contra el envío de reservistas a Marruecos."],
    ["Dictadura de Primo de Rivera", "1923-1930, con el apoyo de Alfonso XIII."],
    ["14 de abril de 1931", "Proclamación de la Segunda República."],
    ["Primeras elecciones generales con voto femenino", "Noviembre de 1933."],
    ["Frente Popular", "Coalición de izquierdas que ganó en febrero de 1936."],
    ["Annual (1921)", "Gran derrota española en Marruecos."],
    ["Constitución de 1931", "Voto femenino, Estado laico y autonomías."],
    ["Frente Popular", "Coalición de izquierdas ganadora en febrero de 1936."],
    [
      "Crisis de 1917",
      `Protesta militar (Juntas), política (Asamblea de Parlamentarios) y social (huelga general).`,
    ],
    [
      "Pacto de San Sebastián",
      "Acuerdo de 1930 de republicanos, socialistas y nacionalistas para traer la República.",
    ],
    [
      "Bienio reformista",
      "1931-1933: Azaña aprueba reformas agraria, educativa, militar, religiosa y autonómica.",
    ],
    ["Revolución de Asturias", "Insurrección obrera de octubre de 1934, aplastada por el ejército."],
  ],
  glosario: [
    ["Protectorado de Marruecos", "Zona del norte de Marruecos bajo control español desde 1912."],
    ["Semana Trágica", "Revuelta de Barcelona de 1909 contra el envío de reservistas a Marruecos."],
    ["Desastre de Annual", "Derrota española en el Rif en 1921, con unos 10 000 muertos."],
    ["Juntas de Defensa", "Asociaciones de oficiales que protestaron en 1917."],
    ["Pistolerismo", "Violencia entre pistoleros de la patronal y anarquistas en Barcelona (1918-1923)."],
    ["Directorio", "Gobierno de la dictadura de Primo de Rivera, primero militar y luego civil."],
    ["Pacto de San Sebastián", "Acuerdo de 1930 para traer la República."],
    ["Gobierno provisional", "Gobierno que dirigió la República hasta la aprobación de la Constitución."],
    ["Estado integral", "Modelo de la Constitución de 1931 que permitía autonomías regionales."],
    ["Estado laico", "Estado sin religión oficial, separado de la Iglesia."],
    ["Reforma agraria", "Ley de 1932 para repartir tierras de los latifundios entre los jornaleros."],
    ["Misiones Pedagógicas", "Proyecto cultural republicano que llevó libros, cine y teatro a los pueblos."],
    ["CEDA", "Confederación Española de Derechas Autónomas, partido católico conservador."],
    ["Frente Popular", "Coalición de izquierdas que ganó las elecciones de 1936."],
    ["Falange", "Partido fascista español fundado en 1933."],
    ["Polarización", "División de la sociedad en dos bloques enfrentados y cada vez más radicales."],
  ],
  situacion: {
    titulo: "Un aula de 1932",
    reto: `El centro prepara una exposición sobre la historia de la educación en España. Vuestro grupo reconstruirá cómo era una escuela rural de la Segunda República y comparará sus objetivos con los de la escuela actual.`,
    pasos: [
      `Investigad la reforma educativa republicana: escuelas construidas, maestros, enseñanza laica y mixta, Misiones Pedagógicas.`,
      `Buscad fotografías de escuelas y de las Misiones Pedagógicas en archivos digitales y elegid tres para comentar.`,
      "Si es posible, entrevistad a una persona mayor sobre la escuela de sus padres o abuelos.",
      `Elaborad una tabla comparativa: escuela de 1900, de 1932 y de hoy (alumnos por aula, materiales, quién podía estudiar, contenidos).`,
      `Montad un rincón expositivo (o una presentación digital) con imágenes comentadas, la tabla y un texto de conclusiones.`,
    ],
    producto: `Un rincón expositivo o presentación digital sobre la escuela republicana con comparación con la actual.`,
    evaluacion: [
      "Comprensión de las reformas de la República y de su contexto.",
      "Análisis riguroso de fuentes visuales y orales.",
      "Calidad de la comparación entre épocas.",
      "Presentación clara, cuidada y con fuentes citadas.",
    ],
  },
  familias: [
    `Preguntad a los mayores si en la familia se recuerda alguna escuela construida en los años 30.`,
    "Buscad juntos quién fue Clara Campoamor y si hay una calle con su nombre cerca.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: crisis de la Restauración, dictadura y Segunda República; conquista de derechos y memoria democrática (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      "Leer el debate Campoamor-Kent sobre el voto femenino (1931).",
      "Comparar artículos de la Constitución de 1876 y de 1931.",
      "Mapa de las misiones pedagógicas y escuelas creadas en 1931-1933.",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    {
      t: "Segunda República española, Wikipedia en español",
      url: "https://es.wikipedia.org/wiki/Segunda_Rep%C3%BAblica_espa%C3%B1ola",
    },
  ],
  revisado: "2026-11-13",
};
