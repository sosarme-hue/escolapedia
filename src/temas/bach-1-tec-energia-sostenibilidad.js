// Tecnología e Ingeniería I, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L3");

// Diagrama de Sankey sencillo: energía que entra, útil y perdida.
const sankey = () => `<svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de flujo de energía de un motor de coche: de 100 unidades, 30 útiles y 70 perdidas en calor">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  ${B.tx(130, 20, "Balance de un motor de gasolina", { fs: 12.5, maxW: 236, bold: true, font: B.D })}
  <path d="M20 40 H 120 C 160 40 160 40 200 40 V 70 H 120 V 140 H 20 Z" fill="var(--sun)" opacity=".35"/>
  <path d="M120 40 H 230 V 70 H 120 Z" fill="var(--leaf)" opacity=".85"/>
  <path d="M120 70 V 140 C 150 140 180 150 200 168 L 230 168 C 200 140 170 110 150 70 Z" fill="var(--red)" opacity=".6"/>
  ${B.tx(70, 96, "100 % química", { fs: 11, maxW: 90, bold: true })}
  ${B.tx(186, 60, "30 % útil", { fs: 11, maxW: 80, bold: true, color: "#fff" })}
  ${B.tx(216, 104, "70 % calor", { fs: 10.5, maxW: 62, bold: true, color: "var(--red)" })}
  ${B.tx(70, 160, "η = 30 / 100 = 0,30", { fs: 11, maxW: 110, bold: true, color: "var(--pen)" })}
</svg>`;

module.exports = B.tema({
  titulo: "Energía y sostenibilidad",
  minutos: 120,
  objetivos: [
    "Distinguir formas y fuentes de energía y calcular energía, potencia y rendimiento",
    "Explicar el funcionamiento de las centrales eléctricas convencionales y renovables",
    "Analizar el transporte, el almacenamiento y el consumo de energía en viviendas e industria",
    "Valorar el impacto ambiental de la energía y proponer medidas de eficiencia y ahorro",
  ],
  claves: ["energía", "potencia", "rendimiento", "kilovatio hora", "fuente renovable", "central eléctrica", "fotovoltaica", "eólica", "almacenamiento", "eficiencia energética", "certificación energética", "huella de carbono"],
  pregunta: {
    texto: "Si la energía no se crea ni se destruye, ¿por qué decimos que «gastamos» energía y que hay que ahorrarla?",
    respuesta: "Porque en cada transformación parte de la energía acaba como <b>calor disperso</b> a baja temperatura, que ya no sirve para mover máquinas ni encender lámparas. La cantidad se conserva, pero su <mark>calidad</mark> se degrada. Ahorrar energía es aprovechar mejor cada transformación y elegir fuentes que no agoten recursos ni contaminen.",
  },
  lectura: {
    titulo: "Una isla que vive del viento y del agua",
    html: `<p>El Hierro, la isla más pequeña de las Canarias, dependía de un grupo de motores diésel para obtener electricidad. Cada año llegaban barcos con miles de toneladas de combustible y el aire se llenaba de humo. En 2014 se inauguró Gorona del Viento, una central que combina cinco aerogeneradores con dos depósitos de agua situados a distinta altura.</p>
    <p>Cuando sopla más viento del que la isla necesita, la energía sobrante bombea agua al depósito superior, en un antiguo cráter volcánico. Cuando el viento falta, el agua baja por una tubería y mueve turbinas, como en una central hidroeléctrica. El agua funciona así como una gigantesca batería.</p>
    <p>Desde entonces la isla ha llegado a funcionar semanas enteras solo con energía renovable, y el porcentaje anual de energía limpia ronda la mitad de la demanda. El proyecto demuestra que la transición energética no depende de un único invento, sino de combinar ingeniería, almacenamiento, eficiencia y gestión inteligente de la red. Es justo lo que estudiarás en este tema.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "Energía, trabajo y potencia",
      html: `<p>La <b>energía</b> es la capacidad de un sistema para producir trabajo o transformaciones. Se presenta en distintas <b>formas</b>: mecánica (cinética y potencial), térmica, química, eléctrica, radiante (luz) y nuclear. El <b>principio de conservación</b> afirma que la energía no se crea ni se destruye, solo se transforma; pero en cada transformación una parte se degrada en calor que no se puede aprovechar.</p>
      <div class="formula"><span>E_c = ½ · m · v²   ·   E_p = m · g · h   ·   P = E / t</span></div>
      <p>La unidad de energía en el SI es el <b>julio</b> (J). La <b>potencia</b> es la energía transformada por unidad de tiempo y se mide en <b>vatios</b> (W = J/s). En el consumo eléctrico se usa el <b>kilovatio hora</b> (kWh), la energía que consume un aparato de 1 kW durante una hora:</p>
      <div class="formula"><span>1 kWh = 1000 W · 3600 s = 3,6 · 10⁶ J</span></div>
      <p>Otras unidades frecuentes son la <b>caloría</b> (1 cal = 4,18 J), la <b>tonelada equivalente de petróleo</b> (1 tep = 41,87 GJ, usada en estadísticas energéticas) y el <b>caballo de vapor</b> (1 CV = 736 W) para la potencia de motores. Para comparar combustibles se usa el <b>poder calorífico</b>, la energía que libera 1 kg al quemarse: unos 44 MJ/kg la gasolina, 50 MJ/kg el gas natural y 15-18 MJ/kg la madera seca.</p>`,
      svg: B.rejilla("Unidades de energía y potencia", ["Unidad", "Magnitud", "Equivale"], [["kWh", "energía", "3,6 MJ"], ["cal", "energía", "4,18 J"], ["tep", "energía", "41,87 GJ"], ["CV", "potencia", "736 W"]], { t: "Unidades" }),
    },
    {
      h: "Rendimiento y diagramas de energía",
      html: `<p>Ninguna máquina transforma toda la energía que recibe en energía útil: una parte se pierde por rozamiento, efecto Joule, ruido o calor. El <b>rendimiento</b> (η) mide qué fracción se aprovecha:</p>
      <div class="formula"><span>η = E_útil / E_consumida = P_útil / P_consumida   (× 100 en %)</span></div>
      <p>Siempre es menor que 1 (o que el 100 %). Algunos valores típicos: motor de gasolina, 25-35 %; motor diésel, 35-45 %; central térmica de carbón, 35-40 %; central de ciclo combinado, 55-60 %; motor eléctrico, 85-95 %; transformador, más del 98 %; panel fotovoltaico, 18-23 %; bombilla incandescente, alrededor del 5 % (el resto es calor).</p>
      <p>Cuando varias máquinas trabajan en cadena, el rendimiento total es el <b>producto</b> de los rendimientos: η_total = η₁ · η₂ · η₃. Por eso una cadena larga de transformaciones desperdicia mucha energía.</p>
      <p>Los flujos de energía se representan con <b>diagramas de Sankey</b>: flechas cuyo grosor es proporcional a la energía. A la izquierda entra la energía consumida y se divide en ramas de energía útil y de pérdidas. En las máquinas térmicas, el segundo principio de la termodinámica impone un límite: el rendimiento máximo (de Carnot) es η = 1 − T_fría / T_caliente, con temperaturas en kelvin.</p>`,
      svg: sankey(),
    },
    {
      h: "Fuentes de energía y modelo energético",
      html: `<p>Las <b>fuentes de energía</b> son los recursos naturales de los que se obtiene energía útil. Se clasifican en:</p>
      <ul><li><b>No renovables</b>: existen en cantidad limitada y se agotan al usarlas. Son los combustibles fósiles (carbón, petróleo, gas natural), formados durante millones de años, y el uranio de la energía nuclear.</li>
      <li><b>Renovables</b>: se regeneran de forma natural a escala humana: solar, eólica, hidráulica, biomasa, geotérmica y marina.</li></ul>
      <p>La <b>energía primaria</b> es la que se encuentra en la naturaleza (petróleo crudo, viento). La <b>energía final</b> es la que llega al consumidor (gasolina, electricidad) tras transformaciones y transporte. La electricidad no es una fuente, sino un <b>vector energético</b>: una forma cómoda de transportar y usar la energía. El hidrógeno también puede actuar como vector.</p>
      <p>El <b>modelo energético</b> de un país describe qué fuentes usa y en qué sectores se consume (transporte, industria, viviendas, servicios). En España, el petróleo sigue siendo la primera fuente de energía primaria por el transporte, pero en la generación eléctrica las renovables superan ya la mitad. Depender de combustibles importados supone un riesgo económico y estratégico; por eso los planes energéticos buscan la <b>electrificación</b> del consumo con renovables, la eficiencia y el almacenamiento.</p>`,
      svg: B.comparar("Fuentes renovables frente a no renovables", ["Renovables", ["solar, eólica", "hidráulica, biomasa", "no se agotan", "poco CO₂"]], ["No renovables", ["carbón, petróleo", "gas, uranio", "se agotan", "emisiones o residuos"]]),
      video: { id: "VM95zVmAAYM", titulo: "Energías renovables: ventajas e inconvenientes", canal: "RENOVETEC", vistas: 170634 },
    },
    {
      h: "Centrales térmicas, de ciclo combinado y nucleares",
      html: `<p>Casi todas las centrales generan electricidad igual: algo hace girar una <b>turbina</b> unida a un <b>alternador</b>, que convierte la energía mecánica en eléctrica por inducción electromagnética. Lo que cambia es lo que mueve la turbina.</p>
      <ul><li><b>Central térmica convencional</b>: se quema carbón, fuelóleo o gas en una caldera; el calor convierte agua en vapor a alta presión que mueve la turbina. El vapor se enfría en un condensador (con agua de un río o torres de refrigeración) y vuelve a la caldera. Rendimiento de un 35-40 % y elevadas emisiones de CO₂.</li>
      <li><b>Central de ciclo combinado</b>: el gas natural se quema en una turbina de gas; los gases calientes de escape generan vapor que mueve una segunda turbina. Aprovechar ese calor eleva el rendimiento al 55-60 % y reduce las emisiones a la mitad que el carbón. Arranca rápido y compensa la variabilidad de las renovables.</li>
      <li><b>Central nuclear</b>: la <b>fisión</b> de núcleos de uranio-235 en el reactor libera calor que produce vapor. No emite CO₂ al funcionar y produce energía de forma estable, pero genera <b>residuos radiactivos</b> que deben aislarse durante miles de años y exige estrictas medidas de seguridad.</li></ul>
      <p>En todas ellas una gran parte de la energía se pierde como calor en el condensador. La <b>cogeneración</b> aprovecha ese calor para calefacción o procesos industriales y eleva el aprovechamiento global por encima del 80 %.</p>`,
      svg: B.flujo("Cadena de una central térmica", ["Combustible: energía química", "Caldera: calor y vapor", "Turbina: energía mecánica", "Alternador: electricidad", "Condensador: calor perdido"], { t: "Central térmica" }),
    },
    {
      h: "Energía hidráulica",
      html: `<p>Las <b>centrales hidroeléctricas</b> aprovechan la energía potencial del agua embalsada. El agua baja por una tubería forzada, gana velocidad y mueve una turbina acoplada a un alternador. La potencia depende del <b>caudal</b> Q (m³/s) y del <b>salto</b> o altura h (m):</p>
      <div class="formula"><span>P = η · ρ · g · Q · h   (ρ = 1000 kg/m³)</span></div>
      <p>Según el salto y el caudal se usan turbinas distintas: <b>Pelton</b> (grandes saltos y poco caudal, con cucharas), <b>Francis</b> (saltos medios, la más común) y <b>Kaplan</b> (poco salto y mucho caudal, con hélice de palas orientables). Su rendimiento supera el 85-90 %.</p>
      <p>Las centrales <b>de bombeo</b> tienen dos embalses: cuando sobra electricidad (de noche o con mucho viento y sol) bombean agua al embalse superior, y cuando la demanda sube la turbinan. Son el mayor sistema de <b>almacenamiento</b> de energía del mundo. Las <b>minicentrales</b> aprovechan pequeños ríos o canales sin gran embalse.</p>
      <p>Ventajas: es renovable, no emite gases al funcionar, se regula en segundos y los embalses sirven también para riego y abastecimiento. Inconvenientes: inundan valles, alteran los ríos y los ecosistemas, desplazan poblaciones y su producción depende de las lluvias. En España quedan pocos emplazamientos nuevos aprovechables.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Central hidroeléctrica: embalse, presa, tubería forzada, turbina y salto h">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 20, "Central hidroeléctrica", { fs: 13, maxW: 236, bold: true, font: B.D })}
        <path d="M14 50 H 96 V 150 H 14 Z" fill="var(--pen)" opacity=".3"/>
        <path d="M96 40 L 112 40 L 126 150 L 96 150 Z" fill="var(--muted)"/>
        <path d="M104 120 L 190 140" stroke="var(--ink)" stroke-width="7" fill="none"/>
        <circle cx="198" cy="142" r="14" fill="var(--card)" stroke="var(--red)" stroke-width="3"/>${B.tx(198, 146, "T", { fs: 12, maxW: 16, bold: true, color: "var(--red)" })}
        <path d="M212 148 H 248" stroke="var(--pen)" stroke-width="5" opacity=".5"/>
        <path d="M150 50 V 142" stroke="var(--leaf)" stroke-width="1.6" stroke-dasharray="4 3"/><path d="M144 56 L150 48 L156 56 M144 136 L150 144 L156 136" fill="none" stroke="var(--leaf)" stroke-width="1.6"/>
        ${B.tx(164, 96, "h", { fs: 14, maxW: 14, bold: true, color: "var(--leaf)" })}
        ${B.tx(54, 98, "embalse", { fs: 11, maxW: 76, bold: true, color: "var(--pen)" })}
        ${B.tx(214, 172, "turbina", { fs: 10.5, maxW: 60, bold: true, color: "var(--red)" })}
      </svg>`,
    },
    {
      h: "Energía eólica",
      html: `<p>Los <b>aerogeneradores</b> transforman la energía cinética del viento en electricidad. El viento hace girar las palas del <b>rotor</b>; el eje mueve, a través de una multiplicadora (o directamente, en los de imanes permanentes), un <b>generador</b> situado en la <b>góndola</b>, en lo alto de la torre. Un sistema de control orienta la góndola hacia el viento y gira las palas para regular la potencia y frenar con vientos peligrosos.</p>
      <p>La potencia del viento es proporcional al área barrida y al <mark>cubo de la velocidad</mark>:</p>
      <div class="formula"><span>P = ½ · ρ · A · v³ · C_p   (ρ ≈ 1,225 kg/m³)</span></div>
      <p>Si el viento duplica su velocidad, la potencia se multiplica por 8. El coeficiente de potencia C_p tiene un límite teórico (límite de Betz) de 0,59; los aerogeneradores reales alcanzan 0,45-0,50. Los aerogeneradores arrancan con unos 3-4 m/s, dan su potencia nominal hacia 12-14 m/s y se detienen por encima de 25 m/s.</p>
      <p>Los parques eólicos se sitúan en zonas de viento constante, en tierra o en el mar (<b>eólica marina</b>, con más viento y menos impacto visual). Ventajas: renovable, sin emisiones al funcionar, coste muy competitivo. Inconvenientes: producción variable, impacto paisajístico, ruido y riesgo para aves. España es uno de los mayores productores eólicos de Europa.</p>`,
      svg: B.cajas("Partes de un aerogenerador", [["Palas y rotor", "captan el viento"], ["Góndola", "multiplicadora|y generador"], ["Torre", "altura: más|viento"], ["Control", "orientación|y paso de pala"]], { t: "Aerogenerador" }),
      video: { id: "kmN9qD8vXbY", titulo: "¿Cómo funciona un aerogenerador?", canal: "ACCIONA", vistas: 2199200 },
    },
    {
      h: "Energía solar fotovoltaica y térmica",
      html: `<p>La radiación solar que llega a la superficie terrestre en un día despejado ronda los <b>1000 W/m²</b>. Se aprovecha de dos maneras:</p>
      <ul><li><b>Solar fotovoltaica</b>: las <b>células solares</b>, de silicio semiconductor, convierten directamente la luz en electricidad por el <b>efecto fotovoltaico</b>. Las células se agrupan en <b>paneles</b> que dan corriente continua; un <b>inversor</b> la convierte en alterna. Puede instalarse en grandes plantas o en tejados para <b>autoconsumo</b>, con o sin baterías. Rendimiento de los paneles: 18-23 %.</li>
      <li><b>Solar térmica de baja temperatura</b>: los <b>colectores</b> calientan un fluido que transfiere el calor al agua caliente sanitaria o a la calefacción. El Código Técnico de la Edificación la exige en muchos edificios nuevos.</li>
      <li><b>Solar termoeléctrica</b>: espejos concentran la radiación en un receptor (torre central o tubos cilindroparabólicos); el fluido calentado a cientos de grados produce vapor que mueve una turbina. Con depósitos de sales fundidas puede seguir generando de noche.</li></ul>
      <p>La energía que produce un panel se estima con las <b>horas solares pico</b> (HSP): las horas equivalentes a 1000 W/m². En España suelen ser de 4 a 6 al día de media. Energía diaria ≈ P_pico · HSP · rendimiento de la instalación (≈ 0,8). Los paneles se orientan al sur y se inclinan aproximadamente un ángulo igual a la latitud.</p>`,
      svg: B.rejilla("Tipos de energía solar", ["Tipo", "Convierte", "Uso"], [["Fotovoltaica", "luz → electricidad", "autoconsumo"], ["Térmica", "luz → calor", "agua caliente"], ["Termoeléctrica", "calor → vapor", "centrales"]], { t: "Energía solar" }),
    },
    {
      h: "Biomasa, geotermia, mareas e hidrógeno",
      html: `<p>Otras fuentes renovables completan el sistema:</p>
      <ul><li><b>Biomasa</b>: materia orgánica (restos forestales y agrícolas, cultivos energéticos, residuos ganaderos y urbanos) que se quema directamente en calderas o centrales, o se transforma en <b>biocombustibles</b> (bioetanol, biodiésel) y <b>biogás</b>. Se considera neutra en CO₂ si se repone lo que se consume, porque las plantas absorben el CO₂ al crecer. Aprovecha residuos y crea empleo rural, pero puede competir con los cultivos alimentarios.</li>
      <li><b>Geotérmica</b>: usa el calor del interior de la Tierra. La de alta temperatura produce electricidad en zonas volcánicas (Islandia); la de baja temperatura, con <b>bombas de calor geotérmicas</b>, climatiza edificios aprovechando que el subsuelo mantiene unos 15 °C todo el año.</li>
      <li><b>Marina</b>: la <b>mareomotriz</b> aprovecha la subida y bajada de las mareas con presas en estuarios; la <b>undimotriz</b>, el movimiento de las olas. Son previsibles, pero aún caras y con pocas instalaciones.</li></ul>
      <p>El <b>hidrógeno verde</b> se produce por <b>electrólisis</b> del agua con electricidad renovable. Se almacena y transporta, y en una <b>pila de combustible</b> se recombina con oxígeno para producir electricidad, con agua como único residuo. Es prometedor para la industria pesada, el transporte pesado y el almacenamiento estacional, aunque el rendimiento de la cadena completa (electricidad → hidrógeno → electricidad) apenas ronda el 30-40 %.</p>`,
      svg: B.cajas("Otras fuentes renovables", [["Biomasa", "restos orgánicos|biogás"], ["Geotérmica", "calor interno|bomba de calor"], ["Marina", "mareas|y olas"], ["Hidrógeno", "vector: electrólisis|y pila"]], { t: "Otras renovables" }),
    },
    {
      h: "Transporte, almacenamiento y red eléctrica",
      html: `<p>La electricidad se genera lejos de donde se consume. Para transportarla con pocas pérdidas se eleva la tensión en <b>subestaciones</b> con transformadores (220-400 kV): a igual potencia, más tensión significa menos intensidad, y las pérdidas por efecto Joule (P = R · I²) disminuyen con el cuadrado de la intensidad. Cerca de los consumidores se reduce por etapas hasta los 230/400 V de las viviendas.</p>
      <p>En la red, la producción debe igualar en cada instante al consumo. El operador del sistema (en España, Red Eléctrica) prevé la <b>curva de demanda</b>, con picos por la mañana y por la tarde, y ordena qué centrales funcionan. Las renovables variables obligan a disponer de <b>respaldo</b> y de <b>almacenamiento</b>:</p>
      <ul><li><b>Bombeo hidráulico</b>: el sistema de gran capacidad más extendido.</li>
      <li><b>Baterías</b> de iones de litio: respuesta en milisegundos, cada vez más baratas; se usan en plantas solares, viviendas y vehículos eléctricos.</li>
      <li><b>Almacenamiento térmico</b> en sales fundidas y <b>químico</b> en hidrógeno.</li></ul>
      <p>Las <b>redes inteligentes</b> (<i>smart grids</i>) usan contadores digitales, sensores y comunicación para equilibrar la red, integrar el autoconsumo y los coches eléctricos y desplazar consumos a las horas con más producción renovable o más baratas. La <b>tarifa por tramos horarios</b> anima a hacerlo.</p>`,
      svg: B.flujo("Del generador al consumidor", ["Central: 20 kV", "Subestación elevadora: 400 kV", "Líneas de transporte", "Subestación y centros de transformación", "Vivienda: 230 V"], { t: "Red eléctrica" }),
    },
    {
      h: "Consumo y eficiencia energética",
      html: `<p>La <b>eficiencia energética</b> consiste en obtener el mismo servicio (luz, confort, transporte) consumiendo menos energía. Es la forma más barata y limpia de reducir emisiones: la energía que no se consume no hay que producirla.</p>
      <p>Los aparatos eléctricos llevan una <b>etiqueta energética</b> europea con clases de la A (más eficiente) a la G, el consumo anual en kWh y otras características. Para calcular el gasto de un aparato:</p>
      <div class="formula"><span>E (kWh) = P (kW) · t (h)   ·   coste = E · precio (€/kWh)</span></div>
      <p>Medidas de eficiencia en viviendas y edificios:</p>
      <ul><li><b>Envolvente</b>: buen aislamiento de muros y cubiertas, ventanas de doble vidrio con rotura de puente térmico y control de las infiltraciones.</li>
      <li><b>Instalaciones</b>: iluminación LED, electrodomésticos de clase A, <b>bombas de calor</b> (que aportan 3-4 kWh de calor por cada kWh eléctrico), termostatos programables y domótica.</li>
      <li><b>Hábitos</b>: apagar en lugar de dejar en espera (<i>stand-by</i>), ajustar la temperatura (21 °C en invierno, 26 °C en verano), aprovechar la luz natural.</li></ul>
      <p>En la industria se recupera el calor residual, se usan motores de alta eficiencia con variadores de velocidad y se hacen <b>auditorías energéticas</b>. En el transporte, la movilidad activa, el transporte público y el vehículo eléctrico (rendimiento del motor de más del 85 %) reducen el consumo.</p>`,
      svg: B.barras("Consumo anual aproximado en una vivienda (kWh)", [["Frigorífico", 300], ["Lavadora", 150], ["Iluminación LED", 120], ["Horno", 100], ["Stand-by", 80]], { t: "Consumo doméstico" }),
      video: { id: "_12eVyvbFCI", titulo: "¿Qué es la eficiencia energética?", canal: "Agencia de Sostenibilidad Energética", vistas: 286348 },
    },
    {
      h: "Certificación energética de edificios",
      html: `<p>En la Unión Europea los edificios consumen alrededor del 40 % de la energía. Por eso en España todo edificio que se construye, vende o alquila debe tener un <b>certificado de eficiencia energética</b>, regulado por el Real Decreto 390/2021. Lo elabora un técnico competente con un programa reconocido, que calcula a partir de los planos, los materiales y las instalaciones dos indicadores principales:</p>
      <ul><li>El <b>consumo de energía primaria no renovable</b>, en kWh/m² al año.</li>
      <li>Las <b>emisiones de CO₂</b>, en kg de CO₂/m² al año.</li></ul>
      <p>El resultado se expresa en una <b>etiqueta</b> con letras de la A (más eficiente, verde) a la G (menos eficiente, roja), que debe mostrarse en los anuncios de venta y alquiler. El certificado incluye además <b>recomendaciones de mejora</b>: aislar la fachada, cambiar ventanas o sustituir la caldera.</p>
      <p>Desde 2021 los edificios nuevos deben ser de <b>consumo de energía casi nulo</b> (nZEB): necesitan muy poca energía gracias a un diseño bioclimático (orientación, sombras, ventilación natural, inercia térmica) y la cubren en gran parte con renovables in situ. El estándar voluntario <b>Passivhaus</b> va más allá, con aislamiento muy alto, hermeticidad y ventilación con recuperación de calor. El Código Técnico de la Edificación fija las exigencias mínimas en su documento básico de ahorro de energía (DB HE).</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Etiqueta de certificación energética con letras de la A a la G y una vivienda en la clase C">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        ${B.tx(130, 20, "Calificación energética", { fs: 13, maxW: 236, bold: true, font: B.D })}
        ${["#1a9850", "#66bd63", "#a6d96a", "#fee08b", "#fdae61", "#f46d43", "#d73027"].map((c, i) => `<path d="M20 ${32 + i * 20} H ${70 + i * 18} L ${80 + i * 18} ${41 + i * 20} L ${70 + i * 18} ${50 + i * 20} H 20 Z" fill="${c}"/>${B.tx(32, 46 + i * 20, "ABCDEFG"[i], { fs: 12, maxW: 14, bold: true, color: "#fff" })}`).join("")}
        <path d="M244 72 H 190 L 178 81 L 190 90 H 244 Z" fill="var(--ink)"/>${B.tx(214, 86, "C · 62", { fs: 11, maxW: 50, bold: true, color: "#fff" })}
        ${B.tx(212, 110, "kWh/m² año", { fs: 9.5, maxW: 70 })}
      </svg>`,
      video: { id: "IXXuQOYzAn4", titulo: "¿Cómo se hace el certificado energético?", canal: "idealista news", vistas: 20760 },
    },
    {
      h: "Impacto ambiental y desarrollo sostenible",
      html: `<p>Obtener y usar energía tiene consecuencias ambientales. La quema de combustibles fósiles emite <b>CO₂</b> y otros gases de efecto invernadero que causan el <b>cambio climático</b>; también óxidos de azufre y de nitrógeno (lluvia ácida, contaminación urbana) y partículas que dañan la salud. La extracción provoca vertidos y destrucción de ecosistemas; la energía nuclear deja residuos radiactivos. Ni siquiera las renovables tienen impacto cero: ocupan suelo, usan materiales como el litio o las tierras raras y requieren reciclar paneles y palas.</p>
      <p>Para comparar se usan indicadores como la <b>huella de carbono</b> (emisiones de CO₂ equivalente a lo largo de todo el ciclo de vida) y el <b>análisis de ciclo de vida</b> (ACV), que evalúa el impacto desde la extracción de materias primas hasta el reciclaje. Una regla útil: cada kWh de electricidad del mix español actual supone del orden de 0,1-0,2 kg de CO₂, mientras que quemar 1 litro de gasolina emite unos 2,3 kg.</p>
      <p>El <b>desarrollo sostenible</b> satisface las necesidades presentes sin comprometer las de las generaciones futuras. El Acuerdo de París, los <b>Objetivos de Desarrollo Sostenible</b> (ODS 7: energía asequible y no contaminante; ODS 13: acción por el clima) y la estrategia europea buscan la <b>neutralidad climática</b> en 2050. La ingeniería contribuye con renovables, eficiencia, electrificación, economía circular y diseño para durar, reparar y reciclar.</p>`,
      svg: B.ciclo("Estrategias para un sistema energético sostenible", "Sostenible", ["Renovables", "Eficiencia", "Electrificación", "Economía circular"]),
    },
  ],
  figura: {
    titulo: "Ideas clave de energía y sostenibilidad",
    items: [["Energía", "1 kWh = 3,6 MJ", "se conserva", "pero se degrada"], ["Rendimiento", "η = Eú / Ec", "siempre < 1", "η total = η₁·η₂"], ["Renovables", "P ∝ v³", "sol, viento, agua", "y biomasa"], ["Eficiencia", "A → G", "aislar, LED", "bomba de calor"]],
  },
  video: { id: "JAO132MsTiY", titulo: "El futuro de la energía explicado en 10 minutos", canal: "Memorias de Pez", vistas: 81245 },
  quiz: [
    ["¿Cuántos julios son 1 kWh?", ["3600", "3,6 · 10⁶", "1000", "4,18"], 1, "1000 W · 3600 s."],
    ["La potencia se mide en…", ["julios", "vatios", "kWh", "newtons"], 1, "1 W = 1 J/s."],
    ["El rendimiento de una máquina real es…", ["mayor que 1", "igual a 1", "menor que 1", "negativo"], 2, "Siempre hay pérdidas."],
    ["Dos máquinas en cadena con η = 0,8 y 0,5. Rendimiento total:", ["1,3", "0,65", "0,4", "0,3"], 2, "Se multiplican: 0,8 · 0,5."],
    ["¿Cuál es una fuente no renovable?", ["Viento", "Biomasa", "Gas natural", "Sol"], 2, "Los combustibles fósiles se agotan."],
    ["La electricidad es…", ["una fuente primaria", "un vector energético", "un combustible", "una fuente renovable"], 1, "Transporta energía obtenida de otras fuentes."],
    ["En casi todas las centrales, la electricidad la produce…", ["la caldera", "el alternador", "el condensador", "el transformador"], 1, "Por inducción electromagnética."],
    ["Una central de ciclo combinado mejora el rendimiento porque…", ["usa carbón", "aprovecha el calor de los gases de escape", "no tiene turbina", "usa uranio"], 1, "Una segunda turbina de vapor usa ese calor."],
    ["La principal desventaja de la energía nuclear es…", ["las emisiones de CO₂", "los residuos radiactivos", "su bajo rendimiento", "que depende del viento"], 1, "Duran miles de años."],
    ["La turbina adecuada para grandes saltos y poco caudal es…", ["Kaplan", "Francis", "Pelton", "eólica"], 2, "Tiene cucharas que reciben un chorro."],
    ["Una central de bombeo sirve sobre todo para…", ["almacenar energía", "producir gas", "enfriar", "transportar"], 0, "Sube agua cuando sobra electricidad."],
    ["Si la velocidad del viento se duplica, la potencia de un aerogenerador…", ["se duplica", "se multiplica por 4", "se multiplica por 8", "no cambia"], 2, "Depende de v³."],
    ["El límite de Betz para el coeficiente de potencia es…", ["0,25", "0,59", "0,85", "1"], 1, "Ningún aerogenerador puede superarlo."],
    ["¿Qué aparato convierte la corriente continua de los paneles en alterna?", ["El alternador", "El inversor", "El colector", "El rectificador"], 1, "Necesario para conectarse a la red."],
    ["La biomasa se considera neutra en CO₂ porque…", ["no emite nada", "las plantas absorbieron ese CO₂ al crecer", "es nuclear", "se entierra"], 1, "Si se repone lo consumido."],
    ["La electricidad se transporta a alta tensión para…", ["que vaya más rápida", "reducir la intensidad y las pérdidas", "aumentar la potencia", "por seguridad"], 1, "Pérdidas = R · I²."],
    ["Una bomba de calor eficiente aporta por cada kWh eléctrico…", ["0,5 kWh de calor", "1 kWh", "3-4 kWh", "10 kWh"], 2, "Toma calor del aire o del suelo."],
    ["En la etiqueta energética europea, la clase más eficiente es…", ["G", "A", "A+++ siempre", "D"], 1, "La escala actual va de A a G."],
    ["Un edificio nZEB es…", ["de consumo casi nulo", "de gas natural", "sin ventanas", "nuclear"], 0, "Consume muy poco y lo cubre con renovables."],
    ["El ODS 7 trata de…", ["la educación", "la energía asequible y no contaminante", "el agua", "la salud"], 1, "El 13 es la acción por el clima."],
  ],
  examen: [
    ["Una estufa de 2000 W funciona 3 h al día durante 30 días a 0,15 €/kWh. Coste:", ["27 €", "9 €", "90 €", "2,7 €"], 0, "2 · 3 · 30 = 180 kWh · 0,15 = 27 €."],
    ["Un motor consume 5 kW y da 4,2 kW útiles. Rendimiento:", ["84 %", "119 %", "16 %", "42 %"], 0, "4,2 / 5 = 0,84."],
    ["Una grúa sube 500 kg a 20 m en 10 s. Potencia útil (g = 9,8):", ["9,8 kW", "98 kW", "1 kW", "4,9 kW"], 0, "500 · 9,8 · 20 / 10 = 9800 W."],
    ["Central hidráulica: Q = 10 m³/s, h = 50 m, η = 0,9. Potencia:", ["4,41 MW", "441 kW", "44,1 MW", "4,9 MW"], 0, "0,9 · 1000 · 9,8 · 10 · 50 = 4,41 · 10⁶ W."],
    ["Aerogenerador con rotor de 40 m de diámetro, viento de 10 m/s, C_p = 0,45. Potencia aproximada:", ["346 kW", "1,38 MW", "86 kW", "3,46 MW"], 0, "A = π · 20² = 1257 m²; P = 0,5 · 1,225 · 1257 · 1000 · 0,45 ≈ 346 kW."],
    ["Instalación fotovoltaica de 3 kWp, 5 HSP y factor 0,8. Energía diaria:", ["12 kWh", "15 kWh", "3 kWh", "24 kWh"], 0, "3 · 5 · 0,8 = 12 kWh."],
    ["Rendimiento máximo de Carnot entre 800 K y 300 K:", ["62,5 %", "37,5 %", "50 %", "100 %"], 0, "1 − 300 / 800 = 0,625."],
    ["Si se duplica la tensión de transporte con la misma potencia, las pérdidas en la línea…", ["se reducen a la cuarta parte", "se reducen a la mitad", "se duplican", "no cambian"], 0, "I se reduce a la mitad e I² a la cuarta parte."],
  ],
  feynman: ["Por qué la energía se conserva pero hay que ahorrarla", "Qué es el rendimiento y por qué es menor que 1", "Cómo funciona una central térmica y qué tienen en común todas las centrales", "Por qué la potencia de un aerogenerador depende del cubo de la velocidad del viento", "Por qué se transporta la electricidad a alta tensión", "Qué indica la etiqueta de certificación energética de una vivienda"],
  mapa: ["ENERGÍA Y SOSTENIBILIDAD", [["Magnitudes", "E · P · kWh · rendimiento"], ["Fuentes", "no renovables · renovables"], ["Sistema eléctrico", "centrales · red · almacenamiento"], ["Sostenibilidad", "eficiencia · certificación · impacto"]]],
  tarjetas: [
    ["Kilovatio hora", "Energía de 1 kW durante 1 h: 3,6 · 10⁶ J."],
    ["Potencia", "P = E / t, en vatios."],
    ["Rendimiento", "η = E_útil / E_consumida; siempre < 1."],
    ["Rendimiento en cadena", "η_total = η₁ · η₂ · η₃…"],
    ["Fuentes no renovables", "Carbón, petróleo, gas natural y uranio."],
    ["Fuentes renovables", "Solar, eólica, hidráulica, biomasa, geotérmica y marina."],
    ["Potencia hidráulica", "P = η · ρ · g · Q · h."],
    ["Potencia eólica", "P = ½ · ρ · A · v³ · C_p; Betz: 0,59."],
    ["Fotovoltaica", "Paneles + inversor; energía ≈ P_pico · HSP · 0,8."],
    ["Alta tensión", "Menos intensidad y menos pérdidas R · I²."],
    ["Certificado energético", "Etiqueta de A a G según kWh/m² y kg CO₂/m² al año."],
    ["Huella de carbono", "Emisiones de CO₂ equivalente de todo el ciclo de vida."],
  ],
  ejemplos: [
    ["Un frigorífico de 150 W funciona de media 8 horas al día. Calcula su consumo anual y su coste a 0,16 €/kWh.", ["E diaria = 0,15 kW · 8 h = 1,2 kWh.", "E anual = 1,2 · 365 = 438 kWh.", "Coste = 438 · 0,16 = 70,1 €."], "438 kWh al año, unos 70 €."],
    ["Un motor eléctrico (η = 0,9) acciona una bomba (η = 0,7) que sube agua. Si el motor consume 2 kW, ¿qué potencia útil llega al agua?", ["η_total = 0,9 · 0,7 = 0,63.", "P_útil = 0,63 · 2 kW = 1,26 kW.", "Se pierden 0,74 kW en calor y rozamientos."], "1,26 kW (rendimiento global del 63 %)."],
    ["Un embalse tiene un salto de 120 m y la central turbina 25 m³/s con η = 0,88. Calcula la potencia y la energía producida en 6 horas.", ["P = 0,88 · 1000 · 9,8 · 25 · 120 = 25 872 000 W ≈ 25,9 MW.", "E = 25,9 MW · 6 h = 155 MWh."], "P ≈ 25,9 MW; E ≈ 155 MWh."],
    ["Un aerogenerador tiene palas de 50 m (radio) y C_p = 0,45. Calcula su potencia con vientos de 6 m/s y de 12 m/s.", ["A = π · 50² = 7854 m².", "Con 6 m/s: P = 0,5 · 1,225 · 7854 · 216 · 0,45 = 467 kW.", "Con 12 m/s: v³ es 8 veces mayor, P ≈ 3,74 MW (en la práctica, limitada a la potencia nominal)."], "467 kW frente a 3,74 MW: doble de viento, ocho veces más potencia."],
    ["Dimensiona una instalación de autoconsumo para una vivienda que consume 3600 kWh al año en una zona con 5 HSP. Factor de pérdidas 0,8. Paneles de 450 Wp.", ["Consumo diario medio = 3600 / 365 = 9,9 kWh.", "P_pico = 9,9 / (5 · 0,8) = 2,47 kWp.", "Paneles = 2470 / 450 = 5,5: se instalan 6 paneles (2,7 kWp)."], "6 paneles de 450 Wp, unos 2,7 kWp."],
    ["Una línea de 2 Ω transporta 1 MW. Compara las pérdidas si se transporta a 10 kV y a 100 kV.", ["A 10 kV: I = 10⁶ / 10⁴ = 100 A; pérdidas = 2 · 100² = 20 000 W (2 %).", "A 100 kV: I = 10 A; pérdidas = 2 · 10² = 200 W (0,02 %).", "Multiplicar la tensión por 10 divide las pérdidas entre 100."], "20 kW frente a 200 W."],
  ],
  errores: [
    "Confundir potencia (kW) con energía (kWh): el kWh no es «kilovatios por hora».",
    "Sumar los rendimientos de máquinas en cadena en lugar de multiplicarlos.",
    "Pensar que una máquina puede tener un rendimiento del 100 % o mayor.",
    "Considerar la electricidad una fuente de energía, cuando es un vector.",
    "Creer que la potencia eólica es proporcional a la velocidad, en lugar de a su cubo.",
    "Usar temperaturas en grados Celsius en la fórmula del rendimiento de Carnot.",
  ],
  ejercicios: {
    b: [
      ["Convierte 5 kWh a julios y 1,8 · 10⁷ J a kWh.", "5 · 3,6 · 10⁶ = 1,8 · 10⁷ J. 1,8 · 10⁷ / 3,6 · 10⁶ = 5 kWh."],
      ["Una bombilla LED de 9 W está encendida 5 h al día. ¿Cuánta energía consume en un mes de 30 días?", "9 · 5 · 30 = 1350 Wh = 1,35 kWh."],
      ["Un motor de 1,5 kW funciona 40 min. ¿Cuánta energía consume en kWh y en J?", "1,5 · (40/60) = 1 kWh = 3,6 · 10⁶ J."],
      ["Calcula la energía cinética de un coche de 1200 kg a 90 km/h.", "v = 25 m/s. E_c = 0,5 · 1200 · 25² = 375 000 J = 375 kJ."],
      ["Calcula la energía potencial de 1 m³ de agua a 80 m de altura.", "E_p = 1000 · 9,8 · 80 = 784 000 J = 784 kJ."],
      ["Un motor recibe 800 J y entrega 600 J de trabajo útil. Calcula su rendimiento y la energía perdida.", "η = 600 / 800 = 0,75 (75 %). Pérdidas: 200 J."],
      ["Clasifica como renovable o no renovable: uranio, mareas, carbón, biogás, geotermia, gas natural.", "Renovables: mareas, biogás y geotermia. No renovables: uranio, carbón y gas natural."],
      ["Indica qué elemento es común a casi todas las centrales eléctricas y qué transformación realiza.", "El alternador: transforma energía mecánica de rotación en energía eléctrica."],
      ["¿Qué turbina usarías en un río de llanura con poco desnivel y mucho caudal?", "Una turbina Kaplan."],
      ["Nombra las partes principales de un aerogenerador.", "Palas y rotor, buje, góndola (con multiplicadora y generador), torre, cimentación y sistemas de orientación y control."],
      ["Diferencia la energía solar fotovoltaica de la térmica.", "La fotovoltaica convierte la luz directamente en electricidad con células semiconductoras; la térmica convierte la radiación en calor para calentar agua o un fluido."],
      ["Indica tres medidas para ahorrar energía en casa.", "Por ejemplo: cambiar a iluminación LED, mejorar el aislamiento y las ventanas, apagar los aparatos en vez de dejarlos en stand-by, ajustar el termostato a 21 °C en invierno."],
    ],
    m: [
      ["Una lavadora de 2,2 kW funciona 1,5 h por lavado, 4 lavados a la semana. Calcula el consumo y el coste anual a 0,15 €/kWh.", "2,2 · 1,5 · 4 · 52 = 686,4 kWh. Coste = 103 €."],
      ["Un ascensor eleva 600 kg a 24 m en 20 s. Su motor consume 10 kW. Calcula la potencia útil y el rendimiento.", "P_útil = 600 · 9,8 · 24 / 20 = 7056 W. η = 7056 / 10 000 = 70,6 %."],
      ["Una central térmica tiene η_caldera = 0,9, η_turbina = 0,45 y η_alternador = 0,98. Calcula el rendimiento global y la energía química necesaria para producir 1 MWh.", "η = 0,9 · 0,45 · 0,98 = 0,397. E = 1 / 0,397 = 2,52 MWh de combustible."],
      ["¿Cuántos kg de gas natural (50 MJ/kg) necesita una central de ciclo combinado (η = 0,58) para producir 1 MWh?", "1 MWh = 3600 MJ. E necesaria = 3600 / 0,58 = 6207 MJ. Masa = 6207 / 50 = 124 kg."],
      ["Calcula la potencia de una minicentral con un salto de 15 m, caudal de 2 m³/s y η = 0,85.", "P = 0,85 · 1000 · 9,8 · 2 · 15 = 249 900 W ≈ 250 kW."],
      ["Un aerogenerador da 500 kW con viento de 10 m/s. ¿Qué potencia daría con 8 m/s (sin cambiar C_p)?", "P₂ = 500 · (8/10)³ = 500 · 0,512 = 256 kW."],
      ["Calcula el área barrida y la potencia de un aerogenerador de 90 m de diámetro con viento de 9 m/s y C_p = 0,42.", "A = π · 45² = 6362 m². P = 0,5 · 1,225 · 6362 · 729 · 0,42 = 1,19 MW."],
      ["Una placa solar de 1,9 m² tiene un rendimiento del 21 %. ¿Qué potencia da con una irradiancia de 1000 W/m²?", "P = 1000 · 1,9 · 0,21 = 399 W ≈ 400 Wp."],
      ["Una instalación de 4 kWp en una zona con 4,5 HSP y factor 0,8. Calcula la producción anual y el ahorro a 0,15 €/kWh si se autoconsume todo.", "Diaria = 4 · 4,5 · 0,8 = 14,4 kWh. Anual = 5256 kWh. Ahorro = 788 €."],
      ["Una línea de 5 Ω transporta 2 MW a 20 kV. Calcula la intensidad, las pérdidas y su porcentaje.", "I = 2 · 10⁶ / 2 · 10⁴ = 100 A. P_p = 5 · 100² = 50 kW, el 2,5 %."],
      ["Una bomba de calor tiene un COP de 3,5. ¿Cuánta electricidad consume para dar 7000 kWh de calor al año? ¿Cuánto ahorra frente a un radiador eléctrico?", "E = 7000 / 3,5 = 2000 kWh. Un radiador consumiría 7000 kWh: ahorra 5000 kWh (71 %)."],
      ["Calcula el rendimiento de Carnot de una central que trabaja entre 550 °C y 30 °C.", "T₁ = 823 K, T₂ = 303 K. η = 1 − 303 / 823 = 0,632 (63,2 %)."],
      ["Una vivienda de 90 m² tiene un consumo de energía primaria no renovable de 150 kWh/m² al año. ¿Cuánta energía primaria consume al año? ¿Qué medidas recomendarías para mejorar su letra?", "150 · 90 = 13 500 kWh. Medidas: aislar fachada y cubierta, cambiar ventanas, sustituir la caldera por una bomba de calor y poner paneles solares."],
    ],
    a: [
      ["Una central de bombeo sube 500 000 m³ a 300 m con un rendimiento de bombeo de 0,85 y turbina con 0,9. Calcula la energía almacenada, la consumida al bombear, la recuperada y el rendimiento del ciclo.", "E_p = 5 · 10⁸ kg · 9,8 · 300 = 1,47 · 10¹² J = 408 MWh. Consumida = 408 / 0,85 = 480 MWh. Recuperada = 408 · 0,9 = 368 MWh. η_ciclo = 368 / 480 = 0,765 (76,5 %)."],
      ["Un coche de gasolina consume 6 L/100 km (densidad 0,75 kg/L, 44 MJ/kg, η = 0,25) y uno eléctrico 15 kWh/100 km. Compara la energía útil en las ruedas y la energía consumida.", "Gasolina: 6 · 0,75 · 44 = 198 MJ = 55 kWh por 100 km, útil 13,75 kWh. Eléctrico: 15 kWh consumidos (con η ≈ 0,9, unos 13,5 kWh útiles). La gasolina consume casi 4 veces más energía para el mismo trabajo."],
      ["Calcula las emisiones de CO₂ de los dos coches anteriores en 15 000 km si la gasolina emite 2,3 kg CO₂/L y la electricidad 0,15 kg CO₂/kWh.", "Gasolina: 900 L · 2,3 = 2070 kg. Eléctrico: 2250 kWh · 0,15 = 337,5 kg. El eléctrico emite unas 6 veces menos en uso."],
      ["Un parque eólico tiene 20 aerogeneradores de 2 MW con un factor de capacidad del 28 %. Calcula la energía anual y cuántos hogares abastece (3500 kWh/año cada uno).", "E = 20 · 2 · 8760 · 0,28 = 98 112 MWh. Hogares = 98 112 000 / 3500 ≈ 28 000."],
      ["Una batería de 10 kWh se carga con el excedente solar y descarga con un rendimiento de ida y vuelta del 90 %. Si se usa 300 días al año, ¿cuánto ahorra a 0,20 €/kWh si sustituye energía de la red? ¿En cuántos años amortiza 5000 €?", "Energía útil = 9 kWh · 300 = 2700 kWh. Ahorro = 540 €/año. Amortización ≈ 9,3 años (sin contar la degradación)."],
      ["Una fábrica cambia 50 motores de 7,5 kW con η = 0,86 por otros con η = 0,94 y la misma potencia útil. Funcionan 4000 h al año. Calcula el ahorro energético y económico a 0,12 €/kWh.", "Consumo antes = 7,5 / 0,86 = 8,72 kW; después = 7,5 / 0,94 = 7,98 kW. Ahorro = 0,74 kW · 50 · 4000 = 148 000 kWh = 17 760 €/año."],
      ["Calcula el rendimiento global de la cadena electricidad renovable → electrólisis (η = 0,7) → compresión y transporte (η = 0,9) → pila de combustible (η = 0,55). Compáralo con una batería (η = 0,9).", "η = 0,7 · 0,9 · 0,55 = 0,35 (35 %). La batería conserva el 90 %: el hidrógeno solo compensa para almacenar mucho tiempo o donde las baterías no son viables."],
      ["El 15 % de la energía de calefacción de una casa se pierde por las ventanas (consumo total 9000 kWh). Ventanas nuevas reducen esas pérdidas un 60 % y cuestan 4000 €. Con energía a 0,10 €/kWh, calcula la amortización.", "Pérdidas por ventanas = 1350 kWh. Ahorro = 810 kWh = 81 €/año. Amortización ≈ 49 años: conviene combinarlo con otras mejoras o en una reforma ya prevista."],
      ["Explica con un análisis de ciclo de vida por qué un panel solar tiene huella de carbono aunque no emita al funcionar, y estima su retorno energético si su fabricación requiere 1500 kWh y produce 600 kWh al año.", "Extraer y purificar el silicio, fabricar, transportar y reciclar consume energía y emite CO₂. Retorno energético = 1500 / 600 = 2,5 años; en 25 años de vida produce 10 veces la energía que costó fabricarlo."],
      ["Debate: propone un mix eléctrico para España en 2040 con al menos 80 % renovable y justifica cómo cubrir las noches sin viento.", "La respuesta debe combinar eólica y fotovoltaica como base, hidráulica y bombeo, baterías para el ciclo diario, interconexiones con Europa, gestión de la demanda (recarga inteligente de vehículos, tarifas horarias), hidrógeno para el almacenamiento estacional y un respaldo de ciclos combinados con uso decreciente."],
    ],
  },
  glosario: [
    ["Energía", "Capacidad de un sistema para producir trabajo o transformaciones."],
    ["Potencia", "Energía transformada por unidad de tiempo; se mide en vatios."],
    ["Kilovatio hora", "Energía que consume un aparato de 1 kW en una hora: 3,6 MJ."],
    ["Rendimiento", "Fracción de la energía consumida que se convierte en útil."],
    ["Diagrama de Sankey", "Diagrama de flechas con grosor proporcional a la energía."],
    ["Fuente renovable", "Recurso energético que se regenera de forma natural."],
    ["Vector energético", "Forma de transportar y almacenar energía, como la electricidad o el hidrógeno."],
    ["Alternador", "Máquina que transforma energía mecánica en electricidad alterna."],
    ["Ciclo combinado", "Central que une una turbina de gas y una de vapor."],
    ["Central de bombeo", "Central hidráulica que almacena energía subiendo agua."],
    ["Límite de Betz", "Máximo teórico de energía aprovechable del viento: 59 %."],
    ["Inversor", "Equipo que convierte la corriente continua en alterna."],
    ["Horas solares pico", "Horas equivalentes de radiación a 1000 W/m²."],
    ["Biomasa", "Materia orgánica usada como fuente de energía."],
    ["Bomba de calor", "Máquina que traslada calor y aporta varias veces la energía que consume."],
    ["Certificado energético", "Documento que califica un edificio de A a G según su consumo y emisiones."],
    ["Huella de carbono", "Emisiones de gases de efecto invernadero de un producto o actividad."],
    ["Desarrollo sostenible", "Desarrollo que cubre las necesidades actuales sin comprometer las futuras."],
  ],
  situacion: {
    titulo: "Auditoría energética del instituto",
    reto: "Por equipos, realizad una auditoría energética de una parte del centro (un aula, el gimnasio o la iluminación) y proponed un plan de mejora con una instalación fotovoltaica de autoconsumo, justificado con cálculos de energía, coste y emisiones.",
    pasos: [
      "Inventariad los equipos y la iluminación, con su potencia y horas de uso, y estimad el consumo anual.",
      "Medid temperaturas y detectad pérdidas (ventanas, puertas, equipos en stand-by).",
      "Proponed medidas de eficiencia y calculad el ahorro en kWh, euros y kg de CO₂.",
      "Dimensionad una instalación fotovoltaica en la cubierta con las horas solares pico de vuestra zona.",
      "Calculad la inversión y el periodo de amortización de cada medida y ordenadlas por rentabilidad.",
      "Presentad el informe a la dirección con un diagrama de Sankey del consumo actual y del propuesto.",
    ],
    producto: "Un informe de auditoría con tablas de consumo, cálculos, propuestas priorizadas y un póster divulgativo para el centro.",
    evaluacion: [
      "Los datos de consumo están bien recogidos y los cálculos de energía y potencia son correctos.",
      "Las medidas propuestas son realistas y se justifican con ahorro y amortización.",
      "La instalación fotovoltaica está bien dimensionada con datos de la zona.",
      "Se valora el impacto ambiental y se comunica con claridad.",
    ],
  },
  familias: [
    "Revisad juntos la factura de la luz: potencia contratada, consumo en kWh y precio por tramos horarios.",
    "Buscad la etiqueta energética de los electrodomésticos de casa y calculad su consumo anual.",
    "Consultad la calificación energética de vuestra vivienda o de alguna en venta en la zona.",
    "Proponed un reto familiar de ahorro de un mes y comparad el consumo con el mes anterior.",
  ],
  saberes: "Sistemas energéticos y sostenibilidad: energía, potencia y rendimiento; fuentes renovables y no renovables; centrales eléctricas, transporte y almacenamiento; consumo y eficiencia energética en viviendas e industria; certificación energética de edificios; impacto ambiental y desarrollo sostenible (RD 243/2022, Tecnología e Ingeniería I, bloque D).",
  ideas: [
    "Usar los datos en tiempo real de la red eléctrica para analizar el mix de generación de un día.",
    "Medir con un vatímetro de enchufe el consumo en stand-by de los equipos del aula.",
    "Construir un pequeño aerogenerador o una maqueta de central de bombeo y medir su rendimiento.",
    "Simular la certificación energética de una vivienda con una herramienta oficial gratuita.",
  ],
  fuentes: [
    { t: "IDAE, Instituto para la Diversificación y Ahorro de la Energía", url: "https://www.idae.es/" },
    { t: "Red Eléctrica, el sistema eléctrico en tiempo real", url: "https://www.ree.es/es/datos" },
  ],
});
