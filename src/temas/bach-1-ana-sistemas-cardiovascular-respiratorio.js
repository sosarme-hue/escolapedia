// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L43");

// Corazón esquemático: cuatro cavidades y sentido de la sangre.
const corazon = B.lienzo("Esquema del corazón con aurículas y ventrículos derechos e izquierdos y el recorrido de la sangre", `
  <rect x="34" y="34" width="86" height="52" rx="12" fill="var(--pen)" fill-opacity=".18" stroke="var(--pen)" stroke-width="2.5"/>
  <rect x="140" y="34" width="86" height="52" rx="12" fill="var(--red)" fill-opacity=".18" stroke="var(--red)" stroke-width="2.5"/>
  <rect x="34" y="96" width="86" height="64" rx="12" fill="var(--pen)" fill-opacity=".3" stroke="var(--pen)" stroke-width="2.5"/>
  <rect x="140" y="96" width="86" height="64" rx="12" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2.5"/>
  <path d="M130 30 V 166" stroke="var(--ink)" stroke-width="4"/>
  ${B.tx(77, 56, "Aurícula der.", { fs: 10.5, maxW: 78, bold: true, color: "var(--pen)" })}${B.tx(77, 72, "de las cavas", { fs: 9.5, maxW: 78 })}
  ${B.tx(183, 56, "Aurícula izq.", { fs: 10.5, maxW: 78, bold: true, color: "var(--red)" })}${B.tx(183, 72, "de las pulmonares", { fs: 9.5, maxW: 78 })}
  ${B.tx(77, 124, "Ventrículo der.", { fs: 10.5, maxW: 78, bold: true, color: "var(--pen)" })}${B.tx(77, 140, "→ a. pulmonar", { fs: 9.5, maxW: 78 })}
  ${B.tx(183, 124, "Ventrículo izq.", { fs: 10.5, maxW: 78, bold: true, color: "var(--red)" })}${B.tx(183, 140, "→ aorta", { fs: 9.5, maxW: 78 })}
  ${B.tx(130, 20, "Las cuatro cavidades del corazón", { fs: 12, maxW: 230, bold: true, font: B.D })}
  ${B.tx(130, 176, "tabique", { fs: 9.5, maxW: 40, color: "var(--muted)" })}`, "");

// Doble circulación: menor (pulmonar) y mayor (sistémica).
const doble = B.lienzo("Circulación doble: circuito pulmonar entre el corazón derecho y los pulmones, y circuito sistémico entre el corazón izquierdo y el cuerpo", `
  <rect x="90" y="18" width="80" height="30" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>${B.tx(130, 38, "Pulmones", { fs: 11.5, maxW: 70, bold: true, color: "var(--leaf)" })}
  <rect x="90" y="76" width="80" height="30" rx="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>${B.tx(130, 96, "Corazón", { fs: 11.5, maxW: 70, bold: true })}
  <rect x="90" y="134" width="80" height="30" rx="10" fill="var(--card)" stroke="var(--sun)" stroke-width="2.5"/>${B.tx(130, 154, "Tejidos", { fs: 11.5, maxW: 70, bold: true, color: "var(--sun)" })}
  <path d="M90 84 C 50 80, 50 40, 90 30" fill="none" stroke="var(--pen)" stroke-width="3"/><path d="M170 30 C 210 40, 210 80, 170 84" fill="none" stroke="var(--red)" stroke-width="3"/>
  <path d="M170 98 C 214 104, 214 140, 170 148" fill="none" stroke="var(--red)" stroke-width="3"/><path d="M90 148 C 46 140, 46 104, 90 98" fill="none" stroke="var(--pen)" stroke-width="3"/>
  ${B.tx(30, 60, "menor", { fs: 10.5, maxW: 44, bold: true, color: "var(--pen)" })}${B.tx(230, 128, "mayor", { fs: 10.5, maxW: 44, bold: true, color: "var(--red)" })}
  ${B.tx(232, 60, "O₂ alto", { fs: 10, maxW: 44, color: "var(--red)" })}${B.tx(28, 128, "O₂ bajo", { fs: 10, maxW: 44, color: "var(--pen)" })}`, "");

// Volúmenes pulmonares en barras apiladas (espirograma simplificado).
const volumenes = B.barras("Volúmenes pulmonares aproximados de un adulto joven en mililitros", [["Corriente", 500], ["Reserva insp.", 3000], ["Reserva esp.", 1100], ["Residual", 1200], ["Capacidad vital", 4600]], { t: "Volúmenes pulmonares (mL)" });

module.exports = B.tema({
  titulo: "Los sistemas cardiovascular y respiratorio",
  minutos: 120,
  objetivos: [
    "Describir la anatomía del corazón, los vasos sanguíneos y la sangre, y el recorrido de la doble circulación",
    "Explicar el ciclo cardíaco, el sistema de conducción y los parámetros gasto cardíaco, frecuencia y volumen sistólico",
    "Describir el aparato respiratorio, la mecánica ventilatoria y el intercambio y transporte de gases",
    "Analizar las respuestas y adaptaciones cardiorrespiratorias al ejercicio y su relación con la salud",
    "Relacionar la respiración con la fonación y el control respiratorio en las artes escénicas",
  ],
  claves: ["aurícula", "ventrículo", "sístole", "diástole", "gasto cardíaco", "presión arterial", "hemoglobina", "alvéolo", "ventilación pulmonar", "diafragma", "VO₂ máx", "frecuencia cardíaca máxima"],
  pregunta: {
    texto: "Un ciclista profesional puede tener 40 pulsaciones por minuto en reposo, y una persona sedentaria, 75. ¿Significa eso que el corazón del ciclista trabaja menos o que funciona peor?",
    respuesta: "Trabaja de forma más <mark>eficiente</mark>. El entrenamiento de resistencia agranda el ventrículo izquierdo y aumenta el <b>volumen sistólico</b>: en cada latido expulsa más sangre. Como el cuerpo en reposo necesita más o menos el mismo caudal (unos 5 L/min), le bastan menos latidos. Es la <b>bradicardia del deportista</b>, una adaptación sana.",
  },
  lectura: {
    titulo: "Cien mil latidos al día",
    html: `<p>Mientras lees esta frase, tu corazón ha latido dos o tres veces. Lo hará unas cien mil veces hoy y cerca de tres mil millones a lo largo de tu vida, sin descanso y sin que tengas que pensar en ello. Cada minuto impulsa unos cinco litros de sangre, casi toda la que tienes, a través de una red de vasos que, puesta en fila, daría dos veces la vuelta a la Tierra.</p>
    <p>Esa sangre viaja cargada del oxígeno que han captado los pulmones, una superficie de intercambio del tamaño de media pista de tenis plegada dentro del tórax. Cuando echas a correr, ambos sistemas cambian de marcha en segundos: el pulso se dispara, respiras más hondo y más deprisa, y el caudal de sangre que llega a los músculos puede multiplicarse por veinte.</p>
    <p>El corazón y los pulmones también son protagonistas en el escenario. Un cantante de ópera controla el aire que sale de sus pulmones con la precisión de un relojero, y un actor nervioso nota cómo su corazón se acelera antes de salir a escena. En este tema estudiarás cómo funcionan estos dos sistemas inseparables y cómo se adaptan al entrenamiento.</p>`,
  },
  secciones: [6, 5, 2],
  bloques: [
    {
      h: "El aparato circulatorio y la sangre",
      html: `<p>El <b>aparato circulatorio</b> transporta oxígeno, nutrientes, hormonas, calor y desechos por todo el cuerpo. Tiene tres componentes: un líquido (la <b>sangre</b>), una bomba (el <b>corazón</b>) y una red de conductos (los <b>vasos sanguíneos</b>). Junto a él trabaja el <b>sistema linfático</b>, que recoge el líquido que sale de los capilares y lo devuelve a la sangre, y participa en la defensa.</p>
      <p>Un adulto tiene entre 4,5 y 6 litros de sangre, alrededor del 7-8 % de su masa. Se compone de:</p>
      <ul><li><b>Plasma</b> (55 %): agua con proteínas, glucosa, sales, hormonas, CO₂ y desechos disueltos.</li>
      <li><b>Glóbulos rojos</b> o eritrocitos (casi el 45 %): discos sin núcleo cargados de <b>hemoglobina</b>, la proteína con hierro que transporta el oxígeno. Viven unos 120 días. El porcentaje de volumen que ocupan es el <b>hematocrito</b>.</li>
      <li><b>Glóbulos blancos</b> o leucocitos: defienden frente a infecciones.</li>
      <li><b>Plaquetas</b>: fragmentos celulares que intervienen en la <b>coagulación</b>.</li></ul>
      <p>La cantidad de hemoglobina limita el oxígeno que puede transportar la sangre: unos 200 mL de O₂ por cada litro. Por eso la <mark>anemia</mark> (falta de hemoglobina, a menudo por déficit de hierro) causa cansancio, y por eso el entrenamiento en altitud, que estimula la producción de glóbulos rojos, mejora el rendimiento en resistencia. Aumentarlos artificialmente con EPO o transfusiones es dopaje y es peligroso: la sangre se espesa y aumenta el riesgo de trombosis.</p>`,
      svg: B.barras("Composición de la sangre en porcentaje de volumen", [["Plasma", 55], ["Glóbulos rojos", 44], ["Blancos y plaquetas", 1]], { t: "Composición de la sangre (%)", unidad: " %" }),
    },
    {
      h: "Anatomía del corazón",
      html: `<p>El <b>corazón</b> es un músculo hueco del tamaño de un puño, situado en el centro del tórax, entre los pulmones (mediastino), con la punta dirigida hacia abajo y a la izquierda. Su pared tiene tres capas: el <b>endocardio</b> (interior), el <b>miocardio</b> (músculo cardíaco, la capa gruesa) y el <b>pericardio</b> (bolsa exterior).</p>
      <p>Tiene <b>cuatro cavidades</b>: dos <b>aurículas</b> arriba, que reciben la sangre, y dos <b>ventrículos</b> abajo, que la expulsan. Un tabique separa por completo la mitad derecha, que lleva sangre pobre en oxígeno, de la izquierda, que lleva sangre oxigenada.</p>
      <ul><li>Llegan a la aurícula derecha las <b>venas cavas</b> superior e inferior; del ventrículo derecho sale la <b>arteria pulmonar</b> hacia los pulmones.</li>
      <li>Llegan a la aurícula izquierda las cuatro <b>venas pulmonares</b>; del ventrículo izquierdo sale la <b>aorta</b>, la arteria más grande, hacia todo el cuerpo.</li></ul>
      <p>Las <b>válvulas</b> impiden el retroceso de la sangre: la <b>tricúspide</b> (entre aurícula y ventrículo derechos), la <b>mitral</b> o bicúspide (en el lado izquierdo) y las <b>sigmoideas</b> pulmonar y aórtica, a la salida de los ventrículos. Su cierre produce los ruidos del latido. La pared del ventrículo izquierdo es unas tres veces más gruesa que la del derecho, porque debe impulsar la sangre a todo el cuerpo con una presión mucho mayor. El propio corazón se alimenta por las <b>arterias coronarias</b>; su obstrucción causa el infarto.</p>`,
      svg: corazon,
    },
    {
      h: "Los vasos sanguíneos",
      html: `<p>Los vasos forman un circuito cerrado:</p>
      <ul><li><b>Arterias</b>: llevan la sangre <mark>desde el corazón</mark> hacia los órganos. Tienen paredes gruesas y elásticas, con músculo liso, que soportan la alta presión y se dilatan con cada latido (eso es el <b>pulso</b>). Se ramifican en arteriolas, que regulan cuánta sangre llega a cada órgano contrayéndose o dilatándose.</li>
      <li><b>Capilares</b>: vasos microscópicos con una pared de una sola capa de células. En ellos se produce el <b>intercambio</b> de gases, nutrientes y desechos con los tejidos. Un músculo entrenado tiene más capilares por fibra.</li>
      <li><b>Venas</b>: devuelven la sangre <b>hacia el corazón</b>. Tienen paredes finas, poca presión y <b>válvulas</b> en su interior que impiden que la sangre retroceda. En las piernas, la contracción de los músculos comprime las venas y empuja la sangre hacia arriba: es la <b>bomba muscular</b>. Por eso estar mucho tiempo de pie sin moverse favorece la hinchazón y las varices, y por eso conviene no pararse en seco tras un esfuerzo intenso.</li></ul>
      <p>La <b>presión arterial</b> es la fuerza que ejerce la sangre contra la pared de las arterias. Se da con dos cifras: la <b>sistólica</b> (máxima, durante la contracción) y la <b>diastólica</b> (mínima, en la relajación). En un adulto sano en reposo es inferior a 120/80 mmHg; por encima de 140/90 de forma mantenida se habla de <b>hipertensión</b>, un factor de riesgo de infarto e ictus que el ejercicio regular ayuda a prevenir.</p>`,
      svg: B.comparar("Arterias frente a venas", ["Arterias", ["salen del corazón", "pared gruesa", "presión alta", "producen pulso"]], ["Venas", ["vuelven al corazón", "pared fina", "presión baja", "tienen válvulas"]]),
    },
    {
      h: "La doble circulación",
      html: `<p>La circulación humana es <b>doble</b> (la sangre pasa dos veces por el corazón en cada vuelta) y <b>completa</b> (la sangre oxigenada y la no oxigenada nunca se mezclan).</p>
      <ul><li><b>Circulación menor o pulmonar</b>: ventrículo derecho → arteria pulmonar → capilares de los pulmones (la sangre suelta CO₂ y capta O₂) → venas pulmonares → aurícula izquierda.</li>
      <li><b>Circulación mayor o sistémica</b>: ventrículo izquierdo → aorta → arterias y capilares de todos los órganos (la sangre cede O₂ y recoge CO₂) → venas → venas cavas → aurícula derecha.</li></ul>
      <p>Fíjate en una curiosidad: la <b>arteria pulmonar</b> lleva sangre pobre en oxígeno y las <b>venas pulmonares</b>, sangre rica en oxígeno. Arterias y venas se definen por la dirección (salir del corazón o volver a él), no por el oxígeno que llevan.</p>
      <p>El reparto de la sangre cambia según la actividad. En reposo, los músculos reciben alrededor del 20 % del gasto cardíaco y el aparato digestivo y los riñones, casi la mitad. Durante un esfuerzo máximo, los músculos activos pueden recibir más del <mark>80 %</mark>: las arteriolas musculares se dilatan y las del aparato digestivo se cierran. Por eso no conviene hacer ejercicio intenso justo después de una comida copiosa: la digestión y los músculos compiten por la sangre. También la piel recibe más sangre cuando hay que disipar calor.</p>`,
      svg: doble,
      video: { id: "jSPQQYESN5c", titulo: "SISTEMA CIRCULATORIO en 18 Minutos!! (Aparato Cardiovascular)", canal: "Anatomía Fácil por Juan José Sánchez", vistas: 1411568 },
    },
    {
      h: "El ciclo cardíaco y el sistema de conducción",
      html: `<p>Cada latido es un <b>ciclo cardíaco</b> con dos fases:</p>
      <ul><li><b>Sístole</b>: contracción. Primero se contraen las aurículas y terminan de llenar los ventrículos; después se contraen los ventrículos, se cierran las válvulas tricúspide y mitral (primer ruido, «lub») y la sangre sale por las arterias.</li>
      <li><b>Diástole</b>: relajación. Se cierran las válvulas sigmoideas (segundo ruido, «dub») y las cavidades se llenan de nuevo. En reposo dura más que la sístole; cuando la frecuencia sube mucho, la diástole se acorta y el llenado empeora.</li></ul>
      <p>El corazón late solo, sin órdenes del cerebro, gracias a su <b>sistema de conducción</b>: el <b>nódulo sinusal</b>, en la aurícula derecha, es el marcapasos natural y genera unos 60-100 impulsos por minuto; el impulso recorre las aurículas, llega al <b>nódulo auriculoventricular</b>, que lo retrasa un instante para que los ventrículos se llenen, y baja por el <b>haz de His</b> y las <b>fibras de Purkinje</b> hasta los ventrículos. El <b>electrocardiograma</b> (ECG) registra esta actividad eléctrica.</p>
      <p>El sistema nervioso y las hormonas modifican el ritmo: el <b>sistema nervioso simpático</b> y la <b>adrenalina</b> aceleran el corazón y aumentan la fuerza de contracción; el <b>parasimpático</b> (nervio vago) lo frena. Antes incluso de empezar un esfuerzo o de salir a un escenario, la anticipación ya activa el simpático y sube el pulso.</p>`,
      svg: B.flujo("Recorrido del impulso eléctrico en el corazón", ["Nódulo sinusal (marcapasos)", "Aurículas: se contraen", "Nódulo auriculoventricular (retraso)", "Haz de His", "Fibras de Purkinje: ventrículos"], { t: "Sistema de conducción" }),
      video: { id: "AWBC1ji2Z4s", titulo: "Fases del Ciclo Cardiaco y el Esquema de Wiggers, Animación", canal: "Alila Medical Media en Español", vistas: 626557 },
    },
    {
      h: "Frecuencia, volumen sistólico y gasto cardíaco",
      html: `<p>La eficacia del corazón como bomba se mide con tres parámetros:</p>
      <ul><li><b>Frecuencia cardíaca (FC)</b>: latidos por minuto (lpm). En reposo, entre 60 y 80 lpm en adultos; puede bajar a 40 en deportistas de resistencia.</li>
      <li><b>Volumen sistólico (VS)</b>: sangre que expulsa el ventrículo izquierdo en cada latido. Unos 70 mL en reposo en una persona no entrenada, y más de 100 mL en un deportista.</li>
      <li><b>Gasto cardíaco (Q)</b>: sangre que bombea el corazón por minuto.</li></ul>
      <div class="formula"><span>Q = FC · VS</span></div>
      <p>Con 70 lpm y 70 mL, Q ≈ 4,9 L/min. Durante un esfuerzo máximo, una persona sedentaria llega a unos 20 L/min, y un atleta de élite, a más de 35 L/min.</p>
      <p>La <b>frecuencia cardíaca máxima</b> se puede estimar con la fórmula <b>FCmáx ≈ 220 − edad</b> (o, con algo más de precisión, 208 − 0,7 · edad). Sirve para establecer <b>zonas de entrenamiento</b>: entre el 60 y el 70 % de la FCmáx se trabaja la resistencia aeróbica básica; entre el 70 y el 85 %, la resistencia aeróbica intensa; por encima, el umbral anaeróbico. El método de <b>Karvonen</b> tiene en cuenta también la FC de reposo:</p>
      <div class="formula"><span>FC objetivo = FCreposo + % · (FCmáx − FCreposo)</span></div>
      <p>El pulso se toma en la arteria radial (muñeca) o carótida (cuello), contando 15 segundos y multiplicando por 4.</p>`,
      svg: B.barras("Frecuencia cardíaca típica en distintas situaciones en latidos por minuto", [["Reposo atleta", 45], ["Reposo", 70], ["Andar", 100], ["Correr suave", 140], ["Esfuerzo máx.", 200]], { t: "Frecuencia cardíaca (lpm)" }),
    },
    {
      h: "Anatomía del aparato respiratorio",
      html: `<p>El <b>aparato respiratorio</b> capta el oxígeno del aire y elimina el dióxido de carbono que producen las células. Se divide en:</p>
      <ul><li><b>Vías respiratorias altas</b>: <b>fosas nasales</b>, que filtran, calientan y humedecen el aire (por eso conviene respirar por la nariz en reposo y en ambientes fríos); <b>faringe</b>, conducto común con el aparato digestivo; y <b>laringe</b>, que contiene las <b>cuerdas vocales</b> y la epiglotis, una lámina que cierra la vía aérea al tragar.</li>
      <li><b>Vías respiratorias bajas</b>: la <b>tráquea</b>, un tubo reforzado con anillos de cartílago, se divide en dos <b>bronquios</b>, que se ramifican en bronquiolos cada vez más finos, como las ramas de un árbol invertido (el «árbol bronquial»). Su epitelio tiene cilios y moco que atrapan partículas.</li>
      <li><b>Pulmones</b>: dos órganos esponjosos dentro de la caja torácica, envueltos por la <b>pleura</b>, una doble membrana con un poco de líquido que permite que se deslicen al respirar. El derecho tiene tres lóbulos y el izquierdo, dos, porque deja sitio al corazón.</li></ul>
      <p>Los bronquiolos terminan en unos 300-500 millones de <b>alvéolos</b>, saquitos microscópicos rodeados de capilares. Su pared es finísima (unas 0,5 micras entre aire y sangre) y su superficie total ronda los <mark>70-100 m²</mark>: una estructura perfecta para el intercambio de gases.</p>`,
      svg: B.flujo("Recorrido del aire por las vías respiratorias", ["Fosas nasales: filtran y calientan", "Faringe y laringe", "Tráquea", "Bronquios y bronquiolos", "Alvéolos: intercambio"], { t: "El camino del aire" }),
      video: { id: "CEmcS_FPu2k", titulo: "El funcionamiento del sistema respiratorio", canal: "Mejor con Salud", vistas: 5534480 },
    },
    {
      h: "La mecánica respiratoria",
      html: `<p>Los pulmones no tienen músculos: se llenan y se vacían porque cambia el volumen de la caja torácica que los contiene. El aire siempre va de donde hay más presión a donde hay menos.</p>
      <ul><li><b>Inspiración</b> (proceso activo): el <b>diafragma</b> se contrae y desciende, y los <b>músculos intercostales externos</b> elevan las costillas. El tórax aumenta de volumen, la presión dentro de los pulmones baja por debajo de la atmosférica y entra el aire. En una inspiración forzada ayudan los músculos accesorios del cuello y del pecho (esternocleidomastoideo, escalenos, pectorales).</li>
      <li><b>Espiración</b> (pasiva en reposo): el diafragma se relaja y sube, y los pulmones recuperan su tamaño por su elasticidad; la presión sube y sale el aire. En la espiración <b>forzada</b> (soplar, cantar una frase larga, toser) se contraen los <b>abdominales</b> y los intercostales internos, que empujan el diafragma hacia arriba y bajan las costillas.</li></ul>
      <p>Se distingue la respiración <b>diafragmática</b> o abdominal (el abdomen se expande al inspirar), la más eficiente en reposo, de la <b>costal</b> o torácica (se expanden las costillas) y la <b>clavicular</b> (se elevan los hombros), superficial y poco eficaz, típica de situaciones de ansiedad. Los cantantes, actores, músicos de viento y nadadores entrenan sobre todo el control diafragmático-costal, que permite un volumen grande y una salida de aire regulada con precisión.</p>`,
      svg: B.comparar("Inspiración frente a espiración en reposo", ["Inspiración", ["diafragma se contrae", "baja el diafragma", "costillas suben", "entra aire: activa"]], ["Espiración", ["diafragma se relaja", "sube el diafragma", "costillas bajan", "sale aire: pasiva"]]),
    },
    {
      h: "Volúmenes y capacidades pulmonares",
      html: `<p>Los volúmenes de aire que movemos se miden con un <b>espirómetro</b>. En un adulto joven:</p>
      <ul><li><b>Volumen corriente</b>: aire que entra y sale en una respiración normal, unos 500 mL.</li>
      <li><b>Volumen de reserva inspiratorio</b>: aire extra que se puede inspirar tras una inspiración normal, unos 3000 mL.</li>
      <li><b>Volumen de reserva espiratorio</b>: aire extra que se puede expulsar tras una espiración normal, unos 1100 mL.</li>
      <li><b>Volumen residual</b>: aire que siempre queda en los pulmones y que impide que los alvéolos se colapsen, unos 1200 mL.</li></ul>
      <p>La <b>capacidad vital</b> es la suma de los tres primeros (el máximo que se puede expulsar tras una inspiración máxima), unos 4,5 L, y la <b>capacidad pulmonar total</b> añade el volumen residual. Dependen de la talla, la edad y el sexo, y apenas cambian con el entrenamiento; lo que mejora es la fuerza y la resistencia de los músculos respiratorios.</p>
      <p>La <b>ventilación pulmonar</b> es el aire movilizado por minuto: <b>VE = frecuencia respiratoria · volumen corriente</b>. En reposo, 12-16 respiraciones de 0,5 L dan 6-8 L/min; en un esfuerzo máximo se pueden superar los 150 L/min. Una parte del aire se queda en las vías (el <b>espacio muerto</b>, unos 150 mL) y no llega a los alvéolos: por eso respirar más hondo es más eficaz que respirar más deprisa.</p>`,
      svg: volumenes,
    },
    {
      h: "Intercambio y transporte de gases",
      html: `<p>Los gases pasan por <b>difusión</b>, desde donde su presión parcial es mayor hacia donde es menor, sin gasto de energía:</p>
      <ul><li><b>Intercambio pulmonar</b> (alvéolo-capilar): el aire alveolar tiene más O₂ que la sangre que llega de la arteria pulmonar, así que el O₂ pasa a la sangre; el CO₂ hace el camino contrario.</li>
      <li><b>Intercambio tisular</b> (capilar-célula): las células consumen O₂ en las mitocondrias y producen CO₂, así que el O₂ sale de la sangre hacia ellas y el CO₂ entra en la sangre. Cuanto más trabaja un músculo, más O₂ extrae.</li></ul>
      <p>En la sangre, el <b>oxígeno</b> viaja casi todo (98-99 %) unido a la <b>hemoglobina</b> de los glóbulos rojos (oxihemoglobina) y solo una pequeña parte disuelto en el plasma. La hemoglobina suelta más oxígeno cuando el músculo está caliente, ácido y con mucho CO₂, es decir, justo cuando trabaja. El <b>dióxido de carbono</b> viaja sobre todo como ion bicarbonato disuelto en el plasma, y el resto unido a la hemoglobina o disuelto.</p>
      <p>El <b>monóxido de carbono</b> (de braseros, estufas mal ventiladas o del humo del tabaco) se une a la hemoglobina unas 200 veces más que el oxígeno y la bloquea: es muy tóxico. En altitud, la presión del O₂ en el aire es menor, la hemoglobina se satura menos y el rendimiento aeróbico baja hasta que el cuerpo se aclimata produciendo más glóbulos rojos.</p>`,
      svg: B.cajas("Intercambio de gases en pulmones y tejidos", [["Pulmones", "O₂ → sangre|CO₂ → alvéolo"], ["Tejidos", "O₂ → células|CO₂ → sangre"], ["O₂ en sangre", "unido a|hemoglobina"], ["CO₂ en sangre", "bicarbonato|en plasma"]], { t: "Difusión de gases" }),
    },
    {
      h: "La regulación de la respiración y la fonación",
      html: `<p>La respiración es automática, pero también se puede controlar de forma voluntaria (contener el aliento, hablar, cantar). El <b>centro respiratorio</b> está en el <b>bulbo raquídeo</b> y la protuberancia, en el tronco del encéfalo. El estímulo principal para respirar no es la falta de oxígeno, sino el <mark>aumento de CO₂</mark> (y de acidez) en la sangre, que detectan unos quimiorreceptores. Por eso, tras contener la respiración, la necesidad de respirar se vuelve irresistible. Durante el ejercicio, la ventilación aumenta incluso antes de que suba el CO₂, por órdenes del cerebro y por los receptores de los músculos y las articulaciones.</p>
      <p>La respiración es también la fuente de energía de la <b>voz</b>. La <b>fonación</b> se produce en la laringe: el aire espirado hace vibrar las <b>cuerdas vocales</b> (dos pliegues de músculo y mucosa) cuando se aproximan. El tono depende de su longitud y tensión (más tensas y finas, más agudo); la intensidad, de la presión del aire; y el timbre, de los <b>resonadores</b> (faringe, boca, fosas nasales). La lengua, los labios, los dientes y el paladar <b>articulan</b> los sonidos.</p>
      <p>Una buena técnica vocal combina apoyo respiratorio diafragmático-costal, relajación del cuello y los hombros e hidratación. Gritar, carraspear o hablar mucho rato con tensión provoca <b>disfonías</b> y nódulos en las cuerdas vocales, frecuentes en docentes y actores (lo verás en el tema 7).</p>`,
      svg: B.flujo("De la respiración a la voz", ["Pulmones: fuente de aire", "Laringe: vibran las cuerdas vocales", "Resonadores: faringe, boca, nariz", "Articuladores: lengua y labios"], { t: "La producción de la voz" }),
    },
    {
      h: "Respuestas agudas al ejercicio",
      html: `<p>Cuando empezamos un ejercicio, los sistemas cardiovascular y respiratorio responden en segundos para aportar más oxígeno a los músculos y retirar el CO₂ y el calor:</p>
      <ul><li><b>Aumenta la frecuencia cardíaca</b>, de forma casi lineal con la intensidad, hasta la FCmáx.</li>
      <li><b>Aumenta el volumen sistólico</b>, porque vuelve más sangre al corazón (bomba muscular) y se contrae con más fuerza; se estabiliza a intensidades moderadas.</li>
      <li>Por tanto, <b>aumenta el gasto cardíaco</b>, de 5 hasta 20-35 L/min.</li>
      <li><b>Sube la presión sistólica</b> (puede llegar a 180-200 mmHg); la diastólica apenas cambia.</li>
      <li>Se <b>redistribuye el flujo</b> hacia los músculos activos, el corazón y la piel.</li>
      <li><b>Aumenta la ventilación</b>: primero respiramos más hondo y después también más deprisa.</li>
      <li>Los músculos <b>extraen más oxígeno</b> de la sangre.</li></ul>
      <p>El indicador que resume la capacidad del organismo para captar, transportar y usar el oxígeno es el <b>consumo máximo de oxígeno</b> (<b>VO₂ máx</b>), en mL de O₂ por kilo y minuto. Una persona joven sedentaria ronda los 35-45 mL/kg·min, y un fondista de élite supera los 80. Es uno de los mejores predictores de la salud cardiovascular. Cuando la intensidad supera el <b>umbral anaeróbico</b>, se acumula ácido láctico, la ventilación se dispara y no se puede mantener el esfuerzo mucho tiempo.</p>`,
      svg: B.rejilla("Valores en reposo y en esfuerzo máximo de una persona joven", ["Variable", "Reposo", "Máximo"], [["FC (lpm)", "70", "200"], ["VS (mL)", "70", "110"], ["Q (L/min)", "5", "22"], ["VE (L/min)", "7", "120"]], { t: "Respuesta al ejercicio" }),
    },
    {
      h: "Adaptaciones al entrenamiento y salud",
      html: `<p>Si el ejercicio se repite de forma regular durante semanas, el organismo se <b>adapta</b>:</p>
      <ul><li><b>Corazón</b>: el entrenamiento de resistencia agranda el ventrículo izquierdo (hipertrofia fisiológica), aumenta el volumen sistólico y baja la FC de reposo y la de cada carga de trabajo (<b>bradicardia del deportista</b>). Se recupera antes el pulso tras el esfuerzo.</li>
      <li><b>Vasos y sangre</b>: aumentan el volumen de sangre y el número de <b>capilares</b> en los músculos; las arterias se vuelven más elásticas; baja la presión arterial en personas hipertensas; mejora el perfil de colesterol.</li>
      <li><b>Músculos</b>: más mitocondrias y mioglobina; extraen mejor el oxígeno.</li>
      <li><b>Respiración</b>: músculos respiratorios más fuertes y resistentes; menos ventilación para la misma carga.</li>
      <li>El <b>VO₂ máx</b> puede aumentar entre un 15 y un 25 % en personas no entrenadas.</li></ul>
      <p>Por eso la actividad física regular es una de las medidas más eficaces contra las <b>enfermedades cardiovasculares</b>, la primera causa de muerte en España. Junto a ella, la prevención exige no fumar (el tabaco daña los alvéolos, los bronquios y las arterias), una dieta equilibrada con poca sal, controlar el peso y el estrés, y vigilar la presión arterial. Ante un desmayo con pérdida de consciencia y sin respiración normal hay que llamar al <mark>112</mark>, iniciar la reanimación cardiopulmonar y usar un desfibrilador si lo hay.</p>`,
      svg: B.cajas("Adaptaciones del entrenamiento de resistencia", [["Corazón", "más volumen|sistólico"], ["Pulso", "FC de reposo|más baja"], ["Músculo", "más capilares|y mitocondrias"], ["VO₂ máx", "aumenta|15-25 %"]], { t: "Adaptaciones" }),
      video: { id: "OLGy1a3w08s", titulo: "Adaptaciones al ejercicio | Sistema cardiovascular 07 | Anatomía y fisiología", canal: "Mike Tyler", vistas: 125319 },
    },
  ],
  figura: {
    titulo: "Corazón y pulmones en cuatro fórmulas e ideas",
    items: [["Gasto cardíaco", "Q = FC · VS", "5 L/min en reposo,", "hasta 35 en élite"], ["FC máxima", "220 − edad", "base de las zonas", "de entrenamiento"], ["Ventilación", "VE = f · VC", "7 L/min en reposo,", "más de 150 en máx."], ["VO₂ máx", "mL/kg·min", "capacidad aeróbica", "e indicador de salud"]],
  },
  video: { id: "k6EeIrZM7xo", titulo: "SISTEMA RESPIRATORIO, RESPIRACION EN EL SER HUMANO. RESPIRACION CELULAR. LOS ALVEOLOS", canal: "ARRIBA LA CIENCIA", vistas: 655185 },
  quiz: [
    ["La proteína que transporta el oxígeno en la sangre es la…", ["mioglobina", "hemoglobina", "albúmina", "fibrina"], 1, "Está en los glóbulos rojos y contiene hierro."],
    ["El porcentaje del volumen de sangre que ocupan los glóbulos rojos es el…", ["gasto cardíaco", "hematocrito", "volumen sistólico", "plasma"], 1, "Ronda el 40-45 %."],
    ["La sangre oxigenada llega al corazón por…", ["las venas cavas", "las venas pulmonares", "la arteria pulmonar", "la aorta"], 1, "Llega a la aurícula izquierda."],
    ["La válvula entre la aurícula y el ventrículo izquierdos es la…", ["tricúspide", "mitral", "aórtica", "pulmonar"], 1, "También llamada bicúspide."],
    ["¿Qué cavidad tiene la pared más gruesa?", ["Aurícula derecha", "Ventrículo derecho", "Ventrículo izquierdo", "Aurícula izquierda"], 2, "Impulsa la sangre a todo el cuerpo."],
    ["Los vasos donde se produce el intercambio con los tejidos son…", ["arterias", "venas", "capilares", "arteriolas"], 2, "Pared de una sola capa de células."],
    ["Las venas de las piernas tienen válvulas para…", ["aumentar la presión", "impedir que la sangre retroceda", "filtrar la sangre", "producir el pulso"], 1, "Junto con la bomba muscular devuelven la sangre al corazón."],
    ["La circulación que va del ventrículo derecho a los pulmones es la…", ["mayor", "menor", "coronaria", "portal"], 1, "Circulación pulmonar."],
    ["El marcapasos natural del corazón es el…", ["haz de His", "nódulo sinusal", "nódulo auriculoventricular", "nervio vago"], 1, "Está en la aurícula derecha."],
    ["La fase de relajación del corazón se llama…", ["sístole", "diástole", "fibrilación", "taquicardia"], 1, "Las cavidades se llenan."],
    ["El gasto cardíaco es igual a…", ["FC + VS", "FC · VS", "FC / VS", "VS − FC"], 1, "Latidos por minuto por volumen de cada latido."],
    ["La frecuencia cardíaca máxima estimada de una persona de 16 años es…", ["184 lpm", "204 lpm", "220 lpm", "236 lpm"], 1, "220 − 16 = 204."],
    ["La estructura que cierra la vía aérea al tragar es la…", ["glotis", "epiglotis", "tráquea", "pleura"], 1, "Evita que el alimento pase a la laringe."],
    ["El intercambio de gases en los pulmones ocurre en…", ["los bronquios", "la tráquea", "los alvéolos", "la pleura"], 2, "Rodeados de capilares."],
    ["En la inspiración, el diafragma…", ["se relaja y sube", "se contrae y baja", "no actúa", "se contrae y sube"], 1, "Aumenta el volumen del tórax."],
    ["El aire que siempre queda en los pulmones es el volumen…", ["corriente", "residual", "de reserva espiratorio", "vital"], 1, "Unos 1200 mL."],
    ["El principal estímulo químico para respirar es…", ["la falta de O₂", "el aumento de CO₂", "la glucosa", "la adrenalina"], 1, "Lo detectan quimiorreceptores."],
    ["El tono de la voz depende sobre todo de…", ["la tensión y longitud de las cuerdas vocales", "el tamaño de los pulmones", "la lengua", "la tráquea"], 0, "Más tensas y finas, más agudo."],
    ["Durante el ejercicio, la presión arterial sistólica…", ["baja", "sube", "no cambia", "se hace cero"], 1, "La diastólica cambia poco."],
    ["La bradicardia del deportista es…", ["una enfermedad", "una FC de reposo baja por adaptación", "una arritmia peligrosa", "una FC máxima alta"], 1, "Se debe al mayor volumen sistólico."],
  ],
  examen: [
    ["Con FC = 150 lpm y VS = 120 mL, el gasto cardíaco es…", ["1,25 L/min", "18 L/min", "12 L/min", "180 L/min"], 1, "150 · 0,12 = 18 L/min."],
    ["Si el gasto en reposo es 5 L/min y el VS es 100 mL, la FC es…", ["20 lpm", "50 lpm", "100 lpm", "500 lpm"], 1, "5000 / 100 = 50 lpm."],
    ["Por Karvonen, con 17 años, FC de reposo 63 lpm y al 70 %, la FC objetivo es…", ["142 lpm", "161 lpm", "145 lpm", "175 lpm"], 1, "FCmáx = 220 − 17 = 203; 63 + 0,7 · (203 − 63) = 161 lpm."],
    ["Con 15 respiraciones/min de 0,5 L, la ventilación es…", ["7,5 L/min", "30 L/min", "0,03 L/min", "15,5 L/min"], 0, "15 · 0,5 = 7,5 L/min."],
    ["¿Por qué es más eficaz respirar hondo que deprisa?", ["Porque se usa más el diafragma", "Porque el espacio muerto pesa menos en cada respiración", "Porque entra menos aire", "Porque baja el CO₂"], 1, "Más aire llega realmente a los alvéolos."],
    ["La arteria pulmonar lleva sangre…", ["oxigenada al cuerpo", "pobre en O₂ a los pulmones", "oxigenada a los pulmones", "pobre en O₂ al cuerpo"], 1, "Las arterias salen del corazón, lleven o no oxígeno."],
    ["El monóxido de carbono es tóxico porque…", ["destruye los alvéolos", "bloquea la hemoglobina", "paraliza el diafragma", "baja la presión"], 1, "Se une a ella mucho más que el O₂."],
    ["¿Qué adaptación NO produce el entrenamiento aeróbico?", ["Más capilares musculares", "Mayor volumen sistólico", "FC de reposo más alta", "Mayor VO₂ máx"], 2, "La FC de reposo baja."],
  ],
  feynman: ["Cómo recorre la sangre la doble circulación", "Qué ocurre en la sístole y en la diástole", "Cómo se relacionan FC, volumen sistólico y gasto cardíaco", "Cómo entra y sale el aire de los pulmones si no tienen músculos", "Por qué los gases pasan de los alvéolos a la sangre", "Qué cambios produce el entrenamiento en el corazón"],
  mapa: ["CORAZÓN Y PULMONES", [["Sangre y vasos", "hemoglobina · arterias · venas"], ["Corazón", "4 cavidades · Q = FC · VS"], ["Respiración", "diafragma · alvéolos · difusión"], ["Ejercicio", "respuestas · adaptaciones · VO₂"]]],
  tarjetas: [
    ["Sangre", "Plasma (55 %), glóbulos rojos, glóbulos blancos y plaquetas."],
    ["Hemoglobina", "Proteína con hierro de los glóbulos rojos que transporta el O₂."],
    ["Cavidades del corazón", "Dos aurículas reciben; dos ventrículos expulsan."],
    ["Arterias y venas", "Arterias salen del corazón; venas vuelven a él, con válvulas."],
    ["Doble circulación", "Menor: corazón-pulmones. Mayor: corazón-cuerpo."],
    ["Sístole y diástole", "Contracción y relajación del corazón."],
    ["Gasto cardíaco", "Q = FC · VS; unos 5 L/min en reposo."],
    ["FC máxima", "≈ 220 − edad; base de las zonas de entrenamiento."],
    ["Mecánica respiratoria", "Inspiración activa (diafragma); espiración pasiva en reposo."],
    ["Capacidad vital", "Corriente + reserva inspiratoria + reserva espiratoria (≈ 4,5 L)."],
    ["Intercambio de gases", "Difusión de mayor a menor presión parcial en alvéolos y tejidos."],
    ["VO₂ máx", "Máximo O₂ que se capta y utiliza; indicador de capacidad aeróbica."],
  ],
  ejemplos: [
    ["Una estudiante de 16 años tiene 60 lpm en reposo y un volumen sistólico de 85 mL. Calcula su gasto cardíaco. Si en un esfuerzo su FC es 180 lpm y su VS 115 mL, ¿cuántas veces aumenta?", ["Reposo: Q = 60 · 0,085 = 5,1 L/min.", "Esfuerzo: Q = 180 · 0,115 = 20,7 L/min.", "Aumento: 20,7 / 5,1 ≈ 4,1 veces."], "Pasa de 5,1 a 20,7 L/min: el gasto se multiplica por 4."],
    ["Calcula con el método de Karvonen la zona de entrenamiento aeróbico (60-75 %) de un chico de 17 años con 65 lpm de FC de reposo.", ["FCmáx = 220 − 17 = 203 lpm.", "Reserva = 203 − 65 = 138 lpm.", "60 %: 65 + 0,60 · 138 = 148 lpm.", "75 %: 65 + 0,75 · 138 = 169 lpm."], "Su zona aeróbica va de unos 148 a 169 lpm."],
    ["Un nadador respira 40 veces por minuto con 2 L por respiración. Calcula su ventilación pulmonar y la ventilación alveolar si el espacio muerto es 0,15 L.", ["VE = 40 · 2 = 80 L/min.", "Aire alveolar por respiración: 2 − 0,15 = 1,85 L.", "Ventilación alveolar: 40 · 1,85 = 74 L/min."], "Ventila 80 L/min, de los que 74 L llegan a los alvéolos."],
    ["Describe el recorrido de una molécula de oxígeno desde la nariz de una corredora hasta una mitocondria de su cuádriceps.", ["Fosas nasales → faringe → laringe → tráquea → bronquios → bronquiolos → alvéolo.", "Difunde al capilar pulmonar y se une a la hemoglobina.", "Venas pulmonares → aurícula izquierda → ventrículo izquierdo → aorta → arteria femoral → capilares del cuádriceps.", "Se suelta de la hemoglobina, difunde a la fibra muscular y llega a la mitocondria."], "Aparato respiratorio, circulación pulmonar, corazón izquierdo, circulación sistémica y difusión tisular."],
    ["Una persona de 70 kg consume 3,15 L de O₂ por minuto en su esfuerzo máximo. Calcula su VO₂ máx relativo y valóralo.", ["Paso a mL: 3150 mL/min.", "Relativo: 3150 / 70 = 45 mL/kg·min.", "Para una persona joven es un valor bueno, propio de alguien activo pero no un deportista de élite (más de 70)."], "VO₂ máx = 45 mL/kg·min: buena forma aeróbica."],
    ["Explica por qué un actor nota el corazón acelerado y la boca seca antes de salir a escena, y qué técnica respiratoria puede ayudarle.", ["La anticipación activa el sistema nervioso simpático y la adrenalina.", "Sube la FC y la fuerza de contracción; disminuye la salivación; la respiración se vuelve rápida y clavicular.", "La respiración diafragmática lenta (por ejemplo, inspirar en 4 s y espirar en 6-8 s) estimula el parasimpático y baja la FC."], "Es una respuesta simpática; la espiración lenta y diafragmática ayuda a calmarla."],
  ],
  errores: [
    "Creer que las arterias siempre llevan sangre oxigenada: la arteria pulmonar lleva sangre pobre en oxígeno.",
    "Pensar que los pulmones se inflan por sí mismos: dependen del diafragma y de los músculos intercostales.",
    "Confundir frecuencia cardíaca con gasto cardíaco: el gasto también depende del volumen sistólico.",
    "Interpretar una FC de reposo baja en un deportista como un problema: suele ser una adaptación.",
    "Creer que la falta de oxígeno es el principal estímulo para respirar: lo es el aumento de CO₂.",
    "Olvidar las unidades al calcular el gasto: el volumen sistólico va en mL y el resultado suele darse en L/min.",
  ],
  ejercicios: {
    b: [
      ["Enumera los componentes de la sangre y la función de cada uno.", "Plasma (transporte de sustancias disueltas), glóbulos rojos (O₂), glóbulos blancos (defensa) y plaquetas (coagulación)."],
      ["Nombra las cuatro cavidades del corazón y los vasos que entran y salen de cada lado.", "Lado derecho: aurícula (venas cavas) y ventrículo (arteria pulmonar). Lado izquierdo: aurícula (venas pulmonares) y ventrículo (aorta)."],
      ["¿Para qué sirven las válvulas cardíacas? Nombra dos.", "Impiden el retroceso de la sangre. Tricúspide y mitral (también aórtica y pulmonar)."],
      ["Diferencia arterias, venas y capilares.", "Arterias: salen del corazón, pared gruesa y elástica. Venas: vuelven al corazón, pared fina y válvulas. Capilares: pared de una capa, intercambio."],
      ["Describe el recorrido de la circulación menor.", "Ventrículo derecho → arteria pulmonar → capilares pulmonares (intercambio) → venas pulmonares → aurícula izquierda."],
      ["Define sístole y diástole.", "Sístole: contracción del corazón que expulsa la sangre. Diástole: relajación en la que se llena."],
      ["Calcula la FC máxima estimada para 15, 18 y 40 años.", "205, 202 y 180 lpm."],
      ["¿Cómo se toma el pulso y dónde?", "En la arteria radial (muñeca) o la carótida (cuello) con dos dedos, contando 15 s y multiplicando por 4."],
      ["Ordena las partes del aparato respiratorio por donde pasa el aire.", "Fosas nasales, faringe, laringe, tráquea, bronquios, bronquiolos y alvéolos."],
      ["¿Qué músculos intervienen en la inspiración tranquila?", "El diafragma y los intercostales externos."],
      ["Define volumen corriente y capacidad vital con sus valores aproximados.", "Corriente: aire de una respiración normal (0,5 L). Capacidad vital: máximo expulsable tras inspiración máxima (≈ 4,5 L)."],
      ["¿Dónde se produce la voz y qué la produce?", "En la laringe, por la vibración de las cuerdas vocales al paso del aire espirado."],
    ],
    m: [
      ["Calcula el gasto cardíaco con FC = 72 lpm y VS = 70 mL, y el VS de un atleta con el mismo gasto y 45 lpm.", "Q = 72 · 0,07 = 5,04 L/min. VS = 5040 / 45 = 112 mL."],
      ["Explica por qué la pared del ventrículo izquierdo es más gruesa que la del derecho.", "Debe impulsar la sangre a todo el cuerpo venciendo una presión mucho mayor que la del circuito pulmonar, corto y de baja presión."],
      ["¿Por qué no se mezclan la sangre oxigenada y la no oxigenada en el corazón humano?", "Un tabique completo separa la mitad derecha de la izquierda: la circulación es completa."],
      ["Explica el funcionamiento de la bomba muscular y por qué no conviene pararse en seco tras correr.", "Al contraerse, los músculos comprimen las venas y, con las válvulas, empujan la sangre al corazón. Si se para de golpe, la sangre se acumula en las piernas, llega menos al cerebro y puede haber mareo."],
      ["Calcula con Karvonen la FC al 80 % para una persona de 16 años con 70 lpm en reposo.", "FCmáx = 204; reserva = 134; 70 + 0,8 · 134 = 177 lpm."],
      ["Describe el papel del nódulo auriculoventricular.", "Recibe el impulso de las aurículas y lo retrasa un instante, para que los ventrículos terminen de llenarse antes de contraerse."],
      ["Explica la mecánica de la espiración forzada al soplar una vela a distancia.", "Se contraen los abdominales y los intercostales internos: empujan el diafragma hacia arriba y bajan las costillas, se reduce el volumen torácico y sube la presión, y el aire sale con fuerza."],
      ["Calcula la ventilación de una persona que respira 30 veces por minuto con 1,5 L. ¿Cuántas veces es la de reposo (7 L/min)?", "VE = 45 L/min; unas 6,4 veces la de reposo."],
      ["Explica por qué el oxígeno pasa del alvéolo a la sangre y el CO₂ al revés.", "Por difusión: cada gas va desde donde su presión parcial es mayor a donde es menor. En el alvéolo hay más O₂ y menos CO₂ que en la sangre que llega."],
      ["¿Qué ocurre con la respiración en la altitud y cómo se adapta el cuerpo?", "Hay menos presión de O₂: la hemoglobina se satura menos y se ventila más. Con días o semanas aumenta la producción de glóbulos rojos (EPO natural)."],
      ["Compara las respuestas agudas de FC, VS, presión sistólica y ventilación al pasar del reposo a correr.", "Suben la FC, el VS (hasta estabilizarse), la presión sistólica y la ventilación (primero en profundidad y luego en frecuencia)."],
      ["Explica qué factores determinan el tono, la intensidad y el timbre de la voz.", "Tono: tensión y longitud de las cuerdas vocales. Intensidad: presión del aire espirado. Timbre: forma y tamaño de los resonadores."],
      ["¿Por qué el tabaco perjudica el rendimiento deportivo? Da tres razones.", "El monóxido de carbono bloquea la hemoglobina; daña cilios, bronquios y alvéolos (menos intercambio); estrecha y endurece las arterias y sube la FC."],
      ["Indica qué pasa con el reparto de la sangre durante un esfuerzo intenso tras una comida abundante.", "Los músculos y el aparato digestivo compiten por la sangre; los músculos reciben menos y la digestión se para: aparecen flato, náuseas y menor rendimiento."],
    ],
    a: [
      ["Un deportista tiene Q máx de 30 L/min con FC máx de 190 lpm. Calcula su VS máx. Si entrena y el VS aumenta un 15 % sin cambiar la FC máx, ¿cuál será su nuevo gasto?", "VS = 30 000 / 190 = 158 mL. Nuevo VS = 182 mL; Q = 190 · 0,182 = 34,5 L/min."],
      ["Una persona tiene un volumen corriente de 0,45 L, espacio muerto 0,15 L y respira 20 veces/min. Otra respira 10 veces con 0,9 L. Calcula la ventilación pulmonar y alveolar de cada una y razona cuál es más eficiente.", "A: VE = 9 L/min; alveolar = 20 · 0,30 = 6 L/min. B: VE = 9 L/min; alveolar = 10 · 0,75 = 7,5 L/min. B es más eficiente: con la misma ventilación llega más aire a los alvéolos."],
      ["Calcula el oxígeno que transporta la sangre arterial por minuto con Q = 5 L/min y 200 mL O₂/L. Si los tejidos extraen el 25 % en reposo y el 75 % en esfuerzo con Q = 20 L/min, ¿cuánto O₂ consumen en cada caso?", "Transporte en reposo: 1000 mL/min; consumo: 250 mL/min. Esfuerzo: transporte 4000 mL/min; consumo 3000 mL/min. El consumo se multiplica por 12."],
      ["Explica por qué el dopaje sanguíneo mejora el rendimiento y qué riesgos tiene.", "Aumentar los glóbulos rojos eleva la hemoglobina y el O₂ transportado, por lo que sube el VO₂ máx. Pero espesa la sangre (viscosidad), sobrecarga el corazón y favorece trombosis, infartos e ictus; además es ilegal en el deporte."],
      ["Una cantante debe sostener una nota 20 segundos. Si su capacidad vital es 4 L y usa el 80 %, ¿qué caudal de aire debe mantener? ¿Qué músculos controlan esa salida?", "Aire útil: 3,2 L; caudal = 3,2 / 20 = 0,16 L/s. El diafragma frena el ascenso (trabajo excéntrico) mientras los abdominales y los intercostales regulan la presión: es el «apoyo»."],
      ["Diseña una progresión de 8 semanas para mejorar la capacidad aeróbica de una persona sedentaria de 16 años, usando zonas de FC.", "Semanas 1-2: 3 sesiones de 20 min al 60-65 % (≈ 145-155 lpm con reposo 75). Semanas 3-5: 4 sesiones de 30 min al 65-70 %. Semanas 6-8: añadir un día de intervalos al 80-85 %. Controlar el pulso y la recuperación."],
      ["Explica la relación entre la duración de la diástole y el rendimiento cuando la frecuencia cardíaca es muy alta.", "La diástole se acorta más que la sístole al subir la FC; con frecuencias extremas los ventrículos no se llenan bien, el VS cae y el gasto deja de aumentar. Por eso hay un límite de FC útil."],
      ["Un buceador hiperventila antes de sumergirse para aguantar más. Explica por qué es peligroso.", "La hiperventilación baja mucho el CO₂ pero apenas aumenta el O₂. Al bajar el estímulo para respirar, el O₂ puede caer hasta perder el conocimiento antes de sentir la necesidad de respirar: síncope y ahogamiento."],
      ["Compara la respuesta cardiovascular a una carrera continua y a un ejercicio de fuerza máxima con apnea (levantar mucho peso).", "En la carrera sube la FC y la presión sistólica, la diastólica baja o se mantiene. En el esfuerzo de fuerza con apnea (maniobra de Valsalva) suben mucho la presión sistólica y la diastólica, y baja el retorno venoso; es arriesgado para hipertensos."],
      ["Argumenta, con datos del tema, por qué la OMS recomienda a los adolescentes al menos 60 minutos diarios de actividad física moderada a vigorosa.", "Esa actividad mejora el VO₂ máx, el volumen sistólico, la capilarización y la elasticidad arterial; reduce la presión arterial, el colesterol y el riesgo de obesidad; los hábitos adquiridos en la adolescencia se mantienen en la edad adulta y previenen la primera causa de muerte."],
    ],
  },
  glosario: [
    ["Hemoglobina", "Proteína con hierro de los glóbulos rojos que transporta oxígeno."],
    ["Hematocrito", "Porcentaje del volumen de sangre ocupado por los glóbulos rojos."],
    ["Aurícula", "Cavidad superior del corazón que recibe la sangre."],
    ["Ventrículo", "Cavidad inferior del corazón que expulsa la sangre."],
    ["Aorta", "Arteria principal que sale del ventrículo izquierdo."],
    ["Capilar", "Vaso microscópico donde se intercambian sustancias con los tejidos."],
    ["Sístole", "Fase de contracción del corazón."],
    ["Diástole", "Fase de relajación y llenado del corazón."],
    ["Nódulo sinusal", "Marcapasos natural del corazón."],
    ["Volumen sistólico", "Sangre expulsada por el ventrículo en cada latido."],
    ["Gasto cardíaco", "Volumen de sangre bombeado por minuto."],
    ["Presión arterial", "Fuerza de la sangre sobre la pared de las arterias."],
    ["Alvéolo", "Saco pulmonar microscópico donde se intercambian los gases."],
    ["Diafragma", "Músculo principal de la inspiración, entre tórax y abdomen."],
    ["Capacidad vital", "Máximo volumen de aire expulsable tras una inspiración máxima."],
    ["Ventilación pulmonar", "Volumen de aire movilizado por minuto."],
    ["VO₂ máx", "Máximo oxígeno que el organismo puede captar y utilizar por minuto."],
    ["Bradicardia del deportista", "Frecuencia cardíaca de reposo baja por adaptación al entrenamiento."],
  ],
  situacion: {
    titulo: "Laboratorio de pulso y respiración",
    reto: "Vuestro grupo debe investigar cómo responden el corazón y la respiración a distintos esfuerzos y situaciones (subir escaleras, correr, cantar, hablar en público) y presentar los resultados con gráficas y explicaciones fisiológicas.",
    pasos: [
      "Diseñad el protocolo: actividades, duración, qué medir (FC, frecuencia respiratoria, sensación de esfuerzo) y cuándo.",
      "Medid la FC y la respiración en reposo, durante cada actividad y en la recuperación (minutos 1, 3 y 5).",
      "Calculad para cada participante su FCmáx estimada, el porcentaje de FCmáx alcanzado y la zona de trabajo.",
      "Representad los datos en gráficas de FC frente al tiempo y comparad participantes activos y sedentarios.",
      "Explicad los resultados con los conceptos del tema: gasto cardíaco, sistema simpático, ventilación, recuperación.",
    ],
    producto: "Un informe científico con protocolo, tablas, gráficas, interpretación fisiológica y una recomendación de entrenamiento para mejorar la condición aeróbica.",
    evaluacion: [
      "El protocolo es seguro, claro y repetible.",
      "Los datos se recogen, calculan y representan con rigor.",
      "La interpretación usa correctamente los conceptos cardiovasculares y respiratorios.",
      "Las recomendaciones están justificadas con los resultados y con las directrices de salud.",
    ],
  },
  familias: [
    "Tomaos el pulso en reposo y tras subir unas escaleras, y comparad la recuperación.",
    "Practicad juntos dos minutos de respiración diafragmática lenta antes de dormir.",
    "Comprobad si en casa hay detector de monóxido de carbono y si los aparatos de combustión se revisan.",
    "Buscad dónde está el desfibrilador más cercano a vuestra casa o al centro.",
  ],
  saberes: B.SAB("Los sistemas cardiovascular y respiratorio: la sangre, el corazón, los vasos y la doble circulación; el ciclo cardíaco y su regulación; anatomía y mecánica respiratoria, volúmenes pulmonares e intercambio de gases; la fonación; respuestas y adaptaciones al ejercicio y hábitos cardiosaludables"),
  ideas: [
    "Construir un modelo de pulmón con una botella, globos y un guante de látex como diafragma.",
    "Medir la capacidad vital con un espirómetro casero (garrafa invertida en agua) y relacionarla con la talla.",
    "Escuchar el corazón con un estetoscopio y distinguir los dos ruidos.",
    "Realizar una práctica de RCP con maniquí y el uso de un desfibrilador de entrenamiento.",
  ],
  fuentes: [
    B.FUENTES.OMS,
    B.FUENTES.WIKI("Sistema_circulatorio", "Sistema circulatorio"),
    B.FUENTES.WIKI("Aparato_respiratorio", "Aparato respiratorio"),
  ],
});
