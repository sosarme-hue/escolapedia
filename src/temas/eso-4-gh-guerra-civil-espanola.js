// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Guerra Civil española",
  minutos: 110,
  objetivos: [
    "Explicar las causas y el inicio de la Guerra Civil",
    "Comparar la evolución de las dos zonas y la dimensión internacional",
    "Valorar las consecuencias humanas y la memoria democrática",
    "Explicar las principales batallas y la evolución de los frentes",
    "Valorar la memoria democrática y la cultura durante la guerra",
  ],
  claves: ["golpe de Estado", "bando republicano", "bando sublevado", "Brigadas Internacionales", "Guernica", "exilio"],
  pregunta: {
    texto: `En 1937 Picasso pintó un cuadro enorme en blanco, negro y gris, lleno de gritos, un caballo herido y una madre con su hijo muerto. Se llama «Guernica». ¿Qué había pasado?`,
    respuesta: `La Legión Cóndor, aviación de la Alemania nazi aliada de Franco, había bombardeado la villa vasca de Guernica. Era la <mark>Guerra Civil española</mark> (1936-1939), que empezó con un golpe militar contra la República y dejó cientos de miles de muertos y exiliados.`,
  },
  lectura: {
    titulo: "Un lunes de mercado",
    html: `<p>Guernica, 26 de abril de 1937. Es lunes, día de mercado, y la villa vizcaína está llena de campesinos de los alrededores, refugiados que huyen del frente y vecinos. A las cuatro y media de la tarde suenan las campanas de alarma. Durante casi tres horas, aviones alemanes de la Legión Cóndor y aviones italianos lanzan bombas explosivas e incendiarias y ametrallan a quienes huyen por los caminos. Al anochecer, buena parte del pueblo arde.</p><p>Unos días después, en París, Pablo Picasso lee las crónicas del periodista británico George Steer y empieza a pintar un enorme cuadro en blanco, negro y gris: una madre que grita con su hijo muerto en brazos, un caballo agonizante, un soldado despedazado, una bombilla que todo lo ilumina. El <i>Guernica</i> se convertirá en el símbolo universal del horror de la guerra contra la población civil.</p><p>Aquel bombardeo fue un episodio de la Guerra Civil española (1936-1939), un conflicto que enfrentó a españoles contra españoles, dividió familias y pueblos, atrajo a voluntarios de medio mundo y sirvió de ensayo para la Segunda Guerra Mundial. En este tema estudiarás sus causas, su desarrollo y sus terribles consecuencias.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 El golpe de Estado de julio de 1936</h3><p>Desde la primavera de 1936 un grupo de militares, coordinados por el general <b>Emilio Mola</b> («el Director»), preparaba un <mark>golpe de Estado</mark> contra el Gobierno del Frente Popular. Contaban con el apoyo de monárquicos, carlistas (los requetés), falangistas y buena parte de la derecha. El general Sanjurjo, exiliado en Portugal, debía encabezarlo; el general <b>Francisco Franco</b>, destinado en Canarias, se unió al final.</p><p>El 17 de julio se sublevó el ejército de África en Marruecos, y el 18 y 19 el levantamiento se extendió a la península. Los sublevados afirmaban que actuaban para salvar a España del caos y de una supuesta revolución comunista. El Gobierno de la República, desconcertado, tardó en reaccionar; Casares Quiroga dimitió y, tras un intento fallido de negociar, José Giral decidió entregar armas a las organizaciones obreras.</p><p>El golpe no triunfó en todo el país ni fracasó del todo: España quedó partida en dos zonas. Ese empate convirtió el golpe en una <mark>guerra civil</mark> que duró casi tres años, del 17 de julio de 1936 al 1 de abril de 1939. Sanjurjo murió en un accidente de avioneta al volver de Portugal, y Franco y Mola se convirtieron en los principales líderes sublevados.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los dos bandos de la guerra">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--bac)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--bac)" font-family="Baloo 2, sans-serif">Republicano</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">gobierno legal</text><text x="69" y="90" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">izquierdas, obreros</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">nacionalistas</text><text x="69" y="134" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">vascos y catalanes</text><text x="69" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">apoyo de la URSS</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--ink)" font-family="Baloo 2, sans-serif">Sublevado</text>
    <text x="191" y="68" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">militares golpistas</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">derechas, Falange</text><text x="191" y="112" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Iglesia, carlistas</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">terratenientes</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Alemania e Italia</text>
  </svg>`,
      video: {
        id: "5Zwv43MUA7s",
        titulo: "La Guerra Civil española en 13 minutos",
        canal: "Memorias de Pez",
        vistas: 1606606,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.2 Por qué el golpe se convirtió en guerra</h3><p>Los sublevados esperaban controlar el país en pocos días, como en los pronunciamientos del siglo XIX. Triunfaron en zonas agrarias y conservadoras: Galicia, Castilla y León, Navarra, Álava, parte de Aragón y de Extremadura, y ciudades andaluzas como Sevilla (con el general Queipo de Llano), Cádiz y Córdoba; también en Canarias, Baleares (salvo Menorca) y el protectorado de Marruecos.</p><p>Pero en <b>Madrid, Barcelona, Valencia, Bilbao</b> y casi todas las zonas industriales fracasó. Allí la resistencia de parte del ejército y, sobre todo, de las fuerzas de orden (Guardia de Asalto y, en algunos lugares, Guardia Civil), junto a las <b>milicias</b> de sindicatos y partidos de izquierda, derrotó a los sublevados. En Barcelona, el asalto al cuartel de Atarazanas; en Madrid, el del cuartel de la Montaña.</p><p>Cada bando tenía ventajas. La República conservaba las grandes ciudades, la industria, la mayor parte de la población, las reservas de oro del Banco de España y buena parte de la flota. Los sublevados tenían el <b>ejército de África</b>, las tropas más preparadas (legionarios y regulares marroquíes), muchos oficiales y las zonas cerealistas. Con fuerzas equilibradas, nadie podía ganar rápido: empezaba una guerra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="España en julio de 1936: Zona sublevada frente a Zona republicana"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">España en julio de 1936</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Zona sublevada</text><text x="67" y="66.6" text-anchor="middle" font-size="9.5" >Galicia, Castilla y</text><text x="67" y="77.5" text-anchor="middle" font-size="9.5" >León</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >Navarra, Álava</text><text x="67" y="125.6" text-anchor="middle" font-size="9.5" >Sevilla, Cádiz,</text><text x="67" y="136.5" text-anchor="middle" font-size="9.5" >Córdoba</text><text x="67" y="155.1" text-anchor="middle" font-size="9.5" >Canarias, Baleares,</text><text x="67" y="166.0" text-anchor="middle" font-size="9.5" >Marruecos</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Zona republicana</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >Madrid, Cataluña</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >Valencia, Murcia</text><text x="193" y="125.6" text-anchor="middle" font-size="9.5" >Asturias,</text><text x="193" y="136.5" text-anchor="middle" font-size="9.5" >Cantabria, Vizcaya</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >este de Andalucía</text></g></svg>`,
    },
    {
      html: `<h3>1.3 La dimensión internacional</h3><p>La guerra española estalló en una Europa dividida entre democracias, fascismos y comunismo. Por eso se internacionalizó desde el principio, y muchos la vieron como un <mark>ensayo de la Segunda Guerra Mundial</mark>.</p><p>El ejército de África estaba aislado en Marruecos, porque la flota seguía mayoritariamente fiel a la República. Franco pidió ayuda a Hitler y Mussolini, que enviaron aviones de transporte: fue el primer puente aéreo militar de la historia y permitió llevar miles de soldados a la península. Desde entonces, la Alemania nazi y la Italia fascista apoyaron a los sublevados con armas, aviones y hombres. Portugal, gobernado por Salazar, también los ayudó.</p><p><b>Francia</b>, con un Gobierno de Frente Popular, quiso ayudar a la República, pero temía una guerra europea y la reacción de su derecha. El <b>Reino Unido</b>, con sus inversiones en España y su política de apaciguamiento, prefería no intervenir. Ambos promovieron un <mark>Comité de No Intervención</mark>, firmado por 27 países, que prohibía enviar armas a España. Alemania, Italia y la URSS lo firmaron y lo incumplieron. En la práctica perjudicó sobre todo a la República, el gobierno legal, que no podía comprar armas a las democracias.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Apoyos internacionales de cada bando">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle">
    <path d="M56 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="56" y="34" fill="var(--ink)">Alemania</text><path d="M204 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="204" y="34" fill="var(--ink)">Italia</text><path d="M54 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="6" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="54" y="100" fill="var(--ink)">Portugal</text><path d="M206 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="158" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/><text x="206" y="100" fill="var(--ink)">URSS</text><path d="M56 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/><text x="56" y="164" fill="var(--ink)">México</text><path d="M204 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/><text x="204" y="164" fill="var(--ink)" font-size="10.5">Brigadas Int.</text>
    <circle cx="130" cy="96" r="34" fill="var(--red)"/>
    <text x="130" y="93" fill="#fff" font-size="11">ESPAÑA</text><text x="130" y="107" fill="#fff" font-size="11">1936</text>
  </g>
  </svg>`,
    },
    {
      html: `<h3>1.4 Ayuda exterior y Brigadas Internacionales</h3><table class="tb"><thead><tr><th>Bando</th><th>Recibió ayuda de</th><th>En qué consistía</th></tr></thead><tbody><tr><td>Sublevado</td><td>Alemania nazi e Italia fascista; Portugal</td><td>Legión Cóndor, aviones, tanques, unos 80.000 soldados italianos</td></tr><tr><td>Republicano</td><td>URSS y México</td><td>aviones, tanques y asesores pagados con el oro del Banco de España</td></tr><tr><td>Republicano</td><td>Brigadas Internacionales</td><td>unos 35.000-40.000 voluntarios de decenas de países</td></tr></tbody></table><p>Alemania envió la <b>Legión Cóndor</b>, una unidad aérea con unos 19 000 hombres en total, que probó en España armas y tácticas que luego usaría en la Segunda Guerra Mundial, como el bombardeo de ciudades. La URSS empezó a enviar material en octubre de 1936, a cambio del oro del Banco de España (el «oro de Moscú»), y con él llegaron asesores que aumentaron la influencia del Partido Comunista.</p><p>Las <mark>Brigadas Internacionales</mark>, organizadas por la Internacional Comunista, reunieron a voluntarios de más de cincuenta países: obreros, estudiantes, escritores, que veían la guerra como una lucha contra el fascismo. Participaron en la defensa de Madrid y en las principales batallas, y se retiraron a finales de 1938. También hubo voluntarios extranjeros en el bando sublevado, como irlandeses o rumanos, aunque menos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ayudas extranjeras: Alemania, Italia, URSS, Voluntarios"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Ayudas extranjeras</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Alemania</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >Legión Cóndor,</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >aviones, tanques</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Italia</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >unos 80 000</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >soldados</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">URSS</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >aviones, tanques,</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >asesores</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Voluntarios</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >Brigadas</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >Internacionales</text></g></svg>`,
    },
    {
      html: `<h3>1.5 Las fases de la guerra</h3><p>La guerra puede dividirse en <mark>cuatro grandes etapas</mark>. En la primera (julio de 1936-marzo de 1937) el ejército de África avanzó rápidamente desde Sevilla hacia el norte por Extremadura (matanza de Badajoz) y por el valle del Tajo. Franco desvió sus tropas para liberar el Alcázar de Toledo, asediado por los republicanos, y llegó a las puertas de Madrid en noviembre de 1936. La capital resistió con el lema <b>«¡No pasarán!»</b>, ayudada por las Brigadas Internacionales y las armas soviéticas. El Gobierno se trasladó a Valencia.</p><p>En la segunda (1937), tras fracasar en el Jarama y en Guadalajara, los sublevados conquistaron el <b>norte</b>: Vizcaya, Cantabria y Asturias, con su industria y sus minas. En la tercera (1938) llegaron al <b>Mediterráneo</b> por Vinaròs y partieron en dos la zona republicana. En la cuarta (1938-1939) la batalla del Ebro agotó al ejército republicano, cayó Cataluña y, tras un golpe interno en Madrid, la República se rindió.</p><p>La guerra fue larga porque Franco prefirió una conquista lenta y completa, que le permitía «limpiar» la retaguardia de enemigos, a una victoria rápida.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fases militares de la guerra">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--red)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1936</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">batalla de</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Madrid</text><circle cx="98" cy="90" r="7" fill="var(--red)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1937</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">frente norte</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Guernica</text><circle cx="162" cy="90" r="7" fill="var(--red)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1938</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Ebro</text><circle cx="226" cy="90" r="7" fill="var(--red)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1939</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">cae Cataluña</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">1 de abril</text>
  </svg>`,
    },
    {
      html: `<h3>1.6 De Madrid al norte: Jarama, Guadalajara y Guernica</h3><p>Tras fracasar el asalto frontal a <b>Madrid</b>, los sublevados intentaron rodearla. En febrero de 1937, en la batalla del <b>Jarama</b>, quisieron cortar la carretera de Valencia, sin éxito, con decenas de miles de bajas. En marzo, en <b>Guadalajara</b>, las tropas italianas fueron derrotadas por el ejército republicano: fue una victoria de gran efecto propagandístico.</p><p>Franco cambió de objetivo y atacó la franja norte republicana, aislada del resto. La campaña empezó con el general Mola y una intensa guerra aérea. El <mark>bombardeo de Guernica</mark> (26 de abril de 1937) por la Legión Cóndor, con apoyo italiano, destruyó la villa y mató a cientos de civiles; los sublevados intentaron culpar a los propios republicanos de incendiarla, pero la investigación periodística demostró la verdad. Bilbao cayó en junio, pese a su «cinturón de hierro»; Santander, en agosto, y Asturias, en octubre.</p><p>Para aliviar la presión sobre el norte, los republicanos lanzaron ofensivas en <b>Brunete</b> (julio) y <b>Belchite</b> (agosto), que lograron avances pequeños con un enorme coste. Con el norte, Franco ganó industria siderúrgica, minas de carbón y miles de prisioneros.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: 1936-1937"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">nov 1936</text><text x="47.35" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">defensa de</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Madrid</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">feb 1937</text><text x="79" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Jarama</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">mar 1937</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Guadalajara</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">abr 1937</text><text x="181" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Guernica</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">oct 1937</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">cae Asturias</text></g></svg>`,
      video: {
        id: "CESgr9hmh8I",
        titulo: "La Guerra Civil española: resumen fácil y breve",
        canal: "Haroo",
        vistas: 2315433,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.7 Teruel, el Ebro y el final de la guerra</h3><p>En diciembre de 1937 los republicanos tomaron <b>Teruel</b>, en pleno invierno y con temperaturas de hasta 18 grados bajo cero, pero los sublevados la recuperaron en febrero de 1938. Desde allí lanzaron una gran ofensiva por Aragón y en abril llegaron al Mediterráneo en Vinaròs: la zona republicana quedó partida en dos, Cataluña por un lado y el centro-sur por otro.</p><p>El jefe del Gobierno republicano, <b>Juan Negrín</b>, defendía resistir a toda costa, con la esperanza de que estallara la guerra en Europa y las democracias ayudaran a la República. Con ese objetivo, el ejército republicano cruzó el río en julio de 1938 y empezó la <mark>batalla del Ebro</mark>, la más larga y sangrienta de la guerra: casi cuatro meses de combates, con decenas de miles de muertos. Ese mismo septiembre, los acuerdos de Múnich, en los que Reino Unido y Francia cedieron ante Hitler, mostraron que las democracias no ayudarían. El ejército republicano, agotado, se retiró en noviembre.</p><p>En enero de 1939 cayó Barcelona y medio millón de personas huyeron a Francia. En Madrid, el coronel Casado dio un golpe contra Negrín para negociar la paz, pero Franco exigió la rendición sin condiciones. Sus tropas entraron en Madrid el 28 de marzo, y el <b>1 de abril de 1939</b> Franco firmó el último parte de guerra.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: 1938-1939"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">feb 1938</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">recuperan Teruel</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">abr 1938</text><text x="79" y="149.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">llegan al</text><text x="79" y="160.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Mediterráneo</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">jul-nov 1938</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">batalla del Ebro</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">ene 1939</text><text x="181" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">cae Barcelona</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1 abr 1939</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">fin de la guerra</text></g></svg>`,
      video: {
        id: "UtHURa_tYPk",
        titulo: "La batalla del Ebro: cuatro meses que decidieron la guerra",
        canal: "Cronópolis",
        vistas: 96948,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.8 La zona republicana: revolución y guerra</h3><p>En la zona republicana, el fracaso del golpe hundió el poder del Estado: el ejército y la policía se habían desintegrado en parte, y el poder real pasó a los <b>comités</b> y <b>milicias</b> de sindicatos y partidos. En Cataluña, Aragón y otras zonas, sobre todo donde la CNT era fuerte, se produjo una <mark>revolución social</mark>: se colectivizaron fábricas, transportes y tierras, que pasaron a ser gestionadas por los trabajadores; en algunos pueblos se abolió incluso el dinero.</p><p>Había dos visiones enfrentadas. Anarquistas y el POUM (comunistas antiestalinistas) querían hacer la revolución a la vez que la guerra. Comunistas, socialistas moderados y republicanos pensaban que primero había que ganar la guerra con un Estado fuerte, un ejército disciplinado y sin asustar a las democracias. Los gobiernos de <b>Largo Caballero</b> (1936-1937), que incorporó a anarquistas como ministros (entre ellos Federica Montseny, primera ministra de España), y de <b>Negrín</b> (1937-1939) reconstruyeron el Estado y crearon el Ejército Popular.</p><p>Las tensiones estallaron en los <b>Hechos de Mayo</b> de 1937 en Barcelona, combates en la calle entre anarquistas y poumistas contra comunistas y fuerzas del Gobierno. Tras ellos, el POUM fue ilegalizado y su líder, Andreu Nin, asesinado por agentes soviéticos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos visiones en la zona republicana: Revolución frente a Ganar la guerra"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Dos visiones en la zona republicana</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Revolución</text><text x="67" y="72.1" text-anchor="middle" font-size="9.5" >CNT-FAI y POUM</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >colectivizaciones</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >milicias</text><text x="67" y="160.6" text-anchor="middle" font-size="9.5" >comités locales</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Ganar la guerra</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >comunistas (PCE)</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >socialistas</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >republicanos</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >Estado fuerte</text></g></svg>`,
    },
    {
      html: `<h3>1.9 La zona sublevada: el nuevo Estado de Franco</h3><p>Los sublevados crearon en julio de 1936 una <b>Junta de Defensa Nacional</b> en Burgos. Necesitaban un mando único, y en septiembre de 1936 los generales eligieron a <b>Franco</b> como <mark>Generalísimo</mark> de los ejércitos y jefe del Gobierno del Estado; él se proclamó enseguida «jefe del Estado». Su prestigio venía del ejército de África y de la liberación del Alcázar de Toledo. Tras la muerte de Mola en un accidente aéreo (1937), su poder no tuvo rivales.</p><p>Franco construyó un Estado <b>autoritario</b>: prohibió los partidos y sindicatos de izquierda, suprimió la Constitución, las libertades y los estatutos de autonomía y concentró en su persona todos los poderes. En abril de 1937, por el <b>Decreto de Unificación</b>, fusionó a falangistas y carlistas en un partido único, <b>FET y de las JONS</b>, del que él era jefe. Se presentaba como «Caudillo» de España «por la gracia de Dios».</p><p>La <b>Iglesia católica</b>, que había sufrido una violencia terrible en la zona republicana, apoyó a los sublevados y los obispos calificaron la guerra de «cruzada». Franco le devolvió sus privilegios: anuló el divorcio y el matrimonio civil y le entregó la educación. El <b>Fuero del Trabajo</b> (1938) organizó la economía según modelos fascistas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gobiernos de cada zona">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="21" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/><rect x="14" y="21" width="80" height="30" rx="8" fill="var(--bac)"/><text x="54" y="40" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">República</text><text x="102" y="40" font-size="11.5" fill="var(--ink)">1936: Largo Caballero</text><rect x="14" y="55" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/><rect x="14" y="55" width="80" height="30" rx="8" fill="var(--bac)"/><text x="54" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">República</text><text x="102" y="74" font-size="11.5" fill="var(--ink)">1937-39: Negrín</text><rect x="14" y="89" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="14" y="89" width="80" height="30" rx="8" fill="var(--ink)"/><text x="54" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Sublevados</text><text x="102" y="108" font-size="11.5" fill="var(--ink)">1936: Franco, Caudillo</text><rect x="14" y="123" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><rect x="14" y="123" width="80" height="30" rx="8" fill="var(--ink)"/><text x="54" y="142" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Sublevados</text><text x="102" y="142" font-size="11.5" fill="var(--ink)">1937: partido único</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.10 La represión en las dos retaguardias</h3><p>En ambas zonas hubo una violencia terrible contra la población civil, lejos del frente. En la <b>zona republicana</b>, sobre todo en los primeros meses, cuando el Estado no controlaba la situación, grupos incontrolados de milicianos asesinaron a personas consideradas de derechas, a propietarios y a religiosos: casi 7 000 sacerdotes, monjas y frailes fueron asesinados y muchas iglesias, quemadas. Eran las «sacas» de las cárceles y los «paseos». La matanza de presos de <b>Paracuellos</b> (noviembre de 1936) fue el episodio más grave. Cuando el Gobierno recuperó el control, esta violencia se redujo mucho.</p><p>En la <b>zona sublevada</b>, la represión fue <mark>sistemática y organizada desde arriba</mark>: las instrucciones de Mola pedían ser «extremadamente violentos» para sembrar el terror. Se fusiló a maestros, sindicalistas, políticos, alcaldes y autoridades republicanas, a menudo sin juicio, como el poeta <b>Federico García Lorca</b> en Granada. En Badajoz (agosto de 1936) se ejecutó a cientos de personas en la plaza de toros. Esta represión continuó después de la guerra.</p><p>Los historiadores calculan unas 50 000 víctimas de la represión republicana y unas 100 000 durante la guerra en la sublevada, más otras 20 000-50 000 ejecuciones en la posguerra. Muchos siguen enterrados en fosas comunes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La violencia en las retaguardias: Zona republicana frente a Zona sublevada"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">La violencia en las retaguardias</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Zona republicana</text><text x="67" y="72.1" text-anchor="middle" font-size="9.5" >sobre todo en 1936</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >incontrolados</text><text x="67" y="125.6" text-anchor="middle" font-size="9.5" >religiosos,</text><text x="67" y="136.5" text-anchor="middle" font-size="9.5" >derechistas</text><text x="67" y="155.1" text-anchor="middle" font-size="9.5" >el Gobierno la</text><text x="67" y="166.0" text-anchor="middle" font-size="9.5" >frena</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Zona sublevada</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >toda la guerra</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >planificada</text><text x="193" y="125.6" text-anchor="middle" font-size="9.5" >maestros,</text><text x="193" y="136.5" text-anchor="middle" font-size="9.5" >sindicalistas</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >sigue en posguerra</text></g></svg>`,
    },
    {
      html: `<h3>1.11 Cultura, propaganda y arte en guerra</h3><p>La guerra fue también una batalla de imágenes y palabras. Ambos bandos usaron la <mark>propaganda</mark>: miles de carteles con colores llamativos animaban a alistarse, a trabajar, a no hablar con desconocidos o presentaban al enemigo como un monstruo. La radio tuvo un papel enorme: el general Queipo de Llano hacía desde Radio Sevilla charlas diarias amenazantes. Fotógrafos como Robert Capa y Gerda Taro (que murió en el frente de Brunete) llevaron la guerra a las revistas de todo el mundo.</p><p>En el pabellón de la República en la Exposición Internacional de París de 1937 se mostró el <b>Guernica</b> de Picasso, hoy en el Museo Reina Sofía de Madrid, que denuncia el horror de los bombardeos. Muchos escritores se comprometieron: <b>Antonio Machado</b> murió en el exilio en Colliure (Francia) en 1939; <b>Miguel Hernández</b>, que escribió poemas en las trincheras, murió en la cárcel en 1942. Escritores extranjeros como George Orwell, Ernest Hemingway o André Malraux contaron la guerra en sus libros.</p><p>Para proteger el patrimonio, la República creó la Junta del Tesoro Artístico, que trasladó las obras del <b>Museo del Prado</b> a Valencia, después a Cataluña y finalmente a Ginebra, bajo custodia de la Sociedad de Naciones; volvieron intactas en septiembre de 1939.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cultura en guerra: Guernica, Carteles, Escritores, Arte salvado"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Cultura en guerra</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Guernica</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >Picasso, París</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >1937</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Carteles</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >propaganda de</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >ambos bandos</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Escritores</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >Machado,</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >Hernández, Lorca</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Arte salvado</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >obras del Prado a</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >Ginebra</text></g></svg>`,
    },
    {
      html: `<h3>1.12 Las consecuencias de la guerra</h3><p>La Guerra Civil fue la mayor tragedia de la historia contemporánea de España. Sus consecuencias fueron:</p><ul><li><b>Demográficas</b>: unos 500 000 muertos por los combates, la represión, los bombardeos, el hambre y las enfermedades, y un descenso de los nacimientos.</li><li><b>Exilio</b>: en 1939 unas 450 000 personas cruzaron la frontera francesa; muchas fueron encerradas en campos como Argelès-sur-Mer. Unas 150 000 nunca volvieron. Fue un enorme exilio de científicos, médicos, maestros, escritores y artistas (Machado, Juan Ramón Jiménez, Severo Ochoa, Luis Buñuel); México acogió a unos 20 000. Miles de republicanos acabaron en campos nazis como Mauthausen.</li><li><b>Económicas</b>: destrucción de ciudades, puentes, fábricas y vías; pérdida de las reservas de oro; hambre durante años.</li><li><b>Políticas</b>: el fin de la democracia y el inicio de una dictadura que duró casi cuarenta años, con una dura represión de los vencidos.</li><li><b>Morales</b>: una sociedad dividida entre vencedores y vencidos durante décadas.</li></ul><p>Hoy la <mark>memoria democrática</mark> busca reconocer a todas las víctimas, localizar e identificar a los desaparecidos de las fosas comunes, reparar a sus familias y transmitir a las nuevas generaciones lo ocurrido para que no se repita.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Maleta del exilio con la cifra de 450 000 exiliados">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="70" y="58" width="120" height="78" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
        <path d="M108 58 V 44 H 152 V 58" fill="none" stroke="var(--ink)" stroke-width="3"/>
        <path d="M70 84 H 190" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="116" text-anchor="middle" font-size="20" font-weight="700" fill="var(--red)" font-family="Baloo 2, sans-serif">450 000</text>
        <text x="130" y="160" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">exiliados en 1939</text>
      </svg>`,
    },
  ],
  figura: {
    titulo: "Cronología de la Guerra Civil",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo de julio de 1936 a abril de 1939">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <path d="M30 100 H 650" stroke="var(--line)" stroke-width="4"/>
    <rect x="50" y="92" width="580" height="16" rx="8" fill="var(--red)" opacity=".75"/><text x="340" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif"></text>
    <path d="M50 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="50" cy="100" r="5" fill="var(--ink)"/><text x="50" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">jul. 1936</text><text x="30" y="54" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">golpe de Estado</text><path d="M150 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="150" cy="100" r="5" fill="var(--ink)"/><text x="150" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">nov. 1936</text><text x="150" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">batalla de Madrid</text><path d="M270 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="270" cy="100" r="5" fill="var(--ink)"/><text x="270" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">abr. 1937</text><text x="270" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Guernica</text><path d="M370 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="370" cy="100" r="5" fill="var(--ink)"/><text x="370" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">oct. 1937</text><text x="370" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">cae el norte</text><path d="M470 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="470" cy="100" r="5" fill="var(--ink)"/><text x="470" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">jul. 1938</text><text x="470" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">batalla del Ebro</text><path d="M560 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="560" cy="100" r="5" fill="var(--ink)"/><text x="560" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">ene. 1939</text><text x="560" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">cae Barcelona</text><path d="M630 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="630" cy="100" r="5" fill="var(--ink)"/><text x="630" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1-4-1939</text><text x="650" y="54" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">fin de la guerra</text>
  </svg>`,
  },
  video: {
    id: "yj9N9DTtdas",
    titulo: "La Guerra Civil española",
    canal: "Academia Play",
    vistas: 6342358,
    megusta: 120006,
    busqueda: "guerra civil española resumen",
  },
  ejemplos: [
    {
      enunciado: "Explica por qué la ayuda exterior fue decisiva para el resultado de la guerra.",
      pasos: [
        "Los sublevados recibieron mucha ayuda de Alemania e Italia, constante y a crédito.",
        "Gracias a ella pasaron el ejército de África a la Península en 1936.",
        "La República solo tuvo la ayuda de la URSS y México, pagada y más irregular.",
        "Francia y Reino Unido no ayudaron a la República por la No Intervención.",
      ],
      resultado: "El desequilibrio de ayudas favoreció claramente a los sublevados.",
    },
    {
      enunciado: "Analiza el Guernica como fuente histórica.",
      pasos: [
        "Autor: Picasso, 1937, por encargo de la República.",
        `Contenido: figuras deformadas, madre con hijo muerto, caballo herido, toro: dolor y destrucción.`,
        "Contexto: bombardeo de la villa vasca por la aviación alemana.",
        "Finalidad: denunciar ante el mundo la guerra y pedir apoyo.",
      ],
      resultado: "Es una fuente que muestra el sufrimiento civil y sirvió de propaganda contra el fascismo.",
    },
    {
      enunciado: "Ordena: caída de Madrid, Guernica, batalla del Ebro, golpe de Estado, caída de Cataluña.",
      pasos: [
        "Golpe: julio de 1936.",
        "Guernica: abril de 1937.",
        "Ebro: julio-noviembre de 1938.",
        "Cataluña: enero-febrero de 1939.",
        "Madrid: marzo de 1939.",
      ],
      resultado: "Golpe → Guernica → Ebro → Cataluña → Madrid.",
    },
    {
      enunciado: `Explica por qué el golpe de julio de 1936 no triunfó como un pronunciamiento del siglo XIX.`,
      pasos: [
        `En el XIX bastaba con que una parte del ejército se pronunciara para que el Gobierno cayera.`,
        "En 1936 una parte del ejército y de las fuerzas de orden se mantuvo fiel a la República.",
        `Los sindicatos y partidos obreros, muy organizados, formaron milicias y resistieron en las ciudades.`,
        `Resultado: cada bando controlaba aproximadamente la mitad del territorio y empezó una guerra.`,
      ],
      resultado: `La sociedad española de 1936, con organizaciones de masas y un ejército dividido, hizo imposible un golpe rápido.`,
    },
    {
      enunciado: "Compara la organización política de las dos zonas durante la guerra.",
      pasos: [
        `Republicana: gobierno legal con partidos diversos, enfrentados entre revolución y Estado; poder disperso al principio.`,
        "Sublevada: mando único militar desde septiembre de 1936; Franco jefe del Estado.",
        `Republicana: elecciones y Cortes mantenidas en teoría; sublevada: partido único (FET y de las JONS) desde 1937.`,
        "Consecuencia militar: la unidad de mando favoreció a los sublevados.",
      ],
      resultado: `La división interna debilitó a la República, mientras la concentración del poder en Franco dio cohesión a los sublevados.`,
    },
    {
      enunciado: "Analiza por qué la batalla del Ebro fue decisiva.",
      pasos: [
        `Objetivo republicano: unir las dos zonas y ganar tiempo hasta que estallara la guerra europea.`,
        `Desarrollo: julio-noviembre de 1938; avance inicial y luego desgaste bajo la superioridad aérea y artillera sublevada.`,
        `Contexto: los acuerdos de Múnich (septiembre 1938) demostraron que las democracias no intervendrían.`,
        "Resultado: el ejército republicano perdió sus mejores unidades y Cataluña quedó indefensa.",
      ],
      resultado: `El Ebro agotó al ejército republicano y abrió el camino a la caída de Cataluña y al final de la guerra.`,
    },
  ],
  errores: [
    `Decir que la guerra empezó porque estalló una revolución: empezó con un golpe militar que fracasó en parte.`,
    `Pensar que la No Intervención fue neutral en la práctica: Alemania e Italia ayudaron a los sublevados.`,
    "Atribuir el bombardeo de Guernica a la aviación republicana: fue la Legión Cóndor alemana.",
    "Creer que la represión terminó con la guerra: siguió en la posguerra.",
    "Confundir la batalla del Ebro (1938) con la defensa de Madrid (1936).",
    `Pensar que todos los españoles eligieron bando por ideología: muchas personas lucharon en el bando que controlaba su zona cuando fueron movilizadas.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Dónde triunfó y dónde fracasó el golpe de 1936?",
      sol: `Triunfó en Galicia, Castilla y León, Navarra, Canarias, parte de Andalucía y Marruecos; fracasó en Madrid, Barcelona, Valencia, Bilbao y las zonas industriales.`,
    },
    {
      nivel: "básico",
      q: "¿Quiénes eran los brigadistas internacionales?",
      sol: "Voluntarios extranjeros, unos 35.000-40.000, que vinieron a luchar por la República.",
    },
    {
      nivel: "básico",
      q: "¿Qué ocurrió en Guernica en 1937?",
      sol: "La aviación alemana de la Legión Cóndor bombardeó la villa y causó muchos muertos civiles.",
    },
    {
      nivel: "básico",
      q: "¿Cuándo terminó la guerra?",
      sol: "El 1 de abril de 1939, con el último parte de guerra de Franco.",
    },
    {
      nivel: "básico",
      q: "¿Cuántas personas se exiliaron al terminar la guerra?",
      sol: `Alrededor de medio millón cruzaron la frontera francesa a comienzos de 1939; muchos no volvieron nunca.`,
    },
    {
      nivel: "básico",
      q: "¿Quién coordinó el golpe de 1936 y quién mandaba el ejército de África?",
      sol: `Lo coordinó el general Emilio Mola, «el Director». El ejército de África lo mandaba el general Francisco Franco.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el «puente aéreo» del verano de 1936?",
      sol: `El traslado por aire de miles de soldados del ejército de África desde Marruecos a Sevilla con aviones alemanes e italianos, porque la flota republicana bloqueaba el Estrecho. Fue el primer puente aéreo militar de la historia.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la Legión Cóndor?",
      sol: `La unidad aérea alemana enviada por Hitler para ayudar a Franco, que bombardeó ciudades como Guernica y probó tácticas de la Segunda Guerra Mundial.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el «oro de Moscú»?",
      sol: `La mayor parte de las reservas de oro del Banco de España, que el Gobierno republicano envió a la URSS en 1936 para pagar las armas soviéticas.`,
    },
    {
      nivel: "básico",
      q: "¿Quién fue Federica Montseny?",
      sol: `Dirigente anarquista de la CNT, ministra de Sanidad en el Gobierno de Largo Caballero (1936-1937): la primera mujer ministra de España.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el Decreto de Unificación de 1937?",
      sol: `La orden de Franco que fusionó Falange y los carlistas en un partido único, FET y de las JONS, bajo su jefatura.`,
    },
    {
      nivel: "básico",
      q: "¿Quiénes fueron Robert Capa y Gerda Taro?",
      sol: `Fotógrafos de guerra que documentaron la Guerra Civil desde el bando republicano; sus imágenes dieron la vuelta al mundo. Gerda Taro murió en 1937 en el frente de Brunete.`,
    },
    {
      nivel: "básico",
      q: "¿Dónde murieron Antonio Machado y Miguel Hernández?",
      sol: `Machado murió en el exilio en Colliure (Francia) en febrero de 1939; Miguel Hernández, en la cárcel de Alicante en 1942.`,
    },
    {
      nivel: "básico",
      q: "¿Cuándo terminó oficialmente la Guerra Civil?",
      sol: "El 1 de abril de 1939, cuando Franco firmó el último parte de guerra.",
    },
    {
      nivel: "medio",
      q: "¿Qué fue el Comité de No Intervención?",
      sol: `Un acuerdo de las potencias europeas para no ayudar a ningún bando, que Alemania e Italia incumplieron.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué fue importante la batalla del Ebro?",
      sol: "Fue la más larga y sangrienta; su derrota dejó a la República sin capacidad de resistir.",
    },
    {
      nivel: "medio",
      q: "¿Qué buscan las leyes de memoria democrática?",
      sol: `Reconocer a las víctimas, localizar e identificar a los desaparecidos y conocer la verdad de lo ocurrido.`,
    },
    {
      nivel: "medio",
      q: "Cita dos escritores víctimas de la guerra.",
      sol: `Federico García Lorca, asesinado en 1936; Antonio Machado, muerto en el exilio en 1939; Miguel Hernández, muerto en prisión en 1942.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué Franco desvió sus tropas a Toledo en septiembre de 1936 y qué consecuencias tuvo?",
      sol: `Para liberar el Alcázar, asediado por los republicanos, un hecho de gran valor propagandístico que reforzó su prestigio y le ayudó a ser elegido Generalísimo. Pero retrasó el avance sobre Madrid, que tuvo tiempo de organizar su defensa.`,
    },
    {
      nivel: "medio",
      q: "Explica qué fueron los Hechos de Mayo de 1937.",
      sol: `Combates en las calles de Barcelona entre anarquistas de la CNT y el POUM, por un lado, y comunistas y fuerzas del Gobierno, por otro, por el control de la ciudad y el dilema revolución o guerra. Terminaron con la victoria gubernamental, la caída de Largo Caballero y la ilegalización del POUM.`,
    },
    {
      nivel: "medio",
      q: "¿Qué significó la llegada de los sublevados a Vinaròs en abril de 1938?",
      sol: `Alcanzaron el Mediterráneo y partieron en dos la zona republicana: Cataluña quedó separada del centro-sur (Madrid, Valencia). Fue un golpe estratégico decisivo.`,
    },
    {
      nivel: "medio",
      q: "Explica por qué la Iglesia apoyó a los sublevados.",
      sol: `Por la política laica de la República y, sobre todo, por la violencia anticlerical en la zona republicana en 1936 (miles de religiosos asesinados, iglesias quemadas). Los obispos calificaron la guerra de «cruzada», y Franco le devolvió privilegios y la educación.`,
    },
    {
      nivel: "medio",
      q: "¿Qué diferencias hubo entre la represión de las dos zonas?",
      sol: `En la republicana fue sobre todo al principio, obra de grupos incontrolados aprovechando el hundimiento del Estado, y disminuyó cuando el Gobierno recuperó el control. En la sublevada fue sistemática, organizada desde arriba como método para eliminar al enemigo y sembrar el terror, y continuó en la posguerra.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué los acuerdos de Múnich (1938) afectaron a la guerra de España?",
      sol: `Porque Reino Unido y Francia cedieron ante Hitler en Checoslovaquia; así se desvaneció la esperanza de Negrín de que las democracias entraran en guerra con Alemania y ayudaran a la República. La resistencia perdió sentido y los soviéticos redujeron su apoyo.`,
    },
    {
      nivel: "medio",
      q: "¿Qué hizo la Junta del Tesoro Artístico?",
      sol: `Protegió el patrimonio durante la guerra: trasladó las obras del Museo del Prado a Valencia, Cataluña y Ginebra, donde quedaron bajo custodia internacional hasta su regreso en 1939.`,
    },
    {
      nivel: "avanzado",
      q: "Compara la represión en las dos zonas.",
      sol: `En la republicana hubo asesinatos sobre todo al principio y fuera de control; en la sublevada fue sistemática, organizada y continuó tras la guerra.`,
    },
    {
      nivel: "avanzado",
      q: `Comenta: «Hay que sembrar el terror… hay que dar la sensación de dominio eliminando sin escrúpulos ni vacilación a todos los que no piensen como nosotros» (instrucción del general Mola, 1936).`,
      sol: `Clasifica: documento militar reservado de los preparativos del golpe. Idea: la violencia contra los opositores es un método deliberado para paralizar la resistencia. Contexto: preparación del golpe de julio de 1936. Valoración: demuestra que la represión en la zona sublevada fue planificada desde arriba, a diferencia de la violencia de los primeros meses en la republicana; vulnera los derechos humanos más básicos.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué ganaron la guerra los sublevados? Explica al menos cuatro factores.",
      sol: `1) Ayuda alemana e italiana mayor, más constante y mejor que la soviética, y el efecto negativo de la No Intervención para la República. 2) Unidad de mando política y militar con Franco. 3) Ejército profesional (África) y muchos oficiales. 4) Divisiones internas republicanas (revolución o guerra, Hechos de Mayo). 5) Control de zonas cerealistas, mientras el hambre afectaba a la zona republicana.`,
    },
    {
      nivel: "avanzado",
      q: "Analiza el Guernica de Picasso como fuente histórica: qué muestra y qué no.",
      sol: `Muestra el sufrimiento de la población civil (madre con hijo muerto, figuras que gritan, animales heridos, casa en llamas) y es un testimonio de denuncia contemporáneo (1937). No es una fuente objetiva ni descriptiva: no aparecen aviones, ni datos, ni el lugar concreto; es una interpretación artística con intención política (pabellón de la República). Para el historiador sirve para estudiar la reacción y la propaganda, y debe contrastarse con crónicas y documentos.`,
    },
    {
      nivel: "avanzado",
      q: `¿Fue la Guerra Civil un ensayo de la Segunda Guerra Mundial? Argumenta a favor y en contra.`,
      sol: `A favor: Alemania e Italia probaron armas y tácticas (bombardeo de ciudades, Legión Cóndor); se enfrentaron fascismo, comunismo y democracia; muchos voluntarios internacionales. En contra: su origen fue sobre todo interno (conflictos sociales, religiosos, territoriales y políticos de España); la URSS y las democracias no se enfrentaron directamente a Alemania; la Segunda Guerra Mundial tuvo causas propias.`,
    },
    {
      nivel: "avanzado",
      q: "¿Qué es la memoria democrática y por qué genera debate? Expón distintas posturas.",
      sol: `Son las políticas y leyes que buscan reconocer a las víctimas de la Guerra Civil y la dictadura, exhumar e identificar a los desaparecidos de las fosas, retirar símbolos franquistas y transmitir lo ocurrido. Posturas: unos creen que es una deuda de justicia y reparación necesaria para la democracia; otros piensan que reabre heridas o que se aplica de forma parcial. Una buena respuesta argumenta con respeto y datos.`,
    },
    {
      nivel: "avanzado",
      q: `Escribe el diario de un refugiado que cruza la frontera francesa en febrero de 1939 (tres entradas).`,
      sol: `Debe incluir: la caída de Barcelona y la huida hacia los Pirineos; el frío, los bombardeos en las carreteras y la multitud de civiles y soldados; la llegada a Francia y el encierro en campos de playa como Argelès, con alambradas y falta de comida; la incertidumbre sobre el futuro (volver, ir a México o a la URSS) y la pérdida de la familia o la casa.`,
    },
  ],
  quiz: [
    {
      q: "¿Cuándo empezó la Guerra Civil?",
      o: [
        "Con el golpe de Estado del 17-18 de julio de 1936",
        "Con la muerte de Calvo Sotelo",
        "Con la proclamación de la República en 1931",
        "En 1939",
      ],
      a: 0,
      e: "La sublevación militar fracasó en parte del país y la división dio paso a la guerra.",
    },
    {
      q: "¿Qué países ayudaron al bando sublevado?",
      o: ["Suecia y Noruega", "Francia y Reino Unido", "Alemania e Italia", "URSS y México"],
      a: 2,
      e: "Hitler y Mussolini enviaron aviones, tanques y miles de soldados.",
    },
    {
      q: "¿Qué eran las Brigadas Internacionales?",
      o: [
        "Voluntarios extranjeros que lucharon por la República",
        "Tropas alemanas",
        "Observadores de la ONU",
        "Tropas de la Sociedad de Naciones",
      ],
      a: 0,
      e: "Unos 35 000 voluntarios de más de 50 países.",
    },
    {
      q: "¿Cuál fue la batalla más larga y sangrienta?",
      o: ["Madrid", "Guadalajara", "Teruel", "El Ebro"],
      a: 3,
      e: "Duró de julio a noviembre de 1938 y supuso el fin del ejército republicano.",
    },
    {
      q: "¿Quién bombardeó Guernica en 1937?",
      o: ["La aviación republicana", "La aviación italiana sola", "La Legión Cóndor alemana", "La aviación francesa"],
      a: 2,
      e: "La aviación nazi, aliada de Franco, bombardeó la villa el 26 de abril de 1937.",
    },
    {
      q: "El golpe de Estado fracasó en…",
      o: ["Burgos y Salamanca", "Madrid y Barcelona", "Pamplona y Burgos", "Sevilla y Cádiz"],
      a: 1,
      e: "Por eso empezó una guerra.",
    },
    {
      q: "El bombardeo de Guernica lo realizó…",
      o: ["la Legión Cóndor", "la aviación soviética", "la aviación francesa", "la aviación británica"],
      a: 0,
      e: "Era una unidad alemana.",
    },
    {
      q: "La batalla más larga de la guerra fue…",
      o: ["la del Ebro", "la del Jarama", "la de Teruel", "la de Brunete"],
      a: 0,
      e: "Duró de julio a noviembre de 1938.",
    },
    {
      q: "El Guernica de Picasso está hoy en…",
      o: ["el Museo Reina Sofía", "el Museo del Prado", "el Prado", "el Louvre"],
      a: 0,
      e: "En Madrid.",
    },
    {
      q: "La República recibió ayuda sobre todo de…",
      o: ["Japón", "la URSS y México", "Alemania e Italia", "EE. UU."],
      a: 1,
      e: "Pagada con el oro del Banco de España en el caso soviético.",
    },
    {
      q: "¿Qué general fue el «Director» del golpe de 1936?",
      o: ["Franco", "Mola", "Sanjurjo", "Queipo de Llano"],
      a: 1,
      e: "Coordinó la conspiración militar.",
    },
    {
      q: "El Comité de No Intervención fue promovido por…",
      o: ["Alemania e Italia", "Francia y Reino Unido", "la URSS", "EE. UU."],
      a: 1,
      e: "Prohibía vender armas a España, pero se incumplió.",
    },
    {
      q: "El lema de la defensa de Madrid en 1936 fue…",
      o: ["«¡Viva la Pepa!»", "«¡No pasarán!»", "«Paz, pan y tierra»", "«Dios, Patria, Rey»"],
      a: 1,
      e: "La capital resistió el asalto de noviembre.",
    },
    {
      q: "En la batalla de Guadalajara (1937) fueron derrotadas…",
      o: ["las Brigadas Internacionales", "las tropas italianas", "la Legión Cóndor", "las tropas soviéticas"],
      a: 1,
      e: "Fue una gran victoria propagandística republicana.",
    },
    {
      q: "La primera mujer ministra de España fue…",
      o: ["Clara Campoamor", "Federica Montseny", "Victoria Kent", "Dolores Ibárruri"],
      a: 1,
      e: "Ministra de Sanidad en 1936.",
    },
    {
      q: "Los Hechos de Mayo de 1937 ocurrieron en…",
      o: ["Madrid", "Barcelona", "Valencia", "Bilbao"],
      a: 1,
      e: "Enfrentaron a anarquistas y POUM con comunistas y el Gobierno.",
    },
    {
      q: "En septiembre de 1936 Franco fue nombrado…",
      o: ["presidente de la República", "Generalísimo y jefe del Gobierno del Estado", "rey", "ministro de la Guerra"],
      a: 1,
      e: "Se convirtió en el jefe único de la zona sublevada.",
    },
    {
      q: "¿Qué poeta fue asesinado en Granada en 1936?",
      o: ["Antonio Machado", "Federico García Lorca", "Miguel Hernández", "Rafael Alberti"],
      a: 1,
      e: "Fue fusilado por los sublevados en agosto de 1936.",
    },
    {
      q: "¿Cuántas personas se exiliaron aproximadamente en 1939?",
      o: ["4 500", "45 000", "450 000", "4,5 millones"],
      a: 2,
      e: "Unas 150 000 no regresaron nunca.",
    },
    {
      q: "Las obras del Prado se trasladaron durante la guerra finalmente a…",
      o: ["Londres", "Ginebra", "Moscú", "Nueva York"],
      a: 1,
      e: "Volvieron intactas en 1939.",
    },
  ],
  examen: [
    {
      q: "El Comité de No Intervención…",
      o: [
        "impidió eficazmente toda ayuda extranjera",
        "no se cumplió: Alemania, Italia y la URSS intervinieron",
        "fue creado por Franco",
        "obligó a España a rendirse",
      ],
      a: 1,
      e: "Francia y Reino Unido lo promovieron, pero otras potencias lo ignoraron.",
    },
    {
      q: "FET y de las JONS fue…",
      o: [
        "el partido único de la zona sublevada",
        "un sindicato republicano",
        "un sindicato anarquista",
        "una brigada internacional",
      ],
      a: 0,
      e: "Franco unificó en 1937 a falangistas y carlistas en un solo partido.",
    },
    {
      q: "¿Qué busca hoy la memoria democrática?",
      o: [
        "Olvidar el pasado",
        "Construir un monumento a los vencedores",
        "Recordar a las víctimas y localizar a los desaparecidos",
        "Repetir la guerra",
      ],
      a: 2,
      e: "Reconocer a las víctimas y conocer la verdad ayuda a convivir en democracia.",
    },
    {
      q: "¿Qué ciudad NO quedó en zona republicana en julio de 1936?",
      o: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
      a: 2,
      e: "Queipo de Llano triunfó en Sevilla.",
    },
    {
      q: "La batalla del Ebro tuvo lugar en…",
      o: ["1936", "1937", "1938", "1939"],
      a: 2,
      e: "De julio a noviembre de 1938.",
    },
    {
      q: "El último jefe del Gobierno de la República durante la guerra fue…",
      o: ["Azaña", "Largo Caballero", "Negrín", "Giral"],
      a: 2,
      e: "Defendió resistir hasta el final.",
    },
    {
      q: "La matanza de presos de Paracuellos (1936) ocurrió en…",
      o: ["la zona sublevada", "la zona republicana", "Francia", "Marruecos"],
      a: 1,
      e: "Fue el episodio más grave de la represión en zona republicana.",
    },
    {
      q: "Muchos exiliados republicanos acabaron en el campo nazi de…",
      o: ["Auschwitz", "Mauthausen", "Dachau", "Buchenwald"],
      a: 1,
      e: "Unos 7 000 españoles pasaron por Mauthausen.",
    },
  ],
  feynman: [
    "Por qué el golpe de 1936 se convirtió en guerra",
    "Quién apoyó a cada bando desde fuera",
    "Las fases militares de la guerra",
    "Qué consecuencias humanas tuvo y qué es la memoria democrática",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: GUERRA CIVIL">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">GUERRA CIVIL</text>
      <rect x="10" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--red)">Inicio</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">golpe 17-18 julio 1936</text><rect x="430" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--bac)">Bandos</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">republicano vs. sublevado</text><rect x="10" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--ink)">Fases</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Madrid · Norte · Ebro · 1939</text><rect x="430" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--muted)">Consecuencias</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">muertos · exilio · dictadura</text>
    </g></svg>`,
  tarjetas: [
    ["Inicio de la Guerra Civil", "Golpe de Estado del 17-18 de julio de 1936."],
    ["Final de la guerra", "1 de abril de 1939."],
    ["Brigadas Internacionales", "Voluntarios extranjeros (unos 35 000) que lucharon por la República."],
    ["Batalla del Ebro", "1938, la más larga y sangrienta de la guerra."],
    ["Exilio de 1939", "Unas 450 000 personas salieron de España."],
    ["Brigadas Internacionales", "Voluntarios extranjeros que lucharon por la República."],
    ["Batalla del Ebro", "La más larga de la guerra (1938)."],
    ["Guernica", "Villa bombardeada en 1937 y cuadro de Picasso que lo denuncia."],
    ["Legión Cóndor", "Unidad aérea alemana que ayudó a Franco y bombardeó Guernica."],
    ["Hechos de Mayo", "Combates de 1937 en Barcelona dentro de la zona republicana."],
    ["FET y de las JONS", "Partido único creado por Franco en 1937 al unir falangistas y carlistas."],
    ["Memoria democrática", "Reconocimiento y reparación de las víctimas de la guerra y la dictadura."],
  ],
  glosario: [
    ["Golpe de Estado", "Intento de tomar el poder por la fuerza, al margen de la ley."],
    ["Guerra civil", "Guerra entre ciudadanos de un mismo país."],
    [
      "Sublevados",
      `Militares y civiles que se alzaron contra la República en 1936; también llamados nacionales.`,
    ],
    ["Milicias", "Grupos armados de partidos y sindicatos formados al comenzar la guerra."],
    ["No Intervención", "Acuerdo internacional para no enviar armas a España, incumplido por varias potencias."],
    ["Legión Cóndor", "Fuerza aérea alemana enviada en apoyo de Franco."],
    ["Brigadas Internacionales", "Voluntarios extranjeros que lucharon por la República."],
    ["Colectivización", "Paso de fábricas y tierras a gestión colectiva de los trabajadores."],
    ["POUM", "Partido Obrero de Unificación Marxista, comunista antiestalinista."],
    ["Ejército Popular", "Ejército regular creado por la República para sustituir a las milicias."],
    ["Generalísimo", "Título de Franco como jefe supremo de los ejércitos sublevados."],
    ["Caudillo", "Título de Franco como jefe del Estado con poder personal."],
    ["Cruzada", "Nombre que la Iglesia y los sublevados dieron a la guerra para presentarla como religiosa."],
    ["Represión", "Persecución violenta de los considerados enemigos."],
    ["Fosa común", "Enterramiento colectivo, a menudo clandestino, de víctimas de la represión."],
    ["Exilio", "Salida forzada del propio país por motivos políticos."],
    [
      "Memoria democrática",
      "Políticas de reconocimiento y reparación de las víctimas de la guerra y la dictadura.",
    ],
  ],
  situacion: {
    titulo: "Testimonios para no olvidar",
    reto: `Vuestra clase va a crear un pequeño archivo de memoria sobre cómo vivió la Guerra Civil la población de vuestra localidad o comarca, con un enfoque riguroso y respetuoso con todas las víctimas.`,
    pasos: [
      `Investigad qué zona controló vuestro municipio en 1936 y qué hechos de guerra ocurrieron allí (frente, bombardeos, refugios, represión, exilio).`,
      `Buscad fuentes: archivos municipales, hemerotecas digitales, fotografías, monumentos, refugios antiaéreos o testimonios grabados.`,
      `Si es posible, entrevistad a familiares sobre recuerdos transmitidos (hambre, huidas, separaciones), con un guion de preguntas respetuoso.`,
      "Contrastad lo que dicen los testimonios con los datos históricos estudiados.",
      `Elaborad fichas de archivo (fuente, fecha, resumen, valor histórico) y un texto final sobre por qué es importante la memoria.`,
    ],
    producto: `Un archivo de memoria local (digital o en papel) con fichas de fuentes, una línea del tiempo local y una reflexión colectiva.`,
    evaluacion: [
      "Rigor en la búsqueda, cita y contraste de fuentes.",
      "Relación correcta entre la historia local y la general de la guerra.",
      "Respeto y empatía en el tratamiento de las víctimas de ambos bandos.",
      "Calidad de la reflexión sobre la memoria democrática.",
    ],
  },
  familias: [
    `Ved juntos el «Guernica» de Picasso (está en el Museo Reina Sofía) y comentad qué figuras aparecen.`,
    `Si en la familia hay recuerdos de la guerra o del exilio, escuchadlos con respeto y anotadlos.`,
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: la Guerra Civil española, su dimensión internacional y la memoria democrática (RD 217/2022, Geografía e Historia 4º; Ley 20/2022 de Memoria Democrática).`,
    ideas: [
      "Análisis del «Guernica» y de carteles de ambos bandos.",
      "Testimonios orales del exilio (niños de la guerra, maestros republicanos).",
      "Mapa de la evolución de los frentes en 1936, 1937 y 1938.",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    {
      t: "Guerra civil española, Wikipedia en español",
      url: "https://es.wikipedia.org/wiki/Guerra_civil_espa%C3%B1ola",
    },
  ],
  revisado: "2026-11-13",
};
