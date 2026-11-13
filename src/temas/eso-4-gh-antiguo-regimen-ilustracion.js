// Geografía e Historia 4º ESO · tema nivel libro (capítulo completo). Contenido y dibujos SVG propios.
// Los dibujos nuevos se generaron con src/temas/_eso4L4.js y se guardan ya resueltos.
module.exports = {
  materia: "Geografía e Historia",
  curso: "4-eso",
  titulo: "El siglo XVIII: el Antiguo Régimen y la Ilustración",
  minutos: 100,
  objetivos: [
    "Describir los rasgos económicos, sociales y políticos del Antiguo Régimen",
    "Explicar las ideas principales de la Ilustración y sus autores",
    "Reconocer el despotismo ilustrado y el reformismo borbónico en España",
    "Comparar la monarquía absoluta y la parlamentaria",
    "Relacionar las ideas ilustradas con los cambios políticos posteriores",
  ],
  claves: [
    "Antiguo Régimen",
    "sociedad estamental",
    "absolutismo",
    "Ilustración",
    "división de poderes",
    "despotismo ilustrado",
  ],
  pregunta: {
    texto: `En 1750 un rey podía encarcelar a alguien sin juicio y un noble no pagaba impuestos solo por haber nacido noble. Cuarenta años después, en Francia se proclamaba que «los hombres nacen libres e iguales en derechos». ¿De dónde salieron esas ideas?`,
    respuesta: `De la <mark>Ilustración</mark>, un movimiento de pensadores del siglo XVIII que confiaba en la <b>razón</b> para criticar el orden de su tiempo, el <b>Antiguo Régimen</b>: monarquía absoluta, privilegios por nacimiento y economía agraria.`,
  },
  lectura: {
    titulo: "Un libro prohibido en la mochila",
    html: `<p>París, 1759. Un librero esconde bajo el mostrador varios tomos de gran tamaño. Si la policía los encuentra, puede acabar en la cárcel de la Bastilla: el rey ha retirado el permiso para imprimirlos y el papa los condenará poco después. ¿Qué peligro encierran esos libros? No son panfletos violentos, sino la <i>Enciclopedia</i>: miles de artículos que explican cómo funciona un telar, cómo se cultiva el trigo, qué es la electricidad… y que, de paso, se preguntan por qué unas personas nacen con privilegios y otras no, o por qué el rey no debe rendir cuentas a nadie.</p><p>Hoy cualquiera puede buscar en internet lo que quiera, criticar al Gobierno o elegir su religión. Esos derechos no han existido siempre: en el siglo XVIII la mayoría de los europeos vivía en sociedades donde el nacimiento decidía casi todo y el rey concentraba todo el poder. Un grupo de pensadores, los ilustrados, empezó a cuestionarlo con una herramienta muy sencilla: <b>usar la razón</b>.</p><p>En este tema descubrirás cómo era aquel mundo, el <b>Antiguo Régimen</b>, y cómo las ideas de la Ilustración prepararon las revoluciones que lo derribarían.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 Qué fue el Antiguo Régimen</h3><p>Los revolucionarios franceses de 1789 llamaron <mark>Antiguo Régimen</mark> al sistema que querían destruir, y el nombre se quedó. Designa la organización económica, social y política de Europa entre el siglo XVI y finales del XVIII. Tenía tres rasgos que se apoyaban entre sí.</p><p>En lo <b>económico</b>, era una economía agraria de subsistencia: casi el 80 % de la población vivía del campo y producía sobre todo para comer. En lo <b>social</b>, la sociedad estaba dividida en <b>estamentos</b>, grupos cerrados a los que se pertenecía por nacimiento y que tenían derechos distintos ante la ley. En lo <b>político</b>, predominaba la <b>monarquía absoluta</b>: el rey concentraba todo el poder y decía recibirlo de Dios.</p><p>Este orden se presentaba como natural y querido por Dios, y la Iglesia lo justificaba. Pero durante el siglo XVIII el crecimiento del comercio, el enriquecimiento de la burguesía y las nuevas ideas de la Ilustración lo pusieron en cuestión. Entender sus rasgos es imprescindible para comprender por qué estallaron las revoluciones liberales, que estudiarás en el tema siguiente.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pirámide estamental: rey arriba, nobleza y clero privilegiados, tercer estado en la base">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <path d="M130 18 H 130 L 166.66666666666666 66.66666666666666 H 93.33333333333334 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/><text x="130" y="52.33333333333333" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">rey</text><path d="M93.33333333333334 66.66666666666666 H 166.66666666666666 L 203.33333333333331 115.33333333333331 H 56.66666666666667 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><text x="130" y="95.99999999999999" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">nobleza y clero</text><path d="M56.66666666666667 115.33333333333333 H 203.33333333333331 L 240 164 H 20 Z" fill="var(--line)" stroke="var(--ink)" stroke-width="2"/><text x="130" y="144.66666666666666" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">tercer estado (90 %)</text>
  </svg>`,
    },
    {
      html: `<h3>1.2 La economía: campo, gremios y comercio</h3><p>Alrededor de ocho de cada diez personas eran campesinos. Cultivaban con técnicas antiguas, como el arado romano y el <b>barbecho</b> (dejar descansar la tierra un año), y obtenían rendimientos muy bajos. Bastaba una sequía o unas lluvias excesivas para que llegara una <mark>crisis de subsistencia</mark>: escaseaba el trigo, subía el pan, la gente pasaba hambre y las epidemias se cebaban en una población debilitada.</p><p>La tierra estaba sobre todo en manos de la nobleza y la Iglesia, muchas veces vinculada mediante el <b>mayorazgo</b> o en «manos muertas», es decir, que no se podía vender. En los <b>señoríos</b>, el señor cobraba rentas a los campesinos y a veces impartía justicia. La artesanía de las ciudades se organizaba en <b>gremios</b>, asociaciones de los maestros de un oficio que fijaban precios, calidad y número de talleres, y frenaban la competencia y las innovaciones.</p><p>Aun así, había sectores dinámicos. El <b>comercio colonial</b> con América y Asia (azúcar, tabaco, algodón, especias y, tristemente, personas esclavizadas) enriqueció puertos como Cádiz, Burdeos o Liverpool y a una burguesía comercial cada vez más poderosa.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Una crisis de subsistencia: mala cosecha por sequía o lluvias → escasez de trigo y subida del pan → hambre y defensas bajas → epidemias y aumento de la mortalidad"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Una crisis de subsistencia</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="39.9" text-anchor="middle" font-size="10.5" >mala cosecha por sequía o</text><text x="130" y="52.0" text-anchor="middle" font-size="10.5" >lluvias</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="78.4" text-anchor="middle" font-size="10.5" >escasez de trigo y subida del</text><text x="130" y="90.5" text-anchor="middle" font-size="10.5" >pan</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="122.9" text-anchor="middle" font-size="10.5" >hambre y defensas bajas</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="155.4" text-anchor="middle" font-size="10.5" >epidemias y aumento de la</text><text x="130" y="167.5" text-anchor="middle" font-size="10.5" >mortalidad</text></g></svg>`,
    },
    {
      html: `<h3>1.3 Una sociedad de estamentos</h3><p>La sociedad se dividía en <mark>estamentos</mark>, grupos a los que se pertenecía por nacimiento y de los que era casi imposible salir.</p><table class="tb"><thead><tr><th>Estamento</th><th>Quiénes</th><th>Situación</th></tr></thead><tbody><tr><td>Nobleza</td><td>≈ 2-3 %</td><td>privilegiada: no pagaba impuestos directos, cargos, tierras y tribunales propios</td></tr><tr><td>Clero</td><td>≈ 1-2 %</td><td>privilegiado: cobraba el diezmo, tenía tierras, educación y asistencia</td></tr><tr><td>Tercer estado</td><td>≈ 95 %</td><td>no privilegiado: campesinos, artesanos y burguesía; pagaba impuestos</td></tr></tbody></table><p>Los <b>privilegios</b> eran derechos especiales reconocidos por la ley: no pagar ciertos impuestos, ser juzgado por tribunales propios, ocupar los altos cargos del ejército y la administración, o no sufrir castigos «deshonrosos». Dentro de cada estamento había enormes diferencias: un gran duque y un hidalgo pobre eran nobles; un arzobispo y un cura de aldea eran clero.</p><p>El caso más llamativo era el de la <b>burguesía</b>: comerciantes, banqueros o fabricantes que podían ser más ricos que muchos nobles, pero pertenecían al tercer estado, pagaban impuestos y no podían acceder a ciertos cargos. Por eso deseaba una sociedad basada en el mérito y la riqueza, no en el nacimiento.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Los privilegios de nobleza y clero: Fiscales, Judiciales, De honor, Económicos"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Los privilegios de nobleza y clero</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Fiscales</text><text x="68" y="69.8" text-anchor="middle" font-size="10" >no pagaban</text><text x="68" y="81.3" text-anchor="middle" font-size="10" >impuestos directos</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Judiciales</text><text x="192" y="75.5" text-anchor="middle" font-size="10" >tribunales propios</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">De honor</text><text x="68" y="144.8" text-anchor="middle" font-size="10" >altos cargos y</text><text x="68" y="156.3" text-anchor="middle" font-size="10" >títulos</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Económicos</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >tierras, rentas y</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >diezmo</text></g></svg>`,
    },
    {
      html: `<h3>1.4 La monarquía absoluta</h3><p>En la <mark>monarquía absoluta</mark> el rey concentraba los tres poderes: hacía las leyes (legislativo), las aplicaba y gobernaba (ejecutivo) y juzgaba en última instancia (judicial). Su poder se justificaba por el <b>derecho divino</b>: Dios lo había elegido, así que solo ante Dios respondía. Teóricos como el obispo Bossuet o Thomas Hobbes, este por otras razones, defendieron que un poder fuerte y sin límites era la única garantía de orden.</p><p>El modelo fue <b>Luis XIV</b> de Francia (1643-1715), el «Rey Sol», a quien se atribuye la frase «el Estado soy yo». Construyó el palacio de Versalles para tener a la nobleza cerca y controlada, reunió un gran ejército permanente y una administración de funcionarios fieles, y no convocó nunca los Estados Generales, la asamblea de los estamentos.</p><p>Sin embargo, el poder absoluto tenía límites prácticos: el rey debía respetar los privilegios de nobles y clero, las leyes propias de algunos territorios y la religión. Y necesitaba dinero, mucho dinero, para guerras y palacios. Ese problema fiscal acabará siendo decisivo en Francia en 1789.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Comparación entre monarquía absoluta en Francia y parlamentaria en Gran Bretaña">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <rect x="14" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/>
    <text x="69" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--red)" font-family="Baloo 2, sans-serif">Absoluta</text>
    <text x="69" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Francia, España</text><text x="69" y="90" text-anchor="middle" font-size="11" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">el rey hace leyes,</text><text x="69" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">gobierna y juzga</text><text x="69" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">derecho divino</text><text x="69" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">sin límites</text><rect x="136" y="16" width="110" height="148" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
    <text x="191" y="40" text-anchor="middle" font-weight="700" font-size="14" fill="var(--pen)" font-family="Baloo 2, sans-serif">Parlamentaria</text>
    <text x="191" y="68" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Gran Bretaña</text><text x="191" y="90" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">desde 1689</text><text x="191" y="112" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">el Parlamento</text><text x="191" y="134" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">aprueba leyes</text><text x="191" y="156" text-anchor="middle" font-size="12" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">e impuestos</text>
  </svg>`,
    },
    {
      html: `<h3>1.5 La alternativa parlamentaria: Inglaterra</h3><p>Inglaterra siguió un camino distinto. Desde la Edad Media existía un <b>Parlamento</b> que debía aprobar los impuestos. En el siglo XVII los reyes Estuardo intentaron gobernar sin él y estalló una guerra civil (1642-1649) que terminó con la ejecución de Carlos I y una breve república dirigida por Oliver Cromwell.</p><p>Tras la restauración de la monarquía, el conflicto volvió. En la <mark>Revolución Gloriosa</mark> de 1688, casi sin derramamiento de sangre, el Parlamento expulsó a Jacobo II y ofreció la corona a Guillermo de Orange y María. A cambio, estos aceptaron la <b>Declaración de Derechos</b> (1689): el rey no podía crear impuestos, suspender leyes ni mantener un ejército en tiempo de paz sin permiso del Parlamento, y las elecciones y la libertad de palabra de los parlamentarios quedaban protegidas.</p><p>Nacía así la <b>monarquía parlamentaria</b>, en la que el poder del rey está limitado por la ley y por una asamblea representativa (aunque solo votaba una minoría de propietarios). El filósofo <b>John Locke</b> la justificó: el gobierno nace de un pacto con los ciudadanos para proteger sus derechos naturales, y si los viola, el pueblo puede sustituirlo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: el parlamentarismo inglés"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="52" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1215</text><text x="52" y="51.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">Carta Magna</text><circle cx="96" cy="98" r="6" fill="var(--red)"/><path d="M96 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="96" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1642</text><text x="96" y="153.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">guerra civil</text><circle cx="164" cy="98" r="6" fill="var(--leaf)"/><path d="M164 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="164" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1688</text><text x="164" y="45.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">Revolución</text><text x="164" y="56.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">Gloriosa</text><circle cx="232" cy="98" r="6" fill="var(--sun)"/><path d="M232 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="208" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1689</text><text x="208" y="147.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">Declaración de</text><text x="208" y="158.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">Derechos</text></g></svg>`,
      video: {
        id: "L-IjlWYMfMI",
        titulo: "El absolutismo: resumen. Las monarquías absolutas entre los siglos XVI y XVIII",
        canal: "Cuaderno de Historia",
        vistas: 370641,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.6 La Ilustración: la luz de la razón</h3><p>La <mark>Ilustración</mark> fue un movimiento intelectual del siglo XVIII que confiaba en la <b>razón</b> humana como guía para entender el mundo y mejorar la sociedad. Sus pensadores querían «iluminar» con el conocimiento lo que consideraban las tinieblas de la ignorancia, la superstición y la tiranía. Kant lo resumió en un lema: <i>Sapere aude</i>, «atrévete a saber», a pensar por ti mismo.</p><p>Bebía de la <b>revolución científica</b> del siglo anterior. Si Newton había explicado el movimiento de los planetas con leyes matemáticas, ¿no se podrían descubrir también leyes para organizar mejor la economía, la política o la educación? Los ilustrados creían en el <b>progreso</b>: la humanidad podía ser cada vez más libre, más sabia y más feliz.</p><p>Por eso criticaban todo lo que no superara el examen de la razón: los privilegios de nacimiento, la intolerancia religiosa, la tortura en los juicios, la censura y el poder sin límites del rey. Defendían la <b>libertad</b>, la <b>igualdad ante la ley</b>, la <b>tolerancia</b> y la <b>educación</b>. No eran revolucionarios armados, sino escritores, científicos y filósofos, pero sus ideas fueron una bomba de relojería para el Antiguo Régimen.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Pensadores ilustrados alrededor de la idea de razón">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="11.5" font-weight="700" text-anchor="middle">
    <path d="M56 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="56" y="34" fill="var(--ink)">Locke</text><path d="M204 30 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="17" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="204" y="34" fill="var(--ink)">Montesquieu</text><path d="M54 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="6" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="54" y="100" fill="var(--ink)">Rousseau</text><path d="M206 96 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="158" y="83" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="206" y="100" fill="var(--ink)">Voltaire</text><path d="M56 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="8" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="56" y="164" fill="var(--ink)">Enciclopedia</text><path d="M204 160 L 130 96" stroke="var(--line)" stroke-width="2.5"/><rect x="156" y="147" width="96" height="24" rx="12" fill="var(--card)" stroke="var(--bac)" stroke-width="2"/><text x="204" y="164" fill="var(--ink)">Adam Smith</text>
    <circle cx="130" cy="96" r="34" fill="var(--soc, #c2410c)"/>
    <text x="130" y="100" fill="#fff" font-size="11">RAZÓN</text>
  </g>
  </svg>`,
      video: {
        id: "TpuZUQYeB-g",
        titulo: "La Ilustración del siglo XVIII en 5 minutos",
        canal: "Clases Particulares en Ávila",
        vistas: 891706,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.7 Los grandes pensadores</h3><table class="tb"><thead><tr><th>Autor</th><th>Idea principal</th></tr></thead><tbody><tr><td>Locke</td><td>derechos naturales (vida, libertad, propiedad) y gobierno por consentimiento</td></tr><tr><td>Montesquieu</td><td>división de poderes (<i>El espíritu de las leyes</i>, 1748)</td></tr><tr><td>Voltaire</td><td>tolerancia religiosa y libertad de expresión</td></tr><tr><td>Rousseau</td><td>soberanía nacional y voluntad general (<i>El contrato social</i>, 1762)</td></tr><tr><td>Adam Smith</td><td>libertad económica y mercado (<i>La riqueza de las naciones</i>, 1776)</td></tr></tbody></table><p><b>Voltaire</b> denunció con ironía el fanatismo religioso y defendió a víctimas de la intolerancia, como el protestante Jean Calas, ejecutado injustamente. <b>Rousseau</b> sostuvo que la <mark>soberanía</mark>, el poder supremo, no pertenece al rey sino al conjunto de los ciudadanos, que expresan su «voluntad general» a través de las leyes: una idea que conduce a la democracia.</p><p>También hubo voces que pidieron la igualdad de las mujeres, como Mary Wollstonecraft (<i>Vindicación de los derechos de la mujer</i>, 1792), aunque la mayoría de los ilustrados las excluyó de sus propuestas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cuatro ideas ilustradas: Locke, Montesquieu, Rousseau, Voltaire"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Cuatro ideas ilustradas</text><rect x="10.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="68" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Locke</text><text x="68" y="75.5" text-anchor="middle" font-size="10" >derechos naturales</text><rect x="134.0" y="28.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="192" y="46.4" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Montesquieu</text><text x="192" y="69.8" text-anchor="middle" font-size="10" >división de</text><text x="192" y="81.3" text-anchor="middle" font-size="10" >poderes</text><rect x="10.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="68" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--leaf)">Rousseau</text><text x="68" y="150.5" text-anchor="middle" font-size="10" >soberanía nacional</text><rect x="134.0" y="103.0" width="116.0" height="67.0" rx="9" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="192" y="121.3" text-anchor="middle" font-size="11" font-weight="700" fill="var(--sun)">Voltaire</text><text x="192" y="144.8" text-anchor="middle" font-size="10" >tolerancia</text><text x="192" y="156.3" text-anchor="middle" font-size="10" >religiosa</text></g></svg>`,
    },
    {
      html: `<h3>1.8 La división de poderes de Montesquieu</h3><p>En <i>El espíritu de las leyes</i> (1748) Montesquieu, que admiraba el sistema inglés, propuso una idea sencilla y poderosa: para que no haya tiranía, el poder debe dividirse en tres y cada parte debe estar en manos distintas, de modo que «el poder frene al poder».</p><p>El <b>poder legislativo</b> elabora y aprueba las leyes; corresponde a un parlamento elegido. El <b>poder ejecutivo</b> gobierna y hace cumplir las leyes; corresponde al rey o al gobierno. El <b>poder judicial</b> juzga si se han incumplido las leyes y castiga los delitos; corresponde a jueces independientes.</p><p>Si un mismo hombre o un mismo grupo hiciera las leyes, las aplicara y juzgara, decía Montesquieu, todo estaría perdido: podría encarcelar a quien quisiera con una ley hecha a su medida. La <mark>división de poderes</mark> es hoy la base de cualquier Estado de derecho. La Constitución española de 1978 la recoge: las Cortes Generales legislan, el Gobierno ejecuta y los jueces y tribunales juzgan. Cuando oyes debatir sobre la «independencia judicial», se está discutiendo, en el fondo, la idea de Montesquieu.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Templo con tres columnas: legislativo, ejecutivo y judicial">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <path d="M30 52 L 130 16 L 230 52 Z" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <text x="130" y="44" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" font-family="Atkinson Hyperlegible, sans-serif">Constitución</text>
        <rect x="40" y="58" width="44" height="88" fill="var(--card)" stroke="var(--pen)" stroke-width="3"/><text x="62" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="var(--pen)" font-family="Atkinson Hyperlegible, sans-serif">legislativo</text><rect x="108" y="58" width="44" height="88" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"/><text x="130" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="var(--leaf)" font-family="Atkinson Hyperlegible, sans-serif">ejecutivo</text><rect x="176" y="58" width="44" height="88" fill="var(--card)" stroke="var(--red)" stroke-width="3"/><text x="198" y="164" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)" font-family="Atkinson Hyperlegible, sans-serif">judicial</text>
        <rect x="24" y="146" width="212" height="6" fill="var(--ink)"/>
      </svg>`,
    },
    {
      html: `<h3>1.9 La economía ilustrada</h3><p>Durante los siglos XVI y XVII dominó el <b>mercantilismo</b>: la riqueza de un país era el oro y la plata que acumulaba, así que convenía exportar mucho, importar poco, proteger la industria nacional con <b>aranceles</b> (impuestos a los productos extranjeros) y explotar las colonias. El Estado intervenía en todo.</p><p>Los ilustrados propusieron alternativas. Los <b>fisiócratas</b> franceses, como Quesnay, sostenían que la verdadera riqueza nace de la tierra y pedían libertad para cultivar y comerciar: «dejad hacer, dejad pasar». Después, el escocés <b>Adam Smith</b> fundó el <mark>liberalismo económico</mark>. Para él, la fuente de la riqueza es el <b>trabajo</b>; la división del trabajo multiplica la productividad (su famoso ejemplo de la fábrica de alfileres) y el mercado se regula solo mediante la oferta y la demanda, como si lo guiara una «mano invisible». Cada persona, buscando su propio interés, contribuiría sin pretenderlo al bienestar general.</p><p>El Estado debía limitarse a defender el país, impartir justicia y construir obras públicas. Estas ideas serán la base del capitalismo industrial del siglo XIX.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos visiones de la riqueza: Mercantilismo frente a Liberalismo"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Dos visiones de la riqueza</text><rect x="10" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="67" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--pen)">Mercantilismo</text><text x="67" y="66.6" text-anchor="middle" font-size="9.5" >acumular oro y</text><text x="67" y="77.5" text-anchor="middle" font-size="9.5" >plata</text><text x="67" y="101.6" text-anchor="middle" font-size="9.5" >aranceles altos</text><text x="67" y="131.1" text-anchor="middle" font-size="9.5" >Estado protector</text><text x="67" y="155.1" text-anchor="middle" font-size="9.5" >colonias como</text><text x="67" y="166.0" text-anchor="middle" font-size="9.5" >mercado</text><rect x="136" y="28" width="114" height="144" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="193" y="44.9" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">Liberalismo</text><text x="193" y="66.6" text-anchor="middle" font-size="9.5" >el trabajo crea</text><text x="193" y="77.5" text-anchor="middle" font-size="9.5" >riqueza</text><text x="193" y="101.6" text-anchor="middle" font-size="9.5" >libre comercio</text><text x="193" y="131.1" text-anchor="middle" font-size="9.5" >Estado mínimo</text><text x="193" y="160.6" text-anchor="middle" font-size="9.5" >«mano invisible»</text></g></svg>`,
    },
    {
      html: `<h3>1.10 El despotismo ilustrado</h3><p>Algunos monarcas europeos se sintieron atraídos por las ideas ilustradas, pero solo por las que les permitían gobernar mejor sin perder poder. Así nació el <mark>despotismo ilustrado</mark>, resumido en la frase «todo para el pueblo, pero sin el pueblo». Los reyes impulsaron reformas para modernizar la economía, la educación o la administración y aumentar los ingresos del Estado, pero sin tocar el absolutismo ni la sociedad estamental.</p><p>Los ejemplos más conocidos son Federico II de Prusia, que se carteaba con Voltaire; Catalina II de Rusia, que compró la biblioteca de Diderot; José II de Austria, que abolió la servidumbre y decretó la tolerancia religiosa; y Carlos III de España.</p><p>En España la dinastía <b>Borbón</b> llegó tras la <b>Guerra de Sucesión</b> (1701-1714), cuando Felipe V, nieto de Luis XIV, se impuso al archiduque Carlos de Austria. Como castigo a los territorios que habían apoyado a su rival, Felipe V promulgó los <b>Decretos de Nueva Planta</b>, que suprimieron las instituciones y leyes propias de la Corona de Aragón (salvo el derecho civil) e impusieron un modelo centralizado al estilo francés. El 11 de septiembre de 1714, caída de Barcelona, es hoy la Diada de Cataluña.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Reyes Borbones del siglo XVIII en España y sus medidas">
    <rect width="260" height="180" rx="14" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif"><rect x="14" y="21" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><rect x="14" y="21" width="80" height="30" rx="8" fill="var(--red)"/><text x="54" y="40" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Felipe V</text><text x="102" y="40" font-size="10.5" fill="var(--ink)">Nueva Planta, centralismo</text><rect x="14" y="55" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><rect x="14" y="55" width="80" height="30" rx="8" fill="var(--leaf)"/><text x="54" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Fernando VI</text><text x="102" y="74" font-size="11.5" fill="var(--ink)">catastro de Ensenada</text><rect x="14" y="89" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><rect x="14" y="89" width="80" height="30" rx="8" fill="var(--pen)"/><text x="54" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Carlos III</text><text x="102" y="108" font-size="11.5" fill="var(--ink)">reformas ilustradas</text><rect x="14" y="123" width="232" height="30" rx="8" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><rect x="14" y="123" width="80" height="30" rx="8" fill="var(--muted)"/><text x="54" y="142" text-anchor="middle" font-size="11.5" font-weight="700" fill="#fff">Carlos IV</text><text x="102" y="142" font-size="9.5" fill="var(--ink)">crisis y Revolución francesa</text></g>
  </svg>`,
      video: {
        id: "iUMGwuQE0bU",
        titulo: "El despotismo ilustrado en España: resumen en 5 minutos",
        canal: "Clases Particulares en Ávila",
        vistas: 120325,
        megusta: 0,
      },
    },
    {
      html: `<h3>1.11 Carlos III y los ilustrados españoles</h3><p><b>Carlos III</b> (1759-1788), que antes había sido rey de Nápoles, es el gran ejemplo de despotismo ilustrado en España. Con ministros como Campomanes, Floridablanca y Aranda, y más tarde con pensadores como <b>Jovellanos</b>, intentó modernizar el país.</p><p>Mejoró Madrid, que pasó a ser una capital digna: alumbrado, empedrado, recogida de basuras, el Jardín Botánico, el actual Museo del Prado (pensado como gabinete de ciencias) y la Puerta de Alcalá; por eso se le llamó «el mejor alcalde de Madrid». Fundó las <b>Sociedades Económicas de Amigos del País</b>, que difundían técnicas agrícolas e industriales; creó reales fábricas (tapices, cristal, porcelana); liberalizó el comercio con América (1778) y repobló Sierra Morena con colonos alemanes y flamencos.</p><p>Las reformas tuvieron límites. El <mark>motín de Esquilache</mark> (1766), provocado por la subida del pan y por una orden que prohibía las capas largas y los sombreros de ala ancha, obligó al rey a destituir a su ministro. Carlos III culpó a los jesuitas y los expulsó en 1767. La nobleza y el clero frenaron cualquier cambio que tocara sus privilegios, y la mayoría de la población siguió sin acceso a la educación.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Línea del tiempo: Carlos III"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><path d="M14 98 H 246" stroke="var(--ink)" stroke-width="3"/><circle cx="28" cy="98" r="6" fill="var(--pen)"/><path d="M28 92 V 78" stroke="var(--pen)" stroke-width="2"/><text x="47.35" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1759</text><text x="47.35" y="51.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">llega al trono</text><circle cx="79" cy="98" r="6" fill="var(--red)"/><path d="M79 104 V 118" stroke="var(--red)" stroke-width="2"/><text x="79" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1766</text><text x="79" y="147.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">motín de</text><text x="79" y="158.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">Esquilache</text><circle cx="130" cy="98" r="6" fill="var(--leaf)"/><path d="M130 92 V 78" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1767</text><text x="130" y="45.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">expulsión de</text><text x="130" y="56.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">jesuitas</text><circle cx="181" cy="98" r="6" fill="var(--sun)"/><path d="M181 104 V 118" stroke="var(--sun)" stroke-width="2"/><text x="181" y="132.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1778</text><text x="181" y="147.9" text-anchor="middle" font-size="9.5" fill="var(--muted)">libre comercio</text><text x="181" y="158.8" text-anchor="middle" font-size="9.5" fill="var(--muted)">con América</text><circle cx="232" cy="98" r="6" fill="var(--inf)"/><path d="M232 92 V 78" stroke="var(--inf)" stroke-width="2"/><text x="212.65" y="72.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">1788</text><text x="212.65" y="51.3" text-anchor="middle" font-size="9.5" fill="var(--muted)">muere el rey</text></g></svg>`,
    },
    {
      html: `<h3>1.12 Del Antiguo Régimen a las revoluciones</h3><p>A finales del siglo XVIII el Antiguo Régimen mostraba grietas profundas. La población crecía, pero también los precios; las monarquías se endeudaban con guerras cada vez más caras; la burguesía, enriquecida por el comercio, se sentía excluida del poder; y los campesinos soportaban rentas e impuestos cada vez más pesados.</p><p>Las ideas ilustradas ofrecían una alternativa completa: <b>soberanía nacional</b> en lugar de derecho divino, <b>división de poderes</b> en lugar de absolutismo, <b>igualdad ante la ley</b> en lugar de privilegios, <b>libertad económica</b> en lugar de gremios y aranceles, y <b>derechos individuales</b> que ningún gobierno podía violar. Esas ideas circularon en libros, periódicos, salones literarios, cafés y logias, y cruzaron el Atlántico.</p><p>El despotismo ilustrado había demostrado que no bastaba con reformas «desde arriba». En 1776 los colonos de Norteamérica proclamaron su independencia citando a Locke, y en 1789 los franceses iniciaron una revolución que acabaría con el rey y los privilegios. Se abría la <mark>época de las revoluciones liberales</mark>, que transformaría Europa y América durante el siglo XIX. La Ilustración es, por tanto, el puente entre el mundo moderno y el contemporáneo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Por qué cayó el Antiguo Régimen: deudas de la monarquía y crisis económica → burguesía rica pero sin poder político → ideas ilustradas: razón, libertad, igualdad → revoluciones liberales (1776, 1789)"><rect width="260" height="180" rx="14" fill="var(--paper)"/><g font-family="Atkinson Hyperlegible, sans-serif" fill="var(--ink)"><text x="130" y="20.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Baloo 2, sans-serif">Por qué cayó el Antiguo Régimen</text><rect x="30" y="28.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/><text x="130" y="39.9" text-anchor="middle" font-size="10.5" >deudas de la monarquía y crisis</text><text x="130" y="52.0" text-anchor="middle" font-size="10.5" >económica</text><path d="M130 57.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="66.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="78.4" text-anchor="middle" font-size="10.5" >burguesía rica pero sin poder</text><text x="130" y="90.5" text-anchor="middle" font-size="10.5" >político</text><path d="M130 96.0 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="105.0" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="130" y="116.9" text-anchor="middle" font-size="10.5" >ideas ilustradas: razón,</text><text x="130" y="129.0" text-anchor="middle" font-size="10.5" >libertad, igualdad</text><path d="M130 134.5 v 7 m -4 -4 l 4 4 l 4 -4" stroke="var(--muted)" stroke-width="2" fill="none"/><rect x="30" y="143.5" width="200" height="28.5" rx="8" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/><text x="130" y="155.4" text-anchor="middle" font-size="10.5" >revoluciones liberales (1776,</text><text x="130" y="167.5" text-anchor="middle" font-size="10.5" >1789)</text></g></svg>`,
    },
  ],
  figura: {
    titulo: "Del Antiguo Régimen a las ideas ilustradas",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Tres columnas: economía, sociedad y política en el Antiguo Régimen frente a la propuesta ilustrada">
    <rect width="680" height="200" rx="16" fill="var(--paper)"/>
    <g font-family="Atkinson Hyperlegible, sans-serif" text-anchor="middle">
    <rect x="20" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/><rect x="20" y="16" width="204" height="36" rx="12" fill="var(--leaf)"/><text x="122" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Economía</text><text x="122" y="76" font-size="13" fill="var(--ink)">agraria y de subsistencia</text><text x="122" y="100" font-size="13" fill="var(--ink)">señoríos y diezmo</text><text x="122" y="124" font-size="13" fill="var(--ink)">gremios artesanos</text><text x="122" y="148" font-size="13" fill="var(--ink)">→ ilustrados: libre</text><text x="122" y="172" font-size="13" fill="var(--ink)">comercio (Adam Smith)</text><rect x="238" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--sun)" stroke-width="2.5"/><rect x="238" y="16" width="204" height="36" rx="12" fill="var(--sun)"/><text x="340" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Sociedad</text><text x="340" y="76" font-size="13" fill="var(--ink)">estamental</text><text x="340" y="100" font-size="13" fill="var(--ink)">privilegios por nacer</text><text x="340" y="124" font-size="13" fill="var(--ink)">nobleza y clero exentos</text><text x="340" y="148" font-size="13" fill="var(--ink)">→ ilustrados: igualdad</text><text x="340" y="172" font-size="13" fill="var(--ink)">ante la ley</text><rect x="456" y="16" width="204" height="168" rx="12" fill="var(--card)" stroke="var(--red)" stroke-width="2.5"/><rect x="456" y="16" width="204" height="36" rx="12" fill="var(--red)"/><text x="558" y="40" font-size="15" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">Política</text><text x="558" y="76" font-size="13" fill="var(--ink)">monarquía absoluta</text><text x="558" y="100" font-size="13" fill="var(--ink)">derecho divino</text><text x="558" y="124" font-size="13" fill="var(--ink)">rey con los 3 poderes</text><text x="558" y="148" font-size="13" fill="var(--ink)">→ ilustrados: división</text><text x="558" y="172" font-size="13" fill="var(--ink)">de poderes, soberanía</text>
    </g>
  </svg>`,
  },
  video: {
    id: "UVmS_dWcWEk",
    titulo: "La Ilustración: resumen. Las ideas de Voltaire, Montesquieu, Rousseau…",
    canal: "Cuaderno de Historia",
    vistas: 1114376,
    megusta: 22005,
    busqueda: "antiguo régimen e ilustración resumen",
  },
  ejemplos: [
    {
      enunciado: `Clasifica a estas personas en su estamento: un obispo, un rico comerciante de Cádiz, un duque y un campesino de Castilla.`,
      pasos: [
        "El obispo es miembro del clero, estamento privilegiado.",
        "El duque es noble, estamento privilegiado.",
        "El comerciante es rico, pero no noble ni clérigo: pertenece al tercer estado.",
        "El campesino también es del tercer estado.",
      ],
      resultado: "Privilegiados: obispo y duque. Tercer estado: comerciante y campesino.",
    },
    {
      enunciado: `Explica qué falla en la frase de Luis XIV «El Estado soy yo» desde la teoría de Montesquieu.`,
      pasos: [
        "Luis XIV concentra en su persona todo el poder: hace las leyes, las aplica y juzga.",
        "Montesquieu defiende separar el poder legislativo, el ejecutivo y el judicial.",
        "Si un solo órgano tiene los tres, nadie lo controla y puede abusar.",
      ],
      resultado: "La frase resume el absolutismo, justo lo que la división de poderes quiere evitar.",
    },
    {
      enunciado: `Ordena cronológicamente: Enciclopedia (1751), Revolución Gloriosa (1688), Carlos III llega al trono (1759), La riqueza de las naciones (1776).`,
      pasos: ["El más antiguo es 1688.", "Siguen 1751 y 1759.", "El último es 1776."],
      resultado: "Revolución Gloriosa → Enciclopedia → Carlos III → La riqueza de las naciones.",
    },
    {
      enunciado: "Comenta el lema «todo para el pueblo, pero sin el pueblo».",
      pasos: [
        "Localiza: resume el despotismo ilustrado del siglo XVIII.",
        `«Todo para el pueblo»: el rey hace reformas para el bienestar, como obras públicas, academias o agricultura.`,
        "«Sin el pueblo»: el pueblo no participa en las decisiones; el rey sigue siendo absoluto.",
        "Contrasta con Rousseau: para él la soberanía es del pueblo, justo lo contrario.",
      ],
      resultado: `El lema muestra la contradicción del despotismo ilustrado: acepta la razón para reformar, pero no la soberanía nacional ni la división de poderes.`,
    },
    {
      enunciado: "Explica por qué la burguesía apoyó la Ilustración usando tres ideas ilustradas concretas.",
      pasos: [
        `Igualdad ante la ley: acabaría con los privilegios de nobleza y clero y con los impuestos que solo pagaba el tercer estado.`,
        "Liberalismo económico: suprimiría gremios y trabas, y favorecería sus negocios.",
        "Soberanía nacional y parlamento: les daría participación en el poder político.",
        "Conclusión: la Ilustración convertía en derechos sus intereses.",
      ],
      resultado: `La burguesía apoyó la Ilustración porque sus ideas eliminaban los obstáculos a su ascenso social, económico y político.`,
    },
    {
      enunciado: "Compara el sistema político de Francia e Inglaterra hacia 1750.",
      pasos: [
        `Francia: monarquía absoluta; el rey concentra los tres poderes; los Estados Generales no se reúnen desde 1614.`,
        "Inglaterra: monarquía parlamentaria desde 1689; el Parlamento aprueba impuestos y leyes.",
        `Semejanza: ambos son monarquías con una sociedad desigual; en Inglaterra solo vota una minoría de propietarios.`,
        `Consecuencia: los ilustrados franceses, como Montesquieu y Voltaire, tomaron Inglaterra como modelo.`,
      ],
      resultado: `Francia representa el absolutismo y Inglaterra la monarquía limitada por el Parlamento, modelo para los ilustrados.`,
    },
  ],
  errores: [
    "Pensar que la burguesía era privilegiada por ser rica: pertenecía al tercer estado.",
    `Confundir monarquía absoluta y despotismo ilustrado: el déspota ilustrado sigue teniendo todo el poder.`,
    "Atribuir la división de poderes a Rousseau: es de Montesquieu.",
    "Creer que la Ilustración fue una revolución armada: fue un movimiento de ideas.",
    `Decir que en Inglaterra había absolutismo en el siglo XVIII: desde 1689 era una monarquía parlamentaria.`,
    `Pensar que todos los nobles eran ricos y todos los burgueses pobres: había hidalgos arruinados y burgueses más ricos que muchos nobles; lo que los separaba era el privilegio legal.`,
  ],
  ejercicios: [
    {
      nivel: "básico",
      q: "Define estamento y di por qué no se podía cambiar de uno a otro con facilidad.",
      sol: `Grupo social al que se pertenece por nacimiento, con derechos y deberes distintos. La pertenencia la fijaba la ley y la sangre, no el dinero ni el mérito.`,
    },
    {
      nivel: "básico",
      q: "Enumera tres privilegios de la nobleza.",
      sol: `No pagar impuestos directos, ocupar los altos cargos del Estado y del ejército, y tener tribunales propios y señoríos.`,
    },
    {
      nivel: "básico",
      q: "¿Qué es una crisis de subsistencia?",
      sol: `Hambre provocada por una mala cosecha: sube el precio del pan, la gente come menos y aumentan las epidemias y las muertes.`,
    },
    {
      nivel: "básico",
      q: "Explica qué cambió en Inglaterra en 1689.",
      sol: `La Declaración de Derechos limitó al rey: necesitaba al Parlamento para crear impuestos y mantener un ejército. Nació la monarquía parlamentaria.`,
    },
    {
      nivel: "básico",
      q: "Relaciona cada autor con su idea: Voltaire, Rousseau, Montesquieu.",
      sol: `Voltaire: tolerancia y libertad de expresión. Rousseau: soberanía nacional. Montesquieu: división de poderes.`,
    },
    {
      nivel: "básico",
      q: "Explica qué significa «Antiguo Régimen» y quién inventó la expresión.",
      sol: `Es el sistema económico (agrario), social (estamental) y político (monarquía absoluta) de Europa entre los siglos XVI y XVIII. La expresión la usaron los revolucionarios franceses de 1789 para referirse al orden que querían destruir.`,
    },
    {
      nivel: "básico",
      q: "¿Qué eran los gremios y por qué los criticaban los ilustrados?",
      sol: `Asociaciones de maestros artesanos de un mismo oficio que fijaban precios, calidad, número de talleres y quién podía ejercer. Los ilustrados los criticaban porque frenaban la competencia, la libertad de trabajo y las innovaciones.`,
    },
    {
      nivel: "básico",
      q: "Define derecho divino de los reyes.",
      sol: `La teoría de que el poder del rey procede directamente de Dios, por lo que solo ante Dios responde y nadie en la tierra puede limitarlo ni juzgarlo.`,
    },
    {
      nivel: "básico",
      q: "¿Qué fue la Guerra de Sucesión española y quién la ganó?",
      sol: `La guerra (1701-1714) por el trono de España tras morir sin hijos Carlos II. Se enfrentaron Felipe de Borbón y el archiduque Carlos de Austria. Ganó Felipe V, primer Borbón español.`,
    },
    {
      nivel: "básico",
      q: "Cita tres monarcas del despotismo ilustrado y su país.",
      sol: `Federico II de Prusia, Catalina II de Rusia, José II de Austria y Carlos III de España (basta con tres).`,
    },
    {
      nivel: "básico",
      q: "¿Qué defendió Mary Wollstonecraft?",
      sol: `En «Vindicación de los derechos de la mujer» (1792) defendió que las mujeres tenían la misma capacidad racional que los hombres y debían recibir la misma educación y derechos.`,
    },
    {
      nivel: "básico",
      q: "¿Qué era la Enciclopedia y quiénes la dirigieron?",
      sol: `Una gran obra en muchos volúmenes publicada desde 1751 que reunía el saber de la época (ciencias, técnicas, artes) y difundía las ideas ilustradas. La dirigieron Diderot y D'Alembert.`,
    },
    {
      nivel: "medio",
      q: "¿Para qué sirvió la Enciclopedia?",
      sol: `Para reunir y difundir el conocimiento basado en la razón y la ciencia, y criticar la superstición y el absolutismo.`,
    },
    {
      nivel: "medio",
      q: "Compara mercantilismo y liberalismo económico.",
      sol: `El mercantilismo acumula metales preciosos y protege la industria con aranceles; el liberalismo pide libertad de comercio y que el Estado intervenga poco.`,
    },
    {
      nivel: "medio",
      q: "¿Qué significa «todo para el pueblo, pero sin el pueblo»?",
      sol: `Es el lema del despotismo ilustrado: el rey hace reformas para mejorar la vida del pueblo, pero sin darle participación política.`,
    },
    {
      nivel: "medio",
      q: "Cita dos reformas de Carlos III.",
      sol: `Por ejemplo, la liberalización del comercio con América (1778) y la creación de las Sociedades Económicas de Amigos del País; también mejoró Madrid.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué los burgueses apoyaron las ideas ilustradas?",
      sol: `Porque defendían la igualdad ante la ley, el mérito y la libertad económica, que les permitían prosperar sin depender de los privilegios de nacimiento.`,
    },
    {
      nivel: "medio",
      q: "Explica las causas y consecuencias de una crisis de subsistencia.",
      sol: `Causa: una mala cosecha por sequía, heladas o lluvias. Escasea el grano y sube el precio del pan. Consecuencias: hambre, debilitamiento, epidemias, aumento de la mortalidad y descenso de los nacimientos; a veces, motines. Muestra la fragilidad de una economía agraria de subsistencia.`,
    },
    {
      nivel: "medio",
      q: "¿Qué fueron los Decretos de Nueva Planta y por qué se aprobaron?",
      sol: `Leyes de Felipe V (1707-1716) que suprimieron las instituciones y leyes propias de Aragón, Valencia, Mallorca y Cataluña (salvo el derecho civil) e impusieron las de Castilla. Se aprobaron como castigo por haber apoyado al archiduque Carlos y para centralizar el Estado al modo francés.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué el ejemplo de Newton inspiró a los ilustrados?",
      sol: `Newton explicó el universo con leyes racionales y matemáticas. Los ilustrados pensaron que, igual que la naturaleza, la sociedad, la economía y la política podían estudiarse con la razón para descubrir leyes y mejorarlas: de ahí su fe en el progreso.`,
    },
    {
      nivel: "medio",
      q: "Explica qué es el mayorazgo y qué efecto tenía sobre la economía.",
      sol: `Institución que vinculaba las tierras de una familia noble para que pasaran enteras al hijo mayor y no se pudieran vender ni dividir. Mantenía mucha tierra fuera del mercado, en manos de quienes no siempre la explotaban bien, lo que frenaba la modernización agraria.`,
    },
    {
      nivel: "medio",
      q: `Lee: «Si el poder de hacer las leyes y el de ejecutarlas estuvieran en la misma persona, no habría libertad». ¿Quién lo dijo y qué propone?`,
      sol: `Es una idea de Montesquieu (El espíritu de las leyes, 1748). Propone la división de poderes: legislativo, ejecutivo y judicial en manos distintas para que el poder frene al poder y se evite la tiranía.`,
    },
    {
      nivel: "medio",
      q: "¿Por qué el motín de Esquilache muestra los límites del despotismo ilustrado?",
      sol: `Porque las reformas impuestas desde arriba, sin contar con la población y en un momento de subida del pan, provocaron una revuelta que obligó al rey a ceder y destituir al ministro. Además, sectores privilegiados aprovecharon el malestar para frenar las reformas.`,
    },
    {
      nivel: "medio",
      q: `Relaciona cada concepto con un autor: voluntad general, mano invisible, derechos naturales, tolerancia.`,
      sol: `Voluntad general: Rousseau. Mano invisible: Adam Smith. Derechos naturales: Locke. Tolerancia: Voltaire.`,
    },
    {
      nivel: "medio",
      q: `Explica la diferencia entre monarquía absoluta y monarquía parlamentaria con un ejemplo de cada una en el siglo XVIII.`,
      sol: `Absoluta: el rey concentra los tres poderes y no rinde cuentas (Francia de Luis XV, España de Carlos III). Parlamentaria: el poder del rey está limitado por la ley y un Parlamento que aprueba impuestos y leyes (Gran Bretaña desde 1689).`,
    },
    {
      nivel: "avanzado",
      q: `Rousseau escribió: «El hombre nace libre y, sin embargo, vive en todas partes encadenado». Explica la frase y relaciónala con la sociedad estamental.`,
      sol: `Rousseau cree que por naturaleza todos somos libres e iguales, pero las instituciones sociales, como los privilegios, la propiedad desigual o los reyes absolutos, nos someten. En la sociedad estamental el nacimiento fijaba los derechos de cada uno: era la «cadena» que impedía la libertad. Propone un contrato social en el que la soberanía sea del pueblo.`,
    },
    {
      nivel: "avanzado",
      q: `Compara la Declaración de Derechos inglesa (1689) con la división de poderes de Montesquieu. ¿En qué se parecen y en qué no?`,
      sol: `Se parecen en que ambas limitan el poder del rey y dan un papel al Parlamento (impuestos, leyes, ejército). La Declaración es un texto legal concreto, fruto de una revolución, que no habla de un poder judicial independiente ni de soberanía nacional; Montesquieu elabora una teoría general, inspirada en Inglaterra, con tres poderes separados y equilibrados.`,
    },
    {
      nivel: "avanzado",
      q: "¿Fue Carlos III un rey ilustrado o un rey absoluto? Argumenta las dos posturas y concluye.",
      sol: `Ilustrado: reformas económicas, urbanas, científicas y educativas inspiradas en la razón; ministros ilustrados. Absoluto: no convocó Cortes, mantuvo los estamentos y concentró todos los poderes, y expulsó a los jesuitas por decisión propia. Conclusión: fue ambas cosas a la vez; eso es precisamente el despotismo ilustrado.`,
    },
    {
      nivel: "avanzado",
      q: "Elige tres derechos que disfrutas hoy y explica qué idea ilustrada está en su origen.",
      sol: `Ejemplos: libertad religiosa (Voltaire, tolerancia); votar en elecciones (Rousseau, soberanía nacional); igualdad ante la ley (crítica ilustrada a los privilegios); juicio con jueces independientes (Montesquieu); libertad de expresión y de prensa (crítica a la censura); educación pública (fe ilustrada en la educación).`,
    },
    {
      nivel: "avanzado",
      q: `¿Por qué la Ilustración puede considerarse un puente entre la Edad Moderna y la Contemporánea?`,
      sol: `Porque nace en el Antiguo Régimen (siglo XVIII), pero sus ideas, como la soberanía nacional, la división de poderes, la igualdad ante la ley, los derechos individuales y el libre mercado, son las que aplicarán las revoluciones liberales de 1776 y 1789, que abren la Edad Contemporánea.`,
    },
    {
      nivel: "avanzado",
      q: `Argumenta si la Ilustración fue un movimiento igualitario de verdad. Piensa en mujeres, campesinos y personas esclavizadas.`,
      sol: `Fue igualitario frente a los privilegios estamentales, pero limitado: casi todos los ilustrados excluyeron a las mujeres de la ciudadanía; muchos desconfiaban del pueblo llano y preferían el voto de los propietarios; y aunque algunos criticaron la esclavitud, esta siguió siendo legal y muy rentable. Sus principios, sin embargo, sirvieron después para reclamar la igualdad de esos grupos.`,
    },
    {
      nivel: "avanzado",
      q: "Escribe un diálogo breve entre un noble y un burgués en 1785 sobre los impuestos.",
      sol: `Ejemplo: Burgués: «Mi negocio da trabajo a cien personas y pago más impuestos que nadie, mientras usted, con sus tierras, no paga nada». Noble: «Mis antepasados sirvieron al rey con la espada; el privilegio es justo y natural». Burgués: «Lo natural, dicen los filósofos, es que todos seamos iguales ante la ley y paguemos según nuestra riqueza». El diálogo debe reflejar privilegio frente a mérito e igualdad.`,
    },
  ],
  quiz: [
    {
      q: "¿Qué estamentos eran privilegiados en el Antiguo Régimen?",
      o: [
        "La burguesía y los campesinos",
        "El rey y los gremios",
        "La nobleza y el clero",
        "Los artesanos y el clero",
      ],
      a: 2,
      e: "Nobleza y clero no pagaban la mayoría de impuestos y tenían leyes y tribunales propios.",
    },
    {
      q: "En una monarquía absoluta, el rey…",
      o: [
        "obedece a las Cortes",
        "comparte el poder con el Parlamento",
        "concentra los poderes legislativo, ejecutivo y judicial",
        "es elegido por el pueblo",
      ],
      a: 2,
      e: "El rey absoluto hacía las leyes, gobernaba y juzgaba, y decía recibir el poder de Dios.",
    },
    {
      q: "¿Quién propuso la división de poderes?",
      o: ["Montesquieu", "Voltaire", "Luis XIV", "Rousseau"],
      a: 0,
      e: "Montesquieu la expuso en «El espíritu de las leyes» (1748).",
    },
    {
      q: "«Todo para el pueblo, pero sin el pueblo» resume…",
      o: ["la monarquía parlamentaria", "la democracia", "el feudalismo", "el despotismo ilustrado"],
      a: 3,
      e: `Los déspotas ilustrados hacían reformas para mejorar el país, pero sin dejar participar al pueblo.`,
    },
    {
      q: "¿Qué país tenía ya una monarquía parlamentaria en el siglo XVIII?",
      o: ["España", "Prusia", "Gran Bretaña", "Francia"],
      a: 2,
      e: "Desde la revolución de 1688-1689 el Parlamento británico limitaba el poder del rey.",
    },
    {
      q: "¿Qué porcentaje aproximado de la población formaba el tercer estado?",
      o: ["≈ 70 %", "≈ 50 %", "≈ 95 %", "≈ 10 %"],
      a: 2,
      e: "Era la inmensa mayoría.",
    },
    {
      q: "La Revolución Gloriosa tuvo lugar en…",
      o: ["Francia, 1789", "Inglaterra, 1688", "España, 1766", "Austria, 1714"],
      a: 1,
      e: "Dio paso a la monarquía parlamentaria inglesa.",
    },
    {
      q: "¿Quién escribió La riqueza de las naciones?",
      o: ["Adam Smith", "Locke", "Voltaire", "Diderot"],
      a: 0,
      e: "Publicada en 1776, funda el liberalismo económico.",
    },
    {
      q: "El motín de Esquilache ocurrió durante el reinado de…",
      o: ["Felipe V", "Carlos IV", "Carlos III", "Fernando VII"],
      a: 2,
      e: "Fue en 1766, en Madrid.",
    },
    {
      q: "Los gremios eran…",
      o: ["monasterios", "asociaciones de artesanos de un oficio", "bancos", "partidos políticos"],
      a: 1,
      e: "Controlaban precios, calidad y acceso al oficio.",
    },
    {
      q: "¿Qué era una crisis de subsistencia?",
      o: [
        "Una bancarrota del rey",
        "Hambre y mortalidad tras una mala cosecha",
        "Una guerra de religión",
        "La quiebra de un gremio",
      ],
      a: 1,
      e: "Una mala cosecha encarecía el pan y provocaba hambre y epidemias.",
    },
    {
      q: "La burguesía en el Antiguo Régimen…",
      o: [
        "era un estamento privilegiado",
        "pertenecía al tercer estado",
        "formaba parte del clero",
        "no pagaba impuestos",
      ],
      a: 1,
      e: "Aunque fuera rica, era tercer estado y no tenía privilegios.",
    },
    {
      q: "El Rey Sol que construyó Versalles fue…",
      o: ["Luis XVI", "Luis XIV", "Felipe V", "Carlos I de Inglaterra"],
      a: 1,
      e: "Luis XIV (1643-1715) es el modelo de monarca absoluto.",
    },
    {
      q: "La Declaración de Derechos inglesa (1689) establecía que…",
      o: [
        "el rey era elegido por sufragio universal",
        "el rey no podía crear impuestos sin el Parlamento",
        "se abolía la monarquía",
        "la Iglesia gobernaba",
      ],
      a: 1,
      e: "Nació la monarquía parlamentaria.",
    },
    {
      q: "«Sapere aude» significa…",
      o: ["Obedece al rey", "Atrévete a saber", "Reza y trabaja", "Divide y vencerás"],
      a: 1,
      e: "Es el lema de la Ilustración según Kant.",
    },
    {
      q: "Para el liberalismo económico de Adam Smith, la fuente de la riqueza es…",
      o: ["el oro y la plata", "la tierra únicamente", "el trabajo", "las colonias"],
      a: 2,
      e: "Y la división del trabajo multiplica la productividad.",
    },
    {
      q: "Los fisiócratas pensaban que la riqueza procede de…",
      o: ["la industria", "la tierra", "el comercio colonial", "los metales preciosos"],
      a: 1,
      e: "Defendían la libertad agrícola y comercial.",
    },
    {
      q: "Los Decretos de Nueva Planta suprimieron las instituciones propias de…",
      o: ["Castilla", "la Corona de Aragón", "Navarra y el País Vasco", "América"],
      a: 1,
      e: "Castigaron a los territorios que apoyaron al archiduque Carlos.",
    },
    {
      q: "¿Qué rey expulsó a los jesuitas de España en 1767?",
      o: ["Felipe V", "Fernando VI", "Carlos III", "Carlos IV"],
      a: 2,
      e: "Los culpó del motín de Esquilache.",
    },
    {
      q: "En la división de poderes, el poder que hace las leyes es…",
      o: ["el ejecutivo", "el judicial", "el legislativo", "el militar"],
      a: 2,
      e: "Corresponde al parlamento; el ejecutivo gobierna y el judicial juzga.",
    },
  ],
  examen: [
    {
      q: "Rousseau defendió que la soberanía reside en…",
      o: ["el rey", "la nación o el pueblo", "la Iglesia", "los gremios"],
      a: 1,
      e: "Para Rousseau el poder legítimo nace de la voluntad general del pueblo.",
    },
    {
      q: "Los Decretos de Nueva Planta de Felipe V…",
      o: [
        "crearon el Parlamento",
        "suprimieron los fueros de la Corona de Aragón y centralizaron el Estado",
        "dividieron Castilla en provincias",
        "abolieron los privilegios de la nobleza",
      ],
      a: 1,
      e: `Tras la Guerra de Sucesión, Felipe V impuso las leyes e instituciones de Castilla en los territorios de la Corona de Aragón (salvo Navarra y el País Vasco).`,
    },
    {
      q: "La «Enciclopedia» de Diderot y D'Alembert servía para…",
      o: [
        "difundir el saber y las ideas ilustradas",
        "recaudar el diezmo",
        "defender el absolutismo",
        "registrar los impuestos",
      ],
      a: 0,
      e: "Reunía el conocimiento de la época con un enfoque racional y crítico.",
    },
    {
      q: "¿Qué porcentaje aproximado de la población vivía del campo?",
      o: ["20 %", "50 %", "80 %", "99 %"],
      a: 2,
      e: "Era una economía agraria de subsistencia.",
    },
    {
      q: "Locke defendía que el gobierno nace de…",
      o: ["la voluntad de Dios", "un pacto con los ciudadanos", "la conquista militar", "la herencia familiar"],
      a: 1,
      e: "Si el gobierno viola los derechos naturales, el pueblo puede sustituirlo.",
    },
    {
      q: "La Guerra de Sucesión española terminó en…",
      o: ["1588", "1714", "1789", "1808"],
      a: 1,
      e: "Con la llegada definitiva de los Borbones.",
    },
    {
      q: "¿Qué obra escribió Rousseau?",
      o: ["El espíritu de las leyes", "El contrato social", "La riqueza de las naciones", "Cándido"],
      a: 1,
      e: "Publicada en 1762.",
    },
    {
      q: "Las Sociedades Económicas de Amigos del País servían para…",
      o: ["cobrar impuestos", "difundir mejoras técnicas y económicas", "elegir diputados", "perseguir herejes"],
      a: 1,
      e: "Fueron una iniciativa ilustrada de Carlos III.",
    },
  ],
  feynman: [
    "Cómo era la sociedad estamental y quién pagaba impuestos",
    "Qué diferencia una monarquía absoluta de una parlamentaria",
    "Las ideas de Locke, Montesquieu, Rousseau y Voltaire",
    "Qué es el despotismo ilustrado y un ejemplo en España",
  ],
  mapa: `<svg viewBox="0 0 700 300" role="img" aria-label="Mapa mental: ANTIGUO RÉGIMEN">
    <g font-family="Atkinson Hyperlegible, sans-serif" font-size="15">
      <g stroke="var(--line)" stroke-width="3"><path d="M350 150 L 140 60"/><path d="M350 150 L 560 60"/><path d="M350 150 L 140 240"/><path d="M350 150 L 560 240"/></g>
      <rect x="225" y="122" width="250" height="56" rx="28" fill="var(--soc, #c2410c)"/>
      <text x="350" y="157" text-anchor="middle" font-size="19.0" font-weight="700" fill="#fff" font-family="Baloo 2, sans-serif">ANTIGUO RÉGIMEN</text>
      <rect x="10" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/>
      <text x="140" y="56" text-anchor="middle" font-weight="700" fill="var(--leaf)">Economía</text>
      <text x="140" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">agraria · señoríos · gremios</text><rect x="430" y="34" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2"/>
      <text x="560" y="56" text-anchor="middle" font-weight="700" fill="var(--sun)">Sociedad</text>
      <text x="560" y="76" text-anchor="middle" fill="var(--ink)" font-size="13">estamentos y privilegios</text><rect x="10" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/>
      <text x="140" y="236" text-anchor="middle" font-weight="700" fill="var(--red)">Política</text>
      <text x="140" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">absolutismo · derecho divino</text><rect x="430" y="214" width="260" height="56" rx="10" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
      <text x="560" y="236" text-anchor="middle" font-weight="700" fill="var(--pen)">Ilustración</text>
      <text x="560" y="256" text-anchor="middle" fill="var(--ink)" font-size="13">razón · poderes · soberanía</text>
    </g></svg>`,
  tarjetas: [
    [
      "¿Qué es un estamento?",
      `Un grupo social cerrado al que se pertenece por nacimiento, con derechos y deberes propios.`,
    ],
    ["Tres poderes de Montesquieu", "Legislativo (hace leyes), ejecutivo (las aplica) y judicial (juzga)."],
    ["¿Qué defendía Locke?", "Los derechos naturales: vida, libertad y propiedad."],
    [
      "Despotismo ilustrado",
      "Reformas ilustradas hechas por reyes absolutos: «todo para el pueblo, pero sin el pueblo».",
    ],
    ["Rey ilustrado de España", "Carlos III (1759-1788)."],
    ["Crisis de subsistencia", "Hambre y mortalidad tras una mala cosecha."],
    ["Declaración de Derechos (1689)", "Limita al rey inglés y crea la monarquía parlamentaria."],
    ["Enciclopedia", "Obra de Diderot y D'Alembert que difundió el saber ilustrado."],
    ["Mercantilismo", "Doctrina que mide la riqueza por el oro acumulado y protege la industria con aranceles."],
    [
      "Revolución Gloriosa",
      "Inglaterra, 1688: el Parlamento sustituye a Jacobo II y nace la monarquía parlamentaria.",
    ],
    [
      "Decretos de Nueva Planta",
      "Felipe V suprime las instituciones de la Corona de Aragón y centraliza el Estado.",
    ],
    [
      "Motín de Esquilache",
      "Revuelta de Madrid (1766) por el precio del pan y la prohibición de capas y sombreros.",
    ],
  ],
  glosario: [
    ["Antiguo Régimen", "Sistema económico, social y político de Europa entre los siglos XVI y XVIII."],
    ["Estamento", "Grupo social cerrado al que se pertenece por nacimiento, con derechos propios."],
    ["Privilegio", "Derecho especial que la ley reconoce a un grupo, como no pagar ciertos impuestos."],
    ["Tercer estado", "Estamento no privilegiado: campesinos, artesanos y burguesía."],
    ["Señorío", "Territorio en el que un noble o eclesiástico cobraba rentas y ejercía cierto poder."],
    ["Gremio", "Asociación de artesanos de un oficio que controlaba precios, calidad y producción."],
    ["Crisis de subsistencia", "Hambre y mortalidad provocadas por una mala cosecha."],
    ["Monarquía absoluta", "Sistema en el que el rey concentra todos los poderes sin control."],
    ["Monarquía parlamentaria", "Monarquía en la que el poder del rey está limitado por la ley y un Parlamento."],
    ["Ilustración", "Movimiento intelectual del siglo XVIII basado en la razón, la ciencia y el progreso."],
    ["Soberanía nacional", "Principio según el cual el poder supremo reside en la nación, no en el rey."],
    ["División de poderes", "Separación de los poderes legislativo, ejecutivo y judicial en manos distintas."],
    ["Mercantilismo", "Doctrina económica que identifica la riqueza con los metales preciosos acumulados."],
    ["Liberalismo económico", "Doctrina que defiende el libre mercado y la mínima intervención del Estado."],
    [
      "Despotismo ilustrado",
      `Absolutismo que aplica reformas ilustradas sin ceder poder: «todo para el pueblo, pero sin el pueblo».`,
    ],
    ["Mayorazgo", "Vinculación de los bienes de una familia para que pasen enteros al primogénito."],
  ],
  situacion: {
    titulo: "El salón ilustrado de nuestra clase",
    reto: `Es 1770 y vuestra clase organiza un salón literario, como los de París o Madrid. Cada grupo representa a un ilustrado y debe convencer a los demás de que su idea es la más necesaria para reformar el reino. Al final, el salón redactará un «Memorial de reformas» dirigido al rey.`,
    pasos: [
      `Formad grupos y sortead un pensador: Locke, Montesquieu, Voltaire, Rousseau, Adam Smith o Mary Wollstonecraft.`,
      "Investigad su vida, su obra principal y su idea clave; buscad una cita breve y explicadla.",
      `Preparad un discurso de 2 minutos en primera persona que critique un rasgo del Antiguo Régimen y proponga una reforma.`,
      "Celebrad el salón: discursos, preguntas entre grupos y defensa de las ideas.",
      `Redactad juntos el Memorial con las cinco reformas más votadas y explicad cuáles existen hoy en la Constitución de 1978.`,
    ],
    producto: "Un Memorial de reformas ilustradas (una página) y los discursos de cada grupo.",
    evaluacion: [
      "Comprensión correcta de la idea del pensador y de su contexto.",
      `Uso de la cita y de vocabulario del tema (estamento, privilegio, soberanía, división de poderes).`,
      "Capacidad de argumentar y responder preguntas con respeto.",
      "Relación acertada entre las reformas propuestas y los derechos actuales.",
    ],
  },
  familias: [
    `Preguntad qué derechos actuales no existían en el siglo XVIII (votar, juicio justo, libertad de prensa).`,
    `Buscad en vuestra ciudad una calle, plaza o edificio dedicado a Carlos III o a un ilustrado.`,
    "Repasad las tarjetas del paso 6 dos minutos al día durante la semana.",
  ],
  profesores: {
    saberes: `Sociedades y territorios: el Antiguo Régimen, la Ilustración y el reformismo borbónico como origen del mundo contemporáneo (RD 217/2022, Geografía e Historia 4º).`,
    ideas: [
      `Lectura comparada de fragmentos de Montesquieu y Rousseau con artículos de la Constitución de 1978.`,
      "Dinámica de rol: el alumnado se reparte en estamentos y paga «impuestos» según su grupo.",
      "Línea de tiempo de los Borbones del siglo XVIII con una obra pública de cada reinado.",
    ],
  },
  fuentes: [
    {
      t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)",
      url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975",
    },
    { t: "Ilustración, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ilustraci%C3%B3n" },
  ],
  revisado: "2026-11-13",
};
