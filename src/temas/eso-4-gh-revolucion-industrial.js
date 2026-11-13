// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "La Revolución Industrial",
  minutos: 110,
  objetivos: [
    "Explicar por qué la industrialización empezó en Gran Bretaña",
    "Distinguir la primera y la segunda Revolución Industrial",
    "Analizar sus consecuencias sociales: el movimiento obrero",
    "Explicar las consecuencias demográficas y urbanas de la industrialización",
    "Distinguir las ideologías del movimiento obrero",
  ],
  claves: ["máquina de vapor", "fábrica", "burguesía", "proletariado", "sindicato", "capitalismo"],
  pregunta: {
    texto: `En 1750 casi todo se hacía a mano y la mayoría de la gente vivía en el campo. Cien años después, millones de personas trabajaban en fábricas de ciudades llenas de humo. ¿Qué cambió?`,
    respuesta: `Llegaron las <mark>máquinas movidas por energía</mark> (primero el vapor) y la producción pasó del taller a la fábrica. Fue el mayor cambio en la forma de vivir desde la invención de la agricultura: la <b>Revolución Industrial</b>, que empezó en Gran Bretaña hacia 1760.`,
  },
  lectura: {
    titulo: "Un día en la vida de Ellen, 1832",
    html: `<p>Ellen tiene once años y vive en Manchester. Se levanta a las cinco de la mañana, cuando todavía es de noche, y camina veinte minutos hasta la hilatura de algodón. Allí, entre el ruido ensordecedor de cientos de husos, su trabajo es meterse debajo de las máquinas en marcha para recoger la pelusa y anudar los hilos rotos. Si se duerme, el capataz la despierta con una correa. Sale a las siete de la tarde. Ha ganado lo justo para pagar un trozo de pan y la parte del alquiler de una habitación sin ventana que comparte con otras seis personas.</p><p>Ese mismo año, en el Parlamento británico, una comisión escucha testimonios como el de Ellen. Lo que cuentan escandaliza a parte del país y obliga a aprobar, en 1833, la primera ley que limita el trabajo de los niños.</p><p>La historia de Ellen es la otra cara de una transformación que trajo trenes, luz eléctrica, ropa barata y, con el tiempo, una vida más larga para casi todos. En este tema verás <b>cómo y por qué cambió la forma de producir</b>, quién ganó y quién perdió con ese cambio y cómo los trabajadores lucharon por derechos que hoy damos por supuestos, como la jornada de ocho horas o la escuela obligatoria.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué fue la Revolución Industrial y por qué empezó en Gran Bretaña</h3><p>Llamamos <b>Revolución Industrial</b> al paso de una economía agraria y artesanal a otra dominada por la <mark>industria mecanizada</mark>, en la que las máquinas movidas por energía sustituyen al trabajo manual. Empezó en Gran Bretaña hacia <b>1760</b> y se extendió por Europa y Estados Unidos a lo largo del siglo XIX. Es «revolución» no por ser rápida, sino por lo profundo del cambio: transformó el trabajo, las ciudades, la familia y la relación entre las personas y la naturaleza.</p><p>¿Por qué allí? Se juntaron varias condiciones. Una <b>revolución agrícola</b> producía más alimentos con menos campesinos. La <b>población crecía</b> y ofrecía mano de obra y consumidores. El país tenía mucho <b>carbón y hierro</b>, a menudo cerca de ríos y puertos. El <b>comercio colonial</b> había acumulado capital dispuesto a invertirse, y su imperio le daba materias primas (algodón) y mercados. Por último, desde 1688 tenía una monarquía parlamentaria que protegía la propiedad, había abolido los gremios y favorecía a una burguesía emprendedora. Ningún factor basta solo: lo decisivo fue su combinación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cinco factores que confluyen en la industrialización británica">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g font-family="Atkinson Hyperlegible, sans-serif" font-size="12" font-weight="700" text-anchor="middle">
          <path d="M50 34 L 130 98" stroke="var(--line)" stroke-width="2.5"/><rect x="4" y="20" width="92" height="26" rx="13" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="50" y="38" fill="var(--ink)">agricultura</text><path d="M210 34 L 130 98" stroke="var(--line)" stroke-width="2.5"/><rect x="164" y="20" width="92" height="26" rx="13" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="210" y="38" fill="var(--ink)">población</text><path d="M54 150 L 130 98" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="136" width="92" height="26" rx="13" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="54" y="154" fill="var(--ink)">carbón y hierro</text><path d="M206 150 L 130 98" stroke="var(--line)" stroke-width="2.5"/><rect x="160" y="136" width="92" height="26" rx="13" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="206" y="154" fill="var(--ink)">capital</text><path d="M130 24 L 130 98" stroke="var(--line)" stroke-width="2.5"/><rect x="84" y="10" width="92" height="26" rx="13" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="130" y="28" fill="var(--ink)">burguesía</text>
          <circle cx="130" cy="98" r="30" fill="var(--soc, #c2410c)"/>
          <text x="130" y="96" fill="#fff" font-size="11">Revolución</text><text x="130" y="110" fill="#fff" font-size="11">Industrial</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>1.2 La revolución agrícola</h3><p>Antes que las fábricas cambió el campo. En Gran Bretaña se cercaron las tierras comunales mediante las <mark>enclosures</mark>, leyes que permitieron a los grandes propietarios vallar y concentrar parcelas. Las tierras cercadas se explotaron con criterios de mercado: se sustituyó el barbecho por la <b>rotación de cultivos</b> (el sistema Norfolk de cuatro hojas: trigo, nabos, cebada y trébol), que alimentaba al ganado y devolvía el nitrógeno al suelo. Se seleccionaron razas de ganado y se difundieron máquinas como la sembradora de Jethro Tull.</p><p>Las consecuencias fueron enormes. Aumentó la producción de alimentos y bajaron los precios. Muchos pequeños campesinos, que dependían de los pastos comunales, perdieron su medio de vida y tuvieron que vender su trabajo por un salario. Así la agricultura proporcionó a la industria tres cosas: <b>alimentos</b> para una población urbana creciente, <b>mano de obra</b> que emigraba a las ciudades y <b>capital</b> que los terratenientes enriquecidos invertían en minas, canales o fábricas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="De las enclosures a la fábrica: cercamiento de tierras y rotación de cultivos → más alimentos y precios más bajos → campesinos sin tierra emigran a la ciudad → mano de obra barata para las fábricas"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">De las enclosures a la fábrica</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="39.9" text-anchor="middle" font-size="10.5" >cercamiento de tierras y</text><text x="130" y="52.0" text-anchor="middle" font-size="10.5" >rotación de cultivos</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="78.4" text-anchor="middle" font-size="10.5" >más alimentos y precios más</text><text x="130" y="90.5" text-anchor="middle" font-size="10.5" >bajos</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="116.9" text-anchor="middle" font-size="10.5" >campesinos sin tierra emigran a</text><text x="130" y="129.0" text-anchor="middle" font-size="10.5" >la ciudad</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="155.4" text-anchor="middle" font-size="10.5" >mano de obra barata para las</text><text x="130" y="167.5" text-anchor="middle" font-size="10.5" >fábricas</text></g></svg>`,
    },
    {
      html: `<h3>1.3 La revolución demográfica</h3><p>Entre 1750 y 1850 la población británica casi se triplicó: de unos 6 millones a unos 17. Fue el inicio de la <mark>transición demográfica</mark>, el proceso por el que una sociedad pasa de tener natalidad y mortalidad altas a tenerlas bajas.</p><p>En el <b>régimen demográfico antiguo</b> nacían muchos niños, pero morían casi tantas personas por hambre, epidemias y guerras, de modo que la población apenas crecía. Con la revolución agrícola mejoró la alimentación; después llegaron avances higiénicos y médicos, como la vacuna contra la viruela de Edward Jenner (1796). La <b>mortalidad bajó</b>, sobre todo la infantil, mientras la natalidad siguió alta durante décadas. La diferencia entre ambas, el <b>crecimiento natural</b>, se disparó.</p><p>Más población significaba más brazos para trabajar y más compradores para los productos de las fábricas. También explica la gran emigración europea del siglo XIX: entre 1840 y 1914 unos 50 millones de europeos se marcharon a América y Oceanía en busca de oportunidades.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Gráfico: Población de Gran Bretaña (millones). 1700 5, 1750 6, 1800 9, 1850 17, 1900 30"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Población de Gran Bretaña</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">(millones)</text><path d="M16 146 H 244" stroke="var(--ink)" stroke-width="2"/><rect x="26.6" y="132.3" width="30.8" height="13.7" rx="3" fill="var(--pen)"/><text x="42" y="128.7" text-anchor="middle" font-size="9.5" font-weight="700">5</text><text x="42" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1700</text><rect x="70.6" y="129.6" width="30.8" height="16.4" rx="3" fill="var(--red)"/><text x="86" y="125.9" text-anchor="middle" font-size="9.5" font-weight="700">6</text><text x="86" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1750</text><rect x="114.6" y="121.4" width="30.8" height="24.6" rx="3" fill="var(--leaf)"/><text x="130" y="117.7" text-anchor="middle" font-size="9.5" font-weight="700">9</text><text x="130" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1800</text><rect x="158.6" y="99.5" width="30.8" height="46.5" rx="3" fill="var(--sun)"/><text x="174" y="95.9" text-anchor="middle" font-size="9.5" font-weight="700">17</text><text x="174" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1850</text><rect x="202.6" y="64.0" width="30.8" height="82.0" rx="3" fill="var(--inf)"/><text x="218" y="60.3" text-anchor="middle" font-size="9.5" font-weight="700">30</text><text x="218" y="163.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">1900</text></g></svg>`,
    },
    {
      html: `<h3>1.4 La máquina de vapor y el sistema de fábrica</h3><p>El símbolo de la época es la <mark>máquina de vapor</mark>. Thomas Newcomen había construido una para achicar agua de las minas, pero fue <b>James Watt</b> quien la perfeccionó en <b>1769</b>, añadiendo un condensador separado que ahorraba mucho combustible. Al quemar carbón, el vapor movía un pistón y, con él, telares, bombas, martillos y, más tarde, locomotoras y barcos. Por primera vez la producción no dependía de la fuerza humana, de los animales, del viento o de un río.</p><p>La máquina cambió también el lugar de trabajo. Antes se trabajaba en el <b>taller artesano</b> o en casa (el <i>domestic system</i>), con herramientas propias y a un ritmo flexible. Ahora el trabajo se concentró en la <b>fábrica</b>: un edificio donde el dueño reunía máquinas y trabajadores asalariados, con un horario fijo marcado por la sirena y una <mark>división del trabajo</mark> en la que cada obrero repetía una sola tarea. Se producía mucho más y más barato, pero el trabajador perdía el control sobre su tiempo y su oficio.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Fábrica con chimeneas humeantes y una locomotora de vapor">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 120 V 80 L 60 100 V 80 L 100 100 V 80 L 140 100 V 120 Z" fill="var(--muted)" opacity=".6"/>
        <rect x="104" y="40" width="14" height="60" fill="var(--muted)"/><rect x="126" y="54" width="12" height="46" fill="var(--muted)"/>
        <circle cx="112" cy="30" r="10" fill="var(--line)"/><circle cx="124" cy="18" r="12" fill="var(--line)"/><circle cx="134" cy="42" r="8" fill="var(--line)"/>
        <rect x="150" y="104" width="70" height="26" rx="4" fill="var(--ink)"/><rect x="196" y="84" width="24" height="22" fill="var(--ink)"/><rect x="156" y="88" width="10" height="16" fill="var(--ink)"/>
        <circle cx="166" cy="136" r="10" fill="var(--red)"/><circle cx="204" cy="136" r="10" fill="var(--red)"/>
        <path d="M10 148 H 250" stroke="var(--ink)" stroke-width="3"/>
        <text x="130" y="170" text-anchor="middle" font-size="12" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">vapor + carbón = fábrica y ferrocarril</text>
      </svg>`,
    },
    {
      html: `<h3>1.5 Algodón, hierro y ferrocarril</h3><p>La primera industria moderna fue la <b>textil del algodón</b>. Una cadena de inventos se fue empujando: la lanzadera volante (1733) aceleró el tejido; faltó hilo y aparecieron la <i>spinning jenny</i> (1764) y la <i>mule</i>, que hilaban decenas de husos a la vez; después el telar mecánico (1785) tejió a gran velocidad. El algodón de las plantaciones de América se convertía en tejidos baratos que se vendían en todo el mundo.</p><p>La <b>siderurgia</b> empezó a usar <mark>carbón de coque</mark> en lugar de leña, y el hierro barato permitió fabricar máquinas, puentes y raíles. El <b>ferrocarril</b> unió ambos sectores: la línea Liverpool-Manchester (1830) demostró que el tren de vapor era rápido y rentable. En pocas décadas el tren y el barco de vapor redujeron el tiempo y el coste del transporte, unificaron los mercados nacionales y crearon una gigantesca demanda de carbón y hierro. Por eso se dice que fue el «motor del motor». En España, la primera línea peninsular fue Barcelona-Mataró (1848).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: inventos de la primera industrialización"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1733</text><text x="47.35" y="45.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">lanzadera</text><text x="47.35" y="56.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">volante</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1764</text><text x="79" y="153.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">spinning jenny</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1769</text><text x="130" y="51.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">vapor de Watt</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1785</text><text x="181" y="153.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">telar mecánico</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1830</text><text x="212.65" y="45.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">tren</text><text x="212.65" y="56.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">Liverpool-Manchester</text></g></svg>`,
    },
    {
      html: `<h3>1.6 La segunda Revolución Industrial (1870-1914)</h3><p>Hacia 1870 empezó una segunda fase, más ligada a la <b>ciencia</b> y los laboratorios. Aparecieron nuevas <mark>fuentes de energía</mark>: la <b>electricidad</b>, que llegaba a fábricas y hogares por cables, y el <b>petróleo</b>, que alimentaba el motor de explosión. Surgieron nuevos sectores: la química (tintes, fertilizantes, explosivos, medicamentos), el acero barato gracias al convertidor Bessemer, el automóvil y la aviación.</p><p>Los inventos cambiaron la vida diaria: la bombilla de Edison (1879), el teléfono de Bell (1876), la radio, el cine de los hermanos Lumière (1895). La industria dejó de ser casi exclusivamente británica y se extendió con fuerza por <b>Alemania, Estados Unidos y Japón</b>, que pronto superaron a Gran Bretaña en producción de acero o química. La competencia por materias primas y mercados entre estas potencias será una de las causas del imperialismo y de la Primera Guerra Mundial, como verás en el tema siguiente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación: primera revolución con carbón y vapor, segunda con petróleo y electricidad">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle">
          <rect x="14" y="20" width="110" height="140" rx="12" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/>
          <text x="69" y="44" font-weight="700" font-size="14" fill="var(--ink)">1ª · 1760</text>
          <text x="69" y="76" font-size="13" fill="var(--ink)">carbón</text><text x="69" y="98" font-size="13" fill="var(--ink)">vapor</text><text x="69" y="120" font-size="13" fill="var(--ink)">textil, hierro</text><text x="69" y="142" font-size="13" fill="var(--ink)">ferrocarril</text>
          <rect x="136" y="20" width="110" height="140" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="3"/>
          <text x="191" y="44" font-weight="700" font-size="14" fill="var(--ink)">2ª · 1870</text>
          <text x="191" y="76" font-size="13" fill="var(--ink)">petróleo</text><text x="191" y="98" font-size="13" fill="var(--ink)">electricidad</text><text x="191" y="120" font-size="13" fill="var(--ink)">acero, química</text><text x="191" y="142" font-size="13" fill="var(--ink)">automóvil</text>
        </g>
      </svg>`,
      video: {
        id: "fE9qiImGzJk",
        titulo: "La segunda Revolución Industrial: resumen en 5 minutos",
        canal: "Clases Particulares en Ávila",
        vistas: 609140,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.7 El capitalismo industrial</h3><p>La industria necesitaba mucho dinero, y se organizó según el <mark>capitalismo</mark>: un sistema basado en la propiedad privada de los medios de producción, la búsqueda del beneficio, el trabajo asalariado y el libre mercado, donde los precios dependen de la oferta y la demanda. Su gran teórico fue <b>Adam Smith</b> (<i>La riqueza de las naciones</i>, 1776), que defendía que el Estado interviniera lo menos posible en la economía (<i>laissez faire</i>).</p><p>Surgieron nuevas formas de empresa. En la <b>sociedad anónima</b> el capital se divide en acciones que se compran y venden en la <b>Bolsa</b>, y los socios solo arriesgan lo que han invertido. Los grandes <b>bancos</b> prestaban a las empresas y participaban en ellas. Para reducir la competencia, las empresas se unieron en <b>cárteles</b> (acuerdos de precios), <b>trusts</b> (fusiones) y <b>holdings</b> (una sociedad que controla a otras), y aparecieron los monopolios. Henry Ford aplicó la <b>cadena de montaje</b> (1913): el coche avanzaba por una cinta y cada obrero hacía una sola tarea, de modo que el Modelo T se abarató y lo pudieron comprar sus propios trabajadores. El sistema producía riqueza, pero también sufría <b>crisis cíclicas</b> de sobreproducción y paro.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Formas de concentración empresarial: Sociedad anónima, Cártel, Trust, Holding"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Formas de concentración empresarial</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Sociedad anónima</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >capital dividido</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >en acciones</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Cártel</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >empresas pactan</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >precios y mercados</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Trust</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >varias empresas se</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >fusionan en una</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Holding</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >una sociedad</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >controla a otras</text></g></svg>`,
    },
    {
      html: `<h3>1.8 Una nueva sociedad de clases</h3><p>La sociedad estamental del Antiguo Régimen, basada en el nacimiento y en privilegios legales, dio paso a una <mark>sociedad de clases</mark>. En teoría todos eran iguales ante la ley; lo que separaba a unos de otros era la <b>riqueza</b>, y era posible, aunque difícil, cambiar de clase.</p><p>Arriba estaba la <b>alta burguesía</b>: dueños de fábricas, bancos, minas y ferrocarriles, que a menudo se unían por matrimonio con la vieja aristocracia. En medio creció una <b>clase media</b> de comerciantes, funcionarios, profesionales liberales (médicos, abogados, maestros) y empleados. Abajo estaba el <mark>proletariado</mark>, los obreros, que solo poseían su fuerza de trabajo y la vendían por un salario; junto a ellos seguían existiendo millones de campesinos. Los valores de la burguesía, como el ahorro, el esfuerzo, la familia y la respetabilidad, se convirtieron en el modelo social. Las mujeres burguesas quedaban relegadas al hogar, mientras las obreras trabajaban en fábricas y en el servicio doméstico cobrando la mitad que los hombres.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide social: burguesía arriba, clases medias, proletariado en la base">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M130 20 L 172 70 H 88 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M88 70 H 172 L 204 108 H 56 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M56 108 H 204 L 240 160 H 20 Z" fill="var(--muted)" opacity=".5" stroke="var(--ink)" stroke-width="2"/>
        <g font-family="Atkinson Hyperlegible, sans-serif" font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle"><text x="130" y="60">burguesía</text><text x="130" y="94">clases medias</text><text x="130" y="140">proletariado</text></g>
      </svg>`,
    },
    {
      html: `<h3>1.9 Las ciudades industriales y las condiciones de vida</h3><p>Las ciudades crecieron a un ritmo nunca visto: Manchester pasó de unos 25 000 habitantes en 1773 a más de 300 000 en 1851. Era la <mark>urbanización</mark>. Crecieron sin planificación. Los obreros vivían en barrios pegados a las fábricas, en casas pequeñas y húmedas, sin agua corriente ni alcantarillado, respirando humo constante: el cólera, el tifus y la tuberculosis se extendían con facilidad, y la esperanza de vida en los barrios obreros no llegaba a los 20 años.</p><p>En las fábricas las jornadas eran de 12 a 16 horas, seis días a la semana, sin vacaciones. Trabajaban también mujeres y <b>niños</b> desde los seis o siete años, porque cobraban menos y sus manos pequeñas servían para ciertas máquinas. No había protección ante accidentes, enfermedad, paro o vejez: quien no podía trabajar dependía de la caridad. La burguesía, en cambio, se instaló en barrios nuevos, los <b>ensanches</b>, con calles anchas, alumbrado y servicios. En la segunda mitad del siglo, las ciudades derribaron sus murallas, construyeron alcantarillado y abastecimiento de agua, y la salud mejoró.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos ciudades en una: Barrio obrero frente a Ensanche burgués"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Dos ciudades en una</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Barrio obrero</text><text x="67" y="66.6" text-anchor="middle" font-size="9.5" >casas pequeñas y</text><text x="67" y="77.5" text-anchor="middle" font-size="9.5" >húmedas</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >sin agua ni cloacas</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >humo y epidemias</text><text x="67" y="155.1" text-anchor="middle" font-size="9.5" >vida media &lt; 20</text><text x="67" y="166.0" text-anchor="middle" font-size="9.5" >años</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Ensanche burgués</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >calles anchas</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >agua y alumbrado</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >parques y servicios</text><text x="193" y="155.1" text-anchor="middle" font-size="9.5" >vida media &gt; 35</text><text x="193" y="166.0" text-anchor="middle" font-size="9.5" >años</text></g></svg>`,
      video: {
        id: "gwYZpUi3EkQ",
        titulo: "El nacimiento del movimiento obrero",
        canal: "Clases Particulares en Ávila",
        vistas: 322411,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.10 El nacimiento del movimiento obrero</h3><p>Los trabajadores se organizaron para mejorar sus condiciones: es el <mark>movimiento obrero</mark>. Su primera reacción fue el <b>ludismo</b> (hacia 1811), la destrucción de máquinas, a las que culpaban del paro y de los salarios bajos. Pronto comprendieron que el problema no eran las máquinas, sino cómo se repartían sus beneficios.</p><p>Entonces crearon <b>sociedades de socorro mutuo</b>, que ayudaban a los socios enfermos o en paro, y <b>sindicatos</b> (en Gran Bretaña, las <i>trade unions</i>, legales desde 1824), que negociaban salarios y usaban la <b>huelga</b> como arma. El <b>cartismo</b> británico (1838-1848) reclamó derechos políticos, como el sufragio universal masculino, con millones de firmas. En 1864 se fundó en Londres la <b>Asociación Internacional de Trabajadores</b> (Primera Internacional), porque los obreros de todos los países compartían problemas. El 1 de mayo recuerda a los obreros de Chicago condenados en 1886 por luchar por la jornada de ocho horas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea de tiempo del movimiento obrero: ludismo, sindicatos, Manifiesto comunista, Primera Internacional">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M20 90 H 240" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="34" cy="90" r="7" fill="var(--red)"/><text x="34" y="66" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1811</text><text x="34" y="48" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">ludismo</text><circle cx="94" cy="90" r="7" fill="var(--red)"/><text x="94" y="128" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1824</text><text x="94" y="146" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">sindicatos</text><circle cx="154" cy="90" r="7" fill="var(--red)"/><text x="154" y="66" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1848</text><text x="154" y="48" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">Manifiesto</text><circle cx="214" cy="90" r="7" fill="var(--red)"/><text x="214" y="128" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" font-family="Baloo 2, sans-serif">1864</text><text x="214" y="146" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">1ª Internac.</text>
      </svg>`,
    },
    {
      html: `<h3>1.11 Socialismo, anarquismo y sindicatos</h3><p>Dentro del movimiento obrero surgieron dos grandes ideologías que querían acabar con el capitalismo, pero por caminos distintos:</p><table class="tb"><thead><tr><th></th><th>Socialismo marxista</th><th>Anarquismo</th></tr></thead><tbody><tr><td>Autores</td><td>Marx y Engels (<i>Manifiesto comunista</i>, 1848)</td><td>Bakunin, Kropotkin</td></tr><tr><td>Objetivo</td><td>sociedad sin clases</td><td>sociedad sin Estado ni autoridad</td></tr><tr><td>Medios</td><td>partido obrero, conquistar el poder político</td><td>acción directa, huelga general, no votar</td></tr><tr><td>En España</td><td>PSOE (1879) y UGT (1888)</td><td>CNT (1910)</td></tr></tbody></table><p>Para Marx, la historia es una lucha de clases: la burguesía explota al proletariado quedándose con la <b>plusvalía</b>, el valor que el obrero produce por encima de su salario. Tras una revolución, los obreros tomarían el Estado para construir una sociedad comunista. Los anarquistas rechazaban cualquier Estado, también uno obrero. Ambas corrientes se separaron en 1872. Gracias a la presión obrera se consiguieron poco a poco la prohibición del trabajo infantil, la jornada de ocho horas y los primeros seguros sociales, que en Alemania aprobó Bismarck en la década de 1880.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos caminos contra el capitalismo: Socialismo frente a Anarquismo"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Dos caminos contra el capitalismo</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Socialismo</text><text x="67" y="72.1" text-anchor="middle" font-size="9.5" >partido obrero</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >tomar el Estado</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >sociedad sin clases</text><text x="67" y="160.6" text-anchor="middle" font-size="9.5" >PSOE y UGT</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Anarquismo</text><text x="193" y="72.1" text-anchor="middle" font-size="9.5" >acción directa</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >abolir el Estado</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >sin autoridad</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >CNT</text></g></svg>`,
      video: {
        id: "-vHX1DEdIW0",
        titulo: "¿Por qué surgieron los movimientos obreros? Socialismo y anarquismo",
        canal: "La cuna de Halicarnaso",
        vistas: 256227,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.12 La industrialización en España y su herencia</h3><p>España se industrializó <mark>tarde y de forma desigual</mark>. Le faltaban capitales, un mercado interior con capacidad de compra (la mayoría eran campesinos pobres) y buen carbón, y las guerras del siglo XIX frenaron la inversión. La industria se concentró en pocas zonas: la <b>textil del algodón en Cataluña</b>, con colonias industriales a orillas de los ríos; la <b>siderurgia en el País Vasco</b>, que exportaba hierro a Gran Bretaña y recibía carbón a cambio; y la <b>minería</b> del carbón en Asturias y del plomo, cobre y mercurio en Andalucía y Murcia, a menudo explotada por empresas extranjeras. El ferrocarril se construyó sobre todo con capital francés, en forma radial desde Madrid.</p><p>La herencia de la Revolución Industrial llega hasta hoy. Vivimos en sociedades urbanas, consumimos productos fabricados en serie y dependemos de la energía. También heredamos problemas: la quema de carbón y petróleo inició el aumento de CO₂ responsable del <b>cambio climático</b>. Muchos historiadores hablan hoy de una tercera y una cuarta revolución industrial, la de la informática y la de la inteligencia artificial y la robótica, que de nuevo transforman el trabajo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Focos industriales de España en el siglo XIX: Cataluña, País Vasco, Asturias, Andalucía y Murcia"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.3" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Focos industriales de España en el</text><text x="130" y="34.1" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">siglo XIX</text><rect x="10.0" y="42.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="60.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Cataluña</text><text x="68" y="86.0" text-anchor="middle" font-size="10" >textil del algodón</text><rect x="134.0" y="42.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="60.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">País Vasco</text><text x="192" y="80.3" text-anchor="middle" font-size="10" >siderurgia y</text><text x="192" y="91.8" text-anchor="middle" font-size="10" >hierro</text><rect x="10.0" y="110.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="128.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Asturias</text><text x="68" y="154.0" text-anchor="middle" font-size="10" >minas de carbón</text><rect x="134.0" y="110.0" width="116.0" height="60.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="128.5" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Andalucía y</text><text x="192" y="141.2" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Murcia</text><text x="192" y="154.8" text-anchor="middle" font-size="10" >plomo, cobre,</text><text x="192" y="166.3" text-anchor="middle" font-size="10" >mercurio</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Línea del tiempo de la industrialización",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Línea del tiempo de 1760 a 1913 con los hitos principales">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      <rect x="40" y="92" width="330" height="16" rx="8" fill="var(--muted)" opacity=".45"/>
      <rect x="400" y="92" width="240" height="16" rx="8" fill="var(--sun)" opacity=".8"/>
      <g font-family="Atkinson Hyperlegible, sans-serif" font-size="13" font-weight="700" fill="var(--ink)"><text x="40" y="136">1ª Revolución Industrial</text><text x="400" y="136">2ª Revolución Industrial</text></g>
      <path d="M40 100 V 150" stroke="var(--ink)" stroke-width="1.5"/><text x="40" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1760</text><text x="20" y="186" text-anchor="start" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">inicio en Gran Bretaña</text><path d="M120 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><text x="120" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1769</text><text x="120" y="56" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">máquina de Watt</text><path d="M225 100 V 150" stroke="var(--ink)" stroke-width="1.5"/><text x="225" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1830</text><text x="225" y="186" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">tren Liverpool-Manchester</text><path d="M300 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><text x="300" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1848</text><text x="300" y="56" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">España: Barcelona-Mataró</text><path d="M400 100 V 150" stroke="var(--ink)" stroke-width="1.5"/><text x="400" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1870</text><text x="400" y="186" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">petróleo y electricidad</text><path d="M500 100 V 62" stroke="var(--ink)" stroke-width="1.5"/><text x="500" y="40" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1879</text><text x="500" y="56" text-anchor="middle" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">bombilla de Edison</text><path d="M610 100 V 150" stroke="var(--ink)" stroke-width="1.5"/><text x="610" y="170" text-anchor="middle" font-size="15" font-weight="700" fill="var(--pen)" font-family="Baloo 2, sans-serif">1913</text><text x="630" y="186" text-anchor="end" font-size="11" fill="var(--muted)" font-family="Atkinson Hyperlegible, sans-serif">cadena de montaje</text>
    </svg>`,
  },
  video: {
    id: "3LQAnFEADl4",
    titulo: "La Revolución Industrial en 7 minutos",
    canal: "Academia Play",
    vistas: 6367302,
    megusta: 0,
    busqueda: "revolución industrial resumen",
  },
  ejemplos: [
    {
      enunciado: "Explica la cadena causal entre la revolución agrícola y el crecimiento de las ciudades.",
      pasos: [
        "Nuevas técnicas agrícolas → más alimentos con menos campesinos.",
        "Más alimentos → baja la mortalidad → crece la población.",
        "Sobran brazos en el campo → los campesinos emigran.",
        "Las fábricas los contratan → las ciudades crecen.",
      ],
      resultado: `La revolución agrícola liberó mano de obra y alimentó a una población que se concentró en las ciudades industriales.`,
    },
    {
      enunciado: "Un historiador dice que el ferrocarril fue el «motor del motor». ¿Qué quiere decir?",
      pasos: [
        "El ferrocarril necesitaba enormes cantidades de hierro y carbón.",
        "Esa demanda impulsó la minería y la siderurgia.",
        "Además abarató el transporte y unió los mercados.",
      ],
      resultado: `El ferrocarril impulsó a las demás industrias, por eso se le considera el gran motor de la industrialización.`,
    },
    {
      enunciado: "Clasifica: electricidad, máquina de vapor, petróleo, carbón, acero, algodón.",
      pasos: [
        "Primera revolución (desde 1760): vapor, carbón, algodón.",
        "Segunda revolución (1870-1914): electricidad, petróleo, acero.",
      ],
      resultado: "1ª: vapor, carbón y algodón. 2ª: electricidad, petróleo y acero.",
    },
    {
      enunciado: `Comenta este dato: en 1832 la esperanza de vida de un obrero de Manchester era de 17 años y la de un burgués de la misma ciudad, de 38.`,
      pasos: [
        `Identifica el dato: hay una diferencia de más de 20 años entre clases sociales en la misma ciudad.`,
        `Busca las causas: viviendas insalubres, falta de agua y alcantarillado, jornadas agotadoras, trabajo infantil y mala alimentación en los barrios obreros.`,
        `Relaciona con la mortalidad infantil: la media baja mucho porque muchos niños obreros morían antes de los 5 años.`,
        `Concluye con el significado histórico: la industrialización generó riqueza, pero la repartió de forma muy desigual.`,
      ],
      resultado: `El dato muestra la desigualdad de la nueva sociedad de clases: las condiciones de vida, no la naturaleza, decidían cuánto se vivía.`,
    },
    {
      enunciado: `Calcula el crecimiento de Manchester entre 1773 (25 000 hab.) y 1851 (303 000 hab.) y explica sus causas.`,
      pasos: [
        "Diferencia: 303 000 − 25 000 = 278 000 habitantes más.",
        "Multiplicador: 303 000 ÷ 25 000 ≈ 12; la ciudad se multiplicó por doce en 78 años.",
        `Causa principal: llegada de campesinos expulsados por las enclosures y atraídos por las fábricas de algodón.`,
        "Causa secundaria: el crecimiento natural de la población, al bajar la mortalidad.",
      ],
      resultado: `Manchester se multiplicó por 12, sobre todo por el éxodo rural hacia las fábricas: un ejemplo de urbanización industrial.`,
    },
    {
      enunciado: `Un sindicalista de 1890 y un empresario discuten sobre la jornada de 8 horas. Expón el argumento de cada uno y cómo se resolvió.`,
      pasos: [
        `Sindicalista: jornadas de 12 horas agotan, provocan accidentes y no dejan tiempo para la familia ni para formarse («8 horas de trabajo, 8 de descanso, 8 de ocio»).`,
        `Empresario: reducir horas baja la producción y los beneficios, y le hace perder frente a la competencia.`,
        `Medios de presión: huelgas, manifestaciones del 1 de mayo, presión de los partidos obreros en los parlamentos.`,
        `Resultado: se fue aprobando por leyes nacionales; en España, en 1919, tras la huelga de La Canadiense en Barcelona.`,
      ],
      resultado: `La jornada de 8 horas fue una conquista del movimiento obrero lograda tras décadas de presión; España la aprobó en 1919.`,
    },
  ],
  errores: [
    "Pensar que la Revolución Industrial fue rápida: duró décadas y se extendió poco a poco.",
    `Creer que empezó en España: empezó en Gran Bretaña hacia 1760; España se industrializó tarde.`,
    `Confundir socialismo y anarquismo: los socialistas querían tomar el Estado y los anarquistas abolirlo.`,
    `Mezclar las fuentes de energía de las dos revoluciones: carbón en la 1ª, petróleo y electricidad en la 2ª.`,
    "Olvidar el papel de las mujeres y los niños como mano de obra barata.",
    `Decir que «las máquinas causaron la pobreza»: la pobreza obrera venía de cómo se repartían los beneficios y de la falta de leyes laborales, no de la máquina en sí.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "¿Qué fueron las enclosures?",
      sol: `El cercado de tierras comunales en Gran Bretaña, que concentró la propiedad y empujó a muchos campesinos a las ciudades.`,
    },
    {
      nivel: "básico",
      q: "Explica qué es una sociedad anónima.",
      sol: `Una empresa cuyo capital se divide en acciones; los accionistas son los dueños y responden solo con lo que han aportado.`,
    },
    {
      nivel: "básico",
      q: "Describe tres problemas de las ciudades industriales.",
      sol: `Viviendas insalubres, falta de agua y alcantarillado, y contaminación que causaba epidemias como el cólera.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es el ludismo?",
      sol: `El movimiento de obreros que destruían máquinas porque las culpaban del paro y de los bajos salarios.`,
    },
    {
      nivel: "básico",
      q: "Define Revolución Industrial con tus palabras e indica cuándo y dónde empezó.",
      sol: `Es el paso de una economía agraria y artesanal a otra basada en la industria mecanizada, con máquinas movidas por energía (al principio, vapor de carbón). Empezó en Gran Bretaña hacia 1760 y se extendió durante el siglo XIX.`,
    },
    {
      nivel: "básico",
      q: "Enumera cinco factores que explican que la industrialización empezara en Gran Bretaña.",
      sol: `1) Revolución agrícola. 2) Crecimiento de la población. 3) Abundancia de carbón y hierro. 4) Capital acumulado por el comercio colonial y un imperio con materias primas y mercados. 5) Monarquía parlamentaria que protegía la propiedad y favorecía a la burguesía.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es el sistema Norfolk y qué sustituyó?",
      sol: `Es una rotación de cultivos de cuatro hojas (trigo, nabos, cebada y trébol) que sustituyó al barbecho: la tierra ya no descansaba, se alternaban cultivos que recuperaban el suelo y daban forraje al ganado.`,
    },
    {
      nivel: "básico",
      q: "¿Qué mejora introdujo James Watt en la máquina de vapor?",
      sol: `Añadió un condensador separado (1769), que evitaba enfriar el cilindro en cada ciclo; así la máquina gastaba mucho menos carbón y se pudo usar para mover todo tipo de máquinas, no solo para achicar agua de las minas.`,
    },
    {
      nivel: "básico",
      q: "Cita dos fuentes de energía y tres inventos de la segunda Revolución Industrial.",
      sol: `Energías: electricidad y petróleo. Inventos: la bombilla (Edison, 1879), el teléfono (Bell, 1876) y el motor de explosión o el automóvil; también la radio o el cine.`,
    },
    {
      nivel: "básico",
      q: "¿Qué diferencia hay entre una sociedad estamental y una sociedad de clases?",
      sol: `En la estamental el grupo depende del nacimiento y la ley da privilegios a unos (nobleza y clero). En la de clases todos son iguales ante la ley y lo que separa a los grupos es la riqueza, por lo que en teoría se puede cambiar de clase.`,
    },
    {
      nivel: "básico",
      q: "¿Qué son los ensanches y quién vivía en ellos?",
      sol: `Barrios nuevos planificados que las ciudades construyeron al derribar sus murallas en el siglo XIX, con calles anchas y rectas, alumbrado y servicios. Vivía en ellos sobre todo la burguesía; en Barcelona, el Ensanche de Cerdà (1859).`,
    },
    {
      nivel: "medio",
      q: "Nombra tres inventos de la industria textil.",
      sol: "La lanzadera volante, la spinning jenny y el telar mecánico.",
    },
    {
      nivel: "medio",
      q: "¿Por qué fue importante el carbón de coque?",
      sol: "Permitió fundir hierro en grandes cantidades sin usar leña, abaratando el hierro.",
    },
    {
      nivel: "medio",
      q: "¿Qué es un trust?",
      sol: "Una unión de empresas de un mismo sector que se fusionan para controlar el mercado.",
    },
    {
      nivel: "medio",
      q: "Compara los objetivos del socialismo y del anarquismo.",
      sol: `Ambos quieren acabar con la explotación. El socialismo busca una sociedad sin clases conquistando el Estado; el anarquismo quiere suprimir el Estado.`,
    },
    {
      nivel: "medio",
      q: "¿Qué aportó la cadena de montaje?",
      sol: `Producir en serie, más rápido y más barato, como hizo Ford con el Modelo T a partir de 1913.`,
    },
    {
      nivel: "medio",
      q: `Explica qué es la transición demográfica y por qué la población británica se triplicó entre 1750 y 1850.`,
      sol: `Es el paso de natalidad y mortalidad altas a ambas bajas. En la fase intermedia la mortalidad baja (mejor alimentación por la revolución agrícola, vacuna de Jenner, higiene) pero la natalidad sigue alta, por lo que el crecimiento natural se dispara: eso ocurrió en Gran Bretaña y la población pasó de 6 a 17 millones.`,
    },
    {
      nivel: "medio",
      q: `Explica por qué se dice que el ferrocarril fue el «motor del motor» de la industrialización.`,
      sol: `Porque abarató y aceleró el transporte de personas y mercancías, unificó los mercados nacionales y, sobre todo, su construcción necesitaba enormes cantidades de hierro y carbón, lo que impulsó la siderurgia y la minería; además movilizó grandes capitales a través de la Bolsa.`,
    },
    {
      nivel: "medio",
      q: "Ordena y explica la cadena de inventos textiles del siglo XVIII.",
      sol: `1) Lanzadera volante (1733): tejer más rápido. 2) Como faltaba hilo, se inventaron la spinning jenny (1764) y la mule para hilar con muchos husos. 3) Con mucho hilo, el telar mecánico (1785) aceleró de nuevo el tejido. Cada avance creaba un cuello de botella que impulsaba el siguiente invento.`,
    },
    {
      nivel: "medio",
      q: "Compara el trabajo en el taller artesano y en la fábrica en cuatro aspectos.",
      sol: `Lugar: casa o taller pequeño / gran edificio. Herramientas: del artesano / máquinas del empresario. Ritmo: flexible, lo marca el artesano / horario fijo marcado por la máquina y la sirena. Tarea: el artesano hace el producto completo / división del trabajo, cada obrero repite una tarea.`,
    },
    {
      nivel: "medio",
      q: "Explica qué es la plusvalía según Marx con un ejemplo numérico sencillo.",
      sol: `Si un obrero produce en un día bienes por valor de 10 monedas y cobra 4 de salario, las 6 restantes (descontados otros costes) se las queda el empresario: esa diferencia es la plusvalía. Para Marx ahí está la explotación del proletariado.`,
    },
    {
      nivel: "medio",
      q: "¿Qué era el cartismo y qué pedía?",
      sol: `Un movimiento obrero británico (1838-1848) que presentó al Parlamento la «Carta del Pueblo», firmada por millones, pidiendo derechos políticos: sufragio universal masculino, voto secreto, sueldo para los diputados, entre otros. Buscaba mejorar la vida obrera a través de la política.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué España se industrializó tarde? Da tres razones y dos zonas industriales.",
      sol: `Razones: falta de capitales, mercado interior pobre (campesinos con poca capacidad de compra), carbón escaso y de mala calidad, inestabilidad política y guerras. Zonas: Cataluña (textil del algodón) y País Vasco (siderurgia); también la minería de Asturias.`,
    },
    {
      nivel: "medio",
      q: "Explica el origen del 1 de mayo como Día Internacional de los Trabajadores.",
      sol: `Recuerda las huelgas de Chicago de mayo de 1886 por la jornada de ocho horas y la condena a muerte de varios sindicalistas tras los sucesos de Haymarket. La Segunda Internacional lo convirtió en jornada de lucha obrera en todo el mundo desde 1890.`,
    },
    {
      nivel: "medio",
      q: "Diferencia sindicato, partido obrero y sociedad de socorro mutuo.",
      sol: `Sociedad de socorro mutuo: caja común para ayudar a socios enfermos, accidentados o en paro. Sindicato: organización de trabajadores para negociar salarios y condiciones con el patrón, con la huelga como arma. Partido obrero: organización política que se presenta a elecciones para cambiar las leyes o tomar el poder (por ejemplo, el PSOE).`,
    },
    {
      nivel: "avanzado",
      q: "Cita dos organizaciones obreras españolas y su ideología.",
      sol: "PSOE y UGT, socialistas; CNT, anarquista (anarcosindicalista).",
    },
    {
      nivel: "avanzado",
      q: `Comenta este texto del Manifiesto comunista (1848): «La historia de todas las sociedades hasta nuestros días es la historia de la lucha de clases». ¿Qué significa? ¿Estás de acuerdo?`,
      sol: `Clasifica: texto político-ideológico de Marx y Engels. Idea: los cambios históricos se explican por el enfrentamiento entre grupos con intereses económicos opuestos (amos y esclavos, señores y siervos, burgueses y proletarios). Contexto: miseria obrera de la industrialización y revoluciones de 1848. Valoración personal argumentada: por ejemplo, explica bien conflictos como el obrero, pero deja fuera otros factores (religión, nación, ideas, cooperación entre grupos).`,
    },
    {
      nivel: "avanzado",
      q: `La primera ley británica que limitaba el trabajo infantil (1833) prohibía trabajar a menores de 9 años y limitaba a 9 horas diarias el trabajo de los de 9 a 13. Valora esta ley desde su época y desde hoy.`,
      sol: `Desde su época fue un avance: era la primera vez que el Estado intervenía en las condiciones laborales, contra la idea del laissez faire, y creó inspectores de fábrica. Desde hoy resulta insuficiente: seguía permitiendo que niños de 9 años trabajaran, mientras hoy la edad mínima es 16 y la escuela es obligatoria. Muestra que los derechos se conquistan poco a poco.`,
    },
    {
      nivel: "avanzado",
      q: `Relaciona la segunda Revolución Industrial con el imperialismo y la Primera Guerra Mundial.`,
      sol: `La 2ª Revolución Industrial multiplicó la producción de nuevas potencias (Alemania, EE. UU., Japón), que necesitaban materias primas (caucho, petróleo, cobre) y mercados para sus excedentes y capitales. Eso impulsó la conquista de colonias (imperialismo) y la rivalidad entre potencias; la carrera industrial y de armamentos (acero, química) fue una de las causas de la Gran Guerra.`,
    },
    {
      nivel: "avanzado",
      q: `¿Estamos viviendo una nueva revolución industrial? Argumenta comparando con la del siglo XIX.`,
      sol: `Respuesta abierta argumentada. Semejanzas: nuevas tecnologías (internet, robots, IA) cambian la forma de producir, destruyen empleos y crean otros, y generan debates como el ludismo (miedo a que las máquinas quiten trabajo). Diferencias: la energía y los materiales clave son otros (datos, electricidad), el cambio es global y muy rápido y existen hoy derechos laborales y Estado del bienestar que no había en 1830.`,
    },
    {
      nivel: "avanzado",
      q: "Explica por qué la Revolución Industrial está en el origen del cambio climático actual.",
      sol: `Desde 1760 la industria, el transporte y después la electricidad se basaron en quemar combustibles fósiles (carbón, luego petróleo y gas), que liberan CO₂. Su concentración en la atmósfera ha pasado de unas 280 ppm antes de la industrialización a más de 420 hoy, reforzando el efecto invernadero y calentando el planeta.`,
    },
    {
      nivel: "avanzado",
      q: `Imagina que eres un inspector de fábricas en 1840. Redacta un informe breve con tres problemas detectados y tres medidas propuestas.`,
      sol: `Ejemplo: problemas: niños de 8 años trabajando 13 horas; máquinas sin protección que causan mutilaciones; falta de ventilación y polvo de algodón que provoca enfermedades pulmonares. Medidas: prohibir el trabajo de menores y limitar la jornada; obligar a proteger las máquinas e indemnizar accidentes; ventilación y escuela obligatoria para los niños de la fábrica.`,
    },
  ],
  quiz: [
    {
      q: "¿En qué país empezó la Revolución Industrial?",
      o: ["Francia", "Italia", "Gran Bretaña", "Estados Unidos"],
      a: 2,
      e: `Empezó en Gran Bretaña hacia 1760, gracias a su revolución agrícola, el carbón, el capital y su sistema político.`,
    },
    {
      q: "¿Qué fuente de energía caracteriza la primera Revolución Industrial?",
      o: ["La energía nuclear", "El petróleo", "La electricidad", "El carbón (vapor)"],
      a: 3,
      e: "La máquina de vapor funcionaba quemando carbón. Petróleo y electricidad son de la segunda.",
    },
    {
      q: "¿Qué grupo social era dueño de las fábricas?",
      o: ["La burguesía", "El proletariado", "La nobleza", "El clero"],
      a: 0,
      e: `La burguesía poseía los medios de producción; el proletariado vendía su trabajo a cambio de un salario.`,
    },
    {
      q: "El ludismo consistía en…",
      o: ["crear partidos obreros", "destruir las máquinas", "votar en las elecciones", "emigrar al campo"],
      a: 1,
      e: `Los luditas rompían máquinas porque las culpaban de quitarles el trabajo y bajar los salarios.`,
    },
    {
      q: "¿Cuál de estos inventos pertenece a la segunda Revolución Industrial?",
      o: ["La lanzadera volante", "La spinning jenny", "La máquina de vapor de Watt", "La bombilla eléctrica"],
      a: 3,
      e: "Edison patentó su bombilla en 1879, en plena segunda Revolución Industrial.",
    },
    {
      q: "La rotación de cultivos sustituyó al…",
      o: ["invernadero", "regadío", "barbecho", "arado"],
      a: 2,
      e: "Ya no hacía falta dejar la tierra sin cultivar.",
    },
    {
      q: "La primera línea de ferrocarril de la España peninsular fue…",
      o: ["Madrid-Aranjuez", "Barcelona-Mataró", "Bilbao-Santander", "Madrid-Barcelona"],
      a: 1,
      e: "Se inauguró en 1848.",
    },
    {
      q: "¿Quiénes escribieron el Manifiesto comunista?",
      o: ["Marx y Engels", "Bakunin y Kropotkin", "Owen y Saint-Simon", "Smith y Ricardo"],
      a: 0,
      e: "Se publicó en 1848.",
    },
    {
      q: "La CNT era un sindicato…",
      o: ["socialista", "liberal", "anarquista", "católico"],
      a: 2,
      e: "Se fundó en 1910.",
    },
    {
      q: "La cadena de montaje se asocia a…",
      o: ["Charles Darwin", "Henry Ford", "James Watt", "Edison"],
      a: 1,
      e: "La usó para fabricar el Modelo T.",
    },
    {
      q: "¿Qué fueron las enclosures?",
      o: [
        "Fábricas textiles",
        "Cercamientos de tierras comunales",
        "Sindicatos británicos",
        "Leyes contra el trabajo infantil",
      ],
      a: 1,
      e: `Leyes que permitieron vallar y concentrar tierras; muchos campesinos perdieron su sustento y emigraron a las ciudades.`,
    },
    {
      q: "En la fase de crecimiento de la transición demográfica…",
      o: [
        "suben natalidad y mortalidad",
        "baja la natalidad y sube la mortalidad",
        "baja la mortalidad y la natalidad sigue alta",
        "ambas son bajas",
      ],
      a: 2,
      e: "Por eso se dispara el crecimiento natural, como en la Gran Bretaña de 1750-1850.",
    },
    {
      q: "El primer sector industrial moderno fue…",
      o: ["la química", "el automóvil", "el textil del algodón", "la electricidad"],
      a: 2,
      e: `La lanzadera volante, la spinning jenny y el telar mecánico mecanizaron el algodón en el siglo XVIII.`,
    },
    {
      q: "¿Qué es un trust?",
      o: [
        "Un acuerdo de precios sin fusión",
        "La fusión de varias empresas en una",
        "Un sindicato de empresarios",
        "Un banco público",
      ],
      a: 1,
      e: `En el cártel las empresas pactan; en el trust se fusionan; en el holding una sociedad controla a otras.`,
    },
    {
      q: "¿Quién defendió el liberalismo económico en «La riqueza de las naciones»?",
      o: ["Karl Marx", "Adam Smith", "Mijaíl Bakunin", "Henry Ford"],
      a: 1,
      e: "Adam Smith (1776) defendía el libre mercado y la mínima intervención del Estado.",
    },
    {
      q: "La plusvalía es, para Marx…",
      o: [
        "el salario del obrero",
        "el valor producido por el obrero que se queda el empresario",
        "un impuesto del Estado",
        "el precio de las acciones",
      ],
      a: 1,
      e: "Es la diferencia entre lo que el obrero produce y lo que cobra.",
    },
    {
      q: "El cartismo británico reclamaba sobre todo…",
      o: [
        "destruir las máquinas",
        "derechos políticos como el sufragio universal masculino",
        "abolir el Estado",
        "volver al campo",
      ],
      a: 1,
      e: "La Carta del Pueblo pedía sufragio universal masculino y voto secreto, entre otras cosas.",
    },
    {
      q: "La siderurgia vasca del siglo XIX se basaba en…",
      o: ["el algodón americano", "el hierro de sus minas", "el petróleo", "la seda"],
      a: 1,
      e: "Exportaba hierro a Gran Bretaña y recibía carbón galés de vuelta.",
    },
    {
      q: "La Primera Internacional se fundó en…",
      o: ["París, 1789", "Londres, 1864", "Chicago, 1886", "Madrid, 1879"],
      a: 1,
      e: "La Asociación Internacional de Trabajadores reunió en 1864 a socialistas y anarquistas.",
    },
    {
      q: "¿Qué gas emitido al quemar carbón y petróleo provoca el cambio climático?",
      o: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"],
      a: 2,
      e: `El CO₂ refuerza el efecto invernadero; su concentración ha crecido desde la industrialización.`,
    },
  ],
  examen: [
    {
      q: "La máquina de vapor de Watt funcionaba quemando…",
      o: ["petróleo", "carbón", "gas natural", "leña de olivo"],
      a: 1,
      e: "El carbón calentaba el agua y el vapor movía el pistón.",
    },
    {
      q: "La primera línea de ferrocarril moderna (1830) unió…",
      o: ["Londres y París", "Liverpool y Manchester", "Barcelona y Mataró", "Berlín y Múnich"],
      a: 1,
      e: "Demostró que el tren de vapor era rápido y rentable.",
    },
    {
      q: "¿Qué país NO lideró la segunda Revolución Industrial?",
      o: ["Alemania", "Estados Unidos", "Japón", "Portugal"],
      a: 3,
      e: "Alemania, EE. UU. y Japón se industrializaron con fuerza desde 1870.",
    },
    {
      q: "El ludismo consistía en…",
      o: ["votar a partidos obreros", "destruir máquinas", "crear cooperativas", "emigrar a América"],
      a: 1,
      e: "Los luditas culpaban a las máquinas del paro.",
    },
    {
      q: "El PSOE y la UGT eran de ideología…",
      o: ["anarquista", "socialista", "liberal", "carlista"],
      a: 1,
      e: "Los fundó Pablo Iglesias en 1879 y 1888.",
    },
    {
      q: "En la sociedad de clases, lo que separa a los grupos es…",
      o: ["el nacimiento", "la religión", "la riqueza", "el privilegio legal"],
      a: 2,
      e: "Todos son iguales ante la ley; la diferencia es económica.",
    },
    {
      q: "La cadena de montaje la introdujo…",
      o: ["Watt en 1769", "Ford en 1913", "Edison en 1879", "Bell en 1876"],
      a: 1,
      e: "Abarató el Modelo T.",
    },
    {
      q: "¿Qué ideología quería abolir el Estado?",
      o: ["El socialismo marxista", "El anarquismo", "El liberalismo", "El conservadurismo"],
      a: 1,
      e: "Bakunin y los anarquistas rechazaban cualquier autoridad, también un Estado obrero.",
    },
  ],
  feynman: [
    "Las causas por las que empezó en Gran Bretaña",
    "El papel de la máquina de vapor y la fábrica",
    "Diferencias entre la primera y la segunda Revolución Industrial",
    "Cómo era la vida del proletariado y cómo se organizó",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: REVOLUCIÓN INDUSTRIAL">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="196.75" y="122" width="306.5" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">REVOLUCIÓN INDUSTRIAL</text>
      <rect x="5" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--leaf)">Causas</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">agricultura, población, carbón, capital</text><rect x="425" y="34" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--ink)">1ª (1760)</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">carbón · vapor · textil · tren</text><rect x="5" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--inf)">2ª (1870)</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">petróleo · electricidad · acero</text><rect x="425" y="214" width="270" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--red)">Sociedad</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">burguesía vs. proletariado → sindicatos</text>
    </g></svg>`,
  tarjetas: [
    ["¿Cuándo y dónde empezó la Revolución Industrial?", "Hacia 1760, en Gran Bretaña."],
    ["¿Qué perfeccionó James Watt en 1769?", "La máquina de vapor."],
    ["Nuevas energías de la segunda Revolución Industrial", "Petróleo y electricidad."],
    [
      "¿Qué es el proletariado?",
      "La clase obrera, que solo posee su fuerza de trabajo y la vende por un salario.",
    ],
    ["¿Qué publicaron Marx y Engels en 1848?", "El Manifiesto comunista."],
    ["Enclosures", "Cercado de tierras comunales en Gran Bretaña."],
    ["Sociedad anónima", "Empresa con el capital dividido en acciones."],
    ["Anarquismo", "Ideología que quiere suprimir el Estado y toda autoridad."],
    [
      "Transición demográfica",
      "Paso de natalidad y mortalidad altas a ambas bajas; en medio la población crece mucho.",
    ],
    ["Carbón de coque", "Carbón mineral tratado que sustituyó a la leña en los altos hornos."],
    [
      "Plusvalía",
      `Para Marx, el valor que produce el obrero por encima de su salario y que se queda el empresario.`,
    ],
    ["Cartismo", "Movimiento obrero británico (1838-1848) que pedía sufragio universal masculino."],
  ],
  glosario: [
    [
      "Revolución Industrial",
      `Paso de una economía agraria y artesanal a otra basada en la industria mecanizada, iniciado en Gran Bretaña hacia 1760.`,
    ],
    ["Enclosures", "Cercamiento y concentración de tierras comunales en Gran Bretaña."],
    ["Rotación de cultivos", "Alternancia de cultivos distintos en una parcela que evita dejarla en barbecho."],
    ["Transición demográfica", "Paso de un régimen de natalidad y mortalidad altas a otro de ambas bajas."],
    ["Máquina de vapor", "Máquina que transforma el calor del carbón en movimiento mediante vapor de agua."],
    ["Fábrica", "Edificio donde el empresario reúne máquinas y trabajadores asalariados con horario fijo."],
    ["División del trabajo", "Organización en la que cada trabajador realiza una sola tarea del proceso."],
    [
      "Capitalismo",
      `Sistema económico basado en la propiedad privada, el beneficio, el salario y el libre mercado.`,
    ],
    ["Sociedad anónima", "Empresa cuyo capital se divide en acciones; los socios solo arriesgan lo invertido."],
    ["Monopolio", "Situación en la que una sola empresa controla un mercado."],
    ["Burguesía", "Clase dueña de los medios de producción: fábricas, bancos, comercios."],
    ["Proletariado", "Clase obrera que solo posee su fuerza de trabajo y la vende por un salario."],
    ["Urbanización", "Crecimiento de las ciudades y de la proporción de población que vive en ellas."],
    ["Ludismo", "Movimiento de destrucción de máquinas de comienzos del siglo XIX."],
    ["Sindicato", "Asociación de trabajadores para defender sus intereses laborales."],
    ["Plusvalía", "Valor producido por el obrero por encima de su salario, según Marx."],
    ["Anarquismo", "Ideología que quiere abolir el Estado y toda autoridad."],
  ],
  situacion: {
    titulo: "Nuestra comarca, ¿industrial?",
    reto: `El ayuntamiento quiere preparar una ruta de patrimonio industrial para escolares. Vuestro equipo debe descubrir qué huella dejó la industrialización en vuestra localidad o comarca (fábricas, colonias, minas, estaciones, chimeneas, barrios obreros) y proponer una parada para la ruta.`,
    pasos: [
      `Investigad en la web del ayuntamiento, el archivo local o preguntando a familiares qué industrias hubo en vuestra zona y cuándo.`,
      `Elegid un edificio o lugar y documentad su historia: qué se producía, cuántas personas trabajaban, cómo eran sus condiciones.`,
      "Buscad una fuente primaria (foto antigua, testimonio, noticia de prensa) y comentadla.",
      `Relacionad el caso local con lo estudiado: ¿primera o segunda Revolución Industrial? ¿Qué energía usaba?`,
      `Diseñad la parada de la ruta: un panel con texto breve, imagen, línea del tiempo y una pregunta para los visitantes.`,
    ],
    producto: `Un panel informativo (en papel o digital) para una ruta de patrimonio industrial, presentado oralmente en 3 minutos.`,
    evaluacion: [
      "Rigor: los datos están contrastados y las fuentes citadas.",
      `Relación del caso local con los conceptos del tema (fábrica, energía, proletariado, movimiento obrero).`,
      "Uso y comentario correcto de una fuente primaria.",
      "Claridad y atractivo del panel y de la exposición oral.",
    ],
  },
  familias: [
    `Buscad juntos qué fábrica o industria antigua hay en vuestra ciudad o comarca (colonias textiles, minas, ferrocarril).`,
    "Comparad un día de trabajo de un niño en 1840 con su día de hoy.",
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: transformaciones económicas y sociales de la industrialización y el movimiento obrero (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      "Comentario de un testimonio de trabajo infantil del informe Sadler (1832).",
      `Mapa de la industrialización en España: Cataluña textil, País Vasco siderúrgico, Asturias minera.`,
      "Debate: ¿la automatización actual es una nueva revolución industrial?",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    {
      t: "Revolución Industrial, Wikipedia en español",
      url: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_Industrial",
    },
  ],
  revisado: "2026-11-13",
};
