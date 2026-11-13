// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "España en el siglo XIX",
  minutos: 110,
  objetivos: [
    "Explicar la Guerra de la Independencia y la Constitución de Cádiz",
    "Ordenar las etapas políticas del siglo XIX español",
    "Valorar la industrialización española y sus diferencias regionales",
    "Explicar el funcionamiento del sistema de la Restauración",
    "Valorar los cambios sociales de la España del siglo XIX",
  ],
  claves: ["Cortes de Cádiz", "carlismo", "Isabel II", "Sexenio Democrático", "Restauración", "turnismo"],
  pregunta: {
    texto: `En 1812, en una ciudad sitiada por el ejército de Napoleón, un grupo de diputados escribió la primera constitución de España. La llamaron «la Pepa». ¿Por qué tardó tanto en cumplirse?`,
    respuesta: `Porque el siglo XIX español fue una lucha constante entre <mark>absolutistas y liberales</mark>. Fernando VII anuló la Constitución de Cádiz, hubo guerras carlistas, golpes militares (pronunciamientos), una breve república y, al final, la <b>Restauración</b>, un sistema liberal pero poco democrático.`,
  },
  lectura: {
    titulo: "¡Viva la Pepa!",
    html: `<p>Cádiz, 19 de marzo de 1812. La ciudad está sitiada por el ejército francés, que domina casi toda la península. Las bombas caen de vez en cuando sobre las azoteas. Y, sin embargo, ese día las calles se llenan de gente que celebra algo inesperado: en la iglesia de San Felipe Neri, los diputados de las Cortes acaban de aprobar la primera Constitución de España. Como es el día de San José, la llaman cariñosamente «la Pepa».</p><p>Aquel texto decía cosas revolucionarias: que la soberanía residía en la nación y no en el rey, que todos los españoles eran iguales ante la ley y que se podía escribir y publicar sin censura previa. Dos años después, el rey Fernando VII la anuló y persiguió a sus autores. Durante el resto del siglo, gritar «¡Viva la Pepa!» fue una forma de proclamarse liberal.</p><p>La historia de España en el siglo XIX es la de una larga pugna entre quienes querían mantener el Antiguo Régimen y quienes querían un Estado liberal; entre un país que perdía su imperio y otro que intentaba modernizarse. En este tema recorrerás ese siglo agitado, de 1808 a 1898, lleno de guerras, constituciones y pronunciamientos.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 La Guerra de la Independencia (1808-1814)</h3><p>A comienzos del siglo XIX reinaba <b>Carlos IV</b>, aunque gobernaba su valido Manuel Godoy. España era aliada de Napoleón, y en 1805 su flota fue destruida junto a la francesa en Trafalgar. En 1807 se permitió a las tropas francesas atravesar España para invadir Portugal, pero se fueron quedando en las principales ciudades.</p><p>En marzo de 1808 el motín de Aranjuez derribó a Godoy y obligó a Carlos IV a abdicar en su hijo <b>Fernando VII</b>. Napoleón reunió a ambos en Bayona y les obligó a cederle la corona, que entregó a su hermano <b>José I Bonaparte</b>. El <mark>2 de mayo de 1808</mark> el pueblo de Madrid se levantó contra los franceses; la represión fue durísima, como muestran los cuadros de Goya. La revuelta se extendió y empezó la <b>Guerra de la Independencia</b>.</p><p>Fue una guerra a la vez internacional, porque Gran Bretaña ayudó a España y Portugal, y civil, porque algunos españoles, los <b>afrancesados</b>, apoyaron a José I esperando reformas. Destacaron la victoria de <b>Bailén</b> (1808), los sitios de Zaragoza y Girona y la <b>guerrilla</b>, pequeños grupos que hostigaban al invasor. En 1814 los franceses se retiraron y Fernando VII volvió.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bandos en 1808: josefinos y afrancesados frente a patriotas">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--muted)" font-family="Baloo 2, sans-serif">José I</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">afrancesados</text><text x="69" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">ejército francés</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Estatuto de</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Bayona (1808)</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--red)" font-family="Baloo 2, sans-serif">Patriotas</text>
    <text x="191" y="68" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Juntas y guerrilla</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">apoyo británico</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Cortes de Cádiz</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Constitución 1812</text>
  </svg>`,
    },
    {
      html: `<h3>1.2 Las Cortes de Cádiz y la Constitución de 1812</h3><p>Sin rey, en las zonas libres se formaron <b>juntas</b> que asumieron el poder en nombre de Fernando VII y crearon una Junta Central. Esta convocó <mark>Cortes</mark> en Cádiz, la única gran ciudad que resistía protegida por la flota británica. Los diputados, elegidos con dificultad o sustituidos por personas de la región residentes en Cádiz, se reunieron en 1810. En ellas dominaron los <b>liberales</b>, frente a los absolutistas o «serviles».</p><p>El 19 de marzo de 1812 aprobaron la primera Constitución española, <b>«la Pepa»</b>. Establecía la <b>soberanía nacional</b>, la <b>división de poderes</b> (Cortes unicamerales que hacían las leyes, el rey que gobernaba con ministros responsables y tribunales independientes), el <b>sufragio universal masculino indirecto</b>, la igualdad ante la ley y la <b>libertad de imprenta</b>. Declaraba la religión católica como única permitida, una concesión a los diputados eclesiásticos.</p><p>Las Cortes aprobaron además leyes que desmontaban el Antiguo Régimen: abolieron los señoríos jurisdiccionales, la Inquisición y los gremios. Aunque apenas se aplicó, la Constitución de 1812 fue un modelo para liberales de Portugal, Italia y América Latina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lo que decía la Constitución de 1812: Soberanía, Poderes, Sufragio, Derechos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Lo que decía la Constitución de</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1812</text><rect x="10.0" y="42.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="60.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Soberanía</text><text x="68" y="80.3" text-anchor="middle" font-size="10" >reside en la</text><text x="68" y="91.8" text-anchor="middle" font-size="10" >nación</text><rect x="134.0" y="42.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="60.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Poderes</text><text x="192" y="74.5" text-anchor="middle" font-size="10" >Cortes, rey y</text><text x="192" y="86.0" text-anchor="middle" font-size="10" >tribunales</text><text x="192" y="97.5" text-anchor="middle" font-size="10" >separados</text><rect x="10.0" y="110.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="128.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Sufragio</text><text x="68" y="142.5" text-anchor="middle" font-size="10" >universal</text><text x="68" y="154.0" text-anchor="middle" font-size="10" >masculino</text><text x="68" y="165.5" text-anchor="middle" font-size="10" >indirecto</text><rect x="134.0" y="110.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="128.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Derechos</text><text x="192" y="148.3" text-anchor="middle" font-size="10" >igualdad legal e</text><text x="192" y="159.8" text-anchor="middle" font-size="10" >imprenta libre</text></g></svg>`,
    },
    {
      html: `<h3>1.3 La independencia de la América española</h3><p>La crisis de 1808 tuvo un efecto enorme al otro lado del Atlántico. Sin un rey legítimo, los <mark>criollos</mark>, descendientes de españoles nacidos en América, formaron juntas de gobierno en ciudades como Caracas o Buenos Aires (1810). Llevaban tiempo descontentos: dirigían la economía, pero los altos cargos se reservaban a los nacidos en la península, y el comercio con otros países estaba limitado. Además, conocían las ideas ilustradas y el ejemplo de Estados Unidos.</p><p>Lo que empezó como autogobierno se convirtió en lucha por la independencia, sobre todo cuando Fernando VII volvió al absolutismo en 1814 y envió tropas. Dos grandes libertadores dirigieron la guerra: <b>Simón Bolívar</b>, en el norte (Venezuela, Colombia, Ecuador), y <b>José de San Martín</b>, en el sur (Argentina, Chile, Perú). México siguió su propio camino y se independizó en 1821. La batalla de <b>Ayacucho</b> (1824), en Perú, fue la derrota definitiva del ejército realista.</p><p>España solo conservó <b>Cuba, Puerto Rico y Filipinas</b>. Perdió buena parte de sus ingresos y su papel de gran potencia, y la Hacienda quedó arruinada durante décadas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: independencia de la América española"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1810</text><text x="47.35" y="33.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">juntas en</text><text x="47.35" y="44.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Caracas y Buenos</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Aires</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1816</text><text x="79" y="149.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">independencia</text><text x="79" y="160.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">argentina</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1818</text><text x="130" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">Chile, con San</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Martín</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1821</text><text x="181" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">México</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1824</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Ayacucho</text></g></svg>`,
    },
    {
      html: `<h3>1.4 Fernando VII: absolutismo frente a liberalismo (1814-1833)</h3><p>Al volver en 1814, <b>Fernando VII</b>, «el Deseado», anuló la Constitución y todas las leyes de Cádiz, restauró el <b>absolutismo</b> y persiguió a los liberales, muchos de los cuales se exiliaron. Su reinado se divide en tres etapas.</p><p>En el <b>sexenio absolutista</b> (1814-1820) los liberales intentaron recuperar el poder mediante <mark>pronunciamientos</mark>, levantamientos de militares que «se pronunciaban» a favor de un cambio político. En 1820 triunfó el del coronel <b>Riego</b> en Cabezas de San Juan, y el rey tuvo que jurar la Constitución: empezó el <b>Trienio Liberal</b> (1820-1823). Pero en 1823 la Santa Alianza envió un ejército francés, los <b>Cien Mil Hijos de San Luis</b>, que devolvió al rey el poder absoluto. Siguió la <b>Década Ominosa</b> (1823-1833), de dura represión: Riego fue ejecutado y la heroína liberal Mariana Pineda, también.</p><p>Al final de su vida, Fernando VII, que solo tenía hijas, aprobó la <b>Pragmática Sanción</b> para que pudiera reinar su hija Isabel. Su hermano Carlos María Isidro, que esperaba ser rey, no lo aceptó.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Reinado de Fernando VII">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--red)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1814</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">vuelve el</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">absolutismo</text><circle cx="98" cy="90" r="7" fill="var(--red)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1820</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Trienio</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Liberal</text><circle cx="162" cy="90" r="7" fill="var(--red)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1823</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Década</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Ominosa</text><circle cx="226" cy="90" r="7" fill="var(--red)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1833</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">muere: guerra</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">carlista</text>
  </svg>`,
    },
    {
      html: `<h3>1.5 El carlismo y las guerras carlistas</h3><p>A la muerte de Fernando VII (1833) estalló la <mark>primera guerra carlista</mark> (1833-1840). Los <b>carlistas</b>, partidarios de Carlos María Isidro, defendían el absolutismo, la religión católica tradicional y los <b>fueros</b>, las leyes e instituciones propias de territorios como Navarra y el País Vasco. Su lema era «Dios, Patria, Rey». Tenían apoyo en las zonas rurales del País Vasco, Navarra, el Maestrazgo y Cataluña, y entre buena parte del clero.</p><p>Frente a ellos, la regente María Cristina, madre de la niña Isabel II, buscó el apoyo de los <b>liberales</b>, de las ciudades, la burguesía y la mayor parte del ejército. La guerra fue larga y cruel, con generales como Zumalacárregui por el bando carlista y Espartero por el isabelino. Terminó con el <b>Convenio de Vergara</b> (1839), el «abrazo» entre Espartero y el carlista Maroto, que respetó en parte los fueros.</p><p>Hubo otras dos guerras carlistas (1846-1849 y 1872-1876). Tras la última se suprimieron los fueros vascos, aunque se mantuvo un régimen fiscal propio, los conciertos económicos, que aún existe. El carlismo sobrevivió como movimiento político hasta el siglo XX.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Carlistas frente a isabelinos: Carlistas, Isabelinos, Apoyos carlistas, Apoyos isabelinos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Carlistas frente a isabelinos</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Carlistas</text><text x="68" y="64.0" text-anchor="middle" font-size="10" >Dios, Patria, Rey</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >y fueros;</text><text x="68" y="87.0" text-anchor="middle" font-size="10" >absolutismo</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Isabelinos</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >liberales; Estado</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >centralizado</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Apoyos carlistas</text><text x="68" y="139.0" text-anchor="middle" font-size="10" >campo vasco,</text><text x="68" y="150.5" text-anchor="middle" font-size="10" >navarro, catalán;</text><text x="68" y="162.0" text-anchor="middle" font-size="10" >clero</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Apoyos isabelinos</text><text x="192" y="139.0" text-anchor="middle" font-size="10" >ciudades,</text><text x="192" y="150.5" text-anchor="middle" font-size="10" >burguesía,</text><text x="192" y="162.0" text-anchor="middle" font-size="10" >ejército</text></g></svg>`,
      video: {
        id: "I0DO2BONxG0",
        titulo: "Las guerras carlistas en 12 minutos",
        canal: "Memorias de Pez",
        vistas: 233152,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.6 El reinado de Isabel II: moderados y progresistas (1833-1868)</h3><p>Durante el reinado de <b>Isabel II</b> se construyó el <mark>Estado liberal</mark> en España, aunque con un liberalismo muy limitado. La política la dominaron dos partidos: los <b>moderados</b>, de la alta burguesía y la nobleza, que querían un poder fuerte del rey, sufragio muy restringido y orden; y los <b>progresistas</b>, de las clases medias urbanas, que defendían la soberanía nacional, más libertades y un sufragio más amplio. Como la reina favorecía casi siempre a los moderados, los progresistas solo llegaban al poder mediante pronunciamientos. Los generales, como Espartero (progresista), Narváez (moderado) u O'Donnell (Unión Liberal), fueron los verdaderos protagonistas.</p><p>Las etapas principales fueron la regencia de María Cristina y la de Espartero (1833-1843), la <b>Década Moderada</b> (1844-1854), con la Constitución de 1845 y la creación de la Guardia Civil, el <b>Bienio Progresista</b> (1854-1856) y los gobiernos de la Unión Liberal. Se ordenó el Estado: provincias (1833), un sistema de enseñanza (ley Moyano, 1857), el ferrocarril y la peseta (1868). Pero la corrupción, el autoritarismo y una crisis económica hundieron el prestigio de la reina.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Etapas de 1833 a 1874">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="21" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="14" y="21" width="80" height="30" rx="8" fill="var(--muted)"/><text x="54" y="40" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Regencias</text><text x="102" y="40" font-size="10.5" fill="var(--ink)">1833-1843, guerra carlista</text><rect x="14" y="55" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="14" y="55" width="80" height="30" rx="8" fill="var(--pen)"/><text x="54" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Isabel II</text><text x="102" y="74" font-size="11.5" fill="var(--ink)">1843-1868, moderados</text><rect x="14" y="89" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="89" width="80" height="30" rx="8" fill="var(--leaf)"/><text x="54" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Amadeo I</text><text x="102" y="108" font-size="11.5" fill="var(--ink)">1871-1873, monarquía</text><rect x="14" y="123" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="14" y="123" width="80" height="30" rx="8" fill="var(--red)"/><text x="54" y="142" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">I República</text><text x="102" y="142" font-size="11.5" fill="var(--ink)">1873-1874, federal</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.7 La desamortización y las constituciones</h3><p>La <mark>desamortización</mark> fue la expropiación por el Estado de tierras que estaban «amortizadas» o en «manos muertas» (no se podían vender), para subastarlas. La de <b>Mendizábal</b> (1836) vendió tierras de la Iglesia para pagar la guerra carlista y reducir la deuda; la de <b>Madoz</b> (1855) vendió tierras de los ayuntamientos. Las compraron sobre todo burgueses y nobles ricos, no los campesinos, que no tenían dinero; muchos perdieron incluso el uso de los bienes comunales.</p><table class="tb"><thead><tr><th>Constitución</th><th>Soberanía</th><th>Sufragio</th></tr></thead><tbody><tr><td>1812</td><td>nacional</td><td>universal masculino indirecto</td></tr><tr><td>1837</td><td>nacional (con el rey)</td><td>censitario</td></tr><tr><td>1845</td><td>compartida rey-Cortes</td><td>censitario muy restringido</td></tr><tr><td>1869</td><td>nacional</td><td>universal masculino</td></tr><tr><td>1876</td><td>compartida rey-Cortes</td><td>censitario; universal masculino desde 1890</td></tr></tbody></table><p>Las constituciones cambiaban según quién gobernaba: las progresistas ampliaban la soberanía nacional y el voto; las moderadas reforzaban el poder del rey y lo restringían.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Votantes en las elecciones (% de la población). 1837 2.2 %, 1846 0.8 %, 1869 24 %, 1879 2.1 %, 1890 26 %"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Votantes en las elecciones (% de la</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">población)</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="26.6" y="139.1" width="30.8" height="6.9" rx="3" fill="var(--pen)"/><text x="42" y="135.4" text-anchor="middle" font-size="9.5" font-weight="700">2,2 %</text><text x="42" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1837</text><rect x="70.6" y="143.5" width="30.8" height="2.5" rx="3" fill="var(--red)"/><text x="86" y="139.8" text-anchor="middle" font-size="9.5" font-weight="700">0,8 %</text><text x="86" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1846</text><rect x="114.6" y="70.3" width="30.8" height="75.7" rx="3" fill="var(--leaf)"/><text x="130" y="66.6" text-anchor="middle" font-size="9.5" font-weight="700">24 %</text><text x="130" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1869</text><rect x="158.6" y="139.4" width="30.8" height="6.6" rx="3" fill="var(--sun)"/><text x="174" y="135.7" text-anchor="middle" font-size="9.5" font-weight="700">2,1 %</text><text x="174" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1879</text><rect x="202.6" y="64.0" width="30.8" height="82.0" rx="3" fill="var(--inf)"/><text x="218" y="60.3" text-anchor="middle" font-size="9.5" font-weight="700">26 %</text><text x="218" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1890</text></g></svg>`,
    },
    {
      html: `<h3>1.8 El Sexenio Democrático (1868-1874)</h3><p>En septiembre de 1868 una revolución, <mark>«la Gloriosa»</mark>, encabezada por los generales Prim y Serrano y el almirante Topete, expulsó a Isabel II, que se exilió en Francia. Se abrió el <b>Sexenio Democrático</b>, el primer intento de establecer una democracia en España.</p><p>La <b>Constitución de 1869</b> fue la más avanzada del siglo: soberanía nacional, <b>sufragio universal masculino</b> (para varones mayores de 25 años), amplios derechos (reunión, asociación) y libertad de cultos. Mantenía la monarquía, así que las Cortes buscaron un rey en Europa y eligieron a <b>Amadeo de Saboya</b> (1871-1873). Pero su principal apoyo, el general Prim, fue asesinado justo cuando él llegaba. Sin respaldo, enfrentado a la tercera guerra carlista, a la guerra de Cuba y a la división de los partidos, Amadeo abdicó.</p><p>El 11 de febrero de 1873 se proclamó la <b>Primera República</b>. Tuvo cuatro presidentes en once meses (Figueras, Pi y Margall, Salmerón y Castelar). Quiso crear una república federal, pero estalló el <b>cantonalismo</b>: ciudades como Cartagena se declararon independientes. En enero de 1874 el general Pavía disolvió las Cortes y, a finales de ese año, un pronunciamiento restauró a los Borbones.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: Sexenio Democrático"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1868</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">la Gloriosa</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1869</text><text x="79" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Constitución</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1871</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Amadeo I</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1873</text><text x="181" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">I República</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1874</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">golpe de Pavía</text></g></svg>`,
    },
    {
      html: `<h3>1.9 La Restauración: el sistema de Cánovas (1874-1923)</h3><p>A finales de 1874 el general Martínez Campos se pronunció en Sagunto a favor de <b>Alfonso XII</b>, hijo de Isabel II. Comenzaba la <mark>Restauración</mark> de los Borbones. Su arquitecto fue el político conservador <b>Antonio Cánovas del Castillo</b>, que quería un sistema estable que acabara con los pronunciamientos y con la inestabilidad del siglo.</p><p>Sus bases fueron la <b>Constitución de 1876</b>, la más duradera hasta la actual: soberanía compartida entre el rey y las Cortes, sufragio censitario (universal masculino desde 1890), confesionalidad católica con tolerancia de otros cultos y un rey con amplios poderes y jefe del ejército. El ejército quedó apartado de la política.</p><p>El sistema se apoyaba en dos grandes partidos dinásticos, que aceptaban la monarquía: el <b>Conservador</b>, de Cánovas, y el <b>Liberal</b>, de Sagasta. Al morir joven Alfonso XII (1885), ambos líderes acordaron mantener el sistema durante la regencia de su viuda, María Cristina, hasta la mayoría de edad de Alfonso XIII. La Restauración trajo décadas de paz civil, pero a costa de excluir a amplios sectores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Turnismo: conservadores y liberales se alternan en el gobierno, con el cacique controlando el voto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle" font-weight="700" font-size="12">
          <circle cx="70" cy="70" r="40" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/><text x="70" y="66" fill="var(--pen)">Cánovas</text><text x="70" y="82" fill="var(--ink)" font-size="10.5">conservador</text>
          <circle cx="190" cy="70" r="40" fill="var(--card)" stroke="var(--red)" stroke-width="3"/><text x="190" y="66" fill="var(--red)">Sagasta</text><text x="190" y="82" fill="var(--ink)" font-size="10.5">liberal</text>
          <path d="M110 56 Q 130 36 150 56" fill="none" stroke="var(--ink)" stroke-width="2.5"/><path d="M150 84 Q 130 104 110 84" fill="none" stroke="var(--ink)" stroke-width="2.5"/>
          <path d="M146 50 L 152 58 L 142 58 Z" fill="var(--ink)"/><path d="M114 90 L 108 82 L 118 82 Z" fill="var(--ink)"/>
          <rect x="70" y="128" width="120" height="30" rx="15" fill="var(--sun)"/><text x="130" y="148" fill="var(--ink)">cacique y urnas</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>1.10 El turno de partidos y el caciquismo</h3><p>Conservadores y liberales se alternaban pacíficamente en el gobierno: era el <mark>turno pacífico</mark> o turnismo. Cuando el partido en el poder se desgastaba, el rey llamaba al otro a gobernar, y después se convocaban elecciones que el nuevo Gobierno siempre ganaba. ¿Cómo era posible?</p><p>Porque las elecciones se amañaban. El ministro de la Gobernación elaboraba el <b>encasillado</b>, la lista de quién debía salir elegido en cada distrito, incluyendo algunos escaños para el partido rival. Los gobernadores civiles transmitían las órdenes a los <mark>caciques</mark>, personas poderosas de cada localidad (grandes propietarios, prestamistas, abogados) que controlaban el trabajo, los favores y las influencias. Los caciques compraban votos, amenazaban con el despido, hacían votar a muertos o falsificaban las actas: el <b>pucherazo</b>.</p><p>El caciquismo era más fuerte en el campo que en las ciudades, donde el voto era más libre. El sistema era estable, pero no democrático: dejaba fuera a republicanos, carlistas, socialistas, anarquistas y nacionalistas, que se fueron fortaleciendo hasta hacerlo entrar en crisis en el siglo XX.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cómo se fabricaba un resultado electoral: el Gobierno decide quién ganará (encasillado) → el gobernador civil avisa a los caciques → compra de votos, amenazas, «pucherazo» → Cortes con mayoría del partido del turno"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Cómo se fabricaba un resultado</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">electoral</text><rect x="30" y="42.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="52.4" text-anchor="middle" font-size="9.5" >el Gobierno decide quién ganará</text><text x="130" y="63.3" text-anchor="middle" font-size="9.5" >(encasillado)</text><path d="M130 68.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="77.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="87.4" text-anchor="middle" font-size="9.5" >el gobernador civil avisa a los</text><text x="130" y="98.3" text-anchor="middle" font-size="9.5" >caciques</text><path d="M130 103.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="112.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="122.4" text-anchor="middle" font-size="9.5" >compra de votos, amenazas,</text><text x="130" y="133.3" text-anchor="middle" font-size="9.5" >«pucherazo»</text><path d="M130 138.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="147.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="157.4" text-anchor="middle" font-size="9.5" >Cortes con mayoría del partido del</text><text x="130" y="168.3" text-anchor="middle" font-size="9.5" >turno</text></g></svg>`,
      video: {
        id: "izaZyEn2jLo",
        titulo: "La Restauración borbónica",
        canal: "Clases Particulares en Ávila",
        vistas: 381133,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.11 La guerra de Cuba y el Desastre del 98</h3><p>Cuba, la colonia más rica, producía azúcar y tabaco con mano de obra esclavizada hasta 1886. Los cubanos reclamaban autonomía y luego independencia. Tras la guerra de los Diez Años (1868-1878), en 1895 estalló la guerra definitiva, dirigida por <b>José Martí</b> y Antonio Maceo. El general Weyler concentró a la población rural en campos donde murieron miles de personas.</p><p><b>Estados Unidos</b>, que tenía grandes intereses económicos en la isla, aprovechó la explosión del acorazado <i>Maine</i> en La Habana (1898) para declarar la guerra a España. En pocas semanas hundió las flotas españolas en <b>Cavite</b> (Filipinas) y <b>Santiago de Cuba</b>. Por el <b>Tratado de París</b> (diciembre de 1898), España perdió Cuba, Puerto Rico, Filipinas y Guam. Al año siguiente vendió a Alemania sus últimas islas del Pacífico.</p><p>El <mark>«Desastre del 98»</mark> provocó una crisis moral más que económica. Los <b>regeneracionistas</b>, como Joaquín Costa («escuela y despensa»), pidieron modernizar el país y acabar con el caciquismo, y los escritores de la <b>Generación del 98</b> (Unamuno, Azorín, Baroja, Machado) reflexionaron sobre «el problema de España».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tratado de París (1898): lo que perdió España: Cuba, Puerto Rico, Filipinas, Guam"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Tratado de París (1898): lo que</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">perdió España</text><rect x="10.0" y="42.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="60.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Cuba</text><text x="68" y="80.3" text-anchor="middle" font-size="10" >independencia bajo</text><text x="68" y="91.8" text-anchor="middle" font-size="10" >tutela de EE. UU.</text><rect x="134.0" y="42.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="60.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Puerto Rico</text><text x="192" y="86.0" text-anchor="middle" font-size="10" >pasa a EE. UU.</text><rect x="10.0" y="110.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="128.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Filipinas</text><text x="68" y="154.0" text-anchor="middle" font-size="10" >vendida a EE. UU.</text><rect x="134.0" y="110.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="128.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Guam</text><text x="192" y="154.0" text-anchor="middle" font-size="10" >pasa a EE. UU.</text></g></svg>`,
    },
    {
      html: `<h3>1.12 Economía y sociedad: una modernización lenta</h3><p>España se <mark>industrializó tarde y de forma desigual</mark>. Hacia 1900 dos de cada tres trabajadores seguían en la agricultura, con grandes contrastes: latifundios con jornaleros pobres en Andalucía y Extremadura, minifundios en Galicia. Hubo pocos focos industriales: el <b>textil del algodón en Cataluña</b>, la <b>siderurgia del País Vasco</b>, gracias al hierro de Vizcaya, y la <b>minería</b> del carbón asturiano y de metales en el sur, a menudo en manos extranjeras. El ferrocarril, desde la línea Barcelona-Mataró (1848), se construyó con forma radial y capital francés.</p><p>La sociedad cambió con lentitud. La nobleza conservó tierras y prestigio y se mezcló con una burguesía de negocios en Madrid, Barcelona y Bilbao. Crecieron las clases medias urbanas. El <b>movimiento obrero</b> se organizó: el anarquismo arraigó entre los jornaleros andaluces y los obreros catalanes, y el socialismo de <b>Pablo Iglesias</b> fundó el PSOE (1879) y la UGT (1888).</p><p>A finales del siglo surgieron los <b>nacionalismos periféricos</b>: el catalanismo, nacido de la Renaixença cultural, que dio lugar a la Lliga Regionalista (1901), y el nacionalismo vasco de Sabino Arana, que fundó el PNV en 1895. Todos estos actores marcarán el siglo XX.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Población activa agraria en España hacia 1900 frente a otros sectores">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5"><text x="84" y="58" text-anchor="end" font-weight="700" fill="var(--ink)">agricultura</text><rect x="92" y="42" width="113.14285714285714" height="24" rx="5" fill="var(--leaf)"/><text x="209.14285714285714" y="58" fill="var(--ink)">66 %</text><text x="84" y="90" text-anchor="end" font-weight="700" fill="var(--ink)">industria</text><rect x="92" y="74" width="27.428571428571427" height="24" rx="5" fill="var(--muted)"/><text x="123.42857142857143" y="90" fill="var(--ink)">16 %</text><text x="84" y="122" text-anchor="end" font-weight="700" fill="var(--ink)">servicios</text><rect x="92" y="106" width="30.857142857142854" height="24" rx="5" fill="var(--pen)"/><text x="126.85714285714286" y="122" fill="var(--ink)">18 %</text></g>
  </svg>`,
    },
  ],
  figura: {
    titulo: "España de 1808 a 1898",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo del siglo XIX español">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <path d="M30 100 H 650" stroke="var(--line)" stroke-width="4"/>
    <rect x="40" y="92" width="200" height="16" rx="8" fill="var(--muted)" opacity=".75"/><text x="140" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">absolutismo vs. liberalismo</text><rect x="240" y="92" width="80" height="16" rx="8" fill="var(--pen)" opacity=".75"/><text x="280" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text><rect x="320" y="92" width="110" height="16" rx="8" fill="var(--red)" opacity=".75"/><text x="375" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text><rect x="430" y="92" width="210" height="16" rx="8" fill="var(--sun)" opacity=".75"/><text x="535" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Restauración</text>
    <path d="M40 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="40" cy="100" r="5" fill="var(--ink)"/><text x="40" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1808</text><text x="20" y="54" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Guerra de la Independencia</text><path d="M120 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="120" cy="100" r="5" fill="var(--ink)"/><text x="120" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1812</text><text x="120" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Constitución de Cádiz</text><path d="M240 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="240" cy="100" r="5" fill="var(--ink)"/><text x="240" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1833</text><text x="240" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Isabel II, guerra carlista</text><path d="M320 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="320" cy="100" r="5" fill="var(--ink)"/><text x="320" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1868</text><text x="320" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">la Gloriosa</text><path d="M400 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="400" cy="100" r="5" fill="var(--ink)"/><text x="400" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1873</text><text x="400" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">I República</text><path d="M480 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="480" cy="100" r="5" fill="var(--ink)"/><text x="480" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1876</text><text x="480" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Constitución de Cánovas</text><path d="M610 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="610" cy="100" r="5" fill="var(--ink)"/><text x="610" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1898</text><text x="630" y="54" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">pérdida de Cuba</text>
  </svg>`,
  },
  video: {
    id: "2u6GeD7Go78",
    titulo: "España en el siglo XIX: de Fernando VII al Sexenio Democrático",
    canal: "La cuna de Halicarnaso",
    vistas: 390497,
    megusta: 9145,
    busqueda: "España en el siglo XIX resumen",
  },
  ejemplos: [
    {
      enunciado: "Explica cómo funcionaba un pucherazo en un pueblo durante la Restauración.",
      pasos: [
        "El Gobierno en Madrid decidía qué partido debía ganar (encasillado).",
        "El gobernador civil transmitía la orden al cacique local.",
        "El cacique conseguía los votos con favores, amenazas o alterando las actas.",
        "Las elecciones daban el resultado previsto.",
      ],
      resultado: "Las elecciones se falseaban para mantener el turno entre conservadores y liberales.",
    },
    {
      enunciado: "Compara la Constitución de 1812 y la de 1845 en soberanía y sufragio.",
      pasos: [
        "1812: soberanía nacional y sufragio universal masculino indirecto.",
        `1845: soberanía compartida entre el rey y las Cortes y sufragio censitario muy restringido.`,
      ],
      resultado: `La de 1812 es más liberal y avanzada; la de 1845, moderada, reduce el poder del pueblo y refuerza al rey.`,
    },
    {
      enunciado: "¿Por qué la desamortización no creó una clase de pequeños campesinos propietarios?",
      pasos: [
        "Las tierras se vendían en subasta al mejor postor.",
        "Los campesinos pobres no tenían dinero para pujar.",
        "Las compraron burgueses y nobles con dinero.",
      ],
      resultado: "Se concentró aún más la propiedad y los campesinos siguieron sin tierra.",
    },
    {
      enunciado: "Explica por qué el siglo XIX español fue un siglo de pronunciamientos.",
      pasos: [
        `Define: un pronunciamiento es un levantamiento militar para cambiar el gobierno o el régimen.`,
        `Causa: el ejército había ganado prestigio en la Guerra de la Independencia y en las guerras carlistas.`,
        `Causa política: la reina favorecía a los moderados, así que los progresistas no podían llegar al poder por elecciones.`,
        "Ejemplos: Riego (1820), la Gloriosa (1868), Pavía (1874), Martínez Campos (1874).",
      ],
      resultado: `Los partidos usaron a los militares para alcanzar el poder porque el sistema electoral no permitía la alternancia; Cánovas quiso acabar con eso con el turno pacífico.`,
    },
    {
      enunciado: "Analiza el dato: en 1846 votaba el 0,8 % de la población y en 1869, el 24 %.",
      pasos: [
        `1846: Constitución moderada de 1845, sufragio censitario muy restringido; solo los más ricos votaban.`,
        "1869: Constitución democrática, sufragio universal masculino (varones mayores de 25 años).",
        "El salto refleja el paso de un liberalismo moderado a uno democrático.",
        "Aun así, las mujeres seguían excluidas, cerca de la mitad de la población.",
      ],
      resultado: `El cambio del sufragio censitario al universal masculino multiplicó por 30 los votantes, pero la ciudadanía siguió siendo solo masculina.`,
    },
    {
      enunciado: "Ordena y explica la secuencia de regímenes entre 1868 y 1876.",
      pasos: [
        "1868: revolución Gloriosa, exilio de Isabel II; gobierno provisional.",
        "1869: Constitución democrática; 1871-1873: reinado de Amadeo I.",
        "1873: Primera República federal; cantonalismo; 1874: golpe de Pavía.",
        "1874: pronunciamiento de Sagunto; Alfonso XII; 1876: nueva Constitución de Cánovas.",
      ],
      resultado: `En ocho años España pasó por una revolución, una monarquía democrática, una república y la restauración borbónica.`,
    },
  ],
  errores: [
    `Pensar que la Constitución de 1812 estuvo vigente mucho tiempo: Fernando VII la abolió en 1814.`,
    "Confundir carlistas con liberales: los carlistas defendían el absolutismo y los fueros.",
    "Creer que la desamortización repartió tierras a los campesinos pobres.",
    "Llamar democracia a la Restauración: las elecciones estaban amañadas.",
    `Situar la pérdida de Cuba en 1824: se perdió en 1898; en 1824 se perdió la América continental.`,
    `Pensar que el turnismo era una democracia porque había elecciones: los resultados se decidían antes en Madrid y los caciques los fabricaban.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "Cita tres principios de la Constitución de 1812.",
      sol: `Soberanía nacional, división de poderes y sufragio universal masculino indirecto (también la igualdad ante la ley o la libertad de imprenta).`,
    },
    {
      nivel: "básico",
      q: "¿Quiénes eran los criollos y por qué querían la independencia?",
      sol: `Descendientes de españoles nacidos en América; querían gobernar ellos mismos y comerciar libremente.`,
    },
    {
      nivel: "básico",
      q: "¿Qué hecho inició el Sexenio Democrático?",
      sol: "La revolución de 1868, «La Gloriosa», que expulsó a Isabel II.",
    },
    {
      nivel: "básico",
      q: "¿Qué régimen hubo en España en 1873?",
      sol: "La Primera República, que duró menos de un año y tuvo cuatro presidentes.",
    },
    {
      nivel: "básico",
      q: "Define caciquismo.",
      sol: `El dominio político de personas poderosas en cada localidad que controlaban el voto mediante favores o presiones.`,
    },
    {
      nivel: "básico",
      q: "¿Qué ocurrió el 2 de mayo de 1808?",
      sol: `El pueblo de Madrid se levantó contra las tropas francesas cuando se llevaban a los últimos miembros de la familia real. La represión fue durísima (fusilamientos del 3 de mayo, pintados por Goya) y el levantamiento se extendió: empezó la Guerra de la Independencia.`,
    },
    {
      nivel: "básico",
      q: "¿Quiénes eran los afrancesados?",
      sol: `Españoles, a menudo ilustrados, que apoyaron a José I Bonaparte porque esperaban que hiciera reformas modernizadoras. Al terminar la guerra muchos tuvieron que exiliarse.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fueron los Cien Mil Hijos de San Luis?",
      sol: `El ejército francés enviado por la Santa Alianza en 1823 para acabar con el Trienio Liberal y devolver el poder absoluto a Fernando VII.`,
    },
    {
      nivel: "básico",
      q: "Nombra a dos libertadores de la América española y la batalla decisiva.",
      sol: "Simón Bolívar y José de San Martín. La batalla decisiva fue Ayacucho (Perú, 1824).",
    },
    {
      nivel: "básico",
      q: "¿Qué era la Pragmática Sanción y qué provocó?",
      sol: `La norma que aprobó Fernando VII para que pudieran reinar las mujeres, de modo que le sucediera su hija Isabel. Su hermano Carlos no la aceptó y estalló la primera guerra carlista (1833).`,
    },
    {
      nivel: "básico",
      q: "¿Quién fue el arquitecto de la Restauración y qué partido dirigía?",
      sol: "Antonio Cánovas del Castillo, líder del Partido Conservador.",
    },
    {
      nivel: "básico",
      q: "¿Qué partidos y sindicatos obreros se fundaron en España en el siglo XIX?",
      sol: `El PSOE (1879) y la UGT (1888), socialistas, fundados por Pablo Iglesias. El anarquismo se organizó en federaciones; la CNT, anarquista, llegó en 1910.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el cantonalismo?",
      sol: `Un movimiento de 1873, durante la Primera República, en el que varias ciudades y regiones (Cartagena, Alcoy, Sevilla…) se proclamaron cantones independientes, queriendo construir la federación desde abajo. El Gobierno lo reprimió con el ejército.`,
    },
    {
      nivel: "medio",
      q: "Explica qué pedía el carlismo.",
      sol: `Que reinara Carlos María Isidro, un rey absoluto, la defensa de la religión y de los fueros tradicionales.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue la desamortización de Mendizábal?",
      sol: `La expropiación y venta en subasta de tierras de la Iglesia (1836) para pagar la deuda y la guerra carlista.`,
    },
    {
      nivel: "medio",
      q: "¿Qué perdió España en 1898 y frente a quién?",
      sol: "Cuba, Puerto Rico y Filipinas, tras la guerra con Estados Unidos.",
    },
    {
      nivel: "medio",
      q: "¿Qué pedía el regeneracionismo?",
      sol: `Modernizar España: educación, obras públicas, acabar con el caciquismo («escuela y despensa», decía Costa).`,
    },
    {
      nivel: "medio",
      q: "Explica las diferencias entre moderados y progresistas en el reinado de Isabel II.",
      sol: `Moderados: alta burguesía y nobleza; soberanía compartida rey-Cortes; sufragio muy restringido; orden y poder fuerte del rey (Narváez, Constitución de 1845). Progresistas: clases medias urbanas; soberanía nacional; sufragio más amplio; más libertades y milicia nacional (Espartero, Constitución de 1837).`,
    },
    {
      nivel: "medio",
      q: "¿Por qué fracasó la Primera República?",
      sol: `Por la falta de apoyos (muchos republicanos eran recientes, y monárquicos y Iglesia se oponían), las divisiones entre republicanos federales y unitarios, tres guerras a la vez (carlista, cubana y cantonal), la inestabilidad (cuatro presidentes en once meses) y la intervención militar del general Pavía (1874).`,
    },
    {
      nivel: "medio",
      q: "Explica qué era el encasillado y quién participaba en él.",
      sol: `La lista que elaboraba el ministro de la Gobernación con los candidatos que debían ganar en cada distrito, incluyendo algunos escaños para el partido rival. Los gobernadores civiles la transmitían a los caciques locales, que se encargaban de que saliera elegida.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fueron los fueros y qué pasó con ellos tras las guerras carlistas?",
      sol: `Leyes, instituciones y privilegios propios de territorios como Navarra y el País Vasco (exención de quintas, aduanas propias, impuestos propios). Tras la primera guerra se mantuvieron en parte (Convenio de Vergara); tras la tercera (1876) se abolieron, aunque se crearon los conciertos económicos, un régimen fiscal propio.`,
    },
    {
      nivel: "medio",
      q: `¿Cuáles fueron las consecuencias de la independencia de la América continental para España?`,
      sol: `Pérdida de territorios, de ingresos fiscales y de mercados; ruina de la Hacienda, que dependió de préstamos; pérdida de peso internacional. España conservó solo Cuba, Puerto Rico y Filipinas.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué se dice que la crisis del 98 fue más moral que económica?",
      sol: `Porque la pérdida de las colonias no arruinó la economía (los capitales repatriados se invirtieron en la península), pero sí hundió el orgullo nacional: mostró el atraso del país y la debilidad del sistema, y generó un debate intelectual (regeneracionismo, Generación del 98) sobre cómo modernizar España.`,
    },
    {
      nivel: "medio",
      q: "¿Qué pedía Joaquín Costa con «escuela y despensa»?",
      sol: `Que España se regenerara mejorando la educación de la población (escuela) y su nivel de vida y economía (despensa), en vez de gastar en aventuras exteriores; también pedía acabar con el caciquismo.`,
    },
    {
      nivel: "medio",
      q: "Relaciona el nacimiento del catalanismo y del nacionalismo vasco con la Restauración.",
      sol: `Ambos surgieron a finales del siglo XIX frente a un Estado centralista y un sistema político cerrado. El catalanismo nació de la Renaixença cultural y de la burguesía industrial (Bases de Manresa, 1892; Lliga, 1901). El nacionalismo vasco, de Sabino Arana (PNV, 1895), reaccionó contra la pérdida de los fueros y la llegada de inmigrantes por la industrialización.`,
    },
    {
      nivel: "avanzado",
      q: "¿Dónde se concentró la industria en el siglo XIX?",
      sol: `La textil del algodón en Cataluña y la siderurgia en el País Vasco; también la minería en Asturias y el sur.`,
    },
    {
      nivel: "avanzado",
      q: `Comenta este artículo de 1812: «La soberanía reside esencialmente en la Nación, y por lo mismo pertenece a esta exclusivamente el derecho de establecer sus leyes fundamentales». ¿Por qué era revolucionario?`,
      sol: `Clasifica: artículo 3 de la Constitución de Cádiz, texto jurídico-político. Idea: la soberanía es de la nación, no del rey; por tanto, la nación puede hacer su constitución. Contexto: guerra contra Napoleón y ausencia del rey. Era revolucionario porque negaba el derecho divino y el absolutismo: el rey pasaba a estar sometido a la ley. Por eso Fernando VII la anuló en 1814.`,
    },
    {
      nivel: "avanzado",
      q: "Compara la Constitución de 1869 y la de 1876 en soberanía, sufragio, derechos y religión.",
      sol: `1869: soberanía nacional; sufragio universal masculino; amplios derechos de reunión y asociación; libertad de cultos. 1876: soberanía compartida rey-Cortes; sufragio censitario hasta 1890; derechos reconocidos pero limitados por leyes posteriores; Estado católico con tolerancia de otros cultos en privado. La primera es democrática y la segunda, conservadora y flexible.`,
    },
    {
      nivel: "avanzado",
      q: "Valora la Restauración: ¿éxito o fracaso? Argumenta con dos razones de cada lado.",
      sol: `Éxito: casi 50 años de estabilidad, fin de los pronunciamientos y de las guerras carlistas, alternancia pacífica, modernización legal (Código Civil de 1889, sufragio universal masculino en 1890). Fracaso: falsificación sistemática del voto (caciquismo), exclusión de obreros, republicanos y nacionalistas, Desastre del 98 y crisis desde 1917. Conclusión argumentada.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué la desamortización no resolvió el problema agrario en el sur de España?",
      sol: `Porque las tierras se vendieron en subastas en grandes lotes, que solo podían comprar burgueses y nobles con dinero; los jornaleros no recibieron tierra y además perdieron bienes comunales. Se reforzó el latifundio y la desigualdad, lo que alimentó el anarquismo campesino y la conflictividad agraria hasta el siglo XX.`,
    },
    {
      nivel: "avanzado",
      q: `Elabora una línea del tiempo con los regímenes políticos de España entre 1808 y 1902 y explica qué tendencia (absolutista, liberal moderada, liberal progresista, democrática) dominó en cada uno.`,
      sol: `1808-1814: guerra; Cádiz liberal. 1814-1820: absolutismo. 1820-1823: liberal (Trienio). 1823-1833: absolutismo (Década Ominosa). 1833-1843: regencias, liberalismo progresista/moderado. 1844-1854: moderado. 1854-1856: progresista. 1856-1868: moderado/Unión Liberal. 1868-1874: democrático (Sexenio). 1874-1902: liberal conservador (Restauración).`,
    },
    {
      nivel: "avanzado",
      q: `Imagina que eres un periodista en 1898. Escribe un titular y un párrafo sobre el Tratado de París y la reacción en España.`,
      sol: `Ejemplo de titular: «España firma su adiós a Ultramar». Párrafo: en París, los representantes españoles han aceptado ceder Cuba, Puerto Rico, Filipinas y Guam a Estados Unidos tras la derrota de Cavite y Santiago. En Madrid, la noticia se recibe con amargura; intelectuales como Joaquín Costa piden «regenerar» el país, acabar con el caciquismo y apostar por la escuela. Debe incluir datos correctos y la reacción regeneracionista.`,
    },
  ],
  quiz: [
    {
      q: "¿Cómo se conoce la Constitución de 1812?",
      o: ["La Gloriosa", "La Isabelina", "La Pepa", "La de Cánovas"],
      a: 2,
      e: "Se aprobó el 19 de marzo de 1812, día de San José, y por eso se la llamó «la Pepa».",
    },
    {
      q: "Las guerras carlistas enfrentaron a…",
      o: [
        "carlistas y republicanos de 1873",
        "liberales isabelinos y absolutistas partidarios de Carlos",
        "España y Francia",
        "monárquicos y republicanos de 1931",
      ],
      a: 1,
      e: `Al morir Fernando VII, su hermano Carlos reclamó el trono con apoyo absolutista frente a su hija Isabel.`,
    },
    {
      q: "El turnismo de la Restauración consistía en…",
      o: [
        "elecciones totalmente limpias",
        "que conservadores y liberales se alternaban pactando el resultado",
        "un gobierno militar",
        "un reparto de tierras entre partidos",
      ],
      a: 1,
      e: "El caciquismo y el fraude garantizaban que ganara el partido al que le «tocaba» gobernar.",
    },
    {
      q: "¿Qué ocurrió en 1898?",
      o: [
        "España perdió Cuba, Puerto Rico y Filipinas",
        "Se proclamó la I República",
        "Se aprobó la Constitución de 1812",
        "Empezó la Guerra de la Independencia",
      ],
      a: 0,
      e: "La derrota frente a Estados Unidos se vivió como el «desastre del 98».",
    },
    {
      q: "¿Qué región fue el centro de la industria textil española?",
      o: ["Andalucía", "Valencia", "Cataluña", "Galicia"],
      a: 2,
      e: "El algodón catalán fue el primer gran sector industrial del país.",
    },
    {
      q: "La Constitución de 1812 se aprobó en…",
      o: ["Barcelona", "Madrid", "Cádiz", "Sevilla"],
      a: 2,
      e: "Por eso se habla de las Cortes de Cádiz.",
    },
    {
      q: "La batalla decisiva de la independencia americana fue…",
      o: ["Ayacucho, 1824", "Bailén, 1808", "Trafalgar, 1805", "Waterloo, 1815"],
      a: 0,
      e: "Puso fin al dominio español en América del Sur.",
    },
    {
      q: "La desamortización de 1836 la impulsó…",
      o: ["Madoz", "Mendizábal", "Espartero", "Cánovas"],
      a: 1,
      e: "Afectó a tierras de la Iglesia.",
    },
    {
      q: "El sistema del turno lo ideó…",
      o: ["Cánovas", "Sagasta", "Prim", "Espartero"],
      a: 0,
      e: "Con Sagasta como líder liberal.",
    },
    {
      q: "El PNV lo fundó en 1895…",
      o: ["Pablo Iglesias", "Joaquín Costa", "Sabino Arana", "Prat de la Riba"],
      a: 2,
      e: "Es el origen del nacionalismo vasco político.",
    },
    {
      q: "¿Quién fue rey de España impuesto por Napoleón?",
      o: ["Fernando VII", "José I Bonaparte", "Carlos IV", "Amadeo I"],
      a: 1,
      e: "Era hermano de Napoleón; reinó entre 1808 y 1813.",
    },
    {
      q: "La batalla de Bailén (1808) fue…",
      o: [
        "una derrota española",
        "la primera gran derrota de un ejército napoleónico",
        "una batalla naval",
        "una batalla carlista",
      ],
      a: 1,
      e: "El general Castaños derrotó al general Dupont.",
    },
    {
      q: "El Trienio Liberal (1820-1823) empezó con el pronunciamiento de…",
      o: ["Prim", "Riego", "Pavía", "Espartero"],
      a: 1,
      e: "En Cabezas de San Juan, Sevilla.",
    },
    {
      q: "El lema carlista era…",
      o: ["Libertad, igualdad, fraternidad", "Dios, Patria, Rey", "Escuela y despensa", "Paz, pan y tierra"],
      a: 1,
      e: "Defendían absolutismo, religión tradicional y fueros.",
    },
    {
      q: "La revolución de 1868 que expulsó a Isabel II se llamó…",
      o: ["la Pepa", "la Gloriosa", "la Vicalvarada", "la Semana Trágica"],
      a: 1,
      e: "La encabezaron Prim, Serrano y Topete.",
    },
    {
      q: "Amadeo de Saboya abdicó en…",
      o: ["1868", "1871", "1873", "1876"],
      a: 2,
      e: "Tras su abdicación se proclamó la Primera República.",
    },
    {
      q: "La Constitución más duradera del siglo XIX fue la de…",
      o: ["1812", "1845", "1869", "1876"],
      a: 3,
      e: "Estuvo vigente hasta 1923 (formalmente hasta 1931).",
    },
    {
      q: "El «pucherazo» era…",
      o: ["un plato típico", "el fraude en las actas electorales", "un impuesto", "un levantamiento militar"],
      a: 1,
      e: "Falsificar resultados era habitual en la Restauración.",
    },
    {
      q: "¿Qué acorazado estadounidense explotó en La Habana en 1898?",
      o: ["Maine", "Titanic", "Victoria", "Oregon"],
      a: 0,
      e: "EE. UU. culpó a España y declaró la guerra.",
    },
    {
      q: "La UGT fue fundada en…",
      o: ["1868", "1879", "1888", "1910"],
      a: 2,
      e: "Es el sindicato socialista, fundado por Pablo Iglesias.",
    },
  ],
  examen: [
    {
      q: "La desamortización de Mendizábal (1836)…",
      o: [
        "vendió tierras de la Iglesia",
        "repartió tierras gratis a los campesinos",
        "nacionalizó las fábricas",
        "regaló tierras a la nobleza",
      ],
      a: 0,
      e: `El Estado expropió y subastó bienes del clero para pagar deuda; los compraron sobre todo burgueses y nobles.`,
    },
    {
      q: "¿Qué periodo se abrió con la revolución de 1868?",
      o: ["La Década Ominosa", "El Sexenio Democrático", "La Primera Guerra Carlista", "La Restauración"],
      a: 1,
      e: "De 1868 a 1874: Constitución de 1869, Amadeo I y la Primera República.",
    },
    {
      q: "Un pronunciamiento es…",
      o: [
        "un discurso del rey",
        "una ley del rey",
        "un levantamiento militar para cambiar el gobierno",
        "un tipo de elecciones",
      ],
      a: 2,
      e: "Fue la forma habitual de cambiar de gobierno en el siglo XIX español.",
    },
    {
      q: "La Constitución de 1812 establecía el sufragio…",
      o: ["censitario", "universal masculino indirecto", "universal de hombres y mujeres", "solo para el clero"],
      a: 1,
      e: "Elegían compromisarios que a su vez elegían a los diputados.",
    },
    {
      q: "La Década Ominosa fue una etapa…",
      o: ["liberal progresista", "absolutista (1823-1833)", "democrática", "republicana"],
      a: 1,
      e: "Fernando VII persiguió duramente a los liberales.",
    },
    {
      q: "El Convenio de Vergara (1839) puso fin a…",
      o: ["la Guerra de la Independencia", "la primera guerra carlista", "la guerra de Cuba", "el cantonalismo"],
      a: 1,
      e: "Fue el «abrazo» entre Espartero y Maroto.",
    },
    {
      q: "En la Restauración se turnaban en el poder…",
      o: [
        "carlistas y republicanos",
        "conservadores y liberales",
        "socialistas y anarquistas",
        "moderados y progresistas",
      ],
      a: 1,
      e: "Liderados por Cánovas y Sagasta.",
    },
    {
      q: "¿Qué territorio NO perdió España en 1898?",
      o: ["Cuba", "Puerto Rico", "Filipinas", "Canarias"],
      a: 3,
      e: "Canarias es parte de España; se perdieron Cuba, Puerto Rico, Filipinas y Guam.",
    },
  ],
  feynman: [
    "Qué pasó en 1808 y qué aprobaron las Cortes de Cádiz",
    "Por qué el reinado de Fernando VII alterna absolutismo y liberalismo",
    "Qué fue el Sexenio Democrático",
    "Cómo funcionaban el turnismo y el caciquismo",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: ESPAÑA SIGLO XIX">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">ESPAÑA SIGLO XIX</text>
      <rect x="10" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--muted)">1808-1833</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">Cádiz · Fernando VII</text><rect x="430" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--pen)">1833-1874</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">Isabel II · Sexenio</text><rect x="10" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--sun)">Restauración</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">turnismo · caciques · 1898</text><rect x="430" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--leaf)">Economía</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Cataluña · País Vasco · Asturias</text>
    </g></svg>`,
  tarjetas: [
    ["¿Qué aprobaron las Cortes de Cádiz?", "La Constitución de 1812, la primera de España."],
    ["Trienio Liberal", "1820-1823, tras el pronunciamiento de Riego."],
    ["Sexenio Democrático", "1868-1874: Constitución de 1869, Amadeo I y la I República."],
    ["Turnismo", "Alternancia pactada de conservadores y liberales en la Restauración."],
    ["Desastre del 98", "Pérdida de Cuba, Puerto Rico y Filipinas."],
    ["La Pepa", "Nombre popular de la Constitución de 1812."],
    ["Desamortización", "Expropiación y venta de tierras de la Iglesia y los ayuntamientos."],
    ["Pucherazo", "Fraude electoral de la Restauración."],
    ["Pronunciamiento", "Levantamiento militar para cambiar el gobierno o el régimen político."],
    ["Carlismo", "Movimiento absolutista y foralista partidario de Carlos María Isidro y sus herederos."],
    [
      "Primera República",
      "Régimen de 1873-1874 con cuatro presidentes, cantonalismo y final por el golpe de Pavía.",
    ],
    [
      "Regeneracionismo",
      `Corriente que tras 1898 pidió modernizar España y acabar con el caciquismo (Joaquín Costa).`,
    ],
  ],
  glosario: [
    ["Afrancesado", "Español que apoyó a José I Bonaparte esperando reformas ilustradas."],
    ["Guerrilla", "Pequeños grupos armados que hostigaban al ejército invasor."],
    ["Cortes de Cádiz", "Asamblea reunida entre 1810 y 1813 que aprobó la Constitución de 1812."],
    ["Criollo", "Descendiente de españoles nacido en América."],
    ["Pronunciamiento", "Levantamiento militar para forzar un cambio político."],
    ["Carlismo", "Movimiento absolutista, católico tradicional y defensor de los fueros."],
    ["Fueros", "Leyes e instituciones propias de algunos territorios, como Navarra y el País Vasco."],
    ["Desamortización", "Expropiación y venta por el Estado de tierras de la Iglesia o de los ayuntamientos."],
    ["Moderados", "Liberales conservadores: poder fuerte del rey y sufragio muy restringido."],
    ["Progresistas", "Liberales avanzados: soberanía nacional y sufragio más amplio."],
    ["Sexenio Democrático", "Periodo de 1868 a 1874 con la primera democracia y la Primera República."],
    ["Cantonalismo", "Movimiento de 1873 en que ciudades se proclamaron cantones independientes."],
    ["Restauración", "Vuelta de los Borbones en 1874 y régimen de Cánovas hasta 1923."],
    ["Turnismo", "Alternancia pactada en el poder de conservadores y liberales."],
    ["Caciquismo", "Control del voto por personas poderosas de cada localidad."],
    ["Pucherazo", "Falsificación de los resultados electorales."],
    ["Regeneracionismo", "Corriente que tras 1898 pidió modernizar España."],
  ],
  situacion: {
    titulo: "Una calle con nombre del siglo XIX",
    reto: `Muchas calles de nuestras ciudades llevan nombres del siglo XIX: Constitución, Riego, Mendizábal, Espartero, Prim, Castelar, Cánovas, Sagasta, Joaquín Costa, Mariana Pineda… El ayuntamiento os pide una placa explicativa para una de esas calles, con información rigurosa y adecuada para cualquier vecino.`,
    pasos: [
      `Buscad en el callejero de vuestra localidad (o de una ciudad cercana) calles dedicadas a personajes o hechos del siglo XIX español.`,
      `Elegid una y documentad quién fue o qué ocurrió, con fechas y relación con lo estudiado (liberales, carlistas, Sexenio, Restauración…).`,
      `Averiguad cuándo se puso ese nombre a la calle y por qué; si cambió de nombre en algún momento, explicad el motivo.`,
      "Redactad el texto de la placa (80-100 palabras) con un dato curioso y una fecha clave.",
      "Diseñad la placa y presentadla a la clase; votad entre todos la mejor.",
    ],
    producto: `Una placa explicativa (texto e imagen) para una calle, acompañada de una ficha con las fuentes consultadas.`,
    evaluacion: [
      "Corrección histórica de los datos y fechas.",
      "Relación del personaje o hecho con los procesos del siglo XIX.",
      "Síntesis y claridad del texto para el público general.",
      "Uso y cita de fuentes fiables.",
    ],
  },
  familias: [
    `Buscad en vuestra ciudad una calle con nombre del siglo XIX (Cortes de Cádiz, Riego, Espartero, Cánovas) y averiguad quién fue.`,
    "Ved juntos «Los fusilamientos del 3 de mayo» de Goya y comentad qué cuenta.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: la construcción del Estado liberal en España y la industrialización desigual (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      `Comparar artículos de las constituciones de 1812, 1845, 1869 y 1876 (soberanía, sufragio, religión).`,
      "Comentario de los cuadros de Goya del 2 y 3 de mayo.",
      "Simulación de unas elecciones caciquiles con resultado pactado.",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    {
      t: "Historia de España (1810-1873), Wikipedia en español",
      url: "https://es.wikipedia.org/wiki/Historia_de_Espa%C3%B1a#Edad_Contempor%C3%A1nea",
    },
  ],
  revisado: "2026-11-13",
};
