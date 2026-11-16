// Anatomía Aplicada, 1º de Bachillerato. Tema nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");

// Arco reflejo: receptor → neurona sensitiva → médula (interneurona) → neurona motora → efector.
const arco = B.lienzo("Arco reflejo: el receptor de la piel envía el impulso por la neurona sensitiva a la médula, una interneurona lo pasa a la neurona motora y el músculo se contrae", `
  <defs><marker id="anaArc" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--muted)"/></marker></defs>
  <ellipse cx="200" cy="90" rx="40" ry="50" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/>
  <path d="M188 64 q12 26 0 52 M212 64 q-12 26 0 52" fill="none" stroke="var(--line)" stroke-width="2"/>
  ${B.tx(200, 30, "médula", { fs: 11, maxW: 60, bold: true })}
  <circle cx="30" cy="54" r="10" fill="var(--sun)"/>${B.tx(30, 80, "receptor", { fs: 10, maxW: 60, bold: true, color: "var(--sun)" })}
  <path d="M40 54 C 100 40, 150 50, 194 78" fill="none" stroke="var(--pen)" stroke-width="3" marker-end="url(#anaArc)"/>
  ${B.tx(110, 36, "neurona sensitiva", { fs: 10.5, maxW: 110, bold: true, color: "var(--pen)" })}
  <circle cx="200" cy="90" r="5" fill="var(--leaf)"/>${B.tx(208, 154, "interneurona", { fs: 10, maxW: 60, bold: true, color: "var(--leaf)" })}
  <path d="M196 102 C 150 130, 100 140, 54 132" fill="none" stroke="var(--red)" stroke-width="3" marker-end="url(#anaArc)"/>
  ${B.tx(118, 156, "neurona motora", { fs: 10.5, maxW: 110, bold: true, color: "var(--red)" })}
  <rect x="14" y="120" width="34" height="26" rx="10" fill="var(--red)" fill-opacity=".3" stroke="var(--red)" stroke-width="2"/>${B.tx(31, 170, "músculo", { fs: 10, maxW: 60, bold: true, color: "var(--red)" })}`, "");

module.exports = B.tema({
  titulo: "Los sistemas nervioso y endocrino",
  minutos: 120,
  objetivos: [
    "Describir la organización del sistema nervioso y la estructura y función de la neurona y la sinapsis",
    "Identificar las partes del encéfalo y de la médula espinal y sus funciones en el control del movimiento",
    "Explicar los actos reflejos y voluntarios, la propiocepción y el aprendizaje motor",
    "Distinguir el sistema nervioso autónomo simpático y parasimpático y su papel en el ejercicio y el estrés",
    "Describir el sistema endocrino, las principales glándulas y hormonas y su relación con la actividad física",
  ],
  claves: ["neurona", "sinapsis", "neurotransmisor", "potencial de acción", "encéfalo", "cerebelo", "médula espinal", "arco reflejo", "propiocepción", "simpático", "parasimpático", "hormona"],
  pregunta: {
    texto: "Si tocas una sartén caliente, apartas la mano antes de sentir el dolor. ¿Cómo puede el cuerpo reaccionar antes de que el cerebro «se entere»?",
    respuesta: "Porque es un <mark>acto reflejo</mark>. El impulso viaja por una neurona sensitiva hasta la <b>médula espinal</b>, que da directamente la orden de contraer los músculos del brazo sin esperar al cerebro. Al mismo tiempo, otra vía sube el mensaje hasta la corteza cerebral, que lo convierte en la sensación de dolor unas décimas de segundo después. El reflejo ahorra un tiempo que puede evitar una quemadura grave.",
  },
  lectura: {
    titulo: "El pianista y el portero",
    html: `<p>Un pianista profesional puede tocar más de veinte notas por segundo, cada una con la fuerza y la duración exactas. Un portero de fútbol detiene un penalti que tarda menos de medio segundo en llegar a la portería: tiene que leer la carrera del lanzador, adivinar el lado, decidir y lanzarse, todo en un abrir y cerrar de ojos. Ninguno de los dos piensa conscientemente en cada movimiento. Años de práctica han grabado esos gestos en su sistema nervioso.</p>
    <p>Detrás de cada movimiento hay miles de millones de neuronas que se comunican por señales eléctricas y químicas. Unas reciben información de los ojos, de la piel o de los propios músculos; otras deciden; otras dan las órdenes. Y a su lado, más lento pero igual de poderoso, trabaja el sistema endocrino: la adrenalina que acelera el corazón antes de un estreno, la hormona del crecimiento que actúa mientras duermes o la insulina que reparte la energía tras comer.</p>
    <p>En este tema descubrirás cómo los sistemas nervioso y endocrino coordinan el organismo, cómo aprendemos un movimiento nuevo y por qué los nervios antes de actuar no son tus enemigos.</p>`,
  },
  secciones: [3, 5, 5],
  bloques: [
    {
      h: "La coordinación del organismo",
      html: `<p>Para funcionar como un todo, el organismo necesita <b>coordinación</b>: recibir información del exterior y del interior, procesarla y elaborar respuestas adecuadas. De ello se encargan dos sistemas que colaboran estrechamente:</p>
      <ul><li><b>Sistema nervioso</b>: transmite mensajes eléctricos a gran velocidad por las neuronas. Sus respuestas son <b>rápidas</b>, <b>breves</b> y muy <b>localizadas</b>: contraer un músculo concreto en milisegundos.</li>
      <li><b>Sistema endocrino</b>: libera <b>hormonas</b> a la sangre, que llegan a todo el cuerpo. Sus respuestas son más <b>lentas</b> (segundos, horas o años), <b>duraderas</b> y suelen afectar a muchos órganos: el crecimiento, el metabolismo, la pubertad.</li></ul>
      <p>Ambos están conectados: el <b>hipotálamo</b>, una pequeña región del encéfalo, controla la <b>hipófisis</b>, la glándula que dirige a muchas otras. Por eso se habla de un <mark>sistema neuroendocrino</mark>.</p>
      <p>Cualquier respuesta sigue el mismo esquema: un <b>estímulo</b> (un balón que se acerca, un aumento de la glucosa) es captado por un <b>receptor</b> (el ojo, una célula del páncreas), se transmite al <b>centro de coordinación</b> (el encéfalo, la médula o una glándula), que elabora una respuesta ejecutada por un <b>efector</b> (un músculo o una glándula). En las artes y el deporte, la calidad de este proceso marca la diferencia: percibir antes, decidir mejor y ejecutar con precisión.</p>`,
      svg: B.comparar("Sistema nervioso frente a sistema endocrino", ["Nervioso", ["impulsos eléctricos", "muy rápido", "breve", "localizado"]], ["Endocrino", ["hormonas en sangre", "más lento", "duradero", "generalizado"]]),
    },
    {
      h: "La neurona y el impulso nervioso",
      html: `<p>La <b>neurona</b> (tema 1) es la unidad del sistema nervioso. Recibe señales por las <b>dendritas</b> y el cuerpo celular, y las conduce por el <b>axón</b> hasta sus terminales. Según su función se distinguen:</p>
      <ul><li><b>Neuronas sensitivas</b> (aferentes): llevan información de los receptores al sistema nervioso central.</li>
      <li><b>Interneuronas</b> o de asociación: conectan neuronas dentro del encéfalo y la médula; procesan la información.</li>
      <li><b>Neuronas motoras</b> (eferentes): llevan las órdenes a los músculos y glándulas.</li></ul>
      <p>El <b>impulso nervioso</b> es una señal eléctrica. En reposo, el interior de la neurona es negativo respecto al exterior (unos −70 mV): es el <b>potencial de reposo</b>, mantenido por la bomba de sodio-potasio, que consume ATP. Cuando un estímulo es suficientemente fuerte (supera el <b>umbral</b>), se abren canales de sodio, este entra y el interior se vuelve positivo: es el <b>potencial de acción</b>, que se propaga a lo largo del axón como una ola. Sigue la ley del <b>todo o nada</b>: si se supera el umbral, el impulso tiene siempre la misma intensidad; un estímulo más fuerte produce más impulsos por segundo, no impulsos más grandes.</p>
      <p>La <b>mielina</b> hace que el impulso salte de un nódulo de Ranvier al siguiente (conducción saltatoria), lo que aumenta la velocidad hasta unos <mark>120 m/s</mark> en los axones motores gruesos, frente a menos de 2 m/s en los finos sin mielina, como los del dolor sordo.</p>`,
      svg: B.flujo("Fases del impulso nervioso", ["Reposo: interior negativo (−70 mV)", "Estímulo supera el umbral", "Entra sodio: interior positivo", "Sale potasio: vuelve al reposo", "El impulso avanza por el axón"], { t: "Potencial de acción" }),
      video: { id: "MuTMJnIjRPE", titulo: "¿Qué son las NEURONAS y cuáles son sus partes? Tipos de neuronas y funciones", canal: "Astraway", vistas: 320047 },
    },
    {
      h: "La sinapsis y los neurotransmisores",
      html: `<p>Las neuronas no se tocan. Entre la terminal del axón y la célula siguiente queda un espacio de unos 20 nanómetros, la <b>hendidura sináptica</b>. La comunicación en este punto, la <b>sinapsis</b>, es química:</p>
      <ol><li>El impulso llega a la terminal del axón (neurona presináptica).</li>
      <li>Entra calcio y se liberan unas vesículas cargadas de <b>neurotransmisores</b> en la hendidura.</li>
      <li>Los neurotransmisores se unen a <b>receptores</b> de la célula siguiente (neurona postsináptica, músculo o glándula) y la excitan o la inhiben.</li>
      <li>El neurotransmisor se elimina o se recapta y la sinapsis queda lista para otra señal.</li></ol>
      <p>Algunos neurotransmisores importantes son la <b>acetilcolina</b> (en la placa motora, activa el músculo esquelético), la <b>noradrenalina</b> (sistema simpático, alerta), la <b>dopamina</b> (motivación, recompensa y control del movimiento; su falta causa la enfermedad de Parkinson), la <b>serotonina</b> (estado de ánimo, sueño), el <b>GABA</b> (principal inhibidor) y las <b>endorfinas</b>, que alivian el dolor y producen bienestar tras el ejercicio prolongado.</p>
      <p>Muchas drogas y fármacos actúan en las sinapsis: la cafeína bloquea receptores de adenosina (que da sueño), el alcohol potencia el GABA y entorpece la coordinación, y la nicotina imita a la acetilcolina. Por eso alteran la percepción, los reflejos y el aprendizaje.</p>`,
      svg: B.flujo("Pasos de la transmisión en la sinapsis química", ["Llega el impulso al axón", "Se liberan neurotransmisores", "Se unen a receptores", "Excitan o inhiben la célula", "Se eliminan o se recaptan"], { t: "La sinapsis" }),
    },
    {
      h: "Organización del sistema nervioso",
      html: `<p>El sistema nervioso se divide en dos partes:</p>
      <ul><li><b>Sistema nervioso central</b> (SNC): el <b>encéfalo</b>, dentro del cráneo, y la <b>médula espinal</b>, dentro del conducto vertebral. Procesa la información y elabora las respuestas. Está protegido por el hueso, por tres membranas, las <b>meninges</b>, y por el <b>líquido cefalorraquídeo</b>, que amortigua los golpes.</li>
      <li><b>Sistema nervioso periférico</b> (SNP): los <b>nervios</b> y los ganglios que conectan el SNC con el resto del cuerpo. Hay 12 pares de <b>nervios craneales</b>, que salen del encéfalo (el óptico, el auditivo, el facial…), y 31 pares de <b>nervios raquídeos</b> o espinales, que salen de la médula entre las vértebras.</li></ul>
      <p>Por su función, el SNP se divide en:</p>
      <ul><li><b>Sistema nervioso somático</b>: controla los movimientos <b>voluntarios</b> de los músculos esqueléticos y recoge la información de los sentidos.</li>
      <li><b>Sistema nervioso autónomo</b> o vegetativo: regula de forma <b>involuntaria</b> el corazón, los vasos, el aparato digestivo y las glándulas. Tiene dos ramas, el simpático y el parasimpático.</li></ul>
      <p>En el SNC se distingue la <b>sustancia gris</b>, formada por cuerpos neuronales (procesa), de la <b>sustancia blanca</b>, formada por axones con mielina (conduce). En el cerebro la gris está fuera (corteza) y en la médula, dentro, con forma de mariposa.</p>`,
      svg: B.capas("Organización del sistema nervioso", [["SNC", "encéfalo y médula"], ["SNP", "nervios y ganglios"], ["Somático", "voluntario: músculos"], ["Autónomo", "involuntario: órganos"]], { t: "Divisiones" }),
      video: { id: "LASmiv8PeYM", titulo: "SISTEMA NERVIOSO explicado FÁCIL: anatomía y fisiología", canal: "Dr. Alberto Sanagustín", vistas: 4209825 },
    },
    {
      h: "El encéfalo",
      html: `<p>El <b>encéfalo</b> pesa unos 1,4 kg, tiene unos 86 000 millones de neuronas y consume cerca del 20 % de la energía del cuerpo en reposo. Sus partes principales son:</p>
      <ul><li><b>Cerebro</b>: dividido en dos <b>hemisferios</b> unidos por el cuerpo calloso. Su capa externa, la <b>corteza cerebral</b>, plegada en circunvoluciones, se organiza en <b>lóbulos</b>: <b>frontal</b> (planificación, decisiones, lenguaje hablado y movimiento voluntario), <b>parietal</b> (tacto y posición del cuerpo), <b>temporal</b> (audición y memoria) y <b>occipital</b> (visión). Cada hemisferio controla la mitad opuesta del cuerpo.</li>
      <li><b>Cerebelo</b>: detrás y debajo del cerebro. Coordina los movimientos, mantiene el <b>equilibrio</b> y el tono muscular y corrige los errores comparando la orden con lo que realmente ocurre. Es clave en el aprendizaje de habilidades motoras: un daño en el cerebelo produce movimientos torpes y temblorosos.</li>
      <li><b>Tronco del encéfalo</b> (mesencéfalo, protuberancia y bulbo raquídeo): conecta el cerebro con la médula y contiene los centros que regulan la respiración, el ritmo cardíaco y la presión arterial.</li>
      <li><b>Diencéfalo</b>: el <b>tálamo</b>, que filtra y reparte la información sensorial, y el <b>hipotálamo</b>, que regula la temperatura, el hambre, la sed, el sueño y el sistema endocrino.</li></ul>
      <p>Los <b>ganglios basales</b>, en el interior del cerebro, ayudan a iniciar y suavizar los movimientos y a automatizar secuencias aprendidas, como una coreografía.</p>`,
      svg: B.cajas("Partes del encéfalo y funciones", [["Cerebro", "corteza|voluntad, sentidos"], ["Cerebelo", "coordinación|equilibrio"], ["Tronco", "respiración|y corazón"], ["Hipotálamo", "temperatura|y hormonas"]], { t: "El encéfalo" }),
    },
    {
      h: "La médula espinal y los actos reflejos",
      html: `<p>La <b>médula espinal</b> es un cordón de unos 45 cm que baja por el conducto vertebral desde el bulbo hasta la segunda vértebra lumbar. Tiene dos funciones:</p>
      <ul><li><b>Conducción</b>: por su sustancia blanca suben las vías sensitivas hacia el encéfalo y bajan las vías motoras hacia los músculos. Una lesión medular interrumpe estas vías: por debajo de ella se pierde la sensibilidad y el movimiento voluntario (paraplejia o tetraplejia).</li>
      <li><b>Centro de reflejos</b>: elabora respuestas automáticas.</li></ul>
      <p>Un <b>acto reflejo</b> es una respuesta rápida, involuntaria e innata ante un estímulo. Su recorrido es el <b>arco reflejo</b>: receptor → neurona sensitiva → centro (médula) → neurona motora → efector. Ejemplos:</p>
      <ul><li><b>Reflejo rotuliano</b> o miotático: un golpe en el tendón rotuliano estira el cuádriceps y este se contrae. Es un reflejo de estiramiento que protege al músculo de estiramientos bruscos y ayuda a mantener la postura.</li>
      <li><b>Reflejo de retirada</b>: apartar la mano de algo que quema o pincha.</li>
      <li>Reflejos de equilibrio y enderezamiento, que corrigen la postura sin pensar.</li></ul>
      <p>El <b>reflejo de estiramiento</b> explica por qué los estiramientos con rebotes no son recomendables: el estiramiento brusco activa la contracción del músculo que se quiere alargar. Los estiramientos <mark>lentos y mantenidos</mark> lo evitan.</p>`,
      svg: arco,
    },
    {
      h: "El movimiento voluntario y la propiocepción",
      html: `<p>Un <b>acto voluntario</b> es consciente y aprendido. Sigue estas fases:</p>
      <ol><li><b>Percepción</b>: los receptores captan la situación (ver el balón, oír la música).</li>
      <li><b>Decisión</b>: la corteza asociativa y la frontal eligen la respuesta.</li>
      <li><b>Programación</b>: la corteza motora, los ganglios basales y el cerebelo organizan qué músculos actúan, con qué fuerza y en qué orden.</li>
      <li><b>Ejecución</b>: las órdenes bajan por la vía motora (piramidal) y la médula hasta los músculos.</li>
      <li><b>Control</b>: el cerebelo compara lo que pasa con lo previsto y corrige.</li></ol>
      <p>Para controlar el movimiento, el sistema nervioso necesita saber en todo momento dónde está cada parte del cuerpo. Esta información la da la <b>propiocepción</b>, el «sexto sentido» del movimiento, gracias a receptores situados en el propio aparato locomotor:</p>
      <ul><li><b>Husos neuromusculares</b>: dentro del músculo, detectan su longitud y la velocidad de estiramiento (inician el reflejo de estiramiento).</li>
      <li><b>Órganos tendinosos de Golgi</b>: en los tendones, detectan la tensión y, si es excesiva, relajan el músculo para protegerlo.</li>
      <li>Receptores de las <b>articulaciones</b> y de la piel.</li></ul>
      <p>Junto con el <b>oído interno</b> (aparato vestibular, que detecta la posición y los giros de la cabeza) y la vista, la propiocepción permite el <b>equilibrio</b>. Se puede entrenar: los ejercicios sobre superficies inestables reducen los esguinces, y los bailarines entrenan la mirada fija («spotting») para no marearse en los giros.</p>`,
      svg: B.cajas("Receptores de la propiocepción y el equilibrio", [["Huso muscular", "longitud del|músculo"], ["Órgano de Golgi", "tensión del|tendón"], ["Articulación", "posición|y ángulo"], ["Oído interno", "giros y|equilibrio"]], { t: "Propiocepción" }),
    },
    {
      h: "El aprendizaje motor",
      html: `<p>El <b>aprendizaje motor</b> es el proceso por el que una habilidad se adquiere y se perfecciona con la práctica hasta hacerse automática. Se suelen describir tres fases:</p>
      <ul><li><b>Fase cognitiva</b>: el principiante piensa en cada detalle, comete muchos errores y sus movimientos son lentos y rígidos. Ayudan las explicaciones claras y las demostraciones.</li>
      <li><b>Fase asociativa</b>: los errores disminuyen, el movimiento se encadena y se vuelve más fluido; la persona empieza a corregirse sola gracias a la información de sus sentidos.</li>
      <li><b>Fase autónoma</b>: el gesto se ejecuta casi sin atención consciente, de forma eficaz y económica, lo que libera la mente para otras tareas (mirar a los compañeros, interpretar la música).</li></ul>
      <p>Este proceso se basa en la <b>plasticidad neuronal</b>: la práctica refuerza las sinapsis que se usan, aumenta la mielina de las vías implicadas y reorganiza la corteza motora. Por eso «lo que no se usa se pierde» y las habilidades bien aprendidas, como montar en bicicleta, duran años.</p>
      <p>Algunas claves para aprender mejor: practicar de forma <b>distribuida</b> (sesiones cortas y frecuentes mejor que una larga), con variedad, recibir <b>retroalimentación</b> (del profesor, de un vídeo, de los resultados), usar la <b>práctica mental</b> o visualización (activa zonas motoras parecidas a las de la ejecución real) y dormir bien: durante el <mark>sueño</mark> se consolida lo aprendido.</p>`,
      svg: B.flujo("Fases del aprendizaje motor", ["Cognitiva: pienso cada paso", "Asociativa: encadeno y corrijo", "Autónoma: lo hago sin pensar"], { t: "Aprendizaje motor" }),
    },
    {
      h: "El sistema nervioso autónomo",
      html: `<p>El <b>sistema nervioso autónomo</b> regula de forma involuntaria el medio interno. Sus dos ramas suelen actuar sobre los mismos órganos con efectos opuestos:</p>
      <table class="tb"><tr><th>Órgano</th><th>Simpático («lucha o huida»)</th><th>Parasimpático («reposo y digestión»)</th></tr>
      <tr><td>Corazón</td><td>acelera y aumenta la fuerza</td><td>frena</td></tr>
      <tr><td>Bronquios</td><td>dilata</td><td>contrae</td></tr>
      <tr><td>Pupilas</td><td>dilata</td><td>contrae</td></tr>
      <tr><td>Aparato digestivo</td><td>frena la digestión, seca la boca</td><td>estimula la digestión y la saliva</td></tr>
      <tr><td>Vasos de los músculos</td><td>dilata</td><td>—</td></tr>
      <tr><td>Hígado</td><td>libera glucosa</td><td>almacena glucógeno</td></tr></table>
      <p>El <b>simpático</b> prepara el cuerpo para la acción y el esfuerzo: se activa con el ejercicio, el peligro, la emoción o los nervios antes de una actuación, y estimula la liberación de <b>adrenalina</b>. El <b>parasimpático</b> (sobre todo a través del <b>nervio vago</b>) favorece la recuperación, el descanso y la digestión.</p>
      <p>La <b>ansiedad escénica</b> o «miedo escénico» es una activación simpática intensa: taquicardia, temblor, sudor frío, boca seca y respiración superficial. Un cierto grado de activación mejora el rendimiento, pero en exceso lo empeora. Técnicas como la <b>respiración lenta</b> con espiración larga, la relajación progresiva y la visualización estimulan el parasimpático y ayudan a encontrar el punto óptimo.</p>`,
      svg: B.comparar("Simpático frente a parasimpático", ["Simpático", ["lucha o huida", "acelera el corazón", "dilata bronquios", "frena digestión"]], ["Parasimpático", ["reposo", "frena el corazón", "contrae bronquios", "activa digestión"]]),
      video: { id: "3reuWDK70Gw", titulo: "Sistema nervioso AUTÓNOMO [Simpático y Parasimpático]", canal: "Nutrimente", vistas: 435863 },
    },
    {
      h: "El sistema endocrino y las hormonas",
      html: `<p>El <b>sistema endocrino</b> está formado por <b>glándulas endocrinas</b>, que fabrican <b>hormonas</b> y las vierten a la sangre. Las hormonas son mensajeros químicos que actúan en cantidades muy pequeñas solo sobre las células que tienen <b>receptores</b> específicos para ellas, sus <b>células diana</b>, como una llave que solo abre ciertas cerraduras.</p>
      <p>La secreción de hormonas se regula sobre todo por <b>retroalimentación negativa</b>: cuando la hormona alcanza su efecto, se frena su producción. El centro de mando es el eje <b>hipotálamo-hipófisis</b>: el hipotálamo recibe información nerviosa y envía señales a la <b>hipófisis</b>, una glándula del tamaño de un garbanzo situada bajo el encéfalo, que libera hormonas que controlan otras glándulas (tiroides, suprarrenales, gónadas) además de la <b>hormona del crecimiento</b>.</p>
      <p>Hay hormonas que solo actúan cerca de donde se producen y otras que viajan por todo el cuerpo. Las hormonas también varían a lo largo del día (el cortisol es máximo al despertar; la hormona del crecimiento, durante el sueño profundo) y a lo largo de la vida: en la <b>pubertad</b> las hormonas sexuales producen el estirón, el aumento de la masa muscular y ósea y los caracteres sexuales secundarios.</p>
      <p>Las alteraciones hormonales producen enfermedades como la <b>diabetes</b> (falta de insulina o resistencia a ella), el hipotiroidismo o el hipertiroidismo, y problemas de crecimiento.</p>`,
      svg: B.flujo("Eje hipotálamo-hipófisis y retroalimentación", ["Hipotálamo: recibe información", "Hipófisis: hormonas de control", "Glándula diana: tiroides", "Hormona final: efecto en las células", "Retroalimentación negativa: frena"], { t: "Control hormonal" }),
    },
    {
      h: "Las principales glándulas y hormonas",
      html: `<table class="tb"><tr><th>Glándula</th><th>Hormona</th><th>Efecto principal</th></tr>
      <tr><td>Hipófisis</td><td>hormona del crecimiento (GH)</td><td>crecimiento de huesos y músculos; moviliza grasas</td></tr>
      <tr><td>Hipófisis</td><td>ADH (antidiurética)</td><td>retiene agua en el riñón (importante al sudar)</td></tr>
      <tr><td>Tiroides</td><td>tiroxina (T4) y T3</td><td>regula el metabolismo basal y el desarrollo</td></tr>
      <tr><td>Paratiroides</td><td>parathormona</td><td>sube el calcio en sangre (lo toma del hueso)</td></tr>
      <tr><td>Páncreas</td><td>insulina / glucagón</td><td>baja / sube la glucosa en sangre</td></tr>
      <tr><td>Médula suprarrenal</td><td>adrenalina y noradrenalina</td><td>respuesta rápida al estrés y al esfuerzo</td></tr>
      <tr><td>Corteza suprarrenal</td><td>cortisol / aldosterona</td><td>moviliza energía y frena la inflamación / retiene sodio</td></tr>
      <tr><td>Testículos</td><td>testosterona</td><td>caracteres masculinos, masa muscular y ósea</td></tr>
      <tr><td>Ovarios</td><td>estrógenos y progesterona</td><td>caracteres femeninos, ciclo menstrual, salud ósea</td></tr>
      <tr><td>Epífisis (pineal)</td><td>melatonina</td><td>regula el ciclo de sueño y vigilia</td></tr></table>
      <p>La <b>insulina</b> y el <b>glucagón</b> son un buen ejemplo de hormonas antagonistas: tras comer, sube la glucosa y el páncreas libera insulina, que la hace entrar en las células y almacenarse como glucógeno; en ayunas o durante el ejercicio, el glucagón hace que el hígado libere glucosa. La <b>melatonina</b> se segrega con la oscuridad; la luz de las pantallas por la noche la reduce y retrasa el sueño.</p>`,
      svg: B.rejilla("Glándulas y hormonas principales", ["Glándula", "Hormona"], [["Hipófisis", "GH, ADH"], ["Tiroides", "tiroxina"], ["Páncreas", "insulina, glucagón"], ["Suprarrenal", "adrenalina, cortisol"], ["Gónadas", "testost., estrógenos"]], { t: "Glándulas endocrinas" }),
      video: { id: "6dayf1lkU08", titulo: "El SISTEMA ENDOCRINO explicado: cómo funciona, partes y hormonas", canal: "Astraway", vistas: 271079 },
    },
    {
      h: "Hormonas, ejercicio y estrés",
      html: `<p>Durante el ejercicio, el sistema endocrino ajusta el metabolismo para que no falte energía:</p>
      <ul><li><b>Suben</b> la <b>adrenalina</b> y la <b>noradrenalina</b> (aceleran el corazón, dilatan los bronquios, liberan glucosa y grasas), el <b>glucagón</b>, el <b>cortisol</b> (en esfuerzos largos), la <b>hormona del crecimiento</b> y la <b>ADH</b> y la aldosterona, que retienen agua y sodio para compensar el sudor.</li>
      <li><b>Baja</b> la <b>insulina</b>: aun así, el músculo que trabaja capta glucosa sin necesitar tanta insulina, por eso el ejercicio ayuda a controlar la diabetes.</li></ul>
      <p>El ejercicio regular también mejora la sensibilidad a la insulina, aumenta las <b>endorfinas</b> y otras sustancias que mejoran el ánimo y reduce la respuesta excesiva al estrés.</p>
      <p>El <b>estrés</b> es la respuesta del organismo a una situación percibida como amenaza o exigencia. A corto plazo es útil (simpático y adrenalina). Pero si se mantiene semanas o meses, el <b>cortisol</b> elevado de forma crónica altera el sueño, el apetito, la memoria y las defensas, y favorece las lesiones. El <b>sobreentrenamiento</b> —entrenar mucho sin descansar lo suficiente— produce un cuadro parecido: cansancio, bajo rendimiento, irritabilidad y frecuencia cardíaca de reposo elevada.</p>
      <p>Las <mark>hormonas anabolizantes</mark> (testosterona sintética y derivados) y la hormona del crecimiento usadas para aumentar el músculo son dopaje y tienen efectos graves: lesiones de hígado y corazón, alteraciones hormonales, acné, cambios de carácter y, en adolescentes, cierre prematuro de los cartílagos de crecimiento.</p>`,
      svg: B.barras("Cambios hormonales durante un ejercicio intenso (sube o baja)", [["Adrenalina", 10], ["Glucagón", 3], ["Cortisol", 2], ["GH", 5], ["Insulina", 0.5]], { t: "Veces respecto a reposo (aprox.)" }),
    },
    {
      h: "Salud del sistema nervioso",
      html: `<p>El sistema nervioso es delicado y apenas se regenera, por lo que la prevención es fundamental:</p>
      <ul><li><b>Sueño</b>: los adolescentes necesitan 8-10 horas. Durante el sueño se consolida el aprendizaje, se elimina material de desecho del cerebro y se libera hormona del crecimiento. Dormir poco empeora la atención, el tiempo de reacción, la coordinación y el estado de ánimo, y aumenta las lesiones.</li>
      <li><b>Traumatismos</b>: las conmociones cerebrales en el deporte deben tomarse en serio: ante un golpe en la cabeza con mareo, confusión o dolor, hay que dejar de jugar y consultar. El casco en la bici, el patinete o la escalada salva vidas.</li>
      <li><b>Drogas</b>: el alcohol, el cannabis y otras sustancias alteran las sinapsis; el cerebro adolescente, todavía en maduración (el lóbulo frontal termina hacia los 25 años), es especialmente vulnerable a sus efectos sobre la memoria y el control de impulsos.</li>
      <li><b>Pantallas</b>: la luz azul y la estimulación nocturna retrasan la melatonina y acortan el sueño; conviene apagarlas al menos una hora antes de dormir.</li>
      <li><b>Actividad física</b>: aumenta el riego cerebral y la formación de nuevas conexiones, mejora la memoria y la atención y reduce la ansiedad y la depresión.</li></ul>
      <p>Las actividades que combinan movimiento, música, coordinación y memoria —bailar, tocar un instrumento, hacer teatro— son de las más completas para el cerebro porque estimulan a la vez zonas motoras, sensoriales, emocionales y cognitivas.</p>`,
      svg: B.cajas("Hábitos para cuidar el sistema nervioso", [["Dormir", "8-10 h|consolida"], ["Moverse", "más riego|y conexiones"], ["Proteger", "casco|y prudencia"], ["Evitar", "drogas y|pantallas de noche"]], { t: "Cuidar el cerebro" }),
    },
  ],
  figura: {
    titulo: "Los sistemas nervioso y endocrino en cuatro ideas",
    items: [["Neurona", "−70 → +30 mV", "impulso eléctrico", "todo o nada"], ["Sinapsis", "neurotransmisor", "la señal pasa", "de forma química"], ["Reflejo", "receptor → médula", "rápido, innato", "e involuntario"], ["Hormonas", "glándula → sangre", "lentas, duraderas,", "células diana"]],
  },
  video: { id: "Rv8LbNg5C4I", titulo: "El SISTEMA NERVIOSO humano explicado: cómo funciona y sus partes", canal: "Astraway", vistas: 850102 },
  quiz: [
    ["¿Qué sistema da respuestas más rápidas y localizadas?", ["Endocrino", "Nervioso", "Digestivo", "Linfático"], 1, "El endocrino es más lento y generalizado."],
    ["Las neuronas que llevan órdenes a los músculos son…", ["sensitivas", "motoras", "interneuronas", "gliales"], 1, "También llamadas eferentes."],
    ["En reposo, el interior de la neurona es…", ["positivo", "negativo", "neutro", "igual que fuera"], 1, "Unos −70 mV."],
    ["La mielina sirve para…", ["fabricar neurotransmisores", "aumentar la velocidad del impulso", "nutrir el músculo", "producir hormonas"], 1, "Conducción saltatoria."],
    ["El neurotransmisor de la placa motora es la…", ["dopamina", "acetilcolina", "serotonina", "insulina"], 1, "Activa la fibra muscular."],
    ["El sistema nervioso central está formado por…", ["nervios y ganglios", "encéfalo y médula espinal", "cerebro y cerebelo", "simpático y parasimpático"], 1, "El periférico son los nervios y ganglios."],
    ["La parte del encéfalo que coordina los movimientos y el equilibrio es el…", ["bulbo", "cerebelo", "tálamo", "lóbulo occipital"], 1, "También corrige errores."],
    ["La visión se procesa en el lóbulo…", ["frontal", "parietal", "temporal", "occipital"], 3, "En la parte posterior del cerebro."],
    ["Los centros que regulan la respiración están en…", ["el cerebelo", "el bulbo raquídeo", "el lóbulo frontal", "la hipófisis"], 1, "Tronco del encéfalo."],
    ["El reflejo rotuliano tiene su centro en…", ["la corteza", "la médula espinal", "el cerebelo", "la hipófisis"], 1, "Es un arco reflejo medular."],
    ["Los husos neuromusculares detectan…", ["la tensión del tendón", "la longitud del músculo", "la temperatura", "el dolor"], 1, "Los órganos de Golgi detectan la tensión."],
    ["En la fase autónoma del aprendizaje motor…", ["se piensa cada detalle", "el gesto sale casi sin atención", "hay muchos errores", "no se puede mejorar"], 1, "Libera la atención para otras tareas."],
    ["El sistema simpático…", ["frena el corazón", "activa la digestión", "acelera el corazón", "contrae las pupilas"], 2, "Prepara para la acción."],
    ["El nervio vago pertenece al sistema…", ["simpático", "parasimpático", "somático", "endocrino"], 1, "Frena el corazón y activa la digestión."],
    ["Las células diana de una hormona son las que…", ["la fabrican", "tienen receptores para ella", "la destruyen", "la transportan"], 1, "Solo en ellas actúa."],
    ["La glándula que controla a muchas otras es la…", ["tiroides", "hipófisis", "suprarrenal", "pineal"], 1, "Dirigida por el hipotálamo."],
    ["La hormona que baja la glucosa en sangre es la…", ["glucagón", "insulina", "adrenalina", "tiroxina"], 1, "La fabrica el páncreas."],
    ["La tiroxina regula…", ["el sueño", "el metabolismo basal", "el calcio", "el agua"], 1, "La fabrica la tiroides."],
    ["La melatonina se segrega sobre todo…", ["con la luz", "con la oscuridad", "al comer", "al hacer ejercicio"], 1, "Regula el sueño."],
    ["Durante el ejercicio, la insulina…", ["sube mucho", "baja", "no cambia", "desaparece del todo"], 1, "Suben adrenalina y glucagón."],
  ],
  examen: [
    ["Si un estímulo es más intenso, el impulso nervioso…", ["es más grande", "se repite con más frecuencia", "va más despacio", "no cambia en nada"], 1, "Ley del todo o nada."],
    ["Un axón con mielina conduce a 100 m/s. ¿Cuánto tarda el impulso en recorrer 1 m desde la médula hasta el pie?", ["1 s", "0,1 s", "0,01 s", "10 s"], 2, "t = 1 / 100 = 0,01 s = 10 ms."],
    ["Una lesión en el lóbulo occipital afectaría sobre todo a…", ["la visión", "el equilibrio", "la respiración", "el olfato"], 0, "El occipital procesa la visión."],
    ["¿Por qué no se recomiendan los estiramientos con rebotes?", ["Por el reflejo de estiramiento", "Porque cansan", "Porque activan el parasimpático", "Por la insulina"], 0, "El estiramiento brusco hace contraerse al músculo."],
    ["La boca seca y el corazón acelerado antes de un examen se deben al…", ["parasimpático", "simpático", "cerebelo", "glucagón"], 1, "Respuesta de lucha o huida."],
    ["Una persona con daño en el cerebelo tendrá…", ["ceguera", "movimientos torpes y falta de equilibrio", "insomnio", "diabetes"], 1, "El cerebelo coordina."],
    ["Tras comer pasta, ¿qué hormona aumenta?", ["Glucagón", "Insulina", "Adrenalina", "Cortisol"], 1, "Para que la glucosa entre en las células."],
    ["Usar anabolizantes en la adolescencia puede…", ["alargar los huesos", "cerrar antes los cartílagos de crecimiento", "mejorar el sueño", "reducir el riesgo cardíaco"], 1, "Detiene el crecimiento en altura."],
  ],
  feynman: ["Qué diferencia hay entre la coordinación nerviosa y la endocrina", "Cómo se produce y viaja el impulso nervioso", "Qué ocurre en una sinapsis", "Por qué un reflejo es más rápido que un acto voluntario", "Cómo aprendemos un movimiento hasta automatizarlo", "Qué hacen la insulina, el glucagón y la adrenalina durante el ejercicio"],
  mapa: ["COORDINACIÓN", [["Neurona", "impulso · mielina · sinapsis"], ["SNC y SNP", "encéfalo · médula · nervios"], ["Movimiento", "reflejo · voluntario · propiocepción"], ["Endocrino", "hipófisis · insulina · adrenalina"]]],
  tarjetas: [
    ["Nervioso y endocrino", "Nervioso: rápido y local. Endocrino: lento, duradero y general."],
    ["Tipos de neuronas", "Sensitivas, interneuronas y motoras."],
    ["Potencial de acción", "Entra sodio, el interior pasa a positivo; ley del todo o nada."],
    ["Sinapsis", "Comunicación química con neurotransmisores en la hendidura."],
    ["SNC y SNP", "Central: encéfalo y médula. Periférico: nervios y ganglios."],
    ["Cerebelo", "Coordinación, equilibrio y aprendizaje motor."],
    ["Arco reflejo", "Receptor → neurona sensitiva → médula → neurona motora → efector."],
    ["Propiocepción", "Husos musculares, órganos de Golgi y receptores articulares."],
    ["Aprendizaje motor", "Fases cognitiva, asociativa y autónoma."],
    ["Simpático y parasimpático", "Acción y alerta / reposo y digestión."],
    ["Hormona", "Mensajero químico que actúa sobre células diana."],
    ["Insulina y glucagón", "Bajan y suben la glucosa en sangre."],
  ],
  ejemplos: [
    ["Analiza las fases del acto voluntario de un portero que para un penalti.", ["Percepción: los ojos ven la carrera y la orientación del lanzador.", "Decisión: la corteza elige el lado en función de la información y la experiencia.", "Programación: corteza motora, ganglios basales y cerebelo organizan la estirada.", "Ejecución: la vía motora y la médula activan cuádriceps, glúteos y hombros.", "Control: el cerebelo ajusta la mano en el último momento."], "Un acto voluntario complejo en menos de medio segundo, gracias a patrones automatizados."],
    ["Calcula el tiempo que tarda un impulso en recorrer 1,2 m a 80 m/s y a 1 m/s. Relaciona el resultado con el tipo de fibra.", ["A 80 m/s: t = 1,2 / 80 = 0,015 s = 15 ms.", "A 1 m/s: t = 1,2 / 1 = 1,2 s.", "La primera es una fibra mielinizada gruesa (motora o del tacto); la segunda, una fina sin mielina (dolor sordo)."], "15 ms frente a 1,2 s: la mielina multiplica la velocidad por 80."],
    ["Describe el arco reflejo de retirada al pisar una chincheta.", ["Receptor: receptores del dolor de la planta del pie.", "Neurona sensitiva: lleva el impulso a la médula lumbar.", "Interneuronas en la médula: activan los flexores de esa pierna y, a la vez, los extensores de la otra para no caer.", "Neuronas motoras: llevan la orden a los músculos.", "Efector: la pierna se retira y la otra sostiene el cuerpo."], "Respuesta medular en milisegundos; el dolor se percibe después en la corteza."],
    ["Explica los cambios que produce el sistema autónomo en una actriz justo antes de salir a escena y después de la función.", ["Antes: domina el simpático; suben la FC y la respiración, se dilatan pupilas y bronquios, se seca la boca y se libera adrenalina.", "La activación moderada mejora la atención y la energía.", "Después: domina el parasimpático; bajan la FC y la respiración, vuelven la saliva y el apetito y llega el cansancio."], "Simpático para la actuación, parasimpático para la recuperación."],
    ["Explica qué pasa con la glucosa y las hormonas en un partido de 90 minutos.", ["Al empezar, la adrenalina y el glucagón hacen que el hígado libere glucosa.", "Baja la insulina, pero el músculo activo capta glucosa igualmente.", "Con el tiempo sube el cortisol y se movilizan más grasas.", "Si se agota el glucógeno hepático, la glucosa en sangre puede bajar: fatiga y peor toma de decisiones."], "El control hormonal mantiene la glucosa; tomar glúcidos en el descanso ayuda."],
    ["Diseña una progresión para aprender un paso de baile nuevo siguiendo las fases del aprendizaje motor.", ["Fase cognitiva: demostración, explicación de 2-3 claves y práctica lenta por partes.", "Fase asociativa: unir las partes con música lenta, vídeo para autocorregirse y retroalimentación concreta.", "Fase autónoma: ritmo real, variaciones de espacio y de dirección y doble tarea (mirar al público).", "Práctica distribuida en varios días y descanso nocturno para consolidar."], "Progresión de lo consciente a lo automático, con práctica variada y sueño suficiente."],
  ],
  errores: [
    "Pensar que un estímulo más fuerte produce un impulso más grande: produce más impulsos por segundo.",
    "Creer que las neuronas se tocan: se comunican a través de una hendidura con neurotransmisores.",
    "Confundir cerebro con encéfalo: el encéfalo incluye cerebro, cerebelo, tronco y diencéfalo.",
    "Creer que todos los reflejos pasan por el cerebro: muchos se elaboran en la médula espinal.",
    "Pensar que el simpático es «malo» y el parasimpático «bueno»: ambos son necesarios y se equilibran.",
    "Confundir glándulas endocrinas (a la sangre) con exocrinas (por un conducto).",
  ],
  ejercicios: {
    b: [
      ["Compara la coordinación nerviosa y la hormonal en velocidad, duración y alcance.", "Nerviosa: rápida, breve y localizada. Hormonal: lenta, duradera y generalizada."],
      ["Nombra los tres tipos funcionales de neuronas.", "Sensitivas (aferentes), interneuronas (de asociación) y motoras (eferentes)."],
      ["¿Qué es una sinapsis y cómo se transmite la señal en ella?", "La unión entre una neurona y otra célula; la señal pasa liberando neurotransmisores que se unen a receptores."],
      ["Cita cuatro neurotransmisores y una función de cada uno.", "Acetilcolina (contracción), dopamina (motivación y movimiento), serotonina (ánimo y sueño), endorfinas (alivio del dolor)."],
      ["Diferencia sistema nervioso central y periférico.", "Central: encéfalo y médula, procesa. Periférico: nervios y ganglios, comunica el SNC con el cuerpo."],
      ["Indica la función del cerebelo, del bulbo raquídeo y del hipotálamo.", "Cerebelo: coordinación y equilibrio. Bulbo: respiración y ritmo cardíaco. Hipotálamo: temperatura, hambre, sed y control hormonal."],
      ["Nombra los cuatro lóbulos cerebrales y una función de cada uno.", "Frontal (planificación y movimiento voluntario), parietal (tacto), temporal (audición y memoria), occipital (visión)."],
      ["Ordena las partes del arco reflejo.", "Receptor, neurona sensitiva, centro (médula), neurona motora y efector."],
      ["¿Qué es la propiocepción?", "La percepción de la posición y el movimiento del propio cuerpo gracias a receptores en músculos, tendones y articulaciones."],
      ["Indica dos efectos del simpático y dos del parasimpático.", "Simpático: acelera el corazón y dilata los bronquios. Parasimpático: frena el corazón y activa la digestión."],
      ["Define hormona y célula diana.", "Hormona: mensajero químico que viaja por la sangre. Célula diana: célula con receptores para esa hormona."],
      ["Relaciona: insulina, tiroxina, adrenalina, melatonina con su glándula.", "Páncreas, tiroides, médula suprarrenal y epífisis (pineal)."],
    ],
    m: [
      ["Explica la ley del todo o nada y cómo codifica el sistema nervioso la intensidad de un estímulo.", "Si se supera el umbral, el potencial de acción tiene siempre la misma amplitud; la intensidad se codifica por la frecuencia de impulsos y por el número de neuronas activadas."],
      ["¿Por qué la conducción es más rápida en las fibras con mielina?", "La mielina aísla el axón y el impulso salta de un nódulo de Ranvier a otro (conducción saltatoria) en lugar de recorrer toda la membrana."],
      ["Explica por qué el alcohol empeora el rendimiento en el deporte y la conducción.", "Potencia el GABA inhibidor y deprime el SNC: alarga el tiempo de reacción, empeora la coordinación (cerebelo) y el juicio, y además deshidrata."],
      ["¿Qué consecuencias tiene una lesión de la médula a nivel de las vértebras dorsales?", "Se interrumpen las vías por debajo de la lesión: pérdida de movimiento voluntario y sensibilidad en las piernas (paraplejia), y alteraciones de vejiga e intestino; brazos conservados."],
      ["Explica el reflejo miotático y su relación con los estiramientos.", "Un estiramiento brusco activa los husos musculares y la médula ordena contraer el mismo músculo. Por eso los estiramientos deben ser lentos y mantenidos."],
      ["Describe la función de los órganos tendinosos de Golgi.", "Detectan la tensión en el tendón; si es excesiva, inhiben el músculo para que se relaje y evitar una rotura."],
      ["Explica cómo colaboran vista, oído interno y propiocepción en el equilibrio de una bailarina en un giro.", "El oído interno detecta los giros; la vista, fijando un punto (spotting), da referencia estable; la propiocepción informa de la posición de pies y tobillos. El cerebelo integra todo y corrige."],
      ["Explica las tres fases del aprendizaje motor con el ejemplo de aprender a conducir o a nadar.", "Cognitiva: se piensa cada paso (brazada, respiración). Asociativa: se encadenan los movimientos y se corrigen errores. Autónoma: se hace sin pensar y se puede atender a otras cosas."],
      ["¿Por qué dormir bien mejora el aprendizaje motor?", "Durante el sueño se consolidan las sinapsis reforzadas en la práctica y se libera hormona del crecimiento; la falta de sueño empeora atención, reacción y coordinación."],
      ["Explica el miedo escénico desde el sistema nervioso autónomo y propón dos técnicas para controlarlo.", "Es una activación simpática excesiva (taquicardia, temblor, boca seca). Técnicas: respiración lenta con espiración larga y visualización o relajación progresiva, que activan el parasimpático."],
      ["Explica cómo regulan la glucosa la insulina y el glucagón por retroalimentación negativa.", "Si sube la glucosa, el páncreas libera insulina, que la baja; si baja, libera glucagón, que hace que el hígado libere glucosa. Cada respuesta corrige el cambio y se frena."],
      ["¿Qué papel tienen la ADH y la aldosterona cuando se suda mucho?", "La ADH hace que el riñón retenga agua y la aldosterona, sodio: se produce menos orina y se compensa en parte la pérdida por el sudor."],
      ["Explica qué es el sobreentrenamiento y sus síntomas.", "Un desequilibrio entre carga y recuperación mantenido en el tiempo: cansancio persistente, bajo rendimiento, FC de reposo alta, irritabilidad, mal sueño y más lesiones e infecciones."],
      ["¿Por qué el cerebro adolescente es especialmente vulnerable a las drogas?", "Está en plena maduración (el lóbulo frontal, que controla los impulsos, madura hacia los 25 años) y las drogas alteran las sinapsis y la plasticidad en ese periodo."],
    ],
    a: [
      ["Calcula el tiempo de reacción mínimo de un velocista si el impulso recorre 1,6 m de vía aferente y eferente a 70 m/s, y el procesamiento central tarda 80 ms. Compáralo con la regla de salida nula (100 ms).", "Conducción: 1,6 / 70 = 0,023 s = 23 ms. Total ≈ 103 ms. Por debajo de 100 ms se considera imposible reaccionar al disparo: sería anticipación, por eso se declara salida nula."],
      ["Explica por qué un golpe en la cabeza puede afectar al equilibrio, a la visión y a la memoria según la zona dañada.", "El cerebelo controla el equilibrio; el lóbulo occipital, la visión; el temporal y el hipocampo, la memoria. Una conmoción puede alterar transitoriamente varias funciones; requiere reposo y valoración médica."],
      ["Diseña un programa de propiocepción de 4 semanas para prevenir esguinces de tobillo en un equipo de voleibol.", "Semana 1: apoyo monopodal en suelo firme con ojos abiertos y cerrados. Semana 2: superficies inestables (cojín, bosu). Semana 3: añadir pases de balón y perturbaciones. Semana 4: saltos y caídas sobre una pierna con estabilización. 10 min, 3 veces por semana."],
      ["Un músico de 16 años tiene insomnio y usa el móvil en la cama hasta las 2 h. Explica con el sistema endocrino y nervioso qué ocurre y propón medidas.", "La luz de la pantalla y la estimulación frenan la melatonina y activan el simpático; se retrasa el sueño, se acorta la fase profunda (menos GH y peor consolidación del aprendizaje) y aumenta el cansancio. Medidas: apagar pantallas una hora antes, horario regular, habitación oscura, luz solar por la mañana."],
      ["Relaciona la diabetes tipo 1 con el ejercicio: ¿qué precauciones debe tomar un deportista diabético?", "No produce insulina y se la inyecta. Como el ejercicio baja la glucosa, puede sufrir hipoglucemia: debe medirse la glucosa antes, durante y después, ajustar la insulina y llevar glúcidos de absorción rápida."],
      ["Explica, desde la plasticidad neuronal, por qué la práctica variada favorece la transferencia de una habilidad a situaciones nuevas.", "Practicar en contextos distintos activa y refuerza redes más amplias y flexibles; el sistema nervioso aprende el «programa general» y lo adapta, en lugar de una sola solución rígida."],
      ["Compara las respuestas del simpático y del sistema endocrino ante un susto (un perro que ladra) y ante un examen de dentro de una semana.", "Ante el susto: activación simpática inmediata y adrenalina en segundos, que desaparecen en minutos. Ante el examen: estrés anticipatorio sostenido, con cortisol elevado varios días, que puede alterar sueño y apetito."],
      ["Explica por qué un esprínter entrena las salidas con estímulos sonoros y visuales distintos.", "Para mejorar la percepción y la decisión, que son las fases más largas del tiempo de reacción; la conducción nerviosa apenas cambia con el entrenamiento, pero el procesamiento central sí."],
      ["Argumenta los riesgos del uso de anabolizantes por adolescentes desde la endocrinología.", "Las hormonas externas frenan por retroalimentación la producción propia (atrofia testicular, alteraciones menstruales), cierran antes los cartílagos de crecimiento, dañan hígado y corazón, alteran el colesterol y el carácter; además, es dopaje."],
      ["Explica cómo la práctica mental (visualización) puede mejorar un gesto técnico sin moverse.", "Imaginar el movimiento activa zonas de la corteza premotora y motora y del cerebelo parecidas a las de la ejecución real, refuerza las conexiones del patrón motor y prepara la atención; combinada con la práctica física mejora el aprendizaje."],
    ],
  },
  glosario: [
    ["Impulso nervioso", "Señal eléctrica que recorre la neurona."],
    ["Potencial de acción", "Inversión breve de la carga de la membrana que forma el impulso."],
    ["Mielina", "Vaina aislante del axón que acelera el impulso."],
    ["Sinapsis", "Zona de comunicación entre una neurona y otra célula."],
    ["Neurotransmisor", "Sustancia química que transmite la señal en la sinapsis."],
    ["Encéfalo", "Parte del SNC dentro del cráneo: cerebro, cerebelo, tronco y diencéfalo."],
    ["Cerebelo", "Órgano que coordina el movimiento y el equilibrio."],
    ["Médula espinal", "Cordón nervioso dentro de la columna que conduce impulsos y elabora reflejos."],
    ["Arco reflejo", "Recorrido del impulso en un acto reflejo."],
    ["Propiocepción", "Percepción de la posición y el movimiento del propio cuerpo."],
    ["Huso neuromuscular", "Receptor que detecta la longitud del músculo."],
    ["Plasticidad neuronal", "Capacidad del sistema nervioso de cambiar con la experiencia."],
    ["Sistema simpático", "Rama autónoma que prepara para la acción."],
    ["Sistema parasimpático", "Rama autónoma que favorece el reposo y la digestión."],
    ["Hormona", "Mensajero químico que viaja por la sangre."],
    ["Hipófisis", "Glándula que controla a muchas otras glándulas endocrinas."],
    ["Insulina", "Hormona del páncreas que baja la glucosa en sangre."],
    ["Adrenalina", "Hormona suprarrenal de la respuesta rápida al estrés y al esfuerzo."],
  ],
  situacion: {
    titulo: "¿Cuánto tardas en reaccionar?",
    reto: "Vuestro grupo debe investigar los factores que influyen en el tiempo de reacción (tipo de estímulo, práctica, fatiga, sueño, distracciones) y proponer recomendaciones para deportistas, músicos o conductores.",
    pasos: [
      "Elegid una prueba de reacción (regla que cae, aplicación o web) y definid el protocolo de medida.",
      "Medid el tiempo de reacción ante estímulos visuales y sonoros y comparad la mano dominante y la no dominante.",
      "Estudiad el efecto de una variable: práctica (diez intentos), distracción (contar hacia atrás), fatiga o horas de sueño de la noche anterior.",
      "Calculad medias y representad los resultados en gráficas.",
      "Explicad los resultados con las fases del acto voluntario, la conducción nerviosa y el aprendizaje motor.",
    ],
    producto: "Un póster científico con hipótesis, método, resultados, conclusiones y una lista de recomendaciones prácticas basadas en los datos.",
    evaluacion: [
      "La investigación tiene una hipótesis clara y un método controlado.",
      "Los datos se recogen y analizan con rigor.",
      "Las conclusiones se explican con conceptos del sistema nervioso.",
      "Las recomendaciones son útiles y están basadas en las pruebas obtenidas.",
    ],
  },
  familias: [
    "Probad en casa el reflejo rotuliano con cuidado y comentad por qué ocurre sin querer.",
    "Jugad a atrapar una regla que cae y comparad los tiempos de reacción de toda la familia.",
    "Acordad un horario para dejar las pantallas antes de dormir y comprobad si se duerme mejor.",
    "Practicad juntos un minuto de respiración lenta cuando haya nervios antes de un examen o una actuación.",
  ],
  saberes: B.SAB("Los sistemas de coordinación y regulación: neurona, impulso nervioso y sinapsis; organización del sistema nervioso; encéfalo y médula; actos reflejos y voluntarios, propiocepción y aprendizaje motor; sistema nervioso autónomo; sistema endocrino y hormonas en la actividad física, el estrés y la salud"),
  ideas: [
    "Medir el tiempo de reacción con la prueba de la regla y calcular la distancia de caída con la cinemática.",
    "Comprobar la propiocepción tocándose la nariz con los ojos cerrados y tras girar sobre uno mismo.",
    "Disecar un encéfalo de cordero para identificar cerebro, cerebelo y tronco.",
    "Debatir un caso de dopaje hormonal en el deporte desde la salud y la ética.",
  ],
  fuentes: [
    B.FUENTES.WIKI("Sistema_nervioso", "Sistema nervioso"),
    B.FUENTES.WIKI("Sistema_endocrino", "Sistema endocrino"),
  ],
});
