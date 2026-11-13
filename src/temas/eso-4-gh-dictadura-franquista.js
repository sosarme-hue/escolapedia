// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La dictadura franquista",
  minutos: 110,
  objetivos: [
    "Describir las características políticas e ideológicas del franquismo",
    "Comparar la autarquía de posguerra con el desarrollismo de los años 60",
    "Explicar la represión, la oposición y los cambios sociales de la dictadura",
    "Explicar las etapas del franquismo y sus apoyos",
    "Describir la vida cotidiana y los cambios de los años 60",
  ],
  claves: ["franquismo", "nacionalcatolicismo", "autarquía", "desarrollismo", "represión", "oposición"],
  pregunta: {
    texto: `Hasta 1975 en España no se podía votar en elecciones libres, ni crear partidos ni sindicatos, y una mujer casada necesitaba el permiso de su marido para abrir una cuenta en el banco. ¿Cómo era vivir así?`,
    respuesta: `Era vivir en la <mark>dictadura franquista</mark> (1939-1975): un régimen autoritario en el que <b>Francisco Franco</b> concentró todos los poderes durante 36 años, con censura, represión de los opositores y una ideología basada en el nacionalismo español y el catolicismo.`,
  },
  lectura: {
    titulo: "La cartilla de la abuela",
    html: `<p>En un cajón de casa de su abuela, Lucía encuentra un cuadernillo de papel amarillento con un sello y muchas casillas cortadas a tijera. En la portada pone «Cartilla de racionamiento. 1943». Su abuela le explica que con ella se compraban, cada semana, unos gramos de pan negro, algo de aceite, azúcar y garbanzos; que muchas veces no había ni eso en la tienda; y que su madre vendía huevos a escondidas a precios altísimos, el «estraperlo», para poder comprar zapatos.</p><p>Le cuenta también que en la escuela los niños y las niñas estaban separados, que cada mañana cantaban el «Cara al sol», que en el cine algunas escenas aparecían cortadas por la censura y que de ciertos temas, como la guerra o los familiares que estaban en el exilio, no se hablaba nunca en voz alta. Y recuerda, ya en los años sesenta, la emoción de ver llegar la primera televisión al bar del pueblo y el día en que su hermano se marchó a trabajar a Alemania con una maleta de cartón.</p><p>Esa vida cambió mucho en casi cuarenta años. En este tema estudiarás la <b>dictadura de Franco</b> (1939-1975): cómo funcionaba, cómo se vivía y cómo evolucionó hasta su final.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Un régimen personal y autoritario</h3><p>Tras su victoria en la Guerra Civil, el general <b>Francisco Franco</b> estableció una <mark>dictadura</mark> que duró hasta su muerte en 1975. Franco acumulaba todos los poderes: era jefe del Estado, jefe del Gobierno (hasta 1973), jefe de los ejércitos y jefe del partido único. Se le llamaba <b>Caudillo</b> «por la gracia de Dios» y no respondía ante nadie.</p><p>No había Constitución ni elecciones libres. En su lugar se aprobaron unas <b>Leyes Fundamentales</b>, como el Fuero de los Españoles (1945), que reconocía derechos que en la práctica no se respetaban, o la Ley de Sucesión (1947), que definía España como reino con Franco como jefe del Estado vitalicio. Las Cortes no eran elegidas por los ciudadanos, sino formadas por procuradores designados o elegidos de forma indirecta a través de la familia, el municipio y el sindicato: la llamada <b>democracia orgánica</b>.</p><p>Los partidos políticos y los sindicatos libres estaban prohibidos, igual que las huelgas. Existía una estricta <mark>censura</mark> sobre prensa, radio, cine, libros y canciones. El régimen se definía como católico, anticomunista, antiliberal y centralista: prohibió el uso público del catalán, el vasco y el gallego y suprimió los estatutos de autonomía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pilares del franquismo">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle">
    <path d="M56 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="56" y="34" fill="var(--ink)">ejército</text><path d="M204 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="204" y="34" fill="var(--ink)">Iglesia</text><path d="M54 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="6" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="54" y="100" fill="var(--ink)">Falange</text><path d="M206 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="158" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="206" y="100" fill="var(--ink)" font-size="10.5">terratenientes</text><path d="M56 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="56" y="164" fill="var(--ink)">banca</text><path d="M204 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><text x="204" y="164" fill="var(--ink)">censura</text>
    <circle cx="130" cy="96" r="34" fill="var(--ink)"/>
    <text x="130" y="100" fill="#fff" font-size="11">FRANCO</text>
  </g>
  </svg>`,
      video: {
        id: "m4-zXW87zTQ",
        titulo: "Historia del franquismo en 8 minutos",
        canal: "Memorias de Pez",
        vistas: 482143,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.2 Los pilares del régimen</h3><p>El franquismo se apoyaba en varios grupos, las llamadas «<b>familias</b>» del régimen, que competían entre sí por el poder y que Franco equilibraba con habilidad, nombrando ministros de unas y otras según le convenía.</p><ul><li>El <b>ejército</b>, vencedor de la guerra, garantizaba el orden y ocupaba muchos cargos.</li><li>La <b>Iglesia católica</b>: es el <mark>nacionalcatolicismo</mark>. La Iglesia legitimaba la dictadura como una «cruzada» y, a cambio, controlaba la educación, la moral pública y recibía dinero del Estado. El catolicismo era la religión oficial y obligatoria.</li><li><b>Falange</b>, el partido fascista, unificado en 1937 con los tradicionalistas en el partido único, llamado después <b>Movimiento Nacional</b>. Controlaba la prensa, la propaganda, las organizaciones juveniles y la Sección Femenina.</li><li>Los <b>monárquicos</b> y los <b>grandes propietarios</b> de tierras, la industria y la banca, que recuperaron sus propiedades y se beneficiaron de salarios bajos.</li></ul><p>Los trabajadores debían integrarse obligatoriamente en la <mark>Organización Sindical</mark>, el <b>sindicato vertical</b>, en el que estaban juntos empresarios y obreros bajo control del Estado. Los salarios los fijaba el Gobierno y la huelga era un delito.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cómo se organizaba el poder: Franco, Gobierno, Cortes, Movimiento y sindicato"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Cómo se organizaba el poder</text><path d="M110 28.0 H 150 L 175 63.5 H 85 Z" fill="var(--pen)" opacity=".22" stroke="var(--pen)" stroke-width="2"/><text x="130" y="49.1" text-anchor="middle" font-size="9.5" font-weight="700">Franco</text><path d="M85 63.5 H 175 L 200 99.0 H 60 Z" fill="var(--red)" opacity=".22" stroke="var(--red)" stroke-width="2"/><text x="130" y="79.1" text-anchor="middle" font-size="9.5" font-weight="700">Gobierno: nombrado</text><text x="130" y="90.0" text-anchor="middle" font-size="9.5" font-weight="700">por él</text><path d="M60 99.0 H 200 L 225 134.5 H 35 Z" fill="var(--leaf)" opacity=".22" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="120.1" text-anchor="middle" font-size="9.5" font-weight="700">Cortes: no elegidas</text><path d="M35 134.5 H 225 L 250 170.0 H 10 Z" fill="var(--sun)" opacity=".22" stroke="var(--sun)" stroke-width="2"/><text x="130" y="155.6" text-anchor="middle" font-size="9.5" font-weight="700">Movimiento y sindicato</text></g></svg>`,
    },
    {
      html: `<h3>1.3 Represión y exilio</h3><p>La guerra no terminó con la paz, sino con la <mark>represión</mark> de los vencidos. En los años siguientes a 1939 fueron ejecutadas decenas de miles de personas, unas cincuenta mil según la mayoría de los historiadores, tras juicios militares sin garantías. Cientos de miles pasaron por cárceles y campos de concentración, y muchos presos fueron obligados a trabajar en obras públicas, como el Valle de Cuelgamuros, en los batallones de trabajadores. La <b>Ley de Responsabilidades Políticas</b> (1939) castigó con multas y confiscaciones a quienes habían apoyado a la República, incluso antes de 1936, y la Ley de Represión de la Masonería y el Comunismo persiguió a sus miembros.</p><p>Muchos maestros, profesores y funcionarios fueron <b>depurados</b>: expulsados o sancionados por sus ideas. Unas 450 000 personas habían cruzado la frontera en 1939; muchas regresaron, pero unas cien mil se quedaron en un largo <mark>exilio</mark>, sobre todo en Francia y México. Algunos acabaron en campos nazis como Mauthausen. Se exiliaron científicos, artistas y escritores como Antonio Machado, que murió en Francia en 1939, o Luis Cernuda. En el interior, grupos guerrilleros, los <b>maquis</b>, resistieron en las montañas hasta comienzos de los años cincuenta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Periódico tachado con la palabra censura">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="56" y="24" width="148" height="132" rx="6" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
        <rect x="70" y="38" width="120" height="14" fill="var(--ink)"/>
        <rect x="70" y="64" width="120" height="6" rx="3" fill="var(--line)"/><rect x="70" y="78" width="120" height="6" rx="3" fill="var(--line)"/><rect x="70" y="92" width="120" height="6" rx="3" fill="var(--line)"/><rect x="70" y="106" width="120" height="6" rx="3" fill="var(--line)"/><rect x="70" y="120" width="120" height="6" rx="3" fill="var(--line)"/><rect x="70" y="134" width="120" height="6" rx="3" fill="var(--line)"/>
        <rect x="46" y="78" width="168" height="30" rx="4" fill="var(--red)" transform="rotate(-10 130 93)"/>
        <text x="130" y="99" text-anchor="middle" font-size="18" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif" transform="rotate(-10 130 93)">CENSURADO</text>
      </svg>`,
    },
    {
      html: `<h3>1.4 La posguerra: hambre y racionamiento</h3><p>Los años cuarenta fueron los «<mark>años del hambre</mark>». La guerra había destruido carreteras, puentes, fábricas y viviendas, y la producción agrícola cayó por debajo de la de 1935. Para repartir los escasos alimentos, el Gobierno estableció las <b>cartillas de racionamiento</b>, vigentes hasta 1952: cada familia tenía derecho a una cantidad fija de pan, aceite, azúcar, legumbres o jabón, muchas veces insuficiente y de mala calidad.</p><p>Floreció el <mark>estraperlo</mark>, el mercado negro, en el que los productos costaban varias veces más. Los grandes estraperlistas, a menudo con contactos en el régimen, se enriquecieron; los pequeños, sobre todo mujeres que vendían en la calle, eran multados o detenidos. Faltaban electricidad, carbón y medicinas, y enfermedades como la <b>tuberculosis</b> y el tifus causaron miles de muertes. En las ciudades se veían barrios de chabolas y niños pidiendo en la calle.</p><p>La pobreza se agravaba con los bajos salarios y la falta de libertad sindical. Para muchas familias de los vencidos, además, la posguerra significó cárcel, pérdida del empleo y discriminación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los años del hambre: Racionamiento, Estraperlo, Enfermedades, Escasez"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Los años del hambre</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Racionamiento</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >cartillas hasta</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >1952</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Estraperlo</text><text x="192" y="75.5" text-anchor="middle" font-size="10" >mercado negro</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Enfermedades</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >tuberculosis y</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >tifus</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Escasez</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >luz, carbón y</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >medicinas</text></g></svg>`,
    },
    {
      html: `<h3>1.5 La mujer bajo el franquismo</h3><p>La dictadura supuso un enorme retroceso para las mujeres. Se suprimieron los derechos conquistados en la Segunda República: el divorcio, el matrimonio civil y la coeducación. Las mujeres casadas necesitaban la <mark>licencia marital</mark>, el permiso del marido, para trabajar, abrir una cuenta bancaria, firmar un contrato, cobrar su sueldo o sacar el pasaporte. El Código Penal castigaba con más dureza el adulterio de la mujer que el del hombre.</p><p>El modelo de mujer que difundía el régimen era el de <b>esposa y madre</b>, dedicada al hogar y sometida al marido. La <b>Sección Femenina</b> de Falange, dirigida por Pilar Primo de Rivera, se encargaba de formarlas: organizaba cursos de cocina, costura y puericultura, y obligaba a las jóvenes a realizar un <b>Servicio Social</b> de seis meses para poder obtener el pasaporte, el carné de conducir o un título. Muchas leyes animaban a las mujeres a dejar el trabajo al casarse.</p><p>Aun así, muchas mujeres trabajaron por necesidad, en el campo, el servicio doméstico, las fábricas o el estraperlo. Desde los años sesenta su situación mejoró: más mujeres estudiaron en la universidad y se incorporaron al trabajo, y en 1975 se suprimió la licencia marital.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Derechos de la mujer: Segunda República frente a Franquismo"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Derechos de la mujer</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Segunda República</text><text x="67" y="72.1" text-anchor="middle" font-size="9.5" >voto femenino</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >divorcio</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >matrimonio civil</text><text x="67" y="160.6" text-anchor="middle" font-size="9.5" >coeducación</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Franquismo</text><text x="193" y="66.6" text-anchor="middle" font-size="9.5" >sin elecciones</text><text x="193" y="77.5" text-anchor="middle" font-size="9.5" >libres</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >sin divorcio</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >licencia marital</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >escuelas separadas</text></g></svg>`,
    },
    {
      html: `<h3>1.6 Del aislamiento a la aceptación internacional</h3><p>Durante la Segunda Guerra Mundial, Franco se declaró neutral y luego «no beligerante», pero simpatizaba con Hitler y Mussolini, que le habían ayudado en la Guerra Civil: se reunió con Hitler en Hendaya (1940) y envió la <b>División Azul</b> a luchar contra la URSS. Por eso, tras la victoria aliada, el régimen quedó <mark>aislado</mark>: la ONU condenó a la España franquista, recomendó retirar los embajadores (1946) y España quedó fuera del Plan Marshall. Solo la Argentina de Perón envió ayuda, sobre todo trigo.</p><p>La <b>Guerra Fría</b> cambió la situación. Para Estados Unidos, Franco era ahora un aliado anticomunista útil, y España tenía una situación estratégica. En 1950 la ONU levantó la condena. En <b>1953</b> se firmaron dos acuerdos clave: los <mark>pactos con Estados Unidos</mark>, que permitían instalar bases militares estadounidenses (Torrejón, Rota, Zaragoza, Morón) a cambio de ayuda económica y militar, y el <b>Concordato con el Vaticano</b>, que reforzaba los privilegios de la Iglesia. En 1955 España ingresó en la ONU, y en 1959 el presidente Eisenhower visitó Madrid. El régimen se consolidó, aunque no fue admitido en la Comunidad Económica Europea ni en la OTAN.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: De aislada a aceptada"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1946</text><text x="47.35" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">la ONU retira</text><text x="47.35" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">embajadores</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1950</text><text x="79" y="149.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">vuelven los</text><text x="79" y="160.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">embajadores</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1953</text><text x="130" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">acuerdos con EE.</text><text x="130" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">UU.</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1955</text><text x="181" y="149.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">ingreso en la</text><text x="181" y="160.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">ONU</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1959</text><text x="212.65" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">visita de</text><text x="212.65" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Eisenhower</text></g></svg>`,
    },
    {
      html: `<h3>1.7 De la autarquía al Plan de Estabilización</h3><p>En los años cuarenta, el régimen practicó la <mark>autarquía</mark>: intentar que el país produjera todo lo que necesitaba, sin depender del comercio exterior. Era en parte una opción ideológica, copiada del fascismo italiano, y en parte una consecuencia del aislamiento. El Estado controlaba los precios, el comercio y la industria; creó el <b>Instituto Nacional de Industria</b> (INI, 1941), que fundó empresas públicas como SEAT, ENSIDESA o Iberia. El resultado fue un fracaso: escasez, inflación, poca productividad, mercado negro y un nivel de vida inferior al de antes de la guerra hasta los años cincuenta.</p><p>A finales de los cincuenta la economía estaba al borde de la bancarrota. Franco dio entrada en el Gobierno a ministros técnicos, muchos vinculados al Opus Dei (los «<b>tecnócratas</b>»), que aprobaron el <mark>Plan de Estabilización</mark> de <b>1959</b>. Sus medidas: devaluar la peseta para favorecer las exportaciones, reducir el gasto público, contener la inflación, liberalizar el comercio y abrir la puerta a la inversión extranjera. A corto plazo provocó paro y emigración, pero sentó las bases del gran crecimiento de los años sesenta.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Autarquía frente a desarrollismo">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--muted)" font-family="Baloo 2, sans-serif">Años 40</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">autarquía</text><text x="69" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">racionamiento</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">estraperlo</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">aislamiento</text><text x="69" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">hambre</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--leaf)" font-family="Baloo 2, sans-serif">Años 60</text>
    <text x="191" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">apertura</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">industria</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">turismo</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">emigración</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">SEAT 600</text>
  </svg>`,
    },
    {
      html: `<h3>1.8 El «milagro económico» de los años sesenta</h3><table class="tb"><thead><tr><th>Motor del crecimiento</th><th>Qué supuso</th></tr></thead><tbody><tr><td>Plan de Estabilización (1959)</td><td>apertura al exterior, fin de la autarquía</td></tr><tr><td>Turismo</td><td>de unos 4 millones de visitantes en 1959 a más de 30 en 1973</td></tr><tr><td>Emigración a Europa</td><td>más de un millón de españoles trabajan en Alemania, Francia o Suiza y envían divisas</td></tr><tr><td>Inversión extranjera</td><td>fábricas de coches, química, electrodomésticos</td></tr><tr><td>Planes de Desarrollo</td><td>polos industriales en ciudades como Valladolid, Burgos o Huelva</td></tr></tbody></table><p>Entre 1960 y 1973 la economía española creció a un ritmo de casi el 7 % anual, de los más altos del mundo: fue el <mark>desarrollismo</mark>. Las tres fuentes de divisas que lo hicieron posible fueron el <b>turismo</b> de sol y playa, las <b>remesas</b> de los emigrantes y la <b>inversión extranjera</b>, a las que se sumó una mano de obra barata y sin derecho a huelga. Los <b>Planes de Desarrollo</b> (desde 1964) crearon polos industriales. España pasó de ser un país agrario a uno industrial y de servicios.</p><p>El crecimiento tuvo costes: fuertes desequilibrios entre regiones, urbanismo descontrolado en la costa y en los barrios obreros de las ciudades, contaminación y una gran dependencia del exterior. La <b>crisis del petróleo</b> de 1973 puso fin a esta etapa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cómo se creció en los sesenta: Plan de Estabilización → turismo, remesas e inversión → industria y empleo → consumo y clase media"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Cómo se creció en los sesenta</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="45.9" text-anchor="middle" font-size="10.5" >Plan de Estabilización</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="84.4" text-anchor="middle" font-size="10.5" >turismo, remesas e inversión</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="122.9" text-anchor="middle" font-size="10.5" >industria y empleo</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="161.4" text-anchor="middle" font-size="10.5" >consumo y clase media</text></g></svg>`,
      video: {
        id: "gVEtOUmgMGE",
        titulo: "El milagro económico español",
        canal: "Memorias de Tiburón",
        vistas: 124638,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.9 Éxodo rural y cambios sociales</h3><p>El desarrollo provocó enormes <mark>migraciones</mark>. Entre 1960 y 1975 unos cuatro millones de personas dejaron el campo, sobre todo de Andalucía, Extremadura y las dos Castillas, para trabajar en las fábricas y la construcción de Madrid, Barcelona, el País Vasco o Valencia: es el <b>éxodo rural</b>. Muchas llegaron a barrios periféricos sin servicios, levantados deprisa, y otras vivieron al principio en chabolas. Al mismo tiempo, más de un millón emigraron a Europa (Alemania, Francia, Suiza), con contratos temporales y en condiciones duras.</p><p>La sociedad cambió profundamente. Creció una amplia <b>clase media</b> de empleados, técnicos y comerciantes. Aumentó la escolarización y el número de universitarios, y la Ley General de Educación (1970) extendió la enseñanza obligatoria hasta los 14 años (la EGB). Los españoles se hicieron más urbanos y menos religiosos, y las mujeres comenzaron a incorporarse al trabajo y a la universidad. El contraste entre una sociedad cada vez más moderna y un régimen político inmóvil, sin libertades, se hizo cada vez más evidente y alimentó la oposición.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Turistas extranjeros llegados a España en millones">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5"><text x="84" y="58" text-anchor="end" font-weight="700" fill="var(--ink)">1950</text><rect x="92" y="42" width="3.4615384615384617" height="24" rx="5" fill="var(--muted)"/><text x="99.46153846153847" y="58" fill="var(--ink)">0,75 M</text><text x="84" y="90" text-anchor="end" font-weight="700" fill="var(--ink)">1960</text><rect x="92" y="74" width="27.692307692307693" height="24" rx="5" fill="var(--sun)"/><text x="123.6923076923077" y="90" fill="var(--ink)">6 M</text><text x="84" y="122" text-anchor="end" font-weight="700" fill="var(--ink)">1970</text><rect x="92" y="106" width="110.76923076923077" height="24" rx="5" fill="var(--leaf)"/><text x="206.76923076923077" y="122" fill="var(--ink)">24 M</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.10 La vida cotidiana y la cultura</h3><p>Con el desarrollo llegó la <b>sociedad de consumo</b>. El <b>SEAT 600</b> se convirtió en el símbolo de la época: muchas familias tuvieron su primer coche. La <b>televisión</b> (TVE desde 1956) entró en los hogares, primero en los bares, y con ella el fútbol, los concursos y la publicidad. Llegaron la nevera, la lavadora y las vacaciones en la playa. Los turistas y los emigrantes que regresaban trajeron costumbres más libres, y los jóvenes escuchaban música pop y rock extranjera.</p><p>Pero la cultura seguía vigilada. En la escuela, la enseñanza era religiosa y patriótica, con asignaturas como «Formación del Espíritu Nacional», y niños y niñas estudiaban separados. La <mark>censura</mark> cortaba escenas de las películas, prohibía libros y canciones y vigilaba la prensa; la Ley de Prensa de 1966 la suavizó algo, pero mantuvo los castigos. El <b>NO-DO</b>, el noticiario obligatorio en los cines, difundía la propaganda del régimen. Aun así, surgieron escritores, cineastas y cantautores críticos, como Camilo José Cela, Miguel Delibes, Luis García Berlanga o Raimon, que retrataron la realidad del país sorteando la censura.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Símbolos del desarrollismo: SEAT 600, Televisión, Electrodomésticos, Vacaciones"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Símbolos del desarrollismo</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">SEAT 600</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >el coche familiar</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >(1957)</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Televisión</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >TVE emite desde</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >1956</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Electrodomésticos</text><text x="68" y="150.5" text-anchor="middle" font-size="10" >nevera y lavadora</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Vacaciones</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >playa y</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >apartamento</text></g></svg>`,
    },
    {
      html: `<h3>1.11 La oposición al franquismo</h3><p>En la primera etapa la oposición fue sobre todo la de los exiliados y los maquis. Desde los años sesenta crecieron nuevas formas de oposición en el interior:</p><ul><li>El <b>movimiento obrero</b>: las huelgas, como la de la minería asturiana de 1962, se multiplicaron. Nació <mark>Comisiones Obreras</mark> (CC. OO.), un sindicato clandestino vinculado al Partido Comunista, que se infiltraba en el sindicato vertical. La UGT socialista se reorganizó.</li><li>Los <b>estudiantes</b> universitarios protagonizaron protestas y asambleas, duramente reprimidas por la policía; algunas universidades fueron cerradas.</li><li>Parte de la <b>Iglesia</b>, tras el Concilio Vaticano II (1962-1965), se distanció del régimen; muchos sacerdotes jóvenes apoyaban a obreros y nacionalistas.</li><li>Los <b>nacionalismos</b> catalán y vasco. En 1959 nació <b>ETA</b>, que desde 1968 recurrió al terrorismo.</li><li>Los políticos moderados del interior y del exilio, que en el «contubernio de Múnich» (1962) pidieron la democracia para entrar en Europa.</li></ul><p>El régimen respondió con detenciones, el <b>Tribunal de Orden Público</b> (1963) y estados de excepción. Las últimas ejecuciones se produjeron en septiembre de 1975.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Focos de oposición: Obreros, Estudiantes, Iglesia, Nacionalismos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Focos de oposición</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Obreros</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >CC. OO. y huelgas</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Estudiantes</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >protestas</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >universitarias</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Iglesia</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >curas tras el</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >Vaticano II</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Nacionalismos</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >Cataluña y País</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >Vasco</text></g></svg>`,
    },
    {
      html: `<h3>1.12 El final de la dictadura</h3><p>Para asegurar la continuidad del régimen, en <b>1969</b> Franco designó como sucesor, con el título de rey, a <mark>Juan Carlos de Borbón</mark>, nieto de Alfonso XIII, saltándose a su padre, don Juan. Franco pensaba que todo quedaría «atado y bien atado». En 1973 nombró presidente del Gobierno al almirante <b>Carrero Blanco</b>, su mano derecha, que debía garantizar la continuidad. Pero en diciembre de ese año ETA lo asesinó en Madrid con una gran carga explosiva.</p><p>Los últimos años fueron de crisis: la <b>crisis del petróleo</b> de 1973 frenó la economía y disparó el paro y la inflación; las huelgas y protestas aumentaron; el régimen se dividía entre los inmovilistas (el «búnker») y los reformistas, que querían una apertura. El nuevo presidente, Carlos Arias Navarro, prometió reformas que no llegaron. En 1975, la ejecución de cinco opositores provocó protestas en toda Europa, y Marruecos organizó la «Marcha Verde» sobre el Sáhara español, que España abandonó.</p><p>Franco murió el <b>20 de noviembre de 1975</b>. Dos días después, Juan Carlos I fue proclamado rey. Comenzaba la Transición.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Últimos años del franquismo">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--ink)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1969</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">sucesor:</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Juan Carlos</text><circle cx="98" cy="90" r="7" fill="var(--ink)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1973</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">muere</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Carrero</text><circle cx="162" cy="90" r="7" fill="var(--ink)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1975</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">muere Franco</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">20 nov.</text><circle cx="226" cy="90" r="7" fill="var(--ink)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1975</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Juan Carlos I</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">rey, 22 nov.</text>
  </svg>`,
    },
  ],
  figura: {
    titulo: "Etapas de la dictadura",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Tres etapas del franquismo: posguerra, consolidación y desarrollismo">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle">
    <rect x="20" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2.5"/><rect x="20" y="16" width="204" height="36" rx="12" fill="var(--muted)"/><text x="122" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">1939-1952</text><text x="122" y="76" font-size="13" fill="var(--ink)">posguerra y represión</text><text x="122" y="100" font-size="13" fill="var(--ink)">autarquía y hambre</text><text x="122" y="124" font-size="13" fill="var(--ink)">aislamiento</text><text x="122" y="148" font-size="13" fill="var(--ink)">internacional</text><text x="122" y="172" font-size="13" fill="var(--ink)">nacionalcatolicismo</text><rect x="238" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/><rect x="238" y="16" width="204" height="36" rx="12" fill="var(--pen)"/><text x="340" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">1953-1959</text><text x="340" y="76" font-size="13" fill="var(--ink)">acuerdos con EE. UU.</text><text x="340" y="100" font-size="13" fill="var(--ink)">Concordato con</text><text x="340" y="124" font-size="13" fill="var(--ink)">el Vaticano</text><text x="340" y="148" font-size="13" fill="var(--ink)">entrada en la ONU</text><text x="340" y="172" font-size="13" fill="var(--ink)">(1955)</text><rect x="456" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/><rect x="456" y="16" width="204" height="36" rx="12" fill="var(--leaf)"/><text x="558" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">1959-1975</text><text x="558" y="76" font-size="13" fill="var(--ink)">Plan de Estabilización</text><text x="558" y="100" font-size="13" fill="var(--ink)">desarrollismo</text><text x="558" y="124" font-size="13" fill="var(--ink)">turismo y emigración</text><text x="558" y="148" font-size="13" fill="var(--ink)">oposición creciente</text><text x="558" y="172" font-size="13" fill="var(--ink)">muerte de Franco</text>
    </g>
  </svg>`,
  },
  video: {
    id: "BCrCOFBOM1M",
    titulo: "El franquismo",
    canal: "Academia Play",
    vistas: 1958593,
    megusta: 45345,
    busqueda: "franquismo resumen",
  },
  ejemplos: [
    {
      enunciado: "Explica por qué la Guerra Fría ayudó a Franco a sobrevivir.",
      pasos: [
        "Tras 1945 Franco estaba aislado por su apoyo al Eje.",
        "EE. UU. necesitaba aliados contra la URSS.",
        "España ofrecía una posición estratégica y un régimen anticomunista.",
        "En 1953 se firmaron los acuerdos de las bases.",
      ],
      resultado: `El anticomunismo convirtió a Franco en un aliado útil para EE. UU. y le permitió salir del aislamiento.`,
    },
    {
      enunciado: "Compara la autarquía y el desarrollismo.",
      pasos: [
        "Autarquía (1939-1959): producir todo dentro, poco comercio, hambre y estancamiento.",
        "Desarrollismo (1959-1973): apertura, turismo, inversiones y fuerte crecimiento.",
      ],
      resultado: "La autarquía fracasó; la apertura de 1959 trajo el crecimiento de los años 60.",
    },
    {
      enunciado: "Analiza una cartilla de racionamiento de 1945 como fuente.",
      pasos: [
        "Tipo: documento oficial.",
        "Muestra que los alimentos básicos estaban limitados por persona.",
        "Refleja la escasez de la posguerra y la política autárquica.",
        "Explica la aparición del estraperlo.",
      ],
      resultado: "Es una prueba directa del hambre y del fracaso de la autarquía.",
    },
    {
      enunciado: "Distingue las dos grandes etapas del franquismo con tres rasgos cada una.",
      pasos: [
        `Primer franquismo (1939-1959): represión dura, autarquía y hambre, aislamiento internacional, influencia de Falange.`,
        `Segundo franquismo (1959-1975): Plan de Estabilización y desarrollismo, apertura internacional, tecnócratas.`,
        "Lo que se mantiene: dictadura personal, falta de libertades, censura.",
        "Lo que cambia: la economía y la sociedad, que se modernizan.",
      ],
      resultado: `El régimen cambió de política económica y de aliados, pero no de naturaleza política: fue una dictadura hasta el final.`,
    },
    {
      enunciado: `Analiza el gráfico: turistas en España: 4 millones (1959), 14 (1965), 24 (1970), 34 (1973).`,
      pasos: [
        `Tipo: gráfico de barras; tendencia: crecimiento muy rápido, multiplica por más de ocho en 14 años.`,
        `Causas: precios bajos, sol y playa, devaluación de la peseta, desarrollo europeo y vuelos baratos.`,
        `Consecuencias: entrada de divisas, empleo en hostelería y construcción, cambios de costumbres.`,
        "Costes: urbanización desordenada de la costa.",
      ],
      resultado: `El turismo fue uno de los tres motores del desarrollismo y transformó la economía y la sociedad española.`,
    },
    {
      enunciado: "Compara la situación legal de una mujer casada en 1934 y en 1955.",
      pasos: [
        `1934 (República): voto, divorcio, matrimonio civil, igualdad ante la ley según la Constitución.`,
        `1955 (franquismo): sin divorcio, matrimonio religioso, licencia marital para trabajar o abrir una cuenta.`,
        "Causa del cambio: ideología nacionalcatólica del régimen.",
        "Evolución posterior: mejoras en los sesenta y fin de la licencia marital en 1975.",
      ],
      resultado: `La dictadura hizo retroceder los derechos de las mujeres, que no recuperaron la igualdad legal hasta la democracia.`,
    },
  ],
  errores: [
    `Pensar que el franquismo fue igual de principio a fin: pasó de la autarquía al desarrollismo.`,
    "Creer que hubo elecciones libres durante la dictadura.",
    `Atribuir el crecimiento de los 60 solo al régimen: fueron claves el turismo, la emigración y la economía europea.`,
    "Decir que las mujeres tenían los mismos derechos que en la República: perdieron muchos.",
    "Confundir el Plan de Estabilización (1959) con los Planes de Desarrollo (desde 1964).",
    `Pensar que no hubo oposición al franquismo: obreros, estudiantes, parte de la Iglesia y nacionalistas se enfrentaron al régimen, sobre todo desde los años sesenta.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué era el nacionalcatolicismo?",
      sol: `La unión entre el Estado franquista y la Iglesia católica, que controlaba la educación y la moral.`,
    },
    {
      nivel: "básico",
      q: "¿Qué era el sindicato vertical?",
      sol: `El único sindicato permitido, que agrupaba a trabajadores y empresarios bajo el control del Estado.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue el estraperlo?",
      sol: `El mercado negro de la posguerra, donde se vendían productos racionados a precios muy altos.`,
    },
    {
      nivel: "básico",
      q: "Cita dos acuerdos de 1953.",
      sol: `Los pactos con EE. UU. (bases militares a cambio de ayuda) y el Concordato con el Vaticano.`,
    },
    {
      nivel: "básico",
      q: "¿Qué símbolos de consumo aparecen en los 60?",
      sol: "El SEAT 600, la televisión, la nevera, la lavadora y las vacaciones.",
    },
    {
      nivel: "básico",
      q: "Cita dos focos de oposición al franquismo.",
      sol: `El movimiento obrero (Comisiones Obreras) y el movimiento estudiantil en las universidades; también nacionalistas y parte de la Iglesia.`,
    },
    {
      nivel: "básico",
      q: "¿Qué era la democracia orgánica?",
      sol: `El sistema del franquismo en el que los procuradores de las Cortes no eran elegidos por sufragio universal, sino designados o elegidos de forma indirecta a través de la familia, el municipio y el sindicato.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la División Azul?",
      sol: `Una unidad de voluntarios españoles que Franco envió a luchar junto a Alemania contra la URSS durante la Segunda Guerra Mundial (1941-1943).`,
    },
    {
      nivel: "básico",
      q: "¿Qué era el NO-DO?",
      sol: `El noticiario oficial del régimen, de proyección obligatoria en los cines antes de las películas, que difundía la propaganda franquista.`,
    },
    {
      nivel: "básico",
      q: "¿Quién fue designado sucesor de Franco y cuándo?",
      sol: "Juan Carlos de Borbón, en 1969, con el título de rey.",
    },
    {
      nivel: "básico",
      q: "¿Qué fue el Tribunal de Orden Público?",
      sol: `Un tribunal especial creado en 1963 para juzgar los delitos políticos: reuniones, propaganda, huelgas o asociación ilegal.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la Ley General de Educación de 1970?",
      sol: "La ley que creó la EGB y extendió la enseñanza obligatoria y gratuita hasta los 14 años.",
    },
    {
      nivel: "medio",
      q: "¿Por qué la ONU aisló a España en 1946?",
      sol: "Por la relación del régimen con la Alemania nazi y la Italia fascista.",
    },
    {
      nivel: "medio",
      q: "¿Qué cambió el Plan de Estabilización de 1959?",
      sol: "Acabó con la autarquía, abrió la economía al exterior y controló la inflación.",
    },
    {
      nivel: "medio",
      q: "¿Qué papel tuvieron los emigrantes españoles en Europa?",
      sol: "Enviaron dinero (divisas) a sus familias, que ayudó a financiar el crecimiento.",
    },
    {
      nivel: "medio",
      q: "¿Qué era la licencia marital y qué consecuencias tenía?",
      sol: `El permiso que una mujer casada necesitaba de su marido para trabajar, abrir una cuenta, firmar contratos o sacar el pasaporte. Mantenía a las mujeres dependientes y en una situación legal inferior. Se suprimió en 1975.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué fracasó la autarquía?",
      sol: `Porque España no tenía capacidad para producir todo lo que necesitaba, faltaban materias primas, energía y tecnología; el control de precios provocó escasez y mercado negro; y el aislamiento impedía importar y recibir ayuda. El resultado fue hambre e inflación.`,
    },
    {
      nivel: "medio",
      q: "Explica qué fue la represión de posguerra y cita dos leyes represivas.",
      sol: `La persecución sistemática de los vencidos: ejecuciones tras juicios militares, cárceles, campos de concentración, trabajos forzados y depuraciones. Leyes: Ley de Responsabilidades Políticas (1939) y Ley de Represión de la Masonería y el Comunismo (1940).`,
    },
    {
      nivel: "medio",
      q: "¿Quiénes eran los tecnócratas y qué hicieron?",
      sol: `Ministros técnicos, muchos vinculados al Opus Dei, que entraron en el Gobierno a finales de los cincuenta. Impulsaron el Plan de Estabilización (1959) y los Planes de Desarrollo, que abrieron y modernizaron la economía.`,
    },
    {
      nivel: "medio",
      q: "¿Cuál era el papel de la Sección Femenina?",
      sol: `Formar a las mujeres según el modelo del régimen: esposas y madres dedicadas al hogar. Organizaba cursos de cocina, costura y puericultura y el Servicio Social obligatorio.`,
    },
    {
      nivel: "medio",
      q: "¿Qué significó el asesinato de Carrero Blanco en 1973?",
      sol: `Eliminó al hombre que Franco había elegido para garantizar la continuidad del régimen tras su muerte, debilitó a los inmovilistas y dejó al franquismo sin un claro sucesor político.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué la Iglesia, pilar del régimen, se fue distanciando de él?",
      sol: `Por el Concilio Vaticano II (1962-1965), que defendió la libertad religiosa, los derechos humanos y la separación entre Iglesia y Estado. Muchos sacerdotes jóvenes apoyaron a obreros y nacionalistas, y la jerarquía, con el cardenal Tarancón, pidió la reconciliación.`,
    },
    {
      nivel: "medio",
      q: "¿Qué efectos tuvo el éxodo rural?",
      sol: `Vació el campo del interior y envejeció su población; hizo crecer rápidamente las ciudades industriales, con barrios periféricos sin servicios y chabolas; aumentó la mano de obra de la industria y la construcción; y cambió costumbres y mentalidades.`,
    },
    {
      nivel: "avanzado",
      q: "Describe el éxodo rural de los años 60.",
      sol: `Millones de personas dejaron los pueblos para trabajar en la industria y los servicios de las grandes ciudades.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué se dice que el franquismo cambió para sobrevivir? Argumenta.",
      sol: `Porque adaptó su política a las circunstancias sin dejar de ser una dictadura: tras 1945 redujo el peso de Falange y destacó su catolicismo para no parecer fascista; con la Guerra Fría se presentó como aliado anticomunista de EE. UU.; en 1959 abandonó la autarquía para evitar la bancarrota. Mantuvo siempre el poder personal de Franco y la falta de libertades.`,
    },
    {
      nivel: "avanzado",
      q: "Valora el desarrollismo: ¿fue un milagro económico?",
      sol: `A favor: crecimiento muy rápido, industrialización, mejora del nivel de vida, clase media. En contra: dependió de factores externos (turismo, remesas, inversión extranjera, crecimiento europeo); se basó en salarios bajos y sin derecho a huelga; generó desequilibrios regionales, emigración forzada y urbanismo descontrolado; y terminó con la crisis de 1973. Más que un milagro, fue el aprovechamiento de una coyuntura europea favorable.`,
    },
    {
      nivel: "avanzado",
      q: `Explica la contradicción entre la modernización social de los sesenta y el régimen político.`,
      sol: `La sociedad se volvió urbana, de clase media, más formada, más abierta al exterior por el turismo y la emigración, y deseaba libertades como las europeas. Sin embargo, el régimen mantenía la censura, la falta de partidos, sindicatos y elecciones. Esta contradicción hizo crecer la oposición y preparó a la sociedad para la democracia.`,
    },
    {
      nivel: "avanzado",
      q: "Comenta la frase de Franco: «Todo ha quedado atado y bien atado» (1969).",
      sol: `Se refiere a la designación de Juan Carlos como sucesor: Franco creía haber asegurado la continuidad del régimen tras su muerte. Contexto: Ley de Sucesión y crisis final del franquismo. La historia mostró que se equivocaba: Juan Carlos I impulsó la Transición a la democracia.`,
    },
    {
      nivel: "avanzado",
      q: "Compara la oposición al franquismo de los años cuarenta y la de los sesenta.",
      sol: `Años cuarenta: oposición de los vencidos, en el exilio y en la guerrilla (maquis), muy reprimida y sin apoyo internacional. Años sesenta: oposición dentro de la sociedad, de nuevas generaciones: obreros (CC. OO.), estudiantes, parte de la Iglesia, nacionalistas, monárquicos y liberales. Más amplia y eficaz, aunque también reprimida.`,
    },
    {
      nivel: "avanzado",
      q: "Elabora una línea del tiempo del franquismo con ocho fechas clave.",
      sol: `1939 fin de la guerra; 1945 Fuero de los Españoles; 1946 condena de la ONU; 1952 fin del racionamiento; 1953 acuerdos con EE. UU. y Concordato; 1955 ingreso en la ONU; 1959 Plan de Estabilización; 1969 Juan Carlos sucesor; 1973 asesinato de Carrero Blanco; 1975 muerte de Franco.`,
    },
    {
      nivel: "avanzado",
      q: `¿Qué te dice sobre la sociedad franquista que hiciera falta permiso para sacar el pasaporte o trabajar? Relaciona con otros controles del régimen.`,
      sol: `Muestra un Estado que vigilaba y limitaba la vida privada: control de la movilidad, de las mujeres (licencia marital, Servicio Social), de la información (censura, NO-DO), del trabajo (sindicato vertical) y de la religión (nacionalcatolicismo). Era un régimen autoritario que no reconocía las libertades individuales.`,
    },
    {
      nivel: "avanzado",
      q: "Imagina que eres un emigrante andaluz en Alemania en 1965. Escribe una carta a tu familia.",
      sol: `Debe incluir: motivos de la marcha (paro, bajos salarios en el campo); el viaje y el contrato; el trabajo en la fábrica, el idioma, el frío y la vivienda; el dinero enviado (remesas); la nostalgia; y la comparación con la vida en España (libertad, sueldos, sindicatos).`,
    },
  ],
  quiz: [
    {
      q: "¿Qué cargos acumulaba Franco?",
      o: [
        "Solo jefe del ejército",
        "Solo presidente del Gobierno",
        "Jefe del Estado, del gobierno, del ejército y del partido único",
        "Presidente elegido por el Parlamento",
      ],
      a: 2,
      e: "Concentró todos los poderes y no rendía cuentas a nadie.",
    },
    {
      q: "¿Qué fue la autarquía?",
      o: [
        "Una forma de gobierno monárquica",
        "Una política de producir todo dentro del país sin comerciar con el exterior",
        "Un plan de turismo",
        "Una ley electoral",
      ],
      a: 1,
      e: "Provocó escasez, racionamiento y mercado negro en los años 40.",
    },
    {
      q: "¿Qué medida abrió la economía española en 1959?",
      o: [
        "El Plan de Estabilización",
        "El Concordato",
        "La Ley de Responsabilidades Políticas",
        "Los acuerdos con EE. UU.",
      ],
      a: 0,
      e: "Liberalizó el comercio y la inversión y abrió el camino al desarrollismo.",
    },
    {
      q: "El nacionalcatolicismo significaba…",
      o: [
        "la separación de Iglesia y Estado",
        "la unión del nacionalismo español y la Iglesia católica como base del régimen",
        "el rechazo de la religión en la escuela",
        "la libertad religiosa",
      ],
      a: 1,
      e: "La Iglesia controló la educación y la moral pública a cambio de legitimar a Franco.",
    },
    {
      q: "¿Cuándo murió Franco?",
      o: ["20 de noviembre de 1975", "18 de julio de 1936", "1 de abril de 1939", "23 de febrero de 1981"],
      a: 0,
      e: "Dos días después Juan Carlos I fue proclamado rey.",
    },
    {
      q: "Las cartillas de racionamiento duraron hasta…",
      o: ["1965", "1945", "1952", "1975"],
      a: 2,
      e: "La posguerra fue muy larga.",
    },
    {
      q: "España entró en la ONU en…",
      o: ["1945", "1955", "1977", "1962"],
      a: 1,
      e: "Gracias al contexto de la Guerra Fría.",
    },
    {
      q: "TVE empezó a emitir en…",
      o: ["1956", "1939", "1966", "1975"],
      a: 0,
      e: "Al principio solo en Madrid.",
    },
    {
      q: "La Sección Femenina…",
      o: [
        "educaba a las mujeres en el papel de esposa y madre",
        "organizaba huelgas de obreras",
        "defendía el voto femenino",
        "era un sindicato",
      ],
      a: 0,
      e: "Dependía de Falange.",
    },
    {
      q: "El turismo en España en 1973 superó los…",
      o: ["100 millones de visitantes", "3 millones de visitantes", "30 millones de visitantes", "300 millones"],
      a: 2,
      e: "Fue un motor clave del crecimiento.",
    },
    {
      q: "La Ley de Sucesión (1947) definía España como…",
      o: ["república", "reino", "imperio", "federación"],
      a: 1,
      e: "Con Franco como jefe del Estado vitalicio.",
    },
    {
      q: "El partido único del franquismo se llamaba…",
      o: ["Unión Patriótica", "Movimiento Nacional", "Frente Popular", "CEDA"],
      a: 1,
      e: "Unificaba a Falange y los tradicionalistas.",
    },
    {
      q: "¿Qué guerrilleros resistieron en el monte tras la guerra?",
      o: ["los carlistas", "los maquis", "los somatenes", "los bandoleros"],
      a: 1,
      e: "Hasta comienzos de los años cincuenta.",
    },
    {
      q: "La licencia marital obligaba a la mujer casada a…",
      o: ["votar", "pedir permiso al marido para trabajar", "estudiar", "hacer el servicio militar"],
      a: 1,
      e: "Se suprimió en 1975.",
    },
    {
      q: "El INI se creó en 1941 para…",
      o: [
        "dirigir la censura",
        "crear empresas públicas industriales",
        "controlar la Iglesia",
        "organizar el turismo",
      ],
      a: 1,
      e: "Fundó SEAT, ENSIDESA o Iberia.",
    },
    {
      q: "Los ministros que impulsaron el Plan de Estabilización eran los…",
      o: ["falangistas", "tecnócratas", "carlistas", "republicanos"],
      a: 1,
      e: "Muchos vinculados al Opus Dei.",
    },
    {
      q: "El coche símbolo del desarrollismo fue el…",
      o: ["Seat 600", "Ford T", "Mini", "Volkswagen Golf"],
      a: 0,
      e: "Se fabricó desde 1957.",
    },
    {
      q: "Comisiones Obreras estaba vinculada al…",
      o: ["Movimiento Nacional", "Partido Comunista", "Opus Dei", "ejército"],
      a: 1,
      e: "Era un sindicato clandestino.",
    },
    {
      q: "ETA asesinó a Carrero Blanco en…",
      o: ["1969", "1973", "1975", "1977"],
      a: 1,
      e: "En diciembre, en Madrid.",
    },
    {
      q: "Las bases militares de EE. UU. en España se acordaron en…",
      o: ["1945", "1953", "1959", "1975"],
      a: 1,
      e: "A cambio de ayuda económica y militar.",
    },
  ],
  examen: [
    {
      q: "¿Qué hizo cambiar la actitud de EE. UU. hacia Franco?",
      o: [
        "La Guerra Fría y el anticomunismo del régimen",
        "La democratización del país",
        "La entrada de España en la OTAN",
        "La muerte de Stalin",
      ],
      a: 0,
      e: "En 1953 EE. UU. firmó acuerdos con España a cambio de bases militares.",
    },
    {
      q: "Comisiones Obreras nació como…",
      o: [
        "el sindicato oficial",
        "un sindicato clandestino de oposición",
        "una organización juvenil de Falange",
        "un partido político",
      ],
      a: 1,
      e: "Se infiltró en el sindicato vertical para defender a los trabajadores desde dentro.",
    },
    {
      q: "¿Qué tres fuentes de dinero impulsaron el desarrollismo?",
      o: [
        "Oro, plata y petróleo",
        "Exportaciones de petróleo, armas y oro",
        "Inversión extranjera, turismo y remesas de emigrantes",
        "Impuestos, multas y loterías",
      ],
      a: 2,
      e: "Esas tres entradas de divisas financiaron la industrialización de los años 60.",
    },
    {
      q: "El noticiario obligatorio en los cines se llamaba…",
      o: ["TVE", "NO-DO", "Arriba", "ABC"],
      a: 1,
      e: "Difundía la propaganda del régimen.",
    },
    {
      q: "La Ley General de Educación (1970) creó…",
      o: ["la ESO", "la EGB", "el bachillerato", "la universidad"],
      a: 1,
      e: "Enseñanza obligatoria hasta los 14 años.",
    },
    {
      q: "El Concilio Vaticano II alejó del régimen a…",
      o: ["el ejército", "parte de la Iglesia", "Falange", "los tecnócratas"],
      a: 1,
      e: "Defendió libertades y derechos humanos.",
    },
    {
      q: "La crisis del petróleo que frenó el desarrollismo fue en…",
      o: ["1959", "1973", "1982", "1992"],
      a: 1,
      e: "Disparó precios y paro.",
    },
    {
      q: "Juan Carlos I fue proclamado rey el…",
      o: ["20 de noviembre de 1975", "22 de noviembre de 1975", "6 de diciembre de 1978", "23 de febrero de 1981"],
      a: 1,
      e: "Dos días después de la muerte de Franco.",
    },
  ],
  feynman: [
    "Quién tenía el poder en el franquismo y cuáles eran sus pilares",
    "Qué diferencia hay entre autarquía y desarrollismo",
    "Qué cambios sociales hubo en los años 60",
    "Cómo terminó la dictadura",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: FRANQUISMO">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">FRANQUISMO</text>
      <rect x="5" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--ink)">Régimen</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">Franco · partido único · censura</text><rect x="425" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--red)">Represión</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">fusilamientos · cárcel · exilio</text><rect x="5" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--leaf)">Economía</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">autarquía → desarrollismo</text><rect x="425" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--pen)">Final</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">oposición · 20-N-1975</text>
    </g></svg>`,
  tarjetas: [
    ["Duración de la dictadura franquista", "De 1939 a 1975 (36 años)."],
    ["Autarquía", "Autosuficiencia económica de los años 40: racionamiento y estraperlo."],
    ["Plan de Estabilización", "1959: abrió la economía española al exterior."],
    ["Desarrollismo", "Crecimiento de los años 60 gracias a industria, turismo y emigración."],
    ["Muerte de Franco", "20 de noviembre de 1975."],
    ["Nacionalcatolicismo", "Unión entre el régimen franquista y la Iglesia."],
    ["Estraperlo", "Mercado negro de la posguerra."],
    ["Plan de Estabilización", "Medidas de 1959 que acabaron con la autarquía."],
    ["Licencia marital", "Permiso del marido que necesitaba la mujer casada para trabajar o abrir una cuenta."],
    ["Tecnócratas", "Ministros técnicos que modernizaron la economía desde 1957."],
    ["Éxodo rural", "Emigración masiva del campo a las ciudades en los años 60."],
    ["Comisiones Obreras", "Sindicato clandestino de oposición nacido en los años 60."],
  ],
  glosario: [
    ["Dictadura", "Régimen en el que una persona o grupo gobierna sin límites ni elecciones libres."],
    ["Caudillo", "Título de Franco como jefe supremo del Estado."],
    ["Leyes Fundamentales", "Leyes que sustituían a una Constitución en el franquismo."],
    ["Democracia orgánica", "Sistema de representación indirecta por familia, municipio y sindicato."],
    ["Nacionalcatolicismo", "Unión del régimen franquista y la Iglesia católica."],
    ["Movimiento Nacional", "Partido único del franquismo."],
    ["Sindicato vertical", "Organización sindical obligatoria que reunía a empresarios y trabajadores."],
    ["Depuración", "Expulsión o sanción de funcionarios por sus ideas."],
    ["Maquis", "Guerrilleros antifranquistas de la posguerra."],
    ["Racionamiento", "Reparto limitado de alimentos con cartilla."],
    ["Estraperlo", "Mercado negro de la posguerra."],
    ["Autarquía", "Política económica de autoabastecimiento sin comercio exterior."],
    ["Licencia marital", "Permiso del marido exigido a la mujer casada."],
    ["Tecnócratas", "Ministros técnicos del segundo franquismo."],
    ["Desarrollismo", "Crecimiento económico rápido de los años 60."],
    ["Remesas", "Dinero que los emigrantes envían a su país."],
    ["Éxodo rural", "Emigración masiva del campo a la ciudad."],
    ["Censura", "Control previo de lo que se publica o se emite."],
  ],
  situacion: {
    titulo: "Memorias de la dictadura",
    reto: `El centro cultural de tu barrio quiere crear un archivo sonoro con testimonios de personas mayores sobre la vida cotidiana durante el franquismo, y os pide que lo preparéis con rigor histórico.`,
    pasos: [
      "Elegid en grupo un tema: escuela, trabajo, mujer, emigración, ocio o censura.",
      "Estudiad el contexto histórico del tema con este libro y otras fuentes fiables.",
      "Preparad un guion de entrevista de 8-10 preguntas abiertas y respetuosas.",
      `Entrevistad a una persona mayor (familiar o vecino), con su permiso, y grabad o transcribid sus respuestas.`,
      `Contrastad el testimonio con lo estudiado: qué coincide, qué añade, qué recuerda de otra forma.`,
      "Montad un breve podcast o dossier con el testimonio y vuestra explicación histórica.",
    ],
    producto: `Un podcast de 5 minutos o un dossier escrito que combine testimonio y explicación histórica.`,
    evaluacion: [
      "Rigor en el contexto histórico.",
      "Calidad y respeto del guion de entrevista.",
      "Capacidad de contrastar memoria personal e historia.",
      "Claridad y creatividad del producto final.",
    ],
  },
  familias: [
    `Preguntad a abuelos o vecinos cómo era la escuela, la censura o la emigración en los años 50 y 60.`,
    "Buscad una cartilla de racionamiento o una foto antigua del SEAT 600 y comentadla.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: la dictadura franquista, la represión y la oposición; memoria democrática y derechos (RD 217/2022, Geografía e Historia 4º; Ley 20/2022).`,
    ideas: [
      "Entrevista intergeneracional sobre la vida cotidiana en el franquismo.",
      "Comparación de los derechos de la mujer antes y después de 1975.",
      "Gráfica de emigración española a Europa 1960-1973.",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    { t: "Franquismo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Franquismo" },
  ],
  revisado: "2026-11-13",
};
