// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "Las revoluciones liberales",
  minutos: 110,
  objetivos: [
    "Explicar las causas y fases de la Revolución francesa",
    "Relacionar la independencia de Estados Unidos y el Imperio napoleónico con el liberalismo",
    "Describir las oleadas revolucionarias de 1820, 1830 y 1848 y el nacionalismo",
    "Explicar las fases de la Revolución francesa y sus logros",
    "Distinguir nacionalismo unificador y disgregador",
  ],
  claves: ["liberalismo", "constitución", "soberanía nacional", "Revolución francesa", "Napoleón", "nacionalismo"],
  pregunta: {
    texto: `Hoy votamos, tenemos una Constitución y nadie puede ser detenido sin motivo. Hace 250 años nada de eso existía en Europa. ¿Cuándo empezó a cambiar?`,
    respuesta: `Con las <mark>revoluciones liberales</mark> (1776-1848). Primero en las colonias británicas de América, después en Francia en 1789 y luego en casi toda Europa, la burguesía acabó con el Antiguo Régimen e impuso el <b>liberalismo</b>: constitución, división de poderes, derechos individuales y soberanía nacional.`,
  },
  lectura: {
    titulo: "Una fortaleza casi vacía",
    html: `<p>La mañana del 14 de julio de 1789, miles de parisinos rodean la Bastilla, una vieja fortaleza que el rey usa como prisión. Buscan pólvora para defenderse de las tropas que Luis XVI ha concentrado alrededor de la ciudad. Tras horas de disparos, el gobernador se rinde. Dentro solo encuentran siete presos: cuatro falsificadores, dos enfermos mentales y un noble encerrado a petición de su familia.</p><p>Militarmente, la toma de la Bastilla no tuvo gran importancia. Simbólicamente, lo cambió todo. Aquel edificio representaba el poder del rey para encarcelar a cualquiera sin juicio, con una simple orden firmada. Al caer, la gente sintió que el miedo había cambiado de bando. Pocas semanas después se abolieron los privilegios y se proclamó que «los hombres nacen y permanecen libres e iguales en derechos».</p><p>Hoy el 14 de julio es la fiesta nacional de Francia, y palabras como <i>constitución</i>, <i>ciudadano</i>, <i>derechos humanos</i> o <i>nación</i> forman parte de nuestro vocabulario diario. Todas nacieron, o cambiaron de significado, en la época que estudiarás en este tema: <b>la era de las revoluciones liberales</b>, entre 1776 y 1871.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué es el liberalismo</h3><p>El <mark>liberalismo</mark> es la ideología que recoge las ideas ilustradas y las convierte en un sistema político. Fue la ideología de la burguesía, que quería acabar con el Antiguo Régimen. Sus principios son:</p><ul><li><b>Constitución</b>: una ley suprema, escrita, que organiza el Estado, limita el poder y reconoce derechos.</li><li><b>Soberanía nacional</b>: el poder reside en la nación, que lo ejerce a través de representantes elegidos.</li><li><b>División de poderes</b>: legislativo, ejecutivo y judicial separados.</li><li><b>Igualdad ante la ley</b>: fin de los privilegios estamentales.</li><li><b>Derechos y libertades individuales</b>: expresión, prensa, reunión, religión y, muy especialmente, <b>propiedad</b>.</li></ul><p>En lo económico, el liberalismo defendía la libertad de comercio y de industria. Sin embargo, el liberalismo del siglo XIX no era democrático en el sentido actual. Casi siempre estableció el <mark>sufragio censitario</mark>: solo votaban los hombres con cierto nivel de riqueza o de estudios. Los liberales temían que el pueblo llano, sin propiedades, votara contra la propiedad. Las mujeres quedaron excluidas en todos los casos. La lucha por el <b>sufragio universal</b> marcará los siglos XIX y XX.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Principios del liberalismo">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="21" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="14" y="21" width="80" height="30" rx="8" fill="var(--pen)"/><text x="54" y="40" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Constitución</text><text x="102" y="40" font-size="10.5" fill="var(--ink)">ley que limita el poder</text><rect x="14" y="55" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="55" width="80" height="30" rx="8" fill="var(--leaf)"/><text x="54" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Poderes</text><text x="102" y="74" font-size="11.5" fill="var(--ink)">tres poderes separados</text><rect x="14" y="89" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="14" y="89" width="80" height="30" rx="8" fill="var(--red)"/><text x="54" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Soberanía</text><text x="102" y="108" font-size="9.5" fill="var(--ink)">el poder reside en la nación</text><rect x="14" y="123" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><rect x="14" y="123" width="80" height="30" rx="8" fill="var(--sun)"/><text x="54" y="142" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Derechos</text><text x="102" y="142" font-size="9.5" fill="var(--ink)">libertad, igualdad, propiedad</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.2 La independencia de Estados Unidos</h3><p>La primera revolución liberal triunfante no se produjo en Europa, sino en América. En la costa atlántica de Norteamérica había <b>trece colonias británicas</b>, con unos 2,5 millones de habitantes, gobiernos locales propios y una economía próspera: agricultura de plantación con personas esclavizadas en el sur; comercio, pesca y artesanía en el norte.</p><p>Tras la guerra de los Siete Años (1756-1763), Gran Bretaña estaba endeudada y decidió que los colonos pagaran parte de la factura. Les impuso nuevos tributos y limitó su expansión hacia el oeste. Los colonos respondieron con un principio liberal: no aceptarían impuestos aprobados en un Parlamento donde no tenían diputados.</p><p>El conflicto desembocó en guerra en 1775. El <b>4 de julio de 1776</b> los representantes de las colonias aprobaron la <mark>Declaración de Independencia</mark>, y tras años de lucha, con la ayuda decisiva de Francia y España, vencieron en Yorktown (1781). Gran Bretaña reconoció la independencia en la Paz de Versalles (1783). Nacía un país nuevo, los Estados Unidos de América, que fue un ejemplo para los liberales europeos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Bandera de trece franjas y la fecha de 1776">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="40" y="24" width="180" height="8" fill="var(--red)"/><rect x="40" y="32" width="180" height="8" fill="var(--card)"/><rect x="40" y="40" width="180" height="8" fill="var(--red)"/><rect x="40" y="48" width="180" height="8" fill="var(--card)"/><rect x="40" y="56" width="180" height="8" fill="var(--red)"/><rect x="40" y="64" width="180" height="8" fill="var(--card)"/><rect x="40" y="72" width="180" height="8" fill="var(--red)"/><rect x="40" y="80" width="180" height="8" fill="var(--card)"/><rect x="40" y="88" width="180" height="8" fill="var(--red)"/><rect x="40" y="96" width="180" height="8" fill="var(--card)"/><rect x="40" y="104" width="180" height="8" fill="var(--red)"/><rect x="40" y="112" width="180" height="8" fill="var(--card)"/><rect x="40" y="120" width="180" height="8" fill="var(--red)"/>
        <rect x="40" y="24" width="76" height="56" fill="var(--pen)"/>
        <circle cx="96" cy="52" r="2.4" fill="#fff"/><circle cx="93.93820846175778" cy="60.36501709678784" r="2.4" fill="#fff"/><circle cx="88.22516544116081" cy="66.81370958608582" r="2.4" fill="#fff"/><circle cx="80.16966024459582" cy="69.86875973376497" r="2.4" fill="#fff"/><circle cx="71.61711203323436" cy="68.83029236833747" r="2.4" fill="#fff"/><circle cx="64.52680653292018" cy="63.93620784833431" r="2.4" fill="#fff"/><circle cx="60.523047286331064" cy="56.30768195717604" r="2.4" fill="#fff"/><circle cx="60.523047286331064" cy="47.69231804282396" r="2.4" fill="#fff"/><circle cx="64.52680653292018" cy="40.06379215166568" r="2.4" fill="#fff"/><circle cx="71.61711203323435" cy="35.16970763166253" r="2.4" fill="#fff"/><circle cx="80.16966024459582" cy="34.131240266235025" r="2.4" fill="#fff"/><circle cx="88.2251654411608" cy="37.18629041391418" r="2.4" fill="#fff"/><circle cx="93.93820846175778" cy="43.63498290321217" r="2.4" fill="#fff"/>
        <rect x="40" y="24" width="180" height="104" fill="none" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="158" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1776: trece colonias</text>
      </svg>`,
    },
    {
      html: `<h3>1.3 La Declaración de 1776 y la Constitución de 1787</h3><p>Los impuestos sobre el papel (1765) o el té indignaron a los colonos: «no hay impuestos sin representación». En el <b>motín del té de Boston</b> (1773) arrojaron al mar un cargamento de té británico, y Londres respondió con dureza.</p><p>La Declaración de Independencia, redactada por <b>Thomas Jefferson</b>, es un texto profundamente ilustrado. Afirma que «todos los hombres son creados iguales» y que tienen derechos inalienables, como la vida, la libertad y la búsqueda de la felicidad; que los gobiernos se crean para proteger esos derechos y que, si no lo hacen, el pueblo puede cambiarlos. Son ideas de Locke.</p><p>La <mark>Constitución de 1787</mark>, la primera constitución escrita del mundo que sigue vigente, creó una <b>república federal</b>: los estados conservan amplias competencias, pero comparten un gobierno común. Aplicó la división de poderes de Montesquieu: un <b>presidente</b> elegido (ejecutivo), un <b>Congreso</b> con dos cámaras (legislativo) y un <b>Tribunal Supremo</b> (judicial). En 1791 se añadió una Declaración de Derechos. Su gran contradicción fue mantener la esclavitud, que no se abolió hasta 1865, tras una guerra civil.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: independencia de Estados Unidos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1765</text><text x="47.35" y="45.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">impuesto del</text><text x="47.35" y="56.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">papel</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1773</text><text x="79" y="153.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">motín del té</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1776</text><text x="130" y="45.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">Declaración de</text><text x="130" y="56.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">Independencia</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1783</text><text x="181" y="153.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Paz de Versalles</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1787</text><text x="212.65" y="51.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Constitución</text></g></svg>`,
      video: {
        id: "nMA5ykesU0I",
        titulo: "La Independencia de Estados Unidos en 11 minutos",
        canal: "Academia Play",
        vistas: 5497087,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.4 Las causas de la Revolución francesa</h3><p>Francia era el país más poblado de Europa occidental (unos 28 millones de habitantes) y el corazón de la Ilustración. A finales del siglo XVIII sufría una triple crisis:</p><ul><li><b>Crisis financiera</b>: la monarquía estaba en quiebra por las guerras (incluida la ayuda a Estados Unidos) y los gastos de la corte. La mitad del presupuesto se iba en pagar intereses de la deuda.</li><li><b>Crisis económica</b>: las malas cosechas de 1788 dispararon el precio del pan, que llegó a costar más de la mitad del salario de un trabajador.</li><li><b>Crisis social y política</b>: la burguesía, influida por la Ilustración, no aceptaba que nobles y clero no pagaran impuestos ni que el nacimiento decidiera los cargos.</li></ul><p>Los ministros propusieron que los privilegiados pagaran impuestos, pero la nobleza se negó y exigió reunir los <mark>Estados Generales</mark>, la asamblea de los tres estamentos, que no se convocaba desde 1614. Luis XVI la convocó para mayo de 1789. En toda Francia se redactaron los <b>cuadernos de quejas</b>, donde la población expresó sus reclamaciones. Se habían creado las condiciones para un estallido.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fases de la Revolución francesa de 1789 a 1799">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--red)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1789</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Bastilla</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Derechos</text><circle cx="98" cy="90" r="7" fill="var(--red)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1791</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">monarquía</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">constitucional</text><circle cx="162" cy="90" r="7" fill="var(--red)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1793</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Convención</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">y Terror</text><circle cx="226" cy="90" r="7" fill="var(--red)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1799</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">golpe de</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Napoleón</text>
  </svg>`,
    },
    {
      html: `<h3>1.5 De los Estados Generales a la toma de la Bastilla</h3><p>En los Estados Generales cada estamento votaba por separado y tenía un voto. Así, la nobleza y el clero (dos votos) siempre podían imponerse al tercer estado (un voto), aunque este representaba al 95 % de la población. El tercer estado, que tenía tantos diputados como los otros dos juntos, exigió el <b>voto por persona</b>. El rey se negó.</p><p>El 17 de junio de 1789 los diputados del tercer estado, con algunos nobles y clérigos, se proclamaron <mark>Asamblea Nacional</mark>: afirmaban representar a toda la nación. Cuando el rey cerró su sala, se reunieron en un frontón y juraron no separarse hasta dar una constitución a Francia: el <b>juramento del Juego de Pelota</b> (20 de junio). Era un acto revolucionario: la soberanía pasaba del rey a la nación.</p><p>Luis XVI concentró tropas en torno a París. El pueblo temió un golpe y el 14 de julio asaltó la <b>Bastilla</b>. En el campo, el «Gran Miedo» llevó a los campesinos a quemar castillos y los documentos de sus rentas. La noche del 4 de agosto la Asamblea <b>abolió los privilegios y el régimen señorial</b>, y el 26 de agosto aprobó la <mark>Declaración de los Derechos del Hombre y del Ciudadano</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="De los Estados Generales a la Asamblea: mayo 1789: Estados Generales → el tercer estado pide votar por persona → junio: se proclama Asamblea Nacional → juramento del Juego de Pelota"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">De los Estados Generales a la</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Asamblea</text><rect x="30" y="42.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="57.8" text-anchor="middle" font-size="9.5" >mayo 1789: Estados Generales</text><path d="M130 68.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="77.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="87.4" text-anchor="middle" font-size="9.5" >el tercer estado pide votar por</text><text x="130" y="98.3" text-anchor="middle" font-size="9.5" >persona</text><path d="M130 103.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="112.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="122.4" text-anchor="middle" font-size="9.5" >junio: se proclama Asamblea</text><text x="130" y="133.3" text-anchor="middle" font-size="9.5" >Nacional</text><path d="M130 138.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="147.0" width="200" height="25.0" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="162.8" text-anchor="middle" font-size="9.5" >juramento del Juego de Pelota</text></g></svg>`,
    },
    {
      html: `<h3>1.6 Las fases de la Revolución</h3><table class="tb"><thead><tr><th>Fase</th><th>Fechas</th><th>Hechos clave</th></tr></thead><tbody><tr><td>Monarquía constitucional</td><td>1789-1792</td><td>Declaración de Derechos, Constitución de 1791 (sufragio censitario), huida fallida del rey</td></tr><tr><td>República jacobina (Convención)</td><td>1792-1794</td><td>ejecución de Luis XVI, sufragio universal masculino, guerra y Terror de Robespierre</td></tr><tr><td>Directorio</td><td>1795-1799</td><td>vuelve la burguesía moderada; inestabilidad; golpe de Napoleón</td></tr></tbody></table><p>La <b>Constitución de 1791</b> estableció una monarquía constitucional con división de poderes, pero el rey intentó huir al extranjero y fue detenido en Varennes; perdió toda credibilidad. Austria y Prusia declararon la guerra a Francia. En 1792 se proclamó la <b>República</b> y en enero de 1793 Luis XVI fue guillotinado.</p><p>En la Convención se enfrentaron los <b>girondinos</b>, burgueses moderados, y los <b>jacobinos</b>, el grupo más radical, dirigido por <b>Robespierre</b> y apoyado por los <b>sans-culottes</b>, el pueblo humilde de París. Los jacobinos se impusieron en 1793. Aprobaron el sufragio universal masculino y medidas populares, como fijar el precio máximo del pan, pero también instauraron el <mark>Terror</mark>: miles de supuestos enemigos de la Revolución fueron ejecutados. En 1794 el propio Robespierre fue derribado y guillotinado. El <b>Directorio</b> devolvió el poder a la burguesía moderada y al sufragio censitario, pero fue incapaz de dar estabilidad.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los grupos de la Revolución: Girondinos, Jacobinos, Sans-culottes, Monárquicos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Los grupos de la Revolución</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Girondinos</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >burguesía moderada</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Jacobinos</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >radicales, con</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >Robespierre</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Sans-culottes</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >pueblo humilde de</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >París</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Monárquicos</text><text x="192" y="150.5" text-anchor="middle" font-size="10" >defensores del rey</text></g></svg>`,
      video: {
        id: "AYD609Lfn_I",
        titulo: "La Revolución francesa en 10 minutos",
        canal: "Memorias de Pez",
        vistas: 973097,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.7 Napoleón: de cónsul a emperador</h3><p>En medio de la inestabilidad destacó un joven general corso, <b>Napoleón Bonaparte</b>, que había ganado brillantes victorias en Italia y Egipto. En noviembre de 1799 dio un <b>golpe de Estado</b> (el 18 de Brumario) y se proclamó primer cónsul. En 1802 se hizo cónsul vitalicio y en 1804 se coronó <mark>emperador</mark>, en presencia del papa, poniéndose él mismo la corona.</p><p>Gobernó de forma autoritaria: controló la prensa, persiguió a la oposición y reunió en sus manos casi todo el poder. Sin embargo, consolidó muchas conquistas de la Revolución. Firmó un Concordato con la Iglesia, ordenó la administración en departamentos dirigidos por prefectos y creó el Banco de Francia.</p><p>Sus ejércitos, organizados con el reclutamiento masivo de ciudadanos, vencieron una y otra vez a las coaliciones de monarquías europeas: en Austerlitz (1805) derrotó a Austria y Rusia. Hacia 1810 dominaba casi toda Europa directamente o mediante reyes que eran familiares suyos, como su hermano José, rey de España desde 1808. Solo Gran Bretaña, dueña del mar tras la batalla de Trafalgar (1805), resistía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Legado de Napoleón: lo que extendió y lo que restauró el Congreso de Viena">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--pen)" font-family="Baloo 2, sans-serif">Napoleón</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Código Civil</text><text x="69" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">igualdad legal</text><text x="69" y="112" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">fin del feudalismo</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">imperio europeo</text><text x="69" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">1799-1815</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--muted)" font-family="Baloo 2, sans-serif">Viena 1815</text>
    <text x="191" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">vuelven los reyes</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">absolutos</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Santa Alianza</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">fronteras nuevas</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Restauración</text>
  </svg>`,
      video: {
        id: "VR_RWeqSvfc",
        titulo: "Napoleón Bonaparte: su historia",
        canal: "Daniel Geohistoria",
        vistas: 483019,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.8 La obra de Napoleón y su caída</h3><p>El legado más duradero de Napoleón es el <mark>Código Civil</mark> (1804), que ordenó en un solo texto las leyes sobre personas, familia y propiedad. Consagraba la igualdad ante la ley, la propiedad privada, la libertad de trabajo y el matrimonio civil, aunque mantenía a la mujer casada sometida al marido. Se aplicó en los territorios conquistados y sirvió de modelo a los códigos de muchos países, incluido el español de 1889. Creó también los <b>liceos</b>, escuelas secundarias públicas para formar funcionarios y oficiales.</p><p>Paradójicamente, sus conquistas despertaron el <b>nacionalismo</b> de los pueblos ocupados, que veían a los franceses como invasores. En España, el levantamiento de 1808 inició una larga guerra de guerrillas. En 1812 Napoleón invadió Rusia con más de 600 000 soldados; el invierno y la táctica rusa de tierra quemada destruyeron su ejército. Derrotado en Leipzig (1813), abdicó y fue desterrado a la isla de Elba. Escapó en 1815 y gobernó cien días, hasta su derrota definitiva en <b>Waterloo</b>. Murió desterrado en la isla de Santa Elena en 1821.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La herencia de Napoleón: Código Civil, Estado centralizado, Educación, Nacionalismo"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">La herencia de Napoleón</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Código Civil</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >igualdad ante la</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >ley, propiedad</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.5" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Estado</text><text x="192" y="59.2" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">centralizado</text><text x="192" y="76.3" text-anchor="middle" font-size="10" >departamentos y</text><text x="192" y="87.8" text-anchor="middle" font-size="10" >prefectos</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Educación</text><text x="68" y="150.5" text-anchor="middle" font-size="10" >liceos públicos</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Nacionalismo</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >reacción de los</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >pueblos ocupados</text></g></svg>`,
    },
    {
      html: `<h3>1.9 La Restauración: el Congreso de Viena</h3><p>Tras la caída de Napoleón, las potencias vencedoras, Austria, Rusia, Prusia y Gran Bretaña, se reunieron en el <mark>Congreso de Viena</mark> (1814-1815), dirigido por el canciller austriaco <b>Metternich</b>. Su objetivo era borrar la herencia revolucionaria y volver al orden anterior a 1789. Por eso esta etapa se llama <b>Restauración</b>.</p><p>El Congreso tomó tres tipos de decisiones. Restauró a los reyes legítimos destronados por Napoleón, como Luis XVIII en Francia o Fernando VII en España, y el <b>absolutismo</b>. Redibujó el mapa de Europa según los intereses de las potencias, sin consultar a los pueblos: por ejemplo, Bélgica quedó unida a Holanda, y Alemania e Italia siguieron divididas en muchos Estados. Y estableció un sistema para mantener ese orden: el <b>principio de intervención</b>.</p><p>Para aplicarlo, Rusia, Austria y Prusia formaron la <b>Santa Alianza</b> (1815), que se comprometía a intervenir militarmente contra cualquier revolución liberal. Así lo hizo en 1823, cuando un ejército francés, los Cien Mil Hijos de San Luis, entró en España para devolver el poder absoluto a Fernando VII. Pero las ideas liberales y nacionalistas ya no se podían borrar.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Revolución frente a Restauración: Revolución frente a Restauración"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Revolución frente a Restauración</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Revolución</text><text x="67" y="72.1" text-anchor="middle" font-size="9.5" >soberanía nacional</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >constitución</text><text x="67" y="125.6" text-anchor="middle" font-size="9.5" >igualdad ante la</text><text x="67" y="136.5" text-anchor="middle" font-size="9.5" >ley</text><text x="67" y="160.6" text-anchor="middle" font-size="9.5" >naciones libres</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Restauración</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >soberanía del rey</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >absolutismo</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >privilegios</text><text x="193" y="155.1" text-anchor="middle" font-size="9.5" >mapa de las</text><text x="193" y="166.0" text-anchor="middle" font-size="9.5" >potencias</text></g></svg>`,
    },
    {
      html: `<h3>1.10 Las oleadas revolucionarias de 1820, 1830 y 1848</h3><p>Contra la Restauración estallaron tres <mark>oleadas revolucionarias</mark>, protagonizadas por la burguesía liberal, estudiantes y, cada vez más, trabajadores.</p><p>La de <b>1820</b> empezó en España con el pronunciamiento de Riego, que obligó a Fernando VII a jurar la Constitución de 1812; se extendió a Portugal, Nápoles y Grecia, que inició su independencia del Imperio otomano. Salvo Grecia, la Santa Alianza aplastó estos movimientos.</p><p>La de <b>1830</b> derribó en Francia a Carlos X, último rey absolutista, y lo sustituyó por Luis Felipe de Orleans, el «rey burgués», con una monarquía liberal de sufragio censitario. Bélgica se independizó de Holanda. Fue el triunfo del <b>liberalismo moderado</b> en Europa occidental.</p><p>La de <b>1848</b>, la «primavera de los pueblos», fue la más extensa: París, Viena, Berlín, Milán, Budapest… Tuvo rasgos nuevos: reclamó el <b>sufragio universal masculino</b> y la república (es la revolución democrática), contó con participación obrera y combinó liberalismo y nacionalismo. En Francia proclamó la Segunda República. Aunque casi todas fracasaron, acabaron con la servidumbre en Austria y dejaron claro que el absolutismo tenía los días contados.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Oleadas revolucionarias y unificaciones">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--pen)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1820</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">España,</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Italia</text><circle cx="98" cy="90" r="7" fill="var(--pen)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1830</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Francia,</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Bélgica</text><circle cx="162" cy="90" r="7" fill="var(--pen)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1848</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">primavera de</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">los pueblos</text><circle cx="226" cy="90" r="7" fill="var(--pen)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1871</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Alemania</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">unificada</text>
  </svg>`,
    },
    {
      html: `<h3>1.11 El nacionalismo y las unificaciones de Italia y Alemania</h3><p>El <mark>nacionalismo</mark> defiende que cada <b>nación</b>, un pueblo con lengua, historia, cultura y tradiciones comunes y con conciencia de serlo, debe tener su propio Estado. Hubo nacionalismos <b>disgregadores</b>, que querían separarse de un imperio, como Grecia frente al Imperio otomano (1830) o los húngaros frente a Austria, y <b>unificadores</b>, que querían reunir territorios divididos.</p><p><b>Italia</b> estaba fragmentada en varios Estados, algunos bajo control austriaco. La unificación la dirigió el reino de <b>Piamonte</b>, con su primer ministro <b>Cavour</b>, que con ayuda francesa expulsó a Austria del norte, mientras el revolucionario <b>Garibaldi</b> conquistaba el sur con sus «camisas rojas». En 1861 se proclamó el reino de Italia con Víctor Manuel II; Venecia se incorporó en 1866 y Roma, en 1870, que se convirtió en capital.</p><p><b>Alemania</b> la unificó <b>Prusia</b>, dirigida por el canciller <b>Bismarck</b>, con una política de «hierro y sangre»: venció a Dinamarca (1864), a Austria (1866) y a Francia (1870). En 1871 se proclamó en el palacio de Versalles el <b>II Reich</b> o Imperio alemán, con Guillermo I como káiser. Nacía una gran potencia en el centro de Europa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos tipos de nacionalismo: Unificador, Disgregador"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Dos tipos de nacionalismo</text><rect x="10.0" y="28.0" width="116.0" height="142.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Unificador</text><text x="68" y="101.5" text-anchor="middle" font-size="10" >reunir Estados</text><text x="68" y="113.0" text-anchor="middle" font-size="10" >divididos: Italia</text><text x="68" y="124.5" text-anchor="middle" font-size="10" >y Alemania</text><rect x="134.0" y="28.0" width="116.0" height="142.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Disgregador</text><text x="192" y="101.5" text-anchor="middle" font-size="10" >separarse de un</text><text x="192" y="113.0" text-anchor="middle" font-size="10" >imperio: Grecia,</text><text x="192" y="124.5" text-anchor="middle" font-size="10" >Bélgica, Hungría</text></g></svg>`,
    },
    {
      html: `<h3>1.12 El legado de las revoluciones liberales</h3><p>Entre 1776 y 1871 Europa y América cambiaron por completo. En casi todos los países occidentales desaparecieron la sociedad estamental, el régimen señorial y los gremios, y se impusieron <b>constituciones</b>, parlamentos y la igualdad ante la ley. Es el inicio de la <mark>Edad Contemporánea</mark>.</p><p>Pero los principios proclamados eran más amplios que su aplicación. La Declaración de 1789 hablaba de los derechos «del hombre», y lo decía literalmente: en 1791 <b>Olympe de Gouges</b> publicó una <i>Declaración de los Derechos de la Mujer y de la Ciudadana</i> y en 1793 fue guillotinada. Las mujeres no lograron el voto hasta el siglo XX. Tampoco los pobres votaban, por el sufragio censitario, y la esclavitud siguió en las colonias durante décadas, a pesar de la revolución de los esclavos de Haití (1791-1804), que creó la primera república negra.</p><p>Aun así, esos principios se convirtieron en una herramienta para reclamar más derechos: obreros, sufragistas o pueblos colonizados los usarán para exigir que la igualdad fuera real. Liberalismo y nacionalismo, las dos grandes fuerzas del siglo XIX, siguen presentes en la política actual.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Lo que quedó pendiente: Mujeres, Pobres, Esclavitud, Pueblos sin Estado"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Lo que quedó pendiente</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Mujeres</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >sin voto ni</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >igualdad civil</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Pobres</text><text x="192" y="64.0" text-anchor="middle" font-size="10" >excluidos por el</text><text x="192" y="75.5" text-anchor="middle" font-size="10" >sufragio</text><text x="192" y="87.0" text-anchor="middle" font-size="10" >censitario</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Esclavitud</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >siguió en las</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >colonias</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.5" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Pueblos sin</text><text x="192" y="134.2" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Estado</text><text x="192" y="151.3" text-anchor="middle" font-size="10" >nacionalismos</text><text x="192" y="162.8" text-anchor="middle" font-size="10" >frustrados</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "El ciclo de las revoluciones liberales",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo de 1776 a 1871 con las revoluciones liberales">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <path d="M30 100 H 650" stroke="var(--line)" stroke-width="4"/>
    <rect x="50" y="92" width="90" height="16" rx="8" fill="var(--pen)" opacity=".75"/><text x="95" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text><rect x="140" y="92" width="180" height="16" rx="8" fill="var(--red)" opacity=".75"/><text x="230" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text><rect x="320" y="92" width="290" height="16" rx="8" fill="var(--sun)" opacity=".75"/><text x="465" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text>
    <path d="M50 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="50" cy="100" r="5" fill="var(--ink)"/><text x="50" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1776</text><text x="30" y="54" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">independencia EE. UU.</text><path d="M140 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="140" cy="100" r="5" fill="var(--ink)"/><text x="140" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1789</text><text x="140" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Revolución francesa</text><path d="M230 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="230" cy="100" r="5" fill="var(--ink)"/><text x="230" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1804</text><text x="230" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Napoleón emperador</text><path d="M320 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="320" cy="100" r="5" fill="var(--ink)"/><text x="320" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1815</text><text x="320" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Waterloo y Viena</text><path d="M410 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="410" cy="100" r="5" fill="var(--ink)"/><text x="410" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1830</text><text x="410" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Francia y Bélgica</text><path d="M500 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="500" cy="100" r="5" fill="var(--ink)"/><text x="500" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1848</text><text x="500" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">primavera de los pueblos</text><path d="M610 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="610" cy="100" r="5" fill="var(--ink)"/><text x="610" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1871</text><text x="630" y="54" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">unificación alemana</text>
  </svg>`,
  },
  video: {
    id: "ttdq818TGD0",
    titulo: "La Revolución francesa en 14 minutos",
    canal: "Academia Play",
    vistas: 13089420,
    megusta: 0,
    busqueda: "revoluciones liberales resumen",
  },
  ejemplos: [
    {
      enunciado: "Analiza el lema «Libertad, igualdad, fraternidad» y relaciónalo con el Antiguo Régimen.",
      pasos: [
        "Libertad: frente al poder absoluto del rey, derechos individuales.",
        "Igualdad: frente a los privilegios de los estamentos, todos iguales ante la ley.",
        "Fraternidad: la nación como comunidad de ciudadanos y no de súbditos.",
      ],
      resultado: `Cada palabra niega un rasgo del Antiguo Régimen: absolutismo, privilegios y sociedad estamental.`,
    },
    {
      enunciado: "Explica por qué el voto por estamento perjudicaba al tercer estado.",
      pasos: [
        "En los Estados Generales cada estamento tenía un voto.",
        "Nobleza y clero sumaban 2 votos frente a 1.",
        "Aunque el tercer estado representaba al 95 % de la población, perdía siempre.",
      ],
      resultado: `El voto por estamento daba la mayoría a los privilegiados; votar por cabeza daba ventaja al tercer estado, que tenía tantos diputados como los otros dos juntos.`,
    },
    {
      enunciado: `Clasifica estos nacionalismos: Grecia (1830), Italia (1861), Bélgica (1830), Alemania (1871).`,
      pasos: [
        "Grecia se separa del Imperio otomano: disgregador.",
        "Bélgica se separa de los Países Bajos: disgregador.",
        "Italia y Alemania reúnen estados pequeños: unificadores.",
      ],
      resultado: "Disgregadores: Grecia y Bélgica. Unificadores: Italia y Alemania.",
    },
    {
      enunciado: `Comenta el artículo 1 de la Declaración de 1789: «Los hombres nacen y permanecen libres e iguales en derechos. Las distinciones sociales solo pueden fundarse en la utilidad común».`,
      pasos: [
        `Clasifica: texto jurídico-político, aprobado por la Asamblea Nacional francesa el 26 de agosto de 1789.`,
        "Idea principal: igualdad de derechos por nacimiento y libertad.",
        `Contexto: tres semanas antes se habían abolido los privilegios; rompe con la sociedad estamental.`,
        `Valoración: es la base de las declaraciones de derechos posteriores, aunque «hombres» excluía en la práctica a las mujeres.`,
      ],
      resultado: `El artículo destruye el principio del Antiguo Régimen (desigualdad por nacimiento) y funda la sociedad liberal basada en derechos iguales.`,
    },
    {
      enunciado: "Compara la Constitución de Estados Unidos (1787) con la francesa de 1791.",
      pasos: [
        "Forma de Estado: república federal en EE. UU.; monarquía constitucional en Francia.",
        "Ejecutivo: presidente elegido; rey hereditario con poderes limitados.",
        "Ambas: soberanía nacional y división de poderes, inspiradas en Locke y Montesquieu.",
        "Sufragio: restringido en ambas (propiedad, sexo y, en EE. UU., raza).",
      ],
      resultado: `Comparten los principios liberales, pero EE. UU. creó una república federal y Francia una monarquía constitucional de sufragio censitario.`,
    },
    {
      enunciado: "¿Fue Napoleón un hijo de la Revolución o su enterrador? Argumenta.",
      pasos: [
        `Hijo: ascendió gracias a la Revolución; mantuvo la igualdad ante la ley y la abolición de privilegios; Código Civil.`,
        "Enterrador: golpe de Estado, poder personal, censura, se coronó emperador.",
        "Difusión: llevó por Europa ideas revolucionarias, pero también ocupación y guerra.",
        `Conclusión: consolidó las conquistas sociales de la burguesía y suprimió las libertades políticas.`,
      ],
      resultado: `Napoleón fue las dos cosas: conservó la igualdad civil y la propiedad, pero liquidó la soberanía nacional y las libertades.`,
    },
  ],
  errores: [
    `Creer que la Revolución francesa empezó con la ejecución del rey: empezó en 1789; Luis XVI murió en 1793.`,
    `Confundir soberanía nacional (el poder reside en la nación) con sufragio universal (votan todos).`,
    `Pensar que el liberalismo del siglo XIX dejaba votar a todos: solía haber sufragio censitario.`,
    "Situar la independencia de EE. UU. después de la Revolución francesa: fue antes (1776).",
    `Atribuir la unificación alemana a Garibaldi: fue Bismarck; Garibaldi participó en la italiana.`,
    `Pensar que el Congreso de Viena castigó a Francia quitándole todo su territorio: le devolvió sus fronteras de 1792 y restauró a los Borbones.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué significa «no hay impuestos sin representación»?",
      sol: "Que no es legítimo cobrar impuestos a quien no tiene representantes que los aprueben.",
    },
    {
      nivel: "básico",
      q: "¿Qué fue el juramento del Juego de Pelota?",
      sol: `El compromiso de los diputados del tercer estado, en 1789, de no separarse hasta dar una constitución a Francia.`,
    },
    {
      nivel: "básico",
      q: "¿Por qué la toma de la Bastilla es un símbolo?",
      sol: `Era una prisión que representaba el poder absoluto del rey; su asalto el 14 de julio de 1789 marcó el inicio de la revolución popular.`,
    },
    {
      nivel: "básico",
      q: "¿Qué recogía el Código Civil de Napoleón?",
      sol: `La igualdad ante la ley, la propiedad privada, la libertad de trabajo y el matrimonio civil.`,
    },
    {
      nivel: "básico",
      q: "Define sufragio censitario.",
      sol: "Sistema en el que solo votan los hombres con cierto nivel de riqueza o de estudios.",
    },
    {
      nivel: "básico",
      q: "Enumera cinco principios del liberalismo político.",
      sol: `Constitución, soberanía nacional, división de poderes, igualdad ante la ley y derechos y libertades individuales (expresión, prensa, religión, propiedad).`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el motín del té de Boston?",
      sol: `En 1773 colonos de Boston, disfrazados, arrojaron al mar un cargamento de té británico en protesta por los impuestos aprobados sin su representación. Fue uno de los pasos hacia la guerra de independencia.`,
    },
    {
      nivel: "básico",
      q: "¿Quién redactó la Declaración de Independencia de EE. UU. y qué derechos proclama?",
      sol: `Thomas Jefferson. Proclama que todos los hombres son creados iguales y tienen derechos inalienables: la vida, la libertad y la búsqueda de la felicidad.`,
    },
    {
      nivel: "básico",
      q: "Cita las tres fases de la Revolución francesa con sus fechas.",
      sol: `Monarquía constitucional (1789-1792), República jacobina o Convención (1792-1794) y Directorio (1795-1799).`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la Santa Alianza?",
      sol: `Un pacto de 1815 entre Rusia, Austria y Prusia para intervenir militarmente contra cualquier revolución liberal y defender el absolutismo.`,
    },
    {
      nivel: "básico",
      q: "¿Qué hizo Olympe de Gouges?",
      sol: `Escribió en 1791 la Declaración de los Derechos de la Mujer y de la Ciudadana, reclamando para las mujeres los mismos derechos que la Revolución reconocía a los hombres. Fue guillotinada en 1793.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es una constitución?",
      sol: `La ley fundamental de un Estado, aprobada por los representantes de la nación, que organiza los poderes, limita su ejercicio y reconoce los derechos de los ciudadanos. Está por encima de las demás leyes.`,
    },
    {
      nivel: "básico",
      q: "¿Dónde y cuándo fue derrotado definitivamente Napoleón?",
      sol: `En la batalla de Waterloo (actual Bélgica), en junio de 1815, frente a británicos y prusianos.`,
    },
    {
      nivel: "medio",
      q: "Cita las tres crisis que llevaron a la Revolución francesa.",
      sol: `Financiera (deuda del Estado), de subsistencia (pan caro) y social y política (la burguesía rechaza los privilegios).`,
    },
    {
      nivel: "medio",
      q: "Explica qué fue el Terror.",
      sol: `El periodo (1793-1794) en que los jacobinos de Robespierre persiguieron y ejecutaron a miles de sospechosos de ser enemigos de la Revolución.`,
    },
    {
      nivel: "medio",
      q: "¿Qué decidió el Congreso de Viena?",
      sol: `Restaurar las monarquías absolutas, redibujar las fronteras de Europa y crear un sistema para frenar las revoluciones liberales.`,
    },
    {
      nivel: "medio",
      q: `¿Qué tienen en común la Declaración de Independencia de EE. UU. y la Declaración de Derechos del Hombre?`,
      sol: `Ambas afirman que las personas nacen libres e iguales y tienen derechos naturales que el gobierno debe respetar.`,
    },
    {
      nivel: "medio",
      q: `Explica por qué el voto por estamento en los Estados Generales era injusto para el tercer estado y cómo reaccionaron sus diputados.`,
      sol: `Cada estamento tenía un voto: nobleza y clero sumaban dos y se imponían al tercer estado (95 % de la población). Sus diputados exigieron votar por persona; ante la negativa del rey se proclamaron Asamblea Nacional (17 de junio de 1789) y juraron dar una constitución a Francia (Juego de Pelota).`,
    },
    {
      nivel: "medio",
      q: "¿Por qué ayudaron Francia y España a los colonos norteamericanos?",
      sol: `Para debilitar a su gran rival, Gran Bretaña, y vengar las pérdidas de la guerra de los Siete Años, no por simpatía con las ideas liberales. La ayuda agravó la deuda francesa, lo que contribuyó a la Revolución de 1789.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue el Terror y por qué terminó?",
      sol: `El periodo (1793-1794) en que el gobierno jacobino de Robespierre ejecutó a miles de supuestos enemigos de la Revolución, en plena guerra exterior y rebeliones internas. Terminó cuando los diputados moderados, temiendo ser los siguientes, derribaron y guillotinaron a Robespierre en julio de 1794.`,
    },
    {
      nivel: "medio",
      q: `Explica qué es el principio de intervención del Congreso de Viena y pon un ejemplo de su aplicación en España.`,
      sol: `El compromiso de las potencias absolutistas de intervenir militarmente en cualquier país donde triunfara una revolución liberal. En 1823 los Cien Mil Hijos de San Luis entraron en España y devolvieron el poder absoluto a Fernando VII, acabando con el Trienio Liberal.`,
    },
    {
      nivel: "medio",
      q: "¿Qué tuvo de nuevo la revolución de 1848?",
      sol: `Reclamó el sufragio universal masculino y la república (carácter democrático), contó con participación de obreros con reivindicaciones sociales y unió liberalismo y nacionalismo en muchos países a la vez (primavera de los pueblos).`,
    },
    {
      nivel: "medio",
      q: `Compara la unificación italiana y la alemana: quién la dirigió, con qué personajes y cuándo terminó.`,
      sol: `Italia: dirigida por el reino de Piamonte, con Cavour (diplomacia) y Garibaldi (conquista del sur); reino en 1861, Roma capital en 1870. Alemania: dirigida por Prusia, con Bismarck, mediante tres guerras (Dinamarca, Austria, Francia); II Reich proclamado en Versalles en 1871.`,
    },
    {
      nivel: "medio",
      q: "Explica la paradoja de que Napoleón difundiera el nacionalismo en Europa.",
      sol: `Al conquistar otros países llevó ideas revolucionarias como la soberanía nacional, pero la ocupación, los impuestos y el reclutamiento forzoso hicieron que los pueblos se unieran contra el invasor y tomaran conciencia de ser una nación (España, Alemania, Rusia).`,
    },
    {
      nivel: "medio",
      q: "Explica la revolución de Haití y por qué fue excepcional.",
      sol: `Entre 1791 y 1804 las personas esclavizadas de la colonia francesa de Saint-Domingue, dirigidas por Toussaint Louverture, se rebelaron, abolieron la esclavitud y vencieron a los ejércitos de Napoleón. Fue excepcional porque creó la primera república gobernada por antiguos esclavos y aplicó la igualdad de la Revolución a todas las personas, sin distinción de raza.`,
    },
    {
      nivel: "avanzado",
      q: "¿Qué papel tuvo Bismarck?",
      sol: "Canciller de Prusia que unificó Alemania tras tres guerras y proclamó el II Reich en 1871.",
    },
    {
      nivel: "avanzado",
      q: `Comenta: «Sostenemos como evidentes estas verdades: que todos los hombres son creados iguales» (1776). ¿Qué contradicción había en un país con esclavitud?`,
      sol: `Clasifica: Declaración de Independencia, texto político. Idea: igualdad natural de derechos, de raíz ilustrada (Locke). Contradicción: muchos firmantes, como el propio Jefferson, poseían esclavos, y la Constitución de 1787 mantuvo la esclavitud; la igualdad solo valía para hombres blancos libres. Se resolvió parcialmente en 1865 tras la guerra de Secesión, y la igualdad de derechos civiles llegó en el siglo XX.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué la toma de la Bastilla se convirtió en símbolo, si apenas tenía presos?",
      sol: `Porque representaba el poder arbitrario del rey para encarcelar sin juicio. Su caída mostró que el pueblo podía vencer a las fuerzas del rey y salvó a la Asamblea Nacional de una posible disolución por la fuerza. Por eso el 14 de julio es fiesta nacional en Francia.`,
    },
    {
      nivel: "avanzado",
      q: `Construye un eje cronológico con ocho hechos entre 1776 y 1871 y señala cuáles son revoluciones liberales y cuáles reacciones absolutistas.`,
      sol: `Ejemplo: 1776 Independencia de EE. UU. (liberal); 1789 Revolución francesa (liberal); 1799 golpe de Napoleón (autoritario); 1815 Congreso de Viena (reacción); 1820 oleada liberal; 1823 Cien Mil Hijos de San Luis (reacción); 1830 y 1848 oleadas liberales; 1871 unificación alemana (nacionalista).`,
    },
    {
      nivel: "avanzado",
      q: "Valora: «La Revolución francesa trajo la libertad, pero no la igualdad para todos».",
      sol: `Respuesta argumentada: trajo la igualdad ante la ley y abolió los privilegios, pero mantuvo desigualdades. Las mujeres quedaron excluidas de la ciudadanía (Olympe de Gouges), los pobres sin voto en las fases moderadas (sufragio censitario), la esclavitud colonial se abolió en 1794 y Napoleón la restableció en 1802. La libertad también se vio limitada durante el Terror y con Napoleón.`,
    },
    {
      nivel: "avanzado",
      q: `¿Siguen existiendo hoy nacionalismos unificadores y disgregadores? Pon ejemplos y compáralos con los del siglo XIX.`,
      sol: `Respuesta abierta. Ejemplos: la reunificación alemana de 1990 (unificador); independencias tras la disolución de la URSS o Yugoslavia, o movimientos independentistas en Escocia (disgregadores). Semejanza: identidad nacional basada en lengua, historia y cultura. Diferencia: hoy se plantean con más frecuencia por vías democráticas y en el marco de organizaciones como la UE.`,
    },
    {
      nivel: "avanzado",
      q: `Imagina que eres diputado del tercer estado en 1789. Escribe un cuaderno de quejas con cinco peticiones.`,
      sol: `Ejemplo: 1) votar por persona y no por estamento; 2) que nobleza y clero paguen impuestos según su riqueza; 3) abolir los derechos señoriales y el diezmo; 4) una constitución que limite el poder del rey; 5) libertad de prensa y fin de las detenciones arbitrarias. Las peticiones deben reflejar los problemas del Antiguo Régimen.`,
    },
  ],
  quiz: [
    {
      q: "¿Qué significa «soberanía nacional»?",
      o: [
        "Que el poder reside en el rey",
        "Que el poder reside en la Iglesia",
        "Que el poder reside en la nación, que elige a sus representantes",
        "Que cada región es independiente",
      ],
      a: 2,
      e: `Frente al derecho divino del rey, el liberalismo sitúa el origen del poder en el conjunto de los ciudadanos.`,
    },
    {
      q: "¿Qué hecho se considera el inicio de la Revolución francesa?",
      o: [
        "La batalla de Valmy",
        "La toma de la Bastilla (1789)",
        "La batalla de Waterloo",
        "La coronación de Napoleón",
      ],
      a: 1,
      e: "El 14 de julio de 1789 el pueblo de París asaltó la Bastilla, símbolo del absolutismo.",
    },
    {
      q: "El sufragio censitario permitía votar…",
      o: [
        "a todos los hombres",
        "a todos los adultos",
        "solo a los hombres con cierto nivel de riqueza",
        "a todos los propietarios y sus esposas",
      ],
      a: 2,
      e: `En el liberalismo inicial solo votaban los propietarios o quienes pagaban cierta cantidad de impuestos.`,
    },
    {
      q: "¿Qué hizo el Congreso de Viena (1815)?",
      o: [
        "Proclamar la república en Francia",
        "Restaurar las monarquías absolutas tras Napoleón",
        "Crear la Santa Sede",
        "Unificar Italia",
      ],
      a: 1,
      e: `Las potencias vencedoras devolvieron el trono a los reyes absolutos y redibujaron el mapa de Europa.`,
    },
    {
      q: "¿Qué país fue el primero en tener una constitución escrita?",
      o: ["Estados Unidos", "Gran Bretaña", "Francia", "España"],
      a: 0,
      e: "La Constitución de Estados Unidos de 1787 sigue vigente hoy, con enmiendas.",
    },
    {
      q: "La Declaración de Independencia de EE. UU. se firmó en…",
      o: ["1808", "1776", "1789", "1812"],
      a: 1,
      e: "El 4 de julio de 1776.",
    },
    {
      q: "En los Estados Generales el tercer estado exigía votar…",
      o: ["por estamento", "por persona", "a mano alzada del rey", "por sorteo"],
      a: 1,
      e: "Así aprovechaba su mayor número de diputados.",
    },
    {
      q: "El Terror lo dirigió…",
      o: ["Napoleón", "Robespierre", "Danton", "Luis XVI"],
      a: 1,
      e: "Desde el Comité de Salvación Pública.",
    },
    {
      q: "Napoleón fue derrotado definitivamente en…",
      o: ["Austerlitz", "Leipzig", "Waterloo", "Trafalgar"],
      a: 2,
      e: "En 1815.",
    },
    {
      q: "El II Reich alemán se proclamó en…",
      o: ["Roma, 1870", "Berlín, 1848", "Versalles, 1871", "Viena, 1815"],
      a: 2,
      e: "Tras vencer a Francia.",
    },
    {
      q: "«No hay impuestos sin representación» lo reclamaban…",
      o: ["los nobles franceses", "los colonos norteamericanos", "los obreros de 1848", "los jacobinos"],
      a: 1,
      e: `Los colonos se negaban a pagar impuestos aprobados en un Parlamento donde no tenían diputados.`,
    },
    {
      q: "La Constitución de EE. UU. de 1787 creó…",
      o: ["una monarquía constitucional", "una república federal", "un imperio", "una república centralista"],
      a: 1,
      e: "Con presidente, Congreso y Tribunal Supremo.",
    },
    {
      q: "El juramento del Juego de Pelota (1789) consistió en…",
      o: [
        "jurar fidelidad al rey",
        "no separarse hasta dar una constitución a Francia",
        "declarar la guerra a Austria",
        "abolir la Iglesia",
      ],
      a: 1,
      e: "Fue el acto que trasladó la soberanía del rey a la nación.",
    },
    {
      q: "La noche del 4 de agosto de 1789 la Asamblea…",
      o: [
        "ejecutó al rey",
        "abolió los privilegios y el régimen señorial",
        "coronó a Napoleón",
        "disolvió los Estados Generales",
      ],
      a: 1,
      e: "Fue el fin jurídico de la sociedad estamental en Francia.",
    },
    {
      q: "Luis XVI fue guillotinado en…",
      o: ["1789", "1791", "1793", "1799"],
      a: 2,
      e: "En enero de 1793, tras proclamarse la República.",
    },
    {
      q: "El Código Civil de Napoleón (1804) reconocía…",
      o: [
        "los privilegios de la nobleza",
        "la igualdad ante la ley y la propiedad privada",
        "el sufragio femenino",
        "la abolición de la propiedad",
      ],
      a: 1,
      e: "Fue modelo para muchos códigos europeos.",
    },
    {
      q: "¿Quién dirigió el Congreso de Viena?",
      o: ["Bismarck", "Metternich", "Robespierre", "Garibaldi"],
      a: 1,
      e: "El canciller austriaco quería volver al orden anterior a 1789.",
    },
    {
      q: "La revolución de 1830 en Francia llevó al trono a…",
      o: ["Carlos X", "Luis Felipe de Orleans", "Napoleón III", "Luis XVIII"],
      a: 1,
      e: "El «rey burgués», con monarquía liberal y sufragio censitario.",
    },
    {
      q: "¿Qué personaje conquistó el sur de Italia con los «camisas rojas»?",
      o: ["Cavour", "Garibaldi", "Víctor Manuel II", "Mazzini"],
      a: 1,
      e: "Garibaldi entregó sus conquistas al rey de Piamonte.",
    },
    {
      q: "Un nacionalismo disgregador busca…",
      o: [
        "unir varios Estados",
        "separarse de un Estado o imperio",
        "restaurar el absolutismo",
        "eliminar las fronteras",
      ],
      a: 1,
      e: "Como Grecia frente al Imperio otomano.",
    },
  ],
  examen: [
    {
      q: "El nacionalismo del siglo XIX defendía que…",
      o: [
        "cada nación debe tener su propio Estado",
        "Europa debía ser un solo imperio",
        "los reyes debían elegir sus fronteras",
        "cada ciudad debía ser independiente",
      ],
      a: 0,
      e: `Por eso impulsó la unificación de Italia y Alemania y la independencia de pueblos como Grecia o Bélgica.`,
    },
    {
      q: "La revolución de 1848 se diferenció de las anteriores porque…",
      o: [
        "fue solo en España",
        "pidió sufragio universal masculino y tuvo participación obrera",
        "reunió solo a la nobleza",
        "restauró el absolutismo",
      ],
      a: 1,
      e: `La «primavera de los pueblos» unió liberalismo, democracia y nacionalismo, y los obreros participaron por primera vez.`,
    },
    {
      q: "La fase más radical de la Revolución francesa fue…",
      o: ["la monarquía constitucional", "el Consulado", "la Convención y el Terror (1792-1794)", "el Directorio"],
      a: 2,
      e: "Con Robespierre se ejecutó al rey y a miles de opositores.",
    },
    {
      q: "La primera constitución escrita del mundo todavía vigente es la de…",
      o: ["Francia, 1791", "España, 1812", "Estados Unidos, 1787", "Gran Bretaña, 1689"],
      a: 2,
      e: "Creó una república federal con división de poderes.",
    },
    {
      q: "Los jacobinos eran…",
      o: [
        "el grupo más radical de la Revolución francesa",
        "monárquicos absolutistas",
        "el ejército de Napoleón",
        "diputados del clero",
      ],
      a: 0,
      e: "Los dirigía Robespierre.",
    },
    {
      q: "¿Qué potencia NO formaba parte de la Santa Alianza?",
      o: ["Rusia", "Austria", "Prusia", "Francia"],
      a: 3,
      e: "La formaron Rusia, Austria y Prusia en 1815.",
    },
    {
      q: "La unificación alemana la dirigió…",
      o: ["Austria", "Baviera", "Prusia", "Sajonia"],
      a: 2,
      e: "Con Bismarck como canciller.",
    },
    {
      q: "La primera república creada por antiguos esclavos fue…",
      o: ["Cuba", "Haití", "Brasil", "Jamaica"],
      a: 1,
      e: "Se independizó de Francia en 1804.",
    },
  ],
  feynman: [
    "Los principios del liberalismo y en qué se oponen al Antiguo Régimen",
    "Las tres fases de la Revolución francesa",
    "Qué conservó Napoleón de la Revolución y qué no",
    "Qué pedían las revoluciones de 1820, 1830 y 1848 y qué es el nacionalismo",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: REVOL. LIBERALES">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">REVOL. LIBERALES</text>
      <rect x="5" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--pen)">Liberalismo</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">constitución · soberanía · derechos</text><rect x="425" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--leaf)">EE. UU. 1776</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">independencia · Constitución 1787</text><rect x="5" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--red)">Francia 1789</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Bastilla · Derechos · Napoleón</text><rect x="425" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--sun)">1820-1848</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">oleadas · nacionalismo</text>
    </g></svg>`,
  tarjetas: [
    [
      "¿Qué es una constitución?",
      "La ley fundamental que organiza el Estado, limita el poder y reconoce los derechos.",
    ],
    ["14 de julio de 1789", "Toma de la Bastilla, inicio de la Revolución francesa."],
    ["Sufragio censitario", "Solo votan los hombres con cierta riqueza."],
    ["¿Qué restauró el Congreso de Viena (1815)?", "Las monarquías absolutas tras la caída de Napoleón."],
    ["Unificaciones del siglo XIX", "Italia (1861-1870) y Alemania (1871)."],
    ["Estados Generales", "Asamblea de los tres estamentos convocada por el rey de Francia en 1789."],
    ["Código Civil (1804)", "Ley de Napoleón que extendió la igualdad ante la ley."],
    ["Congreso de Viena", "Reunión de 1815 que restauró el absolutismo en Europa."],
    [
      "Declaración de los Derechos del Hombre y del Ciudadano",
      `Texto aprobado en Francia el 26 de agosto de 1789 que proclama la libertad y la igualdad en derechos.`,
    ],
    ["Terror", `Etapa de 1793-1794 en que el gobierno jacobino de Robespierre ejecutó a miles de opositores.`],
    [
      "Primavera de los pueblos",
      `Revoluciones de 1848: piden sufragio universal masculino y unen liberalismo y nacionalismo.`,
    ],
    ["Bismarck", "Canciller prusiano que unificó Alemania en 1871 con una política de «hierro y sangre»."],
  ],
  glosario: [
    [
      "Liberalismo",
      `Ideología que defiende la constitución, la soberanía nacional, la división de poderes y los derechos individuales.`,
    ],
    ["Constitución", "Ley fundamental de un Estado que organiza los poderes y reconoce derechos."],
    ["Soberanía nacional", "Principio según el cual el poder reside en la nación, que elige representantes."],
    ["Sufragio censitario", "Sistema en el que solo votan los hombres con cierta riqueza o estudios."],
    ["Sufragio universal masculino", "Derecho de voto de todos los hombres adultos."],
    ["Estados Generales", "Asamblea de los tres estamentos del reino de Francia."],
    ["Asamblea Nacional", "Órgano formado en 1789 por los diputados del tercer estado que asumió la soberanía."],
    ["Jacobinos", "Grupo revolucionario radical que gobernó Francia en 1793-1794."],
    ["Terror", "Política de represión masiva del gobierno de Robespierre."],
    ["Golpe de Estado", "Toma del poder por la fuerza, al margen de la ley."],
    ["Código Civil", "Conjunto ordenado de leyes sobre personas, familia y propiedad (Napoleón, 1804)."],
    ["Restauración", "Etapa posterior a 1815 en que se restablecieron las monarquías absolutas."],
    ["Santa Alianza", "Pacto de Rusia, Austria y Prusia para frenar las revoluciones liberales."],
    ["Nacionalismo", "Ideología que defiende que cada nación debe tener su propio Estado."],
    ["Nación", "Comunidad con lengua, historia y cultura comunes y conciencia de formar un pueblo."],
    [
      "República federal",
      `Estado sin rey formado por territorios con amplio autogobierno que comparten un gobierno común.`,
    ],
  ],
  situacion: {
    titulo: "Escribimos la constitución de la clase",
    reto: `Igual que la Asamblea Nacional de 1789, vuestra clase va a redactar una pequeña constitución que organice el grupo: quién decide, cómo se eligen los representantes, qué derechos tiene cada alumno y cómo se resuelven los conflictos. Debe respetar los principios liberales y mejorar lo que quedó pendiente en el siglo XIX.`,
    pasos: [
      `Leed fragmentos de la Declaración de 1789, de la Constitución de EE. UU. y de la Declaración de Olympe de Gouges.`,
      `En grupos, elaborad una propuesta para uno de los títulos: derechos, poder legislativo (asamblea), ejecutivo (delegados) y judicial (resolución de conflictos).`,
      "Decidid el sistema de voto y justificad por qué es más justo que el sufragio censitario.",
      "Debatid en asamblea las propuestas y votad por persona, no por grupo.",
      `Redactad el texto final con un preámbulo y explicad qué principio liberal aplica cada artículo.`,
    ],
    producto: `La «Constitución del grupo», con preámbulo, 10-15 artículos y una tabla que relaciona cada artículo con un principio liberal.`,
    evaluacion: [
      `Aplicación correcta de soberanía nacional, división de poderes, igualdad ante la ley y derechos.`,
      "Uso de las fuentes históricas trabajadas.",
      "Calidad del debate: argumentos, escucha y respeto de las reglas de votación.",
      "Redacción clara y coherente del texto final.",
    ],
  },
  familias: [
    `Leed juntos el artículo 1 de la Declaración de Derechos de 1789 y comparadlo con el artículo 14 de la Constitución española.`,
    `Preguntad qué derechos habrían tenido vuestros antepasados en 1830 según su sexo y riqueza.`,
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: las revoluciones liberales, el constitucionalismo y los nacionalismos del siglo XIX (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      "Comparar la Declaración de Independencia (1776) y la Declaración de Derechos (1789).",
      "Mapa de Europa en 1815 frente a 1871 para ver las unificaciones.",
      "Debate: ¿era democrático el liberalismo con sufragio censitario?",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    {
      t: "Revolución francesa, Wikipedia en español",
      url: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_francesa",
    },
  ],
  revisado: "2026-11-13",
};
