// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Unión Europea",
  minutos: 100,
  objetivos: [
    "Explicar el origen y las ampliaciones de la Unión Europea",
    "Identificar sus principales instituciones y su funcionamiento",
    "Valorar qué supone para España y su ciudadanía",
    "Explicar las libertades del mercado único y el euro",
    "Conocer qué aporta la ciudadanía europea y los retos de la UE",
  ],
  claves: ["CECA", "Tratado de Roma", "Maastricht", "euro", "Parlamento Europeo", "Comisión Europea"],
  pregunta: {
    texto: `Francia y Alemania se enfrentaron en tres guerras en menos de 80 años. Hoy comparten moneda, fronteras abiertas y un Parlamento. ¿Cómo dos enemigos se convirtieron en socios?`,
    respuesta: `Tras la Segunda Guerra Mundial, algunos políticos pensaron que unir sus economías haría imposible otra guerra. Empezaron con el carbón y el acero en 1951 y, paso a paso, crearon la <mark>Unión Europea</mark>: hoy 27 países que comparten mercado, leyes, instituciones y, muchos de ellos, el euro.`,
  },
  lectura: {
    titulo: "Un año en Bolonia",
    html: `<p>Marta estudia Ingeniería en Valencia. Este curso se ha ido de Erasmus a Bolonia, en Italia. No ha necesitado visado ni permiso de trabajo; cruzó la frontera en avión sin enseñar el pasaporte, solo el DNI; paga el café en euros, igual que en casa; y cuando llama a sus padres con el móvil no le cobran más que en España. Cuando se torció un tobillo jugando al baloncesto, la atendieron en el hospital con su Tarjeta Sanitaria Europea. Las asignaturas que aprueba en Italia le cuentan en su universidad. Este verano quiere trabajar en un hotel de Croacia y, el próximo año, hacer las prácticas en una empresa de Alemania.</p><p>Hace ochenta años todo esto habría sido impensable. Su abuelo nació en una Europa en ruinas, tras una guerra en la que alemanes, franceses, italianos y británicos se habían matado por millones. Las fronteras estaban llenas de soldados y aduanas, cada país tenía su moneda y viajar al extranjero era un lujo.</p><p>¿Cómo se pasó de la guerra a la Unión? En este tema estudiarás la historia, las instituciones y los retos de la <b>Unión Europea</b>, y lo que supone para ti ser ciudadano europeo.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Una idea para una Europa en ruinas</h3><p>En 1945 Europa estaba destrozada: dos guerras mundiales en treinta años, con unos 60 millones de muertos solo en la segunda, ciudades arrasadas, economías hundidas y millones de refugiados. Francia y Alemania se habían enfrentado tres veces en setenta años (1870, 1914, 1939). Muchos europeos se preguntaron cómo evitar que aquello volviera a ocurrir.</p><p>La respuesta fue la <mark>integración europea</mark>: unir a los países con lazos económicos y políticos tan fuertes que la guerra entre ellos fuera imposible. Ya en 1946 Winston Churchill habló de construir unos «Estados Unidos de Europa». En 1949 se creó el <b>Consejo de Europa</b>, con sede en Estrasburgo, para defender la democracia y los derechos humanos; no forma parte de la UE.</p><p>Además, la Guerra Fría dividía el continente con el telón de acero, y Estados Unidos, con el Plan Marshall, animaba a los europeos occidentales a cooperar para reconstruirse y frenar el comunismo. Políticos como el francés <b>Jean Monnet</b> y <b>Robert Schuman</b>, el alemán Konrad Adenauer o el italiano Alcide De Gasperi, considerados los «<b>padres de Europa</b>», defendieron una unión que empezara poco a poco, por la economía, para ir creando una «solidaridad de hecho».</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Por qué unir Europa: Paz, Reconstrucción, Guerra Fría, Democracia"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Por qué unir Europa</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Paz</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >evitar nuevas</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >guerras</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Reconstrucción</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >recuperar la</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >economía</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Guerra Fría</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >frente al bloque</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >soviético</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Democracia</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >defender los</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >derechos</text></g></svg>`,
    },
    {
      html: `<h3>1.2 El origen: del carbón al mercado común</h3><p>El <b>9 de mayo de 1950</b>, el ministro francés de Asuntos Exteriores <b>Robert Schuman</b> propuso poner en común la producción de <b>carbón y acero</b> de Francia y Alemania, las materias primas con las que se fabricaban las armas, bajo una autoridad común. Si nadie controlaba por sí solo esos recursos, nadie podría preparar una guerra contra el otro. Por eso el 9 de mayo, día de la <mark>declaración Schuman</mark>, es el <b>Día de Europa</b>.</p><p>En 1951 seis países, Francia, Alemania occidental, Italia, Bélgica, Países Bajos y Luxemburgo, firmaron el Tratado de París y crearon la <mark>CECA</mark>, la Comunidad Europea del Carbón y del Acero. Fue un éxito, y en <b>1957</b> los mismos seis países firmaron el <b>Tratado de Roma</b>, que fundó la <mark>Comunidad Económica Europea</mark> (CEE) y el Euratom, para la energía nuclear. La CEE creó un <b>mercado común</b>: se suprimieron los aranceles entre sus miembros (en 1968) y se estableció un arancel común frente al exterior. También nació la <b>Política Agraria Común</b> (PAC) para modernizar la agricultura y garantizar alimentos. Los años sesenta fueron de gran crecimiento económico en los seis países.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Primeros pasos de la integración europea">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M18 90 H 242" stroke="var(--ink)" stroke-width="3"/>
    <circle cx="34" cy="90" r="7" fill="var(--pen)"/><text x="34" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1950</text><text x="14" y="30" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">declaración</text><text x="14" y="44" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Schuman</text><circle cx="98" cy="90" r="7" fill="var(--pen)"/><text x="98" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1951</text><text x="98" y="144" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">CECA,</text><text x="98" y="158" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">6 países</text><circle cx="162" cy="90" r="7" fill="var(--pen)"/><text x="162" y="62" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1957</text><text x="162" y="30" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Tratado</text><text x="162" y="44" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">de Roma</text><circle cx="226" cy="90" r="7" fill="var(--pen)"/><text x="226" y="126" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1968</text><text x="246" y="144" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">unión</text><text x="246" y="158" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">aduanera</text>
  </svg>`,
    },
    {
      html: `<h3>1.3 De la CEE a la Unión Europea</h3><p>Durante décadas la integración avanzó a pasos. En 1979 los ciudadanos eligieron por primera vez el <b>Parlamento Europeo</b> por sufragio universal. El <b>Acta Única Europea</b> (1986) puso en marcha el mercado único, que funcionó desde 1993.</p><p>El gran salto fue el <mark>Tratado de Maastricht</mark> (1992), que creó la <b>Unión Europea</b>. Además de la economía, la Unión empezó a cooperar en política exterior, seguridad, justicia e interior. Creó la <b>ciudadanía europea</b> y fijó el camino hacia una moneda única. Los acuerdos de <b>Schengen</b> (1985, aplicados desde 1995) eliminaron los controles en las fronteras interiores. En 2002 empezaron a circular los billetes y monedas de <b>euro</b>.</p><p>En 2004 fracasó el intento de aprobar una Constitución Europea, rechazada en referéndum en Francia y los Países Bajos. Su contenido se recogió en el <b>Tratado de Lisboa</b> (2007, en vigor en 2009), que reforzó el Parlamento, creó un presidente estable del Consejo Europeo y un Alto Representante para la política exterior, e hizo obligatoria la Carta de los Derechos Fundamentales. En 2020 el Reino Unido salió de la Unión, tras el referéndum del <b>Brexit</b> (2016): por primera vez la UE perdía un miembro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tratados clave">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="14" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="14" y="14" width="80" height="26" rx="8" fill="var(--muted)"/><text x="54" y="31" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Roma 1957</text><text x="102" y="31" font-size="11.5" fill="var(--ink)">nace la CEE</text><rect x="14" y="44" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="14" y="44" width="80" height="26" rx="8" fill="var(--pen)"/><text x="54" y="61" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Maastricht</text><text x="102" y="61" font-size="11.5" fill="var(--ink)">1992: UE y ciudadanía</text><rect x="14" y="74" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><rect x="14" y="74" width="80" height="26" rx="8" fill="var(--sun)"/><text x="54" y="91" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Euro 2002</text><text x="102" y="91" font-size="11.5" fill="var(--ink)">monedas y billetes</text><rect x="14" y="104" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="104" width="80" height="26" rx="8" fill="var(--leaf)"/><text x="54" y="121" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Lisboa</text><text x="102" y="121" font-size="11.5" fill="var(--ink)">2007: más Parlamento</text><rect x="14" y="134" width="232" height="26" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="14" y="134" width="80" height="26" rx="8" fill="var(--red)"/><text x="54" y="151" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Brexit</text><text x="102" y="151" font-size="10.5" fill="var(--ink)">2020: sale el Reino Unido</text></g>
  </svg>`,
    },
    {
      html: `<h3>1.4 Las ampliaciones</h3><p>De los 6 países fundadores se ha pasado a 27 mediante sucesivas <mark>ampliaciones</mark>:</p><table class="tb"><thead><tr><th>Año</th><th>Países que entran</th><th>Total</th></tr></thead><tbody><tr><td>1973</td><td>Reino Unido, Irlanda, Dinamarca</td><td>9</td></tr><tr><td>1981</td><td>Grecia</td><td>10</td></tr><tr><td>1986</td><td>España y Portugal</td><td>12</td></tr><tr><td>1995</td><td>Austria, Finlandia, Suecia</td><td>15</td></tr><tr><td>2004</td><td>diez países, la mayoría de Europa del Este</td><td>25</td></tr><tr><td>2007</td><td>Rumanía y Bulgaria</td><td>27</td></tr><tr><td>2013</td><td>Croacia</td><td>28</td></tr></tbody></table><p>Con la salida del Reino Unido en 2020, la UE tiene hoy <b>27 Estados miembros</b> y unos 450 millones de habitantes. La gran ampliación de 2004 tuvo un enorme valor simbólico: países como Polonia, Hungría, la República Checa o los bálticos, que habían estado al otro lado del telón de acero, se integraban en la Europa democrática. Grecia, España y Portugal habían entrado también tras salir de dictaduras.</p><p>Para entrar hay que cumplir los <b>criterios de Copenhague</b> (1993): ser una democracia estable que respete el Estado de derecho, los derechos humanos y las minorías; tener una economía de mercado capaz de competir; y aceptar las leyes de la Unión. Hoy son candidatos países como Ucrania, Moldavia, Montenegro, Serbia, Albania o Turquía.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico de escalones del número de países miembros: 6, 9, 10, 12, 15, 25, 27">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11" text-anchor="middle">
        <rect x="22" y="123.6" width="24" height="26.400000000000002" rx="3" fill="var(--pen)"/><text x="34" y="117.6" font-weight="700" fill="var(--ink)">6</text><text x="34" y="166" fill="var(--muted)" font-size="9.5">1957</text><rect x="52" y="110.4" width="24" height="39.6" rx="3" fill="var(--pen)"/><text x="64" y="104.4" font-weight="700" fill="var(--ink)">9</text><text x="64" y="166" fill="var(--muted)" font-size="9.5">1973</text><rect x="82" y="106" width="24" height="44" rx="3" fill="var(--pen)"/><text x="94" y="100" font-weight="700" fill="var(--ink)">10</text><text x="94" y="166" fill="var(--muted)" font-size="9.5">1981</text><rect x="112" y="97.19999999999999" width="24" height="52.800000000000004" rx="3" fill="var(--red)"/><text x="124" y="91.19999999999999" font-weight="700" fill="var(--ink)">12</text><text x="124" y="166" fill="var(--muted)" font-size="9.5">1986</text><rect x="142" y="84" width="24" height="66" rx="3" fill="var(--pen)"/><text x="154" y="78" font-weight="700" fill="var(--ink)">15</text><text x="154" y="166" fill="var(--muted)" font-size="9.5">1995</text><rect x="172" y="39.999999999999986" width="24" height="110.00000000000001" rx="3" fill="var(--pen)"/><text x="184" y="33.999999999999986" font-weight="700" fill="var(--ink)">25</text><text x="184" y="166" fill="var(--muted)" font-size="9.5">2004</text><rect x="202" y="26.799999999999983" width="24" height="123.20000000000002" rx="3" fill="var(--pen)"/><text x="214" y="20.799999999999983" font-weight="700" fill="var(--ink)">28</text><text x="214" y="166" fill="var(--muted)" font-size="9.5">2013</text><rect x="232" y="31.19999999999999" width="24" height="118.80000000000001" rx="3" fill="var(--pen)"/><text x="244" y="25.19999999999999" font-weight="700" fill="var(--ink)">27</text><text x="244" y="166" fill="var(--muted)" font-size="9.5">2020</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>1.5 El mercado único y sus cuatro libertades</h3><p>Desde 1993 la UE es un <mark>mercado único</mark>, el mayor del mundo por número de consumidores ricos, sin aranceles ni controles en sus fronteras interiores. Se basa en las <b>cuatro libertades de circulación</b>:</p><ul><li>de <b>personas</b>: vivir, estudiar y trabajar en cualquier país de la Unión;</li><li>de <b>mercancías</b>: los productos circulan sin aduanas ni aranceles;</li><li>de <b>servicios</b>: una empresa puede ofrecer sus servicios en otros países;</li><li>de <b>capitales</b>: se puede invertir, ahorrar o pedir un préstamo en cualquier país.</li></ul><p>El <b>espacio Schengen</b> eliminó los controles de pasaporte entre la mayoría de los países de la UE y algunos que no lo son, como Suiza o Noruega; Irlanda, en cambio, no forma parte de él.</p><p>Para que el mercado funcione, la UE fija <b>normas comunes</b> de seguridad de los productos, de protección al consumidor, de medio ambiente y de competencia, y multa a las empresas que abusan de su poder. Algunos ejemplos que notas en tu vida: la garantía mínima de dos años al comprar un producto, el fin del <b>roaming</b> en el móvil, el cargador común USB-C o los derechos de los pasajeros cuando un vuelo se retrasa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Las cuatro libertades: Personas, Mercancías, Servicios, Capitales"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Las cuatro libertades</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Personas</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >vivir, estudiar y</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >trabajar</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Mercancías</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >sin aranceles ni</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >aduanas</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Servicios</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >ofrecerlos en toda</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >la UE</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Capitales</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >invertir y mover</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >dinero</text></g></svg>`,
    },
    {
      html: `<h3>1.6 El euro</h3><p>El <mark>euro</mark> se creó en 1999 como moneda de cuenta, para transferencias y bancos, y llegó en monedas y billetes el <b>1 de enero de 2002</b>, sustituyendo a monedas como la peseta, el franco o el marco. Hoy lo usan 21 países: es la llamada <b>eurozona</b>. Bulgaria fue el último en incorporarse, en 2026. Otros, como Dinamarca, Suecia, Polonia o Hungría, conservan su propia moneda.</p><p>Sus ventajas son claras: se comparan precios fácilmente entre países, desaparecen los gastos y riesgos de cambiar de moneda al viajar o comerciar, y hay más estabilidad de precios. El euro es la segunda moneda más usada del mundo tras el dólar. Su gran inconveniente es que cada país ya no puede cambiar el valor de su moneda ni fijar sus <b>tipos de interés</b>, que decide el <b>Banco Central Europeo</b> (BCE), con sede en Fráncfort, para toda la eurozona.</p><p>Para entrar hay que cumplir los <b>criterios de convergencia</b> de Maastricht: inflación baja, déficit público inferior al 3 % del PIB y una deuda pública controlada. Durante la crisis de 2010-2012 la eurozona estuvo en peligro, y varios países, como Grecia, Irlanda y Portugal, recibieron rescates a cambio de duros ajustes.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: El camino del euro"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="52" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1992</text><text x="52" y="44.4" text-anchor="middle" font-size="9.5" fill="var(--muted)">Maastricht fija</text><text x="52" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">los criterios</text><circle cx="96" cy="98" r="6" fill="var(--red)"/><path d="M96 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="96" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1999</text><text x="96" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">moneda de cuenta</text><circle cx="164" cy="98" r="6" fill="var(--leaf)"/><path d="M164 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="164" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">2002</text><text x="164" y="55.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">billetes y monedas</text><circle cx="232" cy="98" r="6" fill="var(--sun)"/><path d="M232 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="208" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">2026</text><text x="208" y="149.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">21 países con euro</text></g></svg>`,
    },
    {
      html: `<h3>1.7 Las instituciones</h3><p>La UE no es un Estado ni una simple organización internacional: es una unión de Estados que <b>comparten parte de su soberanía</b> en unas <mark>instituciones comunes</mark>. Sus decisiones obligan a los países miembros, y el Derecho de la UE prevalece sobre el nacional en las materias en las que la Unión es competente.</p><ul><li>El <b>Parlamento Europeo</b> representa a los ciudadanos, que lo eligen cada cinco años; tiene 720 diputados, agrupados por ideologías, no por países. España elige 61.</li><li>El <b>Consejo de la UE</b> representa a los gobiernos: reúne a los ministros de cada país según el tema.</li><li>La <b>Comisión Europea</b> es el «gobierno» de la Unión: propone las leyes, gestiona el presupuesto y vigila que se cumplan los tratados. Tiene un comisario por país y su presidente o presidenta es elegido por el Parlamento.</li><li>El <b>Consejo Europeo</b> reúne a los jefes de Estado o de Gobierno y marca las grandes orientaciones políticas.</li><li>El <b>Tribunal de Justicia</b> interpreta el Derecho de la UE y garantiza que se aplique igual en todos los países.</li><li>El <b>Banco Central Europeo</b> gestiona el euro y la inflación.</li></ul>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Instituciones de la Unión Europea">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle">
    <path d="M56 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="56" y="34" fill="var(--ink)">Parlamento</text><path d="M204 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="204" y="34" fill="var(--ink)">Consejo UE</text><path d="M54 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="6" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="54" y="100" fill="var(--ink)">Comisión</text><path d="M206 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="158" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="206" y="100" fill="var(--ink)" font-size="10.5">Consejo Europeo</text><path d="M56 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="56" y="164" fill="var(--ink)">Tribunal</text><path d="M204 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><text x="204" y="164" fill="var(--ink)">BCE</text>
    <circle cx="130" cy="96" r="34" fill="var(--pen)"/>
    <text x="130" y="100" fill="#fff" font-size="11">UE</text>
  </g>
  </svg>`,
      video: {
        id: "m_xadbzgyA4",
        titulo: "¿Cuáles son las instituciones de la UE?",
        canal: "Opo Esquemas",
        vistas: 62997,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.8 Quién hace qué</h3><table class="tb"><thead><tr><th>Institución</th><th>Sede</th><th>Función</th></tr></thead><tbody><tr><td>Parlamento Europeo</td><td>Estrasburgo y Bruselas</td><td>elegido por los ciudadanos cada 5 años; aprueba leyes y presupuesto</td></tr><tr><td>Consejo de la UE</td><td>Bruselas</td><td>ministros de cada país; aprueba leyes con el Parlamento</td></tr><tr><td>Consejo Europeo</td><td>Bruselas</td><td>jefes de Estado o de Gobierno; marca las grandes orientaciones</td></tr><tr><td>Comisión Europea</td><td>Bruselas</td><td>propone leyes y vigila que se cumplan</td></tr><tr><td>Tribunal de Justicia</td><td>Luxemburgo</td><td>interpreta el Derecho de la UE</td></tr><tr><td>Banco Central Europeo</td><td>Fráncfort</td><td>controla el euro y la inflación</td></tr></tbody></table><p>La mayoría de las leyes europeas se aprueban por el <mark>procedimiento legislativo ordinario</mark>: la Comisión propone; el Parlamento y el Consejo de la UE debaten, enmiendan y deben aprobar el mismo texto; si no se ponen de acuerdo, negocian. Así se equilibran los intereses de los ciudadanos (Parlamento) y de los Estados (Consejo). Las normas pueden ser <b>reglamentos</b>, que se aplican directamente en todos los países, o <b>directivas</b>, que fijan un objetivo que cada país debe incorporar a sus leyes en un plazo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cómo nace una ley europea: Comisión: propone → Parlamento: debate y vota → Consejo de la UE: vota → ley aplicada en los 27"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Cómo nace una ley europea</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="45.9" text-anchor="middle" font-size="10.5" >Comisión: propone</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="84.4" text-anchor="middle" font-size="10.5" >Parlamento: debate y vota</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="122.9" text-anchor="middle" font-size="10.5" >Consejo de la UE: vota</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="161.4" text-anchor="middle" font-size="10.5" >ley aplicada en los 27</text></g></svg>`,
      video: {
        id: "QaonMOWIW2w",
        titulo: "Guía básica para entender la Unión Europea",
        canal: "El Viejo Continente",
        vistas: 230204,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.9 Las políticas comunes y el presupuesto</h3><p>La UE desarrolla <mark>políticas comunes</mark> en muchos ámbitos. Para financiarlas tiene un <b>presupuesto</b> propio, de alrededor del 1 % del PIB de la Unión, que aportan los Estados según su riqueza y algunos ingresos propios, como los aranceles. Se aprueba en marcos de siete años.</p><ul><li>La <b>Política Agraria Común</b> (PAC), la más antigua, ayuda a los agricultores y ganaderos, garantiza alimentos seguros y protege el medio rural. Hoy supone alrededor de un tercio del presupuesto.</li><li>La <b>política de cohesión</b> reduce las diferencias entre regiones ricas y pobres mediante los <mark>fondos estructurales</mark>, como el FEDER o el Fondo Social Europeo, que financian carreteras, trenes, depuradoras, empresas o formación.</li><li>Otras políticas: medio ambiente y clima, transportes, investigación (programa Horizonte), educación (Erasmus+), comercio exterior, competencia, protección de los consumidores y ayuda al desarrollo, de la que la UE es el primer donante mundial.</li></ul><p>Los países más ricos, como Alemania o los Países Bajos, son <b>contribuyentes netos</b>: aportan más de lo que reciben. Otros, como Polonia, son <b>receptores netos</b>. España fue durante décadas uno de los grandes receptores.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Presupuesto de la UE (aprox. %). Cohesión 33 %, PAC 31 %, Otros 36 %"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Presupuesto de la UE (aprox. %)</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="31.0" y="58.0" width="51.3" height="88.0" rx="3" fill="var(--pen)"/><text x="56.666666666666664" y="54.3" text-anchor="middle" font-size="9.5" font-weight="700">33 %</text><text x="56.666666666666664" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Cohesión</text><rect x="104.3" y="63.3" width="51.3" height="82.7" rx="3" fill="var(--red)"/><text x="130" y="59.7" text-anchor="middle" font-size="9.5" font-weight="700">31 %</text><text x="130" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">PAC</text><rect x="177.7" y="50.0" width="51.3" height="96.0" rx="3" fill="var(--leaf)"/><text x="203.33333333333331" y="46.3" text-anchor="middle" font-size="9.5" font-weight="700">36 %</text><text x="203.33333333333331" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Otros</text></g></svg>`,
    },
    {
      html: `<h3>1.10 Qué supone para España</h3><p>Para España, entrar en la CEE el <b>1 de enero de 1986</b> fue un objetivo histórico: la Europa democrática había rechazado a la España franquista, y «Europa» significaba democracia, libertad y modernidad. La negociación fue larga y difícil, sobre todo por la agricultura y la pesca, y costó una dura reconversión de la industria.</p><p>Los beneficios han sido grandes. Los <mark>fondos europeos</mark> de cohesión y regionales ayudaron a construir buena parte de las autovías, las líneas de alta velocidad, puertos, depuradoras y hospitales; la PAC modernizó el campo; aumentaron el comercio, el turismo y la inversión extranjera, y la renta de los españoles se acercó a la media europea. Los ciudadanos pueden vivir, estudiar y trabajar en cualquier país de la Unión. España es uno de los países que más estudiantes envía y recibe con el programa <b>Erasmus</b>. Tras la pandemia, España ha sido de los mayores beneficiarios de los fondos Next Generation EU.</p><p>A cambio, España comparte decisiones sobre su economía, la agricultura, la pesca o el medio ambiente; aplica normas comunes; y, con el euro, no controla su moneda. Los españoles se encuentran entre los ciudadanos más favorables a la Unión.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ventajas y compromisos de ser miembro">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--leaf)" font-family="Baloo 2, sans-serif">Ventajas</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">fondos europeos</text><text x="69" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">libre circulación</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">euro</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Erasmus</text><text x="69" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">mercado de 450 M</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--pen)" font-family="Baloo 2, sans-serif">Compromisos</text>
    <text x="191" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">normas comunes</text><text x="191" y="90" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">límites de déficit</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">aportar al</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">presupuesto</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">decidir con 27</text>
  </svg>`,
    },
    {
      html: `<h3>1.11 Ser ciudadano europeo</h3><p>Todo español es también <mark>ciudadano de la Unión Europea</mark>. La ciudadanía europea, creada en Maastricht, no sustituye a la nacional, sino que la completa. Significa poder:</p><ul><li>vivir, estudiar y trabajar en cualquier país miembro en las mismas condiciones que sus nacionales;</li><li>votar y presentarse en las elecciones municipales y europeas allí donde se resida;</li><li>recibir protección consular de cualquier país de la UE fuera de Europa, si el tuyo no tiene embajada;</li><li>usar la <b>Tarjeta Sanitaria Europea</b> para recibir atención médica en otro país;</li><li>dirigir peticiones al Parlamento Europeo, quejas al Defensor del Pueblo Europeo y, con un millón de firmas, presentar una <b>iniciativa ciudadana europea</b>.</li></ul><p>Los jóvenes pueden estudiar o hacer prácticas con <b>Erasmus+</b>, participar en el Cuerpo Europeo de Solidaridad o viajar en tren con DiscoverEU. La <b>Carta de los Derechos Fundamentales</b> recoge los derechos de todos: dignidad, libertades, igualdad, solidaridad, ciudadanía y justicia. Los símbolos de la Unión son la bandera azul con doce estrellas, el himno (la «Oda a la alegría» de Beethoven), el lema «Unida en la diversidad» y el Día de Europa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Derechos del ciudadano europeo: Movilidad, Voto, Protección, Salud"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Derechos del ciudadano europeo</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Movilidad</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >vivir y trabajar</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >en la UE</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Voto</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >municipales y</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >europeas</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Protección</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >consulados de la</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >UE</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Salud</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >Tarjeta Sanitaria</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >Europea</text></g></svg>`,
    },
    {
      html: `<h3>1.12 Los retos de la UE</h3><p>La UE afronta <mark>desafíos</mark> importantes. La salida del Reino Unido (<b>Brexit</b>, 2020) mostró que la integración no es irreversible. Han crecido los partidos <b>euroescépticos</b>, que critican la pérdida de soberanía nacional o la burocracia de Bruselas, y algunos gobiernos han sido acusados de no respetar el Estado de derecho. Muchos ciudadanos sienten que las instituciones europeas están lejos de ellos: es el llamado <b>déficit democrático</b>.</p><p>Otros retos son la gestión común de la <b>inmigración</b> y el asilo, en la que los países no se ponen de acuerdo; la <b>dependencia energética</b>, que quedó al descubierto cuando Rusia invadió Ucrania (2022) y subió el precio del gas; la seguridad y la defensa común; el envejecimiento de la población; y la competencia tecnológica y comercial con EE. UU. y China.</p><p>La UE también ha mostrado capacidad de respuesta. Tras la pandemia se aprobó el fondo <b>Next Generation EU</b>, financiado por primera vez con deuda común, para impulsar la transición verde y digital, y se compraron vacunas de forma conjunta. El <b>Pacto Verde Europeo</b> fija el objetivo de que la UE sea climáticamente neutra en 2050. Y la Unión ha apoyado a Ucrania con ayuda y sanciones contra Rusia.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Retos de la Unión: Brexit, Euroescepticismo, Migración, Seguridad"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Retos de la Unión</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Brexit</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >primer país que</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >sale</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Euroescepticismo</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >partidos contra la</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >UE</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Migración</text><text x="68" y="150.5" text-anchor="middle" font-size="10" >gestión común</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Seguridad</text><text x="192" y="150.5" text-anchor="middle" font-size="10" >guerra en Ucrania</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Cronología de la integración europea",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo de 1951 a 2020">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <path d="M30 100 H 650" stroke="var(--line)" stroke-width="4"/>
    <rect x="40" y="92" width="280" height="16" rx="8" fill="var(--muted)" opacity=".75"/><text x="180" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">CECA y CEE</text><rect x="320" y="92" width="320" height="16" rx="8" fill="var(--pen)" opacity=".75"/><text x="480" y="126" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Unión Europea</text>
    <path d="M40 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="40" cy="100" r="5" fill="var(--ink)"/><text x="40" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1951</text><text x="20" y="54" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">CECA</text><path d="M110 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="110" cy="100" r="5" fill="var(--ink)"/><text x="110" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1957</text><text x="110" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Tratado de Roma</text><path d="M230 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="230" cy="100" r="5" fill="var(--ink)"/><text x="230" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1986</text><text x="230" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">entra España</text><path d="M320 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="320" cy="100" r="5" fill="var(--ink)"/><text x="320" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1992</text><text x="320" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Maastricht</text><path d="M400 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="400" cy="100" r="5" fill="var(--ink)"/><text x="400" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">2002</text><text x="400" y="54" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">euro en el bolsillo</text><path d="M480 100 V 140" stroke="var(--ink)" stroke-width="1.5"/><circle cx="480" cy="100" r="5" fill="var(--ink)"/><text x="480" y="164" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">2004</text><text x="480" y="182" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">ampliación al Este</text><path d="M630 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><circle cx="630" cy="100" r="5" fill="var(--ink)"/><text x="630" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">2020</text><text x="650" y="54" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Brexit</text>
  </svg>`,
  },
  video: {
    id: "gOT1cuvPZJw",
    titulo: "La Unión Europea: historia y resumen en mapas",
    canal: "Geo Historia",
    vistas: 491622,
    megusta: 8088,
    busqueda: "unión europea explicación",
  },
  ejemplos: [
    {
      enunciado: `Una estudiante española quiere hacer un curso en Italia y luego trabajar en Alemania. ¿Qué derechos de la UE usa?`,
      pasos: [
        "Estudiar en Italia: libre circulación de personas y, quizá, una beca Erasmus+.",
        "Trabajar en Alemania: libre circulación de trabajadores, sin permiso de trabajo.",
        "Viajar sin pasaporte: espacio Schengen.",
        "Atención médica: Tarjeta Sanitaria Europea.",
      ],
      resultado: "Usa la ciudadanía europea y la libre circulación de personas.",
    },
    {
      enunciado: "Explica cómo se aprueba una ley europea (procedimiento legislativo ordinario).",
      pasos: [
        "La Comisión propone la ley.",
        "El Parlamento Europeo la debate y la enmienda.",
        "El Consejo de la UE también la estudia.",
        "Si Parlamento y Consejo se ponen de acuerdo, se aprueba.",
      ],
      resultado: "La Comisión propone; el Parlamento y el Consejo deciden juntos.",
    },
    {
      enunciado: "Calcula: si un producto cuesta 120 € en Francia y 110 € en España, ¿qué facilita el euro?",
      pasos: [
        "Ambos precios están en la misma moneda.",
        "No hay que calcular tipos de cambio ni pagar comisiones.",
        "La diferencia es de 10 €, fácil de ver.",
      ],
      resultado: "El euro permite comparar precios directamente y favorece la competencia.",
    },
    {
      enunciado: "Explica por qué la CECA empezó con el carbón y el acero.",
      pasos: [
        "Eran las materias básicas de la industria y de la fabricación de armas.",
        `Su control en las regiones fronterizas (Ruhr, Sarre, Lorena) había enfrentado a Francia y Alemania.`,
        `Ponerlas bajo una autoridad común impedía que un país se rearmara en secreto contra el otro.`,
        "Además impulsaba la reconstrucción económica.",
      ],
      resultado: `Al unir los recursos de la guerra, la guerra entre Francia y Alemania se volvía «materialmente imposible»: era el primer paso de la integración.`,
    },
    {
      enunciado: `Distingue tres organismos con nombres parecidos: Consejo Europeo, Consejo de la UE y Consejo de Europa.`,
      pasos: [
        `Consejo Europeo: institución de la UE con los jefes de Estado o de Gobierno; marca las grandes líneas.`,
        `Consejo de la UE: institución de la UE con los ministros; aprueba las leyes con el Parlamento.`,
        `Consejo de Europa: organización distinta (1949), con 46 países, en Estrasburgo; defiende los derechos humanos.`,
        "Truco: el Consejo de Europa no es de la UE.",
      ],
      resultado: `Dos son instituciones de la UE (Consejo Europeo y Consejo de la UE); el Consejo de Europa es otra organización.`,
    },
    {
      enunciado: `Analiza la evolución del número de miembros: 6 (1957), 12 (1986), 15 (1995), 25 (2004), 28 (2013), 27 (2020).`,
      pasos: [
        "Crecimiento continuo durante seis décadas.",
        "Saltos importantes: 1986 (España y Portugal) y 2004 (Europa del Este).",
        "La única reducción: 2020, por el Brexit.",
        `Interpretación: la UE atrae por su prosperidad y democracia, pero la integración puede retroceder.`,
      ],
      resultado: `La UE se ha multiplicado por más de cuatro, con la gran ampliación al este en 2004 y la salida del Reino Unido en 2020.`,
    },
  ],
  errores: [
    `Confundir el Consejo Europeo (jefes de Estado o de Gobierno) con el Consejo de Europa (otra organización, en Estrasburgo).`,
    "Pensar que todos los países de la UE usan el euro.",
    "Creer que la Comisión Europea se elige directamente: los ciudadanos eligen el Parlamento.",
    "Pensar que Schengen y la UE son lo mismo: algunos países están en uno y no en el otro.",
    "Situar la entrada de España en 1992: fue el 1 de enero de 1986.",
    `Pensar que la UE es un Estado federal como EE. UU.: los Estados conservan su soberanía y solo comparten la parte que deciden en los tratados.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué propuso la Declaración Schuman (1950)?",
      sol: `Poner en común la producción de carbón y acero de Francia y Alemania para hacer imposible otra guerra entre ellas.`,
    },
    {
      nivel: "básico",
      q: "¿Qué seis países fundaron la CEE en 1957?",
      sol: "Francia, Alemania Occidental, Italia, Bélgica, Países Bajos y Luxemburgo.",
    },
    {
      nivel: "básico",
      q: "Cita las cuatro libertades del mercado único.",
      sol: "Libre circulación de personas, mercancías, servicios y capitales.",
    },
    {
      nivel: "básico",
      q: "¿Qué institución representa directamente a los ciudadanos?",
      sol: "El Parlamento Europeo, elegido por sufragio universal cada cinco años.",
    },
    {
      nivel: "básico",
      q: "¿Qué hace el Banco Central Europeo?",
      sol: `Gestiona el euro y fija los tipos de interés para mantener la inflación baja (cerca del 2 %).`,
    },
    {
      nivel: "básico",
      q: "¿Qué es el espacio Schengen?",
      sol: "La zona sin controles de pasaporte entre los países que lo forman.",
    },
    { nivel: "básico", q: "¿Qué fue el Brexit?", sol: "La salida del Reino Unido de la UE, efectiva en 2020." },
    {
      nivel: "básico",
      q: "¿Quiénes son considerados los padres de Europa?",
      sol: `Políticos como Jean Monnet y Robert Schuman (Francia), Konrad Adenauer (Alemania) y Alcide De Gasperi (Italia), que impulsaron la integración europea tras la Segunda Guerra Mundial.`,
    },
    {
      nivel: "básico",
      q: "¿Cuándo es el Día de Europa y por qué?",
      sol: "El 9 de mayo, aniversario de la declaración Schuman de 1950.",
    },
    {
      nivel: "básico",
      q: "¿Qué es la PAC?",
      sol: `La Política Agraria Común, que ayuda a agricultores y ganaderos, garantiza alimentos y protege el medio rural; es una de las mayores partidas del presupuesto europeo.`,
    },
    { nivel: "básico", q: "¿Cuántos diputados elige España al Parlamento Europeo?", sol: "61." },
    {
      nivel: "básico",
      q: "¿Cuáles son los símbolos de la UE?",
      sol: `La bandera azul con doce estrellas doradas, el himno (Oda a la alegría de Beethoven), el lema «Unida en la diversidad», el euro y el Día de Europa (9 de mayo).`,
    },
    {
      nivel: "medio",
      q: "¿Qué cambió el Tratado de Maastricht?",
      sol: "Creó la Unión Europea (1992), la ciudadanía europea y preparó el euro.",
    },
    {
      nivel: "medio",
      q: "¿Qué fondos europeos han ayudado a España?",
      sol: `Los fondos estructurales y de cohesión (carreteras, trenes, formación) y, recientemente, los fondos Next Generation EU.`,
    },
    {
      nivel: "medio",
      q: "¿Qué objetivo tiene el Pacto Verde Europeo?",
      sol: "Que la UE sea climáticamente neutra en 2050.",
    },
    {
      nivel: "medio",
      q: "¿Por qué se dice que la UE comparte soberanía?",
      sol: `Porque los Estados ceden a las instituciones comunes la capacidad de decidir en algunas materias (comercio, moneda, competencia, agricultura); las leyes europeas les obligan y prevalecen sobre las nacionales en esas materias.`,
    },
    {
      nivel: "medio",
      q: "¿Qué son los criterios de Copenhague?",
      sol: `Las condiciones para entrar en la UE (1993): democracia estable, Estado de derecho, respeto a los derechos humanos y a las minorías; economía de mercado competitiva; y capacidad de asumir las obligaciones de la Unión.`,
    },
    {
      nivel: "medio",
      q: "¿Qué diferencia hay entre un reglamento y una directiva?",
      sol: `El reglamento se aplica directamente y de forma igual en todos los países. La directiva fija un objetivo que cada país debe incorporar a sus leyes nacionales en un plazo, eligiendo cómo hacerlo.`,
    },
    {
      nivel: "medio",
      q: "¿Qué es la política de cohesión y cómo ha beneficiado a España?",
      sol: `La política que reduce las diferencias entre regiones ricas y pobres mediante fondos estructurales y de cohesión. En España financió autovías, alta velocidad, depuradoras, puertos, formación y empresas, sobre todo en las regiones menos desarrolladas.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue la gran ampliación de 2004 y por qué fue simbólica?",
      sol: `La entrada de diez países, la mayoría de Europa del Este (Polonia, Hungría, República Checa, Eslovaquia, Eslovenia, Estonia, Letonia, Lituania), además de Chipre y Malta. Era la reunificación de Europa tras la división de la Guerra Fría.`,
    },
    {
      nivel: "medio",
      q: "¿Qué decide el Banco Central Europeo y por qué es importante?",
      sol: `Fija los tipos de interés y la política monetaria de la eurozona para mantener la inflación en torno al 2 %. Afecta al precio de las hipotecas, los préstamos y el ahorro de todos los ciudadanos de la eurozona.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fue el Tratado de Lisboa?",
      sol: `El tratado firmado en 2007 y en vigor desde 2009 que reformó la UE tras el fracaso de la Constitución Europea: reforzó el Parlamento, creó un presidente estable del Consejo Europeo y un Alto Representante para la política exterior, e hizo vinculante la Carta de los Derechos Fundamentales.`,
    },
    {
      nivel: "medio",
      q: "¿Qué es el fondo Next Generation EU?",
      sol: `Un plan de recuperación aprobado tras la pandemia de 2020, financiado por primera vez con deuda común de la UE, para impulsar la transición verde y digital; España es de sus mayores beneficiarios.`,
    },
    {
      nivel: "avanzado",
      q: `Comenta la frase de la declaración Schuman: «Europa no se hará de una vez ni en una obra de conjunto: se hará gracias a realizaciones concretas, que creen en primer lugar una solidaridad de hecho».`,
      sol: `Clasificación: declaración política de 1950. Idea: la unidad europea debe construirse paso a paso, empezando por proyectos económicos concretos (CECA), que creen intereses comunes y confianza. Contexto: posguerra y reconciliación franco-alemana. Importancia: describe el método de integración gradual que siguió la UE (CECA, CEE, mercado único, euro).`,
    },
    {
      nivel: "avanzado",
      q: "Valora las ventajas e inconvenientes del euro para España.",
      sol: `Ventajas: estabilidad de precios, fin del cambio de moneda, comparación de precios, más comercio e inversión, tipos de interés bajos durante años. Inconvenientes: pérdida de la política monetaria propia (no se puede devaluar), redondeo de precios al principio, y en la crisis de 2010-2012 obligó a ajustes duros. Conclusión razonada.`,
    },
    {
      nivel: "avanzado",
      q: "¿Por qué crees que España tenía tanto interés en entrar en la CEE?",
      sol: `Por razones políticas: consolidar la democracia tras el franquismo y salir del aislamiento; económicas: acceso a un gran mercado, fondos europeos e inversión; y simbólicas: «Europa» representaba modernidad y libertad. La CEE había rechazado a la España de Franco por no ser democrática.`,
    },
    {
      nivel: "avanzado",
      q: "Explica qué es el «déficit democrático» de la UE y propón una mejora.",
      sol: `La sensación de que las decisiones europeas se toman lejos de los ciudadanos, por instituciones que no eligen directamente (Comisión, Consejo), con poca participación en las elecciones europeas. Mejoras posibles: más poder al Parlamento, elección directa del presidente de la Comisión, más información, más uso de la iniciativa ciudadana.`,
    },
    {
      nivel: "avanzado",
      q: "Analiza el Brexit: causas y consecuencias.",
      sol: `Causas: euroescepticismo británico tradicional, rechazo a la inmigración y la libre circulación, deseo de recuperar la soberanía, crisis económicas. Consecuencias: salida en 2020; vuelta de aduanas y controles; menos comercio; problemas con la frontera irlandesa; pérdida de derechos para ciudadanos británicos y europeos; debilitamiento de la UE, aunque esta se mantuvo unida.`,
    },
    {
      nivel: "avanzado",
      q: "¿La Unión Europea es una garantía de paz? Argumenta.",
      sol: `A favor: desde 1950 no ha habido guerras entre sus miembros, ha reconciliado a Francia y Alemania y estabilizado democracias en el sur y el este; recibió el Premio Nobel de la Paz en 2012. Matices: no evitó las guerras de Yugoslavia en los noventa ni la de Ucrania en sus fronteras; su capacidad militar es limitada y depende de la OTAN.`,
    },
    {
      nivel: "avanzado",
      q: "Elabora una línea del tiempo de la integración europea con ocho fechas clave.",
      sol: `1950 declaración Schuman; 1951 CECA; 1957 Tratado de Roma (CEE); 1979 primeras elecciones al Parlamento Europeo; 1986 entrada de España y Portugal; 1992 Tratado de Maastricht (UE); 2002 euro en circulación; 2004 gran ampliación; 2007 Tratado de Lisboa; 2020 Brexit.`,
    },
    {
      nivel: "avanzado",
      q: `Imagina que eres eurodiputado. Propón una ley europea que mejore la vida de los jóvenes y explica cómo se aprobaría.`,
      sol: `Debe contener una propuesta concreta (por ejemplo, ampliar Erasmus+ a la FP, abono de tren europeo juvenil, regulación de redes sociales para menores), sus objetivos y beneficios, y el procedimiento: propuesta de la Comisión, debate y votación en el Parlamento y en el Consejo, y aplicación como reglamento o directiva.`,
    },
    {
      nivel: "avanzado",
      q: `Compara la UE con otra organización regional del mundo (por ejemplo, Mercosur o la Unión Africana).`,
      sol: `La UE es mucho más integrada: tiene mercado único, moneda común, instituciones con poder propio, Parlamento elegido y Tribunal. Mercosur es sobre todo una unión aduanera incompleta entre países sudamericanos; la Unión Africana es una organización política de cooperación con menos competencias. La UE es el ejemplo más avanzado de integración regional.`,
    },
  ],
  quiz: [
    {
      q: "¿Qué tratado fundó la Comunidad Económica Europea en 1957?",
      o: ["Tratado de Maastricht", "Tratado de Versalles", "Tratado de Roma", "Tratado de Lisboa"],
      a: 2,
      e: "Seis países crearon un mercado común sin aranceles entre ellos.",
    },
    {
      q: "¿En qué año entró España en la CEE?",
      o: ["1992", "1975", "1986", "2002"],
      a: 2,
      e: "España y Portugal entraron el 1 de enero de 1986.",
    },
    {
      q: "¿Qué institución eligen directamente los ciudadanos?",
      o: ["La Comisión Europea", "El Parlamento Europeo", "El Banco Central Europeo", "El Consejo Europeo"],
      a: 1,
      e: "Se elige cada cinco años en elecciones europeas.",
    },
    {
      q: "¿Qué país salió de la UE en 2020?",
      o: ["Grecia", "Reino Unido", "Noruega", "Suiza"],
      a: 1,
      e: "El Brexit se decidió en referéndum en 2016 y se hizo efectivo en 2020.",
    },
    {
      q: "¿Cuántos Estados miembros tiene hoy la UE?",
      o: ["12", "35", "27", "50"],
      a: 2,
      e: "Tras la salida del Reino Unido quedan 27.",
    },
    {
      q: "El Parlamento Europeo se elige cada…",
      o: ["2 años", "4 años", "5 años", "6 años"],
      a: 2,
      e: "Las últimas elecciones fueron en 2024.",
    },
    {
      q: "La Comisión Europea…",
      o: ["propone las leyes", "juzga los delitos", "elige al Parlamento", "dirige los ejércitos"],
      a: 0,
      e: "Y vigila que se cumplan.",
    },
    {
      q: "El euro llegó a los bolsillos en…",
      o: ["1999", "2002", "2010", "1986"],
      a: 1,
      e: "El 1 de enero de 2002.",
    },
    {
      q: "El Banco Central Europeo está en…",
      o: ["Fráncfort", "Luxemburgo", "Bruselas", "Madrid"],
      a: 0,
      e: "En Alemania.",
    },
    {
      q: "¿Cuál NO es una de las cuatro libertades?",
      o: [
        "libre circulación de personas",
        "libre circulación de capitales",
        "libre circulación de armas",
        "libre circulación de servicios",
      ],
      a: 2,
      e: "Las cuatro son personas, mercancías, servicios y capitales.",
    },
    {
      q: "¿Qué materias puso en común la CECA?",
      o: ["petróleo y gas", "carbón y acero", "trigo y vino", "oro y plata"],
      a: 1,
      e: "Las materias de la industria de guerra.",
    },
    { q: "La UE nació con el Tratado de…", o: ["Roma", "Maastricht", "Lisboa", "París"], a: 1, e: "En 1992." },
    {
      q: "Los acuerdos de Schengen eliminan…",
      o: ["el euro", "los controles en las fronteras interiores", "el Parlamento", "los aranceles exteriores"],
      a: 1,
      e: "Se puede cruzar sin pasaporte.",
    },
    {
      q: "¿Qué país NO fue fundador de la CEE?",
      o: ["Bélgica", "España", "Italia", "Luxemburgo"],
      a: 1,
      e: "España entró en 1986.",
    },
    {
      q: "La gran ampliación al este fue en…",
      o: ["1986", "1995", "2004", "2013"],
      a: 2,
      e: "Entraron diez países.",
    },
    {
      q: "¿Cuántos países usan el euro en 2026?",
      o: ["12", "19", "21", "27"],
      a: 2,
      e: "Bulgaria fue el último.",
    },
    {
      q: "La Comisión Europea es elegida…",
      o: ["directamente por los ciudadanos", "con la aprobación del Parlamento", "por el BCE", "por sorteo"],
      a: 1,
      e: "El Parlamento elige a su presidente o presidenta.",
    },
    {
      q: "Una directiva europea…",
      o: [
        "se aplica igual sin más",
        "fija un objetivo que cada país incorpora a sus leyes",
        "es una sentencia",
        "es un tratado",
      ],
      a: 1,
      e: "Los reglamentos se aplican directamente.",
    },
    {
      q: "El Tribunal de Justicia de la UE está en…",
      o: ["Bruselas", "Luxemburgo", "Estrasburgo", "La Haya"],
      a: 1,
      e: "Interpreta el Derecho de la UE.",
    },
    {
      q: "El himno de la UE es…",
      o: ["La Marsellesa", "la Oda a la alegría", "el Danubio azul", "el Bolero"],
      a: 1,
      e: "De la Novena Sinfonía de Beethoven.",
    },
  ],
  examen: [
    {
      q: "¿Qué hizo el Tratado de Maastricht (1992)?",
      o: ["Crear la UE y la ciudadanía europea", "Crear la CECA", "Sacar al Reino Unido", "Fundar la CEE"],
      a: 0,
      e: "También preparó la moneda única.",
    },
    {
      q: "La Comisión Europea…",
      o: [
        "es elegida por los ciudadanos",
        "propone las leyes y vela por su cumplimiento",
        "dirige el Banco Central",
        "juzga los delitos",
      ],
      a: 1,
      e: "Es el «motor» de la UE; las leyes las aprueban el Parlamento y el Consejo.",
    },
    {
      q: "¿Qué permite el espacio Schengen?",
      o: [
        "Usar el euro",
        "Trabajar sin contrato",
        "Cruzar las fronteras interiores sin controles",
        "Votar al Parlamento",
      ],
      a: 2,
      e: "Suprime los controles de pasaporte entre los países que lo forman.",
    },
    { q: "La CECA se creó en…", o: ["1945", "1951", "1957", "1986"], a: 1, e: "Con el Tratado de París." },
    {
      q: "¿Qué tratado reforzó el Parlamento en 2007?",
      o: ["Maastricht", "Lisboa", "Roma", "Niza"],
      a: 1,
      e: "En vigor desde 2009.",
    },
    {
      q: "El Consejo de Europa…",
      o: [
        "es una institución de la UE",
        "es otra organización que defiende los derechos humanos",
        "reúne a los ministros de la UE",
        "gestiona el euro",
      ],
      a: 1,
      e: "Tiene sede en Estrasburgo.",
    },
    {
      q: "La política que reduce las diferencias entre regiones es la…",
      o: ["PAC", "política de cohesión", "política monetaria", "política exterior"],
      a: 1,
      e: "Mediante fondos estructurales.",
    },
    {
      q: "¿Qué objetivo fija el Pacto Verde Europeo?",
      o: ["salir del euro", "neutralidad climática en 2050", "ampliar a 40 países", "suprimir la PAC"],
      a: 1,
      e: "Emisiones netas cero.",
    },
  ],
  feynman: [
    "Por qué la integración europea empezó con el carbón y el acero",
    "La diferencia entre CEE y UE",
    "Qué hace cada institución europea",
    "Ventajas y compromisos de ser miembro para España",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: UNIÓN EUROPEA">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--pen)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">UNIÓN EUROPEA</text>
      <rect x="5" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--muted)">Origen</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">CECA 1951 · Roma 1957</text><rect x="425" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--sun)">UE</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">Maastricht · euro · Schengen</text><rect x="5" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--pen)">Instituciones</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">Parlamento · Consejo · Comisión</text><rect x="425" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--red)">España</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">1986 · fondos · Erasmus</text>
    </g></svg>`,
  tarjetas: [
    ["CECA", "Comunidad Europea del Carbón y del Acero (1951), primer paso de la integración."],
    ["Tratado de Roma", "1957, crea la CEE."],
    ["Tratado de Maastricht", "1992, crea la Unión Europea."],
    ["Euro en circulación", "Desde el 1 de enero de 2002."],
    ["Día de Europa", "9 de mayo."],
    ["Mercado único", "Espacio sin aranceles con cuatro libertades de circulación."],
    ["Eurozona", "Países de la UE que usan el euro."],
    ["Ciudadanía europea", "Derechos de todos los nacionales de un país de la UE."],
    ["Declaración Schuman", "9 de mayo de 1950: propuesta de poner en común el carbón y el acero."],
    ["Criterios de Copenhague", "Condiciones democráticas y económicas para entrar en la UE."],
    ["Política de cohesión", "Fondos para reducir diferencias entre regiones."],
    ["Brexit", "Salida del Reino Unido de la UE en 2020."],
  ],
  glosario: [
    ["Integración europea", "Proceso de unión económica y política de los países de Europa."],
    ["CECA", "Comunidad Europea del Carbón y del Acero (1951)."],
    ["CEE", "Comunidad Económica Europea, creada en 1957."],
    ["Mercado común", "Zona sin aranceles internos y con arancel exterior común."],
    ["Mercado único", "Espacio con libre circulación de personas, mercancías, servicios y capitales."],
    ["Espacio Schengen", "Zona sin controles en las fronteras interiores."],
    ["Eurozona", "Países que usan el euro como moneda."],
    ["Criterios de convergencia", "Requisitos económicos para adoptar el euro."],
    ["Ampliación", "Entrada de nuevos países en la Unión."],
    ["Soberanía compartida", "Cesión de competencias de los Estados a las instituciones comunes."],
    ["Reglamento", "Norma europea de aplicación directa en todos los países."],
    ["Directiva", "Norma europea que cada país incorpora a su legislación."],
    ["PAC", "Política Agraria Común."],
    ["Fondos estructurales", "Ayudas europeas para el desarrollo de las regiones."],
    ["Ciudadanía europea", "Conjunto de derechos de los nacionales de los países de la UE."],
    ["Euroescepticismo", "Rechazo o desconfianza hacia la integración europea."],
    ["Brexit", "Salida del Reino Unido de la UE."],
  ],
  situacion: {
    titulo: "Simulación del Parlamento Europeo",
    reto: `La oficina del Parlamento Europeo en España invita a centros escolares a simular una sesión parlamentaria. Vuestra clase debatirá y votará una propuesta de ley sobre un tema que os afecte directamente.`,
    pasos: [
      `Elegid un tema: plásticos de un solo uso, uso de móviles en menores, Erasmus para FP o abono de transporte juvenil.`,
      `Repartid papeles: Comisión (que redacta la propuesta), grupos políticos del Parlamento y representantes del Consejo de distintos países.`,
      "La Comisión presenta una propuesta de ley de cinco artículos.",
      "Los grupos preparan enmiendas y discursos de dos minutos, con datos.",
      "Celebrad el debate y la votación siguiendo el procedimiento legislativo ordinario.",
      "Redactad un comunicado de prensa con el resultado.",
    ],
    producto: "La ley aprobada (o rechazada), las actas del debate y un comunicado de prensa.",
    evaluacion: [
      "Comprensión del funcionamiento de las instituciones europeas.",
      "Calidad de la argumentación y uso de datos.",
      "Respeto de las normas del debate y capacidad de negociar.",
      "Claridad del comunicado final.",
    ],
  },
  familias: [
    `Buscad juntos un cartel de «financiado por la Unión Europea» en una obra o edificio cercano.`,
    "Mirad las caras nacionales de vuestras monedas de euro y averiguad de qué país vienen.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: el proceso de construcción europea, sus instituciones y la ciudadanía europea (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      "Simulación de una sesión del Parlamento Europeo sobre una propuesta real.",
      "Mapa de las ampliaciones con colores por año de entrada.",
      "Investigar un proyecto local financiado con fondos FEDER.",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    {
      t: "Unión Europea: historia, portal oficial european-union.europa.eu",
      url: "https://european-union.europa.eu/principles-countries-history/history-eu_es",
    },
  ],
  revisado: "2026-11-13",
};
