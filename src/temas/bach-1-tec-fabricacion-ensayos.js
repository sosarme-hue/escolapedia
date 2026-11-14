// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

module.exports = B.tema({
  titulo: "Fabricación y ensayos",
  minutos: 115,
  objetivos: [
    "Clasificar y describir los principales procesos de fabricación: moldeo, deformación, arranque de viruta, corte, fabricación aditiva y uniones",
    "Calcular parámetros de corte, tolerancias y ajustes sencillos",
    "Interpretar el ensayo de tracción y calcular dureza, resiliencia, alargamiento y estricción",
    "Aplicar normas de seguridad y criterios de sostenibilidad en el taller y en la industria",
  ],
  claves: ["moldeo", "forja", "torneado", "fresado", "impresión 3D", "CNC", "tolerancia", "ensayo de tracción", "dureza Brinell", "resiliencia", "ensayos no destructivos"],
  pregunta: {
    texto: "Una lata de refresco, el bloque de un motor y una prótesis de rodilla son metálicos. ¿Se fabrican de la misma manera?",
    respuesta: "No. La lata se hace por <b>deformación</b> de una chapa (embutición), el bloque del motor por <b>moldeo</b> (se vierte metal fundido en un molde) y la prótesis por <b>mecanizado</b> de precisión o por <b>fabricación aditiva</b>. Cada proceso se elige según la forma, el material, la precisión y el número de piezas. Y antes de usarlas, todas pasan <mark>ensayos</mark> que comprueban que cumplen.",
  },
  lectura: {
    titulo: "El tornillo que no se rompió",
    html: `<p>Cada año se fabrican en el mundo cientos de miles de millones de tornillos. Casi nadie piensa en ellos, salvo cuando uno falla. En la industria aeronáutica, un solo tornillo defectuoso puede obligar a revisar una flota entera de aviones. Por eso, detrás de cada lote hay una historia que no se ve: un alambre de acero laminado en caliente, trefilado en frío, cortado, estampado para formar la cabeza, laminado para crear la rosca, tratado térmicamente y recubierto contra la corrosión.</p>
    <p>Y después, ensayos. Algunas piezas del lote se estiran en una máquina de tracción hasta que se rompen; a otras se les clava una punta de diamante para medir su dureza; otras se golpean con un péndulo. Las que van a servicio se revisan con ultrasonidos o partículas magnéticas, que detectan grietas internas sin dañar la pieza.</p>
    <p>Fabricar bien no es solo dar forma: es conseguir que cada pieza tenga las medidas, la resistencia y la fiabilidad que el proyecto exige, al menor coste y con el menor impacto. En este tema conocerás los procesos que transforman un material en un producto y los ensayos que demuestran que ese producto es seguro.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Fabricación por moldeo",
      html: `<p>En el <b>moldeo</b>, el material se calienta hasta fundirlo (o se usa en estado pastoso) y se vierte en un <b>molde</b> con la forma de la pieza. Al solidificarse, conserva esa forma. Es el proceso más adecuado para piezas de formas complejas y huecas.</p>
      <ul><li><b>Moldeo en arena</b>: el molde se hace con arena compactada alrededor de un modelo y se rompe para sacar la pieza. Sirve para piezas grandes y series cortas (bloques de motor, bancadas).</li>
      <li><b>Moldeo en coquilla</b>: el molde es metálico y reutilizable. Mejor acabado y series más largas.</li>
      <li><b>Fundición a presión</b>: el metal (aluminio, zinc) se inyecta a alta presión en un molde de acero. Piezas precisas en grandes series, como carcasas.</li>
      <li><b>Microfusión o cera perdida</b>: se hace un modelo de cera, se recubre de cerámica y se funde la cera. Permite detalles muy finos (joyas, álabes de turbina, prótesis).</li></ul>
      <p>Con los <b>plásticos</b>, el moldeo más usado es la <mark>inyección</mark>: el granulado se funde en un cilindro con un husillo y se inyecta en un molde frío. Otros procesos son la <b>extrusión</b> (perfiles y tubos continuos), el <b>soplado</b> (botellas), el <b>termoconformado</b> (bandejas a partir de una lámina caliente) y el <b>calandrado</b> (láminas finas entre rodillos).</p>`,
      svg: B.flujo("Pasos del moldeo por inyección de plásticos", ["Granulado en la tolva", "Fusión en el cilindro", "Inyección en el molde", "Enfriamiento", "Expulsión de la pieza"], { t: "Inyección de plásticos" }),
      video: { id: "vf7Yb0LrDic", titulo: "Los plásticos: procesos de fabricación (inyección, extrusión, soplado)", canal: "Christian Arevalo", vistas: 508852 },
    },
    {
      h: "Fabricación por deformación",
      html: `<p>En la <b>conformación por deformación</b>, el material se deforma plásticamente en estado sólido, sin fundirlo y sin quitarle material. Aprovecha la ductilidad y la maleabilidad de los metales. Se puede trabajar <b>en caliente</b>, por encima de la temperatura de recristalización, cuando el metal es más blando, o <b>en frío</b>, con mejor acabado y precisión y endureciendo el material por acritud.</p>
      <ul><li><b>Laminación</b>: el metal pasa entre rodillos que reducen su espesor. Produce chapas, perfiles y raíles.</li>
      <li><b>Forja</b>: se golpea o prensa el metal caliente. Las piezas forjadas (cigüeñales, llaves) son muy resistentes porque las fibras del material siguen la forma de la pieza.</li>
      <li><b>Estampación</b>: forja con matrices que tienen la forma de la pieza.</li>
      <li><b>Extrusión</b>: el metal se empuja a través de una boquilla con la forma del perfil (perfiles de aluminio de ventanas).</li>
      <li><b>Trefilado</b>: se estira un alambre a través de hileras cada vez más estrechas para reducir su diámetro.</li>
      <li><b>Embutición</b>: una chapa se presiona con un punzón dentro de una matriz para formar piezas huecas (latas, fregaderos, carrocerías).</li>
      <li><b>Doblado</b> y <b>curvado</b> de chapas y tubos.</li></ul>
      <p>Estos procesos casi no generan residuos y son muy rápidos en grandes series, pero las matrices y prensas son caras.</p>`,
      svg: B.cajas("Procesos de conformación por deformación", [["Laminación", "rodillos|chapas, perfiles"], ["Forja", "golpes en caliente|cigüeñales"], ["Extrusión", "boquilla|perfiles Al"], ["Embutición", "punzón y matriz|latas"]], { t: "Conformación por deformación" }),
    },
    {
      h: "Fabricación por arranque de viruta",
      html: `<p>En el <b>mecanizado</b> o arranque de viruta, una herramienta más dura que la pieza corta pequeñas porciones de material (virutas) hasta conseguir la forma y las medidas deseadas. Es preciso y versátil, pero desperdicia material y es más lento que el moldeo o la deformación. Las máquinas principales son:</p>
      <ul><li><b>Torno</b>: la pieza gira y la herramienta avanza. Produce piezas de revolución: ejes, casquillos, roscas.</li>
      <li><b>Fresadora</b>: gira la herramienta (fresa), con varios filos, y la pieza avanza. Superficies planas, ranuras, engranajes, cavidades.</li>
      <li><b>Taladradora</b>: hace agujeros con una broca.</li>
      <li><b>Rectificadora</b>: una muela abrasiva da el acabado final, con gran precisión.</li></ul>
      <p>Los <b>parámetros de corte</b> son la velocidad de corte, el avance y la profundidad de pasada. La <b>velocidad de corte</b> es la velocidad relativa entre el filo y la pieza:</p>
      <div class="formula"><span>v = π · D · n / 1000</span></div>
      <p>con v en m/min, D (diámetro) en mm y n en revoluciones por minuto. Cada pareja material-herramienta tiene una velocidad recomendada: si es excesiva, la herramienta se calienta y se desgasta; si es baja, el trabajo es lento y el acabado, peor. Los fluidos de corte (taladrinas) refrigeran y lubrican.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Torno: la pieza gira y la herramienta corta una viruta; fórmula de la velocidad de corte">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Torneado", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <rect x="24" y="52" width="26" height="70" rx="4" fill="var(--muted)"/><rect x="50" y="68" width="150" height="38" rx="4" fill="var(--pen)" opacity=".8"/>
        <path d="M140 64 a 26 10 0 1 1 0.1 0" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
        <path d="M150 128 L 168 106 L 186 128 Z" fill="var(--sun)"/><path d="M168 106 c 6 -10 18 -6 14 6 c -3 8 10 10 14 2" fill="none" stroke="var(--leaf)" stroke-width="2.5"/>
        ${B.tx(84, 46, "n (rpm)", { fs: 11, maxW: 60, bold: true, color: "var(--red)" })}${B.tx(206, 134, "viruta", { fs: 10.5, maxW: 50, bold: true, color: "var(--leaf)" })}
        ${B.tx(130, 162, "v = π · D · n / 1000", { fs: 14, maxW: 220, bold: true })}
      </svg>`,
    },
    {
      h: "Corte, fabricación aditiva y CNC",
      html: `<p>Hay procesos de <b>separación sin viruta</b>: el <b>punzonado</b> y el <b>cizallado</b> cortan chapa con herramientas, y el corte térmico o abrasivo usa <b>láser</b>, <b>plasma</b>, <b>oxicorte</b> o <b>chorro de agua</b> a muy alta presión con abrasivo, capaz de cortar casi cualquier material sin calentarlo.</p>
      <p>La <b>fabricación aditiva</b> construye la pieza <mark>capa a capa</mark> a partir de un modelo digital, sin moldes. Las tecnologías más comunes son:</p>
      <ul><li><b>FDM</b> (deposición de hilo fundido): una boquilla deposita un filamento de plástico (PLA, PETG, ABS). Barata y muy extendida.</li>
      <li><b>SLA</b> (estereolitografía): un láser o una pantalla solidifica una resina líquida con luz ultravioleta. Gran detalle.</li>
      <li><b>SLS</b> y <b>fusión de lecho de polvo metálico</b>: un láser sinteriza o funde polvo de plástico o de metal. Piezas funcionales, incluso de titanio.</li></ul>
      <p>Es ideal para prototipos, series cortas, piezas personalizadas y geometrías imposibles con otros procesos (estructuras internas en celosía), pero es lenta para grandes series. Las máquinas de <b>control numérico</b> (CNC) ejecutan un programa con las trayectorias de la herramienta, generado desde el modelo CAD mediante software <b>CAM</b>. La cadena <b>CAD → CAM → CNC</b> es la base de la fabricación digital y de la industria 4.0.</p>`,
      svg: B.flujo("Cadena de fabricación digital CAD, CAM y CNC", ["Modelo CAD 3D", "CAM: trayectorias", "Código G", "Máquina CNC o impresora 3D", "Pieza e inspección"], { t: "Fabricación digital" }),
    },
    {
      h: "Uniones fijas y desmontables",
      html: `<p>Casi ningún producto es de una sola pieza: hay que <b>unir</b> sus partes. Las uniones pueden ser <b>desmontables</b>, que se separan sin romper nada, o <b>fijas</b>, que solo se separan destruyendo algo.</p>
      <ul><li><b>Desmontables</b>: tornillos y tuercas, pernos, espárragos, pasadores, chavetas (unen ejes con poleas o engranajes), uniones a presión y clips. Facilitan el mantenimiento, la reparación y el reciclado.</li>
      <li><b>Fijas</b>: <b>remaches</b> (muy usados en aeronáutica), <b>adhesivos</b> estructurales (epoxi, cianoacrilato), uniones por engatillado o plegado, y <b>soldadura</b>.</li></ul>
      <p>En la <b>soldadura</b> se unen dos piezas fundiendo localmente sus bordes, con o sin material de aportación. La <b>soldadura blanda</b> (estaño, electrónica) y la <b>fuerte</b> (latón, plata) funden solo el material de aportación. En la <b>soldadura por fusión</b> se funden también las piezas: <b>oxiacetilénica</b>, <b>por arco eléctrico</b> con electrodo revestido, <b>MIG/MAG</b> (hilo continuo y gas protector) y <b>TIG</b> (electrodo de wolframio, de gran calidad para acero inoxidable y aluminio). La soldadura <b>por resistencia</b> (por puntos) une chapas de carrocería al pasar una corriente intensa.</p>
      <p>El ecodiseño prefiere las uniones desmontables, porque permiten separar materiales al final de la vida del producto.</p>`,
      svg: B.comparar("Uniones desmontables frente a uniones fijas", ["Desmontables", ["tornillos, tuercas", "chavetas, pasadores", "clips", "fácil reparación"]], ["Fijas", ["soldadura", "remaches", "adhesivos", "más estancas"]]),
    },
    {
      h: "Metrología, tolerancias y ajustes",
      html: `<p>Ninguna máquina fabrica dos piezas exactamente iguales. Por eso los planos indican, además de la <b>medida nominal</b>, una <b>tolerancia</b>: la diferencia entre la medida máxima y la mínima admisibles. Una cota 40 ± 0,05 mm admite piezas entre 39,95 y 40,05 mm; su tolerancia es 0,1 mm. Cuanto menor es la tolerancia, más precisa y cara es la fabricación.</p>
      <p>La norma ISO define las tolerancias con una letra y un número: la letra indica la posición (mayúscula para agujeros, minúscula para ejes) y el número, la <b>calidad</b> IT (más pequeño, más preciso). Cuando un eje entra en un agujero se forma un <b>ajuste</b>:</p>
      <ul><li><b>Con juego</b>: el eje siempre es menor que el agujero; gira o se desliza.</li>
      <li><b>Con apriete</b>: el eje siempre es mayor; se monta a presión o calentando el agujero, y no se mueve.</li>
      <li><b>Indeterminado</b>: según las piezas concretas, puede haber juego o apriete.</li></ul>
      <p>La <b>metrología</b> es la ciencia de la medida. En el taller se usan el <b>calibre</b> o pie de rey (precisión de 0,05 o 0,02 mm, gracias al nonio), el <b>micrómetro</b> (0,01 mm), los comparadores, los calibres pasa-no pasa y, en la industria, las máquinas de medir por coordenadas y los escáneres 3D.</p>`,
      svg: B.rejilla("Ajuste de un eje en un agujero: medidas máximas y mínimas", ["Pieza", "Máx.", "Mín."], [["Agujero", "20,021", "20,000"], ["Eje", "19,993", "19,980"], ["Juego máx.", "0,041", ""], ["Juego mín.", "0,007", ""]], { t: "Ajuste con juego (mm)" }),
    },
    {
      h: "Industria 4.0 y fabricación sostenible",
      html: `<p>La industria ha vivido varias revoluciones: la máquina de vapor, la electricidad y la producción en cadena, la automatización con autómatas y ordenadores, y ahora la <b>industria 4.0</b>. En ella, las máquinas están conectadas entre sí y con los sistemas de gestión mediante el <b>Internet de las cosas</b> (IoT). Los sensores registran en tiempo real temperatura, vibraciones o consumo; los datos se analizan para hacer <b>mantenimiento predictivo</b> (reparar antes de que algo falle) y se crean <b>gemelos digitales</b>, modelos virtuales de la fábrica en los que se simulan cambios antes de aplicarlos.</p>
      <p>Robots colaborativos (<b>cobots</b>) trabajan junto a las personas, la fabricación aditiva produce repuestos bajo demanda y la inteligencia artificial inspecciona piezas con visión artificial.</p>
      <p>La <b>fabricación sostenible</b> busca reducir materias primas, energía, agua, residuos y emisiones. Algunas estrategias son elegir procesos de forma casi final (<i>near net shape</i>), que generan poca viruta; reciclar virutas y retales; recuperar el calor de hornos; usar fluidos de corte biodegradables o mecanizado en seco; y aplicar la filosofía <b>lean</b>, que elimina actividades que no aportan valor, como el exceso de inventario o los transportes innecesarios.</p>`,
      svg: B.ciclo("Tecnologías de la industria 4.0", "4.0", ["IoT", "Gemelo digital", "Cobots", "Impresión 3D", "Datos e IA"]),
    },
    {
      h: "Seguridad en el taller",
      html: `<p>Los procesos de fabricación implican riesgos: cortes, atrapamientos con piezas que giran, proyección de virutas y chispas, quemaduras, ruido, humos de soldadura, descargas eléctricas y sobreesfuerzos. La <b>Ley de Prevención de Riesgos Laborales</b> obliga a evaluar esos riesgos y a aplicar medidas en un orden de prioridad:</p>
      <ol><li><b>Eliminar</b> el riesgo desde el diseño.</li>
      <li><b>Protecciones colectivas</b>: resguardos de las máquinas, paradas de emergencia, extracción de humos, señalización, orden y limpieza.</li>
      <li><b>Equipos de protección individual</b> (EPI): gafas o pantalla, guantes adecuados a cada tarea, calzado de seguridad, protectores auditivos, mascarilla.</li></ol>
      <p>Algunas normas básicas en el taller: no llevar ropa holgada, pulseras ni pelo suelto cerca de máquinas que giran; <mark>no usar guantes en el torno ni en la taladradora</mark>, porque pueden ser atrapados; sujetar siempre la pieza con mordaza; desconectar la máquina antes de cambiar herramientas o limpiar; retirar la viruta con un cepillo, nunca con la mano; y conocer las fichas de seguridad de los productos químicos. Las señales de seguridad tienen colores normalizados: rojo (prohibición), amarillo (advertencia), azul (obligación) y verde (salvamento).</p>`,
      svg: B.cajas("Colores de las señales de seguridad", [["Prohibición", "rojo|no fumar"], ["Advertencia", "amarillo|riesgo eléctrico"], ["Obligación", "azul|usar gafas"], ["Salvamento", "verde|salida"]], { t: "Señales de seguridad" }),
    },
    {
      h: "Los ensayos de materiales",
      html: `<p>Los <b>ensayos</b> son pruebas normalizadas que miden las propiedades de un material o comprueban la calidad de una pieza. Sirven para conocer los datos que se usan en el diseño (límite elástico, dureza…), para controlar la calidad de la producción y para investigar las causas de un fallo. Se clasifican en:</p>
      <ul><li><b>Destructivos</b>: la probeta o pieza queda inutilizada. Tracción, compresión, flexión, dureza (que deja una huella), resiliencia, fatiga.</li>
      <li><b>No destructivos</b>: la pieza sigue siendo útil, por lo que se pueden inspeccionar todas las piezas críticas.</li></ul>
      <p>También se distinguen los ensayos <b>mecánicos</b>, <b>físicos</b>, <b>químicos</b> y <b>tecnológicos</b> (como el de plegado o el de embutición, que comprueban si el material resiste un proceso de fabricación).</p>
      <p>Para que los resultados sean comparables, los ensayos siguen normas UNE-EN ISO que fijan la forma y las medidas de las <b>probetas</b>, la velocidad de carga, la temperatura y el modo de calcular el resultado. Un laboratorio acreditado garantiza que sus medidas son fiables y trazables.</p>`,
      svg: B.comparar("Ensayos destructivos frente a no destructivos", ["Destructivos", ["tracción", "dureza", "resiliencia", "fatiga"]], ["No destructivos", ["ultrasonidos", "rayos X", "líquidos penetrantes", "partículas magnéticas"]]),
    },
    {
      h: "El ensayo de tracción",
      html: `<p>Es el ensayo más importante. Una <b>probeta</b> normalizada, de longitud inicial L₀ y sección S₀, se estira en una máquina universal aplicando una fuerza creciente hasta romperla. La máquina registra la fuerza y el alargamiento, y se obtiene el <b>diagrama tensión-deformación</b> (σ = F/S₀, ε = ΔL/L₀). En él se distinguen:</p>
      <ul><li><b>Zona elástica proporcional</b>: recta; se cumple la ley de Hooke y su pendiente es el módulo de Young E.</li>
      <li><b>Límite elástico</b> (σₑ o Rₑ): tensión a partir de la cual la deformación es permanente. Si no está claro, se usa el límite convencional al 0,2 %.</li>
      <li><b>Zona plástica</b>: el material se endurece mientras se deforma, hasta la <b>resistencia a la tracción</b> σᵣ (Rₘ), la tensión máxima.</li>
      <li><b>Estricción y rotura</b>: la probeta se estrecha en una zona y rompe.</li></ul>
      <p>Tras la rotura se juntan los trozos y se mide la longitud final L_u y la sección mínima S_u, para calcular la ductilidad:</p>
      <div class="formula"><span>A % = (L_u − L₀) / L₀ · 100   ·   Z % = (S₀ − S_u) / S₀ · 100</span></div>
      <p>A es el <b>alargamiento</b> y Z la <b>estricción</b>. Un material dúctil tiene valores altos; uno frágil rompe casi sin alargarse.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Probeta de tracción antes y después de la rotura, con la longitud inicial y la estricción">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Probeta de tracción", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M20 46 h34 l10 8 h132 l10 -8 h34 v28 h-34 l-10 -8 h-132 l-10 8 h-34 z" fill="var(--pen)" opacity=".85"/>
        <path d="M74 84 H 186" stroke="var(--ink)" stroke-width="1.5"/>${B.tx(130, 96, "L₀", { fs: 12, maxW: 30, bold: true })}
        <path d="M14 112 h34 l10 8 h62 c6 0 8 4 10 8 l-2 0 c-2 -4 -4 -4 -8 -4 h-62 l-10 8 h-34 z" fill="var(--red)" opacity=".85"/>
        <path d="M140 128 c2 -4 4 -8 10 -8 h60 l10 -8 h34 v28 h-34 l-10 -8 h-60 c-6 0 -8 -4 -10 -4 z" fill="var(--red)" opacity=".85"/>
        ${B.tx(130, 160, "rotura con estricción · L_u > L₀", { fs: 11, maxW: 220, color: "var(--red)", bold: true })}
      </svg>`,
      video: { id: "jIxwVfTuK6Q", titulo: "Ensayo de tracción: diagrama tensión-deformación", canal: "Universitat Politècnica de València - UPV", vistas: 269760 },
    },
    {
      h: "Ensayos de dureza",
      html: `<p>Los ensayos de dureza miden la resistencia a la penetración. Se presiona un <b>penetrador</b> contra la pieza con una carga conocida y se mide la huella. Son rápidos, baratos y casi no dañan la pieza.</p>
      <ul><li><b>Brinell</b> (HB): penetrador de bola de acero templado o carburo de diámetro D (normalmente 10 mm). Se mide el diámetro d de la huella. La dureza es la carga entre el área del casquete esférico:
      <div class="formula"><span>HB = 2P / [π · D · (D − √(D² − d²))]</span></div>
      con P en kilopondios y D y d en mm. Para materiales blandos y medios (hasta unos 450 HB).</li>
      <li><b>Vickers</b> (HV): penetrador de diamante en forma de pirámide de base cuadrada. Se mide la diagonal media d de la huella:
      <div class="formula"><span>HV = 1,854 · P / d²</span></div>
      Vale para todo tipo de materiales, incluso muy duros, y para capas finas.</li>
      <li><b>Rockwell</b> (HRC, HRB): mide directamente la <b>profundidad</b> de la huella con una máquina que da el resultado al instante. Muy usado en control de calidad. HRC usa un cono de diamante; HRB, una bola.</li></ul>
      <p>El ensayo <b>Shore</b> mide la dureza de plásticos y elastómeros, y la escala de <b>Mohs</b> ordena los minerales por su capacidad de rayarse.</p>`,
      svg: B.rejilla("Ensayos de dureza: penetrador y medida", ["Ensayo", "Penetrador", "Se mide"], [["Brinell", "bola", "diámetro d"], ["Vickers", "pirámide", "diagonal d"], ["Rockwell", "cono o bola", "profundidad"], ["Shore", "punta", "plásticos"]], { t: "Ensayos de dureza" }),
      video: { id: "mQZqq1Ql2ts", titulo: "Ensayos de dureza: Rockwell, Brinell, Vickers y Knoop", canal: "Ingeniosos", vistas: 164406 },
    },
    {
      h: "Resiliencia, fatiga y ensayos no destructivos",
      html: `<p>El <b>ensayo de resiliencia</b> o de impacto mide la energía que absorbe un material al romperse por un golpe. En el <b>péndulo de Charpy</b>, una masa m se suelta desde una altura h, golpea una probeta con una entalla en V y sube después hasta una altura h'. La energía absorbida es la que ha perdido el péndulo:</p>
      <div class="formula"><span>E = m · g · (h − h')   ·   ρ = E / S₀</span></div>
      <p>La resiliencia ρ se da en J/cm², siendo S₀ la sección en la entalla. Muchos aceros se vuelven frágiles a bajas temperaturas: por eso se ensayan a varias temperaturas.</p>
      <p>El <b>ensayo de fatiga</b> somete probetas a millones de ciclos de carga alterna. Con los resultados se dibuja la curva de Wöhler, que relaciona la tensión con el número de ciclos hasta la rotura; en los aceros aparece un <b>límite de fatiga</b> por debajo del cual la pieza no rompe nunca.</p>
      <p>Los <b>ensayos no destructivos</b> detectan defectos sin dañar la pieza: inspección visual; <b>líquidos penetrantes</b>, que revelan grietas superficiales; <b>partículas magnéticas</b>, en materiales ferromagnéticos; <b>ultrasonidos</b>, que detectan grietas internas por el eco; <b>radiografía</b> con rayos X o gamma, y <b>corrientes inducidas</b>. Se usan en soldaduras, raíles, aviones y recipientes a presión.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Péndulo de Charpy: altura inicial h, golpe a la probeta y altura final h'">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 22, "Péndulo de Charpy", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <circle cx="130" cy="38" r="4" fill="var(--ink)"/><path d="M130 38 L 66 92" stroke="var(--pen)" stroke-width="3"/><circle cx="66" cy="92" r="12" fill="var(--pen)"/>
        <path d="M130 38 L 130 140" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 4"/><rect x="122" y="140" width="16" height="12" fill="var(--sun)"/>
        <path d="M130 38 L 184 108" stroke="var(--red)" stroke-width="3"/><circle cx="184" cy="108" r="12" fill="var(--red)"/>
        <path d="M30 92 H 54 M30 152 H 120 M36 92 V 152" stroke="var(--ink)" stroke-width="1.5"/>${B.tx(26, 126, "h", { fs: 13, maxW: 14, bold: true, color: "var(--pen)" })}
        <path d="M200 108 H 232 M200 152 H 232 M224 108 V 152" stroke="var(--ink)" stroke-width="1.5"/>${B.tx(238, 134, "h'", { fs: 13, maxW: 16, bold: true, color: "var(--red)" })}
        ${B.tx(130, 170, "E = m·g·(h − h')", { fs: 12, maxW: 200, bold: true })}
      </svg>`,
    },
  ],
  figura: {
    titulo: "Procesos de fabricación y ensayos",
    items: [["Moldeo", "fundir y verter", "piezas complejas", "y huecas"], ["Deformación", "forja · laminación", "sin fundir", "ni quitar material"], ["Mecanizado", "v = πDn/1000", "arranque de", "viruta precisa"], ["Ensayos", "tracción · HB", "medir y", "comprobar calidad"]],
  },
  video: { id: "Um_g8sQ_p3Y", titulo: "¿Cómo se hacen las cosas? Introducción animada a los procesos de fabricación", canal: "The Efficient Engineer", vistas: 959984 },
  quiz: [
    ["¿Qué proceso es más adecuado para el bloque de un motor?", ["Laminación", "Moldeo", "Trefilado", "Torneado"], 1, "Es una pieza compleja y hueca: se funde en molde."],
    ["La microfusión o cera perdida se usa para…", ["chapas", "piezas con detalles muy finos", "cables", "tubos largos"], 1, "Joyas, álabes de turbina y prótesis."],
    ["Las botellas de plástico se fabrican por…", ["soplado", "forja", "fresado", "laminación"], 0, "Una preforma se infla dentro de un molde."],
    ["¿Qué proceso produce perfiles de aluminio para ventanas?", ["Embutición", "Extrusión", "Forja", "Soldadura"], 1, "El metal se empuja a través de una boquilla."],
    ["La embutición sirve para fabricar…", ["ejes", "latas y piezas huecas de chapa", "hilos", "tornillos"], 1, "Un punzón empuja la chapa dentro de una matriz."],
    ["En el torno, ¿qué gira?", ["La herramienta", "La pieza", "Las dos", "Ninguna"], 1, "En la fresadora gira la herramienta."],
    ["La velocidad de corte se calcula con…", ["v = D · n", "v = π · D · n / 1000", "v = n / D", "v = D / n"], 1, "En m/min, con D en mm y n en rpm."],
    ["La impresión 3D por FDM deposita…", ["polvo metálico", "un filamento de plástico fundido", "resina líquida con láser", "arena"], 1, "Deposición de hilo fundido."],
    ["CAM significa…", ["diseño asistido por ordenador", "fabricación asistida por ordenador", "control automático de máquinas", "cálculo de materiales"], 1, "Genera las trayectorias para la máquina CNC."],
    ["¿Qué unión es desmontable?", ["Soldadura", "Remache", "Tornillo y tuerca", "Adhesivo epoxi"], 2, "Se puede separar sin romper nada."],
    ["La soldadura TIG usa un electrodo de…", ["cobre", "wolframio", "estaño", "carbono"], 1, "No se consume y da gran calidad."],
    ["Una cota 30 ± 0,02 mm tiene una tolerancia de…", ["0,02 mm", "0,04 mm", "30 mm", "0,01 mm"], 1, "Máx. 30,02 − mín. 29,98 = 0,04 mm."],
    ["En un ajuste con apriete…", ["el eje es menor que el agujero", "el eje es mayor que el agujero", "siempre hay juego", "no hay tolerancia"], 1, "Se monta a presión y no se mueve."],
    ["El micrómetro aprecia…", ["1 mm", "0,1 mm", "0,01 mm", "1 cm"], 2, "Más preciso que el calibre."],
    ["¿Por qué no se deben usar guantes en el torno?", ["Porque ensucian", "Porque pueden ser atrapados por la pieza que gira", "Porque es más lento", "No hay ningún problema"], 1, "El atrapamiento puede arrastrar la mano."],
    ["Una señal azul indica…", ["prohibición", "obligación", "advertencia", "salvamento"], 1, "Por ejemplo, uso obligatorio de gafas."],
    ["En el diagrama de tracción, la tensión máxima es la…", ["tensión de rotura final", "resistencia a la tracción", "límite elástico", "estricción"], 1, "Rm: el punto más alto de la curva."],
    ["El ensayo Brinell usa un penetrador…", ["de pirámide de diamante", "de bola", "de cono", "de cuchilla"], 1, "Se mide el diámetro de la huella."],
    ["El péndulo de Charpy mide…", ["la dureza", "la resiliencia", "la fatiga", "la densidad"], 1, "Energía absorbida en un impacto."],
    ["¿Qué ensayo no destructivo detecta grietas internas por el eco?", ["Líquidos penetrantes", "Ultrasonidos", "Brinell", "Charpy"], 1, "Los penetrantes solo ven defectos superficiales."],
  ],
  examen: [
    ["Un eje de 40 mm se tornea a 250 rpm. La velocidad de corte es…", ["31,4 m/min", "10 m/min", "314 m/min", "3,14 m/min"], 0, "v = π · 40 · 250 / 1000 = 31,4 m/min."],
    ["Se quiere v = 60 m/min con una pieza de 80 mm. ¿Qué n hace falta?", ["239 rpm", "750 rpm", "48 rpm", "150 rpm"], 0, "n = 1000 · v / (π · D) = 60 000 / 251,3 ≈ 239 rpm."],
    ["Una probeta de L₀ = 50 mm mide 62 mm tras romper. Su alargamiento es…", ["12 %", "24 %", "19 %", "62 %"], 1, "A = (62 − 50)/50 · 100 = 24 %."],
    ["S₀ = 80 mm² y S_u = 48 mm². La estricción es…", ["32 %", "40 %", "60 %", "48 %"], 1, "Z = (80 − 48)/80 · 100 = 40 %."],
    ["Probeta de 100 mm² que rompe a una fuerza máxima de 45 kN. Su resistencia a la tracción es…", ["45 MPa", "450 MPa", "4500 MPa", "4,5 MPa"], 1, "σr = 45 000 / 100 = 450 MPa."],
    ["Vickers con P = 30 kp y d = 0,5 mm. HV ≈", ["111", "222", "445", "56"], 1, "HV = 1,854 · 30 / 0,25 ≈ 222."],
    ["Péndulo de 20 kg que cae desde 1 m y sube a 0,4 m (g = 9,8). Energía absorbida:", ["117,6 J", "196 J", "78,4 J", "58,8 J"], 0, "E = 20 · 9,8 · 0,6 = 117,6 J."],
    ["Agujero 25,000-25,021 y eje 25,035-25,048 mm. El ajuste es…", ["con juego", "con apriete", "indeterminado", "imposible"], 1, "El eje mínimo (25,035) es mayor que el agujero máximo (25,021)."],
  ],
  feynman: ["Qué diferencia hay entre moldeo, deformación y arranque de viruta", "Cómo se calcula la velocidad de corte en el torno", "Qué ventajas e inconvenientes tiene la impresión 3D", "Qué son la tolerancia y los ajustes con juego y con apriete", "Qué se lee en un diagrama tensión-deformación", "Cómo se calculan la dureza Brinell y la resiliencia"],
  mapa: ["FABRICACIÓN Y ENSAYOS", [["Dar forma", "moldeo · deformación · viruta"], ["Unir y digitalizar", "soldadura · CAD-CAM-CNC · 3D"], ["Medir", "tolerancias · ajustes · calibre"], ["Ensayar", "tracción · dureza · Charpy · END"]]],
  tarjetas: [
    ["Moldeo", "Fundir el material y verterlo en un molde: arena, coquilla, presión, cera perdida, inyección."],
    ["Conformación por deformación", "Laminación, forja, extrusión, trefilado, embutición: sin fundir ni quitar material."],
    ["Velocidad de corte", "v = π · D · n / 1000 (m/min, D en mm, n en rpm)."],
    ["Fabricación aditiva", "Capa a capa desde un modelo digital: FDM, SLA, SLS."],
    ["CAD → CAM → CNC", "Diseño, trayectorias de herramienta y máquina de control numérico."],
    ["Soldadura TIG y MIG/MAG", "TIG: electrodo de wolframio. MIG/MAG: hilo continuo con gas protector."],
    ["Tolerancia", "Diferencia entre la medida máxima y la mínima admisibles."],
    ["Ajustes", "Con juego, con apriete o indeterminado."],
    ["Diagrama de tracción", "Zona elástica, límite elástico, zona plástica, resistencia máxima y rotura."],
    ["Alargamiento y estricción", "A = (L_u − L₀)/L₀; Z = (S₀ − S_u)/S₀ (en %)."],
    ["Brinell y Vickers", "HB: bola, diámetro de huella. HV = 1,854 P / d², pirámide de diamante."],
    ["Charpy", "E = m g (h − h'); resiliencia = E / S₀ (J/cm²)."],
  ],
  ejemplos: [
    ["Se tornea un eje de acero de 60 mm de diámetro con una velocidad de corte recomendada de 25 m/min. ¿A cuántas revoluciones debe girar?", ["n = 1000 · v / (π · D).", "n = 1000 · 25 / (π · 60) = 25 000 / 188,5.", "n ≈ 133 rpm; se elige la velocidad más próxima de la caja del torno (por ejemplo, 125 rpm)."], "n ≈ 133 rpm."],
    ["En un ensayo de tracción, una probeta de 10 mm de diámetro y L₀ = 50 mm alcanza el límite elástico con 21 kN y rompe con una fuerza máxima de 33 kN. Tras la rotura, L_u = 61 mm. Calcula σₑ, σᵣ y A %.", ["S₀ = π · 10² / 4 = 78,5 mm².", "σₑ = 21 000 / 78,5 = 267 MPa; σᵣ = 33 000 / 78,5 = 420 MPa.", "A = (61 − 50) / 50 · 100 = 22 %."], "σₑ ≈ 267 MPa; σᵣ ≈ 420 MPa; A = 22 %."],
    ["Ensayo Brinell con P = 3000 kp y bola de 10 mm. La huella mide 4 mm. Calcula HB.", ["D² − d² = 100 − 16 = 84; √84 = 9,165.", "D − √(D² − d²) = 10 − 9,165 = 0,835 mm.", "HB = 2 · 3000 / (π · 10 · 0,835) = 6000 / 26,23."], "HB ≈ 229."],
    ["Un péndulo Charpy de 22 kg se suelta desde 1,2 m y, tras romper la probeta, sube 0,5 m. La sección en la entalla es 10 × 8 mm. Calcula la resiliencia (g = 9,8 m/s²).", ["E = m · g · (h − h') = 22 · 9,8 · 0,7 = 150,9 J.", "S₀ = 80 mm² = 0,8 cm².", "ρ = 150,9 / 0,8."], "ρ ≈ 189 J/cm²."],
    ["Un agujero tiene medidas 30,000 a 30,033 mm y el eje 29,950 a 29,980 mm. Calcula el juego máximo y mínimo y di el tipo de ajuste.", ["Juego máximo = agujero máx. − eje mín. = 30,033 − 29,950 = 0,083 mm.", "Juego mínimo = agujero mín. − eje máx. = 30,000 − 29,980 = 0,020 mm.", "Ambos positivos: siempre hay juego."], "Ajuste con juego: entre 0,020 y 0,083 mm."],
    ["Compara el coste de fabricar 50 y 5000 piezas por impresión 3D (sin molde, 4 € por pieza) y por inyección (molde de 8000 €, 0,5 € por pieza).", ["50 piezas: 3D = 200 €; inyección = 8000 + 25 = 8025 €.", "5000 piezas: 3D = 20 000 €; inyección = 8000 + 2500 = 10 500 €.", "Igualdad: 4N = 8000 + 0,5N → N ≈ 2286 piezas."], "La 3D gana en series cortas; por encima de unas 2300 piezas compensa la inyección."],
  ],
  errores: [
    "Confundir la extrusión de plásticos o metales con la inyección: la extrusión produce perfiles continuos; la inyección, piezas en molde cerrado.",
    "Olvidar el factor 1000 en la velocidad de corte o poner D en metros y mm a la vez.",
    "Calcular el alargamiento con la longitud final en el denominador: se divide entre L₀.",
    "Usar la fuerza de rotura final en lugar de la fuerza máxima para la resistencia a la tracción.",
    "En el péndulo de Charpy, usar h en lugar de h − h': la energía absorbida es la diferencia.",
    "Llevar guantes en el torno o la taladradora: aumenta el riesgo de atrapamiento.",
  ],
  ejercicios: {
    b: [
      ["Indica el proceso adecuado para: botella de agua, perfil de ventana de aluminio, cigüeñal, lata de conservas.", "Soplado; extrusión; forja; embutición."],
      ["Explica la diferencia entre conformación en frío y en caliente.", "En caliente, por encima de la recristalización, el metal es blando y se deforma mucho. En frío se consigue mejor acabado y precisión y el material se endurece por acritud."],
      ["¿Qué diferencia hay entre el torno y la fresadora?", "En el torno gira la pieza y la herramienta avanza (piezas de revolución); en la fresadora gira la herramienta y avanza la pieza (planos, ranuras, cavidades)."],
      ["Calcula la velocidad de corte de una pieza de 50 mm que gira a 400 rpm.", "v = π · 50 · 400 / 1000 = 62,8 m/min."],
      ["Cita tres tecnologías de fabricación aditiva y el material de cada una.", "FDM: filamento de plástico. SLA: resina fotosensible. SLS o fusión de polvo: polvo de plástico o de metal."],
      ["Clasifica como fija o desmontable: remache, chaveta, soldadura MIG, tornillo, adhesivo, pasador.", "Fijas: remache, soldadura, adhesivo. Desmontables: chaveta, tornillo, pasador."],
      ["Una cota es 50 +0,1 / −0,05 mm. Calcula la medida máxima, la mínima y la tolerancia.", "Máx. 50,10 mm; mín. 49,95 mm; tolerancia 0,15 mm."],
      ["Nombra cuatro EPI y para qué sirven.", "Gafas (proyecciones), guantes (cortes y quemaduras, nunca en máquinas giratorias), calzado de seguridad (golpes), protectores auditivos (ruido)."],
      ["¿Qué diferencia hay entre un ensayo destructivo y uno no destructivo?", "En el destructivo la pieza o probeta queda inservible; en el no destructivo sigue siendo útil, por lo que se pueden inspeccionar las piezas reales."],
      ["Ordena las zonas del diagrama de tracción.", "Zona elástica proporcional, límite elástico, zona plástica con endurecimiento, resistencia máxima, estricción y rotura."],
      ["Una probeta de 50 mm mide 58 mm tras romper. Calcula el alargamiento.", "A = (58 − 50)/50 · 100 = 16 %."],
      ["¿Qué mide el ensayo Rockwell y por qué se usa tanto en control de calidad?", "Mide la profundidad de la huella y da el resultado directamente, sin cálculos ni microscopio: es muy rápido."],
    ],
    m: [
      ["¿Qué n necesita un torno para mecanizar un eje de 30 mm a 45 m/min?", "n = 1000 · 45 / (π · 30) = 45 000 / 94,2 ≈ 477 rpm."],
      ["Una broca de 12 mm trabaja a 20 m/min. Calcula las rpm.", "n = 20 000 / (π · 12) = 20 000 / 37,7 ≈ 531 rpm."],
      ["Una probeta de 12 mm de diámetro rompe con una fuerza máxima de 50 kN. Calcula la resistencia a la tracción.", "S₀ = π · 144 / 4 = 113,1 mm². σr = 50 000 / 113,1 ≈ 442 MPa."],
      ["Una probeta de 20 mm² tiene en la rotura una sección de 13 mm². Calcula la estricción.", "Z = (20 − 13)/20 · 100 = 35 %."],
      ["En la zona elástica, una probeta de 100 mm² y L₀ = 100 mm se alarga 0,05 mm con 10 kN. Calcula E.", "σ = 100 MPa; ε = 0,0005; E = 100 / 0,0005 = 200 000 MPa."],
      ["Calcula la dureza Vickers con P = 50 kp y diagonales de 0,48 y 0,52 mm.", "d media = 0,50 mm. HV = 1,854 · 50 / 0,25 = 370,8 ≈ 371 HV."],
      ["Calcula HB con P = 750 kp, D = 5 mm y d = 2 mm.", "D² − d² = 21; √21 = 4,583; D − √ = 0,417. HB = 1500 / (π · 5 · 0,417) = 1500 / 6,55 ≈ 229."],
      ["Un péndulo de 25 kg cae desde 1 m y sube 0,6 m. Sección en la entalla 0,8 cm². Calcula la resiliencia.", "E = 25 · 9,8 · 0,4 = 98 J. ρ = 98 / 0,8 = 122,5 J/cm²."],
      ["Agujero 40,000-40,025 mm; eje 40,009-40,025 mm. Calcula juego y apriete máximos y clasifica el ajuste.", "Juego máximo = 40,025 − 40,009 = 0,016 mm. Apriete máximo = 40,025 − 40,000 = 0,025 mm. Ajuste indeterminado."],
      ["Explica por qué una pieza forjada es más resistente que una fundida con la misma forma.", "En la forja el grano se afina y las fibras del material siguen el contorno de la pieza; la fundición puede tener poros y un grano grueso."],
      ["¿Qué ensayo no destructivo elegirías para: grietas superficiales en aluminio, grieta interna en un eje de acero, cordón de soldadura en un gasoducto?", "Líquidos penetrantes (el aluminio no es magnético); ultrasonidos; radiografía (o ultrasonidos)."],
      ["Explica qué es el gemelo digital y pon un ejemplo de su uso en una fábrica.", "Es un modelo virtual que recibe datos reales de la instalación. Permite, por ejemplo, simular el aumento de velocidad de una línea de montaje y ver los cuellos de botella antes de cambiarla en la realidad."],
      ["Describe el orden de prioridad de las medidas preventivas en el taller.", "Primero eliminar el riesgo desde el diseño; después protecciones colectivas (resguardos, extracción, paradas de emergencia); por último, EPI."],
    ],
    a: [
      ["Una probeta de 8 mm de diámetro y L₀ = 40 mm da: límite elástico a 15 kN con ΔL = 0,057 mm; fuerza máxima 22 kN; L_u = 49 mm; diámetro final 5,6 mm. Calcula σₑ, E, σᵣ, A y Z.", "S₀ = 50,27 mm². σₑ = 298 MPa. ε = 0,057 / 40 = 0,001425; E = 298 / 0,001425 ≈ 209 000 MPa (un acero). σᵣ = 22 000 / 50,27 = 438 MPa. A = 9/40 = 22,5 %. S_u = 24,63 mm²; Z = (50,27 − 24,63)/50,27 = 51 %."],
      ["Un eje de acero (σₑ = 300 MPa) se diseña con coeficiente de seguridad 2,5 para soportar 30 kN a tracción. ¿Qué diámetro mínimo necesita? ¿Y si se templa y revene hasta σₑ = 600 MPa?", "σadm = 120 MPa → S = 250 mm² → d = 17,8 mm. Con 600 MPa: σadm = 240 MPa → S = 125 mm² → d = 12,6 mm."],
      ["Se quiere una velocidad de corte de 80 m/min. El torno solo tiene 160, 250, 400 y 630 rpm. ¿Qué velocidad eliges para una pieza de 70 mm y qué v resulta?", "n ideal = 80 000 / (π · 70) = 364 rpm. Se elige la inmediatamente inferior, 250 rpm, para no superar la v recomendada: v = π · 70 · 250 / 1000 = 55 m/min (o 400 rpm si la herramienta admite 88 m/min)."],
      ["Una bola de 10 mm con 3000 kp deja una huella de 3,5 mm en un acero. Calcula HB. Sabiendo que σᵣ ≈ 3,45 · HB (MPa), estima su resistencia a la tracción.", "√(100 − 12,25) = 9,367; D − √ = 0,633. HB = 6000 / (π · 10 · 0,633) = 6000 / 19,89 ≈ 302. σᵣ ≈ 3,45 · 302 ≈ 1040 MPa."],
      ["Un acero tiene resiliencia de 140 J/cm² a 20 °C y de 15 J/cm² a −40 °C. ¿Qué significa? ¿Lo usarías en un barco para el Ártico?", "A baja temperatura pasa de comportamiento dúctil a frágil: absorbe muy poca energía y puede romper de golpe. No sería adecuado: se necesita un acero con buena tenacidad a baja temperatura (por ejemplo, con níquel)."],
      ["Calcula el número de piezas a partir del cual la inyección (molde 12 000 €, 0,8 €/pieza) es más barata que el mecanizado CNC (sin molde, 6,8 €/pieza).", "12 000 + 0,8N = 6,8N → N = 12 000 / 6 = 2000 piezas."],
      ["Un rodamiento de diámetro interior 25,000 (−0,010/0) se monta en un eje de 25 k6 (+0,002/+0,015). Calcula el juego o apriete máximo y mínimo.", "Agujero: 24,990 a 25,000. Eje: 25,002 a 25,015. Apriete máximo = 25,015 − 24,990 = 0,025 mm. Apriete mínimo = 25,002 − 25,000 = 0,002 mm. Ajuste con apriete: el rodamiento queda fijo."],
      ["Una pieza de impresión 3D FDM resiste mucho menos en la dirección vertical. Explica la causa y dos soluciones.", "La adhesión entre capas es más débil que el propio filamento: la pieza es anisótropa. Soluciones: orientar la pieza para que las cargas actúen en el plano de las capas y aumentar la temperatura de extrusión o el perímetro para mejorar la unión (o usar otro proceso)."],
      ["Una empresa genera 40 toneladas de viruta de aluminio al año. Si se recicla en vez de comprar aluminio primario, calcula el ahorro energético (primario 200 MJ/kg, reciclado 10 MJ/kg) y exprésalo en MWh.", "Ahorro = 40 000 kg · 190 MJ/kg = 7,6 · 10⁶ MJ. 1 MWh = 3600 MJ → ≈ 2111 MWh al año."],
      ["Diseña el plan de ensayos para el cuadro de una bicicleta de aluminio soldado: indica qué ensayos harías al material, a las soldaduras y al cuadro completo.", "Material: tracción (σₑ, σᵣ, A) y dureza. Soldaduras: líquidos penetrantes o radiografía para detectar poros y grietas. Cuadro completo: ensayo de fatiga con cargas cíclicas de pedaleo (cientos de miles de ciclos) y ensayo de impacto frontal, según la norma de bicicletas."],
    ],
  },
  glosario: [
    ["Moldeo", "Fabricación vertiendo material fundido en un molde."],
    ["Forja", "Deformación del metal caliente por golpes o presión."],
    ["Laminación", "Reducción de espesor haciendo pasar el metal entre rodillos."],
    ["Extrusión", "Paso forzado del material por una boquilla para obtener perfiles."],
    ["Embutición", "Conformación de una chapa en piezas huecas con punzón y matriz."],
    ["Mecanizado", "Fabricación por arranque de viruta con herramientas de corte."],
    ["Velocidad de corte", "Velocidad relativa entre el filo y la pieza, en m/min."],
    ["Fabricación aditiva", "Construcción de piezas capa a capa a partir de un modelo digital."],
    ["CNC", "Control numérico por ordenador de una máquina herramienta."],
    ["Tolerancia", "Diferencia entre la medida máxima y la mínima admisibles."],
    ["Ajuste", "Relación entre un eje y un agujero: con juego, con apriete o indeterminado."],
    ["Probeta", "Muestra normalizada del material que se ensaya."],
    ["Resistencia a la tracción", "Tensión máxima del ensayo de tracción."],
    ["Alargamiento", "Aumento porcentual de longitud tras la rotura."],
    ["Estricción", "Reducción porcentual de la sección en la zona de rotura."],
    ["Dureza Brinell", "Carga dividida entre el área de la huella de una bola."],
    ["Resiliencia", "Energía absorbida por unidad de sección en un impacto."],
    ["Ensayo no destructivo", "Inspección que no daña la pieza: ultrasonidos, rayos X, penetrantes."],
  ],
  situacion: {
    titulo: "De la idea a la pieza ensayada",
    reto: "Diseñad un soporte de móvil para la mesa de estudio que aguante al menos 1 kg sin romperse. Fabricad dos versiones con procesos distintos y demostrad con ensayos cuál cumple mejor.",
    pasos: [
      "Diseñad el soporte en CAD con las tolerancias necesarias para que encaje el móvil.",
      "Fabricad una versión por impresión 3D (probando dos orientaciones de capa) y otra por corte y doblado de chapa o metacrilato.",
      "Medid las piezas con el calibre y comprobad si están dentro de tolerancia.",
      "Ensayad cada versión añadiendo masas conocidas hasta la rotura o hasta una deformación de 5 mm, siguiendo un protocolo escrito y con protecciones.",
      "Comparad resultados, coste, tiempo de fabricación y residuos generados.",
    ],
    producto: "Las piezas, una hoja de ensayos con tablas y gráficas y una recomendación de proceso razonada.",
    evaluacion: [
      "El diseño CAD es correcto e indica cotas y tolerancias.",
      "Las piezas se fabrican con seguridad y respetando las normas del taller.",
      "Los ensayos siguen un protocolo repetible y los datos se registran con unidades.",
      "Las conclusiones relacionan el proceso de fabricación con la resistencia obtenida.",
    ],
  },
  familias: [
    "Buscad en casa un objeto fabricado por moldeo, otro por deformación y otro mecanizado, y comentad cómo lo habéis sabido.",
    "Si tenéis un calibre, medid juntos objetos pequeños y anotad la medida con dos decimales.",
    "Mirad el vídeo general del tema y comentad qué proceso os ha sorprendido más.",
    "Repasad las normas de seguridad del taller: muchas sirven también para el bricolaje en casa.",
  ],
  saberes: "Materiales y fabricación: técnicas de fabricación (moldeo, deformación, mecanizado, fabricación aditiva y uniones), fabricación digital CAD-CAM-CNC, metrología y tolerancias, ensayos de materiales destructivos y no destructivos, normas de seguridad e higiene en el trabajo y sostenibilidad de los procesos (RD 243/2022, Tecnología e Ingeniería I, bloque B).",
  ideas: [
    "Hacer probetas impresas en 3D con distinta orientación de capa y ensayarlas a tracción con un dinamómetro.",
    "Practicar la lectura del nonio del calibre con plantillas y piezas reales.",
    "Visitar un taller o empresa de mecanizado CNC de la zona o ver un recorrido virtual.",
    "Construir un péndulo de impacto con un transportador y comparar la energía absorbida por varillas de distintos materiales.",
  ],
  fuentes: [
    { t: "Ensayo de tracción, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Ensayo_de_tracci%C3%B3n" },
    { t: "Instituto Nacional de Seguridad y Salud en el Trabajo (INSST)", url: "https://www.insst.es" },
  ],
});
